(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{2952:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>z});var n=r(96156),a=r(28481),c=r(81159),s=r(34023),o=r(63540),i=r(20018),l=r(86350),u=r(45697),f=r.n(u),p=r(77865),m=r.n(p),g=r(61084),v=r(334),b=r(30893),d=r(49642),h=r(49287),y=r(18038),O=r(57358),E=r(53202),P=function(e){var t=e.attributes,r=e.isLoading;return m().createElement(h.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(E.ZP,{loading:r,variant:E.x.spinner,centered:!0},m().createElement(c.K,{hasGutter:!0},m().createElement(s.v,null),m().createElement(s.v,{style:{whiteSpace:"pre-line"}},(0,O.J1)(t.description))))))};P.propTypes={attributes:f().object,isLoading:f().bool};const S=P;var j=r(20167),k=r(71198),w=(r(6202),r(32895),r(59505),r(61829),r(72573)),Z=r(33739),_=r(90747),D=r(16590),N=r(17915),T=r(9557),C=r(5747),F=r(11220),L=(r(13784),r(91607)),A=r(32132),I=(r(20259),r(58684)),M=r(73888);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var x=function(e){var t=e.packageName,r=(0,g.useDispatch)(),c=m().useState((function(){return function(){return null}})),s=(0,a.Z)(c,2),o=(s[0],s[1],(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),g.shallowEqual)),i=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),l=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),u=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.queryParams)||{}})),f=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.packageSystemsParams)||{}})),p=(0,g.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),v=u.systemProfile,d=u.selectedTags,h=f.filter,y=f.search,E=f.sort,P=f.page,S=f.perPage;function j(e){r((0,T.g5)(e))}m().useEffect((function(){return function(){return r((0,T.wI)())}}),[]);var k=(0,L.j5)(h,j),x=(0,a.Z)(k,1)[0],H={items:[(0,_.Z)(j,y,A.N.formatMessage(b.Z.labelsFiltersSystemsSearchTitle),A.N.formatMessage(b.Z.labelsFiltersSystemsSearchPlaceholder)),(0,D.Z)(j,h)]},R={filters:(0,O.mt)(h,y),onDelete:x},G=(0,L.ry)(o,l,(function(){return(0,F.vo)({package_name:t,limit:-1})}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),K=l&&(0,O.Qy)(l).length,z=(0,L.AR)(t,u,{csv:F.nx,json:F.bb},r),U=(0,L.U)(F.vo,j,{packageName:t});return m().createElement(m().Fragment,null,i.hasError&&m().createElement(M.Z,{code:i.code})||m().createElement(Z.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},getEntities:U,customFilters:{patchParams:{search:y,filter:h,systemProfile:v,selectedTags:d}},onLoad:function(e){var t=e.mergeWithEntities;(0,N.z)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t((0,C.Kq)(I.Hd,C.OC),(0,O.fm)(P,S,E))))},exportConfig:{isDisabled:0===p,onSelect:z},tableProps:{canSelectAll:!1,onSelect:G,variant:w.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:H,activeFiltersConfig:R,bulkSelect:(0,L.Pz)(K,G,{total_items:p},o)},!1))};x.propTypes={packageName:f().string};const H=x;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e){var t=e.match,r=(0,g.useDispatch)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(A.N.formatMessage(b.Z.titlesPackages));(0,L.Iw)(f);var p=(0,g.useSelector)((function(e){return e.PackageDetailStore})),v=(0,g.useSelector)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,T.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,T.vh)())}}),[]);var h=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(d.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:A.N.formatMessage(b.Z.titlesPatchPackages),to:k.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(j.Z,null):m().createElement(S,{attributes:G(G({},h),{},{id:u}),isLoading:v.isLoading})),m().createElement(l.Z,null,m().createElement(c.K,{hasGutter:!0},m().createElement(s.v,null,m().createElement(i.D,null,m().createElement(o.xv,{component:o.qO.h2},A.N.formatMessage(b.Z.titlesAffectedSystems)))),m().createElement(s.v,null,m().createElement(H,{packageName:u})))))};K.propTypes={match:f().any};const z=(0,v.withRouter)(K)}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.1587a7199a8bea920a3a.js.map