import{j as o}from"./index-DW36zwiR.js";import{R as e}from"./Radio-DaQlDmXq.js";import{S as G}from"./index-Er0U-C2d.js";import{F as p}from"./Form-DOC0qCcV.js";import"./index-3dRrDZpt.js";import"./index-CK2X06xH.js";import"./index-uaP_ALsF.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./index-D_r6Hzab.js";import"./pickAttrs-BoNuQqbq.js";import"./statusUtils-DRtxZvD-.js";import"./ContextIsolator-DDVSnbXG.js";import"./useForm-DHn9R1Hs.js";import"./useBubbleLock-BswOdbvZ.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./index-BHaqqwJS.js";import"./CSSMotionList-DgmrF8Py.js";import"./collapse-BbEVqHco.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./useLocale-DSvjYROO.js";import"./ExclamationCircleFilled-UApWKGXd.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./LoadingOutlined-BTXlvHVG.js";const Y={title:"Input/Radio",component:e,parameters:{layout:"padded",docs:{description:{component:`
A radio button component for selecting a single option from a group.

## Features
- **Single Selection**: Only one option can be selected at a time
- **Radio Group**: Use Radio.Group to group related options
- **Radio Button**: Use Radio.Button for button-style radio options
- **Form Integration**: Works seamlessly with Form components

## Usage
Use Radio for single-choice selections. Wrap multiple Radio components in Radio.Group for grouped options.
        `}}},tags:["autodocs"],argTypes:{checked:{description:"Whether the radio is checked",control:"boolean"},disabled:{description:"Whether the radio is disabled",control:"boolean"}}},i={args:{children:"Radio Option"}},t={render:()=>o.jsxs(e.Group,{defaultValue:"option1",children:[o.jsx(e,{value:"option1",children:"Option 1"}),o.jsx(e,{value:"option2",children:"Option 2"}),o.jsx(e,{value:"option3",children:"Option 3"})]})},r={render:()=>o.jsxs(e.Group,{defaultValue:"option1",buttonStyle:"solid",children:[o.jsx(e.Button,{value:"option1",children:"Option 1"}),o.jsx(e.Button,{value:"option2",children:"Option 2"}),o.jsx(e.Button,{value:"option3",children:"Option 3"})]})},n={render:()=>o.jsxs(G,{direction:"vertical",children:[o.jsx(e,{disabled:!0,children:"Disabled Radio"}),o.jsxs(e.Group,{defaultValue:"option1",children:[o.jsx(e,{value:"option1",children:"Option 1"}),o.jsx(e,{value:"option2",disabled:!0,children:"Option 2 (Disabled)"}),o.jsx(e,{value:"option3",children:"Option 3"})]})]})},a={render:()=>o.jsx(p,{layout:"vertical",children:o.jsx(p.Item,{label:"Select Option",name:"radio",rules:[{required:!0}],children:o.jsxs(e.Group,{children:[o.jsx(e,{value:"option1",children:"Option 1"}),o.jsx(e,{value:"option2",children:"Option 2"}),o.jsx(e,{value:"option3",children:"Option 3"})]})})})};var d,s,l;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'Radio Option'
  }
}`,...(l=(s=i.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Radio.Group defaultValue="option1">
      <Radio value="option1">Option 1</Radio>
      <Radio value="option2">Option 2</Radio>
      <Radio value="option3">Option 3</Radio>
    </Radio.Group>
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var R,h,O;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <Radio.Group defaultValue="option1" buttonStyle="solid">
      <Radio.Button value="option1">Option 1</Radio.Button>
      <Radio.Button value="option2">Option 2</Radio.Button>
      <Radio.Button value="option3">Option 3</Radio.Button>
    </Radio.Group>
}`,...(O=(h=r.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var v,x,j;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Space direction="vertical">
      <Radio disabled>Disabled Radio</Radio>
      <Radio.Group defaultValue="option1">
        <Radio value="option1">Option 1</Radio>
        <Radio value="option2" disabled>Option 2 (Disabled)</Radio>
        <Radio value="option3">Option 3</Radio>
      </Radio.Group>
    </Space>
}`,...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var b,f,g;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Form layout="vertical">
      <Form.Item label="Select Option" name="radio" rules={[{
      required: true
    }]}>
        <Radio.Group>
          <Radio value="option1">Option 1</Radio>
          <Radio value="option2">Option 2</Radio>
          <Radio value="option3">Option 3</Radio>
        </Radio.Group>
      </Form.Item>
    </Form>
}`,...(g=(f=a.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const Z=["Default","RadioGroup","RadioButtons","Disabled","InForm"];export{i as Default,n as Disabled,a as InForm,r as RadioButtons,t as RadioGroup,Z as __namedExportsOrder,Y as default};
