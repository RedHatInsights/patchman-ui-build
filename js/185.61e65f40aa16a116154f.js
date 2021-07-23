(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[185],{16635:e=>{"use strict";e.exports=JSON.parse('{"advisories":"Advisories","affectedSystems":"Affected systems","appName":"Patch","cancel":"Cancel","count":"Num. systems","delete":"Delete","edit":"Edit","loading":"Loading...","no":"No","packageUpdates":"Package updates","packages":"Packages","remediate":"Remediate","save":"Save","search":"Search","searchPackages":"Search packages","searchSystems":"Search systems","systems":"Systems","yes":"Yes"}')},48187:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(28481),o=r(18446),a=r.n(o),i=r(24685),c=r(77865),s=r.n(c),l=r(61084),u=r(334),p=r(71198),d=r(9557);const f=(0,u.withRouter)((function(){var e=(0,l.useDispatch)(),t=(0,c.useState)({selectedTags:[],systemProfile:!1}),r=(0,n.Z)(t,2),o=r[0],f=r[1],y=(0,u.useLocation)(),m=(0,u.useHistory)();return(0,c.useEffect)((function(){m.listen((function(e){var t=e.pathname,r=Object.values(p.H).filter((function(e){return"/"!==t&&t.includes(e.to)}));if("/"===t)insights.chrome.appNavClick({id:"advisories"},!1);else if(r){var n=t.split("/").filter((function(e){return e.length>0}))[0];n&&insights.chrome.appNavClick({id:n})}}))}),[y.pathname]),(0,c.useEffect)((function(){var t;insights.chrome.init(),insights.chrome.identifyApp("patch"),null!==(t=insights.chrome)&&void 0!==t&&t.globalFilterScope&&insights.chrome.on("GLOBAL_FILTER_UPDATE",(function(t){var r,n,i,c,s,l,u=t.data,p=null===(r=insights.chrome)||void 0===r||null===(n=r.mapGlobalFilter)||void 0===n?void 0:n.call(r,u,!1,!0)[1],y=null==u||null===(i=u.Workloads)||void 0===i?void 0:i.SAP,m=null===(c=insights.chrome)||void 0===c||null===(s=c.mapGlobalFilter)||void 0===s||null===(l=s.call(c,u))||void 0===l?void 0:l.filter((function(e){return!e.includes("Workloads")})).map((function(e){return"tags=".concat(encodeURIComponent(e))})),v={};if(y&&y.isSelected?v.systemProfile="filter[system_profile][sap_system]=".concat(y.isSelected,"&"):v.systemProfile=void 0,m&&(v.selectedTags=m),p&&0!==(null==p?void 0:p.length)){var h,g=p.map((function(e){return"filter[system_profile][sap_sids][in]=".concat(e)})).join("&");v.systemProfile=(null===(h=v.systemProfile)||void 0===h?void 0:h.concat(g))||g}a()(o,v)||(e((0,d.M6)(v)),f(v))}));var r=insights.chrome.on("APP_NAVIGATION",(function(e){e.domEvent&&m.push("/".concat(e.navId))}));return function(){return r()}}),[]),s().createElement(s().Fragment,null,s().createElement(i.ZP,null),s().createElement(p.Z,{childProps:{location:y,history:m}}))}))},49642:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(48716),o=r(39173),a=r(45697),i=r.n(a),c=r(77865),s=r.n(c),l=r(85991),u=r(49489),p=r(334),d=function(e){var t=e.items,r=e.headerOUIA;return s().createElement(l.a,null,t.filter(Boolean).map((function(e){return s().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&s().createElement(p.Link,{to:e.to,"data-ouia-component-type":"".concat(r,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};d.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().string})),headerOUIA:i().string};const f=d;var y=r(82819),m=r(98378),v=r(71198),h=function(e){var t=e.history,r=e.headerOUIA;return s().createElement(m.mQ,{onSelect:function(e,r){t.push(r)},activeKey:t.location.pathname,className:"patchman-tabs"},s().createElement(y.O,{eventKey:v.H.advisories.to,title:v.H.advisories.title,"data-ouia-component-type":"".concat(r,"-tab"),"data-ouia-component-id":"".concat(r,"-tab-").concat(v.H.advisories.title)}),s().createElement(y.O,{eventKey:v.H.systems.to,title:v.H.systems.title,"data-ouia-component-type":"".concat(r,"-tab"),"data-ouia-component-id":"".concat(r,"-tab-").concat(v.H.systems.title)}))};h.propTypes={history:i().object,headerOUIA:i().string};const g=(0,p.withRouter)(h);var O=function(e){var t=e.title,r=e.showTabs,a=e.breadcrumbs,i=e.children,c=e.headerOUIA;return s().createElement(s().Fragment,null,s().createElement(n.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},a&&s().createElement(f,{items:a,headerOUIA:c}),s().createElement(o.Z,{title:t}),i),r&&s().createElement(g,{headerOUIA:c}))};O.propTypes={title:i().string,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string};const b=O},71198:(e,t,r)=>{"use strict";r.d(t,{Z:()=>N,H:()=>Z});var n=r(28481),o=r(59704),a=r.n(o),i=r(45697),c=r.n(i),s=r(77865),l=r.n(s),u=r(334),p=r(11220),d=r(75663),f=r(86350),y=r(8896),m=r(219),v=r(74183),h=r(86728),g=r(52792),O=r(34348),b=r(6202),P=r(32132),E=r(30893),j=r(49642);const D=(0,u.withRouter)((function(){return l().createElement(g.T3,null,l().createElement(j.Z,{title:P.N.formatMessage(E.Z.generalAppName),headerOUIA:"systems"}),l().createElement(f.Z,null,l().createElement(y.b,null,l().createElement(m.ub,{variant:m.IQ.large},l().createElement(h.k,{icon:d.ZP}),l().createElement(O.Title,{headingLevel:"h5",size:"lg"},P.N.formatMessage(E.Z.statesRequiresPatchPermissions)),l().createElement(v.B,null,P.N.formatMessage(E.Z.statesMinimumPatchPermissionsRequired)),document.referrer?l().createElement(b.Button,{variant:"primary",onClick:function(){return history.back()}},"Go to previous page"):l().createElement(b.Button,{variant:"primary",component:"a",href:"."},"Go to landing page")))))}));var S=(0,s.lazy)((function(){return r.e(20).then(r.bind(r,48284))})),w=(0,s.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(747),r.e(743)]).then(r.bind(r,49552))})),L=(0,s.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(184)]).then(r.bind(r,70745))})),_=(0,s.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(747),r.e(202),r.e(60)]).then(r.bind(r,53661))})),k=(0,s.lazy)((function(){return r.e(677).then(r.bind(r,44662))})),I=(0,s.lazy)((function(){return Promise.all([r.e(410),r.e(252),r.e(736),r.e(747),r.e(202),r.e(155)]).then(r.bind(r,8453))})),A=(0,s.lazy)((function(){return r.e(494).then(r.bind(r,87810))})),Z={advisories:{title:"Applicable advisories",to:"/advisories"},systems:{title:"Systems",to:"/systems/"},inventoryDetail:{title:"Inventory detail",to:"/systems/:inventoryId"},advisoryDetail:{title:"Advisory detail",to:"/advisories/:advisoryId"},advisoryDetailSystem:{title:"",to:"/advisories/:advisoryId/:inventoryId"},register:{title:"",to:"/register"},packages:{title:"Packages",to:"/packages"},packageDetail:{title:"Package detail",to:"/packages/:packageName"},packageDetailSystem:{title:"",to:"/packages/:packageName/:inventoryId"}},N=function(e){var t=(0,s.useState)(!0),r=(0,n.Z)(t,2),o=r[0],i=r[1],c=(0,u.useHistory)();l().useEffect((function(){(0,p.lc)({limit:1}).then((function(e){e.meta||c.replace(Z.register.to)})).catch((function(e){return 401===e.status&&i(!1)}))}),[]);var d=e.childProps.location.pathname;return o&&l().createElement(s.Suspense,{fallback:s.Fragment},l().createElement(u.Switch,null,l().createElement(u.Redirect,{from:Z.advisoryDetailSystem.to,to:Z.inventoryDetail.to}),l().createElement(u.Redirect,{from:Z.packageDetailSystem.to,to:Z.inventoryDetail.to}),l().createElement(u.Route,{path:Z.inventoryDetail.to,component:L}),l().createElement(u.Route,{exact:!0,path:Z.systems.to,component:w}),l().createElement(u.Route,{exact:!0,path:Z.advisoryDetail.to,component:_}),l().createElement(u.Route,{exact:!0,path:Z.advisories.to,component:S}),l().createElement(u.Route,{exact:!0,path:Z.packages.to,component:k}),l().createElement(u.Route,{exact:!0,path:Z.register.to,component:A}),l().createElement(u.Route,{exact:!0,path:Z.packageDetail.to,component:I}),l().createElement(u.Route,{render:function(){return a()(Z,(function(e){return e.to===d}))||l().createElement(u.Redirect,{to:Z.advisories.to})}})))||l().createElement(D,null)};N.propTypes={childProps:c().shape({location:c().shape({pathname:c().string}),history:c().any})}},83653:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});const n=function(e){var t="/",r=e.split("/");return r.shift(),"beta"===r[0]&&(r.shift(),t="/beta/"),"".concat(t).concat(r[0],"/").concat(r[1]||"")}},92544:(e,t,r)=>{"use strict";r.d(t,{J:()=>u});var n=r(96156),o=r(77865),a=r.n(o),i=r(79577);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={loaded:!1},u=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1?arguments[1]:void 0,n=r.type,o=r.payload;switch(n){case"FETCH_SYSTEM_DETAIL_FULFILLED":return t.hasThirdPartyRepo=null===(e=o.data)||void 0===e?void 0:e.attributes.third_party,t;case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return s(s({},t),{},{loaded:!0,activeApps:[{title:"Patch",name:"patch",component:function(){return a().createElement(i.Z,null)}}]});default:return t}}},17915:(e,t,r)=>{"use strict";r.d(t,{b:()=>U,z:()=>C});var n=r(96156),o=r(84885),a=r(83215),i=r(8738),c=r(57283),s=r.n(c),l=r(22789),u=r(48881);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={data:{attributes:{}},status:{isLoading:!0}},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0,r=d({},e);switch(t.type){case l.J$+"_FULFILLED":return d(d({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case l.J$+"_PENDING":return(0,u.oZ)(r);case l.J$+"_REJECTED":return(0,u.PW)(r,t);case l.ad:return f;default:return e}},m=r(13784);function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.tO,t=arguments.length>1?arguments[1]:void 0,r=h({},e);switch(t.type){case l.Oy+"_FULFILLED":return(0,u.If)(r,t);case l.Oy+"_PENDING":return(0,u.oZ)(r);case l.Oy+"_REJECTED":return(0,u.PW)(r,t);case l.re:return(0,u.P7)(r,t);case l.SO:return(0,u.gW)(r,t);case l.p7:return(0,u.hd)(r,t);case l.Cg:return(0,u.P7)(r,t);default:return e}};function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.tO,t=arguments.length>1?arguments[1]:void 0,r=b({},e);switch(t.type){case l.lO+"_FULFILLED":return(0,u.If)(r,t);case l.lO+"_PENDING":return(0,u.oZ)(r);case l.lO+"_REJECTED":return(0,u.PW)(r,t);case l.gx:return(0,u.P7)(r,t);default:return e}};function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D={data:{attributes:{}},status:{isLoading:!0}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0,r=j({},e);switch(t.type){case l.lH+"_FULFILLED":return j(j({},e),{},{status:{isLoading:!1},data:t.payload.data,error:{}});case l.lH+"_PENDING":return(0,u.oZ)(r);case l.lH+"_REJECTED":return(0,u.PW)(r,t);case l.$L:return D;default:return e}};function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function L(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var _=L(L({},m.tO),{},{queryParams:m.eZ}),k=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0,r=L({},e);switch(t.type){case l.Gc+"_PENDING":return(0,u.oZ)(r);case l.Gc+"_FULFILLED":return(0,u.If)(r,t);case l.Gc+"_REJECTED":return(0,u.PW)(r,t);case l.Wo:case l.Cg:return(0,u.P7)(r,t);default:return e}},I=r(85612),A=r(92544),Z=r(74241);function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R=JSON.parse(sessionStorage.getItem("PatchStore"))||{},F=(0,i.JH)({},[s(),(0,o.ZP)(),function(e){return function(t){return function(r){if("LOAD_ENTITIES_FULFILLED"===r.type&&(r=T(T({},r),{},{store:e})),t(r),!r.type.endsWith("_REJECTED")){var n=e.getState();sessionStorage.setItem("PatchStore",JSON.stringify(n))}}}}]);F.register({AdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.AdvisoryListStore,t=arguments.length>1?arguments[1]:void 0;return g(e,t)},SystemDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.SystemDetailStore,t=arguments.length>1?arguments[1]:void 0;return(0,A.J)(e,t)},SystemAdvisoryListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.SystemAdvisoryListStore,t=arguments.length>1?arguments[1]:void 0;return(0,I.g)(e,t)},AdvisoryDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.AdvisoryDetailStore,t=arguments.length>1?arguments[1]:void 0;return y(e,t)},SystemPackageListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.SystemPackageListStore,t=arguments.length>1?arguments[1]:void 0;return(0,Z.f)(e,t)},PackagesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.PackagesListStore,t=arguments.length>1?arguments[1]:void 0;return k(e,t)},PackageDetailStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.PackageDetailStore,t=arguments.length>1?arguments[1]:void 0;return S(e,t)},CvesListStore:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R.CvesListStore,t=arguments.length>1?arguments[1]:void 0;return P(e,t)},notifications:a.ee});var U=function(){return F.getStore()},C=function(e){F.register(e)}}}]);
//# sourceMappingURL=../sourcemaps/185.caa1f121e6f70c940c9b.js.map