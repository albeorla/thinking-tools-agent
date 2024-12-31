import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["src/**/*.test.ts"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/**/*.ts"],
      exclude: [
        "src/**/*.test.ts",
        "src/**/__tests__/**",
        "src/**/*.d.ts"
      ]
    }
  },
  resolve: {
    alias: {
      "@core": "/src/core",
      "@data": "/src/data",
      "@utils": "/src/utils",
      "@test": "/test",
    },
  },
});
