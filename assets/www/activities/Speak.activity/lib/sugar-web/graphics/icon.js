/*! Sugarizer 2017-08-25 */
define(function(){"use strict";function a(a,b,c){var d;return b&&(d=/(<!ENTITY fill_color ")(.*)(">)/,a=a.replace(d,"$1"+b+"$3")),c&&(d=/(<!ENTITY stroke_color ")(.*)(">)/,a=a.replace(d,"$1"+c+"$3")),a}function b(a){var b=a.currentStyle||window.getComputedStyle(a,""),c=b.backgroundImage.slice(4,-1),d=c.length-1;return'"'==c[0]&&'"'==c[d]&&(c=c.slice(1,d)),c}function c(a,b){a.style.backgroundImage="url('"+b+"')"}var d={};return d.load=function(b,c){var d,e="data:image/svg+xml,";"uri"in b?d=b.uri:"name"in b&&(d="lib/graphics/icons/"+b.name+".svg");var f=b.fillColor,g=b.strokeColor;if("data"==d.substring(0,4)){var h=decodeURIComponent(d.slice(e.length)),i=a(h,f,g);return void c(e+encodeURI(i))}var j=new XMLHttpRequest;j.onload=function(){var b=this.responseText,d=a(b,f,g);c(e+encodeURIComponent(d))},j.open("GET",d),j.send()},d.colorize=function(a,e,f){var g={uri:b(a),strokeColor:e.stroke,fillColor:e.fill};d.load(g,function(b){c(a,b),f&&f()})},d});