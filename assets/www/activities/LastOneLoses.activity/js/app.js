/*! Sugarizer 2017-08-25 */
enyo.kind({name:"LOLGameApp",kind:enyo.Control,published:{size:13,level:1,count:13,activity:null},components:[{classes:"playboard",components:[{name:"player",classes:"player-image"},{name:"box",classes:"lol-box",components:[]},{name:"computer",classes:"computer-image"}]},{name:"playbutton",kind:"Image",src:"icons/play.png",classes:"play",ontap:"doPlay",showing:!1},{name:"endaudio",kind:"HTML5.Audio",preload:"auto",autobuffer:!0,controlsbar:!1},{name:"endmessage",content:"",showing:!1,classes:"end-message"}],create:function(){this.inherited(arguments),this.init()},init:function(){this.game=new LOLGame(this.count),this.count>0&&(this.player=this.game.getPlayer()),this.count=this.size,this.selectedCount=0,this.activity.getXOColor(function(a,b){console.log(b)}),document.getElementById("level-easy-button").classList.remove("active"),document.getElementById("level-medium-button").classList.remove("active"),document.getElementById("level-hard-button").classList.remove("active"),1==this.level?document.getElementById("level-easy-button").classList.add("active"):2==this.level?document.getElementById("level-medium-button").classList.add("active"):3==this.level&&document.getElementById("level-hard-button").classList.add("active"),this.drawBoard()},drawBoard:function(){this.selectedCount=0;var a=[];enyo.forEach(this.$.box.getControls(),function(b){a.push(b)});for(var b=0;b<a.length;b++)a[b].destroy();for(var b=0;b<this.game.getLength();b++)this.$.box.createComponent({kind:"LOLItem",ontap:"selectItem"},{owner:this}).render();document.getElementById("switch-player-button").disabled=this.game.getLength()!=this.size,this.showCurrentPlayer(),this.game.endOfGame()&&(this.$.endmessage.addClass(this.game.getPlayer()!=this.player?"end-message-win":"end-message-lost"),this.$.endmessage.removeClass(this.game.getPlayer()!=this.player?"end-message-lost":"end-message-win"),this.$.endaudio.setSrc(this.game.getPlayer()!=this.player?"audio/applause.ogg":"audio/disappointed.ogg"),this.$.endaudio.play(),this.$.endmessage.show()),this.$.endmessage.setShowing(this.game.endOfGame()),this.game.getPlayer()==this.player||this.game.endOfGame()||this.computerPlay()},getLevel:function(){return document.getElementById("level-easy-button").classList.contains("active")?1:document.getElementById("level-medium-button").classList.contains("active")?2:document.getElementById("level-hard-button").classList.contains("active")?3:0},showCurrentPlayer:function(){this.player!=this.game.getPlayer()||this.game.endOfGame()?this.$.player.addClass("empty-image"):this.$.player.removeClass("empty-image"),this.player==this.game.getPlayer()||this.game.endOfGame()?this.$.computer.addClass("empty-image"):this.$.computer.removeClass("empty-image")},selectItem:function(a){if(this.player==this.game.getPlayer()){var b=a.getSelected();if(3==this.selectedCount&&!b)return void this.$.playbutton.show();this.selectedCount=b?this.selectedCount-1:this.selectedCount+1,a.setSelected(!b),this.selectedCount>0?this.$.playbutton.show():this.$.playbutton.hide()}},switchPlayer:function(){this.game.reverse(),this.player=this.player%2,this.drawBoard()},doPlay:function(){this.player==this.game.getPlayer()&&0!=this.selectedCount&&(this.save(this.game.play(this.selectedCount)),this.drawBoard(),this.$.playbutton.hide())},computerPlay:function(){this.player!=this.game.getPlayer()&&(this.selectedCount=0,this.step=0,this.timer=window.setInterval(enyo.bind(this,"doComputer"),400+50*this.getLevel()))},doComputer:function(){if(0==this.step){this.step++;var a=this.game.think(this.getLevel()),b=this;enyo.forEach(this.$.box.getControls(),function(c){b.selectedCount<a&&(c.setSelected(!0),b.selectedCount++)}),this.step++}else 2==this.step&&(window.clearInterval(this.timer),this.save(this.game.play(this.selectedCount)),this.drawBoard())},doRenew:function(){this.level=this.getLevel(),this.init()},load:function(){var a=this.activity.getDatastoreObject(),b=this;a.loadAsText(function(a,c,d){var d=JSON.parse(d);null!=d&&(b.size=d.size,b.count=d.count,b.level=d.level,b.player=d.player,b.init())})},save:function(a){var b=this.activity.getDatastoreObject(),c=JSON.stringify({size:this.size,count:a,level:this.getLevel(),player:this.game.getPlayer()});b.setDataAsText(c),b.save(function(){})}}),enyo.kind({name:"LOLItem",kind:enyo.Control,classes:"lol-item",published:{selected:!1},create:function(){this.inherited(arguments),this.selectedChanged()},selectedChanged:function(){var a="lol-item-selected";this.selected?this.addClass(a):this.removeClass(a)}});