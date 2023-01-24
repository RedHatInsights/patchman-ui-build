"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[8826],{61398:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Backdrop=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(38296),s=l.__importDefault(t(19993));a.Backdrop=e=>{var{children:a=null,className:t=""}=e,r=l.__rest(e,["children","className"]);return o.createElement("div",Object.assign({},r,{className:i.css(s.default.backdrop,t)}),a)},a.Backdrop.displayName="Backdrop"},78826:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.Modal=a.ModalVariant=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=l.__importStar(t(21704)),s=t(23053),r=t(38296),n=l.__importDefault(t(19993)),d=t(57674),c=t(23053);var p;(p=a.ModalVariant||(a.ModalVariant={})).small="small",p.medium="medium",p.large="large",p.default="default";class m extends o.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{var a,t;const{onEscapePress:l}=this.props;e.key===s.KeyTypes.Escape&&this.props.isOpen&&(l?l(e):null===(t=(a=this.props).onClose)||void 0===t||t.call(a))},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:a}=this.props,t=this.getElement(a).children;for(const a of Array.from(t))a!==this.state.container&&(e?a.setAttribute("aria-hidden",""+e):a.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const a=m.currentId++,t=a+1,l=a+2;this.boxId=e.id||`pf-modal-part-${a}`,this.labelId=`pf-modal-part-${t}`,this.descriptorId=`pf-modal-part-${l}`,this.state={container:void 0,ouiaStateId:c.getDefaultOUIAId(m.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:a,"aria-label":t,"aria-labelledby":l,hasNoBodyWrapper:o,header:i}=this.props,s=this.getElement(e),d=document.createElement("div");this.setState({container:d}),s.appendChild(d),s.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?s.classList.add(r.css(n.default.backdropOpen)):s.classList.remove(r.css(n.default.backdropOpen)),this.isEmpty(a)&&this.isEmpty(t)&&this.isEmpty(l)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(t)&&this.isEmpty(l)&&(o||i)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,a=this.getElement(e);this.props.isOpen?(a.classList.add(r.css(n.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(a.classList.remove(r.css(n.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,a=this.getElement(e);this.state.container&&a.removeChild(this.state.container),a.removeEventListener("keydown",this.handleEscKeyClick,!1),a.classList.remove(r.css(n.default.backdropOpen))}render(){const e=this.props,{appendTo:a,onEscapePress:t,"aria-labelledby":r,"aria-label":n,"aria-describedby":c,bodyAriaLabel:p,bodyAriaRole:m,title:u,titleIconVariant:b,titleLabel:f,ouiaId:_,ouiaSafe:h}=e,y=l.__rest(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","bodyAriaLabel","bodyAriaRole","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe"]),{container:B}=this.state;return s.canUseDOM&&B?i.createPortal(o.createElement(d.ModalContent,Object.assign({},y,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:u,titleIconVariant:b,titleLabel:f,"aria-label":n,"aria-describedby":c,"aria-labelledby":r,bodyAriaLabel:p,bodyAriaRole:m,ouiaId:void 0!==_?_:this.state.ouiaStateId,ouiaSafe:h})),B):null}}a.Modal=m,m.displayName="Modal",m.currentId=0,m.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},80271:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBox=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(38296),s=l.__importDefault(t(62702)),r=l.__importDefault(t(56276));a.ModalBox=e=>{var{children:a,className:t="",variant:n="default",position:d,positionOffset:c,"aria-labelledby":p,"aria-label":m="","aria-describedby":u,style:b}=e,f=l.__rest(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return c&&((b=b||{})[r.default.name]=c),o.createElement("div",Object.assign({},f,{role:"dialog","aria-label":m||null,"aria-labelledby":p||null,"aria-describedby":u,"aria-modal":"true",className:i.css(s.default.modalBox,t,"top"===d&&s.default.modifiers.alignTop,"large"===n&&s.default.modifiers.lg,"small"===n&&s.default.modifiers.sm,"medium"===n&&s.default.modifiers.md),style:b}),a)},a.ModalBox.displayName="ModalBox"},66973:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxBody=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(38296),s=l.__importDefault(t(62702));a.ModalBoxBody=e=>{var{children:a=null,className:t=""}=e,r=l.__rest(e,["children","className"]);return o.createElement("div",Object.assign({},r,{className:i.css(s.default.modalBoxBody,t)}),a)},a.ModalBoxBody.displayName="ModalBoxBody"},27631:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxCloseButton=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(16396),s=l.__importDefault(t(33606));a.ModalBoxCloseButton=e=>{var{className:t="",onClose:r=(()=>{}),ouiaId:n}=e,d=l.__rest(e,["className","onClose","ouiaId"]);return o.createElement(i.Button,Object.assign({className:t,variant:"plain",onClick:r,"aria-label":"Close"},n&&{ouiaId:`${n}-${a.ModalBoxCloseButton.displayName}`},d),o.createElement(s.default,null))},a.ModalBoxCloseButton.displayName="ModalBoxCloseButton"},23788:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxDescription=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(38296),s=l.__importDefault(t(62702));a.ModalBoxDescription=e=>{var{children:a=null,className:t="",id:r=""}=e,n=l.__rest(e,["children","className","id"]);return o.createElement("div",Object.assign({},n,{id:r,className:i.css(s.default.modalBoxDescription,t)}),a)},a.ModalBoxDescription.displayName="ModalBoxDescription"},90818:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxFooter=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(38296),s=l.__importDefault(t(62702));a.ModalBoxFooter=e=>{var{children:a=null,className:t=""}=e,r=l.__rest(e,["children","className"]);return o.createElement("footer",Object.assign({},r,{className:i.css(s.default.modalBoxFooter,t)}),a)},a.ModalBoxFooter.displayName="ModalBoxFooter"},38364:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxHeader=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(38296),s=l.__importDefault(t(62702));a.ModalBoxHeader=e=>{var{children:a=null,className:t="",help:r=null}=e,n=l.__rest(e,["children","className","help"]);return o.createElement("header",Object.assign({className:i.css(s.default.modalBoxHeader,r&&s.default.modifiers.help,t)},n),r&&o.createElement(o.Fragment,null,o.createElement("div",{className:i.css(s.default.modalBoxHeaderMain)},a),o.createElement("div",{className:"pf-c-modal-box__header-help"},r)),!r&&a)},a.ModalBoxHeader.displayName="ModalBoxHeader"},76532:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalBoxTitle=a.isVariantIcon=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=l.__importDefault(t(62702)),s=t(38296),r=l.__importDefault(t(79818)),n=t(23053),d=t(8045),c=l.__importDefault(t(35451)),p=l.__importDefault(t(84564)),m=l.__importDefault(t(19694)),u=l.__importDefault(t(31369)),b=l.__importDefault(t(36853)),f=t(23053);a.isVariantIcon=e=>["success","danger","warning","info","default"].includes(e),a.ModalBoxTitle=e=>{var{className:t="",id:_,title:h,titleIconVariant:y,titleLabel:B=""}=e,M=l.__rest(e,["className","id","title","titleIconVariant","titleLabel"]);const[x,v]=o.useState(!1),C=o.useRef(null),I=B||(a.isVariantIcon(y)?`${n.capitalize(y)} alert:`:B),E={success:o.createElement(c.default,null),danger:o.createElement(p.default,null),warning:o.createElement(m.default,null),info:o.createElement(u.default,null),default:o.createElement(b.default,null)},g=!a.isVariantIcon(y)&&y;f.useIsomorphicLayoutEffect((()=>{v(C.current&&C.current.offsetWidth<C.current.scrollWidth)}),[]);const N=o.createElement("h1",Object.assign({id:_,ref:C,className:s.css(i.default.modalBoxTitle,y&&i.default.modifiers.icon,t)},M),y&&o.createElement("span",{className:s.css(i.default.modalBoxTitleIcon)},a.isVariantIcon(y)?E[y]:o.createElement(g,null)),I&&o.createElement("span",{className:s.css(r.default.screenReader)},I),o.createElement("span",{className:s.css(i.default.modalBoxTitleText)},h));return x?o.createElement(d.Tooltip,{content:h},N):N},a.ModalBoxTitle.displayName="ModalBoxTitle"},57674:(e,a,t)=>{Object.defineProperty(a,"__esModule",{value:!0}),a.ModalContent=void 0;const l=t(70655),o=l.__importStar(t(43297)),i=t(23053),s=l.__importDefault(t(62702)),r=l.__importDefault(t(66042)),n=t(38296),d=t(23053),c=t(61398),p=t(66973),m=t(27631),u=t(80271),b=t(90818),f=t(23788),_=t(38364),h=t(76532);a.ModalContent=e=>{var{children:t,className:y="",isOpen:B=!1,header:M=null,help:x=null,description:v=null,title:C="",titleIconVariant:I=null,titleLabel:E="","aria-label":g="","aria-describedby":N,"aria-labelledby":O,bodyAriaLabel:L,bodyAriaRole:D,showClose:S=!0,footer:T=null,actions:k=[],onClose:j=(()=>{}),variant:P="default",position:V,positionOffset:w,width:A=-1,boxId:F,labelId:R,descriptorId:H,disableFocusTrap:W=!1,hasNoBodyWrapper:z=!1,ouiaId:$,ouiaSafe:U=!0}=e,K=l.__rest(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","bodyAriaLabel","bodyAriaRole","showClose","footer","actions","onClose","variant","position","positionOffset","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!B)return null;const Z=M?o.createElement(_.ModalBoxHeader,{help:x},M):C&&o.createElement(_.ModalBoxHeader,{help:x},o.createElement(h.ModalBoxTitle,{title:C,titleIconVariant:I,titleLabel:E,id:R}),v&&o.createElement(f.ModalBoxDescription,{id:H},v)),q=T?o.createElement(b.ModalBoxFooter,null,T):k.length>0&&o.createElement(b.ModalBoxFooter,null,k),G=L?"region":void 0,J=z?t:o.createElement(p.ModalBoxBody,Object.assign({"aria-label":L,role:D||G},K,!v&&!N&&{id:H}),t),Q=-1===A?{}:{width:A},X=o.createElement(u.ModalBox,Object.assign({id:F,style:Q,className:n.css(y,h.isVariantIcon(I)&&s.default.modifiers[I]),variant:P,position:V,positionOffset:w,"aria-label":g,"aria-labelledby":(()=>{if(null===O)return null;const e=[];return""!==(g&&F)&&e.push(g&&F),O&&e.push(O),C&&e.push(R),e.join(" ")})(),"aria-describedby":N||(z?null:H)},d.getOUIAProps(a.ModalContent.displayName,$,U)),S&&o.createElement(m.ModalBoxCloseButton,{onClose:j,ouiaId:$}),Z,J,q);return o.createElement(c.Backdrop,null,o.createElement(i.FocusTrap,{active:!W,focusTrapOptions:{clickOutsideDeactivates:!0,tabbableOptions:{displayCheck:"none"}},className:n.css(r.default.bullseye)},X))},a.ModalContent.displayName="ModalContent"},36853:(e,a,t)=>{a.__esModule=!0,a.BellIconConfig={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},a.BellIcon=t(35183).createIcon(a.BellIconConfig),a.default=a.BellIcon},84564:(e,a,t)=>{a.__esModule=!0,a.ExclamationCircleIconConfig={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a.ExclamationCircleIcon=t(35183).createIcon(a.ExclamationCircleIconConfig),a.default=a.ExclamationCircleIcon},19694:(e,a,t)=>{a.__esModule=!0,a.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},a.ExclamationTriangleIcon=t(35183).createIcon(a.ExclamationTriangleIconConfig),a.default=a.ExclamationTriangleIcon},56276:(e,a)=>{a.__esModule=!0,a.c_modal_box_m_align_top_spacer={name:"--pf-c-modal-box--m-align-top--spacer",value:"0.5rem",var:"var(--pf-c-modal-box--m-align-top--spacer)"},a.default=a.c_modal_box_m_align_top_spacer}}]);
//# sourceMappingURL=../sourcemaps/8826.3bac97db8cdef104280fb25ee7853b10.js.map