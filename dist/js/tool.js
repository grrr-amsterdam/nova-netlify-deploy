!function(t){var e={};function n(r){if(e[r])return e[r].exports;var s=e[r]={i:r,l:!1,exports:{}};return t[r].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=1)}([function(t,e){t.exports=function(t,e,n,r,s,o){var i,a=t=t||{},l=typeof t.default;"object"!==l&&"function"!==l||(i=t,a=t.default);var u,c="function"==typeof a?a.options:a;if(e&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),s&&(c._scopeId=s),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=u):r&&(u=r),u){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=u,c.render=function(t,e){return u.call(e),f(t,e)}):c.beforeCreate=f?[].concat(f,u):[u]}return{esModule:i,exports:a,options:c}}},function(t,e,n){t.exports=n(2)},function(t,e,n){Nova.booting(function(t,e,r){e.addRoutes([{name:"netlify-deploy",path:"/netlify-deploy",component:n(3)}]),t.component("netlify-deploy-card",n(6)),t.component("netlify-deploy-status",n(9))})},function(t,e,n){var r=n(0)(n(4),n(5),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={metaInfo:function(){return{title:"Publish a new Netlify build"}},props:{publishing:{type:Boolean,default:!0},error:String},methods:{onStatusLoaded:function(t){this.error=t.error_message=t.error_message||"",this.publishing=this.isPublishing(t.state)},publish:function(){var t=this;this.publishing=!0,axios.post("/nova-vendor/netlify-deploy/deploy").then(function(t){}).catch(function(e){console.log(e),t.error=e.response.data.message,t.publishing=!1})},formatDate:function(t){return new Intl.DateTimeFormat("en-EN",{dateStyle:"long",timeStyle:"long"}).format(new Date(t))},isPublishing:function(t){return"new"===t||"building"===t||"enqueued"===t}}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mb-6 w-1/3"},[n("card",{staticClass:"flex flex-col items-center justify-center card-panel"},[n("netlify-deploy-status",{on:{load:t.onStatusLoaded}})],1)],1),t._v(" "),t.error?n("p",{staticClass:"mb-6"},[t._v("\n    Error: "),n("strong",[t._v(t._s(t.error))])]):t._e(),t._v(" "),n("p",{staticClass:"mb-6"},[t._v("\n    Publish your website to Netlify to make the latest changes visible to the\n    public.\n  ")]),t._v(" "),n("button",{staticClass:"btn btn-default btn-primary mb-6",attrs:{disabled:!!t.publishing,z:""},on:{click:function(e){return t.publish()}}},[t._v("\n    Publish website\n  ")])])},staticRenderFns:[]}},function(t,e,n){var r=n(0)(n(7),n(8),!1,null,null,null);t.exports=r.exports},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:["card"],methods:{},mounted:function(){}}},function(t,e){t.exports={render:function(){var t=this.$createElement,e=this._self._c||t;return e("card",{staticClass:"flex flex-col items-center justify-center"},[e("netlify-deploy-status")],1)},staticRenderFns:[]}},function(t,e,n){var r=n(0)(n(15),n(16),!1,function(t){n(10)},"data-v-36c5a751",null);t.exports=r.exports},function(t,e,n){var r=n(11);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(13)("1382103e",r,!0,{})},function(t,e,n){(t.exports=n(12)(!1)).push([t.i,".icon-ok[data-v-36c5a751]{color:#21b978}.icon-building[data-v-36c5a751]{color:#3490dc}.icon-error[data-v-36c5a751]{color:#e74444}",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var s=(i=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),o=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(o).concat([s]).join("\n")}var i;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},s=0;s<this.length;s++){var o=this[s][0];"number"==typeof o&&(r[o]=!0)}for(s=0;s<t.length;s++){var i=t[s];"number"==typeof i[0]&&r[i[0]]||(n&&!i[2]?i[2]=n:n&&(i[2]="("+i[2]+") and ("+n+")"),e.push(i))}},e}},function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s=n(14),o={},i=r&&(document.head||document.getElementsByTagName("head")[0]),a=null,l=0,u=!1,c=function(){},d=null,f="data-vue-ssr-id",p="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=o[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(m(n.parts[s]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var i=[];for(s=0;s<n.parts.length;s++)i.push(m(n.parts[s]));o[n.id]={id:n.id,refs:1,parts:i}}}}function v(){var t=document.createElement("style");return t.type="text/css",i.appendChild(t),t}function m(t){var e,n,r=document.querySelector("style["+f+'~="'+t.id+'"]');if(r){if(u)return c;r.parentNode.removeChild(r)}if(p){var s=l++;r=a||(a=v()),e=b.bind(null,r,s,!1),n=b.bind(null,r,s,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,s=e.sourceMap;r&&t.setAttribute("media",r);d.ssrId&&t.setAttribute(f,e.id);s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){u=n,d=r||{};var i=s(t,e);return h(i),function(e){for(var n=[],r=0;r<i.length;r++){var a=i[r];(l=o[a.id]).refs--,n.push(l)}e?h(i=s(t,e)):i=[];for(r=0;r<n.length;r++){var l;if(0===(l=n[r]).refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete o[l.id]}}}};var g,y=(g=[],function(t,e){return g[t]=e,g.filter(Boolean).join("\n")});function b(t,e,n,r){var s=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=y(e,s);else{var o=document.createTextNode(s),i=t.childNodes;i[e]&&t.removeChild(i[e]),i.length?t.insertBefore(o,i[e]):t.appendChild(o)}}},function(t,e){t.exports=function(t,e){for(var n=[],r={},s=0;s<e.length;s++){var o=e[s],i=o[0],a={id:t+":"+s,css:o[1],media:o[2],sourceMap:o[3]};r[i]?r[i].parts.push(a):n.push(r[i]={id:i,parts:[a]})}return n}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={emits:["load"],methods:{fetchDeployStatus:function(){var t=this;axios.get("/nova-vendor/netlify-deploy/status").then(function(e){t.deployStatus=e.data,t.$emit("load",e.data),setTimeout(function(){return t.fetchDeployStatus()},5e3)}).catch(function(e){t.requestError=e.response.data})},getStatusDescription:function(t){return this.isReady(t)?"Publication successful":this.isFailed(t)?"Publication failed":this.isPublishing(t)?"Publication in progress":"Unknown state. This is a bug, please report it."},formatDate:function(t){return new Intl.DateTimeFormat("en-EN",{dateStyle:"long",timeStyle:"long"}).format(new Date(t))},isPublishing:function(t){return!this.isFailed(t)&&!this.isReady(t)},isFailed:function(t){return"error"===t},isReady:function(t){return"ready"===t}},data:function(){return{deployStatus:null,requestError:null}},mounted:function(){this.fetchDeployStatus()}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.deployStatus?n("div",{staticClass:"px-3 py-4 flex flex-col items-center no-underline text-80"},[n("h2",{staticClass:"text-center text-3xl text-80 font-light mb-3"},[t._v("\n      Publication status\n    ")]),t._v(" "),t.isReady(t.deployStatus.state)?n("svg",{staticClass:"fill-current icon-ok w-8 h-8 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}})]):t.isPublishing(t.deployStatus.state)?n("svg",{staticClass:"fill-current icon-building w-8 h-8 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}})]):n("svg",{staticClass:"fill-current icon-error w-8 h-8 ml-2",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"}},[n("path",{attrs:{d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"}})]),t._v(" "),n("p",{staticClass:"text-center mt-4 mb-1"},[t._v("\n      "+t._s(t.getStatusDescription(t.deployStatus.state))+"\n    ")]),t._v(" "),n("p",{staticClass:"text-center font-light text-sm text-80"},[t._v("\n      "+t._s(t.formatDate(t.deployStatus.updated_at))+"\n    ")])]):t.requestError?n("div",{staticClass:"px-3 py-4 flex flex-col items-center no-underline text-80"},[n("p",[n("strong",[t._v(t._s(t.requestError.message))])])]):n("div",{staticClass:"px-3 py-4 flex flex-col items-center no-underline text-80"},[n("p",[t._v("Loading publication status...")])])])},staticRenderFns:[]}}]);