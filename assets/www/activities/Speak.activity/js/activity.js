/*! Sugarizer 2017-09-04 */
define(["sugar-web/activity/activity","activity/SpeakActivity","facepalette","speechpalette","languagepalette","activity/sax","activity/dom-js","activity/AIMLInterpreter","activity/Speech"],function(a,b,c,d,e){require(["domReady!"],function(b){a.setup();var f=a.getDatastoreObject(),g=document.getElementById("face-button"),h=(new c.ActivityPalette(g,f),document.getElementById("speech-button")),i=(new d.ActivityPalette(h,f),document.getElementById("language-button"));new e.ActivityPalette(i,f)})});