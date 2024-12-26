import { expect, test, describe } from "@jest/globals";
import {
  ThinkingToolDriver,
  DriverState,
  Message,
} from "../../src/core/drivers/thinking-tool-driver";
import { ThinkingTool, ToolType } from "../../src/core/types";

describe("ThinkingToolDriver", () => {
  // Mock tools for testing
  const mockTools: ThinkingTool[] = [
    {
      name: "Test Tool 1",
      type: ToolType.ProblemSolving,
      description: "A test tool",
      characteristics: ["test characteristic 1", "test characteristic 2"],
      useCase: "when you need to test something",
      process: ["step 1", "step 2"],
      confidenceFactors: ["factor 1", "factor 2"],
    },
    {
      name: "Test Tool 2",
      type: ToolType.DecisionMaking,
      description: "Another test tool",
      characteristics: ["decision characteristic"],
      useCase: "when making decisions",
      process: ["decide step 1", "decide step 2"],
      confidenceFactors: ["decision factor"],
    },
  ];

  const driver = new ThinkingToolDriver(mockTools);

  describe("routeRequest", () => {
    test("should return undefined tool for non-user messages", () => {
      const state: DriverState = {
        messages: [{ type: "ai", content: "test" }],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.selectedTool).toBeUndefined();
      expect(result.confidence).toBe(0);
    });

    test("should match tool based on characteristics", () => {
      const state: DriverState = {
        messages: [
          { type: "user", content: "I need help with test characteristic 1" },
        ],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.selectedTool).toBe("Test Tool 1");
      expect(result.confidence).toBeGreaterThan(0);
    });

    test("should match tool based on use case", () => {
      const state: DriverState = {
        messages: [
          { type: "user", content: "I need help when making decisions" },
        ],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.selectedTool).toBe("Test Tool 2");
      expect(result.confidence).toBeGreaterThan(0);
    });

    test("should handle no matches", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "something completely unrelated" }],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.confidence).toBeLessThan(0.1);
    });

    test("should handle empty user message", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "" }],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.selectedTool).toBeUndefined();
      expect(result.confidence).toBe(0);
    });

    test("should handle messages with special characters", () => {
      const state: DriverState = {
        messages: [
          { type: "user", content: "!@#$%^&* test characteristic 1 !@#$%^&*" },
        ],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.selectedTool).toBe("Test Tool 1");
      expect(result.confidence).toBeGreaterThan(0);
    });

    test("should handle case-insensitive matching", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "TEST CHARACTERISTIC 1" }],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.selectedTool).toBe("Test Tool 1");
      expect(result.confidence).toBeGreaterThan(0);
    });

    test("should handle partial word matches appropriately", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "testing characteristics" }],
        confidence: 0,
      };

      const result = driver.routeRequest(state);
      expect(result.confidence).toBeLessThan(0.5); // Partial matches should have lower confidence
    });
  });

  describe("executeTool", () => {
    test("should return guidance message when confidence is too low", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "help" }],
        selectedTool: "Test Tool 1",
        confidence: 0.4,
      };

      const result = driver.executeTool(state);
      expect(result.messages[result.messages.length - 1].type).toBe("ai");
      expect(result.messages[result.messages.length - 1].content).toContain(
        "not confident enough",
      );
    });

    test("should return tool process when confidence is sufficient", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "help" }],
        selectedTool: "Test Tool 1",
        confidence: 0.6,
      };

      const result = driver.executeTool(state);
      expect(result.messages[result.messages.length - 1].type).toBe("ai");
      expect(result.messages[result.messages.length - 1].content).toContain(
        "Test Tool 1",
      );
      expect(result.messages[result.messages.length - 1].content).toContain(
        "step 1",
      );
      expect(result.messages[result.messages.length - 1].content).toContain(
        "step 2",
      );
    });

    test("should handle unknown tool gracefully", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "help" }],
        selectedTool: "Unknown Tool",
        confidence: 0.6,
      };

      const result = driver.executeTool(state);
      expect(result).toEqual(state);
    });
  });

  describe("process", () => {
    test("should route and execute tool successfully", () => {
      const state: DriverState = {
        messages: [
          { type: "user", content: "I need help when making decisions" },
        ],
        confidence: 0,
      };

      const result = driver.process(state);
      expect(result.messages.length).toBe(2);
      expect(result.messages[1].content).toContain("Test Tool 2");
    });

    test("should handle low confidence cases", () => {
      const state: DriverState = {
        messages: [{ type: "user", content: "something unrelated" }],
        confidence: 0,
      };

      const result = driver.process(state);
      expect(result.messages.length).toBe(2);
      expect(result.messages[1].content).toContain("not confident enough");
    });
  });

  describe("Performance and Stress Tests", () => {
    test("should handle large message history efficiently", () => {
      const largeHistory: Message[] = Array(1000)
        .fill(null)
        .map((_, i) => ({
          type: i % 2 === 0 ? "user" : "ai",
          content: i % 2 === 0 ? "test message" : "ai response",
        }));

      const state: DriverState = {
        messages: largeHistory,
        confidence: 0,
      };

      const startTime = performance.now();
      const result = driver.process(state);
      const endTime = performance.now();

      expect(endTime - startTime).toBeLessThan(100); // Should process in under 100ms
      expect(result.messages.length).toBe(largeHistory.length + 1);
    });

    test("should handle repeated rapid requests", () => {
      const startTime = performance.now();

      for (let i = 0; i < 100; i++) {
        const state: DriverState = {
          messages: [{ type: "user", content: "test characteristic 1" }],
          confidence: 0,
        };
        driver.process(state);
      }

      const endTime = performance.now();
      const averageTime = (endTime - startTime) / 100;

      expect(averageTime).toBeLessThan(1); // Average time per request should be under 1ms
    });
  });

  describe("Boundary Conditions", () => {
    test("should handle extremely long input gracefully", () => {
      const longInput = "test characteristic 1 ".repeat(1000);
      const state: DriverState = {
        messages: [{ type: "user", content: longInput }],
        confidence: 0,
      };

      const result = driver.process(state);
      expect(result.selectedTool).toBe("Test Tool 1");
      expect(result.confidence).toBeGreaterThan(0);
    });

    test("should handle multiple tool matches with similar confidence", () => {
      const state: DriverState = {
        messages: [
          {
            type: "user",
            content: "test characteristic 1 decision characteristic",
          },
        ],
        confidence: 0,
      };

      const result = driver.process(state);
      expect(result.selectedTool).toBeDefined();
      expect(result.confidence).toBeGreaterThan(0.3);
    });

    test("should handle unicode and international characters", () => {
      const state: DriverState = {
        messages: [
          { type: "user", content: "テスト test characteristic 1 проверка" },
        ],
        confidence: 0,
      };

      const result = driver.process(state);
      expect(result.selectedTool).toBe("Test Tool 1");
      expect(result.confidence).toBeGreaterThan(0);
    });
  });
});
