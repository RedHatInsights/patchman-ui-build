/*! For license information please see 456.f9a4ba1c3f1fe339da3a.js.LICENSE.txt */
!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[n]="e83d80bd-e296-46ee-a6a4-f95d630b02bc",t._sentryDebugIdIdentifier="sentry-dbid-e83d80bd-e296-46ee-a6a4-f95d630b02bc")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5cb67ae"},(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[456],{10456:(t,n,e)=>{"use strict";e.r(n),e.d(n,{BrowserRouter:()=>bt,HashRouter:()=>xt,Link:()=>Rt,MemoryRouter:()=>J,NavLink:()=>St,Prompt:()=>G,Redirect:()=>nt,Route:()=>at,Router:()=>q,StaticRouter:()=>pt,Switch:()=>ht,generatePath:()=>tt,matchPath:()=>it,useHistory:()=>mt,useLocation:()=>yt,useParams:()=>gt,useRouteMatch:()=>wt,withRouter:()=>dt});var r=e(89611);function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,(0,r.Z)(t,n)}var i=e(43297),a=e.n(i),c=e(45697),u=e.n(c),s=e(87462);function l(t){return"/"===t.charAt(0)}function f(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}const p=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&l(t),a=n&&l(n),c=i||a;if(t&&l(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var u=o[o.length-1];e="."===u||".."===u||""===u}else e=!1;for(var s=0,p=o.length;p>=0;p--){var h=o[p];"."===h?f(o,p):".."===h?(f(o,p),s++):s&&(f(o,p),s--)}if(!c)for(;s--;s)o.unshift("..");!c||""===o[0]||o[0]&&l(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d};function h(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}const d=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,r){return t(n,e[r])}));if("object"==typeof n||"object"==typeof e){var r=h(n),o=h(e);return r!==n||o!==e?t(r,o):Object.keys(Object.assign({},n,e)).every((function(r){return t(n[r],e[r])}))}return!1};var v=!0,m="Invariant failed";function y(t,n){if(!t){if(v)throw new Error(m);var e="function"==typeof n?n():n,r=e?"".concat(m,": ").concat(e):m;throw new Error(r)}}function g(t){return"/"===t.charAt(0)?t:"/"+t}function w(t){return"/"===t.charAt(0)?t.substr(1):t}function b(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function x(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function E(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function C(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t),o.state=n):(void 0===(o=(0,s.Z)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=p(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function P(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var k=!("undefined"==typeof window||!window.document||!window.document.createElement);function A(t,n){n(window.confirm(t))}var R="popstate",_="hashchange";function O(){try{return window.history.state||{}}catch(t){return{}}}var S="hashchange",T={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+w(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:w,decodePath:g},slash:{encodePath:g,decodePath:g}};function L(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function U(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function M(t){window.location.replace(L(window.location.href)+"#"+t)}function Z(t,n,e){return Math.min(Math.max(t,n),e)}var j=e(39658),I=e.n(j),B=(e(50663),e(63366)),H=e(8679),N=e.n(H),D=1073741823,$="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{},W=a().createContext||function(t,n){var e,r,i,c="__create-react-context-"+(($[i="__global_unique_id__"]=($[i]||0)+1)+"__"),s=function(t){function e(){for(var n,e,r,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=t.call.apply(t,[this].concat(i))||this).emitter=(e=n.props.value,r=[],{on:function(t){r.push(t)},off:function(t){r=r.filter((function(n){return n!==t}))},get:function(){return e},set:function(t,n){e=t,r.forEach((function(t){return t(e,n)}))}}),n}o(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[c]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):D,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(a().Component);s.childContextTypes=((e={})[c]=u().object.isRequired,e);var l=function(n){function e(){for(var t,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(t=n.call.apply(n,[this].concat(r))||this).observedBits=void 0,t.state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}o(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?D:n},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?D:t},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(a().Component);return l.contextTypes=((r={})[c]=u().object,r),{Provider:s,Consumer:l}},F=function(t){var n=W();return n.displayName=t,n},K=F("Router-History"),V=F("Router"),q=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._pendingLocation=t}))),e}o(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){var t=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(n){t._isMounted&&t.setState({location:n})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return a().createElement(V.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a().createElement(K.Provider,{children:this.props.children||null,value:this.props.history}))},n}(a().Component),J=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=function(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,r=n.initialEntries,o=void 0===r?["/"]:r,i=n.initialIndex,a=void 0===i?0:i,c=n.keyLength,u=void 0===c?6:c,l=P();function f(t){(0,s.Z)(y,t),y.length=y.entries.length,l.notifyListeners(y.location,y.action)}function p(){return Math.random().toString(36).substr(2,u)}var h=Z(a,0,o.length-1),d=o.map((function(t){return C(t,void 0,"string"==typeof t?p():t.key||p())})),v=E;function m(t){var n=Z(y.index+t,0,y.entries.length-1),r=y.entries[n];l.confirmTransitionTo(r,"POP",e,(function(t){t?f({action:"POP",location:r,index:n}):f()}))}var y={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(t,n){var r="PUSH",o=C(t,n,p(),y.location);l.confirmTransitionTo(o,r,e,(function(t){if(t){var n=y.index+1,e=y.entries.slice(0);e.length>n?e.splice(n,e.length-n,o):e.push(o),f({action:r,location:o,index:n,entries:e})}}))},replace:function(t,n){var r="REPLACE",o=C(t,n,p(),y.location);l.confirmTransitionTo(o,r,e,(function(t){t&&(y.entries[y.index]=o,f({action:r,location:o}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(t){var n=y.index+t;return n>=0&&n<y.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return y}(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(q,{history:this.history,children:this.props.children})},n}(a().Component),z=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(a().Component);function G(t){var n=t.message,e=t.when,r=void 0===e||e;return a().createElement(V.Consumer,null,(function(t){if(t||y(!1),!r||t.staticContext)return null;var e=t.history.block;return a().createElement(z,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var Y={},Q=1e4,X=0;function tt(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(Y[t])return Y[t];var n=I().compile(t);return X<Q&&(Y[t]=n,X++),n}(t)(n,{pretty:!0})}function nt(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return a().createElement(V.Consumer,null,(function(t){t||y(!1);var r=t.history,i=t.staticContext,c=o?r.push:r.replace,u=C(n?"string"==typeof e?tt(e,n.params):(0,s.Z)({},e,{pathname:tt(e.pathname,n.params)}):e);return i?(c(u),null):a().createElement(z,{onMount:function(){c(u)},onUpdate:function(t,n){var e,r,o=C(n.to);e=o,r=(0,s.Z)({},u,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&d(e.state,r.state)||c(u)},to:e})}))}var et={},rt=1e4,ot=0;function it(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=et[e]||(et[e]={});if(r[t])return r[t];var o=[],i={regexp:I()(t,o,n),keys:o};return ot<rt&&(r[t]=i,ot++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],f=u.slice(1),p=t===l;return i&&!p?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:p,params:a.reduce((function(t,n,e){return t[n.name]=f[e],t}),{})}}),null)}var at=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(V.Consumer,null,(function(n){n||y(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?it(e.pathname,t.props):n.match,o=(0,s.Z)({},n,{location:e,match:r}),i=t.props,c=i.children,u=i.component,l=i.render;return Array.isArray(c)&&function(t){return 0===a().Children.count(t)}(c)&&(c=null),a().createElement(V.Provider,{value:o},o.match?c?"function"==typeof c?c(o):c:u?a().createElement(u,o):l?l(o):null:"function"==typeof c?c(o):null)}))},n}(a().Component);function ct(t){return"/"===t.charAt(0)?t:"/"+t}function ut(t,n){if(!t)return n;var e=ct(t);return 0!==n.pathname.indexOf(e)?n:(0,s.Z)({},n,{pathname:n.pathname.substr(e.length)})}function st(t){return"string"==typeof t?t:E(t)}function lt(t){return function(){y(!1)}}function ft(){}var pt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return ft},n.handleBlock=function(){return ft},n}o(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=n,a.location=function(t,n){return t?(0,s.Z)({},n,{pathname:ct(t)+n.pathname}):n}(o,C(t)),a.url=st(a.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,i=t.location,c=void 0===i?"/":i,u=(0,B.Z)(t,["basename","context","location"]),l={createHref:function(t){return ct(e+st(t))},action:"POP",location:ut(e,C(c)),push:this.handlePush,replace:this.handleReplace,go:lt(),goBack:lt(),goForward:lt(),listen:this.handleListen,block:this.handleBlock};return a().createElement(q,(0,s.Z)({},u,{history:l,staticContext:o}))},n}(a().Component),ht=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(V.Consumer,null,(function(n){n||y(!1);var e,r,o=t.props.location||n.location;return a().Children.forEach(t.props.children,(function(t){if(null==r&&a().isValidElement(t)){e=t;var i=t.props.path||t.props.from;r=i?it(o.pathname,(0,s.Z)({},t.props,{path:i})):n.match}})),r?a().cloneElement(e,{location:o,computedMatch:r}):null}))},n}(a().Component);function dt(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,B.Z)(n,["wrappedComponentRef"]);return a().createElement(V.Consumer,null,(function(n){return n||y(!1),a().createElement(t,(0,s.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,N()(e,t)}var vt=a().useContext;function mt(){return vt(K)}function yt(){return vt(V).location}function gt(){var t=vt(V).match;return t?t.params:{}}function wt(t){var n=yt(),e=vt(V).match;return t?it(n.pathname,t):e}var bt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=function(t){void 0===t&&(t={}),k||y(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,c=void 0!==a&&a,u=i.getUserConfirmation,l=void 0===u?A:u,f=i.keyLength,p=void 0===f?6:f,h=t.basename?x(g(t.basename)):"";function d(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return h&&(i=b(i,h)),C(i,r,e)}function v(){return Math.random().toString(36).substr(2,p)}var m=P();function w(t){(0,s.Z)(D,t),D.length=e.length,m.notifyListeners(D.location,D.action)}function S(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||U(d(t.state))}function T(){U(d(O()))}var L=!1;function U(t){L?(L=!1,w()):m.confirmTransitionTo(t,"POP",l,(function(n){n?w({action:"POP",location:t}):function(t){var n=D.location,e=Z.indexOf(n.key);-1===e&&(e=0);var r=Z.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(L=!0,I(o))}(t)}))}var M=d(O()),Z=[M.key];function j(t){return h+E(t)}function I(t){e.go(t)}var B=0;function H(t){1===(B+=t)&&1===t?(window.addEventListener(R,S),o&&window.addEventListener(_,T)):0===B&&(window.removeEventListener(R,S),o&&window.removeEventListener(_,T))}var N=!1,D={length:e.length,action:"POP",location:M,createHref:j,push:function(t,n){var o="PUSH",i=C(t,n,v(),D.location);m.confirmTransitionTo(i,o,l,(function(t){if(t){var n=j(i),a=i.key,u=i.state;if(r)if(e.pushState({key:a,state:u},null,n),c)window.location.href=n;else{var s=Z.indexOf(D.location.key),l=Z.slice(0,s+1);l.push(i.key),Z=l,w({action:o,location:i})}else window.location.href=n}}))},replace:function(t,n){var o="REPLACE",i=C(t,n,v(),D.location);m.confirmTransitionTo(i,o,l,(function(t){if(t){var n=j(i),a=i.key,u=i.state;if(r)if(e.replaceState({key:a,state:u},null,n),c)window.location.replace(n);else{var s=Z.indexOf(D.location.key);-1!==s&&(Z[s]=i.key),w({action:o,location:i})}else window.location.replace(n)}}))},go:I,goBack:function(){I(-1)},goForward:function(){I(1)},block:function(t){void 0===t&&(t=!1);var n=m.setPrompt(t);return N||(H(1),N=!0),function(){return N&&(N=!1,H(-1)),n()}},listen:function(t){var n=m.appendListener(t);return H(1),function(){H(-1),n()}}};return D}(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(q,{history:this.history,children:this.props.children})},n}(a().Component),xt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=function(t){void 0===t&&(t={}),k||y(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,o=void 0===r?A:r,i=e.hashType,a=void 0===i?"slash":i,c=t.basename?x(g(t.basename)):"",u=T[a],l=u.encodePath,f=u.decodePath;function p(){var t=f(U());return c&&(t=b(t,c)),C(t)}var h=P();function d(t){(0,s.Z)(N,t),N.length=n.length,h.notifyListeners(N.location,N.action)}var v=!1,m=null;function w(){var t,n,e=U(),r=l(e);if(e!==r)M(r);else{var i=p(),a=N.location;if(!v&&(n=i,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(m===E(i))return;m=null,function(t){v?(v=!1,d()):h.confirmTransitionTo(t,"POP",o,(function(n){n?d({action:"POP",location:t}):function(t){var n=N.location,e=Z.lastIndexOf(E(n));-1===e&&(e=0);var r=Z.lastIndexOf(E(t));-1===r&&(r=0);var o=e-r;o&&(v=!0,j(o))}(t)}))}(i)}}var R=U(),_=l(R);R!==_&&M(_);var O=p(),Z=[E(O)];function j(t){n.go(t)}var I=0;function B(t){1===(I+=t)&&1===t?window.addEventListener(S,w):0===I&&window.removeEventListener(S,w)}var H=!1,N={length:n.length,action:"POP",location:O,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=L(window.location.href)),e+"#"+l(c+E(t))},push:function(t,n){var e="PUSH",r=C(t,void 0,void 0,N.location);h.confirmTransitionTo(r,e,o,(function(t){if(t){var n=E(r),o=l(c+n);if(U()!==o){m=n,function(t){window.location.hash=t}(o);var i=Z.lastIndexOf(E(N.location)),a=Z.slice(0,i+1);a.push(n),Z=a,d({action:e,location:r})}else d()}}))},replace:function(t,n){var e="REPLACE",r=C(t,void 0,void 0,N.location);h.confirmTransitionTo(r,e,o,(function(t){if(t){var n=E(r),o=l(c+n);U()!==o&&(m=n,M(o));var i=Z.indexOf(E(N.location));-1!==i&&(Z[i]=n),d({action:e,location:r})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(t){void 0===t&&(t=!1);var n=h.setPrompt(t);return H||(B(1),H=!0),function(){return H&&(H=!1,B(-1)),n()}},listen:function(t){var n=h.appendListener(t);return B(1),function(){B(-1),n()}}};return N}(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(q,{history:this.history,children:this.props.children})},n}(a().Component),Et=function(t,n){return"function"==typeof t?t(n):t},Ct=function(t,n){return"string"==typeof t?C(t,null,null,n):t},Pt=function(t){return t},kt=a().forwardRef;void 0===kt&&(kt=Pt);var At=kt((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,i=(0,B.Z)(t,["innerRef","navigate","onClick"]),c=i.target,u=(0,s.Z)({},i,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||c&&"_self"!==c||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return u.ref=Pt!==kt&&n||e,a().createElement("a",u)})),Rt=kt((function(t,n){var e=t.component,r=void 0===e?At:e,o=t.replace,i=t.to,c=t.innerRef,u=(0,B.Z)(t,["component","replace","to","innerRef"]);return a().createElement(V.Consumer,null,(function(t){t||y(!1);var e=t.history,l=Ct(Et(i,t.location),t.location),f=l?e.createHref(l):"",p=(0,s.Z)({},u,{href:f,navigate:function(){var n=Et(i,t.location),r=E(t.location)===E(Ct(n));(o||r?e.replace:e.push)(n)}});return Pt!==kt?p.ref=n||c:p.innerRef=c,a().createElement(r,p)}))})),_t=function(t){return t},Ot=a().forwardRef;void 0===Ot&&(Ot=_t);var St=Ot((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,i=void 0===o?"active":o,c=t.activeStyle,u=t.className,l=t.exact,f=t.isActive,p=t.location,h=t.sensitive,d=t.strict,v=t.style,m=t.to,g=t.innerRef,w=(0,B.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(V.Consumer,null,(function(t){t||y(!1);var e=p||t.location,o=Ct(Et(m,e),e),b=o.pathname,x=b&&b.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=x?it(e.pathname,{path:x,exact:l,sensitive:h,strict:d}):null,C=!!(f?f(E,e):E),P="function"==typeof u?u(C):u,k="function"==typeof v?v(C):v;C&&(P=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(P,i),k=(0,s.Z)({},k,c));var A=(0,s.Z)({"aria-current":C&&r||null,className:P,style:k,to:o},w);return _t!==Ot?A.ref=n||g:A.innerRef=g,a().createElement(Rt,A)}))}))},76585:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},39658:(t,n,e)=>{var r=e(76585);t.exports=function t(n,e,o){return r(e)||(o=e||o,e=[]),o=o||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,n)}(n,e):r(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",f(r)),e)}(n,e,o):function(t,n,e){return p(i(t,e),n,e)}(n,e,o)},t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",l=n&&n.delimiter||"/";null!=(e=o.exec(t));){var f=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],b=e[7];c&&(r.push(c),c="");var x=null!=v&&null!=d&&d!==v,E="+"===w||"*"===w,C="?"===w||"*"===w,P=e[2]||l,k=y||g;r.push({name:m||i++,prefix:v||"",delimiter:P,optional:C,repeat:E,partial:x,asterisk:!!b,pattern:k?s(k):b?".*":"[^"+u(P)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",f(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,n){return t.keys=n,t}function f(t){return t&&t.sensitive?"":"i"}function p(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),n)}},30086:(t,n)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for;e&&Symbol.for("react.element"),e&&Symbol.for("react.portal"),e&&Symbol.for("react.fragment"),e&&Symbol.for("react.strict_mode"),e&&Symbol.for("react.profiler"),e&&Symbol.for("react.provider"),e&&Symbol.for("react.context"),e&&Symbol.for("react.async_mode"),e&&Symbol.for("react.concurrent_mode"),e&&Symbol.for("react.forward_ref"),e&&Symbol.for("react.suspense"),e&&Symbol.for("react.suspense_list"),e&&Symbol.for("react.memo"),e&&Symbol.for("react.lazy"),e&&Symbol.for("react.block"),e&&Symbol.for("react.fundamental"),e&&Symbol.for("react.responder"),e&&Symbol.for("react.scope")},50663:(t,n,e)=>{"use strict";e(30086)},89611:(t,n,e)=>{"use strict";function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}e.d(n,{Z:()=>r})}}]);