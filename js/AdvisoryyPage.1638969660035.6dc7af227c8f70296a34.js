(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{61398:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Backdrop=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(38296),o=r.__importDefault(a(10792));t.Backdrop=e=>{var{children:t=null,className:a=""}=e,n=r.__rest(e,["children","className"]);return l.createElement("div",Object.assign({},n,{className:s.css(o.default.backdrop,a)}),t)},t.Backdrop.displayName="Backdrop"},78826:(e,t,a)=>{"use strict";t.u_=t.vE=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=r.__importStar(a(21704)),o=a(23053),n=a(38296),i=r.__importDefault(a(10792)),c=a(57674),d=a(23053);var u;(u=t.vE||(t.vE={})).small="small",u.medium="medium",u.large="large",u.default="default";class m extends l.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{const{onEscapePress:t}=this.props;e.keyCode===o.KEY_CODES.ESCAPE_KEY&&this.props.isOpen&&(t?t(e):this.props.onClose())},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:t}=this.props,a=this.getElement(t).children;for(const t of Array.from(a))t!==this.state.container&&(e?t.setAttribute("aria-hidden",""+e):t.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const t=m.currentId++,a=t+1,r=t+2;this.boxId=e.id||`pf-modal-part-${t}`,this.labelId=`pf-modal-part-${a}`,this.descriptorId=`pf-modal-part-${r}`,this.state={container:void 0,ouiaStateId:d.getDefaultOUIAId(m.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:t,"aria-label":a,"aria-labelledby":r,hasNoBodyWrapper:l,header:s}=this.props,o=this.getElement(e),c=document.createElement("div");this.setState({container:c}),o.appendChild(c),o.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?o.classList.add(n.css(i.default.backdropOpen)):o.classList.remove(n.css(i.default.backdropOpen)),this.isEmpty(t)&&this.isEmpty(a)&&this.isEmpty(r)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(a)&&this.isEmpty(r)&&(l||s)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,t=this.getElement(e);this.props.isOpen?(t.classList.add(n.css(i.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(t.classList.remove(n.css(i.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,t=this.getElement(e);this.state.container&&t.removeChild(this.state.container),t.removeEventListener("keydown",this.handleEscKeyClick,!1),t.classList.remove(n.css(i.default.backdropOpen))}render(){const e=this.props,{appendTo:t,onEscapePress:a,"aria-labelledby":n,"aria-label":i,"aria-describedby":d,title:u,titleIconVariant:m,titleLabel:p,ouiaId:f,ouiaSafe:b}=e,v=r.__rest(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe"]),{container:h}=this.state;return o.canUseDOM&&h?s.createPortal(l.createElement(c.ModalContent,Object.assign({},v,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:u,titleIconVariant:m,titleLabel:p,"aria-label":i,"aria-describedby":d,"aria-labelledby":n,ouiaId:void 0!==f?f:this.state.ouiaStateId,ouiaSafe:b})),h):null}}t.u_=m,m.displayName="Modal",m.currentId=0,m.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},80271:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBox=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(38296),o=r.__importDefault(a(11997)),n=r.__importDefault(a(56276));t.ModalBox=e=>{var{children:t,className:a="",variant:i="default",position:c,positionOffset:d,"aria-labelledby":u,"aria-label":m="","aria-describedby":p,style:f}=e,b=r.__rest(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return d&&((f=f||{})[n.default.name]=d),l.createElement("div",Object.assign({},b,{role:"dialog","aria-label":m||null,"aria-labelledby":u||null,"aria-describedby":p,"aria-modal":"true",className:s.css(o.default.modalBox,a,"top"===c&&o.default.modifiers.alignTop,"large"===i&&o.default.modifiers.lg,"small"===i&&o.default.modifiers.sm,"medium"===i&&o.default.modifiers.md),style:f}),t)},t.ModalBox.displayName="ModalBox"},66973:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxBody=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(38296),o=r.__importDefault(a(11997));t.ModalBoxBody=e=>{var{children:t=null,className:a=""}=e,n=r.__rest(e,["children","className"]);return l.createElement("div",Object.assign({},n,{className:s.css(o.default.modalBoxBody,a)}),t)},t.ModalBoxBody.displayName="ModalBoxBody"},27631:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxCloseButton=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(16396),o=r.__importDefault(a(33606));t.ModalBoxCloseButton=e=>{var{className:t="",onClose:a=(()=>{})}=e,n=r.__rest(e,["className","onClose"]);return l.createElement(s.Button,Object.assign({className:t,variant:"plain",onClick:a,"aria-label":"Close"},n),l.createElement(o.default,null))},t.ModalBoxCloseButton.displayName="ModalBoxCloseButton"},23788:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxDescription=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(38296),o=r.__importDefault(a(11997));t.ModalBoxDescription=e=>{var{children:t=null,className:a="",id:n=""}=e,i=r.__rest(e,["children","className","id"]);return l.createElement("div",Object.assign({},i,{id:n,className:s.css(o.default.modalBoxDescription,a)}),t)},t.ModalBoxDescription.displayName="ModalBoxDescription"},90818:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxFooter=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(38296),o=r.__importDefault(a(11997));t.ModalBoxFooter=e=>{var{children:t=null,className:a=""}=e,n=r.__rest(e,["children","className"]);return l.createElement("footer",Object.assign({},n,{className:s.css(o.default.modalBoxFooter,a)}),t)},t.ModalBoxFooter.displayName="ModalBoxFooter"},38364:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxHeader=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(38296),o=r.__importDefault(a(11997));t.ModalBoxHeader=e=>{var{children:t=null,className:a="",help:n=null}=e,i=r.__rest(e,["children","className","help"]);return l.createElement("header",Object.assign({className:s.css(o.default.modalBoxHeader,n&&o.default.modifiers.help,a)},i),n&&l.createElement(l.Fragment,null,l.createElement("div",{className:s.css(o.default.modalBoxHeaderMain)},t),l.createElement("div",{className:"pf-c-modal-box__header-help"},n)),!n&&t)},t.ModalBoxHeader.displayName="ModalBoxHeader"},76532:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxTitle=t.isVariantIcon=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=r.__importDefault(a(11997)),o=a(38296),n=r.__importDefault(a(63339)),i=a(23053),c=a(8045),d=r.__importDefault(a(35451)),u=r.__importDefault(a(84564)),m=r.__importDefault(a(19694)),p=r.__importDefault(a(31369)),f=r.__importDefault(a(36853)),b=a(23053);t.isVariantIcon=e=>["success","danger","warning","info","default"].includes(e),t.ModalBoxTitle=e=>{var{className:a="",id:v,title:h,titleIconVariant:y,titleLabel:_=""}=e,g=r.__rest(e,["className","id","title","titleIconVariant","titleLabel"]);const[E,O]=l.useState(!1),N=l.useRef(),x=_||(t.isVariantIcon(y)?`${i.capitalize(y)} alert:`:_),B={success:l.createElement(d.default,null),danger:l.createElement(u.default,null),warning:l.createElement(m.default,null),info:l.createElement(p.default,null),default:l.createElement(f.default,null)},S=!t.isVariantIcon(y)&&y;b.useIsomorphicLayoutEffect((()=>{O(N.current&&N.current.offsetWidth<N.current.scrollWidth)}),[]);const M=l.createElement("h1",Object.assign({id:v,ref:N,className:o.css(s.default.modalBoxTitle,y&&s.default.modifiers.icon,a)},g),y&&l.createElement("span",{className:o.css(s.default.modalBoxTitleIcon)},t.isVariantIcon(y)?B[y]:l.createElement(S,null)),x&&l.createElement("span",{className:o.css(n.default.screenReader)},x),l.createElement("span",{className:o.css(s.default.modalBoxTitleText)},h));return E?l.createElement(c.Tooltip,{content:h,isVisible:!0},M):M},t.ModalBoxTitle.displayName="ModalBoxTitle"},57674:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=a(23053),o=r.__importDefault(a(11997)),n=r.__importDefault(a(25687)),i=a(38296),c=a(23053),d=a(61398),u=a(66973),m=a(27631),p=a(80271),f=a(90818),b=a(23788),v=a(38364),h=a(76532);t.ModalContent=e=>{var{children:a,className:y="",isOpen:_=!1,header:g=null,help:E=null,description:O=null,title:N="",titleIconVariant:x=null,titleLabel:B="","aria-label":S="","aria-describedby":M,"aria-labelledby":I,showClose:C=!0,footer:P=null,actions:Z=[],onClose:D=(()=>{}),variant:j="default",position:w,positionOffset:T,width:k=-1,boxId:L,labelId:F,descriptorId:A,disableFocusTrap:V=!1,hasNoBodyWrapper:H=!1,ouiaId:U,ouiaSafe:K=!0}=e,R=r.__rest(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","showClose","footer","actions","onClose","variant","position","positionOffset","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!_)return null;const W=g?l.createElement(v.ModalBoxHeader,{help:E},g):N&&l.createElement(v.ModalBoxHeader,{help:E},l.createElement(h.ModalBoxTitle,{title:N,titleIconVariant:x,titleLabel:B,id:F}),O&&l.createElement(b.ModalBoxDescription,{id:A},O)),G=P?l.createElement(f.ModalBoxFooter,null,P):Z.length>0&&l.createElement(f.ModalBoxFooter,null,Z),z=H?a:l.createElement(u.ModalBoxBody,Object.assign({},R,!O&&!M&&{id:A}),a),q=-1===k?{}:{width:k},J=l.createElement(p.ModalBox,Object.assign({id:L,style:q,className:i.css(y,h.isVariantIcon(x)&&o.default.modifiers[x]),variant:j,position:w,positionOffset:T,"aria-label":S,"aria-labelledby":(()=>{if(null===I)return null;const e=[];return""!==(S&&L)&&e.push(S&&L),I&&e.push(I),N&&e.push(F),e.join(" ")})(),"aria-describedby":M||(H?null:A)},c.getOUIAProps(t.ModalContent.displayName,U,K)),C&&l.createElement(m.ModalBoxCloseButton,{onClose:D}),W,z,G);return l.createElement(d.Backdrop,null,l.createElement(s.FocusTrap,{active:!V,focusTrapOptions:{clickOutsideDeactivates:!0},className:i.css(n.default.bullseye)},J))},t.ModalContent.displayName="ModalContent"},36842:(e,t,a)=>{"use strict";t.P=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=r.__importDefault(a(48271)),o=a(38296);t.P=e=>{var{hasGutter:t=!1,isWrappable:a=!1,className:n="",children:i=null,component:c="div"}=e,d=r.__rest(e,["hasGutter","isWrappable","className","children","component"]);const u=c;return l.createElement(u,Object.assign({},d,{className:o.css(s.default.split,t&&s.default.modifiers.gutter,a&&s.default.modifiers.wrap,n)}),i)},t.P.displayName="Split"},21508:(e,t,a)=>{"use strict";t.J=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=r.__importDefault(a(48271)),o=a(38296);t.J=e=>{var{isFilled:t=!1,className:a="",children:n=null}=e,i=r.__rest(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},i,{className:o.css(s.default.splitItem,t&&s.default.modifiers.fill,a)}),n)},t.J.displayName="SplitItem"},81159:(e,t,a)=>{"use strict";t.K=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=r.__importDefault(a(15957)),o=a(38296);t.K=e=>{var{hasGutter:t=!1,className:a="",children:n=null,component:i="div"}=e,c=r.__rest(e,["hasGutter","className","children","component"]);const d=i;return l.createElement(d,Object.assign({},c,{className:o.css(s.default.stack,t&&s.default.modifiers.gutter,a)}),n)},t.K.displayName="Stack"},34023:(e,t,a)=>{"use strict";t.v=void 0;const r=a(70655),l=r.__importStar(a(43297)),s=r.__importDefault(a(15957)),o=a(38296);t.v=e=>{var{isFilled:t=!1,className:a="",children:n=null}=e,i=r.__rest(e,["isFilled","className","children"]);return l.createElement("div",Object.assign({},i,{className:o.css(s.default.stackItem,t&&s.default.modifiers.fill,a)}),n)},t.v.displayName="StackItem"},61829:(e,t,a)=>{"use strict";t.Fs={name:"AnsibeTowerIcon",height:390,width:390,svgPath:"M402.6,214.7c0,103.9-84.2,188.1-188.1,188.1c-103.9,0-188.1-84.2-188.1-188.1  c0-103.9,84.2-188.1,188.1-188.1C318.4,26.6,402.6,110.8,402.6,214.7z M304.1,289.3l-74.9-180.2c-2.1-5.2-6.4-7.9-11.6-7.9c-5.2,0-9.8,2.8-11.9,7.9l-82.2,197.7h28.1l32.5-81.5  l97.1,78.4c3.9,3.2,6.7,4.6,10.4,4.6c7.3,0,13.7-5.5,13.7-13.4C305.4,293.6,305,291.5,304.1,289.3z M217.7,141.5l48.7,120.2  l-73.5-57.9L217.7,141.5z",yOffset:20,xOffset:20},t.Q2=a(35183).createIcon(t.Fs),t.ZP=t.Q2},36853:(e,t,a)=>{"use strict";t.__esModule=!0,t.BellIconConfig={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},t.BellIcon=a(35183).createIcon(t.BellIconConfig),t.default=t.BellIcon},10792:(e,t,a)=>{"use strict";t.__esModule=!0,a(70347),t.default={backdrop:"pf-c-backdrop",backdropOpen:"pf-c-backdrop__open"}},11997:(e,t,a)=>{"use strict";t.__esModule=!0,a(25238),t.default={button:"pf-c-button",modalBox:"pf-c-modal-box",modalBoxBody:"pf-c-modal-box__body",modalBoxDescription:"pf-c-modal-box__description",modalBoxFooter:"pf-c-modal-box__footer",modalBoxHeader:"pf-c-modal-box__header",modalBoxHeaderMain:"pf-c-modal-box__header-main",modalBoxTitle:"pf-c-modal-box__title",modalBoxTitleIcon:"pf-c-modal-box__title-icon",modalBoxTitleText:"pf-c-modal-box__title-text",modifiers:{sm:"pf-m-sm",md:"pf-m-md",lg:"pf-m-lg",alignTop:"pf-m-align-top",danger:"pf-m-danger",warning:"pf-m-warning",success:"pf-m-success",default:"pf-m-default",info:"pf-m-info",help:"pf-m-help",icon:"pf-m-icon"}}},15957:(e,t,a)=>{"use strict";t.__esModule=!0,a(53519),t.default={modifiers:{fill:"pf-m-fill",gutter:"pf-m-gutter"},stack:"pf-l-stack",stackItem:"pf-l-stack__item"}},56276:(e,t)=>{"use strict";t.__esModule=!0,t.c_modal_box_m_align_top_spacer={name:"--pf-c-modal-box--m-align-top--spacer",value:"0.5rem",var:"var(--pf-c-modal-box--m-align-top--spacer)"},t.default=t.c_modal_box_m_align_top_spacer},83905:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var r=a(87462),l=a(29439),s=a(43297),o=a.n(s),n=a(13784),i=a(44612),c=a(80887),d=a(77221),u=a(82553),m=a(32132),p=a(30893);const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=o().useState(!1),s=(0,l.Z)(a,2),f=s[0],b=s[1],v=o().useState(10),h=(0,l.Z)(v,2),y=h[0],_=h[1],g=n.nW.slice().reverse(),E=e.os,O="string"==typeof E&&E.split(",")||[],N=function(e,a){if(E&&!E.includes(a))t({filter:{os:"".concat(O.join(","),",").concat(a)}});else if(E&&E.includes(a)){var r=O.filter((function(e){return e!==a}));t({filter:{os:r.length>0&&"".concat(r.join(","))||void 0}})}else t({filter:{os:""!==a&&a||void 0}})},x=function(e){b(e)},B=function(){_(g.length)};return{type:i.Y.custom,label:m.N.formatMessage(p.Z.labelsFiltersOsVersion),value:"custom",filterValues:{children:o().createElement(c.P,(0,r.Z)({variant:u.SelectVariant.checkbox,typeAheadAriaLabel:m.N.formatMessage(p.Z.labelsFiltersOsVersionPlaceholder),onToggle:x,onSelect:N,selections:O,isOpen:f,"aria-labelledby":"patch-os-version-filter",placeholderText:m.N.formatMessage(p.Z.labelsFiltersOsVersionPlaceholder)},y<g.length&&{loadingVariant:{text:"View more",onClick:B}},{style:{maxHeight:"400px",overflow:"auto"}}),g.slice(0,y).map((function(e,t){return o().createElement(d.SelectOption,{key:t,value:e.value})})))}}}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var r=a(48716),l=a(39173),s=a(45697),o=a.n(s),n=a(43297),i=a.n(n),c=a(85991),d=a(49489),u=a(334),m=function(e){var t=e.items,a=e.headerOUIA;return i().createElement(c.a,null,t.filter(Boolean).map((function(e){return i().createElement(d.g,{key:e.title,isActive:e.isActive},e.to&&i().createElement(u.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};m.propTypes={items:o().arrayOf(o().shape({isActive:o().bool,to:o().string,title:o().string})),headerOUIA:o().string};const p=m;var f=a(82819),b=a(98378),v=a(60076),h=function(e){var t=e.history,a=e.headerOUIA;return i().createElement(b.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},i().createElement(f.O,{eventKey:v.H.advisories.to,title:v.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(v.H.advisories.title)}),i().createElement(f.O,{eventKey:v.H.systems.to,title:v.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(v.H.systems.title)}))};h.propTypes={history:o().object,headerOUIA:o().string};const y=(0,u.withRouter)(h);var _=function(e){var t=e.title,a=e.showTabs,s=e.breadcrumbs,o=e.children,n=e.headerOUIA;return i().createElement(i().Fragment,null,i().createElement(r.Z,{"data-ouia-component-type":"".concat(n,"-page-header")},s&&i().createElement(p,{items:s,headerOUIA:n}),i().createElement(l.Z,{title:t}),o),a&&i().createElement(y,{headerOUIA:n}))};_.propTypes={title:o().string,showTabs:o().bool,breadcrumbs:o().array,children:o().any,headerOUIA:o().string};const g=_},52709:(e,t,a)=>{"use strict";a.d(t,{x:()=>h,ZP:()=>g});var r=a(45987),l=a(4942),s=a(56455),o=a(87462),n=a(43297),i=a.n(n),c=a(45697),d=a.n(c),u=a(94184),m=a.n(u),p=function(e){var t=e.centered,a=e.className,s=(0,r.Z)(e,["centered","className"]),n=m()("ins-c-spinner",(0,l.Z)({},"ins-m-center",t),a);return i().createElement("div",(0,o.Z)({role:"status",className:n},s),i().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};p.propTypes={centered:d().bool,className:d().string};const f=p;var b,v=["loading","variant","children"],h={spinner:"spinner",skeleton:"skeleton"},y=(b={},(0,l.Z)(b,h.skeleton,(function(e){var t=e.size,a=e.isDark;return i().createElement(s.Z,{size:t,isDark:a})})),(0,l.Z)(b,h.spinner,(function(e){var t=e.centered;return i().createElement(f,{centered:t})})),b),_=function(e){var t=e.loading,a=e.variant,l=e.children,s=(0,r.Z)(e,v);return!1!==t?y[a](s):l};_.propTypes={loading:d().bool,variant:d().string,children:d().any};const g=_},96688:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>be});var r=a(4942),l=a(29439),s=a(81159),o=a(34023),n=a(63540),i=a(20018),c=a(86350),d=a(45697),u=a.n(d),m=a(43297),p=a.n(m),f=a(28216),b=a(334),v=a(30893),h=a(6202),y=a(49287),_=a(18038),g=a(42057),E=a(36001),O=a(36842),N=a(21508),x=a(34348),B=a(35240),S=a(52709),M=a(78826),I=a(32132),C=a(38776),P=a(90747),Z=a(64270),D=a(9557),j=a(57668),w=a(57358),T=a(72573),k=function(e){var t=e.cveIds,a=(0,f.I0)(),r=(0,m.useState)([]),s=(0,l.Z)(r,2),o=s[0],n=s[1],i=(0,m.useState)([]),c=(0,l.Z)(i,2),d=c[0],u=c[1],b=(0,m.useState)(1),h=(0,l.Z)(b,2),y=h[0],_=h[1],g=(0,m.useState)(10),E=(0,l.Z)(g,2),O=E[0],N=E[1],x=(0,m.useState)(void 0),B=(0,l.Z)(x,2),S=B[0],k=B[1],L=(0,m.useState)({direction:T.SortByDirection.asc,index:0}),F=(0,l.Z)(L,2),A=F[0],V=F[1],H=(0,f.v9)((function(e){return e.CvesListStore.rows})),U=(0,f.v9)((function(e){return e.CvesListStore.status}));p().useEffect((function(){a((0,D.Xt)({cveIds:t}))}),[]),p().useMemo((function(){u(o.slice((y-1)*O,y*O))}),[o,y,O,A]),(0,m.useMemo)((function(){var e=void 0!==S&&""!==S&&H.filter((function(e){var t=e.attributes.synopsis;return t&&S&&t.toLowerCase().includes(S.toLowerCase())}))||H;n((0,j.KW)((0!==e.length||S)&&e||H))}),[S,H]);var K=function(e){var t=e.search;_(y),k(t)};return p().createElement(p().Fragment,null,p().createElement(M.u_,{variant:"small",title:I.N.formatMessage(v.Z.labelsCves),isOpen:Boolean(d),onClose:function(){u(void 0)}},p().createElement(C.Z,{columns:Z.g,onSetPage:function(e,t){_(t)},onPerPageSelect:function(e,t){_(1),N(t)},apply:K,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,a){var r=(0,w.Qg)(o,t,a),l=r.sortBy,s=r.sortedCves;V(l),n(s)},sortBy:A,store:{rows:d,metadata:{limit:O,offset:(y-1)*O,total_items:o&&o.length},status:U,queryParams:{filter:{},search:S}},filterConfig:{items:[(0,P.Z)(K,S,"",I.N.formatMessage(v.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};k.propTypes={cveIds:u().array};const L=k;var F=a(7665),A=a(19210),V=function(e){var t=e.severity;return p().createElement(O.P,{className:"infobox",hasGutter:!0},p().createElement(N.J,{isFilled:!0},p().createElement(E.k,{flex:{default:"column"}},p().createElement(g.B,{spacer:{default:"spacerNone"}},p().createElement(x.Dx,{headingLevel:"h5"},I.N.formatMessage(v.Z.labelsColumnsSeverity))),p().createElement(g.B,{spacer:{default:"spacerSm"}},p().createElement(E.k,{flex:{default:"row"}},p().createElement(g.B,null,p().createElement(A.ZP,{size:"sm",color:t.color})),p().createElement(g.B,null,t.label))))))};V.propTypes={severity:u().object};const H=V;var U=a(55970),K=a(18464),R=function(e){var t=e.attributes,a=e.isLoading,r=(0,m.useState)((function(){return function(){return null}})),c=(0,l.Z)(r,2),d=c[0],u=c[1],f=(0,m.useState)(1e3),b=(0,l.Z)(f,2),M=b[0],C=b[1],P=(0,w.r)(t.severity),Z=t.cves;return p().createElement(y.r,{hasGutter:!0,style:{minHeight:150}},p().createElement(_.P,{md:8,sm:12},p().createElement(S.ZP,{loading:a,variant:S.x.spinner,centered:!0},p().createElement(s.K,{hasGutter:!0},p().createElement(o.v,null),p().createElement(o.v,{style:{whiteSpace:"pre-line"}},t.description&&(0,w.Nt)(t.description,M,C)),p().createElement(o.v,null,t.public_date&&p().createElement(p().Fragment,null,I.N.formatMessage(v.Z.labelsPublicDate,{date:(0,B.Un)(t.public_date)}),p().createElement("br",null)),t.modified_date&&p().createElement(p().Fragment,null,I.N.formatMessage(v.Z.labelsModifiedDate,{date:(0,B.Un)(t.modified_date)}))),(0,w.q5)(t.id)&&p().createElement(o.v,null,p().createElement(U.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:I.N.formatMessage(v.Z.linksViewPackagesAndErrata)}))))),p().createElement(_.P,{md:4,sm:12},p().createElement(E.k,{flex:{default:"column"}},t.advisory_type_name&&p().createElement(g.B,null,p().createElement(O.P,{className:"infobox",hasGutter:!0},p().createElement(N.J,{isFilled:!0},p().createElement(E.k,{flex:{default:"column"}},p().createElement(g.B,{spacer:{default:"spacerNone"}},p().createElement(x.Dx,{headingLevel:"h5"},I.N.formatMessage(v.Z.titlesAdvisoryType))),p().createElement(g.B,{spacer:{default:"spacerSm"}},p().createElement(K.Z,{type:t.advisory_type_name})))))),0!==P.value&&p().createElement(g.B,null,p().createElement(H,{severity:P})),t.reboot_required&&p().createElement(g.B,{spacer:{default:"spacerMd"}},p().createElement(F.Z,null)))),Z&&0!==Z.length&&p().createElement(_.P,{md:4,sm:12},p().createElement(i.D,null,p().createElement(n.xv,{component:n.qO.h3},I.N.formatMessage(v.Z.labelsCves)),p().createElement(h.Button,{variant:"link",style:{padding:0},onClick:function(){u((function(){return function(){return p().createElement(L,{cveIds:Z})}}))}},I.N.formatMessage(v.Z.labelsCvesButton,{cvesCount:Z.length})))),p().createElement(d,null))};R.propTypes={attributes:u().object,isLoading:u().bool};const W=R;var G=a(49642),z=a(20167),q=a(60076),J=a(91607),Q=a(61829),Y=a(33739),$=a(83905),X=a(73888),ee=a(32041),te=a(5747),ae=a(11220),re=a(13784),le=a(94859),se=a(20259),oe=a(58684);function ne(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ie(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ne(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ce=function(e){var t=e.advisoryName,a=(0,f.I0)(),r=p().useState((function(){return function(){return null}})),s=(0,l.Z)(r,2),o=s[0],n=s[1],i=(0,b.useHistory)(),c=(0,w.PZ)(i.location.search),d=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),f.wU),u=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),m=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),h=(0,f.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),y=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),_=h.systemProfile,g=h.selectedTags,E=h.filter,O=h.search,N=h.page,x=h.perPage,B=h.sort;function S(e){a((0,D.pH)(e))}p().useEffect((function(){return S(c),function(){a((0,D.RV)()),a((0,D.Yf)())}}),[]);var M=(0,J.j5)(ie({search:O},E),S),C=(0,l.Z)(M,1)[0],Z={items:[(0,P.Z)(S,O,I.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),I.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),(0,$.Z)(E,S)]},j={filters:(0,w.mt)(E,O,I.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:C},k=function(e){n((function(){return function(){return p().createElement(se.Z,{data:e})}}))},L=(0,J.ry)(d,y,(function(){return(0,ae.cK)(ie(ie({},h),{},{id:t,limit:-1})).then(w.zw)}),(function(e){a({type:"SELECT_ENTITY",payload:e})})),F=y&&(0,w.Qy)(y).length,A=(0,J.U)(ae.cK,S,{id:t},i),V=(0,J.AR)(t,h,{csv:ae.nb,json:ae.Se},a);return p().createElement(p().Fragment,null,p().createElement(o,null),u.hasError&&p().createElement(X.Z,{code:u.code})||p().createElement(Y.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0,tags:!1},columns:w.gB,showTags:!0,customFilters:{patchParams:{search:O,filter:E,systemProfile:_,selectedTags:g}},onLoad:function(e){var t=e.mergeWithEntities;(0,ee.z)(ie({},t((0,te.Kq)(oe.Fs,te.G),(0,w.fm)({page:N,perPage:x,sort:B,search:O},c))))},getEntities:A,actions:(0,oe.Sb)(k),tableProps:{canSelectAll:!1,variant:T.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:Z,activeFiltersConfig:j,exportConfig:{isDisabled:0===m,onSelect:V},bulkSelect:L&&(0,J.Pz)(F,L,{total_items:m},d),dedicatedAction:p().createElement(le.Z,{isDisabled:0===(0,w.Qy)(y).length,onClick:function(){return k((0,w.MS)(t,(0,w.Q6)(y),re.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},p().createElement(Q.ZP,null)," ",I.N.formatMessage(v.Z.labelsRemediate))}))};ce.propTypes={advisoryName:u().string};const de=ce;var ue=a(83215);function me(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function pe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?me(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):me(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var fe=function(e){var t=e.match,a=(0,f.I0)(),r=p().useState(t.params.advisoryId),d=(0,l.Z)(r,1)[0],u="".concat(d," - ").concat(I.N.formatMessage(v.Z.titlesAdvisories));(0,J.Iw)(u);var m=(0,f.v9)((function(e){return e.AdvisoryDetailStore})),b=(0,f.v9)((function(e){return e.AdvisoryDetailStore.status}));p().useEffect((function(){a((0,D.N2)({advisoryName:d}))}),[]),p().useEffect((function(){return function(){a((0,D.jl)()),a((0,D.JP)()),a((0,ue.L1)())}}),[]);var h=m.data.attributes;return p().createElement(p().Fragment,null,p().createElement(G.Z,{title:d,headerOUIA:"advisory-details",breadcrumbs:[{title:I.N.formatMessage(v.Z.titlesPatchAdvisories),to:q.H.advisories.to,isActive:!1},{title:d,isActive:!0}]},b.hasError?p().createElement(z.Z,null):p().createElement(W,{attributes:pe(pe({},h),{},{id:d}),isLoading:b.isLoading})),p().createElement(c.Z,null,p().createElement(s.K,{hasGutter:!0},p().createElement(o.v,null,p().createElement(i.D,null,p().createElement(n.xv,{component:n.qO.h2},I.N.formatMessage(v.Z.titlesAffectedSystems)))),p().createElement(o.v,null,b.hasError&&p().createElement(X.Z,null)||!b.isLoading&&p().createElement(de,{advisoryName:d})))))};fe.propTypes={match:u().any};const be=(0,b.withRouter)(fe)},5747:(e,t,a)=>{"use strict";a.d(t,{G:()=>d,OC:()=>u,Kq:()=>m});var r=a(4942),l=a(57668),s=a(48881),o=a(22789);function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},d=function(e,t){return t.loaded?i(i({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,l.Yk)(t.rows,t.selectedRows)}):t},u=function(e,t){return t.loaded?i(i({},t),{},{columns:e,rows:(0,l.GF)(t.rows,t.selectedRows)}):t},m=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1?arguments[1]:void 0,l=i({},a);switch(r.type){case"LOAD_ENTITIES_FULFILLED":return t(e,l);case"LOAD_ENTITIES_PENDING":return l.status={isLoading:!0,hasError:!1},l;case"LOAD_ENTITIES_REJECTED":return l.status={isLoading:!0,hasError:!0},l;case"SELECT_ENTITY":var n=(0,s.hd)(l,r);return t(e,n);case o.sq:return c;default:return a}}}},70347:()=>{},58392:()=>{},25238:()=>{},72816:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.bfb6d20008e106a64cb4ac3522b10c83.js.map