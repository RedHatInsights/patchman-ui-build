(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[905],{83905:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var l=n(22122),o=n(28481),s=n(77865),a=n.n(s),i=n(13784),r=n(44612),c=n(80887),u=n(77221),f=n(82553),d=n(32132),h=n(30893);const v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,n=a().useState(!1),s=(0,o.Z)(n,2),v=s[0],p=s[1],m=a().useState(10),_=(0,o.Z)(m,2),g=_[0],b=_[1],y=i.nW.slice().reverse(),k=e.os,V="string"==typeof k&&k.split(",")||[],Z=function(e,n){if(k&&!k.includes(n))t({filter:{os:"".concat(V.join(","),",").concat(n)}});else if(k&&k.includes(n)){var l=V.filter((function(e){return e!==n}));t({filter:{os:l.length>0&&"".concat(l.join(","))||void 0}})}else t({filter:{os:""!==n&&n||void 0}})},x=function(e){p(e)},O=function(){b(y.length)};return{type:r.Y.custom,label:d.N.formatMessage(h.Z.labelsFiltersOsVersion),value:"custom",filterValues:{children:a().createElement(c.P,(0,l.Z)({variant:f.SelectVariant.checkbox,typeAheadAriaLabel:d.N.formatMessage(h.Z.labelsFiltersOsVersionPlaceholder),onToggle:x,onSelect:Z,selections:V,isOpen:v,"aria-labelledby":"patch-os-version-filter",placeholderText:d.N.formatMessage(h.Z.labelsFiltersOsVersionPlaceholder)},g<y.length&&{loadingVariant:{text:"View more",onClick:O}},{style:{maxHeight:"400px",overflow:"auto"}}),y.slice(0,g).map((function(e,t){return a().createElement(u.SelectOption,{key:t,value:e.value})})))}}}}}]);
//# sourceMappingURL=../sourcemaps/905.3282faee8065030d27f1.js.map