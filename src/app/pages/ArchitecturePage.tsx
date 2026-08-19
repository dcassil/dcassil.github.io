import { SectionLabel } from "../components/shared/SectionLabel";

const NAV_ITEMS = [
  { id: "arch-overview", label: "Overview" },
  { id: "arch-values", label: "Values" },
  { id: "arch-decisions", label: "Decisions" },
  { id: "arch-patterns", label: "Patterns" },
  { id: "arch-boundaries", label: "Boundaries" },
  { id: "arch-data", label: "Data + APIs" },
  { id: "arch-smells", label: "Smells" },
  { id: "arch-docs", label: "Documentation" },
  { id: "arch-enforcement", label: "Enforcement" },
  { id: "arch-tools", label: "Tools" },
  { id: "arch-practice", label: "In Practice" },
];

const VALUES = [
  {
    title: "Understandable beats clever",
    body: "I want another engineer to be able to follow the system without first learning its mythology. Good abstractions remove things you have to think about. Bad abstractions just hide them.",
  },
  {
    title: "Build for the problem we actually have",
    body: "I care about scale, performance, extensibility, and clean design, but not theoretical versions of them. I would rather build 90% of the perfect system in half the time and leave myself a clean path forward than spend twice as long solving problems we may never have.",
  },
  {
    title: "Make boundaries real",
    body: "If something is an important architectural boundary, I do not want it to exist only in a diagram or a paragraph someone wrote two years ago. Types, package boundaries, tests, schemas, dependency rules, database constraints, and CI are much harder to forget.",
  },
  {
    title: "Prefer reversible decisions when the answer is unclear",
    body: "Some decisions are cheap to change. Some infect the entire system. When requirements are still moving, I try to keep the expensive decisions few and the reversible ones easy.",
  },
  {
    title: "Boring is usually good",
    body: "I like interesting problems. I generally do not need interesting infrastructure unless the problem calls for it. Proven technology, obvious control flow, normal SQL, and code people recognize are features.",
  },
  {
    title: "The user still wins",
    body: "Architecture is not separate from product design. A technically elegant system that makes the user's actual workflow worse is the wrong system.",
  },
];

const DECISION_CATEGORIES = [
  {
    title: "The user and the product",
    intro: null,
    questions: [
      "What is the user actually trying to accomplish?",
      "Which workflows need to feel immediate?",
      "What can happen asynchronously without making the product feel broken?",
      "What happens when part of the system fails?",
      "Which mistakes are annoying and which ones lose money, data, or trust?",
    ],
  },
  {
    title: "Scale",
    intro: null,
    questions: [
      "What needs to scale today?",
      "What has a believable chance of becoming a bottleneck?",
      "Are we talking about 100 users, 100,000 users, or 100 internal users doing very expensive work?",
      "Is the pressure CPU, memory, storage, network, concurrency, data size, third-party limits, or people?",
      "Can we scale the expensive part without scaling everything else with it?",
    ],
  },
  {
    title: "Change",
    intro: "This is usually more important to me than raw scale.",
    questions: [
      "Which parts of the product are still being figured out?",
      "Which areas are likely to change often?",
      "Which decisions would be painful to reverse?",
      "Where do we need extension points and where would they just be speculation?",
      "Can one part evolve without causing unrelated parts of the system to move with it?",
    ],
  },
  {
    title: "Failure",
    intro: "I want failure behavior designed, not discovered.",
    questions: [
      "What can fail?",
      "What happens to work already in progress?",
      "Can the operation safely retry?",
      "Is it idempotent?",
      "What needs to be transactional?",
      "What state has to survive?",
      "How will we know something failed?",
      "How will someone figure out why?",
    ],
  },
  {
    title: "The team",
    intro: "Architecture has to work for the people maintaining it.",
    questions: [
      "Can a new contributor understand the major pieces?",
      "Does the design require knowledge the team does not have?",
      "Are we adding operational burden that buys us something real?",
      "Can developers work in one area without understanding the entire application?",
      "Does the architecture make the right thing easier to do than the wrong thing?",
    ],
  },
];

