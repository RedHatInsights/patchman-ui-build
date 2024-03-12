"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[423],{91482:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(87123),a=r(13784),l=r(32132),s=r(30893);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:l.N.formatMessage(s.Z.labelsFiltersStatus),type:n.Yu.checkbox,filterValues:{onChange:function(t,r){!function(t){0===t.length?e({filter:{status:void 0}}):e({filter:{status:t}})}(r)},items:a.HU,value:!t.status||Array.isArray(t.status)?t.status:[t.status],placeholder:l.N.formatMessage(s.Z.labelsColumnsStatusPlaceholder)}}}},34951:(e,t,r)=>{r.r(t),r.d(t,{default:()=>pe});var n=r(4942),a=r(49739),l=r(83826),s=r(68340),c=r(68774),i=r(14748),o=r(28416),u=r.n(o),m=r(93942),d=r(62012),f=r(30893),p=r(29439),v=r(47173),E=r(50693),y=r(16475),b=r(92298),g=r(28191),h=r(79851),P=r(34512),Z=r(38779),O=r(35240),S=r(45697),j=r.n(S),N=r(37545),w=r(5391),D=r(32132),k=r(7665),A=r(78057),M=r(27578),x=function(e){var t=e.severity;return u().createElement(h.P,{className:"infobox",hasGutter:!0},u().createElement(P.J,{isFilled:!0},u().createElement(g.k,{flex:{default:"column"}},u().createElement(b.B,{spacer:{default:"spacerNone"}},u().createElement(Z.D,{headingLevel:"h5"},D.N.formatMessage(f.Z.labelsColumnsSeverity))),u().createElement(b.B,{spacer:{default:"spacerSm"}},u().createElement(g.k,{flex:{default:"row"}},u().createElement(b.B,null,u().createElement(A.J,{size:"sm"},u().createElement(M.ZP,{color:t.color}))),u().createElement(b.B,null,t.label))))))};x.propTypes={severity:j().object};const F=x;var B=r(55970),C=r(18464),R=(0,o.lazy)((function(){return Promise.all([r.e(6607),r.e(8826),r.e(3388),r.e(2694),r.e(236),r.e(9630)]).then(r.bind(r,71309))})),_=function(e){var t=e.attributes,r=e.isLoading,n=(0,o.useState)((function(){return function(){return null}})),i=(0,p.Z)(n,2),m=i[0],d=i[1],S=(0,o.useState)(1e3),j=(0,p.Z)(S,2),A=j[0],M=j[1],x=(0,w.r)(t.severity),_=t.cves;return u().createElement(E.r,{hasGutter:!0,style:{minHeight:150}},u().createElement(y.P,{md:8,sm:12},u().createElement(N.ZP,{loading:r,variant:N.x.spinner,centered:!0},u().createElement(a.K,{hasGutter:!0},u().createElement(l.v,null),u().createElement(l.v,{style:{whiteSpace:"pre-line"}},t.description&&(0,w.Nt)(t.description,A,M)),u().createElement(l.v,null,t.public_date&&u().createElement(u().Fragment,null,D.N.formatMessage(f.Z.labelsPublicDate,{date:(0,O.Un)(t.public_date)}),u().createElement("br",null)),t.modified_date&&u().createElement(u().Fragment,null,D.N.formatMessage(f.Z.labelsModifiedDate,{date:(0,O.Un)(t.modified_date)}))),(0,w.q5)(t.id)&&u().createElement(l.v,null,u().createElement(B.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:D.N.formatMessage(f.Z.linksViewPackagesAndErrata)}))))),u().createElement(y.P,{md:4,sm:12},u().createElement(g.k,{flex:{default:"column"}},t.advisory_type_name&&u().createElement(b.B,null,u().createElement(h.P,{className:"infobox",hasGutter:!0},u().createElement(P.J,{isFilled:!0},u().createElement(g.k,{flex:{default:"column"}},u().createElement(b.B,{spacer:{default:"spacerNone"}},u().createElement(Z.D,{headingLevel:"h5"},D.N.formatMessage(f.Z.titlesAdvisoryType))),u().createElement(b.B,{spacer:{default:"spacerSm"}},u().createElement(C.Z,{type:t.advisory_type_name})))))),0!==x.value&&u().createElement(b.B,null,u().createElement(F,{severity:x})),t.reboot_required&&u().createElement(b.B,{spacer:{default:"spacerMd"}},u().createElement(k.Z,null)))),_&&0!==_.length&&u().createElement(y.P,{md:4,sm:12},u().createElement(c.D,null,u().createElement(s.x,{component:s.q.h3},D.N.formatMessage(f.Z.labelsCves)),u().createElement(v.zx,{variant:"link",style:{padding:0},onClick:function(){d((function(){return function(){return u().createElement(R,{cveIds:_})}}))}},D.N.formatMessage(f.Z.labelsCvesButton,{cvesCount:_.length})))),u().createElement(o.Suspense,{fallback:u().createElement(o.Fragment,null)},u().createElement(m,null)))};_.propTypes={attributes:j().object,isLoading:j().bool};const T=_;var L=r(49642),q=r(14878),G=r(9557),I=r(15861),U=r(64687),H=r.n(U),z=r(75863),J=r(33739),K=r(97779),V=r(90747),Q=r(52579),Y=r(7322),W=r(5747),X=r(11220),$=r(13784),ee=r(59751),te=r(58684),re=r(55485),ne=r(53074),ae=r(42154),le=r(91482);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=function(e){var t=e.advisoryName,r=(0,m.I0)(),n=(0,m.oR)(),a=(0,d.useSearchParams)(),l=(0,p.Z)(a,2),s=l[0],c=l[1],i=u().useState(!1),v=(0,p.Z)(i,2),E=v[0],y=v[1],b=u().useState((function(){return function(){return null}})),g=(0,p.Z)(b,2),h=g[0],P=g[1],Z=(0,w.PZ)("?"+s.toString()),O=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.wU),S=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),j=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),N=(0,m.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),k=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),A=(0,m.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.metadata)||{}})),M=N.systemProfile,x=N.selectedTags,F=N.filter,B=N.search,C=N.page,R=N.perPage,_=N.sort;function T(e){r((0,G.pH)(e))}u().useEffect((function(){return T(Z),function(){r((0,G.RV)()),r((0,G.Yf)())}}),[]);var L=(0,ee.j5)(ce({search:B},F),T),q=(0,p.Z)(L,1)[0],U={items:[(0,V.Z)(T,B,D.N.formatMessage(f.Z.labelsFiltersSystemsSearchTitle),D.N.formatMessage(f.Z.labelsFiltersSystemsSearchPlaceholder)),(0,le.Z)(T,F)]},se=(0,ae.Fy)(F,B,q),ie=(0,o.useCallback)(function(){var e=(0,I.Z)(H().mark((function e(t){var r;return H().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:r=e.sent,P((function(){return function(){return u().createElement(re.Z,{data:r,isRemediationOpen:!0,setRemediationOpen:y})}})),y(!E);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[E]),oe=(0,ee.ry)(O,k,{endpoint:ee.cB.advisorySystems(t),queryParams:N,selectionDispatcher:G.i2,totalItems:j}),ue=k&&(0,w.Qy)(k).length,me=(0,ee.U)(X.cK,T,{id:t},c),de=(0,ee.AR)(t,N,{csv:X.nb,json:X.Se},r),fe=(0,ee.Pz)(ue,oe,{total_items:j},O,null,N);return u().createElement(u().Fragment,null,E&&u().createElement(h,null)||null,(S.hasError||!1===(null==A?void 0:A.has_systems))&&u().createElement(Q.Z,{code:S.code,metadata:A})||u().createElement(J.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0,tags:!1,operatingSystem:!1},columns:function(e){return(0,ae.gB)(e,te.HG)},showTags:!0,customFilters:{patchParams:{search:B,filter:F,systemProfile:M,selectedTags:x}},paginationProps:{isDisabled:0===j},onLoad:function(e){var t=e.mergeWithEntities;n.replaceReducer((0,K.UY)(ce(ce({},Y.E),t((0,W.Kq)((0,te.HG)(!1),W.PD),(0,w.fm)({page:C,perPage:R,sort:_,search:B},Z)))))},getEntities:me,tableProps:{actionResolver:function(e){return(0,te.Sb)(ie,void 0,void 0,e)},canSelectAll:!1,variant:z.B.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:U,activeFiltersConfig:se,exportConfig:{isDisabled:0===j,onSelect:de},bulkSelect:oe&&fe,dedicatedAction:u().createElement(ne.Z,{remediationProvider:function(){return(0,w.MS)(t,(0,w.Q6)(k),$.oN.advisory)},isDisabled:0===(0,w.Qy)(k).length})}))};ie.propTypes={advisoryName:j().string};const oe=ie;var ue=r(83215),me=r(55140);function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function fe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const pe=function(){var e=(0,m.I0)(),t=(0,me.Z)(),r=(0,d.useParams)().advisoryId;(0,o.useEffect)((function(){r&&t.updateDocumentTitle("".concat(r,"\n         - ").concat(D.N.formatMessage(f.Z.titlesAdvisories)," ").concat($.JD))}),[t,r]);var n=(0,m.v9)((function(e){return e.AdvisoryDetailStore})),p=(0,m.v9)((function(e){return e.AdvisoryDetailStore.status}));u().useEffect((function(){e((0,G.N2)({advisoryName:r}))}),[]),u().useEffect((function(){return function(){e((0,G.jl)()),e((0,G.Bt)()),e((0,ue.L1)())}}),[]);var v=n.data.attributes;return u().createElement(u().Fragment,null,u().createElement(L.Z,{title:r,headerOUIA:"advisory-details",breadcrumbs:[{title:D.N.formatMessage(f.Z.titlesPatchAdvisories),to:"/advisories",isActive:!1},{title:r,isActive:!0}]},p.hasError?u().createElement(q.Z,null):u().createElement(T,{attributes:fe(fe({},v),{},{id:r}),isLoading:p.isLoading})),u().createElement(i.ZP,null,u().createElement(a.K,{hasGutter:!0},u().createElement(l.v,null,u().createElement(c.D,null,u().createElement(s.x,{component:s.q.h2},D.N.formatMessage(f.Z.titlesAffectedSystems)))),u().createElement(l.v,null,u().createElement(oe,{advisoryName:r})))))}},55485:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(28416),a=r.n(n),l=r(45697),s=r.n(l),c=r(22663),i=function(e){var t=e.data,r=e.setRemediationOpen;return a().createElement(c.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:r,fallback:a().createElement("span",null),data:t})};i.propTypes={data:s().object,setRemediationOpen:s().func};const o=i}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryPage.bfbdbb54a62c743a86e7c82c64f865a4.js.map