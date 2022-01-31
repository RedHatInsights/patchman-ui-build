(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[625],{35160:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>k});var n=r(28216),i=r(87462),o=r(15671),s=r(43144),a=r(97326),c=r(60136),u=r(82963),l=r(61120),f=r(4942),p=r(43297),d=r.n(p),y=r(21704),v=r(45697),m=r.n(v),g=r(45987),h=r(87116),O=r(68774),b=r(68340),w=r(56715);const j=(0,r(40400).IU)({name:"CloseIcon",height:1024,width:730,svgPath:"M725.499315,767.757345 L469.242169,511.500499 L725.499315,255.243653 C729.196254,251.545719 731.096195,247.248119 731,242.4498 C731,237.653479 728.997365,233.35588 725.299427,229.558002 L647.542773,151.701495 C643.743891,147.903617 639.446287,146 634.64996,146 C629.852635,146 625.55503,147.803673 621.857092,151.500607 L365.5,407.857398 L109.241857,151.500607 C105.544917,147.803673 101.246314,145.904733 96.4499876,146 C91.6526619,146.104622 87.3550577,148.002562 83.5571748,151.701495 L5.7005771,229.457058 C1.90269428,233.255936 0,237.553535 0,242.350855 C0,247.148175 1.80175055,251.444775 5.50068853,255.143709 L261.857779,511.500499 L5.50068853,767.757345 C1.80175055,771.454279 -0.0961914123,775.752878 0,779.750645 C0.103697157,784.547965 2.00263857,788.845564 5.7005771,792.642443 L83.4572306,871.299502 C87.2541139,875.096381 91.5527176,877 96.3500433,877 C101.147369,877 105.444973,875.197325 109.142912,871.499391 L365.400058,615.241545 L621.657203,871.499391 C625.355142,875.197325 629.652746,877.095265 634.449072,877 C639.246398,877 643.545002,874.997437 647.342885,871.299502 L725.099538,793.54294 C728.896421,789.745062 730.796362,785.446463 730.796362,780.649143 C731.096195,775.752878 729.196254,771.454279 725.499315,767.757345",yOffset:0,xOffset:0});var E=function(e){(0,c.Z)(p,e);var t,r,n=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var i=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function p(e){var t;return(0,o.Z)(this,p),t=n.call(this,e),(0,f.Z)((0,a.Z)(t),"handleDismiss",(function(){t.props.onDismiss(t.props.id)})),(0,f.Z)((0,a.Z)(t),"setDismissTimeout",(function(){t.props.autoDismiss&&(t.dismissTimeout=setTimeout((function(){return t.handleDismiss()}),t.props.dismissDelay))})),(0,f.Z)((0,a.Z)(t),"clearDismissTimeout",(function(){t.dismissTimeout&&clearTimeout(t.dismissTimeout)})),t.handleDismiss=t.handleDismiss.bind((0,a.Z)(t)),t.setDismissTimeout(),t}return(0,s.Z)(p,[{key:"componentWillUnmount",value:function(){this.clearDismissTimeout()}},{key:"render",value:function(){var e=this.props,t=e.description,r=e.dismissable,n=(e.onDismiss,e.dismissDelay,e.title),o=e.sentryId,s=e.requestId,a=(e.autoDismiss,(0,g.Z)(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss"]));return d().createElement(h.b,(0,i.Z)({className:"notification-item",title:n&&n.replace(/<\/?[^>]+(>|$)/g,"")},a,{actionClose:r?d().createElement(w.g,{"aria-label":"close-notification",variant:"plain",onClick:this.handleDismiss},d().createElement(j,null)):null,onMouseEnter:this.clearDismissTimeout,onMouseLeave:this.setDismissTimeout}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,o&&d().createElement(O.D,null,d().createElement(b.x,{component:b.q.small},"Tracking Id: ",o)),s&&d().createElement(O.D,null,d().createElement(b.x,{component:b.q.small},"Request Id: ",s)))}}]),p}(p.Component);E.propTypes={autoDismiss:m().bool,dismissable:m().bool,onDismiss:m().func.isRequired,id:m().string.isRequired,variant:m().oneOf(["info","success","warning","danger"]).isRequired,title:m().node.isRequired,description:m().node,dismissDelay:m().number,requestId:m().string,sentryId:m().string},E.defaultProps={dismissDelay:8e3,autoDismiss:!0,dismissable:!0};const D=E;var P=r(32203),N=r(62394),C=r(47173),Z=r(71070),S=r(48140),I=r(86050),R=function(e){var t=e.page,r=e.onSetPage,n=e.onClearAll,i=e.count;return d().createElement(P.Z,{className:"notification-item"},d().createElement(N.e,null,d().createElement(S.a,null,d().createElement(I.Z,null,d().createElement(C.zx,{variant:C.Wu.link,className:"ins-c-pagination__clear-all",onClick:n},"Clear all")),d().createElement(I.Z,null,d().createElement(Z.t,{itemCount:i,variant:Z.a.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:t,onSetPage:r})))))};R.propTypes={count:m().number,page:m().number,onSetPage:m().func,onClearAll:m().func},R.defaultProps={count:0,page:1,onSetPage:Function,onClearAll:Function};const T=R;var _=function(e){(0,c.Z)(p,e);var t,r,n=(t=p,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,n=(0,l.Z)(t);if(r){var i=(0,l.Z)(this).constructor;e=Reflect.construct(n,arguments,i)}else e=n.apply(this,arguments);return(0,u.Z)(this,e)});function p(){var e;(0,o.Z)(this,p);for(var t=arguments.length,r=new Array(t),i=0;i<t;i++)r[i]=arguments[i];return e=n.call.apply(n,[this].concat(r)),(0,f.Z)((0,a.Z)(e),"state",{page:1}),(0,f.Z)((0,a.Z)(e),"onSetPage",(function(t,r){e.setState({page:r})})),e}return(0,s.Z)(p,[{key:"render",value:function(){var e=this.state.page,t=this.props,r=t.notifications,n=t.removeNotification,o=t.rootId,s=t.onClearAll,a=r&&r.length<=5?r:r&&r.slice(5*(e-1),5*e);return!r||Array.isArray(r)&&0===r.length?null:(0,y.createPortal)(d().createElement("div",{className:"notifications-portal"},r&&r.length>5&&d().createElement(T,{onSetPage:this.onSetPage,count:r.length,page:e,onClearAll:s}),a.map((function(e){return d().createElement(D,(0,i.Z)({onDismiss:n,key:e.id},e))}))),document.getElementById(o)||document.body)}}]),p}(p.Component);_.propTypes={notifications:m().arrayOf(m().shape({id:m().string.isRequired,title:m().string.isRequired,variant:m().string.isRequired,description:m().node,dismissable:m().bool})),removeNotification:m().func.isRequired,onClearAll:m().func,rootId:m().string};const x=_;var A=r(21458);const k=(0,n.$j)((function(e,t){var r=e.notifications;return{notifications:t.notifications||r}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,A.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,A.L1)())}}}))(x)},84885:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>d});var n=r(4942),i=r(27361),o=r.n(i),s=r(18721),a=r.n(s),c=r(21458);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e,t,r){if("string"==typeof e)return{title:"Error",description:e};var n=t;Array.isArray(t)&&(n=t.find((function(t){return a()(e,t)})));var i=r;return Array.isArray(r)&&(i=r.find((function(t){return a()(e,t)}))),{title:o()(e,n)||"Error",description:o()(e,i),sentryId:e&&e.sentryId,requestId:e&&e.requestId}},p=function(e){var t=e.isRejected,r=e.hasCustomNotification,n=e.noErrorOverride,i=e.dispatchDefaultFailure;return t&&!r&&!n&&i};const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t={dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1},r=l(l({},t),e),n=function(e){return e.match(new RegExp("^.*".concat(r.pendingSuffix,"$")))},i=function(e){return e.match(new RegExp("^.*".concat(r.fulfilledSuffix,"$")))},s=function(e){return e.match(new RegExp("^.*".concat(r.rejectedSuffix,"$")))},u={dismissable:!r.autoDismiss,dismissDelay:r.dismissDelay};return function(e){var t=e.dispatch;return function(e){return function(d){var y=d.meta,v=d.type;if(y&&y.notifications){var m=y.notifications;n(v)&&m.pending?t((0,c.wN)(l(l({},u),m.pending))):i(v)&&m.fulfilled?t((0,c.wN)(l(l({},u),m.fulfilled))):s(v)&&m.rejected&&t((0,c.wN)(l(l(l({},u),m.rejected),{},{sentryId:d.payload&&d.payload.sentryId,requestId:d.payload&&d.payload.requestId})))}if(p({isRejected:s(v),hasCustomNotification:y&&y.notifications&&y.notifications.rejected,noErrorOverride:y&&y.noError,dispatchDefaultFailure:r.dispatchDefaultFailure}))if(r.useStatusText)t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,"statusText"))));else{var g=Array.isArray(r.errorNamespaceKey)&&r.errorNamespaceKey.find((function(e){return a()(d.payload,e)}));g?o()(d.payload,g).map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):Array.isArray(d.payload)?d.payload.map((function(e){t((0,c.wN)(l({variant:"danger",dismissable:!0},f(e,r.errorTitleKey,r.errorDescriptionKey))))})):t((0,c.wN)(l({variant:"danger",dismissable:!0},f(d.payload,r.errorTitleKey,r.errorDescriptionKey))))}e(d)}}}}},55323:(e,t,r)=>{"use strict";r.d(t,{Pj:()=>v,k2:()=>m});var n=r(87462),i=r(4942),o=r(45987),s=r(43297),a=r.n(s),c=r(45697),u=r.n(c),l=r(67715);const f=JSON.parse('{"en":{"default.cancel":"Cancel","default.save":"Save","default.delete":"Delete","default.remove":"Remove"},"cs":{"default.cancel":"Zrušit","default.save":"Save","default.delete":"Smazat","default.remove":"Odstranit"}}');function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.locale,r=e.messages,i=(0,o.Z)(e,["locale","messages"]),s=t||localStorage.getItem(m)||navigator.language.split(/[-_]/)[0]||"en";return a().createElement(l.Z,(0,n.Z)({locale:s,messages:d(d({},f[s]),r&&r.hasOwnProperty(s)?r[s]:r)},i))};y.propTypes={locale:u().string,messages:u().object},y.defaultProps={locale:null};const v=y;(0,r(57787).vU)({cancel:{id:"default.cancel",description:"Default cancel string",defaultMessage:"Cancel"},save:{id:"default.save",description:"Default save string",defaultMessage:"Save"},delete:{id:"default.delete",description:"Default delete string",defaultMessage:"Delete"},remove:{id:"default.remove",description:"Default remove string",defaultMessage:"Remove"}});var m="rhcs-language"},20925:(e,t,r)=>{"use strict";r.d(t,{JH:()=>C});var n=r(4942),i=r(93433),o=r(29439),s=r(15671),a=r(43144);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var f="function"==typeof Symbol&&Symbol.observable||"@@observable",p=function(){return Math.random().toString(36).substring(7).split("").join(".")},d={INIT:"@@redux/INIT"+p(),REPLACE:"@@redux/REPLACE"+p(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+p()}};function y(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function v(e,t,r){var n;if("function"==typeof t&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(l(0));if("function"==typeof t&&void 0===r&&(r=t,t=void 0),void 0!==r){if("function"!=typeof r)throw new Error(l(1));return r(v)(e,t)}if("function"!=typeof e)throw new Error(l(2));var i=e,o=t,s=[],a=s,c=!1;function u(){a===s&&(a=s.slice())}function p(){if(c)throw new Error(l(3));return o}function m(e){if("function"!=typeof e)throw new Error(l(4));if(c)throw new Error(l(5));var t=!0;return u(),a.push(e),function(){if(t){if(c)throw new Error(l(6));t=!1,u();var r=a.indexOf(e);a.splice(r,1),s=null}}}function g(e){if(!y(e))throw new Error(l(7));if(void 0===e.type)throw new Error(l(8));if(c)throw new Error(l(9));try{c=!0,o=i(o,e)}finally{c=!1}for(var t=s=a,r=0;r<t.length;r++)(0,t[r])();return e}function h(e){if("function"!=typeof e)throw new Error(l(10));i=e,g({type:d.REPLACE})}function O(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(l(11));function r(){e.next&&e.next(p())}return r(),{unsubscribe:t(r)}}})[f]=function(){return this},e}return g({type:d.INIT}),(n={dispatch:g,subscribe:m,getState:p,replaceReducer:h})[f]=O,n}function m(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var i=t[n];"function"==typeof e[i]&&(r[i]=e[i])}var o,s=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:d.INIT}))throw new Error(l(12));if(void 0===r(void 0,{type:d.PROBE_UNKNOWN_ACTION()}))throw new Error(l(13))}))}(r)}catch(e){o=e}return function(e,t){if(void 0===e&&(e={}),o)throw o;for(var n=!1,i={},a=0;a<s.length;a++){var c=s[a],u=r[c],f=e[c],p=u(f,t);if(void 0===p)throw t&&t.type,new Error(l(14));i[c]=p,n=n||p!==f}return(n=n||s.length!==Object.keys(e).length)?i:e}}function g(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function h(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(l(15))},i={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=t.map((function(e){return e(i)}));return n=g.apply(void 0,o)(r.dispatch),u(u({},r),{},{dispatch:n})}}}function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var w=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;(0,s.Z)(this,e);var o=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||n;this.store=v((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,o(h.apply(void 0,(0,i.Z)(r)))),this.reducers={}}return(0,a.Z)(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=b(b({},this.reducers),e),this.store.replaceReducer(m(b({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var r=(0,o.Z)(t,2),i=r[0],s=r[1];return b(b({},e),{},(0,n.Z)({},i,s))}),{}),t.store.replaceReducer(m(b({},t.reducers)))}}}]),e}();new w;const j=w;function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var P;function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return P||(P=new j(e,(0,i.Z)(t),r)),P.register({routerData:function(e,t){var r=t.type,n=t.payload;return D(D({},e),"@@INSIGHTS-CORE/NAVIGATION"===r?n:{})}}),P}function C(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2?arguments[2]:void 0;return N(e,t,r)}},78565:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,r){return null!=e&&t.call(e,r)}},5076:(e,t,r)=>{var n=r(89881);e.exports=function(e,t){var r;return n(e,(function(e,n,i){return!(r=t(e,n,i))})),!!r}},18721:(e,t,r)=>{var n=r(78565),i=r(222);e.exports=function(e,t){return null!=e&&i(e,t,n)}},59704:(e,t,r)=>{var n=r(82908),i=r(67206),o=r(5076),s=r(1469),a=r(16612);e.exports=function(e,t,r){var c=s(e)?n:o;return r&&a(e,t,r)&&(t=void 0),c(e,i(t,3))}}}]);