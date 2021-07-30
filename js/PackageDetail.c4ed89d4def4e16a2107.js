(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{8453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ne});var n=r(96156),a=r(28481),c=r(81159),i=r(34023),o=r(63540),s=r(20018),l=r(86350),u=r(45697),f=r.n(u),p=r(77865),m=r.n(p),d=r(61084),v=r(334),g=r(30893),h=r(49642),b=r(49287),y=r(18038),E=r(57358),O=r(53202),S=function(e){var t=e.attributes,r=e.isLoading;return m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(O.ZP,{loading:r,variant:O.x.spinner,centered:!0},m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null),m().createElement(i.v,{style:{whiteSpace:"pre-line"}},(0,E.J1)(t.description))))))};S.propTypes={attributes:f().object,isLoading:f().bool};const P=S;var k=r(20167),Z=r(60076),w=r(92137),j=r(87757),_=r.n(j),D=r(72573),N=r(33739),x=r(90747),T=r(16590),C=r(73888),F=r(4777),A=r(9557),L=r(5747),V=r(11220),H=r(13784),M=r(91607),R=r(32132),q=r(94859),I=r(20259),Q=r(58684),z=r(22122),G=r(80887),K=r(77221),U=r(82553),Y=r(89421);const J=function(e,t,r){var n=m().useState(!1),c=(0,a.Z)(n,2),i=c[0],o=c[1],s=m().useState(10),l=(0,a.Z)(s,2),u=l[0],f=l[1],p=t&&t.installed_evra,d=p&&t.installed_evra.split(","),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:"No version is available",disabled:!0}];return{type:Y.Yu.custom,label:"Version",value:"custom",filterValues:{children:m().createElement(G.P,(0,z.Z)({variant:v.length>0&&U.SelectVariant.checkbox||U.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Filter by package version",onToggle:function(e){o(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var c=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(c).concat(n)}}else{var i=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:i}}e(a)},selections:d,isOpen:i,"aria-labelledby":"patch-version-filter",placeholderText:"Filter by package version"},u<v.length&&{loadingVariant:{text:"View more",onClick:function(){f(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(K.SelectOption,(0,z.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.packageName,r=(0,d.useDispatch)(),n=(0,v.useHistory)(),c=m().useState((function(){return function(){return null}})),i=(0,a.Z)(c,2),o=i[0],s=i[1],l=m().useState([]),u=(0,a.Z)(l,2),f=u[0],p=u[1],h=(0,E.PZ)(n.location.search),b=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),y=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),O=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),S=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),P=(0,d.useSelector)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),k=m().useState(!1),Z=(0,a.Z)(k,2),j=Z[0],z=Z[1],G=P.systemProfile,K=P.selectedTags,U=P.filter,Y=P.search,W=P.sort,X=P.page,$=P.perPage;function ee(e){r((0,A.g5)(e))}m().useEffect((0,w.Z)(_().mark((function e(){return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(h),e.t0=p,e.next=4,(0,V.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),m().useEffect((function(){return function(){r((0,A.RV)())}}),[]);var te=(0,M.j5)(B(B({},U),{},{search:Y}),ee),re=(0,a.Z)(te,1)[0],ne={items:[(0,x.Z)(ee,Y,R.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),R.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,T.Z)(ee,U),J(ee,U,f)]},ae={filters:(0,E.mt)(U,Y),onDelete:re};function ce(){return(ce=(0,w.Z)(_().mark((function e(t){var r;return _().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(!0),e.next=3,t;case 3:r=e.sent,s((function(){return function(){return m().createElement(I.Z,{data:r})}})),z(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=(0,M.ry)(b,S,(function(){return(0,V.vo)(B(B({},P),{},{package_name:t,limit:-1})).then(E.lq)}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),oe=S&&(0,E.Qy)(S).length,se=(0,M.AR)(t,P,{csv:V.nx,json:V.bb},r),le=function(){var e={};return(0,E.Q6)(S).forEach((function(t){e[S[t]]?e[S[t]].push(t):e[S[t]]=[t]})),{data:e}},ue=(0,M.U)(V.vo,ee,{packageName:t},n);return m().createElement(m().Fragment,null,y.hasError&&m().createElement(C.Z,{code:y.code})||m().createElement(N.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},getEntities:ue,customFilters:{patchParams:{search:Y,filter:U,systemProfile:G,selectedTags:K}},onLoad:function(e){var t=e.mergeWithEntities;(0,F.z)(B({},t((0,L.Kq)(Q.Hd,L.OC),(0,E.fm)({page:X,perPage:$,sort:W,search:Y},h))))},exportConfig:{isDisabled:0===O,onSelect:se},tableProps:{canSelectAll:!1,onSelect:ie,variant:D.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:ne,activeFiltersConfig:ae,bulkSelect:(0,M.Pz)(oe,ie,{total_items:O},b),dedicatedAction:m().createElement(q.Z,{onClick:function(){return function(e){return ce.apply(this,arguments)}((0,E.Sz)((0,E.Q6)(S),le,E.R9,H.oN.package))},isDisabled:0===(0,E.Qy)(S).length||j,isLoading:j,ouia:"toolbar-remediation-button"})},m().createElement(o,null)))};X.propTypes={packageName:f().string};const $=X;function ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function te(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var re=function(e){var t=e.match,r=(0,d.useDispatch)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(R.N.formatMessage(g.Z.titlesPackages));(0,M.Iw)(f);var p=(0,d.useSelector)((function(e){return e.PackageDetailStore})),v=(0,d.useSelector)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,A.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,A.vh)())}}),[]);var b=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:R.N.formatMessage(g.Z.titlesPatchPackages),to:Z.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(k.Z,null):m().createElement(P,{attributes:te(te({},b),{},{id:u}),isLoading:v.isLoading})),m().createElement(l.Z,null,m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null,m().createElement(s.D,null,m().createElement(o.xv,{component:o.qO.h2},R.N.formatMessage(g.Z.titlesAffectedSystems)))),m().createElement(i.v,null,m().createElement($,{packageName:u})))))};re.propTypes={match:f().any};const ne=(0,v.withRouter)(re)}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.99af2f5d23216640a303.js.map