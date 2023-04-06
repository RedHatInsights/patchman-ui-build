"use strict";(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[3962],{78236:(e,o)=>{o.__esModule=!0,o.global_breakpoint_md={name:"--pf-global--breakpoint--md",value:"768px",var:"var(--pf-global--breakpoint--md)"},o.default=o.global_breakpoint_md},3962:(e,o,n)=>{n.d(o,{Z:()=>A});var t=n(85893),r=n(43297),i=n.n(r),l=n(21602),a=n(56989),c=n(60271),s=function(){return s=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},s.apply(this,arguments)},d=function(e,o,n){if(n||2===arguments.length)for(var t,r=0,i=o.length;r<i;r++)!t&&r in o||(t||(t=Array.prototype.slice.call(o,0,r)),t[r]=o[r]);return e.concat(t||Array.prototype.slice.call(o))};const u=function(e){var o,n=e.extraItems,c=void 0===n?[]:n,u=e.onSelect,p=void 0===u?function(){}:u,f=e.isDisabled,g=e.tooltipText,b=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n}(e,["extraItems","onSelect","isDisabled","tooltipText"]),h=(0,r.useState)(!1),m=h[0],v=h[1];return(0,t.jsx)(i().Fragment,{children:(o=(0,t.jsx)(l.Dropdown,s({isPlain:!0},b,{onSelect:function(){return v((function(e){return!e}))},toggle:(0,t.jsx)(l.DropdownToggle,s({"aria-label":"Export",toggleIndicator:null,onToggle:function(e){return v(e)},isDisabled:f,ouiaId:"Export"},{children:(0,t.jsx)(a.ExportIcon,{size:"sm"})})),isOpen:m,ouiaId:"Export",dropdownItems:d([(0,t.jsx)(l.DropdownItem,s({ouiaId:"DownloadCSV",component:"button",onClick:function(e){return p(e,"csv")},isDisabled:f},{children:"Export to CSV"}),"download-csv"),(0,t.jsx)(l.DropdownItem,s({ouiaId:"DownloadJSON",component:"button",onClick:function(e){return p(e,"json")},isDisabled:f},{children:"Export to JSON"}),"download-json")],c,!0)})),(0,t.jsx)(i().Fragment,{children:g?(0,t.jsx)(l.Tooltip,s({content:g},{children:o})):o}))})};var p=n(94184),f=n.n(p),g=function(){return g=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},g.apply(this,arguments)},b=function(e,o,n){if(n||2===arguments.length)for(var t,r=0,i=o.length;r<i;r++)!t&&r in o||(t||(t=Array.prototype.slice.call(o,0,r)),t[r]=o[r]);return e.concat(t||Array.prototype.slice.call(o))};function h(e){return void 0!==e.label}var m=function(e,o){var n,t="object"==typeof e&&null!==typeof e&&"function"==typeof(null==e?void 0:e.onClick)?function(n){return null==e?void 0:e.onClick(n,e,o)}:void 0;return g(g({},null==e?void 0:e.props),{onClick:t,component:(null===(n=null==e?void 0:e.props)||void 0===n?void 0:n.component)||(i().isValidElement(e.label||e)?"div":"button"),children:"object"==typeof e&&null!==typeof e?null==e?void 0:e.label:e})};const v=function(e){var o,n=e.actions,a=void 0===n?[]:n,c=e.overflowActions,s=void 0===c?[]:c,d=e.onSelect,p=void 0===d?function(){}:d,v=e.dropdownProps,y=void 0===v?{}:v,x=e.kebabToggleProps,j=e.exportConfig,C=(0,r.useState)(!1),I=C[0],w=C[1],S=function(e){return w(e)},k=a[0],O=a.slice(1),_=b(b(b(b([],k?[(0,t.jsx)(l.DropdownItem,g({},m(k,"first-action"),{className:f()("ins-c-primary-toolbar__first-action",h(k)?null===(o=null==k?void 0:k.props)||void 0===o?void 0:o.className:void 0)}),"first-action")]:[],!0),O.map((function(e,o){var n;return(0,t.jsx)(l.DropdownItem,g({},m(e,o)),(null==e?void 0:e.key)||(null===(n=null==e?void 0:e.props)||void 0===n?void 0:n.key)||o)})),!0),a.length>0&&s.length>0?[(0,t.jsx)(l.DropdownSeparator,{className:"ins-c-primary-toolbar__overflow-actions-separator"},"separator")]:[],!0),s.map((function(e,o){return function(e,o){var n=e;return(0,r.createElement)(l.DropdownItem,g({},n.props,{className:"ins-c-primary-toolbar__overflow-actions",key:n.value||n.key||"".concat(o,"-overflow"),component:n.props&&n.props.component||i().isValidElement(n.label||e)?"div":"button",onClick:function(e){return n.onClick&&n.onClick(e,n,o)}}),n.label||e)}(e,o)})),!0);return(0,t.jsxs)(r.Fragment,{children:[k&&(0,t.jsx)(l.ToolbarItem,g({className:"ins-c-primary-toolbar__first-action pf-m-spacer-sm"},{children:h(k)?(0,t.jsx)(l.Button,g({ouiaId:"".concat(k.label)},k.props,{onClick:k.onClick||k.props&&k.props.onClick||void 0},{children:k.label})):k})),j&&(j.extraItems||j.onSelect)&&(0,t.jsx)(l.ToolbarItem,g({className:"pf-m-spacer-sm"},{children:(0,t.jsx)(u,g({},j))})),(a&&(null==a?void 0:a.length)>0||s.length>0)&&(0,t.jsx)(l.ToolbarItem,g({className:"".concat(a.length<=1?"ins-m-actions--empty":""," ins-c-primary-toolbar__actions pf-m-spacer-sm")},{children:(0,t.jsx)(l.Dropdown,g({},y,{isOpen:I,isPlain:!0,onSelect:function(){for(var e=[],o=0;o<arguments.length;o++)e[o]=arguments[o];p&&p.apply(void 0,e),S(!1)},ouiaId:"Actions",toggle:(0,t.jsx)(l.KebabToggle,g({},x,{onToggle:function(e){S(e)}})),dropdownItems:_}))}))]})};var y=function(){return y=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},y.apply(this,arguments)},x=function(e,o,n){if(n||2===arguments.length)for(var t,r=0,i=o.length;r<i;r++)!t&&r in o||(t||(t=Array.prototype.slice.call(o,0,r)),t[r]=o[r]);return e.concat(t||Array.prototype.slice.call(o))};const j=function(e){var o=e.id,n=e.isDisabled,i=void 0!==n&&n,a=e.items,c=void 0===a?[]:a,s=e.onSelect,d=void 0===s?function(){}:s,u=e.checked,p=void 0!==u&&u,g=e.toggleProps,b=e.count,h=e.className,m=void 0===h?"":h,v=e.ouiaId,j=e.ouiaSafe,C=void 0===j||j,I=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n}(e,["id","isDisabled","items","onSelect","checked","toggleProps","count","className","ouiaId","ouiaSafe"]),w=(0,r.useState)(!1),S=w[0],k=w[1],O=(0,r.useRef)(!1).current,_=(0,r.useRef)((0,l.getDefaultOUIAId)("RHI/BulkSelect")).current,D=function(e){return k(e)},T=void 0!==v?v:_;return(0,t.jsx)(r.Fragment,{children:c&&c.length>0?(0,t.jsx)(l.Dropdown,y({onSelect:function(){return D(!1)}},I,{className:f()(m,"ins-c-bulk-select"),ouiaId:T,ouiaSafe:C,toggle:(0,t.jsx)(l.DropdownToggle,y({},g,{isDisabled:i,ouiaId:T,splitButtonItems:[(0,t.jsx)(r.Fragment,{children:O?(0,t.jsx)(l.DropdownToggleCheckbox,{id:o?"".concat(o,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:d,checked:p,ouiaId:T}):(0,t.jsx)(l.DropdownToggleCheckbox,y({id:o?"".concat(o,"-toggle-checkbox"):"toggle-checkbox","aria-label":"Select all",onChange:d,isChecked:p,ouiaId:T},{children:b?"".concat(b," selected"):""}))},"split-checkbox")],onToggle:D})),isOpen:S,dropdownItems:x(x([],void 0!==b&&b>0?[(0,t.jsxs)(l.DropdownItem,y({isDisabled:!0,className:f()({"ins-c-bulk-select__selected":!O})},{children:[b," Selected"]}),"count")]:[],!0),c.map((function(e,o){return(0,t.jsx)(l.DropdownItem,y({component:"button",ouiaId:"".concat(T,"-").concat(e.key||o),onClick:function(n){return e.onClick&&e.onClick(n,e,o)}},null==e?void 0:e.props,{children:e.title}),e.key||o)})),!0)})):(0,t.jsx)(l.Checkbox,y({},I,{"aria-label":"Select all",className:f()(m,"ins-c-bulk-select"),id:"".concat(o,"-checkbox"),isChecked:p,onChange:d}))})};var C=n(78236),I=n(68097),w=n(83237),S=(n(74131),function(){return S=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},S.apply(this,arguments)});const k=function(e){var o=e.hideLabel,n=void 0!==o&&o,i=e.id,c=void 0===i?"default-input":i,s=e.isDisabled,d=void 0!==s&&s,u=e.items,p=void 0===u?[]:u,g=e.onChange,b=e.placeholder,h=e.useMobileLayout,m=void 0!==h&&h,v=e.value,y=void 0===v?"":v,x=e.innerRef,j=parseInt(C.default.value.replace("px","")),k=function(e){return e<=j},O=(0,r.useState)(!1),_=O[0],D=O[1],T=(0,r.useState)(),E=T[0],P=T[1],N=(0,r.useState)(k(window.innerWidth)),A=N[0],B=N[1],F=(0,r.useRef)((function(e){B(k((null==e?void 0:e.target).innerWidth))}));(0,r.useEffect)((function(){return m||console.warn('The prop "useMobileLayout" is set to false. You are using an outdated mobile layout of conditional filter.\n    Please switch to new layout by adding "useMobileLayout={true}" prop to the PrimaryToolbar or ConditionalFilter directly.\n    The new mobile layout will become the default in next minor release.'),window.addEventListener("resize",F.current),function(){F.current&&window.removeEventListener("resize",F.current)}}),[]);var V=g?y:E,R=p&&p.length&&(p.find((function(e,o){return e.value===V||o===Number(V)}))||p[0]),L=g||function(e,o){return P(o)},M=m&&A,z=function(e){return e[0].toUpperCase()+e.substring(1)},G=R&&(w.w[R.type]||w.w.text),U=m&&A?function(e){return(0,t.jsx)(l.ToolbarToggleGroup,S({},e,{breakpoint:"md",toggleIcon:(0,t.jsx)(a.FilterIcon,{})}))}:r.Fragment;return(0,t.jsxs)(U,{children:[m&&A&&(0,t.jsx)(l.ToolbarGroup,S({className:"ins-c-conditional-filter mobile"},{children:p.map((function(e,o){var n=e&&(w.w[e.type]||w.w.text);return(0,t.jsx)(l.ToolbarItem,{children:(0,t.jsx)(n,S({},e.type!==w.Y.custom&&{placeholder:b||e.placeholder||"Filter by ".concat(e.label),id:e.filterValues?e.filterValues.id:V?String(V):void 0,innerRef:x},e.filterValues))},o)}))})),!M&&(0,t.jsx)(r.Fragment,{children:!p||p&&p.length<=0?(0,t.jsx)("div",S({className:f()("ins-c-conditional-filter",{desktop:m})},{children:(0,t.jsx)(I.Z,{innerRef:x,id:c,isDisabled:d,onChange:function(e){return L(e,e.target.value)},placeholder:b,value:V?String(V):void 0,"widget-type":"InsightsInput"})})):(0,t.jsxs)(l.Split,S({className:f()("ins-c-conditional-filter",{desktop:m})},{children:[p.length>1&&(0,t.jsx)(l.SplitItem,{children:(0,t.jsx)(l.Dropdown,{ref:x,className:"ins-c-conditional-filter__group",onSelect:function(){return D(!1)},isOpen:_,ouiaId:"ConditionalFilter",toggle:(0,t.jsxs)(l.DropdownToggle,S({"aria-label":"Conditional filter",onToggle:D,isDisabled:d,className:n?"ins-c-conditional-filter__no-label":"",ouiaId:"ConditionalFilter"},{children:[(0,t.jsx)(a.FilterIcon,{size:"sm"}),!n&&(0,t.jsx)("span",S({className:"ins-c-conditional-filter__value-selector"},{children:R&&z(String(R.label))}))]})),dropdownItems:p.map((function(e,o){return(0,t.jsx)(l.DropdownItem,S({component:"button",ouiaId:String(e.label),onClick:function(n){return L(n,e.value||o)},isHovered:R.label===e.label},{children:z(String(e.label))}),e.id?"".concat(e.id,"-dropdown"):o)}))})}),G&&(0,t.jsx)(l.SplitItem,S({isFilled:!0},{children:(0,t.jsx)(G,S({},R.type!==w.Y.custom&&{placeholder:b||R.placeholder||"Filter by ".concat(R.label),id:R.filterValues&&R.filterValues.id||V?String(V):void 0},R.filterValues))}))]}))})]})};var O=function(){return O=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},O.apply(this,arguments)};function _(e){return Object.prototype.hasOwnProperty.call(e,"category")}function D(e){return!_(e)}const T=function(e){var o=e.className,n=e.filters,r=void 0===n?[]:n,i=e.onDelete,a=void 0===i?function(){}:i,c=e.deleteTitle,s=void 0===c?"Clear filters":c,d=e.showDeleteButton,u=e.onDeleteGroup,p=r.filter(_),g=p.map((function(e,o){return(0,t.jsx)(l.ChipGroup,O({categoryName:String(e.category)||" "},u&&{isClosable:!0,onClick:function(n){n.stopPropagation(),u(n,[e],p.filter((function(e,n){return n!==o})))}},{children:e.chips.map((function(o){return(0,t.jsxs)(l.Chip,O({onClick:function(n){n.stopPropagation(),a(n,[O(O({},e),{chips:[o]})])}},{children:[o.name,o.count&&(0,t.jsx)(l.Badge,O({isRead:o.isRead},{children:o.count}),"chip_badge_".concat(o.id))]}),o.name)}))}),"group_".concat(e.category))})),b=r.filter(D);return(0,t.jsxs)("span",O({className:f()(o,"ins-c-chip-filters")},{children:[g,b&&b.map((function(e){return(0,t.jsx)(l.ChipGroup,{children:(0,t.jsxs)(l.Chip,O({onClick:function(o){o.stopPropagation(),a(o,[e])}},{children:[e.name,e.count&&(0,t.jsx)(l.Badge,O({isRead:e.isRead},{children:e.count}),"chip_badge_".concat(e.id))]}))},"group_plain_chip_".concat(e.name))})),(!0===d||void 0===d&&r.length>0)&&(0,t.jsx)(l.Button,O({variant:"link",ouiaId:"ClearFilters",onClick:function(e){return a(e,r,!0)}},{children:s}))]}))};var E=function(){return E=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},E.apply(this,arguments)};const P=function(e){var o=e.direction,n=void 0===o?c.SortByDirection.asc:o,r=e.onSortChange,i=void 0===r?function(){}:r;return(0,t.jsx)(l.Button,E({variant:"plain",onClick:function(e){return i(e,function(e){return e===c.SortByDirection.asc?c.SortByDirection.desc:c.SortByDirection.asc}(n))}},{children:n===c.SortByDirection.asc?(0,t.jsx)(a.SortAmountUpIcon,{size:"sm"}):(0,t.jsx)(a.SortAmountDownIcon,{size:"sm"})}))};var N=function(){return N=Object.assign||function(e){for(var o,n=1,t=arguments.length;n<t;n++)for(var r in o=arguments[n])Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r]);return e},N.apply(this,arguments)};const A=function(e){var o,n=e.id,r=e.className,s=e.toggleIsExpanded,d=void 0===s?function(){}:s,u=e.bulkSelect,p=e.filterConfig,f=e.dedicatedAction,g=e.actionsConfig,b=e.sortByConfig,h=e.pagination,m=e.activeFiltersConfig,y=e.children,x=e.exportConfig,C=e.expandAll,I=e.useMobileLayout,w=function(e,o){var n={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&o.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(t=Object.getOwnPropertySymbols(e);r<t.length;r++)o.indexOf(t[r])<0&&Object.prototype.propertyIsEnumerable.call(e,t[r])&&(n[t[r]]=e[t[r]])}return n}(e,["id","className","toggleIsExpanded","bulkSelect","filterConfig","dedicatedAction","actionsConfig","sortByConfig","pagination","activeFiltersConfig","children","exportConfig","expandAll","useMobileLayout"]),S=function(e,o,n){if(n||2===arguments.length)for(var t,r=0,i=o.length;r<i;r++)!t&&r in o||(t||(t=Array.prototype.slice.call(o,0,r)),t[r]=o[r]);return e.concat(t||Array.prototype.slice.call(o))}([],b?[{label:"Sort order ASC",props:{isDisabled:b.direction===c.SortByDirection.asc},onClick:function(e){return b.onSortChange&&b.onSortChange(e,c.SortByDirection.asc)}},{label:"Sort order DESC",props:{isDisabled:b.direction===c.SortByDirection.desc},onClick:function(e){return b.onSortChange&&b.onSortChange(e,c.SortByDirection.desc)}}]:[],!0);return(0,t.jsxs)(l.Toolbar,N({},w,{className:"".concat(r||""," ins-c-primary-toolbar"),toggleIsExpanded:d,id:n?"".concat(n):"ins-primary-data-toolbar",ouiaId:"PrimaryToolbar"},{children:[(0,t.jsxs)(l.ToolbarContent,{children:[(C||u||p||f)&&(0,t.jsxs)(l.ToolbarGroup,N({className:"ins-c-primary-toolbar__group-filter pf-m-spacer-md pf-m-space-items-lg",variant:"filter-group"},{children:[C&&(0,t.jsx)(l.ToolbarItem,{children:(o=C,i().isValidElement(o)?C:(0,t.jsx)(l.Button,N({},C.buttonProps,{variant:"plain","aria-label":"".concat(C.isAllExpanded?"Collapse":"Expand"," all"),onClick:function(e){return C.onClick(e,!C.isAllExpanded)},ouiaId:"ExpandCollapseAll",isDisabled:C.isDisabled},{children:(0,t.jsx)(l.ToolbarExpandIconWrapper,{children:C.isAllExpanded?(0,t.jsx)(a.AngleDownIcon,{}):(0,t.jsx)(a.AngleRightIcon,{})})})))}),u&&(0,t.jsx)(l.ToolbarItem,{children:i().isValidElement(u)?u:(0,t.jsx)(j,N({ouiaId:"BulkSelect"},u))}),p&&(0,t.jsx)(l.ToolbarItem,N({className:"ins-c-primary-toolbar__filter"},{children:i().isValidElement(p)?p:(0,t.jsx)(k,N({useMobileLayout:I},p))})),f&&(0,t.jsx)(l.ToolbarItem,{children:f})]})),i().isValidElement(g)?g:(g&&g.actions&&g.actions.length>0||b||x)&&(0,t.jsx)(v,N({},g||{},{exportConfig:x,overflowActions:S})),b&&(0,t.jsx)(l.ToolbarItem,N({className:"ins-c-primary-toolbar__sort-by"},{children:i().isValidElement(b)?b:(0,t.jsx)(P,N({},b))})),y,h&&(0,t.jsx)(l.ToolbarItem,N({className:"ins-c-primary-toolbar__pagination"},{children:i().isValidElement(h)?h:(0,t.jsx)(l.Pagination,N({isCompact:!0,ouiaId:"CompactPagination"},h))}))]}),m&&i().isValidElement(m)?(0,t.jsx)(l.ToolbarContent,{children:(0,t.jsx)(l.ToolbarItem,{children:m})}):void 0!==(null==m?void 0:m.filters)&&(m.filters.length>0||!0===m.showDeleteButton)&&(0,t.jsx)(l.ToolbarContent,{children:(0,t.jsx)(l.ToolbarItem,{children:(0,t.jsx)(T,N({},m))})})]}))}}}]);
//# sourceMappingURL=../sourcemaps/3962.2197c60e82d5605ab0d8bbc854af8b26.js.map