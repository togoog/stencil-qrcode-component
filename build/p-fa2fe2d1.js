let t,e,n=0,l=!1;const r="undefined"!=typeof window?window:{},o=r.CSS,s=r.document||{head:{}},c={t:0,l:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,l)=>t.addEventListener(e,n,l),rel:(t,e,n,l)=>t.removeEventListener(e,n,l)},i=(()=>(s.head.attachShadow+"").indexOf("[native")>-1)(),a=t=>Promise.resolve(t),u=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),f=new WeakMap,p=t=>f.get(t),m=(t,e)=>f.set(e.o=t,e),$=t=>console.error(t),h=new Map,d=new Map,w=[],y=[],_=[],b=(t,e)=>n=>{t.push(n),l||(l=!0,e&&4&c.t?j(v):c.raf(v))},g=(t,e)=>{let n=0,l=0;for(;n<t.length&&(l=performance.now())<e;)try{t[n++](l)}catch(r){$(r)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},v=()=>{n++,(t=>{for(let n=0;n<t.length;n++)try{t[n](performance.now())}catch(e){$(e)}t.length=0})(w);const t=2==(6&c.t)?performance.now()+10*Math.ceil(n*(1/22)):1/0;g(y,t),g(_,t),y.length>0&&(_.push(...y),y.length=0),(l=w.length+y.length+_.length>0)?c.raf(v):n=0},j=t=>a().then(t),S=b(y,!0),M={},q=t=>"object"==(t=typeof t)||"function"===t,R=()=>o&&o.supports&&o.supports("color","var(--c)")?a():__sc_import_stqrcmp("./p-1826e5f0.js").then(()=>(c.s=r.__cssshim)?(!1).i():0),L=()=>{c.s=r.__cssshim;const t=Array.from(s.querySelectorAll("script")).find(t=>new RegExp("/stqrcmp(\\.esm)?\\.js($|\\?|#)").test(t.src)||"stqrcmp"===t.getAttribute("data-stencil-namespace")),e={};return"onbeforeload"in t&&!history.scrollRestoration?{then(){}}:(e.resourcesUrl=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,r.location.href)).href,U(e.resourcesUrl,t),r.customElements?a(e):__sc_import_stqrcmp("./p-3b66a627.js").then(()=>e))},U=(t,e)=>{const n=`__sc_import_${"stqrcmp".replace(/\s|-/g,"_")}`;try{r[n]=new Function("w",`return import(w);//${Math.random()}`)}catch(l){const o=new Map;r[n]=l=>{const c=new URL(l,t).href;let i=o.get(c);if(!i){const t=s.createElement("script");t.type="module",t.crossOrigin=e.crossOrigin,t.src=URL.createObjectURL(new Blob([`import * as m from '${c}'; window.${n}.m = m;`],{type:"application/javascript"})),i=new Promise(e=>{t.onload=()=>{e(r[n].m),t.remove()}}),o.set(c,i),s.head.appendChild(t)}return i}}},k=new WeakMap,O=t=>"sc-"+t,P=(t,e,...n)=>{let l=null,r=!1,o=!1,s=[];const c=e=>{for(let n=0;n<e.length;n++)l=e[n],Array.isArray(l)?c(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof t&&!q(l))&&(l=String(l)),r&&o?s[s.length-1].u+=l:s.push(r?x(null,l):l),o=r)};c(n);const i=x(t,null);return i.p=e,s.length>0&&(i.$=s),i},x=(t,e)=>({t:0,h:t,u:e,_:null,$:null,p:null}),C={},A=(t,e,n,l,r,o)=>{if(n!==l){let c=((t,e)=>e in t)(t,e);e.toLowerCase();{const i=q(l);if((c||i&&null!==l)&&!r)try{if(t.tagName.includes("-"))t[e]=l;else{let r=null==l?"":l;"list"===e?c=!1:null!=n&&t[e]==r||(t[e]=r)}}catch(s){}null==l||!1===l?t.removeAttribute(e):(!c||4&o||r)&&!i&&t.setAttribute(e,l=!0===l?"":l)}}},E=(t,e,n,l)=>{const r=11===e._.nodeType&&e._.host?e._.host:e._,o=t&&t.p||M,s=e.p||M;for(l in o)l in s||A(r,l,o[l],void 0,n,e.t);for(l in s)A(r,l,o[l],s[l],n,e.t)},F=(e,n,l)=>{let r,o,c=n.$[l],i=0;if(r=c._=s.createElement(c.h),E(null,c,!1),null!=t&&r["s-si"]!==t&&r.classList.add(r["s-si"]=t),c.$)for(i=0;i<c.$.length;++i)o=F(e,c,i),o&&r.appendChild(o);return r},T=(t,n,l,r,o,s)=>{let c,i=t;for(i.shadowRoot&&i.tagName===e&&(i=i.shadowRoot);o<=s;++o)r[o]&&(c=F(null,l,o),c&&(r[o]._=c,i.insertBefore(c,n)))},W=(t,e,n,l)=>{for(;e<=n;++e)(l=t[e])&&l._.remove()},B=(t,e)=>t.h===e.h,H=(t,e)=>{const n=e._=t._,l=t.$,r=e.$;E(t,e,!1),null!==l&&null!==r?((t,e,n,l)=>{let r,o=0,s=0,c=e.length-1,i=e[0],a=e[c],u=l.length-1,f=l[0],p=l[u];for(;o<=c&&s<=u;)null==i?i=e[++o]:null==a?a=e[--c]:null==f?f=l[++s]:null==p?p=l[--u]:B(i,f)?(H(i,f),i=e[++o],f=l[++s]):B(a,p)?(H(a,p),a=e[--c],p=l[--u]):B(i,p)?(H(i,p),t.insertBefore(i._,a._.nextSibling),i=e[++o],p=l[--u]):B(a,f)?(H(a,f),t.insertBefore(a._,i._),a=e[--c],f=l[++s]):(r=F(e&&e[s],n,s),f=l[++s],r&&i._.parentNode.insertBefore(r,i._));o>c?T(t,null==l[u+1]?null:l[u+1]._,n,l,s,u):s>u&&W(e,o,c)})(n,l,e,r):null!==r?T(n,null,e,r,0,r.length-1):null!==l&&W(l,0,l.length-1)},N=(t,e)=>{e&&!t.g&&e["s-p"].push(new Promise(e=>t.g=e))},V=(t,e,n,l)=>{if(e.t|=16,4&e.t)return void(e.t|=512);const r=e.o,o=()=>z(t,e,n,r,l);let s;return N(e,e.v),l&&(s=J(r,"componentWillLoad")),K(s,()=>S(o))},z=(n,l,r,o,c)=>{const a=n["s-rc"];c&&((t,e)=>{const n=((t,e)=>{let n=O(e.j),l=d.get(n);if(t=11===t.nodeType?t:s,l)if("string"==typeof l){let e,r=k.get(t=t.head||t);r||k.set(t,r=new Set),r.has(n)||(e=s.createElement("style"),e.innerHTML=l,t.insertBefore(e,t.querySelector("link")),r&&r.add(n))}else t.adoptedStyleSheets.includes(l)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,l]);return n})(i&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e);10&e.t&&(t["s-sc"]=n,t.classList.add(n+"-h"))})(n,r),((n,l,r,o)=>{e=n.tagName;const s=l.S||x(null,null),c=(i=o)&&i.h===C?o:P(null,null,o);var i;c.h=null,c.t|=4,l.S=c,c._=s._=n.shadowRoot||n,t=n["s-sc"],H(s,c)})(n,l,0,D(o)),l.t&=-17,l.t|=2,a&&(a.forEach(t=>t()),n["s-rc"]=void 0);{const t=n["s-p"],e=()=>G(n,l,r);0===t.length?e():(Promise.all(t).then(e),l.t|=4,t.length=0)}},D=t=>{try{t=t.render()}catch(e){$(e)}return t},G=(t,e,n)=>{const l=e.v;64&e.t||(e.t|=64,Q(t),e.M(t),l||I()),e.g&&(e.g(),e.g=void 0),512&e.t&&j(()=>V(t,e,n,!1)),e.t&=-517},I=()=>{Q(s.documentElement),c.t|=2},J=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(l){$(l)}},K=(t,e)=>t&&t.then?t.then(e):e(),Q=t=>t.classList.add("hydrated"),X=(t,e,n)=>{if(e.q){t.watchers&&(e.R=t.watchers);const l=Object.entries(e.q),r=t.prototype;if(l.forEach(([t,[l]])=>{(31&l||2&n&&32&l)&&Object.defineProperty(r,t,{get(){return e=t,p(this).L.get(e);var e},set(n){((t,e,n,l)=>{const r=p(this),o=r.U,s=r.L.get(e),c=r.t,i=r.o;var a,u;if(u=l.q[e][0],!((n=null==(a=n)||q(a)?a:2&u?parseFloat(a):1&u?String(a):a)===s||8&c&&void 0!==s)&&(r.L.set(e,n),i)){if(l.R&&128&c){const t=l.R[e];t&&t.forEach(t=>{try{i[t](n,s,e)}catch(l){$(l)}})}2==(18&c)&&V(o,r,l,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0})}),1&n){const e=new Map;r.attributeChangedCallback=function(t,n,l){c.jmp(()=>{const n=e.get(t);this[n]=(null!==l||"boolean"!=typeof this[n])&&l})},t.observedAttributes=l.filter(([t,e])=>15&e[0]).map(([t,n])=>{const l=n[1]||t;return e.set(l,t),l})}}return t},Y=(t,e={})=>{const n=[],l=e.exclude||[],o=r.customElements,a=s.head,m=a.querySelector("meta[charset]"),w=s.createElement("style"),y=[];let _,b=!0;Object.assign(c,e),c.l=new URL(e.resourcesUrl||"./",s.baseURI).href,e.syncQueue&&(c.t|=4),t.forEach(t=>t[1].forEach(e=>{const r={t:e[0],j:e[1],q:e[2],k:e[3]};r.q=e[2],r.R={},!i&&1&r.t&&(r.t|=8);const s=r.j,a=class extends HTMLElement{constructor(t){super(t),(t=>{const e={t:0,U:t,L:new Map};e.O=new Promise(t=>e.M=t),t["s-p"]=[],t["s-rc"]=[],f.set(t,e)})(t=this),1&r.t&&(i?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){_&&(clearTimeout(_),_=null),b?y.push(this):c.jmp(()=>((t,e)=>{if(0==(1&c.t)){const n=()=>{},l=p(t);if(!(1&l.t)){l.t|=1;{let e=t;for(;e=e.parentNode||e.host;)if(e["s-p"]){N(l,l.v=e);break}}e.q&&Object.entries(e.q).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),j(()=>(async(t,e,n,l,r)=>{if(0==(32&e.t)){e.t|=32;{if((r=(t=>{const e=t.j.replace(/-/g,"_"),n=t.P,l=h.get(n);return l?l[e]:__sc_import_stqrcmp(`./${n}.entry.js`).then(t=>(h.set(n,t),t[e]),$)})(n)).then){const t=()=>{};r=await r,t()}r.isProxied||(n.R=r.watchers,X(r,n,2),r.isProxied=!0);const t=()=>{};e.t|=8;try{new r(e)}catch(c){$(c)}e.t&=-9,e.t|=128,t()}const t=O(n.j);if(!d.has(t)&&r.style){const e=()=>{};let l=r.style;8&n.t&&(l=await __sc_import_stqrcmp("./p-93e23355.js").then(e=>e.scopeCss(l,t,!1))),((t,e,n)=>{let l=d.get(t);u&&n?(l=l||new CSSStyleSheet,l.replace(e)):l=e,d.set(t,l)})(t,l,!!(1&n.t)),e()}}const o=e.v,s=()=>V(t,e,n,!0);o&&o["s-rc"]?o["s-rc"].push(s):s()})(t,l,e))}n()}})(this,r))}disconnectedCallback(){c.jmp(()=>{})}forceUpdate(){((t,e)=>{{const n=p(t);n.U.isConnected&&2==(18&n.t)&&V(t,n,e,!1)}})(this,r)}componentOnReady(){return p(this).O}};r.P=t[0],l.includes(s)||o.get(s)||(n.push(s),o.define(s,X(a,r,1)))})),w.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",w.setAttribute("data-styles",""),a.insertBefore(w,m?m.nextSibling:a.firstChild),b=!1,y.length>0?y.forEach(t=>t.connectedCallback()):c.jmp(()=>_=setTimeout(I,30))};export{R as a,Y as b,P as h,L as p,m as r};