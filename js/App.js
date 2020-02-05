!function(e){function t(t){for(var r,o,a=t[0],i=t[1],c=t[2],u=0,s=[];u<a.length;u++)o=a[u],Object.prototype.hasOwnProperty.call(I,o)&&I[o]&&s.push(I[o][0]),I[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);for(x&&x(t);s.length;)s.shift()();return L.push.apply(L,c||[]),n()}function n(){for(var e,t=0;t<L.length;t++){for(var n=L[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==I[a]&&(r=!1)}r&&(L.splice(t--,1),e=k(k.s=n[0]))}return e}var r=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,t){if(!w[e]||!j[e])return;for(var n in j[e]=!1,t)Object.prototype.hasOwnProperty.call(t,n)&&(m[n]=t[n]);0==--h&&0===O&&D()}(e,t),r&&r(e,t)};var o,a=!0,i="4a17412027a66d0be0e9",c=1e4,u={},s=[],l=[];function d(e){var t={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:o!==e,active:!0,accept:function(e,n){if(void 0===e)t._selfAccepted=!0;else if("function"==typeof e)t._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)t._acceptedDependencies[e[r]]=n||function(){};else t._acceptedDependencies[e]=n||function(){}},decline:function(e){if(void 0===e)t._selfDeclined=!0;else if("object"==typeof e)for(var n=0;n<e.length;n++)t._declinedDependencies[e[n]]=!0;else t._declinedDependencies[e]=!0},dispose:function(e){t._disposeHandlers.push(e)},addDisposeHandler:function(e){t._disposeHandlers.push(e)},removeDisposeHandler:function(e){var n=t._disposeHandlers.indexOf(e);n>=0&&t._disposeHandlers.splice(n,1)},check:P,apply:_,status:function(e){if(!e)return f;p.push(e)},addStatusHandler:function(e){p.push(e)},removeStatusHandler:function(e){var t=p.indexOf(e);t>=0&&p.splice(t,1)},data:u[e]};return o=void 0,t}var p=[],f="idle";function y(e){f=e;for(var t=0;t<p.length;t++)p[t].call(null,e)}var b,m,v,h=0,O=0,g={},j={},w={};function E(e){return+e+""===e?+e:e}function P(e){if("idle"!==f)throw new Error("check() is only allowed in idle status");return a=e,y("check"),(t=c,t=t||1e4,new Promise((function(e,n){if("undefined"==typeof XMLHttpRequest)return n(new Error("No browser support"));try{var r=new XMLHttpRequest,o=k.p+""+i+".hot-update.json";r.open("GET",o,!0),r.timeout=t,r.send(null)}catch(e){return n(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)n(new Error("Manifest request to "+o+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)n(new Error("Manifest request to "+o+" failed."));else{try{var t=JSON.parse(r.responseText)}catch(e){return void n(e)}e(t)}}}))).then((function(e){if(!e)return y("idle"),null;j={},g={},w=e.c,v=e.h,y("prepare");var t=new Promise((function(e,t){b={resolve:e,reject:t}}));for(var n in m={},I)S(n);return"prepare"===f&&0===O&&0===h&&D(),t}));var t}function S(e){w[e]?(j[e]=!0,h++,function(e){var t=document.createElement("script");t.charset="utf-8",t.src=k.p+""+e+"."+i+".hot-update.js",document.head.appendChild(t)}(e)):g[e]=!0}function D(){y("ready");var e=b;if(b=null,e)if(a)Promise.resolve().then((function(){return _(a)})).then((function(t){e.resolve(t)}),(function(t){e.reject(t)}));else{var t=[];for(var n in m)Object.prototype.hasOwnProperty.call(m,n)&&t.push(E(n));e.resolve(t)}}function _(t){if("ready"!==f)throw new Error("apply() is only allowed in ready status");var n,r,o,a,c;function l(e){for(var t=[e],n={},r=t.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=A[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var u=0;u<a.parents.length;u++){var s=a.parents[u],l=A[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===t.indexOf(s)&&(l.hot._acceptedDependencies[i]?(n[s]||(n[s]=[]),d(n[s],[i])):(delete n[s],t.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:t,outdatedDependencies:n}}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];-1===e.indexOf(r)&&e.push(r)}}t=t||{};var p={},b=[],h={},O=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var g in m)if(Object.prototype.hasOwnProperty.call(m,g)){var j;c=E(g);var P=!1,S=!1,D=!1,_="";switch((j=m[g]?l(c):{type:"disposed",moduleId:g}).chain&&(_="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(P=new Error("Aborted because of self decline: "+j.moduleId+_));break;case"declined":t.onDeclined&&t.onDeclined(j),t.ignoreDeclined||(P=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+_));break;case"unaccepted":t.onUnaccepted&&t.onUnaccepted(j),t.ignoreUnaccepted||(P=new Error("Aborted because "+c+" is not accepted"+_));break;case"accepted":t.onAccepted&&t.onAccepted(j),S=!0;break;case"disposed":t.onDisposed&&t.onDisposed(j),D=!0;break;default:throw new Error("Unexception type "+j.type)}if(P)return y("abort"),Promise.reject(P);if(S)for(c in h[c]=m[c],d(b,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,c)&&(p[c]||(p[c]=[]),d(p[c],j.outdatedDependencies[c]));D&&(d(b,[j.moduleId]),h[c]=O)}var L,T=[];for(r=0;r<b.length;r++)c=b[r],A[c]&&A[c].hot._selfAccepted&&h[c]!==O&&T.push({module:c,errorHandler:A[c].hot._selfAccepted});y("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete I[e]}(e)}));for(var C,R,x=b.slice();x.length>0;)if(c=x.pop(),a=A[c]){var N={},M=a.hot._disposeHandlers;for(o=0;o<M.length;o++)(n=M[o])(N);for(u[c]=N,a.hot.active=!1,delete A[c],delete p[c],o=0;o<a.children.length;o++){var F=A[a.children[o]];F&&((L=F.parents.indexOf(c))>=0&&F.parents.splice(L,1))}}for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=A[c]))for(R=p[c],o=0;o<R.length;o++)C=R[o],(L=a.children.indexOf(C))>=0&&a.children.splice(L,1);for(c in y("apply"),i=v,h)Object.prototype.hasOwnProperty.call(h,c)&&(e[c]=h[c]);var H=null;for(c in p)if(Object.prototype.hasOwnProperty.call(p,c)&&(a=A[c])){R=p[c];var Y=[];for(r=0;r<R.length;r++)if(C=R[r],n=a.hot._acceptedDependencies[C]){if(-1!==Y.indexOf(n))continue;Y.push(n)}for(r=0;r<Y.length;r++){n=Y[r];try{n(R)}catch(e){t.onErrored&&t.onErrored({type:"accept-errored",moduleId:c,dependencyId:R[r],error:e}),t.ignoreErrored||H||(H=e)}}}for(r=0;r<T.length;r++){var U=T[r];c=U.module,s=[c];try{k(c)}catch(e){if("function"==typeof U.errorHandler)try{U.errorHandler(e)}catch(n){t.onErrored&&t.onErrored({type:"self-accept-error-handler-errored",moduleId:c,error:n,originalError:e}),t.ignoreErrored||H||(H=n),H||(H=e)}else t.onErrored&&t.onErrored({type:"self-accept-errored",moduleId:c,error:e}),t.ignoreErrored||H||(H=e)}}return H?(y("fail"),Promise.reject(H)):(y("idle"),new Promise((function(e){e(b)})))}var A={},I={2:0},L=[];function k(t){if(A[t])return A[t].exports;var n=A[t]={i:t,l:!1,exports:{},hot:d(t),parents:(l=s,s=[],l),children:[]};return e[t].call(n.exports,n,n.exports,function(e){var t=A[e];if(!t)return k;var n=function(n){return t.hot.active?(A[n]?-1===A[n].parents.indexOf(e)&&A[n].parents.push(e):(s=[e],o=n),-1===t.children.indexOf(n)&&t.children.push(n)):(console.warn("[HMR] unexpected require("+n+") from disposed module "+e),s=[]),k(n)},r=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(t){k[e]=t}}};for(var a in k)Object.prototype.hasOwnProperty.call(k,a)&&"e"!==a&&"t"!==a&&Object.defineProperty(n,a,r(a));return n.e=function(e){return"ready"===f&&y("prepare"),O++,k.e(e).then(t,(function(e){throw t(),e}));function t(){O--,"prepare"===f&&(g[e]||S(e),0===O&&0===h&&D())}},n.t=function(e,t){return 1&t&&(e=n(e)),k.t(e,-2&t)},n}(t)),n.l=!0,n.exports}k.e=function(e){var t=[],n=I[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=I[e]=[t,r]}));t.push(n[2]=r);var o,a=document.createElement("script");a.charset="utf-8",a.timeout=120,k.nc&&a.setAttribute("nonce",k.nc),a.src=function(e){return k.p+"js/"+({0:"Advisories",1:"AdvisoryyPage",3:"InventoryPage",4:"Systems"}[e]||e)+".js"}(e);var i=new Error;o=function(t){a.onerror=a.onload=null,clearTimeout(c);var n=I[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",i.name="ChunkLoadError",i.type=r,i.request=o,n[1](i)}I[e]=void 0}};var c=setTimeout((function(){o({type:"timeout",target:a})}),12e4);a.onerror=a.onload=o,document.head.appendChild(a)}return Promise.all(t)},k.m=e,k.c=A,k.d=function(e,t,n){k.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,t){if(1&t&&(e=k(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(k.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)k.d(n,r,function(t){return e[t]}.bind(null,r));return n},k.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(t,"a",t),t},k.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},k.p="/beta/apps/patch/",k.oe=function(e){throw console.error(e),e},k.h=function(){return i};var T=window.webpackJsonp=window.webpackJsonp||[],C=T.push.bind(T);T.push=t,T=T.slice();for(var R=0;R<T.length;R++)t(T[R]);var x=C;L.push([447,5]),n()}({105:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d})),n.d(t,"d",(function(){return p}));var r=n(57),o=n.n(r),a=n(33),i=n(2),c=n.n(i),u=n(20),s=function(e,t){return c.a.useCallback((function(n,r){return t({offset:Object(u.g)(r,e)})}))},l=function(e,t){var n=c.a.useMemo((function(){return Object(u.c)(e,t)}),[e,t]),r=o()(n,2);return[r[0],r[1]]},d=function(e){return c.a.useCallback((function(t,n){return e({limit:Object(u.f)(n),offset:0})}))},p=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=c.a.useCallback((function(r,o,i){var c=e[o-n].key;i===a.a.desc&&(c="-"+c),t({sort:c})}));return r}},11:function(e,t,n){"use strict";n.d(t,"l",(function(){return r})),n.d(t,"h",(function(){return o})),n.d(t,"o",(function(){return a})),n.d(t,"a",(function(){return i})),n.d(t,"n",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"d",(function(){return s})),n.d(t,"i",(function(){return l})),n.d(t,"m",(function(){return d})),n.d(t,"p",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"j",(function(){return y})),n.d(t,"k",(function(){return b})),n.d(t,"b",(function(){return m})),n.d(t,"f",(function(){return v})),n.d(t,"e",(function(){return h}));var r="FETCH_APPLICABLE_ADVISORIES",o="EXPAND_ADVISORY_ROW",a="SELECT_ADVISORY_ROW",i="CHANGE_ADVISORY_LIST_PARAMS",c="FETCH_SYSTEMS",u="CHANGE_SYSTEMS_LIST_PARAMS",s="CHANGE_SYSTEM_SYSTEMS_LIST_PARAMS",l="EXPAND_SYSTEM_ADVISORY_ROW",d="FETCH_APPLICABLE_SYSTEM_ADVISORIES",p="SELECT_SYSTEM_ADVISORY_ROW",f="CLEAR_SYSTEM_ADVISORIES",y="FETCH_ADVISORY_DETAILS",b="FETCH_AFFECTED_SYSTEMS",m="CHANGE_AFFECTED_SYSTEMS_PARAMS",v="CLEAR_AFFECTED_SYSTEMS",h="CLEAR_ADVISORY_DETAILS"},20:function(e,t,n){"use strict";n.d(t,"c",(function(){return h})),n.d(t,"e",(function(){return O})),n.d(t,"a",(function(){return g})),n.d(t,"h",(function(){return j})),n.d(t,"g",(function(){return w})),n.d(t,"f",(function(){return E})),n.d(t,"d",(function(){return P})),n.d(t,"i",(function(){return S})),n.d(t,"j",(function(){return D})),n.d(t,"b",(function(){return _})),n.d(t,"k",(function(){return A}));var r=n(28),o=n.n(r),a=n(57),i=n.n(a),c=n(126),u=n(127),s=n(128),l=n(33),d=n(295),p=n.n(d),f=n(2),y=n.n(f),b=n(90),m=n(52);function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(e,t){return[t/e+1,e]},O=function(e,t,n){if(t){var r=i()(t,1)[0],o="-"===r[0]?l.a.desc:l.a.asc;return r=r.replace(/^(-|\+)/,""),{index:p()(e,(function(e){return e.key===r}))+n,direction:o}}return{}},g=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{}))},j=function(e,t){return e[t/2].id},w=function(e,t){return e*t-t},E=function(e){return e};function P(e){var t=i()(e,3),n=t[0],r=t[1],o=t[2];return y.a.createElement("div",null,[n,r,o].every((function(e){return 0===e}))&&"No applicable advisories",0!==n&&y.a.createElement("span",{className:"icon-with-label"},y.a.createElement(c.b,null),n.toString()),0!==r&&y.a.createElement("span",{className:"icon-with-label"},y.a.createElement(u.b,null),r.toString()),0!==o&&y.a.createElement("span",{className:"icon-with-label"},y.a.createElement(s.b,{color:"var(--pf-global--warning-color--100)"}),o.toString()))}function S(e){return m.a.find((function(t){return t.id===e}))||m.a[0]}function D(e,t){return-1!==location.href.indexOf("patch")?y.a.createElement(b.a,{to:"/advisories/"+e},void 0===t?e:t):y.a.createElement("a",{href:"".concat(document.baseURI,"rhel/patch/advisories/").concat(e)},t||e)}var _=function(e){return Object.keys(e).filter((function(t){return e[t]}))},A=function(e,t){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"patch-advisory:".concat(e),description:e}})),systems:t}}},227:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,"span.patchman-label{display:inline-block;font-size:var(--pf-global--FontSize--sm);font-weight:var(--pf-global--FontWeight--bold);line-height:var(--pf-global--LineHeight--sm);color:var(--pf-global--Color--100)}\n",""])},228:function(e,t,n){(t=e.exports=n(5)(!1)).i(n(445),""),t.push([e.i,":root{--ins-color--orange: #ec7a08}button:focus{outline:none}.icon-with-label:not(:last-child){margin-right:var(--pf-global--spacer--sm)}.icon-with-label>svg{margin-right:var(--pf-global--spacer--xs)}\n",""])},237:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var r=n(68),o=n(56),a=[{title:"Name",cellFormatters:[r.b],transforms:[o.a],key:"name"},{title:"Publish date",transforms:[o.a],key:"public_date"},{title:"Type",transforms:[o.a],key:"type"},{title:"Applicable Systems",transforms:[o.a],key:"applicable_systems"},{title:"Synopsis",transforms:[o.a],key:"synopsis"}],i=[{title:"Name",cellFormatters:[r.b],transforms:[o.a],key:"name"},{title:"Publish date",transforms:[o.a],key:"public_date"},{title:"Type",transforms:[o.a],key:"type"},{title:"Synopsis",transforms:[o.a],key:"synopsis"}]},238:function(e,t,n){"use strict";var r=n(129),o=n(1),a=n.n(o),i=n(2),c=n.n(i),u=function(e){var t=e.advisory;return c.a.createElement("span",{className:"icon-with-label"},c.a.createElement("a",{href:"https://access.redhat.com/errata/".concat(t),target:"__blank"},c.a.createElement(r.b,null)," View packages and errata at access.redhat.com"))};u.propTypes={advisory:a.a.string},t.a=u},248:function(e,t,n){"use strict";var r=n(303),o=n.n(r),a=n(131),i=n.n(a),c=n(304),u=n.n(c),s=n(1),l=n.n(s),d=n(2),p=n.n(d),f=n(130),y=n(288),b=n(291),m=n(150),v=n.n(m),h=n(142),O=n.n(h),g=n(143),j=n.n(g),w=n(144),E=n.n(w),P=n(145),S=n.n(P),D=n(146),_=n.n(D),A=n(72);function I(e){return function(t){function n(e){var t;return O()(this,n),(t=E()(this,S()(n).call(this,e))).state={component:null},t}return _()(n,t),j()(n,[{key:"componentDidMount",value:function(){var t,n;return v.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,v.a.awrap(e());case 2:t=r.sent,n=t.default,this.setState({component:n});case 5:case"end":return r.stop()}}),null,this)}},{key:"render",value:function(){var e=this.state.component;return e?p.a.createElement(e,this.props):p.a.createElement(A.Skeleton,null)}}]),n}(d.Component)}n.d(t,"b",(function(){return R})),n.d(t,"a",(function(){return N}));var L=I((function(){return n.e(0).then(n.bind(null,456))})),k=I((function(){return n.e(4).then(n.bind(null,457))})),T=I((function(){return n.e(3).then(n.bind(null,458))})),C=I((function(){return n.e(1).then(n.bind(null,459))})),R={advisories:{title:"Applicable Advisories",to:"/"},systems:{title:"Systems",to:"/systems"},inventoryDetail:{title:"Inventory Detail",to:"/systems/:inventoryId"},advisoryDetail:{title:"Advisory Detail",to:"/advisories/:advisoryId"},advisoryDetailSystem:{title:"",to:"/advisories/:advisoryId/:inventoryId"}},x=function(e){var t=e.component,n=e.rootClass,r=i()(e,["component","rootClass"]),a=document.getElementById("root");return a.removeAttribute("class"),a.classList.add("page__".concat(n),"pf-c-page__main"),a.setAttribute("role","main"),p.a.createElement(f.a,o()({},r,{component:t}))};x.propTypes={component:l.a.func,rootClass:l.a.string};var N=function(e){var t=e.childProps.location.pathname;return p.a.createElement(y.a,null,p.a.createElement(b.a,{from:R.advisoryDetailSystem.to,to:R.inventoryDetail.to}),p.a.createElement(x,{path:R.inventoryDetail.to,component:T}),p.a.createElement(x,{exact:!0,path:R.systems.to,component:k}),p.a.createElement(x,{exact:!0,path:R.advisoryDetail.to,component:C}),p.a.createElement(x,{exact:!0,path:R.advisories.to,component:L,rootClass:"Patchman"}),p.a.createElement(f.a,{render:function(){return u()(R,(function(e){return e.to===t}))||p.a.createElement(b.a,{to:R.advisories.to})}}))};N.propTypes={childProps:l.a.shape({location:l.a.shape({pathname:l.a.string})})}},249:function(e,t,n){"use strict";var r=n(302),o=n.n(r),a=n(306),i=n(28),c=n.n(i),u=n(11);function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:{attributes:{}},isLoading:!0},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u.j+"_FULFILLED":return l({},e,{isLoading:!1,data:t.payload.data});case u.j+"_PENDING":return l({},e,{isLoading:!0});case u.e:return d;default:return e}},f=n(52),y=n(20);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.b,t=arguments.length>1?arguments[1]:void 0,n=m({},e);switch(t.type){case u.l+"_FULFILLED":return n.rows=t.payload.data,n.metadata=t.payload.meta,n.isLoading=!1,n;case u.l+"_PENDING":return n.isLoading=!0,n;case u.a:return n.queryParams=m({},n.queryParams,{},t.payload),n;case u.h:var r=Object(y.a)(n.expandedRows,t.payload);return n=m({},n,{expandedRows:r});case u.o:var o=Object(y.a)(n.selectedRows,t.payload);return n=m({},n,{selectedRows:o});default:return e}};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.b,t=arguments.length>1?arguments[1]:void 0,n=O({},e);switch(t.type){case u.k+"_PENDING":return n.isLoading=!0,n;case"SELECT_ENTITY":var r=Object(y.a)(n.selectedRows,[{rowId:t.payload.id,value:t.payload.selected}]);return n=O({},n,{selectedRows:r});case u.k+"_FULFILLED":return n.rows=t.payload.data,n.metadata=t.payload.meta,n.isLoading=!1,n;case u.f:return n.queryParams=O({},n.queryParams,{},t.payload),n;default:return e}};function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.b,t=arguments.length>1?arguments[1]:void 0,n=w({},e);switch(t.type){case u.m+"_FULFILLED":return n.rows=t.payload.data,n.metadata=t.payload.meta,n.isLoading=!1,n;case u.m+"_PENDING":return n.isLoading=!0,n;case u.d:return n.queryParams=w({},n.queryParams,{},t.payload),n;case u.i:var r=Object(y.a)(n.expandedRows,t.payload);return n=w({},n,{expandedRows:r});case u.p:var o=Object(y.a)(n.selectedRows,t.payload);return n=w({},n,{selectedRows:o});case u.g:return f.b;default:return e}},P=n(292);function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _,A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.b,t=arguments.length>1?arguments[1]:void 0,n=D({},e);switch(t.type){case u.n+"_PENDING":return n.isLoading=!0,n;case u.n+"_FULFILLED":return n.rows=t.payload.data,n.metadata=t.payload.meta,n.isLoading=!1,n;case u.c:return n.queryParams=D({},n.queryParams,{},t.payload),n;default:return e}};function I(){if(_)throw new Error("store already initialized");for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(_=new o.a({},[Object(a.a)()].concat(t))).register({AdvisoryListStore:v,SystemsListStore:A,SystemDetailStore:P.a,SystemAdvisoryListStore:E,AdvisoryDetailStore:p,AffectedSystemsStore:g}),_}function L(){return _.getStore()}function k(){var e;return(e=_).register.apply(e,arguments)}n.d(t,"b",(function(){return I})),n.d(t,"a",(function(){return L})),n.d(t,"c",(function(){return k}))},250:function(e,t,n){"use strict";var r=n(247),o=n.n(r),a=n(270),i=n(271),c=n(239),u=n(2),s=n.n(u),l=n(226),d=n(126),p=n(127),f=n(128),y=n(1),b=n.n(y),m=[{title:"Unknown",icon:s.a.createElement(l.b,null)},{title:"Enhancement",icon:s.a.createElement(d.b,null)},{title:"Bugfix",icon:s.a.createElement(p.b,null)},{title:"Security",icon:s.a.createElement(f.b,null)}],v=function(e){var t=e.type,n=m[t]||m[0];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"icon-with-label"},n.icon,n.title))};v.propTypes={type:b.a.number};var h=v,O=(n(439),function(e){var t=e.children;return s.a.createElement("span",{className:"patchman-label"},t)});O.propTypes={children:b.a.any};var g=O,j=n(238),w=n(20);n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return P})),n.d(t,"c",(function(){return S}));var E=function(e,t,n){return o()(e,(function(e,r){return[{id:e.id,isOpen:!0===t[e.id],selected:!0===n[e.id],cells:[{title:Object(w.j)(e.id)},{title:Object(c.processDate)(e.attributes.public_date)},{title:s.a.createElement(h,{type:e.attributes.advisory_type})},{title:Object(w.j)(e.id,e.attributes.applicable_systems)},e.attributes.synopsis]},{cells:[{title:s.a.createElement(a.a,null,s.a.createElement(g,null,"Description"),s.a.createElement(i.a,{component:i.b.p},e.attributes.description),s.a.createElement(j.a,{advisory:e.id}))}],parent:2*r}]}))},P=function(e,t,n){return o()(e,(function(e,r){return[{id:e.id,isOpen:!0===t[e.id],selected:!0===n[e.id],cells:[{title:Object(w.j)(e.id)},{title:Object(c.processDate)(e.attributes.public_date)},{title:s.a.createElement(h,{type:e.attributes.advisory_type})},e.attributes.synopsis]},{cells:[{title:s.a.createElement(a.a,null,s.a.createElement(g,null,"Description"),s.a.createElement(i.a,{component:i.b.p},e.attributes.description),s.a.createElement(j.a,{advisory:e.id}))}],parent:2*r}]}))},S=function(e){return e&&e.map((function(e){return{id:e.id,key:e.id,applicable_advisories:[e.attributes.rhea_count||0,e.attributes.rhba_count||0,e.attributes.rhsa_count||0]}}))||[]}},280:function(e,t,n){"use strict";var r=n(57),o=n.n(r),a=n(39),i=n(80),c=n(1),u=n.n(c),s=n(2),l=n.n(s);var d=function(e){var t=e.data,n=e.onRemediationCreated,r=l.a.useState(!1),c=o()(r,2),u=c[0],s=c[1];return l.a.useEffect((function(){return(insights.experimental&&insights.experimental.loadRemediations||insights.loadRemediations)({react:l.a,reactCore:a,pfReactTable:i}).then((function(e){return s(e)})),function(){return s(!1)}}),[]),l.a.useEffect((function(){u&&u.openWizard(t).then((function(e){return e&&n(e)}))}),[u]),l.a.createElement(l.a.Fragment,null,u.RemediationWizard&&l.a.createElement(u.RemediationWizard,null))};d.propTypes={data:u.a.object,onRemediationCreated:u.a.func},d.defaultProps={onRemediationCreated:function(e){return e}},t.a=d},292:function(e,t,n){"use strict";var r=n(28),o=n.n(r),a=n(2),i=n.n(a),c=n(40),u=n(293),s=n(237),l=n(83),d=n(250),p=n(20),f=n(105);function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){var e=Object(c.useDispatch)(),t=Object(c.useSelector)((function(e){return e.SystemAdvisoryListStore.rows})),n=Object(c.useSelector)((function(e){return e.entityDetails.entity})),r=Object(c.useSelector)((function(e){return e.SystemAdvisoryListStore.expandedRows})),o=Object(c.useSelector)((function(e){return e.SystemAdvisoryListStore.queryParams})),a=Object(c.useSelector)((function(e){return e.SystemAdvisoryListStore.selectedRows})),y=Object(c.useSelector)((function(e){return e.SystemAdvisoryListStore.metadata})),m=Object(c.useSelector)((function(e){return e.SystemAdvisoryListStore.isLoading})),v=i.a.useMemo((function(){return Object(d.b)(t,r,a)}),[t,r,a]);i.a.useEffect((function(){return function(){return e(Object(l.g)())}}),[]),i.a.useEffect((function(){e(Object(l.l)(b({id:n.id},o)))}),[o]);var h=i.a.useCallback((function(n,r,o){return e(Object(l.i)({rowId:Object(p.h)(t,r),value:o}))})),O=i.a.useCallback((function(n,r,o){return e(Object(l.p)({rowId:Object(p.h)(t,o),value:r}))})),g=Object(f.d)(s.b,E,2),j=Object(f.c)(y.limit,E),w=Object(f.b)(E);function E(t){e(Object(l.c)(b({id:n.id},t)))}return i.a.createElement(i.a.Fragment,null,i.a.createElement(u.a,{columns:s.b,rows:v,metadata:y,onCollapse:h,onSelect:O,onSetPage:j,onPerPageSelect:w,onSort:g,isLoading:m,remediationProvider:function(){return Object(p.k)(Object(p.b)(a),n.id)},selectedRows:a,systemId:n.id}))};function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n.d(t,"a",(function(){return g}));var O={loaded:!1},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_ENTITY_FULFILLED":case"LOAD_ENTITY_REJECTED":return h({},e,{loaded:!0,activeApps:[{title:"System Patching",name:"patch",component:function(){return i.a.createElement(m,null)}}]});default:return e}}},293:function(e,t,n){"use strict";var r=n(57),o=n.n(r),a=n(235),i=n(33),c=n(287),u=n(285),s=n(72),l=n(1),d=n.n(l),p=n(2),f=n.n(p),y=n(280),b=n(20),m=n(286),v=function(e){var t=e.page,n=e.perPage,r=e.onSetPage,o=e.totalItems;return f.a.createElement(s.TableToolbar,null,f.a.createElement(m.a,{itemCount:o,perPage:n,page:t,onSetPage:r,widgetId:"pagination-options-menu-bottom",variant:m.b.bottom}))};v.propTypes={onSetPage:d.a.func,page:d.a.number,perPage:d.a.number,totalItems:d.a.number};var h=v,O=function(e){var t=e.columns,n=e.rows,r=e.onCollapse,l=e.onSelect,d=e.onSetPage,p=e.onPerPageSelect,m=e.onSort,v=e.metadata,O=e.isLoading,g=e.remediationProvider,j=e.selectedRows,w=f.a.useState((function(){return function(){return null}})),E=o()(w,2),P=E[0],S=E[1],D=f.a.useMemo((function(){return Object(b.c)(v.limit,v.offset)}),[v.limit,v.offset]),_=o()(D,2),A=_[0],I=_[1],L=f.a.useMemo((function(){return Object(b.e)(t,v.sort,2)}),[v.sort]);return f.a.createElement(f.a.Fragment,null,f.a.createElement(s.PrimaryToolbar,{pagination:{itemCount:v.total_items,page:A,perPage:I,isCompact:!1,onSetPage:d,onPerPageSelect:p},filterConfig:{items:[]}},g&&f.a.createElement(f.a.Fragment,null,f.a.createElement(a.a,{isDisabled:0===Object(b.b)(j).length,onClick:function(){return e=g(),void S((function(){return function(){return f.a.createElement(y.a,{data:e})}}));var e}},"Apply"),f.a.createElement(P,null))),O?f.a.createElement(s.SkeletonTable,{colSize:5,rowSize:20}):f.a.createElement(f.a.Fragment,null,f.a.createElement(i.b,{"aria-label":"Advisories table",cells:t,onSelect:l,rows:n,onCollapse:r,onSort:m,sortBy:L},f.a.createElement(c.a,null),f.a.createElement(u.a,null)),f.a.createElement(h,{totalItems:v.total_items,perPage:I,page:A,onSetPage:d})))};O.propTypes={columns:d.a.array,rows:d.a.array,onCollapse:d.a.func,onSelect:d.a.func,onSetPage:d.a.func,onPerPageSelect:d.a.func,onSort:d.a.func,metadata:d.a.object,isLoading:d.a.bool,remediationProvider:d.a.func,selectedRows:d.a.object};t.a=O},439:function(e,t,n){var r=n(227);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(227,(function(){var t=n(227);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},444:function(e,t,n){var r=n(228);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(228,(function(){var t=n(228);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},447:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n.n(r),a=n(29),i=n.n(a),c=n(282),u=n(40),s=n(249),l=n(142),d=n.n(l),p=n(143),f=n.n(p),y=n(144),b=n.n(y),m=n(145),v=n.n(m),h=n(146),O=n.n(h),g=n(1),j=n.n(g),w=n(290),E=(n(444),n(248)),P=function(e){function t(){return d()(this,t),b()(this,v()(t).apply(this,arguments))}return O()(t,e),f()(t,[{key:"componentDidMount",value:function(){var e=this;insights.chrome.init(),insights.chrome.identifyApp("patch"),insights.chrome.navigation([]),this.appNav=insights.chrome.on("APP_NAVIGATION",(function(t){return e.props.history.push("/".concat(t.navId))})),this.buildNav=this.props.history.listen((function(){return insights.chrome.navigation([])}))}},{key:"componentWillUnmount",value:function(){this.appNav(),this.buildNav()}},{key:"render",value:function(){return o.a.createElement(E.a,{childProps:this.props})}}]),t}(r.Component);P.propTypes={history:j.a.object};var S=Object(w.a)(Object(u.connect)()(P));var D=function(e){var t="/",n=e.split("/");return n.shift(),"beta"===n[0]&&(n.shift(),t="/beta/"),"".concat(t).concat(n[0],"/").concat(n[1]||"")};i.a.render(o.a.createElement(u.Provider,{store:Object(s.b)().getStore()},o.a.createElement(c.a,{basename:D(window.location.pathname)},o.a.createElement(S,null))),document.getElementById("root"))},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var r={rows:[],metadata:{limit:25,offset:0,total_items:0},expandedRows:{},selectedRows:{},queryParams:{}},o=[{id:0,name:"N/A",color:"var(--pf-global--Color--200)"},{id:1,name:"None",color:"var(--pf-global--Color--200)"},{id:2,name:"Low",color:"var(--pf-global--Color--200)"},{id:3,name:"Moderate",color:"var(--pf-global--warning-color--100)"},{id:4,name:"Important",color:"#ec7a08"},{id:5,name:"Critical",color:"var(--pf-global--danger-color--100)"}]},83:function(e,t,n){"use strict";var r=n(131),o=n.n(r),a=n(28),i=n.n(a);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(n&&"get"===t){var o=Object.keys(n).map((function(e){return[encodeURIComponent(e).concat("=").concat(encodeURIComponent(n[e]))]})).join("&");e=e.concat("?").concat(o)}return window.insights.chrome.auth.getUser().then((function(){return fetch("/api/patch/v1"+e,{method:t,credentials:"include",body:JSON.stringify(r)})})).then((function(e){if(!e.ok)throw-1!==e.headers.get("content-type").indexOf("json")?e.json():new Promise((function(t){return t({errors:[{status:e.status,detail:e.statusText}]})}));return e.json()})).catch((function(e){e=Promise.resolve(e||{});var t={detail:"There was an error getting data. Reload the page and try again"};return e.then((function(e){throw function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e.errors&&e.errors[0]||t)}))}))}var s=n(11);n.d(t,"k",(function(){return l})),n.d(t,"l",(function(){return d})),n.d(t,"m",(function(){return p})),n.d(t,"n",(function(){return f})),n.d(t,"a",(function(){return y})),n.d(t,"c",(function(){return b})),n.d(t,"d",(function(){return m})),n.d(t,"b",(function(){return v})),n.d(t,"h",(function(){return h})),n.d(t,"i",(function(){return O})),n.d(t,"o",(function(){return g})),n.d(t,"p",(function(){return j})),n.d(t,"g",(function(){return w})),n.d(t,"f",(function(){return E})),n.d(t,"e",(function(){return P})),n.d(t,"j",(function(){return S}));var l=function(e){return{type:s.l,payload:new Promise((function(t){t(function(e){return u("/advisories","get",e)}(e))})).then((function(e){return e}))}},d=function(e){return{type:s.m,payload:new Promise((function(t){t(function(e){var t=e.id,n=o()(e,["id"]);return u("/systems/".concat(t,"/advisories"),"get",n)}(e))})).then((function(e){return e}))}},p=function(e){return{type:s.j,payload:new Promise((function(t){t(function(e){return u("/advisories/".concat(e.advisoryName),"get")}(e))})).then((function(e){return e}))}},f=function(e){return{type:s.n,payload:new Promise((function(t){t(function(e){return u("/systems","get",e)}(e))})).then((function(e){return e}))}},y=function(e){return{type:s.a,payload:e}},b=function(e){return{type:s.d,payload:e}},m=function(e){return{type:s.c,payload:e}},v=function(e){return{type:s.b,payload:e}},h=function(e){return{type:s.h,payload:[].concat(e)}},O=function(e){return{type:s.i,payload:[].concat(e)}},g=function(e){return{type:s.o,payload:[].concat(e)}},j=function(e){return{type:s.p,payload:[].concat(e)}},w=function(){return{type:s.g,payload:[]}},E=function(){return{type:s.f,payload:[]}},P=function(){return{type:s.e,payload:[]}},S=function(e){return{type:s.k,payload:new Promise((function(t){t(function(e){var t=e.id;return u("/advisories/".concat(t,"/systems"))}(e))})).then((function(e){return e}))}}}});
//# sourceMappingURL=App.js.map