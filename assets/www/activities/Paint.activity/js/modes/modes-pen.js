/*! Sugarizer 2018-07-01 */
define([],function(){function a(){PaintApp.elements.penButton=document.getElementById("pen-button"),PaintApp.paletteModesButtons.push(PaintApp.elements.penButton),PaintApp.elements.penButton.addEventListener("click",function(){PaintApp.paletteRemoveActiveClass(),PaintApp.addActiveClassToElement(PaintApp.elements.penButton),PaintApp.switchMode("Pen")})}var b={initGui:a,point:void 0,onMouseDown:function(a){PaintApp.modes.Pen.point=a.point;var b=PaintApp.elements.canvas.getContext("2d");b.beginPath(),b.strokeStyle=PaintApp.data.color.fill,b.lineCap="round",b.lineWidth=PaintApp.data.size,b.moveTo(a.point.x+1,a.point.y+1),b.lineTo(a.point.x,a.point.y),b.stroke(),PaintApp.data.isShared&&PaintApp.collaboration.sendMessage({action:"path",data:{lineWidth:PaintApp.data.size,lineCap:"round",strokeStyle:PaintApp.data.color.fill,from:{x:a.point.x+1,y:a.point.y+1},to:{x:a.point.x,y:a.point.y}}})},onMouseDrag:function(a){if(PaintApp.modes.Pen.point){var b=PaintApp.elements.canvas.getContext("2d");b.beginPath(),b.strokeStyle=PaintApp.data.color.fill,b.lineWidth=PaintApp.data.size,b.moveTo(PaintApp.modes.Pen.point.x,PaintApp.modes.Pen.point.y),b.lineTo(a.point.x,a.point.y),b.stroke(),PaintApp.data.isShared&&PaintApp.collaboration.sendMessage({action:"path",data:{lineWidth:PaintApp.data.size,lineCap:"round",strokeStyle:PaintApp.data.color.fill,from:{x:PaintApp.modes.Pen.point.x,y:PaintApp.modes.Pen.point.y},to:{x:a.point.x,y:a.point.y}}}),PaintApp.modes.Pen.point=a.point}},onMouseUp:function(a){PaintApp.saveCanvas()}};return b});