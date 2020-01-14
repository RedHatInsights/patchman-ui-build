!function(e){function t(t){for(var r,o,a=t[0],c=t[1],i=t[2],s=0,u=[];s<a.length;s++)o=a[s],Object.prototype.hasOwnProperty.call(k,o)&&k[o]&&u.push(k[o][0]),k[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);for(C&&C(t);u.length;)u.shift()();return I.push.apply(I,i||[]),n()}function n(){for(var e,t=0;t<I.length;t++){for(var n=I[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==k[a]&&(r=!1)}r&&(I.splice(t--,1),e=L(L.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!j[e]||!w[e])return;for(var n in w[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(h[n]=t[n]);0==--v&&0===O&&_()}(e,t),r&&r(e,t)};var o,a=!0,c="b3d93119cdc724c8745a",i=1e4,s={},u=[],l=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:P,apply:D,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:s[e]};return o=void 0,t}var p=[],f="idle";function y(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var b,h,m,v=0,O=0,g={},w={},j={};function E(e){return+e+""===e?+e:e}function P(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,y("check"),(t=i,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=L.p+""+c+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return y("idle"),null;w={},g={},j=e.c,m=e.h,y("prepare");var t=new Promise((function(e,t){b={resolve:e,reject:t}}));for(var n in h={},k)S(n);return"prepare"===f&&0===O&&0===v&&_(),t}));var t}function S(e){j[e]?(w[e]=!0,v++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=L.p+""+e+"."+c+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function _(){y("ready");var e=b;if(b=null,e)if(a)Promise.resolve().then((function(){return D(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in h)Object.prototype.hasOwnProperty.call(h,n)&&t.push(E(n));e.resolve(t)}}function D(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,i;function l(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),c=o.id,i=o.chain;if((a=A[c])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:i,moduleId:c};if(a.hot._main)return{type:"unaccepted",chain:i,moduleId:c};for(var s=0;s<a.parents.length;s++){var u=a.parents[s],l=A[u];if(l){if(l.hot._declinedDependencies[c])return{type:"declined",chain:i.concat([u]),moduleId:c,parentId:u};-1===t.indexOf(u)&&(l.hot._acceptedDependencies[c]?(n[u]||(n[u]=[]),d(n[u],[c])):(delete n[u],t.push(u),r.push({chain:i.concat([u]),id:u})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},b=[],v={},O=function(){console.warn("[HMR] unexpected require("+w.moduleId+") to disposed module")};for(var g in h)if(Object.prototype.hasOwnProperty.call(h,g)){var w;i=E(g);var P=!1,S=!1,_=!1,D="";switch((w=h[g]?l(i):{type:"disposed",moduleId:g}).chain&&(D="\nUpdate propagation: "+w.chain.join(" -> ")),w.type){case"self-declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+w.moduleId+D));break;case"declined":t.onDeclined&&t.onDeclined(w),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+w.moduleId+" in "+w.parentId+D));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(w),t.ignoreUnaccepted||(P=new Error("Aborted because "+i+" is not accepted"+D));break;case"accepted":t.onAccepted&&t.onAccepted(w),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(w),_=!0;break;default:throw new Error("Unexception type "+w.type)}if(P)return y("abort"),Promise.reject(P);if(S)for(i in v[i]=h[i],d(b,w.outdatedModules),w.outdatedDependencies)Object.prototype.hasOwnProperty.call(w.outdatedDependencies,i)&&(p[i]||(p[i]=[]),d(p[i],w.outdatedDependencies[i]));_&&(d(b,[w.moduleId]),v[i]=O)}var I,R=[];for(r=0;r<b.length;r++)i=b[r],A[i]&&A[i].hot._selfAccepted&&v[i]!==O&&R.push({module:i,errorHandler:A[i].hot._selfAccepted});y("dispose"),Object.keys(j).forEach((function(e){!1===j[e]&&function(e){delete k[e]}(e)}));for(var T,x,C=b.slice();C.length>0;)if(i=C.pop(),a=A[i]){var M={},N=a.hot._disposeHandlers;for(o=0;o<N.length;o++)(n=N[o])(M);for(s[i]=M,a.hot.active=!1,delete A[i],delete p[i],o=0;o<a.children.length;o++){var H=A[a.children[o]];H&&((I=H.parents.indexOf(i))>=0&&H.parents.splice(I,1))}}for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=A[i]))for(x=p[i],o=0;o<x.length;o++)T=x[o],(I=a.children.indexOf(T))>=0&&a.children.splice(I,1);for(i in y("apply"),c=m,v)Object.prototype.hasOwnProperty.call(v,i)&&(e[i]=v[i]);var F=null;for(i in p)if(Object.prototype.hasOwnProperty.call(p,i)&&(a=A[i])){x=p[i];var q=[];for(r=0;r<x.length;r++)if(T=x[r],n=a.hot._acceptedDependencies[T]){if(-1!==q.indexOf(n))continue;q.push(n)}for(r=0;r<q.length;r++){n=q[r];try{n(x)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:i,dependencyId:x[r],error:e}),t.ignoreErrored||F||(F=e)}}}for(r=0;r<R.length;r++){var U=R[r];i=U.module,u=[i];try{L(i)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:i,error:n,originalError:e}),t.ignoreErrored||F||(F=n),F||(F=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:i,error:e}),t.ignoreErrored||F||(F=e)}}return F?(y("fail"),Promise.reject(F)):(y("idle"),new Promise((function(e){e(b)})))}var A={},k={1:0},I=[];function L(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{},hot:d(t),parents:(l=u,u=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=A[e];if(!t)return L;var n=function(n){return t.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(u=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),u=[]),L(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return L[e]},set:function(t){L[e]=t}}};for(var a in L)Object.prototype.hasOwnProperty.call(L,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&y("prepare"),O++,L.e(e).then(t,(function(e){throw t(),e}));function t(){O--,"prepare"===f&&(g[e]||S(e),0===O&&0===v&&_())}},n.t=function(e,t){return 1&t&&(e=n(e)),L.t(e,-2&t)},n}(t)),n.l=!0,n.exports}L.e=function(e){var t=[],n=k[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=k[e]=[t,r]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,L.nc&&a.setAttribute("nonce",L.nc),a.src=function(e){return L.p+"js/"+({0:"Advisories",2:"InventoryPage",3:"Systems"}[e]||e)+".js"}(e);var c=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(i);var n=k[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",c.name="ChunkLoadError",c.type=r,c.request=o,n[1](c)}k[e]=void 0}};var i=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},L.m=e,L.c=A,L.d=function(e,t,n){L.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},L.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},L.t=function(e,t){if(1&t&&(e=L(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(L.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)L.d(n,r,function(t){return e[t]}.bind(null,r));return n},L.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return L.d(t,"a",t),t},L.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},L.p="/beta/apps/patch/",L.oe=function(e){throw console.error(e),e},L.h=function(){return c};var R=window.webpackJsonp=window.webpackJsonp||[],T=R.push.bind(R);R.push=t,R=R.slice();for(var x=0;x<R.length;x++)t(R[x]);var C=T;I.push([428,4]),n()}({123:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return u}));var r=n(32),o=n(2),a=n.n(o),c=n(26),i=function(e,t){return a.a.useCallback((function(n,r){return t({offset:Object(c.f)(r,e)})}))},s=function(e){return a.a.useCallback((function(t,n){return e({limit:Object(c.e)(n),offset:0})}))},u=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=a.a.useCallback((function(o,a,c){var i=e[a-n].key;c===r.a.desc&&(i="-"+i),t({sort:i})}));return o}},17:function(e,t,n){"use strict";n.d(t,"g",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"j",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"k",(function(){return p})),n.d(t,"d",(function(){return f}));var r="FETCH_APPLICABLE_ADVISORIES",o="EXPAND_ADVISORY_ROW",a="SELECT_ADVISORY_ROW",c="CHANGE_ADVISORY_LIST_PARAMS",i="FETCH_SYSTEMS",s="CHANGE_SYSTEMS_LIST_PARAMS",u="CHANGE_SYSTEM_SYSTEMS_LIST_PARAMS",l="EXPAND_SYSTEM_ADVISORY_ROW",d="FETCH_APPLICABLE_SYSTEM_ADVISORIES",p="SELECT_SYSTEM_ADVISORY_ROW",f="CLEAR_SYSTEM_ADVISORIES"},210:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"span.patchman-label{display:inline-block;font-size:var(--pf-global--FontSize--sm);font-weight:var(--pf-global--FontWeight--bold);line-height:var(--pf-global--LineHeight--sm);color:var(--pf-global--Color--100)}\n",""])},211:function(e,t,n){(t=e.exports=n(5)(!1)).i(n(426),""),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.icon-with-label:not(:last-child){margin-right:var(--pf-global--spacer--sm)}.icon-with-label>svg{margin-right:var(--pf-global--spacer--xs)}\n",""])},221:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(63),o=n(52),a=[{title:"Name",cellFormatters:[r.b],transforms:[o.a],key:"name"},{title:"Publish date",transforms:[o.a],key:"public_date"},{title:"Type",transforms:[o.a],key:"type"},{title:"Applicable Systems",transforms:[o.a],key:"applicable_systems"},{title:"Synopsis",transforms:[o.a],key:"synopsis"}],c=[{title:"Name",cellFormatters:[r.b],transforms:[o.a],key:"name"},{title:"Publish date",transforms:[o.a],key:"public_date"},{title:"Type",transforms:[o.a],key:"type"},{title:"Synopsis",transforms:[o.a],key:"synopsis"}]},231:function(e,t,n){"use strict";var r=n(282),o=n.n(r),a=n(122),c=n.n(a),i=n(283),s=n.n(i),u=n(1),l=n.n(u),d=n(2),p=n.n(d),f=n(111),y=n(268),b=n(271),h=n(212),m=n.n(h),v=n(124),O=n.n(v),g=n(125),w=n.n(g),j=n(126),E=n.n(j),P=n(127),S=n.n(P),_=n(128),D=n.n(_),A=n(88);function k(e){return function(t){function n(e){var t;return O()(this,n),(t=E()(this,S()(n).call(this,e))).state={component:null},t}return D()(n,t),w()(n,[{key:"componentDidMount",value:function(){var t,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,m.a.awrap(e());case 2:t=r.sent,n=t.default,this.setState({component:n});case 5:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.component;return e?p.a.createElement(e,this.props):p.a.createElement(A.Skeleton,null)}}]),n}(d.Component)}n.d(t,"b",(function(){return T})),n.d(t,"a",(function(){return C}));var I=k((function(){return n.e(0).then(n.bind(null,435))})),L=k((function(){return n.e(3).then(n.bind(null,437))})),R=k((function(){return n.e(2).then(n.bind(null,436))})),T={advisories:{title:"Applicable Advisories",to:"/"},systems:{title:"Systems",to:"/systems"},inventoryDetail:{title:"Inventory Detail",to:"/systems/:inventoryId"}},x=function(e){var t=e.component,n=e.rootClass,r=c()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),p.a.createElement(f.a,o()({},r,{component:t}))};x.propTypes={component:l.a.func,rootClass:l.a.string};var C=function(e){var t=e.childProps.location.pathname;return p.a.createElement(y.a,null,p.a.createElement(f.a,{path:T.inventoryDetail.to,component:R}),p.a.createElement(f.a,{path:T.systems.to,component:L}),p.a.createElement(x,{path:T.advisories.to,component:I,rootClass:"Patchman"}),p.a.createElement(f.a,{render:function(){return s()(T,(function(e){return e.to===t}))?null:p.a.createElement(b.a,{to:T.systems.to})}}))};C.propTypes={childProps:l.a.shape({location:l.a.shape({pathname:l.a.string})})}},242:function(e,t,n){"use strict";var r=n(281),o=n.n(r),a=n(285),c=n(36),i=n.n(c),s=n(26),u=n(17);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p={rows:[],metadata:{limit:25,offset:0,total_items:0},expandedRows:{},selectedRows:{},queryParams:{}},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0,n=d({},e);switch(t.type){case u.g+"_FULFILLED":return n.rows=t.payload.data,n.metadata=t.payload.meta,n.isLoading=!1,n;case u.g+"_PENDING":return n.isLoading=!0,n;case u.a:return n.queryParams=d({},n.queryParams,{},t.payload),n;case u.e:var r=Object(s.a)(n.expandedRows,t.payload);return n=d({},n,{expandedRows:r});case u.j:var o=Object(s.a)(n.selectedRows,t.payload);return n=d({},n,{selectedRows:o});default:return e}};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h={rows:[],metadata:{limit:25,offset:0,total_items:0},expandedRows:{},selectedRows:{},queryParams:{}},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,n=b({},e);switch(t.type){case u.h+"_FULFILLED":return n.rows=t.payload.data,n.metadata=t.payload.meta,n.isLoading=!1,n;case u.h+"_PENDING":return n.isLoading=!0,n;case u.c:return n.queryParams=b({},n.queryParams,{},t.payload),n;case u.f:var r=Object(s.a)(n.expandedRows,t.payload);return n=b({},n,{expandedRows:r});case u.k:var o=Object(s.a)(n.selectedRows,t.payload);return n=b({},n,{selectedRows:o});case u.d:return h;default:return e}},v=n(272);function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w,j={rows:[],metadata:{limit:25,offset:0,total_items:0},expandedRows:{},selectedRows:{},queryParams:{}},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0,n=g({},e);switch(t.type){case u.i+"_PENDING":return n.isLoading=!0,n;case u.i+"_FULFILLED":return n.rows=t.payload.data,n.metadata=t.payload.meta,n.isLoading=!1,n;case u.b:return n.queryParams=g({},n.queryParams,{},t.payload),n;default:return e}};function P(){if(w)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(w=new o.a({},[Object(a.a)()].concat(t))).register({AdvisoryListStore:f,SystemsListStore:E,SystemDetailStore:v.a,SystemAdvisoryListStore:m}),w}function S(){return w.getStore()}function _(){var e;return(e=w).register.apply(e,arguments)}n.d(t,"b",(function(){return P})),n.d(t,"a",(function(){return S})),n.d(t,"c",(function(){return _}))},243:function(e,t,n){"use strict";var r=n(229),o=n.n(r),a=n(260),c=n(261),i=n(230),s=n(2),u=n.n(s),l=n(209),d=n(108),p=n(109),f=n(110),y=n(1),b=n.n(y),h=[{title:"Unknown",icon:u.a.createElement(l.b,null)},{title:"Enhancement",icon:u.a.createElement(d.b,null)},{title:"Bugfix",icon:u.a.createElement(p.b,null)},{title:"Security",icon:u.a.createElement(f.b,null)}],m=function(e){var t=e.type,n=h[t]||h[0];return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"icon-with-label"},n.icon,n.title))};m.propTypes={type:b.a.number};var v=m,O=(n(420),function(e){var t=e.children;return u.a.createElement("span",{className:"patchman-label"},t)});O.propTypes={children:b.a.any};var g=O,w=n(208),j=function(e){var t=e.advisory;return u.a.createElement("span",{className:"icon-with-label"},u.a.createElement("a",{href:"https://access.redhat.com/errata/".concat(t),target:"__blank"},u.a.createElement(w.b,null)," View packages and errata at access.redhat.com"))};j.propTypes={advisory:b.a.string};var E=j,P=n(26);n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return D}));var S=function(e,t,n){return o()(e,(function(e,r){return[{id:e.id,isOpen:!0===t[e.id],selected:!0===n[e.id],cells:[{title:Object(P.h)(e.id)},{title:Object(i.processDate)(e.attributes.public_date)},{title:u.a.createElement(v,{type:e.attributes.advisory_type})},{title:Object(P.h)(e.id,e.attributes.applicable_systems)},e.attributes.synopsis]},{cells:[{title:u.a.createElement(a.a,null,u.a.createElement(g,null,"Description"),u.a.createElement(c.a,{component:c.b.p},e.attributes.description),u.a.createElement(E,{advisory:e.id}))}],parent:2*r}]}))},_=function(e,t,n){return o()(e,(function(e,r){return[{id:e.id,isOpen:!0===t[e.id],selected:!0===n[e.id],cells:[{title:Object(P.h)(e.id)},{title:Object(i.processDate)(e.attributes.public_date)},{title:u.a.createElement(v,{type:e.attributes.advisory_type})},e.attributes.synopsis]},{cells:[{title:u.a.createElement(a.a,null,u.a.createElement(g,null,"Description"),u.a.createElement(c.a,{component:c.b.p},e.attributes.description),u.a.createElement(E,{advisory:e.id}))}],parent:2*r}]}))},D=function(e){return e.map((function(e){return{id:e.id,key:e.id,applicable_advisories:[e.attributes.rhea_count||0,e.attributes.rhba_count||0,e.attributes.rhsa_count||0]}}))}},26:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"d",(function(){return v})),n.d(t,"a",(function(){return O})),n.d(t,"g",(function(){return g})),n.d(t,"f",(function(){return w})),n.d(t,"e",(function(){return j})),n.d(t,"c",(function(){return E})),n.d(t,"h",(function(){return P}));var r=n(94),o=n.n(r),a=n(36),c=n.n(a),i=n(108),s=n(109),u=n(110),l=n(32),d=n(274),p=n.n(d),f=n(2),y=n.n(f),b=n(82);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var m=function(e,t){return[t/e+1,e]},v=function(e,t,n){if(t){var r="-"===t[0]?l.a.desc:l.a.asc;return t=t.replace(/^(-|\+)/,""),{index:p()(e,(function(e){return e.key===t}))+n,direction:r}}return{}},O=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{}))},g=function(e,t){return e[t/2].id},w=function(e,t){return e*t-t},j=function(e){return e};function E(e){var t=o()(e,3),n=t[0],r=t[1],a=t[2];return y.a.createElement("div",null,y.a.createElement("span",{className:"icon-with-label"},y.a.createElement(i.b,null),n),y.a.createElement("span",{className:"icon-with-label"},y.a.createElement(s.b,null),r),y.a.createElement("span",{className:"icon-with-label"},y.a.createElement(u.b,{color:"var(--pf-global--warning-color--100)"}),a))}function P(e,t){return-1!==location.href.indexOf("patch")?y.a.createElement(b.a,{to:"/advisories/"+e},t||e):y.a.createElement("a",{href:"".concat(document.baseURI,"rhel/patch/advisories/").concat(e)},t||e)}},264:function(e,t,n){"use strict";var r=n(94),o=n.n(r),a=n(32),c=n(287),i=n(286),s=n(88),u=n(1),l=n.n(u),d=n(2),p=n.n(d),f=n(26),y=function(e){var t=e.columns,n=e.rows,r=e.onCollapse,u=e.onSelect,l=e.onSetPage,d=e.onPerPageSelect,y=e.onSort,b=e.metadata,h=e.isLoading,m=p.a.useMemo((function(){return Object(f.b)(b.limit,b.offset)}),[b.limit,b.offset]),v=o()(m,2),O=v[0],g=v[1],w=p.a.useMemo((function(){return Object(f.d)(t,b.sort,2)}),[b.sort]);return p.a.createElement(p.a.Fragment,null,p.a.createElement(s.PrimaryToolbar,{pagination:{itemCount:b.total_items,page:O,perPage:g,isCompact:!1,onSetPage:l,onPerPageSelect:d},filterConfig:{items:[]}}),h?p.a.createElement(s.SkeletonTable,{colSize:5,rowSize:20}):p.a.createElement(a.b,{"aria-label":"Advisories table",cells:t,onSelect:u,rows:n,onCollapse:r,onSort:y,sortBy:w},p.a.createElement(c.a,null),p.a.createElement(i.a,null)))};y.propTypes={columns:l.a.array,rows:l.a.array,onCollapse:l.a.func,onSelect:l.a.func,onSetPage:l.a.func,onPerPageSelect:l.a.func,onSort:l.a.func,metadata:l.a.object,isLoading:l.a.bool},t.a=y},272:function(e,t,n){"use strict";var r=n(36),o=n.n(r),a=n(2),c=n.n(a),i=n(37),s=n(264),u=n(221),l=n(86),d=n(243),p=n(26),f=n(123);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=function(){var e=Object(i.useDispatch)(),t=Object(i.useSelector)((function(e){return e.SystemAdvisoryListStore.rows})),n=Object(i.useSelector)((function(e){return e.entityDetails.entity})),r=Object(i.useSelector)((function(e){return e.SystemAdvisoryListStore.expandedRows})),o=Object(i.useSelector)((function(e){return e.SystemAdvisoryListStore.queryParams})),a=Object(i.useSelector)((function(e){return e.SystemAdvisoryListStore.selectedRows})),y=Object(i.useSelector)((function(e){return e.SystemAdvisoryListStore.metadata})),h=Object(i.useSelector)((function(e){return e.SystemAdvisoryListStore.isLoading})),m=c.a.useMemo((function(){return Object(d.b)(t,r,a)}),[t,r,a]);c.a.useEffect((function(){return function(){return e(Object(l.d)())}}),[]),c.a.useEffect((function(){e(Object(l.h)(b({id:n.id},o)))}),[o]);var v=c.a.useCallback((function(n,r,o){return e(Object(l.f)({rowId:Object(p.g)(t,r),value:o}))})),O=c.a.useCallback((function(n,r,o){return e(Object(l.k)({rowId:Object(p.g)(t,o),value:r}))})),g=Object(f.c)(u.b,E,2),w=Object(f.b)(y.limit,E),j=Object(f.a)(E);function E(t){e(Object(l.b)(b({id:n.id},t)))}return c.a.createElement(c.a.Fragment,null,c.a.createElement(s.a,{columns:u.b,rows:m,metadata:y,onCollapse:v,onSelect:O,onSetPage:w,onPerPageSelect:j,onSort:g,isLoading:h}))};function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return g}));var O={loaded:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return v({},e,{loaded:!0,activeApps:[{title:"System Patching",name:"patch",component:function(){return c.a.createElement(h,null)}}]});default:return e}}},420:function(e,t,n){var r=n(210);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(210,(function(){var t=n(210);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},425:function(e,t,n){var r=n(211);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(211,(function(){var t=n(211);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},428:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(27),c=n.n(a),i=n(265),s=n(37),u=n(242),l=n(124),d=n.n(l),p=n(125),f=n.n(p),y=n(126),b=n.n(y),h=n(127),m=n.n(h),v=n(128),O=n.n(v),g=n(1),w=n.n(g),j=n(269),E=(n(425),n(231)),P=function(e){function t(){return d()(this,t),b()(this,m()(t).apply(this,arguments))}return O()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("patch"),insights.chrome.navigation([]),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))})),this.buildNav=this.props.history.listen((function(){return insights.chrome.navigation([])}))}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return o.a.createElement(E.a,{childProps:this.props})}}]),t}(r.Component);P.propTypes={history:w.a.object};var S=Object(j.a)(Object(s.connect)()(P));var _=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1]||"")};c.a.render(o.a.createElement(s.Provider,{store:Object(u.b)().getStore()},o.a.createElement(i.a,{basename:_(window.location.pathname)},o.a.createElement(S,null))),document.getElementById("root"))},86:function(e,t,n){"use strict";var r=n(122),o=n.n(r),a=n(36),c=n.n(a);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(n&&"get"===t){var o=Object.keys(n).map((function(e){return[encodeURIComponent(e).concat("=").concat(encodeURIComponent(n[e]))]})).join("&");e=e.concat("?").concat(o)}return window.insights.chrome.auth.getUser().then((function(){return fetch("/api/patch/v1"+e,{method:t,credentials:"include",body:JSON.stringify(r)})})).then((function(e){if(!e.ok)throw-1!==e.headers.get("content-type").indexOf("json")?e.json():new Promise((function(t){return t({errors:[{status:e.status,detail:e.statusText}]})}));return e.json()})).catch((function(e){e=Promise.resolve(e||{});var t={detail:"There was an error getting data. Reload the page and try again"};return e.then((function(e){throw function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.errors&&e.errors[0]||t)}))}))}var u=n(17);n.d(t,"g",(function(){return l})),n.d(t,"h",(function(){return d})),n.d(t,"i",(function(){return p})),n.d(t,"a",(function(){return f})),n.d(t,"b",(function(){return y})),n.d(t,"c",(function(){return b})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return m})),n.d(t,"j",(function(){return v})),n.d(t,"k",(function(){return O})),n.d(t,"d",(function(){return g}));var l=function(e){return{type:u.g,payload:new Promise((function(t){t(function(e){return s("/advisories","get",e)}(e))})).then((function(e){return e}))}},d=function(e){return{type:u.h,payload:new Promise((function(t){t(function(e){var t=e.id,n=o()(e,["id"]);return s("/systems/".concat(t,"/advisories"),"get",n)}(e))})).then((function(e){return e}))}},p=function(e){return{type:u.i,payload:new Promise((function(t){t(function(e){return s("/systems","get",e)}(e))})).then((function(e){return e}))}},f=function(e){return{type:u.a,payload:e}},y=function(e){return{type:u.c,payload:e}},b=function(e){return{type:u.b,payload:e}},h=function(e){return{type:u.e,payload:[].concat(e)}},m=function(e){return{type:u.f,payload:[].concat(e)}},v=function(e){return{type:u.j,payload:[].concat(e)}},O=function(e){return{type:u.k,payload:[].concat(e)}},g=function(){return{type:u.d,payload:[]}}}});
//# sourceMappingURL=App.js.map