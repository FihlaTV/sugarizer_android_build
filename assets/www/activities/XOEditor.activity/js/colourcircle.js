/*! Sugarizer 2017-08-25 */
function ColourCircle(a,b,c,d,e,f,g){this.scale=e.canvas.width/1200,this.radius=22.5*this.scale,this.strokewidth=9.5*this.scale,this.innercol=a,this.outercol=b,this.circle=null,this.dragging=!1,this.number=g,this.setContainerPosition=function(a,b){this.circle.x=a,this.circle.y=b,e.addChild(this.circle)},this.setDragDropListeners=function(){var a=this.circle,b=this,c=f;this.circle.on("mousedown",function(b){this.offset={x:a.x-b.stageX,y:a.y-b.stageY},this.dragging=!1}),this.circle.on("pressmove",function(b){a.x=b.stageX+this.offset.x,a.y=b.stageY+this.offset.y,this.dragging=!0}),this.circle.on("click",function(a){1!=this.dragging&&c.updateSVG(b.innercol,b.outercol,b.number),this.dragging=!1})},this.init=function(){this.number=g;var a=new createjs.Shape;a.graphics.beginFill(this.innercol).drawCircle(0,0,this.radius),a.graphics.beginStroke(this.outercol),a.graphics.setStrokeStyle(this.strokewidth),a.graphics.drawCircle(0,0,this.radius),this.circle=a,this.setContainerPosition(c,d),this.setDragDropListeners()}}