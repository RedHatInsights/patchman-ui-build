(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{833:function(e,t,r){"use strict";r.r(t);var o=r(44),n=r.n(o),a=r(797),c=r(1),s=r.n(c),u=r(2),i=r.n(u),l=r(37),b=r(100),j=r(524),O=r(185),f=r(799),S=r(318),d=r(122),m=r(14),p=r(321),y=r(18),w=r(121),v=function(e){var t=e.history,r=Object(l.useDispatch)(),o=i.a.useState(!0),c=n()(o,2),s=c[0],u=c[1],b=Object(l.useSelector)((function(e){return e.AdvisoryListStore.rows})),v=Object(l.useSelector)((function(e){return e.AdvisoryListStore.error})),h=Object(l.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),A=Object(l.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),L=Object(l.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),E=Object(l.useSelector)((function(e){return e.AdvisoryListStore.metadata})),P=Object(l.useSelector)((function(e){return e.AdvisoryListStore.status})),g=i.a.useMemo((function(){return Object(p.a)(b,h,L)}),[b,h,L]);i.a.useEffect((function(){s?(R(Object(y.h)(t.location.search)),u(!1)):(t.push(Object(y.j)(A)),r(Object(d.k)(A)))}),[A]);var k=i.a.useCallback((function(e,t,o){return r(Object(d.h)({rowId:Object(y.n)(b,t),value:o}))})),M=Object(w.f)(O.a,R,1),q=i.a.useMemo((function(){return Object(y.g)(O.a,E.sort,1)}),[E.sort]),C=Object(w.e)(E.limit,R),J=Object(w.c)(R);function R(e){r(Object(d.a)(e))}return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{title:"Patch",showTabs:!0}),i.a.createElement(a.Main,null,P===m.b?i.a.createElement(S.a,{message:v.detail}):i.a.createElement(j.a,{columns:O.a,onCollapse:k,onSetPage:C,onPerPageSelect:J,onSort:M,sortBy:q,apply:R,store:{rows:g,metadata:E,status:P,queryParams:A}})))};v.propTypes={history:s.a.object},t.default=Object(b.o)(v)}}]);
//# sourceMappingURL=Advisories.js.map