import { CrewState } from '../crew';
import { Agent } from '../../types/agent';
import { Task } from '../../types/task';

interface ConsensusVote {
  agentId: string;
  vote: 'approve' | 'reject';
  reason: string;
}

interface ConsensusResult {
  approved: boolean;
  votes: ConsensusVote[];
  finalDecision: string;
}

export async function buildConsensus(state: CrewState) {
  const { agents, taskResults, currentTask } = state;
  
  if (!currentTask) {
    return { state };
  }

  try {
    // Collect votes from all agents
    const votes = await collectVotes(agents, currentTask, taskResults);
    
    // Analyze votes and make decision
    const consensusResult = analyzeConsensus(votes);
    
    // Update task based on consensus
    if (consensusResult.approved) {
      currentTask.status = 'completed';
    } else {
      currentTask.status = 'failed';
      currentTask.error = 'Consensus not reached';
    }

    return {
      state: {
        ...state,
        currentTask: null,
        messages: [
          ...state.messages,
          {
            type: 'consensus_result',
            taskId: currentTask.id,
            result: consensusResult
          }
        ]
      }
    };
  } catch (error) {
    return {
      state: {
        ...state,
        currentTask: null,
        messages: [
          ...state.messages,
          {
            type: 'consensus_error',
            taskId: currentTask.id,
            error: error instanceof Error ? error.message : 'Unknown error'
          }
        ]
      }
    };
  }
}

async function collectVotes(agents: Agent[], task: Task, results: Record<string, any>): Promise<ConsensusVote[]> {
  // Here we would:
  // 1. Present the task results to each agent
  // 2. Ask for their vote and reasoning
  // 3. Collect and return all votes
  
  // For now, return simulated votes
  return agents.map(agent => ({
    agentId: agent.id,
    vote: Math.random() > 0.3 ? 'approve' : 'reject',
    reason: `${agent.config.role}'s perspective on task ${task.config.name}`
  }));
}

function analyzeConsensus(votes: ConsensusVote[]): ConsensusResult {
  const approvalCount = votes.filter(v => v.vote === 'approve').length;
  const approvalRatio = approvalCount / votes.length;
  
  return {
    approved: approvalRatio >= 0.7, // 70% majority required
    votes,
    finalDecision: approvalRatio >= 0.7 
      ? 'Consensus reached with majority approval'
      : 'Consensus failed to reach required majority'
  };
} 