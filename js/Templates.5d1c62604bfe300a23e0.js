"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[3004],{55795:(e,t,a)=>{t.sN={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},t.iC=a(35183).createIcon(t.sN),t.ZP=t.iC},97648:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(29439),r=a(43297),s=a.n(r),o=a(45697),l=a.n(o),i=a(6202),c=a(32752),u=a(78826),m=a(30893),p=a(32132),f=function(e){var t=e.isModalOpen,a=e.setModalOpen,o=e.templateName,l=e.onConfirm,f=(0,r.useState)(!1),d=(0,n.Z)(f,2),h=d[0],b=d[1],g=function(){a(!1),b(!1)};return s().createElement(u.Modal,{title:p.N.formatMessage(m.Z.titlesTemplateDeleteModalTitle),titleIconVariant:"warning",isOpen:t,onClose:g,variant:"small",actions:[s().createElement(i.Button,{key:"confirm",variant:"danger",onClick:function(){g(),l()},isDisabled:!h},p.N.formatMessage(m.Z.labelsDelete)),s().createElement(i.Button,{key:"cancel",variant:"link",onClick:g},p.N.formatMessage(m.Z.labelsCancel))]},p.N.formatMessage(m.Z.titlesTemplateDeleteModalText,{templateName:o,b:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return s().createElement("b",null,t)}}),s().createElement(c.Checkbox,{className:"pf-u-mt-md",isChecked:h,checked:h,onChange:function(e){return b(e)},label:p.N.formatMessage(m.Z.titlesTemplateDeleteModalCheckbox),id:"template-delete-modal-checkbox"}))};f.propTypes={isModalOpen:l().bool,setModalOpen:l().func,templateName:l().string,onConfirm:l().func};const d=f},535:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var n=a(4942),r=a(29439),s=a(14748),o=a(43297),l=a.n(o),i=a(28216),c=a(334),u=a(30893),m=a(49642),p=a(90747),f=a(38776),d=a(9557),h=a(11220),b=a(36248),g=a(5391),y=a(91607),S=a(32132),v=a(83215),O=a(6202),P=a(76004),M=a(72573),Z=a(60472),C=[{key:"name",title:"Name",transforms:[M.sortable]},{key:"systems",title:"Systems applied",transforms:[M.sortable]},{key:"last_edited",title:"Last edited",transforms:[M.sortable]},{key:"published",title:"Published",transforms:[M.sortable]},{key:"creator",title:"Created by",transforms:[M.sortable]}],N=function(){return l().createElement(P.Tooltip,{content:"For editing access, contact your administrator."},l().createElement(O.Button,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},l().createElement(Z.default,null)))},E=a(74079),k=a(13784),D=a(79875),_=a(95249),T=a(93080),w=a(50470),B=a(55795),I=a(149),j=a(97648),z=a(14240);function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const W=function(){var e=S.N.formatMessage(u.Z.titlesTemplate);(0,y.Iw)(e);var t=(0,i.I0)(),a=(0,c.useHistory)(),n=l().useState(!0),M=(0,r.Z)(n,2),Z=M[0],A=M[1],W=l().useState(!0),L=(0,r.Z)(W,2),x=L[0],F=L[1],U=l().useState(!1),q=(0,r.Z)(U,2),Y=q[0],$=q[1],H=l().useState(null),V=(0,r.Z)(H,2),G=V[0],K=V[1],Q=(0,i.v9)((function(e){return e.PatchSetsStore.rows})),X=(0,i.v9)((function(e){return e.PatchSetsStore.queryParams})),J=(0,i.v9)((function(e){return e.PatchSetsStore.selectedRows})),ee=(0,i.v9)((function(e){return e.PatchSetsStore.metadata})),te=(0,i.v9)((function(e){return e.PatchSetsStore.status})),ae=(0,o.useMemo)((function(){return(0,b.CN)(Q,J,X)}),[Q,J]),ne=(0,y.mu)();function re(e){t((0,d.br)(e))}var se=function(){t((0,d.BY)(R(R({},X),{},{page:1,offset:0})))};(0,o.useEffect)((function(){return ne().then((function(e){var t;F(null==e||null===(t=e.smart_management)||void 0===t?void 0:t.is_entitled)})),function(){t((0,d.Im)()),t((0,v.L1)())}}),[]);var oe=(0,D.Z)(J),le=oe.patchSetState,ie=oe.setPatchSetState,ce=oe.openPatchSetEditModal;(0,o.useEffect)((function(){!0===le.shouldRefresh&&se()}),[le.shouldRefresh]),(0,y.KW)((function(){Z?(re((0,g.PZ)(a.location.search)),A(!1)):(a.push((0,g.R_)(X)),t((0,d.BY)(X)))}),[X,Z]),(0,T.r)(ae,J,{endpoint:T.c.templates,queryParams:X,selectionDispatcher:d.GL});var ue=(0,y._f)(C,re,0),me=l().useMemo((function(){return(0,g.hO)(C,ee.sort,0)}),[ee.sort]),pe=(0,y.SL)(ee.limit,re),fe=(0,y._T)(re),de=(0,_.c$)(["patch:*:*","patch:template:write"]).hasAccess,he=function(e,t){return function(){return t?l().createElement(O.Button,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},S.N.formatMessage(u.Z.labelsButtonCreateTemplate)):l().createElement(P.Tooltip,{content:"For editing access, contact your administrator."},l().createElement(O.Button,{key:"createButton",isAriaDisabled:!0},S.N.formatMessage(u.Z.labelsButtonCreateTemplate)))}}(ie,de),be=function(e,t){return[{title:S.N.formatMessage(u.Z.labelsButtonEditTemplate),onClick:function(t,a,n){e(null==n?void 0:n.id)}},{title:S.N.formatMessage(u.Z.labelsButtonRemoveTemplate),onClick:function(e,t,a){!function(e){$(!0),K(e)}(a)}}]}(ce),ge={items:[(0,p.Z)(re,X.search,S.N.formatMessage(u.Z.labelsFiltersSearchTemplateTitle),S.N.formatMessage(u.Z.labelsFiltersSearchTemplatePlaceholder))]};return l().createElement(l().Fragment,null,l().createElement(j.Z,{templateName:null==G?void 0:G.displayName,isModalOpen:Y,setModalOpen:$,onConfirm:function(){(0,h.f_)(G.id).then((function(){t((0,v.wN)((0,k.D$)(G.displayName).success)),se()})).catch((function(){t((0,v.wN)((0,k.D$)(G.displayName).error))}))}}),l().createElement(m.Z,{headerOUIA:"advisories",title:l().createElement("span",null,S.N.formatMessage(u.Z.titlesTemplate),l().createElement(I.Popover,{id:"template-header-title-popover","aria-describedby":"template-header-title-popover","aria-labelledby":"template-header-title-popover",hasAutoWidth:!0,maxWidth:"320px",position:"right",enableFlip:!0,headerContent:S.N.formatMessage(u.Z.templatePopoverHeader),bodyContent:S.N.formatMessage(u.Z.templatePopoverBody),footerContent:l().createElement("a",{href:k.Yb,target:"__blank",rel:"noopener noreferrer"},S.N.formatMessage(u.Z.linksReadMore)," ",l().createElement(w.default,null))},l().createElement(B.ZP,{color:"var(--pf-global--secondary-color--100)",className:"pf-u-ml-sm",style:{verticalAlign:"0",fontSize:16,cursor:"pointer"}})))}),le.isPatchSetWizardOpen&&l().createElement(E.Z,{systemsIDs:le.systemsIDs,setBaselineState:ie,patchSetID:le.patchSetID}),l().createElement(s.Z,null,x?0!==ae.length||te.isLoading?l().createElement(f.Z,{columns:C,compact:!0,onSetPage:pe,onPerPageSelect:fe,onSort:ue,selectedRows:!1,onSelect:!1,sortBy:me,apply:re,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:ae,metadata:ee,status:te,queryParams:X},actionsConfig:(null==Q?void 0:Q.length)>0&&be,filterConfig:ge,searchChipLabel:S.N.formatMessage(u.Z.labelsFiltersSearchTemplateTitle),ToolbarButton:he,actionsToggle:de?null:N}):l().createElement(z.WX,{Button:he}):l().createElement(z.DL,null)))}},79875:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(29439),r=a(43297),s=a(5391);const o=function(e){var t=(0,r.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),a=(0,n.Z)(t,2),o=a[0],l=a[1];return{patchSetState:o,setPatchSetState:l,openPatchSetAssignWizard:function(t){l({isPatchSetWizardOpen:!0,systemsIDs:"string"==typeof t&&""!==t?[t]:(0,s.LI)(e),shouldRefresh:!1})},openUnassignSystemsModal:function(e){l({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openPatchSetEditModal:function(e){l({isPatchSetWizardOpen:!0,patchSetID:e})}}}}}]);
//# sourceMappingURL=../sourcemaps/Templates.1b2c43ec5d86a1e911fb24946a5cb876.js.map