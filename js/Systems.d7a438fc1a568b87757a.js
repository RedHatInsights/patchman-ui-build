(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{49552:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>C});var r=n(96156),s=n(92137),i=n(28481),a=n(87757),o=n.n(a),c=n(72573),l=n(33739),u=n(86350),f=n(77865),m=n.n(f),d=n(61084),p=n(30893),v=n(90747),h=n(49642),y=n(73888),b=n(67396),g=n(9557),S=n(5747),E=n(11220),O=n(57358),Z=n(91607),_=n(32132),w=n(94859),P=n(20259),j=n(58684);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const C=function(){var e=_.N.formatMessage(p.Z.titlesSystems);(0,Z.Iw)(e);var t=(0,d.useDispatch)(),n=m().useState(!1),r=(0,i.Z)(n,2),a=r[0],f=r[1],D=m().useState((function(){return function(){return null}})),C=(0,i.Z)(D,2),F=C[0],T=C[1],N=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),A=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),I=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),q=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),L=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),M=q.filter,R=q.search,x=q.systemProfile,z=q.selectedTags;function U(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,t;case 3:n=e.sent,T((function(){return function(){return m().createElement(P.Z,{data:n})}})),f(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){t((0,g.jS)(e))}m().useEffect((function(){return function(){return t((0,g.jl)())}}),[]);var W=(0,Z.j5)({search:R},V),H=(0,i.Z)(W,1)[0],K={items:[(0,v.Z)(V,R,_.N.formatMessage(p.Z.labelsFiltersSystemsSearchTitle),_.N.formatMessage(p.Z.labelsFiltersSystemsSearchPlaceholder))]},Y={filters:(0,O.mt)(M,R),onDelete:H},B=(0,Z.ry)(N,A,(function(e){return(0,E.lc)(k(k({},e),{},{limit:-1}))}),(function(e){t({type:"SELECT_ENTITY",payload:e})})),G=A&&(0,O.Qy)(A).length,J=(0,Z.AR)("systems",q,{csv:E.wI,json:E.TW},t),X=function(e){return(0,E.ob)({limit:-1}).then((function(t){var n=t.data;return(0,E.fq)({advisories:n.map((function(e){return e.id})),systems:e})}))},$=(0,Z.U)(E.lc,V);return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:_.N.formatMessage(p.Z.titlesPatchSystems),headerOUIA:"systems"}),m().createElement(F,null),m().createElement(u.Z,null,I.hasError&&m().createElement(y.Z,{code:I.code})||m().createElement(l.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:R,filter:M,systemProfile:x,selectedTags:z}},onLoad:function(e){var t=e.mergeWithEntities;(0,b.z)(k({},t((0,S.Kq)(j.Fs),S.E3)))},getEntities:$,bulkSelect:(0,Z.Pz)(G,B,{total_items:L},N),exportConfig:{isDisabled:0===L,onSelect:J},actions:(0,j.Sb)(U),filterConfig:K,activeFiltersConfig:Y,tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:c.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},dedicatedAction:m().createElement(w.Z,{onClick:function(){return U((0,O.Sz)((0,O.UZ)(A),X,O.R9))},isDisabled:0===(0,O.Qy)(A).length||a,isLoading:a,ouia:"toolbar-remediation-button"})})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.c7a1af8870fd5dd4e746.js.map