!function(){var e,t={},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))},n.u=function(e){return"js/test.70d7622478.js"},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},n.l=function(t,r,o,i){if(e[t])e[t].push(r);else{var u,c;if(void 0!==o)for(var a=document.getElementsByTagName("script"),l=0;l<a.length;l++){var f=a[l];if(f.getAttribute("src")==t){u=f;break}}u||(c=!0,(u=document.createElement("script")).charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.src=t),e[t]=[r];var s=function(r,n){u.onerror=u.onload=null,clearTimeout(d);var o=e[t];if(delete e[t],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(n)})),r)return r(n)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=s.bind(null,u.onerror),u.onload=s.bind(null,u.onload),c&&document.head.appendChild(u)}},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e+"../"}(),function(){var e={179:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(r,n){o=e[t]=[r,n]}));r.push(o[2]=i);var u=n.p+n.u(t),c=new Error;n.l(u,(function(r){if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),u=r&&r.target&&r.target.src;c.message="Loading chunk "+t+" failed.\n("+i+": "+u+")",c.name="ChunkLoadError",c.type=i,c.request=u,o[1](c)}}),"chunk-"+t,t)}};var t=function(t,r){var o,i,u=r[0],c=r[1],a=r[2],l=0;for(o in c)n.o(c,o)&&(n.m[o]=c[o]);for(a&&a(n),t&&t(r);l<u.length;l++)i=u[l],n.o(e,i)&&e[i]&&e[i][0](),e[u[l]]=0},r=self.webpackChunk=self.webpackChunk||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}(),n.e(43).then(n.bind(n,411)).then((({mul:e,count:t})=>{console.log(e(2,5))})).catch((()=>{console.log("文件加载失败~")})),console.log([1,2,3,4].reduce(((e,t)=>e+t),0))}();