/*! Sugarizer 2018-05-08 */
function runactivity(a,b,c,d,e,f){function g(){function d(){i.update()}function g(){h.width=window.innerWidth,h.height=window.innerHeight-55,j.initialiseFromArray()}h=document.getElementById("actualcanvas"),h.width=window.innerWidth,h.height=window.innerHeight-55,i=new createjs.Stage(h),i.update(),i.mouseEventsEnabled=!0,createjs.Ticker.setFPS(30),createjs.Ticker.addEventListener("tick",d);var j=new Game(i,c,b,e,a,f);setTimeout(function(){j.init()},500);window.addEventListener("resize",g,!1);var k=b.getElementById("solve-button");k.addEventListener("click",function(a){j.solve()});var l=b.getElementById("new-game-button");l.addEventListener("click",function(a){j.newGame()}),window.addEventListener("activityStop",function(a){a.preventDefault(),j.stop()})}var h,i;g()}define(["sugar-web/activity/activity","easeljs","tweenjs","activity/game","activity/flipdot"],function(a){require(["domReady!"],function(b){require(["sugar-web/env","sugar-web/datastore","activity/sizepalette"],function(c,d,e){a.setup(),a.getXOColor(function(f,g){runactivity(a,b,g,c,d,e)})})})});