/*! Sugarizer 2017-09-04 */
define([],function(){function a(){PaintApp.clearCanvas(),PaintApp.data.isShared&&PaintApp.collaboration.sendMessage({action:"clearCanvas"})}function b(){var b=document.getElementById("clear-button");b.addEventListener("click",a)}var c={initGui:b};return c});