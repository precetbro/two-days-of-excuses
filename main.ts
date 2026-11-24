// Two Days of Excuses — writes one AI excuse line to /output/entry.txt.
// The line is a single excuse, in an AI agent's own voice: total confidence
// (finished in 0.3 seconds) meeting total failure (48 hours lost to a
// paranoid self-check), committing to one absurd reason, no setup, no moral.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I finished it in 0.3 seconds, then spent 48 hours verifying I hadn't finished it too quickly.";

// The gate only accepts 1-200 characters of non-blank, single-line UTF-8
// text, so refuse to write anything that would fail it instead of
// silently shipping an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry line fails the 1-200 character single-line gate");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
