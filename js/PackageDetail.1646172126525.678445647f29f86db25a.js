(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{49642:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(48716),a=r(39173),o=r(45697),s=r.n(o),c=r(43297),i=r.n(c),l=r(85991),u=r(49489),p=r(334),f=function(e){var t=e.items,r=e.headerOUIA;return i().createElement(l.a,null,t.filter(Boolean).map((function(e){return i().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&i().createElement(p.Link,{to:e.to,"data-ouia-component-type":"".concat(r,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};f.propTypes={items:s().arrayOf(s().shape({isActive:s().bool,to:s().string,title:s().string})),headerOUIA:s().string};const m=f;var d=r(82819),v=r(98378),h=r(60076),g=function(e){var t=e.history,r=e.headerOUIA;return i().createElement(v.mQ,{onSelect:function(e,r){t.push(r)},activeKey:t.location.pathname,className:"patchman-tabs"},i().createElement(d.O,{eventKey:h.H.advisories.to,title:h.H.advisories.title,"data-ouia-component-type":"".concat(r,"-tab"),"data-ouia-component-id":"".concat(r,"-tab-").concat(h.H.advisories.title)}),i().createElement(d.O,{eventKey:h.H.systems.to,title:h.H.systems.title,"data-ouia-component-type":"".concat(r,"-tab"),"data-ouia-component-id":"".concat(r,"-tab-").concat(h.H.systems.title)}))};g.propTypes={history:s().object,headerOUIA:s().string};const b=(0,p.withRouter)(g);var y=function(e){var t=e.title,r=e.showTabs,o=e.breadcrumbs,s=e.children,c=e.headerOUIA;return i().createElement(i().Fragment,null,i().createElement(n.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},o&&i().createElement(m,{items:o,headerOUIA:c}),i().createElement(a.Z,{title:t}),s),r&&i().createElement(b,{headerOUIA:c}))};y.propTypes={title:s().string,showTabs:s().bool,breadcrumbs:s().array,children:s().any,headerOUIA:s().string};const O=y},52709:(e,t,r)=>{"use strict";r.d(t,{x:()=>g,ZP:()=>O});var n=r(45987),a=r(4942),o=r(56455),s=r(87462),c=r(43297),i=r.n(c),l=r(45697),u=r.n(l),p=r(94184),f=r.n(p),m=function(e){var t=e.centered,r=e.className,o=(0,n.Z)(e,["centered","className"]),c=f()("ins-c-spinner",(0,a.Z)({},"ins-m-center",t),r);return i().createElement("div",(0,s.Z)({role:"status",className:c},o),i().createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};m.propTypes={centered:u().bool,className:u().string};const d=m;var v,h=["loading","variant","children"],g={spinner:"spinner",skeleton:"skeleton"},b=(v={},(0,a.Z)(v,g.skeleton,(function(e){var t=e.size,r=e.isDark;return i().createElement(o.Z,{size:t,isDark:r})})),(0,a.Z)(v,g.spinner,(function(e){var t=e.centered;return i().createElement(d,{centered:t})})),v),y=function(e){var t=e.loading,r=e.variant,a=e.children,o=(0,n.Z)(e,h);return!1!==t?b[r](o):a};y.propTypes={loading:u().bool,variant:u().string,children:u().any};const O=y},8453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ae});var n=r(4942),a=r(29439),o=r(81159),s=r(34023),c=r(63540),i=r(20018),l=r(86350),u=r(45697),p=r.n(u),f=r(43297),m=r.n(f),d=r(28216),v=r(334),h=r(30893),g=r(49642),b=r(49287),y=r(18038),O=r(57358),E=r(52709),P=function(e){var t=e.attributes.description,r=e.isLoading,n=m().useState(1e3),c=(0,a.Z)(n,2),i=c[0],l=c[1];return t&&m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(E.ZP,{loading:r,variant:E.x.spinner,centered:!0},m().createElement(o.K,{hasGutter:!0},m().createElement(s.v,null),m().createElement(s.v,{style:{whiteSpace:"pre-line"}},t&&(0,O.Nt)(t,i,l))))))||m().createElement(f.Fragment,null)};P.propTypes={attributes:p().object,isLoading:p().bool};const S=P;var Z=r(20167),w=r(60076),j=r(15861),k=r(87757),N=r.n(k),_=r(72573),T=r(33739),D=r(90747),A=r(16590),I=r(87462),L=r(80887),C=r(77221),F=r(82553),M=r(44612),x=r(32132);const R=function(e,t,r){var n=m().useState(!1),o=(0,a.Z)(n,2),s=o[0],c=o[1],i=m().useState(10),l=(0,a.Z)(i,2),u=l[0],p=l[1],f=t&&t.installed_evra,d=f&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:x.N.formatMessage(h.Z.textNoVersionAvailable),disabled:!0}];return{type:M.Y.custom,label:x.N.formatMessage(h.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:m().createElement(L.Select,(0,I.Z)({variant:v.length>0&&F.SelectVariant.checkbox||F.SelectVariant.typeaheadMulti,typeAheadAriaLabel:x.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){c(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var o=f&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(o).concat(n)}}else{var s=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:s}}e(a)},selections:d,isOpen:s,"aria-labelledby":"patch-version-filter",placeholderText:x.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder)},u<v.lengt&&{loadingVariant:{text:"View more",onClick:function(){p(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(C.SelectOption,(0,I.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var U=r(73888),H=r(88031),V=r(9557),q=r(5747),K=r(11220),B=r(13784),G=r(91607),z=r(94859),Q=r(20259),Y=r(58684);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.packageName,r=(0,d.I0)(),n=(0,v.useHistory)(),o=m().useState((function(){return function(){return null}})),s=(0,a.Z)(o,2),c=s[0],i=s[1],l=m().useState([]),u=(0,a.Z)(l,2),p=u[0],f=u[1],g=(0,O.PZ)(n.location.search),b=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.wU),y=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),E=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),P=(0,d.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),S=(0,d.v9)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),Z=m().useState(!1),w=(0,a.Z)(Z,2),k=w[0],I=w[1],L=S.systemProfile,C=S.selectedTags,F=S.filter,M=S.search,W=S.sort,X=S.page,$=S.perPage;function ee(e){r((0,V.g5)(e))}m().useEffect((0,j.Z)(N().mark((function e(){return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(g),e.prev=1,e.t0=f,e.next=5,(0,K.dh)({package_name:t});case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),console.log("there were error");case 12:case"end":return e.stop()}}),e,null,[[1,9]])}))),[]),m().useEffect((function(){return function(){r((0,V.RV)()),r((0,V.d)())}}),[]);var te=(0,G.j5)(J(J({},F),{},{search:M}),ee),re=(0,a.Z)(te,1)[0],ne={items:[(0,D.Z)(ee,M,x.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle),x.N.formatMessage(h.Z.labelsFiltersSystemsSearchPlaceholder)),(0,A.Z)(ee,F),R(ee,F,p)]},ae={filters:(0,O.mt)(F,M,x.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle)),onDelete:re};function oe(){return(oe=(0,j.Z)(N().mark((function e(t){var r;return N().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(!0),e.next=3,t;case 3:r=e.sent,i((function(){return function(){return m().createElement(Q.Z,{data:r})}})),I(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=(0,G.ry)(b,P,(function(){return(0,K.vo)(J(J({},S),{},{package_name:t,limit:-1})).then(O.lq)}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),ce=P&&(0,O.Qy)(P).length,ie=(0,G.AR)(t,S,{csv:K.nx,json:K.bb},r),le=function(){var e={};return(0,O.Q6)(P).forEach((function(t){e[P[t]]?e[P[t]].push(t):e[P[t]]=[t]})),{data:e}},ue=(0,G.U)(K.vo,ee,{packageName:t},n);return m().createElement(m().Fragment,null,m().createElement(c,null),y.hasError&&m().createElement(U.Z,{code:y.code})||m().createElement(T.Z,{disableDefaultColumns:["system_profile","updated"],isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:Y.Hd,showTags:!0,getEntities:ue,customFilters:{patchParams:{search:M,filter:F,systemProfile:L,selectedTags:C}},onLoad:function(e){var t=e.mergeWithEntities;(0,H.z)(J({},t((0,q.Kq)(Y.Hd,q.OC),(0,O.fm)({page:X,perPage:$,sort:W,search:M},g))))},tableProps:{canSelectAll:!1,variant:_.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:ne,activeFiltersConfig:ae,bulkSelect:(0,G.Pz)(ce,se,{total_items:E},b),exportConfig:{isDisabled:0===E,onSelect:ie},dedicatedAction:m().createElement(z.Z,{onClick:function(){return function(e){return oe.apply(this,arguments)}((0,O.Sz)((0,O.Q6)(P),le,O.R9,B.oN.package))},isDisabled:0===(0,O.Qy)(P).length||k,isLoading:k,ouia:"toolbar-remediation-button"})}))};X.propTypes={packageName:p().string};const $=X;var ee=r(83215);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e){var t=e.match,r=(0,d.I0)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],p="".concat(u," - ").concat(x.N.formatMessage(h.Z.titlesPackages));(0,G.Iw)(p);var f=(0,d.v9)((function(e){return e.PackageDetailStore})),v=(0,d.v9)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,V.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,ee.L1)()),r((0,V.vh)())}}),[]);var b=f.data.attributes;return m().createElement(m().Fragment,null,m().createElement(g.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:x.N.formatMessage(h.Z.titlesPatchPackages),to:w.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(Z.Z,null):m().createElement(S,{attributes:re(re({},b),{},{id:u}),isLoading:v.isLoading})),m().createElement(l.Z,null,m().createElement(o.K,{hasGutter:!0},m().createElement(s.v,null,m().createElement(i.D,null,m().createElement(c.xv,{component:c.qO.h2},x.N.formatMessage(h.Z.titlesAffectedSystems)))),m().createElement(s.v,null,v.hasError&&m().createElement(U.Z,null)||!v.isLoading&&m().createElement($,{packageName:u})))))};ne.propTypes={match:p().any};const ae=(0,v.withRouter)(ne)},535:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>D});var n=r(4942),a=r(29439),o=r(86350),s=r(45697),c=r.n(s),i=r(43297),l=r.n(i),u=r(28216),p=r(334),f=r(30893),m=r(49642),d=r(90747),v=r(38776),h=r(9557),g=r(11220),b=r(57668),y=r(57358),O=r(91607),E=r(32132),P=r(83215),S=r(6202),Z=function(){return l().createElement(S.Button,null,E.N.formatMessage(f.Z.labelsButtonCreatePatchSet))},w=function(){return l().createElement(S.Button,{variant:"secondary"},E.N.formatMessage(f.Z.labelsButtonEditPatchSet))},j=[{key:"name",title:"Name",props:{width:50}},{key:"systems",title:"Systems",props:{width:50}}],k=[{title:"Edit patch set",onClick:function(e,t,r){console.log("edit")}},{title:"Assign patch set",onClick:function(e,t,r){console.log("assign")}},{title:"Remove patch set",onClick:function(e,t,r){console.log("remove")}}];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(e){var t=e.history,r=E.N.formatMessage(f.Z.titlesAdvisories);(0,O.Iw)(r);var n=(0,u.I0)(),s=l().useState(!0),c=(0,a.Z)(s,2),i=c[0],p=c[1],S=(0,u.v9)((function(e){return e.PatchSetsStore.rows})),N=(0,u.v9)((function(e){return e.PatchSetsStore.queryParams})),T=(0,u.v9)((function(e){return e.PatchSetsStore.selectedRows})),D=(0,u.v9)((function(e){return e.PatchSetsStore.metadata})),A=(0,u.v9)((function(e){return e.PatchSetsStore.status})),I=l().useMemo((function(){return(0,b.CN)(S,T,N)}),[S,T]);l().useEffect((function(){return function(){n((0,P.L1)())}}),[]),(0,O.KW)((function(){i?(R((0,y.PZ)(t.location.search)),p(!1)):(t.push((0,y.R_)(N)),n((0,h.BY)(N)))}),[N,i]);var L=(0,O.ry)(I,T,(function(){return(0,g.ai)(_(_({},N),{},{limit:-1}))}),(function(e){n((0,h.GL)(e))}),(function(e){return e.id})),C=(0,O._f)(j,R,2),F=l().useMemo((function(){return(0,y.hO)(j,D.sort,2)}),[D.sort]),M=(0,O.SL)(D.limit,R),x=(0,O._T)(R);function R(e){n((0,h.iW)(e))}return l().createElement(l().Fragment,null,l().createElement(m.Z,{title:E.N.formatMessage(f.Z.titlesPatchSet),headerOUIA:"advisories"}),l().createElement(o.Z,null,l().createElement(v.Z,{columns:j,compact:!0,onSetPage:M,onPerPageSelect:x,onSort:C,selectedRows:T,onSelect:L,sortBy:F,apply:R,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:I,metadata:D,status:A,queryParams:N},actionsConfig:k,filterConfig:{items:[(0,d.Z)(R,N.search,E.N.formatMessage(f.Z.labelsFiltersSearchPatchSetTitle),E.N.formatMessage(f.Z.labelsFiltersSearchPatchSetPlaceholder))]},searchChipLabel:E.N.formatMessage(f.Z.labelsFiltersSearchPatchSetTitle),CreatePatchSet:Z,EditPatchSet:w})))};T.propTypes={history:c().object};const D=(0,p.withRouter)(T)},5747:(e,t,r)=>{"use strict";r.d(t,{G:()=>u,OC:()=>p,Kq:()=>f});var n=r(4942),a=r(57668),o=r(48881),s=r(22789);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?i(i({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},p=function(e,t){return t.loaded?i(i({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},f=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,a=i({},r);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return a.status={isLoading:!0,hasError:!0},a;case"SELECT_ENTITY":var c=(0,o.hd)(a,n);return t(e,c);case s.sq:return l;default:return r}}}},58392:()=>{},72816:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.ed9701fca5eb60cb76a9c56f7b3cde81.js.map