!function(e){function n(n){for(var r,a,c=n[0],s=n[1],l=n[2],f=0,d=[];f<c.length;f++)a=c[f],o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(u&&u(n);d.length;)d.shift()();return i.push.apply(i,l||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],r=!0,c=1;c<t.length;c++){var s=t[c];0!==o[s]&&(r=!1)}r&&(i.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={2:0},i=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="";var c=window.webpackJsonp=window.webpackJsonp||[],s=c.push.bind(c);c.push=n,c=c.slice();for(var l=0;l<c.length;l++)n(c[l]);var u=s;i.push([13,0]),t()}([function(e,n,t){"use strict";t.d(n,"a",function(){return r});const r={pageLength:6,pageOffset:1e3,mainDiv:document.getElementById("main-content"),debounceTime:100,placeHolderImgLink:"/assets/images/loading.gif"}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(i).concat([o]).join("\n")}var a;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<e.length;o++){var a=e[o];null!=a[0]&&r[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),c=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),s=null,l=0,u=[],f=t(9);function d(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(b(r.parts[a],n))}else{var c=[];for(a=0;a<r.parts.length;a++)c.push(b(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:c}}}}function p(e,n){for(var t=[],r={},o=0;o<e.length;o++){var i=e[o],a=n.base?i[0]+n.base:i[0],c={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(c):t.push(r[a]={id:a,parts:[c]})}return t}function h(e,n){var t=c(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=u[u.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),u.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,t);t.insertBefore(n,o)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=u.indexOf(e);n>=0&&u.splice(n,1)}function g(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return v(n,e.attrs),h(e,n),n}function v(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,o,i;if(n.transform&&e.css){if(!(i="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=i}if(n.singleton){var a=l++;t=s||(s=g(n)),r=w.bind(null,t,a,!1),o=w.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(n,e.attrs),h(e,n),n}(n),r=function(e,n,t){var r=t.css,o=t.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),c=e.href;e.href=URL.createObjectURL(a),c&&URL.revokeObjectURL(c)}.bind(null,t,n),o=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=g(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),o=function(){m(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return d(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(c=i[a.id]).refs--,r.push(c)}e&&d(p(e,n),n);for(o=0;o<r.length;o++){var c;if(0===(c=r[o]).refs){for(var s=0;s<c.parts.length;s++)c.parts[s]();delete i[c.id]}}}};var y,x=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function w(e,n,t,r){var o=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=x(n,o);else{var i=document.createTextNode(o),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(i,a[n]):e.appendChild(i)}}},function(e,n,t){"use strict";t(12),n.a=function(){const e=[].slice.call(document.querySelectorAll("img.lazy")),n=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){let t=e.target;t.src=t.dataset.src,t.classList.remove("lazy"),n.unobserve(t)}})});e.forEach(function(e){n.observe(e)})}},function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(0);function o(e,n){const t=document.createElement("img");return t.classList.add("lazy"),t.dataset.src=e,t.src=n||`./${r.a.placeHolderImgLink}`,t}},,,function(e,n,t){var r=t(8);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(1)(!1)).push([e.i,'/* Globals */\n:root {\n  --font-sans: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  --font-serif: Georgia, serif;\n  --color-secondary: #333;\n  --color-link: #635ac7;\n\n  font-family: var(--font-sans);\n  font-weight: normal;\n  line-height: 1.5;\n}\n\nbody {\n  margin: 0;\n  padding: 20px;\n  background-color: #f5f5f5;\n}\n\na {\n  color: var(--color-link);\n}\n\n/* Global Header */\n.global-header {\n  padding-bottom: 2rem;\n  padding-top: 2rem;\n  text-align: center;\n}\n\n/* Header Quote */\n.header-quote {\n  color: var(--color);\n  font-family: var(--font-serif);\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 460px;\n}\n\n/* Global Footer */\n.global-footer {\n  color: var(--color);\n  font-family: var(--font-serif);\n  text-align: center;\n}\n\ninput[type="text"],\nselect {\n  width: 100%;\n  padding: 12px 20px;\n  margin: 8px 0;\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-sizing: border-box;\n}\n\n/* Custom Css */\nmain {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n}\n\n.card {\n  /* Add shadows to create the "card" effect */\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  transition: 0.3s;\n  min-width: 300px;\n  margin: 10px;\n  padding: 10px;\n  background-color: #fff;\n}\n\n/* On mouse-over, add a deeper shadow */\n.card:hover {\n  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);\n}',""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var o,i=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?t+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},,function(e,n,t){"use strict";t.r(n);var r=t(5),o=t.n(r),i=t(6),a=(t(7),t(14),t(3)),c=t(0),s=t(4);const l={currentPage:0};function u(e){const n=e*c.a.pageLength,t=(e+1)*c.a.pageLength;let r=i.a.slice(n,t).map(e=>(function(e){let n=document.createElement("div");n.classList.add("img-container"),n.appendChild(Object(s.a)(`./${e.thumbnail}`,`./${c.a.placeHolderImgLink}`));let t=document.createElement("h2");t.appendChild(document.createTextNode(e.title));let r=document.createElement("p");r.appendChild(document.createTextNode(e.description));let o=document.createElement("a");o.appendChild(document.createTextNode(`Adopt ${e.title}`)),o.classList.add("adopt-link"),o.href=`./views/describe.html?id=${e.id}`;let i=document.createElement("figcaption");i.appendChild(t),i.appendChild(r);let a=document.createElement("figure");return a.appendChild(n),a.appendChild(i),a.appendChild(o),a.classList.add("card"),a})(e));const l=o.a.reduce(r,(e,n)=>(e.appendChild(n),e),document.createDocumentFragment());c.a.mainDiv.appendChild(l),setTimeout(()=>c.a.mainDiv.appendChild(l),0),setTimeout(a.a,500)}function f(e){(function(){const e=document.body,n=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,n.clientHeight,n.scrollHeight,n.offsetHeight)})()-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)<c.a.pageOffset&&l.currentPage*c.a.pageLength<i.a.length&&u(++l.currentPage)}u(l.currentPage),window.onscroll=o.a.debounce(f,c.a.debounceTime)},function(e,n,t){var r=t(15);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};t(2)(r,o);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(1)(!1)).push([e.i,"figure.card {\n  position: relative;\n  width: 30%;\n}\nfigure.card .img-container {\n  width: 100%;\n  max-height: 360px;\n  overflow: hidden;\n  text-align: center;\n}\n\n/* Add some padding inside the card container */\nfigure.card figcaption {\n  padding: 2px 16px;\n}\n\nfigure.card a.adopt-link {\n  position: absolute;\n  bottom: 10px;\n  right: 10px;\n}\n\nfigure.card img.lazy {\n  width: 100%;\n}\n",""])}]);