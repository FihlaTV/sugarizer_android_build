/*! Sugarizer 2018-01-03 */
define(function(){"use strict";var a={};return a.RadioButtonsGroup=function(a){function b(a){d=a.target,c()}function c(){for(e=0;e<a.length;e++){var b=a[e];b.classList.remove("active")}d.classList.add("active")}this.elems=a;for(var d,e=0;e<a.length;e++){var f=a[e];f.addEventListener("click",b),void 0===d&&f.classList.contains("active")&&(d=f)}void 0===d&&(d=a[0],c()),this.getActive=function(){return d}},a});