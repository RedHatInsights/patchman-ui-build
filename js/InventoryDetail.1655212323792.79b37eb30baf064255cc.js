(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[184],{70044:(e,t,n)=>{"use strict";t.bZ=t.Ux=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=n(43297),l=n(38296),i=a.__importDefault(n(91487)),o=a.__importDefault(n(63339)),c=n(61370),u=n(23053),m=n(18951),f=a.__importDefault(n(43978)),p=n(8045),d=n(18918);var g;!function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.default="default"}(g=t.Ux||(t.Ux={})),t.bZ=e=>{var{variant:n=g.default,isInline:h=!1,isPlain:v=!1,isLiveRegion:y=!1,variantLabel:_=`${u.capitalize(n)} alert:`,"aria-label":E=`${u.capitalize(n)} Alert`,actionClose:b,actionLinks:x,title:S,titleHeadingLevel:O="h4",children:N="",className:w="",ouiaId:I,ouiaSafe:k=!0,timeout:D=!1,timeoutAnimation:M=3e3,onTimeout:P=(()=>{}),truncateTitle:T=0,tooltipPosition:j,customIcon:Z,isExpandable:A=!1,toggleAriaLabel:R=`${u.capitalize(n)} alert details`,onMouseEnter:C=(()=>{}),onMouseLeave:L=(()=>{})}=e,U=a.__rest(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","aria-label","actionClose","actionLinks","title","titleHeadingLevel","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave"]);const B=u.useOUIAProps(t.bZ.displayName,I,k,n),H=s.createElement(s.Fragment,null,s.createElement("span",{className:l.css(o.default.screenReader)},_),S),z=s.useRef(null),$=s.useRef(),[q,W]=r.useState(!1);s.useEffect((()=>{if(!z.current||!T)return;z.current.style.setProperty(f.default.name,T.toString());const e=z.current&&z.current.offsetHeight<z.current.scrollHeight;q!==e&&W(e)}),[z,T,q]);const[G,J]=r.useState(!1),[V,F]=r.useState(!0),[X,K]=r.useState(),[Q,Y]=r.useState(),ee=G&&V&&!X&&!Q;s.useEffect((()=>{if((D=!0===D?8e3:Number(D))>0){const e=setTimeout((()=>J(!0)),D);return()=>clearTimeout(e)}}),[]),s.useEffect((()=>{const e=()=>{$.current&&($.current.contains(document.activeElement)?(Y(!0),F(!1)):Q&&Y(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[Q]),s.useEffect((()=>{if(!1===Q||!1===X){const e=setTimeout((()=>F(!0)),M);return()=>clearTimeout(e)}}),[Q,X]),s.useEffect((()=>{ee&&P()}),[ee]);const[te,ne]=r.useState(!1);if(ee)return null;const ae=s.createElement(O,Object.assign({},q&&{tabIndex:0},{ref:z,className:l.css(i.default.alertTitle,T&&i.default.modifiers.truncate)}),H);return s.createElement("div",Object.assign({ref:$,className:l.css(i.default.alert,h&&i.default.modifiers.inline,v&&i.default.modifiers.plain,A&&i.default.modifiers.expandable,te&&i.default.modifiers.expanded,i.default.modifiers[n],w),"aria-label":E},B,y&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{K(!0),F(!1),C(e)},onMouseLeave:e=>{K(!1),L(e)}},U),A&&s.createElement(m.AlertContext.Provider,{value:{title:S,variantLabel:_}},s.createElement("div",{className:l.css(i.default.alertToggle)},s.createElement(d.AlertToggleExpandButton,{isExpanded:te,onToggleExpand:()=>{ne(!te)},"aria-label":R}))),s.createElement(c.AlertIcon,{variant:n,customIcon:Z}),q?s.createElement(p.Tooltip,{content:H,position:j},ae):ae,b&&s.createElement(m.AlertContext.Provider,{value:{title:S,variantLabel:_}},s.createElement("div",{className:l.css(i.default.alertAction)},b)),N&&(!A||A&&te)&&s.createElement("div",{className:l.css(i.default.alertDescription)},N),x&&s.createElement("div",{className:l.css(i.default.alertActionGroup)},x))},t.bZ.displayName="Alert"},18951:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertContext=void 0;const a=n(70655).__importStar(n(43297));t.AlertContext=a.createContext(null)},61370:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertIcon=t.variantIcons=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=n(38296),l=a.__importDefault(n(91487)),i=a.__importDefault(n(35451)),o=a.__importDefault(n(84564)),c=a.__importDefault(n(19694)),u=a.__importDefault(n(31369)),m=a.__importDefault(n(36853));t.variantIcons={success:i.default,danger:o.default,warning:c.default,info:u.default,default:m.default},t.AlertIcon=e=>{var{variant:n,customIcon:i,className:o=""}=e,c=a.__rest(e,["variant","customIcon","className"]);const u=t.variantIcons[n];return s.createElement("div",Object.assign({},c,{className:r.css(l.default.alertIcon,o)}),i||s.createElement(u,null))}},18918:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertToggleExpandButton=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=n(16396),l=n(18951),i=a.__importDefault(n(95511)),o=n(38296),c=a.__importDefault(n(91487));t.AlertToggleExpandButton=e=>{var{"aria-label":t,variantLabel:n,onToggleExpand:u,isExpanded:m}=e,f=a.__rest(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:p,variantLabel:d}=s.useContext(l.AlertContext);return s.createElement(r.Button,Object.assign({variant:r.ButtonVariant.plain,onClick:u,"aria-expanded":m,"aria-label":""===t?`Toggle ${n||d} alert: ${p}`:t},f),s.createElement("span",{className:o.css(c.default.alertToggleIcon)},s.createElement(i.default,{"aria-hidden":"true"})))},t.AlertToggleExpandButton.displayName="AlertToggleExpandButton"},26577:(e,t,n)=>{"use strict";t.O=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=a.__importDefault(n(68800)),l=n(38296);t.O=e=>{var{className:t,width:n,height:i,fontSize:o,shape:c,screenreaderText:u}=e,m=a.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const f=o?Object.values(r.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return s.createElement("div",Object.assign({},m,{className:l.css(r.default.skeleton,o&&f,"circle"===c&&r.default.modifiers.circle,"square"===c&&r.default.modifiers.square,t)},(n||i)&&{style:Object.assign({"--pf-c-skeleton--Width":n||void 0,"--pf-c-skeleton--Height":i||void 0},m.style)}),s.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},68800:(e,t,n)=>{"use strict";t.__esModule=!0,n(53336),t.default={modifiers:{circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"},skeleton:"pf-c-skeleton"}},43978:(e,t)=>{"use strict";t.__esModule=!0,t.c_alert__title_max_lines={name:"--pf-c-alert__title--max-lines",value:"1",var:"var(--pf-c-alert__title--max-lines)"},t.default=t.c_alert__title_max_lines},98333:(e,t,n)=>{"use strict";n.d(t,{Z:()=>O});var a=n(29439),s=n(43297),r=n.n(s),l=n(45697),i=n.n(l),o=n(78826),c=n(6202),u=n(49287),m=n(26577),f=n(74806),p=n(30893),d=n(15861),g=n(87757),h=n.n(g),v=n(28216),y=n(83215),_=n(11220),E=n(13784),b=n(18038),x=function(e,t,n){return r().createElement(b.P,null,n.formatMessage(p.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement("b",null,t)}}))},S=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,l=e.setUnassignSystemsModalOpen,i=e.intl,f=n.systemsIDs,g=n.isUnassignSystemsModalOpen,b=(0,s.useState)([]),S=(0,a.Z)(b,2),O=S[0],N=S[1],w=(0,s.useState)(!0),I=(0,a.Z)(w,2),k=I[0],D=I[1],M=function(e){l({isUnassignSystemsModalOpen:!g,systemsIDs:[],shouldRefresh:e})},P=function(){M(!1)},T=function(e,t){var n=(0,v.I0)(),a=function(){var a=(0,d.Z)(h().mark((function a(){return h().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,_.J_)({inventory_ids:t});case 2:200===a.sent.status&&(e(!0),n((0,y.wN)((0,E.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}(M,O);(0,s.useEffect)((function(){(function(e){return(0,_.lc)({limit:-1,"filter[baseline_name]":"neq:"}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))})(f).then((function(e){N(e),D(!1)}))}),[f]);var j=f.length-O.length;return r().createElement(o.Modal,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:i.formatMessage(p.Z.textUnassignSystemsTitle),onClose:P,titleIconVariant:"warning",actions:[r().createElement(c.Button,{key:"confirm",variant:"danger",onClick:T,isDisabled:0===O.length},i.formatMessage(p.Z.labelsRemove)),r().createElement(c.Button,{key:"cancel",variant:"link",onClick:P},i.formatMessage(p.Z.labelsCancel))]},r().createElement(u.r,{container:!0,hasGutter:!0},k&&r().createElement(m.O,null),!k&&0!==O.length&&x("textUnassignSystemsStatement",O.length,i),!k&&j>0&&x("textUnassignSystemsWarning",j,i)))};S.propTypes={intl:i().any,setUnassignSystemsModalOpen:i().func,unassignSystemsModalState:i().object};const O=(0,f.ZP)(S)},98249:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>J});var a=n(4942),s=n(29439),r=n(43297),l=n.n(r),i=n(14748),o=n(28216),c=n(49642),u=n(60076),m=n(2807),f=n(92544),p=n(32132),d=n(30893),g=n(91607),h=n(45697),v=n.n(h),y=n(59823),_=n(334),E=n(95995),b=n(39591),x=n(94184),S=n.n(x),O=function(){return O=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},O.apply(this,arguments)},N=function(e){var t=(0,_.useHistory)(),n=(0,o.oR)(),a=e.component;return l().createElement(a,{className:S()(e.className,"inventory")},l().createElement(r.Suspense,{fallback:e.fallback},l().createElement(y.ScalprumComponent,O({history:t,store:n,appName:"inventory",module:"./DetailWrapper",scope:"inventory",ErrorComponent:l().createElement(b.Z,O({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))))};N.propTypes={fallback:v().node,innerRef:v().object,component:v().string,className:v().string};var w=l().forwardRef((function(e,t){return l().createElement(N,O({innerRef:t},e))}));w.propTypes={fallback:v().node,component:v().string,className:v().string},w.defaultProps={fallback:l().createElement(E.Bullseye,{className:"pf-u-p-lg"},l().createElement(E.Spinner,{size:"xl"})),component:"section"};const I=w;var k=function(){return k=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},k.apply(this,arguments)},D=function(e){var t=(0,_.useHistory)(),n=(0,o.oR)(),a=e.component;return l().createElement(a,{className:S()(e.className,"inventory")},l().createElement(r.Suspense,{fallback:e.fallback},l().createElement(y.ScalprumComponent,k({history:t,store:n,appName:"inventory",module:"./InventoryDetailHead",scope:"inventory",ErrorComponent:l().createElement(b.Z,k({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))))};D.propTypes={fallback:v().node,innerRef:v().object,component:v().string,className:v().string};var M=l().forwardRef((function(e,t){return l().createElement(D,k({innerProps:t},e))}));M.propTypes={fallback:v().node,component:v().string,className:v().string},M.defaultProps={fallback:l().createElement(E.Bullseye,{className:"pf-u-p-lg"},l().createElement(E.Spinner,{size:"xl"})),component:"section"};const P=M;var T=function(){return T=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},T.apply(this,arguments)},j=function(e){var t=(0,_.useHistory)(),n=(0,o.oR)(),a=e.component;return l().createElement(a,{className:S()(e.className,"inventory")},l().createElement(r.Suspense,{fallback:e.fallback},l().createElement(y.ScalprumComponent,T({history:t,store:n,appName:"inventory",module:"./AppInfo",scope:"inventory",ErrorComponent:l().createElement(b.Z,T({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))))};j.propTypes={fallback:v().node,innerRef:v().object,component:v().string,className:v().string};var Z=l().forwardRef((function(e,t){return l().createElement(j,T({innerRef:t},e))}));Z.propTypes={fallback:v().node,component:v().string,className:v().string},Z.defaultProps={fallback:l().createElement(E.Bullseye,{className:"pf-u-p-lg"},l().createElement(E.Spinner,{size:"xl"})),component:"section"};const A=Z;var R=n(70044),C=n(49287),L=n(18038),U=n(20018),B=n(63540),H=n(9557),z=n(83215),$=n(32166),q=n(98333);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var G=function(e){var t,n=e.match,h=l().useState({isUnassignSystemsModalOpen:!1,systemsIDs:[],shouldRefresh:!1}),v=(0,s.Z)(h,2),y=v[0],_=v[1],E=l().useState({isOpen:!1,shouldRefresh:!1,systemsIDs:[]}),b=(0,s.Z)(E,2),x=b[0],S=b[1],O=(0,o.I0)(),N=(0,o.v9)((function(e){var t=e.entityDetails;return t&&t.entity})),w=(0,o.v9)((function(e){var t=e.entityDetails;return null!=t?t:{}})),k=w.hasThirdPartyRepo,D=w.patchSetName,M=null===(t=n.params)||void 0===t?void 0:t.inventoryId;(0,r.useEffect)((function(){return O((0,H.Eh)(M)),function(){O((0,z.L1)())}}),[x.shouldRefresh,y.shouldRefresh]);var T=N&&"".concat(N.display_name," - ").concat(p.N.formatMessage(d.Z.titlesSystems));return(0,g.Iw)(T),l().createElement(I,{onLoad:function(e){var t=e.mergeWithDetail;(0,m.z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t(f.J)))}},y.isUnassignSystemsModalOpen&&l().createElement(q.Z,{unassignSystemsModalState:y,setUnassignSystemsModalOpen:_,systemsIDs:y.systemsIDs}),x.isOpen&&l().createElement($.Z,{systemsIDs:x.systemsIDs,setBaselineState:S}),l().createElement(c.Z,{title:"",headerOUIA:"inventory-details",breadcrumbs:[{title:p.N.formatMessage(d.Z.titlesPatchSystems),to:u.H.systems.to,isActive:!1},N&&{title:N.display_name,isActive:!0}]},l().createElement(P,{hideBack:!0,showTags:!0,actions:[{title:p.N.formatMessage(d.Z.titlesPatchSetAssign),key:"assign-to-patch-set",onClick:function(){S({isOpen:!0,systemsIDs:[M]})}},{title:p.N.formatMessage(d.Z.titlesPatchSetRemoveMultipleButton),key:"remove-from-patch-set",isDisabled:!D,onClick:function(){_({isUnassignSystemsModalOpen:!0,systemsIDs:[M]})}}]},l().createElement(C.r,null,l().createElement(L.P,null,D&&l().createElement(U.D,null,l().createElement(B.xv,null,"".concat(p.N.formatMessage(d.Z.labelsColumnsPatchSet),": ").concat(D)))),l().createElement(L.P,null,k&&l().createElement(R.bZ,{className:"pf-u-mt-md",isInline:!0,variant:"info",title:p.N.formatMessage(d.Z.textThirdPartyInfo)}))))),l().createElement(i.Z,null,l().createElement(A,null)))};G.propTypes={match:v().object};const J=G},53336:()=>{}}]);