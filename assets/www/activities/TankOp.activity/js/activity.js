/*! Sugarizer 2018-05-08 */
var app=null,l10n,preferences,play,sound,mouse={};define(["sugar-web/activity/activity"],function(a){require(["domReady!","settings"],function(b,c){a.setup(),document.onmousemove=function(a){mouse.position={x:a.pageX,y:a.pageY}},preferences=c,preferences.load(function(){l10n=preferences.l10n;var b=function(){if(null==app){if(preferences.l10n.language.code!=preferences.language)return void(preferences.l10n.language.code=preferences.language);sound=new TankOp.Audio,sound.renderInto(document.getElementById("audio")),app=new TankOp.App({activity:a}),app.load(),app.renderInto(document.getElementById("board")),document.getElementById("stop-button").addEventListener("click",function(a){sound.pause()})}else app.setLocale()};window.addEventListener("localized",b,!1)})})});