/*! Sugarizer 2018-05-08 */
enyo.kind({name:"enyo.TabPanels",kind:"Panels",draggable:!1,tabTools:[{name:"scroller",kind:"Scroller",maxHeight:"100px",strategyKind:"TranslateScrollStrategy",thumb:!1,vertical:"hidden",horizontal:"auto",components:[{name:"tabs",kind:"onyx.RadioGroup",style:"text-align: left; white-space: nowrap",controlClasses:"onyx-tabbutton",onActivate:"tabActivate"}]},{name:"client",fit:!0,kind:"Panels",classes:"enyo-tab-panels",onTransitionStart:"clientTransitionStart"}],create:function(){this.inherited(arguments),this.$.client.getPanels=enyo.bind(this,"getClientPanels"),this.draggableChanged(),this.animateChanged(),this.wrapChanged()},initComponents:function(){this.createChrome(this.tabTools),this.inherited(arguments)},getClientPanels:function(){return this.getPanels()},flow:function(){this.inherited(arguments),this.$.client.flow()},reflow:function(){this.inherited(arguments),this.$.client.reflow()},draggableChanged:function(){this.$.client.setDraggable(this.draggable),this.draggable=!1},animateChanged:function(){this.$.client.setAnimate(this.animate),this.animate=!1},wrapChanged:function(){this.$.client.setWrap(this.wrap),this.wrap=!1},isPanel:function(a){var b=a.name;return!("tabs"==b||"client"==b||"scroller"==b)},addControl:function(a){if(this.inherited(arguments),this.isPanel(a)){var b=a.caption||"Tab "+this.$.tabs.controls.length,c=a._tab=this.$.tabs.createComponent({content:b});this.hasNode()&&c.render()}},removeControl:function(a){this.isPanel(a)&&a._tab&&a._tab.destroy(),this.inherited(arguments)},layoutKindChanged:function(){this.layout||(this.layout=enyo.createFromKind("FittableRowsLayout",this)),this.$.client.setLayoutKind(this.layoutKind)},indexChanged:function(){this.$.client.layout&&this.$.client.setIndex(this.index),this.index=this.$.client.getIndex()},tabActivate:function(a,b){if(this.hasNode()&&b.originator.active){var c=b.originator.indexInContainer();this.getIndex()!=c&&this.setIndex(c)}},clientTransitionStart:function(a,b){var c=b.toIndex,d=this.$.tabs.getClientControls()[c];if(d&&d.hasNode()){this.$.tabs.setActive(d);var e=d.node,f=e.offsetLeft,g=f+e.offsetWidth,h=this.$.scroller.getScrollBounds();(g<h.left||g>h.left+h.clientWidth)&&this.$.scroller.scrollToControl(d)}return!0},startTransition:enyo.nop,finishTransition:enyo.nop,stepTransition:enyo.nop,refresh:enyo.nop});