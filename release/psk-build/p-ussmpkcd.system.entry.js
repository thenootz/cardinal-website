System.register(["./p-d5e63b2c.system.js"],(function(t){"use strict";var e,r;return{setters:[function(t){e=t.r;r=t.h}],execute:function(){var i=t("psk_property_descriptor",function(){function t(t){e(this,t);this.title="";this.decoratorProperties=[]}t.prototype.receivedPropertiesDescription=function(t){var e=t.detail;t.stopImmediatePropagation();if(e&&e.length>0){this.decoratorProperties=JSON.parse(JSON.stringify(e))}};t.prototype.render=function(){var t=this.decoratorProperties.map((function(t){var e=""+t.propertyName+(t.isMandatory?"":"?")+": "+t.propertyType+" "+(t.isMandatory?"(mandatory)":"(optional)");return r("psk-hoc",{title:t.propertyName},r("p",{class:"subtitle"},r("i",null,e)),r("p",null,t.description),t.specialNote?r("p",null,r("b",null,"Note: ",t.specialNote)):null,t.defaultValue?r("p",null,r("i",null,"Default value: ",t.defaultValue)):null)}));return r("psk-chapter",{title:this.title,id:this.title.replace(/( |:|\/)/g,"-").toLowerCase()},t)};return t}())}}}));