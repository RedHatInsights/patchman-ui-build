(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,n){"use strict";n.r(t);var r=n(39),a=n(239),o=n(448),c=n(245),i=n(243),u=n(240),l=n(241),s=n(449),f=n(246),d=n(244),p=n(237),b=n(238),m=n(446);n.d(t,"TableGridBreakpoint",(function(){return r.d})),n.d(t,"TableVariant",(function(){return r.e})),n.d(t,"SortByDirection",(function(){return r.a})),n.d(t,"TableContext",(function(){return r.c})),n.d(t,"Table",(function(){return r.b})),n.d(t,"ActionsColumn",(function(){return a.a})),n.d(t,"TableBody",(function(){return o.a})),n.d(t,"BodyCell",(function(){return c.a})),n.d(t,"BodyWrapper",(function(){return i.a})),n.d(t,"CollapseColumn",(function(){return u.a})),n.d(t,"ExpandableRowContent",(function(){return l.a})),n.d(t,"TableHeader",(function(){return s.a})),n.d(t,"HeaderCell",(function(){return f.a})),n.d(t,"RowWrapper",(function(){return d.a})),n.d(t,"SelectColumn",(function(){return p.a})),n.d(t,"SortColumn",(function(){return b.a})),n.d(t,"selectable",(function(){return m.t})),n.d(t,"sortable",(function(){return m.u})),n.d(t,"cellActions",(function(){return m.c})),n.d(t,"cellWidth",(function(){return m.e})),n.d(t,"cellHeightAuto",(function(){return m.d})),n.d(t,"wrappable",(function(){return m.w})),n.d(t,"textCenter",(function(){return m.v})),n.d(t,"collapsible",(function(){return m.g})),n.d(t,"expandedRow",(function(){return m.m})),n.d(t,"expandable",(function(){return m.l})),n.d(t,"compoundExpand",(function(){return m.h})),n.d(t,"headerCol",(function(){return m.n})),n.d(t,"classNames",(function(){return m.f})),n.d(t,"Visibility",(function(){return m.a})),n.d(t,"emptyTD",(function(){return m.k})),n.d(t,"scopeColTransformer",(function(){return m.s})),n.d(t,"emptyCol",(function(){return m.j})),n.d(t,"parentId",(function(){return m.r})),n.d(t,"mapProps",(function(){return m.q})),n.d(t,"mapOpenedRows",(function(){return m.p})),n.d(t,"calculateColumns",(function(){return m.b})),n.d(t,"defaultTitle",(function(){return m.i})),n.d(t,"isRowExpanded",(function(){return m.o}))},446:function(e,t,n){"use strict";var r=n(73);n.d(t,"a",(function(){return r.a})),n.d(t,"c",(function(){return r.b})),n.d(t,"d",(function(){return r.c})),n.d(t,"e",(function(){return r.d})),n.d(t,"f",(function(){return r.e})),n.d(t,"g",(function(){return r.f})),n.d(t,"h",(function(){return r.g})),n.d(t,"j",(function(){return r.h})),n.d(t,"k",(function(){return r.i})),n.d(t,"l",(function(){return r.j})),n.d(t,"m",(function(){return r.k})),n.d(t,"n",(function(){return r.l})),n.d(t,"q",(function(){return r.m})),n.d(t,"r",(function(){return r.n})),n.d(t,"s",(function(){return r.o})),n.d(t,"t",(function(){return r.p})),n.d(t,"u",(function(){return r.q})),n.d(t,"v",(function(){return r.r})),n.d(t,"w",(function(){return r.s}));var a=n(99);n.d(t,"b",(function(){return a.a})),n.d(t,"p",(function(){return a.b}));var o=n(242);n.d(t,"i",(function(){return o.a}));var c=n(447);n.d(t,"o",(function(){return c.a}))},451:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},452:function(e,t,n){var r=n(451);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(6)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(451,(function(){var t=n(451);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},453:function(e,t,n){"use strict";var r=n(70),a=n(1),o=n.n(a),c=n(2),i=n.n(c),u=n(265),l=n(266),s=n(88),f=function(e){var t=e.items;return i.a.createElement(u.a,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.a,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(s.a,{to:e.to},e.title)||e.title)})))};f.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var d=f,p=n(284),b=n(268),m=n(287),v=n(247),y=(n(452),function(e){var t=e.history;return i.a.createElement(p.a,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(b.a,{eventKey:v.b.advisories.to,title:v.b.advisories.title}),i.a.createElement(b.a,{eventKey:v.b.systems.to,title:v.b.systems.title}))});y.propTypes={history:o.a.object};var g=Object(m.a)(y),O=function(e){var t=e.title,n=e.showTabs,a=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.PageHeader,null,a&&i.a.createElement(d,{items:a}),i.a.createElement(r.PageHeaderTitle,{title:t}),o),n&&i.a.createElement(g,null))};O.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=O},454:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(29),a=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c={columns:[],rows:[],entities:[]};function i(e,t){return t.loaded?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{columns:e}):t}var u=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ENTITIES_FULFILLED":return i(e,t);default:return t}}}},455:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(23),a=[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],props:{width:40}},{key:"applicable_advisories",title:"Applicable advisories",props:{width:30},renderFunc:function(e){return Object(r.d)(e)}},{key:"status",title:"Status",props:{width:30}}]},456:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".infobox{background-color:var(--pf-global--BackgroundColor--150);border:var(--pf-global--BorderColor--300) var(--pf-global--BorderWidth--sm) solid;height:65px}.infobox>.pf-l-split__item:first-child{width:65px;color:black;background-color:var(--pf-global--warning-color--100)}.infobox>.pf-l-split__item:first-child>div.pf-l-bullseye svg{color:white}.infobox h6{margin:0}.infobox>.pf-l-split__item:nth-child(2){display:flex;justify-content:flex-start;align-items:center}\n",""])},457:function(e,t,n){var r=n(456);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(6)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(456,(function(){var t=n(456);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},461:function(e,t,n){"use strict";n.r(t);var r,a=n(29),o=n.n(a),c=n(71),i=n.n(c),u=n(269),l=n(270),s=n(70),f=n(1),d=n.n(f),p=n(2),b=n.n(p),m=n(31),v=n(287),y=n(272),g=n(273),O=n(276),h=n(277),j=n(117),E=n(228),w=n(227),S=n(121),P=n.n(S),k="spinner",x="skeleton",D=(r={},o()(r,x,(function(e){var t=e.size,n=e.isDark;return b.a.createElement(s.Skeleton,{size:t,isDark:n})})),o()(r,k,(function(e){var t=e.centered;return b.a.createElement(s.Spinner,{centered:t})})),r),T=function(e){var t=e.loading,n=e.variant,r=e.children,a=P()(e,["loading","variant","children"]);return!1!==t?D[n](a):r};T.propTypes={loading:d.a.bool,variant:d.a.string,children:d.a.any};var C=T,_=n(23),A=n(274),L=n(275),R=n(271),I=(n(457),function(e){var t=e.title,n=e.text,r=e.isLoading,a=e.content,o=e.color;return b.a.createElement(A.a,{className:"infobox",gutter:"md"},b.a.createElement(C,{variant:x,loading:r,size:"lg"},b.a.createElement(L.a,{style:{backgroundColor:o}},b.a.createElement(R.a,null,a)),b.a.createElement(L.a,{isFilled:!0},b.a.createElement(u.a,null,b.a.createElement(l.a,{component:l.b.h6},t),b.a.createElement(l.a,{component:l.b.p},n)))))});I.propTypes={title:d.a.string,text:d.a.any,isLoading:d.a.bool,content:d.a.any,color:d.a.string};var B=I,F=function(e){var t=e.attributes,n=e.isLoading,r=Object(_.i)(t.severity);return b.a.createElement(y.a,{gutter:"sm",style:{minHeight:150}},b.a.createElement(g.a,{md:8,sm:12},b.a.createElement(C,{loading:n,variant:k,centered:!0},b.a.createElement(O.a,{gutter:"sm"},b.a.createElement(h.a,null),b.a.createElement(h.a,{style:{whiteSpace:"pre-line"}},t.description&&t.description.replace(new RegExp("\\n(?=[^\\n])","g"),"")),b.a.createElement(h.a,null,t.public_date&&b.a.createElement(b.a.Fragment,null,"Issued: ".concat(Object(E.processDate)(t.public_date)),b.a.createElement("br",null)),t.modified_date&&b.a.createElement(b.a.Fragment,null,"Modified: ".concat(Object(E.processDate)(t.modified_date)))),b.a.createElement(h.a,null,b.a.createElement(w.a,{advisory:t.id}))))),b.a.createElement(g.a,{md:4,sm:12},b.a.createElement(B,{isLoading:n,title:r.name,color:r.color,text:b.a.createElement("a",null,"Learn more"),content:b.a.createElement(j.b,{size:"md"})})))};F.propTypes={attributes:d.a.object,isLoading:d.a.bool};var N=F,H=n(453),z=n(247),M=n(82),W=n(141),q=n.n(W),K=n(44),J=n(12),V=n(140),G=n(92),U=n(248),Q=n(454),X=n(249),Y=n(104),Z=n(279),$=n(455);function ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function te(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ee(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ne=function(e){var t=e.advisoryName,n=Object(m.useDispatch)(),r=b.a.useState(),a=i()(r,2),o=a[0],c=a[1],u=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.rows})),l=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.selectedRows})),s=b.a.useMemo((function(){return Object(X.c)(u)}),[u]),f=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.metadata})),d=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.queryParams}));b.a.useEffect((function(){n(Object(M.j)(te({id:t},d)))}),[d]);b.a.useEffect((function(){var e,t,n,r,a;q.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,q.a.awrap(insights.loadInventory({react:b.a,reactRouterDom:G,reactCore:K,reactIcons:J,pfReactTable:V}));case 2:e=o.sent,t=e.inventoryConnector,n=e.mergeWithEntities,Object(U.c)(te({},n(Object(Q.a)($.a)))),r=t(Object(U.a)()),a=r.InventoryTable,c((function(){return a}));case 8:case"end":return o.stop()}}))}),[]);var p=Object(Y.a)(f.limit,f.offset),v=i()(p,2),y=v[0],g=v[1];var O=b.a.useCallback((function(e){var t,r=e.page,a=e.per_page;f.page===r&&f.page_size===a||(t={offset:f.limit!==a?0:Object(_.g)(r,a),limit:Object(_.f)(a)},n(Object(M.b)(t)))}));return b.a.createElement(b.a.Fragment,null,o&&b.a.createElement(o,{items:s,page:y,total:f.total_items,perPage:g,onRefresh:O},b.a.createElement(Z.a,{remediationProvider:function(){return Object(_.k)(t,Object(_.b)(l))}})))};ne.propTypes={advisoryName:d.a.string};var re=ne;function ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ae(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ae(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ce=function(e){var t=e.match,n=Object(m.useDispatch)(),r=b.a.useState(t.params.advisoryId),a=i()(r,1)[0],o=Object(m.useSelector)((function(e){return e.AdvisoryDetailStore}));b.a.useEffect((function(){n(Object(M.m)({advisoryName:a}))}),[]),b.a.useEffect((function(){return function(){n(Object(M.f)()),n(Object(M.e)())}}),[]);var c=o.data.attributes;return b.a.createElement(b.a.Fragment,null,b.a.createElement(H.a,{title:a,breadcrumbs:[{title:"System Patching",to:z.b.advisories.to,isActive:!1},{title:a,isActive:!0}]},b.a.createElement(N,{attributes:oe({},c,{id:a}),isLoading:o.isLoading})),b.a.createElement(s.Main,null,b.a.createElement(u.a,null,b.a.createElement(l.a,{component:l.b.h2},"Affected Systems")),b.a.createElement(re,{advisoryName:a})))};ce.propTypes={match:d.a.any};t.default=Object(v.a)(ce)}}]);
//# sourceMappingURL=AdvisoryyPage.js.map