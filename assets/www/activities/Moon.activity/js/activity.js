/*! Sugarizer 2018-05-08 */
define(["sugar-web/activity/activity","activity/moon-activity","webL10n"],function(a,b,c){require(["domReady!"],function(c){a.setup(),b.setup();var d=a.getDatastoreObject();d.loadAsText(function(a,c,d){null!=d&&b.initPrefs(d)});var e=document.getElementById("stop-button");e.addEventListener("click",function(a){var c=b.getPrefs();d.setDataAsText(c),console.log("writing..."),d.save(function(a){null===a?console.log("write done."):console.log("write failed.")})})})});