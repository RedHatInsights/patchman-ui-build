"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[3004],{91290:(e,t,a)=>{a.d(t,{ZP:()=>o,iC:()=>r,sN:()=>s});var n=a(40400);const s={name:"OutlinedQuestionCircleIcon",height:512,width:512,svgPath:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",yOffset:0,xOffset:0},r=(0,n.IU)(s),o=r},97648:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(29439),s=a(43297),r=a.n(s),o=a(45697),l=a.n(o),i=a(47173),c=a(93149),m=a(80236),u=a(30893),p=a(32132),f=function(e){var t=e.isModalOpen,a=e.setModalOpen,o=e.templateName,l=e.onConfirm,f=(0,s.useState)(!1),d=(0,n.Z)(f,2),h=d[0],g=d[1],y=function(){a(!1),g(!1)};return r().createElement(m.u,{title:p.N.formatMessage(u.Z.titlesTemplateDeleteModalTitle),titleIconVariant:"warning",isOpen:t,onClose:y,variant:"small",actions:[r().createElement(i.zx,{key:"confirm",variant:"danger",onClick:function(){y(),l()},isDisabled:!h},p.N.formatMessage(u.Z.labelsDelete)),r().createElement(i.zx,{key:"cancel",variant:"link",onClick:y},p.N.formatMessage(u.Z.labelsCancel))]},p.N.formatMessage(u.Z.titlesTemplateDeleteModalText,{templateName:o,b:function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return r().createElement("b",null,t)}}),r().createElement(c.X,{className:"pf-u-mt-md",isChecked:h,checked:h,onChange:function(e){return g(e)},label:p.N.formatMessage(u.Z.titlesTemplateDeleteModalCheckbox),id:"template-delete-modal-checkbox"}))};f.propTypes={isModalOpen:l().bool,setModalOpen:l().func,templateName:l().string,onConfirm:l().func};const d=f},66965:(e,t,a)=>{a.r(t),a.d(t,{default:()=>I});var n=a(4942),s=a(29439),r=a(14748),o=a(43297),l=a.n(o),i=a(28216),c=a(334),m=a(30893),u=a(49642),p=a(90747),f=a(38776),d=a(9557),h=a(11220),g=a(36248),y=a(5391),S=a(91607),b=a(32132),v=a(83215),O=a(20677),P=a(74079),Z=a(13784),M=a(79875),N=a(95249),C=a(93080),E=a(91290),k=a(46043),D=a(97648),T=a(14240);function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function w(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const I=function(){var e=b.N.formatMessage(m.Z.titlesTemplate);(0,S.Iw)(e);var t=(0,i.I0)(),a=(0,c.useHistory)(),n=l().useState(!0),_=(0,s.Z)(n,2),I=_[0],z=_[1],B=l().useState(!0),x=(0,s.Z)(B,2),j=x[0],R=x[1],A=l().useState(!1),W=(0,s.Z)(A,2),L=W[0],U=W[1],F=l().useState(null),q=(0,s.Z)(F,2),Q=q[0],$=q[1],H=(0,i.v9)((function(e){return e.PatchSetsStore.rows})),V=(0,i.v9)((function(e){return e.PatchSetsStore.queryParams})),X=(0,i.v9)((function(e){return e.PatchSetsStore.selectedRows})),Y=(0,i.v9)((function(e){return e.PatchSetsStore.metadata})),G=(0,i.v9)((function(e){return e.PatchSetsStore.status})),J=(0,o.useMemo)((function(){return(0,g.CN)(H,X,V)}),[H,X]),K=(0,S.mu)();function ee(e){t((0,d.br)(e))}var te=function(){t((0,d.BY)(w(w({},V),{},{page:1,offset:0})))};(0,o.useEffect)((function(){return K().then((function(e){var t;R(null==e||null===(t=e.smart_management)||void 0===t?void 0:t.is_entitled)})),function(){t((0,d.Im)()),t((0,v.L1)())}}),[]);var ae=(0,M.Z)(X),ne=ae.patchSetState,se=ae.setPatchSetState,re=ae.openPatchSetEditModal;(0,o.useEffect)((function(){!0===ne.shouldRefresh&&te()}),[ne.shouldRefresh]),(0,S.KW)((function(){I?(ee((0,y.PZ)(a.location.search)),z(!1)):(a.push((0,y.R_)(V)),t((0,d.BY)(V)))}),[V,I]),(0,C.r)(J,X,{endpoint:C.c.templates,queryParams:V,selectionDispatcher:d.GL});var oe=(0,S._f)(O.gs,ee,0),le=l().useMemo((function(){return(0,y.hO)(O.gs,Y.sort,0)}),[Y.sort]),ie=(0,S.SL)(Y.limit,ee),ce=(0,S._T)(ee),me=(0,N.c$)(["patch:*:*","patch:template:write"]).hasAccess,ue=(0,O.mN)(se,me),pe=(0,O.mR)(re,(function(e){U(!0),$(e)})),fe={items:[(0,p.Z)(ee,V.search,b.N.formatMessage(m.Z.labelsFiltersSearchTemplateTitle),b.N.formatMessage(m.Z.labelsFiltersSearchTemplatePlaceholder))]};return l().createElement(l().Fragment,null,l().createElement(D.Z,{templateName:null==Q?void 0:Q.displayName,isModalOpen:L,setModalOpen:U,onConfirm:function(){(0,h.f_)(Q.id).then((function(){t((0,v.wN)((0,Z.D$)(Q.displayName).success)),te()})).catch((function(){t((0,v.wN)((0,Z.D$)(Q.displayName).error))}))}}),l().createElement(u.Z,{headerOUIA:"advisories",title:l().createElement("span",null,b.N.formatMessage(m.Z.titlesTemplate),l().createElement(k.J,{id:"template-header-title-popover","aria-describedby":"template-header-title-popover","aria-labelledby":"template-header-title-popover",hasAutoWidth:!0,maxWidth:"320px",position:"right",enableFlip:!0,headerContent:b.N.formatMessage(m.Z.templatePopoverHeader),bodyContent:b.N.formatMessage(m.Z.templatePopoverBody)},l().createElement(E.ZP,{color:"var(--pf-global--secondary-color--100)",className:"pf-u-ml-sm",style:{verticalAlign:"0",fontSize:16,cursor:"pointer"}})))}),ne.isPatchSetWizardOpen&&l().createElement(P.Z,{systemsIDs:ne.systemsIDs,setBaselineState:se,patchSetID:ne.patchSetID}),l().createElement(r.Z,null,j?0!==J.length||G.isLoading?l().createElement(f.Z,{columns:O.gs,compact:!0,onSetPage:ie,onPerPageSelect:ce,onSort:oe,selectedRows:void 0,onSelect:void 0,sortBy:le,apply:ee,tableOUIA:"patch-set-table",paginationOUIA:"patch-set-pagination",store:{rows:J,metadata:Y,status:G,queryParams:V},actionsConfig:pe,filterConfig:fe,searchChipLabel:b.N.formatMessage(m.Z.labelsFiltersSearchTemplateTitle),ToolbarButton:ue,actionsToggle:me?null:O.Qk}):l().createElement(T.WX,{Button:ue}):l().createElement(T.DL,null)))}},20677:(e,t,a)=>{a.d(t,{Qk:()=>h,Z8:()=>d,gs:()=>p,mN:()=>u,mR:()=>f});var n=a(43297),s=a.n(n),r=a(47173),o=a(35224),l=a(7732),i=a(62165),c=a(32132),m=a(30893),u=function(e,t){return function(){return t?s().createElement(r.zx,{key:"createButton",onClick:function(){return e({isPatchSetWizardOpen:!0})}},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)):s().createElement(o.u,{content:"For editing access, contact your administrator."},s().createElement(r.zx,{key:"createButton",isAriaDisabled:!0},c.N.formatMessage(m.Z.labelsButtonCreateTemplate)))}},p=[{key:"name",title:"Name",transforms:[l.p]},{key:"systems",title:"Systems applied",transforms:[l.p]},{key:"last_edited",title:"Last edited",transforms:[l.p]},{key:"published",title:"Published",transforms:[l.p]},{key:"creator",title:"Created by",transforms:[l.p]}],f=function(e,t){return[{title:c.N.formatMessage(m.Z.labelsButtonEditTemplate),onClick:function(t,a,n){e(null==n?void 0:n.id)}},{title:c.N.formatMessage(m.Z.labelsButtonRemoveTemplate),onClick:function(e,a,n){t(n)}}]},d=function(e){return[{title:c.N.formatMessage(m.Z.textUnassignSystemsShortTitle),onClick:function(t,a,n){e(n)}}]},h=function(){return s().createElement(o.u,{content:"For editing access, contact your administrator."},s().createElement(r.zx,{isAriaDisabled:!0,variant:"plain","aria-label":"plain kebab"},s().createElement(i.ZP,null)))}},79875:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(29439),s=a(43297),r=a(5391);const o=function(e){var t=(0,s.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),a=(0,n.Z)(t,2),o=a[0],l=a[1];return{patchSetState:o,setPatchSetState:l,openPatchSetAssignWizard:function(t){l({isPatchSetWizardOpen:!0,systemsIDs:"string"==typeof t&&""!==t?[t]:(0,r.LI)(e),shouldRefresh:!1})},openUnassignSystemsModal:function(e){l({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openPatchSetEditModal:function(e){l({isPatchSetWizardOpen:!0,patchSetID:e})}}}}}]);