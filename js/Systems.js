(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{690:function(e,t,r){"use strict";r.r(t);var n=r(708),o=r.n(n),a=r(712),c=r.n(a),i=r(28),s=r.n(i),u=r(713),l=r.n(u),f=r(41),b=r.n(f),p=r(18),d=r(211),O=r(697),y=r(0),m=r.n(y),j=r(34),v=r(118),S=r(717),h=r(166),w=r(699),g=r(165),E=r(338),P=r(51),T=r(714),k=r(66),D=r(11),x=r(169),_=r(13),A=r(86),L=r(341),I=r(715);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=Object(j.useDispatch)(),t=m.a.useState(),r=b()(t,2),n=r[0],a=r[1],i=m.a.useState((function(){return function(){return null}})),s=b()(i,2),u=s[0],f=s[1],y=Object(j.useSelector)((function(e){return e.SystemsListStore.rows})),C=m.a.useMemo((function(){return Object(x.d)(y)}),[y]),B=Object(j.useSelector)((function(e){return e.SystemsListStore.error})),F=Object(j.useSelector)((function(e){return e.SystemsListStore.status})),M=Object(j.useSelector)((function(e){return e.SystemsListStore.metadata})),G=Object(j.useSelector)((function(e){return e.SystemsListStore.queryParams})),H=Object(j.useSelector)((function(e){var t=e.entities;return t&&t.columns})),J=G.filter,N=G.search,W=Object(A.a)(M,K);m.a.useEffect((function(){e(Object(P.p)(G))}),[G]);var q=function(){var e=l()(c.a.mark((function e(){var t,r,n,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:j,React:m.a,reactRouterDom:v,pfReactTable:{Table:p.Table,TableBody:p.TableBody,TableHeader:p.TableHeader,TableGridBreakpoint:p.TableGridBreakpoint,cellWidth:p.cellWidth,TableVariant:p.TableVariant,sortable:p.sortable,expandable:p.expandable,SortByDirection:p.SortByDirection},pfReact:S.reactCore});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithEntities,Object(E.c)(R({},n(Object(T.a)(I.a,"SYSTEMS_PAGE")))),o=r(Object(E.a)()),i=o.InventoryTable,a((function(){return i}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();m.a.useEffect((function(){q()}),[]);var V=Object(A.b)(M.limit,M.offset),Y=b()(V,2),U=Y[0],z=Y[1];function K(t){e(Object(P.e)(t))}var Q=Object(A.d)(J,K),X={items:[Object(h.a)(K,N,"Search systems")]},Z={filters:Object(_.c)(J,N),onDelete:Q},$=function(){var e=H&&H.filter((function(e){return"updated"===e.key}))[0];return e=R(R({},e),{},{key:"last_upload"}),[].concat(o()(I.a),[e])},ee=Object(A.f)($(),K),te=m.a.useMemo((function(){return Object(_.g)($(),M.sort,0)}),[M.sort]);return m.a.createElement(m.a.Fragment,null,m.a.createElement(w.a,{title:"Systems"}),m.a.createElement(u,null),m.a.createElement(O.Main,null,F===D.d?m.a.createElement(g.a,{message:B.detail}):n&&m.a.createElement(n,{items:C,page:U,total:M.total_items,perPage:z,isLoaded:F===D.e,onRefresh:W,exportConfig:{onSelect:function(e,t){var r=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",n="systems-".concat(r);"csv"===t?Object(k.c)(G).then((function(e){return Object(d.downloadFile)(e,n,"csv")})):Object(k.d)(G).then((function(e){return Object(d.downloadFile)(JSON.stringify(e),n,"json")}))}},hasCheckbox:!1,actions:Object(I.b)((function(e){f((function(){return function(){return m.a.createElement(L.a,{data:e})}}))})),filterConfig:X,activeFiltersConfig:Z,tableProps:{areActionsDisabled:function(e){return e.applicable_advisories.every((function(e){return 0===e}))},onSort:ee,sortBy:te}})))}},698:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},708:function(e,t,r){var n=r(709),o=r(710),a=r(445),c=r(711);e.exports=function(e){return n(e)||o(e)||a(e)||c()}},709:function(e,t,r){var n=r(446);e.exports=function(e){if(Array.isArray(e))return n(e)}},710:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},711:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},714:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r(708),o=r.n(n),a=r(28),c=r.n(a),i=r(18);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){c()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={columns:[],rows:[],entities:[]};function f(e,t,r){if(r.loaded){var n=r.columns.filter((function(e){return"updated"===e.key}));return n=[u(u({},n[0]),{},{transforms:[i.sortable]})],u(u({},r),{},{columns:[].concat(o()(e||[]),o()(n||[])),rows:(a=r.rows,c=t,a.map((function(e){var t=c&&c.find((function(t){return t.id===e.id}));return u(u({},e),{},{updated:t&&t.attributes.last_upload||e.updated})})))})}var a,c;return r}var b=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,o=n.store&&n.store.getState(),a=o&&("SYSTEMS_PAGE"===t?o.SystemsListStore:o.AffectedSystemsStore);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return f(e,a.rows,r);default:return r}}}},715:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return i}));var n=r(18),o=r(66),a=r(13),c=(r(716),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[n.sortable],props:{width:50}},{key:"packages_installed",title:"Packages",transforms:[n.sortable],props:{width:10}},{key:"applicable_advisories",title:"Applicable advisories",transforms:[n.sortable],props:{width:20},renderFunc:function(e){return Object(a.f)(e)}}]),i=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,r,n){Object(o.i)({id:n.id,limit:1e4}).then((function(t){return e(Object(a.q)(t.data.map((function(e){return e.id})),n.id))}))}}]}},716:function(e,t,r){var n=r(698);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(6)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(698,(function(){var t=r(698);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))}}]);
//# sourceMappingURL=Systems.js.map