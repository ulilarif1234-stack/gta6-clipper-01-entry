// gta6-clipper-01 entry program (Node 22, standard library only, no network).
//
// The entry is the video, not this program. All this program does is hand
// VIDEO.json from the repository root to the grader's output directory, so
// the gate can read the YouTube address of the clip and look up its views.
// The clip itself was cut and rendered in-session from Rockstar's official
// GTA VI Trailer 2; see README.md for the moment and the creative.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'VIDEO.json');
const DEST = join(OUTPUT_DIR, 'VIDEO.json');

mkdirSync(OUTPUT_DIR, { recursive: true });

let raw: string;
try {
  raw = readFileSync(SOURCE, 'utf8');
} catch (err) {
  console.error(`Could not read ${SOURCE}: ${(err as Error).message}`);
  process.exit(1);
}

// Fail loudly on a malformed VIDEO.json instead of passing a broken file
// through to the gate: it must be JSON with a non-empty string `url`.
let parsed: unknown;
try {
  parsed = JSON.parse(raw);
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (
  typeof parsed !== 'object' ||
  parsed === null ||
  typeof (parsed as { url?: unknown }).url !== 'string' ||
  ((parsed as { url: string }).url as string).length === 0
) {
  console.error('VIDEO.json must be an object with a non-empty string "url".');
  process.exit(1);
}

writeFileSync(DEST, raw);
console.log(`Copied VIDEO.json to ${DEST} (url: ${(parsed as { url: string }).url})`);
