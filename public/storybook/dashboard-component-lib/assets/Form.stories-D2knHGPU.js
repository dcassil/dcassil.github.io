import{j as e}from"./index-DW36zwiR.js";import{F as r}from"./Form-DOC0qCcV.js";import{T as t}from"./TextInput-B1YRAoIV.js";import{B as p}from"./Button-BqbH_mOF.js";import{S as a}from"./Select-D_4xXtMW.js";import{R as l}from"./Radio-DaQlDmXq.js";import{C as m}from"./Checkbox-CcDcjG7W.js";import{S as j}from"./index-Er0U-C2d.js";import"./index-3dRrDZpt.js";import"./index-CK2X06xH.js";import"./index-BHaqqwJS.js";import"./ContextIsolator-DDVSnbXG.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./CSSMotionList-DgmrF8Py.js";import"./collapse-BbEVqHco.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./useLocale-DSvjYROO.js";import"./ExclamationCircleFilled-UApWKGXd.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./LoadingOutlined-BTXlvHVG.js";import"./index-DvCoQ_F0.js";import"./index-B5t-g__n.js";import"./Input-DkNz1ASO.js";import"./TextArea-qr4UwjdY.js";import"./useVariants-DLc3tDVL.js";import"./pickAttrs-BoNuQqbq.js";import"./EyeOutlined-xI5IIAay.js";import"./SearchOutlined-CQ_E22YT.js";import"./Button-CD1C6wFN.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./ColorPresets-Bwdqqxj7.js";import"./index-DN4JzdW2.js";import"./Overflow-K8xR2NA3.js";import"./KeyCode-C3ZfcqzQ.js";import"./PurePanel-hUbDQSVi.js";import"./index-Dx-r7iEd.js";import"./move-COWD65OB.js";import"./useIcons-Y_qoH6rg.js";import"./CheckOutlined-DKS7EKkq.js";import"./CloseOutlined--kFZyjTz.js";import"./DownOutlined-CJFB344f.js";import"./index-uaP_ALsF.js";import"./useBubbleLock-BswOdbvZ.js";import"./index-DgK-gI2K.js";const be={title:"Form/Form",component:r,parameters:{layout:"padded",docs:{description:{component:`
A form component wrapper around Ant Design's Form.

## Features
- **Validation**: Built-in form validation
- **Layout**: Flexible layout options (horizontal, vertical, inline)
- **Form Items**: Use Form.Item to wrap input components
- **Form Lists**: Support for dynamic form fields

## Usage
Wrap your form inputs with Form.Item components for proper validation and layout.
        `}}},tags:["autodocs"],argTypes:{layout:{description:"Form layout",control:"select",options:["horizontal","vertical","inline"]}}},i={render:()=>e.jsxs(r,{layout:"vertical",onFinish:o=>{console.log("Form values:",o)},children:[e.jsx(r.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:e.jsx(t,{placeholder:"Enter your name"})}),e.jsx(r.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Please enter a valid email!"}],children:e.jsx(t,{type:"text",placeholder:"Enter your email"})}),e.jsx(r.Item,{children:e.jsx(p,{type:"primary",htmlType:"submit",children:"Submit"})})]})},s={render:()=>e.jsxs(r,{layout:"horizontal",labelCol:{span:6},wrapperCol:{span:18},onFinish:o=>{console.log("Form values:",o)},children:[e.jsx(r.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:e.jsx(t,{placeholder:"Enter your name"})}),e.jsx(r.Item,{label:"Email",name:"email",rules:[{required:!0,message:"Please input your email!"},{type:"email",message:"Please enter a valid email!"}],children:e.jsx(t,{type:"text",placeholder:"Enter your email"})}),e.jsx(r.Item,{wrapperCol:{offset:6,span:18},children:e.jsx(p,{type:"primary",htmlType:"submit",children:"Submit"})})]})},n={render:()=>e.jsxs(r,{layout:"vertical",onFinish:o=>{console.log("Form values:",o)},children:[e.jsx(r.Item,{label:"Text Input",name:"text",rules:[{required:!0}],children:e.jsx(t,{placeholder:"Enter text"})}),e.jsx(r.Item,{label:"Textarea",name:"textarea",children:e.jsx(t,{type:"textarea",rows:4,placeholder:"Enter multiline text"})}),e.jsx(r.Item,{label:"Password",name:"password",rules:[{required:!0}],children:e.jsx(t,{type:"password",placeholder:"Enter password"})}),e.jsx(r.Item,{label:"Select",name:"select",rules:[{required:!0}],children:e.jsxs(a,{placeholder:"Select an option",children:[e.jsx(a.Option,{value:"option1",children:"Option 1"}),e.jsx(a.Option,{value:"option2",children:"Option 2"}),e.jsx(a.Option,{value:"option3",children:"Option 3"})]})}),e.jsx(r.Item,{label:"Radio Group",name:"radio",rules:[{required:!0}],children:e.jsxs(l.Group,{children:[e.jsx(l,{value:"radio1",children:"Radio 1"}),e.jsx(l,{value:"radio2",children:"Radio 2"}),e.jsx(l,{value:"radio3",children:"Radio 3"})]})}),e.jsx(r.Item,{label:"Checkbox Group",name:"checkbox",children:e.jsxs(m.Group,{children:[e.jsx(m,{value:"check1",children:"Checkbox 1"}),e.jsx(m,{value:"check2",children:"Checkbox 2"}),e.jsx(m,{value:"check3",children:"Checkbox 3"})]})}),e.jsx(r.Item,{children:e.jsxs(j,{children:[e.jsx(p,{type:"primary",htmlType:"submit",children:"Submit"}),e.jsx(p,{htmlType:"reset",children:"Reset"})]})})]})};var u,c,d;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Form layout="vertical" onFinish={values => {
    console.log('Form values:', values);
  }}>
      <Form.Item label="Name" name="name" rules={[{
      required: true,
      message: 'Please input your name!'
    }]}>
        <TextInput placeholder="Enter your name" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{
      required: true,
      message: 'Please input your email!'
    }, {
      type: 'email',
      message: 'Please enter a valid email!'
    }]}>
        <TextInput type="text" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,x,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Form layout="horizontal" labelCol={{
    span: 6
  }} wrapperCol={{
    span: 18
  }} onFinish={values => {
    console.log('Form values:', values);
  }}>
      <Form.Item label="Name" name="name" rules={[{
      required: true,
      message: 'Please input your name!'
    }]}>
        <TextInput placeholder="Enter your name" />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[{
      required: true,
      message: 'Please input your email!'
    }, {
      type: 'email',
      message: 'Please enter a valid email!'
    }]}>
        <TextInput type="text" placeholder="Enter your email" />
      </Form.Item>
      <Form.Item wrapperCol={{
      offset: 6,
      span: 18
    }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var F,b,I;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Form layout="vertical" onFinish={values => {
    console.log('Form values:', values);
  }}>
      <Form.Item label="Text Input" name="text" rules={[{
      required: true
    }]}>
        <TextInput placeholder="Enter text" />
      </Form.Item>
      <Form.Item label="Textarea" name="textarea">
        <TextInput type="textarea" rows={4} placeholder="Enter multiline text" />
      </Form.Item>
      <Form.Item label="Password" name="password" rules={[{
      required: true
    }]}>
        <TextInput type="password" placeholder="Enter password" />
      </Form.Item>
      <Form.Item label="Select" name="select" rules={[{
      required: true
    }]}>
        <Select placeholder="Select an option">
          <Select.Option value="option1">Option 1</Select.Option>
          <Select.Option value="option2">Option 2</Select.Option>
          <Select.Option value="option3">Option 3</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item label="Radio Group" name="radio" rules={[{
      required: true
    }]}>
        <Radio.Group>
          <Radio value="radio1">Radio 1</Radio>
          <Radio value="radio2">Radio 2</Radio>
          <Radio value="radio3">Radio 3</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Checkbox Group" name="checkbox">
        <Checkbox.Group>
          <Checkbox value="check1">Checkbox 1</Checkbox>
          <Checkbox value="check2">Checkbox 2</Checkbox>
          <Checkbox value="check3">Checkbox 3</Checkbox>
        </Checkbox.Group>
      </Form.Item>
      <Form.Item>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="reset">
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
}`,...(I=(b=n.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const Ie=["Default","Horizontal","WithAllInputs"];export{i as Default,s as Horizontal,n as WithAllInputs,Ie as __namedExportsOrder,be as default};
