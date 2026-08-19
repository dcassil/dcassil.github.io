// ─── Types ────────────────────────────────────────────────────────────────────

export type Section =
  | "home"
  | "product"
  | "product/component-lib/demo"
  | "code"
  | "experience"
  | "architecture"
  | "career";
export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  primaryBg: string;
  secondaryBg: string;
  primaryFt: string;
  secondaryFt: string;
  contrast: string;
}

export interface ThemeEntry {
  name: string;
  dark: ThemeColors;
  light: ThemeColors;
}

export interface CodeRepo {
  id: string;
  title: string;
  description: string;
  tags: string[];
  family: string;
  url?: string;
}

export interface ProductSignal {
  label: string;
  value: string;
}

export interface ProductWork {
  id: string;
  title: string;
  period: string;
  status: string;
  category: string;
  description: string;
  tags: string[];
  metrics: ProductSignal[];
  accent: string;
  suite?: string;
  url?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface CareerQuote {
  quote: string;
  source: string;
  theme: string;
}
