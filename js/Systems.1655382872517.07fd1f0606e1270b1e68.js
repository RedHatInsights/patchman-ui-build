(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{2095:(e,t,s)=>{"use strict";t.Zb=t.H0=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=n.__importDefault(s(62802)),i=s(38296),l=s(23053);t.H0=a.createContext({cardId:"",isExpanded:!1}),t.Zb=e=>{var{children:s=null,id:o="",className:c="",component:u="article",isHoverable:d=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:p=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:v=!1,isExpanded:y=!1,isRounded:b=!1,isLarge:S=!1,isFullHeight:E=!1,isPlain:O=!1,ouiaId:_,ouiaSafe:w=!0}=e,Z=n.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const P=u,x=l.useOUIAProps(t.Zb.displayName,_,w);return m&&S&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),S=!1),a.createElement(t.H0.Provider,{value:{cardId:o,isExpanded:y}},a.createElement(P,Object.assign({id:o,className:i.css(r.default.card,m&&r.default.modifiers.compact,y&&r.default.modifiers.expanded,v&&r.default.modifiers.flat,b&&r.default.modifiers.rounded,S&&r.default.modifiers.displayLg,E&&r.default.modifiers.fullHeight,O&&r.default.modifiers.plain,g?i.css(r.default.modifiers.nonSelectableRaised):p?i.css(r.default.modifiers.selectableRaised,h&&r.default.modifiers.selectedRaised):f||d?i.css(r.default.modifiers.selectable,h&&r.default.modifiers.selected):"",c),tabIndex:f||p?"0":void 0},Z,x),s))},t.Zb.displayName="Card"},85962:(e,t,s)=>{"use strict";t.e=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=n.__importDefault(s(62802)),i=s(38296);t.e=e=>{var{children:t=null,className:s="",component:l="div",isFilled:o=!0}=e,c=n.__rest(e,["children","className","component","isFilled"]);const u=l;return a.createElement(u,Object.assign({className:i.css(r.default.cardBody,!o&&r.default.modifiers.noFill,s)},c),t)},t.e.displayName="CardBody"},36104:(e,t,s)=>{"use strict";t.l=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=s(38296),i=n.__importDefault(s(62802));t.l=e=>{var{children:t=null,className:s="",component:l="div"}=e,o=n.__rest(e,["children","className","component"]);const c=l;return a.createElement(c,Object.assign({className:r.css(i.default.cardTitle,s)},o),t)},t.l.displayName="CardTitle"},26577:(e,t,s)=>{"use strict";t.O=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=n.__importDefault(s(68800)),i=s(38296);t.O=e=>{var{className:t,width:s,height:l,fontSize:o,shape:c,screenreaderText:u}=e,d=n.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const m=o?Object.values(r.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return a.createElement("div",Object.assign({},d,{className:i.css(r.default.skeleton,o&&m,"circle"===c&&r.default.modifiers.circle,"square"===c&&r.default.modifiers.square,t)},(s||l)&&{style:Object.assign({"--pf-c-skeleton--Width":s||void 0,"--pf-c-skeleton--Height":l||void 0},d.style)}),a.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},77927:(e,t,s)=>{"use strict";t.tz={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},t.jt=s(35183).createIcon(t.tz),t.ZP=t.jt},68800:(e,t,s)=>{"use strict";t.__esModule=!0,s(53336),t.default={modifiers:{circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"},skeleton:"pf-c-skeleton"}},33739:(e,t,s)=>{"use strict";s.d(t,{Z:()=>v});var n=s(43297),a=s.n(n),r=s(45697),i=s.n(r),l=s(59823),o=s(334),c=s(28216),u=s(95995),d=s(39591),m=s(94184),f=s.n(m),p=function(){return p=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},h=function(e){var t=(0,o.useHistory)(),s=(0,c.oR)(),r=e.component;return a().createElement(r,{className:f()(e.className,"inventory")},a().createElement(n.Suspense,{fallback:e.fallback},a().createElement(l.ScalprumComponent,p({history:t,store:s,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:a().createElement(d.Z,p({component:"InventoryDetailHead",history:t,store:s},e)),ref:e.innerRef},e))))};h.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var g=a().forwardRef((function(e,t){return a().createElement(h,p({innerRef:t},e))}));g.propTypes={fallback:i().node,component:i().string,className:i().string},g.defaultProps={fallback:a().createElement(u.Bullseye,{className:"pf-u-p-lg"},a().createElement(u.Spinner,{size:"xl"})),component:"section"};const v=g},98333:(e,t,s)=>{"use strict";s.d(t,{Z:()=>w});var n=s(29439),a=s(43297),r=s.n(a),i=s(45697),l=s.n(i),o=s(78826),c=s(6202),u=s(49287),d=s(26577),m=s(74806),f=s(30893),p=s(15861),h=s(87757),g=s.n(h),v=s(28216),y=s(83215),b=s(11220),S=s(13784),E=s(18038),O=function(e,t,s){return r().createElement(E.P,null,s.formatMessage(f.Z[e],{systemsCount:t,b:function(){for(var e=arguments.length,t=new Array(e),s=0;s<e;s++)t[s]=arguments[s];return r().createElement("b",null,t)}}))},_=function(e){var t=e.unassignSystemsModalState,s=void 0===t?{}:t,i=e.setUnassignSystemsModalOpen,l=e.intl,m=s.systemsIDs,h=s.isUnassignSystemsModalOpen,E=(0,a.useState)([]),_=(0,n.Z)(E,2),w=_[0],Z=_[1],P=(0,a.useState)(!0),x=(0,n.Z)(P,2),N=x[0],L=x[1],I=function(e){i({isUnassignSystemsModalOpen:!h,systemsIDs:[],shouldRefresh:e})},C=function(){I(!1)},D=function(e,t){var s=(0,v.I0)(),n=function(){var n=(0,p.Z)(g().mark((function n(){return g().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,b.J_)({inventory_ids:t});case 2:200===n.sent.status&&(e(!0),s((0,y.wN)((0,S.$z)((null==t?void 0:t.length)||0).success)));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n}(I,w);(0,a.useEffect)((function(){(function(e){return(0,b.lc)({limit:-1,"filter[baseline_name]":"neq:"}).then((function(t){return e.filter((function(e){return null==t?void 0:t.data.some((function(t){return t.id===e}))}))}))})(m).then((function(e){Z(e),L(!1)}))}),[m]);var k=m.length-w.length;return r().createElement(o.Modal,{variant:"small",isOpen:s.isUnassignSystemsModalOpen,title:l.formatMessage(f.Z.textUnassignSystemsTitle),onClose:C,titleIconVariant:"warning",actions:[r().createElement(c.Button,{key:"confirm",variant:"danger",onClick:D,isDisabled:0===w.length},l.formatMessage(f.Z.labelsRemove)),r().createElement(c.Button,{key:"cancel",variant:"link",onClick:C},l.formatMessage(f.Z.labelsCancel))]},r().createElement(u.r,{container:!0,hasGutter:!0},N&&r().createElement(d.O,null),!N&&0!==w.length&&O("textUnassignSystemsStatement",w.length,l),!N&&k>0&&O("textUnassignSystemsWarning",k,l)))};_.propTypes={intl:l().any,setUnassignSystemsModalOpen:l().func,unassignSystemsModalState:l().object};const w=(0,m.ZP)(_)},55485:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var n=s(43297),a=s.n(n),r=s(45697),i=s.n(r),l=s(22663),o=function(e){var t=e.data,s=e.setRemediationOpen;return a().createElement(l.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:s,fallback:a().createElement("span",null),data:t})};o.propTypes={data:i().object,setRemediationOpen:i().func};const c=o},10637:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>te});var n=s(4942),a=s(15861),r=s(29439),i=s(87757),l=s.n(i),o=s(43297),c=s.n(o),u=s(72573),d=s(6202),m=s(33739),f=s(14748),p=s(28216),h=s(334),g=s(30893),v=s(90747),y=s(75585),b=s(83905),S=s(23188),E=s(49642),O=s(73888),_=s(2807),w=s(9557),Z=s(5747),P=s(11220),x=s(13784),N=s(57358),L=s(91607),I=s(32132),C=s(58684),D=s(93433),k=s(35451),R=s(77927),j=s(19694),M=s(45697),T=s.n(M),F=s(36104),U=s(26577),z=s(2095),H=s(49287),q=s(18038),B=s(85962),A=s(36001),W=s(42057),G=function(e){var t=e.title,s=e.color,n=e.Icon,a=e.value,r=e.filter,i=e.apply;return c().createElement(z.Zb,{isCompact:!0,isFullHeight:!0},c().createElement(F.l,{style:{marginTop:"0px"}},t),c().createElement(B.e,{className:"fonst-size-sm"},c().createElement(A.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},c().createElement(W.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},c().createElement(n,{color:s,size:"md"})),c().createElement(W.B,{isFilled:!0,spacer:{default:"spacerNone"}},void 0===a&&c().createElement(U.O,{width:"24px"})||c().createElement(d.Button,{variant:"link",onClick:function(){return i(r)},className:"patch-status-report-text"},a)))))},V=function(e){var t,s,n,i=e.apply,u=e.queryParams,d=c().useState({}),m=(0,r.Z)(d,2),h=m[0],v=m[1],y=(0,p.v9)((function(e){return e.GlobalFilterStore})),b=y.selectedTags,S=y.selectedGlobalTags,E=y.systemProfile;return(0,o.useMemo)((0,a.Z)(l().mark((function e(){var t,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({}),e.prev=1,e.next=4,(0,P.lc)({filter:{os:null==u||null===(s=u.filter)||void 0===s?void 0:s.os},selectedTags:[].concat((0,D.Z)(b),(0,D.Z)(S)),systemProfile:E,limit:1});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=[];case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),[null==u||null===(t=u.filter)||void 0===t||null===(s=t.os)||void 0===s?void 0:s.length,void 0!==(null==u||null===(n=u.filter)||void 0===n?void 0:n.os),null==b?void 0:b.length,void 0!==b,null==S?void 0:S.length,void 0!==S,E,void 0!==(null==u?void 0:u.subtotals)]).then((function(e){var t;v(null===(t=e.meta)||void 0===t?void 0:t.subtotals)})),c().createElement(f.Z,{style:{paddingBottom:0}},c().createElement(H.r,{hasGutter:!0,span:12},c().createElement(q.P,{span:12,md:3},c().createElement(G,{title:I.N.formatMessage(g.Z.labelsStatusSystemsUpToDate),Icon:k.default,color:"var(--pf-global--success-color--100)",value:null==h?void 0:h.patched,apply:i,filter:{filter:{packages_updatable:"eq:0"}}})),c().createElement(q.P,{span:12,md:3},c().createElement(G,{title:I.N.formatMessage(g.Z.labelsStatusSystemsWithPatchesAvailable),Icon:R.ZP,color:"var(--pf-global--primary-color--100)",value:null==h?void 0:h.unpatched,apply:i,filter:{filter:{packages_updatable:"gt:0"}}})),c().createElement(q.P,{span:12,md:3},c().createElement(G,{title:I.N.formatMessage(g.Z.labelsStatusStaleSystems),Icon:j.default,color:"var(--pf-global--warning-color--100)",value:null==h?void 0:h.stale,apply:i,filter:{filter:{stale:!0}}}))))};G.propTypes={title:T().string,Icon:T().elementType,value:T().string,color:T().string,apply:T().func,filter:T().object},V.propTypes={apply:T().func,queryParams:T().object};const Q=V;var Y=s(32166),J=s(55485),K=s(53074),$=s(98333);function X(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function ee(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?X(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):X(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const te=function(){var e=(0,o.useRef)(null),t=I.N.formatMessage(g.Z.titlesSystems);(0,L.Iw)(t);var s=(0,h.useHistory)(),n=(0,p.I0)(),i=c().useState(!1),D=(0,r.Z)(i,2),k=D[0],R=D[1],j=c().useState(!1),M=(0,r.Z)(j,2),T=M[0],F=M[1],U=c().useState((function(){return function(){return null}})),z=(0,r.Z)(U,2),H=z[0],q=z[1],B=c().useState({isPatchSetWizardOpen:!1,isUnassignSystemsModalOpen:!1,shouldRefresh:!1,systemsIDs:[]}),A=(0,r.Z)(B,2),W=A[0],G=A[1],V=(0,L.ye)(x.VH.patch_set),X=(0,N.PZ)(s.location.search),te=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),p.wU),se=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),ne=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),ae=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),re=(0,p.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),ie=re.systemProfile,le=re.selectedTags,oe=re.filter,ce=re.search,ue=re.page,de=re.perPage,me=re.sort;function fe(e){return pe.apply(this,arguments)}function pe(){return(pe=(0,a.Z)(l().mark((function e(t){var s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t;case 2:s=e.sent,q((function(){return function(){return c().createElement(J.Z,{data:s,isRemediationOpen:!0,setRemediationOpen:R})}})),R(!k);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function he(e){G({isPatchSetWizardOpen:!0,systemsIDs:[e.id]})}function ge(e){n((0,w.SF)(e))}c().useEffect((function(){return ge(X),function(){return n((0,w.RV)())}}),[]);var ve=(0,L.j5)(ee({search:ce},oe),ge,x.hb),ye=(0,r.Z)(ve,1)[0],be={items:[(0,v.Z)(ge,ce,I.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),I.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,y.Z)(ge,oe),(0,S.Z)(ge,oe),(0,b.Z)(oe,ge)]},Se={filters:(0,N.mt)(oe,ce,I.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle)),onDelete:ye,deleteTitle:I.N.formatMessage(g.Z.labelsFiltersReset)},Ee=(0,L.ry)(te,ne,(function(){return(0,P.lc)(ee(ee({},re),{},{limit:-1})).then(N.zw)}),(function(e){n({type:"SELECT_ENTITY",payload:e})})),Oe=ne&&(0,N.Qy)(ne).length,_e=(0,L.AR)("systems",re,{csv:P.wI,json:P.TW},n),we=function(e){return(0,P.ob)({limit:-1}).then((function(t){var s=t.data;return(0,P.fq)({advisories:s.map((function(e){return e.id})),systems:e})}))},Ze=(0,L.U)(P.lc,ge,{},s,(function(e){n((0,w._e)(e))}),(function(e){n((0,w.vl)(e))}));(0,o.useEffect)((function(){var t;W.shouldRefresh&&(Ee("none"),null==e||null===(t=e.current)||void 0===t||t.onRefreshData())}),[W.shouldRefresh]);var Pe=function(e){G({isUnassignSystemsModalOpen:!0,systemsIDs:e,shouldRefresh:!1})};return c().createElement(c().Fragment,null,c().createElement(E.Z,{title:I.N.formatMessage(g.Z.titlesPatchSystems),headerOUIA:"systems"}),c().createElement(Q,{apply:ge,queryParams:re}),W.isUnassignSystemsModalOpen&&V&&c().createElement($.Z,{unassignSystemsModalState:W,setUnassignSystemsModalOpen:G,systemsIDs:W.systemsIDs}),W.isPatchSetWizardOpen&&V&&c().createElement(Y.Z,{systemsIDs:W.systemsIDs,setBaselineState:G}),k&&c().createElement(H,null)||null,c().createElement(f.Z,null,ae.hasError&&c().createElement(O.Z,{code:ae.code})||c().createElement(m.Z,{ref:e,isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,N.gB)(e,!0)},showTags:!0,customFilters:{patchParams:{search:ce,filter:oe,systemProfile:ie,selectedTags:le}},paginationProps:{isDisabled:0===se},onLoad:function(e){var t=e.mergeWithEntities;(0,_.z)(ee({},t((0,Z.Kq)((0,C.Fs)(V),Z.G),(0,N.fm)({page:ue,perPage:de,sort:me,search:ce},X))))},getEntities:Ze,actions:(0,C.Sb)(fe,he,V,Pe),tableProps:{actionResolver:function(e){return(0,C.Sb)(fe,he,V,Pe,e)},canSelectAll:!1,variant:u.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:(0,L.Pz)(Oe,Ee,{total_items:se},te),exportConfig:{isDisabled:0===se,onSelect:_e},actionsConfig:V&&{actions:[c().createElement(d.Button,{onClick:function(){G({isPatchSetWizardOpen:!0,systemsIDs:(0,N.LI)(ne),shouldRefresh:!1})},key:"assign-multiple-systems",isDisabled:0===Oe},I.N.formatMessage(g.Z.titlesPatchSetAssign)),{key:"remove-multiple-systems",label:I.N.formatMessage(g.Z.titlesPatchSetRemoveMultipleButton),onClick:function(){return Pe((0,N.LI)(ne))},props:{isDisabled:0===Oe}}]},filterConfig:be,activeFiltersConfig:Se,dedicatedAction:c().createElement(K.Z,{remediationProvider:function(){return F(!0),(0,N.Sz)((0,N.Q6)(ne),we,N.R9,x.oN.advisory).then((function(e){return F(!1),e}))},isDisabled:0===(0,N.Qy)(ne).length,isLoading:T})})))}},5747:(e,t,s)=>{"use strict";s.d(t,{G:()=>u,Kq:()=>m,OC:()=>d});var n=s(4942),a=s(57668),r=s(48881),i=s(22789);function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?o(o({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t){return t.loaded?o(o({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},m=function(e,t){return function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0,a=o({},s);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return a.status={isLoading:!0,hasError:!0},a;case"SELECT_ENTITY":var l=(0,r.hd)(a,n);return t(e,l);case i.sq:return c;default:return s}}}},53336:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Systems.e2ad7af9630c4e72d3a9565a551aea31.js.map