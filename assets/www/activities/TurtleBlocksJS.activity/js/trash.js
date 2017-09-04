/*! Sugarizer 2017-09-04 */
function Trashcan(){this.isVisible=!1,this._canvas=null,this._stage=null,this._size=null,this._refreshCanvas=null,this._scale=1,this._iconsize=55,this._container=new createjs.Container,this._borderHighlightBitmap=null,this._isHighlightInitialized=!1,this._inAnimation=!1,this._animationInterval=null,this._highlightPower=255,this._animationLevel=0,this.animationTime=500,this.init=function(){this._stage.addChild(this._container),this._stage.setChildIndex(this._container,0),this.resizeEvent(1),this._makeTrash()},this.setCanvas=function(a){return this._canvas=a,this},this.setStage=function(a){return this._stage=a,this},this.setSize=function(a){return this._size=a,this},this.setRefreshCanvas=function(a){return this._refreshCanvas=a,this},this._makeBorderHighlight=function(a){var b=new Image,c=this;b.onload=function(){c._borderHighlightBitmap=new createjs.Bitmap(b),c._borderHighlightBitmap.scaleX=c._size/c._iconsize,c._borderHighlightBitmap.scaleY=c._size/c._iconsize,c._isHighlightInitialized?c._container.removeChildAt(c._container.children.length-1):(c._container.visible=!1,c._isHighlightInitialized=!0),c._container.addChild(c._borderHighlightBitmap),c._borderHighlightBitmap.visible=!0};var d="rgb("+this._highlightPower+","+this._highlightPower+","+this._highlightPower+")";a&&(d="rgb(255, 0, 0)"),b.src="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(BORDER.replace("stroke_color",d))))},this._makeBorder=function(){var a=new Image,b=this;a.onload=function(){border=new createjs.Bitmap(a),bitmap.scaleX=b._size/b._iconsize,bitmap.scaleY=b._size/b._iconsize,b._container.addChild(border),b._makeBorderHighlight(!1)},a.src="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(BORDER.replace("stroke_color","#e0e0e0"))))},this._makeTrash=function(){var a=new Image,b=this;a.onload=function(){bitmap=new createjs.Bitmap(a),b._container.addChild(bitmap),b._iconsize=bitmap.getBounds().width,bitmap.scaleX=b._size/b._iconsize,bitmap.scaleY=b._size/b._iconsize,bitmap.x=(TRASHWIDTH-b._size)/2*bitmap.scaleX,bitmap.y=(TRASHHEIGHT-b._size)/2*bitmap.scaleY,b._makeBorder()},a.src="images/trash.svg"},this.resizeEvent=function(a){this._scale=a,this._container.x=(this._canvas.width/this._scale-TRASHWIDTH)/2,this._container.y=this._canvas.height/this._scale-TRASHHEIGHT},this.hide=function(){createjs.Tween.get(this._container).to({alpha:0},200).set({visible:!1})},this.show=function(){this.stopHighlightAnimation(),createjs.Tween.get(this._container).to({alpha:0,visible:!0}).to({alpha:1},200)},this.startHighlightAnimation=function(){if(!this._inAnimation){this._inAnimation=!0;var a=this;this._animationInterval=setInterval(function(){return a._animationLevel+=20,a._animationLevel>=a.animationTime?(a.isVisible=!0,a._makeBorderHighlight(!0),a._refreshCanvas(),void clearInterval(a._animationInterval)):(a._highlightPower=parseInt(255-255*(a._animationLevel/a.animationTime),10),a._makeBorderHighlight(!1),void a._refreshCanvas())},20),this._switchHighlightVisibility(!0)}},this.stopHighlightAnimation=function(){this._inAnimation&&(clearInterval(this._animationInterval),this._inAnimation=!1,this.isVisible=!1,this._animationLevel=0,this._highlightPower=255,this._makeBorderHighlight(!1),this._switchHighlightVisibility(!1))},this._switchHighlightVisibility=function(a){last(this._container.children).visible=a,this._container.children[1].visible=!a,this._container.visible=!0,this._refreshCanvas()},this.overTrashcan=function(a,b){var c=this._container.x,d=this._container.y;return!(a<c)&&(!(a>c+TRASHWIDTH)&&!(b<d))}}require(["activity/utils"]);var TRASHWIDTH=120,TRASHHEIGHT=120;