(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{693:function(e,t,r){"use strict";r.r(t);var n,o=r(33),a=r.n(o),i=r(42),l=r.n(i),c=r(120),s=r(170),u=r(718),p=r(719),d=r(697),f=r(4),m=r.n(f),b=r(0),v=r.n(b),y=r(34),O=r(30),h=r(721),g=r(723),_=r(188),E=r.n(_),j=r(217),S=r(327),P=r(111),x=r.n(P),w=r(755),T=r(756),k="spinner",C="skeleton",D=(n={},a()(n,C,(function(e){var t=e.size,r=e.isDark;return v.a.createElement(w.Skeleton,{size:t,isDark:r})})),a()(n,k,(function(e){var t=e.centered;return v.a.createElement(T.Spinner,{centered:t})})),n),N=function(e){var t=e.loading,r=e.variant,n=e.children,o=x()(e,["loading","variant","children"]);return!1!==t?D[r](o):n};N.propTypes={loading:m.a.bool,variant:m.a.string,children:m.a.any};var I=N,L=r(12),A=r(760),B=r(759),M=r(758),F=(r(757),function(e){var t=e.title,r=e.text,n=e.isLoading,o=e.content,a=e.color;return v.a.createElement(M.Split,{className:"infobox",hasGutter:!0},v.a.createElement(I,{variant:C,loading:n,size:"lg"},v.a.createElement(M.SplitItem,{style:{backgroundColor:a}},v.a.createElement(B.Bullseye,null,o)),v.a.createElement(M.SplitItem,{isFilled:!0},v.a.createElement(A.TextContent,null,v.a.createElement(A.Text,{component:A.TextVariants.h6},t),v.a.createElement(A.Text,{component:A.TextVariants.p},r)))))});F.propTypes={title:m.a.string,text:m.a.any,isLoading:m.a.bool,content:m.a.any,color:m.a.string};var R=F,z=r(763),H=r(397),V=r.n(H),W=r(109),G=r(67),Y=function(e){var t=e.severity;return v.a.createElement(z.Popover,{position:"bottom",enableFlip:!0,headerContent:v.a.createElement("div",null,t.label+" severity"),bodyContent:v.a.createElement(s.TextContent,null,v.a.createElement(c.Text,{component:c.TextVariants.p},t.text)),footerContent:v.a.createElement("a",{href:"https://access.redhat.com/security/updates/classification/",target:"_blank",rel:"noopener noreferrer"},v.a.createElement(W.Flex,null,v.a.createElement(G.FlexItem,{spacer:{default:"spacerSm"}},v.a.createElement(V.a,null)),v.a.createElement(G.FlexItem,{spacer:{default:"spacerSm"}},"Learn more about security ratings")))},v.a.createElement("a",null,"Learn more"))};Y.propTypes={severity:m.a.object};var $=Y,q=function(e){var t=e.attributes,r=e.isLoading,n=Object(L.o)(t.severity);return v.a.createElement(h.Grid,{hasGutter:!0,style:{minHeight:150}},v.a.createElement(g.GridItem,{md:8,sm:12},v.a.createElement(I,{loading:r,variant:k,centered:!0},v.a.createElement(u.Stack,{hasGutter:!0},v.a.createElement(p.StackItem,null),v.a.createElement(p.StackItem,{style:{whiteSpace:"pre-line"}},t.description&&t.description.replace(new RegExp("\\n(?=[^\\n])","g"),"")),v.a.createElement(p.StackItem,null,t.public_date&&v.a.createElement(v.a.Fragment,null,"Issued: ".concat(Object(j.processDate)(t.public_date)),v.a.createElement("br",null)),t.modified_date&&v.a.createElement(v.a.Fragment,null,"Modified: ".concat(Object(j.processDate)(t.modified_date)))),v.a.createElement(p.StackItem,null,v.a.createElement(S.a,{advisory:t.id}))))),v.a.createElement(g.GridItem,{md:4,sm:12},0!==n.value&&v.a.createElement(R,{isLoading:r,title:n.label,color:n.color,text:v.a.createElement($,{severity:n}),content:v.a.createElement(E.a,{size:"lg"})})))};q.propTypes={attributes:m.a.object,isLoading:m.a.bool};var K=q,J=r(699),U=r(164),Q=r(207),X=r(52),Z=r(10),ee=r(708),te=r.n(ee),re=r(712),ne=r.n(re),oe=r(713),ae=r.n(oe),ie=r(73),le=r(209),ce=r(208),se=r(396),ue=r.n(se),pe=r(18),de=r(118),fe=r(717),me=r(169),be=r(339),ve=r(714),ye=r(66),Oe=r(171),he=r(87),ge=r(342),_e=r(715);function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function je(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Se=function(e){var t=e.advisoryName,r=Object(y.useDispatch)(),n=v.a.useState(),o=l()(n,2),a=o[0],i=o[1],c=v.a.useState((function(){return function(){return null}})),s=l()(c,2),u=s[0],p=s[1],d=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.rows})),f=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.status})),m=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.error})),b=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.selectedRows})),O=v.a.useMemo((function(){return Object(Oe.d)(d,b)}),[d]),h=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.metadata})),g=Object(y.useSelector)((function(e){return e.AffectedSystemsStore.queryParams})),_=Object(y.useSelector)((function(e){var t=e.entities;return t&&t.columns})),E=Object(he.a)(h,C),j=g.filter,S=g.search;v.a.useEffect((function(){return function(){return r(Object(X.g)())}}),[]),v.a.useEffect((function(){r(Object(X.k)(je({id:t},g)))}),[g]);var P=function(){var e=ae()(ne.a.mark((function e(){var t,r,n,o,a;return ne.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({ReactRedux:y,React:v.a,reactRouterDom:de,pfReactTable:{Table:pe.Table,TableBody:pe.TableBody,TableHeader:pe.TableHeader,TableGridBreakpoint:pe.TableGridBreakpoint,cellWidth:pe.cellWidth,TableVariant:pe.TableVariant,sortable:pe.sortable,expandable:pe.expandable,SortByDirection:pe.SortByDirection},pfReact:fe.reactCore});case 2:t=e.sent,r=t.inventoryConnector,n=t.mergeWithEntities,Object(be.c)(je({},n(Object(ve.a)(_e.a)))),o=r(Object(be.a)()),a=o.InventoryTable,i((function(){return a}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();v.a.useEffect((function(){P()}),[]);var x=Object(he.b)(h.limit,h.offset),w=l()(x,2),T=w[0],k=w[1];function C(e){r(Object(X.b)(e))}var D=Object(he.d)(j,C),N={items:[Object(me.a)(C,S,"Search systems")]},I={filters:Object(L.c)(j,S),onDelete:D},A=function(e){p((function(){return function(){return v.a.createElement(ge.a,{data:e})}}))},B=v.a.useCallback((function(e){var n=[];switch(e){case"none":Object.keys(b).forEach((function(e){n.push({id:e,selected:e})})),r({type:"SELECT_ENTITY",payload:n});break;case"page":d.forEach((function(e){var t=e.id;n.push({id:t,selected:t})})),r({type:"SELECT_ENTITY",payload:n});break;case"all":Object(ye.f)({id:t,limit:999999}).then((function(e){e.data.forEach((function(e){var t=e.id;n.push({id:t,selected:t})})),r({type:"SELECT_ENTITY",payload:n})}))}})),M=function(){var e=_&&_.filter((function(e){return"updated"===e.key}))[0];return e=je(je({},e),{},{key:"last_upload"}),[].concat(te()(_e.a),[e])},F=Object(he.f)(M(),C,1),R=v.a.useMemo((function(){return Object(L.g)(M(),h.sort,1)}),[h.sort]),z=b&&Object(L.b)(b).length;return v.a.createElement(v.a.Fragment,null,f===Z.d?v.a.createElement(U.a,{message:m.detail}):a&&v.a.createElement(a,{items:O,page:T,total:h.total_items,perPage:k,onRefresh:E,isLoaded:f===Z.e,actions:Object(_e.b)(A),tableProps:{canSelectAll:!1,onSort:F,sortBy:R},filterConfig:N,activeFiltersConfig:I,bulkSelect:B&&{count:z,items:[{title:"Select none (0)",onClick:function(){B("none")}},{title:"Select page (".concat(O.length,")"),onClick:function(){B("page")}},{title:"Select all (".concat(h.total_items,")"),onClick:function(){B("all")}}],onSelect:function(e){B(e?"all":"none")},checked:z===h.total_items||0!==z&&null}},v.a.createElement(le.ToolbarGroup,null,v.a.createElement(ce.ToolbarItem,null,v.a.createElement(ie.Button,{className:"remediationButtonPatch",isDisabled:0===Object(L.b)(b).length,onClick:function(){return A(Object(L.q)(t,Object(L.b)(b)))}},v.a.createElement(ue.a,null)," Remediate"),v.a.createElement(u,null)))))};Se.propTypes={advisoryName:m.a.string};var Pe=Se;function xe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function we(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?xe(Object(r),!0).forEach((function(t){a()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):xe(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var Te=function(e){var t=e.match,r=Object(y.useDispatch)(),n=v.a.useState(t.params.advisoryId),o=l()(n,1)[0],a=Object(y.useSelector)((function(e){return e.AdvisoryDetailStore})),i=Object(y.useSelector)((function(e){return e.AdvisoryDetailStore.status})),f=Object(y.useSelector)((function(e){return e.AdvisoryDetailStore.error}));v.a.useEffect((function(){r(Object(X.o)({advisoryName:o}))}),[]),v.a.useEffect((function(){return function(){r(Object(X.g)()),r(Object(X.f)())}}),[]);var m=a.data.attributes;return v.a.createElement(v.a.Fragment,null,v.a.createElement(J.a,{title:o,breadcrumbs:[{title:"Patch",to:Q.b.advisories.to,isActive:!1},{title:"Advisories",to:Q.b.advisories.to,isActive:!1},{title:o,isActive:!0}]},i===Z.d?v.a.createElement(U.a,{message:f.detail}):v.a.createElement(K,{attributes:we(we({},m),{},{id:o}),isLoading:i===Z.c})),v.a.createElement(d.Main,null,v.a.createElement(u.Stack,{hasGutter:!0},v.a.createElement(p.StackItem,null,v.a.createElement(s.TextContent,null,v.a.createElement(c.Text,{component:c.TextVariants.h2},"Affected systems"))),v.a.createElement(p.StackItem,null,v.a.createElement(Pe,{advisoryName:o})))))};Te.propTypes={match:m.a.any};t.default=Object(O.o)(Te)},698:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},708:function(e,t,r){var n=r(709),o=r(710),a=r(445),i=r(711);e.exports=function(e){return n(e)||o(e)||a(e)||i()}},709:function(e,t,r){var n=r(446);e.exports=function(e){if(Array.isArray(e))return n(e)}},710:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},711:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},714:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(708),o=r.n(n),a=r(33),i=r.n(a),l=r(18);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var u={columns:[],rows:[],entities:[]};function p(e,t){if(t.loaded){var r=t.columns.filter((function(e){return"updated"===e.key}));return r=[s(s({},r[0]),{},{transforms:[l.sortable]})],s(s({},t),{},{columns:[].concat(o()(e||[]),o()(r||[]))})}return t}var d=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case"LOAD_ENTITIES_FULFILLED":return p(e,t);default:return t}}}},715:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return l}));var n=r(18),o=r(66),a=r(12),i=(r(716),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[n.sortable],props:{width:50}},{key:"packages_installed",title:"Packages",transforms:[n.sortable],props:{width:10}},{key:"applicable_advisories",title:"Applicable advisories",transforms:[n.sortable],props:{width:20},renderFunc:function(e){return Object(a.f)(e)}}]),l=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,r,n){Object(o.i)({id:n.id,limit:1e4}).then((function(t){return e(Object(a.q)(t.data.map((function(e){return e.id})),n.id))}))}}]}},716:function(e,t,r){var n=r(698);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(6)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(698,(function(){var t=r(698);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},720:function(e,t,r){(e.exports=r(5)(!1)).push([e.i,".infobox{background-color:var(--pf-global--BackgroundColor--150);border:var(--pf-global--BorderColor--300) var(--pf-global--BorderWidth--sm) solid;height:65px}.infobox>.pf-l-split__item:first-child{width:65px;color:black;background-color:var(--pf-global--warning-color--100)}.infobox>.pf-l-split__item:first-child>div.pf-l-bullseye svg{color:white}.infobox .pf-c-content h6{margin:0}.infobox>.pf-l-split__item:nth-child(2){display:flex;justify-content:flex-start;align-items:center}\n",""])},755:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},i={xs:"xs",sm:"sm",md:"md",lg:"lg"},l=function(e){var r=e.size,i=e.isDark,l=e.className,c=a(e,["size","isDark","className"]),s=n("ins-c-skeleton","ins-c-skeleton__".concat(r),function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-dark",i),l);return t.createElement("div",o({className:s},c)," ")};l.propTypes={className:r.string,size:r.oneOf(Object.values(i)),isDark:r.bool},l.defaultProps={size:i.md,isDark:!1},e.Skeleton=l,e.SkeletonSize=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(46))},756:function(e,t,r){!function(e,t,r,n){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),a=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o},i=function(e){var r=e.centered,i=e.className,l=a(e,["centered","className"]),c=n("ins-c-spinner",function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}({},"ins-m-center",r),i);return t.createElement("div",o({role:"status",className:c},l),t.createElement("span",{className:"pf-u-screen-reader"},"Loading..."))};i.propTypes={centered:r.bool,className:r.string},e.Spinner=i,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(46))},757:function(e,t,r){var n=r(720);"string"==typeof n&&(n=[[e.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},a=r(6)(n,o);n.locals&&(e.exports=n.locals),e.hot.accept(720,(function(){var t=r(720);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");a(t)})),e.hot.dispose((function(){a()}))},758:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(338),t),n.__exportStar(r(337),t)},759:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2).__exportStar(r(180),t)},760:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(170),t),n.__exportStar(r(120),t),n.__exportStar(r(761),t),n.__exportStar(r(762),t)},761:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(1);var i;!function(e){e.ul="ul",e.ol="ol",e.dl="dl"}(i=t.TextListVariants||(t.TextListVariants={})),t.TextList=e=>{var{children:t=null,className:r="",component:l=i.ul}=e,c=n.__rest(e,["children","className","component"]);const s=l;return o.createElement(s,Object.assign({},c,{"data-pf-content":!0,className:a.css(r)}),t)},t.TextList.displayName="TextList"},762:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(1);var i;!function(e){e.li="li",e.dt="dt",e.dd="dd"}(i=t.TextListItemVariants||(t.TextListItemVariants={})),t.TextListItem=e=>{var{children:t=null,className:r="",component:l=i.li}=e,c=n.__rest(e,["children","className","component"]);const s=l;return o.createElement(s,Object.assign({},c,{"data-pf-content":!0,className:a.css(r)}),t)},t.TextListItem.displayName="TextListItem"},763:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(119),i=n.__importDefault(r(60)),l=r(1),c=r(764),s=r(765),u=r(766),p=r(768),d=r(769),f=r(770),m=n.__importDefault(r(199)),b=n.__importDefault(r(198)),v=r(65),y=r(211),O=r(56);!function(e){e.auto="auto",e.top="top",e.bottom="bottom",e.left="left",e.right="right"}(t.PopoverPosition||(t.PopoverPosition={})),t.Popover=e=>{var{children:t,position:r="top",enableFlip:h=!0,className:g="",isVisible:_=null,shouldClose:E=(()=>null),shouldOpen:j=(()=>null),"aria-label":S="",bodyContent:P,headerContent:x=null,footerContent:w=null,appendTo:T=(()=>document.body),hideOnOutsideClick:k=!0,onHide:C=(()=>null),onHidden:D=(()=>null),onShow:N=(()=>null),onShown:I=(()=>null),onMount:L=(()=>null),zIndex:A=9999,minWidth:B=b.default&&b.default.value,maxWidth:M=m.default&&m.default.value,closeBtnAriaLabel:F="Close",distance:R=25,flipBehavior:z=["top","right","bottom","left","top","right","bottom"],animationDuration:H=300,id:V,boundary:W,tippyProps:G,reference:Y}=e,$=n.__rest(e,["children","position","enableFlip","className","isVisible","shouldClose","shouldOpen","aria-label","bodyContent","headerContent","footerContent","appendTo","hideOnOutsideClick","onHide","onHidden","onShow","onShown","onMount","zIndex","minWidth","maxWidth","closeBtnAriaLabel","distance","flipBehavior","animationDuration","id","boundary","tippyProps","reference"]);const q=V||O.getUniqueId(),K=null!==_,[J,U]=o.useState(!1),[Q,X]=o.useState(0),[Z,ee]=o.useState(!1),te=o.useRef(null),re=o.useRef(null),ne=o.useRef(null);o.useEffect(()=>{L()},[]),o.useEffect(()=>{K&&(_?oe():ae())},[_,K]);const oe=e=>{N(),te.current&&clearTimeout(te.current),ne.current&&clearTimeout(ne.current),re.current=setTimeout(()=>{U(!0),X(1),e&&ee(!0),I()},0)},ae=()=>{C(),re.current&&clearTimeout(re.current),ne.current=setTimeout(()=>{X(0),ee(!1),te.current=setTimeout(()=>{U(!1),D()},H)},0)},ie={top:i.default.modifiers.top,bottom:i.default.modifiers.bottom,left:i.default.modifiers.left,right:i.default.modifiers.right},le=B!==b.default.value,ce=M!==m.default.value,se=o.createElement(v.FocusTrap,Object.assign({active:Z,focusTrapOptions:{returnFocusOnDeactivate:!0,clickOutsideDeactivates:!0},className:l.css(i.default.popover,g),role:"dialog","aria-modal":"true","aria-label":x?void 0:S,"aria-labelledby":x?`popover-${q}-header`:void 0,"aria-describedby":`popover-${q}-body`,onMouseDown:()=>{Z&&ee(!1)},style:{minWidth:le?B:null,maxWidth:ce?M:null,opacity:Q,transition:y.getOpacityTransition(H)}},$),o.createElement(f.PopoverArrow,null),o.createElement(c.PopoverContent,null,o.createElement(d.PopoverCloseButton,{onClose:e=>{e.stopPropagation(),K?E(null,ae):ae()},"aria-label":F}),x&&o.createElement(u.PopoverHeader,{id:`popover-${q}-header`},x),o.createElement(s.PopoverBody,{id:`popover-${q}-body`},P),w&&o.createElement(p.PopoverFooter,{id:`popover-${q}-footer`},w)));return o.createElement(y.Popper,{trigger:t,reference:Y,popper:se,popperMatchesTriggerWidth:!1,appendTo:T,isVisible:J,positionModifiers:ie,distance:R,placement:r,onTriggerClick:()=>{K?J?E(null,ae):j(oe):J?ae():oe()},onTriggerEnter:e=>{e.keyCode===a.KEY_CODES.ENTER&&(J?K?E(null,ae):ae():K?j(oe):oe(!0))},onDocumentClick:(e,t,r)=>{if(k&&J){if(r&&r.contains(e.target))return;K?E(null,ae):ae()}},onDocumentKeyDown:e=>{e.keyCode===a.KEY_CODES.ESCAPE_KEY&&J&&(K?E(null,ae):ae())},enableFlip:h,zIndex:A,flipBehavior:z})},t.Popover.displayName="Popover"},764:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(60)),i=r(1);t.PopoverContent=e=>{var{className:t=null,children:r}=e,l=n.__rest(e,["className","children"]);return o.createElement("div",Object.assign({className:i.css(a.default.popoverContent,t)},l),r)},t.PopoverContent.displayName="PopoverContent"},765:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(60)),i=r(1);t.PopoverBody=e=>{var{children:t,id:r}=e,l=n.__rest(e,["children","id"]);return o.createElement("div",Object.assign({className:i.css(a.default.popoverBody),id:r},l),t)},t.PopoverBody.displayName="PopoverBody"},766:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(767);t.PopoverHeader=e=>{var{children:t,id:r}=e,i=n.__rest(e,["children","id"]);return o.createElement(a.Title,Object.assign({headingLevel:"h6",size:a.TitleSizes.md,id:r},i),t)},t.PopoverHeader.displayName="PopoverHeader"},767:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});r(2).__exportStar(r(99),t)},768:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(60)),i=r(1);t.PopoverFooter=e=>{var{children:t,className:r=""}=e,l=n.__rest(e,["children","className"]);return o.createElement("footer",Object.assign({className:i.css(a.default.popoverFooter,r)},l),t)},t.PopoverFooter.displayName="PopoverFooter"},769:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=r(81),i=n.__importDefault(r(41)),l=r(447);t.PopoverCloseButton=e=>{var{onClose:t=(()=>{})}=e,r=n.__rest(e,["onClose"]);const[c,s]=o.useState(null);return o.useEffect(()=>(c&&c.addEventListener("click",t,!1),()=>{c&&c.removeEventListener("click",t,!1)}),[c]),o.createElement(l.FindRefWrapper,{onFoundRef:e=>s(e)},o.createElement(a.Button,Object.assign({variant:"plain","aria-label":!0},r,{style:{pointerEvents:"auto"}}),o.createElement(i.default,null)))},t.PopoverCloseButton.displayName="PopoverCloseButton"},770:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),o=n.__importStar(r(0)),a=n.__importDefault(r(60)),i=r(1);t.PopoverArrow=e=>{var{className:t=""}=e,r=n.__rest(e,["className"]);return o.createElement("div",Object.assign({className:i.css(a.default.popoverArrow,t)},r))},t.PopoverArrow.displayName="PopoverArrow"}}]);
//# sourceMappingURL=AdvisoryyPage.js.map