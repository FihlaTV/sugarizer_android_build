/*! Sugarizer 2018-05-08 */
enyo.kind({name:"Sprite",published:{x:0,y:0,heading:0,power:0,images:[],engine:null},create:function(){this.inherited(arguments)},draw:function(a){a.save(),a.translate(this.x*constant.tileSize,this.y*constant.tileSize);var b=document.getElementById(this.getCurrentImage());if(a.drawImage(b,0,0),void 0!==this.value){a.font="29px Arial",a.strokeStyle="#000000";var c=(constant.tileSize-a.measureText(this.value.tag).width)/2;a.strokeText(this.value.tag,c,50),a.fillStyle="#FFFF00",a.fillText(this.value.tag,c+2,51)}a.restore()},getCurrentImage:function(){return this.images[this.heading<this.images.length?this.heading:0]}});