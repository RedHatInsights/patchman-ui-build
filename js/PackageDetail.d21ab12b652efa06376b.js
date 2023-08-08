"use strict";(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[9155],{56186:(e,t,n)=>{n.d(t,{N:()=>r,i:()=>c});var r,a=n(70655),s=n(43297),i=n(38296),o=n(67958),l=n(80164);!function(e){e.hr="hr",e.li="li",e.div="div"}(r||(r={}));const c=e=>{var{className:t,component:n=r.hr,isVertical:c=!1,inset:u,orientation:d}=e,p=(0,a.__rest)(e,["className","component","isVertical","inset","orientation"]);const f=n;return s.createElement(f,Object.assign({className:(0,i.css)(o.default.divider,c&&o.default.modifiers.vertical,(0,l.wt)(u,o.default),(0,l.wt)(d,o.default),t)},"hr"!==n&&{role:"separator"},p))};c.displayName="Divider"},33676:(e,t,n)=>{n.d(t,{n:()=>d});var r=n(70655),a=n(43297),s=n(38296),i=n(99355),o=n(64190),l=n(80164),c=n(16545),u=n(73699);class d extends a.Component{constructor(){super(...arguments),this.ref=a.createRef(),this.additionalRef=a.createRef(),this.getInnerNode=e=>e&&e.childNodes&&e.childNodes.length?e.childNodes[0]:e,this.onKeyDown=e=>{var t,n,r,a,s,i,l,c,u,d;const p=e.target===this.ref.current?0:1;this.props.customChild||e.preventDefault(),"ArrowUp"===e.key?(null===(n=null===(t=this.props.context)||void 0===t?void 0:t.keyHandler)||void 0===n||n.call(t,this.props.index,p,o.Ow.UP),e.stopPropagation()):"ArrowDown"===e.key?(null===(a=null===(r=this.props.context)||void 0===r?void 0:r.keyHandler)||void 0===a||a.call(r,this.props.index,p,o.Ow.DOWN),e.stopPropagation()):"ArrowRight"===e.key?(null===(i=null===(s=this.props.context)||void 0===s?void 0:s.keyHandler)||void 0===i||i.call(s,this.props.index,p,o.Ow.RIGHT),e.stopPropagation()):"ArrowLeft"===e.key?(null===(c=null===(l=this.props.context)||void 0===l?void 0:l.keyHandler)||void 0===c||c.call(l,this.props.index,p,o.Ow.LEFT),e.stopPropagation()):"Enter"!==e.key&&" "!==e.key||(e.target.click(),this.props.enterTriggersArrowDown&&(null===(d=null===(u=this.props.context)||void 0===u?void 0:u.keyHandler)||void 0===d||d.call(u,this.props.index,p,o.Ow.DOWN)))},this.componentRef=e=>{this.ref.current=e;const{component:t}=this.props,n=t.ref;n&&("function"==typeof n?n(e):n.current=e)}}componentDidMount(){var e;const{context:t,index:n,isDisabled:r,role:a,customChild:s,autoFocus:i}=this.props,o=s?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==t?void 0:t.sendRef)||void 0===e||e.call(t,n,[o,s?o:this.additionalRef.current],r,"separator"===a),i&&setTimeout((()=>o.focus()))}componentDidUpdate(){var e;const{context:t,index:n,isDisabled:r,role:a,customChild:s}=this.props,i=s?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==t?void 0:t.sendRef)||void 0===e||e.call(t,n,[i,s?i:this.additionalRef.current],r,"separator"===a)}extendAdditionalChildRef(){const{additionalChild:e}=this.props;return a.cloneElement(e,{ref:this.additionalRef})}render(){const e=this.props,{className:t,children:n,context:o,onClick:d,component:p,role:f,isDisabled:m,isAriaDisabled:h,isPlainText:g,index:v,href:b,tooltip:y,tooltipProps:E,id:P,componentID:w,listItemClassName:C,additionalChild:k,customChild:O,enterTriggersArrowDown:D,icon:N,autoFocus:x,styleChildren:Z,description:S,inoperableEvents:j}=e,T=(0,r.__rest)(e,["className","children","context","onClick","component","role","isDisabled","isAriaDisabled","isPlainText","index","href","tooltip","tooltipProps","id","componentID","listItemClassName","additionalChild","customChild","enterTriggersArrowDown","icon","autoFocus","styleChildren","description","inoperableEvents"]);let I=(0,s.css)(N&&u.default.modifiers.icon,h&&u.default.modifiers.ariaDisabled,t);"a"===p?T["aria-disabled"]=m||h:"button"===p&&(T["aria-disabled"]=m||h,T.type=T.type||"button");const M=e=>a.cloneElement(e,Object.assign(Object.assign({},Z&&{className:(0,s.css)(e.props.className,I)}),"separator"!==this.props.role&&{role:f,ref:this.componentRef})),R=e=>{const t=e,r=S?a.createElement(a.Fragment,null,a.createElement("div",{className:u.default.dropdownMenuItemMain},N&&a.createElement("span",{className:(0,s.css)(u.default.dropdownMenuItemIcon)},N),n),a.createElement("div",{className:u.default.dropdownMenuItemDescription},S)):a.createElement(a.Fragment,null,N&&a.createElement("span",{className:(0,s.css)(u.default.dropdownMenuItemIcon)},N),n);return a.createElement(t,Object.assign({},T,m||h?(0,l.KG)(j):null,{href:b,ref:this.ref,className:I,id:w,role:f}),r)};return a.createElement(i.Dl.Consumer,null,(({onSelect:e,itemClass:t,disabledClass:n,plainTextClass:r})=>{return"separator"!==this.props.role&&(I=(0,s.css)(I,m&&n,g&&r,t,S&&u.default.modifiers.description)),O?a.cloneElement(O,{ref:this.ref,onKeyDown:this.onKeyDown}):a.createElement("li",Object.assign({},C&&{className:C},{role:"none",onKeyDown:this.onKeyDown,onClick:t=>{m||h||(null==d||d(t),null==e||e(t))},id:P}),(i=a.isValidElement(p)?M(p):R(p),y?a.createElement(c.u,Object.assign({content:y},E),i):i),k&&this.extendAdditionalChildRef());var i}))}}d.displayName="InternalDropdownItem",d.defaultProps={className:"",component:"a",role:"none",isDisabled:!1,isPlainText:!1,tooltipProps:{},onClick:e=>{},index:-1,context:{keyHandler:()=>{},sendRef:()=>{}},enterTriggersArrowDown:!1,icon:null,styleChildren:!0,description:null,inoperableEvents:["onClick","onKeyPress"]}},99355:(e,t,n)=>{n.d(t,{Dl:()=>i,dw:()=>a,e4:()=>o,ir:()=>r});var r,a,s=n(43297);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(a||(a={}));const i=s.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),o=s.createContext({keyHandler:null,sendRef:null})},5964:(e,t,n)=>{n.d(t,{VA:()=>s,ZP:()=>i,kc:()=>a});var r=n(40400);const a={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,r.IU)(a),i=s},16590:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(83237),a=n(43297),s=n.n(a),i=n(13784),o=n(32132),l=n(30893);const c=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).update_status,n=s().useMemo((function(){return i.tG.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]);return{label:o.N.formatMessage(l.Z.labelsFiltersStatus),type:r.Y.checkbox,filterValues:{onChange:function(t,n){!function(t){e({filter:{update_status:t}})}(n)},items:n,value:t,placeholder:o.N.formatMessage(l.Z.labelsColumnsStatusPlaceholder)}}}},8453:(e,t,n)=>{n.r(t),n.d(t,{default:()=>ae});var r=n(4942),a=n(29439),s=n(49739),i=n(83826),o=n(68340),l=n(68774),c=n(14748),u=n(45697),d=n.n(u),p=n(43297),f=n.n(p),m=n(28216),h=n(96620),g=n(30893),v=n(49642),b=n(50693),y=n(16475),E=n(5391),P=n(81469),w=function(e){var t=e.attributes.description,n=e.isLoading,r=f().useState(1e3),o=(0,a.Z)(r,2),l=o[0],c=o[1];return t&&f().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},f().createElement(y.P,{md:8,sm:12},f().createElement(P.ZP,{loading:n,variant:P.x.spinner,centered:!0},f().createElement(s.K,{hasGutter:!0},f().createElement(i.v,null),f().createElement(i.v,{style:{whiteSpace:"pre-line"}},t&&(0,E.Nt)(t,l,c))))))||f().createElement(p.Fragment,null)};w.propTypes={attributes:d().object,isLoading:d().bool};const C=w;var k=n(15984),O=n(93433),D=n(75863),N=n(33739),x=n(90747),Z=n(16590),S=n(87462),j=n(54680),T=n(92694),I=n(64403),M=n(83237),R=n(32132);const A=function(e,t,n){var r=f().useState(!1),s=(0,a.Z)(r,2),i=s[0],o=s[1],l=f().useState(10),c=(0,a.Z)(l,2),u=c[0],d=c[1],p=t&&t.installed_evra,m=p&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),h=n.data&&n.data.sort().map((function(e){return{value:e.evra}}))||[{value:R.N.formatMessage(g.Z.textNoVersionAvailable),disabled:!0}];return{type:M.Y.custom,label:R.N.formatMessage(g.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:f().createElement(j.P,(0,S.Z)({variant:h.length>0&&I.TM.checkbox||I.TM.typeaheadMulti,typeAheadAriaLabel:R.N.formatMessage(g.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){o(e)},onSelect:function(n,r){var a={filter:{}};if(!m||m&&!m.includes(r)){var s=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(s).concat(r)}}else{var i=1!==m.length&&m.filter((function(e){return!e.includes(r)})).join(",")||void 0;a.filter={installed_evra:i}}e(a)},selections:m,isOpen:i,"aria-labelledby":"patch-version-filter",placeholderText:R.N.formatMessage(g.Z.labelsFiltersPackageVersionPlaceholder)},u<h.lengt&&{loadingVariant:{text:"View more",onClick:function(){d(h.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),h.slice(0,u).map((function(e,t){return f().createElement(T.$,(0,S.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var F=n(52579),_=n(7322),H=n(9557),V=n(5747),L=n(11220),K=n(13784),U=n(91607),G=n(53074),q=n(58684),z=n(93080),Q=n(97779),W=n(83905);function Y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function B(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Y(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var J=function(e){var t=e.packageName,n=(0,m.I0)(),r=(0,m.oR)(),s=(0,h.useHistory)(),i=f().useState([]),o=(0,a.Z)(i,2),l=o[0],c=o[1],u=(0,E.PZ)(s.location.search),d=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.wU),v=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),b=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),y=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),P=(0,m.v9)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),w=P.systemProfile,C=P.selectedTags,k=P.filter,S=P.search,j=P.sort,T=P.page,I=P.perPage,M=(0,p.useCallback)((function(e){n((0,H.g5)(e))}),[]);(0,p.useEffect)((function(){M(u),(0,L.dh)({package_name:t}).then(c)}),[]),(0,p.useEffect)((function(){return function(){n((0,H.RV)()),n((0,H.d)())}}),[]);var Y=(0,U.j5)(B(B({},k),{},{search:S}),M),J=(0,a.Z)(Y,1)[0],$=(0,W.Z)(null==k?void 0:k.os,M),X={items:[(0,x.Z)(M,S,R.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),R.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,Z.Z)(M,k),A(M,k,l)].concat((0,O.Z)($))},ee=(0,p.useMemo)((function(){return{filters:(0,E.mt)(k,S,R.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle)),onDelete:J}}),[k,S]),te=(0,z.r)(d,y,{endpoint:z.c.packageSystems(t),queryParams:P,selectionDispatcher:H.i2,constructFilename:function(e){return"".concat(e.available_evra)},apiResponseTransformer:E.lq}),ne=y&&(0,E.Qy)(y).length,re=(0,U.AR)(t,P,{csv:L.nx,json:L.bb},n),ae=(0,p.useCallback)((function(e){var n=[];return e.forEach((function(e){var r=t+"-"+y[e],a="patch-package:".concat(r),s=n.findIndex((function(e){return e.id===a}));-1!==s?n[s].systems.push(e):r&&n.push({id:a,description:r,systems:[e]})})),!!n.length&&{issues:n}}),[y]),se=(0,U.U)(L.vo,M,{packageName:t},s),ie=(0,U.Pz)(ne,te,{total_items:b},d);return f().createElement(f().Fragment,null,v.hasError&&f().createElement(F.Z,{code:v.code})||f().createElement(N.Z,{disableDefaultColumns:["system_profile","updated","groups"],isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:q.Hd,showTags:!0,getEntities:se,customFilters:{patchParams:{search:S,filter:k,systemProfile:w,selectedTags:C}},paginationProps:{isDisabled:0===b},onLoad:function(e){var t=e.mergeWithEntities;r.replaceReducer((0,Q.UY)(B(B({},_.E),t((0,V.Kq)(q.Hd,V.OC),(0,E.fm)({page:T,perPage:I,sort:j,search:S},u)))))},tableProps:{canSelectAll:!1,variant:D.B.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:X,activeFiltersConfig:ee,bulkSelect:te&&ie,exportConfig:{isDisabled:0===b,onSelect:re},dedicatedAction:f().createElement(G.Z,{remediationProvider:function(){return(0,E.Sz)((0,E.Q6)(y),ae,K.oN.package)},isDisabled:0===(0,E.Qy)(y).length})}))};J.propTypes={packageName:d().string};const $=J;var X=n(83215),ee=n(55140);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var re=function(e){var t=e.match,n=(0,m.I0)(),r=f().useState(t.params.packageName),u=(0,a.Z)(r,1)[0],d=(0,ee.Z)();(0,p.useEffect)((function(){u&&d.updateDocumentTitle("".concat(u," - ").concat(R.N.formatMessage(g.Z.titlesPackages),"\n        ").concat(K.JD))}),[d,u]);var h=(0,m.v9)((function(e){return e.PackageDetailStore})),b=(0,m.v9)((function(e){return e.PackageDetailStore.status}));f().useEffect((function(){n((0,H.Sb)({packageName:u}))}),[]),f().useEffect((function(){return function(){n((0,X.L1)()),n((0,H.vh)())}}),[]);var y=h.data.attributes;return f().createElement(f().Fragment,null,f().createElement(v.Z,{title:u,headerOUIA:"package-details",breadcrumbs:[{title:R.N.formatMessage(g.Z.titlesPatchPackages),to:"/packages",isActive:!1},{title:u,isActive:!0}]},b.hasError?f().createElement(k.Z,null):f().createElement(C,{attributes:ne(ne({},y),{},{id:u}),isLoading:b.isLoading})),f().createElement(c.Z,null,f().createElement(s.K,{hasGutter:!0},f().createElement(i.v,null,f().createElement(l.D,null,f().createElement(o.x,{component:o.q.h2},R.N.formatMessage(g.Z.titlesAffectedSystems)))),f().createElement(i.v,null,b.hasError&&f().createElement(F.Z,null)||!b.isLoading&&f().createElement($,{packageName:u})))))};re.propTypes={match:d().any};const ae=(0,h.withRouter)(re)}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.963b4a3d37d0718ede4f6cc89408b441.js.map