import { Box, Terminal, Briefcase, Cpu, ExternalLink, ArrowRight } from "lucide-react";
import type { Section } from "../types";
import { SectionLabel } from "../components/shared/SectionLabel";

export function HomePage({ navigate }: { navigate: (s: Section) => void }) {
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
                It’s all about the user. That seemingly obvious but often ignored truth shapes how I approach every
                solution. Whether I am creating a product vision, defining architecture, designing a database schema,
                or simply writing code, I keep the same questions ever present: what does the user need, what are they
                trying to accomplish, what context are they working in, what might they not know to ask for yet, and how
                do I want the experience to make them feel?
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                I am a full-stack developer who builds complex, UX-heavy products from the interface through the API,
                data model, and infrastructure behind it. I think in systems, not slices. Over 15 years across frontend,
                backend, databases, architecture, infrastructure, product, UX, and engineering leadership, I have learned
                to see how a decision in one part of a product affects everything around it. I enjoy taking complicated
                problems, evaluating them from several angles, exposing the tradeoffs, and turning them into solutions
                that make sense for the user, the business, and the people who have to build and maintain them.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                That also means I am comfortable stepping outside the traditional developer role when the work needs it.
                I can move into product discovery, work directly with users and stakeholders, shape requirements, develop
                wireframes and flows, evaluate competing approaches, and help define the product vision. I am equally
                comfortable driving delivery, clearing roadblocks, resolving ambiguity, coordinating teams, making
                decisions, and keeping complex projects moving efficiently toward something that ships. I have done that
                from several seats, including Co-Founder, Sole Engineer, Engineering Manager, Team Lead, Interim Product
                Manager, and, when needed, Project Manager.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                A big part of that work is communication and alignment. Product, design, engineering, and leadership each
                have their own language and perspective, which shapes how they see, understand, and communicate about the
                product. I am multilingual in that sense, strongest in product and leadership, followed by engineering
                and then design. That range has consistently allowed me to translate between groups, bridge gaps in
                understanding, and drive clarity, cohesion, and alignment around a shared vision. I have led and worked
                with teams across more than a dozen countries and multiple industries.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                This way of thinking started long before software. I was the kid who took things apart to understand
                them, sent invention ideas to DARPA, Fox, and other companies, and at seven genuinely thought I had solved
                infinite clean energy with mirrors, LEDs, solar panels, and hot glue. The second law of thermodynamics
                eventually won, but the instinct stuck: understand how something works, imagine how it could work better,
                and then try to build it.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                More recently, much of my focus has been on AI-assisted engineering and what happens when software output
                accelerates faster than our ability to review and control it. I have been building tools, workflows, and
                deterministic guardrails that move architecture, style guides, and engineering standards out of documents
                and into the development environment itself: static analysis, dependency boundaries, pre-commit validation,
                build checks, CI gates, and fast feedback when something drifts. The best guardrails do more than reject
                a bad change; they explain what failed immediately, while the decision is still fresh and easy to correct.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                AI can produce an extraordinary amount of code very quickly. I want to keep that speed while preserving
                the judgment, structure, and discipline that make software maintainable. The goal is to create an
                environment where AI has no choice but to produce excellent, well-architected code, validated not by its
                own reasoning or promises, but by immutable deterministic systems it cannot bypass.
              </p>
              <p className="mt-4 text-base text-muted-foreground leading-relaxed break-words">
                The common thread through all of this is simple: understand the user, understand the whole system required
                to serve them, bring the people responsible for it into alignment, and turn complex problems into clear
                solutions that actually get built.
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
              onClick={() => { navigate(s.id); }}
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
