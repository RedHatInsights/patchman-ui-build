(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[677],{44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>P});var r=a(86350),s=a(77865),n=a.n(s),o=a(61084),l=a(30893),c=a(89421),u=a(13784),i=a(32132);const f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.systems_updatable;""!==a&&a||(a="0");var r=n().useMemo((function(){return u.Tl.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),s=function(t){e({filter:{systems_updatable:"0"!==t&&t||""}})};return{label:i.N.formatMessage(l.Z.labelsFiltersStatus),type:c.Yu.radio,filterValues:{onChange:function(e,t){s(t)},items:r,value:a,placeholder:i.N.formatMessage(l.Z.labelsColumnsStatusPlaceholder)}}};var m=a(90747),g=a(49642),p=a(38776),d=a(64270),h=a(9557),k=a(11220),_=a(86032),v=a(57358),S=a(91607);const P=function(){var e=(0,o.useDispatch)();(0,S.Iw)("Packages");var t=(0,o.useSelector)((function(e){return e.PackagesListStore.rows})),a=n().useMemo((function(){return(0,_.k6)(t)}),[t]),s=(0,o.useSelector)((function(e){return e.PackagesListStore.status})),c=(0,o.useSelector)((function(e){return e.PackagesListStore.metadata})),P=(0,o.useSelector)((function(e){return e.PackagesListStore.queryParams}));function b(t){e((0,h.If)(t))}n().useEffect((function(){e((0,h.kU)(P))}),[P]);var Z=(0,S.AR)("packages",P,{csv:k.pq,json:k.pW},e),y=(0,S._f)(d.$$,b),M=n().useMemo((function(){return(0,v.hO)(d.$$,c.sort,0)}),[c.sort]),E=(0,S.SL)(c.limit,b),I=(0,S._T)(b);return n().createElement(n().Fragment,null,n().createElement(g.Z,{title:i.N.formatMessage(l.Z.titlesPatchPackages),headerOUIA:"packages"}),n().createElement(r.Z,null,n().createElement(p.Z,{columns:d.$$,store:{rows:a,metadata:c,status:s,queryParams:P},onSort:y,onExport:Z,sortBy:M,onSetPage:E,onPerPageSelect:I,compact:!0,apply:b,filterConfig:{items:[(0,m.Z)(b,P.search,i.N.formatMessage(l.Z.labelsFiltersPackagesSearchTitle),i.N.formatMessage(l.Z.labelsFiltersPackagesSearchPlaceHolder)),f(b,P.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:u.eZ})))}}}]);
//# sourceMappingURL=../sourcemaps/Packages.acbba2c6ce10432aa73f.js.map