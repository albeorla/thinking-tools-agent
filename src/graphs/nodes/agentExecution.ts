import { CrewState } from '../crew';
import { Agent } from '../../types/agent';
import { Task } from '../../types/task';
import { Tool } from '../../types/tool';

interface RunState {
  run_id: string;
  thread_id: string;
  assistant_id: string;
  created_at: string;
  updated_at: string;
  status: 'pending' | 'error' | 'success' | 'timeout' | 'interrupted';
  metadata: Record<string, any>;
  kwargs: Record<string, any>;
  multitask_strategy: 'reject' | 'rollback' | 'interrupt' | 'enqueue';
}

export async function executeAgent(state: CrewState) {
  const { currentAgent, currentTask, tools, thread } = state;
  
  if (!currentAgent || !currentTask) {
    return { state };
  }

  try {
    // Create run state
    const runState: RunState = {
      run_id: crypto.randomUUID(),
      thread_id: thread.thread_id,
      assistant_id: currentAgent.assistant_id,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
      status: 'pending',
      metadata: {
        task_id: currentTask.id,
        agent_role: currentAgent.config.role
      },
      kwargs: {},
      multitask_strategy: 'reject'
    };

    // Update task and thread status
    currentTask.status = 'in_progress';
    currentTask.startTime = new Date();
    thread.status = 'busy';
    thread.updated_at = new Date().toISOString();

    // Prepare agent context
    const context = prepareAgentContext(currentAgent, currentTask, tools);
    
    // Execute agent's task
    const result = await executeAgentTask(currentAgent, currentTask, context);

    // Update run state
    runState.status = 'success';
    runState.updated_at = new Date().toISOString();

    // Update task completion
    currentTask.status = 'completed';
    currentTask.result = result;
    currentTask.endTime = new Date();

    // Update agent status
    currentAgent.status = 'idle';
    currentAgent.workload--;
    currentAgent.lastExecution = new Date();

    // Record the result
    const taskResults = {
      ...state.taskResults,
      [currentTask.id]: result
    };

    return {
      state: {
        ...state,
        thread: {
          ...thread,
          status: 'idle',
          updated_at: new Date().toISOString(),
          values: {
            ...thread.values,
            [`run_${runState.run_id}`]: result
          }
        },
        taskResults,
        currentAgent: null,
        currentTask: null,
        messages: [
          ...state.messages,
          {
            type: 'task_completion',
            agentId: currentAgent.id,
            taskId: currentTask.id,
            result,
            run: runState
          }
        ]
      }
    };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    // Update task and thread status
    currentTask.status = 'failed';
    currentTask.error = errorMessage;
    currentAgent.status = 'idle';
    currentAgent.workload--;

    return {
      state: {
        ...state,
        thread: {
          ...thread,
          status: 'error',
          updated_at: new Date().toISOString()
        },
        currentAgent: null,
        currentTask: null,
        messages: [
          ...state.messages,
          {
            type: 'task_error',
            agentId: currentAgent.id,
            taskId: currentTask.id,
            error: errorMessage
          }
        ]
      }
    };
  }
}

function prepareAgentContext(agent: Agent, task: Task, tools: Tool[]) {
  return {
    role: agent.config.role,
    goal: agent.config.goal,
    backstory: agent.config.backstory,
    task: {
      name: task.config.name,
      description: task.config.description,
      expectedOutput: task.config.expectedOutput
    },
    availableTools: tools.map(tool => ({
      name: tool.config.name,
      description: tool.config.description,
      parameters: tool.config.parameters
    })),
    memory: agent.memory || []
  };
}

async function executeAgentTask(agent: Agent, task: Task, context: any) {
  // Here we would integrate with an LLM to:
  // 1. Plan the task execution
  // 2. Use tools as needed
  // 3. Generate the result
  
  // For now, return a placeholder
  return {
    status: 'success',
    output: `Executed task ${task.config.name} as ${agent.config.role}`
  };
} 