/*! Sugarizer 2018-07-01 */
define(["easel","sugar-web/datastore","sugar-web/env","webL10n","humane"],function(a,c,d,e,f){function h(a){return translation=e.get(a),""==translation&&(translation=a),translation}function i(a,b,c){var d=new Image;return d.cont=null,d.globe=a,d.onload=function(){var a=new createjs.Bitmap(d);a.setBounds(0,0,d.width,d.height),bounds=a.getBounds();var b=y/bounds.height;if(a.scaleX=b,a.scaleY=b,null==this.cont){this.cont=new createjs.Container,this.cont.name="button";var e=new createjs.Shape;e.graphics.beginFill("#000").drawRect(0,0,y,y),this.cont.width=y,this.cont.height=y,this.cont.hitArea=e,this.cont.addChild(e),this.cont.addChild(a),c(this.globe,this.cont)}},d.src=b,d}function j(a,b,d){this._data=a,this._canvas=b,this._textpalette=d,this.comicBox=null,this._imageCounter=0,this._pageCounterDisplay=null,this._prevButton=null,this._nextButton=null,this._boxSorter=null,this._sortButton=null,this._data.previews=[],this._waitMsg=document.getElementById("wait"),this.comicBox=new k(this._canvas,this),this.init=function(){this.activeBox=0;var a=this._data.boxs[this.activeBox];if(this._imageCounter=this._data.boxs.length,1==this._data.boxs.length&&0==a.globes.length){console.log("EMPTY TOON");var b={direction:null,text_font_description:"Sans 30",globe_type:"RECTANGLE",height:50,width:200,text_color:[0,0,0],radio:15,text_width:76,y:this._canvas.height/2,x:this._canvas.width/2,text_height:8,title_globe:!0,text_text:h("Title")};a.globes.push(b)}this.comicBox.init(a,this._data.images),this.comicBox.attachTextEditionPalette(this._textpalette),this._updatePageCounter()},this.setData=function(a){this._data=a,this._data.previews=[],this.init()},this.showWait=function(){this._waitMsg.style.display="block"},this.hideWait=function(){this._waitMsg.style.display="none"},this.getTitle=function(){for(var a=this._data.boxs[0],b=0;b<a.globes.length;b++){var c=a.globes[b];if(c.title_globe)return c.text_text}return""},this.initSort=function(a){this._canvas.style.display="none",this._boxSorter=new n(a,this._data),this._boxSorter.init(),null!=this._pageCounterDisplay&&(this._pageCounterDisplay.parentNode.style.display="none")},this.finishSort=function(){var a=[],b=this._boxSorter.getSortOrder();this.changeToEditMode();for(var c=0;c<b.length;c++)a.push(this._data.boxs[b[c]]);this._data.boxs=a},this.changeToEditMode=function(){this._boxSorter.hide(),this._canvas.style.display="block",null!=this._pageCounterDisplay&&(this._pageCounterDisplay.parentNode.style.display="block")},this.changeBox=function(a){a>=0&&a<this._data.boxs.length&&(this.updateData(),this.activeBox=a,this.comicBox.init(this._data.boxs[this.activeBox],this._data.images,this.activeBox>0),this._updatePageCounter())},this.removeBox=function(){this._data.boxs.splice(this.activeBox,1),this._data.previews=[],this.activeBox>this._data.boxs.length-1&&this.activeBox--,this.comicBox.init(this._data.boxs[this.activeBox],this._data.images,this.activeBox>0),this._updatePageCounter()},this.updateData=function(){this._data.boxs[this.activeBox]=this.comicBox.getJson()},this.initPreviews=function(){for(var a=0;a<this._data.boxs.length;a++)this.storePreview(a)},this.storePreview=function(a){var b=document.createElement("canvas");b.width=this._canvas.width,b.height=this._canvas.height;var c=new k(b),d=this;c.init(this._data.boxs[a],this._data.images,!1,{canvas:b,order:a},function(a){d._data.previews[a.order]=a.canvas.toDataURL("image/png")})},this._updatePageCounter=function(){null!=this._pageCounterDisplay&&(this._pageCounterDisplay.innerHTML=this.activeBox+1+" "+h("of")+" "+this._data.boxs.length),null!=this._prevButton&&(this._prevButton.disabled=0==this.activeBox),null!=this._nextButton&&(this._nextButton.disabled=this.activeBox==this._data.boxs.length-1),null!=this._sortButton&&(this._sortButton.disabled=this._data.boxs.length<3)},this.addGlobe=function(a){this.comicBox.addGlobe(a)},this.showPreviousBox=function(){var a=this.activeBox-1;this.changeBox(a)},this.showNextBox=function(){var a=this.activeBox+1;this.changeBox(a)},this.addImage=function(a){void 0==this._data.images&&(this._data.images={}),this._imageCounter=this._imageCounter+1;for(var b="bAcKgRoUnD_"+this._imageCounter;void 0!=this._data.images[b];)this._imageCounter=this._imageCounter+1,b="bAcKgRoUnD_"+this._imageCounter;var c={image_name:b,globes:[]};this._data.boxs.push(c),this._data.images[b]=a,this.changeBox(this._data.boxs.length-1)},this.getData=function(){return this.updateData(),this._data},this.attachPageCounterViewer=function(a){this._pageCounterDisplay=a.children[0],this._updatePageCounter()},this.attachPrevNextButtons=function(a,b){this._prevButton=a,this._nextButton=b,this._updatePageCounter()},this.attachSortButton=function(a){this._sortButton=a,this._updatePageCounter()},this.saveAsImage=function(a){this.showWait();var b=this._data.boxs.length,d=20;if("0"==a)var e=(this._canvas.width+d)*b+d,g=this._canvas.height+2*d;else if("1"==a)var e=this._canvas.width+2*d,g=(this._canvas.height+d)*b+d;else if("2"==a)var e=2*this._canvas.width+3*d,g=(this._canvas.height+d)*Math.ceil(b/2)+d;var i=document.createElement("canvas");i.width=e,i.height=g;var j=i.getContext("2d");j.fillStyle="#FFFFFF",j.fillRect(0,0,e,g);for(var l=0,m=0;m<b;m++){var n=this,o=document.createElement("canvas");o.width=this._canvas.width,o.height=this._canvas.height;var p=new k(o);p.init(this._data.boxs[m],this._data.images,!1,o,function(e){var g=new Image;g.src=e.toDataURL("image/png"),g.addEventListener("load",function(){if("0"==a)var e=d+(n._canvas.width+d)*l,g=d;else if("1"==a)var e=d,g=d+(n._canvas.height+d)*l;else if("2"==a)var e=d+l%2*(n._canvas.width+d),g=d+Math.floor(l/2)*(n._canvas.height+d);if(j.drawImage(this,e,g),l++>=b-1){var k=i.toDataURL("image/png"),m={mimetype:"image/png",title:"Image FotoToon",activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};c.create(m,function(a){a?(console.log("error saving image in journal"),f.log(h("SavingError"))):(console.log("image saved in journal."),f.log(h("ImageSaved"))),n.hideWait()},k)}})})}}}function k(a,b){this.canvas=a,this._model=b,this._width=a.width-2*o,this._height=a.height-2*o,this.stage=new createjs.Stage(a),createjs.Touch.enable(this.stage),this.globes=[],this._globeSelected=null,this._textpalette=null,this.init=function(b,c,d,e,f){this._data=b,this.imagesData=c,this.canRemove=d,this.globes=[],this.stage.removeAllChildren(),this._backContainer=new createjs.Container;var g=new createjs.Shape;g.graphics.setStrokeStyle(o,"round"),g.graphics.beginStroke(p).drawRect(o,o,this._width,this._height),this.stage.addChild(this._backContainer),this._backContainer.addChild(g),this._backContainer.cache(0,0,this.canvas.width,this.canvas.height),null!=this._data&&(""!=this._data.image_name&&void 0!=this._data.image_name?(this._image_x=this._data.img_x,this._image_y=this._data.img_y,this._image_width=this._data.img_w,this._image_height=this._data.img_h,this._image_name=this._data.image_name,this._slideshow_duration=this._data.slideshow_duration,null!=this.imagesData&&this._setBackgroundImageDataUrl(this.imagesData[this._image_name],e,f)):(this._image_x=0,this._image_y=0,this._image_width=a.width,this._image_height=a.height,this._image_name="",this._slideshow_duration=10,this.createGlobes(),f&&f(e))),this.stage.update()},this._setBackgroundImageDataUrl=function(a,b,c){this._image_x=0,this._image_y=0,this._image_width=this._width,this._image_height=this._height;var d=new Image,e=this;d.addEventListener("load",function(){bitmap=new createjs.Bitmap(d),bitmap.setBounds(0,0,d.width,d.height);var a=e._width/d.width,f=e._height/d.height,g=Math.min(a,f);bitmap.mouseEnabled=!1,bitmap.x=o,bitmap.y=o,bitmap.scaleX=g,bitmap.scaleY=g,e._backContainer.addChildAt(bitmap,0),e.canRemove?i(e,"./icons/remove.svg",function(a,b){b.x=0,b.y=a._height-b.height,b.visible=!0,a._removeButton=b,a._backContainer.addChildAt(b,1),a._backContainer.updateCache(),b.on("click",function(b){a.remove()}),a.createGlobes()}):(e._backContainer.updateCache(),e.createGlobes()),c&&c(b)}),d.src=a},this.remove=function(){console.log("remove"),this._model.removeBox()},this.attachTextEditionPalette=function(a){this._textpalette=a;var b=this;this._textpalette.editorElem.addEventListener("input",function(){null!=b.getSelectedGlobe()&&b.getSelectedGlobe().getTextViewer().setText(this.value)},!1);for(var c=this._textpalette.editorElem,d=this._textpalette.colorButtons,e=0;e<d.length;e++)d[e].addEventListener("click",function(a){c.style.color=b.getSelectedGlobe().getTextViewer().setColor(this.value)});this._textpalette.incTextBtn.addEventListener("click",function(a){c.style.fontSize=b.getSelectedGlobe().getTextViewer().incSize()+"px"}),this._textpalette.decTextBtn.addEventListener("click",function(a){c.style.fontSize=b.getSelectedGlobe().getTextViewer().decSize()+"px"}),this._textpalette.boldTextBtn.addEventListener("click",function(a){var d=b.getSelectedGlobe().getTextViewer().toggleBold();d?c.style.fontWeight="bold":c.style.fontWeight="normal"}),this._textpalette.italicTextBtn.addEventListener("click",function(a){var d=b.getSelectedGlobe().getTextViewer().toggleItalic();d?c.style.fontStyle="italic":c.style.fontStyle="normal"})},this.popupTextEditionPalette=function(){null!=this._textpalette&&(this._textpalette.popUp(),this._textpalette.editorElem.focus())},this.getSelectedGlobe=function(){return this._globeSelected},this.isGlobeSelected=function(a){return this._globeSelected==a},this.selectGlobe=function(a){this._globeSelected=a;var b=this._textpalette;this.globes.forEach(function(c,d,e){c!=a?c.setSelected(!1):null!=b&&(b.setText(c.getTextViewer().getText()),c.getTextViewer().applyTextProperties(b.editorElem))})},this.addGlobe=function(a){var b=100,c=50;globeData={globe_type:a,x:100,y:100,width:b,height:c,point_0:b/2,point_1:c/2,radio:100,direction:s,mode:w},a==D&&(globeData.globe_type=z,globeData.mode=x);var d=new m(this,globeData);this.globes.push(d),this.stage.update()},this.getJson=function(){jsonData={},jsonData.img_x=this._image_x,jsonData.img_y=this._image_y,jsonData.img_w=this._image_width,jsonData.img_h=this._image_height,jsonData.image_name=this._image_name,jsonData.slideshow_duration=this._slideshow_duration,jsonData.globes=[];for(var a=0;a<this.globes.length;a++)globe=this.globes[a],globeData={},globeData.globe_type=globe._type,globeData.x=globe._x,globeData.y=globe._y,globeData.width=globe._width,globeData.height=globe._height,globe._type!=C&&(globeData.point_0=globe._point[0],globeData.point_1=globe._point[1]),globe._type==z&&(globeData.mode=globe._mode),globeData.radio=globe._radio,globeData.direction=globe._direction,globeData.title_globe=globe._isTitleGlobe,globeData.text_text=globe._textViewer.getText(),globeData.text_font_description=globe._textViewer.getCairoFontFormat(),globeData.text_color=globe._textViewer.HtmlToGdkColor(globe._textViewer._color),globeData.text_width=globe._textViewer._width,globeData.text_height=globe._textViewer._height,jsonData.globes.push(globeData);return jsonData},this.createGlobes=function(){for(var a=this._data.globes,b=0;b<a.length;b++){var c=new m(this,a[b]);this.globes.push(c)}this.stage.update()}}function l(a,c){return this._globe=a,this._globeData=c,this.init=function(){this._text="",this._color=p,this._width=a._width-20,this._height=y/2,this._size=E,this._bold=!1,this._italic=!1,null!=this._globeData&&(void 0!=this._globeData.text_text&&(this._text=this._globeData.text_text),void 0!=this._globeData.text_font_description&&this.ReadHtmlFontFormat(this._globeData.text_font_description),void 0!=this._globeData.text_color&&(this._color=this.GdkToHtmlColor(this._globeData.text_color)),void 0!=this._globeData.text_width&&(this._width=this._globeData.text_width),void 0!=this._globeData.text_height&&(this._height=this._globeData.text_height),this._textView=null)},this.GdkToHtmlColor=function(a){return rh=(a[0]/65535*255).toString(16),gh=(a[1]/65535*255).toString(16),bh=(a[2]/65535*255).toString(16),rh.length<2&&(rh="0"+rh),gh.length<2&&(gh="0"+gh),bh.length<2&&(bh="0"+bh),"#"+rh+gh+bh},this.HtmlToGdkColor=function(a){return rh=a.substr(1,2),gh=a.substr(3,2),bh=a.substr(5,2),r=parseInt(rh,16)/255*65535,g=parseInt(gh,16)/255*65535,b=parseInt(bh,16)/255*65535,[r,g,b]},this.ReadHtmlFontFormat=function(a){var b=a.split(" "),c=b[0];2==b.length?(size=b[1],style=""):(style=b[1]+" ",size=b[2]),this._size=Number(size),this._family=c,this._bold=style.toLowerCase().indexOf("bold")>-1,this._italic=style.toLowerCase().indexOf("italic")>-1},this.getCairoFontFormat=function(){var a=this._family;return this._bold&&(a+=" bold"),this._italic&&(a+=" italic"),a+" "+this._size},this.getFontDescription=function(){var a="";return this._bold&&(a+=" bold"),this._italic&&(a+=" italic"),a+" "+this._size+"px "+this._family},this.update=function(){null!=this._textView&&this._globe._stage.removeChild(this._textView),this._textView=new createjs.Text(this._text,this.getFontDescription(),this._color),this._textView.textAlign="center",this._textView.lineWidth=2*this._globe._width,this._textView.x=this._globe._x,this._textView.y=this._globe._y-this._textView.getMeasuredHeight()/2,this._globe._stage.addChild(this._textView),this._globe._stage.update()},this.getText=function(){return this._text},this.setText=function(a){this._text=a,this.update()},this.setColor=function(a){return this._color=a,this.update(),this._color},this.incSize=function(){return this._size<60&&(this._size=this._size+Math.round(this._size/4),this.update()),this._size},this.decSize=function(){return this._size>10&&(this._size=this._size-Math.round(this._size/4),this.update()),this._size},this.toggleBold=function(){return this._bold=!this._bold,this.update(),this._bold},this.toggleItalic=function(){return this._italic=!this._italic,this.update(),this._italic},this.applyTextProperties=function(a){a.style.fontSize=this._size+"px",a.style.color=this._color,this._italic?a.style.fontStyle="italic":a.style.fontStyle="normal",this._bold?a.style.fontWeight="bold":a.style.fontWeight="normal"},this.remove=function(){this._globe._stage.removeChild(this._textView)},this.init(),this}function m(a,b){this._box=a,this._stage=a.stage,this._shapeControls=null,this._pointerControl=null,this._resizeButton=null,this._editButton=null,this._rotateButton=null,this._removeButton=null,this._shapeChanged=!0,this._pointerChanged=!0,this.init=function(){null==b?(this._type=z,this._x=100,this._y=100,this._width=100,this._height=50,this._point=[this._width/2,this._height/2],this._radio=100,this._direction=s,this._textViewer=new l(this,null),this._mode=w,this._isTitleGlobe=!1):(this._type=b.globe_type,this._x=b.x,this._y=b.y,this._width=b.width,this._height=b.height,this._type!=C?this._point=[b.point_0,b.point_1]:this._point=[0,0],this._type==z?this._mode=b.mode:this._mode=w,this._radio=b.radio,this._direction=b.direction,this._textViewer=new l(this,b),this._isTitleGlobe=b.title_globe),this._shape=null},this.createShape=function(){null!=this._shape&&(this._stage.removeChild(this._shape),this._type==A&&this._stage.removeChild(this._shapeCircles));var a=this._width/this._radio,b=this._height/this._radio,c=this._x/a,d=this._y/b;this._type==A?this.createShapeCloud(c,d,a,b):this._type==B?this.createShapeExclamation(c,d,a,b):this._type==C?this.createShapeRectangle():this.createShapeGlobe(c,d,a,b),this._shape.on("click",function(a){this.setSelected(!0)},this),this._shape.on("pressmove",function(a){this._x=a.stageX,this._y=a.stageY,this.setSelected(!0),this.update()},this)},this.getSelected=function(){return this._box.isGlobeSelected(this)},this.setSelected=function(a){a?(this._box.selectGlobe(this),this._shapeControls.visible=!0,this._type!=C&&(this._pointerControl.visible=!0,this._rotateButton.visible=!0),this._resizeButton.visible=!0,this._editButton.visible=!0,this._isTitleGlobe||(this._removeButton.visible=!0)):(this._shapeControls.visible=!1,this._type!=C&&(this._pointerControl.visible=!1,this._rotateButton.visible=!1),this._resizeButton.visible=!1,this._editButton.visible=!1,this._isTitleGlobe||(this._removeButton.visible=!1)),this._stage.update()},this.getTextViewer=function(){return this._textViewer},this.createShapeGlobe=function(a,b,c,d){switch(this._direction){case s:var e=100,f=80;break;case v:var e=10,f=350;break;case u:var e=190,f=170;break;case t:var e=280,f=260}this._shape=new createjs.Shape,this._shape.name="globe",this._stage.addChild(this._shape),this._shape.graphics.setStrokeStyle(o,"round",null,null,!0),this._shape.graphics.beginStroke(p),this._shape.graphics.beginFill(q),this._mode==x&&this._shape.graphics.setStrokeDash([3]),this._shape.graphics.arc(a,b,this._radio,e/180*Math.PI,f/180*Math.PI),point_pos=this.getPointPosition(!0),this._shape.graphics.lineTo(point_pos[0],point_pos[1]),this._shape.graphics.closePath(),this._shape.graphics.endStroke(),this._shape.setTransform(0,0,c,d)},this.createShapeRectangle=function(){var a=this._x,b=this._y,c=this._width,d=this._height;this._shape=new createjs.Shape,this._shape.name="rect",this._stage.addChild(this._shape),this._shape.graphics.setStrokeStyle(o,"round",null,null,!0),this._shape.graphics.beginStroke(p),this._shape.graphics.beginFill(q),this._shape.graphics.rect(a-c,b-d,2*c,2*d),this._shape.graphics.endStroke()},this.createShapeCloud=function(a,b,c,d){this._shape=new createjs.Shape,this._shape.name="cloud",this._stage.addChild(this._shape),this._shape.graphics.setStrokeStyle(o,"round",null,null,!0),this._shape.graphics.beginStroke(p),this._shape.graphics.beginFill(q);for(var e=this._width/c,f=this._height/d,g=36,h=0,i=0;i<g;i++){var j=2*i*(Math.PI/g),k=Math.sin(j),l=Math.cos(j);if(0==h)var m=a+e*l,n=b+f*k;else if(1==h)var r=a+e*l,s=b+f*k;else if(2==h)var t=a+.8*e*l,u=b+.8*f*k;2==h&&this._shape.graphics.bezierCurveTo(m,n,r,s,t,u),h+=1,3==h&&(h=0),0==i&&this._shape.graphics.moveTo(m,n)}m=a+e*l,n=b+f*k,r=a+e,s=b,t=a+e,u=b,this._shape.graphics.bezierCurveTo(m,n,r,s,t,u),this._shape.graphics.closePath(),this._shape.graphics.endStroke(),firstCirclePos=this.getCloudPointPosition(),this._shapeCircles=new createjs.Shape,this._shapeCircles.name="cloud circles",this._stage.addChild(this._shapeCircles),this._shapeCircles.graphics.setStrokeStyle(o,"round"),this._shapeCircles.graphics.beginStroke(p),this._shapeCircles.graphics.beginFill(q),this._shapeCircles.graphics.arc(firstCirclePos[0],firstCirclePos[1],7,0,2*Math.PI),this._shapeCircles.graphics.endStroke(),secondCirclePos=this.getPointPosition(!1),this._shapeCircles.graphics.beginStroke(p),this._shapeCircles.graphics.beginFill(q),this._shapeCircles.graphics.arc(secondCirclePos[0],secondCirclePos[1],5,0,2*Math.PI),this._shapeCircles.graphics.endStroke(),this._shape.setTransform(0,0,c,d)},this.getCloudPointPosition=function(){var a=this._x,b=this._y,c=this._width,d=this._height;switch(this._direction){case s:return[a+this._point[0]/2,b+d+this._point[1]/2];case v:return[a+c+this._point[0]/2,b+this._point[1]/2];case u:return[a-c-this._point[0]/2,b+this._point[1]/2];case t:return[a+this._point[0]/2,b-d-this._point[1]/2]}},this.createShapeExclamation=function(a,b,c,d){this._shape=new createjs.Shape,this._shape.name="exclamation",this._stage.addChild(this._shape),this._shape.graphics.setStrokeStyle(o,"round",null,null,!0),this._shape.graphics.beginStroke(p),this._shape.graphics.beginFill(q);for(var e=this._width/c,f=this._height/d,g=24,h=0;h<g;h++){var i=2*h*(Math.PI/g),j=Math.sin(i),k=Math.cos(i);h%2>0?(xi=a+.8*e*k,yi=b+.8*f*j):(xi=a+e*k,yi=b+f*j),(this._direction==s&&6==h||this._direction==v&&0==h||this._direction==u&&12==h||this._direction==t&&18==h)&&(pos=this.getPointPosition(!0),xi=pos[0],yi=pos[1]),0==h?this._shape.graphics.moveTo(xi,yi):this._shape.graphics.lineTo(xi,yi)}this._shape.graphics.closePath(),this._shape.graphics.endStroke(),this._shape.setTransform(0,0,c,d)},this.createControls=function(){var a=this._x,b=this._y,c=this._width,d=this._height;if(null!=this._shapeControls&&this._shapeChanged&&(this._stage.removeChild(this._shapeControls),this._shapeControls=null),null==this._shapeControls?(this._shapeControls=new createjs.Shape,this._shapeControls.name="control_rect",this._shapeControls.graphics.setStrokeStyle(1,"round"),this._shapeControls.graphics.beginStroke(q),this._shapeControls.x=a,this._shapeControls.y=b,this._shapeControls.graphics.rect(-c,-d,2*c,2*d),this._shapeControls.graphics.setStrokeDash([2]),this._shapeControls.graphics.beginFill("rgba(0, 0, 0, 0)"),this._shapeControls.graphics.beginStroke(p),this._shapeControls.graphics.rect(-c,-d,2*c,2*d),this._shapeControls.graphics.endStroke(),this._shapeControls.visible=this.getSelected(),this._stage.addChild(this._shapeControls)):(this._shapeControls.visible=this.getSelected(),this._shapeControls.x=a,this._shapeControls.y=b),this._type!=C)if(null!=this._pointerControl&&(this._pointerChanged||this._shapeChanged)&&(this._stage.removeChild(this._pointerControl),this._pointerControl=null),null==this._pointerControl){this._pointerControl=new createjs.Shape,this._pointerControl.x=a,this._pointerControl.y=b,point_pos=this.getPointPositionRelative(),this._pointerControl.graphics.beginStroke(p),this._pointerControl.graphics.arc(point_pos[0],point_pos[1],y/2,0,2*Math.PI),this._pointerControl.graphics.endStroke();var e=new createjs.Shape;e.graphics.beginFill("#000").arc(point_pos[0],point_pos[1],y/2,0,2*Math.PI),this._pointerControl.hitArea=e,this._pointerControl.visible=this.getSelected(),this._stage.addChild(this._pointerControl),this._pointerControl.on("pressmove",function(a){this.setPointPosition(a.stageX,a.stageY),this._box.selectGlobe(this),this._pointerChanged=!0,this.update()},this)}else this._pointerControl.x=a,this._pointerControl.y=b,this._pointerControl.visible=this.getSelected();null==this._resizeButton?i(this,"./icons/resize.svg",function(a,b){b.x=a._x-a._width-b.width/2,b.y=a._y-a._height-b.height/2,b.visible=a.getSelected(),a._resizeButton=b,a._stage.addChild(b),a._stage.update(),b.on("pressmove",function(b){this._width=Math.max(a._x-b.stageX,y/2),this._height=Math.max(a._y-b.stageY,y/2),this._shapeChanged=!0,this.update()},a)}):(this._resizeButton.x=this._x-this._width-this._resizeButton.width/2,this._resizeButton.y=this._y-this._height-this._resizeButton.height/2,this._resizeButton.visible=this.getSelected()),null==this._editButton?i(this,"./icons/edit.svg",function(a,b){b.x=a._x+a._width-b.width/2,b.y=a._y-a._height-b.height/2,b.visible=a.getSelected(),a._editButton=b,a._stage.addChild(b),a._stage.update(),b.on("click",function(b){a._box.popupTextEditionPalette()})}):(this._editButton.x=this._x+this._width-this._editButton.width/2,this._editButton.y=this._y-this._height-this._editButton.height/2,this._editButton.visible=this.getSelected()),this._type!=C&&(null==this._rotateButton?i(this,"./icons/object_rotate_right.svg",function(a,b){b.x=a._x+a._width-b.width/2,b.y=a._y+a._height-b.height/2,b.visible=a.getSelected(),a._rotateButton=b,a._stage.addChild(b),a._stage.update(),b.on("click",function(b){a.rotate()})}):(this._rotateButton.x=this._x+this._width-this._rotateButton.width/2,this._rotateButton.y=this._y+this._height-this._rotateButton.height/2,this._rotateButton.visible=this.getSelected())),this._isTitleGlobe||(null==this._removeButton?i(this,"./icons/remove.svg",function(a,b){b.x=a._x-a._width-b.width/2,b.y=a._y+a._height-b.height/2,b.visible=a.getSelected(),a._removeButton=b,a._stage.addChild(b),a._stage.update(),b.on("click",function(b){a.remove()})}):(this._removeButton.x=this._x-this._width-this._removeButton.width/2,this._removeButton.y=this._y+this._height-this._removeButton.height/2,this._removeButton.visible=this.getSelected())),this._shapeChanged=!1,this._pointerChanged=!1},this.rotate=function(){switch(this._direction){case s:this._direction=u;break;case v:this._direction=s;break;case u:this._direction=t;break;case t:this._direction=v}var a=this._point[0];this._point[0]=this._point[1],this._point[1]=a,this._pointerChanged=!0,this.update()},this.remove=function(){var a=this._box.globes.indexOf(this);a!=-1&&(this._box.globes.splice(a,1),this._stage.removeChild(this._shape),this._stage.removeChild(this._shapeControls),this._type!=C&&(this._stage.removeChild(this._pointerControl),this._stage.removeChild(this._rotateButton)),this._type==A&&this._stage.removeChild(this._shapeCircles),this._stage.removeChild(this._resizeButton),this._stage.removeChild(this._editButton),this._stage.removeChild(this._removeButton),this._textViewer.remove(),this._stage.update())},this.update=function(){this.createShape(),this._textViewer.update(),this.createControls(),this._stage.update()},this.getPointPosition=function(a){var b=1,c=1;a&&(b=this._width/this._radio,c=this._height/this._radio);var d=this._x/b,e=this._y/c,f=this._width/b,g=this._height/c;switch(this._direction){case s:return[d+this._point[0]/b,e+g+this._point[1]/c];case v:return[d+f+this._point[0]/b,e+this._point[1]/c];case u:return[d-f-this._point[0]/b,e+this._point[1]/c];case t:return[d+this._point[0]/b,e-g-this._point[1]/c]}},this.getPointPositionRelative=function(){var a=this._width,b=this._height;switch(this._direction){case s:return[this._point[0],b+this._point[1]];case v:return[a+this._point[0],this._point[1]];case u:return[-a-this._point[0],this._point[1]];case t:return[this._point[0],-b-this._point[1]]}},this.setPointPosition=function(a,b){switch(this._direction){case s:this._point[0]=a-this._x,this._point[1]=b-this._y-this._height;break;case v:this._point[0]=a-this._x-this._width,this._point[1]=b-this._y;break;case u:this._point[0]=-a+this._x-this._width,this._point[1]=b-this._y;break;case t:this._point[0]=a-this._x,this._point[1]=-b+this._y-this._height}},this.init(),this.update()}function n(a,b){this.canvas=a,this._data=b,this._width=a.width-2*o,this._height=a.height-2*o,this._previewWidth=4*this._height/3,this._previewBitmaps=[],this._deltaX=null,this.stage=new createjs.Stage(a),createjs.Touch.enable(this.stage),this.init=function(){this.canvas.style.display="block",this._backContainer=new createjs.Container;var a=new createjs.Shape;a.graphics.setStrokeStyle(o,"round"),a.graphics.beginStroke(p).drawRect(o,o,this._width,this._height),this.stage.addChild(this._backContainer),this._backContainer.addChild(a),this._backContainer.cache(0,0,this.canvas.width,this.canvas.height),this.loadPreviews(),this.stage.update()},this.hide=function(){this.canvas.style.display="none"},this.loadPreviews=function(){for(var a=0;a<this._data.boxs.length;a++){var b=this._data.previews[a];if(void 0==b){var c=this._data.boxs[a].image_name;""!=c&&void 0!=c&&(b=this._data.images[c])}void 0!=b&&this._createPreview(b,a)}},this.getSortOrder=function(){for(var a=[0],b=0;b<this._previewBitmaps.length;b++)a.push(this._previewBitmaps[b]._order);return a},this._createPreview=function(a,b){var c=new Image,d=this;c.addEventListener("load",function(){bitmap=new createjs.Bitmap(this),bitmap.setBounds(0,0,this.width,this.height),bitmap._order=b;var a=d._previewWidth/this.width,c=d._height/this.height,e=Math.min(a,c);bitmap.x=d._previewWidth*b,bitmap.y=o,bitmap.scaleX=e,bitmap.scaleY=e;var f=new createjs.Shape;f.graphics.beginFill("#000").drawRect(0,0,this.width,this.height),bitmap.hitArea=f,b>0&&(d._previewBitmaps.push(bitmap),bitmap.on("pressmove",function(a){if(console.log("TOON pressmove"),null==d._deltaX){d._deltaX=a.stageX-a.target.x;var b=a.target;d.stage.sortChildren(function(a,c){return a==b?1:0})}new_x=a.stageX-d._deltaX,new_x>this._previewWidth/2&&(a.target.x=new_x,d.stage.update())},d),bitmap.on("pressup",function(a){console.log("TOON pressup"),d._deltaX=null,d._previewBitmaps.sort(function(a,b){return a.x-b.x});for(var b=0;b<d._previewBitmaps.length;b++)d._previewBitmaps[b].x=d._previewWidth*(b+1);d.stage.update()},d)),d.stage.addChildAt(bitmap,0),d.stage.update()}),c.src=a}}d.getEnvironment(function(a,b){var c="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,d=b.user?b.user.language:c;e.language.code=d,console.log("LANG "+d)});var o=(/Android/i.test(navigator.userAgent),window.innerWidth<700||window.innerHeight<600,3),p="#000000",q="#ffffff",s="abajo",t="arriba",u="izq",v="der",w="normal",x="despacio",y=40,z="GLOBE",A="CLOUD",B="EXCLAMATION",C="RECTANGLE",D="WHISPER",E=14;return toon={},toon.Model=j,toon.TYPE_GLOBE=z,toon.TYPE_CLOUD=A,toon.TYPE_EXCLAMATION=B,toon.TYPE_RECTANGLE=C,toon.TYPE_WHISPER=D,toon});