import { Fragment, useState, useEffect, useRef, useCallback } from "react";
import { Menu, X, Github, ExternalLink, ArrowRight, Terminal, Layers, Box, Cpu, ChevronRight, Sun, Moon, Briefcase, Mail, Linkedin, Package } from "lucide-react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Section = "home" | "product" | "code" | "experience" | "architecture" | "career";
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

interface CodeRepo {
  id: string;
  title: string;
  description: string;
  tags: string[];
  family: string;
  url?: string;
}

interface ProductSignal {
  label: string;
  value: string;
}

interface ProductWork {
  id: string;
  title: string;
  period: string;
  status: string;
  category: string;
  description: string;
  tags: string[];
  metrics: ProductSignal[];
  accent: string;
  suite?: string;
  url?: string;
}

const CONTACT_EMAIL_CODES = [
  102, 111, 114, 104, 105, 114, 101, 64, 100, 97, 110, 105, 101, 108, 99,
  97, 115, 115, 105, 108, 46, 99, 111, 109,
];
const CONTACT_SCHEME_CODES = [109, 97, 105, 108, 116, 111];

function openContactEmail() {
  const email = String.fromCharCode(...CONTACT_EMAIL_CODES);
  const scheme = String.fromCharCode(...CONTACT_SCHEME_CODES);
  window.location.href = `${scheme}:${email}`;
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
    "--border":                `rgba(${fr},${fg},${fb},0.16)`,
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
        className="hidden sm:block font-mono text-[10px] tracking-widest bg-card text-muted-foreground border border-border px-2 py-1.5 cursor-pointer hover:text-foreground transition-colors duration-150 outline-none focus:ring-1 focus:ring-ring appearance-none pr-5 w-[10rem]"
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
    const valid: Section[] = ["product", "code", "experience", "architecture", "career"];
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

const CODE_FAMILIES = [
  "Featured code",
  "Supporting repos",
];

const CODE_REPOS: CodeRepo[] = [
  {
    id: "straight-jacket",
    title: "Straight Jacket",
    description:
      "A CLI, read-only MCP server, and agent skill for human-protected repo files. The model covers protected paths, authorization flow, CI/pre-commit enforcement, and threat-model decisions without giving agents a bypass path.",
    tags: ["MCP", "CLI", "Protected Files", "CI"],
    family: "Featured code",
    url: "https://github.com/dcassil/straight-jacket",
  },
  {
    id: "frame-link-stardust-code",
    title: "Frame Link / Stardust",
    description:
      "Typed iframe request/response protocol, origin validation, React integration, runnable examples, and a visual-editing adapter composed on top of a small transport primitive.",
    tags: ["TypeScript", "Protocol", "React", "Browser Security"],
    family: "Featured code",
    url: "https://github.com/dcassil/frame-link",
  },
  {
    id: "ci-health-audit",
    title: "CI Health Audit",
    description:
      "A deterministic code-health score for JS/TS codebases, runnable as a CLI, GitHub Action, or pre-commit gate. It reinforces the architecture thesis with analyzers, failure thresholds, and actionable output.",
    tags: ["TypeScript", "GitHub Action", "Pre-commit", "Static Analysis"],
    family: "Featured code",
    url: "https://github.com/dcassil/ci-health-audit",
  },
  {
    id: "versioned-content-engine",
    title: "versioned-content-engine",
    description:
      "A headless, dependency-free library for draft/live content versioning. Append-only records with deterministic materialization and corrected tombstone semantics — the versioning core, decoupled from any storage or UI.",
    tags: ["TypeScript", "Versioning", "Headless", "Data Model"],
    family: "Supporting repos",
    url: "https://github.com/dcassil/versioned-content-engine",
  },
  {
    id: "transactor",
    title: "transactor",
    description:
      "Client-side transactional change management: sequence edits, undo/redo, edge deduplication, superimpose changes onto a dataset, and flush as batched saves. Published to npm as sequence-transactor.",
    tags: ["TypeScript", "Undo/Redo", "State", "npm"],
    family: "Supporting repos",
    url: "https://github.com/dcassil/transactor",
  },
];

const PRODUCT_SUITE_DESCRIPTIONS: Record<string, string> = {
  "ShoreWorks Software Health Suite":
    "A connected suite for understanding software health, executing repository analysis, and keeping human and AI-driven changes aligned with project standards.",
  "Agent Workflow + Guardrail Systems":
    "A set of tools for making AI-assisted engineering more deliberate: reusable agent procedures, structured execution paths, and enforceable boundaries around sensitive repository changes.",
};

const PRODUCT_WORK: ProductWork[] = [
  {
    id: "shoreworks",
    title: "ShoreWorks",
    period: "2026",
    status: "Live product",
    category: "Developer Tools · SaaS",
    description:
      "Founder-facing SaaS for understanding whether a codebase is becoming easier or harder to build on. ShoreWorks connects to GitHub, analyzes repositories through the Shore Code product layer and Shore Runner worker, translates engineering signals into business language, and folds ShoreGuard-style thresholds into the product story instead of presenting guardrails as a separate tool.",
    tags: ["Next.js", "Supabase", "GitHub", "Code Health", "SaaS"],
    metrics: [
      { label: "Product form", value: "Founder-facing SaaS" },
      { label: "Architecture", value: "Product + stateless runner" },
      { label: "Outcome", value: "Turns code health into business risk" },
    ],
    accent: "#00d4ff",
    url: "https://www.casspear.com/",
  },
  {
    id: "straight-jacket",
    title: "Straight Jacket",
    period: "2026",
    status: "Working system",
    category: "AI Safety · Repository Protection",
    description:
      "A protection layer for human-owned repository files. Straight Jacket lets a project mark sensitive paths, gives agents a read-only way to verify protected state, and routes protected-file changes through explicit human authorization instead of trusting prompt discipline.",
    tags: ["MCP", "CLI", "Agent Safety", "Protected Files"],
    metrics: [
      { label: "Product form", value: "CLI + MCP + plugin" },
      { label: "Audience", value: "Teams using coding agents" },
      { label: "Outcome", value: "Keeps sensitive files human-authorized" },
    ],
    accent: "#ff6b35",
    url: "https://github.com/dcassil/straight-jacket",
  },
  {
    id: "knack-live-builder",
    title: "Knack Live-App Builder Prototype",
    period: "2023",
    status: "Prototype",
    category: "Product Architecture · UX Systems",
    description:
      "A live-app editing prototype that let users interact with their actual hosted app inside an iframe instead of a detached simulation. The model used postMessage, parent-side overlays, context menus, drop zones, drag handles, collaboration states, and draft/versioning concepts.",
    tags: ["React", "iframe", "postMessage", "Overlays", "Versioning"],
    metrics: [
      { label: "Product form", value: "Visual application builder" },
      { label: "Audience", value: "No-code application creators" },
      { label: "Outcome", value: "Unifies editing and the live product" },
    ],
    accent: "#a855f7",
  },
  {
    id: "governance-meeting-intelligence",
    title: "Governance Meeting Intelligence Platform",
    period: "2026",
    status: "Working system",
    category: "Workflow Automation · AI Intelligence",
    description:
      "A meeting workflow system that turns recorded governance sessions into structured, usable outcomes. It captures and transcribes meetings, uses AI to identify decisions, action items, owners, deadlines, risks, and key discussion themes, then organizes the results into reviewable minutes and a searchable institutional record.",
    tags: ["AI", "Transcription", "Governance", "Workflow Automation"],
    metrics: [
      { label: "Product form", value: "AI workflow platform" },
      { label: "Audience", value: "Governance councils" },
      { label: "Outcome", value: "Turns discussion into decisions and actions" },
    ],
    accent: "#22c55e",
  },
  {
    id: "frame-link-stardust",
    title: "Frame Link → Stardust Iframe Adapter",
    period: "2021",
    status: "Open-source foundation",
    category: "Protocol · Visual Editing",
    description:
      "A typed iframe communication primitive composed into a visual-editing adapter. Frame Link handles secure host/iframe request-response messaging; Stardust maps editable elements inside an embedded site to host-side overlays, content injection, and draft/live flows.",
    tags: ["TypeScript", "postMessage", "iframe", "Visual Editing"],
    metrics: [
      { label: "Product form", value: "Protocol + visual-editing adapter" },
      { label: "Audience", value: "Embedded application teams" },
      { label: "Outcome", value: "Enables safe live-site editing" },
    ],
    accent: "#c8f500",
  },
];

const EXPERIENCE_WORK = [
  {
    company: "Hiveginx",
    role: "Co-Founder",
    period: "Apr 2025 - Apr 2026",
    location: "AI/ML product suite",
    summary:
      "Joined as a founding team member to design and build the foundation of a growing AI/ML product suite spanning medical, banking, and bidding-platform use cases.",
    highlights: [
      "Worked with leadership to identify product opportunities, define shared platform capabilities, and turn early commercial concepts into viable multi-tenant products.",
      "Led development across frontend, backend, and multi-tenant database architecture.",
      "Built initially on AWS, then helped guide the platform through a transition to Azure.",
      "Shaped core capabilities around identity confirmation, customer qualification, risk detection, reporting, onboarding workflow builders, customer management, inventory, and dashboard-based claim initiation.",
      "Worked closely with executive and technical leadership as the platform expanded across products and industries.",
    ],
    tags: ["AI/ML", "Multi-Tenant Architecture", "AWS", "Azure", "Product Foundation"],
  },
  {
    company: "Knack",
    role: "Staff Engineer Front End",
    period: "Mar 2023 - Jan 2024",
    location: "Remote",
    summary:
      "Brought in to evaluate and define modernization paths for core application-building systems moving from Vue and Backbone toward React.",
    highlights: [
      "Produced strategic implementation options with tradeoffs, risks, time estimates, and expected benefits.",
      "Partnered with Product, Design, and Engineering to shape the target concept and execution plan for interactive app-building experiences.",
      "Contributed to early AI work on the platform.",
      "Researched and prototyped options for building or integrating an IPaaS solution.",
    ],
    tags: ["React", "Vue", "Backbone", "Product Strategy", "AI Prototypes"],
  },
  {
    company: "NetSuite / Oracle NetSuite",
    role: "Senior Software Engineer → Team Lead → Engineering Manager",
    period: "Mar 2013 - Apr 2021",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Eight-year progression across enterprise eCommerce, CMS, platform modernization, R&D, and engineering leadership through NetSuite's acquisition by Oracle.",
    highlights: [
      "Built enterprise eCommerce and content-management systems with attention to data architecture, UI architecture, and customer-facing UX.",
      "Bridged engineering and design by managing SCSS and JavaScript implementation for UI/UX-heavy product work.",
      "Led JavaScript and React engineers improving eCommerce and website-management CMS products.",
      "Evaluated frontend frameworks, internal platform technologies, and architectural options for new product directions.",
      "Recovered a stalled major redesign by aligning architecture, design, engineering, scope, and delivery expectations.",
    ],
    tags: ["React", "CMS", "eCommerce", "Engineering Leadership", "R&D"],
  },
  {
    company: "Swish",
    role: "Founder / Product Engineer",
    period: "2010 - 2013",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Early product and client work across web, interface design, frontend implementation, and content-driven systems. This is where the career arc started: close to users, close to design, and responsible for making the product actually work.",
    highlights: [
      "Designed and built user-facing websites and product experiences from concept through delivery.",
      "Worked directly with clients and stakeholders to translate needs, constraints, and rough ideas into usable software.",
      "Built the foundation for a user-first engineering style: understand the problem, make the interface clear, and keep the implementation practical.",
      "Established the product/design/engineering overlap that carried into enterprise SaaS, application builders, and AI-assisted engineering systems.",
    ],
    tags: ["Product Design", "Frontend", "Client Delivery", "UX", "Web Systems"],
  },
];

const CAREER_QUOTES = [
  {
    quote:
      "He is my go to guy for insights on keeping the user first and for squad-wide communication as scrum master.",
    source: "NetSuite manager review",
    theme: "User-first product thinking",
  },
  {
    quote:
      "I can give you something and trust that it is going to be handled properly and on time.",
    source: "NetSuite manager review",
    theme: "Ownership and follow-through",
  },
  {
    quote:
      "He sees pain points that need to be solved by certain parties and many times takes it upon himself to make sure that communication is happening.",
    source: "NetSuite quarterly review",
    theme: "Cross-team alignment",
  },
  {
    quote:
      "When I was out for a couple weeks, I was able to trust that the team would still progress and Daniel was a key component to that.",
    source: "NetSuite quarterly review",
    theme: "Team continuity and trust",
  },
  {
    quote:
      "Daniel is an idea guy. He's sharp and up to date on the task at hand.",
    source: "Matthew Sanders, Human Interface Designer at Apple · client recommendation, 2010",
    theme: "Product and design instinct",
  },
];

const ARCH_DOC = `# Architecture As An Enforced System

\`Selected architecture work · 2015 → 2026\`

## Overview

I think architecture should make good decisions easier to preserve.

That means clear boundaries, small understandable systems, typed contracts, tests, schemas, and gates that keep important decisions alive after the original conversation is over. I want enough structure to support change without turning the architecture itself into the thing slowing the product down.

That matters even more with AI. AI can produce a tremendous amount of code quickly, but speed magnifies both good and bad decisions. My recent focus has been building deterministic guardrails and workflows that let humans and AI move fast without allowing the system to quietly lose its shape.

---

## Core Principles

**Start with the user**
Whether I am writing code, designing a database, or planning a product, I start by looking at the system from the user's perspective: what they need, what they feel, what matters to them, and what does not. Product judgment comes before implementation detail.

**Build for useful, not perfect**
I care about beautiful systems, clean code, and efficient execution, but I do not believe perfection is the goal. The sweet spot is often getting 90% of perfect in 50% of the time, with enough structure to pivot, expand, and keep moving without overbuilding.

**Make AI work inside guardrails**
AI can produce an enormous amount of useful code quickly, but it needs strong planning, clear design, and firm enforcement. My recent focus is building the tools, workflows, and validation gates that keep AI-generated work aligned with the product, the architecture, and the user's needs.

---

## How I Evaluate Architecture

- Can a new contributor understand the system without relying on tribal knowledge?
- Are critical decisions enforced by code, tests, schemas, or gates—not convention?
- Does the architecture make the product easier to change, not just easier to diagram?
- Can the system absorb rapid human and AI-driven change without losing its shape?
- Does the design make the right path easier than the wrong one?
- Can architectural drift be caught early, before it becomes a rewrite?

---

## Selected Systems

**Frame Link / Stardust**
Typed iframe host communication, origin-aware request/response flows, host-side overlays, editable-target mapping, content injection, and draft/live concepts.

**Shore Code / Shore Runner**
Multi-tenant code-health product plus stateless worker: GitHub App integration, queued scans, scan leasing, static-analysis orchestration, metrics aggregation, and UI surfaces for understanding codebase health.

**Katana / Dev Genie**
Agent workflow tooling built around explicit phase machines, role contracts, structured artifacts, architecture guardrails, and validation paths.

**NetSuite rules and versioning**
Foundational CMS/eCommerce architecture for draft/live states, scheduled releases, rollback, roll-forward, auditability, and extensibility.

---

## Architecture Notes

### ADR-001: Design from the user's real workflow

**Context:** Builder tools often optimize for the system model instead of the user's mental model. That creates technically clean software that still feels indirect, fragile, or detached from the thing the user is actually trying to change.

**Decision:** Put the user's live experience at the center. For visual editing, that means working against the real page, preserving context, making change targets obvious, and keeping the underlying transport boring enough that the product experience stays the focus.

**Consequence:** The architecture supports the workflow instead of showing off around it. Technical boundaries still matter, but they exist to make the product easier to use, easier to change, and easier to trust.

---

### ADR-002: Treat code-health scanning as product plus infrastructure

**Context:** Repository analysis needs a user-facing product surface, but scanning untrusted repositories also needs isolated worker behavior and careful credential handling.

**Decision:** Split Shore Code from Shore Runner. The product owns auth, teams, dashboards, and scan ingest. The runner owns leasing, scanner orchestration, and result posting.

**Consequence:** The product and worker can evolve independently while preserving a clean operational boundary.

---

### ADR-003: Guardrails beat guidelines for AI work

**Context:** Prompt-only architecture guidance is easy for AI agents to ignore or gradually dilute.

**Decision:** Use static analysis, dependency boundaries, complexity limits, typed contracts, and workflow gates as part of the development environment.

**Consequence:** The architecture becomes a working constraint, not a paragraph people must remember.

---

## Architecture Across The Career Arc

**Swish / early product work**
The early work was close to users, clients, and the actual product surface: websites, interfaces, content flows, and the practical tradeoffs that happen when design intent meets implementation. That period shaped the habit of treating architecture as a way to make the user's path clearer, not just the codebase cleaner.

**NetSuite / Oracle NetSuite**
Eight years inside enterprise eCommerce and CMS systems made the cost of architectural drift concrete. Draft/live content models, scheduled releases, rollback paths, platform extensibility, UI modernization, and team leadership all required systems that could survive long product cycles, multiple teams, and changing business priorities.

**Knack**
Modernizing an application-building platform meant balancing current user behavior with future technical direction. The useful architecture question was not "which framework wins," but how to move from older Vue and Backbone patterns toward React without breaking the product model, the builder experience, or the team's ability to ship.

**Hiveginx**
Founding-team product work across medical, banking, and bidding-platform use cases pushed architecture into platform territory: multi-tenant data models, shared identity and qualification workflows, reporting, onboarding builders, and enough cloud flexibility to move from AWS toward Azure as the company evolved.

**ShoreWorks / AI guardrails**
The current work turns those lessons into enforcement. ShoreWorks, Katana, Dev Genie, Agent Kit, and Straight Jacket all come from the same belief: fast-moving teams and AI agents need clear boundaries, executable checks, and workflows that catch drift before the system has to be rewritten.

## Evidence

- Frame Link: 35/35 tests, typed API, clean dependency graph.
- Shore Code: typecheck/lint/design-check green, 493/493 unit tests, zero dependency cycles in the reviewed copy.
- Shore Runner: passing build and 130/130 tests.
- Katana: passing build and 299/299 tests across the reviewed copy.
- Dev Genie: build/typecheck/lint green with protocol, role, and engine coverage.
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
        <h1 key={i} className="font-mono text-2xl font-bold text-foreground mt-10 mb-4 leading-tight">
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
    <span className="inline-flex items-center h-6 font-mono text-[10px] text-muted-foreground border border-border/80 bg-muted/30 px-2 tracking-wider uppercase">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="font-mono text-[11px] text-primary tracking-widest uppercase">
      {children}
    </p>
  );
}

function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <header className="mb-10 border-b border-border pb-8">
      <SectionLabel>{eyebrow}</SectionLabel>
      <div className="mt-3 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="font-mono text-3xl font-bold text-foreground">{title}</h2>
          {description && (
            <p className="text-sm text-muted-foreground mt-3 max-w-2xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
        {children && <div className="flex flex-wrap gap-2">{children}</div>}
      </div>
    </header>
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
      className={`group w-full flex items-center gap-3 px-4 py-3 text-left transition-all duration-200 font-mono text-[11px] tracking-widest uppercase relative ${
        active
          ? "text-primary bg-sidebar-accent"
          : "text-muted-foreground hover:text-foreground hover:bg-sidebar-accent/70"
      }`}
    >
      {active && (
        <span className="absolute left-0 top-2 bottom-2 w-0.5 bg-primary" />
      )}
      <span className={`transition-colors duration-200 ${active ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}>
        {icon}
      </span>
      {label}
      {active && <ChevronRight size={10} className="ml-auto text-primary" />}
    </button>
  );
}

