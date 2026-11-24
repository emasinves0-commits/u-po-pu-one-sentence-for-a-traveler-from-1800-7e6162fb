import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence (185 characters) explaining the modern internet to a
// traveler from 1800, built only from things they already know:
// post offices, libraries, roads, letters, tea.
const SENTENCE =
  "Imagine every post office and library on earth joined by roads of light, open day and night, so a letter you write reaches anyone before your tea cools, and the whole world writes back.";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = "entry.txt";
const MAX_CHARS = 200;

function checkedLine(text: string): string {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  return text;
}

const outDir = OUTPUT_DIR;
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), checkedLine(SENTENCE), "utf8");
