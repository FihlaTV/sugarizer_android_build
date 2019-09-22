/*! Sugarizer 2019-09-21 */
var soundThemes=["audio/theme_piano","audio/theme_guitar","audio/theme_violon","audio/theme_oboe","audio/theme_trompet","audio/theme_mallets","audio/theme_soprano"],soundNotesPos=[24,536,1024,1536,2057,2569,3048,4040,4552,5032,5560,6064,6349,6570,6836,7072,8056,8560,9072,10071,10575,11071,12063,13061,14063,15062];enyo.kind({name:"Abcd.App",kind:enyo.Control,classes:"main",components:[{components:[{name:"logo",kind:"Image",classes:"logo",src:"images/logo.png"},{name:"instrument",kind:"Image",classes:"instrument no-select-image",src:"images/instrument0.png",ontap:"nextInstrument"},{name:"letter",content:"",classes:"letter"}]},{components:[{name:"credit",kind:"Image",src:"images/credit.png",classes:"creditButton no-select-image",ontap:"displayCredits"},{name:"learn",kind:"Image",src:"images/learn.png",classes:"learnButton no-select-image",ontap:"learnGame"},{name:"play",kind:"Image",src:"images/play.png",classes:"playButton no-select-image",ontap:"playGame"},{name:"build",kind:"Image",src:"images/build.png",classes:"buildButton no-select-image",ontap:"buildGame"},{name:"networkCheck",kind:"Abcd.NetworkCheck"}]},{name:"creditsPopup",kind:"Abcd.CreditsPopup"},{kind:"Signals",onEndOfSound:"endOfSound",onSoundTimeupdate:"soundTimeupdate"}],create:function(){this.inherited(arguments),Abcd.context.home=this,Abcd.context.object=null},rendered:function(){this.playTheme(),this.$.networkCheck.check()},restartLastGame:function(){Abcd.sound.pause(),""!=Abcd.context.screen&&this.checkDatabase(function(){Abcd.context.object=enyo.create({kind:Abcd.context.screen,context:Abcd.context.screenContext}).renderInto(document.getElementById("body")),Abcd.context.screen=""})},playTheme:function(){this.soundindex=0,this.soundpos=0,Abcd.sound.play(soundThemes[this.soundindex])},learnGame:function(a,b){null!=Abcd.context.database&&(Abcd.sound.pause(),Abcd.context.object=(new Abcd.Learn).renderInto(document.getElementById("body")))},playGame:function(a,b){null!=Abcd.context.database&&(Abcd.sound.pause(),Abcd.context.object=(new Abcd.Play).renderInto(document.getElementById("body")))},displayCredits:function(a,b){this.$.creditsPopup.show()},endOfSound:function(a,b){b.sound==soundThemes[this.soundindex]&&this.nextInstrument()},nextInstrument:function(){this.soundindex=(this.soundindex+1)%soundThemes.length,this.soundpos=0,this.$.letter.setContent(""),this.$.instrument.setSrc("images/instrument"+this.soundindex+".png"),Abcd.sound.play(soundThemes[this.soundindex])},soundTimeupdate:function(a,b){for(var c=this.soundpos;c<soundNotesPos.length;c++){var d=soundNotesPos[c];if(this.soundpos=c,b.timestamp>=d-50&&b.timestamp<d+50)return void this.$.letter.setContent(String.fromCharCode(65+c));if(d>b.timestamp)break}this.$.letter.setContent("")},checkDatabase:function(a){this.$.networkCheck.check(a)},hasDatabase:function(){return this.$.networkCheck.getConnected()}});