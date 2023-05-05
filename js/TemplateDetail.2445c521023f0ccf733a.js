"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9603],{21570:(e,t,n)=>{n.d(t,{L:()=>c});var a=n(70655),r=n(43297),s=n(73699),o=n(99355),l=n(17352),i=n(62472);const c=e=>{var{onSelect:t,ref:n,ouiaId:u,ouiaSafe:d,alignments:m,contextProps:p,menuAppendTo:f="inline",isFlipEnabled:g=!0,removeFindDomNode:h=!1,zIndex:y=9999}=e,b=(0,a.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return r.createElement(o.Dl.Provider,{value:Object.assign({onSelect:e=>t&&t(e),toggleTextClass:s.default.dropdownToggleText,toggleIconClass:s.default.dropdownToggleImage,toggleIndicatorClass:s.default.dropdownToggleIcon,menuClass:s.default.dropdownMenu,itemClass:s.default.dropdownMenuItem,toggleClass:s.default.dropdownToggle,baseClass:s.default.dropdown,baseComponent:"div",sectionClass:s.default.dropdownGroup,sectionTitleClass:s.default.dropdownGroupTitle,sectionComponent:"section",disabledClass:s.default.modifiers.disabled,plainTextClass:s.default.modifiers.text,ouiaId:(0,i.Z1)(c.displayName,u),ouiaSafe:d,ouiaComponentType:c.displayName,alignments:m},p)},r.createElement(l.R,Object.assign({menuAppendTo:f,isFlipEnabled:g,removeFindDomNode:h,zIndex:y},b)))};c.displayName="Dropdown"},39591:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(85893),r=n(43297);const s=function(e){var t=e.component,n=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n}(e,["component"]);return(0,r.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{children:"Unable to load inventory component"}),(0,a.jsxs)("h2",{children:["Failed to load ",t]}),(0,a.jsx)("code",{children:"More info can be found in browser console output."})]})}},33739:(e,t,n)=>{n.d(t,{Z:()=>b});var a=n(85893),r=n(43297),s=n.n(r),o=n(45697),l=n.n(o),i=n(59823),c=n(96620),u=n(28216),d=n(21602),m=n(39591),p=n(94184),f=n.n(p),g=function(){return g=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},g.apply(this,arguments)},h=function(e){var t=(0,c.useHistory)(),n=(0,u.oR)(),s=e.component;return(0,a.jsx)(s,g({className:f()(e.className,"inventory")},{children:(0,a.jsx)(r.Suspense,g({fallback:e.fallback},{children:(0,a.jsx)(i.ScalprumComponent,g({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,a.jsx)(m.Z,g({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};h.propTypes={fallback:l().node,innerRef:l().object,component:l().string,className:l().string};var y=s().forwardRef((function(e,t){return(0,a.jsx)(h,g({innerRef:t},e))}));y.propTypes={fallback:l().node,component:l().string,className:l().string},y.defaultProps={fallback:(0,a.jsx)(d.Bullseye,g({className:"pf-u-p-lg"},{children:(0,a.jsx)(d.Spinner,{size:"xl"})})),component:"section"};const b=y},97648:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(29439),r=n(43297),s=n.n(r),o=n(45697),l=n.n(o),i=n(47173),c=n(93149),u=n(80236),d=n(30893),m=n(32132),p=function(e){var t=e.isModalOpen,n=e.setModalOpen,o=e.templateName,l=e.onConfirm,p=(0,r.useState)(!1),f=(0,a.Z)(p,2),g=f[0],h=f[1],y=function(){n(!1),h(!1)};return s().createElement(u.u,{title:m.N.formatMessage(d.Z.titlesTemplateDeleteModalTitle),titleIconVariant:"warning",isOpen:t,onClose:y,variant:"small",actions:[s().createElement(i.zx,{key:"confirm",variant:"danger",onClick:function(){y(),l()},isDisabled:!g},m.N.formatMessage(d.Z.labelsDelete)),s().createElement(i.zx,{key:"cancel",variant:"link",onClick:y},m.N.formatMessage(d.Z.labelsCancel))]},m.N.formatMessage(d.Z.titlesTemplateDeleteModalText,{templateName:o,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s().createElement("b",null,t)}}),s().createElement(c.X,{className:"pf-u-mt-md",isChecked:g,checked:g,onChange:function(e){return h(e)},label:m.N.formatMessage(d.Z.titlesTemplateDeleteModalCheckbox),id:"template-delete-modal-checkbox"}))};p.propTypes={isModalOpen:l().bool,setModalOpen:l().func,templateName:l().string,onConfirm:l().func};const f=p},98333:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(29439),r=n(43297),s=n.n(r),o=n(45697),l=n.n(o),i=n(80236),c=n(47173),u=n(50693),d=n(50383),m=n(74806),p=n(30893),f=n(15861),g=n(64687),h=n.n(g),y=n(28216),b=n(83215),v=n(11220),E=n(20677),O=n(16475),w=function(e,t,n){return s().createElement(O.P,null,n.formatMessage(p.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return s().createElement("b",null,t)}}))},S=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,o=e.setUnassignSystemsModalOpen,l=e.intl,m=n.systemsIDs,g=n.isUnassignSystemsModalOpen,O=(0,r.useState)([]),S=(0,a.Z)(O,2),D=S[0],T=S[1],P=(0,r.useState)(!0),Z=(0,a.Z)(P,2),C=Z[0],j=Z[1],M=function(e){o({isUnassignSystemsModalOpen:!g,systemsIDs:[],shouldRefresh:e})},I=function(){M(!1)},k=function(e,t){var n=(0,y.I0)(),a=function(){var a=(0,f.Z)(h().mark((function a(){return h().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,v.C9)({inventory_ids:t});case 2:200===a.sent.status&&(e(!0),n((0,b.wN)((0,E.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}(M,D);(0,r.useEffect)((function(){j(!0),function(e){return(0,v.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(m).then((function(e){T(e),j(!1)}))}),[m]);var x=m.length-D.length;return s().createElement(i.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:l.formatMessage(p.Z.textUnassignSystemsTitle),onClose:I,titleIconVariant:"warning",actions:[s().createElement(c.zx,{key:"confirm",variant:"danger",onClick:k,isDisabled:C||0===D.length},l.formatMessage(p.Z.labelsRemove)),s().createElement(c.zx,{key:"cancel",variant:"link",onClick:I},l.formatMessage(p.Z.labelsCancel))]},s().createElement(u.r,{hasGutter:!0},C?s().createElement(d.O,null):s().createElement(r.Fragment,null,D.length>0&&w("textUnassignSystemsStatement",D.length,l),x>0&&w("textUnassignSystemsWarning",x,l))))};S.propTypes={intl:l().any,setUnassignSystemsModalOpen:l().func,unassignSystemsModalState:l().object};const D=(0,m.ZP)(S)},99910:(e,t,n)=>{n.r(t),n.d(t,{default:()=>G});var a=n(4942),r=n(29439),s=n(14748),o=n(43297),l=n.n(o),i=n(86896),c=n(28216),u=n(96620),d=n(30893),m=n(49642),p=n(14240),f=n(91607),g=n(9557),h=n(52643),y=n(21570),b=n(84457),v=n(99355),E=n(75728),O=n(50383),w=n(2372),S=n(68340),D=n(68774),T=n(97648),P=n(11220),Z=n(83215),C=n(13784),j=n(52579),M=n(5391),I=n(45329),k=n(20677),x=n(95249),N=n(98333),_=n(75863),R=n(33739),L=n(42154),U=n(97779),F=n(7322),A=n(5747),z=n(58684),B=n(35240);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function W(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const G=function(){var e=(0,i.Z)(),t=(0,c.I0)(),n=(0,u.useHistory)(),a=(0,c.oR)(),H=(0,o.useRef)(null),G=n.location.pathname.split("/")[2],$=l().useState(!0),q=(0,r.Z)($,2),K=q[0],V=q[1],Y=(0,o.useState)(!1),J=(0,r.Z)(Y,2),X=J[0],Q=J[1],ee=(0,o.useState)(!1),te=(0,r.Z)(ee,2),ne=te[0],ae=te[1],re=(0,o.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,systemsIDs:[],shouldRefresh:!1}),se=(0,r.Z)(re,2),oe=se[0],le=se[1],ie=(0,c.v9)((function(e){return e.PatchSetDetailStore})),ce=(0,c.v9)((function(e){var t,n,a=e.PatchSetDetailStore;return null===(t=null==a||null===(n=a.status)||void 0===n?void 0:n.isLoading)||void 0===t||t})),ue=(0,c.v9)((function(e){return e.PatchSetDetailStore.status})),de=(0,c.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),me=(0,c.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),pe=(0,c.v9)((function(e){var t=e.PatchSetDetailSystemsStore;return(null==t?void 0:t.queryParams)||{}})),fe=(0,c.v9)((function(e){var t=e.PatchSetDetailSystemsStore;return null==t?void 0:t.templateHasSystemsLoading})),ge=(0,c.v9)((function(e){var t=e.PatchSetDetailSystemsStore;return null==t?void 0:t.templateHasSystems})),he=(0,x.c$)(["patch:*:*","patch:template:write"]).hasAccess,ye=ie.data.attributes.name,be=function(e){t((0,g.JP)(e))},ve=function(){le(W(W({},oe),{},{isPatchSetWizardOpen:!0}))};(0,o.useEffect)((function(){return t((0,g.ve)({id:G,limit:1})),function(){t((0,g.pV)())}}),[]),(0,o.useEffect)((function(){var e;!0===oe.shouldRefresh&&(null==H||null===(e=H.current)||void 0===e||e.onRefreshData({timestamp:Date.now()}),t((0,g.Ku)(G)),le(W(W({},oe),{},{shouldRefresh:!1})))}),[oe.shouldRefresh]),(0,f.KW)((function(){K?(be((0,M.PZ)(n.location.search)),t((0,g.Ku)(G)),V(!1)):n.push((0,M.R_)(pe))}),[pe,K]);var Ee=function(e){le(W(W({},oe),{},{isUnassignSystemsModalOpen:!0,systemsIDs:[e.id]}))},Oe=(0,f.U)(P.TH,be,{id:G},n,(function(e){t((0,g.T5)(e))}),(function(e){t((0,g.vl)(e))})),we=[l().createElement(b.h,{key:"edit-patch-set",component:"button",onClick:function(){return ve()}},e.formatMessage(d.Z.labelsButtonEditTemplate)),l().createElement(b.h,{key:"delete-patch-set",component:"button",onClick:function(){return ae(!0)}},e.formatMessage(d.Z.labelsButtonRemoveTemplate))],Se=(0,M.PZ)(n.location.search),De=pe.systemProfile,Te=pe.selectedTags,Pe=pe.filter,Ze=pe.search,Ce=pe.page,je=pe.perPage,Me=pe.sort;return null!=ue&&ue.hasError?l().createElement(j.Z,{code:null==ue?void 0:ue.code}):l().createElement(o.Fragment,null,l().createElement(T.Z,{templateName:ye,isModalOpen:ne,setModalOpen:ae,onConfirm:function(){(0,P.f_)(G).then((function(){t((0,Z.wN)((0,C.D$)(ye).success)),n.push("/templates")})).catch((function(){t((0,Z.wN)((0,C.D$)(ye).error))}))}}),oe.isPatchSetWizardOpen&&l().createElement(I.Z,{systemsIDs:oe.systemsIDs,setBaselineState:le,patchSetID:G}),l().createElement(N.Z,{unassignSystemsModalState:oe,setUnassignSystemsModalOpen:le}),l().createElement(m.Z,{title:ce?l().createElement(O.O,{style:{width:300}}):ye,headerOUIA:"template-details",breadcrumbs:[{title:e.formatMessage(d.Z.templateDetailHeaderBreadcrumb),to:"/templates",isActive:!1},{title:ce?l().createElement(O.O,{style:{width:150}}):ye,isActive:!0}],actions:l().createElement(y.L,{position:v.ir.right,onSelect:function(){Q(!1),document.getElementById("patch-set-detail-header-kebab").focus()},toggle:l().createElement(E.Z,{id:"patch-set-detail-header-kebab",className:"pf-u-mr-xl",onToggle:function(e){return Q(e)},style:{minWidth:150}},e.formatMessage(d.Z.labelsActions)),isOpen:X,dropdownItems:we})},l().createElement("table",{border:"0",style:{marginTop:8}},l().createElement("tbody",null,l().createElement("tr",null,l().createElement("td",{style:{width:300}},e.formatMessage(d.Z.templateDetailTableDescription)),l().createElement("td",null,ce?l().createElement(O.O,{style:{width:300}}):ie.data.attributes.description||e.formatMessage(d.Z.titlesTemplateNoDescription))),l().createElement("tr",null,l().createElement("td",null,e.formatMessage(d.Z.templateDetailTableUpToDate)),l().createElement("td",null,ce?l().createElement(O.O,{style:{width:100}}):(0,B.Un)(ie.data.attributes.config.to_time))),l().createElement("tr",null,l().createElement("td",null,e.formatMessage(d.Z.templateDetailTableCreatedBy)),l().createElement("td",null,ce?l().createElement(O.O,{style:{width:100}}):ie.data.attributes.creator)),l().createElement("tr",null,l().createElement("td",null,e.formatMessage(d.Z.templateDetailTablePublished)),l().createElement("td",null,ce?l().createElement(O.O,{style:{width:100}}):(0,B.Un)(ie.data.attributes.published))),l().createElement("tr",null,l().createElement("td",null,e.formatMessage(d.Z.templateDetailTableLastEdited)),l().createElement("td",null,ce?l().createElement(O.O,{style:{width:100}}):(0,B.Un)(ie.data.attributes.last_edited)))))),l().createElement(s.Z,null,l().createElement(D.D,null,l().createElement(S.x,{component:"h2",className:"pf-u-mb-md"},e.formatMessage(d.Z.templateDetailTableTitle))),fe?l().createElement(h.b,null,l().createElement(w.$,{size:"xl"})):ge?de.hasError?l().createElement(j.Z,{code:de.code}):l().createElement(R.Z,{ref:H,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0},columns:function(e){return(0,L.yF)(e)},showTags:!0,onLoad:function(e){var t=e.mergeWithEntities;a.replaceReducer((0,U.UY)(W(W({},F.E),t((0,A.Kq)((0,z.Fs)(!0),A.lu),(0,M.fm)({page:Ce,perPage:je,sort:Me,search:Ze},Se)))))},customFilters:{patchParams:{filter:Pe,systemProfile:De,selectedTags:Te}},paginationProps:{isDisabled:0===me},getEntities:Oe,tableProps:{canSelectAll:!0,variant:_.B.compact,className:"patchCompactInventory",isStickyHeader:!0,actionResolver:function(){return he?(0,k.Z8)(Ee):[]}},hasCheckbox:!1}):l().createElement(p.$6,{onButtonClick:function(){return ve()}})))}},5747:(e,t,n)=>{n.d(t,{G:()=>d,Kq:()=>g,OC:()=>m,PD:()=>f,lu:()=>p});var a=n(29439),r=n(4942),s=n(36248),o=n(48881),l=n(22789);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},d=function(e,t){return t.loaded?c(c({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,s.Yk)(t.rows,t.selectedRows)}):t},m=function(e,t,n){if("SELECT_ENTITY"===n){var r=t.packageEvraCache;void 0===r&&(r={},t.rows.forEach((function(e){return r[e.id]=e.available_evra})),t.packageEvraCache=r),t.selectedRows=t.selectedRows?Object.fromEntries(Object.entries(t.selectedRows).map((function(e){var t=(0,a.Z)(e,2),n=t[0],s=t[1];return!0===s?[n,r[n]]:[n,s]}))):t.selectedRows}return"LOAD_ENTITIES_FULFILLED"===n&&(t.packageEvraCache=void 0),t.loaded?c(c({},t),{},{columns:e,rows:(0,s.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return t.loaded?c(c({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,s.dn)(t.rows,t.selectedRows)}):t},f=function(e,t){return t.loaded?c(c({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,s.mf)(t.rows,t.selectedRows)}):t},g=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1?arguments[1]:void 0,r=c({},n);switch(a.type){case"LOAD_ENTITIES_FULFILLED":return t(e,r,a.type);case"LOAD_ENTITIES_PENDING":return r.status={isLoading:!0,hasError:!1},r;case"LOAD_ENTITIES_REJECTED":return(0,o.PW)(r,a);case"SELECT_ENTITY":var s=(0,o.hd)(r,a);return t(e,s,a.type);case l.sq:return u;default:return n}}}}}]);
//# sourceMappingURL=../sourcemaps/TemplateDetail.4f4c5441466f23513beab56494a52e27.js.map