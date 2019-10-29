import{r as t,c as i,h as s}from"./p-3f8ac7cf.js";const e=class{constructor(s){t(this,s),this.needWizardConfiguration=i(this,"needWizardConfiguration",7),this.changeStep=i(this,"changeStep",7),this.finishWizard=i(this,"finishWizard",7)}componentWillLoad(){this.needWizardConfiguration.emit(t=>{this.wizardSteps=t,this.activeStep=this.wizardSteps.length>0?this.wizardSteps[0]:null})}handleStepChange(t){this.changeStep.emit({stepIndexToDisplay:t,wizardSteps:this.wizardSteps,activeStep:this.activeStep,callback:(t,i)=>{t?console.error(t):(this.activeStep=i.activeStep,this.wizardSteps=i.wizardSteps)}})}handleFinish(){this.finishWizard.emit({wizardSteps:this.wizardSteps,callback:(t,i)=>{t?console.error(t):console.log(i)}})}handleStepPropertiesChange(t){this.activeStep.stepProperties=t}computeStepDesign(t,i,s){let e="";return 0===t?e+="first ":t===s-1&&(e+="last "),t<i?e+="done":t===i&&(e+="current"),e}render(){const t=this.activeStep.stepComponent;return[s("div",{class:"page-content"},s("div",{class:"wizard-content"},s("div",{class:"wizard-form"},s("form",{class:"form-register",action:"#",method:"post",onSubmit:t=>{t.preventDefault(),t.stopImmediatePropagation()}},s("div",{id:"form-total",class:"wizard clearfix"},s("psk-stepper",{componentRender:this.componentRender,wizardSteps:this.wizardSteps,activeStep:this.activeStep,handleStepChange:this.handleStepChange.bind(this)}),s(t,{onPropertiesChange:this.handleStepPropertiesChange.bind(this),stepProperties:this.activeStep.stepProperties}),s("div",{class:"actions clearfix"},s("ul",{role:"menu","aria-label":"Pagination"},this.activeStep.stepIndex>0?s("li",null,s("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex-1)},"Previous")):null,this.activeStep.stepIndex<this.wizardSteps.length-1?s("li",null,s("button",{role:"menuitem",onClick:this.handleStepChange.bind(this,this.activeStep.stepIndex+1)},"Next")):null,this.activeStep.stepIndex===this.wizardSteps.length-1?s("li",null,s("button",{role:"menuitem",onClick:this.handleFinish.bind(this)},"Finish")):null)))))))]}static get style(){return"\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-ExtraBold.ttf) format(\"truetype\");font-weight:800;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Regular.ttf) format(\"truetype\");font-weight:400;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-ExtraBoldItalic.ttf) format(\"truetype\");font-weight:800;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Light.ttf) format(\"truetype\");font-weight:300;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-SemiBold.ttf) format(\"truetype\");font-weight:600;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-SemiBoldItalic.ttf) format(\"truetype\");font-weight:600;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-BoldItalic.ttf) format(\"truetype\");font-weight:700;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Bold.ttf) format(\"truetype\");font-weight:700;font-style:normal}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-LightItalic.ttf) format(\"truetype\");font-weight:300;font-style:italic}\@font-face{font-family:Open Sans;src:url(../fonts/Open_Sans/OpenSans-Italic.ttf) format(\"truetype\");font-weight:400;font-style:italic}.body{height:100%;width:100%}.page-content{width:100%;margin:0 auto;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}.page-content,.wizard-content{display:-ms-flexbox;display:flex}.wizard-content{width:790px;border-radius:10px;font-family:Open Sans,sans-serif;position:relative;-webkit-box-shadow:0 5px 10px 0 rgba(0,0,0,.1);box-shadow:0 5px 10px 0 rgba(0,0,0,.1)}.wizard-content .wizard-form{width:100%}.form-register .vertical{display:block;width:100%;overflow:hidden;border-radius:10px}.form-register .content{float:right;width:530px;min-height:400px}.form-register .content h2{display:none}.form-register .content .inner{margin:35px 40px 25px;-webkit-box-shadow:0 3px 10px 0 rgba(0,0,0,.1);box-shadow:0 3px 10px 0 rgba(0,0,0,.1);border-radius:5px;padding:0 30px 25px;background-color:#fff;height:100%}.form-register .content .wizard-header{padding:9px 30px 11px;background:#33a7d7;border-top-left-radius:5px;border-top-right-radius:5px;margin:0 -30px 24px}.form-register .content .wizard-header h3{font-size:22px;color:#fff;margin:0}.inner .form-row{display:-ms-flexbox;display:flex;margin:0 -10px;position:relative}.inner .form-row .form-holder{width:50%;padding:0 10px;margin-bottom:19px;position:relative}.inner .form-row .form-holder.form-holder-1{width:65.3%}.inner .form-row .form-holder.form-holder-2{width:100%;position:relative}.inner .form-row .form-holder label{color:#666;font-size:16px;font-weight:400;display:block;padding-bottom:8px}.inner .form-row .form-holder input,.inner .form-row .form-holder select{width:100%;padding:12px 20px;border:1px solid #e5e5e5;-webkit-appearance:unset;-moz-appearance:unset;appearance:unset;font-family:Open Sans,sans-serif;font-weight:600;font-size:16px;color:#333;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:3px}input::-webkit-input-placeholder{color:#999;font-size:15px;font-weight:400}input::-moz-placeholder{color:#999;font-size:15px;font-weight:400}input::placeholder{color:#999;font-size:15px;font-weight:400}input:-ms-input-placeholder{color:#999;font-size:15px;font-weight:400}input::-ms-input-placeholder{color:#999;font-size:15px;font-weight:400}.inner .form-row .form-holder .content-inner{font-weight:400;color:#666;font-size:14px}.inner .form-row .form-holder .content-inner p{margin:0}.inner .form-row .form-holder .form-checkbox{position:relative;padding-top:55px}.inner .form-row .form-holder .form-checkbox p{margin-left:27px;color:#333;font-size:14px;font-weight:600}.inner .form-row .form-holder .form-checkbox input{position:absolute;opacity:0}.inner .form-row .form-holder .form-checkbox .checkmark{position:absolute;bottom:8%;left:0;height:18px;width:18px;border:1px solid #e5e5e5;border-radius:5px;cursor:pointer}.inner .form-row .form-holder .form-checkbox .checkmark:after{content:\"\";position:absolute;left:6px;top:2px;width:3px;height:8px;border:1px solid #33a7d7;border-width:0 2px 2px 0;-webkit-transform:rotate(45deg);transform:rotate(45deg);display:none}.inner .form-row .form-holder .form-checkbox input:checked~.checkmark:after{display:block}.actions{float:right;width:530px}.actions ul{list-style:none;padding:0 40px;margin-bottom:40px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.actions button{border:none;display:-ms-inline-flexbox;display:inline-flex;height:42px;width:120px;border-radius:3px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;background:#364cd2;cursor:pointer;font-size:16px;font-weight:400;color:#fff;text-decoration:none;padding:13px 19px}.actions button:hover{background:#28379e}\@media screen and (max-width:991px){.page-content .wizard-heading{margin-left:0;width:90%}.wizard-content{width:90%}.actions,.form-register .content{float:none;width:100%}}\@media screen and (max-width:575px){.inner .form-row{flex-direction:column;-o-flex-direction:column;-ms-flex-direction:column;-moz-flex-direction:column;-webkit-flex-direction:column;margin:0}.inner .form-row .form-holder{width:100%;padding:0}.form-register .steps{width:90%;float:none}}"}};export{e as psk_wizard};