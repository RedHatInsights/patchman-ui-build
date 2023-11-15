(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[8440],{83905:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(93433),r=a(29439),s=a(43297),o=a(93942),l=a(54025),i=a(11220);const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=(0,o.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystems})),c=(0,o.v9)((function(e){var t=e.entities;return null==t?void 0:t.operatingSystemsLoaded})),m=(0,s.useState)([]),u=(0,r.Z)(m,2),p=u[0],f=u[1],d=(0,l.useLoadModule)({appName:"inventory",scope:"inventory",module:"./OsFilterHelpers"}),g=(0,r.Z)(d,1)[0],v=void 0===g?{}:g,y=v.toGroupSelectionValue,b=v.buildOSFilterConfig;(0,s.useEffect)((function(){void 0!==a&&void 0!==c||(0,i.GB)().then((function(e){var t=e.results;f((t||[]).map((function(e){var t=e.value,a=t.name,n=t.major,r=t.minor,s="".concat(n,".").concat(r);return{label:"".concat(a," ").concat(s),value:"".concat(s)}})))}))}),[]),(0,s.useEffect)((function(){!0===c&&f(a)}),[c]);var h=(""===e?[]:Array.isArray(e)?e:e.split(",")).map((function(e){return e.substring(5)}));return(0,n.Z)(b?[b({id:"rhel_version",value:y(h),onChange:function(e,a){var n=Object.values(a).flatMap((function(e){return Object.keys(e)})).map((function(e){return"RHEL ".concat(e)})).toString();t({filter:{os:n}})}},p)]:[])}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Z});var n=a(79851),r=a(34512),s=a(89376),o=a(39173),l=a(45697),i=a.n(l),c=a(43297),m=a.n(c),u=a(64029),p=a(32835),f=a(92397),d=function(e){var t=e.items,a=e.headerOUIA;return m().createElement(u.a,null,t.filter(Boolean).map((function(e){return m().createElement(p.g,{key:e.title,isActive:e.isActive},e.to?m().createElement(f.Z,{to:"".concat(e.to),"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};d.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const g=d;var v=a(28883),y=a(35262),b=a(62012),h=function(e){var t=e.headerOUIA,a=(0,b.useLocation)(),n=(0,b.useNavigate)();return m().createElement(y.m,{onSelect:function(e,t){n(t)},activeKey:a.pathname,className:"patchman-tabs"},m().createElement(v.O,{eventKey:"advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(t,"-tab"),"data-ouia-component-id":"".concat(t,"-tab-Applicable advisories'")}),m().createElement(v.O,{eventKey:"systems",title:"Systems","data-ouia-component-type":"".concat(t,"-tab"),"data-ouia-component-id":"".concat(t,"-tab-Systems")}))};h.propTypes={headerOUIA:i().string};const E=h;var S=function(e){var t=e.title,a=e.showTabs,l=e.breadcrumbs,i=e.children,c=e.headerOUIA,u=e.actions;return m().createElement(m().Fragment,null,m().createElement(s.Z,{"data-ouia-component-type":"".concat(c,"-page-header")},l&&m().createElement(g,{items:l,headerOUIA:c}),m().createElement(n.P,{hasGutter:!0},m().createElement(r.J,null,m().createElement(o.Z,{title:t})),m().createElement(r.J,{isFilled:!0}),m().createElement(r.J,null,u)),i),a&&m().createElement(E,{headerOUIA:c}))};S.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const Z=S},91433:(e,t,a)=>{"use strict";a.d(t,{f:()=>f});var n=a(52643),r=a(9947),s=a(75106),o=a(38424),l=a(60485),i=a(68778),c=a(43297),m=a.n(c),u=a(32132),p=a(30893),f=function(){return m().createElement(n.b,null,m().createElement(r.u,{style:{paddingTop:40}},m().createElement(o.k,{icon:function(){return m().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),m().createElement(l.D,{headingLevel:"h5",size:"lg"},u.N.formatMessage(p.Z.statesNoApplicableAdvisories)),m().createElement(s.B,null,u.N.formatMessage(p.Z.statesSystemUpToDate))))}},38776:(e,t,a)=>{"use strict";a.d(t,{Z:()=>w});var n=a(29439),r=a(3351),s=a(22860),o=a(6934),l=a(75863),i=a(3962),c=a(81739),m=a(45697),u=a.n(m),p=a(43297),f=a.n(p),d=a(30893),g=a(53074),v=a(5391),y=a(91607),b=a(32132),h=a(44733),E=a(50383),S=a(65550),Z=function(e){var t=e.isLoading,a=e.page,n=e.perPage,r=e.onSetPage,s=e.totalItems,o=e.onPerPageSelect,l=e.paginationOUIA;return f().createElement(S.Z,{isFooter:!0},t?f().createElement("div",{className:"pf-c-pagination pf-m-bottom"},f().createElement(E.O,{fontSize:"xl",width:"350px",style:{margin:10}})):f().createElement(h.t,{itemCount:s,perPage:n,page:a,onSetPage:r,onPerPageSelect:o,widgetId:"pagination-options-menu-bottom",variant:h.a.bottom,ouiaId:l,isDisabled:0===s}))};Z.propTypes={isLoading:u().bool,onSetPage:u().func,onPerPageSelect:u().func,page:u().number,perPage:u().number,totalItems:u().number,paginationOUIA:u().string};const P=Z;var O=a(52579),N=a(1595),D=function(e){var t,a=e.columns,m=e.store,u=m.rows,p=m.metadata,h=m.status,S=m.queryParams,Z=S.filter,D=S.search,w=e.onCollapse,T=e.onSelect,C=e.onSetPage,I=e.onPerPageSelect,M=e.onSort,k=e.onExport,x=e.filterConfig,j=e.sortBy,F=e.remediationProvider,A=e.selectedRows,L=e.compact,R=e.apply,B=e.tableOUIA,_=e.paginationOUIA,z=e.errorState,U=e.emptyState,q=e.defaultFilters,G=e.searchChipLabel,K=e.ToolbarButton,W=e.actionsConfig,V=e.isRemediationLoading,J=e.actionsToggle,Q=f().useMemo((function(){return(0,v.CM)(p.limit,p.offset)}),[p.limit,p.offset]),$=(0,n.Z)(Q,2),H=$[0],X=$[1],Y=(0,y.j5)(Z,R,q),ee=(0,n.Z)(Y,1)[0],te=A&&(0,v.Qy)(A).length,ae=h.code,ne=h.hasError,re=h.isLoading,se=(0,y.Pz)(te,T,p,u,w);return f().createElement(f().Fragment,null,f().createElement(f().Fragment,null,ne||!1===p.has_systems?f().createElement(O.Z,{code:ae,ErrorState:z,EmptyState:U,metadata:p}):f().createElement(f().Fragment,null,f().createElement(i.Z,{pagination:re?f().createElement(E.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:p.total_items,page:H,perPage:X,isCompact:!0,onSetPage:C,onPerPageSelect:I,ouiaId:"top-".concat(_),isDisabled:0===p.total_items},filterConfig:x,activeFiltersConfig:{filters:(0,v.mt)(Z,D,G),onDelete:ee,deleteTitle:b.N.formatMessage(q&&d.Z.labelsFiltersReset||d.Z.labelsFiltersClear)},actionsConfig:{actions:[F&&f().createElement(g.Z,{remediationProvider:F,isDisabled:0===Object.values(A).filter((function(e){return e})).length||V,isLoading:V})]},exportConfig:{isDisabled:0===p.total_items,onSelect:k},bulkSelect:T&&se},K&&f().createElement(N.E,null,f().createElement(K,null))),re?f().createElement(c.Z,{colSize:null!==(t=null==a?void 0:a.length)&&void 0!==t?t:5,rowSize:20,variant:L&&l.B.compact}):f().createElement(r.i,{"aria-label":"Patch table view",cells:a,onSelect:p.total_items&&T,rows:u,onCollapse:p.total_items&&w,canSelectAll:!1,onSort:p.total_items&&M,ouiaId:B,sortBy:p.total_items&&j,isStickyHeader:!0,variant:L&&l.B.compact,actions:W,actionsToggle:J},f().createElement(o.x,null),f().createElement(s.R,null)),f().createElement(P,{isLoading:re,totalItems:p.total_items,perPage:X,page:H,onSetPage:C,onPerPageSelect:I,paginationOUIA:"bottom-".concat(_)}))))};D.propTypes={columns:u().array,onCollapse:u().func,onSelect:u().func,onSetPage:u().func,onPerPageSelect:u().func,onSort:u().func,onExport:u().func,remediationProvider:u().func,selectedRows:u().object,apply:u().func,sortBy:u().object,filterConfig:u().object,store:u().object,compact:u().bool,tableOUIA:u().string,paginationOUIA:u().string,errorState:u().element,emptyState:u().element,defaultFilters:u().object,searchChipLabel:u().string,ToolbarButton:u().elementType,actionsConfig:u().array,isRemediationLoading:u().bool,actionsToggle:u().func};const w=D},20677:(e,t,a)=>{"use strict";a.d(t,{$z:()=>v,Qk:()=>g,Z8:()=>d,gs:()=>p,mN:()=>u,mR:()=>f,og:()=>y});var n=a(43297),r=a.n(n),s=a(47173),o=a(35224),l=a(7732),i=a(62165),c=a(32132),m=a(30893),u=function(e,t){return function(){return t?r().createElement(s.zx,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)):r().createElement(o.u,{content:"For editing access, contact your administrator."},r().createElement(s.zx,{key:"createButton",isAriaDisabled:!0},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)))}},p=[{key:"name",title:"Name",transforms:[l.p]},{key:"systems",title:"Systems applied",transforms:[l.p]},{key:"last_edited",title:"Last edited",transforms:[l.p]},{key:"published",title:"Published",transforms:[l.p]},{key:"creator",title:"Created by",transforms:[l.p]}],f=function(e,t){return[{title:c.N.formatMessage(m.Z.labelsButtonEditTemplate),onClick:function(t,a,n){e(null==n?void 0:n.id)}},{title:c.N.formatMessage(m.Z.labelsButtonRemoveTemplate),onClick:function(e,a,n){t(n)}}]},d=function(e){return[{title:c.N.formatMessage(m.Z.titlesTemplateRemoveFromSystems,{systemsCount:1}),onClick:function(t,a,n){e([n.id])}}]},g=function(){return r().createElement(o.u,{content:"For editing access, contact your administrator."},r().createElement(s.zx,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},r().createElement(i.ZP,null)))},v=function(e){return{success:{title:"Systems succesfully removed from this Patch template.",description:"".concat(e," ").concat(e>1?"systems":"system"," removed from Patch template(s)"),variant:"success"},failure:{title:"Failed to remove systems from this Patch template.",variant:"danger"}}},y=function(e){return{success:{title:"Systems succesfully applied to this Patch template.",description:"".concat(e," ").concat(e>1?"systems":"system"," added to Patch template(s)"),variant:"success"},failure:{title:"Failed to apply systems to this Patch template.",variant:"danger"}}}},93665:(e,t,a)=>{"use strict";a.d(t,{Z:()=>I});var n=a(4942),r=a(29439),s=a(43297),o=a.n(s),l=a(45697),i=a.n(l),c=a(23279),m=a.n(c),u=a(93942),p=a(71973),f=a(93174),d=a(54680),g=a(92694),v=a(64403),y=a(59775),b=a(2372),h=a(28191),E=a(92298),S=a(47173),Z=a(48880),P=a(9557),O=a(32132),N=a(30893);function D(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?D(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):D(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var T=function(e){var t=e.changePage,a=e.page,n=e.perPage,r=e.totalItems;return o().createElement(h.k,{justifyContent:{default:"justifyContentSpaceBetween"}},o().createElement(E.B,null,o().createElement(S.zx,{variant:"plain","aria-label":"prev",isDisabled:1===a,onClick:function(){return t(a-1)}},o().createElement(p.ZP,null))),o().createElement(E.B,null,o().createElement(S.zx,{variant:"plain","aria-label":"next",isDisabled:r<a*n,onClick:function(){return t(a+1)}},o().createElement(f.ZP,null))))},C=function(e){var t=e.setSelectedPatchSet,a=e.selectedSets,n=e.systems,l=e.selectCallback,i=void 0===l?function(){}:l,c=(0,u.I0)(),p=(0,Z.default)(),f=(0,s.useState)(!1),h=(0,r.Z)(f,2),E=h[0],S=h[1],D=(0,u.v9)((function(e){return e.PatchSetsStore.rows})),C=(0,u.v9)((function(e){return e.PatchSetsStore.queryParams})),I=(0,u.v9)((function(e){return e.PatchSetsStore.status})),M=(0,u.v9)((function(e){return e.PatchSetsStore.metadata}));(0,s.useEffect)((function(){return function(){c((0,P.Im)())}}),[]);var k=(C||{}).search,x="string"==typeof k&&""!==k?k:Boolean(k);(0,s.useEffect)((function(){c((0,P.BY)(w(w({},C),{},{offset:C.offset+(C.page-1)*C.perPage})))}),[C.page,x]);var j=(0,s.useMemo)((function(){return I.isLoading?[o().createElement(g.$,{key:"loading"},o().createElement(b.$,{size:"md"}))]:null==D?void 0:D.map((function(e){return o().createElement(g.$,{key:e.id,value:e.name})}))}),[D,I.isLoading]),F=(0,s.useState)((function(){return m()((function(e){return t={search:e},void c((0,P.br)(t));var t}),700)})),A=(0,r.Z)(F,1)[0];return o().createElement(y.c,{fieldId:"existing_patch_set",label:O.N.formatMessage(N.Z.textTemplateChoose),isRequired:!0},o().createElement(d.P,{variant:v.TM.single,"aria-label":O.N.formatMessage(N.Z.labelsFiltersSearchTemplatePlaceholder),onSelect:function(e,a){S(!1),t(a);var r,s,o,l=D.filter((function(e){return e.name===a}));1===l.length&&(i(l[0]),null==p||null===(r=p.change)||void 0===r||r.call(p,"existing_patch_set",{name:null===(s=l[0])||void 0===s?void 0:s.name,systems:n,id:null===(o=l[0])||void 0===o?void 0:o.id}))},placeholderText:O.N.formatMessage(N.Z.templateSelectExisting),inlineFilterPlaceholderText:O.N.formatMessage(N.Z.labelsFiltersSearchTemplatePlaceholder),selections:a,onToggle:function(){S(!E)},isOpen:E,isDisabled:!1,onFilter:function(e,t){A(t)},hasInlineFilter:!0,className:"patch-existing-sets",footer:o().createElement(T,{changePage:function(e){c((0,P.br)(w(w({},C),{},{page:e})))},page:C.page,perPage:C.perPage,totalItems:M.total_items}),menuAppendTo:document.body,maxHeight:350},j))};T.propTypes={changePage:i().func,page:i().number,perPage:i().number,totalItems:i().number},C.propTypes={setSelectedPatchSet:i().func,selectedSets:i().array,systems:i().array,selectCallback:i().func};const I=C},45329:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Ge});var n=a(4942),r=a(87462),s=a(29439),o=a(43297),l=a.n(o),i=a(45697),c=a.n(i),m=a(59109),u=a(67850),p=a(96354),f=a(26854),d=a(11947),g=a(74777),v=a(80236),y=a(77583),b=a(93942),h=a(48880),E=a(68340),S=a(68774),Z=a(49739),P=a(83826),O=(a(35575),a(32132)),N=a(30893),D=(a(93665),a(50693)),w=a(16475),T=a(2372),C=a(64124),I=a(5391);const M=function(e){if(e&&"string"==typeof e&&null===e.match(/^(\d{4})-(0[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return O.N.formatMessage(N.Z.labelsErrorInvalidDate);var t=new Date(e),a=t.getTime(),n=new Date(1990,0,1);return"number"!=typeof a||Number.isNaN(a)?O.N.formatMessage(N.Z.labelsErrorInvalidDate):t<n?O.N.formatMessage(N.Z.labelsErrorDateLimit):void 0};var k=a(72573),x=/^[a-z0-9][a-z0-9_-]*$/,j=[{key:"display_name",title:"Name",props:{width:40},transforms:[k.sortable]},{title:"OS",key:"operating_system",props:{width:20},transforms:[k.sortable]},{key:"baseline_name",title:"Template",props:{width:20},transforms:[k.sortable]},{key:"last_upload",title:"Last seen",props:{width:20},transforms:[k.sortable]}],F=[{name:"configurationStep",component:"configurationStep"},{name:"existing_patch_set",component:p.Z.TEXT_FIELD,hidden:!0}],A=[{name:"contentStep",component:"contentStep"}],L=[{name:"name",component:"nameField",validate:[{type:C.Z.REQUIRED},{type:"validate-name"}]}],R=[{name:"description",component:"descriptionField"}],B=[{name:"toDate",component:"toDateField",validate:[{type:C.Z.REQUIRED},{type:"validate-date"}]}],_=function(e){return"edit"===e?O.N.formatMessage(N.Z.templateEdit):O.N.formatMessage(N.Z.templateTitle)},z=function(e){return{fields:[{component:p.Z.WIZARD,name:"patch-set-wizard",isDynamic:!0,inModal:!0,title:_(e),description:l().createElement(o.Fragment,null,O.N.formatMessage(N.Z.templateDescription)),fields:[{name:"template-content",title:O.N.formatMessage(N.Z.templateContentStepSidebarName),fields:A,nextStep:"template-details"},{name:"template-details",title:O.N.formatMessage(N.Z.templateDetailStepSidebarName),fields:F,nextStep:"template-systems"},{name:"template-systems",title:O.N.formatMessage(N.Z.templateStepSystems),fields:[{name:"systems",component:"reviewSystems"}],nextStep:"template-review"},{name:"template-review",title:O.N.formatMessage(N.Z.templateReview),fields:[{name:"review",component:"reviewPatchSet"}]}]}]}},U={"validate-systems":function(){return function(e){var t=(0,I.LI)(e);return void 0===t||t.length>0?void 0:O.N.formatMessage(N.Z.templateNoSystemSelected)}},"validate-date":function(){return M},"validate-name":function(){return function(e,t){return t.takenBaselineNamesLoading||t.templateDetailLoading?O.N.formatMessage(N.Z.templateWizardValidateLoading):t.previousName!==e&&t.takenBaselineNames.includes(e)?O.N.formatMessage(N.Z.templateWizardValidateNameTaken):e.match(x)?void 0:O.N.formatMessage(N.Z.templateWizardValidateRegex)}}},q=function(e){var t=e.isLoading,a=(0,h.default)().renderForm;return l().createElement(o.Fragment,null,l().createElement(T.$,{size:"xl",style:{display:t?"block":"none"}}),l().createElement(D.r,{hasGutter:!0,style:{display:t?"none":"grid"}},l().createElement(w.P,{lg:12,md:12},a(L)),l().createElement(w.P,{lg:12,md:12},a(R))))};q.propTypes={isLoading:c().bool};const G=q;var K=function(e){e.systemsIDs;var t=e.patchSetID,a=(0,h.default)(),n=(0,o.useState)(!1),r=(0,s.Z)(n,2),i=(r[0],r[1],(0,o.useState)(!0)),c=(0,s.Z)(i,2),m=c[0],u=(c[1],(0,o.useState)([])),p=(0,s.Z)(u,2),f=(p[0],p[1],(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU)),d=f.patchSet,g=f.status,v=f.takenBaselineNamesLoading;return(0,o.useEffect)((function(){if(t){var e=d.name,n=d.description;a.change("name",e),a.change("description",n)}}),[d]),l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateDetailStepTitle)))),l().createElement(P.v,null,O.N.formatMessage(N.Z.templateDetailStepText)),!1,l().createElement(P.v,null,l().createElement(Z.K,{hasGutter:!0},null,l().createElement(P.v,null,m?l().createElement(G,{isLoading:t&&g.isLoading||v}):null))))};K.propTypes={systemsIDs:c().array,patchSetID:c().string};const W=K;var V=a(22629),J=function(e){var t=e.patchSetID,a=(0,h.default)(),n=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU),r=n.patchSet,s=n.status;return(0,o.useEffect)((function(){if(t){var e=r.config.to_time,n=r.name;a.change("toDate",(0,I.MC)(e)),a.change("previousName",n),a.change("templateDetailLoading",s.isLoading)}}),[r,s]),l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateContentStepTitle)))),l().createElement(P.v,null,O.N.formatMessage(N.Z.templateContentStepText)),l().createElement(P.v,null,a.renderForm(B)),l().createElement(P.v,null,l().createElement(V.L,{toggleText:O.N.formatMessage(N.Z.templateContentStepExpandableTitle)},O.N.formatMessage(N.Z.templateContentStepExpandable))))};J.propTypes={patchSetID:c().string};const Q=J;var $=a(59775),H=a(92607),X=a(41693);const Y=function(e){var t,a=(0,X.Z)(e).input,n=(0,h.default)(),r=null===(t=n.getState())||void 0===t?void 0:t.values,i=(0,o.useState)(null==r?void 0:r.name),c=(0,s.Z)(i,2),m=c[0],u=c[1],p=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU),f=p.takenBaselineNames,d=p.takenBaselineNamesLoading;(0,o.useEffect)((function(){u(r.name)}),[r.name]),(0,o.useEffect)((function(){n.change("takenBaselineNames",f),n.change("takenBaselineNamesLoading",d)}),[f,d]);var g=function(){if(void 0!==m&&m!==r.previousName)return!m.match(x)||f.includes(m)?"error":void 0};return l().createElement($.c,{fieldId:"name",label:O.N.formatMessage(N.Z.labelsColumnsName),isRequired:!0,helperTextInvalid:null!=m&&m.match(x)?O.N.formatMessage(N.Z.templateWizardValidateNameTaken):O.N.formatMessage(N.Z.templateWizardValidateRegex),validated:g()},l().createElement(H.oi,{type:"text",isRequired:!0,value:m,onChange:function(e){a.onChange(e),u(e)},"aria-label":"name",autoFocus:!0,validated:g()}))};var ee=a(56760),te=a(28191),ae=a(92298);const ne=function(e){var t,a=(0,X.Z)(e).input,n=null===(t=(0,h.default)().getState())||void 0===t?void 0:t.values,r=(0,o.useState)(null==n?void 0:n.toDate),i=(0,s.Z)(r,2),c=i[0],m=i[1];return(0,o.useEffect)((function(){m(n.toDate)}),[n.toDate]),l().createElement($.c,{fieldId:"toDate",label:O.N.formatMessage(N.Z.templateDateField),isRequired:!0},l().createElement(te.k,null,l().createElement(ae.B,{lg:2,md:2},O.N.formatMessage(N.Z.templateDateUpto)),l().createElement(ae.B,{lg:10,md:10},l().createElement(ee.M,{appendTo:document.body,value:c,onChange:function(e,t){a.onChange(t),m(t)},popoverProps:{position:"right"},"aria-label":"toDate",validators:[M],invalidFormatText:O.N.formatMessage(N.Z.labelsErrorInvalidDate)}))))},re=function(e){var t,a=(0,X.Z)(e).input,n=null===(t=(0,h.default)().getState())||void 0===t?void 0:t.values,r=(0,o.useState)(null==n?void 0:n.description),i=(0,s.Z)(r,2),c=i[0],m=i[1];return(0,o.useEffect)((function(){m(n.description)}),[n.description]),l().createElement($.c,{fieldId:"description",label:O.N.formatMessage(N.Z.labelsDescription)},l().createElement(H.oi,{type:"text",isRequired:!0,value:c,onChange:function(e){a.onChange(e),m(e)},"aria-label":"description"}))};var se=a(93433),oe=a(45987),le=a(90747),ie=a(41448),ce=a(36248),me=a(91607),ue=a(38776),pe=a(75585),fe=a(23188),de=a(11220),ge=a(13784),ve=a(83905),ye=a(93080),be=["systemsIDs"];function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ee(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Se=function(e){var t=e.systemsIDs,a=void 0===t?[]:t,n=(0,oe.Z)(e,be),r=(0,X.Z)(n).input,i=(0,h.default)().getState().values,c=(0,I.Qh)(a,null==i?void 0:i.systems),m=(0,o.useState)(!0),u=(0,s.Z)(m,2),p=u[0],f=u[1],d=(0,o.useState)([]),g=(0,s.Z)(d,2),v=g[0],y=g[1],D=(0,o.useState)([]),w=(0,s.Z)(D,2),T=w[0],C=w[1],M=(0,o.useState)(c),k=(0,s.Z)(M,2),x=k[0],F=k[1],A=(0,o.useState)({limit:20,offset:0,total_items:0}),L=(0,s.Z)(A,2),R=L[0],B=L[1],_=(0,o.useState)({page:1,perPage:20,filter:{stale:[!0,!1]}}),z=(0,s.Z)(_,2),U=z[0],q=z[1],G=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU).assignedSystems;(0,o.useEffect)((function(){(0,de.lc)(Ee(Ee({},U),{},{filter:Ee(Ee({},U.filter),{},{id:a.length>0?"in:".concat(a.join(",")):void 0,satellite_managed:!1})})).then((function(e){C((0,ce.ub)(e.data,Ee(Ee({},(0,I.Qh)([].concat((0,se.Z)(G),(0,se.Z)(a)))),x))),B(e.meta),y(e.data),f(!1)}))}),[U.filter,U]),(0,o.useEffect)((function(){r.onChange(x),C((0,ce.ub)(v,x))}),[x]),(0,o.useEffect)((function(){F(Ee(Ee({},x),(0,I.Qh)(G)))}),[G]);var K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f(!0),q((function(a){return Ee(Ee(Ee({},a),e),{},{filter:Ee(Ee({},a.filter),e.filter)},t&&{page:1,offset:0})}))},W=(0,ve.Z)(U.filter.os,K),V=(0,me._f)(j,K,1),J=l().useMemo((function(){return(0,I.hO)(j,R.sort,1)}),[R.sort]),Q=(0,me.SL)(R.limit,(function(e){return K(e,!1)})),$=(0,me._T)(K),H=(0,ye.r)(T,x,{endpoint:ye.c.systems,queryParams:Ee(Ee({},U),{},{filter:Ee(Ee(Ee({},U.filter),a.length>0&&{id:"in:".concat(a.join(","))}),{},{satellite_managed:!1})}),customSelector:function(e){var t=e.reduce((function(e,t){return e[t.id]=!!t.selected||void 0,e}),{});F(Ee(Ee({},x),t))}});return l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateApplySystems)))),l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:E.q.p},"Select systems to apply the new template to. The list of systems ",l().createElement("b",null,"does not contain")," systems managed by Satellite."))),l().createElement(ie.b,{variant:"warning",title:O.N.formatMessage(N.Z.templateAlertSystems),isInline:!0}),l().createElement(P.v,null,l().createElement(ue.Z,{columns:j,compact:!0,onSetPage:Q,onPerPageSelect:$,onSort:V,selectedRows:x,onSelect:H,sortBy:J,apply:K,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:T,metadata:R,status:{isLoading:p},queryParams:U},filterConfig:{items:[(0,le.Z)(K,U.search,O.N.formatMessage(N.Z.labelsFiltersSystemsSearchTitle),O.N.formatMessage(N.Z.labelsFiltersSearch)),(0,pe.Z)(K,U.filter),(0,fe.Z)(K,U.filter)].concat((0,se.Z)(W))},searchChipLabel:O.N.formatMessage(N.Z.labelsFiltersSystemsSearchTitle),defaultFilters:ge.hb})))};Se.propTypes={systemsIDs:c().array};const Ze=Se;var Pe=a(25834),Oe=a(78140),Ne=function(e,t){return l().createElement(o.Fragment,null,l().createElement(Oe.T,{component:Oe.v.dt,style:{minWidth:220}},O.N.formatMessage(N.Z[e])),l().createElement(Oe.T,{component:Oe.v.dd},t))};const De=function(){var e=(0,h.default)().getState().values,t=e.existing_patch_set||e,a=t.name,n=t.description,r=t.toDate,s=e.systems;return l().createElement(Z.K,{hasGutter:!0},l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2"},O.N.formatMessage(N.Z.templateReview)))),l().createElement(P.v,null,l().createElement(S.D,{style:{marginTop:"-15px"}},l().createElement(E.x,{component:E.q.p},O.N.formatMessage(N.Z.textPatchTemplateReview)))),l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},O.N.formatMessage(N.Z.textPatchTemplateContent)),l().createElement(Pe.G,{component:Pe.F.dl},Ne("labelsColumnsUpToDate",(0,I.jC)(r))))),l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},O.N.formatMessage(N.Z.textPatchTemplateDetails)),l().createElement(Pe.G,{component:Pe.F.dl},Ne("labelsColumnsName",a),Ne("labelsDescription",n||O.N.formatMessage(N.Z.titlesTemplateNoDescriptionProvided))))),l().createElement(P.v,null,l().createElement(S.D,null,l().createElement(E.x,{component:"h2",className:"pf-u-mt-md pf-u-mb-sm"},O.N.formatMessage(N.Z.textPatchTemplateSystems)),l().createElement(Pe.G,{component:Pe.F.dl},Ne("labelsSelectedSystems",O.N.formatMessage(N.Z.labelsSystem,{systemsCount:Object.values(s).filter((function(e){return e})).length}))))))};var we=a(60485),Te=a(9947),Ce=a(38424),Ie=a(75106),Me=a(36621),ke=a(65673),xe=a(47173),je=a(68778),Fe=a(43047),Ae=a(94768),Le=a(83215),Re=function(e){var t=e.onClose,a=e.state,n=a.requestPending,r=a.failed,s=a.error,o=(0,b.I0)();return r&&o((0,Le.wN)({title:"There was an error while processing your request",description:s.detail,variant:"danger"})),l().createElement(Te.u,{variant:Te.I.large,"data-component-ouia-id":"patch-set-progress"},l().createElement(Ce.k,{color:r?"var(--pf-global--danger-color--100)":n?void 0:"var(--pf-global--success-color--100)",icon:r?Fe.ZP:n?Ae.ZP:je.ZP}),l().createElement(we.D,{headingLevel:"h1",size:"lg"},r?O.N.formatMessage(N.Z.textErrorSomethingWrong):n?O.N.formatMessage(N.Z.textConfigurationInProgress):O.N.formatMessage(N.Z.textPatchTemplateSuccessfuly)),l().createElement(Ie.B,null,l().createElement(D.r,{hasGutter:!0},n&&l().createElement(l().Fragment,null,l().createElement(w.P,null,l().createElement(Me.p,null,l().createElement(ke.u,{variant:"indeterminate"},O.N.formatMessage(N.Z.textPatchTemplatePending)))),l().createElement(w.P,null,l().createElement(xe.zx,{variant:"link",isInline:!0,onClick:t},O.N.formatMessage(N.Z.labelsCancel))," ")),!n&&!r&&l().createElement(w.P,null,l().createElement(xe.zx,{variant:"primary",onClick:t},O.N.formatMessage(N.Z.textReturnToApp))),!n&&r&&l().createElement(l().Fragment,null,l().createElement(w.P,null,l().createElement(Me.p,null,l().createElement(ke.u,{variant:"indeterminate"},O.N.formatMessage(N.Z.templateError,{a:function(e){return l().createElement("a",{href:"https://www.redhat.com/en/services/support"},e)}})))),l().createElement(w.P,null,l().createElement(xe.zx,{variant:"primary",onClick:t},O.N.formatMessage(N.Z.textReturnToApp)))))))};Re.propTypes={onClose:c().func,state:c().object};const Be=Re;var _e=a(9557);function ze(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ue(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ze(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ze(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var qe=function(e){var t,a=e.systemsIDs,i=e.setBaselineState,c=e.patchSetID,h=c?"edit":"create",E=(0,o.useState)({submitted:!1,formValues:{},requestPending:!0,failed:!1,shouldRefresh:!1}),S=(0,s.Z)(E,2),Z=S[0],P=S[1],D=(0,b.I0)();(0,o.useEffect)((function(){return c&&(D((0,_e.gK)(c)),D((0,_e.JJ)({id:c,limit:-1}))),D((0,_e.uE)({limit:-1})),function(){return D((0,_e.r8)())}}),[]);var w=(0,me.np)(Z,P,c),T=function(){var e=!Z.failed&&Z.submitted;i({isPatchSetWizardOpen:!1,systemsIDs:[],patchSetID:void 0,shouldRefresh:e}),P({formValues:{},submitted:!1})},C={nameField:{component:Y},descriptionField:{component:re},toDateField:{component:ne},contentStep:{component:Q,patchSetID:c},configurationStep:{component:W,systemsIDs:a||[],patchSetID:c},reviewSystems:{component:Ze,systemsIDs:a||[]},reviewPatchSet:{component:De,systemsIDs:a||[]}};return l().createElement(o.Fragment,null,!Z.submitted&&l().createElement(m.Z,{schema:z(h),subscription:{values:!0},FormTemplate:function(e){return l().createElement(u.ZP,(0,r.Z)({},e,{showFormControls:!1}))},componentMapper:Ue((t={},(0,n.Z)(t,p.Z.WIZARD,{component:f.Z,className:"patch-set","data-ouia-component-id":"patch-set-wizard"}),(0,n.Z)(t,p.Z.TEXT_FIELD,d.Z),(0,n.Z)(t,p.Z.DATE_PICKER,g.Z),t),C),validatorMapper:U,onSubmit:w,onCancel:T})||l().createElement(v.u,{isOpen:!0,variant:"large",showClose:!1,className:"patch-set",hasNoBodyWrapper:!0,"aria-describedby":"patch-set-description","aria-labelledby":"patch-set-modal-title"},l().createElement(y.e,{className:"patch-set",title:_(h),description:l().createElement(o.Fragment,null,O.N.formatMessage(N.Z.templateDescription)),steps:[{name:"progress",component:l().createElement(Be,{onClose:T,state:Z}),isFinishedStep:!0}],onClose:T})))};qe.propTypes={setBaselineState:c().func,systemsIDs:c().array,patchSetID:c().string};const Ge=(0,o.memo)(qe,(function(e,t){return JSON.stringify(e)===JSON.stringify(t)}))},93080:(e,t,a)=>{"use strict";a.d(t,{c:()=>d,r:()=>g});var n=a(15861),r=a(4942),s=a(64687),o=a.n(s),l=a(43297),i=a(93942),c=a(11220),m=a(9557),u=a(5391);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var d={advisories:"/ids/advisories",systems:"/ids/systems",templates:"/baselines",advisorySystems:function(e){return"/ids/advisories/".concat(e,"/systems")},systemAdvisories:function(e){return"/ids/systems/".concat(e,"/advisories")},packageSystems:function(e){return"/packages/".concat(e,"/systems")},systemPackages:function(e){return"/systems/".concat(e,"/packages")},templateSystems:function(e){return"/ids/baselines/".concat(e,"/systems")}},g=function(e,t,a){var r=a.endpoint,s=a.queryParams,p=a.selectionDispatcher,d=a.constructFilename,g=a.transformKey,v=a.apiResponseTransformer,y=a.customSelector,b=(0,i.I0)(),h=function(e,t){return(0,l.useCallback)((function(a){return(0,c.dk)(e,f(f({},a),{},{limit:-1})).then((function(e){return t?t(e):e}))}),[])}(r,v),E=function(e,t){return(0,l.useCallback)((function(a){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=a.ids,s=a.data,o=Array.isArray(r);return(o?r:s).forEach((function(a){var r=o?a:a.id;(0,u.Kn)(a)&&a.isExpandedRow||n.push({id:e?e(a):r,selected:t?t(a):r})})),n}))}(g,d),S=function(e){y?y(e):b(p(e))},Z=function(e,t,a){return{selectNone:function(e){var n=[];Object.keys(e).forEach((function(e){n.push({id:e,selected:!1})})),t(n),a(!1)},selectPage:function(a){Array.isArray(a)&&(a=a.filter((function(e){return!e.disableSelection}))),t(e({data:a}))},selectAll:function(n,r){return r.offset=0,n(r).then((function(n){if(Array.isArray(n.data)){var r=n.data.filter((function(e){return"Applicable"!==e.status}));t(e({data:r}))}else t(e(n)),a(!0)}))}}}(E,S,(function(e){b((0,m.wy)(e))})),P=Z.selectNone,O=Z.selectPage,N=Z.selectAll,D=(0,l.useCallback)(function(){var a=(0,n.Z)(o().mark((function a(n,r,l){var i,c=arguments;return o().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:i=c.length>3&&void 0!==c[3]?c[3]:function(){},a.t0=n,a.next="none"===a.t0?4:"page"===a.t0?6:"all"===a.t0?8:10;break;case 4:return P(t),a.abrupt("break",11);case 6:return O(e),a.abrupt("break",11);case 8:return N(h,s).then((function(){return i(!1)})),a.abrupt("break",11);case 10:S([{id:g?g(e[l]):e[l].id,selected:r&&(!d||d(e[l]))}]);case 11:case"end":return a.stop()}}),a)})));return function(e,t,n){return a.apply(this,arguments)}}());return D}},81754:()=>{},70347:()=>{},58392:()=>{},10497:()=>{},54476:()=>{},80897:()=>{},88361:()=>{},71338:()=>{},74282:()=>{},25238:()=>{},93398:()=>{},46928:()=>{},99624:()=>{},53336:()=>{},97236:()=>{},40209:()=>{},72816:()=>{},53519:()=>{},11177:()=>{}}]);
//# sourceMappingURL=../sourcemaps/8440.0b9a9e7bf569d2e222bc0b419611c140.js.map