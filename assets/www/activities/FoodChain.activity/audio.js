/*! Sugarizer 2018-07-01 */
enyo.kind({name:"HTML5.Audio",kind:enyo.Control,tag:"audio",published:{src:"",crossorigin:"",preload:"auto",mediagroup:"",loop:!1,muted:"",controlsbar:!1},events:{onSoundEnded:"",onSoundTimeupdate:""},create:function(){this.inherited(arguments),this.isCordova=(enyo.platform.android||enyo.platform.androidChrome||enyo.platform.ios)&&"http"!=document.location.protocol.substr(0,4),this.startPlay=!1,this.srcChanged(),this.crossoriginChanged(),this.preloadChanged(),this.loopChanged(),this.mutedChanged(),this.controlsbarChanged(),this.handleVolumeButtons()},handleVolumeButtons:function(){if(this.isCordova&&!enyo.platform.iOS){var a=function(){};document.addEventListener("volumeupbutton",function(){cordova.plugins.VolumeControl.getVolume(function(b){var c=parseInt(b);c<100&&cordova.plugins.VolumeControl.setVolume(c+10,a,a)},a)},!1),document.addEventListener("volumedownbutton",function(){cordova.plugins.VolumeControl.getVolume(function(b){var c=parseInt(b);c>0&&cordova.plugins.VolumeControl.setVolume(c-1,a,a)},a)},!1)}},rendered:function(){if(this.inherited(arguments),this.hasNode()){var a=this;enyo.dispatcher.listen(a.hasNode(),"ended",function(){a.doSoundEnded()}),enyo.dispatcher.listen(a.hasNode(),"timeupdate",function(b){a.doSoundTimeupdate({timeStamp:b.timeStamp})})}},srcChanged:function(){this.setAttribute("src",this.src)},crossoriginChanged:function(){this.setAttribute("crossorigin",this.crossorigin)},preloadChanged:function(){this.setAttribute("preload",this.preload)},loopChanged:function(){this.setAttribute("loop",this.loop)},mutedChanged:function(){0!=this.muted.length&&this.setAttribute("muted",this.muted)},controlsbarChanged:function(){this.setAttribute("controls",this.controlsbar)},canPlayType:function(a){var b=this.hasNode();return!!b&&b.canPlayType(a)},play:function(){if(this.isCordova){var a=location.pathname.substring(0,1+location.pathname.lastIndexOf("/"))+this.src,b=this;return this.media&&(this.media.src="",this.media.pause(),this.media.release()),this.media=new Media(a,function(){},function(){},function(a){4==a&&""!=this.src&&b.doSoundEnded()}),void this.media.play()}var c=this.hasNode();if(c){this.started=!1;var d=c.play();if(d){var b=this;d.then(function(){b.started=!0}).catch(function(){})}else this.started=!0}},pause:function(){if(this.isCordova){if(!this.media)return;return this.media.src="",this.media.pause(),void this.media.release()}var a=this.hasNode();a&&this.started&&a.pause()},paused:function(){var a=this.hasNode();return!!a&&a.paused},ended:function(){var a=this.hasNode();return!!a&&a.ended}}),enyo.kind({name:"FoodChain.Audio",kind:enyo.Control,components:[{name:"sound",kind:"HTML5.Audio",preload:"auto",autobuffer:!0,controlsbar:!1,onSoundEnded:"broadcastEnd"}],create:function(){this.inherited(arguments),this.format=null},rendered:function(){this.inherited(arguments),this.$.sound.canPlayType("audio/ogg")?this.format=".ogg":this.$.sound.canPlayType("audio/mpeg")&&(this.format=".mp3")},play:function(a){null!=this.format&&(this.$.sound.setSrc(a+this.format),this.$.sound.play())},pause:function(){null!=this.format&&this.$.sound.pause()},broadcastEnd:function(){enyo.Signals.send("onEndOfSound",{sound:this.$.sound.src.substring(0,this.$.sound.src.length-4)})}});