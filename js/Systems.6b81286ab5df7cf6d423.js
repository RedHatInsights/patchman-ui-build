(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{49552:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>N});var r=n(96156),i=n(92137),a=n(28481),s=n(87757),c=n.n(s),o=n(72573),l=n(86350),u=n(20167),f=n(35240),m=n(33739),p=n(77865),d=n.n(p),v=n(61084),h=n(30893),y=n(90747),b=n(49642),S=n(67396),g=n(9557),O=n(5747),E=n(11220),_=n(13784),w=n(57358),Z=n(91607),j=n(32132),P=n(94859),D=n(20259),k=n(58684);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const N=function(){var e=j.N.formatMessage(h.Z.titlesSystems);(0,Z.Iw)(e);var t=(0,v.useDispatch)(),n=d().useState(!1),r=(0,a.Z)(n,2),s=r[0],p=r[1],C=d().useState((function(){return function(){return null}})),N=(0,a.Z)(C,2),T=N[0],I=N[1],q=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),A=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),L=(0,v.useSelector)((function(e){var t=e.entities;return null==t?void 0:t.status})),M=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),x=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),z=M.filter,R=M.search;function U(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,i.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,t;case 3:n=e.sent,I((function(){return function(){return d().createElement(D.Z,{data:n})}})),p(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){t((0,g.jS)(e))}d().useEffect((function(){return function(){return t((0,g.jl)())}}),[]);var W=(0,Z.j5)({search:R},V),H=(0,a.Z)(W,1)[0],J={items:[(0,y.Z)(V,R,j.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle),j.N.formatMessage(h.Z.labelsFiltersSystemsSearchPlaceholder))]},K={filters:(0,w.mt)(z,R),onDelete:H},Y=(0,Z.ry)(q,A,(function(){return(0,E.lc)(F(F({},M),{},{limit:-1}))}),(function(e){t({type:"SELECT_ENTITY",payload:e})})),B=A&&(0,w.Qy)(A).length,G=function(e){return(0,E.ob)({limit:-1}).then((function(t){var n=t.data;return(0,E.fq)({advisories:n.map((function(e){return e.id})),systems:e})}))},X=(0,Z.U)(E.lc,V);return d().createElement(d().Fragment,null,d().createElement(b.Z,{title:j.N.formatMessage(h.Z.titlesPatchSystems),headerOUIA:"systems"}),d().createElement(T,null),d().createElement(l.Z,null,L===_.g_?d().createElement(u.Z,null):d().createElement(m.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:R,filter:z}},onLoad:function(e){var t=e.mergeWithEntities;(0,S.z)(F({},t((0,O.Kq)(k.Fs),O.E3)))},getEntities:X,bulkSelect:(0,Z.Pz)(B,Y,{total_items:x},q),exportConfig:{isDisabled:0===x,onSelect:function(e,t){var n=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",r="systems-".concat(n);"csv"===t?(0,E.wI)(M).then((function(e){return(0,f.Sv)(e,r,"csv")})):(0,E.TW)(M).then((function(e){return(0,f.Sv)(JSON.stringify(e),r,"json")}))}},actions:(0,k.Sb)(U),filterConfig:J,activeFiltersConfig:K,tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:o.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},dedicatedAction:d().createElement(P.Z,{onClick:function(){return U((0,w.Sz)((0,w.UZ)(A),G,w.R9))},isDisabled:0===(0,w.Qy)(A).length||s,isLoading:s,ouia:"toolbar-remediation-button"})})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.de95eda6c4b69bad9d43.js.map