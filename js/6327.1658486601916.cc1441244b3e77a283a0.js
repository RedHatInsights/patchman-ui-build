(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[6327,5467,9477,3929,9682],{83905:(e,t,a)=>{"use strict";a.d(t,{Z:()=>d});var n=a(87462),r=a(29439),s=a(43297),l=a.n(s),o=a(13784),i=a(83237),c=a(80887),u=a(77221),m=a(82553),p=a(32132),f=a(30893);const d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=l().useState(!1),s=(0,r.Z)(a,2),d=s[0],g=s[1],h=l().useState(10),v=(0,r.Z)(h,2),b=v[0],y=v[1],E=o.nW.slice().reverse(),S=e.os,Z="string"==typeof S&&S.split(",")||[],O=function(e,a){if(S&&!S.includes(a))t({filter:{os:"".concat(Z.join(","),",").concat(a)}});else if(S&&S.includes(a)){var n=Z.filter((function(e){return e!==a}));t({filter:{os:n.length>0&&"".concat(n.join(","))||void 0}})}else t({filter:{os:""!==a&&a||void 0}})},P=function(e){g(e)},D=function(){y(E.length)};return{type:i.Y.custom,label:p.N.formatMessage(f.Z.labelsFiltersOsVersion),value:"custom",filterValues:{children:l().createElement(c.Select,(0,n.Z)({variant:m.SelectVariant.checkbox,typeAheadAriaLabel:p.N.formatMessage(f.Z.labelsFiltersOsVersionPlaceholder),onToggle:P,onSelect:O,selections:Z,isOpen:d,"aria-labelledby":"patch-os-version-filter",placeholderText:p.N.formatMessage(f.Z.labelsFiltersOsVersionPlaceholder)},b<E.length&&{loadingVariant:{text:"View more",onClick:D}},{style:{maxHeight:"400px",overflow:"auto"}}),E.slice(0,b).map((function(e,t){return l().createElement(u.SelectOption,{key:t,value:e.value})})))}}}},75585:(e,t,a)=>{"use strict";a.d(t,{Z:()=>c});var n=a(83237),r=a(43297),s=a.n(r),l=a(13784),o=a(32132),i=a(30893);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.stale,r=s().useMemo((function(){return l.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),c=a&&(Array.isArray(a)&&a.map((function(e){return e.toString()}))||[a.toString()]),u=function(t){e({filter:{stale:t}})};return{label:o.N.formatMessage(i.Z.labelsFiltersStale),type:n.Y.checkbox,filterValues:{onChange:function(e,t){u(t)},items:r,value:c,placeholder:o.N.formatMessage(i.Z.labelsFiltersStalePlaceholder)}}}},23188:(e,t,a)=>{"use strict";a.d(t,{Z:()=>o});var n=a(83237),r=a(13784),s=a(32132),l=a(30893);const o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.packages_updatable,o=function(t){e({filter:{packages_updatable:t}})};return{label:s.N.formatMessage(l.Z.labelsFiltersUpdatable),type:n.Y.radio,filterValues:{onChange:function(e,t){o(t)},items:r.Tl,value:a,placeholder:s.N.formatMessage(l.Z.labelsFiltersUpdatablePlaceholder)}}}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var n=a(80123),r=a(39173),s=a(45697),l=a.n(s),o=a(43297),i=a.n(o),c=a(85991),u=a(49489),m=a(334),p=function(e){var t=e.items,a=e.headerOUIA;return i().createElement(c.a,null,t.filter(Boolean).map((function(e){return i().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&i().createElement(m.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:l().arrayOf(l().shape({isActive:l().bool,to:l().string,title:l().string})),headerOUIA:l().string};const f=p;var d=a(82819),g=a(98378),h=a(60076),v=function(e){var t=e.history,a=e.headerOUIA;return i().createElement(g.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},i().createElement(d.O,{eventKey:h.H.advisories.to,title:h.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(h.H.advisories.title)}),i().createElement(d.O,{eventKey:h.H.systems.to,title:h.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(h.H.systems.title)}))};v.propTypes={history:l().object,headerOUIA:l().string};const b=(0,m.withRouter)(v);var y=function(e){var t=e.title,a=e.showTabs,s=e.breadcrumbs,l=e.children,o=e.headerOUIA;return i().createElement(i().Fragment,null,i().createElement(n.Z,{"data-ouia-component-type":"".concat(o,"-page-header")},s&&i().createElement(f,{items:s,headerOUIA:o}),i().createElement(r.Z,{title:t}),l),a&&i().createElement(b,{headerOUIA:o}))};y.propTypes={title:l().string,showTabs:l().bool,breadcrumbs:l().array,children:l().any,headerOUIA:l().string};const E=y},74079:(e,t,a)=>{"use strict";a.d(t,{Z:()=>Qe});var n=a(4942),r=a(87462),s=a(29439),l=a(43297),o=a.n(l),i=a(45697),c=a.n(i),u=a(11777),m=a(53601),p=a(96354),f=a(26854),d=a(11947),g=a(74777),h=a(78826),v=a(45787),b=a(28216),y=a(48880),E=a(63540),S=a(20018),Z=a(81159),O=a(34023),P=a(9568),D=a(32132),w=a(30893),N=a(23279),I=a.n(N),M=a(5866),T=a(95511),j=a(80887),x=a(77221),C=a(82553),F=a(23811),_=a(67463),k=a(36001),A=a(42057),R=a(6202),U=a(9557);function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function L(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var q=function(e){var t=e.changePage,a=e.page,n=e.perPage,r=e.totalItems;return o().createElement(k.k,{justifyContent:{default:"justifyContentSpaceBetween"}},o().createElement(A.B,null,o().createElement(R.Button,{variant:"plain","aria-label":"prev",isDisabled:1===a,onClick:function(){return t(a-1)}},o().createElement(M.default,null))),o().createElement(A.B,null,o().createElement(R.Button,{variant:"plain","aria-label":"next",isDisabled:r<a*n,onClick:function(){return t(a+1)}},o().createElement(T.default,null))))},V=function(e){var t=e.setSelectedPatchSet,a=e.selectedSets,n=e.systems,r=(0,b.I0)(),i=(0,y.default)(),c=(0,l.useState)(!0),u=(0,s.Z)(c,2),m=u[0],p=u[1],f=(0,b.v9)((function(e){return e.PatchSetsStore.rows})),d=(0,b.v9)((function(e){return e.PatchSetsStore.queryParams})),g=(0,b.v9)((function(e){return e.PatchSetsStore.status})),h=(0,b.v9)((function(e){return e.PatchSetsStore.metadata}));(0,l.useEffect)((function(){return function(){r((0,U.Im)())}}),[]);var v=(d||{}).search,E="string"==typeof v&&""!==v?v:Boolean(v);(0,l.useEffect)((function(){r((0,U.BY)(L(L({},d),{},{offset:d.offset+(d.page-1)*d.perPage})))}),[d.page,E]);var S=(0,l.useMemo)((function(){return g.isLoading?[o().createElement(x.SelectOption,{key:"loading"},o().createElement(_.Spinner,{size:"md"}))]:null==f?void 0:f.map((function(e){return o().createElement(x.SelectOption,{key:e.id,value:e.name})}))}),[f,g.isLoading]),Z=(0,l.useState)((function(){return I()((function(e){return t={search:e},void r((0,U.br)(t));var t}),700)})),O=(0,s.Z)(Z,1)[0];return o().createElement(F.c,{fieldId:"existing_patch_set",label:D.N.formatMessage(w.Z.textTemplateChoose),isRequired:!0},o().createElement(j.Select,{variant:C.SelectVariant.single,"aria-label":D.N.formatMessage(w.Z.labelsFiltersSearchTemplatePlaceholder),onSelect:function(e,a){p(!1),t(a);var r,s,l=f.filter((function(e){return e.name===a}));1===l.length&&i.change("existing_patch_set",{name:null===(r=l[0])||void 0===r?void 0:r.name,systems:n,id:null===(s=l[0])||void 0===s?void 0:s.id})},placeholderText:D.N.formatMessage(w.Z.labelsFiltersSearchTemplatePlaceholder),inlineFilterPlaceholderText:D.N.formatMessage(w.Z.labelsFiltersSearchTemplatePlaceholder),selections:a,onToggle:function(){p(!m)},isOpen:m,isDisabled:!1,onFilter:function(e,t){O(t)},hasInlineFilter:!0,className:"patch-existing-sets",footer:o().createElement(q,{changePage:function(e){r((0,U.br)(L(L({},d),{},{page:e})))},page:d.page,perPage:d.perPage,totalItems:h.total_items})},S))};q.propTypes={changePage:c().func,page:c().number,perPage:c().number,totalItems:c().number},V.propTypes={setSelectedPatchSet:c().func,selectedSets:c().array,systems:c().array};const z=V;var W=a(49287),K=a(18038),G=a(64124),H=a(5391);const Q=function(e){if(e&&"string"==typeof e&&null===e.match(/^(\d{4})-(0[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/))return D.N.formatMessage(w.Z.labelsErrorInvalidDate);var t=new Date(e),a=t.getTime(),n=new Date(1990,0,1);return"number"!=typeof a||Number.isNaN(a)?D.N.formatMessage(w.Z.labelsErrorInvalidDate):t<n?D.N.formatMessage(w.Z.labelsErrorDateLimit):void 0};var Y=[{key:"display_name",title:"Name",props:{width:50}},{title:"OS",key:"os",props:{width:25}},{key:"baseline_name",title:"Patch template",props:{width:25}}],J=[{name:"configurationStep",component:"configurationStep"},{name:"existing_patch_set",component:p.Z.TEXT_FIELD,hidden:!0}],$=[{name:"name",component:"nameField",validate:[{type:G.Z.REQUIRED}]}],X=[{name:"description",component:"descriptionField"}],ee=[{name:"toDate",component:"toDateField",validate:[{type:G.Z.REQUIRED},{type:"validate-date"}]}],te=function(e){var t="";switch(e){case"assign":t=D.N.formatMessage(w.Z.templateTitleAssignSystem);break;case"edit":t=D.N.formatMessage(w.Z.templateEdit);break;default:t=D.N.formatMessage(w.Z.templateTitle)}return t},ae=function(e){return{fields:[{component:p.Z.WIZARD,name:"patch-set-wizard",isDynamic:!0,inModal:!0,showTitles:!0,title:te(e),description:D.N.formatMessage(w.Z.templateDescription),fields:[{name:"patch-set-config",title:D.N.formatMessage("edit"===e?w.Z.templateEdit:w.Z.templateNew),fields:J,nextStep:"systems"},{name:"systems",title:D.N.formatMessage(w.Z.templateSelectSystems),fields:[{name:"systems",component:"reviewSystems"}],nextStep:"review"},{name:"review",title:D.N.formatMessage(w.Z.templateReview),fields:[{name:"review",component:"reviewPatchSet"}]}]}]}},ne={"validate-systems":function(){return function(e){var t=(0,H.LI)(e);return void 0===t||t.length>0?void 0:D.N.formatMessage(w.Z.templateNoSystemSelected)}},"validate-date":function(){return Q}},re=function(e){var t=e.isLoading,a=(0,y.default)().renderForm;return t?o().createElement(_.Spinner,{size:"md"}):o().createElement(W.r,{hasGutter:!0},o().createElement(K.P,{lg:12,md:12},a($)),o().createElement(K.P,{lg:12,md:12},a(X)),o().createElement(K.P,{lg:6,md:6},a(ee)))};re.propTypes={isLoading:c().bool};const se=re;var le=function(e){var t=e.systemsIDs,a=e.patchSetID,n=(0,y.default)(),r=!a&&0!==(null==t?void 0:t.length)||!1,i=(0,l.useState)(!1),c=(0,s.Z)(i,2),u=c[0],m=c[1],p=(0,l.useState)(!0),f=(0,s.Z)(p,2),d=f[0],g=f[1],h=(0,l.useState)([]),v=(0,s.Z)(h,2),N=v[0],I=v[1],M=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU),T=M.patchSet,j=M.status,x=function(){g(!d),m(!u)};return(0,l.useEffect)((function(){if(a){var e=T.name,t=T.description,r=T.config.to_time;n.change("name",e),n.change("description",t),n.change("toDate",(0,H.MC)(r))}}),[T]),o().createElement(Z.K,{hasGutter:!0},r&&o().createElement(S.D,{style:{marginTop:"-15px"}},o().createElement(E.xv,{component:E.qO.p},D.N.formatMessage(w.Z.textTemplateSelectedSystems,{systemsCount:t.length,b:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return o().createElement("b",null,t)}}))),o().createElement(O.v,null,o().createElement(Z.K,{hasGutter:!0},r&&o().createElement(o().Fragment,null,o().createElement(O.v,null,o().createElement(P.Y,{isChecked:u,name:"radio",onChange:x,label:D.N.formatMessage(w.Z.textTemplateAddToExisting),id:"existing-template"})),o().createElement(O.v,null,u?o().createElement(z,{setSelectedPatchSet:I,selectedSets:N,systems:t}):null),o().createElement(O.v,null,o().createElement(P.Y,{isChecked:d,name:"radio",onChange:x,label:D.N.formatMessage(w.Z.textTemplateCreateNew),id:"new-template"})))||null,o().createElement(O.v,null,d?o().createElement(se,{isLoading:a&&j.isLoading}):null))))};le.propTypes={systemsIDs:c().array,patchSetID:c().string};const oe=le;var ie=a(12282),ce=a(41693);const ue=function(e){var t,a=(0,ce.Z)(e).input,n=null===(t=(0,y.default)().getState())||void 0===t?void 0:t.values,r=(0,l.useState)(null==n?void 0:n.name),i=(0,s.Z)(r,2),c=i[0],u=i[1];return(0,l.useEffect)((function(){u(n.name)}),[n.name]),o().createElement(F.c,{fieldId:"name",label:D.N.formatMessage(w.Z.labelsColumnsName),isRequired:!0},o().createElement(ie.TextInput,{type:"text",isRequired:!0,value:c,onChange:function(e){a.onChange(e),u(e)},"aria-label":"name",autoFocus:!0}))};var me=a(2679);const pe=function(e){var t,a=(0,ce.Z)(e).input,n=null===(t=(0,y.default)().getState())||void 0===t?void 0:t.values,r=(0,l.useState)(null==n?void 0:n.toDate),i=(0,s.Z)(r,2),c=i[0],u=i[1];return(0,l.useEffect)((function(){u(n.toDate)}),[n.toDate]),o().createElement(F.c,{fieldId:"toDate",label:D.N.formatMessage(w.Z.templateDateField),isRequired:!0},o().createElement(k.k,null,o().createElement(A.B,{lg:2,md:2},D.N.formatMessage(w.Z.templateDateUpto)),o().createElement(A.B,{lg:10,md:10},o().createElement(me.Mt,{value:c,onChange:function(e){a.onChange(e),u(e)},popoverProps:{position:"right"},"aria-label":"toDate",validators:[Q],invalidFormatText:D.N.formatMessage(w.Z.labelsErrorInvalidDate)}))))},fe=function(e){var t,a=(0,ce.Z)(e).input,n=null===(t=(0,y.default)().getState())||void 0===t?void 0:t.values,r=(0,l.useState)(null==n?void 0:n.description),i=(0,s.Z)(r,2),c=i[0],u=i[1];return(0,l.useEffect)((function(){u(n.description)}),[n.description]),o().createElement(F.c,{fieldId:"description",label:D.N.formatMessage(w.Z.labelsDescription)},o().createElement(ie.TextInput,{type:"text",isRequired:!0,value:c,onChange:function(e){a.onChange(e),u(e)},"aria-label":"description"}))};var de=a(93433),ge=a(45987),he=a(90747),ve=a(83905),be=a(57668),ye=a(91607),Ee=a(38776),Se=a(75585),Ze=a(23188),Oe=a(11220),Pe=a(13784),De=["systemsIDs"];function we(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ne(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?we(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):we(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Ie=function(e){var t=e.systemsIDs,a=void 0===t?[]:t,n=(0,ge.Z)(e,De),r=(0,ce.Z)(n).input,i=(0,y.default)().getState().values,c=(0,H.Qh)(a,null==i?void 0:i.systems),u=(0,l.useState)(!0),m=(0,s.Z)(u,2),p=m[0],f=m[1],d=(0,l.useState)([]),g=(0,s.Z)(d,2),h=g[0],v=g[1],P=(0,l.useState)([]),N=(0,s.Z)(P,2),I=N[0],M=N[1],T=(0,l.useState)(c),j=(0,s.Z)(T,2),x=j[0],C=j[1],F=(0,l.useState)({limit:20,offset:0,total_items:0}),_=(0,s.Z)(F,2),k=_[0],A=_[1],R=(0,l.useState)({page:1,perPage:20,filter:{stale:[!0,!1]}}),U=(0,s.Z)(R,2),B=U[0],L=U[1],q=(0,b.v9)((function(e){return e.SpecificPatchSetReducer}),b.wU).assignedSystems;(0,l.useEffect)((function(){(0,Oe.lc)(Ne(Ne({},B),{},{filter:Ne(Ne({},B.filter),{},{id:a.length>0?"in:".concat(a.join(",")):void 0})})).then((function(e){M((0,be.ub)(e.data,Ne(Ne({},(0,H.Qh)([].concat((0,de.Z)(q),(0,de.Z)(a)))),x))),A(e.meta),v(e.data),f(!1)}))}),[B.filter,B]),(0,l.useEffect)((function(){r.onChange(x),M((0,be.ub)(h,x))}),[x]),(0,l.useEffect)((function(){C(Ne(Ne({},x),(0,H.Qh)(q)))}),[q]);var V=function(e){f(!0),L((function(t){return Ne(Ne(Ne({},t),e),{},{filter:Ne(Ne({},t.filter),e.filter)})}))},z=(0,ye._f)(Y,V,1),W=o().useMemo((function(){return(0,H.hO)(Y,k.sort,1)}),[k.sort]),K=(0,ye.SL)(k.limit,V),G=(0,ye._T)(V),Q=(0,ye.ry)(I,x,(function(){return(0,Oe.lc)(Ne(Ne({},B),{},{filter:Ne(Ne({},B.filter),a.length>0&&{id:"in:".concat(a.join(","))}),limit:-1}))}),(function(e){var t=e.reduce((function(e,t){return e[t.id]=!!t.selected||void 0,e}),{});C(Ne(Ne({},x),t))}));return o().createElement(Z.K,{hasGutter:!0},o().createElement(O.v,null,o().createElement(S.D,{style:{marginTop:"-15px"}},o().createElement(E.xv,{component:E.qO.p},D.N.formatMessage(w.Z.textTemplateReviewSystems)))),o().createElement(O.v,null,o().createElement(Ee.Z,{columns:Y,compact:!0,onSetPage:K,onPerPageSelect:G,onSort:z,selectedRows:x,onSelect:Q,sortBy:W,apply:V,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:I,metadata:k,status:{isLoading:p},queryParams:B},filterConfig:{items:[(0,he.Z)(V,B.search,D.N.formatMessage(w.Z.labelsFiltersSystemsSearchTitle),D.N.formatMessage(w.Z.labelsFiltersSearch)),(0,Se.Z)(V,B.filter),(0,Ze.Z)(V,B.filter),(0,ve.Z)(B.filter,V)]},searchChipLabel:D.N.formatMessage(w.Z.labelsFiltersSystemsSearchTitle),defaultFilters:Pe.hb})))};Ie.propTypes={systemsIDs:c().array};const Me=Ie;var Te=a(19017),je=a(53325),xe=function(e,t){return o().createElement(l.Fragment,null,o().createElement(je.Ts,{component:je.v$.dt},D.N.formatMessage(w.Z[e]),":"),o().createElement(je.Ts,{component:je.v$.dd},t))};const Ce=function(){var e=(0,y.default)().getState().values,t=e.existing_patch_set||e,a=t.name,n=t.description,r=t.toDate,s=e.systems;return o().createElement(Z.K,{hasGutter:!0},o().createElement(O.v,null,o().createElement(S.D,{style:{marginTop:"-15px"}},o().createElement(E.xv,{component:E.qO.p},D.N.formatMessage(w.Z.textPatchTemplateReview,{b:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return o().createElement("b",null,t)}})))),o().createElement(O.v,null,o().createElement(S.D,null,o().createElement(Te.Gn,{component:Te.F_.dl},xe("labelsColumnsName",a),n&&xe("labelsDescription",n),r&&xe("labelsDate",r),xe("labelsSelectedSystems",s&&Object.values(s).filter((function(e){return e})).length)))))};var Fe=a(34348),_e=a(219),ke=a(86728),Ae=a(74183),Re=a(94228),Ue=a(80858),Be=a(35451),Le=a(84564),qe=a(18802),Ve=a(83215),ze=function(e){var t=e.onClose,a=e.state,n=a.requestPending,r=a.failed,s=a.error,l=(0,b.I0)();return r&&l((0,Ve.wN)({title:"There was an error while processing your request",description:s.detail,variant:"danger"})),o().createElement(_e.ub,{variant:_e.IQ.large,"data-component-ouia-id":"patch-set-progress"},o().createElement(ke.k,{color:r?"var(--pf-global--danger-color--100)":n?void 0:"var(--pf-global--success-color--100)",icon:r?Le.default:n?qe.ZP:Be.default}),o().createElement(Fe.Title,{headingLevel:"h1",size:"lg"},r?D.N.formatMessage(w.Z.textErrorSomethingWrong):n?D.N.formatMessage(w.Z.textConfigurationInProgress):D.N.formatMessage(w.Z.textPatchTemplateSuccessfuly)),o().createElement(Ae.B,null,o().createElement(W.r,{hasGutter:!0},n&&o().createElement(o().Fragment,null,o().createElement(K.P,null,o().createElement(Re.p,null,o().createElement(Ue.u,{variant:"indeterminate"},D.N.formatMessage(w.Z.textPatchTemplatePending)))),o().createElement(K.P,null,o().createElement(R.Button,{variant:"link",isInline:!0,onClick:t},D.N.formatMessage(w.Z.labelsCancel))," ")),!n&&!r&&o().createElement(K.P,null,o().createElement(R.Button,{variant:"primary",onClick:t},D.N.formatMessage(w.Z.textReturnToApp))),!n&&r&&o().createElement(o().Fragment,null,o().createElement(K.P,null,o().createElement(Re.p,null,o().createElement(Ue.u,{variant:"indeterminate"},D.N.formatMessage(w.Z.templateError,{a:function(e){return o().createElement("a",{href:"https://www.redhat.com/en/services/support"},e)}})))),o().createElement(K.P,null,o().createElement(R.Button,{variant:"primary",onClick:t},D.N.formatMessage(w.Z.textReturnToApp)))))))};ze.propTypes={onClose:c().func,state:c().object};const We=ze;function Ke(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function Ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Ke(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Ke(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var He=function(e){var t,a=e.systemsIDs,i=e.setBaselineState,c=e.patchSetID,y=a?"assign":c?"edit":"create",E=(0,l.useState)({submitted:!1,formValues:{},requestPending:!0,failed:!1,shouldRefresh:!1}),S=(0,s.Z)(E,2),Z=S[0],O=S[1],P=(0,b.I0)();(0,l.useEffect)((function(){return c&&(P((0,U.gK)(c)),P((0,U.JJ)(c,{limit:-1}))),function(){return P((0,U.r8)())}}),[]);var N=(0,ye.np)(Z,O,c),I=function(){var e=!Z.failed&&Z.submitted;i({isPatchSetWizardOpen:!1,systemsIDs:[],patchSetID:void 0,shouldRefresh:e}),O({formValues:{},submitted:!1})},M={nameField:{component:ue},descriptionField:{component:fe},toDateField:{component:pe},configurationStep:{component:oe,systemsIDs:a||[],patchSetID:c},reviewSystems:{component:Me,systemsIDs:a||[]},reviewPatchSet:{component:Ce,systemsIDs:a||[]}};return o().createElement(l.Fragment,null,!Z.submitted&&o().createElement(u.Z,{schema:ae(y),subscription:{values:!0},FormTemplate:function(e){return o().createElement(m.ZP,(0,r.Z)({},e,{showFormControls:!1}))},componentMapper:Ge((t={},(0,n.Z)(t,p.Z.WIZARD,{component:f.Z,className:"patch-set","data-ouia-component-id":"patch-set-wizard"}),(0,n.Z)(t,p.Z.TEXT_FIELD,d.Z),(0,n.Z)(t,p.Z.DATE_PICKER,g.Z),t),M),validatorMapper:ne,onSubmit:N,onCancel:I})||o().createElement(h.Modal,{isOpen:!0,variant:"large",showClose:!1,className:"patch-set",hasNoBodyWrapper:!0,"aria-describedby":"patch-set-description","aria-labelledby":"patch-set-modal-title"},o().createElement(v.e,{className:"patch-set",title:te(y),description:D.N.formatMessage(w.Z.templateDescription),steps:[{name:"progress",component:o().createElement(We,{onClose:I,state:Z}),isFinishedStep:!0}],onClose:I})))};He.propTypes={setBaselineState:c().func,systemsIDs:c().array,patchSetID:c().string};const Qe=(0,l.memo)(He,(function(e,t){return JSON.stringify(e)===JSON.stringify(t)}))},79875:(e,t,a)=>{"use strict";a.d(t,{Z:()=>l});var n=a(29439),r=a(43297),s=a(5391);const l=function(e){var t=(0,r.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),a=(0,n.Z)(t,2),l=a[0],o=a[1];return{patchSetState:l,setPatchSetState:o,openPatchSetAssignWizard:function(t){o({isPatchSetWizardOpen:!0,systemsIDs:"string"==typeof t&&""!==t?[t]:(0,s.LI)(e),shouldRefresh:!1})},openUnassignSystemsModal:function(e){o({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openPatchSetEditModal:function(e){o({isPatchSetWizardOpen:!0,patchSetID:e})}}}},45467:()=>{}}]);
//# sourceMappingURL=../sourcemaps/6327.f9dd38699db0a3c69bbecebe81b74be6.js.map