/*! Sugarizer 2018-07-01 */
enyo.kind({name:"FoodChain.App",kind:enyo.Control,classes:"board",components:[{name:"glass",classes:"glass"},{name:"cardbox",classes:"cardbox",components:[]},{kind:"Image",src:"images/FoodChain.png",classes:"logo"},{name:"LearnGame",kind:"ShadowButton",img:"one",classes:"game-LearnGame",ontap:"playGame",onenter:"showGameDescription",onleave:"hideGameDescription"},{name:"BuildGame",kind:"ShadowButton",img:"two",classes:"game-BuildGame",ontap:"playGame",onenter:"showGameDescription",onleave:"hideGameDescription"},{name:"PlayGame",kind:"ShadowButton",img:"three",classes:"game-PlayGame",ontap:"playGame",onenter:"showGameDescription",onleave:"hideGameDescription"},{kind:"ShadowButton",img:"information",classes:"information",ontap:"showCredits"},{name:"networkCheck",kind:"FoodChain.NetworkCheck"},{name:"popup",classes:"game-popup",components:[{name:"title",classes:"game-title"},{name:"description",classes:"game-description"}]},{kind:"Signals",onEndOfSound:"endOfSound"}],create:function(){this.inherited(arguments),FoodChain.context.home=this,this.initCardStack(),this.$.popup.hide(),this.games=[],this.setLocale(),FoodChain.context.game="",FoodChain.context.object=this,this.soundtrack="audio/popcorn"},setLocale:function(){enyo.forEach(this.$.cardbox.getControls(),function(a){a.setLocale()})},initCardStack:function(){this.cardcount=0,this.cards=[];for(var a=0;a<12;){for(var b=Math.floor(Math.random()*FoodChain.cards.length),c=!1,d=0;!c&&d<this.cards.length-1;d++)this.cards[d]==FoodChain.cards[b]&&(c=!0);c||(this.cards.push(FoodChain.cards[b]),a++)}},rendered:function(){FoodChain.sound.play(this.soundtrack),this.$.networkCheck.check(),this.createComponent({name:"timer",kind:"Timer",baseInterval:1200,onTriggered:"displayCard"},{owner:this})},endOfSound:function(a,b){b.sound==this.soundtrack&&FoodChain.sound.play(this.soundtrack)},displayCard:function(){if(this.cardcount==this.cards.length)return this.$.cardbox.destroyComponents(),this.$.cardbox.render(),void this.initCardStack();var a=Math.floor(Math.random()*window.innerWidth*.7),b=Math.floor(Math.random()*window.innerHeight*.7);this.$.cardbox.createComponent({kind:"FoodChain.Card",cardname:this.cards[this.cardcount],x:a,y:b,z:0}).render(),this.cardcount=this.cardcount+1},showGameDescription:function(a){this.games.LearnGame={title:__$FC("learn"),description:__$FC("learndesc")},this.games.BuildGame={title:__$FC("build"),description:__$FC("builddesc")},this.games.PlayGame={title:__$FC("play"),description:__$FC("playdesc")},this.$.title.setContent(this.games[a.name].title+":"),this.$.title.addClass("game-color-"+a.name),this.$.description.setContent(this.games[a.name].description),this.$.description.addClass("game-color-"+a.name),this.$.popup.show()},hideGameDescription:function(a){this.$.title.removeClass("game-color-"+a.name),this.$.description.removeClass("game-color-"+a.name),this.$.popup.hide()},showCredits:function(){this.$.timer.stop(),this.removeComponent(this.$.timer),FoodChain.context.object=(new FoodChain.Credits).renderInto(document.getElementById("body"))},playGame:function(a){this.$.popup.hide(),FoodChain.sound.pause(),this.$.timer.stop(),this.removeComponent(this.$.timer);var b=void 0===a.level?1:a.level;"LearnGame"==a.name?FoodChain.context.object=new FoodChain.LearnGame({level:b}).renderInto(document.getElementById("body")):"BuildGame"==a.name?FoodChain.context.object=new FoodChain.BuildGame({level:b}).renderInto(document.getElementById("body")):"PlayGame"==a.name&&(FoodChain.context.object=new FoodChain.PlayGame({level:b}).renderInto(document.getElementById("body")))},checkDatabase:function(a){this.$.networkCheck.check(a)},hasDatabase:function(){return this.$.networkCheck.getConnected()},getDatabase:function(){return this.hasDatabase()?"":"http://server.sugarizer.org/activities/FoodChain.activity/"}});