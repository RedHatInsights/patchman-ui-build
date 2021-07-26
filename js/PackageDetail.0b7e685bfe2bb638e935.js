(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{8453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ne});var n=r(96156),a=r(28481),c=r(81159),i=r(34023),o=r(63540),l=r(20018),s=r(86350),u=r(45697),f=r.n(u),p=r(77865),m=r.n(p),d=r(61084),v=r(334),g=r(30893),b=r(49642),h=r(49287),y=r(18038),E=r(57358),S=r(53202),O=function(e){var t=e.attributes,r=e.isLoading;return m().createElement(h.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(S.ZP,{loading:r,variant:S.x.spinner,centered:!0},m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null),m().createElement(i.v,{style:{whiteSpace:"pre-line"}},(0,E.J1)(t.description))))))};O.propTypes={attributes:f().object,isLoading:f().bool};const P=O;var k=r(20167),Z=r(71198),w=r(92137),j=r(87757),_=r.n(j),D=r(72573),N=r(33739),x=r(90747),T=r(16590),C=r(73888),F=r(4777),A=r(9557),L=r(5747),V=r(11220),M=r(13784),R=r(91607),H=r(32132),q=r(94859),I=r(20259),U=r(58684),z=r(22122),G=r(80887),K=r(77221),Q=r(82553),Y=r(89421);const J=function(e,t,r){var n=m().useState(!1),c=(0,a.Z)(n,2),i=c[0],o=c[1],l=m().useState(10),s=(0,a.Z)(l,2),u=s[0],f=s[1],p=t&&t.installed_evra,d=p&&t.installed_evra.split(","),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:"No version is available",disabled:!0}];return{type:Y.Yu.custom,label:"Version",value:"custom",filterValues:{children:m().createElement(G.P,(0,z.Z)({variant:v.length>0&&Q.SelectVariant.checkbox||Q.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Filter by package version",onToggle:function(e){o(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var c=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(c).concat(n)}}else{var i=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:i}}e(a)},selections:d,isOpen:i,"aria-labelledby":"patch-version-filter",placeholderText:"Filter by package version"},u<v.length&&{loadingVariant:{text:"View more",onClick:function(){f(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(K.SelectOption,(0,z.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.packageName,r=(0,d.useDispatch)(),n=m().useState((function(){return function(){return null}})),c=(0,a.Z)(n,2),i=c[0],o=c[1],l=m().useState([]),s=(0,a.Z)(l,2),u=s[0],f=s[1],p=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),v=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),b=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),h=(0,d.useSelector)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.selectedRows)||[]})),y=(0,d.useSelector)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),S=m().useState(!1),O=(0,a.Z)(S,2),P=O[0],k=O[1],Z=y.systemProfile,j=y.selectedTags,z=y.filter,G=y.search,K=y.sort,Q=y.page,Y=y.perPage;function W(e){r((0,A.g5)(e))}m().useEffect((0,w.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=f,e.next=3,(0,V.dh)({package_name:t});case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",(function(){return r((0,A.RV)())}));case 6:case"end":return e.stop()}}),e)}))),[]);var X=(0,R.j5)(z,W),$=(0,a.Z)(X,1)[0],ee={items:[(0,x.Z)(W,G,H.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),H.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,T.Z)(W,z),J(W,z,u)]},te={filters:(0,E.mt)(z,G),onDelete:$};function re(){return(re=(0,w.Z)(_().mark((function e(t){var r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return k(!0),e.next=3,t;case 3:r=e.sent,o((function(){return function(){return m().createElement(I.Z,{data:r})}})),k(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ne=(0,R.ry)(p,h,(function(){return(0,V.vo)(B(B({},y),{},{package_name:t,limit:-1}))}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),ae=h&&(0,E.Qy)(h).length,ce=(0,R.AR)(t,y,{csv:V.nx,json:V.bb},r),ie=function(){var e={};return(0,E.UZ)(h).forEach((function(t){e[h[t]]?e[h[t]].push(t):e[h[t]]=[t]})),{data:e}},oe=(0,R.U)(V.vo,W,{packageName:t});return m().createElement(m().Fragment,null,v.hasError&&m().createElement(C.Z,{code:v.code})||m().createElement(N.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},getEntities:oe,customFilters:{patchParams:{search:G,filter:z,systemProfile:Z,selectedTags:j}},onLoad:function(e){var t=e.mergeWithEntities;(0,F.z)(B({},t((0,L.Kq)(U.Hd,L.OC),(0,E.fm)(Q,Y,K))))},exportConfig:{isDisabled:0===b,onSelect:ce},tableProps:{canSelectAll:!1,onSelect:ne,variant:D.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:ee,activeFiltersConfig:te,bulkSelect:(0,R.Pz)(ae,ne,{total_items:b},p),dedicatedAction:m().createElement(q.Z,{onClick:function(){return function(e){return re.apply(this,arguments)}((0,E.Sz)((0,E.UZ)(h),ie,E.R9,M.oN.package))},isDisabled:0===(0,E.Qy)(h).length||P,isLoading:P,ouia:"toolbar-remediation-button"})},m().createElement(i,null)))};X.propTypes={packageName:f().string};const $=X;function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(e){var t=e.match,r=(0,d.useDispatch)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(H.N.formatMessage(g.Z.titlesPackages));(0,R.Iw)(f);var p=(0,d.useSelector)((function(e){return e.PackageDetailStore})),v=(0,d.useSelector)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,A.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,A.vh)())}}),[]);var h=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(b.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:H.N.formatMessage(g.Z.titlesPatchPackages),to:Z.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(k.Z,null):m().createElement(P,{attributes:te(te({},h),{},{id:u}),isLoading:v.isLoading})),m().createElement(s.Z,null,m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null,m().createElement(l.D,null,m().createElement(o.xv,{component:o.qO.h2},H.N.formatMessage(g.Z.titlesAffectedSystems)))),m().createElement(i.v,null,m().createElement($,{packageName:u})))))};re.propTypes={match:f().any};const ne=(0,v.withRouter)(re)}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.020ef61b92cf3b59521b.js.map