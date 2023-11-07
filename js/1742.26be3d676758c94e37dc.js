"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[1742],{80364:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(29439),a=r(43297),o=r.n(a),c=r(93942),s=r(88940),i=r(55140),l=r(371),u=r(9557),p=r(5391),y=r(52643),O=r(2372),d=r(85333),f=r(95249),b=r(22663),g=r(11521),m=r.n(g),P=r(45697),v=r.n(P),h=r(62012),j=function(){var e=(0,h.useParams)().inventoryId;return o().createElement(h.Navigate,{to:"../systems/".concat(e)})},E=function(e){var t=e.requiredPermissions,r=void 0===t?[]:t,n=(0,f.c$)(r),a=n.hasAccess;return n.isLoading?"":a?o().createElement(h.Outlet,null):o().createElement(d.Z,{serviceName:"patch"})};E.propTypes={requiredPermissions:v().oneOfType([v().arrayOf(v().string),v().string])};var w=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(5444),r.e(4708),r.e(4854),r.e(3935),r.e(9112),r.e(1167),r.e(4702),r.e(7020)]).then(r.bind(r,79202))})),D=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(5444),r.e(4708),r.e(4854),r.e(3935),r.e(9112),r.e(4680),r.e(1167),r.e(7521),r.e(236),r.e(1391),r.e(6861),r.e(4702),r.e(4025),r.e(8440),r.e(7759),r.e(6743)]).then(r.bind(r,10637))})),S=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(5444),r.e(4708),r.e(4854),r.e(3935),r.e(9112),r.e(4680),r.e(1167),r.e(7521),r.e(236),r.e(1391),r.e(6861),r.e(4702),r.e(4025),r.e(8440),r.e(9577),r.e(7759),r.e(184)]).then(r.bind(r,13454))})),L=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(4708),r.e(9112),r.e(7521),r.e(4702),r.e(4025),r.e(2270),r.e(423)]).then(r.bind(r,34951))})),_=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(5444),r.e(4708),r.e(4854),r.e(3935),r.e(9112),r.e(1167),r.e(4702),r.e(1677)]).then(r.bind(r,44662))})),N=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(4708),r.e(9112),r.e(4680),r.e(7521),r.e(4702),r.e(4025),r.e(2270),r.e(9155)]).then(r.bind(r,8453))})),k=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(5444),r.e(4708),r.e(4854),r.e(3935),r.e(9112),r.e(4680),r.e(1167),r.e(7521),r.e(236),r.e(1391),r.e(6861),r.e(4702),r.e(4025),r.e(8440),r.e(3004)]).then(r.bind(r,51335))})),I=(0,a.lazy)((function(){return Promise.all([r.e(2311),r.e(5444),r.e(4708),r.e(4854),r.e(3935),r.e(9112),r.e(4680),r.e(1167),r.e(7521),r.e(236),r.e(1391),r.e(6861),r.e(4702),r.e(4025),r.e(8440),r.e(9603)]).then(r.bind(r,99910))}));const R=function(){var e=(0,a.useState)(!0),t=(0,n.Z)(e,2),r=t[0],c=t[1];return(0,a.useEffect)((function(){try{m().get("".concat("/api/inventory/v1/hosts","?page=1&per_page=1")).then((function(e){var t=e.data;c(t.total>0)}))}catch(e){console.log(e)}}),[r]),o().createElement(a.Suspense,{fallback:o().createElement(y.b,null,o().createElement(O.$,null))},o().createElement(h.Routes,null,r?o().createElement(h.Route,{element:o().createElement(E,{requiredPermissions:["patch:*:*","patch:*:read"]})},o().createElement(h.Route,{path:"/advisories",element:o().createElement(w,null)}),o().createElement(h.Route,{path:"/advisories/:advisoryId/:inventoryId",element:o().createElement(j,null)}),o().createElement(h.Route,{path:"/advisories/:advisoryId",element:o().createElement(L,null)}),o().createElement(h.Route,{path:"/systems",element:o().createElement(D,null)}),o().createElement(h.Route,{path:"/systems/:inventoryId",element:o().createElement(S,null)}),o().createElement(h.Route,{path:"/packages",element:o().createElement(_,null)}),o().createElement(h.Route,{path:"/packages/:packageName",element:o().createElement(N,null)}),o().createElement(h.Route,{path:"/packages/:packageName/:inventoryId",element:o().createElement(j,null)}),o().createElement(h.Route,{path:"/templates",element:o().createElement(k,null)}),o().createElement(h.Route,{path:"/templates/:templateName",element:o().createElement(I,null)}),o().createElement(h.Route,{path:"*",element:o().createElement(h.Navigate,{to:"advisories"})})):o().createElement(h.Route,{path:"*",element:o().createElement(b.Z,{appId:"content_management_zero_state",appName:"dashboard",module:"./AppZeroState",scope:"dashboard",ErrorComponent:o().createElement("div",null,"Error state"),app:"Content_management"})})))},T=function(){var e=(0,c.I0)(),t=(0,i.Z)(),r=(0,a.useState)({selectedTags:[],systemProfile:!1}),y=(0,n.Z)(r,2),O=y[0],d=y[1];return(0,a.useEffect)((function(){var r;null==t||null===(r=t.globalFilterScope)||void 0===r||r.call(t,"insights"),null!=t&&t.globalFilterScope&&(null==t||t.on("GLOBAL_FILTER_UPDATE",(function(r){var n,a,o,c=r.data,s=null==t||null===(n=t.mapGlobalFilter)||void 0===n?void 0:n.call(t,c,!1,!0)[1],i=null==t||null===(a=t.mapGlobalFilter)||void 0===a||null===(o=a.call(t,c))||void 0===o?void 0:o.filter((function(e){return!e.includes("Workloads")})),l=(0,p.gA)(i,s,null==c?void 0:c.Workloads);JSON.stringify(O)!==JSON.stringify(l)&&(e((0,u.M6)(l)),d(l),e((0,u.df)(l.selectedTags)),e((0,u.WY)(l.systemProfile)))})))}),[]),o().createElement(o().Fragment,null,o().createElement(s.ZP,null),o().createElement(l.r,{appName:"patch"},o().createElement(R,null)))}},92544:(e,t,r)=>{r.d(t,{J:()=>s});var n=r(4942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var c={loaded:!1},s=function(){var e,t,r,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,s=arguments.length>1?arguments[1]:void 0,i=s.type,l=s.payload;switch(i){case"FETCH_SYSTEM_DETAIL_FULFILLED":return o(o({},a),{},{hasThirdPartyRepo:null===(e=l.data)||void 0===e?void 0:e.attributes.third_party,satelliteManaged:null===(t=l.data)||void 0===t?void 0:t.attributes.satellite_managed,patchSetName:null===(r=l.data)||void 0===r?void 0:r.attributes.baseline_name,patchSetId:null===(n=l.data)||void 0===n?void 0:n.attributes.baseline_id});case"LOAD_ENTITY_PENDING":return o(o({},a),{},{loaded:!1});case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return o(o({},a),{},{loaded:!0});default:return a}}},7322:(e,t,r)=>{r.d(t,{E:()=>x,h:()=>X});var n=r(84885),a=r(83215),o=r(57283),c=r.n(o),s=r(4942),i=r(22789),l=r(48881);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={data:{attributes:{}},status:{isLoading:!0}},O=r(45987),d=r(13784);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}d.tO.queryParams;var b=(0,O.Z)(d.tO,["queryParams"]);function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v={data:{attributes:{}},status:{isLoading:!0}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=j(j({},d.tO),{},{queryParams:d.eZ}),w=r(85612),D=r(92544),S=r(74241),L=r(5391);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var N={selectedRows:{},queryParams:{page:1,perPage:20,filter:{stale:[!0,!1]}}};function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var I={selectedRows:{},queryParams:{page:1,perPage:20}};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}var T={selectedRows:{},queryParams:{page:1,perPage:20}};function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function F(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={selectedGlobalTags:[],selectedTags:[],systemProfile:void 0};function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var J={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{}};function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={data:{attributes:{}},status:{isLoading:!0}};function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={selectedRows:{},queryParams:{page:1,perPage:20},templateHasSystemsLoading:!0,templateHasSystems:null};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var M={patchSet:{config:{}},assignedSystems:[],status:{},error:{},takenBaselineNames:[],takenBaselineNamesLoading:!0},K=r(97779),V=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.qC,x={AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.Oy+"_FULFILLED":return(0,l.If)(r,t);case i.Oy+"_PENDING":return(0,l.oZ)(r);case i.Oy+"_REJECTED":return(0,l.PW)(r,t);case i.re:return(0,l.P7)(r,t);case i.SO:return(0,l.gW)(r,t);case i.p7:return(0,l.hd)(r,t);case i.Cg:return(0,l.P7)(r,t);case i.BR:return r.areAllSelected=t.payload,r;default:return e}},SystemDetailStore:D.J,SystemAdvisoryListStore:w.g,AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=p({},e);switch(t.type){case i.J$+"_FULFILLED":return p(p({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.J$+"_PENDING":return(0,l.oZ)(r);case i.J$+"_REJECTED":return(0,l.PW)(r,t);case i.ad:return y;default:return e}},SystemPackageListStore:S.f,PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,r=j({},e);switch(t.type){case i.Gc+"_PENDING":return(0,l.oZ)(r);case i.Gc+"_FULFILLED":return(0,l.If)(r,t);case i.Gc+"_REJECTED":return(0,l.PW)(r,t);case i.Wo:case i.Cg:return(0,l.P7)(r,t);default:return e}},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0,r=P({},e);switch(t.type){case i.lH+"_FULFILLED":return P(P({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.lH+"_PENDING":return(0,l.oZ)(r);case i.lH+"_REJECTED":return(0,l.PW)(r,t);case i.$L:return v;default:return e}},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.tO,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.lO+"_FULFILLED":return(0,l.If)(r,t);case i.lO+"_PENDING":return(0,l.oZ)(r);case i.lO+"_REJECTED":return(0,l.PW)(r,t);case i.gx:return(0,l.P7)(r,t);default:return e}},SystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.pl:return r.queryParams=(0,L.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,l.P7)(r,t);case i._E:return r.metadata=t.payload,r;case i.BR:return r.areAllSelected=t.payload,r;default:return e}},PackageSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.pW:return r.queryParams=(0,L.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,l.P7)(r,t);case i.i3:return I;default:return e}},AdvisorySystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,s.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);switch(t.type){case i.Rr:return r.queryParams=(0,L.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,l.P7)(r,t);case i.vh:return T;default:return e}},GlobalFilterStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.mD:return F(F({},e),{},{selectedTags:t.payload});case i.y0:return F(F({},e),{},{selectedGlobalTags:t.payload});case i.lz:return F(F({},e),{},{systemProfile:t.payload});default:return e}},PatchSetsStore:function(){var e,t=arguments.length>1?arguments[1]:void 0,r=G({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:J);switch(t.type){case i.oc+"_FULFILLED":return G(G({},r),{},{rows:null===(e=t.payload.data)||void 0===e?void 0:e.map((function(e){return G(G({},e.attributes),{},{id:e.id})})),metadata:t.payload.meta||{},error:{},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.oc+"_PENDING":return(0,l.oZ)(r);case i.oc+"_REJECTED":return(0,l.PW)(r,t);case i.oT:return(0,l.P7)(r,t);case i.r8:return(0,l.hd)(r,t);case i.hM:return J;default:return r}},PatchSetDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,r=U({},e);switch(t.type){case i.TR+"_FULFILLED":return U(U({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case i.TR+"_PENDING":return(0,l.oZ)(r);case i.TR+"_REJECTED":return(0,l.PW)(r,t);case i.yo:return W;default:return e}},PatchSetDetailSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0,r=B({},e);switch(t.type){case i.lD:return r.queryParams=(0,L.KZ)(r.queryParams,t.payload),r;case i.Cg:return(0,l.P7)(r,t);case i.kt:return r.metadata=t.payload,r;case i.Tn+"_PENDING":return B(B({},e),{},{templateHasSystemsLoading:!0,templateHasSystems:null});case i.Tn+"_FULFILLED":return B(B({},e),{},{templateHasSystemsLoading:!1,templateHasSystems:t.payload.data.length>0});case i.Tn+"_REJECTED":return B(B({},e),{},{templateHasSystemsLoading:!1,templateHasSystems:!0});default:return e}},SpecificPatchSetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.jP+"_FULFILLED":var r,n=(null===(r=t.payload)||void 0===r?void 0:r.data)||{config:{}},a=n.attributes,o=a.config,c=a.name,s=a.description,u=n.id;return $($({},e),{},{patchSet:{name:c,description:s,config:o||{},id:u},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case i.jP+"_PENDING":return(0,l.oZ)(e);case i.jP+"_REJECTED":return(0,l.PW)(e,t);case i.bn+"_FULFILLED":var p,y=(null===(p=t.payload)||void 0===p?void 0:p.data)||[];return $($({},e),{},{assignedSystems:y.map((function(e){return null==e?void 0:e.inventory_id}))});case i.iV+"_PENDING":return $($({},e),{},{takenBaselineNamesLoading:!0});case i.iV+"_FULFILLED":return $($({},e),{},{takenBaselineNames:t.payload,takenBaselineNamesLoading:!1});case i.iV+"_REJECTED":return $($({},e),{},{takenBaselineNames:[],takenBaselineNamesLoading:!1});case i.eb:return M;default:return e}},notifications:a.ee},X=(0,K.jB)((0,K.UY)(x),V((0,K.md)(c(),(0,n.ZP)())))},59748:e=>{e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')}}]);
//# sourceMappingURL=../sourcemaps/1742.5e236c1eabb162f177d5c927bdd8f262.js.map