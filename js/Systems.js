(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{658:function(e,t,r){"use strict";r.r(t);var n=r(676),o=r.n(n),c=r(680),a=r.n(c),i=r(31),s=r.n(i),u=r(681),l=r.n(u),f=r(41),b=r.n(f),p=r(16),d=r(205),O=r(665),y=r(0),m=r.n(y),j=r(32),v=r(109),h=r(685),S=r(159),w=r(667),g=r(155),E=r(317),P=r(50),D=r(682),T=r(65),k=r(10),x=r(161),L=r(14),I=r(83),_=r(321),A=r(683);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=Object(j.useDispatch)(),t=m.a.useState(),r=b()(t,2),n=r[0],c=r[1],i=m.a.useState((function(){return function(){return null}})),s=b()(i,2),u=s[0],f=s[1],y=Object(j.useSelector)((function(e){return e.SystemsListStore.rows})),C=m.a.useMemo((function(){return Object(x.d)(y)}),[y]),B=Object(j.useSelector)((function(e){return e.SystemsListStore.error})),F=Object(j.useSelector)((function(e){return e.SystemsListStore.status})),N=Object(j.useSelector)((function(e){return e.SystemsListStore.metadata})),M=Object(j.useSelector)((function(e){return e.SystemsListStore.queryParams})),H=Object(j.useSelector)((function(e){var t=e.entities;return t&&t.columns})),J=M.filter,W=M.search,q=Object(I.a)(N,Q);m.a.useEffect((function(){e(Object(P.p)(M))}),[M]);var G=function(){var e=l()(a.a.mark((function e(){var t,r,n,o,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:j,React:m.a,reactRouterDom:v,pfReactTable:{Table:p.Table,TableBody:p.TableBody,TableHeader:p.TableHeader,TableGridBreakpoint:p.TableGridBreakpoint,cellWidth:p.cellWidth,TableVariant:p.TableVariant,sortable:p.sortable,expandable:p.expandable,SortByDirection:p.SortByDirection},pfReact:h.reactCore});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithEntities,Object(E.c)(R({},n(Object(D.a)(A.a)))),o=r(Object(E.a)()),i=o.InventoryTable,c((function(){return i}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m.a.useEffect((function(){G()}),[]);var V=Object(I.b)(N.limit,N.offset),U=b()(V,2),z=U[0],K=U[1];function Q(t){e(Object(P.e)(t))}var X=Object(I.d)(J,Q),Y={items:[Object(S.a)(Q,W,"Search systems")]},Z={filters:Object(L.c)(J,W),onDelete:X},$=function(){var e=H&&H.filter((function(e){return"updated"===e.key}))[0];return e=R(R({},e),{},{key:"last_upload"}),[].concat(o()(A.a),[e])},ee=Object(I.f)($(),Q),te=m.a.useMemo((function(){return Object(L.g)($(),N.sort,0)}),[N.sort]);return m.a.createElement(m.a.Fragment,null,m.a.createElement(w.a,{title:"Systems"}),m.a.createElement(u,null),m.a.createElement(O.Main,null,F===k.d?m.a.createElement(g.a,{message:B.detail}):n&&m.a.createElement(n,{items:C,page:z,total:N.total_items,perPage:K,isLoaded:F===k.e,onRefresh:q,exportConfig:{onSelect:function(e,t){var r=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",n="systems-".concat(r);"csv"===t?Object(T.c)(M).then((function(e){return Object(d.downloadFile)(e,n,"csv")})):Object(T.d)(M).then((function(e){return Object(d.downloadFile)(JSON.stringify(e),n,"json")}))}},hasCheckbox:!1,actions:Object(A.b)((function(e){f((function(){return function(){return m.a.createElement(_.a,{data:e})}}))})),filterConfig:Y,activeFiltersConfig:Z,tableProps:{areActionsDisabled:function(e){return e.applicable_advisories.every((function(e){return 0===e}))},onSort:ee,sortBy:te}})))}},666:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},676:function(e,t,r){var n=r(677),o=r(678),c=r(421),a=r(679);e.exports=function(e){return n(e)||o(e)||c(e)||a()}},677:function(e,t,r){var n=r(422);e.exports=function(e){if(Array.isArray(e))return n(e)}},678:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},679:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},682:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(676),o=r.n(n),c=r(31),a=r.n(c),i=r(16);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={columns:[],rows:[],entities:[]};function f(e,t){if(t.loaded){var r=t.columns.filter((function(e){return"updated"===e.key}));return r=[u(u({},r[0]),{},{transforms:[i.sortable]})],u(u({},t),{},{columns:[].concat(o()(e||[]),o()(r||[]))})}return t}var b=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOAD_ENTITIES_FULFILLED":return f(e,t);default:return t}}}},683:function(e,t,r){"use strict";r.d(t,"a",(function(){return a})),r.d(t,"b",(function(){return i}));var n=r(16),o=r(65),c=r(14),a=(r(684),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[Object(n.classNames)("col-width-40"),n.sortable]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[Object(n.classNames)("col-width-30"),n.sortable],renderFunc:function(e){return Object(c.f)(e)}}]),i=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,r,n){Object(o.i)({id:n.id,limit:1e4}).then((function(t){return e(Object(c.q)(t.data.map((function(e){return e.id})),n.id))}))}}]}},684:function(e,t,r){var n=r(666);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},c=r(9)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(666,(function(){var t=r(666);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");c(t)})),e.hot.dispose((function(){c()}))}}]);
//# sourceMappingURL=Systems.js.map