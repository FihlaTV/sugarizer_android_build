/*! Sugarizer 2018-05-08 */
define(["sugar-web/graphics/palette"],function(a){"use strict";var b={};b.TextPalette=function(b,c,d){a.Palette.call(this,b),this.getPalette().id="text-palette";var e=document.createElement("div"),f='<div class="row small"><label>'+d+'</label></div><div class="row expand"><textarea rows="8" id="editor" class="expand"></textarea></div>',g='<div class="toolbar" id="text-style-toolbar"><button class="toolbutton" id="text-inc-size"></button><button class="toolbutton" id="text-dec-size"></button><button class="toolbutton" id="text-set-bold"></button><button class="toolbutton" id="text-set-italic"></button></div>';f+=g;var h=["#000000","#ff0000","#00008b","#006400","#8b008b","#c0c0c0","#ffd700","#008000","#ff4500","#8b4513"];f+="<table><tr>";for(var i=0;i<h.length;i++)f=f+'<td><button class="color-picker" value="'+h[i]+'" style="background-color: '+h[i]+'"></button></td>',4==i&&(f+="</tr><tr>");f+="</tr></table>",e.innerHTML=f,this.setContent([e]),this.editorElem=e.querySelector("#editor"),this.colorButtons=document.querySelectorAll(".color-picker"),this.incTextBtn=e.querySelector("#text-inc-size"),this.decTextBtn=e.querySelector("#text-dec-size"),this.boldTextBtn=e.querySelector("#text-set-bold"),this.italicTextBtn=e.querySelector("#text-set-italic")};var c=function(a){this.editorElem.value=a};return b.TextPalette.prototype=Object.create(a.Palette.prototype,{setText:{value:c,enumerable:!0,configurable:!0,writable:!0}}),b});