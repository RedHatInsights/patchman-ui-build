(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[20],{48284:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var n=r(96156),o=r(28481),s=r(86350),i=r(45697),a=r.n(i),c=r(77865),u=r.n(c),l=r(61084),f=r(334),d=r(30893),p=r(80943),v=r(90747),m=r(29287),y=r(49642),h=r(38776),b=r(64270),S=r(9557),O=r(11220),g=r(13784),P=r(86032),_=r(57358),w=r(91607),A=r(32132),j=r(83215);function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var L=function(e){var t=e.history,r=A.N.formatMessage(d.Z.titlesAdvisories);(0,w.Iw)(r);var n=(0,l.useDispatch)(),i=u().useState(!0),a=(0,o.Z)(i,2),c=a[0],f=a[1],Z=(0,l.useSelector)((function(e){return e.AdvisoryListStore.rows})),L=(0,l.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),k=(0,l.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),I=(0,l.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),M=(0,l.useSelector)((function(e){return e.AdvisoryListStore.metadata})),R=(0,l.useSelector)((function(e){return e.AdvisoryListStore.status})),C=u().useMemo((function(){return(0,P.nf)(Z,L,I)}),[Z,L,I]);u().useEffect((function(){return function(){n((0,j.L1)())}}),[]),(0,w.KW)((function(){c?(x((0,_.PZ)(t.location.search)),f(!1)):(t.push((0,_.R_)(k)),n((0,S.hV)(k)))}),[k,c]);var D=u().useCallback((function(e,t,r){return n((0,S.rt)({rowId:(0,_.vs)(Z,t),value:r}))})),N=(0,w.ry)(C,I,(function(){return(0,O.ob)(E(E({},k),{},{limit:-1}))}),(function(e){n((0,S.EI)(e))}),(function(e){return e.id})),U=(0,w._f)(b.z7,x,2),z=u().useMemo((function(){return(0,_.hO)(b.z7,M.sort,2)}),[M.sort]),q=(0,w.AR)("advisories",k,{csv:O.rf,json:O.kM},n),F=(0,w.SL)(M.limit,x),T=(0,w._T)(x);function x(e){n((0,S.Us)(e))}var B=function(e){return(0,O.lc)({limit:-1}).then((function(t){var r=t.data;return(0,O.fq)({advisories:e,systems:r.map((function(e){return e.id}))})}))};return u().createElement(u().Fragment,null,u().createElement(y.Z,{title:A.N.formatMessage(d.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),u().createElement(s.Z,null,u().createElement(h.Z,{columns:b.z7,compact:!0,onCollapse:D,onSetPage:F,onPerPageSelect:T,onSort:U,onExport:q,selectedRows:I,onSelect:N,sortBy:z,remediationProvider:function(){return(0,_.Sz)((0,_.Qy)(I),B,_.R9,g.oN.advisory)},apply:x,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:C,metadata:M,status:R,queryParams:k},filterConfig:{items:[(0,v.Z)(x,k.search,A.N.formatMessage(d.Z.labelsFiltersSearchAdvisoriesTitle),A.N.formatMessage(d.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,m.Z)(x,k.filter),(0,p.Z)(x,k.filter)]}})))};L.propTypes={history:a().object};const k=(0,f.withRouter)(L)}}]);
//# sourceMappingURL=../sourcemaps/Advisories.8d76a2e2a3f6ceb59f74.js.map