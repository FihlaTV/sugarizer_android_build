/*! Sugarizer 2017-09-04 */
function SVG(){this.init=function(){this._x=0,this._y=0,this._minX=1e4,this._minY=1e4,this._maxX=-1e4,this._maxY=-1e4,this._width=0,this._height=0,this.docks=[],this._scale=1,this._orientation=0,this._radius=8,this._strokeWidth=1,this._innies=[],this._outie=!1,this._innieX1=(9-this._strokeWidth)/2,this._innieY1=3,this._innieX2=(9-this._strokeWidth)/2,this._innieY2=(9-this._strokeWidth)/2,this._inniesSpacer=9,this._padding=this._innieY1+this._strokeWidth,this._slot=!0,this._cap=!1,this._tab=!0,this._bool=!1,this._slotX=10,this._slotY=2,this._tail=!1,this._porch=!1,this._porchX=this._innieX1+this._innieX2+4*this._strokeWidth,this._porchY=this._innieY2,this._expandX=30,this._expandX2=0,this._expandY=0,this._expandY2=0,this._clampCount=1,this._clampSlots=[1],this._slotSize=21,this._arm=!0,this._else=!1,this._draw_inniess=!0,this._fill="fill_color",this._stroke="stroke_color",this.margins=[0,0,0,0],this._fontSize=10},this.setFontSize=function(a){this._fontSize=a},this.setDrawInniess=function(a){this._draw_inniess=a},this.getWidth=function(){return this._width},this.getHeight=function(){return this._height},this.clearDocks=function(){this.docks=[]},this.setScale=function(a){this._scale=a},this.setOrientation=function(a){this._orientation=a},this.setClampCount=function(a){this._clampCount=a;var b=this._clampSlots.length;if(b<a)for(var c=0;c<a-b;c++)this._clampSlots.push(1)},this.setClampSlots=function(a,b){a>this._clampCount.length-1&&this.setClampCount(a+1),this._clampSlots[a]=b},this.setExpand=function(a,b,c,d){this._expandX=a,this._expandY=b,this._expandX2=c,this._expandY2=d},this.setstrokeWidth=function(a){this._strokeWidth=a,this._calc_porch_params()},this.setColors=function(a){this._fill=a[0],this._stroke=a[1]},this.setFillColor=function(a){this._fill=a},this.setStrokeColor=function(a){this._stroke=a},this.setInnies=function(a){for(var b=0;b<a.length;b++)this._innies.push(a[b])},this.setOutie=function(a){this._outie=a},this.setSlot=function(a){this._slot=a,a&&(this._cap=!1)},this.setCap=function(a){this._cap=a,a&&(this._slot=!1)},this.setTab=function(a){this._tab=a,a&&(this._tail=!1)},this.setTail=function(a){this._tail=a,a&&(this._tab=!1)},this.setPorch=function(a){this._porch=a},this.setBoolean=function(a){this._bool=a},this.setElse=function(a){this._else=a},this.setArm=function(a){this._arm=a},this._resetMinMax=function(){this._minX=1e4,this._minY=1e4,this._maxX=-1e4,this._maxY=-1e4},this._checkMinMax=function(){this._x<this._minX&&(this._minX=this._x),this._y<this._minY&&(this._minY=this._y),this._x>this._maxX&&(this._maxX=this._x),this._y>this._maxY&&(this._maxY=this._y)},this._calculateXY=function(){var a=this._strokeWidth/2,b=this._strokeWidth/2+this._radius;return this.margins[0]=a+this._strokeWidth+.5,this.margins[1]=this._strokeWidth+.5,this._outie&&(a+=this._innieX1+this._innieX2,this.margins[0]+=this._innieX1+this._innieX2),this._cap?(b+=3*this._slotY,this.margins[1]+=3*this._slotY):this._slot&&(this.margins[1]+=this._slotY),this.margins[0]*=this._scale,this.margins[1]*=this._scale,[a,b]},this._calculateWH=function(a){a?this._width=(this._maxX-this._minX+this._strokeWidth)*this._scale:this._width=(this._maxX-this._minX)*this._scale,0===this.margins[2]?this.margins[2]=(this._strokeWidth+.5)*this._scale:this.margins[2]=this._width-this.margins[2],a?this._height=(this._maxY-this._minY+this._strokeWidth)*this._scale:this._height=(this._maxY-this._minY)*this._scale,0===this.margins[3]?this._tab?this.margins[3]=(this._slotY+this._strokeWidth+.5)*this._scale:this.margins[3]=(2*this._slotY+this._strokeWidth+.5)*this._scale:this.margins[3]=this._height-this.margins[3]},this._newPath=function(a,b){return this._x=a,this._y=b,'<path d="m'+a+" "+b+" "},this._closePath=function(){return'z" '},this.text=function(a,b,c,d,e,f){switch(this._x=a,this._y=b,this._checkMinMax(),this._x=a+d,this._y=b-c,this._checkMinMax(),e){case"left":case"start":var g="start";break;case"middle":case"center":var g="middle";break;case"right":case"end":var g="end"}for(var h=b,i=f.split("\n"),j='<text style="font-size:'+c+"px;fill:#000000;font-family:sans-serif;text-anchor:"+g+'">',k=0;k<i.length;k++)j+='<tspan x="'+a+'" y="'+h+'">'+i[k]+"</tspan>",h+=c;return j+="</text>"},this._lineTo=function(a,b){return this._checkMinMax(),this._x===a&&this._y===b?"":(this._x=a,this._y=b,this._checkMinMax(),"L "+a+" "+b+" ")},this._rLineTo=function(a,b){return 0===a&&0===b?"":this._lineTo(this._x+a,this._y+b)},this._arcTo=function(a,b,c,d,e,f){return this._checkMinMax(),0===c?this._lineTo(a,b):(this._x=a,this._y=b,this._checkMinMax(),"A "+c+" "+c+" "+d+" "+e+" "+f+" "+a+" "+b+" ")},this._rarcTo=function(a,b,c,d,e){if(0===this._radius)return"";var f=this._x+a*this._radius,g=this._y+b*this._radius;return this._arcTo(f,g,this._radius,c,d,e)},this._corner=function(a,b,c,d,e,f,g,h){var i="";if(this._radius>0){var j=this._radius/2;f&&(a*b===1?i+=this._rLineTo(a*j,0):h||(i+=this._rLineTo(0,b*j)));var k=this._x+a*j,l=this._y+b*j;i+=this._arcTo(k,l,j,c,d,e),g&&(a*b===1?i+=this._rLineTo(0,b*j):h||(i+=this._rLineTo(a*j,0)))}return i},this._iCorner=function(a,b,c,d,e,f,g){var h=this._strokeWidth+this._radius/2;if(f)if(a*b===-1)var i=this._rLineTo(a*(h-this._strokeWidth),0);else var i=this._rLineTo(0,b*(h-this._strokeWidth));else var i="";var j=this._x+a*h,k=this._y+b*h;return i+=this._arcTo(j,k,h,c,d,e),g&&(i+=a*b===-1?this._rLineTo(0,b*(h-this._strokeWidth)):this._rLineTo(a*(h-this._strokeWidth),0)),i},this._doInnie=function(){return this.docks.push([(this._x+this._strokeWidth)*this._scale,(this._y+this._innieY2)*this._scale]),0===this.margins[2]&&(this.margins[1]=(this._y-this._innieY1)*this._scale,this.margins[2]=(this._x-this._innieX1-this._innieX2-2*this._strokeWidth)*this._scale),this.margins[3]=(this._y+this._innieY2+this._innieY1)*this._scale,this._rLineTo(-this._innieX1,0)+this._rLineTo(0,-this._innieY1)+this._rLineTo(-this._innieX2,0)+this._rLineTo(0,this._innieY2+2*this._innieY1)+this._rLineTo(this._innieX2,0)+this._rLineTo(0,-this._innieY1)+this._rLineTo(this._innieX1,0)},this._doOutie=function(){return this._outie?(this.docks.unshift([this._x*this._scale,this._y*this._scale]),this._rLineTo(0,-this._strokeWidth)+this._rLineTo(-this._innieX1-2*this._strokeWidth,0)+this._rLineTo(0,this._innieY1)+this._rLineTo(-this._innieX2+2*this._strokeWidth,0)+this._rLineTo(0,-this._innieY2-2*this._innieY1+2*this._strokeWidth)+this._rLineTo(this._innieX2-2*this._strokeWidth,0)+this._rLineTo(0,this._innieY1)+this._rLineTo(this._innieX1+2*this._strokeWidth,0)+this._rLineTo(0,-this._strokeWidth)):this._rLineTo(0,-this._innieY2)},this._doSlot=function(){if(this._slot){var a=this._x+this._slotX/2;return this.docks.push([a*this._scale,this._y*this._scale]),this._rLineTo(0,this._slotY)+this._rLineTo(this._slotX,0)+this._rLineTo(0,-this._slotY)}if(this._cap){var a=this._x+this._slotX/2;return this.docks.push([a*this._scale,this._y*this._scale]),this._rLineTo(this._slotX/2,3*-this._slotY)+this._rLineTo(this._slotX/2,3*this._slotY)}return this._rLineTo(this._slotX,0)},this._doTail=function(){if(this._outie)return this._rLineTo(-this._slotX,0);if(this._tail){var a=this._x+this._slotX/2;return this.docks.push([a*this._scale,this._y*this._scale]),this._rLineTo(-this._slotX/2,3*this._slotY)+this._rLineTo(-this._slotX/2,3*-this._slotY)}return this._rLineTo(-this._slotX,0)},this._doTab=function(){if(this._outie)return this._rLineTo(-this._slotX,0);var a=this._x-this._slotX/2;return this.docks.push([a*this._scale,(this._y+this._strokeWidth)*this._scale]),this._rLineTo(-this._strokeWidth,0)+this._rLineTo(0,this._slotY)+this._rLineTo(-this._slotX+2*this._strokeWidth,0)+this._rLineTo(0,-this._slotY)+this._rLineTo(-this._strokeWidth,0)},this._doPorch=function(a){return a?this._rLineTo(0,this._porchY+this._innieY1)+this._rLineTo(this._porchX-this._radius,0)+this._corner(1,1,90,0,1,!0,!0,!1):this._rLineTo(0,this._porchY-this._padding)+this._rLineTo(this._porchX-this._radius,0)+this._corner(1,1,90,0,1,!0,!0,!1)},this._startBoolean=function(a,b){var c=this._newPath(a,b);return this._radius-=this._strokeWidth,this.docks.push([this._x*this._scale,this._y*this._scale]),c+=this._rarcTo(1,-1,90,0,1),this._radius+=this._strokeWidth,c+=this._rLineTo(this._strokeWidth,0),c+=this._rLineTo(0,-this._expandY)},this._doBoolean=function(){this.docks.push([(this._x-this._radius+this._strokeWidth)*this._scale,(this._y+this._radius)*this._scale]),this.margins[2]=(this._x-this._radius-this._strokeWidth)*this._scale;var a=this._rarcTo(-1,1,90,0,0)+this._rarcTo(1,1,90,0,0);return a},this._endBoolean=function(a){if(a)var b="";else var b=this._rLineTo(1.5*-this._radius,0);return b+=this._rLineTo(0,-this._strokeWidth),b+=this._rLineTo(-this._strokeWidth,0),this._radius-=this._strokeWidth,b+=this._rarcTo(-1,-1,90,0,1),this._radius+=this._strokeWidth,b+=this._closePath(),this._calculateWH(!0),b+=this._style()},this._header=function(a){var b=this._width+2*this._strokeWidth;return'<svg xmlns="http://www.w3.org/2000/svg" width="'+1.1*b+'" height="'+1.3*this._height+'">'+this._transform(a)+'<filter id="dropshadow" height="130%">   <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>   <feOffset dx="2" dy="2" result="offsetblur"/>   <feComponentTransfer xmlns="http://www.w3.org/2000/svg">     <feFuncA type="linear" slope="0.2"/>   </feComponentTransfer>   <feMerge>     <feMergeNode/>     <feMergeNode in="SourceGraphic"/>   </feMerge> </filter>'},this._transform=function(a){if(0!==this._orientation)var b=this._width/2,c=this._height/2,d='<g transform = "rotate('+this._orientation+" "+b+" "+c+')">';else var d="";if(a){var e=-this._minX,f=-this._minY;return'<g transform="translate('+e+", "+f+')">'}return'<g transform="scale('+this._scale+", "+this._scale+')">'+d},this._footer=function(){return 0!==this._orientation?"</g></g></svg>":"</g></svg>"},this._style=function(){return'style="fill:'+this._fill+";fill-opacity:1;stroke:"+this._stroke+";stroke-width:"+this._strokeWidth+';stroke-linecap:round;stroke-opacity:1;filter:url(#dropshadow);" />'},this.basicBlock=function(){this._resetMinMax();var a=this._calculateXY(),b=a[0],c=a[1];this.margins[2]=0,this.margins[3]=0;var d=this._newPath(b,c);if(d+=this._corner(1,-1,90,0,1,!0,!0,!1),d+=this._doSlot(),d+=this._rLineTo(this._expandX,0),xx=this._x,d+=this._corner(1,1,90,0,1,!0,!0,!1),0===this._innies.length)d+=this._rLineTo(0,this._padding);else for(var e=0;e<this._innies.length;e++)this._innies[e]&&(d+=this._doInnie()),0===e?d+=this._rLineTo(0,this._expandY):1===e&&this._expandY2>0&&(d+=this._rLineTo(0,this._expandY2)),0===e&&this._porch?d+=this._doPorch(!1):this._innies.length-1>e&&(d+=this._rLineTo(0,2*this._innieY2+this._inniesSpacer));d+=this._corner(-1,1,90,0,1,!0,!0,!1),d+=this._lineTo(xx,this._y),d+=this._rLineTo(-this._expandX,0),d+=this._tab?this._doTab():this._doTail(),d+=this._corner(-1,-1,90,0,1,!0,!0,!1),d+=this._rLineTo(0,-this._expandY),this._innies.indexOf(!0)!==-1&&(d+=this._lineTo(b,this._radius+this._innieY2+this._strokeWidth/2),d+=this._doOutie()),this._calculateWH(!0),d+=this._closePath(),d+=this._style();var f=this._width-this._scale*(this._innieX1+this._innieX2)-4*this._strokeWidth,g=this._height/2+this._fontSize/(5/this._scale),h=this._innies.length;if(h>2&&2*Math.round(h/2)!==h&&(g-=2*this._fontSize),d+=this.text(f/this._scale,g/this._scale,this._fontSize,this._width,"right","block_label"),this._slot||this._outie)var i=1;else var i=0;for(var j=1,e=0;e<this._innies.length;e++)this._innies[e]&&(g=this.docks[i][1]-this._fontSize/(8/this._scale),d+=this.text(f/this._scale,g/this._scale,this._fontSize/1.5,this._width,"right","arg_label_"+j),j+=1,i+=1);return d+=this._footer(),this._header(!1)+d},this.basicBox=function(){this._resetMinMax(),this.setOutie(!0);var a=this._strokeWidth/2+this._innieX1+this._innieX2;this.margins[0]=(a+this._strokeWidth+.5)*this._scale,this.margins[1]=(this._strokeWidth+.5)*this._scale,this.margins[2]=0,this.margins[3]=0;var b=this._newPath(a,this._strokeWidth/2);b+=this._rLineTo(this._expandX,0),b+=this._rLineTo(0,2*this._radius+this._innieY2+this._expandY),b+=this._rLineTo(-this._expandX,0),b+=this._lineTo(a,this._radius+this._innieY2+this._strokeWidth/2),b+=this._doOutie(),b+=this._closePath(),this._calculateWH(!0),b+=this._style();var c=2*(this._innieX1+this._innieX2)+4*this._strokeWidth,d=this._height/2+this._fontSize/2;return b+=this.text(c/this._scale,d/this._scale,this._fontSize,this._width,"left","block_label"),b+=this._footer(),this._header(!1)+b},this.booleanAndOr=function(){this._resetMinMax();var a=this._startBoolean(this._strokeWidth/2,5.5*this._radius+this._strokeWidth/2+this._innieY2+this._inniesSpacer+this._expandY);a+=this._rLineTo(0,3.5*-this._radius-this._innieY2-this._inniesSpacer-this._strokeWidth),a+=this._rarcTo(1,-1,90,0,1),a+=this._rLineTo(this._radius/2+this._expandX,0);var b=this._x;a+=this._rLineTo(0,this._radius/2),a+=this._doBoolean(),a+=this._rLineTo(0,1.5*this._radius+this._innieY2+this._inniesSpacer),a+=this._rLineTo(0,this._expandY),a+=this._doBoolean(),a+=this._rLineTo(0,this._radius/2),a+=this._lineTo(b,this._y),a+=this._rLineTo(-this._expandX,0),a+=this._endBoolean(!1),this.margins[0]=(this._radius+this._strokeWidth+.5)*this._scale,this.margins[1]=this._strokeWidth*this._scale,this.margins[2]=this._strokeWidth*this._scale,this.margins[3]=this._strokeWidth*this._scale;var c=this._width-this._scale*(this._innieX1+this._innieX2)-4*this._strokeWidth,d=this._height/2+this._fontSize/2;return a+=this.text(c/this._scale,d/this._scale,this._fontSize,this._width,"right","block_label"),a+=this._footer(),this._header(!1)+a},this.booleanNot=function(a){if(this._resetMinMax(),this._innies[0])var b=this._startBoolean(this._strokeWidth/2,1.25*this._radius+this._strokeWidth/2);else if(a)var b=this._startBoolean(this._strokeWidth/2,1.25*this._radius+this._strokeWidth/2);else var b=this._startBoolean(this._strokeWidth/2,2*this._radius+this._strokeWidth/2);b+=this._rLineTo(0,-this._strokeWidth),b+=this._innies[0]?this._rLineTo(0,-this._radius/4):a?this._rLineTo(0,-this._radius/4):this._rarcTo(1,-1,90,0,1),b+=this._rLineTo(this._radius/2+this._expandX,0);var c=this._x;this._innies[0]?(b+=this._rLineTo(0,this._radius),b+=this._doInnie(),b+=this._rLineTo(0,this._radius)):a?b+=this._rLineTo(0,2.25*this._radius):(b+=this._rLineTo(0,this._radius/2),b+=this._doBoolean(),b+=this._rLineTo(0,this._radius/2)),b+=this._lineTo(c,this._y),this._expandY2>0&&(b+=this._rLineTo(0,this._expandY2)),this._innies[0]?(b+=this._rLineTo(-this._radius/2-this._expandX,0),b+=this._rLineTo(0,-this._radius/4)):b+=a?this._rLineTo(-this._radius/2-this._expandX,0):this._rLineTo(-this._expandX,0),this._expandY2>0&&(b+=this._rLineTo(0,-this._expandY2)),b+=this._endBoolean(a),a?(this.margins[0]=(this._radius+this._strokeWidth+.5)*this._scale,this.margins[2]=(this._radius+this._strokeWidth+.5)*this._scale):(this.margins[0]=(this._strokeWidth+.5)*this._scale,this.margins[2]=(this._strokeWidth+.5)*this._scale),this.margins[1]=this._strokeWidth*this._scale,this.margins[3]=this._strokeWidth*this._scale;var d=this._width-2*(this._innieX1+this._innieX2)-4*this._strokeWidth,e=this._height/2+this._fontSize/2;return b+=this.text(d/this._scale,e/this._scale,this._fontSize,this._width,"right","block_label"),b+=this._footer(),this._header(!1)+b},this.booleanCompare=function(){this._resetMinMax();var a=2*this._radius+2*this._innieY2+this._inniesSpacer+this._strokeWidth/2+this._expandY,b=this._strokeWidth/2,c=2*this._radius,d='<g transform="matrix(1,0,0,1,0,-'+c+')"> ';d+=this._newPath(b,a+this._radius),this.docks.push([this._x*this._scale,(this._y-2*this._radius)*this._scale]),this._radius-=this._strokeWidth,d+=this._rarcTo(1,-1,90,0,1),this._radius+=this._strokeWidth,d+=this._rLineTo(this._strokeWidth,0),d+=this._rLineTo(0,-this._expandY),a=-2*this._innieY2-this._inniesSpacer-this._strokeWidth,d+=this._rLineTo(0,a+this._radius),d+=this._rarcTo(1,-1,90,0,1),d+=this._rLineTo(this._radius/2+this._expandX,0),d+=this._rLineTo(0,this._radius);var e=this._x;d+=this._doInnie(),this.docks[1][1]-=2*this._radius*this._scale,d+=this._rLineTo(0,this._expandY),d+=this._porch?this._doPorch(!1):this._rLineTo(0,2*this._innieY2+this._inniesSpacer),d+=this._doInnie(),this.docks[2][1]-=2*this._radius*this._scale,d+=this._rLineTo(0,this._radius),d+=this._lineTo(e,this._y),d+=this._rLineTo(-this._expandX,0),d+=this._rLineTo(1.5*-this._radius,0),d+=this._rLineTo(0,-this._radius),d+=this._rLineTo(0,-this._strokeWidth),d+=this._rLineTo(-this._strokeWidth,0),this._radius-=this._strokeWidth,d+=this._rarcTo(-1,-1,90,0,1),this._radius+=this._strokeWidth,d+=this._closePath(),this._calculateWH(!0),d+=this._style(),d+="</g>",this.margins[0]=(this._radius+this._strokeWidth)*this._scale,this.margins[1]=this._strokeWidth*this._scale,this.margins[2]=this._strokeWidth*this._scale;var f=this._width-2*(this._innieX1+this._innieX2)-4*this._strokeWidth,g=this._height/2+this._fontSize/2;return d+=this.text(f/this._scale,g/this._scale,this._fontSize,this._width,"right","block_label"),d+=this._footer(),this._header(!1)+d},this.basicClamp=function(){var a=this._cap,b=this._slot;if(this._resetMinMax(),this._outie)var c=this._strokeWidth/2+this._innieX1+this._innieX2;else var c=this._strokeWidth/2;if(this._cap)var d=this._strokeWidth/2+this._radius+3*this._slotY;else var d=this._strokeWidth/2+this._radius;this.margins[0]=(c+this._strokeWidth+.5)*this._scale,this.margins[1]=(this._strokeWidth+.5)*this._scale,this.margins[2]=0,this.margins[3]=0;var e=this._newPath(c,d);e+=this._corner(1,-1,90,0,1,!0,!0,!1),e+=this._doSlot(),this._cap&&(this._slot=!0,this._cap=!1),e+=this._rLineTo(this._radius+this._strokeWidth,0);var f=this._x;if(e+=this._rLineTo(this._expandX,0),e+=this._corner(1,1,90,0,1,!0,!0,!1),this._innies[0])for(var g=0;g<this._innies.length;g++)this._innies[g]&&(e+=this._doInnie()),0===g?e+=this._rLineTo(0,this._expandY):1===g&&this._expandY2>0&&(e+=this._rLineTo(0,this._expandY2)),0===g&&this._porch?e+=this._doPorch(!1):this._innies.length-1>g&&(e+=this._rLineTo(0,2*this._innieY2+this._inniesSpacer));else this._bool?(e+=this._rLineTo(0,2*this._padding+this._strokeWidth),e+=this._doBoolean(),this.margins[2]=(this._x-this._strokeWidth+.5)*this._scale):(e+=this._rLineTo(0,this._padding),this.margins[2]=(this._x-this._strokeWidth+.5)*this._scale);for(var h=0;h<this._clampCount;h++){h>0&&(e+=this._rLineTo(0,3*this._padding)),e+=this._corner(-1,1,90,0,1,!0,!0,!1),e+=this._lineTo(f,this._y);var i=this._outie;if(this._outie=!1,e+=this._doTab(),this._outie=i,e+=this._iCorner(-1,1,90,0,0,!0,!0),e+=this._rLineTo(0,this._padding),this._clampSlots[h]>1){var j=this._slotSize*(this._clampSlots[h]-1);e+=this._rLineTo(0,j)}e+=this._rLineTo(0,this._expandY2),e+=this._iCorner(1,1,90,0,0,!0,!0);var k=this._slot;this._slot=!0,e+=this._doSlot(),this._slot=k,this.docks.pop(),e+=this._rLineTo(this._radius,0)}if(e+=this._rLineTo(0,2*this._innieY1),e+=this._rLineTo(0,this._innieY1+3*this._strokeWidth),e+=this._corner(-1,1,90,0,1,!0,!0,!1),0===this._clampCount&&(e+=this._lineTo(f,this._y)),e+=this._rLineTo(-this._radius-this._strokeWidth,0),e+=this._tail?this._doTail():this._doTab(),this._cap=a,this._slot=b,e+=this._corner(-1,-1,90,0,1,!0,!0,!1),this._outie&&(e+=this._lineTo(c,this._radius+this._innieY2+this._strokeWidth/2),e+=this._doOutie()),e+=this._closePath(),this._calculateWH(!0),e+=this._style(),this._outie)var l=10*this._strokeWidth+this._innieX1+this._innieX2;else var l=8*this._strokeWidth;if(this._cap)var m=(this._strokeWidth/2+this._radius+this._slotY)*this._scale;else if(this._innies.length>1){var m=(this._strokeWidth/2+this._radius)*this._scale/2;m+=this._fontSize}else var m=(this._strokeWidth/2+this._radius)*this._scale/2;if(m+=(this._fontSize+1)*this._scale,this._bool&&(m+=this._fontSize/2),e+=this.text(l/this._scale,m/this._scale,this._fontSize,this._width,"left","block_label"),this._bool)for(var n=1,l=this._width-this._radius,h=0;h<this._clampCount;h++)m=this.docks[h+2][1]-this._fontSize+3*this._strokeWidth,e+=this.text(l/this._scale,m/this._scale,this._fontSize/1.5,this._width,"right","arg_label_"+n),n+=1;if(this._slot||this._outie)var o=1;else var o=0;for(var n=1,l=this._width-this._scale*(this._innieX1+this._innieX2)-4*this._strokeWidth,g=0;g<this._innies.length;g++)this._innies[g]&&(m=this.docks[o][1]-this._fontSize/(8/this._scale),e+=this.text(l/this._scale,m/this._scale,this._fontSize/1.5,this._width,"right","arg_label_"+n),n+=1,o+=1);return e+=this._footer(),this._header(!1)+e},this.argClamp=function(){if(this._resetMinMax(),this._outie)var a=this._strokeWidth/2+this._innieX1+this._innieX2;else var a=this._strokeWidth/2;var b=this._strokeWidth/2+this._radius;this.margins[0]=(a+this._strokeWidth+.5)*this._scale,this.margins[1]=(this._strokeWidth+.5)*this._scale,this.margins[2]=0,this.margins[3]=0;var c=this._newPath(a,b);c+=this._corner(1,-1,90,0,1,!0,!0,!1),c+=this._doSlot(),c+=this._rLineTo(this._radius+this._strokeWidth,0);var d=this._x;c+=this._rLineTo(this._expandX,0),c+=this._corner(1,1,90,0,1,!0,!0,!1),this._innies[0]?c+=this._doInnie():(c+=this._rLineTo(0,this._padding),this.margins[2]=(this._x-this._strokeWidth+.5)*this._scale),c+=this._corner(-1,1,90,0,1,!0,!0,!1),c+=this._lineTo(d,this._y),c+=this._iCorner(-1,1,90,0,0,!0,!0);var e=0;c+=this._doInnie();var f=this._slotSize*(this._clampSlots[0][e]-1);f>0&&(c+=this._rLineTo(0,f)),e+=1;for(var g=this._slotSize-this._innieY2,h=1;h<this._clampSlots[0].length;h++){c+=this._rLineTo(0,g),c+=this._doInnie();var f=this._slotSize*(this._clampSlots[0][e]-1);f>0&&(c+=this._rLineTo(0,f)),e+=1}if(c+=this._rLineTo(0,this._expandY2),c+=this._iCorner(1,1,90,0,0,!0,!0),c+=this._rLineTo(this._radius,0),c+=this._rLineTo(0,2*this._innieY1),c+=this._rLineTo(0,this._innieY1+3*this._strokeWidth),c+=this._corner(-1,1,90,0,1,!0,!0,!1),c+=this._lineTo(d,this._y),c+=this._rLineTo(-this._radius-this._strokeWidth,0),c+=this._tail?this._doTail():this._doTab(),c+=this._corner(-1,-1,90,0,1,!0,!0,!1),this._outie&&(c+=this._lineTo(a,this._radius+this._innieY2+this._strokeWidth/2),c+=this._doOutie()),c+=this._closePath(),this._calculateWH(!0),c+=this._style(),this._outie)var i=10*this._strokeWidth+this._innieX1+this._innieX2;else var i=8*this._strokeWidth;if(this._cap)var j=(this._strokeWidth/2+this._radius+this._slotY)*this._scale;else var j=(this._strokeWidth/2+this._radius)*this._scale/2;return j+=(this._fontSize+1)*this._scale,this._bool&&(j+=this._fontSize/2),c+=this.text(i/this._scale,j/this._scale,this._fontSize,this._width,"left","block_label"),c+=this._footer(),this._header(!1)+c},this.untilClamp=function(){this._resetMinMax();var a=this._strokeWidth/2,b=this._strokeWidth/2+this._radius;this.margins[0]=(a+this._strokeWidth+.5)*this._scale,this.margins[1]=(this._strokeWidth+.5)*this._scale,this.margins[2]=0,this.margins[3]=0;var c=this._newPath(a,b);c+=this._corner(1,-1,90,0,1,!0,!0,!1),c+=this._doSlot(),c+=this._rLineTo(this._radius+this._strokeWidth,0),c+=this._rLineTo(this._expandX,0);var d=this._x;c+=this._corner(1,1,90,0,1,!0,!0,!0),c+=this._rLineTo(0,2*this._innieY1),c+=this._corner(-1,1,90,0,1,!0,!0,!0),c+=this._lineTo(d,this._y),c+=this._rLineTo(-this._expandX,0),c+=this._doTab(),c+=this._iCorner(-1,1,90,0,0,!0,!0),c+=this._rLineTo(0,this._expandY),c+=this._iCorner(1,1,90,0,0,!0,!0),c+=this._doSlot(),this.docks.pop(),c+=this._rLineTo(this._radius,0),this._innies[0]?c+=this._doInnie():this.margins[2]=(this._x-this._strokeWidth+.5)*this._scale,c+=this._rLineTo(0,this._radius+this._expandY2),this._bool&&(c+=this._doBoolean()),c+=this._corner(-1,1,90,0,1,!0,!0,!1),c+=this._rLineTo(-this._radius-this._strokeWidth,0),c+=this._doTab(),c+=this._corner(-1,-1,90,0,1,!0,!0,!1),c+=this._closePath(),this._calculateWH(!0),c+=this._style();var e=4*this._strokeWidth,f=this.docks[2][1];if(c+=this.text(e/this._scale,f/this._scale,this._fontSize,this._width,"left","block_label"),this._bool){var e=this._width-this._radius;f=this.docks[1][1]-this._fontSize,c+=this.text(e/this._scale,f/this._scale,this._fontSize/1.5,this._width,"right","arg_label_1")}if(this._bool){var e=this.docks[1][0],f=this.docks[1][1];this.docks[1][0]=this.docks[2][0],this.docks[1][1]=this.docks[2][1],this.docks[2][0]=e,this.docks[2][1]=f}return c+=this._footer(),this._header(!1)+c},this.statusBlock=function(a){this._resetMinMax();var b=this._calculateXY(),c=b[0],d=b[1];this.margins[2]=0,this.margins[3]=0;var e=this._newPath(c,d);e+=this._corner(1,-1,90,0,1,!0,!0,!1),e+=this._rLineTo(this._expandX,0);var f=this._x;return e+=this._corner(1,1,90,0,1,!0,!0,!1),e+=this._rLineTo(0,this._expandY),e+=this._corner(-1,1,90,0,1,!0,!0,!1),e+=this._lineTo(f,this._y),e+=this._rLineTo(-this._expandX,0),e+=this._corner(-1,-1,90,0,1,!0,!0,!1),e+=this._rLineTo(0,-this._expandY),this._calculateWH(!0),e+=this._closePath(),e+=this._style(),e+=this._footer(),this._header(!1)+e}}