// ─── Pages ───────────────────────────────────────────────────────────────────

function HomePage({ navigate }: { navigate: (s: Section) => void }) {
  const sections: { id: Section; label: string; desc: string; icon: React.ReactNode; accent: string }[] = [
    { id: "product", label: "Product", desc: "Real product and platform systems: iframe editing, code health, AI workflow tools.", icon: <Box size={16} />, accent: "#c8f500" },
    { id: "code", label: "Code", desc: "Open-source libraries and tools — TypeScript, protocols, developer systems.", icon: <Terminal size={16} />, accent: "#00d4ff" },
    { id: "experience", label: "Experience", desc: "Company work across AI products, app builders, enterprise SaaS, and eCommerce platforms.", icon: <Briefcase size={16} />, accent: "#ff6b35" },
    { id: "architecture", label: "Architecture", desc: "Architecture as executable boundaries, contracts, tests, and guardrails.", icon: <Cpu size={16} />, accent: "#a855f7" },
    { id: "career", label: "Working With Me", desc: "Short review excerpts and the collaboration pattern behind the work.", icon: <ExternalLink size={16} />, accent: "#22c55e" },
  ];

  return (
    <div className="flex flex-col min-h-full">
      {/* Hero */}
      <section className="px-5 sm:px-8 lg:px-10 pt-12 sm:pt-16 pb-12 border-b border-border">
        <div className="max-w-5xl min-w-0">
          <SectionLabel>Daniel Cassil · Principal / Staff Engineer</SectionLabel>
          <div className="mt-7 max-w-3xl">
            <div className="min-w-0 max-w-full">
              <h1 className="font-mono text-4xl font-bold leading-[0.95] text-foreground">
                <span className="block">Systems that scale.</span>
                <span className="block text-primary">Products built to last.</span>
              </h1>
              <p className="mt-6 text-base text-muted-foreground leading-relaxed break-words">
                I am a user first, an engineer second, and a designer third. Whether I am building a product,
                designing a system, or writing code, I start with the same questions: what does the user need,
                what matters to them, and what is the simplest durable way to solve it?
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                I care about beautiful systems and clean code, but I care just as much about speed, flexibility,
                and building what is actually needed. I would rather get to 90% of perfect in half the time,
                with enough structure to keep evolving, than overbuild for a future that may never come.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                Most recently, that has pulled me deep into AI-assisted engineering: using AI to move faster
                while building the tools, workflows, and guardrails that keep the product and architecture
                from drifting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Selected work grid */}
      <section className="px-5 sm:px-8 lg:px-10 pt-10 pb-14">
        <div className="mb-6 flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="font-mono text-xl font-semibold text-foreground mt-2">
              Navigate by signal
            </h2>
          </div>
          <div className="hidden sm:block h-px flex-1 bg-border max-w-40" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => navigate(s.id)}
              className="group bg-card border border-border p-5 text-left hover:border-primary/40 hover:bg-muted/40 transition-all duration-200 flex flex-col gap-5 min-h-[170px]"
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
      <div className="mt-auto px-5 sm:px-8 lg:px-10 py-4 border-t border-border flex items-center gap-4 bg-card/60">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
        <span className="font-mono text-[11px] text-muted-foreground tracking-widest uppercase">Available for principal / staff roles — 2026</span>
      </div>
    </div>
  );
}

