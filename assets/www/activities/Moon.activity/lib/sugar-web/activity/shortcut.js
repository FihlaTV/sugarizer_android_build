/*! Sugarizer 2017-08-25 */
define(function(){"use strict";var a={};return a._allShortcuts=[],a.add=function(a,b,c){var d=a.toLowerCase().split("+"),e={ctrlKey:d.indexOf("ctrl")>=0,altKey:d.indexOf("alt")>=0,shiftKey:d.indexOf("shift")>=0};this._allShortcuts.push({modifiers:e,key:b.toLowerCase(),callback:c})},document.onkeypress=function(b){b=b||window.event;var c,d={ctrlKey:b.ctrlKey,altKey:b.altKey,shiftKey:b.shiftKey};c="number"==typeof b.which?b.which:b.keyCode;for(var e=String.fromCharCode(c).toLowerCase(),f=0;f<a._allShortcuts.length;f+=1){var g=a._allShortcuts[f],h=g.key==e&&g.modifiers.ctrlKey==d.ctrlKey&&g.modifiers.altKey==d.altKey&&g.modifiers.shiftKey==d.shiftKey;if(h)return void g.callback()}},a});