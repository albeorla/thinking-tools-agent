import { StateGraph } from 'langgraph';
import { Agent } from '../types/agent';
import { Task } from '../types/task';
import { Tool } from '../types/tool';
import { assignTasks } from './nodes/taskAssignment';
import { executeAgent } from './nodes/agentExecution';
import { buildConsensus } from './nodes/consensus';

export interface ThreadState {
  thread_id: string;
  created_at: string;
  updated_at: string;
  metadata: Record<string, any>;
  status: 'idle' | 'busy' | 'interrupted' | 'error';
  values: Record<string, any>;
}

export interface CrewState {
  thread: ThreadState;
  agents: Agent[];
  tasks: Task[];
  tools: Tool[];
  currentAgent: Agent | null;
  currentTask: Task | null;
  taskResults: Record<string, any>;
  delegatedTasks: Record<string, Agent>;
  messages: {
    type: string;
    agentId?: string;
    taskId?: string;
    result?: any;
    error?: string;
  }[];
  finalOutput: any;
  checkpoint?: {
    thread_id: string;
    checkpoint_ns?: string;
    checkpoint_id?: string;
    checkpoint_map?: Record<string, any>;
  };
}

export interface CrewConfig {
  maxIterations?: number;
  delegationEnabled?: boolean;
  consensusRequired?: boolean;
  debugMode?: boolean;
  tags?: string[];
  recursion_limit?: number;
  configurable?: Record<string, any>;
  webhook?: string;
  interrupt_before?: string[] | '*';
  interrupt_after?: string[] | '*';
  stream_mode?: ('values' | 'messages' | 'messages-tuple' | 'updates' | 'events' | 'debug' | 'custom')[];
  stream_subgraphs?: boolean;
  on_disconnect?: 'cancel' | 'continue';
  feedback_keys?: string[];
  multitask_strategy?: 'reject' | 'rollback' | 'interrupt' | 'enqueue';
}

export function createCrewGraph(config: CrewConfig = {}) {
  const graph = new StateGraph<CrewState>({
    initialState: {
      thread: {
        thread_id: crypto.randomUUID(),
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        metadata: {},
        status: 'idle',
        values: {}
      },
      agents: [],
      tasks: [],
      tools: [],
      currentAgent: null,
      currentTask: null,
      taskResults: {},
      delegatedTasks: {},
      messages: [],
      finalOutput: null
    }
  });

  // Add nodes
  graph.addNode("assignTasks", assignTasks);
  graph.addNode("executeAgent", executeAgent);
  graph.addNode("buildConsensus", buildConsensus);

  // Node: Task Delegation
  graph.addNode("delegateTask", async (state: CrewState) => {
    // Implement task delegation logic
    return { state };
  });

  // Node: Result Aggregation
  graph.addNode("aggregateResults", async (state: CrewState) => {
    // Implement result aggregation logic
    return { 
      state: {
        ...state,
        thread: {
          ...state.thread,
          status: 'idle',
          updated_at: new Date().toISOString()
        },
        finalOutput: {
          results: state.taskResults,
          summary: "Task execution completed"
        }
      }
    };
  });

  // Define graph edges and flow
  graph.setEntryPoint("assignTasks");

  graph.addEdge("assignTasks", "executeAgent");
  graph.addConditionalEdges(
    "executeAgent",
    (state: CrewState) => {
      if (config.delegationEnabled && needsDelegation(state)) {
        return "delegateTask";
      }
      if (config.consensusRequired && needsConsensus(state)) {
        return "buildConsensus";
      }
      if (hasMoreTasks(state)) {
        return "assignTasks";
      }
      return "aggregateResults";
    }
  );
  graph.addEdge("delegateTask", "assignTasks");
  graph.addEdge("buildConsensus", "aggregateResults");

  return graph;
}

// Helper functions
function needsDelegation(state: CrewState): boolean {
  return false;
}

function needsConsensus(state: CrewState): boolean {
  return false;
}

function hasMoreTasks(state: CrewState): boolean {
  return state.tasks.some(task => 
    task.status === 'pending' || task.status === 'assigned'
  );
} 