import { useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Github, ExternalLink, ArrowRight, Terminal, Layers, Box, Cpu, ChevronRight, Sun, Moon } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = "home" | "product" | "code" | "design" | "architecture";
type ThemeMode = "light" | "dark";

interface ThemeColors {
  primaryBg: string;
  secondaryBg: string;
  primaryFt: string;
  secondaryFt: string;
  contrast: string;
}

interface ThemeEntry {
  name: string;
  dark: ThemeColors;
  light: ThemeColors;
}

// ─── Theme Config ─────────────────────────────────────────────────────────────

const THEMES: ThemeEntry[] = [
  {
    name: "VS Code Modern",
    dark:  { primaryBg: "#181818", secondaryBg: "#1F1F1F", primaryFt: "#CCCCCC", secondaryFt: "#9D9D9D", contrast: "#0078D4" },
    light: { primaryBg: "#FFFFFF", secondaryBg: "#F3F3F3", primaryFt: "#1F1F1F", secondaryFt: "#616161", contrast: "#0067C0" },
  },
  {
    name: "GitHub",
    dark:  { primaryBg: "#0D1117", secondaryBg: "#161B22", primaryFt: "#F0F6FC", secondaryFt: "#8B949E", contrast: "#2F81F7" },
    light: { primaryBg: "#FFFFFF", secondaryBg: "#F6F8FA", primaryFt: "#1F2328", secondaryFt: "#656D76", contrast: "#0969DA" },
  },
  {
    name: "Catppuccin",
    dark:  { primaryBg: "#1E1E2E", secondaryBg: "#313244", primaryFt: "#CDD6F4", secondaryFt: "#A6ADC8", contrast: "#89B4FA" },
    light: { primaryBg: "#EFF1F5", secondaryBg: "#E6E9EF", primaryFt: "#4C4F69", secondaryFt: "#6C6F85", contrast: "#1E66F5" },
  },
  {
    name: "Dracula",
    dark:  { primaryBg: "#282A36", secondaryBg: "#343746", primaryFt: "#F8F8F2", secondaryFt: "#BFBFCB", contrast: "#BD93F9" },
    light: { primaryBg: "#F8F8F2", secondaryBg: "#ECECE7", primaryFt: "#282A36", secondaryFt: "#626374", contrast: "#7C3AED" },
  },
  {
    name: "Solarized",
    dark:  { primaryBg: "#002B36", secondaryBg: "#073642", primaryFt: "#FDF6E3", secondaryFt: "#93A1A1", contrast: "#268BD2" },
    light: { primaryBg: "#FDF6E3", secondaryBg: "#EEE8D5", primaryFt: "#073642", secondaryFt: "#657B83", contrast: "#268BD2" },
  },
];

// ─── Color Utilities ──────────────────────────────────────────────────────────

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function readableOn(bg: string, light: string, dark: string): string {
  const bgL = relativeLuminance(bg);
  const lightContrast = (Math.max(relativeLuminance(light), bgL) + 0.05) /
    (Math.min(relativeLuminance(light), bgL) + 0.05);
  const darkContrast = (Math.max(relativeLuminance(dark), bgL) + 0.05) /
    (Math.min(relativeLuminance(dark), bgL) + 0.05);
  return lightContrast >= darkContrast ? light : dark;
}

