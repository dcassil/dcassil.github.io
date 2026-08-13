import { useState, useEffect } from "react";
import type { ThemeMode } from "../types";
import { THEMES } from "../data/themes";
import { applyTheme } from "../lib/color";

export function useTheme() {
  const getSystemMode = (): ThemeMode =>
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

  const [themeName, setThemeNameState] = useState<string>(() =>
    localStorage.getItem("portfolio-theme") ?? THEMES[0]?.name ?? ""
  );
  const [modeOverride, setModeOverride] = useState<ThemeMode | "system">(() => {
    const stored = localStorage.getItem("portfolio-mode");
    return stored !== null ? (stored as ThemeMode | "system") : "system";
  });

  const activeMode: ThemeMode =
    modeOverride === "system" ? getSystemMode() : modeOverride;

  useEffect(() => {
    const theme = THEMES.find((t) => t.name === themeName) ?? THEMES[0];
    if (theme) {
      applyTheme(activeMode === "dark" ? theme.dark : theme.light);
    }
  }, [themeName, activeMode]);

  useEffect(() => {
    if (modeOverride !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      const theme = THEMES.find((t) => t.name === themeName) ?? THEMES[0];
      if (theme) {
        applyTheme(mq.matches ? theme.dark : theme.light);
      }
    };
    mq.addEventListener("change", handler);
    return () => { mq.removeEventListener("change", handler); };
  }, [themeName, modeOverride]);

  const setThemeName = (name: string) => {
    localStorage.setItem("portfolio-theme", name);
    setThemeNameState(name);
  };

  const toggleMode = () => {
    const next: ThemeMode = activeMode === "dark" ? "light" : "dark";
    localStorage.setItem("portfolio-mode", next);
    setModeOverride(next);
  };

  return { themeName, setThemeName, activeMode, toggleMode };
}
