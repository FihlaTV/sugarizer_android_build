/*! Sugarizer 2018-05-08 */
enyo.kind({name:"enyo.canvas.Control",kind:enyo.UiComponent,defaultKind:"enyo.canvas.Control",published:{bounds:null},events:{onRender:""},constructor:function(){this.bounds={l:enyo.irand(400),t:enyo.irand(400),w:enyo.irand(100),h:enyo.irand(100)},this.inherited(arguments)},importProps:function(a){this.inherited(arguments),a&&a.bounds&&(enyo.mixin(this.bounds,a.bounds),delete a.bounds)},renderSelf:function(a){this.doRender({context:a})},render:function(a){this.children.length?this.renderChildren(a):this.renderSelf(a)},renderChildren:function(a){for(var b,c=0;b=this.children[c];c++)b.render(a)}});