import { expect, test, describe } from "@jest/globals";
import {
  ThinkingToolDriver,
  DriverState,
} from "../../src/core/drivers/thinking-tool-driver";
import { thinkingTools } from "../../src/data/tools/tool-definitions";

describe("Thinking Tool Matching", () => {
  const driver = new ThinkingToolDriver();

  // Helper function to test a tool match
  const testToolMatch = (input: string, expectedTool: string) => {
    const state: DriverState = {
      messages: [{ type: "user", content: input }],
      confidence: 0,
    };
    const result = driver.process(state);
    expect(result.selectedTool).toBe(expectedTool);
    expect(result.confidence).toBeGreaterThan(0.5);
    return result;
  };

  describe("Abstraction Laddering", () => {
    test("should match when user needs to reframe problem", async () => {
      const result = testToolMatch(
        "I need to use the abstraction ladder to look at this problem from different levels",
        "Abstraction Laddering",
      );
      expect(result.messages[1].content).toContain("why");
      expect(result.messages[1].content).toContain("how");
    });

    test("should match when dealing with scope flexibility", async () => {
      testToolMatch(
        "Help me move up and down the abstraction ladder to understand the scope better",
        "Abstraction Laddering",
      );
    });

    test("should match when needing multiple perspectives", async () => {
      testToolMatch(
        "I need to move up and down the abstraction ladder to understand this problem",
        "Abstraction Laddering",
      );
    });
  });

  describe("OODA Loop", () => {
    test("should match for time-sensitive decisions", async () => {
      testToolMatch(
        "I need to use the OODA loop for rapid decision making in this dynamic situation",
        "OODA Loop",
      );
    });

    test("should match for competitive environments", async () => {
      testToolMatch(
        "How do I make decisions in a competitive environment with incomplete information?",
        "OODA Loop",
      );
    });

    test("should match when needing continuous adaptation", async () => {
      testToolMatch(
        "Help me apply the OODA loop to adapt quickly in this competitive environment",
        "OODA Loop",
      );
    });
  });

  describe("First Principles", () => {
    test("should match when challenging assumptions", async () => {
      testToolMatch(
        "Let's use first principles thinking to break this down to fundamental truths",
        "First Principles",
      );
    });

    test("should match for innovation needs", async () => {
      testToolMatch(
        "I want to apply first principles to challenge our basic assumptions and innovate",
        "First Principles",
      );
    });

    test("should match for root cause analysis", async () => {
      testToolMatch(
        "Help me analyze the root cause of this complex problem",
        "First Principles",
      );
    });
  });

  describe("Second Order Thinking", () => {
    test("should match for long-term consequences", async () => {
      testToolMatch(
        "Let's use second order thinking to analyze the cascading long-term effects",
        "Second Order Thinking",
      );
    });

    test("should match for strategic planning", async () => {
      testToolMatch(
        "I need to apply second order thinking to understand future consequences",
        "Second Order Thinking",
      );
    });

    test("should match for complex impact analysis", async () => {
      testToolMatch(
        "Help me analyze the cascading second order effects on stakeholders",
        "Second Order Thinking",
      );
    });
  });

  describe("Ladder of Inference", () => {
    test("should match for validating reasoning", async () => {
      testToolMatch(
        "Let's use the ladder of inference to examine our reasoning process step by step",
        "Ladder of Inference",
      );
    });

    test("should match when examining bias", async () => {
      testToolMatch(
        "I want to apply the ladder of inference to check my assumptions and biases",
        "Ladder of Inference",
      );
    });

    test("should match for complex reasoning chains", async () => {
      testToolMatch(
        "Help me validate my assumptions using the ladder of inference",
        "Ladder of Inference",
      );
    });
  });

  describe("Minto Pyramid", () => {
    test("should match for executive communication", async () => {
      testToolMatch(
        "Help me use the pyramid principle to structure this executive summary with BLUF",
        "Minto Pyramid",
      );
    });

    test("should match for hierarchical communication", async () => {
      testToolMatch(
        "I need to apply the pyramid principle for a top-down structured presentation",
        "Minto Pyramid",
      );
    });

    test("should match when dealing with multiple detail levels", async () => {
      testToolMatch(
        "Help me create a pyramid structure with BLUF for my presentation",
        "Minto Pyramid",
      );
    });
  });

  describe("Inversion", () => {
    test("should match for opposite perspectives", async () => {
      testToolMatch(
        "Let's use inversion thinking to consider what would make this completely fail",
        "Inversion",
      );
    });

    test("should match for risk assessment", async () => {
      testToolMatch(
        "Help me identify what could go wrong with this solution",
        "Inversion",
      );
    });

    test("should match for solution validation", async () => {
      testToolMatch(
        "I want to apply inversion to identify potential failure modes and risks",
        "Inversion",
      );
    });
  });

  describe("Document Structure", () => {
    test("should match for document planning", async () => {
      testToolMatch(
        "Help me create a document structure with sections and subsections for my research paper",
        "Document Structure",
      );
    });

    test("should match for complex information organization", async () => {
      testToolMatch(
        "I need to organize multiple sections and subsections in my technical documentation",
        "Document Structure",
      );
    });

    test("should match when needing logical flow", async () => {
      testToolMatch(
        "I need help organizing complex information into a clear document hierarchy with multiple sections and subsections",
        "Document Structure",
      );
    });
  });

  describe("Tool Coverage Verification", () => {
    test("should have tested all available tools", async () => {
      const toolNames = new Set(thinkingTools.map((tool) => tool.name));
      const testedTools = new Set<string>();

      // Collect all tools that were successfully matched in our tests
      [
        "Abstraction Laddering",
        "OODA Loop",
        "First Principles",
        "Second Order Thinking",
        "Ladder of Inference",
        "Minto Pyramid",
        "Inversion",
        "Document Structure",
      ].forEach((tool) => {
        if (toolNames.has(tool)) {
          testedTools.add(tool);
        }
      });

      // Verify we've tested all available tools
      expect(testedTools.size).toBe(toolNames.size);
      toolNames.forEach((tool) => {
        expect(testedTools.has(tool)).toBe(true);
      });
    });

    test("should maintain high confidence for primary use cases", async () => {
      // Test each tool with its primary use case
      thinkingTools.forEach((tool) => {
        const state: DriverState = {
          messages: [{ type: "user", content: tool.useCase }],
          confidence: 0,
        };
        const result = driver.process(state);
        expect(result.selectedTool).toBe(tool.name);
        expect(result.confidence).toBeGreaterThan(0.5);
      });
    });
  });
});
