(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[479],{83905:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(87462),r=n(29439),s=n(43297),o=n.n(s),i=n(13784),l=n(83237),c=n(80887),u=n(77221),m=n(82553),p=n(32132),d=n(30893);const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=o().useState(!1),s=(0,r.Z)(n,2),f=s[0],h=s[1],v=o().useState(10),g=(0,r.Z)(v,2),y=g[0],b=g[1],E=i.nW.slice().reverse(),S=e.os,O="string"==typeof S&&S.split(",")||[],Z=function(e,n){if(S&&!S.includes(n))t({filter:{os:"".concat(O.join(","),",").concat(n)}});else if(S&&S.includes(n)){var a=O.filter((function(e){return e!==n}));t({filter:{os:a.length>0&&"".concat(a.join(","))||void 0}})}else t({filter:{os:""!==n&&n||void 0}})},P=function(e){h(e)},w=function(){b(E.length)};return{type:l.Y.custom,label:p.N.formatMessage(d.Z.labelsFiltersOsVersion),value:"custom",filterValues:{children:o().createElement(c.Select,(0,a.Z)({variant:m.SelectVariant.checkbox,typeAheadAriaLabel:p.N.formatMessage(d.Z.labelsFiltersOsVersionPlaceholder),onToggle:P,onSelect:Z,selections:O,isOpen:f,"aria-labelledby":"patch-os-version-filter",placeholderText:p.N.formatMessage(d.Z.labelsFiltersOsVersionPlaceholder)},y<E.length&&{loadingVariant:{text:"View more",onClick:w}},{style:{maxHeight:"400px",overflow:"auto"}}),E.slice(0,y).map((function(e,t){return o().createElement(u.SelectOption,{key:t,value:e.value})})))}}}},75585:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(83237),r=n(43297),s=n.n(r),o=n(13784),i=n(32132),l=n(30893);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.stale,r=s().useMemo((function(){return o.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),c=n&&(Array.isArray(n)&&n.map((function(e){return e.toString()}))||[n.toString()]),u=function(t){e({filter:{stale:t}})};return{label:i.N.formatMessage(l.Z.labelsFiltersStale),type:a.Y.checkbox,filterValues:{onChange:function(e,t){u(t)},items:r,value:c,placeholder:i.N.formatMessage(l.Z.labelsFiltersStalePlaceholder)}}}},23188:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(83237),r=n(13784),s=n(32132),o=n(30893);const i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.packages_updatable,i=function(t){e({filter:{packages_updatable:t}})};return{label:s.N.formatMessage(o.Z.labelsFiltersUpdatable),type:a.Y.radio,filterValues:{onChange:function(e,t){i(t)},items:r.Tl,value:n,placeholder:s.N.formatMessage(o.Z.labelsFiltersUpdatablePlaceholder)}}}},49642:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var a=n(80123),r=n(39173),s=n(45697),o=n.n(s),i=n(43297),l=n.n(i),c=n(85991),u=n(49489),m=n(334),p=function(e){var t=e.items,n=e.headerOUIA;return l().createElement(c.a,null,t.filter(Boolean).map((function(e){return l().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&l().createElement(m.Link,{to:e.to,"data-ouia-component-type":"".concat(n,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:o().arrayOf(o().shape({isActive:o().bool,to:o().string,title:o().string})),headerOUIA:o().string};const d=p;var f=n(82819),h=n(98378),v=n(60076),g=function(e){var t=e.history,n=e.headerOUIA;return l().createElement(h.mQ,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},l().createElement(f.O,{eventKey:v.H.advisories.to,title:v.H.advisories.title,"data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-").concat(v.H.advisories.title)}),l().createElement(f.O,{eventKey:v.H.systems.to,title:v.H.systems.title,"data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-").concat(v.H.systems.title)}))};g.propTypes={history:o().object,headerOUIA:o().string};const y=(0,m.withRouter)(g);var b=function(e){var t=e.title,n=e.showTabs,s=e.breadcrumbs,o=e.children,i=e.headerOUIA;return l().createElement(l().Fragment,null,l().createElement(a.Z,{"data-ouia-component-type":"".concat(i,"-page-header")},s&&l().createElement(d,{items:s,headerOUIA:i}),l().createElement(r.Z,{title:t}),o),n&&l().createElement(y,{headerOUIA:i}))};b.propTypes={title:o().string,showTabs:o().bool,breadcrumbs:o().array,children:o().any,headerOUIA:o().string};const E=b},32166:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Ye});var a=n(4942),r=n(87462),s=n(29439),o=n(43297),i=n.n(o),l=n(45697),c=n.n(l),u=n(93025),m=n(67850),p=n(96354),d=n(26854),f=n(11947),h=n(74777),v=n(78826),g=n(45787),y=n(28216),b=n(48880),E=n(63540),S=n(20018),O=n(81159),Z=n(34023),P=n(9568),w=n(23279),D=n.n(w),I=n(5866),T=n(95511),j=n(80887),C=n(77221),F=n(82553),_=n(23811),k=n(67463),N=n(36001),x=n(42057),M=n(6202),R=n(9557);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t=e.changePage,n=e.page,a=e.perPage,r=e.totalItems;return i().createElement(N.k,{justifyContent:{default:"justifyContentSpaceBetween"}},i().createElement(x.B,null,i().createElement(M.Button,{variant:"plain","aria-label":"prev",isDisabled:1===n,onClick:function(){return t(n-1)}},i().createElement(I.default,null))),i().createElement(x.B,null,i().createElement(M.Button,{variant:"plain","aria-label":"next",isDisabled:r<n*a,onClick:function(){return t(n+1)}},i().createElement(T.default,null))))},L=function(e){var t=e.setSelectedPatchSet,n=e.selectedSets,a=e.systems,r=(0,y.I0)(),l=(0,b.default)(),c=(0,o.useState)(!0),u=(0,s.Z)(c,2),m=u[0],p=u[1],d=(0,y.v9)((function(e){return e.PatchSetsStore.rows})),f=(0,y.v9)((function(e){return e.PatchSetsStore.queryParams})),h=(0,y.v9)((function(e){return e.PatchSetsStore.status})),v=(0,y.v9)((function(e){return e.PatchSetsStore.metadata}));(0,o.useEffect)((function(){return function(){r((0,R.Im)())}}),[]),(0,o.useEffect)((function(){r((0,R.BY)(B(B({},f),{},{offset:f.offset+(f.page-1)*f.perPage})))}),[f.page,f.search]);var g=(0,o.useMemo)((function(){return h.isLoading?[i().createElement(C.SelectOption,{key:"loading"},i().createElement(k.Spinner,{size:"md"}))]:null==d?void 0:d.map((function(e){return i().createElement(C.SelectOption,{key:e.id,value:e.name})}))}),[d,h.isLoading]),E=(0,o.useState)((function(){return D()((function(e){return t={search:e},void r((0,R.br)(t));var t}),700)})),S=(0,s.Z)(E,1)[0];return i().createElement(_.c,{fieldId:"existing_patch_set",label:"Choose a Patch set",isRequired:!0},i().createElement(j.Select,{variant:F.SelectVariant.single,"aria-label":"Filter by patch set",onSelect:function(e,n){p(!1),t(n);var r,s,o=d.filter((function(e){return e.name===n}));1===o.length&&l.change("existing_patch_set",{name:null===(r=o[0])||void 0===r?void 0:r.name,systems:a,id:null===(s=o[0])||void 0===s?void 0:s.id})},placeholderText:"Filter by patch set",inlineFilterPlaceholderText:"Filter by patch set",selections:n,onToggle:function(){p(!m)},isOpen:m,isDisabled:!1,onFilter:function(e,t){S(t)},hasInlineFilter:!0,className:"patch-existing-sets",footer:i().createElement(U,{changePage:function(e){r((0,R.br)(B(B({},f),{},{page:e})))},page:f.page,perPage:f.perPage,totalItems:v.total_items})},g))};U.propTypes={changePage:c().func,page:c().number,perPage:c().number,totalItems:c().number},L.propTypes={setSelectedPatchSet:c().func,selectedSets:c().array,systems:c().array};const q=L;var V=n(49287),K=n(18038),Y=n(64124),$=n(32132),H=n(30893),G=n(57358),Q=[{key:"display_name",title:"Name",props:{width:50}},{title:"OS",key:"os",props:{width:25}},{key:"baseline_name",title:"Patch set",props:{width:25}}],z=[{name:"configuration-step",component:"configuration-step"},{name:"existing_patch_set",component:p.Z.TEXT_FIELD,hidden:!0}],J=[{name:"name",component:"nameField",validate:[{type:Y.Z.REQUIRED}]}],W=[{name:"description",component:"descriptionField"}],X=[{name:"toDate",component:"toDateField",validate:[{type:Y.Z.REQUIRED},{type:Y.Z.PATTERN,pattern:/^(\d{4})-(\d{2})-(\d{2})$/}]}],ee=function(e){return{fields:[{component:p.Z.WIZARD,name:"patch-set-wizard",isDynamic:!0,inModal:!0,showTitles:!0,title:$.N.formatMessage(H.Z.patchSetTitle),description:$.N.formatMessage(H.Z.patchSetDescription),fields:[{name:"patch-set-config",title:$.N.formatMessage(e&&H.Z.patchSetEditSet||H.Z.patchSetNewSet),fields:z,nextStep:"systems"},{name:"systems",title:$.N.formatMessage(H.Z.patchSetSelectSystems),fields:[{name:"systems",component:"review-systems",validate:[{type:"validate-systems"}]}],nextStep:"review"},{name:"review",title:$.N.formatMessage(H.Z.patchSetReviewSet),fields:[{name:"review",component:"review-patch-set"}]}]}]}},te={"validate-systems":function(){return function(e){var t=(0,G.LI)(e);return void 0===t||t.length>0?void 0:$.N.formatMessage(H.Z.patchSetNoSystemSelected)}}},ne=function(e){var t=e.isLoading,n=(0,b.default)().renderForm;return t?i().createElement(k.Spinner,{size:"md"}):i().createElement(V.r,{hasGutter:!0},i().createElement(K.P,{lg:12,md:12},n(J)),i().createElement(K.P,{lg:12,md:12},n(W)),i().createElement(K.P,{lg:6,md:6},n(X)))};ne.propTypes={isLoading:c().bool};const ae=ne;var re=function(e){var t=e.systemsIDs,n=e.patchSetID,a=(0,b.default)(),r=!n&&0!==(null==t?void 0:t.length)||!1,l=(0,o.useState)(!1),c=(0,s.Z)(l,2),u=c[0],m=c[1],p=(0,o.useState)(!0),d=(0,s.Z)(p,2),f=d[0],h=d[1],v=(0,o.useState)([]),g=(0,s.Z)(v,2),w=g[0],D=g[1],I=(0,y.v9)((function(e){return e.SpecificPatchSetReducer}),y.wU),T=I.patchSet,j=I.status,C=function(){h(!f),m(!u)};return(0,o.useEffect)((function(){if(n){var e=T.name,t=T.description,r=T.config.to_time;a.change("name",e),a.change("description",t),a.change("toDate",(0,G.MC)(r))}}),[T]),i().createElement(O.K,{hasGutter:!0},r&&i().createElement(S.D,{style:{marginTop:"-15px"}},i().createElement(E.xv,{component:E.qO.p},"You selected ",i().createElement("b",null,t.length," systems"))),i().createElement(Z.v,null,i().createElement(O.K,{hasGutter:!0},r&&i().createElement(i().Fragment,null,i().createElement(Z.v,null,i().createElement(P.Y,{isChecked:u,name:"radio",onChange:C,label:"Add to existing patch set",id:"existing-set",value:""})),i().createElement(Z.v,null,u?i().createElement(q,{setSelectedPatchSet:D,selectedSets:w,systems:t}):null),i().createElement(Z.v,null,i().createElement(P.Y,{isChecked:f,name:"radio",onChange:C,label:"Create new patch set",id:"new-set",value:""})))||null,i().createElement(Z.v,null,f?i().createElement(ae,{isLoading:n&&j.isLoading}):null))))};re.propTypes={systemsIDs:c().array,patchSetID:c().string};const se=re;var oe=n(12282),ie=n(41693);const le=function(e){var t,n=(0,ie.Z)(e).input,a=null===(t=(0,b.default)().getState())||void 0===t?void 0:t.values,r=(0,o.useState)(null==a?void 0:a.name),l=(0,s.Z)(r,2),c=l[0],u=l[1];return(0,o.useEffect)((function(){u(a.name)}),[a.name]),i().createElement(_.c,{fieldId:"name",label:"Name",isRequired:!0},i().createElement(oe.TextInput,{type:"text",isRequired:!0,value:c,onChange:function(e){n.onChange(e),u(e)},"aria-label":"name",autoFocus:!0}))};var ce=n(2679);const ue=function(e){var t,n=(0,ie.Z)(e).input,a=null===(t=(0,b.default)().getState())||void 0===t?void 0:t.values,r=(0,o.useState)(null==a?void 0:a.toDate),l=(0,s.Z)(r,2),c=l[0],u=l[1];return(0,o.useEffect)((function(){u(a.toDate)}),[a.toDate]),i().createElement(_.c,{fieldId:"toDate",label:"Patch set date",isRequired:!0},i().createElement(N.k,null,i().createElement(x.B,{lg:2,md:2},"Upto"),i().createElement(x.B,{lg:10,md:10},i().createElement(ce.Mt,{isRequired:!0,value:c,onChange:function(e){n.onChange(e),u(e)},popoverProps:{position:"right"},"aria-label":"toDate"}))))},me=function(e){var t,n=(0,ie.Z)(e).input,a=null===(t=(0,b.default)().getState())||void 0===t?void 0:t.values,r=(0,o.useState)(null==a?void 0:a.description),l=(0,s.Z)(r,2),c=l[0],u=l[1];return(0,o.useEffect)((function(){u(a.description)}),[a.description]),i().createElement(_.c,{fieldId:"description",label:"Description"},i().createElement(oe.TextInput,{type:"text",isRequired:!0,value:c,onChange:function(e){n.onChange(e),u(e)},"aria-label":"description"}))};var pe=n(93433),de=n(45987),fe=n(90747),he=n(83905),ve=n(57668),ge=n(91607),ye=n(38776),be=n(75585),Ee=n(23188),Se=n(11220),Oe=n(13784),Ze=["systemsIDs"];function Pe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function we(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var De=function(e){var t=e.systemsIDs,n=void 0===t?[]:t,a=(0,de.Z)(e,Ze),r=(0,ie.Z)(a).input,l=(0,b.default)().getState().values,c=(0,G.Qh)(n,null==l?void 0:l.systems),u=(0,o.useState)(!0),m=(0,s.Z)(u,2),p=m[0],d=m[1],f=(0,o.useState)([]),h=(0,s.Z)(f,2),v=h[0],g=h[1],P=(0,o.useState)([]),w=(0,s.Z)(P,2),D=w[0],I=w[1],T=(0,o.useState)(c),j=(0,s.Z)(T,2),C=j[0],F=j[1],_=(0,o.useState)({limit:20,offset:0,total_items:0}),k=(0,s.Z)(_,2),N=k[0],x=k[1],M=(0,o.useState)({page:1,perPage:20,filter:{stale:[!0,!1]}}),R=(0,s.Z)(M,2),A=R[0],B=R[1],U=(0,y.v9)((function(e){return e.SpecificPatchSetReducer}),y.wU).assignedSystems;(0,o.useEffect)((function(){(0,Se.lc)(we(we({},A),{},{filter:we(we({},A.filter),{},{id:n.length>0?"in:".concat(n.join(",")):void 0})})).then((function(e){I((0,ve.ub)(e.data,we(we({},(0,G.Qh)([].concat((0,pe.Z)(U),(0,pe.Z)(n)))),C))),x(e.meta),g(e.data),d(!1)}))}),[A.filter,A]),(0,o.useEffect)((function(){r.onChange(C),I((0,ve.ub)(v,C))}),[C]),(0,o.useEffect)((function(){F(we(we({},C),(0,G.Qh)(U)))}),[U]);var L=function(e){d(!0),B((function(t){return we(we(we({},t),e),{},{filter:we(we({},t.filter),e.filter)})}))},q=(0,ge._f)(Q,L,1),V=i().useMemo((function(){return(0,G.hO)(Q,N.sort,1)}),[N.sort]),K=(0,ge.SL)(N.limit,L),Y=(0,ge._T)(L),z=(0,ge.ry)(D,C,(function(){return(0,Se.lc)(we(we({},A),{},{filter:we(we({},A.filter),n.length>0&&{id:"in:".concat(n.join(","))}),limit:-1}))}),(function(e){var t=e.reduce((function(e,t){return e[t.id]=!!t.selected||void 0,e}),{});F(we(we({},C),t))}));return i().createElement(O.K,{hasGutter:!0},i().createElement(Z.v,null,i().createElement(S.D,{style:{marginTop:"-15px"}},i().createElement(E.xv,{component:E.qO.p},"You will be able to adjust your selection anytime. A system can have only one patch set, therefore if you assign a new Patch set to the system, it will be overwritten."))),i().createElement(Z.v,null,i().createElement(ye.Z,{columns:Q,compact:!0,onSetPage:K,onPerPageSelect:Y,onSort:q,selectedRows:C,onSelect:z,sortBy:V,apply:L,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:D,metadata:N,status:{isLoading:p},queryParams:A},filterConfig:{items:[(0,fe.Z)(L,A.search,$.N.formatMessage(H.Z.labelsFiltersSystemsSearchTitle),$.N.formatMessage(H.Z.labelsFiltersSearch)),(0,be.Z)(L,A.filter),(0,Ee.Z)(L,A.filter),(0,he.Z)(A.filter,L)]},searchChipLabel:$.N.formatMessage(H.Z.labelsFiltersSystemsSearchTitle),defaultFilters:Oe.hb})))};De.propTypes={systemsIDs:c().array};const Ie=De;var Te=n(19017),je=n(53325);const Ce=function(){var e=(0,b.default)().getState().values,t=e.existing_patch_set||e,n=t.name,a=t.description,r=t.toDate,s=e.systems;return i().createElement(O.K,{hasGutter:!0},i().createElement(Z.v,null,i().createElement(S.D,{style:{marginTop:"-15px"}},i().createElement(E.xv,{component:E.qO.p},"Review the information below and click ",i().createElement("b",null,"Submit")," to complete patch set creation"))),i().createElement(Z.v,null,i().createElement(S.D,null,i().createElement(Te.Gn,{component:Te.F_.dl},i().createElement(je.Ts,{component:je.v$.dt},"Name:"),i().createElement(je.Ts,{component:je.v$.dd},n),i().createElement(je.Ts,{component:je.v$.dt},"Description:"),i().createElement(je.Ts,{component:je.v$.dd},a),i().createElement(je.Ts,{component:je.v$.dt},"Date:"),i().createElement(je.Ts,{component:je.v$.dd},r),i().createElement(je.Ts,{component:je.v$.dt},"Selected systems:"),i().createElement(je.Ts,{component:je.v$.dd},s&&Object.values(s).filter((function(e){return e})).length)))))};var Fe=n(34348),_e=n(219),ke=n(86728),Ne=n(74183),xe=n(94228),Me=n(80858),Re=n(35451),Ae=n(84564),Be=n(18802),Ue=function(e){var t=e.onClose,n=e.state,a=n.requestPending,r=n.failed;return i().createElement(_e.ub,{variant:_e.IQ.large,"data-component-ouia-id":"patch-set-progress"},i().createElement(ke.k,{color:r?"var(--pf-global--danger-color--100)":a?void 0:"var(--pf-global--success-color--100)",icon:r?Ae.default:a?Be.ZP:Re.default}),i().createElement(Fe.Title,{headingLevel:"h1",size:"lg"},r?"Something went wrong":a?"Configuration in progress":"Patch set configuration successful"),i().createElement(Ne.B,null,i().createElement(V.r,{hasGutter:!0},a&&i().createElement(i().Fragment,null,i().createElement(K.P,null,i().createElement(xe.p,null,i().createElement(Me.u,{variant:"indeterminate"},"Please allow a few minutes to set up a patch set. You will receive a notification when finished"))),i().createElement(K.P,null,i().createElement(M.Button,{variant:"link",isInline:!0,onClick:t},"Cancel")," ")),!a&&!r&&i().createElement(K.P,null,i().createElement(M.Button,{variant:"primary",onClick:t},"Return to application")),!a&&r&&i().createElement(i().Fragment,null,i().createElement(K.P,null,i().createElement(xe.p,null,i().createElement(Me.u,{variant:"indeterminate"},"There was a problem processing the patch set. Please try again. If the problem persists, contact ",i().createElement("a",{href:"https://www.redhat.com/en/services/support"},"Red Hat support")))),i().createElement(K.P,null,i().createElement(M.Button,{variant:"primary",onClick:t},"Return to application"))))))};Ue.propTypes={onClose:c().func,state:c().object};const Le=Ue;function qe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ke=function(e){var t,n=e.systemsIDs,l=e.setBaselineState,c=e.patchSetID,b=(0,o.useState)({submitted:!1,formValues:{},requestPending:!0,failed:!1,shouldRefresh:!1}),E=(0,s.Z)(b,2),S=E[0],O=E[1],Z=(0,y.I0)();(0,o.useEffect)((function(){return c&&(Z((0,R.gK)(c)),Z((0,R.JJ)(c,{limit:-1}))),function(){return Z((0,R.r8)())}}),[]);var P=(0,ge.np)(S,O,c),w=function(){var e=!S.failed&&S.submitted;l({isOpen:!1,systemsIDs:[],patchSetID:void 0,shouldRefresh:e}),O({formValues:{},submitted:!1})},D={nameField:{component:le},descriptionField:{component:me},toDateField:{component:ue},"configuration-step":{component:se,systemsIDs:n||[],patchSetID:c},"review-systems":{component:Ie,systemsIDs:n||[]},"review-patch-set":{component:Ce,systemsIDs:n||[]}};return i().createElement(o.Fragment,null,!S.submitted&&i().createElement(u.Z,{schema:ee(c),subscription:{values:!0},FormTemplate:function(e){return i().createElement(m.ZP,(0,r.Z)({},e,{showFormControls:!1}))},componentMapper:Ve((t={},(0,a.Z)(t,p.Z.WIZARD,{component:d.Z,className:"patch-set","data-ouia-component-id":"patch-set-wizard"}),(0,a.Z)(t,p.Z.TEXT_FIELD,f.Z),(0,a.Z)(t,p.Z.DATE_PICKER,h.Z),t),D),validatorMapper:te,onSubmit:P,onCancel:w})||i().createElement(v.Modal,{isOpen:!0,variant:"large",showClose:!1,className:"patch-set",hasNoBodyWrapper:!0,"aria-describedby":"patch-set-description","aria-labelledby":"patch-set-modal-title"},i().createElement(g.e,{className:"patch-set",title:$.N.formatMessage(H.Z.patchSetTitle),description:$.N.formatMessage(H.Z.patchSetDescription),steps:[{name:"progress",component:i().createElement(Le,{onClose:w,state:S}),isFinishedStep:!0}],onClose:w})))};Ke.propTypes={setBaselineState:c().func,systemsIDs:c().array,patchSetID:c().string};const Ye=(0,o.memo)(Ke,(function(e,t){return JSON.stringify(e)===JSON.stringify(t)}))},70347:()=>{},58392:()=>{},10497:()=>{},93818:()=>{},94498:()=>{},54476:()=>{},71338:()=>{},74282:()=>{},25238:()=>{},91993:()=>{},99624:()=>{},36974:()=>{},40209:()=>{},72816:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/479.671e60b7ac4e93fe9cf9a313ff2c0eb5.js.map