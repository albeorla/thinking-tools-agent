import { ThinkingTool, ToolType } from "../../core/types";

export const thinkingTools: ThinkingTool[] = [
  {
    name: "Abstraction Laddering",
    type: ToolType.ProblemSolving,
    description:
      "Frame problems at different levels of abstraction by moving up and down a conceptual ladder",
    characteristics: [
      "Problem needs reframing",
      "Multiple perspectives needed",
      "Scope flexibility required",
      "Problem definition is unclear",
    ],
    useCase:
      "When you need to reframe a problem or explore different levels of problem-solving, from abstract to concrete",
    process: [
      "Start with initial problem statement",
      'Ask "why" questions to move up (more abstract)',
      'Ask "how" questions to move down (more concrete)',
      "Explore different problem statements at each level",
    ],
    confidenceFactors: [
      "Problem has clear hierarchical aspects",
      "Need for both strategic and tactical thinking",
      "Multiple stakeholders with different viewpoints",
      "Initial problem statement feels too narrow or too broad",
    ],
  },
  {
    name: "OODA Loop",
    type: ToolType.DecisionMaking,
    description:
      "Framework for making rapid decisions in dynamic, competitive environments with incomplete information",
    characteristics: [
      "Time-sensitive decision making",
      "Incomplete information",
      "Competitive environment",
      "Need for continuous adaptation",
    ],
    useCase:
      "When quick decisions are needed in rapidly changing situations, especially with competitive pressure",
    process: [
      "Observe: Gather available information",
      "Orient: Analyze and synthesize data",
      "Decide: Choose course of action",
      "Act: Implement decision and observe results",
    ],
    confidenceFactors: [
      "Time pressure exists",
      "Competitive situation",
      "Information is partial or changing",
      "Need for iterative improvement",
    ],
  },
  {
    name: "First Principles",
    type: ToolType.ProblemSolving,
    description:
      "Break down complex problems into fundamental truths and rebuild innovative solutions",
    characteristics: [
      "Complex problem",
      "Need for innovation",
      "Challenging assumptions",
      "Root cause analysis",
    ],
    useCase:
      "When you need to challenge existing assumptions and create innovative solutions by understanding fundamental truths",
    process: [
      "Identify the problem",
      "Break down to basic truths",
      "Challenge assumptions",
      "Rebuild solution from fundamentals",
    ],
    confidenceFactors: [
      "Problem involves many assumptions",
      "Traditional solutions are inadequate",
      "Need for fundamental innovation",
      "Complex system or process",
    ],
  },
  {
    name: "Second Order Thinking",
    type: ToolType.DecisionMaking,
    description:
      "Consider the long-term and cascading consequences of decisions beyond immediate effects",
    characteristics: [
      "Long-term decision making",
      "Complex consequences",
      "Strategic planning",
      "Impact analysis",
    ],
    useCase:
      "When making decisions that could have significant long-term or cascading effects beyond the immediate outcome",
    process: [
      "Identify immediate effects",
      'For each effect, ask "And then what?"',
      "Consider consequences at different time scales",
      "Evaluate both positive and negative impacts",
    ],
    confidenceFactors: [
      "Decision has long-term implications",
      "Multiple stakeholders affected",
      "Complex system interactions",
      "Strategic importance",
    ],
  },
  {
    name: "Ladder of Inference",
    type: ToolType.DecisionMaking,
    description:
      "Avoid jumping to conclusions by examining the steps in your reasoning process",
    characteristics: [
      "Decision validation needed",
      "Potential bias present",
      "Complex reasoning chain",
      "Need for objective analysis",
    ],
    useCase:
      "When you need to validate your reasoning process or challenge assumptions in decision making",
    process: [
      "Identify current position in reasoning",
      "Work down the ladder (Actions → Available Data)",
      "Question each step of reasoning",
      "Rebuild reasoning from bottom up",
    ],
    confidenceFactors: [
      "Quick conclusions being made",
      "Important decision at stake",
      "Multiple interpretations possible",
      "Need for thorough analysis",
    ],
  },
  {
    name: "Minto Pyramid",
    type: ToolType.Communication,
    description:
      "Structure communication in a top-down manner for clarity and efficiency",
    characteristics: [
      "Complex information to communicate",
      "Busy audience",
      "Need for clarity",
      "Multiple levels of detail",
    ],
    useCase:
      "When you need to communicate complex information clearly and efficiently, especially to busy stakeholders",
    process: [
      "Start with the conclusion (BLUF)",
      "Provide key supporting arguments",
      "Add detailed information as needed",
      "Maintain hierarchical structure",
    ],
    confidenceFactors: [
      "Complex message to convey",
      "Time-constrained audience",
      "Multiple levels of detail available",
      "Need for structured communication",
    ],
  },
  {
    name: "Inversion",
    type: ToolType.ProblemSolving,
    description:
      "Approach problems by considering opposite perspectives and worst-case scenarios",
    characteristics: [
      "Need for alternative perspective",
      "Risk assessment needed",
      "Solution validation required",
      "Complex decision making",
    ],
    useCase:
      "When you need to validate solutions or identify potential pitfalls by considering opposite perspectives",
    process: [
      "Identify worst possible outcomes",
      "Analyze reasons for failure",
      "Consider opposite perspectives",
      "Use insights to improve solution",
    ],
    confidenceFactors: [
      "Need to validate solution",
      "Risk of overlooking problems",
      "Complex decision context",
      "Multiple stakeholder perspectives",
    ],
  },
  {
    name: "Document Structure",
    type: ToolType.Communication,
    description:
      "Systematically plan and structure documents using a hierarchical approach",
    characteristics: [
      "Document planning needed",
      "Complex information to organize",
      "Multiple sections required",
      "Need for logical flow",
    ],
    useCase:
      "When you need to plan, structure, or write a document with multiple sections and need a clear organizational framework",
    process: [
      "Define document purpose and audience",
      "Create high-level outline with main sections",
      "Break down sections into subsections and key points",
      "Add supporting details and transitions",
    ],
    confidenceFactors: [
      "Need for document organization",
      "Multiple topics to cover",
      "Complex information to present",
      "Requires clear information hierarchy",
    ],
  },
];
