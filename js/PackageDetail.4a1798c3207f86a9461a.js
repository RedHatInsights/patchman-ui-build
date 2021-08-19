(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[155],{8453:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ae});var n=r(96156),a=r(28481),c=r(81159),i=r(34023),l=r(63540),o=r(20018),s=r(86350),u=r(45697),f=r.n(u),p=r(77865),m=r.n(p),d=r(61084),v=r(334),g=r(30893),h=r(49642),b=r(49287),y=r(18038),E=r(57358),O=r(53202),S=function(e){var t=e.attributes,r=e.isLoading;return m().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},m().createElement(y.P,{md:8,sm:12},m().createElement(O.ZP,{loading:r,variant:O.x.spinner,centered:!0},m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null),m().createElement(i.v,{style:{whiteSpace:"pre-line"}},(0,E.J1)(t.description))))))};S.propTypes={attributes:f().object,isLoading:f().bool};const P=S;var k=r(20167),Z=r(60076),w=r(92137),_=r(87757),j=r.n(_),D=r(72573),N=r(33739),x=r(90747),T=r(16590),C=r(22122),F=r(80887),L=r(77221),A=r(82553),V=r(89421);const H=function(e,t,r){var n=m().useState(!1),c=(0,a.Z)(n,2),i=c[0],l=c[1],o=m().useState(10),s=(0,a.Z)(o,2),u=s[0],f=s[1],p=t&&t.installed_evra,d=p&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),v=r.data&&r.data.sort().map((function(e){return{value:e.evra}}))||[{value:"No version is available",disabled:!0}];return{type:V.Yu.custom,label:"Version",value:"custom",filterValues:{children:m().createElement(F.P,(0,C.Z)({variant:v.length>0&&A.SelectVariant.checkbox||A.SelectVariant.typeaheadMulti,typeAheadAriaLabel:"Filter by package version",onToggle:function(e){l(e)},onSelect:function(r,n){var a={filter:{}};if(!d||d&&!d.includes(n)){var c=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(c).concat(n)}}else{var i=1!==d.length&&d.filter((function(e){return!e.includes(n)})).join(",")||void 0;a.filter={installed_evra:i}}e(a)},selections:d,isOpen:i,"aria-labelledby":"patch-version-filter",placeholderText:"Filter by package version"},u<v.length&&{loadingVariant:{text:"View more",onClick:function(){f(v.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),v.slice(0,u).map((function(e,t){return m().createElement(L.SelectOption,(0,C.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var M=r(73888),R=r(4777),q=r(9557),I=r(5747),Q=r(11220),z=r(13784),G=r(91607),K=r(32132),U=r(94859),Y=r(20259),J=r(58684);function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.packageName,r=(0,d.useDispatch)(),n=(0,v.useHistory)(),c=m().useState((function(){return function(){return null}})),i=(0,a.Z)(c,2),l=i[0],o=i[1],s=m().useState([]),u=(0,a.Z)(s,2),f=u[0],p=u[1],h=(0,E.PZ)(n.location.search),b=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),d.shallowEqual),y=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),O=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),S=(0,d.useSelector)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),P=(0,d.useSelector)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),k=m().useState(!1),Z=(0,a.Z)(k,2),_=Z[0],C=Z[1],F=P.systemProfile,L=P.selectedTags,A=P.filter,V=P.search,W=P.sort,X=P.page,$=P.perPage;function ee(e){r((0,q.g5)(e))}m().useEffect((0,w.Z)(j().mark((function e(){return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return ee(h),e.t0=p,e.next=4,(0,Q.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),m().useEffect((function(){return function(){r((0,q.RV)()),r((0,q.d)())}}),[]);var te=(0,G.j5)(B(B({},A),{},{search:V}),ee),re=(0,a.Z)(te,1)[0],ne={items:[(0,x.Z)(ee,V,K.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),K.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,T.Z)(ee,A),H(ee,A,f)]},ae={filters:(0,E.mt)(A,V),onDelete:re};function ce(){return(ce=(0,w.Z)(j().mark((function e(t){var r;return j().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),e.next=3,t;case 3:r=e.sent,o((function(){return function(){return m().createElement(Y.Z,{data:r})}})),C(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=(0,G.ry)(b,S,(function(){return(0,Q.vo)(B(B({},P),{},{package_name:t,limit:-1})).then(E.lq)}),(function(e){r({type:"SELECT_ENTITY",payload:e})}),(function(e){return"".concat(t,"-").concat(e.available_evra)})),le=S&&(0,E.Qy)(S).length,oe=(0,G.AR)(t,P,{csv:Q.nx,json:Q.bb},r),se=function(){var e={};return(0,E.Q6)(S).forEach((function(t){e[S[t]]?e[S[t]].push(t):e[S[t]]=[t]})),{data:e}},ue=(0,G.U)(Q.vo,ee,{packageName:t},n);return m().createElement(m().Fragment,null,m().createElement(l,null),y.hasError&&m().createElement(M.Z,{code:y.code})||m().createElement(N.Z,{disableDefaultColumns:!0,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},getEntities:ue,customFilters:{patchParams:{search:V,filter:A,systemProfile:F,selectedTags:L}},onLoad:function(e){var t=e.mergeWithEntities;(0,R.z)(B({},t((0,I.Kq)(J.Hd,I.OC),(0,E.fm)({page:X,perPage:$,sort:W,search:V},h))))},tableProps:{canSelectAll:!1,onSelect:ie,variant:D.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:ne,activeFiltersConfig:ae,bulkSelect:(0,G.Pz)(le,ie,{total_items:O},b),exportConfig:{isDisabled:0===O,onSelect:oe},dedicatedAction:m().createElement(U.Z,{onClick:function(){return function(e){return ce.apply(this,arguments)}((0,E.Sz)((0,E.Q6)(S),se,E.R9,z.oN.package))},isDisabled:0===(0,E.Qy)(S).length||_,isLoading:_,ouia:"toolbar-remediation-button"})}))};X.propTypes={packageName:f().string};const $=X;var ee=r(83215);function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var ne=function(e){var t=e.match,r=(0,d.useDispatch)(),n=m().useState(t.params.packageName),u=(0,a.Z)(n,1)[0],f="".concat(u," - ").concat(K.N.formatMessage(g.Z.titlesPackages));(0,G.Iw)(f);var p=(0,d.useSelector)((function(e){return e.PackageDetailStore})),v=(0,d.useSelector)((function(e){return e.PackageDetailStore.status}));m().useEffect((function(){r((0,q.Sb)({packageName:u}))}),[]),m().useEffect((function(){return function(){r((0,ee.L1)()),r((0,q.vh)())}}),[]);var b=p.data.attributes;return m().createElement(m().Fragment,null,m().createElement(h.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:K.N.formatMessage(g.Z.titlesPatchPackages),to:Z.H.packages.to,isActive:!1},{title:u,isActive:!0}]},v.hasError?m().createElement(k.Z,null):m().createElement(P,{attributes:re(re({},b),{},{id:u}),isLoading:v.isLoading})),m().createElement(s.Z,null,m().createElement(c.K,{hasGutter:!0},m().createElement(i.v,null,m().createElement(o.D,null,m().createElement(l.xv,{component:l.qO.h2},K.N.formatMessage(g.Z.titlesAffectedSystems)))),m().createElement(i.v,null,v.hasError&&m().createElement(M.Z,null)||m().createElement($,{packageName:u})))))};ne.propTypes={match:f().any};const ae=(0,v.withRouter)(ne)}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.925217c14852298c7879.js.map