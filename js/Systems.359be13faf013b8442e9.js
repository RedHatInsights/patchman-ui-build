(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[6743],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>o,Z:()=>c});var s=n(70655),a=n(43297),r=n(54918),l=n(38296),i=n(62472);const o=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:u="",component:d="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:v=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:y=!1,isExpanded:b=!1,isRounded:S=!1,isLarge:E=!1,isFullHeight:Z=!1,isPlain:O=!1,ouiaId:P,ouiaSafe:w=!0,hasSelectableInput:I=!1,selectableInputAriaLabel:_,onSelectableInputChange:x=(()=>{})}=e,j=(0,s.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const C=d,R=(0,i.S$)(c.displayName,P,w),[k,L]=a.useState(""),[T,N]=a.useState();f&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const D=a.useRef(!1);return a.useEffect((()=>{_?N({"aria-label":_}):k?N({"aria-labelledby":k}):I&&!D.current&&(N({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[I,_,k]),a.createElement(o.Provider,{value:{cardId:n,registerTitleId:e=>{L(e),D.current=!!e},isExpanded:b}},I&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},T,{type:"checkbox",checked:h,onChange:e=>x(n,e),disabled:g,tabIndex:-1})),a.createElement(C,Object.assign({id:n,className:(0,l.css)(r.Z.card,f&&r.Z.modifiers.compact,b&&r.Z.modifiers.expanded,y&&r.Z.modifiers.flat,S&&r.Z.modifiers.rounded,E&&r.Z.modifiers.displayLg,Z&&r.Z.modifiers.fullHeight,O&&r.Z.modifiers.plain,g?(0,l.css)(r.Z.modifiers.nonSelectableRaised):v?(0,l.css)(r.Z.modifiers.selectableRaised,h&&r.Z.modifiers.selectedRaised):m||p?(0,l.css)(r.Z.modifiers.selectable,h&&r.Z.modifiers.selected):"",u),tabIndex:m||v?"0":void 0},j,R),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>i});var s=n(70655),a=n(43297),r=n(54918),l=n(38296);const i=e=>{var{children:t=null,className:n="",component:i="div",isFilled:o=!0}=e,c=(0,s.__rest)(e,["children","className","component","isFilled"]);const u=i;return a.createElement(u,Object.assign({className:(0,l.css)(r.Z.cardBody,!o&&r.Z.modifiers.noFill,n)},c),t)};i.displayName="CardBody"},70:(e,t,n)=>{"use strict";n.d(t,{l:()=>o});var s=n(70655),a=n(43297),r=n(38296),l=n(54918),i=n(32203);const o=e=>{var{children:t=null,className:n="",component:o="div"}=e,c=(0,s.__rest)(e,["children","className","component"]);const{cardId:u,registerTitleId:d}=a.useContext(i.H),p=o,f=u?`${u}-title`:"";return a.useEffect((()=>(d(f),()=>d(""))),[d,f]),a.createElement(p,Object.assign({className:(0,r.css)(l.Z.cardTitle,n),id:f||void 0},c),t)};o.displayName="CardTitle"},79799:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,jt:()=>r,tz:()=>a});var s=n(40400);const a={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},r=(0,s.IU)(a),l=r},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s}),n(80598);const s={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},39591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(85893),a=n(43297);const r=function(e){var t=e.component,n=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]])}return n}(e,["component"]);return(0,a.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Unable to load inventory component"}),(0,s.jsxs)("h2",{children:["Failed to load ",t]}),(0,s.jsx)("code",{children:"More info can be found in browser console output."})]})}},33739:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var s=n(85893),a=n(43297),r=n.n(a),l=n(45697),i=n.n(l),o=n(59823),c=n(334),u=n(28216),d=n(48335),p=n(39591),f=n(94184),m=n.n(f),v=function(){return v=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},v.apply(this,arguments)},h=function(e){var t=(0,c.useHistory)(),n=(0,u.oR)(),r=e.component;return(0,s.jsx)(r,v({className:m()(e.className,"inventory")},{children:(0,s.jsx)(a.Suspense,v({fallback:e.fallback},{children:(0,s.jsx)(o.ScalprumComponent,v({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,s.jsx)(p.Z,v({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};h.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var g=r().forwardRef((function(e,t){return(0,s.jsx)(h,v({innerRef:t},e))}));g.propTypes={fallback:i().node,component:i().string,className:i().string},g.defaultProps={fallback:(0,s.jsx)(d.Bullseye,v({className:"pf-u-p-lg"},{children:(0,s.jsx)(d.Spinner,{size:"xl"})})),component:"section"};const y=g},85861:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var s=n(43297),a=n.n(s),r=n(45697),l=n.n(r),i=n(74079),o=n(98333),c=function(e){var t=e.patchSetState,n=e.setPatchSetState;return a().createElement(a().Fragment,null,t.isUnassignSystemsModalOpen&&a().createElement(o.Z,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&a().createElement(i.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};c.propTypes={patchSetState:l().object,setPatchSetState:l().func};const u=c},98333:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var s=n(29439),a=n(43297),r=n.n(a),l=n(45697),i=n.n(l),o=n(80236),c=n(47173),u=n(50693),d=n(50383),p=n(74806),f=n(30893),m=n(15861),v=n(64687),h=n.n(v),g=n(28216),y=n(83215),b=n(11220),S=n(13784),E=n(16475),Z=function(e,t,n){return r().createElement(E.P,null,n.formatMessage(f.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement("b",null,t)}}))},O=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,l=e.setUnassignSystemsModalOpen,i=e.intl,p=n.systemsIDs,v=n.isUnassignSystemsModalOpen,E=(0,a.useState)([]),O=(0,s.Z)(E,2),P=O[0],w=O[1],I=(0,a.useState)(!0),_=(0,s.Z)(I,2),x=_[0],j=_[1],C=function(e){l({isUnassignSystemsModalOpen:!v,systemsIDs:[],shouldRefresh:e})},R=function(){C(!1)},k=function(e,t){var n=(0,g.I0)(),s=function(){var s=(0,m.Z)(h().mark((function s(){return h().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,b.J_)({inventory_ids:t});case 2:200===s.sent.status&&(e(!0),n((0,y.wN)((0,S.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return s}(C,P);(0,a.useEffect)((function(){j(!0),function(e){return(0,b.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(p).then((function(e){w(e),j(!1)}))}),[p]);var L=p.length-P.length;return r().createElement(o.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:i.formatMessage(f.Z.textUnassignSystemsTitle),onClose:R,titleIconVariant:"warning",actions:[r().createElement(c.zx,{key:"confirm",variant:"danger",onClick:k,isDisabled:x||0===P.length},i.formatMessage(f.Z.labelsRemove)),r().createElement(c.zx,{key:"cancel",variant:"link",onClick:R},i.formatMessage(f.Z.labelsCancel))]},r().createElement(u.r,{hasGutter:!0},x?r().createElement(d.O,null):r().createElement(a.Fragment,null,P.length>0&&Z("textUnassignSystemsStatement",P.length,i),L>0&&Z("textUnassignSystemsWarning",L,i))))};O.propTypes={intl:i().any,setUnassignSystemsModalOpen:i().func,unassignSystemsModalState:i().object};const P=(0,p.ZP)(O)},55485:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var s=n(43297),a=n.n(s),r=n(45697),l=n.n(r),i=n(22663),o=function(e){var t=e.data,n=e.setRemediationOpen;return a().createElement(i.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:n,fallback:a().createElement("span",null),data:t})};o.propTypes={data:l().object,setRemediationOpen:l().func};const c=o},10637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var s=n(93433),a=n(4942),r=n(15861),l=n(29439),i=n(64687),o=n.n(i),c=n(43297),u=n.n(c),d=n(75863),p=n(33739),f=n(14748),m=n(28216),v=n(334),h=n(30893),g=n(49642),y=n(52579),b=n(7322),S=n(9557),E=n(5747),Z=n(11220),O=n(13784),P=n(5391),w=n(91607),I=n(32132),_=n(58684),x=n(68778),j=n(79799),C=n(69957),R=n(45697),k=n.n(R),L=n(70),T=n(47173),N=n(50383),D=n(32203),M=n(50693),F=n(16475),U=n(62394),A=n(28191),H=n(92298),z=function(e){var t=e.title,n=e.color,s=e.Icon,a=e.value,r=e.filter,l=e.apply;return u().createElement(D.Z,{isCompact:!0,isFullHeight:!0},u().createElement(L.l,{style:{marginTop:"0px"}},t),u().createElement(U.e,{className:"fonst-size-sm"},u().createElement(A.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},u().createElement(H.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},u().createElement(s,{color:n,size:"md"})),u().createElement(H.B,{spacer:{default:"spacerNone"}},void 0===a&&u().createElement(N.O,{width:"24px"})||u().createElement(T.zx,{variant:"link",onClick:function(){return l(r)},className:"patch-status-report-text"},a)))))},W=function(e){var t,n,a,i=e.apply,d=e.queryParams,p=u().useState({}),v=(0,l.Z)(p,2),g=v[0],y=v[1],b=(0,m.v9)((function(e){return e.GlobalFilterStore})),S=b.selectedTags,E=b.selectedGlobalTags,O=b.systemProfile;return(0,c.useMemo)((0,r.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y({}),e.prev=1,e.next=4,(0,Z.lc)({filter:{os:null==d||null===(n=d.filter)||void 0===n?void 0:n.os},selectedTags:[].concat((0,s.Z)(S),(0,s.Z)(E)),systemProfile:O,limit:1});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=[];case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),[null==d||null===(t=d.filter)||void 0===t||null===(n=t.os)||void 0===n?void 0:n.length,void 0!==(null==d||null===(a=d.filter)||void 0===a?void 0:a.os),null==S?void 0:S.length,void 0!==S,null==E?void 0:E.length,void 0!==E,O,void 0!==(null==d?void 0:d.subtotals)]).then((function(e){var t;y(null===(t=e.meta)||void 0===t?void 0:t.subtotals)})),u().createElement(f.Z,{style:{paddingBottom:0}},u().createElement(M.r,{hasGutter:!0,span:12},u().createElement(F.P,{span:12,md:3},u().createElement(z,{title:I.N.formatMessage(h.Z.labelsStatusSystemsUpToDate),Icon:x.ZP,color:"var(--pf-global--success-color--100)",value:null==g?void 0:g.patched,apply:i,filter:{filter:{packages_updatable:"eq:0"}}})),u().createElement(F.P,{span:12,md:3},u().createElement(z,{title:I.N.formatMessage(h.Z.labelsStatusSystemsWithPatchesAvailable),Icon:j.ZP,color:"var(--pf-global--primary-color--100)",value:null==g?void 0:g.unpatched,apply:i,filter:{filter:{packages_updatable:"gt:0"}}})),u().createElement(F.P,{span:12,md:3},u().createElement(z,{title:I.N.formatMessage(h.Z.labelsStatusStaleSystems),Icon:C.ZP,color:"var(--pf-global--warning-color--100)",value:null==g?void 0:g.stale,apply:i,filter:{filter:{stale:!0}}}))))};z.propTypes={title:k().string,Icon:k().elementType,value:k().number,color:k().string,apply:k().func,filter:k().object},W.propTypes={apply:k().func,queryParams:k().object};const B=W;var q=n(55485),G=n(53074),V=n(12738),$=n(72999),Q=n(79875),Y=n(85861),J=n(83905),K=n(93080),X=n(97779),ee=n(55140);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const se=function(){var e=(0,m.oR)(),t=(0,ee.Z)(),n=(0,c.useRef)(null),a=I.N.formatMessage(h.Z.titlesSystems);(0,w.Iw)(a);var i=(0,v.useHistory)(),x=(0,m.I0)(),j=u().useState(!1),C=(0,l.Z)(j,2),R=C[0],k=C[1],L=u().useState(!1),T=(0,l.Z)(L,2),N=T[0],D=T[1],M=u().useState((function(){return function(){return null}})),F=(0,l.Z)(M,2),U=F[0],A=F[1],H=(0,w.ye)(O.VH.patch_set,t),z=(0,P.PZ)(i.location.search),W=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.wU),te=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),se=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),ae=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),re=ae.hasError,le=ae.code,ie=(0,m.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),oe=(0,m.v9)((function(e){var t=e.SystemsStore;return null==t?void 0:t.areAllSelected})),ce=(0,m.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),ue=ce.systemProfile,de=ce.selectedTags,pe=ce.filter,fe=ce.search,me=ce.page,ve=ce.perPage,he=ce.sort;u().useEffect((function(){return ye(z),function(){return x((0,S.RV)())}}),[]);var ge=(0,c.useCallback)(function(){var e=(0,r.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,A((function(){return function(){return u().createElement(q.Z,{data:n,isRemediationOpen:!0,setRemediationOpen:k})}})),k(!R);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[R]);function ye(e){x((0,S.SF)(e))}var be=(0,w.j5)(ne({search:fe},pe),ye,O.hb),Se=(0,l.Z)(be,1)[0],Ee=(0,J.Z)(null==pe?void 0:pe.os,ye),Ze=(0,V.Pf)(fe,pe,ye,Ee),Oe=(0,V.Fy)(pe,fe,Se),Pe=(0,K.r)(W,se,{endpoint:K.c.systems,queryParams:ce,selectionDispatcher:S.i2}),we=se&&(0,P.Qy)(se).length,Ie=(0,w.AR)("systems",ce,{csv:Z.wI,json:Z.TW},x),_e=(0,w.U)(Z.lc,ye,{},i,(function(e){x((0,S._e)(e))}),(function(e){x((0,S.vl)(e))})),xe=(0,Q.Z)(se),je=xe.patchSetState,Ce=xe.setPatchSetState,Re=xe.openPatchSetAssignWizard,ke=xe.openUnassignSystemsModal;(0,c.useEffect)((function(){var e;je.shouldRefresh&&(Pe("none"),null==n||null===(e=n.current)||void 0===e||e.onRefreshData())}),[je.shouldRefresh]);var Le=(0,$.Z)(se,D,"systems",oe),Te=(0,w.Pz)(we,Pe,{total_items:te},W);return u().createElement(u().Fragment,null,u().createElement(g.Z,{title:I.N.formatMessage(h.Z.titlesPatchSystems),headerOUIA:"systems"}),(re||!1===(null==ie?void 0:ie.has_systems))&&u().createElement(y.Z,{code:le,metadata:ie})||u().createElement(u().Fragment,null,u().createElement(B,{apply:ye,queryParams:ce}),H&&u().createElement(Y.Z,{patchSetState:je,setPatchSetState:Ce}),R&&u().createElement(U,null)||null,u().createElement(f.Z,null,u().createElement(p.Z,{ref:n,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,V.gB)(e,_.Fs,H)},showTags:!0,customFilters:{patchParams:{search:fe,filter:pe,systemProfile:ue,selectedTags:de}},paginationProps:{isDisabled:0===te},onLoad:function(t){var n=t.mergeWithEntities;e.replaceReducer((0,X.UY)(ne(ne({},b.E),n((0,E.Kq)((0,_.Fs)(H),E.G),(0,P.fm)({page:me,perPage:ve,sort:he,search:fe},z)))))},getEntities:_e,tableProps:{actionResolver:function(e){return(0,_.Sb)(ge,Re,H,ke,e)},canSelectAll:!1,variant:d.B.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:Te,exportConfig:{isDisabled:0===te,onSelect:Ie},actionsConfig:{actions:[u().createElement(G.Z,{key:"remediate-multiple-systems",remediationProvider:Le,isDisabled:0===(0,P.Qy)(se).length||N,isLoading:N})].concat((0,s.Z)(H?[{key:"assign-multiple-systems",label:I.N.formatMessage(h.Z.titlesTemplateAssign),onClick:Re,props:{isDisabled:0===we}},{key:"remove-multiple-systems",label:I.N.formatMessage(h.Z.titlesTemplateRemoveMultipleButton),onClick:function(){return ke((0,P.LI)(se))},props:{isDisabled:0===we}}]:[]))},filterConfig:Ze,activeFiltersConfig:Oe}))))}},79875:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(29439),a=n(43297),r=n(5391);const l=function(e){var t=(0,a.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),n=(0,s.Z)(t,2),l=n[0],i=n[1];return{patchSetState:l,setPatchSetState:i,openPatchSetAssignWizard:function(t){i({isPatchSetWizardOpen:!0,systemsIDs:"string"==typeof t&&""!==t?[t]:(0,r.LI)(e),shouldRefresh:!1})},openUnassignSystemsModal:function(e){i({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openPatchSetEditModal:function(e){i({isPatchSetWizardOpen:!0,patchSetID:e})}}}},72999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var s=n(29439),a=n(15861),r=n(64687),l=n.n(r),i=n(28216),o=n(83215),c=n(55140),u=n(5391),d=function(){var e=new Worker(new URL(n.p+n.u(7384),n.b));return[e,function(){return e.terminate()}]},p=function(e,t){return e.postMessage(t),new Promise((function(t,n){e.onmessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},s=e.data,a=s.status,r=s.error,l=s.result;"resolved"===a&&t(l),n(r)}}))},f=function(){var e=(0,a.Z)(l().mark((function e(t,n){var a,r,i,c,u,f,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d(),i=(0,s.Z)(r,2),c=i[0],u=i[1],f=p(c,t),e.next=4,f.catch((function(e){return n((0,o.wN)({title:"There was an error while processing.",description:e,variant:"danger"}))}));case 4:return m=e.sent,u(),e.abrupt("return",!(null==m||null===(a=m.issues)||void 0===a||!a.length)&&m);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();const m=function(e,t,n,s){var r=(0,i.I0)(),o=(0,c.Z)(),d=function(){var i=(0,a.Z)(l().mark((function a(){var i,c;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(!0),a.next=3,o.auth.getToken();case 3:return i=a.sent,a.next=6,f({payload:(0,u.Q6)(e),remediationType:n,areAllSelected:s,authToken:i},r);case 6:return c=a.sent,t(!1),a.abrupt("return",c);case 9:case"end":return a.stop()}}),a)})));return function(){return i.apply(this,arguments)}}();return d}},5747:(e,t,n)=>{"use strict";n.d(t,{G:()=>u,Kq:()=>p,OC:()=>d});var s=n(4942),a=n(36248),r=n(48881),l=n(22789);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?o(o({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t){return t.loaded?o(o({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,s=arguments.length>1?arguments[1]:void 0,a=o({},n);switch(s.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return(0,r.PW)(a,s);case"SELECT_ENTITY":var i=(0,r.hd)(a,s);return t(e,i);case l.sq:return c;default:return n}}}},80598:()=>{}}]);