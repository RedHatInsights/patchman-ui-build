(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[2446],{51344:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>v});var r=n(28216),o=n(43297),i=n.n(o),a=n(21704),c=n(75448),l=n(40111),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)};const s=function(e){var t=e.description,n=e.dismissable,r=void 0===n||n,a=e.onDismiss,s=e.dismissDelay,f=void 0===s?8e3:s,p=e.title,d=e.sentryId,v=e.requestId,y=e.autoDismiss,h=void 0===y||y,m=e.id,g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss","id"]),b=(0,o.useRef)(),O=function(){a(m)},w=function(){h&&(b.current=setTimeout((function(){return O()}),f))},j=function(){b.current&&clearTimeout(b.current)};return(0,o.useEffect)((function(){return w(),function(){j()}}),[]),i().createElement(c.Alert,u({className:"notification-item",id:"".concat(m),title:"string"==typeof p?p.replace(/<\/?[^>]+(>|$)/g,""):p},g,{actionClose:r?i().createElement(c.AlertActionCloseButton,{"aria-label":"close-notification",variant:"plain",onClick:O},i().createElement(l.CloseIcon,null)):null,onMouseEnter:j,onMouseLeave:w}),"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t,d&&i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.small},"Tracking Id: ",d)),v&&i().createElement(c.TextContent,null,i().createElement(c.Text,{component:c.TextVariants.small},"Request Id: ",v)))},f=function(e){var t=e.page,n=void 0===t?1:t,r=e.onSetPage,o=e.onClearAll,a=e.count,l=void 0===a?0:a;return i().createElement(c.Card,{className:"notification-item"},i().createElement(c.CardBody,null,i().createElement(c.Level,null,i().createElement(c.LevelItem,null,i().createElement(c.Button,{variant:c.ButtonVariant.link,className:"ins-c-pagination__clear-all",onClick:o},"Clear all")),i().createElement(c.LevelItem,null,i().createElement(c.Pagination,{itemCount:l,variant:c.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:n,onSetPage:r})))))};var p=function(){return p=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},p.apply(this,arguments)};var d=n(21458);const v=(0,r.$j)((function(e,t){var n=e.notifications;return{notifications:t.notifications||n}}),(function(e,t){return{removeNotification:t.removeNotification?t.removeNotification:function(t){return e((0,d.FV)(t))},onClearAll:t.clearNotifications?t.clearNotifications:function(){return e((0,d.L1)())}}}))((function(e){var t=e.notifications,n=void 0===t?[]:t,r=e.removeNotification,c=void 0===r?function(){}:r,l=e.rootId,u=e.onClearAll,d=(0,o.useState)({page:1}),v=d[0],y=d[1],h=v.page,m=n&&n.length<=5?n:n&&n.slice(5*(h-1),5*h);return 0===n.length?null:(0,a.createPortal)(i().createElement("div",{className:"notifications-portal"},n.length>5&&i().createElement(f,{onSetPage:function(e,t){y((function(e){return p(p({},e),{page:t})}))},count:n.length,page:h,onClearAll:u}),m.map((function(e){return i().createElement(s,p({onDismiss:c,key:"".concat(e.id)},e))}))),l&&document.getElementById(l)||document.body)}))},84885:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>f});var r=n(27361),o=n.n(r),i=n(18721),a=n.n(i),c=n(21458),l=n(75448),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},u.apply(this,arguments)},s=function(e,t,n){if("string"==typeof e)return{title:"Error",description:e};var r=t;Array.isArray(t)&&(r=t.find((function(t){return a()(e,t)})));var i=n;return Array.isArray(n)&&(i=n.find((function(t){return a()(e,t)}))),{title:o()(e,r)||"Error",description:o()(e,i),sentryId:null==e?void 0:e.sentryId,requestId:null==e?void 0:e.requestId}};const f=function(e){var t=u(u({},{dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1}),e),n=function(e){return Boolean(e.match(new RegExp("^.*".concat(t.rejectedSuffix,"$"))))},r={dismissable:!t.autoDismiss,dismissDelay:t.dismissDelay};return function(e){var i=e.dispatch;return function(e){return function(f){var p=f.meta,d=f.type;if(p&&p.notifications){var v=p.notifications;(function(e){return Boolean(e.match(new RegExp("^.*".concat(t.pendingSuffix,"$"))))})(d)&&v.pending?("function"==typeof v.pending&&(v.pending=v.pending(f.payload)),i((0,c.wN)(u(u({},r),v.pending)))):function(e){return Boolean(e.match(new RegExp("^.*".concat(t.fulfilledSuffix,"$"))))}(d)&&v.fulfilled?("function"==typeof v.fulfilled&&(v.fulfilled=v.fulfilled(f.payload)),i((0,c.wN)(u(u({},r),v.fulfilled)))):n(d)&&v.rejected&&("function"==typeof v.rejected&&(v.rejected=v.rejected(f.payload)),i((0,c.wN)(u(u(u({},r),v.rejected),{sentryId:f.payload&&f.payload.sentryId,requestId:f.payload&&f.payload.requestId}))))}if(function(e){return e.isRejected&&!e.hasCustomNotification&&!e.noErrorOverride&&e.dispatchDefaultFailure}({isRejected:n(d),hasCustomNotification:p&&p.notifications&&p.notifications.rejected,noErrorOverride:p&&p.noError,dispatchDefaultFailure:t.dispatchDefaultFailure}))if(t.useStatusText)i((0,c.wN)(u({variant:l.AlertVariant.danger,dismissable:!0},s(f.payload,t.errorTitleKey,"statusText"))));else{var y=Array.isArray(t.errorNamespaceKey)&&t.errorNamespaceKey.find((function(e){return a()(f.payload,e)}));y?o()(f.payload,y).map((function(e){i((0,c.wN)(u({variant:l.AlertVariant.danger,dismissable:!0},s(e,t.errorTitleKey,t.errorDescriptionKey))))})):Array.isArray(f.payload)?f.payload.map((function(e){i((0,c.wN)(u({variant:l.AlertVariant.danger,dismissable:!0},s(e,t.errorTitleKey,t.errorDescriptionKey))))})):i((0,c.wN)(u({variant:l.AlertVariant.danger,dismissable:!0},s(f.payload,t.errorTitleKey,t.errorDescriptionKey))))}e(f)}}}}},55323:(e,t,n)=>{"use strict";n.d(t,{Pj:()=>h,k2:()=>m});var r=n(87462),o=n(4942),i=n(45987),a=n(43297),c=n.n(a),l=n(45697),u=n.n(l),s=n(67715);const f=JSON.parse('{"en":{"default.cancel":"Cancel","default.save":"Save","default.delete":"Delete","default.remove":"Remove"},"cs":{"default.cancel":"Zrušit","default.save":"Save","default.delete":"Smazat","default.remove":"Odstranit"}}');var p=["locale","messages"];function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var y=function(e){var t=e.locale,n=e.messages,o=(0,i.Z)(e,p),a=t||localStorage.getItem(m)||navigator.language.split(/[-_]/)[0]||"en";return c().createElement(s.Z,(0,r.Z)({locale:a,messages:v(v({},f[a]),n&&n.hasOwnProperty(a)?n[a]:n)},o))};y.propTypes={locale:u().string,messages:u().object},y.defaultProps={locale:null};const h=y;(0,n(57787).vU)({cancel:{id:"default.cancel",description:"Default cancel string",defaultMessage:"Cancel"},save:{id:"default.save",description:"Default save string",defaultMessage:"Save"},delete:{id:"default.delete",description:"Default delete string",defaultMessage:"Delete"},remove:{id:"default.remove",description:"Default remove string",defaultMessage:"Remove"}});var m="rhcs-language"},34663:(e,t,n)=>{"use strict";n.d(t,{Cs:()=>a,RM:()=>u,_s:()=>o,lo:()=>l,wP:()=>c});var r=n(43297);function o(e,t){var n,r,o,i,a,c,l,u,s;return void 0===e&&(e=""),void 0===t&&(t=!1),c=this,l=void 0,s=function(){var c,l,u;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(s){switch(s.label){case 0:return c=window.insights,[4,null===(r=null===(n=null==c?void 0:c.chrome)||void 0===n?void 0:n.auth)||void 0===r?void 0:r.getUser()];case 1:return l=s.sent(),u={isOrgAdmin:(null===(i=null===(o=null==l?void 0:l.identity)||void 0===o?void 0:o.user)||void 0===i?void 0:i.is_org_admin)||!1},[4,null===(a=null==c?void 0:c.chrome)||void 0===a?void 0:a.getUserPermissions(e,t)];case 2:return[2,(u.permissions=s.sent()||null,u)]}}))},new((u=void 0)||(u=Promise))((function(e,t){function n(e){try{o(s.next(e))}catch(e){t(e)}}function r(e){try{o(s.throw(e))}catch(e){t(e)}}function o(t){var o;t.done?e(t.value):(o=t.value,o instanceof u?o:new u((function(e){e(o)}))).then(n,r)}o((s=s.apply(c,l||[])).next())}))}function i(e){return"object"==typeof e}function a(e,t){return!!e&&e.some((function(e){return t.includes(i(e)?null==e?void 0:e.permission:e)}))}function c(e,t){return!!e&&t.every((function(t){return e.some((function(e){var n,r=(null===(n=i(e)?null==e?void 0:e.permission:e)||void 0===n?void 0:n.split(":"))||[],o=t.split(":");return r.slice(0).reduce((function(e,t,n,r){return!1===e?(r.splice(n),e):"*"===t||t===(null==o?void 0:o[n])}),!0)||r.join(":")===t}))}))}var l={isLoading:!0,isOrgAdmin:!1,permissions:[]},u=(0,r.createContext)(l)},95249:(e,t,n)=>{"use strict";n.d(t,{c$:()=>a});var r=n(43297),o=n(34663),i=function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=function(e,t){var n=(0,r.useContext)(o.RM),a=n.hasAccess,c=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(n,["hasAccess"]);return i(i({},c),{hasAccess:(null==a?void 0:a(e,t))||!1})}},371:(e,t,n)=>{"use strict";n.d(t,{r:()=>l});var r=n(85893),o=n(43297),i=n(75448),a=n(34663),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)},l=function(e){var t,n=e.appName,l=e.children,u=(0,o.useState)(a.lo),s=u[0],f=u[1];return(0,o.useEffect)((function(){var e,t,r,o;n&&(e=void 0,t=void 0,o=function(){var e,t,r;return function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}}(this,(function(o){switch(o.label){case 0:return[4,(0,a._s)(n,!0)];case 1:return e=o.sent(),t=e.isOrgAdmin,r=e.permissions,f((function(e){return c(c({},e),{isLoading:!1,isOrgAdmin:t,permissions:r})})),[2]}}))},new((r=void 0)||(r=Promise))((function(n,i){function a(e){try{l(o.next(e))}catch(e){i(e)}}function c(e){try{l(o.throw(e))}catch(e){i(e)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,c)}l((o=o.apply(e,t||[])).next())})))}),[n]),(0,r.jsx)(a.RM.Provider,c({value:c(c({},s),{hasAccess:(t=(null==s?void 0:s.permissions)||[],function(e,n){return n?(0,a.wP)(t,e):(0,a.Cs)(t,e)})})},{children:s.isLoading?(0,r.jsx)(i.Bullseye,{children:(0,r.jsx)(i.Spinner,{size:"xl"})}):l}))}},78565:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,n){return null!=e&&t.call(e,n)}},5076:(e,t,n)=>{var r=n(89881);e.exports=function(e,t){var n;return r(e,(function(e,r,o){return!(n=t(e,r,o))})),!!n}},18721:(e,t,n)=>{var r=n(78565),o=n(222);e.exports=function(e,t){return null!=e&&o(e,t,r)}},59704:(e,t,n)=>{var r=n(82908),o=n(67206),i=n(5076),a=n(1469),c=n(16612);e.exports=function(e,t,n){var l=a(e)?r:i;return n&&c(e,t,n)&&(t=void 0),l(e,o(t,3))}},97779:(e,t,n)=>{"use strict";n.d(t,{md:()=>v,UY:()=>p,jB:()=>f});var r=n(4942);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var c="function"==typeof Symbol&&Symbol.observable||"@@observable",l=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+l(),REPLACE:"@@redux/REPLACE"+l(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+l()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var f=function e(t,n,r){var o;if("function"==typeof n&&"function"==typeof r||"function"==typeof r&&"function"==typeof arguments[3])throw new Error(a(0));if("function"==typeof n&&void 0===r&&(r=n,n=void 0),void 0!==r){if("function"!=typeof r)throw new Error(a(1));return r(e)(t,n)}if("function"!=typeof t)throw new Error(a(2));var i=t,l=n,f=[],p=f,d=!1;function v(){p===f&&(p=f.slice())}function y(){if(d)throw new Error(a(3));return l}function h(e){if("function"!=typeof e)throw new Error(a(4));if(d)throw new Error(a(5));var t=!0;return v(),p.push(e),function(){if(t){if(d)throw new Error(a(6));t=!1,v();var n=p.indexOf(e);p.splice(n,1),f=null}}}function m(e){if(!s(e))throw new Error(a(7));if(void 0===e.type)throw new Error(a(8));if(d)throw new Error(a(9));try{d=!0,l=i(l,e)}finally{d=!1}for(var t=f=p,n=0;n<t.length;n++)(0,t[n])();return e}function g(e){if("function"!=typeof e)throw new Error(a(10));i=e,m({type:u.REPLACE})}function b(){var e,t=h;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(a(11));function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[c]=function(){return this},e}return m({type:u.INIT}),(o={dispatch:m,subscribe:h,getState:y,replaceReducer:g})[c]=b,o};function p(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var i,c=Object.keys(n);try{!function(e){Object.keys(e).forEach((function(t){var n=e[t];if(void 0===n(void 0,{type:u.INIT}))throw new Error(a(12));if(void 0===n(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error(a(13))}))}(n)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var r=!1,o={},l=0;l<c.length;l++){var u=c[l],s=n[u],f=e[u],p=s(f,t);if(void 0===p)throw t&&t.type,new Error(a(14));o[u]=p,r=r||p!==f}return(r=r||c.length!==Object.keys(e).length)?o:e}}function d(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error(a(15))},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},c=t.map((function(e){return e(o)}));return r=d.apply(void 0,c)(n.dispatch),i(i({},n),{},{dispatch:r})}}}}}]);
//# sourceMappingURL=../sourcemaps/2446.de7dae1591f18e5b7f7594271408c0f0.js.map