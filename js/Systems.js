(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{140:function(t,e,n){"use strict";n.r(e);var r=n(35),o=n(240),a=n(302),c=n(246),u=n(244),i=n(241),s=n(242),l=n(303),f=n(247),d=n(245),p=n(238),b=n(239),m=n(445);n.d(e,"TableGridBreakpoint",(function(){return r.d})),n.d(e,"TableVariant",(function(){return r.e})),n.d(e,"SortByDirection",(function(){return r.a})),n.d(e,"TableContext",(function(){return r.c})),n.d(e,"Table",(function(){return r.b})),n.d(e,"ActionsColumn",(function(){return o.a})),n.d(e,"TableBody",(function(){return a.a})),n.d(e,"BodyCell",(function(){return c.a})),n.d(e,"BodyWrapper",(function(){return u.a})),n.d(e,"CollapseColumn",(function(){return i.a})),n.d(e,"ExpandableRowContent",(function(){return s.a})),n.d(e,"TableHeader",(function(){return l.a})),n.d(e,"HeaderCell",(function(){return f.a})),n.d(e,"RowWrapper",(function(){return d.a})),n.d(e,"SelectColumn",(function(){return p.a})),n.d(e,"SortColumn",(function(){return b.a})),n.d(e,"selectable",(function(){return m.t})),n.d(e,"sortable",(function(){return m.u})),n.d(e,"cellActions",(function(){return m.c})),n.d(e,"cellWidth",(function(){return m.e})),n.d(e,"cellHeightAuto",(function(){return m.d})),n.d(e,"wrappable",(function(){return m.w})),n.d(e,"textCenter",(function(){return m.v})),n.d(e,"collapsible",(function(){return m.g})),n.d(e,"expandedRow",(function(){return m.m})),n.d(e,"expandable",(function(){return m.l})),n.d(e,"compoundExpand",(function(){return m.h})),n.d(e,"headerCol",(function(){return m.n})),n.d(e,"classNames",(function(){return m.f})),n.d(e,"Visibility",(function(){return m.a})),n.d(e,"emptyTD",(function(){return m.k})),n.d(e,"scopeColTransformer",(function(){return m.s})),n.d(e,"emptyCol",(function(){return m.j})),n.d(e,"parentId",(function(){return m.r})),n.d(e,"mapProps",(function(){return m.q})),n.d(e,"mapOpenedRows",(function(){return m.p})),n.d(e,"calculateColumns",(function(){return m.b})),n.d(e,"defaultTitle",(function(){return m.i})),n.d(e,"isRowExpanded",(function(){return m.o}))},445:function(t,e,n){"use strict";var r=n(72);n.d(e,"a",(function(){return r.a})),n.d(e,"c",(function(){return r.b})),n.d(e,"d",(function(){return r.c})),n.d(e,"e",(function(){return r.d})),n.d(e,"f",(function(){return r.e})),n.d(e,"g",(function(){return r.f})),n.d(e,"h",(function(){return r.g})),n.d(e,"j",(function(){return r.h})),n.d(e,"k",(function(){return r.i})),n.d(e,"l",(function(){return r.j})),n.d(e,"m",(function(){return r.k})),n.d(e,"n",(function(){return r.l})),n.d(e,"q",(function(){return r.m})),n.d(e,"r",(function(){return r.n})),n.d(e,"s",(function(){return r.o})),n.d(e,"t",(function(){return r.p})),n.d(e,"u",(function(){return r.q})),n.d(e,"v",(function(){return r.r})),n.d(e,"w",(function(){return r.s}));var o=n(99);n.d(e,"b",(function(){return o.a})),n.d(e,"p",(function(){return o.b}));var a=n(243);n.d(e,"i",(function(){return a.a}));var c=n(446);n.d(e,"o",(function(){return c.a}))},448:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},449:function(t,e,n){var r=n(448);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=n(6)(r,o);r.locals&&(t.exports=r.locals),t.hot.accept(448,(function(){var e=n(448);if("string"==typeof e&&(e=[[t.i,e,""]]),!function(t,e){var n,r=0;for(n in t){if(!e||t[n]!==e[n])return!1;r++}for(n in e)r--;return 0===r}(r.locals,e.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(e)})),t.hot.dispose((function(){a()}))},450:function(t,e,n){"use strict";var r=n(79),o=n(1),a=n.n(o),c=n(2),u=n.n(c),i=n(266),s=n(267),l=n(88),f=function(t){var e=t.items;return u.a.createElement(i.a,null,e.filter(Boolean).map((function(t){return u.a.createElement(s.a,{key:t.title,isActive:t.isActive},t.to&&u.a.createElement(l.a,{to:t.to},t.title)||t.title)})))};f.propTypes={items:a.a.arrayOf(a.a.shape({isActive:a.a.bool,to:a.a.string,title:a.a.string}))};var d=f,p=n(286),b=n(269),m=n(285),y=n(248),v=(n(449),function(t){var e=t.history;return u.a.createElement(p.a,{onSelect:function(t,n){e.push(n)},activeKey:e.location.pathname,className:"patchman-tabs"},u.a.createElement(b.a,{eventKey:y.b.advisories.to,title:y.b.advisories.title}),u.a.createElement(b.a,{eventKey:y.b.systems.to,title:y.b.systems.title}))});v.propTypes={history:a.a.object};var O=Object(m.a)(v),g=function(t){var e=t.title,n=t.showTabs,o=t.breadcrumbs,a=t.children;return u.a.createElement(u.a.Fragment,null,u.a.createElement(r.PageHeader,null,o&&u.a.createElement(d,{items:o}),u.a.createElement(r.PageHeaderTitle,{title:e}),a),n&&u.a.createElement(O,null))};g.propTypes={title:a.a.string,showTabs:a.a.bool,breadcrumbs:a.a.array,children:a.a.any};e.a=g},451:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var r=n(28),o=n.n(r);function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}var c={columns:[],rows:[],entities:[]};function u(t,e){return e.loaded?function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},e,{columns:t}):e}var i=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ENTITIES_FULFILLED":return u(t,e);default:return e}}}},452:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(27),o=[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],props:{width:40}},{key:"applicable_advisories",title:"Applicable advisories",props:{width:30},renderFunc:function(t){return Object(r.c)(t)}},{key:"status",title:"Status",props:{width:30}}]},456:function(t,e,n){"use strict";n.r(e);var r=n(141),o=n.n(r),a=n(28),c=n.n(a),u=n(70),i=n.n(u),s=n(52),l=n(12),f=n(140),d=n(79),p=n(2),b=n.n(p),m=n(39),y=n(92),v=n(450),O=n(249),g=n(82),h=n(451),j=n(250),w=n(27),E=n(104),P=n(452);function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(Object(n),!0).forEach((function(e){c()(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(){var t=Object(m.useDispatch)(),e=b.a.useState(),n=i()(e,2),r=n[0],a=n[1],c=Object(m.useSelector)((function(t){return t.SystemsListStore.rows})),u=b.a.useMemo((function(){return Object(j.c)(c)}),[c]),p=Object(m.useSelector)((function(t){return t.SystemsListStore.metadata})),S=Object(m.useSelector)((function(t){return t.SystemsListStore.queryParams}));b.a.useEffect((function(){t(Object(g.n)(S))}),[S]);b.a.useEffect((function(){var t,e,n,r,c;o.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return u.next=2,o.a.awrap(insights.loadInventory({react:b.a,reactRouterDom:y,reactCore:s,reactIcons:l,pfReactTable:f}));case 2:t=u.sent,e=t.inventoryConnector,n=t.mergeWithEntities,Object(O.c)(T({},n(Object(h.a)(P.a)))),r=e(Object(O.a)()),c=r.InventoryTable,a((function(){return c}));case 8:case"end":return u.stop()}}))}),[]);var C=Object(E.a)(p.limit,p.offset),k=i()(C,2),D=k[0],x=k[1];var _=b.a.useCallback((function(e){var n,r=e.page,o=e.per_page;p.page===r&&p.page_size===o||(n={offset:p.limit!==o?0:Object(w.f)(r,o),limit:Object(w.e)(o)},t(Object(g.d)(n)))}));return b.a.createElement(b.a.Fragment,null,b.a.createElement(v.a,{title:"System Patching",showTabs:!0}),b.a.createElement(d.Main,null,r&&b.a.createElement(r,{items:u,page:D,total:p.total_items,perPage:x,onRefresh:_})))}}}]);
//# sourceMappingURL=Systems.js.map