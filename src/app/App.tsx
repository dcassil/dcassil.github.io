import { Fragment, useState, useCallback } from "react";
import { Menu, X, Github, ExternalLink, ArrowRight, Terminal, Layers, Box, Cpu, ChevronRight, Sun, Moon, Briefcase, Mail, Linkedin, Package } from "lucide-react";
import type { Section, ThemeMode } from "./types";
import { Tag } from "./components/shared/Tag";
import { SectionLabel } from "./components/shared/SectionLabel";
import { PageHeader } from "./components/shared/PageHeader";
import { MarkdownRenderer } from "./components/shared/MarkdownRenderer";
import { PageTransition } from "./components/shared/PageTransition";
import { THEMES } from "./data/themes";
import { openContactEmail } from "./data/contact";
import { useTheme } from "./hooks/useTheme";
import { useHashRoute } from "./hooks/useHashRoute";
import { CODE_FAMILIES, CODE_REPOS } from "./data/code-repos";
import { PRODUCT_SUITE_DESCRIPTIONS, PRODUCT_WORK } from "./data/product-work";
import { EXPERIENCE_WORK } from "./data/experience";
import { CAREER_QUOTES } from "./data/career-quotes";
import { ARCH_DOC } from "./data/architecture-doc";

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

// ─── Components ───────────────────────────────────────────────────────────────

function DescriptionText({
  text,
  className,
}: {
  text: string;
  className: string;
}) {
  return (
    <>
      {text.split("\n\n").map((paragraph, index) => (
        <p key={paragraph} className={`${className} ${index > 0 ? "mt-3" : ""}`}>
          {paragraph}
        </p>
      ))}
    </>
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
                    <div className="mb-5">
                      <DescriptionText text={work.description} className="text-sm text-muted-foreground leading-relaxed max-w-xl" />
                    </div>
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
                      <div className="mb-4 flex-1">
                        <DescriptionText text={repo.description} className="text-xs text-muted-foreground leading-relaxed" />
                      </div>
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
