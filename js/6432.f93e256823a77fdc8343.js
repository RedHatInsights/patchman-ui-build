"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[6432],{56909:(e,t,r)=>{r.d(t,{Z:()=>U});var n=r(29439),a=r(43297),o=r.n(a),c=r(28216),s=r(96620),i=r(88940),u=r(55140),l=r(371),p=r(9557),y=r(5391),d=r(35240),O=r(87462),f=r(4942),b=r(45697),g=r.n(b),P=r(85333),m=r(95249),v=function(e){var t=e.children,r=e.requiredPermissions,n=void 0===r?[]:r,a=(0,m.c$)(n),c=a.hasAccess;return a.isLoading?"":c?t:o().createElement(P.Z,{serviceName:"patch"})};v.propTypes={children:g().node,requiredPermissions:g().array};const h=v;var j=r(52643),E=r(2372),w=r(59704),D=r.n(w),S=r(11521),L=r.n(S),_=r(22663);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var I=function(e,t){var r=e.component,n=e.isExact,a=e.path,c=e.props,i=void 0===c?{}:c,u=e.requiredPermissions,l={isExact:n,path:a},p=k(k({},i),{},{route:k({},e)});return o().createElement(s.Route,(0,O.Z)({},l,{key:t}),o().createElement(h,{requiredPermissions:u},o().createElement(r,p)))};I.propTypes={component:g().node,isExact:g().bool,path:g().string,props:g().object};var T=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(1456),r.e(3935),r.e(2303),r.e(3962),r.e(1239),r.e(7020)]).then(r.bind(r,79202))})),Z=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(1456),r.e(3935),r.e(2303),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(1391),r.e(2988),r.e(1239),r.e(4025),r.e(8440),r.e(6743)]).then(r.bind(r,10637))})),F=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(1456),r.e(3935),r.e(2303),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(1391),r.e(2988),r.e(1239),r.e(4025),r.e(8440),r.e(9577),r.e(184)]).then(r.bind(r,13454))})),R=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(2303),r.e(7521),r.e(1239),r.e(4025),r.e(4125),r.e(423)]).then(r.bind(r,34951))})),q=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(1456),r.e(3935),r.e(2303),r.e(3962),r.e(1239),r.e(1677)]).then(r.bind(r,44662))})),C=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(2303),r.e(7521),r.e(4680),r.e(1239),r.e(4125),r.e(9155)]).then(r.bind(r,8453))})),G=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(1456),r.e(3935),r.e(2303),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(1391),r.e(2988),r.e(1239),r.e(4025),r.e(8440),r.e(3004)]).then(r.bind(r,51335))})),A=(0,a.lazy)((function(){return Promise.all([r.e(4884),r.e(8167),r.e(1456),r.e(3935),r.e(2303),r.e(3962),r.e(7521),r.e(4680),r.e(236),r.e(1391),r.e(2988),r.e(1239),r.e(4025),r.e(8440),r.e(9603)]).then(r.bind(r,99910))})),J=function(){var e=(0,s.useHistory)(),t=(0,u.Z)(),r=["patch:*:*","patch:*:read"],c=(0,a.useState)(!0),i=(0,n.Z)(c,2),l=i[0],p=i[1],y=[{path:"/advisories/:advisoryId/:inventoryId",isExact:!0,requiredPermissions:r,component:F},{path:"/advisories/:advisoryId",isExact:!0,requiredPermissions:r,component:R},{path:"/advisories",isExact:!0,requiredPermissions:r,component:T},{path:"/systems/:inventoryId",isExact:!0,requiredPermissions:r,component:F},{path:"/systems",isExact:!0,requiredPermissions:r,component:Z},{path:"/packages/:packageName/:inventoryId",isExact:!0,requiredPermissions:r,component:F},{path:"/packages/:packageName",isExact:!0,requiredPermissions:r,component:C},{path:"/packages",isExact:!0,requiredPermissions:r,component:q},{path:"/templates/:templateName",isExact:!0,requiredPermissions:r,component:A},{path:"/templates",isExact:!0,requiredPermissions:r,component:G}],d=(0,a.useCallback)((function(){if(t)return t.on("APP_NAVIGATION",(function(t){t.domEvent&&e.push("/".concat(t.navId))}))}),[]);return(0,a.useEffect)((function(){var e=d();return function(){return e()}}),[]),(0,a.useEffect)((function(){try{L().get("".concat("/api/inventory/v1/hosts","?page=1&per_page=1")).then((function(e){var t=e.data;p(t.total>0)}))}catch(e){console.log(e)}}),[l]),o().createElement(a.Suspense,{fallback:o().createElement(j.b,null,o().createElement(E.$,null))},l?o().createElement(s.Switch,null,y.map(I),o().createElement(s.Redirect,{from:"/advisories/:advisoryId/:inventoryId",to:"/systems/:inventoryId"}),o().createElement(s.Redirect,{from:"/packages/:packageName/:inventoryId",to:"/systems/:inventoryId"}),o().createElement(s.Route,{render:function(){return!D()(y,(function(t){return t.to===e.location.pathname}))&&o().createElement(s.Redirect,{to:"/advisories"})}})):o().createElement(_.Z,{appId:"content_management_zero_state",appName:"dashboard",module:"./AppZeroState",scope:"dashboard",ErrorComponent:o().createElement("div",null,"Error state"),app:"Content_management"}))};const U=function(){var e=(0,c.I0)(),t=(0,u.Z)(),r=(0,a.useState)({selectedTags:[],systemProfile:!1}),O=(0,n.Z)(r,2),f=O[0],b=O[1];return(0,a.useEffect)((function(){var r;null==t||null===(r=t.globalFilterScope)||void 0===r||r.call(t,"insights"),null!=t&&t.globalFilterScope&&(null==t||t.on("GLOBAL_FILTER_UPDATE",(function(r){var n,a,o,c=r.data,s=null==t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,c,!1,!0)[1],i=null==t||null===(a=t.mapGlobalFilter)||void 0===a||null===(o=a.call(t,c))||void 0===o?void 0:o.filter((function(e){return!e.includes("Workloads")})),u=(0,y.gA)(i,s,null==c?void 0:c.Workloads);JSON.stringify(f)!==JSON.stringify(u)&&(e((0,p.M6)(u)),b(u),e((0,p.df)(u.selectedTags)),e((0,p.WY)(u.systemProfile)))})))}),[]),o().createElement(o().Fragment,null,o().createElement(i.ZP,null),o().createElement(l.r,{appName:"patch"},o().createElement(s.BrowserRouter,{basename:(0,d.eb)(window.location.pathname)},o().createElement(J,null))))}},92544:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(4942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={loaded:!1},s=function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,a=arguments.length>1?arguments[1]:void 0,s=a.type,i=a.payload;switch(s){case"FETCH_SYSTEM_DETAIL_FULFILLED":return o(o({},n),{},{hasThirdPartyRepo:null===(e=i.data)||void 0===e?void 0:e.attributes.third_party,patchSetName:null===(t=i.data)||void 0===t?void 0:t.attributes.baseline_name,patchSetId:null===(r=i.data)||void 0===r?void 0:r.attributes.baseline_id});case"LOAD_ENTITY_PENDING":return o(o({},n),{},{loaded:!1});case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return o(o({},n),{},{loaded:!0});default:return n}}},7322:(e,t,r)=>{r.d(t,{E:()=>V,h:()=>K});var n=r(84885),a=r(83215),o=r(57283),c=r.n(o),s=r(4942),i=r(22789),u=r(48881);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={data:{attributes:{}},status:{isLoading:!0}},d=r(13784);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P={data:{attributes:{}},status:{isLoading:!0}};function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var h=v(v({},d.tO),{},{queryParams:d.eZ}),j=r(85612),E=r(92544),w=r(74241),D=r(5391);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var L={selectedRows:{},queryParams:{page:1,perPage:20,filter:{stale:[!0,!1]}}};function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var N={selectedRows:{},queryParams:{page:1,perPage:20}};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var I={selectedRows:{},queryParams:{page:1,perPage:20}};function T(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?T(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):T(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F={selectedGlobalTags:[],selectedTags:[],systemProfile:void 0};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{}};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={data:{attributes:{}},status:{isLoading:!0}};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={selectedRows:{},queryParams:{page:1,perPage:20},templateHasSystemsLoading:!0,templateHasSystems:null};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={patchSet:{config:{}},assignedSystems:[],status:{},error:{},takenBaselineNames:[],takenBaselineNamesLoading:!0},Y=r(97779),$=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Y.qC,V={AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.tO,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.Oy+"_FULFILLED":return(0,u.If)(r,t);case i.Oy+"_PENDING":return(0,u.oZ)(r);case i.Oy+"_REJECTED":return(0,u.PW)(r,t);case i.re:return(0,u.P7)(r,t);case i.SO:return(0,u.gW)(r,t);case i.p7:return(0,u.hd)(r,t);case i.Cg:return(0,u.P7)(r,t);case i.BR:return r.areAllSelected=t.payload,r;default:return e}},SystemDetailStore:E.J,SystemAdvisoryListStore:j.g,AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=p({},e);switch(t.type){case i.J$+"_FULFILLED":return p(p({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.J$+"_PENDING":return(0,u.oZ)(r);case i.J$+"_REJECTED":return(0,u.PW)(r,t);case i.ad:return y;default:return e}},SystemPackageListStore:w.f,PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,r=v({},e);switch(t.type){case i.Gc+"_PENDING":return(0,u.oZ)(r);case i.Gc+"_FULFILLED":return(0,u.If)(r,t);case i.Gc+"_REJECTED":return(0,u.PW)(r,t);case i.Wo:case i.Cg:return(0,u.P7)(r,t);default:return e}},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0,r=g({},e);switch(t.type){case i.lH+"_FULFILLED":return g(g({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.lH+"_PENDING":return(0,u.oZ)(r);case i.lH+"_REJECTED":return(0,u.PW)(r,t);case i.$L:return P;default:return e}},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.tO,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.lO+"_FULFILLED":return(0,u.If)(r,t);case i.lO+"_PENDING":return(0,u.oZ)(r);case i.lO+"_REJECTED":return(0,u.PW)(r,t);case i.gx:return(0,u.P7)(r,t);default:return e}},SystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.pl:return r.queryParams=(0,D.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i._E:return r.metadata=t.payload,r;case i.BR:return r.areAllSelected=t.payload,r;default:return e}},PackageSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.pW:return r.queryParams=(0,D.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.i3:return N;default:return e}},AdvisorySystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.Rr:return r.queryParams=(0,D.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.vh:return I;default:return e}},GlobalFilterStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.mD:return Z(Z({},e),{},{selectedTags:t.payload});case i.y0:return Z(Z({},e),{},{selectedGlobalTags:t.payload});case i.lz:return Z(Z({},e),{},{systemProfile:t.payload});default:return e}},PatchSetsStore:function(){var e,t=arguments.length>1?arguments[1]:void 0,r=q({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:C);switch(t.type){case i.oc+"_FULFILLED":return q(q({},r),{},{rows:null===(e=t.payload.data)||void 0===e?void 0:e.map((function(e){return q(q({},e.attributes),{},{id:e.id})})),metadata:t.payload.meta||{},error:{},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.oc+"_PENDING":return(0,u.oZ)(r);case i.oc+"_REJECTED":return(0,u.PW)(r,t);case i.oT:return(0,u.P7)(r,t);case i.r8:return(0,u.hd)(r,t);case i.hM:return C;default:return r}},PatchSetDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,t=arguments.length>1?arguments[1]:void 0,r=A({},e);switch(t.type){case i.TR+"_FULFILLED":return A(A({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.TR+"_PENDING":return(0,u.oZ)(r);case i.TR+"_REJECTED":return(0,u.PW)(r,t);case i.yo:return J;default:return e}},PatchSetDetailSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,r=x({},e);switch(t.type){case i.lD:return r.queryParams=(0,D.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.kt:return r.metadata=t.payload,r;case i.Tn+"_PENDING":return x(x({},e),{},{templateHasSystemsLoading:!0,templateHasSystems:null});case i.Tn+"_FULFILLED":return x(x({},e),{},{templateHasSystemsLoading:!1,templateHasSystems:t.payload.data.length>0});case i.Tn+"_REJECTED":return x(x({},e),{},{templateHasSystemsLoading:!1,templateHasSystems:!0});default:return e}},SpecificPatchSetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.jP+"_FULFILLED":var r,n=(null===(r=t.payload)||void 0===r?void 0:r.data)||{config:{}},a=n.attributes,o=a.config,c=a.name,s=a.description,l=n.id;return B(B({},e),{},{patchSet:{name:c,description:s,config:o||{},id:l},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.jP+"_PENDING":return(0,u.oZ)(e);case i.jP+"_REJECTED":return(0,u.PW)(e,t);case i.bn+"_FULFILLED":var p,y=(null===(p=t.payload)||void 0===p?void 0:p.data)||[];return B(B({},e),{},{assignedSystems:y.map((function(e){return null==e?void 0:e.inventory_id}))});case i.iV+"_PENDING":return B(B({},e),{},{takenBaselineNamesLoading:!0});case i.iV+"_FULFILLED":return B(B({},e),{},{takenBaselineNames:t.payload,takenBaselineNamesLoading:!1});case i.iV+"_REJECTED":return B(B({},e),{},{takenBaselineNames:[],takenBaselineNamesLoading:!1});case i.eb:return z;default:return e}},notifications:a.ee},K=(0,Y.jB)((0,Y.UY)(V),$((0,Y.md)(c(),(0,n.ZP)())))},59748:e=>{e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')}}]);
//# sourceMappingURL=../sourcemaps/6432.308856f856053445ae0dc0ea4318571d.js.map