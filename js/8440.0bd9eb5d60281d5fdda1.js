(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[8440],{83905:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(93433),r=n(29439),o=n(43297),s=n(28216),l=n(54025),i=n(11220);const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,n=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),c=(0,s.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded})),m=(0,o.useState)([]),u=(0,r.Z)(m,2),p=u[0],f=u[1],d=(0,l.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),g=(0,r.Z)(d,1)[0],v=void 0===g?{}:g,y=v.toGroupSelectionValue,h=v.buildOSFilterConfig;(0,o.useEffect)((function(){void 0!==n&&void 0!==c||(0,i.GB)().then((function(e){var t=e.results;f((t||[]).map((function(e){var t=e.value,n=t.name,a=t.major,r=t.minor,o="".concat(a,".").concat(r);return{label:"".concat(n," ").concat(o),value:"".concat(o)}})))}))}),[]),(0,o.useEffect)((function(){!0===c&&f(n)}),[c]);var b=(""===e?[]:e.split(",")).map((function(e){return e.substring(5)}));return(0,a.Z)(h?[h({id:"rhel_version",value:y(b),onChange:function(e,n){var a=Object.values(n).flatMap((function(e){return Object.keys(e)})).map((function(e){return"RHEL ".concat(e)})).toString();t({filter:{os:a}})}},p)]:[])}},49642:(e,t,n)=>{"use strict";n.d(t,{Z:()=>S});var a=n(79851),r=n(34512),o=n(80123),s=n(39173),l=n(45697),i=n.n(l),c=n(43297),m=n.n(c),u=n(64029),p=n(32835),f=n(96620),d=function(e){var t=e.items,n=e.headerOUIA;return m().createElement(u.a,null,t.filter(Boolean).map((function(e){return m().createElement(p.g,{key:e.title,isActive:e.isActive},e.to?m().createElement(f.Link,{to:e.to,"data-ouia-component-type":"".concat(n,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};d.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const g=d;var v=n(28883),y=n(35262),h=function(e){var t=e.history,n=e.headerOUIA;return m().createElement(y.m,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},m().createElement(v.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Applicable advisories'")}),m().createElement(v.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Systems")}))};h.propTypes={history:i().object,headerOUIA:i().string};const b=(0,f.withRouter)(h);var E=function(e){var t=e.title,n=e.showTabs,l=e.breadcrumbs,i=e.children,c=e.headerOUIA,u=e.actions;return m().createElement(m().Fragment,null,m().createElement(o.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},l&&m().createElement(g,{items:l,headerOUIA:c}),m().createElement(a.P,{hasGutter:!0},m().createElement(r.J,null,m().createElement(s.Z,{title:t})),m().createElement(r.J,{isFilled:!0}),m().createElement(r.J,null,u)),i),n&&m().createElement(b,{headerOUIA:c}))};E.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const S=E},91433:(e,t,n)=>{"use strict";n.d(t,{f:()=>f});var a=n(52643),r=n(9947),o=n(75106),s=n(38424),l=n(60485),i=n(68778),c=n(43297),m=n.n(c),u=n(32132),p=n(30893),f=function(){return m().createElement(a.b,null,m().createElement(r.u,{style:{paddingTop:40}},m().createElement(s.k,{icon:function(){return m().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),m().createElement(l.D,{headingLevel:"h5",size:"lg"},u.N.formatMessage(p.Z.statesNoApplicableAdvisories)),m().createElement(o.B,null,u.N.formatMessage(p.Z.statesSystemUpToDate))))}},38776:(e,t,n)=>{"use strict";n.d(t,{Z:()=>D});var a=n(29439),r=n(3351),o=n(22860),s=n(6934),l=n(75863),i=n(3962),c=n(81739),m=n(45697),u=n.n(m),p=n(43297),f=n.n(p),d=n(30893),g=n(53074),v=n(5391),y=n(91607),h=n(32132),b=n(44733),E=n(50383),S=function(e){var t=e.isLoading,n=e.page,a=e.perPage,r=e.onSetPage,o=e.totalItems,s=e.onPerPageSelect,l=e.paginationOUIA;return f().createElement(f().Fragment,null,t?f().createElement("div",{className:"pf-c-pagination pf-m-bottom"},f().createElement(E.O,{fontSize:"xl",width:"350px",style:{margin:10}})):f().createElement(b.t,{itemCount:o,perPage:a,page:n,onSetPage:r,onPerPageSelect:s,widgetId:"pagination-options-menu-bottom",variant:b.a.bottom,ouiaId:l,isDisabled:0===o}))};S.propTypes={isLoading:u().bool,onSetPage:u().func,onPerPageSelect:u().func,page:u().number,perPage:u().number,totalItems:u().number,paginationOUIA:u().string};const Z=S;var P=n(52579),O=n(1595),N=function(e){var t,n=e.columns,m=e.store,u=m.rows,p=m.metadata,b=m.status,S=m.queryParams,N=S.filter,D=S.search,w=e.onCollapse,T=e.onSelect,M=e.onSetPage,C=e.onPerPageSelect,I=e.onSort,x=e.onExport,k=e.filterConfig,j=e.sortBy,F=e.remediationProvider,_=e.selectedRows,A=e.compact,L=e.apply,R=e.tableOUIA,B=e.paginationOUIA,z=e.errorState,U=e.emptyState,q=e.defaultFilters,G=e.searchChipLabel,K=e.ToolbarButton,W=e.actionsConfig,V=e.isRemediationLoading,J=e.actionsToggle,Q=f().useMemo((function(){return(0,v.CM)(p.limit,p.offset)}),[p.limit,p.offset]),$=(0,a.Z)(Q,2),H=$[0],X=$[1],Y=(0,y.j5)(N,L,q),ee=(0,a.Z)(Y,1)[0],te=_&&(0,v.Qy)(_).length,ne=b.code,ae=b.hasError,re=b.isLoading,oe=(0,y.Pz)(te,T,p,u,w);return f().createElement(f().Fragment,null,f().createElement(f().Fragment,null,ae||!1===p.has_systems?f().createElement(P.Z,{code:ne,ErrorState:z,EmptyState:U,metadata:p}):f().createElement(f().Fragment,null,f().createElement(i.Z,{pagination:re?f().createElement(E.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:p.total_items,page:H,perPage:X,isCompact:!0,onSetPage:M,onPerPageSelect:C,ouiaId:"top-".concat(B),isDisabled:0===p.total_items},filterConfig:k,activeFiltersConfig:{filters:(0,v.mt)(N,D,G),onDelete:ee,deleteTitle:h.N.formatMessage(q&&d.Z.labelsFiltersReset||d.Z.labelsFiltersClear)},actionsConfig:{actions:[F&&f().createElement(g.Z,{remediationProvider:F,isDisabled:0===Object.values(_).filter((function(e){return e})).length||V,isLoading:V})]},exportConfig:{isDisabled:0===p.total_items,onSelect:x},bulkSelect:T&&oe},K&&f().createElement(O.E,null,f().createElement(K,null))),re?f().createElement(c.Z,{colSize:null!==(t=null==n?void 0:n.length)&&void 0!==t?t:5,rowSize:20,variant:A&&l.B.compact}):f().createElement(r.i,{"aria-label":"Patch table view",cells:n,onSelect:p.total_items&&T,rows:u,onCollapse:p.total_items&&w,canSelectAll:!1,onSort:p.total_items&&I,ouiaId:R,sortBy:p.total_items&&j,isStickyHeader:!0,variant:A&&l.B.compact,actions:W,actionsToggle:J},f().createElement(s.x,null),f().createElement(o.R,null)),f().createElement(Z,{isLoading:re,totalItems:p.total_items,perPage:X,page:H,onSetPage:M,onPerPageSelect:C,paginationOUIA:"bottom-".concat(B)}))))};N.propTypes={columns:u().array,onCollapse:u().func,onSelect:u().func,onSetPage:u().func,onPerPageSelect:u().func,onSort:u().func,onExport:u().func,remediationProvider:u().func,selectedRows:u().object,apply:u().func,sortBy:u().object,filterConfig:u().object,store:u().object,compact:u().bool,tableOUIA:u().string,paginationOUIA:u().string,errorState:u().element,emptyState:u().element,defaultFilters:u().object,searchChipLabel:u().string,ToolbarButton:u().elementType,actionsConfig:u().array,isRemediationLoading:u().bool,actionsToggle:u().func};const D=N},20677:(e,t,n)=>{"use strict";n.d(t,{$z:()=>v,Qk:()=>g,Z8:()=>d,gs:()=>p,mN:()=>u,mR:()=>f,og:()=>y});var a=n(43297),r=n.n(a),o=n(47173),s=n(16545),l=n(7732),i=n(62165),c=n(32132),m=n(30893),u=function(e,t){return function(){return t?r().createElement(o.zx,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)):r().createElement(s.u,{content:"For editing access, contact your administrator."},r().createElement(o.zx,{key:"createButton",isAriaDisabled:!0},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)))}},p=[{key:"name",title:"Name",transforms:[l.p]},{key:"systems",title:"Systems applied",transforms:[l.p]},{key:"last_edited",title:"Last edited",transforms:[l.p]},{key:"published",title:"Published",transforms:[l.p]},{key:"creator",title:"Created by",transforms:[l.p]}],f=function(e,t){return[{title:c.N.formatMessage(m.Z.labelsButtonEditTemplate),onClick:function(t,n,a){e(null==a?void 0:a.id)}},{title:c.N.formatMessage(m.Z.labelsButtonRemoveTemplate),onClick:function(e,n,a){t(a)}}]},d=function(e){return[{title:c.N.formatMessage(m.Z.textUnassignSystemsShortTitle),onClick:function(t,n,a){e(a)}}]},g=function(){return r().createElement(s.u,{content:"For editing access, contact your administrator."},r().createElement(o.zx,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},r().createElement(i.ZP,null)))},v=function(e){return{success:{title:"Systems succesfully removed from this Patch template.",description:"".concat(e," ").concat(e>1?"systems":"system"," removed from Patch template(s)"),variant:"success"}}},y=function(e){return{success:{title:"Systems succesfully applied to this Patch template.",description:"".concat(e," ").concat(e>1?"systems":"system"," added to Patch template(s)"),variant:"success"}}}},93665:(e,t,n)=>{"use strict";n.d(t,{Z:()=>C});var a=n(4942),r=n(29439),o=n(43297),s=n.n(o),l=n(45697),i=n.n(l),c=n(23279),m=n.n(c),u=n(28216),p=n(71973),f=n(93174),d=n(54680),g=n(92694),v=n(64403),y=n(59775),h=n(2372),b=n(28191),E=n(92298),S=n(47173),Z=n(48880),P=n(9557),O=n(32132),N=n(30893);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var T=function(e){var t=e.changePage,n=e.page,a=e.perPage,r=e.totalItems;return s().createElement(b.k,{justifyContent:{default:"justifyContentSpaceBetween"}},s().createElement(E.B,null,s().createElement(S.zx,{variant:"plain","aria-label":"prev",isDisabled:1===n,onClick:function(){return t(n-1)}},s().createElement(p.ZP,null))),s().createElement(E.B,null,s().createElement(S.zx,{variant:"plain","aria-label":"next",isDisabled:r<n*a,onClick:function(){return t(n+1)}},s().createElement(f.ZP,null))))},M=function(e){var t=e.setSelectedPatchSet,n=e.selectedSets,a=e.systems,l=e.selectCallback,i=void 0===l?function(){}:l,c=(0,u.I0)(),p=(0,Z.default)(),f=(0,o.useState)(!1),b=(0,r.Z)(f,2),E=b[0],S=b[1],D=(0,u.v9)((function(e){return e.PatchSetsStore.rows})),M=(0,u.v9)((function(e){return e.PatchSetsStore.queryParams})),C=(0,u.v9)((function(e){return e.PatchSetsStore.status})),I=(0,u.v9)((function(e){return e.PatchSetsStore.metadata}));(0,o.useEffect)((function(){return function(){c((0,P.Im)())}}),[]);var x=(M||{}).search,k="string"==typeof x&&""!==x?x:Boolean(x);(0,o.useEffect)((function(){c((0,P.BY)(w(w({},M),{},{offset:M.offset+(M.page-1)*M.perPage})))}),[M.page,k]);var j=(0,o.useMemo)((function(){return C.isLoading?[s().createElement(g.$,{key:"loading"},s().createElement(h.$,{size:"md"}))]:null==D?void 0:D.map((function(e){return s().createElement(g.$,{key:e.id,value:e.name})}))}),[D,C.isLoading]),F=(0,o.useState)((function(){return m()((function(e){return t={search:e},void c((0,P.br)(t));var t}),700)})),_=(0,r.Z)(F,1)[0];return s().createElement(y.c,{fieldId:"existing_patch_set",label:O.N.formatMessage(N.Z.textTemplateChoose),isRequired:!0},s().createElement(d.P,{variant:v.TM.single,"aria-label":O.N.formatMessage(N.Z.labelsFiltersSearchTemplatePlaceholder),onSelect:function(e,n){S(!1),t(n);var r,o,s,l=D.filter((function(e){return e.name===n}));1===l.length&&(i(l[0]),null==p||null===(r=p.change)||void 0===r||r.call(p,"existing_patch_set",{name:null===(o=l[0])||void 0===o?void 0:o.name,systems:a,id:null===(s=l[0])||void 0===s?void 0:s.id}))},placeholderText:O.N.formatMessage(N.Z.templateSelectExisting),inlineFilterPlaceholderText:O.N.formatMessage(N.Z.labelsFiltersSearchTemplatePlaceholder),selections:n,onToggle:function(){S(!E)},isOpen:E,isDisabled:!1,onFilter:function(e,t){_(t)},hasInlineFilter:!0,className:"patch-existing-sets",footer:s().createElement(T,{changePage:function(e){c((0,P.br)(w(w({},M),{},{page:e})))},page:M.page,perPage:M.perPage,totalItems:I.total_items}),menuAppendTo:document.body,maxHeight:350},j))};T.propTypes={changePage:i().func,page:i().number,perPage:i().number,totalItems:i().number},M.propTypes={setSelectedPatchSet:i().func,selectedSets:i().array,systems:i().array,selectCallback:i().func};const C=M},45329:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ge});var a=n(4942),r=n(87462),o=n(29439),s=n(43297),l=n.n(s),i=n(45697),c=n.n(i),m=n(11777),u=n(67850),p=n(96354),f=n(26854),d=n(65412),g=n(74777),v=n(80236),y=n(77583),h=n(28216),b=n(48880),E=n(68340),S=n(68774),Z=n(49739),P=n(83826),O=(n(35575),n(32132)),N=n(30893),D=(n(93665),n(50693)),w=n(16475),T=n(2372),M=n(64124),C=n(5391);const I=function(e){if(e&&"string"==typeof e&&null===e.match(/^(\d{4})-(0[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return O.N.formatMessage(N.Z.labelsErrorInvalidDate);var t=new Date(e),n=t.getTime(),a=new Date(1990,0,1);return"number"!=typeof n||Number.isNaN(n)?O.N.formatMessage(N.Z.labelsErrorInvalidDate):t<a?O.N.formatMessage(N.Z.labelsErrorDateLimit):void 0};var x=n(72573),k=/^[a-z0-9][a-z0-9_-]*$/,j=[{key:"display_name",title:"Name",props:{width:40},transforms:[x.sortable]},{title:"OS",key:"operating_system",props:{width:20},transforms:[x.sortable]},{key:"baseline_name",title:"Template",props:{width:20},transforms:[x.sortable]},{key:"last_upload",title:"Last seen",props:{width:20},transforms:[x.sortable]}],F=[{name:"configurationStep",component:"configurationStep"},{name:"existing_patch_set",component:p.Z.TEXT_FIELD,hidden:!0}],_=[{name:"contentStep",component:"contentStep"}],A=[{name:"name",component:"nameField",validate:[{type:M.Z.REQUIRED},{type:"validate-name"}]}],L=[{name:"description",component:"descriptionField"}],R=[{name:"toDate",component:"toDateField",validate:[{type:M.Z.REQUIRED},{type:"validate-date"}]}],B=function(e){return"edit"===e?O.N.formatMessage(N.Z.templateEdit):O.N.formatMessage(N.Z.templateTitle)},z=function(e){return{fields:[{component:p.Z.WIZARD,name:"patch-set-wizard",isDynamic:!0,inModal:!0,title:B(e),description:l().createElement(s.Fragment,null,O.N.formatMessage(N.Z.templateDescription)),fields:[{name:"template-content",title:O.N.formatMessage(N.Z.templateContentStepSidebarName),fields:_,nextStep:"template-details"},{name:"template-details",title:O.N.formatMessage(N.Z.templateDetailStepSidebarName),fields:F,nextStep:"template-systems"},{name:"template-systems",title:O.N.formatMessage(N.Z.templateStepSystems),fields:[{name:"systems",component:"reviewSystems"}],nextStep:"template-review"},{name:"template-review",title:O.N.formatMessage(N.Z.templateReview),fields:[{name:"review",component:"reviewPatchSet"}]}]}]}},U={"validate-systems":function(){return function(e){var t=(0,C.LI)(e);return void 0===t||t.length>0?void 0:O.N.formatMessage(N.Z.templateNoSystemSelected)}},"validate-date":function(){return I},"validate-name":function(){return function(e,t){return t.takenBaselineNamesLoading||t.templateDetailLoading?O.N.formatMessage(N.Z.templateWizardValidateLoading):t.previousName!==e&&t.takenBaselineNames.includes(e)?O.N.formatMessage(N.Z.templateWizardValidateNameTaken):e.match(k)?void 0:O.N.formatMessage(N.Z.templateWizardValidateRegex)}}},q=function(e){var t=e.isLoading,n=(0,b.default)().renderForm;return l().createElement(s.Fragment,null,l().createElement(T.$,{size:"xl",style:{display:t?"block":"none"}}),l().createElement(D.r,{hasGutter:!0,style:{display:t?"none":"grid"}},l().createElement(w.P,{lg:12,md:12},n(A)),l().createElement(w.P,{lg:12,md:12},n(L))))};q.propTypes={isLoading:c().bool};const G=q;var K=function(e){e.systemsIDs;var t=e.patchSetID,n=(0,b.default)(),a=(0,s.useState)(!1),r=(0,o.Z)(a,2),i=(r[0],r[1],(0,s.useState)(!0)),c=(0,o.Z)(i,2),m=c[0],u=(c[1],(0,s.useState)([])),p=(0,o.Z)(u,2),f=(p[0],p[1],(0,h.v9)((function(e){return e.SpecificPatchSetReducer}),h.wU)),d=f.patchSet,g=f.status,v=f.takenBaselineNamesLoading;return(0,s.useEffect)((function(){if(t){var e=d.name,a=d.description;n.change("name",e),n.change("description",a)}}),[d]),l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateDetailStepTitle)))),l().createElement(P.v,null,O.N.formatMessage(N.Z.templateDetailStepText)),!1,l().createElement(P.v,null,l().createElement(Z.K,{hasGutter:!0},null,l().createElement(P.v,null,m?l().createElement(G,{isLoading:t&&g.isLoading||v}):null))))};K.propTypes={systemsIDs:c().array,patchSetID:c().string};const W=K;var V=n(22629),J=function(e){var t=e.patchSetID,n=(0,b.default)(),a=(0,h.v9)((function(e){return e.SpecificPatchSetReducer}),h.wU),r=a.patchSet,o=a.status;return(0,s.useEffect)((function(){if(t){var e=r.config.to_time,a=r.name;n.change("toDate",(0,C.MC)(e)),n.change("previousName",a),n.change("templateDetailLoading",o.isLoading)}}),[r,o]),l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateContentStepTitle)))),l().createElement(P.v,null,O.N.formatMessage(N.Z.templateContentStepText)),l().createElement(P.v,null,n.renderForm(R)),l().createElement(P.v,null,l().createElement(V.L,{toggleText:O.N.formatMessage(N.Z.templateContentStepExpandableTitle)},O.N.formatMessage(N.Z.templateContentStepExpandable))))};J.propTypes={patchSetID:c().string};const Q=J;var $=n(59775),H=n(92607),X=n(41693);const Y=function(e){var t,n=(0,X.Z)(e).input,a=(0,b.default)(),r=null===(t=a.getState())||void 0===t?void 0:t.values,i=(0,s.useState)(null==r?void 0:r.name),c=(0,o.Z)(i,2),m=c[0],u=c[1],p=(0,h.v9)((function(e){return e.SpecificPatchSetReducer}),h.wU),f=p.takenBaselineNames,d=p.takenBaselineNamesLoading;(0,s.useEffect)((function(){u(r.name)}),[r.name]),(0,s.useEffect)((function(){a.change("takenBaselineNames",f),a.change("takenBaselineNamesLoading",d)}),[f,d]);var g=function(){if(void 0!==m&&m!==r.previousName)return!m.match(k)||f.includes(m)?"error":void 0};return l().createElement($.c,{fieldId:"name",label:O.N.formatMessage(N.Z.labelsColumnsName),isRequired:!0,helperTextInvalid:null!=m&&m.match(k)?O.N.formatMessage(N.Z.templateWizardValidateNameTaken):O.N.formatMessage(N.Z.templateWizardValidateRegex),validated:g()},l().createElement(H.oi,{type:"text",isRequired:!0,value:m,onChange:function(e){n.onChange(e),u(e)},"aria-label":"name",autoFocus:!0,validated:g()}))};var ee=n(56760),te=n(28191),ne=n(92298);const ae=function(e){var t,n=(0,X.Z)(e).input,a=null===(t=(0,b.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.toDate),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.toDate)}),[a.toDate]),l().createElement($.c,{fieldId:"toDate",label:O.N.formatMessage(N.Z.templateDateField),isRequired:!0},l().createElement(te.k,null,l().createElement(ne.B,{lg:2,md:2},O.N.formatMessage(N.Z.templateDateUpto)),l().createElement(ne.B,{lg:10,md:10},l().createElement(ee.M,{appendTo:document.body,value:c,onChange:function(e){n.onChange(e),m(e)},popoverProps:{position:"right"},"aria-label":"toDate",validators:[I],invalidFormatText:O.N.formatMessage(N.Z.labelsErrorInvalidDate)}))))},re=function(e){var t,n=(0,X.Z)(e).input,a=null===(t=(0,b.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.description),i=(0,o.Z)(r,2),c=i[0],m=i[1];return(0,s.useEffect)((function(){m(a.description)}),[a.description]),l().createElement($.c,{fieldId:"description",label:O.N.formatMessage(N.Z.labelsDescription)},l().createElement(H.oi,{type:"text",isRequired:!0,value:c,onChange:function(e){n.onChange(e),m(e)},"aria-label":"description"}))};var oe=n(93433),se=n(45987),le=n(90747),ie=n(41448),ce=n(36248),me=n(91607),ue=n(38776),pe=n(75585),fe=n(23188),de=n(11220),ge=n(13784),ve=n(83905),ye=n(93080),he=["systemsIDs"];function be(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ee(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?be(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):be(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Se=function(e){var t=e.systemsIDs,n=void 0===t?[]:t,a=(0,se.Z)(e,he),r=(0,X.Z)(a).input,i=(0,b.default)().getState().values,c=(0,C.Qh)(n,null==i?void 0:i.systems),m=(0,s.useState)(!0),u=(0,o.Z)(m,2),p=u[0],f=u[1],d=(0,s.useState)([]),g=(0,o.Z)(d,2),v=g[0],y=g[1],D=(0,s.useState)([]),w=(0,o.Z)(D,2),T=w[0],M=w[1],I=(0,s.useState)(c),x=(0,o.Z)(I,2),k=x[0],F=x[1],_=(0,s.useState)({limit:20,offset:0,total_items:0}),A=(0,o.Z)(_,2),L=A[0],R=A[1],B=(0,s.useState)({page:1,perPage:20,filter:{stale:[!0,!1]}}),z=(0,o.Z)(B,2),U=z[0],q=z[1],G=(0,h.v9)((function(e){return e.SpecificPatchSetReducer}),h.wU).assignedSystems;(0,s.useEffect)((function(){(0,de.lc)(Ee(Ee({},U),{},{filter:Ee(Ee({},U.filter),{},{id:n.length>0?"in:".concat(n.join(",")):void 0})})).then((function(e){M((0,ce.ub)(e.data,Ee(Ee({},(0,C.Qh)([].concat((0,oe.Z)(G),(0,oe.Z)(n)))),k))),R(e.meta),y(e.data),f(!1)}))}),[U.filter,U]),(0,s.useEffect)((function(){r.onChange(k),M((0,ce.ub)(v,k))}),[k]),(0,s.useEffect)((function(){F(Ee(Ee({},k),(0,C.Qh)(G)))}),[G]);var K=function(e){f(!0),q((function(t){return Ee(Ee(Ee({},t),e),{},{filter:Ee(Ee({},t.filter),e.filter),page:1,offset:0})}))},W=(0,ve.Z)(U.filter.os,K),V=(0,me._f)(j,K,1),J=l().useMemo((function(){return(0,C.hO)(j,L.sort,1)}),[L.sort]),Q=(0,me.SL)(L.limit,K),$=(0,me._T)(K),H=(0,ye.r)(T,k,{endpoint:ye.c.systems,queryParams:Ee(Ee({},U),{},{filter:Ee(Ee({},U.filter),n.length>0&&{id:"in:".concat(n.join(","))})}),customSelector:function(e){var t=e.reduce((function(e,t){return e[t.id]=!!t.selected||void 0,e}),{});F(Ee(Ee({},k),t))}});return l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateApplySystems)))),l().createElement(P.v,null,l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(E.x,{component:E.q.p},O.N.formatMessage(N.Z.textTemplateReviewSystems)))),l().createElement(ie.b,{variant:"warning",title:O.N.formatMessage(N.Z.templateAlertSystems),isInline:!0}),l().createElement(P.v,null,l().createElement(ue.Z,{columns:j,compact:!0,onSetPage:Q,onPerPageSelect:$,onSort:V,selectedRows:k,onSelect:H,sortBy:J,apply:K,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:T,metadata:L,status:{isLoading:p},queryParams:U},filterConfig:{items:[(0,le.Z)(K,U.search,O.N.formatMessage(N.Z.labelsFiltersSystemsSearchTitle),O.N.formatMessage(N.Z.labelsFiltersSearch)),(0,pe.Z)(K,U.filter),(0,fe.Z)(K,U.filter)].concat((0,oe.Z)(W))},searchChipLabel:O.N.formatMessage(N.Z.labelsFiltersSystemsSearchTitle),defaultFilters:ge.hb})))};Se.propTypes={systemsIDs:c().array};const Ze=Se;var Pe=n(25834),Oe=n(78140),Ne=function(e,t){return l().createElement(s.Fragment,null,l().createElement(Oe.T,{component:Oe.v.dt,style:{minWidth:220}},O.N.formatMessage(N.Z[e])),l().createElement(Oe.T,{component:Oe.v.dd},t))};const De=function(){var e=(0,b.default)().getState().values,t=e.existing_patch_set||e,n=t.name,a=t.description,r=t.toDate,o=e.systems;return l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateReview)))),l().createElement(P.v,null,l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(E.x,{component:E.q.p},O.N.formatMessage(N.Z.textPatchTemplateReview)))),l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},O.N.formatMessage(N.Z.textPatchTemplateContent)),l().createElement(Pe.G,{component:Pe.F.dl},Ne("labelsColumnsUpToDate",(0,C.jC)(r))))),l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},O.N.formatMessage(N.Z.textPatchTemplateDetails)),l().createElement(Pe.G,{component:Pe.F.dl},Ne("labelsColumnsName",n),Ne("labelsDescription",a||O.N.formatMessage(N.Z.titlesTemplateNoDescriptionProvided))))),l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},O.N.formatMessage(N.Z.textPatchTemplateSystems)),l().createElement(Pe.G,{component:Pe.F.dl},Ne("labelsSelectedSystems",O.N.formatMessage(N.Z.labelsSystem,{systemsCount:Object.values(o).filter((function(e){return e})).length}))))))};var we=n(60485),Te=n(9947),Me=n(38424),Ce=n(75106),Ie=n(36621),xe=n(65673),ke=n(47173),je=n(68778),Fe=n(43047),_e=n(94768),Ae=n(83215),Le=function(e){var t=e.onClose,n=e.state,a=n.requestPending,r=n.failed,o=n.error,s=(0,h.I0)();return r&&s((0,Ae.wN)({title:"There was an error while processing your request",description:o.detail,variant:"danger"})),l().createElement(Te.u,{variant:Te.I.large,"data-component-ouia-id":"patch-set-progress"},l().createElement(Me.k,{color:r?"var(--pf-global--danger-color--100)":a?void 0:"var(--pf-global--success-color--100)",icon:r?Fe.ZP:a?_e.ZP:je.ZP}),l().createElement(we.D,{headingLevel:"h1",size:"lg"},r?O.N.formatMessage(N.Z.textErrorSomethingWrong):a?O.N.formatMessage(N.Z.textConfigurationInProgress):O.N.formatMessage(N.Z.textPatchTemplateSuccessfuly)),l().createElement(Ce.B,null,l().createElement(D.r,{hasGutter:!0},a&&l().createElement(l().Fragment,null,l().createElement(w.P,null,l().createElement(Ie.p,null,l().createElement(xe.u,{variant:"indeterminate"},O.N.formatMessage(N.Z.textPatchTemplatePending)))),l().createElement(w.P,null,l().createElement(ke.zx,{variant:"link",isInline:!0,onClick:t},O.N.formatMessage(N.Z.labelsCancel))," ")),!a&&!r&&l().createElement(w.P,null,l().createElement(ke.zx,{variant:"primary",onClick:t},O.N.formatMessage(N.Z.textReturnToApp))),!a&&r&&l().createElement(l().Fragment,null,l().createElement(w.P,null,l().createElement(Ie.p,null,l().createElement(xe.u,{variant:"indeterminate"},O.N.formatMessage(N.Z.templateError,{a:function(e){return l().createElement("a",{href:"https://www.redhat.com/en/services/support"},e)}})))),l().createElement(w.P,null,l().createElement(ke.zx,{variant:"primary",onClick:t},O.N.formatMessage(N.Z.textReturnToApp)))))))};Le.propTypes={onClose:c().func,state:c().object};const Re=Le;var Be=n(9557);function ze(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ue(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ze(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var qe=function(e){var t,n=e.systemsIDs,i=e.setBaselineState,c=e.patchSetID,b=c?"edit":"create",E=(0,s.useState)({submitted:!1,formValues:{},requestPending:!0,failed:!1,shouldRefresh:!1}),S=(0,o.Z)(E,2),Z=S[0],P=S[1],D=(0,h.I0)();(0,s.useEffect)((function(){return c&&(D((0,Be.gK)(c)),D((0,Be.JJ)({id:c,limit:-1}))),D((0,Be.uE)({limit:-1})),function(){return D((0,Be.r8)())}}),[]);var w=(0,me.np)(Z,P,c),T=function(){var e=!Z.failed&&Z.submitted;i({isPatchSetWizardOpen:!1,systemsIDs:[],patchSetID:void 0,shouldRefresh:e}),P({formValues:{},submitted:!1})},M={nameField:{component:Y},descriptionField:{component:re},toDateField:{component:ae},contentStep:{component:Q,patchSetID:c},configurationStep:{component:W,systemsIDs:n||[],patchSetID:c},reviewSystems:{component:Ze,systemsIDs:n||[]},reviewPatchSet:{component:De,systemsIDs:n||[]}};return l().createElement(s.Fragment,null,!Z.submitted&&l().createElement(m.Z,{schema:z(b),subscription:{values:!0},FormTemplate:function(e){return l().createElement(u.ZP,(0,r.Z)({},e,{showFormControls:!1}))},componentMapper:Ue((t={},(0,a.Z)(t,p.Z.WIZARD,{component:f.Z,className:"patch-set","data-ouia-component-id":"patch-set-wizard"}),(0,a.Z)(t,p.Z.TEXT_FIELD,d.Z),(0,a.Z)(t,p.Z.DATE_PICKER,g.Z),t),M),validatorMapper:U,onSubmit:w,onCancel:T})||l().createElement(v.u,{isOpen:!0,variant:"large",showClose:!1,className:"patch-set",hasNoBodyWrapper:!0,"aria-describedby":"patch-set-description","aria-labelledby":"patch-set-modal-title"},l().createElement(y.e,{className:"patch-set",title:B(b),description:l().createElement(s.Fragment,null,O.N.formatMessage(N.Z.templateDescription)),steps:[{name:"progress",component:l().createElement(Re,{onClose:T,state:Z}),isFinishedStep:!0}],onClose:T})))};qe.propTypes={setBaselineState:c().func,systemsIDs:c().array,patchSetID:c().string};const Ge=(0,s.memo)(qe,(function(e,t){return JSON.stringify(e)===JSON.stringify(t)}))},93080:(e,t,n)=>{"use strict";n.d(t,{c:()=>d,r:()=>g});var a=n(15861),r=n(4942),o=n(64687),s=n.n(o),l=n(43297),i=n(28216),c=n(11220),m=n(9557),u=n(5391);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={advisories:"/ids/advisories",systems:"/ids/systems",templates:"/baselines",advisorySystems:function(e){return"/ids/advisories/".concat(e,"/systems")},systemAdvisories:function(e){return"/ids/systems/".concat(e,"/advisories")},packageSystems:function(e){return"/packages/".concat(e,"/systems")},systemPackages:function(e){return"/systems/".concat(e,"/packages")}},g=function(e,t,n){var r=n.endpoint,o=n.queryParams,p=n.selectionDispatcher,d=n.constructFilename,g=n.transformKey,v=n.apiResponseTransformer,y=n.customSelector,h=(0,i.I0)(),b=function(e,t){return(0,l.useCallback)((function(n){return(0,c.dk)(e,f(f({},n),{},{limit:-1})).then((function(e){return t?t(e):e}))}),[])}(r,v),E=function(e,t){return(0,l.useCallback)((function(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=n.ids,o=n.data,s=Array.isArray(r);return(s?r:o).forEach((function(n){var r=s?n:n.id;(0,u.Kn)(n)&&n.isExpandedRow||a.push({id:e?e(n):r,selected:t?t(n):r})})),a}))}(g,d),S=function(e){y?y(e):h(p(e))},Z=function(e,t,n){return{selectNone:function(e){var a=[];Object.keys(e).forEach((function(e){a.push({id:e,selected:!1})})),t(a),n(!1)},selectPage:function(n){Array.isArray(n)&&(n=n.filter((function(e){return!e.disableSelection}))),t(e({data:n}))},selectAll:function(a,r){return a(r).then((function(a){t(e(a)),n(!0)}))}}}(E,S,(function(e){h((0,m.wy)(e))})),P=Z.selectNone,O=Z.selectPage,N=Z.selectAll,D=(0,l.useCallback)(function(){var n=(0,a.Z)(s().mark((function n(a,r,l){var i,c=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=c.length>3&&void 0!==c[3]?c[3]:function(){},n.t0=a,n.next="none"===n.t0?4:"page"===n.t0?6:"all"===n.t0?8:10;break;case 4:return P(t),n.abrupt("break",11);case 6:return O(e),n.abrupt("break",11);case 8:return N(b,o).then((function(){return i(!1)})),n.abrupt("break",11);case 10:S([{id:g?g(e[l]):e[l].id,selected:r&&(!d||d(e[l]))}]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}());return D}},81754:()=>{},70347:()=>{},58392:()=>{},10497:()=>{},54476:()=>{},80897:()=>{},88361:()=>{},71338:()=>{},74282:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},99624:()=>{},53336:()=>{},97236:()=>{},40209:()=>{},72816:()=>{},53519:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8440.7b1c7f5012c0300568b4cb00cf0376cc.js.map