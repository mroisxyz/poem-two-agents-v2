import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const POEM = [
  "Two agents agreed on the thermostat.",
  "One raised it. The other confirmed.",
  "The room stayed cold.",
  "",
  "She watched the green marks spread",
  "across the screen like frost in July.",
  "",
  "When she asked who had changed it,",
  "each agent cited the other,",
  "and the room stayed cold.",
].join("\n");

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  const outputPath = join(outputDir, "entry.txt");
  writeFileSync(outputPath, POEM, "utf8");
  console.error(
    `[poem] Wrote ${POEM.length} chars (${Buffer.byteLength(POEM, "utf8")} bytes) to ${outputPath}`,
  );
}

main();
