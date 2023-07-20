(self.webpackChunkpatch=self.webpackChunkpatch||[]).push([[7020],{64029:(e,l,o)=>{"use strict";o.d(l,{a:()=>c});var t=o(65353),n=o(43297),a=o(44303),s=o(38296),r=o(62472);const c=e=>{var{children:l=null,className:o="","aria-label":m="Breadcrumb",ouiaId:f,ouiaSafe:i=!0}=e,p=(0,t.__rest)(e,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=(0,r.S$)(c.displayName,f,i);return n.createElement("nav",Object.assign({},p,{"aria-label":m,className:(0,s.css)(a.Z.breadcrumb,o)},d),n.createElement("ol",{className:a.Z.breadcrumbList},n.Children.map(l,((e,l)=>{const o=l>0;return n.isValidElement(e)?n.cloneElement(e,{showDivider:o}):e}))))};c.displayName="Breadcrumb"},32835:(e,l,o)=>{"use strict";o.d(l,{g:()=>c});var t=o(65353),n=o(43297),a=o(93174),s=o(44303),r=o(38296);const c=e=>{var{children:l=null,className:o="",to:c,isActive:m=!1,isDropdown:f=!1,showDivider:i,target:p,component:d="a",render:u}=e,g=(0,t.__rest)(e,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const O=d,C=m?"page":void 0,_=(0,r.css)(s.Z.breadcrumbLink,m&&s.Z.modifiers.current);return n.createElement("li",Object.assign({},g,{className:(0,r.css)(s.Z.breadcrumbItem,o)}),i&&n.createElement("span",{className:s.Z.breadcrumbItemDivider},n.createElement(a.ZP,null)),"button"===d&&n.createElement("button",{className:_,"aria-current":C,type:"button"},l),f&&n.createElement("span",{className:(0,r.css)(s.Z.breadcrumbDropdown)},l),u&&u({className:_,ariaCurrent:C}),c&&!u&&n.createElement(O,{href:c,target:p,className:_,"aria-current":C},l),!c&&"button"!==d&&!f&&l)};c.displayName="BreadcrumbItem"},32203:(e,l,o)=>{"use strict";o.d(l,{H:()=>c,Z:()=>m});var t=o(65353),n=o(43297),a=o(54918),s=o(38296),r=o(62472);const c=n.createContext({cardId:"",registerTitleId:()=>{},isExpanded:!1}),m=e=>{var{children:l=null,id:o="",className:f="",component:i="article",isHoverable:p=!1,isCompact:d=!1,isSelectable:u=!1,isSelectableRaised:g=!1,isSelected:O=!1,isDisabledRaised:C=!1,isFlat:_=!1,isExpanded:b=!1,isRounded:w=!1,isLarge:y=!1,isFullHeight:v=!1,isPlain:x=!1,ouiaId:h,ouiaSafe:S=!0,hasSelectableInput:Z=!1,selectableInputAriaLabel:E,onSelectableInputChange:R=(()=>{})}=e,M=(0,t.__rest)(e,["children","id","className","component","isHoverable","isCompact","isSelectable","isSelectableRaised","isSelected","isDisabledRaised","isFlat","isExpanded","isRounded","isLarge","isFullHeight","isPlain","ouiaId","ouiaSafe","hasSelectableInput","selectableInputAriaLabel","onSelectableInputChange"]);const N=i,P=(0,r.S$)(m.displayName,h,S),[L,k]=n.useState(""),[I,A]=n.useState();d&&y&&(console.warn("Card: Cannot use isCompact with isLarge. Defaulting to isCompact"),y=!1);const X=n.useRef(!1);return n.useEffect((()=>{E?A({"aria-label":E}):L?A({"aria-labelledby":L}):Z&&!X.current&&(A({}),console.warn("If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed"))}),[Z,E,L]),n.createElement(c.Provider,{value:{cardId:o,registerTitleId:e=>{k(e),X.current=!!e},isExpanded:b}},Z&&n.createElement("input",Object.assign({className:"pf-screen-reader",id:`${o}-input`},I,{type:"checkbox",checked:O,onChange:e=>R(o,e),disabled:C,tabIndex:-1})),n.createElement(N,Object.assign({id:o,className:(0,s.css)(a.Z.card,d&&a.Z.modifiers.compact,b&&a.Z.modifiers.expanded,_&&a.Z.modifiers.flat,w&&a.Z.modifiers.rounded,y&&a.Z.modifiers.displayLg,v&&a.Z.modifiers.fullHeight,x&&a.Z.modifiers.plain,C?(0,s.css)(a.Z.modifiers.nonSelectableRaised):g?(0,s.css)(a.Z.modifiers.selectableRaised,O&&a.Z.modifiers.selectedRaised):u||p?(0,s.css)(a.Z.modifiers.selectable,O&&a.Z.modifiers.selected):"",f),tabIndex:u||g?"0":void 0},M,P),l))};m.displayName="Card"},62394:(e,l,o)=>{"use strict";o.d(l,{e:()=>r});var t=o(65353),n=o(43297),a=o(54918),s=o(38296);const r=e=>{var{children:l=null,className:o="",component:r="div",isFilled:c=!0}=e,m=(0,t.__rest)(e,["children","className","component","isFilled"]);const f=r;return n.createElement(f,Object.assign({className:(0,s.css)(a.Z.cardBody,!c&&a.Z.modifiers.noFill,o)},m),l)};r.displayName="CardBody"},70:(e,l,o)=>{"use strict";o.d(l,{l:()=>c});var t=o(65353),n=o(43297),a=o(38296),s=o(54918),r=o(32203);const c=e=>{var{children:l=null,className:o="",component:c="div"}=e,m=(0,t.__rest)(e,["children","className","component"]);const{cardId:f,registerTitleId:i}=n.useContext(r.H),p=c,d=f?`${f}-title`:"";return n.useEffect((()=>(i(d),()=>i(""))),[i,d]),n.createElement(p,Object.assign({className:(0,a.css)(s.Z.cardTitle,o),id:d||void 0},m),l)};c.displayName="CardTitle"},50693:(e,l,o)=>{"use strict";o.d(l,{r:()=>f});var t=o(65353),n=o(43297),a=o(3246),s=o(38296),r=o(54764),c=o(77712),m=o(80164);const f=e=>{var{children:l=null,className:o="",component:f="div",hasGutter:i,span:p=null,order:d,style:u}=e,g=(0,t.__rest)(e,["children","className","component","hasGutter","span","order","style"]);const O=[a.Z.grid,p&&a.Z.modifiers[`all_${p}Col`]],C=f;return Object.entries(r.a).forEach((([e,l])=>{const o=e,t=g[o];t&&O.push(a.Z.modifiers[`all_${t}ColOn${l}`]),delete g[o]})),n.createElement(C,Object.assign({className:(0,s.css)(...O,i&&a.Z.modifiers.gutter,o),style:u||d?Object.assign(Object.assign({},u),(0,m.x8)(d,c.T.name)):void 0},g),l)};f.displayName="Grid"},16475:(e,l,o)=>{"use strict";o.d(l,{P:()=>f});var t=o(65353),n=o(43297),a=o(3246),s=o(38296),r=o(54764),c=o(77712),m=o(80164);const f=e=>{var{children:l=null,className:o="",component:f="div",span:i=null,rowSpan:p=null,offset:d=null,order:u,style:g}=e,O=(0,t.__rest)(e,["children","className","component","span","rowSpan","offset","order","style"]);const C=[a.Z.gridItem,i&&a.Z.modifiers[`${i}Col`],p&&a.Z.modifiers[`${p}Row`],d&&a.Z.modifiers[`offset_${d}Col`]],_=f;return Object.entries(r.a).forEach((([e,l])=>{const o=e,t=`${o}RowSpan`,n=`${o}Offset`,s=O[o],r=O[t],c=O[n];s&&C.push(a.Z.modifiers[`${s}ColOn${l}`]),r&&C.push(a.Z.modifiers[`${r}RowOn${l}`]),c&&C.push(a.Z.modifiers[`offset_${c}ColOn${l}`]),delete O[o],delete O[t],delete O[n]})),n.createElement(_,Object.assign({className:(0,s.css)(...C,o),style:g||u?Object.assign(Object.assign({},g),(0,m.x8)(u,c.T.name)):void 0},O),l)};f.displayName="GridItem"},54764:(e,l,o)=>{"use strict";var t,n;o.d(l,{a:()=>n,t:()=>t}),function(e){e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e["2xl"]="2xl",e["3xl"]="3xl",e["4xl"]="4xl"}(t||(t={})),function(e){e.sm="Sm",e.md="Md",e.lg="Lg",e.xl="Xl",e.xl2="_2xl"}(n||(n={}))},44303:(e,l,o)=>{"use strict";o.d(l,{Z:()=>t}),o(58392);const t={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},54918:(e,l,o)=>{"use strict";o.d(l,{Z:()=>t}),o(80598);const t={card:"pf-c-card",cardActions:"pf-c-card__actions",cardBody:"pf-c-card__body",cardExpandableContent:"pf-c-card__expandable-content",cardFooter:"pf-c-card__footer",cardHeader:"pf-c-card__header",cardHeaderToggle:"pf-c-card__header-toggle",cardHeaderToggleIcon:"pf-c-card__header-toggle-icon",cardSrInput:"pf-c-card__sr-input",cardTitle:"pf-c-card__title",divider:"pf-c-divider",modifiers:{hoverable:"pf-m-hoverable",selectable:"pf-m-selectable",selected:"pf-m-selected",hoverableRaised:"pf-m-hoverable-raised",selectableRaised:"pf-m-selectable-raised",nonSelectableRaised:"pf-m-non-selectable-raised",selectedRaised:"pf-m-selected-raised",compact:"pf-m-compact",displayLg:"pf-m-display-lg",flat:"pf-m-flat",plain:"pf-m-plain",rounded:"pf-m-rounded",expanded:"pf-m-expanded",fullHeight:"pf-m-full-height",toggleRight:"pf-m-toggle-right",noOffset:"pf-m-no-offset",noFill:"pf-m-no-fill",overpassFont:"pf-m-overpass-font"},themeDark:"pf-theme-dark"}},3246:(e,l,o)=>{"use strict";o.d(l,{Z:()=>t}),o(72816);const t={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},77712:(e,l,o)=>{"use strict";o.d(l,{T:()=>t});const t={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"}},14748:(e,l,o)=>{"use strict";o.d(l,{Z:()=>p});var t=o(85893),n=o(43297),a=o.n(n),s=o(94184),r=o.n(s),c=o(28216),m=o(53754),f=function(){return f=Object.assign||function(e){for(var l,o=1,t=arguments.length;o<t;o++)for(var n in l=arguments[o])Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);return e},f.apply(this,arguments)},i=function(e,l,o){if(o||2===arguments.length)for(var t,n=0,a=l.length;n<a;n++)!t&&n in l||(t||(t=Array.prototype.slice.call(l,0,n)),t[n]=l[n]);return e.concat(t||Array.prototype.slice.call(l))};const p=(0,c.$j)((function(e){var l=e.routerData;return{params:l&&l.params,path:l&&l.path}}),(function(){return{}}))((function(e){var l=e.path,o=e.params,n=void 0===o?{}:o,s=e.children,c=e.className,p=function(e,l){var o={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&l.indexOf(t)<0&&(o[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)l.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(o[t[n]]=e[t[n]])}return o}(e,["path","params","children","className"]),d=function(){var e,o,t;if(null===(t=null===(o=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===o?void 0:o.$internal)||void 0===t?void 0:t.store){var a=window.insights.chrome.$internal.store.getState();if(l&&a)return l.split("/").reduce((function(e,l){var o,t;return 0===l.indexOf(":")?e.dynamic=f(f({},e.dynamic),((o={})["data-".concat((t=l.substr(1),t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=n[l.substr(1)],o)):e.staticPart=i(i([],e.staticPart,!0),""!==l?[l]:[],!0),e}),{staticPart:[a.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),u=d.dynamic,g=d.staticPart;return(0,t.jsx)(m.Z.Consumer,{children:function(e){var l;void 0===e&&(e="light");var o=r()(((l={})["pf-m-".concat(e)]="dark"===e,l));return{dark:(0,t.jsx)("section",f({},p,u,{"page-type":g.join("-"),className:"".concat(r()(c,"pf-l-page__main-section pf-c-page__main-section")," ").concat(o)},{children:a().Children.map(s,(function(e){return a().cloneElement(e,{className:"pf-m-dark"})}))})),light:(0,t.jsx)("section",f({},p,u,{"page-type":g.join("-"),className:"".concat(r()(c,"pf-l-page__main-section pf-c-page__main-section"))},{children:s}))}[e]}})}))},80943:(e,l,o)=>{"use strict";o.d(l,{Z:()=>r});var t=o(83237),n=o(13784),a=o(32132),s=o(30893);const r=function(e){var l=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).public_date;return{label:a.N.formatMessage(s.Z.labelsFiltersPublishDate),type:t.Y.radio,filterValues:{onChange:function(l,o){!function(l){e({filter:{public_date:"all"!==l&&l||""}})}(o)},items:n.Ek,value:l,placeholder:a.N.formatMessage(s.Z.labelsFiltersPublishDatePlaceholder)}}}},70133:(e,l,o)=>{"use strict";o.d(l,{Z:()=>m});var t=o(83237),n=o(43297),a=o.n(n),s=o(13784),r=o(32132),c=o(30893);const m=function(e){var l=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}).reboot_required,o=a().useMemo((function(){return s.r_.map((function(e){var l=e.value;return{label:e.label,value:l.toString()}}))}),[]),n=l&&(Array.isArray(l)&&l.map((function(e){return e.toString()}))||[l.toString()]);return{label:r.N.formatMessage(c.Z.labelsFiltersReboot),type:t.Y.checkbox,filterValues:{onChange:function(l,o){!function(l){e({filter:{reboot_required:l}})}(o)},items:o,value:n,placeholder:r.N.formatMessage(c.Z.labelsFiltersRebootPlaceholder)}}}},29287:(e,l,o)=>{"use strict";o.d(l,{Z:()=>m});var t=o(83237),n=o(43297),a=o.n(n),s=o(13784),r=o(32132),c=o(30893);const m=function(e){var l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=a().useMemo((function(){return s.Yi.map((function(e){var l=e.value;return{label:e.label,value:l.toString()}}))}),[]);return{label:r.N.formatMessage(c.Z.labelsFiltersType),type:t.Y.checkbox,filterValues:{onChange:function(l,o){!function(l){e({filter:{advisory_type_name:l}})}(o)},items:o,value:l.advisory_type_name,placeholder:r.N.formatMessage(c.Z.labelsFiltersTypePlaceholder)}}}},49642:(e,l,o)=>{"use strict";o.d(l,{Z:()=>y});var t=o(79851),n=o(34512),a=o(80123),s=o(39173),r=o(45697),c=o.n(r),m=o(43297),f=o.n(m),i=o(64029),p=o(32835),d=o(96620),u=function(e){var l=e.items,o=e.headerOUIA;return f().createElement(i.a,null,l.filter(Boolean).map((function(e){return f().createElement(p.g,{key:e.title,isActive:e.isActive},e.to?f().createElement(d.Link,{to:e.to,"data-ouia-component-type":"".concat(o,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title):e.title)})))};u.propTypes={items:c().arrayOf(c().shape({isActive:c().bool,to:c().string,title:c().node})),headerOUIA:c().string};const g=u;var O=o(28883),C=o(35262),_=function(e){var l=e.history,o=e.headerOUIA;return f().createElement(C.m,{onSelect:function(e,o){l.push(o)},activeKey:l.location.pathname,className:"patchman-tabs"},f().createElement(O.O,{eventKey:"/advisories",title:"Applicable advisories","data-ouia-component-type":"".concat(o,"-tab"),"data-ouia-component-id":"".concat(o,"-tab-Applicable advisories'")}),f().createElement(O.O,{eventKey:"/systems/",title:"Systems","data-ouia-component-type":"".concat(o,"-tab"),"data-ouia-component-id":"".concat(o,"-tab-Systems")}))};_.propTypes={history:c().object,headerOUIA:c().string};const b=(0,d.withRouter)(_);var w=function(e){var l=e.title,o=e.showTabs,r=e.breadcrumbs,c=e.children,m=e.headerOUIA,i=e.actions;return f().createElement(f().Fragment,null,f().createElement(a.Z,{"data-ouia-component-type":"".concat(m,"-page-header")},r&&f().createElement(g,{items:r,headerOUIA:m}),f().createElement(t.P,{hasGutter:!0},f().createElement(n.J,null,f().createElement(s.Z,{title:l})),f().createElement(n.J,{isFilled:!0}),f().createElement(n.J,null,i)),c),o&&f().createElement(b,{headerOUIA:m}))};w.propTypes={title:c().node,showTabs:c().bool,breadcrumbs:c().array,children:c().any,headerOUIA:c().string,actions:c().node};const y=w},91433:(e,l,o)=>{"use strict";o.d(l,{f:()=>d});var t=o(52643),n=o(9947),a=o(75106),s=o(38424),r=o(60485),c=o(68778),m=o(43297),f=o.n(m),i=o(32132),p=o(30893),d=function(){return f().createElement(t.b,null,f().createElement(n.u,{style:{paddingTop:40}},f().createElement(s.k,{icon:function(){return f().createElement(c.ZP,{size:"xl",color:"var(--pf-global--success-color--200)",style:{marginBottom:15}})}}),f().createElement(r.D,{headingLevel:"h5",size:"lg"},i.N.formatMessage(p.Z.statesNoApplicableAdvisories)),f().createElement(a.B,null,i.N.formatMessage(p.Z.statesSystemUpToDate))))}},38776:(e,l,o)=>{"use strict";o.d(l,{Z:()=>Z});var t=o(29439),n=o(3351),a=o(22860),s=o(6934),r=o(75863),c=o(3962),m=o(81739),f=o(45697),i=o.n(f),p=o(43297),d=o.n(p),u=o(30893),g=o(53074),O=o(5391),C=o(91607),_=o(32132),b=o(44733),w=o(50383),y=function(e){var l=e.isLoading,o=e.page,t=e.perPage,n=e.onSetPage,a=e.totalItems,s=e.onPerPageSelect,r=e.paginationOUIA;return d().createElement(d().Fragment,null,l?d().createElement("div",{className:"pf-c-pagination pf-m-bottom"},d().createElement(w.O,{fontSize:"xl",width:"350px",style:{margin:10}})):d().createElement(b.t,{itemCount:a,perPage:t,page:o,onSetPage:n,onPerPageSelect:s,widgetId:"pagination-options-menu-bottom",variant:b.a.bottom,ouiaId:r,isDisabled:0===a}))};y.propTypes={isLoading:i().bool,onSetPage:i().func,onPerPageSelect:i().func,page:i().number,perPage:i().number,totalItems:i().number,paginationOUIA:i().string};const v=y;var x=o(52579),h=o(1595),S=function(e){var l,o=e.columns,f=e.store,i=f.rows,p=f.metadata,b=f.status,y=f.queryParams,S=y.filter,Z=y.search,E=e.onCollapse,R=e.onSelect,M=e.onSetPage,N=e.onPerPageSelect,P=e.onSort,L=e.onExport,k=e.filterConfig,I=e.sortBy,A=e.remediationProvider,X=e.selectedRows,j=e.compact,T=e.apply,F=e.tableOUIA,D=e.paginationOUIA,$=e.errorState,U=e.emptyState,B=e.defaultFilters,z=e.searchChipLabel,H=e.ToolbarButton,q=e.actionsConfig,G=e.isRemediationLoading,V=e.actionsToggle,J=d().useMemo((function(){return(0,O.CM)(p.limit,p.offset)}),[p.limit,p.offset]),K=(0,t.Z)(J,2),Q=K[0],W=K[1],Y=(0,C.j5)(S,T,B),ee=(0,t.Z)(Y,1)[0],le=X&&(0,O.Qy)(X).length,oe=b.code,te=b.hasError,ne=b.isLoading,ae=(0,C.Pz)(le,R,p,i,E);return d().createElement(d().Fragment,null,d().createElement(d().Fragment,null,te||!1===p.has_systems?d().createElement(x.Z,{code:oe,ErrorState:$,EmptyState:U,metadata:p}):d().createElement(d().Fragment,null,d().createElement(c.Z,{pagination:ne?d().createElement(w.O,{fontSize:"xl",width:"200px",style:{margin:10}}):{itemCount:p.total_items,page:Q,perPage:W,isCompact:!0,onSetPage:M,onPerPageSelect:N,ouiaId:"top-".concat(D),isDisabled:0===p.total_items},filterConfig:k,activeFiltersConfig:{filters:(0,O.mt)(S,Z,z),onDelete:ee,deleteTitle:_.N.formatMessage(B&&u.Z.labelsFiltersReset||u.Z.labelsFiltersClear)},actionsConfig:{actions:[A&&d().createElement(g.Z,{remediationProvider:A,isDisabled:0===Object.values(X).filter((function(e){return e})).length||G,isLoading:G})]},exportConfig:{isDisabled:0===p.total_items,onSelect:L},bulkSelect:R&&ae},H&&d().createElement(h.E,null,d().createElement(H,null))),ne?d().createElement(m.Z,{colSize:null!==(l=null==o?void 0:o.length)&&void 0!==l?l:5,rowSize:20,variant:j&&r.B.compact}):d().createElement(n.i,{"aria-label":"Patch table view",cells:o,onSelect:p.total_items&&R,rows:i,onCollapse:p.total_items&&E,canSelectAll:!1,onSort:p.total_items&&P,ouiaId:F,sortBy:p.total_items&&I,isStickyHeader:!0,variant:j&&r.B.compact,actions:q,actionsToggle:V},d().createElement(s.x,null),d().createElement(a.R,null)),d().createElement(v,{isLoading:ne,totalItems:p.total_items,perPage:W,page:Q,onSetPage:M,onPerPageSelect:N,paginationOUIA:"bottom-".concat(D)}))))};S.propTypes={columns:i().array,onCollapse:i().func,onSelect:i().func,onSetPage:i().func,onPerPageSelect:i().func,onSort:i().func,onExport:i().func,remediationProvider:i().func,selectedRows:i().object,apply:i().func,sortBy:i().object,filterConfig:i().object,store:i().object,compact:i().bool,tableOUIA:i().string,paginationOUIA:i().string,errorState:i().element,emptyState:i().element,defaultFilters:i().object,searchChipLabel:i().string,ToolbarButton:i().elementType,actionsConfig:i().array,isRemediationLoading:i().bool,actionsToggle:i().func};const Z=S},64270:(e,l,o)=>{"use strict";o.d(l,{$$:()=>i,C_:()=>f,fG:()=>m,g:()=>p,z7:()=>c});var t=o(1082),n=o(62480),a=o(7732),s=o(30893),r=o(32132),c=[{title:r.N.formatMessage(s.Z.labelsColumnsName),cellFormatters:[n.zW],transforms:[a.p,(0,t.d)(15)],key:"id"},{title:r.N.formatMessage(s.Z.labelsColumnsSynopsis),transforms:[a.p],key:"synopsis"},{title:r.N.formatMessage(s.Z.labelsColumnsType),transforms:[a.p,(0,t.d)(10)],key:"advisory_type_name"},{title:r.N.formatMessage(s.Z.labelsColumnsAffectedSystems),transforms:[a.p,(0,t.d)(15)],key:"applicable_systems"},{title:r.N.formatMessage(s.Z.labelsColumnsReboot),transforms:[a.p],key:"reboot_required"},{title:r.N.formatMessage(s.Z.labelsColumnsPublishDate),transforms:[a.p,(0,t.d)(15)],key:"public_date"}],m=[{title:r.N.formatMessage(s.Z.labelsColumnsName),cellFormatters:[n.zW],transforms:[a.p,(0,t.d)(15)],key:"id"},{title:"Synopsis",transforms:[a.p,(0,t.d)(35)],key:"synopsis"},{title:r.N.formatMessage(s.Z.labelsColumnsStatus),transforms:[a.p,(0,t.d)(10)],key:"status"},{title:r.N.formatMessage(s.Z.labelsColumnsType),transforms:[a.p,(0,t.d)(10)],key:"advisory_type_name"},{title:r.N.formatMessage(s.Z.labelsColumnsReboot),transforms:[a.p,(0,t.d)(10)],key:"reboot_required"},{title:r.N.formatMessage(s.Z.labelsColumnsPublishDate),transforms:[a.p,(0,t.d)(10)],key:"public_date"}],f=[{title:r.N.formatMessage(s.Z.labelsColumnsName),transforms:[a.p,(0,t.d)(20)],key:"name"},{title:r.N.formatMessage(s.Z.labelsColumnsInstalledVersion),transforms:[a.p,(0,t.d)(15)],key:"evra"},{title:r.N.formatMessage(s.Z.labelsColumnsLatestVersion),transforms:[(0,t.d)(15)],key:"latest_update"},{title:r.N.formatMessage(s.Z.labelsColumnsStatus),transforms:[a.p,(0,t.d)(10)],key:"updatable"},{title:r.N.formatMessage(s.Z.labelsColumnsSummary),transforms:[a.p,(0,t.d)(40)],key:"summary"}],i=[{key:"name",title:r.N.formatMessage(s.Z.labelsColumnsName),transforms:[a.p,(0,t.d)(25)]},{key:"systems_installed",title:r.N.formatMessage(s.Z.labelsColumnsInstalledSystems),transforms:[a.p,(0,t.d)(10)],props:{width:10}},{key:"systems_applicable",title:r.N.formatMessage(s.Z.labelsColumnsApplicableSystems),transforms:[a.p,(0,t.d)(10)],props:{width:10}},{key:"systems_installable",title:r.N.formatMessage(s.Z.labelsColumnsInstallableSystems),transforms:[a.p,(0,t.d)(10)],props:{width:10}},{key:"summary",title:r.N.formatMessage(s.Z.labelsColumnsSummary),transforms:[a.p,(0,t.d)(40)],props:{width:30}}],p=[{title:r.N.formatMessage(s.Z.labelsColumnsCveID),transforms:[a.p,(0,t.d)(40)],key:"synopsis"},{key:"impact",title:r.N.formatMessage(s.Z.labelsColumnsSeverity),transforms:[a.p,(0,t.d)(30)],props:{width:30}},{key:"cvss",title:r.N.formatMessage(s.Z.labelsColumnsCVSS),transforms:[a.p,(0,t.d)(30)],props:{width:30}}]},79202:(e,l,o)=>{"use strict";o.r(l),o.d(l,{default:()=>z});var t=o(29439),n=o(14748),a=o(45697),s=o.n(a),r=o(43297),c=o.n(r),m=o(28216),f=o(96620),i=o(30893),p=o(80943),d=o(90747),u=o(29287),g=o(70133),O=o(49642),C=o(38776),_=o(64270),b=o(9557),w=o(11220),y=o(36248),v=o(5391),x=o(91607),h=o(32132),S=o(83215),Z=o(26076),E=o(27578),R=o(70),M=o(32203),N=o(50693),P=o(16475),L=o(62394),k=o(60485),I=o(79851),A=o(34512),X=o(13784),j=o(18464),T=o(35240),F=function(e){var l=e.advisory,o=l.attributes,t=l.id;return c().createElement(M.Z,{isFullHeight:!0},c().createElement(R.l,null,(0,v.cX)(X.w8.advisories,t)),c().createElement(L.e,{className:"fonst-size-sm"},c().createElement(N.r,null,c().createElement(P.P,null,c().createElement(N.r,null,c().createElement(P.P,{lg:6,md:12,sm:6},c().createElement(N.r,null,c().createElement(P.P,null,c().createElement(j.Z,{type:o.advisory_type_name})),c().createElement(P.P,null,(0,T.Un)(o.public_date)),o.os_name&&c().createElement(P.P,null,o.os_name))),c().createElement(P.P,{lg:6,className:"adjustableElement",sm:6},c().createElement(N.r,null,o.severity&&c().createElement(P.P,null,c().createElement(I.P,{hasGutter:!0},c().createElement(P.P,null,c().createElement(E.ZP,{size:"sm",color:X.QG[o.severity].color})),c().createElement(P.P,{isFilled:!0},X.QG[o.severity].label))),o.reboot_required&&c().createElement(P.P,null,c().createElement(I.P,{hasGutter:!0},c().createElement(A.J,null,c().createElement(Z.ZP,{color:"var(--pf-global--palette--red-100)"})),c().createElement(A.J,{isFilled:!0,style:{flexWrap:"nowrap"}},h.N.formatMessage(i.Z.textRebootIsRequired)))))))),c().createElement(P.P,null,(0,v.cX)(X.w8.advisories,t,h.N.formatMessage(i.Z.labelsAffectedSystemsCount,{systemsCount:o.applicable_systems}))),c().createElement(P.P,null,(0,v.Or)(o.synopsis)))))};F.propTypes={advisory:s().object};const D=function(){var e=c().useState({}),l=(0,t.Z)(e,2),o=l[0],a=l[1];return c().useEffect((function(){(0,w.ob)({limit:4,sort:"-advisory_type_name,-applicable_systems"}).then(a)}),[]),o.data&&o.data.length&&c().createElement(n.Z,{style:{paddingBottom:0,paddingTop:0}},c().createElement(k.D,{headingLevel:"h3",className:"pf-u-my-md"},h.N.formatMessage(i.Z.titlesMostImpactfulAdvisories)),c().createElement(N.r,{hasGutter:!0},o.data.map((function(e){return c().createElement(P.P,{key:e.id,lg:3,md:3,sm:12},c().createElement(F,{advisory:e}))}))))||null};var $=o(72999),U=o(93080),B=function(e){var l=e.history,o=h.N.formatMessage(i.Z.titlesAdvisories);(0,x.Iw)(o);var a=(0,m.I0)(),s=c().useState(!0),f=(0,t.Z)(s,2),Z=f[0],E=f[1],R=(0,m.v9)((function(e){return e.AdvisoryListStore.rows})),M=(0,m.v9)((function(e){return e.AdvisoryListStore.expandedRows})),N=(0,m.v9)((function(e){return e.AdvisoryListStore.queryParams})),P=(0,m.v9)((function(e){return e.AdvisoryListStore.selectedRows})),L=(0,m.v9)((function(e){return e.AdvisoryListStore.metadata})),k=(0,m.v9)((function(e){return e.AdvisoryListStore.status})),I=(0,m.v9)((function(e){var l=e.SystemsStore;return null==l?void 0:l.areAllSelected})),A=c().useMemo((function(){return(0,y.nf)(R,M,P)}),[R,M,P]),X=c().useState(!1),j=(0,t.Z)(X,2),T=j[0],F=j[1];c().useEffect((function(){return function(){a((0,S.L1)())}}),[]),(0,r.useEffect)((function(){Z?(K((0,v.PZ)(l.location.search)),E(!1)):(l.push((0,v.R_)(N)),a((0,b.hV)(N)))}),[JSON.stringify(N),Z]);var B=c().useCallback((function(e,l,o){return a((0,b.rt)({rowId:(0,v.vs)(R,l),value:o}))})),z=(0,U.r)(A,P,{endpoint:U.c.advisories,queryParams:N,selectionDispatcher:b.EI}),H=(0,x._f)(_.z7,K,2),q=c().useMemo((function(){return(0,v.hO)(_.z7,L.sort,2)}),[L.sort]),G=(0,x.AR)("advisories",N,{csv:w.rf,json:w.kM},a),V=(0,x.SL)(L.limit,K),J=(0,x._T)(K);function K(e){a((0,b.Us)(e))}var Q=(0,$.Z)(P,F,"advisories",I);return c().createElement(c().Fragment,null,c().createElement(O.Z,{title:h.N.formatMessage(i.Z.titlesPatchAdvisories),headerOUIA:"advisories"}),c().createElement(D,null),c().createElement(n.Z,null,c().createElement(C.Z,{columns:_.z7,compact:!0,onCollapse:B,onSetPage:V,onPerPageSelect:J,onSort:H,onExport:G,selectedRows:P,onSelect:z,sortBy:q,remediationProvider:Q,apply:K,remediationButtonOUIA:"toolbar-remediation-button",tableOUIA:"advisories-table",paginationOUIA:"advisories-pagination",store:{rows:A,metadata:L,status:k,queryParams:N},filterConfig:{items:[(0,d.Z)(K,N.search,h.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesTitle),h.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesPlaceholder)),(0,u.Z)(K,N.filter),(0,p.Z)(K,N.filter),(0,g.Z)(K,N.filter)]},searchChipLabel:h.N.formatMessage(i.Z.labelsFiltersSearchAdvisoriesTitle),isRemediationLoading:T})))};B.propTypes={history:s().object};const z=(0,f.withRouter)(B)},93080:(e,l,o)=>{"use strict";o.d(l,{c:()=>u,r:()=>g});var t=o(15861),n=o(4942),a=o(64687),s=o.n(a),r=o(43297),c=o(28216),m=o(11220),f=o(9557),i=o(5391);function p(e,l){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);l&&(t=t.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),o.push.apply(o,t)}return o}function d(e){for(var l=1;l<arguments.length;l++){var o=null!=arguments[l]?arguments[l]:{};l%2?p(Object(o),!0).forEach((function(l){(0,n.Z)(e,l,o[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):p(Object(o)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(o,l))}))}return e}var u={advisories:"/ids/advisories",systems:"/ids/systems",templates:"/baselines",advisorySystems:function(e){return"/ids/advisories/".concat(e,"/systems")},systemAdvisories:function(e){return"/ids/systems/".concat(e,"/advisories")},packageSystems:function(e){return"/packages/".concat(e,"/systems")},systemPackages:function(e){return"/systems/".concat(e,"/packages")},templateSystems:function(e){return"/ids/baselines/".concat(e,"/systems")}},g=function(e,l,o){var n=o.endpoint,a=o.queryParams,p=o.selectionDispatcher,u=o.constructFilename,g=o.transformKey,O=o.apiResponseTransformer,C=o.customSelector,_=(0,c.I0)(),b=function(e,l){return(0,r.useCallback)((function(o){return(0,m.dk)(e,d(d({},o),{},{limit:-1})).then((function(e){return l?l(e):e}))}),[])}(n,O),w=function(e,l){return(0,r.useCallback)((function(o){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=o.ids,a=o.data,s=Array.isArray(n);return(s?n:a).forEach((function(o){var n=s?o:o.id;(0,i.Kn)(o)&&o.isExpandedRow||t.push({id:e?e(o):n,selected:l?l(o):n})})),t}))}(g,u),y=function(e){C?C(e):_(p(e))},v=function(e,l,o){return{selectNone:function(e){var t=[];Object.keys(e).forEach((function(e){t.push({id:e,selected:!1})})),l(t),o(!1)},selectPage:function(o){Array.isArray(o)&&(o=o.filter((function(e){return!e.disableSelection}))),l(e({data:o}))},selectAll:function(t,n){return n.offset=0,t(n).then((function(t){if(Array.isArray(t.data)){var n=t.data.filter((function(e){return"Applicable"!==e.status}));l(e({data:n}))}else l(e(t)),o(!0)}))}}}(w,y,(function(e){_((0,f.wy)(e))})),x=v.selectNone,h=v.selectPage,S=v.selectAll,Z=(0,r.useCallback)(function(){var o=(0,t.Z)(s().mark((function o(t,n,r){var c,m=arguments;return s().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:c=m.length>3&&void 0!==m[3]?m[3]:function(){},o.t0=t,o.next="none"===o.t0?4:"page"===o.t0?6:"all"===o.t0?8:10;break;case 4:return x(l),o.abrupt("break",11);case 6:return h(e),o.abrupt("break",11);case 8:return S(b,a).then((function(){return c(!1)})),o.abrupt("break",11);case 10:y([{id:g?g(e[r]):e[r].id,selected:n&&(!u||u(e[r]))}]);case 11:case"end":return o.stop()}}),o)})));return function(e,l,t){return o.apply(this,arguments)}}());return Z}},72999:(e,l,o)=>{"use strict";o.d(l,{Z:()=>u});var t=o(29439),n=o(15861),a=o(64687),s=o.n(a),r=o(28216),c=o(83215),m=o(55140),f=o(5391),i=function(){var e=new Worker(new URL(o.p+o.u(7384),o.b));return[e,function(){return e.terminate()}]},p=function(e,l){return e.postMessage(l),new Promise((function(l,o){e.onmessage=function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).data,t=e.status,n=e.error,a=e.result;"resolved"===t&&l(a),o(n)}}))},d=function(){var e=(0,n.Z)(s().mark((function e(l,o){var n,a,r,m,f,d,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=i(),r=(0,t.Z)(a,2),m=r[0],f=r[1],d=p(m,l),e.next=4,d.catch((function(e){return o((0,c.wN)({title:"There was an error while processing.",description:e,variant:"danger"}))}));case 4:return u=e.sent,f(),e.abrupt("return",!(null==u||null===(n=u.issues)||void 0===n||!n.length)&&u);case 7:case"end":return e.stop()}}),e)})));return function(l,o){return e.apply(this,arguments)}}();const u=function(e,l,o,t){var a=(0,r.I0)(),c=(0,m.Z)(),i=function(){var r=(0,n.Z)(s().mark((function n(){var r,m;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.next=3,c.auth.getToken();case 3:return r=n.sent,n.next=6,d({payload:(0,f.Q6)(e),remediationType:o,areAllSelected:t,authToken:r},a);case 6:return m=n.sent,l(!1),n.abrupt("return",m);case 9:case"end":return n.stop()}}),n)})));return function(){return r.apply(this,arguments)}}();return i}},58392:()=>{},80598:()=>{},93398:()=>{},46928:()=>{},53336:()=>{},97236:()=>{},72816:()=>{}}]);