!function(n,e){"object"==typeof exports&&"object"==typeof module?module.exports=e(require("ng.common"),require("shared"),require("ng.core")):"function"==typeof define&&define.amd?define(["ng.common","shared","ng.core"],e):"object"==typeof exports?exports.plugin1=e(require("ng.common"),require("shared"),require("ng.core")):n.plugin1=e(n["ng.common"],n.shared,n["ng.core"])}("undefined"!=typeof self?self:this,function(n,e,l){return function(n){var e={};function l(t){if(e[t])return e[t].exports;var u=e[t]={i:t,l:!1,exports:{}};return n[t].call(u.exports,u,u.exports,l),u.l=!0,u.exports}return l.m=n,l.c=e,l.d=function(n,e,t){l.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},l.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},l.t=function(n,e){if(1&e&&(n=l(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(l.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var u in n)l.d(t,u,(function(e){return n[e]}).bind(null,u));return t},l.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return l.d(e,"a",e),e},l.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},l.p="",l(l.s=0)}({0:function(n,e,l){n.exports=l("zUnb")},"0S4P":function(e,l){e.exports=n},"8c+k":function(n,e,l){"use strict";var t=l("vOrQ"),u=l("0S4P"),o=l("cfyg"),r=l("cfyg"),i=l("Xj3A"),d=t.\u0275crt({encapsulation:2,styles:[],data:{}});function c(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"p",[],null,null,null,null,null)),(n()(),t.\u0275ted(-1,null,["Hidden text"]))],null,null)}function a(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"h3",[],null,null,null,null,null)),(n()(),t.\u0275ted(-1,null,["Plugin 1"])),(n()(),t.\u0275and(16777216,null,null,1,null,c)),t.\u0275did(3,16384,null,0,u.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t.\u0275eld(4,0,null,null,2,"button",[["sharedBtn",""]],null,[[null,"click"]],function(n,e,l){var t=!0,u=n.component;return"click"===e&&(t=0!=(u.x=!u.x)&&t),t},o.View_\u0275a_0,o.RenderType_\u0275a)),t.\u0275did(5,49152,null,0,r.\u0275a,[],null,null),(n()(),t.\u0275ted(-1,0,["Shared Button Example"])),(n()(),t.\u0275eld(7,0,null,null,10,"shared-tabs",[],null,null,null,o.View_\u0275c_0,o.RenderType_\u0275c)),t.\u0275did(8,49152,null,0,r.\u0275c,[],null,null),(n()(),t.\u0275eld(9,0,null,0,2,"shared-tab",[["title","Tab 1"]],[[8,"hidden",0]],null,null,o.View_\u0275b_0,o.RenderType_\u0275b)),t.\u0275did(10,49152,null,0,r.\u0275b,[r.\u0275c],{title:[0,"title"]},null),(n()(),t.\u0275ted(-1,0,[" Tab 1 contents "])),(n()(),t.\u0275eld(12,0,null,0,2,"shared-tab",[["title","Tab 2"]],[[8,"hidden",0]],null,null,o.View_\u0275b_0,o.RenderType_\u0275b)),t.\u0275did(13,49152,null,0,r.\u0275b,[r.\u0275c],{title:[0,"title"]},null),(n()(),t.\u0275ted(-1,0,[" Tab 2 contents "])),(n()(),t.\u0275eld(15,0,null,0,2,"shared-tab",[["title","Tab 3"]],[[8,"hidden",0]],null,null,o.View_\u0275b_0,o.RenderType_\u0275b)),t.\u0275did(16,49152,null,0,r.\u0275b,[r.\u0275c],{title:[0,"title"]},null),(n()(),t.\u0275ted(-1,0,[" Tab 3 contents "]))],function(n,e){n(e,3,0,e.component.x),n(e,10,0,"Tab 1"),n(e,13,0,"Tab 2"),n(e,16,0,"Tab 3")},function(n,e){n(e,9,0,t.\u0275nov(e,10).hidden),n(e,12,0,t.\u0275nov(e,13).hidden),n(e,15,0,t.\u0275nov(e,16).hidden)})}function p(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"app-plugin-1",[],null,null,null,a,d)),t.\u0275did(1,49152,null,0,i.Plugin1Component,[],null,null)],null,null)}e.RenderType_Plugin1Component=d,e.View_Plugin1Component_0=a,e.View_Plugin1Component_Host_0=p,e.Plugin1ComponentNgFactory=t.\u0275ccf("app-plugin-1",i.Plugin1Component,p,{},{},[])},BTgO:function(n,e,l){"use strict";var t=l("vOrQ"),u=l("xDiq"),o=l("8c+k"),r=l("Gw3y"),i=l("0S4P"),d=l("cfyg");e.Plugin1ModuleNgFactory=t.\u0275cmf(u.Plugin1Module,[],function(n){return t.\u0275mod([t.\u0275mpd(512,t.ComponentFactoryResolver,t.\u0275CodegenComponentFactoryResolver,[[8,[o.Plugin1ComponentNgFactory,r.SecondComponentNgFactory]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t.\u0275mpd(4608,i.NgLocalization,i.NgLocaleLocalization,[t.LOCALE_ID,[2,i.\u0275angular_packages_common_common_a]]),t.\u0275mpd(1073742336,i.CommonModule,i.CommonModule,[]),t.\u0275mpd(1073742336,d.SharedModule,d.SharedModule,[]),t.\u0275mpd(1073742336,u.Plugin1Module,u.Plugin1Module,[])])})},Gw3y:function(n,e,l){"use strict";var t=l("vOrQ"),u=l("z9Rq"),o=t.\u0275crt({encapsulation:2,styles:[],data:{}});function r(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),t.\u0275ted(-1,null,["Your ad could be here..."]))],null,null)}function i(n){return t.\u0275vid(0,[(n()(),t.\u0275eld(0,0,null,null,1,"app-plugin-1-second",[],null,null,null,r,o)),t.\u0275did(1,49152,null,0,u.SecondComponent,[],null,null)],null,null)}e.RenderType_SecondComponent=o,e.View_SecondComponent_0=r,e.View_SecondComponent_Host_0=i,e.SecondComponentNgFactory=t.\u0275ccf("app-plugin-1-second",u.SecondComponent,i,{},{},[])},Xj3A:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.Plugin1Component=function(){return function(){this.x=!1}}()},cfyg:function(n,l){n.exports=e},vOrQ:function(n,e){n.exports=l},xDiq:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=l("Xj3A"),u=l("z9Rq");e.Plugin1Module=function(){function n(){}return n.entry=t.Plugin1Component,n.component2=u.SecondComponent,n}()},z9Rq:function(n,e,l){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SecondComponent=function(){return function(){}}()},zUnb:function(n,e,l){"use strict";function t(n){for(var l in n)e.hasOwnProperty(l)||(e[l]=n[l])}Object.defineProperty(e,"__esModule",{value:!0}),t(l("xDiq")),t(l("BTgO"));var u=l("BTgO");e.default=u.Plugin1ModuleNgFactory}})});