(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{134:function(t,e,n){"use strict";var r=n(41);n.n(r).a},135:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}",""])},136:function(t,e,n){"use strict";var r=n(42);n.n(r).a},137:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}",""])},138:function(t,e,n){"use strict";var r=n(43);n.n(r).a},139:function(t,e,n){(e=t.exports=n(29)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css?family=Poiret+One);",""]),e.push([t.i,".container[data-v-a7d029b8]{position:fixed;display:flex;flex-wrap:wrap;justify-content:center;z-index:10;width:calc(100% + 110px);top:0;margin-left:-110px;transition:all .3s ease;padding:10px .5em .5em}img[data-v-a7d029b8]{height:4em;background-color:#4e341d}.links[data-v-a7d029b8]{display:inline-flex;flex-wrap:wrap;flex-basis:50%}.link[data-v-a7d029b8],.links[data-v-a7d029b8]{justify-content:center}.link[data-v-a7d029b8]{color:#fff;font-size:2em;background-color:#000;text-decoration:none;margin:0 .5em;line-height:.7em;width:6em;display:flex;align-items:center;transition:all .2s ease;height:1em}.link[data-v-a7d029b8]:hover{height:1.5em;color:#eddbd6}.link[data-v-a7d029b8]:hover,.nuxt-link-active[data-v-a7d029b8]{background-color:#4e341d}.link.home[data-v-a7d029b8]{display:none;background-color:transparent;text-decoration:underline;color:#000;font-weight:bolder}@media only screen and (max-width:600px){.links[data-v-a7d029b8]{height:calc(102px + 1em);margin-top:1em}.link[data-v-a7d029b8]:hover{height:1em}.container[data-v-a7d029b8]{background-color:hsla(0,0%,100%,.493);padding:0}.imageLink[data-v-a7d029b8]{margin:1em 0}}@media only screen and (max-width:1101px){.container[data-v-a7d029b8]{margin:0}}",""])},140:function(t,e,n){"use strict";var r=n(44);n.n(r).a},141:function(t,e,n){(t.exports=n(29)(!1)).push([t.i,"body,html{margin:0;font-family:Poiret One;transition:all .2s ease;height:100%;width:100%}.pad{height:150px}.page-enter-active,.page-leave-active{transition:all .3s ease;will-change:opacity}.page-enter,.page-leave-active{opacity:0}",""])},146:function(t,e,n){var map={"./index.js":147};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=146},147:function(t,e,n){"use strict";n.r(e),n.d(e,"state",function(){return r}),n.d(e,"mutations",function(){return o});var r=function(){return{theme:{primaryColor:"white",secondaryColor:"black"}}},o=function(){return{setTheme:function(t,e){t.theme=e}}}},148:function(t,e,n){"use strict";n.r(e);n(68),n(52),n(53);var r=n(22),o=(n(45),n(103),n(5)),c=(n(46),n(60),n(82),n(28),n(62),n(31),n(83),n(108),n(120),n(0)),l={},d=(n(88),n(121),n(122),n(124),n(126),n(127),n(130),n(67),n(10)),h=function(){return{}};function f(t){c.a.config.errorHandler&&c.a.config.errorHandler(t)}function m(t){return t.then(function(t){return t.default||t})}function v(t,e){var n=t.options.data||h;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var data=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),Object(d.a)({},data,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function x(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=c.a.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function y(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function w(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function _(t){return Promise.all(w(t,function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return r.components[o]=x(e),t.abrupt("return",r.components[o]);case 6:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function C(t){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,_(e);case 2:return t.abrupt("return",Object(d.a)({},e,{meta:y(e).map(function(t,n){return Object(d.a)({},t.options.meta,(e.matched[n]||{}).meta)})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function $(t,e){return j.apply(this,arguments)}function j(){return(j=Object(o.a)(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,store:e.store,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,path,n){if(t){e.context._redirected=!0;var o=Object(r.a)(path);if("number"==typeof t||"undefined"!==o&&"object"!==o||(n=path||{},path=t,o=Object(r.a)(path),t=302),"object"===o&&(path=e.router.resolve(path).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path))throw path=M(path,n),window.location.replace(path),new Error("ERR_REDIRECT");e.context.next({path:path,query:n,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=9;break}return t.next=8,C(n.route);case 8:e.context.route=t.sent;case 9:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=15;break}return t.next=14,C(n.from);case 14:e.context.from=t.sent;case 15:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function O(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,data){t&&e.error(t),n(data=data||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function E(base,t){var path=window.location.pathname;return"hash"===t?window.location.hash.replace(/^#\//,""):(base&&0===path.indexOf(base)&&(path=path.slice(base.length)),decodeURI(path||"/")+window.location.search+window.location.hash)}function R(t,e){return function(t){for(var e=new Array(t.length),i=0;i<t.length;i++)"object"===Object(r.a)(t[i])&&(e[i]=new RegExp("^(?:"+t[i].pattern+")$"));return function(n,r){for(var path="",data=n||{},o=r||{},c=o.pretty?P:encodeURIComponent,l=0;l<t.length;l++){var d=t[l];if("string"!=typeof d){var h=data[d.name||"pathMatch"],f=void 0;if(null==h){if(d.optional){d.partial&&(path+=d.prefix);continue}throw new TypeError('Expected "'+d.name+'" to be defined')}if(Array.isArray(h)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var m=0;m<h.length;m++){if(f=c(h[m]),!e[l].test(f))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(f)+"`");path+=(0===m?d.prefix:d.delimiter)+f}}else{if(f=d.asterisk?encodeURI(h).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):c(h),!e[l].test(f))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+f+'"');path+=d.prefix+f}}else path+=d}return path}}(function(t,e){var n,r=[],o=0,c=0,path="",l=e&&e.delimiter||"/";for(;null!=(n=N.exec(t));){var d=n[0],h=n[1],f=n.index;if(path+=t.slice(c,f),c=f+d.length,h)path+=h[1];else{var m=t[c],v=n[2],x=n[3],y=n[4],w=n[5],_=n[6],C=n[7];path&&(r.push(path),path="");var k=null!=v&&null!=m&&m!==v,$="+"===_||"*"===_,j="?"===_||"*"===_,O=n[2]||l,pattern=y||w;r.push({name:x||o++,prefix:v||"",delimiter:O,optional:j,repeat:$,partial:k,asterisk:!!C,pattern:pattern?L(pattern):C?".*":"[^"+A(O)+"]+?"})}}c<t.length&&(path+=t.substr(c));path&&r.push(path);return r}(t,e))}function T(t,e){var n={},r=Object(d.a)({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}function S(t){var e;if(t.message||"string"==typeof t)e=t.message||t;else try{e=JSON.stringify(t,null,2)}catch(n){e="[".concat(t.constructor.name,"]")}return Object(d.a)({},t,{message:e,statusCode:t.statusCode||t.status||t.response&&t.response.status||500})}window.onNuxtReadyCbs=[],window.onNuxtReady=function(t){window.onNuxtReadyCbs.push(t)};var N=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function P(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function A(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function L(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function M(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):t.startsWith("//")&&(t=t.substring(2));var o,c=t.split("/"),l=(n?n+"://":"//")+c.shift(),path=c.filter(Boolean).join("/");return 2===(c=path.split("#")).length&&(path=c[0],o=c[1]),l+=path?"/"+path:"",e&&"{}"!==JSON.stringify(e)&&(l+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),l+=o?"#"+o:""}var D=n(89),I=n.n(D),U=n(64),z=function(){return m(n.e(3).then(n.bind(null,178)))},B=function(){return m(Promise.all([n.e(0),n.e(5)]).then(n.bind(null,176)))},J=function(){return m(Promise.all([n.e(0),n.e(9),n.e(6)]).then(n.bind(null,177)))},H=function(){return m(n.e(4).then(n.bind(null,175)))};c.a.use(U.a),window.history.scrollRestoration="manual";var K=function(t,e,n){var r=!1;return t.matched.length<2&&t.matched.every(function(t){return!1!==t.components.default.options.scrollToTop})?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var V=n(90),F=n.n(V),Q=Object(d.a)({},F.a,{name:"NoSsr"}),X={name:"NuxtChild",functional:!0,props:{nuxtChildKey:{type:String,default:""},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0}},render:function(t,e){var n=e.parent,data=e.data,r=e.props;data.nuxtChild=!0;for(var o=n,c=n.$nuxt.nuxt.transitions,l=n.$nuxt.nuxt.defaultTransition,d=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&d++,n=n.$parent;data.nuxtChildDepth=d;var h=c[d]||l,f={};G.forEach(function(t){void 0!==h[t]&&(f[t]=h[t])});var m={};W.forEach(function(t){"function"==typeof h[t]&&(m[t]=h[t].bind(o))});var v=m.beforeEnter;m.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),v)return v.call(o,t)};var x=[t("router-view",data)];return r.keepAlive&&(x=[t("keep-alive",{props:r.keepAliveProps},x)]),t("transition",{props:f,on:m},x)}},G=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],W=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],Y={name:"NuxtError",props:{error:{type:Object,default:null}},head:function(){return{title:this.message,meta:[{name:"viewport",content:"width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"}]}},computed:{statusCode:function(){return this.error&&this.error.statusCode||500},message:function(){return this.error.message||"Error"}}},Z=(n(134),n(14)),tt=Object(Z.a)(Y,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"__nuxt-error-page"},[n("div",{staticClass:"error"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"90",height:"90",fill:"#DBE1EC",viewBox:"0 0 48 48"}},[n("path",{attrs:{d:"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z"}})]),t._v(" "),n("div",{staticClass:"title"},[t._v(t._s(t.message))]),t._v(" "),404===t.statusCode?n("p",{staticClass:"description"},[n("NuxtLink",{staticClass:"error-link",attrs:{to:"/"}},[t._v("Back to the home page")])],1):t._e(),t._v(" "),t._m(0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"logo"},[e("a",{attrs:{href:"https://nuxtjs.org",target:"_blank",rel:"noopener"}},[this._v("Nuxt.js")])])}],!1,null,null,null).exports,et={name:"Nuxt",components:{NuxtChild:X,NuxtError:tt},props:{nuxtChildKey:{type:String,default:void 0},keepAlive:Boolean,keepAliveProps:{type:Object,default:void 0},name:{type:String,default:"default"}},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||R(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},render:function(t){return this.nuxt.err?t("NuxtError",{props:{error:this.nuxt.err}}):t("NuxtChild",{key:this.routerViewKey,props:this.$props})}},nt={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout(function(){return t.startTimer()},this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout(function(){t.show=!1,t.$nextTick(function(){t.percent=0,t.reversed=!1})},500),this},fail:function(){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval(function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100?(t.skipTimerCount=1,t.reversed=!t.reversed):t.percent<=0&&(t.skipTimerCount=1,t.reversed=!t.reversed)))},100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},ot=(n(136),Object(Z.a)(nt,void 0,void 0,!1,null,null,null).exports),it={data:function(){return{hovered:!1}},props:{backgroundColor:{type:String,required:!0}}},nav=(n(138),Object(Z.a)(it,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"containerFlex"},[e("div",{staticClass:"container",style:{backgroundColor:this.backgroundColor}},[e("nuxt-link",{staticClass:"imageLink",attrs:{to:"/","aria-label":"Home"}},[e("img",{attrs:{src:n(93),alt:"logo and home button"}})]),this._v(" "),e("div",{staticClass:"links"},[e("nuxt-link",{staticClass:"link",attrs:{to:"/contact"}},[this._v("contact")]),this._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/resume"}},[this._v("resume")]),this._v(" "),e("nuxt-link",{staticClass:"link",attrs:{to:"/projects"}},[this._v("projects")])],1)],1)])},[],!1,null,"a7d029b8",null).exports),at={contact:"rgb(106, 182, 110)",resume:"rgb(151, 121, 233)",projects:"rgb(116, 213, 213)"},st={components:{Nav:nav},data:function(){return{route:this.$router.currentRoute.name}},watch:{$route:function(t){this.route=t.name}},computed:{backgroundColor:function(){return at[this.route]}}},ut=(n(140),{_default:Object(Z.a)(st,function(){var t=this.$createElement,e=this._self._c||t;return e("div",["index"!==this.route?e("Nav",{staticClass:"nav",attrs:{backgroundColor:this.backgroundColor}}):this._e(),this._v(" "),"index"!==this.route?e("div",{staticClass:"pad"}):this._e(),this._v(" "),e("nuxt",{staticClass:"content"})],1)},[],!1,null,null,null).exports}),ct={head:{title:"Colin McNeil",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"The personal website, protfolio, and contact for Colin McNeil."}],htmlAttrs:{lang:"en"},link:[],style:[],script:[]},render:function(t,e){var n=t("NuxtLoading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),c=t("transition",{props:{name:"layout",mode:"out-in"},on:{beforeEnter:function(t){window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")})}}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,c])},data:function(){return{isOnline:!0,layout:null,layoutName:""}},beforeCreate:function(){c.a.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){c.a.prototype.$nuxt=this,window.$nuxt=this,this.refreshOnlineStatus(),window.addEventListener("online",this.refreshOnlineStatus),window.addEventListener("offline",this.refreshOnlineStatus),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},computed:{isOffline:function(){return!this.isOnline}},methods:{refreshOnlineStatus:function(){void 0===window.navigator.onLine?this.isOnline=!0:this.isOnline=window.navigator.onLine},errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&ut["_"+t]||(t="default"),this.layoutName=t,this.layout=ut["_"+t],this.layout},loadLayout:function(t){return t&&ut["_"+t]||(t="default"),Promise.resolve(ut["_"+t])}},components:{NuxtLoading:ot}},lt=(n(142),n(65));c.a.use(lt.a);var pt,ht=console,ft=["state","getters","actions","mutations"],mt={};!function(){var t=(pt=n(146)).keys().sort(function(t,e){var n=t.split("/").length-e.split("/").length;return 0===n&&t.includes("/index.")?n=-1:0===n&&e.includes("/index.")&&(n=1),n}),e=t.find(function(path){return path.includes("./index.")});if(e&&(mt=xt(e,{isRoot:!0})),"function"==typeof mt)return ht.warn("Classic mode for store/ is deprecated and will be removed in Nuxt 3.");mt.modules=mt.modules||{};var r=!0,o=!1,c=void 0;try{for(var l,d=t[Symbol.iterator]();!(r=(l=d.next()).done);r=!0){var path=l.value,h=path.replace(/^\.\//,"").replace(/\.(js|mjs|ts)$/,"");if("index"!==h){var f=h.split("/"),m=f[f.length-1],v=xt(path,{isState:"state"===m});if(ft.includes(m)){var x=m;yt(gt(mt,f,{isProperty:!0}),v,x)}else{"index"===m&&(f.pop(),m=f[f.length-1]);for(var y=gt(mt,f),w=0;w<ft.length;w++){var _=ft[w];yt(y,v[_],_)}}}}}catch(t){o=!0,c=t}finally{try{r||null==d.return||d.return()}finally{if(o)throw c}}}();var vt=mt instanceof Function?mt:function(){return new lt.a.Store(Object.assign({strict:!1},mt))};function xt(path){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=t.isRoot,n=void 0!==e&&e,r=t.isState,o=void 0!==r&&r,c=pt(path),l=c.default||c;if(o&&"function"!=typeof l){ht.warn("".concat(path," should export a method that returns an object"));var d=Object.assign({},l);return function(){return d}}if(n&&l.commit)throw new Error("[nuxt] store/"+path.replace("./","")+" should export a method that returns a Vuex instance.");if(n&&"function"!=typeof l&&(l=Object.assign({},l)),l.state&&"function"!=typeof l.state){ht.warn("'state' should be a method that returns an object in ".concat(path));var h=Object.assign({},l.state);l=Object.assign({},l,{state:function(){return h}})}return l}function gt(t,e){var n=(arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}).isProperty,r=void 0!==n&&n;if(!e.length||r&&1===e.length)return t;var o=e.shift();return t.modules[o]=t.modules[o]||{},t.modules[o].namespaced=!0,t.modules[o].modules=t.modules[o].modules||{},gt(t.modules[o],e,{isProperty:r})}function yt(t,e,n){e&&("state"===n?t.state=e||t.state:t[n]=Object.assign({},t[n],e))}var bt=n(91);n.n(bt).a.load({google:{families:["Poiret+One","Inconsolata"]}});var wt=n(66),_t={install:function(t,e){t.component("VMinTileGrid",wt.VMinTileGrid),t.component("VMinTile",wt.VMinTile)}};c.a.use(_t);var Ct=_t;c.a.component(Q.name,Q),c.a.component(X.name,X),c.a.component("NChild",X),c.a.component(et.name,et),c.a.use(I.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var kt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function $t(){return($t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,o,l,h,f,path,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new U.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:K,routes:[{path:"/contact",component:z,name:"contact"},{path:"/projects",component:B,name:"projects"},{path:"/resume",component:J,name:"resume"},{path:"/",component:H,name:"index"}],fallback:!1});case 2:return n=t.sent,(r=vt(e)).$router=n,o=r.registerModule,r.registerModule=function(path,t,e){return o.call(r,path,t,Object.assign({preserveState:!0},e))},l=Object(d.a)({router:n,store:r,nuxt:{defaultTransition:kt,transitions:[kt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},kt,{name:t}):Object.assign({},kt,t):kt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,l.context._errored=!!t,t=t?S(t):null;var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},ct),r.app=l,h=e?e.next:function(t){return l.router.push(t)},e?f=n.resolve(e.url).route:(path=E(n.options.base),f=n.resolve(path).route),t.next=13,$(l,{route:f,next:h,error:l.nuxt.error.bind(l),store:r,payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 13:m=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(void 0===e)throw new Error("inject(key, value) has no value provided");l[t="$"+t]=e,r[t]=l[t];var n="__nuxt_"+t+"_installed__";c.a[n]||(c.a[n]=!0,c.a.use(function(){c.a.prototype.hasOwnProperty(t)||Object.defineProperty(c.a.prototype,t,{get:function(){return this.$root.$options[t]}})}))},window.__NUXT__&&window.__NUXT__.state&&r.replaceState(window.__NUXT__.state),t.next=19;break;case 19:if("function"!=typeof Ct){t.next=22;break}return t.next=22,Ct(l.context,m);case 22:t.next=25;break;case 25:return t.abrupt("return",{app:l,store:r,router:n});case 26:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var jt=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},Ot=window.IntersectionObserver&&new window.IntersectionObserver(function(t){t.forEach(function(t){var e=t.intersectionRatio,link=t.target;e<=0||link.__prefetch()})}),Et={name:"NuxtLink",extends:c.a.component("RouterLink"),props:{noPrefetch:{type:Boolean,default:!1}},mounted:function(){this.noPrefetch||jt(this.observe,{timeout:2e3})},beforeDestroy:function(){this.__observed&&(Ot.unobserve(this.$el),delete this.$el.__prefetch)},methods:{observe:function(){Ot&&this.shouldPrefetch()&&(this.$el.__prefetch=this.prefetch.bind(this),Ot.observe(this.$el),this.__observed=!0)},shouldPrefetch:function(){return this.getPrefetchComponents().length>0},canPrefetch:function(){var t=navigator.connection;return!(this.$nuxt.isOffline||t&&((t.effectiveType||"").includes("2g")||t.saveData))},getPrefetchComponents:function(){return this.$router.resolve(this.to,this.$route,this.append).resolved.matched.map(function(t){return t.components.default}).filter(function(t){return"function"==typeof t&&!t.options&&!t.__prefetched})},prefetch:function(){if(this.canPrefetch()){Ot.unobserve(this.$el);var t=this.getPrefetchComponents(),e=!0,n=!1,r=void 0;try{for(var o,c=t[Symbol.iterator]();!(e=(o=c.next()).done);e=!0){var l=o.value;try{l(),l.__prefetched=!0}catch(t){}}}catch(t){n=!0,r=t}finally{try{e||null==c.return||c.return()}finally{if(n)throw r}}}}}};c.a.component(Et.name,Et),c.a.component("NLink",Et);var Rt,Tt,St=[],Nt=window.__NUXT__||{};Object.assign(c.a.config,{silent:!0,performance:!1});var Pt=c.a.config.errorHandler||console.error;function At(t,e,n){var r=function(component){var t=function(component,t){if(!component||!component.options||!component.options[t])return{};var option=component.options[t];if("function"==typeof option){for(var e=arguments.length,n=new Array(e>2?e-2:0),r=2;r<e;r++)n[r-2]=arguments[r];return option.apply(void 0,n)}return option}(component,"transition",e,n)||{};return"string"==typeof t?{name:t}:t};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&t.toLowerCase().includes("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Lt(t,e,n){return Mt.apply(this,arguments)}function Mt(){return(Mt=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,d,h=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Rt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?T(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,_(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return h._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=23;break;case 12:if(t.prev=12,t.t0=t.catch(4),c=t.t0||{},l=c.statusCode||c.status||c.response&&c.response.status||500,d=c.message||"",!/^Loading chunk (\d)+ failed\./.test(d)){t.next=20;break}return window.location.reload(!0),t.abrupt("return");case 20:this.error({statusCode:l,message:d}),this.$nuxt.$emit("routeChanged",e,n,c),r();case 23:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function qt(t,e){return Nt.serverRendered&&e&&v(t,e),t._Ctor=t,t}function Dt(t,e,n){var r=this,o=[],c=!1;if(void 0!==n&&(o=[],(n=x(n)).options.middleware&&(o=o.concat(n.options.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof l[t]&&(c=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),l[t])}),!c)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():O(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function It(t,e,n){return Ut.apply(this,arguments)}function Ut(){return(Ut=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r){var o,c,l,d,h,m,x,w,_,C,k,j,E,T,S,N,P=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return St=e===n?[]:y(n,o=[]).map(function(t,i){return R(n.matched[o[i]].path)(n.params)}),c=!1,l=function(path){n.path===path.path&&P.$loading.finish&&P.$loading.finish(),n.path!==path.path&&P.$loading.pause&&P.$loading.pause(),c||(c=!0,r(path))},t.next=7,$(Rt,{route:e,from:n,next:l.bind(this)});case 7:if(this._dateLastError=Rt.nuxt.dateErr,this._hadError=!!Rt.nuxt.err,(h=y(e,d=[])).length){t.next=25;break}return t.next=14,Dt.call(this,h,Rt.context);case 14:if(!c){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof tt.layout?tt.layout(Rt.context):tt.layout);case 18:return m=t.sent,t.next=21,Dt.call(this,h,Rt.context,m);case 21:if(!c){t.next=23;break}return t.abrupt("return");case 23:return Rt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return h.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(At(h,e,n)),t.prev=27,t.next=30,Dt.call(this,h,Rt.context);case 30:if(!c){t.next=32;break}return t.abrupt("return");case 32:if(!Rt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(x=h[0].options.layout)&&(x=x(Rt.context)),t.next=38,this.loadLayout(x);case 38:return x=t.sent,t.next=41,Dt.call(this,h,Rt.context,x);case 41:if(!c){t.next=43;break}return t.abrupt("return");case 43:if(!Rt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:w=!0,t.prev=46,_=!0,C=!1,k=void 0,t.prev=50,j=h[Symbol.iterator]();case 52:if(_=(E=j.next()).done){t.next=64;break}if("function"==typeof(T=E.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,T.options.validate(Rt.context);case 58:if(w=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:_=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),C=!0,k=t.t0;case 70:t.prev=70,t.prev=71,_||null==j.return||j.return();case 73:if(t.prev=73,!C){t.next=76;break}throw k;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(w){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(h.map(function(t,i){if(t._path=R(e.matched[d[i]].path)(e.params),t._dataRefresh=!1,P._pathChanged&&P._queryChanged||t._path!==St[i])t._dataRefresh=!0;else if(!P._pathChanged&&P._queryChanged){var n=t.options.watchQuery;!0===n?t._dataRefresh=!0:Array.isArray(n)&&(t._dataRefresh=n.some(function(t){return P._diffQuery[t]}))}if(!P._hadError&&P._isMounted&&!t._dataRefresh)return Promise.resolve();var r=[],o=t.options.asyncData&&"function"==typeof t.options.asyncData,c=!!t.options.fetch,l=o&&c?30:45;if(o){var h=O(t.options.asyncData,Rt.context).then(function(e){v(t,e),P.$loading.increase&&P.$loading.increase(l)});r.push(h)}if(P.$loading.manual=!1===t.options.loading,c){var p=t.options.fetch(Rt.context);p&&(p instanceof Promise||"function"==typeof p.then)||(p=Promise.resolve(p)),p.then(function(t){P.$loading.increase&&P.$loading.increase(l)}),r.push(p)}return Promise.all(r)}));case 89:c||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=106;break;case 92:if(t.prev=92,t.t2=t.catch(27),"ERR_REDIRECT"!==(S=t.t2||{}).message){t.next=97;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,S));case 97:return St=[],f(S),"function"==typeof(N=tt.layout)&&(N=N(Rt.context)),t.next=103,this.loadLayout(N);case 103:this.error(S),this.$nuxt.$emit("routeChanged",e,n,S),r();case 106:case"end":return t.stop()}},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function zt(t,e){w(t,function(t,e,n,o){return"object"!==Object(r.a)(t)||t.options||((t=c.a.extend(t))._Ctor=t,n.components[o]=t),t})}function Bt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?tt.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Rt.context)),this.setLayout(e)}function Jt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||c.a.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=y(t,e);r.forEach(function(t,i){if(t&&t.constructor._dataRefresh&&o[i]===t.constructor&&"function"==typeof t.constructor.options.data){var e=t.constructor.options.data.call(t);for(var n in e)c.a.set(t.$data,n,e[n])}}),Bt.call(n,t)})}function Ht(t){window.onNuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Tt.afterEach(function(e,n){c.a.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Kt(){return(Kt=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,r,l,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Rt=e.app,Tt=e.router,e.store,t.next=5,Promise.all((path=void 0,path=E((h=Tt).options.base,h.options.mode),w(h.match(path),function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e,n,r,o,c){var l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return l=qt(x(e),Nt.data?Nt.data[c]:null),r.components[o]=l,t.abrupt("return",l);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,c){return t.apply(this,arguments)}}())));case 5:return n=t.sent,r=new c.a(Rt),l=Nt.layout||"default",t.next=10,r.loadLayout(l);case 10:if(r.setLayout(l),d=function(){r.$mount("#__nuxt"),c.a.nextTick(function(){Ht(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(At(n,Tt.currentRoute)),St=Tt.currentRoute.matched.map(function(t){return R(t.path)(Tt.currentRoute.params)})),r.$loading={},Nt.error&&r.error(Nt.error),Tt.beforeEach(Lt.bind(r)),Tt.beforeEach(It.bind(r)),Tt.afterEach(zt),Tt.afterEach(Jt.bind(r)),!Nt.serverRendered){t.next=23;break}return d(),t.abrupt("return");case 23:It.call(r,Tt.currentRoute,Tt.currentRoute,function(path){if(!path)return zt(Tt.currentRoute,Tt.currentRoute),Bt.call(r,Tt.currentRoute),void d();Tt.push(path,function(){return d()},function(t){if(!t)return d();Pt(t)})});case 24:case"end":return t.stop()}var h,path},t,this)}))).apply(this,arguments)}(function(t){return $t.apply(this,arguments)})().then(function(t){return Kt.apply(this,arguments)}).catch(function(t){t.message="[nuxt] Error while mounting app: "+t.message,Pt(t)})},41:function(t,e,n){var content=n(135);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("b675d82e",content,!0,{sourceMap:!1})},42:function(t,e,n){var content=n(137);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("17cfdfa9",content,!0,{sourceMap:!1})},43:function(t,e,n){var content=n(139);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("78253f8a",content,!0,{sourceMap:!1})},44:function(t,e,n){var content=n(141);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("aab9a468",content,!0,{sourceMap:!1})},93:function(t,e,n){t.exports=n.p+"img/7fad4c4.svg"},94:function(t,e,n){t.exports=n(148)}},[[94,7,2,8]]]);