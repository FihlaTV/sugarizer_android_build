/*! Sugarizer 2018-07-01 */
define([],function(){function a(){var a="1",b=PaintApp.data.size;switch(b){case 5:b=10,a="2";break;case 10:b=15,a="3";break;case 15:b=20,a="4";break;case 20:b=5,a="1"}PaintApp.data.size=b,PaintApp.elements.sizeButton.style.backgroundImage="url(icons/size-"+a+".svg)"}function b(){var b=document.getElementById("size-button");PaintApp.elements.sizeButton=b,b.addEventListener("click",a)}var c={initGui:b};return c});