"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[6432],{56909:(e,t,r)=>{r.d(t,{Z:()=>W});var n=r(29439),o=r(43297),a=r.n(o),c=r(28216),s=r(334),i=r(51344),u=r(371),p=r(9557),l=r(5391),f=r(35240),y=r(93433),O=r(87462),d=r(4942),b=r(45697),P=r.n(b),g=r(85333),m=r(95249),v=function(e){var t=e.children,r=e.requiredPermissions,n=void 0===r?[]:r,o=(0,m.c$)(n),c=o.hasAccess;return o.isLoading?"":c?t:a().createElement(g.Z,{serviceName:"patch"})};v.propTypes={children:P().node,requiredPermissions:P().array};const h=v;var j=r(8896),E=r(67463),w=r(91607),D=r(13784),S=r(59704),_=r.n(S);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,d.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(e,t){var r=e.component,n=e.isExact,o=e.path,c=e.props,i=void 0===c?{}:c,u=e.requiredPermissions,p={isExact:n,path:o},l=I(I({},i),{},{route:I({},e)});return a().createElement(s.Route,(0,O.Z)({},p,{key:t}),a().createElement(h,{requiredPermissions:u},a().createElement(r,l)))};k.propTypes={component:P().node,isExact:P().bool,path:P().string,props:P().object};var N=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(7541),r.e(3453),r.e(3332),r.e(7020)]).then(r.bind(r,79202))})),T=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(6084),r.e(7541),r.e(3453),r.e(8342),r.e(6320),r.e(8826),r.e(5981),r.e(3332),r.e(4025),r.e(7523),r.e(6743)]).then(r.bind(r,10637))})),Z=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(6084),r.e(7541),r.e(3453),r.e(8342),r.e(6320),r.e(8826),r.e(5981),r.e(3332),r.e(4025),r.e(7523),r.e(9577),r.e(184)]).then(r.bind(r,13454))})),R=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(3453),r.e(3332),r.e(4025),r.e(2452),r.e(423)]).then(r.bind(r,34951))})),F=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(7541),r.e(3332),r.e(1677)]).then(r.bind(r,44662))})),q=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(3453),r.e(6320),r.e(3332),r.e(2452),r.e(9155)]).then(r.bind(r,8453))})),C=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(6084),r.e(7541),r.e(3453),r.e(8342),r.e(6320),r.e(8826),r.e(5981),r.e(3332),r.e(4025),r.e(7523),r.e(3004)]).then(r.bind(r,66965))})),A=(0,o.lazy)((function(){return Promise.all([r.e(5879),r.e(6084),r.e(7541),r.e(3453),r.e(8342),r.e(6320),r.e(8826),r.e(5981),r.e(3332),r.e(4025),r.e(7523),r.e(9603)]).then(r.bind(r,88929))})),G=(0,w.ye)(D.VH.patch_set),J=["patch:*:*","patch:*:read"],U=[{path:"/advisories/:advisoryId/:inventoryId",isExact:!0,requiredPermissions:J,component:Z},{path:"/advisories/:advisoryId",isExact:!0,requiredPermissions:J,component:R},{path:"/advisories",isExact:!0,requiredPermissions:J,component:N},{path:"/systems/:inventoryId",isExact:!0,requiredPermissions:J,component:Z},{path:"/systems",isExact:!0,requiredPermissions:J,component:T},{path:"/packages/:packageName/:inventoryId",isExact:!0,requiredPermissions:J,component:Z},{path:"/packages/:packageName",isExact:!0,requiredPermissions:J,component:q},{path:"/packages",isExact:!0,requiredPermissions:J,component:F}].concat((0,y.Z)(G?[{path:"/templates/:templateName",isExact:!0,requiredPermissions:J,component:A},{path:"/templates",isExact:!0,requiredPermissions:J,component:C}]:[])),x=function(){var e=(0,s.useHistory)(),t=(0,o.useCallback)((function(){return insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&e.push("/".concat(t.navId))}))}),[]);return(0,o.useEffect)((function(){var e=t();return function(){return e()}}),[]),a().createElement(o.Suspense,{fallback:a().createElement(j.b,null,a().createElement(E.Spinner,null))},a().createElement(s.Switch,null,U.map(k),a().createElement(s.Redirect,{from:"/advisories/:advisoryId/:inventoryId",to:"/systems/:inventoryId"}),a().createElement(s.Redirect,{from:"/packages/:packageName/:inventoryId",to:"/systems/:inventoryId"}),a().createElement(s.Route,{render:function(){return(!G||!_()(U,(function(t){return t.to===e.location.pathname})))&&a().createElement(s.Redirect,{to:"/advisories"})}})))};const W=function(){var e=(0,c.I0)(),t=(0,o.useState)({selectedTags:[],systemProfile:!1}),r=(0,n.Z)(t,2),y=r[0],O=r[1];return(0,o.useEffect)((function(){var t;insights.chrome.init(),insights.chrome.identifyApp("patch"),null!==(t=insights.chrome)&&void 0!==t&&t.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(t){var r,n,o,a,c,s=t.data,i=null===(r=insights.chrome)||void 0===r||null===(n=r.mapGlobalFilter)||void 0===n?void 0:n.call(r,s,!1,!0)[1],u=null===(o=insights.chrome)||void 0===o||null===(a=o.mapGlobalFilter)||void 0===a||null===(c=a.call(o,s))||void 0===c?void 0:c.filter((function(e){return!e.includes("Workloads")})),f=(0,l.gA)(u,i,null==s?void 0:s.Workloads);JSON.stringify(y)!==JSON.stringify(f)&&(e((0,p.M6)(f)),O(f),e((0,p.df)(f.selectedTags)),e((0,p.WY)(f.systemProfile)))}))}),[]),a().createElement(a().Fragment,null,a().createElement(i.ZP,null),a().createElement(u.r,{appName:"patch"},a().createElement(s.BrowserRouter,{basename:(0,f.eb)(window.location.pathname)},a().createElement(x,null))))}},92544:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={loaded:!1},s=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0,o=n.type,s=n.payload;switch(o){case"FETCH_SYSTEM_DETAIL_FULFILLED":return r.hasThirdPartyRepo=null===(e=s.data)||void 0===e?void 0:e.attributes.third_party,r.patchSetName=null===(t=s.data)||void 0===t?void 0:t.attributes.baseline_name,r;case"LOAD_ENTITY_PENDING":return a(a({},r),{},{loaded:!1});case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return a(a({},r),{},{loaded:!0});default:return r}}},7322:(e,t,r)=>{r.d(t,{E:()=>ee,h:()=>te});var n=r(84885),o=r(83215),a=r(57283),c=r.n(a),s=r(4942),i=r(22789),u=r(48881);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={data:{attributes:{}},status:{isLoading:!0}},y=r(13784);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={data:{attributes:{}},status:{isLoading:!0}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=j(j({},y.tO),{},{queryParams:y.eZ}),w=r(85612),D=r(92544),S=r(74241),_=r(5391);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={selectedRows:{},queryParams:{page:1,perPage:20,filter:{stale:[!0,!1]}}};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={selectedRows:{},queryParams:{page:1,perPage:20}};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q={selectedRows:{},queryParams:{page:1,perPage:20}};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G={selectedGlobalTags:[],selectedTags:[],systemProfile:void 0};function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{}};function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y={data:{attributes:{}},status:{isLoading:!0}};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var $={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{},data:null};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function K(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V={patchSet:{config:{}},assignedSystems:[],status:{},error:{}},X=r(97779),Q=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||X.qC,ee={AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.tO,t=arguments.length>1?arguments[1]:void 0,r=d({},e);switch(t.type){case i.Oy+"_FULFILLED":return(0,u.If)(r,t);case i.Oy+"_PENDING":return(0,u.oZ)(r);case i.Oy+"_REJECTED":return(0,u.PW)(r,t);case i.re:return(0,u.P7)(r,t);case i.SO:return(0,u.gW)(r,t);case i.p7:return(0,u.hd)(r,t);case i.Cg:return(0,u.P7)(r,t);case i.BR:return r.areAllSelected=t.payload,r;default:return e}},SystemDetailStore:D.J,SystemAdvisoryListStore:w.g,AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,r=l({},e);switch(t.type){case i.J$+"_FULFILLED":return l(l({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.J$+"_PENDING":return(0,u.oZ)(r);case i.J$+"_REJECTED":return(0,u.PW)(r,t);case i.ad:return f;default:return e}},SystemPackageListStore:S.f,PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,r=j({},e);switch(t.type){case i.Gc+"_PENDING":return(0,u.oZ)(r);case i.Gc+"_FULFILLED":return(0,u.If)(r,t);case i.Gc+"_REJECTED":return(0,u.PW)(r,t);case i.Wo:case i.Cg:return(0,u.P7)(r,t);default:return e}},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,r=m({},e);switch(t.type){case i.lH+"_FULFILLED":return m(m({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.lH+"_PENDING":return(0,u.oZ)(r);case i.lH+"_REJECTED":return(0,u.PW)(r,t);case i.$L:return v;default:return e}},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y.tO,t=arguments.length>1?arguments[1]:void 0,r=P({},e);switch(t.type){case i.lO+"_FULFILLED":return(0,u.If)(r,t);case i.lO+"_PENDING":return(0,u.oZ)(r);case i.lO+"_REJECTED":return(0,u.PW)(r,t);case i.gx:return(0,u.P7)(r,t);default:return e}},SystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,r=I({},e);switch(t.type){case i.pl:return r.queryParams=(0,_.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i._E:return r.metadata=t.payload,r;case i.BR:return r.areAllSelected=t.payload,r;default:return e}},PackageSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,r=T({},e);switch(t.type){case i.pW:return r.queryParams=(0,_.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.i3:return Z;default:return e}},AdvisorySystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,r=F({},e);switch(t.type){case i.Rr:return r.queryParams=(0,_.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.vh:return q;default:return e}},GlobalFilterStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.mD:return A(A({},e),{},{selectedTags:t.payload});case i.y0:return A(A({},e),{},{selectedGlobalTags:t.payload});case i.lz:return A(A({},e),{},{systemProfile:t.payload});default:return e}},PatchSetsStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,r=arguments.length>1?arguments[1]:void 0,n=U({},t);switch(r.type){case i.oc+"_FULFILLED":return U(U({},n),{},{rows:null===(e=r.payload.data)||void 0===e?void 0:e.map((function(e){return U(U({},e.attributes),{},{id:e.id})})),metadata:r.payload.meta||{},error:{},status:{code:r.payload.status,isLoading:!1,hasError:!1}});case i.oc+"_PENDING":return(0,u.oZ)(n);case i.oc+"_REJECTED":return(0,u.PW)(n,r);case i.oT:return(0,u.P7)(n,r);case i.r8:return(0,u.hd)(n,r);case i.hM:return x;default:return n}},PatchSetDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0,r=z({},e);switch(t.type){case i.TR+"_FULFILLED":return z(z({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.TR+"_PENDING":return(0,u.oZ)(r);case i.TR+"_REJECTED":return(0,u.PW)(r,t);case i.yo:return Y;default:return e}},PatchSetDetailSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0,r=B({},e);switch(t.type){case i.fn+"_FULFILLED":return B(B({},r),{},{rows:t.payload.data,metadata:t.payload.meta||{},error:{},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.fn+"_PENDING":return(0,u.oZ)(r);case i.fn+"_REJECTED":return(0,u.PW)(r,t);case i.lD:return(0,u.P7)(r,t);case i.mk:return $;default:return e}},SpecificPatchSetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.jP+"_FULFILLED":var r,n=(null===(r=t.payload)||void 0===r?void 0:r.data)||{config:{}},o=n.attributes,a=o.config,c=o.name,s=o.description,p=n.id;return K(K({},e),{},{patchSet:{name:c,description:s,config:a||{},id:p},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.jP+"_PENDING":return(0,u.oZ)(e);case i.jP+"_REJECTED":return(0,u.PW)(e,t);case i.bn+"_FULFILLED":var l,f=(null===(l=t.payload)||void 0===l?void 0:l.data)||[];return K(K({},e),{},{assignedSystems:f.map((function(e){return null==e?void 0:e.inventory_id}))});case i.eb:return V;default:return e}},notifications:o.ee},te=(0,X.jB)((0,X.UY)(ee),Q((0,X.md)(c(),(0,n.ZP)())))},59748:e=>{e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')}}]);
//# sourceMappingURL=../sourcemaps/6432.65a7d11cf353df4d6a97832f658385bb.js.map