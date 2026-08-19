import{j as t}from"./index-DW36zwiR.js";import{T as Se,C}from"./index-CrSsfzOz.js";import{U as Le}from"./UserOutlined-D8waM_Uz.js";import{b as U,g as W}from"./index-3dRrDZpt.js";import{r as z}from"./AntdIcon-DQJJGqqe.js";import{S as Ve}from"./SettingOutlined-BRign0WW.js";import{B as Ue}from"./BellOutlined-Bhj63X2v.js";import{T as We}from"./index-B_RqcMmP.js";import{F as ze}from"./Table-SkDg8quY.js";import"./index-CK2X06xH.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./useVariants-DLc3tDVL.js";import"./ContextIsolator-DDVSnbXG.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./Skeleton-K1i2PQht.js";import"./CloseOutlined--kFZyjTz.js";import"./EllipsisOutlined-DU8baF8F.js";import"./KeyCode-C3ZfcqzQ.js";import"./Overflow-K8xR2NA3.js";import"./TextArea-qr4UwjdY.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./index-B5t-g__n.js";import"./useLocale-DSvjYROO.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./CheckOutlined-DKS7EKkq.js";import"./LoadingOutlined-BTXlvHVG.js";import"./pickAttrs-BoNuQqbq.js";import"./index-DN4JzdW2.js";import"./PurePanel-hUbDQSVi.js";import"./index-Dx-r7iEd.js";import"./move-COWD65OB.js";import"./useIcons-Y_qoH6rg.js";import"./DownOutlined-CJFB344f.js";import"./SearchOutlined-CQ_E22YT.js";import"./index-DgK-gI2K.js";import"./useBubbleLock-BswOdbvZ.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./index-CdcenAOp.js";import"./dropdown-_HmQ0U4N.js";import"./collapse-BbEVqHco.js";import"./Button-CD1C6wFN.js";import"./ColorPresets-Bwdqqxj7.js";import"./index-Er0U-C2d.js";import"./index-uaP_ALsF.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./extendsObject-78o_rR5W.js";import"./Input-DkNz1ASO.js";const Be=({responsive:i=!0,mobileMode:s="scroll",className:u,...c})=>{const d=["cl-tabs",i&&"cl-tabs--responsive",s==="stack"&&"cl-tabs--stack",u].filter(Boolean).join(" ");return t.jsx(Se,{className:d,...c})};Be.__docgenInfo={description:`Tabs - A responsive tabbed navigation component.

Wraps Ant Design's Tabs with responsive behavior. On mobile, tabs can
scroll horizontally, collapse to a dropdown, or stack vertically.

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Standard horizontal tabs |
| Tablet | Scrollable tabs if many items |
| Mobile | Based on mobileMode setting |

## Mobile Modes

- \`'scroll'\` - Horizontal scrollable tabs (default)
- \`'dropdown'\` - Replace tab bar with Select dropdown
- \`'stack'\` - Vertical stack of full-width buttons

## CSS Classes

- \`.cl-tabs\` - Root element
- \`.cl-tabs--responsive\` - Applied when responsive={true}
- \`.cl-tabs--stack\` - Applied when mobileMode='stack'

@example Basic usage
\`\`\`tsx
<Tabs
  items={[
    { key: 'tab1', label: 'Tab 1', children: <Content1 /> },
    { key: 'tab2', label: 'Tab 2', children: <Content2 /> },
  ]}
/>
\`\`\`

@example With stacked mobile mode
\`\`\`tsx
<Tabs
  items={items}
  mobileMode="stack"
/>
\`\`\`

@see {@link TabsProps} for prop documentation`,methods:[],displayName:"Tabs",props:{responsive:{required:!1,tsType:{name:"boolean"},description:`Enable responsive behavior.
When true, applies mobile-optimized styling based on \`mobileMode\`.

@default true`,defaultValue:{value:"true",computed:!1}},mobileMode:{required:!1,tsType:{name:"union",raw:"'scroll' | 'dropdown' | 'stack'",elements:[{name:"literal",value:"'scroll'"},{name:"literal",value:"'dropdown'"},{name:"literal",value:"'stack'"}]},description:"Display mode for mobile viewports (<768px).\n\n- `'scroll'` - Horizontal scrollable tabs with touch support\n- `'dropdown'` - Replace tab bar with Select dropdown\n- `'stack'` - Vertical stack of full-width tab buttons\n\n@default 'scroll'",defaultValue:{value:"'scroll'",computed:!1}}},composes:["AntTabsProps"]};var R={exports:{}},y={},A={},$;function $e(){if($)return A;$=1,Object.defineProperty(A,"__esModule",{value:!0});var i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"}}]},name:"file-text",theme:"outlined"};return A.default=i,A}var F;function Fe(){if(F)return y;F=1,Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var i=l(U()),s=c($e()),u=c(z());function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(d=function(r){return r?n:a})(e)}function l(e,a){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(a);if(n&&n.has(e))return n.get(e);var r={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var p=v?Object.getOwnPropertyDescriptor(e,o):null;p&&(p.get||p.set)?Object.defineProperty(r,o,p):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}const h=(e,a)=>i.createElement(u.default,f({},e,{ref:a,icon:s.default})),b=i.forwardRef(h);return y.default=b,y}var I;function Ie(){return I||(I=1,(function(i,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;const u=c(Fe());function c(l){return l&&l.__esModule?l:{default:l}}const d=u;s.default=d,i.exports=d})(R,R.exports)),R.exports}var Ke=Ie();const Ee=W(Ke);var q={exports:{}},g={},D={},K;function Ne(){if(K)return D;K=1,Object.defineProperty(D,"__esModule",{value:!0});var i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M888 792H200V168c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v688c0 4.4 3.6 8 8 8h752c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm-600-80h56c4.4 0 8-3.6 8-8V560c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v144c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V384c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v320c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V462c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v242c0 4.4 3.6 8 8 8zm152 0h56c4.4 0 8-3.6 8-8V304c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v400c0 4.4 3.6 8 8 8z"}}]},name:"bar-chart",theme:"outlined"};return D.default=i,D}var E;function He(){if(E)return g;E=1,Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var i=l(U()),s=c(Ne()),u=c(z());function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(d=function(r){return r?n:a})(e)}function l(e,a){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(a);if(n&&n.has(e))return n.get(e);var r={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var p=v?Object.getOwnPropertyDescriptor(e,o):null;p&&(p.get||p.set)?Object.defineProperty(r,o,p):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}const h=(e,a)=>i.createElement(u.default,f({},e,{ref:a,icon:s.default})),b=i.forwardRef(h);return g.default=b,g}var N;function Ge(){return N||(N=1,(function(i,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;const u=c(He());function c(l){return l&&l.__esModule?l:{default:l}}const d=u;s.default=d,i.exports=d})(q,q.exports)),q.exports}var Je=Ge();const Qe=W(Je);var L={exports:{}},x={},B={},H;function Xe(){if(H)return B;H=1,Object.defineProperty(B,"__esModule",{value:!0});var i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"upload",theme:"outlined"};return B.default=i,B}var G;function Ye(){if(G)return x;G=1,Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var i=l(U()),s=c(Xe()),u=c(z());function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(d=function(r){return r?n:a})(e)}function l(e,a){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(a);if(n&&n.has(e))return n.get(e);var r={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var p=v?Object.getOwnPropertyDescriptor(e,o):null;p&&(p.get||p.set)?Object.defineProperty(r,o,p):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}const h=(e,a)=>i.createElement(u.default,f({},e,{ref:a,icon:s.default})),b=i.forwardRef(h);return x.default=b,x}var J;function Ze(){return J||(J=1,(function(i,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;const u=c(Ye());function c(l){return l&&l.__esModule?l:{default:l}}const d=u;s.default=d,i.exports=d})(L,L.exports)),L.exports}var et=Ze();const tt=W(et);var S={exports:{}},O={},V={},Q;function nt(){if(Q)return V;Q=1,Object.defineProperty(V,"__esModule",{value:!0});var i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M574 665.4a8.03 8.03 0 00-11.3 0L446.5 781.6c-53.8 53.8-144.6 59.5-204 0-59.5-59.5-53.8-150.2 0-204l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3l-39.8-39.8a8.03 8.03 0 00-11.3 0L191.4 526.5c-84.6 84.6-84.6 221.5 0 306s221.5 84.6 306 0l116.2-116.2c3.1-3.1 3.1-8.2 0-11.3L574 665.4zm258.6-474c-84.6-84.6-221.5-84.6-306 0L410.3 307.6a8.03 8.03 0 000 11.3l39.7 39.7c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c53.8-53.8 144.6-59.5 204 0 59.5 59.5 53.8 150.2 0 204L665.3 562.6a8.03 8.03 0 000 11.3l39.8 39.8c3.1 3.1 8.2 3.1 11.3 0l116.2-116.2c84.5-84.6 84.5-221.5 0-306.1zM610.1 372.3a8.03 8.03 0 00-11.3 0L372.3 598.7a8.03 8.03 0 000 11.3l39.6 39.6c3.1 3.1 8.2 3.1 11.3 0l226.4-226.4c3.1-3.1 3.1-8.2 0-11.3l-39.5-39.6z"}}]},name:"link",theme:"outlined"};return V.default=i,V}var X;function rt(){if(X)return O;X=1,Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var i=l(U()),s=c(nt()),u=c(z());function c(e){return e&&e.__esModule?e:{default:e}}function d(e){if(typeof WeakMap!="function")return null;var a=new WeakMap,n=new WeakMap;return(d=function(r){return r?n:a})(e)}function l(e,a){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=d(a);if(n&&n.has(e))return n.get(e);var r={__proto__:null},v=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if(o!=="default"&&Object.prototype.hasOwnProperty.call(e,o)){var p=v?Object.getOwnPropertyDescriptor(e,o):null;p&&(p.get||p.set)?Object.defineProperty(r,o,p):r[o]=e[o]}return r.default=e,n&&n.set(e,r),r}function f(){return f=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f.apply(this,arguments)}const h=(e,a)=>i.createElement(u.default,f({},e,{ref:a,icon:s.default})),b=i.forwardRef(h);return O.default=b,O}var Y;function at(){return Y||(Y=1,(function(i,s){Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;const u=c(rt());function c(l){return l&&l.__esModule?l:{default:l}}const d=u;s.default=d,i.exports=d})(S,S.exports)),S.exports}var it=at();const lt=W(it),{Paragraph:m}=We,sn={title:"Navigation/Tabs",component:Be,parameters:{layout:"padded",docs:{description:{component:`
A tab navigation component for organizing content into multiple sections.
Supports responsive mobile modes for better touch interaction.

## Features
- **Multiple Tabs**: Organize content into separate panels
- **Icon Support**: Add icons to tab labels
- **Responsive Modes**: Scroll, dropdown, or stacked on mobile
- **Controlled/Uncontrolled**: Both modes supported
- **Tab Types**: Line (default) or card style

## Import
\`\`\`tsx
import { Tabs } from 'dashboard-component-lib';
\`\`\`
        `}}},tags:["autodocs"],argTypes:{items:{description:"Tab items configuration",control:!1,table:{type:{summary:"TabItemType[]"}}},defaultActiveKey:{description:"Default active tab key (uncontrolled)",control:"text",table:{type:{summary:"string"}}},activeKey:{description:"Currently active tab key (controlled)",control:"text",table:{type:{summary:"string"}}},responsive:{description:"Enable responsive mobile behavior",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},mobileMode:{description:"Display mode on mobile viewports",control:"select",options:["scroll","dropdown","stack"],table:{type:{summary:"'scroll' | 'dropdown' | 'stack'"},defaultValue:{summary:"'scroll'"}}},type:{description:"Tab style type",control:"select",options:["line","card","editable-card"],table:{type:{summary:"'line' | 'card' | 'editable-card'"},defaultValue:{summary:"'line'"}}},centered:{description:"Center the tab bar",control:"boolean",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}}},ot=[{key:"1",name:"Item 1",value:"Value 1"},{key:"2",name:"Item 2",value:"Value 2"},{key:"3",name:"Item 3",value:"Value 3"}],st=[{title:"Name",dataIndex:"name",key:"name"},{title:"Value",dataIndex:"value",key:"value"}],_={args:{items:[{key:"1",label:"All Bidders",children:t.jsxs("div",{style:{padding:"16px"},children:[t.jsx(m,{children:"This is the All Bidders tab content."}),t.jsx(ze,{dataSource:ot,columns:st,pagination:!1})]})},{key:"2",label:"Duplicates",children:t.jsx("div",{style:{padding:"16px"},children:t.jsx(m,{children:"This is the Duplicates tab content."})})},{key:"3",label:"Analytics",children:t.jsx("div",{style:{padding:"16px"},children:t.jsx(m,{children:"This is the Analytics tab content."})})}],defaultActiveKey:"1"}},w={args:{items:[{key:"1",label:t.jsxs("span",{children:[t.jsx(Le,{}),t.jsx("span",{style:{marginLeft:8},children:"All Bidders"})]}),children:t.jsx("div",{style:{padding:"16px"},children:t.jsx(m,{children:"Bidders tab with icon"})})},{key:"2",label:t.jsxs("span",{children:[t.jsx(Ee,{}),t.jsx("span",{style:{marginLeft:8},children:"Duplicates"})]}),children:t.jsx("div",{style:{padding:"16px"},children:t.jsx(m,{children:"Duplicates tab with icon"})})},{key:"3",label:t.jsxs("span",{children:[t.jsx(Qe,{}),t.jsx("span",{style:{marginLeft:8},children:"Analytics"})]}),children:t.jsx("div",{style:{padding:"16px"},children:t.jsx(m,{children:"Analytics tab with icon"})})}],defaultActiveKey:"1"}},k={args:{type:"card",items:[{key:"1",label:"Tab 1",children:t.jsx(C,{children:t.jsx(m,{children:"Card style tab content"})})},{key:"2",label:"Tab 2",children:t.jsx(C,{children:t.jsx(m,{children:"Another card style tab"})})},{key:"3",label:"Tab 3",children:t.jsx(C,{children:t.jsx(m,{children:"Third card style tab"})})}],defaultActiveKey:"1"}},j={args:{centered:!0,items:[{key:"1",label:"Centered Tab 1",children:t.jsx("div",{style:{padding:"16px"},children:"Centered tab content"})},{key:"2",label:"Centered Tab 2",children:t.jsx("div",{style:{padding:"16px"},children:"Another centered tab"})}],defaultActiveKey:"1"}},T={args:{items:[{key:"1",label:t.jsxs("span",{children:[t.jsx(tt,{}),t.jsx("span",{style:{marginLeft:8},children:"Uploads & Processing"})]}),children:t.jsx(C,{children:t.jsx(m,{children:"Upload and process data files here."})})},{key:"2",label:t.jsxs("span",{children:[t.jsx(lt,{}),t.jsx("span",{style:{marginLeft:8},children:"Conflict Resolution"})]}),children:t.jsx(C,{children:t.jsx(m,{children:"Resolve data conflicts here."})})}],defaultActiveKey:"1"}},M={args:{responsive:!0,mobileMode:"dropdown",items:[{key:"overview",label:"Overview",children:t.jsx("div",{style:{padding:"16px"},children:"Overview content"})},{key:"details",label:"Details",children:t.jsx("div",{style:{padding:"16px"},children:"Details content"})},{key:"settings",label:"Settings",children:t.jsx("div",{style:{padding:"16px"},children:"Settings content"})},{key:"notifications",label:"Notifications",children:t.jsx("div",{style:{padding:"16px"},children:"Notifications content"})}],defaultActiveKey:"overview"},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:'On mobile with `mobileMode="dropdown"`, tabs collapse into a Select dropdown for easier touch interaction.'}}}},P={args:{responsive:!0,mobileMode:"stack",items:[{key:"profile",label:t.jsxs("span",{children:[t.jsx(Le,{}),t.jsx("span",{style:{marginLeft:8},children:"Profile"})]}),children:t.jsx("div",{style:{padding:"16px"},children:"Profile settings content"})},{key:"settings",label:t.jsxs("span",{children:[t.jsx(Ve,{}),t.jsx("span",{style:{marginLeft:8},children:"Settings"})]}),children:t.jsx("div",{style:{padding:"16px"},children:"General settings content"})},{key:"notifications",label:t.jsxs("span",{children:[t.jsx(Ue,{}),t.jsx("span",{style:{marginLeft:8},children:"Notifications"})]}),children:t.jsx("div",{style:{padding:"16px"},children:"Notification preferences"})}],defaultActiveKey:"profile"},parameters:{viewport:{defaultViewport:"mobile1"},docs:{description:{story:'On mobile with `mobileMode="stack"`, tabs become full-width vertical buttons for easy tapping.'}}}};var Z,ee,te,ne,re;_.parameters={..._.parameters,docs:{...(Z=_.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: 'All Bidders',
      children: <div style={{
        padding: '16px'
      }}>
            <Paragraph>This is the All Bidders tab content.</Paragraph>
            <Table dataSource={sampleTableData} columns={sampleTableColumns} pagination={false} />
          </div>
    }, {
      key: '2',
      label: 'Duplicates',
      children: <div style={{
        padding: '16px'
      }}>
            <Paragraph>This is the Duplicates tab content.</Paragraph>
          </div>
    }, {
      key: '3',
      label: 'Analytics',
      children: <div style={{
        padding: '16px'
      }}>
            <Paragraph>This is the Analytics tab content.</Paragraph>
          </div>
    }],
    defaultActiveKey: '1'
  }
}`,...(te=(ee=_.parameters)==null?void 0:ee.docs)==null?void 0:te.source},description:{story:"Default tabs with text labels.",...(re=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:re.description}}};var ae,ie,le,oe,se;w.parameters={...w.parameters,docs:{...(ae=w.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: <span>
            <UserOutlined />
            <span style={{
          marginLeft: 8
        }}>All Bidders</span>
          </span>,
      children: <div style={{
        padding: '16px'
      }}>
            <Paragraph>Bidders tab with icon</Paragraph>
          </div>
    }, {
      key: '2',
      label: <span>
            <FileTextOutlined />
            <span style={{
          marginLeft: 8
        }}>Duplicates</span>
          </span>,
      children: <div style={{
        padding: '16px'
      }}>
            <Paragraph>Duplicates tab with icon</Paragraph>
          </div>
    }, {
      key: '3',
      label: <span>
            <BarChartOutlined />
            <span style={{
          marginLeft: 8
        }}>Analytics</span>
          </span>,
      children: <div style={{
        padding: '16px'
      }}>
            <Paragraph>Analytics tab with icon</Paragraph>
          </div>
    }],
    defaultActiveKey: '1'
  }
}`,...(le=(ie=w.parameters)==null?void 0:ie.docs)==null?void 0:le.source},description:{story:"Tabs with icons in labels.",...(se=(oe=w.parameters)==null?void 0:oe.docs)==null?void 0:se.description}}};var de,ce,pe,ue,fe;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    type: 'card',
    items: [{
      key: '1',
      label: 'Tab 1',
      children: <Card>
            <Paragraph>Card style tab content</Paragraph>
          </Card>
    }, {
      key: '2',
      label: 'Tab 2',
      children: <Card>
            <Paragraph>Another card style tab</Paragraph>
          </Card>
    }, {
      key: '3',
      label: 'Tab 3',
      children: <Card>
            <Paragraph>Third card style tab</Paragraph>
          </Card>
    }],
    defaultActiveKey: '1'
  }
}`,...(pe=(ce=k.parameters)==null?void 0:ce.docs)==null?void 0:pe.source},description:{story:"Card-style tabs.",...(fe=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:fe.description}}};var me,he,be,ve,ye;j.parameters={...j.parameters,docs:{...(me=j.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    centered: true,
    items: [{
      key: '1',
      label: 'Centered Tab 1',
      children: <div style={{
        padding: '16px'
      }}>Centered tab content</div>
    }, {
      key: '2',
      label: 'Centered Tab 2',
      children: <div style={{
        padding: '16px'
      }}>Another centered tab</div>
    }],
    defaultActiveKey: '1'
  }
}`,...(be=(he=j.parameters)==null?void 0:he.docs)==null?void 0:be.source},description:{story:"Centered tab bar.",...(ye=(ve=j.parameters)==null?void 0:ve.docs)==null?void 0:ye.description}}};var ge,xe,Oe,_e,we;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    items: [{
      key: '1',
      label: <span>
            <UploadOutlined />
            <span style={{
          marginLeft: 8
        }}>Uploads & Processing</span>
          </span>,
      children: <Card>
            <Paragraph>Upload and process data files here.</Paragraph>
          </Card>
    }, {
      key: '2',
      label: <span>
            <LinkOutlined />
            <span style={{
          marginLeft: 8
        }}>Conflict Resolution</span>
          </span>,
      children: <Card>
            <Paragraph>Resolve data conflicts here.</Paragraph>
          </Card>
    }],
    defaultActiveKey: '1'
  }
}`,...(Oe=(xe=T.parameters)==null?void 0:xe.docs)==null?void 0:Oe.source},description:{story:"Data processing workflow tabs.",...(we=(_e=T.parameters)==null?void 0:_e.docs)==null?void 0:we.description}}};var ke,je,Te,Me,Pe;M.parameters={...M.parameters,docs:{...(ke=M.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    responsive: true,
    mobileMode: 'dropdown',
    items: [{
      key: 'overview',
      label: 'Overview',
      children: <div style={{
        padding: '16px'
      }}>Overview content</div>
    }, {
      key: 'details',
      label: 'Details',
      children: <div style={{
        padding: '16px'
      }}>Details content</div>
    }, {
      key: 'settings',
      label: 'Settings',
      children: <div style={{
        padding: '16px'
      }}>Settings content</div>
    }, {
      key: 'notifications',
      label: 'Notifications',
      children: <div style={{
        padding: '16px'
      }}>Notifications content</div>
    }],
    defaultActiveKey: 'overview'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'On mobile with \`mobileMode="dropdown"\`, tabs collapse into a Select dropdown for easier touch interaction.'
      }
    }
  }
}`,...(Te=(je=M.parameters)==null?void 0:je.docs)==null?void 0:Te.source},description:{story:`Mobile preview with dropdown mode.
Tabs collapse into a Select dropdown on mobile.`,...(Pe=(Me=M.parameters)==null?void 0:Me.docs)==null?void 0:Pe.description}}};var Ce,Re,Ae,qe,De;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    responsive: true,
    mobileMode: 'stack',
    items: [{
      key: 'profile',
      label: <span>
            <UserOutlined />
            <span style={{
          marginLeft: 8
        }}>Profile</span>
          </span>,
      children: <div style={{
        padding: '16px'
      }}>Profile settings content</div>
    }, {
      key: 'settings',
      label: <span>
            <SettingOutlined />
            <span style={{
          marginLeft: 8
        }}>Settings</span>
          </span>,
      children: <div style={{
        padding: '16px'
      }}>General settings content</div>
    }, {
      key: 'notifications',
      label: <span>
            <BellOutlined />
            <span style={{
          marginLeft: 8
        }}>Notifications</span>
          </span>,
      children: <div style={{
        padding: '16px'
      }}>Notification preferences</div>
    }],
    defaultActiveKey: 'profile'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'On mobile with \`mobileMode="stack"\`, tabs become full-width vertical buttons for easy tapping.'
      }
    }
  }
}`,...(Ae=(Re=P.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source},description:{story:`Mobile preview with stacked mode.
Tabs become full-width vertical buttons.`,...(De=(qe=P.parameters)==null?void 0:qe.docs)==null?void 0:De.description}}};const dn=["Default","WithIcons","CardTabs","Centered","DataProcessingTabs","MobileDropdown","MobileStacked"];export{k as CardTabs,j as Centered,T as DataProcessingTabs,_ as Default,M as MobileDropdown,P as MobileStacked,w as WithIcons,dn as __namedExportsOrder,sn as default};
