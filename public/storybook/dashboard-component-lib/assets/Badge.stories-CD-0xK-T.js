import{j as r}from"./index-DW36zwiR.js";import{T as _}from"./index-L6wlpHhd.js";import{S as d}from"./index-Er0U-C2d.js";import"./index-3dRrDZpt.js";import"./index-CK2X06xH.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./ColorPresets-Bwdqqxj7.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./pickAttrs-BoNuQqbq.js";import"./colors-C1ds9sb8.js";import"./useClosable-Cb5SP0VC.js";import"./CloseOutlined--kFZyjTz.js";import"./extendsObject-78o_rR5W.js";import"./useLocale-DSvjYROO.js";const e=({clickable:U,className:G,...H})=>{const M=["cl-badge",U&&"cl-badge--clickable",G].filter(Boolean).join(" ");return r.jsx(_,{className:M,...H})};e.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{clickable:{required:!1,tsType:{name:"boolean"},description:"Whether the badge is clickable (affects touch target sizing on mobile)"}},composes:["TagProps"]};const $={title:"Data Display/Badge",component:e,parameters:{layout:"padded",docs:{description:{component:`
A badge component for displaying status indicators and labels.

## Features
- **Status Colors**: Predefined colors for different statuses
- **Custom Colors**: Support for custom color values
- **Flexible Content**: Can display text or other content
- **Priority Indicators**: Useful for priority levels (low, medium, high)

## Usage
Use Badge to display status, priority, or category information in a compact, visually distinct format.
        `}}},tags:["autodocs"],argTypes:{children:{description:"Content of the badge",control:"text"},color:{description:"Badge color",control:"select",options:["default","success","processing","error","warning",void 0]}}},o={args:{children:"Default"}},s={render:()=>r.jsxs(d,{children:[r.jsx(e,{color:"success",children:"active"}),r.jsx(e,{color:"error",children:"inactive"}),r.jsx(e,{color:"warning",children:"pending"})]})},a={render:()=>r.jsxs(d,{children:[r.jsx(e,{color:"default",children:"LOW"}),r.jsx(e,{color:"warning",children:"MEDIUM"}),r.jsx(e,{color:"error",children:"HIGH"})]})},c={render:()=>r.jsxs(d,{children:[r.jsx(e,{color:"#87d068",children:"Custom Green"}),r.jsx(e,{color:"#108ee9",children:"Custom Blue"}),r.jsx(e,{color:"#f50",children:"Custom Red"})]})},t={args:{children:"Processing",color:"processing"}},n={args:{children:"Error",color:"error"}},i={args:{children:"Success",color:"success"}};var l,p,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    children: 'Default'
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var g,u,h;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <Space>
      <Badge color="success">active</Badge>
      <Badge color="error">inactive</Badge>
      <Badge color="warning">pending</Badge>
    </Space>
}`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var B,f,S;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Space>
      <Badge color="default">LOW</Badge>
      <Badge color="warning">MEDIUM</Badge>
      <Badge color="error">HIGH</Badge>
    </Space>
}`,...(S=(f=a.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,j,C;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Space>
      <Badge color="#87d068">Custom Green</Badge>
      <Badge color="#108ee9">Custom Blue</Badge>
      <Badge color="#f50">Custom Red</Badge>
    </Space>
}`,...(C=(j=c.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var y,b,P;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Processing',
    color: 'processing'
  }
}`,...(P=(b=t.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var v,D,E;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    color: 'error'
  }
}`,...(E=(D=n.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var w,I,T;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    color: 'success'
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const rr=["Default","StatusBadges","PriorityBadges","CustomColors","Processing","Error","Success"];export{c as CustomColors,o as Default,n as Error,a as PriorityBadges,t as Processing,s as StatusBadges,i as Success,rr as __namedExportsOrder,$ as default};
