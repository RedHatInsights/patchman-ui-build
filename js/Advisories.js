(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{450:function(e,t,a){(e.exports=a(5)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},451:function(e,t,a){var n=a(450);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(6)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(450,(function(){var t=a(450);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},452:function(e,t,a){"use strict";var n=a(70),r=a(1),o=a.n(r),c=a(2),i=a.n(c),s=a(265),l=a(266),u=a(88),b=function(e){var t=e.items;return i.a.createElement(s.a,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.a,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(u.a,{to:e.to},e.title)||e.title)})))};b.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var d=b,f=a(286),m=a(268),p=a(285),v=a(247),y=(a(451),function(e){var t=e.history;return i.a.createElement(f.a,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(m.a,{eventKey:v.b.advisories.to,title:v.b.advisories.title}),i.a.createElement(m.a,{eventKey:v.b.systems.to,title:v.b.systems.title}))});y.propTypes={history:o.a.object};var g=Object(p.a)(y),h=function(e){var t=e.title,a=e.showTabs,r=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.PageHeader,null,r&&i.a.createElement(d,{items:r}),i.a.createElement(n.PageHeaderTitle,{title:t}),o),a&&i.a.createElement(g,null))};h.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=h},457:function(e,t,a){"use strict";a.r(t);var n=a(70),r=a(2),o=a.n(r),c=a(31),i=a(283),s=a(226),l=a(452),u=a(82),b=a(249),d=a(23),f=a(104);t.default=function(){var e=Object(c.useDispatch)(),t=Object(c.useSelector)((function(e){return e.AdvisoryListStore.rows})),a=Object(c.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),r=Object(c.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),m=Object(c.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),p=Object(c.useSelector)((function(e){return e.AdvisoryListStore.metadata})),v=Object(c.useSelector)((function(e){return e.AdvisoryListStore.isLoading})),y=o.a.useMemo((function(){return Object(b.a)(t,a,m)}),[t,a,m]);o.a.useEffect((function(){e(Object(u.k)(r))}),[r]);var g=o.a.useCallback((function(a,n,r){return e(Object(u.h)({rowId:Object(d.g)(t,n),value:r}))})),h=o.a.useCallback((function(a,n,r){return e(Object(u.o)({rowId:Object(d.g)(t,r),value:n}))})),S=Object(f.d)(s.a,w,2),j=Object(f.c)(p.limit,w),O=Object(f.b)(w);function w(t){e(Object(u.a)(t))}return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:"System Patching",showTabs:!0}),o.a.createElement(n.Main,null,o.a.createElement(i.a,{columns:s.a,rows:y,metadata:p,onCollapse:g,onSelect:h,onSetPage:j,onPerPageSelect:O,onSort:S,isLoading:v})))}}}]);
//# sourceMappingURL=Advisories.js.map