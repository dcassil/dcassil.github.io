import{j as e}from"./index-DW36zwiR.js";import{R}from"./index-3dRrDZpt.js";import{H as z}from"./HomeOutlined-CMfpgmGs.js";import{U as H}from"./UserOutlined-D8waM_Uz.js";import{S as M}from"./SettingOutlined-BRign0WW.js";import{U as p,d as u}from"./ThemeProvider-BlJLXNQe.js";import{C as s}from"./index-CrSsfzOz.js";import{S as i}from"./index-Er0U-C2d.js";import{T as O}from"./index-B_RqcMmP.js";import{S as A}from"./index-B4qc7M0h.js";import{D as W,A as a}from"./index-DfSOBG_u.js";import{B as r}from"./Button-CD1C6wFN.js";import{T as o}from"./index-L6wlpHhd.js";import{I as g}from"./index-DvCoQ_F0.js";import{B as F}from"./index-CE2cvSsK.js";import{F as J}from"./Table-SkDg8quY.js";import{M as $}from"./dropdown-_HmQ0U4N.js";import"./index-CK2X06xH.js";import"./AntdIcon-DQJJGqqe.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./useVariants-DLc3tDVL.js";import"./ContextIsolator-DDVSnbXG.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./Skeleton-K1i2PQht.js";import"./CloseOutlined--kFZyjTz.js";import"./EllipsisOutlined-DU8baF8F.js";import"./KeyCode-C3ZfcqzQ.js";import"./Overflow-K8xR2NA3.js";import"./TextArea-qr4UwjdY.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./index-B5t-g__n.js";import"./useLocale-DSvjYROO.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./CheckOutlined-DKS7EKkq.js";import"./LoadingOutlined-BTXlvHVG.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./ExclamationCircleFilled-UApWKGXd.js";import"./InfoCircleFilled-DrVcRgxf.js";import"./pickAttrs-BoNuQqbq.js";import"./ColorPresets-Bwdqqxj7.js";import"./useClosable-Cb5SP0VC.js";import"./extendsObject-78o_rR5W.js";import"./Input-DkNz1ASO.js";import"./EyeOutlined-xI5IIAay.js";import"./SearchOutlined-CQ_E22YT.js";import"./index-DN4JzdW2.js";import"./PurePanel-hUbDQSVi.js";import"./index-Dx-r7iEd.js";import"./move-COWD65OB.js";import"./useIcons-Y_qoH6rg.js";import"./DownOutlined-CJFB344f.js";import"./index-DgK-gI2K.js";import"./useBubbleLock-BswOdbvZ.js";import"./index-CdcenAOp.js";import"./index-uaP_ALsF.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./collapse-BbEVqHco.js";const{Text:d,Title:f}=O,tr={title:"Theme/Verification",parameters:{layout:"fullscreen",docs:{description:{component:`
# Theme Verification

These stories verify that themes passed to UIProvider are correctly applied.

Consuming apps should define their own themes - see the Custom Theme example for how to create one.
        `}}},tags:["autodocs"]},V=[{key:"1",name:"John Doe",email:"john@example.com",status:"Active"},{key:"2",name:"Jane Smith",email:"jane@example.com",status:"Pending"},{key:"3",name:"Bob Johnson",email:"bob@example.com",status:"Inactive"}],Y=[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"Status",dataIndex:"status",key:"status",render:t=>e.jsx(o,{color:t==="Active"?"success":t==="Pending"?"warning":"default",children:t})}],E=({themeName:t,primaryColor:n})=>e.jsxs("div",{style:{padding:24,minHeight:"100vh"},children:[e.jsx(a,{title:`Active Theme: ${t}`,description:e.jsxs(d,{children:["Primary Color: ",e.jsx("code",{style:{background:n,color:"#fff",padding:"2px 8px",borderRadius:4},children:n})]}),type:"info",showIcon:!0,style:{marginBottom:24}}),e.jsx(s,{title:"Buttons",style:{marginBottom:24},children:e.jsxs(i,{wrap:!0,children:[e.jsx(r,{type:"primary",children:"Primary"}),e.jsx(r,{children:"Default"}),e.jsx(r,{type:"dashed",children:"Dashed"}),e.jsx(r,{type:"text",children:"Text"}),e.jsx(r,{type:"link",children:"Link"}),e.jsx(r,{danger:!0,children:"Danger"}),e.jsx(r,{type:"primary",danger:!0,children:"Primary Danger"})]})}),e.jsx(s,{title:"Form Controls",style:{marginBottom:24},children:e.jsxs(i,{wrap:!0,size:"large",children:[e.jsx(g,{placeholder:"Text input",style:{width:200}}),e.jsx(g.Search,{placeholder:"Search...",style:{width:200}}),e.jsx(A,{defaultChecked:!0}),e.jsx(F,{count:5,children:e.jsx(r,{children:"Notifications"})})]})}),e.jsx(s,{title:"Tags & Status",style:{marginBottom:24},children:e.jsxs(i,{wrap:!0,children:[e.jsx(o,{color:"success",children:"Success"}),e.jsx(o,{color:"processing",children:"Processing"}),e.jsx(o,{color:"warning",children:"Warning"}),e.jsx(o,{color:"error",children:"Error"}),e.jsx(o,{color:"default",children:"Default"}),e.jsx(o,{color:n,children:"Primary"})]})}),e.jsx(s,{title:"Alerts",style:{marginBottom:24},children:e.jsxs(i,{direction:"vertical",style:{width:"100%"},children:[e.jsx(a,{title:"Success Alert",type:"success",showIcon:!0}),e.jsx(a,{title:"Info Alert",type:"info",showIcon:!0}),e.jsx(a,{title:"Warning Alert",type:"warning",showIcon:!0}),e.jsx(a,{title:"Error Alert",type:"error",showIcon:!0})]})}),e.jsx(s,{title:"Table",style:{marginBottom:24},children:e.jsx(J,{dataSource:V,columns:Y,pagination:!1,size:"small"})}),e.jsx(s,{title:"Menu",children:e.jsx($,{mode:"inline",defaultSelectedKeys:["1"],style:{border:"none"},items:[{key:"1",icon:e.jsx(z,{}),label:"Dashboard"},{key:"2",icon:e.jsx(H,{}),label:"Users"},{key:"3",icon:e.jsx(M,{}),label:"Settings"}]})})]}),m={render:()=>{var t;return e.jsx(p,{theme:u,children:e.jsx(E,{themeName:"Default Theme",primaryColor:((t=u.token)==null?void 0:t.colorPrimary)||"#1677ff"})})}},_={token:{colorPrimary:"#722ed1",borderRadius:8},components:{Layout:{headerBg:"#722ed1",siderBg:"#722ed1"}}},l={render:()=>e.jsx(p,{theme:_,children:e.jsx(E,{themeName:"Custom Theme (Purple)",primaryColor:"#722ed1"})})},c={render:()=>{const t={token:{colorPrimary:"#1677ff"}},n={token:{colorPrimary:"#1677ff",colorBgBase:"#141414",colorTextBase:"#fff"}},[h,L]=R.useState(!1),N=h?n:t;return e.jsx(p,{theme:N,children:e.jsx("div",{style:{padding:24,minHeight:"100vh"},children:e.jsx(s,{children:e.jsxs(i,{direction:"vertical",size:"large",style:{width:"100%"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx(f,{level:3,style:{margin:0},children:"Theme Toggle Demo"}),e.jsxs(i,{children:[e.jsx(d,{children:"Light"}),e.jsx(A,{checked:h,onChange:L,checkedChildren:"🌙",unCheckedChildren:"☀️"}),e.jsx(d,{children:"Dark"})]})]}),e.jsx(W,{}),e.jsx(a,{title:`Current Mode: ${h?"Dark":"Light"}`,description:"Toggle the switch above to see the theme change in real-time.",type:"info",showIcon:!0}),e.jsxs(i,{wrap:!0,children:[e.jsx(r,{type:"primary",children:"Primary Button"}),e.jsx(r,{children:"Default Button"}),e.jsx(r,{danger:!0,children:"Danger Button"})]}),e.jsx(s,{title:"Nested Card",children:e.jsxs(i,{direction:"vertical",children:[e.jsx(d,{children:"This card should inherit the theme from the UIProvider."}),e.jsxs(i,{wrap:!0,children:[e.jsx(o,{color:"success",children:"Success"}),e.jsx(o,{color:"warning",children:"Warning"}),e.jsx(o,{color:"error",children:"Error"})]})]})}),e.jsx(f,{level:5,children:"Usage Example:"}),e.jsx("pre",{style:{padding:16,borderRadius:8,overflow:"auto",fontSize:12},children:`import { UIProvider } from 'dashboard-component-lib';

// Define your themes
const lightTheme = {
  token: { colorPrimary: '#1677ff' },
};

const darkTheme = {
  token: {
    colorPrimary: '#1677ff',
    colorBgBase: '#141414',
    colorTextBase: '#fff',
  },
};

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <UIProvider theme={isDark ? darkTheme : lightTheme}>
      <YourApp onToggleTheme={() => setIsDark(!isDark)} />
    </UIProvider>
  );
}`})]})})})})}};var x,T,y,j,k;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <UIProvider theme={defaultTheme}>
      <ThemeDemo themeName="Default Theme" primaryColor={defaultTheme.token?.colorPrimary || '#1677ff'} />
    </UIProvider>
}`,...(y=(T=m.parameters)==null?void 0:T.docs)==null?void 0:y.source},description:{story:"Default library theme - standard Ant Design colors",...(k=(j=m.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};var D,v,w,S,I;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <UIProvider theme={customTheme}>
      <ThemeDemo themeName="Custom Theme (Purple)" primaryColor="#722ed1" />
    </UIProvider>
}`,...(w=(v=l.parameters)==null?void 0:v.docs)==null?void 0:w.source},description:{story:"Custom Theme Example - Shows how to create your own theme",...(I=(S=l.parameters)==null?void 0:S.docs)==null?void 0:I.description}}};var B,P,C,b,U;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const lightTheme: ComponentLibThemeConfig = {
      token: {
        colorPrimary: '#1677ff'
      }
    };
    const darkTheme: ComponentLibThemeConfig = {
      token: {
        colorPrimary: '#1677ff',
        colorBgBase: '#141414',
        colorTextBase: '#fff'
      }
    };
    const [isDark, setIsDark] = React.useState(false);
    const currentTheme = isDark ? darkTheme : lightTheme;
    return <UIProvider theme={currentTheme}>
        <div style={{
        padding: 24,
        minHeight: '100vh'
      }}>
          <Card>
            <Space direction="vertical" size="large" style={{
            width: '100%'
          }}>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
                <Title level={3} style={{
                margin: 0
              }}>Theme Toggle Demo</Title>
                <Space>
                  <Text>Light</Text>
                  <Switch checked={isDark} onChange={setIsDark} checkedChildren="🌙" unCheckedChildren="☀️" />
                  <Text>Dark</Text>
                </Space>
              </div>
              
              <Divider />
              
              <Alert title={\`Current Mode: \${isDark ? 'Dark' : 'Light'}\`} description="Toggle the switch above to see the theme change in real-time." type="info" showIcon />
              
              <Space wrap>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button danger>Danger Button</Button>
              </Space>
              
              <Card title="Nested Card">
                <Space direction="vertical">
                  <Text>This card should inherit the theme from the UIProvider.</Text>
                  <Space wrap>
                    <Tag color="success">Success</Tag>
                    <Tag color="warning">Warning</Tag>
                    <Tag color="error">Error</Tag>
                  </Space>
                </Space>
              </Card>
              
              <Title level={5}>Usage Example:</Title>
              <pre style={{
              padding: 16,
              borderRadius: 8,
              overflow: 'auto',
              fontSize: 12
            }}>
              {\`import { UIProvider } from 'dashboard-component-lib';

// Define your themes
const lightTheme = {
  token: { colorPrimary: '#1677ff' },
};

const darkTheme = {
  token: {
    colorPrimary: '#1677ff',
    colorBgBase: '#141414',
    colorTextBase: '#fff',
  },
};

function App() {
  const [isDark, setIsDark] = useState(false);
  
  return (
    <UIProvider theme={isDark ? darkTheme : lightTheme}>
      <YourApp onToggleTheme={() => setIsDark(!isDark)} />
    </UIProvider>
  );
}\`}
              </pre>
            </Space>
          </Card>
        </div>
      </UIProvider>;
  }
}`,...(C=(P=c.parameters)==null?void 0:P.docs)==null?void 0:C.source},description:{story:"Theme Toggle Demo - Shows how consuming apps would handle theme switching",...(U=(b=c.parameters)==null?void 0:b.docs)==null?void 0:U.description}}};const or=["DefaultTheme","CustomTheme","ThemeToggleDemo"];export{l as CustomTheme,m as DefaultTheme,c as ThemeToggleDemo,or as __namedExportsOrder,tr as default};
