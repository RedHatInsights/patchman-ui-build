(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{827:function(e,t,r){"use strict";r.r(t);var n=r(47),o=r.n(n),c=r(219),a=r(849),s=r(6),u=r.n(s),i=r(0),l=r.n(i),b=r(46),j=r(27),O=r(452),d=r(202),f=r(851),S=r(361),p=r(90),v=r(78),m=r(12),y=r(372),w=r(13),h=r(127),g=function(e){var t=e.history,r=Object(b.useDispatch)(),n=l.a.useState(!0),s=o()(n,2),u=s[0],i=s[1],j=Object(b.useSelector)((function(e){return e.AdvisoryListStore.rows})),g=Object(b.useSelector)((function(e){return e.AdvisoryListStore.error})),A=Object(b.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),E=Object(b.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),L=Object(b.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),P=Object(b.useSelector)((function(e){return e.AdvisoryListStore.metadata})),k=Object(b.useSelector)((function(e){return e.AdvisoryListStore.status})),F=l.a.useMemo((function(){return Object(y.a)(j,A,L)}),[j,A,L]);l.a.useEffect((function(){u?(D(Object(w.h)(t.location.search)),i(!1)):(t.push(Object(w.j)(E)),r(Object(p.k)(E)))}),[E]);var J=l.a.useCallback((function(e,t,n){return r(Object(p.h)({rowId:Object(w.n)(j,t),value:n}))})),M=Object(h.f)(d.a,D,1),q=l.a.useMemo((function(){return Object(w.g)(d.a,P.sort,1)}),[P.sort]),x=Object(h.e)(P.limit,D),C=Object(h.c)(D);function D(e){r(Object(p.a)(e))}return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{title:"Advisories"}),l.a.createElement(a.Main,null,k===m.d?l.a.createElement(S.a,{message:g.detail}):l.a.createElement(O.a,{columns:d.a,onCollapse:J,onSetPage:x,onPerPageSelect:C,onSort:M,onExport:function(e,t){var r=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",n="applicable-advisories-".concat(r);"csv"===t?Object(v.a)(E).then((function(e){return Object(c.downloadFile)(e,n,"csv")})):Object(v.b)(E).then((function(e){return Object(c.downloadFile)(JSON.stringify(e),n,"json")}))},sortBy:q,apply:D,store:{rows:F,metadata:P,status:k,queryParams:E}})))};g.propTypes={history:u.a.object},t.default=Object(j.o)(g)}}]);
//# sourceMappingURL=Advisories.js.map