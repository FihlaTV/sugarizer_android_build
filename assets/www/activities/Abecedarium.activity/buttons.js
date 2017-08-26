/*! Sugarizer 2017-08-25 */
enyo.kind({name:"Abcd.HomeButton",kind:enyo.Control,components:[{name:"home",kind:"Image",src:"images/home.png",classes:"standardButton backButton",ontap:"goHome"}],rendered:function(){this.inherited(arguments)},goHome:function(){Abcd.goHome()}});var caseVisibilityTab=[{switchToLower:!1,switchToUpper:!0,switchToScript:!1},{switchToLower:!1,switchToUpper:!1,switchToScript:!0},{switchToLower:!0,switchToUpper:!1,switchToScript:!1}];enyo.kind({name:"Abcd.CaseButton",kind:enyo.Control,classes:"switchCase",components:[{name:"switchToUpper",kind:"Image",src:"images/case0.png",classes:"standardButton switchCaseButton",ontap:"localUpper"},{name:"switchToScript",kind:"Image",src:"images/case1.png",showing:!1,classes:"standardButton switchCaseButton",ontap:"localScript"},{name:"switchToLower",kind:"Image",src:"images/case2.png",showing:!1,classes:"standardButton switchCaseButton",ontap:"localLower"}],rendered:function(){this.inherited(arguments),Abcd.changeVisibility(this,caseVisibilityTab[Abcd.context.casevalue])},localUpper:function(){Abcd.changeVisibility(this,caseVisibilityTab[1]),Abcd.setCase(1)},localLower:function(){Abcd.changeVisibility(this,caseVisibilityTab[0]),Abcd.setCase(0)},localScript:function(){Abcd.changeVisibility(this,caseVisibilityTab[2]),Abcd.setCase(2)}}),enyo.kind({name:"Abcd.LanguageButton",kind:enyo.Control,classes:"switchLang",components:[{name:"switchToFrench",kind:"Image",src:"images/us.png",showing:!1,classes:"standardButton switchLangButton",ontap:"localFrench"},{name:"switchToSpanish",kind:"Image",src:"images/fr.png",classes:"standardButton switchLangButton",ontap:"localSpanish"},{name:"switchToEnglish",kind:"Image",src:"images/es.png",showing:!1,classes:"standardButton switchLangButton",ontap:"localEnglish"}],rendered:function(){this.inherited(arguments),"en"==Abcd.context.lang?Abcd.changeVisibility(this,{switchToEnglish:!1,switchToFrench:!0,switchToSpanish:!1}):"fr"==Abcd.context.lang?Abcd.changeVisibility(this,{switchToEnglish:!1,switchToFrench:!1,switchToSpanish:!0}):Abcd.changeVisibility(this,{switchToEnglish:!0,switchToFrench:!1,switchToSpanish:!1})},localEnglish:function(){Abcd.changeVisibility(this,{switchToEnglish:!1,switchToFrench:!0,switchToSpanish:!1}),Abcd.setLocale("en")},localFrench:function(){Abcd.changeVisibility(this,{switchToEnglish:!1,switchToFrench:!1,switchToSpanish:!0}),Abcd.setLocale("fr")},localSpanish:function(){Abcd.changeVisibility(this,{switchToEnglish:!0,switchToFrench:!1,switchToSpanish:!1}),Abcd.setLocale("es")}}),enyo.kind({name:"Abcd.PlayTypeButton",published:{from:"",to:"",theme:null},classes:"play-type-button",components:[{name:"contentBox",components:[{name:"imageFrom",classes:"playtypeImageFrom",kind:"Image"},{name:"imageArrow",classes:"playtypeImageArrow",kind:"Image",src:"images/arrow.png"},{name:"imageTo",classes:"playtypeImageTo",kind:"Image"}]}],rendered:function(){this.inherited(arguments),null!=this.theme&&this.$.contentBox.addClass(this.theme),this.fromChanged(),this.toChanged()},setCase:function(){"letter"==this.from.substr(0,6)&&(this.from="letter"+Abcd.context.casevalue,this.fromChanged()),"letter"==this.to.substr(0,6)&&(this.to="letter"+Abcd.context.casevalue,this.toChanged())},fromChanged:function(){var a="images/"+this.from+".png";this.$.imageFrom.setAttribute("src",a)},toChanged:function(){var a="images/"+this.to+".png";this.$.imageTo.setAttribute("src",a)}});