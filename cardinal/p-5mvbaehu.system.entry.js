System.register(["./p-3369a689.system.js","./p-04722581.system.js","./p-894b1d93.system.js","./p-609d210d.system.js","./p-5514a11c.system.js","./p-6aba9852.system.js","./p-ce0bcb66.system.js"],(function(t){"use strict";var e,i,n,s,o,c,r;return{setters:[function(t){e=t.r;i=t.h;n=t.g},function(){},function(){},function(t){s=t.T},function(t){o=t.C},function(t){c=t.B},function(t){r=t.P}],execute:function(){var a=undefined&&undefined.__decorate||function(t,e,i,n){var s=arguments.length,o=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,i):n,c;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")o=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)if(c=t[r])o=(s<3?c(o):s>3?c(e,i,o):c(e,i))||o;return s>3&&o&&Object.defineProperty(e,i,o),o};var l=[document,window];var h=t("psk_switch_button",function(){function t(t){e(this,t);this.closed=true}t.prototype.clickHandler=function(t){this.closed=!this.closed;if(this.toggleEvent){t.preventDefault();t.stopImmediatePropagation();var e=new r(this.toggleEvent,{selected:this.closed?this.inactive:this.active,active:this.active,inactive:this.inactive},{bubbles:true,composed:true,cancelable:true});var i=this.htmlElement;if(this.eventDispatcher){if(l.indexOf(window[this.eventDispatcher])!==-1){i=window[this.eventDispatcher]}}i.dispatchEvent(e)}};t.prototype.render=function(){var t=i("div",{class:"status-container",onClick:this.clickHandler.bind(this)},i("h5",null,this.title),i("psk-grid",{class:"two-options-container",columns:2,layout:"xs=[6,6] s=[6,6] m=[6,6] l=[6,6]"},i("div",{class:"switch-item "+(this.closed?"":"selected")},i("p",null,this.active)),i("div",{class:"switch-item "+(this.closed?"selected":"")},i("p",null,this.inactive))));return t};Object.defineProperty(t.prototype,"htmlElement",{get:function(){return n(this)},enumerable:true,configurable:true});return t}());a([c(),o()],h.prototype,"htmlElement",void 0);a([s({description:['This attribute is telling the component where to trigger the event. Accepted values: "document, "window".',"If the value is not set or it is not one of the accepted values, the eventDispatcher will be the component itself."],isMandatory:false,propertyType:"string"})],h.prototype,"eventDispatcher",void 0);a([s({description:["By defining this attribute, the component will be able to trigger an event. The name of the event is the value of the attribute."],isMandatory:false,propertyType:"string"})],h.prototype,"toggleEvent",void 0)}}}));