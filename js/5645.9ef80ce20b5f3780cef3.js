"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[5645,2766],{5391:(e,t,n)=>{n.d(t,{$G:()=>J,CM:()=>R,Hv:()=>pe,K1:()=>Ze,KZ:()=>ie,Kn:()=>Pe,L0:()=>G,LI:()=>Ee,MC:()=>be,MS:()=>$,Nt:()=>L,Or:()=>me,PZ:()=>ce,Q6:()=>fe,Qg:()=>se,Qh:()=>je,Qy:()=>q,R_:()=>re,Sz:()=>ee,Ut:()=>K,WN:()=>ue,Ww:()=>ne,YB:()=>le,bJ:()=>Se,bK:()=>Q,cX:()=>V,f1:()=>ye,fm:()=>de,gA:()=>he,hO:()=>F,jC:()=>Oe,kp:()=>H,lq:()=>ve,mt:()=>oe,p$:()=>z,q5:()=>ge,r:()=>Y,vs:()=>X,vy:()=>W,xj:()=>U,xy:()=>ae});var r=n(93433),c=n(71002),o=n(45987),a=n(4942),i=n(29439),u=n(28191),s=n(92298),l=n(35224),f=n(51162),p=n(25281),v=n(78116),d=n(53688),m=n(27578),g=n(48585),h=n(85564),y=n.n(h),b=n(30998),O=n.n(b),E=n(35937),j=n.n(E),Z=n(17563),S=n(43297),P=n.n(S),k=n(17582),w=n(30893),N=n(67248),I=n(13784),x=n(32132),_=n(35240),C=n(92397),M=["sap_sids"],T=["filter","systemProfile","group_name"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,a.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t},R=function(e,t){return[t/e+1,e]},F=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:I.mt;if(t){var c=(0,i.Z)(t,1)[0],o=t.join(),a="-"===c[0]?g.B.desc:g.B.asc;return Object.keys(r).forEach((function(e){Object.keys(r[e]).forEach((function(t){r[e][t]===o&&(c=e,a=t)}))})),c=c.replace(/^(-|\+)/,""),{index:O()(e,(function(e){return e.key===c}))+n,direction:a}}return{}},U=function(e,t){var n=t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{});return B(B({},e),n)},Q=function(e,t){var n=[].concat(e).map((function(e){return{rowId:e.id,value:e.selected}})),r=U(t,n);return j()(r,(function(e){return!!e}))},X=function(e,t){return e[t/2].id},G=function(e,t){return e*t-t},H=function(e){return e};function J(e,t,n){return e.length>t?P().createElement(P().Fragment,null,e.substring(0,t-1),"... ",n):e}var L=function(e,t,n){return J(function(e){var t,n=e.search(/:/);return n>0?e.slice(0,n+2)+((t=e.substring(n+2))&&t.replace(new RegExp("\\n\\n(?=.*[\\n\\n])","g"),"\n")):e}(e),t,P().createElement("a",{onClick:function(){return n(e.length)}},x.N.formatMessage(w.Z.linksReadMore)))};function K(e){var t=(0,i.Z)(e,4),n=t[0],r=t[1],c=t[2],o=t[3],a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"applicable";return P().createElement(u.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},[n,r,c].every((function(e){return 0===e}))&&"No ".concat(a," advisories"),0!==c&&P().createElement(s.B,{spacer:{default:"spacerXs"}},P().createElement(N.Z,{tooltipText:"Security advisories",count:c,Icon:m.ZP})),0!==r&&P().createElement(s.B,{spacer:{default:"spacerXs"}},P().createElement(N.Z,{tooltipText:"Bug fixes",count:r,Icon:f.ZP})),0!==n&&P().createElement(s.B,{spacer:{default:"spacerXs"}},P().createElement(N.Z,{tooltipText:"Enhancements",count:n,Icon:v.ZP})),0!==o&&P().createElement(s.B,{spacer:{default:"spacerXs"}},P().createElement(N.Z,{tooltipText:"Other",count:o,Icon:p.ZP})))}function W(e){switch(e){case"None":return x.N.formatMessage(w.Z.labelsColumnsUpToApplicable);case"Applicable":return x.N.formatMessage(w.Z.labelsColumnsUpToInstallable);case"Installable":return x.N.formatMessage(w.Z.labelsColumnsUpgradable)}}function Y(e){return I.QG.find((function(t){return t.value===e}))||I.QG[0]}var z=function(e,t){return P().createElement(C.Z,{to:{pathname:"/systems/".concat(t),state:{tab:"packages"}}},e)};function V(e,t,n){return-1===location.href.indexOf("inventory")?P().createElement(C.Z,{to:"/".concat(e,"/").concat(t)},void 0===n?t:n):P().createElement("a",{href:"".concat(document.baseURI,"insights/patch/").concat(e,"/").concat(t)},n||t)}var q=function(e){return Object.values(e).filter((function(e){return e}))},$=function(e,t,n){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"".concat(n,":").concat(e),description:e}})),systems:t}},ee=function(e,t,n){return!!e&&t(e,n)},te=function(e,t){var n=e.filter,r=e.systemProfile,c=void 0===r?{}:r,u=e.group_name,s=(0,o.Z)(e,T);s=B(B({},s),function(e){var n={};return e&&Object.entries(e).forEach((function(e){var r=(0,i.Z)(e,2),c=r[0],o=r[1];o=t&&function(e,t){var n=I.sS[e];return n&&((null==n?void 0:n.values)||[]).find((function(e){return e.value===t}))||{apiValue:t}}(c,o).apiValue||o;var u=[].concat(o).length>1||I.YX.includes(c)?"in:":"";n=B(B({},n),{},(0,a.Z)({},"filter[".concat(c,"]"),"".concat(u).concat(o.toString())))})),n}(B(B({},n),u?{group_name:u}:{})));var l=[];Object.keys(s).forEach((function(e){var t=encodeURIComponent(e),n=encodeURIComponent(s[e]);["",void 0,null].some((function(t){return[n,e].includes(t)}))||(["selectedTags","systemProfile"].includes(e)?"selectedTags"===e&&l.push.apply(l,s[e]):l.push(t.concat("=").concat(n)))}));var f=Object.keys(c).length>0&&function(e){var t=e.sap_sids,n=(0,o.Z)(e,M),r="";Object.entries((0,_.h3)({system_profile:n})).forEach((function(e){var t=(0,i.Z)(e,2),n=t[0],c=t[1];r="".concat(r,"&").concat(n,"=").concat(c)}));var c=null==t?void 0:t.map((function(e){return"filter[system_profile][sap_sids][in]=".concat(e)})).join("&");return r.concat(t?"&".concat(c,"#SIDs=").concat(t.join(",")):"")}(c)||"";return"?".concat(l.join("&")).concat(f)},ne=function(e){return te(e,!0)},re=function(e){delete e.id;var t=B({},e);return delete t.selectedTags,te(D(t),!1)},ce=function(e){var t=Z.parse(e),n={};return Object.keys(t).forEach((function(e){if(!e.startsWith("filter[system_profile]")){var r=parseInt(t[e],10),c=isNaN(r)?t[e]:r,o=e.search(/\[.*\]/);if(o>0){var i=e.slice(0,o),u=e.slice(o+1,-1);n[i]=B(B({},n[i]),{},(0,a.Z)({},u,"string"==typeof(s=c)&&s.startsWith("in:")?s.slice(3).split(","):s))}else n[e]=c}var s})),n},oe=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Search",c=[],o=function(e,t){if(I.YX.includes(t))return(e[t]&&("string"==typeof e[t]&&e[t].split(",")||e[t])||[]).map((function(e){return{name:e,id:t,value:e}}));var n=I.sS[t].values;return e[t]?[].concat(e[t]).map((function(e){var t=n.find((function(t){return t.value.toString()===e.toString()}));return{name:t.label,value:e,id:t.value}})):[]};return e&&(n=Object.keys(e).filter((function(t){return""!==e[t]&&0!==[].concat(e[t]).length})),c=c.concat(n.map((function(t){return{category:"installed_evra"===t?"Package version":I.sS[t].label,id:t,chips:o(e,t)}})))),t&&(c=c.concat([{category:r,id:"search",chips:[{name:t,value:t}]}])),c},ae=function(e,t){var n;return B(B(B({},e),Array.isArray(t.hostGroupFilter)&&t.hostGroupFilter.length>0?{group_name:t.hostGroupFilter}:{}),(null==t||null===(n=t.osFilter)||void 0===n?void 0:n.length)>0?{os:t.osFilter.map((function(e){return"RHEL "+e.value})).join(",")}:{})},ie=function(e,t){var n=B(B({},e),t);return["filter","search","limit","selectedTags"].some((function(e){return t.hasOwnProperty(e)}))&&(n.offset=0),t.hasOwnProperty("filter")&&(n.filter=B(B({},e.filter),t.filter),Object.keys(n.filter).forEach((function(e){return(void 0===n.filter[e]||""===n.filter[e])&&delete n.filter[e]}))),n.hasOwnProperty("tags")&&n&&delete n.tags,n};function ue(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}function se(e,t,n){var r=e.sort((function(e,n){var r=e.cells,c=n.cells,o=r[t].value||r[t].title,a=c[t].value||c[t].title,i=o.toString().toUpperCase(),u=a.toString().toUpperCase();return i.localeCompare(u)}));return{sortBy:{index:t,direction:n},sortedCves:n===g.B.asc?r:r.reverse()}}var le=function(e){var t=e.osName,n=e.rhsm;return n?P().createElement(l.u,{content:x.N.formatMessage(w.Z.textLockVersionTooltip,{lockedVersion:n})},P().createElement(u.k,{flex:{default:"inlineFlex"}},P().createElement(s.B,{spacer:{default:"spacerSm"}},t),P().createElement(s.B,{spacer:{default:"spacerSm"}},P().createElement(d.ZP,{size:"sm",color:"var(--pf-global--info-color--100)"})))):t},fe=function(e){return Object.keys(e).filter((function(t){return e[t]}))},pe=function(e){var t=e.offset||G(e.page||1,e.perPage||20),n=e.limit||H(e.perPage||20),r=B(B({},e),{},{offset:t,limit:n});return D(r)},ve=function(e){return{data:e.data.filter((function(e){return e.updatable}))}},de=function(e,t){var n=B(B({},e),t);return"string"==typeof n.sort&&n.sort.match(/-?groups/)&&(n.sort=n.sort.replace("groups","group_name")),B({page:Number(n.page||1),perPage:Number(n.perPage||20)},n.sort&&{sortBy:{key:n.sort.replace(/^-/,""),direction:n.sort.match(/^-/)?"desc":"asc"}})},me=function(e){return P().createElement(k.Z,{text:e,maxLine:"1",ellipsis:"(...)",trimRight:!0,basedOn:"letters"})},ge=function(e){return/^(RHEA|RHBA|RHSA)/.test(e)},he=function(e,t){var n,r,o,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[];e&&e.forEach((function(e,t){var n=e;"object"===(0,c.Z)(e)?(n=null==e?void 0:e.values.map((function(t){return"tags=".concat(encodeURIComponent("".concat(e.category,"/").concat(t.tagKey,"=").concat(t.value)))})),i[t]=Array.isArray(n)&&y()(n)||n):i[t]="tags=".concat(encodeURIComponent(n))}));var u={selectedTags:[],systemProfile:{}};return u.systemProfile=B(B(B(B({},(null==a||null===(n=a.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==a||null===(r=a["Ansible Automation Platform"])||void 0===r?void 0:r.isSelected)&&{ansible:{controller_version:"not_nil"}}),(null==a||null===(o=a["Microsoft SQL"])||void 0===o?void 0:o.isSelected)&&{mssql:{version:"not_nil"}}),(null==t?void 0:t.length)>0&&{sap_sids:t}),i&&(u.selectedTags=i),u},ye=function(e){var t=Date.parse(e);if(!1===isNaN(t)){var n=new Date(t),r=-n.getTimezoneOffset(),c=r>=0?"+":"-",o=function(e){return"".concat(Math.floor(Math.abs(e))).padStart(2,"0")};return n.getFullYear()+"-"+o(n.getMonth()+1)+"-"+o(n.getDate())+"T"+o(n.getHours())+":"+o(n.getMinutes())+":"+o(n.getSeconds())+c+o(r/60)+":"+o(r%60)}return e},be=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"))+"-".concat(t.getDate().toString().padStart(2,"0"))},Oe=function(e){if(!e)return"N/A";if(e.includes("T")){var t=new Date(e).toISOString().split("T");e=(0,i.Z)(t,1)[0]}var n=e.split("-"),r=(0,i.Z)(n,3),c=r[0],o=r[1],a=r[2];return"".concat(a," ").concat(["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][parseInt(o)-1]," ").concat(c)},Ee=function(e){var t=[];return"object"===(0,c.Z)(e)&&Object.keys(e).forEach((function(n){e[n]&&t.push(n)})),t},je=function(e,t){var n=[].concat((0,r.Z)(e),(0,r.Z)(Ee(t)));return null==n?void 0:n.reduce((function(e,t){return e[t]=!0,e}),{})},Ze=function(e){return Object.keys(e).reduce((function(t,n){return t[n]=void 0!==e[n]&&e[n],t}),{})},Se=function(e){return Object.keys(Object.fromEntries(Object.entries(e).filter((function(e){return!0===(0,i.Z)(e,2)[1]}))))},Pe=function(e){return"object"===(0,c.Z)(e)&&null!==e}},36491:(e,t,n)=>{n.r(t);var r=n(43297),c=n.n(r),o=n(12181),a=n.n(o),i=n(93942),u=n(80364),s=n(7322),l=n(55323),f=n(59748);const p=function(){return c().createElement("div",{className:"patch-root"},c().createElement(l.Pj,{locale:navigator.language.slice(0,2),messages:f},c().createElement(i.zt,{store:s.h},c().createElement(u.Z,null))))};a().render(c().createElement(p,null),document.getElementById("root"))}}]);
//# sourceMappingURL=../sourcemaps/5645.41a485ae25a1a32cb2c58b7beb235945.js.map