System.register(["./p-43bbb113.system.js"],function(t){"use strict";var e,n;return{setters:[function(t){e=t.g;n=t.B}],execute:function(){t("C",o);function o(){return function(t){n.cmpDidLoad=true;n.cmpDidUnload=true;var o=t.componentDidLoad,r=t.componentDidUnload;t.componentDidLoad=function(){var t=e(this);if(!t){return}var n=t.tagName.toLowerCase();if(typeof globalConfig!=="undefined"&&typeof globalConfig.theme==="string"){var r="/assets/themes/"+globalConfig.theme+"/components/"+n+"/"+n+".css";var i=document.createElement("link");i.setAttribute("rel","stylesheet");i.setAttribute("href",r);t.shadowRoot.prepend(i)}return o&&o.call(this)};t.componentDidUnload=function(){return r&&r.call(this)}}}}}});