(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[6743],{32203:(e,t,n)=>{"use strict";n.d(t,{H:()=>i,Z:()=>c});var s=n(70655),a=n(43297),r=n(54918),l=n(38296),o=n(62472);const i=a.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),c=e=>{var{children:t=null,id:n="",className:u="",component:d="article",isHoverable:p=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:v=!1,isSelected:g=!1,isDisabledRaised:y=!1,isFlat:h=!1,isExpanded:b=!1,isRounded:S=!1,isLarge:E=!1,isFullHeight:O=!1,isPlain:Z=!1,ouiaId:P,ouiaSafe:w=!0,hasSelectableInput:I=!1,selectableInputAriaLabel:j,onSelectableInputChange:C=(()=>{})}=e,k=(0,s.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const D=d,R=(0,o.S$)(c.displayName,P,w),[x,L]=a.useState(""),[T,M]=a.useState();f&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1);const N=a.useRef(!1);return a.useEffect((()=>{j?M({"aria-label":j}):x?M({"aria-labelledby":x}):I&&!N.current&&(M({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[I,j,x]),a.createElement(i.Provider,{value:{cardId:n,registerTitleId:e=>{L(e),N.current=!!e},isExpanded:b}},I&&a.createElement("input",Object.assign({className:"pf-screen-reader",id:`${n}-input`},T,{type:"checkbox",checked:g,onChange:e=>C(n,e),disabled:y,tabIndex:-1})),a.createElement(D,Object.assign({id:n,className:(0,l.css)(r.Z.card,f&&r.Z.modifiers.compact,b&&r.Z.modifiers.expanded,h&&r.Z.modifiers.flat,S&&r.Z.modifiers.rounded,E&&r.Z.modifiers.displayLg,O&&r.Z.modifiers.fullHeight,Z&&r.Z.modifiers.plain,y?(0,l.css)(r.Z.modifiers.nonSelectableRaised):v?(0,l.css)(r.Z.modifiers.selectableRaised,g&&r.Z.modifiers.selectedRaised):m||p?(0,l.css)(r.Z.modifiers.selectable,g&&r.Z.modifiers.selected):"",u),tabIndex:m||v?"0":void 0},k,R),t))};c.displayName="Card"},62394:(e,t,n)=>{"use strict";n.d(t,{e:()=>o});var s=n(70655),a=n(43297),r=n(54918),l=n(38296);const o=e=>{var{children:t=null,className:n="",component:o="div",isFilled:i=!0}=e,c=(0,s.__rest)(e,["children","className","component","isFilled"]);const u=o;return a.createElement(u,Object.assign({className:(0,l.css)(r.Z.cardBody,!i&&r.Z.modifiers.noFill,n)},c),t)};o.displayName="CardBody"},70:(e,t,n)=>{"use strict";n.d(t,{l:()=>i});var s=n(70655),a=n(43297),r=n(38296),l=n(54918),o=n(32203);const i=e=>{var{children:t=null,className:n="",component:i="div"}=e,c=(0,s.__rest)(e,["children","className","component"]);const{cardId:u,registerTitleId:d}=a.useContext(o.H),p=i,f=u?`${u}-title`:"";return a.useEffect((()=>(d(f),()=>d(""))),[d,f]),a.createElement(p,Object.assign({className:(0,r.css)(l.Z.cardTitle,n),id:f||void 0},c),t)};i.displayName="CardTitle"},79799:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>l,jt:()=>r,tz:()=>a});var s=n(40400);const a={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},r=(0,s.IU)(a),l=r},54918:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s}),n(80598);const s={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},39591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var s=n(85893),a=n(43297);const r=function(e){var t=e.component,n=function(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(s=Object.getOwnPropertySymbols(e);a<s.length;a++)t.indexOf(s[a])<0&&Object.prototype.propertyIsEnumerable.call(e,s[a])&&(n[s[a]]=e[s[a]])}return n}(e,["component"]);return(0,a.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{children:"Unable to load inventory component"}),(0,s.jsxs)("h2",{children:["Failed to load ",t]}),(0,s.jsx)("code",{children:"More info can be found in browser console output."})]})}},33739:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var s=n(85893),a=n(43297),r=n.n(a),l=n(45697),o=n.n(l),i=n(59823),c=n(96620),u=n(28216),d=n(8213),p=n(39591),f=n(94184),m=n.n(f),v=function(){return v=Object.assign||function(e){for(var t,n=1,s=arguments.length;n<s;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},v.apply(this,arguments)},g=function(e){var t=(0,c.useHistory)(),n=(0,u.oR)(),r=e.component;return(0,s.jsx)(r,v({className:m()(e.className,"inventory")},{children:(0,s.jsx)(a.Suspense,v({fallback:e.fallback},{children:(0,s.jsx)(i.ScalprumComponent,v({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,s.jsx)(p.Z,v({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};g.propTypes={fallback:o().node,innerRef:o().object,component:o().string,className:o().string};var y=r().forwardRef((function(e,t){return(0,s.jsx)(g,v({innerRef:t},e))}));y.propTypes={fallback:o().node,component:o().string,className:o().string},y.defaultProps={fallback:(0,s.jsx)(d.Bullseye,v({className:"pf-u-p-lg"},{children:(0,s.jsx)(d.Spinner,{size:"xl"})})),component:"section"};const h=y},97804:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var s=n(43297),a=n.n(s),r=n(45697),l=n.n(r),o=n(45329),i=n(98333),c=n(4942),u=n(29439),d=n(80236),p=n(47173),f=n(49739),m=n(83826),v=n(83115),g=n(74806),y=n(93665),h=n(30893),b=n(11220),S=n(28216),E=n(83215),O=n(20677),Z=n(5391);function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?P(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var I=function(e){var t=e.patchSetState,n=void 0===t?{}:t,r=e.setPatchSetState,l=e.intl,o=(0,S.I0)(),i=n.systemsIDs,c=n.isAssignSystemsModalOpen,g=(0,s.useState)([]),P=(0,u.Z)(g,2),I=P[0],j=P[1],C=(0,s.useState)({}),k=(0,u.Z)(C,2),D=k[0],R=k[1],x=function(){r({isAssignSystemsModalOpen:!c,systemsIDs:[]}),j([]),R({})};return a().createElement(d.u,{variant:"small",isOpen:n.isAssignSystemsModalOpen,title:l.formatMessage(h.Z.templateApply),onClose:x,actions:[a().createElement(p.zx,{key:"confirm",isDisabled:!(null!=D&&D.id),onClick:function(){(0,b.CT)({inventory_ids:i},D.id).then((function(){o((0,E.wN)((0,O.og)(Object.keys(i).length).success)),r(w(w({},n),{},{shouldRefresh:!0,isAssignSystemsModalOpen:!1,systemsIDs:[]}))})),x()}},l.formatMessage(h.Z.templateApply)),a().createElement(p.zx,{key:"cancel",variant:"link",onClick:x},l.formatMessage(h.Z.labelsCancel))]},a().createElement(f.K,{hasGutter:!0},a().createElement(m.v,null,l.formatMessage(h.Z.templateSelect,{systemCount:Object.keys(i).length})),a().createElement(m.v,null,a().createElement(v.l,null,a().createElement(y.Z,{setSelectedPatchSet:j,selectedSets:I,selectCallback:R}))),a().createElement(m.v,null,l.formatMessage(h.Z.templateOr)),a().createElement(m.v,null,a().createElement(p.zx,{variant:"secondary",onClick:function(){r(w(w({},n),{},{isPatchSetWizardOpen:!0,systemsIDs:(0,Z.LI)(i),shouldRefresh:!1})),j([]),R({})}},l.formatMessage(h.Z.templateCreate)))))};I.propTypes={intl:l().any,setPatchSetState:l().func,patchSetState:l().object};const j=(0,g.ZP)(I);var C=function(e){var t=e.patchSetState,n=e.setPatchSetState;return a().createElement(a().Fragment,null,t.isUnassignSystemsModalOpen&&a().createElement(i.Z,{unassignSystemsModalState:t,setUnassignSystemsModalOpen:n,systemsIDs:t.systemsIDs}),a().createElement(j,{patchSetState:t,setPatchSetState:n,systemsIDs:t.systemsIDs}),t.isPatchSetWizardOpen&&a().createElement(o.Z,{systemsIDs:t.systemsIDs,setBaselineState:n}))};C.propTypes={patchSetState:l().object,setPatchSetState:l().func};const k=C},98333:(e,t,n)=>{"use strict";n.d(t,{Z:()=>P});var s=n(29439),a=n(43297),r=n.n(a),l=n(45697),o=n.n(l),i=n(80236),c=n(47173),u=n(50693),d=n(50383),p=n(74806),f=n(30893),m=n(15861),v=n(64687),g=n.n(v),y=n(28216),h=n(83215),b=n(11220),S=n(20677),E=n(16475),O=function(e,t,n){return r().createElement(E.P,null,n.formatMessage(f.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r().createElement("b",null,t)}}))},Z=function(e){var t=e.unassignSystemsModalState,n=void 0===t?{}:t,l=e.setUnassignSystemsModalOpen,o=e.intl,p=n.systemsIDs,v=n.isUnassignSystemsModalOpen,E=(0,a.useState)([]),Z=(0,s.Z)(E,2),P=Z[0],w=Z[1],I=(0,a.useState)(!0),j=(0,s.Z)(I,2),C=j[0],k=j[1],D=function(e){l({isUnassignSystemsModalOpen:!v,systemsIDs:[],shouldRefresh:e})},R=function(){D(!1)},x=function(e,t){var n=(0,y.I0)(),s=function(){var s=(0,m.Z)(g().mark((function s(){return g().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,(0,b.C9)({inventory_ids:t});case 2:200===s.sent.status&&(e(!0),n((0,h.wN)((0,S.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return s.stop()}}),s)})));return function(){return s.apply(this,arguments)}}();return s}(D,P);(0,a.useEffect)((function(){k(!0),function(e){return(0,b.lc)({limit:-1,"filter[baseline_name]":"neq:",filter:{stale:[!0,!1]}}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))}(p).then((function(e){w(e),k(!1)}))}),[p]);var L=p.length-P.length;return r().createElement(i.u,{variant:"small",isOpen:n.isUnassignSystemsModalOpen,title:o.formatMessage(f.Z.textUnassignSystemsTitle),onClose:R,titleIconVariant:"warning",actions:[r().createElement(c.zx,{key:"confirm",variant:"danger",onClick:x,isDisabled:C||0===P.length},o.formatMessage(f.Z.labelsRemove)),r().createElement(c.zx,{key:"cancel",variant:"link",onClick:R},o.formatMessage(f.Z.labelsCancel))]},r().createElement(u.r,{hasGutter:!0},C?r().createElement(d.O,null):r().createElement(a.Fragment,null,P.length>0&&O("textUnassignSystemsStatement",P.length,o),L>0&&O("textUnassignSystemsWarning",L,o))))};Z.propTypes={intl:o().any,setUnassignSystemsModalOpen:o().func,unassignSystemsModalState:o().object};const P=(0,p.ZP)(Z)},55485:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var s=n(43297),a=n.n(s),r=n(45697),l=n.n(r),o=n(22663),i=function(e){var t=e.data,n=e.setRemediationOpen;return a().createElement(o.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:n,fallback:a().createElement("span",null),data:t})};i.propTypes={data:l().object,setRemediationOpen:l().func};const c=i},10637:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var s=n(4942),a=n(15861),r=n(29439),l=n(64687),o=n.n(l),i=n(43297),c=n.n(i),u=n(75863),d=n(33739),p=n(14748),f=n(28216),m=n(96620),v=n(30893),g=n(49642),y=n(52579),h=n(7322),b=n(9557),S=n(5747),E=n(11220),O=n(13784),Z=n(5391),P=n(91607),w=n(32132),I=n(58684),j=n(93433),C=n(68778),k=n(79799),D=n(69957),R=n(45697),x=n.n(R),L=n(70),T=n(47173),M=n(50383),N=n(32203),_=n(50693),F=n(16475),A=n(62394),U=n(28191),z=n(92298),H=function(e){var t=e.title,n=e.color,s=e.Icon,a=e.value,r=e.filter,l=e.apply;return c().createElement(N.Z,{isCompact:!0,isFullHeight:!0},c().createElement(L.l,{style:{marginTop:"0px"}},t),c().createElement(A.e,{className:"fonst-size-sm"},c().createElement(U.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},c().createElement(z.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},c().createElement(s,{color:n,size:"md"})),c().createElement(z.B,{spacer:{default:"spacerNone"}},void 0===a&&c().createElement(M.O,{width:"24px"})||c().createElement(T.zx,{variant:"link",onClick:function(){return l(r)},className:"patch-status-report-text"},a)))))},W=function(e){var t,n,s,a=e.apply,l=e.queryParams,o=c().useState({}),i=(0,r.Z)(o,2),u=i[0],d=i[1],m=(0,f.v9)((function(e){return e.GlobalFilterStore})),g=m.selectedTags,y=m.selectedGlobalTags,h=m.systemProfile;return c().useEffect((function(){!function(){d({});try{var e;(0,E.lc)({filter:{os:null==l||null===(e=l.filter)||void 0===e?void 0:e.os},selectedTags:[].concat((0,j.Z)(g),(0,j.Z)(y)),systemProfile:h,limit:1,"filter[stale]":"in:true,false"}).then((function(e){var t;d(null===(t=e.meta)||void 0===t?void 0:t.subtotals)}))}catch(e){[]}}()}),[null==l||null===(t=l.filter)||void 0===t||null===(n=t.os)||void 0===n?void 0:n.length,void 0!==(null==l||null===(s=l.filter)||void 0===s?void 0:s.os),null==g?void 0:g.length,void 0!==g,null==y?void 0:y.length,void 0!==y,h,void 0!==(null==l?void 0:l.subtotals)]),c().createElement(p.Z,{style:{paddingBottom:0}},c().createElement(_.r,{hasGutter:!0,span:12},c().createElement(F.P,{lg:3,md:4},c().createElement(H,{title:w.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:C.ZP,color:"var(--pf-global--success-color--100)",value:null==u?void 0:u.patched,apply:a,filter:{filter:{packages_updatable:"eq:0"}}})),c().createElement(F.P,{lg:3,md:4},c().createElement(H,{title:w.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:k.ZP,color:"var(--pf-global--primary-color--100)",value:null==u?void 0:u.unpatched,apply:a,filter:{filter:{packages_updatable:"gt:0"}}})),c().createElement(F.P,{lg:3,md:4},c().createElement(H,{title:w.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:D.ZP,color:"var(--pf-global--warning-color--100)",value:null==u?void 0:u.stale,apply:a,filter:{filter:{stale:!0}}}))))};H.propTypes={title:x().string,Icon:x().elementType,value:x().number,color:x().string,apply:x().func,filter:x().object},W.propTypes={apply:x().func,queryParams:x().object};const B=W;var q=n(55485),G=n(53074),Y=n(42154),$=n(72999),K=n(79875),Q=n(97804),V=n(83905),J=n(93080),X=n(97779),ee=n(55140);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,s.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}const se=function(){var e=(0,f.oR)(),t=(0,i.useRef)(null),n=(0,ee.Z)();(0,i.useEffect)((function(){n.updateDocumentTitle("".concat(w.N.formatMessage(v.Z.titlesSystems)).concat(O.JD))}),[n,w.N]);var s=(0,m.useHistory)(),l=(0,f.I0)(),j=c().useState(!1),C=(0,r.Z)(j,2),k=C[0],D=C[1],R=c().useState(!1),x=(0,r.Z)(R,2),L=x[0],T=x[1],M=c().useState((function(){return function(){return null}})),N=(0,r.Z)(M,2),_=N[0],F=N[1],A=(0,Z.PZ)(s.location.search),U=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),f.wU),z=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),H=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),W=(0,f.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),te=W.hasError,se=W.code,ae=(0,f.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),re=(0,f.v9)((function(e){var t=e.SystemsStore;return null==t?void 0:t.areAllSelected})),le=(0,f.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),oe=le.systemProfile,ie=le.selectedTags,ce=le.filter,ue=le.search,de=le.page,pe=le.perPage,fe=le.sort;c().useEffect((function(){return ve(A),function(){return l((0,b.RV)())}}),[]);var me=(0,i.useCallback)(function(){var e=(0,a.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:n=e.sent,F((function(){return function(){return c().createElement(q.Z,{data:n,isRemediationOpen:!0,setRemediationOpen:D})}})),D(!k);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[k]);function ve(e){l((0,b.SF)(e))}var ge=(0,P.j5)(ne({search:ue},ce),ve,O.hb),ye=(0,r.Z)(ge,1)[0],he=(0,V.Z)(null==ce?void 0:ce.os,ve),be=(0,Y.Pf)(ue,ce,ve,he),Se=(0,Y.Fy)(ce,ue,ye),Ee=(0,J.r)(U,H,{endpoint:J.c.systems,queryParams:le,selectionDispatcher:b.i2}),Oe=H&&(0,Z.Qy)(H).length,Ze=(0,P.AR)("systems",le,{csv:E.wI,json:E.TW},l),Pe=(0,P.U)(E.lc,ve,{},s,(function(e){l((0,b._e)(e))}),(function(e){l((0,b.vl)(e))})),we=(0,K.Z)(H),Ie=we.patchSetState,je=we.setPatchSetState,Ce=we.openUnassignSystemsModal,ke=we.openAssignSystemsModal;(0,i.useEffect)((function(){var e;Ie.shouldRefresh&&(Ee("none"),null==t||null===(e=t.current)||void 0===e||e.onRefreshData({timestamp:Date.now()}))}),[Ie.shouldRefresh]);var De=(0,$.Z)(H,T,"systems",re),Re=(0,P.Pz)(Oe,Ee,{total_items:z},U);return c().createElement(c().Fragment,null,c().createElement(g.Z,{title:w.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),(te||!1===(null==ae?void 0:ae.has_systems))&&c().createElement(y.Z,{code:se,metadata:ae})||c().createElement(c().Fragment,null,c().createElement(B,{apply:ve,queryParams:le}),c().createElement(Q.Z,{patchSetState:Ie,setPatchSetState:je}),k&&c().createElement(_,null)||null,c().createElement(p.Z,null,c().createElement(d.Z,{ref:t,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,Y.gB)(e,I.Fs)},showTags:!0,customFilters:{patchParams:{search:ue,filter:ce,systemProfile:oe,selectedTags:ie}},paginationProps:{isDisabled:0===z},onLoad:function(t){var n=t.mergeWithEntities;e.replaceReducer((0,X.UY)(ne(ne({},h.E),n((0,S.Kq)((0,I.Fs)(),S.G),(0,Z.fm)({page:de,perPage:pe,sort:fe,search:ue},A)))))},getEntities:Pe,tableProps:{actionResolver:function(e){return(0,I.Sb)(me,ke,Ce,e)},canSelectAll:!1,variant:u.B.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:Re,exportConfig:{isDisabled:0===z,onSelect:Ze},actionsConfig:{actions:[c().createElement(G.Z,{key:"remediate-multiple-systems",remediationProvider:De,isDisabled:0===(0,Z.Qy)(H).length||L,isLoading:L}),{key:"assign-multiple-systems",label:w.N.formatMessage(v.Z.titlesTemplateAssign),onClick:function(){return ke(H)},props:{isDisabled:0===Oe}},{key:"remove-multiple-systems",label:w.N.formatMessage(v.Z.titlesTemplateRemoveMultipleButton),onClick:function(){return Ce((0,Z.LI)(H))},props:{isDisabled:0===Oe}}]},filterConfig:be,activeFiltersConfig:Se}))))}},79875:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var s=n(29439),a=n(43297),r=n(5391);const l=function(e){var t=(0,a.useState)({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,isAssignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),n=(0,s.Z)(t,2),l=n[0],o=n[1];return{patchSetState:l,setPatchSetState:o,openPatchSetAssignWizard:function(t){o({isPatchSetWizardOpen:!0,systemsIDs:"string"==typeof t&&""!==t?[t]:(0,r.LI)(e),shouldRefresh:!1})},openUnassignSystemsModal:function(e){o({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openAssignSystemsModal:function(e){o({isAssignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})},openPatchSetEditModal:function(e){o({isPatchSetWizardOpen:!0,patchSetID:e})}}}},72999:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var s=n(29439),a=n(15861),r=n(64687),l=n.n(r),o=n(28216),i=n(83215),c=n(55140),u=n(5391),d=function(){var e=new Worker(new URL(n.p+n.u(7384),n.b));return[e,function(){return e.terminate()}]},p=function(e,t){return e.postMessage(t),new Promise((function(t,n){e.onmessage=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).data,s=e.status,a=e.error,r=e.result;"resolved"===s&&t(r),n(a)}}))},f=function(){var e=(0,a.Z)(l().mark((function e(t,n){var a,r,o,c,u,f,m;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=d(),o=(0,s.Z)(r,2),c=o[0],u=o[1],f=p(c,t),e.next=4,f.catch((function(e){return n((0,i.wN)({title:"There was an error while processing.",description:e,variant:"danger"}))}));case 4:return m=e.sent,u(),e.abrupt("return",!(null==m||null===(a=m.issues)||void 0===a||!a.length)&&m);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();const m=function(e,t,n,s){var r=(0,o.I0)(),i=(0,c.Z)(),d=function(){var o=(0,a.Z)(l().mark((function a(){var o,c;return l().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t(!0),a.next=3,i.auth.getToken();case 3:return o=a.sent,a.next=6,f({payload:(0,u.Q6)(e),remediationType:n,areAllSelected:s,authToken:o},r);case 6:return c=a.sent,t(!1),a.abrupt("return",c);case 9:case"end":return a.stop()}}),a)})));return function(){return o.apply(this,arguments)}}();return d}},5747:(e,t,n)=>{"use strict";n.d(t,{G:()=>d,Kq:()=>v,OC:()=>p,PD:()=>m,lu:()=>f});var s=n(29439),a=n(4942),r=n(36248),l=n(48881),o=n(22789);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},d=function(e,t){return t.loaded?c(c({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,r.Yk)(t.rows,t.selectedRows)}):t},p=function(e,t,n){if("SELECT_ENTITY"===n){var a=t.packageEvraCache;void 0===a&&(a={},t.rows.forEach((function(e){return a[e.id]=e.available_evra})),t.packageEvraCache=a),t.selectedRows=t.selectedRows?Object.fromEntries(Object.entries(t.selectedRows).map((function(e){var t=(0,s.Z)(e,2),n=t[0],r=t[1];return!0===r?[n,a[n]]:[n,r]}))):t.selectedRows}return"LOAD_ENTITIES_FULFILLED"===n&&(t.packageEvraCache=void 0),t.loaded?c(c({},t),{},{columns:e,rows:(0,r.GF)(t.rows,t.selectedRows)}):t},f=function(e,t){return t.loaded?c(c({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,r.dn)(t.rows,t.selectedRows)}):t},m=function(e,t){return t.loaded?c(c({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,r.mf)(t.rows,t.selectedRows)}):t},v=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,s=arguments.length>1?arguments[1]:void 0,a=c({},n);switch(s.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a,s.type);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return(0,l.PW)(a,s);case"SELECT_ENTITY":var r=(0,l.hd)(a,s);return t(e,r,s.type);case o.sq:return u;default:return n}}}},80598:()=>{}}]);