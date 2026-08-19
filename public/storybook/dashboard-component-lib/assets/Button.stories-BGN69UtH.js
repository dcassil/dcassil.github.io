import{j as t}from"./index-DW36zwiR.js";import{B as r}from"./Button-BqbH_mOF.js";import{D as Q}from"./DownloadOutlined-gQQ596fX.js";import{P as V}from"./PlusOutlined-DSbBPqry.js";import{b as X,g as Y}from"./index-3dRrDZpt.js";import{r as Z}from"./AntdIcon-DQJJGqqe.js";import{S as p}from"./index-Er0U-C2d.js";import"./index-CK2X06xH.js";import"./Button-CD1C6wFN.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./LoadingOutlined-BTXlvHVG.js";import"./ColorPresets-Bwdqqxj7.js";var y={exports:{}},c={},h={},_;function ee(){if(_)return h;_=1,Object.defineProperty(h,"__esModule",{value:!0});var i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};return h.default=i,h}var b;function te(){if(b)return c;b=1,Object.defineProperty(c,"__esModule",{value:!0}),c.default=void 0;var i=s(X()),l=m(ee()),j=m(Z());function m(e){return e&&e.__esModule?e:{default:e}}function u(e){if(typeof WeakMap!="function")return null;var o=new WeakMap,n=new WeakMap;return(u=function(a){return a?n:o})(e)}function s(e,o){if(e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var n=u(o);if(n&&n.has(e))return n.get(e);var a={__proto__:null},N=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var d in e)if(d!=="default"&&Object.prototype.hasOwnProperty.call(e,d)){var f=N?Object.getOwnPropertyDescriptor(e,d):null;f&&(f.get||f.set)?Object.defineProperty(a,d,f):a[d]=e[d]}return a.default=e,n&&n.set(e,a),a}function S(){return S=Object.assign?Object.assign.bind():function(e){for(var o=1;o<arguments.length;o++){var n=arguments[o];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},S.apply(this,arguments)}const J=(e,o)=>i.createElement(j.default,S({},e,{ref:o,icon:l.default})),K=i.forwardRef(J);return c.default=K,c}var P;function re(){return P||(P=1,(function(i,l){Object.defineProperty(l,"__esModule",{value:!0}),l.default=void 0;const j=m(te());function m(s){return s&&s.__esModule?s:{default:s}}const u=j;l.default=u,i.exports=u})(y,y.exports)),y.exports}var ne=re();const ae=Y(ne),Be={title:"Input/Button",component:r,parameters:{layout:"padded",docs:{description:{component:`
A button component for triggering actions.

## Features
- **Multiple Types**: Primary, default, dashed, text, and link styles
- **Sizes**: Small, middle (default), and large sizes
- **Icons**: Support for icons
- **Loading State**: Loading indicator
- **Disabled State**: Disabled state

## Usage
Use Button for user actions. Set the \`type\` prop to change the button style.
        `}}},tags:["autodocs"],argTypes:{type:{description:"Button type",control:"select",options:["default","primary","dashed","text","link"]},size:{description:"Button size",control:"select",options:["small","middle","large"]}}},g={args:{children:"Button"}},D={render:()=>t.jsxs(p,{children:[t.jsx(r,{type:"primary",children:"Primary"}),t.jsx(r,{type:"default",children:"Default"}),t.jsx(r,{type:"dashed",children:"Dashed"}),t.jsx(r,{type:"text",children:"Text"}),t.jsx(r,{type:"link",children:"Link"})]})},x={render:()=>t.jsxs(p,{children:[t.jsx(r,{size:"small",children:"Small"}),t.jsx(r,{size:"middle",children:"Middle"}),t.jsx(r,{size:"large",children:"Large"})]})},B={render:()=>t.jsxs(p,{children:[t.jsx(r,{type:"primary",icon:t.jsx(V,{}),children:"Add"}),t.jsx(r,{icon:t.jsx(Q,{}),children:"Download"}),t.jsx(r,{danger:!0,icon:t.jsx(ae,{}),children:"Delete"})]})},O={render:()=>t.jsxs(p,{children:[t.jsx(r,{type:"primary",loading:!0,children:"Loading"}),t.jsx(r,{type:"primary",loading:!0,children:"Click me"})]})},v={render:()=>t.jsxs(p,{children:[t.jsx(r,{disabled:!0,children:"Disabled"}),t.jsx(r,{type:"primary",disabled:!0,children:"Disabled Primary"})]})};var z,M,q;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    children: 'Button'
  }
}`,...(q=(M=g.parameters)==null?void 0:M.docs)==null?void 0:q.source}}};var w,R,L;D.parameters={...D.parameters,docs:{...(w=D.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <Space>
      <Button type="primary">Primary</Button>
      <Button type="default">Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="text">Text</Button>
      <Button type="link">Link</Button>
    </Space>
}`,...(L=(R=D.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var k,I,W;x.parameters={...x.parameters,docs:{...(k=x.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Space>
      <Button size="small">Small</Button>
      <Button size="middle">Middle</Button>
      <Button size="large">Large</Button>
    </Space>
}`,...(W=(I=x.parameters)==null?void 0:I.docs)==null?void 0:W.source}}};var T,A,E;B.parameters={...B.parameters,docs:{...(T=B.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Space>
      <Button type="primary" icon={<PlusOutlined />}>
        Add
      </Button>
      <Button icon={<DownloadOutlined />}>
        Download
      </Button>
      <Button danger icon={<DeleteOutlined />}>
        Delete
      </Button>
    </Space>
}`,...(E=(A=B.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var $,C,H;O.parameters={...O.parameters,docs:{...($=O.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => <Space>
      <Button type="primary" loading>
        Loading
      </Button>
      <Button type="primary" loading>
        Click me
      </Button>
    </Space>
}`,...(H=(C=O.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var F,U,G;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Space>
      <Button disabled>Disabled</Button>
      <Button type="primary" disabled>
        Disabled Primary
      </Button>
    </Space>
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};const Oe=["Default","Types","Sizes","WithIcons","Loading","Disabled"];export{g as Default,v as Disabled,O as Loading,x as Sizes,D as Types,B as WithIcons,Oe as __namedExportsOrder,Be as default};
