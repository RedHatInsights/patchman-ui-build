(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{660:function(e,t,r){"use strict";r.r(t);var n=r(665),a=r(0),o=r.n(a),c=r(667),i=r(372);t.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{title:"Patch"}),o.a.createElement(n.Main,null,o.a.createElement("div",null,o.a.createElement(i.a,null))))}},664:function(e,t,r){(e.exports=r(7)(!1)).push([e.i,".pf-c-tabs.patchman-tabs{background-color:var(--pf-global--BackgroundColor--100);padding-left:var(--pf-c-page__main-section--md--PaddingLeft);display:block}\n",""])},665:function(e,t,r){!function(e,t,r,n,a){"use strict";var o="default"in t?t.default:t;function c(e,t){return e(t={exports:{}},t.exports),t.exports}r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var i=c((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),l=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},s=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},u=function(e){return function(e){if(Array.isArray(e))return s(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return s(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()},p=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},f=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var d=c((function(e){function t(r,n){return e.exports=t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(r,n)}e.exports=t})),b=c((function(e){function t(r){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=t=function(e){return typeof e}:e.exports=t=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(r)}e.exports=t})),y=function(e,t){return!t||"object"!==b(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t},h=c((function(e){function t(r){return e.exports=t=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},t(r)}e.exports=t})),g=o.createContext("light");function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,e);var t=function(e){return function(){var t,r=h(e);if(_()){var n=h(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return y(this,t)}}(r);function r(){return f(this,r),t.apply(this,arguments)}return function(e,t,r){t&&m(e.prototype,t),r&&m(e,r)}(r,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,r=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var n=insights.chrome.$internal.store.getState();if(t&&n)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e.dynamic,p({},"data-".concat(function(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}(t.substr(1))),r[t.substr(1)])):e.staticPart=[].concat(u(e.staticPart),u(""!==t?[t]:[])),e}),{staticPart:[n.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,r=e.children,a=(e.params,e.path,l(e,["className","children","params","path"])),c=this.calculateLocation(),s=c.dynamic,u=c.staticPart;return o.createElement(g.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",c=n(p({},"pf-m-".concat(e),"dark"===e));return{dark:o.createElement("section",i({},a,s,{"page-type":u.join("-"),className:"".concat(n(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(c)}),o.Children.map(r,(function(e){return o.cloneElement(e,{className:"pf-m-dark"})}))),light:o.createElement("section",i({},a,s,{"page-type":u.join("-"),className:"".concat(n(t,"pf-l-page__main-section pf-c-page__main-section"))}),r)}[e]}))}}]),r}(t.Component);O.propTypes={className:r.string,children:r.any.isRequired,params:r.any,path:r.string};var j=a.connect((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(O);e.Main=j,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(45),r(34))},667:function(e,t,r){"use strict";var n=r(675),a=r(4),o=r.n(a),c=r(0),i=r.n(c),l=r(668),s=r(108),u=function(e){var t=e.items;return i.a.createElement(l.Breadcrumb,null,t.filter(Boolean).map((function(e){return i.a.createElement(l.BreadcrumbItem,{key:e.title,isActive:e.isActive},e.to&&i.a.createElement(s.Link,{to:e.to},e.title)||e.title)})))};u.propTypes={items:o.a.arrayOf(o.a.shape({isActive:o.a.bool,to:o.a.string,title:o.a.string}))};var p=u,f=r(673),m=r(27),d=r(311),b=(r(672),function(e){var t=e.history;return i.a.createElement(f.Tabs,{onSelect:function(e,r){t.push(r)},activeKey:t.location.pathname,className:"patchman-tabs"},i.a.createElement(f.Tab,{eventKey:d.b.advisories.to,title:d.b.advisories.title}),i.a.createElement(f.Tab,{eventKey:d.b.systems.to,title:d.b.systems.title}))});b.propTypes={history:o.a.object};var y=Object(m.o)(b),h=function(e){var t=e.title,r=e.showTabs,a=e.breadcrumbs,o=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.PageHeader,null,a&&i.a.createElement(p,{items:a}),i.a.createElement(n.PageHeaderTitle,{title:t}),o),r&&i.a.createElement(y,null))};h.propTypes={title:o.a.string,showTabs:o.a.bool,breadcrumbs:o.a.array,children:o.a.any};t.a=h},668:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(669),t),n.__exportStar(r(670),t),n.__exportStar(r(671),t)},669:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(57)),c=r(1),i=r(63);t.Breadcrumb=e=>{var{children:r=null,className:l="","aria-label":s="Breadcrumb",ouiaId:u,ouiaSafe:p=!0}=e,f=n.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);return a.createElement("nav",Object.assign({},f,{"aria-label":s,className:c.css(o.default.breadcrumb,l)},i.getOUIAProps(t.Breadcrumb.displayName,u,p)),a.createElement("ol",{className:o.default.breadcrumbList},a.Children.map(r,(e,t)=>{const r=t>0;return a.isValidElement(e)?a.cloneElement(e,{showDivider:r}):e})))},t.Breadcrumb.displayName="Breadcrumb"},670:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(30)),c=n.__importDefault(r(57)),i=r(1);t.BreadcrumbItem=e=>{var{children:t=null,className:r="",to:l=null,isActive:s=!1,showDivider:u,target:p=null,component:f="a"}=e,m=n.__rest(e,["children","className","to","isActive","showDivider","target","component"]);const d=f;return a.createElement("li",Object.assign({},m,{className:i.css(c.default.breadcrumbItem,r)}),u&&a.createElement("span",{className:c.default.breadcrumbItemDivider},a.createElement(o.default,null)),l&&a.createElement(d,{href:l,target:p,className:i.css(c.default.breadcrumbLink,s&&c.default.modifiers.current),"aria-current":s?"page":void 0},t),!l&&a.createElement(a.Fragment,null,t))},t.BreadcrumbItem.displayName="BreadcrumbItem"},671:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=n.__importDefault(r(30)),c=n.__importDefault(r(57)),i=r(1);t.BreadcrumbHeading=e=>{var{children:t=null,className:r="",to:l=null,target:s=null,component:u="a",showDivider:p}=e,f=n.__rest(e,["children","className","to","target","component","showDivider"]);const m=u;return a.createElement("li",Object.assign({},f,{className:i.css(c.default.breadcrumbItem,r)}),a.createElement("h1",{className:c.default.breadcrumbHeading},p&&a.createElement("span",{className:c.default.breadcrumbItemDivider},a.createElement(o.default,null)),l&&a.createElement(m,{href:l,target:s,className:i.css(c.default.breadcrumbLink,c.default.modifiers.current),"aria-current":"page"},t),!l&&a.createElement(a.Fragment,null,t)))},t.BreadcrumbHeading.displayName="BreadcrumbHeading"},672:function(e,t,r){var n=r(664);"string"==typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0},o=r(9)(n,a);n.locals&&(e.exports=n.locals),e.hot.accept(664,(function(){var t=r(664);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var r,n=0;for(r in e){if(!t||e[r]!==t[r])return!1;n++}for(r in t)n--;return 0===n}(n.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)})),e.hot.dispose((function(){o()}))},673:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2);n.__exportStar(r(195),t),n.__exportStar(r(313),t),n.__exportStar(r(420),t),n.__exportStar(r(203),t),n.__exportStar(r(674),t)},674:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(2),a=n.__importStar(r(0)),o=r(1),c=n.__importDefault(r(43));t.TabTitleIcon=e=>{var{children:t,className:r=""}=e,i=n.__rest(e,["children","className"]);return a.createElement("span",Object.assign({className:o.css(c.default.tabsItemIcon,r)},i),t)},t.TabTitleIcon.displayName="TabTitleIcon"},675:function(e,t,r){!function(e,t,r,n,a){"use strict";t=t&&t.hasOwnProperty("default")?t.default:t,r=r&&r.hasOwnProperty("default")?r.default:r,n=n&&n.hasOwnProperty("default")?n.default:n;var o=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}e.exports=t})),c=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},i=function(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a},l=t.createContext("light"),s=function(e){var r=e.className,a=e.children,s=i(e,["className","children"]),u=n(r,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return t.createElement(l.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",r=n(c({},"pf-m-".concat(e,"-200"),"dark"===e),c({},"pf-m-light","light"===e));return t.createElement("section",o({},s,{className:"".concat(u," ").concat(r),"widget-type":"InsightsPageHeader"}),a)}))};s.propTypes={children:r.any.isRequired,className:r.string};var u=function(e){var r=e.className,o=e.title,c=n(r);return t.createElement(a.Title,{headingLevel:"h1",size:"2xl",className:c,"widget-type":"InsightsPageHeaderTitle"}," ",o," ")};u.propTypes={title:r.node.isRequired,className:r.string},e.PageHeader=s,e.PageHeaderTitle=u,Object.defineProperty(e,"__esModule",{value:!0})}(t,r(0),r(4),r(45),r(92))}}]);
//# sourceMappingURL=Register.js.map