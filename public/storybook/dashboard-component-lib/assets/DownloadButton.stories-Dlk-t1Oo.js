import{j as e}from"./index-DW36zwiR.js";import{r as B}from"./index-3dRrDZpt.js";import{B as V}from"./Button-BqbH_mOF.js";import{R as G}from"./DownloadOutlined-DsFtUyf_.js";import{T as Q}from"./index-BX-V-Lkp.js";import{S as X}from"./index-Er0U-C2d.js";import"./index-CK2X06xH.js";import"./Button-CD1C6wFN.js";import"./index-D_r6Hzab.js";import"./statusUtils-DRtxZvD-.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./LoadingOutlined-BTXlvHVG.js";import"./ColorPresets-Bwdqqxj7.js";import"./ContextIsolator-DDVSnbXG.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./colors-C1ds9sb8.js";const Y=768,t=({href:n,filename:a,data:d,onClick:h,children:D,iconOnlyMobile:w=!1,className:A,...J})=>{const[W,_]=B.useState(!1);B.useEffect(()=>{if(!w)return;const l=()=>{_(window.innerWidth<Y)};return l(),window.addEventListener("resize",l),()=>window.removeEventListener("resize",l)},[w]);const P=async l=>{if(h&&h(l),n){const o=document.createElement("a");o.href=n,a&&(o.download=a),document.body.appendChild(o),o.click(),document.body.removeChild(o)}else if(d){const o=typeof d=="string"?new Blob([d],{type:"text/plain"}):d,b=URL.createObjectURL(o),r=document.createElement("a");r.href=b,r.download=a||"download",document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(b)}},H=["cl-download-button",A].filter(Boolean).join(" "),f=w&&W,K=f?null:D||"Download",g=f?a||D||"Download":"",x=e.jsx(V,{className:H,icon:e.jsx(G,{}),onClick:P,...J,children:K});return f&&g?e.jsx(Q,{title:g,children:x}):x};t.__docgenInfo={description:"",methods:[],displayName:"DownloadButton",props:{href:{required:!1,tsType:{name:"string"},description:"URL to download from"},filename:{required:!1,tsType:{name:"string"},description:"Filename for the download"},data:{required:!1,tsType:{name:"union",raw:"string | Blob",elements:[{name:"string"},{name:"Blob"}]},description:"Data to download (string or Blob)"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.MouseEvent<HTMLElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLElement>",elements:[{name:"HTMLElement"}]},name:"e"}],return:{name:"void"}}},description:"Click handler (called before download)"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:'Button text (default: "Download")'},iconOnlyMobile:{required:!1,tsType:{name:"boolean"},description:"Show only icon on mobile (tooltip will show filename)",defaultValue:{value:"false",computed:!1}}},composes:["Omit"]};const fe={title:"Input/DownloadButton",component:t,parameters:{layout:"padded",docs:{description:{component:`
A specialized button component for downloading files.

## Features
- **URL Download**: Download files from a URL
- **Data Download**: Download data as a file (string or Blob)
- **Custom Filename**: Specify the download filename
- **Icon**: Includes download icon by default

## Usage
Use DownloadButton to trigger file downloads. Provide either an \`href\` (URL) or \`data\` (string/Blob) prop.
        `}}},tags:["autodocs"],argTypes:{href:{description:"URL to download from",control:"text"},filename:{description:"Filename for the download",control:"text"},children:{description:'Button text (default: "Download")',control:"text"}}},s={args:{children:"Download"}},i={args:{href:"https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",filename:"document.pdf",children:"Download PDF"}},c={args:{data:"This is the file content that will be downloaded.",filename:"example.txt",children:"Download Text File"}},m={render:()=>{const n=JSON.stringify({name:"Example",value:123},null,2),a=new Blob([n],{type:"application/json"});return e.jsx(t,{data:a,filename:"data.json",children:"Download JSON"})}},p={render:()=>{const n=()=>{console.log("Download initiated")};return e.jsx(t,{data:"Custom download content",filename:"custom.txt",onClick:n,children:"Download with Logging"})}},u={render:()=>e.jsxs(X,{children:[e.jsx(t,{size:"small",data:"Small download",filename:"small.txt",children:"Small"}),e.jsx(t,{size:"middle",data:"Middle download",filename:"middle.txt",children:"Middle"}),e.jsx(t,{size:"large",data:"Large download",filename:"large.txt",children:"Large"})]})};var y,S,R;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Download'
  }
}`,...(R=(S=s.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var L,j,E;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    href: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    filename: 'document.pdf',
    children: 'Download PDF'
  }
}`,...(E=(j=i.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var T,v,C;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    data: 'This is the file content that will be downloaded.',
    filename: 'example.txt',
    children: 'Download Text File'
  }
}`,...(C=(v=c.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var M,U,N;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => {
    const jsonData = JSON.stringify({
      name: 'Example',
      value: 123
    }, null, 2);
    const blob = new Blob([jsonData], {
      type: 'application/json'
    });
    return <DownloadButton data={blob} filename="data.json">
        Download JSON
      </DownloadButton>;
  }
}`,...(N=(U=m.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var O,z,I;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const handleDownload = () => {
      console.log('Download initiated');
    };
    return <DownloadButton data="Custom download content" filename="custom.txt" onClick={handleDownload}>
        Download with Logging
      </DownloadButton>;
  }
}`,...(I=(z=p.parameters)==null?void 0:z.docs)==null?void 0:I.source}}};var k,F,q;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <Space>
      <DownloadButton size="small" data="Small download" filename="small.txt">
        Small
      </DownloadButton>
      <DownloadButton size="middle" data="Middle download" filename="middle.txt">
        Middle
      </DownloadButton>
      <DownloadButton size="large" data="Large download" filename="large.txt">
        Large
      </DownloadButton>
    </Space>
}`,...(q=(F=u.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};const he=["Default","DownloadFromURL","DownloadText","DownloadJSON","WithCustomAction","Sizes"];export{s as Default,i as DownloadFromURL,m as DownloadJSON,c as DownloadText,u as Sizes,p as WithCustomAction,he as __namedExportsOrder,fe as default};
