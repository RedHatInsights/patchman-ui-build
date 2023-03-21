(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[6743],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var s=n(70655),r=n(43297),a=n(54918),l=n(38296),i=n(62472);const o=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:u="",component:d="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:S=!1,isLarge:E=!1,isFullHeight:Z=!1,isPlain:O=!1,ouiaId:P,ouiaSafe:w=!0,hasSelectableInput:I=!1,selectableInputAriaLabel:_,onSelectableInputChange:x=(()=>{})}=e,j=(0,s.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const C=d,R=(0,i.S$)(c.displayName,P,w),[k,L]=r.useState(""),[T,N]=r.useState();f&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const D=r.useRef(!1);return r.useEffect((()=>{_?N({"aria-label":_}):k?N({"aria-labelledby":k}):I&&!D.current&&(N({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[I,_,k]),r.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{L(e),D.current=!!e},isExpanded:b}},I&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},T,{type:"checkbox",checked:h,onChange:e=>x(n,e),disabled:g,tabIndex:-1})),r.createElement(C,Object.assign({id:n,className:(0,l.css)(a.Z.card,f&&a.Z.modifiers.compact,b&&a.Z.modifiers.expanded,y&&a.Z.modifiers.flat,S&&a.Z.modifiers.rounded,E&&a.Z.modifiers.displayLg,Z&&a.Z.modifiers.fullHeight,O&&a.Z.modifiers.plain,g?(0,l.css)(a.Z.modifiers.nonSelectableRaised):v?(0,l.css)(a.Z.modifiers.selectableRaised,h&&a.Z.modifiers.selectedRaised):m||p?(0,l.css)(a.Z.modifiers.selectable,h&&a.Z.modifiers.selected):"",u),tabIndex:m||v?"0":void 0},j,R),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>i});var s=n(70655),r=n(43297),a=n(54918),l=n(38296);const i=e=>{var{children:t=null,className:n="",component:i="div",isFilled:o=!0}=e,c=(0,s.__rest)(e,["children","className","component","isFilled"]);const u=i;return r.createElement(u,Object.assign({className:(0,l.css)(a.Z.cardBody,!o&&a.Z.modifiers.noFill,n)},c),t)};i.displayName="CardBody"},70:(e,t,n)=>{"use strict";n.d(t,{l:()=>o});var s=n(70655),r=n(43297),a=n(38296),l=n(54918),i=n(32203);const o=e=>{var{children:t=null,className:n="",component:o="div"}=e,c=(0,s.__rest)(e,["children","className","component"]);const{cardId:u,registerTitleId:d}=r.useContext(i.H),p=o,f=u?`${u}-title`:"";return r.useEffect((()=>(d(f),()=>d(""))),[d,f]),r.createElement(p,Object.assign({className:(0,a.css)(l.Z.cardTitle,n),id:f||void 0},c),t)};o.displayName="CardTitle"},79799:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,jt:()=>a,tz:()=>r});var s=n(40400);const r={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},a=(0,s.IU)(r),l=a},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s}),n(80598);const s={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},39591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var s=n(85893),r=n(43297);const a=function(e){var t=e.component,n=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}(e,["component"]);return(0,r.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Unable to load inventory component"}),(0,s.jsxs)("h2",{children:["Failed to load ",t]}),(0,s.jsx)("code",{children:"More info can be found in browser console output."})]})}},33739:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var s=n(85893),r=n(43297),a=n.n(r),l=n(45697),i=n.n(l),o=n(59823),c=n(334),u=n(28216),d=n(48335),p=n(39591),f=n(94184),m=n.n(f),v=function(){return v=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},v.apply(this,arguments)},h=function(e){var t=(0,c.useHistory)(),n=(0,u.oR)(),a=e.component;return(0,s.jsx)(a,v({className:m()(e.className,"inventory")},{children:(0,s.jsx)(r.Suspense,v({fallback:e.fallback},{children:(0,s.jsx)(o.ScalprumComponent,v({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,s.jsx)(p.Z,v({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};h.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var g=a().forwardRef((function(e,t){return(0,s.jsx)(h,v({innerRef:t},e))}));g.propTypes={fallback:i().node,component:i().string,className:i().string},g.defaultProps={fallback:(0,s.jsx)(d.Bullseye,v({className:"pf-u-p-lg"},{children:(0,s.jsx)(d.Spinner,{size:"xl"})})),component:"section"};const y=g},85861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var s=n(43297),r=n.n(s),a=n(45697),l=n.n(a),i=n(74079),o=n(98333),c=function(e){var t=e.patchSetState,n=e.setPatchSetState;return r().createElement(r().Fragment,null,t.isUnassignSystemsModalOpen&&r().createElement(o.Z,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&r().createElement(i.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};c.propTypes={patchSetState:l().object,setPatchSetState:l().func};const u=c},98333:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var s=n(29439),r=n(43297),a=n.n(r),l=n(45697),i=n.n(l),o=n(80236),c=n(47173),u=n(50693),d=n(50383),p=n(74806),f=n(30893),m=n(15861),v=n(64687),h=n.n(v),g=n(28216),y=n(83215),b=n(11220),S=n(13784),E=n(16475),Z=function(e,t,n){return a().createElement(E.P,null,n.formatMessage(f.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a().createElement("b",null,t)}}))},O=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,l=e.setUnassignSystemsModalOpen,i=e.intl,p=n.systemsIDs,v=n.isUnassignSystemsModalOpen,E=(0,r.useState)([]),O=(0,s.Z)(E,2),P=O[0],w=O[1],I=(0,r.useState)(!0),_=(0,s.Z)(I,2),x=_[0],j=_[1],C=function(e){l({isUnassignSystemsModalOpen:!v,systemsIDs:[],shouldRefresh:e})},R=function(){C(!1)},k=function(e,t){var n=(0,g.I0)(),s=function(){var s=(0,m.Z)(h().mark((function s(){return h().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,b.J_)({inventory_ids:t});case 2:200===s.sent.status&&(e(!0),n((0,y.wN)((0,S.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return s}(C,P);(0,r.useEffect)((function(){j(!0),function(e){return(0,b.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(p).then((function(e){w(e),j(!1)}))}),[p]);var L=p.length-P.length;return a().createElement(o.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:i.formatMessage(f.Z.textUnassignSystemsTitle),onClose:R,titleIconVariant:"warning",actions:[a().createElement(c.zx,{key:"confirm",variant:"danger",onClick:k,isDisabled:x||0===P.length},i.formatMessage(f.Z.labelsRemove)),a().createElement(c.zx,{key:"cancel",variant:"link",onClick:R},i.formatMessage(f.Z.labelsCancel))]},a().createElement(u.r,{hasGutter:!0},x?a().createElement(d.O,null):a().createElement(r.Fragment,null,P.length>0&&Z("textUnassignSystemsStatement",P.length,i),L>0&&Z("textUnassignSystemsWarning",L,i))))};O.propTypes={intl:i().any,setUnassignSystemsModalOpen:i().func,unassignSystemsModalState:i().object};const P=(0,p.ZP)(O)},55485:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var s=n(43297),r=n.n(s),a=n(45697),l=n.n(a),i=n(22663),o=function(e){var t=e.data,n=e.setRemediationOpen;return r().createElement(i.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:n,fallback:r().createElement("span",null),data:t})};o.propTypes={data:l().object,setRemediationOpen:l().func};const c=o},10637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ne});var s=n(4942),r=n(15861),a=n(29439),l=n(64687),i=n.n(l),o=n(43297),c=n.n(o),u=n(75863),d=n(33739),p=n(14748),f=n(28216),m=n(334),v=n(30893),h=n(49642),g=n(52579),y=n(7322),b=n(9557),S=n(5747),E=n(11220),Z=n(13784),O=n(5391),P=n(91607),w=n(32132),I=n(58684),_=n(93433),x=n(68778),j=n(79799),C=n(69957),R=n(45697),k=n.n(R),L=n(70),T=n(47173),N=n(50383),D=n(32203),M=n(50693),F=n(16475),U=n(62394),A=n(28191),H=n(92298),z=function(e){var t=e.title,n=e.color,s=e.Icon,r=e.value,a=e.filter,l=e.apply;return c().createElement(D.Z,{isCompact:!0,isFullHeight:!0},c().createElement(L.l,{style:{marginTop:"0px"}},t),c().createElement(U.e,{className:"fonst-size-sm"},c().createElement(A.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},c().createElement(H.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},c().createElement(s,{color:n,size:"md"})),c().createElement(H.B,{spacer:{default:"spacerNone"}},void 0===r&&c().createElement(N.O,{width:"24px"})||c().createElement(T.zx,{variant:"link",onClick:function(){return l(a)},className:"patch-status-report-text"},r)))))},W=function(e){var t,n,s,l=e.apply,u=e.queryParams,d=c().useState({}),m=(0,a.Z)(d,2),h=m[0],g=m[1],y=(0,f.v9)((function(e){return e.GlobalFilterStore})),b=y.selectedTags,S=y.selectedGlobalTags,Z=y.systemProfile;return(0,o.useMemo)((0,r.Z)(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({}),e.prev=1,e.next=4,(0,E.lc)({filter:{os:null==u||null===(n=u.filter)||void 0===n?void 0:n.os},selectedTags:[].concat((0,_.Z)(b),(0,_.Z)(S)),systemProfile:Z,limit:1});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=[];case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),[null==u||null===(t=u.filter)||void 0===t||null===(n=t.os)||void 0===n?void 0:n.length,void 0!==(null==u||null===(s=u.filter)||void 0===s?void 0:s.os),null==b?void 0:b.length,void 0!==b,null==S?void 0:S.length,void 0!==S,Z,void 0!==(null==u?void 0:u.subtotals)]).then((function(e){var t;g(null===(t=e.meta)||void 0===t?void 0:t.subtotals)})),c().createElement(p.Z,{style:{paddingBottom:0}},c().createElement(M.r,{hasGutter:!0,span:12},c().createElement(F.P,{span:12,md:3},c().createElement(z,{title:w.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:x.ZP,color:"var(--pf-global--success-color--100)",value:null==h?void 0:h.patched,apply:l,filter:{filter:{packages_updatable:"eq:0"}}})),c().createElement(F.P,{span:12,md:3},c().createElement(z,{title:w.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:j.ZP,color:"var(--pf-global--primary-color--100)",value:null==h?void 0:h.unpatched,apply:l,filter:{filter:{packages_updatable:"gt:0"}}})),c().createElement(F.P,{span:12,md:3},c().createElement(z,{title:w.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:C.ZP,color:"var(--pf-global--warning-color--100)",value:null==h?void 0:h.stale,apply:l,filter:{filter:{stale:!0}}}))))};z.propTypes={title:k().string,Icon:k().elementType,value:k().number,color:k().string,apply:k().func,filter:k().object},W.propTypes={apply:k().func,queryParams:k().object};const B=W;var q=n(55485),G=n(53074),V=n(12738),$=n(72999),Q=n(79875),Y=n(85861),J=n(83905),K=n(93080),X=n(97779);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ne=function(){var e=(0,f.oR)(),t=(0,o.useRef)(null),n=w.N.formatMessage(v.Z.titlesSystems);(0,P.Iw)(n);var s=(0,m.useHistory)(),l=(0,f.I0)(),_=c().useState(!1),x=(0,a.Z)(_,2),j=x[0],C=x[1],R=c().useState(!1),k=(0,a.Z)(R,2),L=k[0],T=k[1],N=c().useState((function(){return function(){return null}})),D=(0,a.Z)(N,2),M=D[0],F=D[1],U=(0,P.ye)(Z.VH.patch_set),A=(0,O.PZ)(s.location.search),H=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),f.wU),z=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),W=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),ee=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),ne=ee.hasError,se=ee.code,re=(0,f.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),ae=(0,f.v9)((function(e){var t=e.SystemsStore;return null==t?void 0:t.areAllSelected})),le=(0,f.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),ie=le.systemProfile,oe=le.selectedTags,ce=le.filter,ue=le.search,de=le.page,pe=le.perPage,fe=le.sort;c().useEffect((function(){return ve(A),function(){return l((0,b.RV)())}}),[]);var me=(0,o.useCallback)(function(){var e=(0,r.Z)(i().mark((function e(t){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,F((function(){return function(){return c().createElement(q.Z,{data:n,isRemediationOpen:!0,setRemediationOpen:C})}})),C(!j);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[j]);function ve(e){l((0,b.SF)(e))}var he=(0,P.j5)(te({search:ue},ce),ve,Z.hb),ge=(0,a.Z)(he,1)[0],ye=(0,J.Z)(null==ce?void 0:ce.os,ve),be=(0,V.Pf)(ue,ce,ve,ye),Se=(0,V.Fy)(ce,ue,ge),Ee=(0,K.r)(H,W,{endpoint:K.c.systems,queryParams:le,selectionDispatcher:b.i2}),Ze=W&&(0,O.Qy)(W).length,Oe=(0,P.AR)("systems",le,{csv:E.wI,json:E.TW},l),Pe=(0,P.U)(E.lc,ve,{},s,(function(e){l((0,b._e)(e))}),(function(e){l((0,b.vl)(e))})),we=(0,Q.Z)(W),Ie=we.patchSetState,_e=we.setPatchSetState,xe=we.openPatchSetAssignWizard,je=we.openUnassignSystemsModal;(0,o.useEffect)((function(){var e;Ie.shouldRefresh&&(Ee("none"),null==t||null===(e=t.current)||void 0===e||e.onRefreshData())}),[Ie.shouldRefresh]);var Ce=(0,$.Z)(W,T,"systems",ae),Re=(0,P.Pz)(Ze,Ee,{total_items:z},H);return c().createElement(c().Fragment,null,c().createElement(h.Z,{title:w.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),(ne||!1===(null==re?void 0:re.has_systems))&&c().createElement(g.Z,{code:se,metadata:re})||c().createElement(c().Fragment,null,c().createElement(B,{apply:ve,queryParams:le}),U&&c().createElement(Y.Z,{patchSetState:Ie,setPatchSetState:_e}),j&&c().createElement(M,null)||null,c().createElement(p.Z,null,c().createElement(d.Z,{ref:t,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,V.gB)(e,I.Fs,U)},showTags:!0,customFilters:{patchParams:{search:ue,filter:ce,systemProfile:ie,selectedTags:oe}},paginationProps:{isDisabled:0===z},onLoad:function(t){var n=t.mergeWithEntities;e.replaceReducer((0,X.UY)(te(te({},y.E),n((0,S.Kq)((0,I.Fs)(U),S.G),(0,O.fm)({page:de,perPage:pe,sort:fe,search:ue},A)))))},getEntities:Pe,tableProps:{actionResolver:function(e){return(0,I.Sb)(me,xe,U,je,e)},canSelectAll:!1,variant:u.B.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:Re,exportConfig:{isDisabled:0===z,onSelect:Oe},actionsConfig:U&&{actions:[c().createElement(G.Z,{key:"remediate-multiple-systems",remediationProvider:Ce,isDisabled:0===(0,O.Qy)(W).length||L,isLoading:L}),{key:"assign-multiple-systems",label:w.N.formatMessage(v.Z.titlesTemplateAssign),onClick:xe,props:{isDisabled:0===Ze}},{key:"remove-multiple-systems",label:w.N.formatMessage(v.Z.titlesTemplateRemoveMultipleButton),onClick:function(){return je((0,O.LI)(W))},props:{isDisabled:0===Ze}}]},filterConfig:be,activeFiltersConfig:Se}))))}},79875:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(29439),r=n(43297),a=n(5391);const l=function(e){var t=(0,r.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),n=(0,s.Z)(t,2),l=n[0],i=n[1];return{patchSetState:l,setPatchSetState:i,openPatchSetAssignWizard:function(t){i({isPatchSetWizardOpen:!0,systemsIDs:"string"==typeof t&&""!==t?[t]:(0,a.LI)(e),shouldRefresh:!1})},openUnassignSystemsModal:function(e){i({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openPatchSetEditModal:function(e){i({isPatchSetWizardOpen:!0,patchSetID:e})}}}},72999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var s=n(29439),r=n(15861),a=n(64687),l=n.n(a),i=n(28216),o=n(83215),c=n(5391),u=function(){var e=new Worker(new URL(n.p+n.u(7384),n.b));return[e,function(){return e.terminate()}]},d=function(e,t){return e.postMessage(t),new Promise((function(t,n){e.onmessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.data,r=s.status,a=s.error,l=s.result;"resolved"===r&&t(l),n(a)}}))},p=function(){var e=(0,r.Z)(l().mark((function e(t,n){var r,a,i,c,p,f,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u(),i=(0,s.Z)(a,2),c=i[0],p=i[1],f=d(c,t),e.next=4,f.catch((function(e){return n((0,o.wN)({title:"There was an error while processing.",description:e,variant:"danger"}))}));case 4:return m=e.sent,p(),e.abrupt("return",!(null==m||null===(r=m.issues)||void 0===r||!r.length)&&m);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();const f=function(e,t,n,s){var a=(0,i.I0)(),o=function(){var i=(0,r.Z)(l().mark((function r(){var i,o;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(!0),r.next=3,window.insights.chrome.auth.getToken();case 3:return i=r.sent,r.next=6,p({payload:(0,c.Q6)(e),remediationType:n,areAllSelected:s,authToken:i},a);case 6:return o=r.sent,t(!1),r.abrupt("return",o);case 9:case"end":return r.stop()}}),r)})));return function(){return i.apply(this,arguments)}}();return o}},5747:(e,t,n)=>{"use strict";n.d(t,{G:()=>u,Kq:()=>p,OC:()=>d});var s=n(4942),r=n(36248),a=n(48881),l=n(22789);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?o(o({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,r.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t){return t.loaded?o(o({},t),{},{columns:e,rows:(0,r.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,s=arguments.length>1?arguments[1]:void 0,r=o({},n);switch(s.type){case"LOAD_ENTITIES_FULFILLED":return t(e,r);case"LOAD_ENTITIES_PENDING":return r.status={isLoading:!0,hasError:!1},r;case"LOAD_ENTITIES_REJECTED":return(0,a.PW)(r,s);case"SELECT_ENTITY":var i=(0,a.hd)(r,s);return t(e,i);case l.sq:return c;default:return n}}}},80598:()=>{}}]);