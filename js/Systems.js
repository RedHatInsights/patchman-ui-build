(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{585:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},586:function(e,t,n){var r=n(585);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(585,(function(){var t=n(585);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},587:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},588:function(e,t,n){"use strict";var r=n(48),a=n(1),o=n.n(a),c=n(2),i=n.n(c),s=n(399),l=n(400),u=n(91),f=function(e){var t=e.items;return i.a.createElement(s.a,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.a,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(u.a,{to:e.to},e.title)||e.title)})))};f.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var p=f,b=n(425),m=n(402),d=n(426),y=n(251),O=(n(586),function(e){var t=e.history;return i.a.createElement(b.a,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(m.a,{eventKey:y.b.advisories.to,title:y.b.advisories.title}),i.a.createElement(m.a,{eventKey:y.b.systems.to,title:y.b.systems.title}))});O.propTypes={history:o.a.object};var v=Object(d.a)(O),h=function(e){var t=e.title,n=e.showTabs,a=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.PageHeader,null,a&&i.a.createElement(p,{items:a}),i.a.createElement(r.PageHeaderTitle,{title:t}),o),n&&i.a.createElement(v,null))};h.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=h},589:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(29),a=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c={columns:[],rows:[],entities:[]};function i(e,t){return t.loaded?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{columns:e}):t}var s=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ENTITIES_FULFILLED":return i(e,t);default:return t}}}},590:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var r=n(161),a=n(48),o=n(2),c=n.n(o),i=n(95),s=n(19),l=(n(591),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[Object(r.b)("col-width-40")]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[Object(r.b)("col-width-30")],renderFunc:function(e){return Object(s.e)(e)}},{key:"updated",title:"Last seen",transforms:[Object(r.b)("col-width-30")],renderFunc:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(a.DateFormat,{date:e}))}}]),u=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,n,r){Object(i.d)({id:r.id,limit:1e4}).then((function(t){return e(Object(s.m)(t.data.map((function(e){return e.id})),r.id))}))}}]}},591:function(e,t,n){var r=n(587);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(7)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(587,(function(){var t=n(587);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},595:function(e,t,n){"use strict";n.r(t);var r=n(153),a=n.n(r),o=n(29),c=n.n(o),i=n(31),s=n.n(i),l=n(42),u=n(13),f=n(81),p=n(48),b=n(2),m=n.n(b),d=n(43),y=n(96),O=n(588),v=n(252),h=n(84),g=n(589),j=n(253),w=n(19),E=n(111),P=n(254),S=n(590);function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(d.useDispatch)(),t=m.a.useState(),n=s()(t,2),r=n[0],o=n[1],c=m.a.useState((function(){return function(){return null}})),i=s()(c,2),b=i[0],k=i[1],T=Object(d.useSelector)((function(e){return e.SystemsListStore.rows})),_=m.a.useMemo((function(){return Object(j.c)(T)}),[T]),L=Object(d.useSelector)((function(e){return e.SystemsListStore.metadata})),A=Object(d.useSelector)((function(e){return e.SystemsListStore.queryParams}));m.a.useEffect((function(){e(Object(h.n)(A))}),[A]);m.a.useEffect((function(){var e,t,n,r,c;a.a.async((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,a.a.awrap(insights.loadInventory({react:m.a,reactRouterDom:y,reactCore:l,reactIcons:u,pfReactTable:f}));case 2:e=i.sent,t=e.inventoryConnector,n=e.mergeWithEntities,Object(v.c)(D({},n(Object(g.a)(S.a)))),r=t(Object(v.a)()),c=r.InventoryTable,o((function(){return c}));case 8:case"end":return i.stop()}}))}),[]);var C=Object(E.a)(L.limit,L.offset),F=s()(C,2),I=F[0],x=F[1];var R=m.a.useCallback((function(t){var n,r=t.page,a=t.per_page;L.page===r&&L.page_size===a||(n={offset:L.limit!==a?0:Object(w.i)(r,a),limit:Object(w.h)(a)},e(Object(h.d)(n)))}));return m.a.createElement(m.a.Fragment,null,m.a.createElement(O.a,{title:"System Patching",showTabs:!0}),m.a.createElement(b,null),m.a.createElement(p.Main,null,r&&m.a.createElement(r,{items:_,page:I,total:L.total_items,perPage:x,onRefresh:R,hasCheckbox:!1,actions:Object(S.b)((function(e){k((function(){return function(){return m.a.createElement(P.a,{data:e})}}))}))})))}}}]);
//# sourceMappingURL=Systems.js.map