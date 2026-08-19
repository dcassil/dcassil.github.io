import{j as e}from"./index-DW36zwiR.js";import{r as i}from"./index-3dRrDZpt.js";import{I as pe}from"./index-DvCoQ_F0.js";import{S as P}from"./index-Er0U-C2d.js";import{T as he}from"./index-B_RqcMmP.js";import{F as m}from"./index-BHaqqwJS.js";import"./index-CK2X06xH.js";import"./index-D_r6Hzab.js";import"./ContextIsolator-DDVSnbXG.js";import"./statusUtils-DRtxZvD-.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./index-B5t-g__n.js";import"./Input-DkNz1ASO.js";import"./TextArea-qr4UwjdY.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./useVariants-DLc3tDVL.js";import"./pickAttrs-BoNuQqbq.js";import"./EyeOutlined-xI5IIAay.js";import"./SearchOutlined-CQ_E22YT.js";import"./Button-CD1C6wFN.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./LoadingOutlined-BTXlvHVG.js";import"./ColorPresets-Bwdqqxj7.js";import"./useLocale-DSvjYROO.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./KeyCode-C3ZfcqzQ.js";import"./CheckOutlined-DKS7EKkq.js";import"./CSSMotionList-DgmrF8Py.js";import"./collapse-BbEVqHco.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./ExclamationCircleFilled-UApWKGXd.js";const w=(t,n)=>{const r=t.replace(/\D/g,"");let s=r;r.length>10&&r.startsWith("1")&&(s=r.slice(1));const a=s.slice(0,10);if(a.length===0)return"";if(a.length<=3)return`(${a}`;if(a.length<=6)return`(${a.slice(0,3)}) ${a.slice(3)}`;const c=`(${a.slice(0,3)}) ${a.slice(3,6)}-${a.slice(6)}`;return n?`+1 ${c}`:c},ge=t=>{const n=t.replace(/\D/g,"");return n.length===0?"":`+${n}`},ye=t=>t.replace(/\D/g,""),o=({value:t,onChange:n,format:r="us",includeCountryCode:s=!1,placeholder:a,className:c,...d})=>{const[V,b]=i.useState("");i.useEffect(()=>{if(t!==void 0){const u=T(t);b(u)}},[t,r,s]);const T=i.useCallback(u=>{switch(r){case"us":return w(u,s);case"international":return ge(u);case"raw":return ye(u);default:return w(u,s)}},[r,s]),ue=i.useCallback(u=>{const de=u.target.value,j=T(de);b(j),n==null||n(j)},[T,n]),ce=r==="us"?s?"+1 (555) 555-5555":"(555) 555-5555":r==="international"?"+1 555 555 5555":"5555555555",me=["cl-phone-input",c].filter(Boolean).join(" ");return e.jsx(pe,{...d,className:me,value:V,onChange:ue,placeholder:a||ce,type:"tel",maxLength:r==="us"?s?18:14:void 0})};o.__docgenInfo={description:`PhoneInput - A formatted phone number input component.

Automatically formats phone numbers as the user types. Supports US format
(XXX) XXX-XXXX and international format.

## Formats

| Format | Pattern | Example |
|--------|---------|---------|
| us | (XXX) XXX-XXXX | (555) 123-4567 |
| us + country | +1 (XXX) XXX-XXXX | +1 (555) 123-4567 |
| international | +XXXXXXXXXXX | +15551234567 |
| raw | XXXXXXXXXX | 5551234567 |

## CSS Classes

- \`.cl-phone-input\` - Root element

@example Basic US format
\`\`\`tsx
<PhoneInput 
  value={phone} 
  onChange={setPhone} 
/>
\`\`\`

@example With country code
\`\`\`tsx
<PhoneInput 
  value={phone} 
  onChange={setPhone}
  includeCountryCode
/>
\`\`\`

@example International format
\`\`\`tsx
<PhoneInput 
  value={phone} 
  onChange={setPhone}
  format="international"
/>
\`\`\``,methods:[],displayName:"PhoneInput",props:{value:{required:!1,tsType:{name:"string"},description:"The phone number value (can be formatted or raw digits)"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Callback when the phone number changes
Returns the formatted value`},format:{required:!1,tsType:{name:"union",raw:"'us' | 'international' | 'raw'",elements:[{name:"literal",value:"'us'"},{name:"literal",value:"'international'"},{name:"literal",value:"'raw'"}]},description:`The format pattern to use
@default 'us' - (XXX) XXX-XXXX`,defaultValue:{value:"'us'",computed:!1}},includeCountryCode:{required:!1,tsType:{name:"boolean"},description:`Whether to include the country code for US format
@default false`,defaultValue:{value:"false",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text
@default '(555) 555-5555' for US format`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional inline styles"}},composes:["Omit"]};const{Text:l}=he,Ye={title:"Input/PhoneInput",component:o,parameters:{layout:"centered"},tags:["autodocs"]},p={args:{placeholder:"(555) 555-5555"}},h={render:()=>{const[t,n]=i.useState("");return e.jsxs(P,{direction:"vertical",size:"middle",style:{width:300},children:[e.jsx(o,{value:t,onChange:n}),e.jsxs(l,{type:"secondary",children:["Value: ",t||"(empty)"]})]})}},g={args:{includeCountryCode:!0}},y={args:{value:"5551234567"}},f={args:{format:"international",placeholder:"+1 555 555 5555"}},x={args:{format:"raw",placeholder:"5555555555"}},X={args:{disabled:!0,value:"5551234567"}},v={render:()=>e.jsxs(P,{direction:"vertical",size:"middle",children:[e.jsx(o,{size:"small",placeholder:"Small"}),e.jsx(o,{size:"middle",placeholder:"Middle (default)"}),e.jsx(o,{size:"large",placeholder:"Large"})]})},S={render:()=>{const[t]=m.useForm();return e.jsxs(m,{form:t,layout:"vertical",style:{width:400},children:[e.jsx(m.Item,{label:"Phone Number",name:"phone",rules:[{required:!0,message:"Please enter a phone number"},{pattern:/^\(\d{3}\) \d{3}-\d{4}$/,message:"Please enter a valid phone number"}],children:e.jsx(o,{})}),e.jsx(m.Item,{label:"Mobile Phone",name:"mobile",children:e.jsx(o,{includeCountryCode:!0})}),e.jsx(m.Item,{label:"Work Phone",name:"work",children:e.jsx(o,{})})]})}},C={args:{addonBefore:"Tel"}},I={render:()=>{const[t,n]=i.useState("5551234567"),[r,s]=i.useState("5551234567"),[a,c]=i.useState("15551234567"),[d,V]=i.useState("5551234567");return e.jsxs(P,{direction:"vertical",size:"large",style:{width:350},children:[e.jsxs("div",{children:[e.jsx(l,{strong:!0,children:"US Format"}),e.jsx(o,{format:"us",value:t,onChange:n}),e.jsxs(l,{type:"secondary",style:{display:"block",marginTop:4},children:["Output: ",t]})]}),e.jsxs("div",{children:[e.jsx(l,{strong:!0,children:"US with Country Code"}),e.jsx(o,{format:"us",includeCountryCode:!0,value:r,onChange:s}),e.jsxs(l,{type:"secondary",style:{display:"block",marginTop:4},children:["Output: ",r]})]}),e.jsxs("div",{children:[e.jsx(l,{strong:!0,children:"International Format"}),e.jsx(o,{format:"international",value:a,onChange:c}),e.jsxs(l,{type:"secondary",style:{display:"block",marginTop:4},children:["Output: ",a]})]}),e.jsxs("div",{children:[e.jsx(l,{strong:!0,children:"Raw Format"}),e.jsx(o,{format:"raw",value:d,onChange:V}),e.jsxs(l,{type:"secondary",style:{display:"block",marginTop:4},children:["Output: ",d]})]})]})}};var F,k,U;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: '(555) 555-5555'
  }
}`,...(U=(k=p.parameters)==null?void 0:k.docs)==null?void 0:U.source}}};var z,R,D;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <Space direction="vertical" size="middle" style={{
      width: 300
    }}>
        <PhoneInput value={value} onChange={setValue} />
        <Text type="secondary">Value: {value || '(empty)'}</Text>
      </Space>;
  }
}`,...(D=(R=h.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var O,$,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    includeCountryCode: true
  }
}`,...(q=($=g.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var W,A,N;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    value: '5551234567'
  }
}`,...(N=(A=y.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var E,B,M;f.parameters={...f.parameters,docs:{...(E=f.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    format: 'international',
    placeholder: '+1 555 555 5555'
  }
}`,...(M=(B=f.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var _,L,G;x.parameters={...x.parameters,docs:{...(_=x.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    format: 'raw',
    placeholder: '5555555555'
  }
}`,...(G=(L=x.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var H,J,K;X.parameters={...X.parameters,docs:{...(H=X.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    disabled: true,
    value: '5551234567'
  }
}`,...(K=(J=X.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,Y,Z;v.parameters={...v.parameters,docs:{...(Q=v.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: () => <Space direction="vertical" size="middle">
      <PhoneInput size="small" placeholder="Small" />
      <PhoneInput size="middle" placeholder="Middle (default)" />
      <PhoneInput size="large" placeholder="Large" />
    </Space>
}`,...(Z=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => {
    const [form] = Form.useForm();
    return <Form form={form} layout="vertical" style={{
      width: 400
    }}>
        <Form.Item label="Phone Number" name="phone" rules={[{
        required: true,
        message: 'Please enter a phone number'
      }, {
        pattern: /^\\(\\d{3}\\) \\d{3}-\\d{4}$/,
        message: 'Please enter a valid phone number'
      }]}>
          <PhoneInput />
        </Form.Item>
        <Form.Item label="Mobile Phone" name="mobile">
          <PhoneInput includeCountryCode />
        </Form.Item>
        <Form.Item label="Work Phone" name="work">
          <PhoneInput />
        </Form.Item>
      </Form>;
  }
}`,...(re=(te=S.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,ne,oe;C.parameters={...C.parameters,docs:{...(ae=C.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    addonBefore: 'Tel'
  }
}`,...(oe=(ne=C.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,le,ie;I.parameters={...I.parameters,docs:{...(se=I.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => {
    const [usValue, setUsValue] = useState('5551234567');
    const [usCountryValue, setUsCountryValue] = useState('5551234567');
    const [intlValue, setIntlValue] = useState('15551234567');
    const [rawValue, setRawValue] = useState('5551234567');
    return <Space direction="vertical" size="large" style={{
      width: 350
    }}>
        <div>
          <Text strong>US Format</Text>
          <PhoneInput format="us" value={usValue} onChange={setUsValue} />
          <Text type="secondary" style={{
          display: 'block',
          marginTop: 4
        }}>
            Output: {usValue}
          </Text>
        </div>
        
        <div>
          <Text strong>US with Country Code</Text>
          <PhoneInput format="us" includeCountryCode value={usCountryValue} onChange={setUsCountryValue} />
          <Text type="secondary" style={{
          display: 'block',
          marginTop: 4
        }}>
            Output: {usCountryValue}
          </Text>
        </div>
        
        <div>
          <Text strong>International Format</Text>
          <PhoneInput format="international" value={intlValue} onChange={setIntlValue} />
          <Text type="secondary" style={{
          display: 'block',
          marginTop: 4
        }}>
            Output: {intlValue}
          </Text>
        </div>
        
        <div>
          <Text strong>Raw Format</Text>
          <PhoneInput format="raw" value={rawValue} onChange={setRawValue} />
          <Text type="secondary" style={{
          display: 'block',
          marginTop: 4
        }}>
            Output: {rawValue}
          </Text>
        </div>
      </Space>;
  }
}`,...(ie=(le=I.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};const Ze=["Default","Controlled","WithCountryCode","PreFilledValue","InternationalFormat","RawFormat","Disabled","Sizes","InFormContext","WithAddon","AllFormats"];export{I as AllFormats,h as Controlled,p as Default,X as Disabled,S as InFormContext,f as InternationalFormat,y as PreFilledValue,x as RawFormat,v as Sizes,C as WithAddon,g as WithCountryCode,Ze as __namedExportsOrder,Ye as default};
