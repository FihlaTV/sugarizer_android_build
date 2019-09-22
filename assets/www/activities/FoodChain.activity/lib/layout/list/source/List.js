/*! Sugarizer 2019-09-21 */
enyo.kind({name:"enyo.List",kind:"Scroller",classes:"enyo-list",published:{count:0,rowsPerPage:50,bottomUp:!1,multiSelect:!1,toggleSelected:!1,fixedHeight:!1},events:{onSetupItem:""},handlers:{onAnimateFinish:"animateFinish"},rowHeight:0,listTools:[{name:"port",classes:"enyo-list-port enyo-border-box",components:[{name:"generator",kind:"FlyweightRepeater",canGenerate:!1,components:[{tag:null,name:"client"}]},{name:"page0",allowHtml:!0,classes:"enyo-list-page"},{name:"page1",allowHtml:!0,classes:"enyo-list-page"}]}],create:function(){this.pageHeights=[],this.inherited(arguments),this.getStrategy().translateOptimized=!0,this.bottomUpChanged(),this.multiSelectChanged(),this.toggleSelectedChanged()},createStrategy:function(){this.controlParentName="strategy",this.inherited(arguments),this.createChrome(this.listTools),this.controlParentName="client",this.discoverControlParent()},rendered:function(){this.inherited(arguments),this.$.generator.node=this.$.port.hasNode(),this.$.generator.generated=!0,this.reset()},resizeHandler:function(){this.inherited(arguments),this.refresh()},bottomUpChanged:function(){this.$.generator.bottomUp=this.bottomUp,this.$.page0.applyStyle(this.pageBound,null),this.$.page1.applyStyle(this.pageBound,null),this.pageBound=this.bottomUp?"bottom":"top",this.hasNode()&&this.reset()},multiSelectChanged:function(){this.$.generator.setMultiSelect(this.multiSelect)},toggleSelectedChanged:function(){this.$.generator.setToggleSelected(this.toggleSelected)},countChanged:function(){this.hasNode()&&this.updateMetrics()},updateMetrics:function(){this.defaultPageHeight=this.rowsPerPage*(this.rowHeight||100),this.pageCount=Math.ceil(this.count/this.rowsPerPage),this.portSize=0;for(var a=0;a<this.pageCount;a++)this.portSize+=this.getPageHeight(a);this.adjustPortSize()},generatePage:function(a,b){this.page=a;var c=this.$.generator.rowOffset=this.rowsPerPage*this.page,d=this.$.generator.count=Math.min(this.count-c,this.rowsPerPage),e=this.$.generator.generateChildHtml();b.setContent(e);var f=b.getBounds().height;if(!this.rowHeight&&f>0&&(this.rowHeight=Math.floor(f/d),this.updateMetrics()),!this.fixedHeight){var g=this.getPageHeight(a);g!=f&&f>0&&(this.pageHeights[a]=f,this.portSize+=f-g)}},update:function(a){var b=!1,c=this.positionToPageInfo(a),d=c.pos+this.scrollerHeight/2,e=Math.floor(d/Math.max(c.height,this.scrollerHeight)+.5)+c.no,f=e%2==0?e:e-1;this.p0!=f&&this.isPageInRange(f)&&(this.generatePage(f,this.$.page0),this.positionPage(f,this.$.page0),this.p0=f,b=!0),f=e%2==0?Math.max(1,e-1):e,this.p1!=f&&this.isPageInRange(f)&&(this.generatePage(f,this.$.page1),this.positionPage(f,this.$.page1),this.p1=f,b=!0),b&&!this.fixedHeight&&(this.adjustBottomPage(),this.adjustPortSize())},updateForPosition:function(a){this.update(this.calcPos(a))},calcPos:function(a){return this.bottomUp?this.portSize-this.scrollerHeight-a:a},adjustBottomPage:function(){var a=this.p0>=this.p1?this.$.page0:this.$.page1;this.positionPage(a.pageNo,a)},adjustPortSize:function(){this.scrollerHeight=this.getBounds().height;var a=Math.max(this.scrollerHeight,this.portSize);this.$.port.applyStyle("height",a+"px")},positionPage:function(a,b){b.pageNo=a;var c=this.pageToPosition(a);b.applyStyle(this.pageBound,c+"px")},pageToPosition:function(a){for(var b=0,c=a;c>0;)c--,b+=this.getPageHeight(c);return b},positionToPageInfo:function(a){for(var b=-1,c=this.calcPos(a),d=this.defaultPageHeight;c>=0;)b++,d=this.getPageHeight(b),c-=d;return{no:b,height:d,pos:c+d}},isPageInRange:function(a){return a==Math.max(0,Math.min(this.pageCount-1,a))},getPageHeight:function(a){return this.pageHeights[a]||this.defaultPageHeight},invalidatePages:function(){this.p0=this.p1=null,this.$.page0.setContent(""),this.$.page1.setContent("")},invalidateMetrics:function(){this.pageHeights=[],this.rowHeight=0,this.updateMetrics()},scroll:function(a,b){var c=this.inherited(arguments);return this.update(this.getScrollTop()),c},scrollToBottom:function(){this.update(this.getScrollBounds().maxTop),this.inherited(arguments)},setScrollTop:function(a){this.update(a),this.inherited(arguments),this.twiddle()},getScrollPosition:function(){return this.calcPos(this.getScrollTop())},setScrollPosition:function(a){this.setScrollTop(this.calcPos(a))},scrollToRow:function(a){var b=Math.floor(a/this.rowsPerPage),c=(this.rowsPerPage,this.pageToPosition(b));if(this.updateForPosition(c),c=this.pageToPosition(b),this.setScrollPosition(c),b==this.p0||b==this.p1){var d=this.$.generator.fetchRowNode(a);if(d){var e=d.offsetTop;this.bottomUp&&(e=this.getPageHeight(b)-d.offsetHeight-e);var f=this.getScrollPosition()+e;this.setScrollPosition(f)}}},scrollToStart:function(){this[this.bottomUp?"scrollToBottom":"scrollToTop"]()},scrollToEnd:function(){this[this.bottomUp?"scrollToTop":"scrollToBottom"]()},refresh:function(){this.invalidatePages(),this.update(this.getScrollTop()),this.stabilize(),4===enyo.platform.android&&this.twiddle()},reset:function(){this.getSelection().clear(),this.invalidateMetrics(),this.invalidatePages(),this.stabilize(),this.scrollToStart()},getSelection:function(){return this.$.generator.getSelection()},select:function(a,b){return this.getSelection().select(a,b)},isSelected:function(a){return this.$.generator.isSelected(a)},renderRow:function(a){this.$.generator.renderRow(a)},prepareRow:function(a){this.$.generator.prepareRow(a)},lockRow:function(){this.$.generator.lockRow()},performOnRow:function(a,b,c){this.$.generator.performOnRow(a,b,c)},animateFinish:function(a){return this.twiddle(),!0},twiddle:function(){var a=this.getStrategy();enyo.call(a,"twiddle")}});