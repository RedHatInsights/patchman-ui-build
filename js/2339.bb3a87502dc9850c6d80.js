(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[2339],{83905:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(93433),r=n(29439),o=n(43297),s=n(28216),l=n(54025),i=n(11220);const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),c=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded})),m=(0,o.useState)([]),u=(0,r.Z)(m,2),p=u[0],f=u[1],d=(0,l.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),g=(0,r.Z)(d,1)[0],v=void 0===g?{}:g,h=v.toGroupSelectionValue,b=v.buildOSFilterConfig;(0,o.useEffect)((function(){void 0!==n&&void 0!==c||(0,i.GB)().then((function(e){var t=e.results;f((t||[]).map((function(e){var t=e.value,n=t.name,a=t.major,r=t.minor,o="".concat(a,".").concat(r);return{label:"".concat(n," ").concat(o),value:"".concat(o)}})))}))}),[]),(0,o.useEffect)((function(){!0===c&&f(n)}),[c]);var E=(""===e?[]:e.split(",")).map((function(e){return e.substring(5)}));return(0,a.Z)(b?[b({id:"rhel_version",value:h(E),onChange:function(e,n){var a=Object.values(n).flatMap((function(e){return Object.keys(e)})).map((function(e){return"RHEL ".concat(e)})).toString();t({filter:{os:a}})}},p)]:[])}},49642:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var a=n(79851),r=n(34512),o=n(80123),s=n(39173),l=n(45697),i=n.n(l),c=n(43297),m=n.n(c),u=n(64029),p=n(32835),f=n(96620),d=function(e){var t=e.items,n=e.headerOUIA;return m().createElement(u.a,null,t.filter(Boolean).map((function(e){return m().createElement(p.g,{key:e.title,isActive:e.isActive},e.to?m().createElement(f.Link,{to:e.to,"data-ouia-component-type":"".concat(n,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};d.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const g=d;var v=n(28883),h=n(35262),b=function(e){var t=e.history,n=e.headerOUIA;return m().createElement(h.m,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},m().createElement(v.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Applicable advisories'")}),m().createElement(v.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Systems")}))};b.propTypes={history:i().object,headerOUIA:i().string};const E=(0,f.withRouter)(b);var y=function(e){var t=e.title,n=e.showTabs,l=e.breadcrumbs,i=e.children,c=e.headerOUIA,u=e.actions;return m().createElement(m().Fragment,null,m().createElement(o.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},l&&m().createElement(g,{items:l,headerOUIA:c}),m().createElement(a.P,{hasGutter:!0},m().createElement(r.J,null,m().createElement(s.Z,{title:t})),m().createElement(r.J,{isFilled:!0}),m().createElement(r.J,null,u)),i),n&&m().createElement(E,{headerOUIA:c}))};y.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const S=y},91433:(e,t,n)=>{"use strict";n.d(t,{f:()=>f});var a=n(52643),r=n(9947),o=n(75106),s=n(38424),l=n(60485),i=n(68778),c=n(43297),m=n.n(c),u=n(32132),p=n(30893),f=function(){return m().createElement(a.b,null,m().createElement(r.u,{style:{paddingTop:40}},m().createElement(s.k,{icon:function(){return m().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),m().createElement(l.D,{headingLevel:"h5",size:"lg"},u.N.formatMessage(p.Z.statesNoApplicableAdvisories)),m().createElement(o.B,null,u.N.formatMessage(p.Z.statesSystemUpToDate))))}},38776:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var a=n(29439),r=n(3351),o=n(22860),s=n(6934),l=n(75863),i=n(3962),c=n(81739),m=n(45697),u=n.n(m),p=n(43297),f=n.n(p),d=n(30893),g=n(53074),v=n(5391),h=n(91607),b=n(32132),E=n(44733),y=n(50383),S=function(e){var t=e.isLoading,n=e.page,a=e.perPage,r=e.onSetPage,o=e.totalItems,s=e.onPerPageSelect,l=e.paginationOUIA;return f().createElement(f().Fragment,null,t?f().createElement("div",{className:"pf-c-pagination pf-m-bottom"},f().createElement(y.O,{fontSize:"xl",width:"350px",style:{margin:10}})):f().createElement(E.t,{itemCount:o,perPage:a,page:n,onSetPage:r,onPerPageSelect:s,widgetId:"pagination-options-menu-bottom",variant:E.a.bottom,ouiaId:l,isDisabled:0===o}))};S.propTypes={isLoading:u().bool,onSetPage:u().func,onPerPageSelect:u().func,page:u().number,perPage:u().number,totalItems:u().number,paginationOUIA:u().string};const P=S;var Z=n(52579),O=n(1595),D=function(e){var t,n=e.columns,m=e.store,u=m.rows,p=m.metadata,E=m.status,S=m.queryParams,D=S.filter,N=S.search,w=e.onCollapse,T=e.onSelect,I=e.onSetPage,C=e.onPerPageSelect,M=e.onSort,x=e.onExport,j=e.filterConfig,F=e.sortBy,k=e.remediationProvider,_=e.selectedRows,A=e.compact,R=e.apply,L=e.tableOUIA,U=e.paginationOUIA,B=e.errorState,z=e.emptyState,q=e.defaultFilters,G=e.searchChipLabel,K=e.ToolbarButton,J=e.actionsConfig,Q=e.isRemediationLoading,W=e.actionsToggle,$=f().useMemo((function(){return(0,v.CM)(p.limit,p.offset)}),[p.limit,p.offset]),H=(0,a.Z)($,2),V=H[0],Y=H[1],X=(0,h.j5)(D,R,q),ee=(0,a.Z)(X,1)[0],te=_&&(0,v.Qy)(_).length,ne=E.code,ae=E.hasError,re=E.isLoading,oe=(0,h.Pz)(te,T,p,u,w);return f().createElement(f().Fragment,null,f().createElement(f().Fragment,null,ae||!1===p.has_systems?f().createElement(Z.Z,{code:ne,ErrorState:B,EmptyState:z,metadata:p}):f().createElement(f().Fragment,null,f().createElement(i.Z,{pagination:re?f().createElement(y.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:p.total_items,page:V,perPage:Y,isCompact:!0,onSetPage:I,onPerPageSelect:C,ouiaId:"top-".concat(U),isDisabled:0===p.total_items},filterConfig:j,activeFiltersConfig:{filters:(0,v.mt)(D,N,G),onDelete:ee,deleteTitle:b.N.formatMessage(q&&d.Z.labelsFiltersReset||d.Z.labelsFiltersClear)},actionsConfig:{actions:[k&&f().createElement(g.Z,{remediationProvider:k,isDisabled:0===Object.values(_).filter((function(e){return e})).length||Q,isLoading:Q})]},exportConfig:{isDisabled:0===p.total_items,onSelect:x},bulkSelect:T&&oe},K&&f().createElement(O.E,null,f().createElement(K,null))),re?f().createElement(c.Z,{colSize:null!==(t=null==n?void 0:n.length)&&void 0!==t?t:5,rowSize:20,variant:A&&l.B.compact}):f().createElement(r.i,{"aria-label":"Patch table view",cells:n,onSelect:p.total_items&&T,rows:u,onCollapse:p.total_items&&w,canSelectAll:!1,onSort:p.total_items&&M,ouiaId:L,sortBy:p.total_items&&F,isStickyHeader:!0,variant:A&&l.B.compact,actions:J,actionsToggle:W},f().createElement(s.x,null),f().createElement(o.R,null)),f().createElement(P,{isLoading:re,totalItems:p.total_items,perPage:Y,page:V,onSetPage:I,onPerPageSelect:C,paginationOUIA:"bottom-".concat(U)}))))};D.propTypes={columns:u().array,onCollapse:u().func,onSelect:u().func,onSetPage:u().func,onPerPageSelect:u().func,onSort:u().func,onExport:u().func,remediationProvider:u().func,selectedRows:u().object,apply:u().func,sortBy:u().object,filterConfig:u().object,store:u().object,compact:u().bool,tableOUIA:u().string,paginationOUIA:u().string,errorState:u().element,emptyState:u().element,defaultFilters:u().object,searchChipLabel:u().string,ToolbarButton:u().elementType,actionsConfig:u().array,isRemediationLoading:u().bool,actionsToggle:u().func};const N=D},64193:(e,t,n)=>{"use strict";n.d(t,{Z:()=>nt});var a=n(4942),r=n(87462),o=n(29439),s=n(43297),l=n.n(s),i=n(45697),c=n.n(i),m=n(11777),u=n(67850),p=n(96354),f=n(26854),d=n(65412),g=n(74777),v=n(80236),h=n(77583),b=n(28216),E=n(48880),y=n(68340),S=n(68774),P=n(49739),Z=n(83826),O=n(35575),D=n(32132),N=n(30893),w=n(23279),T=n.n(w),I=n(71973),C=n(93174),M=n(54680),x=n(92694),j=n(64403),F=n(59775),k=n(2372),_=n(28191),A=n(92298),R=n(47173),L=n(9557);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.changePage,n=e.page,a=e.perPage,r=e.totalItems;return l().createElement(_.k,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(A.B,null,l().createElement(R.zx,{variant:"plain","aria-label":"prev",isDisabled:1===n,onClick:function(){return t(n-1)}},l().createElement(I.ZP,null))),l().createElement(A.B,null,l().createElement(R.zx,{variant:"plain","aria-label":"next",isDisabled:r<n*a,onClick:function(){return t(n+1)}},l().createElement(C.ZP,null))))},q=function(e){var t=e.setSelectedPatchSet,n=e.selectedSets,a=e.systems,r=(0,b.I0)(),i=(0,E.default)(),c=(0,s.useState)(!0),m=(0,o.Z)(c,2),u=m[0],p=m[1],f=(0,b.v9)((function(e){return e.PatchSetsStore.rows})),d=(0,b.v9)((function(e){return e.PatchSetsStore.queryParams})),g=(0,b.v9)((function(e){return e.PatchSetsStore.status})),v=(0,b.v9)((function(e){return e.PatchSetsStore.metadata}));(0,s.useEffect)((function(){return function(){r((0,L.Im)())}}),[]);var h=(d||{}).search,y="string"==typeof h&&""!==h?h:Boolean(h);(0,s.useEffect)((function(){r((0,L.BY)(B(B({},d),{},{offset:d.offset+(d.page-1)*d.perPage})))}),[d.page,y]);var S=(0,s.useMemo)((function(){return g.isLoading?[l().createElement(x.$,{key:"loading"},l().createElement(k.$,{size:"md"}))]:null==f?void 0:f.map((function(e){return l().createElement(x.$,{key:e.id,value:e.name})}))}),[f,g.isLoading]),P=(0,s.useState)((function(){return T()((function(e){return t={search:e},void r((0,L.br)(t));var t}),700)})),Z=(0,o.Z)(P,1)[0];return l().createElement(F.c,{fieldId:"existing_patch_set",label:D.N.formatMessage(N.Z.textTemplateChoose),isRequired:!0},l().createElement(M.P,{variant:j.TM.single,"aria-label":D.N.formatMessage(N.Z.labelsFiltersSearchTemplatePlaceholder),onSelect:function(e,n){p(!1),t(n);var r,o,s=f.filter((function(e){return e.name===n}));1===s.length&&i.change("existing_patch_set",{name:null===(r=s[0])||void 0===r?void 0:r.name,systems:a,id:null===(o=s[0])||void 0===o?void 0:o.id})},placeholderText:D.N.formatMessage(N.Z.labelsFiltersSearchTemplatePlaceholder),inlineFilterPlaceholderText:D.N.formatMessage(N.Z.labelsFiltersSearchTemplatePlaceholder),selections:n,onToggle:function(){p(!u)},isOpen:u,isDisabled:!1,onFilter:function(e,t){Z(t)},hasInlineFilter:!0,className:"patch-existing-sets",footer:l().createElement(z,{changePage:function(e){r((0,L.br)(B(B({},d),{},{page:e})))},page:d.page,perPage:d.perPage,totalItems:v.total_items})},S))};z.propTypes={changePage:c().func,page:c().number,perPage:c().number,totalItems:c().number},q.propTypes={setSelectedPatchSet:c().func,selectedSets:c().array,systems:c().array};const G=q;var K=n(50693),J=n(16475),Q=n(64124),W=n(5391);const $=function(e){if(e&&"string"==typeof e&&null===e.match(/^(\d{4})-(0[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return D.N.formatMessage(N.Z.labelsErrorInvalidDate);var t=new Date(e),n=t.getTime(),a=new Date(1990,0,1);return"number"!=typeof n||Number.isNaN(n)?D.N.formatMessage(N.Z.labelsErrorInvalidDate):t<a?D.N.formatMessage(N.Z.labelsErrorDateLimit):void 0};var H=n(72573),V=[{key:"display_name",title:"Name",props:{width:40},transforms:[H.sortable]},{title:"OS",key:"operating_system",props:{width:20},transforms:[H.sortable]},{key:"baseline_name",title:"Template",props:{width:20},transforms:[H.sortable]},{key:"last_upload",title:"Last seen",props:{width:20},transforms:[H.sortable]}],Y=[{name:"configurationStep",component:"configurationStep"},{name:"existing_patch_set",component:p.Z.TEXT_FIELD,hidden:!0}],X=[{name:"contentStep",component:"contentStep"}],ee=[{name:"name",component:"nameField",validate:[{type:Q.Z.REQUIRED}]}],te=[{name:"description",component:"descriptionField"}],ne=[{name:"toDate",component:"toDateField",validate:[{type:Q.Z.REQUIRED},{type:"validate-date"}]}],ae=function(e){return"edit"===e?D.N.formatMessage(N.Z.templateEdit):D.N.formatMessage(N.Z.templateTitle)},re=function(e){return{fields:[{component:p.Z.WIZARD,name:"patch-set-wizard",isDynamic:!0,inModal:!0,title:ae(e),description:l().createElement(s.Fragment,null,D.N.formatMessage(N.Z.templateDescription)),fields:[{name:"template-content",title:D.N.formatMessage(N.Z.templateContentStepSidebarName),fields:X,nextStep:"template-details"},{name:"template-details",title:D.N.formatMessage(N.Z.templateDetailStepSidebarName),fields:Y,nextStep:"template-systems"},{name:"template-systems",title:D.N.formatMessage(N.Z.templateStepSystems),fields:[{name:"systems",component:"reviewSystems"}],nextStep:"template-review"},{name:"template-review",title:D.N.formatMessage(N.Z.templateReview),fields:[{name:"review",component:"reviewPatchSet"}]}]}]}},oe={"validate-systems":function(){return function(e){var t=(0,W.LI)(e);return void 0===t||t.length>0?void 0:D.N.formatMessage(N.Z.templateNoSystemSelected)}},"validate-date":function(){return $}},se=function(e){var t=e.isLoading,n=(0,E.default)().renderForm;return t?l().createElement(k.$,{size:"md"}):l().createElement(K.r,{hasGutter:!0},l().createElement(J.P,{lg:12,md:12},n(ee)),l().createElement(J.P,{lg:12,md:12},n(te)))};se.propTypes={isLoading:c().bool};const le=se;var ie=function(e){var t=e.systemsIDs,n=e.patchSetID,a=(0,E.default)(),r=!n&&0!==(null==t?void 0:t.length)||!1,i=(0,s.useState)(!1),c=(0,o.Z)(i,2),m=c[0],u=c[1],p=(0,s.useState)(!0),f=(0,o.Z)(p,2),d=f[0],g=f[1],v=(0,s.useState)([]),h=(0,o.Z)(v,2),w=h[0],T=h[1],I=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU),C=I.patchSet,M=I.status,x=function(){g(!d),u(!m)};return(0,s.useEffect)((function(){if(n){var e=C.name,t=C.description;a.change("name",e),a.change("description",t)}}),[C]),l().createElement(P.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(y.x,{component:"h2"},D.N.formatMessage(N.Z.templateDetailStepTitle)))),l().createElement(Z.v,null,D.N.formatMessage(N.Z.templateDetailStepText)),r&&l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(y.x,{component:y.q.p},D.N.formatMessage(N.Z.textTemplateSelectedSystems,{systemsCount:t.length,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}))),l().createElement(Z.v,null,l().createElement(P.K,{hasGutter:!0},r&&l().createElement(l().Fragment,null,l().createElement(Z.v,null,l().createElement(O.Y,{isChecked:m,name:"radio",onChange:x,label:D.N.formatMessage(N.Z.textTemplateAddToExisting),id:"existing-template"})),l().createElement(Z.v,null,m?l().createElement(G,{setSelectedPatchSet:T,selectedSets:w,systems:t}):null),l().createElement(Z.v,null,l().createElement(O.Y,{isChecked:d,name:"radio",onChange:x,label:D.N.formatMessage(N.Z.textTemplateCreateNew),id:"new-template"})))||null,l().createElement(Z.v,null,d?l().createElement(le,{isLoading:n&&M.isLoading}):null))))};ie.propTypes={systemsIDs:c().array,patchSetID:c().string};const ce=ie;var me=n(22629),ue=function(e){var t=e.patchSetID,n=(0,E.default)(),a=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU).patchSet;return(0,s.useEffect)((function(){if(t){var e=a.config.to_time;n.change("toDate",(0,W.MC)(e))}}),[a]),l().createElement(P.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(y.x,{component:"h2"},D.N.formatMessage(N.Z.templateContentStepTitle)))),l().createElement(Z.v,null,D.N.formatMessage(N.Z.templateContentStepText)),l().createElement(Z.v,null,n.renderForm(ne)),l().createElement(Z.v,null,l().createElement(me.L,{toggleText:D.N.formatMessage(N.Z.templateContentStepExpandableTitle)},D.N.formatMessage(N.Z.templateContentStepExpandable))))};ue.propTypes={patchSetID:c().string};const pe=ue;var fe=n(92607),de=n(41693);const ge=function(e){var t,n=(0,de.Z)(e).input,a=null===(t=(0,E.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.name),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.name)}),[a.name]),l().createElement(F.c,{fieldId:"name",label:D.N.formatMessage(N.Z.labelsColumnsName),isRequired:!0},l().createElement(fe.oi,{type:"text",isRequired:!0,value:c,onChange:function(e){n.onChange(e),m(e)},"aria-label":"name",autoFocus:!0}))};var ve=n(56760);const he=function(e){var t,n=(0,de.Z)(e).input,a=null===(t=(0,E.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.toDate),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.toDate)}),[a.toDate]),l().createElement(F.c,{fieldId:"toDate",label:D.N.formatMessage(N.Z.templateDateField),isRequired:!0},l().createElement(_.k,null,l().createElement(A.B,{lg:2,md:2},D.N.formatMessage(N.Z.templateDateUpto)),l().createElement(A.B,{lg:10,md:10},l().createElement(ve.M,{value:c,onChange:function(e){n.onChange(e),m(e)},popoverProps:{position:"right"},"aria-label":"toDate",validators:[$],invalidFormatText:D.N.formatMessage(N.Z.labelsErrorInvalidDate)}))))},be=function(e){var t,n=(0,de.Z)(e).input,a=null===(t=(0,E.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.description),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.description)}),[a.description]),l().createElement(F.c,{fieldId:"description",label:D.N.formatMessage(N.Z.labelsDescription)},l().createElement(fe.oi,{type:"text",isRequired:!0,value:c,onChange:function(e){n.onChange(e),m(e)},"aria-label":"description"}))};var Ee=n(93433),ye=n(45987),Se=n(90747),Pe=n(41448),Ze=n(36248),Oe=n(91607),De=n(38776),Ne=n(75585),we=n(23188),Te=n(11220),Ie=n(13784),Ce=n(83905),Me=n(93080),xe=["systemsIDs"];function je(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?je(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):je(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=function(e){var t=e.systemsIDs,n=void 0===t?[]:t,a=(0,ye.Z)(e,xe),r=(0,de.Z)(a).input,i=(0,E.default)().getState().values,c=(0,W.Qh)(n,null==i?void 0:i.systems),m=(0,s.useState)(!0),u=(0,o.Z)(m,2),p=u[0],f=u[1],d=(0,s.useState)([]),g=(0,o.Z)(d,2),v=g[0],h=g[1],O=(0,s.useState)([]),w=(0,o.Z)(O,2),T=w[0],I=w[1],C=(0,s.useState)(c),M=(0,o.Z)(C,2),x=M[0],j=M[1],F=(0,s.useState)({limit:20,offset:0,total_items:0}),k=(0,o.Z)(F,2),_=k[0],A=k[1],R=(0,s.useState)({page:1,perPage:20,filter:{stale:[!0,!1]}}),L=(0,o.Z)(R,2),U=L[0],B=L[1],z=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU).assignedSystems;(0,s.useEffect)((function(){(0,Te.lc)(Fe(Fe({},U),{},{filter:Fe(Fe({},U.filter),{},{id:n.length>0?"in:".concat(n.join(",")):void 0})})).then((function(e){I((0,Ze.ub)(e.data,Fe(Fe({},(0,W.Qh)([].concat((0,Ee.Z)(z),(0,Ee.Z)(n)))),x))),A(e.meta),h(e.data),f(!1)}))}),[U.filter,U]),(0,s.useEffect)((function(){r.onChange(x),I((0,Ze.ub)(v,x))}),[x]),(0,s.useEffect)((function(){j(Fe(Fe({},x),(0,W.Qh)(z)))}),[z]);var q=function(e){f(!0),B((function(t){return Fe(Fe(Fe({},t),e),{},{filter:Fe(Fe({},t.filter),e.filter),page:1,offset:0})}))},G=(0,Ce.Z)(U.filter.os,q),K=(0,Oe._f)(V,q,1),J=l().useMemo((function(){return(0,W.hO)(V,_.sort,1)}),[_.sort]),Q=(0,Oe.SL)(_.limit,q),$=(0,Oe._T)(q),H=(0,Me.r)(T,x,{endpoint:Me.c.systems,queryParams:Fe(Fe({},U),{},{filter:Fe(Fe({},U.filter),n.length>0&&{id:"in:".concat(n.join(","))})}),customSelector:function(e){var t=e.reduce((function(e,t){return e[t.id]=!!t.selected||void 0,e}),{});j(Fe(Fe({},x),t))}});return l().createElement(P.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(y.x,{component:"h2"},D.N.formatMessage(N.Z.templateApplySystems)))),l().createElement(Z.v,null,l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(y.x,{component:y.q.p},D.N.formatMessage(N.Z.textTemplateReviewSystems)))),l().createElement(Pe.b,{variant:"warning",title:D.N.formatMessage(N.Z.templateAlertSystems),isInline:!0}),l().createElement(Z.v,null,l().createElement(De.Z,{columns:V,compact:!0,onSetPage:Q,onPerPageSelect:$,onSort:K,selectedRows:x,onSelect:H,sortBy:J,apply:q,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:T,metadata:_,status:{isLoading:p},queryParams:U},filterConfig:{items:[(0,Se.Z)(q,U.search,D.N.formatMessage(N.Z.labelsFiltersSystemsSearchTitle),D.N.formatMessage(N.Z.labelsFiltersSearch)),(0,Ne.Z)(q,U.filter),(0,we.Z)(q,U.filter)].concat((0,Ee.Z)(G))},searchChipLabel:D.N.formatMessage(N.Z.labelsFiltersSystemsSearchTitle),defaultFilters:Ie.hb})))};ke.propTypes={systemsIDs:c().array};const _e=ke;var Ae=n(25834),Re=n(78140),Le=function(e,t){return l().createElement(s.Fragment,null,l().createElement(Re.T,{component:Re.v.dt,style:{minWidth:220}},D.N.formatMessage(N.Z[e])),l().createElement(Re.T,{component:Re.v.dd},t))};const Ue=function(){var e=(0,E.default)().getState().values,t=e.existing_patch_set||e,n=t.name,a=t.description,r=t.toDate,o=e.systems;return l().createElement(P.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(y.x,{component:"h2"},D.N.formatMessage(N.Z.templateReview)))),l().createElement(Z.v,null,l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(y.x,{component:y.q.p},D.N.formatMessage(N.Z.textPatchTemplateReview)))),l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(y.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},D.N.formatMessage(N.Z.textPatchTemplateContent)),l().createElement(Ae.G,{component:Ae.F.dl},Le("labelsColumnsUpToDate",(0,W.jC)(r))))),l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(y.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},D.N.formatMessage(N.Z.textPatchTemplateDetails)),l().createElement(Ae.G,{component:Ae.F.dl},Le("labelsColumnsName",n),Le("labelsDescription",a||D.N.formatMessage(N.Z.titlesTemplateNoDescriptionProvided))))),l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(y.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},D.N.formatMessage(N.Z.textPatchTemplateSystems)),l().createElement(Ae.G,{component:Ae.F.dl},Le("labelsSelectedSystems",D.N.formatMessage(N.Z.labelsSystem,{systemsCount:Object.values(o).filter((function(e){return e})).length}))))))};var Be=n(60485),ze=n(9947),qe=n(38424),Ge=n(75106),Ke=n(36621),Je=n(65673),Qe=n(68778),We=n(43047),$e=n(94768),He=n(83215),Ve=function(e){var t=e.onClose,n=e.state,a=n.requestPending,r=n.failed,o=n.error,s=(0,b.I0)();return r&&s((0,He.wN)({title:"There was an error while processing your request",description:o.detail,variant:"danger"})),l().createElement(ze.u,{variant:ze.I.large,"data-component-ouia-id":"patch-set-progress"},l().createElement(qe.k,{color:r?"var(--pf-global--danger-color--100)":a?void 0:"var(--pf-global--success-color--100)",icon:r?We.ZP:a?$e.ZP:Qe.ZP}),l().createElement(Be.D,{headingLevel:"h1",size:"lg"},r?D.N.formatMessage(N.Z.textErrorSomethingWrong):a?D.N.formatMessage(N.Z.textConfigurationInProgress):D.N.formatMessage(N.Z.textPatchTemplateSuccessfuly)),l().createElement(Ge.B,null,l().createElement(K.r,{hasGutter:!0},a&&l().createElement(l().Fragment,null,l().createElement(J.P,null,l().createElement(Ke.p,null,l().createElement(Je.u,{variant:"indeterminate"},D.N.formatMessage(N.Z.textPatchTemplatePending)))),l().createElement(J.P,null,l().createElement(R.zx,{variant:"link",isInline:!0,onClick:t},D.N.formatMessage(N.Z.labelsCancel))," ")),!a&&!r&&l().createElement(J.P,null,l().createElement(R.zx,{variant:"primary",onClick:t},D.N.formatMessage(N.Z.textReturnToApp))),!a&&r&&l().createElement(l().Fragment,null,l().createElement(J.P,null,l().createElement(Ke.p,null,l().createElement(Je.u,{variant:"indeterminate"},D.N.formatMessage(N.Z.templateError,{a:function(e){return l().createElement("a",{href:"https://www.redhat.com/en/services/support"},e)}})))),l().createElement(J.P,null,l().createElement(R.zx,{variant:"primary",onClick:t},D.N.formatMessage(N.Z.textReturnToApp)))))))};Ve.propTypes={onClose:c().func,state:c().object};const Ye=Ve;function Xe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function et(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var tt=function(e){var t,n=e.systemsIDs,i=e.setBaselineState,c=e.patchSetID,E=c?"edit":"create",y=(0,s.useState)({submitted:!1,formValues:{},requestPending:!0,failed:!1,shouldRefresh:!1}),S=(0,o.Z)(y,2),P=S[0],Z=S[1],O=(0,b.I0)();(0,s.useEffect)((function(){return c&&(O((0,L.gK)(c)),O((0,L.JJ)({id:c,limit:-1}))),function(){return O((0,L.r8)())}}),[]);var w=(0,Oe.np)(P,Z,c),T=function(){var e=!P.failed&&P.submitted;i({isPatchSetWizardOpen:!1,systemsIDs:[],patchSetID:void 0,shouldRefresh:e}),Z({formValues:{},submitted:!1})},I={nameField:{component:ge},descriptionField:{component:be},toDateField:{component:he},contentStep:{component:pe,patchSetID:c},configurationStep:{component:ce,systemsIDs:n||[],patchSetID:c},reviewSystems:{component:_e,systemsIDs:n||[]},reviewPatchSet:{component:Ue,systemsIDs:n||[]}};return l().createElement(s.Fragment,null,!P.submitted&&l().createElement(m.Z,{schema:re(E),subscription:{values:!0},FormTemplate:function(e){return l().createElement(u.ZP,(0,r.Z)({},e,{showFormControls:!1}))},componentMapper:et((t={},(0,a.Z)(t,p.Z.WIZARD,{component:f.Z,className:"patch-set","data-ouia-component-id":"patch-set-wizard"}),(0,a.Z)(t,p.Z.TEXT_FIELD,d.Z),(0,a.Z)(t,p.Z.DATE_PICKER,g.Z),t),I),validatorMapper:oe,onSubmit:w,onCancel:T})||l().createElement(v.u,{isOpen:!0,variant:"large",showClose:!1,className:"patch-set",hasNoBodyWrapper:!0,"aria-describedby":"patch-set-description","aria-labelledby":"patch-set-modal-title"},l().createElement(h.e,{className:"patch-set",title:ae(E),description:l().createElement(s.Fragment,null,D.N.formatMessage(N.Z.templateDescription)),steps:[{name:"progress",component:l().createElement(Ye,{onClose:T,state:P}),isFinishedStep:!0}],onClose:T})))};tt.propTypes={setBaselineState:c().func,systemsIDs:c().array,patchSetID:c().string};const nt=(0,s.memo)(tt,(function(e,t){return JSON.stringify(e)===JSON.stringify(t)}))},93080:(e,t,n)=>{"use strict";n.d(t,{c:()=>d,r:()=>g});var a=n(15861),r=n(4942),o=n(64687),s=n.n(o),l=n(43297),i=n(28216),c=n(11220),m=n(9557),u=n(5391);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={advisories:"/ids/advisories",systems:"/ids/systems",templates:"/baselines",advisorySystems:function(e){return"/ids/advisories/".concat(e,"/systems")},systemAdvisories:function(e){return"/ids/systems/".concat(e,"/advisories")},packageSystems:function(e){return"/packages/".concat(e,"/systems")},systemPackages:function(e){return"/systems/".concat(e,"/packages")}},g=function(e,t,n){var r=n.endpoint,o=n.queryParams,p=n.selectionDispatcher,d=n.constructFilename,g=n.transformKey,v=n.apiResponseTransformer,h=n.customSelector,b=(0,i.I0)(),E=function(e,t){return(0,l.useCallback)((function(n){return(0,c.dk)(e,f(f({},n),{},{limit:-1})).then((function(e){return t?t(e):e}))}),[])}(r,v),y=function(e,t){return(0,l.useCallback)((function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=n.ids,o=n.data,s=Array.isArray(r);return(s?r:o).forEach((function(n){var r=s?n:n.id;(0,u.Kn)(n)&&n.isExpandedRow||a.push({id:e?e(n):r,selected:t?t(n):r})})),a}))}(g,d),S=function(e){h?h(e):b(p(e))},P=function(e,t,n){return{selectNone:function(e){var a=[];Object.keys(e).forEach((function(e){a.push({id:e,selected:!1})})),t(a),n(!1)},selectPage:function(n){Array.isArray(n)&&(n=n.filter((function(e){return!e.disableSelection}))),t(e({data:n}))},selectAll:function(a,r){return a(r).then((function(a){t(e(a)),n(!0)}))}}}(y,S,(function(e){b((0,m.wy)(e))})),Z=P.selectNone,O=P.selectPage,D=P.selectAll,N=(0,l.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(a,r,l){var i,c=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=c.length>3&&void 0!==c[3]?c[3]:function(){},n.t0=a,n.next="none"===n.t0?4:"page"===n.t0?6:"all"===n.t0?8:10;break;case 4:return Z(t),n.abrupt("break",11);case 6:return O(e),n.abrupt("break",11);case 8:return D(E,o).then((function(){return i(!1)})),n.abrupt("break",11);case 10:S([{id:g?g(e[l]):e[l].id,selected:r&&(!d||d(e[l]))}]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}());return N}},81754:()=>{},70347:()=>{},58392:()=>{},10497:()=>{},54476:()=>{},80897:()=>{},88361:()=>{},71338:()=>{},74282:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},99624:()=>{},53336:()=>{},97236:()=>{},40209:()=>{},72816:()=>{},53519:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2339.5d0142ca3936d113edc827d82cf5cce4.js.map