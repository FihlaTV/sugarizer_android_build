/*! Sugarizer 2018-07-01 */
enyo.kind({name:"enyo.Canvas",kind:enyo.Control,tag:"canvas",attributes:{width:500,height:500},defaultKind:"enyo.canvas.Control",generateInnerHtml:function(){return""},teardownChildren:function(){},rendered:function(){this.renderChildren()},addChild:function(){enyo.UiComponent.prototype.addChild.apply(this,arguments)},removeChild:function(){enyo.UiComponent.prototype.removeChild.apply(this,arguments)},renderChildren:function(a){var b=a,c=this.hasNode();if(b||c.getContext&&(b=c.getContext("2d")),b)for(var d,e=0;d=this.children[e];e++)d.render(b)},update:function(){var a=this.hasNode();if(a.getContext){var b=a.getContext("2d"),c=this.getBounds();b.clearRect(0,0,c.width,c.height),this.renderChildren(b)}}});