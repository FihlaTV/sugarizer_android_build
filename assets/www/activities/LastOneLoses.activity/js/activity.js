/*! Sugarizer 2019-09-21 */
define(["sugar-web/activity/activity","sugar-web/graphics/radiobuttonsgroup","sugar-web/graphics/presencepalette","sugar-web/env","sugar-web/graphics/icon","sugar-web/datastore","webL10n","humane"],function(a,b,c,d,e,f,g,h){var i,j,k=null,l=!1,m=0,n=null,o='<?xml version="1.0" ?><!DOCTYPE svg  PUBLIC \'-//W3C//DTD SVG 1.1//EN\'  \'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\' [<!ENTITY stroke_color "#010101"><!ENTITY fill_color "#FFFFFF">]><svg enable-background="new 0 0 55 55" height="55px" version="1.1" viewBox="0 0 55 55" width="55px" x="0px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px"><g display="block" id="stock-xo_1_"><path d="M33.233,35.1l10.102,10.1c0.752,0.75,1.217,1.783,1.217,2.932   c0,2.287-1.855,4.143-4.146,4.143c-1.145,0-2.178-0.463-2.932-1.211L27.372,40.961l-10.1,10.1c-0.75,0.75-1.787,1.211-2.934,1.211   c-2.284,0-4.143-1.854-4.143-4.141c0-1.146,0.465-2.184,1.212-2.934l10.104-10.102L11.409,24.995   c-0.747-0.748-1.212-1.785-1.212-2.93c0-2.289,1.854-4.146,4.146-4.146c1.143,0,2.18,0.465,2.93,1.214l10.099,10.102l10.102-10.103   c0.754-0.749,1.787-1.214,2.934-1.214c2.289,0,4.146,1.856,4.146,4.145c0,1.146-0.467,2.18-1.217,2.932L33.233,35.1z" fill="&fill_color;" stroke="&stroke_color;" stroke-width="3.5"/><circle cx="27.371" cy="10.849" fill="&fill_color;" r="8.122" stroke="&stroke_color;" stroke-width="3.5"/></g></svg>',p=function(a){var b=o;return b=b.replace("#010101",a.stroke),b=b.replace("#FFFFFF",a.fill),"data:image/svg+xml;base64,"+btoa(b)};d.getEnvironment(function(b,c){currentenv=c;var d="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,e=c.user?c.user.language:d;g.language.code=e,c.sharedId&&(console.log("Shared instance"),document.getElementById("level-easy-button").classList.remove("active"),document.getElementById("level-medium-button").classList.remove("active"),document.getElementById("level-hard-button").classList.remove("active"),document.getElementById("level-easy-button").setAttribute("disabled","disabled"),document.getElementById("level-easy-button").setAttribute("title","Not available in multiplayer"),document.getElementById("level-medium-button").setAttribute("disabled","disabled"),document.getElementById("level-medium-button").setAttribute("title","Not available in multiplayer"),document.getElementById("level-hard-button").setAttribute("disabled","disabled"),document.getElementById("level-hard-button").setAttribute("title","Not available in multiplayer"),document.getElementById("switch-player-button").setAttribute("disabled","disabled"),document.getElementById("switch-player-button").setAttribute("title","Only Host can do it"),document.getElementById("new-game-button").setAttribute("disabled","disabled"),document.getElementById("new-game-button").setAttribute("title","Only Host can do it"),k=a.getPresenceObject(function(a,b){b.listSharedActivityUsers(c.sharedId,function(a){for(var c=0;c<a.length;c++)if(a[c].networkId!=b.getUserInfo().networkId){n=a[c];break}}),b.onDataReceived(enyo.bind(i,"onNetworkDataReceived")),b.onSharedActivityUserChanged(enyo.bind(i,"onNetworkUserChanged"))}))}),requirejs(["domReady!"],function(d){a.setup(),document.getElementById("new-game-button").onclick=function(){i.doRenew()},j=new b.RadioButtonsGroup([document.getElementById("level-easy-button"),document.getElementById("level-medium-button"),document.getElementById("level-hard-button")]),document.getElementById("switch-player-button").onclick=function(){i.switchPlayer(),k&&k.sendMessage(k.getSharedInfo().id,{user:k.getUserInfo(),action:"update",content:0}),l&&(document.getElementById("switch-player-button").disabled=!0)},i=new LOLGameApp({activity:a}),i.load(),i.renderInto(document.getElementById("canvas"));var e=new c.PresencePalette(document.getElementById("network-button"),void 0);e.addEventListener("shared",function(){e.popDown(),console.log("Want to share"),k=a.getPresenceObject(function(a,b){if(a)return void console.log("Sharing error");b.createSharedActivity("org.olpc-france.LOLActivity",function(a){console.log("Activity shared"),document.getElementById("level-easy-button").classList.remove("active"),document.getElementById("level-medium-button").classList.remove("active"),document.getElementById("level-hard-button").classList.remove("active"),document.getElementById("level-easy-button").setAttribute("disabled","disabled"),document.getElementById("level-easy-button").setAttribute("title","Not available in multiplayer"),document.getElementById("level-medium-button").setAttribute("disabled","disabled"),document.getElementById("level-medium-button").setAttribute("title","Not available in multiplayer"),document.getElementById("level-hard-button").setAttribute("disabled","disabled"),document.getElementById("level-hard-button").setAttribute("title","Not available in multiplayer"),l=!0,i.drawBoard()}),b.onDataReceived(enyo.bind(i,"onNetworkDataReceived")),b.onSharedActivityUserChanged(enyo.bind(i,"onNetworkUserChanged"))})})}),enyo.kind({name:"LOLGameApp",kind:enyo.Control,published:{size:13,level:1,count:13,activity:null},components:[{classes:"playboard",components:[{name:"player",classes:"player-image"},{name:"box",classes:"lol-box",components:[]},{name:"computer",classes:"computer-image"}]},{name:"playbutton",kind:"Image",src:"icons/play.png",classes:"play",ontap:"doPlay",showing:!1},{name:"endaudio",kind:"HTML5.Audio",preload:"auto",autobuffer:!0,controlsbar:!1},{name:"endmessage",content:"",showing:!1,classes:"end-message"}],create:function(){this.inherited(arguments),this.init()},init:function(){this.game=new LOLGame(this.count),this.count>0&&(this.player=this.game.getPlayer()),this.count=this.size,this.selectedCount=0,document.getElementById("level-easy-button").classList.remove("active"),document.getElementById("level-medium-button").classList.remove("active"),document.getElementById("level-hard-button").classList.remove("active"),k||(1==this.level?document.getElementById("level-easy-button").classList.add("active"):2==this.level?document.getElementById("level-medium-button").classList.add("active"):3==this.level&&document.getElementById("level-hard-button").classList.add("active"))},rendered:function(){this.inherited(arguments),this.drawBoard()},drawBoard:function(){this.selectedCount=0;var a=[];enyo.forEach(this.$.box.getControls(),function(b){a.push(b)});for(var b=0;b<a.length;b++)a[b].destroy();for(var b=0;b<this.game.getLength();b++)this.$.box.createComponent({kind:"LOLItem",ontap:"selectItem"},{owner:this}).render();this.showCurrentPlayer(),document.getElementById("switch-player-button").disabled=this.game.getLength()!=this.size,this.game.endOfGame()&&(k?(this.$.player.addClass("empty-image"),this.$.computer.addClass("empty-image"),this.$.computer.removeClass("oponent-image"),this.$.endmessage.removeClass("end-message-lost"),this.$.endmessage.addClass(this.game.getPlayer()!=this.player?"end-message-win":"player-lost"),this.$.endmessage.removeClass(this.game.getPlayer()!=this.player?"player-lost":"end-message-win")):(this.$.endmessage.addClass(this.game.getPlayer()!=this.player?"end-message-win":"end-message-lost"),this.$.endmessage.removeClass(this.game.getPlayer()!=this.player?"end-message-lost":"end-message-win")),this.$.endaudio.setSrc(this.game.getPlayer()!=this.player?"audio/applause.ogg":"audio/disappointed.ogg"),this.$.endaudio.play(),this.$.endmessage.show()),this.$.endmessage.setShowing(this.game.endOfGame()),this.game.getPlayer()==this.player||this.game.endOfGame()||(k?this.oponentPlay():this.computerPlay())},Stop:function(){var b=document.createEvent("CustomEvent");b.initCustomEvent("activityStop",!1,!1,{cancelable:!0}),window.dispatchEvent(b)&&a.close()},onNetworkDataReceived:function(a){if(k.getUserInfo().networkId!==a.user.networkId)switch(a.action){case"init":console.log("init"),this.game=new LOLGame(a.content),this.game.reverse(),i.drawBoard(),n=a.user;break;case"update":console.log("update"),a.content>0?this.doOpponent(a.content):(this.game.reverse(),i.drawBoard());break;case"exit":console.log("already two players"),a.content==k.getUserInfo().networkId&&i.Stop()}},onNetworkUserChanged:function(a){var b="<img style='height:30px;' src='"+p(a.user.colorvalue)+"'>";h.log(b+g.get(1==a.move?"PlayerJoin":"PlayerLeave",{user:a.user.name})),console.log("User "+a.user.name+" "+(1==a.move?"join":"leave")),1==a.move&&l&&(0==m?(k.sendMessage(k.getSharedInfo().id,{user:k.getUserInfo(),action:"init",content:this.game.getLength()}),m++,n=a.user):k.sendMessage(k.getSharedInfo().id,{user:k.getUserInfo(),action:"exit",content:a.user.networkId}))},getLevel:function(){var a=["level-easy-button","level-medium-button","level-hard-button"];return console.log(a.indexOf(j.getActive().id)+1),a.indexOf(j.getActive().id)+1},showCurrentPlayer:function(){this.player!=this.game.getPlayer()||this.game.endOfGame()?this.$.player.addClass("empty-image"):(this.$.player.removeClass("empty-image"),this.$.player.hasNode()&&e.colorize(this.$.player.hasNode(),currentenv.user.colorvalue,function(){})),this.player==this.game.getPlayer()||this.game.endOfGame()?this.$.computer.addClass("empty-image"):this.$.computer.removeClass("empty-image")},selectItem:function(a){if(this.player==this.game.getPlayer()){var b=a.getSelected();if(3==this.selectedCount&&!b)return void this.$.playbutton.show();this.selectedCount=b?this.selectedCount-1:this.selectedCount+1,a.setSelected(!b),this.selectedCount>0?this.$.playbutton.show():this.$.playbutton.hide()}},switchPlayer:function(){this.game.reverse(),this.player=this.player%2,this.drawBoard()},doPlay:function(){this.player==this.game.getPlayer()&&0!=this.selectedCount&&(this.save(this.game.play(this.selectedCount)),k&&k.sendMessage(k.getSharedInfo().id,{user:k.getUserInfo(),action:"update",content:this.selectedCount}),this.drawBoard(),this.$.playbutton.hide())},oponentPlay:function(){this.player!=this.game.getPlayer()||this.game.endOfGame()?this.$.player.addClass("empty-image"):(this.$.player.removeClass("empty-image"),e.colorize(this.$.player.hasNode(),currentenv.user.colorvalue,function(){})),this.player==this.game.getPlayer()||this.game.endOfGame()?this.$.computer.addClass("empty-image"):(this.$.computer.removeClass("empty-image"),this.$.computer.addClass("oponent-image"),n&&e.colorize(this.$.computer.hasNode(),n.colorvalue,function(){}))},computerPlay:function(){this.player!=this.game.getPlayer()&&(this.selectedCount=0,this.step=0,this.timer=window.setInterval(enyo.bind(this,"doComputer"),400+50*this.getLevel()))},doComputer:function(){if(0==this.step){this.step++;var a=this.game.think(this.getLevel()),b=this;enyo.forEach(this.$.box.getControls(),function(c){b.selectedCount<a&&(c.setSelected(!0),b.selectedCount++)}),this.step++}else 2==this.step&&(window.clearInterval(this.timer),this.save(this.game.play(this.selectedCount)),this.drawBoard())},doOpponent:function(a){var b=this;enyo.forEach(this.$.box.getControls(),function(c){b.selectedCount<a&&(c.setSelected(!0),b.selectedCount++)}),window.setTimeout(function(){b.game.play(a),b.drawBoard()},400)},doRenew:function(){this.level=this.getLevel(),this.game=new LOLGame(this.count),this.init(),this.drawBoard(),k&&l&&k.sendMessage(k.getSharedInfo().id,{user:k.getUserInfo(),action:"init",content:this.game.getLength()})},load:function(){var a=this.activity.getDatastoreObject(),b=this;a.loadAsText(function(a,c,d){var d=JSON.parse(d);null!=d&&(b.size=d.size,b.count=d.count,b.level=d.level,b.player=d.player,b.init())})},save:function(a){var b=this.activity.getDatastoreObject(),c=JSON.stringify({size:this.size,count:a,level:this.getLevel(),player:this.game.getPlayer()});b.setDataAsText(c),b.save(function(){})}}),enyo.kind({name:"LOLItem",kind:enyo.Control,classes:"lol-item",published:{selected:!1},create:function(){this.inherited(arguments),this.selectedChanged()},selectedChanged:function(){var a="lol-item-selected";this.selected?(this.addClass(a),this.applyStyle("background-color",currentenv.user.colorvalue.stroke)):(this.removeClass(a),this.applyStyle("background-color",currentenv.user.colorvalue.fill))}})});