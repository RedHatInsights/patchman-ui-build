(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{824:function(e,t,r){"use strict";r.r(t);var o=r(45),n=r.n(o),a=r(791),c=r(1),s=r.n(c),u=r(2),i=r.n(u),l=r(41),b=r(521),j=r(520),O=r(185),d=r(792),f=r(118),S=r(316),m=r(18),p=r(117),y=function(e){var t=e.history,r=Object(l.useDispatch)(),o=i.a.useState(!0),c=n()(o,2),s=c[0],u=c[1],b=Object(l.useSelector)((function(e){return e.AdvisoryListStore.rows})),y=Object(l.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),w=Object(l.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),h=Object(l.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),v=Object(l.useSelector)((function(e){return e.AdvisoryListStore.metadata})),L=Object(l.useSelector)((function(e){return e.AdvisoryListStore.isLoading})),g=i.a.useMemo((function(){return Object(S.a)(b,y,h)}),[b,y,h]);i.a.useEffect((function(){s?(q(Object(m.h)(t.location.search)),u(!1)):(t.push(Object(m.j)(w)),r(Object(f.k)(w)))}),[w]);var A=i.a.useCallback((function(e,t,o){return r(Object(f.h)({rowId:Object(m.m)(b,t),value:o}))})),P=Object(p.f)(O.a,q,1),E=i.a.useMemo((function(){return Object(m.g)(O.a,v.sort,1)}),[v.sort]),k=Object(p.e)(v.limit,q),M=Object(p.c)(q);function q(e){r(Object(f.a)(e))}return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,{title:"System Patching",showTabs:!0}),i.a.createElement(a.Main,null,i.a.createElement(j.a,{columns:O.a,onCollapse:A,onSetPage:k,onPerPageSelect:M,onSort:P,sortBy:E,apply:q,store:{rows:g,metadata:v,isLoading:L,queryParams:w}})))};y.propTypes={history:s.a.object},t.default=Object(b.a)(y)}}]);
//# sourceMappingURL=Advisories.js.map