function hexAlpha(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${r},${g},${b},${alpha})`;
}

function applyTheme(c: ThemeColors) {
  const root = document.documentElement;
  const onContrast = readableOn(c.contrast, c.primaryFt, c.primaryBg);
  const [fr, fg, fb] = hexToRgb(c.primaryFt);
  const vars: Record<string, string> = {
    "--background":            c.primaryBg,
    "--foreground":            c.primaryFt,
    "--card":                  c.secondaryBg,
    "--card-foreground":       c.primaryFt,
    "--popover":               c.secondaryBg,
    "--popover-foreground":    c.primaryFt,
    "--primary":               c.contrast,
    "--primary-foreground":    onContrast,
    "--secondary":             c.secondaryBg,
    "--secondary-foreground":  c.primaryFt,
    "--muted":                 c.secondaryBg,
    "--muted-foreground":      c.secondaryFt,
    "--accent":                c.contrast,
    "--accent-foreground":     onContrast,
    "--border":                `rgba(${fr},${fg},${fb},0.12)`,
    "--ring":                  c.contrast,
    "--input":                 c.secondaryBg,
    "--input-background":      c.secondaryBg,
    "--switch-background":     hexAlpha(c.secondaryFt, 0.4),
    "--sidebar":               c.primaryBg,
    "--sidebar-foreground":    c.primaryFt,
    "--sidebar-primary":       c.contrast,
    "--sidebar-primary-foreground": onContrast,
    "--sidebar-accent":        c.secondaryBg,
    "--sidebar-accent-foreground": c.primaryFt,
    "--sidebar-border":        `rgba(${fr},${fg},${fb},0.1)`,
    "--sidebar-ring":          c.contrast,
  };
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

// ─── Theme Hook ───────────────────────────────────────────────────────────────

function useTheme() {
  const getSystemMode = (): ThemeMode =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [themeName, setThemeNameState] = useState<string>(() =>
    localStorage.getItem("portfolio-theme") || THEMES[0].name
  );
  const [modeOverride, setModeOverride] = useState<ThemeMode | "system">(() =>
    (localStorage.getItem("portfolio-mode") as ThemeMode | "system") || "system"
  );

  const activeMode: ThemeMode =
    modeOverride === "system" ? getSystemMode() : modeOverride;

  useEffect(() => {
    const theme = THEMES.find((t) => t.name === themeName) || THEMES[0];
    applyTheme(activeMode === "dark" ? theme.dark : theme.light);
  }, [themeName, activeMode]);

  useEffect(() => {
    if (modeOverride !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const theme = THEMES.find((t) => t.name === themeName) || THEMES[0];
      applyTheme(mq.matches ? theme.dark : theme.light);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [themeName, modeOverride]);

  const setThemeName = (name: string) => {
    localStorage.setItem("portfolio-theme", name);
    setThemeNameState(name);
  };

  const toggleMode = () => {
    const next: ThemeMode = activeMode === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-mode", next);
    setModeOverride(next);
  };

  return { themeName, setThemeName, activeMode, toggleMode };
}

// ─── Theme Controls ───────────────────────────────────────────────────────────

function ThemeControls({
  themeName,
  setThemeName,
  activeMode,
  toggleMode,
}: {
  themeName: string;
  setThemeName: (n: string) => void;
  activeMode: ThemeMode;
  toggleMode: () => void;
}) {
  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={toggleMode}
        aria-label="Toggle light/dark mode"
        className="p-1.5 text-muted-foreground hover:text-foreground transition-colors duration-150"
      >
        {activeMode === "dark" ? <Sun size={13} /> : <Moon size={13} />}
      </button>
      <select
        value={themeName}
        onChange={(e) => setThemeName(e.target.value)}
        className="font-mono text-[10px] tracking-widest bg-card text-muted-foreground border border-border px-2 py-1.5 cursor-pointer hover:text-foreground transition-colors duration-150 outline-none focus:ring-1 focus:ring-ring appearance-none pr-5"
        style={{ backgroundImage: "none" }}
      >
        {THEMES.map((t) => (
          <option key={t.name} value={t.name}>{t.name}</option>
        ))}
      </select>
    </div>
  );
}

// ─── Hash Router ─────────────────────────────────────────────────────────────

function useHashRoute(): [Section, (s: Section) => void] {
  const getSection = (): Section => {
    const hash = window.location.hash.replace("#/", "").replace("#", "") as Section;
    const valid: Section[] = ["product", "code", "design", "architecture"];
    return valid.includes(hash) ? hash : "home";
  };
  const [section, setSection] = useState<Section>(getSection);
  useEffect(() => {
    const handler = () => setSection(getSection());
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);
  const navigate = (s: Section) => {
    window.location.hash = s === "home" ? "" : s;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return [section, navigate];
}

// ─── Content Data ────────────────────────────────────────────────────────────

const PARTICLE_DEMO = `<!DOCTYPE html>
<html style="margin:0;background:#080808;overflow:hidden;">
<canvas id="c" style="display:block;width:100vw;height:100vh;"></canvas>
<script>
const c = document.getElementById('c');
const ctx = c.getContext('2d');
let W, H, particles = [], mouse = {x: -9999, y: -9999};
const N = 1800;
function resize() { W = c.width = c.offsetWidth; H = c.height = c.offsetHeight; }
function init() {
  particles = Array.from({length: N}, () => ({
    x: Math.random() * W, y: Math.random() * H,
    ox: 0, oy: 0,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    size: Math.random() * 1.8 + 0.3,
    alpha: Math.random() * 0.5 + 0.15
  }));
}
function draw() {
  ctx.fillStyle = 'rgba(8,8,8,0.18)';
  ctx.fillRect(0, 0, W, H);
  particles.forEach(p => {
    const dx = mouse.x - p.x, dy = mouse.y - p.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    const R = 120;
    if (dist < R) {
      const force = (1 - dist/R) * 1.2;
      p.vx -= (dx/dist) * force * 0.6;
      p.vy -= (dy/dist) * force * 0.6;
    }
    p.vx *= 0.96; p.vy *= 0.96;
    p.x += p.vx; p.y += p.vy;
    if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
    if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(200,245,0,' + p.alpha + ')';
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
window.addEventListener('resize', () => { resize(); init(); });
document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; });
resize(); init(); draw();
<\/script>
</html>`;

const CLOCK_DEMO = `<!DOCTYPE html>
<html style="margin:0;background:#080808;display:flex;align-items:center;justify-content:center;height:100vh;">
<style>
  body { font-family: 'JetBrains Mono', 'Courier New', monospace; }
  .wrap { display:flex;flex-direction:column;align-items:center;gap:40px; }
  .grid { display:flex;gap:20px;align-items:flex-end; }
  .group { display:flex;gap:8px; }
  .col { display:flex;flex-direction:column-reverse;gap:7px;align-items:center; }
  .lbl { color:#333;font-size:9px;letter-spacing:3px;text-transform:uppercase;margin-top:12px; }
  .bit { width:24px;height:24px;border:1px solid #1a1a1a;transition:background 0.12s,box-shadow 0.12s; }
  .bit.on { background:#c8f500;box-shadow:0 0 10px rgba(200,245,0,0.45); }
  .bit.off { background:#111; }
  .sep { color:#252525;font-size:28px;padding-bottom:36px;letter-spacing:-2px; }
  #ts { color:#2a2a2a;font-size:11px;letter-spacing:4px; }
  #digital { color:#c8f500;font-size:32px;letter-spacing:8px; }
</style>
<div class="wrap">
  <div id="digital">00:00:00</div>
  <div class="grid" id="clock"></div>
  <div id="ts">binary · real-time</div>
</div>
<script>
function toBits(n, count) {
  return Array.from({length:count}, (_,i) => !!(n & (1 << (count-1-i))));
}
function render() {
  const now = new Date();
  const H = now.getHours(), M = now.getMinutes(), S = now.getSeconds();
  const groups = [
    {bits:toBits(Math.floor(H/10),2),lbl:'H'},
    {bits:toBits(H%10,4),lbl:'H'},
    {bits:toBits(Math.floor(M/10),3),lbl:'M'},
    {bits:toBits(M%10,4),lbl:'M'},
    {bits:toBits(Math.floor(S/10),3),lbl:'S'},
    {bits:toBits(S%10,4),lbl:'S'}
  ];
  const clock = document.getElementById('clock');
  clock.innerHTML = '';
  [[0,1],[2,3],[4,5]].forEach(([a,b], gi) => {
    const grp = document.createElement('div');
    grp.className = 'group';
    [groups[a], groups[b]].forEach(g => {
      const col = document.createElement('div');
      col.className = 'col';
      g.bits.forEach(on => {
        const bit = document.createElement('div');
        bit.className = 'bit ' + (on ? 'on' : 'off');
        col.appendChild(bit);
      });
      const lbl = document.createElement('div');
      lbl.className = 'lbl'; lbl.textContent = g.lbl;
      col.appendChild(lbl);
      grp.appendChild(col);
    });
    clock.appendChild(grp);
    if (gi < 2) {
      const sep = document.createElement('div');
      sep.className = 'sep'; sep.textContent = ':';
      clock.appendChild(sep);
    }
  });
  document.getElementById('digital').textContent =
    String(H).padStart(2,'0') + ':' + String(M).padStart(2,'0') + ':' + String(S).padStart(2,'0');
}
render(); setInterval(render, 1000);
<\/script>
</html>`;

const RAYCAST_DEMO = `<!DOCTYPE html>
<html style="margin:0;overflow:hidden;background:#080808;">
<canvas id="c"></canvas>
<div style="position:fixed;bottom:16px;left:0;right:0;text-align:center;color:#333;font-family:monospace;font-size:10px;letter-spacing:3px;text-transform:uppercase;">WASD / Arrows · Move &nbsp;|&nbsp; Q/E · Strafe</div>
<script>
const canvas = document.getElementById('c');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth; canvas.height = window.innerHeight;
const W = canvas.width, H = canvas.height;

const MAP = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1],
  [1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
];

let px=2.5, py=2.5, pa=0.3;
const FOV = Math.PI / 3;
const keys = {};
document.addEventListener('keydown', e => { keys[e.key] = true; e.preventDefault(); });
document.addEventListener('keyup', e => { keys[e.key] = false; });

function castRay(angle) {
  const cos = Math.cos(angle), sin = Math.sin(angle);
  for (let t = 0; t < 16; t += 0.02) {
    const rx = px + cos * t, ry = py + sin * t;
    const mx = Math.floor(rx), my = Math.floor(ry);
    if (MAP[my] && MAP[my][mx]) {
      const side = Math.abs(Math.round(ry) - ry) < Math.abs(Math.round(rx) - rx);
      return { dist: t, side };
    }
  }
  return { dist: 16, side: false };
}

function frame() {
  const spd = 0.06, rot = 0.045;
  if (keys['a'] || keys['A'] || keys['ArrowLeft']) pa -= rot;
  if (keys['d'] || keys['D'] || keys['ArrowRight']) pa += rot;
  const nx_f = px + Math.cos(pa) * spd, ny_f = py + Math.sin(pa) * spd;
  const nx_b = px - Math.cos(pa) * spd, ny_b = py - Math.sin(pa) * spd;
  const ns_l = Math.cos(pa - Math.PI/2), ns_lv = Math.sin(pa - Math.PI/2);
  const ns_r = Math.cos(pa + Math.PI/2), ns_rv = Math.sin(pa + Math.PI/2);
  if (keys['w'] || keys['W'] || keys['ArrowUp']) {
    if (!MAP[Math.floor(py)][Math.floor(nx_f)]) px = nx_f;
    if (!MAP[Math.floor(ny_f)][Math.floor(px)]) py = ny_f;
  }
  if (keys['s'] || keys['S'] || keys['ArrowDown']) {
    if (!MAP[Math.floor(py)][Math.floor(nx_b)]) px = nx_b;
    if (!MAP[Math.floor(ny_b)][Math.floor(px)]) py = ny_b;
  }
  if (keys['q'] || keys['Q']) {
    const lx = px + ns_l * spd, ly = py + ns_lv * spd;
    if (!MAP[Math.floor(py)][Math.floor(lx)]) px = lx;
    if (!MAP[Math.floor(ly)][Math.floor(px)]) py = ly;
  }
  if (keys['e'] || keys['E']) {
    const rx = px + ns_r * spd, ry = py + ns_rv * spd;
    if (!MAP[Math.floor(py)][Math.floor(rx)]) px = rx;
    if (!MAP[Math.floor(ry)][Math.floor(px)]) py = ry;
  }

  ctx.fillStyle = '#0a0a0a';
  ctx.fillRect(0, 0, W, H / 2);
  ctx.fillStyle = '#050505';
  ctx.fillRect(0, H / 2, W, H / 2);

  const COLS = W;
  for (let col = 0; col < COLS; col++) {
    const angle = pa - FOV / 2 + (col / COLS) * FOV;
    const { dist, side } = castRay(angle);
    const corrDist = dist * Math.cos(angle - pa);
    const wallH = Math.min(H, H / corrDist);
    const y = (H - wallH) / 2;
    const bright = Math.max(0.05, 1 - dist / 12);
    const g = Math.floor(245 * bright * (side ? 0.55 : 1));
    const r = Math.floor(200 * bright * (side ? 0.55 : 1));
    ctx.fillStyle = 'rgb(' + r + ',' + g + ',0)';
    ctx.fillRect(col, y, 1, wallH);
  }
  requestAnimationFrame(frame);
}
frame();
<\/script>
</html>`;

const CODE_DEMOS = [
  {
    id: "particles",
    title: "Particle Field",
    description: "Canvas particle system — 1800 particles with real-time mouse-repulsion physics. No libraries. Move cursor over the iframe to interact.",
    tags: ["Canvas API", "Physics Sim", "Vanilla JS"],
    srcDoc: PARTICLE_DEMO,
  },
  {
    id: "clock",
    title: "Binary Clock",
    description: "Real-time binary clock. Hours, minutes, seconds displayed in positional binary columns. Synced to your system clock.",
    tags: ["SVG / DOM", "Real-time", "CSS Transitions"],
    srcDoc: CLOCK_DEMO,
  },
  {
    id: "raycast",
    title: "Raycaster Engine",
    description: "Wolfenstein-style 3D raycasting engine in pure Canvas. DDA ray marching, fisheye correction, directional shading. Use WASD or arrow keys.",
    tags: ["Canvas API", "3D Math", "Game Engine"],
    srcDoc: RAYCAST_DEMO,
  },
];

const PRODUCT_WORK = [
  {
    id: "meridian",
    title: "Meridian Design System",
    period: "2023 → 2024",
    category: "Product · Design Systems",
    description:
      "Built and shipped a cross-platform design system serving 12 product teams and 3 million active users. Established token architecture, Figma component library, and React / React Native implementations from first principles. Reduced design-to-production cycle by 60% — measured across 4 quarters of sprint data.",
    tags: ["Design Systems", "React", "React Native", "Figma Tokens", "Storybook"],
    metrics: [
      { label: "Teams adopted", value: "12" },
      { label: "Users affected", value: "3M" },
      { label: "Faster shipping", value: "60%" },
    ],
    accent: "#c8f500",
  },
  {
    id: "flux",
    title: "Flux — Real-time Collaboration",
    period: "2022 → 2023",
    category: "Product · Infrastructure",
    description:
      "Technical lead and product co-owner for a multiplayer collaboration platform. Designed a CRDT-based data model, led a 6-engineer team, shipped 0→1 in 8 months. Sustained 40k concurrent user sessions at peak. The sync engine became the foundation for two subsequent products.",
    tags: ["CRDTs", "WebSockets", "Go", "Redis", "Product Strategy"],
    metrics: [
      { label: "Time to ship", value: "8mo" },
      { label: "Concurrent sessions", value: "40k" },
      { label: "Engineers led", value: "6" },
    ],
    accent: "#00d4ff",
  },
  {
    id: "atlas",
    title: "Atlas — Internal Developer Platform",
    period: "2021 → 2022",
    category: "Platform Engineering",
    description:
      "Designed and built a self-service IDP that reduced new-service time-to-production from 3 weeks to 4 hours. Included service mesh configuration, automated CI/CD pipelines, and a unified observability dashboard. Adopted by 200+ services within 6 months of launch.",
    tags: ["Kubernetes", "Terraform", "Go", "React", "Platform Eng"],
    metrics: [
      { label: "Time-to-prod", value: "3wk → 4hr" },
      { label: "Services running", value: "200+" },
      { label: "Infra savings / yr", value: "$2M" },
    ],
    accent: "#ff6b35",
  },
];

const DESIGN_WORK = [
  {
    title: "Type System for Developer Tools",
    description:
      "A monospace-forward typographic system for terminal and IDE interfaces. Optimized for information density without sacrificing legibility at 11px.",
    tags: ["Typography", "Developer Tooling", "Systems"],
    img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Cartography UI — Maps as Data",
    description:
      "Interface design for a geospatial analytics product. Designed for dense data layers with systematic approach to color and information hierarchy.",
    tags: ["Data Vis", "Maps", "Color Theory"],
    img: "https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Motion Language for Mobile",
    description:
      "A motion design system defining easing curves, duration scales, and interaction choreography for a flagship iOS application.",
    tags: ["Motion Design", "iOS", "Systems"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop&auto=format",
  },
  {
    title: "Brand Identity — Sequence",
    description:
      "Complete brand identity for a developer tooling startup. Wordmark, visual language, and marketing design system built from first principles.",
    tags: ["Branding", "Identity", "Figma"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop&auto=format",
  },
];

const ARCH_DOC = `# Frontend Platform Architecture

\`Q4 2024 · Principal Engineer\`

## Overview

This document describes the frontend platform architecture adopted across our product suite. The architecture prioritizes developer velocity, observable systems, and incremental adoption — designed to scale from a single team to 20+ without a global rewrite.

---

## Core Principles

**Islands of Interactivity**
Static-first rendering with hydrated interactive islands. Reduces JavaScript payload by 70% on average. Framework-agnostic: React, Svelte, and vanilla JS islands coexist in the same shell.

**Build-time Contract Enforcement**
Schema-driven API contracts compiled at build time. Breaking changes surface as type errors, not runtime 500s. Contract registry lives alongside the API, versioned with it.

**Observable by Default**
Every module emits structured telemetry at the boundary. No manual instrumentation required. Core Web Vitals, custom business events, and error boundaries feed the same pipeline.

---

## Layer Diagram

\`\`\`
┌─────────────────────────────────────────┐
│              CDN / Edge                  │
│   Cloudflare Workers · Cache · A/B       │
└────────────────┬────────────────────────┘
                 │
┌────────────────▼────────────────────────┐
│          Application Shell               │
│   React 18 · RSC · Streaming SSR         │
├─────────────────────────────────────────┤
│          Feature Modules                 │
│   Lazy-loaded islands · Code-split       │
├─────────────────────────────────────────┤
│          Platform Layer                  │
│   Auth · Feature Flags · Telemetry       │
├─────────────────────────────────────────┤
│          API Contracts                   │
│   tRPC · Zod · OpenAPI spec              │
└─────────────────────────────────────────┘
\`\`\`

---

## Architecture Decision Records

### ADR-001: React Server Components over SPA

**Context:** High First Contentful Paint on content-heavy pages. Legacy SPA model hydrating ~420kb of JS before useful content appeared.

**Decision:** Adopt RSC for data-fetching routes while keeping client-only components where interactivity demands it.

**Consequences:** Streaming SSR reduces TTFB by ~400ms at p75. Bundle size down 45%. Learning curve for the team mitigated with onboarding sessions and internal RFC process.

---

### ADR-002: Module Federation for Micro-frontends

**Context:** 8 teams shipping to the same shell. Deployment coupling was a bottleneck — one team's broken build blocked all deploys.

**Decision:** Webpack Module Federation with a contract registry enforced via CI.

**Consequences:** Independent deploys per team. Requires strict API surface versioning — managed via automated compatibility checks in CI. Shared dependencies negotiated at runtime.

---

### ADR-003: Edge-first Authentication

**Context:** Auth latency at 180ms p50 from origin. Users felt the pause on every hard navigation.

**Decision:** JWT validation at the Cloudflare Worker layer, session data replicated to KV store with 5-minute TTL.

**Consequences:** Auth latency reduced to 4ms p50. Invalidation complexity increased — handled via push invalidation escape hatch and short TTL as the primary guard.

---

## Performance Benchmarks

| Metric        | Before  | After   | Target   |
|---------------|---------|---------|----------|
| LCP           | 3.8s    | 1.2s    | < 2.5s   |
| FID           | 180ms   | 22ms    | < 100ms  |
| CLS           | 0.18    | 0.04    | < 0.1    |
| Bundle (gzip) | 420kb   | 95kb    | < 150kb  |
| TTFB (p75)    | 620ms   | 210ms   | < 400ms  |

---

## Team & Governance

The platform team operates as an **enabling team** (Team Topologies). We maintain the build toolchain, CI templates, and platform primitives. Feature teams own their modules end-to-end.

Office hours: Tuesday + Thursday 14:00 UTC
`;

// ─── Markdown Renderer ───────────────────────────────────────────────────────

function parseInline(text: string): React.ReactNode[] {
  const parts = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**"))
      return <strong key={i} className="text-foreground font-semibold">{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*"))
      return <em key={i} className="italic text-muted-foreground">{part.slice(1, -1)}</em>;
    if (part.startsWith("`") && part.endsWith("`"))
      return <code key={i} className="font-mono text-[0.82em] text-primary bg-muted px-1.5 py-0.5 rounded-sm">{part.slice(1, -1)}</code>;
    return part;
  });
}

function MarkdownRenderer({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Fenced code block
    if (line.startsWith("```")) {
      const code: string[] = [];
      i++;
      while (i < lines.length && !lines[i].startsWith("```")) {
        code.push(lines[i]);
        i++;
      }
      elements.push(
        <pre key={i} className="my-6 p-4 bg-muted border border-border overflow-x-auto">
          <code className="font-mono text-xs text-muted-foreground leading-relaxed whitespace-pre">
            {code.join("\n")}
          </code>
        </pre>
      );
    }
    // Table
    else if (line.startsWith("|") && line.endsWith("|")) {
      const rows: string[][] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        if (!lines[i].match(/^\|[-| :]+\|$/)) {
          rows.push(lines[i].split("|").slice(1, -1).map((c) => c.trim()));
        }
        i++;
      }
      elements.push(
        <div key={i} className="my-6 overflow-x-auto">
          <table className="w-full border-collapse text-sm font-mono">
            <thead>
              <tr>
                {rows[0]?.map((cell, ci) => (
                  <th key={ci} className="border border-border px-4 py-2 text-left text-muted-foreground font-medium text-xs uppercase tracking-wider">{cell}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.slice(1).map((row, ri) => (
                <tr key={ri} className="border-b border-border hover:bg-muted/30 transition-colors">
                  {row.map((cell, ci) => (
                    <td key={ci} className="border border-border px-4 py-2 text-foreground">{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }
    // HR
    else if (line.match(/^---+$/)) {
      elements.push(<hr key={i} className="my-8 border-t border-border" />);
    }
    // H1
    else if (line.startsWith("# ")) {
      elements.push(
        <h1 key={i} className="font-mono text-2xl font-bold text-foreground mt-10 mb-4 leading-tight tracking-tight">
          {line.slice(2)}
        </h1>
      );
    }
    // H2
    else if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-mono text-base font-semibold text-foreground mt-10 mb-3 tracking-wide uppercase">
          <span className="text-primary mr-2">§</span>{line.slice(3)}
        </h2>
      );
    }
    // H3
    else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-mono text-sm font-semibold text-foreground mt-6 mb-2 tracking-widest uppercase">
          {line.slice(4)}
        </h3>
      );
    }
    // Blockquote / backtick line (single-line code as inline block)
    else if (line.startsWith("`") && line.endsWith("`") && !line.startsWith("```")) {
      elements.push(
        <p key={i} className="font-mono text-xs text-muted-foreground mb-4">{line.slice(1, -1)}</p>
      );
    }
    // List item
    else if (line.match(/^[-*] /)) {
      const items: string[] = [];
      while (i < lines.length && lines[i].match(/^[-*] /)) {
        items.push(lines[i].slice(2));
        i++;
      }
      elements.push(
        <ul key={i} className="my-4 space-y-1">
          {items.map((item, ii) => (
            <li key={ii} className="flex gap-3 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5 flex-shrink-0">—</span>
              <span>{parseInline(item)}</span>
            </li>
          ))}
        </ul>
      );
      continue;
    }
    // Empty line
    else if (line.trim() === "") {
      // skip
    }
    // Paragraph
    else {
      elements.push(
        <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-3">
          {parseInline(line)}
        </p>
      );
    }

    i++;
  }

  return <div className="max-w-2xl">{elements}</div>;
}

// ─── Components ───────────────────────────────────────────────────────────────

function Tag({ children }: { children: string }) {
  return (
    <span className="inline-block font-mono text-[10px] text-muted-foreground border border-border px-2 py-0.5 tracking-wider uppercase">
      {children}
    </span>
  );
}

function NavItem({
  label,
  section,
  icon,
  active,
  onClick,
}: {
  label: string;
  section: Section;
  icon: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`group w-full flex items-center gap-3 px-4 py-2.5 text-left transition-all duration-200 font-mono text-xs tracking-widest uppercase relative ${
        active
          ? "text-primary"
          : "text-muted-foreground hover:text-foreground"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-0 bottom-0 w-px bg-primary" />
      )}
      <span className={`transition-colors duration-200 ${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
        {icon}
      </span>
      {label}
      {active && <ChevronRight size={10} className="ml-auto text-primary" />}
    </button>
  );
}

function SandboxFrame({ srcDoc, title }: { srcDoc: string; title: string }) {
  const [active, setActive] = useState(false);
  return (
    <div className="relative w-full aspect-video bg-muted border border-border overflow-hidden group">
      {!active && (
        <button
          onClick={() => setActive(true)}
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-muted hover:bg-secondary transition-colors duration-200 z-10"
        >
          <Terminal size={24} className="text-muted-foreground" />
          <span className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
            Click to run {title}
          </span>
        </button>
      )}
      {active && (
        <iframe
          srcDoc={srcDoc}
          title={title}
          sandbox="allow-scripts"
          className="w-full h-full border-0"
        />
      )}
    </div>
  );
}

// ─── Pages ───────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (s: Section) => void }) {
  const sections: { id: Section; label: string; desc: string; icon: React.ReactNode; accent: string }[] = [
    { id: "product", label: "Product", desc: "Case studies in platform, tooling, and collaboration.", icon: <Box size={16} />, accent: "#c8f500" },
    { id: "code", label: "Code", desc: "Interactive demos — canvas, 3D engines, real-time systems.", icon: <Terminal size={16} />, accent: "#00d4ff" },
    { id: "design", label: "Design", desc: "Visual systems, brand identity, motion, and data vis.", icon: <Layers size={16} />, accent: "#ff6b35" },
    { id: "architecture", label: "Architecture", desc: "Technical documents, ADRs, and platform blueprints.", icon: <Cpu size={16} />, accent: "#a855f7" },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="px-8 pt-16 pb-20 border-b border-border">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
          Principal Engineer · Designer · Builder
        </p>
        <h1
          className="font-mono font-bold leading-none tracking-tighter text-foreground mb-6"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
        >
          Systems
          <br />
          <span className="text-primary">at scale.</span>
          <br />
          Products
          <br />
          that land.
        </h1>
        <div className="flex items-center gap-6 mt-10">
          <div className="h-px flex-1 bg-border max-w-[80px]" />
          <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
            I work at the intersection of engineering, design, and product strategy.
            10 years building systems that reach millions. Currently principal at <span className="text-foreground">Layerstack</span>.
          </p>
        </div>
      </section>

      {/* Selected work grid */}
      <section className="px-8 pt-12 pb-16">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8">
          Selected Work
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(s.id)}
              className="group bg-background p-6 text-left hover:bg-muted transition-colors duration-200 flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <span style={{ color: s.accent }} className="transition-transform duration-200 group-hover:scale-110">
                  {s.icon}
                </span>
                <ArrowRight
                  size={14}
                  className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:translate-x-1"
                />
              </div>
              <div>
                <h3 className="font-mono text-sm font-semibold text-foreground tracking-wider uppercase mb-1">
                  {s.label}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Status bar */}
      <div className="mt-auto px-8 py-4 border-t border-border flex items-center gap-4">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-xs text-muted-foreground tracking-widest">Available for principal / staff roles — Q1 2025</span>
      </div>
    </div>
  );
}

function ProductPage() {
  return (
    <div className="px-8 py-12">
      <header className="mb-12 border-b border-border pb-8">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Selected Work</p>
        <h2 className="font-mono text-3xl font-bold text-foreground tracking-tight">Product</h2>
      </header>

      <div className="flex flex-col divide-y divide-border">
        {PRODUCT_WORK.map((work) => (
          <article key={work.id} className="py-10 group">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-muted-foreground tracking-widest">{work.period}</span>
                  <span className="text-border">·</span>
                  <span className="font-mono text-xs" style={{ color: work.accent }}>{work.category}</span>
                </div>
                <h3 className="font-mono text-lg font-semibold text-foreground mb-4 leading-tight">{work.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-5">{work.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {work.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
              <div className="sm:min-w-[180px]">
                <div className="grid grid-cols-1 gap-px bg-border">
                  {work.metrics.map((m) => (
                    <div key={m.label} className="bg-background px-4 py-3">
                      <div className="font-mono text-lg font-bold" style={{ color: work.accent }}>{m.value}</div>
                      <div className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function CodePage() {
  return (
    <div className="px-8 py-12">
      <header className="mb-12 border-b border-border pb-8">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Interactive Demos</p>
        <h2 className="font-mono text-3xl font-bold text-foreground tracking-tight">Code</h2>
        <p className="text-sm text-muted-foreground mt-3 max-w-md leading-relaxed">
          Self-contained demos running in sandboxed iframes. No frameworks. Click to activate each demo.
        </p>
      </header>

      <div className="flex flex-col gap-16">
        {CODE_DEMOS.map((demo, i) => (
          <article key={demo.id}>
            <div className="flex items-center gap-4 mb-4">
              <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-mono text-sm font-semibold text-foreground tracking-wide uppercase">{demo.title}</h3>
            </div>
            <SandboxFrame srcDoc={demo.srcDoc} title={demo.title} />
            <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">{demo.description}</p>
              <div className="flex flex-wrap gap-2 flex-shrink-0">
                {demo.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function DesignPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="px-8 py-12">
      <header className="mb-12 border-b border-border pb-8">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Visual Work</p>
        <h2 className="font-mono text-3xl font-bold text-foreground tracking-tight">Design</h2>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border">
        {DESIGN_WORK.map((work, i) => (
          <article
            key={i}
            className="group bg-background cursor-pointer"
            onClick={() => setSelected(selected === i ? null : i)}
          >
            <div className="overflow-hidden bg-muted aspect-video">
              <img
                src={work.img}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-60 group-hover:opacity-80"
              />
            </div>
            <div className="p-5">
              <h3 className="font-mono text-sm font-semibold text-foreground mb-2 leading-snug">{work.title}</h3>
              {selected === i && (
                <p className="text-xs text-muted-foreground leading-relaxed mb-3 transition-all">
                  {work.description}
                </p>
              )}
              <div className="flex flex-wrap gap-2">
                {work.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

function ArchitecturePage() {
  return (
    <div className="px-8 py-12">
      <header className="mb-12 border-b border-border pb-8">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-3">Technical Writing</p>
        <h2 className="font-mono text-3xl font-bold text-foreground tracking-tight">Architecture</h2>
        <div className="flex gap-3 mt-4">
          <Tag>Markdown</Tag>
          <Tag>ADR</Tag>
          <Tag>Living Document</Tag>
        </div>
      </header>
      <MarkdownRenderer content={ARCH_DOC} />
    </div>
  );
}

// ─── Page Transition ─────────────────────────────────────────────────────────

function PageTransition({ section, children }: { section: Section; children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const prevSection = useRef(section);

  useEffect(() => {
    if (section !== prevSection.current) {
      setVisible(false);
      const t = setTimeout(() => {
        prevSection.current = section;
        setVisible(true);
      }, 180);
      return () => clearTimeout(t);
    }
  }, [section]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 180ms ease, transform 180ms ease",
      }}
    >
      {children}
    </div>
  );
}

// ─── Sidebar ─────────────────────────────────────────────────────────────────

const NAV_ITEMS: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Overview", icon: <Box size={13} /> },
  { id: "product", label: "Product", icon: <Layers size={13} /> },
  { id: "code", label: "Code", icon: <Terminal size={13} /> },
  { id: "design", label: "Design", icon: <ExternalLink size={13} /> },
  { id: "architecture", label: "Architecture", icon: <Cpu size={13} /> },
];

function Sidebar({
  section,
  navigate,
  open,
  onClose,
}: {
  section: Section;
  navigate: (s: Section) => void;
  open: boolean;
  onClose: () => void;
}) {
  const handleNav = useCallback(
    (s: Section) => {
      navigate(s);
      onClose();
    },
    [navigate, onClose]
  );

  return (
    <>
      {/* Overlay on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`
          fixed top-0 left-0 bottom-0 z-40 w-56 bg-background border-r border-border
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Logo */}
        <div className="px-4 pt-6 pb-5 border-b border-border flex items-center justify-between">
          <div>
            <div className="font-mono text-sm font-bold text-foreground tracking-wider">
              A<span className="text-primary">.</span>K
            </div>
            <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">
              Principal Eng · Design
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-1">
            <X size={14} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 pt-4 pb-4">
          {NAV_ITEMS.map((item) => (
            <NavItem
              key={item.id}
              label={item.label}
              section={item.id}
              icon={item.icon}
              active={section === item.id}
              onClick={() => handleNav(item.id)}
            />
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 pb-6 pt-4 border-t border-border">
          <div className="flex gap-3 mb-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <ExternalLink size={14} />
            </a>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} — A.K.
          </div>
        </div>
      </aside>
    </>
  );
}

// ─── App ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [section, navigate] = useHashRoute();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeName, setThemeName, activeMode, toggleMode } = useTheme();

  const renderPage = () => {
    switch (section) {
      case "product": return <ProductPage />;
      case "code": return <CodePage />;
      case "design": return <DesignPage />;
      case "architecture": return <ArchitecturePage />;
      default: return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Sidebar
        section={section}
        navigate={navigate}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar — always visible */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background sticky top-0 z-20">
          {/* Left: hamburger (mobile) or breadcrumb (desktop) */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-1 -ml-1"
            >
              <Menu size={16} />
            </button>
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              {section === "home" ? "Overview" : section}
            </span>
          </div>

          {/* Right: theme controls */}
          <ThemeControls
            themeName={themeName}
            setThemeName={setThemeName}
            activeMode={activeMode}
            toggleMode={toggleMode}
          />
        </div>

        {/* Main scroll area */}
        <main className="flex-1 overflow-y-auto" style={{ scrollbarWidth: "none" }}>
          <PageTransition section={section}>
            {renderPage()}
          </PageTransition>
        </main>
      </div>

      <style>{`
        main::-webkit-scrollbar { display: none; }
        * { box-sizing: border-box; }
      `}</style>
    </div>
  );
}
