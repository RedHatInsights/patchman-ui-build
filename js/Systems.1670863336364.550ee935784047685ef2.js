(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[6743],{2095:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Card=t.CardContext=void 0;const a=n(70655),r=a.__importStar(n(43297)),s=a.__importDefault(n(54918)),l=n(38296),i=n(23053);t.CardContext=r.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),t.Card=e=>{var{children:n=null,id:o="",className:c="",component:u="article",isHoverable:d=!1,isCompact:f=!1,isSelectable:p=!1,isSelectableRaised:m=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:v=!1,isExpanded:y=!1,isRounded:b=!1,isLarge:S=!1,isFullHeight:_=!1,isPlain:E=!1,ouiaId:w,ouiaSafe:O=!0,hasSelectableInput:x=!1,selectableInputAriaLabel:Z,onSelectableInputChange:P=(()=>{})}=e,C=a.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const I=u,j=i.useOUIAProps(t.Card.displayName,w,O),[k,N]=r.useState(""),[T,L]=r.useState();f&&S&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),S=!1);const R=r.useRef(!1);return r.useEffect((()=>{Z?L({"aria-label":Z}):k?L({"aria-labelledby":k}):x&&!R.current&&(L({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[x,Z,k]),r.createElement(t.CardContext.Provider,{value:{cardId:o,registerTitleId:e=>{N(e),R.current=!!e},isExpanded:y}},x&&r.createElement("input",Object.assign({className:"pf-screen-reader",id:`${o}-input`},T,{type:"checkbox",checked:h,onChange:e=>P(o,e),disabled:g,tabIndex:-1})),r.createElement(I,Object.assign({id:o,className:l.css(s.default.card,f&&s.default.modifiers.compact,y&&s.default.modifiers.expanded,v&&s.default.modifiers.flat,b&&s.default.modifiers.rounded,S&&s.default.modifiers.displayLg,_&&s.default.modifiers.fullHeight,E&&s.default.modifiers.plain,g?l.css(s.default.modifiers.nonSelectableRaised):m?l.css(s.default.modifiers.selectableRaised,h&&s.default.modifiers.selectedRaised):p||d?l.css(s.default.modifiers.selectable,h&&s.default.modifiers.selected):"",c),tabIndex:p||m?"0":void 0},C,j),n))},t.Card.displayName="Card"},85962:(e,t,n)=>{"use strict";t.e=void 0;const a=n(70655),r=a.__importStar(n(43297)),s=a.__importDefault(n(54918)),l=n(38296);t.e=e=>{var{children:t=null,className:n="",component:i="div",isFilled:o=!0}=e,c=a.__rest(e,["children","className","component","isFilled"]);const u=i;return r.createElement(u,Object.assign({className:l.css(s.default.cardBody,!o&&s.default.modifiers.noFill,n)},c),t)},t.e.displayName="CardBody"},36104:(e,t,n)=>{"use strict";t.l=void 0;const a=n(70655),r=a.__importStar(n(43297)),s=n(38296),l=a.__importDefault(n(54918)),i=n(2095);t.l=e=>{var{children:t=null,className:n="",component:o="div"}=e,c=a.__rest(e,["children","className","component"]);const{cardId:u,registerTitleId:d}=r.useContext(i.CardContext),f=o,p=u?`${u}-title`:"";return r.useEffect((()=>(d(p),()=>d(""))),[d,p]),r.createElement(f,Object.assign({className:s.css(l.default.cardTitle,n),id:p||void 0},c),t)},t.l.displayName="CardTitle"},26577:(e,t,n)=>{"use strict";t.O=void 0;const a=n(70655),r=a.__importStar(n(43297)),s=a.__importDefault(n(19395)),l=n(38296);t.O=e=>{var{className:t,width:n,height:i,fontSize:o,shape:c,screenreaderText:u}=e,d=a.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const f=o?Object.values(s.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return r.createElement("div",Object.assign({},d,{className:l.css(s.default.skeleton,o&&f,"circle"===c&&s.default.modifiers.circle,"square"===c&&s.default.modifiers.square,t)},(n||i)&&{style:Object.assign({"--pf-c-skeleton--Width":n||void 0,"--pf-c-skeleton--Height":i||void 0},d.style)}),r.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},77927:(e,t,n)=>{"use strict";t.tz={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},t.jt=n(35183).createIcon(t.tz),t.ZP=t.jt},54918:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a}),n(80598);const a={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},19395:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>a}),n(53336);const a={modifiers:{circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"},skeleton:"pf-c-skeleton",themeDark:"pf-theme-dark"}},33739:(e,t,n)=>{"use strict";n.d(t,{Z:()=>y});var a=n(85893),r=n(43297),s=n.n(r),l=n(45697),i=n.n(l),o=n(59823),c=n(334),u=n(28216),d=n(75448),f=n(39591),p=n(94184),m=n.n(p),h=function(){return h=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},h.apply(this,arguments)},g=function(e){var t=(0,c.useHistory)(),n=(0,u.oR)(),s=e.component;return(0,a.jsx)(s,h({className:m()(e.className,"inventory")},{children:(0,a.jsx)(r.Suspense,h({fallback:e.fallback},{children:(0,a.jsx)(o.ScalprumComponent,h({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,a.jsx)(f.Z,h({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};g.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var v=s().forwardRef((function(e,t){return(0,a.jsx)(g,h({innerRef:t},e))}));v.propTypes={fallback:i().node,component:i().string,className:i().string},v.defaultProps={fallback:(0,a.jsx)(d.Bullseye,h({className:"pf-u-p-lg"},{children:(0,a.jsx)(d.Spinner,{size:"xl"})})),component:"section"};const y=v},99398:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var a=n(43297),r=n.n(a),s=n(45697),l=n.n(s),i=n(74079),o=n(29439),c=n(78826),u=n(6202),d=n(49287),f=n(26577),p=n(74806),m=n(30893),h=n(15861),g=n(64687),v=n.n(g),y=n(28216),b=n(83215),S=n(11220),_=n(13784),E=n(18038),w=function(e,t,n){return r().createElement(E.P,null,n.formatMessage(m.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement("b",null,t)}}))},O=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,s=e.setUnassignSystemsModalOpen,l=e.intl,i=n.systemsIDs,p=n.isUnassignSystemsModalOpen,g=(0,a.useState)([]),E=(0,o.Z)(g,2),O=E[0],x=E[1],Z=(0,a.useState)(!0),P=(0,o.Z)(Z,2),C=P[0],I=P[1],j=function(e){s({isUnassignSystemsModalOpen:!p,systemsIDs:[],shouldRefresh:e})},k=function(){j(!1)},N=function(e,t){var n=(0,y.I0)(),a=function(){var a=(0,h.Z)(v().mark((function a(){return v().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,S.J_)({inventory_ids:t});case 2:200===a.sent.status&&(e(!0),n((0,b.wN)((0,_.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return a}(j,O);(0,a.useEffect)((function(){(function(e){return(0,S.lc)({limit:-1,"filter[baseline_name]":"neq:"}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))})(i).then((function(e){x(e),I(!1)}))}),[i]);var T=i.length-O.length;return r().createElement(c.Modal,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:l.formatMessage(m.Z.textUnassignSystemsTitle),onClose:k,titleIconVariant:"warning",actions:[r().createElement(u.Button,{key:"confirm",variant:"danger",onClick:N,isDisabled:0===O.length},l.formatMessage(m.Z.labelsRemove)),r().createElement(u.Button,{key:"cancel",variant:"link",onClick:k},l.formatMessage(m.Z.labelsCancel))]},r().createElement(d.r,{container:!0,hasGutter:!0},C&&r().createElement(f.O,null),!C&&0!==O.length&&w("textUnassignSystemsStatement",O.length,l),!C&&T>0&&w("textUnassignSystemsWarning",T,l)))};O.propTypes={intl:l().any,setUnassignSystemsModalOpen:l().func,unassignSystemsModalState:l().object};const x=(0,p.ZP)(O);var Z=function(e){var t=e.patchSetState,n=e.setPatchSetState;return r().createElement(r().Fragment,null,t.isUnassignSystemsModalOpen&&r().createElement(x,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&r().createElement(i.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};Z.propTypes={patchSetState:l().object,setPatchSetState:l().func};const P=Z},55485:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(43297),r=n.n(a),s=n(45697),l=n.n(s),i=n(22663),o=function(e){var t=e.data,n=e.setRemediationOpen;return r().createElement(i.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:n,fallback:r().createElement("span",null),data:t})};o.propTypes={data:l().object,setRemediationOpen:l().func};const c=o},27656:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>re});var a=n(93433),r=n(4942),s=n(15861),l=n(29439),i=n(64687),o=n.n(i),c=n(43297),u=n.n(c),d=n(72573),f=n(6202),p=n(33739),m=n(14748),h=n(28216),g=n(334),v=n(30893),y=n(49642),b=n(52579),S=n(2807),_=n(9557),E=n(5747),w=n(11220),O=n(13784),x=n(5391),Z=n(91607),P=n(32132),C=n(58684),I=n(35451),j=n(77927),k=n(19694),N=n(45697),T=n.n(N),L=n(36104),R=n(26577),D=n(2095),M=n(49287),F=n(18038),U=n(85962),A=n(36001),H=n(42057),q=function(e){var t=e.title,n=e.color,a=e.Icon,r=e.value,s=e.filter,l=e.apply;return u().createElement(D.Card,{isCompact:!0,isFullHeight:!0},u().createElement(L.l,{style:{marginTop:"0px"}},t),u().createElement(U.e,{className:"fonst-size-sm"},u().createElement(A.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},u().createElement(H.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},u().createElement(a,{color:n,size:"md"})),u().createElement(H.B,{spacer:{default:"spacerNone"}},void 0===r&&u().createElement(R.O,{width:"24px"})||u().createElement(f.Button,{variant:"link",onClick:function(){return l(s)},className:"patch-status-report-text"},r)))))},B=function(e){var t,n,r,i=e.apply,d=e.queryParams,f=u().useState({}),p=(0,l.Z)(f,2),g=p[0],y=p[1],b=(0,h.v9)((function(e){return e.GlobalFilterStore})),S=b.selectedTags,_=b.selectedGlobalTags,E=b.systemProfile;return(0,c.useMemo)((0,s.Z)(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y({}),e.prev=1,e.next=4,(0,w.lc)({filter:{os:null==d||null===(n=d.filter)||void 0===n?void 0:n.os},selectedTags:[].concat((0,a.Z)(S),(0,a.Z)(_)),systemProfile:E,limit:1});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=[];case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),[null==d||null===(t=d.filter)||void 0===t||null===(n=t.os)||void 0===n?void 0:n.length,void 0!==(null==d||null===(r=d.filter)||void 0===r?void 0:r.os),null==S?void 0:S.length,void 0!==S,null==_?void 0:_.length,void 0!==_,E,void 0!==(null==d?void 0:d.subtotals)]).then((function(e){var t;y(null===(t=e.meta)||void 0===t?void 0:t.subtotals)})),u().createElement(m.Z,{style:{paddingBottom:0}},u().createElement(M.r,{hasGutter:!0,span:12},u().createElement(F.P,{span:12,md:3},u().createElement(q,{title:P.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:I.default,color:"var(--pf-global--success-color--100)",value:null==g?void 0:g.patched,apply:i,filter:{filter:{packages_updatable:"eq:0"}}})),u().createElement(F.P,{span:12,md:3},u().createElement(q,{title:P.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:j.ZP,color:"var(--pf-global--primary-color--100)",value:null==g?void 0:g.unpatched,apply:i,filter:{filter:{packages_updatable:"gt:0"}}})),u().createElement(F.P,{span:12,md:3},u().createElement(q,{title:P.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:k.default,color:"var(--pf-global--warning-color--100)",value:null==g?void 0:g.stale,apply:i,filter:{filter:{stale:!0}}}))))};q.propTypes={title:T().string,Icon:T().elementType,value:T().number,color:T().string,apply:T().func,filter:T().object},B.propTypes={apply:T().func,queryParams:T().object};const z=B;var W=n(55485),G=n(53074),V=n(90747),$=n(75585),Q=n(23188),Y=n(72999),J=n(79875),K=n(99398),X=n(83905),ee=n(93080),te=n(97779);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const re=function(){var e=(0,h.oR)(),t=(0,c.useRef)(null),n=P.N.formatMessage(v.Z.titlesSystems);(0,Z.Iw)(n);var r=(0,g.useHistory)(),i=(0,h.I0)(),I=u().useState(!1),j=(0,l.Z)(I,2),k=j[0],N=j[1],T=u().useState(!1),L=(0,l.Z)(T,2),R=L[0],D=L[1],M=u().useState((function(){return function(){return null}})),F=(0,l.Z)(M,2),U=F[0],A=F[1],H=(0,Z.ye)(O.VH.patch_set),q=(0,x.PZ)(r.location.search),B=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),h.wU),ne=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),re=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),se=(0,h.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),le=se.hasError,ie=se.code,oe=(0,h.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),ce=(0,h.v9)((function(e){var t=e.SystemsStore;return null==t?void 0:t.areAllSelected})),ue=(0,h.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),de=ue.systemProfile,fe=ue.selectedTags,pe=ue.filter,me=ue.search,he=ue.page,ge=ue.perPage,ve=ue.sort;function ye(e){return be.apply(this,arguments)}function be(){return(be=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,A((function(){return function(){return u().createElement(W.Z,{data:n,isRemediationOpen:!0,setRemediationOpen:N})}})),N(!k);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Se(e){i((0,_.SF)(e))}u().useEffect((function(){return Se(q),function(){return i((0,_.RV)())}}),[]);var _e=(0,Z.j5)(ae({search:me},pe),Se,O.hb),Ee=(0,l.Z)(_e,1)[0],we=function(e,t,n){return{items:[(0,V.Z)(n,e,P.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),P.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),(0,$.Z)(n,t),(0,Q.Z)(n,t)]}}(me,pe,Se),Oe=(0,X.Z)(null==pe?void 0:pe.os,Se);we.items=[].concat((0,a.Z)(we.items),(0,a.Z)(Oe));var xe=function(e,t,n){return{filters:(0,x.mt)(e,t,P.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:n,deleteTitle:P.N.formatMessage(v.Z.labelsFiltersReset)}}(pe,me,Ee),Ze=(0,ee.r)(B,re,{endpoint:ee.c.systems,queryParams:ue,selectionDispatcher:_.i2}),Pe=re&&(0,x.Qy)(re).length,Ce=(0,Z.AR)("systems",ue,{csv:w.wI,json:w.TW},i),Ie=(0,Z.U)(w.lc,Se,{},r,(function(e){i((0,_._e)(e))}),(function(e){i((0,_.vl)(e))})),je=(0,J.Z)(re),ke=je.patchSetState,Ne=je.setPatchSetState,Te=je.openPatchSetAssignWizard,Le=je.openUnassignSystemsModal;(0,c.useEffect)((function(){var e;ke.shouldRefresh&&(Ze("none"),null==t||null===(e=t.current)||void 0===e||e.onRefreshData())}),[ke.shouldRefresh]);var Re=(0,Y.Z)(re,D,"systems",ce),De=(0,Z.Pz)(Pe,Ze,{total_items:ne},B);return u().createElement(u().Fragment,null,u().createElement(y.Z,{title:P.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),(le||!1===(null==oe?void 0:oe.has_systems))&&u().createElement(b.Z,{code:ie,metadata:oe})||u().createElement(u().Fragment,null,u().createElement(z,{apply:Se,queryParams:ue}),H&&u().createElement(K.Z,{patchSetState:ke,setPatchSetState:Ne}),k&&u().createElement(U,null)||null,u().createElement(m.Z,null,u().createElement(p.Z,{ref:t,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,x.gB)(e,H)},showTags:!0,customFilters:{patchParams:{search:me,filter:pe,systemProfile:de,selectedTags:fe}},paginationProps:{isDisabled:0===ne},onLoad:function(t){var n=t.mergeWithEntities;e.replaceReducer((0,te.UY)(ae(ae({},S.E),n((0,E.Kq)((0,C.Fs)(H),E.G),(0,x.fm)({page:he,perPage:ge,sort:ve,search:me},q)))))},getEntities:Ie,tableProps:{actionResolver:function(e){return(0,C.Sb)(ye,Te,H,Le,e)},canSelectAll:!1,variant:d.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:De,exportConfig:{isDisabled:0===ne,onSelect:Ce},actionsConfig:H&&{actions:[u().createElement(f.Button,{onClick:Te,key:"assign-multiple-systems",isDisabled:0===Pe},P.N.formatMessage(v.Z.titlesTemplateAssign)),{key:"remove-multiple-systems",label:P.N.formatMessage(v.Z.titlesTemplateRemoveMultipleButton),onClick:function(){return Le((0,x.LI)(re))},props:{isDisabled:0===Pe}}]},filterConfig:we,activeFiltersConfig:xe,dedicatedAction:u().createElement(G.Z,{remediationProvider:Re,isDisabled:0===(0,x.Qy)(re).length||R,isLoading:R})}))))}},72999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var a=n(29439),r=n(15861),s=n(64687),l=n.n(s),i=n(28216),o=n(83215),c=n(5391),u=function(){var e=new Worker(new URL(n.p+n.u(9898),n.b));return[e,function(){return e.terminate()}]},d=function(e,t){return e.postMessage(t),new Promise((function(t,n){e.onmessage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.data,r=a.status,s=a.error,l=a.result;"resolved"===r&&t(l),n(s)}}))},f=function(){var e=(0,r.Z)(l().mark((function e(t,n){var r,s,i,c,f,p,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=u(),i=(0,a.Z)(s,2),c=i[0],f=i[1],p=d(c,t),e.next=4,p.catch((function(e){return n((0,o.wN)({title:"There was an error while processing.",description:e,variant:"danger"}))}));case 4:return m=e.sent,f(),e.abrupt("return",!(null==m||null===(r=m.issues)||void 0===r||!r.length)&&m);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();const p=function(e,t,n,a){var s=(0,i.I0)(),o=function(){var i=(0,r.Z)(l().mark((function r(){var i;return l().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t(!0),r.next=3,f({payload:(0,c.Q6)(e),remediationType:n,areAllSelected:a},s);case 3:return i=r.sent,t(!1),r.abrupt("return",i);case 6:case"end":return r.stop()}}),r)})));return function(){return i.apply(this,arguments)}}();return o}},5747:(e,t,n)=>{"use strict";n.d(t,{G:()=>u,Kq:()=>f,OC:()=>d});var a=n(4942),r=n(57668),s=n(48881),l=n(22789);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?o(o({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,r.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t){return t.loaded?o(o({},t),{},{columns:e,rows:(0,r.GF)(t.rows,t.selectedRows)}):t},f=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,a=arguments.length>1?arguments[1]:void 0,r=o({},n);switch(a.type){case"LOAD_ENTITIES_FULFILLED":return t(e,r);case"LOAD_ENTITIES_PENDING":return r.status={isLoading:!0,hasError:!1},r;case"LOAD_ENTITIES_REJECTED":return(0,s.PW)(r,a);case"SELECT_ENTITY":var i=(0,s.hd)(r,a);return t(e,i);case l.sq:return c;default:return n}}}},80598:()=>{},53336:()=>{}}]);