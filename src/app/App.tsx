import { useState } from "react";
import { Menu } from "lucide-react";
import { PageTransition } from "./components/shared/PageTransition";
import { useTheme } from "./hooks/useTheme";
import { useHashRoute } from "./hooks/useHashRoute";
import { ThemeControls } from "./layout/ThemeControls";
import { Sidebar } from "./layout/Sidebar";
import { HomePage } from "./pages/HomePage";
import { ProductPage } from "./pages/ProductPage";
import { ComponentLibDemoPage } from "./pages/ComponentLibDemoPage";
import { CodePage } from "./pages/CodePage";
import { ExperiencePage } from "./pages/ExperiencePage";
import { ArchitecturePage } from "./pages/ArchitecturePage";
import { CareerPage } from "./pages/CareerPage";
import type { Section } from "./types";

function renderPage(section: Section, navigate: (s: Section) => void) {
  switch (section) {
    case "product": return <ProductPage navigate={navigate} />;
    case "product/component-lib/demo": return <ComponentLibDemoPage />;
    case "code": return <CodePage />;
    case "experience": return <ExperiencePage />;
    case "architecture": return <ArchitecturePage />;
    case "career": return <CareerPage />;
    default: return <HomePage navigate={navigate} />;
  }
}

export default function App() {
  const [section, navigate] = useHashRoute();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { themeName, setThemeName, activeMode, toggleMode } = useTheme();

  return (
    <div className="flex h-screen bg-background text-foreground overflow-hidden" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Sidebar
        section={section}
        navigate={navigate}
        open={sidebarOpen}
        onClose={() => { setSidebarOpen(false); }}
      />

      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top bar — always visible */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-background/95 backdrop-blur sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <button
              onClick={() => { setSidebarOpen(true); }}
              className="lg:hidden text-muted-foreground hover:text-foreground transition-colors p-1 -ml-1"
            >
              <Menu size={16} />
            </button>
            <span className="font-mono text-[10px] text-muted-foreground tracking-widest uppercase">
              {section === "home"
                ? "Overview"
                : section === "product/component-lib/demo"
                  ? "Product / Component Library"
                  : section}
            </span>
          </div>

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
            {renderPage(section, navigate)}
          </PageTransition>
        </main>
      </div>
    </div>
  );
}
