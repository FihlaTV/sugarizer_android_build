/*! Sugarizer 2017-09-04 */
enyo.kind({name:"onyx.Scrim",showing:!1,classes:"onyx-scrim enyo-fit",floating:!1,create:function(){this.inherited(arguments),this.zStack=[],this.floating&&this.setParent(enyo.floatingLayer)},showingChanged:function(){this.floating&&this.showing&&!this.hasNode()&&this.render(),this.inherited(arguments)},addZIndex:function(a){enyo.indexOf(a,this.zStack)<0&&this.zStack.push(a)},removeZIndex:function(a){enyo.remove(a,this.zStack)},showAtZIndex:function(a){this.addZIndex(a),void 0!==a&&this.setZIndex(a),this.show()},hideAtZIndex:function(a){if(this.removeZIndex(a),this.zStack.length){var b=this.zStack[this.zStack.length-1];this.setZIndex(b)}else this.hide()},setZIndex:function(a){this.zIndex=a,this.applyStyle("z-index",a)},make:function(){return this}}),enyo.kind({name:"onyx.scrimSingleton",kind:null,constructor:function(a,b){this.instanceName=a,enyo.setObject(this.instanceName,this),this.props=b||{}},make:function(){var a=new onyx.Scrim(this.props);return enyo.setObject(this.instanceName,a),a},showAtZIndex:function(a){var b=this.make();b.showAtZIndex(a)},hideAtZIndex:enyo.nop,show:function(){var a=this.make();a.show()}}),new onyx.scrimSingleton("onyx.scrim",{floating:!0,classes:"onyx-scrim-translucent"}),new onyx.scrimSingleton("onyx.scrimTransparent",{floating:!0,classes:"onyx-scrim-transparent"});