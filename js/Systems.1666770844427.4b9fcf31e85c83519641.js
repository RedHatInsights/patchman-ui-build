(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[6743],{2095:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const r=n(70655),a=r.__importStar(n(43297)),s=r.__importDefault(n(54918)),i=n(38296),l=n(23053);t.CardContext=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:n=null,id:o="",className:c="",component:u="article",isHoverable:d=!1,isCompact:f=!1,isSelectable:p=!1,isSelectableRaised:m=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:v=!1,isExpanded:y=!1,isRounded:b=!1,isLarge:S=!1,isFullHeight:O=!1,isPlain:E=!1,ouiaId:_,ouiaSafe:w=!0,hasSelectableInput:P=!1,selectableInputAriaLabel:x,onSelectableInputChange:Z=(()=>{})}=e,j=r.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const C=u,k=l.useOUIAProps(t.Card.displayName,_,w),[I,N]=a.useState(""),[T,D]=a.useState();f&&S&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),S=!1);const L=a.useRef(!1);return a.useEffect((()=>{x?D({"aria-label":x}):I?D({"aria-labelledby":I}):P&&!L.current&&(D({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[P,x,I]),a.createElement(t.CardContext.Provider,{value:{cardId:o,registerTitleId:e=>{N(e),L.current=!!e},isExpanded:y}},P&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${o}-input`},T,{type:"checkbox",checked:h,onChange:e=>Z(o,e),disabled:g,tabIndex:-1})),a.createElement(C,Object.assign({id:o,className:i.css(s.default.card,f&&s.default.modifiers.compact,y&&s.default.modifiers.expanded,v&&s.default.modifiers.flat,b&&s.default.modifiers.rounded,S&&s.default.modifiers.displayLg,O&&s.default.modifiers.fullHeight,E&&s.default.modifiers.plain,g?i.css(s.default.modifiers.nonSelectableRaised):m?i.css(s.default.modifiers.selectableRaised,h&&s.default.modifiers.selectedRaised):p||d?i.css(s.default.modifiers.selectable,h&&s.default.modifiers.selected):"",c),tabIndex:p||m?"0":void 0},j,k),n))},t.Card.displayName="Card"},85962:(e,t,n)=>{"use strict";t.e=void 0;const r=n(70655),a=r.__importStar(n(43297)),s=r.__importDefault(n(54918)),i=n(38296);t.e=e=>{var{children:t=null,className:n="",component:l="div",isFilled:o=!0}=e,c=r.__rest(e,["children","className","component","isFilled"]);const u=l;return a.createElement(u,Object.assign({className:i.css(s.default.cardBody,!o&&s.default.modifiers.noFill,n)},c),t)},t.e.displayName="CardBody"},36104:(e,t,n)=>{"use strict";t.l=void 0;const r=n(70655),a=r.__importStar(n(43297)),s=n(38296),i=r.__importDefault(n(54918)),l=n(2095);t.l=e=>{var{children:t=null,className:n="",component:o="div"}=e,c=r.__rest(e,["children","className","component"]);const{cardId:u,registerTitleId:d}=a.useContext(l.CardContext),f=o,p=u?`${u}-title`:"";return a.useEffect((()=>(d(p),()=>d(""))),[d,p]),a.createElement(f,Object.assign({className:s.css(i.default.cardTitle,n),id:p||void 0},c),t)},t.l.displayName="CardTitle"},26577:(e,t,n)=>{"use strict";t.O=void 0;const r=n(70655),a=r.__importStar(n(43297)),s=r.__importDefault(n(19395)),i=n(38296);t.O=e=>{var{className:t,width:n,height:l,fontSize:o,shape:c,screenreaderText:u}=e,d=r.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const f=o?Object.values(s.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return a.createElement("div",Object.assign({},d,{className:i.css(s.default.skeleton,o&&f,"circle"===c&&s.default.modifiers.circle,"square"===c&&s.default.modifiers.square,t)},(n||l)&&{style:Object.assign({"--pf-c-skeleton--Width":n||void 0,"--pf-c-skeleton--Height":l||void 0},d.style)}),a.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},77927:(e,t,n)=>{"use strict";t.tz={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},t.jt=n(35183).createIcon(t.tz),t.ZP=t.jt},54918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n.e(598).then(n.t.bind(n,80598,23));const r={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},19395:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>r}),n.e(3336).then(n.t.bind(n,53336,23));const r={modifiers:{circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"},skeleton:"pf-c-skeleton",themeDark:"pf-theme-dark"}},33739:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(43297),a=n.n(r),s=n(45697),i=n.n(s),l=n(54025),o=n(334),c=n(50533),u=n(75448),d=n(39591),f=n(94184),p=n.n(f),m=function(){return m=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},m.apply(this,arguments)},h=function(e){var t=(0,o.useHistory)(),n=(0,c.oR)(),s=e.component;return a().createElement(s,{className:p()(e.className,"inventory")},a().createElement(r.Suspense,{fallback:e.fallback},a().createElement(l.ScalprumComponent,m({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:a().createElement(d.Z,m({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))))};h.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var g=a().forwardRef((function(e,t){return a().createElement(h,m({innerRef:t},e))}));g.propTypes={fallback:i().node,component:i().string,className:i().string},g.defaultProps={fallback:a().createElement(u.Bullseye,{className:"pf-u-p-lg"},a().createElement(u.Spinner,{size:"xl"})),component:"section"};const v=g},99398:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(43297),a=n.n(r),s=n(45697),i=n.n(s),l=n(74079),o=n(29439),c=n(78826),u=n(6202),d=n(49287),f=n(26577),p=n(74806),m=n(30893),h=n(15861),g=n(64687),v=n.n(g),y=n(50533),b=n(83215),S=n(11220),O=n(13784),E=n(18038),_=function(e,t,n){return a().createElement(E.P,null,n.formatMessage(m.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return a().createElement("b",null,t)}}))},w=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,s=e.setUnassignSystemsModalOpen,i=e.intl,l=n.systemsIDs,p=n.isUnassignSystemsModalOpen,g=(0,r.useState)([]),E=(0,o.Z)(g,2),w=E[0],P=E[1],x=(0,r.useState)(!0),Z=(0,o.Z)(x,2),j=Z[0],C=Z[1],k=function(e){s({isUnassignSystemsModalOpen:!p,systemsIDs:[],shouldRefresh:e})},I=function(){k(!1)},N=function(e,t){var n=(0,y.I0)(),r=function(){var r=(0,h.Z)(v().mark((function r(){return v().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,(0,S.J_)({inventory_ids:t});case 2:200===r.sent.status&&(e(!0),n((0,b.wN)((0,O.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();return r}(k,w);(0,r.useEffect)((function(){(function(e){return(0,S.lc)({limit:-1,"filter[baseline_name]":"neq:"}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))})(l).then((function(e){P(e),C(!1)}))}),[l]);var T=l.length-w.length;return a().createElement(c.Modal,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:i.formatMessage(m.Z.textUnassignSystemsTitle),onClose:I,titleIconVariant:"warning",actions:[a().createElement(u.Button,{key:"confirm",variant:"danger",onClick:N,isDisabled:0===w.length},i.formatMessage(m.Z.labelsRemove)),a().createElement(u.Button,{key:"cancel",variant:"link",onClick:I},i.formatMessage(m.Z.labelsCancel))]},a().createElement(d.r,{container:!0,hasGutter:!0},j&&a().createElement(f.O,null),!j&&0!==w.length&&_("textUnassignSystemsStatement",w.length,i),!j&&T>0&&_("textUnassignSystemsWarning",T,i)))};w.propTypes={intl:i().any,setUnassignSystemsModalOpen:i().func,unassignSystemsModalState:i().object};const P=(0,p.ZP)(w);var x=function(e){var t=e.patchSetState,n=e.setPatchSetState;return a().createElement(a().Fragment,null,t.isUnassignSystemsModalOpen&&a().createElement(P,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&a().createElement(l.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};x.propTypes={patchSetState:i().object,setPatchSetState:i().func};const Z=x},55485:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(43297),a=n.n(r),s=n(45697),i=n.n(s),l=n(22663),o=function(e){var t=e.data,n=e.setRemediationOpen;return a().createElement(l.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:n,fallback:a().createElement("span",null),data:t})};o.propTypes={data:i().object,setRemediationOpen:i().func};const c=o},27656:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>ae});var r=n(93433),a=n(4942),s=n(15861),i=n(29439),l=n(64687),o=n.n(l),c=n(43297),u=n.n(c),d=n(72573),f=n(6202),p=n(33739),m=n(14748),h=n(50533),g=n(334),v=n(30893),y=n(49642),b=n(52579),S=n(2807),O=n(9557),E=n(5747),_=n(11220),w=n(13784),P=n(5391),x=n(91607),Z=n(32132),j=n(58684),C=n(35451),k=n(77927),I=n(19694),N=n(45697),T=n.n(N),D=n(36104),L=n(26577),R=n(2095),M=n(49287),F=n(18038),A=n(85962),U=n(36001),H=n(42057),q=function(e){var t=e.title,n=e.color,r=e.Icon,a=e.value,s=e.filter,i=e.apply;return u().createElement(R.Card,{isCompact:!0,isFullHeight:!0},u().createElement(D.l,{style:{marginTop:"0px"}},t),u().createElement(A.e,{className:"fonst-size-sm"},u().createElement(U.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},u().createElement(H.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},u().createElement(r,{color:n,size:"md"})),u().createElement(H.B,{spacer:{default:"spacerNone"}},void 0===a&&u().createElement(L.O,{width:"24px"})||u().createElement(f.Button,{variant:"link",onClick:function(){return i(s)},className:"patch-status-report-text"},a)))))},z=function(e){var t,n,a,l=e.apply,d=e.queryParams,f=u().useState({}),p=(0,i.Z)(f,2),g=p[0],y=p[1],b=(0,h.v9)((function(e){return e.GlobalFilterStore})),S=b.selectedTags,O=b.selectedGlobalTags,E=b.systemProfile;return(0,c.useMemo)((0,s.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y({}),e.prev=1,e.next=4,(0,_.lc)({filter:{os:null==d||null===(n=d.filter)||void 0===n?void 0:n.os},selectedTags:[].concat((0,r.Z)(S),(0,r.Z)(O)),systemProfile:E,limit:1});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=[];case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),[null==d||null===(t=d.filter)||void 0===t||null===(n=t.os)||void 0===n?void 0:n.length,void 0!==(null==d||null===(a=d.filter)||void 0===a?void 0:a.os),null==S?void 0:S.length,void 0!==S,null==O?void 0:O.length,void 0!==O,E,void 0!==(null==d?void 0:d.subtotals)]).then((function(e){var t;y(null===(t=e.meta)||void 0===t?void 0:t.subtotals)})),u().createElement(m.Z,{style:{paddingBottom:0}},u().createElement(M.r,{hasGutter:!0,span:12},u().createElement(F.P,{span:12,md:3},u().createElement(q,{title:Z.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:C.default,color:"var(--pf-global--success-color--100)",value:null==g?void 0:g.patched,apply:l,filter:{filter:{packages_updatable:"eq:0"}}})),u().createElement(F.P,{span:12,md:3},u().createElement(q,{title:Z.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:k.ZP,color:"var(--pf-global--primary-color--100)",value:null==g?void 0:g.unpatched,apply:l,filter:{filter:{packages_updatable:"gt:0"}}})),u().createElement(F.P,{span:12,md:3},u().createElement(q,{title:Z.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:I.default,color:"var(--pf-global--warning-color--100)",value:null==g?void 0:g.stale,apply:l,filter:{filter:{stale:!0}}}))))};q.propTypes={title:T().string,Icon:T().elementType,value:T().number,color:T().string,apply:T().func,filter:T().object},z.propTypes={apply:T().func,queryParams:T().object};const B=z;var W=n(55485),G=n(53074),V=n(90747),$=n(75585),Q=n(23188);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function J(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=n(77146),X=n(79875),ee=n(99398),te=n(83905);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const ae=function(){var e=(0,c.useRef)(null),t=Z.N.formatMessage(v.Z.titlesSystems);(0,x.Iw)(t);var n=(0,g.useHistory)(),a=(0,h.I0)(),l=u().useState(!1),C=(0,i.Z)(l,2),k=C[0],I=C[1],N=u().useState(!1),T=(0,i.Z)(N,2),D=T[0],L=T[1],R=u().useState((function(){return function(){return null}})),M=(0,i.Z)(R,2),F=M[0],A=M[1],U=(0,x.ye)(w.VH.patch_set),H=(0,P.PZ)(n.location.search),q=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),h.wU),z=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),Y=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),ne=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),ae=ne.hasError,se=ne.code,ie=(0,h.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),le=(0,h.v9)((function(e){var t=e.SystemsStore;return null==t?void 0:t.areAllSelected})),oe=(0,h.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),ce=oe.systemProfile,ue=oe.selectedTags,de=oe.filter,fe=oe.search,pe=oe.page,me=oe.perPage,he=oe.sort;function ge(e){return ve.apply(this,arguments)}function ve(){return(ve=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,A((function(){return function(){return u().createElement(W.Z,{data:n,isRemediationOpen:!0,setRemediationOpen:I})}})),I(!k);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e){a((0,O.SF)(e))}u().useEffect((function(){return ye(H),function(){return a((0,O.RV)())}}),[]);var be=(0,x.j5)(re({search:fe},de),ye,w.hb),Se=(0,i.Z)(be,1)[0],Oe=function(e,t,n){return{items:[(0,V.Z)(n,e,Z.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),Z.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),(0,$.Z)(n,t),(0,Q.Z)(n,t)]}}(fe,de,ye),Ee=(0,te.Z)(null==de?void 0:de.os,ye);Oe.items=[].concat((0,r.Z)(Oe.items),(0,r.Z)(Ee));var _e=function(e,t,n){return{filters:(0,P.mt)(e,t,Z.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:n,deleteTitle:Z.N.formatMessage(v.Z.labelsFiltersReset)}}(de,fe,Se),we=(0,x.ry)(q,Y,function(e){return function(){return(0,_.lc)(J(J({},e),{},{limit:-1})).then(P.zw)}}(oe),(function(e){a({type:"SELECT_ENTITY",payload:e})})),Pe=Y&&(0,P.Qy)(Y).length,xe=(0,x.AR)("systems",oe,{csv:_.wI,json:_.TW},a),Ze=(0,x.U)(_.lc,ye,{},n,(function(e){a((0,O._e)(e))}),(function(e){a((0,O.vl)(e))})),je=(0,X.Z)(Y),Ce=je.patchSetState,ke=je.setPatchSetState,Ie=je.openPatchSetAssignWizard,Ne=je.openUnassignSystemsModal;(0,c.useEffect)((function(){var t;Ce.shouldRefresh&&(we("none"),null==e||null===(t=e.current)||void 0===t||t.onRefreshData())}),[Ce.shouldRefresh]);var Te=(0,K.Z)(Y,L,"systems",le),De=(0,x.Pz)(Pe,we,{total_items:z},q);return u().createElement(u().Fragment,null,u().createElement(y.Z,{title:Z.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),(ae||!1===(null==ie?void 0:ie.has_systems))&&u().createElement(b.Z,{code:se,metadata:ie})||u().createElement(u().Fragment,null,u().createElement(B,{apply:ye,queryParams:oe}),U&&u().createElement(ee.Z,{patchSetState:Ce,setPatchSetState:ke}),k&&u().createElement(F,null)||null,u().createElement(m.Z,null,u().createElement(p.Z,{ref:e,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,P.gB)(e,U)},showTags:!0,customFilters:{patchParams:{search:fe,filter:de,systemProfile:ce,selectedTags:ue}},paginationProps:{isDisabled:0===z},onLoad:function(e){var t=e.mergeWithEntities;(0,S.z)(re({},t((0,E.Kq)((0,j.Fs)(U),E.G),(0,P.fm)({page:pe,perPage:me,sort:he,search:fe},H))))},getEntities:Ze,tableProps:{actionResolver:function(e){return(0,j.Sb)(ge,Ie,U,Ne,e)},canSelectAll:!1,variant:d.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:De,exportConfig:{isDisabled:0===z,onSelect:xe},actionsConfig:U&&{actions:[u().createElement(f.Button,{onClick:Ie,key:"assign-multiple-systems",isDisabled:0===Pe},Z.N.formatMessage(v.Z.titlesTemplateAssign)),{key:"remove-multiple-systems",label:Z.N.formatMessage(v.Z.titlesTemplateRemoveMultipleButton),onClick:function(){return Ne((0,P.LI)(Y))},props:{isDisabled:0===Pe}}]},filterConfig:Oe,activeFiltersConfig:_e,dedicatedAction:u().createElement(G.Z,{remediationProvider:Te,isDisabled:0===(0,P.Qy)(Y).length,isLoading:D})}))))}},77146:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(93433),a=n(4942),s=n(15861),i=n(64687),l=n.n(i),o=n(5391),c=n(11220),u=n(8400),d=n.n(u),f=n(13784);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function m(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const h=function(e,t,n){var r=d()(e,100),a=[],i=function(){var e=(0,s.Z)(l().mark((function e(s,i){var o,c,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.splice(0,5),c=0;case 2:if(!(c<o.length)){e.next=10;break}return e.next=5,t(m(m({},i(o[c])),{},{limit:100,offset:100*(5*s+c)})).then((function(e){return n(e,f.oN.advisory)}));case 5:u=e.sent,a.push(u);case 7:c++,e.next=2;break;case 10:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,s.Z)(l().mark((function e(t){var n,s,o;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(n=[],s=function(e){n.push(new Promise((function(n){setTimeout((function(){n(i(e,t))}),100)})))},o=0;o<Math.ceil(r.length/5);o++)s(o);return e.next=5,Promise.all(n);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return o};var g=function(){var e=(0,s.Z)(l().mark((function e(){var t,n,s,i,u,d,f,p,m,g,v=arguments;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v.length>0&&void 0!==v[0]?v[0]:[],s=v.length>1?v[1]:void 0,i=v.length>2?v[2]:void 0,d=(u="systems"===s&&!i)?c.OA:c.fq,f=u?o.we:o.R9,p=h(n,d,f),e.next=9,p((function(e){return i&&"systems"!==s?{}:(0,a.Z)({},s,e)}));case 9:return m=e.sent,g=m.reduce((function(e,t){return{issues:[].concat((0,r.Z)((null==e?void 0:e.issues)||[]),(0,r.Z)((null==t?void 0:t.issues)||[]))}}),{}),e.abrupt("return",!(null==g||null===(t=g.issues)||void 0===t||!t.length)&&g);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();const v=function(e,t,n,r){var a=function(){var a=(0,s.Z)(l().mark((function a(){var s;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(!0),a.next=3,g((0,o.Q6)(e),n,r);case 3:return s=a.sent,t(!1),a.abrupt("return",s);case 6:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}},5747:(e,t,n)=>{"use strict";n.d(t,{G:()=>u,Kq:()=>f,OC:()=>d});var r=n(4942),a=n(57668),s=n(48881),i=n(22789);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?o(o({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t){return t.loaded?o(o({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},f=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1?arguments[1]:void 0,a=o({},n);switch(r.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return(0,s.PW)(a,r);case"SELECT_ENTITY":var l=(0,s.hd)(a,r);return t(e,l);case i.sq:return c;default:return n}}}},8400:(e,t,n)=>{var r=n(14259),a=n(16612),s=n(40554),i=Math.ceil,l=Math.max;e.exports=function(e,t,n){t=(n?a(e,t,n):void 0===t)?1:l(s(t),0);var o=null==e?0:e.length;if(!o||t<1)return[];for(var c=0,u=0,d=Array(i(o/t));c<o;)d[u++]=r(e,c,c+=t);return d}}}]);
//# sourceMappingURL=../sourcemaps/Systems.8231eb328ce9fc3c5692a1bb5edf7234.js.map