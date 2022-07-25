/*! For license information please see 3722.1658757012042.6596a76b8c35e95cc46a.js.LICENSE.txt */
(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[3722],{93722:(t,n,e)=>{"use strict";e.r(n),e.d(n,{BrowserRouter:()=>wt,HashRouter:()=>xt,Link:()=>At,MemoryRouter:()=>z,NavLink:()=>St,Prompt:()=>Q,Redirect:()=>nt,Route:()=>it,Router:()=>J,StaticRouter:()=>ft,Switch:()=>pt,generatePath:()=>tt,matchPath:()=>ot,useHistory:()=>vt,useLocation:()=>mt,useParams:()=>yt,useRouteMatch:()=>gt,withRouter:()=>ht});var r=e(89611);function o(t,n){t.prototype=Object.create(n.prototype),t.prototype.constructor=t,(0,r.Z)(t,n)}var i=e(43297),a=e.n(i),c=e(87462);function u(t){return"/"===t.charAt(0)}function s(t,n){for(var e=n,r=e+1,o=t.length;r<o;e+=1,r+=1)t[e]=t[r];t.pop()}function l(t){return t.valueOf?t.valueOf():Object.prototype.valueOf.call(t)}const f=function t(n,e){if(n===e)return!0;if(null==n||null==e)return!1;if(Array.isArray(n))return Array.isArray(e)&&n.length===e.length&&n.every((function(n,r){return t(n,e[r])}));if("object"==typeof n||"object"==typeof e){var r=l(n),o=l(e);return r!==n||o!==e?t(r,o):Object.keys(Object.assign({},n,e)).every((function(r){return t(n[r],e[r])}))}return!1};function p(t,n){if(!t)throw new Error("Invariant failed")}function h(t){return"/"===t.charAt(0)?t:"/"+t}function d(t){return"/"===t.charAt(0)?t.substr(1):t}function v(t,n){return function(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}(t,n)?t.substr(n.length):t}function m(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function y(t){var n=t.pathname,e=t.search,r=t.hash,o=n||"/";return e&&"?"!==e&&(o+="?"===e.charAt(0)?e:"?"+e),r&&"#"!==r&&(o+="#"===r.charAt(0)?r:"#"+r),o}function g(t,n,e,r){var o;"string"==typeof t?(o=function(t){var n=t||"/",e="",r="",o=n.indexOf("#");-1!==o&&(r=n.substr(o),n=n.substr(0,o));var i=n.indexOf("?");return-1!==i&&(e=n.substr(i),n=n.substr(0,i)),{pathname:n,search:"?"===e?"":e,hash:"#"===r?"":r}}(t),o.state=n):(void 0===(o=(0,c.Z)({},t)).pathname&&(o.pathname=""),o.search?"?"!==o.search.charAt(0)&&(o.search="?"+o.search):o.search="",o.hash?"#"!==o.hash.charAt(0)&&(o.hash="#"+o.hash):o.hash="",void 0!==n&&void 0===o.state&&(o.state=n));try{o.pathname=decodeURI(o.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(o.key=e),r?o.pathname?"/"!==o.pathname.charAt(0)&&(o.pathname=function(t,n){void 0===n&&(n="");var e,r=t&&t.split("/")||[],o=n&&n.split("/")||[],i=t&&u(t),a=n&&u(n),c=i||a;if(t&&u(t)?o=r:r.length&&(o.pop(),o=o.concat(r)),!o.length)return"/";if(o.length){var l=o[o.length-1];e="."===l||".."===l||""===l}else e=!1;for(var f=0,p=o.length;p>=0;p--){var h=o[p];"."===h?s(o,p):".."===h?(s(o,p),f++):f&&(s(o,p),f--)}if(!c)for(;f--;f)o.unshift("..");!c||""===o[0]||o[0]&&u(o[0])||o.unshift("");var d=o.join("/");return e&&"/"!==d.substr(-1)&&(d+="/"),d}(o.pathname,r.pathname)):o.pathname=r.pathname:o.pathname||(o.pathname="/"),o}function w(){var t=null,n=[];return{setPrompt:function(n){return t=n,function(){t===n&&(t=null)}},confirmTransitionTo:function(n,e,r,o){if(null!=t){var i="function"==typeof t?t(n,e):t;"string"==typeof i?"function"==typeof r?r(i,o):o(!0):o(!1!==i)}else o(!0)},appendListener:function(t){var e=!0;function r(){e&&t.apply(void 0,arguments)}return n.push(r),function(){e=!1,n=n.filter((function(t){return t!==r}))}},notifyListeners:function(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];n.forEach((function(t){return t.apply(void 0,e)}))}}}var x=!("undefined"==typeof window||!window.document||!window.document.createElement);function b(t,n){n(window.confirm(t))}var E="popstate",C="hashchange";function P(){try{return window.history.state||{}}catch(t){return{}}}function k(t){void 0===t&&(t={}),x||p(!1);var n,e=window.history,r=(-1===(n=window.navigator.userAgent).indexOf("Android 2.")&&-1===n.indexOf("Android 4.0")||-1===n.indexOf("Mobile Safari")||-1!==n.indexOf("Chrome")||-1!==n.indexOf("Windows Phone"))&&window.history&&"pushState"in window.history,o=!(-1===window.navigator.userAgent.indexOf("Trident")),i=t,a=i.forceRefresh,u=void 0!==a&&a,s=i.getUserConfirmation,l=void 0===s?b:s,f=i.keyLength,d=void 0===f?6:f,k=t.basename?m(h(t.basename)):"";function A(t){var n=t||{},e=n.key,r=n.state,o=window.location,i=o.pathname+o.search+o.hash;return k&&(i=v(i,k)),g(i,r,e)}function O(){return Math.random().toString(36).substr(2,d)}var R=w();function S(t){(0,c.Z)($,t),$.length=e.length,R.notifyListeners($.location,$.action)}function _(t){(function(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")})(t)||U(A(t.state))}function T(){U(A(P()))}var L=!1;function U(t){L?(L=!1,S()):R.confirmTransitionTo(t,"POP",l,(function(n){n?S({action:"POP",location:t}):function(t){var n=$.location,e=Z.indexOf(n.key);-1===e&&(e=0);var r=Z.indexOf(t.key);-1===r&&(r=0);var o=e-r;o&&(L=!0,B(o))}(t)}))}var M=A(P()),Z=[M.key];function j(t){return k+y(t)}function B(t){e.go(t)}var H=0;function I(t){1===(H+=t)&&1===t?(window.addEventListener(E,_),o&&window.addEventListener(C,T)):0===H&&(window.removeEventListener(E,_),o&&window.removeEventListener(C,T))}var N=!1,$={length:e.length,action:"POP",location:M,createHref:j,push:function(t,n){var o="PUSH",i=g(t,n,O(),$.location);R.confirmTransitionTo(i,o,l,(function(t){if(t){var n=j(i),a=i.key,c=i.state;if(r)if(e.pushState({key:a,state:c},null,n),u)window.location.href=n;else{var s=Z.indexOf($.location.key),l=Z.slice(0,s+1);l.push(i.key),Z=l,S({action:o,location:i})}else window.location.href=n}}))},replace:function(t,n){var o="REPLACE",i=g(t,n,O(),$.location);R.confirmTransitionTo(i,o,l,(function(t){if(t){var n=j(i),a=i.key,c=i.state;if(r)if(e.replaceState({key:a,state:c},null,n),u)window.location.replace(n);else{var s=Z.indexOf($.location.key);-1!==s&&(Z[s]=i.key),S({action:o,location:i})}else window.location.replace(n)}}))},go:B,goBack:function(){B(-1)},goForward:function(){B(1)},block:function(t){void 0===t&&(t=!1);var n=R.setPrompt(t);return N||(I(1),N=!0),function(){return N&&(N=!1,I(-1)),n()}},listen:function(t){var n=R.appendListener(t);return I(1),function(){I(-1),n()}}};return $}var A="hashchange",O={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+d(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:d,decodePath:h},slash:{encodePath:h,decodePath:h}};function R(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function S(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function _(t){window.location.replace(R(window.location.href)+"#"+t)}function T(t){void 0===t&&(t={}),x||p(!1);var n=window.history,e=(window.navigator.userAgent.indexOf("Firefox"),t),r=e.getUserConfirmation,o=void 0===r?b:r,i=e.hashType,a=void 0===i?"slash":i,u=t.basename?m(h(t.basename)):"",s=O[a],l=s.encodePath,f=s.decodePath;function d(){var t=f(S());return u&&(t=v(t,u)),g(t)}var E=w();function C(t){(0,c.Z)(N,t),N.length=n.length,E.notifyListeners(N.location,N.action)}var P=!1,k=null;function T(){var t,n,e=S(),r=l(e);if(e!==r)_(r);else{var i=d(),a=N.location;if(!P&&(n=i,(t=a).pathname===n.pathname&&t.search===n.search&&t.hash===n.hash))return;if(k===y(i))return;k=null,function(t){if(P)P=!1,C();else{E.confirmTransitionTo(t,"POP",o,(function(n){n?C({action:"POP",location:t}):function(t){var n=N.location,e=Z.lastIndexOf(y(n));-1===e&&(e=0);var r=Z.lastIndexOf(y(t));-1===r&&(r=0);var o=e-r;o&&(P=!0,j(o))}(t)}))}}(i)}}var L=S(),U=l(L);L!==U&&_(U);var M=d(),Z=[y(M)];function j(t){n.go(t)}var B=0;function H(t){1===(B+=t)&&1===t?window.addEventListener(A,T):0===B&&window.removeEventListener(A,T)}var I=!1,N={length:n.length,action:"POP",location:M,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=R(window.location.href)),e+"#"+l(u+y(t))},push:function(t,n){var e="PUSH",r=g(t,void 0,void 0,N.location);E.confirmTransitionTo(r,e,o,(function(t){if(t){var n=y(r),o=l(u+n);if(S()!==o){k=n,function(t){window.location.hash=t}(o);var i=Z.lastIndexOf(y(N.location)),a=Z.slice(0,i+1);a.push(n),Z=a,C({action:e,location:r})}else C()}}))},replace:function(t,n){var e="REPLACE",r=g(t,void 0,void 0,N.location);E.confirmTransitionTo(r,e,o,(function(t){if(t){var n=y(r),o=l(u+n);S()!==o&&(k=n,_(o));var i=Z.indexOf(y(N.location));-1!==i&&(Z[i]=n),C({action:e,location:r})}}))},go:j,goBack:function(){j(-1)},goForward:function(){j(1)},block:function(t){void 0===t&&(t=!1);var n=E.setPrompt(t);return I||(H(1),I=!0),function(){return I&&(I=!1,H(-1)),n()}},listen:function(t){var n=E.appendListener(t);return H(1),function(){H(-1),n()}}};return N}function L(t,n,e){return Math.min(Math.max(t,n),e)}function U(t){void 0===t&&(t={});var n=t,e=n.getUserConfirmation,r=n.initialEntries,o=void 0===r?["/"]:r,i=n.initialIndex,a=void 0===i?0:i,u=n.keyLength,s=void 0===u?6:u,l=w();function f(t){(0,c.Z)(x,t),x.length=x.entries.length,l.notifyListeners(x.location,x.action)}function p(){return Math.random().toString(36).substr(2,s)}var h=L(a,0,o.length-1),d=o.map((function(t){return g(t,void 0,"string"==typeof t?p():t.key||p())})),v=y;function m(t){var n=L(x.index+t,0,x.entries.length-1),r=x.entries[n];l.confirmTransitionTo(r,"POP",e,(function(t){t?f({action:"POP",location:r,index:n}):f()}))}var x={length:d.length,action:"POP",location:d[h],index:h,entries:d,createHref:v,push:function(t,n){var r="PUSH",o=g(t,n,p(),x.location);l.confirmTransitionTo(o,r,e,(function(t){if(t){var n=x.index+1,e=x.entries.slice(0);e.length>n?e.splice(n,e.length-n,o):e.push(o),f({action:r,location:o,index:n,entries:e})}}))},replace:function(t,n){var r="REPLACE",o=g(t,n,p(),x.location);l.confirmTransitionTo(o,r,e,(function(t){t&&(x.entries[x.index]=o,f({action:r,location:o}))}))},go:m,goBack:function(){m(-1)},goForward:function(){m(1)},canGo:function(t){var n=x.index+t;return n>=0&&n<x.entries.length},block:function(t){return void 0===t&&(t=!1),l.setPrompt(t)},listen:function(t){return l.appendListener(t)}};return x}var M=e(45697),Z=e.n(M),j=1073741823,B="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e.g?e.g:{};function H(t){var n=[];return{on:function(t){n.push(t)},off:function(t){n=n.filter((function(n){return n!==t}))},get:function(){return t},set:function(e,r){t=e,n.forEach((function(n){return n(t,r)}))}}}const I=a().createContext||function(t,n){var e,r,a,c="__create-react-context-"+((B[a="__global_unique_id__"]=(B[a]||0)+1)+"__"),u=function(t){function e(){var n;return(n=t.apply(this,arguments)||this).emitter=H(n.props.value),n}o(e,t);var r=e.prototype;return r.getChildContext=function(){var t;return(t={})[c]=this.emitter,t},r.componentWillReceiveProps=function(t){if(this.props.value!==t.value){var e,r=this.props.value,o=t.value;((i=r)===(a=o)?0!==i||1/i==1/a:i!=i&&a!=a)?e=0:(e="function"==typeof n?n(r,o):j,0!=(e|=0)&&this.emitter.set(t.value,e))}var i,a},r.render=function(){return this.props.children},e}(i.Component);u.childContextTypes=((e={})[c]=Z().object.isRequired,e);var s=function(n){function e(){var t;return(t=n.apply(this,arguments)||this).state={value:t.getValue()},t.onUpdate=function(n,e){0!=((0|t.observedBits)&e)&&t.setState({value:t.getValue()})},t}o(e,n);var r=e.prototype;return r.componentWillReceiveProps=function(t){var n=t.observedBits;this.observedBits=null==n?j:n},r.componentDidMount=function(){this.context[c]&&this.context[c].on(this.onUpdate);var t=this.props.observedBits;this.observedBits=null==t?j:t},r.componentWillUnmount=function(){this.context[c]&&this.context[c].off(this.onUpdate)},r.getValue=function(){return this.context[c]?this.context[c].get():t},r.render=function(){return(t=this.props.children,Array.isArray(t)?t[0]:t)(this.state.value);var t},e}(i.Component);return s.contextTypes=((r={})[c]=Z().object,r),{Provider:u,Consumer:s}};var N=e(67553),$=e.n(N),W=(e(18417),e(63366)),D=e(8679),F=e.n(D),K=function(t){var n=I();return n.displayName=t,n},V=K("Router-History"),q=K("Router"),J=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={location:n.history.location},e._isMounted=!1,e._pendingLocation=null,n.staticContext||(e.unlisten=n.history.listen((function(t){e._pendingLocation=t}))),e}o(n,t),n.computeRootMatch=function(t){return{path:"/",url:"/",params:{},isExact:"/"===t}};var e=n.prototype;return e.componentDidMount=function(){var t=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen((function(n){t._isMounted&&t.setState({location:n})}))),this._pendingLocation&&this.setState({location:this._pendingLocation})},e.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},e.render=function(){return a().createElement(q.Provider,{value:{history:this.props.history,location:this.state.location,match:n.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},a().createElement(V.Provider,{children:this.props.children||null,value:this.props.history}))},n}(a().Component),z=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=U(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},n}(a().Component),G=function(t){function n(){return t.apply(this,arguments)||this}o(n,t);var e=n.prototype;return e.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},e.componentDidUpdate=function(t){this.props.onUpdate&&this.props.onUpdate.call(this,this,t)},e.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},e.render=function(){return null},n}(a().Component);function Q(t){var n=t.message,e=t.when,r=void 0===e||e;return a().createElement(q.Consumer,null,(function(t){if(t||p(!1),!r||t.staticContext)return null;var e=t.history.block;return a().createElement(G,{onMount:function(t){t.release=e(n)},onUpdate:function(t,r){r.message!==n&&(t.release(),t.release=e(n))},onUnmount:function(t){t.release()},message:n})}))}var X={},Y=0;function tt(t,n){return void 0===t&&(t="/"),void 0===n&&(n={}),"/"===t?t:function(t){if(X[t])return X[t];var n=$().compile(t);return Y<1e4&&(X[t]=n,Y++),n}(t)(n,{pretty:!0})}function nt(t){var n=t.computedMatch,e=t.to,r=t.push,o=void 0!==r&&r;return a().createElement(q.Consumer,null,(function(t){t||p(!1);var r=t.history,i=t.staticContext,u=o?r.push:r.replace,s=g(n?"string"==typeof e?tt(e,n.params):(0,c.Z)({},e,{pathname:tt(e.pathname,n.params)}):e);return i?(u(s),null):a().createElement(G,{onMount:function(){u(s)},onUpdate:function(t,n){var e,r,o=g(n.to);e=o,r=(0,c.Z)({},s,{key:o.key}),e.pathname===r.pathname&&e.search===r.search&&e.hash===r.hash&&e.key===r.key&&f(e.state,r.state)||u(s)},to:e})}))}var et={},rt=0;function ot(t,n){void 0===n&&(n={}),("string"==typeof n||Array.isArray(n))&&(n={path:n});var e=n,r=e.path,o=e.exact,i=void 0!==o&&o,a=e.strict,c=void 0!==a&&a,u=e.sensitive,s=void 0!==u&&u;return[].concat(r).reduce((function(n,e){if(!e&&""!==e)return null;if(n)return n;var r=function(t,n){var e=""+n.end+n.strict+n.sensitive,r=et[e]||(et[e]={});if(r[t])return r[t];var o=[],i={regexp:$()(t,o,n),keys:o};return rt<1e4&&(r[t]=i,rt++),i}(e,{end:i,strict:c,sensitive:s}),o=r.regexp,a=r.keys,u=o.exec(t);if(!u)return null;var l=u[0],f=u.slice(1),p=t===l;return i&&!p?null:{path:e,url:"/"===e&&""===l?"/":l,isExact:p,params:a.reduce((function(t,n,e){return t[n.name]=f[e],t}),{})}}),null)}var it=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(q.Consumer,null,(function(n){n||p(!1);var e=t.props.location||n.location,r=t.props.computedMatch?t.props.computedMatch:t.props.path?ot(e.pathname,t.props):n.match,o=(0,c.Z)({},n,{location:e,match:r}),i=t.props,u=i.children,s=i.component,l=i.render;return Array.isArray(u)&&function(t){return 0===a().Children.count(t)}(u)&&(u=null),a().createElement(q.Provider,{value:o},o.match?u?"function"==typeof u?u(o):u:s?a().createElement(s,o):l?l(o):null:"function"==typeof u?u(o):null)}))},n}(a().Component);function at(t){return"/"===t.charAt(0)?t:"/"+t}function ct(t,n){if(!t)return n;var e=at(t);return 0!==n.pathname.indexOf(e)?n:(0,c.Z)({},n,{pathname:n.pathname.substr(e.length)})}function ut(t){return"string"==typeof t?t:y(t)}function st(t){return function(){p(!1)}}function lt(){}var ft=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).handlePush=function(t){return n.navigateTo(t,"PUSH")},n.handleReplace=function(t){return n.navigateTo(t,"REPLACE")},n.handleListen=function(){return lt},n.handleBlock=function(){return lt},n}o(n,t);var e=n.prototype;return e.navigateTo=function(t,n){var e=this.props,r=e.basename,o=void 0===r?"":r,i=e.context,a=void 0===i?{}:i;a.action=n,a.location=function(t,n){return t?(0,c.Z)({},n,{pathname:at(t)+n.pathname}):n}(o,g(t)),a.url=ut(a.location)},e.render=function(){var t=this.props,n=t.basename,e=void 0===n?"":n,r=t.context,o=void 0===r?{}:r,i=t.location,u=void 0===i?"/":i,s=(0,W.Z)(t,["basename","context","location"]),l={createHref:function(t){return at(e+ut(t))},action:"POP",location:ct(e,g(u)),push:this.handlePush,replace:this.handleReplace,go:st(),goBack:st(),goForward:st(),listen:this.handleListen,block:this.handleBlock};return a().createElement(J,(0,c.Z)({},s,{history:l,staticContext:o}))},n}(a().Component),pt=function(t){function n(){return t.apply(this,arguments)||this}return o(n,t),n.prototype.render=function(){var t=this;return a().createElement(q.Consumer,null,(function(n){n||p(!1);var e,r,o=t.props.location||n.location;return a().Children.forEach(t.props.children,(function(t){if(null==r&&a().isValidElement(t)){e=t;var i=t.props.path||t.props.from;r=i?ot(o.pathname,(0,c.Z)({},t.props,{path:i})):n.match}})),r?a().cloneElement(e,{location:o,computedMatch:r}):null}))},n}(a().Component);function ht(t){var n="withRouter("+(t.displayName||t.name)+")",e=function(n){var e=n.wrappedComponentRef,r=(0,W.Z)(n,["wrappedComponentRef"]);return a().createElement(q.Consumer,null,(function(n){return n||p(!1),a().createElement(t,(0,c.Z)({},r,n,{ref:e}))}))};return e.displayName=n,e.WrappedComponent=t,F()(e,t)}var dt=a().useContext;function vt(){return dt(V)}function mt(){return dt(q).location}function yt(){var t=dt(q).match;return t?t.params:{}}function gt(t){var n=mt(),e=dt(q).match;return t?ot(n.pathname,t):e}var wt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=k(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},n}(a().Component),xt=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];return(n=t.call.apply(t,[this].concat(r))||this).history=T(n.props),n}return o(n,t),n.prototype.render=function(){return a().createElement(J,{history:this.history,children:this.props.children})},n}(a().Component),bt=function(t,n){return"function"==typeof t?t(n):t},Et=function(t,n){return"string"==typeof t?g(t,null,null,n):t},Ct=function(t){return t},Pt=a().forwardRef;void 0===Pt&&(Pt=Ct);var kt=Pt((function(t,n){var e=t.innerRef,r=t.navigate,o=t.onClick,i=(0,W.Z)(t,["innerRef","navigate","onClick"]),u=i.target,s=(0,c.Z)({},i,{onClick:function(t){try{o&&o(t)}catch(n){throw t.preventDefault(),n}t.defaultPrevented||0!==t.button||u&&"_self"!==u||function(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)||(t.preventDefault(),r())}});return s.ref=Ct!==Pt&&n||e,a().createElement("a",s)})),At=Pt((function(t,n){var e=t.component,r=void 0===e?kt:e,o=t.replace,i=t.to,u=t.innerRef,s=(0,W.Z)(t,["component","replace","to","innerRef"]);return a().createElement(q.Consumer,null,(function(t){t||p(!1);var e=t.history,l=Et(bt(i,t.location),t.location),f=l?e.createHref(l):"",h=(0,c.Z)({},s,{href:f,navigate:function(){var n=bt(i,t.location),r=y(t.location)===y(Et(n));(o||r?e.replace:e.push)(n)}});return Ct!==Pt?h.ref=n||u:h.innerRef=u,a().createElement(r,h)}))})),Ot=function(t){return t},Rt=a().forwardRef;void 0===Rt&&(Rt=Ot);var St=Rt((function(t,n){var e=t["aria-current"],r=void 0===e?"page":e,o=t.activeClassName,i=void 0===o?"active":o,u=t.activeStyle,s=t.className,l=t.exact,f=t.isActive,h=t.location,d=t.sensitive,v=t.strict,m=t.style,y=t.to,g=t.innerRef,w=(0,W.Z)(t,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return a().createElement(q.Consumer,null,(function(t){t||p(!1);var e=h||t.location,o=Et(bt(y,e),e),x=o.pathname,b=x&&x.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),E=b?ot(e.pathname,{path:b,exact:l,sensitive:d,strict:v}):null,C=!!(f?f(E,e):E),P="function"==typeof s?s(C):s,k="function"==typeof m?m(C):m;C&&(P=function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];return n.filter((function(t){return t})).join(" ")}(P,i),k=(0,c.Z)({},k,u));var A=(0,c.Z)({"aria-current":C&&r||null,className:P,style:k,to:o},w);return Ot!==Rt?A.ref=n||g:A.innerRef=g,a().createElement(At,A)}))}))},23457:t=>{t.exports=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)}},67553:(t,n,e)=>{var r=e(23457);t.exports=function t(n,e,o){return r(e)||(o=e||o,e=[]),o=o||{},n instanceof RegExp?function(t,n){var e=t.source.match(/\((?!\?)/g);if(e)for(var r=0;r<e.length;r++)n.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return l(t,n)}(n,e):r(n)?function(n,e,r){for(var o=[],i=0;i<n.length;i++)o.push(t(n[i],e,r).source);return l(new RegExp("(?:"+o.join("|")+")",f(r)),e)}(n,e,o):function(t,n,e){return p(i(t,e),n,e)}(n,e,o)},t.exports.parse=i,t.exports.compile=function(t,n){return c(i(t,n),n)},t.exports.tokensToFunction=c,t.exports.tokensToRegExp=p;var o=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function i(t,n){for(var e,r=[],i=0,a=0,c="",l=n&&n.delimiter||"/";null!=(e=o.exec(t));){var f=e[0],p=e[1],h=e.index;if(c+=t.slice(a,h),a=h+f.length,p)c+=p[1];else{var d=t[a],v=e[2],m=e[3],y=e[4],g=e[5],w=e[6],x=e[7];c&&(r.push(c),c="");var b=null!=v&&null!=d&&d!==v,E="+"===w||"*"===w,C="?"===w||"*"===w,P=e[2]||l,k=y||g;r.push({name:m||i++,prefix:v||"",delimiter:P,optional:C,repeat:E,partial:b,asterisk:!!x,pattern:k?s(k):x?".*":"[^"+u(P)+"]+?"})}}return a<t.length&&(c+=t.substr(a)),c&&r.push(c),r}function a(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function c(t,n){for(var e=new Array(t.length),o=0;o<t.length;o++)"object"==typeof t[o]&&(e[o]=new RegExp("^(?:"+t[o].pattern+")$",f(n)));return function(n,o){for(var i="",c=n||{},u=(o||{}).pretty?a:encodeURIComponent,s=0;s<t.length;s++){var l=t[s];if("string"!=typeof l){var f,p=c[l.name];if(null==p){if(l.optional){l.partial&&(i+=l.prefix);continue}throw new TypeError('Expected "'+l.name+'" to be defined')}if(r(p)){if(!l.repeat)throw new TypeError('Expected "'+l.name+'" to not repeat, but received `'+JSON.stringify(p)+"`");if(0===p.length){if(l.optional)continue;throw new TypeError('Expected "'+l.name+'" to not be empty')}for(var h=0;h<p.length;h++){if(f=u(p[h]),!e[s].test(f))throw new TypeError('Expected all "'+l.name+'" to match "'+l.pattern+'", but received `'+JSON.stringify(f)+"`");i+=(0===h?l.prefix:l.delimiter)+f}}else{if(f=l.asterisk?encodeURI(p).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})):u(p),!e[s].test(f))throw new TypeError('Expected "'+l.name+'" to match "'+l.pattern+'", but received "'+f+'"');i+=l.prefix+f}}else i+=l}return i}}function u(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function l(t,n){return t.keys=n,t}function f(t){return t&&t.sensitive?"":"i"}function p(t,n,e){r(n)||(e=n||e,n=[]);for(var o=(e=e||{}).strict,i=!1!==e.end,a="",c=0;c<t.length;c++){var s=t[c];if("string"==typeof s)a+=u(s);else{var p=u(s.prefix),h="(?:"+s.pattern+")";n.push(s),s.repeat&&(h+="(?:"+p+h+")*"),a+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=u(e.delimiter||"/"),v=a.slice(-d.length)===d;return o||(a=(v?a.slice(0,-d.length):a)+"(?:"+d+"(?=$))?"),a+=i?"$":o&&v?"":"(?="+d+"|$)",l(new RegExp("^"+a,f(e)),n)}},28449:(t,n)=>{"use strict";var e="function"==typeof Symbol&&Symbol.for;e&&Symbol.for("react.element"),e&&Symbol.for("react.portal"),e&&Symbol.for("react.fragment"),e&&Symbol.for("react.strict_mode"),e&&Symbol.for("react.profiler"),e&&Symbol.for("react.provider"),e&&Symbol.for("react.context"),e&&Symbol.for("react.async_mode"),e&&Symbol.for("react.concurrent_mode"),e&&Symbol.for("react.forward_ref"),e&&Symbol.for("react.suspense"),e&&Symbol.for("react.suspense_list"),e&&Symbol.for("react.memo"),e&&Symbol.for("react.lazy"),e&&Symbol.for("react.block"),e&&Symbol.for("react.fundamental"),e&&Symbol.for("react.responder"),e&&Symbol.for("react.scope")},18417:(t,n,e)=>{"use strict";e(28449)},89611:(t,n,e)=>{"use strict";function r(t,n){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,n){return t.__proto__=n,t},r(t,n)}e.d(n,{Z:()=>r})}}]);