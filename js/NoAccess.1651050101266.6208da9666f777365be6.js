(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[362],{85991:(e,t,a)=>{"use strict";t.a=void 0;const r=a(70655),n=r.__importStar(a(43297)),c=r.__importDefault(a(74652)),o=a(38296),i=a(23053);t.a=e=>{var{children:a=null,className:s="","aria-label":l="Breadcrumb",ouiaId:m,ouiaSafe:d=!0}=e,u=r.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=i.useOUIAProps(t.a.displayName,m,d);return n.createElement("nav",Object.assign({},u,{"aria-label":l,className:o.css(c.default.breadcrumb,s)},p),n.createElement("ol",{className:c.default.breadcrumbList},n.Children.map(a,((e,t)=>{const a=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:a}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,a)=>{"use strict";t.g=void 0;const r=a(70655),n=r.__importStar(a(43297)),c=r.__importDefault(a(95511)),o=r.__importDefault(a(74652)),i=a(38296);t.g=e=>{var{children:t=null,className:a="",to:s,isActive:l=!1,isDropdown:m=!1,showDivider:d,target:u,component:p="a",render:f}=e,b=r.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const v=p,h=l?"page":void 0,g=i.css(o.default.breadcrumbLink,l&&o.default.modifiers.current);return n.createElement("li",Object.assign({},b,{className:i.css(o.default.breadcrumbItem,a)}),d&&n.createElement("span",{className:o.default.breadcrumbItemDivider},n.createElement(c.default,null)),"button"===p&&n.createElement("button",{className:g,"aria-current":h,type:"button"},t),m&&n.createElement("span",{className:i.css(o.default.breadcrumbDropdown)},t),f&&f({className:g,ariaCurrent:h}),s&&!f&&n.createElement(v,{href:s,target:u,className:g,"aria-current":h},t),!s&&"button"!==p&&!m&&t)},t.g.displayName="BreadcrumbItem"},74652:(e,t,a)=>{"use strict";t.__esModule=!0,a(58392),t.default={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},53754:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(43297);const n=a.n(r)().createContext("light")},14748:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var r=a(43297),n=a.n(r),c=a(94184),o=a.n(c),i=a(28216),s=a(53754),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)},m=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,c=t.length;n<c;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};const d=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,a=e.params,r=void 0===a?{}:a,c=e.children,i=e.className,d=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["path","params","children","className"]),u=function(){var e,a,n;if(null===(n=null===(a=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===a?void 0:a.$internal)||void 0===n?void 0:n.store){var c=window.insights.chrome.$internal.store.getState();if(t&&c)return t.split("/").reduce((function(e,t){var a,n;return 0===t.indexOf(":")?e.dynamic=l(l({},e.dynamic),((a={})["data-".concat((n=t.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=r[t.substr(1)],a)):e.staticPart=m(m([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[c.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),p=u.dynamic,f=u.staticPart;return n().createElement(s.Z.Consumer,null,(function(e){var t;void 0===e&&(e="light");var a=o()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:n().createElement("section",l({},d,p,{"page-type":f.join("-"),className:"".concat(o()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(a)}),n().Children.map(c,(function(e){return n().cloneElement(e,{className:"pf-m-dark"})}))),light:n().createElement("section",l({},d,p,{"page-type":f.join("-"),className:"".concat(o()(i,"pf-l-page__main-section pf-c-page__main-section"))}),c)}[e]}))}))},80123:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var r=a(43297),n=a.n(r),c=a(94184),o=a.n(c),i=a(53754),s=function(){return s=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},s.apply(this,arguments)};const l=function(e){var t=e.className,a=e.children,r=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),c=o()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return n().createElement(i.Z.Consumer,null,(function(e){var t,i;void 0===e&&(e="light");var l=o()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return n().createElement("section",s({},r,{className:"".concat(c," ").concat(l),"widget-type":"InsightsPageHeader"}),a)}))}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>s});var r=a(43297),n=a.n(r),c=a(94184),o=a.n(c),i=a(95995);const s=function(e){var t=e.className,a=e.title,r=o()(t);return n().createElement(i.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},a)}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var r=a(80123),n=a(39173),c=a(45697),o=a.n(c),i=a(43297),s=a.n(i),l=a(85991),m=a(49489),d=a(334),u=function(e){var t=e.items,a=e.headerOUIA;return s().createElement(l.a,null,t.filter(Boolean).map((function(e){return s().createElement(m.g,{key:e.title,isActive:e.isActive},e.to&&s().createElement(d.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};u.propTypes={items:o().arrayOf(o().shape({isActive:o().bool,to:o().string,title:o().string})),headerOUIA:o().string};const p=u;var f=a(82819),b=a(98378),v=a(60076),h=function(e){var t=e.history,a=e.headerOUIA;return s().createElement(b.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},s().createElement(f.O,{eventKey:v.H.advisories.to,title:v.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(v.H.advisories.title)}),s().createElement(f.O,{eventKey:v.H.systems.to,title:v.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(v.H.systems.title)}))};h.propTypes={history:o().object,headerOUIA:o().string};const g=(0,d.withRouter)(h);var y=function(e){var t=e.title,a=e.showTabs,c=e.breadcrumbs,o=e.children,i=e.headerOUIA;return s().createElement(s().Fragment,null,s().createElement(r.Z,{"data-ouia-component-type":"".concat(i,"-page-header")},c&&s().createElement(p,{items:c,headerOUIA:i}),s().createElement(n.Z,{title:t}),o),a&&s().createElement(g,{headerOUIA:i}))};y.propTypes={title:o().string,showTabs:o().bool,breadcrumbs:o().array,children:o().any,headerOUIA:o().string};const _=y},18008:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>u});var r=a(14748),n=a(43297),c=a.n(n),o=a(49642),i=a(32132),s=a(30893),l=a(73888),m=a(45697),d=function(e){var t=e.code;return c().createElement(c().Fragment,null,c().createElement(o.Z,{title:i.N.formatMessage(s.Z.generalAppName)}),c().createElement(r.Z,null,c().createElement(l.Z,{code:t})))};d.propTypes={code:a.n(m)().number};const u=d},58392:()=>{}}]);