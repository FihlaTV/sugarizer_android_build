/*! Sugarizer 2018-05-08 */
define(["sugar-web/graphics/palette","mustache"],function(a,b){function c(a){for(var b=a.split("(")[1].split(")")[0].split(","),c=0;c<b.length;c++)b[c]=parseInt(b[c]);return b}function d(){function a(a){PaintApp.data.color.fill=a.detail.color}var b=document.getElementById("colors-button-fill"),c=new PaintApp.palettes.notePalette.NotePalette(b,void 0);c.addEventListener("colorChange",a);c.getPalette().querySelector(".palette-invoker");c.setColor(0)}var e={};e.initGui=d,e.NotePalette=function(c,d){function e(a,b,d){c.style.backgroundColor=a.target.style.backgroundColor,h.colorChangeEvent.detail.color=a.target.style.backgroundColor,h.getPalette().dispatchEvent(h.colorChangeEvent),h.getPalette().querySelector(".palette-invoker").style.backgroundColor=a.target.style.backgroundColor,null!==b&&void 0!==b&&b!==!0||h.popDown()}this.invoker=c,a.Palette.call(this,c,d),this.getPalette().className+=" colorpalette",this.colorChangeEvent=document.createEvent("CustomEvent"),this.colorChangeEvent.initCustomEvent("colorChange",!0,!0,{color:"#ed2529"}),this.template='        <style>            @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {                input[type=range] {                    width:100px;                    background-color: transparent !important; /* Hides the slider so custom styles can be added */                }                }        </style>        <div style="width:140px;">          <div style="float:left; width: 100px;">              <table>                <tbody>                {{#rows}}                    <tr>                      {{#.}}                        <td>                          <button style="background-color: {{ color }}"></button>                        </td>                      {{/.}}                    </tr>                  {{/rows}}                </tbody>                </table>              </div>      </div>';var f=document.createElement("div");f.className="colors";var g={rows:[[{color:"#FFF29F"},{color:"#FFCBA6"}],[{color:"#81FFC4"},{color:"#FFB7F9"}],[{color:"#C39AFF"},{color:"#9AFAFF"}]]};f.innerHTML=b.render(this.template,g),this.setContent([f]),f.parentNode.style.backgroundColor="black",f.parentNode.parentNode.style.minWidth="120px",f.parentNode.parentNode.style.maxWidth="120px",f.parentNode.style.width="120px",f.parentNode.style.height="170px",f.parentNode.style.overflowY="auto",f.parentNode.style.overflowX="hidden",this.buttons=f.querySelectorAll("button");var h=this;h.colorsElem=f;for(var i=0;i<this.buttons.length;i++)this.buttons[i].addEventListener("click",e)};var f=function(a){for(var b=0;b<this.buttons.length;b++)if(this.buttons[b].style.backgroundColor==a){var d=document.createEvent("MouseEvents");d.initEvent("click",!0,!0),this.buttons[b].dispatchEvent(d);break}c(a);this.getPalette().querySelector(".palette-invoker").style.backgroundColor=a,this.invoker.style.backgroundColor=a},g=function(a,b,c){return this.getPalette().addEventListener(a,b,c)};return e.NotePalette.prototype=Object.create(a.Palette.prototype,{setColor:{value:f,enumerable:!0,configurable:!0,writable:!0},addEventListener:{value:g,enumerable:!0,configurable:!0,writable:!0}}),e});