(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{701:function(e,t,r){"use strict";r.r(t);var n,o=r(32),a=r.n(o),i=r(42),l=r.n(i),c=r(727),s=r(705),u=r(4),d=r.n(u),p=r(0),f=r.n(p),m=r(35),b=r(27),v=r(745),y=r(746),O=r(747),h=r(748),_=r(190),g=r.n(_),j=r(212),E=r(319),S=r(104),P=r.n(S),x=r(730),w=r(731),T="spinner",k="skeleton",N=(n={},a()(n,k,(function(e){var t=e.size,r=e.isDark;return f.a.createElement(x.Skeleton,{size:t,isDark:r})})),a()(n,T,(function(e){var t=e.centered;return f.a.createElement(w.Spinner,{centered:t})})),n),C=function(e){var t=e.loading,r=e.variant,n=e.children,o=P()(e,["loading","variant","children"]);return!1!==t?N[r](o):n};C.propTypes={loading:d.a.bool,variant:d.a.string,children:d.a.any};var D=C,I=r(14),L=r(734),M=r(733),A=(r(732),function(e){var t=e.title,r=e.text,n=e.isLoading,o=e.content,a=e.color;return f.a.createElement(M.Split,{className:"infobox",hasGutter:!0},f.a.createElement(D,{variant:k,loading:n,size:"lg"},f.a.createElement(M.SplitItem,{style:{backgroundColor:a}},f.a.createElement(L.Bullseye,null,o)),f.a.createElement(M.SplitItem,{isFilled:!0},f.a.createElement(c.TextContent,null,f.a.createElement(c.Text,{component:c.TextVariants.h6},t),f.a.createElement(c.Text,{component:c.TextVariants.p},r)))))});A.propTypes={title:d.a.string,text:d.a.any,isLoading:d.a.bool,content:d.a.any,color:d.a.string};var B=A,F=r(118),R=r(179),z=r(737),G=r(416),$=r.n(G),H=r(106),V=r(68),W=function(e){var t=e.severity;return f.a.createElement(z.Popover,{position:"bottom",enableFlip:!0,headerContent:f.a.createElement("div",null,t.label+" severity"),bodyContent:f.a.createElement(R.TextContent,null,f.a.createElement(F.Text,{component:F.TextVariants.p},t.text)),footerContent:f.a.createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},f.a.createElement(H.Flex,null,f.a.createElement(V.FlexItem,{spacer:{default:"spacerSm"}},f.a.createElement($.a,null)),f.a.createElement(V.FlexItem,{spacer:{default:"spacerSm"}},"Learn more about security ratings")))},f.a.createElement("a",null,"Learn more"))};W.propTypes={severity:d.a.object};var Y=W,q=function(e){var t=e.attributes,r=e.isLoading,n=Object(I.o)(t.severity);return f.a.createElement(v.Grid,{hasGutter:!0,style:{minHeight:150}},f.a.createElement(y.GridItem,{md:8,sm:12},f.a.createElement(D,{loading:r,variant:T,centered:!0},f.a.createElement(O.Stack,{hasGutter:!0},f.a.createElement(h.StackItem,null),f.a.createElement(h.StackItem,{style:{whiteSpace:"pre-line"}},t.description&&t.description.replace(new RegExp("\\n(?=[^\\n])","g"),"")),f.a.createElement(h.StackItem,null,t.public_date&&f.a.createElement(f.a.Fragment,null,"Issued: ".concat(Object(j.processDate)(t.public_date)),f.a.createElement("br",null)),t.modified_date&&f.a.createElement(f.a.Fragment,null,"Modified: ".concat(Object(j.processDate)(t.modified_date)))),f.a.createElement(h.StackItem,null,f.a.createElement(E.a,{advisory:t.id}))))),f.a.createElement(y.GridItem,{md:4,sm:12},0!==n.value&&f.a.createElement(B,{isLoading:r,title:n.label,color:n.color,text:f.a.createElement(Y,{severity:n}),content:f.a.createElement(g.a,{size:"lg"})})))};q.propTypes={attributes:d.a.object,isLoading:d.a.bool};var K=q,J=r(707),U=r(329),X=r(328),Q=r(51),Z=r(13),ee=r(716),te=r.n(ee),re=r(720),ne=r.n(re),oe=r(721),ae=r.n(oe),ie=r(72),le=r(211),ce=r(210),se=r(415),ue=r.n(se),de=r(16),pe=r(111),fe=r(725),me=r(164),be=r(331),ve=r(722),ye=r(66),Oe=r(165),he=r(85),_e=r(350),ge=r(723);function je(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Ee(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?je(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):je(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=function(e){var t=e.advisoryName,r=Object(m.useDispatch)(),n=f.a.useState(),o=l()(n,2),a=o[0],i=o[1],c=f.a.useState((function(){return function(){return null}})),s=l()(c,2),u=s[0],d=s[1],p=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.rows})),b=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.status})),v=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.error})),y=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.selectedRows})),O=f.a.useMemo((function(){return Object(Oe.d)(p,y)}),[p]),h=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.metadata})),_=Object(m.useSelector)((function(e){return e.AffectedSystemsStore.queryParams})),g=Object(m.useSelector)((function(e){var t=e.entities;return t&&t.columns})),j=Object(he.a)(h,N),E=_.filter,S=_.search;f.a.useEffect((function(){return function(){return r(Object(Q.g)())}}),[]),f.a.useEffect((function(){r(Object(Q.k)(Ee({id:t},_)))}),[_]);var P=function(){var e=ae()(ne.a.mark((function e(){var t,r,n,o,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:m,React:f.a,reactRouterDom:pe,pfReactTable:{Table:de.Table,TableBody:de.TableBody,TableHeader:de.TableHeader,TableGridBreakpoint:de.TableGridBreakpoint,cellWidth:de.cellWidth,TableVariant:de.TableVariant,sortable:de.sortable,expandable:de.expandable,SortByDirection:de.SortByDirection},pfReact:fe.reactCore});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithEntities,Object(be.c)(Ee({},n(Object(ve.a)(ge.a)))),o=r(Object(be.a)()),a=o.InventoryTable,i((function(){return a}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();f.a.useEffect((function(){P()}),[]);var x=Object(he.b)(h.limit,h.offset),w=l()(x,2),T=w[0],k=w[1];function N(e){r(Object(Q.b)(e))}var C=Object(he.d)(E,N),D={items:[Object(me.a)(N,S,"Search systems")]},L={filters:Object(I.c)(E,S),onDelete:C},M=function(e){d((function(){return function(){return f.a.createElement(_e.a,{data:e})}}))},A=f.a.useCallback((function(e){var n=[];switch(e){case"none":Object.keys(y).forEach((function(e){n.push({id:e,selected:!1})})),r({type:"SELECT_ENTITY",payload:n});break;case"page":p.forEach((function(e){var t=e.id;n.push({id:t,selected:!0})})),r({type:"SELECT_ENTITY",payload:n});break;case"all":Object(ye.f)({id:t,limit:999999}).then((function(e){e.data.forEach((function(e){var t=e.id;n.push({id:t,selected:!0})})),r({type:"SELECT_ENTITY",payload:n})}))}})),B=function(){var e=g&&g.filter((function(e){return"updated"===e.key}))[0];return e=Ee(Ee({},e),{},{key:"last_upload"}),[].concat(te()(ge.a),[e])},F=Object(he.f)(B(),N,1),R=f.a.useMemo((function(){return Object(I.g)(B(),h.sort,1)}),[h.sort]),z=y&&Object(I.b)(y).length;return f.a.createElement(f.a.Fragment,null,b===Z.d?f.a.createElement(U.a,{message:v.detail}):a&&f.a.createElement(a,{items:O,page:T,total:h.total_items,perPage:k,onRefresh:j,isLoaded:b===Z.e,actions:Object(ge.b)(M),tableProps:{canSelectAll:!1,onSort:F,sortBy:R},filterConfig:D,activeFiltersConfig:L,bulkSelect:A&&{count:z,items:[{title:"Select none (0)",onClick:function(){A("none")}},{title:"Select page (".concat(O.length,")"),onClick:function(){A("page")}},{title:"Select all (".concat(h.total_items,")"),onClick:function(){A("all")}}],onSelect:function(e){A(e?"all":"none")},checked:z===h.total_items||0!==z&&null}},f.a.createElement(le.ToolbarGroup,null,f.a.createElement(ce.ToolbarItem,null,f.a.createElement(ie.Button,{className:"remediationButtonPatch",isDisabled:0===Object(I.b)(y).length,onClick:function(){return M(Object(I.q)(t,Object(I.b)(y)))}},f.a.createElement(ue.a,null)," Remediate"),f.a.createElement(u,null)))))};Se.propTypes={advisoryName:d.a.string};var Pe=Se;function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te=function(e){var t=e.match,r=Object(m.useDispatch)(),n=f.a.useState(t.params.advisoryId),o=l()(n,1)[0],a=Object(m.useSelector)((function(e){return e.AdvisoryDetailStore})),i=Object(m.useSelector)((function(e){return e.AdvisoryDetailStore.status})),u=Object(m.useSelector)((function(e){return e.AdvisoryDetailStore.error}));f.a.useEffect((function(){r(Object(Q.o)({advisoryName:o}))}),[]),f.a.useEffect((function(){return function(){r(Object(Q.g)()),r(Object(Q.f)())}}),[]);var d=a.data.attributes;return f.a.createElement(f.a.Fragment,null,f.a.createElement(J.a,{title:o,breadcrumbs:[{title:"Patch",to:X.b.advisories.to,isActive:!1},{title:"Advisories",to:X.b.advisories.to,isActive:!1},{title:o,isActive:!0}]},i===Z.d?f.a.createElement(U.a,{message:u.detail}):f.a.createElement(K,{attributes:we(we({},d),{},{id:o}),isLoading:i===Z.c})),f.a.createElement(s.Main,null,f.a.createElement(c.TextContent,null,f.a.createElement(c.Text,{component:c.TextVariants.h2},"Affected systems")),f.a.createElement(Pe,{advisoryName:o})))};Te.propTypes={match:d.a.any};t.default=Object(b.o)(Te)},706:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},716:function(e,t,r){var n=r(717),o=r(718),a=r(461),i=r(719);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},717:function(e,t,r){var n=r(462);e.exports=function(e){if(Array.isArray(e))return n(e)}},718:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},719:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},722:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var n=r(716),o=r.n(n),a=r(32),i=r.n(a),l=r(16);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={columns:[],rows:[],entities:[]};function d(e,t){if(t.loaded){var r=t.columns.filter((function(e){return"updated"===e.key}));return r=[s(s({},r[0]),{},{transforms:[l.sortable]})],s(s({},t),{},{columns:[].concat(o()(e||[]),o()(r||[]))})}return t}var p=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOAD_ENTITIES_FULFILLED":return d(e,t);default:return t}}}},723:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var n=r(16),o=r(66),a=r(14),i=(r(724),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[Object(n.classNames)("col-width-40"),n.sortable]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[Object(n.classNames)("col-width-30"),n.sortable],renderFunc:function(e){return Object(a.f)(e)}}]),l=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,r,n){Object(o.i)({id:n.id,limit:1e4}).then((function(t){return e(Object(a.q)(t.data.map((function(e){return e.id})),n.id))}))}}]}},724:function(e,t,r){var n=r(706);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(9)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(706,(function(){var t=r(706);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},726:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".infobox{background-color:var(--pf-global--BackgroundColor--150);border:var(--pf-global--BorderColor--300) var(--pf-global--BorderWidth--sm) solid;height:65px}.infobox>.pf-l-split__item:first-child{width:65px;color:black;background-color:var(--pf-global--warning-color--100)}.infobox>.pf-l-split__item:first-child>div.pf-l-bullseye svg{color:white}.infobox .pf-c-content h6{margin:0}.infobox>.pf-l-split__item:nth-child(2){display:flex;justify-content:flex-start;align-items:center}\n",""])},727:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(179),t),n.__exportStar(r(118),t),n.__exportStar(r(735),t),n.__exportStar(r(736),t)},728:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(t.BaseSizes||(t.BaseSizes={})),function(e){e.sm="Sm",e.md="Md",e.lg="Lg",e.xl="Xl",e.xl2="_2xl"}(t.DeviceSizes||(t.DeviceSizes={}))},730:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},i={xs:"xs",sm:"sm",md:"md",lg:"lg"},l=function(e){var r=e.size,i=e.isDark,l=e.className,c=a(e,["size","isDark","className"]),s=n("ins-c-skeleton","ins-c-skeleton__".concat(r),function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-dark",i),l);return t.createElement("div",o({className:s},c)," ")};l.propTypes={className:r.string,size:r.oneOf(Object.values(i)),isDark:r.bool},l.defaultProps={size:i.md,isDark:!1},e.Skeleton=l,e.SkeletonSize=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(46))},731:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},i=function(e){var r=e.centered,i=e.className,l=a(e,["centered","className"]),c=n("ins-c-spinner",function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-center",r),i);return t.createElement("div",o({role:"status",className:c},l),t.createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};i.propTypes={centered:r.bool,className:r.string},e.Spinner=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(46))},732:function(e,t,r){var n=r(726);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(9)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(726,(function(){var t=r(726);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},733:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(349),t),n.__exportStar(r(348),t)},734:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2).__exportStar(r(192),t)},735:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(1);var i;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i=t.TextListVariants||(t.TextListVariants={})),t.TextList=e=>{var{children:t=null,className:r="",component:l=i.ul}=e,c=n.__rest(e,["children","className","component"]);const s=l;return o.createElement(s,Object.assign({},c,{"data-pf-content":!0,className:a.css(r)}),t)},t.TextList.displayName="TextList"},736:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(1);var i;!function(e){e.li="li",e.dt="dt",e.dd="dd"}(i=t.TextListItemVariants||(t.TextListItemVariants={})),t.TextListItem=e=>{var{children:t=null,className:r="",component:l=i.li}=e,c=n.__rest(e,["children","className","component"]);const s=l;return o.createElement(s,Object.assign({},c,{"data-pf-content":!0,className:a.css(r)}),t)},t.TextListItem.displayName="TextListItem"},737:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(112),i=n.__importDefault(r(59)),l=r(1),c=r(738),s=r(739),u=r(740),d=r(742),p=r(743),f=r(744),m=n.__importDefault(r(203)),b=n.__importDefault(r(202)),v=r(64),y=r(209),O=r(65);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right"}(t.PopoverPosition||(t.PopoverPosition={})),t.Popover=e=>{var{children:t,position:r="top",enableFlip:h=!0,className:_="",isVisible:g=null,shouldClose:j=(()=>null),shouldOpen:E=(()=>null),"aria-label":S="",bodyContent:P,headerContent:x=null,footerContent:w=null,appendTo:T=(()=>document.body),hideOnOutsideClick:k=!0,onHide:N=(()=>null),onHidden:C=(()=>null),onShow:D=(()=>null),onShown:I=(()=>null),onMount:L=(()=>null),zIndex:M=9999,minWidth:A=b.default&&b.default.value,maxWidth:B=m.default&&m.default.value,closeBtnAriaLabel:F="Close",distance:R=25,flipBehavior:z=["top","right","bottom","left","top","right","bottom"],animationDuration:G=300,id:$,boundary:H,tippyProps:V}=e,W=n.__rest(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","minWidth","maxWidth","closeBtnAriaLabel","distance","flipBehavior","animationDuration","id","boundary","tippyProps"]);const Y=$||O.getUniqueId(),q=null!==g,[K,J]=o.useState(!1),[U,X]=o.useState(0),[Q,Z]=o.useState(!1),ee=o.useRef(null),te=o.useRef(null),re=o.useRef(null);o.useEffect(()=>{L()},[]),o.useEffect(()=>{q&&(g?ne():oe())},[g,q]);const ne=e=>{D(),ee.current&&clearTimeout(ee.current),re.current&&clearTimeout(re.current),te.current=setTimeout(()=>{J(!0),X(1),e&&Z(!0),I()},0)},oe=()=>{N(),te.current&&clearTimeout(te.current),re.current=setTimeout(()=>{X(0),Z(!1),ee.current=setTimeout(()=>{J(!1),C()},G)},0)},ae={top:i.default.modifiers.top,bottom:i.default.modifiers.bottom,left:i.default.modifiers.left,right:i.default.modifiers.right},ie=A!==b.default.value,le=B!==m.default.value,ce=o.createElement(v.FocusTrap,Object.assign({active:Q,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0},className:l.css(i.default.popover,_),role:"dialog","aria-modal":"true","aria-label":x?void 0:S,"aria-labelledby":x?`popover-${Y}-header`:void 0,"aria-describedby":`popover-${Y}-body`,onMouseDown:()=>{Q&&Z(!1)},style:{minWidth:ie?A:null,maxWidth:le?B:null,opacity:U,transition:y.getOpacityTransition(G)}},W),o.createElement(f.PopoverArrow,null),o.createElement(c.PopoverContent,null,o.createElement(p.PopoverCloseButton,{onClose:e=>{e.stopPropagation(),q?j(null,oe):oe()},"aria-label":F}),x&&o.createElement(u.PopoverHeader,{id:`popover-${Y}-header`},x),o.createElement(s.PopoverBody,{id:`popover-${Y}-body`},P),w&&o.createElement(d.PopoverFooter,{id:`popover-${Y}-footer`},w)));return o.createElement(y.Popper,{trigger:t,popper:ce,popperMatchesTriggerWidth:!1,appendTo:T,isVisible:K,positionModifiers:ae,distance:R,placement:r,onTriggerClick:()=>{q?K?j(null,oe):E(ne):K?oe():ne()},onTriggerEnter:e=>{e.keyCode===a.KEY_CODES.ENTER&&(K?q?j(null,oe):oe():q?E(ne):ne(!0))},onPopperClick:e=>{e.stopPropagation()},onDocumentClick:()=>{k&&K&&(q?j(null,oe):oe())},onDocumentKeyDown:e=>{e.keyCode===a.KEY_CODES.ESCAPE_KEY&&K&&(q?j(null,oe):oe())},enableFlip:h,zIndex:M,flipBehavior:z})},t.Popover.displayName="Popover"},738:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(59)),i=r(1);t.PopoverContent=e=>{var{className:t=null,children:r}=e,l=n.__rest(e,["className","children"]);return o.createElement("div",Object.assign({className:i.css(a.default.popoverContent,t)},l),r)},t.PopoverContent.displayName="PopoverContent"},739:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(59)),i=r(1);t.PopoverBody=e=>{var{children:t,id:r}=e,l=n.__rest(e,["children","id"]);return o.createElement("div",Object.assign({className:i.css(a.default.popoverBody),id:r},l),t)},t.PopoverBody.displayName="PopoverBody"},740:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(741);t.PopoverHeader=e=>{var{children:t,id:r}=e,i=n.__rest(e,["children","id"]);return o.createElement(a.Title,Object.assign({headingLevel:"h6",size:a.TitleSizes.md,id:r},i),t)},t.PopoverHeader.displayName="PopoverHeader"},741:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2).__exportStar(r(100),t)},742:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(59)),i=r(1);t.PopoverFooter=e=>{var{children:t,className:r=""}=e,l=n.__rest(e,["children","className"]);return o.createElement("footer",Object.assign({className:i.css(a.default.popoverFooter,r)},l),t)},t.PopoverFooter.displayName="PopoverFooter"},743:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(79),i=n.__importDefault(r(40)),l=r(463);t.PopoverCloseButton=e=>{var{onClose:t=(()=>{})}=e,r=n.__rest(e,["onClose"]);const[c,s]=o.useState(null);return o.useEffect(()=>(c&&c.addEventListener("click",t,!1),()=>{c&&c.removeEventListener("click",t,!1)}),[c]),o.createElement(l.FindRefWrapper,{onFoundRef:e=>s(e)},o.createElement(a.Button,Object.assign({variant:"plain","aria-label":!0},r,{style:{pointerEvents:"auto"}}),o.createElement(i.default,null)))},t.PopoverCloseButton.displayName="PopoverCloseButton"},744:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(59)),i=r(1);t.PopoverArrow=e=>{var{className:t=""}=e,r=n.__rest(e,["className"]);return o.createElement("div",Object.assign({className:i.css(a.default.popoverArrow,t)},r))},t.PopoverArrow.displayName="PopoverArrow"},745:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(67)),i=r(1),l=r(728);t.Grid=e=>{var{children:t=null,className:r="",hasGutter:c,span:s=null}=e,u=n.__rest(e,["children","className","hasGutter","span"]);const d=[a.default.grid,s&&a.default.modifiers[`all_${s}Col`]];return Object.entries(l.DeviceSizes).forEach(([e,t])=>{const r=e,n=u[r];n&&d.push(a.default.modifiers[`all_${n}ColOn${t}`]),delete u[r]}),o.createElement("div",Object.assign({className:i.css(...d,c&&a.default.modifiers.gutter,r)},u),t)},t.Grid.displayName="Grid"},746:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(67)),i=r(1),l=r(728);t.GridItem=e=>{var{children:t=null,className:r="",span:c=null,rowSpan:s=null,offset:u=null}=e,d=n.__rest(e,["children","className","span","rowSpan","offset"]);const p=[a.default.gridItem,c&&a.default.modifiers[c+"Col"],s&&a.default.modifiers[s+"Row"],u&&a.default.modifiers[`offset_${u}Col`]];return Object.entries(l.DeviceSizes).forEach(([e,t])=>{const r=e,n=r+"RowSpan",o=r+"Offset",i=d[r],l=d[n],c=d[o];i&&p.push(a.default.modifiers[`${i}ColOn${t}`]),l&&p.push(a.default.modifiers[`${l}RowOn${t}`]),c&&p.push(a.default.modifiers[`offset_${c}ColOn${t}`]),delete d[r],delete d[n],delete d[o]}),o.createElement("div",Object.assign({className:i.css(...p,r)},d),t)},t.GridItem.displayName="GridItem"},747:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(132)),i=r(1);t.Stack=e=>{var{hasGutter:t=!1,className:r="",children:l=null,component:c="div"}=e,s=n.__rest(e,["hasGutter","className","children","component"]);const u=c;return o.createElement(u,Object.assign({},s,{className:i.css(a.default.stack,t&&a.default.modifiers.gutter,r)}),l)},t.Stack.displayName="Stack"},748:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(132)),i=r(1);t.StackItem=e=>{var{isFilled:t=!1,className:r="",children:l=null}=e,c=n.__rest(e,["isFilled","className","children"]);return o.createElement("div",Object.assign({},c,{className:i.css(a.default.stackItem,t&&a.default.modifiers.fill,r)}),l)},t.StackItem.displayName="StackItem"}}]);
//# sourceMappingURL=AdvisoryyPage.js.map