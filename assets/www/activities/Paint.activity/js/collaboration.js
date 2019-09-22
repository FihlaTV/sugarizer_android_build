/*! Sugarizer 2019-09-21 */
define(["sugar-web/env","webL10n"],function(a,b){function c(a){var b=w;return b=b.replace("#010101",a.stroke),b=b.replace("#FFFFFF",a.fill),"data:image/svg+xml;base64,"+btoa(b)}function d(){var a=document.getElementById("presence-users"),b="<hr><ul style='list-style: none; padding:0;'>";for(var d in v)b+="<li><img style='height:30px;' src='"+c(v[d].colorvalue)+"'>"+v[d].name+"</li>";b+="</ul>",a.innerHTML=b}function e(a){var b=document.getElementById("presence-users");a&&b&&(v={},PaintApp.data.presence.listSharedActivityUsers(PaintApp.data.presence.getSharedInfo().id,function(a){v={};for(var b=0;b<a.length;b++){var c=a[b];v[c.networkId]=c}d()}))}function f(a){var d=a.user.name.replace("<","&lt;").replace(">","&gt;"),f="<img style='height:30px;' src='"+c(a.user.colorvalue)+"'>";1===a.move&&PaintApp.libs.humane.log(f+b.get("PlayerJoin",{user:d})),-1===a.move&&PaintApp.libs.humane.log(f+b.get("PlayerLeave",{user:d})),PaintApp.data.presence.listSharedActivities(function(a){for(var b=0;b<a.length;b++)a[b].id===PaintApp.data.presence.getSharedInfo().id&&e(a[b].users)})}function g(a){var b=window.top.sugar.environment.sharedId;b||(b=PaintApp.data.presence.getSharedInfo().id),PaintApp.data.presence.sendMessage(b,{user:PaintApp.data.presence.getUserInfo(),content:a})}function h(){var a=PaintApp.libs.activity;PaintApp.data.presence=a.getPresenceObject(function(a,b){if(a)return void console.log("error");if(PaintApp.data.isShared=!0,userSettings=b.getUserInfo(),console.log("connected"),window.top.sugar.environment.sharedId||b.createSharedActivity("org.olpcfrance.PaintActivity",function(a){}),b.onConnectionClosed(function(a){console.log(a),console.log("Connection closed")}),b.onSharedActivityUserChanged(function(a){f(a)}),b.onDataReceived(PaintApp.collaboration.onDataReceived),!PaintApp.data.isHost)var c=setInterval(function(){PaintApp.data.presence.sharedInfo.users&&(e(),PaintApp.data.requestedData||(PaintApp.data.requestedData=!0,g({action:"entranceToDataURLRequest "+PaintApp.data.presence.sharedInfo.users[0]})),clearInterval(c))},500)})}function i(a){return PaintApp.data.isCompressEnabled?PaintApp.libs.lzstring.compressToUTF16(a):a}function j(a){return PaintApp.data.isCompressEnabled?PaintApp.libs.lzstring.decompressFromUTF16(a):a}function k(a){ctx=PaintApp.elements.canvas.getContext("2d"),ctx.beginPath(),ctx.strokeStyle=a.content.data.strokeStyle,ctx.lineCap=a.content.data.lineCap,ctx.lineWidth=a.content.data.lineWidth,ctx.moveTo(a.content.data.from.x,a.content.data.from.y),ctx.lineTo(a.content.data.to.x,a.content.data.to.y),ctx.stroke()}function l(a){ctx=PaintApp.elements.canvas.getContext("2d"),ctx.font=a.content.data.font,ctx.fillStyle=a.content.data.fillStyle,ctx.textAlign=a.content.data.textAlign,ctx.fillText(a.content.data.text,a.content.data.left,a.content.data.top)}function m(a){ctx=PaintApp.elements.canvas.getContext("2d");var b=new Image;b.onload=function(){ctx.drawImage(b,a.content.data.left,a.content.data.top,a.content.data.width,a.content.data.height)},b.src=a.content.data.src}function n(a){var b="webkit";"undefined"!=typeof InstallTrigger&&(b="gecko"),ctx=PaintApp.elements.canvas.getContext("2d");var c=a.content.data.stampBase.replace("{platform}",b),d=window.location.href.split("/");d.pop(),d=d.join("/")+"/"+c;var e=new XMLHttpRequest;e.open("GET",d,!0),e.onload=function(b){if(200===e.status||0===e.status){var c=PaintApp.modes.Stamp.changeColors(e.responseText,a.content.data.color.fill,a.content.data.color.stroke),d=new Image;d.onload=function(){ctx.drawImage(d,a.content.data.left,a.content.data.top,a.content.data.width,a.content.data.height)},d.src="data:image/svg+xml;base64,"+btoa(c)}},e.send(null)}function o(a){PaintApp.data.entranceToDataURL=!0,PaintApp.clearCanvas(),img=new Image,img.onload=function(){PaintApp.elements.canvas.getContext("2d").drawImage(img,0,0,a.content.data.width,a.content.data.height)},img.src=j(a.content.data.src)}function p(a){PaintApp.clearCanvas(),img=new Image,img.onload=function(){PaintApp.elements.canvas.getContext("2d").drawImage(img,0,0,a.content.data.width,a.content.data.height)},img.src=j(a.content.data.src)}function q(a){PaintApp.clearCanvas()}function r(a){PaintApp.data.isHost&&PaintApp.saveCanvas()}function s(a){try{PaintApp.data.presence.sendMessage(PaintApp.data.presence.getSharedInfo().id,{user:PaintApp.data.presence.getUserInfo(),content:{action:"entranceToDataURL",data:{width:PaintApp.elements.canvas.width/window.devicePixelRatio,height:PaintApp.elements.canvas.height/window.devicePixelRatio,src:i(PaintApp.elements.canvas.toDataURL())}}})}catch(a){}}function t(a){if(PaintApp.data.presence.getUserInfo().networkId!==a.user.networkId){PaintApp.tmp=a;var b=(a.user.name.replace("<","&lt;").replace(">","&gt;"),"entranceToDataURLRequest "+PaintApp.data.presence.getUserInfo().networkId);switch(a.content.action){case"path":k(a);break;case"text":l(a);break;case"drawImage":m(a);break;case"drawStamp":n(a);break;case b:s(a);break;case"entranceToDataURL":o(a);break;case"toDataURL":p(a);break;case"clearCanvas":q(a);break;case"saveCanvas":r(a)}}}var u,v={},w='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\' [<!ENTITY stroke_color "#010101"><!ENTITY fill_color "#FFFFFF">]><svg enable-background="new 0 0 55 55" height="55px" version="1.1" viewBox="0 0 55 55" width="55px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"><g display="block" id="stock-xo_1_"><path d="M33.233,35.1l10.102,10.1c0.752,0.75,1.217,1.783,1.217,2.932   c0,2.287-1.855,4.143-4.146,4.143c-1.145,0-2.178-0.463-2.932-1.211L27.372,40.961l-10.1,10.1c-0.75,0.75-1.787,1.211-2.934,1.211   c-2.284,0-4.143-1.854-4.143-4.141c0-1.146,0.465-2.184,1.212-2.934l10.104-10.102L11.409,24.995   c-0.747-0.748-1.212-1.785-1.212-2.93c0-2.289,1.854-4.146,4.146-4.146c1.143,0,2.18,0.465,2.93,1.214l10.099,10.102l10.102-10.103   c0.754-0.749,1.787-1.214,2.934-1.214c2.289,0,4.146,1.856,4.146,4.145c0,1.146-0.467,2.18-1.217,2.932L33.233,35.1z" fill="&fill_color;" stroke="&stroke_color;" stroke-width="3.5"/><circle cx="27.371" cy="10.849" fill="&fill_color;" r="8.122" stroke="&stroke_color;" stroke-width="3.5"/></g></svg>';return window.addEventListener("localized",function(a){a.language!=u&&setTimeout(function(){b.language.code=u},50)}),a.getEnvironment(function(a,c){var d="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language;u=c.user?c.user.language:d,b.language.code=u}),{onDataReceived:t,compress:i,decompress:j,shareActivity:h,sendMessage:g,displayConnectedPeople:e}});