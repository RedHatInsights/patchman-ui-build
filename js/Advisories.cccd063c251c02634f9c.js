(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[20],{48284:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>I});var n=r(96156),o=r(28481),s=r(86350),i=r(35240),a=r(45697),c=r.n(a),u=r(77865),l=r.n(u),f=r(61084),d=r(334),p=r(30893),v=r(80943),m=r(90747),y=r(29287),h=r(49642),S=r(38776),b=r(64270),O=r(9557),g=r(11220),w=r(86032),P=r(57358),_=r(91607),A=r(32132);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e){var t=e.history,r=A.N.formatMessage(p.Z.titlesAdvisories);(0,_.Iw)(r);var n=(0,f.useDispatch)(),a=l().useState(!0),c=(0,o.Z)(a,2),u=c[0],d=c[1],j=(0,f.useSelector)((function(e){return e.AdvisoryListStore.rows})),E=(0,f.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),I=(0,f.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),k=(0,f.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),L=(0,f.useSelector)((function(e){return e.AdvisoryListStore.metadata})),M=(0,f.useSelector)((function(e){return e.AdvisoryListStore.status})),D=l().useMemo((function(){return(0,w.nf)(j,E,k)}),[j,E,k]);l().useEffect((function(){u?(q((0,P.PZ)(t.location.search)),d(!1)):(t.push((0,P.R_)(I)),n((0,O.hV)(I)))}),[I]);var R=l().useCallback((function(e,t,r){return n((0,O.rt)({rowId:(0,P.vs)(j,t),value:r}))})),C=(0,_.ry)(D,k,(function(){return(0,g.ob)(Z(Z({},I),{},{limit:-1}))}),(function(e){n((0,O.EI)(e))}),(function(e){return e.id})),N=(0,_._f)(b.z7,q,2),U=l().useMemo((function(){return(0,P.hO)(b.z7,L.sort,2)}),[L.sort]),z=(0,_.SL)(L.limit,q),T=(0,_._T)(q);function q(e){n((0,O.Us)(e))}var F=function(e){return(0,g.lc)({limit:-1}).then((function(t){var r=t.data;return(0,g.fq)({advisories:e,systems:r.map((function(e){return e.id}))})}))};return l().createElement(l().Fragment,null,l().createElement(h.Z,{title:A.N.formatMessage(p.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),l().createElement(s.Z,null,l().createElement(S.Z,{columns:b.z7,compact:!0,onCollapse:R,onSetPage:z,onPerPageSelect:T,onSort:N,onExport:function(e,t){var r=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",n="applicable-advisories-".concat(r);"csv"===t?(0,g.rf)(I).then((function(e){return(0,i.Sv)(e,n,"csv")})):(0,g.kM)(I).then((function(e){return(0,i.Sv)(JSON.stringify(e),n,"json")}))},selectedRows:k,onSelect:C,sortBy:U,remediationProvider:function(){return(0,P.Sz)((0,P.Qy)(k),F,P.R9)},apply:q,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:D,metadata:L,status:M,queryParams:I},filterConfig:{items:[(0,m.Z)(q,I.search,A.N.formatMessage(p.Z.labelsFiltersSearchAdvisoriesTitle),A.N.formatMessage(p.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,y.Z)(q,I.filter),(0,v.Z)(q,I.filter)]}})))};E.propTypes={history:c().object};const I=(0,d.withRouter)(E)}}]);
//# sourceMappingURL=../sourcemaps/Advisories.92ea29c2612931a02db2.js.map