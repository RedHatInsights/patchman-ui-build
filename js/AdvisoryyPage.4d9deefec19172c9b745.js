"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{96688:(e,t,r)=>{r.r(t),r.d(t,{default:()=>pe});var n=r(4942),a=r(29439),s=r(81159),l=r(34023),o=r(63540),c=r(20018),i=r(86350),u=r(45697),m=r.n(u),f=r(43297),d=r.n(f),v=r(28216),p=r(334),E=r(30893),y=r(6202),g=r(49287),b=r(18038),h=r(42057),Z=r(36001),S=r(36842),P=r(21508),O=r(34348),w=r(35240),N=r(53202),_=r(78826),j=r(32132),C=r(38776),D=r(90747),M=r(64270),k=r(9557),F=r(57668),A=r(57358),L=r(72573),B=function(e){var t=e.cveIds,r=(0,v.I0)(),n=(0,f.useState)([]),s=(0,a.Z)(n,2),l=s[0],o=s[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],p=(0,f.useState)(1),y=(0,a.Z)(p,2),g=y[0],b=y[1],h=(0,f.useState)(10),Z=(0,a.Z)(h,2),S=Z[0],P=Z[1],O=(0,f.useState)(void 0),w=(0,a.Z)(O,2),N=w[0],B=w[1],T=(0,f.useState)({direction:L.SortByDirection.asc,index:0}),x=(0,a.Z)(T,2),I=x[0],q=x[1],R=(0,v.v9)((function(e){return e.CvesListStore.rows})),U=(0,v.v9)((function(e){return e.CvesListStore.status}));d().useEffect((function(){r((0,k.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(l.slice((g-1)*S,g*S))}),[l,g,S,I]),(0,f.useMemo)((function(){var e=void 0!==N&&""!==N&&R.filter((function(e){var t=e.attributes.synopsis;return t&&N&&t.toLowerCase().includes(N.toLowerCase())}))||R;o((0,F.KW)((0!==e.length||N)&&e||R))}),[N,R]);var G=function(e){var t=e.search;b(g),B(t)};return d().createElement(d().Fragment,null,d().createElement(_.u_,{variant:"small",title:j.N.formatMessage(E.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(C.Z,{columns:M.g,onSetPage:function(e,t){b(t)},onPerPageSelect:function(e,t){b(1),P(t)},apply:G,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,r){var n=(0,A.Qg)(l,t,r),a=n.sortBy,s=n.sortedCves;q(a),o(s)},sortBy:I,store:{rows:u,metadata:{limit:S,offset:(g-1)*S,total_items:l&&l.length},status:U,queryParams:{filter:{},search:N}},filterConfig:{items:[(0,D.Z)(G,N,"",j.N.formatMessage(E.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};B.propTypes={cveIds:m().array};const T=B;var x=r(7665),I=r(19210),q=function(e){var t=e.severity;return d().createElement(S.P,{className:"infobox",hasGutter:!0},d().createElement(P.J,{isFilled:!0},d().createElement(Z.k,{flex:{default:"column"}},d().createElement(h.B,{spacer:{default:"spacerNone"}},d().createElement(O.Dx,{headingLevel:"h5"},j.N.formatMessage(E.Z.labelsColumnsSeverity))),d().createElement(h.B,{spacer:{default:"spacerSm"}},d().createElement(Z.k,{flex:{default:"row"}},d().createElement(h.B,null,d().createElement(I.ZP,{size:"sm",color:t.color})),d().createElement(h.B,null,t.label))))))};q.propTypes={severity:m().object};const R=q;var U=r(55970),G=r(18464),H=function(e){var t=e.attributes,r=e.isLoading,n=(0,f.useState)((function(){return function(){return null}})),i=(0,a.Z)(n,2),u=i[0],m=i[1],v=(0,f.useState)(1e3),p=(0,a.Z)(v,2),_=p[0],C=p[1],D=(0,A.r)(t.severity),M=t.cves;return d().createElement(g.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(b.P,{md:8,sm:12},d().createElement(N.ZP,{loading:r,variant:N.x.spinner,centered:!0},d().createElement(s.K,{hasGutter:!0},d().createElement(l.v,null),d().createElement(l.v,{style:{whiteSpace:"pre-line"}},t.description&&(0,A.Nt)(t.description,_,C)),d().createElement(l.v,null,t.public_date&&d().createElement(d().Fragment,null,j.N.formatMessage(E.Z.labelsPublicDate,{date:(0,w.Un)(t.public_date)}),d().createElement("br",null)),t.modified_date&&d().createElement(d().Fragment,null,j.N.formatMessage(E.Z.labelsModifiedDate,{date:(0,w.Un)(t.modified_date)}))),(0,A.q5)(t.id)&&d().createElement(l.v,null,d().createElement(U.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:j.N.formatMessage(E.Z.linksViewPackagesAndErrata)}))))),d().createElement(b.P,{md:4,sm:12},d().createElement(Z.k,{flex:{default:"column"}},t.advisory_type_name&&d().createElement(h.B,null,d().createElement(S.P,{className:"infobox",hasGutter:!0},d().createElement(P.J,{isFilled:!0},d().createElement(Z.k,{flex:{default:"column"}},d().createElement(h.B,{spacer:{default:"spacerNone"}},d().createElement(O.Dx,{headingLevel:"h5"},j.N.formatMessage(E.Z.titlesAdvisoryType))),d().createElement(h.B,{spacer:{default:"spacerSm"}},d().createElement(G.Z,{type:t.advisory_type_name})))))),0!==D.value&&d().createElement(h.B,null,d().createElement(R,{severity:D})),t.reboot_required&&d().createElement(h.B,{spacer:{default:"spacerMd"}},d().createElement(x.Z,null)))),M&&0!==M.length&&d().createElement(b.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(o.xv,{component:o.qO.h3},j.N.formatMessage(E.Z.labelsCves)),d().createElement(y.Button,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return d().createElement(T,{cveIds:M})}}))}},j.N.formatMessage(E.Z.labelsCvesButton,{cvesCount:M.length})))),d().createElement(u,null))};H.propTypes={attributes:m().object,isLoading:m().bool};const K=H;var z=r(49642),Q=r(20167),V=r(60076),J=r(91607),W=r(61829),Y=r(33739),X=r(83905),$=r(73888),ee=r(32041),te=r(5747),re=r(11220),ne=r(13784),ae=r(94859),se=r(20259),le=r(58684);function oe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ce(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):oe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ie=function(e){var t=e.advisoryName,r=(0,v.I0)(),n=d().useState((function(){return function(){return null}})),s=(0,a.Z)(n,2),l=s[0],o=s[1],c=(0,p.useHistory)(),i=(0,A.PZ)(c.location.search),u=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.wU),m=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),f=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),y=(0,v.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),g=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),b=y.systemProfile,h=y.selectedTags,Z=y.filter,S=y.search,P=y.page,O=y.perPage,w=y.sort;function N(e){r((0,k.pH)(e))}d().useEffect((function(){return N(i),function(){r((0,k.RV)()),r((0,k.Yf)())}}),[]);var _=(0,J.j5)(ce({search:S},Z),N),C=(0,a.Z)(_,1)[0],M={items:[(0,D.Z)(N,S,j.N.formatMessage(E.Z.labelsFiltersSystemsSearchTitle),j.N.formatMessage(E.Z.labelsFiltersSystemsSearchPlaceholder)),(0,X.Z)(Z,N)]},F={filters:(0,A.mt)(Z,S,j.N.formatMessage(E.Z.labelsFiltersSystemsSearchTitle)),onDelete:C},B=function(e){o((function(){return function(){return d().createElement(se.Z,{data:e})}}))},T=(0,J.ry)(u,g,(function(){return(0,re.cK)(ce(ce({},y),{},{id:t,limit:-1})).then(A.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),x=g&&(0,A.Qy)(g).length,I=(0,J.U)(re.cK,N,{id:t},c),q=(0,J.AR)(t,y,{csv:re.nb,json:re.Se},r);return d().createElement(d().Fragment,null,d().createElement(l,null),m.hasError&&d().createElement($.Z,{code:m.code})||d().createElement(Y.Z,{disableDefaultColumns:["system_profile"],isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0,tags:!1},columns:le.Fs,showTags:!0,customFilters:{patchParams:{search:S,filter:Z,systemProfile:b,selectedTags:h}},onLoad:function(e){var t=e.mergeWithEntities;(0,ee.z)(ce({},t((0,te.Kq)(le.Fs,te.G),(0,A.fm)({page:P,perPage:O,sort:w,search:S},i))))},getEntities:I,actions:(0,le.Sb)(B),tableProps:{canSelectAll:!1,variant:L.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:M,activeFiltersConfig:F,exportConfig:{isDisabled:0===f,onSelect:q},bulkSelect:T&&(0,J.Pz)(x,T,{total_items:f},u),dedicatedAction:d().createElement(ae.Z,{isDisabled:0===(0,A.Qy)(g).length,onClick:function(){return B((0,A.MS)(t,(0,A.Q6)(g),ne.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(W.ZP,null)," ",j.N.formatMessage(E.Z.labelsRemediate))}))};ie.propTypes={advisoryName:m().string};const ue=ie;var me=r(83215);function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function de(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=function(e){var t=e.match,r=(0,v.I0)(),n=d().useState(t.params.advisoryId),u=(0,a.Z)(n,1)[0],m="".concat(u," - ").concat(j.N.formatMessage(E.Z.titlesAdvisories));(0,J.Iw)(m);var f=(0,v.v9)((function(e){return e.AdvisoryDetailStore})),p=(0,v.v9)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){r((0,k.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){r((0,k.jl)()),r((0,k.JP)()),r((0,me.L1)())}}),[]);var y=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(z.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:j.N.formatMessage(E.Z.titlesPatchAdvisories),to:V.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},p.hasError?d().createElement(Q.Z,null):d().createElement(K,{attributes:de(de({},y),{},{id:u}),isLoading:p.isLoading})),d().createElement(i.Z,null,d().createElement(s.K,{hasGutter:!0},d().createElement(l.v,null,d().createElement(c.D,null,d().createElement(o.xv,{component:o.qO.h2},j.N.formatMessage(E.Z.titlesAffectedSystems)))),d().createElement(l.v,null,p.hasError&&d().createElement($.Z,null)||!p.isLoading&&d().createElement(ue,{advisoryName:u})))))};ve.propTypes={match:m().any};const pe=(0,p.withRouter)(ve)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.22375198bc7026de2fbbcea5f0ad03ec.js.map