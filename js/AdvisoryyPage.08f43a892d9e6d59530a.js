(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{96688:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>de});var n=r(96156),a=r(28481),s=r(81159),l=r(34023),o=r(63540),c=r(20018),i=r(86350),u=r(45697),m=r.n(u),f=r(77865),d=r.n(f),v=r(61084),p=r(334),E=r(30893),g=r(6202),y=r(49287),b=r(18038),h=r(42057),S=r(36001),Z=r(35240),P=r(53202),O=r(78826),w=r(32132),j=r(38776),N=r(90747),C=r(64270),D=r(9557),_=r(57668),M=r(57358),k=r(72573),A=function(e){var t=e.cveIds,r=(0,v.useDispatch)(),n=(0,f.useState)([]),s=(0,a.Z)(n,2),l=s[0],o=s[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],p=(0,f.useState)(1),g=(0,a.Z)(p,2),y=g[0],b=g[1],h=(0,f.useState)(10),S=(0,a.Z)(h,2),Z=S[0],P=S[1],A=(0,f.useState)(void 0),F=(0,a.Z)(A,2),L=F[0],T=F[1],B=(0,f.useState)({direction:k.SortByDirection.asc,index:0}),x=(0,a.Z)(B,2),I=x[0],q=x[1],R=(0,v.useSelector)((function(e){return e.CvesListStore.rows})),H=(0,v.useSelector)((function(e){return e.CvesListStore.status}));d().useEffect((function(){r((0,D.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(l.slice((y-1)*Z,y*Z))}),[l,y,Z,I]),(0,f.useMemo)((function(){var e=void 0!==L&&""!==L&&R.filter((function(e){var t=e.attributes.synopsis;return t&&L&&t.toLowerCase().includes(L.toLowerCase())}))||R;o((0,_.KW)((0!==e.length||L)&&e||R))}),[L,R]);var K=function(e){var t=e.search;b(y),T(t)};return d().createElement(d().Fragment,null,d().createElement(O.u_,{variant:"small",title:w.N.formatMessage(E.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(j.Z,{columns:C.g,onSetPage:function(e,t){b(t)},onPerPageSelect:function(e,t){b(1),P(t)},apply:K,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,r){var n=(0,M.Qg)(l,t,r),a=n.sortBy,s=n.sortedCves;q(a),o(s)},sortBy:I,store:{rows:u,metadata:{limit:Z,offset:(y-1)*Z,total_items:l&&l.length},status:H,queryParams:{filter:{},search:L}},filterConfig:{items:[(0,N.Z)(K,L,"",w.N.formatMessage(E.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};A.propTypes={cveIds:m().array};const F=A;var L=r(7665),T=r(36842),B=r(21508),x=r(34348),I=r(19210),q=function(e){var t=e.severity;return d().createElement(T.P,{className:"infobox",hasGutter:!0},d().createElement(B.J,{isFilled:!0},d().createElement(S.k,{flex:{default:"column"}},d().createElement(h.B,{spacer:{default:"spacerNone"}},d().createElement(x.Dx,{headingLevel:"h5"},w.N.formatMessage(E.Z.labelsColumnsSeverity))),d().createElement(h.B,{spacer:{default:"spacerSm"}},d().createElement(S.k,{flex:{default:"row"}},d().createElement(h.B,null,d().createElement(I.ZP,{size:"sm",color:t.color})),d().createElement(h.B,null,t.label))))))};q.propTypes={severity:m().object};const R=q;var H=r(55970),K=function(e){var t=e.attributes,r=e.isLoading,n=(0,f.useState)((function(){return function(){return null}})),i=(0,a.Z)(n,2),u=i[0],m=i[1],v=(0,M.r)(t.severity),p=t.cves;return d().createElement(y.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(b.P,{md:8,sm:12},d().createElement(P.ZP,{loading:r,variant:P.x.spinner,centered:!0},d().createElement(s.K,{hasGutter:!0},d().createElement(l.v,null),d().createElement(l.v,{style:{whiteSpace:"pre-line"}},(0,M.J1)(t.description)),d().createElement(l.v,null,t.public_date&&d().createElement(d().Fragment,null,w.N.formatMessage(E.Z.labelsPublicDate,{date:(0,Z.Un)(t.public_date)}),d().createElement("br",null)),t.modified_date&&d().createElement(d().Fragment,null,w.N.formatMessage(E.Z.labelsModifiedDate,{date:(0,Z.Un)(t.modified_date)}))),(0,M.q5)(t.id)&&d().createElement(l.v,null,d().createElement(H.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:w.N.formatMessage(E.Z.linksViewPackagesAndErrata)}))))),d().createElement(b.P,{md:4,sm:12},d().createElement(S.k,{flex:{default:"column"}},0!==v.value&&d().createElement(h.B,null,d().createElement(R,{severity:v})),t.reboot_required&&d().createElement(h.B,{spacer:{default:"spacerMd"}},d().createElement(L.Z,null)))),p&&0!==p.length&&d().createElement(b.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(o.xv,{component:o.qO.h3},w.N.formatMessage(E.Z.labelsCves)),d().createElement(g.Button,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return d().createElement(F,{cveIds:p})}}))}},w.N.formatMessage(E.Z.labelsCvesButton,{cvesCount:p.length})))),d().createElement(u,null))};K.propTypes={attributes:m().object,isLoading:m().bool};const U=K;var G=r(49642),z=r(20167),Q=r(60076),V=r(91607),J=r(61829),W=r(33739),Y=r(73888),X=r(4777),$=r(5747),ee=r(11220),te=r(13784),re=r(94859),ne=r(20259),ae=r(58684);function se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function le(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?se(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var oe=function(e){var t=e.advisoryName,r=(0,v.useDispatch)(),n=d().useState((function(){return function(){return null}})),s=(0,a.Z)(n,2),l=s[0],o=s[1],c=(0,p.useHistory)(),i=(0,M.PZ)(c.location.search),u=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),m=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),f=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),g=(0,v.useSelector)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),y=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),b=g.systemProfile,h=g.selectedTags,S=g.filter,Z=g.search,P=g.page,O=g.perPage,j=g.sort;function C(e){r((0,D.pH)(e))}d().useEffect((function(){return C(i),function(){r((0,D.RV)()),r((0,D.Yf)())}}),[]);var _=(0,V.j5)({search:Z},C),A=(0,a.Z)(_,1)[0],F={items:[(0,N.Z)(C,Z,w.N.formatMessage(E.Z.labelsFiltersSystemsSearchTitle),w.N.formatMessage(E.Z.labelsFiltersSystemsSearchPlaceholder))]},L={filters:(0,M.mt)(S,Z,w.N.formatMessage(E.Z.labelsFiltersSystemsSearchTitle)),onDelete:A},T=function(e){o((function(){return function(){return d().createElement(ne.Z,{data:e})}}))},B=(0,V.ry)(u,y,(function(){return(0,ee.cK)(le(le({},g),{},{id:t,limit:-1})).then(M.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),x=y&&(0,M.Qy)(y).length,I=(0,V.U)(ee.cK,C,{id:t},c),q=(0,V.AR)(t,g,{csv:ee.nb,json:ee.Se},r);return d().createElement(d().Fragment,null,d().createElement(l,null),m.hasError&&d().createElement(Y.Z,{code:m.code})||d().createElement(W.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:Z,filter:S,systemProfile:b,selectedTags:h}},onLoad:function(e){var t=e.mergeWithEntities;(0,X.z)(le({},t((0,$.Kq)(ae.Fs,$.G),(0,M.fm)({page:P,perPage:O,sort:j,search:Z},i))))},getEntities:I,actions:(0,ae.Sb)(T),tableProps:{canSelectAll:!1,variant:k.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:F,activeFiltersConfig:L,exportConfig:{isDisabled:0===f,onSelect:q},bulkSelect:B&&(0,V.Pz)(x,B,{total_items:f},u),dedicatedAction:d().createElement(re.Z,{isDisabled:0===(0,M.Qy)(y).length,onClick:function(){return T((0,M.MS)(t,(0,M.Q6)(y),te.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(J.ZP,null)," ",w.N.formatMessage(E.Z.labelsRemediate))}))};oe.propTypes={advisoryName:m().string};const ce=oe;var ie=r(83215);function ue(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ue(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ue(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var fe=function(e){var t=e.match,r=(0,v.useDispatch)(),n=d().useState(t.params.advisoryId),u=(0,a.Z)(n,1)[0],m="".concat(u," - ").concat(w.N.formatMessage(E.Z.titlesAdvisories));(0,V.Iw)(m);var f=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore})),p=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){r((0,D.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){r((0,D.jl)()),r((0,D.JP)()),r((0,ie.L1)())}}),[]);var g=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(G.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:w.N.formatMessage(E.Z.titlesPatchAdvisories),to:Q.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},p.hasError?d().createElement(z.Z,null):d().createElement(U,{attributes:me(me({},g),{},{id:u}),isLoading:p.isLoading})),d().createElement(i.Z,null,d().createElement(s.K,{hasGutter:!0},d().createElement(l.v,null,d().createElement(c.D,null,d().createElement(o.xv,{component:o.qO.h2},w.N.formatMessage(E.Z.titlesAffectedSystems)))),d().createElement(l.v,null,p.hasError&&d().createElement(Y.Z,null)||!p.isLoading&&d().createElement(ce,{advisoryName:u})))))};fe.propTypes={match:m().any};const de=(0,p.withRouter)(fe)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.b25d62b347cc6e5f9b19.js.map