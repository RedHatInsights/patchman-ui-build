!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a99186ac-0c07-4ae7-a7dc-53707296f1ad",e._sentryDebugIdIdentifier="sentry-dbid-a99186ac-0c07-4ae7-a7dc-53707296f1ad")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5cb67ae"},(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[1677],{64029:(e,t,a)=>{"use strict";a.d(t,{a:()=>i});var r=a(70655),n=a(43297),s=a(44303),o=a(38296),l=a(62472);const i=e=>{var{children:t=null,className:a="","aria-label":c="Breadcrumb",ouiaId:m,ouiaSafe:d=!0}=e,u=(0,r.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const p=(0,l.S$)(i.displayName,m,d);return n.createElement("nav",Object.assign({},u,{"aria-label":c,className:(0,o.css)(s.Z.breadcrumb,a)},p),n.createElement("ol",{className:s.Z.breadcrumbList},n.Children.map(t,((e,t)=>{const a=t>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:a}):e}))))};i.displayName="Breadcrumb"},32835:(e,t,a)=>{"use strict";a.d(t,{g:()=>i});var r=a(70655),n=a(43297),s=a(93174),o=a(44303),l=a(38296);const i=e=>{var{children:t=null,className:a="",to:i,isActive:c=!1,isDropdown:m=!1,showDivider:d,target:u,component:p="a",render:f}=e,b=(0,r.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const g=p,y=c?"page":void 0,h=(0,l.css)(o.Z.breadcrumbLink,c&&o.Z.modifiers.current);return n.createElement("li",Object.assign({},b,{className:(0,l.css)(o.Z.breadcrumbItem,a)}),d&&n.createElement("span",{className:o.Z.breadcrumbItemDivider},n.createElement(s.ZP,null)),"button"===p&&n.createElement("button",{className:h,"aria-current":y,type:"button"},t),m&&n.createElement("span",{className:(0,l.css)(o.Z.breadcrumbDropdown)},t),f&&f({className:h,ariaCurrent:y}),i&&!f&&n.createElement(g,{href:i,target:u,className:h,"aria-current":y},t),!i&&"button"!==p&&!m&&t)};i.displayName="BreadcrumbItem"},44303:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r}),a(58392);const r={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},14748:(e,t,a)=>{"use strict";a.d(t,{Z:()=>u});var r=a(85893),n=a(43297),s=a.n(n),o=a(94184),l=a.n(o),i=a(28216),c=a(53754),m=function(){return m=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},m.apply(this,arguments)},d=function(e,t,a){if(a||2===arguments.length)for(var r,n=0,s=t.length;n<s;n++)!r&&n in t||(r||(r=Array.prototype.slice.call(t,0,n)),r[n]=t[n]);return e.concat(r||Array.prototype.slice.call(t))};const u=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,a=e.params,n=void 0===a?{}:a,o=e.children,i=e.className,u=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(e,["path","params","children","className"]),p=function(){var e,a,r;if(null===(r=null===(a=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===a?void 0:a.$internal)||void 0===r?void 0:r.store){var s=window.insights.chrome.$internal.store.getState();if(t&&s)return t.split("/").reduce((function(e,t){var a,r;return 0===t.indexOf(":")?e.dynamic=m(m({},e.dynamic),((a={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=n[t.substr(1)],a)):e.staticPart=d(d([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[s.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),f=p.dynamic,b=p.staticPart;return(0,r.jsx)(c.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var a=l()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,r.jsx)("section",m({},u,f,{"page-type":b.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(a)},{children:s().Children.map(o,(function(e){return s().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,r.jsx)("section",m({},u,f,{"page-type":b.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section"))},{children:o}))}[e]}})}))},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>S});var r=a(79851),n=a(34512),s=a(80123),o=a(39173),l=a(45697),i=a.n(l),c=a(43297),m=a.n(c),d=a(64029),u=a(32835),p=a(96620),f=function(e){var t=e.items,a=e.headerOUIA;return m().createElement(d.a,null,t.filter(Boolean).map((function(e){return m().createElement(u.g,{key:e.title,isActive:e.isActive},e.to?m().createElement(p.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};f.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const b=f;var g=a(28883),y=a(35262),h=function(e){var t=e.history,a=e.headerOUIA;return m().createElement(y.m,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},m().createElement(g.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-Applicable advisories'")}),m().createElement(g.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-Systems")}))};h.propTypes={history:i().object,headerOUIA:i().string};const v=(0,p.withRouter)(h);var _=function(e){var t=e.title,a=e.showTabs,l=e.breadcrumbs,i=e.children,c=e.headerOUIA,d=e.actions;return m().createElement(m().Fragment,null,m().createElement(s.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},l&&m().createElement(b,{items:l,headerOUIA:c}),m().createElement(r.P,{hasGutter:!0},m().createElement(n.J,null,m().createElement(o.Z,{title:t})),m().createElement(n.J,{isFilled:!0}),m().createElement(n.J,null,d)),i),a&&m().createElement(v,{headerOUIA:c}))};_.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const S=_},91433:(e,t,a)=>{"use strict";a.d(t,{f:()=>p});var r=a(52643),n=a(9947),s=a(75106),o=a(38424),l=a(60485),i=a(68778),c=a(43297),m=a.n(c),d=a(32132),u=a(30893),p=function(){return m().createElement(r.b,null,m().createElement(n.u,{style:{paddingTop:40}},m().createElement(o.k,{icon:function(){return m().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),m().createElement(l.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(u.Z.statesNoApplicableAdvisories)),m().createElement(s.B,null,d.N.formatMessage(u.Z.statesSystemUpToDate))))}},38776:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var r=a(29439),n=a(3351),s=a(22860),o=a(6934),l=a(75863),i=a(3962),c=a(81739),m=a(45697),d=a.n(m),u=a(43297),p=a.n(u),f=a(30893),b=a(53074),g=a(5391),y=a(91607),h=a(32132),v=a(44733),_=a(50383),S=function(e){var t=e.isLoading,a=e.page,r=e.perPage,n=e.onSetPage,s=e.totalItems,o=e.onPerPageSelect,l=e.paginationOUIA;return p().createElement(p().Fragment,null,t?p().createElement("div",{className:"pf-c-pagination pf-m-bottom"},p().createElement(_.O,{fontSize:"xl",width:"350px",style:{margin:10}})):p().createElement(v.t,{itemCount:s,perPage:r,page:a,onSetPage:n,onPerPageSelect:o,widgetId:"pagination-options-menu-bottom",variant:v.a.bottom,ouiaId:l,isDisabled:0===s}))};S.propTypes={isLoading:d().bool,onSetPage:d().func,onPerPageSelect:d().func,page:d().number,perPage:d().number,totalItems:d().number,paginationOUIA:d().string};const E=S;var P=a(52579),Z=a(1595),N=function(e){var t,a=e.columns,m=e.store,d=m.rows,u=m.metadata,v=m.status,S=m.queryParams,N=S.filter,k=S.search,w=e.onCollapse,C=e.onSelect,I=e.onSetPage,O=e.onPerPageSelect,A=e.onSort,M=e.onExport,D=e.filterConfig,L=e.sortBy,T=e.remediationProvider,U=e.selectedRows,j=e.compact,F=e.apply,x=e.tableOUIA,B=e.paginationOUIA,$=e.errorState,R=e.emptyState,z=e.defaultFilters,q=e.searchChipLabel,V=e.ToolbarButton,H=e.actionsConfig,K=e.isRemediationLoading,W=e.actionsToggle,J=p().useMemo((function(){return(0,g.CM)(u.limit,u.offset)}),[u.limit,u.offset]),G=(0,r.Z)(J,2),Y=G[0],Q=G[1],X=(0,y.j5)(N,F,z),ee=(0,r.Z)(X,1)[0],te=U&&(0,g.Qy)(U).length,ae=v.code,re=v.hasError,ne=v.isLoading,se=(0,y.Pz)(te,C,u,d,w);return p().createElement(p().Fragment,null,p().createElement(p().Fragment,null,re||!1===u.has_systems?p().createElement(P.Z,{code:ae,ErrorState:$,EmptyState:R,metadata:u}):p().createElement(p().Fragment,null,p().createElement(i.Z,{pagination:ne?p().createElement(_.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:u.total_items,page:Y,perPage:Q,isCompact:!0,onSetPage:I,onPerPageSelect:O,ouiaId:"top-".concat(B),isDisabled:0===u.total_items},filterConfig:D,activeFiltersConfig:{filters:(0,g.mt)(N,k,q),onDelete:ee,deleteTitle:h.N.formatMessage(z&&f.Z.labelsFiltersReset||f.Z.labelsFiltersClear)},actionsConfig:{actions:[T&&p().createElement(b.Z,{remediationProvider:T,isDisabled:0===Object.values(U).filter((function(e){return e})).length||K,isLoading:K})]},exportConfig:{isDisabled:0===u.total_items,onSelect:M},bulkSelect:C&&se},V&&p().createElement(Z.E,null,p().createElement(V,null))),ne?p().createElement(c.Z,{colSize:null!==(t=null==a?void 0:a.length)&&void 0!==t?t:5,rowSize:20,variant:j&&l.B.compact}):p().createElement(n.i,{"aria-label":"Patch table view",cells:a,onSelect:u.total_items&&C,rows:d,onCollapse:u.total_items&&w,canSelectAll:!1,onSort:u.total_items&&A,ouiaId:x,sortBy:u.total_items&&L,isStickyHeader:!0,variant:j&&l.B.compact,actions:H,actionsToggle:W},p().createElement(o.x,null),p().createElement(s.R,null)),p().createElement(E,{isLoading:ne,totalItems:u.total_items,perPage:Q,page:Y,onSetPage:I,onPerPageSelect:O,paginationOUIA:"bottom-".concat(B)}))))};N.propTypes={columns:d().array,onCollapse:d().func,onSelect:d().func,onSetPage:d().func,onPerPageSelect:d().func,onSort:d().func,onExport:d().func,remediationProvider:d().func,selectedRows:d().object,apply:d().func,sortBy:d().object,filterConfig:d().object,store:d().object,compact:d().bool,tableOUIA:d().string,paginationOUIA:d().string,errorState:d().element,emptyState:d().element,defaultFilters:d().object,searchChipLabel:d().string,ToolbarButton:d().elementType,actionsConfig:d().array,isRemediationLoading:d().bool,actionsToggle:d().func};const k=N},64270:(e,t,a)=>{"use strict";a.d(t,{$$:()=>d,C_:()=>m,fG:()=>c,g:()=>u,z7:()=>i});var r=a(1082),n=a(62480),s=a(7732),o=a(30893),l=a(32132),i=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[n.zW],transforms:[s.p,(0,r.d)(15)],key:"id"},{title:l.N.formatMessage(o.Z.labelsColumnsSynopsis),transforms:[s.p],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[s.p,(0,r.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsAffectedSystems),transforms:[s.p,(0,r.d)(15)],key:"applicable_systems"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[s.p],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[s.p,(0,r.d)(15)],key:"public_date"}],c=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[n.zW],transforms:[s.p,(0,r.d)(15)],key:"id"},{title:"Synopsis",transforms:[s.p,(0,r.d)(35)],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[s.p,(0,r.d)(10)],key:"status"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[s.p,(0,r.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[s.p,(0,r.d)(10)],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[s.p,(0,r.d)(10)],key:"public_date"}],m=[{title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[s.p,(0,r.d)(20)],key:"name"},{title:l.N.formatMessage(o.Z.labelsColumnsInstalledVersion),transforms:[s.p,(0,r.d)(15)],key:"evra"},{title:l.N.formatMessage(o.Z.labelsColumnsLatestVersion),transforms:[(0,r.d)(15)],key:"latest_update"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[(0,r.d)(10)],key:"updatable"},{title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[s.p,(0,r.d)(40)],key:"summary"}],d=[{key:"name",title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[s.p,(0,r.d)(25)]},{key:"systems_installed",title:l.N.formatMessage(o.Z.labelsColumnsApplicableSystems),transforms:[s.p,(0,r.d)(15)],props:{width:10}},{key:"systems_updatable",title:l.N.formatMessage(o.Z.labelsColumnsUpgradable),transforms:[s.p,(0,r.d)(10)],props:{width:10}},{key:"summary",title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[s.p,(0,r.d)(40)],props:{width:30}}],u=[{title:l.N.formatMessage(o.Z.labelsColumnsCveID),transforms:[s.p,(0,r.d)(40)],key:"synopsis"},{key:"impact",title:l.N.formatMessage(o.Z.labelsColumnsSeverity),transforms:[s.p,(0,r.d)(30)],props:{width:30}},{key:"cvss",title:l.N.formatMessage(o.Z.labelsColumnsCVSS),transforms:[s.p,(0,r.d)(30)],props:{width:30}}]},44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var r=a(29439),n=a(14748),s=a(43297),o=a.n(s),l=a(28216),i=a(30893),c=a(83237),m=a(13784),d=a(32132);const u=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).systems_updatable;return{label:d.N.formatMessage(i.Z.labelsFiltersUpdatable),type:c.Y.checkbox,filterValues:{onChange:function(t,a){!function(t){e({filter:{systems_updatable:t}})}(a)},items:m.Tl,value:t,placeholder:d.N.formatMessage(i.Z.labelsFiltersUpdatablePlaceholder)}}};var p=a(90747),f=a(49642),b=a(38776),g=a(64270),y=a(9557),h=a(11220),v=a(36248),_=a(5391),S=a(91607),E=a(96620);const P=function(){var e=(0,l.I0)(),t=o().useState(!0),a=(0,r.Z)(t,2),s=a[0],c=a[1],P=(0,E.useHistory)();(0,S.Iw)("Packages");var Z=(0,l.v9)((function(e){return e.PackagesListStore.rows})),N=o().useMemo((function(){return(0,v.k6)(Z)}),[Z]),k=(0,l.v9)((function(e){return e.PackagesListStore.status})),w=(0,l.v9)((function(e){return e.PackagesListStore.metadata})),C=(0,l.v9)((function(e){return e.PackagesListStore.queryParams}));function I(t){e((0,y.If)(t))}(0,S.KW)((function(){s?(I((0,_.PZ)(P.location.search)),c(!1)):(P.push((0,_.R_)(C)),e((0,y.kU)(C)))}),[C,s]);var O=(0,S.AR)("packages",C,{csv:h.pq,json:h.pW},e),A=(0,S._f)(g.$$,I),M=o().useMemo((function(){return(0,_.hO)(g.$$,w.sort,0)}),[w.sort]),D=(0,S.SL)(w.limit,I),L=(0,S._T)(I);return o().createElement(o().Fragment,null,o().createElement(f.Z,{title:d.N.formatMessage(i.Z.titlesPatchPackages),headerOUIA:"packages"}),o().createElement(n.Z,null,o().createElement(b.Z,{columns:g.$$,store:{rows:N,metadata:w,status:k,queryParams:C},onSort:A,onExport:O,sortBy:M,onSetPage:D,onPerPageSelect:L,compact:!0,apply:I,filterConfig:{items:[(0,p.Z)(I,C.search,d.N.formatMessage(i.Z.labelsFiltersPackagesSearchTitle),d.N.formatMessage(i.Z.labelsFiltersPackagesSearchPlaceHolder)),u(I,C.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:m.eZ,searchChipLabel:d.N.formatMessage(i.Z.labelsFiltersPackagesSearchTitle)})))}},58392:()=>{},93398:()=>{},46928:()=>{},53336:()=>{},97236:()=>{}}]);