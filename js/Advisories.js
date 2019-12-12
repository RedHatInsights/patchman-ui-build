(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{410:function(e,t,n){var r=n(411),o=n(417);e.exports=function(e,t){return r(o(e,t),1)}},411:function(e,t,n){var r=n(412),o=n(413);e.exports=function e(t,n,a,i,c){var s=-1,u=t.length;for(a||(a=o),c||(c=[]);++s<u;){var l=t[s];n>0&&a(l)?n>1?e(l,n-1,a,i,c):r(c,l):i||(c[c.length]=l)}return c}},412:function(e,t){e.exports=function(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}},413:function(e,t,n){var r=n(414),o=n(246),a=n(90),i=r?r.isConcatSpreadable:void 0;e.exports=function(e){return a(e)||o(e)||!!(i&&e&&e[i])}},414:function(e,t,n){var r=n(415).Symbol;e.exports=r},415:function(e,t,n){var r=n(416),o="object"==typeof self&&self&&self.Object===Object&&self,a=r||o||Function("return this")();e.exports=a},416:function(e,t,n){(function(t){var n="object"==typeof t&&t&&t.Object===Object&&t;e.exports=n}).call(this,n(125))},417:function(e,t){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},424:function(e,t,n){"use strict";n.r(t);var r=n(200),o=n(1),a=n.n(o),i=n(101),c=n(401),s=n.n(c),u=n(23),l=n(65),f=n(64),d=n(0),b=n.n(d),p=n(126),m=function(e){var t=e.columns,n=e.rows,o=e.onCollapse,i=e.onSelect,c=e.onSetPage,d=e.onPerPageSelect,b=e.onSort,m=e.metadata,y=e.isLoading,v=a.a.useMemo(function(){return Object(p.b)(m.limit,m.offset)},[m.limit,m.offset]),g=s()(v,2),S=g[0],h=g[1],w=a.a.useMemo(function(){return Object(p.c)(t,m.sort,2)},[m.sort]);return a.a.createElement(a.a.Fragment,null,a.a.createElement(r.PrimaryToolbar,{pagination:{itemCount:m.total_items,page:S,perPage:h,isCompact:!1,onSetPage:c,onPerPageSelect:d},filterConfig:{items:[]}}),y?a.a.createElement(r.SkeletonTable,{colSize:5,rowSize:20}):a.a.createElement(u.b,{"aria-label":"Advisories table",cells:t,onSelect:i,rows:n,onCollapse:o,onSort:b,sortBy:w},a.a.createElement(l.a,null),a.a.createElement(f.a,null)))};m.propTypes={columns:b.a.array,rows:b.a.array,onCollapse:b.a.func,onSelect:b.a.func,onSetPage:b.a.func,onPerPageSelect:b.a.func,onSort:b.a.func,metadata:b.a.object,isLoading:b.a.bool};var y=m,v=n(31),g=n(48),S=n(34),h=[{title:"Name",cellFormatters:[v.b],transforms:[g.a,Object(S.b)("col-width-10")],key:"name"},{title:"Publish date",transforms:[g.a,Object(S.b)("col-width-10")],key:"public_date"},{title:"Type",transforms:[g.a,Object(S.b)("col-width-10")],key:"type"},{title:"Applicable Systems",transforms:[g.a,Object(S.b)("col-width-10")],key:"applicable_systems"},{title:"Synopsis",transforms:[g.a,Object(S.b)("col-width-10")],key:"synopsis"}],w=n(404),j=n(81),O=n.n(j);var P=function(e){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:void 0;if(n&&"get"===t){var o=Object.keys(n).map(function(e){return[encodeURIComponent(e).concat("=").concat(encodeURIComponent(n[e]))]}).join("&");e=e.concat("?").concat(o)}return window.insights.chrome.auth.getUser().then(function(){return fetch("/api/vulnerability/v1"+e,{method:t,credentials:"include",body:JSON.stringify(r)})}).then(function(e){if(!e.ok)throw-1!==e.headers.get("content-type").indexOf("json")?e.json():new Promise(function(t){return t({errors:[{status:e.status,detail:e.statusText}]})});return e.json()}).catch(function(e){var t={detail:"There was an error getting data. Reload the page and try again"};return(e=Promise.resolve(e||{})).then(function(e){var n=e.errors&&e.errors[0]||t;throw O()({},n)})})}("/vulnerabilities/cves","get",e)},k=n(99),C=function(e){return{type:k.a,payload:e}},x=n(410),E=n.n(x);t.default=function(){var e=Object(i.useDispatch)(),t=Object(i.useSelector)(function(e){return e.AdvisoryListStore.rows}),n=Object(i.useSelector)(function(e){return e.AdvisoryListStore.expandedRows}),o=Object(i.useSelector)(function(e){return e.AdvisoryListStore.queryParams}),c=Object(i.useSelector)(function(e){return e.AdvisoryListStore.selectedRows}),s=Object(i.useSelector)(function(e){return e.AdvisoryListStore.metadata}),l=Object(i.useSelector)(function(e){return e.AdvisoryListStore.isLoading}),f=a.a.useMemo(function(){return function(e,t,n){return E()(e,function(e,r){return[{id:e.id,isOpen:!0===t[e.id],selected:!0===n[e.id],cells:[e.id,e.attributes.public_date,e.attributes.advisory_type,e.attributes.applicable_systems,e.attributes.synopsis]},{cells:[{title:"asd"}],parent:2*r}]})}(t,n,c)},[t,n,c]);a.a.useEffect(function(){e(function(e){return{type:k.c,payload:new Promise(function(t){t(P(e))}).then(function(e){return e})}}(o))},[o]);var d=a.a.useCallback(function(n,r,o){return e(function(e){return{type:k.b,payload:[].concat(e)}}({rowId:Object(p.d)(t,r),value:o}))}),b=a.a.useCallback(function(n,r,o){return e(function(e){return{type:k.d,payload:[].concat(e)}}({rowId:Object(p.d)(t,o),value:r}))}),m=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return a.a.useCallback(function(r,o,a){var i=e[o-n].key;a===u.a.desc&&(i="-"+i),t({sort:i})})}(h,S,2),v=function(e,t){return a.a.useCallback(function(n,r){return t({offset:r*e-e})})}(s.limit,S),g=function(e){return a.a.useCallback(function(t,n){return e({limit:n,offset:0})})}(S);function S(t){e(C(t))}return a.a.createElement(a.a.Fragment,null,a.a.createElement(w.a,{title:"System Patching",showTabs:!0}),a.a.createElement(r.Main,null,a.a.createElement(y,{columns:h,rows:f,metadata:s,onCollapse:d,onSelect:b,onSetPage:v,onPerPageSelect:g,onSort:m,isLoading:l})))}}}]);
//# sourceMappingURL=Advisories.js.map