"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9155],{33739:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(85893),a=r(43297),s=r.n(a),o=r(45697),c=r.n(o),i=r(59823),l=r(334),u=r(28216),p=r(75448),f=r(39591),m=r(94184),d=r.n(m),g=function(){return g=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},g.apply(this,arguments)},v=function(e){var t=(0,l.useHistory)(),r=(0,u.oR)(),s=e.component;return(0,n.jsx)(s,g({className:d()(e.className,"inventory")},{children:(0,n.jsx)(a.Suspense,g({fallback:e.fallback},{children:(0,n.jsx)(i.ScalprumComponent,g({history:t,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,n.jsx)(f.Z,g({component:"InventoryDetailHead",history:t,store:r},e)),ref:e.innerRef},e))}))}))};v.propTypes={fallback:c().node,innerRef:c().object,component:c().string,className:c().string};var h=s().forwardRef((function(e,t){return(0,n.jsx)(v,g({innerRef:t},e))}));h.propTypes={fallback:c().node,component:c().string,className:c().string},h.defaultProps={fallback:(0,n.jsx)(p.Bullseye,g({className:"pf-u-p-lg"},{children:(0,n.jsx)(p.Spinner,{size:"xl"})})),component:"section"};const b=h},81469:(e,t,r)=>{r.d(t,{x:()=>h,ZP:()=>O});var n=r(45987),a=r(4942),s=r(35664),o=r(85893),c=r(94184),i=r.n(c),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const u=function(e){var t,r=e.centered,n=e.className,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["centered","className"]),s=i()("ins-c-spinner",((t={})["ins-m-center"]=r,t),n);return(0,o.jsx)("div",l({role:"status",className:s},a,{children:(0,o.jsx)("span",l({className:"pf-u-screen-reader"},{children:"Loading..."}))}))};var p,f=r(45697),m=r.n(f),d=r(43297),g=r.n(d),v=["loading","variant","children"],h={spinner:"spinner",skeleton:"skeleton"},b=(p={},(0,a.Z)(p,h.skeleton,(function(e){var t=e.size,r=e.isDark;return g().createElement(s.Z,{size:t,isDark:r})})),(0,a.Z)(p,h.spinner,(function(e){var t=e.centered;return g().createElement(u,{centered:t})})),p),y=function(e){var t=e.loading,r=e.variant,a=e.children,s=(0,n.Z)(e,v);return!1!==t?b[r](s):a};y.propTypes={loading:m().bool,variant:m().string,children:m().any};const O=y},8453:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ae});var n=r(4942),a=r(29439),s=r(81159),o=r(34023),c=r(63540),i=r(20018),l=r(14748),u=r(45697),p=r.n(u),f=r(43297),m=r.n(f),d=r(28216),g=r(334),v=r(30893),h=r(49642),b=r(49287),y=r(18038),O=r(5391),P=r(81469),E=function(e){var t=e.attributes.description,r=e.isLoading,n=m().useState(1e3),c=(0,a.Z)(n,2),i=c[0],l=c[1];return t&&m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(P.ZP,{loading:r,variant:P.x.spinner,centered:!0},m().createElement(s.K,{hasGutter:!0},m().createElement(o.v,null),m().createElement(o.v,{style:{whiteSpace:"pre-line"}},t&&(0,O.Nt)(t,i,l))))))||m().createElement(f.Fragment,null)};E.propTypes={attributes:p().object,isLoading:p().bool};const S=E;var j=r(15984),w=r(15861),Z=r(64687),k=r.n(Z),N=r(72573),D=r(33739),T=r(90747),_=r(16590),I=r(87462),x=r(80887),C=r(77221),L=r(82553),M=r(83237),F=r(32132);const R=function(e,t,r){var n=m().useState(!1),s=(0,a.Z)(n,2),o=s[0],c=s[1],i=m().useState(10),l=(0,a.Z)(i,2),u=l[0],p=l[1],f=t&&t.installed_evra,d=f&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),g=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:F.N.formatMessage(v.Z.textNoVersionAvailable),disabled:!0}];return{type:M.Y.custom,label:F.N.formatMessage(v.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:m().createElement(x.Select,(0,I.Z)({variant:g.length>0&&L.SelectVariant.checkbox||L.SelectVariant.typeaheadMulti,typeAheadAriaLabel:F.N.formatMessage(v.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){c(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var s=f&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(s).concat(n)}}else{var o=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:o}}e(a)},selections:d,isOpen:o,"aria-labelledby":"patch-version-filter",placeholderText:F.N.formatMessage(v.Z.labelsFiltersPackageVersionPlaceholder)},u<g.lengt&&{loadingVariant:{text:"View more",onClick:function(){p(g.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),g.slice(0,u).map((function(e,t){return m().createElement(C.SelectOption,(0,I.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var A=r(52579),B=r(2807),V=r(9557),q=r(5747),H=r(11220),U=r(13784),z=r(91607),G=r(53074),Y=r(58684),K=r(93080),W=r(97779);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J=function(e){var t=e.packageName,r=(0,d.I0)(),n=(0,d.oR)(),s=(0,g.useHistory)(),o=m().useState([]),c=(0,a.Z)(o,2),i=c[0],l=c[1],u=(0,O.PZ)(s.location.search),p=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.wU),h=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),b=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),y=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),P=(0,d.v9)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),E=P.systemProfile,S=P.selectedTags,j=P.filter,Z=P.search,I=P.sort,x=P.page,C=P.perPage,L=(0,f.useCallback)((function(e){r((0,V.g5)(e))}),[]);(0,f.useEffect)((0,w.Z)(k().mark((function e(){return k().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(u),e.t0=l,e.next=4,(0,H.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),(0,f.useEffect)((function(){return function(){r((0,V.RV)()),r((0,V.d)())}}),[]);var M=(0,z.j5)($($({},j),{},{search:Z}),L),Q=(0,a.Z)(M,1)[0],J={items:[(0,T.Z)(L,Z,F.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),F.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),(0,_.Z)(L,j),R(L,j,i)]},X=(0,f.useMemo)((function(){return{filters:(0,O.mt)(j,Z,F.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:Q}}),[j,Z]),ee=(0,K.r)(p,y,{endpoint:K.c.packageSystems(t),queryParams:P,selectionDispatcher:V.i2,constructFilename:function(e){return"".concat(t,"-").concat(e.available_evra)},apiResponseTransformer:O.lq}),te=y&&(0,O.Qy)(y).length,re=(0,z.AR)(t,P,{csv:H.nx,json:H.bb},r),ne=(0,f.useCallback)((function(e){var t=[];return e.forEach((function(e){var r=y[e],n="patch-package:".concat(r),a=t.findIndex((function(e){return e.id===n}));-1!==a?t[a].systems.push(e):r&&t.push({id:n,description:r,systems:[e]})})),!!t.length&&{issues:t}}),[y]),ae=(0,z.U)(H.vo,L,{packageName:t},s),se=(0,z.Pz)(te,ee,{total_items:b},p);return m().createElement(m().Fragment,null,h.hasError&&m().createElement(A.Z,{code:h.code})||m().createElement(D.Z,{disableDefaultColumns:["system_profile","updated"],isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:Y.Hd,showTags:!0,getEntities:ae,customFilters:{patchParams:{search:Z,filter:j,systemProfile:E,selectedTags:S}},paginationProps:{isDisabled:0===b},onLoad:function(e){var t=e.mergeWithEntities;n.replaceReducer((0,W.UY)($($({},B.E),t((0,q.Kq)(Y.Hd,q.OC),(0,O.fm)({page:x,perPage:C,sort:I,search:Z},u)))))},tableProps:{canSelectAll:!1,variant:N.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:J,activeFiltersConfig:X,bulkSelect:ee&&se,exportConfig:{isDisabled:0===b,onSelect:re},dedicatedAction:m().createElement(G.Z,{remediationProvider:function(){return(0,O.Sz)((0,O.Q6)(y),ne,U.oN.package)},isDisabled:0===(0,O.Qy)(y).length})}))};J.propTypes={packageName:p().string};const X=J;var ee=r(83215);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e){var t=e.match,r=(0,d.I0)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],p="".concat(u," - ").concat(F.N.formatMessage(v.Z.titlesPackages));(0,z.Iw)(p);var f=(0,d.v9)((function(e){return e.PackageDetailStore})),g=(0,d.v9)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,V.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,ee.L1)()),r((0,V.vh)())}}),[]);var b=f.data.attributes;return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:F.N.formatMessage(v.Z.titlesPatchPackages),to:"/packages",isActive:!1},{title:u,isActive:!0}]},g.hasError?m().createElement(j.Z,null):m().createElement(S,{attributes:re(re({},b),{},{id:u}),isLoading:g.isLoading})),m().createElement(l.Z,null,m().createElement(s.K,{hasGutter:!0},m().createElement(o.v,null,m().createElement(i.D,null,m().createElement(c.xv,{component:c.qO.h2},F.N.formatMessage(v.Z.titlesAffectedSystems)))),m().createElement(o.v,null,g.hasError&&m().createElement(A.Z,null)||!g.isLoading&&m().createElement(X,{packageName:u})))))};ne.propTypes={match:p().any};const ae=(0,g.withRouter)(ne)},535:(e,t,r)=>{r.r(t),r.d(t,{default:()=>L});var n=r(4942),a=r(29439),s=r(14748),o=r(43297),c=r.n(o),i=r(28216),l=r(334),u=r(30893),p=r(49642),f=r(90747),m=r(38776),d=r(9557),g=r(11220),v=r(36248),h=r(5391),b=r(91607),y=r(32132),O=r(83215),P=r(6202),E=r(76004),S=r(72573),j=r(60472),w=[{key:"name",title:"Name",transforms:[S.sortable],props:{width:50}},{key:"systems",title:"Systems",transforms:[S.sortable],props:{width:50}}],Z=function(){return c().createElement(E.Tooltip,{content:"For editing access, contact your administrator."},c().createElement(P.Button,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},c().createElement(j.default,null)))},k=r(74079),N=r(13784),D=r(79875),T=r(95249),_=r(93080),I=r(14240);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function C(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}const L=function(){var e=y.N.formatMessage(u.Z.titlesTemplate);(0,b.Iw)(e);var t=(0,i.I0)(),r=(0,l.useHistory)(),n=c().useState(!0),S=(0,a.Z)(n,2),j=S[0],x=S[1],L=c().useState(!0),M=(0,a.Z)(L,2),F=M[0],R=M[1],A=(0,i.v9)((function(e){return e.PatchSetsStore.rows})),B=(0,i.v9)((function(e){return e.PatchSetsStore.queryParams})),V=(0,i.v9)((function(e){return e.PatchSetsStore.selectedRows})),q=(0,i.v9)((function(e){return e.PatchSetsStore.metadata})),H=(0,i.v9)((function(e){return e.PatchSetsStore.status})),U=(0,o.useMemo)((function(){return(0,v.CN)(A,V,B)}),[A,V]),z=(0,b.mu)();function G(e){t((0,d.br)(e))}var Y=function(){t((0,d.BY)(C(C({},B),{},{page:1,offset:0})))};(0,o.useEffect)((function(){return z().then((function(e){var t;R(null==e||null===(t=e.smart_management)||void 0===t?void 0:t.is_entitled)})),function(){t((0,d.Im)()),t((0,O.L1)())}}),[]);var K=(0,D.Z)(V),W=K.patchSetState,Q=K.setPatchSetState,$=K.openPatchSetEditModal;(0,o.useEffect)((function(){!0===W.shouldRefresh&&Y()}),[W.shouldRefresh]),(0,b.KW)((function(){j?(G((0,h.PZ)(r.location.search)),x(!1)):(r.push((0,h.R_)(B)),t((0,d.BY)(B)))}),[B,j]),(0,_.r)(U,V,{endpoint:_.c.templates,queryParams:B,selectionDispatcher:d.GL});var J=(0,b._f)(w,G,0),X=c().useMemo((function(){return(0,h.hO)(w,q.sort,0)}),[q.sort]),ee=(0,b.SL)(q.limit,G),te=(0,b._T)(G),re=(0,T.c$)(["patch:*:*","patch:template:write"]).hasAccess,ne=function(e,t){return function(){return t?c().createElement(P.Button,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},y.N.formatMessage(u.Z.labelsButtonCreateTemplate)):c().createElement(E.Tooltip,{content:"For editing access, contact your administrator."},c().createElement(P.Button,{key:"createButton",isAriaDisabled:!0},y.N.formatMessage(u.Z.labelsButtonCreateTemplate)))}}(Q,re),ae=function(e,r){return[{title:y.N.formatMessage(u.Z.labelsButtonEditTemplate),onClick:function(t,r,n){e(null==n?void 0:n.id)}},{title:y.N.formatMessage(u.Z.labelsButtonRemoveTemplate),onClick:function(e,r,n){!function(e){(0,g.f_)(e.id).then((function(){t((0,O.wN)(N.D$.success)),Y()})).catch((function(){t((0,O.wN)(N.D$.error))}))}(n)}}]}($),se={items:[(0,f.Z)(G,B.search,y.N.formatMessage(u.Z.labelsFiltersSearchTemplateTitle),y.N.formatMessage(u.Z.labelsFiltersSearchTemplatePlaceholder))]};return c().createElement(c().Fragment,null,c().createElement(p.Z,{title:y.N.formatMessage(u.Z.titlesTemplate),headerOUIA:"advisories"}),W.isPatchSetWizardOpen&&c().createElement(k.Z,{systemsIDs:W.systemsIDs,setBaselineState:Q,patchSetID:W.patchSetID}),c().createElement(s.Z,null,F?c().createElement(m.Z,{columns:w,compact:!0,onSetPage:ee,onPerPageSelect:te,onSort:J,selectedRows:!1,onSelect:!1,sortBy:X,apply:G,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:U,metadata:q,status:H,queryParams:B},actionsConfig:(null==A?void 0:A.length)>0&&ae,filterConfig:se,searchChipLabel:y.N.formatMessage(u.Z.labelsFiltersSearchTemplateTitle),CreatePatchSetButton:ne,actionsToggle:re?null:Z}):c().createElement(I.DL,null)))}},5747:(e,t,r)=>{r.d(t,{G:()=>u,Kq:()=>f,OC:()=>p});var n=r(4942),a=r(36248),s=r(48881),o=r(22789);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?i(i({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},p=function(e,t){return t.loaded?i(i({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},f=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,a=i({},r);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return(0,s.PW)(a,n);case"SELECT_ENTITY":var c=(0,s.hd)(a,n);return t(e,c);case o.sq:return l;default:return r}}}}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.67575204e5f6216c1361489284f4e9f1.js.map