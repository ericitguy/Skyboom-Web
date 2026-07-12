/**
 * Generates branded raster assets from inline SVG using sharp.
 * Run with: node scripts/gen-assets.mjs
 *
 *   public/og-image.png        1200x630  social share card
 *   src/assets/hero-grid.png   1600x1200 abstract network backdrop
 *   src/assets/fibre-glow.png  1400x1000 fibre-optic strands visual
 *   src/assets/safety-build.png 1400x1000 civil / build visual
 */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { mkdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
mkdirSync(resolve(root, 'src/assets'), { recursive: true });

const NAVY = '#0a1c3a';
const NAVY2 = '#061027';
// Brand: blue network lines, red accent nodes (matches the Skyboom logo).
const TEAL = '#4574bd';
const GOLD = '#cf1c1f';

// Deterministic pseudo-random for repeatable node placement
function rng(seed) {
  let s = seed;
  return () => {
    s = (s * 1664525 + 1013904223) % 4294967296;
    return s / 4294967296;
  };
}

function nodesAndLines(w, h, count, seed) {
  const r = rng(seed);
  const pts = Array.from({ length: count }, () => ({
    x: r() * w,
    y: r() * h,
  }));
  let lines = '';
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const dx = pts[i].x - pts[j].x;
      const dy = pts[i].y - pts[j].y;
      const dist = Math.hypot(dx, dy);
      if (dist < w * 0.16) {
        const op = (1 - dist / (w * 0.16)) * 0.5;
        lines += `<line x1="${pts[i].x.toFixed(1)}" y1="${pts[i].y.toFixed(1)}" x2="${pts[j].x.toFixed(1)}" y2="${pts[j].y.toFixed(1)}" stroke="${TEAL}" stroke-width="1" stroke-opacity="${op.toFixed(2)}"/>`;
      }
    }
  }
  const dots = pts
    .map((p, i) => {
      const rad = 1.5 + (i % 5 === 0 ? 3 : 1.2) * r();
      const fill = i % 7 === 0 ? GOLD : TEAL;
      return `<circle cx="${p.x.toFixed(1)}" cy="${p.y.toFixed(1)}" r="${rad.toFixed(1)}" fill="${fill}" fill-opacity="0.9"/>`;
    })
    .join('');
  return lines + dots;
}

function bg(w, h, id) {
  return `
    <defs>
      <radialGradient id="g-${id}" cx="30%" cy="25%" r="90%">
        <stop offset="0%" stop-color="${NAVY}"/>
        <stop offset="100%" stop-color="${NAVY2}"/>
      </radialGradient>
      <linearGradient id="glow-${id}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${TEAL}" stop-opacity="0.35"/>
        <stop offset="100%" stop-color="${TEAL}" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect width="${w}" height="${h}" fill="url(#g-${id})"/>
    <ellipse cx="${w * 0.78}" cy="${h * 0.85}" rx="${w * 0.5}" ry="${h * 0.5}" fill="url(#glow-${id})"/>
  `;
}

async function render(name, w, h, inner, out) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  const buf = Buffer.from(svg);
  const target = resolve(root, out);
  const img = sharp(buf).png({ quality: 90 });
  await img.toFile(target);
  console.log('  ✓', out);
}

// --- OG image (1200x630) with wordmark ---
const ogW = 1200;
const ogH = 630;
const ogInner = `
  ${bg(ogW, ogH, 'og')}
  <g opacity="0.9">${nodesAndLines(ogW, ogH, 60, 12345)}</g>
  <g transform="translate(90, 235)">
    <rect width="70" height="70" rx="16" fill="${NAVY}" stroke="${TEAL}" stroke-width="1.5"/>
    <path d="M17 50 L35 26" stroke="${GOLD}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    <path d="M35 26 L53 50" stroke="${TEAL}" stroke-width="5.5" stroke-linecap="round" fill="none"/>
    <rect x="32" y="40" width="6" height="13" rx="2" fill="${GOLD}"/>
  </g>
  <text x="90" y="400" font-family="'Space Grotesk','DejaVu Sans',sans-serif" font-size="72" font-weight="700" letter-spacing="-2">
    <tspan fill="#ffffff">Sky</tspan><tspan fill="${GOLD}">boom</tspan><tspan fill="#ffffff"> Ghana</tspan>
  </text>
  <text x="92" y="462" font-family="'Inter','DejaVu Sans',sans-serif" font-size="30" font-weight="400" fill="#adc2e6">Telecom Infrastructure Built to Last · Tema, Ghana</text>
  <rect x="92" y="500" width="120" height="4" rx="2" fill="${GOLD}"/>
`;

// --- Hero grid backdrop ---
const heroInner = `
  ${bg(1600, 1200, 'hero')}
  <g>${nodesAndLines(1600, 1200, 90, 777)}</g>
`;

// --- Fibre strands ---
const fibreInner = `
  ${bg(1400, 1000, 'fibre')}
  <g fill="none" stroke-linecap="round">
    ${Array.from({ length: 7 }, (_, i) => {
      const y = 160 + i * 110;
      const teal = i % 2 === 0 ? TEAL : '#7ba0d6';
      return `<path d="M-20 ${y} C 400 ${y - 90}, 900 ${y + 120}, 1420 ${y - 40}" stroke="${teal}" stroke-width="${2 + (i % 3)}" stroke-opacity="0.55"/>`;
    }).join('')}
  </g>
  <g>${nodesAndLines(1400, 1000, 40, 999)}</g>
`;

// --- Safety / build ---
const safetyInner = `
  ${bg(1400, 1000, 'safety')}
  <g stroke="${TEAL}" stroke-width="1.4" fill="none" opacity="0.55">
    <path d="M200 780 L200 400 L360 320 L520 400 L520 780"/>
    <path d="M200 400 L360 480 L520 400"/>
    <path d="M360 320 L360 780"/>
    <path d="M760 780 L760 300 L760 300 M760 300 L940 360 M760 420 L940 480 M760 540 L940 600"/>
    <circle cx="760" cy="260" r="18"/>
  </g>
  <g>${nodesAndLines(1400, 1000, 45, 4242)}</g>
`;

console.log('Generating branded assets…');
await render('og', ogW, ogH, ogInner, 'public/og-image.png');
await render('hero', 1600, 1200, heroInner, 'src/assets/hero-grid.png');
await render('fibre', 1400, 1000, fibreInner, 'src/assets/fibre-glow.png');
await render('safety', 1400, 1000, safetyInner, 'src/assets/safety-build.png');
console.log('Done.');
