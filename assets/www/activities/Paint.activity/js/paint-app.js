/*! Sugarizer 2018-05-08 */
define([],function(){function a(){for(var a=0;a<j.paletteModesButtons.length;a++)j.paletteModesButtons[a].className=j.paletteModesButtons[a].className.replace(/(?:^|\s)active(?!\S)/g,"")}function b(a){a.className+=" active"}function c(a){h(),j.data.mode=a,j.handleCurrentFloatingElement(),j.data.tool.onMouseDown=j.modes[a].onMouseDown,j.data.tool.onMouseDrag=j.modes[a].onMouseDrag,j.data.tool.onMouseUp=j.modes[a].onMouseUp}function d(){var a=j.elements.canvas.getContext("2d");a.fillStyle="#ffffff",a.fillRect(0,0,parseInt(j.elements.canvas.style.width),parseInt(j.elements.canvas.style.height)),j.saveCanvas()}function e(){if(j.handleCurrentFloatingElement(),!(j.data.history.undo.length<2)){j.modes.Pen.point=void 0;var a=j.elements.canvas,b=a.getContext("2d"),c=new Image,d=j.data.history.undo[j.data.history.undo.length-2],e=j.data.history.undo[j.data.history.undo.length-1];return c.onload=function(){if(b.save(),b.setTransform(1,0,0,1,0,0),b.clearRect(0,0,a.width,a.height),b.drawImage(c,0,0),b.restore(),j.data.isShared)try{j.collaboration.sendMessage({action:"toDataURL",data:{width:j.elements.canvas.width/window.devicePixelRatio,height:j.elements.canvas.height/window.devicePixelRatio,src:j.collaboration.compress(j.elements.canvas.toDataURL())}})}catch(a){return}},c.src=d,j.data.history.redo.push(e),j.data.history.undo.pop(),g(),d}}function f(){if(i(),0!==j.data.history.redo.length){j.modes.Pen.point=void 0;var a=j.elements.canvas,b=a.getContext("2d"),c=new Image,d=j.data.history.redo[j.data.history.redo.length-1];return c.onload=function(){if(b.save(),b.setTransform(1,0,0,1,0,0),b.clearRect(0,0,a.width,a.height),b.drawImage(c,0,0),b.restore(),j.data.isShared)try{j.collaboration.sendMessage({action:"toDataURL",data:{width:j.elements.canvas.width/window.devicePixelRatio,height:j.elements.canvas.height/window.devicePixelRatio,src:j.collaboration.compress(j.elements.canvas.toDataURL())}})}catch(a){}},c.src=d,j.data.history.undo.push(d),j.data.history.redo.pop(),g(),d}}function g(){var a="0.4",b="1";return j.data.isShared&&!j.data.isHost?(j.elements.redoButton.style.opacity=a,void(j.elements.undoButton.style.opacity=a)):(0===j.data.history.redo.length?j.elements.redoButton.style.opacity=a:j.elements.redoButton.style.opacity=b,void(j.data.history.undo.length<=1?j.elements.undoButton.style.opacity=a:j.elements.undoButton.style.opacity=b))}function h(){var a=j.elements.canvas;try{var b=a.toDataURL()}catch(a){}(j.data.history.undo.length>0&&j.data.history.undo[j.data.history.undo.length-1]!==b||0===j.data.history.undo.length)&&(j.data.history.undo.push(b),j.data.history.redo=[]),j.data.history.redo.length>j.data.history.limit&&(j.data.history.redo=j.data.history.redo.slice(1)),j.data.history.undo.length>j.data.history.limit&&(j.data.history.undo=j.data.history.undo.slice(1)),g(),j.data.isShared&&!j.data.isHost&&j.collaboration.sendMessage({action:"saveCanvas"})}function i(){void 0!==j.data.currentElement&&("copy/paste"!=j.data.currentElement.type?(j.data.currentElement.element.parentElement.removeChild(j.data.currentElement.element),j.data.currentElement=void 0):"Copy"!=j.data.mode&&"Paste"!=j.data.mode&&(j.data.currentElement.element.parentElement.removeChild(j.data.currentElement.element),j.data.currentElement=void 0))}var j={libs:{},palettes:{},elements:{},buttons:{},paletteModesButtons:[],data:{isCompressEnabled:!0,isHost:!0,history:{limit:15,undo:[],redo:[]},size:5,color:{stroke:"#1500A7",fill:"#ff0000"},tool:void 0},modes:{},switchMode:c,undoCanvas:e,redoCanvas:f,displayUndoRedoButtons:g,saveCanvas:h,clearCanvas:d,paletteRemoveActiveClass:a,addActiveClassToElement:b,handleCurrentFloatingElement:i};return j});