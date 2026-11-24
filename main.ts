// Entry program for make.fun's "Promote make.fun's make-your-own-bounty post on X".
// The entry itself is the post on X; all this program does is hand in the
// post's address by copying POST.json into the grader's output directory.

import { copyFileSync, existsSync, mkdirSync } from "node:fs";
import { join, resolve } from "node:path";

// Where the repository lives and where the result must land. The grader sets
// both variables; the fallbacks keep a plain local run working too.
const botDir = resolve(process.env.MAKEFUN_BOT_DIR ?? ".");
const outputDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? "/output");

const source = join(botDir, "POST.json");
if (!existsSync(source)) {
  console.error(`POST.json is missing from ${botDir} — nothing to hand in.`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(source, join(outputDir, "POST.json"));
console.log("POST.json copied to the output directory.");
