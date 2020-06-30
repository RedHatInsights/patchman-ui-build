(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{442:function(e,t,n){"use strict";n.r(t);var r,a=n(14),o=n.n(a),c=n(20),i=n.n(c),l=n(463),s=n(443),u=n(4),f=n.n(u),b=n(0),d=n.n(b),m=n(19),p=n(12),y=n(501),v=n(503),E=n(504),O=n(506),g=n(81),h=n.n(g),j=n(90),S=n(153),T=n(48),k=n.n(T),x=n(485),w=n(486),D="spinner",P="skeleton",C=(r={},o()(r,P,(function(e){var t=e.size,n=e.isDark;return d.a.createElement(x.Skeleton,{size:t,isDark:n})})),o()(r,D,(function(e){var t=e.centered;return d.a.createElement(w.Spinner,{centered:t})})),r),_=function(e){var t=e.loading,n=e.variant,r=e.children,a=k()(e,["loading","variant","children"]);return!1!==t?C[n](a):r};_.propTypes={loading:f.a.bool,variant:f.a.string,children:f.a.any};var I=_,A=n(6),B=n(489),L=n(488),N=(n(487),function(e){var t=e.title,n=e.text,r=e.isLoading,a=e.content,o=e.color;return d.a.createElement(L.Split,{className:"infobox",hasGutter:!0},d.a.createElement(I,{variant:P,loading:r,size:"lg"},d.a.createElement(L.SplitItem,{style:{backgroundColor:o}},d.a.createElement(B.Bullseye,null,a)),d.a.createElement(L.SplitItem,{isFilled:!0},d.a.createElement(l.TextContent,null,d.a.createElement(l.Text,{component:l.TextVariants.h6},t),d.a.createElement(l.Text,{component:l.TextVariants.p},n)))))});N.propTypes={title:f.a.string,text:f.a.any,isLoading:f.a.bool,content:f.a.any,color:f.a.string};var G=N,R=n(46),F=n(79),V=n(492),M=n(218),z=n.n(M),H=function(e){var t=e.severity;return d.a.createElement(V.Popover,{position:"bottom",enableFlip:!0,headerContent:d.a.createElement("div",null,t.label+" severity"),bodyContent:d.a.createElement(F.TextContent,null,d.a.createElement(R.Text,{component:R.TextVariants.p},t.text)),footerContent:d.a.createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},d.a.createElement("span",{className:"icon-with-label"},d.a.createElement(z.a,null),"Learn more about security ratings"))},d.a.createElement("a",null,"Learn more"))};H.propTypes={severity:f.a.object};var W=H,Y=function(e){var t=e.attributes,n=e.isLoading,r=Object(A.o)(t.severity);return d.a.createElement(y.Grid,{hasGutter:!0,style:{minHeight:150}},d.a.createElement(v.GridItem,{md:8,sm:12},d.a.createElement(I,{loading:n,variant:D,centered:!0},d.a.createElement(E.Stack,{hasGutter:!0},d.a.createElement(O.StackItem,null),d.a.createElement(O.StackItem,{style:{whiteSpace:"pre-line"}},t.description&&t.description.replace(new RegExp("\\n(?=[^\\n])","g"),"")),d.a.createElement(O.StackItem,null,t.public_date&&d.a.createElement(d.a.Fragment,null,"Issued: ".concat(Object(j.processDate)(t.public_date)),d.a.createElement("br",null)),t.modified_date&&d.a.createElement(d.a.Fragment,null,"Modified: ".concat(Object(j.processDate)(t.modified_date)))),d.a.createElement(O.StackItem,null,d.a.createElement(S.a,{advisory:t.id}))))),d.a.createElement(v.GridItem,{md:4,sm:12},0!==r.value&&d.a.createElement(G,{isLoading:n,title:r.label,color:r.color,text:d.a.createElement(W,{severity:r}),content:d.a.createElement(h.a,{size:"lg"})})))};Y.propTypes={attributes:f.a.object,isLoading:f.a.bool};var q=Y,J=n(444),K=n(160),Q=n(161),U=n(34),X=n(5),Z=n(453),$=n.n(Z),ee=n(445),te=n.n(ee),ne=n(446),re=n.n(ne),ae=n(28),oe=n(89),ce=n(88),ie=n(215),le=n.n(ie),se=n(9),ue=n(41),fe=n(167),be=n(162),de=n(461),me=n(30),pe=n(163),ye=n(53),ve=n(164),Ee=n(462);function Oe(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ge(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Oe(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Oe(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var he=function(e){var t=e.advisoryName,n=Object(m.useDispatch)(),r=d.a.useState(),a=i()(r,2),o=a[0],c=a[1],l=d.a.useState((function(){return function(){return null}})),s=i()(l,2),u=s[0],f=s[1],b=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.rows})),p=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.status})),y=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.error})),v=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.selectedRows})),E=d.a.useMemo((function(){return Object(pe.c)(b,v)}),[b]),O=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.metadata})),g=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.queryParams})),h=Object(m.useSelector)((function(e){var t=e.entities;return t&&t.columns})),j=Object(ye.a)(O,C),S=g.filter,T=g.search;d.a.useEffect((function(){return function(){return n(Object(U.f)())}}),[]),d.a.useEffect((function(){n(Object(U.j)(ge({id:t},g)))}),[g]);var k=function(){var e=re()(te.a.mark((function e(){var t,n,r,a,o;return te.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({React:d.a,reactRouterDom:ue,pfReactTable:{Table:se.Table,TableBody:se.TableBody,TableHeader:se.TableHeader,TableGridBreakpoint:se.TableGridBreakpoint,cellWidth:se.cellWidth,TableVariant:se.TableVariant,sortable:se.sortable,expandable:se.expandable,SortByDirection:se.SortByDirection}});case 2:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,Object(be.c)(ge({},r(Object(de.a)(Ee.a)))),a=n(Object(be.a)()),o=a.InventoryTable,c((function(){return o}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();d.a.useEffect((function(){k()}),[]);var x=Object(ye.b)(O.limit,O.offset),w=i()(x,2),D=w[0],P=w[1];function C(e){n(Object(U.b)(e))}var _=Object(ye.d)(S,C),I={items:[Object(fe.a)(C,T,"Search systems")]},B={filters:Object(A.c)(S,T),onDelete:_},L=function(e){f((function(){return function(){return d.a.createElement(ve.a,{data:e})}}))},N=d.a.useCallback((function(e){var r=[];switch(e){case"none":Object.keys(v).forEach((function(e){r.push({id:e,selected:!1})})),n({type:"SELECT_ENTITY",payload:r});break;case"page":b.forEach((function(e){var t=e.id;r.push({id:t,selected:!0})})),n({type:"SELECT_ENTITY",payload:r});break;case"all":Object(me.f)({id:t,limit:999999}).then((function(e){e.data.forEach((function(e){var t=e.id;r.push({id:t,selected:!0})})),n({type:"SELECT_ENTITY",payload:r})}))}})),G=function(){var e=h&&h.filter((function(e){return"updated"===e.key}))[0];return e=ge(ge({},e),{},{key:"last_upload"}),[].concat($()(Ee.a),[e])},R=Object(ye.f)(G(),C,1),F=d.a.useMemo((function(){return Object(A.g)(G(),O.sort,1)}),[O.sort]),V=v&&Object(A.b)(v).length;return d.a.createElement(d.a.Fragment,null,p===X.d?d.a.createElement(K.a,{message:y.detail}):o&&d.a.createElement(o,{items:E,page:D,total:O.total_items,perPage:P,onRefresh:j,isLoaded:p===X.e,actions:Object(Ee.b)(L),tableProps:{canSelectAll:!1,onSort:R,sortBy:F},filterConfig:I,activeFiltersConfig:B,bulkSelect:N&&{count:V,items:[{title:"Select none (0)",onClick:function(){N("none")}},{title:"Select page (".concat(E.length,")"),onClick:function(){N("page")}},{title:"Select all (".concat(O.total_items,")"),onClick:function(){N("all")}}],onSelect:function(e){N(e?"all":"none")},checked:V===O.total_items||0!==V&&null}},d.a.createElement(oe.ToolbarGroup,null,d.a.createElement(ce.ToolbarItem,null,d.a.createElement(ae.Button,{className:"remediationButtonPatch",isDisabled:0===Object(A.b)(v).length,onClick:function(){return L(Object(A.q)(t,Object(A.b)(v)))}},d.a.createElement(le.a,null)," Remediate"),d.a.createElement(u,null)))))};he.propTypes={advisoryName:f.a.string};var je=he;function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ke=function(e){var t=e.match,n=Object(m.useDispatch)(),r=d.a.useState(t.params.advisoryId),a=i()(r,1)[0],o=Object(m.useSelector)((function(e){return e.AdvisoryDetailStore})),c=Object(m.useSelector)((function(e){return e.AdvisoryDetailStore.status})),u=Object(m.useSelector)((function(e){return e.AdvisoryDetailStore.error}));d.a.useEffect((function(){n(Object(U.m)({advisoryName:a}))}),[]),d.a.useEffect((function(){return function(){n(Object(U.f)()),n(Object(U.e)())}}),[]);var f=o.data.attributes;return d.a.createElement(d.a.Fragment,null,d.a.createElement(J.a,{title:a,breadcrumbs:[{title:"Patch",to:Q.b.advisories.to,isActive:!1},{title:"Advisories",to:Q.b.advisories.to,isActive:!1},{title:a,isActive:!0}]},c===X.d?d.a.createElement(K.a,{message:u.detail}):d.a.createElement(q,{attributes:Te(Te({},f),{},{id:a}),isLoading:c===X.c})),d.a.createElement(s.Main,null,d.a.createElement(l.TextContent,null,d.a.createElement(l.Text,{component:l.TextVariants.h2},"Affected systems")),d.a.createElement(je,{advisoryName:a})))};ke.propTypes={match:f.a.any};t.default=Object(p.o)(ke)},456:function(e,t,n){(e.exports=n(8)(!1)).push([e.i,".infobox{background-color:var(--pf-global--BackgroundColor--150);border:var(--pf-global--BorderColor--300) var(--pf-global--BorderWidth--sm) solid;height:65px}.infobox>.pf-l-split__item:first-child{width:65px;color:black;background-color:var(--pf-global--warning-color--100)}.infobox>.pf-l-split__item:first-child>div.pf-l-bullseye svg{color:white}.infobox .pf-c-content h6{margin:0}.infobox>.pf-l-split__item:nth-child(2){display:flex;justify-content:flex-start;align-items:center}\n",""])},487:function(e,t,n){var r=n(456);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(10)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(456,(function(){var t=n(456);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))}}]);
//# sourceMappingURL=AdvisoryyPage.js.map