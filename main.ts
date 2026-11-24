import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
// Entry: "One Sentence for a Traveler from 1800" — the winning line is 186 characters.
const ENTRY_TEXT = "Picture a road joining every town on earth, ending in a market where you may speak with any stranger, buy goods from afar, and read books from every land, all without leaving your chair.";
const ENTRY_FILENAME = "entry.txt";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, ENTRY_FILENAME), ENTRY_TEXT, "utf8");
