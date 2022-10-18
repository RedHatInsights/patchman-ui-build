"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[2436],{61398:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Backdrop=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(38296),i=l.__importDefault(t(19993));a.Backdrop=e=>{var{children:a=null,className:t=""}=e,n=l.__rest(e,["children","className"]);return o.createElement("div",Object.assign({},n,{className:r.css(i.default.backdrop,t)}),a)},a.Backdrop.displayName="Backdrop"},85991:(e,a,t)=>{a.a=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importDefault(t(44303)),i=t(38296),n=t(23053);a.a=e=>{var{children:t=null,className:s="","aria-label":c="Breadcrumb",ouiaId:d,ouiaSafe:m=!0}=e,p=l.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const u=n.useOUIAProps(a.a.displayName,d,m);return o.createElement("nav",Object.assign({},p,{"aria-label":c,className:i.css(r.default.breadcrumb,s)},u),o.createElement("ol",{className:r.default.breadcrumbList},o.Children.map(t,((e,a)=>{const t=a>0;return o.isValidElement(e)?o.cloneElement(e,{showDivider:t}):e}))))},a.a.displayName="Breadcrumb"},49489:(e,a,t)=>{a.g=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importDefault(t(95511)),i=l.__importDefault(t(44303)),n=t(38296);a.g=e=>{var{children:a=null,className:t="",to:s,isActive:c=!1,isDropdown:d=!1,showDivider:m,target:p,component:u="a",render:f}=e,b=l.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const _=u,h=c?"page":void 0,y=n.css(i.default.breadcrumbLink,c&&i.default.modifiers.current);return o.createElement("li",Object.assign({},b,{className:n.css(i.default.breadcrumbItem,t)}),m&&o.createElement("span",{className:i.default.breadcrumbItemDivider},o.createElement(r.default,null)),"button"===u&&o.createElement("button",{className:y,"aria-current":h,type:"button"},a),d&&o.createElement("span",{className:n.css(i.default.breadcrumbDropdown)},a),f&&f({className:y,ariaCurrent:h}),s&&!f&&o.createElement(_,{href:s,target:p,className:y,"aria-current":h},a),!s&&"button"!==u&&!d&&a)},a.g.displayName="BreadcrumbItem"},78826:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Modal=a.ModalVariant=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importStar(t(21704)),i=t(23053),n=t(38296),s=l.__importDefault(t(19993)),c=t(57674),d=t(23053);var m;(m=a.ModalVariant||(a.ModalVariant={})).small="small",m.medium="medium",m.large="large",m.default="default";class p extends o.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{const{onEscapePress:a}=this.props;e.keyCode===i.KEY_CODES.ESCAPE_KEY&&this.props.isOpen&&(a?a(e):this.props.onClose())},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:a}=this.props,t=this.getElement(a).children;for(const a of Array.from(t))a!==this.state.container&&(e?a.setAttribute("aria-hidden",""+e):a.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const a=p.currentId++,t=a+1,l=a+2;this.boxId=e.id||`pf-modal-part-${a}`,this.labelId=`pf-modal-part-${t}`,this.descriptorId=`pf-modal-part-${l}`,this.state={container:void 0,ouiaStateId:d.getDefaultOUIAId(p.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:a,"aria-label":t,"aria-labelledby":l,hasNoBodyWrapper:o,header:r}=this.props,i=this.getElement(e),c=document.createElement("div");this.setState({container:c}),i.appendChild(c),i.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?i.classList.add(n.css(s.default.backdropOpen)):i.classList.remove(n.css(s.default.backdropOpen)),this.isEmpty(a)&&this.isEmpty(t)&&this.isEmpty(l)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(t)&&this.isEmpty(l)&&(o||r)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,a=this.getElement(e);this.props.isOpen?(a.classList.add(n.css(s.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(a.classList.remove(n.css(s.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,a=this.getElement(e);this.state.container&&a.removeChild(this.state.container),a.removeEventListener("keydown",this.handleEscKeyClick,!1),a.classList.remove(n.css(s.default.backdropOpen))}render(){const e=this.props,{appendTo:a,onEscapePress:t,"aria-labelledby":n,"aria-label":s,"aria-describedby":d,bodyAriaLabel:m,bodyAriaRole:p,title:u,titleIconVariant:f,titleLabel:b,ouiaId:_,ouiaSafe:h}=e,y=l.__rest(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","bodyAriaLabel","bodyAriaRole","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe"]),{container:v}=this.state;return i.canUseDOM&&v?r.createPortal(o.createElement(c.ModalContent,Object.assign({},y,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:u,titleIconVariant:f,titleLabel:b,"aria-label":s,"aria-describedby":d,"aria-labelledby":n,bodyAriaLabel:m,bodyAriaRole:p,ouiaId:void 0!==_?_:this.state.ouiaStateId,ouiaSafe:h})),v):null}}a.Modal=p,p.displayName="Modal",p.currentId=0,p.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},80271:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBox=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(38296),i=l.__importDefault(t(62702)),n=l.__importDefault(t(56276));a.ModalBox=e=>{var{children:a,className:t="",variant:s="default",position:c,positionOffset:d,"aria-labelledby":m,"aria-label":p="","aria-describedby":u,style:f}=e,b=l.__rest(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return d&&((f=f||{})[n.default.name]=d),o.createElement("div",Object.assign({},b,{role:"dialog","aria-label":p||null,"aria-labelledby":m||null,"aria-describedby":u,"aria-modal":"true",className:r.css(i.default.modalBox,t,"top"===c&&i.default.modifiers.alignTop,"large"===s&&i.default.modifiers.lg,"small"===s&&i.default.modifiers.sm,"medium"===s&&i.default.modifiers.md),style:f}),a)},a.ModalBox.displayName="ModalBox"},66973:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxBody=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(38296),i=l.__importDefault(t(62702));a.ModalBoxBody=e=>{var{children:a=null,className:t=""}=e,n=l.__rest(e,["children","className"]);return o.createElement("div",Object.assign({},n,{className:r.css(i.default.modalBoxBody,t)}),a)},a.ModalBoxBody.displayName="ModalBoxBody"},27631:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxCloseButton=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(16396),i=l.__importDefault(t(33606));a.ModalBoxCloseButton=e=>{var{className:t="",onClose:n=(()=>{}),ouiaId:s}=e,c=l.__rest(e,["className","onClose","ouiaId"]);return o.createElement(r.Button,Object.assign({className:t,variant:"plain",onClick:n,"aria-label":"Close"},s&&{ouiaId:`${s}-${a.ModalBoxCloseButton.displayName}`},c),o.createElement(i.default,null))},a.ModalBoxCloseButton.displayName="ModalBoxCloseButton"},23788:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxDescription=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(38296),i=l.__importDefault(t(62702));a.ModalBoxDescription=e=>{var{children:a=null,className:t="",id:n=""}=e,s=l.__rest(e,["children","className","id"]);return o.createElement("div",Object.assign({},s,{id:n,className:r.css(i.default.modalBoxDescription,t)}),a)},a.ModalBoxDescription.displayName="ModalBoxDescription"},90818:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxFooter=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(38296),i=l.__importDefault(t(62702));a.ModalBoxFooter=e=>{var{children:a=null,className:t=""}=e,n=l.__rest(e,["children","className"]);return o.createElement("footer",Object.assign({},n,{className:r.css(i.default.modalBoxFooter,t)}),a)},a.ModalBoxFooter.displayName="ModalBoxFooter"},38364:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxHeader=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(38296),i=l.__importDefault(t(62702));a.ModalBoxHeader=e=>{var{children:a=null,className:t="",help:n=null}=e,s=l.__rest(e,["children","className","help"]);return o.createElement("header",Object.assign({className:r.css(i.default.modalBoxHeader,n&&i.default.modifiers.help,t)},s),n&&o.createElement(o.Fragment,null,o.createElement("div",{className:r.css(i.default.modalBoxHeaderMain)},a),o.createElement("div",{className:"pf-c-modal-box__header-help"},n)),!n&&a)},a.ModalBoxHeader.displayName="ModalBoxHeader"},76532:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxTitle=a.isVariantIcon=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importDefault(t(62702)),i=t(38296),n=l.__importDefault(t(79818)),s=t(23053),c=t(8045),d=l.__importDefault(t(35451)),m=l.__importDefault(t(84564)),p=l.__importDefault(t(19694)),u=l.__importDefault(t(31369)),f=l.__importDefault(t(36853)),b=t(23053);a.isVariantIcon=e=>["success","danger","warning","info","default"].includes(e),a.ModalBoxTitle=e=>{var{className:t="",id:_,title:h,titleIconVariant:y,titleLabel:v=""}=e,g=l.__rest(e,["className","id","title","titleIconVariant","titleLabel"]);const[O,E]=o.useState(!1),x=o.useRef(),N=v||(a.isVariantIcon(y)?`${s.capitalize(y)} alert:`:v),C={success:o.createElement(d.default,null),danger:o.createElement(m.default,null),warning:o.createElement(p.default,null),info:o.createElement(u.default,null),default:o.createElement(f.default,null)},I=!a.isVariantIcon(y)&&y;b.useIsomorphicLayoutEffect((()=>{E(x.current&&x.current.offsetWidth<x.current.scrollWidth)}),[]);const B=o.createElement("h1",Object.assign({id:_,ref:x,className:i.css(r.default.modalBoxTitle,y&&r.default.modifiers.icon,t)},g),y&&o.createElement("span",{className:i.css(r.default.modalBoxTitleIcon)},a.isVariantIcon(y)?C[y]:o.createElement(I,null)),N&&o.createElement("span",{className:i.css(n.default.screenReader)},N),o.createElement("span",{className:i.css(r.default.modalBoxTitleText)},h));return O?o.createElement(c.Tooltip,{content:h},B):B},a.ModalBoxTitle.displayName="ModalBoxTitle"},57674:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalContent=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=t(23053),i=l.__importDefault(t(62702)),n=l.__importDefault(t(66042)),s=t(38296),c=t(23053),d=t(61398),m=t(66973),p=t(27631),u=t(80271),f=t(90818),b=t(23788),_=t(38364),h=t(76532);a.ModalContent=e=>{var{children:t,className:y="",isOpen:v=!1,header:g=null,help:O=null,description:E=null,title:x="",titleIconVariant:N=null,titleLabel:C="","aria-label":I="","aria-describedby":B,"aria-labelledby":M,bodyAriaLabel:S,bodyAriaRole:j,showClose:w=!0,footer:D=null,actions:P=[],onClose:L=(()=>{}),variant:k="default",position:T,positionOffset:$,width:A=-1,boxId:V,labelId:F,descriptorId:z,disableFocusTrap:R=!1,hasNoBodyWrapper:H=!1,ouiaId:Z,ouiaSafe:W=!0}=e,K=l.__rest(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","bodyAriaLabel","bodyAriaRole","showClose","footer","actions","onClose","variant","position","positionOffset","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!v)return null;const U=g?o.createElement(_.ModalBoxHeader,{help:O},g):x&&o.createElement(_.ModalBoxHeader,{help:O},o.createElement(h.ModalBoxTitle,{title:x,titleIconVariant:N,titleLabel:C,id:F}),E&&o.createElement(b.ModalBoxDescription,{id:z},E)),G=D?o.createElement(f.ModalBoxFooter,null,D):P.length>0&&o.createElement(f.ModalBoxFooter,null,P),Y=S?"region":void 0,X=H?t:o.createElement(m.ModalBoxBody,Object.assign({"aria-label":S,role:j||Y},K,!E&&!B&&{id:z}),t),q=-1===A?{}:{width:A},J=o.createElement(u.ModalBox,Object.assign({id:V,style:q,className:s.css(y,h.isVariantIcon(N)&&i.default.modifiers[N]),variant:k,position:T,positionOffset:$,"aria-label":I,"aria-labelledby":(()=>{if(null===M)return null;const e=[];return""!==(I&&V)&&e.push(I&&V),M&&e.push(M),x&&e.push(F),e.join(" ")})(),"aria-describedby":B||(H?null:z)},c.getOUIAProps(a.ModalContent.displayName,Z,W)),w&&o.createElement(p.ModalBoxCloseButton,{onClose:L,ouiaId:Z}),U,X,G);return o.createElement(d.Backdrop,null,o.createElement(r.FocusTrap,{active:!R,focusTrapOptions:{clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"}},className:s.css(n.default.bullseye)},J))},a.ModalContent.displayName="ModalContent"},49287:(e,a,t)=>{a.r=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importDefault(t(3246)),i=t(38296),n=t(39383),s=l.__importStar(t(24936)),c=t(42319);a.r=e=>{var{children:a=null,className:t="",component:d="div",hasGutter:m,span:p=null,order:u,style:f}=e,b=l.__rest(e,["children","className","component","hasGutter","span","order","style"]);const _=[r.default.grid,p&&r.default.modifiers[`all_${p}Col`]],h=d;return Object.entries(n.DeviceSizes).forEach((([e,a])=>{const t=e,l=b[t];l&&_.push(r.default.modifiers[`all_${l}ColOn${a}`]),delete b[t]})),o.createElement(h,Object.assign({className:i.css(..._,m&&r.default.modifiers.gutter,t),style:f||u?Object.assign(Object.assign({},f),c.setBreakpointCssVars(u,s.l_grid_item_Order.name)):void 0},b),a)},a.r.displayName="Grid"},18038:(e,a,t)=>{a.P=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importDefault(t(3246)),i=t(38296),n=t(39383),s=l.__importStar(t(24936)),c=t(42319);a.P=e=>{var{children:a=null,className:t="",component:d="div",span:m=null,rowSpan:p=null,offset:u=null,order:f,style:b}=e,_=l.__rest(e,["children","className","component","span","rowSpan","offset","order","style"]);const h=[r.default.gridItem,m&&r.default.modifiers[`${m}Col`],p&&r.default.modifiers[`${p}Row`],u&&r.default.modifiers[`offset_${u}Col`]],y=d;return Object.entries(n.DeviceSizes).forEach((([e,a])=>{const t=e,l=`${t}RowSpan`,o=`${t}Offset`,i=_[t],n=_[l],s=_[o];i&&h.push(r.default.modifiers[`${i}ColOn${a}`]),n&&h.push(r.default.modifiers[`${n}RowOn${a}`]),s&&h.push(r.default.modifiers[`offset_${s}ColOn${a}`]),delete _[t],delete _[l],delete _[o]})),o.createElement(y,Object.assign({className:i.css(...h,t),style:b||f?Object.assign(Object.assign({},b),c.setBreakpointCssVars(f,s.l_grid_item_Order.name)):void 0},_),a)},a.P.displayName="GridItem"},81159:(e,a,t)=>{a.K=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importDefault(t(73976)),i=t(38296);a.K=e=>{var{hasGutter:a=!1,className:t="",children:n=null,component:s="div"}=e,c=l.__rest(e,["hasGutter","className","children","component"]);const d=s;return o.createElement(d,Object.assign({},c,{className:i.css(r.default.stack,a&&r.default.modifiers.gutter,t)}),n)},a.K.displayName="Stack"},34023:(e,a,t)=>{a.v=void 0;const l=t(70655),o=l.__importStar(t(43297)),r=l.__importDefault(t(73976)),i=t(38296);a.v=e=>{var{isFilled:a=!1,className:t="",children:n=null}=e,s=l.__rest(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},s,{className:i.css(r.default.stackItem,a&&r.default.modifiers.fill,t)}),n)},a.v.displayName="StackItem"},39383:(e,a)=>{var t,l;Object.defineProperty(a,"__esModule",{value:!0}),a.DeviceSizes=a.BaseSizes=void 0,(l=a.BaseSizes||(a.BaseSizes={})).xs="xs",l.sm="sm",l.md="md",l.lg="lg",l.xl="xl",l["2xl"]="2xl",l["3xl"]="3xl",l["4xl"]="4xl",(t=a.DeviceSizes||(a.DeviceSizes={})).sm="Sm",t.md="Md",t.lg="Lg",t.xl="Xl",t.xl2="_2xl"},36853:(e,a,t)=>{a.__esModule=!0,a.BellIconConfig={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},a.BellIcon=t(35183).createIcon(a.BellIconConfig),a.default=a.BellIcon},84564:(e,a,t)=>{a.__esModule=!0,a.ExclamationCircleIconConfig={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a.ExclamationCircleIcon=t(35183).createIcon(a.ExclamationCircleIconConfig),a.default=a.ExclamationCircleIcon},19694:(e,a,t)=>{a.__esModule=!0,a.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a.ExclamationTriangleIcon=t(35183).createIcon(a.ExclamationTriangleIconConfig),a.default=a.ExclamationTriangleIcon},56276:(e,a)=>{a.__esModule=!0,a.c_modal_box_m_align_top_spacer={name:"--pf-c-modal-box--m-align-top--spacer",value:"0.5rem",var:"var(--pf-c-modal-box--m-align-top--spacer)"},a.default=a.c_modal_box_m_align_top_spacer},24936:(e,a)=>{a.__esModule=!0,a.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},a.default=a.l_grid_item_Order},53754:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(43297);const o=t.n(l)().createContext("light")},39591:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(43297),o=t.n(l);const r=function(e){var a=e.component,t=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)a.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t}(e,["component"]);return(0,l.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(a,"."),t)}),[]),o().createElement("div",null,o().createElement("h1",null,"Unable to load inventory component"),o().createElement("h2",null,"Failed to load ",a),o().createElement("code",null,"More info can be found in browser console output."))}},14748:(e,a,t)=>{t.d(a,{Z:()=>m});var l=t(43297),o=t.n(l),r=t(94184),i=t.n(r),n=t(28216),s=t(53754),c=function(){return c=Object.assign||function(e){for(var a,t=1,l=arguments.length;t<l;t++)for(var o in a=arguments[t])Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e},c.apply(this,arguments)},d=function(e,a,t){if(t||2===arguments.length)for(var l,o=0,r=a.length;o<r;o++)!l&&o in a||(l||(l=Array.prototype.slice.call(a,0,o)),l[o]=a[o]);return e.concat(l||Array.prototype.slice.call(a))};const m=(0,n.$j)((function(e){var a=e.routerData;return{params:a&&a.params,path:a&&a.path}}),(function(){return{}}))((function(e){var a=e.path,t=e.params,l=void 0===t?{}:t,r=e.children,n=e.className,m=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)a.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t}(e,["path","params","children","className"]),p=function(){var e,t,o;if(null===(o=null===(t=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===t?void 0:t.$internal)||void 0===o?void 0:o.store){var r=window.insights.chrome.$internal.store.getState();if(a&&r)return a.split("/").reduce((function(e,a){var t,o;return 0===a.indexOf(":")?e.dynamic=c(c({},e.dynamic),((t={})["data-".concat((o=a.substr(1),o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=l[a.substr(1)],t)):e.staticPart=d(d([],e.staticPart,!0),""!==a?[a]:[],!0),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),u=p.dynamic,f=p.staticPart;return o().createElement(s.Z.Consumer,null,(function(e){var a;void 0===e&&(e="light");var t=i()(((a={})["pf-m-".concat(e)]="dark"===e,a));return{dark:o().createElement("section",c({},m,u,{"page-type":f.join("-"),className:"".concat(i()(n,"pf-l-page__main-section pf-c-page__main-section")," ").concat(t)}),o().Children.map(r,(function(e){return o().cloneElement(e,{className:"pf-m-dark"})}))),light:o().createElement("section",c({},m,u,{"page-type":f.join("-"),className:"".concat(i()(n,"pf-l-page__main-section pf-c-page__main-section"))}),r)}[e]}))}))},80123:(e,a,t)=>{t.d(a,{Z:()=>c});var l=t(43297),o=t.n(l),r=t(94184),i=t.n(r),n=t(53754),s=function(){return s=Object.assign||function(e){for(var a,t=1,l=arguments.length;t<l;t++)for(var o in a=arguments[t])Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);return e},s.apply(this,arguments)};const c=function(e){var a=e.className,t=e.children,l=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)a.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(t[l[o]]=e[l[o]])}return t}(e,["className","children"]),r=i()(a,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return o().createElement(n.Z.Consumer,null,(function(e){var a,n;void 0===e&&(e="light");var c=i()(((a={})["pf-m-".concat(e,"-200")]="dark"===e,a),((n={})["pf-m-light"]="light"===e,n));return o().createElement("section",s({},l,{className:"".concat(r," ").concat(c),"widget-type":"InsightsPageHeader"}),t)}))}},39173:(e,a,t)=>{t.d(a,{Z:()=>s});var l=t(43297),o=t.n(l),r=t(94184),i=t.n(r),n=t(75448);const s=function(e){var a=e.className,t=e.title,l=i()(a);return o().createElement(n.Title,{headingLevel:"h1",size:"2xl",className:l,"widget-type":"InsightsPageHeaderTitle"},t)}}}]);
//# sourceMappingURL=../sourcemaps/2436.eca700ed11f4a8910093aebdcd971593.js.map