(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{49552:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>F});var r=n(96156),i=n(92137),a=n(28481),s=n(87757),c=n.n(s),o=n(72573),l=n(86350),u=n(35240),f=n(33739),m=n(77865),p=n.n(m),d=n(61084),v=n(30893),h=n(90747),y=n(49642),b=n(67396),S=n(9557),g=n(5747),O=n(11220),E=n(57358),w=n(91607),Z=n(32132),_=n(94859),j=n(20259),P=n(58684),D=n(73888);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const F=function(){var e=Z.N.formatMessage(v.Z.titlesSystems);(0,w.Iw)(e);var t=(0,d.useDispatch)(),n=p().useState(!1),r=(0,a.Z)(n,2),s=r[0],m=r[1],k=p().useState((function(){return function(){return null}})),F=(0,a.Z)(k,2),N=F[0],T=F[1],I=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),q=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),A=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),L=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),M=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),x=L.filter,z=L.search;function R(e){return U.apply(this,arguments)}function U(){return(U=(0,i.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,t;case 3:n=e.sent,T((function(){return function(){return p().createElement(j.Z,{data:n})}})),m(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){t((0,S.jS)(e))}p().useEffect((function(){return function(){return t((0,S.jl)())}}),[]);var V=(0,w.j5)({search:z},Q),W=(0,a.Z)(V,1)[0],H={items:[(0,h.Z)(Q,z,Z.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),Z.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder))]},J={filters:(0,E.mt)(x,z),onDelete:W},K=(0,w.ry)(I,q,(function(){return(0,O.lc)(C(C({},L),{},{limit:-1}))}),(function(e){t({type:"SELECT_ENTITY",payload:e})})),Y=q&&(0,E.Qy)(q).length,B=function(e){return(0,O.ob)({limit:-1}).then((function(t){var n=t.data;return(0,O.fq)({advisories:n.map((function(e){return e.id})),systems:e})}))},G=(0,w.U)(O.lc,Q);return p().createElement(p().Fragment,null,p().createElement(y.Z,{title:Z.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),p().createElement(N,null),p().createElement(l.Z,null,A.hasError&&p().createElement(D.Z,{code:A.code})||p().createElement(f.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:z,filter:x}},onLoad:function(e){var t=e.mergeWithEntities;(0,b.z)(C({},t((0,g.Kq)(P.Fs),g.E3)))},getEntities:G,bulkSelect:(0,w.Pz)(Y,K,{total_items:M},I),exportConfig:{isDisabled:0===M,onSelect:function(e,t){var n=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",r="systems-".concat(n);"csv"===t?(0,O.wI)(L).then((function(e){return(0,u.Sv)(e,r,"csv")})):(0,O.TW)(L).then((function(e){return(0,u.Sv)(JSON.stringify(e),r,"json")}))}},actions:(0,P.Sb)(R),filterConfig:H,activeFiltersConfig:J,tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:o.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},dedicatedAction:p().createElement(_.Z,{onClick:function(){return R((0,E.Sz)((0,E.UZ)(q),B,E.R9))},isDisabled:0===(0,E.Qy)(q).length||s,isLoading:s,ouia:"toolbar-remediation-button"})})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.26208430023792cb2746.js.map