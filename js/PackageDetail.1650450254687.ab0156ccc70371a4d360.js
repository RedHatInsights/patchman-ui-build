"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{33739:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(87462),a=r(43297),s=r.n(a),o=r(45697),c=r.n(o),i=r(54025),l=r(334),u=r(28216),f=r(52643),p=r(2372),m=r(39591),d=function(e){var t=(0,l.useHistory)(),r=(0,u.oR)();return s().createElement(a.Suspense,{fallback:e.fallback},s().createElement(i.ScalprumComponent,(0,n.Z)({history:t,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:s().createElement(m.Z,(0,n.Z)({component:"InventoryDetailHead",history:t,store:r},e)),ref:e.innerRef},e)))};d.propTypes={fallback:c().node,innerRef:c().object};var v=s().forwardRef((function(e,t){return s().createElement(d,(0,n.Z)({innerRef:t},e))}));v.propTypes={fallback:c().node},v.defaultProps={fallback:s().createElement(f.b,{className:"pf-u-p-lg"},s().createElement(p.$,{size:"xl"}))};const h=v},52709:(e,t,r)=>{r.d(t,{x:()=>g,ZP:()=>O});var n=r(45987),a=r(4942),s=r(56455),o=r(87462),c=r(43297),i=r.n(c),l=r(45697),u=r.n(l),f=r(94184),p=r.n(f),m=function(e){var t=e.centered,r=e.className,s=(0,n.Z)(e,["centered","className"]),c=p()("ins-c-spinner",(0,a.Z)({},"ins-m-center",t),r);return i().createElement("div",(0,o.Z)({role:"status",className:c},s),i().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};m.propTypes={centered:u().bool,className:u().string};const d=m;var v,h=["loading","variant","children"],g={spinner:"spinner",skeleton:"skeleton"},b=(v={},(0,a.Z)(v,g.skeleton,(function(e){var t=e.size,r=e.isDark;return i().createElement(s.Z,{size:t,isDark:r})})),(0,a.Z)(v,g.spinner,(function(e){var t=e.centered;return i().createElement(d,{centered:t})})),v),y=function(e){var t=e.loading,r=e.variant,a=e.children,s=(0,n.Z)(e,h);return!1!==t?b[r](s):a};y.propTypes={loading:u().bool,variant:u().string,children:u().any};const O=y},8453:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ne});var n=r(4942),a=r(29439),s=r(81159),o=r(34023),c=r(63540),i=r(20018),l=r(86350),u=r(45697),f=r.n(u),p=r(43297),m=r.n(p),d=r(28216),v=r(334),h=r(30893),g=r(49642),b=r(49287),y=r(18038),O=r(5391),E=r(52709),P=function(e){var t=e.attributes.description,r=e.isLoading,n=m().useState(1e3),c=(0,a.Z)(n,2),i=c[0],l=c[1];return t&&m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(E.ZP,{loading:r,variant:E.x.spinner,centered:!0},m().createElement(s.K,{hasGutter:!0},m().createElement(o.v,null),m().createElement(o.v,{style:{whiteSpace:"pre-line"}},t&&(0,O.Nt)(t,i,l))))))||m().createElement(p.Fragment,null)};P.propTypes={attributes:f().object,isLoading:f().bool};const S=P;var Z=r(20167),w=r(60076),k=r(15861),j=r(87757),N=r.n(j),D=r(72573),_=r(33739),T=r(90747),I=r(16590),L=r(87462),C=r(80887),R=r(77221),F=r(82553),M=r(44612),A=r(32132);const x=function(e,t,r){var n=m().useState(!1),s=(0,a.Z)(n,2),o=s[0],c=s[1],i=m().useState(10),l=(0,a.Z)(i,2),u=l[0],f=l[1],p=t&&t.installed_evra,d=p&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:A.N.formatMessage(h.Z.textNoVersionAvailable),disabled:!0}];return{type:M.Y.custom,label:A.N.formatMessage(h.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:m().createElement(C.Select,(0,L.Z)({variant:v.length>0&&F.SelectVariant.checkbox||F.SelectVariant.typeaheadMulti,typeAheadAriaLabel:A.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){c(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var s=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(s).concat(n)}}else{var o=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:o}}e(a)},selections:d,isOpen:o,"aria-labelledby":"patch-version-filter",placeholderText:A.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder)},u<v.lengt&&{loadingVariant:{text:"View more",onClick:function(){f(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(R.SelectOption,(0,L.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var V=r(73888),H=r(2807),q=r(9557),B=r(5747),G=r(11220),U=r(13784),z=r(91607),Y=r(53074),K=r(58684);function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W=function(e){var t=e.packageName,r=(0,d.I0)(),n=(0,v.useHistory)(),s=m().useState([]),o=(0,a.Z)(s,2),c=o[0],i=o[1],l=(0,O.PZ)(n.location.search),u=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.wU),f=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),p=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),g=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),b=(0,d.v9)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),y=b.systemProfile,E=b.selectedTags,P=b.filter,S=b.search,Z=b.sort,w=b.page,j=b.perPage;function L(e){r((0,q.g5)(e))}m().useEffect((0,k.Z)(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return L(l),e.t0=i,e.next=4,(0,G.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),m().useEffect((function(){return function(){r((0,q.RV)()),r((0,q.d)())}}),[]);var C=(0,z.j5)($($({},P),{},{search:S}),L),R=(0,a.Z)(C,1)[0],F={items:[(0,T.Z)(L,S,A.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle),A.N.formatMessage(h.Z.labelsFiltersSystemsSearchPlaceholder)),(0,I.Z)(L,P),x(L,P,c)]},M={filters:(0,O.mt)(P,S,A.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle)),onDelete:R},Q=(0,z.ry)(u,g,(function(){return(0,G.vo)($($({},b),{},{package_name:t,limit:-1})).then(O.lq)}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),W=g&&(0,O.Qy)(g).length,J=(0,z.AR)(t,b,{csv:G.nx,json:G.bb},r),X=function(){var e={};return(0,O.Q6)(g).forEach((function(t){e[g[t]]?e[g[t]].push(t):e[g[t]]=[t]})),{data:e}},ee=(0,z.U)(G.vo,L,{packageName:t},n);return m().createElement(m().Fragment,null,f.hasError&&m().createElement(V.Z,{code:f.code})||m().createElement(_.Z,{disableDefaultColumns:["system_profile","updated"],isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:K.Hd,showTags:!0,getEntities:ee,customFilters:{patchParams:{search:S,filter:P,systemProfile:y,selectedTags:E}},paginationProps:{isDisabled:0===p},onLoad:function(e){var t=e.mergeWithEntities;(0,H.z)($({},t((0,B.Kq)(K.Hd,B.OC),(0,O.fm)({page:w,perPage:j,sort:Z,search:S},l))))},tableProps:{canSelectAll:!1,variant:D.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:F,activeFiltersConfig:M,bulkSelect:(0,z.Pz)(W,Q,{total_items:p},u),exportConfig:{isDisabled:0===p,onSelect:J},dedicatedAction:m().createElement(Y.Z,{remediationProvider:function(){return(0,O.Sz)((0,O.Q6)(g),X,O.R9,U.oN.package)},isDisabled:0===(0,O.Qy)(g).length})}))};W.propTypes={packageName:f().string};const J=W;var X=r(83215);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(e){var t=e.match,r=(0,d.I0)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(A.N.formatMessage(h.Z.titlesPackages));(0,z.Iw)(f);var p=(0,d.v9)((function(e){return e.PackageDetailStore})),v=(0,d.v9)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,q.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,X.L1)()),r((0,q.vh)())}}),[]);var b=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(g.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:A.N.formatMessage(h.Z.titlesPatchPackages),to:w.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(Z.Z,null):m().createElement(S,{attributes:te(te({},b),{},{id:u}),isLoading:v.isLoading})),m().createElement(l.Z,null,m().createElement(s.K,{hasGutter:!0},m().createElement(o.v,null,m().createElement(i.D,null,m().createElement(c.xv,{component:c.qO.h2},A.N.formatMessage(h.Z.titlesAffectedSystems)))),m().createElement(o.v,null,v.hasError&&m().createElement(V.Z,null)||!v.isLoading&&m().createElement(J,{packageName:u})))))};re.propTypes={match:f().any};const ne=(0,v.withRouter)(re)},535:(e,t,r)=>{r.r(t),r.d(t,{default:()=>C});var n=r(15861),a=r(4942),s=r(29439),o=r(87757),c=r.n(o),i=r(86350),l=r(45697),u=r.n(l),f=r(43297),p=r.n(f),m=r(28216),d=r(334),v=r(30893),h=r(49642),g=r(90747),b=r(38776),y=r(9557),O=r(11220),E=r(57668),P=r(5391),S=r(91607),Z=r(32132),w=r(83215),k=r(6202),j=r(72573),N=[{key:"name",title:"Name",transforms:[j.sortable],props:{width:50}},{key:"systems",title:"Systems",transforms:[j.sortable],props:{width:50}}],D=r(32166),_=r(13784);function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t=e.history,r=Z.N.formatMessage(v.Z.titlesAdvisories);(0,S.Iw)(r);var a=(0,m.I0)(),o=p().useState(!0),l=(0,s.Z)(o,2),u=l[0],d=l[1],j=p().useState({isOpen:!1,shouldRefresh:!1,patchSetID:void 0,systemsIDs:[]}),T=(0,s.Z)(j,2),L=T[0],C=T[1],R=(0,m.v9)((function(e){return e.PatchSetsStore.rows})),F=(0,m.v9)((function(e){return e.PatchSetsStore.queryParams})),M=(0,m.v9)((function(e){return e.PatchSetsStore.selectedRows})),A=(0,m.v9)((function(e){return e.PatchSetsStore.metadata})),x=(0,m.v9)((function(e){return e.PatchSetsStore.status})),V=(0,f.useMemo)((function(){return(0,E.CN)(R,M,F)}),[R,M]);function H(e){a((0,y.br)(e))}var q=function(){a((0,y.BY)(I(I({},F),{},{page:1,offset:0})))};(0,f.useEffect)((function(){return function(){a((0,y.Im)()),a((0,w.L1)())}}),[]),(0,f.useEffect)((function(){!0===L.shouldRefresh&&q()}),[L.shouldRefresh]),(0,S.KW)((function(){u?(H((0,P.PZ)(t.location.search)),d(!1)):(t.push((0,P.R_)(F)),a((0,y.BY)(F)))}),[F,u]),(0,S.ry)(V,M,(function(){return(0,O.ai)(I(I({},F),{},{limit:-1}))}),(function(e){a((0,y.GL)(e))}),(function(e){return e.id}));var B=(0,S._f)(N,H,0),G=p().useMemo((function(){return(0,P.hO)(N,A.sort,0)}),[A.sort]),U=(0,S.SL)(A.limit,H),z=(0,S._T)(H);function Y(){return(Y=(0,n.Z)(c().mark((function e(t){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C({isOpen:!0,patchSetID:t.id});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var K=function(e){return function(){return p().createElement(k.Button,{key:"createButton",onClick:function(){return e({isOpen:!0})}},Z.N.formatMessage(v.Z.labelsButtonCreatePatchSet))}}(C),Q=[{title:"Edit patch set",onClick:function(e,t,r){!function(e){Y.apply(this,arguments)}(r)}},{title:"Remove patch set",onClick:function(e,t,r){!function(e){(0,O.f_)(e.id).then((function(){a((0,w.wN)(_.D$.success)),q()})).catch((function(){a((0,w.wN)(_.D$.error))}))}(r)}}];return p().createElement(p().Fragment,null,p().createElement(h.Z,{title:Z.N.formatMessage(v.Z.titlesPatchSet),headerOUIA:"advisories"}),L.isOpen&&p().createElement(D.Z,{systemsIDs:L.systemsIDs,setBaselineState:C,patchSetID:L.patchSetID}),p().createElement(i.Z,null,p().createElement(b.Z,{columns:N,compact:!0,onSetPage:U,onPerPageSelect:z,onSort:B,selectedRows:!1,onSelect:!1,sortBy:G,apply:H,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:V,metadata:A,status:x,queryParams:F},actionsConfig:(null==R?void 0:R.length)>0&&Q,filterConfig:{items:[(0,g.Z)(H,F.search,Z.N.formatMessage(v.Z.labelsFiltersSearchPatchSetTitle),Z.N.formatMessage(v.Z.labelsFiltersSearchPatchSetPlaceholder))]},searchChipLabel:Z.N.formatMessage(v.Z.labelsFiltersSearchPatchSetTitle),CreatePatchSet:K})))};L.propTypes={history:u().object};const C=(0,d.withRouter)(L)},5747:(e,t,r)=>{r.d(t,{G:()=>u,Kq:()=>p,OC:()=>f});var n=r(4942),a=r(57668),s=r(48881),o=r(22789);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?i(i({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},f=function(e,t){return t.loaded?i(i({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,a=i({},r);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return a.status={isLoading:!0,hasError:!0},a;case"SELECT_ENTITY":var c=(0,s.hd)(a,n);return t(e,c);case o.sq:return l;default:return r}}}}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.9dad522eaae54627a75af4bd83700c97.js.map