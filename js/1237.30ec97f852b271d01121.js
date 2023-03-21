"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[1237],{53446:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=n(68129);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},5391:(e,t,n)=>{n.d(t,{$G:()=>W,CM:()=>L,Hv:()=>de,K1:()=>Se,KZ:()=>ue,Kn:()=>_e,L0:()=>K,LI:()=>Ee,MC:()=>Oe,MS:()=>te,Nt:()=>Y,Or:()=>ge,PZ:()=>ae,Q6:()=>pe,Qg:()=>le,Qh:()=>je,Qy:()=>ee,R_:()=>ce,Sz:()=>ne,Ut:()=>q,WN:()=>se,Ww:()=>oe,YB:()=>fe,bK:()=>X,cX:()=>$,f1:()=>be,fm:()=>me,gA:()=>he,hO:()=>F,kp:()=>V,lq:()=>ve,mt:()=>ie,p$:()=>J,q5:()=>ye,r:()=>G,vs:()=>H,vy:()=>z,xj:()=>Q});var r=n(93433),o=n(71002),c=n(45987),a=n(4942),i=n(29439),u=n(28191),s=n(92298),l=n(35224),f=n(51162),p=n(98614),d=n(25281),v=n(78116),m=n(53688),g=n(8307),y=n(27578),h=n(48585),b=n(85564),O=n.n(b),E=n(30998),j=n.n(E),S=n(35937),_=n.n(S),P=n(17563),N=n(43297),Z=n.n(N),k=n(17582),I=n(334),w=n(30893),T=n(67248),x=n(13784),C=n(32132),D=n(35240),M=["sap_sids"],A=["filter","systemProfile"];function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t},L=function(e,t){return[t/e+1,e]},F=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:x.mt;if(t){var o=(0,i.Z)(t,1),c=o[0],a=t.join(),u="-"===c[0]?h.B.desc:h.B.asc;Object.keys(r).forEach((function(e){Object.keys(r[e]).forEach((function(t){r[e][t]===a&&(c=e,u=t)}))})),c=c.replace(/^(-|\+)/,"");var s=j()(e,(function(e){return e.key===c})),l={index:s+n,direction:u};return l}return{}},Q=function(e,t){var n=t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{});return R(R({},e),n)},X=function(e,t){var n=[].concat(e).map((function(e){return{rowId:e.id,value:e.selected}})),r=Q(t,n);return _()(r,(function(e){return!!e}))},H=function(e,t){return e[t/2].id},K=function(e,t){return e*t-t},V=function(e){return e};function W(e,t,n){return e.length>t?Z().createElement(Z().Fragment,null,e.substring(0,t-1),"... ",n):e}var Y=function(e,t,n){return W((r=e)&&r.replace(new RegExp("\\n(?=[^\\n])","g"),""),t,Z().createElement("a",{onClick:function(){return n(e.length)}},C.N.formatMessage(w.Z.linksReadMore)));var r};function q(e){var t=(0,i.Z)(e,4),n=t[0],r=t[1],o=t[2],c=t[3],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"applicable";return Z().createElement(u.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},[n,r,o].every((function(e){return 0===e}))&&"No ".concat(a," advisories"),0!==o&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(T.Z,{tooltipText:"Security advisories",count:o,Icon:y.ZP})),0!==r&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(T.Z,{tooltipText:"Bug fixes",count:r,Icon:f.ZP})),0!==n&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(T.Z,{tooltipText:"Enhancements",count:n,Icon:v.ZP})),0!==c&&Z().createElement(s.B,{spacer:{default:"spacerXs"}},Z().createElement(T.Z,{tooltipText:"Other",count:c,Icon:d.ZP})))}function z(e){return Z().createElement("div",{style:{display:"flex",alignItems:"center"}},e&&Z().createElement(g.ZP,{style:{color:"var(--pf-global--palette--blue-400)"}})||Z().createElement(p.ZP,{style:{color:"var(--pf-global--success-color--100)"}}),Z().createElement("span",{style:{marginLeft:"var(--pf-global--spacer--sm)"}},e?"Upgradable":"Up-to-date"))}function G(e){return x.QG.find((function(t){return t.value===e}))||x.QG[0]}var J=function(e,t){return Z().createElement(I.Link,{to:{pathname:"/systems/".concat(t),state:{tab:"packages"}}},e)};function $(e,t,n){return-1===location.href.indexOf("inventory")?Z().createElement(I.Link,{to:"/".concat(e,"/").concat(t)},void 0===n?t:n):Z().createElement("a",{href:"".concat(document.baseURI,"insights/patch/").concat(e,"/").concat(t)},n||t)}var ee=function(e){return Object.values(e).filter((function(e){return e}))},te=function(e,t,n){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"".concat(n,":").concat(e),description:e}})),systems:t}},ne=function(e,t,n){return!!e&&t(e,n)},re=function(e,t){var n=e.filter,r=e.systemProfile,o=void 0===r?{}:r,u=(0,c.Z)(e,A);u=R(R({},u),function(e){var n={};return e&&Object.entries(e).forEach((function(e){var r=(0,i.Z)(e,2),o=r[0],c=r[1];c=t&&function(e,t){var n=x.sS[e];return n&&((null==n?void 0:n.values)||[]).find((function(e){return e.value===t}))||{apiValue:t}}(o,c).apiValue||c;var u=[].concat(c).length>1||x.YX.includes(o)?"in:":"";n=R(R({},n),{},(0,a.Z)({},"filter[".concat(o,"]"),"".concat(u).concat(c.toString())))})),n}(n));var s=[];Object.keys(u).forEach((function(e){var t=encodeURIComponent(e),n=encodeURIComponent(u[e]);["",void 0,null].some((function(t){return[n,e].includes(t)}))||(["selectedTags","systemProfile"].includes(e)?"selectedTags"===e&&s.push.apply(s,u[e]):s.push(t.concat("=").concat(n)))}));var l=Object.keys(o).length>0&&function(e){var t=e.sap_sids,n=(0,c.Z)(e,M),r="";Object.entries((0,D.h3)({system_profile:n})).forEach((function(e){var t=(0,i.Z)(e,2),n=t[0],o=t[1];r="".concat(r,"&").concat(n,"=").concat(o)}));var o=null==t?void 0:t.map((function(e){return"filter[system_profile][sap_sids][in]=".concat(e)})).join("&");return r.concat(t?"&".concat(o,"#SIDs=").concat(t.join(",")):"")}(o)||"";return"?".concat(s.join("&")).concat(l)},oe=function(e){return re(e,!0)},ce=function(e){delete e.id;var t=R({},e);return delete t.selectedTags,re(U(t),!1)},ae=function(e){var t=P.parse(e),n={};return Object.keys(t).forEach((function(e){if(!e.startsWith("filter[system_profile]")){var r=parseInt(t[e],10),o=isNaN(r)?t[e]:r,c=e.search(/\[.*\]/);if(c>0){var i=e.slice(0,c),u=e.slice(c+1,-1);n[i]=R(R({},n[i]),{},(0,a.Z)({},u,"string"==typeof(s=o)&&s.startsWith("in:")?s.slice(3).split(","):s))}else n[e]=o}var s})),n},ie=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Search",r=[],o=function(e,t){if(x.YX.includes(t))return(e[t]&&("string"==typeof e[t]&&e[t].split(",")||e[t])||[]).map((function(e){return{name:e,id:t,value:e}}));var n=x.sS[t].values;return e[t]?[].concat(e[t]).map((function(e){var t=n.find((function(t){return t.value.toString()===e.toString()}));return{name:t.label,value:e,id:t.value}})):[]},c=function(){var t=Object.keys(e).filter((function(t){return""!==e[t]&&0!==[].concat(e[t]).length}));r=r.concat(t.map((function(t){return{category:"installed_evra"===t?"Package version":x.sS[t].label,id:t,chips:o(e,t)}})))},a=function(){r=r.concat([{category:n,id:"search",chips:[{name:t,value:t}]}])};return e&&c(),t&&a(),r},ue=function(e,t){var n=R(R({},e),t);return["filter","search","limit","selectedTags"].some((function(e){return t.hasOwnProperty(e)}))&&(n.offset=0),t.hasOwnProperty("filter")&&(n.filter=R(R({},e.filter),t.filter),Object.keys(n.filter).forEach((function(e){return(void 0===n.filter[e]||""===n.filter[e])&&delete n.filter[e]}))),n.hasOwnProperty("tags")&&n&&delete n.tags,n};function se(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}function le(e,t,n){var r=e.sort((function(e,n){var r=e.cells,o=n.cells,c=r[t].value||r[t].title,a=o[t].value||o[t].title,i=c.toString().toUpperCase(),u=a.toString().toUpperCase();return i.localeCompare(u)}));return{sortBy:{index:t,direction:n},sortedCves:n===h.B.asc?r:r.reverse()}}var fe=function(e){var t=e.osName,n=e.rhsm;return(""===n||void 0===n)&&t||Z().createElement(l.u,{content:C.N.formatMessage(w.Z.textLockVersionTooltip,{lockedVersion:n})},Z().createElement(u.k,{flex:{default:"inlineFlex"}},Z().createElement(s.B,{spacer:{default:"spacerSm"}},t),Z().createElement(s.B,{spacer:{default:"spacerSm"}},Z().createElement(m.ZP,{size:"sm",color:"var(--pf-global--info-color--100)"}))))},pe=function(e){return Object.keys(e).filter((function(t){return e[t]}))},de=function(e){var t=e.offset||K(e.page||1,e.perPage||20),n=e.limit||V(e.perPage||20),r=R(R({},e),{},{offset:t,limit:n});return U(r)},ve=function(e){return{data:e.data.filter((function(e){return e.updatable}))}},me=function(e,t){var n=R(R({},e),t);return R({page:Number(n.page||1),perPage:Number(n.perPage||20)},n.sort&&{sortBy:{key:n.sort.replace(/^-/,""),direction:n.sort.match(/^-/)?"desc":"asc"}})},ge=function(e){return Z().createElement(k.Z,{text:e,maxLine:"1",ellipsis:"(...)",trimRight:!0,basedOn:"letters"})},ye=function(e){return/^(RHEA|RHBA|RHSA)/.test(e)},he=function(e,t){var n,r,c,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[];e&&e.forEach((function(e,t){var n=e;"object"===(0,o.Z)(e)?(n=null==e?void 0:e.values.map((function(t){return"tags=".concat(encodeURIComponent("".concat(e.category,"/").concat(t.tagKey,"=").concat(t.value)))})),i[t]=Array.isArray(n)&&O()(n)||n):i[t]="tags=".concat(encodeURIComponent(n))}));var u={selectedTags:[],systemProfile:{}};return u.systemProfile=R(R(R(R({},(null==a||null===(n=a.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==a||null===(r=a["Ansible Automation Platform"])||void 0===r?void 0:r.isSelected)&&{ansible:{controller_version:"not_nil"}}),(null==a||null===(c=a["Microsoft SQL"])||void 0===c?void 0:c.isSelected)&&{mssql:{version:"not_nil"}}),(null==t?void 0:t.length)>0&&{sap_sids:t}),i&&(u.selectedTags=i),u},be=function(e){var t=Date.parse(e);if(!1===isNaN(t)){var n=new Date(t),r=-n.getTimezoneOffset(),o=r>=0?"+":"-",c=function(e){return"".concat(Math.floor(Math.abs(e))).padStart(2,"0")};return n.getFullYear()+"-"+c(n.getMonth()+1)+"-"+c(n.getDate())+"T"+c(n.getHours())+":"+c(n.getMinutes())+":"+c(n.getSeconds())+o+c(r/60)+":"+c(r%60)}return e},Oe=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"))+"-".concat(t.getDate().toString().padStart(2,"0"))},Ee=function(e){var t=[];return"object"===(0,o.Z)(e)&&Object.keys(e).forEach((function(n){e[n]&&t.push(n)})),t},je=function(e,t){var n=[].concat((0,r.Z)(e),(0,r.Z)(Ee(t)));return null==n?void 0:n.reduce((function(e,t){return e[t]=!0,e}),{})},Se=function(e){return Object.keys(e).reduce((function(t,n){return t[n]=void 0!==e[n]&&e[n],t}),{})},_e=function(e){return"object"===(0,o.Z)(e)&&null!==e}}}]);