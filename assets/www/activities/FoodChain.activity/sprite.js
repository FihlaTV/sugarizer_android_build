/*! Sugarizer 2017-08-25 */
enyo.kind({name:"Sprite",published:{x:0,y:0,width:0,height:0,heading:0,images:[],index:-1,sound:""},create:function(){this.inherited(arguments),this.halfWidth=this.width/2,this.halfHeight=this.height/2,this.animating=!1},draw:function(a){a.save(),a.translate(this.x,this.y);var b=(90-this.heading)*(Math.PI/180);a.rotate(b),a.translate(-this.halfWidth,-this.halfHeight);var c=document.getElementById(this.images[this.index]);a.drawImage(c,0,0),a.restore()},computeRect:function(){var a=(90-this.heading)*(Math.PI/180),b=this.halfWidth*Math.cos(a),c=this.halfHeight*Math.cos(a),d=this.halfWidth*Math.sin(a),e=this.halfHeight*Math.sin(a),f=this.x-b+e,g=this.y-c+d,h=this.x+b+e,i=this.y-c-d,j=this.x+b-e,k=this.y+c-d,l=this.x-b-e,m=this.y+c+d,n=Math.min(f,Math.min(h,Math.min(j,l))),o=Math.min(g,Math.min(i,Math.min(k,m))),p=Math.max(h,Math.max(h,Math.max(j,l))),q=Math.max(i,Math.max(i,Math.max(k,m)));return{x:n,y:o,dx:p-n,dy:q-o}},drawBorder:function(a){a.save(),a.strokeStyle="blue";var b=this.computeRect();a.strokeRect(b.x,b.y,b.dx,b.dy),a.restore()},unDraw:function(a){var b=this.computeRect();a.clearRect(b.x,b.y,b.dx,b.dy)},firstImage:function(){this.index=0},nextImage:function(a){this.index=this.index+1,void 0===a&&(a=this.images.length),this.index>=a&&(this.index=0)},useImage:function(a){this.index=a},playSound:function(){""!=this.sound&&FoodChain.sound.play(this.sound)},intersect:function(a){var b=this.computeRect(),c=a.computeRect();return!(c.x>b.x+b.dx||c.x+c.dx<b.x||c.y>b.y+b.dy||c.y+c.dy<b.y)},distance:function(a){var b=a.x-this.x,c=a.y-this.y,d=Math.sqrt(b*b+c*c);return d},animate:function(a,b,c,d,e){this.animating||(this.animating=!0,this.animation={ctx:a,index:0,images:b,dx:c,dy:d,action:e},this.animation.job=window.setInterval(enyo.bind(this,"animateTimer"),50))},animateTimer:function(){return this.animation.index==this.animation.images.length?(this.animating=!1,void window.clearInterval(this.animation.job)):(this.unDraw(this.animation.ctx),void 0!=this.animation.dx&&(this.x+=this.animation.dx),void 0!=this.animation.dy&&(this.y+=this.animation.dy),this.useImage(this.animation.images[this.animation.index]),this.draw(this.animation.ctx),enyo.platform.android&&"http"!=document.location.protocol.substr(0,4)&&(document.getElementById("acanvas").style.display="none",document.getElementById("acanvas").offsetHeight,document.getElementById("acanvas").style.display="block"),void 0==this.animation.action||this.animation.action(this)?void(this.animation.index=this.animation.index+1):(this.animating=!1,this.animation.index=this.animation.images.length,void window.clearInterval(this.animation.job)))}});