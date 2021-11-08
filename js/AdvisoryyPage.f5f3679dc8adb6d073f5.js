(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{96688:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ee});var n=r(96156),a=r(28481),s=r(81159),l=r(34023),o=r(63540),c=r(20018),i=r(86350),u=r(45697),m=r.n(u),f=r(77865),d=r.n(f),v=r(61084),p=r(334),E=r(30893),y=r(6202),g=r(49287),b=r(18038),h=r(42057),S=r(36001),Z=r(36842),P=r(21508),O=r(34348),N=r(35240),w=r(53202),j=r(78826),_=r(32132),C=r(38776),D=r(90747),M=r(64270),k=r(9557),A=r(57668),F=r(57358),L=r(72573),B=function(e){var t=e.cveIds,r=(0,v.useDispatch)(),n=(0,f.useState)([]),s=(0,a.Z)(n,2),l=s[0],o=s[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],p=(0,f.useState)(1),y=(0,a.Z)(p,2),g=y[0],b=y[1],h=(0,f.useState)(10),S=(0,a.Z)(h,2),Z=S[0],P=S[1],O=(0,f.useState)(void 0),N=(0,a.Z)(O,2),w=N[0],B=N[1],x=(0,f.useState)({direction:L.SortByDirection.asc,index:0}),T=(0,a.Z)(x,2),I=T[0],q=T[1],R=(0,v.useSelector)((function(e){return e.CvesListStore.rows})),G=(0,v.useSelector)((function(e){return e.CvesListStore.status}));d().useEffect((function(){r((0,k.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(l.slice((g-1)*Z,g*Z))}),[l,g,Z,I]),(0,f.useMemo)((function(){var e=void 0!==w&&""!==w&&R.filter((function(e){var t=e.attributes.synopsis;return t&&w&&t.toLowerCase().includes(w.toLowerCase())}))||R;o((0,A.KW)((0!==e.length||w)&&e||R))}),[w,R]);var H=function(e){var t=e.search;b(g),B(t)};return d().createElement(d().Fragment,null,d().createElement(j.u_,{variant:"small",title:_.N.formatMessage(E.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(C.Z,{columns:M.g,onSetPage:function(e,t){b(t)},onPerPageSelect:function(e,t){b(1),P(t)},apply:H,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,r){var n=(0,F.Qg)(l,t,r),a=n.sortBy,s=n.sortedCves;q(a),o(s)},sortBy:I,store:{rows:u,metadata:{limit:Z,offset:(g-1)*Z,total_items:l&&l.length},status:G,queryParams:{filter:{},search:w}},filterConfig:{items:[(0,D.Z)(H,w,"",_.N.formatMessage(E.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};B.propTypes={cveIds:m().array};const x=B;var T=r(7665),I=r(19210),q=function(e){var t=e.severity;return d().createElement(Z.P,{className:"infobox",hasGutter:!0},d().createElement(P.J,{isFilled:!0},d().createElement(S.k,{flex:{default:"column"}},d().createElement(h.B,{spacer:{default:"spacerNone"}},d().createElement(O.Dx,{headingLevel:"h5"},_.N.formatMessage(E.Z.labelsColumnsSeverity))),d().createElement(h.B,{spacer:{default:"spacerSm"}},d().createElement(S.k,{flex:{default:"row"}},d().createElement(h.B,null,d().createElement(I.ZP,{size:"sm",color:t.color})),d().createElement(h.B,null,t.label))))))};q.propTypes={severity:m().object};const R=q;var G=r(55970),H=r(18464),K=function(e){var t=e.attributes,r=e.isLoading,n=(0,f.useState)((function(){return function(){return null}})),i=(0,a.Z)(n,2),u=i[0],m=i[1],v=(0,f.useState)(1e3),p=(0,a.Z)(v,2),j=p[0],C=p[1],D=(0,F.r)(t.severity),M=t.cves;return d().createElement(g.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(b.P,{md:8,sm:12},d().createElement(w.ZP,{loading:r,variant:w.x.spinner,centered:!0},d().createElement(s.K,{hasGutter:!0},d().createElement(l.v,null),d().createElement(l.v,{style:{whiteSpace:"pre-line"}},t.description&&(0,F.Nt)(t.description,j,C)),d().createElement(l.v,null,t.public_date&&d().createElement(d().Fragment,null,_.N.formatMessage(E.Z.labelsPublicDate,{date:(0,N.Un)(t.public_date)}),d().createElement("br",null)),t.modified_date&&d().createElement(d().Fragment,null,_.N.formatMessage(E.Z.labelsModifiedDate,{date:(0,N.Un)(t.modified_date)}))),(0,F.q5)(t.id)&&d().createElement(l.v,null,d().createElement(G.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:_.N.formatMessage(E.Z.linksViewPackagesAndErrata)}))))),d().createElement(b.P,{md:4,sm:12},d().createElement(S.k,{flex:{default:"column"}},t.advisory_type_name&&d().createElement(h.B,null,d().createElement(Z.P,{className:"infobox",hasGutter:!0},d().createElement(P.J,{isFilled:!0},d().createElement(S.k,{flex:{default:"column"}},d().createElement(h.B,{spacer:{default:"spacerNone"}},d().createElement(O.Dx,{headingLevel:"h5"},_.N.formatMessage(E.Z.titlesAdvisoryType))),d().createElement(h.B,{spacer:{default:"spacerSm"}},d().createElement(H.Z,{type:t.advisory_type_name})))))),0!==D.value&&d().createElement(h.B,null,d().createElement(R,{severity:D})),t.reboot_required&&d().createElement(h.B,{spacer:{default:"spacerMd"}},d().createElement(T.Z,null)))),M&&0!==M.length&&d().createElement(b.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(o.xv,{component:o.qO.h3},_.N.formatMessage(E.Z.labelsCves)),d().createElement(y.Button,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return d().createElement(x,{cveIds:M})}}))}},_.N.formatMessage(E.Z.labelsCvesButton,{cvesCount:M.length})))),d().createElement(u,null))};K.propTypes={attributes:m().object,isLoading:m().bool};const U=K;var z=r(49642),Q=r(20167),V=r(60076),J=r(91607),W=r(61829),Y=r(33739),X=r(83905),$=r(73888),ee=r(4777),te=r(5747),re=r(11220),ne=r(13784),ae=r(94859),se=r(20259),le=r(58684),oe=r(49629);function ce(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ie(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ce(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ue=function(e){var t=e.advisoryName,r=(0,v.useDispatch)(),n=d().useState((function(){return function(){return null}})),s=(0,a.Z)(n,2),l=s[0],o=s[1],c=(0,p.useHistory)(),i=(0,F.PZ)(c.location.search),u=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),m=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),f=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),y=(0,v.useSelector)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),g=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),b=y.systemProfile,h=y.selectedTags,S=y.filter,Z=y.search,P=y.page,O=y.perPage,N=y.sort;function w(e){r((0,k.pH)(e))}d().useEffect((function(){return w(i),function(){r((0,k.RV)()),r((0,k.Yf)())}}),[]);var j=(0,J.j5)(ie({search:Z},S),w),C=(0,a.Z)(j,1)[0],M={items:[(0,D.Z)(w,Z,_.N.formatMessage(E.Z.labelsFiltersSystemsSearchTitle),_.N.formatMessage(E.Z.labelsFiltersSystemsSearchPlaceholder)),(0,X.Z)(S,w)]},A={filters:(0,F.mt)(S,Z,_.N.formatMessage(E.Z.labelsFiltersSystemsSearchTitle)),onDelete:C},B=function(e){o((function(){return function(){return d().createElement(se.Z,{data:e})}}))},x=(0,J.ry)(u,g,(function(){return(0,re.cK)(ie(ie({},y),{},{id:t,limit:-1})).then(F.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),T=g&&(0,F.Qy)(g).length,I=(0,J.U)(re.cK,w,{id:t},c),q=(0,J.AR)(t,y,{csv:re.nb,json:re.Se},r);return d().createElement(d().Fragment,null,d().createElement(l,null),m.hasError&&d().createElement($.Z,{code:m.code})||d().createElement(Y.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:Z,filter:S,systemProfile:b,selectedTags:h}},onLoad:function(e){var t=e.mergeWithEntities;(0,ee.z)(ie({},t((0,te.Kq)(le.Fs,te.G),(0,F.fm)({page:P,perPage:O,sort:N,search:Z},i))))},getEntities:I,actions:(0,le.Sb)(B),tableProps:{canSelectAll:!1,variant:L.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0}},d().createElement(oe.Z,{className:"testInventroyComponentChild",filterConfig:M,activeFiltersConfig:A,exportConfig:{isDisabled:0===f,onSelect:q},bulkSelect:x&&(0,J.Pz)(T,x,{total_items:f},u),dedicatedAction:d().createElement(ae.Z,{isDisabled:0===(0,F.Qy)(g).length,onClick:function(){return B((0,F.MS)(t,(0,F.Q6)(g),ne.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(W.ZP,null)," ",_.N.formatMessage(E.Z.labelsRemediate))})))};ue.propTypes={advisoryName:m().string};const me=ue;var fe=r(83215);function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ve(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var pe=function(e){var t=e.match,r=(0,v.useDispatch)(),n=d().useState(t.params.advisoryId),u=(0,a.Z)(n,1)[0],m="".concat(u," - ").concat(_.N.formatMessage(E.Z.titlesAdvisories));(0,J.Iw)(m);var f=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore})),p=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){r((0,k.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){r((0,k.jl)()),r((0,k.JP)()),r((0,fe.L1)())}}),[]);var y=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(z.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:_.N.formatMessage(E.Z.titlesPatchAdvisories),to:V.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},p.hasError?d().createElement(Q.Z,null):d().createElement(U,{attributes:ve(ve({},y),{},{id:u}),isLoading:p.isLoading})),d().createElement(i.Z,null,d().createElement(s.K,{hasGutter:!0},d().createElement(l.v,null,d().createElement(c.D,null,d().createElement(o.xv,{component:o.qO.h2},_.N.formatMessage(E.Z.titlesAffectedSystems)))),d().createElement(l.v,null,p.hasError&&d().createElement($.Z,null)||!p.isLoading&&d().createElement(me,{advisoryName:u})))))};pe.propTypes={match:m().any};const Ee=(0,p.withRouter)(pe)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.8d53bdefc733f90a63fe.js.map