const SANITY_CHECKS = [
  "Can someone understand the system without relying on tribal knowledge?",
  "Are important decisions enforced somewhere other than documentation?",
  "Does the architecture make the product easier to change?",
  "Can the system absorb rapid change without slowly losing its shape?",
  "Does the design make the right path easier than the wrong one?",
  "Can architectural drift be caught while it is still cheap?",
];

const PATTERNS = [
  {
    title: "Modular monolith",
    paragraphs: [
      "This is a very comfortable starting point for me.",
      "You get real domain boundaries, clear ownership, and independent modules without immediately taking on networking, distributed tracing, deployment coordination, eventual consistency, and five different ways for a request to fail.",
      "I split things out when there is a reason: independent scaling, security isolation, deployment lifecycle, team ownership, very different runtime needs, or a workload that should fail independently.",
      "“Maybe this will be huge someday” is not enough by itself.",
    ],
  },
  {
    title: "Stateless workers",
    paragraphs: [
      "I like pulling expensive or asynchronous work out of the application when it has a clear job boundary.",
      "Repository scanning is a good example. The product handles users, teams, configuration, results, and reporting. A worker leases a scan, does the ugly work, posts the result, and can disappear.",
      "That makes scaling, retries, isolation, and failure handling much easier to reason about.",
    ],
  },
  {
    title: "Queues and event-driven workflows",
    paragraphs: [
      "I use queues when work does not need to happen inside the user's request.",
      "I use events when multiple parts of a system legitimately care that something happened and the producer should not need to know all of them.",
      "I do not use an event bus to make normal function calls look sophisticated. Event-driven systems buy decoupling at the cost of making behavior harder to follow. That trade has to be worth it.",
    ],
  },
  {
    title: "State machines",
    paragraphs: [
      "If a workflow has real states, I like admitting it.",
      "Publishing, approvals, onboarding, long-running jobs, releases, retries, agent workflows, and multi-step business processes are easier to reason about when valid states and transitions are explicit.",
      "A surprising number of bugs are really impossible states that the code accidentally allowed.",
    ],
  },
  {
    title: "Typed contracts",
    paragraphs: [
      "I use types and schemas heavily at boundaries.",
      "API payloads, events, plugin interfaces, configuration, persisted structures, and internal module contracts should make assumptions visible.",
      "The goal is not maximum TypeScript cleverness. The goal is to move mistakes closer to the person making the change.",
    ],
  },
  {
    title: "Plugin and strategy architectures",
    paragraphs: [
      "I like plugin boundaries when variation is real.",
      "Scanners are a good example. Different languages and project types need different analysis, but the surrounding workflow should not care which scanner produced the result.",
      "I do not create a plugin system because two `if` statements offend me. The extension point needs to earn its complexity.",
    ],
  },
  {
    title: "Multi-tenant systems",
    paragraphs: [
      "I prefer tenant ownership to be explicit all the way down.",
      "Authentication tells me who you are. Authorization tells me what you can do. Tenant isolation tells me whose data you are even allowed to ask about.",
      "Depending on the system, that can mean tenant-aware schemas, database constraints, RLS, service boundaries, separate resources, or some combination of them.",
      "I do not like relying on every developer remembering to add `WHERE tenant_id = ?`.",
    ],
  },
  {
    title: "Draft, live, and versioned state",
    paragraphs: [
      "For content systems, configuration systems, and anything users need to safely prepare before publishing, I like separating the thing being edited from the thing the world currently sees.",
      "Draft/live models, scheduled releases, version history, rollback, and roll-forward can remove a huge amount of fear from changing important systems.",
    ],
  },
];

const BOUNDARY_DISTINCTIONS = [
  "domain code versus infrastructure",
  "public module surfaces versus internal implementation",
  "business rules versus framework glue",
  "shared primitives versus shared business logic",
  "read paths versus mutation paths where that distinction matters",
  "frontend state versus server state",
  "application code versus third-party integrations",
];

