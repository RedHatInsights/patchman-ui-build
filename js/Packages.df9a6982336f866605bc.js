(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[1677],{64029:(e,t,a)=>{"use strict";a.d(t,{a:()=>i});var r=a(70655),n=a(43297),s=a(44303),o=a(38296),l=a(62472);const i=e=>{var{children:t=null,className:a="","aria-label":c="Breadcrumb",ouiaId:m,ouiaSafe:p=!0}=e,u=(0,r.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=(0,l.S$)(i.displayName,m,p);return n.createElement("nav",Object.assign({},u,{"aria-label":c,className:(0,o.css)(s.Z.breadcrumb,a)},d),n.createElement("ol",{className:s.Z.breadcrumbList},n.Children.map(t,((e,t)=>{const a=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:a}):e}))))};i.displayName="Breadcrumb"},32835:(e,t,a)=>{"use strict";a.d(t,{g:()=>i});var r=a(70655),n=a(43297),s=a(93174),o=a(44303),l=a(38296);const i=e=>{var{children:t=null,className:a="",to:i,isActive:c=!1,isDropdown:m=!1,showDivider:p,target:u,component:d="a",render:f}=e,g=(0,r.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const b=d,y=c?"page":void 0,h=(0,l.css)(o.Z.breadcrumbLink,c&&o.Z.modifiers.current);return n.createElement("li",Object.assign({},g,{className:(0,l.css)(o.Z.breadcrumbItem,a)}),p&&n.createElement("span",{className:o.Z.breadcrumbItemDivider},n.createElement(s.ZP,null)),"button"===d&&n.createElement("button",{className:h,"aria-current":y,type:"button"},t),m&&n.createElement("span",{className:(0,l.css)(o.Z.breadcrumbDropdown)},t),f&&f({className:h,ariaCurrent:y}),i&&!f&&n.createElement(b,{href:i,target:u,className:h,"aria-current":y},t),!i&&"button"!==d&&!m&&t)};i.displayName="BreadcrumbItem"},44303:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r}),a(58392);const r={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},53754:(e,t,a)=>{"use strict";a.d(t,{Z:()=>n});var r=a(43297);const n=a.n(r)().createContext("light")},14748:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(85893),n=a(43297),s=a.n(n),o=a(94184),l=a.n(o),i=a(28216),c=a(53754),m=function(){return m=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},m.apply(this,arguments)},p=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,s=t.length;n<s;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};const u=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,a=e.params,n=void 0===a?{}:a,o=e.children,i=e.className,u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["path","params","children","className"]),d=function(){var e,a,r;if(null===(r=null===(a=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===a?void 0:a.$internal)||void 0===r?void 0:r.store){var s=window.insights.chrome.$internal.store.getState();if(t&&s)return t.split("/").reduce((function(e,t){var a,r;return 0===t.indexOf(":")?e.dynamic=m(m({},e.dynamic),((a={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=n[t.substr(1)],a)):e.staticPart=p(p([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[s.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),f=d.dynamic,g=d.staticPart;return(0,r.jsx)(c.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var a=l()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,r.jsx)("section",m({},u,f,{"page-type":g.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(a)},{children:s().Children.map(o,(function(e){return s().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,r.jsx)("section",m({},u,f,{"page-type":g.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section"))},{children:o}))}[e]}})}))},80123:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(85893),n=a(94184),s=a.n(n),o=a(53754),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)};const i=function(e){var t=e.className,a=e.children,n=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["className","children"]),i=s()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,r.jsx)(o.Z.Consumer,{children:function(e){var t,o;void 0===e&&(e="light");var c=s()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((o={})["pf-m-light"]="light"===e,o));return(0,r.jsx)("section",l({},n,{className:"".concat(i," ").concat(c),"widget-type":"InsightsPageHeader"},{children:a}))}})}},39173:(e,t,a)=>{"use strict";a.d(t,{Z:()=>i});var r=a(85893),n=a(94184),s=a.n(n),o=a(6848),l=function(){return l=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},l.apply(this,arguments)};const i=function(e){var t=e.className,a=e.title,n=s()(t);return(0,r.jsx)(o.Title,l({headingLevel:"h1",size:"2xl",className:n,"widget-type":"InsightsPageHeaderTitle"},{children:a}))}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>_});var r=a(79851),n=a(34512),s=a(80123),o=a(39173),l=a(45697),i=a.n(l),c=a(43297),m=a.n(c),p=a(64029),u=a(32835),d=a(334),f=function(e){var t=e.items,a=e.headerOUIA;return m().createElement(p.a,null,t.filter(Boolean).map((function(e){return m().createElement(u.g,{key:e.title,isActive:e.isActive},e.to?m().createElement(d.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};f.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const g=f;var b=a(28883),y=a(35262),h=function(e){var t=e.history,a=e.headerOUIA;return m().createElement(y.m,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},m().createElement(b.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-Applicable advisories'")}),m().createElement(b.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-Systems")}))};h.propTypes={history:i().object,headerOUIA:i().string};const v=(0,d.withRouter)(h);var P=function(e){var t=e.title,a=e.showTabs,l=e.breadcrumbs,i=e.children,c=e.headerOUIA,p=e.actions;return m().createElement(m().Fragment,null,m().createElement(s.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},l&&m().createElement(g,{items:l,headerOUIA:c}),m().createElement(r.P,{hasGutter:!0},m().createElement(n.J,null,m().createElement(o.Z,{title:t})),m().createElement(n.J,{isFilled:!0}),m().createElement(n.J,null,p)),i),a&&m().createElement(v,{headerOUIA:c}))};P.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const _=P},91433:(e,t,a)=>{"use strict";a.d(t,{f:()=>d});var r=a(52643),n=a(9947),s=a(75106),o=a(38424),l=a(38779),i=a(68778),c=a(43297),m=a.n(c),p=a(32132),u=a(30893),d=function(){return m().createElement(r.b,null,m().createElement(n.u,{style:{paddingTop:40}},m().createElement(o.k,{icon:function(){return m().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),m().createElement(l.D,{headingLevel:"h5",size:"lg"},p.N.formatMessage(u.Z.statesNoApplicableAdvisories)),m().createElement(s.B,null,p.N.formatMessage(u.Z.statesSystemUpToDate))))}},38776:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var r=a(29439),n=a(3351),s=a(22860),o=a(6934),l=a(75863),i=a(3962),c=a(81739),m=a(45697),p=a.n(m),u=a(43297),d=a.n(u),f=a(30893),g=a(53074),b=a(5391),y=a(91607),h=a(32132),v=a(44733),P=a(50383),_=function(e){var t=e.isLoading,a=e.page,r=e.perPage,n=e.onSetPage,s=e.totalItems,o=e.onPerPageSelect,l=e.paginationOUIA;return d().createElement(d().Fragment,null,t?d().createElement("div",{className:"pf-c-pagination pf-m-bottom"},d().createElement(P.O,{fontSize:"xl",width:"350px",style:{margin:10}})):d().createElement(v.t,{itemCount:s,perPage:r,page:a,onSetPage:n,onPerPageSelect:o,widgetId:"pagination-options-menu-bottom",variant:v.a.bottom,ouiaId:l,isDisabled:0===s}))};_.propTypes={isLoading:p().bool,onSetPage:p().func,onPerPageSelect:p().func,page:p().number,perPage:p().number,totalItems:p().number,paginationOUIA:p().string};const S=_;var Z=a(52579),E=a(1595),N=function(e){var t,a=e.columns,m=e.store,p=m.rows,u=m.metadata,v=m.status,_=m.queryParams,N=_.filter,k=_.search,O=e.onCollapse,C=e.onSelect,w=e.onSetPage,I=e.onPerPageSelect,A=e.onSort,M=e.onExport,j=e.filterConfig,T=e.sortBy,x=e.remediationProvider,L=e.selectedRows,U=e.compact,D=e.apply,F=e.tableOUIA,B=e.paginationOUIA,$=e.errorState,z=e.emptyState,R=e.defaultFilters,q=e.searchChipLabel,H=e.ToolbarButton,V=e.actionsConfig,K=e.isRemediationLoading,W=e.actionsToggle,J=d().useMemo((function(){return(0,b.CM)(u.limit,u.offset)}),[u.limit,u.offset]),G=(0,r.Z)(J,2),Q=G[0],Y=G[1],X=(0,y.j5)(N,D,R),ee=(0,r.Z)(X,1)[0],te=L&&(0,b.Qy)(L).length,ae=v.code,re=v.hasError,ne=v.isLoading,se=(0,y.Pz)(te,C,u,p,O);return d().createElement(d().Fragment,null,d().createElement(d().Fragment,null,re||!1===u.has_systems?d().createElement(Z.Z,{code:ae,ErrorState:$,EmptyState:z,metadata:u}):d().createElement(d().Fragment,null,d().createElement(i.Z,{pagination:ne?d().createElement(P.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:u.total_items,page:Q,perPage:Y,isCompact:!0,onSetPage:w,onPerPageSelect:I,ouiaId:"top-".concat(B),isDisabled:0===u.total_items},filterConfig:j,activeFiltersConfig:{filters:(0,b.mt)(N,k,q),onDelete:ee,deleteTitle:h.N.formatMessage(R&&f.Z.labelsFiltersReset||f.Z.labelsFiltersClear)},actionsConfig:{actions:[x&&d().createElement(g.Z,{remediationProvider:x,isDisabled:0===Object.values(L).filter((function(e){return e})).length||K,isLoading:K})]},exportConfig:{isDisabled:0===u.total_items,onSelect:M},bulkSelect:C&&se},H&&d().createElement(E.E,null,d().createElement(H,null))),ne?d().createElement(c.Z,{colSize:null!==(t=null==a?void 0:a.length)&&void 0!==t?t:5,rowSize:20,variant:U&&l.B.compact}):d().createElement(n.i,{"aria-label":"Patch table view",cells:a,onSelect:u.total_items&&C,rows:p,onCollapse:u.total_items&&O,canSelectAll:!1,onSort:u.total_items&&A,ouiaId:F,sortBy:u.total_items&&T,isStickyHeader:!0,variant:U&&l.B.compact,actions:V,actionsToggle:W},d().createElement(o.x,null),d().createElement(s.R,null)),d().createElement(S,{isLoading:ne,totalItems:u.total_items,perPage:Y,page:Q,onSetPage:w,onPerPageSelect:I,paginationOUIA:"bottom-".concat(B)}))))};N.propTypes={columns:p().array,onCollapse:p().func,onSelect:p().func,onSetPage:p().func,onPerPageSelect:p().func,onSort:p().func,onExport:p().func,remediationProvider:p().func,selectedRows:p().object,apply:p().func,sortBy:p().object,filterConfig:p().object,store:p().object,compact:p().bool,tableOUIA:p().string,paginationOUIA:p().string,errorState:p().element,emptyState:p().element,defaultFilters:p().object,searchChipLabel:p().string,ToolbarButton:p().elementType,actionsConfig:p().array,isRemediationLoading:p().bool,actionsToggle:p().func};const k=N},64270:(e,t,a)=>{"use strict";a.d(t,{$$:()=>p,C_:()=>m,fG:()=>c,g:()=>u,z7:()=>i});var r=a(1082),n=a(62480),s=a(7732),o=a(30893),l=a(32132),i=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[n.zW],transforms:[s.p,(0,r.d)(15)],key:"id"},{title:l.N.formatMessage(o.Z.labelsColumnsSynopsis),transforms:[s.p],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[s.p,(0,r.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsApplicableSystems),transforms:[s.p,(0,r.d)(15)],key:"applicable_systems"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[s.p],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[s.p,(0,r.d)(15)],key:"public_date"}],c=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[n.zW],transforms:[s.p,(0,r.d)(15)],key:"id"},{title:"Synopsis",transforms:[s.p,(0,r.d)(35)],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[s.p,(0,r.d)(15)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[s.p,(0,r.d)(20)],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[s.p,(0,r.d)(30)],key:"public_date"}],m=[{title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[s.p,(0,r.d)(20)],key:"name"},{title:l.N.formatMessage(o.Z.labelsColumnsInstalledVersion),transforms:[s.p,(0,r.d)(15)],key:"evra"},{title:l.N.formatMessage(o.Z.labelsColumnsLatestVersion),transforms:[(0,r.d)(15)],key:"latest_update"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[(0,r.d)(10)],key:"updatable"},{title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[s.p,(0,r.d)(40)],key:"summary"}],p=[{key:"name",title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[s.p,(0,r.d)(25)]},{key:"systems_installed",title:l.N.formatMessage(o.Z.labelsColumnsApplicableSystems),transforms:[s.p,(0,r.d)(15)],props:{width:10}},{key:"systems_updatable",title:l.N.formatMessage(o.Z.labelsColumnsUpgradable),transforms:[s.p,(0,r.d)(10)],props:{width:10}},{key:"summary",title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[s.p,(0,r.d)(40)],props:{width:30}}],u=[{title:l.N.formatMessage(o.Z.labelsColumnsCveID),transforms:[s.p,(0,r.d)(40)],key:"synopsis"},{key:"impact",title:l.N.formatMessage(o.Z.labelsColumnsSeverity),transforms:[s.p,(0,r.d)(30)],props:{width:30}},{key:"cvss",title:l.N.formatMessage(o.Z.labelsColumnsCVSS),transforms:[s.p,(0,r.d)(30)],props:{width:30}}]},44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var r=a(29439),n=a(14748),s=a(43297),o=a.n(s),l=a(28216),i=a(30893),c=a(83237),m=a(13784),p=a(32132);const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.systems_updatable,r=function(t){e({filter:{systems_updatable:t}})};return{label:p.N.formatMessage(i.Z.labelsFiltersUpdatable),type:c.Y.checkbox,filterValues:{onChange:function(e,t){r(t)},items:m.Tl,value:a,placeholder:p.N.formatMessage(i.Z.labelsFiltersUpdatablePlaceholder)}}};var d=a(90747),f=a(49642),g=a(38776),b=a(64270),y=a(9557),h=a(11220),v=a(36248),P=a(5391),_=a(91607),S=a(334);const Z=function(){var e=(0,l.I0)(),t=o().useState(!0),a=(0,r.Z)(t,2),s=a[0],c=a[1],Z=(0,S.useHistory)();(0,_.Iw)("Packages");var E=(0,l.v9)((function(e){return e.PackagesListStore.rows})),N=o().useMemo((function(){return(0,v.k6)(E)}),[E]),k=(0,l.v9)((function(e){return e.PackagesListStore.status})),O=(0,l.v9)((function(e){return e.PackagesListStore.metadata})),C=(0,l.v9)((function(e){return e.PackagesListStore.queryParams}));function w(t){e((0,y.If)(t))}(0,_.KW)((function(){s?(w((0,P.PZ)(Z.location.search)),c(!1)):(Z.push((0,P.R_)(C)),e((0,y.kU)(C)))}),[C,s]);var I=(0,_.AR)("packages",C,{csv:h.pq,json:h.pW},e),A=(0,_._f)(b.$$,w),M=o().useMemo((function(){return(0,P.hO)(b.$$,O.sort,0)}),[O.sort]),j=(0,_.SL)(O.limit,w),T=(0,_._T)(w);return o().createElement(o().Fragment,null,o().createElement(f.Z,{title:p.N.formatMessage(i.Z.titlesPatchPackages),headerOUIA:"packages"}),o().createElement(n.Z,null,o().createElement(g.Z,{columns:b.$$,store:{rows:N,metadata:O,status:k,queryParams:C},onSort:A,onExport:I,sortBy:M,onSetPage:j,onPerPageSelect:T,compact:!0,apply:w,filterConfig:{items:[(0,d.Z)(w,C.search,p.N.formatMessage(i.Z.labelsFiltersPackagesSearchTitle),p.N.formatMessage(i.Z.labelsFiltersPackagesSearchPlaceHolder)),u(w,C.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:m.eZ,searchChipLabel:p.N.formatMessage(i.Z.labelsFiltersPackagesSearchTitle)})))}},58392:()=>{},28992:()=>{},30187:()=>{},21626:()=>{},93398:()=>{},46928:()=>{},53336:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},97236:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Packages.258f2f6004ae61a3f4d4a7ba83266513.js.map