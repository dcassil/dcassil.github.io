import type { ThemeEntry } from "../types";

export const THEMES: ThemeEntry[] = [
  {
    name: "VS Code Modern",
    dark:  { primaryBg: "#181818", secondaryBg: "#1F1F1F", primaryFt: "#CCCCCC", secondaryFt: "#9D9D9D", contrast: "#0078D4" },
    light: { primaryBg: "#FFFFFF", secondaryBg: "#F3F3F3", primaryFt: "#1F1F1F", secondaryFt: "#616161", contrast: "#0067C0" },
  },
  {
    name: "GitHub",
    dark:  { primaryBg: "#0D1117", secondaryBg: "#161B22", primaryFt: "#F0F6FC", secondaryFt: "#8B949E", contrast: "#2F81F7" },
    light: { primaryBg: "#FFFFFF", secondaryBg: "#F6F8FA", primaryFt: "#1F2328", secondaryFt: "#656D76", contrast: "#0969DA" },
  },
  {
    name: "Catppuccin",
    dark:  { primaryBg: "#1E1E2E", secondaryBg: "#313244", primaryFt: "#CDD6F4", secondaryFt: "#A6ADC8", contrast: "#89B4FA" },
    light: { primaryBg: "#EFF1F5", secondaryBg: "#E6E9EF", primaryFt: "#4C4F69", secondaryFt: "#6C6F85", contrast: "#1E66F5" },
  },
  {
    name: "Dracula",
    dark:  { primaryBg: "#282A36", secondaryBg: "#343746", primaryFt: "#F8F8F2", secondaryFt: "#BFBFCB", contrast: "#BD93F9" },
    light: { primaryBg: "#F8F8F2", secondaryBg: "#ECECE7", primaryFt: "#282A36", secondaryFt: "#626374", contrast: "#7C3AED" },
  },
  {
    name: "Solarized",
    dark:  { primaryBg: "#002B36", secondaryBg: "#073642", primaryFt: "#FDF6E3", secondaryFt: "#93A1A1", contrast: "#268BD2" },
    light: { primaryBg: "#FDF6E3", secondaryBg: "#EEE8D5", primaryFt: "#073642", secondaryFt: "#657B83", contrast: "#268BD2" },
  },
];
