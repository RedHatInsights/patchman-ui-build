(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{432:function(e,t,a){(e.exports=a(5)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},433:function(e,t,a){var n=a(432);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0},o=a(6)(n,r);n.locals&&(e.exports=n.locals),e.hot.accept(432,(function(){var t=a(432);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var a,n=0;for(a in e){if(!t||e[a]!==t[a])return!1;n++}for(a in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},434:function(e,t,a){"use strict";var n=a(88),r=a(1),o=a.n(r),c=a(2),i=a.n(c),s=a(257),l=a(258),u=a(82),b=function(e){var t=e.items;return i.a.createElement(s.a,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.a,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(u.a,{to:e.to},e.title)||e.title)})))};b.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var f=b,m=a(270),d=a(259),p=a(269),v=a(241),g=(a(433),function(e){var t=e.history;return i.a.createElement(m.a,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(d.a,{eventKey:v.b.advisories.to,title:v.b.advisories.title}),i.a.createElement(d.a,{eventKey:v.b.systems.to,title:v.b.systems.title}))});g.propTypes={history:o.a.object};var y=Object(p.a)(g),h=function(e){var t=e.title,a=e.showTabs,r=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.PageHeader,null,r&&i.a.createElement(f,{items:r}),i.a.createElement(n.PageHeaderTitle,{title:t}),o),a&&i.a.createElement(y,null))};h.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=h},435:function(e,t,a){"use strict";a.r(t);var n=a(88),r=a(2),o=a.n(r),c=a(37),i=a(264),s=a(221),l=a(434),u=a(86),b=a(243),f=a(26),m=a(123);t.default=function(){var e=Object(c.useDispatch)(),t=Object(c.useSelector)((function(e){return e.AdvisoryListStore.rows})),a=Object(c.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),r=Object(c.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),d=Object(c.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),p=Object(c.useSelector)((function(e){return e.AdvisoryListStore.metadata})),v=Object(c.useSelector)((function(e){return e.AdvisoryListStore.isLoading})),g=o.a.useMemo((function(){return Object(b.a)(t,a,d)}),[t,a,d]);o.a.useEffect((function(){e(Object(u.g)(r))}),[r]);var y=o.a.useCallback((function(a,n,r){return e(Object(u.e)({rowId:Object(f.g)(t,n),value:r}))})),h=o.a.useCallback((function(a,n,r){return e(Object(u.j)({rowId:Object(f.g)(t,r),value:n}))})),j=Object(m.c)(s.a,w,2),S=Object(m.b)(p.limit,w),O=Object(m.a)(w);function w(t){e(Object(u.a)(t))}return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,{title:"System Patching",showTabs:!0}),o.a.createElement(n.Main,null,o.a.createElement(i.a,{columns:s.a,rows:g,metadata:p,onCollapse:y,onSelect:h,onSetPage:S,onPerPageSelect:O,onSort:j,isLoading:v})))}}}]);
//# sourceMappingURL=Advisories.js.map