(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{831:function(e,t,r){"use strict";r.r(t);var n=r(858),a=r.n(n),c=r(35),i=r.n(c),o=r(859),l=r.n(o),s=r(47),u=r.n(s),b=r(19),p=r(841),f=r(0),y=r.n(f),d=r(46),O=r(107),v=r(863),m=r(845),j=r(360),w=r(361),h=r(452);function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}t.default=function(){var e=y.a.useState(),t=u()(e,2),r=t[0],n=t[1],c=y.a.useState(),i=u()(c,2),o=i[0],s=i[1],f=y.a.useState(),D=u()(f,2),g=D[0],P=D[1],S=Object(d.useSelector)((function(e){var t=e.entityDetails;return t&&t.entity})),E=function(){var e=l()(a.a.mark((function e(){var t,r,c,i,o,l,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:d,React:y.a,reactRouterDom:O,pfReactTable:{Table:b.Table,TableBody:b.TableBody,TableHeader:b.TableHeader,TableGridBreakpoint:b.TableGridBreakpoint,cellWidth:b.cellWidth,TableVariant:b.TableVariant,sortable:b.sortable,expandable:b.expandable,SortByDirection:b.SortByDirection},pfReact:v.reactCore});case 2:t=e.sent,r=t.inventoryConnector,c=t.mergeWithDetail,Object(w.c)(T({},c(h.a))),i=r(Object(w.a)()),o=i.InventoryDetailHead,l=i.AppInfo,u=i.DetailWrapper,n((function(){return o})),s((function(){return l})),P((function(){return u}));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();y.a.useEffect((function(){E()}),[]);var k=g||y.a.Fragment;return y.a.createElement(k,null,y.a.createElement(m.a,{title:"",breadcrumbs:[{title:"Patch",to:j.b.advisories.to,isActive:!1},{title:"Systems",to:j.b.systems.to,isActive:!1},S&&{title:S.display_name,isActive:!0}]},r&&y.a.createElement(r,{hideBack:!0})),o&&y.a.createElement(p.Main,null,y.a.createElement(o,null)))}}}]);
//# sourceMappingURL=InventoryPage.js.map