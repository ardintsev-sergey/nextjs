(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{6840:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5656)}])},5656:function(t,e,n){"use strict";n.r(e);var r=n(6042),o=n(5893),i=n(9008),c=n.n(i),a=(n(906),n(3282)),u=n(1163);u.Router.events.on("routeChangeComplete",(function(t){(0,a.ZP)("hit",t)})),e.default=function(t){var e=t.Component,n=t.pageProps,i=t.router;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"MyTop - \u043c\u043e\u0439 \u0442\u043e\u043f"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://mc.yandex.ru"}),(0,o.jsx)("meta",{property:"og:url",content:"https://courses-top.ru"+i.asPath}),(0,o.jsx)("meta",{property:"og:local",content:"ru_RU"})]}),(0,o.jsx)(a.OR,{accounts:[],options:{webvisor:!0,defer:!0},version:"2"}),(0,o.jsx)(e,(0,r.Z)({},n)),";"]})}},906:function(){},9008:function(t,e,n){t.exports=n(5443)},1163:function(t,e,n){t.exports=n(387)},2703:function(t,e,n){"use strict";var r=n(414);function o(){}function i(){}i.resetWarningCache=o,t.exports=function(){function t(t,e,n,o,i,c){if(c!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},5697:function(t,e,n){t.exports=n(2703)()},414:function(t){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},2541:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.YMInitializer=void 0;var r=function(t){if(t&&t.__esModule)return t;if(null===t||"object"!==s(t)&&"function"!==typeof t)return{default:t};var e=u();if(e&&e.has(t))return e.get(t);var n={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in t)if(Object.prototype.hasOwnProperty.call(t,o)){var i=r?Object.getOwnPropertyDescriptor(t,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=t[o]}n.default=t,e&&e.set(t,n);return n}(n(7294)),o=a(n(5697)),i=a(n(7343)),c=n(3746);function a(t){return t&&t.__esModule?t:{default:t}}function u(){if("function"!==typeof WeakMap)return null;var t=new WeakMap;return u=function(){return t},t}function s(t){return s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s(t)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==s(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},y(t)}function d(t,e){return d=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},d(t,e)}var b=function(t){function e(){return f(this,e),l(this,y(e).apply(this,arguments))}var n,o,a;return function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&d(t,e)}(e,t),n=e,(o=[{key:"componentDidMount",value:function(){(0,i.default)(this.props.accounts,this.props.options,this.props.version);var t=document.createElement("script"),e=this.props.attrs;t.type="text/javascript",t.async=!0,t.src=(0,c.scriptPath)(this.props.version),Object.keys(e).map((function(n){t.__proto__.hasOwnProperty(n)&&t.setAttribute(n,e[n])})),this.insertPoint.insertBefore(t,null)}},{key:"render",value:function(){var t=this;return r.default.createElement(this.props.containerElement,{ref:function(e){t.insertPoint=e}},this.props.children)}}])&&p(n.prototype,o),a&&p(n,a),e}(r.Component);e.YMInitializer=b,b.displayName="YMInitializer",b.propTypes={accounts:o.default.arrayOf(o.default.number).isRequired,containerElement:o.default.string,options:o.default.object,attrs:o.default.object,version:o.default.oneOf(["1","2"])},b.defaultProps={containerElement:"div",options:{},attrs:{},version:"1"}},3746:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.callbackQueueName=function(t){if("1"===t)return"yandex_metrika_callbacks";if("2"===t)return"yandex_metrika_callbacks2";n()},e.scriptPath=function(t){if("1"===t)return"https://mc.yandex.ru/metrika/watch.js";if("2"===t)return"https://mc.yandex.ru/metrika/tag.js";n()},e.trackerConstructorName=function(t){if("1"===t)return"Metrika";if("2"===t)return"Metrika2";n()},e.trackerInstanceName=function(t){return"yaCounter".concat(t)},e.trackerVersionName=function(t){return"yaCounterVersion".concat(t)},e.accountListName=void 0;function n(){throw new Error("invalid Ya.Metrika version")}e.accountListName="yandex_metrika_accounts"},3282:function(t,e,n){"use strict";Object.defineProperty(e,"OR",{enumerable:!0,get:function(){return o.YMInitializer}}),e.ZP=void 0;var r=n(3746),o=n(2541);function i(t,e){try{for(var n,o=arguments.length,i=new Array(o>2?o-2:0),c=2;c<o;c++)i[c-2]=arguments[c];(n=window[(0,r.trackerInstanceName)(t)])[e].apply(n,i)}catch(a){console.warn(a)}}function c(){return"undefined"!==typeof window?window[r.accountListName]:[]}function a(t){return function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.forEach((function(t){var e=window[(0,r.trackerVersionName)(t)],o=window[(0,r.callbackQueueName)(e)];o?o.push((function(){return i.apply(void 0,[t].concat(n))})):i.apply(void 0,[t].concat(n))}))}}function u(t){return a(c().filter(t))}var s=function(){return a(c()).apply(void 0,arguments)};e.ZP=s},7343:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"1",o=(0,r.callbackQueueName)(n);window[r.accountListName]=window[r.accountListName]||[],window[r.accountListName]=window[r.accountListName].concat(t),window[o]=window[o]||[],window[o].push((function(){t.forEach((function(t){var o={id:t};try{window[(0,r.trackerInstanceName)(t)]=new(Ya[(0,r.trackerConstructorName)(n)])(Object.assign(o,e))}catch(i){console.warn(i)}}))})),t.forEach((function(t){window[(0,r.trackerVersionName)(t)]=n}))};var r=n(3746)},4924:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,{Z:function(){return r}})},6042:function(t,e,n){"use strict";n.d(e,{Z:function(){return o}});var r=n(4924);function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),o.forEach((function(e){(0,r.Z)(t,e,n[e])}))}return t}}},function(t){var e=function(e){return t(t.s=e)};t.O(0,[774,179],(function(){return e(6840),e(387)}));var n=t.O();_N_E=n}]);