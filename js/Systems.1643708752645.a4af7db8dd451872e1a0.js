(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[743],{2095:(e,t,a)=>{"use strict";t.Zb=t.H0=void 0;const r=a(70655),n=r.__importStar(a(43297)),s=r.__importDefault(a(62802)),l=a(38296),i=a(23053);t.H0=n.createContext({cardId:"",isExpanded:!1}),t.Zb=e=>{var{children:a=null,id:o="",className:c="",component:u="article",isHoverable:d=!1,isCompact:f=!1,isSelectable:m=!1,isSelected:p=!1,isFlat:v=!1,isExpanded:h=!1,isRounded:g=!1,isLarge:b=!1,isFullHeight:y=!1,isPlain:E=!1,ouiaId:O,ouiaSafe:S=!0}=e,_=r.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelected","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe"]);const Z=u,N=i.useOUIAProps(t.Zb.displayName,O,S);return f&&b&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),b=!1),n.createElement(t.H0.Provider,{value:{cardId:o,isExpanded:h}},n.createElement(Z,Object.assign({id:o,className:l.css(s.default.card,d&&s.default.modifiers.hoverable,f&&s.default.modifiers.compact,m&&s.default.modifiers.selectable,p&&m&&s.default.modifiers.selected,h&&s.default.modifiers.expanded,v&&s.default.modifiers.flat,g&&s.default.modifiers.rounded,b&&s.default.modifiers.displayLg,y&&s.default.modifiers.fullHeight,E&&s.default.modifiers.plain,c),tabIndex:m?"0":void 0},_,N),a))},t.Zb.displayName="Card"},85962:(e,t,a)=>{"use strict";t.e=void 0;const r=a(70655),n=r.__importStar(a(43297)),s=r.__importDefault(a(62802)),l=a(38296);t.e=e=>{var{children:t=null,className:a="",component:i="div",isFilled:o=!0}=e,c=r.__rest(e,["children","className","component","isFilled"]);const u=i;return n.createElement(u,Object.assign({className:l.css(s.default.cardBody,!o&&s.default.modifiers.noFill,a)},c),t)},t.e.displayName="CardBody"},36104:(e,t,a)=>{"use strict";t.l=void 0;const r=a(70655),n=r.__importStar(a(43297)),s=a(38296),l=r.__importDefault(a(62802));t.l=e=>{var{children:t=null,className:a="",component:i="div"}=e,o=r.__rest(e,["children","className","component"]);const c=i;return n.createElement(c,Object.assign({className:s.css(l.default.cardTitle,a)},o),t)},t.l.displayName="CardTitle"},26577:(e,t,a)=>{"use strict";t.O=void 0;const r=a(70655),n=r.__importStar(a(43297)),s=r.__importDefault(a(68800)),l=a(38296);t.O=e=>{var{className:t,width:a,height:i,fontSize:o,shape:c,screenreaderText:u}=e,d=r.__rest(e,["className","width","height","fontSize","shape","screenreaderText"]);const f=o?Object.values(s.default.modifiers).find((e=>e===`pf-m-text-${o}`)):void 0;return n.createElement("div",Object.assign({},d,{className:l.css(s.default.skeleton,o&&f,"circle"===c&&s.default.modifiers.circle,"square"===c&&s.default.modifiers.square,t)},(a||i)&&{style:Object.assign({"--pf-c-skeleton--Width":a||void 0,"--pf-c-skeleton--Height":i||void 0},d.style)}),n.createElement("span",{className:"pf-u-screen-reader"},u))},t.O.displayName="Skeleton"},77927:(e,t,a)=>{"use strict";t.tz={name:"PackageIcon",height:1024,width:1024,svgPath:"M567.7,1010.49707 L951.5,818.498238 C994.7,796.698371 1024,752.39864 1024,703.998934 L1024,320.001265 C1024,271.601559 995.6,227.10183 952.2,205.501961 L568.6,13.5031267 C550.8,4.60318072 531.4,0.103208049 512,-0.00152855358 C492.3,-0.0967907365 472.5,4.40318194 454.4,13.5031267 L70.8,205.501961 C27.4,227.10183 0,271.50156 0,319.801267 L0.9,703.998934 C0.9,752.39864 28.3,796.79837 71.6,818.398239 L455.2,1010.39707 C464.3,1014.89705 488.1,1023.99699 511.9,1023.99699 C535.5,1023.99699 558.8,1014.99704 567.7,1010.49707 Z M512.5,630.899377 L672.5,550.899863 L672.5,645.29929 L736.5,613.299484 L736.5,518.900058 L896,438.900543 L896.5,712.698881 L512.5,904.697715 L512.5,630.899377 Z M145.1,304.101362 L294.9,228.60182 C295.3,228.801819 295.6,229.001818 296,229.201817 L661.9,412.300705 L512.5,487.600248 L145.1,304.101362 Z M512.5,118.902487 L881.3,301.701377 L733.1,376.400923 L366,192.702038 L512.5,118.902487 Z",yOffset:0,xOffset:0},t.jt=a(35183).createIcon(t.tz),t.ZP=t.jt},83905:(e,t,a)=>{"use strict";a.d(t,{Z:()=>p});var r=a(87462),n=a(29439),s=a(43297),l=a.n(s),i=a(13784),o=a(44612),c=a(80887),u=a(77221),d=a(82553),f=a(32132),m=a(30893);const p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=l().useState(!1),s=(0,n.Z)(a,2),p=s[0],v=s[1],h=l().useState(10),g=(0,n.Z)(h,2),b=g[0],y=g[1],E=i.nW.slice().reverse(),O=e.os,S="string"==typeof O&&O.split(",")||[],_=function(e,a){if(O&&!O.includes(a))t({filter:{os:"".concat(S.join(","),",").concat(a)}});else if(O&&O.includes(a)){var r=S.filter((function(e){return e!==a}));t({filter:{os:r.length>0&&"".concat(r.join(","))||void 0}})}else t({filter:{os:""!==a&&a||void 0}})},Z=function(e){v(e)},N=function(){y(E.length)};return{type:o.Y.custom,label:f.N.formatMessage(m.Z.labelsFiltersOsVersion),value:"custom",filterValues:{children:l().createElement(c.P,(0,r.Z)({variant:d.SelectVariant.checkbox,typeAheadAriaLabel:f.N.formatMessage(m.Z.labelsFiltersOsVersionPlaceholder),onToggle:Z,onSelect:_,selections:S,isOpen:p,"aria-labelledby":"patch-os-version-filter",placeholderText:f.N.formatMessage(m.Z.labelsFiltersOsVersionPlaceholder)},b<E.length&&{loadingVariant:{text:"View more",onClick:N}},{style:{maxHeight:"400px",overflow:"auto"}}),E.slice(0,b).map((function(e,t){return l().createElement(u.SelectOption,{key:t,value:e.value})})))}}}},49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>E});var r=a(48716),n=a(39173),s=a(45697),l=a.n(s),i=a(43297),o=a.n(i),c=a(85991),u=a(49489),d=a(334),f=function(e){var t=e.items,a=e.headerOUIA;return o().createElement(c.a,null,t.filter(Boolean).map((function(e){return o().createElement(u.g,{key:e.title,isActive:e.isActive},e.to&&o().createElement(d.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};f.propTypes={items:l().arrayOf(l().shape({isActive:l().bool,to:l().string,title:l().string})),headerOUIA:l().string};const m=f;var p=a(82819),v=a(98378),h=a(60076),g=function(e){var t=e.history,a=e.headerOUIA;return o().createElement(v.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},o().createElement(p.O,{eventKey:h.H.advisories.to,title:h.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(h.H.advisories.title)}),o().createElement(p.O,{eventKey:h.H.systems.to,title:h.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(h.H.systems.title)}))};g.propTypes={history:l().object,headerOUIA:l().string};const b=(0,d.withRouter)(g);var y=function(e){var t=e.title,a=e.showTabs,s=e.breadcrumbs,l=e.children,i=e.headerOUIA;return o().createElement(o().Fragment,null,o().createElement(r.Z,{"data-ouia-component-type":"".concat(i,"-page-header")},s&&o().createElement(m,{items:s,headerOUIA:i}),o().createElement(n.Z,{title:t}),l),a&&o().createElement(b,{headerOUIA:i}))};y.propTypes={title:l().string,showTabs:l().bool,breadcrumbs:l().array,children:l().any,headerOUIA:l().string};const E=y},9770:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>X});var r=a(4942),n=a(15861),s=a(29439),l=a(87757),i=a.n(l),o=a(72573),c=a(33739),u=a(86350),d=a(43297),f=a.n(d),m=a(28216),p=a(334),v=a(30893),h=a(90747),g=a(44612),b=a(13784),y=a(32132);const E=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.stale,r=f().useMemo((function(){return b.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),n=a&&(Array.isArray(a)&&a.map((function(e){return e.toString()}))||[a.toString()]),s=function(t){e({filter:{stale:t}})};return{label:y.N.formatMessage(v.Z.labelsFiltersStale),type:g.Y.checkbox,filterValues:{onChange:function(e,t){s(t)},items:r,value:n,placeholder:y.N.formatMessage(v.Z.labelsFiltersStalePlaceholder)}}};var O=a(83905);const S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.packages_updatable,r=function(t){e({filter:{packages_updatable:t}})};return{label:y.N.formatMessage(v.Z.labelsFiltersUpdatable),type:g.Y.radio,filterValues:{onChange:function(e,t){r(t)},items:b.Tl,value:a,placeholder:y.N.formatMessage(v.Z.labelsFiltersUpdatablePlaceholder)}}};var _=a(49642),Z=a(73888),N=a(32041),w=a(9557),P=a(5747),L=a(11220),T=a(57358),j=a(91607),C=a(94859),I=a(20259),F=a(58684),k=a(35451),x=a(77927),A=a(19694),D=a(45697),M=a.n(D),H=a(36104),U=a(6202),R=a(26577),V=a(2095),z=a(49287),q=a(18038),B=a(85962),W=a(36001),Y=a(42057),G=function(e){var t=e.title,a=e.color,r=e.Icon,n=e.value,s=e.filter,l=e.apply;return f().createElement(V.Zb,{isCompact:!0,style:{marginRight:"var(--pf-global--spacer--sm)"}},f().createElement(H.l,{style:{marginTop:"0px"}},t),f().createElement(B.e,{className:"fonst-size-sm"},f().createElement(W.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},f().createElement(Y.B,{spacer:{default:"spacerMd"},alignSelf:{default:"alignSelfCenter"}},f().createElement(r,{color:a,size:"md"})),f().createElement(Y.B,{isFilled:!0,spacer:{default:"spacerNone"}},void 0===n&&f().createElement(R.O,{width:"24px"})||f().createElement(U.Button,{variant:"link",onClick:function(){return l(s)},className:"patch-status-report-text"},n)))))},K=function(e){var t=e.metadata.subtotals,a=e.apply;return f().createElement(u.Z,{style:{paddingBottom:0}},f().createElement(z.r,{hasGutter:!0,span:3},f().createElement(q.P,null,f().createElement(G,{title:y.N.formatMessage(v.Z.labelsStatusSystemsUpToDate),Icon:k.default,color:"var(--pf-global--success-color--100)",value:null==t?void 0:t.patched,apply:a,filter:{filter:{packages_updatable:"eq:0"}}})),f().createElement(q.P,null,f().createElement(G,{title:y.N.formatMessage(v.Z.labelsStatusSystemsWithPatchesAvailable),Icon:x.ZP,color:"var(--pf-global--primary-color--100)",value:null==t?void 0:t.unpatched,apply:a,filter:{filter:{packages_updatable:"gt:0"}}})),f().createElement(q.P,null,f().createElement(G,{title:y.N.formatMessage(v.Z.labelsStatusStaleSystems),Icon:A.default,color:"var(--pf-global--warning-color--100)",value:null==t?void 0:t.stale,apply:a,filter:{filter:{stale:!0}}}))))};G.propTypes={title:M().string,Icon:M().elementType,value:M().string,color:M().string,apply:M().func,filter:M().object},K.propTypes={metadata:M().object,apply:M().func};const Q=K;function J(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?J(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):J(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}const X=function(){var e=y.N.formatMessage(v.Z.titlesSystems);(0,j.Iw)(e);var t=(0,p.useHistory)(),a=(0,m.I0)(),r=f().useState(!1),l=(0,s.Z)(r,2),d=l[0],g=l[1],k=f().useState((function(){return function(){return null}})),x=(0,s.Z)(k,2),A=x[0],D=x[1],M=(0,T.PZ)(t.location.search),H=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.wU),U=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),R=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),V=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),z=(0,m.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.queryParams)||{}})),q=(0,m.v9)((function(e){var t=e.SystemsStore;return(null==t?void 0:t.metadata)||{}})),B=z.systemProfile,W=z.selectedTags,Y=z.filter,G=z.search,K=z.page,J=z.perPage,X=z.sort;function ee(e){return te.apply(this,arguments)}function te(){return(te=(0,n.Z)(i().mark((function e(t){var a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,t;case 3:a=e.sent,D((function(){return function(){return f().createElement(I.Z,{data:a})}})),g(!1);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function ae(e){a((0,w.SF)(e))}f().useEffect((function(){return ae(M),function(){return a((0,w.RV)())}}),[]);var re=(0,j.j5)($({search:G},Y),ae,b.hb),ne=(0,s.Z)(re,1)[0],se={items:[(0,h.Z)(ae,G,y.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle),y.N.formatMessage(v.Z.labelsFiltersSystemsSearchPlaceholder)),E(ae,Y),S(ae,Y),(0,O.Z)(Y,ae)]},le={filters:(0,T.mt)(Y,G,y.N.formatMessage(v.Z.labelsFiltersSystemsSearchTitle)),onDelete:ne,deleteTitle:y.N.formatMessage(v.Z.labelsFiltersReset)},ie=(0,j.ry)(H,R,(function(e){return(0,L.lc)($($({},e),{},{limit:-1})).then(T.zw)}),(function(e){a({type:"SELECT_ENTITY",payload:e})})),oe=R&&(0,T.Qy)(R).length,ce=(0,j.AR)("systems",z,{csv:L.wI,json:L.TW},a),ue=function(e){return(0,L.ob)({limit:-1}).then((function(t){var a=t.data;return(0,L.fq)({advisories:a.map((function(e){return e.id})),systems:e})}))},de=(0,j.U)(L.lc,ae,{},t,(function(e){a((0,w._e)(e))}));return f().createElement(f().Fragment,null,f().createElement(_.Z,{title:y.N.formatMessage(v.Z.titlesPatchSystems),headerOUIA:"systems"}),f().createElement(A,null),f().createElement(Q,{metadata:q,apply:ae}),f().createElement(u.Z,null,V.hasError&&f().createElement(Z.Z,{code:V.code})||f().createElement(c.Z,{isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:T.gB,showTags:!0,customFilters:{patchParams:{search:G,filter:Y,systemProfile:B,selectedTags:W}},onLoad:function(e){var t=e.mergeWithEntities;(0,N.z)($({},t((0,P.Kq)(F.Fs,P.G),(0,T.fm)({page:K,perPage:J,sort:X,search:G},M))))},getEntities:de,actions:(0,F.Sb)(ee),tableProps:{areActionsDisabled:function(e){var t=e.applicable_advisories;return t&&t.every((function(e){return 0===e}))},canSelectAll:!1,variant:o.TableVariant.compact,className:"patchCompactInventory",isStickyHeader:!0},bulkSelect:(0,j.Pz)(oe,ie,{total_items:U},H),exportConfig:{isDisabled:0===U,onSelect:ce},filterConfig:se,activeFiltersConfig:le,dedicatedAction:f().createElement(C.Z,{onClick:function(){return ee((0,T.Sz)((0,T.Q6)(R),ue,T.R9,b.oN.advisory))},isDisabled:0===(0,T.Qy)(R).length||d,isLoading:d,ouia:"toolbar-remediation-button"})})))}},5747:(e,t,a)=>{"use strict";a.d(t,{G:()=>u,OC:()=>d,Kq:()=>f});var r=a(4942),n=a(57668),s=a(48881),l=a(22789);function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){(0,r.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var c={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},u=function(e,t){return t.loaded?o(o({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,n.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t){return t.loaded?o(o({},t),{},{columns:e,rows:(0,n.GF)(t.rows,t.selectedRows)}):t},f=function(e,t){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,r=arguments.length>1?arguments[1]:void 0,n=o({},a);switch(r.type){case"LOAD_ENTITIES_FULFILLED":return t(e,n);case"LOAD_ENTITIES_PENDING":return n.status={isLoading:!0,hasError:!1},n;case"LOAD_ENTITIES_REJECTED":return n.status={isLoading:!0,hasError:!0},n;case"SELECT_ENTITY":var i=(0,s.hd)(n,r);return t(e,i);case l.sq:return c;default:return a}}}},58392:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Systems.007287b3755ef848760b1bd52c4f3f6b.js.map