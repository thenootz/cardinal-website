import{r as s,c as r,h as t}from"./p-400bec78.js";const e=class{constructor(t){s(this,t),this.userInfo=null,this.getUserInfoEvent=r(this,"getUserInfo",7)}componentWillLoad(){this.userInfo||this.getUserInfoEvent.emit((s,r)=>{s?console.error("Error getting user info",s):this.userInfo=r})}render(){return t(this.profileRenderer?this.profileRenderer:"psk-user-profile-renderer",{userInfo:this.userInfo})}};export{e as psk_user_profile};