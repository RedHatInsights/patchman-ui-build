(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{140:function(e,t,n){"use strict";n.r(t);var r=n(35),a=n(240),o=n(302),c=n(246),i=n(244),u=n(241),l=n(242),s=n(303),f=n(247),d=n(245),p=n(238),m=n(239),b=n(445);n.d(t,"TableGridBreakpoint",(function(){return r.d})),n.d(t,"TableVariant",(function(){return r.e})),n.d(t,"SortByDirection",(function(){return r.a})),n.d(t,"TableContext",(function(){return r.c})),n.d(t,"Table",(function(){return r.b})),n.d(t,"ActionsColumn",(function(){return a.a})),n.d(t,"TableBody",(function(){return o.a})),n.d(t,"BodyCell",(function(){return c.a})),n.d(t,"BodyWrapper",(function(){return i.a})),n.d(t,"CollapseColumn",(function(){return u.a})),n.d(t,"ExpandableRowContent",(function(){return l.a})),n.d(t,"TableHeader",(function(){return s.a})),n.d(t,"HeaderCell",(function(){return f.a})),n.d(t,"RowWrapper",(function(){return d.a})),n.d(t,"SelectColumn",(function(){return p.a})),n.d(t,"SortColumn",(function(){return m.a})),n.d(t,"selectable",(function(){return b.t})),n.d(t,"sortable",(function(){return b.u})),n.d(t,"cellActions",(function(){return b.c})),n.d(t,"cellWidth",(function(){return b.e})),n.d(t,"cellHeightAuto",(function(){return b.d})),n.d(t,"wrappable",(function(){return b.w})),n.d(t,"textCenter",(function(){return b.v})),n.d(t,"collapsible",(function(){return b.g})),n.d(t,"expandedRow",(function(){return b.m})),n.d(t,"expandable",(function(){return b.l})),n.d(t,"compoundExpand",(function(){return b.h})),n.d(t,"headerCol",(function(){return b.n})),n.d(t,"classNames",(function(){return b.f})),n.d(t,"Visibility",(function(){return b.a})),n.d(t,"emptyTD",(function(){return b.k})),n.d(t,"scopeColTransformer",(function(){return b.s})),n.d(t,"emptyCol",(function(){return b.j})),n.d(t,"parentId",(function(){return b.r})),n.d(t,"mapProps",(function(){return b.q})),n.d(t,"mapOpenedRows",(function(){return b.p})),n.d(t,"calculateColumns",(function(){return b.b})),n.d(t,"defaultTitle",(function(){return b.i})),n.d(t,"isRowExpanded",(function(){return b.o}))},445:function(e,t,n){"use strict";var r=n(71);n.d(t,"a",(function(){return r.a})),n.d(t,"c",(function(){return r.b})),n.d(t,"d",(function(){return r.c})),n.d(t,"e",(function(){return r.d})),n.d(t,"f",(function(){return r.e})),n.d(t,"g",(function(){return r.f})),n.d(t,"h",(function(){return r.g})),n.d(t,"j",(function(){return r.h})),n.d(t,"k",(function(){return r.i})),n.d(t,"l",(function(){return r.j})),n.d(t,"m",(function(){return r.k})),n.d(t,"n",(function(){return r.l})),n.d(t,"q",(function(){return r.m})),n.d(t,"r",(function(){return r.n})),n.d(t,"s",(function(){return r.o})),n.d(t,"t",(function(){return r.p})),n.d(t,"u",(function(){return r.q})),n.d(t,"v",(function(){return r.r})),n.d(t,"w",(function(){return r.s}));var a=n(98);n.d(t,"b",(function(){return a.a})),n.d(t,"p",(function(){return a.b}));var o=n(243);n.d(t,"i",(function(){return o.a}));var c=n(446);n.d(t,"o",(function(){return c.a}))},448:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},449:function(e,t,n){var r=n(448);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(6)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(448,(function(){var t=n(448);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},450:function(e,t,n){"use strict";var r=n(78),a=n(1),o=n.n(a),c=n(2),i=n.n(c),u=n(266),l=n(267),s=n(87),f=function(e){var t=e.items;return i.a.createElement(u.a,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.a,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(s.a,{to:e.to},e.title)||e.title)})))};f.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var d=f,p=n(286),m=n(269),b=n(285),v=n(248),y=(n(449),function(e){var t=e.history;return i.a.createElement(p.a,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(m.a,{eventKey:v.b.advisories.to,title:v.b.advisories.title}),i.a.createElement(m.a,{eventKey:v.b.systems.to,title:v.b.systems.title}))});y.propTypes={history:o.a.object};var g=Object(b.a)(y),O=function(e){var t=e.title,n=e.showTabs,a=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.PageHeader,null,a&&i.a.createElement(d,{items:a}),i.a.createElement(r.PageHeaderTitle,{title:t}),o),n&&i.a.createElement(g,null))};O.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=O},451:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n(28),a=n.n(r);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var c={columns:[],rows:[],entities:[]};function i(e,t){return t.loaded?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{columns:e}):t}var u=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ENTITIES_FULFILLED":return i(e,t);default:return t}}}},452:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(27),a=[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],props:{width:40}},{key:"applicable_advisories",title:"Applicable advisories",props:{width:30},renderFunc:function(e){return Object(r.c)(e)}},{key:"status",title:"Status",props:{width:30}}]},453:function(e,t,n){(e.exports=n(5)(!1)).push([e.i,".infobox{background-color:var(--pf-global--BackgroundColor--150);border:var(--pf-global--BorderColor--300) var(--pf-global--BorderWidth--sm) solid;height:65px}.infobox>.pf-l-split__item:first-child{width:65px;color:black;background-color:var(--pf-global--warning-color--100)}.infobox>.pf-l-split__item:first-child>div.pf-l-bullseye svg{color:white}.infobox h6{margin:0}.infobox>.pf-l-split__item:nth-child(2){display:flex;justify-content:flex-start;align-items:center}\n",""])},454:function(e,t,n){var r=n(453);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=n(6)(r,a);r.locals&&(e.exports=r.locals),e.hot.accept(453,(function(){var t=n(453);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},458:function(e,t,n){"use strict";n.r(t);var r,a=n(28),o=n.n(a),c=n(99),i=n.n(c),u=n(270),l=n(271),s=n(78),f=n(1),d=n.n(f),p=n(2),m=n.n(p),b=n(39),v=n(285),y=n(273),g=n(274),O=n(277),h=n(278),E=n(116),j=n(229),w=n(228),S=n(119),P=n.n(S),k="spinner",x="skeleton",D=(r={},o()(r,x,(function(e){var t=e.size,n=e.isDark;return m.a.createElement(s.Skeleton,{size:t,isDark:n})})),o()(r,k,(function(e){var t=e.centered;return m.a.createElement(s.Spinner,{centered:t})})),r),C=function(e){var t=e.loading,n=e.variant,r=e.children,a=P()(e,["loading","variant","children"]);return!1!==t?D[n](a):r};C.propTypes={loading:d.a.bool,variant:d.a.string,children:d.a.any};var T=C,_=n(27),A=n(275),L=n(276),I=n(272),R=(n(454),function(e){var t=e.title,n=e.text,r=e.isLoading,a=e.content,o=e.color;return m.a.createElement(A.a,{className:"infobox",gutter:"md"},m.a.createElement(T,{variant:x,loading:r,size:"lg"},m.a.createElement(L.a,{style:{backgroundColor:o}},m.a.createElement(I.a,null,a)),m.a.createElement(L.a,{isFilled:!0},m.a.createElement(u.a,null,m.a.createElement(l.a,{component:l.b.h6},t),m.a.createElement(l.a,{component:l.b.p},n)))))});R.propTypes={title:d.a.string,text:d.a.any,isLoading:d.a.bool,content:d.a.any,color:d.a.string};var B=R,F=function(e){var t=e.attributes,n=e.isLoading,r=Object(_.h)(t.severity);return m.a.createElement(y.a,{gutter:"sm"},m.a.createElement(g.a,{md:8,sm:12},m.a.createElement(T,{loading:n,variant:k,centered:!0},m.a.createElement(O.a,{gutter:"sm"},m.a.createElement(h.a,null),m.a.createElement(h.a,{style:{whiteSpace:"pre-line"}},t.description&&t.description.replace(new RegExp("\\n(?=[^\\n])","g"),"")),m.a.createElement(h.a,null,t.public_date&&m.a.createElement(m.a.Fragment,null,"Issued: ".concat(Object(j.processDate)(t.public_date)),m.a.createElement("br",null)),t.modified_date&&m.a.createElement(m.a.Fragment,null,"Modified: ".concat(Object(j.processDate)(t.modified_date)))),m.a.createElement(h.a,null,m.a.createElement(w.a,{advisory:t.id}))))),m.a.createElement(g.a,{md:4,sm:12},m.a.createElement(B,{isLoading:n,title:r.name,color:r.color,text:m.a.createElement("a",null,"Learn more"),content:m.a.createElement(E.b,{size:"md"})})))};F.propTypes={attributes:d.a.object,isLoading:d.a.bool};var N=F,H=n(450),M=n(248),z=n(81),W=n(141),q=n.n(W),K=n(52),J=n(12),V=n(140),G=n(91),U=n(249),Q=n(451),X=n(250),Y=n(452);function Z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Z(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(e){var t=e.advisoryName,n=Object(b.useDispatch)(),r=m.a.useState(),a=i()(r,2),o=a[0],c=a[1],u=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.rows})),l=m.a.useMemo((function(){return Object(X.c)(u)}),[u]),s=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.metadata})),f=Object(b.useSelector)((function(e){return e.AffectedSystemsStore.queryParams}));m.a.useEffect((function(){n(Object(z.h)($({id:t},f)))}),[f]);m.a.useEffect((function(){var e,t,n,r,a;q.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,q.a.awrap(insights.loadInventory({react:m.a,reactRouterDom:G,reactCore:K,reactIcons:J,pfReactTable:V}));case 2:e=o.sent,t=e.inventoryConnector,n=e.mergeWithEntities,Object(U.c)($({},n(Object(Q.a)(Y.a)))),r=t(Object(U.a)()),a=r.InventoryTable,c((function(){return a}));case 8:case"end":return o.stop()}}))}),[]);var d=m.a.useMemo((function(){return Object(_.b)(s.limit,s.offset)}),[s.limit,s.offset]),p=i()(d,2),v=p[0],y=p[1];var g=m.a.useCallback((function(e){var t,r=e.page,a=e.per_page;s.page===r&&s.page_size===a||(t={offset:s.limit!==a?0:Object(_.f)(r,a),limit:Object(_.e)(a)},n(Object(z.b)(t)))}));return m.a.createElement(m.a.Fragment,null,o&&m.a.createElement(o,{items:l,page:v,total:s.total_items,perPage:y,onRefresh:g}))};function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(e){var t=e.match,n=Object(b.useDispatch)(),r=m.a.useState(t.params.advisoryId),a=i()(r,1)[0],o=Object(b.useSelector)((function(e){return e.AdvisoryDetailStore}));m.a.useEffect((function(){n(Object(z.k)({advisoryName:a}))}),[]);var c=o.data.attributes;return m.a.createElement(m.a.Fragment,null,m.a.createElement(H.a,{title:a,breadcrumbs:[{title:"System Patching",to:M.b.advisories.to,isActive:!1},{title:a,isActive:!0}]},m.a.createElement(N,{attributes:ne({},c,{id:a}),isLoading:o.isLoading})),m.a.createElement(s.Main,null,m.a.createElement(u.a,null,m.a.createElement(l.a,{component:l.b.h2},"Affected Systems")),m.a.createElement(ee,{advisoryName:a})))};re.propTypes={match:d.a.any};t.default=Object(v.a)(re)}}]);
//# sourceMappingURL=AdvisoryyPage.js.map