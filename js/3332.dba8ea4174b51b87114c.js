(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[3332],{18464:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(45697),r=a.n(n),l=a(43297),i=a.n(l),s=a(13784),o=a(36842),c=a(21508),u=function(e){var t=e.type,a=s.Yi.find((function(e){return e.value===t}))||s.Yi[3];return i().createElement(o.P,{hasGutter:!0},i().createElement(c.J,null,a.icon),i().createElement(c.J,{isFilled:!0},a.label))};u.propTypes={type:r().number};const m=u},14240:(e,t,a)=>{"use strict";a.d(t,{$6:()=>T,DL:()=>M,HR:()=>N,MN:()=>_,UO:()=>Z,WX:()=>k,eD:()=>h,mN:()=>y});var n=a(6202),r=a(219),l=a(74183),i=a(86728),s=a(34348),o=a(71070),c=a(75663),u=a(43297),m=a.n(u),d=a(32132),p=a(30893),g=a(50470),f=a(20777),b=a(13784),v=a(45697),E=a.n(v),h=function(){return m().createElement(r.ub,{variant:r.IQ.full},m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingAdvisories)),m().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},y=function(){return m().createElement(r.ub,{variant:r.IQ.full},m().createElement(i.k,{icon:o.ZP}),m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingPackages)),m().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},N=function(){return m().createElement(r.ub,{variant:r.IQ.full},m().createElement(i.k,{icon:o.ZP}),m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingCve)),m().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},_=function(){return m().createElement(r.ub,{variant:r.IQ.full},m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingSystems)),m().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},Z=function(){return m().createElement(r.ub,{variant:r.IQ.full},m().createElement(i.k,{icon:o.ZP}),m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingTemplate)),m().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},k=function(e){var t=e.Button;return m().createElement(r.ub,{variant:r.IQ.large},m().createElement(i.k,{icon:f.ZP}),m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoTemplate)),m().createElement(l.B,null,d.N.formatMessage(p.Z.statesNoTemplateBody),m().createElement("br",null),m().createElement("br",null),m().createElement("a",{href:b.Yb,target:"__blank",rel:"noopener noreferrer"},d.N.formatMessage(p.Z.statesNoTemplateLink)," ",m().createElement(g.default,null)),m().createElement("br",null),m().createElement("br",null),m().createElement(t,null)))};k.propTypes={Button:E().node};var M=function(){return m().createElement(r.ub,{variant:r.IQ.large},m().createElement(i.k,{icon:c.ZP}),m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoSmartManagementHeader)),m().createElement(l.B,null,d.N.formatMessage(p.Z.statesNoSmartManagementBody,{br:m().createElement("br",null)})))},T=function(e){var t=e.onButtonClick;return m().createElement(r.ub,{variant:r.IQ.full},m().createElement(i.k,{icon:f.ZP}),m().createElement(s.Title,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.templateNoAppliedSystemsTitle)),m().createElement(l.B,null,m().createElement(n.Button,{type:"primary",onClick:t},d.N.formatMessage(p.Z.templateNoAppliedSystemsButton))))};T.propTypes={onButtonClick:E().func}},52579:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var n=a(43297),r=a.n(n),l=a(45697),i=a.n(l),s=a(56700),o=a(15984),c=a(85333),u=a(81739),m=a(87135),d=a(75663),p=a(32132),g=a(30893),f=a(6202),b=a(219),v=a(74183),E=a(86728),h=a(34348),y=a(32732),N=function(e){var t=e.titleText,a=e.bodyText,n=e.buttonText;return r().createElement(b.ub,null,r().createElement(E.k,{icon:y.ZP}),r().createElement(h.Title,{headingLevel:"h5",size:"lg"},t),r().createElement(v.B,null,a),r().createElement(f.Button,{variant:"primary",component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},n))};N.propTypes={titleText:i().string,bodyText:i().string,buttonText:i().string},N.defaultProps={titleText:"Do more with your Red Hat Enterprise Linux environment",bodyText:"Connect your systems to keep your Red Hat environment running efficiently,\n     with security and compliance with various standards.",buttonText:"Learn more about connecting your systems"};const _=N;var Z=function(e){var t=e.code,a=e.ErrorState,n=e.EmptyState,l=e.metadata,i=void 0===l?{}:l;switch(t){case 204:return r().createElement(m.Z,null);case 400:case 500:case 502:case 503:return r().createElement(o.Z,null);case 401:case 403:return r().createElement(c.Z,{icon:d.ZP,title:p.N.formatMessage(g.Z.labelsNotAuthorizedTitle),description:p.N.formatMessage(g.Z.labelsNotAuthorizedDescription),prevPageButtonText:p.N.formatMessage(g.Z.labelsReturnToPreviousPage),toLandingPageText:p.N.formatMessage(g.Z.labelsReturnToLandingPage)});case 404:return r().createElement(s.Z,null);default:return a&&r().createElement(a,null)||n&&r().createElement(n,null)||!i.has_systems&&r().createElement(_,null)||r().createElement(u.Z,{colSize:5,rowSize:20})}};Z.propTypes={code:i().number,ErrorState:i().element,EmptyState:i().element,metadata:i().object.isRequired};const k=Z},55970:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(36001),r=a(42057),l=a(50470),i=a(45697),s=a.n(i),o=a(43297),c=a.n(o),u=function(e){var t=e.link,a=e.text;return c().createElement("a",{href:t,target:"__blank"},c().createElement(n.k,{flex:{default:"inlineFlex"}},c().createElement(r.B,{spacer:{default:"spacerSm"}},a),c().createElement(r.B,{spacer:{default:"spacerSm"}},c().createElement(l.default,null))))};u.propTypes={link:s().string,text:s().string};const m=u},7665:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(43297),r=a.n(n),l=a(34348),i=a(36001),s=a(42057),o=a(32132),c=a(30893),u=a(52491);const m=function(){return r().createElement(i.k,{flex:{default:"column"}},r().createElement(s.B,{spacer:{default:"spacerNone"}},r().createElement(l.Title,{headingLevel:"h6"},o.N.formatMessage(c.Z.labelsColumnsReboot))),r().createElement(s.B,{spacer:{default:"spacerSm"}},r().createElement(i.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},r().createElement(s.B,null,r().createElement(u.ZP,{size:"sm",color:"var(--pf-global--danger-color--100)"})," "),r().createElement(s.B,{isFilled:!0},o.N.formatMessage(c.Z.textRebootIsRequired)))))}},53074:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(83215),r=a(45697),l=a.n(r),i=a(43297),s=a.n(i),o=a(28216),c=a(22663),u=a(67463),m=a(32132),d=a(30893),p=function(e){var t=e.remediationProvider,a=e.isDisabled,r=e.isLoading,l=(0,o.I0)();return s().createElement(c.Z,{appName:"remediations",module:"./RemediationButton",fallback:s().createElement(u.Spinner,{size:u.spinnerSize.lg}),dataProvider:t,onRemediationCreated:function(e){l((0,n.wN)(e.getNotification()))},isDisabled:a,buttonProps:{isLoading:r}},m.N.formatMessage(d.Z.labelsRemediate))};p.propTypes={remediationProvider:l().func,isDisabled:l().bool,isLoading:l().bool};const g=p},36248:(e,t,a)=>{"use strict";a.d(t,{nf:()=>O,KW:()=>C,GF:()=>j,k6:()=>A,dn:()=>F,CN:()=>I,vR:()=>L,yF:()=>D,Yk:()=>z,ub:()=>q});var n=a(4942),r=a(45987),l=a(94654),i=a.n(l),s=a(20018),o=a(53325),c=a(19210),u=a(35240),m=a(43297),d=a.n(m),p=a(334),g=a(30893),f=a(18464),b=a(63540),v=a(19017),E=a(45697),h=a.n(E),y=a(13784),N=a(5391),_=a(32132),Z=a(55970),k=function(e){var t=e.children;return d().createElement("span",{className:"patchman-label"},t)};k.propTypes={children:h().any};const M=k;var T=a(7665),S=function(e){var t=e.row,a=(0,N.r)(t.attributes.severity);return d().createElement(s.D,{className:"patch-advisory-description"},t.attributes.cve_count>0&&d().createElement(v.Gn,{component:v.F_.dl,style:{"--pf-c-content--dl--RowGap":"0.5rem"}},d().createElement(o.Ts,{component:o.v$.dt},_.N.formatMessage(g.Z.labelsSeverity)),d().createElement(o.Ts,{component:o.v$.dd},d().createElement(c.ZP,{size:"sm",color:a.color}),"  ",a.label),d().createElement(o.Ts,{component:o.v$.dt},_.N.formatMessage(g.Z.labelsCves)),d().createElement(o.Ts,{component:o.v$.dd},t.attributes.cve_count)),d().createElement(M,null,_.N.formatMessage(g.Z.labelsDescription)),d().createElement(b.xv,{component:b.qO.p,style:{whiteSpace:"pre-line"}},(0,N.$G)(t.attributes.description.replace(new RegExp("\\n(?=[^\\n])","g"),""),570,(0,N.cX)(y.w8.advisories,t.id,_.N.formatMessage(g.Z.linksReadMore)))),t.attributes.reboot_required&&d().createElement(T.Z,null),(0,N.q5)(t.id)&&d().createElement(Z.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:_.N.formatMessage(g.Z.linksViewPackagesAndErrata)}))};S.propTypes={row:h().shape({id:h().string,attributes:h().object,reboot_required:h().bool})};var x=a(14240),P=a(91433),w=["id"];function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function R(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e,t,a){return 0!==e.length?i()(e,(function(e,n){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==a[e.id],cells:[{title:(0,N.cX)(y.w8.advisories,e.id)},{title:(0,N.Or)(e.attributes.synopsis)},{title:d().createElement(f.Z,{type:e.attributes.advisory_type_name})},{title:(0,N.cX)(y.w8.advisories,e.id,e.attributes.applicable_systems)},{title:e.attributes.reboot_required&&_.N.formatMessage(g.Z.labelsRebootRequired)||_.N.formatMessage(g.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:d().createElement(S,{row:e})}],parent:2*n,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:5},title:d().createElement(x.eD,null)}]}]},L=function(e,t,a,n){return 0!==e.length?i()(e,(function(e,n){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==a[e.id],cells:[{title:(0,N.cX)(y.w8.advisories,e.id)},{title:(0,N.Or)(e.attributes.synopsis)},{title:d().createElement(f.Z,{type:e.attributes.advisory_type_name})},{title:e.attributes.reboot_required&&_.N.formatMessage(g.Z.labelsRebootRequired)||_.N.formatMessage(g.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:d().createElement(S,{row:e})}],parent:2*n,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:6},title:!n.search&&n.filter&&0===Object.keys(n.filter).length&&d().createElement(P.f,null)||d().createElement(x.eD,null)}]}]},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e.map((function(e){var a=e.id,n=(0,r.Z)(e,w),l=n.packages_installed,i=n.rhba_count,s=n.rhsa_count,o=n.rhea_count,c=n.os_name,u=n.os_major,m=n.os_minor,d=n.other_count,p=n.rhsm,g=n.tags,f=n.last_upload;return R(R({id:a},n),{},{key:Math.random().toString()+a,packages_installed:l,applicable_advisories:[o||0,i||0,s||0,d||0],operating_system:{osName:c&&"".concat(n.os_name," ").concat(u,".").concat(m)||"N/A",rhsm:p},selected:void 0!==t[a],tags:g,updated:f})}));return a||[]},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=e&&e.map((function(e){return{id:e.id,key:Math.random().toString()+e.id,display_name:e.display_name,installed_evra:e.installed_evra,available_evra:e.updatable&&e.available_evra||e.installed_evra,disableCheckbox:!e.updatable,updatable:e.updatable,upgradable:e.updatable,selected:void 0!==t[e.id],tags:e.tags}}));return a||[]},D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&0!==e.length?e.map((function(e){var a="".concat(e.name,"-").concat(e.evra),n=e.updates||[],r=n[n.length-1];return{id:a,key:a,selected:void 0!==t[a],disableCheckbox:!r,cells:[{title:(0,N.cX)(y.w8.packages,e.name)},{title:e.evra},{title:r&&r.evra||e.evra},{title:(0,N.vy)(e.updatable)},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(x.mN,null)}]}]},A=function(e){return e&&0!==e.length?e.map((function(e){return{id:e.name,key:e.name,cells:[{title:(0,N.cX)(y.w8.packages,e.name)},{title:e.systems_installed},{title:e.systems_updatable},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(x.mN,null)}]}]},C=function(e){return 0!==e.length?e.map((function(e){var t=e.attributes,a=e.id,n=y.QG.filter((function(e){return e.label===t.impact}))[0];return{id:a,key:a,cells:[{title:d().createElement("a",{href:"".concat(document.baseURI,"insights/vulnerability/cves/").concat(t.synopsis)},t.synopsis)},{title:d().createElement(s.D,null,d().createElement(o.Ts,{component:o.v$.dd},d().createElement(c.ZP,{size:"sm",color:n.color}),"  ",n.label)),value:n.label},{title:parseFloat(t.cvss_score).toFixed(1)}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:d().createElement(x.HR,null)}]}]},q=function(e,t){return 0!==e.length?e.map((function(e){var a=e.attributes,n=e.id;return{id:n,key:n,selected:void 0!==t[e.id],cells:[{title:a.display_name},{title:a.os||"N/A"},{title:a.baseline_name||"No template"}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:d().createElement(x.MN,null)}]}]},I=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=e&&e.map((function(e){return{id:e.id,displayName:e.name,key:e.id,selected:void 0!==t[e.id],cells:[{title:d().createElement(p.Link,{to:{pathname:"/templates/".concat(e.id)}},e.name)},{title:e.systems||_.N.formatMessage(g.Z.labelsTemplateNoSystems)},{title:(0,u.Un)(e.last_edited)},{title:(0,u.Un)(e.published)},{title:e.creator}]}}));return(null==n?void 0:n.length)>0?n:a.search||Object.keys(a.filter).length?[{heightAuto:!0,cells:[{props:{colSpan:6},title:d().createElement(x.UO,null)}]}]:[]},F=function(e){return e&&e.map((function(e){return{id:e.inventory_id,displayName:e.display_name,key:e.inventory_id,cells:[{title:d().createElement(p.Link,{to:{pathname:"/systems/".concat(e.id)}},e.attributes.display_name)},{title:"<OS placeholder>"},{title:"<Tags placeholder>"},{title:"<Last seen placeholder>"}]}}))}},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{},314:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/3332.39874dc53fef3ca9a7a2a79f9b1b9ffe.js.map