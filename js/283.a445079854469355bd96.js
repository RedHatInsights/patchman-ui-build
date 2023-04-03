(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[283],{83905:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(93433),r=n(29439),o=n(43297),s=n(28216),l=n(54025),i=n(11220);const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),c=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded})),m=(0,o.useState)([]),u=(0,r.Z)(m,2),p=u[0],f=u[1],d=(0,l.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),g=(0,r.Z)(d,1),v=g[0],h=(v=void 0===v?{}:v).toGroupSelectionValue,b=v.buildOSFilterConfig;(0,o.useEffect)((function(){void 0!==n&&void 0!==c||(0,i.GB)().then((function(e){var t=e.results;f((t||[]).map((function(e){var t=e.value,n=t.name,a=t.major,r=t.minor,o="".concat(a,".").concat(r);return{label:"".concat(n," ").concat(o),value:"".concat(o)}})))}))}),[]),(0,o.useEffect)((function(){!0===c&&f(n)}),[c]);var y=(""===e?[]:e.split(",")).map((function(e){return e.substring(5)}));return(0,a.Z)(b?[b({id:"rhel_version",value:h(y),onChange:function(e,n){var a=Object.values(n).flatMap((function(e){return Object.keys(e)})).map((function(e){return"RHEL ".concat(e)})).toString();t({filter:{os:a}})}},p)]:[])}},49642:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var a=n(79851),r=n(34512),o=n(80123),s=n(39173),l=n(45697),i=n.n(l),c=n(43297),m=n.n(c),u=n(64029),p=n(32835),f=n(334),d=function(e){var t=e.items,n=e.headerOUIA;return m().createElement(u.a,null,t.filter(Boolean).map((function(e){return m().createElement(p.g,{key:e.title,isActive:e.isActive},e.to?m().createElement(f.Link,{to:e.to,"data-ouia-component-type":"".concat(n,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};d.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const g=d;var v=n(28883),h=n(35262),b=function(e){var t=e.history,n=e.headerOUIA;return m().createElement(h.m,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},m().createElement(v.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Applicable advisories'")}),m().createElement(v.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Systems")}))};b.propTypes={history:i().object,headerOUIA:i().string};const y=(0,f.withRouter)(b);var E=function(e){var t=e.title,n=e.showTabs,l=e.breadcrumbs,i=e.children,c=e.headerOUIA,u=e.actions;return m().createElement(m().Fragment,null,m().createElement(o.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},l&&m().createElement(g,{items:l,headerOUIA:c}),m().createElement(a.P,{hasGutter:!0},m().createElement(r.J,null,m().createElement(s.Z,{title:t})),m().createElement(r.J,{isFilled:!0}),m().createElement(r.J,null,u)),i),n&&m().createElement(y,{headerOUIA:c}))};E.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const S=E},91433:(e,t,n)=>{"use strict";n.d(t,{f:()=>f});var a=n(52643),r=n(9947),o=n(75106),s=n(38424),l=n(38779),i=n(68778),c=n(43297),m=n.n(c),u=n(32132),p=n(30893),f=function(){return m().createElement(a.b,null,m().createElement(r.u,{style:{paddingTop:40}},m().createElement(s.k,{icon:function(){return m().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),m().createElement(l.D,{headingLevel:"h5",size:"lg"},u.N.formatMessage(p.Z.statesNoApplicableAdvisories)),m().createElement(o.B,null,u.N.formatMessage(p.Z.statesSystemUpToDate))))}},38776:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});var a=n(29439),r=n(3351),o=n(22860),s=n(6934),l=n(75863),i=n(3962),c=n(81739),m=n(45697),u=n.n(m),p=n(43297),f=n.n(p),d=n(30893),g=n(53074),v=n(5391),h=n(91607),b=n(32132),y=n(44733),E=n(50383),S=function(e){var t=e.isLoading,n=e.page,a=e.perPage,r=e.onSetPage,o=e.totalItems,s=e.onPerPageSelect,l=e.paginationOUIA;return f().createElement(f().Fragment,null,t?f().createElement("div",{className:"pf-c-pagination pf-m-bottom"},f().createElement(E.O,{fontSize:"xl",width:"350px",style:{margin:10}})):f().createElement(y.t,{itemCount:o,perPage:a,page:n,onSetPage:r,onPerPageSelect:s,widgetId:"pagination-options-menu-bottom",variant:y.a.bottom,ouiaId:l,isDisabled:0===o}))};S.propTypes={isLoading:u().bool,onSetPage:u().func,onPerPageSelect:u().func,page:u().number,perPage:u().number,totalItems:u().number,paginationOUIA:u().string};const P=S;var Z=n(52579),O=n(1595),D=function(e){var t,n=e.columns,m=e.store,u=m.rows,p=m.metadata,y=m.status,S=m.queryParams,D=S.filter,w=S.search,N=e.onCollapse,T=e.onSelect,I=e.onSetPage,C=e.onPerPageSelect,j=e.onSort,x=e.onExport,M=e.filterConfig,F=e.sortBy,k=e.remediationProvider,_=e.selectedRows,A=e.compact,R=e.apply,L=e.tableOUIA,U=e.paginationOUIA,B=e.errorState,z=e.emptyState,q=e.defaultFilters,G=e.searchChipLabel,K=e.ToolbarButton,J=e.actionsConfig,Q=e.isRemediationLoading,W=e.actionsToggle,$=f().useMemo((function(){return(0,v.CM)(p.limit,p.offset)}),[p.limit,p.offset]),H=(0,a.Z)($,2),V=H[0],Y=H[1],X=(0,h.j5)(D,R,q),ee=(0,a.Z)(X,1)[0],te=_&&(0,v.Qy)(_).length,ne=y.code,ae=y.hasError,re=y.isLoading,oe=(0,h.Pz)(te,T,p,u,N);return f().createElement(f().Fragment,null,f().createElement(f().Fragment,null,ae||!1===p.has_systems?f().createElement(Z.Z,{code:ne,ErrorState:B,EmptyState:z,metadata:p}):f().createElement(f().Fragment,null,f().createElement(i.Z,{pagination:re?f().createElement(E.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:p.total_items,page:V,perPage:Y,isCompact:!0,onSetPage:I,onPerPageSelect:C,ouiaId:"top-".concat(U),isDisabled:0===p.total_items},filterConfig:M,activeFiltersConfig:{filters:(0,v.mt)(D,w,G),onDelete:ee,deleteTitle:b.N.formatMessage(q&&d.Z.labelsFiltersReset||d.Z.labelsFiltersClear)},actionsConfig:{actions:[k&&f().createElement(g.Z,{remediationProvider:k,isDisabled:0===Object.values(_).filter((function(e){return e})).length||Q,isLoading:Q})]},exportConfig:{isDisabled:0===p.total_items,onSelect:x},bulkSelect:T&&oe},K&&f().createElement(O.E,null,f().createElement(K,null))),re?f().createElement(c.Z,{colSize:null!==(t=null==n?void 0:n.length)&&void 0!==t?t:5,rowSize:20,variant:A&&l.B.compact}):f().createElement(r.i,{"aria-label":"Patch table view",cells:n,onSelect:p.total_items&&T,rows:u,onCollapse:p.total_items&&N,canSelectAll:!1,onSort:p.total_items&&j,ouiaId:L,sortBy:p.total_items&&F,isStickyHeader:!0,variant:A&&l.B.compact,actions:J,actionsToggle:W},f().createElement(s.x,null),f().createElement(o.R,null)),f().createElement(P,{isLoading:re,totalItems:p.total_items,perPage:Y,page:V,onSetPage:I,onPerPageSelect:C,paginationOUIA:"bottom-".concat(U)}))))};D.propTypes={columns:u().array,onCollapse:u().func,onSelect:u().func,onSetPage:u().func,onPerPageSelect:u().func,onSort:u().func,onExport:u().func,remediationProvider:u().func,selectedRows:u().object,apply:u().func,sortBy:u().object,filterConfig:u().object,store:u().object,compact:u().bool,tableOUIA:u().string,paginationOUIA:u().string,errorState:u().element,emptyState:u().element,defaultFilters:u().object,searchChipLabel:u().string,ToolbarButton:u().elementType,actionsConfig:u().array,isRemediationLoading:u().bool,actionsToggle:u().func};const w=D},74079:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ve});var a=n(4942),r=n(87462),o=n(29439),s=n(43297),l=n.n(s),i=n(45697),c=n.n(i),m=n(11777),u=n(53601),p=n(96354),f=n(26854),d=n(65412),g=n(74777),v=n(80236),h=n(77583),b=n(28216),y=n(48880),E=n(68340),S=n(68774),P=n(49739),Z=n(83826),O=n(35575),D=n(32132),w=n(30893),N=n(23279),T=n.n(N),I=n(71973),C=n(93174),j=n(54680),x=n(92694),M=n(64403),F=n(59775),k=n(2372),_=n(28191),A=n(92298),R=n(47173),L=n(9557);function U(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?U(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var z=function(e){var t=e.changePage,n=e.page,a=e.perPage,r=e.totalItems;return l().createElement(_.k,{justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(A.B,null,l().createElement(R.zx,{variant:"plain","aria-label":"prev",isDisabled:1===n,onClick:function(){return t(n-1)}},l().createElement(I.ZP,null))),l().createElement(A.B,null,l().createElement(R.zx,{variant:"plain","aria-label":"next",isDisabled:r<n*a,onClick:function(){return t(n+1)}},l().createElement(C.ZP,null))))},q=function(e){var t=e.setSelectedPatchSet,n=e.selectedSets,a=e.systems,r=(0,b.I0)(),i=(0,y.default)(),c=(0,s.useState)(!0),m=(0,o.Z)(c,2),u=m[0],p=m[1],f=(0,b.v9)((function(e){return e.PatchSetsStore.rows})),d=(0,b.v9)((function(e){return e.PatchSetsStore.queryParams})),g=(0,b.v9)((function(e){return e.PatchSetsStore.status})),v=(0,b.v9)((function(e){return e.PatchSetsStore.metadata}));(0,s.useEffect)((function(){return function(){r((0,L.Im)())}}),[]);var h=(d||{}).search,E="string"==typeof h&&""!==h?h:Boolean(h);(0,s.useEffect)((function(){r((0,L.BY)(B(B({},d),{},{offset:d.offset+(d.page-1)*d.perPage})))}),[d.page,E]);var S=(0,s.useMemo)((function(){return g.isLoading?[l().createElement(x.$,{key:"loading"},l().createElement(k.$,{size:"md"}))]:null==f?void 0:f.map((function(e){return l().createElement(x.$,{key:e.id,value:e.name})}))}),[f,g.isLoading]),P=(0,s.useState)((function(){return T()((function(e){return t={search:e},void r((0,L.br)(t));var t}),700)})),Z=(0,o.Z)(P,1)[0];return l().createElement(F.c,{fieldId:"existing_patch_set",label:D.N.formatMessage(w.Z.textTemplateChoose),isRequired:!0},l().createElement(j.P,{variant:M.TM.single,"aria-label":D.N.formatMessage(w.Z.labelsFiltersSearchTemplatePlaceholder),onSelect:function(e,n){p(!1),t(n);var r,o,s=f.filter((function(e){return e.name===n}));1===s.length&&i.change("existing_patch_set",{name:null===(r=s[0])||void 0===r?void 0:r.name,systems:a,id:null===(o=s[0])||void 0===o?void 0:o.id})},placeholderText:D.N.formatMessage(w.Z.labelsFiltersSearchTemplatePlaceholder),inlineFilterPlaceholderText:D.N.formatMessage(w.Z.labelsFiltersSearchTemplatePlaceholder),selections:n,onToggle:function(){p(!u)},isOpen:u,isDisabled:!1,onFilter:function(e,t){Z(t)},hasInlineFilter:!0,className:"patch-existing-sets",footer:l().createElement(z,{changePage:function(e){r((0,L.br)(B(B({},d),{},{page:e})))},page:d.page,perPage:d.perPage,totalItems:v.total_items})},S))};z.propTypes={changePage:c().func,page:c().number,perPage:c().number,totalItems:c().number},q.propTypes={setSelectedPatchSet:c().func,selectedSets:c().array,systems:c().array};const G=q;var K=n(50693),J=n(16475),Q=n(64124),W=n(5391);const $=function(e){if(e&&"string"==typeof e&&null===e.match(/^(\d{4})-(0[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return D.N.formatMessage(w.Z.labelsErrorInvalidDate);var t=new Date(e),n=t.getTime(),a=new Date(1990,0,1);return"number"!=typeof n||Number.isNaN(n)?D.N.formatMessage(w.Z.labelsErrorInvalidDate):t<a?D.N.formatMessage(w.Z.labelsErrorDateLimit):void 0};var H=n(72573),V=[{key:"display_name",title:"Name",props:{width:50},transforms:[H.sortable]},{title:"OS",key:"operating_system",props:{width:25},transforms:[H.sortable]},{key:"baseline_name",title:"Template",props:{width:25},transforms:[H.sortable]}],Y=[{name:"configurationStep",component:"configurationStep"},{name:"existing_patch_set",component:p.Z.TEXT_FIELD,hidden:!0}],X=[{name:"name",component:"nameField",validate:[{type:Q.Z.REQUIRED}]}],ee=[{name:"description",component:"descriptionField"}],te=[{name:"toDate",component:"toDateField",validate:[{type:Q.Z.REQUIRED},{type:"validate-date"}]}],ne=function(e){return"edit"===e?D.N.formatMessage(w.Z.templateEdit):D.N.formatMessage(w.Z.templateTitle)},ae=function(e){return{fields:[{component:p.Z.WIZARD,name:"patch-set-wizard",isDynamic:!0,inModal:!0,title:ne(e),description:l().createElement(s.Fragment,null,D.N.formatMessage(w.Z.templateDescription)),fields:[{name:"patch-set-config",title:D.N.formatMessage("edit"===e?w.Z.templateEdit:w.Z.templateNew),fields:Y,nextStep:"systems"},{name:"systems",title:D.N.formatMessage(w.Z.templateSelectSystems),fields:[{name:"systems",component:"reviewSystems"}],nextStep:"review"},{name:"review",title:D.N.formatMessage(w.Z.templateReview),fields:[{name:"review",component:"reviewPatchSet"}]}]}]}},re={"validate-systems":function(){return function(e){var t=(0,W.LI)(e);return void 0===t||t.length>0?void 0:D.N.formatMessage(w.Z.templateNoSystemSelected)}},"validate-date":function(){return $}},oe=function(e){var t=e.isLoading,n=(0,y.default)().renderForm;return t?l().createElement(k.$,{size:"md"}):l().createElement(K.r,{hasGutter:!0},l().createElement(J.P,{lg:12,md:12},n(X)),l().createElement(J.P,{lg:12,md:12},n(ee)),l().createElement(J.P,{lg:6,md:6},n(te)))};oe.propTypes={isLoading:c().bool};const se=oe;var le=function(e){var t=e.systemsIDs,n=e.patchSetID,a=e.wizardType,r=(0,y.default)(),i=!n&&0!==(null==t?void 0:t.length)||!1,c=(0,s.useState)(!1),m=(0,o.Z)(c,2),u=m[0],p=m[1],f=(0,s.useState)(!0),d=(0,o.Z)(f,2),g=d[0],v=d[1],h=(0,s.useState)([]),N=(0,o.Z)(h,2),T=N[0],I=N[1],C=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU),j=C.patchSet,x=C.status,M=function(){v(!g),p(!u)};return(0,s.useEffect)((function(){if(n){var e=j.name,t=j.description,a=j.config.to_time;r.change("name",e),r.change("description",t),r.change("toDate",(0,W.MC)(a))}}),[j]),l().createElement(P.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},D.N.formatMessage("edit"===a?w.Z.templateEdit:w.Z.templateNew)))),i&&l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(E.x,{component:E.q.p},D.N.formatMessage(w.Z.textTemplateSelectedSystems,{systemsCount:t.length,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}))),l().createElement(Z.v,null,l().createElement(P.K,{hasGutter:!0},i&&l().createElement(l().Fragment,null,l().createElement(Z.v,null,l().createElement(O.Y,{isChecked:u,name:"radio",onChange:M,label:D.N.formatMessage(w.Z.textTemplateAddToExisting),id:"existing-template"})),l().createElement(Z.v,null,u?l().createElement(G,{setSelectedPatchSet:I,selectedSets:T,systems:t}):null),l().createElement(Z.v,null,l().createElement(O.Y,{isChecked:g,name:"radio",onChange:M,label:D.N.formatMessage(w.Z.textTemplateCreateNew),id:"new-template"})))||null,l().createElement(Z.v,null,g?l().createElement(se,{isLoading:n&&x.isLoading}):null))))};le.propTypes={systemsIDs:c().array,patchSetID:c().string,wizardType:c().string};const ie=le;var ce=n(92607),me=n(41693);const ue=function(e){var t,n=(0,me.Z)(e).input,a=null===(t=(0,y.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.name),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.name)}),[a.name]),l().createElement(F.c,{fieldId:"name",label:D.N.formatMessage(w.Z.labelsColumnsName),isRequired:!0},l().createElement(ce.oi,{type:"text",isRequired:!0,value:c,onChange:function(e){n.onChange(e),m(e)},"aria-label":"name",autoFocus:!0}))};var pe=n(56760);const fe=function(e){var t,n=(0,me.Z)(e).input,a=null===(t=(0,y.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.toDate),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.toDate)}),[a.toDate]),l().createElement(F.c,{fieldId:"toDate",label:D.N.formatMessage(w.Z.templateDateField),isRequired:!0},l().createElement(_.k,null,l().createElement(A.B,{lg:2,md:2},D.N.formatMessage(w.Z.templateDateUpto)),l().createElement(A.B,{lg:10,md:10},l().createElement(pe.M,{value:c,onChange:function(e){n.onChange(e),m(e)},popoverProps:{position:"right"},"aria-label":"toDate",validators:[$],invalidFormatText:D.N.formatMessage(w.Z.labelsErrorInvalidDate)}))))},de=function(e){var t,n=(0,me.Z)(e).input,a=null===(t=(0,y.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.description),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.description)}),[a.description]),l().createElement(F.c,{fieldId:"description",label:D.N.formatMessage(w.Z.labelsDescription)},l().createElement(ce.oi,{type:"text",isRequired:!0,value:c,onChange:function(e){n.onChange(e),m(e)},"aria-label":"description"}))};var ge=n(93433),ve=n(45987),he=n(90747),be=n(36248),ye=n(91607),Ee=n(38776),Se=n(75585),Pe=n(23188),Ze=n(11220),Oe=n(13784),De=n(83905),we=n(93080),Ne=["systemsIDs"];function Te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Te(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ce=function(e){var t=e.systemsIDs,n=void 0===t?[]:t,a=(0,ve.Z)(e,Ne),r=(0,me.Z)(a).input,i=(0,y.default)().getState().values,c=(0,W.Qh)(n,null==i?void 0:i.systems),m=(0,s.useState)(!0),u=(0,o.Z)(m,2),p=u[0],f=u[1],d=(0,s.useState)([]),g=(0,o.Z)(d,2),v=g[0],h=g[1],O=(0,s.useState)([]),N=(0,o.Z)(O,2),T=N[0],I=N[1],C=(0,s.useState)(c),j=(0,o.Z)(C,2),x=j[0],M=j[1],F=(0,s.useState)({limit:20,offset:0,total_items:0}),k=(0,o.Z)(F,2),_=k[0],A=k[1],R=(0,s.useState)({page:1,perPage:20,filter:{stale:[!0,!1]}}),L=(0,o.Z)(R,2),U=L[0],B=L[1],z=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU).assignedSystems;(0,s.useEffect)((function(){(0,Ze.lc)(Ie(Ie({},U),{},{filter:Ie(Ie({},U.filter),{},{id:n.length>0?"in:".concat(n.join(",")):void 0})})).then((function(e){I((0,be.ub)(e.data,Ie(Ie({},(0,W.Qh)([].concat((0,ge.Z)(z),(0,ge.Z)(n)))),x))),A(e.meta),h(e.data),f(!1)}))}),[U.filter,U]),(0,s.useEffect)((function(){r.onChange(x),I((0,be.ub)(v,x))}),[x]),(0,s.useEffect)((function(){M(Ie(Ie({},x),(0,W.Qh)(z)))}),[z]);var q=function(e){f(!0),B((function(t){return Ie(Ie(Ie({},t),e),{},{filter:Ie(Ie({},t.filter),e.filter)})}))},G=(0,De.Z)(U.filter.os,q),K=(0,ye._f)(V,q,1),J=l().useMemo((function(){return(0,W.hO)(V,_.sort,1)}),[_.sort]),Q=(0,ye.SL)(_.limit,q),$=(0,ye._T)(q),H=(0,we.r)(T,x,{endpoint:we.c.systems,queryParams:Ie(Ie({},U),{},{filter:Ie(Ie({},U.filter),n.length>0&&{id:"in:".concat(n.join(","))})}),customSelector:function(e){var t=e.reduce((function(e,t){return e[t.id]=!!t.selected||void 0,e}),{});M(Ie(Ie({},x),t))}});return l().createElement(P.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},D.N.formatMessage(w.Z.templateSelectSystems)))),l().createElement(Z.v,null,l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(E.x,{component:E.q.p},D.N.formatMessage(w.Z.textTemplateReviewSystems)))),l().createElement(Z.v,null,l().createElement(Ee.Z,{columns:V,compact:!0,onSetPage:Q,onPerPageSelect:$,onSort:K,selectedRows:x,onSelect:H,sortBy:J,apply:q,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:T,metadata:_,status:{isLoading:p},queryParams:U},filterConfig:{items:[(0,he.Z)(q,U.search,D.N.formatMessage(w.Z.labelsFiltersSystemsSearchTitle),D.N.formatMessage(w.Z.labelsFiltersSearch)),(0,Se.Z)(q,U.filter),(0,Pe.Z)(q,U.filter)].concat((0,ge.Z)(G))},searchChipLabel:D.N.formatMessage(w.Z.labelsFiltersSystemsSearchTitle),defaultFilters:Oe.hb})))};Ce.propTypes={systemsIDs:c().array};const je=Ce;var xe=n(25834),Me=n(78140),Fe=function(e,t){return l().createElement(s.Fragment,null,l().createElement(Me.T,{component:Me.v.dt,style:{minWidth:220}},D.N.formatMessage(w.Z[e])),l().createElement(Me.T,{component:Me.v.dd},t))};const ke=function(){var e=(0,y.default)().getState().values,t=e.existing_patch_set||e,n=t.name,a=t.description,r=t.toDate,o=e.systems;return l().createElement(P.K,{hasGutter:!0},l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},D.N.formatMessage(w.Z.templateReview)))),l().createElement(Z.v,null,l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(E.x,{component:E.q.p},D.N.formatMessage(w.Z.textPatchTemplateReview)))),l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},D.N.formatMessage(w.Z.textPatchTemplateContent)),l().createElement(xe.G,{component:xe.F.dl},Fe("labelsColumnsUpToDate",(0,W.jC)(r))))),l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},D.N.formatMessage(w.Z.textPatchTemplateDetails)),l().createElement(xe.G,{component:xe.F.dl},Fe("labelsColumnsName",n),Fe("labelsDescription",a||D.N.formatMessage(w.Z.titlesTemplateNoDescriptionProvided))))),l().createElement(Z.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},D.N.formatMessage(w.Z.textPatchTemplateSystems)),l().createElement(xe.G,{component:xe.F.dl},Fe("labelsSelectedSystems",D.N.formatMessage(w.Z.labelsSystem,{systemsCount:Object.values(o).filter((function(e){return e})).length}))))))};var _e=n(38779),Ae=n(9947),Re=n(38424),Le=n(75106),Ue=n(36621),Be=n(65673),ze=n(68778),qe=n(43047),Ge=n(94768),Ke=n(83215),Je=function(e){var t=e.onClose,n=e.state,a=n.requestPending,r=n.failed,o=n.error,s=(0,b.I0)();return r&&s((0,Ke.wN)({title:"There was an error while processing your request",description:o.detail,variant:"danger"})),l().createElement(Ae.u,{variant:Ae.I.large,"data-component-ouia-id":"patch-set-progress"},l().createElement(Re.k,{color:r?"var(--pf-global--danger-color--100)":a?void 0:"var(--pf-global--success-color--100)",icon:r?qe.ZP:a?Ge.ZP:ze.ZP}),l().createElement(_e.D,{headingLevel:"h1",size:"lg"},r?D.N.formatMessage(w.Z.textErrorSomethingWrong):a?D.N.formatMessage(w.Z.textConfigurationInProgress):D.N.formatMessage(w.Z.textPatchTemplateSuccessfuly)),l().createElement(Le.B,null,l().createElement(K.r,{hasGutter:!0},a&&l().createElement(l().Fragment,null,l().createElement(J.P,null,l().createElement(Ue.p,null,l().createElement(Be.u,{variant:"indeterminate"},D.N.formatMessage(w.Z.textPatchTemplatePending)))),l().createElement(J.P,null,l().createElement(R.zx,{variant:"link",isInline:!0,onClick:t},D.N.formatMessage(w.Z.labelsCancel))," ")),!a&&!r&&l().createElement(J.P,null,l().createElement(R.zx,{variant:"primary",onClick:t},D.N.formatMessage(w.Z.textReturnToApp))),!a&&r&&l().createElement(l().Fragment,null,l().createElement(J.P,null,l().createElement(Ue.p,null,l().createElement(Be.u,{variant:"indeterminate"},D.N.formatMessage(w.Z.templateError,{a:function(e){return l().createElement("a",{href:"https://www.redhat.com/en/services/support"},e)}})))),l().createElement(J.P,null,l().createElement(R.zx,{variant:"primary",onClick:t},D.N.formatMessage(w.Z.textReturnToApp)))))))};Je.propTypes={onClose:c().func,state:c().object};const Qe=Je;function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function $e(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var He=function(e){var t,n=e.systemsIDs,i=e.setBaselineState,c=e.patchSetID,y=c?"edit":"create",E=(0,s.useState)({submitted:!1,formValues:{},requestPending:!0,failed:!1,shouldRefresh:!1}),S=(0,o.Z)(E,2),P=S[0],Z=S[1],O=(0,b.I0)();(0,s.useEffect)((function(){return c&&(O((0,L.gK)(c)),O((0,L.JJ)(c,{limit:-1}))),function(){return O((0,L.r8)())}}),[]);var N=(0,ye.np)(P,Z,c),T=function(){var e=!P.failed&&P.submitted;i({isPatchSetWizardOpen:!1,systemsIDs:[],patchSetID:void 0,shouldRefresh:e}),Z({formValues:{},submitted:!1})},I={nameField:{component:ue},descriptionField:{component:de},toDateField:{component:fe},configurationStep:{component:ie,systemsIDs:n||[],patchSetID:c,wizardType:y},reviewSystems:{component:je,systemsIDs:n||[]},reviewPatchSet:{component:ke,systemsIDs:n||[]}};return l().createElement(s.Fragment,null,!P.submitted&&l().createElement(m.Z,{schema:ae(y),subscription:{values:!0},FormTemplate:function(e){return l().createElement(u.ZP,(0,r.Z)({},e,{showFormControls:!1}))},componentMapper:$e((t={},(0,a.Z)(t,p.Z.WIZARD,{component:f.Z,className:"patch-set","data-ouia-component-id":"patch-set-wizard"}),(0,a.Z)(t,p.Z.TEXT_FIELD,d.Z),(0,a.Z)(t,p.Z.DATE_PICKER,g.Z),t),I),validatorMapper:re,onSubmit:N,onCancel:T})||l().createElement(v.u,{isOpen:!0,variant:"large",showClose:!1,className:"patch-set",hasNoBodyWrapper:!0,"aria-describedby":"patch-set-description","aria-labelledby":"patch-set-modal-title"},l().createElement(h.e,{className:"patch-set",title:ne(y),description:l().createElement(s.Fragment,null,D.N.formatMessage(w.Z.templateDescription)),steps:[{name:"progress",component:l().createElement(Qe,{onClose:T,state:P}),isFinishedStep:!0}],onClose:T})))};He.propTypes={setBaselineState:c().func,systemsIDs:c().array,patchSetID:c().string};const Ve=(0,s.memo)(He,(function(e,t){return JSON.stringify(e)===JSON.stringify(t)}))},93080:(e,t,n)=>{"use strict";n.d(t,{c:()=>d,r:()=>g});var a=n(15861),r=n(4942),o=n(64687),s=n.n(o),l=n(43297),i=n(28216),c=n(11220),m=n(9557),u=n(5391);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={advisories:"/ids/advisories",systems:"/ids/systems",templates:"/baselines",advisorySystems:function(e){return"/ids/advisories/".concat(e,"/systems")},systemAdvisories:function(e){return"/ids/systems/".concat(e,"/advisories")},packageSystems:function(e){return"/packages/".concat(e,"/systems")},systemPackages:function(e){return"/systems/".concat(e,"/packages")}},g=function(e,t,n){var r=n.endpoint,o=n.queryParams,p=n.selectionDispatcher,d=n.constructFilename,g=n.transformKey,v=n.apiResponseTransformer,h=n.customSelector,b=(0,i.I0)(),y=function(e,t){return(0,l.useCallback)((function(n){return(0,c.dk)(e,f(f({},n),{},{limit:-1})).then((function(e){return t?t(e):e}))}),[])}(r,v),E=function(e,t){return(0,l.useCallback)((function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=n.ids,o=n.data,s=Array.isArray(r);return(s?r:o).forEach((function(n){var r=s?n:n.id;(0,u.Kn)(n)&&n.isExpandedRow||a.push({id:e?e(n):r,selected:t?t(n):r})})),a}))}(g,d),S=function(e){h?h(e):b(p(e))},P=function(e,t,n){return{selectNone:function(e){var a=[];Object.keys(e).forEach((function(e){a.push({id:e,selected:!1})})),t(a),n(!1)},selectPage:function(n){Array.isArray(n)&&(n=n.filter((function(e){return!e.disableCheckbox}))),t(e({data:n}))},selectAll:function(a,r){return a(r).then((function(a){t(e(a)),n(!0)}))}}}(E,S,(function(e){b((0,m.wy)(e))})),Z=P.selectNone,O=P.selectPage,D=P.selectAll,w=(0,l.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(a,r,l){var i,c=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=c.length>3&&void 0!==c[3]?c[3]:function(){},n.t0=a,n.next="none"===n.t0?4:"page"===n.t0?6:"all"===n.t0?8:10;break;case 4:return Z(t),n.abrupt("break",11);case 6:return O(e),n.abrupt("break",11);case 8:return D(y,o).then((function(){return i(!1)})),n.abrupt("break",11);case 10:S([{id:g?g(e[l]):e[l].id,selected:r&&(!d||d(e[l]))}]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}());return w}},65088:()=>{},81754:()=>{},70347:()=>{},58392:()=>{},10497:()=>{},93818:()=>{},94498:()=>{},54476:()=>{},28992:()=>{},80897:()=>{},30187:()=>{},90479:()=>{},78752:()=>{},71338:()=>{},21626:()=>{},74282:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},91993:()=>{},99624:()=>{},36974:()=>{},53336:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},97236:()=>{},40209:()=>{},72816:()=>{},53519:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/283.eed7c6fb9c1ccc74b5d5038101b873c1.js.map