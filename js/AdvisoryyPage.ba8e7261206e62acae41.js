(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[60],{53661:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>pe});var r=n(96156),a=n(28481),o=n(81159),l=n(34023),s=n(63540),c=n(20018),i=n(86350),u=n(45697),m=n.n(u),f=n(77865),d=n.n(f),v=n(61084),p=n(334),E=n(30893),g=n(49287),b=n(18038),y=n(19210),h=n(35240),S=n(53202),Z=n(57358),O=n(8896),P=n(36842),j=n(21508),w=function(e){var t=e.title,n=e.text,r=e.isLoading,a=e.content,o=e.color;return d().createElement(P.P,{className:"infobox",hasGutter:!0},d().createElement(S.ZP,{variant:S.x.skeleton,loading:r,size:"lg"},d().createElement(j.J,{style:{backgroundColor:o}},d().createElement(O.b,null,a)),d().createElement(j.J,{isFilled:!0},d().createElement(c.D,null,d().createElement(s.xv,{component:s.qO.h6},t),d().createElement(s.xv,{component:s.qO.p},n)))))};w.propTypes={title:m().string,text:m().any,isLoading:m().bool,content:m().any,color:m().string};const C=w;var N=n(149),D=n(83567),_=n(36001),k=n(42057),M=n(32132),L=function(e){var t=e.severity;return d().createElement(N.J2,{position:"bottom",enableFlip:!0,headerContent:d().createElement("div",null,t.label+" severity"),bodyContent:d().createElement(c.D,null,d().createElement(s.xv,{component:s.qO.p},t.text)),footerContent:d().createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},d().createElement(_.k,null,d().createElement(k.B,{spacer:{default:"spacerSm"}},d().createElement(D.ZP,null)),d().createElement(k.B,{spacer:{default:"spacerSm"}},M.N.formatMessage(E.Z.linksSearchSecurityRatings))))},d().createElement("a",null,M.N.formatMessage(E.Z.linksLearnMore)))};L.propTypes={severity:m().object};const F=L;var x=n(55970),A=n(6202),I=n(78826),T=n(38776),q=n(90747),B=n(64270),U=n(9557),K=n(86032),R=n(72573),J=function(e){var t=e.cveIds,n=(0,v.useDispatch)(),r=(0,f.useState)([]),o=(0,a.Z)(r,2),l=o[0],s=o[1],c=(0,f.useState)([]),i=(0,a.Z)(c,2),u=i[0],m=i[1],p=(0,f.useState)(1),g=(0,a.Z)(p,2),b=g[0],y=g[1],h=(0,f.useState)(10),S=(0,a.Z)(h,2),O=S[0],P=S[1],j=(0,f.useState)(void 0),w=(0,a.Z)(j,2),C=w[0],N=w[1],D=(0,f.useState)({direction:R.SortByDirection.asc,index:0}),_=(0,a.Z)(D,2),k=_[0],L=_[1],F=(0,v.useSelector)((function(e){return e.CvesListStore.rows})),x=(0,v.useSelector)((function(e){return e.CvesListStore.status}));d().useEffect((function(){n((0,U.Xt)({cveIds:t}))}),[]),d().useMemo((function(){m(l.slice((b-1)*O,b*O))}),[l,b,O,k]),(0,f.useMemo)((function(){var e=void 0!==C&&""!==C&&F.filter((function(e){var t=e.attributes.synopsis;return t&&C&&t.toLowerCase().includes(C.toLowerCase())}))||F;s((0,K.KW)((0!==e.length||C)&&e||F))}),[C,F]);var A=function(e){var t=e.search;y(b),N(t)};return d().createElement(d().Fragment,null,d().createElement(I.u_,{variant:"small",title:M.N.formatMessage(E.Z.labelsCves),isOpen:Boolean(u),onClose:function(){m(void 0)}},d().createElement(T.Z,{columns:B.g,onSetPage:function(e,t){y(t)},onPerPageSelect:function(e,t){y(1),P(t)},apply:A,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,n){var r=(0,Z.Qg)(l,t,n),a=r.sortBy,o=r.sortedCves;L(a),s(o)},sortBy:k,store:{rows:u,metadata:{limit:O,offset:(b-1)*O,total_items:l&&l.length},status:x,queryParams:{filter:{},search:C}},filterConfig:{items:[(0,q.Z)(A,C,"",M.N.formatMessage(E.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};J.propTypes={cveIds:m().array};const z=J;var G=function(e){var t=e.attributes,n=e.isLoading,r=(0,f.useState)((function(){return function(){return null}})),i=(0,a.Z)(r,2),u=i[0],m=i[1],v=(0,Z.r)(t.severity),p=t.cves;return d().createElement(g.r,{hasGutter:!0,style:{minHeight:150}},d().createElement(b.P,{md:8,sm:12},d().createElement(S.ZP,{loading:n,variant:S.x.spinner,centered:!0},d().createElement(o.K,{hasGutter:!0},d().createElement(l.v,null),d().createElement(l.v,{style:{whiteSpace:"pre-line"}},(0,Z.J1)(t.description)),d().createElement(l.v,null,t.public_date&&d().createElement(d().Fragment,null,M.N.formatMessage(E.Z.labelsPublicDate,{date:(0,h.Un)(t.public_date)}),d().createElement("br",null)),t.modified_date&&d().createElement(d().Fragment,null,M.N.formatMessage(E.Z.labelsModifiedDate,{date:(0,h.Un)(t.modified_date)}))),d().createElement(l.v,null,d().createElement(x.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:M.N.formatMessage(E.Z.linksViewPackagesAndErrata)}))))),d().createElement(b.P,{md:4,sm:12},0!==v.value&&d().createElement(C,{isLoading:n,title:v.label,color:v.color,text:d().createElement(F,{severity:v}),content:d().createElement(y.ZP,{size:"lg"})})),p&&0!==p.length&&d().createElement(b.P,{md:4,sm:12},d().createElement(c.D,null,d().createElement(s.xv,{component:s.qO.h3},M.N.formatMessage(E.Z.labelsCves)),d().createElement(A.Button,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return d().createElement(z,{cveIds:p})}}))}},M.N.formatMessage(E.Z.labelsCvesButton,{cvesCount:p.length})))),d().createElement(u,null))};G.propTypes={attributes:m().object,isLoading:m().bool};const H=G;var Q=n(49642),V=n(20167),W=n(71198),X=n(91607),Y=n(61829),$=n(33739),ee=n(67396),te=n(5747),ne=n(11220),re=n(13784),ae=n(94859),oe=n(20259),le=n(58684),se=n(73888);function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){var t=e.advisoryName,n=(0,v.useDispatch)(),r=d().useState((function(){return function(){return null}})),o=(0,a.Z)(r,2),l=o[0],s=o[1],c=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),i=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),u=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),m=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),f=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),p=f.filter,g=f.search;function b(e){n((0,U.jS)(e))}d().useEffect((function(){return function(){return n((0,U.jl)())}}),[]);var y=(0,X.j5)({search:g},b),h=(0,a.Z)(y,1)[0],S={items:[(0,q.Z)(b,g,M.N.formatMessage(E.Z.labelsFiltersSystemsSearchTitle),M.N.formatMessage(E.Z.labelsFiltersSystemsSearchPlaceholder))]},O={filters:(0,Z.mt)(p,g),onDelete:h},P=function(e){s((function(){return function(){return d().createElement(oe.Z,{data:e})}}))},j=(0,X.ry)(c,u,(function(){return(0,ne.cK)(ie(ie({},f),{},{id:t,limit:-1}))}),(function(e){n({type:"SELECT_ENTITY",payload:e})})),w=u&&(0,Z.Qy)(u).length,C=(0,X.U)(ne.cK,b,t);return d().createElement(d().Fragment,null,i.hasError&&d().createElement(se.Z,{code:i.code})||d().createElement($.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0},customFilters:{patchParams:{search:g,filter:p}},onLoad:function(e){var t=e.mergeWithEntities;(0,ee.z)(ie({},t((0,te.Kq)(le.Fs),te.E3)))},getEntities:C,actions:(0,le.Sb)(P),tableProps:{canSelectAll:!1,variant:R.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:S,activeFiltersConfig:O,bulkSelect:j&&(0,X.Pz)(w,j,{total_items:m},c),dedicatedAction:d().createElement(ae.Z,{isDisabled:0===(0,Z.Qy)(u).length,onClick:function(){return P((0,Z.MS)(t,(0,Z.UZ)(u),re.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:!1},d().createElement(Y.ZP,null)," ",M.N.formatMessage(E.Z.labelsRemediate))},d().createElement(l,null)))};ue.propTypes={advisoryName:m().string};const me=ue;function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function de(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ve=function(e){var t=e.match,n=(0,v.useDispatch)(),r=d().useState(t.params.advisoryId),u=(0,a.Z)(r,1)[0],m="".concat(u," - ").concat(M.N.formatMessage(E.Z.titlesAdvisories));(0,X.Iw)(m);var f=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore})),p=(0,v.useSelector)((function(e){return e.AdvisoryDetailStore.status}));d().useEffect((function(){n((0,U.N2)({advisoryName:u}))}),[]),d().useEffect((function(){return function(){n((0,U.jl)()),n((0,U.JP)())}}),[]);var g=f.data.attributes;return d().createElement(d().Fragment,null,d().createElement(Q.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:M.N.formatMessage(E.Z.titlesPatchAdvisories),to:W.H.advisories.to,isActive:!1},{title:u,isActive:!0}]},p.hasError?d().createElement(V.Z,null):d().createElement(H,{attributes:de(de({},g),{},{id:u}),isLoading:p.isLoading})),d().createElement(i.Z,null,d().createElement(o.K,{hasGutter:!0},d().createElement(l.v,null,d().createElement(c.D,null,d().createElement(s.xv,{component:s.qO.h2},M.N.formatMessage(E.Z.titlesAffectedSystems)))),d().createElement(l.v,null,d().createElement(me,{advisoryName:u})))))};ve.propTypes={match:m().any};const pe=(0,p.withRouter)(ve)}}]);
//# sourceMappingURL=../sourcemaps/AdvisoryyPage.6bd22b0135be6708b470.js.map