(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[20],{79202:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>K});var n=r(96156),s=r(28481),a=r(86350),o=r(45697),l=r.n(o),i=r(77865),c=r.n(i),u=r(61084),m=r(334),f=r(30893),d=r(80943),p=r(90747),v=r(29287),y=r(70133),b=r(49642),E=r(38776),h=r(64270),P=r(9557),_=r(11220),g=r(13784),S=r(57668),Z=r(57358),O=r(91607),w=r(32132),A=r(83215),j=r(92137),x=r(87757),M=r.n(x),k=r(52491),N=r(19210),L=r(36104),I=r(2095),R=r(49287),C=r(18038),F=r(85962),B=r(36001),z=r(42057),D=r(34348),T=r(18464),U=r(35240),q=function(e){var t=e.advisory,r=t.attributes,n=t.id;return c().createElement(I.Zb,null,c().createElement(L.l,null,(0,Z.cX)(g.w8.advisories,n)),c().createElement(F.e,{className:"fonst-size-sm"},c().createElement(R.r,null,c().createElement(C.P,{span:6},c().createElement(R.r,null,c().createElement(C.P,null,c().createElement(T.Z,{type:r.advisory_type_name})),c().createElement(C.P,null,(0,U.Un)(r.public_date)),r.os_name&&c().createElement(C.P,null,r.os_name))),c().createElement(C.P,{span:6},c().createElement(R.r,null,r.severity&&c().createElement(C.P,null,c().createElement(B.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},c().createElement(z.B,null,c().createElement(N.ZP,{size:"sm",color:g.QG[r.severity].color})),c().createElement(z.B,{isFilled:!0},g.QG[r.severity].label))),r.reboot_required&&c().createElement(C.P,null,c().createElement(B.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},c().createElement(z.B,null,c().createElement(k.ZP,{color:"var(--pf-global--palette--red-100)"})),c().createElement(z.B,{isFilled:!0},w.N.formatMessage(f.Z.textRebootIsRequired)))))),c().createElement(C.P,null,(0,Z.cX)(g.w8.advisories,n,w.N.formatMessage(f.Z.labelsApplicableSystemsCount,{systemsCount:r.applicable_systems}))),c().createElement(C.P,null,(0,Z.Or)(r.synopsis)))))};q.propTypes={advisory:l().object};const G=function(){var e=c().useState([]),t=(0,s.Z)(e,2),r=t[0],n=t[1];return c().useEffect((0,j.Z)(M().mark((function e(){return M().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=n,e.next=3,(0,_.ob)({limit:4,sort:"-advisory_type_name,-applicable_systems"});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),r.data&&r.data.length&&c().createElement(a.Z,{style:{paddingBottom:0,paddingTop:0}},c().createElement(D.Dx,{headingLevel:"h3",className:"pf-u-my-md"},w.N.formatMessage(f.Z.titlesMostImpactfulAdvisories)),c().createElement(R.r,{hasGutter:!0,span:3},r.data.map((function(e){return c().createElement(C.P,{key:e.id},c().createElement(q,{advisory:e}))}))))||null};function Q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function W(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X=function(e){var t=e.history,r=w.N.formatMessage(f.Z.titlesAdvisories);(0,O.Iw)(r);var n=(0,u.useDispatch)(),o=c().useState(!0),l=(0,s.Z)(o,2),i=l[0],m=l[1],j=(0,u.useSelector)((function(e){return e.AdvisoryListStore.rows})),x=(0,u.useSelector)((function(e){return e.AdvisoryListStore.expandedRows})),M=(0,u.useSelector)((function(e){return e.AdvisoryListStore.queryParams})),k=(0,u.useSelector)((function(e){return e.AdvisoryListStore.selectedRows})),N=(0,u.useSelector)((function(e){return e.AdvisoryListStore.metadata})),L=(0,u.useSelector)((function(e){return e.AdvisoryListStore.status})),I=c().useMemo((function(){return(0,S.nf)(j,x,k)}),[j,x,k]);c().useEffect((function(){return function(){n((0,A.L1)())}}),[]),(0,O.KW)((function(){i?(U((0,Z.PZ)(t.location.search)),m(!1)):(t.push((0,Z.R_)(M)),n((0,P.hV)(M)))}),[M,i]);var R=c().useCallback((function(e,t,r){return n((0,P.rt)({rowId:(0,Z.vs)(j,t),value:r}))})),C=(0,O.ry)(I,k,(function(){return(0,_.ob)(W(W({},M),{},{limit:-1}))}),(function(e){n((0,P.EI)(e))}),(function(e){return e.id})),F=(0,O._f)(h.z7,U,2),B=c().useMemo((function(){return(0,Z.hO)(h.z7,N.sort,2)}),[N.sort]),z=(0,O.AR)("advisories",M,{csv:_.rf,json:_.kM},n),D=(0,O.SL)(N.limit,U),T=(0,O._T)(U);function U(e){n((0,P.Us)(e))}var q=function(e){return(0,_.lc)({limit:-1}).then((function(t){var r=t.data;return(0,_.fq)({advisories:e,systems:r.map((function(e){return e.id}))})}))};return c().createElement(c().Fragment,null,c().createElement(b.Z,{title:w.N.formatMessage(f.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),c().createElement(G,null),c().createElement(a.Z,null,c().createElement(E.Z,{columns:h.z7,compact:!0,onCollapse:R,onSetPage:D,onPerPageSelect:T,onSort:F,onExport:z,selectedRows:k,onSelect:C,sortBy:B,remediationProvider:function(){return(0,Z.Sz)((0,Z.Qy)(k),q,Z.R9,g.oN.advisory)},apply:U,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:I,metadata:N,status:L,queryParams:M},filterConfig:{items:[(0,p.Z)(U,M.search,w.N.formatMessage(f.Z.labelsFiltersSearchAdvisoriesTitle),w.N.formatMessage(f.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,v.Z)(U,M.filter),(0,d.Z)(U,M.filter),(0,y.Z)(U,M.filter)]},searchChipLabel:w.N.formatMessage(f.Z.labelsFiltersSearchAdvisoriesTitle)})))};X.propTypes={history:l().object};const K=(0,m.withRouter)(X)}}]);
//# sourceMappingURL=../sourcemaps/Advisories.8d53bdefc733f90a63fe.js.map