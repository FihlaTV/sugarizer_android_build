/*! Sugarizer 2017-08-25 */
enyo.kind({name:"enyo.LeftRightArranger",kind:"Arranger",margin:40,axisSize:"width",offAxisSize:"height",axisPosition:"left",constructor:function(){this.inherited(arguments),this.margin=null!=this.container.margin?this.container.margin:this.margin},size:function(){for(var a,b,c=this.container.getPanels(),d=this.containerBounds[this.axisSize],e=d-this.margin-this.margin,f=0;b=c[f];f++)a={},a[this.axisSize]=e,a[this.offAxisSize]="100%",b.setBounds(a)},arrange:function(a,b){for(var c,d,e=Math.floor(this.container.getPanels().length/2),f=this.getOrderedControls(Math.floor(b)-e),g=this.containerBounds[this.axisSize]-this.margin-this.margin,h=this.margin-g*e,i=((f.length-1)/2,0);c=f[i];i++)d={},d[this.axisPosition]=h,d.opacity=0==i||i==f.length-1?0:1,this.arrangeControl(c,d),h+=g},calcArrangementDifference:function(a,b,c,d){var e=Math.abs(a%this.c$.length);return b[e][this.axisPosition]-d[e][this.axisPosition]},destroy:function(){for(var a,b=this.container.getPanels(),c=0;a=b[c];c++)enyo.Arranger.positionControl(a,{left:null,top:null}),enyo.Arranger.opacifyControl(a,1),a.applyStyle("left",null),a.applyStyle("top",null),a.applyStyle("height",null),a.applyStyle("width",null);this.inherited(arguments)}}),enyo.kind({name:"enyo.TopBottomArranger",kind:"LeftRightArranger",dragProp:"ddy",dragDirectionProp:"yDirection",canDragProp:"vertical",axisSize:"height",offAxisSize:"width",axisPosition:"top"}),enyo.kind({name:"enyo.SpiralArranger",kind:"Arranger",incrementalPoints:!0,inc:20,size:function(){for(var a,b=this.container.getPanels(),c=this.containerBounds,d=this.controlWidth=c.width/3,e=this.controlHeight=c.height/3,f=0;a=b[f];f++)a.setBounds({width:d,height:e})},arrange:function(a,b){for(var c,d=this.inc,e=0,f=a.length;c=a[e];e++){var g=Math.cos(e/f*2*Math.PI)*e*d+this.controlWidth,h=Math.sin(e/f*2*Math.PI)*e*d+this.controlHeight;this.arrangeControl(c,{left:g,top:h})}},start:function(){this.inherited(arguments);for(var a,b=this.getOrderedControls(this.container.toIndex),c=0;a=b[c];c++)a.applyStyle("z-index",b.length-c)},calcArrangementDifference:function(a,b,c,d){return this.controlWidth},destroy:function(){for(var a,b=this.container.getPanels(),c=0;a=b[c];c++)a.applyStyle("z-index",null),enyo.Arranger.positionControl(a,{left:null,top:null}),a.applyStyle("left",null),a.applyStyle("top",null),a.applyStyle("height",null),a.applyStyle("width",null);this.inherited(arguments)}}),enyo.kind({name:"enyo.GridArranger",kind:"Arranger",incrementalPoints:!0,colWidth:100,colHeight:100,size:function(){for(var a,b=this.container.getPanels(),c=this.colWidth,d=this.colHeight,e=0;a=b[e];e++)a.setBounds({width:c,height:d})},arrange:function(a,b){for(var c,d=this.colWidth,e=this.colHeight,f=Math.floor(this.containerBounds.width/d),g=0,h=0;h<a.length;g++)for(var i=0;i<f&&(c=a[h]);i++,h++)this.arrangeControl(c,{left:d*i,top:e*g})},flowControl:function(a,b){this.inherited(arguments),enyo.Arranger.opacifyControl(a,b.top%this.colHeight!=0?.25:1)},calcArrangementDifference:function(a,b,c,d){return this.colWidth},destroy:function(){for(var a,b=this.container.getPanels(),c=0;a=b[c];c++)enyo.Arranger.positionControl(a,{left:null,top:null}),a.applyStyle("left",null),a.applyStyle("top",null),a.applyStyle("height",null),a.applyStyle("width",null);this.inherited(arguments)}});