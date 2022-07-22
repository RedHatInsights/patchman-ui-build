"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[8001],{53446:(e,t,n)=>{t.L1=t.FV=t.wN=void 0;var r=n(68129);t.wN=function(e){return{type:r.ADD_NOTIFICATION,payload:e}},t.FV=function(e){return{type:r.REMOVE_NOTIFICATION,payload:e}},t.L1=function(){return{type:r.CLEAR_NOTIFICATIONS}},t.wN,t.FV,t.L1},91433:(e,t,n)=>{n.d(t,{f:()=>d});var r=n(8896),a=n(219),c=n(74183),o=n(86728),i=n(34348),u=n(35451),s=n(43297),l=n.n(s),f=n(32132),p=n(30893),d=function(){return l().createElement(r.b,null,l().createElement(a.ub,{style:{paddingTop:40}},l().createElement(o.k,{icon:function(){return l().createElement(u.default,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),l().createElement(i.Title,{headingLevel:"h5",size:"lg"},f.N.formatMessage(p.Z.statesNoApplicableAdvisories)),l().createElement(c.B,null,f.N.formatMessage(p.Z.statesSystemUpToDate))))}},5391:(e,t,n)=>{n.d(t,{$G:()=>G,CM:()=>V,Hv:()=>ye,K1:()=>Ne,KZ:()=>pe,L0:()=>K,LI:()=>Pe,MC:()=>Ze,MS:()=>ae,Nt:()=>J,Or:()=>Ee,PZ:()=>le,Q6:()=>ge,Qg:()=>ve,Qh:()=>we,Qy:()=>re,R9:()=>Q,R_:()=>se,Sz:()=>ce,Ut:()=>$,WN:()=>de,Ww:()=>ue,YB:()=>me,bK:()=>W,cX:()=>ne,f1:()=>je,fm:()=>Oe,gA:()=>Se,gB:()=>_e,hO:()=>X,kp:()=>q,li:()=>z,lq:()=>be,mt:()=>fe,q5:()=>ke,r:()=>te,vs:()=>Y,vy:()=>ee,xj:()=>H,zw:()=>he});var r=n(93433),a=n(71002),c=n(45987),o=n(15861),i=n(4942),u=n(29439),s=n(85564),l=n.n(s),f=n(30998),p=n.n(f),d=n(64687),v=n.n(d),m=n(36001),g=n(42057),y=n(76004),h=n(52653),b=n(44535),O=n(98970),E=n(80971),k=n(31369),S=n(85541),_=n(19210),j=n(72573),Z=n(17563),P=n(43297),w=n.n(P),N=n(17582),I=n(334),x=n(30893),T=n(67248),C=n(58684),D=n(13784),A=n(32132),B=n(35240),M=["sap_sids"],R=["filter","systemProfile"];function L(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function F(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?L(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):L(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t},V=function(e,t){return[t/e+1,e]},Q=function(e,t){return!!Object.keys((null==e?void 0:e.data)||{}).length&&{issues:Object.keys(e.data).map((function(n){return{id:"".concat(t,":").concat(n),description:n,systems:e.data[n]}}))}},X=function(e,t,n){if(t){var r=(0,u.Z)(t,1)[0],a=t.join(),c="-"===r[0]?j.SortByDirection.desc:j.SortByDirection.asc;return Object.keys(D.s1).forEach((function(e){Object.keys(D.s1[e]).forEach((function(t){D.s1[e][t]===a&&(r=e,c=t)}))})),r=r.replace(/^(-|\+)/,""),{index:p()(e,(function(e){return e.key===r}))+n,direction:c}}return{}},z=function(e,t,n){e=("updated"!==e||n?"updated"===e&&n&&C.Hd[0].key:"last_upload")||e;var r="".concat("ASC"===t?"":"-").concat(e);return Object.keys(D.s1).forEach((function(n){n===e&&(r=D.s1[n][t.toLowerCase()])})),r},H=function(e,t){var n=t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{});return F(F({},e),n)},W=function(e,t){var n=[].concat(e).map((function(e){return{rowId:e.id,value:e.selected}}));return H(t,n)},Y=function(e,t){return e[t/2].id},K=function(e,t){return e*t-t},q=function(e){return e};function G(e,t,n){return e.length>t?w().createElement(w().Fragment,null,e.substr(0,t-1),"... ",n):e}var J=function(e,t,n){return G((r=e)&&r.replace(new RegExp("\\n(?=[^\\n])","g"),""),t,w().createElement("a",{onClick:function(){return n(e.length)}},A.N.formatMessage(x.Z.linksReadMore)));var r};function $(e){var t=(0,u.Z)(e,4),n=t[0],r=t[1],a=t[2],c=t[3];return w().createElement(m.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},[n,r,a].every((function(e){return 0===e}))&&"No applicable advisories",0!==a&&w().createElement(g.B,{spacer:{default:"spacerXs"}},w().createElement(T.Z,{tooltipText:"Security advisories",count:a,Icon:_.ZP})),0!==r&&w().createElement(g.B,{spacer:{default:"spacerXs"}},w().createElement(T.Z,{tooltipText:"Bug fixes",count:r,Icon:h.ZP})),0!==n&&w().createElement(g.B,{spacer:{default:"spacerXs"}},w().createElement(T.Z,{tooltipText:"Enhancements",count:n,Icon:E.ZP})),0!==c&&w().createElement(g.B,{spacer:{default:"spacerXs"}},w().createElement(T.Z,{tooltipText:"Other",count:c,Icon:O.ZP})))}function ee(e){return w().createElement("div",{style:{display:"flex",alignItems:"center"}},e&&w().createElement(S.default,{style:{color:"var(--pf-global--palette--blue-400)"}})||w().createElement(b.default,{style:{color:"var(--pf-global--success-color--100)"}}),w().createElement("span",{style:{marginLeft:"var(--pf-global--spacer--sm)"}},e?"Upgradable":"Up-to-date"))}function te(e){return D.QG.find((function(t){return t.value===e}))||D.QG[0]}function ne(e,t,n){return-1===location.href.indexOf("inventory")?w().createElement(I.Link,{to:"/".concat(e,"/").concat(t)},void 0===n?t:n):w().createElement("a",{href:"".concat(document.baseURI,"insights/patch/").concat(e,"/").concat(t)},n||t)}var re=function(e){return Object.values(e).filter((function(e){return e}))},ae=function(e,t,n){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"".concat(n,":").concat(e),description:e}})),systems:t}};function ce(e,t,n,r){return oe.apply(this,arguments)}function oe(){return(oe=(0,o.Z)(v().mark((function e(t,n,r,a){var c,o;return v().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return e.next=3,n(t);case 3:return c=e.sent,o=r(c,a),e.next=7,o;case 7:return e.abrupt("return",e.sent);case 10:return e.abrupt("return",!1);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=function(e,t){var n=e.filter,r=e.systemProfile,a=void 0===r?{}:r,o=(0,c.Z)(e,R);o=F(F({},o),function(e){var n={};return e&&Object.entries(e).forEach((function(e){var r=(0,u.Z)(e,2),a=r[0],c=r[1];c=t&&function(e,t){var n=D.sS[e];return n&&n.values.find((function(e){return e.value===t}))||{apiValue:t}}(a,c).apiValue||c;var o=[].concat(c).length>1||D.YX.includes(a)?"in:":"";n=F(F({},n),{},(0,i.Z)({},"filter[".concat(a,"]"),"".concat(o).concat(c.toString())))})),n}(n));var s=[];Object.keys(o).forEach((function(e){var t=encodeURIComponent(e),n=encodeURIComponent(o[e]);["",void 0,null].some((function(t){return[n,e].includes(t)}))||(["selectedTags","systemProfile"].includes(e)?"selectedTags"===e&&s.push.apply(s,o[e]):s.push(t.concat("=").concat(n)))}));var l=Object.keys(a).length>0&&function(e){var t=e.sap_sids,n=(0,c.Z)(e,M),r="";Object.entries((0,B.h3)({system_profile:n})).forEach((function(e){var t=(0,u.Z)(e,2),n=t[0],a=t[1];r="".concat(r,"&").concat(n,"=").concat(a)}));var a=null==t?void 0:t.map((function(e){return"filter[system_profile][sap_sids][in]=".concat(e)})).join("&");return r.concat(t?"&".concat(a,"#SIDs=").concat(t.join(",")):"")}(a)||"";return"?".concat(s.join("&")).concat(l)},ue=function(e){return ie(e,!0)},se=function(e){delete e.id;var t=F({},e);return delete t.selectedTags,ie(U(t),!1)},le=function(e){var t=Z.parse(e),n={};return Object.keys(t).forEach((function(e){if(!e.startsWith("filter[system_profile]")){var r=parseInt(t[e],10),a=isNaN(r)?t[e]:r,c=e.search(/\[.*\]/);if(c>0){var o=e.slice(0,c),u=e.slice(c+1,-1);n[o]=F(F({},n[o]),{},(0,i.Z)({},u,"string"==typeof(s=a)&&s.startsWith("in:")?s.slice(3).split(","):s))}else n[e]=a}var s})),n},fe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Search",r=[],a=function(e,t){if(D.YX.includes(t))return(e[t]&&("string"==typeof e[t]&&e[t].split(",")||e[t])||[]).map((function(e){return{name:e,id:t,value:e}}));var n=D.sS[t].values;return e[t]?[].concat(e[t]).map((function(e){var t=n.find((function(t){return t.value.toString()===e.toString()}));return{name:t.label,value:e,id:t.value}})):[]},c=function(){var t=Object.keys(e).filter((function(t){return""!==e[t]&&0!==[].concat(e[t]).length}));r=r.concat(t.map((function(t){return{category:"installed_evra"===t?"Package version":D.sS[t].label,id:t,chips:a(e,t)}})))},o=function(){r=r.concat([{category:n,id:"search",chips:[{name:t,value:t}]}])};return e&&c(),t&&o(),r},pe=function(e,t){var n=F(F({},e),t);return["filter","search","limit","selectedTags"].some((function(e){return t.hasOwnProperty(e)}))&&(n.offset=0),t.hasOwnProperty("filter")&&(n.filter=F(F({},e.filter),t.filter),Object.keys(n.filter).forEach((function(e){return void 0===n.filter[e]&&delete n.filter[e]}))),n.hasOwnProperty("tags")&&n&&delete n.tags,n};function de(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}function ve(e,t,n){var r=e.sort((function(e,n){var r=e.cells,a=n.cells,c=r[t].value||r[t].title,o=a[t].value||a[t].title,i=c.toString().toUpperCase(),u=o.toString().toUpperCase();return i.localeCompare(u)}));return{sortBy:{index:t,direction:n},sortedCves:n===j.SortByDirection.asc?r:r.reverse()}}var me=function(e){var t=e.osName,n=e.rhsm;return(""===n||void 0===n)&&t||w().createElement(y.Tooltip,{content:A.N.formatMessage(x.Z.textLockVersionTooltip,{lockedVersion:n})},w().createElement(m.k,{flex:{default:"inlineFlex"}},w().createElement(g.B,{spacer:{default:"spacerSm"}},t),w().createElement(g.B,{spacer:{default:"spacerSm"}},w().createElement(k.default,{size:"sm",color:"var(--pf-global--info-color--100)"}))))},ge=function(e){return Object.keys(e).filter((function(t){return e[t]}))},ye=function(e){var t=e.offset||K(e.page||1,e.perPage||20),n=e.limit||q(e.perPage||20),r=F(F({},e),{},{offset:t,limit:n});return U(r)},he=function(e){return{data:null==e?void 0:e.data.filter((function(e){var t=e.attributes||{},n=t.packages_installed,r=t.packages_updatable,a=t.rhba_count,c=t.rhsa_count,o=t.rhea_count;return!(0===r||[n,a,c,o].every((function(e){return 0===e})))}))}},be=function(e){return{data:e.data.filter((function(e){return e.updatable}))}},Oe=function(e,t){var n=F(F({},e),t);return F({page:Number(n.page||1),perPage:Number(n.perPage||20)},n.sort&&{sortBy:{key:n.sort.replace(/^-/,""),direction:n.sort.match(/^-/)?"desc":"asc"}})},Ee=function(e){return w().createElement(N.Z,{text:e,maxLine:"1",ellipsis:"(...)",trimRight:!0,basedOn:"letters"})},ke=function(e){return/^(RHEA|RHBA|RHSA)/.test(e)},Se=function(e,t){var n,r,c,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[];e&&e.forEach((function(e,t){var n=e;"object"===(0,a.Z)(e)?(n=null==e?void 0:e.values.map((function(t){return"tags=".concat(encodeURIComponent("".concat(e.category,"/").concat(t.tagKey,"=").concat(t.value)))})),i[t]=Array.isArray(n)&&l()(n)||n):i[t]="tags=".concat(encodeURIComponent(n))}));var u={selectedTags:[],systemProfile:{}};return u.systemProfile=F(F(F(F({},(null==o||null===(n=o.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==o||null===(r=o["Ansible Automation Platform"])||void 0===r?void 0:r.isSelected)&&{ansible:{controller_version:"not_nil"}}),(null==o||null===(c=o["Microsoft SQL"])||void 0===c?void 0:c.isSelected)&&{mssql:{version:"not_nil"}}),(null==t?void 0:t.length)>0&&{sap_sids:t}),i&&(u.selectedTags=i),u},_e=function(e,t){var n=e.filter((function(e){return"updated"===e.key}));n=[F(F({},n[0]),{},{key:"last_upload"})];var a=e.filter((function(e){var t=e.key;return"display_name"===t||"tags"===t}));return[].concat((0,r.Z)(a),(0,r.Z)((0,C.Fs)(t)),[n[0]])},je=function(e){var t=Date.parse(e);if(!1===isNaN(t)){var n=new Date(t),r=-n.getTimezoneOffset(),a=r>=0?"+":"-",c=function(e){return"".concat(Math.floor(Math.abs(e))).padStart(2,"0")};return n.getFullYear()+"-"+c(n.getMonth()+1)+"-"+c(n.getDate())+"T"+c(n.getHours())+":"+c(n.getMinutes())+":"+c(n.getSeconds())+a+c(r/60)+":"+c(r%60)}return e},Ze=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"))+"-".concat(t.getDate().toString().padStart(2,"0"))},Pe=function(e){var t=[];return"object"===(0,a.Z)(e)&&Object.keys(e).forEach((function(n){e[n]&&t.push(n)})),t},we=function(e,t){var n=[].concat((0,r.Z)(e),(0,r.Z)(Pe(t)));return null==n?void 0:n.reduce((function(e,t){return e[t]=!0,e}),{})},Ne=function(e){return Object.keys(e).reduce((function(t,n){return t[n]=void 0!==e[n]&&e[n],t}),{})}}}]);
//# sourceMappingURL=../sourcemaps/8001.13f76a2e687a64ca5a6354b5417139a8.js.map