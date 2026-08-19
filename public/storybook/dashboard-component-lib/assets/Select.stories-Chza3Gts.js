import{j as e}from"./index-DW36zwiR.js";import{S as t}from"./Select-D_4xXtMW.js";import{F as a}from"./Form-DOC0qCcV.js";import"./index-3dRrDZpt.js";import"./index-CK2X06xH.js";import"./index-DN4JzdW2.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./index-D_r6Hzab.js";import"./ContextIsolator-DDVSnbXG.js";import"./statusUtils-DRtxZvD-.js";import"./pickAttrs-BoNuQqbq.js";import"./Overflow-K8xR2NA3.js";import"./KeyCode-C3ZfcqzQ.js";import"./PurePanel-hUbDQSVi.js";import"./index-Dx-r7iEd.js";import"./useLocale-DSvjYROO.js";import"./useVariants-DLc3tDVL.js";import"./move-COWD65OB.js";import"./useIcons-Y_qoH6rg.js";import"./CheckOutlined-DKS7EKkq.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./CloseOutlined--kFZyjTz.js";import"./DownOutlined-CJFB344f.js";import"./LoadingOutlined-BTXlvHVG.js";import"./SearchOutlined-CQ_E22YT.js";import"./index-BHaqqwJS.js";import"./CSSMotionList-DgmrF8Py.js";import"./collapse-BbEVqHco.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./ExclamationCircleFilled-UApWKGXd.js";const pe={title:"Input/Select",component:t,parameters:{layout:"padded",docs:{description:{component:`
A select dropdown component for choosing from a list of options.

## Features
- **Single Select**: Choose one option from a list
- **Multiple Select**: Choose multiple options
- **Searchable**: Search through options
- **Grouped Options**: Organize options in groups
- **Customizable**: Support for custom option rendering

## Usage
Use Select for dropdown selections in forms. Use Select.Option for individual options and Select.OptGroup for grouped options.
        `}}},tags:["autodocs"],argTypes:{mode:{description:"Select mode",control:"select",options:[void 0,"multiple","tags"]},placeholder:{description:"Placeholder text",control:"text"}}},o={args:{placeholder:"Select an option",style:{width:200},children:[e.jsx(t.Option,{value:"option1",children:"Option 1"},"1"),e.jsx(t.Option,{value:"option2",children:"Option 2"},"2"),e.jsx(t.Option,{value:"option3",children:"Option 3"},"3")]}},i={args:{mode:"multiple",placeholder:"Select multiple options",style:{width:300},children:[e.jsx(t.Option,{value:"option1",children:"Option 1"},"1"),e.jsx(t.Option,{value:"option2",children:"Option 2"},"2"),e.jsx(t.Option,{value:"option3",children:"Option 3"},"3"),e.jsx(t.Option,{value:"option4",children:"Option 4"},"4")]}},r={args:{placeholder:"Select an option",style:{width:200},children:[e.jsxs(t.OptGroup,{label:"Group 1",children:[e.jsx(t.Option,{value:"option1",children:"Option 1"}),e.jsx(t.Option,{value:"option2",children:"Option 2"})]},"group1"),e.jsxs(t.OptGroup,{label:"Group 2",children:[e.jsx(t.Option,{value:"option3",children:"Option 3"}),e.jsx(t.Option,{value:"option4",children:"Option 4"})]},"group2")]}},p={args:{showSearch:!0,placeholder:"Search and select",style:{width:200},filterOption:(k,n)=>String((n==null?void 0:n.label)??"").toLowerCase().includes(k.toLowerCase()),children:[e.jsx(t.Option,{value:"apple",children:"Apple"},"1"),e.jsx(t.Option,{value:"banana",children:"Banana"},"2"),e.jsx(t.Option,{value:"cherry",children:"Cherry"},"3"),e.jsx(t.Option,{value:"date",children:"Date"},"4")]}},l={render:()=>e.jsx(a,{layout:"vertical",children:e.jsx(a.Item,{label:"Country",name:"country",rules:[{required:!0}],children:e.jsxs(t,{placeholder:"Select a country",style:{width:"100%"},children:[e.jsx(t.Option,{value:"us",children:"United States"}),e.jsx(t.Option,{value:"uk",children:"United Kingdom"}),e.jsx(t.Option,{value:"ca",children:"Canada"}),e.jsx(t.Option,{value:"au",children:"Australia"})]})})})};var c,s,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    style: {
      width: 200
    },
    children: [<Select.Option key="1" value="option1">Option 1</Select.Option>, <Select.Option key="2" value="option2">Option 2</Select.Option>, <Select.Option key="3" value="option3">Option 3</Select.Option>]
  }
}`,...(u=(s=o.parameters)==null?void 0:s.docs)==null?void 0:u.source}}};var d,m,O;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    mode: 'multiple',
    placeholder: 'Select multiple options',
    style: {
      width: 300
    },
    children: [<Select.Option key="1" value="option1">Option 1</Select.Option>, <Select.Option key="2" value="option2">Option 2</Select.Option>, <Select.Option key="3" value="option3">Option 3</Select.Option>, <Select.Option key="4" value="option4">Option 4</Select.Option>]
  }
}`,...(O=(m=i.parameters)==null?void 0:m.docs)==null?void 0:O.source}}};var S,h,v;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: 'Select an option',
    style: {
      width: 200
    },
    children: [<Select.OptGroup key="group1" label="Group 1">
        <Select.Option value="option1">Option 1</Select.Option>
        <Select.Option value="option2">Option 2</Select.Option>
      </Select.OptGroup>, <Select.OptGroup key="group2" label="Group 2">
        <Select.Option value="option3">Option 3</Select.Option>
        <Select.Option value="option4">Option 4</Select.Option>
      </Select.OptGroup>]
  }
}`,...(v=(h=r.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var y,g,x;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showSearch: true,
    placeholder: 'Search and select',
    style: {
      width: 200
    },
    filterOption: (input, option) => String(option?.label ?? '').toLowerCase().includes(input.toLowerCase()),
    children: [<Select.Option key="1" value="apple">Apple</Select.Option>, <Select.Option key="2" value="banana">Banana</Select.Option>, <Select.Option key="3" value="cherry">Cherry</Select.Option>, <Select.Option key="4" value="date">Date</Select.Option>]
  }
}`,...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var j,w,f;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Form layout="vertical">
      <Form.Item label="Country" name="country" rules={[{
      required: true
    }]}>
        <Select placeholder="Select a country" style={{
        width: '100%'
      }}>
          <Select.Option value="us">United States</Select.Option>
          <Select.Option value="uk">United Kingdom</Select.Option>
          <Select.Option value="ca">Canada</Select.Option>
          <Select.Option value="au">Australia</Select.Option>
        </Select>
      </Form.Item>
    </Form>
}`,...(f=(w=l.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};const le=["Default","Multiple","WithGroups","Searchable","InForm"];export{o as Default,l as InForm,i as Multiple,p as Searchable,r as WithGroups,le as __namedExportsOrder,pe as default};
