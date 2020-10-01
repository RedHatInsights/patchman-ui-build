(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{693:function(e,t,r){"use strict";r.r(t);var n,a=r(25),o=r.n(a),i=r(41),l=r.n(i),s=r(120),c=r(167),u=r(720),d=r(721),p=r(697),f=r(4),m=r.n(f),b=r(0),v=r.n(b),y=r(34),O=r(30),h=r(739),_=r(740),g=r(188),S=r.n(g),E=r(211),j=r(328),P=r(110),x=r.n(P),w=r(723),T=r(724),k="spinner",N="skeleton",C=(n={},o()(n,N,(function(e){var t=e.size,r=e.isDark;return v.a.createElement(w.Skeleton,{size:t,isDark:r})})),o()(n,k,(function(e){var t=e.centered;return v.a.createElement(T.Spinner,{centered:t})})),n),D=function(e){var t=e.loading,r=e.variant,n=e.children,a=x()(e,["loading","variant","children"]);return!1!==t?C[r](a):n};D.propTypes={loading:m.a.bool,variant:m.a.string,children:m.a.any};var I=D,A=r(15),L=r(728),M=r(727),B=r(726),F=(r(725),function(e){var t=e.title,r=e.text,n=e.isLoading,a=e.content,o=e.color;return v.a.createElement(B.Split,{className:"infobox",hasGutter:!0},v.a.createElement(I,{variant:N,loading:n,size:"lg"},v.a.createElement(B.SplitItem,{style:{backgroundColor:o}},v.a.createElement(M.Bullseye,null,a)),v.a.createElement(B.SplitItem,{isFilled:!0},v.a.createElement(L.TextContent,null,v.a.createElement(L.Text,{component:L.TextVariants.h6},t),v.a.createElement(L.Text,{component:L.TextVariants.p},r)))))});F.propTypes={title:m.a.string,text:m.a.any,isLoading:m.a.bool,content:m.a.any,color:m.a.string};var G=F,R=r(731),z=r(397),$=r.n(z),H=r(113),V=r(70),W=function(e){var t=e.severity;return v.a.createElement(R.Popover,{position:"bottom",enableFlip:!0,headerContent:v.a.createElement("div",null,t.label+" severity"),bodyContent:v.a.createElement(c.TextContent,null,v.a.createElement(s.Text,{component:s.TextVariants.p},t.text)),footerContent:v.a.createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},v.a.createElement(H.Flex,null,v.a.createElement(V.FlexItem,{spacer:{default:"spacerSm"}},v.a.createElement($.a,null)),v.a.createElement(V.FlexItem,{spacer:{default:"spacerSm"}},"Learn more about security ratings")))},v.a.createElement("a",null,"Learn more"))};W.propTypes={severity:m.a.object};var Y=W,q=function(e){var t=e.attributes,r=e.isLoading,n=Object(A.o)(t.severity);return v.a.createElement(h.Grid,{hasGutter:!0,style:{minHeight:150}},v.a.createElement(_.GridItem,{md:8,sm:12},v.a.createElement(I,{loading:r,variant:k,centered:!0},v.a.createElement(u.Stack,{hasGutter:!0},v.a.createElement(d.StackItem,null),v.a.createElement(d.StackItem,{style:{whiteSpace:"pre-line"}},t.description&&t.description.replace(new RegExp("\\n(?=[^\\n])","g"),"")),v.a.createElement(d.StackItem,null,t.public_date&&v.a.createElement(v.a.Fragment,null,"Issued: ".concat(Object(E.processDate)(t.public_date)),v.a.createElement("br",null)),t.modified_date&&v.a.createElement(v.a.Fragment,null,"Modified: ".concat(Object(E.processDate)(t.modified_date)))),v.a.createElement(d.StackItem,null,v.a.createElement(j.a,{advisory:t.id}))))),v.a.createElement(_.GridItem,{md:4,sm:12},0!==n.value&&v.a.createElement(G,{isLoading:r,title:n.label,color:n.color,text:v.a.createElement(Y,{severity:n}),content:v.a.createElement(S.a,{size:"lg"})})))};q.propTypes={attributes:m.a.object,isLoading:m.a.bool};var K=q,J=r(699),U=r(165),X=r(207),Q=r(48),Z=r(14),ee=r(708),te=r.n(ee),re=r(712),ne=r.n(re),ae=r(713),oe=r.n(ae),ie=r(73),le=r(210),se=r(209),ce=r(396),ue=r.n(ce),de=r(18),pe=r(118),fe=r(717),me=r(166),be=r(338),ve=r(714),ye=r(66),Oe=r(169),he=r(86),_e=r(341),ge=r(715);function Se(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Se(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var je=function(e){var t=e.advisoryName,r=Object(y.useDispatch)(),n=v.a.useState(),a=l()(n,2),o=a[0],i=a[1],s=v.a.useState((function(){return function(){return null}})),c=l()(s,2),u=c[0],d=c[1],p=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.rows})),f=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.status})),m=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.error})),b=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.selectedRows})),O=v.a.useMemo((function(){return Object(Oe.d)(p,b)}),[p]),h=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.metadata})),_=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.queryParams})),g=Object(y.useSelector)((function(e){var t=e.entities;return t&&t.columns})),S=Object(he.a)(h,N),E=_.filter,j=_.search;v.a.useEffect((function(){return function(){return r(Object(Q.g)())}}),[]),v.a.useEffect((function(){r(Object(Q.k)(Ee({id:t},_)))}),[_]);var P=function(){var e=oe()(ne.a.mark((function e(){var t,r,n,a,o;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:y,React:v.a,reactRouterDom:pe,pfReactTable:{Table:de.Table,TableBody:de.TableBody,TableHeader:de.TableHeader,TableGridBreakpoint:de.TableGridBreakpoint,cellWidth:de.cellWidth,TableVariant:de.TableVariant,sortable:de.sortable,expandable:de.expandable,SortByDirection:de.SortByDirection},pfReact:fe.reactCore});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithEntities,Object(be.c)(Ee({},n(Object(ve.a)(ge.a,"AFFECTED_SYSTEMS")))),a=r(Object(be.a)()),o=a.InventoryTable,i((function(){return o}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();v.a.useEffect((function(){P()}),[]);var x=Object(he.b)(h.limit,h.offset),w=l()(x,2),T=w[0],k=w[1];function N(e){r(Object(Q.b)(e))}var C=Object(he.d)(E,N),D={items:[Object(me.a)(N,j,"Search systems")]},I={filters:Object(A.c)(E,j),onDelete:C},L=function(e){d((function(){return function(){return v.a.createElement(_e.a,{data:e})}}))},M=v.a.useCallback((function(e){var n=[];switch(e){case"none":Object.keys(b).forEach((function(e){n.push({id:e,selected:e})})),r({type:"SELECT_ENTITY",payload:n});break;case"page":p.forEach((function(e){var t=e.id;n.push({id:t,selected:t})})),r({type:"SELECT_ENTITY",payload:n});break;case"all":Object(ye.f)({id:t,limit:999999}).then((function(e){e.data.forEach((function(e){var t=e.id;n.push({id:t,selected:t})})),r({type:"SELECT_ENTITY",payload:n})}))}})),B=function(){var e=g&&g.filter((function(e){return"updated"===e.key}))[0];return e=Ee(Ee({},e),{},{key:"last_upload"}),[].concat(te()(ge.a),[e])},F=Object(he.f)(B(),N,1),G=v.a.useMemo((function(){return Object(A.g)(B(),h.sort,1)}),[h.sort]),R=b&&Object(A.b)(b).length;return v.a.createElement(v.a.Fragment,null,f===Z.d?v.a.createElement(U.a,{message:m.detail}):o&&v.a.createElement(o,{items:O,page:T,total:h.total_items,perPage:k,onRefresh:S,isLoaded:f===Z.e,actions:Object(ge.b)(L),tableProps:{canSelectAll:!1,onSort:F,sortBy:G},filterConfig:D,activeFiltersConfig:I,bulkSelect:M&&{count:R,items:[{title:"Select none (0)",onClick:function(){M("none")}},{title:"Select page (".concat(O.length,")"),onClick:function(){M("page")}},{title:"Select all (".concat(h.total_items,")"),onClick:function(){M("all")}}],onSelect:function(e){M(e?"all":"none")},checked:R===h.total_items||0!==R&&null}},v.a.createElement(le.ToolbarGroup,null,v.a.createElement(se.ToolbarItem,null,v.a.createElement(ie.Button,{className:"remediationButtonPatch",isDisabled:0===Object(A.b)(b).length,onClick:function(){return L(Object(A.q)(t,Object.keys(b)))}},v.a.createElement(ue.a,null)," Remediate"),v.a.createElement(u,null)))))};je.propTypes={advisoryName:m.a.string};var Pe=je;function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te=function(e){var t=e.match,r=Object(y.useDispatch)(),n=v.a.useState(t.params.advisoryId),a=l()(n,1)[0],o=Object(y.useSelector)((function(e){return e.AdvisoryDetailStore})),i=Object(y.useSelector)((function(e){return e.AdvisoryDetailStore.status})),f=Object(y.useSelector)((function(e){return e.AdvisoryDetailStore.error}));v.a.useEffect((function(){r(Object(Q.o)({advisoryName:a}))}),[]),v.a.useEffect((function(){return function(){r(Object(Q.g)()),r(Object(Q.f)())}}),[]);var m=o.data.attributes;return v.a.createElement(v.a.Fragment,null,v.a.createElement(J.a,{title:a,breadcrumbs:[{title:"Patch",to:X.b.advisories.to,isActive:!1},{title:"Advisories",to:X.b.advisories.to,isActive:!1},{title:a,isActive:!0}]},i===Z.d?v.a.createElement(U.a,{message:f.detail}):v.a.createElement(K,{attributes:we(we({},m),{},{id:a}),isLoading:i===Z.c})),v.a.createElement(p.Main,null,v.a.createElement(u.Stack,{hasGutter:!0},v.a.createElement(d.StackItem,null,v.a.createElement(c.TextContent,null,v.a.createElement(s.Text,{component:s.TextVariants.h2},"Affected systems"))),v.a.createElement(d.StackItem,null,v.a.createElement(Pe,{advisoryName:a})))))};Te.propTypes={match:m.a.any};t.default=Object(O.o)(Te)},698:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},708:function(e,t,r){var n=r(709),a=r(710),o=r(445),i=r(711);e.exports=function(e){return n(e)||a(e)||o(e)||i()}},709:function(e,t,r){var n=r(446);e.exports=function(e){if(Array.isArray(e))return n(e)}},710:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},711:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},714:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(708),a=r.n(n),o=r(25),i=r.n(o),l=r(18);function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={columns:[],rows:[],entities:[]};function d(e,t,r){if(r.loaded){var n=r.columns.filter((function(e){return"updated"===e.key}));return n=[c(c({},n[0]),{},{transforms:[l.sortable]})],c(c({},r),{},{columns:[].concat(a()(e||[]),a()(n||[])),rows:(o=r.rows,i=t,o.map((function(e){var t=i&&i.find((function(t){return t.id===e.id}));return c(c({},e),{},{updated:t&&t.attributes.last_upload||e.updated})})))})}var o,i;return r}var p=function(e,t){return function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,n=arguments.length>1?arguments[1]:void 0,a=n.store&&n.store.getState(),o=a&&("SYSTEMS_PAGE"===t?a.SystemsListStore:a.AffectedSystemsStore);switch(n.type){case"LOAD_ENTITIES_FULFILLED":return d(e,o.rows,r);default:return r}}}},715:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var n=r(18),a=r(66),o=r(15),i=(r(716),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[n.sortable],props:{width:50}},{key:"packages_installed",title:"Packages",transforms:[n.sortable],props:{width:10}},{key:"applicable_advisories",title:"Applicable advisories",transforms:[n.sortable],props:{width:20},renderFunc:function(e){return Object(o.f)(e)}}]),l=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,r,n){Object(a.i)({id:n.id,limit:1e4}).then((function(t){return e(Object(o.q)(t.data.map((function(e){return e.id})),n.id))}))}}]}},716:function(e,t,r){var n=r(698);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(6)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(698,(function(){var t=r(698);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},718:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".infobox{background-color:var(--pf-global--BackgroundColor--150);border:var(--pf-global--BorderColor--300) var(--pf-global--BorderWidth--sm) solid;height:65px}.infobox>.pf-l-split__item:first-child{width:65px;color:black;background-color:var(--pf-global--warning-color--100)}.infobox>.pf-l-split__item:first-child>div.pf-l-bullseye svg{color:white}.infobox .pf-c-content h6{margin:0}.infobox>.pf-l-split__item:nth-child(2){display:flex;justify-content:flex-start;align-items:center}\n",""])},719:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(t.BaseSizes||(t.BaseSizes={})),function(e){e.sm="Sm",e.md="Md",e.lg="Lg",e.xl="Xl",e.xl2="_2xl"}(t.DeviceSizes||(t.DeviceSizes={}))},720:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(137)),i=r(1);t.Stack=e=>{var{hasGutter:t=!1,className:r="",children:l=null,component:s="div"}=e,c=n.__rest(e,["hasGutter","className","children","component"]);const u=s;return a.createElement(u,Object.assign({},c,{className:i.css(o.default.stack,t&&o.default.modifiers.gutter,r)}),l)},t.Stack.displayName="Stack"},721:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(137)),i=r(1);t.StackItem=e=>{var{isFilled:t=!1,className:r="",children:l=null}=e,s=n.__rest(e,["isFilled","className","children"]);return a.createElement("div",Object.assign({},s,{className:i.css(o.default.stackItem,t&&o.default.modifiers.fill,r)}),l)},t.StackItem.displayName="StackItem"},723:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),o=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},i={xs:"xs",sm:"sm",md:"md",lg:"lg"},l=function(e){var r=e.size,i=e.isDark,l=e.className,s=o(e,["size","isDark","className"]),c=n("ins-c-skeleton","ins-c-skeleton__".concat(r),function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-dark",i),l);return t.createElement("div",a({className:c},s)," ")};l.propTypes={className:r.string,size:r.oneOf(Object.values(i)),isDark:r.bool},l.defaultProps={size:i.md,isDark:!1},e.Skeleton=l,e.SkeletonSize=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(134))},724:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),o=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},i=function(e){var r=e.centered,i=e.className,l=o(e,["centered","className"]),s=n("ins-c-spinner",function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-center",r),i);return t.createElement("div",a({role:"status",className:s},l),t.createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};i.propTypes={centered:r.bool,className:r.string},e.Spinner=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(134))},725:function(e,t,r){var n=r(718);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(6)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(718,(function(){var t=r(718);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},726:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(340),t),n.__exportStar(r(339),t)},727:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2).__exportStar(r(190),t)},728:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(167),t),n.__exportStar(r(120),t),n.__exportStar(r(729),t),n.__exportStar(r(730),t)},729:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(1);var i;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i=t.TextListVariants||(t.TextListVariants={})),t.TextList=e=>{var{children:t=null,className:r="",component:l=i.ul}=e,s=n.__rest(e,["children","className","component"]);const c=l;return a.createElement(c,Object.assign({},s,{"data-pf-content":!0,className:o.css(r)}),t)},t.TextList.displayName="TextList"},730:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(1);var i;!function(e){e.li="li",e.dt="dt",e.dd="dd"}(i=t.TextListItemVariants||(t.TextListItemVariants={})),t.TextListItem=e=>{var{children:t=null,className:r="",component:l=i.li}=e,s=n.__rest(e,["children","className","component"]);const c=l;return a.createElement(c,Object.assign({},s,{"data-pf-content":!0,className:o.css(r)}),t)},t.TextListItem.displayName="TextListItem"},731:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(119),i=n.__importDefault(r(59)),l=r(1),s=r(732),c=r(733),u=r(734),d=r(736),p=r(737),f=r(738),m=n.__importDefault(r(199)),b=n.__importDefault(r(198)),v=r(65),y=r(208),O=r(57);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right"}(t.PopoverPosition||(t.PopoverPosition={})),t.Popover=e=>{var{children:t,position:r="top",enableFlip:h=!0,className:_="",isVisible:g=null,shouldClose:S=(()=>null),shouldOpen:E=(()=>null),"aria-label":j="",bodyContent:P,headerContent:x=null,footerContent:w=null,appendTo:T=(()=>document.body),hideOnOutsideClick:k=!0,onHide:N=(()=>null),onHidden:C=(()=>null),onShow:D=(()=>null),onShown:I=(()=>null),onMount:A=(()=>null),zIndex:L=9999,minWidth:M=b.default&&b.default.value,maxWidth:B=m.default&&m.default.value,closeBtnAriaLabel:F="Close",distance:G=25,flipBehavior:R=["top","right","bottom","left","top","right","bottom"],animationDuration:z=300,id:$,boundary:H,tippyProps:V,reference:W}=e,Y=n.__rest(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","minWidth","maxWidth","closeBtnAriaLabel","distance","flipBehavior","animationDuration","id","boundary","tippyProps","reference"]);const q=$||O.getUniqueId(),K=null!==g,[J,U]=a.useState(!1),[X,Q]=a.useState(0),[Z,ee]=a.useState(!1),te=a.useRef(null),re=a.useRef(null),ne=a.useRef(null);a.useEffect(()=>{A()},[]),a.useEffect(()=>{K&&(g?ae():oe())},[g,K]);const ae=e=>{D(),te.current&&clearTimeout(te.current),ne.current&&clearTimeout(ne.current),re.current=setTimeout(()=>{U(!0),Q(1),e&&ee(!0),I()},0)},oe=()=>{N(),re.current&&clearTimeout(re.current),ne.current=setTimeout(()=>{Q(0),ee(!1),te.current=setTimeout(()=>{U(!1),C()},z)},0)},ie={top:i.default.modifiers.top,bottom:i.default.modifiers.bottom,left:i.default.modifiers.left,right:i.default.modifiers.right},le=M!==b.default.value,se=B!==m.default.value,ce=a.createElement(v.FocusTrap,Object.assign({active:Z,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0},className:l.css(i.default.popover,_),role:"dialog","aria-modal":"true","aria-label":x?void 0:j,"aria-labelledby":x?`popover-${q}-header`:void 0,"aria-describedby":`popover-${q}-body`,onMouseDown:()=>{Z&&ee(!1)},style:{minWidth:le?M:null,maxWidth:se?B:null,opacity:X,transition:y.getOpacityTransition(z)}},Y),a.createElement(f.PopoverArrow,null),a.createElement(s.PopoverContent,null,a.createElement(p.PopoverCloseButton,{onClose:e=>{e.stopPropagation(),K?S(null,oe):oe()},"aria-label":F}),x&&a.createElement(u.PopoverHeader,{id:`popover-${q}-header`},x),a.createElement(c.PopoverBody,{id:`popover-${q}-body`},P),w&&a.createElement(d.PopoverFooter,{id:`popover-${q}-footer`},w)));return a.createElement(y.Popper,{trigger:t,reference:W,popper:ce,popperMatchesTriggerWidth:!1,appendTo:T,isVisible:J,positionModifiers:ie,distance:G,placement:r,onTriggerClick:()=>{K?J?S(null,oe):E(ae):J?oe():ae()},onTriggerEnter:e=>{e.keyCode===o.KEY_CODES.ENTER&&(J?K?S(null,oe):oe():K?E(ae):ae(!0))},onDocumentClick:(e,t,r)=>{if(k&&J){if(r&&r.contains(e.target))return;K?S(null,oe):oe()}},onDocumentKeyDown:e=>{e.keyCode===o.KEY_CODES.ESCAPE_KEY&&J&&(K?S(null,oe):oe())},enableFlip:h,zIndex:L,flipBehavior:R})},t.Popover.displayName="Popover"},732:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(59)),i=r(1);t.PopoverContent=e=>{var{className:t=null,children:r}=e,l=n.__rest(e,["className","children"]);return a.createElement("div",Object.assign({className:i.css(o.default.popoverContent,t)},l),r)},t.PopoverContent.displayName="PopoverContent"},733:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(59)),i=r(1);t.PopoverBody=e=>{var{children:t,id:r}=e,l=n.__rest(e,["children","id"]);return a.createElement("div",Object.assign({className:i.css(o.default.popoverBody),id:r},l),t)},t.PopoverBody.displayName="PopoverBody"},734:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(735);t.PopoverHeader=e=>{var{children:t,id:r}=e,i=n.__rest(e,["children","id"]);return a.createElement(o.Title,Object.assign({headingLevel:"h6",size:o.TitleSizes.md,id:r},i),t)},t.PopoverHeader.displayName="PopoverHeader"},735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2).__exportStar(r(94),t)},736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(59)),i=r(1);t.PopoverFooter=e=>{var{children:t,className:r=""}=e,l=n.__rest(e,["children","className"]);return a.createElement("footer",Object.assign({className:i.css(o.default.popoverFooter,r)},l),t)},t.PopoverFooter.displayName="PopoverFooter"},737:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(80),i=n.__importDefault(r(42)),l=r(447);t.PopoverCloseButton=e=>{var{onClose:t=(()=>{})}=e,r=n.__rest(e,["onClose"]);const[s,c]=a.useState(null);return a.useEffect(()=>(s&&s.addEventListener("click",t,!1),()=>{s&&s.removeEventListener("click",t,!1)}),[s]),a.createElement(l.FindRefWrapper,{onFoundRef:e=>c(e)},a.createElement(o.Button,Object.assign({variant:"plain","aria-label":!0},r,{style:{pointerEvents:"auto"}}),a.createElement(i.default,null)))},t.PopoverCloseButton.displayName="PopoverCloseButton"},738:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(59)),i=r(1);t.PopoverArrow=e=>{var{className:t=""}=e,r=n.__rest(e,["className"]);return a.createElement("div",Object.assign({className:i.css(o.default.popoverArrow,t)},r))},t.PopoverArrow.displayName="PopoverArrow"},739:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(69)),i=r(1),l=r(719);t.Grid=e=>{var{children:t=null,className:r="",hasGutter:s,span:c=null}=e,u=n.__rest(e,["children","className","hasGutter","span"]);const d=[o.default.grid,c&&o.default.modifiers[`all_${c}Col`]];return Object.entries(l.DeviceSizes).forEach(([e,t])=>{const r=e,n=u[r];n&&d.push(o.default.modifiers[`all_${n}ColOn${t}`]),delete u[r]}),a.createElement("div",Object.assign({className:i.css(...d,s&&o.default.modifiers.gutter,r)},u),t)},t.Grid.displayName="Grid"},740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(69)),i=r(1),l=r(719);t.GridItem=e=>{var{children:t=null,className:r="",span:s=null,rowSpan:c=null,offset:u=null}=e,d=n.__rest(e,["children","className","span","rowSpan","offset"]);const p=[o.default.gridItem,s&&o.default.modifiers[s+"Col"],c&&o.default.modifiers[c+"Row"],u&&o.default.modifiers[`offset_${u}Col`]];return Object.entries(l.DeviceSizes).forEach(([e,t])=>{const r=e,n=r+"RowSpan",a=r+"Offset",i=d[r],l=d[n],s=d[a];i&&p.push(o.default.modifiers[`${i}ColOn${t}`]),l&&p.push(o.default.modifiers[`${l}RowOn${t}`]),s&&p.push(o.default.modifiers[`offset_${s}ColOn${t}`]),delete d[r],delete d[n],delete d[a]}),a.createElement("div",Object.assign({className:i.css(...p,r)},d),t)},t.GridItem.displayName="GridItem"}}]);
//# sourceMappingURL=AdvisoryyPage.js.map