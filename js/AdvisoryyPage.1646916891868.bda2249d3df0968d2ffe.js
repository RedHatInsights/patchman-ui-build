"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{61398:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Backdrop=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(38296),o=r.__importDefault(a(10792));t.Backdrop=e=>{var{children:t=null,className:a=""}=e,s=r.__rest(e,["children","className"]);return n.createElement("div",Object.assign({},s,{className:l.css(o.default.backdrop,a)}),t)},t.Backdrop.displayName="Backdrop"},78826:(e,t,a)=>{t.u_=t.vE=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=r.__importStar(a(57673)),o=a(23053),s=a(38296),i=r.__importDefault(a(10792)),c=a(57674),d=a(23053);var u;(u=t.vE||(t.vE={})).small="small",u.medium="medium",u.large="large",u.default="default";class m extends n.Component{constructor(e){super(e),this.boxId="",this.labelId="",this.descriptorId="",this.handleEscKeyClick=e=>{const{onEscapePress:t}=this.props;e.keyCode===o.KEY_CODES.ESCAPE_KEY&&this.props.isOpen&&(t?t(e):this.props.onClose())},this.getElement=e=>"function"==typeof e?e():e||document.body,this.toggleSiblingsFromScreenReaders=e=>{const{appendTo:t}=this.props,a=this.getElement(t).children;for(const t of Array.from(a))t!==this.state.container&&(e?t.setAttribute("aria-hidden",""+e):t.removeAttribute("aria-hidden"))},this.isEmpty=e=>null==e||""===e;const t=m.currentId++,a=t+1,r=t+2;this.boxId=e.id||`pf-modal-part-${t}`,this.labelId=`pf-modal-part-${a}`,this.descriptorId=`pf-modal-part-${r}`,this.state={container:void 0,ouiaStateId:d.getDefaultOUIAId(m.displayName,e.variant)}}componentDidMount(){const{appendTo:e,title:t,"aria-label":a,"aria-labelledby":r,hasNoBodyWrapper:n,header:l}=this.props,o=this.getElement(e),c=document.createElement("div");this.setState({container:c}),o.appendChild(c),o.addEventListener("keydown",this.handleEscKeyClick,!1),this.props.isOpen?o.classList.add(s.css(i.default.backdropOpen)):o.classList.remove(s.css(i.default.backdropOpen)),this.isEmpty(t)&&this.isEmpty(a)&&this.isEmpty(r)&&console.error("Modal: Specify at least one of: title, aria-label, aria-labelledby."),this.isEmpty(a)&&this.isEmpty(r)&&(n||l)&&console.error("Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.")}componentDidUpdate(){const{appendTo:e}=this.props,t=this.getElement(e);this.props.isOpen?(t.classList.add(s.css(i.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!0)):(t.classList.remove(s.css(i.default.backdropOpen)),this.toggleSiblingsFromScreenReaders(!1))}componentWillUnmount(){const{appendTo:e}=this.props,t=this.getElement(e);this.state.container&&t.removeChild(this.state.container),t.removeEventListener("keydown",this.handleEscKeyClick,!1),t.classList.remove(s.css(i.default.backdropOpen))}render(){const e=this.props,{appendTo:t,onEscapePress:a,"aria-labelledby":s,"aria-label":i,"aria-describedby":d,title:u,titleIconVariant:m,titleLabel:p,ouiaId:f,ouiaSafe:v}=e,b=r.__rest(e,["appendTo","onEscapePress","aria-labelledby","aria-label","aria-describedby","title","titleIconVariant","titleLabel","ouiaId","ouiaSafe"]),{container:h}=this.state;return o.canUseDOM&&h?l.createPortal(n.createElement(c.ModalContent,Object.assign({},b,{boxId:this.boxId,labelId:this.labelId,descriptorId:this.descriptorId,title:u,titleIconVariant:m,titleLabel:p,"aria-label":i,"aria-describedby":d,"aria-labelledby":s,ouiaId:void 0!==f?f:this.state.ouiaStateId,ouiaSafe:v})),h):null}}t.u_=m,m.displayName="Modal",m.currentId=0,m.defaultProps={className:"",isOpen:!1,title:"",titleIconVariant:null,titleLabel:"","aria-label":"",showClose:!0,"aria-describedby":"","aria-labelledby":"",id:void 0,actions:[],onClose:()=>{},variant:"default",hasNoBodyWrapper:!1,appendTo:()=>document.body,ouiaSafe:!0}},80271:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBox=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(38296),o=r.__importDefault(a(11997)),s=r.__importDefault(a(56276));t.ModalBox=e=>{var{children:t,className:a="",variant:i="default",position:c,positionOffset:d,"aria-labelledby":u,"aria-label":m="","aria-describedby":p,style:f}=e,v=r.__rest(e,["children","className","variant","position","positionOffset","aria-labelledby","aria-label","aria-describedby","style"]);return d&&((f=f||{})[s.default.name]=d),n.createElement("div",Object.assign({},v,{role:"dialog","aria-label":m||null,"aria-labelledby":u||null,"aria-describedby":p,"aria-modal":"true",className:l.css(o.default.modalBox,a,"top"===c&&o.default.modifiers.alignTop,"large"===i&&o.default.modifiers.lg,"small"===i&&o.default.modifiers.sm,"medium"===i&&o.default.modifiers.md),style:f}),t)},t.ModalBox.displayName="ModalBox"},66973:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxBody=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(38296),o=r.__importDefault(a(11997));t.ModalBoxBody=e=>{var{children:t=null,className:a=""}=e,s=r.__rest(e,["children","className"]);return n.createElement("div",Object.assign({},s,{className:l.css(o.default.modalBoxBody,a)}),t)},t.ModalBoxBody.displayName="ModalBoxBody"},27631:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxCloseButton=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(16396),o=r.__importDefault(a(33606));t.ModalBoxCloseButton=e=>{var{className:a="",onClose:s=(()=>{}),ouiaId:i}=e,c=r.__rest(e,["className","onClose","ouiaId"]);return n.createElement(l.Button,Object.assign({className:a,variant:"plain",onClick:s,"aria-label":"Close"},i&&{ouiaId:`${i}-${t.ModalBoxCloseButton.displayName}`},c),n.createElement(o.default,null))},t.ModalBoxCloseButton.displayName="ModalBoxCloseButton"},23788:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxDescription=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(38296),o=r.__importDefault(a(11997));t.ModalBoxDescription=e=>{var{children:t=null,className:a="",id:s=""}=e,i=r.__rest(e,["children","className","id"]);return n.createElement("div",Object.assign({},i,{id:s,className:l.css(o.default.modalBoxDescription,a)}),t)},t.ModalBoxDescription.displayName="ModalBoxDescription"},90818:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxFooter=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(38296),o=r.__importDefault(a(11997));t.ModalBoxFooter=e=>{var{children:t=null,className:a=""}=e,s=r.__rest(e,["children","className"]);return n.createElement("footer",Object.assign({},s,{className:l.css(o.default.modalBoxFooter,a)}),t)},t.ModalBoxFooter.displayName="ModalBoxFooter"},38364:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxHeader=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(38296),o=r.__importDefault(a(11997));t.ModalBoxHeader=e=>{var{children:t=null,className:a="",help:s=null}=e,i=r.__rest(e,["children","className","help"]);return n.createElement("header",Object.assign({className:l.css(o.default.modalBoxHeader,s&&o.default.modifiers.help,a)},i),s&&n.createElement(n.Fragment,null,n.createElement("div",{className:l.css(o.default.modalBoxHeaderMain)},t),n.createElement("div",{className:"pf-c-modal-box__header-help"},s)),!s&&t)},t.ModalBoxHeader.displayName="ModalBoxHeader"},76532:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalBoxTitle=t.isVariantIcon=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=r.__importDefault(a(11997)),o=a(38296),s=r.__importDefault(a(63339)),i=a(23053),c=a(8045),d=r.__importDefault(a(35451)),u=r.__importDefault(a(84564)),m=r.__importDefault(a(19694)),p=r.__importDefault(a(31369)),f=r.__importDefault(a(36853)),v=a(23053);t.isVariantIcon=e=>["success","danger","warning","info","default"].includes(e),t.ModalBoxTitle=e=>{var{className:a="",id:b,title:h,titleIconVariant:y,titleLabel:E=""}=e,g=r.__rest(e,["className","id","title","titleIconVariant","titleLabel"]);const[_,O]=n.useState(!1),N=n.useRef(),B=E||(t.isVariantIcon(y)?`${i.capitalize(y)} alert:`:E),S={success:n.createElement(d.default,null),danger:n.createElement(u.default,null),warning:n.createElement(m.default,null),info:n.createElement(p.default,null),default:n.createElement(f.default,null)},I=!t.isVariantIcon(y)&&y;v.useIsomorphicLayoutEffect((()=>{O(N.current&&N.current.offsetWidth<N.current.scrollWidth)}),[]);const M=n.createElement("h1",Object.assign({id:b,ref:N,className:o.css(l.default.modalBoxTitle,y&&l.default.modifiers.icon,a)},g),y&&n.createElement("span",{className:o.css(l.default.modalBoxTitleIcon)},t.isVariantIcon(y)?S[y]:n.createElement(I,null)),B&&n.createElement("span",{className:o.css(s.default.screenReader)},B),n.createElement("span",{className:o.css(l.default.modalBoxTitleText)},h));return _?n.createElement(c.Tooltip,{content:h,isVisible:!0},M):M},t.ModalBoxTitle.displayName="ModalBoxTitle"},57674:(e,t,a)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ModalContent=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=a(23053),o=r.__importDefault(a(11997)),s=r.__importDefault(a(25687)),i=a(38296),c=a(23053),d=a(61398),u=a(66973),m=a(27631),p=a(80271),f=a(90818),v=a(23788),b=a(38364),h=a(76532);t.ModalContent=e=>{var{children:a,className:y="",isOpen:E=!1,header:g=null,help:_=null,description:O=null,title:N="",titleIconVariant:B=null,titleLabel:S="","aria-label":I="","aria-describedby":M,"aria-labelledby":x,showClose:C=!0,footer:P=null,actions:Z=[],onClose:j=(()=>{}),variant:D="default",position:w,positionOffset:T,width:k=-1,boxId:L,labelId:F,descriptorId:A,disableFocusTrap:V=!1,hasNoBodyWrapper:H=!1,ouiaId:R,ouiaSafe:U=!0}=e,K=r.__rest(e,["children","className","isOpen","header","help","description","title","titleIconVariant","titleLabel","aria-label","aria-describedby","aria-labelledby","showClose","footer","actions","onClose","variant","position","positionOffset","width","boxId","labelId","descriptorId","disableFocusTrap","hasNoBodyWrapper","ouiaId","ouiaSafe"]);if(!E)return null;const W=g?n.createElement(b.ModalBoxHeader,{help:_},g):N&&n.createElement(b.ModalBoxHeader,{help:_},n.createElement(h.ModalBoxTitle,{title:N,titleIconVariant:B,titleLabel:S,id:F}),O&&n.createElement(v.ModalBoxDescription,{id:A},O)),G=P?n.createElement(f.ModalBoxFooter,null,P):Z.length>0&&n.createElement(f.ModalBoxFooter,null,Z),q=H?a:n.createElement(u.ModalBoxBody,Object.assign({},K,!O&&!M&&{id:A}),a),z=-1===k?{}:{width:k},Y=n.createElement(p.ModalBox,Object.assign({id:L,style:z,className:i.css(y,h.isVariantIcon(B)&&o.default.modifiers[B]),variant:D,position:w,positionOffset:T,"aria-label":I,"aria-labelledby":(()=>{if(null===x)return null;const e=[];return""!==(I&&L)&&e.push(I&&L),x&&e.push(x),N&&e.push(F),e.join(" ")})(),"aria-describedby":M||(H?null:A)},c.getOUIAProps(t.ModalContent.displayName,R,U)),C&&n.createElement(m.ModalBoxCloseButton,{onClose:j,ouiaId:R}),W,q,G);return n.createElement(d.Backdrop,null,n.createElement(l.FocusTrap,{active:!V,focusTrapOptions:{clickOutsideDeactivates:!0},className:i.css(s.default.bullseye)},Y))},t.ModalContent.displayName="ModalContent"},81159:(e,t,a)=>{t.K=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=r.__importDefault(a(15957)),o=a(38296);t.K=e=>{var{hasGutter:t=!1,className:a="",children:s=null,component:i="div"}=e,c=r.__rest(e,["hasGutter","className","children","component"]);const d=i;return n.createElement(d,Object.assign({},c,{className:o.css(l.default.stack,t&&l.default.modifiers.gutter,a)}),s)},t.K.displayName="Stack"},34023:(e,t,a)=>{t.v=void 0;const r=a(70655),n=r.__importStar(a(41375)),l=r.__importDefault(a(15957)),o=a(38296);t.v=e=>{var{isFilled:t=!1,className:a="",children:s=null}=e,i=r.__rest(e,["isFilled","className","children"]);return n.createElement("div",Object.assign({},i,{className:o.css(l.default.stackItem,t&&l.default.modifiers.fill,a)}),s)},t.v.displayName="StackItem"},36853:(e,t,a)=>{t.__esModule=!0,t.BellIconConfig={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},t.BellIcon=a(35183).createIcon(t.BellIconConfig),t.default=t.BellIcon},56276:(e,t)=>{t.__esModule=!0,t.c_modal_box_m_align_top_spacer={name:"--pf-c-modal-box--m-align-top--spacer",value:"0.5rem",var:"var(--pf-c-modal-box--m-align-top--spacer)"},t.default=t.c_modal_box_m_align_top_spacer},83905:(e,t,a)=>{a.d(t,{Z:()=>f});var r=a(87462),n=a(29439),l=a(41375),o=a.n(l),s=a(13784),i=a(44612),c=a(80887),d=a(77221),u=a(82553),m=a(32132),p=a(30893);const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=o().useState(!1),l=(0,n.Z)(a,2),f=l[0],v=l[1],b=o().useState(10),h=(0,n.Z)(b,2),y=h[0],E=h[1],g=s.nW.slice().reverse(),_=e.os,O="string"==typeof _&&_.split(",")||[],N=function(e,a){if(_&&!_.includes(a))t({filter:{os:"".concat(O.join(","),",").concat(a)}});else if(_&&_.includes(a)){var r=O.filter((function(e){return e!==a}));t({filter:{os:r.length>0&&"".concat(r.join(","))||void 0}})}else t({filter:{os:""!==a&&a||void 0}})},B=function(e){v(e)},S=function(){E(g.length)};return{type:i.Y.custom,label:m.N.formatMessage(p.Z.labelsFiltersOsVersion),value:"custom",filterValues:{children:o().createElement(c.P,(0,r.Z)({variant:u.SelectVariant.checkbox,typeAheadAriaLabel:m.N.formatMessage(p.Z.labelsFiltersOsVersionPlaceholder),onToggle:B,onSelect:N,selections:O,isOpen:f,"aria-labelledby":"patch-os-version-filter",placeholderText:m.N.formatMessage(p.Z.labelsFiltersOsVersionPlaceholder)},y<g.length&&{loadingVariant:{text:"View more",onClick:S}},{style:{maxHeight:"400px",overflow:"auto"}}),g.slice(0,y).map((function(e,t){return o().createElement(d.SelectOption,{key:t,value:e.value})})))}}}},49642:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(48716),n=a(39173),l=a(45697),o=a.n(l),s=a(41375),i=a.n(s),c=a(85991),d=a(49489),u=a(92818),m=function(e){var t=e.items,a=e.headerOUIA;return i().createElement(c.a,null,t.filter(Boolean).map((function(e){return i().createElement(d.g,{key:e.title,isActive:e.isActive},e.to&&i().createElement(u.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};m.propTypes={items:o().arrayOf(o().shape({isActive:o().bool,to:o().string,title:o().string})),headerOUIA:o().string};const p=m;var f=a(82819),v=a(98378),b=a(60076),h=function(e){var t=e.history,a=e.headerOUIA;return i().createElement(v.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},i().createElement(f.O,{eventKey:b.H.advisories.to,title:b.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(b.H.advisories.title)}),i().createElement(f.O,{eventKey:b.H.systems.to,title:b.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(b.H.systems.title)}))};h.propTypes={history:o().object,headerOUIA:o().string};const y=(0,u.withRouter)(h);var E=function(e){var t=e.title,a=e.showTabs,l=e.breadcrumbs,o=e.children,s=e.headerOUIA;return i().createElement(i().Fragment,null,i().createElement(r.Z,{"data-ouia-component-type":"".concat(s,"-page-header")},l&&i().createElement(p,{items:l,headerOUIA:s}),i().createElement(n.Z,{title:t}),o),a&&i().createElement(y,{headerOUIA:s}))};E.propTypes={title:o().string,showTabs:o().bool,breadcrumbs:o().array,children:o().any,headerOUIA:o().string};const g=E},52709:(e,t,a)=>{a.d(t,{x:()=>h,ZP:()=>g});var r=a(45987),n=a(4942),l=a(56455),o=a(87462),s=a(41375),i=a.n(s),c=a(45697),d=a.n(c),u=a(94184),m=a.n(u),p=function(e){var t=e.centered,a=e.className,l=(0,r.Z)(e,["centered","className"]),s=m()("ins-c-spinner",(0,n.Z)({},"ins-m-center",t),a);return i().createElement("div",(0,o.Z)({role:"status",className:s},l),i().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};p.propTypes={centered:d().bool,className:d().string};const f=p;var v,b=["loading","variant","children"],h={spinner:"spinner",skeleton:"skeleton"},y=(v={},(0,n.Z)(v,h.skeleton,(function(e){var t=e.size,a=e.isDark;return i().createElement(l.Z,{size:t,isDark:a})})),(0,n.Z)(v,h.spinner,(function(e){var t=e.centered;return i().createElement(f,{centered:t})})),v),E=function(e){var t=e.loading,a=e.variant,n=e.children,l=(0,r.Z)(e,b);return!1!==t?y[a](l):n};E.propTypes={loading:d().bool,variant:d().string,children:d().any};const g=E},96688:(e,t,a)=>{a.r(t),a.d(t,{default:()=>he});var r=a(4942),n=a(29439),l=a(81159),o=a(34023),s=a(63540),i=a(20018),c=a(86350),d=a(45697),u=a.n(d),m=a(41375),p=a.n(m),f=a(28216),v=a(92818),b=a(30893),h=a(6202),y=a(49287),E=a(18038),g=a(42057),_=a(36001),O=a(36842),N=a(21508),B=a(34348),S=a(35240),I=a(52709),M=a(78826),x=a(32132),C=a(38776),P=a(90747),Z=a(64270),j=a(9557),D=a(57668),w=a(57358),T=a(72573),k=function(e){var t=e.cveIds,a=(0,f.I0)(),r=(0,m.useState)([]),l=(0,n.Z)(r,2),o=l[0],s=l[1],i=(0,m.useState)([]),c=(0,n.Z)(i,2),d=c[0],u=c[1],v=(0,m.useState)(1),h=(0,n.Z)(v,2),y=h[0],E=h[1],g=(0,m.useState)(10),_=(0,n.Z)(g,2),O=_[0],N=_[1],B=(0,m.useState)(void 0),S=(0,n.Z)(B,2),I=S[0],k=S[1],L=(0,m.useState)({direction:T.SortByDirection.asc,index:0}),F=(0,n.Z)(L,2),A=F[0],V=F[1],H=(0,f.v9)((function(e){return e.CvesListStore.rows})),R=(0,f.v9)((function(e){return e.CvesListStore.status}));p().useEffect((function(){a((0,j.Xt)({cveIds:t}))}),[]),p().useMemo((function(){u(o.slice((y-1)*O,y*O))}),[o,y,O,A]),(0,m.useMemo)((function(){var e=void 0!==I&&""!==I&&H.filter((function(e){var t=e.attributes.synopsis;return t&&I&&t.toLowerCase().includes(I.toLowerCase())}))||H;s((0,D.KW)((0!==e.length||I)&&e||H))}),[I,H]);var U=function(e){var t=e.search;E(y),k(t)};return p().createElement(p().Fragment,null,p().createElement(M.u_,{variant:"small",title:x.N.formatMessage(b.Z.labelsCves),isOpen:Boolean(d),onClose:function(){u(void 0)}},p().createElement(C.Z,{columns:Z.g,onSetPage:function(e,t){E(t)},onPerPageSelect:function(e,t){E(1),N(t)},apply:U,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,a){var r=(0,w.Qg)(o,t,a),n=r.sortBy,l=r.sortedCves;V(n),s(l)},sortBy:A,store:{rows:d,metadata:{limit:O,offset:(y-1)*O,total_items:o&&o.length},status:R,queryParams:{filter:{},search:I}},filterConfig:{items:[(0,P.Z)(U,I,"",x.N.formatMessage(b.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};k.propTypes={cveIds:u().array};const L=k;var F=a(7665),A=a(19210),V=function(e){var t=e.severity;return p().createElement(O.P,{className:"infobox",hasGutter:!0},p().createElement(N.J,{isFilled:!0},p().createElement(_.k,{flex:{default:"column"}},p().createElement(g.B,{spacer:{default:"spacerNone"}},p().createElement(B.Dx,{headingLevel:"h5"},x.N.formatMessage(b.Z.labelsColumnsSeverity))),p().createElement(g.B,{spacer:{default:"spacerSm"}},p().createElement(_.k,{flex:{default:"row"}},p().createElement(g.B,null,p().createElement(A.ZP,{size:"sm",color:t.color})),p().createElement(g.B,null,t.label))))))};V.propTypes={severity:u().object};const H=V;var R=a(55970),U=a(18464),K=function(e){var t=e.attributes,a=e.isLoading,r=(0,m.useState)((function(){return function(){return null}})),c=(0,n.Z)(r,2),d=c[0],u=c[1],f=(0,m.useState)(1e3),v=(0,n.Z)(f,2),M=v[0],C=v[1],P=(0,w.r)(t.severity),Z=t.cves;return p().createElement(y.r,{hasGutter:!0,style:{minHeight:150}},p().createElement(E.P,{md:8,sm:12},p().createElement(I.ZP,{loading:a,variant:I.x.spinner,centered:!0},p().createElement(l.K,{hasGutter:!0},p().createElement(o.v,null),p().createElement(o.v,{style:{whiteSpace:"pre-line"}},t.description&&(0,w.Nt)(t.description,M,C)),p().createElement(o.v,null,t.public_date&&p().createElement(p().Fragment,null,x.N.formatMessage(b.Z.labelsPublicDate,{date:(0,S.Un)(t.public_date)}),p().createElement("br",null)),t.modified_date&&p().createElement(p().Fragment,null,x.N.formatMessage(b.Z.labelsModifiedDate,{date:(0,S.Un)(t.modified_date)}))),(0,w.q5)(t.id)&&p().createElement(o.v,null,p().createElement(R.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:x.N.formatMessage(b.Z.linksViewPackagesAndErrata)}))))),p().createElement(E.P,{md:4,sm:12},p().createElement(_.k,{flex:{default:"column"}},t.advisory_type_name&&p().createElement(g.B,null,p().createElement(O.P,{className:"infobox",hasGutter:!0},p().createElement(N.J,{isFilled:!0},p().createElement(_.k,{flex:{default:"column"}},p().createElement(g.B,{spacer:{default:"spacerNone"}},p().createElement(B.Dx,{headingLevel:"h5"},x.N.formatMessage(b.Z.titlesAdvisoryType))),p().createElement(g.B,{spacer:{default:"spacerSm"}},p().createElement(U.Z,{type:t.advisory_type_name})))))),0!==P.value&&p().createElement(g.B,null,p().createElement(H,{severity:P})),t.reboot_required&&p().createElement(g.B,{spacer:{default:"spacerMd"}},p().createElement(F.Z,null)))),Z&&0!==Z.length&&p().createElement(E.P,{md:4,sm:12},p().createElement(i.D,null,p().createElement(s.xv,{component:s.qO.h3},x.N.formatMessage(b.Z.labelsCves)),p().createElement(h.Button,{variant:"link",style:{padding:0},onClick:function(){u((function(){return function(){return p().createElement(L,{cveIds:Z})}}))}},x.N.formatMessage(b.Z.labelsCvesButton,{cvesCount:Z.length})))),p().createElement(d,null))};K.propTypes={attributes:u().object,isLoading:u().bool};const W=K;var G=a(49642),q=a(20167),z=a(60076),Y=a(91607),$=a(15861),Q=a(87757),J=a.n(Q),X=a(33739),ee=a(83905),te=a(73888),ae=a(32041),re=a(5747),ne=a(11220),le=a(13784),oe=a(20259),se=a(58684),ie=a(55485);function ce(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function de(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ce(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ue=function(e){var t=e.advisoryName,a=(0,f.I0)(),r=p().useState(!1),l=(0,n.Z)(r,2),o=l[0],s=l[1],i=p().useState((function(){return function(){return null}})),c=(0,n.Z)(i,2),d=c[0],u=c[1],m=(0,v.useHistory)(),h=(0,w.PZ)(m.location.search),y=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),f.wU),E=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),g=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),_=(0,f.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),O=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),N=_.systemProfile,B=_.selectedTags,S=_.filter,I=_.search,M=_.page,C=_.perPage,Z=_.sort;function D(e){a((0,j.pH)(e))}p().useEffect((function(){return D(h),function(){a((0,j.RV)()),a((0,j.Yf)())}}),[]);var k=(0,Y.j5)(de({search:I},S),D),L=(0,n.Z)(k,1)[0],F={items:[(0,P.Z)(D,I,x.N.formatMessage(b.Z.labelsFiltersSystemsSearchTitle),x.N.formatMessage(b.Z.labelsFiltersSystemsSearchPlaceholder)),(0,ee.Z)(S,D)]},A={filters:(0,w.mt)(S,I,x.N.formatMessage(b.Z.labelsFiltersSystemsSearchTitle)),onDelete:L};function V(){return(V=(0,$.Z)(J().mark((function e(t){var a;return J().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:a=e.sent,u((function(){return function(){return p().createElement(ie.Z,{data:a,isRemediationOpen:!0,setRemediationOpen:s})}})),s(!o);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var H=(0,Y.ry)(y,O,(function(){return(0,ne.cK)(de(de({},_),{},{id:t,limit:-1})).then(w.zw)}),(function(e){a({type:"SELECT_ENTITY",payload:e})})),R=O&&(0,w.Qy)(O).length,U=(0,Y.U)(ne.cK,D,{id:t},m),K=(0,Y.AR)(t,_,{csv:ne.nb,json:ne.Se},a);return p().createElement(p().Fragment,null,o&&p().createElement(d,null)||null,E.hasError&&p().createElement(te.Z,{code:E.code})||p().createElement(X.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0,tags:!1},columns:w.gB,showTags:!0,customFilters:{patchParams:{search:I,filter:S,systemProfile:N,selectedTags:B}},onLoad:function(e){var t=e.mergeWithEntities;(0,ae.z)(de({},t((0,re.Kq)(se.Fs,re.G),(0,w.fm)({page:M,perPage:C,sort:Z,search:I},h))))},getEntities:U,actions:(0,se.Sb)((function(e){return V.apply(this,arguments)})),tableProps:{canSelectAll:!1,variant:T.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:F,activeFiltersConfig:A,exportConfig:{isDisabled:0===g,onSelect:K},bulkSelect:H&&(0,Y.Pz)(R,H,{total_items:g},y),dedicatedAction:p().createElement(oe.Z,{remediationProvider:function(){return(0,w.MS)(t,(0,w.Q6)(O),le.oN.advisory)},isDisabled:0===(0,w.Qy)(O).length})}))};ue.propTypes={advisoryName:u().string};const me=ue;var pe=a(83215);function fe(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function ve(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):fe(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var be=function(e){var t=e.match,a=(0,f.I0)(),r=p().useState(t.params.advisoryId),d=(0,n.Z)(r,1)[0],u="".concat(d," - ").concat(x.N.formatMessage(b.Z.titlesAdvisories));(0,Y.Iw)(u);var m=(0,f.v9)((function(e){return e.AdvisoryDetailStore})),v=(0,f.v9)((function(e){return e.AdvisoryDetailStore.status}));p().useEffect((function(){a((0,j.N2)({advisoryName:d}))}),[]),p().useEffect((function(){return function(){a((0,j.jl)()),a((0,j.JP)()),a((0,pe.L1)())}}),[]);var h=m.data.attributes;return p().createElement(p().Fragment,null,p().createElement(G.Z,{title:d,headerOUIA:"advisory-details",breadcrumbs:[{title:x.N.formatMessage(b.Z.titlesPatchAdvisories),to:z.H.advisories.to,isActive:!1},{title:d,isActive:!0}]},v.hasError?p().createElement(q.Z,null):p().createElement(W,{attributes:ve(ve({},h),{},{id:d}),isLoading:v.isLoading})),p().createElement(c.Z,null,p().createElement(l.K,{hasGutter:!0},p().createElement(o.v,null,p().createElement(i.D,null,p().createElement(s.xv,{component:s.qO.h2},x.N.formatMessage(b.Z.titlesAffectedSystems)))),p().createElement(o.v,null,v.hasError&&p().createElement(te.Z,null)||!v.isLoading&&p().createElement(me,{advisoryName:d})))))};be.propTypes={match:u().any};const he=(0,v.withRouter)(be)},55485:(e,t,a)=>{a.d(t,{Z:()=>c});var r=a(41375),n=a.n(r),l=a(45697),o=a.n(l),s=a(22663),i=function(e){var t=e.data,a=e.setRemediationOpen;return n().createElement(s.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:a,data:t})};i.propTypes={data:o().object,setRemediationOpen:o().func};const c=i},5747:(e,t,a)=>{a.d(t,{G:()=>d,Kq:()=>m,OC:()=>u});var r=a(4942),n=a(57668),l=a(48881),o=a(22789);function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},d=function(e,t){return t.loaded?i(i({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,n.Yk)(t.rows,t.selectedRows)}):t},u=function(e,t){return t.loaded?i(i({},t),{},{columns:e,rows:(0,n.GF)(t.rows,t.selectedRows)}):t},m=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1?arguments[1]:void 0,n=i({},a);switch(r.type){case"LOAD_ENTITIES_FULFILLED":return t(e,n);case"LOAD_ENTITIES_PENDING":return n.status={isLoading:!0,hasError:!1},n;case"LOAD_ENTITIES_REJECTED":return n.status={isLoading:!0,hasError:!0},n;case"SELECT_ENTITY":var s=(0,l.hd)(n,r);return t(e,s);case o.sq:return c;default:return a}}}}}]);