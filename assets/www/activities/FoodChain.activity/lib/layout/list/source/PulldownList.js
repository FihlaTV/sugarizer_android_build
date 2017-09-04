/*! Sugarizer 2017-09-04 */
enyo.kind({name:"enyo.PulldownList",kind:"List",touch:!0,pully:null,pulldownTools:[{name:"pulldown",classes:"enyo-list-pulldown",components:[{name:"puller",kind:"Puller"}]}],events:{onPullStart:"",onPullCancel:"",onPull:"",onPullRelease:"",onPullComplete:""},handlers:{onScrollStart:"scrollStartHandler",onScroll:"scrollHandler",onScrollStop:"scrollStopHandler",ondragfinish:"dragfinish"},pullingMessage:"Pull down to refresh...",pulledMessage:"Release to refresh...",loadingMessage:"Loading...",pullingIconClass:"enyo-puller-arrow enyo-puller-arrow-down",pulledIconClass:"enyo-puller-arrow enyo-puller-arrow-up",loadingIconClass:"",create:function(){var a={kind:"Puller",showing:!1,text:this.loadingMessage,iconClass:this.loadingIconClass,onCreate:"setPully"};this.listTools.splice(0,0,a),this.inherited(arguments),this.setPulling()},initComponents:function(){this.createChrome(this.pulldownTools),this.accel=enyo.dom.canAccelerate(),this.translation=this.accel?"translate3d":"translate",this.inherited(arguments)},setPully:function(a,b){this.pully=b.originator},scrollStartHandler:function(){this.firedPullStart=!1,this.firedPull=!1,this.firedPullCancel=!1},scrollHandler:function(a){this.completingPull&&this.pully.setShowing(!1);var b=this.getStrategy().$.scrollMath,c=b.y;b.isInOverScroll()&&c>0&&(enyo.dom.transformValue(this.$.pulldown,this.translation,"0,"+c+"px"+(this.accel?",0":"")),this.firedPullStart||(this.firedPullStart=!0,this.pullStart(),this.pullHeight=this.$.pulldown.getBounds().height),c>this.pullHeight&&!this.firedPull&&(this.firedPull=!0,this.firedPullCancel=!1,this.pull()),this.firedPull&&!this.firedPullCancel&&c<this.pullHeight&&(this.firedPullCancel=!0,this.firedPull=!1,this.pullCancel()))},scrollStopHandler:function(){this.completingPull&&(this.completingPull=!1,this.doPullComplete())},dragfinish:function(){if(this.firedPull){var a=this.getStrategy().$.scrollMath;a.setScrollY(a.y-this.pullHeight),this.pullRelease()}},completePull:function(){this.completingPull=!0,this.$.strategy.$.scrollMath.setScrollY(this.pullHeight),this.$.strategy.$.scrollMath.start()},pullStart:function(){this.setPulling(),this.pully.setShowing(!1),this.$.puller.setShowing(!0),this.doPullStart()},pull:function(){this.setPulled(),this.doPull()},pullCancel:function(){this.setPulling(),this.doPullCancel()},pullRelease:function(){this.$.puller.setShowing(!1),this.pully.setShowing(!0),this.doPullRelease()},setPulling:function(){this.$.puller.setText(this.pullingMessage),this.$.puller.setIconClass(this.pullingIconClass)},setPulled:function(){this.$.puller.setText(this.pulledMessage),this.$.puller.setIconClass(this.pulledIconClass)}}),enyo.kind({name:"enyo.Puller",classes:"enyo-puller",published:{text:"",iconClass:""},events:{onCreate:""},components:[{name:"icon"},{name:"text",tag:"span",classes:"enyo-puller-text"}],create:function(){this.inherited(arguments),this.doCreate(),this.textChanged(),this.iconClassChanged()},textChanged:function(){this.$.text.setContent(this.text)},iconClassChanged:function(){this.$.icon.setClasses(this.iconClass)}});