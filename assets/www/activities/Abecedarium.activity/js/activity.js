/*! Sugarizer 2017-09-04 */
define(["sugar-web/activity/activity"],function(a){Abcd.activity=a,app=null,require(["domReady!"],function(a){Abcd.activity.setup(),Abcd.sound=new Abcd.Audio,Abcd.sound.renderInto(document.getElementById("header")),app=(new Abcd.App).renderInto(document.getElementById("body")),Abcd.loadContext(function(){app.restartLastGame()}),document.getElementById("stop-button").addEventListener("click",function(a){Abcd.sound.pause()})})});