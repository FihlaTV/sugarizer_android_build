/*! Sugarizer 2017-08-25 */
var app=null,l10n,preferences,play,sound,mouse={};define(["sugar-web/activity/activity"],function(a){require(["domReady!","settings"],function(b,c){a.setup(),document.onmousemove=function(a){mouse.position={x:a.pageX,y:a.pageY}},preferences=c,preferences.load(function(){l10n=preferences.l10n,window.addEventListener("localized",function(){return preferences.l10n.language.code!=preferences.language?void(preferences.l10n.language.code=preferences.language):(sound&&sound.pause(),sound=new TankOp.Audio,sound.renderInto(document.getElementById("audio")),app=new TankOp.App({activity:a}),app.load(),app.renderInto(document.getElementById("board")),void document.getElementById("stop-button").addEventListener("click",function(a){sound.pause()}))})})})});