const SMELLS = [
  {
    title: "Circular dependencies",
    body: "Usually a sign that two things do not know who owns what anymore.",
  },
  {
    title: "The `shared` folder that knows everything",
    body: "Shared primitives are useful. Shared business logic from six unrelated domains is usually just a new monolith hiding inside the old one.",
  },
  {
    title: "Abstractions with one implementation and no real reason to expect another",
    body: "I like abstraction when it removes complexity.\n\nI do not like inventing interfaces for imaginary futures.",
  },
  {
    title: "Deep layers that only pass values to the next layer",
    body: "Controller to service to manager to provider to repository to adapter is not automatically architecture.\n\nSometimes it is five files standing between me and the code I need.",
  },
  {
    title: "Business logic in framework code",
    body: "If the important rules of the product only make sense inside React components, route handlers, ORM callbacks, or some vendor SDK, changing technology becomes much harder than it needs to be.",
  },
  {
    title: "Database access from everywhere",
    body: "When every part of an application can reach directly into every table, your schema becomes your architecture whether you meant it to or not.",
  },
  {
    title: "Long synchronous chains between services",
    body: "One request needing six healthy services is six opportunities to have a bad afternoon.",
  },
  {
    title: "Hidden global state",
    body: "It works beautifully right up until two things need different answers.",
  },
  {
    title: "Configuration that completely changes what code means",
    body: "Configuration is useful.\n\nA system where nobody knows what it does until they inspect twelve environment variables is less useful.",
  },
  {
    title: "Copy and paste business rules",
    body: "Duplication is not always bad.\n\nDuplicating the definition of an important business rule usually is.",
  },
  {
    title: "Tests that need the entire application",
    body: "If nothing meaningful can be tested without booting everything, the system probably has fewer boundaries than the diagram claims.",
  },
  {
    title: "Architecture that depends on everyone remembering the rules",
    body: "This is the big one.\n\nIf the rule matters, I want to see if some part of it can be enforced.",
  },
];

const ADR_STRUCTURE = [
  { label: "Context", body: "What problem are we actually solving?" },
  { label: "Decision", body: "What are we going to do?" },
  { label: "Why", body: "Why this option over the reasonable alternatives?" },
  {
    label: "Consequences",
    body: "What gets better, and what complexity did we just agree to own?",
  },
  {
    label: "Revisit when",
    body: "What would have to change before this decision deserves another look?",
  },
];

const ENFORCEMENT_MECHANISMS = [
  "TypeScript and typed interfaces",
  "schemas and runtime validation",
  "database constraints",
  "row-level security",
  "package boundaries",
  "dependency rules",
  "ESLint",
  "static analysis",
  "unit and integration tests",
  "contract tests",
  "CI gates",
  "complexity and size thresholds",
  "custom checks when the normal tools cannot express the rule",
];

const TOOL_GROUPS = [
  {
    label: "Modeling and documentation",
    tools: "Markdown, Mermaid, ADRs, OpenAPI, JSON Schema",
  },
  {
    label: "Boundaries and static analysis",
    tools: "TypeScript, ESLint, dependency-cruiser, Madge, custom AST/static-analysis tooling",
  },
  {
    label: "Validation",
    tools: "Vitest, Jest, integration tests, contract tests, CI checks",
  },
  {
    label: "Data",
    tools: "Postgres, schema constraints, migrations, RLS, SQL-based inspection",
  },
  {
    label: "Runtime and operations",
    tools: "Structured logs, metrics, traces, health checks, queue/job visibility, error reporting",
  },
  {
    label: "Code health",
    tools: "Complexity analysis, dependency graphs, duplication detection, dead-code analysis, codebase metrics, trend analysis, and custom scoring/checks where the existing tools stop short",
  },
];

