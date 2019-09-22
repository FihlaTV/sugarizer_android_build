/*! Sugarizer 2019-09-21 */
enyo.kind({name:"Sugar.Password",kind:enyo.Control,published:{label:"",password:""},events:{onEnter:""},classes:"password-class",components:[{name:"line",classes:"password-line",components:[{name:"text",content:"xxx",classes:"password-label"},{classes:"password-input",components:[{name:"pass",classes:"password-value",content:"",allowHtml:!0},{name:"cancel",classes:"password-iconcancel",showing:!1,ontap:"cancelClicked"}]},{components:[{name:"emojis",classes:"password-emojis",components:[{components:[{name:"emoji0",kind:"Sugar.Emoji",index:0,ontap:"emojiClicked",selected:!0},{name:"emoji1",kind:"Sugar.Emoji",index:1,ontap:"emojiClicked",selected:!0},{name:"emoji2",kind:"Sugar.Emoji",index:2,ontap:"emojiClicked",selected:!0},{name:"emoji3",kind:"Sugar.Emoji",index:3,ontap:"emojiClicked",selected:!0},{name:"emoji4",kind:"Sugar.Emoji",index:4,ontap:"emojiClicked",selected:!0}]},{components:[{name:"emoji5",kind:"Sugar.Emoji",index:5,ontap:"emojiClicked",selected:!0},{name:"emoji6",kind:"Sugar.Emoji",index:6,ontap:"emojiClicked",selected:!0},{name:"emoji7",kind:"Sugar.Emoji",index:7,ontap:"emojiClicked",selected:!0},{name:"emoji8",kind:"Sugar.Emoji",index:8,ontap:"emojiClicked",selected:!0},{name:"emoji9",kind:"Sugar.Emoji",index:9,ontap:"emojiClicked",selected:!0}]}]},{classes:"password-emojis-category",components:[{name:"category0",kind:"Sugar.Emoji",classes:"emoji-category",ontap:"category0Clicked",index:0,letter:!1,size:15,selected:!0},{name:"category1",kind:"Sugar.Emoji",classes:"emoji-category",ontap:"category1Clicked",index:10,letter:!1,size:15},{name:"category2",kind:"Sugar.Emoji",classes:"emoji-category",ontap:"category2Clicked",index:20,letter:!1,size:15}]}]}]}],create:function(){this.inherited(arguments),this.labelChanged(),this.listen=!1,this.password="";var a=this;document.addEventListener("keydown",function(b){return!!a.listen&&(13===b.keyCode?(a.doEnter(),!0):8==b.keyCode?(a.removeCharacter(),!0):(a.addCharacter(b.key),!0))})},startInputListening:function(){this.listen=!0},stopInputListening:function(){this.listen=!1},labelChanged:function(){this.$.text.setContent(this.label)},passwordChanged:function(){this.drawPassword(),0==this.password.length&&this.$.cancel.setShowing(!1)},emojiClicked:function(a){a.animate(),this.addCharacter(constant.emojis[a.getIndex()].letter)},category0Clicked:function(a){if(!a.getSelected()){var b=a.index;b-10>=0&&(this.$.category0.setIndex(b-10),this.$.category1.setIndex(b),this.$.category2.setIndex(b+10),a=this.$.category1),this.changeCategory(a)}},category1Clicked:function(a){a.getSelected()||this.changeCategory(a)},category2Clicked:function(a){if(!a.getSelected()){var b=a.index;b+10<constant.emojis.length&&(this.$.category0.setIndex(b-10),this.$.category1.setIndex(b),this.$.category2.setIndex(b+10),a=this.$.category1),this.changeCategory(a)}},changeCategory:function(a){this.$.category0.setSelected(!1),this.$.category1.setSelected(!1),this.$.category2.setSelected(!1),a.setSelected(!0);var b=a.index;this.$.emoji0.setIndex(b++),this.$.emoji1.setIndex(b++),this.$.emoji2.setIndex(b++),this.$.emoji3.setIndex(b++),this.$.emoji4.setIndex(b++),this.$.emoji5.setIndex(b++),this.$.emoji6.setIndex(b++),this.$.emoji7.setIndex(b++),this.$.emoji8.setIndex(b++),this.$.emoji9.setIndex(b++)},cancelClicked:function(){this.password="",this.drawPassword(),this.$.cancel.setShowing(!1)},drawPassword:function(){for(var a="",b=0;b<this.password.length;b++)for(var c=0;c<constant.emojis.length;c++)constant.emojis[c].letter==this.password[b]&&(a+="&#x"+constant.emojis[c].value+";");this.$.pass.setContent(a)},addCharacter:function(a){if(8!=this.password.length){for(var b=constant.emojis.length,c=0;c<b&&a!=constant.emojis[c].letter;c++);c!=b&&(this.password+=a,this.$.cancel.setShowing(!0),this.drawPassword())}},removeCharacter:function(){var a=this.password.length;0!=a&&(this.password=this.password.substr(0,a-1),0==this.password.length&&this.$.cancel.setShowing(!1),this.drawPassword())}}),enyo.kind({name:"Sugar.Emoji",kind:enyo.Control,published:{index:null,letter:!0,size:null,selected:!1},classes:"emoji",components:[{name:"icon",content:"",allowHtml:!0,classes:"emoji-icon"},{name:"letter",content:"",showing:!0,classes:"emoji-letter"}],create:function(){this.inherited(arguments),this.indexChanged(),this.letterChanged(),this.sizeChanged(),this.selectedChanged()},rendered:function(){this.inherited(arguments),this.size&&(document.getElementById(this.$.icon.id).style="font-size: "+this.size+"pt")},indexChanged:function(){if(this.index>=0&&this.index<constant.emojis.length){var a=constant.emojis[this.index];this.$.icon.setContent("&#x"+a.value+";"),this.$.letter.setContent(a.letter)}},letterChanged:function(){this.$.letter.setShowing(this.letter)},sizeChanged:function(){},selectedChanged:function(){this.removeClass("emoji-selected"),this.removeClass("emoji-unselected"),this.selected?this.addClass("emoji-selected"):this.addClass("emoji-unselected")},animate:function(){var a=this;a.addClass("emoji-flash"),window.setTimeout(function(){a.removeClass("emoji-flash")},500)}});