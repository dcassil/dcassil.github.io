import { ChevronRight } from "lucide-react";
import type { Section } from "../types";

export function NavItem({
  label,
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
