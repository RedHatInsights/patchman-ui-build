(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{53661:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ge});var n=r(96156),a=r(28481),s=r(81159),o=r(34023),l=r(63540),c=r(20018),i=r(86350),u=r(45697),m=r.n(u),f=r(77865),d=r.n(f),p=r(61084),v=r(334),g=r(30893),E=r(49287),y=r(18038),b=r(19210),h=r(35240),S=r(53202),Z=r(57358),P=r(8896),O=r(36842),j=r(21508),w=function(e){var t=e.title,r=e.text,n=e.isLoading,a=e.content,s=e.color;return d().createElement(O.P,{className:"infobox",hasGutter:!0},d().createElement(S.ZP,{variant:S.x.skeleton,loading:n,size:"lg"},d().createElement(j.J,{style:{backgroundColor:s}},d().createElement(P.b,null,a)),d().createElement(j.J,{isFilled:!0},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h6},t),d().createElement(l.xv,{component:l.qO.p},r)))))};w.propTypes={title:m().string,text:m().any,isLoading:m().bool,content:m().any,color:m().string};const C=w;var N=r(149),D=r(83567),_=r(36001),k=r(42057),M=r(32132),L=function(e){var t=e.severity;return d().createElement(N.J2,{position:"bottom",enableFlip:!0,headerContent:d().createElement("div",null,t.label+" severity"),bodyContent:d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.p},t.text)),footerContent:d().createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},d().createElement(_.k,null,d().createElement(k.B,{spacer:{default:"spacerSm"}},d().createElement(D.ZP,null)),d().createElement(k.B,{spacer:{default:"spacerSm"}},M.N.formatMessage(g.Z.linksSearchSecurityRatings))))},d().createElement("a",null,M.N.formatMessage(g.Z.linksLearnMore)))};L.propTypes={severity:m().object};const F=L;var x=r(55970),A=r(6202),T=r(78826),I=r(38776),q=r(90747),B=r(64270),R=r(9557),H=r(86032),K=r(72573),U=function(e){var t=e.cveIds,r=(0,p.useDispatch)(),n=(0,f.useState)([]),s=(0,a.Z)(n,2),o=s[0],l=s[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],v=(0,f.useState)(1),E=(0,a.Z)(v,2),y=E[0],b=E[1],h=(0,f.useState)(10),S=(0,a.Z)(h,2),P=S[0],O=S[1],j=(0,f.useState)(void 0),w=(0,a.Z)(j,2),C=w[0],N=w[1],D=(0,f.useState)({direction:K.SortByDirection.asc,index:0}),_=(0,a.Z)(D,2),k=_[0],L=_[1],F=(0,p.useSelector)((function(e){return e.CvesListStore.rows})),x=(0,p.useSelector)((function(e){return e.CvesListStore.status}));d().useEffect((function(){r((0,R.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(o.slice((y-1)*P,y*P))}),[o,y,P,k]),(0,f.useMemo)((function(){var e=void 0!==C&&""!==C&&F.filter((function(e){var t=e.attributes.synopsis;return t&&C&&t.toLowerCase().includes(C.toLowerCase())}))||F;l((0,H.KW)((0!==e.length||C)&&e||F))}),[C,F]);var A=function(e){var t=e.search;b(y),N(t)};return d().createElement(d().Fragment,null,d().createElement(T.u_,{variant:"small",title:M.N.formatMessage(g.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(I.Z,{columns:B.g,onSetPage:function(e,t){b(t)},onPerPageSelect:function(e,t){b(1),O(t)},apply:A,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,r){var n=(0,Z.Qg)(o,t,r),a=n.sortBy,s=n.sortedCves;L(a),l(s)},sortBy:k,store:{rows:u,metadata:{limit:P,offset:(y-1)*P,total_items:o&&o.length},status:x,queryParams:{filter:{},search:C}},filterConfig:{items:[(0,q.Z)(A,C,"",M.N.formatMessage(g.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};U.propTypes={cveIds:m().array};const z=U;var G=function(e){var t=e.attributes,r=e.isLoading,n=(0,f.useState)((function(){return function(){return null}})),i=(0,a.Z)(n,2),u=i[0],m=i[1],p=(0,Z.r)(t.severity),v=t.cves;return d().createElement(E.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(y.P,{md:8,sm:12},d().createElement(S.ZP,{loading:r,variant:S.x.spinner,centered:!0},d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null),d().createElement(o.v,{style:{whiteSpace:"pre-line"}},(0,Z.J1)(t.description)),d().createElement(o.v,null,t.public_date&&d().createElement(d().Fragment,null,M.N.formatMessage(g.Z.labelsPublicDate,{date:(0,h.Un)(t.public_date)}),d().createElement("br",null)),t.modified_date&&d().createElement(d().Fragment,null,M.N.formatMessage(g.Z.labelsModifiedDate,{date:(0,h.Un)(t.modified_date)}))),d().createElement(o.v,null,d().createElement(x.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:M.N.formatMessage(g.Z.linksViewPackagesAndErrata)}))))),d().createElement(y.P,{md:4,sm:12},0!==p.value&&d().createElement(C,{isLoading:r,title:p.label,color:p.color,text:d().createElement(F,{severity:p}),content:d().createElement(b.ZP,{size:"lg"})})),v&&0!==v.length&&d().createElement(y.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h3},M.N.formatMessage(g.Z.labelsCves)),d().createElement(A.Button,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return d().createElement(z,{cveIds:v})}}))}},M.N.formatMessage(g.Z.labelsCvesButton,{cvesCount:v.length})))),d().createElement(u,null))};G.propTypes={attributes:m().object,isLoading:m().bool};const J=G;var Q=r(49642),V=r(20167),W=r(60076),X=r(91607),Y=r(61829),$=r(33739),ee=r(4777),te=r(5747),re=r(11220),ne=r(13784),ae=r(94859),se=r(20259),oe=r(58684),le=r(73888),ce=r(49629);function ie(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ue(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ie(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var me=function(e){var t=e.advisoryName,r=(0,p.useDispatch)(),n=d().useState((function(){return function(){return null}})),s=(0,a.Z)(n,2),o=s[0],l=s[1],c=(0,v.useHistory)(),i=(0,Z.PZ)(c.location.search),u=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),p.shallowEqual),m=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),E=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),y=(0,p.useSelector)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),b=(0,p.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),h=y.systemProfile,S=y.selectedTags,P=y.filter,O=y.search,j=y.page,w=y.perPage,C=y.sort;function N(e){r((0,R.pH)(e))}d().useEffect((function(){return N(i),function(){return r((0,R.RV)())}}),[]);var D=(0,X.j5)({search:O},N),_=(0,a.Z)(D,1)[0],k={items:[(0,q.Z)(N,O,M.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),M.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder))]},L={filters:(0,Z.mt)(P,O),onDelete:_},F=function(e){l((function(){return function(){return d().createElement(se.Z,{data:e})}}))},x=(0,X.ry)(u,b,(function(){return(0,re.cK)(ue(ue({},y),{},{id:t,limit:-1})).then(Z.zw)}),(function(e){r({type:"SELECT_ENTITY",payload:e})})),A=b&&(0,Z.Qy)(b).length,T=(0,X.U)(re.cK,N,{id:t},c),I=(0,X.AR)(t,y,{csv:re.nb,json:re.Se},r);return d().createElement(d().Fragment,null,m.hasError&&d().createElement(le.Z,{code:m.code})||d().createElement($.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:O,filter:P,systemProfile:h,selectedTags:S}},onLoad:function(e){var t=e.mergeWithEntities;(0,ee.z)(ue({},t((0,te.Kq)(oe.Fs,te.G),(0,Z.fm)({page:j,perPage:w,sort:C,search:O},i))))},getEntities:T,actions:(0,oe.Sb)(F),tableProps:{canSelectAll:!1,variant:K.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0}},"   ",d().createElement(f.Fragment,null,void 0!==m.isLoading&&d().createElement(ce.Z,{className:"patch-systems-primary-toolbar",filterConfig:k,activeFiltersConfig:L,exportConfig:{isDisabled:0===E,onSelect:I},bulkSelect:x&&(0,X.Pz)(A,x,{total_items:E},u),dedicatedAction:d().createElement(ae.Z,{isDisabled:0===(0,Z.Qy)(b).length,onClick:function(){return F((0,Z.MS)(t,(0,Z.Q6)(b),ne.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(Y.ZP,null)," ",M.N.formatMessage(g.Z.labelsRemediate))}),d().createElement(o,null))))};me.propTypes={advisoryName:m().string};const fe=me;function de(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function pe(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?de(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):de(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ve=function(e){var t=e.match,r=(0,p.useDispatch)(),n=d().useState(t.params.advisoryId),u=(0,a.Z)(n,1)[0],m="".concat(u," - ").concat(M.N.formatMessage(g.Z.titlesAdvisories));(0,X.Iw)(m);var f=(0,p.useSelector)((function(e){return e.AdvisoryDetailStore})),v=(0,p.useSelector)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){r((0,R.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){r((0,R.jl)()),r((0,R.JP)())}}),[]);var E=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(Q.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:M.N.formatMessage(g.Z.titlesPatchAdvisories),to:W.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?d().createElement(V.Z,null):d().createElement(J,{attributes:pe(pe({},E),{},{id:u}),isLoading:v.isLoading})),d().createElement(i.Z,null,d().createElement(s.K,{hasGutter:!0},d().createElement(o.v,null,d().createElement(c.D,null,d().createElement(l.xv,{component:l.qO.h2},M.N.formatMessage(g.Z.titlesAffectedSystems)))),d().createElement(o.v,null,d().createElement(fe,{advisoryName:u})))))};ve.propTypes={match:m().any};const ge=(0,v.withRouter)(ve)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.f2ae2ef867047b03c91c.js.map