(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[677],{44662:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Z});var s=a(28481),r=a(86350),n=a(77865),o=a.n(n),l=a(61084),c=a(30893),i=a(44612),u=a(13784),f=a(32132);const m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=t.systems_updatable,s=function(t){e({filter:{systems_updatable:t}})};return{label:f.N.formatMessage(c.Z.labelsFiltersUpdatable),type:i.Y.checkbox,filterValues:{onChange:function(e,t){s(t)},items:u.Tl,value:a,placeholder:f.N.formatMessage(c.Z.labelsFiltersUpdatablePlaceholder)}}};var p=a(90747),g=a(49642),d=a(38776),h=a(64270),k=a(9557),_=a(11220),b=a(57668),P=a(57358),S=a(91607),v=a(334);const Z=function(){var e=(0,l.useDispatch)(),t=o().useState(!0),a=(0,s.Z)(t,2),n=a[0],i=a[1],Z=(0,v.useHistory)();(0,S.Iw)("Packages");var y=(0,l.useSelector)((function(e){return e.PackagesListStore.rows})),M=o().useMemo((function(){return(0,b.k6)(y)}),[y]),F=(0,l.useSelector)((function(e){return e.PackagesListStore.status})),U=(0,l.useSelector)((function(e){return e.PackagesListStore.metadata})),I=(0,l.useSelector)((function(e){return e.PackagesListStore.queryParams}));function L(t){e((0,k.If)(t))}(0,S.KW)((function(){n?(L((0,P.PZ)(Z.location.search)),i(!1)):(Z.push((0,P.R_)(I)),e((0,k.kU)(I)))}),[I,n]);var N=(0,S.AR)("packages",I,{csv:_.pq,json:_.pW},e),$=(0,S._f)(h.$$,L),w=o().useMemo((function(){return(0,P.hO)(h.$$,U.sort,0)}),[U.sort]),A=(0,S.SL)(U.limit,L),C=(0,S._T)(L);return o().createElement(o().Fragment,null,o().createElement(g.Z,{title:f.N.formatMessage(c.Z.titlesPatchPackages),headerOUIA:"packages"}),o().createElement(r.Z,null,o().createElement(d.Z,{columns:h.$$,store:{rows:M,metadata:U,status:F,queryParams:I},onSort:$,onExport:N,sortBy:w,onSetPage:A,onPerPageSelect:C,compact:!0,apply:L,filterConfig:{items:[(0,p.Z)(L,I.search,f.N.formatMessage(c.Z.labelsFiltersPackagesSearchTitle),f.N.formatMessage(c.Z.labelsFiltersPackagesSearchPlaceHolder)),m(L,I.filter)]},remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"package-details-table",paginationOUIA:"package-details-pagination",defaultFilters:u.eZ,searchChipLabel:f.N.formatMessage(c.Z.labelsFiltersPackagesSearchTitle)})))}}}]);
//# sourceMappingURL=../sourcemaps/Packages.87849f0cf61f2b1133b3.js.map