import{j as l}from"./index-DW36zwiR.js";import{r as s}from"./index-3dRrDZpt.js";import{a as p}from"./index-D_r6Hzab.js";const a={token:{colorPrimary:"#1890ff",colorSuccess:"#52c41a",colorWarning:"#faad14",colorError:"#ff4d4f",colorInfo:"#1890ff",colorBgBase:"#ffffff",colorBgContainer:"#ffffff",colorBgElevated:"#fafafa",colorBgLayout:"#f5f5f5",colorText:"rgba(0, 0, 0, 0.85)",colorTextSecondary:"rgba(0, 0, 0, 0.65)",colorTextTertiary:"rgba(0, 0, 0, 0.45)",colorTextQuaternary:"rgba(0, 0, 0, 0.25)",colorBorder:"#d9d9d9",colorBorderSecondary:"#f0f0f0",fontFamily:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',fontSize:14,fontSizeLG:16,fontSizeSM:12,fontSizeXL:20,fontSizeHeading1:38,fontSizeHeading2:30,fontSizeHeading3:24,fontSizeHeading4:20,fontSizeHeading5:16,lineHeight:1.5715,borderRadius:6,borderRadiusLG:8,borderRadiusSM:4,sizeUnit:4,sizeStep:4,controlHeight:32,controlHeightLG:40,controlHeightSM:24,boxShadow:"0 2px 8px rgba(0, 0, 0, 0.15)",boxShadowSecondary:"0 2px 8px rgba(0, 0, 0, 0.09)"},components:{Button:{borderRadius:6,controlHeight:32,primaryColor:"#ffffff"},Input:{borderRadius:6,controlHeight:32},Card:{borderRadius:8,paddingLG:24},Table:{borderRadius:8,headerBg:"#fafafa",headerColor:"rgba(0, 0, 0, 0.85)"},Layout:{bodyBg:"#f5f5f5",headerBg:"#ffffff",headerPadding:"0 24px",siderBg:"#ffffff"},Menu:{itemBorderRadius:4},Tag:{borderRadius:4}},componentLib:{global:{spacingUnit:4,touchTargetMin:44,topbarHeight:64,topbarHeightMobile:56,sidebarWidth:250,sidebarWidthMinimal:80,sidebarWidthMobile:280,transitionFast:"150ms",transitionNormal:"200ms",transitionSlow:"300ms"},ResizableLayout:{resizeHandleWidth:4},StatCard:{valueFontSize:32,iconSize:32},PageHeader:{titleFontSize:24},EmptyState:{iconSize:64}}},f=s.createContext(null);function c(e={}){const t=document.documentElement,o=e.spacingUnit??4;t.style.setProperty("--spacing-unit",`${o}px`),t.style.setProperty("--spacing-xs",`${o}px`),t.style.setProperty("--spacing-sm",`${o*2}px`),t.style.setProperty("--spacing-md",`${o*3}px`),t.style.setProperty("--spacing-lg",`${o*4}px`),t.style.setProperty("--spacing-xl",`${o*6}px`),t.style.setProperty("--spacing-2xl",`${o*8}px`),t.style.setProperty("--touch-target-min",`${e.touchTargetMin??44}px`),t.style.setProperty("--touch-target-sm",`${(e.touchTargetMin??44)-8}px`),t.style.setProperty("--topbar-height",`${e.topbarHeight??64}px`),t.style.setProperty("--topbar-height-mobile",`${e.topbarHeightMobile??56}px`),t.style.setProperty("--sidebar-width",`${e.sidebarWidth??250}px`),t.style.setProperty("--sidebar-width-minimal",`${e.sidebarWidthMinimal??80}px`),t.style.setProperty("--sidebar-width-mobile",`${e.sidebarWidthMobile??280}px`),t.style.setProperty("--transition-fast",`${e.transitionFast??"150ms"} ease`),t.style.setProperty("--transition-normal",`${e.transitionNormal??"200ms"} ease`),t.style.setProperty("--transition-slow",`${e.transitionSlow??"300ms"} ease`)}function d(e,t){if(!t)return e||{};if(!e)return t;const o={...e};for(const n of Object.keys(t)){const i=t[n],r=e[n];i!==null&&r!==null&&typeof i=="object"&&typeof r=="object"&&!Array.isArray(i)&&!Array.isArray(r)?o[n]=d(r,i):i!==void 0&&(o[n]=i)}return o}function h(e,t){if(!t)return e||{};if(!e)return t;const o={...e};return t.global&&(o.global={...e.global,...t.global}),t.ResizableLayout&&(o.ResizableLayout={...e.ResizableLayout,...t.ResizableLayout}),t.StatCard&&(o.StatCard={...e.StatCard,...t.StatCard}),t.PageHeader&&(o.PageHeader={...e.PageHeader,...t.PageHeader}),t.EmptyState&&(o.EmptyState={...e.EmptyState,...t.EmptyState}),o}const m=({theme:e,children:t})=>{const o=s.useMemo(()=>{if(!e)return a;const r={token:d(a.token||{},e.token),components:d(a.components||{},e.components),componentLib:h(a.componentLib,e.componentLib)};return e.algorithm!==void 0&&(r.algorithm=e.algorithm),e.hashed!==void 0&&(r.hashed=e.hashed),e.inherit!==void 0&&(r.inherit=e.inherit),e.cssVar!==void 0&&(r.cssVar=e.cssVar),r},[e]),n=o.componentLib||{};s.useEffect(()=>{c(n.global)},[n.global]);const i={};return o.token&&(i.token=o.token),o.components&&(i.components=o.components),o.algorithm&&(i.algorithm=o.algorithm),o.hashed!==void 0&&(i.hashed=o.hashed),o.inherit!==void 0&&(i.inherit=o.inherit),o.cssVar!==void 0&&(i.cssVar=o.cssVar),l.jsx(f.Provider,{value:n,children:l.jsx(p,{theme:i,children:t})})};m.__docgenInfo={description:`UIProvider component that wraps Ant Design's ConfigProvider

This is the main entry point for theming in component-lib.
Wrap your app with this component to apply the theme.

The UIProvider:
1. Configures Ant Design's ConfigProvider with your theme
2. Injects CSS custom properties for runtime theming
3. Provides component-lib specific tokens via context

@example
\`\`\`tsx
import { UIProvider, ResizableLayout } from 'dashboard-component-lib';

function App() {
  return (
    <UIProvider>
      <ResizableLayout>
        Your app content
      </ResizableLayout>
    </UIProvider>
  );
}
\`\`\`

@example
\`\`\`tsx
// Custom theme with overrides
<UIProvider
  theme={{
    token: {
      colorPrimary: '#722ed1',
      fontFamily: '"Inter", sans-serif',
    },
    componentLib: {
      global: {
        topbarHeight: 72,
      },
      StatCard: {
        iconColor: '#722ed1',
      },
    },
  }}
>
  Your app content
</UIProvider>
\`\`\``,methods:[],displayName:"UIProvider",props:{theme:{required:!1,tsType:{name:"ComponentLibThemeConfig"},description:`Theme configuration. If not provided, uses the default theme.
You can override specific tokens while keeping the rest of the default theme.`},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Children to render with the theme applied"}}};export{m as U,a as d};
