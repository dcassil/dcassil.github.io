export const ARCH_DOC = `# Architecture As An Enforced System

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
