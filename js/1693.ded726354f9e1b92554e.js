"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[1693],{56909:(e,t,r)=>{r.d(t,{Z:()=>U});var n=r(29439),o=r(43297),a=r.n(o),c=r(28216),s=r(334),i=r(51344),u=r(371),p=r(9557),l=r(5391),y=r(35240),d=r(93433),O=r(87462),f=r(4942),b=r(45697),P=r.n(b),g=r(85333),v=r(95249),m=function(e){var t=e.children,r=e.requiredPermissions,n=void 0===r?[]:r,o=(0,v.c$)(n),c=o.hasAccess;return o.isLoading?"":c?t:a().createElement(g.Z,{serviceName:"patch"})};m.propTypes={children:P().node,requiredPermissions:P().array};const h=m;var j=r(8896),E=r(67463),w=r(91607),D=r(13784),S=r(59704),_=r.n(S);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,f.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(e,t){var r=e.component,n=e.isExact,o=e.path,c=e.props,i=void 0===c?{}:c,u=e.requiredPermissions,p={isExact:n,path:o},l=I(I({},i),{},{route:I({},e)});return a().createElement(s.Route,(0,O.Z)({},p,{key:t}),a().createElement(h,{requiredPermissions:u},a().createElement(r,l)))};k.propTypes={component:P().node,isExact:P().bool,path:P().string,props:P().object};var N=(0,o.lazy)((function(){return Promise.all([r.e(9705),r.e(7541),r.e(3332),r.e(7020)]).then(r.bind(r,79202))})),T=(0,o.lazy)((function(){return Promise.all([r.e(6084),r.e(9705),r.e(7541),r.e(8277),r.e(8826),r.e(7210),r.e(3332),r.e(4025),r.e(247),r.e(6743)]).then(r.bind(r,10637))})),Z=(0,o.lazy)((function(){return Promise.all([r.e(6084),r.e(9705),r.e(7541),r.e(8277),r.e(8826),r.e(7210),r.e(3332),r.e(4025),r.e(247),r.e(9577),r.e(184)]).then(r.bind(r,13454))})),F=(0,o.lazy)((function(){return Promise.all([r.e(9705),r.e(3332),r.e(4025),r.e(7060)]).then(r.bind(r,34951))})),R=(0,o.lazy)((function(){return Promise.all([r.e(9705),r.e(7541),r.e(3332),r.e(1677)]).then(r.bind(r,44662))})),q=(0,o.lazy)((function(){return Promise.all([r.e(6084),r.e(9705),r.e(7541),r.e(8277),r.e(8826),r.e(7210),r.e(3332),r.e(4025),r.e(247),r.e(9155)]).then(r.bind(r,8453))})),C=(0,o.lazy)((function(){return Promise.all([r.e(6084),r.e(9705),r.e(7541),r.e(8277),r.e(8826),r.e(7210),r.e(3332),r.e(4025),r.e(247),r.e(9155)]).then(r.bind(r,535))})),A=(0,w.ye)(D.VH.patch_set),G=["patch:*:*","patch:*:read"],J=[{path:"/advisories/:advisoryId/:inventoryId",isExact:!0,requiredPermissions:G,component:Z},{path:"/advisories/:advisoryId",isExact:!0,requiredPermissions:G,component:F},{path:"/advisories",isExact:!0,requiredPermissions:G,component:N},{path:"/systems/:inventoryId",isExact:!0,requiredPermissions:G,component:Z},{path:"/systems",isExact:!0,requiredPermissions:G,component:T},{path:"/packages/:packageName/:inventoryId",isExact:!0,requiredPermissions:G,component:Z},{path:"/packages/:packageName",isExact:!0,requiredPermissions:G,component:q},{path:"/packages",isExact:!0,requiredPermissions:G,component:R}].concat((0,d.Z)(A?[{path:"/templates",isExact:!0,requiredPermissions:G,component:C}]:[])),x=function(){var e=(0,s.useHistory)(),t=(0,o.useCallback)((function(){return insights.chrome.on("APP_NAVIGATION",(function(t){t.domEvent&&e.push("/".concat(t.navId))}))}),[]);return(0,o.useEffect)((function(){var e=t();return function(){return e()}}),[]),a().createElement(o.Suspense,{fallback:a().createElement(j.b,null,a().createElement(E.Spinner,null))},a().createElement(s.Switch,null,J.map(k),a().createElement(s.Redirect,{from:"/advisories/:advisoryId/:inventoryId",to:"/systems/:inventoryId"}),a().createElement(s.Redirect,{from:"/packages/:packageName/:inventoryId",to:"/systems/:inventoryId"}),a().createElement(s.Route,{render:function(){return(!A||!_()(J,(function(t){return t.to===e.location.pathname})))&&a().createElement(s.Redirect,{to:"/advisories"})}})))};const U=function(){var e=(0,c.I0)(),t=(0,o.useState)({selectedTags:[],systemProfile:!1}),r=(0,n.Z)(t,2),d=r[0],O=r[1];return(0,o.useEffect)((function(){var t;insights.chrome.init(),insights.chrome.identifyApp("patch"),null!==(t=insights.chrome)&&void 0!==t&&t.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(t){var r,n,o,a,c,s=t.data,i=null===(r=insights.chrome)||void 0===r||null===(n=r.mapGlobalFilter)||void 0===n?void 0:n.call(r,s,!1,!0)[1],u=null===(o=insights.chrome)||void 0===o||null===(a=o.mapGlobalFilter)||void 0===a||null===(c=a.call(o,s))||void 0===c?void 0:c.filter((function(e){return!e.includes("Workloads")})),y=(0,l.gA)(u,i,null==s?void 0:s.Workloads);JSON.stringify(d)!==JSON.stringify(y)&&(e((0,p.M6)(y)),O(y),e((0,p.df)(y.selectedTags)),e((0,p.WY)(y.systemProfile)))}))}),[]),a().createElement(a().Fragment,null,a().createElement(i.ZP,null),a().createElement(u.r,{appName:"patch"},a().createElement(s.BrowserRouter,{basename:(0,y.eb)(window.location.pathname)},a().createElement(x,null))))}},92544:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={loaded:!1},s=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0,o=n.type,s=n.payload;switch(o){case"FETCH_SYSTEM_DETAIL_FULFILLED":return r.hasThirdPartyRepo=null===(e=s.data)||void 0===e?void 0:e.attributes.third_party,r.patchSetName=null===(t=s.data)||void 0===t?void 0:t.attributes.baseline_name,r;case"LOAD_ENTITY_PENDING":return a(a({},r),{},{loaded:!1});case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return a(a({},r),{},{loaded:!0});default:return r}}},2807:(e,t,r)=>{r.d(t,{E:()=>$,h:()=>M});var n=r(84885),o=r(83215),a=r(57283),c=r.n(a),s=r(4942),i=r(22789),u=r(48881);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={data:{attributes:{}},status:{isLoading:!0}},d=r(13784);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={data:{attributes:{}},status:{isLoading:!0}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=j(j({},d.tO),{},{queryParams:d.eZ}),w=r(85612),D=r(92544),S=r(74241),_=r(5391);function L(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?L(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):L(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k={selectedRows:{},queryParams:{page:1,perPage:20,filter:{stale:[!0,!1]}}};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={selectedRows:{},queryParams:{page:1,perPage:20}};function F(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?F(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q={selectedRows:{},queryParams:{page:1,perPage:20}};function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var G={selectedGlobalTags:[],selectedTags:[],systemProfile:void 0};function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function x(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{}};function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y={patchSet:{config:{}},assignedSystems:[],status:{},error:{}},H=r(97779),B=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||H.qC,$={AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.tO,t=arguments.length>1?arguments[1]:void 0,r=f({},e);switch(t.type){case i.Oy+"_FULFILLED":return(0,u.If)(r,t);case i.Oy+"_PENDING":return(0,u.oZ)(r);case i.Oy+"_REJECTED":return(0,u.PW)(r,t);case i.re:return(0,u.P7)(r,t);case i.SO:return(0,u.gW)(r,t);case i.p7:return(0,u.hd)(r,t);case i.Cg:return(0,u.P7)(r,t);case i.BR:return r.areAllSelected=t.payload,r;default:return e}},SystemDetailStore:D.J,SystemAdvisoryListStore:w.g,AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=l({},e);switch(t.type){case i.J$+"_FULFILLED":return l(l({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.J$+"_PENDING":return(0,u.oZ)(r);case i.J$+"_REJECTED":return(0,u.PW)(r,t);case i.ad:return y;default:return e}},SystemPackageListStore:S.f,PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,r=j({},e);switch(t.type){case i.Gc+"_PENDING":return(0,u.oZ)(r);case i.Gc+"_FULFILLED":return(0,u.If)(r,t);case i.Gc+"_REJECTED":return(0,u.PW)(r,t);case i.Wo:case i.Cg:return(0,u.P7)(r,t);default:return e}},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,r=v({},e);switch(t.type){case i.lH+"_FULFILLED":return v(v({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.lH+"_PENDING":return(0,u.oZ)(r);case i.lH+"_REJECTED":return(0,u.PW)(r,t);case i.$L:return m;default:return e}},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.tO,t=arguments.length>1?arguments[1]:void 0,r=P({},e);switch(t.type){case i.lO+"_FULFILLED":return(0,u.If)(r,t);case i.lO+"_PENDING":return(0,u.oZ)(r);case i.lO+"_REJECTED":return(0,u.PW)(r,t);case i.gx:return(0,u.P7)(r,t);default:return e}},SystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0,r=I({},e);switch(t.type){case i.pl:return r.queryParams=(0,_.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i._E:return r.metadata=t.payload,r;case i.BR:return r.areAllSelected=t.payload,r;default:return e}},PackageSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,r=T({},e);switch(t.type){case i.pW:return r.queryParams=(0,_.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.i3:return Z;default:return e}},AdvisorySystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0,r=R({},e);switch(t.type){case i.Rr:return r.queryParams=(0,_.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,u.P7)(r,t);case i.vh:return q;default:return e}},GlobalFilterStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.mD:return A(A({},e),{},{selectedTags:t.payload});case i.y0:return A(A({},e),{},{selectedGlobalTags:t.payload});case i.lz:return A(A({},e),{},{systemProfile:t.payload});default:return e}},PatchSetsStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,r=arguments.length>1?arguments[1]:void 0,n=x({},t);switch(r.type){case i.oc+"_FULFILLED":return x(x({},n),{},{rows:null===(e=r.payload.data)||void 0===e?void 0:e.map((function(e){return x(x({},e.attributes),{},{id:e.id})})),metadata:r.payload.meta||{},error:{},status:{code:r.payload.status,isLoading:!1,hasError:!1}});case i.oc+"_PENDING":return(0,u.oZ)(n);case i.oc+"_REJECTED":return(0,u.PW)(n,r);case i.oT:return(0,u.P7)(n,r);case i.r8:return(0,u.hd)(n,r);case i.hM:return U;default:return n}},SpecificPatchSetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.jP+"_FULFILLED":var r,n=(null===(r=t.payload)||void 0===r?void 0:r.data)||{config:{}},o=n.attributes,a=o.config,c=o.name,s=o.description,p=n.id;return z(z({},e),{},{patchSet:{name:c,description:s,config:a||{},id:p},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.jP+"_PENDING":return(0,u.oZ)(e);case i.jP+"_REJECTED":return(0,u.PW)(e,t);case i.bn+"_FULFILLED":var l,y=(null===(l=t.payload)||void 0===l?void 0:l.data)||[];return z(z({},e),{},{assignedSystems:y.map((function(e){return null==e?void 0:e.inventory_id}))});case i.eb:return Y;default:return e}},notifications:o.ee},M=(0,H.jB)((0,H.UY)($),B((0,H.md)(c(),(0,n.ZP)())))},59748:e=>{e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')}}]);
//# sourceMappingURL=../sourcemaps/1693.057fb3452881a6d91a2da7c6e9719e0a.js.map