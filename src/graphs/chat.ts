import { StateGraph, END } from "@langchain/langgraph";
import { ChatAnthropic } from "@langchain/anthropic";
import { TavilySearchResults } from "@langchain/community/tools/tavily_search";
import { BaseMessage, AIMessage } from "@langchain/core/messages";

interface GraphState {
  messages: BaseMessage[];
}

// Initialize graph with state type
const graph = new StateGraph<GraphState>({
  channels: {
    messages: {
      value: null,
      default: () => [],
    },
  },
});

const tools = [new TavilySearchResults({ maxResults: 2 })];
const llm = new ChatAnthropic({
  modelName: "claude-3-sonnet-20240229",
});
const llmWithTools = llm.bind({ tools });

// Define the model calling function
const callModel = {
  invoke: async (state: GraphState) => {
    const messages = state.messages;
    const response = await llmWithTools.invoke(messages);
    if (!(response instanceof AIMessage)) {
      throw new Error("Expected AIMessage response");
    }
    return { messages: [response] };
  },
};

// Define the routing function
function shouldContinue(state: GraphState) {
  const lastMessage = state.messages[state.messages.length - 1];
  if (!(lastMessage instanceof AIMessage)) {
    return END;
  }
  return lastMessage.additional_kwargs?.tool_calls ? "tools" : END;
}

// Build the graph
const toolExecutor = {
  invoke: async (state: GraphState) => {
    const lastMessage = state.messages[state.messages.length - 1];
    if (!(lastMessage instanceof AIMessage)) {
      throw new Error("Expected AIMessage");
    }
    const toolCall = lastMessage.additional_kwargs?.tool_calls?.[0];
    if (!toolCall) {
      throw new Error("No tool call found");
    }
    const result = await tools[0].invoke(toolCall.function.arguments);
    return { messages: [new AIMessage({ content: JSON.stringify(result) })] };
  },
};

// Add nodes and edges
graph.addNode("agent", callModel);
graph.addNode("tools", toolExecutor);
graph.addEdge("__start__", "agent");
graph.addConditionalEdges("agent", shouldContinue, {
  tools: "tools",
  [END]: END,
});
graph.addEdge("tools", "agent");

// Export graph configuration for LangGraph Studio
export const graphConfig = {
  nodes: [
    { id: "__start__", type: "start" },
    { id: "agent", type: "tool", data: { name: "Agent" } },
    { id: "tools", type: "tool", data: { name: "Tool Executor" } },
    { id: "__end__", type: "end" },
  ],
  edges: [
    { from: "__start__", to: "agent" },
    { from: "agent", to: "tools", condition: "tools" },
    { from: "agent", to: "__end__", condition: "end" },
    { from: "tools", to: "agent" },
  ],
};

export const app = graph.compile();
