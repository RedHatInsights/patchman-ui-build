(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{49552:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>F});var n=r(96156),s=r(92137),i=r(28481),a=r(87757),o=r.n(a),c=r(72573),l=r(33739),u=r(86350),f=r(77865),m=r.n(f),d=r(61084),p=r(30893),v=r(90747),y=r(49642),h=r(73888),b=r(17915),g=r(9557),S=r(5747),E=r(11220),O=r(13784),P=r(57358),w=r(91607),Z=r(32132),_=r(94859),j=r(20259),D=r(58684);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const F=function(){var e=Z.N.formatMessage(p.Z.titlesSystems);(0,w.Iw)(e);var t=(0,d.useDispatch)(),r=m().useState(!1),n=(0,i.Z)(r,2),a=n[0],f=n[1],k=m().useState((function(){return function(){return null}})),F=(0,i.Z)(k,2),T=F[0],N=F[1],A=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),I=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),q=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),z=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),L=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.systemsParams)||{}})),M=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),R=z.systemProfile,x=z.selectedTags,U=L.filter,Q=L.search,V=L.page,W=L.perPage,G=L.sort;function H(e){return K.apply(this,arguments)}function K(){return(K=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,t;case 3:r=e.sent,N((function(){return function(){return m().createElement(j.Z,{data:r})}})),f(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){t((0,g.SF)(e))}m().useEffect((function(){return function(){return t((0,g.d0)())}}),[]);var B=(0,w.j5)({search:Q},Y),J=(0,i.Z)(B,1)[0],X={items:[(0,v.Z)(Y,Q,Z.N.formatMessage(p.Z.labelsFiltersSystemsSearchTitle),Z.N.formatMessage(p.Z.labelsFiltersSystemsSearchPlaceholder))]},$={filters:(0,P.mt)(U,Q),onDelete:J},ee=(0,w.ry)(A,I,(function(e){return(0,E.lc)(C(C(C({},e),L),{},{limit:-1})).then(P.zw)}),(function(e){t({type:"SELECT_ENTITY",payload:e})})),te=I&&(0,P.Qy)(I).length,re=(0,w.AR)("systems",C(C({},z),L),{csv:E.wI,json:E.TW},t),ne=function(e){return(0,E.ob)({limit:-1}).then((function(t){var r=t.data;return(0,E.fq)({advisories:r.map((function(e){return e.id})),systems:e})}))},se=(0,w.U)(E.lc,Y);return m().createElement(m().Fragment,null,m().createElement(y.Z,{title:Z.N.formatMessage(p.Z.titlesPatchSystems),headerOUIA:"systems"}),m().createElement(T,null),m().createElement(u.Z,null,q.hasError&&m().createElement(h.Z,{code:q.code})||m().createElement(l.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:Q,filter:U,systemProfile:R,selectedTags:x}},onLoad:function(e){var t=e.mergeWithEntities;(0,b.z)(C({},t((0,S.Kq)(D.Fs,S.G),(0,P.fm)(V,W,G))))},getEntities:se,bulkSelect:(0,w.Pz)(te,ee,{total_items:M},A),exportConfig:{isDisabled:0===M,onSelect:re},actions:(0,D.Sb)(H),filterConfig:X,activeFiltersConfig:$,tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:c.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},dedicatedAction:m().createElement(_.Z,{onClick:function(){return H((0,P.Sz)((0,P.UZ)(I),ne,P.R9,O.oN.advisory))},isDisabled:0===(0,P.Qy)(I).length||a,isLoading:a,ouia:"toolbar-remediation-button"})})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.2d13211e0e8f74e54471.js.map