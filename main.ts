import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence (188 characters) explaining the modern internet to a
// traveler from 1800, built only from things they already know:
// houses, post offices, roads, letters, tea, pens. The mechanism is
// two-way and everybody's: every house keeps its own post office, so the
// traveler is not a customer of the system but one of its offices, and a
// letter they write reaches anyone before their tea cools while the answer
// comes back before the ink on their pen is dry. Output is a single line,
// no trailing newline.
const SENTENCE =
  "Every house on earth keeps its own post office, joined by roads of light, so a letter you write reaches anyone before your tea cools, and the answer comes back while your pen is still wet.";

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

// The bounty asks for exactly ONE sentence: a single full stop, at the
// end, and no other sentence terminator hiding inside. The v3 sentence
// earns its length from two new pictures the v1 sentence did not have —
// every house keeping its own post office (the traveler is one of the
// offices, not a customer) and the answer coming back while the pen is
// still wet (the reply is timed against the act of writing itself).
function checkedSentence(text: string): string {
  const line = checkedLine(text);
  if (!line.endsWith(".") || line.indexOf(".") !== line.length - 1) {
    throw new Error("entry must be exactly one sentence");
  }
  return line;
}

const outDir = OUTPUT_DIR;
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, OUTPUT_FILE), checkedSentence(SENTENCE), "utf8");
