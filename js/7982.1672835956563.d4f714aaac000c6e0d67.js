"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[7982,8001],{53446:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=n(68129);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},91433:(e,t,n)=>{n.d(t,{f:()=>p});var r=n(8896),o=n(219),a=n(74183),c=n(86728),i=n(34348),l=n(35451),s=n(43297),u=n.n(s),f=n(32132),d=n(30893),p=function(){return u().createElement(r.b,null,u().createElement(o.ub,{style:{paddingTop:40}},u().createElement(c.k,{icon:function(){return u().createElement(l.default,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),u().createElement(i.Title,{headingLevel:"h5",size:"lg"},f.N.formatMessage(d.Z.statesNoApplicableAdvisories)),u().createElement(a.B,null,f.N.formatMessage(d.Z.statesSystemUpToDate))))}},5391:(e,t,n)=>{n.d(t,{$G:()=>Y,CM:()=>F,Hv:()=>me,K1:()=>ke,KZ:()=>ue,Kn:()=>Ze,L0:()=>V,LI:()=>_e,MC:()=>je,MS:()=>re,Nt:()=>q,Or:()=>he,PZ:()=>le,Q6:()=>ve,Qg:()=>de,Qh:()=>Ne,Qy:()=>ne,R_:()=>ie,Sz:()=>oe,Ut:()=>G,WN:()=>fe,Ww:()=>ce,YB:()=>pe,bK:()=>H,cX:()=>te,f1:()=>Se,fm:()=>ye,gA:()=>Ee,gB:()=>Oe,hO:()=>Q,kp:()=>W,li:()=>X,lq:()=>ge,mt:()=>se,p$:()=>ee,q5:()=>be,r:()=>$,vs:()=>K,vy:()=>J,xj:()=>z});var r=n(93433),o=n(71002),a=n(45987),c=n(4942),i=n(29439),l=n(36001),s=n(42057),u=n(76004),f=n(52653),d=n(44535),p=n(98970),v=n(80971),m=n(31369),g=n(85541),y=n(19210),h=n(72573),b=n(85564),E=n.n(b),O=n(30998),S=n.n(O),j=n(35937),_=n.n(j),N=n(17563),k=n(43297),Z=n.n(k),P=n(17582),I=n(334),T=n(30893),w=n(67248),x=n(58684),D=n(13784),C=n(32132),B=n(35240),A=["sap_sids"],M=["filter","systemProfile"];function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t},F=function(e,t){return[t/e+1,e]},Q=function(e,t,n){if(t){var r=(0,i.Z)(t,1)[0],o=t.join(),a="-"===r[0]?h.SortByDirection.desc:h.SortByDirection.asc;return Object.keys(D.s1).forEach((function(e){Object.keys(D.s1[e]).forEach((function(t){D.s1[e][t]===o&&(r=e,a=t)}))})),r=r.replace(/^(-|\+)/,""),{index:S()(e,(function(e){return e.key===r}))+n,direction:a}}return{}},X=function(e,t,n){e=("updated"!==e||n?"updated"===e&&n&&x.Hd[0].key:"last_upload")||e;var r="".concat("ASC"===t?"":"-").concat(e);return Object.keys(D.s1).forEach((function(n){n===e&&(r=D.s1[n][t.toLowerCase()])})),r},z=function(e,t){var n=t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{});return L(L({},e),n)},H=function(e,t){var n=[].concat(e).map((function(e){return{rowId:e.id,value:e.selected}})),r=z(t,n);return _()(r,(function(e){return!!e}))},K=function(e,t){return e[t/2].id},V=function(e,t){return e*t-t},W=function(e){return e};function Y(e,t,n){return e.length>t?Z().createElement(Z().Fragment,null,e.substring(0,t-1),"... ",n):e}var q=function(e,t,n){return Y((r=e)&&r.replace(new RegExp("\\n(?=[^\\n])","g"),""),t,Z().createElement("a",{onClick:function(){return n(e.length)}},C.N.formatMessage(T.Z.linksReadMore)));var r};function G(e){var t=(0,i.Z)(e,4),n=t[0],r=t[1],o=t[2],a=t[3];return Z().createElement(l.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},[n,r,o].every((function(e){return 0===e}))&&"No applicable advisories",0!==o&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(w.Z,{tooltipText:"Security advisories",count:o,Icon:y.ZP})),0!==r&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(w.Z,{tooltipText:"Bug fixes",count:r,Icon:f.ZP})),0!==n&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(w.Z,{tooltipText:"Enhancements",count:n,Icon:v.ZP})),0!==a&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(w.Z,{tooltipText:"Other",count:a,Icon:p.ZP})))}function J(e){return Z().createElement("div",{style:{display:"flex",alignItems:"center"}},e&&Z().createElement(g.default,{style:{color:"var(--pf-global--palette--blue-400)"}})||Z().createElement(d.default,{style:{color:"var(--pf-global--success-color--100)"}}),Z().createElement("span",{style:{marginLeft:"var(--pf-global--spacer--sm)"}},e?"Upgradable":"Up-to-date"))}function $(e){return D.QG.find((function(t){return t.value===e}))||D.QG[0]}var ee=function(e,t){return Z().createElement(I.Link,{to:{pathname:"/systems/".concat(t),state:{tab:"packages"}}},e)};function te(e,t,n){return-1===location.href.indexOf("inventory")?Z().createElement(I.Link,{to:"/".concat(e,"/").concat(t)},void 0===n?t:n):Z().createElement("a",{href:"".concat(document.baseURI,"insights/patch/").concat(e,"/").concat(t)},n||t)}var ne=function(e){return Object.values(e).filter((function(e){return e}))},re=function(e,t,n){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"".concat(n,":").concat(e),description:e}})),systems:t}},oe=function(e,t,n){return!!e&&t(e,n)},ae=function(e,t){var n=e.filter,r=e.systemProfile,o=void 0===r?{}:r,l=(0,a.Z)(e,M);l=L(L({},l),function(e){var n={};return e&&Object.entries(e).forEach((function(e){var r=(0,i.Z)(e,2),o=r[0],a=r[1];a=t&&function(e,t){var n=D.sS[e];return n&&((null==n?void 0:n.values)||[]).find((function(e){return e.value===t}))||{apiValue:t}}(o,a).apiValue||a;var l=[].concat(a).length>1||D.YX.includes(o)?"in:":"";n=L(L({},n),{},(0,c.Z)({},"filter[".concat(o,"]"),"".concat(l).concat(a.toString())))})),n}(n));var s=[];Object.keys(l).forEach((function(e){var t=encodeURIComponent(e),n=encodeURIComponent(l[e]);["",void 0,null].some((function(t){return[n,e].includes(t)}))||(["selectedTags","systemProfile"].includes(e)?"selectedTags"===e&&s.push.apply(s,l[e]):s.push(t.concat("=").concat(n)))}));var u=Object.keys(o).length>0&&function(e){var t=e.sap_sids,n=(0,a.Z)(e,A),r="";Object.entries((0,B.h3)({system_profile:n})).forEach((function(e){var t=(0,i.Z)(e,2),n=t[0],o=t[1];r="".concat(r,"&").concat(n,"=").concat(o)}));var o=null==t?void 0:t.map((function(e){return"filter[system_profile][sap_sids][in]=".concat(e)})).join("&");return r.concat(t?"&".concat(o,"#SIDs=").concat(t.join(",")):"")}(o)||"";return"?".concat(s.join("&")).concat(u)},ce=function(e){return ae(e,!0)},ie=function(e){delete e.id;var t=L({},e);return delete t.selectedTags,ae(U(t),!1)},le=function(e){var t=N.parse(e),n={};return Object.keys(t).forEach((function(e){if(!e.startsWith("filter[system_profile]")){var r=parseInt(t[e],10),o=isNaN(r)?t[e]:r,a=e.search(/\[.*\]/);if(a>0){var i=e.slice(0,a),l=e.slice(a+1,-1);n[i]=L(L({},n[i]),{},(0,c.Z)({},l,"string"==typeof(s=o)&&s.startsWith("in:")?s.slice(3).split(","):s))}else n[e]=o}var s})),n},se=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Search",r=[],o=function(e,t){if(D.YX.includes(t))return(e[t]&&("string"==typeof e[t]&&e[t].split(",")||e[t])||[]).map((function(e){return{name:e,id:t,value:e}}));var n=D.sS[t].values;return e[t]?[].concat(e[t]).map((function(e){var t=n.find((function(t){return t.value.toString()===e.toString()}));return{name:t.label,value:e,id:t.value}})):[]},a=function(){var t=Object.keys(e).filter((function(t){return""!==e[t]&&0!==[].concat(e[t]).length}));r=r.concat(t.map((function(t){return{category:"installed_evra"===t?"Package version":D.sS[t].label,id:t,chips:o(e,t)}})))},c=function(){r=r.concat([{category:n,id:"search",chips:[{name:t,value:t}]}])};return e&&a(),t&&c(),r},ue=function(e,t){var n=L(L({},e),t);return["filter","search","limit","selectedTags"].some((function(e){return t.hasOwnProperty(e)}))&&(n.offset=0),t.hasOwnProperty("filter")&&(n.filter=L(L({},e.filter),t.filter),Object.keys(n.filter).forEach((function(e){return(void 0===n.filter[e]||""===n.filter[e])&&delete n.filter[e]}))),n.hasOwnProperty("tags")&&n&&delete n.tags,n};function fe(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}function de(e,t,n){var r=e.sort((function(e,n){var r=e.cells,o=n.cells,a=r[t].value||r[t].title,c=o[t].value||o[t].title,i=a.toString().toUpperCase(),l=c.toString().toUpperCase();return i.localeCompare(l)}));return{sortBy:{index:t,direction:n},sortedCves:n===h.SortByDirection.asc?r:r.reverse()}}var pe=function(e){var t=e.osName,n=e.rhsm;return(""===n||void 0===n)&&t||Z().createElement(u.Tooltip,{content:C.N.formatMessage(T.Z.textLockVersionTooltip,{lockedVersion:n})},Z().createElement(l.k,{flex:{default:"inlineFlex"}},Z().createElement(s.B,{spacer:{default:"spacerSm"}},t),Z().createElement(s.B,{spacer:{default:"spacerSm"}},Z().createElement(m.default,{size:"sm",color:"var(--pf-global--info-color--100)"}))))},ve=function(e){return Object.keys(e).filter((function(t){return e[t]}))},me=function(e){var t=e.offset||V(e.page||1,e.perPage||20),n=e.limit||W(e.perPage||20),r=L(L({},e),{},{offset:t,limit:n});return U(r)},ge=function(e){return{data:e.data.filter((function(e){return e.updatable}))}},ye=function(e,t){var n=L(L({},e),t);return L({page:Number(n.page||1),perPage:Number(n.perPage||20)},n.sort&&{sortBy:{key:n.sort.replace(/^-/,""),direction:n.sort.match(/^-/)?"desc":"asc"}})},he=function(e){return Z().createElement(P.Z,{text:e,maxLine:"1",ellipsis:"(...)",trimRight:!0,basedOn:"letters"})},be=function(e){return/^(RHEA|RHBA|RHSA)/.test(e)},Ee=function(e,t){var n,r,a,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[];e&&e.forEach((function(e,t){var n=e;"object"===(0,o.Z)(e)?(n=null==e?void 0:e.values.map((function(t){return"tags=".concat(encodeURIComponent("".concat(e.category,"/").concat(t.tagKey,"=").concat(t.value)))})),i[t]=Array.isArray(n)&&E()(n)||n):i[t]="tags=".concat(encodeURIComponent(n))}));var l={selectedTags:[],systemProfile:{}};return l.systemProfile=L(L(L(L({},(null==c||null===(n=c.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==c||null===(r=c["Ansible Automation Platform"])||void 0===r?void 0:r.isSelected)&&{ansible:{controller_version:"not_nil"}}),(null==c||null===(a=c["Microsoft SQL"])||void 0===a?void 0:a.isSelected)&&{mssql:{version:"not_nil"}}),(null==t?void 0:t.length)>0&&{sap_sids:t}),i&&(l.selectedTags=i),l},Oe=function(e,t){var n=e.filter((function(e){return"updated"===e.key}));n=[L(L({},n[0]),{},{key:"last_upload",sortKey:"last_upload"})];var o=e.filter((function(e){var t=e.key;return"display_name"===t||"tags"===t}));return[].concat((0,r.Z)(o),(0,r.Z)((0,x.Fs)(t)),[n[0]])},Se=function(e){var t=Date.parse(e);if(!1===isNaN(t)){var n=new Date(t),r=-n.getTimezoneOffset(),o=r>=0?"+":"-",a=function(e){return"".concat(Math.floor(Math.abs(e))).padStart(2,"0")};return n.getFullYear()+"-"+a(n.getMonth()+1)+"-"+a(n.getDate())+"T"+a(n.getHours())+":"+a(n.getMinutes())+":"+a(n.getSeconds())+o+a(r/60)+":"+a(r%60)}return e},je=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"))+"-".concat(t.getDate().toString().padStart(2,"0"))},_e=function(e){var t=[];return"object"===(0,o.Z)(e)&&Object.keys(e).forEach((function(n){e[n]&&t.push(n)})),t},Ne=function(e,t){var n=[].concat((0,r.Z)(e),(0,r.Z)(_e(t)));return null==n?void 0:n.reduce((function(e,t){return e[t]=!0,e}),{})},ke=function(e){return Object.keys(e).reduce((function(t,n){return t[n]=void 0!==e[n]&&e[n],t}),{})},Ze=function(e){return"object"===(0,o.Z)(e)&&null!==e}},36491:(e,t,n)=>{n.r(t);var r=n(43297),o=n.n(r),a=n(21704),c=n.n(a),i=n(28216),l=n(56909),s=n(2807),u=n(55323),f=n(59748);const d=function(){return o().createElement("div",{className:"patch-root"},o().createElement(u.Pj,{locale:navigator.language.slice(0,2),messages:f},o().createElement(i.zt,{store:s.h},o().createElement(l.Z,null))))};c().render(o().createElement(d,null),document.getElementById("root"))}}]);
//# sourceMappingURL=../sourcemaps/7982.c5ba46a4eed44f761a1f05785884b866.js.map