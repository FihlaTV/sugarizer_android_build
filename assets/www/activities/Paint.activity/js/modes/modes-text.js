/*! Sugarizer 2018-07-01 */
define([],function(){function a(){PaintApp.elements.textButton=document.getElementById("text-button"),PaintApp.paletteModesButtons.push(PaintApp.elements.textButton),new PaintApp.palettes.textPalette.TextPalette(PaintApp.elements.textButton,void 0),PaintApp.elements.textFontSelect=document.getElementById("text-font-select"),PaintApp.elements.textInput=document.getElementById("text-input"),PaintApp.elements.textButton.addEventListener("click",function(){PaintApp.paletteRemoveActiveClass(),PaintApp.addActiveClassToElement(PaintApp.elements.textButton),PaintApp.switchMode("Text")})}var b={initGui:a,defaultSize:25,fontFamily:"Arial",onMouseDown:function(a){if(PaintApp.handleCurrentFloatingElement(),text=PaintApp.elements.textInput.value,text){var b=document.createElement("span");b.innerHTML=text,b.style.position="absolute",b.style.padding="0px",b.size=text.length+1,b.style.whiteSpace="nowrap",b.style.fontFamily=PaintApp.modes.Text.fontFamily,b.style.width="auto",b.style.lineHeight=PaintApp.modes.Text.lineHeight,b.style.fontSize=PaintApp.modes.Text.defaultSize+"px",b.style.opacity="0.5",b.style.borderRadius="0px",b.style.border="5px dotted #500",b.style.color=PaintApp.data.color.fill;var c=a.point.x+"px",d=a.point.y+55+"px";b.style.left=c,b.style.top=d,b.style.verticalAlign="bottom",document.body.appendChild(b),b.style.left=parseInt(c)-b.getBoundingClientRect().width/2+"px",b.style.top=parseInt(d)-b.getBoundingClientRect().height/2+"px",PaintApp.data.currentElement={type:"text",element:b,startPoint:{x:parseInt(b.style.left)+b.getBoundingClientRect().width/2,y:parseInt(b.style.top)+b.getBoundingClientRect().height/2}}}},onMouseDrag:function(a){if(PaintApp.data.currentElement){var b=Math.abs(a.point.x-PaintApp.data.currentElement.startPoint.x),c=Math.abs(a.point.y-PaintApp.data.currentElement.startPoint.y+55);b>c?distance=b:distance=c,PaintApp.data.currentElement.element.style.fontSize=PaintApp.modes.Text.defaultSize+distance+"px",PaintApp.data.currentElement.element.style.left=PaintApp.data.currentElement.startPoint.x-PaintApp.data.currentElement.element.getBoundingClientRect().width/2+"px",PaintApp.data.currentElement.element.style.top=PaintApp.data.currentElement.startPoint.y-PaintApp.data.currentElement.element.getBoundingClientRect().height/2+"px"}},onMouseUp:function(a){if(PaintApp.data.currentElement){var b=PaintApp.data.currentElement.element.innerHTML,c=PaintApp.data.currentElement.element.getBoundingClientRect().top-55+PaintApp.data.currentElement.element.getBoundingClientRect().height,d=PaintApp.elements.canvas.getContext("2d");d.font=PaintApp.data.currentElement.element.style.fontSize+" "+PaintApp.modes.Text.fontFamily,d.fillStyle=PaintApp.data.color.fill,d.textAlign="start",d.fillText(b,5+PaintApp.data.currentElement.element.getBoundingClientRect().left,c),PaintApp.data.isShared&&PaintApp.collaboration.sendMessage({action:"text",data:{font:PaintApp.data.currentElement.element.style.fontSize+" "+PaintApp.modes.Text.fontFamily,fillStyle:PaintApp.data.color.fill,textAlign:"start",text:b,left:5+PaintApp.data.currentElement.element.getBoundingClientRect().left,top:c}}),PaintApp.data.currentElement.element.parentElement.removeChild(PaintApp.data.currentElement.element),PaintApp.data.currentElement=void 0,PaintApp.saveCanvas()}}};return b});