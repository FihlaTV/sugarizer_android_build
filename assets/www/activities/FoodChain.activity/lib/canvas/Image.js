/*! Sugarizer 2017-08-25 */
enyo.kind({name:"enyo.canvas.Image",kind:enyo.canvas.Control,published:{src:""},create:function(){this.image=new Image,this.inherited(arguments),this.srcChanged()},srcChanged:function(){this.src&&(this.image.src=this.src)},renderSelf:function(a){a.drawImage(this.image,this.bounds.l,this.bounds.t)}});