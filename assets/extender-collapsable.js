!function(){"use strict";var t,e={9675:function(t,e,n){var r=n(5671),o=n(136),a=n(6215),c=n(1120),i=n(2407),u=n(6358);var l=function(t){(0,o.Z)(l,t);var e,n,i=(e=l,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,r=(0,c.Z)(e);if(n){var o=(0,c.Z)(this).constructor;t=Reflect.construct(r,arguments,o)}else t=r.apply(this,arguments);return(0,a.Z)(this,t)});function l(){var t;(0,r.Z)(this,l);var e=(t=i.call(this)).querySelectorAll(".collapsable");return e&&e.forEach((function(t){var e=t.querySelector(".collapsable__button"),n=t.querySelector(".collapsable__content");e.addEventListener("click",(function(){t.classList.contains("collapsable--active")?(u.ZP.to(n,{opacity:0,paddingBottom:0,y:-20,duration:.35,ease:"power4.out"}),u.ZP.to(n,{height:0,pointerEvents:"none",duration:.5,ease:"power4.out"}),t.classList.remove("collapsable--active")):(u.ZP.to(n,{opacity:1,paddingBottom:24,y:0,duration:.35,ease:"power4.out"}),u.ZP.to(n,{height:"100%",pointerEvents:"auto",duration:.5,ease:"power4.out"}),t.classList.add("collapsable--active"))}))})),t}return l}((0,i.Z)(HTMLElement));void 0===customElements.get("collapsable-handler")&&customElements.define("collapsable-handler",l)}},n={};function r(t){var o=n[t];if(void 0!==o)return o.exports;var a=n[t]={exports:{}};return e[t](a,a.exports,r),a.exports}r.m=e,t=[],r.O=function(e,n,o,a){if(!n){var c=1/0;for(s=0;s<t.length;s++){n=t[s][0],o=t[s][1],a=t[s][2];for(var i=!0,u=0;u<n.length;u++)(!1&a||c>=a)&&Object.keys(r.O).every((function(t){return r.O[t](n[u])}))?n.splice(u--,1):(i=!1,a<c&&(c=a));if(i){t.splice(s--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var s=t.length;s>0&&t[s-1][2]>a;s--)t[s]=t[s-1];t[s]=[n,o,a]},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,{a:e}),e},r.d=function(t,e){for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.j=3511,function(){var t={3511:0};r.O.j=function(e){return 0===t[e]};var e=function(e,n){var o,a,c=n[0],i=n[1],u=n[2],l=0;if(c.some((function(e){return 0!==t[e]}))){for(o in i)r.o(i,o)&&(r.m[o]=i[o]);if(u)var s=u(r)}for(e&&e(n);l<c.length;l++)a=c[l],r.o(t,a)&&t[a]&&t[a][0](),t[c[l]]=0;return r.O(s)},n=self.webpackChunkmarlin=self.webpackChunkmarlin||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var o=r.O(void 0,[1216],(function(){return r(9675)}));o=r.O(o)}();