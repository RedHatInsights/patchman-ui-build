(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{452:function(e,t,a){(e.exports=a(5)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},453:function(e,t,a){var r=a(452);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(6)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(452,(function(){var t=a(452);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},454:function(e,t,a){"use strict";var r=a(72),n=a(1),o=a.n(n),c=a(2),i=a.n(c),s=a(267),l=a(268),u=a(90),p=function(e){var t=e.items;return i.a.createElement(s.a,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.a,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(u.a,{to:e.to},e.title)||e.title)})))};p.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var f=p,b=a(292),m=a(270),v=a(293),y=a(249),d=(a(453),function(e){var t=e.history;return i.a.createElement(b.a,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(m.a,{eventKey:y.b.advisories.to,title:y.b.advisories.title}),i.a.createElement(m.a,{eventKey:y.b.systems.to,title:y.b.systems.title}))});d.propTypes={history:o.a.object};var g=Object(v.a)(d),h=function(e){var t=e.title,a=e.showTabs,n=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.PageHeader,null,n&&i.a.createElement(f,{items:n}),i.a.createElement(r.PageHeaderTitle,{title:t}),o),a&&i.a.createElement(g,null))};h.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=h},461:function(e,t,a){"use strict";a.r(t);var r=a(151),n=a.n(r),o=a(28),c=a.n(o),i=a(57),s=a.n(i),l=a(39),u=a(12),p=a(80),f=a(72),b=a(2),m=a.n(b),v=a(40),y=a(95),d=a(454),g=a(249),h=a(250),O=a(295);function E(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?E(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):E(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e=m.a.useState(),t=s()(e,2),a=t[0],r=t[1],o=m.a.useState(),c=s()(o,2),i=c[0],b=c[1],E=Object(v.useSelector)((function(e){var t=e.entityDetails;return t&&t.entity}));return m.a.useEffect((function(){var e,t,a,o,c,i;n.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.a.awrap(insights.loadInventory({react:m.a,reactRouterDom:y,reactCore:l,reactIcons:u,pfReactTable:p}));case 2:e=s.sent,t=e.inventoryConnector,a=e.mergeWithDetail,Object(h.c)(w({},a(O.a))),o=t(Object(h.a)()),c=o.InventoryDetailHead,i=o.AppInfo,r((function(){return c})),b((function(){return i}));case 9:case"end":return s.stop()}}))}),[]),m.a.createElement(m.a.Fragment,null,m.a.createElement(d.a,{title:"",breadcrumbs:[{title:"System Patching",to:g.b.advisories.to,isActive:!1},E&&{title:E.display_name,isActive:!0}]},a&&m.a.createElement(a,{hideBack:!0})),i&&m.a.createElement(f.Main,null,m.a.createElement(i,null)))}}}]);
//# sourceMappingURL=InventoryPage.js.map