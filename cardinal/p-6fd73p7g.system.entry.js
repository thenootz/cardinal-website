System.register(["./p-0b2166d8.system.js","./p-c1524e8c.system.js"],(function(e){"use strict";var t,i,n,r;return{setters:[function(e){t=e.r;i=e.h;n=e.g},function(e){r=e.C}],execute:function(){var s=undefined&&undefined.__decorate||function(e,t,i,n){var r=arguments.length,s=r<3?t:n===null?n=Object.getOwnPropertyDescriptor(t,i):n,o;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")s=Reflect.decorate(e,t,i,n);else for(var c=e.length-1;c>=0;c--)if(o=e[c])s=(r<3?o(s):r>3?o(t,i,s):o(t,i))||s;return r>3&&s&&Object.defineProperty(t,i,s),s};var o=e("psk_slideshow",function(){function e(e){t(this,e)}e.prototype.componentWillLoad=function(){this.marginTop=this.element.getBoundingClientRect().y;this.checkLayout();this.imagesSrcs=this.images.split(",")};e.prototype.checkLayout=function(){this.slideshowHeight=document.documentElement.clientHeight-this.marginTop};e.prototype.renderSlide=function(e,t){var n=i("li",{id:"slide-"+t,class:"animation-"+t,style:{backgroundImage:"url("+e+")"}});return n};e.prototype.render=function(){var e=this;var t=[];this.imagesSrcs.forEach((function(i,n){t.push(e.renderSlide(i,n))}));return i("div",{class:"psk-slideshow"},i("div",{class:"psk-slideshow-container"},i("div",{id:"psk-content-slider"},i("div",{id:"psk-slider"},i("div",{id:"psk-slider-mask",style:{height:this.slideshowHeight+"px"}},i("ul",null,t))))))};Object.defineProperty(e.prototype,"element",{get:function(){return n(this)},enumerable:true,configurable:true});return e}());s([r()],o.prototype,"images",void 0)}}}));