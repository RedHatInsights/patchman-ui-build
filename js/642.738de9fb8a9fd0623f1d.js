(self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman=self.webpackChunk_redhat_cloud_services_frontend_components_inventory_patchman||[]).push([[642],{49642:(e,t,a)=>{"use strict";a.d(t,{Z:()=>A});var n=a(48716),o=a(39173),r=a(45697),c=a.n(r),i=a(77865),s=a.n(i),l=a(85991),m=a(49489),d=a(334),p=function(e){var t=e.items,a=e.headerOUIA;return s().createElement(l.a,null,t.filter(Boolean).map((function(e){return s().createElement(m.g,{key:e.title,isActive:e.isActive},e.to&&s().createElement(d.Link,{to:e.to,"data-ouia-component-type":"".concat(a,"-breadcrumb"),"data-ouia-component-id":"breadcrumb-to-".concat(e.title)},e.title)||e.title)})))};p.propTypes={items:c().arrayOf(c().shape({isActive:c().bool,to:c().string,title:c().string})),headerOUIA:c().string};const u=p;var h=a(82819),y=a(98378),b=a(60076),v=function(e){var t=e.history,a=e.headerOUIA;return s().createElement(y.mQ,{onSelect:function(e,a){t.push(a)},activeKey:t.location.pathname,className:"patchman-tabs"},s().createElement(h.O,{eventKey:b.H.advisories.to,title:b.H.advisories.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(b.H.advisories.title)}),s().createElement(h.O,{eventKey:b.H.systems.to,title:b.H.systems.title,"data-ouia-component-type":"".concat(a,"-tab"),"data-ouia-component-id":"".concat(a,"-tab-").concat(b.H.systems.title)}))};v.propTypes={history:c().object,headerOUIA:c().string};const _=(0,d.withRouter)(v);var f=function(e){var t=e.title,a=e.showTabs,r=e.breadcrumbs,c=e.children,i=e.headerOUIA;return s().createElement(s().Fragment,null,s().createElement(n.Z,{"data-ouia-component-type":"".concat(i,"-page-header")},r&&s().createElement(u,{items:r,headerOUIA:i}),s().createElement(o.Z,{title:t}),c),a&&s().createElement(_,{headerOUIA:i}))};f.propTypes={title:c().string,showTabs:c().bool,breadcrumbs:c().array,children:c().any,headerOUIA:c().string};const A=f}}]);
//# sourceMappingURL=../sourcemaps/642.7187cda24f5c1c2ac6f9.js.map