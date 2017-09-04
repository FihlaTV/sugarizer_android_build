/*! Sugarizer 2017-09-04 */
define(["sugar-web/graphics/palette","mustache"],function(a,b){var c={},d=!!navigator.userAgent.match(/iPad|iPhone|iPod/g);c.algebraPalette=function(c,e){function f(a){i.algebraChangeEvent.detail.value=a.target.value,i.getPalette().dispatchEvent(i.algebraChangeEvent),i.popDown()}a.Palette.call(this,c,e),this.algebraChangeEvent=document.createEvent("CustomEvent"),this.algebraChangeEvent.initCustomEvent("algebraClick",!0,!0,{}),this.template='<tbody>{{#rows}}<tr>{{#.}}<td><button style="background:none; border-radius:0px; border:0px; margin:3px; width:55px; height:55px; background-image: url({{backgroundSvg}})" value="{{value}}"></button></td>{{/.}}</tr>{{/rows}}</tbody>';var g=document.createElement("table");g.className="algebras";var h={rows:[[{title:"EXP",value:"exp(",backgroundSvg:"icons/algebra-exp.svg"},{title:"LN",value:"log(",backgroundSvg:"icons/algebra-ln.svg"},{title:"SQRT",value:"sqrt(",backgroundSvg:"icons/algebra-sqrt.svg"}],[{title:"X",value:"x",backgroundSvg:"icons/algebra-x.svg"},{title:"POW",value:"^",backgroundSvg:"icons/algebra-xpowy.svg"},{title:"PI",value:"3.14159",backgroundSvg:"icons/constants-pi.svg"}],[{title:"F(X)",value:"f(x)=",backgroundSvg:"icons/plot.svg"}]]};g.innerHTML=b.render(this.template,h),this.setContent([g]),this.buttons=g.querySelectorAll("button");for(var i=this,j=0;j<this.buttons.length;j++)d?this.buttons[j].addEventListener("touchstart",f):this.buttons[j].addEventListener("click",f)};var e=function(a){var b=document.createEvent("MouseEvents");b.initEvent("click",!0,!0),this.buttons[a].dispatchEvent(b)},f=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return c.algebraPalette.prototype=Object.create(a.Palette.prototype,{setColor:{value:e,enumerable:!0,configurable:!0,writable:!0},addEventListener:{value:f,enumerable:!0,configurable:!0,writable:!0}}),c});