System.register(["./p-6488a638.system.js"],function(e){"use strict";var t,n;return{setters:[function(e){t=e.r;n=e.h}],execute:function(){var r=e("psk_page_loader",function(){function e(e){t(this,e);this.errorLoadingPage=false}e.prototype.componentWillLoad=function(){var e=this;var t=new XMLHttpRequest;t.open("GET",this.pageUrl);t.onload=function(){if(t.status!=200){e.errorLoadingPage=true}else{e.pageContent=t.responseText}};t.onerror=function(){e.errorLoadingPage=true};t.send()};e.prototype.render=function(){return this.errorLoadingPage?n("h4",null,"Page "+this.pageUrl+" could not be loaded!"):n("div",{class:"page_content",innerHTML:this.pageContent})};return e}())}}});