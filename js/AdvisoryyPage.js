(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{836:function(e,t,n){"use strict";n.r(t);var r,a=n(35),o=n.n(a),c=n(43),i=n.n(c),l=n(886),s=n(844),u=n(6),f=n.n(u),d=n(0),p=n.n(d),b=n(47),m=n(27),y=n(946),v=n(947),O=n(948),h=n(949),g=n(187),j=n.n(g),E=n(215),S=n(345),w=n(114),T=n.n(w),k=n(928),x=n(929),P="spinner",D="skeleton",C=(r={},o()(r,D,(function(e){var t=e.size,n=e.isDark;return p.a.createElement(k.Skeleton,{size:t,isDark:n})})),o()(r,P,(function(e){var t=e.centered;return p.a.createElement(x.Spinner,{centered:t})})),r),_=function(e){var t=e.loading,n=e.variant,r=e.children,a=T()(e,["loading","variant","children"]);return!1!==t?C[n](a):r};_.propTypes={loading:f.a.bool,variant:f.a.string,children:f.a.any};var I=_,A=n(13),L=n(932),N=n(931),B=(n(930),function(e){var t=e.title,n=e.text,r=e.isLoading,a=e.content,o=e.color;return p.a.createElement(N.Split,{className:"infobox",hasGutter:!0},p.a.createElement(I,{variant:D,loading:r,size:"lg"},p.a.createElement(N.SplitItem,{style:{backgroundColor:o}},p.a.createElement(L.Bullseye,null,a)),p.a.createElement(N.SplitItem,{isFilled:!0},p.a.createElement(l.TextContent,null,p.a.createElement(l.Text,{component:l.TextVariants.h6},t),p.a.createElement(l.Text,{component:l.TextVariants.p},n)))))});B.propTypes={title:f.a.string,text:f.a.any,isLoading:f.a.bool,content:f.a.any,color:f.a.string};var R=B,F=n(112),G=n(177),M=n(935),V=n(447),H=n.n(V),z=function(e){var t=e.severity;return p.a.createElement(M.Popover,{position:"bottom",enableFlip:!0,headerContent:p.a.createElement("div",null,t.label+" severity"),bodyContent:p.a.createElement(G.TextContent,null,p.a.createElement(F.Text,{component:F.TextVariants.p},t.text)),footerContent:p.a.createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},p.a.createElement("span",{className:"icon-with-label"},p.a.createElement(H.a,null),"Learn more about security ratings"))},p.a.createElement("a",null,"Learn more"))};z.propTypes={severity:f.a.object};var W=z,q=function(e){var t=e.attributes,n=e.isLoading,r=Object(A.o)(t.severity);return p.a.createElement(y.Grid,{hasGutter:!0,style:{minHeight:150}},p.a.createElement(v.GridItem,{md:8,sm:12},p.a.createElement(I,{loading:n,variant:P,centered:!0},p.a.createElement(O.Stack,{hasGutter:!0},p.a.createElement(h.StackItem,null),p.a.createElement(h.StackItem,{style:{whiteSpace:"pre-line"}},t.description&&t.description.replace(new RegExp("\\n(?=[^\\n])","g"),"")),p.a.createElement(h.StackItem,null,t.public_date&&p.a.createElement(p.a.Fragment,null,"Issued: ".concat(Object(E.processDate)(t.public_date)),p.a.createElement("br",null)),t.modified_date&&p.a.createElement(p.a.Fragment,null,"Modified: ".concat(Object(E.processDate)(t.modified_date)))),p.a.createElement(h.StackItem,null,p.a.createElement(S.a,{advisory:t.id}))))),p.a.createElement(v.GridItem,{md:4,sm:12},0!==r.value&&p.a.createElement(R,{isLoading:n,title:r.label,color:r.color,text:p.a.createElement(W,{severity:r}),content:p.a.createElement(j.a,{size:"lg"})})))};q.propTypes={attributes:f.a.object,isLoading:f.a.bool};var Y=q,J=n(848),U=n(357),K=n(362),Q=n(89),X=n(12),Z=n(845),$=n.n(Z),ee=n(214),te=n.n(ee),ne=n(361),re=n.n(ne),ae=n(101),oe=n(213),ce=n(212),ie=n(444),le=n.n(ie),se=n(19),ue=n(107),fe=n(864),de=n(372),pe=n(363),be=n(861),me=n(78),ye=n(364),ve=n(126),Oe=n(365),he=n(862);function ge(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function je(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ge(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ge(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ee=function(e){var t=e.advisoryName,n=Object(b.useDispatch)(),r=p.a.useState(),a=i()(r,2),o=a[0],c=a[1],l=p.a.useState((function(){return function(){return null}})),s=i()(l,2),u=s[0],f=s[1],d=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.rows})),m=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.status})),y=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.error})),v=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.selectedRows})),O=p.a.useMemo((function(){return Object(ye.c)(d,v)}),[d]),h=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.metadata})),g=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.queryParams})),j=Object(b.useSelector)((function(e){var t=e.entities;return t&&t.columns})),E=Object(ve.a)(h,C),S=g.filter,w=g.search;p.a.useEffect((function(){return function(){return n(Object(Q.f)())}}),[]),p.a.useEffect((function(){n(Object(Q.j)(je({id:t},g)))}),[g]);var T=function(){var e=re()(te.a.mark((function e(){var t,n,r,a,o;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:b,React:p.a,reactRouterDom:ue,pfReactTable:{Table:se.Table,TableBody:se.TableBody,TableHeader:se.TableHeader,TableGridBreakpoint:se.TableGridBreakpoint,cellWidth:se.cellWidth,TableVariant:se.TableVariant,sortable:se.sortable,expandable:se.expandable,SortByDirection:se.SortByDirection},pfReact:fe.reactCore});case 2:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,Object(pe.c)(je({},r(Object(be.a)(he.a)))),a=n(Object(pe.a)()),o=a.InventoryTable,c((function(){return o}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();p.a.useEffect((function(){T()}),[]);var k=Object(ve.b)(h.limit,h.offset),x=i()(k,2),P=x[0],D=x[1];function C(e){n(Object(Q.b)(e))}var _=Object(ve.d)(S,C),I={items:[Object(de.a)(C,w,"Search systems")]},L={filters:Object(A.c)(S,w),onDelete:_},N=function(e){f((function(){return function(){return p.a.createElement(Oe.a,{data:e})}}))},B=p.a.useCallback((function(e){var r=[];switch(e){case"none":Object.keys(v).forEach((function(e){r.push({id:e,selected:!1})})),n({type:"SELECT_ENTITY",payload:r});break;case"page":d.forEach((function(e){var t=e.id;r.push({id:t,selected:!0})})),n({type:"SELECT_ENTITY",payload:r});break;case"all":Object(me.f)({id:t,limit:999999}).then((function(e){e.data.forEach((function(e){var t=e.id;r.push({id:t,selected:!0})})),n({type:"SELECT_ENTITY",payload:r})}))}})),R=function(){var e=j&&j.filter((function(e){return"updated"===e.key}))[0];return e=je(je({},e),{},{key:"last_upload"}),[].concat($()(he.a),[e])},F=Object(ve.f)(R(),C,1),G=p.a.useMemo((function(){return Object(A.g)(R(),h.sort,1)}),[h.sort]),M=v&&Object(A.b)(v).length;return p.a.createElement(p.a.Fragment,null,m===X.d?p.a.createElement(U.a,{message:y.detail}):o&&p.a.createElement(o,{items:O,page:P,total:h.total_items,perPage:D,onRefresh:E,isLoaded:m===X.e,actions:Object(he.b)(N),tableProps:{canSelectAll:!1,onSort:F,sortBy:G},filterConfig:I,activeFiltersConfig:L,bulkSelect:B&&{count:M,items:[{title:"Select none (0)",onClick:function(){B("none")}},{title:"Select page (".concat(O.length,")"),onClick:function(){B("page")}},{title:"Select all (".concat(h.total_items,")"),onClick:function(){B("all")}}],onSelect:function(e){B(e?"all":"none")},checked:M===h.total_items||0!==M&&null}},p.a.createElement(oe.ToolbarGroup,null,p.a.createElement(ce.ToolbarItem,null,p.a.createElement(ae.Button,{className:"remediationButtonPatch",isDisabled:0===Object(A.b)(v).length,onClick:function(){return N(Object(A.q)(t,Object(A.b)(v)))}},p.a.createElement(le.a,null)," Remediate"),p.a.createElement(u,null)))))};Ee.propTypes={advisoryName:f.a.string};var Se=Ee;function we(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?we(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=function(e){var t=e.match,n=Object(b.useDispatch)(),r=p.a.useState(t.params.advisoryId),a=i()(r,1)[0],o=Object(b.useSelector)((function(e){return e.AdvisoryDetailStore})),c=Object(b.useSelector)((function(e){return e.AdvisoryDetailStore.status})),u=Object(b.useSelector)((function(e){return e.AdvisoryDetailStore.error}));p.a.useEffect((function(){n(Object(Q.m)({advisoryName:a}))}),[]),p.a.useEffect((function(){return function(){n(Object(Q.f)()),n(Object(Q.e)())}}),[]);var f=o.data.attributes;return p.a.createElement(p.a.Fragment,null,p.a.createElement(J.a,{title:a,breadcrumbs:[{title:"Patch",to:K.b.advisories.to,isActive:!1},{title:"Advisories",to:K.b.advisories.to,isActive:!1},{title:a,isActive:!0}]},c===X.d?p.a.createElement(U.a,{message:u.detail}):p.a.createElement(Y,{attributes:Te(Te({},f),{},{id:a}),isLoading:c===X.c})),p.a.createElement(s.Main,null,p.a.createElement(l.TextContent,null,p.a.createElement(l.Text,{component:l.TextVariants.h2},"Affected systems")),p.a.createElement(Se,{advisoryName:a})))};ke.propTypes={match:f.a.any};t.default=Object(m.o)(ke)},841:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},861:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var r=n(845),a=n.n(r),o=n(35),c=n.n(o),i=n(19);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={columns:[],rows:[],entities:[]};function f(e,t){if(t.loaded){var n=t.columns.filter((function(e){return"updated"===e.key}));return n=[s(s({},n[0]),{},{transforms:[i.sortable]})],s(s({},t),{},{columns:[].concat(a()(e||[]),a()(n||[]))})}return t}var d=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ENTITIES_FULFILLED":return f(e,t);default:return t}}}},862:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return i}));var r=n(19),a=n(78),o=n(13),c=(n(863),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[Object(r.classNames)("col-width-40"),r.sortable]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[Object(r.classNames)("col-width-30"),r.sortable],renderFunc:function(e){return Object(o.f)(e)}}]),i=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,n,r){Object(a.h)({id:r.id,limit:1e4}).then((function(t){return e(Object(o.q)(t.data.map((function(e){return e.id})),r.id))}))}}]}},863:function(e,t,n){var r=n(841);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(4)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(841,(function(){var t=n(841);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},874:function(e,t,n){(e.exports=n(3)(!1)).push([e.i,".infobox{background-color:var(--pf-global--BackgroundColor--150);border:var(--pf-global--BorderColor--300) var(--pf-global--BorderWidth--sm) solid;height:65px}.infobox>.pf-l-split__item:first-child{width:65px;color:black;background-color:var(--pf-global--warning-color--100)}.infobox>.pf-l-split__item:first-child>div.pf-l-bullseye svg{color:white}.infobox .pf-c-content h6{margin:0}.infobox>.pf-l-split__item:nth-child(2){display:flex;justify-content:flex-start;align-items:center}\n",""])},930:function(e,t,n){var r=n(874);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(4)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(874,(function(){var t=n(874);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=AdvisoryyPage.js.map