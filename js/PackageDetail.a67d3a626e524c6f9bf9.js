(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9155],{56186:(e,t,n)=>{"use strict";n.d(t,{N:()=>i,i:()=>c});var i,s=n(70655),o=n(43297),l=n(38296),r=n(67958),a=n(80164);!function(e){e.hr="hr",e.li="li",e.div="div"}(i||(i={}));const c=e=>{var{className:t,component:n=i.hr,isVertical:c=!1,inset:d,orientation:p}=e,m=(0,s.__rest)(e,["className","component","isVertical","inset","orientation"]);const f=n;return o.createElement(f,Object.assign({className:(0,l.css)(r.default.divider,c&&r.default.modifiers.vertical,(0,a.wt)(d,r.default),(0,a.wt)(p,r.default),t)},"hr"!==n&&{role:"separator"},m))};c.displayName="Divider"},74829:(e,t,n)=>{"use strict";n.d(t,{u:()=>c});var i=n(70655),s=n(43297),o=n(99355),l=n(33676),r=n(56186),a=n(62472);const c=e=>{var{className:t="",ref:n,ouiaId:d,ouiaSafe:p}=e,m=(0,i.__rest)(e,["className","ref","ouiaId","ouiaSafe"]);const f=(0,a.S$)(c.displayName,d,p);return s.createElement(o.e4.Consumer,null,(e=>s.createElement(l.n,Object.assign({},m,{context:e,component:s.createElement(r.i,{component:r.N.div}),className:t,role:"separator"},f))))};c.displayName="DropdownSeparator"},33676:(e,t,n)=>{"use strict";n.d(t,{n:()=>p});var i=n(70655),s=n(43297),o=n(38296),l=n(99355),r=n(1774),a=n(80164),c=n(35224),d=n(73699);class p extends s.Component{constructor(){super(...arguments),this.ref=s.createRef(),this.additionalRef=s.createRef(),this.getInnerNode=e=>e&&e.childNodes&&e.childNodes.length?e.childNodes[0]:e,this.onKeyDown=e=>{var t,n,i,s,o,l,a,c,d,p;const m=e.target===this.ref.current?0:1;this.props.customChild||e.preventDefault(),"ArrowUp"===e.key?(null===(n=null===(t=this.props.context)||void 0===t?void 0:t.keyHandler)||void 0===n||n.call(t,this.props.index,m,r.Ow.UP),e.stopPropagation()):"ArrowDown"===e.key?(null===(s=null===(i=this.props.context)||void 0===i?void 0:i.keyHandler)||void 0===s||s.call(i,this.props.index,m,r.Ow.DOWN),e.stopPropagation()):"ArrowRight"===e.key?(null===(l=null===(o=this.props.context)||void 0===o?void 0:o.keyHandler)||void 0===l||l.call(o,this.props.index,m,r.Ow.RIGHT),e.stopPropagation()):"ArrowLeft"===e.key?(null===(c=null===(a=this.props.context)||void 0===a?void 0:a.keyHandler)||void 0===c||c.call(a,this.props.index,m,r.Ow.LEFT),e.stopPropagation()):"Enter"!==e.key&&" "!==e.key||(e.target.click(),this.props.enterTriggersArrowDown&&(null===(p=null===(d=this.props.context)||void 0===d?void 0:d.keyHandler)||void 0===p||p.call(d,this.props.index,m,r.Ow.DOWN)))},this.componentRef=e=>{this.ref.current=e;const{component:t}=this.props,n=t.ref;n&&("function"==typeof n?n(e):n.current=e)}}componentDidMount(){var e;const{context:t,index:n,isDisabled:i,role:s,customChild:o,autoFocus:l}=this.props,r=o?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==t?void 0:t.sendRef)||void 0===e||e.call(t,n,[r,o?r:this.additionalRef.current],i,"separator"===s),l&&setTimeout((()=>r.focus()))}componentDidUpdate(){var e;const{context:t,index:n,isDisabled:i,role:s,customChild:o}=this.props,l=o?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==t?void 0:t.sendRef)||void 0===e||e.call(t,n,[l,o?l:this.additionalRef.current],i,"separator"===s)}extendAdditionalChildRef(){const{additionalChild:e}=this.props;return s.cloneElement(e,{ref:this.additionalRef})}render(){const e=this.props,{className:t,children:n,context:r,onClick:p,component:m,role:f,isDisabled:u,isAriaDisabled:g,isPlainText:h,index:v,href:x,tooltip:O,tooltipProps:b,id:w,componentID:y,listItemClassName:_,additionalChild:E,customChild:k,enterTriggersArrowDown:N,icon:P,autoFocus:C,styleChildren:S,description:D,inoperableEvents:M}=e,L=(0,i.__rest)(e,["className","children","context","onClick","component","role","isDisabled","isAriaDisabled","isPlainText","index","href","tooltip","tooltipProps","id","componentID","listItemClassName","additionalChild","customChild","enterTriggersArrowDown","icon","autoFocus","styleChildren","description","inoperableEvents"]);let T=(0,o.css)(P&&d.default.modifiers.icon,g&&d.default.modifiers.ariaDisabled,t);"a"===m?L["aria-disabled"]=u||g:"button"===m&&(L["aria-disabled"]=u||g,L.type=L.type||"button");const Z=e=>s.cloneElement(e,Object.assign(Object.assign({},S&&{className:(0,o.css)(e.props.className,T)}),"separator"!==this.props.role&&{role:f,ref:this.componentRef})),I=e=>{const t=e,i=D?s.createElement(s.Fragment,null,s.createElement("div",{className:d.default.dropdownMenuItemMain},P&&s.createElement("span",{className:(0,o.css)(d.default.dropdownMenuItemIcon)},P),n),s.createElement("div",{className:d.default.dropdownMenuItemDescription},D)):s.createElement(s.Fragment,null,P&&s.createElement("span",{className:(0,o.css)(d.default.dropdownMenuItemIcon)},P),n);return s.createElement(t,Object.assign({},L,u||g?(0,a.KG)(M):null,{href:x,ref:this.ref,className:T,id:y,role:f}),i)};return s.createElement(l.Dl.Consumer,null,(({onSelect:e,itemClass:t,disabledClass:n,plainTextClass:i})=>{return"separator"!==this.props.role&&(T=(0,o.css)(T,u&&n,h&&i,t,D&&d.default.modifiers.description)),k?s.cloneElement(k,{ref:this.ref,onKeyDown:this.onKeyDown}):s.createElement("li",Object.assign({},_&&{className:_},{role:"none",onKeyDown:this.onKeyDown,onClick:t=>{u||g||(null==p||p(t),null==e||e(t))},id:w}),(l=s.isValidElement(m)?Z(m):I(m),O?s.createElement(c.u,Object.assign({content:O},b),l):l),E&&this.extendAdditionalChildRef());var l}))}}p.displayName="InternalDropdownItem",p.defaultProps={className:"",component:"a",role:"none",isDisabled:!1,isPlainText:!1,tooltipProps:{},onClick:e=>{},index:-1,context:{keyHandler:()=>{},sendRef:()=>{}},enterTriggersArrowDown:!1,icon:null,styleChildren:!0,description:null,inoperableEvents:["onClick","onKeyPress"]}},99355:(e,t,n)=>{"use strict";n.d(t,{Dl:()=>l,dw:()=>s,e4:()=>r,ir:()=>i});var i,s,o=n(43297);!function(e){e.right="right",e.left="left"}(i||(i={})),function(e){e.up="up",e.down="down"}(s||(s={}));const l=o.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),r=o.createContext({keyHandler:null,sendRef:null})},5964:(e,t,n)=>{"use strict";n.d(t,{VA:()=>o,ZP:()=>l,kc:()=>s});var i=n(40400);const s={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},o=(0,i.IU)(s),l=o},67958:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i}),n(28992);const i={divider:"pf-c-divider",modifiers:{hidden:"pf-m-hidden",hiddenOnSm:"pf-m-hidden-on-sm",visibleOnSm:"pf-m-visible-on-sm",hiddenOnMd:"pf-m-hidden-on-md",visibleOnMd:"pf-m-visible-on-md",hiddenOnLg:"pf-m-hidden-on-lg",visibleOnLg:"pf-m-visible-on-lg",hiddenOnXl:"pf-m-hidden-on-xl",visibleOnXl:"pf-m-visible-on-xl",hiddenOn_2xl:"pf-m-hidden-on-2xl",visibleOn_2xl:"pf-m-visible-on-2xl",vertical:"pf-m-vertical",insetNone:"pf-m-inset-none",insetXs:"pf-m-inset-xs",insetSm:"pf-m-inset-sm",insetMd:"pf-m-inset-md",insetLg:"pf-m-inset-lg",insetXl:"pf-m-inset-xl",inset_2xl:"pf-m-inset-2xl",inset_3xl:"pf-m-inset-3xl",horizontalOnSm:"pf-m-horizontal-on-sm",verticalOnSm:"pf-m-vertical-on-sm",insetNoneOnSm:"pf-m-inset-none-on-sm",insetXsOnSm:"pf-m-inset-xs-on-sm",insetSmOnSm:"pf-m-inset-sm-on-sm",insetMdOnSm:"pf-m-inset-md-on-sm",insetLgOnSm:"pf-m-inset-lg-on-sm",insetXlOnSm:"pf-m-inset-xl-on-sm",inset_2xlOnSm:"pf-m-inset-2xl-on-sm",inset_3xlOnSm:"pf-m-inset-3xl-on-sm",horizontalOnMd:"pf-m-horizontal-on-md",verticalOnMd:"pf-m-vertical-on-md",insetNoneOnMd:"pf-m-inset-none-on-md",insetXsOnMd:"pf-m-inset-xs-on-md",insetSmOnMd:"pf-m-inset-sm-on-md",insetMdOnMd:"pf-m-inset-md-on-md",insetLgOnMd:"pf-m-inset-lg-on-md",insetXlOnMd:"pf-m-inset-xl-on-md",inset_2xlOnMd:"pf-m-inset-2xl-on-md",inset_3xlOnMd:"pf-m-inset-3xl-on-md",horizontalOnLg:"pf-m-horizontal-on-lg",verticalOnLg:"pf-m-vertical-on-lg",insetNoneOnLg:"pf-m-inset-none-on-lg",insetXsOnLg:"pf-m-inset-xs-on-lg",insetSmOnLg:"pf-m-inset-sm-on-lg",insetMdOnLg:"pf-m-inset-md-on-lg",insetLgOnLg:"pf-m-inset-lg-on-lg",insetXlOnLg:"pf-m-inset-xl-on-lg",inset_2xlOnLg:"pf-m-inset-2xl-on-lg",inset_3xlOnLg:"pf-m-inset-3xl-on-lg",horizontalOnXl:"pf-m-horizontal-on-xl",verticalOnXl:"pf-m-vertical-on-xl",insetNoneOnXl:"pf-m-inset-none-on-xl",insetXsOnXl:"pf-m-inset-xs-on-xl",insetSmOnXl:"pf-m-inset-sm-on-xl",insetMdOnXl:"pf-m-inset-md-on-xl",insetLgOnXl:"pf-m-inset-lg-on-xl",insetXlOnXl:"pf-m-inset-xl-on-xl",inset_2xlOnXl:"pf-m-inset-2xl-on-xl",inset_3xlOnXl:"pf-m-inset-3xl-on-xl",horizontalOn_2xl:"pf-m-horizontal-on-2xl",verticalOn_2xl:"pf-m-vertical-on-2xl",insetNoneOn_2xl:"pf-m-inset-none-on-2xl",insetXsOn_2xl:"pf-m-inset-xs-on-2xl",insetSmOn_2xl:"pf-m-inset-sm-on-2xl",insetMdOn_2xl:"pf-m-inset-md-on-2xl",insetLgOn_2xl:"pf-m-inset-lg-on-2xl",insetXlOn_2xl:"pf-m-inset-xl-on-2xl",inset_2xlOn_2xl:"pf-m-inset-2xl-on-2xl",inset_3xlOn_2xl:"pf-m-inset-3xl-on-2xl"}}},73699:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>i}),n(30187);const i={badge:"pf-c-badge",check:"pf-c-check",divider:"pf-c-divider",dropdown:"pf-c-dropdown",dropdownGroup:"pf-c-dropdown__group",dropdownGroupTitle:"pf-c-dropdown__group-title",dropdownMenu:"pf-c-dropdown__menu",dropdownMenuItem:"pf-c-dropdown__menu-item",dropdownMenuItemDescription:"pf-c-dropdown__menu-item-description",dropdownMenuItemIcon:"pf-c-dropdown__menu-item-icon",dropdownMenuItemMain:"pf-c-dropdown__menu-item-main",dropdownToggle:"pf-c-dropdown__toggle",dropdownToggleButton:"pf-c-dropdown__toggle-button",dropdownToggleCheck:"pf-c-dropdown__toggle-check",dropdownToggleIcon:"pf-c-dropdown__toggle-icon",dropdownToggleImage:"pf-c-dropdown__toggle-image",dropdownToggleProgress:"pf-c-dropdown__toggle-progress",dropdownToggleText:"pf-c-dropdown__toggle-text",menu:"pf-c-menu",modifiers:{fullHeight:"pf-m-full-height",expanded:"pf-m-expanded",action:"pf-m-action",disabled:"pf-m-disabled",plain:"pf-m-plain",text:"pf-m-text",splitButton:"pf-m-split-button",primary:"pf-m-primary",inProgress:"pf-m-in-progress",active:"pf-m-active",secondary:"pf-m-secondary",top:"pf-m-top",static:"pf-m-static",alignRight:"pf-m-align-right",alignLeft:"pf-m-align-left",alignRightOnSm:"pf-m-align-right-on-sm",alignLeftOnSm:"pf-m-align-left-on-sm",alignRightOnMd:"pf-m-align-right-on-md",alignLeftOnMd:"pf-m-align-left-on-md",alignRightOnLg:"pf-m-align-right-on-lg",alignLeftOnLg:"pf-m-align-left-on-lg",alignRightOnXl:"pf-m-align-right-on-xl",alignLeftOnXl:"pf-m-align-left-on-xl",alignRightOn_2xl:"pf-m-align-right-on-2xl",alignLeftOn_2xl:"pf-m-align-left-on-2xl",ariaDisabled:"pf-m-aria-disabled",icon:"pf-m-icon",description:"pf-m-description"},spinner:"pf-c-spinner",themeDark:"pf-theme-dark"}},16590:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var i=n(83237),s=n(43297),o=n.n(s),l=n(13784),r=n(32132),a=n(30893);const c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.updatable,s=o().useMemo((function(){return l.tG.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]),c=function(t){e({filter:{updatable:t}})};return{label:r.N.formatMessage(a.Z.labelsFiltersStatus),type:i.Y.checkbox,filterValues:{onChange:function(e,t){c(t)},items:s,value:n,placeholder:r.N.formatMessage(a.Z.labelsColumnsStatusPlaceholder)}}}},8453:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>se});var i=n(4942),s=n(29439),o=n(49739),l=n(83826),r=n(68340),a=n(68774),c=n(14748),d=n(45697),p=n.n(d),m=n(43297),f=n.n(m),u=n(28216),g=n(334),h=n(30893),v=n(49642),x=n(50693),O=n(16475),b=n(5391),w=n(81469),y=function(e){var t=e.attributes.description,n=e.isLoading,i=f().useState(1e3),r=(0,s.Z)(i,2),a=r[0],c=r[1];return t&&f().createElement(x.r,{hasGutter:!0,style:{minHeight:50}},f().createElement(O.P,{md:8,sm:12},f().createElement(w.ZP,{loading:n,variant:w.x.spinner,centered:!0},f().createElement(o.K,{hasGutter:!0},f().createElement(l.v,null),f().createElement(l.v,{style:{whiteSpace:"pre-line"}},t&&(0,b.Nt)(t,a,c))))))||f().createElement(m.Fragment,null)};y.propTypes={attributes:p().object,isLoading:p().bool};const _=y;var E=n(15984),k=n(15861),N=n(64687),P=n.n(N),C=n(75863),S=n(33739),D=n(90747),M=n(16590),L=n(87462),T=n(54680),Z=n(92694),I=n(64403),j=n(83237),R=n(32132);const X=function(e,t,n){var i=f().useState(!1),o=(0,s.Z)(i,2),l=o[0],r=o[1],a=f().useState(10),c=(0,s.Z)(a,2),d=c[0],p=c[1],m=t&&t.installed_evra,u=m&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),g=n.data&&n.data.sort().map((function(e){return{value:e.evra}}))||[{value:R.N.formatMessage(h.Z.textNoVersionAvailable),disabled:!0}];return{type:j.Y.custom,label:R.N.formatMessage(h.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:f().createElement(T.P,(0,L.Z)({variant:g.length>0&&I.TM.checkbox||I.TM.typeaheadMulti,typeAheadAriaLabel:R.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){r(e)},onSelect:function(n,i){var s={filter:{}};if(!u||u&&!u.includes(i)){var o=m&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";s.filter={installed_evra:"".concat(o).concat(i)}}else{var l=1!==u.length&&u.filter((function(e){return!e.includes(i)})).join(",")||void 0;s.filter={installed_evra:l}}e(s)},selections:u,isOpen:l,"aria-labelledby":"patch-version-filter",placeholderText:R.N.formatMessage(h.Z.labelsFiltersPackageVersionPlaceholder)},d<g.lengt&&{loadingVariant:{text:"View more",onClick:function(){p(g.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),g.slice(0,d).map((function(e,t){return f().createElement(Z.$,(0,L.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var A=n(52579),F=n(7322),H=n(9557),V=n(5747),z=n(11220),K=n(13784),G=n(91607),U=n(53074),q=n(58684),B=n(93080),Q=n(97779);function W(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?W(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):W(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var $=function(e){var t=e.packageName,n=(0,u.I0)(),i=(0,u.oR)(),o=(0,g.useHistory)(),l=f().useState([]),r=(0,s.Z)(l,2),a=r[0],c=r[1],d=(0,b.PZ)(o.location.search),p=(0,u.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),u.wU),v=(0,u.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),x=(0,u.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),O=(0,u.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),w=(0,u.v9)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),y=w.systemProfile,_=w.selectedTags,E=w.filter,N=w.search,L=w.sort,T=w.page,Z=w.perPage,I=(0,m.useCallback)((function(e){n((0,H.g5)(e))}),[]);(0,m.useEffect)((0,k.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return I(d),e.t0=c,e.next=4,(0,z.dh)({package_name:t});case 4:e.t1=e.sent,(0,e.t0)(e.t1);case 6:case"end":return e.stop()}}),e)}))),[]),(0,m.useEffect)((function(){return function(){n((0,H.RV)()),n((0,H.d)())}}),[]);var j=(0,G.j5)(Y(Y({},E),{},{search:N}),I),W=(0,s.Z)(j,1)[0],$={items:[(0,D.Z)(I,N,R.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle),R.N.formatMessage(h.Z.labelsFiltersSystemsSearchPlaceholder)),(0,M.Z)(I,E),X(I,E,a)]},J=(0,m.useMemo)((function(){return{filters:(0,b.mt)(E,N,R.N.formatMessage(h.Z.labelsFiltersSystemsSearchTitle)),onDelete:W}}),[E,N]),ee=(0,B.r)(p,O,{endpoint:B.c.packageSystems(t),queryParams:w,selectionDispatcher:H.i2,constructFilename:function(e){return"".concat(t,"-").concat(e.available_evra)},apiResponseTransformer:b.lq}),te=O&&(0,b.Qy)(O).length,ne=(0,G.AR)(t,w,{csv:z.nx,json:z.bb},n),ie=(0,m.useCallback)((function(e){var t=[];return e.forEach((function(e){var n=O[e],i="patch-package:".concat(n),s=t.findIndex((function(e){return e.id===i}));-1!==s?t[s].systems.push(e):n&&t.push({id:i,description:n,systems:[e]})})),!!t.length&&{issues:t}}),[O]),se=(0,G.U)(z.vo,I,{packageName:t},o),oe=(0,G.Pz)(te,ee,{total_items:x},p);return f().createElement(f().Fragment,null,v.hasError&&f().createElement(A.Z,{code:v.code})||f().createElement(S.Z,{disableDefaultColumns:["system_profile","updated"],isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:q.Hd,showTags:!0,getEntities:se,customFilters:{patchParams:{search:N,filter:E,systemProfile:y,selectedTags:_}},paginationProps:{isDisabled:0===x},onLoad:function(e){var t=e.mergeWithEntities;i.replaceReducer((0,Q.UY)(Y(Y({},F.E),t((0,V.Kq)(q.Hd,V.OC),(0,b.fm)({page:T,perPage:Z,sort:L,search:N},d)))))},tableProps:{canSelectAll:!1,variant:C.B.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:$,activeFiltersConfig:J,bulkSelect:ee&&oe,exportConfig:{isDisabled:0===x,onSelect:ne},dedicatedAction:f().createElement(U.Z,{remediationProvider:function(){return(0,b.Sz)((0,b.Q6)(O),ie,K.oN.package)},isDisabled:0===(0,b.Qy)(O).length})}))};$.propTypes={packageName:p().string};const J=$;var ee=n(83215);function te(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function ne(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?te(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):te(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=function(e){var t=e.match,n=(0,u.I0)(),i=f().useState(t.params.packageName),d=(0,s.Z)(i,1)[0],p="".concat(d," - ").concat(R.N.formatMessage(h.Z.titlesPackages));(0,G.Iw)(p);var m=(0,u.v9)((function(e){return e.PackageDetailStore})),g=(0,u.v9)((function(e){return e.PackageDetailStore.status}));f().useEffect((function(){n((0,H.Sb)({packageName:d}))}),[]),f().useEffect((function(){return function(){n((0,ee.L1)()),n((0,H.vh)())}}),[]);var x=m.data.attributes;return f().createElement(f().Fragment,null,f().createElement(v.Z,{title:d,headerOUIA:"package-details",breadcrumbs:[{title:R.N.formatMessage(h.Z.titlesPatchPackages),to:"/packages",isActive:!1},{title:d,isActive:!0}]},g.hasError?f().createElement(E.Z,null):f().createElement(_,{attributes:ne(ne({},x),{},{id:d}),isLoading:g.isLoading})),f().createElement(c.Z,null,f().createElement(o.K,{hasGutter:!0},f().createElement(l.v,null,f().createElement(a.D,null,f().createElement(r.x,{component:r.q.h2},R.N.formatMessage(h.Z.titlesAffectedSystems)))),f().createElement(l.v,null,g.hasError&&f().createElement(A.Z,null)||!g.isLoading&&f().createElement(J,{packageName:d})))))};ie.propTypes={match:p().any};const se=(0,g.withRouter)(ie)},93818:()=>{},94498:()=>{},28992:()=>{},30187:()=>{},90479:()=>{},78752:()=>{},36974:()=>{}}]);
//# sourceMappingURL=../sourcemaps/PackageDetail.6e60d38e10a89bcc640b8accc18a2a1c.js.map