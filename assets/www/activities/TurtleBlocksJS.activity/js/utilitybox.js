/*! Sugarizer 2017-08-25 */
function UtilityBox(){this._stage=null,this._refreshCanvas=null,this._doBigger=null,this._doSmaller=null,this._doPlugins=null,this._doStats=null,this._doScroller=null,this._scrollStatus=!1,this._container=null,this._scale=1,this.setStage=function(a){return this._stage=a,this},this.setRefreshCanvas=function(a){return this._refreshCanvas=a,this},this.setBigger=function(a){return this._doBigger=a,this},this.setSmaller=function(a){return this._doSmaller=a,this},this.setPlugins=function(a){return this._doPlugins=a,this},this.setStats=function(a){return this._doStats=a,this},this.setScroller=function(a){return this._doScroller=a,this},this.init=function(a,b,c,d){if(null===this._container){this._createBox(a,b,c);var e=this;this._smallerButton=d("smaller-button",_("Decrease block size"),this._container.x+55,this._container.y+85,55,0,this._stage),this._smallerButton.visible=!0,this._positionHoverText(this._smallerButton),this._smallerButton.on("click",function(a){e._doSmaller(),e._hide()}),this._biggerButton=d("bigger-button",_("Increase block size"),this._container.x+120,this._container.y+85,55,0,this._stage),this._biggerButton.visible=!0,this._positionHoverText(this._biggerButton),this._biggerButton.on("click",function(a){e._doBigger(),e._hide()}),this._statsButton=d("stats-button",_("Display statistics"),this._container.x+185,this._container.y+85,55,0,this._stage),this._statsButton.visible=!0,this._positionHoverText(this._statsButton),this._statsButton.on("click",function(a){e._doStats(),e._hide()}),this.pluginsButton=d("plugins-button",_("Load plugin from file"),this._container.x+250,this._container.y+85,55,0,this._stage),this.pluginsButton.visible=!0,this._positionHoverText(this.pluginsButton),this.pluginsButton.on("click",function(a){e._doPlugins(),e._hide()}),this._scrollButton=d("scroll-unlock-button",_("Enable scrolling"),this._container.x+315,this._container.y+85,55,0,this._stage),this._scrollButton.visible=!0,this._positionHoverText(this._scrollButton),this._scrollButton.on("click",function(a){e._doScroller(),e._hide(),e._scrollStatus=!e._scrollStatus}),this._scrollButton2=d("scroll-lock-button",_("Disable scrolling"),this._container.x+315,this._container.y+85,55,0,this._stage),this._scrollButton2.visible=!1,this._positionHoverText(this._scrollButton2),this._scrollButton2.on("click",function(a){e._doScroller(),e._hide(),e._scrollStatus=!e._scrollStatus})}else this._show()},this._positionHoverText=function(a){for(var b=0;b<a.children.length;b++)if(void 0!=a.children[b].text){a.children[b].textAlign="left",a.children[b].x=-27,a.children[b].y=27;break}},this._hide=function(){null!==this._container&&(this._smallerButton.visible=!1,this._biggerButton.visible=!1,this._statsButton.visible=!1,this.pluginsButton.visible=!1,this._scrollButton.visible=!1,this._scrollButton2.visible=!1,this._container.visible=!1,this._refreshCanvas())},this._show=function(){null!==this._container&&(this._smallerButton.visible=!0,this._biggerButton.visible=!0,this._statsButton.visible=!0,this.pluginsButton.visible=!0,this._scrollButton.visible=!this._scrollStatus,this._scrollButton2.visible=this._scrollStatus,this._container.visible=!0,this._refreshCanvas())},this._createBox=function(a,b,c){function d(a,b,c,d){a._container.addChild(c),a._loadUtilityContainerHandler(),a.bounds=a._container.getBounds(),a._container.cache(a.bounds.x,a.bounds.y,a.bounds.width,a.bounds.height);var e=new createjs.Shape;e.graphics.beginFill("#FFF").drawRect(a.bounds.x,a.bounds.y,a.bounds.width,a.bounds.height),e.x=0,e.y=0,a._container.hitArea=e}if(this._scale=a,console.log(a),null==this._container){this._container=new createjs.Container,this._stage.addChild(this._container),this._container.x=b-360,this._container.y=c-133;var e=UTILITYBOXSVG;this._makeBoxBitmap(e,"box",d,null)}},this._makeBoxBitmap=function(a,b,c,d){var e=new Image,f=this;e.onload=function(){bitmap=new createjs.Bitmap(e),c(f,b,bitmap,d)},e.src="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(a)))},this._loadUtilityContainerHandler=function(){var a=!1,b=this;b._container.on("click",function(c){if(a)return void console.log("debouncing click");a=!0,setTimeout(function(){a=!1},500);var d=(c.stageX/b._scale-b._container.x,c.stageY/b._scale-b._container.y);d<55&&b._hide()})}}const UTILITYBOXSVG='<svg xmlns="http://www.w3.org/2000/svg" height="133" width="360" version="1.1"> <rect style="fill:#ffffff;fill-opacity:1;fill-rule:nonzero;stroke:none" y="0" x="0" height="133" width="360" /> <g style="fill:#000000;display:block" transform="translate(306.943,-1.053)"> <path style="fill:#000000;display:inline" d="m 27.557,5.053 c -12.43,0 -22.5,10.076 -22.5,22.497 0,12.432 10.07,22.503 22.5,22.503 12.431,0 22.5,-10.071 22.5,-22.503 0,-12.421 -10.07,-22.497 -22.5,-22.497 z m 10.199,28.159 c 1.254,1.256 1.257,3.291 0,4.545 -0.628,0.629 -1.451,0.943 -2.274,0.943 -0.822,0 -1.644,-0.314 -2.27,-0.94 l -5.76,-5.761 -5.76,5.761 c -0.627,0.626 -1.449,0.94 -2.271,0.94 -0.823,0 -1.647,-0.314 -2.275,-0.943 -1.254,-1.254 -1.254,-3.289 0.004,-4.545 l 5.758,-5.758 -5.758,-5.758 c -1.258,-1.254 -1.258,-3.292 -0.004,-4.546 1.255,-1.254 3.292,-1.259 4.546,0 l 5.76,5.759 5.76,-5.759 c 1.252,-1.259 3.288,-1.254 4.544,0 1.257,1.254 1.254,3.292 0,4.546 l -5.758,5.758 5.758,5.758 z" /> </g> <rect style="fill:#92b5c8;fill-opacity:1;stroke:none" y="51" x="0" height="82" width="360" /> <rect y="0.76763773" x="0.76764059" height="131.46472" width="358.46472" style="display:inline;visibility:visible;opacity:1;fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-opacity:1;" /></svg>';