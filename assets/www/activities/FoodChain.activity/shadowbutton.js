/*! Sugarizer 2017-09-04 */
FoodChain.supportSVG=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,enyo.kind({name:"ShadowButton",kind:enyo.Control,published:{img:""},classes:"shadowbutton-container",components:[{name:"button",kind:"Image",classes:"shadowbutton shadowbutton-image",onenter:"showShadow",onleave:"hideShadow"},{name:"buttonshadow",kind:"Image",classes:"shadowbutton-shadow shadowbutton-image"}],create:function(){this.inherited(arguments),this.imgChanged(),this.$.buttonshadow.hide()},imgChanged:function(){var a=FoodChain.supportSVG?".svg":".png";this.$.button.setAttribute("src","images/"+this.img+a),this.$.buttonshadow.setAttribute("src","images/"+this.img+"_shadow"+a)},showShadow:function(){return this.$.buttonshadow.show(),!1},hideShadow:function(){return this.$.buttonshadow.hide(),!1}});