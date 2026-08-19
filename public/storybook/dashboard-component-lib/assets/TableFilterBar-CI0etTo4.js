import{j as p}from"./index-DW36zwiR.js";import{R as m}from"./index-3dRrDZpt.js";import{t as F}from"./index-DixlKTR5.js";import{c as h,C as P}from"./index-D_r6Hzab.js";import{g as G,m as D,f as E,o as I,i as f}from"./statusUtils-DRtxZvD-.js";import{i as y,S as g}from"./index-Er0U-C2d.js";const x=["wrap","nowrap","wrap-reverse"],S=["flex-start","flex-end","start","end","center","space-between","space-around","space-evenly","stretch","normal","left","right"],C=["center","start","end","flex-start","flex-end","self-start","self-end","baseline","normal","stretch"],v=(e,t)=>{const n=t.wrap===!0?"wrap":t.wrap;return{[`${e}-wrap-${n}`]:n&&x.includes(n)}},O=(e,t)=>{const n={};return C.forEach(a=>{n[`${e}-align-${a}`]=t.align===a}),n[`${e}-align-stretch`]=!t.align&&!!t.vertical,n},q=(e,t)=>{const n={};return S.forEach(a=>{n[`${e}-justify-${a}`]=t.justify===a}),n},V=(e,t)=>h({...v(e,t),...O(e,t),...q(e,t)}),z=e=>{const{componentCls:t}=e;return{[t]:{display:"flex",margin:0,padding:0,"&-vertical":{flexDirection:"column"},"&-rtl":{direction:"rtl"},"&:empty":{display:"none"}}}},L=e=>{const{componentCls:t}=e;return{[t]:{"&-gap-small":{gap:e.flexGapSM},"&-gap-middle":{gap:e.flexGap},"&-gap-large":{gap:e.flexGapLG}}}},W=e=>{const{componentCls:t}=e,n={};return x.forEach(a=>{n[`${t}-wrap-${a}`]={flexWrap:a}}),n},M=e=>{const{componentCls:t}=e,n={};return C.forEach(a=>{n[`${t}-align-${a}`]={alignItems:a}}),n},J=e=>{const{componentCls:t}=e,n={};return S.forEach(a=>{n[`${t}-justify-${a}`]={justifyContent:a}}),n},_=()=>({}),H=G("Flex",e=>{const{paddingXS:t,padding:n,paddingLG:a}=e,s=D(e,{flexGapSM:t,flexGap:n,flexGapLG:a});return[z(s),L(s),W(s),M(s),J(s)]},_,{resetStyle:!1}),U=m.forwardRef((e,t)=>{const{prefixCls:n,rootClassName:a,className:s,style:l,flex:d,gap:r,vertical:c,orientation:w,component:b="div",children:j,...N}=e,{flex:o,direction:T,getPrefixCls:$}=m.useContext(P),i=$("flex",n),[B,k]=H(i),[,A]=E(w,c??(o==null?void 0:o.vertical)),R=h(s,a,o==null?void 0:o.className,i,B,k,V(i,e),{[`${i}-rtl`]:T==="rtl",[`${i}-gap-${r}`]:y(r),[`${i}-vertical`]:A}),u={...o==null?void 0:o.style,...l};return f(d)&&(u.flex=d),f(r)&&!y(r)&&(u.gap=r),m.createElement(b,{ref:t,className:R,style:u,...I(N,["justify","wrap","align"])},j)}),{useToken:X}=F,Q=({search:e,filters:t,actions:n,className:a,style:s})=>{const{token:l}=X(),d=["cl-table-filter-bar",a].filter(Boolean).join(" ");return p.jsxs(U,{className:d,justify:"space-between",align:"center",wrap:"wrap",gap:"small",style:{padding:l.padding,marginBottom:l.marginMD,background:l.colorBgContainer,borderRadius:l.borderRadius,...s},children:[p.jsxs(g,{wrap:!0,size:"small",children:[e,t==null?void 0:t.map((r,c)=>p.jsx(m.Fragment,{children:r},c))]}),n&&n.length>0&&p.jsx(g,{size:"small",children:n.map((r,c)=>p.jsx(m.Fragment,{children:r},c))})]})};Q.__docgenInfo={description:`TableFilterBar - A consistent filter and action bar for use above DataTable.

Provides a simple, consistent layout for search, filters, and actions.
Uses Flex for layout with automatic wrapping on smaller screens.

## Layout Structure

\`\`\`
┌─────────────────────────────────────────────────────────┐
│ [Search] [Filter1] [Filter2] ...    [Action1] [Action2] │
└─────────────────────────────────────────────────────────┘
\`\`\`

On smaller screens, elements wrap naturally.

@example Basic usage
\`\`\`tsx
<TableFilterBar
  search={<Input.Search placeholder="Search..." />}
  filters={[
    <Select key="status" placeholder="Status" options={statusOptions} />,
  ]}
  actions={[
    <Button key="add" type="primary">Add New</Button>,
  ]}
/>
\`\`\`

@see {@link TableFilterBarProps} for prop documentation`,methods:[],displayName:"TableFilterBar",props:{search:{required:!1,tsType:{name:"ReactNode"},description:`Search input component.
Typically an Input.Search from Ant Design.
Displayed first on the left side.

@example
search={<Input.Search placeholder="Search users..." allowClear />}`},filters:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:`Array of filter components.
Typically Select, DatePicker, or other input components.

@example
filters={[
  <Select key="status" placeholder="Status" options={statusOptions} />,
  <Select key="role" placeholder="Role" options={roleOptions} />,
  <DatePicker.RangePicker key="date" />,
]}`},actions:{required:!1,tsType:{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"},description:`Array of action buttons/components.
Displayed on the right side of the bar.

@example
actions={[
  <Button key="add" type="primary" icon={<PlusOutlined />}>Add</Button>,
  <Button key="export" icon={<ExportOutlined />}>Export</Button>,
]}`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name(s) to apply to the root element."},style:{required:!1,tsType:{name:"CSSProperties"},description:"Inline styles to apply to the root element."}}};export{U as F,Q as T};
