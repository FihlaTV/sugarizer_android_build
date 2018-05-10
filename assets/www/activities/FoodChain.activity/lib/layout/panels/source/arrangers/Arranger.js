/*! Sugarizer 2018-05-08 */
enyo.kind({name:"enyo.Arranger",kind:"Layout",layoutClass:"enyo-arranger",accelerated:"auto",dragProp:"ddx",dragDirectionProp:"xDirection",canDragProp:"horizontal",incrementalPoints:!1,destroy:function(){for(var a,b=this.container.getPanels(),c=0;a=b[c];c++)a._arranger=null;this.inherited(arguments)},arrange:function(a,b){},size:function(){},start:function(){var a=this.container.fromIndex,b=this.container.toIndex,c=this.container.transitionPoints=[a];if(this.incrementalPoints)for(var d=Math.abs(b-a)-2,e=a;d>=0;)e+=b<a?-1:1,c.push(e),d--;c.push(this.container.toIndex)},finish:function(){},canDragEvent:function(a){return a[this.canDragProp]},calcDragDirection:function(a){return a[this.dragDirectionProp]},calcDrag:function(a){return a[this.dragProp]},drag:function(a,b,c,d,e){var f=this.measureArrangementDelta(-a,b,c,d,e);return f},measureArrangementDelta:function(a,b,c,d,e){var f=this.calcArrangementDifference(b,c,d,e),g=f?a/Math.abs(f):0;return g*=this.container.fromIndex>this.container.toIndex?-1:1},calcArrangementDifference:function(a,b,c,d){},_arrange:function(a){var b=this.getOrderedControls(a);this.arrange(b,a)},arrangeControl:function(a,b){a._arranger=enyo.mixin(a._arranger||{},b)},flow:function(){this.c$=[].concat(this.container.getPanels()),this.controlsIndex=0;for(var a,b=0,c=this.container.getPanels();a=c[b];b++)if(enyo.dom.accelerate(a,this.accelerated),enyo.platform.safari)for(var d,e=a.children,f=0;d=e[f];f++)enyo.dom.accelerate(d,this.accelerated)},reflow:function(){var a=this.container.hasNode();this.containerBounds=a?{width:a.clientWidth,height:a.clientHeight}:{},this.size()},flowArrangement:function(){var a=this.container.arrangement;if(a)for(var b,c=0,d=this.container.getPanels();b=d[c];c++)this.flowControl(b,a[c])},flowControl:function(a,b){enyo.Arranger.positionControl(a,b);var c=b.opacity;null!=c&&enyo.Arranger.opacifyControl(a,c)},getOrderedControls:function(a){for(var b=Math.floor(a),c=b-this.controlsIndex,d=c>0,e=this.c$||[],f=0;f<Math.abs(c);f++)d?e.push(e.shift()):e.unshift(e.pop());return this.controlsIndex=b,e},statics:{positionControl:function(a,b,c){var d=c||"px";if(!this.updating)if(enyo.dom.canTransform()&&!enyo.platform.android){var e=b.left,f=b.top,e=enyo.isString(e)?e:e&&e+d,f=enyo.isString(f)?f:f&&f+d;enyo.dom.transform(a,{translateX:e||null,translateY:f||null})}else a.setBounds(b,c)},opacifyControl:function(a,b){var c=b;c=c>.99?1:c<.01?0:c,enyo.platform.ie<9?a.applyStyle("filter","progid:DXImageTransform.Microsoft.Alpha(Opacity="+100*c+")"):a.applyStyle("opacity",c)}}});