/*! Sugarizer 2017-09-04 */
define(["sugar-web/graphics/palette","mustache"],function(a,b){function c(){var a="webkit",b="undefined"!=typeof InstallTrigger;b&&(a="gecko");for(var c=[[{stampBase:"stamps/heart-{platform}.svg",proportionnal:!0},{stampBase:"stamps/star-{platform}.svg",proportionnal:!0},{stampBase:"stamps/square-{platform}.svg",proportionnal:!1}],[{stampBase:"stamps/circle-{platform}.svg",proportionnal:!0},{stampBase:"stamps/triangle-{platform}.svg",proportionnal:!0},{stampBase:"stamps/flower-{platform}.svg",proportionnal:!0}]],d=0;d<c.length;d++)for(var e=0;e<c[d].length;e++)c[d][e].stamp=c[d][e].stampBase.replace("{platform}",a);return c}var d={};d.StampPalette=function(d,e){function f(a){for(var b=0;b<i.length;b++)i[b].style.border="0px solid #000";a.target.style.border="1px solid #f00",j.stampChangeEvent.detail.proportionnal=a.target.getAttribute("proportionnal"),j.stampChangeEvent.detail.stampBase=a.target.getAttribute("base"),j.stampChangeEvent.detail.stamp=a.target.value,j.getPalette().dispatchEvent(j.stampChangeEvent),j.popDown()}a.Palette.call(this,d,e),this.stampChangeEvent=document.createEvent("CustomEvent"),this.stampChangeEvent.initCustomEvent("stampChange",!0,!0,{}),this.template='<tbody>{{#rows}}<tr>{{#.}}<td><button base="{{stampBase}}" proportionnal="{{proportionnal}}" value="{{stamp}}" style="height:55px; width:55px; background-size:40px; background-image: url({{ stamp }}); background-repeat: no-repeat; background-position: center; "></button></td>{{/.}}</tr>{{/rows}}</tbody>';var g=document.createElement("table");g.className="stamps";var h={rows:c()};g.innerHTML=b.render(this.template,h),this.setContent([g]);var i=g.querySelectorAll("button");this.buttons=i;for(var j=this,k=0;k<i.length;k++)i[k].addEventListener("click",f)};var e=function(a){var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0),this.buttons[a].dispatchEvent(b)},f=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return d.StampPalette.prototype=Object.create(a.Palette.prototype,{setStamp:{value:e,enumerable:!0,configurable:!0,writable:!0},addEventListener:{value:f,enumerable:!0,configurable:!0,writable:!0}}),d});