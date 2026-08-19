import{j as e}from"./index-DW36zwiR.js";import{R as a}from"./index-3dRrDZpt.js";import{C as o}from"./Checkbox-CcDcjG7W.js";import{S as R}from"./index-Er0U-C2d.js";import{F as s}from"./Form-DOC0qCcV.js";import"./index-CK2X06xH.js";import"./index-DgK-gI2K.js";import"./useBubbleLock-BswOdbvZ.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./ContextIsolator-DDVSnbXG.js";import"./index-BHaqqwJS.js";import"./CSSMotionList-DgmrF8Py.js";import"./collapse-BbEVqHco.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./useLocale-DSvjYROO.js";import"./ExclamationCircleFilled-UApWKGXd.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./LoadingOutlined-BTXlvHVG.js";const re={title:"Input/Checkbox",component:o,parameters:{layout:"padded",docs:{description:{component:`
A checkbox component for selecting multiple options.

## Features
- **Multiple Selection**: Can select multiple options
- **Checkbox Group**: Use Checkbox.Group to group related options
- **Indeterminate State**: Support for indeterminate state
- **Form Integration**: Works seamlessly with Form components

## Usage
Use Checkbox for multi-choice selections. Wrap multiple Checkbox components in Checkbox.Group for grouped options.
        `}}},tags:["autodocs"],argTypes:{checked:{description:"Whether the checkbox is checked",control:"boolean"},disabled:{description:"Whether the checkbox is disabled",control:"boolean"}}},t={args:{children:"Checkbox Option"}},r={render:()=>e.jsxs(o.Group,{defaultValue:["option1"],children:[e.jsx(o,{value:"option1",children:"Option 1"}),e.jsx(o,{value:"option2",children:"Option 2"}),e.jsx(o,{value:"option3",children:"Option 3"})]})},n={render:()=>e.jsxs(R,{direction:"vertical",children:[e.jsx(o,{disabled:!0,children:"Disabled Checkbox"}),e.jsxs(o.Group,{defaultValue:["option1"],children:[e.jsx(o,{value:"option1",children:"Option 1"}),e.jsx(o,{value:"option2",disabled:!0,children:"Option 2 (Disabled)"}),e.jsx(o,{value:"option3",children:"Option 3"})]})]})},c={render:()=>{const[S,I]=a.useState(!1),[G,F]=a.useState(!0),D=y=>{I(y.target.checked),F(!1)};return e.jsx(o,{checked:S,indeterminate:G,onChange:D,children:"Indeterminate Checkbox"})}},i={render:()=>e.jsx(s,{layout:"vertical",children:e.jsx(s.Item,{label:"Select Options",name:"checkbox",children:e.jsxs(o.Group,{children:[e.jsx(o,{value:"option1",children:"Option 1"}),e.jsx(o,{value:"option2",children:"Option 2"}),e.jsx(o,{value:"option3",children:"Option 3"})]})})})};var p,d,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Checkbox Option'
  }
}`,...(l=(d=t.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var m,h,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <Checkbox.Group defaultValue={['option1']}>
      <Checkbox value="option1">Option 1</Checkbox>
      <Checkbox value="option2">Option 2</Checkbox>
      <Checkbox value="option3">Option 3</Checkbox>
    </Checkbox.Group>
}`,...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,b,k;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <Space direction="vertical">
      <Checkbox disabled>Disabled Checkbox</Checkbox>
      <Checkbox.Group defaultValue={['option1']}>
        <Checkbox value="option1">Option 1</Checkbox>
        <Checkbox value="option2" disabled>Option 2 (Disabled)</Checkbox>
        <Checkbox value="option3">Option 3</Checkbox>
      </Checkbox.Group>
    </Space>
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var C,O,v;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = React.useState(false);
    const [indeterminate, setIndeterminate] = React.useState(true);
    const onChange = (e: any) => {
      setChecked(e.target.checked);
      setIndeterminate(false);
    };
    return <Checkbox checked={checked} indeterminate={indeterminate} onChange={onChange}>
        Indeterminate Checkbox
      </Checkbox>;
  }
}`,...(v=(O=c.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var f,g,j;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Form layout="vertical">
      <Form.Item label="Select Options" name="checkbox">
        <Checkbox.Group>
          <Checkbox value="option1">Option 1</Checkbox>
          <Checkbox value="option2">Option 2</Checkbox>
          <Checkbox value="option3">Option 3</Checkbox>
        </Checkbox.Group>
      </Form.Item>
    </Form>
}`,...(j=(g=i.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const ne=["Default","CheckboxGroup","Disabled","Indeterminate","InForm"];export{r as CheckboxGroup,t as Default,n as Disabled,i as InForm,c as Indeterminate,ne as __namedExportsOrder,re as default};
