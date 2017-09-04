/*! Sugarizer 2017-09-04 */
enyo.kind({name:"Sugar.Journal",published:{journal:null},kind:"FittableRows",components:[{name:"content",kind:"Scroller",fit:!0,classes:"journal-content",onresize:"draw",onScroll:"onscroll",components:[{name:"empty",classes:"journal-empty",showing:!0},{name:"message",classes:"journal-message",showing:!0},{name:"nofilter",kind:"Sugar.IconButton",icon:{directory:"icons",icon:"dialog-cancel.svg"},classes:"listview-button",ontap:"nofilter",showing:!1},{name:"journalList",classes:"journal-list",kind:"Repeater",onSetupItem:"setupItem",components:[{name:"item",classes:"journal-list-item",components:[{name:"favorite",kind:"Sugar.Icon",x:10,y:14,size:constant.iconSizeFavorite,ontap:"switchFavorite"},{name:"activity",kind:"Sugar.Icon",x:60,y:5,size:constant.iconSizeList,colorized:!0,ontap:"runActivity"},{name:"title",showing:!0,classes:"journal-title",ontap:"titleEditStart"},{name:"titleEdit",showing:!1,kind:"enyo.Input",classes:"journal-title-edit",onblur:"titleEditEnd"},{name:"time",classes:"journal-time"},{name:"goright",kind:"Sugar.Icon",classes:"journal-goright",size:constant.iconSizeFavorite,ontap:"runActivity"}]}]},{name:"activityPopup",kind:"Sugar.Popup",showing:!1}]},{name:"footer",classes:"journal-footer toolbar",showing:!1,components:[{name:"journalbutton",kind:"Button",classes:"toolbutton view-localjournal-button active",title:"Journal",ontap:"showLocalJournal"},{name:"cloudonebutton",kind:"Button",classes:"toolbutton view-cloudone-button",title:"Private",ontap:"showPrivateCloud"},{name:"cloudallbutton",kind:"Button",classes:"toolbutton view-cloudall-button",title:"Shared",ontap:"showSharedCloud"}]}],create:function(){this.inherited(arguments),this.toolbar=null,this.empty=0==this.journal.length,this.realLength=0,this.loadingError=!1,this.journalType=constant.journalLocal,this.smallTime=!1,this.journalChanged(),this.$.footer.setShowing(null!=preferences.getNetworkId()&&null!=preferences.getPrivateJournal()&&null!=preferences.getSharedJournal()),"rtl"==l10n.language.direction&&this.$.message.addClass("rtl-10"),this.draw()},rendered:function(){this.inherited(arguments),iconLib.colorize(this.$.journalbutton.hasNode(),preferences.getColor(),function(){}),iconLib.colorize(this.$.cloudonebutton.hasNode(),preferences.getColor(),function(){}),iconLib.colorize(this.$.cloudallbutton.hasNode(),preferences.getColor(),function(){})},onscroll:function(a,b){var c=b.scrollBounds,d=this.$.journalList.get("count");if(!this.getToolbar().hasFilter()&&c.maxTop-c.top<constant.journalScrollLimit&&this.realLength>d){var e=Math.min(d+constant.journalStepCount,this.journal.length);humane.log(l10n.get("Loading")),this.$.journalList.set("count",e,!0)}},getToolbar:function(){return null==this.toolbar&&(this.toolbar=new Sugar.JournalToolbar),this.toolbar},draw:function(){var a=util.getCanvasCenter(),b=this.$.footer.getShowing()?55:0;this.smallTime=a.dx<660;var c=enyo.platform.android?3:0;this.$.content.applyStyle("height",a.dy-b-c+"px"),this.$.empty.applyStyle("margin-left",a.x-constant.sizeEmpty/4+"px");var d=a.y-constant.sizeEmpty/4-80;this.$.empty.applyStyle("margin-top",d+"px"),this.$.message.setContent(l10n.get("JournalEmpty")),null!=preferences.getNetworkId()&&null!=preferences.getPrivateJournal()&&null!=preferences.getSharedJournal()&&(tutorial.setElement("journalbutton",this.$.journalbutton.getAttribute("id")),tutorial.setElement("cloudonebutton",this.$.cloudonebutton.getAttribute("id")),tutorial.setElement("cloudallbutton",this.$.cloudallbutton.getAttribute("id")))},updateNetworkBar:function(){this.$.footer.setShowing(null!=preferences.getNetworkId()&&null!=preferences.getPrivateJournal()&&null!=preferences.getSharedJournal()),this.draw()},journalChanged:function(){this.$.empty.show(),this.$.message.show(),this.$.nofilter.show();var a=!this.getToolbar().hasFilter();if(this.empty=a&&!this.loadingError&&0==this.journal.length,null!=this.journal&&this.journal.length>0){var b=a&&this.journal.length>constant.journalInitCount?constant.journalInitCount:this.journal.length;this.realLength=this.journal.length,this.$.journalList.set("count",b,!0),this.$.empty.hide(),this.$.message.hide(),this.$.nofilter.hide()}else this.$.journalList.set("count",0,!0),this.empty?(this.$.message.setContent(l10n.get("JournalEmpty")),this.$.nofilter.hide()):this.loadingError?(this.$.message.setContent(l10n.get("ErrorLoadingRemote")),this.$.nofilter.setText(l10n.get("Retry")),this.$.nofilter.setIcon({directory:"icons",icon:"system-restart.svg"})):(this.$.message.setContent(l10n.get("NoMatchingEntries")),this.$.nofilter.setText(l10n.get("ClearSearch")),this.$.nofilter.setIcon({directory:"icons",icon:"dialog-cancel.svg"}))},setupItem:function(a,b){var c=this.journal[b.index];c.metadata.buddy_color&&b.item.$.activity.setColorizedColor(c.metadata.buddy_color),b.item.$.activity.setIcon(preferences.getActivity(c.metadata.activity)),b.item.$.favorite.setIcon({directory:"icons",icon:"emblem-favorite.svg"});var d=c.metadata.keep;b.item.$.favorite.setColorized(void 0!==d&&1==d),b.item.$.title.setContent(c.metadata.title),b.item.$.time.setContent(util.timestampToElapsedString(c.metadata.timestamp,2,this.smallTime)),b.item.$.goright.setIcon({directory:"icons",icon:"go-right.svg"}),b.item.$.activity.setPopupShow(enyo.bind(this,"showActivityPopup")),b.item.$.activity.setPopupHide(enyo.bind(this,"hideActivityPopup")),b.item.$.activity.setData(c),"rtl"==l10n.language.direction&&(b.item.$.title.addClass("rtl-14"),b.item.$.titleEdit.addClass("rtl-14"),b.item.$.time.addClass("rtl-14")),0==b.index&&(tutorial.setElement("activityitem",b.item.$.activity.getAttribute("id")),tutorial.setElement("titleitem",b.item.$.title.getAttribute("id")),tutorial.setElement("timeitem",b.item.$.time.getAttribute("id")),tutorial.setElement("favoriteitem",b.item.$.favorite.getAttribute("id")))},switchFavorite:function(a,b){var c=this.journal[b.index].objectId,d=this.journal[b.index].metadata.keep;void 0===d?this.journal[b.index].metadata.keep=1:this.journal[b.index].metadata.keep=(d+1)%2;var e=new datastore.DatastoreObject(c);e.setMetadata(this.journal[b.index].metadata),e.setDataAsText(this.journal[b.index].text),e.save(),b.dispatchTarget.container.setColorized(1==this.journal[b.index].metadata.keep),b.dispatchTarget.container.render()},runActivity:function(a,b){this.runCurrentActivity(this.journal[b.index])},runCurrentActivity:function(a){var b=preferences.getActivity(a.metadata.activity);if(b!=preferences.genericActivity){var c=this;this.loadEntry(a,function(d,e,f){return c.journalType!=constant.journalLocal?void datastore.create(e,function(a,c){preferences.runActivity(b,c,e.title)},f):void preferences.runActivity(b,a.objectId,e.title)})}},filterEntries:function(a,b,c,d){var e=this,f=function(){e.journal=e.journal.filter(function(c){var e=util.getDateRange(d);return(void 0===b||c.metadata.keep)&&(0==a.length||c.metadata.title.toLowerCase().indexOf(a.toLowerCase())!=-1)&&(void 0===d||c.metadata.timestamp>=e.min&&c.metadata.timestamp<e.max)}),e.journal=e.journal.sort(function(a,b){return parseInt(b.metadata.timestamp)-parseInt(a.metadata.timestamp)}),e.journalChanged()};if(this.journalType!=constant.journalLocal){var g=this.journalType==constant.journalRemotePrivate?preferences.getPrivateJournal():preferences.getSharedJournal(),e=this;return void myserver.getJournal(g,c,constant.fieldMetadata,function(a,b){e.journal=b,e.empty=!e.getToolbar().hasFilter()&&!this.loadingError&&0==e.journal.length,e.loadingError=!1,f()},function(){console.log("WARNING: Error filtering journal "+g),e.journal=[],e.loadingError=!0,e.journalChanged()})}this.journal=datastore.find(c),this.loadingError=!1,f()},nofilter:function(){toolbar.removeFilter(),this.filterEntries("",void 0,void 0,void 0)},showActivityPopup:function(a){var b=(a.icon,a.getData());this.$.activityPopup.setHeader({icon:a.icon,colorized:!0,colorizedColor:b.metadata.buddy_color?b.metadata.buddy_color:null,name:b.metadata.title,title:b.metadata.buddy_name&&this.journalType!=constant.journalLocal?l10n.get("ByUser",{user:b.metadata.buddy_name}):null,action:enyo.bind(this,"runCurrentActivity"),data:[b,null]}),this.$.activityPopup.setItems(null);var c=[];c.push({icon:{directory:"icons",icon:"activity-start.svg"},colorized:!1,name:l10n.get("RestartActivity"),action:enyo.bind(this,"runCurrentActivity"),data:[b,null]}),c.push({icon:{directory:"icons",icon:"activity-journal.svg"},colorized:!1,name:l10n.get("CopyToLocal"),action:enyo.bind(this,"copyToLocal"),data:[b,null],disable:this.journalType==constant.journalLocal}),c.push({icon:{directory:"icons",icon:"cloud-one.svg"},colorized:!1,name:l10n.get("CopyToPrivate"),action:enyo.bind(this,"copyToRemote"),data:[b,preferences.getPrivateJournal()],disable:this.journalType==constant.journalRemotePrivate}),c.push({icon:{directory:"icons",icon:"cloud-all.svg"},colorized:!1,name:l10n.get("CopyToShared"),action:enyo.bind(this,"copyToRemote"),data:[b,preferences.getSharedJournal()],disable:this.journalType==constant.journalRemoteShared}),util.getClientType()==constant.appType&&(enyo.platform.android||enyo.platform.androidChrome||enyo.platform.ios)&&c.push({icon:{directory:"icons",icon:"module-about_my_computer.svg"},colorized:!1,name:l10n.get("CopyToDevice"),action:enyo.bind(this,"copyToDevice"),data:[b,null]}),c.push({icon:{directory:"icons",icon:"list-remove.svg"},colorized:!1,name:l10n.get("Erase"),action:enyo.bind(this,"removeEntry"),data:[b,null]}),this.$.activityPopup.setFooter(c),this.$.activityPopup.setMargin({left:0,top:60*a.owner.index+20-mouse.position.y}),this.$.activityPopup.showPopup()},hideActivityPopup:function(a){return!this.$.activityPopup.cursorIsInside()&&!a.cursorIsInside()&&(this.$.activityPopup.hidePopup(),!0)},copyToLocal:function(a){var b=this;this.loadEntry(a,function(a,c,d){datastore.create(c,function(a,b){},d),b.$.activityPopup.hidePopup()})},copyToDevice:function(a){var b=this;this.loadEntry(a,function(a,c,d){return null==d?void b.$.activityPopup.hidePopup():void util.writeFile(c,d,function(a,c){a?humane.log(l10n.get("ErrorWritingFile")):humane.log(l10n.get("FileWroteTo",{file:c})),b.$.activityPopup.hidePopup()})})},copyToRemote:function(a,b){this.loadEntry(a,function(c,d,e){var f={metadata:d,text:e,objectId:a.objectId};myserver.postJournalEntry(b,f,function(){},function(){console.log("WARNING: Error writing journal "+b)})}),this.$.activityPopup.hidePopup()},loadRemoteJournal:function(a){var b=this;myserver.getJournal(a,void 0,constant.fieldMetadata,function(a,c){b.journal=c,b.empty=!b.getToolbar().hasFilter()&&!this.loadingError&&0==b.journal.length,b.loadingError=!1,b.journalChanged()},function(){console.log("WARNING: Error reading journal "+a),b.journal=[],b.loadingError=!0,b.journalChanged()})},loadEntry:function(a,b){if(this.journalType==constant.journalLocal){var c=new datastore.DatastoreObject(a.objectId);c.loadAsText(function(a,c,d){b(a,c,d)})}else{var d;this.journalType==constant.journalRemotePrivate?d=preferences.getPrivateJournal():this.journalType==constant.journalRemoteShared&&(d=preferences.getSharedJournal()),myserver.getJournalEntry(d,a.objectId,function(a,c){b(null,c.metadata,c.text)},function(){console.log("WARNING: Error loading entry "+objectId+" in journal "+d)})}},removeEntry:function(a){if(this.journalType!=constant.journalLocal){var b=this.journalType==constant.journalRemotePrivate?preferences.getPrivateJournal():preferences.getSharedJournal(),c=a.objectId,d=this;return void myserver.deleteJournalEntry(b,c,function(a,c){d.loadRemoteJournal(b),d.$.activityPopup.hidePopup()},function(){console.log("WARNING: Error removing entry "+c+" in journal "+b),d.loadRemoteJournal(b),d.$.activityPopup.hidePopup()})}datastore.remove(a.objectId),this.showLocalJournal(),preferences.updateEntries(),app.journal=this.journal,app.redraw(),this.$.activityPopup.hidePopup()},titleEditStart:function(a,b){var c=b.dispatchTarget.owner.$;c.title.setShowing(!1),c.titleEdit.setValue(c.title.getContent()),c.titleEdit.setShowing(!0),c.titleEdit.focus()},titleEditEnd:function(a,b){var c=b.dispatchTarget.owner.$;c.title.setShowing(!0),c.titleEdit.setShowing(!1);var d=c.titleEdit.getValue();if(d!=c.title.getContent()){var e=this.journal[b.index].objectId,f=this;this.loadEntry(this.journal[b.index],function(a,b,c){if(f.journalType==constant.journalLocal){b.title=d;var g=new datastore.DatastoreObject(e);g.setMetadata(b),g.setDataAsText(c),g.save(),f.showLocalJournal(),preferences.updateEntries(),app.journal=f.journal,app.redraw()}else{b.title=d;var h=f.journalType==constant.journalRemotePrivate?preferences.getPrivateJournal():preferences.getSharedJournal(),i={metadata:b,text:c,objectId:e};myserver.putJournalEntry(h,e,i,function(){f.loadRemoteJournal(h)},function(){console.log("WARNING: Error updating journal "+h),f.loadRemoteJournal(h)})}})}},showLocalJournal:function(){this.changeJournalType(constant.journalLocal),this.journal=datastore.find(),this.journal=this.journal.sort(function(a,b){return parseInt(b.metadata.timestamp)-parseInt(a.metadata.timestamp)}),this.journalChanged()},showPrivateCloud:function(){this.changeJournalType(constant.journalRemotePrivate),this.loadRemoteJournal(preferences.getPrivateJournal())},showSharedCloud:function(){this.changeJournalType(constant.journalRemoteShared),this.loadRemoteJournal(preferences.getSharedJournal())},changeJournalType:function(a){this.journalType=a,this.$.journalbutton.addRemoveClass("active",a==constant.journalLocal),this.$.cloudonebutton.addRemoveClass("active",a==constant.journalRemotePrivate),this.$.cloudallbutton.addRemoveClass("active",a==constant.journalRemoteShared),this.getToolbar().removeFilter()}}),enyo.kind({name:"Sugar.JournalToolbar",kind:enyo.Control,components:[{name:"favoritebutton",kind:"Sugar.Icon",classes:"journal-filter-favorite",x:0,y:4,icon:{directory:"icons",icon:"emblem-favorite.svg"},size:constant.iconSizeList,ontap:"filterFavorite"},{name:"journalsearch",kind:"Sugar.SearchField",onTextChanged:"filterEntries",classes:"journal-filter-text"},{name:"radialbutton",kind:"Button",classes:"toolbutton view-desktop-button",title:"Home",title:"Home",ontap:"gotoDesktop"},{name:"typeselect",kind:"Sugar.SelectBox",classes:"journal-filter-type",onIndexChanged:"filterEntries"},{name:"timeselect",kind:"Sugar.SelectBox",classes:"journal-filter-time",onIndexChanged:"filterEntries"},{name:"helpbutton",kind:"Button",classes:"toolbutton help-button-journal",title:"Help",ontap:"startTutorial"}],create:function(){this.inherited(arguments),this.$.journalsearch.setPlaceholder(l10n.get("SearchJournal")),this.$.timeselect.setItems([{icon:null,name:l10n.get("Anytime")},{icon:null,name:l10n.get("Today")},{icon:null,name:l10n.get("SinceYesterday")},{icon:null,name:l10n.get("PastWeek")},{icon:null,name:l10n.get("PastMonth")},{icon:null,name:l10n.get("PastYear")}]);var a=[];a.push({icon:null,name:l10n.get("Anything")});for(var b=preferences.getActivities(),c=0;c<b.length;c++)a.push({icon:b[c],name:b[c].name});this.$.typeselect.setItems(a)},rendered:function(){this.$.favoritebutton.setNodeProperty("title",l10n.get("FilterFavorites")),this.$.radialbutton.setNodeProperty("title",l10n.get("Home")),this.$.helpbutton.setNodeProperty("title",l10n.get("Tutorial"))},gotoDesktop:function(){util.vibrate(),app.showView(constant.radialView)},filterFavorite:function(){this.$.favoritebutton.setColorized(!this.$.favoritebutton.getColorized()),this.$.favoritebutton.render(),this.filterEntries()},hasFilter:function(){return""!=this.$.journalsearch.getText()||this.$.favoritebutton.getColorized()||this.$.typeselect.getSelected()>0||this.$.timeselect.getSelected()>0},filterEntries:function(){var a=this.$.journalsearch.getText(),b=!!this.$.favoritebutton.getColorized()||void 0,c=this.$.typeselect.getSelected(),d=c<=0?void 0:preferences.getActivities()[c-1].id;c=this.$.timeselect.getSelected();var e=c<=0?void 0:c;app.otherview.filterEntries(a,b,d,e)},removeFilter:function(){this.$.typeselect.setSelected(0),this.$.timeselect.setSelected(0),this.$.favoritebutton.setColorized(!1),this.$.journalsearch.setText(""),this.render()},startTutorial:function(){tutorial.setElement("favoritebutton",this.$.favoritebutton.getAttribute("id")),tutorial.setElement("searchtext",this.$.journalsearch.getAttribute("id")),tutorial.setElement("typeselect",this.$.typeselect.getAttribute("id")),tutorial.setElement("timeselect",this.$.timeselect.getAttribute("id")),tutorial.setElement("radialbutton",this.$.radialbutton.getAttribute("id")),tutorial.start()}});