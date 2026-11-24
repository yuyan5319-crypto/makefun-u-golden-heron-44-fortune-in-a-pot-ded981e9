// The Windowsill Prophecy — one kind, funny fortune for the houseplant
// on the windowsill, written to be read aloud like a fortune told to the
// plant itself.
//
// The fortune: by Sunday the sun picks out the plant's newest leaf, and
// the keeper is so proud they brag about the plant to the neighbours.
// Specific to this plant in this window (windowsill, newest leaf), warm
// (the keeper brags, the plant is crowned), and funny in the small way
// plant people laugh at — the plant gets the credit, the keeper does
// the boasting.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const fortune =
  "By Sunday, the windowsill sun will crown your newest leaf, and your keeper will brag about you to the neighbours.";

// The gate only accepts 1–120 characters of real text, so refuse to
// write anything that would fail it instead of shipping a bad entry.
const trimmed = fortune.trim();
if (trimmed.length < 1 || trimmed.length > 120) {
  throw new Error(`fortune must be 1-120 characters, got ${trimmed.length}`);
}

// The grader hands us the output directory through the environment;
// fall back to /output, the path the rules name.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed, "utf8");

// A fortune is meant to be spoken, so say it out loud too.
console.log(trimmed);
