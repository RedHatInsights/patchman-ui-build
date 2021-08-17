(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{53661:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>Ee});var n=r(96156),a=r(28481),s=r(81159),o=r(34023),l=r(63540),c=r(20018),i=r(86350),u=r(45697),m=r.n(u),f=r(77865),d=r.n(f),v=r(61084),p=r(334),g=r(30893),E=r(6202),y=r(49287),b=r(18038),h=r(19210),S=r(35240),Z=r(53202),P=r(78826),O=r(32132),j=r(38776),w=r(90747),C=r(64270),N=r(9557),D=r(86032),_=r(57358),k=r(72573),M=function(e){var t=e.cveIds,r=(0,v.useDispatch)(),n=(0,f.useState)([]),s=(0,a.Z)(n,2),o=s[0],l=s[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],p=(0,f.useState)(1),E=(0,a.Z)(p,2),y=E[0],b=E[1],h=(0,f.useState)(10),S=(0,a.Z)(h,2),Z=S[0],M=S[1],A=(0,f.useState)(void 0),L=(0,a.Z)(A,2),F=L[0],x=L[1],T=(0,f.useState)({direction:k.SortByDirection.asc,index:0}),I=(0,a.Z)(T,2),R=I[0],q=I[1],B=(0,v.useSelector)((function(e){return e.CvesListStore.rows})),H=(0,v.useSelector)((function(e){return e.CvesListStore.status}));d().useEffect((function(){r((0,N.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(o.slice((y-1)*Z,y*Z))}),[o,y,Z,R]),(0,f.useMemo)((function(){var e=void 0!==F&&""!==F&&B.filter((function(e){var t=e.attributes.synopsis;return t&&F&&t.toLowerCase().includes(F.toLowerCase())}))||B;l((0,D.KW)((0!==e.length||F)&&e||B))}),[F,B]);var K=function(e){var t=e.search;b(y),x(t)};return d().createElement(d().Fragment,null,d().createElement(P.u_,{variant:"small",title:O.N.formatMessage(g.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(j.Z,{columns:C.g,onSetPage:function(e,t){b(t)},onPerPageSelect:function(e,t){b(1),M(t)},apply:K,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,r){var n=(0,_.Qg)(o,t,r),a=n.sortBy,s=n.sortedCves;q(a),l(s)},sortBy:R,store:{rows:u,metadata:{limit:Z,offset:(y-1)*Z,total_items:o&&o.length},status:H,queryParams:{filter:{},search:F}},filterConfig:{items:[(0,w.Z)(K,F,"",O.N.formatMessage(g.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};M.propTypes={cveIds:m().array};const A=M;var L=r(8896),F=r(36842),x=r(21508),T=function(e){var t=e.title,r=e.text,n=e.isLoading,a=e.content,s=e.color;return d().createElement(F.P,{className:"infobox",hasGutter:!0},d().createElement(Z.ZP,{variant:Z.x.skeleton,loading:n,size:"lg"},d().createElement(x.J,{style:{backgroundColor:s}},d().createElement(L.b,null,a)),d().createElement(x.J,{isFilled:!0},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h6},t),d().createElement(l.xv,{component:l.qO.p},r)))))};T.propTypes={title:m().string,text:m().any,isLoading:m().bool,content:m().any,color:m().string};const I=T;var R=r(149),q=r(83567),B=r(36001),H=r(42057),K=function(e){var t=e.severity;return d().createElement(R.J2,{position:"bottom",enableFlip:!0,headerContent:d().createElement("div",null,t.label+" severity"),bodyContent:d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.p},t.text)),footerContent:d().createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},d().createElement(B.k,null,d().createElement(H.B,{spacer:{default:"spacerSm"}},d().createElement(q.ZP,null)),d().createElement(H.B,{spacer:{default:"spacerSm"}},O.N.formatMessage(g.Z.linksSearchSecurityRatings))))},d().createElement("a",null,O.N.formatMessage(g.Z.linksLearnMore)))};K.propTypes={severity:m().object};const U=K;var z=r(55970),G=function(e){var t,r=e.attributes,n=e.isLoading,i=(0,f.useState)((function(){return function(){return null}})),u=(0,a.Z)(i,2),m=u[0],v=u[1],p=(0,_.r)(r.severity),P=r.cves;return d().createElement(y.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(b.P,{md:8,sm:12},d().createElement(Z.ZP,{loading:n,variant:Z.x.spinner,centered:!0},d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null),d().createElement(o.v,{style:{whiteSpace:"pre-line"}},(0,_.J1)(r.description)),d().createElement(o.v,null,r.public_date&&d().createElement(d().Fragment,null,O.N.formatMessage(g.Z.labelsPublicDate,{date:(0,S.Un)(r.public_date)}),d().createElement("br",null)),r.modified_date&&d().createElement(d().Fragment,null,O.N.formatMessage(g.Z.labelsModifiedDate,{date:(0,S.Un)(r.modified_date)}))),(t=r.id,/^(RHEA|RHBA|RHSA)/.test(t)&&d().createElement(o.v,null,d().createElement(z.Z,{link:"https://access.redhat.com/errata/".concat(r.id),text:O.N.formatMessage(g.Z.linksViewPackagesAndErrata)})))))),d().createElement(b.P,{md:4,sm:12},0!==p.value&&d().createElement(I,{isLoading:n,title:p.label,color:p.color,text:d().createElement(U,{severity:p}),content:d().createElement(h.ZP,{size:"lg"})})),P&&0!==P.length&&d().createElement(b.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h3},O.N.formatMessage(g.Z.labelsCves)),d().createElement(E.Button,{variant:"link",style:{padding:0},onClick:function(){v((function(){return function(){return d().createElement(A,{cveIds:P})}}))}},O.N.formatMessage(g.Z.labelsCvesButton,{cvesCount:P.length})))),d().createElement(m,null))};G.propTypes={attributes:m().object,isLoading:m().bool};const J=G;var Q=r(49642),V=r(20167),W=r(60076),Y=r(91607),X=r(61829),$=r(33739),ee=r(4777),te=r(5747),re=r(11220),ne=r(13784),ae=r(94859),se=r(20259),oe=r(58684),le=r(73888),ce=r(49629);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me=function(e){var t=e.advisoryName,r=(0,v.useDispatch)(),n=d().useState((function(){return function(){return null}})),s=(0,a.Z)(n,2),o=s[0],l=s[1],c=(0,p.useHistory)(),i=(0,_.PZ)(c.location.search),u=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),m=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),E=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),y=(0,v.useSelector)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),b=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),h=y.systemProfile,S=y.selectedTags,Z=y.filter,P=y.search,j=y.page,C=y.perPage,D=y.sort;function M(e){r((0,N.pH)(e))}d().useEffect((function(){return M(i),function(){r((0,N.RV)()),r((0,N.Yf)())}}),[]);var A=(0,Y.j5)({search:P},M),L=(0,a.Z)(A,1)[0],F={items:[(0,w.Z)(M,P,O.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),O.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder))]},x={filters:(0,_.mt)(Z,P),onDelete:L},T=function(e){l((function(){return function(){return d().createElement(se.Z,{data:e})}}))},I=(0,Y.ry)(u,b,(function(){return(0,re.cK)(ue(ue({},y),{},{id:t,limit:-1})).then(_.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),R=b&&(0,_.Qy)(b).length,q=(0,Y.U)(re.cK,M,{id:t},c),B=(0,Y.AR)(t,y,{csv:re.nb,json:re.Se},r);return d().createElement(d().Fragment,null,m.hasError&&d().createElement(le.Z,{code:m.code})||d().createElement($.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:P,filter:Z,systemProfile:h,selectedTags:S}},onLoad:function(e){var t=e.mergeWithEntities;(0,ee.z)(ue({},t((0,te.Kq)(oe.Fs,te.G),(0,_.fm)({page:j,perPage:C,sort:D,search:P},i))))},getEntities:q,actions:(0,oe.Sb)(T),tableProps:{canSelectAll:!1,variant:k.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0}},"   ",d().createElement(f.Fragment,null,void 0!==m.isLoading&&d().createElement(ce.Z,{className:"patch-systems-primary-toolbar",filterConfig:F,activeFiltersConfig:x,exportConfig:{isDisabled:0===E,onSelect:B},bulkSelect:I&&(0,Y.Pz)(R,I,{total_items:E},u),dedicatedAction:d().createElement(ae.Z,{isDisabled:0===(0,_.Qy)(b).length,onClick:function(){return T((0,_.MS)(t,(0,_.Q6)(b),ne.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(X.ZP,null)," ",O.N.formatMessage(g.Z.labelsRemediate))}),d().createElement(o,null))))};me.propTypes={advisoryName:m().string};const fe=me;var de=r(83215);function ve(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ve(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ge=function(e){var t=e.match,r=(0,v.useDispatch)(),n=d().useState(t.params.advisoryId),u=(0,a.Z)(n,1)[0],m="".concat(u," - ").concat(O.N.formatMessage(g.Z.titlesAdvisories));(0,Y.Iw)(m);var f=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore})),p=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){r((0,N.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){r((0,N.jl)()),r((0,N.JP)()),r((0,de.L1)())}}),[]);var E=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(Q.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:O.N.formatMessage(g.Z.titlesPatchAdvisories),to:W.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},p.hasError?d().createElement(V.Z,null):d().createElement(J,{attributes:pe(pe({},E),{},{id:u}),isLoading:p.isLoading})),d().createElement(i.Z,null,d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null,d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h2},O.N.formatMessage(g.Z.titlesAffectedSystems)))),d().createElement(o.v,null,p.hasError&&d().createElement(le.Z,null)||d().createElement(fe,{advisoryName:u})))))};ge.propTypes={match:m().any};const Ee=(0,p.withRouter)(ge)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.8d76a2e2a3f6ceb59f74.js.map