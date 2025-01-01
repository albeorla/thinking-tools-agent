import { StateGraph, END, START, type StateGraphArgs } from "@langchain/langgraph";
import { RunnableSequence } from "@langchain/core/runnables";
import { BaseMessage, HumanMessage, SystemMessage } from "@langchain/core/messages";
import { AgentStep, AgentAction } from "@langchain/core/agents";

import { AerithCrew, AerithProcess, ProcessType, TaskResult, AerithAgent } from "../types";
import { AerithAgentExecutor } from "./agent";

type CrewNodeNames = typeof START | typeof END | `agent_${string}`;

/**
 * The internal state of the Crew execution process.
 */
interface CrewState {
  messages: BaseMessage[];
  results: TaskResult[];
  currentAgent: string;
  processType: ProcessType;
}

type CrewStateUpdate = Partial<CrewState>;

// Define channel reducers for merging state updates
const channelConfig: StateGraphArgs<CrewState> = {
  channels: {
    messages: {
      value: (a: BaseMessage[], b: BaseMessage[]) => [...a, ...b],
      default: () => []
    },
    results: {
      value: (a: TaskResult[], b: TaskResult[]) => [...a, ...b],
      default: () => []
    },
    currentAgent: {
      value: (_: string, b: string) => b,
      default: () => ""
    },
    processType: {
      value: (_: ProcessType, b: ProcessType) => b,
      default: () => "sequential" as ProcessType
    }
  }
};

export class AerithCrewExecutor {
  private crew: AerithCrew;
  private process: AerithProcess;
  public graph: StateGraph<CrewState, CrewState, CrewStateUpdate, CrewNodeNames>;

  constructor(crew: AerithCrew, process: AerithProcess) {
    this.crew = crew;
    this.process = process;
    this.graph = this.createGraph();
  }

  private createGraph(): StateGraph<CrewState, CrewState, CrewStateUpdate, CrewNodeNames> {
    const graph = new StateGraph<CrewState, CrewState, CrewStateUpdate, CrewNodeNames>(channelConfig);

    // Add nodes based on process type
    if (this.process.type === "sequential") {
      this.addSequentialNodes(graph);
    } else if (this.process.type === "hierarchical") {
      this.addHierarchicalNodes(graph);
    } else {
      this.addConsensusNodes(graph);
    }

    return graph;
  }

  /**
   * Adds a sequence of nodes where each agent runs in turn, passing the updated
   * state (messages/results) to the next agent in order.
   * @param graph The StateGraph where nodes and edges will be added.
   */
  private addSequentialNodes(graph: StateGraph<CrewState, CrewState, CrewStateUpdate, CrewNodeNames>) {
    // Sequential process implementation
    const agents = this.crew.agents;
    let prevNode: CrewNodeNames = START;

    for (const agent of agents) {
      const node = RunnableSequence.from([
        this.createAgentExecutor(agent),
        async (state: CrewState): Promise<CrewStateUpdate> => {
          const lastMessage = state.messages[state.messages.length - 1];
          const result = await this.executeAgent(agent, lastMessage);

          // Convert AgentAction to string by taking the name/type
          const thinkingToolsUsed = result
            .map(s => s.action)
            .filter((action): action is AgentAction => typeof action !== "string")
            .map(action => action.tool)
            .filter(tool => tool.startsWith("think_"));

          return {
            results: [
              ...state.results,
              {
                agentName: agent.name,
                taskDescription:
                  this.crew.tasks.find(t => t.agent.name === agent.name)?.description || "",
                output: result[result.length - 1]?.observation || "",
                steps: result,
                thinkingToolsUsed
              }
            ],
            currentAgent: agent.name,
            messages: [
              ...state.messages,
              new SystemMessage({
                content: `Agent ${agent.name} completed task`,
                additional_kwargs: { agentName: agent.name }
              })
            ]
          };
        }
      ]);

      const nodeName = `agent_${agent.name}` as const;
      graph.addNode(nodeName, node);
      graph.addEdge(prevNode, nodeName);
      prevNode = nodeName;
    }

    graph.addEdge(prevNode, "__end__" as const);
  }

  /**
   * Creates a simple executor that returns the current state unchanged.
   * @param agent The agent for whom the executor is being created.
   * @returns A function that receives the current crew state and returns it unchanged.
   */
  private createAgentExecutor(agent: AerithAgent) {
    return async (state: CrewState): Promise<CrewState> => {
      return state;
    };
  }

