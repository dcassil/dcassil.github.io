import{j as a}from"./index-DW36zwiR.js";import{r as s}from"./index-3dRrDZpt.js";import{P as fe,F as be}from"./Table-SkDg8quY.js";import{C as ye}from"./index-CrSsfzOz.js";import{S as te}from"./index-Er0U-C2d.js";import{I as Se}from"./index-DvCoQ_F0.js";import{R as xe}from"./SearchOutlined-CQ_E22YT.js";import{T as re}from"./index-L6wlpHhd.js";import{B as $}from"./Button-CD1C6wFN.js";import"./index-CK2X06xH.js";import"./index-D_r6Hzab.js";import"./pickAttrs-BoNuQqbq.js";import"./index-DN4JzdW2.js";import"./useCSSVarCls-C-i1Ct9Z.js";import"./ContextIsolator-DDVSnbXG.js";import"./statusUtils-DRtxZvD-.js";import"./Overflow-K8xR2NA3.js";import"./KeyCode-C3ZfcqzQ.js";import"./PurePanel-hUbDQSVi.js";import"./index-Dx-r7iEd.js";import"./useLocale-DSvjYROO.js";import"./useVariants-DLc3tDVL.js";import"./move-COWD65OB.js";import"./useIcons-Y_qoH6rg.js";import"./CheckOutlined-DKS7EKkq.js";import"./CloseCircleFilled-LaHi0VlH.js";import"./CloseOutlined--kFZyjTz.js";import"./DownOutlined-CJFB344f.js";import"./LoadingOutlined-BTXlvHVG.js";import"./index-DgK-gI2K.js";import"./useBubbleLock-BswOdbvZ.js";import"./index-BB8AawkH.js";import"./client-DxV0RFaf.js";import"./index-CdcenAOp.js";import"./dropdown-_HmQ0U4N.js";import"./EllipsisOutlined-DU8baF8F.js";import"./TextArea-qr4UwjdY.js";import"./index-B5t-g__n.js";import"./index-BX-V-Lkp.js";import"./colors-C1ds9sb8.js";import"./collapse-BbEVqHco.js";import"./index-uaP_ALsF.js";import"./useForm-DHn9R1Hs.js";import"./useBreakpoint-C54YwIUT.js";import"./useForceUpdate-C6vOvI_Y.js";import"./extendsObject-78o_rR5W.js";import"./Input-DkNz1ASO.js";import"./Skeleton-K1i2PQht.js";import"./EyeOutlined-xI5IIAay.js";import"./ColorPresets-Bwdqqxj7.js";import"./useClosable-Cb5SP0VC.js";const B=768,we=()=>{const[o,r]=s.useState(typeof window<"u"?window.innerWidth<B:!1);return s.useEffect(()=>{if(typeof window>"u")return;const i=()=>r(window.innerWidth<B);return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),o};function ne({data:o,columns:r,total:i,currentPage:S,pageSize:N,onPageChange:w,rowKey:g,renderCard:f}){const _=(l,p)=>{const M=g?typeof g=="function"?g(l):l[g]:p;return a.jsx(ye,{className:"cl-data-table__card",size:"small",children:r.map(n=>{const b=l[n.dataIndex],d=n.render?n.render(b,l,p):String(b??""),x=d&&typeof d=="object"&&"children"in d?d.children:d;return a.jsxs("div",{className:"cl-data-table__card-row",children:[a.jsx("span",{className:"cl-data-table__card-label",children:typeof n.title=="function"?n.title({}):n.title}),a.jsx("span",{className:"cl-data-table__card-value",children:x})]},String(n.dataIndex))})},String(M))};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"cl-data-table__cards",children:o.map((l,p)=>f?f(l,p):_(l,p))}),a.jsx(fe,{current:S,pageSize:N,total:i,onChange:w,simple:!0,style:{textAlign:"center"}})]})}ne.__docgenInfo={description:"",methods:[],displayName:"MobileCardView",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnType",elements:[{name:"T"}],raw:"ColumnType<T>"}],raw:"ColumnType<T>[]"},description:""},total:{required:!0,tsType:{name:"number"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number, size: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"},{type:{name:"number"},name:"size"}],return:{name:"void"}}},description:""},rowKey:{required:!1,tsType:{name:"union",raw:"string | ((record: T) => string | number) | undefined",elements:[{name:"string"},{name:"unknown"},{name:"undefined"}]},description:""},renderCard:{required:!1,tsType:{name:"union",raw:"((record: T, index: number) => ReactNode) | undefined",elements:[{name:"unknown"},{name:"undefined"}]},description:""}}};const{Search:Ce}=Se;function oe(o){const{dataSource:r,columns:i,searchable:S=!0,searchPlaceholder:N="Search...",defaultPageSize:w=10,showSizeChanger:g=!0,responsive:f=!0,mobileLayout:_="cards",mobileColumns:l,renderMobileCard:p,className:M,...n}=o,[b,d]=s.useState(""),[x,ie]=s.useState({}),[C,se]=s.useState({}),[q,le]=s.useState(1),[T,ce]=s.useState(w),v=we(),U=f&&v&&_==="cards",z=s.useMemo(()=>!r||!b?r??[]:r.filter(t=>Object.values(t).some(e=>e!=null&&String(e).toLowerCase().includes(b.toLowerCase()))),[r,b]),de=s.useMemo(()=>{const t=(q-1)*T;return z.slice(t,t+T)},[z,q,T]),me=s.useMemo(()=>{const t=l??i.filter(e=>!("children"in e)&&!!e.dataIndex).slice(0,5).map(e=>String(e.dataIndex));return i.filter(e=>!("children"in e)&&t.includes(String(e.dataIndex??"")))},[i,l]),ue=s.useMemo(()=>i.map(t=>{if("children"in t)return t;const e=t,m=String(e.key??e.dataIndex??""),h={...e};return x[m]&&(h.filteredValue=x[m]),C.columnKey===m&&C.order&&(h.sortOrder=C.order),e.dataIndex&&(h.onFilter=(y,c)=>String(c[e.dataIndex])===String(y),h.sorter=(y,c)=>{const u=y[e.dataIndex],A=c[e.dataIndex];return u==null?1:A==null?-1:typeof u=="number"&&typeof A=="number"?u-A:String(u).localeCompare(String(A))}),h}),[i,x,C]),pe=(t,e,m,h)=>{var y;if(ie(e??{}),m&&!Array.isArray(m)){const c=m,u={};c.columnKey&&(u.columnKey=String(c.columnKey)),(c.order==="ascend"||c.order==="descend")&&(u.order=c.order),se(u)}(y=n.onChange)==null||y.call(n,t,e,m,h)},he=["cl-data-table",f&&"cl-data-table--responsive",U&&"cl-data-table--cards",M].filter(Boolean).join(" "),ge=(t,e)=>v?`${e[0]}-${e[1]} of ${t}`:`${e[0]}-${e[1]} of ${t} items`;return a.jsx("div",{className:he,children:a.jsxs(te,{direction:"vertical",size:"middle",style:{width:"100%"},children:[S&&a.jsx("div",{className:"cl-data-table__search",children:a.jsx(Ce,{placeholder:N,allowClear:!0,enterButton:a.jsx(xe,{}),size:"large",onSearch:d,onChange:t=>d(t.target.value)})}),U?a.jsx(ne,{data:de,columns:me,total:z.length,currentPage:q,pageSize:T,onPageChange:(t,e)=>{le(t),ce(e)},rowKey:n.rowKey,renderCard:p}):a.jsx(be,{...n,dataSource:z,columns:ue,onChange:pe,scroll:f?{x:"max-content"}:n.scroll??{x:"max-content"},pagination:n.pagination===!1?!1:{defaultPageSize:w,showSizeChanger:!v&&g,showTotal:ge,simple:v,...typeof n.pagination=="object"?n.pagination:{}}})]})})}oe.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{dataSource:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:`Array of data objects to display in the table.
Each object should have a unique key field (specified by \`rowKey\`).

@example
dataSource={[
  { id: 1, name: 'John', email: 'john@example.com' },
  { id: 2, name: 'Jane', email: 'jane@example.com' },
]}`},columns:{required:!0,tsType:{name:"TableColumnsType",elements:[{name:"T"}],raw:"TableColumnsType<T>"},description:`Column configuration for the table.
Follows Ant Design's TableColumnsType format.
Columns are automatically enhanced with sorting capabilities.

@example
columns={[
  { title: 'Name', dataIndex: 'name', key: 'name' },
  { title: 'Email', dataIndex: 'email', key: 'email' },
  { 
    title: 'Actions', 
    key: 'actions',
    render: (_, record) => <Button onClick={() => edit(record)}>Edit</Button>
  },
]}`},searchable:{required:!1,tsType:{name:"boolean"},description:`Enable/disable the search input above the table.
When enabled, searches across all visible column values.

@default true`},searchPlaceholder:{required:!1,tsType:{name:"string"},description:`Placeholder text for the search input.

@default 'Search...'`},defaultPageSize:{required:!1,tsType:{name:"number"},description:`Default number of items per page.

@default 10`},showSizeChanger:{required:!1,tsType:{name:"boolean"},description:`Show the page size changer in pagination.
Automatically hidden on mobile for cleaner UX.

@default true`},responsive:{required:!1,tsType:{name:"boolean"},description:`Enable responsive layout behavior.
When true, the table adapts to mobile viewports:
- Card view instead of table (if mobileLayout='cards')
- Horizontal scroll (if mobileLayout='table')
- Simplified pagination

@default true`},mobileLayout:{required:!1,tsType:{name:"union",raw:"'table' | 'cards' | 'list'",elements:[{name:"literal",value:"'table'"},{name:"literal",value:"'cards'"},{name:"literal",value:"'list'"}]},description:"Layout mode for mobile viewports (<768px).\n\n- `'table'` - Standard table with horizontal scroll\n- `'cards'` - Each row as a card with key-value pairs (recommended)\n- `'list'` - Simplified list view\n\n@default 'cards'"},mobileColumns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:`Columns to display in mobile card view.
Specify an array of dataIndex values to include.
If not provided, first 5 columns are shown.

@example
mobileColumns={['name', 'email', 'status']}`},renderMobileCard:{required:!1,tsType:{name:"signature",type:"function",raw:"(record: T, index: number) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"record"},{type:{name:"number"},name:"index"}],return:{name:"ReactNode"}}},description:`Custom render function for mobile cards.
Use for complete control over mobile card appearance.

@param record - The data record for this row
@param index - The index of this row in the current page
@returns ReactNode to render as the card

@example
renderMobileCard={(user, index) => (
  <Card key={user.id}>
    <Card.Meta title={user.name} description={user.email} />
    <Button onClick={() => edit(user)}>Edit</Button>
  </Card>
)}`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name(s) to apply to the root element."}},composes:["Omit"]};const K=[{id:"1",name:"John Doe",email:"john.doe@example.com",role:"Admin",status:"active",createdAt:"2024-01-15"},{id:"2",name:"Jane Smith",email:"jane.smith@example.com",role:"User",status:"active",createdAt:"2024-02-20"},{id:"3",name:"Bob Johnson",email:"bob.johnson@example.com",role:"Editor",status:"inactive",createdAt:"2024-01-10"},{id:"4",name:"Alice Williams",email:"alice.williams@example.com",role:"User",status:"pending",createdAt:"2024-03-05"},{id:"5",name:"Charlie Brown",email:"charlie.brown@example.com",role:"Admin",status:"active",createdAt:"2024-02-01"},{id:"6",name:"Diana Prince",email:"diana.prince@example.com",role:"Editor",status:"active",createdAt:"2024-01-25"},{id:"7",name:"Edward Norton",email:"edward.norton@example.com",role:"User",status:"inactive",createdAt:"2024-02-15"},{id:"8",name:"Fiona Apple",email:"fiona.apple@example.com",role:"User",status:"active",createdAt:"2024-03-10"}],D=[{title:"Name",dataIndex:"name",key:"name",sorter:!0},{title:"Email",dataIndex:"email",key:"email"},{title:"Role",dataIndex:"role",key:"role",filters:[{text:"Admin",value:"Admin"},{text:"Editor",value:"Editor"},{text:"User",value:"User"}]},{title:"Status",dataIndex:"status",key:"status",render:o=>{const r={active:"green",inactive:"red",pending:"orange"};return a.jsx(re,{color:r[o]||"default",children:o.toUpperCase()})},filters:[{text:"Active",value:"active"},{text:"Inactive",value:"inactive"},{text:"Pending",value:"pending"}]},{title:"Created",dataIndex:"createdAt",key:"createdAt",sorter:!0},{title:"Actions",key:"actions",render:()=>a.jsxs(te,{children:[a.jsx($,{size:"small",children:"Edit"}),a.jsx($,{size:"small",danger:!0,children:"Delete"})]})}],Te=[{id:"1",name:"Laptop",category:"Electronics",price:999.99,stock:15,description:"High-performance laptop"},{id:"2",name:"Mouse",category:"Accessories",price:29.99,stock:50,description:"Wireless mouse"},{id:"3",name:"Keyboard",category:"Accessories",price:79.99,stock:30,description:"Mechanical keyboard"},{id:"4",name:"Monitor",category:"Electronics",price:299.99,stock:20,description:"27-inch 4K monitor"},{id:"5",name:"Headphones",category:"Accessories",price:149.99,stock:25,description:"Noise-cancelling headphones"}],ve=[{title:"Name",dataIndex:"name",key:"name",sorter:!0},{title:"Category",dataIndex:"category",key:"category",filters:[{text:"Electronics",value:"Electronics"},{text:"Accessories",value:"Accessories"}]},{title:"Price",dataIndex:"price",key:"price",sorter:!0,render:o=>`$${o.toFixed(2)}`},{title:"Stock",dataIndex:"stock",key:"stock",sorter:!0,render:o=>a.jsx(re,{color:o<20?"red":"green",children:o})},{title:"Description",dataIndex:"description",key:"description"}],Ca={title:"Table/DataTable",component:oe,parameters:{layout:"padded",docs:{description:{component:`
An enhanced table component built on Ant Design's Table with built-in search, sorting, and filtering capabilities.

## Features
- **Global Search**: Search across all columns with a single input
- **Column Sorting**: Click column headers to sort ascending/descending
- **Column Filtering**: Built-in filtering for each column
- **Pagination**: Configurable pagination with page size options
- **TypeScript Support**: Fully typed with generic support

## Usage
The DataTable component extends Ant Design's Table with additional features while maintaining full compatibility with Table props.
        `}}},tags:["autodocs"],argTypes:{dataSource:{description:"Array of data objects to display in the table",control:!1},columns:{description:"Column configuration",control:!1},searchable:{description:"Enable/disable search functionality",control:"boolean"},searchPlaceholder:{description:"Placeholder text for search input",control:"text"},defaultPageSize:{description:"Default number of items per page",control:{type:"number",min:5,max:100,step:5}},showSizeChanger:{description:"Show page size changer",control:"boolean"}}},I={args:{dataSource:K,columns:D,rowKey:"id",searchable:!0,searchPlaceholder:"Search users...",defaultPageSize:10,showSizeChanger:!0}},P={args:{dataSource:K,columns:D,rowKey:"id",searchable:!1,defaultPageSize:5,showSizeChanger:!0}},k={args:{dataSource:Te,columns:ve,rowKey:"id",searchable:!0,searchPlaceholder:"Search products...",defaultPageSize:5,showSizeChanger:!0}},j={args:{dataSource:K,columns:D,rowKey:"id",searchable:!0,defaultPageSize:5,showSizeChanger:!1}},E={args:{dataSource:Array.from({length:100},(o,r)=>{const i=["Admin","Editor","User"],S=["active","inactive","pending"];return{id:String(r+1),name:`User ${r+1}`,email:`user${r+1}@example.com`,role:i[r%3]||"User",status:S[r%3],createdAt:`2024-${String(Math.floor(r%12+1)).padStart(2,"0")}-${String(r%28+1).padStart(2,"0")}`}}),columns:D,rowKey:"id",searchable:!0,defaultPageSize:20,showSizeChanger:!0}};var L,F,R;I.parameters={...I.parameters,docs:{...(L=I.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    dataSource: userData,
    columns: userColumns,
    rowKey: 'id',
    searchable: true,
    searchPlaceholder: 'Search users...',
    defaultPageSize: 10,
    showSizeChanger: true
  }
}`,...(R=(F=I.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var W,O,J;P.parameters={...P.parameters,docs:{...(W=P.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    dataSource: userData,
    columns: userColumns,
    rowKey: 'id',
    searchable: false,
    defaultPageSize: 5,
    showSizeChanger: true
  }
}`,...(J=(O=P.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var H,V,G;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    dataSource: productData,
    columns: productColumns,
    rowKey: 'id',
    searchable: true,
    searchPlaceholder: 'Search products...',
    defaultPageSize: 5,
    showSizeChanger: true
  }
}`,...(G=(V=k.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var X,Q,Y;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    dataSource: userData,
    columns: userColumns,
    rowKey: 'id',
    searchable: true,
    defaultPageSize: 5,
    showSizeChanger: false
  }
}`,...(Y=(Q=j.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var Z,ee,ae;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    dataSource: Array.from({
      length: 100
    }, (_, i) => {
      const roles = ['Admin', 'Editor', 'User'] as const;
      const statuses = ['active', 'inactive', 'pending'] as const;
      return {
        id: String(i + 1),
        name: \`User \${i + 1}\`,
        email: \`user\${i + 1}@example.com\`,
        role: roles[i % 3] || 'User',
        status: statuses[i % 3] as User['status'],
        createdAt: \`2024-\${String(Math.floor(i % 12 + 1)).padStart(2, '0')}-\${String(i % 28 + 1).padStart(2, '0')}\`
      };
    }),
    columns: userColumns,
    rowKey: 'id',
    searchable: true,
    defaultPageSize: 20,
    showSizeChanger: true
  }
}`,...(ae=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};const Ta=["Default","WithoutSearch","ProductTable","SmallPageSize","LargeDataset"];export{I as Default,E as LargeDataset,k as ProductTable,j as SmallPageSize,P as WithoutSearch,Ta as __namedExportsOrder,Ca as default};
