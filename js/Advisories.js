(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{820:function(e,t,r){"use strict";r.r(t);var n=r(787),o=r(2),a=r.n(o),c=r(42),s=r(520),u=r(185),i=r(788),l=r(117),b=r(316),d=r(19),f=r(116);t.default=function(){var e=Object(c.useDispatch)(),t=Object(c.useSelector)((function(e){return e.AdvisoryListStore.rows})),r=Object(c.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),o=Object(c.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),j=Object(c.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),O=Object(c.useSelector)((function(e){return e.AdvisoryListStore.metadata})),S=Object(c.useSelector)((function(e){return e.AdvisoryListStore.isLoading})),m=a.a.useMemo((function(){return Object(b.a)(t,r,j)}),[t,r,j]);a.a.useEffect((function(){e(Object(l.k)(o))}),[o]);var w=a.a.useCallback((function(r,n,o){return e(Object(l.h)({rowId:Object(d.k)(t,n),value:o}))})),y=Object(f.f)(u.a,g,1),p=a.a.useMemo((function(){return Object(d.g)(u.a,O.sort,1)}),[O.sort]),v=Object(f.e)(O.limit,g),L=Object(f.c)(g);function g(t){e(Object(l.a)(t))}return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{title:"System Patching",showTabs:!0}),a.a.createElement(n.Main,null,a.a.createElement(s.a,{columns:u.a,onCollapse:w,onSetPage:v,onPerPageSelect:L,onSort:y,sortBy:p,apply:g,store:{rows:m,metadata:O,isLoading:S,queryParams:o}})))}}}]);
//# sourceMappingURL=Advisories.js.map