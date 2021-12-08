(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[184],{52643:(e,t,a)=>{"use strict";a.d(t,{b:()=>i});var n=a(70655),r=a(43297),c=a(38296),o=a(25687);const i=e=>{var{children:t=null,className:a="",component:i="div"}=e,l=(0,n.__rest)(e,["children","className","component"]);const s=i;return r.createElement(s,Object.assign({className:(0,c.css)(o.default.bullseye,a)},l),t)};i.displayName="Bullseye"},70044:(e,t,a)=>{"use strict";t.bZ=t.Ux=void 0;const n=a(70655),r=n.__importStar(a(43297)),c=a(43297),o=a(38296),i=n.__importDefault(a(91487)),l=n.__importDefault(a(63339)),s=a(61370),u=a(23053),m=a(18951),d=n.__importDefault(a(43978)),p=a(8045),f=a(18918);var b;!function(e){e.success="success",e.danger="danger",e.warning="warning",e.info="info",e.default="default"}(b=t.Ux||(t.Ux={})),t.bZ=e=>{var{variant:a=b.default,isInline:v=!1,isPlain:g=!1,isLiveRegion:h=!1,variantLabel:y=`${u.capitalize(a)} alert:`,"aria-label":_=`${u.capitalize(a)} Alert`,actionClose:E,actionLinks:I,title:O,children:C="",className:N="",ouiaId:Z,ouiaSafe:x=!0,timeout:P=!1,timeoutAnimation:T=3e3,onTimeout:D=(()=>{}),truncateTitle:w=0,tooltipPosition:A,customIcon:j,isExpandable:L=!1,toggleAriaLabel:k=`${u.capitalize(a)} alert details`,onMouseEnter:S=(()=>{}),onMouseLeave:R=(()=>{})}=e,M=n.__rest(e,["variant","isInline","isPlain","isLiveRegion","variantLabel","aria-label","actionClose","actionLinks","title","children","className","ouiaId","ouiaSafe","timeout","timeoutAnimation","onTimeout","truncateTitle","tooltipPosition","customIcon","isExpandable","toggleAriaLabel","onMouseEnter","onMouseLeave"]);const B=u.useOUIAProps(t.bZ.displayName,Z,x,a),H=r.createElement(r.Fragment,null,r.createElement("span",{className:o.css(l.default.screenReader)},y),O),U=r.useRef(null),z=r.useRef(),[$,F]=c.useState(!1);r.useEffect((()=>{if(!U.current||!w)return;U.current.style.setProperty(d.default.name,w.toString());const e=U.current&&U.current.offsetHeight<U.current.scrollHeight;$!==e&&F(e)}),[U,w,$]);const[q,K]=c.useState(!1),[V,W]=c.useState(!0),[G,J]=c.useState(),[Q,X]=c.useState(),Y=q&&V&&!G&&!Q;r.useEffect((()=>{if((P=!0===P?8e3:Number(P))>0){const e=setTimeout((()=>K(!0)),P);return()=>clearTimeout(e)}}),[]),r.useEffect((()=>{const e=()=>{z.current&&(z.current.contains(document.activeElement)?(X(!0),W(!1)):Q&&X(!1))};return document.addEventListener("focus",e,!0),()=>document.removeEventListener("focus",e,!0)}),[Q]),r.useEffect((()=>{if(!1===Q||!1===G){const e=setTimeout((()=>W(!0)),T);return()=>clearTimeout(e)}}),[Q,G]),r.useEffect((()=>{Y&&D()}),[Y]);const[ee,te]=c.useState(!1);if(Y)return null;const ae=r.createElement("h4",Object.assign({},$&&{tabIndex:0},{ref:U,className:o.css(i.default.alertTitle,w&&i.default.modifiers.truncate)}),H);return r.createElement("div",Object.assign({ref:z,className:o.css(i.default.alert,v&&i.default.modifiers.inline,g&&i.default.modifiers.plain,L&&i.default.modifiers.expandable,ee&&i.default.modifiers.expanded,i.default.modifiers[a],N),"aria-label":_},B,h&&{"aria-live":"polite","aria-atomic":"false"},{onMouseEnter:e=>{J(!0),W(!1),S(e)},onMouseLeave:e=>{J(!1),R(e)}},M),L&&r.createElement(m.AlertContext.Provider,{value:{title:O,variantLabel:y}},r.createElement("div",{className:o.css(i.default.alertToggle)},r.createElement(f.AlertToggleExpandButton,{isExpanded:ee,onToggleExpand:()=>{te(!ee)},"aria-label":k}))),r.createElement(s.AlertIcon,{variant:a,customIcon:j}),$?r.createElement(p.Tooltip,{content:H,position:A},ae):ae,E&&r.createElement(m.AlertContext.Provider,{value:{title:O,variantLabel:y}},r.createElement("div",{className:o.css(i.default.alertAction)},E)),C&&(!L||L&&ee)&&r.createElement("div",{className:o.css(i.default.alertDescription)},C),I&&r.createElement("div",{className:o.css(i.default.alertActionGroup)},I))},t.bZ.displayName="Alert"},18951:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertContext=void 0;const n=a(70655).__importStar(a(43297));t.AlertContext=n.createContext(null)},61370:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertIcon=t.variantIcons=void 0;const n=a(70655),r=n.__importStar(a(43297)),c=a(38296),o=n.__importDefault(a(91487)),i=n.__importDefault(a(35451)),l=n.__importDefault(a(84564)),s=n.__importDefault(a(19694)),u=n.__importDefault(a(31369)),m=n.__importDefault(a(36853));t.variantIcons={success:i.default,danger:l.default,warning:s.default,info:u.default,default:m.default},t.AlertIcon=e=>{var{variant:a,customIcon:i,className:l=""}=e,s=n.__rest(e,["variant","customIcon","className"]);const u=t.variantIcons[a];return r.createElement("div",Object.assign({},s,{className:c.css(o.default.alertIcon,l)}),i||r.createElement(u,null))}},18918:(e,t,a)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AlertToggleExpandButton=void 0;const n=a(70655),r=n.__importStar(a(43297)),c=a(16396),o=a(18951),i=n.__importDefault(a(95511)),l=a(38296),s=n.__importDefault(a(91487));t.AlertToggleExpandButton=e=>{var{"aria-label":t,variantLabel:a,onToggleExpand:u,isExpanded:m}=e,d=n.__rest(e,["aria-label","variantLabel","onToggleExpand","isExpanded"]);const{title:p,variantLabel:f}=r.useContext(o.AlertContext);return r.createElement(c.Button,Object.assign({variant:c.ButtonVariant.plain,onClick:u,"aria-expanded":m,"aria-label":""===t?`Toggle ${a||f} alert: ${p}`:t},d),r.createElement("span",{className:l.css(s.default.alertToggleIcon)},r.createElement(i.default,{"aria-hidden":"true"})))},t.AlertToggleExpandButton.displayName="AlertToggleExpandButton"},85991:(e,t,a)=>{"use strict";t.a=void 0;const n=a(70655),r=n.__importStar(a(43297)),c=n.__importDefault(a(74652)),o=a(38296),i=a(23053);t.a=e=>{var{children:a=null,className:l="","aria-label":s="Breadcrumb",ouiaId:u,ouiaSafe:m=!0}=e,d=n.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=i.useOUIAProps(t.a.displayName,u,m);return r.createElement("nav",Object.assign({},d,{"aria-label":s,className:o.css(c.default.breadcrumb,l)},p),r.createElement("ol",{className:c.default.breadcrumbList},r.Children.map(a,((e,t)=>{const a=t>0;return r.isValidElement(e)?r.cloneElement(e,{showDivider:a}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,a)=>{"use strict";t.g=void 0;const n=a(70655),r=n.__importStar(a(43297)),c=n.__importDefault(a(95511)),o=n.__importDefault(a(74652)),i=a(38296);t.g=e=>{var{children:t=null,className:a="",to:l,isActive:s=!1,isDropdown:u=!1,showDivider:m,target:d,component:p="a",render:f}=e,b=n.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const v=p,g=s?"page":void 0,h=i.css(o.default.breadcrumbLink,s&&o.default.modifiers.current);return r.createElement("li",Object.assign({},b,{className:i.css(o.default.breadcrumbItem,a)}),m&&r.createElement("span",{className:o.default.breadcrumbItemDivider},r.createElement(c.default,null)),"button"===p&&r.createElement("button",{className:h,"aria-current":g,type:"button"},t),u&&r.createElement("span",{className:i.css(o.default.breadcrumbDropdown)},t),f&&f({className:h,ariaCurrent:g}),l&&!f&&r.createElement(v,{href:l,target:d,className:h,"aria-current":g},t),!l&&"button"!==p&&!u&&t)},t.g.displayName="BreadcrumbItem"},36853:(e,t,a)=>{"use strict";t.__esModule=!0,t.BellIconConfig={name:"BellIcon",height:1024,width:896,svgPath:"M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z",yOffset:0,xOffset:0},t.BellIcon=a(35183).createIcon(t.BellIconConfig),t.default=t.BellIcon},84564:(e,t,a)=>{"use strict";t.__esModule=!0,t.ExclamationCircleIconConfig={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.ExclamationCircleIcon=a(35183).createIcon(t.ExclamationCircleIconConfig),t.default=t.ExclamationCircleIcon},19694:(e,t,a)=>{"use strict";t.__esModule=!0,t.ExclamationTriangleIconConfig={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},t.ExclamationTriangleIcon=a(35183).createIcon(t.ExclamationTriangleIconConfig),t.default=t.ExclamationTriangleIcon},74652:(e,t,a)=>{"use strict";t.__esModule=!0,a(58392),t.default={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},43978:(e,t)=>{"use strict";t.__esModule=!0,t.c_alert__title_max_lines={name:"--pf-c-alert__title--max-lines",value:"1",var:"var(--pf-c-alert__title--max-lines)"},t.default=t.c_alert__title_max_lines},72466:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r});var n=a(43297);const r=a.n(n)().createContext("light")},39591:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(45987),r=a(43297),c=a.n(r),o=a(45697),i=function(e){var t=e.component,a=(0,n.Z)(e,["component"]);return(0,r.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),a)}),[]),c().createElement("div",null,c().createElement("h1",null,"Unable to load inventory component"),c().createElement("h2",null,"Failed to load ",t),c().createElement("code",null,"More info can be found in browser console output."))};i.propTypes={component:a.n(o)().string};const l=i},86350:(e,t,a)=>{"use strict";a.d(t,{Z:()=>O});var n=a(87462),r=a(45987),c=a(93433),o=a(4942),i=a(15671),l=a(43144),s=a(60136),u=a(82963),m=a(61120),d=a(43297),p=a.n(d),f=a(45697),b=a.n(f),v=a(94184),g=a.n(v),h=a(28216),y=a(72466);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,o.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var I=function(e){(0,s.Z)(f,e);var t,a,d=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,m.Z)(t);if(a){var r=(0,m.Z)(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function f(){return(0,i.Z)(this,f),d.apply(this,arguments)}return(0,l.Z)(f,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,a=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var n=insights.chrome.$internal.store.getState();if(t&&n)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=E(E({},e.dynamic),{},(0,o.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),a[t.substr(1)])):e.staticPart=[].concat((0,c.Z)(e.staticPart),(0,c.Z)(""!==t?[t]:[])),e}),{staticPart:[n.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,c=(e.params,e.path,(0,r.Z)(e,["className","children","params","path"])),i=this.calculateLocation(),l=i.dynamic,s=i.staticPart;return p().createElement(y.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",r=g()((0,o.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:p().createElement("section",(0,n.Z)({},c,l,{"page-type":s.join("-"),className:"".concat(g()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)}),p().Children.map(a,(function(e){return p().cloneElement(e,{className:"pf-m-dark"})}))),light:p().createElement("section",(0,n.Z)({},c,l,{"page-type":s.join("-"),className:"".concat(g()(t,"pf-l-page__main-section pf-c-page__main-section"))}),a)}[e]}))}}]),f}(d.Component);I.propTypes={className:b().string,children:b().any.isRequired,params:b().any,path:b().string};const O=(0,h.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(I)},48716:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var n=a(87462),r=a(4942),c=a(45987),o=a(43297),i=a.n(o),l=a(45697),s=a.n(l),u=a(94184),m=a.n(u),d=a(72466),p=function(e){var t=e.className,a=e.children,o=(0,c.Z)(e,["className","children"]),l=m()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return i().createElement(d.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=m()((0,r.Z)({},"pf-m-".concat(e,"-200"),"dark"===e),(0,r.Z)({},"pf-m-light","light"===e));return i().createElement("section",(0,n.Z)({},o,{className:"".concat(l," ").concat(t),"widget-type":"InsightsPageHeader"}),a)}))};const f=p;p.propTypes={children:s().any.isRequired,className:s().string}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(43297),r=a.n(n),c=a(45697),o=a.n(c),i=a(94184),l=a.n(i),s=a(60485),u=function(e){var t=e.className,a=e.title,n=l()(t);return r().createElement(s.D,{headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"}," ",a," ")};const m=u;u.propTypes={title:o().node.isRequired,className:o().string}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var n=a(48716),r=a(39173),c=a(45697),o=a.n(c),i=a(43297),l=a.n(i),s=a(85991),u=a(49489),m=a(334),d=function(e){var t=e.items,a=e.headerOUIA;return l().createElement(s.a,null,t.filter(Boolean).map((function(e){return l().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&l().createElement(m.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};d.propTypes={items:o().arrayOf(o().shape({isActive:o().bool,to:o().string,title:o().string})),headerOUIA:o().string};const p=d;var f=a(82819),b=a(98378),v=a(60076),g=function(e){var t=e.history,a=e.headerOUIA;return l().createElement(b.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},l().createElement(f.O,{eventKey:v.H.advisories.to,title:v.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(v.H.advisories.title)}),l().createElement(f.O,{eventKey:v.H.systems.to,title:v.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(v.H.systems.title)}))};g.propTypes={history:o().object,headerOUIA:o().string};const h=(0,m.withRouter)(g);var y=function(e){var t=e.title,a=e.showTabs,c=e.breadcrumbs,o=e.children,i=e.headerOUIA;return l().createElement(l().Fragment,null,l().createElement(n.Z,{"data-ouia-component-type":"".concat(i,"-page-header")},c&&l().createElement(p,{items:c,headerOUIA:i}),l().createElement(r.Z,{title:t}),o),a&&l().createElement(h,{headerOUIA:i}))};y.propTypes={title:o().string,showTabs:o().bool,breadcrumbs:o().array,children:o().any,headerOUIA:o().string};const _=y},98249:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>R});var n=a(4942),r=a(43297),c=a.n(r),o=a(86350),i=a(28216),l=a(49642),s=a(60076),u=a(32041),m=a(92544),d=a(32132),p=a(30893),f=a(91607),b=a(87462),v=a(45697),g=a.n(v),h=a(54025),y=a(334),_=a(52643),E=a(2372),I=a(39591),O=function(e){var t=(0,y.useHistory)(),a=(0,i.oR)();return c().createElement(r.Suspense,{fallback:e.fallback},c().createElement(h.ScalprumComponent,(0,b.Z)({history:t,store:a,appName:"inventory",module:"./DetailWrapper",scope:"inventory",ErrorComponent:c().createElement(I.Z,(0,b.Z)({component:"InventoryDetailHead",history:t,store:a},e)),ref:e.innerRef},e)))};O.propTypes={fallback:g().node,innerRef:g().object};var C=c().forwardRef((function(e,t){return c().createElement(O,(0,b.Z)({innerRef:t},e))}));C.propTypes={fallback:g().node},C.defaultProps={fallback:c().createElement(_.b,{className:"pf-u-p-lg"},c().createElement(E.$,{size:"xl"}))};const N=C;var Z=function(e){var t=(0,y.useHistory)(),a=(0,i.oR)();return c().createElement(r.Suspense,{fallback:e.fallback},c().createElement(h.ScalprumComponent,(0,b.Z)({history:t,store:a,appName:"inventory",module:"./InventoryDetailHead",scope:"inventory",ErrorComponent:c().createElement(I.Z,(0,b.Z)({component:"InventoryDetailHead",history:t,store:a},e)),ref:e.innerRef},e)))};Z.propTypes={fallback:g().node,innerRef:g().object};var x=c().forwardRef((function(e,t){return c().createElement(Z,(0,b.Z)({innerProps:t},e))}));x.propTypes={fallback:g().node},x.defaultProps={fallback:c().createElement(_.b,{className:"pf-u-p-lg"},c().createElement(E.$,{size:"xl"}))};const P=x;var T=function(e){var t=(0,y.useHistory)(),a=(0,i.oR)();return c().createElement(r.Suspense,{fallback:e.fallback},c().createElement(h.ScalprumComponent,(0,b.Z)({history:t,store:a,appName:"inventory",module:"./AppInfo",scope:"inventory",ErrorComponent:c().createElement(I.Z,(0,b.Z)({component:"InventoryDetailHead",history:t,store:a},e)),ref:e.innerRef},e)))};T.propTypes={fallback:g().node,innerRef:g().object};var D=c().forwardRef((function(e,t){return c().createElement(T,(0,b.Z)({innerRef:t},e))}));D.propTypes={fallback:g().node},D.defaultProps={fallback:c().createElement(_.b,{className:"pf-u-p-lg"},c().createElement(E.$,{size:"xl"}))};const w=D;var A=a(70044),j=a(9557),L=a(83215);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var S=function(e){var t,a=e.match,b=(0,i.I0)(),v=(0,i.v9)((function(e){var t=e.entityDetails;return t&&t.entity})),g=(0,i.v9)((function(e){var t=e.entityDetails;return t&&t.hasThirdPartyRepo})),h=null===(t=a.params)||void 0===t?void 0:t.inventoryId;(0,r.useEffect)((function(){return b((0,j.Eh)(h)),function(){b((0,L.L1)())}}),[]);var y=v&&"".concat(v.display_name," - ").concat(d.N.formatMessage(p.Z.titlesSystems));return(0,f.Iw)(y),c().createElement(N,{onLoad:function(e){var t=e.mergeWithDetail;(0,u.z)(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},t(m.J)))}},c().createElement(l.Z,{title:"",headerOUIA:"inventory-details",breadcrumbs:[{title:d.N.formatMessage(p.Z.titlesPatchSystems),to:s.H.systems.to,isActive:!1},v&&{title:v.display_name,isActive:!0}]},c().createElement(P,{hideBack:!0},g&&c().createElement(A.bZ,{variant:"info",title:d.N.formatMessage(p.Z.textThirdPartyInfo)}))),c().createElement(o.Z,null,c().createElement(w,null)))};S.propTypes={match:g().object};const R=S},58392:()=>{}}]);
//# sourceMappingURL=../sourcemaps/InventoryDetail.f28401b099835704551324829514324f.js.map