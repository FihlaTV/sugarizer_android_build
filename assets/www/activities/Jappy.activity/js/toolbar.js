/*! Sugarizer 2017-08-25 */
riot.tag2("tool-bar",'<div id="main-toolbar" class="toolbar"> <button class="toolbutton" id="activity-button" title="Jappy Activity"></button> <hr> <button class="toolbutton" id="example-button" title="Load an example" ref="examplebutton"></button> <hr> <button class="toolbutton {colored: window.state!=\'run\'}" id="run-button" title="Execute" ref="runbutton"></button> <button class="toolbutton {colored: window.state==\'run\'}" id="break-button" title="Break execution" ref="breakbutton"></button> <button class="toolbutton {colored: window.state!=\'clean\'}" id="erase-button" title="Clear the canvas" ref="erasebutton"></button> <button class="toolbutton {hidden: window.state==\'run\'}" id="start-button" title="Start fullscreen" ref="startbutton"></button> <button class="toolbutton {hidden: window.state==\'stopped\'} {hidden: window.state==\'clean\'}" id="full-button" title="View fullscreen" ref="fullbutton"></button> <button class="toolbutton" id="export-button" title="Export or publish" ref="exportbutton"></button> <button class="toolbutton pull-right" id="stop-button" title="Stop" ref="stopbutton"></button> </div>','tool-bar #main-toolbar #run-button,[data-is="tool-bar"] #main-toolbar #run-button{ background-image: url(icons/run_bw.svg); } tool-bar #main-toolbar #run-button.colored,[data-is="tool-bar"] #main-toolbar #run-button.colored{ background-image: url(icons/run_color.svg); } tool-bar #main-toolbar #break-button,[data-is="tool-bar"] #main-toolbar #break-button{ background-image: url(icons/stopit_bw.svg); } tool-bar #main-toolbar #break-button.colored,[data-is="tool-bar"] #main-toolbar #break-button.colored{ background-image: url(icons/stopit_color.svg); } tool-bar #main-toolbar #erase-button,[data-is="tool-bar"] #main-toolbar #erase-button{ background-image: url(icons/eraser_bw.svg); } tool-bar #main-toolbar #erase-button.colored,[data-is="tool-bar"] #main-toolbar #erase-button.colored{ background-image: url(icons/eraser_color.svg); } tool-bar #main-toolbar #example-button,[data-is="tool-bar"] #main-toolbar #example-button{ background-image: url(icons/load-example.svg); } tool-bar #main-toolbar #start-button,[data-is="tool-bar"] #main-toolbar #start-button{ background-image: url(icons/activity-start.svg); } tool-bar #main-toolbar #full-button,[data-is="tool-bar"] #main-toolbar #full-button{ background-image: url(icons/view-fullscreen.svg); } tool-bar #main-toolbar #export-button,[data-is="tool-bar"] #main-toolbar #export-button{ background-image: url(icons/export-or-publish.svg); } tool-bar .hidden,[data-is="tool-bar"] .hidden{ display: none !important; }',"",function(a){function b(){function a(a){c.refs.stopbutton.onclick=function(){event_bus.trigger("activity-save",a)}}function b(){c.refs.stopbutton.onclick=function(){var a;event_bus.trigger("activity-save",activity),a=window.location.protocol+"//"+window.location.host+"/",window.location=a+"shutdown"}}this.refs.runbutton.onclick=function(){window.state="run",c.update(),event_bus.trigger("run-code")},this.refs.startbutton.onclick=function(){window.state="run",c.update(),event_bus.trigger("run-fullscreen")},this.refs.fullbutton.onclick=function(){window.state="run",c.update(),event_bus.trigger("run-fullscreen",!1)},this.refs.breakbutton.onclick=function(){window.state="stopped",c.update(),event_bus.trigger("break-code")},this.refs.erasebutton.onclick=function(){window.state="clean",event_bus.trigger("traybutton-close",!1),c.update(),event_bus.trigger("clear-output")},a.__argnames__||Object.defineProperties(a,{__argnames__:{value:["activity"]}}),event_bus.on("activity-ready",a),event_bus.on("enable-standalone",b),require(ρσ_list_decorate(["sugar-web/graphics/palette"]),function(){var a=function(a){function b(a){return function(){c.example_palette.popDown(),event_bus.trigger("example-load",a)}}function e(){void 0===this.ρσ_object_id&&Object.defineProperty(this,"ρσ_object_id",{value:++ρσ_object_counter}),e.prototype.__init__.apply(this,arguments)}function f(){void 0===this.ρσ_object_id&&Object.defineProperty(this,"ρσ_object_id",{value:++ρσ_object_counter}),f.prototype.__init__.apply(this,arguments)}function g(a){return function(){c.export_palette.popDown(),event_bus.trigger(a)}}var h,i,j,k,l,m;c.example_palette=new a.Palette(c.refs.examplebutton,"Load an example"),h=ρσ_list_decorate([]);for(var n=ρσ_Iterable(d),o=0;o<n.length;o++)m=n[o],i=document.createElement("div"),i.classList.add("menu"),j=document.createElement("button"),j.classList.add("icon"),k=document.createElement("span"),k.classList.add("pyj"),l=document.createTextNode(m),j.appendChild(k),j.appendChild(l),b.__argnames__||Object.defineProperties(b,{__argnames__:{value:["el"]}}),j.onclick=b(m),i.appendChild(j),h.append(i);c.example_palette.setContent(h),c.export_palette=new a.Palette(c.refs.exportbutton,"Export"),e.prototype.__init__=function(){},e.prototype.__repr__=function(){return"<"+__name__+"."+this.constructor.name+" #"+this.ρσ_object_id+">"},e.prototype.__str__=function(){return this.__repr__()},Object.defineProperty(e.prototype,"__bases__",{value:[]}),e.prototype.label="Export as zipped HTML",e.prototype.icon="html",e.prototype.trigger="save-as-zip",f.prototype.__init__=function(){},f.prototype.__repr__=function(){return"<"+__name__+"."+this.constructor.name+" #"+this.ρσ_object_id+">"},f.prototype.__str__=function(){return this.__repr__()},Object.defineProperty(f.prototype,"__bases__",{value:[]}),f.prototype.label="Import",f.prototype.icon="zip",f.prototype.trigger="import-file",h=ρσ_list_decorate([]);for(var p=ρσ_Iterable(ρσ_list_decorate([new e,new f])),q=0;q<p.length;q++)m=p[q],i=document.createElement("div"),i.classList.add("menu"),j=document.createElement("button"),j.classList.add("icon"),k=document.createElement("span"),k.classList.add(m.icon),l=document.createTextNode(m.label),j.appendChild(k),j.appendChild(l),g.__argnames__||Object.defineProperties(g,{__argnames__:{value:["event"]}}),j.onclick=g(m.trigger),i.appendChild(j),h.append(i);c.export_palette.setContent(h)};return a.__argnames__||Object.defineProperties(a,{__argnames__:{value:["palette"]}}),a}())}var c,d;c=this,d=ρσ_list_decorate(["welcome.pyj","memorize.pyj","mandala.pyj","input.pyj","repl.pyj","unicode.pyj"]),window.state="clean",this.on("mount",b)});