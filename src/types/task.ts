import { Agent } from './agent';

export interface TaskConfig {
  name: string;
  description: string;
  expectedOutput: string;
  requiredCapabilities?: string[];
  priority?: number;
  timeoutMinutes?: number;
}

export interface Task {
  id: string;
  config: TaskConfig;
  status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'failed';
  assignedAgent?: Agent;
  dependencies?: Task[];
  result?: any;
  startTime?: Date;
  endTime?: Date;
  error?: string;
} 