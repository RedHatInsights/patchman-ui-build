(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[677],{44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var s=a(28481),r=a(86350),n=a(77865),o=a.n(n),c=a(61084),l=a(30893),u=a(89421),i=a(13784),f=a(32132);const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.systems_updatable,s=function(t){e({filter:{systems_updatable:t}})};return{label:f.N.formatMessage(l.Z.labelsFiltersStatus),type:u.Yu.checkbox,filterValues:{onChange:function(e,t){s(t)},items:i.Tl,value:a,placeholder:f.N.formatMessage(l.Z.labelsColumnsStatusPlaceholder)}}};var g=a(90747),p=a(49642),d=a(38776),h=a(64270),k=a(9557),_=a(11220),P=a(86032),S=a(57358),b=a(91607),v=a(334);const Z=function(){var e=(0,c.useDispatch)(),t=o().useState(!0),a=(0,s.Z)(t,2),n=a[0],u=a[1],Z=(0,v.useHistory)();(0,b.Iw)("Packages");var y=(0,c.useSelector)((function(e){return e.PackagesListStore.rows})),M=o().useMemo((function(){return(0,P.k6)(y)}),[y]),E=(0,c.useSelector)((function(e){return e.PackagesListStore.status})),I=(0,c.useSelector)((function(e){return e.PackagesListStore.metadata})),$=(0,c.useSelector)((function(e){return e.PackagesListStore.queryParams}));function w(t){e((0,k.If)(t))}o().useEffect((function(){n?(w((0,S.PZ)(Z.location.search)),u(!1)):(Z.push((0,S.R_)($)),e((0,k.kU)($)))}),[$]);var A=(0,b.AR)("packages",$,{csv:_.pq,json:_.pW},e),C=(0,b._f)(h.$$,w),F=o().useMemo((function(){return(0,S.hO)(h.$$,I.sort,0)}),[I.sort]),L=(0,b.SL)(I.limit,w),N=(0,b._T)(w);return o().createElement(o().Fragment,null,o().createElement(p.Z,{title:f.N.formatMessage(l.Z.titlesPatchPackages),headerOUIA:"packages"}),o().createElement(r.Z,null,o().createElement(d.Z,{columns:h.$$,store:{rows:M,metadata:I,status:E,queryParams:$},onSort:C,onExport:A,sortBy:F,onSetPage:L,onPerPageSelect:N,compact:!0,apply:w,filterConfig:{items:[(0,g.Z)(w,$.search,f.N.formatMessage(l.Z.labelsFiltersPackagesSearchTitle),f.N.formatMessage(l.Z.labelsFiltersPackagesSearchPlaceHolder)),m(w,$.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:i.eZ})))}}}]);
//# sourceMappingURL=../sourcemaps/Packages.d393434886ba117a67d8.js.map