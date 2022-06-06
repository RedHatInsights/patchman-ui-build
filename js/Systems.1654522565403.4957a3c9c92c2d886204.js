(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{2095:(e,t,s)=>{"use strict";t.Zb=t.H0=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=n.__importDefault(s(62802)),i=s(38296),l=s(23053);t.H0=a.createContext({cardId:"",isExpanded:!1}),t.Zb=e=>{var{children:s=null,id:o="",className:c="",component:u="article",isHoverable:d=!1,isCompact:m=!1,isSelectable:f=!1,isSelectableRaised:p=!1,isSelected:h=!1,isDisabledRaised:g=!1,isFlat:v=!1,isExpanded:y=!1,isRounded:b=!1,isLarge:E=!1,isFullHeight:S=!1,isPlain:O=!1,ouiaId:_,ouiaSafe:w=!0}=e,Z=n.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const N=u,P=l.useOUIAProps(t.Zb.displayName,_,w);return m&&E&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),E=!1),a.createElement(t.H0.Provider,{value:{cardId:o,isExpanded:y}},a.createElement(N,Object.assign({id:o,className:i.css(r.default.card,m&&r.default.modifiers.compact,y&&r.default.modifiers.expanded,v&&r.default.modifiers.flat,b&&r.default.modifiers.rounded,E&&r.default.modifiers.displayLg,S&&r.default.modifiers.fullHeight,O&&r.default.modifiers.plain,g?i.css(r.default.modifiers.nonSelectableRaised):p?i.css(r.default.modifiers.selectableRaised,h&&r.default.modifiers.selectedRaised):f||d?i.css(r.default.modifiers.selectable,h&&r.default.modifiers.selected):"",c),tabIndex:f||p?"0":void 0},Z,P),s))},t.Zb.displayName="Card"},85962:(e,t,s)=>{"use strict";t.e=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=n.__importDefault(s(62802)),i=s(38296);t.e=e=>{var{children:t=null,className:s="",component:l="div",isFilled:o=!0}=e,c=n.__rest(e,["children","className","component","isFilled"]);const u=l;return a.createElement(u,Object.assign({className:i.css(r.default.cardBody,!o&&r.default.modifiers.noFill,s)},c),t)},t.e.displayName="CardBody"},36104:(e,t,s)=>{"use strict";t.l=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=s(38296),i=n.__importDefault(s(62802));t.l=e=>{var{children:t=null,className:s="",component:l="div"}=e,o=n.__rest(e,["children","className","component"]);const c=l;return a.createElement(c,Object.assign({className:r.css(i.default.cardTitle,s)},o),t)},t.l.displayName="CardTitle"},26577:(e,t,s)=>{"use strict";t.O=void 0;const n=s(70655),a=n.__importStar(s(43297)),r=n.__importDefault(s(68800)),i=s(38296);t.O=e=>{var{className:t,width:s,height:l,fontSize:o,shape:c,screenreaderText:u}=e,d=n.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const m=o?Object.values(r.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return a.createElement("div",Object.assign({},d,{className:i.css(r.default.skeleton,o&&m,"circle"===c&&r.default.modifiers.circle,"square"===c&&r.default.modifiers.square,t)},(s||l)&&{style:Object.assign({"--pf-c-skeleton--Width":s||void 0,"--pf-c-skeleton--Height":l||void 0},d.style)}),a.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},77927:(e,t,s)=>{"use strict";t.tz={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},t.jt=s(35183).createIcon(t.tz),t.ZP=t.jt},68800:(e,t,s)=>{"use strict";t.__esModule=!0,s(53336),t.default={modifiers:{circle:"pf-m-circle",square:"pf-m-square",widthSm:"pf-m-width-sm",widthMd:"pf-m-width-md",widthLg:"pf-m-width-lg",width_25:"pf-m-width-25",width_33:"pf-m-width-33",width_50:"pf-m-width-50",width_66:"pf-m-width-66",width_75:"pf-m-width-75",heightSm:"pf-m-height-sm",heightMd:"pf-m-height-md",heightLg:"pf-m-height-lg",height_25:"pf-m-height-25",height_33:"pf-m-height-33",height_50:"pf-m-height-50",height_66:"pf-m-height-66",height_75:"pf-m-height-75",height_100:"pf-m-height-100",text_4xl:"pf-m-text-4xl",text_3xl:"pf-m-text-3xl",text_2xl:"pf-m-text-2xl",textXl:"pf-m-text-xl",textLg:"pf-m-text-lg",textMd:"pf-m-text-md",textSm:"pf-m-text-sm"},skeleton:"pf-c-skeleton"}},33739:(e,t,s)=>{"use strict";s.d(t,{Z:()=>v});var n=s(43297),a=s.n(n),r=s(45697),i=s.n(r),l=s(59823),o=s(334),c=s(28216),u=s(95995),d=s(39591),m=s(94184),f=s.n(m),p=function(){return p=Object.assign||function(e){for(var t,s=1,n=arguments.length;s<n;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},p.apply(this,arguments)},h=function(e){var t=(0,o.useHistory)(),s=(0,c.oR)(),r=e.component;return a().createElement(r,{className:f()(e.className,"inventory")},a().createElement(n.Suspense,{fallback:e.fallback},a().createElement(l.ScalprumComponent,p({history:t,store:s,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:a().createElement(d.Z,p({component:"InventoryDetailHead",history:t,store:s},e)),ref:e.innerRef},e))))};h.propTypes={fallback:i().node,innerRef:i().object,component:i().string,className:i().string};var g=a().forwardRef((function(e,t){return a().createElement(h,p({innerRef:t},e))}));g.propTypes={fallback:i().node,component:i().string,className:i().string},g.defaultProps={fallback:a().createElement(u.Bullseye,{className:"pf-u-p-lg"},a().createElement(u.Spinner,{size:"xl"})),component:"section"};const v=g},7229:(e,t,s)=>{"use strict";s.d(t,{Z:()=>b});var n=s(15861),a=s(87757),r=s.n(a),i=s(43297),l=s.n(i),o=s(45697),c=s.n(o),u=s(28216),d=s(78826),m=s(6202),f=s(32132),p=s(30893),h=s(11220),g=s(13784),v=s(83215),y=function(e){var t=e.unassignSystemsModalState,s=void 0===t?{}:t,a=e.setUnassignSystemsModalOpen,i=(0,u.I0)(),o=s.systemsIDs,c=s.isUnassignSystemsModalOpen,y=function(e){a({isUnassignSystemsModalOpen:!c,systemsIDs:[],shouldRefresh:e})},b=function(){var e=(0,n.Z)(r().mark((function e(){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,h.J_)({inventory_ids:o});case 2:200===e.sent.status&&(y(!0),i((0,v.wN)((0,g.$z)((null==o?void 0:o.length)||0).success)));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return l().createElement(d.Modal,{variant:"small",isOpen:s.isUnassignSystemsModalOpen,title:"Remove systems",onClose:y,titleIconVariant:"warning",actions:[l().createElement(m.Button,{key:"confirm",variant:"danger",onClick:b},f.N.formatMessage(p.Z.labelsRemove)),l().createElement(m.Button,{key:"cancel",variant:"link",onClick:y},f.N.formatMessage(p.Z.labelsCancel))]},f.N.formatMessage(p.Z.textUnassignSystemsStatement,{systemIDs:l().createElement("b",null,o?o.length:0)}))};y.propTypes={setUnassignSystemsModalOpen:c().func,unassignSystemsModalState:c().object};const b=y},55485:(e,t,s)=>{"use strict";s.d(t,{Z:()=>c});var n=s(43297),a=s.n(n),r=s(45697),i=s.n(r),l=s(22663),o=function(e){var t=e.data,s=e.setRemediationOpen;return a().createElement(l.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:s,fallback:a().createElement("span",null),data:t})};o.propTypes={data:i().object,setRemediationOpen:i().func};const c=o},32283:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>se});var n=s(4942),a=s(15861),r=s(29439),i=s(87757),l=s.n(i),o=s(43297),c=s.n(o),u=s(72573),d=s(6202),m=s(33739),f=s(14748),p=s(28216),h=s(334),g=s(30893),v=s(90747),y=s(75585),b=s(83905),E=s(23188),S=s(49642),O=s(73888),_=s(2807),w=s(9557),Z=s(5747),N=s(11220),P=s(13784),x=s(57358),L=s(91607),I=s(32132),k=s(58684),C=s(93433),D=s(35451),j=s(77927),R=s(19694),T=s(45697),M=s.n(T),F=s(36104),H=s(26577),U=s(2095),B=s(49287),q=s(18038),z=s(85962),A=s(36001),G=s(42057),W=function(e){var t=e.title,s=e.color,n=e.Icon,a=e.value,r=e.filter,i=e.apply;return c().createElement(U.Zb,{isCompact:!0,isFullHeight:!0},c().createElement(F.l,{style:{marginTop:"0px"}},t),c().createElement(z.e,{className:"fonst-size-sm"},c().createElement(A.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},c().createElement(G.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},c().createElement(n,{color:s,size:"md"})),c().createElement(G.B,{isFilled:!0,spacer:{default:"spacerNone"}},void 0===a&&c().createElement(H.O,{width:"24px"})||c().createElement(d.Button,{variant:"link",onClick:function(){return i(r)},className:"patch-status-report-text"},a)))))},V=function(e){var t,s,n,i=e.apply,u=e.queryParams,d=c().useState({}),m=(0,r.Z)(d,2),h=m[0],v=m[1],y=(0,p.v9)((function(e){return e.GlobalFilterStore})),b=y.selectedTags,E=y.selectedGlobalTags,S=y.systemProfile;return(0,o.useMemo)((0,a.Z)(l().mark((function e(){var t,s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v({}),e.prev=1,e.next=4,(0,N.lc)({filter:{os:null==u||null===(s=u.filter)||void 0===s?void 0:s.os},selectedTags:[].concat((0,C.Z)(b),(0,C.Z)(E)),systemProfile:S,limit:1});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=[];case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),[null==u||null===(t=u.filter)||void 0===t||null===(s=t.os)||void 0===s?void 0:s.length,void 0!==(null==u||null===(n=u.filter)||void 0===n?void 0:n.os),null==b?void 0:b.length,void 0!==b,null==E?void 0:E.length,void 0!==E,S,void 0!==(null==u?void 0:u.subtotals)]).then((function(e){var t;v(null===(t=e.meta)||void 0===t?void 0:t.subtotals)})),c().createElement(f.Z,{style:{paddingBottom:0}},c().createElement(B.r,{hasGutter:!0,span:12},c().createElement(q.P,{span:12,md:3},c().createElement(W,{title:I.N.formatMessage(g.Z.labelsStatusSystemsUpToDate),Icon:D.default,color:"var(--pf-global--success-color--100)",value:null==h?void 0:h.patched,apply:i,filter:{filter:{packages_updatable:"eq:0"}}})),c().createElement(q.P,{span:12,md:3},c().createElement(W,{title:I.N.formatMessage(g.Z.labelsStatusSystemsWithPatchesAvailable),Icon:j.ZP,color:"var(--pf-global--primary-color--100)",value:null==h?void 0:h.unpatched,apply:i,filter:{filter:{packages_updatable:"gt:0"}}})),c().createElement(q.P,{span:12,md:3},c().createElement(W,{title:I.N.formatMessage(g.Z.labelsStatusStaleSystems),Icon:R.default,color:"var(--pf-global--warning-color--100)",value:null==h?void 0:h.stale,apply:i,filter:{filter:{stale:!0}}}))))};W.propTypes={title:M().string,Icon:M().elementType,value:M().string,color:M().string,apply:M().func,filter:M().object},V.propTypes={apply:M().func,queryParams:M().object};const Q=V;var Y=s(32166),J=s(55485),K=function(e){var t=e.onClick,s=e.isDisabled,n=e.isLoading,a=e.ouia,r=e.children;return c().createElement(d.Button,{isDisabled:s,onClick:t,ouiaId:a,variant:"primary",isLoading:n},r)};K.propTypes={onClick:M().object,isDisabled:M().bool,isLoading:M().bool,ouia:M().string,children:M().element};const $=K;var X=s(7229);function ee(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function te(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):ee(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}const se=function(){var e=I.N.formatMessage(g.Z.titlesSystems);(0,L.Iw)(e);var t=(0,h.useHistory)(),s=(0,p.I0)(),n=c().useState(!1),i=(0,r.Z)(n,2),C=i[0],D=i[1],j=c().useState(!1),R=(0,r.Z)(j,2),T=R[0],M=R[1],F=c().useState({isUnassignSystemsModalOpen:!1,systemsIDs:[]}),H=(0,r.Z)(F,2),U=H[0],B=H[1],q=c().useState((function(){return function(){return null}})),z=(0,r.Z)(q,2),A=z[0],G=z[1],W=c().useState({isOpen:!1,shouldRefresh:!1,systemsIDs:[]}),V=(0,r.Z)(W,2),K=V[0],ee=V[1],se=(0,L.ye)(P.VH.patch_set),ne=(0,x.PZ)(t.location.search),ae=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),p.wU),re=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),ie=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),le=(0,p.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),oe=(0,p.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),ce=oe.systemProfile,ue=oe.selectedTags,de=oe.filter,me=oe.search,fe=oe.page,pe=oe.perPage,he=oe.sort;function ge(e){return ve.apply(this,arguments)}function ve(){return(ve=(0,a.Z)(l().mark((function e(t){var s;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return M(!0),e.next=3,t;case 3:s=e.sent,G((function(){return function(){return c().createElement(J.Z,{data:s,isRemediationOpen:!0,setRemediationOpen:D})}})),D(!C),M(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ye(e){s((0,w.SF)(e))}c().useEffect((function(){return ye(ne),function(){return s((0,w.RV)())}}),[]);var be=(0,L.j5)(te({search:me},de),ye,P.hb),Ee=(0,r.Z)(be,1)[0],Se={items:[(0,v.Z)(ye,me,I.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),I.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,y.Z)(ye,de),(0,E.Z)(ye,de),(0,b.Z)(de,ye)]},Oe={filters:(0,x.mt)(de,me,I.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle)),onDelete:Ee,deleteTitle:I.N.formatMessage(g.Z.labelsFiltersReset)},_e=(0,L.ry)(ae,ie,(function(){return(0,N.lc)(te(te({},oe),{},{limit:-1})).then(x.zw)}),(function(e){s({type:"SELECT_ENTITY",payload:e})})),we=ie&&(0,x.Qy)(ie).length,Ze=(0,L.AR)("systems",oe,{csv:N.wI,json:N.TW},s),Ne=function(e){return(0,N.ob)({limit:-1}).then((function(t){var s=t.data;return(0,N.fq)({advisories:s.map((function(e){return e.id})),systems:e})}))},Pe=(0,L.U)(N.lc,ye,{},t,(function(e){s((0,w._e)(e))}),(function(e){s((0,w.vl)(e))}));(0,o.useEffect)((function(){return K.shouldRefresh&&_e("none")}),[K.shouldRefresh]);var xe=function(e){B({isUnassignSystemsModalOpen:!0,systemsIDs:e})};return c().createElement(c().Fragment,null,c().createElement(S.Z,{title:I.N.formatMessage(g.Z.titlesPatchSystems),headerOUIA:"systems"}),c().createElement(Q,{apply:ye,queryParams:oe}),c().createElement(X.Z,{unassignSystemsModalState:U,setUnassignSystemsModalOpen:B,systemsIDs:U.systemsIDs}),K.isOpen&&se&&c().createElement(Y.Z,{systemsIDs:K.systemsIDs,setBaselineState:ee}),C&&c().createElement(A,null)||null,c().createElement(f.Z,null,le.hasError&&c().createElement(O.Z,{code:le.code})||c().createElement(m.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:function(e){return(0,x.gB)(e,!0)},showTags:!0,customFilters:{patchParams:{search:me,filter:de,systemProfile:ce,selectedTags:ue},shouldRefresh:!0===K.shouldRefresh},paginationProps:{isDisabled:0===re},onLoad:function(e){var t=e.mergeWithEntities;(0,_.z)(te({},t((0,Z.Kq)((0,k.Fs)(se),Z.G),(0,x.fm)({page:fe,perPage:pe,sort:he,search:me},ne))))},getEntities:Pe,actions:(0,k.Sb)(ge,(function(e){ee({isOpen:!0,systemsIDs:[e.id]})}),se,xe),tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:u.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:(0,L.Pz)(we,_e,{total_items:re},ae),exportConfig:{isDisabled:0===re,onSelect:Ze},actionsConfig:{actions:[c().createElement(d.Button,{onClick:function(){ee({isOpen:!0,systemsIDs:Object.keys(ie)})},key:"assign-multiple-systems",isDisabled:0===we},I.N.formatMessage(g.Z.titlesPatchSetAssign)),{key:"remove-multiple-systems",label:I.N.formatMessage(g.Z.titlesPatchSetRemoveMultipleButton),onClick:function(){return xe((0,x.LI)(ie))},props:{isDisabled:0===we}}]},filterConfig:Se,activeFiltersConfig:Oe,dedicatedAction:c().createElement($,{isDisabled:0===(0,x.Qy)(ie).length,onClick:function(){return ge((0,x.Sz)((0,x.Q6)(ie),Ne,x.R9,P.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:T},I.N.formatMessage(g.Z.labelsRemediate))})))}},5747:(e,t,s)=>{"use strict";s.d(t,{G:()=>u,Kq:()=>m,OC:()=>d});var n=s(4942),a=s(57668),r=s(48881),i=s(22789);function l(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,n)}return s}function o(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?l(Object(s),!0).forEach((function(t){(0,n.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):l(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?o(o({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,a.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t){return t.loaded?o(o({},t),{},{columns:e,rows:(0,a.GF)(t.rows,t.selectedRows)}):t},m=function(e,t){return function(){var s=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0,a=o({},s);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return a.status={isLoading:!0,hasError:!0},a;case"SELECT_ENTITY":var l=(0,r.hd)(a,n);return t(e,l);case i.sq:return c;default:return s}}}},53336:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Systems.bfdebaf8a56f6673d4c79c7e76fc7f4f.js.map