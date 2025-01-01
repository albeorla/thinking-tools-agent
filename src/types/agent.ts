import { Tool } from './tool';

export interface AgentConfig {
  name: string;
  role: string;
  goal: string;
  backstory?: string;
  memory?: boolean;
  verbose?: boolean;
  tags?: string[];
  recursion_limit?: number;
  configurable?: Record<string, any>;
}

export interface Agent {
  id: string;
  assistant_id: string;
  graph_id: string;
  config: AgentConfig;
  tools: Tool[];
  capabilities: string[];
  workload: number;
  status: 'idle' | 'busy' | 'blocked';
  memory?: any[];
  lastExecution?: Date;
  created_at?: string;
  updated_at?: string;
  metadata: Record<string, any>;
  version?: number;
} 