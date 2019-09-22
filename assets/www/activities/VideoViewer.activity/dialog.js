/*! Sugarizer 2019-09-21 */
enyo.kind({name:"VideoViewer.LibraryDialog",kind:enyo.Popup,classes:"library-dialog",centered:!1,modal:!1,floating:!0,components:[{name:"scroller",kind:"Scroller",components:[{name:"items",classes:"library-content",kind:"Repeater",onSetupItem:"setupItem",components:[{classes:"library",components:[{name:"itemImage",classes:"libraryImage",kind:"Image",onerror:"defaultImage",ontap:"selectLibrary"},{name:"itemOverlay",classes:"libraryOverlay",ontap:"selectLibrary"},{name:"itemTitle",classes:"libraryTitle",content:"",ontap:"selectLibrary"},{name:"itemIcon",classes:"libraryIcon",kind:"Image",src:"icons/library.svg",ontap:"selectLibrary"},{name:"itemRemove",classes:"libraryRemove",kind:"Image",src:"icons/list-remove.svg",ontap:"removeLibrary"}]}]}]},{name:"itemAdd",classes:"libraryAdd",kind:"Image",src:"icons/list-add.svg",ontap:"addLibrary"}],create:function(){this.inherited(arguments)},render:function(){this.inherited(arguments),this.draw()},draw:function(){this.$.items.applyStyle("height",document.getElementById(app.$.content.id).style.height),this.$.items.setCount(Util.context.libraries.length)},reload:function(){this.$.items.setCount(Util.context.libraries.length)},setupItem:function(a,b){var c=Util.context.libraries[b.index].image;if(c.startsWith("http://",0)&&"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime){var d=new XMLHttpRequest,e=b.item;d.open("GET",c,!0),d.responseType="blob",d.onload=function(a){e.$.itemImage.setAttribute("src",window.URL.createObjectURL(this.response))},d.send()}else b.item.$.itemImage.setAttribute("src",c);b.item.$.itemTitle.setContent(Util.context.libraries[b.index].title)},closeDialog:function(){this.hide()},defaultImage:function(a,b){b.dispatchTarget.setAttribute("src","images/nolibrary.png")},selectLibrary:function(a,b){Util.setLibrary(Util.context.libraries[b.index]),Util.saveContext(),app.loadDatabase(),this.closeDialog()},removeLibrary:function(a,b){Util.removeLibrary(Util.context.libraries[b.index]),Util.saveContext(),this.draw()},addLibrary:function(){app.$.addLibraryDialog.show()}}),enyo.kind({name:"VideoViewer.VideoDialog",kind:enyo.Popup,classes:"video-dialog",centered:!1,modal:!0,floating:!0,published:{item:null},components:[{name:"header",classes:"video-header toolbar",components:[{name:"favoritebutton",kind:"Button",classes:"toolbutton video-favorite-button pull-left",title:"Favorite",ontap:"setFavorite"},{name:"title",classes:"video-title",content:""},{name:"closebutton",kind:"Button",classes:"toolbutton video-close-button pull-right",title:"Close",ontap:"closeDialog"}]},{name:"video",classes:"video-item",kind:"enyo.Video",fitToWindow:!1,autoplay:!0,showControls:!0,poster:"images/notloaded.png"}],create:function(){this.inherited(arguments),this.itemChanged()},rendered:function(){if(null!=this.item&&(this.$.favoritebutton.applyStyle("background-image","url(icons/"+(this.item.isFavorite?"":"not")+"favorite.svg)"),!this.init)){this.init=!0;var a=Util.getReadTime(this.item.code);a&&this.$.video.setCurrentTime(a)}},itemChanged:function(){this.init=!1,null!=this.item&&(this.$.title.setContent(this.item.title),this.$.video.setSrc(this.item.videoURL()),this.render())},closeDialog:function(){this.$.video.pause(),Util.setReadTime(this.item.code,this.$.video.getCurrentTime()),this.$.video.unload(),this.item=null,Util.saveContext(),this.hide(),Util.onSugar()&&Util.sugar.sendMessage("refresh-screen",Util.context)},setFavorite:function(){this.item.setIsFavorite(!this.item.isFavorite),Util.setFavorite(this.item.code,this.item.isFavorite),this.rendered()}}),enyo.kind({name:"VideoViewer.AddLibraryDialog",kind:"enyo.Popup",classes:"module-dialog",centered:!0,modal:!0,floating:!0,autoDismiss:!1,components:[{name:"toolbar",classes:"toolbar",components:[{name:"icon",classes:"module-icon"},{name:"text",content:"Add library",classes:"module-text"},{name:"cancelbutton",kind:"Button",classes:"toolbutton module-cancel-button",ontap:"cancel"},{name:"okbutton",kind:"Button",classes:"toolbutton module-ok-button",ontap:"ok"}]},{content:"Library description URL:",classes:"server-message"},{name:"content",classes:"server-content",components:[{content:"http://",classes:"server-httplabel"},{name:"servername",kind:"Input",classes:"server-servername",onkeydown:"enterclick"}]}],create:function(){this.inherited(arguments),this.init()},init:function(){},rendered:function(){},cancel:function(){this.hide()},ok:function(){this.hide();var a=new enyo.Ajax({url:"http://"+this.$.servername.getValue(),method:"GET",handleAs:"json"}),b=this;a.response(function(a,c){if(!(c.name&&c.image&&c.title&&c.database&&c.images))return void console.log("Incorrect format for library 'http://"+b.$.servername.getValue()+"'");Util.addLibrary(c),Util.saveContext(),app.$.libraryDialog.draw()}),a.error(function(){console.log("Unable to load 'http://"+b.$.servername.getValue()+"'")}),a.go()},enterclick:function(a,b){if(13===b.keyCode)return this.ok(),!0}});