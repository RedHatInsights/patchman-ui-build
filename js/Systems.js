(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{795:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},799:function(t,e,r){"use strict";r.d(e,"a",(function(){return f}));var n=r(800),o=r.n(n),c=r(31),i=r.n(c);function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}var s={columns:[],rows:[],entities:[]};function u(t,e){if(e.loaded){var r=e.columns.filter((function(t){return"updated"===t.key}));return function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}({},e,{columns:[].concat(o()(t||[]),o()(r||[]))})}return e}var f=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOAD_ENTITIES_FULFILLED":return u(t,e);default:return e}}}},800:function(t,e,r){var n=r(801),o=r(802),c=r(803);t.exports=function(t){return n(t)||o(t)||c()}},801:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},802:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},803:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},804:function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return a}));var n=r(218),o=r(98),c=r(18),i=(r(805),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[Object(n.b)("col-width-40")]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[Object(n.b)("col-width-30")],renderFunc:function(t){return Object(c.f)(t)}}]),a=function(t){return[{title:"Apply all applicable advisories",onClick:function(e,r,n){Object(o.d)({id:n.id,limit:1e4}).then((function(e){return t(Object(c.q)(e.data.map((function(t){return t.id})),n.id))}))}}]}},805:function(t,e,r){var n=r(795);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},c=r(7)(n,o);n.locals&&(t.exports=n.locals),t.hot.accept(795,(function(){var e=r(795);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var r,n=0;for(r in t){if(!e||t[r]!==e[r])return!1;n++}for(r in e)n--;return 0===n}(n.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(e)})),t.hot.dispose((function(){c()}))},833:function(t,e,r){"use strict";r.r(e);var n=r(196),o=r.n(n),c=r(31),i=r.n(c),a=r(318),s=r.n(a),u=r(44),f=r.n(u),l=r(65),p=r(140),b=r(90),O=r(796),d=r(2),y=r.n(d),m=r(37),j=r(89),v=r(326),h=r(797),w=r(317),g=r(319),S=r(122),P=r(799),E=r(14),D=r(320),k=r(18),A=r(121),x=r(322),L=r(804);function I(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?I(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):I(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(){var t=Object(m.useDispatch)(),e=y.a.useState(),r=f()(e,2),n=r[0],c=r[1],i=y.a.useState((function(){return function(){return null}})),a=f()(i,2),u=a[0],d=a[1],I=Object(m.useSelector)((function(t){return t.SystemsListStore.rows})),C=y.a.useMemo((function(){return Object(D.c)(I)}),[I]),T=Object(m.useSelector)((function(t){return t.SystemsListStore.error})),F=Object(m.useSelector)((function(t){return t.SystemsListStore.status})),R=Object(m.useSelector)((function(t){return t.SystemsListStore.metadata})),M=Object(m.useSelector)((function(t){return t.SystemsListStore.queryParams})),q=M.filter,J=M.search,N=Object(A.a)(R,G);y.a.useEffect((function(){t(Object(S.n)(M))}),[M]);var H=function(){var t=s()(o.a.mark((function t(){var e,r,n,i,a;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.loadInventory({react:y.a,reactRouterDom:j,reactCore:l,reactIcons:p,pfReactTable:b});case 2:e=t.sent,r=e.inventoryConnector,n=e.mergeWithEntities,Object(g.c)(_({},n(Object(P.a)(L.a)))),i=r(Object(g.a)()),a=i.InventoryTable,c((function(){return a}));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();y.a.useEffect((function(){H()}),[]);var U=Object(A.b)(R.limit,R.offset),W=f()(U,2),z=W[0],B=W[1];function G(e){t(Object(S.d)(e))}var K=Object(A.d)(q,G),Q={items:[Object(v.a)(G,J,"Search systems")]},V={filters:Object(k.c)(q,J),onDelete:K};return y.a.createElement(y.a.Fragment,null,y.a.createElement(h.a,{title:"Patch",showTabs:!0}),y.a.createElement(u,null),y.a.createElement(O.Main,null,F===E.b?y.a.createElement(w.a,{message:T.detail}):n&&y.a.createElement(n,{items:C,page:z,total:R.total_items,perPage:B,onRefresh:N,hasCheckbox:!1,actions:Object(L.b)((function(t){d((function(){return function(){return y.a.createElement(x.a,{data:t})}}))})),filterConfig:Q,activeFiltersConfig:V,tableProps:{areActionsDisabled:function(t){return t.applicable_advisories.every((function(t){return 0===t}))}}})))}}}]);
//# sourceMappingURL=Systems.js.map