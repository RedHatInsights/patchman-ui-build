(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{9770:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>X});var r=a(96156),l=a(92137),n=a(28481),s=a(87757),o=a.n(s),i=a(72573),c=a(33739),u=a(86350),f=a(77865),p=a.n(f),m=a(61084),d=a(334),v=a(30893),y=a(90747),g=a(89421),b=a(13784),h=a(32132);const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.stale,r=p().useMemo((function(){return b.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),l=a&&(Array.isArray(a)&&a.map((function(e){return e.toString()}))||[a.toString()]),n=function(t){e({filter:{stale:t}})};return{label:h.N.formatMessage(v.Z.labelsFiltersStale),type:g.Yu.checkbox,filterValues:{onChange:function(e,t){n(t)},items:r,value:l,placeholder:h.N.formatMessage(v.Z.labelsFiltersStalePlaceholder)}}},E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.packages_updatable,r=function(t){e({filter:{packages_updatable:t}})};return{label:h.N.formatMessage(v.Z.labelsFiltersSystemsUpdatable),type:g.Yu.radio,filterValues:{onChange:function(e,t){r(t)},items:b.Tl,value:a,placeholder:h.N.formatMessage(v.Z.labelsFiltersSystemsUpdatablePlaceholder)}}};var Z=a(49642),P=a(73888),_=a(4777),w=a(9557),N=a(5747),O=a(11220),k=a(57358),F=a(91607),T=a(94859),j=a(20259),M=a(58684),C=a(35451),D=a(77927),x=a(19694),I=a(45697),A=a.n(I),R=a(36104),z=a(6202),q=a(26577),U=a(2095),V=a(49287),B=a(18038),L=a(85962),W=a(36001),Q=a(42057),Y=function(e){var t=e.title,a=e.color,r=e.Icon,l=e.value,n=e.filter,s=e.apply;return p().createElement(U.Zb,{isCompact:!0,style:{marginRight:"var(--pf-global--spacer--sm)"}},p().createElement(R.l,{style:{marginTop:"0px"}},t),p().createElement(L.e,{className:"fonst-size-sm"},p().createElement(W.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},p().createElement(Q.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},p().createElement(r,{color:a,size:"md"})),p().createElement(Q.B,{isFilled:!0,spacer:{default:"spacerNone"}},void 0===l&&p().createElement(q.O,{width:"24px"})||p().createElement(z.Button,{variant:"link",onClick:function(){return s(n)},className:"patch-status-report-text"},l)))))},G=function(e){var t=e.metadata.subtotals,a=e.apply;return p().createElement(u.Z,{style:{paddingBottom:0}},p().createElement(V.r,{hasGutter:!0,span:3},p().createElement(B.P,null,p().createElement(Y,{title:h.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:C.default,color:"var(--pf-global--success-color--100)",value:null==t?void 0:t.patched,apply:a,filter:{filter:{packages_updatable:"eq:0"}}})),p().createElement(B.P,null,p().createElement(Y,{title:h.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:D.ZP,color:"var(--pf-global--primary-color--100)",value:null==t?void 0:t.unpatched,apply:a,filter:{filter:{packages_updatable:"gt:0"}}})),p().createElement(B.P,null,p().createElement(Y,{title:h.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:x.default,color:"var(--pf-global--warning-color--100)",value:null==t?void 0:t.stale,apply:a,filter:{filter:{stale:!0}}}))))};Y.propTypes={title:A().string,Icon:A().elementType,value:A().string,color:A().string,apply:A().func,filter:A().object},G.propTypes={metadata:A().object,apply:A().func};const H=G;function K(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function J(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?K(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const X=function(){var e=h.N.formatMessage(v.Z.titlesSystems);(0,F.Iw)(e);var t=(0,d.useHistory)(),a=(0,m.useDispatch)(),r=p().useState(!1),s=(0,n.Z)(r,2),f=s[0],g=s[1],C=p().useState((function(){return function(){return null}})),D=(0,n.Z)(C,2),x=D[0],I=D[1],A=(0,k.PZ)(t.location.search),R=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.shallowEqual),z=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),q=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),U=(0,m.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),V=(0,m.useSelector)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),B=(0,m.useSelector)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),L=V.systemProfile,W=V.selectedTags,Q=V.filter,Y=V.search,G=V.page,K=V.perPage,X=V.sort;function $(e){return ee.apply(this,arguments)}function ee(){return(ee=(0,l.Z)(o().mark((function e(t){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,t;case 3:a=e.sent,I((function(){return function(){return p().createElement(j.Z,{data:a})}})),g(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function te(e){a((0,w.SF)(e))}p().useEffect((function(){return te(A),function(){return a((0,w.RV)())}}),[]);var ae=(0,F.j5)(J({search:Y},Q),te,b.hb),re=(0,n.Z)(ae,1)[0],le={items:[(0,y.Z)(te,Y,h.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),h.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),S(te,Q),E(te,Q)]},ne={filters:(0,k.mt)(Q,Y,h.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:re,deleteTitle:h.N.formatMessage(v.Z.labelsFiltersReset)},se=(0,F.ry)(R,q,(function(e){return(0,O.lc)(J(J({},e),{},{limit:-1})).then(k.zw)}),(function(e){a({type:"SELECT_ENTITY",payload:e})})),oe=q&&(0,k.Qy)(q).length,ie=(0,F.AR)("systems",V,{csv:O.wI,json:O.TW},a),ce=function(e){return(0,O.ob)({limit:-1}).then((function(t){var a=t.data;return(0,O.fq)({advisories:a.map((function(e){return e.id})),systems:e})}))},ue=(0,F.U)(O.lc,te,{},t,(function(e){a((0,w._e)(e))}));return p().createElement(p().Fragment,null,p().createElement(Z.Z,{title:h.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),p().createElement(x,null),p().createElement(H,{metadata:B,apply:te}),p().createElement(u.Z,null,U.hasError&&p().createElement(P.Z,{code:U.code})||p().createElement(c.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:Y,filter:Q,systemProfile:L,selectedTags:W}},onLoad:function(e){var t=e.mergeWithEntities;(0,_.z)(J({},t((0,N.Kq)(M.Fs,N.G),(0,k.fm)({page:G,perPage:K,sort:X,search:Y},A))))},getEntities:ue,actions:(0,M.Sb)($),tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:i.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:(0,F.Pz)(oe,se,{total_items:z},R),exportConfig:{isDisabled:0===z,onSelect:ie},filterConfig:le,activeFiltersConfig:ne,dedicatedAction:p().createElement(T.Z,{onClick:function(){return $((0,k.Sz)((0,k.Q6)(q),ce,k.R9,b.oN.advisory))},isDisabled:0===(0,k.Qy)(q).length||f,isLoading:f,ouia:"toolbar-remediation-button"})})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.84b9b295d6c1e9892bcc.js.map