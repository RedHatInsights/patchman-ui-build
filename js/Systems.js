(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{457:function(e,t,n){"use strict";n.r(t);var r=n(470),a=n.n(r),c=n(463),o=n.n(c),i=n(13),s=n.n(i),u=n(464),l=n.n(u),b=n(19),f=n.n(b),O=n(8),p=n(89),j=n(461),d=n(0),y=n.n(d),m=n(18),S=n(41),v=n(170),h=n(462),g=n(162),w=n(164),T=n(33),E=n(479),P=n(30),D=n(4),k=n(165),B=n(5),x=n(54),L=n(166),C=n(480);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(m.useDispatch)(),t=y.a.useState(),n=f()(t,2),r=n[0],c=n[1],i=y.a.useState((function(){return function(){return null}})),s=f()(i,2),u=s[0],b=s[1],d=Object(m.useSelector)((function(e){return e.SystemsListStore.rows})),F=y.a.useMemo((function(){return Object(k.c)(d)}),[d]),J=Object(m.useSelector)((function(e){return e.SystemsListStore.error})),M=Object(m.useSelector)((function(e){return e.SystemsListStore.status})),R=Object(m.useSelector)((function(e){return e.SystemsListStore.metadata})),W=Object(m.useSelector)((function(e){return e.SystemsListStore.queryParams})),_=Object(m.useSelector)((function(e){var t=e.entities;return t&&t.columns})),G=W.filter,H=W.search,V=Object(x.a)(R,Q);y.a.useEffect((function(){e(Object(T.n)(W))}),[W]);var q=function(){var e=l()(o.a.mark((function e(){var t,n,r,a,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({reactRouterDom:S,pfReactTable:{Table:O.Table,TableBody:O.TableBody,TableHeader:O.TableHeader,TableGridBreakpoint:O.TableGridBreakpoint,cellWidth:O.cellWidth,TableVariant:O.TableVariant,sortable:O.sortable,expandable:O.expandable,SortByDirection:O.SortByDirection}});case 2:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,Object(w.c)(I({},r(Object(E.a)(C.a)))),a=n(Object(w.a)()),i=a.InventoryTable,c((function(){return i}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();y.a.useEffect((function(){q()}),[]);var A=Object(x.b)(R.limit,R.offset),N=f()(A,2),z=N[0],K=N[1];function Q(t){e(Object(T.d)(t))}var U=Object(x.d)(G,Q),X={items:[Object(v.a)(Q,H,"Search systems")]},Y={filters:Object(B.c)(G,H),onDelete:U},Z=function(){var e=_&&_.filter((function(e){return"updated"===e.key}))[0];return e=I(I({},e),{},{key:"last_upload"}),[].concat(a()(C.a),[e])},$=Object(x.f)(Z(),Q),ee=y.a.useMemo((function(){return Object(B.g)(Z(),R.sort,0)}),[R.sort]);return y.a.createElement(y.a.Fragment,null,y.a.createElement(h.a,{title:"Patch",showTabs:!0}),y.a.createElement(u,null),y.a.createElement(j.Main,null,M===D.d?y.a.createElement(g.a,{message:J.detail}):r&&y.a.createElement(r,{items:F,page:z,total:R.total_items,perPage:K,isLoaded:M===D.e,onRefresh:V,exportConfig:{onSelect:function(e,t){var n=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",r="systems-".concat(n);"csv"===t?Object(P.c)(W).then((function(e){return Object(p.downloadFile)(e,r,"csv")})):Object(P.d)(W).then((function(e){return Object(p.downloadFile)(JSON.stringify(e),r,"json")}))}},hasCheckbox:!1,actions:Object(C.b)((function(e){b((function(){return function(){return y.a.createElement(L.a,{data:e})}}))})),filterConfig:X,activeFiltersConfig:Y,tableProps:{areActionsDisabled:function(e){return e.applicable_advisories.every((function(e){return 0===e}))},onSort:$,sortBy:ee}})))}}}]);
//# sourceMappingURL=Systems.js.map