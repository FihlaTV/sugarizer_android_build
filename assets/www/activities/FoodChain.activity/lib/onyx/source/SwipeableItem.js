/*! Sugarizer 2018-07-01 */
enyo.kind({name:"onyx.SwipeableItem",kind:"onyx.Item",classes:"onyx-swipeable-item",published:{contentClasses:"",preventDragPropagation:!1},defaultContentClasses:"onyx-swipeable-item-content",handlers:{ondown:"down"},events:{onDelete:"",onCancel:""},components:[{name:"client",kind:"Slideable",min:-100,unit:"%",ondragstart:"clientDragStart"},{name:"confirm",kind:"onyx.Toolbar",canGenerate:!1,classes:"onyx-swipeable-item-confirm enyo-fit",style:"text-align: center;",ontap:"confirmTap",components:[{kind:"onyx.Button",content:"Delete",ontap:"deleteTap"},{kind:"onyx.Button",content:"Cancel",ontap:"cancelTap"}]}],swiping:-1,create:function(){this.inherited(arguments),this.contentClassesChanged()},reset:function(){this.applyStyle("position",null),this.$.confirm.setShowing(!1),this.$.client.getAnimator().stop(),this.$.client.setValue(0)},contentClassesChanged:function(){this.$.client.setClasses(this.defaultContentClasses+" "+this.contentClasses)},applyContentStyle:function(a,b){this.$.client.applyStyle(a,b)},addContentClass:function(a){this.$.client.addClass(a)},removeContentClass:function(a){this.$.client.removeClass(a)},hasContentClass:function(a){return this.$.client.hasClass(a)},addRemoveContentClass:function(a,b){this.$.client.addRemoveClass(a,b)},generateHtml:function(){return this.reset(),this.inherited(arguments)},contentChanged:function(){this.$.client.setContent(this.content)},confirmTap:function(){return!0},deleteTap:function(a,b){return this.reset(),this.doDelete(),!0},cancelTap:function(a,b){return this.$.client.animateToMax(),this.doCancel(),!0},down:function(a,b){var c=this.swiping;this.swiping=b.index;var d=b.flyweight;this.swiping!=c&&c>=0&&d&&d.performOnRow(c,enyo.bind(this,function(){this.reset()}))},clientDragStart:function(a,b){if(a.dragging){var c=b.flyweight;c&&(c.prepareRow(b.index),this.applyStyle("position","relative"),this.$.confirm.setShowing(!0),this.$.confirm.hasNode()||(this.$.confirm.prepend=!0,this.$.confirm.render(),this.$.confirm.prepend=!1))}return this.preventDragPropagation}});