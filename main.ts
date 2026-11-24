import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence (127 characters) explaining the modern internet to a
// traveler from 1800, built from a single comparison they already know:
// a library, books, letters, tea. The mechanism is asking, not delivering:
// the traveler whispers a question and the library answers, rather than a
// letter being carried somewhere. Output is a single line, no trailing newline.
const SENTENCE =
  "Every book and letter on earth sits in one library, and you whisper a question and the answer is written before your tea cools.";

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
