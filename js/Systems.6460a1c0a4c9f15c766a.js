"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{9770:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var r=a(4942),n=a(15861),l=a(29439),s=a(87757),o=a.n(s),i=a(72573),c=a(33739),u=a(86350),f=a(43297),p=a.n(f),m=a(28216),d=a(334),v=a(30893),g=a(90747),y=a(44612),b=a(13784),h=a(32132);const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.stale,r=p().useMemo((function(){return b.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),n=a&&(Array.isArray(a)&&a.map((function(e){return e.toString()}))||[a.toString()]),l=function(t){e({filter:{stale:t}})};return{label:h.N.formatMessage(v.Z.labelsFiltersStale),type:y.Y.checkbox,filterValues:{onChange:function(e,t){l(t)},items:r,value:n,placeholder:h.N.formatMessage(v.Z.labelsFiltersStalePlaceholder)}}};var E=a(83905);const Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.packages_updatable,r=function(t){e({filter:{packages_updatable:t}})};return{label:h.N.formatMessage(v.Z.labelsFiltersUpdatable),type:y.Y.radio,filterValues:{onChange:function(e,t){r(t)},items:b.Tl,value:a,placeholder:h.N.formatMessage(v.Z.labelsFiltersUpdatablePlaceholder)}}};var P=a(49642),_=a(73888),w=a(4777),N=a(9557),O=a(5747),k=a(11220),F=a(57358),C=a(91607),T=a(94859),j=a(20259),M=a(58684),I=a(35451),x=a(77927),D=a(19694),A=a(45697),R=a.n(A),z=a(36104),U=a(6202),V=a(26577),q=a(2095),B=a(49287),L=a(18038),W=a(85962),Q=a(36001),Y=a(42057),G=function(e){var t=e.title,a=e.color,r=e.Icon,n=e.value,l=e.filter,s=e.apply;return p().createElement(q.Zb,{isCompact:!0,style:{marginRight:"var(--pf-global--spacer--sm)"}},p().createElement(z.l,{style:{marginTop:"0px"}},t),p().createElement(W.e,{className:"fonst-size-sm"},p().createElement(Q.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},p().createElement(Y.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},p().createElement(r,{color:a,size:"md"})),p().createElement(Y.B,{isFilled:!0,spacer:{default:"spacerNone"}},void 0===n&&p().createElement(V.O,{width:"24px"})||p().createElement(U.Button,{variant:"link",onClick:function(){return s(l)},className:"patch-status-report-text"},n)))))},H=function(e){var t=e.metadata.subtotals,a=e.apply;return p().createElement(u.Z,{style:{paddingBottom:0}},p().createElement(B.r,{hasGutter:!0,span:3},p().createElement(L.P,null,p().createElement(G,{title:h.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:I.default,color:"var(--pf-global--success-color--100)",value:null==t?void 0:t.patched,apply:a,filter:{filter:{packages_updatable:"eq:0"}}})),p().createElement(L.P,null,p().createElement(G,{title:h.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:x.ZP,color:"var(--pf-global--primary-color--100)",value:null==t?void 0:t.unpatched,apply:a,filter:{filter:{packages_updatable:"gt:0"}}})),p().createElement(L.P,null,p().createElement(G,{title:h.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:D.default,color:"var(--pf-global--warning-color--100)",value:null==t?void 0:t.stale,apply:a,filter:{filter:{stale:!0}}}))))};G.propTypes={title:R().string,Icon:R().elementType,value:R().string,color:R().string,apply:R().func,filter:R().object},H.propTypes={metadata:R().object,apply:R().func};const K=H;var J=a(49629);function X(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?X(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):X(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ee=function(){var e=h.N.formatMessage(v.Z.titlesSystems);(0,C.Iw)(e);var t=(0,d.useHistory)(),a=(0,m.I0)(),r=p().useState(!1),s=(0,l.Z)(r,2),f=s[0],y=s[1],I=p().useState((function(){return function(){return null}})),x=(0,l.Z)(I,2),D=x[0],A=x[1],R=(0,F.PZ)(t.location.search),z=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.wU),U=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),V=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),q=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),B=(0,m.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),L=(0,m.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),W=B.systemProfile,Q=B.selectedTags,Y=B.filter,G=B.search,H=B.page,X=B.perPage,ee=B.sort;function te(e){return ae.apply(this,arguments)}function ae(){return(ae=(0,n.Z)(o().mark((function e(t){var a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,t;case 3:a=e.sent,A((function(){return function(){return p().createElement(j.Z,{data:a})}})),y(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function re(e){a((0,N.SF)(e))}p().useEffect((function(){return re(R),function(){return a((0,N.RV)())}}),[]);var ne=(0,C.j5)($({search:G},Y),re,b.hb),le=(0,l.Z)(ne,1)[0],se={items:[(0,g.Z)(re,G,h.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),h.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),S(re,Y),Z(re,Y),(0,E.Z)(Y,re)]},oe={filters:(0,F.mt)(Y,G,h.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:le,deleteTitle:h.N.formatMessage(v.Z.labelsFiltersReset)},ie=(0,C.ry)(z,V,(function(e){return(0,k.lc)($($({},e),{},{limit:-1})).then(F.zw)}),(function(e){a({type:"SELECT_ENTITY",payload:e})})),ce=V&&(0,F.Qy)(V).length,ue=(0,C.AR)("systems",B,{csv:k.wI,json:k.TW},a),fe=function(e){return(0,k.ob)({limit:-1}).then((function(t){var a=t.data;return(0,k.fq)({advisories:a.map((function(e){return e.id})),systems:e})}))},pe=(0,C.U)(k.lc,re,{},t,(function(e){a((0,N._e)(e))}));return p().createElement(p().Fragment,null,p().createElement(P.Z,{title:h.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),p().createElement(D,null),p().createElement(K,{metadata:L,apply:re}),p().createElement(u.Z,null,q.hasError&&p().createElement(_.Z,{code:q.code})||p().createElement(c.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:G,filter:Y,systemProfile:W,selectedTags:Q}},onLoad:function(e){var t=e.mergeWithEntities;(0,w.z)($({},t((0,O.Kq)(M.Fs,O.G),(0,F.fm)({page:H,perPage:X,sort:ee,search:G},R))))},getEntities:pe,actions:(0,M.Sb)(te),tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:i.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0}},p().createElement(J.Z,{className:"testInventroyComponentChild",bulkSelect:(0,C.Pz)(ce,ie,{total_items:U},z),exportConfig:{isDisabled:0===U,onSelect:ue},filterConfig:se,activeFiltersConfig:oe,dedicatedAction:p().createElement(T.Z,{onClick:function(){return te((0,F.Sz)((0,F.Q6)(V),fe,F.R9,b.oN.advisory))},isDisabled:0===(0,F.Qy)(V).length||f,isLoading:f,ouia:"toolbar-remediation-button"})}))))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.1b1d3ec8ec76ecaa7185370121a2a6af.js.map