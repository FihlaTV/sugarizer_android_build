/*! Sugarizer 2019-09-21 */
enyo.kind({name:"enyo.AlphaJumper",classes:"enyo-alpha-jumper enyo-border-box",published:{marker:null},events:{onAlphaJump:""},handlers:{ondown:"down",onmove:"move",onup:"up"},initComponents:function(){for(var a="A".charCodeAt(0),b=a;b<a+26;b++)this.createComponent({content:String.fromCharCode(b)});this.inherited(arguments)},down:function(a,b){if(this.tracking&&enyo.dispatcher.release(),this.tracking=!0,this.hasNode()){var c=this.node.getBoundingClientRect(),d=void 0===c.width?c.right-c.left:c.width;this.x=c.left+d/2}enyo.dispatcher.capture(this),this.track(b)},move:function(a,b){this.tracking&&this.track(b)},up:function(){this.tracking&&(enyo.dispatcher.release(),this.setMarker(null),this.tracking=!1)},track:function(a){var b=document.elementFromPoint(this.x,a.pageY),c=this.nodeToControl(b);c&&this.setMarker(c)},nodeToControl:function(a){for(var b,c=0,d=this.controls;b=d[c];c++)if(a==b.hasNode())return b},markerChanged:function(a){a&&a.removeClass("active"),this.marker&&(this.marker.addClass("active"),this.doAlphaJump({letter:this.marker.getContent(),index:this.marker.indexInContainer()}))}});