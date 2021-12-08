(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[440],{48187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>d});var n=r(29439),o=r(18446),a=r.n(o),c=r(35160),i=r(43297),s=r.n(i),u=r(28216),l=r(334),p=r(60076),f=r(9557),y=r(57358);const d=(0,l.withRouter)((function(){var e=(0,u.I0)(),t=(0,i.useState)({selectedTags:[],systemProfile:!1}),r=(0,n.Z)(t,2),o=r[0],d=r[1],O=(0,l.useLocation)(),v=(0,l.useHistory)();return(0,i.useEffect)((function(){v.listen((function(e){var t=e.pathname,r=Object.values(p.H).filter((function(e){return"/"!==t&&t.includes(e.to)}));if("/"===t)insights.chrome.appNavClick({id:"advisories"},!1);else if(r){var n=t.split("/").filter((function(e){return e.length>0}))[0];n&&insights.chrome.appNavClick({id:n})}}))}),[O.pathname]),(0,i.useEffect)((function(){var t;insights.chrome.init(),insights.chrome.identifyApp("patch"),null!==(t=insights.chrome)&&void 0!==t&&t.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(t){var r,n,c,i,s,u,l=t.data,p=null===(r=insights.chrome)||void 0===r||null===(n=r.mapGlobalFilter)||void 0===n?void 0:n.call(r,l,!1,!0)[1],O=null==l||null===(c=l.Workloads)||void 0===c?void 0:c.SAP,v=null===(i=insights.chrome)||void 0===i||null===(s=i.mapGlobalFilter)||void 0===s||null===(u=s.call(i,l))||void 0===u?void 0:u.filter((function(e){return!e.includes("Workloads")})),g=(0,y.gA)(v,p,O);a()(o,g)||(e((0,f.M6)(g)),d(g),(0,f.vl)(v),(0,f.$H)(O),(0,f.DY)(p))}));var r=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&v.push("/".concat(e.navId))}));return function(){return r()}}),[]),s().createElement(s().Fragment,null,s().createElement(c.ZP,null),s().createElement(p.Z,{childProps:{location:O,history:v}}))}))},60076:(e,t,r)=>{"use strict";r.d(t,{H:()=>h,Z:()=>P});var n=r(29439),o=r(59704),a=r.n(o),c=r(45697),i=r.n(c),s=r(43297),u=r.n(s),l=r(334),p=r(11220),f=(0,s.lazy)((function(){return Promise.all([r.e(96),r.e(20)]).then(r.bind(r,79202))})),y=(0,s.lazy)((function(){return Promise.all([r.e(96),r.e(29),r.e(25),r.e(743)]).then(r.bind(r,9770))})),d=(0,s.lazy)((function(){return Promise.all([r.e(25),r.e(184)]).then(r.bind(r,98249))})),O=(0,s.lazy)((function(){return Promise.all([r.e(96),r.e(29),r.e(25),r.e(60)]).then(r.bind(r,96688))})),v=(0,s.lazy)((function(){return r.e(677).then(r.bind(r,44662))})),g=(0,s.lazy)((function(){return Promise.all([r.e(96),r.e(29),r.e(25),r.e(155)]).then(r.bind(r,8453))})),b=(0,s.lazy)((function(){return r.e(362).then(r.bind(r,18008))})),h={advisories:{title:"Applicable advisories",to:"/advisories"},systems:{title:"Systems",to:"/systems/"},inventoryDetail:{title:"Inventory detail",to:"/systems/:inventoryId"},advisoryDetail:{title:"Advisory detail",to:"/advisories/:advisoryId"},advisoryDetailSystem:{title:"",to:"/advisories/:advisoryId/:inventoryId"},noaccess:{title:"",to:"/noaccess"},packages:{title:"Packages",to:"/packages"},packageDetail:{title:"Package detail",to:"/packages/:packageName"},packageDetailSystem:{title:"",to:"/packages/:packageName/:inventoryId"}},P=function(e){var t=(0,s.useState)(),r=(0,n.Z)(t,2),o=r[0],c=r[1],i=(0,l.useHistory)(),P=function(e){c(e),i.replace(h.noaccess.to)};u().useEffect((function(){(0,p.lc)({limit:1}).then((function(e){e.meta||P(e.status)})).catch((function(e){return P(e.status)}))}),[]);var m=e.childProps.location.pathname;return u().createElement(s.Suspense,{fallback:s.Fragment},u().createElement(l.Switch,null,u().createElement(l.Redirect,{from:h.advisoryDetailSystem.to,to:h.inventoryDetail.to}),u().createElement(l.Redirect,{from:h.packageDetailSystem.to,to:h.inventoryDetail.to}),u().createElement(l.Route,{path:h.inventoryDetail.to,component:d}),u().createElement(l.Route,{exact:!0,path:h.systems.to,component:y}),u().createElement(l.Route,{exact:!0,path:h.advisoryDetail.to,component:O}),u().createElement(l.Route,{exact:!0,path:h.advisories.to,component:f}),u().createElement(l.Route,{exact:!0,path:h.packages.to,component:v}),u().createElement(l.Route,{exact:!0,path:h.noaccess.to,render:function(){return u().createElement(b,{code:o})}}),u().createElement(l.Route,{exact:!0,path:h.packageDetail.to,component:g}),u().createElement(l.Route,{render:function(){return a()(h,(function(e){return e.to===m}))||u().createElement(l.Redirect,{to:h.advisories.to})}})))};P.propTypes={childProps:i().shape({location:i().shape({pathname:i().string}),history:i().any})}},83653:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=function(e){var t="/",r=e.split("/");return r.shift(),"beta"===r[0]&&(r.shift(),t="/beta/"),"".concat(t).concat(r[0],"/").concat(r[1]||"")}},92544:(e,t,r)=>{"use strict";r.d(t,{J:()=>l});var n=r(4942),o=r(43297),a=r.n(o),c=r(79577);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={loaded:!1},l=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0,n=r.type,o=r.payload;switch(n){case"FETCH_SYSTEM_DETAIL_FULFILLED":return t.hasThirdPartyRepo=null===(e=o.data)||void 0===e?void 0:e.attributes.third_party,t;case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return s(s({},t),{},{loaded:!0,activeApps:[{title:"Patch",name:"patch",component:function(){return a().createElement(c.Z,null)}}]});default:return t}}},32041:(e,t,r)=>{"use strict";r.d(t,{b:()=>X,z:()=>ee});var n=r(4942),o=r(84885),a=r(83215),c=r(20925),i=r(57283),s=r.n(i),u=r(22789),l=r(48881);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y={data:{attributes:{}},status:{isLoading:!0}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0,r=f({},e);switch(t.type){case u.J$+"_FULFILLED":return f(f({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case u.J$+"_PENDING":return(0,l.oZ)(r);case u.J$+"_REJECTED":return(0,l.PW)(r,t);case u.ad:return y;default:return e}},O=r(13784);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.tO,t=arguments.length>1?arguments[1]:void 0,r=g({},e);switch(t.type){case u.Oy+"_FULFILLED":return(0,l.If)(r,t);case u.Oy+"_PENDING":return(0,l.oZ)(r);case u.Oy+"_REJECTED":return(0,l.PW)(r,t);case u.re:return(0,l.P7)(r,t);case u.SO:return(0,l.gW)(r,t);case u.p7:return(0,l.hd)(r,t);case u.Cg:return(0,l.P7)(r,t);default:return e}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.tO,t=arguments.length>1?arguments[1]:void 0,r=P({},e);switch(t.type){case u.lO+"_FULFILLED":return(0,l.If)(r,t);case u.lO+"_PENDING":return(0,l.oZ)(r);case u.lO+"_REJECTED":return(0,l.PW)(r,t);case u.gx:return(0,l.P7)(r,t);default:return e}};function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E={data:{attributes:{}},status:{isLoading:!0}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0,r=D({},e);switch(t.type){case u.lH+"_FULFILLED":return D(D({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case u.lH+"_PENDING":return(0,l.oZ)(r);case u.lH+"_REJECTED":return(0,l.PW)(r,t);case u.$L:return E;default:return e}};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=k(k({},O.tO),{},{queryParams:O.eZ}),_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0,r=k({},e);switch(t.type){case u.Gc+"_PENDING":return(0,l.oZ)(r);case u.Gc+"_FULFILLED":return(0,l.If)(r,t);case u.Gc+"_REJECTED":return(0,l.PW)(r,t);case u.Wo:case u.Cg:return(0,l.P7)(r,t);default:return e}},I=r(85612),Z=r(92544),F=r(74241),R=r(57358);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T={selectedRows:{},queryParams:{page:1,perPage:20,filter:{stale:[!0,!1]}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0,r=N({},e);switch(t.type){case u.pl:return r.queryParams=(0,R.KZ)(r.queryParams,t.payload),r;case u.Cg:return(0,l.P7)(r,t);case u._E:return r.metadata=t.payload,r;default:return e}};function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var W={selectedRows:{},queryParams:{page:1,perPage:20}},q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0,r=G({},e);switch(t.type){case u.pW:return r.queryParams=(0,R.KZ)(r.queryParams,t.payload),r;case u.Cg:return(0,l.P7)(r,t);case u.i3:return W;default:return e}};function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U={selectedRows:{},queryParams:{page:1,perPage:20}},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0,r=H({},e);switch(t.type){case u.Rr:return r.queryParams=(0,R.KZ)(r.queryParams,t.payload),r;case u.Cg:return(0,l.P7)(r,t);case u.vh:return U;default:return e}};function Y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.mD:return $($({},e),{},{tagsFilter:t.payload});case u.Rx:return console.log("workloads",t.payload),$($({},e),{},{workloadsFilter:t.payload});case u.xG:return $($({},e),{},{sidsFilter:t.payload});default:return e}};function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var V=JSON.parse(sessionStorage.getItem("PatchStore"))||{},Q=(0,c.JH)({},[s(),(0,o.ZP)(),function(e){return function(t){return function(r){if("LOAD_ENTITIES_FULFILLED"===r.type&&(r=B(B({},r),{},{store:e})),t(r),!r.type.endsWith("_REJECTED")){var n=e.getState();sessionStorage.setItem("PatchStore",JSON.stringify(n))}}}}]);Q.register({AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.AdvisoryListStore,t=arguments.length>1?arguments[1]:void 0;return b(e,t)},SystemDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.SystemDetailStore,t=arguments.length>1?arguments[1]:void 0;return(0,Z.J)(e,t)},SystemAdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.SystemAdvisoryListStore,t=arguments.length>1?arguments[1]:void 0;return(0,I.g)(e,t)},AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.AdvisoryDetailStore,t=arguments.length>1?arguments[1]:void 0;return d(e,t)},SystemPackageListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.SystemPackageListStore,t=arguments.length>1?arguments[1]:void 0;return(0,F.f)(e,t)},PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.PackagesListStore,t=arguments.length>1?arguments[1]:void 0;return _(e,t)},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.PackageDetailStore,t=arguments.length>1?arguments[1]:void 0;return S(e,t)},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.CvesListStore,t=arguments.length>1?arguments[1]:void 0;return m(e,t)},SystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.SystemsStore,t=arguments.length>1?arguments[1]:void 0;return C(e,t)},PackageSystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.PackageSystemsStore,t=arguments.length>1?arguments[1]:void 0;return q(e,t)},AdvisorySystemsStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.AdvisorySystemsStore,t=arguments.length>1?arguments[1]:void 0;return z(e,t)},notifications:a.ee,GlobalFilterStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V.GlobalFilterStore,t=arguments.length>1?arguments[1]:void 0;return K(e,t)}});var X=function(){return Q.getStore()},ee=function(e){Q.register(e)}},81754:()=>{},80598:()=>{},74181:()=>{},11177:()=>{},59748:e=>{"use strict";e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')}}]);
//# sourceMappingURL=../sourcemaps/440.699649941c9e72d1407a5eca7474cb2d.js.map