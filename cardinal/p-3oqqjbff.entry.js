import{r as t,h as e,g as o}from"./p-9835b40a.js";import{T as s}from"./p-6aa7f1b2.js";import{C as r}from"./p-ec895615.js";const n=class{constructor(e){t(this,e)}render(){if(!this.columns)return;let t=`col-12 col-md-${Math.floor(12/this.columns)}`,o=0;for(;o<this.host.children.length;){const e=this.host.children.item(o++);"link"!==e.tagName.toLowerCase()&&(e.className=t)}return e("div",{class:"row"},e("slot",null))}get host(){return o(this)}};!function(t,e,o,s){var r,n=arguments.length,l=n<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,o):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(t,e,o,s);else for(var a=t.length-1;a>=0;a--)(r=t[a])&&(l=(n<3?r(l):n>3?r(e,o,l):r(e,o))||l);n>3&&l&&Object.defineProperty(e,o,l)}([r(),s({isMandatory:!0,propertyType:"number",description:"This is the number of columns for the bootstrap columns class.",defaultValue:"null",specialNote:"That number can only be an integer between 1 and 12"})],n.prototype,"columns",void 0);export{n as psk_grid};