"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[362],{85991:(e,t,a)=>{t.a=void 0;const r=a(70655),n=r.__importStar(a(41375)),c=r.__importDefault(a(74652)),i=a(38296),s=a(23053);t.a=e=>{var{children:a=null,className:o="","aria-label":l="Breadcrumb",ouiaId:m,ouiaSafe:u=!0}=e,p=r.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=s.useOUIAProps(t.a.displayName,m,u);return n.createElement("nav",Object.assign({},p,{"aria-label":l,className:i.css(c.default.breadcrumb,o)},d),n.createElement("ol",{className:c.default.breadcrumbList},n.Children.map(a,((e,t)=>{const a=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:a}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,a)=>{t.g=void 0;const r=a(70655),n=r.__importStar(a(41375)),c=r.__importDefault(a(95511)),i=r.__importDefault(a(74652)),s=a(38296);t.g=e=>{var{children:t=null,className:a="",to:o,isActive:l=!1,isDropdown:m=!1,showDivider:u,target:p,component:d="a",render:h}=e,f=r.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const g=d,b=l?"page":void 0,y=s.css(i.default.breadcrumbLink,l&&i.default.modifiers.current);return n.createElement("li",Object.assign({},f,{className:s.css(i.default.breadcrumbItem,a)}),u&&n.createElement("span",{className:i.default.breadcrumbItemDivider},n.createElement(c.default,null)),"button"===d&&n.createElement("button",{className:y,"aria-current":b,type:"button"},t),m&&n.createElement("span",{className:s.css(i.default.breadcrumbDropdown)},t),h&&h({className:y,ariaCurrent:b}),o&&!h&&n.createElement(g,{href:o,target:p,className:y,"aria-current":b},t),!o&&"button"!==d&&!m&&t)},t.g.displayName="BreadcrumbItem"},72466:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(41375);const n=a.n(r)().createContext("light")},86350:(e,t,a)=>{a.d(t,{Z:()=>Z});var r=a(87462),n=a(45987),c=a(93433),i=a(4942),s=a(15671),o=a(43144),l=a(60136),m=a(82963),u=a(61120),p=a(41375),d=a.n(p),h=a(45697),f=a.n(h),g=a(94184),b=a.n(g),y=a(28216),v=a(72466);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,i.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){(0,l.Z)(h,e);var t,a,p=(t=h,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,u.Z)(t);if(a){var n=(0,u.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,m.Z)(this,e)});function h(){return(0,s.Z)(this,h),p.apply(this,arguments)}return(0,o.Z)(h,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,a=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var r=insights.chrome.$internal.store.getState();if(t&&r)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=E(E({},e.dynamic),{},(0,i.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),a[t.substr(1)])):e.staticPart=[].concat((0,c.Z)(e.staticPart),(0,c.Z)(""!==t?[t]:[])),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,c=(e.params,e.path,(0,n.Z)(e,["className","children","params","path"])),s=this.calculateLocation(),o=s.dynamic,l=s.staticPart;return d().createElement(v.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",n=b()((0,i.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:d().createElement("section",(0,r.Z)({},c,o,{"page-type":l.join("-"),className:"".concat(b()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)}),d().Children.map(a,(function(e){return d().cloneElement(e,{className:"pf-m-dark"})}))),light:d().createElement("section",(0,r.Z)({},c,o,{"page-type":l.join("-"),className:"".concat(b()(t,"pf-l-page__main-section pf-c-page__main-section"))}),a)}[e]}))}}]),h}(p.Component);O.propTypes={className:f().string,children:f().any.isRequired,params:f().any,path:f().string};const Z=(0,y.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(O)},48716:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(87462),n=a(4942),c=a(45987),i=a(41375),s=a.n(i),o=a(45697),l=a.n(o),m=a(94184),u=a.n(m),p=a(72466),d=function(e){var t=e.className,a=e.children,i=(0,c.Z)(e,["className","children"]),o=u()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return s().createElement(p.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=u()((0,n.Z)({},"pf-m-".concat(e,"-200"),"dark"===e),(0,n.Z)({},"pf-m-light","light"===e));return s().createElement("section",(0,r.Z)({},i,{className:"".concat(o," ").concat(t),"widget-type":"InsightsPageHeader"}),a)}))};const h=d;d.propTypes={children:l().any.isRequired,className:l().string}},39173:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(41375),n=a.n(r),c=a(45697),i=a.n(c),s=a(94184),o=a.n(s),l=a(60485),m=function(e){var t=e.className,a=e.title,r=o()(t);return n().createElement(l.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",a," ")};const u=m;m.propTypes={title:i().node.isRequired,className:i().string}},49642:(e,t,a)=>{a.d(t,{Z:()=>_});var r=a(48716),n=a(39173),c=a(45697),i=a.n(c),s=a(41375),o=a.n(s),l=a(85991),m=a(49489),u=a(92818),p=function(e){var t=e.items,a=e.headerOUIA;return o().createElement(l.a,null,t.filter(Boolean).map((function(e){return o().createElement(m.g,{key:e.title,isActive:e.isActive},e.to&&o().createElement(u.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().string})),headerOUIA:i().string};const d=p;var h=a(82819),f=a(98378),g=a(60076),b=function(e){var t=e.history,a=e.headerOUIA;return o().createElement(f.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},o().createElement(h.O,{eventKey:g.H.advisories.to,title:g.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(g.H.advisories.title)}),o().createElement(h.O,{eventKey:g.H.systems.to,title:g.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(g.H.systems.title)}))};b.propTypes={history:i().object,headerOUIA:i().string};const y=(0,u.withRouter)(b);var v=function(e){var t=e.title,a=e.showTabs,c=e.breadcrumbs,i=e.children,s=e.headerOUIA;return o().createElement(o().Fragment,null,o().createElement(r.Z,{"data-ouia-component-type":"".concat(s,"-page-header")},c&&o().createElement(d,{items:c,headerOUIA:s}),o().createElement(n.Z,{title:t}),i),a&&o().createElement(y,{headerOUIA:s}))};v.propTypes={title:i().string,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string};const _=v},18008:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var r=a(86350),n=a(41375),c=a.n(n),i=a(49642),s=a(32132),o=a(30893),l=a(73888),m=a(45697),u=function(e){var t=e.code;return c().createElement(c().Fragment,null,c().createElement(i.Z,{title:s.N.formatMessage(o.Z.generalAppName)}),c().createElement(r.Z,null,c().createElement(l.Z,{code:t})))};u.propTypes={code:a.n(m)().number};const p=u}}]);
//# sourceMappingURL=../sourcemaps/NoAccess.63e349654651a4c57edec0f43d6eece0.js.map