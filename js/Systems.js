(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{696:function(t,e,r){"use strict";r.r(e);var n=r(708),o=r.n(n),a=r(726),i=r.n(a),c=r(20),s=r.n(c),u=r(727),l=r.n(u),f=r(38),p=r.n(f),d=r(16),b=r(212),y=r(706),m=r(0),O=r.n(m),v=r(34),j=r(118),S=r(728),h=r(166),w=r(707),g=r(165),E=r(339),P=r(46),k=r(720),T=r(52),_=r(11),D=r(167),L=r(15),x=r(85),I=r(340),A=r(721);function F(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function C(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?F(Object(r),!0).forEach((function(e){s()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.default=function(){var t=Object(v.useDispatch)(),e=O.a.useState(),r=p()(e,2),n=r[0],a=r[1],c=O.a.useState((function(){return function(){return null}})),s=p()(c,2),u=s[0],f=s[1],m=Object(v.useSelector)((function(t){return t.SystemsListStore.rows})),F=O.a.useMemo((function(){return Object(D.f)(m)}),[m]),R=Object(v.useSelector)((function(t){return t.SystemsListStore.error})),B=Object(v.useSelector)((function(t){return t.SystemsListStore.status})),M=Object(v.useSelector)((function(t){return t.SystemsListStore.metadata})),N=Object(v.useSelector)((function(t){return t.SystemsListStore.queryParams})),G=Object(v.useSelector)((function(t){var e=t.entities;return e&&e.columns})),H=N.filter,J=N.search,V=Object(x.a)(M,K);O.a.useEffect((function(){t(Object(P.x)(N))}),[N]);var W=function(){var t=l()(i.a.mark((function t(){var e,r,n,o,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,insights.loadInventory({ReactRedux:v,React:O.a,reactRouterDom:j,pfReactTable:{Table:d.Table,TableBody:d.TableBody,TableHeader:d.TableHeader,TableGridBreakpoint:d.TableGridBreakpoint,cellWidth:d.cellWidth,TableVariant:d.TableVariant,sortable:d.sortable,expandable:d.expandable,SortByDirection:d.SortByDirection},pfReact:S.reactCore});case 2:e=t.sent,r=e.inventoryConnector,n=e.mergeWithEntities,Object(E.c)(C({},n(Object(k.a)(A.b,"SYSTEMS_PAGE")))),o=r(Object(E.a)()),c=o.InventoryTable,a((function(){return c}));case 8:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();O.a.useEffect((function(){W()}),[]);var U=Object(x.b)(M.limit,M.offset),Y=p()(U,2),q=Y[0],z=Y[1];function K(e){t(Object(P.g)(e))}var Q=Object(x.d)(H,K),X={items:[Object(h.a)(K,J,"Search systems")]},Z={filters:Object(L.c)(H,J),onDelete:Q},$=function(){var t=G&&G.filter((function(t){return"updated"===t.key}))[0];return t=C(C({},t),{},{key:"last_upload"}),[].concat(o()(A.b),[t])},tt=Object(x.f)($(),K),et=O.a.useMemo((function(){return Object(L.g)($(),M.sort,0)}),[M.sort]);return O.a.createElement(O.a.Fragment,null,O.a.createElement(w.a,{title:"Systems"}),O.a.createElement(u,null),O.a.createElement(y.Main,null,B===_.e?O.a.createElement(g.a,{message:R.detail}):n&&O.a.createElement(n,{isFullView:!0,items:F,page:q,total:M.total_items,perPage:z,isLoaded:B===_.f,onRefresh:V,exportConfig:{onSelect:function(t,e){var r=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",n="systems-".concat(r);"csv"===e?Object(T.c)(N).then((function(t){return Object(b.downloadFile)(t,n,"csv")})):Object(T.d)(N).then((function(t){return Object(b.downloadFile)(JSON.stringify(t),n,"json")}))}},hasCheckbox:!1,actions:Object(A.c)((function(t){f((function(){return function(){return O.a.createElement(I.a,{data:t})}}))})),filterConfig:X,activeFiltersConfig:Z,tableProps:{areActionsDisabled:function(t){return t.applicable_advisories.every((function(t){return 0===t}))},onSort:tt,sortBy:et}})))}},705:function(t,e,r){(t.exports=r(6)(!1)).push([t.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},708:function(t,e,r){var n=r(717),o=r(718),a=r(450),i=r(719);t.exports=function(t){return n(t)||o(t)||a(t)||i()}},717:function(t,e,r){var n=r(451);t.exports=function(t){if(Array.isArray(t))return n(t)}},718:function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},719:function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},720:function(t,e,r){"use strict";r.d(e,"a",(function(){return d})),r.d(e,"b",(function(){return b}));var n=r(708),o=r.n(n),a=r(20),i=r.n(a),c=r(16);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function u(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){i()(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var l={columns:[],rows:[],entities:[]};function f(t,e,r){if(r.loaded){var n=r.columns.filter((function(t){return"updated"===t.key}));return n=[u(u({},n[0]),{},{transforms:[c.sortable]})],u(u({},r),{},{columns:[].concat(o()(t||[]),o()(n||[])),rows:(a=r.rows,i=e,a.map((function(t){var e=i&&i.find((function(e){return e.id===t.id}));return u(u({},t),{},{updated:e&&e.attributes.last_upload||t.updated})})))})}var a,i;return r}function p(t,e,r){return r.loaded?u(u({},r),{},{columns:t}):r}var d=function(t,e){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,o=n.store&&n.store.getState(),a=o&&("SYSTEMS_PAGE"===e?o.SystemsListStore:o.AdvisorySystemsStore);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return f(t,a.rows,r);default:return r}}},b=function(t){return function(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,n=arguments.length>1?arguments[1]:void 0,o=n.store&&n.store.getState();switch(n.type){case"LOAD_ENTITIES_FULFILLED":return p(t,null===(e=o.PackageSystemsStore)||void 0===e||e.rows,r);default:return r}}}},721:function(t,e,r){"use strict";r.d(e,"b",(function(){return i})),r.d(e,"a",(function(){return c})),r.d(e,"c",(function(){return s}));var n=r(16),o=r(52),a=r(15),i=(r(722),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[n.sortable],props:{width:50}},{key:"packages_installed",title:"Packages",transforms:[n.sortable],props:{width:10}},{key:"applicable_advisories",title:"Applicable advisories",transforms:[n.sortable],props:{width:20},renderFunc:function(t){return Object(a.f)(t)}}]),c=[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[n.sortable],props:{width:50}},{key:"installed_version",title:"Installed version",transforms:[n.sortable],props:{width:10}},{key:"latest_version",title:"Latest version",transforms:[n.sortable],props:{width:10}},{key:"upgradable",title:"Status",props:{width:20},renderFunc:function(t){return Object(a.h)(t)}}],s=function(t){return[{title:"Apply all applicable advisories",onClick:function(e,r,n){Object(o.i)({id:n.id,limit:1e4}).then((function(e){return t(Object(a.s)(e.data.map((function(t){return t.id})),n.id))}))}}]}},722:function(t,e,r){var n=r(705);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(7)(n,o);n.locals&&(t.exports=n.locals),t.hot.accept(705,(function(){var e=r(705);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var r,n=0;for(r in t){if(!e||t[r]!==e[r])return!1;n++}for(r in e)n--;return 0===n}(n.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))}}]);
//# sourceMappingURL=Systems.js.map