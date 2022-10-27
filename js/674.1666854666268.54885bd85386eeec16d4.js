"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[674],{48187:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(29439),o=r(18446),a=r.n(o),c=r(51344),s=r(43297),i=r.n(s),l=r(50533),u=r(334),p=r(60076),y=r(9557),f=r(5391);const d=(0,u.withRouter)((function(){var e=(0,l.I0)(),t=(0,s.useState)({selectedTags:[],systemProfile:!1}),r=(0,n.Z)(t,2),o=r[0],d=r[1],O=(0,u.useLocation)(),b=(0,u.useHistory)();return(0,s.useEffect)((function(){var t;insights.chrome.init(),insights.chrome.identifyApp("patch"),null!==(t=insights.chrome)&&void 0!==t&&t.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(t){var r,n,c,s,i,l=t.data,u=null===(r=insights.chrome)||void 0===r||null===(n=r.mapGlobalFilter)||void 0===n?void 0:n.call(r,l,!1,!0)[1],p=null===(c=insights.chrome)||void 0===c||null===(s=c.mapGlobalFilter)||void 0===s||null===(i=s.call(c,l))||void 0===i?void 0:i.filter((function(e){return!e.includes("Workloads")})),O=(0,f.gA)(p,u,null==l?void 0:l.Workloads);a()(o,O)||(e((0,y.M6)(O)),d(O),e((0,y.df)(O.selectedTags)),e((0,y.WY)(O.systemProfile)))}));var r=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&b.push("/".concat(e.navId))}));return function(){return r()}}),[]),i().createElement(i().Fragment,null,i().createElement(c.ZP,null),i().createElement(p.Z,{childProps:{location:O,history:b}}))}))},60076:(e,t,r)=>{r.d(t,{H:()=>P,Z:()=>h});var n=r(59704),o=r.n(n),a=r(45697),c=r.n(a),s=r(43297),i=r.n(s),l=r(334),u=r(91607),p=r(13784),y=(0,s.lazy)((function(){return r.e(7020).then(r.bind(r,79202))})),f=(0,s.lazy)((function(){return Promise.all([r.e(6084),r.e(8277),r.e(2436),r.e(5981),r.e(6327),r.e(6743)]).then(r.bind(r,27656))})),d=(0,s.lazy)((function(){return Promise.all([r.e(6084),r.e(8277),r.e(2436),r.e(5981),r.e(6327),r.e(184)]).then(r.bind(r,98249))})),O=(0,s.lazy)((function(){return Promise.all([r.e(2436),r.e(7060)]).then(r.bind(r,96688))})),b=(0,s.lazy)((function(){return r.e(1677).then(r.bind(r,44662))})),g=(0,s.lazy)((function(){return Promise.all([r.e(6084),r.e(8277),r.e(2436),r.e(5981),r.e(6327),r.e(9155)]).then(r.bind(r,8453))})),v=(0,s.lazy)((function(){return Promise.all([r.e(6084),r.e(8277),r.e(2436),r.e(5981),r.e(6327),r.e(9155)]).then(r.bind(r,535))})),P={advisories:{title:"Applicable advisories",to:"/advisories"},systems:{title:"Systems",to:"/systems/"},inventoryDetail:{title:"Inventory detail",to:"/systems/:inventoryId"},advisoryDetail:{title:"Advisory detail",to:"/advisories/:advisoryId"},advisoryDetailSystem:{title:"",to:"/advisories/:advisoryId/:inventoryId"},packages:{title:"Packages",to:"/packages"},packageDetail:{title:"Package detail",to:"/packages/:packageName"},packageDetailSystem:{title:"",to:"/packages/:packageName/:inventoryId"},templates:{title:"Templates",to:"/templates"}},h=function(e){var t=e.childProps.location.pathname,r=(0,u.ye)(p.VH.patch_set);return i().createElement(s.Suspense,{fallback:s.Fragment},i().createElement(l.Switch,null,i().createElement(l.Redirect,{from:P.advisoryDetailSystem.to,to:P.inventoryDetail.to}),i().createElement(l.Redirect,{from:P.packageDetailSystem.to,to:P.inventoryDetail.to}),i().createElement(l.Route,{path:P.inventoryDetail.to,component:d}),i().createElement(l.Route,{exact:!0,path:P.systems.to,component:f}),i().createElement(l.Route,{exact:!0,path:P.advisoryDetail.to,component:O}),i().createElement(l.Route,{exact:!0,path:P.advisories.to,component:y}),i().createElement(l.Route,{exact:!0,path:P.packages.to,component:b}),i().createElement(l.Route,{exact:!0,path:P.packageDetail.to,component:g}),r&&i().createElement(l.Route,{exact:!0,path:P.templates.to,component:v}),i().createElement(l.Route,{render:function(){return(!r||!o()(P,(function(e){return e.to===t})))&&i().createElement(l.Redirect,{to:P.advisories.to})}})))};h.propTypes={childProps:c().shape({location:c().shape({pathname:c().string}),history:c().any})}},83653:(e,t,r)=>{r.d(t,{Z:()=>n});const n=function(e){var t="/",r=e.split("/");return r.shift(),"beta"===r[0]&&(r.shift(),t="/beta/"),"".concat(t).concat(r[0],"/").concat(r[1]||"")}},92544:(e,t,r)=>{r.d(t,{J:()=>u});var n=r(4942),o=r(43297),a=r.n(o),c=r(79577);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={loaded:!1},u=function(){var e,t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,o=n.type,s=n.payload;switch(o){case"FETCH_SYSTEM_DETAIL_FULFILLED":return r.hasThirdPartyRepo=null===(e=s.data)||void 0===e?void 0:e.attributes.third_party,r.patchSetName=null===(t=s.data)||void 0===t?void 0:t.attributes.baseline_name,r;case"LOAD_ENTITY_PENDING":return i(i({},r),{},{loaded:!1,activeApps:[{title:"Patch",name:"patch",component:function(){return a().createElement(c.Z,null)}}]});case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return i(i({},r),{},{loaded:!0,activeApps:[{title:"Patch",name:"patch",component:function(){return a().createElement(c.Z,null)}}]});default:return r}}},2807:(e,t,r)=>{r.d(t,{b:()=>B,z:()=>K});var n=r(84885),o=r(83215),a=r(20925),c=r(57283),s=r.n(c),i=r(4942),l=r(22789),u=r(48881);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={data:{attributes:{}},status:{isLoading:!0}},d=r(13784);function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?P(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):P(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m={data:{attributes:{}},status:{isLoading:!0}};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=E(E({},d.tO),{},{queryParams:d.eZ}),w=r(85612),S=r(92544),_=r(74241),L=r(5391);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Z={selectedRows:{},queryParams:{page:1,perPage:20,filter:{stale:[!0,!1]}}};function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var F={selectedRows:{},queryParams:{page:1,perPage:20}};function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var C={selectedRows:{},queryParams:{page:1,perPage:20}};function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={selectedGlobalTags:[],selectedTags:[],systemProfile:void 0};function U(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function q(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?U(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var z={rows:[],selectedRows:[],queryParams:{page:1,perPage:20,offset:0,filter:{}},status:{isLoading:!0},metadata:{limit:20,offset:0,total_items:0},error:{}};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Y={patchSet:{config:{}},assignedSystems:[],status:{},error:{}},$=(0,a.JH)({},[s(),(0,n.ZP)()]);$.register({AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.tO,t=arguments.length>1?arguments[1]:void 0,r=b({},e);switch(t.type){case l.Oy+"_FULFILLED":return(0,u.If)(r,t);case l.Oy+"_PENDING":return(0,u.oZ)(r);case l.Oy+"_REJECTED":return(0,u.PW)(r,t);case l.re:return(0,u.P7)(r,t);case l.SO:return(0,u.gW)(r,t);case l.p7:return(0,u.hd)(r,t);case l.Cg:return(0,u.P7)(r,t);case l.BR:return r.areAllSelected=t.payload,r;default:return e}},SystemDetailStore:S.J,SystemAdvisoryListStore:w.g,AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,r=y({},e);switch(t.type){case l.J$+"_FULFILLED":return y(y({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case l.J$+"_PENDING":return(0,u.oZ)(r);case l.J$+"_REJECTED":return(0,u.PW)(r,t);case l.ad:return f;default:return e}},SystemPackageListStore:_.f,PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,r=E({},e);switch(t.type){case l.Gc+"_PENDING":return(0,u.oZ)(r);case l.Gc+"_FULFILLED":return(0,u.If)(r,t);case l.Gc+"_REJECTED":return(0,u.PW)(r,t);case l.Wo:case l.Cg:return(0,u.P7)(r,t);default:return e}},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0,r=h({},e);switch(t.type){case l.lH+"_FULFILLED":return h(h({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case l.lH+"_PENDING":return(0,u.oZ)(r);case l.lH+"_REJECTED":return(0,u.PW)(r,t);case l.$L:return m;default:return e}},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d.tO,t=arguments.length>1?arguments[1]:void 0,r=v({},e);switch(t.type){case l.lO+"_FULFILLED":return(0,u.If)(r,t);case l.lO+"_PENDING":return(0,u.oZ)(r);case l.lO+"_REJECTED":return(0,u.PW)(r,t);case l.gx:return(0,u.P7)(r,t);default:return e}},SystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0,r=I({},e);switch(t.type){case l.pl:return r.queryParams=(0,L.KZ)(r.queryParams,t.payload),r;case l.Cg:return(0,u.P7)(r,t);case l._E:return r.metadata=t.payload,r;case l.BR:return r.areAllSelected=t.payload,r;default:return e}},PackageSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0,r=T({},e);switch(t.type){case l.pW:return r.queryParams=(0,L.KZ)(r.queryParams,t.payload),r;case l.Cg:return(0,u.P7)(r,t);case l.i3:return F;default:return e}},AdvisorySystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0,r=A({},e);switch(t.type){case l.Rr:return r.queryParams=(0,L.KZ)(r.queryParams,t.payload),r;case l.Cg:return(0,u.P7)(r,t);case l.vh:return C;default:return e}},GlobalFilterStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.mD:return J(J({},e),{},{selectedTags:t.payload});case l.y0:return J(J({},e),{},{selectedGlobalTags:t.payload});case l.lz:return J(J({},e),{},{systemProfile:t.payload});default:return e}},PatchSetsStore:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case l.oc+"_FULFILLED":return q(q({},t),{},{rows:null===(e=r.payload.data)||void 0===e?void 0:e.map((function(e){return q(q({},e.attributes),{},{id:e.id})})),metadata:r.payload.meta||{},error:{},status:{code:r.payload.status,isLoading:!1,hasError:!1}});case l.oc+"_PENDING":return(0,u.oZ)(t);case l.oc+"_REJECTED":return(0,u.PW)(t,r);case l.oT:return(0,u.P7)(t,r);case l.r8:return(0,u.hd)(t,r);case l.hM:return z;default:return t}},SpecificPatchSetReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l.jP+"_FULFILLED":var r,n=(null===(r=t.payload)||void 0===r?void 0:r.data)||{config:{}},o=n.attributes,a=o.config,c=o.name,s=o.description,i=n.id;return H(H({},e),{},{patchSet:{name:c,description:s,config:a||{},id:i},status:{code:t.payload.status,isLoading:!1,hasError:!1}});case l.jP+"_PENDING":return(0,u.oZ)(e);case l.jP+"_REJECTED":return(0,u.PW)(e,t);case l.bn+"_FULFILLED":var p,y=(null===(p=t.payload)||void 0===p?void 0:p.data)||[];return H(H({},e),{},{assignedSystems:y.map((function(e){return null==e?void 0:e.inventory_id}))});case l.eb:return Y;default:return e}},notifications:o.ee});var B=function(){return $.getStore()},K=function(e){$.register(e)}},59748:e=>{e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')}}]);