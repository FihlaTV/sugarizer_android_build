/*! Sugarizer 2018-01-03 */
define(["sugar-web/graphics/palette","text!sugar-web/graphics/menupalette.html","mustache"],function(a,b,c){"use strict";var d={};d.MenuPalette=function(d,e,f){function g(a){i.selectItemEvent.detail.target=a.target,i.getPalette().dispatchEvent(i.selectItemEvent),i.popDown()}a.Palette.call(this,d,e),this.selectItemEvent=document.createEvent("CustomEvent"),this.selectItemEvent.initCustomEvent("selectItem",!0,!0,{item:void 0});var h=document.createElement("ul");h.className="menu",h.innerHTML=c.render(b,f),this.setContent([h]),this.buttons=h.querySelectorAll("button");for(var i=this,j=0;j<this.buttons.length;j++)this.buttons[j].addEventListener("click",g)};var e=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return d.MenuPalette.prototype=Object.create(a.Palette.prototype,{addEventListener:{value:e,enumerable:!0,configurable:!0,writable:!0}}),d});