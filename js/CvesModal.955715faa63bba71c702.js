(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9630],{43047:(e,t,a)=>{"use strict";a.d(t,{$O:()=>n,MX:()=>o,ZP:()=>l});var s=a(40400);const o={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},n=(0,s.IU)(o),l=n},69957:(e,t,a)=>{"use strict";a.d(t,{LP:()=>n,RI:()=>o,ZP:()=>l});var s=a(40400);const o={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},n=(0,s.IU)(o),l=n},38776:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var s=a(29439),o=a(3351),n=a(22860),l=a(6934),r=a(75863),i=a(3962),m=a(81739),c=a(45697),u=a.n(c),f=a(43297),p=a.n(f),g=a(30893),d=a(53074),b=a(5391),y=a(91607),C=a(32132),S=a(44733),v=a(50383),h=function(e){var t=e.isLoading,a=e.page,s=e.perPage,o=e.onSetPage,n=e.totalItems,l=e.onPerPageSelect,r=e.paginationOUIA;return p().createElement(p().Fragment,null,t?p().createElement("div",{className:"pf-c-pagination pf-m-bottom"},p().createElement(v.O,{fontSize:"xl",width:"350px",style:{margin:10}})):p().createElement(S.t,{itemCount:n,perPage:s,page:a,onSetPage:o,onPerPageSelect:l,widgetId:"pagination-options-menu-bottom",variant:S.a.bottom,ouiaId:r,isDisabled:0===n}))};h.propTypes={isLoading:u().bool,onSetPage:u().func,onPerPageSelect:u().func,page:u().number,perPage:u().number,totalItems:u().number,paginationOUIA:u().string};const P=h;var Z=a(52579),_=a(1595),M=function(e){var t,a=e.columns,c=e.store,u=c.rows,f=c.metadata,S=c.status,h=c.queryParams,M=h.filter,E=h.search,N=e.onCollapse,k=e.onSelect,I=e.onSetPage,w=e.onPerPageSelect,O=e.onSort,L=e.onExport,z=e.filterConfig,x=e.sortBy,F=e.remediationProvider,A=e.selectedRows,T=e.compact,U=e.apply,B=e.tableOUIA,R=e.paginationOUIA,D=e.errorState,j=e.emptyState,q=e.defaultFilters,H=e.searchChipLabel,V=e.ToolbarButton,W=e.actionsConfig,$=e.isRemediationLoading,Q=e.actionsToggle,X=p().useMemo((function(){return(0,b.CM)(f.limit,f.offset)}),[f.limit,f.offset]),G=(0,s.Z)(X,2),K=G[0],J=G[1],Y=(0,y.j5)(M,U,q),ee=(0,s.Z)(Y,1)[0],te=A&&(0,b.Qy)(A).length,ae=S.code,se=S.hasError,oe=S.isLoading,ne=(0,y.Pz)(te,k,f,u,N);return p().createElement(p().Fragment,null,p().createElement(p().Fragment,null,se||!1===f.has_systems?p().createElement(Z.Z,{code:ae,ErrorState:D,EmptyState:j,metadata:f}):p().createElement(p().Fragment,null,p().createElement(i.Z,{pagination:oe?p().createElement(v.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:f.total_items,page:K,perPage:J,isCompact:!0,onSetPage:I,onPerPageSelect:w,ouiaId:"top-".concat(R),isDisabled:0===f.total_items},filterConfig:z,activeFiltersConfig:{filters:(0,b.mt)(M,E,H),onDelete:ee,deleteTitle:C.N.formatMessage(q&&g.Z.labelsFiltersReset||g.Z.labelsFiltersClear)},actionsConfig:{actions:[F&&p().createElement(d.Z,{remediationProvider:F,isDisabled:0===Object.values(A).filter((function(e){return e})).length||$,isLoading:$})]},exportConfig:{isDisabled:0===f.total_items,onSelect:L},bulkSelect:k&&ne},V&&p().createElement(_.E,null,p().createElement(V,null))),oe?p().createElement(m.Z,{colSize:null!==(t=null==a?void 0:a.length)&&void 0!==t?t:5,rowSize:20,variant:T&&r.B.compact}):p().createElement(o.i,{"aria-label":"Patch table view",cells:a,onSelect:f.total_items&&k,rows:u,onCollapse:f.total_items&&N,canSelectAll:!1,onSort:f.total_items&&O,ouiaId:B,sortBy:f.total_items&&x,isStickyHeader:!0,variant:T&&r.B.compact,actions:W,actionsToggle:Q},p().createElement(l.x,null),p().createElement(n.R,null)),p().createElement(P,{isLoading:oe,totalItems:f.total_items,perPage:J,page:K,onSetPage:I,onPerPageSelect:w,paginationOUIA:"bottom-".concat(R)}))))};M.propTypes={columns:u().array,onCollapse:u().func,onSelect:u().func,onSetPage:u().func,onPerPageSelect:u().func,onSort:u().func,onExport:u().func,remediationProvider:u().func,selectedRows:u().object,apply:u().func,sortBy:u().object,filterConfig:u().object,store:u().object,compact:u().bool,tableOUIA:u().string,paginationOUIA:u().string,errorState:u().element,emptyState:u().element,defaultFilters:u().object,searchChipLabel:u().string,ToolbarButton:u().node,actionsConfig:u().array,isRemediationLoading:u().bool,actionsToggle:u().func};const E=M},64270:(e,t,a)=>{"use strict";a.d(t,{$$:()=>u,C_:()=>c,fG:()=>m,g:()=>f,z7:()=>i});var s=a(1082),o=a(62480),n=a(7732),l=a(30893),r=a(32132),i=[{title:r.N.formatMessage(l.Z.labelsColumnsName),cellFormatters:[o.zW],transforms:[n.p,(0,s.d)(15)],key:"id"},{title:r.N.formatMessage(l.Z.labelsColumnsSynopsis),transforms:[n.p],key:"synopsis"},{title:r.N.formatMessage(l.Z.labelsColumnsType),transforms:[n.p,(0,s.d)(10)],key:"advisory_type_name"},{title:r.N.formatMessage(l.Z.labelsColumnsApplicableSystems),transforms:[n.p,(0,s.d)(15)],key:"applicable_systems"},{title:r.N.formatMessage(l.Z.labelsColumnsReboot),transforms:[n.p],key:"reboot_required"},{title:r.N.formatMessage(l.Z.labelsColumnsPublishDate),transforms:[n.p,(0,s.d)(15)],key:"public_date"}],m=[{title:r.N.formatMessage(l.Z.labelsColumnsName),cellFormatters:[o.zW],transforms:[n.p,(0,s.d)(15)],key:"id"},{title:"Synopsis",transforms:[n.p,(0,s.d)(35)],key:"synopsis"},{title:r.N.formatMessage(l.Z.labelsColumnsType),transforms:[n.p,(0,s.d)(15)],key:"advisory_type_name"},{title:r.N.formatMessage(l.Z.labelsColumnsReboot),transforms:[n.p,(0,s.d)(20)],key:"reboot_required"},{title:r.N.formatMessage(l.Z.labelsColumnsPublishDate),transforms:[n.p,(0,s.d)(30)],key:"public_date"}],c=[{title:r.N.formatMessage(l.Z.labelsColumnsName),transforms:[n.p,(0,s.d)(20)],key:"name"},{title:r.N.formatMessage(l.Z.labelsColumnsInstalledVersion),transforms:[n.p,(0,s.d)(15)],key:"evra"},{title:r.N.formatMessage(l.Z.labelsColumnsLatestVersion),transforms:[(0,s.d)(15)],key:"latest_update"},{title:r.N.formatMessage(l.Z.labelsColumnsStatus),transforms:[(0,s.d)(10)],key:"updatable"},{title:r.N.formatMessage(l.Z.labelsColumnsSummary),transforms:[n.p,(0,s.d)(40)],key:"summary"}],u=[{key:"name",title:r.N.formatMessage(l.Z.labelsColumnsName),transforms:[n.p,(0,s.d)(25)]},{key:"systems_installed",title:r.N.formatMessage(l.Z.labelsColumnsApplicableSystems),transforms:[n.p,(0,s.d)(15)],props:{width:10}},{key:"systems_updatable",title:r.N.formatMessage(l.Z.labelsColumnsUpgradable),transforms:[n.p,(0,s.d)(10)],props:{width:10}},{key:"summary",title:r.N.formatMessage(l.Z.labelsColumnsSummary),transforms:[n.p,(0,s.d)(40)],props:{width:30}}],f=[{title:r.N.formatMessage(l.Z.labelsColumnsCveID),transforms:[n.p,(0,s.d)(40)],key:"synopsis"},{key:"impact",title:r.N.formatMessage(l.Z.labelsColumnsSeverity),transforms:[n.p,(0,s.d)(30)],props:{width:30}},{key:"cvss",title:r.N.formatMessage(l.Z.labelsColumnsCVSS),transforms:[n.p,(0,s.d)(30)],props:{width:30}}]},71309:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(29439),o=a(43297),n=a.n(o),l=a(80236),r=a(30893),i=a(32132),m=a(38776),c=a(90747),u=a(64270),f=a(28216),p=a(9557),g=a(45697),d=a.n(g),b=a(36248),y=a(5391),C=a(48585),S=function(e){var t=e.cveIds,a=(0,f.I0)(),g=(0,o.useState)([]),d=(0,s.Z)(g,2),S=d[0],v=d[1],h=(0,o.useState)([]),P=(0,s.Z)(h,2),Z=P[0],_=P[1],M=(0,o.useState)(1),E=(0,s.Z)(M,2),N=E[0],k=E[1],I=(0,o.useState)(10),w=(0,s.Z)(I,2),O=w[0],L=w[1],z=(0,o.useState)(void 0),x=(0,s.Z)(z,2),F=x[0],A=x[1],T=(0,o.useState)({direction:C.B.asc,index:0}),U=(0,s.Z)(T,2),B=U[0],R=U[1],D=(0,f.v9)((function(e){return e.CvesListStore.rows})),j=(0,f.v9)((function(e){return e.CvesListStore.status}));n().useEffect((function(){a((0,p.Xt)({cveIds:t}))}),[]),n().useMemo((function(){_(S.slice((N-1)*O,N*O))}),[S,N,O,B]),(0,o.useMemo)((function(){var e=void 0!==F&&""!==F&&D.filter((function(e){var t=e.attributes.synopsis;return t&&F&&t.toLowerCase().includes(F.toLowerCase())}))||D;v((0,b.KW)((0!==e.length||F)&&e||D))}),[F,D]);var q=function(e){var t=e.search;k(N),A(t)};return n().createElement(n().Fragment,null,n().createElement(l.u,{variant:"small",title:i.N.formatMessage(r.Z.labelsCves),isOpen:Boolean(Z),onClose:function(){_(void 0)}},n().createElement(m.Z,{columns:u.g,onSetPage:function(e,t){k(t)},onPerPageSelect:function(e,t){k(1),L(t)},apply:q,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,a){var s=(0,y.Qg)(S,t,a),o=s.sortBy,n=s.sortedCves;R(o),v(n)},sortBy:B,store:{rows:Z,metadata:{limit:O,offset:(N-1)*O,total_items:S&&S.length},status:j,queryParams:{filter:{},search:F}},filterConfig:{items:[(0,c.Z)(q,F,"",i.N.formatMessage(r.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};S.propTypes={cveIds:d().array};const v=S},70347:()=>{},28992:()=>{},30187:()=>{},21626:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},53336:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},97236:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/CvesModal.85e456210cdc14236a4811ec1c57e32b.js.map