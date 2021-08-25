(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{53661:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ge});var n=r(96156),a=r(28481),s=r(81159),o=r(34023),l=r(63540),c=r(20018),i=r(86350),u=r(45697),m=r.n(u),f=r(77865),d=r.n(f),v=r(61084),p=r(334),g=r(30893),E=r(6202),y=r(49287),b=r(18038),h=r(19210),S=r(35240),Z=r(53202),P=r(78826),O=r(32132),j=r(38776),w=r(90747),C=r(64270),N=r(9557),D=r(86032),_=r(57358),M=r(72573),k=function(e){var t=e.cveIds,r=(0,v.useDispatch)(),n=(0,f.useState)([]),s=(0,a.Z)(n,2),o=s[0],l=s[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],p=(0,f.useState)(1),E=(0,a.Z)(p,2),y=E[0],b=E[1],h=(0,f.useState)(10),S=(0,a.Z)(h,2),Z=S[0],k=S[1],L=(0,f.useState)(void 0),F=(0,a.Z)(L,2),x=F[0],A=F[1],T=(0,f.useState)({direction:M.SortByDirection.asc,index:0}),I=(0,a.Z)(T,2),q=I[0],B=I[1],R=(0,v.useSelector)((function(e){return e.CvesListStore.rows})),H=(0,v.useSelector)((function(e){return e.CvesListStore.status}));d().useEffect((function(){r((0,N.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(o.slice((y-1)*Z,y*Z))}),[o,y,Z,q]),(0,f.useMemo)((function(){var e=void 0!==x&&""!==x&&R.filter((function(e){var t=e.attributes.synopsis;return t&&x&&t.toLowerCase().includes(x.toLowerCase())}))||R;l((0,D.KW)((0!==e.length||x)&&e||R))}),[x,R]);var K=function(e){var t=e.search;b(y),A(t)};return d().createElement(d().Fragment,null,d().createElement(P.u_,{variant:"small",title:O.N.formatMessage(g.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(j.Z,{columns:C.g,onSetPage:function(e,t){b(t)},onPerPageSelect:function(e,t){b(1),k(t)},apply:K,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,r){var n=(0,_.Qg)(o,t,r),a=n.sortBy,s=n.sortedCves;B(a),l(s)},sortBy:q,store:{rows:u,metadata:{limit:Z,offset:(y-1)*Z,total_items:o&&o.length},status:H,queryParams:{filter:{},search:x}},filterConfig:{items:[(0,w.Z)(K,x,"",O.N.formatMessage(g.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};k.propTypes={cveIds:m().array};const L=k;var F=r(8896),x=r(36842),A=r(21508),T=function(e){var t=e.title,r=e.text,n=e.isLoading,a=e.content,s=e.color;return d().createElement(x.P,{className:"infobox",hasGutter:!0},d().createElement(Z.ZP,{variant:Z.x.skeleton,loading:n,size:"lg"},d().createElement(A.J,{style:{backgroundColor:s}},d().createElement(F.b,null,a)),d().createElement(A.J,{isFilled:!0},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h6},t),d().createElement(l.xv,{component:l.qO.p},r)))))};T.propTypes={title:m().string,text:m().any,isLoading:m().bool,content:m().any,color:m().string};const I=T;var q=r(149),B=r(83567),R=r(36001),H=r(42057),K=function(e){var t=e.severity;return d().createElement(q.J2,{position:"bottom",enableFlip:!0,headerContent:d().createElement("div",null,t.label+" severity"),bodyContent:d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.p},t.text)),footerContent:d().createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},d().createElement(R.k,null,d().createElement(H.B,{spacer:{default:"spacerSm"}},d().createElement(B.ZP,null)),d().createElement(H.B,{spacer:{default:"spacerSm"}},O.N.formatMessage(g.Z.linksSearchSecurityRatings))))},d().createElement("a",null,O.N.formatMessage(g.Z.linksLearnMore)))};K.propTypes={severity:m().object};const U=K;var z=r(55970),G=function(e){var t=e.attributes,r=e.isLoading,n=(0,f.useState)((function(){return function(){return null}})),i=(0,a.Z)(n,2),u=i[0],m=i[1],v=(0,_.r)(t.severity),p=t.cves;return d().createElement(y.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(b.P,{md:8,sm:12},d().createElement(Z.ZP,{loading:r,variant:Z.x.spinner,centered:!0},d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null),d().createElement(o.v,{style:{whiteSpace:"pre-line"}},(0,_.J1)(t.description)),d().createElement(o.v,null,t.public_date&&d().createElement(d().Fragment,null,O.N.formatMessage(g.Z.labelsPublicDate,{date:(0,S.Un)(t.public_date)}),d().createElement("br",null)),t.modified_date&&d().createElement(d().Fragment,null,O.N.formatMessage(g.Z.labelsModifiedDate,{date:(0,S.Un)(t.modified_date)}))),(0,_.q5)(t.id)&&d().createElement(o.v,null,d().createElement(z.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:O.N.formatMessage(g.Z.linksViewPackagesAndErrata)}))))),d().createElement(b.P,{md:4,sm:12},0!==v.value&&d().createElement(I,{isLoading:r,title:v.label,color:v.color,text:d().createElement(U,{severity:v}),content:d().createElement(h.ZP,{size:"lg"})})),p&&0!==p.length&&d().createElement(b.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h3},O.N.formatMessage(g.Z.labelsCves)),d().createElement(E.Button,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return d().createElement(L,{cveIds:p})}}))}},O.N.formatMessage(g.Z.labelsCvesButton,{cvesCount:p.length})))),d().createElement(u,null))};G.propTypes={attributes:m().object,isLoading:m().bool};const J=G;var Q=r(49642),V=r(20167),W=r(60076),Y=r(91607),X=r(61829),$=r(33739),ee=r(73888),te=r(4777),re=r(5747),ne=r(11220),ae=r(13784),se=r(94859),oe=r(20259),le=r(58684);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){var t=e.advisoryName,r=(0,v.useDispatch)(),n=d().useState((function(){return function(){return null}})),s=(0,a.Z)(n,2),o=s[0],l=s[1],c=(0,p.useHistory)(),i=(0,_.PZ)(c.location.search),u=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),m=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),f=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),E=(0,v.useSelector)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),y=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),b=E.systemProfile,h=E.selectedTags,S=E.filter,Z=E.search,P=E.page,j=E.perPage,C=E.sort;function D(e){r((0,N.pH)(e))}d().useEffect((function(){return D(i),function(){r((0,N.RV)()),r((0,N.Yf)())}}),[]);var k=(0,Y.j5)({search:Z},D),L=(0,a.Z)(k,1)[0],F={items:[(0,w.Z)(D,Z,O.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),O.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder))]},x={filters:(0,_.mt)(S,Z,O.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle)),onDelete:L},A=function(e){l((function(){return function(){return d().createElement(oe.Z,{data:e})}}))},T=(0,Y.ry)(u,y,(function(){return(0,ne.cK)(ie(ie({},E),{},{id:t,limit:-1})).then(_.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),I=y&&(0,_.Qy)(y).length,q=(0,Y.U)(ne.cK,D,{id:t},c),B=(0,Y.AR)(t,E,{csv:ne.nb,json:ne.Se},r);return d().createElement(d().Fragment,null,d().createElement(o,null),m.hasError&&d().createElement(ee.Z,{code:m.code})||d().createElement($.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:Z,filter:S,systemProfile:b,selectedTags:h}},onLoad:function(e){var t=e.mergeWithEntities;(0,te.z)(ie({},t((0,re.Kq)(le.Fs,re.G),(0,_.fm)({page:P,perPage:j,sort:C,search:Z},i))))},getEntities:q,actions:(0,le.Sb)(A),tableProps:{canSelectAll:!1,variant:M.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:F,activeFiltersConfig:x,exportConfig:{isDisabled:0===f,onSelect:B},bulkSelect:T&&(0,Y.Pz)(I,T,{total_items:f},u),dedicatedAction:d().createElement(se.Z,{isDisabled:0===(0,_.Qy)(y).length,onClick:function(){return A((0,_.MS)(t,(0,_.Q6)(y),ae.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(X.ZP,null)," ",O.N.formatMessage(g.Z.labelsRemediate))}))};ue.propTypes={advisoryName:m().string};const me=ue;var fe=r(83215);function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=function(e){var t=e.match,r=(0,v.useDispatch)(),n=d().useState(t.params.advisoryId),u=(0,a.Z)(n,1)[0],m="".concat(u," - ").concat(O.N.formatMessage(g.Z.titlesAdvisories));(0,Y.Iw)(m);var f=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore})),p=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){r((0,N.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){r((0,N.jl)()),r((0,N.JP)()),r((0,fe.L1)())}}),[]);var E=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(Q.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:O.N.formatMessage(g.Z.titlesPatchAdvisories),to:W.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},p.hasError?d().createElement(V.Z,null):d().createElement(J,{attributes:ve(ve({},E),{},{id:u}),isLoading:p.isLoading})),d().createElement(i.Z,null,d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null,d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h2},O.N.formatMessage(g.Z.titlesAffectedSystems)))),d().createElement(o.v,null,p.hasError&&d().createElement(ee.Z,null)||!p.isLoading&&d().createElement(me,{advisoryName:u})))))};pe.propTypes={match:m().any};const ge=(0,p.withRouter)(pe)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.d50975a838b8a0bba1f8.js.map