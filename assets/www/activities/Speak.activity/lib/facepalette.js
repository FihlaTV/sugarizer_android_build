/*! Sugarizer 2017-08-25 */
define(["widepalette","text!facepalette.html"],function(a,b){"use strict";var c={};return c.ActivityPalette=function(c,d){a.Palette.call(this,c);this.getPalette().id="activity-palette";var e=document.createElement("div");e.innerHTML=b,this.setContent([e]);var f=document.getElementById("eyevalue");f.min=1,f.max=5,f.value=document.getElementById("numeyes").innerHTML,f.onclick=function(){document.getElementById("numeyes").innerHTML=f.value},document.getElementById("eyes").onclick=function(){document.getElementById("eyetype").innerHTML=1,document.getElementById("eyes").src="icons/eyes-selected.svg",document.getElementById("glasses").src="icons/glasses.svg"},document.getElementById("glasses").onclick=function(){document.getElementById("eyetype").innerHTML=2,document.getElementById("eyes").src="icons/eyes.svg",document.getElementById("glasses").src="icons/glasses-selected.svg"}},c.ActivityPalette.prototype=Object.create(a.Palette.prototype,{setTitleDescription:{value:"Face Palette:",enumerable:!0,configurable:!0,writable:!0}}),c});