(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{8453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ne});var a=r(96156),n=r(28481),c=r(81159),i=r(34023),s=r(63540),l=r(20018),o=r(86350),u=r(45697),f=r.n(u),p=r(77865),m=r.n(p),d=r(61084),v=r(334),g=r(30893),h=r(49642),b=r(49287),y=r(18038),E=r(57358),S=r(53202),P=function(e){var t=e.attributes,r=e.isLoading;return m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(S.ZP,{loading:r,variant:S.x.spinner,centered:!0},m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null),m().createElement(i.v,{style:{whiteSpace:"pre-line"}},(0,E.J1)(t.description))))))};P.propTypes={attributes:f().object,isLoading:f().bool};const O=P;var Z=r(20167),k=r(60076),w=r(92137),_=r(87757),j=r.n(_),N=r(72573),D=r(33739),x=r(90747),T=r(16590),F=r(22122),V=r(80887),C=r(77221),L=r(82553),M=r(89421),A=r(32132);const H=function(e,t,r){var a=m().useState(!1),c=(0,n.Z)(a,2),i=c[0],s=c[1],l=m().useState(10),o=(0,n.Z)(l,2),u=o[0],f=o[1],p=t&&t.installed_evra,d=p&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:A.N.formatMessage(g.Z.textNoVersionAvailable),disabled:!0}];return{type:M.Yu.custom,label:A.N.formatMessage(g.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:m().createElement(V.P,(0,F.Z)({variant:v.length>0&&L.SelectVariant.checkbox||L.SelectVariant.typeaheadMulti,typeAheadAriaLabel:A.N.formatMessage(g.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){s(e)},onSelect:function(r,a){var n={filter:{}};if(!d||d&&!d.includes(a)){var c=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";n.filter={installed_evra:"".concat(c).concat(a)}}else{var i=1!==d.length&&d.filter((function(e){return!e.includes(a)})).join(",")||void 0;n.filter={installed_evra:i}}e(n)},selections:d,isOpen:i,"aria-labelledby":"patch-version-filter",placeholderText:A.N.formatMessage(g.Z.labelsFiltersPackageVersionPlaceholder)},u<v.lengt&&{loadingVariant:{text:"View more",onClick:function(){f(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(C.SelectOption,(0,F.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var R=r(73888),q=r(4777),I=r(9557),Q=r(5747),z=r(11220),G=r(13784),K=r(91607),U=r(94859),Y=r(20259),J=r(58684);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.packageName,r=(0,d.useDispatch)(),a=(0,v.useHistory)(),c=m().useState((function(){return function(){return null}})),i=(0,n.Z)(c,2),s=i[0],l=i[1],o=m().useState([]),u=(0,n.Z)(o,2),f=u[0],p=u[1],h=(0,E.PZ)(a.location.search),b=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),y=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),S=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),P=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),O=(0,d.useSelector)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),Z=m().useState(!1),k=(0,n.Z)(Z,2),_=k[0],F=k[1],V=O.systemProfile,C=O.selectedTags,L=O.filter,M=O.search,W=O.sort,X=O.page,$=O.perPage;function ee(e){r((0,I.g5)(e))}m().useEffect((0,w.Z)(j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(h),e.t0=p,e.next=4,(0,z.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),m().useEffect((function(){return function(){r((0,I.RV)()),r((0,I.d)())}}),[]);var te=(0,K.j5)(B(B({},L),{},{search:M}),ee),re=(0,n.Z)(te,1)[0],ae={items:[(0,x.Z)(ee,M,A.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),A.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,T.Z)(ee,L),H(ee,L,f)]},ne={filters:(0,E.mt)(L,M,A.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle)),onDelete:re};function ce(){return(ce=(0,w.Z)(j().mark((function e(t){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return F(!0),e.next=3,t;case 3:r=e.sent,l((function(){return function(){return m().createElement(Y.Z,{data:r})}})),F(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=(0,K.ry)(b,P,(function(){return(0,z.vo)(B(B({},O),{},{package_name:t,limit:-1})).then(E.lq)}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),se=P&&(0,E.Qy)(P).length,le=(0,K.AR)(t,O,{csv:z.nx,json:z.bb},r),oe=function(){var e={};return(0,E.Q6)(P).forEach((function(t){e[P[t]]?e[P[t]].push(t):e[P[t]]=[t]})),{data:e}},ue=(0,K.U)(z.vo,ee,{packageName:t},a);return m().createElement(m().Fragment,null,m().createElement(s,null),y.hasError&&m().createElement(R.Z,{code:y.code})||m().createElement(D.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},getEntities:ue,customFilters:{patchParams:{search:M,filter:L,systemProfile:V,selectedTags:C}},onLoad:function(e){var t=e.mergeWithEntities;(0,q.z)(B({},t((0,Q.Kq)(J.Hd,Q.OC),(0,E.fm)({page:X,perPage:$,sort:W,search:M},h))))},tableProps:{canSelectAll:!1,onSelect:ie,variant:N.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:ae,activeFiltersConfig:ne,bulkSelect:(0,K.Pz)(se,ie,{total_items:S},b),exportConfig:{isDisabled:0===S,onSelect:le},dedicatedAction:m().createElement(U.Z,{onClick:function(){return function(e){return ce.apply(this,arguments)}((0,E.Sz)((0,E.Q6)(P),oe,E.R9,G.oN.package))},isDisabled:0===(0,E.Qy)(P).length||_,isLoading:_,ouia:"toolbar-remediation-button"})}))};X.propTypes={packageName:f().string};const $=X;var ee=r(83215);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ae=function(e){var t=e.match,r=(0,d.useDispatch)(),a=m().useState(t.params.packageName),u=(0,n.Z)(a,1)[0],f="".concat(u," - ").concat(A.N.formatMessage(g.Z.titlesPackages));(0,K.Iw)(f);var p=(0,d.useSelector)((function(e){return e.PackageDetailStore})),v=(0,d.useSelector)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,I.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,ee.L1)()),r((0,I.vh)())}}),[]);var b=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:A.N.formatMessage(g.Z.titlesPatchPackages),to:k.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(Z.Z,null):m().createElement(O,{attributes:re(re({},b),{},{id:u}),isLoading:v.isLoading})),m().createElement(o.Z,null,m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null,m().createElement(l.D,null,m().createElement(s.xv,{component:s.qO.h2},A.N.formatMessage(g.Z.titlesAffectedSystems)))),m().createElement(i.v,null,v.hasError&&m().createElement(R.Z,null)||!v.isLoading&&m().createElement($,{packageName:u})))))};ae.propTypes={match:f().any};const ne=(0,v.withRouter)(ae)}}]);