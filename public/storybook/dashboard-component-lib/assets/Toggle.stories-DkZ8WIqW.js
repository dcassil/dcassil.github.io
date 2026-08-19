import{j as e}from"./index-DW36zwiR.js";import{r as G}from"./index-3dRrDZpt.js";import{S as g}from"./index-Er0U-C2d.js";import{T as H}from"./index-B_RqcMmP.js";import{S as Q}from"./index-B4qc7M0h.js";import{C as V}from"./index-CrSsfzOz.js";import"./index-CK2X06xH.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./useLocale-DSvjYROO.js";import"./index-BX-V-Lkp.js";import"./ContextIsolator-DDVSnbXG.js";import"./colors-C1ds9sb8.js";import"./KeyCode-C3ZfcqzQ.js";import"./TextArea-qr4UwjdY.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./useVariants-DLc3tDVL.js";import"./index-B5t-g__n.js";import"./CheckOutlined-DKS7EKkq.js";import"./LoadingOutlined-BTXlvHVG.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./Skeleton-K1i2PQht.js";import"./CloseOutlined--kFZyjTz.js";import"./EllipsisOutlined-DU8baF8F.js";import"./Overflow-K8xR2NA3.js";const{Text:k}=H,n=({leftLabel:r,rightLabel:t,checked:p,defaultChecked:h,onChange:u,disabled:b,size:f,className:J,...K})=>{const M={...K,...u!==void 0?{onChange:u}:{},...b!==void 0?{disabled:b}:{},...f!==void 0?{size:f}:{},...p!==void 0?{checked:p}:{},...h!==void 0?{defaultChecked:h}:{}},C=e.jsx(Q,{...M}),L=p??h??!1,S=["cl-toggle",J].filter(Boolean).join(" ");return r||t?e.jsxs(g,{className:S,children:[r&&e.jsx(k,{className:"cl-toggle__label cl-toggle__label--left",...L?{}:{type:"secondary"},children:r}),C,t&&e.jsx(k,{className:"cl-toggle__label cl-toggle__label--right",...L?{type:"secondary"}:{},children:t})]}):e.jsx("div",{className:S,children:C})};n.__docgenInfo={description:"",methods:[],displayName:"Toggle",props:{leftLabel:{required:!1,tsType:{name:"string"},description:"Label to display on the left side of the toggle"},rightLabel:{required:!1,tsType:{name:"string"},description:"Label to display on the right side of the toggle"}},composes:["SwitchProps"]};const{Paragraph:m}=H,ye={title:"Input/Toggle",component:n,parameters:{layout:"padded",docs:{description:{component:`
A toggle switch component with optional labels on both sides.

## Features
- **Labels**: Optional labels on left and right sides
- **Controlled/Uncontrolled**: Support both controlled and uncontrolled modes
- **Size Options**: Default and small sizes
- **Disabled State**: Can be disabled

## Usage
Use Toggle for binary choices, settings, or mode switching (e.g., "DashboardPro" vs "Custom").
        `}}},tags:["autodocs"],argTypes:{leftLabel:{description:"Label on the left side",control:"text"},rightLabel:{description:"Label on the right side",control:"text"},checked:{description:"Whether the toggle is checked (controlled)",control:"boolean"},disabled:{description:"Whether the toggle is disabled",control:"boolean"},size:{description:"Size of the toggle",control:"select",options:["default","small"]}}},a={args:{defaultChecked:!1}},s={args:{leftLabel:"DashboardPro",rightLabel:"Custom",defaultChecked:!1}},o={render:()=>{const[r,t]=G.useState(!1);return e.jsx(V,{children:e.jsxs(g,{direction:"vertical",size:"middle",children:[e.jsx(m,{children:"Score Type:"}),e.jsx(n,{leftLabel:"DashboardPro",rightLabel:"Custom",checked:r,onChange:t}),e.jsxs(m,{type:"secondary",children:["Current selection: ",r?"Custom":"DashboardPro"]})]})})}},l={args:{leftLabel:"Off",rightLabel:"On",size:"small",defaultChecked:!0}},c={args:{leftLabel:"Disabled",rightLabel:"Enabled",disabled:!0,defaultChecked:!1}},i={args:{leftLabel:"Disabled",rightLabel:"Enabled",disabled:!0,defaultChecked:!0}},d={render:()=>{const[r,t]=G.useState(!1);return e.jsxs(g,{direction:"vertical",children:[e.jsx(n,{leftLabel:"Option A",rightLabel:"Option B",checked:r,onChange:t}),e.jsxs(m,{children:["Checked: ",r?"true":"false"]})]})}};var x,y,D;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    defaultChecked: false
  }
}`,...(D=(y=a.parameters)==null?void 0:y.docs)==null?void 0:D.source}}};var j,P,T;s.parameters={...s.parameters,docs:{...(j=s.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    leftLabel: 'DashboardPro',
    rightLabel: 'Custom',
    defaultChecked: false
  }
}`,...(T=(P=s.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var _,v,O;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Card>
        <Space direction="vertical" size="middle">
          <Paragraph>Score Type:</Paragraph>
          <Toggle leftLabel="DashboardPro" rightLabel="Custom" checked={checked} onChange={setChecked} />
          <Paragraph type="secondary">
            Current selection: {checked ? 'Custom' : 'DashboardPro'}
          </Paragraph>
        </Space>
      </Card>;
  }
}`,...(O=(v=o.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var w,z,E;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Off',
    rightLabel: 'On',
    size: 'small',
    defaultChecked: true
  }
}`,...(E=(z=l.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var N,W,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Disabled',
    rightLabel: 'Enabled',
    disabled: true,
    defaultChecked: false
  }
}`,...(A=(W=c.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var B,U,q;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    leftLabel: 'Disabled',
    rightLabel: 'Enabled',
    disabled: true,
    defaultChecked: true
  }
}`,...(q=(U=i.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var I,F,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(false);
    return <Space direction="vertical">
        <Toggle leftLabel="Option A" rightLabel="Option B" checked={checked} onChange={setChecked} />
        <Paragraph>Checked: {checked ? 'true' : 'false'}</Paragraph>
      </Space>;
  }
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};const De=["Default","WithLabels","ScoreToggle","Small","Disabled","DisabledChecked","Controlled"];export{d as Controlled,a as Default,c as Disabled,i as DisabledChecked,o as ScoreToggle,l as Small,s as WithLabels,De as __namedExportsOrder,ye as default};
