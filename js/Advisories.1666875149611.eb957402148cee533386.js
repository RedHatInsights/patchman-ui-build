(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[7020],{85991:(e,o,l)=>{"use strict";o.a=void 0;const t=l(70655),n=t.__importStar(l(43297)),r=t.__importDefault(l(44303)),a=l(38296),s=l(23053);o.a=e=>{var{children:l=null,className:f="","aria-label":c="Breadcrumb",ouiaId:m,ouiaSafe:i=!0}=e,p=t.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=s.useOUIAProps(o.a.displayName,m,i);return n.createElement("nav",Object.assign({},p,{"aria-label":c,className:a.css(r.default.breadcrumb,f)},d),n.createElement("ol",{className:r.default.breadcrumbList},n.Children.map(l,((e,o)=>{const l=o>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:l}):e}))))},o.a.displayName="Breadcrumb"},49489:(e,o,l)=>{"use strict";o.g=void 0;const t=l(70655),n=t.__importStar(l(43297)),r=t.__importDefault(l(95511)),a=t.__importDefault(l(44303)),s=l(38296);o.g=e=>{var{children:o=null,className:l="",to:f,isActive:c=!1,isDropdown:m=!1,showDivider:i,target:p,component:d="a",render:u}=e,O=t.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const _=d,C=c?"page":void 0,g=s.css(a.default.breadcrumbLink,c&&a.default.modifiers.current);return n.createElement("li",Object.assign({},O,{className:s.css(a.default.breadcrumbItem,l)}),i&&n.createElement("span",{className:a.default.breadcrumbItemDivider},n.createElement(r.default,null)),"button"===d&&n.createElement("button",{className:g,"aria-current":C,type:"button"},o),m&&n.createElement("span",{className:s.css(a.default.breadcrumbDropdown)},o),u&&u({className:g,ariaCurrent:C}),f&&!u&&n.createElement(_,{href:f,target:p,className:g,"aria-current":C},o),!f&&"button"!==d&&!m&&o)},o.g.displayName="BreadcrumbItem"},2095:(e,o,l)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Card=o.CardContext=void 0;const t=l(70655),n=t.__importStar(l(43297)),r=t.__importDefault(l(54918)),a=l(38296),s=l(23053);o.CardContext=n.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),o.Card=e=>{var{children:l=null,id:f="",className:c="",component:m="article",isHoverable:i=!1,isCompact:p=!1,isSelectable:d=!1,isSelectableRaised:u=!1,isSelected:O=!1,isDisabledRaised:_=!1,isFlat:C=!1,isExpanded:g=!1,isRounded:w=!1,isLarge:b=!1,isFullHeight:v=!1,isPlain:x=!1,ouiaId:h,ouiaSafe:y=!0,hasSelectableInput:S=!1,selectableInputAriaLabel:R,onSelectableInputChange:E=(()=>{})}=e,L=t.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const P=m,M=s.useOUIAProps(o.Card.displayName,h,y),[N,j]=n.useState(""),[I,X]=n.useState();p&&b&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),b=!1);const Z=n.useRef(!1);return n.useEffect((()=>{R?X({"aria-label":R}):N?X({"aria-labelledby":N}):S&&!Z.current&&(X({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[S,R,N]),n.createElement(o.CardContext.Provider,{value:{cardId:f,registerTitleId:e=>{j(e),Z.current=!!e},isExpanded:g}},S&&n.createElement("input",Object.assign({className:"pf-screen-reader",id:`${f}-input`},I,{type:"checkbox",checked:O,onChange:e=>E(f,e),disabled:_,tabIndex:-1})),n.createElement(P,Object.assign({id:f,className:a.css(r.default.card,p&&r.default.modifiers.compact,g&&r.default.modifiers.expanded,C&&r.default.modifiers.flat,w&&r.default.modifiers.rounded,b&&r.default.modifiers.displayLg,v&&r.default.modifiers.fullHeight,x&&r.default.modifiers.plain,_?a.css(r.default.modifiers.nonSelectableRaised):u?a.css(r.default.modifiers.selectableRaised,O&&r.default.modifiers.selectedRaised):d||i?a.css(r.default.modifiers.selectable,O&&r.default.modifiers.selected):"",c),tabIndex:d||u?"0":void 0},L,M),l))},o.Card.displayName="Card"},85962:(e,o,l)=>{"use strict";o.e=void 0;const t=l(70655),n=t.__importStar(l(43297)),r=t.__importDefault(l(54918)),a=l(38296);o.e=e=>{var{children:o=null,className:l="",component:s="div",isFilled:f=!0}=e,c=t.__rest(e,["children","className","component","isFilled"]);const m=s;return n.createElement(m,Object.assign({className:a.css(r.default.cardBody,!f&&r.default.modifiers.noFill,l)},c),o)},o.e.displayName="CardBody"},36104:(e,o,l)=>{"use strict";o.l=void 0;const t=l(70655),n=t.__importStar(l(43297)),r=l(38296),a=t.__importDefault(l(54918)),s=l(2095);o.l=e=>{var{children:o=null,className:l="",component:f="div"}=e,c=t.__rest(e,["children","className","component"]);const{cardId:m,registerTitleId:i}=n.useContext(s.CardContext),p=f,d=m?`${m}-title`:"";return n.useEffect((()=>(i(d),()=>i(""))),[i,d]),n.createElement(p,Object.assign({className:r.css(a.default.cardTitle,l),id:d||void 0},c),o)},o.l.displayName="CardTitle"},49287:(e,o,l)=>{"use strict";o.r=void 0;const t=l(70655),n=t.__importStar(l(43297)),r=t.__importDefault(l(3246)),a=l(38296),s=l(39383),f=t.__importStar(l(24936)),c=l(42319);o.r=e=>{var{children:o=null,className:l="",component:m="div",hasGutter:i,span:p=null,order:d,style:u}=e,O=t.__rest(e,["children","className","component","hasGutter","span","order","style"]);const _=[r.default.grid,p&&r.default.modifiers[`all_${p}Col`]],C=m;return Object.entries(s.DeviceSizes).forEach((([e,o])=>{const l=e,t=O[l];t&&_.push(r.default.modifiers[`all_${t}ColOn${o}`]),delete O[l]})),n.createElement(C,Object.assign({className:a.css(..._,i&&r.default.modifiers.gutter,l),style:u||d?Object.assign(Object.assign({},u),c.setBreakpointCssVars(d,f.l_grid_item_Order.name)):void 0},O),o)},o.r.displayName="Grid"},18038:(e,o,l)=>{"use strict";o.P=void 0;const t=l(70655),n=t.__importStar(l(43297)),r=t.__importDefault(l(3246)),a=l(38296),s=l(39383),f=t.__importStar(l(24936)),c=l(42319);o.P=e=>{var{children:o=null,className:l="",component:m="div",span:i=null,rowSpan:p=null,offset:d=null,order:u,style:O}=e,_=t.__rest(e,["children","className","component","span","rowSpan","offset","order","style"]);const C=[r.default.gridItem,i&&r.default.modifiers[`${i}Col`],p&&r.default.modifiers[`${p}Row`],d&&r.default.modifiers[`offset_${d}Col`]],g=m;return Object.entries(s.DeviceSizes).forEach((([e,o])=>{const l=e,t=`${l}RowSpan`,n=`${l}Offset`,a=_[l],s=_[t],f=_[n];a&&C.push(r.default.modifiers[`${a}ColOn${o}`]),s&&C.push(r.default.modifiers[`${s}RowOn${o}`]),f&&C.push(r.default.modifiers[`offset_${f}ColOn${o}`]),delete _[l],delete _[t],delete _[n]})),n.createElement(g,Object.assign({className:a.css(...C,l),style:O||u?Object.assign(Object.assign({},O),c.setBreakpointCssVars(u,f.l_grid_item_Order.name)):void 0},_),o)},o.P.displayName="GridItem"},39383:(e,o)=>{"use strict";var l,t;Object.defineProperty(o,"__esModule",{value:!0}),o.DeviceSizes=o.BaseSizes=void 0,(t=o.BaseSizes||(o.BaseSizes={})).xs="xs",t.sm="sm",t.md="md",t.lg="lg",t.xl="xl",t["2xl"]="2xl",t["3xl"]="3xl",t["4xl"]="4xl",(l=o.DeviceSizes||(o.DeviceSizes={})).sm="Sm",l.md="Md",l.lg="Lg",l.xl="Xl",l.xl2="_2xl"},44303:(e,o,l)=>{"use strict";l.r(o),l.d(o,{default:()=>t}),l.e(8392).then(l.t.bind(l,58392,23));const t={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},54918:(e,o,l)=>{"use strict";l.r(o),l.d(o,{default:()=>t}),l.e(598).then(l.t.bind(l,80598,23));const t={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},3246:(e,o,l)=>{"use strict";l.r(o),l.d(o,{default:()=>t}),l.e(2816).then(l.t.bind(l,72816,23));const t={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},24936:(e,o)=>{"use strict";o.__esModule=!0,o.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},o.default=o.l_grid_item_Order},53754:(e,o,l)=>{"use strict";l.d(o,{Z:()=>n});var t=l(43297);const n=l.n(t)().createContext("light")},14748:(e,o,l)=>{"use strict";l.d(o,{Z:()=>i});var t=l(43297),n=l.n(t),r=l(94184),a=l.n(r),s=l(50533),f=l(53754),c=function(){return c=Object.assign||function(e){for(var o,l=1,t=arguments.length;l<t;l++)for(var n in o=arguments[l])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},c.apply(this,arguments)},m=function(e,o,l){if(l||2===arguments.length)for(var t,n=0,r=o.length;n<r;n++)!t&&n in o||(t||(t=Array.prototype.slice.call(o,0,n)),t[n]=o[n]);return e.concat(t||Array.prototype.slice.call(o))};const i=(0,s.$j)((function(e){var o=e.routerData;return{params:o&&o.params,path:o&&o.path}}),(function(){return{}}))((function(e){var o=e.path,l=e.params,t=void 0===l?{}:l,r=e.children,s=e.className,i=function(e,o){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(l[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(l[t[n]]=e[t[n]])}return l}(e,["path","params","children","className"]),p=function(){var e,l,n;if(null===(n=null===(l=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===l?void 0:l.$internal)||void 0===n?void 0:n.store){var r=window.insights.chrome.$internal.store.getState();if(o&&r)return o.split("/").reduce((function(e,o){var l,n;return 0===o.indexOf(":")?e.dynamic=c(c({},e.dynamic),((l={})["data-".concat((n=o.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=t[o.substr(1)],l)):e.staticPart=m(m([],e.staticPart,!0),""!==o?[o]:[],!0),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),d=p.dynamic,u=p.staticPart;return n().createElement(f.Z.Consumer,null,(function(e){var o;void 0===e&&(e="light");var l=a()(((o={})["pf-m-".concat(e)]="dark"===e,o));return{dark:n().createElement("section",c({},i,d,{"page-type":u.join("-"),className:"".concat(a()(s,"pf-l-page__main-section pf-c-page__main-section")," ").concat(l)}),n().Children.map(r,(function(e){return n().cloneElement(e,{className:"pf-m-dark"})}))),light:n().createElement("section",c({},i,d,{"page-type":u.join("-"),className:"".concat(a()(s,"pf-l-page__main-section pf-c-page__main-section"))}),r)}[e]}))}))},80123:(e,o,l)=>{"use strict";l.d(o,{Z:()=>c});var t=l(43297),n=l.n(t),r=l(94184),a=l.n(r),s=l(53754),f=function(){return f=Object.assign||function(e){for(var o,l=1,t=arguments.length;l<t;l++)for(var n in o=arguments[l])Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);return e},f.apply(this,arguments)};const c=function(e){var o=e.className,l=e.children,t=function(e,o){var l={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(l[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)o.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(l[t[n]]=e[t[n]])}return l}(e,["className","children"]),r=a()(o,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return n().createElement(s.Z.Consumer,null,(function(e){var o,s;void 0===e&&(e="light");var c=a()(((o={})["pf-m-".concat(e,"-200")]="dark"===e,o),((s={})["pf-m-light"]="light"===e,s));return n().createElement("section",f({},t,{className:"".concat(r," ").concat(c),"widget-type":"InsightsPageHeader"}),l)}))}},39173:(e,o,l)=>{"use strict";l.d(o,{Z:()=>f});var t=l(43297),n=l.n(t),r=l(94184),a=l.n(r),s=l(75448);const f=function(e){var o=e.className,l=e.title,t=a()(o);return n().createElement(s.Title,{headingLevel:"h1",size:"2xl",className:t,"widget-type":"InsightsPageHeaderTitle"},l)}},49642:(e,o,l)=>{"use strict";l.d(o,{Z:()=>b});var t=l(80123),n=l(39173),r=l(45697),a=l.n(r),s=l(43297),f=l.n(s),c=l(85991),m=l(49489),i=l(334),p=function(e){var o=e.items,l=e.headerOUIA;return f().createElement(c.a,null,o.filter(Boolean).map((function(e){return f().createElement(m.g,{key:e.title,isActive:e.isActive},e.to&&f().createElement(i.Link,{to:e.to,"data-ouia-component-type":"".concat(l,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:a().arrayOf(a().shape({isActive:a().bool,to:a().string,title:a().string})),headerOUIA:a().string};const d=p;var u=l(82819),O=l(98378),_=l(60076),C=function(e){var o=e.history,l=e.headerOUIA;return f().createElement(O.mQ,{onSelect:function(e,l){o.push(l)},activeKey:o.location.pathname,className:"patchman-tabs"},f().createElement(u.O,{eventKey:_.H.advisories.to,title:_.H.advisories.title,"data-ouia-component-type":"".concat(l,"-tab"),"data-ouia-component-id":"".concat(l,"-tab-").concat(_.H.advisories.title)}),f().createElement(u.O,{eventKey:_.H.systems.to,title:_.H.systems.title,"data-ouia-component-type":"".concat(l,"-tab"),"data-ouia-component-id":"".concat(l,"-tab-").concat(_.H.systems.title)}))};C.propTypes={history:a().object,headerOUIA:a().string};const g=(0,i.withRouter)(C);var w=function(e){var o=e.title,l=e.showTabs,r=e.breadcrumbs,a=e.children,s=e.headerOUIA;return f().createElement(f().Fragment,null,f().createElement(t.Z,{"data-ouia-component-type":"".concat(s,"-page-header")},r&&f().createElement(d,{items:r,headerOUIA:s}),f().createElement(n.Z,{title:o}),a),l&&f().createElement(g,{headerOUIA:s}))};w.propTypes={title:a().string,showTabs:a().bool,breadcrumbs:a().array,children:a().any,headerOUIA:a().string};const b=w},79202:(e,o,l)=>{"use strict";l.r(o),l.d(o,{default:()=>Q});var t=l(4942),n=l(29439),r=l(14748),a=l(45697),s=l.n(a),f=l(43297),c=l.n(f),m=l(50533),i=l(334),p=l(30893),d=l(80943),u=l(90747),O=l(29287),_=l(70133),C=l(49642),g=l(38776),w=l(64270),b=l(9557),v=l(11220),x=l(57668),h=l(5391),y=l(91607),S=l(32132),R=l(83215),E=l(15861),L=l(64687),P=l.n(L),M=l(52491),N=l(19210),j=l(36104),I=l(2095),X=l(49287),Z=l(18038),A=l(85962),D=l(34348),k=l(36842),T=l(21508),$=l(13784),F=l(18464),H=l(35240),U=function(e){var o=e.advisory,l=o.attributes,t=o.id;return c().createElement(I.Card,{isFullHeight:!0},c().createElement(j.l,null,(0,h.cX)($.w8.advisories,t)),c().createElement(A.e,{className:"fonst-size-sm"},c().createElement(X.r,null,c().createElement(Z.P,null,c().createElement(X.r,null,c().createElement(Z.P,{lg:6,md:12,sm:6},c().createElement(X.r,null,c().createElement(Z.P,null,c().createElement(F.Z,{type:l.advisory_type_name})),c().createElement(Z.P,null,(0,H.Un)(l.public_date)),l.os_name&&c().createElement(Z.P,null,l.os_name))),c().createElement(Z.P,{lg:6,className:"adjustableElement",sm:6},c().createElement(X.r,null,l.severity&&c().createElement(Z.P,null,c().createElement(k.P,{hasGutter:!0},c().createElement(Z.P,null,c().createElement(N.ZP,{size:"sm",color:$.QG[l.severity].color})),c().createElement(Z.P,{isFilled:!0},$.QG[l.severity].label))),l.reboot_required&&c().createElement(Z.P,null,c().createElement(k.P,{hasGutter:!0},c().createElement(T.J,null,c().createElement(M.ZP,{color:"var(--pf-global--palette--red-100)"})),c().createElement(T.J,{isFilled:!0,style:{flexWrap:"nowrap"}},S.N.formatMessage(p.Z.textRebootIsRequired)))))))),c().createElement(Z.P,null,(0,h.cX)($.w8.advisories,t,S.N.formatMessage(p.Z.labelsApplicableSystemsCount,{systemsCount:l.applicable_systems}))),c().createElement(Z.P,null,(0,h.Or)(l.synopsis)))))};U.propTypes={advisory:s().object};const z=function(){var e=c().useState([]),o=(0,n.Z)(e,2),l=o[0],t=o[1];return c().useEffect((0,E.Z)(P().mark((function e(){return P().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.next=3,(0,v.ob)({limit:4,sort:"-advisory_type_name,-applicable_systems"});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),l.data&&l.data.length&&c().createElement(r.Z,{style:{paddingBottom:0,paddingTop:0}},c().createElement(D.Title,{headingLevel:"h3",className:"pf-u-my-md"},S.N.formatMessage(p.Z.titlesMostImpactfulAdvisories)),c().createElement(X.r,{hasGutter:!0},l.data.map((function(e){return c().createElement(Z.P,{key:e.id,lg:3,md:3,sm:12},c().createElement(U,{advisory:e}))}))))||null};var B=l(77146);function G(e,o){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),l.push.apply(l,t)}return l}function q(e){for(var o=1;o<arguments.length;o++){var l=null!=arguments[o]?arguments[o]:{};o%2?G(Object(l),!0).forEach((function(o){(0,t.Z)(e,o,l[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):G(Object(l)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(l,o))}))}return e}var K=function(e){var o=e.history,l=S.N.formatMessage(p.Z.titlesAdvisories);(0,y.Iw)(l);var t=(0,m.I0)(),a=c().useState(!0),s=(0,n.Z)(a,2),f=s[0],i=s[1],E=(0,m.v9)((function(e){return e.AdvisoryListStore.rows})),L=(0,m.v9)((function(e){return e.AdvisoryListStore.expandedRows})),P=(0,m.v9)((function(e){return e.AdvisoryListStore.queryParams})),M=(0,m.v9)((function(e){return e.AdvisoryListStore.selectedRows})),N=(0,m.v9)((function(e){return e.AdvisoryListStore.metadata})),j=(0,m.v9)((function(e){return e.AdvisoryListStore.status})),I=(0,m.v9)((function(e){var o=e.SystemsStore;return null==o?void 0:o.areAllSelected})),X=c().useMemo((function(){return(0,x.nf)(E,L,M)}),[E,L,M]),Z=c().useState(!1),A=(0,n.Z)(Z,2),D=A[0],k=A[1];c().useEffect((function(){return function(){t((0,R.L1)())}}),[]),(0,y.KW)((function(){f?(Q((0,h.PZ)(o.location.search)),i(!1)):(o.push((0,h.R_)(P)),t((0,b.hV)(P)))}),[P,f]);var T=c().useCallback((function(e,o,l){return t((0,b.rt)({rowId:(0,h.vs)(E,o),value:l}))})),$=(0,y.ry)(X,M,(function(){return(0,v.ob)(q(q({},P),{},{limit:-1}))}),(function(e){t((0,b.EI)(e))}),(function(e){return e.id})),F=(0,y._f)(w.z7,Q,2),H=c().useMemo((function(){return(0,h.hO)(w.z7,N.sort,2)}),[N.sort]),U=(0,y.AR)("advisories",P,{csv:v.rf,json:v.kM},t),G=(0,y.SL)(N.limit,Q),K=(0,y._T)(Q);function Q(e){t((0,b.Us)(e))}var V=(0,B.Z)(M,k,"advisories",I);return c().createElement(c().Fragment,null,c().createElement(C.Z,{title:S.N.formatMessage(p.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),!0===(null==N?void 0:N.has_systems)&&c().createElement(z,null),c().createElement(r.Z,null,c().createElement(g.Z,{columns:w.z7,compact:!0,onCollapse:T,onSetPage:G,onPerPageSelect:K,onSort:F,onExport:U,selectedRows:M,onSelect:$,sortBy:H,remediationProvider:V,apply:Q,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:X,metadata:N,status:j,queryParams:P},filterConfig:{items:[(0,u.Z)(Q,P.search,S.N.formatMessage(p.Z.labelsFiltersSearchAdvisoriesTitle),S.N.formatMessage(p.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,O.Z)(Q,P.filter),(0,d.Z)(Q,P.filter),(0,_.Z)(Q,P.filter)]},searchChipLabel:S.N.formatMessage(p.Z.labelsFiltersSearchAdvisoriesTitle),isRemediationLoading:D})))};K.propTypes={history:s().object};const Q=(0,i.withRouter)(K)},77146:(e,o,l)=>{"use strict";l.d(o,{Z:()=>C});var t=l(93433),n=l(4942),r=l(15861),a=l(64687),s=l.n(a),f=l(5391),c=l(11220),m=l(8400),i=l.n(m),p=l(13784);function d(e,o){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),l.push.apply(l,t)}return l}function u(e){for(var o=1;o<arguments.length;o++){var l=null!=arguments[o]?arguments[o]:{};o%2?d(Object(l),!0).forEach((function(o){(0,n.Z)(e,o,l[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):d(Object(l)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(l,o))}))}return e}const O=function(e,o,l){var t=i()(e,100),n=[],a=function(){var a=(0,r.Z)(s().mark((function r(a,f){var c,m,i;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:c=t.splice(0,5),m=0;case 2:if(!(m<c.length)){r.next=10;break}return r.next=5,o(u(u({},f(e)),{},{limit:100,offset:100*(5*a+m)})).then((function(e){return l(e,p.oN.advisory)}));case 5:i=r.sent,n.push(i);case 7:m++,r.next=2;break;case 10:case"end":return r.stop()}}),r)})));return function(e,o){return a.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(s().mark((function e(o){var l,r,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(l=[],r=function(e){l.push(new Promise((function(l){setTimeout((function(){l(a(e,o))}),100)})))},f=0;f<Math.ceil(t.length/5);f++)r(f);return e.next=5,Promise.all(l);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(o){return e.apply(this,arguments)}}();return f};var _=function(){var e=(0,r.Z)(s().mark((function e(){var o,l,r,a,m,i,p,d,u,_,C=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l=C.length>0&&void 0!==C[0]?C[0]:[],r=C.length>1?C[1]:void 0,a=C.length>2?C[2]:void 0,i=(m="systems"===r&&!a)?c.OA:c.fq,p=m?f.we:f.R9,d=O(l,i,p),e.next=9,d((function(e){return a&&"systems"!==r?{}:(0,n.Z)({},r,e)}));case 9:return u=e.sent,_=u.reduce((function(e,o){return{issues:[].concat((0,t.Z)((null==e?void 0:e.issues)||[]),(0,t.Z)((null==o?void 0:o.issues)||[]))}}),{}),e.abrupt("return",!(null==_||null===(o=_.issues)||void 0===o||!o.length)&&_);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();const C=function(e,o,l,t){var n=function(){var n=(0,r.Z)(s().mark((function n(){var r;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.next=3,_((0,f.Q6)(e),l,t);case 3:return r=n.sent,o(!1),n.abrupt("return",r);case 6:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return n}},8400:(e,o,l)=>{var t=l(14259),n=l(16612),r=l(40554),a=Math.ceil,s=Math.max;e.exports=function(e,o,l){o=(l?n(e,o,l):void 0===o)?1:s(r(o),0);var f=null==e?0:e.length;if(!f||o<1)return[];for(var c=0,m=0,i=Array(a(f/o));c<f;)i[m++]=t(e,c,c+=o);return i}}}]);