(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[677],{85991:(e,t,a)=>{"use strict";t.a=void 0;const r=a(70655),n=r.__importStar(a(43297)),c=r.__importDefault(a(74652)),s=a(38296),i=a(23053);t.a=e=>{var{children:a=null,className:o="","aria-label":l="Breadcrumb",ouiaId:u,ouiaSafe:m=!0}=e,p=r.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=i.useOUIAProps(t.a.displayName,u,m);return n.createElement("nav",Object.assign({},p,{"aria-label":l,className:s.css(c.default.breadcrumb,o)},d),n.createElement("ol",{className:c.default.breadcrumbList},n.Children.map(a,((e,t)=>{const a=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:a}):e}))))},t.a.displayName="Breadcrumb"},49489:(e,t,a)=>{"use strict";t.g=void 0;const r=a(70655),n=r.__importStar(a(43297)),c=r.__importDefault(a(95511)),s=r.__importDefault(a(74652)),i=a(38296);t.g=e=>{var{children:t=null,className:a="",to:o,isActive:l=!1,isDropdown:u=!1,showDivider:m,target:p,component:d="a",render:f}=e,b=r.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const h=d,g=l?"page":void 0,v=i.css(s.default.breadcrumbLink,l&&s.default.modifiers.current);return n.createElement("li",Object.assign({},b,{className:i.css(s.default.breadcrumbItem,a)}),m&&n.createElement("span",{className:s.default.breadcrumbItemDivider},n.createElement(c.default,null)),"button"===d&&n.createElement("button",{className:v,"aria-current":g,type:"button"},t),u&&n.createElement("span",{className:i.css(s.default.breadcrumbDropdown)},t),f&&f({className:v,ariaCurrent:g}),o&&!f&&n.createElement(h,{href:o,target:p,className:v,"aria-current":g},t),!o&&"button"!==d&&!u&&t)},t.g.displayName="BreadcrumbItem"},74652:(e,t,a)=>{"use strict";t.__esModule=!0,a(58392),t.default={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},72466:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(43297);const n=a.n(r)().createContext("light")},86350:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var r=a(87462),n=a(45987),c=a(93433),s=a(4942),i=a(15671),o=a(43144),l=a(60136),u=a(82963),m=a(61120),p=a(43297),d=a.n(p),f=a(45697),b=a.n(f),h=a(94184),g=a.n(h),v=a(28216),y=a(72466);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function Z(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e){(0,l.Z)(f,e);var t,a,p=(t=f,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=(0,m.Z)(t);if(a){var n=(0,m.Z)(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return(0,u.Z)(this,e)});function f(){return(0,i.Z)(this,f),p.apply(this,arguments)}return(0,o.Z)(f,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,a=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var r=insights.chrome.$internal.store.getState();if(t&&r)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=Z(Z({},e.dynamic),{},(0,s.Z)({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),a[t.substr(1)])):e.staticPart=[].concat((0,c.Z)(e.staticPart),(0,c.Z)(""!==t?[t]:[])),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,c=(e.params,e.path,(0,n.Z)(e,["className","children","params","path"])),i=this.calculateLocation(),o=i.dynamic,l=i.staticPart;return d().createElement(y.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",n=g()((0,s.Z)({},"pf-m-".concat(e),"dark"===e));return{dark:d().createElement("section",(0,r.Z)({},c,o,{"page-type":l.join("-"),className:"".concat(g()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)}),d().Children.map(a,(function(e){return d().cloneElement(e,{className:"pf-m-dark"})}))),light:d().createElement("section",(0,r.Z)({},c,o,{"page-type":l.join("-"),className:"".concat(g()(t,"pf-l-page__main-section pf-c-page__main-section"))}),a)}[e]}))}}]),f}(p.Component);O.propTypes={className:b().string,children:b().any.isRequired,params:b().any,path:b().string};const E=(0,v.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(O)},48716:(e,t,a)=>{"use strict";a.d(t,{Z:()=>f});var r=a(87462),n=a(4942),c=a(45987),s=a(43297),i=a.n(s),o=a(45697),l=a.n(o),u=a(94184),m=a.n(u),p=a(72466),d=function(e){var t=e.className,a=e.children,s=(0,c.Z)(e,["className","children"]),o=m()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return i().createElement(p.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=m()((0,n.Z)({},"pf-m-".concat(e,"-200"),"dark"===e),(0,n.Z)({},"pf-m-light","light"===e));return i().createElement("section",(0,r.Z)({},s,{className:"".concat(o," ").concat(t),"widget-type":"InsightsPageHeader"}),a)}))};const f=d;d.propTypes={children:l().any.isRequired,className:l().string}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var r=a(43297),n=a.n(r),c=a(45697),s=a.n(c),i=a(94184),o=a.n(i),l=a(60485),u=function(e){var t=e.className,a=e.title,r=o()(t);return n().createElement(l.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",a," ")};const m=u;u.propTypes={title:s().node.isRequired,className:s().string}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var r=a(48716),n=a(39173),c=a(45697),s=a.n(c),i=a(43297),o=a.n(i),l=a(85991),u=a(49489),m=a(334),p=function(e){var t=e.items,a=e.headerOUIA;return o().createElement(l.a,null,t.filter(Boolean).map((function(e){return o().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&o().createElement(m.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:s().arrayOf(s().shape({isActive:s().bool,to:s().string,title:s().string})),headerOUIA:s().string};const d=p;var f=a(82819),b=a(98378),h=a(60076),g=function(e){var t=e.history,a=e.headerOUIA;return o().createElement(b.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},o().createElement(f.O,{eventKey:h.H.advisories.to,title:h.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(h.H.advisories.title)}),o().createElement(f.O,{eventKey:h.H.systems.to,title:h.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(h.H.systems.title)}))};g.propTypes={history:s().object,headerOUIA:s().string};const v=(0,m.withRouter)(g);var y=function(e){var t=e.title,a=e.showTabs,c=e.breadcrumbs,s=e.children,i=e.headerOUIA;return o().createElement(o().Fragment,null,o().createElement(r.Z,{"data-ouia-component-type":"".concat(i,"-page-header")},c&&o().createElement(d,{items:c,headerOUIA:i}),o().createElement(n.Z,{title:t}),s),a&&o().createElement(v,{headerOUIA:i}))};y.propTypes={title:s().string,showTabs:s().bool,breadcrumbs:s().array,children:s().any,headerOUIA:s().string};const _=y},44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>E});var r=a(29439),n=a(86350),c=a(43297),s=a.n(c),i=a(28216),o=a(30893),l=a(44612),u=a(13784),m=a(32132);const p=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.systems_updatable,r=function(t){e({filter:{systems_updatable:t}})};return{label:m.N.formatMessage(o.Z.labelsFiltersUpdatable),type:l.Y.checkbox,filterValues:{onChange:function(e,t){r(t)},items:u.Tl,value:a,placeholder:m.N.formatMessage(o.Z.labelsFiltersUpdatablePlaceholder)}}};var d=a(90747),f=a(49642),b=a(38776),h=a(64270),g=a(9557),v=a(11220),y=a(57668),_=a(5391),Z=a(91607),O=a(334);const E=function(){var e=(0,i.I0)(),t=s().useState(!0),a=(0,r.Z)(t,2),c=a[0],l=a[1],E=(0,O.useHistory)();(0,Z.Iw)("Packages");var N=(0,i.v9)((function(e){return e.PackagesListStore.rows})),P=s().useMemo((function(){return(0,y.k6)(N)}),[N]),k=(0,i.v9)((function(e){return e.PackagesListStore.status})),w=(0,i.v9)((function(e){return e.PackagesListStore.metadata})),I=(0,i.v9)((function(e){return e.PackagesListStore.queryParams}));function A(t){e((0,g.If)(t))}(0,Z.KW)((function(){c?(A((0,_.PZ)(E.location.search)),l(!1)):(E.push((0,_.R_)(I)),e((0,g.kU)(I)))}),[I,c]);var S=(0,Z.AR)("packages",I,{csv:v.pq,json:v.pW},e),j=(0,Z._f)(h.$$,A),D=s().useMemo((function(){return(0,_.hO)(h.$$,w.sort,0)}),[w.sort]),U=(0,Z.SL)(w.limit,A),L=(0,Z._T)(A);return s().createElement(s().Fragment,null,s().createElement(f.Z,{title:m.N.formatMessage(o.Z.titlesPatchPackages),headerOUIA:"packages"}),s().createElement(n.Z,null,s().createElement(b.Z,{columns:h.$$,store:{rows:P,metadata:w,status:k,queryParams:I},onSort:j,onExport:S,sortBy:D,onSetPage:U,onPerPageSelect:L,compact:!0,apply:A,filterConfig:{items:[(0,d.Z)(A,I.search,m.N.formatMessage(o.Z.labelsFiltersPackagesSearchTitle),m.N.formatMessage(o.Z.labelsFiltersPackagesSearchPlaceHolder)),p(A,I.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:u.eZ,searchChipLabel:m.N.formatMessage(o.Z.labelsFiltersPackagesSearchTitle)})))}},58392:()=>{}}]);