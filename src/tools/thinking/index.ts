import { ThinkingTool } from "../../types";

export const abstractionLadder: ThinkingTool = {
  name: "Abstraction Ladder",
  description: "Frame problems at different levels of abstraction to find innovative solutions",
  type: "abstraction-ladder",
  steps: [
    "Start with initial problem statement",
    "Ask 'why' questions to get more abstract",
    "Ask 'how' questions to get more concrete"
  ],
  questions: [
    "What's the current problem statement?",
    "Why do we need to solve this? (Move up)",
    "How might we solve this specifically? (Move down)"
  ],
  example: "Problem: Design better can opener → Why? Get food from cans → How? Make opening more convenient"
};

export const confidenceSpeedQuality: ThinkingTool = {
  name: "Confidence-Speed-Quality Balance",
  description: "Determine trade-offs between speed and quality based on confidence levels",
  type: "confidence-speed",
  steps: [
    "Assess confidence in problem importance",
    "Assess confidence in solution correctness",
    "Choose speed vs quality based on confidence levels"
  ],
  questions: [
    "How confident are we in the problem's importance?",
    "How confident are we in our solution?",
    "Which should we prioritize based on our confidence?"
  ],
  example: "Low confidence in problem → Focus on speed; High confidence in both → Focus on quality"
};

export const firstPrinciples: ThinkingTool = {
  name: "First Principles",
  description: "Break down complex problems into fundamental truths and rebuild solutions",
  type: "first-principles",
  steps: [
    "Identify the problem",
    "Break down to basic truths",
    "Rebuild solution from fundamentals"
  ],
  questions: [
    "What are the fundamental truths we know about this?",
    "Can this be broken down further?",
    "What solution can we build from these basics?"
  ],
  example: "Break down problem into basic elements, then reconstruct innovative solution"
};

// ... More thinking tools will be implemented

const tools: Record<ThinkingTool["type"], ThinkingTool> = {
  "abstraction-ladder": abstractionLadder,
  "confidence-speed": confidenceSpeedQuality,
  "first-principles": firstPrinciples,
  // Placeholder null values for unimplemented tools
  "inversion": null as unknown as ThinkingTool,
  "ladder-inference": null as unknown as ThinkingTool,
  "minto-pyramid": null as unknown as ThinkingTool,
  "ooda-loop": null as unknown as ThinkingTool,
  "productive-thinking": null as unknown as ThinkingTool,
  "second-order": null as unknown as ThinkingTool
};

export function getThinkingTool(type: ThinkingTool["type"]): ThinkingTool | undefined {
  return tools[type];
}

export function getAllThinkingTools(): ThinkingTool[] {
  return Object.values(tools).filter(Boolean);
} 