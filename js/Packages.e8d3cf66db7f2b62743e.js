(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[677],{44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var s=a(28481),r=a(86350),n=a(77865),o=a.n(n),l=a(61084),c=a(30893),u=a(89421),i=a(13784),f=a(32132);const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.systems_updatable,s=function(t){e({filter:{systems_updatable:t}})};return{label:f.N.formatMessage(c.Z.labelsFiltersStatus),type:u.Yu.checkbox,filterValues:{onChange:function(e,t){s(t)},items:i.Tl,value:a,placeholder:f.N.formatMessage(c.Z.labelsColumnsStatusPlaceholder)}}};var g=a(90747),p=a(49642),h=a(38776),d=a(64270),k=a(9557),_=a(11220),P=a(86032),S=a(57358),b=a(91607),v=a(334);const Z=function(){var e=(0,l.useDispatch)(),t=o().useState(!0),a=(0,s.Z)(t,2),n=a[0],u=a[1],Z=(0,v.useHistory)();(0,b.Iw)("Packages");var y=(0,l.useSelector)((function(e){return e.PackagesListStore.rows})),M=o().useMemo((function(){return(0,P.k6)(y)}),[y]),C=(0,l.useSelector)((function(e){return e.PackagesListStore.status})),F=(0,l.useSelector)((function(e){return e.PackagesListStore.metadata})),I=(0,l.useSelector)((function(e){return e.PackagesListStore.queryParams}));function L(t){e((0,k.If)(t))}(0,b.KW)((function(){n?(L((0,S.PZ)(Z.location.search)),u(!1)):(Z.push((0,S.R_)(I)),e((0,k.kU)(I)))}),[I,n]);var N=(0,b.AR)("packages",I,{csv:_.pq,json:_.pW},e),$=(0,b._f)(d.$$,L),w=o().useMemo((function(){return(0,S.hO)(d.$$,F.sort,0)}),[F.sort]),A=(0,b.SL)(F.limit,L),E=(0,b._T)(L);return o().createElement(o().Fragment,null,o().createElement(p.Z,{title:f.N.formatMessage(c.Z.titlesPatchPackages),headerOUIA:"packages"}),o().createElement(r.Z,null,o().createElement(h.Z,{columns:d.$$,store:{rows:M,metadata:F,status:C,queryParams:I},onSort:$,onExport:N,sortBy:w,onSetPage:A,onPerPageSelect:E,compact:!0,apply:L,filterConfig:{items:[(0,g.Z)(L,I.search,f.N.formatMessage(c.Z.labelsFiltersPackagesSearchTitle),f.N.formatMessage(c.Z.labelsFiltersPackagesSearchPlaceHolder)),m(L,I.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:i.eZ,searchChipLabel:f.N.formatMessage(c.Z.labelsFiltersPackagesSearchTitle)})))}}}]);