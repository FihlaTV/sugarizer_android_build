/*! Sugarizer 2018-05-08 */
!function(a,b,c){function d(a){return a}function e(a){return decodeURIComponent(a.replace(f," "))}var f=/\+/g;a.cookie=function(f,g,h){if(g!==c&&!/Object/.test(Object.prototype.toString.call(g))){if(h=a.extend({},a.cookie.defaults,h),null===g&&(h.expires=-1),"number"==typeof h.expires){var i=h.expires,j=h.expires=new Date;j.setDate(j.getDate()+i)}return g=String(g),b.cookie=[encodeURIComponent(f),"=",h.raw?g:encodeURIComponent(g),h.expires?"; expires="+h.expires.toUTCString():"",h.path?"; path="+h.path:"",h.domain?"; domain="+h.domain:"",h.secure?"; secure":""].join("")}h=g||a.cookie.defaults||{};for(var k,l=h.raw?d:e,m=b.cookie.split("; "),n=0;k=m[n]&&m[n].split("=");n++)if(l(k.shift())===f)return l(k.join("="));return null},a.cookie.defaults={},a.removeCookie=function(b,c){return null!==a.cookie(b,c)&&(a.cookie(b,null,c),!0)}}(jQuery,document);