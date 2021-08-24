(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{9770:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>X});var r=a(96156),l=a(92137),n=a(28481),s=a(87757),o=a.n(s),i=a(72573),c=a(33739),u=a(86350),f=a(77865),p=a.n(f),m=a(61084),d=a(334),v=a(30893),b=a(90747),y=a(89421),g=a(13784),h=a(32132);const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.stale,r=p().useMemo((function(){return g.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),l=function(t){e({filter:{stale:t}})};return{label:h.N.formatMessage(v.Z.labelsFiltersStale),type:y.Yu.checkbox,filterValues:{onChange:function(e,t){l(t)},items:r,value:a,placeholder:h.N.formatMessage(v.Z.labelsFiltersStalePlaceholder)}}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.packages_updatable,r=function(t){e({filter:{packages_updatable:t}})};return{label:h.N.formatMessage(v.Z.labelsFiltersSystemsUpdatable),type:y.Yu.radio,filterValues:{onChange:function(e,t){r(t)},items:g.Tl,value:a,placeholder:h.N.formatMessage(v.Z.labelsFiltersSystemsUpdatablePlaceholder)}}};var Z=a(49642),P=a(73888),_=a(4777),N=a(9557),w=a(5747),O=a(11220),k=a(57358),F=a(91607),T=a(94859),j=a(20259),M=a(58684),C=a(35451),D=a(77927),I=a(19694),x=a(45697),z=a.n(x),A=a(36104),R=a(67463),V=a(6202),q=a(2095),U=a(49287),B=a(18038),L=a(85962),W=a(36001),G=a(42057),Q=function(e){var t=e.title,a=e.color,r=e.Icon,l=e.value,n=e.filter,s=e.apply;return p().createElement(q.Zb,{isCompact:!0},p().createElement(A.l,{style:{marginTop:"0px"}},t),p().createElement(L.e,{className:"fonst-size-sm"},p().createElement(W.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},p().createElement(G.B,{spacer:{default:"spacerNone"}},p().createElement(r,{color:a})),p().createElement(G.B,{isFilled:!0,spacer:{default:"spacerNone"}},void 0===l&&p().createElement(R.Spinner,{isSVG:!0,size:"md"})||p().createElement(V.Button,{variant:"link",onClick:function(){s(n)},className:"patch-status-report-text"},l)))))},Y=function(e){var t=e.metadata.subtotals,a=e.apply;return p().createElement(u.Z,{style:{paddingBottom:0}},p().createElement(U.r,{hasGutter:!0,span:3},p().createElement(B.P,null,p().createElement(Q,{title:h.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:C.ZP,color:"var(--pf-global--success-color--100)",value:null==t?void 0:t.patched,apply:a,filter:{filter:{packages_updatable:"eq:0"}}})),p().createElement(B.P,null,p().createElement(Q,{title:h.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:D.ZP,color:"var(--pf-global--primary-color--100)",value:null==t?void 0:t.unpatched,apply:a,filter:{filter:{packages_updatable:"gt:0"}}})),p().createElement(B.P,null,p().createElement(Q,{title:h.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:I.ZP,color:"var(--pf-global--warning-color--100)",value:null==t?void 0:t.stale,apply:a,filter:{filter:{stale:!0}}}))))};Q.propTypes={title:z().string,Icon:z().elementType,value:z().string,color:z().string,apply:z().func,filter:z().object},Y.propTypes={metadata:z().object,apply:z().func};const H=Y;function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const X=function(){var e=h.N.formatMessage(v.Z.titlesSystems);(0,F.Iw)(e);var t=(0,d.useHistory)(),a=(0,m.useDispatch)(),r=p().useState(!1),s=(0,n.Z)(r,2),f=s[0],y=s[1],C=p().useState((function(){return function(){return null}})),D=(0,n.Z)(C,2),I=D[0],x=D[1],z=(0,k.PZ)(t.location.search),A=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.shallowEqual),R=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),V=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),q=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),U=(0,m.useSelector)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),B=(0,m.useSelector)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),L=U.systemProfile,W=U.selectedTags,G=U.filter,Q=U.search,Y=U.page,K=U.perPage,X=U.sort;function $(e){return ee.apply(this,arguments)}function ee(){return(ee=(0,l.Z)(o().mark((function e(t){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,t;case 3:a=e.sent,x((function(){return function(){return p().createElement(j.Z,{data:a})}})),y(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){a((0,N.SF)(e))}p().useEffect((function(){return te(z),function(){return a((0,N.RV)())}}),[]);var ae=(0,F.j5)(J({search:Q},G),te,g.hb),re=(0,n.Z)(ae,1)[0],le={items:[(0,b.Z)(te,Q,h.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),h.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),S(te,G),E(te,G)]},ne={filters:(0,k.mt)(G,Q,h.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:re,deleteTitle:h.N.formatMessage(v.Z.labelsFiltersReset)},se=(0,F.ry)(A,V,(function(e){return(0,O.lc)(J(J({},e),{},{limit:-1})).then(k.zw)}),(function(e){a({type:"SELECT_ENTITY",payload:e})})),oe=V&&(0,k.Qy)(V).length,ie=(0,F.AR)("systems",U,{csv:O.wI,json:O.TW},a),ce=function(e){return(0,O.ob)({limit:-1}).then((function(t){var a=t.data;return(0,O.fq)({advisories:a.map((function(e){return e.id})),systems:e})}))},ue=(0,F.U)(O.lc,te,{},t,(function(e){a((0,N._e)(e))}));return p().createElement(p().Fragment,null,p().createElement(Z.Z,{title:h.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),p().createElement(I,null),p().createElement(H,{metadata:B,apply:te}),p().createElement(u.Z,null,q.hasError&&p().createElement(P.Z,{code:q.code})||p().createElement(c.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:Q,filter:G,systemProfile:L,selectedTags:W}},onLoad:function(e){var t=e.mergeWithEntities;(0,_.z)(J({},t((0,w.Kq)(M.Fs,w.G),(0,k.fm)({page:Y,perPage:K,sort:X,search:Q},z))))},getEntities:ue,actions:(0,M.Sb)($),tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:i.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:(0,F.Pz)(oe,se,{total_items:R},A),exportConfig:{isDisabled:0===R,onSelect:ie},filterConfig:le,activeFiltersConfig:ne,dedicatedAction:p().createElement(T.Z,{onClick:function(){return $((0,k.Sz)((0,k.Q6)(V),ce,k.R9,g.oN.advisory))},isDisabled:0===(0,k.Qy)(V).length||f,isLoading:f,ouia:"toolbar-remediation-button"})})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.d7d9082cbb3c57ec782a.js.map