(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{701:function(e,t,r){"use strict";r.r(t);var n=r(20),a=r.n(n),o=r(38),s=r.n(o),c=r(724),i=r(725),l=r(119),u=r(168),f=r(706),p=r(5),d=r.n(p),m=r(0),b=r.n(m),O=r(34),y=r(26),v=r(707),g=r(733),j=r(734),h=r(15),S=r(729),k=function(e){var t=e.attributes,r=e.isLoading;return b.a.createElement(g.Grid,{hasGutter:!0,style:{minHeight:50}},b.a.createElement(j.GridItem,{md:8,sm:12},b.a.createElement(S.b,{loading:r,variant:S.a.spinner,centered:!0},b.a.createElement(c.Stack,{hasGutter:!0},b.a.createElement(i.StackItem,null),b.a.createElement(i.StackItem,{style:{whiteSpace:"pre-line"}},Object(h.r)(t.description))))))};k.propTypes={attributes:d.a.object,isLoading:d.a.bool};var w=k,P=r(165),_=r(206),E=r(708),x=r.n(E),D=r(726),N=r.n(D),I=r(727),T=r.n(I),G=(r(73),r(208),r(207),r(343),r(16)),L=r(728),A=r(118),z=r(166),C=r(400),M=r(339),R=r(46),F=r(720),$=(r(52),r(11)),B=r(167),H=r(85),V=(r(340),r(721));function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var U=function(e){var t=e.packageName,r=Object(O.useDispatch)(),n=b.a.useState(),a=s()(n,2),o=a[0],c=a[1],i=b.a.useState((function(){return function(){return null}})),l=s()(i,2),u=(l[0],l[1],Object(O.useSelector)((function(e){return e.PackageSystemsStore.rows}))),f=Object(O.useSelector)((function(e){return e.PackageSystemsStore.status})),p=Object(O.useSelector)((function(e){return e.PackageSystemsStore.error})),d=Object(O.useSelector)((function(e){return e.PackageSystemsStore.selectedRows})),m=b.a.useMemo((function(){return Object(B.b)(u,d)}),[u]),y=Object(O.useSelector)((function(e){return e.PackageSystemsStore.metadata})),v=Object(O.useSelector)((function(e){return e.PackageSystemsStore.queryParams})),g=Object(O.useSelector)((function(e){var t=e.entities;return t&&t.columns})),j=Object(H.a)(y,W),S=v.filter,k=v.search;b.a.useEffect((function(){return function(){return r(Object(R.k)())}}),[]),b.a.useEffect((function(){r(Object(R.v)(J({id:t},v)))}),[v]);var w=function(){var e=T()(N.a.mark((function e(){var t,r,n,a,o;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:O,React:b.a,reactRouterDom:A,pfReactTable:{Table:G.Table,TableBody:G.TableBody,TableHeader:G.TableHeader,TableGridBreakpoint:G.TableGridBreakpoint,cellWidth:G.cellWidth,TableVariant:G.TableVariant,sortable:G.sortable,expandable:G.expandable,SortByDirection:G.SortByDirection},pfReact:L.reactCore});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithEntities,Object(M.c)(J({},n(Object(F.b)(V.a)))),a=r(Object(M.a)()),o=a.InventoryTable,c((function(){return o}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();b.a.useEffect((function(){w()}),[]);var _=Object(H.b)(y.limit,y.offset),E=s()(_,2),D=E[0],I=E[1];function W(e){r(Object(R.c)(e))}var U=Object(H.d)(S,W),q={items:[Object(z.a)(W,k,"Search systems"),Object(C.a)(W,S)]},X={filters:Object(h.c)(S,k),onDelete:U},Y=!1,K=function(){var e=g&&g.filter((function(e){return"updated"===e.key}))[0];return e=J(J({},e),{},{key:"last_upload"}),[].concat(x()(V.a),[e])},Q=Object(H.f)(K(),W,0),Z=b.a.useMemo((function(){return Object(h.g)(K(),y.sort,0)}),[y.sort]);d&&Object(h.b)(d).length;return b.a.createElement(b.a.Fragment,null,f===$.e?b.a.createElement(P.a,{message:p.detail}):o&&b.a.createElement(o,{items:m,page:D,total:y.total_items,perPage:I,onRefresh:j,isLoaded:f===$.f,tableProps:{canSelectAll:!1,onSort:Q,sortBy:Z,onSelect:Y},filterConfig:q,activeFiltersConfig:X,bulkSelect:!1},!1))};U.propTypes={packageName:d.a.string};var q=U;function X(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?X(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):X(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K=function(e){var t=e.match,r=Object(O.useDispatch)(),n=b.a.useState(t.params.packageName),a=s()(n,1)[0],o=Object(O.useSelector)((function(e){return e.PackageDetailStore})),p=Object(O.useSelector)((function(e){return e.PackageDetailStore.status})),d=Object(O.useSelector)((function(e){return e.PackageDetailStore.error}));b.a.useEffect((function(){r(Object(R.u)({packageName:a}))}),[]),b.a.useEffect((function(){return function(){r(Object(R.j)())}}),[]);var m=o.data.attributes;return b.a.createElement(b.a.Fragment,null,b.a.createElement(v.a,{title:a,breadcrumbs:[{title:"Patch",to:_.b.advisories.to,isActive:!1},$.c&&{title:"Packages",to:_.b.packages.to,isActive:!1},{title:a,isActive:!0}]},p===$.e?b.a.createElement(P.a,{message:d.detail}):b.a.createElement(w,{attributes:Y(Y({},m),{},{id:a}),isLoading:p===$.d})),b.a.createElement(f.Main,null,b.a.createElement(c.Stack,{hasGutter:!0},b.a.createElement(i.StackItem,null,b.a.createElement(u.TextContent,null,b.a.createElement(l.Text,{component:l.TextVariants.h2},"Affected systems"))),b.a.createElement(i.StackItem,null,b.a.createElement(q,{packageName:a})))))};K.propTypes={match:d.a.any};t.default=Object(y.o)(K)},705:function(e,t,r){(e.exports=r(6)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},708:function(e,t,r){var n=r(717),a=r(718),o=r(450),s=r(719);e.exports=function(e){return n(e)||a(e)||o(e)||s()}},717:function(e,t,r){var n=r(451);e.exports=function(e){if(Array.isArray(e))return n(e)}},718:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},719:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},720:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(708),a=r.n(n),o=r(20),s=r.n(o),c=r(16);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){s()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={columns:[],rows:[],entities:[]};function f(e,t,r){if(r.loaded){var n=r.columns.filter((function(e){return"updated"===e.key}));return n=[l(l({},n[0]),{},{transforms:[c.sortable]})],l(l({},r),{},{columns:[].concat(a()(e||[]),a()(n||[])),rows:(o=r.rows,s=t,o.map((function(e){var t=s&&s.find((function(t){return t.id===e.id}));return l(l({},e),{},{updated:t&&t.attributes.last_upload||e.updated})})))})}var o,s;return r}function p(e,t,r){return r.loaded?l(l({},r),{},{columns:e}):r}var d=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,a=n.store&&n.store.getState(),o=a&&("SYSTEMS_PAGE"===t?a.SystemsListStore:a.AdvisorySystemsStore);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return f(e,o.rows,r);default:return r}}},m=function(e){return function(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,a=n.store&&n.store.getState();switch(n.type){case"LOAD_ENTITIES_FULFILLED":return p(e,null===(t=a.PackageSystemsStore)||void 0===t||t.rows,r);default:return r}}}},721:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"a",(function(){return c})),r.d(t,"c",(function(){return i}));var n=r(16),a=r(52),o=r(15),s=(r(722),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[n.sortable],props:{width:50}},{key:"packages_installed",title:"Packages",transforms:[n.sortable],props:{width:10}},{key:"applicable_advisories",title:"Applicable advisories",transforms:[n.sortable],props:{width:20},renderFunc:function(e){return Object(o.f)(e)}}]),c=[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],props:{width:50}},{key:"installed_evra",title:"Installed version",transforms:[n.sortable],props:{width:10}},{key:"available_evra",title:"Latest version",transforms:[n.sortable],props:{width:10}},{key:"upgradable",title:"Status",props:{width:20},renderFunc:function(e){return Object(o.h)(e)}}],i=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,r,n){Object(a.i)({id:n.id,limit:1e4}).then((function(t){return e(Object(o.s)(t.data.map((function(e){return e.id})),n.id))}))}}]}},722:function(e,t,r){var n=r(705);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(7)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(705,(function(){var t=r(705);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},723:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(t.BaseSizes||(t.BaseSizes={})),function(e){e.sm="Sm",e.md="Md",e.lg="Lg",e.xl="Xl",e.xl2="_2xl"}(t.DeviceSizes||(t.DeviceSizes={}))},724:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(135)),s=r(1);t.Stack=e=>{var{hasGutter:t=!1,className:r="",children:c=null,component:i="div"}=e,l=n.__rest(e,["hasGutter","className","children","component"]);const u=i;return a.createElement(u,Object.assign({},l,{className:s.css(o.default.stack,t&&o.default.modifiers.gutter,r)}),c)},t.Stack.displayName="Stack"},725:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(135)),s=r(1);t.StackItem=e=>{var{isFilled:t=!1,className:r="",children:c=null}=e,i=n.__rest(e,["isFilled","className","children"]);return a.createElement("div",Object.assign({},i,{className:s.css(o.default.stackItem,t&&o.default.modifiers.fill,r)}),c)},t.StackItem.displayName="StackItem"},729:function(e,t,r){"use strict";r.d(t,"a",(function(){return m}));var n,a=r(95),o=r.n(a),s=r(20),c=r.n(s),i=r(730),l=r(731),u=r(5),f=r.n(u),p=r(0),d=r.n(p),m={spinner:"spinner",skeleton:"skeleton"},b=(n={},c()(n,m.skeleton,(function(e){var t=e.size,r=e.isDark;return d.a.createElement(i.Skeleton,{size:t,isDark:r})})),c()(n,m.spinner,(function(e){var t=e.centered;return d.a.createElement(l.Spinner,{centered:t})})),n),O=function(e){var t=e.loading,r=e.variant,n=e.children,a=o()(e,["loading","variant","children"]);return!1!==t?b[r](a):n};O.propTypes={loading:f.a.bool,variant:f.a.string,children:f.a.any},t.b=O},730:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),o=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},s={xs:"xs",sm:"sm",md:"md",lg:"lg"},c=function(e){var r=e.size,s=e.isDark,c=e.className,i=o(e,["size","isDark","className"]),l=n("ins-c-skeleton","ins-c-skeleton__".concat(r),function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-dark",s),c);return t.createElement("div",a({className:l},i)," ")};c.propTypes={className:r.string,size:r.oneOf(Object.values(s)),isDark:r.bool},c.defaultProps={size:s.md,isDark:!1},e.Skeleton=c,e.SkeletonSize=s,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(5),r(134))},731:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),o=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},s=function(e){var r=e.centered,s=e.className,c=o(e,["centered","className"]),i=n("ins-c-spinner",function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-center",r),s);return t.createElement("div",a({role:"status",className:i},c),t.createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};s.propTypes={centered:r.bool,className:r.string},e.Spinner=s,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(5),r(134))},733:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(67)),s=r(1),c=r(723);t.Grid=e=>{var{children:t=null,className:r="",hasGutter:i,span:l=null}=e,u=n.__rest(e,["children","className","hasGutter","span"]);const f=[o.default.grid,l&&o.default.modifiers[`all_${l}Col`]];return Object.entries(c.DeviceSizes).forEach(([e,t])=>{const r=e,n=u[r];n&&f.push(o.default.modifiers[`all_${n}ColOn${t}`]),delete u[r]}),a.createElement("div",Object.assign({className:s.css(...f,i&&o.default.modifiers.gutter,r)},u),t)},t.Grid.displayName="Grid"},734:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(67)),s=r(1),c=r(723);t.GridItem=e=>{var{children:t=null,className:r="",span:i=null,rowSpan:l=null,offset:u=null}=e,f=n.__rest(e,["children","className","span","rowSpan","offset"]);const p=[o.default.gridItem,i&&o.default.modifiers[i+"Col"],l&&o.default.modifiers[l+"Row"],u&&o.default.modifiers[`offset_${u}Col`]];return Object.entries(c.DeviceSizes).forEach(([e,t])=>{const r=e,n=r+"RowSpan",a=r+"Offset",s=f[r],c=f[n],i=f[a];s&&p.push(o.default.modifiers[`${s}ColOn${t}`]),c&&p.push(o.default.modifiers[`${c}RowOn${t}`]),i&&p.push(o.default.modifiers[`offset_${i}ColOn${t}`]),delete f[r],delete f[n],delete f[a]}),a.createElement("div",Object.assign({className:s.css(...p,r)},f),t)},t.GridItem.displayName="GridItem"}}]);
//# sourceMappingURL=PackageDetail.js.map