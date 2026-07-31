import { useState, useEffect, useRef, useCallback } from "react";
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

const CODE_REPOS = [
  {
    id: "shoreworks-code-strategy",
    title: "ShoreWorks — code strategy",
    description:
      "The engine behind ShoreWorks (casspear.com). It's a private product, so there's no public repo — but the strategy is the point: treat architecture as executable. Layered modules with enforced dependency boundaries, typed contracts between the product tier and a stateless scan runner, dependency-cycle checks in CI, and near-total test coverage (493/493 product, 130/130 runner). Static-analysis toolchains run in an isolated worker that leases scans and never persists customer source.",
    tags: ["Next.js", "Supabase", "Static Analysis", "Private"],
  },
  {
    id: "frame-link",
    title: "frame-link",
    description:
      "A typed, serializable protocol for iframe ↔ host communication over postMessage. Handles request/response, events, and origin validation so embedded apps and their hosts can talk safely without hand-rolling message plumbing.",
    tags: ["TypeScript", "postMessage", "iframe", "Protocol"],
    url: "https://github.com/dcassil/frame-link",
  },
  {
    id: "frame-link-react",
    title: "frame-link-react",
    description:
      "React bindings for frame-link — hooks and providers that expose the typed iframe/host channel to components, keeping message wiring declarative on both sides of the frame.",
    tags: ["TypeScript", "React", "Hooks", "iframe"],
    url: "https://github.com/dcassil/frame-link-react",
  },
  {
    id: "stardust-iframe-adapter",
    title: "stardust-iframe-adapter",
    description:
      "A typed, serializable visual-editing protocol plus iframe/host React adapters (built on frame-link). Maps editable elements inside an embedded site to host overlay controls, shipped with a runnable admin + site demo.",
    tags: ["TypeScript", "Visual Editing", "React", "CMS"],
    url: "https://github.com/dcassil/stardust-iframe-adapter",
  },
  {
    id: "stardust-dashboard",
    title: "stardust-dashboard",
    description:
      "An extensible host-dashboard boilerplate for in-iframe visual editors built on the stardust iframe adapter. Bring your own content store and block types; the dashboard supplies the editing shell.",
    tags: ["TypeScript", "Dashboard", "Boilerplate", "CMS"],
    url: "https://github.com/dcassil/stardust-dashboard",
  },
  {
    id: "versioned-content-engine",
    title: "versioned-content-engine",
    description:
      "A headless, dependency-free library for draft/live content versioning. Append-only records with deterministic materialization and corrected tombstone semantics — the versioning core, decoupled from any storage or UI.",
    tags: ["TypeScript", "Versioning", "Headless", "Data Model"],
    url: "https://github.com/dcassil/versioned-content-engine",
  },
  {
    id: "transactor",
    title: "transactor",
    description:
      "Client-side transactional change management: sequence edits, undo/redo, edge deduplication, superimpose changes onto a dataset, and flush as batched saves. Published to npm as sequence-transactor.",
    tags: ["TypeScript", "Undo/Redo", "State", "npm"],
    url: "https://github.com/dcassil/transactor",
  },
  {
    id: "code-audit",
    title: "code-audit",
    description:
      "Tooling for auditing a codebase — surfacing quality and structural signals to keep both human- and agent-driven changes honest over time.",
    tags: ["TypeScript", "Static Analysis", "Tooling"],
    url: "https://github.com/dcassil/code-audit",
  },
  {
    id: "ci-health-audit",
    title: "ci-health-audit",
    description:
      "A deterministic 0–10 code-health score for JS/TS codebases, runnable as a CLI, a GitHub Action, or a pre-commit gate. The same static-analysis philosophy behind ShoreWorks, packaged so a build can fail on health drift instead of merging it.",
    tags: ["TypeScript", "CI", "GitHub Action", "Static Analysis"],
    url: "https://github.com/dcassil/ci-health-audit",
  },
  {
    id: "cadre-architecture-docs",
    title: "cadre-architecture-docs",
    description:
      "Public reference for the architecture patterns used by Cadre — the layering, boundaries, and conventions that keep services consistent and maintainable.",
    tags: ["Architecture", "Patterns", "Docs"],
    url: "https://github.com/dcassil/cadre-architecture-docs",
  },
];

