/*! Sugarizer 2019-09-21 */
define(["sugar-web/activity/activity","tween","rAF","activity/directions","sugar-web/graphics/presencepalette","sugar-web/env","sugar-web/graphics/icon","webL10n","sugar-web/graphics/palette","rot","humane"],function(a,b,c,d,e,f,g,h,i,j,k){requirejs(["domReady!"],function(c){a.setup();var g={},i=!1,l=0,m=0;g.width=void 0,g.height=void 0,g.startPoint={},g.goalPoint={},g.walls=[],g.visited=[],g.directions=[],g.forks=[];var n='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\' [<!ENTITY stroke_color "#010101"><!ENTITY fill_color "#FFFFFF">]><svg enable-background="new 0 0 55 55" height="55px" version="1.1" viewBox="0 0 55 55" width="55px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"><g display="block" id="stock-xo_1_"><path d="M33.233,35.1l10.102,10.1c0.752,0.75,1.217,1.783,1.217,2.932   c0,2.287-1.855,4.143-4.146,4.143c-1.145,0-2.178-0.463-2.932-1.211L27.372,40.961l-10.1,10.1c-0.75,0.75-1.787,1.211-2.934,1.211   c-2.284,0-4.143-1.854-4.143-4.141c0-1.146,0.465-2.184,1.212-2.934l10.104-10.102L11.409,24.995   c-0.747-0.748-1.212-1.785-1.212-2.93c0-2.289,1.854-4.146,4.146-4.146c1.143,0,2.18,0.465,2.93,1.214l10.099,10.102l10.102-10.103   c0.754-0.749,1.787-1.214,2.934-1.214c2.289,0,4.146,1.856,4.146,4.145c0,1.146-0.467,2.18-1.217,2.932L33.233,35.1z" fill="&fill_color;" stroke="&stroke_color;" stroke-width="3.5"/><circle cx="27.371" cy="10.849" fill="&fill_color;" r="8.122" stroke="&stroke_color;" stroke-width="3.5"/></g></svg>';f.getEnvironment(function(b,c){var d="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,e=c.user?c.user.language:d;h.language.code=e,c.sharedId&&(console.log("Shared instance"),ta=a.getPresenceObject(function(a,b){b.onDataReceived(y),b.onSharedActivityUserChanged(z)})),c.objectId?a.getDatastoreObject().loadAsText(function(a,b,c){null==a&&null!=c&&(c=JSON.parse(c),g=c.maze,L=c.gameSize,P(),R(),aa())}):oa()});var o,p,q,r,s,t,u,v,w,x=function(a){var b=n;return b=b.replace("#010101",a.stroke),b=b.replace("#FFFFFF",a.fill),"data:image/svg+xml;base64,"+btoa(b)},y=function(a){if(ta.getUserInfo().networkId!==a.user.networkId)switch(a.action){case"start":i=!1,l=0,g=a.content,L=a.SizeOfGame,m=a.oponentCount,P(),R(),aa();break;case"ended":l++;var b=a.user.name.replace("<","&lt;").replace(">","&gt;"),c="<img style='height:30px;' src='"+x(a.user.colorvalue)+"'>";k.log(c+h.get("PlayerEndLevel",{user:b}))}},z=function(a){var b=a.user.name.replace("<","&lt;").replace(">","&gt;"),c="<img style='height:30px;' src='"+x(a.user.colorvalue)+"'>";1===a.move?(m++,k.log(c+h.get("PlayerJoin",{user:b}))):-1===a.move&&(m--,k.log(c+h.get("PlayerLeave",{user:b}))),ua&&ta.sendMessage(ta.getSharedInfo().id,{user:ta.getUserInfo(),action:"start",SizeOfGame:L,oponentCount:m,content:g}),console.log("User "+a.user.name+" "+(1==a.move?"join":"leave"))},A=/(iPad|iPhone|iPod)/g.test(navigator.userAgent)?".mp3":".ogg",B="#101010",C="#ffffff",D="hsl(0, 0%, 80%)",E="hsl(0, 90%, 50%)",F=[],G={arrows:[38,39,40,37],wasd:[87,68,83,65],ijkl:[73,76,75,74],mouse:[-1,-1,-1,-1]},H=["arrows","wasd","ijkl","mouse"],I={},J={},K={},L=60,M=!1,N=document.getElementById("maze"),O=document.createElement("canvas"),P=function(){var a=document.getElementById("main-toolbar");o=window.innerWidth,p=window.innerHeight-a.offsetHeight-3,r=Math.floor(o/g.width),s=Math.floor(p/g.height),N.width=o,N.height=p,O.width=2*r,O.height=s*H.length},Q=function(){P(),R(),Z()};window.addEventListener("resize",Q);var R=function(){for(control in G)control in I&&S(control)},S=function(a){var b=H.indexOf(a);return ctx=O.getContext("2d"),W(ctx,0,b,I[a].normal),W(ctx,1,b,I[a].blocked),{normal:{image:O,x:0,y:b},blocked:{image:O,x:1,y:b}}},T=function(a,b,c,d){a.fillStyle=d,a.fillRect(r*b,s*c,r,s)},U=function(a,b,c,d){var e;e=1==d?B:C,T(a,b,c,e)},V=function(a,b,c,d,e){var f=r*(b+.5),g=s*(c+.5),h=e*Math.min(r,s)/2;a.beginPath(),a.arc(f,g,h,0,2*Math.PI,!1),a.fillStyle=d,a.fill()},W=function(a,b,c,d){V(a,b,c,d,.9);var e=r*(b+.3),f=s*(c+.45),g=.28*Math.min(r,s)/2;a.beginPath(),a.arc(e,f,g,0,2*Math.PI,!1);var h=r*(b+.7),i=s*(c+.45);a.arc(h,i,g,0,2*Math.PI,!1),a.fillStyle="#ffffff",a.fill(),a.beginPath(),a.arc(e,f,g/2,0,2*Math.PI,!1),a.arc(h,i,g/2,0,2*Math.PI,!1),a.fillStyle="#000000",a.fill(),a.beginPath(),a.moveTo(r*(b+.25),s*(c+.65)),a.quadraticCurveTo(r*(b+.5),s*(c+.75),r*(b+.75),s*(c+.65)),a.quadraticCurveTo(r*(b+.5),s*(c+.75),r*(b+.75),s*(c+.65)),a.quadraticCurveTo(r*(b+.5),s*(c+1),r*(b+.25),s*(c+.65)),a.quadraticCurveTo(r*(b+.5),s*(c+1),r*(b+.25),s*(c+.65)),a.fillStyle="#ffffff",a.fill()},X=function(a,b,c,d){a.drawImage(d.image,r*d.x,s*d.y,r,s,r*b,s*c,r,s)},Y=function(a,b,c){void 0===c&&(c=N.getContext("2d")),U(c,a,b,g.walls[a][b]),void 0!==g.visited[a][b]&&V(c,a,b,g.visited[a][b],.5),M&&1==g.forks[a][b]&&V(c,a,b,"#faa",.5),a==g.startPoint.x&&b==g.startPoint.y&&V(c,g.startPoint.x,g.startPoint.y,D,.9),a==g.goalPoint.x&&b==g.goalPoint.y&&T(c,g.goalPoint.x,g.goalPoint.y,q);for(control in K){var d=K[control];a==d.x&&b==d.y&&X(c,a,b,d.sprite)}},Z=function(a){void 0===a&&(a=N.getContext("2d"));for(var b=0;b<g.width;b++)for(var c=0;c<g.height;c++)U(a,b,c,g.walls[b][c]),void 0!==g.visited[b][c]&&V(a,b,c,g.visited[b][c],.5),M&&1==g.forks[b][c]&&V(a,b,c,"#faa",.5);V(a,g.startPoint.x,g.startPoint.y,D,.9),W(a,g.startPoint.x,g.startPoint.y,E),T(a,g.goalPoint.x,g.goalPoint.y,q);for(control in K){var d=K[control];X(a,b,c,d.sprite)}},$=function(a){void 0===a&&(a=N.getContext("2d"));var b=r*(t.x+.5),c=s*(t.y+.5),d=v;a.beginPath(),a.arc(b,c,d,0,2*Math.PI,!1),a.fillStyle=t.color,a.fill()},_=function(a){void 0===a&&(a=N.getContext("2d")),a.fillStyle=q;var b,c,d=r*w,e=s*w;b=1==g.goalPoint.x?r:(g.goalPoint.x+1)*r-d,c=1==g.goalPoint.y?s:(g.goalPoint.y+1)*s-e,a.fillRect(b,c,d,e),V(a,g.startPoint.x,g.startPoint.y,D,.9*w)},aa=function(){u="starting",tween=new b.Tween({t:0}),tween.to({t:1},900),tween.easing(b.Easing.Quadratic.InOut),tween.onUpdate(function(){w=this.t}),tween.onComplete(function(){w=void 0,u="playing",Z()}),tween.start()},ba=function(a,b){ia(a,b),g.walls=ja(g.width,g.height),g.visited=ja(g.width,g.height),g.directions=ja(g.width,g.height),g.forks=ja(g.width,g.height),new j.Map.IceyMaze(g.width,g.height,1).create(ka),la(),na()},ca=function(a){t=a,u="transition",i=!0,ta&&ta.sendMessage(ta.getSharedInfo().id,{user:ta.getUserInfo(),action:"ended"}),new Audio("sounds/win"+A).play();for(control in K)K[control].stop();var c=Math.sqrt(Math.pow(window.innerWidth,2)+Math.pow(window.innerHeight,2));if(tween=new b.Tween({radius:0}),tween.to({radius:c},1200),tween.easing(b.Easing.Circular.Out),tween.onUpdate(function(){v=this.radius}),g.startPoint={},K={},ta)if(l+1==m)tween.onComplete(function(){da()});else{var d=m-l-1;k.log(h.get(d>1?"PlayersWaitMany":"PlayersWaitOne",{count:d}))}else tween.onComplete(function(){da()});tween.start()},da=function(){L*=1.2,oa()},ea=function(a){if(this.control=a,this.x=g.startPoint.x,this.y=g.startPoint.y,!(a in I)){var b=Math.floor(360*Math.random());I[a]={normal:"hsl("+b+", 90%, 50%)",blocked:"hsl("+b+", 90%, 80%)",visited:"hsl("+b+", 30%, 80%)"},J[a]=S(a)}this.color=I[a].normal,this.sprite=J[a].normal,this.visitedColor=I[a].visited,this.path=void 0,this.animation=void 0,this.blockTween=void 0,F.push({x:this.x,y:this.y})},fa=function(a,b){return g.directions[a][b].reduce(function(a,b){return a+b})},ga=function(a,b){return 1==fa(a,b)},ha=function(a,b){return fa(a,b)>2},ia=function(a,b){g.height=Math.sqrt(b/a),g.width=g.height*a,g.height=Math.floor(g.height),g.width=Math.floor(g.width);var c,d;c=g.width%2?g.width-2:g.width-3,d=g.height%2?g.height-2:g.height-3;var e,f;Math.random()<.5?(e=1,i=c):(e=c,i=1);var h,i;Math.random()<.5?(h=1,f=d):(h=d,f=1),g.startPoint={x:e,y:h},g.goalPoint={x:i,y:f}},ja=function(a,b){for(var c=[],d=0;d<a;d++)c[d]=new Array(b);return c},ka=function(a,b,c){g.walls[a][b]=c},la=function(){for(var a=0;a<g.width;a++)for(var b=0;b<g.height;b++)g.directions[a][b]=ma(a,b)},ma=function(a,b){var c=[0,0,0,0];return 1==g.walls[a][b]?c:(0==g.walls[a-1][b]&&(c[d.west]=1),0==g.walls[a+1][b]&&(c[d.east]=1),0==g.walls[a][b-1]&&(c[d.north]=1),0==g.walls[a][b+1]&&(c[d.south]=1),c)},na=function(){for(var a=0;a<g.width;a++)for(var b=0;b<g.height;b++)(ga(a,b)||ha(a,b))&&(g.forks[a][b]=1)},oa=function(){ba(window.innerWidth/window.innerHeight,L),P(),R(),ta&&ta.sendMessage(ta.getSharedInfo().id,{user:ta.getUserInfo(),action:"start",SizeOfGame:L,content:g,oponentCount:m}),i=!1,l=0,K={},t=void 0,aa()};oa(),document.getElementById("restart-button").addEventListener("click",function(a){L=60,oa()}),ea.prototype.isMoving=function(){return void 0!==this.animation},ea.prototype.canGo=function(a){return 1==g.directions[this.x][this.y][d[a]]},ea.prototype.findPath=function(a){var b=function(a,c,e,f){if(!f&&(ga(a,c)||ha(a,c)))return[];var h=function(a,b,c){var e,f=a,h=b;"north"==c&&(h-=1),"east"==c&&(f+=1),"south"==c&&(h+=1),"west"==c&&(f-=1);var i=g.directions[f][h],j=i.slice(0);return j[d[d.getOpposite(c)]]=0,e=d.orders[j.indexOf(1)],{x:f,y:h,direction:e}},i=h(a,c,e),j=b(i.x,i.y,i.direction,!1);return j.unshift(e),j};return b(this.x,this.y,a,!0)},ea.prototype.stop=function(){clearInterval(this.animation),this.animation=void 0},ea.prototype.showBlocked=function(){function a(){c.color=I[c.control].normal,c.sprite=J[c.control].normal,F.push({x:c.x,y:c.y})}var c=this;void 0!==this.blockTween&&(this.blockTween.stop(),a()),this.blockTween=new b.Tween({}).to({},300),this.color=I[this.control].blocked,this.sprite=J[this.control].blocked,F.push({x:this.x,y:this.y}),this.blockTween.onComplete(function(){a()}),this.blockTween.start(),new Audio("sounds/tick"+A).play()},ea.prototype.move=function(a){if(!this.isMoving()){if(!this.canGo(a))return void this.showBlocked();var b=this,c=function(){var a=b.path.shift();void 0==a&&b.stop(),g.visited[b.x][b.y]=b.visitedColor,F.push({x:b.x,y:b.y}),"north"==a&&(b.y-=1),"east"==a&&(b.x+=1),"south"==a&&(b.y+=1),"west"==a&&(b.x-=1),F.push({x:b.x,y:b.y}),b.x==g.goalPoint.x&&b.y==g.goalPoint.y&&ca(b)};this.path=this.findPath(a),this.animation=setInterval(c,40)}};var pa=function(a){if("transition"!=u){var b="mouse";b in K||(K[b]=new ea(b));var c=K[b],d=r*(c.x+.5),e=s*(c.y+.5),f=a.clientX,g=a.clientY,h=document.getElementById("maze");f-=h.offsetLeft,g-=h.offsetTop;var i=180*Math.atan2(g-e,f-d)/Math.PI;45<i&&i<135?c.move("south"):-45>i&&i>-135?c.move("north"):-45<i&&i<45?c.move("east"):c.move("west")}};N.addEventListener?N.addEventListener("mousedown",pa):N.attachEvent("onclick",pa);var qa=function(a){if("transition"!=u){var b,c;for(control in G)-1!=G[control].indexOf(a.keyCode)&&(b=control,c=d.orders[G[control].indexOf(a.keyCode)]);if(void 0!==b){b in K||(K[b]=new ea(b));K[b].move(c)}}};document.addEventListener("keydown",qa);var ra=function(a){var b=Math.floor(120*(1+Math.cos(a/3e3))),c=Math.floor(50+10*(1+Math.cos(a/300)));q="hsl("+b+", 90%, "+c+"%)",F.push({x:g.goalPoint.x,y:g.goalPoint.y})},sa=function(a){switch(b.update(a),u){case"transition":$();break;case"starting":ra(a),_();break;case"playing":ra(a),F.forEach(function(a){Y(a.x,a.y)}),F=[]}requestAnimationFrame(sa),/Android/i.test(navigator.userAgent)&&"http"!=document.location.protocol.substr(0,4)&&(N.style.display="none",N.offsetHeight,N.style.display="block")};sa();var ta=null,ua=!1,va=new e.PresencePalette(document.getElementById("network-button"),void 0);va.addEventListener("shared",function(){va.popDown(),console.log("Want to share"),ta=a.getPresenceObject(function(a,b){if(a)return void console.log("Sharing error");b.createSharedActivity("org.sugarlabs.MazeWebActivity",function(a){console.log("Activity shared"),ua=!0,ta.sendMessage(ta.getSharedInfo().id,{user:ta.getUserInfo(),action:"connect"})}),b.onDataReceived(y),b.onSharedActivityUserChanged(z)})}),document.getElementById("stop-button").addEventListener("click",function(b){g.visited=ja(g.width,g.height);var c={maze:g,gameSize:L},d=JSON.stringify(c);a.getDatastoreObject().setDataAsText(d),a.getDatastoreObject().save()})})});