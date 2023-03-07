"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9603],{97648:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(29439),s=n(43297),l=n.n(s),r=n(45697),o=n.n(r),i=n(6202),c=n(32752),m=n(78826),u=n(30893),d=n(32132),f=function(e){var t=e.isModalOpen,n=e.setModalOpen,r=e.templateName,o=e.onConfirm,f=(0,s.useState)(!1),p=(0,a.Z)(f,2),g=p[0],h=p[1],b=function(){n(!1),h(!1)};return l().createElement(m.Modal,{title:d.N.formatMessage(u.Z.titlesTemplateDeleteModalTitle),titleIconVariant:"warning",isOpen:t,onClose:b,variant:"small",actions:[l().createElement(i.Button,{key:"confirm",variant:"danger",onClick:function(){b(),o()},isDisabled:!g},d.N.formatMessage(u.Z.labelsDelete)),l().createElement(i.Button,{key:"cancel",variant:"link",onClick:b},d.N.formatMessage(u.Z.labelsCancel))]},d.N.formatMessage(u.Z.titlesTemplateDeleteModalText,{templateName:r,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}),l().createElement(c.Checkbox,{className:"pf-u-mt-md",isChecked:g,checked:g,onChange:function(e){return h(e)},label:d.N.formatMessage(u.Z.titlesTemplateDeleteModalCheckbox),id:"template-delete-modal-checkbox"}))};f.propTypes={isModalOpen:o().bool,setModalOpen:o().func,templateName:o().string,onConfirm:o().func};const p=f},98333:(e,t,n)=>{n.d(t,{Z:()=>Z});var a=n(29439),s=n(43297),l=n.n(s),r=n(45697),o=n.n(r),i=n(78826),c=n(6202),m=n(49287),u=n(26577),d=n(74806),f=n(30893),p=n(15861),g=n(64687),h=n.n(g),b=n(28216),y=n(83215),E=n(11220),S=n(13784),v=n(18038),O=function(e,t,n){return l().createElement(v.P,null,n.formatMessage(f.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return l().createElement("b",null,t)}}))},M=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,r=e.setUnassignSystemsModalOpen,o=e.intl,d=n.systemsIDs,g=n.isUnassignSystemsModalOpen,v=(0,s.useState)([]),M=(0,a.Z)(v,2),Z=M[0],k=M[1],D=(0,s.useState)(!0),w=(0,a.Z)(D,2),T=w[0],P=w[1],C=function(e){r({isUnassignSystemsModalOpen:!g,systemsIDs:[],shouldRefresh:e})},_=function(){C(!1)},N=function(e,t){var n=(0,b.I0)(),a=function(){var a=(0,p.Z)(h().mark((function a(){return h().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,E.J_)({inventory_ids:t});case 2:200===a.sent.status&&(e(!0),n((0,y.wN)((0,S.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}(C,Z);(0,s.useEffect)((function(){P(!0),function(e){return(0,E.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(d).then((function(e){k(e),P(!1)}))}),[d]);var B=d.length-Z.length;return l().createElement(i.Modal,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:o.formatMessage(f.Z.textUnassignSystemsTitle),onClose:_,titleIconVariant:"warning",actions:[l().createElement(c.Button,{key:"confirm",variant:"danger",onClick:N,isDisabled:T||0===Z.length},o.formatMessage(f.Z.labelsRemove)),l().createElement(c.Button,{key:"cancel",variant:"link",onClick:_},o.formatMessage(f.Z.labelsCancel))]},l().createElement(m.r,{hasGutter:!0},T?l().createElement(u.O,null):l().createElement(s.Fragment,null,Z.length>0&&O("textUnassignSystemsStatement",Z.length,o),B>0&&O("textUnassignSystemsWarning",B,o))))};M.propTypes={intl:o().any,setUnassignSystemsModalOpen:o().func,unassignSystemsModalState:o().object};const Z=(0,d.ZP)(M)},20677:(e,t,n)=>{n.d(t,{Qk:()=>g,Z8:()=>p,gs:()=>d,mN:()=>u,mR:()=>f});var a=n(43297),s=n.n(a),l=n(6202),r=n(76004),o=n(72573),i=n(60472),c=n(32132),m=n(30893),u=function(e,t){return function(){return t?s().createElement(l.Button,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)):s().createElement(r.Tooltip,{content:"For editing access, contact your administrator."},s().createElement(l.Button,{key:"createButton",isAriaDisabled:!0},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)))}},d=[{key:"name",title:"Name",transforms:[o.sortable]},{key:"systems",title:"Systems applied",transforms:[o.sortable]},{key:"last_edited",title:"Last edited",transforms:[o.sortable]},{key:"published",title:"Published",transforms:[o.sortable]},{key:"creator",title:"Created by",transforms:[o.sortable]}],f=function(e,t){return[{title:c.N.formatMessage(m.Z.labelsButtonEditTemplate),onClick:function(t,n,a){e(null==a?void 0:a.id)}},{title:c.N.formatMessage(m.Z.labelsButtonRemoveTemplate),onClick:function(e,n,a){t(a)}}]},p=function(e){return[{title:c.N.formatMessage(m.Z.textUnassignSystemsShortTitle),onClick:function(t,n,a){e(a)}}]},g=function(){return s().createElement(r.Tooltip,{content:"For editing access, contact your administrator."},s().createElement(l.Button,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},s().createElement(i.default,null)))}},88929:(e,t,n)=>{n.r(t),n.d(t,{default:()=>L});var a=n(4942),s=n(29439),l=n(14748),r=n(43297),o=n.n(r),i=n(86896),c=n(28216),m=n(334),u=n(30893),d=n(49642),f=n(14240),p=n(38776),g=n(91607),h=n(9557),b=n(22910),y=n(96823),E=n(92512),S=n(80765),v=n(26577),O=n(63540),M=n(20018),Z=n(97648),k=n(11220),D=n(83215),w=n(13784),T=n(52579),P=n(35240),C=n(72573),_=[{key:"name",title:"Name",transforms:[C.sortable]},{key:"operating_system",title:"OS",transforms:[C.sortable]},{key:"tags",title:"Tags",transforms:[C.sortable]},{key:"last_seen",title:"Last seen",transforms:[C.sortable]}],N=n(36248),B=n(5391),U=n(74079),I=n(20677),j=n(95249),x=n(98333);function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const L=function(){var e=(0,g.mu)(),t=(0,i.Z)(),n=(0,c.I0)(),a=(0,m.useHistory)(),C=a.location.pathname.split("/")[2],A=o().useState(!0),L=(0,s.Z)(A,2),W=L[0],z=L[1],F=(0,r.useState)(!1),$=(0,s.Z)(F,2),q=$[0],G=$[1],J=o().useState(!0),K=(0,s.Z)(J,2),V=K[0],H=K[1],Q=(0,r.useState)(!1),Y=(0,s.Z)(Q,2),X=Y[0],ee=Y[1],te=(0,r.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,systemsIDs:[],shouldRefresh:!1}),ne=(0,s.Z)(te,2),ae=ne[0],se=ne[1],le=(0,c.v9)((function(e){return e.PatchSetDetailStore})),re=(0,c.v9)((function(e){var t,n,a=e.PatchSetDetailStore;return null===(t=null==a||null===(n=a.status)||void 0===n?void 0:n.isLoading)||void 0===t||t})),oe=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.status})),ie=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.rows})),ce=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.metadata})),me=(0,c.v9)((function(e){return e.PatchSetDetailSystemsStore.queryParams})),ue=(0,j.c$)(["patch:*:*","patch:template:write"]).hasAccess,de=(0,r.useMemo)((function(){return(0,N.dn)(ie)}),[ie]),fe=oe.hasError,pe=oe.code,ge=le.data.attributes.name,he=function(e){n((0,h.JP)(e))},be=(0,g.SL)(null==ce?void 0:ce.limit,he),ye=(0,g._T)(he),Ee=(0,g._f)(_,he,0),Se=(0,r.useMemo)((function(){return(0,B.hO)(_,null==ce?void 0:ce.sort,0)}),[null==ce?void 0:ce.sort]);(0,r.useEffect)((function(){return e().then((function(e){var t;H(null==e||null===(t=e.smart_management)||void 0===t?void 0:t.is_entitled)})),function(){n((0,h.JP)()),n((0,h.pV)())}}),[]),(0,r.useEffect)((function(){!0===ae.shouldRefresh&&(n((0,h.YG)(C,R(R({},me),{},{page:1,offset:0}))),n((0,h.Ku)(C)),se(R(R({},ae),{},{shouldRefresh:!1})))}),[ae.shouldRefresh]),(0,g.KW)((function(){W?(he((0,B.PZ)(a.location.search)),n((0,h.Ku)(C)),z(!1)):(a.push((0,B.R_)(me)),n((0,h.YG)(C,me)))}),[me,W]);var ve=(0,I.Z8)((function(e){se(R(R({},ae),{},{isUnassignSystemsModalOpen:!0,systemsIDs:[e.id]}))})),Oe=[o().createElement(y.DropdownItem,{key:"edit-patch-set",component:"button",onClick:function(){se({isPatchSetWizardOpen:!0})}},t.formatMessage(u.Z.labelsButtonEditTemplate)),o().createElement(y.DropdownItem,{key:"delete-patch-set",component:"button",onClick:function(){return ee(!0)}},t.formatMessage(u.Z.labelsButtonRemoveTemplate))];return fe||!1===(null==ce?void 0:ce.has_systems)?o().createElement(T.Z,{code:pe,metadata:oe.metadata}):o().createElement(r.Fragment,null,o().createElement(Z.Z,{templateName:ge,isModalOpen:X,setModalOpen:ee,onConfirm:function(){(0,k.f_)(C).then((function(){n((0,D.wN)((0,w.D$)(ge).success)),a.push("/templates")})).catch((function(){n((0,D.wN)((0,w.D$)(ge).error))}))}}),ae.isPatchSetWizardOpen&&o().createElement(U.Z,{systemsIDs:ae.systemsIDs,setBaselineState:se,patchSetID:C}),o().createElement(x.Z,{unassignSystemsModalState:ae,setUnassignSystemsModalOpen:se}),o().createElement(d.Z,{title:re?o().createElement(v.O,{style:{width:300}}):ge,headerOUIA:"template-details",breadcrumbs:[{title:t.formatMessage(u.Z.templateDetailHeaderBreadcrumb),to:"/templates",isActive:!1},{title:re?o().createElement(v.O,{style:{width:150}}):ge,isActive:!0}],actions:o().createElement(b.Dropdown,{position:E.DropdownPosition.right,onSelect:function(){G(!1),document.getElementById("patch-set-detail-header-kebab").focus()},toggle:o().createElement(S.DropdownToggle,{id:"patch-set-detail-header-kebab",className:"pf-u-mr-xl",onToggle:function(e){return G(e)},style:{minWidth:150}},t.formatMessage(u.Z.labelsActions)),isOpen:q,dropdownItems:Oe})},o().createElement("table",{border:"0",style:{marginTop:8}},o().createElement("tbody",null,o().createElement("tr",null,o().createElement("td",{style:{width:300}},t.formatMessage(u.Z.templateDetailTableDescription)),o().createElement("td",null,re?o().createElement(v.O,{style:{width:300}}):le.data.attributes.description||t.formatMessage(u.Z.titlesTemplateNoDescription))),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(u.Z.templateDetailTableUpToDate)),o().createElement("td",null,re?o().createElement(v.O,{style:{width:100}}):(0,P.Un)(le.data.attributes.config.to_time))),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(u.Z.templateDetailTableCreatedBy)),o().createElement("td",null,re?o().createElement(v.O,{style:{width:100}}):le.data.attributes.creator)),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(u.Z.templateDetailTablePublished)),o().createElement("td",null,re?o().createElement(v.O,{style:{width:100}}):(0,P.Un)(le.data.attributes.published))),o().createElement("tr",null,o().createElement("td",null,t.formatMessage(u.Z.templateDetailTableLastEdited)),o().createElement("td",null,re?o().createElement(v.O,{style:{width:100}}):(0,P.Un)(le.data.attributes.last_edited)))))),o().createElement(l.Z,null,o().createElement(M.D,null,o().createElement(O.xv,{component:"h2",className:"pf-u-mb-md"},t.formatMessage(u.Z.templateDetailTableTitle))),V?0!==de.length||oe.isLoading?o().createElement(p.Z,{columns:_,compact:!0,onSetPage:be,onPerPageSelect:ye,onSort:Ee,sortBy:Se,apply:he,tableOUIA:"patch-set-detail-table",paginationOUIA:"patch-set-detail-pagination",store:{rows:de,metadata:ce,status:oe,queryParams:me},actionsConfig:ve,actionsToggle:ue?null:I.Qk,searchChipLabel:t.formatMessage(u.Z.labelsFiltersSearchTemplateTitle)}):o().createElement(f.$6,null):o().createElement(f.DL,null)))}}}]);
//# sourceMappingURL=../sourcemaps/TemplateDetail.b92f9ce8b669b0e346cf7ea7f527685c.js.map