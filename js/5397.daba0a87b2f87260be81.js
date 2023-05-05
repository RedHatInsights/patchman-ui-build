(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[5397],{18464:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(45697),r=a.n(n),l=a(43297),s=a.n(l),i=a(13784),o=a(79851),c=a(34512),u=function(e){var t=e.type,a=i.Yi.find((function(e){return e.value===t}))||i.Yi[3];return s().createElement(o.P,{hasGutter:!0},s().createElement(c.J,null,a.icon),s().createElement(c.J,{isFilled:!0},a.label))};u.propTypes={type:r().string};const m=u},14240:(e,t,a)=>{"use strict";a.d(t,{$6:()=>N,HR:()=>h,MN:()=>E,UO:()=>y,WX:()=>_,eD:()=>v,mN:()=>b});var n=a(47173),r=a(9947),l=a(75106),s=a(38424),i=a(60485),o=a(80810),c=a(43297),u=a.n(c),m=a(32132),d=a(30893),p=a(7081),g=a(45697),f=a.n(g),v=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(d.Z.statesNoMatchingAdvisories)),u().createElement(l.B,null,m.N.formatMessage(d.Z.textEmptyStateBody)))},b=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(s.k,{icon:o.ZP}),u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(d.Z.statesNoMatchingPackages)),u().createElement(l.B,null,m.N.formatMessage(d.Z.textEmptyStateBody)))},h=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(s.k,{icon:o.ZP}),u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(d.Z.statesNoMatchingCve)),u().createElement(l.B,null,m.N.formatMessage(d.Z.textEmptyStateBody)))},E=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(d.Z.statesNoMatchingSystems)),u().createElement(l.B,null,m.N.formatMessage(d.Z.textEmptyStateBody)))},y=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(s.k,{icon:o.ZP}),u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(d.Z.statesNoMatchingTemplate)),u().createElement(l.B,null,m.N.formatMessage(d.Z.textEmptyStateBody)))},_=function(e){var t=e.Button;return u().createElement(r.u,{variant:r.I.large},u().createElement(s.k,{icon:p.ZP}),u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(d.Z.statesNoTemplate)),u().createElement(l.B,null,m.N.formatMessage(d.Z.statesNoTemplateBody),u().createElement("br",null),u().createElement("br",null),u().createElement(t,null)))};_.propTypes={Button:f().node};var N=function(e){var t=e.onButtonClick;return u().createElement(r.u,{variant:r.I.full},u().createElement(s.k,{icon:p.ZP}),u().createElement(i.D,{headingLevel:"h5",size:"lg"},m.N.formatMessage(d.Z.templateNoAppliedSystemsTitle)),u().createElement(l.B,null,u().createElement(n.zx,{type:"primary",onClick:t},m.N.formatMessage(d.Z.templateNoAppliedSystemsButton))))};N.propTypes={onButtonClick:f().func}},52579:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var n=a(43297),r=a.n(n),l=a(45697),s=a.n(l),i=a(56700),o=a(15984),c=a(85333),u=a(81739),m=a(87135),d=a(99332),p=a(32132),g=a(30893),f=a(47173),v=a(9947),b=a(75106),h=a(38424),E=a(60485),y=a(12136),_=function(e){var t=e.titleText,a=e.bodyText,n=e.buttonText;return r().createElement(v.u,null,r().createElement(h.k,{icon:y.ZP}),r().createElement(E.D,{headingLevel:"h5",size:"lg"},t),r().createElement(b.B,null,a),r().createElement(f.zx,{variant:"primary",component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},n))};_.propTypes={titleText:s().string,bodyText:s().string,buttonText:s().string},_.defaultProps={titleText:"Do more with your Red Hat Enterprise Linux environment",bodyText:"Connect your systems to keep your Red Hat environment running efficiently,\n     with security and compliance with various standards.",buttonText:"Learn more about connecting your systems"};const N=_;var Z=function(e){var t=e.code,a=e.ErrorState,n=e.EmptyState,l=e.metadata,s=void 0===l?{}:l;switch(t){case 204:return r().createElement(m.Z,null);case 400:case 500:case 502:case 503:return r().createElement(o.Z,null);case 401:case 403:return r().createElement(c.Z,{icon:d.ZP,title:p.N.formatMessage(g.Z.labelsNotAuthorizedTitle),description:p.N.formatMessage(g.Z.labelsNotAuthorizedDescription),prevPageButtonText:p.N.formatMessage(g.Z.labelsReturnToPreviousPage),toLandingPageText:p.N.formatMessage(g.Z.labelsReturnToLandingPage)});case 404:return r().createElement(i.Z,null);default:return a&&r().createElement(a,null)||n&&r().createElement(n,null)||!s.has_systems&&r().createElement(N,null)||r().createElement(u.Z,{colSize:5,rowSize:20})}};Z.propTypes={code:s().number,ErrorState:s().element,EmptyState:s().element,metadata:s().object.isRequired};const k=Z},55970:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(28191),r=a(92298),l=a(83567),s=a(45697),i=a.n(s),o=a(43297),c=a.n(o),u=function(e){var t=e.link,a=e.text;return c().createElement("a",{href:t,target:"__blank"},c().createElement(n.k,{flex:{default:"inlineFlex"}},c().createElement(r.B,{spacer:{default:"spacerSm"}},a),c().createElement(r.B,{spacer:{default:"spacerSm"}},c().createElement(l.ZP,null))))};u.propTypes={link:i().string,text:i().string};const m=u},7665:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(43297),r=a.n(n),l=a(60485),s=a(28191),i=a(92298),o=a(32132),c=a(30893),u=a(26076);const m=function(){return r().createElement(s.k,{flex:{default:"column"}},r().createElement(i.B,{spacer:{default:"spacerNone"}},r().createElement(l.D,{headingLevel:"h6"},o.N.formatMessage(c.Z.labelsColumnsReboot))),r().createElement(i.B,{spacer:{default:"spacerSm"}},r().createElement(s.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},r().createElement(i.B,null,r().createElement(u.ZP,{size:"sm",color:"var(--pf-global--danger-color--100)"})," "),r().createElement(i.B,{isFilled:!0},o.N.formatMessage(c.Z.textRebootIsRequired)))))}},53074:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(83215),r=a(45697),l=a.n(r),s=a(43297),i=a.n(s),o=a(28216),c=a(22663),u=a(2372),m=a(32132),d=a(30893),p=function(e){var t=e.remediationProvider,a=e.isDisabled,r=e.isLoading,l=(0,o.I0)();return i().createElement(c.Z,{appName:"remediations",module:"./RemediationButton",fallback:i().createElement(u.$,{size:"lg"}),dataProvider:t,onRemediationCreated:function(e){l((0,n.wN)(e.getNotification()))},isDisabled:a,buttonProps:{isLoading:r}},m.N.formatMessage(d.Z.labelsRemediate))};p.propTypes={remediationProvider:l().func,isDisabled:l().bool,isLoading:l().bool};const g=p},36248:(e,t,a)=>{"use strict";a.d(t,{nf:()=>D,mf:()=>j,KW:()=>I,GF:()=>L,k6:()=>C,dn:()=>X,CN:()=>U,vR:()=>z,yF:()=>q,Yk:()=>A,ub:()=>F});var n=a(4942),r=a(45987),l=a(94654),s=a.n(l),i=a(68774),o=a(78140),c=a(27578),u=a(35240),m=a(43297),d=a.n(m),p=a(96620),g=a(30893),f=a(18464),v=a(68340),b=a(25834),h=a(45697),E=a.n(h),y=a(13784),_=a(5391),N=a(32132),Z=a(55970),k=function(e){var t=e.children;return d().createElement("span",{className:"patchman-label"},t)};k.propTypes={children:E().any};const M=k;var S=a(7665),x=function(e){var t=e.row,a=(0,_.r)(t.attributes.severity);return d().createElement(i.D,{className:"patch-advisory-description"},t.attributes.cve_count>0&&d().createElement(b.G,{component:b.F.dl,style:{"--pf-c-content--dl--RowGap":"0.5rem"}},d().createElement(o.T,{component:o.v.dt},N.N.formatMessage(g.Z.labelsSeverity)),d().createElement(o.T,{component:o.v.dd},d().createElement(c.ZP,{size:"sm",color:a.color}),"  ",a.label),d().createElement(o.T,{component:o.v.dt},N.N.formatMessage(g.Z.labelsCves)),d().createElement(o.T,{component:o.v.dd},t.attributes.cve_count)),d().createElement(M,null,N.N.formatMessage(g.Z.labelsDescription)),d().createElement(v.x,{component:v.q.p,style:{whiteSpace:"pre-line"}},(0,_.$G)(t.attributes.description.replace(new RegExp("\\n(?=[^\\n])","g"),""),570,(0,_.cX)(y.w8.advisories,t.id,N.N.formatMessage(g.Z.linksReadMore)))),t.attributes.reboot_required&&d().createElement(S.Z,null),(0,_.q5)(t.id)&&d().createElement(Z.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:N.N.formatMessage(g.Z.linksViewPackagesAndErrata)}))};x.propTypes={row:E().shape({id:E().string,attributes:E().object,reboot_required:E().bool})};var T=a(14240),P=a(91433),w=["id"],R=["id"];function B(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?B(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):B(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var D=function(e,t,a){return 0!==e.length?s()(e,(function(e,n){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==a[e.id],cells:[{title:(0,_.cX)(y.w8.advisories,e.id)},{title:(0,_.Or)(e.attributes.synopsis)},{title:d().createElement(f.Z,{type:e.attributes.advisory_type_name})},{title:(0,_.cX)(y.w8.advisories,e.id,e.attributes.applicable_systems)},{title:e.attributes.reboot_required&&N.N.formatMessage(g.Z.labelsRebootRequired)||N.N.formatMessage(g.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:d().createElement(x,{row:e})}],parent:2*n,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:5},title:d().createElement(T.eD,null)}]}]},z=function(e,t,a,n){return 0!==e.length?s()(e,(function(e,n){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==a[e.id],disableSelection:"Applicable"===e.attributes.status,cells:[{title:(0,_.cX)(y.w8.advisories,e.id)},{title:(0,_.Or)(e.attributes.synopsis)},{title:e.attributes.status},{title:d().createElement(f.Z,{type:e.attributes.advisory_type_name})},{title:e.attributes.reboot_required&&N.N.formatMessage(g.Z.labelsRebootRequired)||N.N.formatMessage(g.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:d().createElement(x,{row:e})}],parent:2*n,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:6},title:!n.search&&n.filter&&0===Object.keys(n.filter).length&&d().createElement(P.f,null)||d().createElement(T.eD,null)}]}]},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.map((function(e){var a=e.id,n=(0,r.Z)(e,w),l=n.packages_installed,s=n.rhba_count,i=n.rhsa_count,o=n.rhea_count,c=n.other_count,u=n.os,m=n.rhsm,d=n.tags,p=n.last_upload;return O(O({id:a},n),{},{key:Math.random().toString()+a,packages_installed:l,applicable_advisories:[o||0,s||0,i||0,c||0],operating_system:{osName:u||"N/A",rhsm:m},selected:void 0!==t[a],tags:d,updated:p})}))||[]},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&e.map((function(e){return{id:e.id,key:Math.random().toString()+e.id,display_name:e.display_name,installed_evra:e.installed_evra,available_evra:e.updatable&&e.available_evra||e.installed_evra,disableSelection:!e.updatable,updatable:e.updatable,upgradable:e.updatable,selected:void 0!==t[e.id],tags:e.tags}}))||[]},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.map((function(e){var a=e.id,n=(0,r.Z)(e,R),l=n.packages_installed,s=n.rhba_count,i=n.rhsa_count,o=n.rhea_count,c=n.other_count,u=n.os,m=n.rhsm,d=n.tags,p=n.last_upload,g=n.status;return O(O({id:a},n),{},{key:Math.random().toString()+a,packages_installed:l,applicable_advisories:[o||0,s||0,i||0,c||0],operating_system:{osName:u||"N/A",rhsm:m},selected:void 0!==t[a],tags:d,updated:p,disableSelection:"Installable"!==g})}))||[]},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&0!==e.length?e.map((function(e){var a="".concat(e.name,"-").concat(e.evra),n=e.updates||[],r=n[n.length-1];return{id:a,key:a,selected:void 0!==t[a],disableSelection:!r,cells:[{title:(0,_.cX)(y.w8.packages,e.name)},{title:e.evra},{title:r&&r.evra||e.evra},{title:(0,_.vy)(e.updatable)},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(T.mN,null)}]}]},C=function(e){return e&&0!==e.length?e.map((function(e){return{id:e.name,key:e.name,cells:[{title:(0,_.cX)(y.w8.packages,e.name)},{title:e.systems_installed},{title:e.systems_updatable},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(T.mN,null)}]}]},I=function(e){return 0!==e.length?e.map((function(e){var t=e.attributes,a=e.id,n=y.QG.filter((function(e){return e.label===t.impact}))[0];return{id:a,key:a,cells:[{title:d().createElement("a",{href:"".concat(document.baseURI,"insights/vulnerability/cves/").concat(t.synopsis)},t.synopsis)},{title:d().createElement(i.D,null,d().createElement(o.T,{component:o.v.dd},d().createElement(c.ZP,{size:"sm",color:n.color}),"  ",n.label)),value:n.label},{title:parseFloat(t.cvss_score).toFixed(1)}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:d().createElement(T.HR,null)}]}]},F=function(e,t){return 0!==e.length?e.map((function(e){var a=e.attributes,n=e.id;return{id:n,key:n,selected:void 0!==t[e.id],cells:[{title:a.display_name},{title:a.os||"N/A"},{title:a.baseline_name||"No template"},{title:(0,u.Un)(a.last_upload)}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:d().createElement(T.MN,null)}]}]},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=e&&e.map((function(e){return{id:e.id,displayName:e.name,key:e.id,selected:void 0!==t[e.id],cells:[{title:d().createElement(p.Link,{to:{pathname:"/templates/".concat(e.id)}},e.name)},{title:e.systems||N.N.formatMessage(g.Z.labelsTemplateNoSystems)},{title:(0,u.Un)(e.last_edited)},{title:(0,u.Un)(e.published)},{title:e.creator}]}}));return(null==n?void 0:n.length)>0?n:a.search||Object.keys(a.filter).length?[{heightAuto:!0,cells:[{props:{colSpan:6},title:d().createElement(T.UO,null)}]}]:[]},X=function(e){return e&&e.map((function(e){return e=O(O({},e),e.attributes),O(O({},e),{},{id:e.inventory_id,display_name:e.display_name,key:e.inventory_id,os:{osName:e.os,rhsm:e.rhsm},last_upload:e.last_upload,tags:e.tags})}))}},10108:()=>{},98379:()=>{},56024:()=>{},43390:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/5397.c1d4b4694880dad003e0e14941fa81ab.js.map