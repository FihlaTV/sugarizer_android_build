/*! Sugarizer 2018-05-08 */
enyo.kind({name:"enyo.canvas.Circle",kind:enyo.canvas.Shape,renderSelf:function(a){a.beginPath(),a.arc(this.bounds.l,this.bounds.t,this.bounds.w,0,2*Math.PI),this.draw(a)}});