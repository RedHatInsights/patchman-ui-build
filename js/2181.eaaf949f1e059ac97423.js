(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[2181],{18464:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(45697),r=n.n(a),l=n(43297),i=n.n(l),s=n(13784),o=n(79851),c=n(34512),u=function(e){var t=e.type,n=s.Yi.find((function(e){return e.value===t}))||s.Yi[3];return i().createElement(o.P,{hasGutter:!0},i().createElement(c.J,null,n.icon),i().createElement(c.J,{isFilled:!0},n.label))};u.propTypes={type:r().string};const d=u},90747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(29439),r=n(83237),l=n(23279),i=n.n(l),s=n(43297);const o=function(e,t,n,l){var o=(0,s.useState)(t),c=(0,a.Z)(o,2),u=c[0],d=c[1],p=(0,s.useCallback)(i()((function(t){return e({search:t})}),400),[]);return(0,s.useEffect)((function(){return d(t)}),[t]),{type:r.Y.text,label:n,filterValues:{"aria-label":"search-field",onChange:function(e,t){d(t),p(t)},placeholder:l,value:u}}}},75585:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(83237),r=n(43297),l=n.n(r),i=n(13784),s=n(32132),o=n(30893);const c=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).stale,n=l().useMemo((function(){return i.fb.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),r=t&&(Array.isArray(t)&&t.map((function(e){return e.toString()}))||[t.toString()]);return{label:s.N.formatMessage(o.Z.labelsFiltersStale),type:a.Y.checkbox,filterValues:{onChange:function(t,n){!function(t){e({filter:{stale:t}})}(n)},items:n,value:r,placeholder:s.N.formatMessage(o.Z.labelsFiltersStalePlaceholder)}}}},23188:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var a=n(83237),r=n(13784),l=n(32132),i=n(30893);const s=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).packages_updatable;return{label:l.N.formatMessage(i.Z.labelsFiltersUpdatable),type:a.Y.radio,filterValues:{onChange:function(t,n){!function(t){e({filter:{packages_updatable:t}})}(n)},items:r.Tl,value:t,placeholder:l.N.formatMessage(i.Z.labelsFiltersUpdatablePlaceholder)}}}},14240:(e,t,n)=>{"use strict";n.d(t,{$6:()=>k,HR:()=>h,MN:()=>y,UO:()=>E,WX:()=>_,eD:()=>g,mN:()=>v});var a=n(47173),r=n(9947),l=n(75106),i=n(38424),s=n(60485),o=n(80810),c=n(43297),u=n.n(c),d=n(32132),p=n(30893),m=n(7081),f=n(45697),b=n.n(f),g=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingAdvisories)),u().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},v=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(i.k,{icon:o.ZP}),u().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingPackages)),u().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},h=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(i.k,{icon:o.ZP}),u().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingCve)),u().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},y=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingSystems)),u().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},E=function(){return u().createElement(r.u,{variant:r.I.full},u().createElement(i.k,{icon:o.ZP}),u().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoMatchingTemplate)),u().createElement(l.B,null,d.N.formatMessage(p.Z.textEmptyStateBody)))},_=function(e){var t=e.Button;return u().createElement(r.u,{variant:r.I.large},u().createElement(i.k,{icon:m.ZP}),u().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.statesNoTemplate)),u().createElement(l.B,null,d.N.formatMessage(p.Z.statesNoTemplateBody),u().createElement("br",null),u().createElement("br",null),u().createElement(t,null)))};_.propTypes={Button:b().node};var k=function(e){var t=e.onButtonClick;return u().createElement(r.u,{variant:r.I.full},u().createElement(i.k,{icon:m.ZP}),u().createElement(s.D,{headingLevel:"h5",size:"lg"},d.N.formatMessage(p.Z.templateNoAppliedSystemsTitle)),u().createElement(l.B,null,u().createElement(a.zx,{type:"primary",onClick:t},d.N.formatMessage(p.Z.templateNoAppliedSystemsButton))))};k.propTypes={onButtonClick:b().func}},52579:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});var a=n(43297),r=n.n(a),l=n(45697),i=n.n(l),s=n(56700),o=n(15984),c=n(85333),u=n(81739),d=n(87135),p=n(99332),m=n(32132),f=n(30893),b=n(47173),g=n(9947),v=n(75106),h=n(38424),y=n(60485),E=n(12136),_=function(e){var t=e.titleText,n=e.bodyText,a=e.buttonText;return r().createElement(g.u,null,r().createElement(h.k,{icon:E.ZP}),r().createElement(y.D,{headingLevel:"h5",size:"lg"},t),r().createElement(v.B,null,n),r().createElement(b.zx,{variant:"primary",component:"a",href:"https://access.redhat.com/products/red-hat-insights#getstarted",target:"_blank",rel:"noopener noreferrer",className:"pf-u-mt-lg"},a))};_.propTypes={titleText:i().string,bodyText:i().string,buttonText:i().string},_.defaultProps={titleText:"Do more with your Red Hat Enterprise Linux environment",bodyText:"Connect your systems to keep your Red Hat environment running efficiently,\n     with security and compliance with various standards.",buttonText:"Learn more about connecting your systems"};const k=_;var Z=function(e){var t=e.code,n=e.ErrorState,a=e.EmptyState,l=e.metadata,i=void 0===l?{}:l;switch(t){case 204:return r().createElement(d.Z,null);case 400:case 500:case 502:case 503:case 504:return r().createElement(o.Z,null);case 401:case 403:return r().createElement(c.Z,{icon:p.ZP,title:m.N.formatMessage(f.Z.labelsNotAuthorizedTitle),description:m.N.formatMessage(f.Z.labelsNotAuthorizedDescription),prevPageButtonText:m.N.formatMessage(f.Z.labelsReturnToPreviousPage),toLandingPageText:m.N.formatMessage(f.Z.labelsReturnToLandingPage)});case 404:return r().createElement(s.Z,null);default:return n&&r().createElement(n,null)||a&&r().createElement(a,null)||!i.has_systems&&r().createElement(k,null)||r().createElement(u.Z,{colSize:5,rowSize:20})}};Z.propTypes={code:i().number,ErrorState:i().element,EmptyState:i().element,metadata:i().object.isRequired};const N=Z},55970:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(28191),r=n(92298),l=n(83567),i=n(45697),s=n.n(i),o=n(43297),c=n.n(o),u=function(e){var t=e.link,n=e.text;return c().createElement("a",{href:t,target:"__blank"},c().createElement(a.k,{flex:{default:"inlineFlex"}},c().createElement(r.B,{spacer:{default:"spacerSm"}},n),c().createElement(r.B,{spacer:{default:"spacerSm"}},c().createElement(l.ZP,null))))};u.propTypes={link:s().string,text:s().string};const d=u},7665:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var a=n(43297),r=n.n(a),l=n(60485),i=n(28191),s=n(92298),o=n(32132),c=n(30893),u=n(26076);const d=function(){return r().createElement(i.k,{flex:{default:"column"}},r().createElement(s.B,{spacer:{default:"spacerNone"}},r().createElement(l.D,{headingLevel:"h6"},o.N.formatMessage(c.Z.labelsColumnsReboot))),r().createElement(s.B,{spacer:{default:"spacerSm"}},r().createElement(i.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},r().createElement(s.B,null,r().createElement(u.ZP,{size:"sm",color:"var(--pf-global--danger-color--100)"})," "),r().createElement(s.B,{isFilled:!0},o.N.formatMessage(c.Z.textRebootIsRequired)))))}},53074:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var a=n(83215),r=n(45697),l=n.n(r),i=n(43297),s=n.n(i),o=n(28216),c=n(22663),u=n(2372),d=n(32132),p=n(30893),m=function(e){var t=e.remediationProvider,n=e.isDisabled,r=e.isLoading,l=(0,o.I0)();return s().createElement(c.Z,{appName:"remediations",module:"./RemediationButton",fallback:s().createElement(u.$,{size:"lg"}),dataProvider:t,onRemediationCreated:function(e){l((0,a.wN)(e.getNotification()))},isDisabled:n,buttonProps:{isLoading:r}},d.N.formatMessage(p.Z.labelsRemediate))};m.propTypes={remediationProvider:l().func,isDisabled:l().bool,isLoading:l().bool};const f=m},58684:(e,t,n)=>{"use strict";n.d(t,{Fs:()=>p,HG:()=>m,Hd:()=>f,Sb:()=>v});var a=n(4942),r=n(93433),l=n(43297),i=n.n(l),s=n(96620),o=n(11220),c=n(13784),u=n(5391),d=n(7732),p=function(){return[{key:"operating_system",title:"OS",renderFunc:function(e){return(0,u.YB)(e)},props:{width:5}},{key:"baseline_name",title:"Template",renderFunc:function(e,t,n){return e?i().createElement(s.Link,{to:{pathname:"/templates/".concat(n.baseline_id)}},e):"No template"},props:{width:5}},{key:"applicable_advisories",title:"Installable advisories",props:{width:15},renderFunc:function(e){return(0,u.Ut)(e)}},{key:"packages_installed",title:"Installed packages",renderFunc:function(e,t){return(0,u.p$)(e,t)},props:{width:10}}]},m=function(){return[{key:"os",title:"OS",renderFunc:function(e){return(0,u.YB)(e)},props:{width:5}},{key:"baseline_name",title:"Template",renderFunc:function(e,t,n){return e?i().createElement(s.Link,{to:{pathname:"/templates/".concat(n.baseline_id)}},e):"No template"},props:{width:5}},{key:"status",title:"Status",props:{width:5,isStatic:!0},transforms:[d.p]}]},f=[{key:"display_name",title:"Name",composed:["facts.os_release","display_name"],props:{width:40}},{key:"tags",title:"Tags",props:{width:10,isStatic:!0}},{key:"installed_evra",title:"Installed version",props:{width:15}},{key:"available_evra",title:"Latest version",props:{width:15}},{key:"updatable",title:"Status",props:{width:20},renderFunc:function(e){return(0,u.vy)(e)}}],b=function(e){var t=(e||{}).applicable_advisories;return t&&t.every((function(e){return 0===e}))},g=function(e){var t=(e||{}).baseline_name;return!t||"string"==typeof t&&""===t},v=function(e,t,n,l){return[{title:"Apply all applicable advisories",isDisabled:b(l),onClick:function(t,n,a){(0,o.Zi)({id:a.id,limit:-1,"filter[status]":"in:Installable"}).then((function(t){return e((0,u.MS)(t.data.map((function(e){return e.id})),a.id,c.oN.advisory))}))}}].concat((0,r.Z)(t?[{title:"Assign to a template",onClick:function(e,n,r){t((0,a.Z)({},r.id,!0))}},{title:"Remove from a template",isDisabled:g(l),onClick:function(e,t,a){n([a.id])}}]:[]))}},36248:(e,t,n)=>{"use strict";n.d(t,{nf:()=>B,mf:()=>A,KW:()=>I,GF:()=>C,k6:()=>z,dn:()=>H,CN:()=>U,vR:()=>R,yF:()=>L,Yk:()=>F,ub:()=>q});var a=n(4942),r=n(45987),l=n(94654),i=n.n(l),s=n(68774),o=n(78140),c=n(27578),u=n(35240),d=n(43297),p=n.n(d),m=n(96620),f=n(30893),b=n(18464),g=n(68340),v=n(25834),h=n(45697),y=n.n(h),E=n(13784),_=n(5391),k=n(32132),Z=n(55970),N=function(e){var t=e.children;return p().createElement("span",{className:"patchman-label"},t)};N.propTypes={children:y().any};const S=N;var O=n(7665),P=function(e){var t=e.row,n=(0,_.r)(t.attributes.severity);return p().createElement(s.D,{className:"patch-advisory-description"},t.attributes.cve_count>0&&p().createElement(v.G,{component:v.F.dl,style:{"--pf-c-content--dl--RowGap":"0.5rem"}},p().createElement(o.T,{component:o.v.dt},k.N.formatMessage(f.Z.labelsSeverity)),p().createElement(o.T,{component:o.v.dd},p().createElement(c.ZP,{size:"sm",color:n.color}),"  ",n.label),p().createElement(o.T,{component:o.v.dt},k.N.formatMessage(f.Z.labelsCves)),p().createElement(o.T,{component:o.v.dd},t.attributes.cve_count)),p().createElement(S,null,k.N.formatMessage(f.Z.labelsDescription)),p().createElement(g.x,{component:g.q.p,style:{whiteSpace:"pre-line"}},(0,_.$G)(t.attributes.description.replace(new RegExp("\\n(?=[^\\n])","g"),""),570,(0,_.cX)(E.w8.advisories,t.id,k.N.formatMessage(f.Z.linksReadMore)))),t.attributes.reboot_required&&p().createElement(O.Z,null),(0,_.q5)(t.id)&&p().createElement(Z.Z,{link:"https://access.redhat.com/errata/".concat(t.id),text:k.N.formatMessage(f.Z.linksViewPackagesAndErrata)}))};P.propTypes={row:y().shape({id:y().string,attributes:y().object,reboot_required:y().bool})};var w=n(14240),M=n(91433),T=["id"],j=["id"];function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var B=function(e,t,n){return 0!==e.length?i()(e,(function(e,a){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==n[e.id],cells:[{title:(0,_.cX)(E.w8.advisories,e.id)},{title:(0,_.Or)(e.attributes.synopsis)},{title:p().createElement(b.Z,{type:e.attributes.advisory_type_name})},{title:(0,_.cX)(E.w8.advisories,e.id,e.attributes.applicable_systems)},{title:e.attributes.reboot_required&&k.N.formatMessage(f.Z.labelsRebootRequired)||k.N.formatMessage(f.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:p().createElement(P,{row:e})}],parent:2*a,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:5},title:p().createElement(w.eD,null)}]}]},R=function(e,t,n,a){return 0!==e.length?i()(e,(function(e,a){return[{id:e.id,isOpen:!0===t[e.id],selected:void 0!==n[e.id],disableSelection:"Applicable"===e.attributes.status,cells:[{title:(0,_.cX)(E.w8.advisories,e.id)},{title:(0,_.Or)(e.attributes.synopsis)},{title:e.attributes.status},{title:p().createElement(b.Z,{type:e.attributes.advisory_type_name})},{title:e.attributes.reboot_required&&k.N.formatMessage(f.Z.labelsRebootRequired)||k.N.formatMessage(f.Z.labelsRebootNotRequired)},{title:(0,u.Un)(e.attributes.public_date)}]},{cells:[{title:p().createElement(P,{row:e})}],parent:2*a,isExpandedRow:!0}]})):[{heightAuto:!0,cells:[{props:{colSpan:6},title:!a.search&&a.filter&&0===Object.keys(a.filter).length&&p().createElement(M.f,null)||p().createElement(w.eD,null)}]}]},F=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.map((function(e){var n=e.id,a=(0,r.Z)(e,T),l=a.packages_installed,i=a.rhba_count,s=a.rhsa_count,o=a.rhea_count,c=a.other_count,u=a.os,d=a.rhsm,p=a.tags,m=a.last_upload;return D(D({id:n},a),{},{key:Math.random().toString()+n,packages_installed:l,applicable_advisories:[o||0,i||0,s||0,c||0],operating_system:{osName:u||"N/A",rhsm:d},selected:void 0!==t[n],tags:p,updated:m})}))||[]},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&e.map((function(e){return{id:e.id,key:Math.random().toString()+e.id,display_name:e.display_name,installed_evra:e.installed_evra,available_evra:e.updatable&&e.available_evra||e.installed_evra,disableSelection:!e.updatable,updatable:e.updatable,selected:void 0!==t[e.id],tags:e.tags}}))||[]},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.map((function(e){var n=e.id,a=(0,r.Z)(e,j),l=a.packages_installed,i=a.rhba_count,s=a.rhsa_count,o=a.rhea_count,c=a.other_count,u=a.os,d=a.rhsm,p=a.tags,m=a.last_upload,f=a.status;return D(D({id:n},a),{},{key:Math.random().toString()+n,packages_installed:l,applicable_advisories:[o||0,i||0,s||0,c||0],os:{osName:u.osName||u||"N/A",rhsm:d},selected:void 0!==t[n],tags:p,updated:m,disableSelection:"Installable"!==f})}))||[]},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e&&0!==e.length?e.map((function(e){var n="".concat(e.name,"-").concat(e.evra),a=e.updates||[],r=a[a.length-1];return{id:n,key:n,selected:void 0!==t[n],disableSelection:!r,cells:[{title:(0,_.cX)(E.w8.packages,e.name)},{title:e.evra},{title:r&&r.evra||e.evra},{title:(0,_.vy)(e.updatable)},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:p().createElement(w.mN,null)}]}]},z=function(e){return e&&0!==e.length?e.map((function(e){return{id:e.name,key:e.name,cells:[{title:(0,_.cX)(E.w8.packages,e.name)},{title:e.systems_installed},{title:e.systems_applicable},{title:e.systems_installable},{title:e.summary}]}})):[{heightAuto:!0,cells:[{props:{colSpan:7},title:p().createElement(w.mN,null)}]}]},I=function(e){return 0!==e.length?e.map((function(e){var t=e.attributes,n=e.id,a=E.QG.filter((function(e){return e.label===t.impact}))[0];return{id:n,key:n,cells:[{title:p().createElement("a",{href:"".concat(document.baseURI,"insights/vulnerability/cves/").concat(t.synopsis)},t.synopsis)},{title:p().createElement(s.D,null,p().createElement(o.T,{component:o.v.dd},p().createElement(c.ZP,{size:"sm",color:a.color}),"  ",a.label)),value:a.label},{title:parseFloat(t.cvss_score).toFixed(1)}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:p().createElement(w.HR,null)}]}]},q=function(e,t){return 0!==e.length?e.map((function(e){var n=e.attributes,a=e.id;return{id:a,key:a,selected:void 0!==t[e.id],cells:[{title:n.display_name},{title:n.os||"N/A"},{title:n.baseline_name||"No template"},{title:(0,u.Un)(n.last_upload)}]}})):[{heightAuto:!0,cells:[{props:{colSpan:4},title:p().createElement(w.MN,null)}]}]},U=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0,a=e&&e.map((function(e){return{id:e.id,displayName:e.name,key:e.id,selected:void 0!==t[e.id],cells:[{title:p().createElement(m.Link,{to:{pathname:"/templates/".concat(e.id)}},e.name)},{title:e.systems||k.N.formatMessage(f.Z.labelsTemplateNoSystems)},{title:(0,u.Un)(e.last_edited)},{title:(0,u.Un)(e.published)},{title:e.creator}]}}));return(null==a?void 0:a.length)>0?a:n.search||Object.keys(n.filter).length?[{heightAuto:!0,cells:[{props:{colSpan:6},title:p().createElement(w.UO,null)}]}]:[]},H=function(e){return e&&e.map((function(e){return e=D(D({},e),e.attributes),D(D({},e),{},{id:e.inventory_id,display_name:e.display_name,key:e.inventory_id,os:{osName:e.os||"N/A",rhsm:e.rhsm},last_upload:e.last_upload,tags:e.tags})}))}},91607:(e,t,n)=>{"use strict";n.d(t,{AR:()=>B,CA:()=>F,Iw:()=>T,KW:()=>j,Pz:()=>x,SL:()=>O,U:()=>D,_T:()=>P,_f:()=>w,j5:()=>M,np:()=>R});var a=n(93433),r=n(15861),l=n(29439),i=n(4942),s=n(64687),o=n.n(s),c=n(43297),u=n.n(c),d=n(96620),p=n(48585),m=n(53446),f=n(35240),b=n(38252),g=n.n(b),v=n(2372),h=n(30893),y=n(13784),E=n(5391),_=n(32132),k=n(11220),Z=n(42154);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}n(63746);var O=function(e,t){return u().useCallback((function(n,a){return t({offset:(0,E.L0)(a,e)})}))},P=function(e){return u().useCallback((function(t,n){return e({limit:(0,E.kp)(n),offset:0})}))},w=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:y.mt;return u().useCallback((function(r,l,i){var s=e[l-n].key,o=a[s];o?s=o[i]:i===p.B.desc&&(s="-"+s),t({sort:s})}))},M=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{filter:{}},a=u().useCallback((function(n,a,r){var l={filter:{}};n.forEach((function(t){var n=t.id,a=t.chips;if("search"===n||y.YX.includes(n))if(y.YX.includes(n)){var r=e[n]&&("string"==typeof e[n]&&e[n].split(",")||e[n])||[];l.filter[n]=1!==r.length&&r.filter((function(e){return!a.find((function(t){return t.value===e}))})).join(",")||void 0}else l.search="";else{var i=e[n],s=a.map((function(e){var t;return null===(t=e.id)||void 0===t?void 0:t.toString()}));Array.isArray(i)?l.filter[n]=i.filter((function(e){return!s.includes(e.toString())})):l.filter[n]=void 0}})),r&&(l=a(l)),t(S({},l))}));return[function(e,t,r){a(t,(function(e){return Object.keys(n.filter).length>0&&(e.filter=S(S({},e.filter),n.filter)),e}),r)},function(e,t){a(t)}]},T=function(e){e&&(document.title="".concat(e," - Patch | Red Hat Insights"))},j=function(e,t){var n=u().useRef(void 0);n.current&&g()(t,n.current)||(n.current=t),u().useEffect(e,n.current)},x=function(e,t,n,a,r,i){var s,o,c=u().useState(!1),d=(0,l.Z)(c,2),p=d[0],m=d[1];return{items:[{title:_.N.formatMessage(h.Z.labelsBulkSelectNone),onClick:function(){t("none")}},{title:_.N.formatMessage(h.Z.labelsBulkSelectPage,{count:r&&a.length/2||a.length}),onClick:function(){t("page")}},{title:_.N.formatMessage(h.Z.labelsBulkSelectAll,{count:n.total_items}),onClick:function(){m(!0),t("all",null,null,m)}}],onSelect:function(){var n="none";0===e&&(m(!0),n="all"),t(n,null,null,m)},toggleProps:{"data-ouia-component-type":"bulk-select-toggle-button",children:p?[u().createElement(u().Fragment,{key:"sd"},u().createElement(v.$,{size:"sm"}),"     ".concat(e," selected"))]:"     ".concat(e," selected")},checked:0!==e&&(e===n.total_items||null),isDisabled:0===n.total_items&&0===e||1===(null==i||null===(s=i.filter)||void 0===s||null===(s=s.status)||void 0===s?void 0:s.length)&&"Applicable"===(null==i||null===(o=i.filter)||void 0===o||null===(o=o.status)||void 0===o?void 0:o[0])}},D=function(e,t,n,l,i,s){var c=n||{},u=c.id,d=c.packageName,p=function(){var n=(0,r.Z)(o().mark((function n(r,c){var p,m,f,b,g,v,h,y,_,k,N,O,P;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return m=c.orderBy,f=c.orderDirection,b=c.page,g=c.per_page,v=c.patchParams,h=c.filters,y=v.selectedTags,_=void 0===y?[]:y,k=(0,E.gA)(h.tagFilters),N=k.selectedTags,O=(0,Z.li)(m,f,d),n.next=6,e(S(S(S({page:b,perPage:g},v),{},{selectedTags:[].concat((0,a.Z)(_),(0,a.Z)(N)),sort:O},u&&{id:u}||{}),d&&{package_name:d}||{}));case 6:return P=n.sent,t({page:b,perPage:g,sort:O,metadata:P.meta}),i&&i(P.meta),s&&s(N),l.push((0,E.R_)(S({page:b,perPage:g,sort:O},v))),n.abrupt("return",{results:P.data.map((function(e){var t;return S(S(S({},e),e.attributes),{},{id:null!==(t=e.id)&&void 0!==t?t:e.inventory_id})})),total:null===(p=P.meta)||void 0===p?void 0:p.total_items});case 12:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}();return p},B=function(e,t,n,a){return u().useCallback((function(r,l){var i=(new Date).toISOString().replace(/[T:]/g,"-").split(".")[0]+"-utc",s="".concat(e,"-").concat(i);a((0,m.addNotification)((0,y.LH)(l).pending)),n[l](t,e).then((function(e){a((0,m.addNotification)((0,y.LH)(l).success)),(0,f.Sv)(e,s,l)})).catch((function(){return a((0,m.addNotification)((0,y.LH)().error))}))}))},R=function(e,t,n){return u().useCallback((function(a){var r=a.existing_patch_set||a,l=r.name,i=r.description,s=r.toDate,o=r.id,c=(0,E.f1)(s),u=a.systems,d=S({name:l,description:i,inventory_ids:n||o?(0,E.K1)(u):(0,E.bJ)(u)},c&&{config:{to_time:c}});t(S(S({},e),{},{submitted:!0,failed:!1,requestPending:!0})),(n||o?(0,k.CT)(d,n||o):(0,k.sQ)(d)).then((function(){t(S(S({},e),{},{submitted:!0,failed:!1,requestPending:!1}))})).catch((function(n){t(S(S({},e),{},{submitted:!0,failed:!0,requestPending:!1,error:n}))}))}))},F=function(e){var t=(0,d.useHistory)(),n=(0,d.useLocation)();return(0,c.useCallback)((function(){t.push({pathname:n.pathname,search:(0,E.R_)(e),state:n.state})}),[JSON.stringify(e),n.state,n.pathname])}},42154:(e,t,n)=>{"use strict";n.d(t,{Fy:()=>_,Pf:()=>E,li:()=>N,gB:()=>k,yF:()=>Z});var a=n(4942),r=n(93433),l=n(43297),i=n.n(l),s=n(90747),o=n(75585),c=n(23188),u=n(5391),d=n(32132),p=n(30893),m=n(58684),f=n(13784),b=n(72573),g=[{key:"os",title:"OS",renderFunc:function(e){return(0,u.YB)(e)},transforms:[b.sortable]},{key:"installable_rhsa_count",title:"Installable advisories",renderFunc:function(e,t,n){return(0,u.Ut)([n.installable_rhea_count,n.installable_rhba_count,n.installable_rhsa_count,n.installable_other_count],"installable")},transforms:[b.sortable]},{key:"applicable_rhsa_count",title:"Applicable advisories",transforms:[b.sortable],renderFunc:function(e,t,n){return(0,u.Ut)([n.applicable_rhea_count,n.applicable_rhba_count,n.applicable_rhsa_count,n.applicable_other_count])}}],v=n(96620);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e,t,n,a){return{items:[(0,s.Z)(n,e,d.N.formatMessage(p.Z.labelsFiltersSystemsSearchTitle),d.N.formatMessage(p.Z.labelsFiltersSystemsSearchPlaceholder)),(0,o.Z)(n,t),(0,c.Z)(n,t)].concat((0,r.Z)(a))}},_=function(e,t,n){return{filters:(0,u.mt)(e,t,d.N.formatMessage(p.Z.labelsFiltersSystemsSearchTitle)),onDelete:n,deleteTitle:d.N.formatMessage(p.Z.labelsFiltersReset)}},k=function(e,t){var n=e.filter((function(e){return"updated"===e.key}));n=[y(y({},n[0]),{},{key:"last_upload",sortKey:"last_upload"})];var a=e.filter((function(e){var t=e.key;return"display_name"===t||"tags"===t}));return[].concat((0,r.Z)(a),(0,r.Z)(t()),[n[0]])},Z=function(e){var t=e.filter((function(e){return"updated"===e.key}));t=[y(y({},t[0]),{},{key:"last_upload",sortKey:"last_upload",renderFunc:function(e){return(0,u.jC)(e)}})];var n=e.filter((function(e){return"display_name"===e.key})),a=e.filter((function(e){return"tags"===e.key}));return n=[y(y({},n[0]),{},{renderFunc:function(e,t){return i().createElement(v.Link,{to:{pathname:"/systems/".concat(t)}},e)}})],[].concat((0,r.Z)(n),(0,r.Z)(a),(0,r.Z)(g),[t[0]])},N=function(e,t,n){e=("updated"!==e||n?"updated"===e&&n&&m.Hd[0].key:"last_upload")||e;var a="".concat("ASC"===t?"":"-").concat(e);return Object.keys(f.mt).forEach((function(n){n===e&&(a=f.mt[n][t.toLowerCase()])})),a}},65088:()=>{},11452:()=>{},34946:()=>{},32857:()=>{},93818:()=>{},94498:()=>{},10108:()=>{},28992:()=>{},30187:()=>{},81320:()=>{},90479:()=>{},78752:()=>{},21626:()=>{},98379:()=>{},91993:()=>{},36974:()=>{},56024:()=>{},54994:()=>{},44690:()=>{},37494:()=>{},43390:()=>{},314:()=>{},16166:()=>{}}]);