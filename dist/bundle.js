(()=>{"use strict";var e={746:(e,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0});const t=o(743);r.default=class{changeCase(e,r){return(0,t.One)(),"L"===r||"l"===r?e.toLowerCase():"u"===r||"U"===r?e.toUpperCase():r}reverseString(e){(0,t.One)();let r="";for(let o=e.length-1;o>=0;o--)r+=e[o];return r}}},178:function(e,r,o){var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});let s=new(t(o(746)).default),n="TypeScript is Great";console.log(`Upper case of ${n} is = ${s.changeCase(n,"u")}`),console.log(`Lower case of ${n} is = ${s.changeCase(n,"L")}`),console.log(`Reverse of ${n} is = ${s.reverseString(n)}`)},743:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.One=void 0,r.One=function(){console.log("One Called.....")}}},r={};!function o(t){var s=r[t];if(void 0!==s)return s.exports;var n=r[t]={exports:{}};return e[t].call(n.exports,n,n.exports,o),n.exports}(178)})();