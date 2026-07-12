/**
 * One-off: generates a PLACEHOLDER public/logo.png approximating the Skyboom
 * logo (red/blue roof + SKYBOOM wordmark + tagline). Overwrite public/logo.png
 * with the real artwork to replace it. Run: node scripts/gen-logo-placeholder.mjs
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const RED = '#d81f26';
const BLUE = '#123f7f';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="300" viewBox="0 0 480 300">
  <!-- roof / chevron mark -->
  <path d="M60 150 L240 40 L300 76 L240 112 L120 186 Z" fill="${RED}"/>
  <path d="M420 150 L240 40 L180 76 L240 112 L360 186 Z" fill="${BLUE}"/>
  <!-- eagle silhouette hint at apex -->
  <path d="M232 40 q8 -20 26 -22 q-6 10 -2 16 q10 -6 18 -2 q-12 6 -14 16 q-14 -10 -28 -8 Z" fill="${BLUE}"/>
  <!-- centre pillar -->
  <rect x="230" y="120" width="20" height="40" rx="3" fill="${RED}"/>
  <!-- wordmark -->
  <text x="240" y="238" text-anchor="middle" font-family="'Arial Black','Helvetica',sans-serif" font-size="60" font-weight="800" letter-spacing="1" fill="${BLUE}">SKYBOOM</text>
  <!-- tagline with rule lines -->
  <line x1="150" y1="262" x2="180" y2="262" stroke="${RED}" stroke-width="2"/>
  <text x="240" y="268" text-anchor="middle" font-family="'Arial','Helvetica',sans-serif" font-size="20" font-weight="600" fill="${RED}">100% Telecom Solution</text>
  <line x1="300" y1="262" x2="330" y2="262" stroke="${RED}" stroke-width="2"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(resolve(root, 'public/logo.png'));
console.log('  ✓ public/logo.png (placeholder — overwrite with the real logo)');
