(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[677],{44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>b});var n=a(86350),r=a(77865),s=a.n(r),o=a(61084),c=a(90747),l=a(89421),u=a(13784),i=a(32132),f=a(30893);const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.systems_updatable;""!==a&&a||(a="0");var n=s().useMemo((function(){return u.Tl.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),r=function(t){e({filter:{systems_updatable:"0"!==t&&t||""}})};return{label:i.N.formatMessage(f.Z.labelsFiltersStatus),type:l.Yu.radio,filterValues:{onChange:function(e,t){r(t)},items:n,value:a,placeholder:i.N.formatMessage(f.Z.labelsColumnsStatusPlaceholder)}}};var g=a(49642),p=a(38776),d=a(64270),S=a(9557),v=a(86032),h=a(57358),k=a(91607),_=a(35240),P=a(11220);const b=function(){var e=(0,o.useDispatch)();(0,k.Iw)("Packages");var t=(0,o.useSelector)((function(e){return e.PackagesListStore.rows})),a=s().useMemo((function(){return(0,v.k6)(t)}),[t]),r=(0,o.useSelector)((function(e){return e.PackagesListStore.status})),l=(0,o.useSelector)((function(e){return e.PackagesListStore.metadata})),b=(0,o.useSelector)((function(e){return e.PackagesListStore.queryParams}));function y(t){e((0,S.If)(t))}s().useEffect((function(){e((0,S.kU)(b))}),[b]);var Z=(0,k._f)(d.$$,y),M=s().useMemo((function(){return(0,h.hO)(d.$$,l.sort,0)}),[l.sort]),I=(0,k.SL)(l.limit,y),O=(0,k._T)(y);return s().createElement(s().Fragment,null,s().createElement(g.Z,{title:i.N.formatMessage(f.Z.titlesPatchPackages),headerOUIA:"packages"}),s().createElement(n.Z,null,s().createElement(p.Z,{columns:d.$$,store:{rows:a,metadata:l,status:r,queryParams:b},onSort:Z,onExport:function(e,t){var a=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",n="packages-".concat(a);"csv"===t?(0,P.pq)(b).then((function(e){return(0,_.Sv)(e,n,"csv")})):(0,P.pW)(b).then((function(e){return(0,_.Sv)(JSON.stringify(e),n,"json")}))},sortBy:M,onSetPage:I,onPerPageSelect:O,compact:!0,apply:y,filterConfig:{items:[(0,c.Z)(y,b.search,i.N.formatMessage(f.Z.labelsFiltersPackagesSearchTitle),i.N.formatMessage(f.Z.labelsFiltersPackagesSearchPlaceHolder)),m(y,b.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:u.eZ})))}}}]);
//# sourceMappingURL=../sourcemaps/Packages.5a478e6f590f96a0a3ac.js.map