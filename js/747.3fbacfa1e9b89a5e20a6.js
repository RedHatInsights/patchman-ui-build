(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[747],{5747:(e,t,r)=>{"use strict";r.d(t,{G:()=>f,OC:()=>i,Kq:()=>p});var s=r(85061),a=r(96156),n=r(22789),c=r(48881),o=r(86032),u=r(57358);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={rows:[],entities:[],selectedRows:[],queryParams:{},systemsParams:{},affectedSystemsParams:{},metadata:{limit:20,offset:0,total_items:0}},f=function(e,t){if(t.loaded){var r=t.columns.filter((function(e){return"updated"===e.key}));return r=[m(m({},r[0]),{},{key:"last_upload"})],m(m({},t),{},{columns:[].concat((0,s.Z)(e||[]),(0,s.Z)(r||[])),rows:(0,o.Yk)(t.rows,t.selectedRows)})}return t},i=function(e,t){return t.loaded?m(m({},t),{},{columns:e,rows:(0,o.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return function(){var r,s,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,o=arguments.length>1?arguments[1]:void 0,l=m({},a);switch(o.type){case"LOAD_ENTITIES_FULFILLED":return t(e,a);case n.pl:return null===(r=o.payload)||void 0===r||delete r.filter,l.systemsParams=(0,u.KZ)(l.systemsParams,o.payload),l;case n.Rr:return null===(s=o.payload)||void 0===s||delete s.filter,l.affectedSystemsParams=(0,u.KZ)(l.affectedSystemsParams,o.payload),l;case n.pW:return l.packageSystemsParams=(0,u.KZ)(l.packageSystemsParams,o.payload),l;case"SELECT_ENTITY":return(0,c.hd)(l,o);case n.Cg:return(0,c.P7)(l,o);case n.CLEAR_SYSTEMS_PARAMS:return m(m({},d),{},{systemsParams:l.systemsParams});case n.CLEAR_AFFECTED_SYSTEMS_PARAMS:return m(m({},d),{},{affectedSystemsParams:l.affectedSystemsParams});case n.CLEAR_PACKAGE_SYSTEMS_PARAMS:return m(m({},d),{},{packageSystemsParams:l.packageSystemsParams});default:return a}}}}}]);
//# sourceMappingURL=../sourcemaps/747.26c68c489bb1dfe1674f.js.map