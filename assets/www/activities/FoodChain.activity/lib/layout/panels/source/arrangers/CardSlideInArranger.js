/*! Sugarizer 2017-08-25 */
enyo.kind({name:"enyo.CardSlideInArranger",kind:"CardArranger",start:function(){for(var a,b=this.container.getPanels(),c=0;a=b[c];c++){var d=a.showing;a.setShowing(c==this.container.fromIndex||c==this.container.toIndex),a.showing&&!d&&a.resized()}var e=this.container.fromIndex,c=this.container.toIndex;this.container.transitionPoints=[c+"."+e+".s",c+"."+e+".f"]},finish:function(){this.inherited(arguments);for(var a,b=this.container.getPanels(),c=0;a=b[c];c++)a.setShowing(c==this.container.toIndex)},arrange:function(a,b){for(var c,d,e=b.split("."),f=e[0],g=e[1],h="s"==e[2],i=this.containerBounds.width,j=0,k=this.container.getPanels();c=k[j];j++)d=i,g==j&&(d=h?0:-i),f==j&&(d=h?i:0),g==j&&g==f&&(d=0),this.arrangeControl(c,{left:d})},destroy:function(){for(var a,b=this.container.getPanels(),c=0;a=b[c];c++)enyo.Arranger.positionControl(a,{left:null});this.inherited(arguments)}});