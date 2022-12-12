(()=>{var e,t,r={78056:(e,t,r)=>{"use strict";var n=r(4942),o=r(15861),s=r(29439),a=r(64687),c=r.n(a),i=r(8400),u=r.n(i);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l=1e3,v=function(e){return function(t){return fetch("/api/patch/v1/views".concat(e),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return 200===e.status?e.json():Promise.reject(e.statusText)}))}},d=function(e){return{issues:Object.keys((null==e?void 0:e.data)||{}).map((function(t){return{id:"patch-advisory:".concat(t),description:t,systems:e.data[t]}}))}},h=function(e){var t=[];return Object.entries(e.data).map((function(e){var r=(0,s.Z)(e,2),n=r[0];r[1].map((function(e){var r="patch-advisory:".concat(e),o=t.findIndex((function(e){return e.id===r}));o>=0?t[o].systems.push(n):t.push({id:r,description:e,systems:[n]})}))})),{issues:t}},b=function(){var e=(0,o.Z)(c().mark((function e(t,r){var n,a,i,p,v,d,h,b;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=r.responseTransformer,a=r.dataFetcher,i=r.payloadModifier,p=u()(t,l),v=function(){var e=(0,o.Z)(c().mark((function e(r,o){var s,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=[],u=0;case 2:if(!(u<o.length)){e.next=11;break}return e.t0=s,e.next=6,a(f(f({},i(t)),{},{limit:l,offset:(5*r+u)*l})).then((function(e){return n(e)}));case 6:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 8:u++,e.next=2;break;case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=[],h=function(e){d.push(new Promise((function(t,r){setTimeout((0,o.Z)(c().mark((function n(){var o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,o=p.splice(0,5),n.t0=t,n.next=5,v(e,o);case 5:n.t1=n.sent,(0,n.t0)(n.t1),n.next=12;break;case 9:n.prev=9,n.t2=n.catch(0),r("Loading issues failed");case 12:case"end":return n.stop()}}),n,null,[[0,9]])}))),0===e?0:15e3)})))},b=0;b<Math.ceil(p.length/5);b++)h(b);return e.next=8,Promise.all(d).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[]],t=(0,s.Z)(e,1),r=t[0];return{status:"resolved",result:r.reduce((function(e,t){return{issues:e.issues.concat((null==t?void 0:t.issues)||[])}}),{issues:[]})}})).catch((function(e){return{status:"rejected",error:e}}));case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}();onmessage=function(){var e=(0,o.Z)(c().mark((function e(){var t,r,o,s,a,i,u,p,f,l,y,m,j=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=j.length>0&&void 0!==j[0]?j[0]:{},r=t.data,s=(o=void 0===r?{}:r).remediationType,a=o.areAllSelected,i=o.payload,u=void 0===i?[]:i,f=(p="systems"===s&&!a)?"/systems/advisories":"/advisories/systems",l=p?h:d,y=function(e){return a?{}:(0,n.Z)({},s,e)},e.next=8,b(u,{dataFetcher:v(f),payloadModifier:y,responseTransformer:l});case 8:m=e.sent,postMessage(m);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},62705:(e,t,r)=>{var n=r(55639).Symbol;e.exports=n},44239:(e,t,r)=>{var n=r(62705),o=r(89607),s=r(2333),a=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):s(e)}},31957:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},89607:(e,t,r)=>{var n=r(62705),o=Object.prototype,s=o.hasOwnProperty,a=o.toString,c=n?n.toStringTag:void 0;e.exports=function(e){var t=s.call(e,c),r=e[c];try{e[c]=void 0;var n=!0}catch(e){}var o=a.call(e);return n&&(t?e[c]=r:delete e[c]),o}},65776:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},16612:(e,t,r)=>{var n=r(77813),o=r(98612),s=r(65776),a=r(13218);e.exports=function(e,t,r){if(!a(r))return!1;var c=typeof t;return!!("number"==c?o(r)&&s(t,r.length):"string"==c&&t in r)&&n(r[t],e)}},2333:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},55639:(e,t,r)=>{var n=r(31957),o="object"==typeof self&&self&&self.Object===Object&&self,s=n||o||Function("return this")();e.exports=s},8400:(e,t,r)=>{var n=r(14259),o=r(16612),s=r(40554),a=Math.ceil,c=Math.max;e.exports=function(e,t,r){t=(r?o(e,t,r):void 0===t)?1:c(s(t),0);var i=null==e?0:e.length;if(!i||t<1)return[];for(var u=0,p=0,f=Array(a(i/t));u<i;)f[p++]=n(e,u,u+=t);return f}},77813:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},98612:(e,t,r)=>{var n=r(23560),o=r(41780);e.exports=function(e){return null!=e&&o(e.length)&&!n(e)}},23560:(e,t,r)=>{var n=r(44239),o=r(13218);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},41780:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},13218:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},37005:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},64687:(e,t,r)=>{var n=r(17061)();e.exports=n;try{regeneratorRuntime=n}catch(e){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var s=n[e]={exports:{}};return r[e](s,s.exports,o),s.exports}o.m=r,o.c=n,o.x=()=>{var e=o.O(void 0,[2079],(()=>o(78056)));return o.O(e)},e=[],o.O=(t,r,n,s)=>{if(!r){var a=1/0;for(p=0;p<e.length;p++){for(var[r,n,s]=e[p],c=!0,i=0;i<r.length;i++)(!1&s||a>=s)&&Object.keys(o.O).every((e=>o.O[e](r[i])))?r.splice(i--,1):(c=!1,s<a&&(a=s));if(c){e.splice(p--,1);var u=n();void 0!==u&&(t=u)}}return t}s=s||0;for(var p=e.length;p>0&&e[p-1][2]>s;p--)e[p]=e[p-1];e[p]=[r,n,s]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},o.f={},o.e=e=>Promise.all(Object.keys(o.f).reduce(((t,r)=>(o.f[r](e,t),t)),[])),o.u=e=>"js/"+e+".1670863336364."+o.h()+".js",o.miniCssF=e=>{},o.h=()=>"550ee935784047685ef2",o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{o.S={};var e={},t={};o.I=(r,n)=>{n||(n=[]);var s=t[r];if(s||(s=t[r]={}),!(n.indexOf(s)>=0)){if(n.push(s),e[r])return e[r];o.o(o.S,r)||(o.S[r]={}),o.S[r];var a=[];return e[r]=a.length?Promise.all(a).then((()=>e[r]=1)):1}}})(),o.p="/beta/apps/patch/",(()=>{var e={9898:1};o.f.i=(t,r)=>{e[t]||importScripts(o.p+o.u(t))};var t=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[],r=t.push.bind(t);t.push=t=>{var[n,s,a]=t;for(var c in s)o.o(s,c)&&(o.m[c]=s[c]);for(a&&a(o);n.length;)e[n.pop()]=1;r(t)}})(),t=o.x,o.x=()=>o.e(2079).then(t),o.x()})();