/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{272:function(t,e,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(133).default)("9598744c",content,!0,{sourceMap:!1})},275:function(t,e,r){var n=r(3),o=r(20),c=r(62),f=r(276),l=r(191),y=r(9),d=r(14),v=r(47),h=r(5),O=o("Reflect","construct"),w=Object.prototype,m=[].push,j=h((function(){function t(){}return!(O((function(){}),[],t)instanceof t)})),_=!h((function(){O((function(){}))})),P=j||_;n({target:"Reflect",stat:!0,forced:P,sham:P},{construct:function(t,e){l(t),y(e);var r=arguments.length<3?t:l(arguments[2]);if(_&&!j)return O(t,e,r);if(t==r){switch(e.length){case 0:return new t;case 1:return new t(e[0]);case 2:return new t(e[0],e[1]);case 3:return new t(e[0],e[1],e[2]);case 4:return new t(e[0],e[1],e[2],e[3])}var n=[null];return c(m,n,e),new(c(f,t,n))}var o=r.prototype,h=v(d(o)?o:w),P=c(t,h,e);return d(P)?P:h}})},276:function(t,e,r){"use strict";var n=r(0),o=r(4),c=r(38),f=r(14),l=r(10),y=r(77),d=r(76),v=n.Function,h=o([].concat),O=o([].join),w={},m=function(t,e,r){if(!l(w,e)){for(var n=[],i=0;i<e;i++)n[i]="a["+i+"]";w[e]=v("C,a","return new C("+O(n,",")+")")}return w[e](t,r)};t.exports=d?v.bind:function(t){var e=c(this),r=e.prototype,n=y(arguments,1),o=function(){var r=h(n,y(arguments));return this instanceof o?m(e,r.length,r):e.apply(t,r)};return f(r)&&(o.prototype=r),o}},277:function(t,e,r){"use strict";r(272)},278:function(t,e,r){var n=r(132)(!1);n.push([t.i,"body{margin:0;height:100vh;width:100vw}.hydra-canvas{position:absolute;left:-10000px;-ms-interpolation-mode:nearest-neighbor;image-rendering:-moz-crisp-edges;image-rendering:pixelated;width:1200px;height:1200px}",""]),t.exports=n},281:function(t,e,r){"use strict";r.r(e);r(15),r(275);var n=r(176),o=r(175);function c(t,p){return c=Object.setPrototypeOf||function(t,p){return t.__proto__=p,t},c(t,p)}var f=r(25);function l(t,e){if(e&&("object"===Object(f.a)(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}var d=r(2);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function O(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function w(){return"undefined"!=typeof Reflect&&Reflect.defineMetadata&&Reflect.getOwnMetadataKeys}function m(t,e){j(t,e),Object.getOwnPropertyNames(e.prototype).forEach((function(r){j(t.prototype,e.prototype,r)})),Object.getOwnPropertyNames(e).forEach((function(r){j(t,e,r)}))}function j(t,e,r){(r?Reflect.getOwnMetadataKeys(e,r):Reflect.getOwnMetadataKeys(e)).forEach((function(n){var o=r?Reflect.getOwnMetadata(n,e,r):Reflect.getOwnMetadata(n,e);r?Reflect.defineMetadata(n,o,t,r):Reflect.defineMetadata(n,o,t)}))}var _={__proto__:[]}instanceof Array;function P(t,e){var r=e.prototype._init;e.prototype._init=function(){var e=this,r=Object.getOwnPropertyNames(t);if(t.$options.props)for(var n in t.$options.props)t.hasOwnProperty(n)||r.push(n);r.forEach((function(r){Object.defineProperty(e,r,{get:function(){return t[r]},set:function(e){t[r]=e},configurable:!0})}))};var data=new e;e.prototype._init=r;var n={};return Object.keys(data).forEach((function(t){void 0!==data[t]&&(n[t]=data[t])})),n}var R=["data","beforeCreate","created","beforeMount","mounted","beforeDestroy","destroyed","beforeUpdate","updated","activated","deactivated","render","errorCaptured","serverPrefetch"];function x(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e.name=e.name||t._componentTag||t.name;var r=t.prototype;Object.getOwnPropertyNames(r).forEach((function(t){if("constructor"!==t)if(R.indexOf(t)>-1)e[t]=r[t];else{var n=Object.getOwnPropertyDescriptor(r,t);void 0!==n.value?"function"==typeof n.value?(e.methods||(e.methods={}))[t]=n.value:(e.mixins||(e.mixins=[])).push({data:function(){return h({},t,n.value)}}):(n.get||n.set)&&((e.computed||(e.computed={}))[t]={get:n.get,set:n.set})}})),(e.mixins||(e.mixins=[])).push({data:function(){return P(this,t)}});var n=t.__decorators__;n&&(n.forEach((function(t){return t(e)})),delete t.__decorators__);var o=Object.getPrototypeOf(t.prototype),c=o instanceof d.a?o.constructor:d.a,f=c.extend(e);return M(f,t,c),w()&&m(f,t),f}var E={prototype:!0,arguments:!0,callee:!0,caller:!0};function M(t,e,r){Object.getOwnPropertyNames(e).forEach((function(n){if(!E[n]){var o=Object.getOwnPropertyDescriptor(t,n);if(!o||o.configurable){var c,f,l=Object.getOwnPropertyDescriptor(e,n);if(!_){if("cid"===n)return;var y=Object.getOwnPropertyDescriptor(r,n);if(c=l.value,f=v(c),null!=c&&("object"===f||"function"===f)&&y&&y.value===l.value)return}0,Object.defineProperty(t,n,l)}}}))}function S(t){return"function"==typeof t?x(t):function(e){return x(e,t)}}S.registerHooks=function(t){R.push.apply(R,O(t))};var A=S;var C;"undefined"!=typeof Reflect&&Reflect.getMetadata;function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=y(t);if(e){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return l(this,r)}}var N=A({layout:"empty"})(C=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&c(t,e)}(r,t);var e=D(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r)}(d.a))||C,k=N,T=(r(277),r(46)),component=Object(T.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"item"},[e("canvas",{ref:"hydra",staticClass:"hydra-canvas"})])}),[],!1,null,null,null);e.default=component.exports}}]);