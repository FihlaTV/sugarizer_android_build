/*! Sugarizer 2018-05-08 */
function runactivity(a,b,c,d,e,f){function g(){function g(){i.update()}function k(){h.width=window.innerWidth,h.height=window.innerHeight-55,i.update(),location.reload()}h=document.getElementById("actualcanvas"),h.width=window.innerWidth,h.height=window.innerHeight-55,i=new createjs.Stage(h),i.update(),i.mouseEventsEnabled=!0,createjs.Ticker.setFPS(30),createjs.Ticker.addEventListener("tick",g),window.addEventListener("resize",k,!1),j=new Editor(i,b,c,d,a,e,f),setTimeout(function(){j.init()},500);var l=c.getElementById("save-button");l.addEventListener("click",function(a){j.saveColours()});var m=c.getElementById("reset-button");m.addEventListener("click",function(g){i.removeAllChildren(),j=new Editor(i,b,c,d,a,e,f,!0),j.init()}),window.addEventListener("activityStop",function(b){b.preventDefault(),j.stop(),a.close()})}var h,i,j;g()}define(["sugar-web/activity/activity","easeljs","tweenjs","activity/editor","activity/colourcircle","activity/xoman"],function(a){require(["domReady!"],function(b){require(["sugar-web/graphics/xocolor","sugar-web/env","sugar-web/datastore"],function(c,d,e){a.setup(),a.getXOColor(function(f,g){runactivity(a,c,b,g,d,e)})})})});