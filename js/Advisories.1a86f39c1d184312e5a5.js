(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[20],{48284:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>M});var o=r(96156),n=r(28481),s=r(86350),i=r(45697),a=r.n(i),c=r(77865),u=r.n(c),l=r(61084),f=r(334),d=r(30893),p=r(80943),v=r(90747),m=r(29287),y=r(49642),h=r(38776),b=r(64270),S=r(9557),O=r(11220),g=r(13784),P=r(86032),_=r(57358),w=r(91607),A=r(32132),Z=r(83215);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t=e.history,r=A.N.formatMessage(d.Z.titlesAdvisories);(0,w.Iw)(r);var o=(0,l.useDispatch)(),i=u().useState(!0),a=(0,n.Z)(i,2),c=a[0],f=a[1],j=(0,l.useSelector)((function(e){return e.AdvisoryListStore.rows})),L=(0,l.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),M=(0,l.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),k=(0,l.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),I=(0,l.useSelector)((function(e){return e.AdvisoryListStore.metadata})),R=(0,l.useSelector)((function(e){return e.AdvisoryListStore.status})),C=u().useMemo((function(){return(0,P.nf)(j,L,k)}),[j,L,k]);u().useEffect((function(){return function(){o((0,Z.L1)())}}),[]),(0,w.KW)((function(){c?(x((0,_.PZ)(t.location.search)),f(!1)):(t.push((0,_.R_)(M)),o((0,S.hV)(M)))}),[M,c]);var N=u().useCallback((function(e,t,r){return o((0,S.rt)({rowId:(0,_.vs)(j,t),value:r}))})),D=(0,w.ry)(C,k,(function(){return(0,O.ob)(E(E({},M),{},{limit:-1}))}),(function(e){o((0,S.EI)(e))}),(function(e){return e.id})),U=(0,w._f)(b.z7,x,2),z=u().useMemo((function(){return(0,_.hO)(b.z7,I.sort,2)}),[I.sort]),F=(0,w.AR)("advisories",M,{csv:O.rf,json:O.kM},o),T=(0,w.SL)(I.limit,x),q=(0,w._T)(x);function x(e){o((0,S.Us)(e))}var B=function(e){return(0,O.lc)({limit:-1}).then((function(t){var r=t.data;return(0,O.fq)({advisories:e,systems:r.map((function(e){return e.id}))})}))};return u().createElement(u().Fragment,null,u().createElement(y.Z,{title:A.N.formatMessage(d.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),u().createElement(s.Z,null,u().createElement(h.Z,{columns:b.z7,compact:!0,onCollapse:N,onSetPage:T,onPerPageSelect:q,onSort:U,onExport:F,selectedRows:k,onSelect:D,sortBy:z,remediationProvider:function(){return(0,_.Sz)((0,_.Qy)(k),B,_.R9,g.oN.advisory)},apply:x,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:C,metadata:I,status:R,queryParams:M},filterConfig:{items:[(0,v.Z)(x,M.search,A.N.formatMessage(d.Z.labelsFiltersSearchAdvisoriesTitle),A.N.formatMessage(d.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,m.Z)(x,M.filter),(0,p.Z)(x,M.filter)]},searchChipLabel:A.N.formatMessage(d.Z.labelsFiltersSearchAdvisoriesTitle)})))};L.propTypes={history:a().object};const M=(0,f.withRouter)(L)}}]);
//# sourceMappingURL=../sourcemaps/Advisories.d7d9082cbb3c57ec782a.js.map