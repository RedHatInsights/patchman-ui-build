(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{786:function(e,t,n){(e.exports=n(6)(!1)).push([e.i,".col-width-30{width:30%}.col-width-40{width:40%}\n",""])},790:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(33),o=n.n(r);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var a={columns:[],rows:[],entities:[]};function u(e,t){return t.loaded?function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{columns:e}):t}var c=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"LOAD_ENTITIES_FULFILLED":return u(e,t);default:return t}}}},791:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var r=n(218),o=n(793),i=n(2),a=n.n(i),u=n(128),c=n(19),s=(n(792),[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],transforms:[Object(r.b)("col-width-40")]},{key:"applicable_advisories",title:"Applicable advisories",transforms:[Object(r.b)("col-width-30")],renderFunc:function(e){return Object(c.f)(e)}},{key:"updated",title:"Last seen",transforms:[Object(r.b)("col-width-30")],renderFunc:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.DateFormat,{date:e}))}}]),l=function(e){return[{title:"Apply all applicable advisories",onClick:function(t,n,r){Object(u.d)({id:r.id,limit:1e4}).then((function(t){return e(Object(c.n)(t.data.map((function(e){return e.id})),r.id))}))}}]}},792:function(e,t,n){var r=n(786);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0},i=n(7)(r,o);r.locals&&(e.exports=r.locals),e.hot.accept(786,(function(){var t=n(786);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,r=0;for(n in e){if(!t||e[n]!==t[n])return!1;r++}for(n in t)r--;return 0===r}(r.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");i(t)})),e.hot.dispose((function(){i()}))},793:function(e,t,n){var r;window,r=function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./src/Components/DateFormat/index.js")}({"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**************************************************************************************************************************!*\
  !*** /home/travis/build/RedHatInsights/frontend-components/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},"./src/Components/DateFormat/DateFormat.js":
/*!*************************************************!*\
  !*** ./src/Components/DateFormat/DateFormat.js ***!
  \*************************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var o=r(n(/*! react */"react")),i=r(n(/*! prop-types */"prop-types")),a=n(/*! ./helper */"./src/Components/DateFormat/helper.js");function u(e){var t=e.date,n=e.type,r=void 0===n?"relative":n,i=t instanceof Date?t:new Date(t),u="Invalid Date"===i.toString()?"invalid":r;return o.default.createElement(o.default.Fragment,null,(0,a.dateByType)(u)(i))}u.propTypes={date:i.default.oneOfType([i.default.instanceOf(Date),i.default.string,i.default.number]),type:i.default.oneOf(["exact","onlyDate","relative"])}},"./src/Components/DateFormat/helper.js":
/*!*********************************************!*\
  !*** ./src/Components/DateFormat/helper.js ***!
  \*********************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),t.dateByType=t.dateStringByType=t.addTooltip=void 0;var o=r(n(/*! react */"react")),i=n(/*! @patternfly/react-core/dist/js/components/Tooltip/Tooltip.js */"@patternfly/react-core/dist/js/components/Tooltip/Tooltip.js"),a=function(e,t){return"".concat(e," ").concat(e>1?"".concat(t,"s"):t," ago")},u=[{rightBound:1/0,description:function(e){return a(Math.round(e/31536e6),"year")}},{rightBound:31536e6,description:function(e){return a(Math.round(e/2592e6),"month")}},{rightBound:2592e6,description:function(e){return a(Math.round(e/864e5),"day")}},{rightBound:864e5,description:function(e){return a(Math.round(e/36e5),"hour")}},{rightBound:36e5,description:function(e){return a(Math.round(e/6e4),"minute")}},{rightBound:6e4,description:function(){return"Just now"}}],c=function(e){return e.toUTCString().split(",")[1].slice(0,-4).trim()},s=function(e,t){return o.default.createElement(i.Tooltip,{content:o.default.createElement("div",null,e)},t)};t.addTooltip=s;var l=function(e){return{exact:function(e){return c(e)+" UTC"},onlyDate:function(e){return c(e).slice(0,-9)},relative:function(e){return u.reduce((function(t,n){return n.rightBound>Date.now()-e?n.description(Date.now()-e):t}),c(e))},invalid:function(){return"Invalid Date"}}[e]};t.dateStringByType=l,t.dateByType=function(e){return{exact:function(t){return l(e)(t)},onlyDate:function(t){return l(e)(t)},relative:function(t){return s(l("exact")(t),o.default.createElement("span",null,l(e)(t)))},invalid:function(){return"Invalid Date"}}[e]}},"./src/Components/DateFormat/index.js":
/*!********************************************!*\
  !*** ./src/Components/DateFormat/index.js ***!
  \********************************************/
/*! no static exports found */function(e,t,n){"use strict";var r=n(/*! @babel/runtime/helpers/interopRequireDefault */"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DateFormat",{enumerable:!0,get:function(){return o.default}});var o=r(n(/*! ./DateFormat */"./src/Components/DateFormat/DateFormat.js"))},"@patternfly/react-core/dist/js/components/Tooltip/Tooltip.js":
/*!*******************************************************************************!*\
  !*** external "@patternfly/react-core/dist/js/components/Tooltip/Tooltip.js" ***!
  \*******************************************************************************/
/*! no static exports found */function(t,n){t.exports=e},"prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */function(e,n){e.exports=t},react:
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */function(e,t){e.exports=n}})},e.exports=r(n(144),n(1),n(2))},821:function(e,t,n){"use strict";n.r(t);var r=n(196),o=n.n(r),i=n(33),a=n.n(i),u=n(314),c=n.n(u),s=n(53),l=n.n(s),f=n(89),p=n(313),d=n(88),b=n(787),m=n(2),y=n.n(m),O=n(42),v=n(130),j=n(788),h=n(315),g=n(117),w=n(790),D=n(316),P=n(116),S=n(318),_=n(791);function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(){var e=Object(O.useDispatch)(),t=y.a.useState(),n=l()(t,2),r=n[0],i=n[1],a=y.a.useState((function(){return function(){return null}})),u=l()(a,2),s=u[0],m=u[1],E=Object(O.useSelector)((function(e){return e.SystemsListStore.rows})),x=y.a.useMemo((function(){return Object(D.c)(E)}),[E]),F=Object(O.useSelector)((function(e){return e.SystemsListStore.metadata})),M=Object(O.useSelector)((function(e){return e.SystemsListStore.queryParams})),C=Object(P.a)(F,(function(t){e(Object(g.d)(t))}));y.a.useEffect((function(){e(Object(g.n)(M))}),[M]);var B=function(){var e=c()(o.a.mark((function e(){var t,n,r,a,u;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,insights.loadInventory({react:y.a,reactRouterDom:v,reactCore:f,reactIcons:p,pfReactTable:d});case 2:t=e.sent,n=t.inventoryConnector,r=t.mergeWithEntities,Object(h.c)(T({},r(Object(w.a)(_.a)))),a=n(Object(h.a)()),u=a.InventoryTable,i((function(){return u}));case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();y.a.useEffect((function(){B()}),[]);var k=Object(P.b)(F.limit,F.offset),I=l()(k,2),L=I[0],R=I[1];return y.a.createElement(y.a.Fragment,null,y.a.createElement(j.a,{title:"System Patching",showTabs:!0}),y.a.createElement(s,null),y.a.createElement(b.Main,null,r&&y.a.createElement(r,{items:x,page:L,total:F.total_items,perPage:R,onRefresh:C,hasCheckbox:!1,actions:Object(_.b)((function(e){m((function(){return function(){return y.a.createElement(S.a,{data:e})}}))}))})))}}}]);
//# sourceMappingURL=Systems.js.map