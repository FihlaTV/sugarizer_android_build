/*! Sugarizer 2018-05-08 */
define(function(a){var b={};return b.View=function(){this.template='<li data-id="{{id}}" class="{{completed}}" draggable="true" ondragstart="drag(event)" ondragover="allowDrop(event)" ondrop="drop(event)"><div class="view"><input class="toggle" type="checkbox" {{checked}}><label>{{title}}</label><button class="remove"></button></div></li>'},b.View.prototype.show=function(a){var b,c,d="";for(b=0,c=a.length;b<c;b++){var e=this.template,f="",g="";1===a[b].completed&&(f="completed",g="checked"),e=e.replace("{{id}}",a[b].id),e=e.replace("{{title}}",a[b].title),e=e.replace("{{completed}}",f),e=e.replace("{{checked}}",g),d+=e}return d},b});