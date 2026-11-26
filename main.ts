import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "Meet the Wet Gym Sock Pizza: soggy socks baked onto melted cheese, so the first bite tastes like a locker room filing for divorce from your mouth.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n", "utf8");

// Single-line pitch, under 200 characters: names the pizza, names the topping,
// and lands the joke with a surprising turn.
