(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{2952:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>J});var n=r(96156),a=r(28481),c=r(81159),o=r(34023),s=r(63540),i=r(20018),l=r(86350),u=r(45697),f=r.n(u),m=r(77865),p=r.n(m),g=r(61084),b=r(334),y=r(30893),d=r(49642),S=r(49287),h=r(18038),v=r(57358),O=r(53202),P=function(e){var t=e.attributes,r=e.isLoading;return p().createElement(S.r,{hasGutter:!0,style:{minHeight:50}},p().createElement(h.P,{md:8,sm:12},p().createElement(O.ZP,{loading:r,variant:O.x.spinner,centered:!0},p().createElement(c.K,{hasGutter:!0},p().createElement(o.v,null),p().createElement(o.v,{style:{whiteSpace:"pre-line"}},(0,v.J1)(t.description))))))};P.propTypes={attributes:f().object,isLoading:f().bool};const E=P;var k=r(20167),j=r(71198),w=r(85061),Z=(r(6202),r(32895),r(59505),r(61829),r(72573)),_=r(33739),D=r(90747),N=r(16590),C=r(67396),L=r(9557),M=r(5747),A=r(11220),F=(r(13784),r(86032)),T=r(91607),H=r(32132),x=(r(20259),r(58684)),G=r(73888);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e){var t=e.packageName,r=(0,g.useDispatch)(),n=!1,c=p().useState((function(){return function(){return null}})),o=(0,a.Z)(c,2),s=(o[0],o[1],(0,g.useSelector)((function(e){return e.PackageSystemsStore.rows}))),i=(0,g.useSelector)((function(e){return e.PackageSystemsStore.status})),l=(0,g.useSelector)((function(e){return e.PackageSystemsStore.selectedRows})),u=p().useMemo((function(){return(0,F.GF)(s,l)}),[s]),f=(0,g.useSelector)((function(e){return e.PackageSystemsStore.metadata})),m=(0,g.useSelector)((function(e){return e.PackageSystemsStore.queryParams})),b=(0,g.useSelector)((function(e){var t=e.entities;return t&&t.columns})),d=(0,T.W5)(f,j),S=m.filter,h=m.search;p().useEffect((function(){return function(){return r((0,L.wI)())}}),[]),(0,T.KW)((function(){r((0,L.gB)(R({id:t},m)))}),[m]);var O=(0,T.T8)(f.limit,f.offset),P=(0,a.Z)(O,2),E=P[0],k=P[1];function j(e){r((0,L.g5)(e))}var I=(0,T.j5)(S,j),K=(0,a.Z)(I,1)[0],W={items:[(0,D.Z)(j,h,H.N.formatMessage(y.Z.labelsFiltersSystemsSearchTitle),H.N.formatMessage(y.Z.labelsFiltersSystemsSearchPlaceholder)),(0,N.Z)(j,S)]},q={filters:(0,v.mt)(S,h),onDelete:K},B=function(){var e=b&&b.filter((function(e){return"updated"===e.key}))[0];return e=R(R({},e),{},{key:"last_upload"}),[].concat((0,w.Z)(x.Hd),[e])},z=(0,T._f)(B(),j,0),J=p().useMemo((function(){return(0,v.hO)(B(),f.sort,0)}),[f.sort]),Q=(l&&(0,v.Qy)(l).length,(0,T.AR)(t,m,{csv:A.nx,json:A.bb},r));return p().createElement(p().Fragment,null,i.hasError&&p().createElement(G.Z,{code:i.code})||p().createElement(_.Z,{disableDefaultColumns:!0,onLoad:function(e){var t=e.mergeWithEntities,r=(0,C.b)();(0,C.z)(R({},t((0,M.rS)(x.Hd,r.getState().PackageSystemsStore))))},items:u,page:E,total:f.total_items,perPage:k,onRefresh:d,isLoaded:!i.isLoading,exportConfig:{isDisabled:0===f.total_items,onSelect:Q},tableProps:{canSelectAll:!1,onSort:f.total_items&&z,sortBy:f.total_items&&J,onSelect:false,variant:Z.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:W,activeFiltersConfig:q,bulkSelect:n},n))};K.propTypes={packageName:f().string};const W=K;function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z=function(e){var t=e.match,r=(0,g.useDispatch)(),n=p().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(H.N.formatMessage(y.Z.titlesPackages));(0,T.Iw)(f);var m=(0,g.useSelector)((function(e){return e.PackageDetailStore})),b=(0,g.useSelector)((function(e){return e.PackageDetailStore.status}));p().useEffect((function(){r((0,L.Sb)({packageName:u}))}),[]),p().useEffect((function(){return function(){r((0,L.vh)())}}),[]);var S=m.data.attributes;return p().createElement(p().Fragment,null,p().createElement(d.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:H.N.formatMessage(y.Z.titlesPatchPackages),to:j.H.packages.to,isActive:!1},{title:u,isActive:!0}]},b.hasError?p().createElement(k.Z,null):p().createElement(E,{attributes:B(B({},S),{},{id:u}),isLoading:b.isLoading})),p().createElement(l.Z,null,p().createElement(c.K,{hasGutter:!0},p().createElement(o.v,null,p().createElement(i.D,null,p().createElement(s.xv,{component:s.qO.h2},H.N.formatMessage(y.Z.titlesAffectedSystems)))),p().createElement(o.v,null,p().createElement(W,{packageName:u})))))};z.propTypes={match:f().any};const J=(0,b.withRouter)(z)}}]);