const IN_PRACTICE = [
  {
    name: "NetSuite Commerce and CMS",
    problem:
      "Content, commerce configuration, and site changes needed to support editing, preview, scheduling, publishing, history, and recovery across a large extensible platform.",
    architecture:
      "Draft/live state, versioned changes, scheduled releases, rollback and roll-forward behavior, and clear extension points so teams could evolve the platform without treating every change as a one-way door.",
  },
  {
    name: "Knack",
    problem:
      "A long-lived application builder had years of existing behavior and older frontend architecture that could not simply be replaced without disrupting the product.",
    architecture:
      "Modernize incrementally, establish clearer boundaries for new work, and move toward React without requiring the product and engineering team to stop while the frontend was rewritten underneath them.",
  },
  {
    name: "Shore Code / Shore Runner",
    problem:
      "Repository analysis belongs in the product, but executing scanners against arbitrary code is a very different workload from serving a multi-tenant web application.",
    architecture:
      "Separate the product from stateless scan workers. The product owns users, teams, configuration, scheduling, results, and reporting. Workers lease jobs, execute analysis, return structured results, and can scale or fail independently.",
  },
  {
    name: "Katana / Dev Genie",
    problem:
      "AI-driven development workflows become difficult to reason about when agents can freely decide what phase they are in, what artifacts matter, and what “done” means.",
    architecture:
      "Explicit phases, role contracts, structured artifacts, deterministic validation, and architecture rules around the agent rather than relying on the agent to remember the process.",
  },
];

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h3 className="font-mono text-xl font-bold text-foreground mb-6">
      {children}
    </h3>
  );
}

function renderInline(text: string) {
  return text.split("`").map((segment, i) =>
    i % 2 === 1 ? (
      <code key={`${segment}-${String(i)}`} className="font-mono text-[0.9em]">
        {segment}
      </code>
    ) : (
      segment
    ),
  );
}

function Paragraphs({ text, className }: { text: string; className: string }) {
  return (
    <>
      {text.split("\n\n").map((paragraph, index) => (
        <p key={paragraph} className={`${className} ${index > 0 ? "mt-2" : ""}`}>
          {renderInline(paragraph)}
        </p>
      ))}
    </>
  );
}

