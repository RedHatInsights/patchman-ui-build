(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[4125],{39591:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(85893),a=n(43297);const o=function(e){var t=e.component,n=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["component"]);return(0,a.useEffect)((function(){console.error("Unable to load inventory component. Failed to load ".concat(t,"."),n)}),[]),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{children:"Unable to load inventory component"}),(0,r.jsxs)("h2",{children:["Failed to load ",t]}),(0,r.jsx)("code",{children:"More info can be found in browser console output."})]})}},33739:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(85893),a=n(43297),o=n.n(a),s=n(45697),c=n.n(s),i=n(59823),l=n(96620),u=n(28216),p=n(21602),d=n(39591),f=n(94184),m=n.n(f),y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},y.apply(this,arguments)},v=function(e){var t=(0,l.useHistory)(),n=(0,u.oR)(),o=e.component;return(0,r.jsx)(o,y({className:m()(e.className,"inventory")},{children:(0,r.jsx)(a.Suspense,y({fallback:e.fallback},{children:(0,r.jsx)(i.ScalprumComponent,y({history:t,store:n,appName:"inventory",module:"./InventoryTable",scope:"inventory",ErrorComponent:(0,r.jsx)(d.Z,y({component:"InventoryDetailHead",history:t,store:n},e)),ref:e.innerRef},e))}))}))};v.propTypes={fallback:c().node,innerRef:c().object,component:c().string,className:c().string};var b=o().forwardRef((function(e,t){return(0,r.jsx)(v,y({innerRef:t},e))}));b.propTypes={fallback:c().node,component:c().string,className:c().string},b.defaultProps={fallback:(0,r.jsx)(p.Bullseye,y({className:"pf-u-p-lg"},{children:(0,r.jsx)(p.Spinner,{size:"xl"})})),component:"section"};const h=b},14748:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(85893),a=n(43297),o=n.n(a),s=n(94184),c=n.n(s),i=n(28216),l=n(53754),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)},p=function(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))};const d=(0,i.$j)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))((function(e){var t=e.path,n=e.params,a=void 0===n?{}:n,s=e.children,i=e.className,d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["path","params","children","className"]),f=function(){var e,n,r;if(null===(r=null===(n=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===n?void 0:n.$internal)||void 0===r?void 0:r.store){var o=window.insights.chrome.$internal.store.getState();if(t&&o)return t.split("/").reduce((function(e,t){var n,r;return 0===t.indexOf(":")?e.dynamic=u(u({},e.dynamic),((n={})["data-".concat((r=t.substr(1),r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[t.substr(1)],n)):e.staticPart=p(p([],e.staticPart,!0),""!==t?[t]:[],!0),e}),{staticPart:[o.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),m=f.dynamic,y=f.staticPart;return(0,r.jsx)(l.Z.Consumer,{children:function(e){var t;void 0===e&&(e="light");var n=c()(((t={})["pf-m-".concat(e)]="dark"===e,t));return{dark:(0,r.jsx)("section",u({},d,m,{"page-type":y.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section")," ").concat(n)},{children:o().Children.map(s,(function(e){return o().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,r.jsx)("section",u({},d,m,{"page-type":y.join("-"),className:"".concat(c()(i,"pf-l-page__main-section pf-c-page__main-section"))},{children:s}))}[e]}})}))},49642:(e,t,n)=>{"use strict";n.d(t,{Z:()=>E});var r=n(79851),a=n(34512),o=n(80123),s=n(39173),c=n(45697),i=n.n(c),l=n(43297),u=n.n(l),p=n(64029),d=n(32835),f=n(96620),m=function(e){var t=e.items,n=e.headerOUIA;return u().createElement(p.a,null,t.filter(Boolean).map((function(e){return u().createElement(d.g,{key:e.title,isActive:e.isActive},e.to?u().createElement(f.Link,{to:e.to,"data-ouia-component-type":"".concat(n,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};m.propTypes={items:i().arrayOf(i().shape({isActive:i().bool,to:i().string,title:i().node})),headerOUIA:i().string};const y=m;var v=n(28883),b=n(35262),h=function(e){var t=e.history,n=e.headerOUIA;return u().createElement(b.m,{onSelect:function(e,n){t.push(n)},activeKey:t.location.pathname,className:"patchman-tabs"},u().createElement(v.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Applicable advisories'")}),u().createElement(v.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(n,"-tab"),"data-ouia-component-id":"".concat(n,"-tab-Systems")}))};h.propTypes={history:i().object,headerOUIA:i().string};const O=(0,f.withRouter)(h);var g=function(e){var t=e.title,n=e.showTabs,c=e.breadcrumbs,i=e.children,l=e.headerOUIA,p=e.actions;return u().createElement(u().Fragment,null,u().createElement(o.Z,{"data-ouia-component-type":"".concat(l,"-page-header")},c&&u().createElement(y,{items:c,headerOUIA:l}),u().createElement(r.P,{hasGutter:!0},u().createElement(a.J,null,u().createElement(s.Z,{title:t})),u().createElement(a.J,{isFilled:!0}),u().createElement(a.J,null,p)),i),n&&u().createElement(O,{headerOUIA:l}))};g.propTypes={title:i().node,showTabs:i().bool,breadcrumbs:i().array,children:i().any,headerOUIA:i().string,actions:i().node};const E=g},91433:(e,t,n)=>{"use strict";n.d(t,{f:()=>f});var r=n(52643),a=n(9947),o=n(75106),s=n(38424),c=n(60485),i=n(68778),l=n(43297),u=n.n(l),p=n(32132),d=n(30893),f=function(){return u().createElement(r.b,null,u().createElement(a.u,{style:{paddingTop:40}},u().createElement(s.k,{icon:function(){return u().createElement(i.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),u().createElement(c.D,{headingLevel:"h5",size:"lg"},p.N.formatMessage(d.Z.statesNoApplicableAdvisories)),u().createElement(o.B,null,p.N.formatMessage(d.Z.statesSystemUpToDate))))}},81469:(e,t,n)=>{"use strict";n.d(t,{x:()=>b,ZP:()=>g});var r=n(45987),a=n(4942),o=n(35664),s=n(85893),c=n(94184),i=n.n(c),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},l.apply(this,arguments)};const u=function(e){var t,n=e.centered,r=e.className,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["centered","className"]),o=i()("ins-c-spinner",((t={})["ins-m-center"]=n,t),r);return(0,s.jsx)("div",l({role:"status",className:o},a,{children:(0,s.jsx)("span",l({className:"pf-u-screen-reader"},{children:"Loading..."}))}))};var p,d=n(45697),f=n.n(d),m=n(43297),y=n.n(m),v=["loading","variant","children"],b={spinner:"spinner",skeleton:"skeleton"},h=(p={},(0,a.Z)(p,b.skeleton,(function(e){var t=e.size,n=e.isDark;return y().createElement(o.Z,{size:t,isDark:n})})),(0,a.Z)(p,b.spinner,(function(e){var t=e.centered;return y().createElement(u,{centered:t})})),p),O=function(e){var t=e.loading,n=e.variant,a=e.children,o=(0,r.Z)(e,v);return!1!==t?h[n](o):a};O.propTypes={loading:f().bool,variant:f().string,children:f().any};const g=O},93080:(e,t,n)=>{"use strict";n.d(t,{c:()=>m,r:()=>y});var r=n(15861),a=n(4942),o=n(64687),s=n.n(o),c=n(43297),i=n(28216),l=n(11220),u=n(9557),p=n(5391);function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={advisories:"/ids/advisories",systems:"/ids/systems",templates:"/baselines",advisorySystems:function(e){return"/ids/advisories/".concat(e,"/systems")},systemAdvisories:function(e){return"/ids/systems/".concat(e,"/advisories")},packageSystems:function(e){return"/packages/".concat(e,"/systems")},systemPackages:function(e){return"/systems/".concat(e,"/packages")},templateSystems:function(e){return"/ids/baselines/".concat(e,"/systems")}},y=function(e,t,n){var a=n.endpoint,o=n.queryParams,d=n.selectionDispatcher,m=n.constructFilename,y=n.transformKey,v=n.apiResponseTransformer,b=n.customSelector,h=(0,i.I0)(),O=function(e,t){return(0,c.useCallback)((function(n){return(0,l.dk)(e,f(f({},n),{},{limit:-1})).then((function(e){return t?t(e):e}))}),[])}(a,v),g=function(e,t){return(0,c.useCallback)((function(n){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=n.ids,o=n.data,s=Array.isArray(a);return(s?a:o).forEach((function(n){var a=s?n:n.id;(0,p.Kn)(n)&&n.isExpandedRow||r.push({id:e?e(n):a,selected:t?t(n):a})})),r}))}(y,m),E=function(e){b?b(e):h(d(e))},j=function(e,t,n){return{selectNone:function(e){var r=[];Object.keys(e).forEach((function(e){r.push({id:e,selected:!1})})),t(r),n(!1)},selectPage:function(n){Array.isArray(n)&&(n=n.filter((function(e){return!e.disableSelection}))),t(e({data:n}))},selectAll:function(r,a){return a.offset=0,r(a).then((function(r){if(Array.isArray(r.data)){var a=r.data.filter((function(e){return"Applicable"!==e.status}));t(e({data:a}))}else t(e(r)),n(!0)}))}}}(g,E,(function(e){h((0,u.wy)(e))})),w=j.selectNone,P=j.selectPage,k=j.selectAll,A=(0,c.useCallback)(function(){var n=(0,r.Z)(s().mark((function n(r,a,c){var i,l=arguments;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:i=l.length>3&&void 0!==l[3]?l[3]:function(){},n.t0=r,n.next="none"===n.t0?4:"page"===n.t0?6:"all"===n.t0?8:10;break;case 4:return w(t),n.abrupt("break",11);case 6:return P(e),n.abrupt("break",11);case 8:return k(O,o).then((function(){return i(!1)})),n.abrupt("break",11);case 10:E([{id:y?y(e[c]):e[c].id,selected:a&&(!m||m(e[c]))}]);case 11:case"end":return n.stop()}}),n)})));return function(e,t,r){return n.apply(this,arguments)}}());return A}},5747:(e,t,n)=>{"use strict";n.d(t,{G:()=>p,Kq:()=>y,OC:()=>d,PD:()=>m,lu:()=>f});var r=n(29439),a=n(4942),o=n(36248),s=n(48881),c=n(22789);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u={rows:[],entities:[],selectedRows:{},status:{},page:1,perPage:20,metadata:{limit:20,offset:0,total_items:0}},p=function(e,t){return t.loaded?l(l({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,o.Yk)(t.rows,t.selectedRows)}):t},d=function(e,t,n){if("SELECT_ENTITY"===n){var a=t.packageEvraCache;void 0===a&&(a={},t.rows.forEach((function(e){return a[e.id]=e.available_evra})),t.packageEvraCache=a),t.selectedRows=t.selectedRows?Object.fromEntries(Object.entries(t.selectedRows).map((function(e){var t=(0,r.Z)(e,2),n=t[0],o=t[1];return!0===o?[n,a[n]]:[n,o]}))):t.selectedRows}return"LOAD_ENTITIES_FULFILLED"===n&&(t.packageEvraCache=void 0),t.loaded?l(l({},t),{},{columns:e,rows:(0,o.GF)(t.rows,t.selectedRows)}):t},f=function(e,t){return t.loaded?l(l({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,o.dn)(t.rows,t.selectedRows)}):t},m=function(e,t){return t.loaded?l(l({},t),{},{status:{isLoading:!1,hasError:!1},rows:(0,o.mf)(t.rows,t.selectedRows)}):t},y=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1?arguments[1]:void 0,a=l({},n);switch(r.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a,r.type);case"LOAD_ENTITIES_PENDING":return a.status={isLoading:!0,hasError:!1},a;case"LOAD_ENTITIES_REJECTED":return(0,s.PW)(a,r);case"SELECT_ENTITY":var o=(0,s.hd)(a,r);return t(e,o,r.type);case c.sq:return u;default:return n}}}},58392:()=>{},72816:()=>{},53519:()=>{}}]);