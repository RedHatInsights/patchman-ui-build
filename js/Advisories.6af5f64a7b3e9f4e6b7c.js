(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[20],{48284:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>L});var n=r(96156),o=r(28481),s=r(86350),i=r(20167),a=r(35240),c=r(45697),u=r.n(c),l=r(77865),f=r.n(l),d=r(61084),p=r(334),v=r(30893),m=r(80943),y=r(90747),S=r(29287),h=r(49642),b=r(38776),O=r(64270),g=r(9557),_=r(11220),w=r(13784),P=r(86032),A=r(57358),Z=r(91607),j=r(32132);function E(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function I(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?E(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var k=function(e){var t=e.history,r=j.N.formatMessage(v.Z.titlesAdvisories);(0,Z.Iw)(r);var n=(0,d.useDispatch)(),c=f().useState(!0),u=(0,o.Z)(c,2),l=u[0],p=u[1],E=(0,d.useSelector)((function(e){return e.AdvisoryListStore.rows})),k=(0,d.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),L=(0,d.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),M=(0,d.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),D=(0,d.useSelector)((function(e){return e.AdvisoryListStore.metadata})),R=(0,d.useSelector)((function(e){return e.AdvisoryListStore.status})),C=f().useMemo((function(){return(0,P.nf)(E,k,M)}),[E,k,M]);f().useEffect((function(){l?(x((0,A.PZ)(t.location.search)),p(!1)):(t.push((0,A.R_)(L)),n((0,g.hV)(L)))}),[L]);var N=f().useCallback((function(e,t,r){return n((0,g.rt)({rowId:(0,A.vs)(E,t),value:r}))})),U=(0,Z.ry)(C,M,(function(){return(0,_.ob)(I(I({},L),{},{limit:-1}))}),(function(e){n((0,g.EI)(e))}),(function(e){return e.id})),z=(0,Z._f)(O.z7,x,2),T=f().useMemo((function(){return(0,A.hO)(O.z7,D.sort,2)}),[D.sort]),q=(0,Z.SL)(D.limit,x),F=(0,Z._T)(x);function x(e){n((0,g.Us)(e))}var B=R===w.g_&&f().createElement(i.Z,null),J=function(e){return(0,_.lc)({limit:-1}).then((function(t){var r=t.data;return(0,_.fq)({advisories:e,systems:r.map((function(e){return e.id}))})}))};return f().createElement(f().Fragment,null,f().createElement(h.Z,{title:j.N.formatMessage(v.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),f().createElement(s.Z,null,f().createElement(b.Z,{columns:O.z7,compact:!0,onCollapse:N,onSetPage:q,onPerPageSelect:F,onSort:z,onExport:function(e,t){var r=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",n="applicable-advisories-".concat(r);"csv"===t?(0,_.rf)(L).then((function(e){return(0,a.Sv)(e,n,"csv")})):(0,_.kM)(L).then((function(e){return(0,a.Sv)(JSON.stringify(e),n,"json")}))},selectedRows:M,onSelect:U,sortBy:T,remediationProvider:function(){return(0,A.Sz)((0,A.Qy)(M),J,A.R9)},apply:x,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:C,metadata:D,status:R,queryParams:L},filterConfig:{items:[(0,y.Z)(x,L.search,j.N.formatMessage(v.Z.labelsFiltersSearchAdvisoriesTitle),j.N.formatMessage(v.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,S.Z)(x,L.filter),(0,m.Z)(x,L.filter)]},errorState:B})))};k.propTypes={history:u().object};const L=(0,p.withRouter)(k)}}]);
//# sourceMappingURL=../sourcemaps/Advisories.7d2b36373424d550256e.js.map