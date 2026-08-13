# Refactoring Plan: Break `src/app/App.tsx` into Modules

Note on stack: the app does **not** currently use react-router — it uses a custom hash router (`useHashRoute`). This plan preserves that (extracting it as a hook); swapping to react-router can be a separate follow-up. Entry point is `src/main.tsx` → `App`. Only other app files are `src/app/components/ui/*` (shadcn, untouched) and `src/app/components/figma/ImageWithFallback.tsx` (unused by App).

## 1. Inventory of App.tsx (line ranges)

**Types (4–49)**
- `Section`, `ThemeMode`, `ThemeColors`, `ThemeEntry`, `CodeRepo`, `ProductSignal`, `ProductWork`. Note: `EXPERIENCE_WORK` and `CAREER_QUOTES` entries are untyped (inferred) — add `ExperienceItem` / `CareerQuote` interfaces during extraction.

**Data constants**
- 51–55: `CONTACT_EMAIL_CODES`, `CONTACT_SCHEME_CODES` (obfuscated email)
- 65–91: `THEMES`
- 267–318: `CODE_FAMILIES`, `CODE_REPOS`
- 320–410: `PRODUCT_SUITE_DESCRIPTIONS`, `PRODUCT_WORK`
- 412–475: `EXPERIENCE_WORK`
- 477–508: `CAREER_QUOTES`
- 510–620: `ARCH_DOC` (markdown string)
- 1227–1234: `NAV_ITEMS` (contains JSX icons — belongs with layout, not pure data)

**Functions / hooks**
- 57–61: `openContactEmail()`
- 95–160: color utilities `hexToRgb`, `relativeLuminance`, `readableOn`, `hexAlpha`, `applyTheme`
- 164–206: `useTheme()` hook (localStorage + matchMedia)
- 246–263: `useHashRoute()` hook

**Components**
- 210–242: `ThemeControls`
- 624–764: `parseInline` + `MarkdownRenderer`
- 768–845: shared primitives `Tag`, `SectionLabel`, `PageHeader`, `NavItem`
- 849–1193: pages `HomePage` (849), `ProductPage` (937), `CodePage` (1011), `ExperiencePage` (1082), `ArchitecturePage` (1135), `CareerPage` (1154)
- 1197–1223: `PageTransition`
- 1236–1356: `Sidebar`
- 1360–1424: `App` (composition + top bar + inline `<style>` tag at 1418–1421)

**Styles**: only the inline `<style>` block (scrollbar hide + box-sizing) at 1418–1421; could move to `src/styles/globals.css`, but keeping it in the layout shell is also fine.

## 2. Target structure

```
src/app/
  App.tsx                      # thin: shell + route switch (~60 lines)
  types.ts                     # Section, ThemeMode, ThemeColors, ThemeEntry,
                               # CodeRepo, ProductSignal, ProductWork,
                               # ExperienceItem, CareerQuote        (4–49)
  data/
    themes.ts                  # THEMES                             (65–91)
    contact.ts                 # email codes + openContactEmail()   (51–61)
    code-repos.ts              # CODE_FAMILIES, CODE_REPOS          (267–318)
    product-work.ts            # PRODUCT_SUITE_DESCRIPTIONS, PRODUCT_WORK (320–410)
    experience.ts              # EXPERIENCE_WORK                    (412–475)
    career-quotes.ts           # CAREER_QUOTES                      (477–508)
    architecture-doc.ts        # ARCH_DOC                           (510–620)
  lib/
    color.ts                   # hexToRgb, relativeLuminance, readableOn,
                               # hexAlpha, applyTheme               (95–160)
  hooks/
    useTheme.ts                # useTheme                           (164–206)
    useHashRoute.ts            # useHashRoute                       (246–263)
  components/
    shared/
      Tag.tsx                  # (768–774)
      SectionLabel.tsx         # (776–782)
      PageHeader.tsx           # (784–811)
      MarkdownRenderer.tsx     # parseInline + MarkdownRenderer     (624–764)
      PageTransition.tsx       # (1197–1223)
  layout/
    ThemeControls.tsx          # (210–242)
    NavItem.tsx                # (813–845)
    Sidebar.tsx                # NAV_ITEMS + Sidebar                (1227–1356)
  pages/
    HomePage.tsx               # incl. its local `sections` array   (849–935)
    ProductPage.tsx            # (937–1009)
    CodePage.tsx               # (1011–1080)
    ExperiencePage.tsx         # (1082–1133)
    ArchitecturePage.tsx       # (1135–1152)
    CareerPage.tsx             # (1154–1193)
```

