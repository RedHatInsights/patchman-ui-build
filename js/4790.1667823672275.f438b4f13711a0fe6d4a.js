"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[4790,694],{53446:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.clearNotifications=t.removeNotification=t.addNotification=void 0;var o=n(68129);t.addNotification=function(e){return{type:o.ADD_NOTIFICATION,payload:r({id:("notification","cloud-servicesnotification-"+(new Date).getTime()+Math.random().toString(36).slice(2))},e)}},t.removeNotification=function(e){return{type:o.REMOVE_NOTIFICATION,payload:e}},t.clearNotifications=function(){return{type:o.CLEAR_NOTIFICATIONS}},t.default={addNotification:t.addNotification,removeNotification:t.removeNotification,clearNotifications:t.clearNotifications}},91433:(e,t,n)=>{n.d(t,{f:()=>d});var r=n(8896),o=n(219),a=n(74183),c=n(86728),i=n(34348),u=n(35451),l=n(43297),s=n.n(l),f=n(32132),p=n(30893),d=function(){return s().createElement(r.b,null,s().createElement(o.ub,{style:{paddingTop:40}},s().createElement(c.k,{icon:function(){return s().createElement(u.default,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),s().createElement(i.Title,{headingLevel:"h5",size:"lg"},f.N.formatMessage(p.Z.statesNoApplicableAdvisories)),s().createElement(a.B,null,f.N.formatMessage(p.Z.statesSystemUpToDate))))}},5391:(e,t,n)=>{n.d(t,{$G:()=>J,CM:()=>U,Hv:()=>ye,K1:()=>Se,KZ:()=>le,L0:()=>Y,LI:()=>je,MC:()=>Pe,MS:()=>ne,Nt:()=>K,Or:()=>he,PZ:()=>ie,Q6:()=>de,Qg:()=>fe,Qh:()=>we,Qy:()=>te,R9:()=>L,R_:()=>ce,Sz:()=>re,Ut:()=>$,WN:()=>se,Ww:()=>ae,YB:()=>pe,bK:()=>H,cX:()=>ee,f1:()=>_e,fm:()=>ge,gA:()=>Ee,gB:()=>Oe,hO:()=>F,kp:()=>V,li:()=>Q,lq:()=>me,mt:()=>ue,q5:()=>be,r:()=>G,vs:()=>W,vy:()=>q,we:()=>z,xj:()=>X,zw:()=>ve});var r=n(93433),o=n(71002),a=n(45987),c=n(4942),i=n(29439),u=n(85564),l=n.n(u),s=n(30998),f=n.n(s),p=n(36001),d=n(42057),y=n(76004),v=n(52653),m=n(44535),g=n(98970),h=n(80971),b=n(31369),E=n(85541),O=n(19210),_=n(72573),P=n(17563),j=n(43297),w=n.n(j),S=n(17582),k=n(334),N=n(30893),I=n(67248),Z=n(58684),T=n(13784),x=n(32132),D=n(35240),B=["sap_sids"],R=["filter","systemProfile"];function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(Object(n),!0).forEach((function(t){(0,c.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A=function(e){var t=JSON.parse(JSON.stringify(e));return Object.keys(t).forEach((function(e){return void 0===t[e]&&delete t[e]})),t},U=function(e,t){return[t/e+1,e]},L=function(e,t){for(var n=[],r=Object.keys((null==e?void 0:e.data)||{}),o=0;o<r.length;o++)""!==e.data[r[o]][0]&&n.push({id:"".concat(t,":").concat(r[o]),description:r[o],systems:e.data[r[o]]});return{issues:n}},z=function(e,t){var n=[];return Object.entries(e.data).map((function(e){var r=(0,i.Z)(e,2),o=r[0];r[1].map((function(e){var r="".concat(t,":").concat(e),a=n.findIndex((function(e){return e.id===r}));a>=0?n[a].systems.push(o):n.push({id:r,description:e,systems:[o]})}))})),{issues:n}},F=function(e,t,n){if(t){var r=(0,i.Z)(t,1)[0],o=t.join(),a="-"===r[0]?_.SortByDirection.desc:_.SortByDirection.asc;return Object.keys(T.s1).forEach((function(e){Object.keys(T.s1[e]).forEach((function(t){T.s1[e][t]===o&&(r=e,a=t)}))})),r=r.replace(/^(-|\+)/,""),{index:f()(e,(function(e){return e.key===r}))+n,direction:a}}return{}},Q=function(e,t,n){e=("updated"!==e||n?"updated"===e&&n&&Z.Hd[0].key:"last_upload")||e;var r="".concat("ASC"===t?"":"-").concat(e);return Object.keys(T.s1).forEach((function(n){n===e&&(r=T.s1[n][t.toLowerCase()])})),r},X=function(e,t){var n=t.reduce((function(e,t){return e[t.rowId]=t.value||void 0,e}),{});return M(M({},e),n)},H=function(e,t){var n=[].concat(e).map((function(e){return{rowId:e.id,value:e.selected}}));return X(t,n)},W=function(e,t){return e[t/2].id},Y=function(e,t){return e*t-t},V=function(e){return e};function J(e,t,n){return e.length>t?w().createElement(w().Fragment,null,e.substring(0,t-1),"... ",n):e}var K=function(e,t,n){return J((r=e)&&r.replace(new RegExp("\\n(?=[^\\n])","g"),""),t,w().createElement("a",{onClick:function(){return n(e.length)}},x.N.formatMessage(N.Z.linksReadMore)));var r};function $(e){var t=(0,i.Z)(e,4),n=t[0],r=t[1],o=t[2],a=t[3];return w().createElement(p.k,{flex:{default:"inlineFlex"},style:{flexWrap:"nowrap"}},[n,r,o].every((function(e){return 0===e}))&&"No applicable advisories",0!==o&&w().createElement(d.B,{spacer:{default:"spacerXs"}},w().createElement(I.Z,{tooltipText:"Security advisories",count:o,Icon:O.ZP})),0!==r&&w().createElement(d.B,{spacer:{default:"spacerXs"}},w().createElement(I.Z,{tooltipText:"Bug fixes",count:r,Icon:v.ZP})),0!==n&&w().createElement(d.B,{spacer:{default:"spacerXs"}},w().createElement(I.Z,{tooltipText:"Enhancements",count:n,Icon:h.ZP})),0!==a&&w().createElement(d.B,{spacer:{default:"spacerXs"}},w().createElement(I.Z,{tooltipText:"Other",count:a,Icon:g.ZP})))}function q(e){return w().createElement("div",{style:{display:"flex",alignItems:"center"}},e&&w().createElement(E.default,{style:{color:"var(--pf-global--palette--blue-400)"}})||w().createElement(m.default,{style:{color:"var(--pf-global--success-color--100)"}}),w().createElement("span",{style:{marginLeft:"var(--pf-global--spacer--sm)"}},e?"Upgradable":"Up-to-date"))}function G(e){return T.QG.find((function(t){return t.value===e}))||T.QG[0]}function ee(e,t,n){return-1===location.href.indexOf("inventory")?w().createElement(k.Link,{to:"/".concat(e,"/").concat(t)},void 0===n?t:n):w().createElement("a",{href:"".concat(document.baseURI,"insights/patch/").concat(e,"/").concat(t)},n||t)}var te=function(e){return Object.values(e).filter((function(e){return e}))},ne=function(e,t,n){return e=[].concat(e),t=[].concat(t),!(!e.length||!t.length)&&{issues:e.map((function(e){return{id:"".concat(n,":").concat(e),description:e}})),systems:t}},re=function(e,t,n){return!!e&&t(e,n)},oe=function(e,t){var n=e.filter,r=e.systemProfile,o=void 0===r?{}:r,u=(0,a.Z)(e,R);u=M(M({},u),function(e){var n={};return e&&Object.entries(e).forEach((function(e){var r=(0,i.Z)(e,2),o=r[0],a=r[1];a=t&&function(e,t){var n=T.sS[e];return n&&((null==n?void 0:n.values)||[]).find((function(e){return e.value===t}))||{apiValue:t}}(o,a).apiValue||a;var u=[].concat(a).length>1||T.YX.includes(o)?"in:":"";n=M(M({},n),{},(0,c.Z)({},"filter[".concat(o,"]"),"".concat(u).concat(a.toString())))})),n}(n));var l=[];Object.keys(u).forEach((function(e){var t=encodeURIComponent(e),n=encodeURIComponent(u[e]);["",void 0,null].some((function(t){return[n,e].includes(t)}))||(["selectedTags","systemProfile"].includes(e)?"selectedTags"===e&&l.push.apply(l,u[e]):l.push(t.concat("=").concat(n)))}));var s=Object.keys(o).length>0&&function(e){var t=e.sap_sids,n=(0,a.Z)(e,B),r="";Object.entries((0,D.h3)({system_profile:n})).forEach((function(e){var t=(0,i.Z)(e,2),n=t[0],o=t[1];r="".concat(r,"&").concat(n,"=").concat(o)}));var o=null==t?void 0:t.map((function(e){return"filter[system_profile][sap_sids][in]=".concat(e)})).join("&");return r.concat(t?"&".concat(o,"#SIDs=").concat(t.join(",")):"")}(o)||"";return"?".concat(l.join("&")).concat(s)},ae=function(e){return oe(e,!0)},ce=function(e){delete e.id;var t=M({},e);return delete t.selectedTags,oe(A(t),!1)},ie=function(e){var t=P.parse(e),n={};return Object.keys(t).forEach((function(e){if(!e.startsWith("filter[system_profile]")){var r=parseInt(t[e],10),o=isNaN(r)?t[e]:r,a=e.search(/\[.*\]/);if(a>0){var i=e.slice(0,a),u=e.slice(a+1,-1);n[i]=M(M({},n[i]),{},(0,c.Z)({},u,"string"==typeof(l=o)&&l.startsWith("in:")?l.slice(3).split(","):l))}else n[e]=o}var l})),n},ue=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Search",r=[],o=function(e,t){if(T.YX.includes(t))return(e[t]&&("string"==typeof e[t]&&e[t].split(",")||e[t])||[]).map((function(e){return{name:e,id:t,value:e}}));var n=T.sS[t].values;return e[t]?[].concat(e[t]).map((function(e){var t=n.find((function(t){return t.value.toString()===e.toString()}));return{name:t.label,value:e,id:t.value}})):[]},a=function(){var t=Object.keys(e).filter((function(t){return""!==e[t]&&0!==[].concat(e[t]).length}));r=r.concat(t.map((function(t){return{category:"installed_evra"===t?"Package version":T.sS[t].label,id:t,chips:o(e,t)}})))},c=function(){r=r.concat([{category:n,id:"search",chips:[{name:t,value:t}]}])};return e&&a(),t&&c(),r},le=function(e,t){var n=M(M({},e),t);return["filter","search","limit","selectedTags"].some((function(e){return t.hasOwnProperty(e)}))&&(n.offset=0),t.hasOwnProperty("filter")&&(n.filter=M(M({},e.filter),t.filter),Object.keys(n.filter).forEach((function(e){return(void 0===n.filter[e]||""===n.filter[e])&&delete n.filter[e]}))),n.hasOwnProperty("tags")&&n&&delete n.tags,n};function se(e){var t=new Date;return t.setDate(t.getDate()-e),t.toISOString()}function fe(e,t,n){var r=e.sort((function(e,n){var r=e.cells,o=n.cells,a=r[t].value||r[t].title,c=o[t].value||o[t].title,i=a.toString().toUpperCase(),u=c.toString().toUpperCase();return i.localeCompare(u)}));return{sortBy:{index:t,direction:n},sortedCves:n===_.SortByDirection.asc?r:r.reverse()}}var pe=function(e){var t=e.osName,n=e.rhsm;return(""===n||void 0===n)&&t||w().createElement(y.Tooltip,{content:x.N.formatMessage(N.Z.textLockVersionTooltip,{lockedVersion:n})},w().createElement(p.k,{flex:{default:"inlineFlex"}},w().createElement(d.B,{spacer:{default:"spacerSm"}},t),w().createElement(d.B,{spacer:{default:"spacerSm"}},w().createElement(b.default,{size:"sm",color:"var(--pf-global--info-color--100)"}))))},de=function(e){return Object.keys(e).filter((function(t){return e[t]}))},ye=function(e){var t=e.offset||Y(e.page||1,e.perPage||20),n=e.limit||V(e.perPage||20),r=M(M({},e),{},{offset:t,limit:n});return A(r)},ve=function(e){return{data:null==e?void 0:e.data.filter((function(e){var t=e.attributes||{},n=t.packages_installed,r=t.packages_updatable,o=t.rhba_count,a=t.rhsa_count,c=t.rhea_count;return!(0===r||[n,o,a,c].every((function(e){return 0===e})))}))}},me=function(e){return{data:e.data.filter((function(e){return e.updatable}))}},ge=function(e,t){var n=M(M({},e),t);return M({page:Number(n.page||1),perPage:Number(n.perPage||20)},n.sort&&{sortBy:{key:n.sort.replace(/^-/,""),direction:n.sort.match(/^-/)?"desc":"asc"}})},he=function(e){return w().createElement(S.Z,{text:e,maxLine:"1",ellipsis:"(...)",trimRight:!0,basedOn:"letters"})},be=function(e){return/^(RHEA|RHBA|RHSA)/.test(e)},Ee=function(e,t){var n,r,a,c=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=[];e&&e.forEach((function(e,t){var n=e;"object"===(0,o.Z)(e)?(n=null==e?void 0:e.values.map((function(t){return"tags=".concat(encodeURIComponent("".concat(e.category,"/").concat(t.tagKey,"=").concat(t.value)))})),i[t]=Array.isArray(n)&&l()(n)||n):i[t]="tags=".concat(encodeURIComponent(n))}));var u={selectedTags:[],systemProfile:{}};return u.systemProfile=M(M(M(M({},(null==c||null===(n=c.SAP)||void 0===n?void 0:n.isSelected)&&{sap_system:!0}),(null==c||null===(r=c["Ansible Automation Platform"])||void 0===r?void 0:r.isSelected)&&{ansible:{controller_version:"not_nil"}}),(null==c||null===(a=c["Microsoft SQL"])||void 0===a?void 0:a.isSelected)&&{mssql:{version:"not_nil"}}),(null==t?void 0:t.length)>0&&{sap_sids:t}),i&&(u.selectedTags=i),u},Oe=function(e,t){var n=e.filter((function(e){return"updated"===e.key}));n=[M(M({},n[0]),{},{key:"last_upload",sortKey:"last_upload"})];var o=e.filter((function(e){var t=e.key;return"display_name"===t||"tags"===t}));return[].concat((0,r.Z)(o),(0,r.Z)((0,Z.Fs)(t)),[n[0]])},_e=function(e){var t=Date.parse(e);if(!1===isNaN(t)){var n=new Date(t),r=-n.getTimezoneOffset(),o=r>=0?"+":"-",a=function(e){return"".concat(Math.floor(Math.abs(e))).padStart(2,"0")};return n.getFullYear()+"-"+a(n.getMonth()+1)+"-"+a(n.getDate())+"T"+a(n.getHours())+":"+a(n.getMinutes())+":"+a(n.getSeconds())+o+a(r/60)+":"+a(r%60)}return e},Pe=function(e){if(!e)return"";var t=new Date(e);return"".concat(t.getFullYear(),"-").concat((t.getMonth()+1).toString().padStart(2,"0"))+"-".concat(t.getDate().toString().padStart(2,"0"))},je=function(e){var t=[];return"object"===(0,o.Z)(e)&&Object.keys(e).forEach((function(n){e[n]&&t.push(n)})),t},we=function(e,t){var n=[].concat((0,r.Z)(e),(0,r.Z)(je(t)));return null==n?void 0:n.reduce((function(e,t){return e[t]=!0,e}),{})},Se=function(e){return Object.keys(e).reduce((function(t,n){return t[n]=void 0!==e[n]&&e[n],t}),{})}},36491:(e,t,n)=>{n.r(t);var r=n(43297),o=n.n(r),a=n(21704),c=n.n(a),i=n(50533),u=n(334),l=n(48187),s=n(2807),f=n(83653),p=n(55323),d=n(59748);const y=function(){return o().createElement("div",{className:"patch-root"},o().createElement(p.Pj,{locale:navigator.language.slice(0,2),messages:d},o().createElement(i.zt,{store:(0,s.b)()},o().createElement(u.BrowserRouter,{basename:(0,f.Z)(window.location.pathname)},o().createElement(l.Z,{style:{overflow:"clip",background:"red","z-index":"1000"}})))))};c().render(o().createElement(y,null),document.getElementById("root"))},9557:(e,t,n)=>{n.d(t,{AE:()=>O,BY:()=>A,DE:()=>c,ED:()=>m,EI:()=>d,Eh:()=>Z,GL:()=>L,If:()=>k,Im:()=>X,JJ:()=>Q,JP:()=>g,M6:()=>_,N2:()=>i,RV:()=>x,SF:()=>D,Sb:()=>u,Us:()=>l,WY:()=>w,Xr:()=>y,Xt:()=>I,Yf:()=>C,_e:()=>M,br:()=>U,bt:()=>v,d:()=>R,dL:()=>E,df:()=>P,g5:()=>N,gK:()=>z,gl:()=>p,hV:()=>a,ix:()=>b,jl:()=>T,kU:()=>S,pH:()=>B,r8:()=>F,rt:()=>f,sX:()=>s,vh:()=>h,vl:()=>j,wy:()=>H});var r=n(11220),o=n(22789),a=function(e){return{type:o.Oy,payload:new Promise((function(t){t((0,r.ob)(e))})).then((function(e){return e}))}},c=function(e){return{type:o.e_,payload:new Promise((function(t){t((0,r.Zi)(e))})).then((function(e){return e}))}},i=function(e){return{type:o.J$,payload:new Promise((function(t){t((0,r.UL)(e))})).then((function(e){return e})),noError:!0}},u=function(e){return{type:o.lH,payload:new Promise((function(t){t((0,r.az)(e))})).then((function(e){return e}))}},l=function(e){return{type:o.re,payload:e}},s=function(e){return{type:o.xm,payload:e}},f=function(e){return{type:o.SO,payload:e}},p=function(e){return{type:o.$,payload:e}},d=function(e){return{type:o.p7,payload:e}},y=function(e){return{type:o.sh,payload:e}},v=function(){return{type:o.QI,payload:[]}},m=function(){return{type:o.PQ,payload:[]}},g=function(){return{type:o.ad,payload:[]}},h=function(){return{type:o.$L,payload:[]}},b=function(e){return{type:o.B1,payload:new Promise((function(t){t((0,r.qw)(e))})).then((function(e){return e}))}},E=function(e){return{type:o.I5,payload:e}},O=function(e){return{type:o.ox,payload:e}},_=function(e){return{type:o.Cg,payload:e}},P=function(e){return{type:o.y0,payload:e}},j=function(e){return{type:o.mD,payload:e}},w=function(e){return{type:o.lz,payload:e}},S=function(e){return{type:o.Gc,payload:new Promise((function(t){t((0,r.g8)(e))})).then((function(e){return e}))}},k=function(e){return{type:o.Wo,payload:e}},N=function(e){return{type:o.pW,payload:e}},I=function(e){return{type:o.lO,payload:new Promise((function(t){t((0,r.Tt)(e))})).then((function(e){return e}))}},Z=function(e){return{type:o.Q5,payload:new Promise((function(t){t((0,r.o0)(e))})).then((function(e){return e})),meta:{noError:!0}}},T=function(){return{type:o.g1,payload:[]}},x=function(){return{type:o.sq,payload:[]}},D=function(e){return{type:o.pl,payload:e}},B=function(e){return{type:o.Rr,payload:e}},R=function(){return{type:o.i3,payload:[]}},C=function(){return{type:o.vh,payload:[]}},M=function(e){return{type:o._E,payload:e}},A=function(e){return{type:o.oc,payload:new Promise((function(t){t((0,r.ai)(e))})).then((function(e){return e}))}},U=function(e){return{type:o.oT,payload:e}},L=function(e){return{type:o.r8,payload:e}},z=function(e){return{type:o.jP,payload:new Promise((function(t){t((0,r.jL)(e))})).then((function(e){return e}))}},F=function(){return{type:o.eb,payload:[]}},Q=function(e,t){return{type:o.bn,payload:new Promise((function(n){n((0,r.TH)(e,t))})).then((function(e){return e}))}},X=function(){return{type:o.hM,payload:[]}},H=function(e){return{type:o.BR,payload:e}}},50533:(e,t,n)=>{n.d(t,{$j:()=>r.$j,I0:()=>r.I0,oR:()=>r.oR,v9:()=>r.v9,wU:()=>r.wU,zt:()=>r.zt});var r=n(82206),o=n(71679);(0,n(9256).F)(o.m)}}]);
//# sourceMappingURL=../sourcemaps/4790.f10fce80744ff20c96574f6813fb1312.js.map