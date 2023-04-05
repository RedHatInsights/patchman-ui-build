(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[513],{92607:(e,t,a)=>{"use strict";a.d(t,{BJ:()=>i,oi:()=>f,x:()=>r,y5:()=>m});var r,i,n=a(70655),s=a(43297),l=a(12455),o=a(38296),d=a(1774),c=a(80164),u=a(62472),p=a(84709);!function(e){e.text="text",e.date="date",e.datetimeLocal="datetime-local",e.email="email",e.month="month",e.number="number",e.password="password",e.search="search",e.tel="tel",e.time="time",e.url="url"}(r||(r={})),function(e){e.default="default",e.plain="plain"}(i||(i={}));class m extends s.Component{constructor(e){super(e),this.inputRef=s.createRef(),this.observer=()=>{},this.handleChange=e=>{this.props.onChange&&this.props.onChange(e.currentTarget.value,e)},this.handleResize=()=>{const e=this.props.innerRef||this.inputRef;e&&e.current&&(0,c.fi)(e.current,String(this.props.value))},this.restoreText=()=>{const e=this.props.innerRef||this.inputRef;e.current.value=String(this.props.value),e.current.scrollLeft=e.current.scrollWidth},this.onFocus=e=>{const{isLeftTruncated:t,onFocus:a}=this.props;t&&this.restoreText(),a&&a(e)},this.onBlur=e=>{const{isLeftTruncated:t,onBlur:a}=this.props;t&&this.handleResize(),a&&a(e)},this.sanitizeInputValue=e=>"string"==typeof e?e.replace(/\n/g," "):e,e.id||e["aria-label"]||e["aria-labelledby"]||console.error("Text input:","Text input requires either an id or aria-label to be specified"),this.state={ouiaStateId:(0,u.ql)(m.displayName)}}componentDidMount(){if(this.props.isLeftTruncated){const e=this.props.innerRef||this.inputRef;this.observer=(0,p.p)(e.current,this.handleResize),this.handleResize()}}componentWillUnmount(){this.props.isLeftTruncated&&this.observer()}render(){const e=this.props,{innerRef:t,className:a,type:r,value:i,validated:c,onChange:p,onFocus:m,onBlur:h,isLeftTruncated:b,isReadOnly:v,readOnly:C,readOnlyVariant:T,isRequired:y,isDisabled:g,isIconSprite:x,iconVariant:E,customIconUrl:N,customIconDimensions:R,ouiaId:I,ouiaSafe:w}=e,S=(0,n.__rest)(e,["innerRef","className","type","value","validated","onChange","onFocus","onBlur","isLeftTruncated","isReadOnly","readOnly","readOnlyVariant","isRequired","isDisabled","isIconSprite","iconVariant","customIconUrl","customIconDimensions","ouiaId","ouiaSafe"]),O={};return N&&(O.backgroundImage=`url('${N}')`),R&&(O.backgroundSize=R),s.createElement("input",Object.assign({},S,{onFocus:this.onFocus,onBlur:this.onBlur,className:(0,o.css)(l.default.formControl,x&&l.default.modifiers.iconSprite,"plain"===T&&l.default.modifiers.plain,c===d.LD.success&&l.default.modifiers.success,c===d.LD.warning&&l.default.modifiers.warning,(E&&"search"!==E||N)&&l.default.modifiers.icon,E&&l.default.modifiers[E],a),onChange:this.handleChange,type:r,value:this.sanitizeInputValue(i),"aria-invalid":S["aria-invalid"]?S["aria-invalid"]:c===d.LD.error,required:y,disabled:g,readOnly:!!T||v||C,ref:t||this.inputRef},(N||R)&&{style:O},(0,u.dp)(f.displayName,void 0!==I?I:this.state.ouiaStateId,w)))}}m.displayName="TextInputBase",m.defaultProps={"aria-label":null,className:"",isRequired:!1,validated:"default",isDisabled:!1,isReadOnly:!1,isIconSprite:!1,type:r.text,isLeftTruncated:!1,onChange:()=>{},ouiaSafe:!0};const f=s.forwardRef(((e,t)=>s.createElement(m,Object.assign({},e,{innerRef:t}))));f.displayName="TextInput"},84709:(e,t,a)=>{"use strict";a.d(t,{p:()=>i});var r=a(80164);const i=(e,t,a=!0)=>{let i;if(r.Nq){const{ResizeObserver:r}=window;if(e&&r){const n=new r((e=>{a?window.requestAnimationFrame((()=>{Array.isArray(e)&&e.length>0&&t()})):Array.isArray(e)&&e.length>0&&t()}));n.observe(e),i=()=>n.unobserve(e)}else window.addEventListener("resize",t),i=()=>window.removeEventListener("resize",t)}return()=>{i&&i()}}},43047:(e,t,a)=>{"use strict";a.d(t,{$O:()=>n,MX:()=>i,ZP:()=>s});var r=a(40400);const i={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},n=(0,r.IU)(i),s=n},57994:(e,t,a)=>{"use strict";a.r(t),a.d(t,{ActionsColumn:()=>i.k,BodyCell:()=>s.W,BodyWrapper:()=>l.e,Caption:()=>se,CollapseColumn:()=>o.E,DraggableCell:()=>d.D,EditableSelectInputCell:()=>h,EditableTextCell:()=>v,ExpandableRowContent:()=>C.G,FavoritesCell:()=>K.n,HeaderCell:()=>y.q,HeaderCellInfoWrapper:()=>g.$,InnerScrollContainer:()=>de,OuterScrollContainer:()=>oe,RowSelectVariant:()=>E.$,RowWrapper:()=>x.e,SelectColumn:()=>E.F,SortByDirection:()=>N.B,SortColumn:()=>N.H,Table:()=>r.i,TableBody:()=>n.R,TableComposable:()=>Y.X,TableComposableContext:()=>Y.d,TableContext:()=>J.X,TableGridBreakpoint:()=>Z.L,TableHeader:()=>T.x,TableText:()=>R.cE,TableTextVariant:()=>R.Dk,TableVariant:()=>Z.B,Tbody:()=>te.p,Td:()=>ie.Td,Th:()=>re.Th,Thead:()=>ee.h,Tr:()=>ae.Tr,TreeRowWrapper:()=>Q.k,Visibility:()=>q.E,WrapModifier:()=>R.Rl,applyCellEdits:()=>X.V6,breakWord:()=>L,calculateColumns:()=>U.R,cancelCellEdits:()=>X.Pj,capitalize:()=>X.kC,cellActions:()=>S.j,cellWidth:()=>O.d,classNames:()=>q.A,collapsible:()=>A.m5,compoundExpand:()=>F.z,defaultTitle:()=>G.o,editable:()=>_.A,emptyCol:()=>M.tL,emptyTD:()=>M.m6,expandable:()=>A.zW,expandedRow:()=>A.L1,favoritable:()=>$.n,fitContent:()=>V,getErrorTextByValidator:()=>X.GD,headerCol:()=>j,info:()=>P.u,isRowExpanded:()=>X.P6,mapOpenedRows:()=>U.A,mapProps:()=>M.jM,nowrap:()=>z,parentId:()=>M.M3,scopeColTransformer:()=>M.UD,selectable:()=>I.e,sortable:()=>w.p,sortableFavorites:()=>w.$,textCenter:()=>k,toCamel:()=>X.fZ,treeRow:()=>H.G,truncate:()=>B,validateCellEdits:()=>X.Ni,wrappable:()=>W});var r=a(3351),i=a(55656),n=a(22860),s=a(59197),l=a(89783),o=a(99975),d=a(25691),c=a(43297),u=a(38296),p=a(54680),m=a(84115),f=a(11924);const h=({value:e,rowIndex:t,cellIndex:a,onSelect:r=(()=>{}),clearSelection:i,isOpen:n=!1,onToggle:s=(()=>{}),selections:l=[""],options:o=[],props:d})=>{const h=c.createElement(p.P,Object.assign({},d.editableSelectProps,{onSelect:(e,i,n)=>{r(i,e,t,a,n)}},i&&{onClear:e=>{i(t,a,e)}},{isOpen:n,onToggle:s,selections:l}),o);return c.createElement(c.Fragment,null,c.createElement("div",{className:m.default.inlineEditValue},Array.isArray(e)?e.join(", "):e),c.createElement("div",{className:m.default.inlineEditInput},h,c.createElement("div",{className:(0,u.css)(f.default.formHelperText,f.default.modifiers.error),"aria-live":"polite"},d.errorText)))};h.displayName="EditableSelectInputCell";var b=a(92607);const v=({value:e,rowIndex:t,cellIndex:a,props:r,handleTextInputChange:i,inputAriaLabel:n,isDisabled:s=!1})=>c.createElement(c.Fragment,null,c.createElement("div",{className:m.default.inlineEditValue},e),c.createElement("div",{className:m.default.inlineEditInput},c.createElement(b.oi,{isDisabled:s,value:void 0!==r.editableValue?r.editableValue:e,validated:!1!==r.isValid?"default":"error",type:"text",onChange:(e,r)=>{i(e,r,t,a)},"aria-label":n}),c.createElement("div",{className:(0,u.css)(f.default.formHelperText,f.default.modifiers.error),"aria-live":"polite"},r.errorText)));v.displayName="EditableTextCell";var C=a(2613),T=a(6934),y=a(90572),g=a(93968),x=a(55573),E=a(78466),N=a(48585),R=a(68065),I=a(9268),w=a(7732),S=a(24562),O=a(1082),_=a(90294),D=a(78632);const L=()=>({className:D.default.modifiers.breakWord}),V=()=>({className:D.default.modifiers.fitContent}),z=()=>({className:D.default.modifiers.nowrap}),B=()=>({className:D.default.modifiers.truncate}),W=()=>({className:D.default.modifiers.wrap}),k=()=>({textCenter:!0});var A=a(62480),F=a(56869);const j=(e="simple-node")=>(t,{rowIndex:a}={})=>{const r="object"==typeof t?t.title:t;return{component:"th",children:c.createElement("div",{id:`${e}${a}`},r)}};var q=a(22546),P=a(86379),$=a(14404),H=a(1522),M=a(95352),U=a(53747),G=a(27923),X=a(8792),Z=a(75863),J=a(62990),K=a(77823),Q=a(71305),Y=a(26479),ee=a(58240),te=a(3134),ae=a(86151),re=a(10951),ie=a(31476),ne=a(70655);const se=e=>{var{children:t,className:a}=e,r=(0,ne.__rest)(e,["children","className"]);return c.createElement("caption",Object.assign({className:a},r),t)};se.displayName="Caption";var le=a(25624);const oe=e=>{var{children:t,className:a}=e,r=(0,ne.__rest)(e,["children","className"]);return c.createElement("div",Object.assign({className:(0,u.css)(a,le.default.scrollOuterWrapper)},r),t)};oe.displayName="OuterScrollContainer";const de=e=>{var{children:t,className:a}=e,r=(0,ne.__rest)(e,["children","className"]);return c.createElement("div",Object.assign({className:(0,u.css)(a,le.default.scrollInnerWrapper)},r),t)};de.displayName="InnerScrollContainer"},93818:()=>{},94498:()=>{},28992:()=>{},30187:()=>{},90479:()=>{},78752:()=>{},21626:()=>{},91993:()=>{},36974:()=>{},54994:()=>{},44690:()=>{},37494:()=>{}}]);
//# sourceMappingURL=../sourcemaps/513.0e26ad2f2cf010b4230e8d52c2a22ede.js.map