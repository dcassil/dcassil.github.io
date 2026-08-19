import { useCallback } from "react";
import { X, Terminal, Layers, Box, Cpu, Briefcase, Mail, Github, Linkedin, Package } from "lucide-react";
import type { Section } from "../types";
import { openContactEmail } from "../data/contact";
import { NavItem } from "./NavItem";

const NAV_ITEMS: { id: Section; label: string; icon: React.ReactNode }[] = [
  { id: "home", label: "Overview", icon: <Box size={13} /> },
  { id: "product", label: "Product", icon: <Layers size={13} /> },
  { id: "code", label: "Code", icon: <Terminal size={13} /> },
  { id: "experience", label: "Experience", icon: <Briefcase size={13} /> },
  { id: "architecture", label: "Architecture", icon: <Cpu size={13} /> },
  { id: "career", label: "Working With Me", icon: <Box size={13} /> },
];

export function Sidebar({
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
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden cursor-default"
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
              icon={item.icon}
              active={section === item.id || section.startsWith(`${item.id}/`)}
              onClick={() => { handleNav(item.id); }}
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
