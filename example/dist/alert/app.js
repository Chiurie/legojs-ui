(function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:false};e[r].call(o.exports,o,o.exports,n);o.loaded=true;return o.exports}n.m=e;n.c=t;n.p="./";return n(0)})({0:function(e,t,n){"use strict";var r=n(1);var o=f(r);var a=n(2);var i=f(a);var l=n(96);var c=f(l);var s=n(4);var u=f(s);function f(e){return e&&e.__esModule?e:{default:e}}var p=void 0;function d(){if(!p){p=HBY.create({view:o.default,data:{currentTab:0}})}}function v(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;p.data.currentTab=e||0;var t=[i.default,c.default];HBY.create({el:"#pageContent",view:t[e]})}HBY.router({"/alert":[d,v],"/alert/:tabs":[d,v],"/alert/list/ff":function e(){HBY.create({view:c.default,data:{list:[{first:"home",last:"99999"},{first:"test",last:"mmmmm"}]},components:[{el:"#home",view:i.default,data:[{first:"home2",last:"999992"},{first:"test2",last:"mmmmm2"}]},{el:"#test",view:i.default,data:[{first:"home3",last:"999993"},{first:"test3",last:"mmmmm3"}]}]})}})},1:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var r=o(['\n        <div class="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="','">Alert警告提示</a>\n                <a href="#/alert/1" class="','">Button按钮</a>\n            </h1>\n            <div class="page-panel" id="pageContent">\n            </div>\n        </div>\n        '],['\n        <div class="page-container">\n            <h1 class="page-title">\n                <a href="#/alert/0" class="','">Alert警告提示</a>\n                <a href="#/alert/1" class="','">Button按钮</a>\n            </h1>\n            <div class="page-panel" id="pageContent">\n            </div>\n        </div>\n        ']);function o(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function a(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function i(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function l(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var c=function(e){l(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};a(this,t);var n={events:{},data:{currentTab:0}};$.extend(true,n,e);return i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}n(t,[{key:"render",value:function e(){var t=this.data;var n=hx(r,t.currentTab==0?"active":"",t.currentTab==1?"active":"");return n}}]);return t}(Lego.UI.Baseview);t.default=c},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=c(['\n        <div class="page-content page-panel-bg perfect-scrollbar">\n            <div id="alertDiv"></div>\n        </div>\n        '],['\n        <div class="page-content page-panel-bg perfect-scrollbar">\n            <div id="alertDiv"></div>\n        </div>\n        ']);var a=n(3);var i=l(a);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function f(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){f(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};s(this,t);var n={events:{"click .alert":"theClick"},scrollbar:true,components:[{el:"#alertDiv",view:i.default,data:{type:"success",closable:true,showIcon:false,message:"警告提示内容"}},{el:"#alertDiv",view:i.default,insert:"append",data:{type:"info",closable:true,showIcon:true,message:"警告提示内容"}},{el:"#alertDiv",view:i.default,insert:"append",data:{type:"warning",closable:true,showIcon:false,message:"警告提示内容",description:"警告提示的辅助性文字介绍"}},{el:"#alertDiv",view:i.default,insert:"append",data:{type:"error",closable:true,showIcon:true,message:"警告提示内容",description:"警告提示的辅助性文字介绍"}}]};$.extend(true,n,e);return u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}r(t,[{key:"render",value:function e(){var t=hx(o);return t}},{key:"theClick",value:function e(t){var n=$(t.currentTarget),r=HBY.getView(n);switch(r.data.type){case"success":r.data.type="info";break;case"info":r.data.type="warning";break;case"warning":r.data.type="error";break;case"error":r.data.type="success";break}}}]);return t}(Lego.UI.Baseview);t.default=p},3:function(e,t){/**
	 * alert.js v0.1.2
	 * (c) 2016 Ronghui Yu
	 * @license MIT
	 */
"use strict";var n=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=l(['\n        <div class="alert alert-'," "," ",'">\n            <i class="anticon '," lego-alert",'-icon" style="display:',';"></i>\n            <span class="lego-alert-message">',"</span>\n            ","\n            ","\n        </div>\n        "],['\n        <div class="alert alert-'," "," ",'">\n            <i class="anticon '," lego-alert",'-icon" style="display:',';"></i>\n            <span class="lego-alert-message">',"</span>\n            ","\n            ","\n        </div>\n        "]);var a=l(['<span class="lego-alert-description">',"</span>"],['<span class="lego-alert-description">',"</span>"]);var i=l(['<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>'],['<a class="lego-alert-close-icon"><i class="anticon anticon-cross"></i></a>']);function l(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function c(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function s(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&((typeof t==="undefined"?"undefined":n(t))==="object"||typeof t==="function")?t:e}function u(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof t==="undefined"?"undefined":n(t)))}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var f=function(e){u(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};c(this,t);var n={events:{"click .lego-alert-close-icon":"onClose"},data:{type:"info",closable:false,closeText:"",message:"",description:"",onClose:function e(){},showIcon:false,banner:false}};$.extend(true,n,e);return s(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}r(t,[{key:"render",value:function e(){var t=this.data||{};var n="";switch(t.type){case"success":n="check";break;case"info":n="info";break;case"warning":n="exclamation";break;case"error":n="cross";break}var r=hx(o,t.type,t.description?"lego-alert-with-description":"",t.showIcon?"":"lego-alert-no-icon",t.description?"anticon-"+n+"-circle-o":"anticon-"+n+"-circle",t.showIcon?"":"-no",t.showIcon?"":"none",t.message,t.description?hx(a,t.description):"",t.closable?hx(i):"");return r}},{key:"onClose",value:function e(t){var n=this;t.stopPropagation();this.$el.slideUp("normal",function(){n.remove()});if(typeof this.data.onClose==="function")this.data.onClose(t)}}]);return t}(Lego.UI.Baseview);e.exports=f},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:true});var n=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();function r(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function o(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function a(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var i=function(e){a(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};r(this,t);var n={gg:{url:"./content2.json",listTarget:"data",model:{first:"",last:"",id:0}},ff:{url:"./content2.json"}};$.extend(true,n,e);return o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}n(t,[{key:"parse",value:function e(t){return t[0].data}}]);return t}(HBY.Data);t.default=new i},96:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:true});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=c(['\n        <div class="page-content page-panel-bg perfect-scrollbar">\n            <div id="buttonDiv"></div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        '],['\n        <div class="page-content page-panel-bg perfect-scrollbar">\n            <div id="buttonDiv"></div>\n            <div id="md" style="margin-top: 20px;"></div>\n            sdfasd<code>img</code>fa\n            <div id="tableDiv" class="markdown"></div>\n        </div>\n        ']);var a=n(97);var i=l(a);function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function s(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function u(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&(typeof t==="object"||typeof t==="function")?t:e}function f(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof t)}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var p=function(e){f(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};s(this,t);var n={events:{},scrollbar:true,components:[{el:"#buttonDiv",view:i.default,insert:"append",data:{type:"default",onClick:function e(){console.warn("点击了此按钮")}},style:{marginRight:10}},{el:"#buttonDiv",view:i.default,insert:"append",data:{type:"primary",onClick:function e(){console.warn("点击了此按钮")}},style:{marginRight:10}},{el:"#buttonDiv",view:i.default,insert:"append",data:{type:"dashed",onClick:function e(){console.warn("点击了此按钮")}},style:{marginRight:10}},{el:"#buttonDiv",view:i.default,insert:"append",data:{type:"ghost",onClick:function e(){console.warn("点击了此按钮")}},style:{marginRight:10}},{el:"#buttonDiv",view:i.default,insert:"append",data:{type:"success",onClick:function e(){console.warn("点击了此按钮")}},style:{marginRight:10}},{el:"#buttonDiv",view:i.default,insert:"append",data:{type:"warning",onClick:function e(){console.warn("点击了此按钮")}},style:{marginRight:10}},{el:"#buttonDiv",view:i.default,insert:"append",data:{type:"danger",onClick:function e(){console.warn("点击了此按钮")}},style:{marginRight:10}}]};$.extend(true,n,e);var r=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));var o='\n    var ihubo = {   \n        nickName: "自由鱼",    \n        site: "https://github.com/jlego/legojs"\n    }';var a="\n| h1    |    h2   |      h3 |\n|:------|:-------:|--------:|\n| 100   | [a][1]  | ![b][2] |\n| *foo* | **bar** | ~~baz~~ |\n        ";r.$("#md").html(markdown.makeHtml(o));r.$("#tableDiv").html(markdown.makeHtml(a));r.$("pre").each(function(e,t){hljs.highlightBlock(t)});return r}r(t,[{key:"render",value:function e(){var t=hx(o);return t}}]);return t}(Lego.UI.Baseview);t.default=p},97:function(e,t){/**
	 * button.js v0.1.2
	 * (c) 2016 Ronghui Yu
	 * @license MIT
	 */
"use strict";var n=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol==="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||false;r.configurable=true;if("value"in r)r.writable=true;Object.defineProperty(e,r.key,r)}}return function(t,n,r){if(n)e(t.prototype,n);if(r)e(t,r);return t}}();var o=a(['\n        <button type="','" class="btn btn-'," lego-btn lego-btn-",'">\n            <span>',"</span>\n        </button>\n        "],['\n        <button type="','" class="btn btn-'," lego-btn lego-btn-",'">\n            <span>',"</span>\n        </button>\n        "]);function a(e,t){return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}function l(e,t){if(!e){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return t&&((typeof t==="undefined"?"undefined":n(t))==="object"||typeof t==="function")?t:e}function c(e,t){if(typeof t!=="function"&&t!==null){throw new TypeError("Super expression must either be null or a function, not "+(typeof t==="undefined"?"undefined":n(t)))}e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}});if(t)Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t}var s=function(e){c(t,e);function t(){var e=arguments.length>0&&arguments[0]!==undefined?arguments[0]:{};i(this,t);var n={data:{text:"button",type:"default",htmlType:"button",icon:"",shape:"",size:"default",loading:false,onClick:function e(){}}};$.extend(true,n,e);if(typeof n.data.onClick=="function"){n.events=n.events||{};n.events["click"]="onClick"}return l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n))}r(t,[{key:"render",value:function e(){var t=this.data||{};var n=hx(o,t.htmlType,t.type,t.type,t.html||t.text);return n}},{key:"onClick",value:function e(t){t.stopPropagation();if(typeof this.data.onClick==="function")this.data.onClick(t)}}]);return t}(Lego.UI.Baseview);e.exports=s}});