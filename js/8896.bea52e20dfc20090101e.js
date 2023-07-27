(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[8896],{43047:(e,t,r)=>{"use strict";r.d(t,{$O:()=>i,MX:()=>o,ZP:()=>a});var n=r(40400);const o={name:"ExclamationCircleIcon",height:512,width:512,svgPath:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z",yOffset:0,xOffset:0},i=(0,n.IU)(o),a=i},88940:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>L});var n=r(85893),o=r(28216),i=r(43297),a=r(12181),s=r(6848),c=r(56989),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)};const u=function(e){var t=e.description,r=e.dismissable,o=void 0===r||r,a=e.onDismiss,u=e.dismissDelay,f=void 0===u?8e3:u,p=e.title,d=e.sentryId,h=e.requestId,y=e.autoDismiss,v=void 0===y||y,g=e.id,b=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["description","dismissable","onDismiss","dismissDelay","title","sentryId","requestId","autoDismiss","id"]),m=(0,i.useRef)(),O=function(){a(g)},j=function(){v&&(m.current=setTimeout((function(){return O()}),f))},w=function(){m.current&&clearTimeout(m.current)};return(0,i.useEffect)((function(){return j(),function(){w()}}),[]),(0,n.jsxs)(s.Alert,l({className:"notification-item",id:"".concat(g),title:"string"==typeof p?p.replace(/<\/?[^>]+(>|$)/g,""):p},b,{actionClose:o?(0,n.jsx)(s.AlertActionCloseButton,l({"aria-label":"close-notification",variant:"plain",onClick:O},{children:(0,n.jsx)(c.CloseIcon,{})})):null,onMouseEnter:w,onMouseLeave:j},{children:[(0,n.jsx)(s.TextContent,{children:(0,n.jsx)(s.Text,l({className:"sentry-mask data-hj-suppress",component:s.TextVariants.small},{children:"string"==typeof t?t.replace(/<\/?[^>]+(>|$)/g,""):t}))}),d&&(0,n.jsx)(s.TextContent,{children:(0,n.jsxs)(s.Text,l({component:s.TextVariants.small},{children:["Tracking Id: ",d]}))}),h&&(0,n.jsx)(s.TextContent,{children:(0,n.jsxs)(s.Text,l({component:s.TextVariants.small},{children:["Request Id: ",h]}))})]}))};var f=function(){return f=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},f.apply(this,arguments)};const p=function(e){var t=e.page,r=void 0===t?1:t,o=e.onSetPage,i=e.onClearAll,a=e.count,c=void 0===a?0:a;return(0,n.jsx)(s.Card,f({className:"notification-item"},{children:(0,n.jsx)(s.CardBody,{children:(0,n.jsxs)(s.Level,{children:[(0,n.jsx)(s.LevelItem,{children:(0,n.jsx)(s.Button,f({variant:s.ButtonVariant.link,className:"ins-c-pagination__clear-all",onClick:i},{children:"Clear all"}))}),(0,n.jsx)(s.LevelItem,{children:(0,n.jsx)(s.Pagination,{itemCount:c,variant:s.PaginationVariant.bottom,perPageOptions:[{title:"5",value:5}],titles:{items:"Notifications"},perPage:5,page:r,onSetPage:o})})]})})}))};var d=function(){return d=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},d.apply(this,arguments)};const h=function(e){var t=e.notifications,r=void 0===t?[]:t,o=e.removeNotification,s=void 0===o?function(){}:o,c=e.rootId,l=e.onClearAll,f=(0,i.useState)({page:1}),h=f[0],y=f[1],v=h.page,g=r&&r.length<=5?r:r&&r.slice(5*(v-1),5*v);return 0===r.length?null:(0,a.createPortal)((0,n.jsxs)("div",d({className:"notifications-portal"},{children:[r.length>5&&(0,n.jsx)(p,{onSetPage:function(e,t){y((function(e){return d(d({},e),{page:t})}))},count:r.length,page:v,onClearAll:l}),g.map((function(e){return(0,n.jsx)(u,d({onDismiss:s},e),"".concat(e.id))}))]})),c&&document.getElementById(c)||document.body)};var y=r(21458),v=r(80123),g=r(39173),b=r(43047),m=function(){return m=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},m.apply(this,arguments)};const O=function(){return(0,n.jsxs)(n.Fragment,{children:["If the problem persists, contact ",(0,n.jsx)("a",m({href:"https://access.redhat.com/support"},{children:"Red Hat Support"}))," or check our ",(0,n.jsx)("a",m({href:"https://status.redhat.com"},{children:" status page"}))," for known outages."]})};var j=function(){return j=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},j.apply(this,arguments)};const w=function(e){var t=e.errorTitle,r=void 0===t?"Something went wrong":t,o=e.errorDescription,i=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["errorTitle","errorDescription"]);return(0,n.jsxs)(s.EmptyState,j({variant:s.EmptyStateVariant.large},i,{className:"ins-c-error-state"},{children:[(0,n.jsx)(s.EmptyStateIcon,{icon:b.$O}),(0,n.jsx)(s.Title,j({headingLevel:"h4",size:"lg"},{children:r})),(0,n.jsx)(s.EmptyStateBody,{children:(0,n.jsxs)(s.Stack,{children:[!o&&(0,n.jsx)(s.StackItem,{children:"There was a problem processing the request. Please try again."}),(0,n.jsx)(s.StackItem,{children:o||(0,n.jsx)(O,{})})]})}),document.referrer?(0,n.jsx)(s.Button,j({variant:"primary",onClick:function(){return history.back()}},{children:"Return to last page"})):(0,n.jsx)(s.Button,j({variant:"primary",component:"a",href:".",target:"_blank",rel:"noopener noreferrer"},{children:"Go to home page"}))]}))};var x=function(){return x=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},x.apply(this,arguments)},P="ins-error-boundary-stack";const E=function(e){var t=e.error;return t.stack?(0,n.jsx)(s.Text,x({className:P},{children:t.stack.split("\n").map((function(e){return(0,n.jsx)("div",{children:e},e)}))})):t.name&&t.message?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Text,x({component:"h6"},{children:t.name})),(0,n.jsx)(s.Text,x({className:P,component:"blockquote"},{children:t.message}))]}):(0,n.jsx)(s.Text,x({className:P,component:"blockquote"},{children:t.toString()}))};var S=r(94184),N=r.n(S),I=function(){return I=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},I.apply(this,arguments)};const T=function(e){var t,r=e.type,o=e.children,i=e.className,a=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["type","children","className"]),s=N()(i,((t={})["ins-l-".concat(r)]=void 0!==r,t));return(0,n.jsxs)("section",I({},a,{className:s},{children:[" ",o," "]}))};var D,C=(D=function(e,t){return D=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},D(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}D(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),k=function(){return k=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},k.apply(this,arguments)};const A=function(e){function t(t){var r=e.call(this,t)||this;return r.state={hasError:!1,historyState:history.state},r}return C(t,e),t.getDerivedStateFromError=function(e){return{hasError:!0,error:e,historyState:history.state}},t.prototype.render=function(){return this.state.historyState!==history.state&&this.setState({hasError:!1,historyState:history.state}),this.state.hasError?this.props.silent?null:(0,n.jsxs)("div",{children:[(0,n.jsx)(v.Z,{children:(0,n.jsx)(g.Z,{title:this.props.headerTitle})}),(0,n.jsx)(T,{children:(0,n.jsx)(w,{errorTitle:this.props.errorTitle,errorDescription:(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:this.props.errorDescription}),this.state.error&&(0,n.jsx)(s.ExpandableSection,k({toggleText:"Show details"},{children:(0,n.jsx)(E,{error:this.state.error})}))]})})})]}):this.props.children},t}(i.Component);var _=function(){return _=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},_.apply(this,arguments)},R=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r},B=function(e){var t=e.clearNotifications,r=R(e,["clearNotifications"]),i=(0,o.v9)((function(e){return e.notifications})),a=(0,o.I0)();return(0,n.jsx)(h,_({notifications:i,removeNotification:function(e){return a((0,y.FV)(e))},onClearAll:t||function(){return a((0,y.L1)())}},r))};const L=function(e){var t=e.silent,r=void 0===t||t,o=R(e,["silent"]);return(0,n.jsx)(A,_({headerTitle:"Notifications portal",silent:r},{children:(0,n.jsx)(B,_({},o))}))}},84885:(e,t,r)=>{"use strict";r.d(t,{ZP:()=>f});var n=r(27361),o=r.n(n),i=r(18721),a=r.n(i),s=r(21458),c=r(6848),l=function(){return l=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},l.apply(this,arguments)},u=function(e,t,r){if("string"==typeof e)return{title:"Error",description:e};var n=t;Array.isArray(t)&&(n=t.find((function(t){return a()(e,t)})));var i=r;return Array.isArray(r)&&(i=r.find((function(t){return a()(e,t)}))),{title:o()(e,n)||"Error",description:o()(e,i),sentryId:null==e?void 0:e.sentryId,requestId:null==e?void 0:e.requestId}};const f=function(e){var t=l(l({},{dispatchDefaultFailure:!0,pendingSuffix:"_PENDING",fulfilledSuffix:"_FULFILLED",rejectedSuffix:"_REJECTED",autoDismiss:!1,dismissDelay:5e3,errorTitleKey:"title",errorDescriptionKey:"detail",useStatusText:!1}),e),r=function(e){return Boolean(e.match(new RegExp("^.*".concat(t.rejectedSuffix,"$"))))},n={dismissable:!t.autoDismiss,dismissDelay:t.dismissDelay};return function(e){var i=e.dispatch;return function(e){return function(f){var p=f.meta,d=f.type;if(p&&p.notifications){var h=p.notifications;(function(e){return Boolean(e.match(new RegExp("^.*".concat(t.pendingSuffix,"$"))))})(d)&&h.pending?("function"==typeof h.pending&&(h.pending=h.pending(f.payload)),i((0,s.wN)(l(l({},n),h.pending)))):function(e){return Boolean(e.match(new RegExp("^.*".concat(t.fulfilledSuffix,"$"))))}(d)&&h.fulfilled?("function"==typeof h.fulfilled&&(h.fulfilled=h.fulfilled(f.payload)),i((0,s.wN)(l(l({},n),h.fulfilled)))):r(d)&&h.rejected&&("function"==typeof h.rejected&&(h.rejected=h.rejected(f.payload)),i((0,s.wN)(l(l(l({},n),h.rejected),{sentryId:f.payload&&f.payload.sentryId,requestId:f.payload&&f.payload.requestId}))))}if(function(e){return e.isRejected&&!e.hasCustomNotification&&!e.noErrorOverride&&e.dispatchDefaultFailure}({isRejected:r(d),hasCustomNotification:p&&p.notifications&&p.notifications.rejected,noErrorOverride:p&&p.noError,dispatchDefaultFailure:t.dispatchDefaultFailure}))if(t.useStatusText)i((0,s.wN)(l({variant:c.AlertVariant.danger,dismissable:!0},u(f.payload,t.errorTitleKey,"statusText"))));else{var y=Array.isArray(t.errorNamespaceKey)&&t.errorNamespaceKey.find((function(e){return a()(f.payload,e)}));y?o()(f.payload,y).map((function(e){i((0,s.wN)(l({variant:c.AlertVariant.danger,dismissable:!0},u(e,t.errorTitleKey,t.errorDescriptionKey))))})):Array.isArray(f.payload)?f.payload.map((function(e){i((0,s.wN)(l({variant:c.AlertVariant.danger,dismissable:!0},u(e,t.errorTitleKey,t.errorDescriptionKey))))})):i((0,s.wN)(l({variant:c.AlertVariant.danger,dismissable:!0},u(f.payload,t.errorTitleKey,t.errorDescriptionKey))))}e(f)}}}}},55323:(e,t,r)=>{"use strict";r.d(t,{Pj:()=>v,k2:()=>g});var n=r(87462),o=r(4942),i=r(45987),a=r(43297),s=r.n(a),c=r(45697),l=r.n(c),u=r(67715);const f=JSON.parse('{"en":{"default.cancel":"Cancel","default.save":"Save","default.delete":"Delete","default.remove":"Remove"},"cs":{"default.cancel":"Zrušit","default.save":"Save","default.delete":"Smazat","default.remove":"Odstranit"}}');var p=["locale","messages"];function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function h(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(e){var t=e.locale,r=e.messages,o=(0,i.Z)(e,p),a=t||localStorage.getItem(g)||navigator.language.split(/[-_]/)[0]||"en";return s().createElement(u.Z,(0,n.Z)({locale:a,messages:h(h({},f[a]),r&&r.hasOwnProperty(a)?r[a]:r)},o))};y.propTypes={locale:l().string,messages:l().object},y.defaultProps={locale:null};const v=y;(0,r(50049).vU)({cancel:{id:"default.cancel",description:"Default cancel string",defaultMessage:"Cancel"},save:{id:"default.save",description:"Default save string",defaultMessage:"Save"},delete:{id:"default.delete",description:"Default delete string",defaultMessage:"Delete"},remove:{id:"default.remove",description:"Default remove string",defaultMessage:"Remove"}});var g="rhcs-language"},34663:(e,t,r)=>{"use strict";r.d(t,{Cs:()=>c,RM:()=>f,_s:()=>a,lo:()=>u,wP:()=>l});var n=r(43297),o=function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{c(n.next(e))}catch(e){i(e)}}function s(e){try{c(n.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}c((n=n.apply(e,t||[])).next())}))},i=function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};function a(e,t){var r,n,a,s,c;return void 0===e&&(e=""),void 0===t&&(t=!1),o(this,void 0,void 0,(function(){var o,l,u;return i(this,(function(i){switch(i.label){case 0:return o=window.insights,[4,null===(n=null===(r=null==o?void 0:o.chrome)||void 0===r?void 0:r.auth)||void 0===n?void 0:n.getUser()];case 1:return l=i.sent(),u={isOrgAdmin:(null===(s=null===(a=null==l?void 0:l.identity)||void 0===a?void 0:a.user)||void 0===s?void 0:s.is_org_admin)||!1},[4,null===(c=null==o?void 0:o.chrome)||void 0===c?void 0:c.getUserPermissions(e,t)];case 2:return[2,(u.permissions=i.sent()||null,u)]}}))}))}function s(e){return"object"==typeof e}function c(e,t){return!!e&&e.some((function(e){return t.includes(s(e)?null==e?void 0:e.permission:e)}))}function l(e,t){return!!e&&t.every((function(t){return e.some((function(e){var r,n=(null===(r=s(e)?null==e?void 0:e.permission:e)||void 0===r?void 0:r.split(":"))||[],o=t.split(":");return n.slice(0).reduce((function(e,t,r,n){return!1===e?(n.splice(r),e):"*"===t||t===(null==o?void 0:o[r])}),!0)||n.join(":")===t}))}))}var u={isLoading:!0,isOrgAdmin:!1,permissions:[]},f=(0,n.createContext)(u)},95249:(e,t,r)=>{"use strict";r.d(t,{c$:()=>a});var n=r(43297),o=r(34663),i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=function(e,t){var r=(0,n.useContext)(o.RM),a=r.hasAccess,s=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(r,["hasAccess"]);return i(i({},s),{hasAccess:(null==a?void 0:a(e,t))||!1})}},53754:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(43297);const o=r.n(n)().createContext("light")},80123:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(85893),o=r(94184),i=r.n(o),a=r(53754),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};const c=function(e){var t=e.className,r=e.children,o=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}(e,["className","children"]),c=i()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(a.Z.Consumer,{children:function(e){var t,a;void 0===e&&(e="light");var l=i()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((a={})["pf-m-light"]="light"===e,a));return(0,n.jsx)("section",s({},o,{className:"".concat(c," ").concat(l),"widget-type":"InsightsPageHeader"},{children:r}))}})}},39173:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(85893),o=r(94184),i=r.n(o),a=r(6848),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)};const c=function(e){var t=e.className,r=e.title,o=i()(t);return(0,n.jsx)(a.Title,s({headingLevel:"h1",size:"2xl",className:o,"widget-type":"InsightsPageHeaderTitle"},{children:r}))}},371:(e,t,r)=>{"use strict";r.d(t,{r:()=>c});var n=r(85893),o=r(43297),i=r(6848),a=r(34663),s=function(){return s=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},c=function(e){var t,r=e.appName,c=e.children,l=(0,o.useState)(a.lo),u=l[0],f=l[1];return(0,o.useEffect)((function(){var e,t,n,o;r&&(e=void 0,t=void 0,o=function(){var e,t,n;return function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(o){switch(o.label){case 0:return[4,(0,a._s)(r,!0)];case 1:return e=o.sent(),t=e.isOrgAdmin,n=e.permissions,f((function(e){return s(s({},e),{isLoading:!1,isOrgAdmin:t,permissions:n})})),[2]}}))},new((n=void 0)||(n=Promise))((function(r,i){function a(e){try{c(o.next(e))}catch(e){i(e)}}function s(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,s)}c((o=o.apply(e,t||[])).next())})))}),[r]),(0,n.jsx)(a.RM.Provider,s({value:s(s({},u),{hasAccess:(t=(null==u?void 0:u.permissions)||[],function(e,r){return r?(0,a.wP)(t,e):(0,a.Cs)(t,e)})})},{children:u.isLoading?(0,n.jsx)(i.Bullseye,{children:(0,n.jsx)(i.Spinner,{size:"xl"})}):c}))}},55140:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(59823),o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};const i=function(e){var t,r=(0,n.useScalprum)(),i=(null===(t=r.api)||void 0===t?void 0:t.chrome)||{};return i=o(o({},i),{initialized:r.initialized}),"function"==typeof e?e(i):i}},78565:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,r){return null!=e&&t.call(e,r)}},5076:(e,t,r)=>{var n=r(89881);e.exports=function(e,t){var r;return n(e,(function(e,n,o){return!(r=t(e,n,o))})),!!r}},18721:(e,t,r)=>{var n=r(78565),o=r(222);e.exports=function(e,t){return null!=e&&o(e,t,n)}},59704:(e,t,r)=>{var n=r(82908),o=r(67206),i=r(5076),a=r(1469),s=r(16612);e.exports=function(e,t,r){var c=a(e)?n:i;return r&&s(e,t,r)&&(t=void 0),c(e,o(t,3))}},97779:(e,t,r)=>{"use strict";r.d(t,{md:()=>d,UY:()=>f,qC:()=>p,jB:()=>u});var n=r(4942);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var s="function"==typeof Symbol&&Symbol.observable||"@@observable",c=function(){return Math.random().toString(36).substring(7).split("").join(".")},l={INIT:"@@redux/INIT"+c(),REPLACE:"@@redux/REPLACE"+c(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+c()}};var u=function e(t,r,n){var o;if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(a(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw new Error(a(1));return n(e)(t,r)}if("function"!=typeof t)throw new Error(a(2));var i=t,c=r,u=[],f=u,p=!1;function d(){f===u&&(f=u.slice())}function h(){if(p)throw new Error(a(3));return c}function y(e){if("function"!=typeof e)throw new Error(a(4));if(p)throw new Error(a(5));var t=!0;return d(),f.push(e),function(){if(t){if(p)throw new Error(a(6));t=!1,d();var r=f.indexOf(e);f.splice(r,1),u=null}}}function v(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error(a(7));if(void 0===e.type)throw new Error(a(8));if(p)throw new Error(a(9));try{p=!0,c=i(c,e)}finally{p=!1}for(var t=u=f,r=0;r<t.length;r++)(0,t[r])();return e}return v({type:l.INIT}),(o={dispatch:v,subscribe:y,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error(a(10));i=e,v({type:l.REPLACE})}})[s]=function(){var e,t=y;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new Error(a(11));function r(){e.next&&e.next(h())}return r(),{unsubscribe:t(r)}}})[s]=function(){return this},e},o};function f(e){for(var t=Object.keys(e),r={},n=0;n<t.length;n++){var o=t[n];"function"==typeof e[o]&&(r[o]=e[o])}var i,s=Object.keys(r);try{!function(e){Object.keys(e).forEach((function(t){var r=e[t];if(void 0===r(void 0,{type:l.INIT}))throw new Error(a(12));if(void 0===r(void 0,{type:l.PROBE_UNKNOWN_ACTION()}))throw new Error(a(13))}))}(r)}catch(e){i=e}return function(e,t){if(void 0===e&&(e={}),i)throw i;for(var n=!1,o={},c=0;c<s.length;c++){var l=s[c],u=r[l],f=e[l],p=u(f,t);if(void 0===p)throw t&&t.type,new Error(a(14));o[l]=p,n=n||p!==f}return(n=n||s.length!==Object.keys(e).length)?o:e}}function p(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function d(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return function(){var r=e.apply(void 0,arguments),n=function(){throw new Error(a(15))},o={getState:r.getState,dispatch:function(){return n.apply(void 0,arguments)}},s=t.map((function(e){return e(o)}));return n=p.apply(void 0,s)(r.dispatch),i(i({},r),{},{dispatch:n})}}}}}]);
//# sourceMappingURL=../sourcemaps/8896.1120bc209fd3ad142e201ba790e07f8b.js.map