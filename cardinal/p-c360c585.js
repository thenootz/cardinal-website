import{g as t}from"./p-9835b40a.js";import{c as e}from"./p-6aa7f1b2.js";function n(t){let e=this;Object.keys(t).forEach((function(n){e[n]=t[n]}))}function o(t,e){try{let n=this;if(n.rootModel){let o=t;return n.parentChain&&(o=`${n.parentChain}.${t}`),n.rootModel.setChainValue(o,e),!0}return!1}catch(n){console.error(n)}return!1}function l(e,n){if(e||!n)return;let o,l,i,r=this,c=t(r);if(null!==c.getAttribute("data-view-model")&&"psk-for-each"===c.tagName.toLowerCase())return o=c.getAttribute("data-view-model"),r.__assignProperties.call(r,{rootModel:n,parentChain:i=o}),void r.render.call(r);if(o=c.getAttribute("view-model"),i=o,null===o&&(null===(l=c.getAttribute("name"))&&null!==c.getAttribute("label")&&(l=c.getAttribute("label").replace(/( |:|\/|\.|-)/g,"").toLowerCase()),i=l),o||l){if(r.__assignProperties.call(r,{rootModel:n,parentChain:i}),o){let t=n.getChainValue(i);if(!t)return;return Object.keys(t).forEach(t=>{u(t,`${i}.${t}`)}),void a()}for(let t=0;t<c.attributes.length;++t){const e=c.attributes[t];if(e.value.startsWith("@")){const t=e.value.split("@")[1];u(t,i?`${i}.${t}`:t)}}a()}function u(t,e){r[t]=n.getChainValue(e),n.onChange(e,(function(){r[t]=n.getChainValue(e)}))}function a(){const t=`${i}.value`;n.getChainValue(i)&&!n.getChainValue(t)&&u("value",t)}}function i(){return function(i){let{componentWillLoad:r,render:c}=i;i.componentWillLoad=function(){let i=this,u=t(i);function a(){e("getModelEvent",{bubbles:!0,composed:!0,cancellable:!0,detail:{callback:l.bind(i)}},!0,u)}return i.render=c,i.changeModel=o,i.__assignProperties=n,"get-model"===u.getAttribute("get-model")?a():document.addEventListener("modelReady",(function(){a()})),r&&r.call(i)}}}export{i as B};