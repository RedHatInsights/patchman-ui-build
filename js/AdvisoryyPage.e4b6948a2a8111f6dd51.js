(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{53661:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>pe});var r=n(96156),a=n(28481),s=n(81159),o=n(34023),l=n(63540),c=n(20018),i=n(86350),u=n(45697),m=n.n(u),f=n(77865),d=n.n(f),v=n(61084),p=n(334),g=n(30893),E=n(49287),b=n(18038),y=n(19210),h=n(35240),S=n(53202),Z=n(57358),O=n(8896),P=n(36842),j=n(21508),w=function(e){var t=e.title,n=e.text,r=e.isLoading,a=e.content,s=e.color;return d().createElement(P.P,{className:"infobox",hasGutter:!0},d().createElement(S.ZP,{variant:S.x.skeleton,loading:r,size:"lg"},d().createElement(j.J,{style:{backgroundColor:s}},d().createElement(O.b,null,a)),d().createElement(j.J,{isFilled:!0},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h6},t),d().createElement(l.xv,{component:l.qO.p},n)))))};w.propTypes={title:m().string,text:m().any,isLoading:m().bool,content:m().any,color:m().string};const C=w;var D=n(149),N=n(83567),_=n(36001),k=n(42057),M=n(32132),L=function(e){var t=e.severity;return d().createElement(D.J2,{position:"bottom",enableFlip:!0,headerContent:d().createElement("div",null,t.label+" severity"),bodyContent:d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.p},t.text)),footerContent:d().createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},d().createElement(_.k,null,d().createElement(k.B,{spacer:{default:"spacerSm"}},d().createElement(N.ZP,null)),d().createElement(k.B,{spacer:{default:"spacerSm"}},M.N.formatMessage(g.Z.linksSearchSecurityRatings))))},d().createElement("a",null,M.N.formatMessage(g.Z.linksLearnMore)))};L.propTypes={severity:m().object};const x=L;var A=n(55970),F=n(6202),T=n(78826),I=n(38776),q=n(90747),B=n(64270),R=n(9557),U=n(86032),K=n(72573),z=function(e){var t=e.cveIds,n=(0,v.useDispatch)(),r=(0,f.useState)([]),s=(0,a.Z)(r,2),o=s[0],l=s[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],p=(0,f.useState)(1),E=(0,a.Z)(p,2),b=E[0],y=E[1],h=(0,f.useState)(10),S=(0,a.Z)(h,2),O=S[0],P=S[1],j=(0,f.useState)(void 0),w=(0,a.Z)(j,2),C=w[0],D=w[1],N=(0,f.useState)({direction:K.SortByDirection.asc,index:0}),_=(0,a.Z)(N,2),k=_[0],L=_[1],x=(0,v.useSelector)((function(e){return e.CvesListStore.rows})),A=(0,v.useSelector)((function(e){return e.CvesListStore.status}));d().useEffect((function(){n((0,R.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(o.slice((b-1)*O,b*O))}),[o,b,O,k]),(0,f.useMemo)((function(){var e=void 0!==C&&""!==C&&x.filter((function(e){var t=e.attributes.synopsis;return t&&C&&t.toLowerCase().includes(C.toLowerCase())}))||x;l((0,U.KW)((0!==e.length||C)&&e||x))}),[C,x]);var F=function(e){var t=e.search;y(b),D(t)};return d().createElement(d().Fragment,null,d().createElement(T.u_,{variant:"small",title:M.N.formatMessage(g.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(I.Z,{columns:B.g,onSetPage:function(e,t){y(t)},onPerPageSelect:function(e,t){y(1),P(t)},apply:F,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,n){var r=(0,Z.Qg)(o,t,n),a=r.sortBy,s=r.sortedCves;L(a),l(s)},sortBy:k,store:{rows:u,metadata:{limit:O,offset:(b-1)*O,total_items:o&&o.length},status:A,queryParams:{filter:{},search:C}},filterConfig:{items:[(0,q.Z)(F,C,"",M.N.formatMessage(g.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};z.propTypes={cveIds:m().array};const G=z;var H=function(e){var t=e.attributes,n=e.isLoading,r=(0,f.useState)((function(){return function(){return null}})),i=(0,a.Z)(r,2),u=i[0],m=i[1],v=(0,Z.r)(t.severity),p=t.cves;return d().createElement(E.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(b.P,{md:8,sm:12},d().createElement(S.ZP,{loading:n,variant:S.x.spinner,centered:!0},d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null),d().createElement(o.v,{style:{whiteSpace:"pre-line"}},(0,Z.J1)(t.description)),d().createElement(o.v,null,t.public_date&&d().createElement(d().Fragment,null,M.N.formatMessage(g.Z.labelsPublicDate,{date:(0,h.Un)(t.public_date)}),d().createElement("br",null)),t.modified_date&&d().createElement(d().Fragment,null,M.N.formatMessage(g.Z.labelsModifiedDate,{date:(0,h.Un)(t.modified_date)}))),d().createElement(o.v,null,d().createElement(A.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:M.N.formatMessage(g.Z.linksViewPackagesAndErrata)}))))),d().createElement(b.P,{md:4,sm:12},0!==v.value&&d().createElement(C,{isLoading:n,title:v.label,color:v.color,text:d().createElement(x,{severity:v}),content:d().createElement(y.ZP,{size:"lg"})})),p&&0!==p.length&&d().createElement(b.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h3},M.N.formatMessage(g.Z.labelsCves)),d().createElement(F.Button,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return d().createElement(G,{cveIds:p})}}))}},M.N.formatMessage(g.Z.labelsCvesButton,{cvesCount:p.length})))),d().createElement(u,null))};H.propTypes={attributes:m().object,isLoading:m().bool};const J=H;var Q=n(49642),V=n(20167),W=n(71198),X=n(91607),Y=n(61829),$=n(33739),ee=n(17915),te=n(5747),ne=n(11220),re=n(13784),ae=n(94859),se=n(20259),oe=n(58684),le=n(73888);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){var t=e.advisoryName,n=(0,v.useDispatch)(),r=d().useState((function(){return function(){return null}})),s=(0,a.Z)(r,2),o=s[0],l=s[1],c=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),i=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),u=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),m=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),f=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),p=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.affectedSystemsParams)||{}})),E=f.systemProfile,b=f.selectedTags,y=p.filter,h=p.search,S=p.page,O=p.perPage,P=p.sort;function j(e){n((0,R.pH)(e))}d().useEffect((function(){return function(){return n((0,R.A0)())}}),[]);var w=(0,X.j5)({search:h},j),C=(0,a.Z)(w,1)[0],D={items:[(0,q.Z)(j,h,M.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),M.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder))]},N={filters:(0,Z.mt)(y,h),onDelete:C},_=function(e){l((function(){return function(){return d().createElement(se.Z,{data:e})}}))},k=(0,X.ry)(c,u,(function(){return(0,ne.cK)(ie(ie({},f),{},{id:t,limit:-1})).then(Z.zw)}),(function(e){n({type:"SELECT_ENTITY",payload:e})})),L=u&&(0,Z.Qy)(u).length,x=(0,X.U)(ne.cK,j,{id:t}),A=(0,X.AR)(t,f,{csv:ne.nb,json:ne.Se},n);return d().createElement(d().Fragment,null,i.hasError&&d().createElement(le.Z,{code:i.code})||d().createElement($.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:h,filter:y,systemProfile:E,selectedTags:b}},onLoad:function(e){var t=e.mergeWithEntities;(0,ee.z)(ie({},t((0,te.Kq)(oe.Fs,te.G),(0,Z.fm)(S,O,P))))},exportConfig:{isDisabled:0===m,onSelect:A},getEntities:x,actions:(0,oe.Sb)(_),tableProps:{canSelectAll:!1,variant:K.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:D,activeFiltersConfig:N,bulkSelect:k&&(0,X.Pz)(L,k,{total_items:m},c),dedicatedAction:d().createElement(ae.Z,{isDisabled:0===(0,Z.Qy)(u).length,onClick:function(){return _((0,Z.MS)(t,(0,Z.UZ)(u),re.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(Y.ZP,null)," ",M.N.formatMessage(g.Z.labelsRemediate))},d().createElement(o,null)))};ue.propTypes={advisoryName:m().string};const me=ue;function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=function(e){var t=e.match,n=(0,v.useDispatch)(),r=d().useState(t.params.advisoryId),u=(0,a.Z)(r,1)[0],m="".concat(u," - ").concat(M.N.formatMessage(g.Z.titlesAdvisories));(0,X.Iw)(m);var f=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore})),p=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){n((0,R.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){n((0,R.jl)()),n((0,R.JP)())}}),[]);var E=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(Q.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:M.N.formatMessage(g.Z.titlesPatchAdvisories),to:W.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},p.hasError?d().createElement(V.Z,null):d().createElement(J,{attributes:de(de({},E),{},{id:u}),isLoading:p.isLoading})),d().createElement(i.Z,null,d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null,d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h2},M.N.formatMessage(g.Z.titlesAffectedSystems)))),d().createElement(o.v,null,d().createElement(me,{advisoryName:u})))))};ve.propTypes={match:m().any};const pe=(0,p.withRouter)(ve)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.cb7c6c10585ea4bb67e5.js.map