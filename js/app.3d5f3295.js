(function(){"use strict";var e={214:function(e,n,t){var r=t(5130),o=t(3367),a=t(6768);function i(e,n){const t=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(t)}var u=t(1241);const c={},f=(0,u.A)(c,[["render",i]]);var l=f,s=t(1387);const d=[{path:"/",name:"home",component:()=>t.e(217).then(t.bind(t,931))},{path:"/about",name:"about",component:()=>t.e(594).then(t.bind(t,603))}],h=(0,s.aE)({history:(0,s.LA)("/"),routes:d});var p=h;const m=e=>((0,a.Qi)("data-v-2aa30d52"),e=e(),(0,a.jt)(),e),v={for:"theme-switch",class:"switch"},b=m((()=>(0,a.Lk)("span",{class:"slider"},null,-1)));function g(e,n,t,o,i,u){return(0,a.uX)(),(0,a.CE)("label",v,[(0,a.bo)((0,a.Lk)("input",{onClick:n[0]||(n[0]=(...e)=>u.sendValue&&u.sendValue(...e)),"onUpdate:modelValue":n[1]||(n[1]=e=>i.dark_theme=e),id:"theme-switch",type:"checkbox",placeholder:"свитч изменения темы"},null,512),[[r.lH,i.dark_theme]]),b])}var y={name:"switch-theme",props:["themeValue"],data(){return{dark_theme:!1}},methods:{sendValue(){this.$emit("getValue",this.dark_theme)}},mounted(){this.dark_theme=!this.themeValue}};const k=(0,u.A)(y,[["render",g],["__scopeId","data-v-2aa30d52"]]);var w=k;const _=["href"];function E(e,n,t,r,o,i){return(0,a.uX)(),(0,a.CE)("a",{href:t.link,class:"btn"},[(0,a.RG)(e.$slots,"default",{},void 0,!0)],8,_)}var C={name:"main-btn",props:["link"]};const O=(0,u.A)(C,[["render",E],["__scopeId","data-v-1ff46924"]]);var j=O,A=[w,j];const S=(0,o.Ey)(),L=(0,r.Ef)(l);A.forEach((e=>{L.component(e.name,e)})),L.use(p),L.use(S),L.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={exports:{}};return e[r].call(a.exports,a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,c=0;c<r.length;c++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[c])}))?r.splice(c--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var f=o();void 0!==f&&(n=f)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+(594===e?"about":e)+"."+{217:"2f32239f",594:"5c2ad057"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+".9efb41c9.css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="oknaproremont_landing:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,c;if(void 0!==a)for(var f=document.getElementsByTagName("script"),l=0;l<f.length;l++){var s=f[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+a){u=s;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var d=function(n,t){u.onerror=u.onload=null,clearTimeout(h);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},h=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,r,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(t){if(a.onerror=a.onload=null,"load"===t.type)r();else{var i=t&&t.type,u=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+i+": "+u+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=u,a.parentNode&&a.parentNode.removeChild(a),o(c)}};return a.onerror=a.onload=i,a.href=n,t?t.parentNode.insertBefore(a,t.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,null,o,a)}))},o={524:0};t.f.miniCss=function(e,n){var t={217:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,c=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],c=r[2],f=0;if(i.some((function(n){return 0!==e[n]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(c)var l=c(t)}for(n&&n(r);f<i.length;f++)a=i[f],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(l)},r=self["webpackChunkoknaproremont_landing"]=self["webpackChunkoknaproremont_landing"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(214)}));r=t.O(r)})();
//# sourceMappingURL=app.3d5f3295.js.map