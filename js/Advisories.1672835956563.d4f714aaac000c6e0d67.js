(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[7020],{85991:(l,o,e)=>{"use strict";o.a=void 0;const n=e(70655),t=n.__importStar(e(43297)),a=n.__importDefault(e(44303)),r=e(38296),s=e(23053);o.a=l=>{var{children:e=null,className:f="","aria-label":c="Breadcrumb",ouiaId:m,ouiaSafe:i=!0}=l,p=n.__rest(l,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=s.useOUIAProps(o.a.displayName,m,i);return t.createElement("nav",Object.assign({},p,{"aria-label":c,className:r.css(a.default.breadcrumb,f)},d),t.createElement("ol",{className:a.default.breadcrumbList},t.Children.map(e,((l,o)=>{const e=o>0;return t.isValidElement(l)?t.cloneElement(l,{showDivider:e}):l}))))},o.a.displayName="Breadcrumb"},49489:(l,o,e)=>{"use strict";o.g=void 0;const n=e(70655),t=n.__importStar(e(43297)),a=n.__importDefault(e(95511)),r=n.__importDefault(e(44303)),s=e(38296);o.g=l=>{var{children:o=null,className:e="",to:f,isActive:c=!1,isDropdown:m=!1,showDivider:i,target:p,component:d="a",render:u}=l,_=n.__rest(l,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const O=d,C=c?"page":void 0,g=s.css(r.default.breadcrumbLink,c&&r.default.modifiers.current);return t.createElement("li",Object.assign({},_,{className:s.css(r.default.breadcrumbItem,e)}),i&&t.createElement("span",{className:r.default.breadcrumbItemDivider},t.createElement(a.default,null)),"button"===d&&t.createElement("button",{className:g,"aria-current":C,type:"button"},o),m&&t.createElement("span",{className:s.css(r.default.breadcrumbDropdown)},o),u&&u({className:g,ariaCurrent:C}),f&&!u&&t.createElement(O,{href:f,target:p,className:g,"aria-current":C},o),!f&&"button"!==d&&!m&&o)},o.g.displayName="BreadcrumbItem"},2095:(l,o,e)=>{"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.Card=o.CardContext=void 0;const n=e(70655),t=n.__importStar(e(43297)),a=n.__importDefault(e(54918)),r=e(38296),s=e(23053);o.CardContext=t.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),o.Card=l=>{var{children:e=null,id:f="",className:c="",component:m="article",isHoverable:i=!1,isCompact:p=!1,isSelectable:d=!1,isSelectableRaised:u=!1,isSelected:_=!1,isDisabledRaised:O=!1,isFlat:C=!1,isExpanded:g=!1,isRounded:w=!1,isLarge:x=!1,isFullHeight:v=!1,isPlain:b=!1,ouiaId:h,ouiaSafe:y=!0,hasSelectableInput:S=!1,selectableInputAriaLabel:R,onSelectableInputChange:E=(()=>{})}=l,L=n.__rest(l,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const M=m,N=s.useOUIAProps(o.Card.displayName,h,y),[I,P]=t.useState(""),[X,j]=t.useState();p&&x&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),x=!1);const A=t.useRef(!1);return t.useEffect((()=>{R?j({"aria-label":R}):I?j({"aria-labelledby":I}):S&&!A.current&&(j({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[S,R,I]),t.createElement(o.CardContext.Provider,{value:{cardId:f,registerTitleId:l=>{P(l),A.current=!!l},isExpanded:g}},S&&t.createElement("input",Object.assign({className:"pf-screen-reader",id:`${f}-input`},X,{type:"checkbox",checked:_,onChange:l=>E(f,l),disabled:O,tabIndex:-1})),t.createElement(M,Object.assign({id:f,className:r.css(a.default.card,p&&a.default.modifiers.compact,g&&a.default.modifiers.expanded,C&&a.default.modifiers.flat,w&&a.default.modifiers.rounded,x&&a.default.modifiers.displayLg,v&&a.default.modifiers.fullHeight,b&&a.default.modifiers.plain,O?r.css(a.default.modifiers.nonSelectableRaised):u?r.css(a.default.modifiers.selectableRaised,_&&a.default.modifiers.selectedRaised):d||i?r.css(a.default.modifiers.selectable,_&&a.default.modifiers.selected):"",c),tabIndex:d||u?"0":void 0},L,N),e))},o.Card.displayName="Card"},85962:(l,o,e)=>{"use strict";o.e=void 0;const n=e(70655),t=n.__importStar(e(43297)),a=n.__importDefault(e(54918)),r=e(38296);o.e=l=>{var{children:o=null,className:e="",component:s="div",isFilled:f=!0}=l,c=n.__rest(l,["children","className","component","isFilled"]);const m=s;return t.createElement(m,Object.assign({className:r.css(a.default.cardBody,!f&&a.default.modifiers.noFill,e)},c),o)},o.e.displayName="CardBody"},36104:(l,o,e)=>{"use strict";o.l=void 0;const n=e(70655),t=n.__importStar(e(43297)),a=e(38296),r=n.__importDefault(e(54918)),s=e(2095);o.l=l=>{var{children:o=null,className:e="",component:f="div"}=l,c=n.__rest(l,["children","className","component"]);const{cardId:m,registerTitleId:i}=t.useContext(s.CardContext),p=f,d=m?`${m}-title`:"";return t.useEffect((()=>(i(d),()=>i(""))),[i,d]),t.createElement(p,Object.assign({className:a.css(r.default.cardTitle,e),id:d||void 0},c),o)},o.l.displayName="CardTitle"},49287:(l,o,e)=>{"use strict";o.r=void 0;const n=e(70655),t=n.__importStar(e(43297)),a=n.__importDefault(e(3246)),r=e(38296),s=e(39383),f=n.__importStar(e(24936)),c=e(42319);o.r=l=>{var{children:o=null,className:e="",component:m="div",hasGutter:i,span:p=null,order:d,style:u}=l,_=n.__rest(l,["children","className","component","hasGutter","span","order","style"]);const O=[a.default.grid,p&&a.default.modifiers[`all_${p}Col`]],C=m;return Object.entries(s.DeviceSizes).forEach((([l,o])=>{const e=l,n=_[e];n&&O.push(a.default.modifiers[`all_${n}ColOn${o}`]),delete _[e]})),t.createElement(C,Object.assign({className:r.css(...O,i&&a.default.modifiers.gutter,e),style:u||d?Object.assign(Object.assign({},u),c.setBreakpointCssVars(d,f.l_grid_item_Order.name)):void 0},_),o)},o.r.displayName="Grid"},18038:(l,o,e)=>{"use strict";o.P=void 0;const n=e(70655),t=n.__importStar(e(43297)),a=n.__importDefault(e(3246)),r=e(38296),s=e(39383),f=n.__importStar(e(24936)),c=e(42319);o.P=l=>{var{children:o=null,className:e="",component:m="div",span:i=null,rowSpan:p=null,offset:d=null,order:u,style:_}=l,O=n.__rest(l,["children","className","component","span","rowSpan","offset","order","style"]);const C=[a.default.gridItem,i&&a.default.modifiers[`${i}Col`],p&&a.default.modifiers[`${p}Row`],d&&a.default.modifiers[`offset_${d}Col`]],g=m;return Object.entries(s.DeviceSizes).forEach((([l,o])=>{const e=l,n=`${e}RowSpan`,t=`${e}Offset`,r=O[e],s=O[n],f=O[t];r&&C.push(a.default.modifiers[`${r}ColOn${o}`]),s&&C.push(a.default.modifiers[`${s}RowOn${o}`]),f&&C.push(a.default.modifiers[`offset_${f}ColOn${o}`]),delete O[e],delete O[n],delete O[t]})),t.createElement(g,Object.assign({className:r.css(...C,e),style:_||u?Object.assign(Object.assign({},_),c.setBreakpointCssVars(u,f.l_grid_item_Order.name)):void 0},O),o)},o.P.displayName="GridItem"},39383:(l,o)=>{"use strict";var e,n;Object.defineProperty(o,"__esModule",{value:!0}),o.DeviceSizes=o.BaseSizes=void 0,(n=o.BaseSizes||(o.BaseSizes={})).xs="xs",n.sm="sm",n.md="md",n.lg="lg",n.xl="xl",n["2xl"]="2xl",n["3xl"]="3xl",n["4xl"]="4xl",(e=o.DeviceSizes||(o.DeviceSizes={})).sm="Sm",e.md="Md",e.lg="Lg",e.xl="Xl",e.xl2="_2xl"},44303:(l,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>n}),e(58392);const n={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},54918:(l,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>n}),e(80598);const n={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},3246:(l,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>n}),e(72816);const n={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},24936:(l,o)=>{"use strict";o.__esModule=!0,o.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},o.default=o.l_grid_item_Order},53754:(l,o,e)=>{"use strict";e.d(o,{Z:()=>t});var n=e(43297);const t=e.n(n)().createContext("light")},14748:(l,o,e)=>{"use strict";e.d(o,{Z:()=>p});var n=e(85893),t=e(43297),a=e.n(t),r=e(94184),s=e.n(r),f=e(28216),c=e(53754),m=function(){return m=Object.assign||function(l){for(var o,e=1,n=arguments.length;e<n;e++)for(var t in o=arguments[e])Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);return l},m.apply(this,arguments)},i=function(l,o,e){if(e||2===arguments.length)for(var n,t=0,a=o.length;t<a;t++)!n&&t in o||(n||(n=Array.prototype.slice.call(o,0,t)),n[t]=o[t]);return l.concat(n||Array.prototype.slice.call(o))};const p=(0,f.$j)((function(l){var o=l.routerData;return{params:o&&o.params,path:o&&o.path}}),(function(){return{}}))((function(l){var o=l.path,e=l.params,t=void 0===e?{}:e,r=l.children,f=l.className,p=function(l,o){var e={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&o.indexOf(n)<0&&(e[n]=l[n]);if(null!=l&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(l);t<n.length;t++)o.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(l,n[t])&&(e[n[t]]=l[n[t]])}return e}(l,["path","params","children","className"]),d=function(){var l,e,n;if(null===(n=null===(e=null===(l=null===window||void 0===window?void 0:window.insights)||void 0===l?void 0:l.chrome)||void 0===e?void 0:e.$internal)||void 0===n?void 0:n.store){var a=window.insights.chrome.$internal.store.getState();if(o&&a)return o.split("/").reduce((function(l,o){var e,n;return 0===o.indexOf(":")?l.dynamic=m(m({},l.dynamic),((e={})["data-".concat((n=o.substr(1),n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=t[o.substr(1)],e)):l.staticPart=i(i([],l.staticPart,!0),""!==o?[o]:[],!0),l}),{staticPart:[a.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),u=d.dynamic,_=d.staticPart;return(0,n.jsx)(c.Z.Consumer,{children:function(l){var o;void 0===l&&(l="light");var e=s()(((o={})["pf-m-".concat(l)]="dark"===l,o));return{dark:(0,n.jsx)("section",m({},p,u,{"page-type":_.join("-"),className:"".concat(s()(f,"pf-l-page__main-section pf-c-page__main-section")," ").concat(e)},{children:a().Children.map(r,(function(l){return a().cloneElement(l,{className:"pf-m-dark"})}))})),light:(0,n.jsx)("section",m({},p,u,{"page-type":_.join("-"),className:"".concat(s()(f,"pf-l-page__main-section pf-c-page__main-section"))},{children:r}))}[l]}})}))},80123:(l,o,e)=>{"use strict";e.d(o,{Z:()=>f});var n=e(85893),t=e(94184),a=e.n(t),r=e(53754),s=function(){return s=Object.assign||function(l){for(var o,e=1,n=arguments.length;e<n;e++)for(var t in o=arguments[e])Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);return l},s.apply(this,arguments)};const f=function(l){var o=l.className,e=l.children,t=function(l,o){var e={};for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&o.indexOf(n)<0&&(e[n]=l[n]);if(null!=l&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(n=Object.getOwnPropertySymbols(l);t<n.length;t++)o.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(l,n[t])&&(e[n[t]]=l[n[t]])}return e}(l,["className","children"]),f=a()(o,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return(0,n.jsx)(r.Z.Consumer,{children:function(l){var o,r;void 0===l&&(l="light");var c=a()(((o={})["pf-m-".concat(l,"-200")]="dark"===l,o),((r={})["pf-m-light"]="light"===l,r));return(0,n.jsx)("section",s({},t,{className:"".concat(f," ").concat(c),"widget-type":"InsightsPageHeader"},{children:e}))}})}},39173:(l,o,e)=>{"use strict";e.d(o,{Z:()=>f});var n=e(85893),t=e(94184),a=e.n(t),r=e(75448),s=function(){return s=Object.assign||function(l){for(var o,e=1,n=arguments.length;e<n;e++)for(var t in o=arguments[e])Object.prototype.hasOwnProperty.call(o,t)&&(l[t]=o[t]);return l},s.apply(this,arguments)};const f=function(l){var o=l.className,e=l.title,t=a()(o);return(0,n.jsx)(r.Title,s({headingLevel:"h1",size:"2xl",className:t,"widget-type":"InsightsPageHeaderTitle"},{children:e}))}},49642:(l,o,e)=>{"use strict";e.d(o,{Z:()=>w});var n=e(80123),t=e(39173),a=e(45697),r=e.n(a),s=e(43297),f=e.n(s),c=e(85991),m=e(49489),i=e(334),p=function(l){var o=l.items,e=l.headerOUIA;return f().createElement(c.a,null,o.filter(Boolean).map((function(l){return f().createElement(m.g,{key:l.title,isActive:l.isActive},l.to&&f().createElement(i.Link,{to:l.to,"data-ouia-component-type":"".concat(e,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(l.title)},l.title)||l.title)})))};p.propTypes={items:r().arrayOf(r().shape({isActive:r().bool,to:r().string,title:r().string})),headerOUIA:r().string};const d=p;var u=e(82819),_=e(98378),O=function(l){var o=l.history,e=l.headerOUIA;return f().createElement(_.mQ,{onSelect:function(l,e){o.push(e)},activeKey:o.location.pathname,className:"patchman-tabs"},f().createElement(u.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(e,"-tab"),"data-ouia-component-id":"".concat(e,"-tab-Applicable advisories'")}),f().createElement(u.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(e,"-tab"),"data-ouia-component-id":"".concat(e,"-tab-Systems")}))};O.propTypes={history:r().object,headerOUIA:r().string};const C=(0,i.withRouter)(O);var g=function(l){var o=l.title,e=l.showTabs,a=l.breadcrumbs,r=l.children,s=l.headerOUIA;return f().createElement(f().Fragment,null,f().createElement(n.Z,{"data-ouia-component-type":"".concat(s,"-page-header")},a&&f().createElement(d,{items:a,headerOUIA:s}),f().createElement(t.Z,{title:o}),r),e&&f().createElement(C,{headerOUIA:s}))};g.propTypes={title:r().string,showTabs:r().bool,breadcrumbs:r().array,children:r().any,headerOUIA:r().string};const w=g},79202:(l,o,e)=>{"use strict";e.r(o),e.d(o,{default:()=>q});var n=e(29439),t=e(14748),a=e(45697),r=e.n(a),s=e(43297),f=e.n(s),c=e(28216),m=e(334),i=e(30893),p=e(80943),d=e(90747),u=e(29287),_=e(70133),O=e(49642),C=e(38776),g=e(64270),w=e(9557),x=e(11220),v=e(36248),b=e(5391),h=e(91607),y=e(32132),S=e(83215),R=e(15861),E=e(64687),L=e.n(E),M=e(52491),N=e(19210),I=e(36104),P=e(2095),X=e(49287),j=e(18038),A=e(85962),Z=e(34348),D=e(36842),k=e(21508),T=e(13784),$=e(18464),F=e(35240),U=function(l){var o=l.advisory,e=o.attributes,n=o.id;return f().createElement(P.Card,{isFullHeight:!0},f().createElement(I.l,null,(0,b.cX)(T.w8.advisories,n)),f().createElement(A.e,{className:"fonst-size-sm"},f().createElement(X.r,null,f().createElement(j.P,null,f().createElement(X.r,null,f().createElement(j.P,{lg:6,md:12,sm:6},f().createElement(X.r,null,f().createElement(j.P,null,f().createElement($.Z,{type:e.advisory_type_name})),f().createElement(j.P,null,(0,F.Un)(e.public_date)),e.os_name&&f().createElement(j.P,null,e.os_name))),f().createElement(j.P,{lg:6,className:"adjustableElement",sm:6},f().createElement(X.r,null,e.severity&&f().createElement(j.P,null,f().createElement(D.P,{hasGutter:!0},f().createElement(j.P,null,f().createElement(N.ZP,{size:"sm",color:T.QG[e.severity].color})),f().createElement(j.P,{isFilled:!0},T.QG[e.severity].label))),e.reboot_required&&f().createElement(j.P,null,f().createElement(D.P,{hasGutter:!0},f().createElement(k.J,null,f().createElement(M.ZP,{color:"var(--pf-global--palette--red-100)"})),f().createElement(k.J,{isFilled:!0,style:{flexWrap:"nowrap"}},y.N.formatMessage(i.Z.textRebootIsRequired)))))))),f().createElement(j.P,null,(0,b.cX)(T.w8.advisories,n,y.N.formatMessage(i.Z.labelsApplicableSystemsCount,{systemsCount:e.applicable_systems}))),f().createElement(j.P,null,(0,b.Or)(e.synopsis)))))};U.propTypes={advisory:r().object};const z=function(){var l=f().useState([]),o=(0,n.Z)(l,2),e=o[0],a=o[1];return f().useEffect((0,R.Z)(L().mark((function l(){return L().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.t0=a,l.next=3,(0,x.ob)({limit:4,sort:"-advisory_type_name,-applicable_systems"});case 3:l.t1=l.sent,(0,l.t0)(l.t1);case 5:case"end":return l.stop()}}),l)}))),[]),e.data&&e.data.length&&f().createElement(t.Z,{style:{paddingBottom:0,paddingTop:0}},f().createElement(Z.Title,{headingLevel:"h3",className:"pf-u-my-md"},y.N.formatMessage(i.Z.titlesMostImpactfulAdvisories)),f().createElement(X.r,{hasGutter:!0},e.data.map((function(l){return f().createElement(j.P,{key:l.id,lg:3,md:3,sm:12},f().createElement(U,{advisory:l}))}))))||null};var B=e(72999),H=e(93080),G=function(l){var o=l.history,e=y.N.formatMessage(i.Z.titlesAdvisories);(0,h.Iw)(e);var a=(0,c.I0)(),r=f().useState(!0),m=(0,n.Z)(r,2),R=m[0],E=m[1],L=(0,c.v9)((function(l){return l.AdvisoryListStore.rows})),M=(0,c.v9)((function(l){return l.AdvisoryListStore.expandedRows})),N=(0,c.v9)((function(l){return l.AdvisoryListStore.queryParams})),I=(0,c.v9)((function(l){return l.AdvisoryListStore.selectedRows})),P=(0,c.v9)((function(l){return l.AdvisoryListStore.metadata})),X=(0,c.v9)((function(l){return l.AdvisoryListStore.status})),j=(0,c.v9)((function(l){var o=l.SystemsStore;return null==o?void 0:o.areAllSelected})),A=f().useMemo((function(){return(0,v.nf)(L,M,I)}),[L,M,I]),Z=f().useState(!1),D=(0,n.Z)(Z,2),k=D[0],T=D[1];f().useEffect((function(){return function(){a((0,S.L1)())}}),[]),(0,s.useEffect)((function(){R?(J((0,b.PZ)(o.location.search)),E(!1)):(o.push((0,b.R_)(N)),a((0,w.hV)(N)))}),[JSON.stringify(N),R]);var $=f().useCallback((function(l,o,e){return a((0,w.rt)({rowId:(0,b.vs)(L,o),value:e}))})),F=(0,H.r)(A,I,{endpoint:H.c.advisories,queryParams:N,selectionDispatcher:w.EI}),U=(0,h._f)(g.z7,J,2),G=f().useMemo((function(){return(0,b.hO)(g.z7,P.sort,2)}),[P.sort]),q=(0,h.AR)("advisories",N,{csv:x.rf,json:x.kM},a),Q=(0,h.SL)(P.limit,J),V=(0,h._T)(J);function J(l){a((0,w.Us)(l))}var K=(0,B.Z)(I,T,"advisories",j);return f().createElement(f().Fragment,null,f().createElement(O.Z,{title:y.N.formatMessage(i.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),!0===(null==P?void 0:P.has_systems)&&f().createElement(z,null),f().createElement(t.Z,null,f().createElement(C.Z,{columns:g.z7,compact:!0,onCollapse:$,onSetPage:Q,onPerPageSelect:V,onSort:U,onExport:q,selectedRows:I,onSelect:F,sortBy:G,remediationProvider:K,apply:J,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:A,metadata:P,status:X,queryParams:N},filterConfig:{items:[(0,d.Z)(J,N.search,y.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesTitle),y.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,u.Z)(J,N.filter),(0,p.Z)(J,N.filter),(0,_.Z)(J,N.filter)]},searchChipLabel:y.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesTitle),isRemediationLoading:k})))};G.propTypes={history:r().object};const q=(0,m.withRouter)(G)},72999:(l,o,e)=>{"use strict";e.d(o,{Z:()=>d});var n=e(29439),t=e(15861),a=e(64687),r=e.n(a),s=e(28216),f=e(83215),c=e(5391),m=function(){var l=new Worker(new URL(e.p+e.u(9898),e.b));return[l,function(){return l.terminate()}]},i=function(l,o){return l.postMessage(o),new Promise((function(o,e){l.onmessage=function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=l.data,t=n.status,a=n.error,r=n.result;"resolved"===t&&o(r),e(a)}}))},p=function(){var l=(0,t.Z)(r().mark((function l(o,e){var t,a,s,c,p,d,u;return r().wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return a=m(),s=(0,n.Z)(a,2),c=s[0],p=s[1],d=i(c,o),l.next=4,d.catch((function(l){return e((0,f.wN)({title:"There was an error while processing.",description:l,variant:"danger"}))}));case 4:return u=l.sent,p(),l.abrupt("return",!(null==u||null===(t=u.issues)||void 0===t||!t.length)&&u);case 7:case"end":return l.stop()}}),l)})));return function(o,e){return l.apply(this,arguments)}}();const d=function(l,o,e,n){var a=(0,s.I0)(),f=function(){var s=(0,t.Z)(r().mark((function t(){var s;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o(!0),t.next=3,p({payload:(0,c.Q6)(l),remediationType:e,areAllSelected:n},a);case 3:return s=t.sent,o(!1),t.abrupt("return",s);case 6:case"end":return t.stop()}}),t)})));return function(){return s.apply(this,arguments)}}();return f}},58392:()=>{},80598:()=>{},72816:()=>{}}]);
//# sourceMappingURL=../sourcemaps/Advisories.b569b0528b0e29c49d9c2318054aa28b.js.map