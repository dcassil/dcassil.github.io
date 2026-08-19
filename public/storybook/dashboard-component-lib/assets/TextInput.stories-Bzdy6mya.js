import{j as e}from"./index-DW36zwiR.js";import{T as r}from"./TextInput-B1YRAoIV.js";import{S as z}from"./index-Er0U-C2d.js";import{F as t}from"./Form-DOC0qCcV.js";import"./index-3dRrDZpt.js";import"./index-CK2X06xH.js";import"./index-DvCoQ_F0.js";import"./index-D_r6Hzab.js";import"./ContextIsolator-DDVSnbXG.js";import"./statusUtils-DRtxZvD-.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./index-B5t-g__n.js";import"./Input-DkNz1ASO.js";import"./TextArea-qr4UwjdY.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./useVariants-DLc3tDVL.js";import"./pickAttrs-BoNuQqbq.js";import"./EyeOutlined-xI5IIAay.js";import"./SearchOutlined-CQ_E22YT.js";import"./Button-CD1C6wFN.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./LoadingOutlined-BTXlvHVG.js";import"./ColorPresets-Bwdqqxj7.js";import"./index-BHaqqwJS.js";import"./CSSMotionList-DgmrF8Py.js";import"./collapse-BbEVqHco.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./useLocale-DSvjYROO.js";import"./ExclamationCircleFilled-UApWKGXd.js";const le={title:"Input/TextInput",component:r,parameters:{layout:"padded",docs:{description:{component:`
A versatile text input component that supports multiple input types.

## Features
- **Text Input**: Standard single-line text input
- **Textarea**: Multi-line text input
- **Password**: Password input with visibility toggle
- **Search**: Search input with enter button

## Usage
Use TextInput for all text-based form inputs. Set the \`type\` prop to switch between different input modes.
        `}}},tags:["autodocs"],argTypes:{type:{description:"Input type",control:"select",options:["text","textarea","password","search"]},placeholder:{description:"Placeholder text",control:"text"}}},o={args:{type:"text",placeholder:"Enter text"}},a={args:{type:"textarea",placeholder:"Enter multiline text",rows:4}},s={args:{type:"password",placeholder:"Enter password",visibilityToggle:!0}},p={args:{type:"search",placeholder:"Search...",enterButton:!0,onSearch:v=>{console.log("Searching for:",v)}}},n={render:()=>e.jsxs(z,{direction:"vertical",style:{width:"100%"},children:[e.jsx(r,{size:"small",placeholder:"Small input"}),e.jsx(r,{size:"middle",placeholder:"Middle input"}),e.jsx(r,{size:"large",placeholder:"Large input"})]})},i={render:()=>e.jsxs(t,{layout:"vertical",children:[e.jsx(t.Item,{label:"Name",name:"name",children:e.jsx(r,{placeholder:"Enter your name"})}),e.jsx(t.Item,{label:"Description",name:"description",children:e.jsx(r,{type:"textarea",rows:4,placeholder:"Enter description"})}),e.jsx(t.Item,{label:"Password",name:"password",children:e.jsx(r,{type:"password",placeholder:"Enter password"})})]})};var l,c,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    type: 'text',
    placeholder: 'Enter text'
  }
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,u,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    type: 'textarea',
    placeholder: 'Enter multiline text',
    rows: 4
  }
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};var h,g,w;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Enter password',
    visibilityToggle: true
  }
}`,...(w=(g=s.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};var y,S,I;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    type: 'search',
    placeholder: 'Search...',
    enterButton: true,
    onSearch: value => {
      console.log('Searching for:', value);
    }
  }
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var T,E,j;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Space direction="vertical" style={{
    width: '100%'
  }}>
      <TextInput size="small" placeholder="Small input" />
      <TextInput size="middle" placeholder="Middle input" />
      <TextInput size="large" placeholder="Large input" />
    </Space>
}`,...(j=(E=n.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var F,b,f;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Form layout="vertical">
      <Form.Item label="Name" name="name">
        <TextInput placeholder="Enter your name" />
      </Form.Item>
      <Form.Item label="Description" name="description">
        <TextInput type="textarea" rows={4} placeholder="Enter description" />
      </Form.Item>
      <Form.Item label="Password" name="password">
        <TextInput type="password" placeholder="Enter password" />
      </Form.Item>
    </Form>
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const ce=["Text","Textarea","Password","Search","Sizes","InForm"];export{i as InForm,s as Password,p as Search,n as Sizes,o as Text,a as Textarea,ce as __namedExportsOrder,le as default};
