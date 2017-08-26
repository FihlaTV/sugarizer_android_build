/*! Sugarizer 2017-08-25 */
define(["sugar-web/graphics/palette"],function(a){"use strict";var b={};b.FilterPalette=function(b,c,d){a.Palette.call(this,b,c),this.filterEvent=document.createEvent("CustomEvent"),this.filterEvent.initCustomEvent("filter",!0,!0,{}),this.remoteEvent=document.createEvent("CustomEvent"),this.remoteEvent.initCustomEvent("remote",!0,!0,{}),this.getPalette().className+=" filterpalette";var e=document.createElement("div"),f=this,g=document.createElement("button");g.className="toolbutton palette-button palette-button-selected",g.setAttribute("id","world-button"),g.setAttribute("title","World"),g.onclick=function(){f.setFilter("world")};var h=document.createElement("button");h.className="toolbutton palette-button palette-button-notselected",h.setAttribute("id","northamerica-button"),h.setAttribute("title","North America"),h.onclick=function(){f.setFilter("northamerica")};var i=document.createElement("button");i.className="toolbutton palette-button palette-button-notselected",i.setAttribute("id","southamerica-button"),i.setAttribute("title","South America"),i.onclick=function(){f.setFilter("southamerica")};var j=document.createElement("button");j.className="toolbutton palette-button palette-button-notselected",j.setAttribute("id","europe-button"),j.setAttribute("title","Europe"),j.onclick=function(){f.setFilter("europe")};var k=document.createElement("button");k.className="toolbutton palette-button palette-button-notselected",k.setAttribute("id","africa-button"),k.setAttribute("title","Africa"),k.onclick=function(){f.setFilter("africa")};var l=document.createElement("button");l.className="toolbutton palette-button palette-button-notselected",l.setAttribute("id","asia-button"),l.setAttribute("title","Asia"),l.onclick=function(){f.setFilter("asia")};var m=document.createElement("button");m.className="toolbutton palette-button palette-button-notselected",m.setAttribute("id","australia-button"),m.setAttribute("title","Australia Region"),m.onclick=function(){f.setFilter("australia")},this.setFilter=function(a){var b=this.getFilter()==a;return g.className="toolbutton palette-button palette-button-notselected",h.className="toolbutton palette-button palette-button-notselected",i.className="toolbutton palette-button palette-button-notselected",j.className="toolbutton palette-button palette-button-notselected",k.className="toolbutton palette-button palette-button-notselected",l.className="toolbutton palette-button palette-button-notselected",m.className="toolbutton palette-button palette-button-notselected",b?void this.getPalette().dispatchEvent(this.filterEvent):void("northamerica"==a?(h.className="toolbutton palette-button palette-button-selected",f.getPalette().dispatchEvent(f.filterEvent)):"southamerica"==a?(i.className="toolbutton palette-button palette-button-selected",f.getPalette().dispatchEvent(f.filterEvent)):"europe"==a?(j.className="toolbutton palette-button palette-button-selected",f.getPalette().dispatchEvent(f.filterEvent)):"africa"==a?(k.className="toolbutton palette-button palette-button-selected",f.getPalette().dispatchEvent(f.filterEvent)):"asia"==a?(l.className="toolbutton palette-button palette-button-selected",f.getPalette().dispatchEvent(f.filterEvent)):"australia"==a?(m.className="toolbutton palette-button palette-button-selected",f.getPalette().dispatchEvent(f.filterEvent)):"world"==a&&(g.className="toolbutton palette-button palette-button-selected",f.getPalette().dispatchEvent(f.filterEvent)))},e.appendChild(g),e.appendChild(h),e.appendChild(i),e.appendChild(j),e.appendChild(k),e.appendChild(l),e.appendChild(m),this.setContent([e]),this.buttons=e.querySelectorAll("button")};var c=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return b.FilterPalette.prototype=Object.create(a.Palette.prototype,{addEventListener:{value:c,enumerable:!0,configurable:!0,writable:!0}}),b.FilterPalette.prototype.setFilter=function(a){this.setFilter(a)},b.FilterPalette.prototype.getFilter=function(){return"toolbutton palette-button palette-button-selected"==document.getElementById("world-button").className?"World":"toolbutton palette-button palette-button-selected"==document.getElementById("northamerica-button").className?"North America":"toolbutton palette-button palette-button-selected"==document.getElementById("southamerica-button").className?"South America":"toolbutton palette-button palette-button-selected"==document.getElementById("europe-button").className?"Europe":"toolbutton palette-button palette-button-selected"==document.getElementById("africa-button").className?"Africa":"toolbutton palette-button palette-button-selected"==document.getElementById("asia-button").className?"Asia":"toolbutton palette-button palette-button-selected"==document.getElementById("australia-button").className?"Australia Region":""},b});