`NAV_ITEMS` stays inside `Sidebar.tsx` (or a `layout/nav-items.tsx`) because it holds JSX; keep it out of `data/` to keep data files JSX-free. Same reason `HomePage`'s `sections` array stays in `HomePage.tsx`.

## 3. Ordered incremental steps (build after each phase)

**Phase 1 — types + data (no JSX, zero risk)**
1. Create `src/app/types.ts` with the 7 existing interfaces plus new `ExperienceItem` and `CareerQuote`.
2. Create the 7 `src/app/data/*.ts` files, each importing types from `../types` and exporting the constants; type `EXPERIENCE_WORK: ExperienceItem[]` and `CAREER_QUOTES: CareerQuote[]`.
3. In App.tsx: delete the moved blocks, add imports.
4. Verify: `pnpm build`.

**Phase 2 — lib + hooks**
5. Create `src/app/lib/color.ts` (export only `applyTheme`; keep the other helpers module-private unless tests need them).
6. Create `hooks/useTheme.ts` (imports `THEMES` from data, `applyTheme` from lib) and `hooks/useHashRoute.ts` (imports `Section` type).
7. Remove from App.tsx, import instead. Verify build.

**Phase 3 — leaf/shared components**
8. Extract `Tag`, `SectionLabel`, `PageHeader`, `MarkdownRenderer` (+`parseInline`), `PageTransition` into `components/shared/`. Each with its own lucide/type imports.
9. Update App.tsx imports. Verify build. (Trim now-unused lucide icons from App.tsx's import line at each phase or lint will fail on unused imports.)

**Phase 4 — pages**
10. Extract the six pages into `src/app/pages/`. Each imports its data module and shared components. `HomePage` takes `navigate: (s: Section) => void` as a prop (unchanged).
11. Verify build.

**Phase 5 — layout shell**
12. Extract `ThemeControls` (imports `THEMES` for the select options), `NavItem`, and `Sidebar` (with `NAV_ITEMS` and `openContactEmail` import) into `src/app/layout/`.
13. App.tsx becomes: `useHashRoute` + `useTheme` + `sidebarOpen` state, `renderPage()` switch, shell JSX, inline `<style>` block (or move those two rules into `src/styles/globals.css`).
14. Verify build; smoke-test `pnpm dev` — hash nav, theme select, dark/light toggle, mobile sidebar.

Each phase leaves App.tsx compiling because extractions are pure moves with import rewiring — no signature changes except adding the two new interfaces.

## 4. State / props-threading concerns

- **Theme state** (`themeName`, `setThemeName`, `activeMode`, `toggleMode`): lives in `App` via `useTheme` and is passed only to `ThemeControls` — one level, one consumer. **Keep as props**; a ThemeContext is unwarranted unless pages later need theme values. The actual theming is applied via CSS variables on `document.documentElement`, so components never need theme values directly.
- **Routing** (`section`, `navigate`): consumed by `Sidebar`, `PageTransition`, top-bar breadcrumb, and `HomePage`. Still shallow (max one level). **Keep as props.** If/when migrating to react-router 7, `navigate`/`section` disappear in favor of `<NavLink>`/`useLocation`, so introducing a RouteContext now would be throwaway work.
- **Sidebar open state**: purely local to `App`; stays as `useState` with `open`/`onClose` props.
- **Coupling to watch**: `useTheme` and `ThemeControls` both import `THEMES` — fine since it's shared data, not shared state. `openContactEmail` is used only by `Sidebar`; import it there from `data/contact.ts`.

## 5. Related cleanup (from lint/typecheck baseline)

The new strict tooling reports 73 lint errors and 36 typecheck errors, concentrated in App.tsx. Fix them per-module as each piece is extracted (mostly `prefer-nullish-coalescing`, `no-confusing-void-expression`, and `noUncheckedIndexedAccess` possibly-undefined guards) rather than in one pass.
