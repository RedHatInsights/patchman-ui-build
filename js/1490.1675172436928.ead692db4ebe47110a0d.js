"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[1490],{56787:(e,n,t)=>{t.d(n,{L:()=>d});var s=t(70655),o=t(43297),i=t(73699),l=t(99355),r=t(17352),a=t(62472);const d=e=>{var{onSelect:n,ref:t,ouiaId:p,ouiaSafe:c,alignments:u,contextProps:m,menuAppendTo:h="inline",isFlipEnabled:f=!0,removeFindDomNode:g=!1,zIndex:C=9999}=e,b=(0,s.__rest)(e,["onSelect","ref","ouiaId","ouiaSafe","alignments","contextProps","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]);return o.createElement(l.Dl.Provider,{value:Object.assign({onSelect:e=>n&&n(e),toggleTextClass:i.default.dropdownToggleText,toggleIconClass:i.default.dropdownToggleImage,toggleIndicatorClass:i.default.dropdownToggleIcon,menuClass:i.default.dropdownMenu,itemClass:i.default.dropdownMenuItem,toggleClass:i.default.dropdownToggle,baseClass:i.default.dropdown,baseComponent:"div",sectionClass:i.default.dropdownGroup,sectionTitleClass:i.default.dropdownGroupTitle,sectionComponent:"section",disabledClass:i.default.modifiers.disabled,plainTextClass:i.default.modifiers.text,ouiaId:(0,a.Z1)(d.displayName,p),ouiaSafe:c,ouiaComponentType:d.displayName,alignments:u},m)},o.createElement(r.R,Object.assign({menuAppendTo:h,isFlipEnabled:f,removeFindDomNode:g,zIndex:C},b)))};d.displayName="Dropdown"},84457:(e,n,t)=>{t.d(n,{h:()=>a});var s=t(70655),o=t(43297),i=t(33676),l=t(99355),r=t(62472);const a=e=>{var{children:n,className:t,component:d="a",isDisabled:p=!1,isAriaDisabled:c=!1,isPlainText:u=!1,href:m,tooltip:h,tooltipProps:f={},listItemClassName:g,onClick:C,ref:b,additionalChild:v,customChild:E,tabIndex:y=-1,icon:T=null,autoFocus:w,description:R=null,styleChildren:D,ouiaId:O,ouiaSafe:x}=e,N=(0,s.__rest)(e,["children","className","component","isDisabled","isAriaDisabled","isPlainText","href","tooltip","tooltipProps","listItemClassName","onClick","ref","additionalChild","customChild","tabIndex","icon","autoFocus","description","styleChildren","ouiaId","ouiaSafe"]);const P=(0,r.S$)(a.displayName,O,x);return o.createElement(l.e4.Consumer,null,(e=>o.createElement(i.n,Object.assign({context:e,role:"menuitem",tabIndex:y,className:t,component:d,isDisabled:p,isAriaDisabled:c,isPlainText:u,href:m,tooltip:h,tooltipProps:f,listItemClassName:g,onClick:C,additionalChild:v,customChild:E,icon:T,autoFocus:w,styleChildren:D,description:R},P,N),n)))};a.displayName="DropdownItem"},94868:(e,n,t)=>{t.d(n,{h:()=>p});var s=t(70655),o=t(43297),i=t(21704),l=t(73699),r=t(38296),a=t(80164),d=t(99355);class p extends o.Component{constructor(){super(...arguments),this.refsCollection=[],this.componentWillUnmount=()=>{document.removeEventListener("keydown",this.onKeyDown)},this.onKeyDown=e=>{if(!this.props.isOpen||!Array.from(document.activeElement.classList).find((e=>p.validToggleClasses.concat(this.context.toggleClass).includes(e))))return;const n=this.refsCollection;if("ArrowDown"===e.key){const t=n.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled")));p.focusFirstRef(t),e.stopPropagation()}else if("ArrowUp"===e.key){const t=n.length,s=n.slice(t-1,t),o=s&&s[0];p.focusFirstRef(o),e.stopPropagation()}},this.childKeyHandler=(e,n,t,s=!1)=>{(0,a.qG)(e,n,t,this.refsCollection,this.props.isGrouped?this.refsCollection:o.Children.toArray(this.props.children),s)},this.sendRef=(e,n,t,s)=>{this.refsCollection[e]=[],n.map(((n,t)=>{n?n.getAttribute?this.refsCollection[e][t]=s?null:n:this.refsCollection[e][t]=i.findDOMNode(n):this.refsCollection[e][t]=null}))}}componentDidMount(){document.addEventListener("keydown",this.onKeyDown);const{autoFocus:e}=this.props;if(e){const e=this.refsCollection.find((e=>e&&e[0]&&!e[0].hasAttribute("disabled"))),n=e&&e[0];n&&n.focus&&setTimeout((()=>n.focus()))}}shouldComponentUpdate(){return this.refsCollection=[],!0}extendChildren(){const{children:e,isGrouped:n}=this.props;if(n){let n=0;return o.Children.map(e,(e=>{const t=e,s={};return t.props&&t.props.children&&(Array.isArray(t.props.children)?s.children=o.Children.map(t.props.children,(e=>o.cloneElement(e,{index:n++}))):s.children=o.cloneElement(t.props.children,{index:n++})),o.cloneElement(t,s)}))}return o.Children.map(e,((e,n)=>o.cloneElement(e,{index:n})))}render(){const e=this.props,{className:n,isOpen:t,position:i,children:p,component:c,isGrouped:u,setMenuComponentRef:m,openedOnEnter:h,alignments:f}=e,g=(0,s.__rest)(e,["className","isOpen","position","children","component","isGrouped","setMenuComponentRef","openedOnEnter","alignments"]);return o.createElement(d.e4.Provider,{value:{keyHandler:this.childKeyHandler,sendRef:this.sendRef}},"div"===c?o.createElement(d.Dl.Consumer,null,(({onSelect:e,menuClass:s})=>o.createElement("div",{className:(0,r.css)(s,i===d.ir.right&&l.default.modifiers.alignRight,(0,a.wt)(f,l.default,"align-"),n),hidden:!t,onClick:n=>e&&e(n),ref:m},p))):u&&o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:s})=>{const p=s||"div";return o.createElement(p,Object.assign({},g,{className:(0,r.css)(e,i===d.ir.right&&l.default.modifiers.alignRight,(0,a.wt)(f,l.default,"align-"),n),hidden:!t,role:"menu",ref:m}),this.extendChildren())}))||o.createElement(d.Dl.Consumer,null,(({menuClass:e,menuComponent:s})=>{const p=s||c;return o.createElement(p,Object.assign({},g,{className:(0,r.css)(e,i===d.ir.right&&l.default.modifiers.alignRight,(0,a.wt)(f,l.default,"align-"),n),hidden:!t,role:"menu",ref:m}),this.extendChildren())})))}}p.displayName="DropdownMenu",p.defaultProps={className:"",isOpen:!0,openedOnEnter:!1,autoFocus:!0,position:d.ir.left,component:"ul",isGrouped:!1,setMenuComponentRef:null},p.validToggleClasses=[l.default.dropdownToggle,l.default.dropdownToggleButton],p.focusFirstRef=e=>{e&&e[0]&&e[0].focus&&setTimeout((()=>e[0].focus()))},p.contextType=d.Dl},17352:(e,n,t)=>{t.d(n,{R:()=>c});var s=t(70655),o=t(43297),i=t(73699),l=t(38296),r=t(94868),a=t(99355),d=t(62472),p=t(16438);class c extends o.Component{constructor(e){super(e),this.openedOnEnter=!1,this.baseComponentRef=o.createRef(),this.menuComponentRef=o.createRef(),this.onEnter=()=>{this.openedOnEnter=!0},this.setMenuComponentRef=e=>{this.menuComponentRef=e},this.getMenuComponentRef=()=>this.menuComponentRef,e.dropdownItems&&e.dropdownItems.length>0&&e.children&&console.error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered")}componentDidUpdate(){this.props.isOpen||(this.openedOnEnter=!1)}render(){const e=this.props,{children:n,className:t,direction:u,dropdownItems:m,isOpen:h,isPlain:f,isText:g,isGrouped:C,isFullHeight:b,onSelect:v,position:E,toggle:y,autoFocus:T,menuAppendTo:w,isFlipEnabled:R,removeFindDomNode:D,zIndex:O}=e,x=(0,s.__rest)(e,["children","className","direction","dropdownItems","isOpen","isPlain","isText","isGrouped","isFullHeight","onSelect","position","toggle","autoFocus","menuAppendTo","isFlipEnabled","removeFindDomNode","zIndex"]),N=y.props.id||"pf-dropdown-toggle-id-"+c.currentId++;let P,I,k=!1;m&&m.length>0?(P="ul",I=m,k=!0):(P="div",I=o.Children.toArray(n));const M=this.openedOnEnter,A=R&&"inline"!==w;return o.createElement(a.Dl.Consumer,null,(({baseClass:e,baseComponent:n,id:s,ouiaId:c,ouiaComponentType:m,ouiaSafe:v,alignments:R})=>{const F=n,_=o.createElement(r.h,{className:(0,l.css)(A&&i.default.modifiers.static),setMenuComponentRef:this.setMenuComponentRef,component:P,isOpen:h,position:E,"aria-labelledby":s?`${s}-toggle`:N,isGrouped:C,autoFocus:M&&T,alignments:R},I),S=o.createElement("div",{className:(0,l.css)(e,u===a.dw.up&&i.default.modifiers.top,E===a.ir.right&&i.default.modifiers.alignRight,h&&i.default.modifiers.expanded,t)},h&&_),z=o.createElement(F,Object.assign({},x,{className:(0,l.css)(e,u===a.dw.up&&i.default.modifiers.top,E===a.ir.right&&i.default.modifiers.alignRight,h&&i.default.modifiers.expanded,b&&i.default.modifiers.fullHeight,t),ref:this.baseComponentRef},(0,d.dp)(m,c,v)),o.Children.map(y,(e=>o.cloneElement(e,{parentRef:this.baseComponentRef,getMenuRef:this.getMenuComponentRef,isOpen:h,id:N,isPlain:f,isText:g,"aria-haspopup":k,onEnter:()=>{this.onEnter(),e.props.onEnter&&e.props.onEnter()}}))),"inline"===w&&h&&_);return"inline"===w?z:o.createElement(p.r,{trigger:z,popper:S,direction:u,position:E,appendTo:"parent"===w?(()=>this.baseComponentRef&&this.baseComponentRef.current?this.baseComponentRef.current.parentElement:null)():w,isVisible:h,removeFindDomNode:D,zIndex:O,popperMatchesTriggerWidth:!1})}))}}c.displayName="DropdownWithContext",c.currentId=0,c.defaultProps={className:"",dropdownItems:[],isOpen:!1,isPlain:!1,isText:!1,isGrouped:!1,position:a.ir.left,direction:a.dw.down,onSelect:()=>{},autoFocus:!0,menuAppendTo:"inline",isFlipEnabled:!0}},94024:(e,n,t)=>{t.d(n,{a:()=>r});var s=t(70655),o=t(43297),i=t(62165),l=t(1024);const r=e=>{var{id:n="",children:t=null,className:r="",isOpen:a=!1,"aria-label":d="Actions",parentRef:p=null,getMenuRef:c=null,isActive:u=!1,isPlain:m=!1,isDisabled:h=!1,bubbleEvent:f=!1,onToggle:g=(()=>{}),ref:C}=e,b=(0,s.__rest)(e,["id","children","className","isOpen","aria-label","parentRef","getMenuRef","isActive","isPlain","isDisabled","bubbleEvent","onToggle","ref"]);return o.createElement(l.Z,Object.assign({id:n,className:r,isOpen:a,"aria-label":d,parentRef:p,getMenuRef:c,isActive:u,isPlain:m,isDisabled:h,onToggle:g,bubbleEvent:f},b),o.createElement(i.ZP,null))};r.displayName="KebabToggle"},1024:(e,n,t)=>{t.d(n,{Z:()=>p});var s=t(70655),o=t(43297),i=t(73699),l=t(99355),r=t(38296),a=t(1774);const d={default:"",primary:i.default.modifiers.primary,secondary:i.default.modifiers.secondary};class p extends o.Component{constructor(){super(...arguments),this.buttonRef=o.createRef(),this.componentDidMount=()=>{document.addEventListener("click",this.onDocClick),document.addEventListener("touchstart",this.onDocClick),document.addEventListener("keydown",this.onEscPress)},this.componentWillUnmount=()=>{document.removeEventListener("click",this.onDocClick),document.removeEventListener("touchstart",this.onDocClick),document.removeEventListener("keydown",this.onEscPress)},this.onDocClick=e=>{const{isOpen:n,parentRef:t,onToggle:s,getMenuRef:o}=this.props,i=o&&o(),l=t&&t.current&&t.current.contains(e.target),r=i&&i.contains&&i.contains(e.target);!n||l||r||null==s||s(!1,e)},this.onEscPress=e=>{var n,t,s;const{parentRef:o,getMenuRef:i}=this.props,l=i&&i(),r=o&&o.current&&o.current.contains(e.target),d=l&&l.contains&&l.contains(e.target);!this.props.isOpen||e.key!==a.yu.Escape&&"Tab"!==e.key||!r&&!d||(null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!1,e),null===(s=this.buttonRef.current)||void 0===s||s.focus())},this.onKeyDown=e=>{var n,t,s,o,i,l;("Tab"!==e.key||this.props.isOpen)&&("Tab"!==e.key&&"Enter"!==e.key&&" "!==e.key||!this.props.isOpen?"Enter"!==e.key&&" "!==e.key||this.props.isOpen||(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(o=(s=this.props).onToggle)||void 0===o||o.call(s,!this.props.isOpen,e),null===(l=(i=this.props).onEnter)||void 0===l||l.call(i)):(this.props.bubbleEvent||e.stopPropagation(),e.preventDefault(),null===(t=(n=this.props).onToggle)||void 0===t||t.call(n,!this.props.isOpen,e)))}}render(){const e=this.props,{className:n,children:t,isOpen:a,isDisabled:p,isPlain:c,isText:u,isPrimary:m,isSplitButton:h,toggleVariant:f,onToggle:g,"aria-haspopup":C,isActive:b,bubbleEvent:v,onEnter:E,parentRef:y,getMenuRef:T,id:w,type:R}=e,D=(0,s.__rest)(e,["className","children","isOpen","isDisabled","isPlain","isText","isPrimary","isSplitButton","toggleVariant","onToggle","aria-haspopup","isActive","bubbleEvent","onEnter","parentRef","getMenuRef","id","type"]);return o.createElement(l.Dl.Consumer,null,(({toggleClass:e})=>o.createElement("button",Object.assign({},D,{id:w,ref:this.buttonRef,className:(0,r.css)(h?i.default.dropdownToggleButton:e||i.default.dropdownToggle,b&&i.default.modifiers.active,c&&i.default.modifiers.plain,u&&i.default.modifiers.text,m&&i.default.modifiers.primary,f&&d[f],n),type:R||"button",onClick:e=>null==g?void 0:g(!a,e),"aria-expanded":a,"aria-haspopup":C,onKeyDown:e=>this.onKeyDown(e),disabled:p}),t)))}}p.displayName="Toggle",p.defaultProps={className:"",isOpen:!1,isActive:!1,isDisabled:!1,isPlain:!1,isText:!1,isPrimary:!1,isSplitButton:!1,onToggle:()=>{},onEnter:()=>{},bubbleEvent:!1}},9003:(e,n,t)=>{t.d(n,{LC:()=>i,ZP:()=>l,sl:()=>o});var s=t(40400);const o={name:"AngleDownIcon",height:512,width:320,svgPath:"M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z",yOffset:0,xOffset:0},i=(0,s.IU)(o),l=i},62165:(e,n,t)=>{t.d(n,{HJ:()=>i,Lf:()=>o,ZP:()=>l});var s=t(40400);const o={name:"EllipsisVIcon",height:512,width:192,svgPath:"M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z",yOffset:0,xOffset:0},i=(0,s.IU)(o),l=i},26499:(e,n,t)=>{t.d(n,{$g:()=>o,MJ:()=>i,ZP:()=>l});var s=t(40400);const o={name:"GripVerticalIcon",height:512,width:320,svgPath:"M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z",yOffset:0,xOffset:0},i=(0,s.IU)(o),l=i}}]);