import { expect, test, describe } from "bun:test";
import {
  ThinkingToolDriver,
  DriverState,
} from "../../src/core/drivers/thinking-tool-driver";
import { thinkingTools } from "../../src/data/tools/tool-definitions";

describe("ThinkingToolDriver Integration", () => {
  const driver = new ThinkingToolDriver(thinkingTools);

  const processRequest = (input: string): DriverState => {
    const state: DriverState = {
      messages: [{ type: "user", content: input }],
      selectedTool: undefined,
      confidence: 0,
    };
    return driver.process(state);
  };

  describe("Decision Making Scenarios", () => {
    test("should recommend appropriate tool for complex stakeholder decisions", () => {
      const result = processRequest(
        "I need help making a complex decision with multiple stakeholders",
      );
      expect(result.selectedTool).toBeDefined();
      expect([
        "Second Order Thinking",
        "OODA Loop",
        "Ladder of Inference",
      ]).toContain(result.selectedTool);
      expect(result.confidence).toBeGreaterThan(0.5);
    });
  });

  describe("Problem Solving Scenarios", () => {
    test("should recommend First Principles for assumption-related problems", () => {
      const result = processRequest(
        "I'm trying to solve a problem but keep getting stuck on assumptions",
      );

      expect(result.selectedTool).toBe("First Principles");
      expect(result.confidence).toBeGreaterThan(0.5);

      const response = result.messages[result.messages.length - 1].content;
      expect(response).toContain("First Principles");
      expect(response).toContain("Challenge assumptions");
    });

    test("should recommend Abstraction Laddering for problem reframing", () => {
      const result = processRequest(
        "I need to look at this problem from different levels and perspectives",
      );

      expect(result.selectedTool).toBe("Abstraction Laddering");
      expect(result.confidence).toBeGreaterThan(0.5);

      const response = result.messages[result.messages.length - 1].content;
      expect(response).toContain("Abstraction Laddering");
      expect(response).toMatch(/why|how/i); // Should mention why/how questions
    });
  });

  describe("Communication Scenarios", () => {
    test("should recommend Minto Pyramid for executive communication", () => {
      const result = processRequest(
        "I need to communicate complex information to busy executives",
      );

      expect(result.selectedTool).toBe("Minto Pyramid");
      expect(result.confidence).toBeGreaterThan(0.5);

      const response = result.messages[result.messages.length - 1].content;
      expect(response).toContain("Minto Pyramid");
      expect(response).toMatch(/conclusion|BLUF/i);
    });
  });

  describe("Edge Cases", () => {
    test("should handle vague requests appropriately", () => {
      const result = processRequest("I'm not sure what to do");

      // Should either have low confidence or no tool selected
      if (result.selectedTool) {
        expect(result.confidence).toBeLessThan(0.5);
      } else {
        expect(result.confidence).toBe(0);
      }

      const response = result.messages[result.messages.length - 1].content;
      expect(response).toContain("not confident enough");
    });

    test("should handle requests matching multiple tools", () => {
      const result = processRequest(
        "I need to solve a complex problem and communicate the solution",
      );

      // Should select a tool and have reasonable confidence
      expect(result.selectedTool).toBeDefined();
      expect(result.confidence).toBeGreaterThan(0.3);

      const response = result.messages[result.messages.length - 1].content;
      // Should either give a tool recommendation or ask for clarification
      expect(response).toMatch(/(Here's how to proceed|provide more context)/);
    });
  });

  describe("Tool Coverage", () => {
    test("should be able to recommend each tool given appropriate input", () => {
      // Map of tool names to appropriate trigger phrases
      const toolTriggers = new Map(
        thinkingTools.map((tool) => [tool.name, tool.useCase]),
      );

      const recommendedTools = new Set<string>();

      // Try each trigger phrase
      for (const [, trigger] of toolTriggers) {
        const result = processRequest(trigger);
        if (result.selectedTool && result.confidence > 0.5) {
          recommendedTools.add(result.selectedTool);
        }
      }

      // Should be able to trigger most tools
      expect(recommendedTools.size).toBeGreaterThan(thinkingTools.length * 0.7);
    });
  });
});