  /**
   * Invokes the specified agent using the AerithAgentExecutor. It feeds the agent
   * with the last message content and returns the steps performed (observations, actions, etc.).
   * @param agent The agent to be executed.
   * @param message The last message from the state (usually from the previous agent/human).
   * @returns A list of steps taken by the agent (e.g., chain of thought, tools used).
   */
  private async executeAgent(agent: AerithAgent, message: BaseMessage): Promise<AgentStep[]> {
    const executor = new AerithAgentExecutor(
      agent,
      this.crew.tasks.find(t => t.agent.name === agent.name)?.tools || [],
      this.crew.tasks.find(t => t.agent.name === agent.name)?.thinkingTools || []
    );

    return executor.execute(
      typeof message.content === "string" ? message.content : JSON.stringify(message.content)
    );
  }

  /**
   * Implements a hierarchical process. The first agent is treated as a "manager" who runs first,
   * then each subsequent agent is run, and finally the "manager" agent runs again to finalize.
   * @param graph The StateGraph where nodes and edges will be added.
   */
  private addHierarchicalNodes(graph: StateGraph<CrewState, CrewState, CrewStateUpdate, CrewNodeNames>) {
    // Identify the first agent as the manager
    const [managerAgent, ...subAgents] = this.crew.agents;

    let prevNode: CrewNodeNames = START;

    // Manager's initial node
    const managerNodeStart = RunnableSequence.from([
      this.createAgentExecutor(managerAgent),
      async (state: CrewState): Promise<CrewStateUpdate> => {
        const lastMessage = state.messages[state.messages.length - 1];
        const result = await this.executeAgent(managerAgent, lastMessage);

        const thinkingToolsUsed = result
          .map(s => s.action)
          .filter((action): action is AgentAction => typeof action !== "string")
          .map(action => action.tool)
          .filter(tool => tool.startsWith("think_"));

        return {
          results: [
            ...state.results,
            {
              agentName: managerAgent.name,
              taskDescription:
                this.crew.tasks.find(t => t.agent.name === managerAgent.name)?.description || "",
              output: result[result.length - 1]?.observation || "",
              steps: result,
              thinkingToolsUsed
            }
          ],
          currentAgent: managerAgent.name,
          messages: [
            ...state.messages,
            new SystemMessage({
              content: `Manager Agent ${managerAgent.name} reviewed the task`,
              additional_kwargs: { agentName: managerAgent.name }
            })
          ]
        };
      }
    ]);

    const managerNodeStartName = `agent_${managerAgent.name}` as const;
    graph.addNode(managerNodeStartName, managerNodeStart);
    graph.addEdge(prevNode, managerNodeStartName);
    prevNode = managerNodeStartName;

    // Each sub-agent runs
    for (const agent of subAgents) {
      const node = RunnableSequence.from([
        this.createAgentExecutor(agent),
        async (state: CrewState): Promise<CrewStateUpdate> => {
          const lastMessage = state.messages[state.messages.length - 1];
          const result = await this.executeAgent(agent, lastMessage);

          const thinkingToolsUsed = result
            .map(s => s.action)
            .filter((action): action is AgentAction => typeof action !== "string")
            .map(action => action.tool)
            .filter(tool => tool.startsWith("think_"));

          return {
            results: [
              ...state.results,
              {
                agentName: agent.name,
                taskDescription:
                  this.crew.tasks.find(t => t.agent.name === agent.name)?.description || "",
                output: result[result.length - 1]?.observation || "",
                steps: result,
                thinkingToolsUsed
              }
            ],
            currentAgent: agent.name,
            messages: [
              ...state.messages,
              new SystemMessage({
                content: `Agent ${agent.name} completed sub-task`,
                additional_kwargs: { agentName: agent.name }
              })
            ]
          };
        }
      ]);

      const nodeName = `agent_${agent.name}` as const;
      graph.addNode(nodeName, node);
      graph.addEdge(prevNode, nodeName);
      prevNode = nodeName;
    }

    // Manager's final node (wrap-up)
    const managerNodeEnd = RunnableSequence.from([
      this.createAgentExecutor(managerAgent),
      async (state: CrewState): Promise<CrewStateUpdate> => {
        const lastMessage = state.messages[state.messages.length - 1];
        const result = await this.executeAgent(managerAgent, lastMessage);

        const thinkingToolsUsed = result
          .map(s => s.action)
          .filter((action): action is AgentAction => typeof action !== "string")
          .map(action => action.tool)
          .filter(tool => tool.startsWith("think_"));

        return {
          results: [
            ...state.results,
            {
              agentName: managerAgent.name,
              taskDescription:
                this.crew.tasks.find(t => t.agent.name === managerAgent.name)?.description || "",
              output: result[result.length - 1]?.observation || "",
              steps: result,
              thinkingToolsUsed
            }
          ],
          currentAgent: managerAgent.name,
          messages: [
            ...state.messages,
            new SystemMessage({
              content: `Manager Agent ${managerAgent.name} finalized the tasks`,
              additional_kwargs: { agentName: managerAgent.name }
            })
          ]
        };
      }
    ]);

    const managerNodeEndName = `agent_${managerAgent.name}_final` as const;
    graph.addNode(managerNodeEndName, managerNodeEnd);
    graph.addEdge(prevNode, managerNodeEndName);
    prevNode = managerNodeEndName;

    graph.addEdge(prevNode, "__end__" as const);
  }

