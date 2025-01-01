import { CrewState } from '../crew';
import { Agent } from '../../types/agent';
import { Task } from '../../types/task';

export async function assignTasks(state: CrewState) {
  const { agents, tasks } = state;
  const availableAgents = agents.filter(agent => agent.status === 'idle');
  const pendingTasks = tasks.filter(task => task.status === 'pending');

  // Sort tasks by priority and dependencies
  const sortedTasks = sortTasksByPriority(pendingTasks);
  
  // Match tasks with suitable agents
  for (const task of sortedTasks) {
    const bestAgent = findBestAgent(task, availableAgents);
    if (bestAgent) {
      task.status = 'assigned';
      task.assignedAgent = bestAgent;
      bestAgent.status = 'busy';
      bestAgent.workload++;
    }
  }

  return {
    state: {
      ...state,
      currentTask: sortedTasks.find(t => t.status === 'assigned'),
      currentAgent: sortedTasks.find(t => t.status === 'assigned')?.assignedAgent || null
    }
  };
}

function sortTasksByPriority(tasks: Task[]): Task[] {
  return tasks.sort((a, b) => {
    // First sort by dependencies
    const aHasDeps = a.dependencies?.length || 0;
    const bHasDeps = b.dependencies?.length || 0;
    if (aHasDeps !== bHasDeps) {
      return aHasDeps - bHasDeps;
    }
    
    // Then sort by priority
    const aPriority = a.config.priority || 0;
    const bPriority = b.config.priority || 0;
    return bPriority - aPriority;
  });
}

function findBestAgent(task: Task, agents: Agent[]): Agent | null {
  // Filter agents by required capabilities
  const capableAgents = agents.filter(agent => 
    !task.config.requiredCapabilities ||
    task.config.requiredCapabilities.every(cap => 
      agent.capabilities.includes(cap)
    )
  );

  if (!capableAgents.length) {
    return null;
  }

  // Sort by workload and last execution time
  return capableAgents.sort((a, b) => {
    if (a.workload !== b.workload) {
      return a.workload - b.workload;
    }
    const aLastExec = a.lastExecution?.getTime() || 0;
    const bLastExec = b.lastExecution?.getTime() || 0;
    return aLastExec - bLastExec;
  })[0];
} 