/*! Sugarizer 2019-09-21 */
define(["sugar-web/activity/activity","sugar-web/datastore"],function(a,b){Abcd||(Abcd={}),Abcd.activity=a,Abcd.datastore=b,app=null,requirejs(["domReady!"],function(a){Abcd.activity.setup(),Abcd.sound=new Abcd.Audio,Abcd.sound.renderInto(document.getElementById("header")),Abcd.loadDatabase(function(a){Abcd.initL10n(),app=(new Abcd.App).renderInto(document.getElementById("body")),Abcd.loadContext(function(){app.restartLastGame()})}),document.getElementById("stop-button").addEventListener("click",function(a){Abcd.sound.pause()})})});