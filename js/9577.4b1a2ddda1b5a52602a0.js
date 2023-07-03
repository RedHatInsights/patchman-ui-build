"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[9577],{91482:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(83237),a=r(13784),n=r(32132),o=r(30893);const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:n.N.formatMessage(o.Z.labelsFiltersStatus),type:s.Y.checkbox,filterValues:{onChange:function(t,r){!function(t){0===t.length?e({filter:{status:void 0}}):e({filter:{status:t}})}(r)},items:a.HU,value:!t.status||Array.isArray(t.status)?t.status:[t.status],placeholder:n.N.formatMessage(o.Z.labelsColumnsStatusPlaceholder)}}}},80943:(e,t,r)=>{r.d(t,{Z:()=>l});var s=r(83237),a=r(13784),n=r(32132),o=r(30893);const l=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).public_date;return{label:n.N.formatMessage(o.Z.labelsFiltersPublishDate),type:s.Y.radio,filterValues:{onChange:function(t,r){!function(t){e({filter:{public_date:"all"!==t&&t||""}})}(r)},items:a.Ek,value:t,placeholder:n.N.formatMessage(o.Z.labelsFiltersPublishDatePlaceholder)}}}},70133:(e,t,r)=>{r.d(t,{Z:()=>u});var s=r(83237),a=r(43297),n=r.n(a),o=r(13784),l=r(32132),i=r(30893);const u=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).reboot_required,r=n().useMemo((function(){return o.r_.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),a=t&&(Array.isArray(t)&&t.map((function(e){return e.toString()}))||[t.toString()]);return{label:l.N.formatMessage(i.Z.labelsFiltersReboot),type:s.Y.checkbox,filterValues:{onChange:function(t,r){!function(t){e({filter:{reboot_required:t}})}(r)},items:r,value:a,placeholder:l.N.formatMessage(i.Z.labelsFiltersRebootPlaceholder)}}}},16590:(e,t,r)=>{r.d(t,{Z:()=>u});var s=r(83237),a=r(43297),n=r.n(a),o=r(13784),l=r(32132),i=r(30893);const u=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).updatable,r=n().useMemo((function(){return o.tG.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]);return{label:l.N.formatMessage(i.Z.labelsFiltersStatus),type:s.Y.checkbox,filterValues:{onChange:function(t,r){!function(t){e({filter:{updatable:t}})}(r)},items:r,value:t,placeholder:l.N.formatMessage(i.Z.labelsColumnsStatusPlaceholder)}}}},29287:(e,t,r)=>{r.d(t,{Z:()=>u});var s=r(83237),a=r(43297),n=r.n(a),o=r(13784),l=r(32132),i=r(30893);const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n().useMemo((function(){return o.Yi.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]);return{label:l.N.formatMessage(i.Z.labelsFiltersType),type:s.Y.checkbox,filterValues:{onChange:function(t,r){!function(t){e({filter:{advisory_type_name:t}})}(r)},items:r,value:t.advisory_type_name,placeholder:l.N.formatMessage(i.Z.labelsFiltersTypePlaceholder)}}}},64270:(e,t,r)=>{r.d(t,{$$:()=>m,C_:()=>c,fG:()=>u,g:()=>f,z7:()=>i});var s=r(1082),a=r(62480),n=r(7732),o=r(30893),l=r(32132),i=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[a.zW],transforms:[n.p,(0,s.d)(15)],key:"id"},{title:l.N.formatMessage(o.Z.labelsColumnsSynopsis),transforms:[n.p],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[n.p,(0,s.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsAffectedSystems),transforms:[n.p,(0,s.d)(15)],key:"applicable_systems"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[n.p],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[n.p,(0,s.d)(15)],key:"public_date"}],u=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[a.zW],transforms:[n.p,(0,s.d)(15)],key:"id"},{title:"Synopsis",transforms:[n.p,(0,s.d)(35)],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[n.p,(0,s.d)(10)],key:"status"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[n.p,(0,s.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[n.p,(0,s.d)(10)],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[n.p,(0,s.d)(10)],key:"public_date"}],c=[{title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[n.p,(0,s.d)(20)],key:"name"},{title:l.N.formatMessage(o.Z.labelsColumnsInstalledVersion),transforms:[n.p,(0,s.d)(15)],key:"evra"},{title:l.N.formatMessage(o.Z.labelsColumnsLatestVersion),transforms:[(0,s.d)(15)],key:"latest_update"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[(0,s.d)(10)],key:"updatable"},{title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[n.p,(0,s.d)(40)],key:"summary"}],m=[{key:"name",title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[n.p,(0,s.d)(25)]},{key:"systems_installed",title:l.N.formatMessage(o.Z.labelsColumnsApplicableSystems),transforms:[n.p,(0,s.d)(15)],props:{width:10}},{key:"systems_updatable",title:l.N.formatMessage(o.Z.labelsColumnsUpgradable),transforms:[n.p,(0,s.d)(10)],props:{width:10}},{key:"summary",title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[n.p,(0,s.d)(40)],props:{width:30}}],f=[{title:l.N.formatMessage(o.Z.labelsColumnsCveID),transforms:[n.p,(0,s.d)(40)],key:"synopsis"},{key:"impact",title:l.N.formatMessage(o.Z.labelsColumnsSeverity),transforms:[n.p,(0,s.d)(30)],props:{width:30}},{key:"cvss",title:l.N.formatMessage(o.Z.labelsColumnsCVSS),transforms:[n.p,(0,s.d)(30)],props:{width:30}}]},79577:(e,t,r)=>{r.d(t,{Z:()=>G});var s=r(29439),a=r(43297),n=r.n(a),o=r(96620),l=r(28883),i=r(35262),u=r(29873),c=r(4942),m=r(45697),f=r.n(m),p=r(28216),y=r(80943),d=r(90747),b=r(29287),v=r(70133),g=r(91482),S=r(15984),h=r(38776),Z=r(64270),N=r(9557),k=r(11220),P=r(13784),M=r(36248),O=r(5391),C=r(91607),E=r(32132),_=r(30893),w=r(93080);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var D=function(e){var t=e.history,r=e.handleNoSystemData,o=e.inventoryId,l=(0,p.I0)(),i=(0,a.useState)(!0),u=(0,s.Z)(i,2),c=u[0],m=u[1],f=(0,p.v9)((function(e){return e.SystemAdvisoryListStore.rows})),A=(0,p.v9)((function(e){return e.SystemAdvisoryListStore.expandedRows})),D=(0,p.v9)((function(e){return e.SystemAdvisoryListStore.queryParams})),F=(0,p.v9)((function(e){return e.SystemAdvisoryListStore.selectedRows})),I=(0,p.v9)((function(e){return e.SystemAdvisoryListStore.metadata})),L=(0,p.v9)((function(e){return e.SystemAdvisoryListStore.status})),R=(0,a.useMemo)((function(){return(0,M.vR)(f,A,F,I)}),[f,A,F]),T=(0,C.CA)(D);(0,a.useEffect)((function(){return function(){return l((0,N.bt)())}}),[]),(0,a.useEffect)((function(){c?(B((0,O.PZ)(t.location.search)),m(!1)):(T(),l((0,N.DE)(j({id:o},D))))}),[D]);var q=(0,a.useCallback)((function(e,t,r){return l((0,N.gl)({rowId:(0,O.vs)(f,t),value:r}))}),[JSON.stringify(f)]),x=(0,w.r)(R,F,{endpoint:w.c.systemAdvisories(o),queryParams:D,selectionDispatcher:N.Xr,constructFilename:function(e){return(null==e?void 0:e.id)||e}}),U=(0,C._f)(Z.fG,B,2),V=n().useMemo((function(){return(0,O.hO)(Z.fG,I.sort,2)}),[I.sort]),G=(0,C.SL)(I.limit,B),Y=(0,C._T)(B);function B(e){l((0,N.sX)(j({id:o},e)))}var K=404===L.code?r():n().createElement(S.Z,null),z=(0,C.AR)(o,D,{csv:k.yq,json:k.Gv},l);return n().createElement(n().Fragment,null,n().createElement(h.Z,{columns:Z.fG,compact:!0,onCollapse:q,onSelect:x,onSetPage:G,onPerPageSelect:Y,onSort:U,onExport:z,sortBy:V,remediationProvider:function(){return(0,O.MS)((0,O.Qy)(F),o,P.oN.advisory)},selectedRows:F,systemId:o,apply:B,store:{rows:R,metadata:I,status:L,queryParams:D},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"system-advisories-table",paginationOUIA:"system-advisories-pagination",filterConfig:{items:[(0,d.Z)(B,D.search,E.N.formatMessage(_.Z.labelsFiltersSearchAdvisoriesTitle),E.N.formatMessage(_.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,b.Z)(B,D.filter),(0,y.Z)(B,D.filter),(0,v.Z)(B,D.filter),(0,g.Z)(B,D.filter)]},errorState:K,searchChipLabel:E.N.formatMessage(_.Z.labelsFiltersSearchAdvisoriesTitle)}))};D.propTypes={history:f().object,handleNoSystemData:f().func,inventoryId:f().string.isRequired};const F=(0,o.withRouter)(D);var I=r(16590),L=r(91433);function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q=function(e){var t=e.handleNoSystemData,r=e.inventoryId,s=(0,p.I0)(),o=(0,p.v9)((function(e){return e.SystemPackageListStore.rows})),l=(0,p.v9)((function(e){return e.SystemPackageListStore.queryParams})),i=(0,p.v9)((function(e){return e.SystemPackageListStore.selectedRows})),u=(0,p.v9)((function(e){return e.SystemPackageListStore.metadata})),c=(0,p.v9)((function(e){return e.SystemPackageListStore.status})),m=(0,p.v9)((function(e){return e.SystemPackageListStore.error})),f=(0,a.useMemo)((function(){return(0,M.yF)(o,i)}),[o,i]);(0,a.useEffect)((function(){return function(){return s((0,N.ED)())}}),[]),(0,a.useEffect)((function(){s((0,N.ix)(T({id:r},l)))}),[l]);var y=(0,w.r)(o,i,{endpoint:w.c.systemPackages(r),queryParams:l,selectionDispatcher:N.dL,constructFilename:function(e){var t=e.updates||[],r=t[t.length-1];return r&&"".concat(e.name,"-").concat(r.evra)},transformKey:function(e){return"".concat(e.name,"-").concat(e.evra)}});function b(e){s((0,N.AE)(T({id:r},e)))}var v=(0,C._f)(Z.C_,b,1),g=(0,a.useMemo)((function(){return(0,O.hO)(Z.C_,u.sort,1)}),[u.sort]),A=(0,C.SL)(u.limit,b),j=(0,C._T)(b),D=404===m.status?t():n().createElement(S.Z,null),F=!c.isLoading&&!c.hasError&&0===u.total_items&&0===Object.keys(l).length&&n().createElement(L.f,null),R=(0,C.AR)(r,l,{csv:k.i,json:k._3},s);return n().createElement(n().Fragment,null,n().createElement(h.Z,{columns:Z.C_,store:{rows:f,metadata:u,status:c,queryParams:l},onSelect:y,selectedRows:i,compact:!0,onSort:v,sortBy:g,onSetPage:A,onPerPageSelect:j,onExport:R,remediationProvider:function(){return(0,O.MS)((0,O.Qy)(i),r,P.oN.package)},apply:b,filterConfig:{items:[(0,d.Z)(b,l.search,E.N.formatMessage(_.Z.labelsFiltersPackagesSearchTitle),E.N.formatMessage(_.Z.labelsFiltersPackagesSearchPlaceHolder)),(0,I.Z)(b,l.filter)]},defaultFilters:P.yi,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"system-packages-table",paginationOUIA:"system-packages-pagination",errorState:D,emptyState:F,searchChipLabel:E.N.formatMessage(_.Z.labelsFiltersPackagesSearchTitle)}))};q.propTypes={handleNoSystemData:f().func,inventoryId:f().string.isRequired};const x=q;var U=r(87135),V=function(e){var t=e.isInventoryApp,r=e.inventoryId,c=(0,o.useLocation)().state,m=(0,a.useState)("packages"===(null==c?void 0:c.tab)?1:0),f=(0,s.Z)(m,2),p=f[0],y=f[1],d=(0,a.useState)(!1),b=(0,s.Z)(d,2),v=b[0],g=b[1],S=function(){return t&&g((function(e){return!e})),n().createElement(U.Z,null)};return!v&&n().createElement(i.m,{activeKey:p,onSelect:function(e,t){y(t)},className:"patchTabSelect",isHidden:!0},n().createElement(l.O,{eventKey:0,title:n().createElement(u.T,null,E.N.formatMessage(_.Z.titlesAdvisories)),"data-ouia-component-type":"system-advisories-tab","data-ouia-component-id":"system-advisories-tab"},n().createElement(F,{handleNoSystemData:S,inventoryId:r})),n().createElement(l.O,{eventKey:1,title:n().createElement(u.T,null,E.N.formatMessage(_.Z.titlesPackages)),"data-ouia-component-type":"system-packages-tab","data-ouia-component-id":"system-packages-tab"},n().createElement(x,{handleNoSystemData:S,inventoryId:r})))||n().createElement(U.Z,null)};V.propTypes={isInventoryApp:f().bool,inventoryId:f().string.isRequired};const G=V}}]);
//# sourceMappingURL=../sourcemaps/9577.62b73ca3e92cfea85eec847d54e9dbbe.js.map