const PRODUCT_WORK = [
  {
    id: "shoreworks",
    title: "ShoreWorks",
    period: "2026",
    category: "Developer Tools · SaaS · Live",
    description:
      "The live product face of the ShoreGuard software-health system. ShoreWorks watches a repository and translates raw engineering signals into the numbers a founder actually tracks — development cost, delivery speed, bug risk, security exposure, and maintainability. Built for teams shipping AI-assisted software who need to know whether their foundation is quietly degrading. It scores health over time and analyzes repos without retaining source or training on it.",
    tags: ["Next.js", "Supabase", "Code Health", "SaaS", "Founder-facing"],
    metrics: [
      { label: "Health score", value: "92 vs 65" },
      { label: "Cost delta", value: "2.5×" },
      { label: "Source retained", value: "None" },
    ],
    accent: "#00d4ff",
    url: "https://www.casspear.com/",
  },
  {
    id: "shore-code",
    title: "Shore Code + Shore Runner",
    period: "2026",
    category: "Developer Tools · SaaS",
    description:
      "The product and worker substrate behind ShoreGuard. Shore Code and Shore Runner help teams understand the condition of their codebase, track how it changes over time, and identify the areas most likely to slow development or introduce risk. The system connects securely to GitHub, analyzes repositories without retaining customer source code, and turns technical findings into clear health scores, trends, and actionable insights.",
    tags: ["Next.js", "Supabase", "GitHub App", "Workers", "Static Analysis"],
    metrics: [
      { label: "Product tests", value: "493/493" },
      { label: "Worker tests", value: "130/130" },
      { label: "Cycles", value: "0" },
    ],
    accent: "#00d4ff",
  },
  {
    id: "shoreguard",
    title: "ShoreGuard",
    period: "2026",
    category: "Codebase Protection · AI Guardrails",
    description:
      "A codebase protection system that keeps software healthy as teams and AI agents continue building. It turns architectural standards, code-quality expectations, and project-specific rules into automated guardrails that catch drift, prevent regressions, and improve the codebase with every commit.",
    tags: ["Code Health", "Architecture Guardrails", "AI Development", "CI"],
    metrics: [
      { label: "System role", value: "Guardrails" },
      { label: "Feedback loop", value: "Every commit" },
      { label: "Goal", value: "Less drift" },
    ],
    accent: "#00d4ff",
  },
  {
    id: "multi-tenant-code-intelligence",
    title: "Multi-Tenant Code Intelligence Platform",
    period: "2026",
    category: "Enterprise SaaS · Code Intelligence",
    description:
      "An organization-wide software health platform built to evaluate codebases across multiple teams, products, and repositories. It combines automated analysis, historical trends, and shared engineering standards to help leaders identify systemic risk, compare code health across the organization, and focus improvement efforts where they will have the greatest impact.",
    tags: ["Multi-Tenant SaaS", "Code Health", "Engineering Standards", "Analytics"],
    metrics: [
      { label: "Scope", value: "Org-wide" },
      { label: "Signal", value: "Trends" },
      { label: "Focus", value: "Risk" },
    ],
    accent: "#00d4ff",
  },
  {
    id: "agent-workflows",
    title: "Katana + Dev Genie",
    period: "2026",
    category: "AI Engineering · Workflow Systems",
    description:
      "An AI engineering system that brings structure, consistency, and oversight to complex software development. It coordinates specialized agents through defined workflows, quality gates, architectural rules, and auditable decision paths — helping teams move faster without losing control of how software is designed, built, and maintained.",
    tags: ["MCP", "CLI", "Protocol Schemas", "Guardrails", "TypeScript"],
    metrics: [
      { label: "Katana tests", value: "299/299" },
      { label: "Dev Genie tests", value: "292" },
      { label: "Focus", value: "Agent systems" },
    ],
    accent: "#ff6b35",
  },
  {
    id: "governance-meeting-intelligence",
    title: "Governance Meeting Intelligence Platform",
    period: "2026",
    category: "Workflow Automation · AI Intelligence",
    description:
      "A meeting workflow system that turns recorded governance sessions into structured, usable outcomes. It captures and transcribes meetings, uses AI to identify decisions, action items, owners, deadlines, risks, and key discussion themes, then organizes the results into reviewable minutes and a searchable institutional record.",
    tags: ["AI", "Transcription", "Governance", "Workflow Automation"],
    metrics: [
      { label: "Inputs", value: "Meetings" },
      { label: "Outputs", value: "Minutes" },
      { label: "Record", value: "Searchable" },
    ],
    accent: "#22c55e",
  },
  {
    id: "knack-live-builder",
    title: "Knack Live-App Builder Prototype",
    period: "2023",
    category: "Product Architecture · UX Systems",
    description:
      "A live-app editing prototype that let users interact with their actual hosted app inside an iframe instead of a detached simulation. The model used postMessage, parent-side overlays, context menus, drop zones, drag handles, collaboration states, and draft/versioning concepts.",
    tags: ["React", "iframe", "postMessage", "Overlays", "Versioning"],
    metrics: [
      { label: "Prototype", value: "~3wk" },
      { label: "Surface", value: "Hosted app" },
      { label: "Outcome", value: "Roadmap alignment" },
    ],
    accent: "#a855f7",
  },
  {
    id: "frame-link-stardust",
    title: "Frame Link → Stardust Iframe Adapter",
    period: "2021",
    category: "Protocol · Visual Editing",
    description:
      "A typed iframe communication primitive composed into a visual-editing adapter. Frame Link handles secure host/iframe request-response messaging; Stardust maps editable elements inside an embedded site to host-side overlays, content injection, and draft/live flows.",
    tags: ["TypeScript", "postMessage", "iframe", "Visual Editing"],
    metrics: [
      { label: "Transport tests", value: "35/35" },
      { label: "Design arc", value: "Primitive → Product" },
      { label: "Scope", value: "Adapter + demo" },
    ],
    accent: "#c8f500",
  },
  {
    id: "ladder-demo",
    title: "Clinical Ladder Product Slice",
    period: "2026",
    category: "Domain Modeling · Product Sense",
    description:
      "A focused full-stack workflow for clinical ladder submissions: nurse intent, evidence capture, requirement matching, portfolio review, and reviewer decision. It is a constrained product slice, useful because it turns an ambiguous domain into a coherent end-to-end system.",
    tags: ["Healthcare Workflow", "Supabase", "Forms", "Review Queue"],
    metrics: [
      { label: "Scope", value: "End-to-end" },
      { label: "Model", value: "Portfolio review" },
      { label: "Cycles", value: "0" },
    ],
    accent: "#22c55e",
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
    company: "Oracle NetSuite",
    role: "Senior Software Engineer · Manager · Team Lead",
    period: "Jan 2016 - Apr 2021",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Worked across engineering leadership, product recovery, and R&D-focused architecture for enterprise eCommerce and CMS systems after the NetSuite acquisition by Oracle.",
    highlights: [
      "Managed a team of JavaScript engineers building and improving React-based eCommerce and website-management CMS products.",
      "Served in an R&D role evaluating frontend frameworks, internal platform technologies, and architectural options for new product directions.",
      "Led a stalled major redesign effort back to a viable plan by aligning architecture, design, engineering, and delivery scope.",
      "Balanced hands-on implementation with project management, product tradeoffs, deadline negotiation, and expectation resets.",
    ],
    tags: ["React", "CMS", "eCommerce", "Engineering Management", "R&D"],
  },
  {
    company: "NetSuite",
    role: "Senior Software Engineer",
    period: "Mar 2013 - Apr 2021",
    location: "Oklahoma City Metropolitan Area",
    summary:
      "Built enterprise eCommerce and content-management systems before and through NetSuite's acquisition by Oracle.",
    highlights: [
      "Solved complex data-architecture and code-design problems with direct impact on customer-facing UX.",
      "Bridged engineering and design by managing SCSS and JavaScript implementation for UI/UX-heavy product work.",
      "Helped build enterprise software intended to feel as usable and polished as modern startup products.",
      "Expanded from individual contributor work into cross-functional product, design, and engineering coordination.",
    ],
    tags: ["JavaScript", "SCSS", "Webpack", "Enterprise SaaS", "UI Architecture"],
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

The strongest thread across my work is turning architecture from prose into working constraints: small primitives, typed contracts, dependency boundaries, tests, review gates, and product workflows that make the intended system easier to keep than to accidentally erode.

---

## Core Principles

**Build a primitive, then compose it**
Frame Link is the small typed transport. Stardust Iframe Adapter composes that transport into visual editing. The separation keeps the communication layer reusable instead of burying it inside a product.

**Make boundaries executable**
Shore Code and Shore Runner use layered modules, contract types, tests, and dependency-cycle checks so architecture is continuously visible. The point is not a diagram; the point is a codebase that resists becoming ambiguous.

**Constrain AI-assisted work**
Dev Genie and Katana explore repo-native workflows where agents operate inside gates: phases, schemas, architecture-impact artifacts, validation reports, and guardrails. AI output improves when the environment enforces architecture instead of merely describing it.

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

### ADR-001: Keep visual editing transport separate from product behavior

**Context:** Iframe editing can quickly become a knot of postMessage calls, UI state, persistence, and product-specific assumptions.

**Decision:** Keep Frame Link as the transport primitive and build the Stardust adapter on top of it.

**Consequence:** The transport can stand alone as a small package while the adapter owns visual-editing concerns.

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

## ShoreWorks — Architecture & Ideology

\`Live at casspear.com\`

ShoreWorks is where the guardrail philosophy becomes a product. The premise: teams now ship software faster than they can understand it — especially with AI writing large portions of the code. Speed without a health signal is how a codebase quietly rots. ShoreWorks makes that signal continuous and legible to people who don't read diffs.

**Product / runner split**
The system is deliberately two pieces. Shore Code owns everything stateful and user-facing — GitHub App integration, auth, teams, scan ingest, dashboards, and Supabase-backed history. Shore Runner is a stateless worker that leases a scan, runs static-analysis toolchains against a checkout, aggregates metrics, posts results back, and forgets the source. That boundary is a security decision as much as an architectural one: untrusted repositories never touch the product tier, and customer code is never retained or used for training.

**Signals become business language**
Raw engineering metrics — complexity, coupling, cycles, coverage, churn — mean nothing to a founder. The product's job is translation: it maps those signals onto development cost, delivery speed, bug risk, security exposure, and maintainability, then quantifies them. A healthy codebase might score 92% health against a fragile one's 65%, with a 2.5× cost difference on the same feature. Trend history turns a single score into a direction.

### The agentic guard concept

The idea that ties ShoreWorks to Katana and Dev Genie: **an AI agent should operate inside enforced guards, not inside good intentions.**

A prompt that says "keep the architecture clean" is advisory — an agent can ignore or slowly dilute it, and usually does. A guard is executable: dependency-boundary rules, complexity ceilings, cycle checks, typed contracts, and test gates that *fail the change* instead of trusting it. ShoreWorks turns those same guards outward — it measures whether a codebase, however it was written and by whoever or whatever, is drifting past its thresholds, and surfaces the drift before it compounds.

The through-line: the environment enforces the architecture. Humans and agents both produce better systems when the boundary is a wall they hit, not a sentence they remember.

---

### ADR-004: Make the agent's environment the enforcement layer

**Context:** AI-assisted development scales output but not judgment. Guidance embedded only in prompts erodes as context grows and agents optimize for the immediate task.

**Decision:** Encode architecture as guards in the environment — static analysis, dependency rules, complexity limits, typed contracts, CI gates — and let both humans and agents work against them. ShoreWorks extends this outward by continuously scoring real repositories against health thresholds.

**Alternatives considered:** Prompt-only guidance (rejected — not enforceable, silently decays); human review as the sole gate (rejected — doesn't scale to agent-speed output, and stays inconsistent between reviewers).

**Consequence:** Architecture stays intact under high-velocity, AI-assisted change, at the cost of up-front investment in guard tooling and some friction on legitimate exceptions.

## Evidence

- Frame Link: 35/35 tests, typed API, clean dependency graph.
- Shore Code: typecheck/lint/design-check green, 493/493 unit tests, zero dependency cycles in the reviewed copy.
- Shore Runner: passing build and 130/130 tests.
- Katana: passing build and 299/299 tests across the reviewed copy.
- Dev Genie: build/typecheck/lint green with protocol, role, and engine coverage.

## How I Evaluate Architecture

- Can a new contributor explain the system boundaries without oral tradition?
- Are the highest-risk decisions captured in code, tests, gates, or schemas?
- Does the architecture improve product iteration speed, or only look tidy?
- Can the system absorb AI-assisted change without losing shape?
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
                I build software products, platforms, and developer systems from early ideas through production.
                My role goes beyond implementation: I shape the idea, define the product, design the system,
                solve the hard problems, and lead it through delivery. I work across disciplines — bringing
                stakeholders, product, design, engineering, and QA into alignment around a clear vision and a
                cohesive solution. My work spans enterprise SaaS, real-time systems, workflow automation,
                architectural guardrails, and tools that improve the quality of both human- and AI-driven
                development.
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
        description="Product-first work spanning strategy, experience, systems, and delivery — built around real user needs and carried through production."
      />

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
                {work.url && (
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs tracking-wider uppercase text-primary hover:gap-3 transition-all duration-200"
                  >
                    View live <ArrowRight size={12} />
                  </a>
                )}
              </div>
              <div className="w-full sm:w-[220px] sm:flex-none">
                <div className="grid grid-cols-3 sm:grid-cols-1 gap-px bg-border">
                  {work.metrics.map((m) => (
                    <div key={m.label} className="bg-card px-4 py-3 min-w-0">
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
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Open Source"
        title="Code"
        description="A closer look at how I design and build software: public libraries, private product systems, and the architectural patterns behind them. The work spans typed protocols, visual tooling, code health, agent workflows, and systems designed to remain clear, testable, and dependable as they grow."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
        {CODE_REPOS.map((repo, i) => {
          const inner = (
            <>
              <div className="flex items-center gap-3 mb-4 min-w-0">
                <span className="font-mono text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
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
    </div>
  );
}

function ExperiencePage() {
  return (
    <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12">
      <PageHeader
        eyebrow="Experience"
        title="Companies"
        description="Selected work across AI/ML products, application-building platforms, enterprise SaaS, eCommerce, and content systems — spanning product development, platform architecture, technical strategy, and engineering leadership."
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
  { id: "career", label: "Career", icon: <Box size={13} /> },
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
