!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="71d30847-ae10-4972-9581-9d31234ec878",e._sentryDebugIdIdentifier="sentry-dbid-71d30847-ae10-4972-9581-9d31234ec878")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"5cb67ae"},(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[9155],{56186:(e,t,n)=>{n.d(t,{N:()=>r,i:()=>c});var r,a=n(70655),s=n(43297),o=n(38296),i=n(67958),l=n(80164);!function(e){e.hr="hr",e.li="li",e.div="div"}(r||(r={}));const c=e=>{var{className:t,component:n=r.hr,isVertical:c=!1,inset:d,orientation:u}=e,p=(0,a.__rest)(e,["className","component","isVertical","inset","orientation"]);const f=n;return s.createElement(f,Object.assign({className:(0,o.css)(i.default.divider,c&&i.default.modifiers.vertical,(0,l.wt)(d,i.default),(0,l.wt)(u,i.default),t)},"hr"!==n&&{role:"separator"},p))};c.displayName="Divider"},33676:(e,t,n)=>{n.d(t,{n:()=>u});var r=n(70655),a=n(43297),s=n(38296),o=n(99355),i=n(64190),l=n(80164),c=n(16545),d=n(73699);class u extends a.Component{constructor(){super(...arguments),this.ref=a.createRef(),this.additionalRef=a.createRef(),this.getInnerNode=e=>e&&e.childNodes&&e.childNodes.length?e.childNodes[0]:e,this.onKeyDown=e=>{var t,n,r,a,s,o,l,c,d,u;const p=e.target===this.ref.current?0:1;this.props.customChild||e.preventDefault(),"ArrowUp"===e.key?(null===(n=null===(t=this.props.context)||void 0===t?void 0:t.keyHandler)||void 0===n||n.call(t,this.props.index,p,i.Ow.UP),e.stopPropagation()):"ArrowDown"===e.key?(null===(a=null===(r=this.props.context)||void 0===r?void 0:r.keyHandler)||void 0===a||a.call(r,this.props.index,p,i.Ow.DOWN),e.stopPropagation()):"ArrowRight"===e.key?(null===(o=null===(s=this.props.context)||void 0===s?void 0:s.keyHandler)||void 0===o||o.call(s,this.props.index,p,i.Ow.RIGHT),e.stopPropagation()):"ArrowLeft"===e.key?(null===(c=null===(l=this.props.context)||void 0===l?void 0:l.keyHandler)||void 0===c||c.call(l,this.props.index,p,i.Ow.LEFT),e.stopPropagation()):"Enter"!==e.key&&" "!==e.key||(e.target.click(),this.props.enterTriggersArrowDown&&(null===(u=null===(d=this.props.context)||void 0===d?void 0:d.keyHandler)||void 0===u||u.call(d,this.props.index,p,i.Ow.DOWN)))},this.componentRef=e=>{this.ref.current=e;const{component:t}=this.props,n=t.ref;n&&("function"==typeof n?n(e):n.current=e)}}componentDidMount(){var e;const{context:t,index:n,isDisabled:r,role:a,customChild:s,autoFocus:o}=this.props,i=s?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==t?void 0:t.sendRef)||void 0===e||e.call(t,n,[i,s?i:this.additionalRef.current],r,"separator"===a),o&&setTimeout((()=>i.focus()))}componentDidUpdate(){var e;const{context:t,index:n,isDisabled:r,role:a,customChild:s}=this.props,o=s?this.getInnerNode(this.ref.current):this.ref.current;null===(e=null==t?void 0:t.sendRef)||void 0===e||e.call(t,n,[o,s?o:this.additionalRef.current],r,"separator"===a)}extendAdditionalChildRef(){const{additionalChild:e}=this.props;return a.cloneElement(e,{ref:this.additionalRef})}render(){const e=this.props,{className:t,children:n,context:i,onClick:u,component:p,role:f,isDisabled:m,isAriaDisabled:h,isPlainText:g,index:v,href:b,tooltip:y,tooltipProps:w,id:E,componentID:P,listItemClassName:C,additionalChild:k,customChild:D,enterTriggersArrowDown:O,icon:N,autoFocus:x,styleChildren:_,description:S,inoperableEvents:Z}=e,j=(0,r.__rest)(e,["className","children","context","onClick","component","role","isDisabled","isAriaDisabled","isPlainText","index","href","tooltip","tooltipProps","id","componentID","listItemClassName","additionalChild","customChild","enterTriggersArrowDown","icon","autoFocus","styleChildren","description","inoperableEvents"]);let I=(0,s.css)(N&&d.default.modifiers.icon,h&&d.default.modifiers.ariaDisabled,t);"a"===p?j["aria-disabled"]=m||h:"button"===p&&(j["aria-disabled"]=m||h,j.type=j.type||"button");const T=e=>a.cloneElement(e,Object.assign(Object.assign({},_&&{className:(0,s.css)(e.props.className,I)}),"separator"!==this.props.role&&{role:f,ref:this.componentRef})),R=e=>{const t=e,r=S?a.createElement(a.Fragment,null,a.createElement("div",{className:d.default.dropdownMenuItemMain},N&&a.createElement("span",{className:(0,s.css)(d.default.dropdownMenuItemIcon)},N),n),a.createElement("div",{className:d.default.dropdownMenuItemDescription},S)):a.createElement(a.Fragment,null,N&&a.createElement("span",{className:(0,s.css)(d.default.dropdownMenuItemIcon)},N),n);return a.createElement(t,Object.assign({},j,m||h?(0,l.KG)(Z):null,{href:b,ref:this.ref,className:I,id:P,role:f}),r)};return a.createElement(o.Dl.Consumer,null,(({onSelect:e,itemClass:t,disabledClass:n,plainTextClass:r})=>{return"separator"!==this.props.role&&(I=(0,s.css)(I,m&&n,g&&r,t,S&&d.default.modifiers.description)),D?a.cloneElement(D,{ref:this.ref,onKeyDown:this.onKeyDown}):a.createElement("li",Object.assign({},C&&{className:C},{role:"none",onKeyDown:this.onKeyDown,onClick:t=>{m||h||(null==u||u(t),null==e||e(t))},id:E}),(o=a.isValidElement(p)?T(p):R(p),y?a.createElement(c.u,Object.assign({content:y},w),o):o),k&&this.extendAdditionalChildRef());var o}))}}u.displayName="InternalDropdownItem",u.defaultProps={className:"",component:"a",role:"none",isDisabled:!1,isPlainText:!1,tooltipProps:{},onClick:e=>{},index:-1,context:{keyHandler:()=>{},sendRef:()=>{}},enterTriggersArrowDown:!1,icon:null,styleChildren:!0,description:null,inoperableEvents:["onClick","onKeyPress"]}},99355:(e,t,n)=>{n.d(t,{Dl:()=>o,dw:()=>a,e4:()=>i,ir:()=>r});var r,a,s=n(43297);!function(e){e.right="right",e.left="left"}(r||(r={})),function(e){e.up="up",e.down="down"}(a||(a={}));const o=s.createContext({onSelect:e=>{},id:"",toggleIndicatorClass:"",toggleIconClass:"",toggleTextClass:"",menuClass:"",itemClass:"",toggleClass:"",baseClass:"",baseComponent:"div",sectionClass:"",sectionTitleClass:"",sectionComponent:"section",disabledClass:"",plainTextClass:"",menuComponent:"ul"}),i=s.createContext({keyHandler:null,sendRef:null})},5964:(e,t,n)=>{n.d(t,{VA:()=>s,ZP:()=>o,kc:()=>a});var r=n(40400);const a={name:"CaretDownIcon",height:512,width:320,svgPath:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z",yOffset:0,xOffset:0},s=(0,r.IU)(a),o=s},16590:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(83237),a=n(43297),s=n.n(a),o=n(13784),i=n(32132),l=n(30893);const c=function(e){var t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).updatable,n=s().useMemo((function(){return o.tG.map((function(e){var t=e.value;return{label:e.label,value:t.toString()}}))}),[]);return{label:i.N.formatMessage(l.Z.labelsFiltersStatus),type:r.Y.checkbox,filterValues:{onChange:function(t,n){!function(t){e({filter:{updatable:t}})}(n)},items:n,value:t,placeholder:i.N.formatMessage(l.Z.labelsColumnsStatusPlaceholder)}}}},8453:(e,t,n)=>{n.r(t),n.d(t,{default:()=>te});var r=n(4942),a=n(29439),s=n(49739),o=n(83826),i=n(68340),l=n(68774),c=n(14748),d=n(45697),u=n.n(d),p=n(43297),f=n.n(p),m=n(28216),h=n(96620),g=n(30893),v=n(49642),b=n(50693),y=n(16475),w=n(5391),E=n(81469),P=function(e){var t=e.attributes.description,n=e.isLoading,r=f().useState(1e3),i=(0,a.Z)(r,2),l=i[0],c=i[1];return t&&f().createElement(b.r,{hasGutter:!0,style:{minHeight:50}},f().createElement(y.P,{md:8,sm:12},f().createElement(E.ZP,{loading:n,variant:E.x.spinner,centered:!0},f().createElement(s.K,{hasGutter:!0},f().createElement(o.v,null),f().createElement(o.v,{style:{whiteSpace:"pre-line"}},t&&(0,w.Nt)(t,l,c))))))||f().createElement(p.Fragment,null)};P.propTypes={attributes:u().object,isLoading:u().bool};const C=P;var k=n(15984),D=n(75863),O=n(33739),N=n(90747),x=n(16590),_=n(87462),S=n(54680),Z=n(92694),j=n(64403),I=n(83237),T=n(32132);const R=function(e,t,n){var r=f().useState(!1),s=(0,a.Z)(r,2),o=s[0],i=s[1],l=f().useState(10),c=(0,a.Z)(l,2),d=c[0],u=c[1],p=t&&t.installed_evra,m=p&&("string"==typeof t.installed_evra&&t.installed_evra.split(",")||t.installed_evra),h=n.data&&n.data.sort().map((function(e){return{value:e.evra}}))||[{value:T.N.formatMessage(g.Z.textNoVersionAvailable),disabled:!0}];return{type:I.Y.custom,label:T.N.formatMessage(g.Z.labelsFiltersPackageVersionTitle),value:"custom",filterValues:{children:f().createElement(S.P,(0,_.Z)({variant:h.length>0&&j.TM.checkbox||j.TM.typeaheadMulti,typeAheadAriaLabel:T.N.formatMessage(g.Z.labelsFiltersPackageVersionPlaceholder),onToggle:function(e){i(e)},onSelect:function(n,r){var a={filter:{}};if(!m||m&&!m.includes(r)){var s=p&&""!==t.installed_evra&&t.installed_evra.concat(",")||"";a.filter={installed_evra:"".concat(s).concat(r)}}else{var o=1!==m.length&&m.filter((function(e){return!e.includes(r)})).join(",")||void 0;a.filter={installed_evra:o}}e(a)},selections:m,isOpen:o,"aria-labelledby":"patch-version-filter",placeholderText:T.N.formatMessage(g.Z.labelsFiltersPackageVersionPlaceholder)},d<h.lengt&&{loadingVariant:{text:"View more",onClick:function(){u(h.length)}}},{style:{maxHeight:"400px",overflow:"auto"}}),h.slice(0,d).map((function(e,t){return f().createElement(Z.$,(0,_.Z)({isDisabled:e.disabled,key:t,value:e.value},e.description&&{description:e.description}))})))}}};var A=n(52579),M=n(7322),F=n(9557),H=n(5747),L=n(11220),V=n(13784),K=n(91607),U=n(53074),G=n(58684),q=n(93080),Y=n(97779);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(e){var t=e.packageName,n=(0,m.I0)(),r=(0,m.oR)(),s=(0,h.useHistory)(),o=f().useState([]),i=(0,a.Z)(o,2),l=i[0],c=i[1],d=(0,w.PZ)(s.location.search),u=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.rows)||[]}),m.wU),v=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.status)||{}})),b=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.total)||0})),y=(0,m.v9)((function(e){var t=e.entities;return(null==t?void 0:t.selectedRows)||[]})),E=(0,m.v9)((function(e){var t=e.PackageSystemsStore;return(null==t?void 0:t.queryParams)||{}})),P=E.systemProfile,C=E.selectedTags,k=E.filter,_=E.search,S=E.sort,Z=E.page,j=E.perPage,I=(0,p.useCallback)((function(e){n((0,F.g5)(e))}),[]);(0,p.useEffect)((function(){I(d),(0,L.dh)({package_name:t}).then(c)}),[]),(0,p.useEffect)((function(){return function(){n((0,F.RV)()),n((0,F.d)())}}),[]);var z=(0,K.j5)(Q(Q({},k),{},{search:_}),I),W=(0,a.Z)(z,1)[0],B={items:[(0,N.Z)(I,_,T.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle),T.N.formatMessage(g.Z.labelsFiltersSystemsSearchPlaceholder)),(0,x.Z)(I,k),R(I,k,l)]},$=(0,p.useMemo)((function(){return{filters:(0,w.mt)(k,_,T.N.formatMessage(g.Z.labelsFiltersSystemsSearchTitle)),onDelete:W}}),[k,_]),J=(0,q.r)(u,y,{endpoint:q.c.packageSystems(t),queryParams:E,selectionDispatcher:F.i2,constructFilename:function(e){return"".concat(e.available_evra)},apiResponseTransformer:w.lq}),X=y&&(0,w.Qy)(y).length,ee=(0,K.AR)(t,E,{csv:L.nx,json:L.bb},n),te=(0,p.useCallback)((function(e){var n=[];return e.forEach((function(e){var r=t+"-"+y[e],a="patch-package:".concat(r),s=n.findIndex((function(e){return e.id===a}));-1!==s?n[s].systems.push(e):r&&n.push({id:a,description:r,systems:[e]})})),!!n.length&&{issues:n}}),[y]),ne=(0,K.U)(L.vo,I,{packageName:t},s),re=(0,K.Pz)(X,J,{total_items:b},u);return f().createElement(f().Fragment,null,v.hasError&&f().createElement(A.Z,{code:v.code})||f().createElement(O.Z,{disableDefaultColumns:["system_profile","updated"],isFullView:!0,autoRefresh:!0,initialLoading:!0,hideFilters:{all:!0,tags:!1},columns:G.Hd,showTags:!0,getEntities:ne,customFilters:{patchParams:{search:_,filter:k,systemProfile:P,selectedTags:C}},paginationProps:{isDisabled:0===b},onLoad:function(e){var t=e.mergeWithEntities;r.replaceReducer((0,Y.UY)(Q(Q({},M.E),t((0,H.Kq)(G.Hd,H.OC),(0,w.fm)({page:Z,perPage:j,sort:S,search:_},d)))))},tableProps:{canSelectAll:!1,variant:D.B.compact,className:"patchCompactInventory",isStickyHeader:!0},filterConfig:B,activeFiltersConfig:$,bulkSelect:J&&re,exportConfig:{isDisabled:0===b,onSelect:ee},dedicatedAction:f().createElement(U.Z,{remediationProvider:function(){return(0,w.Sz)((0,w.Q6)(y),te,V.oN.package)},isDisabled:0===(0,w.Qy)(y).length})}))};W.propTypes={packageName:u().string};const B=W;var $=n(83215);function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function X(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ee=function(e){var t=e.match,n=(0,m.I0)(),r=f().useState(t.params.packageName),d=(0,a.Z)(r,1)[0],u="".concat(d," - ").concat(T.N.formatMessage(g.Z.titlesPackages));(0,K.Iw)(u);var p=(0,m.v9)((function(e){return e.PackageDetailStore})),h=(0,m.v9)((function(e){return e.PackageDetailStore.status}));f().useEffect((function(){n((0,F.Sb)({packageName:d}))}),[]),f().useEffect((function(){return function(){n((0,$.L1)()),n((0,F.vh)())}}),[]);var b=p.data.attributes;return f().createElement(f().Fragment,null,f().createElement(v.Z,{title:d,headerOUIA:"package-details",breadcrumbs:[{title:T.N.formatMessage(g.Z.titlesPatchPackages),to:"/packages",isActive:!1},{title:d,isActive:!0}]},h.hasError?f().createElement(k.Z,null):f().createElement(C,{attributes:X(X({},b),{},{id:d}),isLoading:h.isLoading})),f().createElement(c.Z,null,f().createElement(s.K,{hasGutter:!0},f().createElement(o.v,null,f().createElement(l.D,null,f().createElement(i.x,{component:i.q.h2},T.N.formatMessage(g.Z.titlesAffectedSystems)))),f().createElement(o.v,null,h.hasError&&f().createElement(A.Z,null)||!h.isLoading&&f().createElement(B,{packageName:d})))))};ee.propTypes={match:u().any};const te=(0,h.withRouter)(ee)}}]);