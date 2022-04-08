"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{2095:(e,t,a)=>{t.Zb=t.H0=void 0;const s=a(70655),l=s.__importStar(a(43297)),r=s.__importDefault(a(62802)),n=a(38296),i=a(23053);t.H0=l.createContext({cardId:"",isExpanded:!1}),t.Zb=e=>{var{children:a=null,id:o="",className:c="",component:u="article",isHoverable:d=!1,isCompact:f=!1,isSelectable:m=!1,isSelectableRaised:p=!1,isSelected:v=!1,isDisabledRaised:b=!1,isFlat:g=!1,isExpanded:h=!1,isRounded:y=!1,isLarge:S=!1,isFullHeight:E=!1,isPlain:Z=!1,ouiaId:_,ouiaSafe:N=!0}=e,O=s.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const P=u,C=i.useOUIAProps(t.Zb.displayName,_,N);return f&&S&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),S=!1),l.createElement(t.H0.Provider,{value:{cardId:o,isExpanded:h}},l.createElement(P,Object.assign({id:o,className:n.css(r.default.card,f&&r.default.modifiers.compact,h&&r.default.modifiers.expanded,g&&r.default.modifiers.flat,y&&r.default.modifiers.rounded,S&&r.default.modifiers.displayLg,E&&r.default.modifiers.fullHeight,Z&&r.default.modifiers.plain,b?n.css(r.default.modifiers.nonSelectableRaised):p?n.css(r.default.modifiers.selectableRaised,v&&r.default.modifiers.selectedRaised):m||d?n.css(r.default.modifiers.selectable,v&&r.default.modifiers.selected):"",c),tabIndex:m||p?"0":void 0},O,C),a))},t.Zb.displayName="Card"},85962:(e,t,a)=>{t.e=void 0;const s=a(70655),l=s.__importStar(a(43297)),r=s.__importDefault(a(62802)),n=a(38296);t.e=e=>{var{children:t=null,className:a="",component:i="div",isFilled:o=!0}=e,c=s.__rest(e,["children","className","component","isFilled"]);const u=i;return l.createElement(u,Object.assign({className:n.css(r.default.cardBody,!o&&r.default.modifiers.noFill,a)},c),t)},t.e.displayName="CardBody"},36104:(e,t,a)=>{t.l=void 0;const s=a(70655),l=s.__importStar(a(43297)),r=a(38296),n=s.__importDefault(a(62802));t.l=e=>{var{children:t=null,className:a="",component:i="div"}=e,o=s.__rest(e,["children","className","component"]);const c=i;return l.createElement(c,Object.assign({className:r.css(n.default.cardTitle,a)},o),t)},t.l.displayName="CardTitle"},26577:(e,t,a)=>{t.O=void 0;const s=a(70655),l=s.__importStar(a(43297)),r=s.__importDefault(a(68800)),n=a(38296);t.O=e=>{var{className:t,width:a,height:i,fontSize:o,shape:c,screenreaderText:u}=e,d=s.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const f=o?Object.values(r.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return l.createElement("div",Object.assign({},d,{className:n.css(r.default.skeleton,o&&f,"circle"===c&&r.default.modifiers.circle,"square"===c&&r.default.modifiers.square,t)},(a||i)&&{style:Object.assign({"--pf-c-skeleton--Width":a||void 0,"--pf-c-skeleton--Height":i||void 0},d.style)}),l.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},77927:(e,t,a)=>{t.tz={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},t.jt=a(35183).createIcon(t.tz),t.ZP=t.jt},55485:(e,t,a)=>{a.d(t,{Z:()=>c});var s=a(43297),l=a.n(s),r=a(45697),n=a.n(r),i=a(22663),o=function(e){var t=e.data,a=e.setRemediationOpen;return l().createElement(i.Z,{appName:"remediations",module:"./RemediationWizard",setOpen:a,fallback:l().createElement("span",null),data:t})};o.propTypes={data:n().object,setRemediationOpen:n().func};const c=o},91181:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ae});var s=a(4942),l=a(15861),r=a(29439),n=a(87757),i=a.n(n),o=a(43297),c=a.n(o),u=a(72573),d=a(33739),f=a(86350),m=a(28216),p=a(334),v=a(30893),b=a(90747),g=a(44612),h=a(13784),y=a(32132);const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.stale,s=c().useMemo((function(){return h.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),l=a&&(Array.isArray(a)&&a.map((function(e){return e.toString()}))||[a.toString()]),r=function(t){e({filter:{stale:t}})};return{label:y.N.formatMessage(v.Z.labelsFiltersStale),type:g.Y.checkbox,filterValues:{onChange:function(e,t){r(t)},items:s,value:l,placeholder:y.N.formatMessage(v.Z.labelsFiltersStalePlaceholder)}}};var E=a(83905);const Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.packages_updatable,s=function(t){e({filter:{packages_updatable:t}})};return{label:y.N.formatMessage(v.Z.labelsFiltersUpdatable),type:g.Y.radio,filterValues:{onChange:function(e,t){s(t)},items:h.Tl,value:a,placeholder:y.N.formatMessage(v.Z.labelsFiltersUpdatablePlaceholder)}}};var _=a(49642),N=a(73888),O=a(2807),P=a(9557),C=a(5747),L=a(11220),w=a(57358),k=a(91607),F=a(58684),T=a(93433),j=a(35451),x=a(77927),D=a(19694),I=a(45697),M=a.n(I),R=a(36104),H=a(6202),z=a(26577),q=a(2095),A=a(49287),B=a(18038),U=a(85962),W=a(36001),V=a(42057),G=function(e){var t=e.title,a=e.color,s=e.Icon,l=e.value,r=e.filter,n=e.apply;return c().createElement(q.Zb,{isCompact:!0,isFullHeight:!0},c().createElement(R.l,{style:{marginTop:"0px"}},t),c().createElement(U.e,{className:"fonst-size-sm"},c().createElement(W.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},c().createElement(V.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},c().createElement(s,{color:a,size:"md"})),c().createElement(V.B,{isFilled:!0,spacer:{default:"spacerNone"}},void 0===l&&c().createElement(z.O,{width:"24px"})||c().createElement(H.Button,{variant:"link",onClick:function(){return n(r)},className:"patch-status-report-text"},l)))))},Q=function(e){var t,a,s,n=e.apply,u=e.queryParams,d=c().useState({}),p=(0,r.Z)(d,2),b=p[0],g=p[1],h=(0,m.v9)((function(e){return e.GlobalFilterStore})),S=h.selectedTags,E=h.selectedGlobalTags,Z=h.systemProfile;return(0,o.useMemo)((0,l.Z)(i().mark((function e(){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g({}),e.prev=1,e.next=4,(0,L.lc)({filter:{os:null==u||null===(a=u.filter)||void 0===a?void 0:a.os},selectedTags:[].concat((0,T.Z)(S),(0,T.Z)(E)),systemProfile:Z,limit:1});case 4:t=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t=[];case 10:return e.abrupt("return",t);case 11:case"end":return e.stop()}}),e,null,[[1,7]])}))),[null==u||null===(t=u.filter)||void 0===t||null===(a=t.os)||void 0===a?void 0:a.length,void 0!==(null==u||null===(s=u.filter)||void 0===s?void 0:s.os),null==S?void 0:S.length,void 0!==S,null==E?void 0:E.length,void 0!==E,Z,void 0!==(null==u?void 0:u.subtotals)]).then((function(e){var t;g(null===(t=e.meta)||void 0===t?void 0:t.subtotals)})),c().createElement(f.Z,{style:{paddingBottom:0}},c().createElement(A.r,{hasGutter:!0,span:12},c().createElement(B.P,{span:12,md:3},c().createElement(G,{title:y.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:j.default,color:"var(--pf-global--success-color--100)",value:null==b?void 0:b.patched,apply:n,filter:{filter:{packages_updatable:"eq:0"}}})),c().createElement(B.P,{span:12,md:3},c().createElement(G,{title:y.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:x.ZP,color:"var(--pf-global--primary-color--100)",value:null==b?void 0:b.unpatched,apply:n,filter:{filter:{packages_updatable:"gt:0"}}})),c().createElement(B.P,{span:12,md:3},c().createElement(G,{title:y.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:D.default,color:"var(--pf-global--warning-color--100)",value:null==b?void 0:b.stale,apply:n,filter:{filter:{stale:!0}}}))))};G.propTypes={title:M().string,Icon:M().elementType,value:M().string,color:M().string,apply:M().func,filter:M().object},Q.propTypes={apply:M().func,queryParams:M().object};const Y=Q;var K=a(32166),$=a(55485),J=function(e){var t=e.onClick,a=e.isDisabled,s=e.isLoading,l=e.ouia,r=e.children;return c().createElement(H.Button,{isDisabled:a,onClick:t,ouiaId:l,variant:"primary",isLoading:s},r)};J.propTypes={onClick:M().object,isDisabled:M().bool,isLoading:M().bool,ouia:M().string,children:M().element};const X=J;function ee(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,s)}return a}function te(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(a),!0).forEach((function(t){(0,s.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ee(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const ae=function(){var e=y.N.formatMessage(v.Z.titlesSystems);(0,k.Iw)(e);var t=(0,p.useHistory)(),a=(0,m.I0)(),s=c().useState(!1),n=(0,r.Z)(s,2),o=n[0],g=n[1],T=c().useState(!1),j=(0,r.Z)(T,2),x=j[0],D=j[1],I=c().useState((function(){return function(){return null}})),M=(0,r.Z)(I,2),R=M[0],H=M[1],z=c().useState({isOpen:!1,systemsIDs:[]}),q=(0,r.Z)(z,2),A=q[0],B=q[1],U=(0,w.PZ)(t.location.search),W=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.wU),V=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),G=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),Q=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),J=(0,m.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),ee=J.systemProfile,ae=J.selectedTags,se=J.filter,le=J.search,re=J.page,ne=J.perPage,ie=J.sort;function oe(e){return ce.apply(this,arguments)}function ce(){return(ce=(0,l.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return D(!0),e.next=3,t;case 3:a=e.sent,H((function(){return function(){return c().createElement($.Z,{data:a,isRemediationOpen:!0,setRemediationOpen:g})}})),g(!o),D(!1);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ue(){return(ue=(0,l.Z)(i().mark((function e(t){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B({isOpen:!0,systemsIDs:[t.id]});case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function de(e){a((0,P.SF)(e))}c().useEffect((function(){return de(U),function(){return a((0,P.RV)())}}),[]);var fe=(0,k.j5)(te({search:le},se),de,h.hb),me=(0,r.Z)(fe,1)[0],pe={items:[(0,b.Z)(de,le,y.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),y.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),S(de,se),Z(de,se),(0,E.Z)(se,de)]},ve={filters:(0,w.mt)(se,le,y.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:me,deleteTitle:y.N.formatMessage(v.Z.labelsFiltersReset)},be=(0,k.ry)(W,G,(function(e){return(0,L.lc)(te(te({},e),{},{limit:-1})).then(w.zw)}),(function(e){a({type:"SELECT_ENTITY",payload:e})})),ge=G&&(0,w.Qy)(G).length,he=(0,k.AR)("systems",J,{csv:L.wI,json:L.TW},a),ye=function(e){return(0,L.ob)({limit:-1}).then((function(t){var a=t.data;return(0,L.fq)({advisories:a.map((function(e){return e.id})),systems:e})}))},Se=(0,k.U)(L.lc,de,{},t,(function(e){a((0,P._e)(e))}),(function(e){a((0,P.vl)(e))}));return c().createElement(c().Fragment,null,c().createElement(_.Z,{title:y.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),c().createElement(Y,{apply:de,queryParams:J}),A.isOpen&&c().createElement(K.Z,{systemsIDs:A.systemsIDs,setBaselineState:B}),o&&c().createElement(R,null)||null,c().createElement(f.Z,null,Q.hasError&&c().createElement(N.Z,{code:Q.code})||c().createElement(d.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:w.gB,showTags:!0,customFilters:{patchParams:{search:le,filter:se,systemProfile:ee,selectedTags:ae}},paginationProps:{isDisabled:0===V},onLoad:function(e){var t=e.mergeWithEntities;(0,O.z)(te({},t((0,C.Kq)(F.Fs,C.G),(0,w.fm)({page:re,perPage:ne,sort:ie,search:le},U))))},getEntities:Se,actions:(0,F.Sb)(oe,(function(e){return ue.apply(this,arguments)})),tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:u.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:(0,k.Pz)(ge,be,{total_items:V},W),exportConfig:{isDisabled:0===V,onSelect:he},filterConfig:pe,activeFiltersConfig:ve,dedicatedAction:c().createElement(X,{isDisabled:0===(0,w.Qy)(G).length,onClick:function(){return oe((0,w.Sz)((0,w.Q6)(G),ye,w.R9,h.oN.advisory))},ouia:"toolbar-remediation-button",isLoading:x},y.N.formatMessage(v.Z.labelsRemediate))})))}}}]);
//# sourceMappingURL=../sourcemaps/Systems.3c2737f041f65501b3ad598416c1120a.js.map