"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[6432],{56909:(e,t,r)=>{r.d(t,{Z:()=>U});var n=r(29439),o=r(43297),a=r.n(o),c=r(28216),s=r(96620),i=r(88940),u=r(55140),l=r(371),p=r(9557),f=r(5391),y=r(35240),O=r(93433),d=r(87462),b=r(4942),P=r(45697),g=r.n(P),v=r(85333),m=r(95249),j=function(e){var t=e.children,r=e.requiredPermissions,n=void 0===r?[]:r,o=(0,m.c$)(n),c=o.hasAccess;return o.isLoading?"":c?t:a().createElement(v.Z,{serviceName:"patch"})};j.propTypes={children:g().node,requiredPermissions:g().array};const h=j;var E=r(52643),w=r(2372),D=r(91607),S=r(13784),_=r(59704),L=r.n(_);function I(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?I(Object(r),!0).forEach((function(t){(0,b.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var N=function(e,t){var r=e.component,n=e.isExact,o=e.path,c=e.props,i=void 0===c?{}:c,u=e.requiredPermissions,l={isExact:n,path:o},p=k(k({},i),{},{route:k({},e)});return a().createElement(s.Route,(0,d.Z)({},l,{key:t}),a().createElement(h,{requiredPermissions:u},a().createElement(r,p)))};N.propTypes={component:g().node,isExact:g().bool,path:g().string,props:g().object};var T=(0,o.lazy)((function(){return Promise.all([r.e(5565),r.e(9351),r.e(4854),r.e(3935),r.e(2898),r.e(3962),r.e(2303),r.e(7020)]).then(r.bind(r,79202))})),Z=(0,o.lazy)((function(){return Promise.all([r.e(5565),r.e(9351),r.e(4854),r.e(3935),r.e(2898),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(9023),r.e(6651),r.e(2303),r.e(4025),r.e(5113),r.e(6743)]).then(r.bind(r,10637))})),F=(0,o.lazy)((function(){return Promise.all([r.e(5565),r.e(9351),r.e(4854),r.e(3935),r.e(2898),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(9023),r.e(6651),r.e(2303),r.e(4025),r.e(5113),r.e(9577),r.e(184)]).then(r.bind(r,13454))})),R=(0,o.lazy)((function(){return Promise.all([r.e(9351),r.e(2898),r.e(7521),r.e(2303),r.e(4025),r.e(4125),r.e(423)]).then(r.bind(r,34951))})),q=(0,o.lazy)((function(){return Promise.all([r.e(5565),r.e(9351),r.e(4854),r.e(3935),r.e(2898),r.e(3962),r.e(2303),r.e(1677)]).then(r.bind(r,44662))})),C=(0,o.lazy)((function(){return Promise.all([r.e(9351),r.e(2898),r.e(7521),r.e(4680),r.e(2303),r.e(4125),r.e(9155)]).then(r.bind(r,8453))})),G=(0,o.lazy)((function(){return Promise.all([r.e(5565),r.e(9351),r.e(4854),r.e(3935),r.e(2898),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(9023),r.e(6651),r.e(2303),r.e(4025),r.e(5113),r.e(3004)]).then(r.bind(r,51335))})),A=(0,o.lazy)((function(){return Promise.all([r.e(5565),r.e(9351),r.e(4854),r.e(3935),r.e(2898),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(9023),r.e(6651),r.e(2303),r.e(4025),r.e(5113),r.e(9603)]).then(r.bind(r,88929))})),J=function(){var e=(0,s.useHistory)(),t=(0,u.Z)(),r=(0,D.ye)(S.VH.patch_set,t),n=["patch:*:*","patch:*:read"],c=[{path:"/advisories/:advisoryId/:inventoryId",isExact:!0,requiredPermissions:n,component:F},{path:"/advisories/:advisoryId",isExact:!0,requiredPermissions:n,component:R},{path:"/advisories",isExact:!0,requiredPermissions:n,component:T},{path:"/systems/:inventoryId",isExact:!0,requiredPermissions:n,component:F},{path:"/systems",isExact:!0,requiredPermissions:n,component:Z},{path:"/packages/:packageName/:inventoryId",isExact:!0,requiredPermissions:n,component:F},{path:"/packages/:packageName",isExact:!0,requiredPermissions:n,component:C},{path:"/packages",isExact:!0,requiredPermissions:n,component:q}].concat((0,O.Z)(r?[{path:"/templates/:templateName",isExact:!0,requiredPermissions:n,component:A},{path:"/templates",isExact:!0,requiredPermissions:n,component:G}]:[])),i=(0,o.useCallback)((function(){if(t)return t.on("APP_NAVIGATION",(function(t){t.domEvent&&e.push("/".concat(t.navId))}))}),[]);return(0,o.useEffect)((function(){var e=i();return function(){return e()}}),[]),a().createElement(o.Suspense,{fallback:a().createElement(E.b,null,a().createElement(w.$,null))},a().createElement(s.Switch,null,c.map(N),a().createElement(s.Redirect,{from:"/advisories/:advisoryId/:inventoryId",to:"/systems/:inventoryId"}),a().createElement(s.Redirect,{from:"/packages/:packageName/:inventoryId",to:"/systems/:inventoryId"}),a().createElement(s.Route,{render:function(){return(!r||!L()(c,(function(t){return t.to===e.location.pathname})))&&a().createElement(s.Redirect,{to:"/advisories"})}})))};const U=function(){var e=(0,c.I0)(),t=(0,u.Z)(),r=(0,o.useState)({selectedTags:[],systemProfile:!1}),O=(0,n.Z)(r,2),d=O[0],b=O[1];return(0,o.useEffect)((function(){var r;null==t||null===(r=t.globalFilterScope)||void 0===r||r.call(t,"insights"),null!=t&&t.globalFilterScope&&(null==t||t.on("GLOBAL_FILTER_UPDATE",(function(r){var n,o,a,c=r.data,s=null==t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,c,!1,!0)[1],i=null==t||null===(o=t.mapGlobalFilter)||void 0===o||null===(a=o.call(t,c))||void 0===a?void 0:a.filter((function(e){return!e.includes("Workloads")})),u=(0,f.gA)(i,s,null==c?void 0:c.Workloads);JSON.stringify(d)!==JSON.stringify(u)&&(e((0,p.M6)(u)),b(u),e((0,p.df)(u.selectedTags)),e((0,p.WY)(u.systemProfile)))})))}),[]),a().createElement(a().Fragment,null,a().createElement(i.ZP,null),a().createElement(l.r,{appName:"patch"},a().createElement(s.BrowserRouter,{basename:(0,y.eb)(window.location.pathname)},a().createElement(J,null))))}},92544:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={loaded:!1},s=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,o=arguments.length>1?arguments[1]:void 0,s=o.type,i=o.payload;switch(s){case"FETCH_SYSTEM_DETAIL_FULFILLED":return n.hasThirdPartyRepo=null===(e=i.data)||void 0===e?void 0:e.attributes.third_party,n.patchSetName=null===(t=i.data)||void 0===t?void 0:t.attributes.baseline_name,n.patchSetId=null===(r=i.data)||void 0===r?void 0:r.attributes.baseline_id,n;case"LOAD_ENTITY_PENDING":return a(a({},n),{},{loaded:!1});case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return a(a({},n),{},{loaded:!0});default:return n}}},7322:(e,t,r)=>{r.d(t,{E:()=>M,h:()=>K});var n=r(84885),o=r(83215),a=r(57283),c=r.n(a),s=r(4942),i=r(22789),u=r(48881);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={data:{attributes:{}},status:{isLoading:!0}},y=r(13784);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g={data:{attributes:{}},status:{isLoading:!0}};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var j=m(m({},y.tO),{},{queryParams:y.eZ}),h=r(85612),E=r(92544),w=r(74241),D=r(5391);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var _={selectedRows:{},queryParams:{page:1,perPage:20,filter:{stale:[!0,!1]}}};function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var I={selectedRows:{},queryParams:{page:1,perPage:20}};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var N={selectedRows:{},queryParams:{page:1,perPage:20}};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F={selectedGlobalTags:[],selectedTags:[],systemProfile:void 0};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{}};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={data:{attributes:{}},status:{isLoading:!0}};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{},data:null};function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var H={patchSet:{config:{}},assignedSystems:[],status:{},error:{}},$=r(97779),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||$.qC,M={AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.tO,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.Oy+"_FULFILLED":return(0,u.If)(r,t);case i.Oy+"_PENDING":return(0,u.oZ)(r);case i.Oy+"_REJECTED":return(0,u.PW)(r,t);case i.re:return(0,u.P7)(r,t);case i.SO:return(0,u.gW)(r,t);case i.p7:return(0,u.hd)(r,t);case i.Cg:return(0,u.P7)(r,t);case i.BR:return r.areAllSelected=t.payload,r;default:return e}},SystemDetailStore:E.J,SystemAdvisoryListStore:h.g,AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,r=p({},e);switch(t.type){case i.J$+"_FULFILLED":return p(p({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.J$+"_PENDING":return(0,u.oZ)(r);case i.J$+"_REJECTED":return(0,u.PW)(r,t);case i.ad:return f;default:return e}},SystemPackageListStore:w.f,PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,r=m({},e);switch(t.type){case i.Gc+"_PENDING":return(0,u.oZ)(r);case i.Gc+"_FULFILLED":return(0,u.If)(r,t);case i.Gc+"_REJECTED":return(0,u.PW)(r,t);case i.Wo:case i.Cg:return(0,u.P7)(r,t);default:return e}},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0,r=P({},e);switch(t.type){case i.lH+"_FULFILLED":return P(P({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.lH+"_PENDING":return(0,u.oZ)(r);case i.lH+"_REJECTED":return(0,u.PW)(r,t);case i.$L:return g;default:return e}},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.tO,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.lO+"_FULFILLED":return(0,u.If)(r,t);case i.lO+"_PENDING":return(0,u.oZ)(r);case i.lO+"_REJECTED":return(0,u.PW)(r,t);case i.gx:return(0,u.P7)(r,t);default:return e}},SystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.pl:return r.queryParams=(0,D.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i._E:return r.metadata=t.payload,r;case i.BR:return r.areAllSelected=t.payload,r;default:return e}},PackageSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.pW:return r.queryParams=(0,D.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.i3:return I;default:return e}},AdvisorySystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.Rr:return r.queryParams=(0,D.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.vh:return N;default:return e}},GlobalFilterStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.mD:return Z(Z({},e),{},{selectedTags:t.payload});case i.y0:return Z(Z({},e),{},{selectedGlobalTags:t.payload});case i.lz:return Z(Z({},e),{},{systemProfile:t.payload});default:return e}},PatchSetsStore:function(){var e,t=arguments.length>1?arguments[1]:void 0,r=q({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:C);switch(t.type){case i.oc+"_FULFILLED":return q(q({},r),{},{rows:null===(e=t.payload.data)||void 0===e?void 0:e.map((function(e){return q(q({},e.attributes),{},{id:e.id})})),metadata:t.payload.meta||{},error:{},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.oc+"_PENDING":return(0,u.oZ)(r);case i.oc+"_REJECTED":return(0,u.PW)(r,t);case i.oT:return(0,u.P7)(r,t);case i.r8:return(0,u.hd)(r,t);case i.hM:return C;default:return r}},PatchSetDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,r=A({},e);switch(t.type){case i.TR+"_FULFILLED":return A(A({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.TR+"_PENDING":return(0,u.oZ)(r);case i.TR+"_REJECTED":return(0,u.PW)(r,t);case i.yo:return J;default:return e}},PatchSetDetailSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,r=x({},e);switch(t.type){case i.fn+"_FULFILLED":return x(x({},r),{},{rows:t.payload.data,metadata:t.payload.meta||{},error:{},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.fn+"_PENDING":return(0,u.oZ)(r);case i.fn+"_REJECTED":return(0,u.PW)(r,t);case i.lD:return(0,u.P7)(r,t);case i.mk:return W;default:return e}},SpecificPatchSetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.jP+"_FULFILLED":var r,n=(null===(r=t.payload)||void 0===r?void 0:r.data)||{config:{}},o=n.attributes,a=o.config,c=o.name,s=o.description,l=n.id;return Y(Y({},e),{},{patchSet:{name:c,description:s,config:a||{},id:l},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.jP+"_PENDING":return(0,u.oZ)(e);case i.jP+"_REJECTED":return(0,u.PW)(e,t);case i.bn+"_FULFILLED":var p,f=(null===(p=t.payload)||void 0===p?void 0:p.data)||[];return Y(Y({},e),{},{assignedSystems:f.map((function(e){return null==e?void 0:e.inventory_id}))});case i.eb:return H;default:return e}},notifications:o.ee},K=(0,$.jB)((0,$.UY)(M),B((0,$.md)(c(),(0,n.ZP)())))},59748:e=>{e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')}}]);
//# sourceMappingURL=../sourcemaps/6432.29ad7e397af77efb85492df2fa8e85b5.js.map