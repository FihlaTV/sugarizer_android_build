/*! Sugarizer 2018-05-08 */
define(["sugar-web/activity/activity","webL10n","sugar-web/graphics/palette","sugar-web/graphics/presencepalette"],function(a,b,c,d){var a=require("sugar-web/activity/activity");require(["domReady!"],function(b){function c(){i=a.getPresenceObject(function(a,b){return a?(g.innerHTML=l10n_s.get("Error"),void(g.className="error")):(j=b.getUserInfo(),g.innerHTML=l10n_s.get("Connected"),g.className="open",e.readOnly=!1,window.top.sugar.environment.sharedId||b.createSharedActivity("org.sugarlabs.ChatPrototype",function(a){}),b.onConnectionClosed(function(a){console.log(l10n_s.get("ConnectionClosed")),g.innerHTML=l10n_s.get("DisconnectedFromWebSocket"),g.className="closed"}),b.onSharedActivityUserChanged(function(a){var b=a.user.name.replace("<","&lt;").replace(">","&gt;");f.innerHTML+='<li class="received" style = "color:blue">'+b+" "+(a.move>0?l10n_s.get("Join"):l10n_s.get("Leave"))+" "+l10n_s.get("Chat")+"</li>"}),void b.onDataReceived(function(a){var b=a.content,c=a.user.name.replace("<","&lt;").replace(">","&gt;"),d=a.user.colorvalue,e='<span style = "color:'+d.stroke+'">'+c+"</span>";myElem=document.createElement("li"),myElem.class="received",myElem.style.background=d.fill,myElem.innerHTML=e+b,myElem.style.color=d.stroke,f.appendChild(myElem),h.scrollTop=h.scrollHeight}))})}a.setup();var e=(document.getElementById("message-form"),document.getElementById("message")),f=document.getElementById("messages"),g=document.getElementById("status"),h=document.getElementById("content");document.getElementById("status").innerHTML=l10n_s.get("status"),e.placeholder=l10n_s.get("WriteYourMessage");var i,j=null,k=document.getElementById("network-button");d=new d.PresencePalette(k,void 0),d.addEventListener("shared",c),window.top.sugar.environment.sharedId&&(c(),d.setShared(!0)),e.onkeydown=function(a){if(13===a.keyCode){var b=e.value,c={user:j,content:b};return i.sendMessage(i.getSharedInfo().id,c),e.placeholder=l10n_s.get("WriteYourMessage"),e.value="",e.setSelectionRange(0,0),!1}}})});