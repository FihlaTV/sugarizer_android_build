/*! Sugarizer 2019-09-21 */
var app=null,toolbar=null,mouse={position:{x:-1,y:-1}},isFirstLaunch=!1,iconLib,xoPalette,radioButtonsGroup,datastore,presence,l10n,preferences,util,myserver,humane,tutorial,stats,autosync;enyo.kind({name:"Sugar.Desktop",kind:enyo.Control,components:[{name:"owner",kind:"Sugar.Icon",size:constant.sizeOwner,colorized:!0,classes:"owner-icon",showing:!1},{name:"journal",kind:"Sugar.Icon",size:constant.sizeJournal,ontap:"showJournal",classes:"journal-icon",showing:!1},{name:"desktop",showing:!0,onresize:"resize",components:[]},{name:"otherview",showing:!0,components:[]},{name:"activityPopup",kind:"Sugar.Popup",showing:!1},{name:"activities",kind:"enyo.WebService",onResponse:"queryActivitiesResponse",onError:"queryActivitiesFail"}],create:function(){app=this,this.inherited(arguments),this.timer=null,this.otherview=null,this.toolbar=null,util.setToolbar(this.getToolbar()),this.$.owner.setIcon({directory:"icons",icon:"owner-icon.svg"}),this.$.owner.setPopupShow(enyo.bind(this,"showBuddyPopup")),this.$.owner.setPopupHide(enyo.bind(this,"hideBuddyPopup")),this.$.journal.setIcon({directory:"icons",icon:"activity-journal.svg"}),this.restrictedModeInfo={start:0},util.hideNativeToolbar(),this.tutorialActivity=null,this.loadJournal(),this.isJournalFull=!1,this.testJournalSize(),util.getClientType()==constant.webAppType?(this.$.activities.setUrl(myserver.getActivitiesUrl()),myserver.getActivities(enyo.bind(this,"queryActivitiesResponse"),enyo.bind(this,"queryActivitiesFail"))):(this.$.activities.setUrl(constant.staticInitActivitiesURL),this.$.activities.send());var a=preferences.isConnected();if(this.getToolbar().showServerWarning(!a),a){var b=this;this.connectToServer(function(a){b.getToolbar()&&b.getToolbar().showServerWarning&&b.getToolbar().showServerWarning(!a)})}else util.updateFavicon();var b=this;window.setTimeout(function(){isFirstLaunch&&b.getToolbar().startTutorial()},constant.timerBeforeTutorial)},loadJournal:function(){this.journal=datastore.find(),this.journal=this.journal.sort(function(a,b){return parseInt(b.metadata.timestamp)-parseInt(a.metadata.timestamp)})},testJournalSize:function(){this.isJournalFull=!1;var a=this;util.computeDatastoreSize(function(b){b.remain/b.total*100<constant.minStorageSizePercent&&(console.log("WARNING: Journal almost full"),a.isJournalFull=!0)})},queryActivitiesResponse:function(a,b){if(null==preferences.getActivities()?(preferences.setActivities(b.data),preferences.save()):preferences.updateActivities(b.data)&&preferences.save(),preferences.updateEntries(),window.sugarizerOS){var c=this;sugarizerOS.isAppCacheReady(function(a){if(!a.ready){humane.create({timeout:5e3,baseCls:"humane-libnotify"}).log(l10n.get("Loading"))}}),sugarizerOS.initActivitiesPreferences(function(){c.init()}),sugarizerOS.isWifiEnabled(function(a){0!=a&&sugarizerOS.scanWifi()}),sugarizerOS.popupTimer=0,2!=sugarizerOS.launches||sugarizerOS.launcherPackageName==sugarizerOS.packageName||sugarizerOS.isSetup||(this.doResetLauncher(),sugarizerOS.putInt("IS_SETUP",1))}else this.init()},queryActivitiesFail:function(a,b){-1!=this.$.activities.getUrl().indexOf(constant.dynamicInitActivitiesURL)?(console.log("WARNING: Backoffice not responding, use static list"),this.$.activities.setUrl(constant.staticInitActivitiesURL),this.$.activities.send()):console.log("Error loading init activities")},connectToServer:function(a){var b=preferences.getNetworkId(),c=this;myserver.getUser(b,function(b,d){var e=preferences.merge(d);util.updateFavicon(),e?(preferences.save(),util.restartApp()):c.currentView==constant.journalView&&c.otherview.updateNetworkBar(),presence.joinNetwork(function(a,b){a&&console.log("WARNING: Can't connect to presence server")}),a(!0),autosync.synchronizeJournal(function(a){if(a){setTimeout(function(){var a=l10n.get("RetrievingJournal");a&&humane.log(a)},100);var b=c.getToolbar();b.showSync&&b.showSync(!0)}},function(a,b,d){var e=c.getToolbar();e.showSync&&e.showSync(!1),a&&!d&&(c.loadJournal(),c.testJournalSize(),preferences.updateEntries(),c.draw(),c.render())})},function(){console.log("WARNING: Can't read network user settings"),a(!1)})},getToolbar:function(){return null==this.toolbar&&(this.toolbar=new Sugar.DesktopToolbar),this.currentView!=constant.listView&&null!=this.otherview?this.otherview.getToolbar():this.toolbar},getPopup:function(){return this.$.activityPopup},init:function(){this.currentView=constant.radialView,preferences.getView()&&this.showView(preferences.getView()),this.draw()},localize:function(){this.otherview&&this.otherview.localize&&this.otherview.localize()},draw:function(){var a=[];enyo.forEach(this.$.desktop.getControls(),function(b){a.push(b)});for(var b=0;b<a.length;b++)a[b].destroy();this.tutorialActivity=null;var c=util.getCanvasCenter(),d=constant.iconSizeStandard,e=d*constant.iconSpacingFactor,f=d/2,g=c.dy<480?-12:0;this.$.owner.applyStyle("margin-left",c.x-constant.sizeOwner/2+"px"),this.$.owner.applyStyle("margin-top",c.y-constant.sizeOwner/2+"px"),this.$.journal.setColorized(this.journal.length>0),this.$.journal.applyStyle("margin-left",c.x-constant.sizeJournal/2+"px"),this.$.journal.applyStyle("margin-top",c.y+constant.sizeOwner-constant.sizeJournal+g+"px"),this.$.owner.setShowing(this.currentView==constant.radialView),this.$.journal.setShowing(this.currentView==constant.radialView);var h,i,j,k,l,m=preferences.getFavoritesActivities(),n=m.length,o=0,p=2*Math.PI;h=i=Math.max(constant.ringMinRadiusSize,Math.min(c.x-d,c.y-d));var q=p*h;q/m.length>=constant.iconSpacingFactor*e?(k=l=!1,j=p/parseFloat(m.length)):this.hasRoomForSpiral(c,e)?(k=!0,l=!1,h=i=e*constant.ringInitSpaceFactor,n=parseInt(p*h/e),j=p/n):(l=!0,k=!1,n=parseInt(q/e)-1,this.restrictedModeInfo.count=n,this.restrictedModeInfo.length=m.length,j=p/parseFloat(n+1));for(var r=-Math.PI/2-j,b=0;b<m.length;b++){var s,t,u=m[b],v=r;if(k){r+=j,o>=n&&(h=i=h+e*constant.ringSpaceFactor,n=parseInt(p*h/e),o=0,r-=j/constant.ringAdjustAngleFactor,j=p/n);var w=e*constant.ringAdjustSizeFactor/(n-o);s=c.x+Math.cos(r)*(h+w)-f,t=c.y+Math.sin(r)*(i+w)-f}else r+=j,s=c.x+Math.cos(r)*h-f,t=c.y+Math.sin(r)*i-f;if(l){if(b<this.restrictedModeInfo.start){r=v;continue}if(b>0&&b==this.restrictedModeInfo.start){this.$.desktop.createComponent({kind:"Sugar.Icon",icon:{directory:"icons",icon:"activity-etc.svg",name:l10n.get("ListView")},size:d,x:s,y:t,ontap:"showPreviousRestrictedList"},{owner:this}).render();continue}if(b>=this.restrictedModeInfo.start+n-1&&this.restrictedModeInfo.start+n<m.length){this.$.desktop.createComponent({kind:"Sugar.Icon",icon:{directory:"icons",icon:"activity-etc.svg",name:l10n.get("ListView")},size:d,x:s,y:t,ontap:"showNextRestrictedList"},{owner:this}).render();break}}null!=u.type&&"native"==u.type&&(u.isNative=!0);var x=this.$.desktop.createComponent({kind:"Sugar.Icon",icon:u,size:d,x:s,y:t,colorized:void 0!==u.instances&&u.instances.length>0,colorizedColor:void 0!==u.instances&&u.instances.length>0&&u.instances[0].metadata.buddy_color?u.instances[0].metadata.buddy_color:null,ontap:"runMatchingActivity",popupShow:enyo.bind(this,"showActivityPopup"),popupHide:enyo.bind(this,"hideActivityPopup")},{owner:this});x.render(),o++,this.tutorialActivity||(this.tutorialActivity=x)}},redraw:function(){this.draw(),this.currentView!=constant.radialView&&this.currentView!=constant.listView||this.filterActivities(),this.render()},resize:function(){this.noresize||this.redraw()},hasRoomForSpiral:function(a,b){for(var c=preferences.getFavoritesActivities(),d=c.length,e=b*constant.ringInitSpaceFactor;d>0;)d-=parseInt(2*Math.PI*e/b),e+=b*constant.ringSpaceFactor;e-=b/2;var f=2*e;return f<=a.dx&&f<=a.dy},showPreviousRestrictedList:function(){this.getPopup().hidePopup();var a=this.restrictedModeInfo.start-this.restrictedModeInfo.count;a<0&&(a=0),this.restrictedModeInfo.start=a,this.draw()},showNextRestrictedList:function(){this.getPopup().hidePopup();var a=this.restrictedModeInfo.start+this.restrictedModeInfo.count-2;a>this.restrictedModeInfo.length-1||(a+this.restrictedModeInfo.count>this.restrictedModeInfo.length&&(a=this.restrictedModeInfo.length-this.restrictedModeInfo.count),this.restrictedModeInfo.start=a,this.draw())},showView:function(a){if(this.currentView!=a){var b=this.currentView;if(this.currentView=a,stats.trace(constant.viewNames[b],"change_view",constant.viewNames[a]),a==constant.radialView)return this.otherview=null,util.setToolbar(this.getToolbar()),toolbar.setActiveView(constant.radialView),this.$.otherview.hide(),this.$.desktop.show(),this.$.owner.show(),this.$.journal.show(),void this.clearView();if(this.$.owner.hide(),this.$.journal.hide(),this.$.desktop.hide(),this.clearView(),a==constant.listView){util.setToolbar(this.getToolbar());var c=toolbar.getSearchText().toLowerCase();toolbar.setActiveView(constant.listView),this.otherview=this.$.otherview.createComponent({kind:"Sugar.DesktopListView",activities:preferences.getActivitiesByName(c)})}else a==constant.journalView?(null!=this.timer&&(this.getPopup().hidePopup(),window.clearInterval(this.timer)),this.otherview=this.$.otherview.createComponent({kind:"Sugar.Journal",journal:this.journal}),util.setToolbar(this.otherview.getToolbar())):a==constant.neighborhoodView&&(this.otherview=this.$.otherview.createComponent({kind:"Sugar.NeighborhoodView"}),toolbar.setActiveView(constant.neighborhoodView),util.setToolbar(this.otherview.getToolbar()));this.$.otherview.show(),this.$.otherview.render()}},getView:function(){return this.currentView},clearView:function(){for(var a,b=this.$.otherview.getControls(),c=0;a=b[c];c++)a.destroy()},showListView:function(){this.showView(constant.listView)},rendered:function(){this.inherited(arguments),this.$.owner.colorize(preferences.getColor()),this.journal.length>0&&this.$.journal.colorize(preferences.getColor()),this.isJournalFull&&l10n.get("JournalAlmostFull")&&(humane.log(l10n.get("JournalAlmostFull")),this.isJournalFull=!1)},beforeHelp:function(){tutorial.setElement("owner",app.$.owner.getAttribute("id")),tutorial.setElement("journal",app.$.journal.getAttribute("id")),this.tutorialActivity&&tutorial.setElement("activity",this.tutorialActivity.getAttribute("id"))},runMatchingActivity:function(a){a.getDisabled()||this.getPopup().showing||(this.hideActivityPopup(a),util.vibrate(),this.runActivity(a.icon))},runActivity:function(a){util.vibrate();var b=tutorial.isLaunched()&&a.id==tutorial.activityId;preferences.runActivity(a,void 0,null,null,b),this.postRunActivity(a.isNative)},runOldActivity:function(a,b){this.getPopup().hidePopup(),util.vibrate();var c=tutorial.isLaunched()&&a.id==tutorial.activityId;preferences.runActivity(a,b.objectId,b.metadata.title,null,c)},runNewActivity:function(a){this.getPopup().hidePopup(),util.vibrate();var b=tutorial.isLaunched()&&a.id==tutorial.activityId;preferences.runActivity(a,null,null,null,b),this.postRunActivity(a.isNative)},postRunActivity:function(a){window.sugarizerOS&&a&&(sugarizerOS.popupTimer=new Date,this.loadJournal(),preferences.updateEntries(),this.draw())},showJournal:function(){this.showView(constant.journalView)},showActivityPopup:function(a){if(window.sugarizerOS){var b=new Date;if(sugarizerOS.popupTimer&&b.getTime()-sugarizerOS.popupTimer.getTime()<3e3)return;sugarizerOS.popupTimer=b}var c,d=a.icon;c=void 0!==d.instances&&d.instances.length>0&&void 0!==d.instances[0].metadata.title?d.instances[0].metadata.title:l10n.get("NameActivity",{name:d.name}),this.getPopup().setHeader({icon:d,colorized:void 0!==d.instances&&d.instances.length>0,colorizedColor:void 0!==d.instances&&d.instances.length>0&&d.instances[0].metadata.buddy_color?d.instances[0].metadata.buddy_color:null,name:d.name,title:c,action:enyo.bind(this,"runActivity"),data:[d,null]});var e=[];if(d.instances)for(var f=0;f<d.instances.length&&f<constant.maxPopupHistory;f++)e.push({icon:d,colorized:!0,colorizedColor:d.instances[f].metadata.buddy_color?d.instances[f].metadata.buddy_color:null,name:d.instances[f].metadata.title,action:enyo.bind(this,"runOldActivity"),data:[d,d.instances[f]]});this.getPopup().setItems(e),this.getPopup().setFooter([{icon:d,colorized:!1,name:l10n.get("StartNew"),action:enyo.bind(this,"runNewActivity"),data:[d,null]}]),this.getPopup().showPopup()},hideActivityPopup:function(a){return!this.getPopup().cursorIsInside()&&!a.cursorIsInside()&&(this.getPopup().hidePopup(),!0)},showBuddyPopup:function(a){this.getPopup().setHeader({icon:a.icon,colorized:!0,name:preferences.getName(),title:null,action:null}),this.getPopup().setItems(null);var b=[];b.push({icon:{directory:"icons",icon:"system-shutdown.svg"},colorized:!1,name:l10n.get("Logoff"),action:enyo.bind(this,"doLogoff"),data:null}),b.push({icon:{directory:"icons",icon:"system-restart.svg"},colorized:!1,name:l10n.get("Restart"),action:enyo.bind(this,"doRestart"),data:null}),b.push({icon:{directory:"icons",icon:"preferences-system.svg"},colorized:!1,name:l10n.get("MySettings"),action:enyo.bind(this,"doSettings"),data:null}),this.getPopup().setFooter(b),this.getPopup().showPopup()},hideBuddyPopup:function(a){return!this.getPopup().cursorIsInside()&&!a.cursorIsInside()&&(this.getPopup().hidePopup(),!0)},doLogoff:function(){stats.trace(constant.viewNames[this.getView()],"click","logoff"),this.getPopup().hidePopup(),!preferences.isConnected()||preferences.isConnected()&&!preferences.getOptions("sync")?(this.otherview=this.$.otherview.createComponent({kind:"Sugar.DialogWarningMessage"},{owner:this}),this.otherview.show()):(preferences.addUserInHistory(),util.cleanDatastore(null,function(){util.restartApp()}))},doRestart:function(){stats.trace(constant.viewNames[this.getView()],"click","restart"),util.restartApp()},doSettings:function(){stats.trace(constant.viewNames[this.getView()],"click","my_settings"),this.getPopup().hidePopup(),this.otherview=this.$.otherview.createComponent({kind:"Sugar.DialogSettings"},{owner:this}),this.otherview.show()},doResetLauncher:function(){this.otherview=this.$.otherview.createComponent({kind:"Sugar.DialogSetLauncher"},{owner:this}),this.otherview.show()},filterActivities:function(){var a=toolbar.getSearchText().toLowerCase();enyo.forEach(this.$.desktop.getControls(),function(b){b.setDisabled(-1==b.icon.name.toLowerCase().indexOf(a)&&0!=a.length)}),this.currentView==constant.listView&&this.otherview.setActivities(preferences.getActivitiesByName(a))}}),enyo.kind({name:"Sugar.DesktopToolbar",kind:enyo.Control,components:[{name:"searchtext",kind:"Sugar.SearchField",classes:"homeview-filter-text",onTextChanged:"filterActivities"},{name:"helpbutton",kind:"Button",classes:"toolbutton help-button",title:"Help",ontap:"startTutorial"},{name:"syncbutton",classes:"sync-button sync-home sync-gear sync-gear-home",showing:!1},{name:"offlinebutton",kind:"Button",classes:"toolbutton offline-button",title:"Not connected",ontap:"doServerSettings",showing:!1},{name:"radialbutton",kind:"Button",classes:"toolbutton view-radial-button active",title:"Home",ontap:"showRadialView"},{name:"neighborbutton",kind:"Button",classes:"toolbutton view-neighbor-button",title:"Home",ontap:"showNeighborView"},{name:"listbutton",kind:"Button",classes:"toolbutton view-list-button",title:"List",ontap:"showListView"}],create:function(){this.inherited(arguments),this.needRedraw=!1},rendered:function(){this.inherited(arguments),this.localize()},localize:function(){this.$.searchtext.setPlaceholder(l10n.get("SearchHome")),this.$.radialbutton.setNodeProperty("title",l10n.get("FavoritesView")),this.$.listbutton.setNodeProperty("title",l10n.get("ListView")),this.$.neighborbutton.setNodeProperty("title",l10n.get("NeighborhoodView")),this.$.helpbutton.setNodeProperty("title",l10n.get("Tutorial")),this.$.offlinebutton.setNodeProperty("title",l10n.get("NotConnected")),app.localize&&app.localize()},askRedraw:function(){this.needRedraw=!0},getSearchText:function(){return this.$.searchtext.getText()},setSearchText:function(a){this.$.searchtext.setText(a)},setActiveView:function(a){a==constant.radialView?(this.$.radialbutton.addRemoveClass("active",!0),this.$.neighborbutton.addRemoveClass("active",!1),this.$.listbutton.addRemoveClass("active",!1)):a==constant.listView?(this.$.radialbutton.addRemoveClass("active",!1),this.$.neighborbutton.addRemoveClass("active",!1),this.$.listbutton.addRemoveClass("active",!0)):a==constant.neighborhoodView&&(this.$.radialbutton.addRemoveClass("active",!1),this.$.neighborbutton.addRemoveClass("active",!0),this.$.listbutton.addRemoveClass("active",!1))},filterActivities:function(){stats.trace(constant.viewNames[app.getView()],"search","q="+this.getSearchText(),null),app.filterActivities()},showRadialView:function(){util.vibrate(),app.showView(constant.radialView),this.needRedraw&&(this.needRedraw=!1,app.redraw())},showListView:function(){util.vibrate(),app.showView(constant.listView),this.needRedraw&&(this.needRedraw=!1,app.redraw())},showNeighborView:function(){util.vibrate(),app.showView(constant.neighborhoodView),this.needRedraw&&(this.needRedraw=!1,app.redraw())},showSync:function(a){this.$.syncbutton.setShowing(a)},showServerWarning:function(a){this.$.offlinebutton.setShowing(a)},doServerSettings:function(){if(preferences.isConnected()){var a=preferences.getToken();if(a&&!a.expired){var b=app;return void app.connectToServer(function(a){b.getToolbar()&&b.getToolbar().showServerWarning&&b.getToolbar().showServerWarning(!a)})}}app.$.otherview.createComponent({kind:"Sugar.DialogServer"},{owner:this}).show()},startTutorial:function(){tutorial.setElement("radialbutton",this.$.radialbutton.getAttribute("id")),tutorial.setElement("listbutton",this.$.listbutton.getAttribute("id")),tutorial.setElement("neighborbutton",this.$.neighborbutton.getAttribute("id")),tutorial.setElement("searchtext",this.$.searchtext.getAttribute("id")),tutorial.setElement("offlinebutton",this.$.offlinebutton.getAttribute("id")),app.otherview&&app.otherview.beforeHelp?app.otherview.beforeHelp():app.beforeHelp(),stats.trace(constant.viewNames[app.getView()],"tutorial","start",null),tutorial.start()}});