(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[20],{48284:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>k});var o=r(96156),n=r(28481),s=r(86350),i=r(45697),a=r.n(i),c=r(77865),u=r.n(c),l=r(61084),f=r(334),d=r(30893),p=r(80943),v=r(90747),m=r(29287),y=r(49642),h=r(38776),b=r(64270),S=r(9557),O=r(11220),g=r(13784),P=r(86032),_=r(57358),w=r(91607),A=r(32132);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var E=function(e){var t=e.history,r=A.N.formatMessage(d.Z.titlesAdvisories);(0,w.Iw)(r);var o=(0,l.useDispatch)(),i=u().useState(!0),a=(0,n.Z)(i,2),c=a[0],f=a[1],j=(0,l.useSelector)((function(e){return e.AdvisoryListStore.rows})),E=(0,l.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),k=(0,l.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),I=(0,l.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),L=(0,l.useSelector)((function(e){return e.AdvisoryListStore.metadata})),M=(0,l.useSelector)((function(e){return e.AdvisoryListStore.status})),R=u().useMemo((function(){return(0,P.nf)(j,E,I)}),[j,E,I]);u().useEffect((function(){c?(T((0,_.PZ)(t.location.search)),f(!1)):(t.push((0,_.R_)(k)),o((0,S.hV)(k)))}),[k]);var C=u().useCallback((function(e,t,r){return o((0,S.rt)({rowId:(0,_.vs)(j,t),value:r}))})),D=(0,w.ry)(R,I,(function(){return(0,O.ob)(Z(Z({},k),{},{limit:-1}))}),(function(e){o((0,S.EI)(e))}),(function(e){return e.id})),N=(0,w._f)(b.z7,T,2),U=u().useMemo((function(){return(0,_.hO)(b.z7,L.sort,2)}),[L.sort]),z=(0,w.AR)("advisories",k,{csv:O.rf,json:O.kM},o),q=(0,w.SL)(L.limit,T),F=(0,w._T)(T);function T(e){o((0,S.Us)(e))}var x=function(e){return(0,O.lc)({limit:-1}).then((function(t){var r=t.data;return(0,O.fq)({advisories:e,systems:r.map((function(e){return e.id}))})}))};return u().createElement(u().Fragment,null,u().createElement(y.Z,{title:A.N.formatMessage(d.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),u().createElement(s.Z,null,u().createElement(h.Z,{columns:b.z7,compact:!0,onCollapse:C,onSetPage:q,onPerPageSelect:F,onSort:N,onExport:z,selectedRows:I,onSelect:D,sortBy:U,remediationProvider:function(){return(0,_.Sz)((0,_.Qy)(I),x,_.R9,g.oN.advisory)},apply:T,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:R,metadata:L,status:M,queryParams:k},filterConfig:{items:[(0,v.Z)(T,k.search,A.N.formatMessage(d.Z.labelsFiltersSearchAdvisoriesTitle),A.N.formatMessage(d.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,m.Z)(T,k.filter),(0,p.Z)(T,k.filter)]}})))};E.propTypes={history:a().object};const k=(0,f.withRouter)(E)}}]);
//# sourceMappingURL=../sourcemaps/Advisories.226079707797c8fd8156.js.map