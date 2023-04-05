"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9603],{97648:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(29439),s=n(43297),l=n.n(s),r=n(45697),i=n.n(r),o=n(47173),c=n(93149),m=n(80236),u=n(30893),d=n(32132),f=function(e){var t=e.isModalOpen,n=e.setModalOpen,r=e.templateName,i=e.onConfirm,f=(0,s.useState)(!1),p=(0,a.Z)(f,2),h=p[0],y=p[1],g=function(){n(!1),y(!1)};return l().createElement(m.u,{title:d.N.formatMessage(u.Z.titlesTemplateDeleteModalTitle),titleIconVariant:"warning",isOpen:t,onClose:g,variant:"small",actions:[l().createElement(o.zx,{key:"confirm",variant:"danger",onClick:function(){g(),i()},isDisabled:!h},d.N.formatMessage(u.Z.labelsDelete)),l().createElement(o.zx,{key:"cancel",variant:"link",onClick:g},d.N.formatMessage(u.Z.labelsCancel))]},d.N.formatMessage(u.Z.titlesTemplateDeleteModalText,{templateName:r,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}),l().createElement(c.X,{className:"pf-u-mt-md",isChecked:h,checked:h,onChange:function(e){return y(e)},label:d.N.formatMessage(u.Z.titlesTemplateDeleteModalCheckbox),id:"template-delete-modal-checkbox"}))};f.propTypes={isModalOpen:i().bool,setModalOpen:i().func,templateName:i().string,onConfirm:i().func};const p=f},98333:(e,t,n)=>{n.d(t,{Z:()=>M});var a=n(29439),s=n(43297),l=n.n(s),r=n(45697),i=n.n(r),o=n(80236),c=n(47173),m=n(50693),u=n(50383),d=n(74806),f=n(30893),p=n(15861),h=n(64687),y=n.n(h),g=n(28216),b=n(83215),E=n(11220),v=n(13784),S=n(16475),Z=function(e,t,n){return l().createElement(S.P,null,n.formatMessage(f.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}))},O=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,r=e.setUnassignSystemsModalOpen,i=e.intl,d=n.systemsIDs,h=n.isUnassignSystemsModalOpen,S=(0,s.useState)([]),O=(0,a.Z)(S,2),M=O[0],k=O[1],D=(0,s.useState)(!0),C=(0,a.Z)(D,2),P=C[0],_=C[1],T=function(e){r({isUnassignSystemsModalOpen:!h,systemsIDs:[],shouldRefresh:e})},w=function(){T(!1)},N=function(e,t){var n=(0,g.I0)(),a=function(){var a=(0,p.Z)(y().mark((function a(){return y().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,E.C9)({inventory_ids:t});case 2:200===a.sent.status&&(e(!0),n((0,b.wN)((0,v.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}(T,M);(0,s.useEffect)((function(){_(!0),function(e){return(0,E.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(d).then((function(e){k(e),_(!1)}))}),[d]);var x=d.length-M.length;return l().createElement(o.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:i.formatMessage(f.Z.textUnassignSystemsTitle),onClose:w,titleIconVariant:"warning",actions:[l().createElement(c.zx,{key:"confirm",variant:"danger",onClick:N,isDisabled:P||0===M.length},i.formatMessage(f.Z.labelsRemove)),l().createElement(c.zx,{key:"cancel",variant:"link",onClick:w},i.formatMessage(f.Z.labelsCancel))]},l().createElement(m.r,{hasGutter:!0},P?l().createElement(u.O,null):l().createElement(s.Fragment,null,M.length>0&&Z("textUnassignSystemsStatement",M.length,i),x>0&&Z("textUnassignSystemsWarning",x,i))))};O.propTypes={intl:i().any,setUnassignSystemsModalOpen:i().func,unassignSystemsModalState:i().object};const M=(0,d.ZP)(O)},20677:(e,t,n)=>{n.d(t,{Qk:()=>h,Z8:()=>p,gs:()=>d,mN:()=>u,mR:()=>f});var a=n(43297),s=n.n(a),l=n(47173),r=n(35224),i=n(7732),o=n(62165),c=n(32132),m=n(30893),u=function(e,t){return function(){return t?s().createElement(l.zx,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)):s().createElement(r.u,{content:"For editing access, contact your administrator."},s().createElement(l.zx,{key:"createButton",isAriaDisabled:!0},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)))}},d=[{key:"name",title:"Name",transforms:[i.p]},{key:"systems",title:"Systems applied",transforms:[i.p]},{key:"last_edited",title:"Last edited",transforms:[i.p]},{key:"published",title:"Published",transforms:[i.p]},{key:"creator",title:"Created by",transforms:[i.p]}],f=function(e,t){return[{title:c.N.formatMessage(m.Z.labelsButtonEditTemplate),onClick:function(t,n,a){e(null==a?void 0:a.id)}},{title:c.N.formatMessage(m.Z.labelsButtonRemoveTemplate),onClick:function(e,n,a){t(a)}}]},p=function(e){return[{title:c.N.formatMessage(m.Z.textUnassignSystemsShortTitle),onClick:function(t,n,a){e(a)}}]},h=function(){return s().createElement(r.u,{content:"For editing access, contact your administrator."},s().createElement(l.zx,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},s().createElement(o.ZP,null)))}},88929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>R});var a=n(4942),s=n(29439),l=n(14748),r=n(43297),i=n.n(r),o=n(86896),c=n(28216),m=n(96620),u=n(30893),d=n(49642),f=n(14240),p=n(38776),h=n(91607),y=n(9557),g=n(56787),b=n(84457),E=n(99355),v=n(75728),S=n(50383),Z=n(68340),O=n(68774),M=n(97648),k=n(11220),D=n(83215),C=n(13784),P=n(52579),_=n(35240),T=n(72573),w=[{key:"display_name",title:"Name",transforms:[T.sortable]},{key:"operating_system",title:"OS"},{key:"installable_advisories",title:"Installable advisories",transforms:[T.sortable]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[T.sortable]},{key:"last_upload",title:"Last seen",transforms:[T.sortable]}],N=n(36248),x=n(5391),U=n(74079),I=n(20677),B=n(95249),j=n(98333);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const R=function(){var e=(0,h.mu)(),t=(0,o.Z)(),n=(0,c.I0)(),a=(0,m.useHistory)(),T=a.location.pathname.split("/")[2],z=i().useState(!0),R=(0,s.Z)(z,2),L=R[0],W=R[1],F=(0,r.useState)(!1),$=(0,s.Z)(F,2),q=$[0],G=$[1],K=i().useState(!0),V=(0,s.Z)(K,2),H=V[0],J=V[1],Q=(0,r.useState)(!1),Y=(0,s.Z)(Q,2),X=Y[0],ee=Y[1],te=(0,r.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,systemsIDs:[],shouldRefresh:!1}),ne=(0,s.Z)(te,2),ae=ne[0],se=ne[1],le=(0,c.v9)((function(e){return e.PatchSetDetailStore})),re=(0,c.v9)((function(e){var t,n,a=e.PatchSetDetailStore;return null===(t=null==a||null===(n=a.status)||void 0===n?void 0:n.isLoading)||void 0===t||t})),ie=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.status})),oe=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.rows})),ce=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.metadata})),me=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.queryParams})),ue=(0,B.c$)(["patch:*:*","patch:template:write"]).hasAccess,de=(0,r.useMemo)((function(){return(0,N.dn)(oe)}),[oe]),fe=ie.hasError,pe=ie.code,he=le.data.attributes.name,ye=function(e){n((0,y.JP)(e))},ge=(0,h.SL)(null==ce?void 0:ce.limit,ye),be=(0,h._T)(ye),Ee=(0,h._f)(w,ye,0,C.Bi),ve=(0,r.useMemo)((function(){return(0,x.hO)(w,null==ce?void 0:ce.sort,0,C.Bi)}),[null==ce?void 0:ce.sort]),Se=function(){se(A(A({},ae),{},{isPatchSetWizardOpen:!0}))};(0,r.useEffect)((function(){return e().then((function(e){var t;J(null==e||null===(t=e.smart_management)||void 0===t?void 0:t.is_entitled)})),function(){n((0,y.JP)()),n((0,y.pV)())}}),[]),(0,r.useEffect)((function(){!0===ae.shouldRefresh&&(n((0,y.YG)(T,A(A({},me),{},{page:1,offset:0}))),n((0,y.Ku)(T)),se(A(A({},ae),{},{shouldRefresh:!1})))}),[ae.shouldRefresh]),(0,h.KW)((function(){L?(ye((0,x.PZ)(a.location.search)),n((0,y.Ku)(T)),W(!1)):(a.push((0,x.R_)(me)),n((0,y.YG)(T,me)))}),[me,L]);var Ze=(0,I.Z8)((function(e){se(A(A({},ae),{},{isUnassignSystemsModalOpen:!0,systemsIDs:[e.id]}))})),Oe=[i().createElement(b.h,{key:"edit-patch-set",component:"button",onClick:function(){return Se()}},t.formatMessage(u.Z.labelsButtonEditTemplate)),i().createElement(b.h,{key:"delete-patch-set",component:"button",onClick:function(){return ee(!0)}},t.formatMessage(u.Z.labelsButtonRemoveTemplate))];return fe||!1===(null==ce?void 0:ce.has_systems)?i().createElement(P.Z,{code:pe,metadata:ie.metadata}):i().createElement(r.Fragment,null,i().createElement(M.Z,{templateName:he,isModalOpen:X,setModalOpen:ee,onConfirm:function(){(0,k.f_)(T).then((function(){n((0,D.wN)((0,C.D$)(he).success)),a.push("/templates")})).catch((function(){n((0,D.wN)((0,C.D$)(he).error))}))}}),ae.isPatchSetWizardOpen&&i().createElement(U.Z,{systemsIDs:ae.systemsIDs,setBaselineState:se,patchSetID:T}),i().createElement(j.Z,{unassignSystemsModalState:ae,setUnassignSystemsModalOpen:se}),i().createElement(d.Z,{title:re?i().createElement(S.O,{style:{width:300}}):he,headerOUIA:"template-details",breadcrumbs:[{title:t.formatMessage(u.Z.templateDetailHeaderBreadcrumb),to:"/templates",isActive:!1},{title:re?i().createElement(S.O,{style:{width:150}}):he,isActive:!0}],actions:i().createElement(g.L,{position:E.ir.right,onSelect:function(){G(!1),document.getElementById("patch-set-detail-header-kebab").focus()},toggle:i().createElement(v.Z,{id:"patch-set-detail-header-kebab",className:"pf-u-mr-xl",onToggle:function(e){return G(e)},style:{minWidth:150}},t.formatMessage(u.Z.labelsActions)),isOpen:q,dropdownItems:Oe})},i().createElement("table",{border:"0",style:{marginTop:8}},i().createElement("tbody",null,i().createElement("tr",null,i().createElement("td",{style:{width:300}},t.formatMessage(u.Z.templateDetailTableDescription)),i().createElement("td",null,re?i().createElement(S.O,{style:{width:300}}):le.data.attributes.description||t.formatMessage(u.Z.titlesTemplateNoDescription))),i().createElement("tr",null,i().createElement("td",null,t.formatMessage(u.Z.templateDetailTableUpToDate)),i().createElement("td",null,re?i().createElement(S.O,{style:{width:100}}):(0,x.jC)(le.data.attributes.config.to_time))),i().createElement("tr",null,i().createElement("td",null,t.formatMessage(u.Z.templateDetailTableCreatedBy)),i().createElement("td",null,re?i().createElement(S.O,{style:{width:100}}):le.data.attributes.creator)),i().createElement("tr",null,i().createElement("td",null,t.formatMessage(u.Z.templateDetailTablePublished)),i().createElement("td",null,re?i().createElement(S.O,{style:{width:100}}):(0,_.Un)(le.data.attributes.published))),i().createElement("tr",null,i().createElement("td",null,t.formatMessage(u.Z.templateDetailTableLastEdited)),i().createElement("td",null,re?i().createElement(S.O,{style:{width:100}}):(0,_.Un)(le.data.attributes.last_edited)))))),i().createElement(l.Z,null,i().createElement(O.D,null,i().createElement(Z.x,{component:"h2",className:"pf-u-mb-md"},t.formatMessage(u.Z.templateDetailTableTitle))),H?0!==de.length||ie.isLoading?i().createElement(p.Z,{columns:w,compact:!0,onSetPage:ge,onPerPageSelect:be,onSort:Ee,sortBy:ve,apply:ye,tableOUIA:"patch-set-detail-table",paginationOUIA:"patch-set-detail-pagination",store:{rows:de,metadata:ce,status:ie,queryParams:me},actionsConfig:Ze,actionsToggle:ue?null:I.Qk,searchChipLabel:t.formatMessage(u.Z.labelsFiltersSearchTemplateTitle)}):i().createElement(f.$6,{onButtonClick:function(){return Se()}}):i().createElement(f.DL,null)))}}}]);
//# sourceMappingURL=../sourcemaps/TemplateDetail.16f2e0b89c32f65d29ae070a0c19b85b.js.map