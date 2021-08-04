(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{8453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ae});var n=r(96156),a=r(28481),c=r(81159),i=r(34023),o=r(63540),s=r(20018),l=r(86350),u=r(45697),f=r.n(u),p=r(77865),m=r.n(p),d=r(61084),v=r(334),g=r(30893),h=r(49642),b=r(49287),y=r(18038),E=r(57358),O=r(53202),S=function(e){var t=e.attributes,r=e.isLoading;return m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(O.ZP,{loading:r,variant:O.x.spinner,centered:!0},m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null),m().createElement(i.v,{style:{whiteSpace:"pre-line"}},(0,E.J1)(t.description))))))};S.propTypes={attributes:f().object,isLoading:f().bool};const P=S;var k=r(20167),Z=r(60076),w=r(92137),j=r(87757),_=r.n(j),D=r(72573),N=r(33739),x=r(90747),T=r(16590),C=r(73888),F=r(4777),L=r(9557),A=r(5747),V=r(11220),H=r(13784),M=r(91607),R=r(32132),q=r(94859),I=r(20259),Q=r(58684),z=r(22122),G=r(80887),K=r(77221),U=r(82553),Y=r(89421);const J=function(e,t,r){var n=m().useState(!1),c=(0,a.Z)(n,2),i=c[0],o=c[1],s=m().useState(10),l=(0,a.Z)(s,2),u=l[0],f=l[1],p=t&&t.installed_evra,d=p&&t.installed_evra.split(","),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:"No version is available",disabled:!0}];return{type:Y.Yu.custom,label:"Version",value:"custom",filterValues:{children:m().createElement(G.P,(0,z.Z)({variant:v.length>0&&U.SelectVariant.checkbox||U.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Filter by package version",onToggle:function(e){o(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var c=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(c).concat(n)}}else{var i=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:i}}e(a)},selections:d,isOpen:i,"aria-labelledby":"patch-version-filter",placeholderText:"Filter by package version"},u<v.length&&{loadingVariant:{text:"View more",onClick:function(){f(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(K.SelectOption,(0,z.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var W=r(49629);function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?B(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $=function(e){var t=e.packageName,r=(0,d.useDispatch)(),n=(0,v.useHistory)(),c=m().useState((function(){return function(){return null}})),i=(0,a.Z)(c,2),o=i[0],s=i[1],l=m().useState([]),u=(0,a.Z)(l,2),f=u[0],h=u[1],b=(0,E.PZ)(n.location.search),y=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),O=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),S=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),P=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),k=(0,d.useSelector)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),Z=m().useState(!1),j=(0,a.Z)(Z,2),z=j[0],G=j[1],K=k.systemProfile,U=k.selectedTags,Y=k.filter,B=k.search,$=k.sort,ee=k.page,te=k.perPage;function re(e){r((0,L.g5)(e))}m().useEffect((0,w.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return re(b),e.t0=h,e.next=4,(0,V.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),m().useEffect((function(){return function(){r((0,L.RV)())}}),[]);var ne=(0,M.j5)(X(X({},Y),{},{search:B}),re),ae=(0,a.Z)(ne,1)[0],ce={items:[(0,x.Z)(re,B,R.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),R.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,T.Z)(re,Y),J(re,Y,f)]},ie={filters:(0,E.mt)(Y,B),onDelete:ae};function oe(){return(oe=(0,w.Z)(_().mark((function e(t){var r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return G(!0),e.next=3,t;case 3:r=e.sent,s((function(){return function(){return m().createElement(I.Z,{data:r})}})),G(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var se=(0,M.ry)(y,P,(function(){return(0,V.vo)(X(X({},k),{},{package_name:t,limit:-1})).then(E.lq)}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),le=P&&(0,E.Qy)(P).length,ue=(0,M.AR)(t,k,{csv:V.nx,json:V.bb},r),fe=function(){var e={};return(0,E.Q6)(P).forEach((function(t){e[P[t]]?e[P[t]].push(t):e[P[t]]=[t]})),{data:e}},pe=(0,M.U)(V.vo,re,{packageName:t},n);return m().createElement(m().Fragment,null,O.hasError&&m().createElement(C.Z,{code:O.code})||m().createElement(N.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},getEntities:pe,customFilters:{patchParams:{search:B,filter:Y,systemProfile:K,selectedTags:U}},onLoad:function(e){var t=e.mergeWithEntities;(0,F.z)(X({},t((0,A.Kq)(Q.Hd,A.OC),(0,E.fm)({page:ee,perPage:te,sort:$,search:B},b))))},tableProps:{canSelectAll:!1,onSelect:se,variant:D.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0}},m().createElement(p.Fragment,null,void 0!==O.isLoading&&m().createElement(W.Z,{className:"patch-systems-primary-toolbar",filterConfig:ce,activeFiltersConfig:ie,bulkSelect:(0,M.Pz)(le,se,{total_items:S},y),dedicatedAction:m().createElement(q.Z,{onClick:function(){return function(e){return oe.apply(this,arguments)}((0,E.Sz)((0,E.Q6)(P),fe,E.R9,H.oN.package))},isDisabled:0===(0,E.Qy)(P).length||z,isLoading:z,ouia:"toolbar-remediation-button",exportConfig:{isDisabled:0===S,onSelect:ue}})}),m().createElement(o,null))))};$.propTypes={packageName:f().string};const ee=$;function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e){var t=e.match,r=(0,d.useDispatch)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(R.N.formatMessage(g.Z.titlesPackages));(0,M.Iw)(f);var p=(0,d.useSelector)((function(e){return e.PackageDetailStore})),v=(0,d.useSelector)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,L.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,L.vh)())}}),[]);var b=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:R.N.formatMessage(g.Z.titlesPatchPackages),to:Z.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(k.Z,null):m().createElement(P,{attributes:re(re({},b),{},{id:u}),isLoading:v.isLoading})),m().createElement(l.Z,null,m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null,m().createElement(s.D,null,m().createElement(o.xv,{component:o.qO.h2},R.N.formatMessage(g.Z.titlesAffectedSystems)))),m().createElement(i.v,null,m().createElement(ee,{packageName:u})))))};ne.propTypes={match:f().any};const ae=(0,v.withRouter)(ne)}}]);