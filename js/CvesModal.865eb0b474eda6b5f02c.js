(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[9630],{69957:(e,t,a)=>{"use strict";a.d(t,{LP:()=>l,RI:()=>o,ZP:()=>n});var s=a(40400);const o={name:"ExclamationTriangleIcon",height:512,width:576,svgPath:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},l=(0,s.IU)(o),n=l},38776:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var s=a(29439),o=a(3351),l=a(22860),n=a(6934),r=a(75863),i=a(3962),m=a(81739),c=a(45697),u=a.n(c),p=a(43297),f=a.n(p),g=a(30893),d=a(53074),b=a(5391),y=a(91607),S=a(32132),C=a(44733),v=a(50383),Z=function(e){var t=e.isLoading,a=e.page,s=e.perPage,o=e.onSetPage,l=e.totalItems,n=e.onPerPageSelect,r=e.paginationOUIA;return f().createElement(f().Fragment,null,t?f().createElement("div",{className:"pf-c-pagination pf-m-bottom"},f().createElement(v.O,{fontSize:"xl",width:"350px",style:{margin:10}})):f().createElement(C.t,{itemCount:l,perPage:s,page:a,onSetPage:o,onPerPageSelect:n,widgetId:"pagination-options-menu-bottom",variant:C.a.bottom,ouiaId:r,isDisabled:0===l}))};Z.propTypes={isLoading:u().bool,onSetPage:u().func,onPerPageSelect:u().func,page:u().number,perPage:u().number,totalItems:u().number,paginationOUIA:u().string};const P=Z;var h=a(52579),M=a(1595),N=function(e){var t,a=e.columns,c=e.store,u=c.rows,p=c.metadata,C=c.status,Z=c.queryParams,N=Z.filter,k=Z.search,E=e.onCollapse,I=e.onSelect,_=e.onSetPage,w=e.onPerPageSelect,L=e.onSort,O=e.onExport,A=e.filterConfig,F=e.sortBy,T=e.remediationProvider,x=e.selectedRows,z=e.compact,B=e.apply,U=e.tableOUIA,R=e.paginationOUIA,D=e.errorState,j=e.emptyState,q=e.defaultFilters,V=e.searchChipLabel,H=e.ToolbarButton,W=e.actionsConfig,Q=e.isRemediationLoading,$=e.actionsToggle,G=f().useMemo((function(){return(0,b.CM)(p.limit,p.offset)}),[p.limit,p.offset]),K=(0,s.Z)(G,2),X=K[0],J=K[1],Y=(0,y.j5)(N,B,q),ee=(0,s.Z)(Y,1)[0],te=x&&(0,b.Qy)(x).length,ae=C.code,se=C.hasError,oe=C.isLoading,le=(0,y.Pz)(te,I,p,u,E);return f().createElement(f().Fragment,null,f().createElement(f().Fragment,null,se||!1===p.has_systems?f().createElement(h.Z,{code:ae,ErrorState:D,EmptyState:j,metadata:p}):f().createElement(f().Fragment,null,f().createElement(i.Z,{pagination:oe?f().createElement(v.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:p.total_items,page:X,perPage:J,isCompact:!0,onSetPage:_,onPerPageSelect:w,ouiaId:"top-".concat(R),isDisabled:0===p.total_items},filterConfig:A,activeFiltersConfig:{filters:(0,b.mt)(N,k,V),onDelete:ee,deleteTitle:S.N.formatMessage(q&&g.Z.labelsFiltersReset||g.Z.labelsFiltersClear)},actionsConfig:{actions:[T&&f().createElement(d.Z,{remediationProvider:T,isDisabled:0===Object.values(x).filter((function(e){return e})).length||Q,isLoading:Q})]},exportConfig:{isDisabled:0===p.total_items,onSelect:O},bulkSelect:I&&le},H&&f().createElement(M.E,null,f().createElement(H,null))),oe?f().createElement(m.Z,{colSize:null!==(t=null==a?void 0:a.length)&&void 0!==t?t:5,rowSize:20,variant:z&&r.B.compact}):f().createElement(o.i,{"aria-label":"Patch table view",cells:a,onSelect:p.total_items&&I,rows:u,onCollapse:p.total_items&&E,canSelectAll:!1,onSort:p.total_items&&L,ouiaId:U,sortBy:p.total_items&&F,isStickyHeader:!0,variant:z&&r.B.compact,actions:W,actionsToggle:$},f().createElement(n.x,null),f().createElement(l.R,null)),f().createElement(P,{isLoading:oe,totalItems:p.total_items,perPage:J,page:X,onSetPage:_,onPerPageSelect:w,paginationOUIA:"bottom-".concat(R)}))))};N.propTypes={columns:u().array,onCollapse:u().func,onSelect:u().func,onSetPage:u().func,onPerPageSelect:u().func,onSort:u().func,onExport:u().func,remediationProvider:u().func,selectedRows:u().object,apply:u().func,sortBy:u().object,filterConfig:u().object,store:u().object,compact:u().bool,tableOUIA:u().string,paginationOUIA:u().string,errorState:u().element,emptyState:u().element,defaultFilters:u().object,searchChipLabel:u().string,ToolbarButton:u().elementType,actionsConfig:u().array,isRemediationLoading:u().bool,actionsToggle:u().func};const k=N},64270:(e,t,a)=>{"use strict";a.d(t,{$$:()=>u,C_:()=>c,fG:()=>m,g:()=>p,z7:()=>i});var s=a(1082),o=a(62480),l=a(7732),n=a(30893),r=a(32132),i=[{title:r.N.formatMessage(n.Z.labelsColumnsName),cellFormatters:[o.zW],transforms:[l.p,(0,s.d)(15)],key:"id"},{title:r.N.formatMessage(n.Z.labelsColumnsSynopsis),transforms:[l.p],key:"synopsis"},{title:r.N.formatMessage(n.Z.labelsColumnsType),transforms:[l.p,(0,s.d)(10)],key:"advisory_type_name"},{title:r.N.formatMessage(n.Z.labelsColumnsAffectedSystems),transforms:[l.p,(0,s.d)(15)],key:"applicable_systems"},{title:r.N.formatMessage(n.Z.labelsColumnsReboot),transforms:[l.p],key:"reboot_required"},{title:r.N.formatMessage(n.Z.labelsColumnsPublishDate),transforms:[l.p,(0,s.d)(15)],key:"public_date"}],m=[{title:r.N.formatMessage(n.Z.labelsColumnsName),cellFormatters:[o.zW],transforms:[l.p,(0,s.d)(15)],key:"id"},{title:"Synopsis",transforms:[l.p,(0,s.d)(35)],key:"synopsis"},{title:r.N.formatMessage(n.Z.labelsColumnsStatus),transforms:[l.p,(0,s.d)(10)],key:"status"},{title:r.N.formatMessage(n.Z.labelsColumnsType),transforms:[l.p,(0,s.d)(10)],key:"advisory_type_name"},{title:r.N.formatMessage(n.Z.labelsColumnsReboot),transforms:[l.p,(0,s.d)(10)],key:"reboot_required"},{title:r.N.formatMessage(n.Z.labelsColumnsPublishDate),transforms:[l.p,(0,s.d)(10)],key:"public_date"}],c=[{title:r.N.formatMessage(n.Z.labelsColumnsName),transforms:[l.p,(0,s.d)(20)],key:"name"},{title:r.N.formatMessage(n.Z.labelsColumnsInstalledVersion),transforms:[l.p,(0,s.d)(15)],key:"evra"},{title:r.N.formatMessage(n.Z.labelsColumnsLatestInstallableVersion),transforms:[(0,s.d)(15)],key:"latest_installable_version"},{title:r.N.formatMessage(n.Z.labelsColumnsLatestApplicableVersion),transforms:[(0,s.d)(15)],key:"latest_applicable_version"},{title:r.N.formatMessage(n.Z.labelsColumnsStatus),transforms:[l.p,(0,s.d)(10)],key:"update_status"},{title:r.N.formatMessage(n.Z.labelsColumnsSummary),transforms:[l.p,(0,s.d)(40)],key:"summary"}],u=[{key:"name",title:r.N.formatMessage(n.Z.labelsColumnsName),transforms:[l.p,(0,s.d)(25)]},{key:"systems_installed",title:r.N.formatMessage(n.Z.labelsColumnsInstalledSystems),transforms:[l.p,(0,s.d)(10)],props:{width:10}},{key:"systems_applicable",title:r.N.formatMessage(n.Z.labelsColumnsApplicableSystems),transforms:[l.p,(0,s.d)(10)],props:{width:10}},{key:"systems_installable",title:r.N.formatMessage(n.Z.labelsColumnsInstallableSystems),transforms:[l.p,(0,s.d)(10)],props:{width:10}},{key:"summary",title:r.N.formatMessage(n.Z.labelsColumnsSummary),transforms:[l.p,(0,s.d)(40)],props:{width:30}}],p=[{title:r.N.formatMessage(n.Z.labelsColumnsCveID),transforms:[l.p,(0,s.d)(40)],key:"synopsis"},{key:"impact",title:r.N.formatMessage(n.Z.labelsColumnsSeverity),transforms:[l.p,(0,s.d)(30)],props:{width:30}},{key:"cvss",title:r.N.formatMessage(n.Z.labelsColumnsCVSS),transforms:[l.p,(0,s.d)(30)],props:{width:30}}]},71309:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>v});var s=a(29439),o=a(43297),l=a.n(o),n=a(80236),r=a(30893),i=a(32132),m=a(38776),c=a(90747),u=a(64270),p=a(28216),f=a(9557),g=a(45697),d=a.n(g),b=a(36248),y=a(5391),S=a(48585),C=function(e){var t=e.cveIds,a=(0,p.I0)(),g=(0,o.useState)([]),d=(0,s.Z)(g,2),C=d[0],v=d[1],Z=(0,o.useState)([]),P=(0,s.Z)(Z,2),h=P[0],M=P[1],N=(0,o.useState)(1),k=(0,s.Z)(N,2),E=k[0],I=k[1],_=(0,o.useState)(10),w=(0,s.Z)(_,2),L=w[0],O=w[1],A=(0,o.useState)(void 0),F=(0,s.Z)(A,2),T=F[0],x=F[1],z=(0,o.useState)({direction:S.B.asc,index:0}),B=(0,s.Z)(z,2),U=B[0],R=B[1],D=(0,p.v9)((function(e){return e.CvesListStore.rows})),j=(0,p.v9)((function(e){return e.CvesListStore.status}));l().useEffect((function(){a((0,f.Xt)({cveIds:t}))}),[]),l().useMemo((function(){M(C.slice((E-1)*L,E*L))}),[C,E,L,U]),(0,o.useMemo)((function(){var e=void 0!==T&&""!==T&&D.filter((function(e){var t=e.attributes.synopsis;return t&&T&&t.toLowerCase().includes(T.toLowerCase())}))||D;v((0,b.KW)((0!==e.length||T)&&e||D))}),[T,D]);var q=function(e){var t=e.search;I(E),x(t)};return l().createElement(l().Fragment,null,l().createElement(n.u,{variant:"small",title:i.N.formatMessage(r.Z.labelsCves),isOpen:Boolean(h),onClose:function(){M(void 0)}},l().createElement(m.Z,{columns:u.g,onSetPage:function(e,t){I(t)},onPerPageSelect:function(e,t){I(1),O(t)},apply:q,tableOUIA:"cves-table",paginationOUIA:"cves-pagination",onSort:function(e,t,a){var s=(0,y.Qg)(C,t,a),o=s.sortBy,l=s.sortedCves;R(o),v(l)},sortBy:U,store:{rows:h,metadata:{limit:L,offset:(E-1)*L,total_items:C&&C.length},status:j,queryParams:{filter:{},search:T}},filterConfig:{items:[(0,c.Z)(q,T,"",i.N.formatMessage(r.Z.labelsFiltersCvesSearchPlaceHolder))]}})))};C.propTypes={cveIds:d().array};const v=C},70347:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},53336:()=>{},97236:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/CvesModal.bcc8d7d3b35392cfee3eb0d00b4227f4.js.map