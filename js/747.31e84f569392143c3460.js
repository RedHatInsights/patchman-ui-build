(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[747],{5747:(e,t,r)=>{"use strict";r.d(t,{G:()=>i,OC:()=>f,Kq:()=>p});var s=r(85061),a=r(96156),n=r(22789),c=r(48881),o=r(86032),l=r(57358);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){(0,a.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var d={rows:[],entities:[],selectedRows:[],queryParams:{},systemsParams:{},affectedSystemsParams:{},metadata:{limit:20,offset:0,total_items:0}},i=function(e,t){if(t.loaded){var r=t.columns.filter((function(e){return"updated"===e.key}));return r=[m(m({},r[0]),{},{key:"last_upload"})],m(m({},t),{},{columns:[].concat((0,s.Z)(e||[]),(0,s.Z)(r||[])),rows:(0,o.Yk)(t.rows,t.selectedRows)})}return t},f=function(e,t){return t.loaded?m(m({},t),{},{columns:e,rows:(0,o.GF)(t.rows,t.selectedRows)}):t},p=function(e,t){return function(){var r,s,a,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,u=arguments.length>1?arguments[1]:void 0,i=m({},o);switch(u.type){case"LOAD_ENTITIES_FULFILLED":return t(e,o);case n.pl:return null===(r=u.payload)||void 0===r||delete r.filter,i.systemsParams=(0,l.KZ)(i.systemsParams,u.payload),i;case n.Rr:return null===(s=u.payload)||void 0===s||delete s.filter,i.affectedSystemsParams=(0,l.KZ)(i.affectedSystemsParams,u.payload),i;case n.pW:return null===(a=u.payload)||void 0===a||delete a.filter,i.packageSystemsParams=(0,l.KZ)(i.packageSystemsParams,u.payload),i;case"SELECT_ENTITY":return(0,c.hd)(i,u);case n.Cg:return(0,c.P7)(i,u);case n.CLEAR_SYSTEMS_PARAMS:return m(m({},d),{},{systemsParams:i.systemsParams});case n.CLEAR_AFFECTED_SYSTEMS_PARAMS:return m(m({},d),{},{affectedSystemsParams:i.affectedSystemsParams});case n.CLEAR_PACKAGE_SYSTEMS_PARAMS:return m(m({},d),{},{packageSystemsParams:i.packageSystemsParams});default:return o}}}}}]);
//# sourceMappingURL=../sourcemaps/747.165176fe767278544c6a.js.map