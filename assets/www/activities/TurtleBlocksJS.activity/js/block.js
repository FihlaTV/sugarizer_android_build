/*! Sugarizer 2017-08-25 */
function Block(a,b,c){return null===a?void console.log("null protoblock sent to Block"):(this.protoblock=a,this.name=a.name,this.overrideName=c,this.blocks=b,this.collapsed=!1,this.trash=!1,this.loadComplete=!1,this.label=null,this.text=null,this.value=null,this.privateData=null,this.image=a.image,this.imageBitmap=null,this.container=null,this.bounds=null,this.bitmap=null,this.highlightBitmap=null,this.artwork=null,this.collapseArtwork=null,this.collapseContainer=null,this.collapseBitmap=null,this.expandBitmap=null,this.collapseBlockBitmap=null,this.highlightCollapseBlockBitmap=null,this.collapseText=null,this.size=1,this.docks=[],this.connections=[],this.clampCount=[1,1],this.argClampSlots=[1],this.postProcess=null,this.postProcessArg=null,this._label_lock=!1,this._createCache=function(){var a=this;a.bounds=a.container.getBounds(),null==a.bounds?setTimeout(function(){a._createCache()},200):a.container.cache(a.bounds.x,a.bounds.y,a.bounds.width,a.bounds.height)},this.updateCache=function(){var a=this;null==a.bounds?setTimeout(function(){a.updateCache()},300):(a.container.updateCache(),a.blocks.refreshCanvas())},this.offScreen=function(a){return!this.trash&&a.offScreen(this.container.x,this.container.y)},this.copySize=function(){this.size=this.protoblock.size},this.getInfo=function(){return this.name+" block"},this.highlight=function(){this.collapsed&&COLLAPSABLES.indexOf(this.name)!==-1?this.highlightCollapseBlockBitmap&&(this.highlightCollapseBlockBitmap.visible=!0,this.collapseBlockBitmap.visible=!1,this.collapseText.visible=!0,this.bitmap.visible=!1,this.highlightBitmap.visible=!1):(this.bitmap.visible=!1,this.highlightBitmap.visible=!0,COLLAPSABLES.indexOf(this.name)!==-1&&this.highlightCollapseBlockBitmap&&(null!==this.collapseText&&(this.collapseText.visible=!1),null!==this.collapseBlockBitmap.visible&&(this.collapseBlockBitmap.visible=!1),null!==this.highlightCollapseBlockBitmap.visible&&(this.highlightCollapseBlockBitmap.visible=!1))),this.updateCache()},this.unhighlight=function(){this.collapsed&&COLLAPSABLES.indexOf(this.name)!==-1?this.highlightCollapseBlockBitmap&&(this.highlightCollapseBlockBitmap.visible=!1,this.collapseBlockBitmap.visible=!0,this.collapseText.visible=!0,this.bitmap.visible=!1,this.highlightBitmap.visible=!1):(this.bitmap.visible=!0,this.highlightBitmap.visible=!1,COLLAPSABLES.indexOf(this.name)!==-1&&this.highlightCollapseBlockBitmap&&(this.highlightCollapseBlockBitmap.visible=!1,this.collapseBlockBitmap.visible=!1,this.collapseText.visible=!1)),this.updateCache()},this.updateArgSlots=function(a){this.argClampSlots=a,this._newArtwork(),this.regenerateArtwork(!1)},this.updateSlots=function(a,b){this.clampCount[a]+=b,this._newArtwork(b),this.regenerateArtwork(!1)},this.resize=function(a){var b=this;if(this.postProcess=function(c){if(null!==b.imageBitmap&&(b._positionMedia(b.imageBitmap,b.imageBitmap.image.width,b.imageBitmap.image.height,a),z=b.container.getNumChildren()-1,b.container.setChildIndex(b.imageBitmap,z)),"start"===b.name||"drum"===b.name)for(var d=0;d<b.blocks.turtles.turtleList.length;d++)if(b.blocks.turtles.turtleList[d].startBlock===b){b.blocks.turtles.turtleList[d].resizeDecoration(a,b.bitmap.image.width),b._ensureDecorationOnTop();break}b.updateCache(),b._calculateBlockHitArea(),b.trash&&b.hide()},this.postProcessArg=null,this.protoblock.scale=a,this._newArtwork(0),this.regenerateArtwork(!0,[]),null!==this.text&&this._positionText(a),null!==this.collapseContainer){this.collapseContainer.uncache();var c=function(b){b.collapseBitmap.scaleX=b.collapseBitmap.scaleY=b.collapseBitmap.scale=a/2,b.expandBitmap.scaleX=b.expandBitmap.scaleY=b.expandBitmap.scale=a/2;var c=b.collapseContainer.getBounds();c&&b.collapseContainer.cache(c.x,c.y,c.width,c.height),b._positionCollapseContainer(b.protoblock.scale),b._calculateCollapseHitArea()};this._generateCollapseArtwork(c);var d=10*a;this.collapseText.font=d+"px Sans",this._positionCollapseLabel(a)}},this._newArtwork=function(a){if(COLLAPSABLES.indexOf(this.name)>-1){var b=new ProtoBlock("collapse");b.scale=this.protoblock.scale,b.extraWidth=10,b.basicBlockCollapsed();var c=b.generator();this.collapseArtwork=c[0];var c=this.protoblock.generator(this.clampCount[0])}else if("ifthenelse"===this.name)var c=this.protoblock.generator(this.clampCount[0],this.clampCount[1]);else if("clamp"===this.protoblock.style)var c=this.protoblock.generator(this.clampCount[0]);else switch(this.name){case"equal":case"greater":case"less":var c=this.protoblock.generator(this.clampCount[0]);break;case"calcArg":case"doArg":case"namedcalcArg":case"nameddoArg":var c=this.protoblock.generator(this.argClampSlots);this.size=2;for(var d=0;d<this.argClampSlots.length;d++)this.size+=this.argClampSlots[d];this.docks=[],this.docks.push([c[1][0][0],c[1][0][1],this.protoblock.dockTypes[0]]);break;default:if(this.isArgBlock())var c=this.protoblock.generator(this.clampCount[0]);else if(this.isTwoArgBlock())var c=this.protoblock.generator(this.clampCount[0]);else var c=this.protoblock.generator();this.size+=a}switch(this.name){case"nameddoArg":for(var d=1;d<c[1].length-1;d++)this.docks.push([c[1][d][0],c[1][d][1],"anyin"]);this.docks.push([c[1][2][0],c[1][2][1],"in"]);break;case"namedcalcArg":for(var d=1;d<c[1].length;d++)this.docks.push([c[1][d][0],c[1][d][1],"anyin"]);break;case"doArg":this.docks.push([c[1][1][0],c[1][1][1],this.protoblock.dockTypes[1]]);for(var d=2;d<c[1].length-1;d++)this.docks.push([c[1][d][0],c[1][d][1],"anyin"]);this.docks.push([c[1][3][0],c[1][3][1],"in"]);break;case"calcArg":this.docks.push([c[1][1][0],c[1][1][1],this.protoblock.dockTypes[1]]);for(var d=2;d<c[1].length;d++)this.docks.push([c[1][d][0],c[1][d][1],"anyin"])}this.artwork=c[0];for(var d=0;d<this.docks.length;d++)this.docks[d][0]=c[1][d][0],this.docks[d][1]=c[1][d][1]},this.imageLoad=function(){var a=10*this.protoblock.scale;this.text=new createjs.Text("",a+"px Sans","#000000"),this.generateArtwork(!0,[])},this._addImage=function(){var a=new Image,b=this;a.onload=function(){var c=new createjs.Bitmap(a);c.name="media",b.container.addChild(c),b._positionMedia(c,a.width,a.height,b.protoblock.scale),b.imageBitmap=c,b.updateCache()},a.src=this.image},this.regenerateArtwork=function(a){null!=this.bitmap&&this.container.removeChild(this.bitmap),null!=this.highlightBitmap&&this.container.removeChild(this.highlightBitmap),a&&null!==this.collapseBitmap&&(this.collapseContainer.removeChild(this.collapseBitmap),this.collapseContainer.removeChild(this.expandBitmap),this.container.removeChild(this.collapseBlockBitmap),this.container.removeChild(this.highlightCollapseBlockBitmap)),this.generateArtwork(!1)},this.generateArtwork=function(a){function b(b,c,e){null!=e.highlightBitmap&&e.container.removeChild(e.highlightBitmap),e.highlightBitmap=c,e.container.addChild(e.highlightBitmap),e.highlightBitmap.x=0,e.highlightBitmap.y=0,e.highlightBitmap.name="bmp_highlight_"+d,e.highlightBitmap.cursor="pointer",e.highlightBitmap.visible=!1,a||e.container.uncache(),e._createCache(),e.blocks.refreshCanvas(),a?(e._loadEventHandlers(),null!==e.image&&e._addImage(),e._finishImageLoad()):("start"!==e.name&&"drum"!==e.name||e._ensureDecorationOnTop(),e.blocks.adjustDocks(d,!0),e._positionText(e.protoblock.scale),COLLAPSABLES.indexOf(e.name)!==-1&&(e.bitmap.visible=!e.collapsed,e.highlightBitmap.visible=!1,e.updateCache()),null!=e.postProcess&&(e.postProcess(e.postProcessArg),e.postProcess=null))}function c(a,c,f){if(null!=f.bitmap&&f.container.removeChild(f.bitmap),f.bitmap=c,f.container.addChild(f.bitmap),f.bitmap.x=0,f.bitmap.y=0,f.bitmap.name="bmp_"+d,f.bitmap.cursor="pointer",f.blocks.refreshCanvas(),f.protoblock.disabled)var g=f.artwork.replace(/fill_color/g,DISABLEDFILLCOLOR).replace(/stroke_color/g,DISABLEDSTROKECOLOR).replace("block_label",e);else var g=f.artwork.replace(/fill_color/g,PALETTEHIGHLIGHTCOLORS[f.protoblock.palette.name]).replace(/stroke_color/g,HIGHLIGHTSTROKECOLORS[f.protoblock.palette.name]).replace("block_label",e);for(var h=1;h<f.protoblock.staticLabels.length;h++)g=g.replace("arg_label_"+h,f.protoblock.staticLabels[h]);_makeBitmap(g,f.name,b,f)}var d=this.blocks.blockList.indexOf(this),e="";for(this.overrideName?["nameddo","nameddoArg","namedcalc","namedcalcArg"].indexOf(this.name)!==-1?(e=this.overrideName,e.length>8&&(e=e.substr(0,7)+"...")):e=this.overrideName:this.protoblock.staticLabels.length>0&&!this.protoblock.image&&(e=this.protoblock.staticLabels[0]);this.protoblock.staticLabels.length<this.protoblock.args+1;)this.protoblock.staticLabels.push("");if(a){var f=this.protoblock.generator();this.artwork=f[0];for(var g=0;g<f[1].length;g++)this.docks.push([f[1][g][0],f[1][g][1],this.protoblock.dockTypes[g]])}if(this.protoblock.disabled)var h=this.artwork.replace(/fill_color/g,DISABLEDFILLCOLOR).replace(/stroke_color/g,DISABLEDSTROKECOLOR).replace("block_label",e);else var h=this.artwork.replace(/fill_color/g,PALETTEFILLCOLORS[this.protoblock.palette.name]).replace(/stroke_color/g,PALETTESTROKECOLORS[this.protoblock.palette.name]).replace("block_label",e);for(var g=1;g<this.protoblock.staticLabels.length;g++)h=h.replace("arg_label_"+g,this.protoblock.staticLabels[g]);_makeBitmap(h,this.name,c,this)},this._finishImageLoad=function(){this.blocks.blockList.indexOf(this);if(SPECIALINPUTS.indexOf(this.name)!==-1){if(null==this.value)switch(this.name){case"text":this.value="---";break;case"solfege":case"eastindiansolfege":this.value="sol";break;case"notename":this.value="G";break;case"rest":this.value=_("rest");break;case"number":this.value=NUMBERBLOCKDEFAULT;break;case"modename":this.value=getModeName(DEFAULTMODE);break;case"voicename":this.value=DEFAULTVOICE;break;case"drumname":this.value=getDrumName(DEFAULTDRUM)}if("solfege"===this.name){var a=splitSolfege(this.value),b=i18nSolfege(a[0]),c=a[1];"♮"!==c&&(b+=c)}else if("eastindiansolfege"===this.name){var a=splitSolfege(this.value),b=WESTERN2EISOLFEGENAMES[a[0]],c=a[1];"♮"!==c&&(b+=c)}else var b=this.value.toString();b.length>8&&(b=b.substr(0,7)+"..."),this.text.text=b,this.container.addChild(this.text),this._positionText(this.protoblock.scale)}else this.protoblock.parameter&&(this.container.addChild(this.text),this._positionText(this.protoblock.scale));if(COLLAPSABLES.indexOf(this.name)===-1)this.loadComplete=!0,null!==this.postProcess&&(this.postProcess(this.postProcessArg),this.postProcess=null),this.blocks.refreshCanvas(),this.blocks.cleanupAfterLoad(this.name);else{var d=new ProtoBlock("collapse");d.scale=this.protoblock.scale,d.extraWidth=10,d.basicBlockCollapsed();var a=d.generator();this.collapseArtwork=a[0];var e=function(a){a._loadCollapsibleEventHandlers(),a.loadComplete=!0,null!==a.postProcess&&(a.postProcess(a.postProcessArg),a.postProcess=null)};this._generateCollapseArtwork(e)}},this._generateCollapseArtwork=function(a){function b(b,c,e){if(e.highlightCollapseBlockBitmap=c,e.highlightCollapseBlockBitmap.name="highlight_collapse_"+d,e.container.addChild(e.highlightCollapseBlockBitmap),e.highlightCollapseBlockBitmap.visible=!1,null===e.collapseText){var f=10*e.protoblock.scale;switch(e.name){case"action":e.collapseText=new createjs.Text(_("action"),f+"px Sans","#000000");break;case"start":e.collapseText=new createjs.Text(_("start"),f+"px Sans","#000000");break;case"matrix":e.collapseText=new createjs.Text(_("matrix"),f+"px Sans","#000000");break;case"status":e.collapseText=new createjs.Text(_("status"),f+"px Sans","#000000");break;case"pitchdrummatrix":e.collapseText=new createjs.Text(_("drum"),f+"px Sans","#000000");break;case"rhythmruler":e.collapseText=new createjs.Text(_("ruler"),f+"px Sans","#000000");break;case"pitchstaircase":e.collapseText=new createjs.Text(_("stair"),f+"px Sans","#000000");break;case"tempo":e.collapseText=new createjs.Text(_("tempo"),f+"px Sans","#000000");case"modewidget":e.collapseText=new createjs.Text(_("mode"),f+"px Sans","#000000");break;case"pitchslider":e.collapseText=new createjs.Text(_("slider"),f+"px Sans","#000000");break;case"drum":e.collapseText=new createjs.Text(_("drum"),f+"px Sans","#000000")}e.collapseText.textAlign="left",e.collapseText.textBaseline="alphabetic",e.container.addChild(e.collapseText)}e._positionCollapseLabel(e.protoblock.scale),e.collapseText.visible=e.collapsed,e._ensureDecorationOnTop(),e.updateCache(),e.collapseContainer=new createjs.Container,e.collapseContainer.snapToPixelEnabled=!0;var g=new Image;g.onload=function(){e.collapseBitmap=new createjs.Bitmap(g),e.collapseBitmap.scaleX=e.collapseBitmap.scaleY=e.collapseBitmap.scale=e.protoblock.scale/2,e.collapseContainer.addChild(e.collapseBitmap),e.collapseBitmap.visible=!e.collapsed,finishCollapseButton(e)},g.src="images/collapse.svg",finishCollapseButton=function(b){var c=new Image;c.onload=function(){b.expandBitmap=new createjs.Bitmap(c),b.expandBitmap.scaleX=b.expandBitmap.scaleY=b.expandBitmap.scale=b.protoblock.scale/2,b.collapseContainer.addChild(b.expandBitmap),b.expandBitmap.visible=b.collapsed;var d=b.collapseContainer.getBounds();d&&b.collapseContainer.cache(d.x,d.y,d.width,d.height),b.blocks.stage.addChild(b.collapseContainer),null!==a&&a(b),b.blocks.refreshCanvas(),b.blocks.cleanupAfterLoad(b.name)},c.src="images/expand.svg"}}function c(a,c,e){e.collapseBlockBitmap=c,e.collapseBlockBitmap.name="collapse_"+d,e.container.addChild(e.collapseBlockBitmap),e.collapseBlockBitmap.visible=e.collapsed,e.blocks.refreshCanvas();var f=e.collapseArtwork;_makeBitmap(f.replace(/fill_color/g,PALETTEHIGHLIGHTCOLORS[e.protoblock.palette.name]).replace(/stroke_color/g,HIGHLIGHTSTROKECOLORS[e.protoblock.palette.name]).replace("block_label",""),"",b,e)}var d=this.blocks.blockList.indexOf(this),e=this.collapseArtwork;_makeBitmap(e.replace(/fill_color/g,PALETTEFILLCOLORS[this.protoblock.palette.name]).replace(/stroke_color/g,PALETTESTROKECOLORS[this.protoblock.palette.name]).replace("block_label",""),"",c,this)},this.hide=function(){this.container.visible=!1,null!==this.collapseContainer&&(this.collapseContainer.visible=!1,this.collapseText.visible=!1)},this.show=function(){this.trash||COLLAPSABLES.indexOf(this.name)===-1&&this.collapsed||(this.container.visible=!0,null!==this.collapseContainer&&(this.collapseContainer.visible=!0,this.collapseText.visible=!0))},this.isValueBlock=function(){return"value"===this.protoblock.style},this.isNoHitBlock=function(){return NOHIT.indexOf(this.name)!==-1},this.isArgBlock=function(){return"value"===this.protoblock.style||"arg"===this.protoblock.style},this.isTwoArgBlock=function(){return"twoarg"===this.protoblock.style},this.isTwoArgBooleanBlock=function(){return["equal","greater","less"].indexOf(this.name)!==-1},this.isClampBlock=function(){return"clamp"===this.protoblock.style||this.isDoubleClampBlock()||this.isArgFlowClampBlock()},this.isArgFlowClampBlock=function(){return"argflowclamp"===this.protoblock.style},this.isDoubleClampBlock=function(){return"doubleclamp"===this.protoblock.style},this.isNoRunBlock=function(){return"action"===this.name},this.isArgClamp=function(){return"argclamp"===this.protoblock.style||"argclamparg"===this.protoblock.style},this.isExpandableBlock=function(){return this.protoblock.expandable},this.getBlockId=function(){var a=blockBlocks.blockList.indexOf(this);return"_"+a.toString()},this.removeChildBitmap=function(a){for(var b=0;b<this.container.getNumChildren();b++)if(this.container.children[b].name===a){this.container.removeChild(this.container.children[b]);break}},this.loadThumbnail=function(a){var b=this.blocks.blockList.indexOf(this),c=this;if(null!==this.blocks.blockList[b].value||null!==a){var d=new Image;d.onload=function(){c.removeChildBitmap("media");var a=new createjs.Bitmap(d);a.name="media";var b=new createjs.Container;b.addChild(a);var e=600,f=450;d.width>d.height?d.width>e&&(a.scaleX=a.scaleY=a.scale=e/d.width):d.height>f&&(a.scaleX=a.scaleY=a.scale=f/d.height);var g=b.getBounds();b.cache(g.x,g.y,g.width,g.height),c.value=b.getCacheDataURL(),c.imageBitmap=a,c._positionMedia(a,a.image.width,a.image.height,c.protoblock.scale),c.container.addChild(a),c.updateCache()},null===a?d.src=this.value:d.src=a}},this._doOpenMedia=function(a){var b=docById("myOpenAll"),c=this;readerAction=function(d){window.scroll(0,0);var e=new FileReader;e.onloadend=function(){if(e.result){if("media"===c.name)return c.value=e.result,void c.loadThumbnail(null);c.value=[b.files[0].name,e.result],c.blocks.updateBlockText(a)}},"media"===c.name?e.readAsDataURL(b.files[0]):e.readAsText(b.files[0]),b.removeEventListener("change",readerAction)},b.addEventListener("change",readerAction,!1),b.focus(),b.click(),window.scroll(0,0)},this.collapseToggle=function(){function a(){var a=b.collapsed;if(null===b.collapseBitmap)return void console.log("collapse bitmap not ready");if(b.collapsed=!a,b.collapseBitmap.visible=a,b.expandBitmap.visible=!a,b.collapseBlockBitmap.visible=!a,b.highlightCollapseBlockBitmap.visible=!1,b.collapseText.visible=!a,a?b.bitmap.visible=!0:(b.bitmap.visible=!1,b.updateCache()),b.highlightBitmap.visible=!1,"action"===b.name)if(null!==b.connections[1]){var c=b.blocks.blockList[b.connections[1]].value;c.length>8&&(c=c.substr(0,7)+"..."),b.collapseText.text=c}else b.collapseText.text="";var d=b.container.getNumChildren()-1;if(b.container.setChildIndex(b.collapseText,d),b.blocks.dragGroup.length>0)for(var e=1;e<b.blocks.dragGroup.length;e++){var f=b.blocks.dragGroup[e];b.blocks.blockList[f].collapsed=!a,b.blocks.blockList[f].container.visible=a}b.collapseContainer.updateCache(),b.updateCache()}var b=this,c=this.blocks.blockList.indexOf(this);this.blocks.findDragGroup(c),a()},this._positionText=function(a){this.text.textBaseline="alphabetic",this.text.textAlign="right";var b=10*a;if(this.text.font=b+"px Sans",this.text.x=TEXTX*a/2,this.text.y=TEXTY*a/2,SPECIALINPUTS.indexOf(this.name)!==-1)this.text.textAlign="center",this.text.x=VALUETEXTX*a/2;else if(0===this.protoblock.args){var c=this.container.getBounds();this.text.x=c.width-25}else this.text.textAlign="left","booleanout"===this.docks[0][2]&&(this.text.y=this.docks[0][1]);z=this.container.getNumChildren()-1,this.container.setChildIndex(this.text,z),this.updateCache()},this._positionMedia=function(a,b,c,d){b>c?a.scaleX=a.scaleY=a.scale=MEDIASAFEAREA[2]/b*d/2:a.scaleX=a.scaleY=a.scale=MEDIASAFEAREA[3]/c*d/2,a.x=(MEDIASAFEAREA[0]-10)*d/2,a.y=MEDIASAFEAREA[1]*d/2},this._calculateCollapseHitArea=function(){var a=this.collapseContainer.getBounds(),b=new createjs.Shape,c=a.width,d=a.height;b.graphics.beginFill("#FFF").drawEllipse(-c/2,-d/2,c,d),b.x=c/2,b.y=d/2,this.collapseContainer.hitArea=b},this._positionCollapseLabel=function(a){this.collapseText.x=COLLAPSETEXTX*a/2,this.collapseText.y=COLLAPSETEXTY*a/2,z=this.container.getNumChildren()-1,this.container.setChildIndex(this.collapseText,z)},this._positionCollapseContainer=function(a){this.collapseContainer.x=this.container.x+COLLAPSEBUTTONXOFF*a/2,this.collapseContainer.y=this.container.y+COLLAPSEBUTTONYOFF*a/2},this._loadCollapsibleEventHandlers=function(){function a(){f||(f=!0,setTimeout(function(){f=!1},500),hideDOMLabel(),e||c.collapseToggle())}var c=this,d=this.blocks.blockList.indexOf(this);this._calculateCollapseHitArea(),this.collapseContainer.on("mouseover",function(a){c.blocks.highlight(d,!0),c.blocks.activeBlock=d,c.blocks.refreshCanvas()});var e=!1,f=!1,g=!1,h={x:0,y:0};this.collapseContainer.on("click",function(b){a()}),this.collapseContainer.on("mousedown",function(a){hideDOMLabel(),trashcan.show(),e=!1,g=!0;var d=new Date;b.mouseDownTime=d.getTime(),h={x:c.collapseContainer.x-Math.round(a.stageX/b.blockScale),y:c.collapseContainer.y-Math.round(a.stageY/b.blockScale)}}),this.collapseContainer.on("pressup",function(f){if(g)if(g=!1,e)c._collapseOut(b,d,e,f),e=!1;else{var h=new Date;if(h.getTime()-b.mouseDownTime>1e3){var h=new Date;b.mouseDownTime=h.getTime(),a()}}}),this.collapseContainer.on("mouseout",function(f){if(g)if(g=!1,e)c._collapseOut(b,d,e,f),e=!1;else{var h=new Date;if(h.getTime()-b.mouseDownTime<200){var h=new Date;b.mouseDownTime=h.getTime(),a()}}}),this.collapseContainer.on("pressmove",function(a){if(g){e=!0;var f=c.collapseContainer.x,i=c.collapseContainer.y;c.collapseContainer.x=Math.round(a.stageX/b.blockScale)+h.x,c.collapseContainer.y=Math.round(a.stageY/b.blockScale)+h.y;var j=c.collapseContainer.x-f,k=c.collapseContainer.y-i;if(c.container.x+=j,c.container.y+=k,trashcan.overTrashcan(a.stageX/b.blockScale,a.stageY/b.blockScale)?trashcan.startHighlightAnimation():trashcan.stopHighlightAnimation(),c.blocks.findDragGroup(d),c.blocks.dragGroup.length>0)for(var l=0;l<c.blocks.dragGroup.length;l++){var m=c.blocks.dragGroup[l];0!==l&&c.blocks.moveBlockRelative(m,j,k)}c.blocks.refreshCanvas()}})},this._collapseOut=function(a,b,c,d){trashcan.hide(),a.unhighlight(b),c&&(trashcan.overTrashcan(d.stageX/a.blockScale,d.stageY/a.blockScale)?trashcan.isVisible&&a.sendStackToTrash(this):a.blockMoved(b)),a.activeBlock===myBlock&&(a.unhighlight(null),a.activeBlock=null,a.refreshCanvas())},this._calculateBlockHitArea=function(){var a=new createjs.Shape,b=this.container.getBounds();null===b&&(this._createCache(),b=this.bounds),this.isClampBlock()||this.isArgClamp()?a.graphics.beginFill("#FFF").drawRect(0,0,b.width,STANDARDBLOCKHEIGHT):this.isNoHitBlock()?a.graphics.beginFill("#FFF").drawRect(0,0,0,0):a.graphics.beginFill("#FFF").drawRect(0,0,b.width,.75*b.height),this.container.hitArea=a},this._loadEventHandlers=function(){var a=this,b=this.blocks.blockList.indexOf(this),c=this.blocks;this._calculateBlockHitArea(),this.container.on("mouseover",function(a){c.highlight(b,!0),c.activeBlock=b,c.refreshCanvas()});var d=!1,e=!1,f=!1,g=window.hasMouse;this.container.on("click",function(h){if(c.activeBlock=b,d=!0,!f&&(f=!0,setTimeout(function(){f=!1},500),hideDOMLabel(),!window.hasMouse&&g||window.hasMouse&&!e))if(c.selectingStack){var i=c.findTopBlock(b);c.selectedStack=i,c.selectingStack=!1}else if("media"===a.name)a._doOpenMedia(b);else if("loadFile"===a.name)a._doOpenMedia(b);else if(SPECIALINPUTS.indexOf(a.name)!==-1)a.trash||a._changeLabel();else if(!c.inLongPress){var i=c.findTopBlock(b);console.log("running from "+c.blockList[i].name),c.logo.runLogoCommands(i)}}),this.container.on("mousedown",function(f){if(null==a.connections[0]){var h=new Date;c.mouseDownTime=h.getTime(),c.longPressTimeout=setTimeout(function(){c.triggerLongPress(a)},LONGPRESSTIME)}trashcan.show(),c.raiseStackToTop(b),null!=a.collapseContainer&&c.stage.setChildIndex(a.collapseContainer,c.stage.getNumChildren()-1),e=!1;var i={x:a.container.x-Math.round(f.stageX/c.blockScale),y:a.container.y-Math.round(f.stageY/c.blockScale)};a.container.on("mouseout",function(b){d||(c.inLongPress||a._mouseoutCallback(b,e,d,!0),e=!1)}),a.container.on("pressup",function(b){d||(c.inLongPress||a._mouseoutCallback(b,e,d,!0),e=!1)});var j={x:f.stageX/c.blockScale,y:f.stageY/c.blockScale};a.container.on("pressmove",function(d){d.nativeEvent.preventDefault(),null!=c.longPressTimeout&&(clearTimeout(c.longPressTimeout),c.longPressTimeout=null),e||null==a.label||(a.label.style.display="none"),window.hasMouse?e=!0:setTimeout(function(){e=Math.abs(d.stageX/c.blockScale-j.x)+Math.abs(d.stageY/c.blockScale-j.y)>20&&!window.hasMouse,g=!e},200);var f=a.container.x,h=a.container.y,k=Math.round(Math.round(d.stageX/c.blockScale)+i.x-f),l=Math.round(Math.round(d.stageY/c.blockScale)+i.y-h),m=h+l;if(0===c.stage.y&&m<45*c.blockScale&&(l+=45*c.blockScale-m),c.moveBlockRelative(b,k,l),trashcan.overTrashcan(d.stageX/c.blockScale,d.stageY/c.blockScale)?trashcan.startHighlightAnimation():trashcan.stopHighlightAnimation(),a.isValueBlock()&&"media"!==a.name){var n=a.container.getNumChildren()-1;a.container.setChildIndex(a.text,n)}else null!=a.collapseContainer&&a._positionCollapseContainer(a.protoblock.scale);if(c.findDragGroup(b),c.dragGroup.length>0)for(var o=0;o<c.dragGroup.length;o++){var p=c.dragGroup[o];0!==o&&c.moveBlockRelative(p,k,l)}c.refreshCanvas()})}),this.container.on("mouseout",function(b){c.inLongPress||a._mouseoutCallback(b,e,d,!0),e=!1}),this.container.on("pressup",function(b){c.inLongPress||a._mouseoutCallback(b,e,d,!1),e=!1})},this._mouseoutCallback=function(a,c,d,e){var f=this.blocks.blockList.indexOf(this);if(trashcan.hide(),null!=this.blocks.longPressTimeout&&(clearTimeout(this.blocks.longPressTimeout),this.blocks.longPressTimeout=null),c)if(trashcan.overTrashcan(a.stageX/b.blockScale,a.stageY/b.blockScale))trashcan.isVisible&&b.sendStackToTrash(this);else{var g=new Date;b.mouseDownTime=g.getTime(),this.blocks.blockMoved(f),this.blocks.adjustDocks(this.blocks.blockList.indexOf(this),!0)}else if((SPECIALINPUTS.indexOf(this.name)!==-1||["media","loadFile"].indexOf(this.name)!==-1)&&!d){var g=new Date;if(g.getTime()-b.mouseDownTime<500&&!this.trash){var g=new Date;b.mouseDownTime=g.getTime(),"media"===this.name||"loadFile"===this.name?this._doOpenMedia(f):this._changeLabel()}}e&&(null!=this.bounds&&(a.stageX/b.blockScale<this.container.x||a.stageX/b.blockScale>this.container.x+this.bounds.width||a.stageY/b.blockScale<this.container.y||a.stageY/b.blockScale>this.container.y+this.bounds.height)?(this._labelChanged(),hideDOMLabel(),this.blocks.unhighlight(null),this.blocks.refreshCanvas()):this.blocks.activeBlock!==f&&(hideDOMLabel(),this.blocks.unhighlight(null),this.blocks.refreshCanvas()),this.blocks.activeBlock=null)},this._ensureDecorationOnTop=function(){for(var a=0;a<this.container.getNumChildren();a++)if("decoration"===this.container.children[a].name){if("drum"===this.name){var b=this.container.getBounds();if(this.collapsed)var c=25*this.protoblock.scale/2;else var c=0;for(var d=0;d<this.blocks.turtles.turtleList.length;d++)if(this.blocks.turtles.turtleList[d].startBlock===this){this.blocks.turtles.turtleList[d].decorationBitmap.x=b.width-c-50*this.protoblock.scale/2;break}}this.container.setChildIndex(this.container.children[a],this.container.getNumChildren()-1);break}},this._changeLabel=function(){var a=this,b=this.blocks,c=this.container.x,d=this.container.y,e=b.canvas.offsetLeft+28*b.blockScale,f=b.canvas.offsetTop+6*b.blockScale,g=!1;if(!window.hasMouse&&b.stage.y+d>75){g=!0;var h=b.stage.y;b.stage.y=-d+75}var i=this.label?this.label.value:this.value,j=docById("labelDiv");if("text"===this.name){j.innerHTML='<input id="textLabel" style="position: absolute; -webkit-user-select: text;-moz-user-select: text;-ms-user-select: text;" class="text" type="text" value="'+i+'" />',j.classList.add("hasKeyboard"),this.label=docById("textLabel")}else if("solfege"===this.name){for(var k=splitSolfege(this.value),l=k[0],m=k[1],n=_("ti la sol fa mi re do").split(" "),o='<select name="solfege" id="solfegeLabel" style="position: absolute;  background-color: #88e20a; width: 100px;">',p=0;p<SOLFNOTES.length;p++)o+=l===n[p]?'<option value="'+SOLFNOTES[p]+'" selected>'+n[p]+"</option>":l===SOLFNOTES[p]?'<option value="'+SOLFNOTES[p]+'" selected>'+n[p]+"</option>":'<option value="'+SOLFNOTES[p]+'">'+n[p]+"</option>";o+="</select>",""===m&&(m="♮"),o+='<select name="noteattr" id="noteattrLabel" style="position: absolute;  background-color: #88e20a; width: 60px;">';for(var p=0;p<SOLFATTRS.length;p++)o+=m===SOLFATTRS[p]?'<option value="'+m+'" selected>'+m+"</option>":'<option value="'+SOLFATTRS[p]+'">'+SOLFATTRS[p]+"</option>";o+="</select>",j.innerHTML=o,this.label=docById("solfegeLabel"),this.labelattr=docById("noteattrLabel")}else if("eastindiansolfege"===this.name){for(var k=splitSolfege(this.value),l=WESTERN2EISOLFEGENAMES[k[0]],m=k[1],q=["ni","dha","pa","ma","ga","re","sa"],o='<select name="solfege" id="solfegeLabel" style="position: absolute;  background-color: #88e20a; width: 100px;">',p=0;p<SOLFNOTES.length;p++)o+=l===q[p]?'<option value="'+SOLFNOTES[p]+'" selected>'+q[p]+"</option>":l===WESTERN2EISOLFEGENAMES[SOLFNOTES[p]]?'<option value="'+SOLFNOTES[p]+'" selected>'+q[p]+"</option>":'<option value="'+SOLFNOTES[p]+'">'+q[p]+"</option>";o+="</select>",""===m&&(m="♮"),o+='<select name="noteattr" id="noteattrLabel" style="position: absolute;  background-color: #88e20a; width: 60px;">';for(var p=0;p<SOLFATTRS.length;p++)o+=m===SOLFATTRS[p]?'<option value="'+m+'" selected>'+m+"</option>":'<option value="'+SOLFATTRS[p]+'">'+SOLFATTRS[p]+"</option>";o+="</select>",j.innerHTML=o,this.label=docById("solfegeLabel"),this.labelattr=docById("noteattrLabel")}else if("notename"===this.name){const r=["B","A","G","F","E","D","C"],s=["♯♯","♯","♮","♭","♭♭"];if(null!=this.value){var l=this.value[0];if(1===this.value.length)var m="♮";else if(2===this.value.length)var m=this.value[1];else var m=this.value[1]+this.value[1]}else var l="G",m="♮";for(var o='<select name="notename" id="notenameLabel" style="position: absolute;  background-color: #88e20a; width: 60px;">',p=0;p<r.length;p++)o+=l===r[p]?'<option value="'+l+'" selected>'+l+"</option>":'<option value="'+r[p]+'">'+r[p]+"</option>";o+="</select>",""===m&&(m="♮"),o+='<select name="noteattr" id="noteattrLabel" style="position: absolute;  background-color: #88e20a; width: 60px;">';for(var p=0;p<s.length;p++)o+=m===s[p]?'<option value="'+m+'" selected>'+m+"</option>":'<option value="'+s[p]+'">'+s[p]+"</option>";o+="</select>",j.innerHTML=o,this.label=docById("notenameLabel"),this.labelattr=docById("noteattrLabel")}else if("modename"===this.name){if(null!=this.value)var t=this.value[0];else var t=getModeName(DEFAULTMODE);for(var o='<select name="modename" id="modenameLabel" style="position: absolute;  background-color: #88e20a; width: 60px;">',p=0;p<MODENAMES.length;p++)o+=0===MODENAMES[p][0].length?'<option value="'+MODENAMES[p][1]+'">'+MODENAMES[p][1]+"</option>":l===MODENAMES[p][0]?'<option value="'+t+'" selected>'+t+"</option>":l===MODENAMES[p][1]?'<option value="'+t+'" selected>'+t+"</option>":'<option value="'+MODENAMES[p][0]+'">'+MODENAMES[p][0]+"</option>";o+="</select>",j.innerHTML=o,this.label=docById("modenameLabel")}else if("drumname"===this.name){if(null!=this.value)var u=getDrumName(this.value);else var u=getDrumName(DEFAULTDRUM);for(var o='<select name="drumname" id="drumnameLabel" style="position: absolute;  background-color: #00b0a4; width: 60px;">',p=0;p<DRUMNAMES.length;p++)o+=0===DRUMNAMES[p][0].length?'<option value="'+DRUMNAMES[p][1]+'">'+DRUMNAMES[p][1]+"</option>":u===DRUMNAMES[p][0]?'<option value="'+u+'" selected>'+u+"</option>":u===DRUMNAMES[p][1]?'<option value="'+u+'" selected>'+u+"</option>":'<option value="'+DRUMNAMES[p][0]+'">'+DRUMNAMES[p][0]+"</option>";o+="</select>",j.innerHTML=o,this.label=docById("drumnameLabel")}else if("voicename"===this.name){if(null!=this.value)var v=getVoiceName(this.value);else var v=getVoiceName(DEFAULTVOICE);for(var o='<select name="voicename" id="voicenameLabel" style="position: absolute;  background-color: #00b0a4; width: 60px;">',p=0;p<VOICENAMES.length;p++)o+=0===VOICENAMES[p][0].length?'<option value="'+VOICENAMES[p][1]+'">'+VOICENAMES[p][1]+"</option>":v===VOICENAMES[p][0]?'<option value="'+v+'" selected>'+v+"</option>":v===VOICENAMES[p][1]?'<option value="'+v+'" selected>'+v+"</option>":'<option value="'+VOICENAMES[p][0]+'">'+VOICENAMES[p][0]+"</option>";o+="</select>",j.innerHTML=o,this.label=docById("voicenameLabel")}else{j.innerHTML='<input id="numberLabel" style="position: absolute; -webkit-user-select: text;-moz-user-select: text;-ms-user-select: text;" class="number" type="number" value="'+i+'" />',j.classList.add("hasKeyboard"),this.label=docById("numberLabel")}var w=!1,x=function(c){w&&(a._labelChanged(),c.preventDefault(),j.classList.remove("hasKeyboard"),window.scroll(0,0),a.label.removeEventListener("keypress",y),g&&(b.stage.y=h,b.updateStage()))};"text"!==this.name&&"number"!==this.name||this.label.addEventListener("blur",x);var y=function(a){[13,10,9].indexOf(a.keyCode)!==-1&&x(a)};this.label.addEventListener("keypress",y),this.label.addEventListener("change",function(){a._labelChanged()}),null!=this.labelattr&&this.labelattr.addEventListener("change",function(){a._labelChanged()}),this.label.style.left=Math.round((c+b.stage.x)*b.blockScale+e)+"px",this.label.style.top=Math.round((d+b.stage.y)*b.blockScale+f)+"px",
null!=this.labelattr?(this.label.style.width=Math.round(60*b.blockScale)*this.protoblock.scale/2+"px",this.labelattr.style.left=Math.round((c+b.stage.x+60)*b.blockScale+e)+"px",this.labelattr.style.top=Math.round((d+b.stage.y)*b.blockScale+f)+"px",this.labelattr.style.width=Math.round(60*b.blockScale)*this.protoblock.scale/2+"px",this.labelattr.style.fontSize=Math.round(20*b.blockScale*this.protoblock.scale/2)+"px"):this.label.style.width=Math.round(100*b.blockScale)*this.protoblock.scale/2+"px",this.label.style.fontSize=Math.round(20*b.blockScale*this.protoblock.scale/2)+"px",this.label.style.display="",this.label.focus(),setTimeout(function(){a.label.style.display="",a.label.focus(),w=!0},100)},void(this._labelChanged=function(){if(null==this||null==this.label)return void(this._label_lock=!1);this._label_lock=!0,this.label.style.display="none",null!=this.labelattr&&(this.labelattr.style.display="none");var a=this.value;""===this.label.value&&(this.label.value="_");var c=this.label.value;if(null!=this.labelattr){var d=this.labelattr.value;switch(d){case"♯♯":case"♯":case"♭♭":case"♭":c+=d}}if(a===c)return void(this._label_lock=!1);var e=this.connections[0];if("text"===this.name&&null!=e){var f=this.blocks.blockList[e];switch(f.name){case"action":var g=this;setTimeout(function(){g.blocks.palettes.removeActionPrototype(a)},1e3);var h=this.blocks.findUniqueActionName(c);if(h!==c){c=h,this.value=c;var i=this.value.toString();i.length>8&&(i=i.substr(0,7)+"..."),this.text.text=i,this.label.value=c,this.updateCache()}}}if("number"===this.name){if(this.value=Number(c),isNaN(this.value)){var j=this.blocks.blockList.indexOf(this);this.blocks.errorMsg(c+": Not a number",j),this.blocks.refreshCanvas(),this.value=a}}else this.value=c;if("solfege"===this.name){var k=splitSolfege(this.value),i=i18nSolfege(k[0]),l=k[1];"♮"!==l&&(i+=l)}else if("eastindiansolfege"===this.name){var k=splitSolfege(this.value),i=WESTERN2EISOLFEGENAMES[k[0]],l=k[1];"♮"!==l&&(i+=l)}else var i=this.value.toString();i.length>8&&(i=i.substr(0,7)+"..."),this.text.text=i,this.label.style.display="none";var m=this.container.getNumChildren()-1;this.container.setChildIndex(this.text,m),this.updateCache();var e=this.connections[0];if("text"===this.name&&null!=e){var f=this.blocks.blockList[e];switch(f.name){case"action":this.blocks.renameDos(a,c),a===_("action")&&(this.blocks.newNameddoBlock(c,this.blocks.actionHasReturn(e),this.blocks.actionHasArgs(e)),this.blocks.setActionProtoVisiblity(!1)),this.blocks.newNameddoBlock(c,this.blocks.actionHasReturn(e),this.blocks.actionHasArgs(e));for(var n=b.palettes.dict.action,o=0;o<n.protoList.length;o++){var p=n.protoList[o];a===_("action")?"nameddo"===p.name&&0===p.defaults.length&&(p.hidden=!0):"nameddo"===p.name&&p.defaults[0]===a&&n.remove(p,a)}a===_("action")&&(this.blocks.newNameddoBlock(c,this.blocks.actionHasReturn(e),this.blocks.actionHasArgs(e)),this.blocks.setActionProtoVisiblity(!1)),this.blocks.renameNameddos(a,c),this.blocks.palettes.hide(),this.blocks.palettes.updatePalettes("action"),this.blocks.palettes.show();break;case"storein":"box"!==this.value&&(this.blocks.newStoreinBlock(this.value),this.blocks.newNamedboxBlock(this.value)),this.blocks.renameBoxes(a,c),this.blocks.renameNamedboxes(a,c),this.blocks.palettes.hide(),this.blocks.palettes.updatePalettes("boxes"),this.blocks.palettes.show();break;case"setdrum":case"playdrum":_THIS_IS_MUSIC_BLOCKS_&&"http"===c.slice(0,4)&&this.blocks.logo.synth.loadSynth(c)}}this._label_lock=!1,_THIS_IS_MUSIC_BLOCKS_&&("drumname"===this.name?this.blocks.logo.synth.loadSynth(getDrumSynthName(this.value)):"voicename"===this.name&&this.blocks.logo.synth.loadSynth(getVoiceSynthName(this.value)))}))}function $(){for(var a=new Array,b=0;b<arguments.length;b++){var c=arguments[b];if("string"==typeof c&&(c=docById(c)),1===arguments.length)return c;a.push(c)}return a}function _makeBitmap(a,b,c,d){var e=new Image;e.onload=function(){var a=new createjs.Bitmap(e);c(b,a,d)},e.src="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(a)))}const LONGPRESSTIME=1500,COLLAPSABLES=["drum","start","action","matrix","pitchdrummatrix","rhythmruler","status","pitchstaircase","tempo","pitchslider","modewidget"],NOHIT=["hidden","hiddennoflow"],SPECIALINPUTS=["text","number","solfege","eastindiansolfege","notename","voicename","modename","drumname"];window.hasMouse=!1,document.addEventListener("mousemove",function(a){window.hasMouse=!0});