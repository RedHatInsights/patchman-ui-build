"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[1817,5391],{5391:(e,t,n)=>{n.d(t,{$G:()=>W,CM:()=>L,Hv:()=>ve,K1:()=>Ze,KZ:()=>ue,Kn:()=>ke,L0:()=>H,LI:()=>je,MC:()=>Oe,MS:()=>te,Nt:()=>Y,Or:()=>ge,PZ:()=>oe,Q6:()=>pe,Qg:()=>se,Qh:()=>Se,Qy:()=>ee,R_:()=>ae,Sz:()=>ne,Ut:()=>z,WN:()=>le,Ww:()=>ce,YB:()=>fe,bJ:()=>Pe,bK:()=>F,cX:()=>$,f1:()=>be,fm:()=>me,gA:()=>he,hO:()=>Q,jC:()=>Ee,kp:()=>K,lq:()=>de,mt:()=>ie,p$:()=>G,q5:()=>ye,r:()=>q,vs:()=>J,vy:()=>V,xj:()=>X});var r=n(93433),c=n(71002),a=n(45987),o=n(4942),i=n(29439),u=n(28191),l=n(92298),s=n(16545),f=n(51162),p=n(98614),v=n(25281),d=n(78116),m=n(53688),g=n(8307),y=n(27578),h=n(48585),b=n(85564),O=n.n(b),E=n(30998),j=n.n(E),S=n(35937),Z=n.n(S),P=n(17563),k=n(43297),_=n.n(k),w=n(17582),x=n(96620),I=n(30893),N=n(67248),B=n(13784),D=n(32132),T=n(35240),C=["sap_sids"],M=["filter","systemProfile"];function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function R(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(e){var t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t},L=function(e,t){return[t/e+1,e]},Q=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:B.mt;if(t){var c=(0,i.Z)(t,1)[0],a=t.join(),o="-"===c[0]?h.B.desc:h.B.asc;return Object.keys(r).forEach((function(e){Object.keys(r[e]).forEach((function(t){r[e][t]===a&&(c=e,o=t)}))})),c=c.replace(/^(-|\+)/,""),{index:j()(e,(function(e){return e.key===c}))+n,direction:o}}return{}},X=function(e,t){var n=t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{});return R(R({},e),n)},F=function(e,t){var n=[].concat(e).map((function(e){return{rowId:e.id,value:e.selected}})),r=X(t,n);return Z()(r,(function(e){return!!e}))},J=function(e,t){return e[t/2].id},H=function(e,t){return e*t-t},K=function(e){return e};function W(e,t,n){return e.length>t?_().createElement(_().Fragment,null,e.substring(0,t-1),"... ",n):e}var Y=function(e,t,n){return W((r=e)&&r.replace(new RegExp("\\n(?=[^\\n])","g"),""),t,_().createElement("a",{onClick:function(){return n(e.length)}},D.N.formatMessage(I.Z.linksReadMore)));var r};function z(e){var t=(0,i.Z)(e,4),n=t[0],r=t[1],c=t[2],a=t[3],o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"applicable";return _().createElement(u.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},[n,r,c].every((function(e){return 0===e}))&&"No ".concat(o," advisories"),0!==c&&_().createElement(l.B,{spacer:{default:"spacerXs"}},_().createElement(N.Z,{tooltipText:"Security advisories",count:c,Icon:y.ZP})),0!==r&&_().createElement(l.B,{spacer:{default:"spacerXs"}},_().createElement(N.Z,{tooltipText:"Bug fixes",count:r,Icon:f.ZP})),0!==n&&_().createElement(l.B,{spacer:{default:"spacerXs"}},_().createElement(N.Z,{tooltipText:"Enhancements",count:n,Icon:d.ZP})),0!==a&&_().createElement(l.B,{spacer:{default:"spacerXs"}},_().createElement(N.Z,{tooltipText:"Other",count:a,Icon:v.ZP})))}function V(e){return _().createElement("div",{style:{display:"flex",alignItems:"center"}},e&&_().createElement(g.ZP,{style:{color:"var(--pf-global--palette--blue-400)"}})||_().createElement(p.ZP,{style:{color:"var(--pf-global--success-color--100)"}}),_().createElement("span",{style:{marginLeft:"var(--pf-global--spacer--sm)"}},e?"Upgradable":"Up-to-date"))}function q(e){return B.QG.find((function(t){return t.value===e}))||B.QG[0]}var G=function(e,t){return _().createElement(x.Link,{to:{pathname:"/systems/".concat(t),state:{tab:"packages"}}},e)};function $(e,t,n){return-1===location.href.indexOf("inventory")?_().createElement(x.Link,{to:"/".concat(e,"/").concat(t)},void 0===n?t:n):_().createElement("a",{href:"".concat(document.baseURI,"insights/patch/").concat(e,"/").concat(t)},n||t)}var ee=function(e){return Object.values(e).filter((function(e){return e}))},te=function(e,t,n){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"".concat(n,":").concat(e),description:e}})),systems:t}},ne=function(e,t,n){return!!e&&t(e,n)},re=function(e,t){var n=e.filter,r=e.systemProfile,c=void 0===r?{}:r,u=(0,a.Z)(e,M);u=R(R({},u),function(e){var n={};return e&&Object.entries(e).forEach((function(e){var r=(0,i.Z)(e,2),c=r[0],a=r[1];a=t&&function(e,t){var n=B.sS[e];return n&&((null==n?void 0:n.values)||[]).find((function(e){return e.value===t}))||{apiValue:t}}(c,a).apiValue||a;var u=[].concat(a).length>1||B.YX.includes(c)?"in:":"";n=R(R({},n),{},(0,o.Z)({},"filter[".concat(c,"]"),"".concat(u).concat(a.toString())))})),n}(n));var l=[];Object.keys(u).forEach((function(e){var t=encodeURIComponent(e),n=encodeURIComponent(u[e]);["",void 0,null].some((function(t){return[n,e].includes(t)}))||(["selectedTags","systemProfile"].includes(e)?"selectedTags"===e&&l.push.apply(l,u[e]):l.push(t.concat("=").concat(n)))}));var s=Object.keys(c).length>0&&function(e){var t=e.sap_sids,n=(0,a.Z)(e,C),r="";Object.entries((0,T.h3)({system_profile:n})).forEach((function(e){var t=(0,i.Z)(e,2),n=t[0],c=t[1];r="".concat(r,"&").concat(n,"=").concat(c)}));var c=null==t?void 0:t.map((function(e){return"filter[system_profile][sap_sids][in]=".concat(e)})).join("&");return r.concat(t?"&".concat(c,"#SIDs=").concat(t.join(",")):"")}(c)||"";return"?".concat(l.join("&")).concat(s)},ce=function(e){return re(e,!0)},ae=function(e){delete e.id;var t=R({},e);return delete t.selectedTags,re(U(t),!1)},oe=function(e){var t=P.parse(e),n={};return Object.keys(t).forEach((function(e){if(!e.startsWith("filter[system_profile]")){var r=parseInt(t[e],10),c=isNaN(r)?t[e]:r,a=e.search(/\[.*\]/);if(a>0){var i=e.slice(0,a),u=e.slice(a+1,-1);n[i]=R(R({},n[i]),{},(0,o.Z)({},u,"string"==typeof(l=c)&&l.startsWith("in:")?l.slice(3).split(","):l))}else n[e]=c}var l})),n},ie=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Search",c=[],a=function(e,t){if(B.YX.includes(t))return(e[t]&&("string"==typeof e[t]&&e[t].split(",")||e[t])||[]).map((function(e){return{name:e,id:t,value:e}}));var n=B.sS[t].values;return e[t]?[].concat(e[t]).map((function(e){var t=n.find((function(t){return t.value.toString()===e.toString()}));return{name:t.label,value:e,id:t.value}})):[]};return e&&(n=Object.keys(e).filter((function(t){return""!==e[t]&&0!==[].concat(e[t]).length})),c=c.concat(n.map((function(t){return{category:"installed_evra"===t?"Package version":B.sS[t].label,id:t,chips:a(e,t)}})))),t&&(c=c.concat([{category:r,id:"search",chips:[{name:t,value:t}]}])),c},ue=function(e,t){var n=R(R({},e),t);return["filter","search","limit","selectedTags"].some((function(e){return t.hasOwnProperty(e)}))&&(n.offset=0),t.hasOwnProperty("filter")&&(n.filter=R(R({},e.filter),t.filter),Object.keys(n.filter).forEach((function(e){return(void 0===n.filter[e]||""===n.filter[e])&&delete n.filter[e]}))),n.hasOwnProperty("tags")&&n&&delete n.tags,n};function le(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}function se(e,t,n){var r=e.sort((function(e,n){var r=e.cells,c=n.cells,a=r[t].value||r[t].title,o=c[t].value||c[t].title,i=a.toString().toUpperCase(),u=o.toString().toUpperCase();return i.localeCompare(u)}));return{sortBy:{index:t,direction:n},sortedCves:n===h.B.asc?r:r.reverse()}}var fe=function(e){var t=e.osName,n=e.rhsm;return(""===n||void 0===n)&&t||_().createElement(s.u,{content:D.N.formatMessage(I.Z.textLockVersionTooltip,{lockedVersion:n})},_().createElement(u.k,{flex:{default:"inlineFlex"}},_().createElement(l.B,{spacer:{default:"spacerSm"}},t),_().createElement(l.B,{spacer:{default:"spacerSm"}},_().createElement(m.ZP,{size:"sm",color:"var(--pf-global--info-color--100)"}))))},pe=function(e){return Object.keys(e).filter((function(t){return e[t]}))},ve=function(e){var t=e.offset||H(e.page||1,e.perPage||20),n=e.limit||K(e.perPage||20),r=R(R({},e),{},{offset:t,limit:n});return U(r)},de=function(e){return{data:e.data.filter((function(e){return e.updatable}))}},me=function(e,t){var n=R(R({},e),t);return R({page:Number(n.page||1),perPage:Number(n.perPage||20)},n.sort&&{sortBy:{key:n.sort.replace(/^-/,""),direction:n.sort.match(/^-/)?"desc":"asc"}})},ge=function(e){return _().createElement(w.Z,{text:e,maxLine:"1",ellipsis:"(...)",trimRight:!0,basedOn:"letters"})},ye=function(e){return/^(RHEA|RHBA|RHSA)/.test(e)},he=function(e,t){var n,r,a,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[];e&&e.forEach((function(e,t){var n=e;"object"===(0,c.Z)(e)?(n=null==e?void 0:e.values.map((function(t){return"tags=".concat(encodeURIComponent("".concat(e.category,"/").concat(t.tagKey,"=").concat(t.value)))})),i[t]=Array.isArray(n)&&O()(n)||n):i[t]="tags=".concat(encodeURIComponent(n))}));var u={selectedTags:[],systemProfile:{}};return u.systemProfile=R(R(R(R({},(null==o||null===(n=o.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==o||null===(r=o["Ansible Automation Platform"])||void 0===r?void 0:r.isSelected)&&{ansible:{controller_version:"not_nil"}}),(null==o||null===(a=o["Microsoft SQL"])||void 0===a?void 0:a.isSelected)&&{mssql:{version:"not_nil"}}),(null==t?void 0:t.length)>0&&{sap_sids:t}),i&&(u.selectedTags=i),u},be=function(e){var t=Date.parse(e);if(!1===isNaN(t)){var n=new Date(t),r=-n.getTimezoneOffset(),c=r>=0?"+":"-",a=function(e){return"".concat(Math.floor(Math.abs(e))).padStart(2,"0")};return n.getFullYear()+"-"+a(n.getMonth()+1)+"-"+a(n.getDate())+"T"+a(n.getHours())+":"+a(n.getMinutes())+":"+a(n.getSeconds())+c+a(r/60)+":"+a(r%60)}return e},Oe=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"))+"-".concat(t.getDate().toString().padStart(2,"0"))},Ee=function(e){if(!e)return"N/A";if(e.includes("T")){var t=new Date(e).toISOString().split("T");e=(0,i.Z)(t,1)[0]}var n=e.split("-"),r=(0,i.Z)(n,3),c=r[0],a=r[1],o=r[2];return"".concat(o," ").concat(["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"][parseInt(a)-1]," ").concat(c)},je=function(e){var t=[];return"object"===(0,c.Z)(e)&&Object.keys(e).forEach((function(n){e[n]&&t.push(n)})),t},Se=function(e,t){var n=[].concat((0,r.Z)(e),(0,r.Z)(je(t)));return null==n?void 0:n.reduce((function(e,t){return e[t]=!0,e}),{})},Ze=function(e){return Object.keys(e).reduce((function(t,n){return t[n]=void 0!==e[n]&&e[n],t}),{})},Pe=function(e){return Object.keys(Object.fromEntries(Object.entries(e).filter((function(e){return!0===(0,i.Z)(e,2)[1]}))))},ke=function(e){return"object"===(0,c.Z)(e)&&null!==e}},36491:(e,t,n)=>{n.r(t);var r=n(43297),c=n.n(r),a=n(12181),o=n.n(a),i=n(28216),u=n(56909),l=n(7322),s=n(55323),f=n(59748);const p=function(){return c().createElement("div",{className:"patch-root"},c().createElement(s.Pj,{locale:navigator.language.slice(0,2),messages:f},c().createElement(i.zt,{store:l.h},c().createElement(u.Z,null))))};o().render(c().createElement(p,null),document.getElementById("root"))}}]);
//# sourceMappingURL=../sourcemaps/1817.335fdb02580bd63ea44141f52c6a84e1.js.map