export function ArchitecturePage() {
  return (
    <div>
      {/* Sticky section navigation */}
      <nav className="sticky top-0 z-10 bg-background/95 backdrop-blur border-b border-border px-5 sm:px-8 lg:px-10">
        <div className="flex gap-4 overflow-x-auto py-2.5" style={{ scrollbarWidth: "none" }}>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => { scrollToSection(item.id); }}
              className="font-mono text-[10px] text-muted-foreground hover:text-foreground tracking-widest uppercase whitespace-nowrap transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <div className="px-5 sm:px-8 lg:px-10 py-10 sm:py-12 space-y-16 sm:space-y-20">
        {/* 1. Architecture — hero */}
        <header id="arch-overview" className="scroll-mt-16 border-b border-border pb-10">
          <SectionLabel>How I Work</SectionLabel>
          <h2 className="font-mono text-3xl font-bold text-foreground mt-3">Architecture</h2>
          <div className="mt-5 max-w-3xl space-y-4">
            <p className="text-base text-foreground leading-relaxed">
              I like architecture when it makes a system easier to understand, easier to change,
              and harder to accidentally break.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I am not interested in making a system more complicated so the diagram looks
              impressive. The right architecture depends on the product, the users, the team, how
              fast things are changing, what actually needs to scale, and which mistakes would be
              expensive to undo.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A lot of architecture is deciding where the boundaries should be. The rest is making
              sure those boundaries still mean something six months later.
            </p>
          </div>
        </header>

        {/* 2. What I Value */}
        <section id="arch-values" className="scroll-mt-16">
          <SectionHeading>What I Value</SectionHeading>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {VALUES.map((value, i) => (
              <div
                key={value.title}
                className={`bg-card border border-border p-5 ${i % 3 === 1 ? "lg:mt-4" : ""}`}
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">{value.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. How I Make Architecture Decisions */}
        <section id="arch-decisions" className="scroll-mt-16">
          <SectionHeading>How I Make Architecture Decisions</SectionHeading>
          <div className="max-w-3xl space-y-3 mb-10">
            <p className="text-sm text-foreground leading-relaxed">
              I usually start with questions, not patterns.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The same architecture can be a great answer for one product and a terrible answer for
              another. Before deciding how I want to build something, I want to understand what the
              system is actually being asked to do.
            </p>
          </div>

          <div className="space-y-8">
            {DECISION_CATEGORIES.map((category, i) => (
              <div
                key={category.title}
                className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-3 lg:gap-8 border-t border-border pt-6"
              >
                <div>
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h4 className="font-mono text-base font-semibold text-foreground mt-1">
                    {category.title}
                  </h4>
                  {category.intro && (
                    <p className="text-xs text-muted-foreground leading-relaxed mt-2">
                      {category.intro}
                    </p>
                  )}
                </div>
                <ul className="space-y-2">
                  {category.questions.map((question) => (
                    <li key={question} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary flex-shrink-0 select-none">?</span>
                      {question}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-card border-l-2 border-primary border-y border-r border-y-border border-r-border p-6">
            <h4 className="font-mono text-base font-semibold text-foreground">Final sanity check</h4>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              Before I am comfortable with a design, I usually want these answers to be yes:
            </p>
            <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              {SANITY_CHECKS.map((check) => (
                <li key={check} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="text-primary flex-shrink-0 select-none">→</span>
                  {check}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. Patterns I Reach For */}
        <section id="arch-patterns" className="scroll-mt-16">
          <SectionHeading>Patterns I Reach For</SectionHeading>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-8">
            I do not have a favorite architecture. I have patterns I trust for particular kinds of
            problems.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            {PATTERNS.map((pattern) => (
              <div key={pattern.title} className="bg-card border border-border p-6">
                <h4 className="font-mono text-sm font-semibold text-foreground tracking-wide mb-3">
                  {pattern.title}
                </h4>
                <div className="space-y-2">
                  {pattern.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="text-sm text-muted-foreground leading-relaxed">
                      {renderInline(paragraph)}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Boundaries and Dependencies */}
        <section id="arch-boundaries" className="scroll-mt-16">
          <SectionHeading>Boundaries and Dependencies</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">
            <div className="space-y-3 max-w-3xl">
              <p className="text-sm text-muted-foreground leading-relaxed">
                I pay a lot of attention to dependency direction because architecture usually does
                not collapse in one dramatic decision.
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                It erodes one reasonable import at a time.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A feature reaches into another feature because the data is convenient. A shared
                folder becomes the place for everything that does not have a home. A utility starts
                knowing about business rules. Two modules depend on each other. Then five do.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Eventually the boxes in the architecture diagram still exist, but the code no
                longer agrees with them.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                Circular dependencies get my attention quickly.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                So do very deep dependency trees, giant shared modules, imports across domains, and
                a change in one area repeatedly requiring unrelated changes somewhere else.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I want developers to be able to reason locally. If changing a button requires
                understanding half the application, something is wrong.
              </p>
            </div>
            <div className="bg-card border border-border p-5 self-start">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-3">
                Things I try to keep clear
              </p>
              <ul className="space-y-2">
                {BOUNDARY_DISTINCTIONS.map((item) => (
                  <li key={item} className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                    <span className="text-primary flex-shrink-0 select-none">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 6. Data, APIs, and State */}
        <section id="arch-data" className="scroll-mt-16">
          <SectionHeading>Data, APIs, and State</SectionHeading>
          <div className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-2 lg:gap-8 border-t border-border pt-6">
              <h4 className="font-mono text-base font-semibold text-foreground">Data</h4>
              <div className="max-w-3xl">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I generally start relational unless the shape of the problem gives me a reason
                  not to.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  Postgres solves an enormous number of problems extremely well.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  I care about schemas because the database is one of the few parts of a system
                  that may outlive every application layer around it. Types in application code are
                  useful. Constraints in the database are harder to accidentally bypass.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">I think about:</p>
                <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5">
                  {[
                    "ownership",
                    "cardinality",
                    "referential integrity",
                    "tenant isolation",
                    "auditability",
                    "deletion behavior",
                    "migration paths",
                    "indexes based on actual access patterns",
                    "which history needs to be preserved",
                    "what should be normalized",
                    "what is worth deliberately duplicating for read performance",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-primary flex-shrink-0 select-none">·</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                  I will denormalize when it buys something measurable. I do not denormalize
                  because joins look scary.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-2 lg:gap-8 border-t border-border pt-6">
              <h4 className="font-mono text-base font-semibold text-foreground">APIs</h4>
              <div className="max-w-3xl space-y-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I have built REST, GraphQL, WebSocket, event-driven, and internal service APIs.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I do not think one of them wins.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  REST is usually wonderfully boring.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  GraphQL is useful when consumers genuinely need flexible access to a connected
                  data model and the additional complexity is justified.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  WebSockets are useful when the product actually needs a live connection.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Events are useful when the consumer should not be part of the producer's request
                  path.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The protocol matters less than having a clear contract, predictable errors, sane
                  authorization, validation at the boundary, and behavior developers can reason
                  about.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-2 lg:gap-8 border-t border-border pt-6">
              <h4 className="font-mono text-base font-semibold text-foreground">State</h4>
              <div className="max-w-3xl space-y-2">
                <p className="text-sm text-foreground leading-relaxed">State deserves suspicion.</p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  The more places that can independently mutate the same idea, the harder the
                  system becomes to understand.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I try to be deliberate about where state lives, who owns it, who is allowed to
                  change it, and which copy is authoritative.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  That applies to databases, frontend state, caches, workflows, background jobs,
                  and distributed systems equally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Things That Make Me Nervous */}
        <section id="arch-smells" className="scroll-mt-16">
          <h3 className="font-mono text-2xl font-bold text-foreground">
            Things That Make Me Nervous
          </h3>
          <div className="mt-4 mb-8 max-w-3xl">
            <p className="text-sm text-muted-foreground leading-relaxed">
              None of these automatically mean the architecture is bad.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mt-2">
              They do make me start asking questions.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {SMELLS.map((smell) => (
              <div
                key={smell.title}
                className="bg-card border border-border border-t-2 border-t-primary/50 p-5"
              >
                <h4 className="text-sm font-semibold text-foreground mb-2">{renderInline(smell.title)}</h4>
                <Paragraphs text={smell.body} className="text-xs text-muted-foreground leading-relaxed" />
              </div>
            ))}
          </div>
        </section>

        {/* 8. How I Document Architecture */}
        <section id="arch-docs" className="scroll-mt-16">
          <SectionHeading>How I Document Architecture</SectionHeading>
          <div className="max-w-3xl space-y-2 mb-8">
            <p className="text-sm text-muted-foreground leading-relaxed">
              I write enough documentation to preserve the decisions that are expensive to
              rediscover.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              I do not want a 70-page architecture document nobody trusts three months later.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Different documents answer different questions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="max-w-3xl">
              <h4 className="text-sm font-semibold text-foreground mb-1.5">Architecture overview</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                What are the major pieces, what does each own, and how do they interact?
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                A new engineer should be able to read this and know where to start looking.
              </p>
            </div>

            <div className="max-w-3xl">
              <h4 className="text-sm font-semibold text-foreground mb-1.5">Diagrams</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                I use diagrams when relationships matter more than implementation detail.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                System boundaries, data flow, trust boundaries, deployment topology, and
                complicated workflows are usually easier to understand visually.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                The diagram should explain something. I do not need a rectangle for every class.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 lg:gap-12">
              <div className="max-w-3xl">
                <h4 className="text-sm font-semibold text-foreground mb-1.5">ADRs</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  I like ADRs for decisions where another competent engineer could reasonably have
                  chosen something different.
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  My normal structure is:
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                  That last one matters. Architecture decisions are made with the information
                  available at the time. I do not need every decision to remain correct forever.
                </p>
              </div>
              <div className="bg-card border border-border p-5 self-start">
                <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-4">
                  ADR structure
                </p>
                <div className="space-y-3">
                  {ADR_STRUCTURE.map((entry) => (
                    <div key={entry.label}>
                      <p className="font-mono text-xs font-semibold text-foreground">{entry.label}</p>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{entry.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="max-w-3xl">
              <h4 className="text-sm font-semibold text-foreground mb-1.5">Contracts</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                APIs, events, plugins, schemas, and module boundaries need documentation close to
                the thing being integrated with.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                The closer documentation is to executable truth, the more likely I am to trust it.
              </p>
            </div>

            <div className="max-w-3xl">
              <h4 className="text-sm font-semibold text-foreground mb-1.5">Operational notes</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                For anything important enough to wake somebody up, I want enough documentation to
                answer:
              </p>
              <ul className="mt-2 space-y-1.5">
                {[
                  "How do I know it is broken?",
                  "Where do I look?",
                  "What is safe to retry?",
                  "What should never be done manually?",
                  "How do I recover it?",
                ].map((question) => (
                  <li key={question} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                    <span className="text-primary flex-shrink-0 select-none">·</span>
                    {question}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 9. Architecture Should Be Enforced */}
        <section id="arch-enforcement" className="scroll-mt-16">
          <SectionHeading>Architecture Should Be Enforced</SectionHeading>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-12">
            <div className="max-w-3xl space-y-2">
              <p className="text-sm text-muted-foreground leading-relaxed">
                I do not think architecture is finished when everyone agrees on it.
              </p>
              <p className="text-sm text-foreground leading-relaxed">
                Important decisions should survive the meeting.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                This has become much more important with AI-assisted development.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                AI did not really change my opinion about architecture. It changed how expensive
                weak enforcement can become.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A developer might violate a boundary once.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                An agent can repeat the same reasonable-looking mistake across thousands of lines
                of code before anyone realizes the system is drifting.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                So I have been putting more effort into deterministic guardrails: checks that do
                not care whether the code was written by me, another engineer, or an agent.
              </p>
              <p className="text-sm text-foreground leading-relaxed">The rule is the rule.</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If an architectural constraint matters enough that I would call it out in a review,
                I at least ask whether it can be checked automatically.
              </p>
            </div>
            <div className="bg-card border border-border p-5 self-start">
              <p className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase mb-3">
                Depending on the rule, I use
              </p>
              <ul className="space-y-1.5">
                {ENFORCEMENT_MECHANISMS.map((mechanism) => (
                  <li key={mechanism} className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                    <span className="text-primary flex-shrink-0 select-none">·</span>
                    {mechanism}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 10. Tools */}
        <section id="arch-tools" className="scroll-mt-16">
          <SectionHeading>Tools</SectionHeading>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Tools change. The jobs I use them for are more consistent.
          </p>
          <div className="border-t border-border">
            {TOOL_GROUPS.map((group) => (
              <div
                key={group.label}
                className="grid grid-cols-1 sm:grid-cols-[240px_1fr] gap-1 sm:gap-6 border-b border-border py-3"
              >
                <p className="font-mono text-xs font-semibold text-foreground">{group.label}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{group.tools}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mt-6">
            I use tools to make decisions visible and enforceable. The tool itself is rarely the
            interesting part.
          </p>
        </section>

        {/* 11. In Practice */}
        <section id="arch-practice" className="scroll-mt-16">
          <SectionHeading>In Practice</SectionHeading>
          <div className="space-y-3">
            {IN_PRACTICE.map((example) => (
              <div key={example.name} className="bg-card border border-border p-5">
                <h4 className="font-mono text-sm font-semibold text-foreground tracking-wide mb-3">
                  {example.name}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-8">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Problem: </span>
                    {example.problem}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-semibold text-foreground">Architecture: </span>
                    {example.architecture}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
