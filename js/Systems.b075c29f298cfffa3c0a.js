(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{49552:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>T});var n=r(96156),s=r(92137),a=r(28481),i=r(87757),o=r.n(i),c=r(72573),l=r(33739),u=r(86350),f=r(77865),m=r.n(f),p=r(61084),d=r(30893),y=r(90747),h=r(49642),v=r(73888),b=r(4777),g=r(9557),S=r(5747),E=r(11220),P=r(13784),O=r(57358),Z=r(91607),w=r(32132),_=r(94859),j=r(20259),D=r(58684),k=r(334),C=r(49629);function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const T=function(){var e=w.N.formatMessage(d.Z.titlesSystems);(0,Z.Iw)(e);var t=(0,k.useHistory)(),r=(0,p.useDispatch)(),n=m().useState(!1),i=(0,a.Z)(n,2),f=i[0],F=i[1],T=m().useState((function(){return function(){return null}})),A=(0,a.Z)(T,2),I=A[0],L=A[1],R=(0,O.PZ)(t.location.search),q=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),p.shallowEqual),z=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),M=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),x=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),Q=(0,p.useSelector)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),V=Q.systemProfile,H=Q.selectedTags,U=Q.filter,W=Q.search,G=Q.page,K=Q.perPage,Y=Q.sort;function B(e){return J.apply(this,arguments)}function J(){return(J=(0,s.Z)(o().mark((function e(t){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,t;case 3:r=e.sent,L((function(){return function(){return m().createElement(j.Z,{data:r})}})),F(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function X(e){r((0,g.SF)(e))}m().useEffect((function(){return X(R),function(){return r((0,g.RV)())}}),[]);var $=(0,Z.j5)({search:W},X),ee=(0,a.Z)($,1)[0],te={items:[(0,y.Z)(X,W,w.N.formatMessage(d.Z.labelsFiltersSystemsSearchTitle),w.N.formatMessage(d.Z.labelsFiltersSystemsSearchPlaceholder))]},re={filters:(0,O.mt)(U,W),onDelete:ee},ne=(0,Z.ry)(q,M,(function(e){return(0,E.lc)(N(N({},e),{},{limit:-1})).then(O.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),se=M&&(0,O.Qy)(M).length,ae=(0,Z.AR)("systems",Q,{csv:E.wI,json:E.TW},r),ie=function(e){return(0,E.ob)({limit:-1}).then((function(t){var r=t.data;return(0,E.fq)({advisories:r.map((function(e){return e.id})),systems:e})}))},oe=(0,Z.U)(E.lc,X,{},t);return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:w.N.formatMessage(d.Z.titlesPatchSystems),headerOUIA:"systems"}),m().createElement(I,null),m().createElement(u.Z,null,x.hasError&&m().createElement(v.Z,{code:x.code})||m().createElement(l.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:W,filter:U,systemProfile:V,selectedTags:H}},onLoad:function(e){var t=e.mergeWithEntities;(0,b.z)(N({},t((0,S.Kq)(D.Fs,S.G),(0,O.fm)({page:G,perPage:K,sort:Y,search:W},R))))},getEntities:oe,actions:(0,D.Sb)(B),tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:c.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0}},void 0!==x.isLoading&&m().createElement(C.Z,{className:"patch-systems-primary-toolbar",bulkSelect:(0,Z.Pz)(se,ne,{total_items:z},q),exportConfig:{isDisabled:0===z,onSelect:ae},filterConfig:te,activeFiltersConfig:re,dedicatedAction:m().createElement(_.Z,{onClick:function(){return B((0,O.Sz)((0,O.Q6)(M),ie,O.R9,P.oN.advisory))},isDisabled:0===(0,O.Qy)(M).length||f,isLoading:f,ouia:"toolbar-remediation-button"})}))))}}}]);