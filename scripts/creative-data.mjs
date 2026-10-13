import fs from "node:fs/promises";
import ts from "typescript";
// Reuse the same typed content as the site; avoid separate export-only copy.
const source = await fs.readFile(
  new URL("../src/lib/data.ts", import.meta.url),
  "utf8",
);
const { outputText } = ts.transpileModule(source, {
  compilerOptions: {
    module: ts.ModuleKind.ESNext,
    target: ts.ScriptTarget.ES2020,
  },
});
export const data = await import(
  `data:text/javascript;base64,${Buffer.from(outputText).toString("base64")}`
);
