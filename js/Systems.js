(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{795:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},797:function(t,e,r){var n=r(800),o=r(801),c=r(802);t.exports=function(t){return n(t)||o(t)||c()}},800:function(t,e){t.exports=function(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}},801:function(t,e){t.exports=function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}},802:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},803:function(t,e,r){"use strict";r.d(e,"a",(function(){return p}));var n=r(797),o=r.n(n),c=r(31),i=r.n(c),a=r(70);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={columns:[],rows:[],entities:[]};function l(t,e){if(e.loaded){var r=e.columns.filter((function(t){return"updated"===t.key}));return r=[u({},r[0],{transforms:[a.a]})],u({},e,{columns:[].concat(o()(t||[]),o()(r||[]))})}return e}var p=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOAD_ENTITIES_FULFILLED":return l(t,e);default:return e}}}},804:function(t,e,r){"use strict";r.d(e,"a",(function(){return a})),r.d(e,"b",(function(){return s}));var n=r(218),o=r(70),c=r(74),i=r(16),a=(r(805),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[Object(n.b)("col-width-40"),o.a]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[Object(n.b)("col-width-30")],renderFunc:function(t){return Object(i.f)(t)}}]),s=function(t){return[{title:"Apply all applicable advisories",onClick:function(e,r,n){Object(c.d)({id:n.id,limit:1e4}).then((function(e){return t(Object(i.q)(e.data.map((function(t){return t.id})),n.id))}))}}]}},805:function(t,e,r){var n=r(795);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},c=r(7)(n,o);n.locals&&(t.exports=n.locals),t.hot.accept(795,(function(){var e=r(795);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var r,n=0;for(r in t){if(!e||t[r]!==e[r])return!1;n++}for(r in e)n--;return 0===n}(n.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(e)})),t.hot.dispose((function(){c()}))},833:function(t,e,r){"use strict";r.r(e);var n=r(797),o=r.n(n),c=r(196),i=r.n(c),a=r(31),s=r.n(a),u=r(319),f=r.n(u),l=r(44),p=r.n(l),b=r(60),O=r(129),d=r(91),y=r(796),m=r(2),j=r.n(m),v=r(37),h=r(92),w=r(327),g=r(798),S=r(318),P=r(320),E=r(81),D=r(803),k=r(14),A=r(321),L=r(16),x=r(122),_=r(323),I=r(804);function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(){var t=Object(v.useDispatch)(),e=j.a.useState(),r=p()(e,2),n=r[0],c=r[1],a=j.a.useState((function(){return function(){return null}})),s=p()(a,2),u=s[0],l=s[1],m=Object(v.useSelector)((function(t){return t.SystemsListStore.rows})),C=j.a.useMemo((function(){return Object(A.c)(m)}),[m]),F=Object(v.useSelector)((function(t){return t.SystemsListStore.error})),M=Object(v.useSelector)((function(t){return t.SystemsListStore.status})),R=Object(v.useSelector)((function(t){return t.SystemsListStore.metadata})),q=Object(v.useSelector)((function(t){return t.SystemsListStore.queryParams})),J=Object(v.useSelector)((function(t){var e=t.entities;return e&&e.columns})),N=q.filter,B=q.search,H=Object(x.a)(R,Q);j.a.useEffect((function(){t(Object(E.n)(q))}),[q]);var U=function(){var t=f()(i.a.mark((function t(){var e,r,n,o,a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.loadInventory({react:j.a,reactRouterDom:h,reactCore:b,reactIcons:O,pfReactTable:d});case 2:e=t.sent,r=e.inventoryConnector,n=e.mergeWithEntities,Object(P.c)(T({},n(Object(D.a)(I.a)))),o=r(Object(P.a)()),a=o.InventoryTable,c((function(){return a}));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();j.a.useEffect((function(){U()}),[]);var W=Object(x.b)(R.limit,R.offset),z=p()(W,2),G=z[0],K=z[1];function Q(e){t(Object(E.d)(e))}var V=Object(x.d)(N,Q),X={items:[Object(w.a)(Q,B,"Search systems")]},Y={filters:Object(L.c)(N,B),onDelete:V},Z=function(){var t=J&&J.filter((function(t){return"updated"===t.key}))[0];return t=T({},t,{key:"last_upload"}),[].concat(o()(I.a),[t])},$=Object(x.f)(Z(),Q),tt=j.a.useMemo((function(){return Object(L.g)(Z(),R.sort,0)}),[R.sort]);return j.a.createElement(j.a.Fragment,null,j.a.createElement(g.a,{title:"Patch",showTabs:!0}),j.a.createElement(u,null),j.a.createElement(y.Main,null,M===k.b?j.a.createElement(S.a,{message:F.detail}):n&&j.a.createElement(n,{items:C,page:G,total:R.total_items,perPage:K,isLoaded:M===k.c,onRefresh:H,hasCheckbox:!1,actions:Object(I.b)((function(t){l((function(){return function(){return j.a.createElement(_.a,{data:t})}}))})),filterConfig:X,activeFiltersConfig:Y,tableProps:{areActionsDisabled:function(t){return t.applicable_advisories.every((function(t){return 0===t}))},onSort:$,sortBy:tt}})))}}}]);
//# sourceMappingURL=Systems.js.map