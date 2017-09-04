/*! Sugarizer 2017-09-04 */
define(function(a){function b(){var a=function(){},b=a,c=a,d=a,e=a,f=a,g=a,h=a,i=a;l=[a,b,c,d,e,f,g,h,i],this.socket=null,this.registerMessageHandler=function(){this.socket.onmessage=function(a){var b=a.data;try{var c=JSON.parse(b)}catch(a){return void console.log("Presence API error, this doesn't look like a valid JSON: ",b)}c.type<l.length?l[c.type](c.data):console.log("Presence API error, unknown callback type:"+c.type)}},this.registerUser=function(){this.socket.send(JSON.stringify(this.userInfo))}}function c(a){"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.storage.local.get("sugar_settings",function(b){a(b.sugar_settings)}):a(localStorage.sugar_settings)}var d=1,e=2,f=3,g=4,h=5,i=6,j=7,k=8,l=[],m=new b;return b.prototype.isConnected=function(){return null!=this.socket},b.prototype.getUserInfo=function(){return this.userInfo},b.prototype.getSharedInfo=function(){return this.sharedInfo},b.prototype.joinNetwork=function(a){window.WebSocket||(console.log("WebSocket not supported"),a({code:-1},m));var b=this;c(function(c){var d=location.hostname;if(c){var e=JSON.parse(c);if(e.server){d=e.server;var f=d.indexOf(":");f==-1&&(f=d.indexOf("/")),f==-1&&(f=d.length),d=d.substring(0,f)}}b.socket=new WebSocket("ws://"+d+":8039"),b.socket.onerror=function(c){console.log("WebSocket Error: "+c),a(c,m),b.socket=null},b.socket.onopen=function(d){var e=JSON.parse(c);b.userInfo={name:e.name,networkId:e.networkId,colorvalue:e.colorvalue},b.registerMessageHandler(),b.registerUser(),a(null,m)},b.socket.onclose=function(a){l[i](a)}})},b.prototype.leaveNetwork=function(){this.isConnected()&&this.socket.close()},b.prototype.listUsers=function(a){if(this.isConnected()){l[d]=a;var b=JSON.stringify({type:d});this.socket.send(b)}},b.prototype.createSharedActivity=function(a,b){if(this.isConnected()){var c=this;l[e]=function(a){c.sharedInfo={id:a},b(a)};var d=JSON.stringify({type:e,activityId:a});this.socket.send(d)}},b.prototype.listSharedActivities=function(a){if(this.isConnected()){l[f]=a;var b=JSON.stringify({type:f});this.socket.send(b)}},b.prototype.joinSharedActivity=function(a,b){if(this.isConnected()){var c=this;l[g]=function(a){c.sharedInfo=a,b(a)};var d=JSON.stringify({type:g,group:a});this.socket.send(d)}},b.prototype.leaveSharedActivity=function(a,b){if(this.isConnected()){l[h]=b;var c=JSON.stringify({type:h,group:a});this.socket.send(c)}},b.prototype.onConnectionClosed=function(a){l[i]=a},b.prototype.onSharedActivityUserChanged=function(a){l[j]=a},b.prototype.sendMessage=function(a,b){if(this.isConnected()){var c=JSON.stringify({type:k,group:a,data:b});this.socket.send(c)}},b.prototype.onDataReceived=function(a){l[k]=a},m});