  /**
   * Implements a consensus process. Each agent is run on the same input, appending
   * their findings to the state. A final aggregator step combines these findings into
   * a single consensus message.
   * @param graph The StateGraph where nodes and edges will be added.
   */
  private addConsensusNodes(graph: StateGraph<CrewState, CrewState, CrewStateUpdate, CrewNodeNames>) {
    // Run all agents in turn on the same original input
    const agents = this.crew.agents;
    let prevNode: CrewNodeNames = START;

    for (const agent of agents) {
      const node = RunnableSequence.from([
        this.createAgentExecutor(agent),
        async (state: CrewState): Promise<CrewStateUpdate> => {
          const lastMessage = state.messages[0]; // Use the original input for each agent
          const result = await this.executeAgent(agent, lastMessage);

          const thinkingToolsUsed = result
            .map(s => s.action)
            .filter((action): action is AgentAction => typeof action !== "string")
            .map(action => action.tool)
            .filter(tool => tool.startsWith("think_"));

          return {
            results: [
              ...state.results,
              {
                agentName: agent.name,
                taskDescription:
                  this.crew.tasks.find(t => t.agent.name === agent.name)?.description || "",
                output: result[result.length - 1]?.observation || "",
                steps: result,
                thinkingToolsUsed
              }
            ],
            currentAgent: agent.name,
            messages: [
              ...state.messages,
              new SystemMessage({
                content: `Agent ${agent.name} provided input for consensus`,
                additional_kwargs: { agentName: agent.name }
              })
            ]
          };
        }
      ]);

      const nodeName = `agent_${agent.name}` as const;
      graph.addNode(nodeName, node);
      graph.addEdge(prevNode, nodeName);
      prevNode = nodeName;
    }

    // Final aggregator node to produce a consensus from all agents' outputs
    const aggregatorNode = RunnableSequence.from([
      (state: CrewState) => state, // Input transformer - pass through state unchanged
      async (state: CrewState): Promise<CrewStateUpdate> => {
        // Simple aggregator: gather all outputs into one summary
        const consensusSummary = state.results
          .map(result => `${result.agentName}: ${result.output}`)
          .join("\n");

        return {
          messages: [
            ...state.messages,
            new SystemMessage({
              content: `Consensus Summary:\n${consensusSummary}`,
              additional_kwargs: { consensus: true }
            })
          ]
        };
      }
    ]);

    const aggregatorNodeName = `agent_consensus_aggregator` as const;
    graph.addNode(aggregatorNodeName, aggregatorNode);
    graph.addEdge(prevNode, aggregatorNodeName);
    graph.addEdge(aggregatorNodeName, "__end__" as const);
  }

  /**
   * Executes the crew process by compiling the graph and invoking
   * it with the user input as the first message.
   * @param input The user input/message that starts the process.
   * @returns A list of TaskResult objects containing each agent's final output.
   */
  public async execute(input: string): Promise<TaskResult[]> {
    const runnable = await this.graph.compile();
    const finalState = await runnable.invoke({
      messages: [new HumanMessage(input)],
      results: [],
      currentAgent: "",
      processType: this.process.type
    });

    return finalState.results;
  }
}