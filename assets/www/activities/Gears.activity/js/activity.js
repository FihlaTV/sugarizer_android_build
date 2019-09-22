/*! Sugarizer 2019-09-21 */
define(["sugar-web/activity/activity","sugar-web/graphics/radiobuttonsgroup","gearsketch_main"],function(a,b){requirejs(["domReady!"],function(c){function d(a,b,c){null===a?(e.board=window.gearsketch.model.Board.fromObject(JSON.parse(c)),console.log("read done.")):console.log("read failed.")}var e;a.setup(),document.getElementById("stop-button").addEventListener("click",function(b){console.log("writing...");var c=JSON.stringify(e.board);a.getDatastoreObject().setDataAsText(c),a.getDatastoreObject().save(function(a){null===a?console.log("write done."):console.log("write failed.")})}),e=new window.gearsketch.GearSketch(!1),a.getDatastoreObject().loadAsText(d);var f=document.getElementById("gear-button"),g=document.getElementById("chain-button"),h=document.getElementById("momentum-button"),i=document.getElementById("play-button");e.selectButton=function(a){return this.selectedButton=a},f.addEventListener("click",function(a){e.isDemoPlaying&&e.stopDemo(),e.selectButton("gearButton")}),g.addEventListener("click",function(a){e.isDemoPlaying&&e.stopDemo(),e.selectButton("chainButton")}),h.addEventListener("click",function(a){e.isDemoPlaying&&e.stopDemo(),e.selectButton("momentumButton")}),i.addEventListener("click",function(a){e.isDemoPlaying&&e.stopDemo(),"playButton"==e.selectedButton?e.selectButton(null):e.selectButton("playButton")}),new b.RadioButtonsGroup([f,g,h,i]),document.getElementById("clear-button").addEventListener("click",function(a){if(e.isDemoPlaying)return e.showButtons=!1,void e.stopDemo();e.board.clear()}),document.getElementById("help-button").addEventListener("click",function(a){if(e.isDemoPlaying)return void e.stopDemo();e.playDemo()})})});