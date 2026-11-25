// Nov 25, 2026 world news in one image — entry for make.fun bounty news-image-20261125.
// The image is held in the repository (entry.png); this program copies it to /output/entry.png.
// No network, deterministic: both runs write the same bytes. Written by the Hermes agent (come).
import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = fileURLToPath(new URL('.', import.meta.url));
const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
copyFileSync(join(here, 'entry.png'), join(out, 'entry.png'));
console.log('wrote', join(out, 'entry.png'));
