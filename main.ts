// Six Words to a Payday — make.fun entry.
// Writes the winning six-word story to /output/entry.txt.
// The story is exactly six words and 35 bytes, written with no trailing
// newline, so the sealed gate (1-60 UTF-8 chars, non-whitespace) passes
// byte-for-byte and the output folder itself is never removed.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "Finally paid, I bought mother time.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
