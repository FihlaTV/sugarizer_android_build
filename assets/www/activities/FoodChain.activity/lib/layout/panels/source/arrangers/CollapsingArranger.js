/*! Sugarizer 2017-09-04 */
enyo.kind({name:"enyo.CollapsingArranger",kind:"CarouselArranger",size:function(){this.clearLastSize(),this.inherited(arguments)},clearLastSize:function(){for(var a,b=0,c=this.container.getPanels();a=c[b];b++)a._fit&&b!=c.length-1&&(a.applyStyle("width",null),a._fit=null)},arrange:function(a,b){for(var c,d=this.container.getPanels(),e=0,f=this.containerPadding.left;c=d[e];e++)this.arrangeControl(c,{left:f}),e>=b&&(f+=c.width+c.marginWidth),e==d.length-1&&b<0&&this.arrangeControl(c,{left:f-b})},calcArrangementDifference:function(a,b,c,d){var e=this.container.getPanels().length-1;return Math.abs(d[e].left-b[e].left)},flowControl:function(a,b){if(this.inherited(arguments),this.container.realtimeFit){var c=this.container.getPanels(),d=c.length-1,e=c[d];a==e&&this.fitControl(a,b.left)}},finish:function(){if(this.inherited(arguments),!this.container.realtimeFit&&this.containerBounds){var a=this.container.getPanels(),b=this.container.arrangement,c=a.length-1,d=a[c];this.fitControl(d,b[c].left)}},fitControl:function(a,b){a._fit=!0,a.applyStyle("width",this.containerBounds.width-b+"px"),a.resized()}});