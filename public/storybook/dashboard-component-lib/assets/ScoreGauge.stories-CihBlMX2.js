import{j as e}from"./index-DW36zwiR.js";import{r as Z}from"./index-3dRrDZpt.js";import{t as ee}from"./index-DixlKTR5.js";import{T as re}from"./index-B_RqcMmP.js";import{S as g}from"./index-Er0U-C2d.js";import{F as ae}from"./Table-SkDg8quY.js";import"./index-CK2X06xH.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./useLocale-DSvjYROO.js";import"./index-BX-V-Lkp.js";import"./ContextIsolator-DDVSnbXG.js";import"./colors-C1ds9sb8.js";import"./KeyCode-C3ZfcqzQ.js";import"./TextArea-qr4UwjdY.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./useVariants-DLc3tDVL.js";import"./index-B5t-g__n.js";import"./CheckOutlined-DKS7EKkq.js";import"./LoadingOutlined-BTXlvHVG.js";import"./pickAttrs-BoNuQqbq.js";import"./index-DN4JzdW2.js";import"./Overflow-K8xR2NA3.js";import"./PurePanel-hUbDQSVi.js";import"./index-Dx-r7iEd.js";import"./move-COWD65OB.js";import"./useIcons-Y_qoH6rg.js";import"./CloseOutlined--kFZyjTz.js";import"./DownOutlined-CJFB344f.js";import"./SearchOutlined-CQ_E22YT.js";import"./index-DgK-gI2K.js";import"./useBubbleLock-BswOdbvZ.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./index-CdcenAOp.js";import"./dropdown-_HmQ0U4N.js";import"./EllipsisOutlined-DU8baF8F.js";import"./collapse-BbEVqHco.js";import"./Button-CD1C6wFN.js";import"./ColorPresets-Bwdqqxj7.js";import"./index-uaP_ALsF.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./extendsObject-78o_rR5W.js";import"./Input-DkNz1ASO.js";const{useToken:oe}=ee,te=()=>{const{token:a}=oe();return Z.useMemo(()=>({excellent:a.colorSuccess,good:a.colorSuccessActive||a.colorSuccess,fair:a.colorWarning,poor:a.colorWarningActive||a.colorWarning,critical:a.colorError}),[a])},se=a=>a>=90?"excellent":a>=80?"good":a>=70?"fair":a>=60?"poor":"critical",{Text:ne}=re,r=({score:a,variant:t="table",label:s,colorMap:L,showValue:R=!0,className:y,style:H})=>{const K=te(),x=Math.max(0,Math.min(100,a)),Q=se(x),h={...K,...L}[Q],o=t==="table"?32:80,S=t==="table"?3:6,b=(o-S)/2,v=2*Math.PI*b,U=v-x/100*v,X=t==="table"?10:20,Y=Z.useMemo(()=>["cl-score-gauge",`cl-score-gauge--${t}`,y].filter(Boolean).join(" "),[t,y]);return e.jsxs("div",{className:Y,style:H,children:[e.jsxs("svg",{className:"cl-score-gauge__svg",width:o,height:o,viewBox:`0 0 ${o} ${o}`,children:[e.jsx("circle",{className:"cl-score-gauge__background",cx:o/2,cy:o/2,r:b,fill:"none",stroke:"currentColor",strokeWidth:S,opacity:.15}),e.jsx("circle",{className:"cl-score-gauge__progress",cx:o/2,cy:o/2,r:b,fill:"none",stroke:h,strokeWidth:S,strokeLinecap:"round",strokeDasharray:v,strokeDashoffset:U,transform:`rotate(-90 ${o/2} ${o/2})`,style:{transition:"stroke-dashoffset 0.5s ease-in-out, stroke 0.3s ease"}}),R&&e.jsx("text",{className:"cl-score-gauge__value",x:"50%",y:"50%",dominantBaseline:"central",textAnchor:"middle",fontSize:X,fontWeight:600,fill:h,children:Math.round(x)})]}),t==="detail"&&s&&e.jsx(ne,{className:"cl-score-gauge__label",type:"secondary",children:s})]})};r.__docgenInfo={description:"",methods:[],displayName:"ScoreGauge",props:{score:{required:!0,tsType:{name:"number"},description:"The score value (0-100)"},variant:{required:!1,tsType:{name:"union",raw:"'table' | 'detail'",elements:[{name:"literal",value:"'table'"},{name:"literal",value:"'detail'"}]},description:`Display variant
- 'table': Small (32px), no label - for use in table cells
- 'detail': Large (80px), with label - for detail views
@default 'table'`,defaultValue:{value:"'table'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:"Optional label displayed below the gauge (only shown in 'detail' variant)"},colorMap:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  excellent?: string;  // 90-100
  good?: string;       // 80-89
  fair?: string;       // 70-79
  poor?: string;       // 60-69
  critical?: string;   // 0-59
}`,signature:{properties:[{key:"excellent",value:{name:"string",required:!1}},{key:"good",value:{name:"string",required:!1}},{key:"fair",value:{name:"string",required:!1}},{key:"poor",value:{name:"string",required:!1}},{key:"critical",value:{name:"string",required:!1}}]}},description:`Custom color mapping for score tiers
If not provided, uses default tier colors`},showValue:{required:!1,tsType:{name:"boolean"},description:`Whether to show the score number inside the gauge
@default true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional inline styles"}}};const rr={title:"Data Display/ScoreGauge",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{score:{control:{type:"range",min:0,max:100,step:1}},variant:{control:{type:"radio"},options:["table","detail"]}}},n={args:{score:85}},l={args:{score:92,variant:"detail",label:"DashboardPro Score"}},i={render:()=>e.jsx(g,{direction:"vertical",size:"large",align:"center",children:e.jsxs(g,{size:"large",children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:95,variant:"detail",label:"Excellent (90-100)"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:85,variant:"detail",label:"Good (80-89)"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:75,variant:"detail",label:"Fair (70-79)"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:65,variant:"detail",label:"Poor (60-69)"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:45,variant:"detail",label:"Critical (0-59)"})})]})})},c={render:()=>e.jsxs(g,{size:"middle",children:[e.jsx(r,{score:95}),e.jsx(r,{score:85}),e.jsx(r,{score:75}),e.jsx(r,{score:65}),e.jsx(r,{score:45})]})},d={render:()=>{const a=[{title:"Name",dataIndex:"name",key:"name"},{title:"Email",dataIndex:"email",key:"email"},{title:"DashboardPro Score",dataIndex:"dashboardScore",key:"dashboardScore",render:s=>e.jsx(r,{score:s})},{title:"Custom Score",dataIndex:"customScore",key:"customScore",render:s=>e.jsx(r,{score:s})}],t=[{key:"1",name:"John Smith",email:"john@example.com",dashboardScore:95,customScore:88},{key:"2",name:"Jane Doe",email:"jane@example.com",dashboardScore:82,customScore:76},{key:"3",name:"Bob Wilson",email:"bob@example.com",dashboardScore:67,customScore:71},{key:"4",name:"Alice Brown",email:"alice@example.com",dashboardScore:45,customScore:52}];return e.jsx(ae,{columns:a,dataSource:t,pagination:!1})}},m={args:{score:75,variant:"detail",label:"Custom Color",colorMap:{fair:"#8b5cf6"}}},p={args:{score:80,variant:"detail",showValue:!1,label:"Progress Only"}},u={render:()=>e.jsxs(g,{size:"large",children:[e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:0,variant:"detail",label:"Zero"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:100,variant:"detail",label:"Perfect"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:-10,variant:"detail",label:"Below Zero (clamped)"})}),e.jsx("div",{style:{textAlign:"center"},children:e.jsx(r,{score:150,variant:"detail",label:"Above 100 (clamped)"})})]})};var f,j,k;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    score: 85
  }
}`,...(k=(j=n.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var A,C,T;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    score: 92,
    variant: 'detail',
    label: 'DashboardPro Score'
  }
}`,...(T=(C=l.parameters)==null?void 0:C.docs)==null?void 0:T.source}}};var G,w,D;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <Space direction="vertical" size="large" align="center">
      <Space size="large">
        <div style={{
        textAlign: 'center'
      }}>
          <ScoreGauge score={95} variant="detail" label="Excellent (90-100)" />
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <ScoreGauge score={85} variant="detail" label="Good (80-89)" />
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <ScoreGauge score={75} variant="detail" label="Fair (70-79)" />
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <ScoreGauge score={65} variant="detail" label="Poor (60-69)" />
        </div>
        <div style={{
        textAlign: 'center'
      }}>
          <ScoreGauge score={45} variant="detail" label="Critical (0-59)" />
        </div>
      </Space>
    </Space>
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var _,I,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Space size="middle">
      <ScoreGauge score={95} />
      <ScoreGauge score={85} />
      <ScoreGauge score={75} />
      <ScoreGauge score={65} />
      <ScoreGauge score={45} />
    </Space>
}`,...(q=(I=c.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var N,P,z;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const columns = [{
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    }, {
      title: 'Email',
      dataIndex: 'email',
      key: 'email'
    }, {
      title: 'DashboardPro Score',
      dataIndex: 'dashboardScore',
      key: 'dashboardScore',
      render: (score: number) => <ScoreGauge score={score} />
    }, {
      title: 'Custom Score',
      dataIndex: 'customScore',
      key: 'customScore',
      render: (score: number) => <ScoreGauge score={score} />
    }];
    const data = [{
      key: '1',
      name: 'John Smith',
      email: 'john@example.com',
      dashboardScore: 95,
      customScore: 88
    }, {
      key: '2',
      name: 'Jane Doe',
      email: 'jane@example.com',
      dashboardScore: 82,
      customScore: 76
    }, {
      key: '3',
      name: 'Bob Wilson',
      email: 'bob@example.com',
      dashboardScore: 67,
      customScore: 71
    }, {
      key: '4',
      name: 'Alice Brown',
      email: 'alice@example.com',
      dashboardScore: 45,
      customScore: 52
    }];
    return <Table columns={columns} dataSource={data} pagination={false} />;
  }
}`,...(z=(P=d.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var V,E,B;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    score: 75,
    variant: 'detail',
    label: 'Custom Color',
    colorMap: {
      fair: '#8b5cf6' // purple
    }
  }
}`,...(B=(E=m.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var M,W,$;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    score: 80,
    variant: 'detail',
    showValue: false,
    label: 'Progress Only'
  }
}`,...($=(W=p.parameters)==null?void 0:W.docs)==null?void 0:$.source}}};var F,J,O;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Space size="large">
      <div style={{
      textAlign: 'center'
    }}>
        <ScoreGauge score={0} variant="detail" label="Zero" />
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <ScoreGauge score={100} variant="detail" label="Perfect" />
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <ScoreGauge score={-10} variant="detail" label="Below Zero (clamped)" />
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <ScoreGauge score={150} variant="detail" label="Above 100 (clamped)" />
      </div>
    </Space>
}`,...(O=(J=u.parameters)==null?void 0:J.docs)==null?void 0:O.source}}};const ar=["Default","DetailVariant","AllTiers","TableVariants","InTableContext","CustomColors","NoValue","EdgeCases"];export{i as AllTiers,m as CustomColors,n as Default,l as DetailVariant,u as EdgeCases,d as InTableContext,p as NoValue,c as TableVariants,ar as __namedExportsOrder,rr as default};
