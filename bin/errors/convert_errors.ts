import { writeFileSync } from "node:fs";
import path from "node:path";

interface TSError {
  resource: string;
  owner: string;
  code: string;
  severity: number;
  message: string;
  source: string;
  startLineNumber: number;
  startColumn: number;
  endLineNumber: number;
  endColumn: number;
  relatedInformation?: Array<{
    startLineNumber: number;
    startColumn: number;
    endLineNumber: number;
    endColumn: number;
    message: string;
    resource: string;
  }>;
}

interface SimplifiedError {
  resource: string;
  owner: string;
  message: string;
  source: string;
  location: string;
}

function convertErrors(errors: TSError[]): SimplifiedError[] {
  return errors.map(error => {
    const relativePath = error.resource.split("/").slice(-3).join("/");
    return {
      resource: relativePath,
      owner: error.owner,
      message: error.message,
      source: error.source,
      location: `${error.startLineNumber}:${error.startColumn}-${error.endColumn}`
    };
  });
}

// Read input from stdin
let data = "";
process.stdin.on("data", chunk => {
  data += chunk;
});

process.stdin.on("end", () => {
  const errors = JSON.parse(data) as TSError[];
  const simplified = convertErrors(errors);
  writeFileSync("docs/errors/errors.json", JSON.stringify(simplified, null, 2));
}); 