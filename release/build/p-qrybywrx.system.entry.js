System.register(["./p-6488a638.system.js","./p-29529ff4.system.js"],function(e){"use strict";var t,s,i,n;return{setters:[function(e){t=e.r;s=e.c;i=e.h},function(e){n=e.C}],execute:function(){var a=e("psk_list_feedbacks",function(){function e(e){t(this,e);this.alertOpened=false;this._messagesQueue=[];this._messagesContent=[];this.timer=0;this.opened=false;this.typeOfAlert=[];this.timeAlive=5;this.messagesToDisplay=3;this.openFeedbackHandler=s(this,"openFeedback",7)}e.prototype.closeFeedbackHandler=function(e){if(this.alertOpened){this.alertOpened=false}var t=this._messagesContent.indexOf(e.detail);if(t>-1){this.typeOfAlert.splice(t,1);this._messagesContent.splice(t,1);this._messagesContent=this._messagesContent.slice();if(this._messagesQueue.length>0){this._messagesContent=this._messagesContent.concat([this._messagesQueue.shift()])}}};e.prototype.componentWillLoad=function(){var e=this;this.openFeedbackHandler.emit(function(t,s,i){if(i){e.typeOfAlert.push(i)}else{e.typeOfAlert.push("toast")}e.alertOpened=true;if(t instanceof Array){t.forEach(function(t,s){e.addToMessageArray.bind(e)(t,s)})}else{e.addToMessageArray.bind(e)(t,s)}})};e.prototype.timerToShow=function(e){var t=this;if(this._messagesContent.length>0){var s=(new Date).getTime();var i=e.timer;var a=Math.floor((s-i)/n.MINUTE);var r=setTimeout(function(){t.timerToShow.bind(t)(e)},n.MINUTE_TICK);var o=setTimeout(function(){t.timerToShow.bind(t)(e)},n.HOUR_TICK);switch(true){case a<=0:this.timeMeasure=n.RIGHT_NOW;break;case a<60:this.timer=Math.floor((s-i)/n.MINUTE);this.timeMeasure=n.MINUTES;break;case a>=60:this.timer=Math.floor((s-i)/n.HOUR);this.timeMeasure=n.HOURS;break}}else{return}};e.prototype.addToMessageArray=function(e,t){var s=new Date;var i={content:e,timer:s.getTime(),name:t};if(this._messagesContent.length+1<=this.messagesToDisplay){this._messagesContent=this._messagesContent.concat([i])}else{this._messagesQueue=this._messagesQueue.concat([i])}};e.prototype.render=function(){var e=this;var t=[];var s;this._messagesContent.forEach(function(n,a){if(e.typeOfAlert[a]==="toast"){s=e.toastRenderer?e.toastRenderer:"psk-ui-toast";e.timerToShow.bind(e)(n);t.push(i(s,{message:n,timeSinceCreation:e.timer,timeMeasure:e.timeMeasure,styleCustomisation:e.styleCustomisation}))}else{s=e.alertRenderer?e.alertRenderer:"psk-ui-alert";t.push(i(s,{message:e._messagesContent[e._messagesContent.length-1],typeOfAlert:e.typeOfAlert[a],timeAlive:e.timeAlive,styleCustomisation:e.styleCustomisation}))}});return i("div",null,t?t:null)};Object.defineProperty(e,"style",{get:function(){return":host{top:0;right:0;position:fixed;z-index:999;width:auto}"},enumerable:true,configurable:true});return e}())}}});