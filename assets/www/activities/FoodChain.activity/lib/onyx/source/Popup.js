/*! Sugarizer 2017-08-25 */
enyo.kind({name:"onyx.Popup",kind:"Popup",classes:"onyx-popup",published:{scrimWhenModal:!0,scrim:!1,scrimClassName:""},statics:{count:0},defaultZ:120,showingChanged:function(){this.showing?(onyx.Popup.count++,this.applyZIndex()):onyx.Popup.count>0&&onyx.Popup.count--,this.showHideScrim(this.showing),this.inherited(arguments)},showHideScrim:function(a){if(this.floating&&(this.scrim||this.modal&&this.scrimWhenModal)){var b=this.getScrim();if(a){var c=this.getScrimZIndex();this._scrimZ=c,b.showAtZIndex(c)}else b.hideAtZIndex(this._scrimZ);enyo.call(b,"addRemoveClass",[this.scrimClassName,b.showing])}},getScrimZIndex:function(){return this.findZIndex()-1},getScrim:function(){return this.modal&&this.scrimWhenModal&&!this.scrim?onyx.scrimTransparent.make():onyx.scrim.make()},applyZIndex:function(){this._zIndex=2*onyx.Popup.count+this.findZIndex()+1,this.applyStyle("z-index",this._zIndex)},findZIndex:function(){var a=this.defaultZ;return this._zIndex?a=this._zIndex:this.hasNode()&&(a=Number(enyo.dom.getComputedStyleValue(this.node,"z-index"))||a),this._zIndex=a}});