"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9603],{56787:(e,t,n)=>{n.d(t,{L:()=>c});var a=n(70655),s=n(43297),l=n(73699),r=n(99355),o=n(17352),i=n(62472);const c=e=>{var{onSelect:t,ref:n,ouiaId:u,ouiaSafe:m,alignments:d,contextProps:p,menuAppendTo:f="inline",isFlipEnabled:g=!0,removeFindDomNode:b=!1,zIndex:h=9999}=e,y=(0,a.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return s.createElement(r.Dl.Provider,{value:Object.assign({onSelect:e=>t&&t(e),toggleTextClass:l.default.dropdownToggleText,toggleIconClass:l.default.dropdownToggleImage,toggleIndicatorClass:l.default.dropdownToggleIcon,menuClass:l.default.dropdownMenu,itemClass:l.default.dropdownMenuItem,toggleClass:l.default.dropdownToggle,baseClass:l.default.dropdown,baseComponent:"div",sectionClass:l.default.dropdownGroup,sectionTitleClass:l.default.dropdownGroupTitle,sectionComponent:"section",disabledClass:l.default.modifiers.disabled,plainTextClass:l.default.modifiers.text,ouiaId:(0,i.Z1)(c.displayName,u),ouiaSafe:m,ouiaComponentType:c.displayName,alignments:d},p)},s.createElement(o.R,Object.assign({menuAppendTo:f,isFlipEnabled:g,removeFindDomNode:b,zIndex:h},y)))};c.displayName="Dropdown"},97648:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(29439),s=n(43297),l=n.n(s),r=n(45697),o=n.n(r),i=n(47173),c=n(93149),u=n(80236),m=n(30893),d=n(32132),p=function(e){var t=e.isModalOpen,n=e.setModalOpen,r=e.templateName,o=e.onConfirm,p=(0,s.useState)(!1),f=(0,a.Z)(p,2),g=f[0],b=f[1],h=function(){n(!1),b(!1)};return l().createElement(u.u,{title:d.N.formatMessage(m.Z.titlesTemplateDeleteModalTitle),titleIconVariant:"warning",isOpen:t,onClose:h,variant:"small",actions:[l().createElement(i.zx,{key:"confirm",variant:"danger",onClick:function(){h(),o()},isDisabled:!g},d.N.formatMessage(m.Z.labelsDelete)),l().createElement(i.zx,{key:"cancel",variant:"link",onClick:h},d.N.formatMessage(m.Z.labelsCancel))]},d.N.formatMessage(m.Z.titlesTemplateDeleteModalText,{templateName:r,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}),l().createElement(c.X,{className:"pf-u-mt-md",isChecked:g,checked:g,onChange:function(e){return b(e)},label:d.N.formatMessage(m.Z.titlesTemplateDeleteModalCheckbox),id:"template-delete-modal-checkbox"}))};p.propTypes={isModalOpen:o().bool,setModalOpen:o().func,templateName:o().string,onConfirm:o().func};const f=p},98333:(e,t,n)=>{n.d(t,{Z:()=>M});var a=n(29439),s=n(43297),l=n.n(s),r=n(45697),o=n.n(r),i=n(80236),c=n(47173),u=n(50693),m=n(50383),d=n(74806),p=n(30893),f=n(15861),g=n(64687),b=n.n(g),h=n(28216),y=n(83215),E=n(11220),v=n(13784),S=n(16475),O=function(e,t,n){return l().createElement(S.P,null,n.formatMessage(p.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}))},Z=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,r=e.setUnassignSystemsModalOpen,o=e.intl,d=n.systemsIDs,g=n.isUnassignSystemsModalOpen,S=(0,s.useState)([]),Z=(0,a.Z)(S,2),M=Z[0],k=Z[1],C=(0,s.useState)(!0),D=(0,a.Z)(C,2),T=D[0],w=D[1],P=function(e){r({isUnassignSystemsModalOpen:!g,systemsIDs:[],shouldRefresh:e})},_=function(){P(!1)},N=function(e,t){var n=(0,h.I0)(),a=function(){var a=(0,f.Z)(b().mark((function a(){return b().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,E.C9)({inventory_ids:t});case 2:200===a.sent.status&&(e(!0),n((0,y.wN)((0,v.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}(P,M);(0,s.useEffect)((function(){w(!0),function(e){return(0,E.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(d).then((function(e){k(e),w(!1)}))}),[d]);var I=d.length-M.length;return l().createElement(i.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:o.formatMessage(p.Z.textUnassignSystemsTitle),onClose:_,titleIconVariant:"warning",actions:[l().createElement(c.zx,{key:"confirm",variant:"danger",onClick:N,isDisabled:T||0===M.length},o.formatMessage(p.Z.labelsRemove)),l().createElement(c.zx,{key:"cancel",variant:"link",onClick:_},o.formatMessage(p.Z.labelsCancel))]},l().createElement(u.r,{hasGutter:!0},T?l().createElement(m.O,null):l().createElement(s.Fragment,null,M.length>0&&O("textUnassignSystemsStatement",M.length,o),I>0&&O("textUnassignSystemsWarning",I,o))))};Z.propTypes={intl:o().any,setUnassignSystemsModalOpen:o().func,unassignSystemsModalState:o().object};const M=(0,d.ZP)(Z)},20677:(e,t,n)=>{n.d(t,{Qk:()=>g,Z8:()=>f,gs:()=>d,mN:()=>m,mR:()=>p});var a=n(43297),s=n.n(a),l=n(47173),r=n(16545),o=n(7732),i=n(62165),c=n(32132),u=n(30893),m=function(e,t){return function(){return t?s().createElement(l.zx,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},c.N.formatMessage(u.Z.labelsButtonCreateTemplate)):s().createElement(r.u,{content:"For editing access, contact your administrator."},s().createElement(l.zx,{key:"createButton",isAriaDisabled:!0},c.N.formatMessage(u.Z.labelsButtonCreateTemplate)))}},d=[{key:"name",title:"Name",transforms:[o.p]},{key:"systems",title:"Systems applied",transforms:[o.p]},{key:"last_edited",title:"Last edited",transforms:[o.p]},{key:"published",title:"Published",transforms:[o.p]},{key:"creator",title:"Created by",transforms:[o.p]}],p=function(e,t){return[{title:c.N.formatMessage(u.Z.labelsButtonEditTemplate),onClick:function(t,n,a){e(null==a?void 0:a.id)}},{title:c.N.formatMessage(u.Z.labelsButtonRemoveTemplate),onClick:function(e,n,a){t(a)}}]},f=function(e){return[{title:c.N.formatMessage(u.Z.textUnassignSystemsShortTitle),onClick:function(t,n,a){e(a)}}]},g=function(){return s().createElement(r.u,{content:"For editing access, contact your administrator."},s().createElement(l.zx,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},s().createElement(i.ZP,null)))}},88929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>F});var a=n(4942),s=n(29439),l=n(14748),r=n(43297),o=n.n(r),i=n(86896),c=n(28216),u=n(96620),m=n(30893),d=n(49642),p=n(14240),f=n(38776),g=n(91607),b=n(9557),h=n(56787),y=n(84457),E=n(99355),v=n(75728),S=n(50383),O=n(68340),Z=n(68774),M=n(97648),k=n(11220),C=n(83215),D=n(13784),T=n(52579),w=n(35240),P=n(72573),_=[{key:"display_name",title:"Name",transforms:[P.sortable]},{key:"operating_system",title:"OS"},{key:"installable_advisories",title:"Installable advisories",transforms:[P.sortable]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[P.sortable]},{key:"last_upload",title:"Last seen",transforms:[P.sortable]}],N=n(36248),I=n(5391),x=n(74079),U=n(20677),B=n(95249),j=n(98333);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const F=function(){var e=(0,g.mu)(),t=(0,i.Z)(),n=(0,c.I0)(),a=(0,u.useHistory)(),P=a.location.pathname.split("/")[2],z=o().useState(!0),F=(0,s.Z)(z,2),R=F[0],L=F[1],W=(0,r.useState)(!1),G=(0,s.Z)(W,2),$=G[0],q=G[1],K=o().useState(!0),V=(0,s.Z)(K,2),H=V[0],J=V[1],Q=(0,r.useState)(!1),Y=(0,s.Z)(Q,2),X=Y[0],ee=Y[1],te=(0,r.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,systemsIDs:[],shouldRefresh:!1}),ne=(0,s.Z)(te,2),ae=ne[0],se=ne[1],le=(0,c.v9)((function(e){return e.PatchSetDetailStore})),re=(0,c.v9)((function(e){var t,n,a=e.PatchSetDetailStore;return null===(t=null==a||null===(n=a.status)||void 0===n?void 0:n.isLoading)||void 0===t||t})),oe=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.status})),ie=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.rows})),ce=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.metadata})),ue=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.queryParams})),me=(0,B.c$)(["patch:*:*","patch:template:write"]).hasAccess,de=(0,r.useMemo)((function(){return(0,N.dn)(ie)}),[ie]),pe=oe.hasError,fe=oe.code,ge=le.data.attributes.name,be=function(e){n((0,b.JP)(e))},he=(0,g.SL)(null==ce?void 0:ce.limit,be),ye=(0,g._T)(be),Ee=(0,g._f)(_,be,0,D.Bi),ve=(0,r.useMemo)((function(){return(0,I.hO)(_,null==ce?void 0:ce.sort,0,D.Bi)}),[null==ce?void 0:ce.sort]),Se=function(){se(A(A({},ae),{},{isPatchSetWizardOpen:!0}))};(0,r.useEffect)((function(){return e().then((function(e){var t;J(null==e||null===(t=e.smart_management)||void 0===t?void 0:t.is_entitled)})),function(){n((0,b.JP)()),n((0,b.pV)())}}),[]),(0,r.useEffect)((function(){!0===ae.shouldRefresh&&(n((0,b.YG)(P,A(A({},ue),{},{page:1,offset:0}))),n((0,b.Ku)(P)),se(A(A({},ae),{},{shouldRefresh:!1})))}),[ae.shouldRefresh]),(0,g.KW)((function(){R?(be((0,I.PZ)(a.location.search)),n((0,b.Ku)(P)),L(!1)):(a.push((0,I.R_)(ue)),n((0,b.YG)(P,ue)))}),[ue,R]);var Oe=(0,U.Z8)((function(e){se(A(A({},ae),{},{isUnassignSystemsModalOpen:!0,systemsIDs:[e.id]}))})),Ze=[o().createElement(y.h,{key:"edit-patch-set",component:"button",onClick:function(){return Se()}},t.formatMessage(m.Z.labelsButtonEditTemplate)),o().createElement(y.h,{key:"delete-patch-set",component:"button",onClick:function(){return ee(!0)}},t.formatMessage(m.Z.labelsButtonRemoveTemplate))];return pe||!1===(null==ce?void 0:ce.has_systems)?o().createElement(T.Z,{code:fe,metadata:oe.metadata}):o().createElement(r.Fragment,null,o().createElement(M.Z,{templateName:ge,isModalOpen:X,setModalOpen:ee,onConfirm:function(){(0,k.f_)(P).then((function(){n((0,C.wN)((0,D.D$)(ge).success)),a.push("/templates")})).catch((function(){n((0,C.wN)((0,D.D$)(ge).error))}))}}),ae.isPatchSetWizardOpen&&o().createElement(x.Z,{systemsIDs:ae.systemsIDs,setBaselineState:se,patchSetID:P}),o().createElement(j.Z,{unassignSystemsModalState:ae,setUnassignSystemsModalOpen:se}),o().createElement(d.Z,{title:re?o().createElement(S.O,{style:{width:300}}):ge,headerOUIA:"template-details",breadcrumbs:[{title:t.formatMessage(m.Z.templateDetailHeaderBreadcrumb),to:"/templates",isActive:!1},{title:re?o().createElement(S.O,{style:{width:150}}):ge,isActive:!0}],actions:o().createElement(h.L,{position:E.ir.right,onSelect:function(){q(!1),document.getElementById("patch-set-detail-header-kebab").focus()},toggle:o().createElement(v.Z,{id:"patch-set-detail-header-kebab",className:"pf-u-mr-xl",onToggle:function(e){return q(e)},style:{minWidth:150}},t.formatMessage(m.Z.labelsActions)),isOpen:$,dropdownItems:Ze})},o().createElement("table",{border:"0",style:{marginTop:8}},o().createElement("tbody",null,o().createElement("tr",null,o().createElement("td",{style:{width:300}},t.formatMessage(m.Z.templateDetailTableDescription)),o().createElement("td",null,re?o().createElement(S.O,{style:{width:300}}):le.data.attributes.description||t.formatMessage(m.Z.titlesTemplateNoDescription))),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(m.Z.templateDetailTableUpToDate)),o().createElement("td",null,re?o().createElement(S.O,{style:{width:100}}):(0,I.jC)(le.data.attributes.config.to_time))),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(m.Z.templateDetailTableCreatedBy)),o().createElement("td",null,re?o().createElement(S.O,{style:{width:100}}):le.data.attributes.creator)),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(m.Z.templateDetailTablePublished)),o().createElement("td",null,re?o().createElement(S.O,{style:{width:100}}):(0,w.Un)(le.data.attributes.published))),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(m.Z.templateDetailTableLastEdited)),o().createElement("td",null,re?o().createElement(S.O,{style:{width:100}}):(0,w.Un)(le.data.attributes.last_edited)))))),o().createElement(l.Z,null,o().createElement(Z.D,null,o().createElement(O.x,{component:"h2",className:"pf-u-mb-md"},t.formatMessage(m.Z.templateDetailTableTitle))),H?0!==de.length||oe.isLoading?o().createElement(f.Z,{columns:_,compact:!0,onSetPage:he,onPerPageSelect:ye,onSort:Ee,sortBy:ve,apply:be,tableOUIA:"patch-set-detail-table",paginationOUIA:"patch-set-detail-pagination",store:{rows:de,metadata:ce,status:oe,queryParams:ue},actionsConfig:Oe,actionsToggle:me?null:U.Qk,searchChipLabel:t.formatMessage(m.Z.labelsFiltersSearchTemplateTitle)}):o().createElement(p.$6,{onButtonClick:function(){return Se()}}):o().createElement(p.DL,null)))}}}]);
//# sourceMappingURL=../sourcemaps/TemplateDetail.df9e844786c89db226433460be3a9b89.js.map