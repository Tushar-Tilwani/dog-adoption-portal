!function(e){function t(t){for(var r,i,a=t[0],u=t[1],l=t[2],s=0,p=[];s<a.length;s++)i=a[s],o[i]&&p.push(o[i][0]),o[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);for(d&&d(t);p.length;)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={3:0},c=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window.webpackJsonp=window.webpackJsonp||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var d=u;c.push([9,1,0]),n()}([function(e,t,n){"use strict";n.d(t,"a",function(){return r});const r={pageLength:6,pageOffset:1e3,mainDiv:document.getElementById("main-content"),debounceTime:100,placeHolderImgLink:"/assets/images/loading.gif"}},function(e,t,n){"use strict";n(8),t.a=function(){const e=[].slice.call(document.querySelectorAll("img.lazy")),t=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){let n=e.target;n.src=n.dataset.src,n.classList.remove("lazy"),t.unobserve(n)}})});e.forEach(function(e){t.observe(e)})}},function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(0);function o(e,t){const n=document.createElement("img");return n.classList.add("lazy"),n.dataset.src=e,n.src=t||`./${r.a.placeHolderImgLink}`,n}},,,function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},,,function(e,t,n){"use strict";n.r(t);var r=n(3),o=n.n(r),c=n(4),i=(n(7),n(10),n(1)),a=n(0),u=n(2);const l={currentPage:0};function d(e){const t=e*a.a.pageLength,n=(e+1)*a.a.pageLength;let r=c.a.slice(t,n).map(e=>(function(e){let t=document.createElement("a");t.classList.add("img-container"),t.appendChild(Object(u.a)(`./${e.thumbnail}`,`./${a.a.placeHolderImgLink}`)),t.href=`./views/describe.html?id=${e.id}`;let n=document.createElement("a");n.appendChild(document.createTextNode(`Adopt ${e.title}`)),n.classList.add("adopt-link"),n.href=`./views/describe.html?id=${e.id}`;let r=document.createElement("h2");r.appendChild(document.createTextNode(e.title));let o=document.createElement("p");o.appendChild(document.createTextNode(e.description));let c=document.createElement("figcaption");c.appendChild(r),c.appendChild(o);let i=document.createElement("figure");return i.appendChild(t),i.appendChild(c),i.appendChild(n),i.classList.add("card"),i})(e));const l=o.a.reduce(r,(e,t)=>(e.appendChild(t),e),document.createDocumentFragment());a.a.mainDiv.appendChild(l),setTimeout(()=>a.a.mainDiv.appendChild(l),0),setTimeout(i.a,500)}function s(e){(function(){const e=document.body,t=document.documentElement;return Math.max(e.scrollHeight,e.offsetHeight,t.clientHeight,t.scrollHeight,t.offsetHeight)})()-(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0)<a.a.pageOffset&&l.currentPage*a.a.pageLength<c.a.length&&d(++l.currentPage)}d(l.currentPage),window.onscroll=o.a.debounce(s,a.a.debounceTime)},function(e,t,n){}]);