function ProductPage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Selected Work"
        title="Product"
        description="Five product stories that show the range: founder-facing SaaS, AI guardrails, live-app editing, workflow intelligence, and reusable protocol design."
      />

      <div className="flex flex-col divide-y divide-border">
        {PRODUCT_WORK.map((work, index) => {
          const showSuite = Boolean(work.suite && work.suite !== PRODUCT_WORK[index - 1]?.suite);

          return (
            <Fragment key={work.id}>
              {showSuite && work.suite && (
                <div className="pt-2 pb-7">
                  <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-3">
                    Product suite
                  </p>
                  <h3 className="font-mono text-xl font-semibold text-foreground leading-tight">
                    {work.suite}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mt-3">
                    {PRODUCT_SUITE_DESCRIPTIONS[work.suite]}
                  </p>
                </div>
              )}
              <article className="py-10 group">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="font-mono text-xs text-muted-foreground tracking-widest">{work.period}</span>
                      <span className="text-border">·</span>
                      <span className="font-mono text-xs text-foreground tracking-widest uppercase">{work.status}</span>
                      <span className="text-border">·</span>
                      <span className="font-mono text-xs" style={{ color: work.accent }}>{work.category}</span>
                    </div>
                    <h3 className="font-mono text-lg font-semibold text-foreground mb-4 leading-tight">{work.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-xl mb-5">{work.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {work.tags.slice(0, 3).map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                    {work.url && (
                      <a
                        href={work.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-primary hover:gap-3 transition-all duration-200"
                      >
                        View project <ArrowRight size={12} />
                      </a>
                    )}
                  </div>
                  <div className="w-full sm:w-[220px] sm:flex-none">
                    <div className="grid grid-cols-3 sm:grid-cols-1 gap-px bg-border">
                      {work.metrics.map((m) => (
                        <div key={m.label} className="bg-card px-4 py-3 min-w-0">
                          <div className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">{m.label}</div>
                          <div className="font-mono text-xs font-semibold leading-snug mt-1.5" style={{ color: work.accent }}>{m.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

function CodePage() {
  let repoIndex = 0;

  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Open Source"
        title="Code"
        description="A focused set of repositories: three featured projects that support the architecture thesis, with supporting libraries beneath them to show the systems thinking predates AI."
      />

      <div className="space-y-9">
        {CODE_FAMILIES.map((family) => {
          const repos = CODE_REPOS.filter((repo) => repo.family === family);

          return (
            <section key={family}>
              <h3 className="font-mono text-xs font-semibold text-foreground tracking-widest uppercase mb-3">
                {family}
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {repos.map((repo) => {
                  repoIndex += 1;
                  const inner = (
                    <>
                      <div className="flex items-center gap-3 mb-4 min-w-0">
                        <span className="font-mono text-xs text-muted-foreground">{String(repoIndex).padStart(2, "0")}</span>
                        {repo.url ? (
                          <Github size={14} className="text-muted-foreground flex-shrink-0" />
                        ) : (
                          <Cpu size={14} className="text-muted-foreground flex-shrink-0" />
                        )}
                        <h3 className="font-mono text-sm font-semibold text-foreground tracking-wide truncate">{repo.title}</h3>
                        {repo.url ? (
                          <ExternalLink size={13} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-auto flex-shrink-0" />
                        ) : (
                          <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase ml-auto flex-shrink-0">Private</span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{repo.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {repo.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                      </div>
                    </>
                  );

                  return repo.url ? (
                    <a
                      key={repo.id}
                      href={repo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col bg-card border border-border p-5 transition-all hover:bg-muted/40 hover:border-primary/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div key={repo.id} className="group flex flex-col bg-card border border-border p-5">
                      {inner}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Experience"
        title="15+ Year Career Arc"
        description="From early product/design/frontend work at Swish through NetSuite, Knack, Hiveginx, and current AI-assisted engineering tools: a career spent turning user needs into durable products, platforms, and architecture."
      />

      <div className="flex flex-col divide-y divide-border">
        {EXPERIENCE_WORK.map((item) => (
          <article key={`${item.company}-${item.role}`} className="py-9">
            <div className="grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
              <div>
                <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-3">
                  {item.period}
                </p>
                <h3 className="font-mono text-xl font-bold text-foreground leading-tight">
                  {item.company}
                </h3>
                <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mt-3">
                  {item.role}
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  {item.location}
                </p>
              </div>
              <div className="min-w-0">
                <p className="text-sm text-foreground leading-relaxed max-w-3xl">
                  {item.summary}
                </p>
                <ul className="mt-5 space-y-2">
                  {item.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary mt-0.5 flex-shrink-0">—</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-6">
                  {item.tags.map((tag) => (
                    <Tag key={tag}>{tag}</Tag>
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

function ArchitecturePage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Technical Writing"
        title="Architecture"
        description="Architecture works best when it is more than documentation. These pieces explore how principles become practical constraints through composable primitives, dependency boundaries, typed interfaces, automated tests, and delivery workflows."
      >
        <Tag>Markdown</Tag>
        <Tag>ADR</Tag>
        <Tag>Living Document</Tag>
      </PageHeader>
      <div className="bg-card border border-border p-5 sm:p-8">
        <MarkdownRenderer content={ARCH_DOC} />
      </div>
    </div>
  );
}

function CareerPage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Working Style"
        title="Working With Me"
        description="A few excerpts from past reviews and recommendations that reflect how I still work today: bringing clarity to ambiguous problems, keeping the user in view, taking ownership, and helping teams stay aligned through product and architecture decisions."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 mb-12">
        {CAREER_QUOTES.map((item) => (
          <article key={item.quote} className="bg-card border border-border p-5 sm:p-6">
            <p className="font-mono text-[10px] text-primary tracking-widest uppercase mb-4">{item.theme}</p>
            <blockquote className="text-sm text-foreground leading-relaxed mb-5">
              “{item.quote}”
            </blockquote>
            <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">{item.source}</p>
          </article>
        ))}
      </div>

      <section className="max-w-2xl">
        <h3 className="font-mono text-sm font-semibold text-foreground tracking-widest uppercase mb-4">
          The Pattern
        </h3>
        <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
          <p>
            I tend to be most useful when a team has a real system problem: product intent, UX behavior,
            architecture, and implementation details are all tangled together and need to become executable.
          </p>
          <p>
            The work usually starts with clarification. What is the actual user path? Which boundary is unstable?
            What should be a reusable primitive, and what belongs to the product surface? From there, I prefer
            typed APIs, small modules, tests, and review gates that keep the decision alive after the meeting ends.
          </p>
        </div>
      </section>
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
  { id: "experience", label: "Experience", icon: <Briefcase size={13} /> },
  { id: "architecture", label: "Architecture", icon: <Cpu size={13} /> },
  { id: "career", label: "Working With Me", icon: <Box size={13} /> },
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
          fixed top-0 left-0 bottom-0 z-40 w-64 bg-sidebar border-r border-sidebar-border
          flex flex-col
          transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Logo */}
        <div className="px-4 pt-6 pb-5 border-b border-sidebar-border flex items-center justify-between">
          <div>
            <div className="font-mono text-sm font-bold text-foreground tracking-wider">
              D<span className="text-primary">.</span>C
            </div>
            <div className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mt-0.5">
              Principal Eng · Product
            </div>
          </div>
          <button onClick={onClose} className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-1">
            <X size={14} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 pt-4 pb-4 px-2">
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
        <div className="px-4 pb-6 pt-4 border-t border-sidebar-border">
          <button
            type="button"
            onClick={openContactEmail}
            className="w-full mb-4 border border-sidebar-border bg-sidebar-accent/40 px-3 py-2 text-left font-mono text-[10px] uppercase tracking-widest text-foreground hover:border-primary/50 hover:text-primary transition-colors duration-200"
          >
            Talk product / engineering
          </button>
          <div className="flex gap-3 mb-4">
            <button
              type="button"
              onClick={openContactEmail}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Email Daniel"
            >
              <Mail size={14} />
            </button>
            <a
              href="https://github.com/dcassil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="GitHub"
            >
              <Github size={14} />
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-cassil-3761595/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={14} />
            </a>
            <a
              href="https://www.npmjs.com/~dpcassil01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="npm"
            >
              <Package size={14} />
            </a>
          </div>
          <div className="font-mono text-[10px] text-muted-foreground tracking-widest">
            © {new Date().getFullYear()} — D.C.
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
      case "experience": return <ExperiencePage />;
      case "architecture": return <ArchitecturePage />;
      case "career": return <CareerPage />;
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
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/95 backdrop-blur sticky top-0 z-20">
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
