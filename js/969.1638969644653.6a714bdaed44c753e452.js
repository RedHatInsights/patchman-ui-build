"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[969],{81969:(e,n,t)=>{t.r(n),t.d(n,{ScalprumComponent:()=>x,ScalprumContext:()=>S,ScalprumProvider:()=>P,default:()=>P,useLoadModule:()=>I,useModule:()=>A,useScalprum:()=>R});var r=t(43297),o=t.n(r),i=function(){return i=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},i.apply(this,arguments)},c=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}u((r=r.apply(e,n||[])).next())}))},a=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},u=function(e,n,t){void 0===t&&(t=!1);var r=window.__scalprum__.factories[e];if(r)if(t||((new Date).getTime()-r.expiration.getTime())/1e3>window.__scalprum__.scalprumOptions.cacheTimeout)delete window.__scalprum__.factories[e];else{var o=r.modules[n];if(n)return o}},s=function(e,n){window.__scalprum__.pendingInjections[e]=n},l=function(e){var n=e.appsConfig,t=e.api,r=e.options,o=i({cacheTimeout:120},r);window.__scalprum__=i({appsConfig:n,pendingInjections:{},factories:{},scalprumOptions:o},t)},f=function(e){return window.__scalprum__.appsConfig[e]},p=function(e,n,t){void 0===t&&(t=!1);var r=void 0,o=new Promise((function(o,i){(r=document.createElement("script")).src=n,r.id=e,t?r.onload=function(){o([e,r])}:s(e,(function(){return o([e,r])})),r.onerror=function(){for(var n=[],o=0;o<arguments.length;o++)n[o]=arguments[o];console.log(n),t?i([n,r]):s(e,(function(){return i([n,r])}))}}));return void 0!==r&&document.body.appendChild(r),o};function h(e,n,t,r){return c(this,void 0,void 0,(function(){var o,i;return a(this,(function(c){switch(c.label){case 0:return(o=new Headers).append("Pragma","no-cache"),o.append("Cache-Control","no-cache"),o.append("expires","0"),[4,fetch(e,{method:"GET",headers:o})];case 1:return[4,c.sent().json()];case 2:return i=c.sent(),[2,Promise.all(Object.entries(i).filter((function(e){var n=e[0];return!t||n===t})).flatMap(r||function(e){return e[1].entry||e}).map((function(e){return p(n,e,!0)})))]}}))}))}function d(e,n){return c(this,void 0,void 0,(function(){var r,o,c,u;return a(this,(function(a){switch(a.label){case 0:if(void 0===e||0===e.length)throw new Error("Scope can't be undefined or empty");if(void 0===n||0===n.length)throw new Error("Module can't be undefined or empty");return n.startsWith("./")||console.warn("Your module "+n+" doesn't start with './' this indicates an error"),[4,t.I("default")];case 1:return a.sent(),[4,(r=window[e]).init(t.S.default)];case 2:return a.sent(),[4,window[e].get(n)];case 3:return o=a.sent(),window.__scalprum__.factories[e]||(window.__scalprum__.factories[e]={}),c={init:r.init,modules:i(i({},window.__scalprum__.factories[e].modules),(u={},u[n]=o(),u)),expiration:new Date},window.__scalprum__.factories[e]=c,[2,o()]}}))}))}var v=t(18446),y=t.n(v),m=function(){return o().createElement("span",null,"Error while loading component!")};function w(e,n,t){var r=this;return void 0===t&&(t=m),function(){return o=r,i=void 0,a=function(){var r,o;return function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,d(e,n)];case 1:return r=i.sent(),[3,3];case 2:return o=i.sent(),console.error(o),r={default:t},[3,3];case 3:return[2,r]}}))},new((c=void 0)||(c=Promise))((function(e,n){function t(e){try{u(a.next(e))}catch(e){n(e)}}function r(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var o;n.done?e(n.value):(o=n.value,o instanceof c?o:new c((function(e){e(o)}))).then(t,r)}u((a=a.apply(o,i||[])).next())}));var o,i,c,a}}var b,_=(b=function(e,n){return b=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,n){e.__proto__=n}||function(e,n){for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])},b(e,n)},function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function t(){this.constructor=e}b(e,n),e.prototype=null===n?Object.create(n):(t.prototype=n.prototype,new t)}),g=function(){return g=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},g.apply(this,arguments)},E=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)n.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(t[r[o]]=e[r[o]])}return t},k=function(){return o().createElement("span",null,"Error while loading component!")},C=function(e){var n=e.fallback,t=void 0===n?"loading":n,i=e.appName,c=e.scope,a=e.module,s=e.ErrorComponent,l=e.processor,d=e.innerRef,v=e.skipCache,y=void 0!==v&&v,m=E(e,["fallback","appName","scope","module","ErrorComponent","processor","innerRef","skipCache"]),b=f(i),_=b.scriptLocation,k=b.manifestLocation,C=(0,r.useState)(void 0),O=C[0],x=C[1],S=u(c,a,y),j=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(S)try{j.current&&x((function(){return S.default}))}catch(e){j.current&&x((function(){return s}))}else _?p(i,_).then((function(){j.current&&x((function(){return o().lazy(w(c,a,s))}))})).catch((function(){j.current&&x((function(){return s}))})):k&&h(k,i,c,l).then((function(){j.current&&x((function(){return o().lazy(w(c,a,s))}))})).catch((function(){j.current&&x((function(){return s}))}));return function(){j.current=!1}}),[i,c,S,y]),o().createElement(r.Suspense,{fallback:t},O?o().createElement(O,g({ref:d},m)):t)},O=function(e){function n(n){var t=e.call(this,n)||this;return t.state={hasError:!1},t.selfRepairAttempt=!1,t}return _(n,e),n.getDerivedStateFromError=function(){return{hasError:!0}},n.prototype.shouldComponentUpdate=function(e,n){return this.state.hasError!==n.hasError||!y()(e,this.props)||!y()(n,this.state)},n.prototype.componentDidCatch=function(e,n){!0===this.selfRepairAttempt?(console.error("Scalprum encountered an error!",e.message),this.setState({error:e,errorInfo:n})):(console.warn("Scalprum failed to render component. Attempting to skip module cache."),this.setState({repairAttempt:!0}))},n.prototype.render=function(){var e=this.props,n=e.ErrorComponent,t=void 0===n?o().createElement(k,null):n,i=E(e,["ErrorComponent"]);return this.state.repairAttempt&&!this.selfRepairAttempt?(this.selfRepairAttempt=!0,o().createElement(C,g({},i,{skipCache:!0,ErrorComponent:function(){return o().createElement(r.Fragment,null,t)}}))):this.state.hasError&&this.selfRepairAttempt?o().cloneElement(t,g({},this.state)):o().createElement(C,g({},i,{ErrorComponent:function(){return o().createElement(r.Fragment,null,t)}}))},n.defaultProps={ErrorComponent:o().createElement(k,null)},n}(o().Component),x=o().forwardRef((function(e,n){return o().createElement(O,g({},e,{innerRef:n}))})),S=(0,r.createContext)({initialized:!1,config:{},api:void 0}),j=function(){return j=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},j.apply(this,arguments)};function P(e){var n=e.config,t=e.children,i=e.api,c=(0,r.useRef)(!1),a=(0,r.useState)({initialized:!1,config:{},api:i}),u=a[0],s=a[1];return(0,r.useEffect)((function(){"object"==typeof n&&(l({appsConfig:n,api:i}),s((function(e){return j(j({},e),{initialized:!0,config:n})})),c.current=!0),"function"==typeof n&&Promise.resolve(n()).then((function(e){s((function(n){return j(j({},n),{initialized:!0,config:e})})),l({appsConfig:e,api:i}),c.current=!0}))}),[n]),(0,r.useEffect)((function(){c.current&&s((function(e){return j(j({},e),{api:i})}))}),[i]),o().createElement(S.Provider,{value:u},t)}function R(e){var n=(0,r.useContext)(S);return"function"==typeof e?e(n):n}var T=function(){return T=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},T.apply(this,arguments)};function A(e,n,t,o){var i=this;void 0===o&&(o={});var c=T({skipCache:!1},o),a=(0,r.useState)(t),s=a[0],l=a[1],f=(0,r.useCallback)((function(){return t=i,r=void 0,a=function(){var t,r;return function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}}(this,(function(o){switch(o.label){case 0:if(t=u(e,n,c.skipCache))return[3,5];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,d(e,n)];case 2:return r=o.sent(),[3,4];case 3:return o.sent(),console.error('Module not initialized! Module "'+n+'" was not found in "'+e+'" webpack scope. Make sure the remote container is loaded?'),[3,4];case 4:return[3,6];case 5:r=t,o.label=6;case 6:return l((function(){return r})),[2]}}))},new((o=void 0)||(o=Promise))((function(e,n){function i(e){try{u(a.next(e))}catch(e){n(e)}}function c(e){try{u(a.throw(e))}catch(e){n(e)}}function u(n){var t;n.done?e(n.value):(t=n.value,t instanceof o?t:new o((function(e){e(t)}))).then(i,c)}u((a=a.apply(t,r||[])).next())}));var t,r,o,a}),[e,n]);return(0,r.useEffect)((function(){f()}),[e,n]),s}var z=function(){return z=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var o in n=arguments[t])Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);return e},z.apply(this,arguments)},M=function(e,n,t,r){return new(t||(t=Promise))((function(o,i){function c(e){try{u(r.next(e))}catch(e){i(e)}}function a(e){try{u(r.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?o(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(c,a)}u((r=r.apply(e,n||[])).next())}))},G=function(e,n){var t,r,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;c;)try{if(t=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return c.label++,{value:i[1],done:!1};case 5:c.label++,r=i[1],i=[0];continue;case 7:i=c.ops.pop(),c.trys.pop();continue;default:if(!((o=(o=c.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){c=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){c.label=i[1];break}if(6===i[0]&&c.label<o[1]){c.label=o[1],o=i;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(i);break}o[2]&&c.ops.pop(),c.trys.pop();continue}i=n.call(e,c)}catch(e){i=[6,e],r=0}finally{t=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};function I(e,n,t){var o=this,i=e.appName,c=e.scope,a=e.module,s=e.processor;void 0===t&&(t={});var l=z({skipCache:!1},t),v=f(i||c),y=v.scriptLocation,m=v.manifestLocation,w=(0,r.useState)(n),b=w[0],_=w[1],g=(0,r.useState)(),E=g[0],k=g[1],C=u(c,a,l.skipCache),O=(0,r.useRef)(!0);return(0,r.useEffect)((function(){if(O.current)if(C)try{d(c,a).then((function(e){_((function(){return e}))}))}catch(e){k((function(){return e}))}else y?p(i||c,y).then((function(){return M(o,void 0,void 0,(function(){var e;return G(this,(function(n){switch(n.label){case 0:return[4,d(c,a)];case 1:return e=n.sent(),_((function(){return e})),[2]}}))}))})).catch((function(e){k((function(){return e}))})):m&&h(m,i||c,c,s).then((function(){return M(o,void 0,void 0,(function(){var e;return G(this,(function(n){switch(n.label){case 0:return[4,d(c,a)];case 1:return e=n.sent(),_((function(){return e})),[2]}}))}))})).catch((function(e){k((function(){return e}))}));return function(){O.current=!1}}),[i,c,C,l.skipCache]),[b,E]}}}]);
//# sourceMappingURL=../sourcemaps/969.5cd6e90a37382d5a09ba27cc7a2fd012.js.map