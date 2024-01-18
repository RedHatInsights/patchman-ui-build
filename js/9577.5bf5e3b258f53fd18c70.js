"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[9577],{91482:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(83237),a=s(13784),n=s(32132),o=s(30893);const l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{label:n.N.formatMessage(o.Z.labelsFiltersStatus),type:r.Y.checkbox,filterValues:{onChange:function(t,s){!function(t){0===t.length?e({filter:{status:void 0}}):e({filter:{status:t}})}(s)},items:a.HU,value:!t.status||Array.isArray(t.status)?t.status:[t.status],placeholder:n.N.formatMessage(o.Z.labelsColumnsStatusPlaceholder)}}}},80943:(e,t,s)=>{s.d(t,{Z:()=>l});var r=s(83237),a=s(13784),n=s(32132),o=s(30893);const l=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).public_date;return{label:n.N.formatMessage(o.Z.labelsFiltersPublishDate),type:r.Y.radio,filterValues:{onChange:function(t,s){!function(t){e({filter:{public_date:"all"!==t&&t||""}})}(s)},items:a.Ek,value:t,placeholder:n.N.formatMessage(o.Z.labelsFiltersPublishDatePlaceholder)}}}},70133:(e,t,s)=>{s.d(t,{Z:()=>u});var r=s(83237),a=s(43297),n=s.n(a),o=s(13784),l=s(32132),i=s(30893);const u=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).reboot_required,s=n().useMemo((function(){return o.r_.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),a=t&&(Array.isArray(t)&&t.map((function(e){return e.toString()}))||[t.toString()]);return{label:l.N.formatMessage(i.Z.labelsFiltersReboot),type:r.Y.checkbox,filterValues:{onChange:function(t,s){!function(t){e({filter:{reboot_required:t}})}(s)},items:s,value:a,placeholder:l.N.formatMessage(i.Z.labelsFiltersRebootPlaceholder)}}}},16590:(e,t,s)=>{s.d(t,{Z:()=>u});var r=s(83237),a=s(43297),n=s.n(a),o=s(13784),l=s(32132),i=s(30893);const u=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).update_status,s=n().useMemo((function(){return o.tG.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]);return{label:l.N.formatMessage(i.Z.labelsFiltersStatus),type:r.Y.checkbox,filterValues:{onChange:function(t,s){!function(t){e({filter:{update_status:t}})}(s)},items:s,value:t,placeholder:l.N.formatMessage(i.Z.labelsColumnsStatusPlaceholder)}}}},29287:(e,t,s)=>{s.d(t,{Z:()=>u});var r=s(83237),a=s(43297),n=s.n(a),o=s(13784),l=s(32132),i=s(30893);const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},s=n().useMemo((function(){return o.Yi.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]);return{label:l.N.formatMessage(i.Z.labelsFiltersType),type:r.Y.checkbox,filterValues:{onChange:function(t,s){!function(t){e({filter:{advisory_type_name:t}})}(s)},items:s,value:t.advisory_type_name,placeholder:l.N.formatMessage(i.Z.labelsFiltersTypePlaceholder)}}}},64270:(e,t,s)=>{s.d(t,{$$:()=>m,C_:()=>c,fG:()=>u,g:()=>f,z7:()=>i});var r=s(1082),a=s(62480),n=s(7732),o=s(30893),l=s(32132),i=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[a.zW],transforms:[n.p,(0,r.d)(15)],key:"id"},{title:l.N.formatMessage(o.Z.labelsColumnsSynopsis),transforms:[n.p],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[n.p,(0,r.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsAffectedSystems),transforms:[n.p,(0,r.d)(15)],key:"applicable_systems"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[n.p],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[n.p,(0,r.d)(15)],key:"public_date"}],u=[{title:l.N.formatMessage(o.Z.labelsColumnsName),cellFormatters:[a.zW],transforms:[n.p,(0,r.d)(15)],key:"id"},{title:"Synopsis",transforms:[n.p,(0,r.d)(35)],key:"synopsis"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[n.p,(0,r.d)(10)],key:"status"},{title:l.N.formatMessage(o.Z.labelsColumnsType),transforms:[n.p,(0,r.d)(10)],key:"advisory_type_name"},{title:l.N.formatMessage(o.Z.labelsColumnsReboot),transforms:[n.p,(0,r.d)(10)],key:"reboot_required"},{title:l.N.formatMessage(o.Z.labelsColumnsPublishDate),transforms:[n.p,(0,r.d)(10)],key:"public_date"}],c=[{title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[n.p,(0,r.d)(20)],key:"name"},{title:l.N.formatMessage(o.Z.labelsColumnsInstalledVersion),transforms:[n.p,(0,r.d)(15)],key:"evra"},{title:l.N.formatMessage(o.Z.labelsColumnsLatestInstallableVersion),transforms:[(0,r.d)(15)],key:"latest_installable_version"},{title:l.N.formatMessage(o.Z.labelsColumnsLatestApplicableVersion),transforms:[(0,r.d)(15)],key:"latest_applicable_version"},{title:l.N.formatMessage(o.Z.labelsColumnsStatus),transforms:[n.p,(0,r.d)(10)],key:"update_status"},{title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[n.p,(0,r.d)(40)],key:"summary"}],m=[{key:"name",title:l.N.formatMessage(o.Z.labelsColumnsName),transforms:[n.p,(0,r.d)(25)]},{key:"systems_installed",title:l.N.formatMessage(o.Z.labelsColumnsInstalledSystems),transforms:[n.p,(0,r.d)(10)],props:{width:10}},{key:"systems_applicable",title:l.N.formatMessage(o.Z.labelsColumnsApplicableSystems),transforms:[n.p,(0,r.d)(10)],props:{width:10}},{key:"systems_installable",title:l.N.formatMessage(o.Z.labelsColumnsInstallableSystems),transforms:[n.p,(0,r.d)(10)],props:{width:10}},{key:"summary",title:l.N.formatMessage(o.Z.labelsColumnsSummary),transforms:[n.p,(0,r.d)(40)],props:{width:30}}],f=[{title:l.N.formatMessage(o.Z.labelsColumnsCveID),transforms:[n.p,(0,r.d)(40)],key:"synopsis"},{key:"impact",title:l.N.formatMessage(o.Z.labelsColumnsSeverity),transforms:[n.p,(0,r.d)(30)],props:{width:30}},{key:"cvss",title:l.N.formatMessage(o.Z.labelsColumnsCVSS),transforms:[n.p,(0,r.d)(30)],props:{width:30}}]},79577:(e,t,s)=>{s.d(t,{Z:()=>U});var r=s(29439),a=s(43297),n=s.n(a),o=s(62012),l=s(28883),i=s(35262),u=s(29873),c=s(4942),m=s(45697),f=s.n(m),d=s(93942),p=s(80943),y=s(90747),b=s(29287),v=s(70133),g=s(91482),h=s(15984),S=s(38776),Z=s(64270),N=s(9557),k=s(11220),P=s(13784),M=s(36248),C=s(5391),O=s(55091),_=s(32132),E=s(30893);function w(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function A(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?w(Object(s),!0).forEach((function(t){(0,c.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):w(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var j=function(e){var t=e.handleNoSystemData,s=e.inventoryId,l=e.shouldRefresh,i=(0,d.I0)(),u=(0,a.useState)(!0),c=(0,r.Z)(u,2),m=c[0],f=c[1],w=(0,d.v9)((function(e){return e.SystemAdvisoryListStore.rows})),j=(0,d.v9)((function(e){return e.SystemAdvisoryListStore.expandedRows})),I=(0,d.v9)((function(e){return e.SystemAdvisoryListStore.queryParams})),D=(0,d.v9)((function(e){return e.SystemAdvisoryListStore.selectedRows})),R=(0,d.v9)((function(e){return e.SystemAdvisoryListStore.metadata})),F=(0,d.v9)((function(e){return e.SystemAdvisoryListStore.status})),L=(0,a.useMemo)((function(){return(0,M.vR)(w,j,D,R)}),[w,j,D]),T=(0,o.useSearchParams)(),q=(0,r.Z)(T,1)[0],x=(0,O.CA)(I);(0,a.useEffect)((function(){return function(){return i((0,N.bt)())}}),[]),(0,a.useEffect)((function(){m?(z((0,C.PZ)("?"+q.toString())),f(!1)):(x(),i((0,N.DE)(A({id:s},I))))}),[I]),(0,a.useEffect)((function(){l&&i((0,N.DE)(A({id:s},I)))}),[l]);var V=(0,a.useCallback)((function(e,t,s){return i((0,N.gl)({rowId:(0,C.vs)(w,t),value:s}))}),[JSON.stringify(w)]),U=(0,O.ry)(L,D,{endpoint:O.cB.systemAdvisories(s),queryParams:I,selectionDispatcher:N.Xr,constructFilename:function(e){return(null==e?void 0:e.id)||e}}),B=(0,O._f)(Z.fG,z,2),G=n().useMemo((function(){return(0,C.hO)(Z.fG,R.sort,2)}),[R.sort]),Y=(0,O.SL)(R.limit,z),K=(0,O._T)(z);function z(e){i((0,N.sX)(A({id:s},e)))}var H=404===F.code?t():n().createElement(h.Z,null),Q=(0,O.AR)(s,I,{csv:k.yq,json:k.Gv},i);return n().createElement(n().Fragment,null,n().createElement(S.Z,{columns:Z.fG,compact:!0,onCollapse:V,onSelect:U,onSetPage:Y,onPerPageSelect:K,onSort:B,onExport:Q,sortBy:G,remediationProvider:function(){return(0,C.MS)((0,C.Qy)(D),s,P.oN.advisory)},selectedRows:D,systemId:s,apply:z,store:{rows:L,metadata:R,status:F,queryParams:I},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"system-advisories-table",paginationOUIA:"system-advisories-pagination",filterConfig:{items:[(0,y.Z)(z,I.search,_.N.formatMessage(E.Z.labelsFiltersSearchAdvisoriesTitle),_.N.formatMessage(E.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,b.Z)(z,I.filter),(0,p.Z)(z,I.filter),(0,v.Z)(z,I.filter),(0,g.Z)(z,I.filter)]},errorState:H,searchChipLabel:_.N.formatMessage(E.Z.labelsFiltersSearchAdvisoriesTitle)}))};j.propTypes={handleNoSystemData:f().func,inventoryId:f().string.isRequired,shouldRefresh:f().bool};const I=j;var D=s(16590),R=s(91433);function F(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function L(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?F(Object(s),!0).forEach((function(t){(0,c.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):F(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var T=function(e){var t=e.handleNoSystemData,s=e.inventoryId,r=e.shouldRefresh,o=(0,d.I0)(),l=(0,d.v9)((function(e){return e.SystemPackageListStore.rows})),i=(0,d.v9)((function(e){return e.SystemPackageListStore.queryParams})),u=(0,d.v9)((function(e){return e.SystemPackageListStore.selectedRows})),c=(0,d.v9)((function(e){return e.SystemPackageListStore.metadata})),m=(0,d.v9)((function(e){return e.SystemPackageListStore.status})),f=(0,d.v9)((function(e){return e.SystemPackageListStore.error})),p=(0,a.useMemo)((function(){return(0,M.yF)(l,u)}),[l,u]);(0,a.useEffect)((function(){return function(){return o((0,N.ED)())}}),[]),(0,a.useEffect)((function(){o((0,N.ix)(L({id:s},i)))}),[i]),(0,a.useEffect)((function(){r&&o((0,N.ix)(L({id:s},i)))}),[r]);var b=(0,O.ry)(l,u,{endpoint:O.cB.systemPackages(s),queryParams:i,selectionDispatcher:N.dL,constructFilename:function(e){var t=e.updates||[],s=t[t.length-1];return s&&"".concat(e.name,"-").concat(s.evra)},transformKey:function(e){return"".concat(e.name,"-").concat(e.evra)}});function v(e){o((0,N.AE)(L({id:s},e)))}var g=(0,O._f)(Z.C_,v,1),w=(0,a.useMemo)((function(){return(0,C.hO)(Z.C_,c.sort,1)}),[c.sort]),A=(0,O.SL)(c.limit,v),j=(0,O._T)(v),I=404===f.status?t():n().createElement(h.Z,null),F=!m.isLoading&&!m.hasError&&0===c.total_items&&0===Object.keys(i).length&&n().createElement(R.f,null),T=(0,O.AR)(s,i,{csv:k.i,json:k._3},o);return n().createElement(n().Fragment,null,n().createElement(S.Z,{columns:Z.C_,store:{rows:p,metadata:c,status:m,queryParams:i},onSelect:b,selectedRows:u,compact:!0,onSort:g,sortBy:w,onSetPage:A,onPerPageSelect:j,onExport:T,remediationProvider:function(){return(0,C.MS)((0,C.Qy)(u),s,P.oN.package)},apply:v,filterConfig:{items:[(0,y.Z)(v,i.search,_.N.formatMessage(E.Z.labelsFiltersPackagesSearchTitle),_.N.formatMessage(E.Z.labelsFiltersPackagesSearchPlaceHolder)),(0,D.Z)(v,i.filter)]},defaultFilters:P.yi,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"system-packages-table",paginationOUIA:"system-packages-pagination",errorState:I,emptyState:F,searchChipLabel:_.N.formatMessage(E.Z.labelsFiltersPackagesSearchTitle)}))};T.propTypes={handleNoSystemData:f().func,inventoryId:f().string.isRequired,shouldRefresh:f().bool};const q=T;var x=s(87135),V=function(e){var t=e.isInventoryApp,s=e.inventoryId,c=e.shouldRefresh,m=(0,o.useLocation)().state,f=(0,a.useState)("packages"===(null==m?void 0:m.tab)?1:0),d=(0,r.Z)(f,2),p=d[0],y=d[1],b=(0,a.useState)(!1),v=(0,r.Z)(b,2),g=v[0],h=v[1],S=function(){return t&&h((function(e){return!e})),n().createElement(x.Z,null)};return!g&&n().createElement(i.m,{activeKey:p,onSelect:function(e,t){y(t)},className:"patchTabSelect",isHidden:!0},n().createElement(l.O,{eventKey:0,title:n().createElement(u.T,null,_.N.formatMessage(E.Z.titlesAdvisories)),"data-ouia-component-type":"system-advisories-tab","data-ouia-component-id":"system-advisories-tab"},n().createElement(I,{handleNoSystemData:S,inventoryId:s,shouldRefresh:c})),n().createElement(l.O,{eventKey:1,title:n().createElement(u.T,null,_.N.formatMessage(E.Z.titlesPackages)),"data-ouia-component-type":"system-packages-tab","data-ouia-component-id":"system-packages-tab"},n().createElement(q,{handleNoSystemData:S,inventoryId:s,shouldRefresh:c})))||n().createElement(x.Z,null)};V.propTypes={isInventoryApp:f().bool,inventoryId:f().string.isRequired,shouldRefresh:f().bool};const U=V}}]);
//# sourceMappingURL=../sourcemaps/9577.91231121e1e39916e017c343c55fddcc.js.map