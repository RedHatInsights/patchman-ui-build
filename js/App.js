!function(e){function n(n){for(var r,o,a=n[0],i=n[1],c=n[2],s=0,u=[];s<a.length;s++)o=a[s],I[o]&&u.push(I[o][0]),I[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(M&&M(n);u.length;)u.shift()();return x.push.apply(x,c||[]),t()}function t(){for(var e,n=0;n<x.length;n++){for(var t=x[n],r=!0,o=1;o<t.length;o++){var a=t[o];0!==I[a]&&(r=!1)}r&&(x.splice(n--,1),e=k(k.s=t[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,n){!function(e,n){if(!E[e]||!w[e])return;for(var t in w[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--y&&0===b&&j()}(e,n),r&&r(e,n)};var o,a=!0,i="aab86aed1d771f650a36",c=1e4,s={},u=[],d=[];var l=[],p="idle";function f(e){p=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var h,v,m,y=0,b=0,g={},w={},E={};function O(e){return+e+""===e?+e:e}function _(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return a=e,f("check"),function(e){return e=e||1e4,new Promise(function(n,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=e,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)n();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+o+" failed."));else{try{var e=JSON.parse(r.responseText)}catch(e){return void t(e)}n(e)}}})}(c).then(function(e){if(!e)return f("idle"),null;w={},g={},E=e.c,m=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});for(var t in v={},I)P(t);return"prepare"===p&&0===b&&0===y&&j(),n})}function P(e){E[e]?(w[e]=!0,y++,function(e){var n=document.getElementsByTagName("head")[0],t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+i+".hot-update.js",n.appendChild(t)}(e)):g[e]=!0}function j(){f("ready");var e=h;if(h=null,e)if(a)Promise.resolve().then(function(){return D(a)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(O(t));e.resolve(n)}}function D(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,o,a,c;function d(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=A[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var u=a.parents[s],d=A[u];if(d){if(d.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([u]),moduleId:i,parentId:u};-1===n.indexOf(u)&&(d.hot._acceptedDependencies[i]?(t[u]||(t[u]=[]),l(t[u],[i])):(delete t[u],n.push(u),r.push({chain:c.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},y=[],b={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var w in v)if(Object.prototype.hasOwnProperty.call(v,w)){var _;c=O(w);var P=!1,j=!1,D=!1,x="";switch((_=v[w]?d(c):{type:"disposed",moduleId:w}).chain&&(x="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(P=new Error("Aborted because of self decline: "+_.moduleId+x));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+x));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(P=new Error("Aborted because "+c+" is not accepted"+x));break;case"accepted":n.onAccepted&&n.onAccepted(_),j=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),D=!0;break;default:throw new Error("Unexception type "+_.type)}if(P)return f("abort"),Promise.reject(P);if(j)for(c in b[c]=v[c],l(y,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,c)&&(h[c]||(h[c]=[]),l(h[c],_.outdatedDependencies[c]));D&&(l(y,[_.moduleId]),b[c]=g)}var S,H=[];for(r=0;r<y.length;r++)c=y[r],A[c]&&A[c].hot._selfAccepted&&H.push({module:c,errorHandler:A[c].hot._selfAccepted});f("dispose"),Object.keys(E).forEach(function(e){!1===E[e]&&function(e){delete I[e]}(e)});for(var R,M,C=y.slice();C.length>0;)if(c=C.pop(),a=A[c]){var T={},N=a.hot._disposeHandlers;for(o=0;o<N.length;o++)(t=N[o])(T);for(s[c]=T,a.hot.active=!1,delete A[c],delete h[c],o=0;o<a.children.length;o++){var L=A[a.children[o]];L&&((S=L.parents.indexOf(c))>=0&&L.parents.splice(S,1))}}for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=A[c]))for(M=h[c],o=0;o<M.length;o++)R=M[o],(S=a.children.indexOf(R))>=0&&a.children.splice(S,1);for(c in f("apply"),i=m,b)Object.prototype.hasOwnProperty.call(b,c)&&(e[c]=b[c]);var q=null;for(c in h)if(Object.prototype.hasOwnProperty.call(h,c)&&(a=A[c])){M=h[c];var U=[];for(r=0;r<M.length;r++)if(R=M[r],t=a.hot._acceptedDependencies[R]){if(-1!==U.indexOf(t))continue;U.push(t)}for(r=0;r<U.length;r++){t=U[r];try{t(M)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:c,dependencyId:M[r],error:e}),n.ignoreErrored||q||(q=e)}}}for(r=0;r<H.length;r++){var B=H[r];c=B.module,u=[c];try{k(c)}catch(e){if("function"==typeof B.errorHandler)try{B.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:t,originalError:e}),n.ignoreErrored||q||(q=t),q||(q=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:c,error:e}),n.ignoreErrored||q||(q=e)}}return q?(f("fail"),Promise.reject(q)):(f("idle"),new Promise(function(e){e(y)}))}var A={},I={0:0},x=[];function k(n){if(A[n])return A[n].exports;var t=A[n]={i:n,l:!1,exports:{},hot:function(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:_,apply:D,status:function(e){if(!e)return p;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:s[e]};return o=void 0,n}(n),parents:(d=u,u=[],d),children:[]};return e[n].call(t.exports,t,t.exports,function(e){var n=A[e];if(!n)return k;var t=function(t){return n.hot.active?(A[t]?-1===A[t].parents.indexOf(e)&&A[t].parents.push(e):(u=[e],o=t),-1===n.children.indexOf(t)&&n.children.push(t)):(console.warn("[HMR] unexpected require("+t+") from disposed module "+e),u=[]),k(t)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(n){k[e]=n}}};for(var a in k)Object.prototype.hasOwnProperty.call(k,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(t,a,r(a));return t.e=function(e){return"ready"===p&&f("prepare"),b++,k.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===p&&(g[e]||P(e),0===b&&0===y&&j())}},t.t=function(e,n){return 1&n&&(e=t(e)),k.t(e,-2&n)},t}(n)),t.l=!0,t.exports}k.e=function(e){var n=[],t=I[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise(function(n,r){t=I[e]=[n,r]});n.push(t[2]=r);var o,a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.charset="utf-8",i.timeout=120,k.nc&&i.setAttribute("nonce",k.nc),i.src=function(e){return k.p+"js/"+({1:"Advisories"}[e]||e)+".js"}(e),o=function(n){i.onerror=i.onload=null,clearTimeout(c);var t=I[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");a.type=r,a.request=o,t[1](a)}I[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:i})},12e4);i.onerror=i.onload=o,a.appendChild(i)}return Promise.all(n)},k.m=e,k.c=A,k.d=function(e,n,t){k.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,n){if(1&n&&(e=k(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(k.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)k.d(t,r,function(n){return e[n]}.bind(null,r));return t},k.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(n,"a",n),n},k.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},k.p="/beta/apps/patch/",k.oe=function(e){throw console.error(e),e},k.h=function(){return i};var S=window.webpackJsonp=window.webpackJsonp||[],H=S.push.bind(S);S.push=n,S=S.slice();for(var R=0;R<S.length;R++)n(S[R]);var M=H;x.push([318,2]),t()}({148:function(e,n,t){"use strict";var r=t(220),o=t.n(r),a=t(221),i=t.n(a),c=t(222),s=t.n(c),u=t(1),d=t.n(u),l=t(2),p=t.n(l),f=t(177),h=t(200),v=t(199),m=t(213),y=t.n(m),b=t(223),g=t.n(b),w=t(70),E=t.n(w),O=t(71),_=t.n(O),P=t(72),j=t.n(P),D=t(73),A=t.n(D),I=t(74),x=t.n(I),k=t(139);t.d(n,"b",function(){return H}),t.d(n,"a",function(){return M});var S=function(e){return function(n){function t(e){var n;return E()(this,t),(n=j()(this,A()(t).call(this,e))).state={component:null},n}return x()(t,n),_()(t,[{key:"componentDidMount",value:function(){var n=g()(y.a.mark(function n(){var t,r;return y.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e();case 2:t=n.sent,r=t.default,this.setState({component:r});case 5:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.component;return e?p.a.createElement(e,this.props):p.a.createElement(k.Skeleton,null)}}]),t}(l.Component)}(function(){return t.e(1).then(t.bind(null,362))}),H={advisories:{title:"Advisories",to:"/"}},R=function(e){var n=e.component,t=e.rootClass,r=i()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(t),"pf-c-page__main"),a.setAttribute("role","main"),p.a.createElement(f.a,o()({},r,{component:n}))};R.propTypes={component:d.a.func,rootClass:d.a.string};var M=function(e){var n=e.childProps.location.pathname;return p.a.createElement(h.a,null,p.a.createElement(R,{path:H.advisories.to,component:S,rootClass:"Patchman"}),p.a.createElement(f.a,{render:function(){return s()(H,function(e){return e.to===n})?null:p.a.createElement(v.a,{to:H.advisories.to})}}))};M.propTypes={childProps:d.a.shape({location:d.a.shape({pathname:d.a.string})})}},245:function(e,n,t){var r=t(81);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=t(5)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(81,function(){var n=t(81);if("string"==typeof n&&(n=[[e.i,n,""]]),!function(e,n){var t,r=0;for(t in e){if(!n||e[t]!==n[t])return!1;r++}for(t in n)r--;return 0===r}(r.locals,n.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(n)}),e.hot.dispose(function(){a()})},318:function(e,n,t){"use strict";t.r(n);var r,o=t(2),a=t.n(o),i=t(19),c=t.n(i),s=t(194),u=t(47),d=t(219),l=t.n(d),p=t(230),f=t(48),h=t.n(f),v=t(80),m=t(62),y={rows:[],metadata:{limit:25,offset:0,total_items:0},expandedRows:{},selectedRows:{},queryParams:{}},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,n=arguments.length>1?arguments[1]:void 0,t=h()({},e);switch(n.type){case m.c+"_FULFILLED":return t.rows=n.payload.data,t.metadata=n.payload.meta,t.loading=!1,t;case m.c+"_PENDING":return t.loading=!0,t;case m.a:return t.queryParams=h()({},t.queryParams,n.payload),t;case m.b:var r=Object(v.a)(t.expandedRows,n.payload);return t=h()({},t,{expandedRows:r});case m.d:var o=Object(v.a)(t.selectedRows,n.payload);return t=h()({},t,{selectedRows:o});default:return e}};var g=t(70),w=t.n(g),E=t(71),O=t.n(E),_=t(72),P=t.n(_),j=t(73),D=t.n(j),A=t(74),I=t.n(A),x=t(1),k=t.n(x),S=t(198),H=(t(245),t(148)),R=function(e){function n(){return w()(this,n),P()(this,D()(n).apply(this,arguments))}return I()(n,e),O()(n,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("patch"),insights.chrome.navigation([]),this.appNav=insights.chrome.on("APP_NAVIGATION",function(n){return e.props.history.push("/".concat(n.navId))}),this.buildNav=this.props.history.listen(function(){return insights.chrome.navigation([])})}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return a.a.createElement(H.a,{childProps:this.props})}}]),n}(o.Component);R.propTypes={history:k.a.object};var M=Object(S.a)(Object(u.connect)()(R));var C=function(e){var n="/",t=e.split("/");return t.shift(),"beta"===t[0]&&(t.shift(),n="/beta/"),"".concat(n).concat(t[0],"/").concat(t[1]||"")};c.a.render(a.a.createElement(u.Provider,{store:function(){if(r)throw new Error("store already initialized");for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return(r=new l.a({},[Object(p.a)()].concat(n))).register({AdvisoryListStore:b}),r}().getStore()},a.a.createElement(s.a,{basename:C(window.location.pathname)},a.a.createElement(M,null))),document.getElementById("root"))},62:function(e,n,t){"use strict";t.d(n,"c",function(){return r}),t.d(n,"b",function(){return o}),t.d(n,"d",function(){return a}),t.d(n,"a",function(){return i});var r="FETCH_APPLICABLE_ADVISORIES",o="EXPAND_ADVISORY_ROW",a="SELECT_ADVISORY_ROW",i="CHANGE_ADVISORY_LIST_PARAMS"},80:function(e,n,t){"use strict";t.d(n,"e",function(){return c}),t.d(n,"d",function(){return s}),t.d(n,"b",function(){return u}),t.d(n,"a",function(){return d}),t.d(n,"c",function(){return l});var r=t(48),o=t.n(r),a=t(2),i=t.n(a),c=(t(47),function(e,n){return i.a.useCallback(function(t,r){return n({offset:r*e-e})})}),s=function(e){return i.a.useCallback(function(n,t){return e({limit:t,offset:0})})},u=function(e,n){return[n/e+1,e]},d=function(e,n){var t=n.reduce(function(e,n){return e[n.rowId]=n.value||void 0,e},{});return o()({},e,t)},l=function(e,n){return e[n/2].id}},81:function(e,n,t){(n=e.exports=t(4)(!1)).i(t(246),""),n.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}\n",""])}});