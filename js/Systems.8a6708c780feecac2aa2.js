(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{49552:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var n=r(96156),s=r(92137),a=r(28481),i=r(87757),o=r.n(i),c=r(72573),l=r(33739),u=r(86350),f=r(77865),m=r.n(f),p=r(61084),d=r(30893),y=r(90747),h=r(49642),v=r(73888),b=r(4777),S=r(9557),g=r(5747),P=r(11220),w=r(13784),E=r(57358),O=r(91607),Z=r(32132),_=r(94859),j=r(20259),D=r(58684),k=r(334);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const T=function(){var e=Z.N.formatMessage(d.Z.titlesSystems);(0,O.Iw)(e);var t=(0,k.useHistory)(),r=(0,p.useDispatch)(),n=m().useState(!1),i=(0,a.Z)(n,2),f=i[0],C=i[1],T=m().useState((function(){return function(){return null}})),N=(0,a.Z)(T,2),I=N[0],R=N[1],A=(0,E.PZ)(t.location.search),q=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),p.shallowEqual),z=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),L=(0,p.useSelector)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.selectedRows)||[]})),M=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),x=(0,p.useSelector)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),V=x.systemProfile,H=x.selectedTags,Q=x.filter,U=x.search,W=x.page,G=x.perPage,K=x.sort;function Y(e){return B.apply(this,arguments)}function B(){return(B=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,t;case 3:r=e.sent,R((function(){return function(){return m().createElement(j.Z,{data:r})}})),C(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function J(e){r((0,S.SF)(e))}m().useEffect((function(){return J(A),function(){return r((0,S.RV)())}}),[]);var X=(0,O.j5)({search:U},J),$=(0,a.Z)(X,1)[0],ee={items:[(0,y.Z)(J,U,Z.N.formatMessage(d.Z.labelsFiltersSystemsSearchTitle),Z.N.formatMessage(d.Z.labelsFiltersSystemsSearchPlaceholder))]},te={filters:(0,E.mt)(Q,U),onDelete:$},re=(0,O.ry)(q,L,(function(e){return(0,P.lc)(F(F({},e),{},{limit:-1})).then(E.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),ne=L&&(0,E.Qy)(L).length,se=(0,O.AR)("systems",x,{csv:P.wI,json:P.TW},r),ae=function(e){return(0,P.ob)({limit:-1}).then((function(t){var r=t.data;return(0,P.fq)({advisories:r.map((function(e){return e.id})),systems:e})}))},ie=(0,O.U)(P.lc,J,{},t);return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:Z.N.formatMessage(d.Z.titlesPatchSystems),headerOUIA:"systems"}),m().createElement(I,null),m().createElement(u.Z,null,M.hasError&&m().createElement(v.Z,{code:M.code})||m().createElement(l.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:U,filter:Q,systemProfile:V,selectedTags:H}},onLoad:function(e){var t=e.mergeWithEntities;(0,b.z)(F({},t((0,g.Kq)(D.Fs,g.G),(0,E.fm)({page:W,perPage:G,sort:K,search:U},A))))},getEntities:ie,bulkSelect:(0,O.Pz)(ne,re,{total_items:z},q),exportConfig:{isDisabled:0===z,onSelect:se},actions:(0,D.Sb)(Y),filterConfig:ee,activeFiltersConfig:te,tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:c.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},dedicatedAction:m().createElement(_.Z,{onClick:function(){return Y((0,E.Sz)((0,E.filterSelectedRowIDs)(L),ae,E.R9,w.oN.advisory))},isDisabled:0===(0,E.Qy)(L).length||f,isLoading:f,ouia:"toolbar-remediation-button"})})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.c3773867cf36fab33fe5.js.map