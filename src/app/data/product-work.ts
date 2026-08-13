import type { ProductWork } from "../types";

export const PRODUCT_SUITE_DESCRIPTIONS: Record<string, string> = {
  "ShoreWorks Software Health Suite":
    "A connected suite for understanding software health, executing repository analysis, and keeping human and AI-driven changes aligned with project standards.",
  "Agent Workflow + Guardrail Systems":
    "A set of tools for making AI-assisted engineering more deliberate: reusable agent procedures, structured execution paths, and enforceable boundaries around sensitive repository changes.",
};

export const PRODUCT_WORK: ProductWork[] = [
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
      "Straight Jacket is a repo-native protection layer for files that AI should never be able to change without human approval. Teams can lock sensitive files, and Straight Jacket records a checksum for each one. If an agent modifies a protected file, commits and pull requests fail validation until a human explicitly approves the change.\n\nA simple example is an ESLint config. If an agent repeatedly hits a lint rule it cannot satisfy, it may decide the rule is the problem and modify the config instead. Straight Jacket makes that impossible to ship without a human approving it.\n\nThere is no remote service or external control plane. Team access is handled inside the repository through a shared master credential that lets each human register a local user, while approval remains local and human-controlled.",
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
