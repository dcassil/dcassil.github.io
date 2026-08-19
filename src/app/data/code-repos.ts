import type { CodeRepo } from "../types";

export const CODE_FAMILIES = [
  "Featured code",
  "Supporting repos",
];

export const CODE_REPOS: CodeRepo[] = [
  {
    id: "straight-jacket",
    title: "Straight Jacket",
    description:
      "Straight Jacket is a repo-native protection layer for files that AI should never be able to change without human approval. Teams can lock sensitive files, and Straight Jacket records a checksum for each one. If an agent modifies a protected file, commits and pull requests fail validation until a human explicitly approves the change.\n\nA simple example is an ESLint config. If an agent repeatedly hits a lint rule it cannot satisfy, it may decide the rule is the problem and modify the config instead. Straight Jacket makes that impossible to ship without a human approving it.\n\nThere is no remote service or external control plane. Team access is handled inside the repository through a shared master credential that lets each human register a local user, while approval remains local and human-controlled.",
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
    id: "code-audit",
    title: "Code Audit",
    description:
      "Multi-language code audit system with a scanning pipeline, scoring engine, and visualization dashboard. Built as a server-as-orchestrator monorepo: a Fastify API with SQLite and a job queue, a runner daemon that executes scans, a web dashboard, a CLI, and an MCP server for AI tool integration — with shared scanning and scoring packages underneath.",
    tags: ["TypeScript", "Static Analysis", "Dashboard", "MCP"],
    family: "Featured code",
    url: "https://github.com/dcassil/code-audit",
  },
  {
    id: "colab",
    title: "colab",
    description:
      "Universal, drop-in real-time collaboration and presence for any web app. A small monorepo with a framework-free collaboration core (plus a React binding), a Socket.IO relay server, and a shared wire protocol — versioned in lockstep so client, server, and protocol can't skew in a published install.",
    tags: ["TypeScript", "Real-time", "Presence", "Socket.IO"],
    family: "Featured code",
    url: "https://github.com/dcassil/colab",
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
    family: "Featured code",
    url: "https://github.com/dcassil/transactor",
  },
];
