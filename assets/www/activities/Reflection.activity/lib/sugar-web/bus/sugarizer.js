/*! Sugarizer 2017-09-04 */
define(["sugar-web/env"],function(a){"use strict";function b(a){}function c(){}function d(){}var e={};return b.prototype.send=function(a){},b.prototype.close=function(){},c.prototype.open=function(a){},c.prototype.read=function(a,b){},c.prototype.gotData=function(a){},c.prototype.close=function(a){},d.prototype.open=function(a){},d.prototype.write=function(a){},d.prototype.close=function(a){},e.createInputStream=function(a){},e.createOutputStream=function(a){},e.sendMessage=function(a,b,c){if("activity.close"==a)window.location="../../index.html";else if("activity.get_xo_color"==a){var d={stroke:"#FF2B34",fill:"#005FE4"};if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)chrome.storage.local.get("sugar_settings",function(a){d=JSON.parse(a.sugar_settings).colorvalue,c(null,[[d.fill,d.stroke]])});else if("undefined"!=typeof Storage&&"undefined"!=typeof window.localStorage)try{d=JSON.parse(window.localStorage.getItem("sugar_settings")).colorvalue}catch(a){}c(null,[[d.fill,d.stroke]])}},e.onNotification=function(a,b){},e.sendBinary=function(a,b){},e.listen=function(a){},e.close=function(){},e});