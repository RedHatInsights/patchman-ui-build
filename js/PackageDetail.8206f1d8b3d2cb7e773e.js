(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{8453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>$});var n=r(96156),a=r(28481),c=r(81159),i=r(34023),l=r(63540),s=r(20018),o=r(86350),u=r(45697),p=r.n(u),f=r(77865),m=r.n(f),v=r(61084),d=r(334),g=r(30893),b=r(49642),h=r(49287),y=r(18038),O=r(57358),E=r(53202),S=function(e){var t=e.attributes,r=e.isLoading;return m().createElement(h.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(E.ZP,{loading:r,variant:E.x.spinner,centered:!0},m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null),m().createElement(i.v,{style:{whiteSpace:"pre-line"}},(0,O.J1)(t.description))))))};S.propTypes={attributes:p().object,isLoading:p().bool};const P=S;var k=r(20167),j=r(71198),w=r(92137),_=r(87757),Z=r.n(_),D=(r(6202),r(32895),r(59505),r(61829),r(72573)),N=r(33739),T=r(90747),x=r(16590),C=r(17915),F=r(9557),A=r(5747),L=r(11220),V=(r(13784),r(91607)),M=r(32132),H=(r(20259),r(58684)),I=r(73888),q=r(22122),R=r(80887),G=r(77221),K=r(82553),z=r(89421);const U=function(e,t,r){var n=m().useState(!1),c=(0,a.Z)(n,2),i=c[0],l=c[1],s=m().useState(10),o=(0,a.Z)(s,2),u=o[0],p=o[1],f=t&&t.installed_evra,v=f&&t.installed_evra.split(","),d=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:"No version is available",disabled:!0}];return{type:z.Yu.custom,label:"Version",value:"custom",filterValues:{children:m().createElement(R.P,(0,q.Z)({variant:d.length>0&&K.SelectVariant.checkbox||K.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Filter by package version",onToggle:function(e){l(e)},onSelect:function(r,n){var a={filter:{}};if(!v||v&&!v.includes(n)){var c=f&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(c).concat(n)}}else{var i=1!==v.length&&v.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:i}}e(a)},selections:v,isOpen:i,"aria-labelledby":"patch-version-filter",placeholderText:"Filter by package version"},u<d.length&&{loadingVariant:{text:"View more",onClick:function(){p(d.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),d.slice(0,u).map((function(e,t){return m().createElement(G.SelectOption,(0,q.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var J=function(e){var t=e.packageName,r=(0,v.useDispatch)(),c=m().useState((function(){return function(){return null}})),i=(0,a.Z)(c,2),l=(i[0],i[1],m().useState([])),s=(0,a.Z)(l,2),o=s[0],u=s[1],p=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),v.shallowEqual),f=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),d=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),b=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),h=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.packageSystemsParams)||{}})),y=(0,v.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),E=b.systemProfile,S=b.selectedTags,P=h.filter,k=h.search,j=h.sort,_=h.page,q=h.perPage;function R(e){r((0,F.g5)(e))}m().useEffect((0,w.Z)(Z().mark((function e(){return Z().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,(0,L.dh)({package_name:t});case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",(function(){return r((0,F.wI)())}));case 6:case"end":return e.stop()}}),e)}))),[]);var G=(0,V.j5)(P,R),K=(0,a.Z)(G,1)[0],z={items:[(0,T.Z)(R,k,M.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),M.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,x.Z)(R,P),U(R,P,o)]},J={filters:(0,O.mt)(P,k),onDelete:K},Q=(0,V.ry)(p,d,(function(){return(0,L.vo)({package_name:t,limit:-1})}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),W=d&&(0,O.Qy)(d).length,B=(0,V.AR)(t,b,{csv:L.nx,json:L.bb},r),X=(0,V.U)(L.vo,R,{packageName:t});return m().createElement(m().Fragment,null,f.hasError&&m().createElement(I.Z,{code:f.code})||m().createElement(N.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},getEntities:X,customFilters:{patchParams:{search:k,filter:P,systemProfile:E,selectedTags:S}},onLoad:function(e){var t=e.mergeWithEntities;(0,C.z)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t((0,A.Kq)(H.Hd,A.OC),(0,O.fm)(_,q,j))))},exportConfig:{isDisabled:0===y,onSelect:B},tableProps:{canSelectAll:!1,variant:D.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:z,activeFiltersConfig:J,bulkSelect:(0,V.Pz)(W,Q,{total_items:y},p)},!1))};J.propTypes={packageName:p().string};const Q=J;function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.match,r=(0,v.useDispatch)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],p="".concat(u," - ").concat(M.N.formatMessage(g.Z.titlesPackages));(0,V.Iw)(p);var f=(0,v.useSelector)((function(e){return e.PackageDetailStore})),d=(0,v.useSelector)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,F.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,F.vh)())}}),[]);var h=f.data.attributes;return m().createElement(m().Fragment,null,m().createElement(b.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:M.N.formatMessage(g.Z.titlesPatchPackages),to:j.H.packages.to,isActive:!1},{title:u,isActive:!0}]},d.hasError?m().createElement(k.Z,null):m().createElement(P,{attributes:B(B({},h),{},{id:u}),isLoading:d.isLoading})),m().createElement(o.Z,null,m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null,m().createElement(s.D,null,m().createElement(l.xv,{component:l.qO.h2},M.N.formatMessage(g.Z.titlesAffectedSystems)))),m().createElement(i.v,null,m().createElement(Q,{packageName:u})))))};X.propTypes={match:p().any};const $=(0,d.withRouter)(X)}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.39fd0bfb5db3f7681176.js.map