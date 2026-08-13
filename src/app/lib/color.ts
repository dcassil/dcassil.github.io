import type { ThemeColors } from "../types";

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [
    parseInt(h.slice(0, 2), 16),
    parseInt(h.slice(2, 4), 16),
    parseInt(h.slice(4, 6), 16),
  ];
}

function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex).map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * (r ?? 0) + 0.7152 * (g ?? 0) + 0.0722 * (b ?? 0);
}

function readableOn(bg: string, light: string, dark: string): string {
  const bgL = relativeLuminance(bg);
  const lightL = relativeLuminance(light);
  const darkL = relativeLuminance(dark);
  const lightContrast = (Math.max(lightL, bgL) + 0.05) / (Math.min(lightL, bgL) + 0.05);
  const darkContrast = (Math.max(darkL, bgL) + 0.05) / (Math.min(darkL, bgL) + 0.05);
  return lightContrast >= darkContrast ? light : dark;
}

function hexAlpha(hex: string, alpha: number): string {
  const [r, g, b] = hexToRgb(hex);
  return `rgba(${String(r)},${String(g)},${String(b)},${String(alpha)})`;
}

export function applyTheme(c: ThemeColors): void {
  const root = document.documentElement;
  const onContrast = readableOn(c.contrast, c.primaryFt, c.primaryBg);
  const [fr, fg, fb] = hexToRgb(c.primaryFt);
  const vars: Record<string, string> = {
    "--background":                   c.primaryBg,
    "--foreground":                   c.primaryFt,
    "--card":                         c.secondaryBg,
    "--card-foreground":              c.primaryFt,
    "--popover":                      c.secondaryBg,
    "--popover-foreground":           c.primaryFt,
    "--primary":                      c.contrast,
    "--primary-foreground":           onContrast,
    "--secondary":                    c.secondaryBg,
    "--secondary-foreground":         c.primaryFt,
    "--muted":                        c.secondaryBg,
    "--muted-foreground":             c.secondaryFt,
    "--accent":                       c.contrast,
    "--accent-foreground":            onContrast,
    "--border":                       `rgba(${String(fr)},${String(fg)},${String(fb)},0.16)`,
    "--ring":                         c.contrast,
    "--input":                        c.secondaryBg,
    "--input-background":             c.secondaryBg,
    "--switch-background":            hexAlpha(c.secondaryFt, 0.4),
    "--sidebar":                      c.primaryBg,
    "--sidebar-foreground":           c.primaryFt,
    "--sidebar-primary":              c.contrast,
    "--sidebar-primary-foreground":   onContrast,
    "--sidebar-accent":               c.secondaryBg,
    "--sidebar-accent-foreground":    c.primaryFt,
    "--sidebar-border":               `rgba(${String(fr)},${String(fg)},${String(fb)},0.1)`,
    "--sidebar-ring":                 c.contrast,
  };
  Object.entries(vars).forEach(([k, v]) => { root.style.setProperty(k, v); });
}
