(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[874],{83905:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(87462),r=n(29439),o=n(43297),s=n.n(o),i=n(13784),c=n(44612),l=n(80887),u=n(77221),m=n(82553),p=n(32132),d=n(30893);const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=s().useState(!1),o=(0,r.Z)(n,2),f=o[0],h=o[1],v=s().useState(10),g=(0,r.Z)(v,2),y=g[0],E=g[1],b=i.nW.slice().reverse(),S=e.os,O="string"==typeof S&&S.split(",")||[],w=function(e,n){if(S&&!S.includes(n))t({filter:{os:"".concat(O.join(","),",").concat(n)}});else if(S&&S.includes(n)){var a=O.filter((function(e){return e!==n}));t({filter:{os:a.length>0&&"".concat(a.join(","))||void 0}})}else t({filter:{os:""!==n&&n||void 0}})},Z=function(e){h(e)},P=function(){E(b.length)};return{type:c.Y.custom,label:p.N.formatMessage(d.Z.labelsFiltersOsVersion),value:"custom",filterValues:{children:s().createElement(l.Select,(0,a.Z)({variant:m.SelectVariant.checkbox,typeAheadAriaLabel:p.N.formatMessage(d.Z.labelsFiltersOsVersionPlaceholder),onToggle:Z,onSelect:w,selections:O,isOpen:f,"aria-labelledby":"patch-os-version-filter",placeholderText:p.N.formatMessage(d.Z.labelsFiltersOsVersionPlaceholder)},y<b.length&&{loadingVariant:{text:"View more",onClick:P}},{style:{maxHeight:"400px",overflow:"auto"}}),b.slice(0,y).map((function(e,t){return s().createElement(u.SelectOption,{key:t,value:e.value})})))}}}},49642:(e,t,n)=>{"use strict";n.d(t,{Z:()=>b});var a=n(48716),r=n(39173),o=n(45697),s=n.n(o),i=n(43297),c=n.n(i),l=n(85991),u=n(49489),m=n(334),p=function(e){var t=e.items,n=e.headerOUIA;return c().createElement(l.a,null,t.filter(Boolean).map((function(e){return c().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&c().createElement(m.Link,{to:e.to,"data-ouia-component-type":"".concat(n,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:s().arrayOf(s().shape({isActive:s().bool,to:s().string,title:s().string})),headerOUIA:s().string};const d=p;var f=n(82819),h=n(98378),v=n(60076),g=function(e){var t=e.history,n=e.headerOUIA;return c().createElement(h.mQ,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},c().createElement(f.O,{eventKey:v.H.advisories.to,title:v.H.advisories.title,"data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-").concat(v.H.advisories.title)}),c().createElement(f.O,{eventKey:v.H.systems.to,title:v.H.systems.title,"data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-").concat(v.H.systems.title)}))};g.propTypes={history:s().object,headerOUIA:s().string};const y=(0,m.withRouter)(g);var E=function(e){var t=e.title,n=e.showTabs,o=e.breadcrumbs,s=e.children,i=e.headerOUIA;return c().createElement(c().Fragment,null,c().createElement(a.Z,{"data-ouia-component-type":"".concat(i,"-page-header")},o&&c().createElement(d,{items:o,headerOUIA:i}),c().createElement(r.Z,{title:t}),s),n&&c().createElement(y,{headerOUIA:i}))};E.propTypes={title:s().string,showTabs:s().bool,breadcrumbs:s().array,children:s().any,headerOUIA:s().string};const b=E},32166:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Le});var a=n(4942),r=n(87462),o=n(29439),s=n(43297),i=n.n(s),c=n(45697),l=n.n(c),u=n(86758),m=n(67850),p=n(96354),d=n(26854),f=n(11947),h=n(74777),v=n(78826),g=n(45787),y=n(28216),E=n(48880),b=n(63540),S=n(20018),O=n(81159),w=n(34023),Z=n(9568),P=n(80887),D=n(77221),I=n(82553),j=n(23811),T=n(67463),_=n(9557);function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var k=function(e){var t=e.setSelectedPatchSet,n=e.selectedSets,a=e.systems,r=(0,y.I0)(),c=(0,E.default)(),l=(0,s.useState)(!0),u=(0,o.Z)(l,2),m=u[0],p=u[1],d=(0,y.v9)((function(e){return e.PatchSetsStore.rows})),f=(0,y.v9)((function(e){return e.PatchSetsStore.queryParams})),h=(0,y.v9)((function(e){return e.PatchSetsStore.status}));(0,s.useEffect)((function(){return r((0,_.BY)(N(N({},f),{},{limit:10}))),function(){return r((0,_.Im)())}}),[f.page]);var v=(0,s.useMemo)((function(){return h.isLoading?[i().createElement(D.SelectOption,{key:"loading"},i().createElement(T.Spinner,{size:"md"}))]:d.map((function(e){return i().createElement(D.SelectOption,{key:e.id,value:e.name})}))}),[d,h.isLoading]);return i().createElement(j.c,{fieldId:"existing_patch_set",label:"Choose a Patch set",isRequired:!0},i().createElement(P.Select,{variant:I.SelectVariant.single,"aria-label":"Select Input",onSelect:function(e,n){p(!1),t(n);var r,o,s=d.filter((function(e){return e.name===n}));1===s.length&&c.change("existing_patch_set",{name:null===(r=s[0])||void 0===r?void 0:r.name,systems:a,id:null===(o=s[0])||void 0===o?void 0:o.id})},placeholderText:"Select an option",selections:n,onToggle:function(){p(!m)},isOpen:m,isDisabled:!1,loadingVariant:{text:"View more",onClick:function(){r((0,_.br)(N(N({},f),{},{page:f.page+1})))}}},v))};k.propTypes={setSelectedPatchSet:l().func,selectedSets:l().array,systems:l().array};const F=k;var R=n(49287),x=n(18038),L=n(64124),A=n(32132),M=n(30893),U=[{key:"display_name",title:"Name",props:{width:40}},{title:"OS",key:"os",props:{width:60}}],q=[{name:"configuration-step",component:"configuration-step"},{name:"existing_patch_set",component:p.Z.TEXT_FIELD,hidden:!0}],B=[{name:"name",component:"nameField",validate:[{type:L.Z.REQUIRED}]}],V=[{name:"description",component:"descriptionField"}],G=[{name:"toDate",component:"toDateField",validate:[{type:L.Z.REQUIRED}]}],K=function(e){return{fields:[{component:p.Z.WIZARD,name:"patch-set-wizard",isDynamic:!0,inModal:!0,showTitles:!0,title:A.N.formatMessage(M.Z.patchSetTitle),description:A.N.formatMessage(M.Z.patchSetDescription),fields:[{name:"patch-set-config",title:A.N.formatMessage(e&&M.Z.patchSetEditSet||M.Z.patchSetNewSet),fields:q,nextStep:"systems"},{name:"systems",title:A.N.formatMessage(M.Z.patchSetSelectSystems),fields:[{name:"systems",component:"review-systems",validate:[{type:"validate-systems"}]}],nextStep:"review"},{name:"review",title:A.N.formatMessage(M.Z.patchSetReviewSet),fields:[{name:"review",component:"review-patch-set"}]}]}]}},Y={"validate-systems":function(){return function(e){return void 0===e||Object.keys(e).length>0?void 0:A.N.formatMessage(M.Z.patchSetNoSystemSelected)}}},H=function(e){var t=e.isLoading,n=(0,E.default)().renderForm;return t?i().createElement(T.Spinner,{size:"md"}):i().createElement(R.r,{hasGutter:!0},i().createElement(x.P,{lg:12,md:12},n(B)),i().createElement(x.P,{lg:12,md:12},n(V)),i().createElement(x.P,{lg:6,md:6},n(G)))};H.propTypes={isLoading:l().bool};const $=H;var Q=n(57358),z=function(e){var t=e.systemsIDs,n=e.patchSetID,a=(0,E.default)(),r=!n&&0!==(null==t?void 0:t.length)||!1,c=(0,s.useState)(!1),l=(0,o.Z)(c,2),u=l[0],m=l[1],p=(0,s.useState)(!0),d=(0,o.Z)(p,2),f=d[0],h=d[1],v=(0,s.useState)([]),g=(0,o.Z)(v,2),P=g[0],D=g[1],I=(0,y.v9)((function(e){return e.SpecificPatchSetReducer}),y.wU),j=I.patchSet,T=I.status,_=function(){h(!f),m(!u)};return(0,s.useEffect)((function(){if(n){var e=j.name,t=j.description,r=j.config.to_time;a.change("name",e),a.change("description",t),a.change("toDate",(0,Q.MC)(r))}}),[j]),i().createElement(O.K,{hasGutter:!0},r&&i().createElement(S.D,{style:{marginTop:"-15px"}},i().createElement(b.xv,{component:b.qO.p},"You selected ",i().createElement("b",null,t.length," systems"))),i().createElement(w.v,null,i().createElement(O.K,{hasGutter:!0},r&&i().createElement(i().Fragment,null,i().createElement(w.v,null,i().createElement(Z.Y,{isChecked:u,name:"radio",onChange:_,label:"Add to existing patch set",id:"existing-set",value:""})),i().createElement(w.v,null,u?i().createElement(F,{setSelectedPatchSet:D,selectedSets:P,systems:t}):null),i().createElement(w.v,null,i().createElement(Z.Y,{isChecked:f,name:"radio",onChange:_,label:"Create new patch set",id:"new-set",value:""})))||null,i().createElement(w.v,null,f?i().createElement($,{isLoading:n&&T.isLoading}):null))))};z.propTypes={systemsIDs:l().array,patchSetID:l().string};const J=z;var W=n(12282),X=n(41693);const ee=function(e){var t,n=(0,X.Z)(e).input,a=null===(t=(0,E.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.name),c=(0,o.Z)(r,2),l=c[0],u=c[1];return(0,s.useEffect)((function(){u(a.name)}),[a.name]),i().createElement(j.c,{fieldId:"name",label:"Name",isRequired:!0},i().createElement(W.TextInput,{type:"text",isRequired:!0,value:l,onChange:function(e){n.onChange(e),u(e)},"aria-label":"name",autoFocus:!0}))};var te=n(2679),ne=n(36001),ae=n(42057);const re=function(e){var t,n=(0,X.Z)(e).input,a=null===(t=(0,E.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.toDate),c=(0,o.Z)(r,2),l=c[0],u=c[1];return(0,s.useEffect)((function(){u(a.toDate)}),[a.toDate]),i().createElement(j.c,{fieldId:"toDate",label:"Patch set date",isRequired:!0},i().createElement(ne.k,null,i().createElement(ae.B,{lg:2,md:2},"Upto"),i().createElement(ae.B,{lg:10,md:10},i().createElement(te.Mt,{isRequired:!0,value:l,onChange:function(e){n.onChange(e),u(e)},"aria-label":"toDate"}))))},oe=function(e){var t,n=(0,X.Z)(e).input,a=null===(t=(0,E.default)().getState())||void 0===t?void 0:t.values,r=(0,s.useState)(null==a?void 0:a.description),c=(0,o.Z)(r,2),l=c[0],u=c[1];return(0,s.useEffect)((function(){u(a.description)}),[a.description]),i().createElement(j.c,{fieldId:"description",label:"Description"},i().createElement(W.TextInput,{type:"text",isRequired:!0,value:l,onChange:function(e){n.onChange(e),u(e)},"aria-label":"description"}))};var se=n(93433),ie=n(45987),ce=n(90747),le=n(83905),ue=n(57668),me=n(91607),pe=n(38776),de=n(11220),fe=["systemsIDs"];function he(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ve(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?he(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ge=function(e){var t=e.systemsIDs,n=void 0===t?[]:t,a=(0,ie.Z)(e,fe),r=(0,X.Z)(a).input,c=(0,s.useState)(!0),l=(0,o.Z)(c,2),u=l[0],m=l[1],p=(0,s.useState)([]),d=(0,o.Z)(p,2),f=d[0],h=d[1],v=(0,s.useState)([]),g=(0,o.Z)(v,2),E=g[0],Z=g[1],P=(0,s.useState)((0,Q.Qh)(n)),D=(0,o.Z)(P,2),I=D[0],j=D[1],T=(0,s.useState)({limit:20,offset:0,total_items:0}),_=(0,o.Z)(T,2),C=_[0],N=_[1],k=(0,s.useState)({page:1,perPage:20,filter:{}}),F=(0,o.Z)(k,2),R=F[0],x=F[1],L=(0,y.v9)((function(e){return e.SpecificPatchSetReducer}),y.wU).assignedSystems;(0,s.useEffect)((function(){(0,de.lc)(ve(ve({},R),{},{filter:ve(ve({},R.filter),{},{id:n.length>0?"in:".concat(n.join(",")):void 0})})).then((function(e){Z((0,ue.ub)(e.data,(0,Q.Qh)([].concat((0,se.Z)(L),(0,se.Z)(n))))),N(e.meta),h(e.data),m(!1)}))}),[R.filter,R]),(0,s.useEffect)((function(){r.onChange(I),Z((0,ue.ub)(f,I))}),[I]),(0,s.useEffect)((function(){j(ve(ve({},I),(0,Q.Qh)(L)))}),[L]);var q=function(e){m(!0),x(ve(ve({},R),e))},B=(0,me._f)(U,q,1),V=i().useMemo((function(){return(0,Q.hO)(U,C.sort,1)}),[C.sort]),G=(0,me.SL)(C.limit,q),K=(0,me._T)(q),Y=(0,me.ry)(E,I,(function(){return(0,de.lc)(ve(ve({},R),{},{filter:ve(ve({},R.filter),n.length>0&&{id:"in:".concat(n.join(","))}),limit:-1}))}),(function(e){var t=e.reduce((function(e,t){return e[t.id]=!!t.selected||void 0,e}),{});j(ve(ve({},I),t))}));return i().createElement(O.K,{hasGutter:!0},i().createElement(w.v,null,i().createElement(S.D,{style:{marginTop:"-15px"}},i().createElement(b.xv,{component:b.qO.p},"You will be able to adjust your selection anytime. A system can have only one patch set, therefore if you assign a new Patch set to the system, it will be overwritten."))),i().createElement(w.v,null,i().createElement(pe.Z,{columns:U,compact:!0,onSetPage:G,onPerPageSelect:K,onSort:B,selectedRows:I,onSelect:Y,sortBy:V,apply:q,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:E,metadata:C,status:{isLoading:u},queryParams:R},filterConfig:{items:[(0,ce.Z)(q,R.search,A.N.formatMessage(M.Z.labelsFiltersSystemsSearchTitle),A.N.formatMessage(M.Z.labelsFiltersSearch)),(0,le.Z)(R.filter,q)]},searchChipLabel:A.N.formatMessage(M.Z.labelsFiltersSystemsSearchTitle)})))};ge.propTypes={systemsIDs:l().array};const ye=ge;var Ee=n(19017),be=n(53325);const Se=function(){var e=(0,E.default)().getState().values,t=e.existing_patch_set||e,n=t.name,a=t.description,r=t.toDate,o=e.systems;return i().createElement(O.K,{hasGutter:!0},i().createElement(w.v,null,i().createElement(S.D,{style:{marginTop:"-15px"}},i().createElement(b.xv,{component:b.qO.p},"Review the information below and click ",i().createElement("b",null,"Finish")," to complete patch set creation"))),i().createElement(w.v,null,i().createElement(S.D,null,i().createElement(Ee.Gn,{component:Ee.F_.dl},i().createElement(be.Ts,{component:be.v$.dt},"Name:"),i().createElement(be.Ts,{component:be.v$.dd},n),i().createElement(be.Ts,{component:be.v$.dt},"Description:"),i().createElement(be.Ts,{component:be.v$.dd},a),i().createElement(be.Ts,{component:be.v$.dt},"Date:"),i().createElement(be.Ts,{component:be.v$.dd},r),i().createElement(be.Ts,{component:be.v$.dt},"Selected systems:"),i().createElement(be.Ts,{component:be.v$.dd},o&&Object.values(o).filter((function(e){return e})).length)))))};var Oe=n(34348),we=n(219),Ze=n(86728),Pe=n(74183),De=n(94228),Ie=n(80858),je=n(6202),Te=n(35451),_e=n(84564),Ce=n(18802),Ne=function(e){var t=e.onClose,n=e.state,a=n.requestPending,r=n.failed;return i().createElement(we.ub,{variant:we.IQ.large,"data-component-ouia-id":"patch-set-progress"},i().createElement(Ze.k,{color:r?"var(--pf-global--danger-color--100)":a?void 0:"var(--pf-global--success-color--100)",icon:r?_e.default:a?Ce.ZP:Te.default}),i().createElement(Oe.Title,{headingLevel:"h1",size:"lg"},r?"Something went wrong":a?"Configuration in progress":"Patch set configuration successful"),i().createElement(Pe.B,null,i().createElement(R.r,{hasGutter:!0},a&&i().createElement(i().Fragment,null,i().createElement(x.P,null,i().createElement(De.p,null,i().createElement(Ie.u,{variant:"indeterminate"},"Please allow a few minutes to set up a patch set. You will receive a notification when finished"))),i().createElement(x.P,null,i().createElement(je.Button,{variant:"link",isInline:!0,onClick:t},"Cancel")," ")),!a&&!r&&i().createElement(x.P,null,i().createElement(je.Button,{variant:"primary",onClick:t},"Return to application")),!a&&r&&i().createElement(i().Fragment,null,i().createElement(x.P,null,i().createElement(De.p,null,i().createElement(Ie.u,{variant:"indeterminate"},"There was a problem processing the patch set. Please try again. If the problem persists, contact ",i().createElement("a",{href:"https://www.redhat.com/en/services/support"},"Red Hat support")))),i().createElement(x.P,null,i().createElement(je.Button,{variant:"primary",onClick:t},"Return to application"))))))};Ne.propTypes={onClose:l().func,state:l().object};const ke=Ne;function Fe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fe(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=function(e){var t,n=e.systemsIDs,c=e.setBaselineState,l=e.patchSetID,E=(0,s.useState)({submitted:!1,formValues:{},requestPending:!0,failed:!1,shouldRefresh:!1}),b=(0,o.Z)(E,2),S=b[0],O=b[1],w=(0,y.I0)();(0,s.useEffect)((function(){return l&&(w((0,_.gK)(l)),w((0,_.JJ)(l,{limit:-1}))),function(){return w((0,_.r8)())}}),[]);var Z=(0,me.np)(S,O,l),P=function(){var e=!S.failed&&S.submitted;c({isOpen:!1,systemsIDs:[],patchSetID:void 0,shouldRefresh:e}),O({formValues:{},submitted:!1})},D={nameField:{component:ee},descriptionField:{component:oe},toDateField:{component:re},"configuration-step":{component:J,systemsIDs:n||[],patchSetID:l},"review-systems":{component:ye,systemsIDs:n||[]},"review-patch-set":{component:Se,systemsIDs:n||[]}};return i().createElement(s.Fragment,null,!S.submitted&&i().createElement(u.Z,{schema:K(l),subscription:{values:!0},FormTemplate:function(e){return i().createElement(m.ZP,(0,r.Z)({},e,{showFormControls:!1}))},componentMapper:Re((t={},(0,a.Z)(t,p.Z.WIZARD,{component:d.Z,className:"patch-set","data-ouia-component-id":"patch-set-wizard"}),(0,a.Z)(t,p.Z.TEXT_FIELD,f.Z),(0,a.Z)(t,p.Z.DATE_PICKER,h.Z),t),D),validatorMapper:Y,onSubmit:Z,onCancel:P})||i().createElement(v.Modal,{isOpen:!0,variant:"large",showClose:!1,className:"patch-set",hasNoBodyWrapper:!0,"aria-describedby":"patch-set-description","aria-labelledby":"patch-set-modal-title"},i().createElement(g.e,{className:"patch-set",title:A.N.formatMessage(M.Z.patchSetTitle),description:A.N.formatMessage(M.Z.patchSetDescription),steps:[{name:"progress",component:i().createElement(ke,{onClose:P,state:S}),isFinishedStep:!0}],onClose:P})))};xe.propTypes={setBaselineState:l().func,systemsIDs:l().array,patchSetID:l().string};const Le=(0,s.memo)(xe,(function(e,t){return JSON.stringify(e)===JSON.stringify(t)}))},5747:(e,t,n)=>{"use strict";n.d(t,{G:()=>u,Kq:()=>p,OC:()=>m});var a=n(4942),r=n(57668),o=n(48881),s=n(22789);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var l={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?c(c({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,r.Yk)(t.rows,t.selectedRows)}):t},m=function(e,t){return t.loaded?c(c({},t),{},{columns:e,rows:(0,r.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,a=arguments.length>1?arguments[1]:void 0,r=c({},n);switch(a.type){case"LOAD_ENTITIES_FULFILLED":return t(e,r);case"LOAD_ENTITIES_PENDING":return r.status={isLoading:!0,hasError:!1},r;case"LOAD_ENTITIES_REJECTED":return r.status={isLoading:!0,hasError:!0},r;case"SELECT_ENTITY":var i=(0,o.hd)(r,a);return t(e,i);case s.sq:return l;default:return n}}}},70347:()=>{},58392:()=>{},10497:()=>{},54476:()=>{},71338:()=>{},74282:()=>{},25238:()=>{},91993:()=>{},40209:()=>{},72816:()=>{},53519:()=>{}}]);
//# sourceMappingURL=../sourcemaps/874.f805b31e428c8fb4297872464ee16e61.js.map