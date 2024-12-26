import { ThinkingTool, ToolType } from "../types";
import { thinkingTools } from "../../data/tools/tool-definitions";

export interface DriverState {
  messages: Message[];
  selectedTool?: string;
  confidence: number;
}

export interface Message {
  type: "user" | "ai";
  content: string;
}

export class ThinkingToolDriver {
  private tools: ThinkingTool[];

  constructor(tools: ThinkingTool[] = thinkingTools) {
    this.tools = tools;
  }

  // Router node that analyzes input and selects most appropriate tool
  public routeRequest(state: DriverState): DriverState {
    const lastMessage = state.messages[state.messages.length - 1];
    if (lastMessage.type !== "user") {
      return {
        ...state,
        selectedTool: undefined,
        confidence: 0,
      };
    }

    const input = lastMessage.content.toLowerCase();
    let bestMatch: ThinkingTool | undefined;
    let highestConfidence = 0;

    for (const tool of this.tools) {
      const confidence = this.calculateToolConfidence(tool, input);
      if (confidence > highestConfidence) {
        highestConfidence = confidence;
        bestMatch = tool;
      }
    }

    return {
      ...state,
      selectedTool: bestMatch?.name,
      confidence: highestConfidence,
    };
  }

  // Calculate confidence score for a tool based on input
  private calculateToolConfidence(tool: ThinkingTool, input: string): number {
    let score = 0;
    const inputLower = input.toLowerCase();
    const inputWords = inputLower.split(/\s+/);

    // Natural language pattern matching
    const naturalPatterns = {
      problem: [
        "stuck",
        "struggling",
        "difficulty",
        "challenge",
        "issue",
        "problem",
      ],
      decision: [
        "decide",
        "choice",
        "option",
        "alternative",
        "trade-off",
        "stakeholder",
      ],
      communication: [
        "explain",
        "present",
        "communicate",
        "convey",
        "message",
        "audience",
      ],
      analysis: [
        "understand",
        "analyze",
        "examine",
        "investigate",
        "explore",
        "study",
      ],
      time: ["quick", "rapid", "fast", "urgent", "immediate", "dynamic"],
      complexity: [
        "complex",
        "complicated",
        "intricate",
        "detailed",
        "multiple",
        "various",
      ],
    };

    // Check for natural language patterns
    let patternMatches = 0;
    Object.entries(naturalPatterns).forEach(([, patterns]) => {
      const matchCount = patterns.filter((p) => inputLower.includes(p)).length;
      if (matchCount > 0) {
        patternMatches++;
        score += 0.1 * (matchCount / patterns.length);
      }
    });

    // Bonus for multiple pattern matches
    if (patternMatches > 1) {
      score += 0.1;
    }

    // Check for exact tool name match (highest priority)
    const toolNameLower = tool.name.toLowerCase();
    if (inputLower.includes(toolNameLower)) {
      // Higher score for exact tool name match with usage indicators
      if (
        inputLower.match(
          new RegExp(`(use|apply|using|applying)\\s+${toolNameLower}`),
        )
      ) {
        score += 0.8;
      } else if (inputLower.includes(toolNameLower)) {
        score += 0.6;
      }
    }

    // Check for tool-specific phrases with usage indicators
    const usageIndicators = [
      "use",
      "apply",
      "using",
      "applying",
      "help me",
      "let's use",
      "need to",
    ];
    const hasUsageIndicator = usageIndicators.some((indicator) =>
      inputLower.includes(indicator),
    );
    if (hasUsageIndicator) {
      score += 0.1; // Small boost for proper usage context
    }

    // Tool-specific exact phrase matches (high priority)
    const toolPhrases: Record<string, string[]> = {
      "Abstraction Laddering": [
        "abstraction ladder",
        "move up and down",
        "different levels",
        "reframe problem",
      ],
      "OODA Loop": [
        "ooda loop",
        "rapid decision",
        "quick adaptation",
        "dynamic environment",
      ],
      "First Principles": [
        "first principle",
        "fundamental truth",
        "basic assumption",
        "root cause",
      ],
      "Second Order Thinking": [
        "second order",
        "long term effect",
        "cascading effect",
        "future consequence",
      ],
      "Ladder of Inference": [
        "ladder of inference",
        "reasoning process",
        "validate assumption",
        "examine bias",
      ],
      "Minto Pyramid": [
        "pyramid principle",
        "bluf",
        "top down structure",
        "executive summary",
      ],
      Inversion: [
        "inversion",
        "opposite perspective",
        "potential failure",
        "what could go wrong",
      ],
    };

    // Check for tool-specific phrases
    const toolSpecificPhrases = toolPhrases[tool.name] || [];
    let phraseMatches = 0;
    for (const phrase of toolSpecificPhrases) {
      if (inputLower.includes(phrase)) {
        phraseMatches++;
        score += 0.4; // High weight for exact tool-specific phrases
      }
    }
    // Bonus for multiple phrase matches
    if (phraseMatches > 1) {
      score += 0.2;
    }

    // Negative matches - phrases that suggest a different tool
    const negativeMatches: Record<string, string[]> = {
      "Abstraction Laddering": [
        "rapid",
        "quick",
        "immediate",
        "bias",
        "pyramid",
      ],
      "OODA Loop": [
        "fundamental",
        "assumption",
        "pyramid",
        "long term",
        "ladder",
      ],
      "First Principles": ["rapid", "quick", "pyramid", "cascade", "ladder"],
      "Second Order Thinking": [
        "rapid",
        "quick",
        "immediate",
        "pyramid",
        "bias",
      ],
      "Ladder of Inference": [
        "rapid",
        "quick",
        "pyramid",
        "cascade",
        "opposite",
      ],
      "Minto Pyramid": ["rapid", "quick", "assumption", "opposite", "ladder"],
      Inversion: ["rapid", "quick", "pyramid", "ladder", "cascade"],
    };

    // Apply negative matches
    const negativePhrasesForTool = negativeMatches[tool.name] || [];
    let negativeMatchCount = 0;
    for (const phrase of negativePhrasesForTool) {
      if (inputLower.includes(phrase)) {
        negativeMatchCount++;
        score -= 0.2; // Penalty for phrases suggesting a different tool
      }
    }
    // Extra penalty for multiple negative matches
    if (negativeMatchCount > 1) {
      score -= 0.2;
    }

    // Check characteristics match with more weight for exact matches
    let characteristicMatches = 0;
    tool.characteristics.forEach((char) => {
      const charLower = char.toLowerCase();
      if (inputLower.includes(charLower)) {
        characteristicMatches++;
        score += 0.3; // Higher weight for exact characteristic matches
      } else {
        const charWords = charLower.split(/\s+/);
        const matchingWords = charWords.filter(
          (word) =>
            word.length > 3 &&
            inputWords.some(
              (inputWord) => inputWord === word, // Exact word match only
            ),
        );
        if (matchingWords.length > 0) {
          score += 0.15 * (matchingWords.length / charWords.length);
        }
      }
    });
    // Bonus for multiple characteristic matches
    if (characteristicMatches > 1) {
      score += 0.2;
    }

    // Check use case match with exact phrase priority
    if (inputLower.includes(tool.useCase.toLowerCase())) {
      score += 0.5; // Highest weight for exact use case match
    } else {
      const useCaseWords = tool.useCase.toLowerCase().split(/\s+/);
      const matchingUseCaseWords = useCaseWords.filter(
        (word) =>
          word.length > 3 &&
          inputWords.some(
            (inputWord) => inputWord === word, // Exact word match only
          ),
      );
      if (matchingUseCaseWords.length > 0) {
        score += 0.3 * (matchingUseCaseWords.length / useCaseWords.length);
      }
    }

    // Check type match with expanded synonyms
    const typeMatches: Record<ToolType, string[]> = {
      [ToolType.ProblemSolving]: [
        "problem",
        "solve",
        "solution",
        "analyze",
        "understand",
      ],
      [ToolType.DecisionMaking]: [
        "decision",
        "choose",
        "select",
        "determine",
        "assess",
      ],
      [ToolType.Communication]: [
        "communicate",
        "explain",
        "present",
        "structure",
        "inform",
      ],
    };

    const typeTerms = typeMatches[tool.type] || [];
    const matchingTypeTerms = typeTerms.filter(
      (term: string) => inputWords.some((word) => word === term), // Exact word match only
    );
    if (matchingTypeTerms.length > 0) {
      score += 0.2 * (matchingTypeTerms.length / typeTerms.length);
    }

    // Add bonus for confidence factors with exact matches
    let confidenceFactorMatches = 0;
    tool.confidenceFactors.forEach((factor) => {
      const factorLower = factor.toLowerCase();
      if (inputLower.includes(factorLower)) {
        confidenceFactorMatches++;
        score += 0.2; // Higher weight for exact confidence factor matches
      } else {
        const factorWords = factorLower.split(/\s+/);
        const matchingFactorWords = factorWords.filter(
          (word) =>
            word.length > 3 &&
            inputWords.some(
              (inputWord) => inputWord === word, // Exact word match only
            ),
        );
        if (matchingFactorWords.length > 0) {
          score += 0.1 * (matchingFactorWords.length / factorWords.length);
        }
      }
    });
    // Bonus for multiple confidence factor matches
    if (confidenceFactorMatches > 1) {
      score += 0.2;
    }

    // Tool-specific adjustments
    switch (tool.name) {
      case "OODA Loop":
        // Require stronger evidence for OODA Loop to prevent over-matching
        if (score < 0.7 && !inputLower.includes("ooda")) {
          score *= 0.7;
        }
        break;
      case "First Principles":
        // Boost score if multiple fundamental/basic terms are present
        if (inputLower.match(/fundamental.*basic|basic.*fundamental/)) {
          score += 0.2;
        }
        break;
      case "Second Order Thinking":
        // Boost score if multiple cascade/consequence terms are present
        if (inputLower.match(/cascade.*consequence|consequence.*cascade/)) {
          score += 0.2;
        }
        break;
      case "Ladder of Inference":
        // Boost score if reasoning and validation are both mentioned
        if (inputLower.match(/reason.*validate|validate.*reason/)) {
          score += 0.2;
        }
        break;
      case "Minto Pyramid":
        // Boost score if structure and hierarchy are both mentioned
        if (inputLower.match(/structure.*hierarchy|hierarchy.*structure/)) {
          score += 0.2;
        }
        break;
      case "Inversion":
        // Boost score if failure and opposite are both mentioned
        if (inputLower.match(/fail.*opposite|opposite.*fail/)) {
          score += 0.2;
        }
        break;
    }

    // Additional natural language bonuses
    if (inputLower.match(/help|need|want|trying|looking|seeking/)) {
      score += 0.1; // Bonus for help-seeking language
    }

    if (inputLower.match(/how|what|why|when|where|which/)) {
      score += 0.1; // Bonus for question words
    }

    if (inputLower.match(/can('t| not)|stuck|difficult|challenging|hard/)) {
      score += 0.1; // Bonus for problem indicators
    }

    return Math.min(Math.max(score, 0), 1); // Clamp between 0 and 1
  }

  // Execute selected tool's process
  public executeTool(state: DriverState): DriverState {
    const lastMessage = state.messages[state.messages.length - 1];
    const isNaturalLanguageQuery =
      lastMessage &&
      !this.tools.some((tool) =>
        lastMessage.content.toLowerCase().includes(tool.name.toLowerCase()),
      );

    // Lower confidence threshold for natural language queries
    const confidenceThreshold = isNaturalLanguageQuery ? 0.45 : 0.5;

    if (!state.selectedTool || state.confidence < confidenceThreshold) {
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            type: "ai",
            content:
              "I'm not confident enough about which thinking tool would be most appropriate. Could you provide more context about your situation?",
          },
        ],
      };
    }

    const tool = this.tools.find((t) => t.name === state.selectedTool);
    if (!tool) return state;

    return {
      ...state,
      messages: [
        ...state.messages,
        {
          type: "ai",
          content: `I recommend using ${tool.name}. Here's how to proceed:\n\n${tool.process.map((step, i) => `${i + 1}. ${step}`).join("\n")}`,
        },
      ],
    };
  }

  // Main entry point for processing requests
  public process(initialState: DriverState): DriverState {
    const routedState = this.routeRequest(initialState);
    return this.executeTool(routedState);
  }
}
