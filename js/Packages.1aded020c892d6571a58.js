(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[1677],{64029:(e,t,a)=>{"use strict";a.d(t,{a:()=>i});var r=a(70655),s=a(43297),n=a(44303),o=a(38296),l=a(62472);const i=e=>{var{children:t=null,className:a="","aria-label":c="Breadcrumb",ouiaId:m,ouiaSafe:u=!0}=e,p=(0,r.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=(0,l.S$)(i.displayName,m,u);return s.createElement("nav",Object.assign({},p,{"aria-label":c,className:(0,o.css)(n.Z.breadcrumb,a)},d),s.createElement("ol",{className:n.Z.breadcrumbList},s.Children.map(t,((e,t)=>{const a=t>0;return s.isValidElement(e)?s.cloneElement(e,{showDivider:a}):e}))))};i.displayName="Breadcrumb"},32835:(e,t,a)=>{"use strict";a.d(t,{g:()=>i});var r=a(70655),s=a(43297),n=a(93174),o=a(44303),l=a(38296);const i=e=>{var{children:t=null,className:a="",to:i,isActive:c=!1,isDropdown:m=!1,showDivider:u,target:p,component:d="a",render:f}=e,b=(0,r.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const g=d,y=c?"page":void 0,h=(0,l.css)(o.Z.breadcrumbLink,c&&o.Z.modifiers.current);return s.createElement("li",Object.assign({},b,{className:(0,l.css)(o.Z.breadcrumbItem,a)}),u&&s.createElement("span",{className:o.Z.breadcrumbItemDivider},s.createElement(n.ZP,null)),"button"===d&&s.createElement("button",{className:h,"aria-current":y,type:"button"},t),m&&s.createElement("span",{className:(0,l.css)(o.Z.breadcrumbDropdown)},t),f&&f({className:h,ariaCurrent:y}),i&&!f&&s.createElement(g,{href:i,target:p,className:h,"aria-current":y},t),!i&&"button"!==d&&!m&&t)};i.displayName="BreadcrumbItem"},44303:(e,t,a)=>{"use strict";a.d(t,{Z:()=>r}),a(58392);const r={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},14748:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var r=a(85893),s=a(43297),n=a.n(s),o=a(94184),l=a.n(o),i=a(28216),c=a(53754),m=function(){return m=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var s in t=arguments[a])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e},m.apply(this,arguments)},u=function(e,t,a){if(a||2===arguments.length)for(var r,s=0,n=t.length;s<n;s++)!r&&s in t||(r||(r=Array.prototype.slice.call(t,0,s)),r[s]=t[s]);return e.concat(r||Array.prototype.slice.call(t))};const p=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,a=e.params,s=void 0===a?{}:a,o=e.children,i=e.className,p=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(a[r[s]]=e[r[s]])}return a}(e,["path","params","children","className"]),d=function(){var e,a,r;if(null===(r=null===(a=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===a?void 0:a.$internal)||void 0===r?void 0:r.store){var n=window.insights.chrome.$internal.store.getState();if(t&&n)return t.split("/").reduce((function(e,t){var a,r;return 0===t.indexOf(":")?e.dynamic=m(m({},e.dynamic),((a={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=s[t.substr(1)],a)):e.staticPart=u(u([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[n.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),f=d.dynamic,b=d.staticPart;return(0,r.jsx)(c.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var a=l()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,r.jsx)("section",m({},p,f,{"page-type":b.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(a)},{children:n().Children.map(o,(function(e){return n().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,r.jsx)("section",m({},p,f,{"page-type":b.join("-"),className:"".concat(l()(i,"pf-l-page__main-section pf-c-page__main-section"))},{children:o}))}[e]}})}))},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var r=a(79851),s=a(34512),n=a(80123),o=a(39173),l=a(45697),i=a.n(l),c=a(43297),m=a.n(c),u=a(64029),p=a(32835),d=a(96620),f=function(e){var t=e.items,a=e.headerOUIA;return m().createElement(u.a,null,t.filter(Boolean).map((function(e){return m().createElement(p.g,{key:e.title,isActive:e.isActive},e.to?m().createElement(d.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};f.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const b=f;var g=a(28883),y=a(35262),h=function(e){var t=e.history,a=e.headerOUIA;return m().createElement(y.m,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},m().createElement(g.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-Applicable advisories'")}),m().createElement(g.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-Systems")}))};h.propTypes={history:i().object,headerOUIA:i().string};const v=(0,d.withRouter)(h);var S=function(e){var t=e.title,a=e.showTabs,l=e.breadcrumbs,i=e.children,c=e.headerOUIA,u=e.actions;return m().createElement(m().Fragment,null,m().createElement(n.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},l&&m().createElement(b,{items:l,headerOUIA:c}),m().createElement(r.P,{hasGutter:!0},m().createElement(s.J,null,m().createElement(o.Z,{title:t})),m().createElement(s.J,{isFilled:!0}),m().createElement(s.J,null,u)),i),a&&m().createElement(v,{headerOUIA:c}))};S.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const Z=S},91433:(e,t,a)=>{"use strict";a.d(t,{f:()=>d});var r=a(52643),s=a(9947),n=a(75106),o=a(38424),l=a(60485),i=a(68778),c=a(43297),m=a.n(c),u=a(32132),p=a(30893),d=function(){return m().createElement(r.b,null,m().createElement(s.u,{style:{paddingTop:40}},m().createElement(o.k,{icon:function(){return m().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),m().createElement(l.D,{headingLevel:"h5",size:"lg"},u.N.formatMessage(p.Z.statesNoApplicableAdvisories)),m().createElement(n.B,null,u.N.formatMessage(p.Z.statesSystemUpToDate))))}},38776:(e,t,a)=>{"use strict";a.d(t,{Z:()=>C});var r=a(29439),s=a(3351),n=a(22860),o=a(6934),l=a(75863),i=a(3962),c=a(81739),m=a(45697),u=a.n(m),p=a(43297),d=a.n(p),f=a(30893),b=a(53074),g=a(5391),y=a(91607),h=a(32132),v=a(44733),S=a(50383),Z=function(e){var t=e.isLoading,a=e.page,r=e.perPage,s=e.onSetPage,n=e.totalItems,o=e.onPerPageSelect,l=e.paginationOUIA;return d().createElement(d().Fragment,null,t?d().createElement("div",{className:"pf-c-pagination pf-m-bottom"},d().createElement(S.O,{fontSize:"xl",width:"350px",style:{margin:10}})):d().createElement(v.t,{itemCount:n,perPage:r,page:a,onSetPage:s,onPerPageSelect:o,widgetId:"pagination-options-menu-bottom",variant:v.a.bottom,ouiaId:l,isDisabled:0===n}))};Z.propTypes={isLoading:u().bool,onSetPage:u().func,onPerPageSelect:u().func,page:u().number,perPage:u().number,totalItems:u().number,paginationOUIA:u().string};const P=Z;var E=a(52579),N=a(1595),k=function(e){var t,a=e.columns,m=e.store,u=m.rows,p=m.metadata,v=m.status,Z=m.queryParams,k=Z.filter,C=Z.search,_=e.onCollapse,w=e.onSelect,I=e.onSetPage,O=e.onPerPageSelect,M=e.onSort,A=e.onExport,T=e.filterConfig,j=e.sortBy,D=e.remediationProvider,L=e.selectedRows,U=e.compact,F=e.apply,x=e.tableOUIA,B=e.paginationOUIA,$=e.errorState,z=e.emptyState,R=e.defaultFilters,q=e.searchChipLabel,V=e.ToolbarButton,H=e.actionsConfig,J=e.isRemediationLoading,K=e.actionsToggle,W=d().useMemo((function(){return(0,g.CM)(p.limit,p.offset)}),[p.limit,p.offset]),G=(0,r.Z)(W,2),Q=G[0],Y=G[1],X=(0,y.j5)(k,F,R),ee=(0,r.Z)(X,1)[0],te=L&&(0,g.Qy)(L).length,ae=v.code,re=v.hasError,se=v.isLoading,ne=(0,y.Pz)(te,w,p,u,_);return d().createElement(d().Fragment,null,d().createElement(d().Fragment,null,re||!1===p.has_systems?d().createElement(E.Z,{code:ae,ErrorState:$,EmptyState:z,metadata:p}):d().createElement(d().Fragment,null,d().createElement(i.Z,{pagination:se?d().createElement(S.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:p.total_items,page:Q,perPage:Y,isCompact:!0,onSetPage:I,onPerPageSelect:O,ouiaId:"top-".concat(B),isDisabled:0===p.total_items},filterConfig:T,activeFiltersConfig:{filters:(0,g.mt)(k,C,q),onDelete:ee,deleteTitle:h.N.formatMessage(R&&f.Z.labelsFiltersReset||f.Z.labelsFiltersClear)},actionsConfig:{actions:[D&&d().createElement(b.Z,{remediationProvider:D,isDisabled:0===Object.values(L).filter((function(e){return e})).length||J,isLoading:J})]},exportConfig:{isDisabled:0===p.total_items,onSelect:A},bulkSelect:w&&ne},V&&d().createElement(N.E,null,d().createElement(V,null))),se?d().createElement(c.Z,{colSize:null!==(t=null==a?void 0:a.length)&&void 0!==t?t:5,rowSize:20,variant:U&&l.B.compact}):d().createElement(s.i,{"aria-label":"Patch table view",cells:a,onSelect:p.total_items&&w,rows:u,onCollapse:p.total_items&&_,canSelectAll:!1,onSort:p.total_items&&M,ouiaId:x,sortBy:p.total_items&&j,isStickyHeader:!0,variant:U&&l.B.compact,actions:H,actionsToggle:K},d().createElement(o.x,null),d().createElement(n.R,null)),d().createElement(P,{isLoading:se,totalItems:p.total_items,perPage:Y,page:Q,onSetPage:I,onPerPageSelect:O,paginationOUIA:"bottom-".concat(B)}))))};k.propTypes={columns:u().array,onCollapse:u().func,onSelect:u().func,onSetPage:u().func,onPerPageSelect:u().func,onSort:u().func,onExport:u().func,remediationProvider:u().func,selectedRows:u().object,apply:u().func,sortBy:u().object,filterConfig:u().object,store:u().object,compact:u().bool,tableOUIA:u().string,paginationOUIA:u().string,errorState:u().element,emptyState:u().element,defaultFilters:u().object,searchChipLabel:u().string,ToolbarButton:u().elementType,actionsConfig:u().array,isRemediationLoading:u().bool,actionsToggle:u().func};const C=k},64270:(e,t,a)=>{"use strict";a.d(t,{$$:()=>u,C_:()=>m,fG:()=>c,g:()=>p,z7:()=>i});var r=a(1082),s=a(62480),n=a(7732),o=a(30893),l=a(32132),i=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[s.zW],transforms:[n.p,(0,r.d)(15)],key:"id"},{title:l.N.formatMessage(o.Z.labelsColumnsSynopsis),transforms:[n.p],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[n.p,(0,r.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsAffectedSystems),transforms:[n.p,(0,r.d)(15)],key:"applicable_systems"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[n.p],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[n.p,(0,r.d)(15)],key:"public_date"}],c=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[s.zW],transforms:[n.p,(0,r.d)(15)],key:"id"},{title:"Synopsis",transforms:[n.p,(0,r.d)(35)],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[n.p,(0,r.d)(10)],key:"status"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[n.p,(0,r.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[n.p,(0,r.d)(10)],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[n.p,(0,r.d)(10)],key:"public_date"}],m=[{title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[n.p,(0,r.d)(20)],key:"name"},{title:l.N.formatMessage(o.Z.labelsColumnsInstalledVersion),transforms:[n.p,(0,r.d)(15)],key:"evra"},{title:l.N.formatMessage(o.Z.labelsColumnsLatestVersion),transforms:[(0,r.d)(15)],key:"latest_update"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[n.p,(0,r.d)(10)],key:"updatable"},{title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[n.p,(0,r.d)(40)],key:"summary"}],u=[{key:"name",title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[n.p,(0,r.d)(25)]},{key:"systems_installed",title:l.N.formatMessage(o.Z.labelsColumnsInstalledSystems),transforms:[n.p,(0,r.d)(10)],props:{width:10}},{key:"systems_applicable",title:l.N.formatMessage(o.Z.labelsColumnsApplicableSystems),transforms:[n.p,(0,r.d)(10)],props:{width:10}},{key:"systems_installable",title:l.N.formatMessage(o.Z.labelsColumnsInstallableSystems),transforms:[n.p,(0,r.d)(10)],props:{width:10}},{key:"summary",title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[n.p,(0,r.d)(40)],props:{width:30}}],p=[{title:l.N.formatMessage(o.Z.labelsColumnsCveID),transforms:[n.p,(0,r.d)(40)],key:"synopsis"},{key:"impact",title:l.N.formatMessage(o.Z.labelsColumnsSeverity),transforms:[n.p,(0,r.d)(30)],props:{width:30}},{key:"cvss",title:l.N.formatMessage(o.Z.labelsColumnsCVSS),transforms:[n.p,(0,r.d)(30)],props:{width:30}}]},44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>N});var r=a(29439),s=a(14748),n=a(43297),o=a.n(n),l=a(28216),i=a(30893),c=a(83237),m=a(13784),u=a(32132);const p=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).systems_updatable;return{label:u.N.formatMessage(i.Z.labelsFiltersUpdatable),type:c.Y.checkbox,filterValues:{onChange:function(t,a){!function(t){e({filter:{systems_updatable:t}})}(a)},items:m.Tl,value:t,placeholder:u.N.formatMessage(i.Z.labelsFiltersUpdatablePlaceholder)}}};var d=a(90747),f=a(49642),b=a(38776),g=a(64270),y=a(9557),h=a(11220),v=a(36248),S=a(5391),Z=a(91607),P=a(96620),E=a(55140);const N=function(){var e=(0,l.I0)(),t=o().useState(!0),a=(0,r.Z)(t,2),c=a[0],N=a[1],k=(0,P.useHistory)(),C=(0,E.Z)();(0,n.useEffect)((function(){C.updateDocumentTitle("".concat(u.N.formatMessage(i.Z.titlesPackages)," ").concat(m.JD))}),[C]);var _=(0,l.v9)((function(e){return e.PackagesListStore.rows})),w=o().useMemo((function(){return(0,v.k6)(_)}),[_]),I=(0,l.v9)((function(e){return e.PackagesListStore.status})),O=(0,l.v9)((function(e){return e.PackagesListStore.metadata})),M=(0,l.v9)((function(e){return e.PackagesListStore.queryParams}));function A(t){e((0,y.If)(t))}(0,Z.KW)((function(){c?(A((0,S.PZ)(k.location.search)),N(!1)):(k.push((0,S.R_)(M)),e((0,y.kU)(M)))}),[M,c]);var T=(0,Z.AR)("packages",M,{csv:h.pq,json:h.pW},e),j=(0,Z._f)(g.$$,A),D=o().useMemo((function(){return(0,S.hO)(g.$$,O.sort,0)}),[O.sort]),L=(0,Z.SL)(O.limit,A),U=(0,Z._T)(A);return o().createElement(o().Fragment,null,o().createElement(f.Z,{title:u.N.formatMessage(i.Z.titlesPatchPackages),headerOUIA:"packages"}),o().createElement(s.Z,null,o().createElement(b.Z,{columns:g.$$,store:{rows:w,metadata:O,status:I,queryParams:M},onSort:j,onExport:T,sortBy:D,onSetPage:L,onPerPageSelect:U,compact:!0,apply:A,filterConfig:{items:[(0,d.Z)(A,M.search,u.N.formatMessage(i.Z.labelsFiltersPackagesSearchTitle),u.N.formatMessage(i.Z.labelsFiltersPackagesSearchPlaceHolder)),p(A,M.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:m.eZ,searchChipLabel:u.N.formatMessage(i.Z.labelsFiltersPackagesSearchTitle)})))}},58392:()=>{},93398:()=>{},46928:()=>{},53336:()=>{},97236:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Packages.6b5feb6b44d50bdc05e681b9d688c913.js.map