/*! Sugarizer 2018-07-01 */
define(["sugar-web/activity/activity","sugar-web/graphics/radiobuttonsgroup","mustache","moment-with-locales.min","webL10n"],function(a,b,c,d){require(["domReady!"],function(e){function f(){this.face="simple",this.handAngles={hours:0,minutes:0,seconds:0},this.colors={black:"#000000",white:"#FFFFFF",hours:"#005FE4",minutes:"#00B20D",seconds:"#E6000A"},this.writeTime=!1,this.writeDate=!1,this.size=void 0,this.margin=void 0,this.radius=void 0,this.centerX=void 0,this.centerY=void 0,this.lineWidthBase=void 0,this.handSizes=void 0,this.lineWidths=void 0,this.textTimeElem=document.getElementById("text-time"),this.textDateElem=document.getElementById("text-date"),this.clockCanvasElem=document.getElementById("clock-canvas"),this.clockContainerElem=this.clockCanvasElem.parentNode,this.bgCanvasElem=document.createElement("canvas"),this.clockContainerElem.insertBefore(this.bgCanvasElem,this.clockCanvasElem);var a=this;window.onresize=function(b){a.updateSizes(),a.drawBackground()}}function g(){document.getElementById("simple-clock-button").title=l10n_s.get("SimpleClock"),document.getElementById("nice-clock-button").title=l10n_s.get("NiceClock"),document.getElementById("write-time-button").title=l10n_s.get("WriteTime"),document.getElementById("write-date-button").title=l10n_s.get("WriteDate"),document.getElementById("text-time").innerHTML=l10n_s.get("WhatTime")}a.setup(),g();var h=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame;f.prototype.start=function(a){this.updateSizes(),this.drawBackground(),this.update(),this.drawHands(),this.previousTime=Date.now(),this.tick()},f.prototype.tick=function(){var a=Date.now();a-this.previousTime>1e3&&(this.previousTime=a,this.update(),this.drawHands(),/Android/i.test(navigator.userAgent)&&"http"!=document.location.protocol.substr(0,4)&&(this.clockCanvasElem.style.display="none",this.clockCanvasElem.offsetHeight,this.clockCanvasElem.style.display="block")),h(this.tick.bind(this))},f.prototype.changeFace=function(a){this.face=a,this.drawBackground()},f.prototype.changeWriteTime=function(a){this.writeTime=a,a?this.textTimeElem.style.display="block":this.textTimeElem.style.display="none",this.updateSizes(),this.update(),this.drawBackground()},f.prototype.changeWriteDate=function(a){this.writeDate=a,a?this.textDateElem.style.display="block":this.textDateElem.style.display="none",this.updateSizes(),this.update(),this.drawBackground()},f.prototype.updateSizes=function(){var a=document.getElementById("main-toolbar"),b=document.getElementById("text-container"),c=window.innerHeight-(b.offsetHeight+a.offsetHeight)-1;this.size=Math.min(window.innerWidth,c),this.clockCanvasElem.width=this.size,this.clockCanvasElem.height=this.size,this.bgCanvasElem.width=this.size,this.bgCanvasElem.height=this.size,this.clockContainerElem.style.width=this.size+"px",this.clockContainerElem.style.height=this.size+"px",this.clockCanvasElem.style.width=this.size+4+"px",this.margin=.02*this.size,this.radius=(this.size-2*this.margin)/2,this.centerX=this.radius+this.margin,this.centerY=this.radius+this.margin,this.lineWidthBase=this.radius/150,this.handSizes={hours:.5*this.radius,minutes:.7*this.radius,seconds:.8*this.radius},this.lineWidths={hours:9*this.lineWidthBase,minutes:6*this.lineWidthBase,seconds:4*this.lineWidthBase}},f.prototype.update=function(){var a=new Date,b=a.getHours(),e=a.getMinutes(),f=a.getSeconds(),g=function(a){return("00"+a).substr(-2)},h='<span style="color: {{ colors.hours }}">{{ hours }}</span>:<span style="color: {{ colors.minutes }}">{{ minutes }}</span>:<span style="color: {{ colors.seconds }}">{{ seconds }}</span>';if(this.writeTime){var i={colors:this.colors,hours:g(b),minutes:g(e),seconds:g(f)};this.textTimeElem.innerHTML=c.render(h,i)}if(this.writeDate){var j=d(a);this.textDateElem.innerHTML=j.format("LLLL").replace(j.format("LT"),"")}this.handAngles.hours=Math.PI-(Math.PI/6*b+Math.PI/360*e),this.handAngles.minutes=Math.PI-Math.PI/30*e,this.handAngles.seconds=Math.PI-Math.PI/30*f},f.prototype.drawBackground=function(){"simple"==this.face?(this.drawSimpleBackground(),this.drawNumbers()):this.drawNiceBackground(),this.drawHands()},f.prototype.drawSimpleBackground=function(){var a=this.bgCanvasElem.getContext("2d");a.clearRect(0,0,this.size,this.size);var b=4*this.lineWidthBase;a.lineCap="round",a.lineWidth=b,a.strokeStyle=this.colors.black,a.fillStyle=this.colors.white,a.beginPath(),a.arc(this.centerX,this.centerY,this.radius-b,0,2*Math.PI),a.fill(),a.stroke();for(var c=0;c<60;c++){var d;c%15===0?(d=.15*this.radius,a.lineWidth=7*this.lineWidthBase):c%5===0?(d=.12*this.radius,a.lineWidth=5*this.lineWidthBase):(d=.08*this.radius,a.lineWidth=4*this.lineWidthBase),a.lineCap="round",a.beginPath();var e=Math.cos(c*Math.PI/30),f=Math.sin(c*Math.PI/30);a.save(),a.translate(this.margin,this.margin),a.moveTo(this.radius+(this.radius-d)*e,this.radius+(this.radius-d)*f),a.lineTo(this.radius+(this.radius-a.lineWidth)*e,this.radius+(this.radius-a.lineWidth)*f),a.stroke(),a.restore()}},f.prototype.drawNiceBackground=function(){var a=this.bgCanvasElem.getContext("2d"),b=document.createElement("img"),c=this,d=function(){a.clearRect(c.margin,c.margin,2*c.radius,2*c.radius),a.drawImage(b,c.margin,c.margin,2*c.radius,2*c.radius)};b.addEventListener("load",d,!1),b.src="clock.svg"},f.prototype.drawNumbers=function(){var a=this.bgCanvasElem.getContext("2d"),b=30*this.radius/160;a.fillStyle=this.colors.hours,a.textBaseline="middle",a.font="bold "+b+"px sans-serif";for(var c=0;c<12;c++){var d=Math.cos((c-2)*Math.PI/6),e=Math.sin((c-2)*Math.PI/6),f=c+1,g=a.measureText(f).width;a.save(),a.translate(this.centerX-g/2,this.centerY),a.translate(.75*this.radius*d,.75*this.radius*e),a.fillText(f,0,0),a.restore()}},f.prototype.drawHands=function(){var a=this.clockCanvasElem.getContext("2d");a.clearRect(this.margin,this.margin,2*this.radius,2*this.radius);for(var b=["hours","minutes","seconds"],c=0;c<b.length;c++){var d=b[c];a.lineCap="round",a.lineWidth=this.lineWidths[d],a.strokeStyle=this.colors[d],a.beginPath(),a.arc(this.centerX,this.centerY,.6*a.lineWidth,0,2*Math.PI),a.moveTo(this.centerX,this.centerY),a.lineTo(this.centerX+this.handSizes[d]*Math.sin(this.handAngles[d]),this.centerY+this.handSizes[d]*Math.cos(this.handAngles[d])),a.stroke()}};var i=new f;i.start();var j=document.getElementById("simple-clock-button");j.onclick=function(){i.changeFace("simple")};var k=document.getElementById("nice-clock-button");k.onclick=function(){i.changeFace("nice")};var l=(new b.RadioButtonsGroup([j,k]),document.getElementById("write-time-button"));l.onclick=function(){this.classList.toggle("active");var a=this.classList.contains("active");i.changeWriteTime(a)};var m=document.getElementById("write-date-button");m.onclick=function(){this.classList.toggle("active");var a=this.classList.contains("active");i.changeWriteDate(a)}})});