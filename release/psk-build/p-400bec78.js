const e={allRenderFn:!0,cmpDidLoad:!0,cmpDidUnload:!1,cmpDidUpdate:!1,cmpDidRender:!1,cmpWillLoad:!0,cmpWillUpdate:!1,cmpWillRender:!1,connectedCallback:!1,disconnectedCallback:!1,element:!1,event:!0,hasRenderFn:!0,lifecycle:!0,hostListener:!0,hostListenerTargetWindow:!0,hostListenerTargetDocument:!0,hostListenerTargetBody:!1,hostListenerTargetParent:!1,hostListenerTarget:!0,member:!0,method:!1,mode:!1,noVdomRender:!1,observeAttribute:!0,prop:!0,propBoolean:!0,propNumber:!0,propString:!0,propMutable:!0,reflect:!0,scoped:!1,shadowDom:!0,slot:!0,slotRelocation:!0,state:!0,style:!0,svg:!1,updatable:!0,vdomAttribute:!0,vdomClass:!0,vdomFunctional:!0,vdomKey:!0,vdomListener:!0,vdomRef:!0,vdomRender:!0,vdomStyle:!0,vdomText:!0,watchCallback:!0,taskQueue:!0,lazyLoad:!0,hydrateServerSide:!1,cssVarShim:!0,hydrateClientSide:!1,isDebug:!1,isDev:!1,lifecycleDOMEvents:!1,profile:!1,hotModuleReplacement:!1,constructableCSS:!0,initializeNextTick:!0,cssAnnotations:!0};let t,n,o,s=0,l=!1,r=!1,i=!1,c=!1;const a=window,f=document,d={t:0,o:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o)},u=(()=>!!f.documentElement.attachShadow)(),p=(()=>{try{return new CSSStyleSheet,!0}catch(e){}return!1})(),m=new WeakMap,$=e=>m.get(e),h=(e,t)=>m.set(t.s=e,t),b=(e,t)=>t in e,y=e=>console.error(e),w=new Map,v=new Map,g=[],_=[],k=[],R=(e,t)=>n=>{e.push(n),l||(l=!0,t&&4&d.t?j(L):d.raf(L))},S=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){y(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},L=()=>{s++,(e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){y(e)}e.length=0})(g);const e=2==(6&d.t)?performance.now()+10*Math.ceil(s*(1/22)):1/0;S(_,e),S(k,e),_.length>0&&(k.push(..._),_.length=0),(l=g.length+_.length+k.length>0)?d.raf(L):s=0},j=e=>Promise.resolve().then(e),M=R(_,!0),T={},U=e=>null!=e,C=e=>e.toLowerCase(),D=e=>"object"==(e=typeof e)||"function"===e,x=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_psk_build("./p-8178315f.js"),O=async()=>{const e=new RegExp("/psk-build(\\.esm)?\\.js($|\\?|#)"),t=Array.from(f.querySelectorAll("script")).find(t=>e.test(t.src)||"psk-build"===t.getAttribute("data-namespace")),n=t["data-opts"];{const e=new URL(".",new URL(t.getAttribute("data-resources-url")||t.src,a.location.href));return W(e.href),window.customElements||await __sc_import_psk_build("./p-59290340.js"),Object.assign({},n,{resourcesUrl:e.href})}},W=e=>{const t=(()=>`__sc_import_${"psk-build".replace(/\s|-/g,"_")}`)();try{a[t]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const o=new Map;a[t]=n=>{const s=new URL(n,e).href;let l=o.get(s);if(!l){const e=f.createElement("script");e.type="module",e.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${t}.m = m;`],{type:"application/javascript"})),l=new Promise(n=>{e.onload=()=>{n(a[t].m),e.remove()}}),o.set(s,l),f.head.appendChild(e)}return l}}},A=new WeakMap,E=e=>"sc-"+e,F=(e,t,...n)=>{let o,s,l=null,r=!1,i=!1,c=[];const a=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?a(l):null!=l&&"boolean"!=typeof l&&((r="function"!=typeof e&&!D(l))&&(l=String(l)),r&&i?c[c.length-1].l+=l:c.push(r?{t:0,l}:l),i=r)};if(a(n),t){o=t.key||void 0,s=t.name;{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}}if("function"==typeof e)return e(t,c,B);const f={t:0,i:e,u:c.length>0?c:null,p:void 0,$:t};return f.h=o,f.v=s,f},P={},B={forEach:(e,t)=>e.map(N).forEach(t),map:(e,t)=>e.map(N).map(t).map(V)},N=e=>({vattrs:e.$,vchildren:e.u,vkey:e.h,vname:e.v,vtag:e.i,vtext:e.l}),V=e=>({t:0,$:e.vattrs,u:e.vchildren,h:e.vkey,v:e.vname,i:e.vtag,l:e.vtext}),z=(e,t,n,o,s,l)=>{if(n!==o)if("class"===t){const t=e.classList;q(n).forEach(e=>t.remove(e)),q(o).forEach(e=>t.add(e))}else if("style"===t){for(const t in n)o&&null!=o[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in o)n&&o[t]===n[t]||(t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if("key"===t);else if("ref"===t)o&&o(e);else if(t.startsWith("on")&&!b(e,t))t=b(e,C(t))?C(t.substring(2)):C(t[2])+t.substring(3),n&&d.rel(e,t,n,!1),o&&d.ael(e,t,o,!1);else{const n=b(e,t),r=D(o);if((n||r&&null!==o)&&!s)try{if(e.tagName.includes("-"))e[t]=o;else{const n=null==o?"":o;e[t]!==n&&(e[t]=n)}}catch(e){}null==o||!1===o?e.removeAttribute(t):(!n||4&l||s)&&!r&&(o=!0===o?"":o.toString(),e.setAttribute(t,o))}},q=e=>e?e.split(/\s+/).filter(e=>e):[],H=(e,t,n,o)=>{const s=11===t.p.nodeType&&t.p.host?t.p.host:t.p,l=e&&e.$||T,r=t.$||T;for(o in l)o in r||z(s,o,l[o],void 0,n,t.t);for(o in r)z(s,o,l[o],r[o],n,t.t)},K=(e,s,l,i)=>{let a,d,u,p=s.u[l],m=0;if(r||(c=!0,"slot"===p.i&&(t&&i.classList.add(t+"-s"),p.t|=p.u?2:1)),U(p.l))p.p=f.createTextNode(p.l);else if(1&p.t)p.p=f.createTextNode("");else if(a=p.p=f.createElement(2&p.t?"slot-fb":p.i),H(null,p,!1),U(t)&&a["s-si"]!==t&&a.classList.add(a["s-si"]=t),p.u)for(m=0;m<p.u.length;++m)(d=K(e,p,m,a))&&a.appendChild(d);return p.p["s-hn"]=o,3&p.t&&(p.p["s-sr"]=!0,p.p["s-cr"]=n,p.p["s-sn"]=p.v||"",(u=e&&e.u&&e.u[l])&&u.i===p.i&&e.p&&Q(e.p,!1)),p.p},Q=(e,t)=>{d.t|=1;const n=e.childNodes;for(let e=n.length-1;e>=0;e--){const s=n[e];s["s-hn"]!==o&&s["s-ol"]&&(Y(s).insertBefore(s,X(s)),s["s-ol"].remove(),s["s-ol"]=void 0,c=!0),t&&Q(s,t)}d.t&=-2},G=(e,t,n,s,l,r)=>{let i,c=e["s-cr"]&&e["s-cr"].parentNode||e;for(c.shadowRoot&&C(c.tagName)===o&&(c=c.shadowRoot);l<=r;++l)s[l]&&(i=K(null,n,l,e))&&(s[l].p=i,c.insertBefore(i,X(t)))},I=(e,t,n,o)=>{for(;t<=n;++t)U(e[t])&&(o=e[t].p,oe(e[t],!0),i=!0,o["s-ol"]?o["s-ol"].remove():Q(o,!0),o.remove())},J=(e,t)=>e.i===t.i&&("slot"===e.i?e.v===t.v:e.h===t.h),X=e=>e&&e["s-ol"]||e,Y=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,Z=(e,t)=>{const n=t.p=e.p,o=e.u,s=t.u;let l;U(t.l)?(l=n["s-cr"])?l.parentNode.textContent=t.l:e.l!==t.l&&(n.textContent=t.l):("slot"===t.i||H(e,t,!1),U(o)&&U(s)?((e,t,n,o)=>{let s,l,r=0,i=0,c=0,a=0,f=t.length-1,d=t[0],u=t[f],p=o.length-1,m=o[0],$=o[p];for(;r<=f&&i<=p;)if(null==d)d=t[++r];else if(null==u)u=t[--f];else if(null==m)m=o[++i];else if(null==$)$=o[--p];else if(J(d,m))Z(d,m),d=t[++r],m=o[++i];else if(J(u,$))Z(u,$),u=t[--f],$=o[--p];else if(J(d,$))"slot"!==d.i&&"slot"!==$.i||Q(d.p.parentNode,!1),Z(d,$),e.insertBefore(d.p,u.p.nextSibling),d=t[++r],$=o[--p];else if(J(u,m))"slot"!==d.i&&"slot"!==$.i||Q(u.p.parentNode,!1),Z(u,m),e.insertBefore(u.p,d.p),u=t[--f],m=o[++i];else{for(c=-1,a=r;a<=f;++a)if(t[a]&&U(t[a].h)&&t[a].h===m.h){c=a;break}c>=0?((l=t[c]).i!==m.i?s=K(t&&t[i],n,c,e):(Z(l,m),t[c]=void 0,s=l.p),m=o[++i]):(s=K(t&&t[i],n,i,e),m=o[++i]),s&&Y(d.p).insertBefore(s,X(d.p))}r>f?G(e,null==o[p+1]?null:o[p+1].p,n,o,i,p):i>p&&I(t,r,f)})(n,o,t,s):U(s)?(U(e.l)&&(n.textContent=""),G(n,null,t,s,0,s.length-1)):U(o)&&I(o,0,o.length-1))},ee=(e,t,n,o,s,l,r,i)=>{for(o=0,s=(n=e.childNodes).length;o<s;o++)if(1===(t=n[o]).nodeType){if(t["s-sr"])for(r=t["s-sn"],t.hidden=!1,l=0;l<s;l++)if(n[l]["s-hn"]!==t["s-hn"])if(i=n[l].nodeType,""!==r){if(1===i&&r===n[l].getAttribute("slot")){t.hidden=!0;break}}else if(1===i||3===i&&""!==n[l].textContent.trim()){t.hidden=!0;break}ee(t)}},te=[],ne=e=>{let t,n,o,s,l=e.childNodes,r=l.length,c=0,a=0,f=0;for(r=l.length;c<r;c++){if((t=l[c])["s-sr"]&&(n=t["s-cr"]))for(s=t["s-sn"],a=(o=n.parentNode.childNodes).length-1;a>=0;a--)(n=o[a])["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(te.some(e=>e.g===n)||(i=!0,n["s-sn"]=s,te.push({_:t,g:n})));1===t.nodeType&&ne(t)}},oe=(e,t)=>{e&&(e.$&&e.$.ref&&e.$.ref(t?null:e.p),e.u&&e.u.forEach(e=>{oe(e,t)}))},se=(e,t,n,o)=>{t.t|=16;const s=t.s,l=()=>le(e,t,n,s,o);let r;return o&&(t.t|=256,t.k&&(t.k.forEach(([e,t])=>ce(s,e,t)),t.k=null),r=ce(s,"componentWillLoad")),ae(r,()=>M(l))},le=(e,s,l,a,p)=>{s.t&=-17,e["s-lr"]=!1,p&&((e,t)=>{const n=((e,t)=>{let n=E(t.R),o=v.get(n);if(e=11===e.nodeType?e:f,o)if("string"==typeof o){let t,s=A.get(e=e.head||e);s||A.set(e,s=new Set),s.has(n)||((t=f.createElement("style")).innerHTML=o,e.insertBefore(t,e.querySelector("link")),s&&s.add(n))}else e.adoptedStyleSheets.includes(o)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,o]);return n})(u&&e.shadowRoot?e.shadowRoot:e.getRootNode(),t);10&t.t&&(e["s-sc"]=n,e.classList.add(n+"-h"))})(e,l),s.t|=4;try{((e,s,l,a)=>{o=C(e.tagName);const p=s.S||{t:0},m=(e=>e&&e.i===P)(a)?a:F(null,null,a);if(l.L&&(m.$=m.$||{},l.L.forEach(([t,n])=>m.$[n]=e[t])),m.i=null,m.t|=4,s.S=m,m.p=p.p=e.shadowRoot||e,t=e["s-sc"],n=e["s-cr"],r=u&&0!=(1&l.t),c=i=!1,Z(p,m),c){ne(m.p);for(let e=0;e<te.length;e++){const t=te[e];if(!t.g["s-ol"]){const e=f.createTextNode("");e["s-nr"]=t.g,t.g.parentNode.insertBefore(t.g["s-ol"]=e,t.g)}}d.t|=1;for(let e=0;e<te.length;e++){const t=te[e],n=t._.parentNode;let o=t._.nextSibling,s=t.g["s-ol"];for(;s=s.previousSibling;){let e=s["s-nr"];if(e&&e["s-sn"]===t.g["s-sn"]&&n===e.parentNode&&(!(e=e.nextSibling)||!e["s-nr"])){o=e;break}}(!o&&n!==t.g.parentNode||t.g.nextSibling!==o)&&t.g!==o&&n.insertBefore(t.g,o)}d.t&=-2}i&&ee(m.p),te.length=0})(e,s,l,a.render())}catch(e){y(e)}s.t&=-5,e["s-lr"]=!0,s.t|=2,e["s-rc"].length>0&&(e["s-rc"].forEach(e=>e()),e["s-rc"].length=0),re(e,s)},re=(t,n,o)=>{if(!t["s-al"]){const s=n.s,l=n.j;64&n.t||(n.t|=64,t.classList.add("hydrated"),e.cmpDidLoad&&ce(s,"componentDidLoad"),n.M(t),l||ie()),l&&((o=l["s-al"])&&(o.delete(t),0===o.size&&(l["s-al"]=void 0,l["s-init"]())),n.j=void 0)}},ie=()=>{f.documentElement.classList.add("hydrated"),d.t|=2},ce=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){y(e)}},ae=(e,t)=>e&&e.then?e.then(t):t(),fe=(e,t,n)=>{if(t.T){e.watchers&&(t.U=e.watchers);const o=Object.entries(t.T),s=e.prototype;if(o.forEach(([e,[o]])=>{(31&o||2&n&&32&o)&&Object.defineProperty(s,e,{get(){return((e,t)=>$(e).C.get(t))(this,e)},set(n){((e,t,n,o)=>{const s=$(this),l=s.D,r=s.C.get(t),i=s.t;if(!((n=((e,t)=>null==e||D(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?String(e):e)(n,o.T[t][0]))===r||8&i&&void 0!==r)&&(s.C.set(t,n),s.s)){if(o.U&&128&i){const e=o.U[t];e&&e.forEach(e=>{try{s.s[e].call(s.s,n,r,t)}catch(e){y(e)}})}2==(22&i)&&se(l,s,o,!1)}})(0,e,n,t)},configurable:!0,enumerable:!0})}),1&n){const n=new Map;s.attributeChangedCallback=function(e,t,o){d.jmp(()=>{const t=n.get(e);this[t]=(null!==o||"boolean"!=typeof this[t])&&o})},e.observedAttributes=o.filter(([e,t])=>15&t[0]).map(([e,o])=>{const s=o[1]||e;return n.set(s,e),512&o[0]&&t.L.push([e,s]),s})}}return e},de=(e,t)=>{(t=e["s-cr"]=f.createComment(""))["s-cn"]=!0,e.insertBefore(t,e.firstChild)},ue=(t,n={})=>{const o=[],s=n.exclude||[],l=f.head,r=a.customElements,i=l.querySelector("meta[charset]"),c=f.createElement("style");let h;Object.assign(d,n),d.o=new URL(n.resourcesUrl||"./",f.baseURI).href,n.syncQueue&&(d.t|=4),t.forEach(t=>t[1].forEach(n=>{const l={t:n[0],R:n[1],T:n[2],O:n[3],L:[],U:{}};!u&&1&l.t&&(l.t|=8);const i=l.R;l.W=t[0],s.includes(i)||r.get(i)||(o.push(i),r.define(i,fe(class extends HTMLElement{constructor(e){super(e),e=this,this["s-lr"]=!1,this["s-rc"]=[],(e=>{{const t={t:0,D:e,C:new Map};t.A=new Promise(e=>t.M=e),m.set(e,t)}})(e),1&l.t&&(u?e.attachShadow({mode:"open"}):"shadowRoot"in e||(e.shadowRoot=e))}connectedCallback(){h&&(clearTimeout(h),h=null),d.jmp(()=>((e,t)=>{if(0==(1&d.t)){const n=$(e);if(t.O&&(n.F=((e,t,n)=>{t.k=t.k||[];const o=n.map(([n,o,s])=>{const l=((e,t)=>4&t?f:8&t?a:e)(e,n),r=((e,t)=>n=>{256&e.t?e.s[t](n):e.k.push([t,n])})(t,s),i=(e=>({passive:0!=(1&e),capture:0!=(2&e)}))(n);return d.ael(l,o,r,i),()=>d.rel(l,o,r,i)});return()=>o.forEach(e=>e())})(e,n,t.O)),!(1&n.t)){let o;n.t|=1,o||(4&t.t||8&t.t)&&de(e);{let t=e;for(;t=t.parentNode||t.host;)if(t["s-init"]&&!1===t["s-lr"]){n.j=t,(t["s-al"]=t["s-al"]||new Set).add(e);break}}t.T&&Object.entries(t.T).forEach(([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}}),j(()=>(async(e,t,n,o,s)=>{if(0==(32&t.t)){t.t|=32,(s=(e=>{const t=e.R.replace(/-/g,"_"),n=e.W,o=w.get(n);return o?o[t]:__sc_import_psk_build(`./${n}.entry.js`).then(e=>(w.set(n,e),e[t]),y)})(n)).then&&(s=await s),s.isProxied||(n.U=s.watchers,fe(s,n,2),s.isProxied=!0),t.t|=8;try{new s(t)}catch(e){y(e)}t.t&=-9,t.t|=128;const e=E(n.R);if(!v.has(e)&&s.style){let t=s.style;8&n.t&&(t=await __sc_import_psk_build("./p-c68d0961.js").then(n=>n.scopeCss(t,e,!1))),((e,t,n)=>{let o=v.get(e);p&&n?(o=o||new CSSStyleSheet).replace(t):o=t,v.set(e,o)})(e,t,!!(1&n.t))}}const l=t.j,r=()=>se(e,t,n,!0);l&&!1===l["s-lr"]&&l["s-rc"]?l["s-rc"].push(r):r()})(e,n,t))}}})(this,l))}disconnectedCallback(){d.jmp(()=>(()=>{if(0==(1&d.t)){const t=$(this),n=t.s;t.F&&(t.F(),t.F=void 0),e.cmpDidUnload&&ce(n,"componentDidUnload")}})())}"s-init"(){const e=$(this);e.s&&re(this,e)}"s-hmr"(e){}forceUpdate(){((e,t)=>{{const n=$(e);2&n.t&&se(e,n,t,!1)}})(this,l)}componentOnReady(){return $(this).A}},l,1)))})),c.innerHTML=o+"{visibility:hidden}.hydrated{visibility:inherit}",c.setAttribute("data-styles",""),l.insertBefore(c,i?i.nextSibling:l.firstChild),d.jmp(()=>h=setTimeout(ie,30))},pe=(e,t,n)=>{const o=me(e);return{emit:e=>o.dispatchEvent(new CustomEvent(t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},me=e=>$(e).D;export{e as B,x as a,ue as b,pe as c,me as g,F as h,O as p,h as r};