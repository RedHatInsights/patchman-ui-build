(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[7020],{85991:(e,l,o)=>{"use strict";l.a=void 0;const n=o(70655),t=n.__importStar(o(43297)),a=n.__importDefault(o(44303)),r=o(38296),s=o(23053);l.a=e=>{var{children:o=null,className:f="","aria-label":c="Breadcrumb",ouiaId:m,ouiaSafe:i=!0}=e,p=n.__rest(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=s.useOUIAProps(l.a.displayName,m,i);return t.createElement("nav",Object.assign({},p,{"aria-label":c,className:r.css(a.default.breadcrumb,f)},d),t.createElement("ol",{className:a.default.breadcrumbList},t.Children.map(o,((e,l)=>{const o=l>0;return t.isValidElement(e)?t.cloneElement(e,{showDivider:o}):e}))))},l.a.displayName="Breadcrumb"},49489:(e,l,o)=>{"use strict";l.g=void 0;const n=o(70655),t=n.__importStar(o(43297)),a=n.__importDefault(o(95511)),r=n.__importDefault(o(44303)),s=o(38296);l.g=e=>{var{children:l=null,className:o="",to:f,isActive:c=!1,isDropdown:m=!1,showDivider:i,target:p,component:d="a",render:u}=e,_=n.__rest(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const O=d,C=c?"page":void 0,g=s.css(r.default.breadcrumbLink,c&&r.default.modifiers.current);return t.createElement("li",Object.assign({},_,{className:s.css(r.default.breadcrumbItem,o)}),i&&t.createElement("span",{className:r.default.breadcrumbItemDivider},t.createElement(a.default,null)),"button"===d&&t.createElement("button",{className:g,"aria-current":C,type:"button"},l),m&&t.createElement("span",{className:s.css(r.default.breadcrumbDropdown)},l),u&&u({className:g,ariaCurrent:C}),f&&!u&&t.createElement(O,{href:f,target:p,className:g,"aria-current":C},l),!f&&"button"!==d&&!m&&l)},l.g.displayName="BreadcrumbItem"},2095:(e,l,o)=>{"use strict";Object.defineProperty(l,"__esModule",{value:!0}),l.Card=l.CardContext=void 0;const n=o(70655),t=n.__importStar(o(43297)),a=n.__importDefault(o(54918)),r=o(38296),s=o(23053);l.CardContext=t.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),l.Card=e=>{var{children:o=null,id:f="",className:c="",component:m="article",isHoverable:i=!1,isCompact:p=!1,isSelectable:d=!1,isSelectableRaised:u=!1,isSelected:_=!1,isDisabledRaised:O=!1,isFlat:C=!1,isExpanded:g=!1,isRounded:w=!1,isLarge:x=!1,isFullHeight:v=!1,isPlain:b=!1,ouiaId:h,ouiaSafe:y=!0,hasSelectableInput:S=!1,selectableInputAriaLabel:R,onSelectableInputChange:E=(()=>{})}=e,L=n.__rest(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const M=m,P=s.useOUIAProps(l.Card.displayName,h,y),[N,j]=t.useState(""),[I,X]=t.useState();p&&x&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),x=!1);const A=t.useRef(!1);return t.useEffect((()=>{R?X({"aria-label":R}):N?X({"aria-labelledby":N}):S&&!A.current&&(X({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[S,R,N]),t.createElement(l.CardContext.Provider,{value:{cardId:f,registerTitleId:e=>{j(e),A.current=!!e},isExpanded:g}},S&&t.createElement("input",Object.assign({className:"pf-screen-reader",id:`${f}-input`},I,{type:"checkbox",checked:_,onChange:e=>E(f,e),disabled:O,tabIndex:-1})),t.createElement(M,Object.assign({id:f,className:r.css(a.default.card,p&&a.default.modifiers.compact,g&&a.default.modifiers.expanded,C&&a.default.modifiers.flat,w&&a.default.modifiers.rounded,x&&a.default.modifiers.displayLg,v&&a.default.modifiers.fullHeight,b&&a.default.modifiers.plain,O?r.css(a.default.modifiers.nonSelectableRaised):u?r.css(a.default.modifiers.selectableRaised,_&&a.default.modifiers.selectedRaised):d||i?r.css(a.default.modifiers.selectable,_&&a.default.modifiers.selected):"",c),tabIndex:d||u?"0":void 0},L,P),o))},l.Card.displayName="Card"},85962:(e,l,o)=>{"use strict";l.e=void 0;const n=o(70655),t=n.__importStar(o(43297)),a=n.__importDefault(o(54918)),r=o(38296);l.e=e=>{var{children:l=null,className:o="",component:s="div",isFilled:f=!0}=e,c=n.__rest(e,["children","className","component","isFilled"]);const m=s;return t.createElement(m,Object.assign({className:r.css(a.default.cardBody,!f&&a.default.modifiers.noFill,o)},c),l)},l.e.displayName="CardBody"},36104:(e,l,o)=>{"use strict";l.l=void 0;const n=o(70655),t=n.__importStar(o(43297)),a=o(38296),r=n.__importDefault(o(54918)),s=o(2095);l.l=e=>{var{children:l=null,className:o="",component:f="div"}=e,c=n.__rest(e,["children","className","component"]);const{cardId:m,registerTitleId:i}=t.useContext(s.CardContext),p=f,d=m?`${m}-title`:"";return t.useEffect((()=>(i(d),()=>i(""))),[i,d]),t.createElement(p,Object.assign({className:a.css(r.default.cardTitle,o),id:d||void 0},c),l)},l.l.displayName="CardTitle"},49287:(e,l,o)=>{"use strict";l.r=void 0;const n=o(70655),t=n.__importStar(o(43297)),a=n.__importDefault(o(3246)),r=o(38296),s=o(39383),f=n.__importStar(o(24936)),c=o(42319);l.r=e=>{var{children:l=null,className:o="",component:m="div",hasGutter:i,span:p=null,order:d,style:u}=e,_=n.__rest(e,["children","className","component","hasGutter","span","order","style"]);const O=[a.default.grid,p&&a.default.modifiers[`all_${p}Col`]],C=m;return Object.entries(s.DeviceSizes).forEach((([e,l])=>{const o=e,n=_[o];n&&O.push(a.default.modifiers[`all_${n}ColOn${l}`]),delete _[o]})),t.createElement(C,Object.assign({className:r.css(...O,i&&a.default.modifiers.gutter,o),style:u||d?Object.assign(Object.assign({},u),c.setBreakpointCssVars(d,f.l_grid_item_Order.name)):void 0},_),l)},l.r.displayName="Grid"},18038:(e,l,o)=>{"use strict";l.P=void 0;const n=o(70655),t=n.__importStar(o(43297)),a=n.__importDefault(o(3246)),r=o(38296),s=o(39383),f=n.__importStar(o(24936)),c=o(42319);l.P=e=>{var{children:l=null,className:o="",component:m="div",span:i=null,rowSpan:p=null,offset:d=null,order:u,style:_}=e,O=n.__rest(e,["children","className","component","span","rowSpan","offset","order","style"]);const C=[a.default.gridItem,i&&a.default.modifiers[`${i}Col`],p&&a.default.modifiers[`${p}Row`],d&&a.default.modifiers[`offset_${d}Col`]],g=m;return Object.entries(s.DeviceSizes).forEach((([e,l])=>{const o=e,n=`${o}RowSpan`,t=`${o}Offset`,r=O[o],s=O[n],f=O[t];r&&C.push(a.default.modifiers[`${r}ColOn${l}`]),s&&C.push(a.default.modifiers[`${s}RowOn${l}`]),f&&C.push(a.default.modifiers[`offset_${f}ColOn${l}`]),delete O[o],delete O[n],delete O[t]})),t.createElement(g,Object.assign({className:r.css(...C,o),style:_||u?Object.assign(Object.assign({},_),c.setBreakpointCssVars(u,f.l_grid_item_Order.name)):void 0},O),l)},l.P.displayName="GridItem"},39383:(e,l)=>{"use strict";var o,n;Object.defineProperty(l,"__esModule",{value:!0}),l.DeviceSizes=l.BaseSizes=void 0,(n=l.BaseSizes||(l.BaseSizes={})).xs="xs",n.sm="sm",n.md="md",n.lg="lg",n.xl="xl",n["2xl"]="2xl",n["3xl"]="3xl",n["4xl"]="4xl",(o=l.DeviceSizes||(l.DeviceSizes={})).sm="Sm",o.md="Md",o.lg="Lg",o.xl="Xl",o.xl2="_2xl"},44303:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>n}),o(58392);const n={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},54918:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>n}),o(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},3246:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>n}),o(72816);const n={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},24936:(e,l)=>{"use strict";l.__esModule=!0,l.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},l.default=l.l_grid_item_Order},53754:(e,l,o)=>{"use strict";o.d(l,{Z:()=>t});var n=o(43297);const t=o.n(n)().createContext("light")},14748:(e,l,o)=>{"use strict";o.d(l,{Z:()=>p});var n=o(85893),t=o(43297),a=o.n(t),r=o(94184),s=o.n(r),f=o(28216),c=o(53754),m=function(){return m=Object.assign||function(e){for(var l,o=1,n=arguments.length;o<n;o++)for(var t in l=arguments[o])Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);return e},m.apply(this,arguments)},i=function(e,l,o){if(o||2===arguments.length)for(var n,t=0,a=l.length;t<a;t++)!n&&t in l||(n||(n=Array.prototype.slice.call(l,0,t)),n[t]=l[t]);return e.concat(n||Array.prototype.slice.call(l))};const p=(0,f.$j)((function(e){var l=e.routerData;return{params:l&&l.params,path:l&&l.path}}),(function(){return{}}))((function(e){var l=e.path,o=e.params,t=void 0===o?{}:o,r=e.children,f=e.className,p=function(e,l){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o}(e,["path","params","children","className"]),d=function(){var e,o,n;if(null===(n=null===(o=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===o?void 0:o.$internal)||void 0===n?void 0:n.store){var a=window.insights.chrome.$internal.store.getState();if(l&&a)return l.split("/").reduce((function(e,l){var o,n;return 0===l.indexOf(":")?e.dynamic=m(m({},e.dynamic),((o={})["data-".concat((n=l.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=t[l.substr(1)],o)):e.staticPart=i(i([],e.staticPart,!0),""!==l?[l]:[],!0),e}),{staticPart:[a.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),u=d.dynamic,_=d.staticPart;return(0,n.jsx)(c.Z.Consumer,{children:function(e){var l;void 0===e&&(e="light");var o=s()(((l={})["pf-m-".concat(e)]="dark"===e,l));return{dark:(0,n.jsx)("section",m({},p,u,{"page-type":_.join("-"),className:"".concat(s()(f,"pf-l-page__main-section pf-c-page__main-section")," ").concat(o)},{children:a().Children.map(r,(function(e){return a().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,n.jsx)("section",m({},p,u,{"page-type":_.join("-"),className:"".concat(s()(f,"pf-l-page__main-section pf-c-page__main-section"))},{children:r}))}[e]}})}))},80123:(e,l,o)=>{"use strict";o.d(l,{Z:()=>f});var n=o(85893),t=o(94184),a=o.n(t),r=o(53754),s=function(){return s=Object.assign||function(e){for(var l,o=1,n=arguments.length;o<n;o++)for(var t in l=arguments[o])Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);return e},s.apply(this,arguments)};const f=function(e){var l=e.className,o=e.children,t=function(e,l){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&l.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(e);t<n.length;t++)l.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(e,n[t])&&(o[n[t]]=e[n[t]])}return o}(e,["className","children"]),f=a()(l,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(r.Z.Consumer,{children:function(e){var l,r;void 0===e&&(e="light");var c=a()(((l={})["pf-m-".concat(e,"-200")]="dark"===e,l),((r={})["pf-m-light"]="light"===e,r));return(0,n.jsx)("section",s({},t,{className:"".concat(f," ").concat(c),"widget-type":"InsightsPageHeader"},{children:o}))}})}},39173:(e,l,o)=>{"use strict";o.d(l,{Z:()=>f});var n=o(85893),t=o(94184),a=o.n(t),r=o(75448),s=function(){return s=Object.assign||function(e){for(var l,o=1,n=arguments.length;o<n;o++)for(var t in l=arguments[o])Object.prototype.hasOwnProperty.call(l,t)&&(e[t]=l[t]);return e},s.apply(this,arguments)};const f=function(e){var l=e.className,o=e.title,t=a()(l);return(0,n.jsx)(r.Title,s({headingLevel:"h1",size:"2xl",className:t,"widget-type":"InsightsPageHeaderTitle"},{children:o}))}},49642:(e,l,o)=>{"use strict";o.d(l,{Z:()=>w});var n=o(80123),t=o(39173),a=o(45697),r=o.n(a),s=o(43297),f=o.n(s),c=o(85991),m=o(49489),i=o(334),p=function(e){var l=e.items,o=e.headerOUIA;return f().createElement(c.a,null,l.filter(Boolean).map((function(e){return f().createElement(m.g,{key:e.title,isActive:e.isActive},e.to&&f().createElement(i.Link,{to:e.to,"data-ouia-component-type":"".concat(o,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:r().arrayOf(r().shape({isActive:r().bool,to:r().string,title:r().string})),headerOUIA:r().string};const d=p;var u=o(82819),_=o(98378),O=function(e){var l=e.history,o=e.headerOUIA;return f().createElement(_.mQ,{onSelect:function(e,o){l.push(o)},activeKey:l.location.pathname,className:"patchman-tabs"},f().createElement(u.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(o,"-tab"),"data-ouia-component-id":"".concat(o,"-tab-Applicable advisories'")}),f().createElement(u.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(o,"-tab"),"data-ouia-component-id":"".concat(o,"-tab-Systems")}))};O.propTypes={history:r().object,headerOUIA:r().string};const C=(0,i.withRouter)(O);var g=function(e){var l=e.title,o=e.showTabs,a=e.breadcrumbs,r=e.children,s=e.headerOUIA;return f().createElement(f().Fragment,null,f().createElement(n.Z,{"data-ouia-component-type":"".concat(s,"-page-header")},a&&f().createElement(d,{items:a,headerOUIA:s}),f().createElement(t.Z,{title:l}),r),o&&f().createElement(C,{headerOUIA:s}))};g.propTypes={title:r().string,showTabs:r().bool,breadcrumbs:r().array,children:r().any,headerOUIA:r().string};const w=g},79202:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>q});var n=o(29439),t=o(14748),a=o(45697),r=o.n(a),s=o(43297),f=o.n(s),c=o(28216),m=o(334),i=o(30893),p=o(80943),d=o(90747),u=o(29287),_=o(70133),O=o(49642),C=o(38776),g=o(64270),w=o(9557),x=o(11220),v=o(57668),b=o(5391),h=o(91607),y=o(32132),S=o(83215),R=o(15861),E=o(64687),L=o.n(E),M=o(52491),P=o(19210),N=o(36104),j=o(2095),I=o(49287),X=o(18038),A=o(85962),Z=o(34348),D=o(36842),k=o(21508),T=o(13784),$=o(18464),F=o(35240),U=function(e){var l=e.advisory,o=l.attributes,n=l.id;return f().createElement(j.Card,{isFullHeight:!0},f().createElement(N.l,null,(0,b.cX)(T.w8.advisories,n)),f().createElement(A.e,{className:"fonst-size-sm"},f().createElement(I.r,null,f().createElement(X.P,null,f().createElement(I.r,null,f().createElement(X.P,{lg:6,md:12,sm:6},f().createElement(I.r,null,f().createElement(X.P,null,f().createElement($.Z,{type:o.advisory_type_name})),f().createElement(X.P,null,(0,F.Un)(o.public_date)),o.os_name&&f().createElement(X.P,null,o.os_name))),f().createElement(X.P,{lg:6,className:"adjustableElement",sm:6},f().createElement(I.r,null,o.severity&&f().createElement(X.P,null,f().createElement(D.P,{hasGutter:!0},f().createElement(X.P,null,f().createElement(P.ZP,{size:"sm",color:T.QG[o.severity].color})),f().createElement(X.P,{isFilled:!0},T.QG[o.severity].label))),o.reboot_required&&f().createElement(X.P,null,f().createElement(D.P,{hasGutter:!0},f().createElement(k.J,null,f().createElement(M.ZP,{color:"var(--pf-global--palette--red-100)"})),f().createElement(k.J,{isFilled:!0,style:{flexWrap:"nowrap"}},y.N.formatMessage(i.Z.textRebootIsRequired)))))))),f().createElement(X.P,null,(0,b.cX)(T.w8.advisories,n,y.N.formatMessage(i.Z.labelsApplicableSystemsCount,{systemsCount:o.applicable_systems}))),f().createElement(X.P,null,(0,b.Or)(o.synopsis)))))};U.propTypes={advisory:r().object};const z=function(){var e=f().useState([]),l=(0,n.Z)(e,2),o=l[0],a=l[1];return f().useEffect((0,R.Z)(L().mark((function e(){return L().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=a,e.next=3,(0,x.ob)({limit:4,sort:"-advisory_type_name,-applicable_systems"});case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)}))),[]),o.data&&o.data.length&&f().createElement(t.Z,{style:{paddingBottom:0,paddingTop:0}},f().createElement(Z.Title,{headingLevel:"h3",className:"pf-u-my-md"},y.N.formatMessage(i.Z.titlesMostImpactfulAdvisories)),f().createElement(I.r,{hasGutter:!0},o.data.map((function(e){return f().createElement(X.P,{key:e.id,lg:3,md:3,sm:12},f().createElement(U,{advisory:e}))}))))||null};var B=o(77146),H=o(93080),G=function(e){var l=e.history,o=y.N.formatMessage(i.Z.titlesAdvisories);(0,h.Iw)(o);var a=(0,c.I0)(),r=f().useState(!0),s=(0,n.Z)(r,2),m=s[0],R=s[1],E=(0,c.v9)((function(e){return e.AdvisoryListStore.rows})),L=(0,c.v9)((function(e){return e.AdvisoryListStore.expandedRows})),M=(0,c.v9)((function(e){return e.AdvisoryListStore.queryParams})),P=(0,c.v9)((function(e){return e.AdvisoryListStore.selectedRows})),N=(0,c.v9)((function(e){return e.AdvisoryListStore.metadata})),j=(0,c.v9)((function(e){return e.AdvisoryListStore.status})),I=(0,c.v9)((function(e){var l=e.SystemsStore;return null==l?void 0:l.areAllSelected})),X=f().useMemo((function(){return(0,v.nf)(E,L,P)}),[E,L,P]),A=f().useState(!1),Z=(0,n.Z)(A,2),D=Z[0],k=Z[1];f().useEffect((function(){return function(){a((0,S.L1)())}}),[]),(0,h.KW)((function(){m?(Q((0,b.PZ)(l.location.search)),R(!1)):(l.push((0,b.R_)(M)),a((0,w.hV)(M)))}),[M,m]);var T=f().useCallback((function(e,l,o){return a((0,w.rt)({rowId:(0,b.vs)(E,l),value:o}))})),$=(0,H.r)(X,P,{endpoint:H.c.advisories,queryParams:M,selectionDispatcher:w.EI}),F=(0,h._f)(g.z7,Q,2),U=f().useMemo((function(){return(0,b.hO)(g.z7,N.sort,2)}),[N.sort]),G=(0,h.AR)("advisories",M,{csv:x.rf,json:x.kM},a),q=(0,h.SL)(N.limit,Q),K=(0,h._T)(Q);function Q(e){a((0,w.Us)(e))}var V=(0,B.Z)(P,k,"advisories",I);return f().createElement(f().Fragment,null,f().createElement(O.Z,{title:y.N.formatMessage(i.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),!0===(null==N?void 0:N.has_systems)&&f().createElement(z,null),f().createElement(t.Z,null,f().createElement(C.Z,{columns:g.z7,compact:!0,onCollapse:T,onSetPage:q,onPerPageSelect:K,onSort:F,onExport:G,selectedRows:P,onSelect:$,sortBy:U,remediationProvider:V,apply:Q,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:X,metadata:N,status:j,queryParams:M},filterConfig:{items:[(0,d.Z)(Q,M.search,y.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesTitle),y.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,u.Z)(Q,M.filter),(0,p.Z)(Q,M.filter),(0,_.Z)(Q,M.filter)]},searchChipLabel:y.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesTitle),isRemediationLoading:D})))};G.propTypes={history:r().object};const q=(0,m.withRouter)(G)},77146:(e,l,o)=>{"use strict";o.d(l,{Z:()=>C});var n=o(93433),t=o(4942),a=o(15861),r=o(64687),s=o.n(r),f=o(5391),c=o(11220),m=o(8400),i=o.n(m),p=o(13784);function d(e,l){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),o.push.apply(o,n)}return o}function u(e){for(var l=1;l<arguments.length;l++){var o=null!=arguments[l]?arguments[l]:{};l%2?d(Object(o),!0).forEach((function(l){(0,t.Z)(e,l,o[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):d(Object(o)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))}))}return e}const _=function(e,l,o){var n=i()(e,100),t=[],r=function(){var r=(0,a.Z)(s().mark((function a(r,f){var c,m,i;return s().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=n.splice(0,5),m=0;case 2:if(!(m<c.length)){a.next=10;break}return a.next=5,l(u(u({},f(e)),{},{limit:100,offset:100*(5*r+m)})).then((function(e){return o(e,p.oN.advisory)}));case 5:i=a.sent,t.push(i);case 7:m++,a.next=2;break;case 10:case"end":return a.stop()}}),a)})));return function(e,l){return r.apply(this,arguments)}}(),f=function(){var e=(0,a.Z)(s().mark((function e(l){var o,a,f;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(o=[],a=function(e){o.push(new Promise((function(o){setTimeout((function(){o(r(e,l))}),100)})))},f=0;f<Math.ceil(n.length/5);f++)a(f);return e.next=5,Promise.all(o);case 5:return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(l){return e.apply(this,arguments)}}();return f};var O=function(){var e=(0,a.Z)(s().mark((function e(){var l,o,a,r,m,i,p,d,u,O,C=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=C.length>0&&void 0!==C[0]?C[0]:[],a=C.length>1?C[1]:void 0,r=C.length>2?C[2]:void 0,i=(m="systems"===a&&!r)?c.OA:c.fq,p=m?f.we:f.R9,d=_(o,i,p),e.next=9,d((function(e){return r&&"systems"!==a?{}:(0,t.Z)({},a,e)}));case 9:return u=e.sent,O=u.reduce((function(e,l){return{issues:[].concat((0,n.Z)((null==e?void 0:e.issues)||[]),(0,n.Z)((null==l?void 0:l.issues)||[]))}}),{}),e.abrupt("return",!(null==O||null===(l=O.issues)||void 0===l||!l.length)&&O);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();const C=function(e,l,o,n){var t=function(){var t=(0,a.Z)(s().mark((function t(){var a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return l(!0),t.next=3,O((0,f.Q6)(e),o,n);case 3:return a=t.sent,l(!1),t.abrupt("return",a);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return t}},8400:(e,l,o)=>{var n=o(14259),t=o(16612),a=o(40554),r=Math.ceil,s=Math.max;e.exports=function(e,l,o){l=(o?t(e,l,o):void 0===l)?1:s(a(l),0);var f=null==e?0:e.length;if(!f||l<1)return[];for(var c=0,m=0,i=Array(r(f/l));c<f;)i[m++]=n(e,c,c+=l);return i}},58392:()=>{},80598:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Advisories.2446726338cafbd894f4c108d36325b7.js.map