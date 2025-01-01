import { ChatOpenAI } from "@langchain/openai";
import { AgentStep, AgentAction } from "@langchain/core/agents";
import { StateGraph, END, START, Annotation } from "@langchain/langgraph";
import { RunnableSequence } from "@langchain/core/runnables";
import { BaseMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { StructuredTool } from "@langchain/core/tools";

import { AerithAgent, ThinkingTool } from "../types";

interface AgentState {
  messages: BaseMessage[];
  steps: AgentStep[];
  thinkingTools: ThinkingTool[];
  currentTool?: ThinkingTool;
  confidence: number;
  iteration: number;
}

type AgentStateUpdate = Partial<AgentState>;

// Define state using Annotation API
const AgentStateAnnotation = Annotation.Root({
  messages: Annotation<BaseMessage[]>({
    value: (a, b) => [...a, ...b],
    default: () => []
  }),
  steps: Annotation<AgentStep[]>({
    value: (a, b) => [...a, ...b],
    default: () => []
  }),
  thinkingTools: Annotation<ThinkingTool[]>({
    value: (a, b) => [...a, ...b],
    default: () => []
  }),
  currentTool: Annotation<ThinkingTool | undefined>({
    value: (_, b) => b,
    default: () => undefined
  }),
  confidence: Annotation<number>({
    value: (_, b) => b,
    default: () => 0
  }),
  iteration: Annotation<number>({
    value: (_, b) => b,
    default: () => 0
  })
});

type NodeNames = typeof START | typeof END | "select_tool" | "apply_tool" | "take_action";

export class AerithAgentExecutor {
  private agent: AerithAgent;
  private tools: StructuredTool[];
  private thinkingTools: ThinkingTool[];
  private model: ChatOpenAI;
  private graph: StateGraph<typeof AgentStateAnnotation, AgentState, AgentStateUpdate, NodeNames>;

  constructor(
    agent: AerithAgent,
    tools: StructuredTool[],
    thinkingTools: ThinkingTool[],
    model?: ChatOpenAI
  ) {
    this.agent = agent;
    this.tools = tools;
    this.thinkingTools = thinkingTools;
    this.model = model || new ChatOpenAI({ modelName: "gpt-4-turbo-preview" });
    this.graph = this.createGraph();
  }

  private createGraph(): StateGraph<typeof AgentStateAnnotation, AgentState, AgentStateUpdate, NodeNames> {
    const graph = new StateGraph<typeof AgentStateAnnotation, AgentState, AgentStateUpdate, NodeNames>({
      channels: {
        messages: {
          value: (a, b) => [...a, ...b],
          default: () => []
        },
        steps: {
          value: (a, b) => [...a, ...b],
          default: () => []
        },
        thinkingTools: {
          value: (a, b) => [...a, ...b],
          default: () => []
        },
        currentTool: {
          value: (_, b) => b,
          default: () => undefined
        },
        confidence: {
          value: (_, b) => b,
          default: () => 0
        },
        iteration: {
          value: (_, b) => b,
          default: () => 0
        }
      }
    });

    // Node for selecting thinking tool
    const selectThinkingTool = RunnableSequence.from([
      this.createThinkingToolSelector(),
      async (state: AgentState): Promise<AgentStateUpdate> => {
        return {
          currentTool: state.currentTool,
          messages: [...state.messages, new SystemMessage({
            content: `Selected thinking tool: ${state.currentTool?.name}`,
            additional_kwargs: {
              thinkingTool: state.currentTool,
              confidence: state.confidence,
              iteration: state.iteration
            }
          })]
        };
      }
    ]);

    // Node for applying thinking tool
    const applyThinkingTool = RunnableSequence.from([
      this.createThinkingToolApplier(),
      async (state: AgentState): Promise<AgentStateUpdate> => {
        return {
          confidence: state.confidence,
          messages: state.messages
        };
      }
    ]);

    // Node for taking action
    const takeAction = RunnableSequence.from([
      this.createActionTaker(),
      async (state: AgentState): Promise<AgentStateUpdate> => {
        return {
          steps: state.steps,
          messages: state.messages,
          iteration: state.iteration + 1
        };
      }
    ]);

    // Add nodes and edges
    graph
      .addNode("select_tool", selectThinkingTool)
      .addNode("apply_tool", applyThinkingTool)
      .addNode("take_action", takeAction)
      .addEdge(START, "select_tool")
      .addEdge("select_tool", "apply_tool")
      .addEdge("apply_tool", "take_action");

    // Add conditional edges
    graph.addConditionalEdges(
      "take_action",
      async (state: AgentState): Promise<string> => {
        return state.iteration < 5 && state.confidence < 0.95 ? "continue" : "end";
      },
      {
        continue: "select_tool",
        end: END
      }
    );

    return graph;
  }

  private createThinkingToolSelector() {
    return async (state: AgentState): Promise<AgentStateUpdate> => {
      // Logic for selecting thinking tool based on current state
      return {
        currentTool: state.thinkingTools[0],
        confidence: 0
      };
    };
  }

  private createThinkingToolApplier() {
    return async (state: AgentState): Promise<AgentStateUpdate> => {
      // Logic for applying thinking tool and updating confidence
      return {
        confidence: state.confidence + 0.2
      };
    };
  }

  private createActionTaker() {
    return async (state: AgentState): Promise<AgentStateUpdate> => {
      // Logic for executing actions and updating steps
      const action: AgentAction = {
        tool: state.currentTool?.name || "",
        toolInput: "",
        log: `Applied thinking tool: ${state.currentTool?.name}`
      };
      return {
        steps: [...state.steps, {
          action,
          observation: "Applied thinking tool"
        }]
      };
    };
  }

  public async execute(input: string): Promise<AgentStep[]> {
    const runnable = await this.graph.compile();
    const finalState = await runnable.invoke({
      messages: [new HumanMessage(input)],
      steps: [],
      thinkingTools: this.thinkingTools,
      currentTool: undefined,
      confidence: 0,
      iteration: 0
    });

    return finalState.steps;
  }
} 