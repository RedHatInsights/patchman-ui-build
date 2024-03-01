"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[184],{39591:(e,t,n)=>{n.d(t,{Z:()=>a});var s=n(85893),r=n(43297);const a=function(e){var t=e.component,n=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}(e,["component"]);return(0,r.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Unable to load inventory component"}),(0,s.jsxs)("h2",{children:["Failed to load ",t]}),(0,s.jsx)("code",{children:"More info can be found in browser console output."})]})}},72126:(e,t,n)=>{n.d(t,{Z:()=>p});var s=n(85893),r=n(43297),a=n.n(r),o=n(62012),l=n(55140),c=function(){return c=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},c.apply(this,arguments)},i=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n},u=function(e){var t=e.Component,n=i(e,["Component"]),r=o.useHistory();return(0,s.jsx)(t,c({history:r},n))},m=function(e){var t=e.Component,n=i(e,["Component"]),r=(0,l.Z)().chromeHistory;return(0,s.jsx)(t,c({history:r},n))};const p=a().forwardRef((function(e,t){var n=e.Component,a=i(e,["Component"]),l=(0,r.useMemo)((function(){return"function"==typeof o.useHistory?u:m}),[n,a]);return(0,s.jsx)(l,c({innerRef:t,Component:n},a))}))},97804:(e,t,n)=>{n.d(t,{Z:()=>D});var s=n(43297),r=n.n(s),a=n(45697),o=n.n(a),l=n(63135),c=n(44118),i=n(4942),u=n(29439),m=n(80236),p=n(47173),f=n(49739),y=n(83826),d=n(83115),h=n(2372),g=n(74806),v=n(93665),b=n(30893),S=n(11220),O=n(93942),j=n(83215),E=n(20677),P=n(5391),Z=n(28481);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){var t=e.patchSetState,n=void 0===t?{}:t,a=e.setPatchSetState,o=e.intl,l=(0,O.I0)(),c=n.systemsIDs,i=n.isAssignSystemsModalOpen,g=(0,s.useState)([]),w=(0,u.Z)(g,2),x=w[0],M=w[1],C=(0,s.useState)({}),D=(0,u.Z)(C,2),I=D[0],R=D[1],N=(0,s.useState)([]),T=(0,u.Z)(N,2),A=T[0],U=T[1],H=(0,s.useState)(!0),z=(0,u.Z)(H,2),_=z[0],F=z[1],B=function(){a({isAssignSystemsModalOpen:!i,systemsIDs:[]}),M([]),R({})};(0,s.useEffect)((function(){c&&(F(!0),(0,Z.ol)(Object.keys(c)).then((function(e){U(e),F(!1)})))}),[c]);var W=Object.keys(c).length-A.length;return r().createElement(m.u,{variant:"small",isOpen:n.isAssignSystemsModalOpen,title:o.formatMessage(b.Z.templateApply),onClose:B,actions:[r().createElement(p.zx,{key:"confirm",isDisabled:!(null!=I&&I.id),onClick:function(){var e=A.reduce((function(e,t){return e[t]=!0,e}),{});(0,S.CT)({inventory_ids:c},I.id).then((function(){l((0,j.wN)((0,E.og)(Object.keys(e).length).success)),a(k(k({},n),{},{shouldRefresh:!0,isAssignSystemsModalOpen:!1,systemsIDs:[]}))})).catch((function(){l((0,j.wN)((0,E.og)().failure))})),B()}},o.formatMessage(b.Z.templateApply)),r().createElement(p.zx,{key:"cancel",variant:"link",onClick:B},o.formatMessage(b.Z.labelsCancel))],"data-testid":"assign-systems-modal"},_?r().createElement(h.$,null):0===A.length?1===A.length?"Template cannot be applied to the selected system.":"Template cannot be applied to any of the selected systems.":r().createElement(f.K,{hasGutter:!0},r().createElement(y.v,null,o.formatMessage(b.Z.templateSelect,{systemCount:A.length,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement("b",null,t)}})),W>0&&r().createElement(y.v,null,o.formatMessage(b.Z.templateSelectSatellite,{systemCount:W,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement("b",null,t)}})),r().createElement(y.v,null,r().createElement(d.l,null,r().createElement(v.Z,{setSelectedPatchSet:M,selectedSets:x,selectCallback:R}))),r().createElement(y.v,null,o.formatMessage(b.Z.templateOr)),r().createElement(y.v,null,r().createElement(p.zx,{variant:"secondary",onClick:function(){a(k(k({},n),{},{isPatchSetWizardOpen:!0,systemsIDs:(0,P.LI)(c),shouldRefresh:!1})),M([]),R({}),F(!0)}},o.formatMessage(b.Z.templateCreate)))))};x.propTypes={intl:o().any,setPatchSetState:o().func,patchSetState:o().object};const M=(0,g.ZP)(x);var C=function(e){var t=e.patchSetState,n=e.setPatchSetState;return r().createElement(r().Fragment,null,t.isUnassignSystemsModalOpen&&r().createElement(c.Z,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),r().createElement(M,{patchSetState:t,setPatchSetState:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&r().createElement(l.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};C.propTypes={patchSetState:o().object,setPatchSetState:o().func};const D=C},28481:(e,t,n)=>{n.d(t,{Hd:()=>u,P4:()=>c,ol:()=>i});var s=n(43297),r=n.n(s),a=n(16475),o=n(30893),l=n(11220),c=function(e){return(0,l.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){var n;return null==t||null===(n=t.data)||void 0===n?void 0:n.some((function(t){return t.id===e}))}))}))},i=function(e){return(0,l.dk)("/ids/systems",{limit:-1,"filter[satellite_managed]":"false",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){var n;return null==t||null===(n=t.data)||void 0===n?void 0:n.some((function(t){return t.id===e}))}))}))},u=function(e,t,n){return r().createElement(a.P,null,n.formatMessage(o.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement("b",null,t)}}))}},44118:(e,t,n)=>{n.d(t,{Z:()=>E});var s=n(29439),r=n(43297),a=n.n(r),o=n(45697),l=n.n(o),c=n(80236),i=n(47173),u=n(50693),m=n(50383),p=n(74806),f=n(30893),y=n(15861),d=n(64687),h=n.n(d),g=n(93942),v=n(83215),b=n(11220),S=n(20677),O=n(28481),j=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,o=e.setUnassignSystemsModalOpen,l=e.intl,p=n.systemsIDs,d=n.isUnassignSystemsModalOpen,j=(0,r.useState)([]),E=(0,s.Z)(j,2),P=E[0],Z=E[1],w=(0,r.useState)(!0),k=(0,s.Z)(w,2),x=k[0],M=k[1],C=function(e){o({isUnassignSystemsModalOpen:!d,systemsIDs:[],shouldRefresh:e})},D=function(){C(!1)},I=function(e,t){var n=(0,g.I0)(),s=function(){var s=(0,y.Z)(h().mark((function s(){var r;return h().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,b.C9)({inventory_ids:t});case 2:r=s.sent,e(!0),200===r.status?n((0,v.wN)((0,S.$z)((null==t?void 0:t.length)||0).success)):n((0,v.wN)((0,S.$z)().failure));case 5:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return s}(C,P);(0,r.useEffect)((function(){M(!0),(0,O.P4)(p).then((function(e){Z(e),M(!1)}))}),[p]);var R=p.length-P.length;return a().createElement(c.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:l.formatMessage(f.Z.textUnassignSystemsTitle),onClose:D,titleIconVariant:"warning",actions:[a().createElement(i.zx,{key:"confirm",variant:"danger",onClick:I,isDisabled:x||0===P.length},l.formatMessage(f.Z.labelsRemove)),a().createElement(i.zx,{key:"cancel",variant:"link",onClick:D},l.formatMessage(f.Z.labelsCancel))],"data-testid":"unassign-systems-modal"},a().createElement(u.r,{hasGutter:!0},x?a().createElement(m.O,null):a().createElement(r.Fragment,null,0===P.length&&(0,O.Hd)("textUnassignSystemsNoAssignedSystems",P.length,l),P.length>0&&(0,O.Hd)("textUnassignSystemsStatement",P.length,l),P.length>0&&R>0&&(0,O.Hd)("textUnassignSystemsWarning",R,l))))};j.propTypes={intl:l().any,setUnassignSystemsModalOpen:l().func,unassignSystemsModalState:l().object};const E=(0,p.ZP)(j)},13454:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var s=n(4942),r=n(43297),a=n.n(r),o=n(14748),l=n(93942),c=n(97779),i=n(49642),u=n(7322),m=n(92544),p=n(32132),f=n(30893),y=n(85893),d=n(45697),h=n.n(d),g=n(59823),v=n(8213),b=n(39591),S=n(94184),O=n.n(S),j=n(72126),E=function(){return E=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},E.apply(this,arguments)},P=function(e){var t=(0,l.oR)(),n=e.component;return(0,y.jsx)(n,E({className:O()(e.className,"inventory")},{children:(0,y.jsx)(r.Suspense,E({fallback:e.fallback},{children:(0,y.jsx)(g.ScalprumComponent,E({history:e.history,store:t,appName:"inventory",module:"./DetailWrapper",scope:"inventory",ErrorComponent:(0,y.jsx)(b.Z,E({component:"InventoryDetailHead"},e)),ref:e.innerRef},e))}))}))};P.propTypes={fallback:h().node,innerRef:h().object,component:h().string,className:h().string,history:h().object};var Z=a().forwardRef((function(e,t){return(0,y.jsx)(P,E({innerRef:t},e))}));Z.propTypes={fallback:h().node,component:h().string,className:h().string},Z.defaultProps={fallback:(0,y.jsx)(v.Bullseye,E({className:"pf-u-p-lg"},{children:(0,y.jsx)(v.Spinner,{size:"xl"})})),component:"section"};const w=a().forwardRef((function(e,t){return(0,y.jsx)(j.Z,E({innerRef:t,Component:Z},e))}));var k=function(){return k=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},k.apply(this,arguments)},x=function(e){var t=(0,l.oR)(),n=e.component;return(0,y.jsx)(n,k({className:O()(e.className,"inventory")},{children:(0,y.jsx)(r.Suspense,k({fallback:e.fallback},{children:(0,y.jsx)(g.ScalprumComponent,k({history:e.history,store:t,appName:"inventory",module:"./InventoryDetailHead",scope:"inventory",ErrorComponent:(0,y.jsx)(b.Z,k({component:"InventoryDetailHead"},e)),ref:e.innerRef},e))}))}))};x.propTypes={fallback:h().node,innerRef:h().object,component:h().string,className:h().string,history:h().object};var M=a().forwardRef((function(e,t){return(0,y.jsx)(x,k({innerProps:t},e))}));M.propTypes={fallback:h().node,component:h().string,className:h().string},M.defaultProps={fallback:(0,y.jsx)(v.Bullseye,k({className:"pf-u-p-lg"},{children:(0,y.jsx)(v.Spinner,{size:"xl"})})),component:"section"};const C=a().forwardRef((function(e,t){return(0,y.jsx)(j.Z,k({innerRef:t,Component:M},e))}));var D=n(41448),I=n(50693),R=n(16475),N=n(68774),T=n(68340),A=n(9557),U=n(83215),H=n(97804),z=n(59751),_=n(62012),F=n(79577),B=n(55140),W=n(13784),L=n(92397),$=n(95249);function G(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?G(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):G(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const q=function(){var e=(0,_.useParams)().inventoryId,t=(0,l.oR)(),n=(0,l.I0)(),y=(0,l.v9)((function(e){return e.SystemDetailStore})),d=y.hasThirdPartyRepo,h=y.satelliteManaged,g=y.patchSetName,v=y.patchSetId,b=(0,l.v9)((function(e){var t,n=e.entityDetails;return null!==(t=null==n?void 0:n.entity)&&void 0!==t?t:{}})).display_name,S=(0,z.rh)(),O=S.patchSetState,j=S.setPatchSetState,E=S.openAssignSystemsModal,P=S.openUnassignSystemsModal;(0,r.useEffect)((function(){return n((0,A.Eh)(e)),function(){n((0,U.L1)())}}),[]),(0,r.useEffect)((function(){O.shouldRefresh&&n((0,A.Eh)(e))}),[O.shouldRefresh]);var Z=(0,B.Z)();(0,r.useEffect)((function(){b&&Z.updateDocumentTitle("".concat(b," - ").concat(p.N.formatMessage(f.Z.titlesSystems),"\n        ").concat(W.JD))}),[Z,b]);var k=(0,$.c$)(["patch:*:*","patch:template:write"]).hasAccess;return a().createElement(w,{onLoad:function(e){var n=e.mergeWithDetail;t.replaceReducer((0,c.UY)(J(J({},u.E),n(m.J))))},inventoryId:e},a().createElement(H.Z,{patchSetState:O,setPatchSetState:j}),a().createElement(i.Z,{title:"",headerOUIA:"inventory-details",breadcrumbs:[{title:p.N.formatMessage(f.Z.titlesPatchSystems),to:"/systems",isActive:!1},b&&{title:b,isActive:!0}]},a().createElement(C,{hideBack:!0,showTags:!0,inventoryId:e,actions:[{title:p.N.formatMessage(f.Z.titlesTemplateAssign),key:"assign-to-template",isDisabled:!k||h,onClick:function(){return E((0,s.Z)({},e,!0))}},{title:p.N.formatMessage(f.Z.titlesTemplateRemoveMultipleButton),key:"remove-from-template",isDisabled:!k||!g||h,onClick:function(){return P([e])}}],appList:[]},a().createElement(I.r,null,g&&a().createElement(R.P,null,a().createElement(N.D,null,a().createElement(T.x,null,p.N.formatMessage(f.Z.labelsColumnsTemplate),":",a().createElement(L.Z,{to:"/templates/".concat(v),className:"pf-u-ml-xs"},g)))),a().createElement(R.P,null,h?a().createElement(r.Fragment,null,a().createElement(D.b,{className:"pf-u-mt-md",isInline:!0,variant:"info",title:"This system has content managed by Satellite. Installable updates are current as of the last time the system checked-in with Red Hat Insights."}),a().createElement(D.b,{className:"pf-u-mt-md",isInline:!0,variant:"warning",title:"This system has content managed by Satellite. For accurate reporting of installable updates, check in to Red Hat Insights with the --build-packagecache option."},a().createElement("a",{href:"https://access.redhat.com/solutions/7041171",target:"__blank",rel:"noopener noreferrer"},"Read more"))):d&&a().createElement(D.b,{className:"pf-u-mt-md",isInline:!0,variant:"info",title:"This system has content that is managed by repositories other than the Red Hat CDN"}))))),a().createElement(o.ZP,null,a().createElement(F.Z,{inventoryId:e,shouldRefresh:O.shouldRefresh})))}}}]);
//# sourceMappingURL=../sourcemaps/InventoryDetail.00380da87cab39bcc9ffa282b560eabe.js.map