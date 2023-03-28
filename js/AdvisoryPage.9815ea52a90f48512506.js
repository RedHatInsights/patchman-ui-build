"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[423],{83905:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(93433),a=n(29439),l=n(43297),s=n(28216),c=n(54025),i=n(11220);const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),o=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded})),u=(0,l.useState)([]),m=(0,a.Z)(u,2),d=m[0],f=m[1],v=(0,c.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),p=(0,a.Z)(v,1),y=p[0],E=(y=void 0===y?{}:y).toGroupSelectionValue,b=y.buildOSFilterConfig;(0,l.useEffect)((function(){void 0!==n&&void 0!==o||(0,i.GB)().then((function(e){var t=e.results;f((t||[]).map((function(e){var t=e.value,n=t.name,r=t.major,a=t.minor,l="".concat(r,".").concat(a);return{label:"".concat(n," ").concat(l),value:"".concat(l)}})))}))}),[]),(0,l.useEffect)((function(){!0===o&&f(n)}),[o]);var g=(""===e?[]:e.split(",")).map((function(e){return e.substring(5)}));return(0,r.Z)(b?[b({id:"rhel_version",value:E(g),onChange:function(e,n){var r=Object.values(n).flatMap((function(e){return Object.keys(e)})).map((function(e){return"RHEL ".concat(e)})).toString();t({filter:{os:r}})}},d)]:[])}},34951:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ye});var r=n(4942),a=n(29439),l=n(49739),s=n(83826),c=n(68340),i=n(68774),o=n(14748),u=n(45697),m=n.n(u),d=n(43297),f=n.n(d),v=n(28216),p=n(334),y=n(30893),E=n(47173),b=n(50693),g=n(16475),h=n(92298),O=n(28191),Z=n(79851),P=n(34512),S=n(38779),j=n(35240),_=n(81469),w=n(5391),N=n(32132),k=n(7665),D=n(27578),M=function(e){var t=e.severity;return f().createElement(Z.P,{className:"infobox",hasGutter:!0},f().createElement(P.J,{isFilled:!0},f().createElement(O.k,{flex:{default:"column"}},f().createElement(h.B,{spacer:{default:"spacerNone"}},f().createElement(S.D,{headingLevel:"h5"},N.N.formatMessage(y.Z.labelsColumnsSeverity))),f().createElement(h.B,{spacer:{default:"spacerSm"}},f().createElement(O.k,{flex:{default:"row"}},f().createElement(h.B,null,f().createElement(D.ZP,{size:"sm",color:t.color})),f().createElement(h.B,null,t.label))))))};M.propTypes={severity:m().object};const F=M;var A=n(55970),x=n(18464),B=(0,d.lazy)((function(){return Promise.all([n.e(9098),n.e(4854),n.e(3935),n.e(3962),n.e(236),n.e(9630)]).then(n.bind(n,71309))})),C=function(e){var t=e.attributes,n=e.isLoading,r=(0,d.useState)((function(){return function(){return null}})),o=(0,a.Z)(r,2),u=o[0],m=o[1],v=(0,d.useState)(1e3),p=(0,a.Z)(v,2),D=p[0],M=p[1],C=(0,w.r)(t.severity),R=t.cves;return f().createElement(b.r,{hasGutter:!0,style:{minHeight:150}},f().createElement(g.P,{md:8,sm:12},f().createElement(_.ZP,{loading:n,variant:_.x.spinner,centered:!0},f().createElement(l.K,{hasGutter:!0},f().createElement(s.v,null),f().createElement(s.v,{style:{whiteSpace:"pre-line"}},t.description&&(0,w.Nt)(t.description,D,M)),f().createElement(s.v,null,t.public_date&&f().createElement(f().Fragment,null,N.N.formatMessage(y.Z.labelsPublicDate,{date:(0,j.Un)(t.public_date)}),f().createElement("br",null)),t.modified_date&&f().createElement(f().Fragment,null,N.N.formatMessage(y.Z.labelsModifiedDate,{date:(0,j.Un)(t.modified_date)}))),(0,w.q5)(t.id)&&f().createElement(s.v,null,f().createElement(A.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:N.N.formatMessage(y.Z.linksViewPackagesAndErrata)}))))),f().createElement(g.P,{md:4,sm:12},f().createElement(O.k,{flex:{default:"column"}},t.advisory_type_name&&f().createElement(h.B,null,f().createElement(Z.P,{className:"infobox",hasGutter:!0},f().createElement(P.J,{isFilled:!0},f().createElement(O.k,{flex:{default:"column"}},f().createElement(h.B,{spacer:{default:"spacerNone"}},f().createElement(S.D,{headingLevel:"h5"},N.N.formatMessage(y.Z.titlesAdvisoryType))),f().createElement(h.B,{spacer:{default:"spacerSm"}},f().createElement(x.Z,{type:t.advisory_type_name})))))),0!==C.value&&f().createElement(h.B,null,f().createElement(F,{severity:C})),t.reboot_required&&f().createElement(h.B,{spacer:{default:"spacerMd"}},f().createElement(k.Z,null)))),R&&0!==R.length&&f().createElement(g.P,{md:4,sm:12},f().createElement(i.D,null,f().createElement(c.x,{component:c.q.h3},N.N.formatMessage(y.Z.labelsCves)),f().createElement(E.zx,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return f().createElement(B,{cveIds:R})}}))}},N.N.formatMessage(y.Z.labelsCvesButton,{cvesCount:R.length})))),f().createElement(d.Suspense,{fallback:f().createElement(d.Fragment,null)},f().createElement(u,null)))};C.propTypes={attributes:m().object,isLoading:m().bool};const R=C;var L=n(49642),G=n(15984),T=n(9557),H=n(91607),q=n(15861),I=n(93433),U=n(64687),z=n.n(U),V=n(75863),K=n(33739),Q=n(97779),J=n(90747),W=n(83905),Y=n(52579),X=n(7322),$=n(5747),ee=n(11220),te=n(13784),ne=n(58684),re=n(55485),ae=n(53074),le=n(93080),se=n(12738),ce=n(55140);function ie(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ie(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ie(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ue=function(e){var t=e.advisoryName,n=(0,v.I0)(),r=(0,v.oR)(),l=(0,ce.Z)(),s=f().useState(!1),c=(0,a.Z)(s,2),i=c[0],o=c[1],u=f().useState((function(){return function(){return null}})),m=(0,a.Z)(u,2),E=m[0],b=m[1],g=(0,p.useHistory)(),h=(0,H.ye)(te.VH.patch_set,l),O=(0,w.PZ)(g.location.search),Z=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.wU),P=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),S=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),j=(0,v.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),_=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),k=(0,v.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.metadata)||{}})),D=j.systemProfile,M=j.selectedTags,F=j.filter,A=j.search,x=j.page,B=j.perPage,C=j.sort;function R(e){n((0,T.pH)(e))}f().useEffect((function(){return R(O),function(){n((0,T.RV)()),n((0,T.Yf)())}}),[]);var L=(0,H.j5)(oe({search:A},F),R),G=(0,a.Z)(L,1)[0],U=(0,W.Z)(null==F?void 0:F.os,R),ie={items:[(0,J.Z)(R,A,N.N.formatMessage(y.Z.labelsFiltersSystemsSearchTitle),N.N.formatMessage(y.Z.labelsFiltersSystemsSearchPlaceholder))].concat((0,I.Z)(U))},ue=(0,se.Fy)(F,A,G),me=(0,d.useCallback)(function(){var e=(0,q.Z)(z().mark((function e(t){var n;return z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,b((function(){return function(){return f().createElement(re.Z,{data:n,isRemediationOpen:!0,setRemediationOpen:o})}})),o(!i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[i]),de=(0,le.r)(Z,_,{endpoint:le.c.advisorySystems(t),queryParams:j,selectionDispatcher:T.i2}),fe=_&&(0,w.Qy)(_).length,ve=(0,H.U)(ee.cK,R,{id:t},g),pe=(0,H.AR)(t,j,{csv:ee.nb,json:ee.Se},n),ye=(0,H.Pz)(fe,de,{total_items:S},Z);return f().createElement(f().Fragment,null,i&&f().createElement(E,null)||null,(P.hasError||!1===(null==k?void 0:k.has_systems))&&f().createElement(Y.Z,{code:P.code,metadata:k})||f().createElement(K.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,se.gB)(e,ne.HG,h)},showTags:!0,customFilters:{patchParams:{search:A,filter:F,systemProfile:D,selectedTags:M}},paginationProps:{isDisabled:0===S},onLoad:function(e){var t=e.mergeWithEntities;r.replaceReducer((0,Q.UY)(oe(oe({},X.E),t((0,$.Kq)((0,ne.HG)(!1),$.G),(0,w.fm)({page:x,perPage:B,sort:C,search:A},O)))))},getEntities:ve,actions:(0,ne.Sb)(me),tableProps:{canSelectAll:!1,variant:V.B.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:ie,activeFiltersConfig:ue,exportConfig:{isDisabled:0===S,onSelect:pe},bulkSelect:de&&ye,dedicatedAction:f().createElement(ae.Z,{remediationProvider:function(){return(0,w.MS)(t,(0,w.Q6)(_),te.oN.advisory)},isDisabled:0===(0,w.Qy)(_).length})}))};ue.propTypes={advisoryName:m().string};const me=ue;var de=n(83215);function fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fe(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var pe=function(e){var t=e.match,n=(0,v.I0)(),r=f().useState(t.params.advisoryId),u=(0,a.Z)(r,1)[0],m="".concat(u," - ").concat(N.N.formatMessage(y.Z.titlesAdvisories));(0,H.Iw)(m);var d=(0,v.v9)((function(e){return e.AdvisoryDetailStore})),p=(0,v.v9)((function(e){return e.AdvisoryDetailStore.status}));f().useEffect((function(){n((0,T.N2)({advisoryName:u}))}),[]),f().useEffect((function(){return function(){n((0,T.jl)()),n((0,T.Bt)()),n((0,de.L1)())}}),[]);var E=d.data.attributes;return f().createElement(f().Fragment,null,f().createElement(L.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:N.N.formatMessage(y.Z.titlesPatchAdvisories),to:"/advisories",isActive:!1},{title:u,isActive:!0}]},p.hasError?f().createElement(G.Z,null):f().createElement(R,{attributes:ve(ve({},E),{},{id:u}),isLoading:p.isLoading})),f().createElement(o.Z,null,f().createElement(l.K,{hasGutter:!0},f().createElement(s.v,null,f().createElement(i.D,null,f().createElement(c.x,{component:c.q.h2},N.N.formatMessage(y.Z.titlesAffectedSystems)))),f().createElement(s.v,null,f().createElement(me,{advisoryName:u})))))};pe.propTypes={match:m().any};const ye=(0,p.withRouter)(pe)},55485:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(43297),a=n.n(r),l=n(45697),s=n.n(l),c=n(22663),i=function(e){var t=e.data,n=e.setRemediationOpen;return a().createElement(c.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:n,fallback:a().createElement("span",null),data:t})};i.propTypes={data:s().object,setRemediationOpen:s().func};const o=i}}]);