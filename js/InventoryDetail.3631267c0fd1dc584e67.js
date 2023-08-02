"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[184],{39591:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(85893),r=n(43297);const a=function(e){var t=e.component,n=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}(e,["component"]);return(0,r.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Unable to load inventory component"}),(0,s.jsxs)("h2",{children:["Failed to load ",t]}),(0,s.jsx)("code",{children:"More info can be found in browser console output."})]})}},72126:(e,t,n)=>{n.d(t,{Z:()=>m});var s=n(85893),r=n(43297),a=n.n(r),o=n(62012),c=n(55140),l=function(){return l=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},l.apply(this,arguments)},i=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n},u=function(e){var t=e.Component,n=i(e,["Component"]),r=o.useHistory();return(0,s.jsx)(t,l({history:r},n))},p=function(e){var t=e.Component,n=i(e,["Component"]),r=(0,c.Z)().chromeHistory;return(0,s.jsx)(t,l({history:r},n))};const m=a().forwardRef((function(e,t){var n=e.Component,a=i(e,["Component"]),c=(0,r.useMemo)((function(){return"function"==typeof o.useHistory?u:p}),[n,a]);return(0,s.jsx)(c,l({innerRef:t,Component:n},a))}))},97804:(e,t,n)=>{n.d(t,{Z:()=>k});var s=n(43297),r=n.n(s),a=n(45697),o=n.n(a),c=n(45329),l=n(98333),i=n(4942),u=n(29439),p=n(80236),m=n(47173),f=n(49739),y=n(83826),d=n(83115),h=n(74806),S=n(93665),g=n(30893),v=n(11220),O=n(93942),b=n(83215),j=n(20677),P=n(5391);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.patchSetState,n=void 0===t?{}:t,a=e.setPatchSetState,o=e.intl,c=(0,O.I0)(),l=n.systemsIDs,i=n.isAssignSystemsModalOpen,h=(0,s.useState)([]),E=(0,u.Z)(h,2),x=E[0],M=E[1],D=(0,s.useState)({}),k=(0,u.Z)(D,2),w=k[0],I=k[1],C=function(){a({isAssignSystemsModalOpen:!i,systemsIDs:[]}),M([]),I({})};return r().createElement(p.u,{variant:"small",isOpen:n.isAssignSystemsModalOpen,title:o.formatMessage(g.Z.templateApply),onClose:C,actions:[r().createElement(m.zx,{key:"confirm",isDisabled:!(null!=w&&w.id),onClick:function(){(0,v.CT)({inventory_ids:l},w.id).then((function(){c((0,b.wN)((0,j.og)(Object.keys(l).length).success)),a(Z(Z({},n),{},{shouldRefresh:!0,isAssignSystemsModalOpen:!1,systemsIDs:[]}))})),C()}},o.formatMessage(g.Z.templateApply)),r().createElement(m.zx,{key:"cancel",variant:"link",onClick:C},o.formatMessage(g.Z.labelsCancel))]},r().createElement(f.K,{hasGutter:!0},r().createElement(y.v,null,o.formatMessage(g.Z.templateSelect,{systemCount:Object.keys(l).length})),r().createElement(y.v,null,r().createElement(d.l,null,r().createElement(S.Z,{setSelectedPatchSet:M,selectedSets:x,selectCallback:I}))),r().createElement(y.v,null,o.formatMessage(g.Z.templateOr)),r().createElement(y.v,null,r().createElement(m.zx,{variant:"secondary",onClick:function(){a(Z(Z({},n),{},{isPatchSetWizardOpen:!0,systemsIDs:(0,P.LI)(l),shouldRefresh:!1})),M([]),I({})}},o.formatMessage(g.Z.templateCreate)))))};x.propTypes={intl:o().any,setPatchSetState:o().func,patchSetState:o().object};const M=(0,h.ZP)(x);var D=function(e){var t=e.patchSetState,n=e.setPatchSetState;return r().createElement(r().Fragment,null,t.isUnassignSystemsModalOpen&&r().createElement(l.Z,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),r().createElement(M,{patchSetState:t,setPatchSetState:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&r().createElement(c.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};D.propTypes={patchSetState:o().object,setPatchSetState:o().func};const k=D},98333:(e,t,n)=>{n.d(t,{Z:()=>E});var s=n(29439),r=n(43297),a=n.n(r),o=n(45697),c=n.n(o),l=n(80236),i=n(47173),u=n(50693),p=n(50383),m=n(74806),f=n(30893),y=n(15861),d=n(64687),h=n.n(d),S=n(93942),g=n(83215),v=n(11220),O=n(20677),b=n(16475),j=function(e,t,n){return a().createElement(b.P,null,n.formatMessage(f.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a().createElement("b",null,t)}}))},P=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,o=e.setUnassignSystemsModalOpen,c=e.intl,m=n.systemsIDs,d=n.isUnassignSystemsModalOpen,b=(0,r.useState)([]),P=(0,s.Z)(b,2),E=P[0],Z=P[1],x=(0,r.useState)(!0),M=(0,s.Z)(x,2),D=M[0],k=M[1],w=function(e){o({isUnassignSystemsModalOpen:!d,systemsIDs:[],shouldRefresh:e})},I=function(){w(!1)},C=function(e,t){var n=(0,S.I0)(),s=function(){var s=(0,y.Z)(h().mark((function s(){return h().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,v.C9)({inventory_ids:t});case 2:200===s.sent.status&&(e(!0),n((0,g.wN)((0,O.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return s}(w,E);(0,r.useEffect)((function(){k(!0),function(e){return(0,v.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(m).then((function(e){Z(e),k(!1)}))}),[m]);var R=m.length-E.length;return a().createElement(l.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:c.formatMessage(f.Z.textUnassignSystemsTitle),onClose:I,titleIconVariant:"warning",actions:[a().createElement(i.zx,{key:"confirm",variant:"danger",onClick:C,isDisabled:D||0===E.length},c.formatMessage(f.Z.labelsRemove)),a().createElement(i.zx,{key:"cancel",variant:"link",onClick:I},c.formatMessage(f.Z.labelsCancel))]},a().createElement(u.r,{hasGutter:!0},D?a().createElement(p.O,null):a().createElement(r.Fragment,null,E.length>0&&j("textUnassignSystemsStatement",E.length,c),R>0&&j("textUnassignSystemsWarning",R,c))))};P.propTypes={intl:c().any,setUnassignSystemsModalOpen:c().func,unassignSystemsModalState:c().object};const E=(0,m.ZP)(P)},13454:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var s=n(4942),r=n(43297),a=n.n(r),o=n(14748),c=n(93942),l=n(97779),i=n(49642),u=n(7322),p=n(92544),m=n(32132),f=n(30893),y=n(85893),d=n(45697),h=n.n(d),S=n(59823),g=n(21602),v=n(39591),O=n(94184),b=n.n(O),j=n(72126),P=function(){return P=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},P.apply(this,arguments)},E=function(e){var t=(0,c.oR)(),n=e.component;return(0,y.jsx)(n,P({className:b()(e.className,"inventory")},{children:(0,y.jsx)(r.Suspense,P({fallback:e.fallback},{children:(0,y.jsx)(S.ScalprumComponent,P({history:e.history,store:t,appName:"inventory",module:"./DetailWrapper",scope:"inventory",ErrorComponent:(0,y.jsx)(v.Z,P({component:"InventoryDetailHead"},e)),ref:e.innerRef},e))}))}))};E.propTypes={fallback:h().node,innerRef:h().object,component:h().string,className:h().string,history:h().object};var Z=a().forwardRef((function(e,t){return(0,y.jsx)(E,P({innerRef:t},e))}));Z.propTypes={fallback:h().node,component:h().string,className:h().string},Z.defaultProps={fallback:(0,y.jsx)(g.Bullseye,P({className:"pf-u-p-lg"},{children:(0,y.jsx)(g.Spinner,{size:"xl"})})),component:"section"};const x=a().forwardRef((function(e,t){return(0,y.jsx)(j.Z,P({innerRef:t,Component:Z},e))}));var M=function(){return M=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},M.apply(this,arguments)},D=function(e){var t=(0,c.oR)(),n=e.component;return(0,y.jsx)(n,M({className:b()(e.className,"inventory")},{children:(0,y.jsx)(r.Suspense,M({fallback:e.fallback},{children:(0,y.jsx)(S.ScalprumComponent,M({history:e.history,store:t,appName:"inventory",module:"./InventoryDetailHead",scope:"inventory",ErrorComponent:(0,y.jsx)(v.Z,M({component:"InventoryDetailHead"},e)),ref:e.innerRef},e))}))}))};D.propTypes={fallback:h().node,innerRef:h().object,component:h().string,className:h().string,history:h().object};var k=a().forwardRef((function(e,t){return(0,y.jsx)(D,M({innerProps:t},e))}));k.propTypes={fallback:h().node,component:h().string,className:h().string},k.defaultProps={fallback:(0,y.jsx)(g.Bullseye,M({className:"pf-u-p-lg"},{children:(0,y.jsx)(g.Spinner,{size:"xl"})})),component:"section"};const w=a().forwardRef((function(e,t){return(0,y.jsx)(j.Z,M({innerRef:t,Component:k},e))}));var I=n(41448),C=n(50693),R=n(16475),N=n(68774),U=n(68340),A=n(9557),T=n(83215),z=n(97804),W=n(79875),H=n(62012),B=n(79577),L=n(55140),F=n(13784),_=n(92397);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const q=function(){var e=(0,H.useParams)().inventoryId,t=(0,c.oR)(),n=(0,c.I0)(),y=(0,c.v9)((function(e){return e.SystemDetailStore})),d=y.hasThirdPartyRepo,h=y.patchSetName,S=y.patchSetId,g=(0,c.v9)((function(e){var t,n=e.entityDetails;return null!==(t=null==n?void 0:n.entity)&&void 0!==t?t:{}})).display_name,v=(0,W.Z)(),O=v.patchSetState,b=v.setPatchSetState,j=v.openAssignSystemsModal,P=v.openUnassignSystemsModal;(0,r.useEffect)((function(){return function(){n((0,T.L1)())}}),[]),(0,r.useEffect)((function(){n((0,A.Eh)(e))}),[O.shouldRefresh]);var E=(0,L.Z)();return(0,r.useEffect)((function(){g&&E.updateDocumentTitle("".concat(g," - ").concat(m.N.formatMessage(f.Z.titlesSystems),"\n        ").concat(F.JD))}),[E,g]),a().createElement(x,{onLoad:function(e){var n=e.mergeWithDetail;t.replaceReducer((0,l.UY)(J(J({},u.E),n(p.J))))},inventoryId:e},a().createElement(z.Z,{patchSetState:O,setPatchSetState:b}),a().createElement(i.Z,{title:"",headerOUIA:"inventory-details",breadcrumbs:[{title:m.N.formatMessage(f.Z.titlesPatchSystems),to:"/systems",isActive:!1},g&&{title:g,isActive:!0}]},a().createElement(w,{hideBack:!0,showTags:!0,inventoryId:e,actions:[{title:m.N.formatMessage(f.Z.titlesTemplateAssign),key:"assign-to-template",onClick:function(){return j((0,s.Z)({},e,!0))}},{title:m.N.formatMessage(f.Z.titlesTemplateRemoveMultipleButton),key:"remove-from-template",isDisabled:!h,onClick:function(){return P([e])}}],appList:[]},a().createElement(C.r,null,h&&a().createElement(R.P,null,a().createElement(N.D,null,a().createElement(U.x,null,m.N.formatMessage(f.Z.labelsColumnsTemplate),":",a().createElement(_.Z,{to:"/templates/".concat(S),className:"pf-u-ml-xs"},h)))),a().createElement(R.P,null,d&&a().createElement(I.b,{className:"pf-u-mt-md",isInline:!0,variant:"info",title:m.N.formatMessage(f.Z.textThirdPartyInfo)}))))),a().createElement(o.ZP,null,a().createElement(B.Z,{inventoryId:e})))}},79875:(e,t,n)=>{n.d(t,{Z:()=>o});var s=n(29439),r=n(43297),a=n(5391);const o=function(e){var t=(0,r.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,isAssignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),n=(0,s.Z)(t,2),o=n[0],c=n[1];return{patchSetState:o,setPatchSetState:c,openPatchSetAssignWizard:function(t){c({isPatchSetWizardOpen:!0,systemsIDs:"string"==typeof t&&""!==t?[t]:(0,a.LI)(e),shouldRefresh:!1})},openUnassignSystemsModal:function(e){c({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openAssignSystemsModal:function(e){c({isAssignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openPatchSetEditModal:function(e){c({isPatchSetWizardOpen:!0,patchSetID:e})}}}}}]);
//# sourceMappingURL=../sourcemaps/InventoryDetail.dcbf8019fc5038f5d694c99a560852a8.js.map