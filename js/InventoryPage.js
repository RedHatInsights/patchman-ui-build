(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{432:function(e,t,a){(e.exports=a(5)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},433:function(e,t,a){var r=a(432);"string"==typeof r&&(r=[[e.i,r,""]]);var n={hmr:!0,transform:void 0,insertInto:void 0},o=a(6)(r,n);r.locals&&(e.exports=r.locals),e.hot.accept(432,(function(){var t=a(432);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,r=0;for(a in e){if(!t||e[a]!==t[a])return!1;r++}for(a in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},434:function(e,t,a){"use strict";var r=a(88),n=a(1),o=a.n(n),c=a(2),i=a.n(c),s=a(257),l=a(258),u=a(82),p=function(e){var t=e.items;return i.a.createElement(s.a,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.a,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(u.a,{to:e.to},e.title)||e.title)})))};p.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var f=p,b=a(270),m=a(259),v=a(269),y=a(231),d=(a(433),function(e){var t=e.history;return i.a.createElement(b.a,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(m.a,{eventKey:y.b.advisories.to,title:y.b.advisories.title}),i.a.createElement(m.a,{eventKey:y.b.systems.to,title:y.b.systems.title}))});d.propTypes={history:o.a.object};var g=Object(v.a)(d),h=function(e){var t=e.title,a=e.showTabs,n=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.PageHeader,null,n&&i.a.createElement(f,{items:n}),i.a.createElement(r.PageHeaderTitle,{title:t}),o),a&&i.a.createElement(g,null))};h.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=h},436:function(e,t,a){"use strict";a.r(t);var r=a(212),n=a.n(r),o=a(36),c=a.n(o),i=a(94),s=a.n(i),l=a(53),u=a(10),p=a(88),f=a(2),b=a.n(f),m=a(37),v=a(87),y=a(434),d=a(231),g=a(242),h=a(272);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function E(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}t.default=function(){var e=b.a.useState(),t=s()(e,2),a=t[0],r=t[1],o=b.a.useState(),c=s()(o,2),i=c[0],f=c[1],O=Object(m.useSelector)((function(e){var t=e.entityDetails;return t&&t.entity}));return b.a.useEffect((function(){var e,t,a,o,c,i;n.a.async((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,n.a.awrap(insights.loadInventory({react:b.a,reactRouterDom:v,reactCore:l,reactIcons:u}));case 2:e=s.sent,t=e.inventoryConnector,a=e.mergeWithDetail,Object(g.c)(E({},a(h.a))),o=t(Object(g.a)()),c=o.InventoryDetailHead,i=o.AppInfo,r((function(){return c})),f((function(){return i}));case 9:case"end":return s.stop()}}))}),[]),b.a.createElement(b.a.Fragment,null,b.a.createElement(y.a,{title:"",breadcrumbs:[{title:"System Patching",to:d.b.advisories.to,isActive:!1},O&&{title:O.display_name,isActive:!0}]},a&&b.a.createElement(a,{hideBack:!0})),i&&b.a.createElement(p.Main,null,b.a.createElement(i,null)))}}}]);
//# sourceMappingURL=InventoryPage.js.map