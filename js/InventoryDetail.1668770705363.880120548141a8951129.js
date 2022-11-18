(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[184],{70044:(e,t,n)=>{"use strict";t.bZ=t.Ux=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=n(43297),i=n(38296),l=a.__importDefault(n(96888)),o=a.__importDefault(n(79818)),c=n(2582),u=n(23053),m=n(18951),f=a.__importDefault(n(43978)),p=n(8045),d=n(18918);var h;!function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.default="default"}(h=t.Ux||(t.Ux={})),t.bZ=e=>{var{variant:n=h.default,isInline:g=!1,isPlain:v=!1,isLiveRegion:y=!1,variantLabel:_=`${u.capitalize(n)} alert:`,"aria-label":b=`${u.capitalize(n)} Alert`,actionClose:x,actionLinks:E,title:S,titleHeadingLevel:j="h4",children:O="",className:N="",ouiaId:k,ouiaSafe:w=!0,timeout:P=!1,timeoutAnimation:I=3e3,onTimeout:T=(()=>{}),truncateTitle:M=0,tooltipPosition:D,customIcon:Z,isExpandable:A=!1,toggleAriaLabel:C=`${u.capitalize(n)} alert details`,onMouseEnter:L=(()=>{}),onMouseLeave:R=(()=>{}),id:U}=e,B=a.__rest(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","aria-label","actionClose","actionLinks","title","titleHeadingLevel","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave","id"]);const H=u.useOUIAProps(t.bZ.displayName,k,w,n),z=s.createElement(s.Fragment,null,s.createElement("span",{className:i.css(o.default.screenReader)},_),S),$=s.useRef(null),W=s.useRef(),[q,V]=r.useState(!1);s.useEffect((()=>{if(!$.current||!M)return;$.current.style.setProperty(f.default.name,M.toString());const e=$.current&&$.current.offsetHeight<$.current.scrollHeight;q!==e&&V(e)}),[$,M,q]);const[F,G]=r.useState(!1),[J,X]=r.useState(!0),[K,Q]=r.useState(),[Y,ee]=r.useState(),te=F&&J&&!K&&!Y;s.useEffect((()=>{if((P=!0===P?8e3:Number(P))>0){const e=setTimeout((()=>G(!0)),P);return()=>clearTimeout(e)}}),[]),s.useEffect((()=>{const e=()=>{W.current&&(W.current.contains(document.activeElement)?(ee(!0),X(!1)):Y&&ee(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[Y]),s.useEffect((()=>{if(!1===Y||!1===K){const e=setTimeout((()=>X(!0)),I);return()=>clearTimeout(e)}}),[Y,K]),s.useEffect((()=>{te&&T()}),[te]);const[ne,ae]=r.useState(!1);if(te)return null;const se=s.createElement(j,Object.assign({},q&&{tabIndex:0},{ref:$,className:i.css(l.default.alertTitle,M&&l.default.modifiers.truncate)}),z);return s.createElement("div",Object.assign({ref:W,className:i.css(l.default.alert,g&&l.default.modifiers.inline,v&&l.default.modifiers.plain,A&&l.default.modifiers.expandable,ne&&l.default.modifiers.expanded,l.default.modifiers[n],N),"aria-label":b},H,y&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{Q(!0),X(!1),L(e)},onMouseLeave:e=>{Q(!1),R(e)},id:U},B),A&&s.createElement(m.AlertContext.Provider,{value:{title:S,variantLabel:_}},s.createElement("div",{className:i.css(l.default.alertToggle)},s.createElement(d.AlertToggleExpandButton,{isExpanded:ne,onToggleExpand:()=>{ae(!ne)},"aria-label":C}))),s.createElement(c.AlertIcon,{variant:n,customIcon:Z}),q?s.createElement(p.Tooltip,{content:z,position:D},se):se,x&&s.createElement(m.AlertContext.Provider,{value:{title:S,variantLabel:_}},s.createElement("div",{className:i.css(l.default.alertAction)},x)),O&&(!A||A&&ne)&&s.createElement("div",{className:i.css(l.default.alertDescription)},O),E&&s.createElement("div",{className:i.css(l.default.alertActionGroup)},E))},t.bZ.displayName="Alert"},18951:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertContext=void 0;const a=n(70655).__importStar(n(43297));t.AlertContext=a.createContext(null)},2582:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertIcon=t.variantIcons=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=n(38296),i=a.__importDefault(n(96888)),l=a.__importDefault(n(35451)),o=a.__importDefault(n(84564)),c=a.__importDefault(n(19694)),u=a.__importDefault(n(31369)),m=a.__importDefault(n(36853));t.variantIcons={success:l.default,danger:o.default,warning:c.default,info:u.default,default:m.default},t.AlertIcon=e=>{var{variant:n,customIcon:l,className:o=""}=e,c=a.__rest(e,["variant","customIcon","className"]);const u=t.variantIcons[n];return s.createElement("div",Object.assign({},c,{className:r.css(i.default.alertIcon,o)}),l||s.createElement(u,null))}},18918:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertToggleExpandButton=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=n(16396),i=n(18951),l=a.__importDefault(n(95511)),o=n(38296),c=a.__importDefault(n(96888));t.AlertToggleExpandButton=e=>{var{"aria-label":t="",variantLabel:n,onToggleExpand:u,isExpanded:m=!1}=e,f=a.__rest(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:p,variantLabel:d}=s.useContext(i.AlertContext);return s.createElement(r.Button,Object.assign({variant:r.ButtonVariant.plain,onClick:u,"aria-expanded":m,"aria-label":""===t?`Toggle ${n||d} alert: ${p}`:t},f),s.createElement("span",{className:o.css(c.default.alertToggleIcon)},s.createElement(l.default,{"aria-hidden":"true"})))},t.AlertToggleExpandButton.displayName="AlertToggleExpandButton"},26577:(e,t,n)=>{"use strict";t.O=void 0;const a=n(70655),s=a.__importStar(n(43297)),r=a.__importDefault(n(19395)),i=n(38296);t.O=e=>{var{className:t,width:n,height:l,fontSize:o,shape:c,screenreaderText:u}=e,m=a.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const f=o?Object.values(r.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return s.createElement("div",Object.assign({},m,{className:i.css(r.default.skeleton,o&&f,"circle"===c&&r.default.modifiers.circle,"square"===c&&r.default.modifiers.square,t)},(n||l)&&{style:Object.assign({"--pf-c-skeleton--Width":n||void 0,"--pf-c-skeleton--Height":l||void 0},m.style)}),s.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},19395:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a}),n(53336);const a={modifiers:{circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"},skeleton:"pf-c-skeleton",themeDark:"pf-theme-dark"}},43978:(e,t)=>{"use strict";t.__esModule=!0,t.c_alert__title_max_lines={name:"--pf-c-alert__title--max-lines",value:"1",var:"var(--pf-c-alert__title--max-lines)"},t.default=t.c_alert__title_max_lines},99398:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(43297),s=n.n(a),r=n(45697),i=n.n(r),l=n(74079),o=n(29439),c=n(78826),u=n(6202),m=n(49287),f=n(26577),p=n(74806),d=n(30893),h=n(15861),g=n(64687),v=n.n(g),y=n(50533),_=n(83215),b=n(11220),x=n(13784),E=n(18038),S=function(e,t,n){return s().createElement(E.P,null,n.formatMessage(d.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s().createElement("b",null,t)}}))},j=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,r=e.setUnassignSystemsModalOpen,i=e.intl,l=n.systemsIDs,p=n.isUnassignSystemsModalOpen,g=(0,a.useState)([]),E=(0,o.Z)(g,2),j=E[0],O=E[1],N=(0,a.useState)(!0),k=(0,o.Z)(N,2),w=k[0],P=k[1],I=function(e){r({isUnassignSystemsModalOpen:!p,systemsIDs:[],shouldRefresh:e})},T=function(){I(!1)},M=function(e,t){var n=(0,y.I0)(),a=function(){var a=(0,h.Z)(v().mark((function a(){return v().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,b.J_)({inventory_ids:t});case 2:200===a.sent.status&&(e(!0),n((0,_.wN)((0,x.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}(I,j);(0,a.useEffect)((function(){(function(e){return(0,b.lc)({limit:-1,"filter[baseline_name]":"neq:"}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))})(l).then((function(e){O(e),P(!1)}))}),[l]);var D=l.length-j.length;return s().createElement(c.Modal,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:i.formatMessage(d.Z.textUnassignSystemsTitle),onClose:T,titleIconVariant:"warning",actions:[s().createElement(u.Button,{key:"confirm",variant:"danger",onClick:M,isDisabled:0===j.length},i.formatMessage(d.Z.labelsRemove)),s().createElement(u.Button,{key:"cancel",variant:"link",onClick:T},i.formatMessage(d.Z.labelsCancel))]},s().createElement(m.r,{container:!0,hasGutter:!0},w&&s().createElement(f.O,null),!w&&0!==j.length&&S("textUnassignSystemsStatement",j.length,i),!w&&D>0&&S("textUnassignSystemsWarning",D,i)))};j.propTypes={intl:i().any,setUnassignSystemsModalOpen:i().func,unassignSystemsModalState:i().object};const O=(0,p.ZP)(j);var N=function(e){var t=e.patchSetState,n=e.setPatchSetState;return s().createElement(s().Fragment,null,t.isUnassignSystemsModalOpen&&s().createElement(O,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&s().createElement(l.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};N.propTypes={patchSetState:i().object,setPatchSetState:i().func};const k=N},98249:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var a=n(4942),s=n(43297),r=n.n(s),i=n(14748),l=n(50533),o=n(49642),c=n(2807),u=n(92544),m=n(32132),f=n(30893),p=n(91607),d=n(85893),h=n(45697),g=n.n(h),v=n(59823),y=n(334),_=n(75448),b=n(39591),x=n(94184),E=n.n(x),S=function(){return S=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},S.apply(this,arguments)},j=function(e){var t=(0,y.useHistory)(),n=(0,l.oR)(),a=e.component;return(0,d.jsx)(a,S({className:E()(e.className,"inventory")},{children:(0,d.jsx)(s.Suspense,S({fallback:e.fallback},{children:(0,d.jsx)(v.ScalprumComponent,S({history:t,store:n,appName:"inventory",module:"./DetailWrapper",scope:"inventory",ErrorComponent:(0,d.jsx)(b.Z,S({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};j.propTypes={fallback:g().node,innerRef:g().object,component:g().string,className:g().string};var O=r().forwardRef((function(e,t){return(0,d.jsx)(j,S({innerRef:t},e))}));O.propTypes={fallback:g().node,component:g().string,className:g().string},O.defaultProps={fallback:(0,d.jsx)(_.Bullseye,S({className:"pf-u-p-lg"},{children:(0,d.jsx)(_.Spinner,{size:"xl"})})),component:"section"};const N=O;var k=function(){return k=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},k.apply(this,arguments)},w=function(e){var t=(0,y.useHistory)(),n=(0,l.oR)(),a=e.component;return(0,d.jsx)(a,k({className:E()(e.className,"inventory")},{children:(0,d.jsx)(s.Suspense,k({fallback:e.fallback},{children:(0,d.jsx)(v.ScalprumComponent,k({history:t,store:n,appName:"inventory",module:"./InventoryDetailHead",scope:"inventory",ErrorComponent:(0,d.jsx)(b.Z,k({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};w.propTypes={fallback:g().node,innerRef:g().object,component:g().string,className:g().string};var P=r().forwardRef((function(e,t){return(0,d.jsx)(w,k({innerProps:t},e))}));P.propTypes={fallback:g().node,component:g().string,className:g().string},P.defaultProps={fallback:(0,d.jsx)(_.Bullseye,k({className:"pf-u-p-lg"},{children:(0,d.jsx)(_.Spinner,{size:"xl"})})),component:"section"};const I=P;var T=function(){return T=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},T.apply(this,arguments)},M=function(e){var t=(0,y.useHistory)(),n=(0,l.oR)(),a=e.component;return(0,d.jsx)(a,T({className:E()(e.className,"inventory")},{children:(0,d.jsx)(s.Suspense,T({fallback:e.fallback},{children:(0,d.jsx)(v.ScalprumComponent,T({history:t,store:n,appName:"inventory",module:"./AppInfo",scope:"inventory",ErrorComponent:(0,d.jsx)(b.Z,T({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};M.propTypes={fallback:g().node,innerRef:g().object,component:g().string,className:g().string};var D=r().forwardRef((function(e,t){return(0,d.jsx)(M,T({innerRef:t},e))}));D.propTypes={fallback:g().node,component:g().string,className:g().string},D.defaultProps={fallback:(0,d.jsx)(_.Bullseye,T({className:"pf-u-p-lg"},{children:(0,d.jsx)(_.Spinner,{size:"xl"})})),component:"section"};const Z=D;var A=n(70044),C=n(49287),L=n(18038),R=n(20018),U=n(63540),B=n(9557),H=n(83215),z=n(52579),$=n(99398),W=n(79875),q=n(13784);function V(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}const F=function(){var e=(0,y.useParams)().inventoryId,t=(0,l.I0)(),n=(0,l.v9)((function(e){var t=e.entityDetails;return t&&t||{}})),d=n.loaded,h=n.hasThirdPartyRepo,g=n.patchSetName,v=(0,l.v9)((function(e){var t,n=e.entityDetails;return null!==(t=null==n?void 0:n.entity)&&void 0!==t?t:{}})),_=v.display_name,b=v.insights_id,x=(0,W.Z)(),E=x.patchSetState,S=x.setPatchSetState,j=x.openPatchSetAssignWizard,O=x.openUnassignSystemsModal;(0,s.useEffect)((function(){return t((0,B.Eh)(e)),function(){t((0,H.L1)())}}),[E.shouldRefresh]);var k=_&&"".concat(_," - ").concat(m.N.formatMessage(f.Z.titlesSystems));(0,p.Iw)(k);var w=(0,p.ye)(q.VH.patch_set);return r().createElement(N,{onLoad:function(e){var t=e.mergeWithDetail;(0,c.z)(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?V(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t(u.J)))}},r().createElement($.Z,{patchSetState:E,setPatchSetState:S}),r().createElement(o.Z,{title:"",headerOUIA:"inventory-details",breadcrumbs:[{title:m.N.formatMessage(f.Z.titlesPatchSystems),to:"/systems",isActive:!1},_&&{title:_,isActive:!0}]},(!d||b)&&r().createElement(I,{hideBack:!0,showTags:!0,actions:w&&[{title:m.N.formatMessage(f.Z.titlesTemplateAssign),key:"assign-to-template",onClick:function(){j(e)}},{title:m.N.formatMessage(f.Z.titlesTemplateRemoveMultipleButton),key:"remove-from-template",isDisabled:!g,onClick:function(){return O([e])}}]},r().createElement(C.r,null,r().createElement(L.P,null,g&&r().createElement(R.D,null,r().createElement(U.xv,null,"".concat(m.N.formatMessage(f.Z.labelsColumnsTemplate),": ").concat(g)))),r().createElement(L.P,null,h&&r().createElement(A.bZ,{className:"pf-u-mt-md",isInline:!0,variant:"info",title:m.N.formatMessage(f.Z.textThirdPartyInfo)}))))),!b&&d?r().createElement(z.Z,{code:204}):r().createElement(i.Z,null,r().createElement(Z,null)))}},53336:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InventoryDetail.40aefe6bb124a645afa671a7c030d216.js.map