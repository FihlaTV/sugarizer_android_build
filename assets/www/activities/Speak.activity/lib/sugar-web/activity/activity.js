/*! Sugarizer 2017-09-04 */
define(["webL10n","sugar-web/activity/shortcut","sugar-web/bus","sugar-web/env","sugar-web/datastore","sugar-web/graphics/icon","sugar-web/graphics/activitypalette"],function(a,b,c,d,e,f,g){"use strict";var h=null,i={};return i.setup=function(){function j(){var a=document.createEvent("CustomEvent");a.initCustomEvent("activityPause",!1,!1,{cancelable:!0}),window.dispatchEvent(a)}function k(){var a=document.createEvent("CustomEvent");a.initCustomEvent("activityStop",!1,!1,{cancelable:!0});var b=window.dispatchEvent(a);b&&i.close()}c.listen(),a.start(),c.onNotification("activity.pause",j),c.onNotification("activity.stop",k),h=new e.DatastoreObject;var l=document.getElementById("activity-button"),m=new g.ActivityPalette(l,h);i.getXOColor(function(a,b){f.colorize(l,b);var c=document.querySelector("#activity-palette .palette-invoker");f.colorize(c,b)});var n=document.getElementById("stop-button");n.addEventListener("click",function(a){k()}),b.add("Ctrl","Q",this.close),d.getEnvironment(function(a,b){b.objectId||h.setMetadata({title:b.activityName+" Activity",title_set_by_user:"0",activity:b.bundleId,activity_id:b.activityId}),h.save(function(){h.getMetadata(function(a,b){m.setTitleDescription(b)})})})},i.getDatastoreObject=function(){return h},i.getXOColor=function(a){function b(b,c){null===b?a(null,{stroke:c[0][0],fill:c[0][1]}):a(null,{stroke:"#00A0FF",fill:"#8BFF7A"})}c.sendMessage("activity.get_xo_color",[],b)},i.close=function(a){function b(b,c){null===b?a(null):a(b,null)}c.sendMessage("activity.close",[],b)},i.showObjectChooser=function(a){function b(b,c){null===b?a(null,c[0]):a(b,null)}c.sendMessage("activity.show_object_chooser",[],b)},i});