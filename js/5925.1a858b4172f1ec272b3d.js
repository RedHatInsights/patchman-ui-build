(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[5925],{91433:(e,t,n)=>{"use strict";n.d(t,{f:()=>p});var r=n(52643),a=n(9947),o=n(75106),s=n(38424),i=n(60485),c=n(68778),l=n(43297),u=n.n(l),m=n(32132),f=n(30893),p=function(){return u().createElement(r.b,null,u().createElement(a.u,{style:{paddingTop:40}},u().createElement(s.k,{icon:function(){return u().createElement(c.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(f.Z.statesNoApplicableAdvisories)),u().createElement(o.B,null,m.N.formatMessage(f.Z.statesSystemUpToDate))))}},38776:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var r=n(29439),a=n(3351),o=n(22860),s=n(6934),i=n(75863),c=n(3962),l=n(81739),u=n(45697),m=n.n(u),f=n(43297),p=n.n(f),g=n(30893),d=n(53074),y=n(5391),b=n(91607),v=n(32132),S=n(44733),P=n(50383),E=function(e){var t=e.isLoading,n=e.page,r=e.perPage,a=e.onSetPage,o=e.totalItems,s=e.onPerPageSelect,i=e.paginationOUIA;return p().createElement(p().Fragment,null,t?p().createElement("div",{className:"pf-c-pagination pf-m-bottom"},p().createElement(P.O,{fontSize:"xl",width:"350px",style:{margin:10}})):p().createElement(S.t,{itemCount:o,perPage:r,page:n,onSetPage:a,onPerPageSelect:s,widgetId:"pagination-options-menu-bottom",variant:S.a.bottom,ouiaId:i,isDisabled:0===o}))};E.propTypes={isLoading:m().bool,onSetPage:m().func,onPerPageSelect:m().func,page:m().number,perPage:m().number,totalItems:m().number,paginationOUIA:m().string};const h=E;var O=n(52579),k=n(1595),A=function(e){var t,n=e.columns,u=e.store,m=u.rows,f=u.metadata,S=u.status,E=u.queryParams,A=E.filter,C=E.search,_=e.onCollapse,w=e.onSelect,j=e.onSetPage,Z=e.onPerPageSelect,I=e.onSort,L=e.onExport,x=e.filterConfig,T=e.sortBy,D=e.remediationProvider,R=e.selectedRows,F=e.compact,B=e.apply,z=e.tableOUIA,U=e.paginationOUIA,N=e.errorState,M=e.emptyState,q=e.defaultFilters,K=e.searchChipLabel,H=e.ToolbarButton,Q=e.actionsConfig,$=e.isRemediationLoading,G=e.actionsToggle,J=p().useMemo((function(){return(0,y.CM)(f.limit,f.offset)}),[f.limit,f.offset]),V=(0,r.Z)(J,2),W=V[0],X=V[1],Y=(0,b.j5)(A,B,q),ee=(0,r.Z)(Y,1)[0],te=R&&(0,y.Qy)(R).length,ne=S.code,re=S.hasError,ae=S.isLoading,oe=(0,b.Pz)(te,w,f,m,_);return p().createElement(p().Fragment,null,p().createElement(p().Fragment,null,re||!1===f.has_systems?p().createElement(O.Z,{code:ne,ErrorState:N,EmptyState:M,metadata:f}):p().createElement(p().Fragment,null,p().createElement(c.Z,{pagination:ae?p().createElement(P.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:f.total_items,page:W,perPage:X,isCompact:!0,onSetPage:j,onPerPageSelect:Z,ouiaId:"top-".concat(U),isDisabled:0===f.total_items},filterConfig:x,activeFiltersConfig:{filters:(0,y.mt)(A,C,K),onDelete:ee,deleteTitle:v.N.formatMessage(q&&g.Z.labelsFiltersReset||g.Z.labelsFiltersClear)},actionsConfig:{actions:[D&&p().createElement(d.Z,{remediationProvider:D,isDisabled:0===Object.values(R).filter((function(e){return e})).length||$,isLoading:$})]},exportConfig:{isDisabled:0===f.total_items,onSelect:L},bulkSelect:w&&oe},H&&p().createElement(k.E,null,p().createElement(H,null))),ae?p().createElement(l.Z,{colSize:null!==(t=null==n?void 0:n.length)&&void 0!==t?t:5,rowSize:20,variant:F&&i.B.compact}):p().createElement(a.i,{"aria-label":"Patch table view",cells:n,onSelect:f.total_items&&w,rows:m,onCollapse:f.total_items&&_,canSelectAll:!1,onSort:f.total_items&&I,ouiaId:z,sortBy:f.total_items&&T,isStickyHeader:!0,variant:F&&i.B.compact,actions:Q,actionsToggle:G},p().createElement(s.x,null),p().createElement(o.R,null)),p().createElement(h,{isLoading:ae,totalItems:f.total_items,perPage:X,page:W,onSetPage:j,onPerPageSelect:Z,paginationOUIA:"bottom-".concat(U)}))))};A.propTypes={columns:m().array,onCollapse:m().func,onSelect:m().func,onSetPage:m().func,onPerPageSelect:m().func,onSort:m().func,onExport:m().func,remediationProvider:m().func,selectedRows:m().object,apply:m().func,sortBy:m().object,filterConfig:m().object,store:m().object,compact:m().bool,tableOUIA:m().string,paginationOUIA:m().string,errorState:m().element,emptyState:m().element,defaultFilters:m().object,searchChipLabel:m().string,ToolbarButton:m().elementType,actionsConfig:m().array,isRemediationLoading:m().bool,actionsToggle:m().func};const C=A},93080:(e,t,n)=>{"use strict";n.d(t,{c:()=>g,r:()=>d});var r=n(15861),a=n(4942),o=n(64687),s=n.n(o),i=n(43297),c=n(28216),l=n(11220),u=n(9557),m=n(5391);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g={advisories:"/ids/advisories",systems:"/ids/systems",templates:"/baselines",advisorySystems:function(e){return"/ids/advisories/".concat(e,"/systems")},systemAdvisories:function(e){return"/ids/systems/".concat(e,"/advisories")},packageSystems:function(e){return"/packages/".concat(e,"/systems")},systemPackages:function(e){return"/systems/".concat(e,"/packages")},templateSystems:function(e){return"/ids/baselines/".concat(e,"/systems")}},d=function(e,t,n){var a=n.endpoint,o=n.queryParams,f=n.selectionDispatcher,g=n.constructFilename,d=n.transformKey,y=n.apiResponseTransformer,b=n.customSelector,v=(0,c.I0)(),S=function(e,t){return(0,i.useCallback)((function(n){return(0,l.dk)(e,p(p({},n),{},{limit:-1})).then((function(e){return t?t(e):e}))}),[])}(a,y),P=function(e,t){return(0,i.useCallback)((function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=n.ids,o=n.data,s=Array.isArray(a);return(s?a:o).forEach((function(n){var a=s?n:n.id;(0,m.Kn)(n)&&n.isExpandedRow||r.push({id:e?e(n):a,selected:t?t(n):a})})),r}))}(d,g),E=function(e){b?b(e):v(f(e))},h=function(e,t,n){return{selectNone:function(e){var r=[];Object.keys(e).forEach((function(e){r.push({id:e,selected:!1})})),t(r),n(!1)},selectPage:function(n){Array.isArray(n)&&(n=n.filter((function(e){return!e.disableSelection}))),t(e({data:n}))},selectAll:function(r,a){return a.offset=0,r(a).then((function(r){if(Array.isArray(r.data)){var a=r.data.filter((function(e){return"Applicable"!==e.status}));t(e({data:a}))}else t(e(r)),n(!0)}))}}}(P,E,(function(e){v((0,u.wy)(e))})),O=h.selectNone,k=h.selectPage,A=h.selectAll,C=(0,i.useCallback)(function(){var n=(0,r.Z)(s().mark((function n(r,a,i){var c,l=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c=l.length>3&&void 0!==l[3]?l[3]:function(){},n.t0=r,n.next="none"===n.t0?4:"page"===n.t0?6:"all"===n.t0?8:10;break;case 4:return O(t),n.abrupt("break",11);case 6:return k(e),n.abrupt("break",11);case 8:return A(S,o).then((function(){return c(!1)})),n.abrupt("break",11);case 10:E([{id:d?d(e[i]):e[i].id,selected:a&&(!g||g(e[i]))}]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}());return C}},55579:(e,t,n)=>{"use strict";n.r(t),n.d(t,{SystemAdvisoryListStore:()=>u.g,SystemPackageListStore:()=>m.f,default:()=>v});var r=n(87462),a=n(29439),o=n(45987),s=n(43297),i=n.n(s),c=n(96620),l=n(79577),u=n(85612),m=n(74241),f=n(52643),p=n(2372),g=n(28216),d=n(45697),y=["getRegistry"],b=function(e){var t,n=e.getRegistry,d=(0,o.Z)(e,y),b=(0,s.useState)(),v=(0,a.Z)(b,2),S=v[0],P=v[1];return(0,s.useEffect)((function(){var e,t;n&&(null===(e=n())||void 0===e||null===(t=e.register)||void 0===t||t.call(e,{SystemAdvisoryListStore:u.g,SystemPackageListStore:m.f})),P((function(){return n?g.zt:s.Fragment}))}),[]),i().createElement(c.BrowserRouter,null,S?i().createElement(S,n&&{store:null===(t=n())||void 0===t?void 0:t.getStore()},i().createElement(l.Z,(0,r.Z)({},d,{isInventoryApp:!0}))):i().createElement(f.b,null,i().createElement(p.$,{size:"xl"})))};b.propTypes={getRegistry:n.n(d)().func};const v=b},93398:()=>{},46928:()=>{},53336:()=>{},97236:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5925.cd0a15759ac1dddba91f879e73bce17f.js.map