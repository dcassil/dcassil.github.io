import{R as W,r as o}from"./index-3dRrDZpt.js";import{R as he}from"./DownOutlined-CJFB344f.js";import{C as K,c as v,e as F,g as be,r as xe,h as Ce,t as O,q as ve}from"./index-D_r6Hzab.js";import{p as G}from"./pickAttrs-BoNuQqbq.js";import{i as k,g as Se,m as Ne,c as Be}from"./statusUtils-DRtxZvD-.js";import{D as _e}from"./dropdown-_HmQ0U4N.js";import{j as m}from"./index-DW36zwiR.js";import{t as Re}from"./index-DixlKTR5.js";import{T as Pe}from"./index-B_RqcMmP.js";import{S as Ie}from"./index-Er0U-C2d.js";const X=W.createContext({}),P=({children:e})=>{const{getPrefixCls:t}=o.useContext(K),r=t("breadcrumb"),n=o.useContext(X),{classNames:a,styles:s}=n;return o.createElement("li",{className:v(`${r}-separator`,a==null?void 0:a.separator),style:s==null?void 0:s.separator,"aria-hidden":"true"},e===""?e:e||"/")};P.__ANT_BREADCRUMB_SEPARATOR=!0;function Te(e,t){if(!k(e.title))return null;const r=Object.keys(t).join("|");return typeof e.title=="object"?e.title:String(e.title).replace(new RegExp(`:(${r})`,"g"),(n,a)=>t[a]||n)}function J(e,t,r,n){if(!k(r))return null;const{className:a,onClick:s,...i}=t,l={...G(i,{data:!0,aria:!0}),onClick:s};return n!==void 0?o.createElement("a",{...l,className:v(`${e}-link`,a),href:n},r):o.createElement("span",{...l,className:v(`${e}-link`,a)},r)}function we(e,t){return(n,a,s,i,l)=>{if(t)return t(n,a,s,i);const d=Te(n,a);return J(e,n,d,l)}}const Q=e=>{const{prefixCls:t,separator:r="/",children:n,menu:a,dropdownProps:s,href:i,dropdownIcon:l}=e,d=o.useContext(X),{classNames:c,styles:p}=d,f=(y=>{if(a){const N={...s};if(a){const{items:b,...I}=a||{};N.menu={...I,items:b==null?void 0:b.map(({key:T,title:w,label:E,path:B,...$},M)=>{let u=E??w;return B&&(u=o.createElement("a",{href:`${i}${B}`},u)),{...$,key:T??M,label:u}})}}return o.createElement(_e,{placement:"bottom",...N},o.createElement("span",{className:`${t}-overlay-link`},y,l))}return y})(n);return k(f)?o.createElement(o.Fragment,null,o.createElement("li",{className:v(`${t}-item`,c==null?void 0:c.item),style:p==null?void 0:p.item},f),r&&o.createElement(P,null,r)):null},Y=e=>{const{prefixCls:t,children:r,href:n,...a}=e,{getPrefixCls:s}=o.useContext(K),i=s("breadcrumb",t);return o.createElement(Q,{...a,prefixCls:i},J(i,a,r,n))};Y.__ANT_BREADCRUMB_ITEM=!0;const Ee=e=>{const{componentCls:t,iconCls:r,calc:n}=e;return{[t]:{...xe(e),color:e.itemColor,fontSize:e.fontSize,[r]:{fontSize:e.iconFontSize},ol:{display:"flex",flexWrap:"wrap",margin:0,padding:0,listStyle:"none"},[`${t}-item a`]:{color:e.linkColor,transition:`color ${e.motionDurationMid}`,padding:`0 ${F(e.paddingXXS)}`,borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",marginInline:n(e.marginXXS).mul(-1).equal(),"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover},...be(e)},[`${t}-item:last-child`]:{color:e.lastItemColor},[`${t}-separator`]:{marginInline:e.separatorMargin,color:e.separatorColor},[`${t}-link`]:{[`
          > ${r} + span,
          > ${r} + a
        `]:{marginInlineStart:e.marginXXS}},[`${t}-overlay-link`]:{borderRadius:e.borderRadiusSM,height:e.fontHeight,display:"inline-block",padding:`0 ${F(e.paddingXXS)}`,marginInline:n(e.marginXXS).mul(-1).equal(),[`> ${r}`]:{marginInlineStart:e.marginXXS,fontSize:e.fontSizeIcon},"&:hover":{color:e.linkHoverColor,backgroundColor:e.colorBgTextHover,a:{color:e.linkHoverColor}},a:{"&:hover":{backgroundColor:"transparent"}}},[`&${e.componentCls}-rtl`]:{direction:"rtl"}}}},$e=e=>({itemColor:e.colorTextDescription,lastItemColor:e.colorText,iconFontSize:e.fontSize,linkColor:e.colorTextDescription,linkHoverColor:e.colorText,separatorColor:e.colorTextDescription,separatorMargin:e.marginXS}),Me=Se("Breadcrumb",e=>{const t=Ne(e,{});return Ee(t)},$e);function De(e){const{breadcrumbName:t,children:r,...n}=e,a={title:t,...n};return r&&(a.menu={items:r.map(({breadcrumbName:s,...i})=>({...i,title:s}))}),a}function je(e,t){return o.useMemo(()=>e||(t?t.map(De):null),[e,t])}const Ae=(e,t)=>{if(t===void 0)return t;let r=(t||"").replace(/^\//,"");return Object.keys(e).forEach(n=>{r=r.replace(`:${n}`,e[n])}),r},He=e=>{const{prefixCls:t,separator:r,style:n,className:a,rootClassName:s,routes:i,items:l,children:d,itemRender:c,params:p={},classNames:S,styles:f,dropdownIcon:y,...N}=e,{getPrefixCls:b,direction:I,className:T,style:w,classNames:E,styles:B,separator:$,dropdownIcon:M}=Ce("breadcrumb"),u=r??$??"/",ee=y??M??o.createElement(he,null);let D;const x=b("breadcrumb",t),[te,re]=Me(x),_=je(l,i),ne=o.useMemo(()=>({...e,separator:u}),[e,u]),[j,A]=Be([E,S],[B,f],{props:ne}),ae=we(x,c);if(_&&_.length>0){const h=[],C=l||i;D=_.map((g,R)=>{const{path:le,key:ce,type:de,menu:q,onClick:me,className:pe,style:ue,separator:ge,dropdownProps:fe}=g,H=Ae(p,le);H!==void 0&&h.push(H);const U=ce??R;if(de==="separator")return o.createElement(P,{key:U},ge);const L={},ye=R===_.length-1;q&&(L.menu=q);let{href:z}=g;return h.length&&H!==void 0&&(z=`#/${h.join("/")}`),o.createElement(Q,{key:U,...L,...G(g,{data:!0,aria:!0}),className:pe,style:ue,dropdownProps:fe,dropdownIcon:ee,href:z,separator:ye?"":u,onClick:me,prefixCls:x},ae(g,p,C,h,z))})}else if(d){const h=O(d).length;D=O(d).map((C,g)=>{if(!C)return C;const R=g===h-1;return ve(C,{separator:R?"":u,key:g})})}const oe=v(x,T,{[`${x}-rtl`]:I==="rtl"},a,s,j.root,te,re),se={...A.root,...w,...n},ie=o.useMemo(()=>({classNames:j,styles:A}),[j,A]);return o.createElement(X.Provider,{value:ie},o.createElement("nav",{className:oe,style:se,...N},o.createElement("ol",null,D)))},Z=He;Z.Item=Y;Z.Separator=P;const{Title:ze,Text:V}=Pe,{useToken:ke}=Re,Xe=({title:e,subtitle:t,description:r,actions:n,breadcrumb:a,responsive:s=!0,compact:i=!1,className:l,style:d})=>{const{token:c}=ke(),p=["cl-page-header",s&&"cl-page-header--responsive",i&&"cl-page-header--compact",l].filter(Boolean).join(" "),S={marginBottom:i?c.marginMD:c.marginLG,paddingBottom:i?c.paddingSM:c.padding,borderBottom:`1px solid ${c.colorBorderSecondary}`,...d};return m.jsxs("div",{className:p,style:S,children:[a&&m.jsx("div",{className:"cl-page-header__breadcrumb",children:a}),m.jsxs("div",{className:"cl-page-header__content",children:[m.jsxs("div",{className:"cl-page-header__text",children:[e&&m.jsx(ze,{className:"cl-page-header__title",level:2,children:e}),t&&m.jsx(V,{className:"cl-page-header__subtitle",type:"secondary",children:t}),r&&m.jsx(V,{className:"cl-page-header__description",type:"secondary",children:r})]}),n&&n.length>0&&m.jsx(Ie,{className:"cl-page-header__actions",wrap:!0,children:n.map((f,y)=>m.jsx(W.Fragment,{children:f},y))})]})]})};Xe.__docgenInfo={description:`PageHeader - A responsive page header component for consistent page layouts.

Provides a standardized header with title, subtitle, description, breadcrumb
navigation, and action buttons. Automatically adapts to mobile viewports.

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop (>1024px) | Horizontal layout, title left, actions right |
| Tablet (768-1024px) | Same as desktop, slightly reduced spacing |
| Mobile (<768px) | Stacked layout, full-width actions |

## CSS Classes

- \`.cl-page-header\` - Root element
- \`.cl-page-header--responsive\` - Applied when responsive={true}
- \`.cl-page-header--compact\` - Applied when compact={true}
- \`.cl-page-header__breadcrumb\` - Breadcrumb container
- \`.cl-page-header__content\` - Main content wrapper (flexbox)
- \`.cl-page-header__text\` - Title/subtitle/description container
- \`.cl-page-header__title\` - Title element
- \`.cl-page-header__subtitle\` - Subtitle element
- \`.cl-page-header__description\` - Description element
- \`.cl-page-header__actions\` - Actions container

@see {@link PageHeaderProps} for prop documentation

@example Basic usage
\`\`\`tsx
<PageHeader
  title="Dashboard"
  subtitle="Welcome back"
/>
\`\`\`

@example Full featured
\`\`\`tsx
<PageHeader
  title="User Management"
  subtitle="Manage team members"
  description="Add, edit, and remove users from your organization."
  breadcrumb={<Breadcrumb items={[...]} />}
  actions={[
    <Button key="add" type="primary">Add User</Button>,
    <Button key="export">Export</Button>
  ]}
  responsive
/>
\`\`\``,methods:[],displayName:"PageHeader",props:{title:{required:!1,tsType:{name:"ReactNode"},description:`Main page title displayed prominently at the top.
Renders as an h2 heading. Supports string or ReactNode for custom formatting.

@example
title="Dashboard"
title={<span>Dashboard <Badge count={5} /></span>}`},subtitle:{required:!1,tsType:{name:"ReactNode"},description:`Secondary text displayed below the title.
Use for brief context like "Manage your settings" or "Welcome back, John".
Rendered in a lighter color than the title.

@example
subtitle="Manage your account settings"`},description:{required:!1,tsType:{name:"ReactNode"},description:`Longer descriptive text providing additional context or instructions.
Displayed below the subtitle in smaller, secondary text.
Keep concise - for longer content, use the page body instead.

@example
description="Configure notifications, privacy settings, and account preferences."`},actions:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:`Array of action elements (typically buttons) displayed on the right side.
On mobile with \`responsive={true}\`, actions stack vertically and become full-width.

Best practices:
- Primary action first, secondary actions after
- Limit to 3-4 actions maximum
- Use icons with text for clarity

@example
actions={[
  <Button key="save" type="primary">Save Changes</Button>,
  <Button key="cancel">Cancel</Button>
]}`},breadcrumb:{required:!1,tsType:{name:"ReactNode"},description:`Breadcrumb navigation component displayed above the title.
Pass a Breadcrumb component instance for hierarchical navigation.

@example
breadcrumb={
  <Breadcrumb items={[
    { title: 'Home', href: '/' },
    { title: 'Current Page' }
  ]} />
}`},responsive:{required:!1,tsType:{name:"boolean"},description:`Enable responsive layout behavior.
When true (default), the component automatically adjusts for mobile:
- Title font size reduces
- Actions stack vertically and become full-width
- Spacing decreases

Set to false if you need consistent desktop layout regardless of viewport.

@default true`,defaultValue:{value:"true",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:`Enable compact mode with reduced spacing.
Use when placing PageHeader directly above a DataTable or other dense content.
Reduces bottom margin and padding for tighter integration.

@default false`,defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:`Additional CSS class name(s) to apply to the root element.
Use for custom styling or layout adjustments.

@example
className="my-custom-header"`},style:{required:!1,tsType:{name:"CSSProperties"},description:`Inline styles to apply to the root element.
Prefer className for styling; use style for dynamic values only.

@example
style={{ marginBottom: 32 }}`}}};export{Z as B,Xe as P};
