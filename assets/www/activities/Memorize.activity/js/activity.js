/*! Sugarizer 2017-09-04 */
function loadData(a,b,c){var d=0;"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.storage.local.get("sugar_settings",function(a){d=500}):d=0,setTimeout(function(){a.getDatastoreObject().loadAsText(function(a,d,e){if(null!=e){var f=JSON.parse(e);null!=f&&(f.game&&(b.game=f.game,b.game.multiplayer=!1,b.game.selectedCards=[],b.game.currentPlayer="",b.game.players=[]),c&&c())}})},d)}function initPresence(a,b,c,d){a.getPresenceObject(function(e,f){b.presence=f;var g=document.getElementById("network-button"),h=new c.PresencePalette(g,void 0,f);f.onSharedActivityUserChanged(function(a){h.onSharedActivityUserChanged(a)}),h.onUsersListChanged(function(a){b.onUsersListChanged(a)}),window.top&&window.top.sugar&&window.top.sugar.environment&&window.top.sugar.environment.sharedId?(shareActivity(a,f,b,!1),h.setShared(!0)):h.addEventListener("shared",function(){shareActivity(a,f,b,!0)}),d&&d()})}function shareActivity(a,b,c,d){c.shareActivity(d);b.getUserInfo();window.top.sugar.environment.sharedId||b.createSharedActivity("org.olpcfrance.MemorizeActivity",function(a){}),b.onConnectionClosed(function(a){console.log(a),console.log("Connection closed")}),b.onDataReceived(function(a){c.onDataReceived(a)}),b.listUsers(function(a){console.log(a)})}define(function(a){a(["domReady!","sugar-web/activity/activity","sugar-web/graphics/presencepalette","activity/memorize-app"],function(a,b,c,d){window.memorizeApp=d,d.activity=b,d.activity.setup(),window.top.sugar.environment.sharedId?d.initUI(function(){initPresence(d.activity,d,c)}):d.initUI(function(){initPresence(d.activity,d,c),d.computeCards(!0),d.drawGame(),loadData(d.activity,d,function(){d.drawGame()})})})});