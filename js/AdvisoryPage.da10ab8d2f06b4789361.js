"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[423],{91482:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(83237),a=n(13784),s=n(32132),l=n(30893);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:s.N.formatMessage(l.Z.labelsFiltersStatus),type:r.Y.checkbox,filterValues:{onChange:function(t,n){!function(t){0===t.length?e({filter:{status:void 0}}):e({filter:{status:t}})}(n)},items:a.HU,value:!t.status||Array.isArray(t.status)?t.status:[t.status],placeholder:s.N.formatMessage(l.Z.labelsColumnsStatusPlaceholder)}}}},83905:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(93433),a=n(29439),s=n(43297),l=n(28216),c=n(54025),i=n(11220);const o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=(0,l.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),o=(0,l.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded})),u=(0,s.useState)([]),m=(0,a.Z)(u,2),d=m[0],f=m[1],v=(0,c.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),p=(0,a.Z)(v,1)[0],y=void 0===p?{}:p,E=y.toGroupSelectionValue,g=y.buildOSFilterConfig;(0,s.useEffect)((function(){void 0!==n&&void 0!==o||(0,i.GB)().then((function(e){var t=e.results;f((t||[]).map((function(e){var t=e.value,n=t.name,r=t.major,a=t.minor,s="".concat(r,".").concat(a);return{label:"".concat(n," ").concat(s),value:"".concat(s)}})))}))}),[]),(0,s.useEffect)((function(){!0===o&&f(n)}),[o]);var b=(""===e?[]:e.split(",")).map((function(e){return e.substring(5)}));return(0,r.Z)(g?[g({id:"rhel_version",value:E(b),onChange:function(e,n){var r=Object.values(n).flatMap((function(e){return Object.keys(e)})).map((function(e){return"RHEL ".concat(e)})).toString();t({filter:{os:r}})}},d)]:[])}},34951:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ee});var r=n(4942),a=n(29439),s=n(49739),l=n(83826),c=n(68340),i=n(68774),o=n(14748),u=n(45697),m=n.n(u),d=n(43297),f=n.n(d),v=n(28216),p=n(96620),y=n(30893),E=n(47173),g=n(50693),b=n(16475),h=n(92298),Z=n(28191),O=n(79851),P=n(34512),S=n(60485),j=n(35240),N=n(81469),_=n(5391),w=n(32132),k=n(7665),D=n(27578),M=function(e){var t=e.severity;return f().createElement(O.P,{className:"infobox",hasGutter:!0},f().createElement(P.J,{isFilled:!0},f().createElement(Z.k,{flex:{default:"column"}},f().createElement(h.B,{spacer:{default:"spacerNone"}},f().createElement(S.D,{headingLevel:"h5"},w.N.formatMessage(y.Z.labelsColumnsSeverity))),f().createElement(h.B,{spacer:{default:"spacerSm"}},f().createElement(Z.k,{flex:{default:"row"}},f().createElement(h.B,null,f().createElement(D.ZP,{size:"sm",color:t.color})),f().createElement(h.B,null,t.label))))))};M.propTypes={severity:m().object};const A=M;var F=n(55970),C=n(18464),x=(0,d.lazy)((function(){return Promise.all([n.e(1456),n.e(3935),n.e(3962),n.e(236),n.e(9630)]).then(n.bind(n,71309))})),B=function(e){var t=e.attributes,n=e.isLoading,r=(0,d.useState)((function(){return function(){return null}})),o=(0,a.Z)(r,2),u=o[0],m=o[1],v=(0,d.useState)(1e3),p=(0,a.Z)(v,2),D=p[0],M=p[1],B=(0,_.r)(t.severity),R=t.cves;return f().createElement(g.r,{hasGutter:!0,style:{minHeight:150}},f().createElement(b.P,{md:8,sm:12},f().createElement(N.ZP,{loading:n,variant:N.x.spinner,centered:!0},f().createElement(s.K,{hasGutter:!0},f().createElement(l.v,null),f().createElement(l.v,{style:{whiteSpace:"pre-line"}},t.description&&(0,_.Nt)(t.description,D,M)),f().createElement(l.v,null,t.public_date&&f().createElement(f().Fragment,null,w.N.formatMessage(y.Z.labelsPublicDate,{date:(0,j.Un)(t.public_date)}),f().createElement("br",null)),t.modified_date&&f().createElement(f().Fragment,null,w.N.formatMessage(y.Z.labelsModifiedDate,{date:(0,j.Un)(t.modified_date)}))),(0,_.q5)(t.id)&&f().createElement(l.v,null,f().createElement(F.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:w.N.formatMessage(y.Z.linksViewPackagesAndErrata)}))))),f().createElement(b.P,{md:4,sm:12},f().createElement(Z.k,{flex:{default:"column"}},t.advisory_type_name&&f().createElement(h.B,null,f().createElement(O.P,{className:"infobox",hasGutter:!0},f().createElement(P.J,{isFilled:!0},f().createElement(Z.k,{flex:{default:"column"}},f().createElement(h.B,{spacer:{default:"spacerNone"}},f().createElement(S.D,{headingLevel:"h5"},w.N.formatMessage(y.Z.titlesAdvisoryType))),f().createElement(h.B,{spacer:{default:"spacerSm"}},f().createElement(C.Z,{type:t.advisory_type_name})))))),0!==B.value&&f().createElement(h.B,null,f().createElement(A,{severity:B})),t.reboot_required&&f().createElement(h.B,{spacer:{default:"spacerMd"}},f().createElement(k.Z,null)))),R&&0!==R.length&&f().createElement(b.P,{md:4,sm:12},f().createElement(i.D,null,f().createElement(c.x,{component:c.q.h3},w.N.formatMessage(y.Z.labelsCves)),f().createElement(E.zx,{variant:"link",style:{padding:0},onClick:function(){m((function(){return function(){return f().createElement(x,{cveIds:R})}}))}},w.N.formatMessage(y.Z.labelsCvesButton,{cvesCount:R.length})))),f().createElement(d.Suspense,{fallback:f().createElement(d.Fragment,null)},f().createElement(u,null)))};B.propTypes={attributes:m().object,isLoading:m().bool};const R=B;var L=n(49642),H=n(15984),T=n(9557),G=n(91607),q=n(15861),I=n(93433),U=n(64687),V=n.n(U),z=n(75863),K=n(33739),Q=n(97779),Y=n(90747),J=n(83905),W=n(52579),X=n(7322),$=n(5747),ee=n(11220),te=n(13784),ne=n(58684),re=n(55485),ae=n(53074),se=n(93080),le=n(42154),ce=n(55140),ie=n(91482);function oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?oe(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var me=function(e){var t=e.advisoryName,n=(0,v.I0)(),r=(0,v.oR)(),s=(0,ce.Z)(),l=f().useState(!1),c=(0,a.Z)(l,2),i=c[0],o=c[1],u=f().useState((function(){return function(){return null}})),m=(0,a.Z)(u,2),E=m[0],g=m[1],b=(0,p.useHistory)(),h=(0,G.ye)(te.VH.patch_set,s),Z=(0,_.PZ)(b.location.search),O=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.wU),P=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),S=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),j=(0,v.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.queryParams)||{}})),N=(0,v.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),k=(0,v.v9)((function(e){var t=e.AdvisorySystemsStore;return(null==t?void 0:t.metadata)||{}})),D=j.systemProfile,M=j.selectedTags,A=j.filter,F=j.search,C=j.page,x=j.perPage,B=j.sort;function R(e){n((0,T.pH)(e))}f().useEffect((function(){return R(Z),function(){n((0,T.RV)()),n((0,T.Yf)())}}),[]);var L=(0,G.j5)(ue({search:F},A),R),H=(0,a.Z)(L,1)[0],U=(0,J.Z)(null==A?void 0:A.os,R),oe={items:[(0,Y.Z)(R,F,w.N.formatMessage(y.Z.labelsFiltersSystemsSearchTitle),w.N.formatMessage(y.Z.labelsFiltersSystemsSearchPlaceholder)),(0,ie.Z)(R,A)].concat((0,I.Z)(U))},me=(0,le.Fy)(A,F,H),de=(0,d.useCallback)(function(){var e=(0,q.Z)(V().mark((function e(t){var n;return V().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,g((function(){return function(){return f().createElement(re.Z,{data:n,isRemediationOpen:!0,setRemediationOpen:o})}})),o(!i);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[i]),fe=(0,se.r)(O,N,{endpoint:se.c.advisorySystems(t),queryParams:j,selectionDispatcher:T.i2}),ve=N&&(0,_.Qy)(N).length,pe=(0,G.U)(ee.cK,R,{id:t},b),ye=(0,G.AR)(t,j,{csv:ee.nb,json:ee.Se},n),Ee=(0,G.Pz)(ve,fe,{total_items:S},O);return f().createElement(f().Fragment,null,i&&f().createElement(E,null)||null,(P.hasError||!1===(null==k?void 0:k.has_systems))&&f().createElement(W.Z,{code:P.code,metadata:k})||f().createElement(K.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,ignoreRefresh:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,le.gB)(e,ne.HG,h)},showTags:!0,customFilters:{patchParams:{search:F,filter:A,systemProfile:D,selectedTags:M}},paginationProps:{isDisabled:0===S},onLoad:function(e){var t=e.mergeWithEntities;r.replaceReducer((0,Q.UY)(ue(ue({},X.E),t((0,$.Kq)((0,ne.HG)(!1),$.PD),(0,_.fm)({page:C,perPage:x,sort:B,search:F},Z)))))},getEntities:pe,actions:(0,ne.Sb)(de),tableProps:{canSelectAll:!1,variant:z.B.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:oe,activeFiltersConfig:me,exportConfig:{isDisabled:0===S,onSelect:ye},bulkSelect:fe&&Ee,dedicatedAction:f().createElement(ae.Z,{remediationProvider:function(){return(0,_.MS)(t,(0,_.Q6)(N),te.oN.advisory)},isDisabled:0===(0,_.Qy)(N).length})}))};me.propTypes={advisoryName:m().string};const de=me;var fe=n(83215);function ve(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ve(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ve(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=function(e){var t=e.match,n=(0,v.I0)(),r=f().useState(t.params.advisoryId),u=(0,a.Z)(r,1)[0],m="".concat(u," - ").concat(w.N.formatMessage(y.Z.titlesAdvisories));(0,G.Iw)(m);var d=(0,v.v9)((function(e){return e.AdvisoryDetailStore})),p=(0,v.v9)((function(e){return e.AdvisoryDetailStore.status}));f().useEffect((function(){n((0,T.N2)({advisoryName:u}))}),[]),f().useEffect((function(){return function(){n((0,T.jl)()),n((0,T.Bt)()),n((0,fe.L1)())}}),[]);var E=d.data.attributes;return f().createElement(f().Fragment,null,f().createElement(L.Z,{title:u,headerOUIA:"advisory-details",breadcrumbs:[{title:w.N.formatMessage(y.Z.titlesPatchAdvisories),to:"/advisories",isActive:!1},{title:u,isActive:!0}]},p.hasError?f().createElement(H.Z,null):f().createElement(R,{attributes:pe(pe({},E),{},{id:u}),isLoading:p.isLoading})),f().createElement(o.Z,null,f().createElement(s.K,{hasGutter:!0},f().createElement(l.v,null,f().createElement(i.D,null,f().createElement(c.x,{component:c.q.h2},w.N.formatMessage(y.Z.titlesAffectedSystems)))),f().createElement(l.v,null,f().createElement(de,{advisoryName:u})))))};ye.propTypes={match:m().any};const Ee=(0,p.withRouter)(ye)},55485:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(43297),a=n.n(r),s=n(45697),l=n.n(s),c=n(22663),i=function(e){var t=e.data,n=e.setRemediationOpen;return a().createElement(c.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:n,fallback:a().createElement("span",null),data:t})};i.propTypes={data:l().object,setRemediationOpen:l().func};const o=i}}]);