import{j as e}from"./index-DW36zwiR.js";import{r as O}from"./index-3dRrDZpt.js";import{M as T}from"./index-mse8sVvm.js";import{F as d}from"./index-BHaqqwJS.js";import{I as m}from"./index-DvCoQ_F0.js";import{B as k}from"./Button-CD1C6wFN.js";import"./index-CK2X06xH.js";import"./index-BB8AawkH.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./client-DxV0RFaf.js";import"./ExclamationCircleFilled-UApWKGXd.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./InfoCircleFilled-DrVcRgxf.js";import"./ContextIsolator-DDVSnbXG.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./CloseOutlined--kFZyjTz.js";import"./pickAttrs-BoNuQqbq.js";import"./TextArea-qr4UwjdY.js";import"./useVariants-DLc3tDVL.js";import"./index-B5t-g__n.js";import"./Skeleton-K1i2PQht.js";import"./useLocale-DSvjYROO.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./useClosable-Cb5SP0VC.js";import"./extendsObject-78o_rR5W.js";import"./PurePanel-hUbDQSVi.js";import"./CSSMotionList-DgmrF8Py.js";import"./collapse-BbEVqHco.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./LoadingOutlined-BTXlvHVG.js";import"./index-Er0U-C2d.js";import"./Input-DkNz1ASO.js";import"./EyeOutlined-xI5IIAay.js";import"./SearchOutlined-CQ_E22YT.js";import"./ColorPresets-Bwdqqxj7.js";const i=({children:n,fullscreenOnMobile:t=!0,mobileAnimation:o="slide-up",className:j,wrapClassName:v,...S})=>{const A=["cl-modal",t&&"cl-modal--fullscreen-mobile",o==="slide-up"&&"cl-modal--slide-up",v].filter(Boolean).join(" ");return e.jsx(T,{...S,className:j||"",wrapClassName:A,children:n})};i.__docgenInfo={description:`Modal - A responsive dialog overlay component.

Wraps Ant Design's Modal with responsive behavior. On mobile, the modal
can render as a fullscreen sheet with slide-up animation.

## Responsive Behavior

| Breakpoint | Behavior |
|------------|----------|
| Desktop | Centered modal with configurable width |
| Tablet | Same as desktop, may be slightly wider |
| Mobile | Fullscreen with sticky header/footer |

## Mobile Features (when fullscreenOnMobile=true)

- Full viewport width and height
- Sticky header with title and close button
- Scrollable body content
- Sticky footer with action buttons
- Safe area insets for notched devices
- Slide-up animation

## CSS Classes

- \`.cl-modal\` - Wrapper element (wrapClassName)
- \`.cl-modal--fullscreen-mobile\` - Applied when fullscreenOnMobile={true}
- \`.cl-modal--slide-up\` - Applied when mobileAnimation='slide-up'

@example Basic usage
\`\`\`tsx
<Modal
  title="Confirm"
  open={isOpen}
  onOk={handleOk}
  onCancel={handleCancel}
>
  <p>Are you sure?</p>
</Modal>
\`\`\`

@example Fullscreen on mobile (default)
\`\`\`tsx
<Modal
  title="Edit User"
  open={isOpen}
  onCancel={() => setIsOpen(false)}
  fullscreenOnMobile
  mobileAnimation="slide-up"
>
  <Form>...</Form>
</Modal>
\`\`\`

@example Non-fullscreen on mobile
\`\`\`tsx
<Modal
  title="Quick Confirm"
  open={isOpen}
  fullscreenOnMobile={false}
>
  <p>Short message</p>
</Modal>
\`\`\`

@see {@link ModalProps} for prop documentation`,methods:[],displayName:"Modal",props:{children:{required:!1,tsType:{name:"ReactNode"},description:`Content of the modal body.
Can be any React content - forms, text, components, etc.`},fullscreenOnMobile:{required:!1,tsType:{name:"boolean"},description:`Show as fullscreen on mobile viewports (<768px).
When true, the modal:
- Takes full viewport width and height
- Has sticky header and footer
- Scrollable body content
- Respects safe-area-inset for notched devices

@default true`,defaultValue:{value:"true",computed:!1}},mobileAnimation:{required:!1,tsType:{name:"union",raw:"'slide-up' | 'fade' | 'none'",elements:[{name:"literal",value:"'slide-up'"},{name:"literal",value:"'fade'"},{name:"literal",value:"'none'"}]},description:"Animation style for mobile presentation.\nOnly applies when `fullscreenOnMobile` is true.\n\n- `'slide-up'` - Slides up from bottom (recommended)\n- `'fade'` - Fades in (same as desktop)\n- `'none'` - No animation\n\n@default 'slide-up'",defaultValue:{value:"'slide-up'",computed:!1}}},composes:["AntModalProps"]};const ge={title:"Feedback/Modal",component:i,parameters:{layout:"centered",docs:{description:{component:`
A modal dialog component for displaying content in an overlay.

## Features
- **Flexible Content**: Can contain any React content
- **Full Ant Design Support**: Extends Ant Design Modal with all its features
- **Customizable**: Supports all Ant Design Modal props

## Usage
The Modal component wraps Ant Design's Modal for consistent usage across the library.
        `}}},tags:["autodocs"]},p=n=>{const[t,o]=O.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(k,{type:"primary",onClick:()=>o(!0),children:"Open Modal"}),e.jsx(i,{...n,open:t,onOk:()=>o(!1),onCancel:()=>o(!1)})]})},a={render:n=>e.jsx(p,{...n}),args:{title:"Basic Modal",children:e.jsx("p",{children:"This is a basic modal dialog."})}},r={render:n=>e.jsx(p,{...n}),args:{title:"Form Modal",children:e.jsxs(d,{layout:"vertical",children:[e.jsx(d.Item,{label:"Name",children:e.jsx(m,{placeholder:"Enter name"})}),e.jsx(d.Item,{label:"Email",children:e.jsx(m,{placeholder:"Enter email"})})]}),width:500}},l={render:n=>e.jsx(p,{...n}),args:{title:"Large Modal",children:e.jsxs("div",{children:[e.jsx("p",{children:"This is a large modal with more content."}),e.jsx("p",{children:"You can put any content here."})]}),width:800}},s={render:n=>{const[t,o]=O.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(k,{danger:!0,onClick:()=>o(!0),children:"Delete Item"}),e.jsx(i,{...n,open:t,onOk:()=>{console.log("Confirmed"),o(!1)},onCancel:()=>o(!1)})]})},args:{title:"Confirm Delete",children:e.jsx("p",{children:"Are you sure you want to delete this item? This action cannot be undone."}),okText:"Delete",okButtonProps:{danger:!0},cancelText:"Cancel"}};var c,u,h;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <ModalExample {...args} />,
  args: {
    title: 'Basic Modal',
    children: <p>This is a basic modal dialog.</p>
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,g,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => <ModalExample {...args} />,
  args: {
    title: 'Form Modal',
    children: <Form layout="vertical">
        <Form.Item label="Name">
          <Input placeholder="Enter name" />
        </Form.Item>
        <Form.Item label="Email">
          <Input placeholder="Enter email" />
        </Form.Item>
      </Form>,
    width: 500
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,M,y;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => <ModalExample {...args} />,
  args: {
    title: 'Large Modal',
    children: <div>
        <p>This is a large modal with more content.</p>
        <p>You can put any content here.</p>
      </div>,
    width: 800
  }
}`,...(y=(M=l.parameters)==null?void 0:M.docs)==null?void 0:y.source}}};var w,C,F;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [open, setOpen] = useState(false);
    return <>
        <Button danger onClick={() => setOpen(true)}>
          Delete Item
        </Button>
        <Modal {...args} open={open} onOk={() => {
        console.log('Confirmed');
        setOpen(false);
      }} onCancel={() => setOpen(false)} />
      </>;
  },
  args: {
    title: 'Confirm Delete',
    children: <p>Are you sure you want to delete this item? This action cannot be undone.</p>,
    okText: 'Delete',
    okButtonProps: {
      danger: true
    },
    cancelText: 'Cancel'
  }
}`,...(F=(C=s.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const be=["Default","WithForm","LargeModal","ConfirmModal"];export{s as ConfirmModal,a as Default,l as LargeModal,r as WithForm,be as __namedExportsOrder,ge as default};
