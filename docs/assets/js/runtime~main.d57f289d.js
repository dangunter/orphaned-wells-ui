(()=>{"use strict";var e,t,a,r,o,f={},n={};function d(e){var t=n[e];if(void 0!==t)return t.exports;var a=n[e]={id:e,loaded:!1,exports:{}};return f[e].call(a.exports,a,a.exports,d),a.loaded=!0,a.exports}d.m=f,d.c=n,e=[],d.O=(t,a,r,o)=>{if(!a){var f=1/0;for(b=0;b<e.length;b++){a=e[b][0],r=e[b][1],o=e[b][2];for(var n=!0,c=0;c<a.length;c++)(!1&o||f>=o)&&Object.keys(d.O).every((e=>d.O[e](a[c])))?a.splice(c--,1):(n=!1,o<f&&(f=o));if(n){e.splice(b--,1);var i=r();void 0!==i&&(t=i)}}return t}o=o||0;for(var b=e.length;b>0&&e[b-1][2]>o;b--)e[b]=e[b-1];e[b]=[a,r,o]},d.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return d.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,d.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var o=Object.create(null);d.r(o);var f={};t=t||[null,a({}),a([]),a(a)];for(var n=2&r&&e;"object"==typeof n&&!~t.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((t=>f[t]=()=>e[t]));return f.default=()=>e,d.d(o,f),o},d.d=(e,t)=>{for(var a in t)d.o(t,a)&&!d.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},d.f={},d.e=e=>Promise.all(Object.keys(d.f).reduce(((t,a)=>(d.f[a](e,t),t)),[])),d.u=e=>"assets/js/"+({48:"a94703ab",61:"1f391b9e",76:"common",98:"a7bd4aaa",134:"393be207",235:"a7456010",265:"a8bb5334",401:"17896441",583:"1df93b7f",647:"5e95c892",742:"aba21aa0",941:"46d53211",976:"0e384e19"}[e]||e)+"."+{32:"7632ad3e",48:"be5e0574",60:"29616c46",61:"1b14bec9",76:"579580c3",98:"656def23",130:"57b78e5c",134:"f8abecf0",155:"0bc180bf",165:"616c9486",174:"fd227b15",186:"db50c78d",235:"47cad1bc",237:"906ce9e0",247:"403cf1ee",265:"4e378a45",310:"829176a5",357:"e54a8e24",364:"856c3c9c",379:"cd877b0a",387:"7e768689",401:"054a2e77",445:"7ca3e7da",449:"88117eca",452:"e4fe945e",477:"0f8dd950",484:"32073a1c",489:"a3807e5d",496:"8f6a41eb",583:"1f0db21c",606:"67bebaf5",647:"c1943079",664:"9d1ae9c1",711:"de53c208",720:"90e3fc9d",723:"a3c0c9f4",742:"eb7bf6f2",763:"41001c0e",790:"0178050e",802:"54abef09",840:"f02da930",875:"7c118873",890:"e5d3fe6d",921:"6d6629f6",941:"eac4e384",976:"23028784",998:"a4f1e649"}[e]+".js",d.miniCssF=e=>{},d.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),d.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},o="docs:",d.l=(e,t,a,f)=>{if(r[e])r[e].push(t);else{var n,c;if(void 0!==a)for(var i=document.getElementsByTagName("script"),b=0;b<i.length;b++){var u=i[b];if(u.getAttribute("src")==e||u.getAttribute("data-webpack")==o+a){n=u;break}}n||(c=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,d.nc&&n.setAttribute("nonce",d.nc),n.setAttribute("data-webpack",o+a),n.src=e),r[e]=[t];var l=(t,a)=>{n.onerror=n.onload=null,clearTimeout(s);var o=r[e];if(delete r[e],n.parentNode&&n.parentNode.removeChild(n),o&&o.forEach((e=>e(a))),t)return t(a)},s=setTimeout(l.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=l.bind(null,n.onerror),n.onload=l.bind(null,n.onload),c&&document.head.appendChild(n)}},d.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.p="/orphaned-wells-ui/",d.gca=function(e){return e={17896441:"401",a94703ab:"48","1f391b9e":"61",common:"76",a7bd4aaa:"98","393be207":"134",a7456010:"235",a8bb5334:"265","1df93b7f":"583","5e95c892":"647",aba21aa0:"742","46d53211":"941","0e384e19":"976"}[e]||e,d.p+d.u(e)},(()=>{var e={354:0,869:0};d.f.j=(t,a)=>{var r=d.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else if(/^(354|869)$/.test(t))e[t]=0;else{var o=new Promise(((a,o)=>r=e[t]=[a,o]));a.push(r[2]=o);var f=d.p+d.u(t),n=new Error;d.l(f,(a=>{if(d.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=a&&("load"===a.type?"missing":a.type),f=a&&a.target&&a.target.src;n.message="Loading chunk "+t+" failed.\n("+o+": "+f+")",n.name="ChunkLoadError",n.type=o,n.request=f,r[1](n)}}),"chunk-"+t,t)}},d.O.j=t=>0===e[t];var t=(t,a)=>{var r,o,f=a[0],n=a[1],c=a[2],i=0;if(f.some((t=>0!==e[t]))){for(r in n)d.o(n,r)&&(d.m[r]=n[r]);if(c)var b=c(d)}for(t&&t(a);i<f.length;i++)o=f[i],d.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return d.O(b)},a=self.webpackChunkdocs=self.webpackChunkdocs||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})()})();