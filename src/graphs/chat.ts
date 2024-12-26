import { AIMessage } from "@langchain/core/messages";
import { MessagesAnnotation, StateGraph } from "@langchain/langgraph";
import { ToolNode } from "@langchain/langgraph/prebuilt";
import { ChatAnthropic } from "@langchain/anthropic";
import { DynamicStructuredTool } from "@langchain/core/tools";
import { z } from "zod";
import { ThinkingToolDriver } from "../core/drivers/thinking-tool-driver";
import { thinkingTools } from "../data/tools/tool-definitions";

// Initialize the thinking tool driver
const driver = new ThinkingToolDriver(thinkingTools);

// Convert thinking tools to LangChain structured tools
const TOOLS = thinkingTools.map(
  (tool) =>
    new DynamicStructuredTool({
      name: tool.name.toLowerCase().replace(/\s+/g, "_"),
      description: `${tool.description}. Use case: ${tool.useCase}`,
      schema: z.object({
        input: z.string().describe("The problem or situation to analyze"),
      }),
      func: async ({ input }: { input: string }) => {
        const state = driver.process({
          messages: [{ type: "user", content: input }],
          confidence: 0,
        });
        return JSON.stringify(state);
      },
    }),
);

// Initialize the model
const model = new ChatAnthropic({
  modelName: "claude-3-sonnet-20240229",
  temperature: 0.7,
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  streaming: true,
});

// Define the function that calls the model
async function callModel(
  state: typeof MessagesAnnotation.State,
): Promise<typeof MessagesAnnotation.Update> {
  const modelWithTools = model.bindTools(TOOLS);

  const response = await modelWithTools.invoke([
    {
      role: "system",
      content:
        "You are a helpful AI assistant that uses thinking tools to solve problems effectively. You have access to various thinking tools like Abstraction Laddering, OODA Loop, First Principles, etc. When appropriate, use these tools to help analyze and solve problems.",
    },
    ...state.messages,
  ]);

  return { messages: [response] };
}

// Define the function that determines whether to continue or not
function routeModelOutput(state: typeof MessagesAnnotation.State): string {
  const messages = state.messages;
  const lastMessage = messages[messages.length - 1];
  // If the LLM is invoking tools, route there.
  if ((lastMessage as AIMessage)?.tool_calls?.length || 0 > 0) {
    return "tools";
  }
  // Otherwise end the graph.
  return "__end__";
}

// Define a new graph with MessagesAnnotation
const workflow = new StateGraph(MessagesAnnotation)
  // Define the two nodes we will cycle between
  .addNode("callModel", callModel)
  .addNode("tools", new ToolNode(TOOLS))
  // Set the entrypoint as `callModel`
  // This means that this node is the first one called
  .addEdge("__start__", "callModel")
  .addConditionalEdges(
    // First, we define the edges' source node. We use `callModel`.
    // This means these are the edges taken after the `callModel` node is called.
    "callModel",
    // Next, we pass in the function that will determine the sink node(s), which
    // will be called after the source node is called.
    routeModelOutput,
  )
  // This means that after `tools` is called, `callModel` node is called next.
  .addEdge("tools", "callModel");

// Finally, we compile it!
// This compiles it into a graph you can invoke and deploy.
const app = workflow.compile();

export { app };
