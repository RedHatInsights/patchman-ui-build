"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[96],{85991:(l,o,n)=>{o.a=void 0;const f=n(70655),e=f.__importStar(n(43297)),m=f.__importDefault(n(74652)),t=n(38296),a=n(23053);o.a=l=>{var{children:n=null,className:c="","aria-label":s="Breadcrumb",ouiaId:r,ouiaSafe:p=!0}=l,_=f.__rest(l,["children","className","aria-label","ouiaId","ouiaSafe"]);const d=a.useOUIAProps(o.a.displayName,r,p);return e.createElement("nav",Object.assign({},_,{"aria-label":s,className:t.css(m.default.breadcrumb,c)},d),e.createElement("ol",{className:m.default.breadcrumbList},e.Children.map(n,((l,o)=>{const n=o>0;return e.isValidElement(l)?e.cloneElement(l,{showDivider:n}):l}))))},o.a.displayName="Breadcrumb"},49489:(l,o,n)=>{o.g=void 0;const f=n(70655),e=f.__importStar(n(43297)),m=f.__importDefault(n(95511)),t=f.__importDefault(n(74652)),a=n(38296);o.g=l=>{var{children:o=null,className:n="",to:c,isActive:s=!1,isDropdown:r=!1,showDivider:p,target:_,component:d="a",render:O}=l,i=f.__rest(l,["children","className","to","isActive","isDropdown","showDivider","target","component","render"]);const C=d,g=s?"page":void 0,w=a.css(t.default.breadcrumbLink,s&&t.default.modifiers.current);return e.createElement("li",Object.assign({},i,{className:a.css(t.default.breadcrumbItem,n)}),p&&e.createElement("span",{className:t.default.breadcrumbItemDivider},e.createElement(m.default,null)),"button"===d&&e.createElement("button",{className:w,"aria-current":g,type:"button"},o),r&&e.createElement("span",{className:a.css(t.default.breadcrumbDropdown)},o),O&&O({className:w,ariaCurrent:g}),c&&!O&&e.createElement(C,{href:c,target:_,className:w,"aria-current":g},o),!c&&"button"!==d&&!r&&o)},o.g.displayName="BreadcrumbItem"},49287:(l,o,n)=>{o.r=void 0;const f=n(70655),e=f.__importStar(n(43297)),m=f.__importDefault(n(17067)),t=n(38296),a=n(39383),c=f.__importStar(n(24936)),s=n(42319);o.r=l=>{var{children:o=null,className:n="",component:r="div",hasGutter:p,span:_=null,order:d,style:O}=l,i=f.__rest(l,["children","className","component","hasGutter","span","order","style"]);const C=[m.default.grid,_&&m.default.modifiers[`all_${_}Col`]],g=r;return Object.entries(a.DeviceSizes).forEach((([l,o])=>{const n=l,f=i[n];f&&C.push(m.default.modifiers[`all_${f}ColOn${o}`]),delete i[n]})),e.createElement(g,Object.assign({className:t.css(...C,p&&m.default.modifiers.gutter,n),style:O||d?Object.assign(Object.assign({},O),s.setBreakpointCssVars(d,c.l_grid_item_Order.name)):void 0},i),o)},o.r.displayName="Grid"},18038:(l,o,n)=>{o.P=void 0;const f=n(70655),e=f.__importStar(n(43297)),m=f.__importDefault(n(17067)),t=n(38296),a=n(39383),c=f.__importStar(n(24936)),s=n(42319);o.P=l=>{var{children:o=null,className:n="",component:r="div",span:p=null,rowSpan:_=null,offset:d=null,order:O,style:i}=l,C=f.__rest(l,["children","className","component","span","rowSpan","offset","order","style"]);const g=[m.default.gridItem,p&&m.default.modifiers[`${p}Col`],_&&m.default.modifiers[`${_}Row`],d&&m.default.modifiers[`offset_${d}Col`]],w=r;return Object.entries(a.DeviceSizes).forEach((([l,o])=>{const n=l,f=`${n}RowSpan`,e=`${n}Offset`,t=C[n],a=C[f],c=C[e];t&&g.push(m.default.modifiers[`${t}ColOn${o}`]),a&&g.push(m.default.modifiers[`${a}RowOn${o}`]),c&&g.push(m.default.modifiers[`offset_${c}ColOn${o}`]),delete C[n],delete C[f],delete C[e]})),e.createElement(w,Object.assign({className:t.css(...g,n),style:i||O?Object.assign(Object.assign({},i),s.setBreakpointCssVars(O,c.l_grid_item_Order.name)):void 0},C),o)},o.P.displayName="GridItem"},39383:(l,o)=>{var n,f;Object.defineProperty(o,"__esModule",{value:!0}),o.DeviceSizes=o.BaseSizes=void 0,(f=o.BaseSizes||(o.BaseSizes={})).xs="xs",f.sm="sm",f.md="md",f.lg="lg",f.xl="xl",f["2xl"]="2xl",f["3xl"]="3xl",f["4xl"]="4xl",(n=o.DeviceSizes||(o.DeviceSizes={})).sm="Sm",n.md="Md",n.lg="Lg",n.xl="Xl",n.xl2="_2xl"},74652:(l,o,n)=>{o.__esModule=!0,n(58392),o.default={breadcrumb:"pf-c-breadcrumb",breadcrumbDropdown:"pf-c-breadcrumb__dropdown",breadcrumbHeading:"pf-c-breadcrumb__heading",breadcrumbItem:"pf-c-breadcrumb__item",breadcrumbItemDivider:"pf-c-breadcrumb__item-divider",breadcrumbLink:"pf-c-breadcrumb__link",breadcrumbList:"pf-c-breadcrumb__list",dropdownToggle:"pf-c-dropdown__toggle",modifiers:{current:"pf-m-current",overpassFont:"pf-m-overpass-font"}}},17067:(l,o,n)=>{o.__esModule=!0,n(72816),o.default={grid:"pf-l-grid",gridItem:"pf-l-grid__item",modifiers:{all_1Col:"pf-m-all-1-col",all_2Col:"pf-m-all-2-col",all_3Col:"pf-m-all-3-col",all_4Col:"pf-m-all-4-col",all_5Col:"pf-m-all-5-col",all_6Col:"pf-m-all-6-col",all_7Col:"pf-m-all-7-col",all_8Col:"pf-m-all-8-col",all_9Col:"pf-m-all-9-col",all_10Col:"pf-m-all-10-col",all_11Col:"pf-m-all-11-col",all_12Col:"pf-m-all-12-col",all_1ColOnSm:"pf-m-all-1-col-on-sm",all_2ColOnSm:"pf-m-all-2-col-on-sm",all_3ColOnSm:"pf-m-all-3-col-on-sm",all_4ColOnSm:"pf-m-all-4-col-on-sm",all_5ColOnSm:"pf-m-all-5-col-on-sm",all_6ColOnSm:"pf-m-all-6-col-on-sm",all_7ColOnSm:"pf-m-all-7-col-on-sm",all_8ColOnSm:"pf-m-all-8-col-on-sm",all_9ColOnSm:"pf-m-all-9-col-on-sm",all_10ColOnSm:"pf-m-all-10-col-on-sm",all_11ColOnSm:"pf-m-all-11-col-on-sm",all_12ColOnSm:"pf-m-all-12-col-on-sm",all_1ColOnMd:"pf-m-all-1-col-on-md",all_2ColOnMd:"pf-m-all-2-col-on-md",all_3ColOnMd:"pf-m-all-3-col-on-md",all_4ColOnMd:"pf-m-all-4-col-on-md",all_5ColOnMd:"pf-m-all-5-col-on-md",all_6ColOnMd:"pf-m-all-6-col-on-md",all_7ColOnMd:"pf-m-all-7-col-on-md",all_8ColOnMd:"pf-m-all-8-col-on-md",all_9ColOnMd:"pf-m-all-9-col-on-md",all_10ColOnMd:"pf-m-all-10-col-on-md",all_11ColOnMd:"pf-m-all-11-col-on-md",all_12ColOnMd:"pf-m-all-12-col-on-md",all_1ColOnLg:"pf-m-all-1-col-on-lg",all_2ColOnLg:"pf-m-all-2-col-on-lg",all_3ColOnLg:"pf-m-all-3-col-on-lg",all_4ColOnLg:"pf-m-all-4-col-on-lg",all_5ColOnLg:"pf-m-all-5-col-on-lg",all_6ColOnLg:"pf-m-all-6-col-on-lg",all_7ColOnLg:"pf-m-all-7-col-on-lg",all_8ColOnLg:"pf-m-all-8-col-on-lg",all_9ColOnLg:"pf-m-all-9-col-on-lg",all_10ColOnLg:"pf-m-all-10-col-on-lg",all_11ColOnLg:"pf-m-all-11-col-on-lg",all_12ColOnLg:"pf-m-all-12-col-on-lg",all_1ColOnXl:"pf-m-all-1-col-on-xl",all_2ColOnXl:"pf-m-all-2-col-on-xl",all_3ColOnXl:"pf-m-all-3-col-on-xl",all_4ColOnXl:"pf-m-all-4-col-on-xl",all_5ColOnXl:"pf-m-all-5-col-on-xl",all_6ColOnXl:"pf-m-all-6-col-on-xl",all_7ColOnXl:"pf-m-all-7-col-on-xl",all_8ColOnXl:"pf-m-all-8-col-on-xl",all_9ColOnXl:"pf-m-all-9-col-on-xl",all_10ColOnXl:"pf-m-all-10-col-on-xl",all_11ColOnXl:"pf-m-all-11-col-on-xl",all_12ColOnXl:"pf-m-all-12-col-on-xl",all_1ColOn_2xl:"pf-m-all-1-col-on-2xl",all_2ColOn_2xl:"pf-m-all-2-col-on-2xl",all_3ColOn_2xl:"pf-m-all-3-col-on-2xl",all_4ColOn_2xl:"pf-m-all-4-col-on-2xl",all_5ColOn_2xl:"pf-m-all-5-col-on-2xl",all_6ColOn_2xl:"pf-m-all-6-col-on-2xl",all_7ColOn_2xl:"pf-m-all-7-col-on-2xl",all_8ColOn_2xl:"pf-m-all-8-col-on-2xl",all_9ColOn_2xl:"pf-m-all-9-col-on-2xl",all_10ColOn_2xl:"pf-m-all-10-col-on-2xl",all_11ColOn_2xl:"pf-m-all-11-col-on-2xl",all_12ColOn_2xl:"pf-m-all-12-col-on-2xl","1Col":"pf-m-1-col","2Col":"pf-m-2-col","3Col":"pf-m-3-col","4Col":"pf-m-4-col","5Col":"pf-m-5-col","6Col":"pf-m-6-col","7Col":"pf-m-7-col","8Col":"pf-m-8-col","9Col":"pf-m-9-col","10Col":"pf-m-10-col","11Col":"pf-m-11-col","12Col":"pf-m-12-col",offset_1Col:"pf-m-offset-1-col",offset_2Col:"pf-m-offset-2-col",offset_3Col:"pf-m-offset-3-col",offset_4Col:"pf-m-offset-4-col",offset_5Col:"pf-m-offset-5-col",offset_6Col:"pf-m-offset-6-col",offset_7Col:"pf-m-offset-7-col",offset_8Col:"pf-m-offset-8-col",offset_9Col:"pf-m-offset-9-col",offset_10Col:"pf-m-offset-10-col",offset_11Col:"pf-m-offset-11-col",offset_12Col:"pf-m-offset-12-col","1Row":"pf-m-1-row","2Row":"pf-m-2-row","3Row":"pf-m-3-row","4Row":"pf-m-4-row","5Row":"pf-m-5-row","6Row":"pf-m-6-row","7Row":"pf-m-7-row","8Row":"pf-m-8-row","9Row":"pf-m-9-row","10Row":"pf-m-10-row","11Row":"pf-m-11-row","12Row":"pf-m-12-row","1ColOnSm":"pf-m-1-col-on-sm","2ColOnSm":"pf-m-2-col-on-sm","3ColOnSm":"pf-m-3-col-on-sm","4ColOnSm":"pf-m-4-col-on-sm","5ColOnSm":"pf-m-5-col-on-sm","6ColOnSm":"pf-m-6-col-on-sm","7ColOnSm":"pf-m-7-col-on-sm","8ColOnSm":"pf-m-8-col-on-sm","9ColOnSm":"pf-m-9-col-on-sm","10ColOnSm":"pf-m-10-col-on-sm","11ColOnSm":"pf-m-11-col-on-sm","12ColOnSm":"pf-m-12-col-on-sm",offset_1ColOnSm:"pf-m-offset-1-col-on-sm",offset_2ColOnSm:"pf-m-offset-2-col-on-sm",offset_3ColOnSm:"pf-m-offset-3-col-on-sm",offset_4ColOnSm:"pf-m-offset-4-col-on-sm",offset_5ColOnSm:"pf-m-offset-5-col-on-sm",offset_6ColOnSm:"pf-m-offset-6-col-on-sm",offset_7ColOnSm:"pf-m-offset-7-col-on-sm",offset_8ColOnSm:"pf-m-offset-8-col-on-sm",offset_9ColOnSm:"pf-m-offset-9-col-on-sm",offset_10ColOnSm:"pf-m-offset-10-col-on-sm",offset_11ColOnSm:"pf-m-offset-11-col-on-sm",offset_12ColOnSm:"pf-m-offset-12-col-on-sm","1RowOnSm":"pf-m-1-row-on-sm","2RowOnSm":"pf-m-2-row-on-sm","3RowOnSm":"pf-m-3-row-on-sm","4RowOnSm":"pf-m-4-row-on-sm","5RowOnSm":"pf-m-5-row-on-sm","6RowOnSm":"pf-m-6-row-on-sm","7RowOnSm":"pf-m-7-row-on-sm","8RowOnSm":"pf-m-8-row-on-sm","9RowOnSm":"pf-m-9-row-on-sm","10RowOnSm":"pf-m-10-row-on-sm","11RowOnSm":"pf-m-11-row-on-sm","12RowOnSm":"pf-m-12-row-on-sm","1ColOnMd":"pf-m-1-col-on-md","2ColOnMd":"pf-m-2-col-on-md","3ColOnMd":"pf-m-3-col-on-md","4ColOnMd":"pf-m-4-col-on-md","5ColOnMd":"pf-m-5-col-on-md","6ColOnMd":"pf-m-6-col-on-md","7ColOnMd":"pf-m-7-col-on-md","8ColOnMd":"pf-m-8-col-on-md","9ColOnMd":"pf-m-9-col-on-md","10ColOnMd":"pf-m-10-col-on-md","11ColOnMd":"pf-m-11-col-on-md","12ColOnMd":"pf-m-12-col-on-md",offset_1ColOnMd:"pf-m-offset-1-col-on-md",offset_2ColOnMd:"pf-m-offset-2-col-on-md",offset_3ColOnMd:"pf-m-offset-3-col-on-md",offset_4ColOnMd:"pf-m-offset-4-col-on-md",offset_5ColOnMd:"pf-m-offset-5-col-on-md",offset_6ColOnMd:"pf-m-offset-6-col-on-md",offset_7ColOnMd:"pf-m-offset-7-col-on-md",offset_8ColOnMd:"pf-m-offset-8-col-on-md",offset_9ColOnMd:"pf-m-offset-9-col-on-md",offset_10ColOnMd:"pf-m-offset-10-col-on-md",offset_11ColOnMd:"pf-m-offset-11-col-on-md",offset_12ColOnMd:"pf-m-offset-12-col-on-md","1RowOnMd":"pf-m-1-row-on-md","2RowOnMd":"pf-m-2-row-on-md","3RowOnMd":"pf-m-3-row-on-md","4RowOnMd":"pf-m-4-row-on-md","5RowOnMd":"pf-m-5-row-on-md","6RowOnMd":"pf-m-6-row-on-md","7RowOnMd":"pf-m-7-row-on-md","8RowOnMd":"pf-m-8-row-on-md","9RowOnMd":"pf-m-9-row-on-md","10RowOnMd":"pf-m-10-row-on-md","11RowOnMd":"pf-m-11-row-on-md","12RowOnMd":"pf-m-12-row-on-md","1ColOnLg":"pf-m-1-col-on-lg","2ColOnLg":"pf-m-2-col-on-lg","3ColOnLg":"pf-m-3-col-on-lg","4ColOnLg":"pf-m-4-col-on-lg","5ColOnLg":"pf-m-5-col-on-lg","6ColOnLg":"pf-m-6-col-on-lg","7ColOnLg":"pf-m-7-col-on-lg","8ColOnLg":"pf-m-8-col-on-lg","9ColOnLg":"pf-m-9-col-on-lg","10ColOnLg":"pf-m-10-col-on-lg","11ColOnLg":"pf-m-11-col-on-lg","12ColOnLg":"pf-m-12-col-on-lg",offset_1ColOnLg:"pf-m-offset-1-col-on-lg",offset_2ColOnLg:"pf-m-offset-2-col-on-lg",offset_3ColOnLg:"pf-m-offset-3-col-on-lg",offset_4ColOnLg:"pf-m-offset-4-col-on-lg",offset_5ColOnLg:"pf-m-offset-5-col-on-lg",offset_6ColOnLg:"pf-m-offset-6-col-on-lg",offset_7ColOnLg:"pf-m-offset-7-col-on-lg",offset_8ColOnLg:"pf-m-offset-8-col-on-lg",offset_9ColOnLg:"pf-m-offset-9-col-on-lg",offset_10ColOnLg:"pf-m-offset-10-col-on-lg",offset_11ColOnLg:"pf-m-offset-11-col-on-lg",offset_12ColOnLg:"pf-m-offset-12-col-on-lg","1RowOnLg":"pf-m-1-row-on-lg","2RowOnLg":"pf-m-2-row-on-lg","3RowOnLg":"pf-m-3-row-on-lg","4RowOnLg":"pf-m-4-row-on-lg","5RowOnLg":"pf-m-5-row-on-lg","6RowOnLg":"pf-m-6-row-on-lg","7RowOnLg":"pf-m-7-row-on-lg","8RowOnLg":"pf-m-8-row-on-lg","9RowOnLg":"pf-m-9-row-on-lg","10RowOnLg":"pf-m-10-row-on-lg","11RowOnLg":"pf-m-11-row-on-lg","12RowOnLg":"pf-m-12-row-on-lg","1ColOnXl":"pf-m-1-col-on-xl","2ColOnXl":"pf-m-2-col-on-xl","3ColOnXl":"pf-m-3-col-on-xl","4ColOnXl":"pf-m-4-col-on-xl","5ColOnXl":"pf-m-5-col-on-xl","6ColOnXl":"pf-m-6-col-on-xl","7ColOnXl":"pf-m-7-col-on-xl","8ColOnXl":"pf-m-8-col-on-xl","9ColOnXl":"pf-m-9-col-on-xl","10ColOnXl":"pf-m-10-col-on-xl","11ColOnXl":"pf-m-11-col-on-xl","12ColOnXl":"pf-m-12-col-on-xl",offset_1ColOnXl:"pf-m-offset-1-col-on-xl",offset_2ColOnXl:"pf-m-offset-2-col-on-xl",offset_3ColOnXl:"pf-m-offset-3-col-on-xl",offset_4ColOnXl:"pf-m-offset-4-col-on-xl",offset_5ColOnXl:"pf-m-offset-5-col-on-xl",offset_6ColOnXl:"pf-m-offset-6-col-on-xl",offset_7ColOnXl:"pf-m-offset-7-col-on-xl",offset_8ColOnXl:"pf-m-offset-8-col-on-xl",offset_9ColOnXl:"pf-m-offset-9-col-on-xl",offset_10ColOnXl:"pf-m-offset-10-col-on-xl",offset_11ColOnXl:"pf-m-offset-11-col-on-xl",offset_12ColOnXl:"pf-m-offset-12-col-on-xl","1RowOnXl":"pf-m-1-row-on-xl","2RowOnXl":"pf-m-2-row-on-xl","3RowOnXl":"pf-m-3-row-on-xl","4RowOnXl":"pf-m-4-row-on-xl","5RowOnXl":"pf-m-5-row-on-xl","6RowOnXl":"pf-m-6-row-on-xl","7RowOnXl":"pf-m-7-row-on-xl","8RowOnXl":"pf-m-8-row-on-xl","9RowOnXl":"pf-m-9-row-on-xl","10RowOnXl":"pf-m-10-row-on-xl","11RowOnXl":"pf-m-11-row-on-xl","12RowOnXl":"pf-m-12-row-on-xl","1ColOn_2xl":"pf-m-1-col-on-2xl","2ColOn_2xl":"pf-m-2-col-on-2xl","3ColOn_2xl":"pf-m-3-col-on-2xl","4ColOn_2xl":"pf-m-4-col-on-2xl","5ColOn_2xl":"pf-m-5-col-on-2xl","6ColOn_2xl":"pf-m-6-col-on-2xl","7ColOn_2xl":"pf-m-7-col-on-2xl","8ColOn_2xl":"pf-m-8-col-on-2xl","9ColOn_2xl":"pf-m-9-col-on-2xl","10ColOn_2xl":"pf-m-10-col-on-2xl","11ColOn_2xl":"pf-m-11-col-on-2xl","12ColOn_2xl":"pf-m-12-col-on-2xl",offset_1ColOn_2xl:"pf-m-offset-1-col-on-2xl",offset_2ColOn_2xl:"pf-m-offset-2-col-on-2xl",offset_3ColOn_2xl:"pf-m-offset-3-col-on-2xl",offset_4ColOn_2xl:"pf-m-offset-4-col-on-2xl",offset_5ColOn_2xl:"pf-m-offset-5-col-on-2xl",offset_6ColOn_2xl:"pf-m-offset-6-col-on-2xl",offset_7ColOn_2xl:"pf-m-offset-7-col-on-2xl",offset_8ColOn_2xl:"pf-m-offset-8-col-on-2xl",offset_9ColOn_2xl:"pf-m-offset-9-col-on-2xl",offset_10ColOn_2xl:"pf-m-offset-10-col-on-2xl",offset_11ColOn_2xl:"pf-m-offset-11-col-on-2xl",offset_12ColOn_2xl:"pf-m-offset-12-col-on-2xl","1RowOn_2xl":"pf-m-1-row-on-2xl","2RowOn_2xl":"pf-m-2-row-on-2xl","3RowOn_2xl":"pf-m-3-row-on-2xl","4RowOn_2xl":"pf-m-4-row-on-2xl","5RowOn_2xl":"pf-m-5-row-on-2xl","6RowOn_2xl":"pf-m-6-row-on-2xl","7RowOn_2xl":"pf-m-7-row-on-2xl","8RowOn_2xl":"pf-m-8-row-on-2xl","9RowOn_2xl":"pf-m-9-row-on-2xl","10RowOn_2xl":"pf-m-10-row-on-2xl","11RowOn_2xl":"pf-m-11-row-on-2xl","12RowOn_2xl":"pf-m-12-row-on-2xl",gutter:"pf-m-gutter"}}},24936:(l,o)=>{o.__esModule=!0,o.l_grid_item_Order={name:"--pf-l-grid--item--Order",value:"0",var:"var(--pf-l-grid--item--Order)"},o.default=o.l_grid_item_Order},72466:(l,o,n)=>{n.d(o,{Z:()=>e});var f=n(43297);const e=n.n(f)().createContext("light")},86350:(l,o,n)=>{n.d(o,{Z:()=>b});var f=n(87462),e=n(45987),m=n(93433),t=n(4942),a=n(15671),c=n(43144),s=n(60136),r=n(82963),p=n(61120),_=n(43297),d=n.n(_),O=n(45697),i=n.n(O),C=n(94184),g=n.n(C),w=n(28216),u=n(72466);function x(l,o){var n=Object.keys(l);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(l);o&&(f=f.filter((function(o){return Object.getOwnPropertyDescriptor(l,o).enumerable}))),n.push.apply(n,f)}return n}function R(l){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?x(Object(n),!0).forEach((function(o){(0,t.Z)(l,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(o){Object.defineProperty(l,o,Object.getOwnPropertyDescriptor(n,o))}))}return l}var h=function(l){(0,s.Z)(O,l);var o,n,_=(o=O,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(l){return!1}}(),function(){var l,f=(0,p.Z)(o);if(n){var e=(0,p.Z)(this).constructor;l=Reflect.construct(f,arguments,e)}else l=f.apply(this,arguments);return(0,r.Z)(this,l)});function O(){return(0,a.Z)(this,O),_.apply(this,arguments)}return(0,c.Z)(O,[{key:"calculateLocation",value:function(){var l=this.props,o=l.path,n=l.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var f=insights.chrome.$internal.store.getState();if(o&&f)return o.split("/").reduce((function(l,o){return 0===o.indexOf(":")?l.dynamic=R(R({},l.dynamic),{},(0,t.Z)({},"data-".concat(o.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),n[o.substr(1)])):l.staticPart=[].concat((0,m.Z)(l.staticPart),(0,m.Z)(""!==o?[o]:[])),l}),{staticPart:[f.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var l=this.props,o=l.className,n=l.children,m=(l.params,l.path,(0,e.Z)(l,["className","children","params","path"])),a=this.calculateLocation(),c=a.dynamic,s=a.staticPart;return d().createElement(u.Z.Consumer,null,(function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",e=g()((0,t.Z)({},"pf-m-".concat(l),"dark"===l));return{dark:d().createElement("section",(0,f.Z)({},m,c,{"page-type":s.join("-"),className:"".concat(g()(o,"pf-l-page__main-section pf-c-page__main-section")," ").concat(e)}),d().Children.map(n,(function(l){return d().cloneElement(l,{className:"pf-m-dark"})}))),light:d().createElement("section",(0,f.Z)({},m,c,{"page-type":s.join("-"),className:"".concat(g()(o,"pf-l-page__main-section pf-c-page__main-section"))}),n)}[l]}))}}]),O}(_.Component);h.propTypes={className:i().string,children:i().any.isRequired,params:i().any,path:i().string};const b=(0,w.$j)((function(l){var o=l.routerData;return{params:o&&o.params,path:o&&o.path}}),(function(){return{}}))(h)},48716:(l,o,n)=>{n.d(o,{Z:()=>O});var f=n(87462),e=n(4942),m=n(45987),t=n(43297),a=n.n(t),c=n(45697),s=n.n(c),r=n(94184),p=n.n(r),_=n(72466),d=function(l){var o=l.className,n=l.children,t=(0,m.Z)(l,["className","children"]),c=p()(o,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return a().createElement(_.Z.Consumer,null,(function(){var l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",o=p()((0,e.Z)({},"pf-m-".concat(l,"-200"),"dark"===l),(0,e.Z)({},"pf-m-light","light"===l));return a().createElement("section",(0,f.Z)({},t,{className:"".concat(c," ").concat(o),"widget-type":"InsightsPageHeader"}),n)}))};const O=d;d.propTypes={children:s().any.isRequired,className:s().string}},39173:(l,o,n)=>{n.d(o,{Z:()=>p});var f=n(43297),e=n.n(f),m=n(45697),t=n.n(m),a=n(94184),c=n.n(a),s=n(60485),r=function(l){var o=l.className,n=l.title,f=c()(o);return e().createElement(s.D,{headingLevel:"h1",size:"2xl",className:f,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};const p=r;r.propTypes={title:t().node.isRequired,className:t().string}}}]);
//# sourceMappingURL=../sourcemaps/96.c5ee0123d06639b0970d68f921bb59e0.js.map