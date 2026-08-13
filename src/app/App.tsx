import { useState, useCallback } from "react";
import { Menu, X, Github, Terminal, Layers, Box, Cpu, ChevronRight, Sun, Moon, Briefcase, Mail, Linkedin, Package } from "lucide-react";
import type { Section, ThemeMode } from "./types";
import { PageTransition } from "./components/shared/PageTransition";
import { THEMES } from "./data/themes";
import { openContactEmail } from "./data/contact";
import { useTheme } from "./hooks/useTheme";
import { useHashRoute } from "./hooks/useHashRoute";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { CodePage } from "./pages/CodePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ArchitecturePage } from "./pages/ArchitecturePage";
import { CareerPage } from "./pages/CareerPage";

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
