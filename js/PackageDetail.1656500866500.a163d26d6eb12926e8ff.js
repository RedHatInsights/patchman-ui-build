"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9155],{33739:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(43297),a=r.n(n),o=r(45697),s=r.n(o),c=r(59823),i=r(334),l=r(28216),u=r(95995),f=r(39591),p=r(94184),m=r.n(p),d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},d.apply(this,arguments)},v=function(e){var t=(0,i.useHistory)(),r=(0,l.oR)(),o=e.component;return a().createElement(o,{className:m()(e.className,"inventory")},a().createElement(n.Suspense,{fallback:e.fallback},a().createElement(c.ScalprumComponent,d({history:t,store:r,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:a().createElement(f.Z,d({component:"InventoryDetailHead",history:t,store:r},e)),ref:e.innerRef},e))))};v.propTypes={fallback:s().node,innerRef:s().object,component:s().string,className:s().string};var h=a().forwardRef((function(e,t){return a().createElement(v,d({innerRef:t},e))}));h.propTypes={fallback:s().node,component:s().string,className:s().string},h.defaultProps={fallback:a().createElement(u.Bullseye,{className:"pf-u-p-lg"},a().createElement(u.Spinner,{size:"xl"})),component:"section"};const g=h},81469:(e,t,r)=>{r.d(t,{x:()=>h,ZP:()=>y});var n=r(45987),a=r(4942),o=r(35664),s=r(43297),c=r.n(s),i=r(94184),l=r.n(i),u=function(){return u=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)};const f=function(e){var t,r=e.centered,n=e.className,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}(e,["centered","className"]),o=l()("ins-c-spinner",((t={})["ins-m-center"]=r,t),n);return c().createElement("div",u({role:"status",className:o},a),c().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};var p,m=r(45697),d=r.n(m),v=["loading","variant","children"],h={spinner:"spinner",skeleton:"skeleton"},g=(p={},(0,a.Z)(p,h.skeleton,(function(e){var t=e.size,r=e.isDark;return c().createElement(o.Z,{size:t,isDark:r})})),(0,a.Z)(p,h.spinner,(function(e){var t=e.centered;return c().createElement(f,{centered:t})})),p),b=function(e){var t=e.loading,r=e.variant,a=e.children,o=(0,n.Z)(e,v);return!1!==t?g[r](o):a};b.propTypes={loading:d().bool,variant:d().string,children:d().any};const y=b},8453:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ne});var n=r(4942),a=r(29439),o=r(81159),s=r(34023),c=r(63540),i=r(20018),l=r(14748),u=r(45697),f=r.n(u),p=r(43297),m=r.n(p),d=r(28216),v=r(334),h=r(30893),g=r(49642),b=r(49287),y=r(18038),O=r(57358),P=r(81469),E=function(e){var t=e.attributes.description,r=e.isLoading,n=m().useState(1e3),c=(0,a.Z)(n,2),i=c[0],l=c[1];return t&&m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(P.ZP,{loading:r,variant:P.x.spinner,centered:!0},m().createElement(o.K,{hasGutter:!0},m().createElement(s.v,null),m().createElement(s.v,{style:{whiteSpace:"pre-line"}},t&&(0,O.Nt)(t,i,l))))))||m().createElement(p.Fragment,null)};E.propTypes={attributes:f().object,isLoading:f().bool};const S=E;var w=r(15984),j=r(60076),Z=r(15861),k=r(87757),N=r.n(k),D=r(72573),_=r(33739),T=r(90747),I=r(16590),C=r(87462),L=r(80887),R=r(77221),F=r(82553),M=r(83237),x=r(32132);const A=function(e,t,r){var n=m().useState(!1),o=(0,a.Z)(n,2),s=o[0],c=o[1],i=m().useState(10),l=(0,a.Z)(i,2),u=l[0],f=l[1],p=t&&t.installed_evra,d=p&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:x.N.formatMessage(h.Z.textNoVersionAvailable),disabled:!0}];return{type:M.Y.custom,label:x.N.formatMessage(h.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:m().createElement(L.Select,(0,C.Z)({variant:v.length>0&&F.SelectVariant.checkbox||F.SelectVariant.typeaheadMulti,typeAheadAriaLabel:x.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){c(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var o=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(o).concat(n)}}else{var s=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:s}}e(a)},selections:d,isOpen:s,"aria-labelledby":"patch-version-filter",placeholderText:x.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder)},u<v.lengt&&{loadingVariant:{text:"View more",onClick:function(){f(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(R.SelectOption,(0,C.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var V=r(73888),B=r(2807),H=r(9557),q=r(5747),z=r(11220),G=r(13784),U=r(91607),Y=r(53074),K=r(58684);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e){var t=e.packageName,r=(0,d.I0)(),n=(0,v.useHistory)(),o=m().useState([]),s=(0,a.Z)(o,2),c=s[0],i=s[1],l=(0,O.PZ)(n.location.search),u=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.wU),f=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),p=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),g=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),b=(0,d.v9)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),y=b.systemProfile,P=b.selectedTags,E=b.filter,S=b.search,w=b.sort,j=b.page,k=b.perPage;function C(e){r((0,H.g5)(e))}m().useEffect((0,Z.Z)(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(l),e.t0=i,e.next=4,(0,z.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),m().useEffect((function(){return function(){r((0,H.RV)()),r((0,H.d)())}}),[]);var L=(0,U.j5)(Q(Q({},E),{},{search:S}),C),R=(0,a.Z)(L,1)[0],F={items:[(0,T.Z)(C,S,x.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle),x.N.formatMessage(h.Z.labelsFiltersSystemsSearchPlaceholder)),(0,I.Z)(C,E),A(C,E,c)]},M={filters:(0,O.mt)(E,S,x.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle)),onDelete:R},W=(0,U.ry)(u,g,(function(){return(0,z.vo)(Q(Q({},b),{},{package_name:t,limit:-1})).then(O.lq)}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),$=g&&(0,O.Qy)(g).length,J=(0,U.AR)(t,b,{csv:z.nx,json:z.bb},r),X=function(){var e={};return(0,O.Q6)(g).forEach((function(t){e[g[t]]?e[g[t]].push(t):e[g[t]]=[t]})),{data:e}},ee=(0,U.U)(z.vo,C,{packageName:t},n);return m().createElement(m().Fragment,null,f.hasError&&m().createElement(V.Z,{code:f.code})||m().createElement(_.Z,{disableDefaultColumns:["system_profile","updated"],isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:K.Hd,showTags:!0,getEntities:ee,customFilters:{patchParams:{search:S,filter:E,systemProfile:y,selectedTags:P}},paginationProps:{isDisabled:0===p},onLoad:function(e){var t=e.mergeWithEntities;(0,B.z)(Q({},t((0,q.Kq)(K.Hd,q.OC),(0,O.fm)({page:j,perPage:k,sort:w,search:S},l))))},tableProps:{canSelectAll:!1,variant:D.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:F,activeFiltersConfig:M,bulkSelect:(0,U.Pz)($,W,{total_items:p},u),exportConfig:{isDisabled:0===p,onSelect:J},dedicatedAction:m().createElement(Y.Z,{remediationProvider:function(){return(0,O.Sz)((0,O.Q6)(g),X,O.R9,G.oN.package)},isDisabled:0===(0,O.Qy)(g).length})}))};$.propTypes={packageName:f().string};const J=$;var X=r(83215);function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(e){var t=e.match,r=(0,d.I0)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(x.N.formatMessage(h.Z.titlesPackages));(0,U.Iw)(f);var p=(0,d.v9)((function(e){return e.PackageDetailStore})),v=(0,d.v9)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,H.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,X.L1)()),r((0,H.vh)())}}),[]);var b=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(g.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:x.N.formatMessage(h.Z.titlesPatchPackages),to:j.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(w.Z,null):m().createElement(S,{attributes:te(te({},b),{},{id:u}),isLoading:v.isLoading})),m().createElement(l.Z,null,m().createElement(o.K,{hasGutter:!0},m().createElement(s.v,null,m().createElement(i.D,null,m().createElement(c.xv,{component:c.qO.h2},x.N.formatMessage(h.Z.titlesAffectedSystems)))),m().createElement(s.v,null,v.hasError&&m().createElement(V.Z,null)||!v.isLoading&&m().createElement(J,{packageName:u})))))};re.propTypes={match:f().any};const ne=(0,v.withRouter)(re)},535:(e,t,r)=>{r.r(t),r.d(t,{default:()=>I});var n=r(4942),a=r(29439),o=r(14748),s=r(45697),c=r.n(s),i=r(43297),l=r.n(i),u=r(28216),f=r(334),p=r(30893),m=r(49642),d=r(90747),v=r(38776),h=r(9557),g=r(11220),b=r(57668),y=r(57358),O=r(91607),P=r(32132),E=r(83215),S=r(6202),w=r(72573),j=[{key:"name",title:"Name",transforms:[w.sortable],props:{width:50}},{key:"systems",title:"Systems",transforms:[w.sortable],props:{width:50}}],Z=r(32166),k=r(13784),N=r(79875);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(e){var t=e.history,r=P.N.formatMessage(p.Z.titlesPatchSet);(0,O.Iw)(r);var n=(0,u.I0)(),s=l().useState(!0),c=(0,a.Z)(s,2),f=c[0],w=c[1],D=(0,u.v9)((function(e){return e.PatchSetsStore.rows})),T=(0,u.v9)((function(e){return e.PatchSetsStore.queryParams})),I=(0,u.v9)((function(e){return e.PatchSetsStore.selectedRows})),C=(0,u.v9)((function(e){return e.PatchSetsStore.metadata})),L=(0,u.v9)((function(e){return e.PatchSetsStore.status})),R=(0,i.useMemo)((function(){return(0,b.CN)(D,I,T)}),[D,I]);function F(e){n((0,h.br)(e))}var M=function(){n((0,h.BY)(_(_({},T),{},{page:1,offset:0})))};(0,i.useEffect)((function(){return function(){n((0,h.Im)()),n((0,E.L1)())}}),[]);var x=(0,N.Z)(I),A=x.patchSetState,V=x.setPatchSetState,B=x.openPatchSetEditModal;(0,i.useEffect)((function(){!0===A.shouldRefresh&&M()}),[A.shouldRefresh]),(0,O.KW)((function(){f?(F((0,y.PZ)(t.location.search)),w(!1)):(t.push((0,y.R_)(T)),n((0,h.BY)(T)))}),[T,f]),(0,O.ry)(R,I,(function(){return(0,g.ai)(_(_({},T),{},{limit:-1}))}),(function(e){n((0,h.GL)(e))}),(function(e){return e.id}));var H=(0,O._f)(j,F,0),q=l().useMemo((function(){return(0,y.hO)(j,C.sort,0)}),[C.sort]),z=(0,O.SL)(C.limit,F),G=(0,O._T)(F),U=function(e){return function(){return l().createElement(S.Button,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},P.N.formatMessage(p.Z.labelsButtonCreatePatchSet))}}(V),Y=function(e,t){return[{title:"Edit patch set",onClick:function(t,r,n){e(null==n?void 0:n.id)}},{title:"Remove patch set",onClick:function(e,t,r){!function(e){(0,g.f_)(e.id).then((function(){n((0,E.wN)(k.D$.success)),M()})).catch((function(){n((0,E.wN)(k.D$.error))}))}(r)}}]}(B);return l().createElement(l().Fragment,null,l().createElement(m.Z,{title:P.N.formatMessage(p.Z.titlesPatchSet),headerOUIA:"advisories"}),A.isPatchSetWizardOpen&&l().createElement(Z.Z,{systemsIDs:A.systemsIDs,setBaselineState:V,patchSetID:A.patchSetID}),l().createElement(o.Z,null,l().createElement(v.Z,{columns:j,compact:!0,onSetPage:z,onPerPageSelect:G,onSort:H,selectedRows:!1,onSelect:!1,sortBy:q,apply:F,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:R,metadata:C,status:L,queryParams:T},actionsConfig:(null==D?void 0:D.length)>0&&Y,filterConfig:{items:[(0,d.Z)(F,T.search,P.N.formatMessage(p.Z.labelsFiltersSearchPatchSetTitle),P.N.formatMessage(p.Z.labelsFiltersSearchPatchSetPlaceholder))]},searchChipLabel:P.N.formatMessage(p.Z.labelsFiltersSearchPatchSetTitle),CreatePatchSetButton:U})))};T.propTypes={history:c().object};const I=(0,f.withRouter)(T)},5747:(e,t,r)=>{r.d(t,{G:()=>u,Kq:()=>p,OC:()=>f});var n=r(4942),a=r(57668),o=r(48881),s=r(22789);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?i(i({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},f=function(e,t){return t.loaded?i(i({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,a=i({},r);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return(0,o.PW)(a,n);case"SELECT_ENTITY":var c=(0,o.hd)(a,n);return t(e,c);case s.sq:return l;default:return r}}}}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.fc745eaf43f17c9cca13e5c1d43f3849.js.map