(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[2303],{18464:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(45697),l=a.n(n),r=a(43297),i=a.n(r),s=a(13784),o=a(79851),c=a(34512),u=function(e){var t=e.type,a=s.Yi.find((function(e){return e.value===t}))||s.Yi[3];return i().createElement(o.P,{hasGutter:!0},i().createElement(c.J,null,a.icon),i().createElement(c.J,{isFilled:!0},a.label))};u.propTypes={type:l().string};const m=u},14240:(e,t,a)=>{"use strict";a.d(t,{$6:()=>k,HR:()=>E,MN:()=>y,UO:()=>_,WV:()=>Z,WX:()=>N,eD:()=>v,mN:()=>h});var n=a(47173),l=a(9947),r=a(75106),i=a(38424),s=a(60485),o=a(80810),c=a(99332),u=a(43297),m=a.n(u),d=a(32132),p=a(30893),g=a(7081),b=a(45697),f=a.n(b),v=function(){return m().createElement(l.u,{variant:l.I.full},m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingAdvisories)),m().createElement(r.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},h=function(){return m().createElement(l.u,{variant:l.I.full},m().createElement(i.k,{icon:o.ZP}),m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingPackages)),m().createElement(r.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},E=function(){return m().createElement(l.u,{variant:l.I.full},m().createElement(i.k,{icon:o.ZP}),m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingCve)),m().createElement(r.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},y=function(){return m().createElement(l.u,{variant:l.I.full},m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingSystems)),m().createElement(r.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},_=function(){return m().createElement(l.u,{variant:l.I.full},m().createElement(i.k,{icon:o.ZP}),m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingTemplate)),m().createElement(r.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},N=function(e){var t=e.Button;return m().createElement(l.u,{variant:l.I.large},m().createElement(i.k,{icon:g.ZP}),m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoTemplate)),m().createElement(r.B,null,d.N.formatMessage(p.Z.statesNoTemplateBody),m().createElement("br",null),m().createElement("br",null),m().createElement(t,null)))};N.propTypes={Button:f().node};var Z=function(){return m().createElement(l.u,{variant:l.I.large},m().createElement(i.k,{icon:c.ZP}),m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoSatelliteHeader)),m().createElement(r.B,null,d.N.formatMessage(p.Z.statesNoSatelliteBody,{br:m().createElement("br",null)})))},k=function(e){var t=e.onButtonClick;return m().createElement(l.u,{variant:l.I.full},m().createElement(i.k,{icon:g.ZP}),m().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.templateNoAppliedSystemsTitle)),m().createElement(r.B,null,m().createElement(n.zx,{type:"primary",onClick:t},d.N.formatMessage(p.Z.templateNoAppliedSystemsButton))))};k.propTypes={onButtonClick:f().func}},52579:(e,t,a)=>{"use strict";a.d(t,{Z:()=>k});var n=a(43297),l=a.n(n),r=a(45697),i=a.n(r),s=a(56700),o=a(15984),c=a(85333),u=a(81739),m=a(87135),d=a(99332),p=a(32132),g=a(30893),b=a(47173),f=a(9947),v=a(75106),h=a(38424),E=a(60485),y=a(12136),_=function(e){var t=e.titleText,a=e.bodyText,n=e.buttonText;return l().createElement(f.u,null,l().createElement(h.k,{icon:y.ZP}),l().createElement(E.D,{headingLevel:"h5",size:"lg"},t),l().createElement(v.B,null,a),l().createElement(b.zx,{variant:"primary",component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},n))};_.propTypes={titleText:i().string,bodyText:i().string,buttonText:i().string},_.defaultProps={titleText:"Do more with your Red Hat Enterprise Linux environment",bodyText:"Connect your systems to keep your Red Hat environment running efficiently,\n     with security and compliance with various standards.",buttonText:"Learn more about connecting your systems"};const N=_;var Z=function(e){var t=e.code,a=e.ErrorState,n=e.EmptyState,r=e.metadata,i=void 0===r?{}:r;switch(t){case 204:return l().createElement(m.Z,null);case 400:case 500:case 502:case 503:return l().createElement(o.Z,null);case 401:case 403:return l().createElement(c.Z,{icon:d.ZP,title:p.N.formatMessage(g.Z.labelsNotAuthorizedTitle),description:p.N.formatMessage(g.Z.labelsNotAuthorizedDescription),prevPageButtonText:p.N.formatMessage(g.Z.labelsReturnToPreviousPage),toLandingPageText:p.N.formatMessage(g.Z.labelsReturnToLandingPage)});case 404:return l().createElement(s.Z,null);default:return a&&l().createElement(a,null)||n&&l().createElement(n,null)||!i.has_systems&&l().createElement(N,null)||l().createElement(u.Z,{colSize:5,rowSize:20})}};Z.propTypes={code:i().number,ErrorState:i().element,EmptyState:i().element,metadata:i().object.isRequired};const k=Z},55970:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(28191),l=a(92298),r=a(83567),i=a(45697),s=a.n(i),o=a(43297),c=a.n(o),u=function(e){var t=e.link,a=e.text;return c().createElement("a",{href:t,target:"__blank"},c().createElement(n.k,{flex:{default:"inlineFlex"}},c().createElement(l.B,{spacer:{default:"spacerSm"}},a),c().createElement(l.B,{spacer:{default:"spacerSm"}},c().createElement(r.ZP,null))))};u.propTypes={link:s().string,text:s().string};const m=u},7665:(e,t,a)=>{"use strict";a.d(t,{Z:()=>m});var n=a(43297),l=a.n(n),r=a(60485),i=a(28191),s=a(92298),o=a(32132),c=a(30893),u=a(26076);const m=function(){return l().createElement(i.k,{flex:{default:"column"}},l().createElement(s.B,{spacer:{default:"spacerNone"}},l().createElement(r.D,{headingLevel:"h6"},o.N.formatMessage(c.Z.labelsColumnsReboot))),l().createElement(s.B,{spacer:{default:"spacerSm"}},l().createElement(i.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},l().createElement(s.B,null,l().createElement(u.ZP,{size:"sm",color:"var(--pf-global--danger-color--100)"})," "),l().createElement(s.B,{isFilled:!0},o.N.formatMessage(c.Z.textRebootIsRequired)))))}},53074:(e,t,a)=>{"use strict";a.d(t,{Z:()=>g});var n=a(83215),l=a(45697),r=a.n(l),i=a(43297),s=a.n(i),o=a(28216),c=a(22663),u=a(2372),m=a(32132),d=a(30893),p=function(e){var t=e.remediationProvider,a=e.isDisabled,l=e.isLoading,r=(0,o.I0)();return s().createElement(c.Z,{appName:"remediations",module:"./RemediationButton",fallback:s().createElement(u.$,{size:"lg"}),dataProvider:t,onRemediationCreated:function(e){r((0,n.wN)(e.getNotification()))},isDisabled:a,buttonProps:{isLoading:l}},m.N.formatMessage(d.Z.labelsRemediate))};p.propTypes={remediationProvider:r().func,isDisabled:r().bool,isLoading:r().bool};const g=p},36248:(e,t,a)=>{"use strict";a.d(t,{nf:()=>O,mf:()=>j,KW:()=>C,GF:()=>A,k6:()=>I,dn:()=>X,CN:()=>F,vR:()=>z,yF:()=>q,Yk:()=>L,ub:()=>U});var n=a(4942),l=a(45987),r=a(94654),i=a.n(r),s=a(68774),o=a(78140),c=a(27578),u=a(35240),m=a(43297),d=a.n(m),p=a(96620),g=a(30893),b=a(18464),f=a(68340),v=a(25834),h=a(45697),E=a.n(h),y=a(13784),_=a(5391),N=a(32132),Z=a(55970),k=function(e){var t=e.children;return d().createElement("span",{className:"patchman-label"},t)};k.propTypes={children:E().any};const M=k;var S=a(7665),x=function(e){var t=e.row,a=(0,_.r)(t.attributes.severity);return d().createElement(s.D,{className:"patch-advisory-description"},t.attributes.cve_count>0&&d().createElement(v.G,{component:v.F.dl,style:{"--pf-c-content--dl--RowGap":"0.5rem"}},d().createElement(o.T,{component:o.v.dt},N.N.formatMessage(g.Z.labelsSeverity)),d().createElement(o.T,{component:o.v.dd},d().createElement(c.ZP,{size:"sm",color:a.color}),"  ",a.label),d().createElement(o.T,{component:o.v.dt},N.N.formatMessage(g.Z.labelsCves)),d().createElement(o.T,{component:o.v.dd},t.attributes.cve_count)),d().createElement(M,null,N.N.formatMessage(g.Z.labelsDescription)),d().createElement(f.x,{component:f.q.p,style:{whiteSpace:"pre-line"}},(0,_.$G)(t.attributes.description.replace(new RegExp("\\n(?=[^\\n])","g"),""),570,(0,_.cX)(y.w8.advisories,t.id,N.N.formatMessage(g.Z.linksReadMore)))),t.attributes.reboot_required&&d().createElement(S.Z,null),(0,_.q5)(t.id)&&d().createElement(Z.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:N.N.formatMessage(g.Z.linksViewPackagesAndErrata)}))};x.propTypes={row:E().shape({id:E().string,attributes:E().object,reboot_required:E().bool})};var P=a(14240),T=a(91433),w=["id"],B=["id"];function R(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function D(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?R(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):R(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var O=function(e,t,a){return 0!==e.length?i()(e,(function(e,n){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==a[e.id],cells:[{title:(0,_.cX)(y.w8.advisories,e.id)},{title:(0,_.Or)(e.attributes.synopsis)},{title:d().createElement(b.Z,{type:e.attributes.advisory_type_name})},{title:(0,_.cX)(y.w8.advisories,e.id,e.attributes.applicable_systems)},{title:e.attributes.reboot_required&&N.N.formatMessage(g.Z.labelsRebootRequired)||N.N.formatMessage(g.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:d().createElement(x,{row:e})}],parent:2*n,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:5},title:d().createElement(P.eD,null)}]}]},z=function(e,t,a,n){return 0!==e.length?i()(e,(function(e,n){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==a[e.id],disableSelection:"Applicable"===e.attributes.status,cells:[{title:(0,_.cX)(y.w8.advisories,e.id)},{title:(0,_.Or)(e.attributes.synopsis)},{title:e.attributes.status},{title:d().createElement(b.Z,{type:e.attributes.advisory_type_name})},{title:e.attributes.reboot_required&&N.N.formatMessage(g.Z.labelsRebootRequired)||N.N.formatMessage(g.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:d().createElement(x,{row:e})}],parent:2*n,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:6},title:!n.search&&n.filter&&0===Object.keys(n.filter).length&&d().createElement(T.f,null)||d().createElement(P.eD,null)}]}]},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.map((function(e){var a=e.id,n=(0,l.Z)(e,w),r=n.packages_installed,i=n.rhba_count,s=n.rhsa_count,o=n.rhea_count,c=n.other_count,u=n.os,m=n.rhsm,d=n.tags,p=n.last_upload;return D(D({id:a},n),{},{key:Math.random().toString()+a,packages_installed:r,applicable_advisories:[o||0,i||0,s||0,c||0],operating_system:{osName:u||"N/A",rhsm:m},selected:void 0!==t[a],tags:d,updated:p})}))||[]},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&e.map((function(e){return{id:e.id,key:Math.random().toString()+e.id,display_name:e.display_name,installed_evra:e.installed_evra,available_evra:e.updatable&&e.available_evra||e.installed_evra,disableSelection:!e.updatable,updatable:e.updatable,upgradable:e.updatable,selected:void 0!==t[e.id],tags:e.tags}}))||[]},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.map((function(e){var a=e.id,n=(0,l.Z)(e,B),r=n.packages_installed,i=n.rhba_count,s=n.rhsa_count,o=n.rhea_count,c=n.other_count,u=n.os,m=n.rhsm,d=n.tags,p=n.last_upload,g=n.status;return D(D({id:a},n),{},{key:Math.random().toString()+a,packages_installed:r,applicable_advisories:[o||0,i||0,s||0,c||0],operating_system:{osName:u||"N/A",rhsm:m},selected:void 0!==t[a],tags:d,updated:p,disableSelection:"Installable"!==g})}))||[]},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&0!==e.length?e.map((function(e){var a="".concat(e.name,"-").concat(e.evra),n=e.updates||[],l=n[n.length-1];return{id:a,key:a,selected:void 0!==t[a],disableSelection:!l,cells:[{title:(0,_.cX)(y.w8.packages,e.name)},{title:e.evra},{title:l&&l.evra||e.evra},{title:(0,_.vy)(e.updatable)},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(P.mN,null)}]}]},I=function(e){return e&&0!==e.length?e.map((function(e){return{id:e.name,key:e.name,cells:[{title:(0,_.cX)(y.w8.packages,e.name)},{title:e.systems_installed},{title:e.systems_updatable},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:d().createElement(P.mN,null)}]}]},C=function(e){return 0!==e.length?e.map((function(e){var t=e.attributes,a=e.id,n=y.QG.filter((function(e){return e.label===t.impact}))[0];return{id:a,key:a,cells:[{title:d().createElement("a",{href:"".concat(document.baseURI,"insights/vulnerability/cves/").concat(t.synopsis)},t.synopsis)},{title:d().createElement(s.D,null,d().createElement(o.T,{component:o.v.dd},d().createElement(c.ZP,{size:"sm",color:n.color}),"  ",n.label)),value:n.label},{title:parseFloat(t.cvss_score).toFixed(1)}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:d().createElement(P.HR,null)}]}]},U=function(e,t){return 0!==e.length?e.map((function(e){var a=e.attributes,n=e.id;return{id:n,key:n,selected:void 0!==t[e.id],cells:[{title:a.display_name},{title:a.os||"N/A"},{title:a.baseline_name||"No template"}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:d().createElement(P.MN,null)}]}]},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=arguments.length>2?arguments[2]:void 0,n=e&&e.map((function(e){return{id:e.id,displayName:e.name,key:e.id,selected:void 0!==t[e.id],cells:[{title:d().createElement(p.Link,{to:{pathname:"/templates/".concat(e.id)}},e.name)},{title:e.systems||N.N.formatMessage(g.Z.labelsTemplateNoSystems)},{title:(0,u.Un)(e.last_edited)},{title:(0,u.Un)(e.published)},{title:e.creator}]}}));return(null==n?void 0:n.length)>0?n:a.search||Object.keys(a.filter).length?[{heightAuto:!0,cells:[{props:{colSpan:6},title:d().createElement(P.UO,null)}]}]:[]},X=function(e){return e&&e.map((function(e){return{id:(e=D(D({},e),e.attributes)).inventory_id,displayName:e.display_name,key:e.inventory_id,cells:[{title:d().createElement(p.Link,{to:{pathname:"/systems/".concat(e.inventory_id)}},e.display_name)},{title:e.os||"N/A"},{title:(0,_.Ut)([e.installable_rhea_count,e.installable_rhba_count,e.installable_rhsa_count,e.installable_other_count],"installable")},{title:(0,_.Ut)([e.applicable_rhea_count,e.applicable_rhba_count,e.applicable_rhsa_count,e.applicable_other_count])},{title:(0,u.Un)(e.last_upload)}]}}))}},11452:()=>{},34946:()=>{},32857:()=>{},10108:()=>{},81320:()=>{},98379:()=>{},56024:()=>{},43390:()=>{},314:()=>{},16166:()=>{}}]);
//# sourceMappingURL=../sourcemaps/2303.d02f4b3410fa59018f8a0bc1efd52f37.js.map