/*! Sugarizer 2017-08-25 */
define(function(){"use strict";var a={};return a.addGrid=function(a){var b=document.createElement("canvas");b.className="grid",document.body.appendChild(b);var c=function(){b.width=window.innerWidth,b.height=window.innerHeight;var c=b.getContext("2d");c.strokeStyle="#00FFFF";var d=window.innerHeight/a;for(i=0;i<d;i++)(i+1)%5===0?c.lineWidth=1:c.lineWidth=.5,c.beginPath(),c.moveTo(0,a*(i+1)),c.lineTo(b.width,a*(i+1)),c.stroke();var e=window.innerWidth/a;for(i=0;i<e;i++)(i+1)%5===0?c.lineWidth=1:c.lineWidth=.5,c.beginPath(),c.moveTo(a*(i+1),0),c.lineTo(a*(i+1),b.height),c.stroke()};c(),window.onresize=function(a){c()}},a});