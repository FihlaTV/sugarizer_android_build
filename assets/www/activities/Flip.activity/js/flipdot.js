/*! Sugarizer 2019-09-21 */
function Dot(a,b,c,d,e,f,g,h,i){this.colour=e,this.colours=d,this.radius=f,this.circle=null,this.clickable=!0,this.x=b,this.y=c,this.setCircle=function(){this.circle.x=this.x,this.circle.y=this.y,a.addChild(this.circle)},this.setColour=function(a){this.circle.graphics.clear().beginFill(this.colours[a]).drawCircle(0,0,this.radius).endFill(),this.colour=a},this.flipSelf=function(){0==this.colour?(this.colour=1,this.setColour(1)):(this.colour=0,this.setColour(0))},this.setClickListener=function(){var a=(this.circle,this),b=g;this.circle.on("click",function(c){1==a.clickable&&b.flip(h,i)})},this.showSmile=function(){var b=new createjs.Shape,c=b.graphics,d=150,e="";e="#000"==this.colours[this.colour]||"#000000"==this.colours[this.colour]?"#FFFFFF":"#000000",c.setStrokeStyle(10/d*this.radius,"round","round"),c.beginStroke(e),c.beginFill(),c.drawCircle(0,0,100/d*this.radius),c.beginFill(),c.arc(0,0,60/d*this.radius,0,Math.PI),c.beginStroke(),c.beginFill(e),c.drawCircle(-30/d*this.radius,-30/d*this.radius,15/d*this.radius),c.drawCircle(30/d*this.radius,-30/d*this.radius,15/d*this.radius),b.x=this.circle.x,b.y=this.circle.y,a.addChild(b)},this.init=function(){var a=new createjs.Shape;a.graphics.beginFill(this.colours[this.colour]).drawCircle(0,0,this.radius).endFill(),this.circle=a,this.setCircle(),this.setClickListener()}}