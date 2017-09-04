/*! Sugarizer 2017-09-04 */
!function(){function a(){}function b(a){this.buttonBar=l.getElementById("wmd-button-bar"+a),this.preview=l.getElementById("wmd-preview"+a),this.input=l.getElementById("wmd-input"+a)}function c(a,b){var c,e,f,g=this,h=[],j=0,k="none",l=function(a,b){k!=a&&(k=a,b||n()),p.isIE&&"moving"==k?f=null:e=setTimeout(m,1)},m=function(a){f=new d(b,a),e=void 0};this.setCommandMode=function(){k="command",n(),e=setTimeout(m,0)},this.canUndo=function(){return j>1},this.canRedo=function(){return!!h[j+1]},this.undo=function(){g.canUndo()&&(c?(c.restore(),c=null):(h[j]=new d(b),h[--j].restore(),a&&a())),k="none",b.input.focus(),m()},this.redo=function(){g.canRedo()&&(h[++j].restore(),a&&a()),k="none",b.input.focus(),m()};var n=function(){var e=f||new d(b);return!!e&&("moving"==k?void(c||(c=e)):(c&&(h[j-1].text!=c.text&&(h[j++]=c),c=null),h[j++]=e,h[j+1]=null,void(a&&a())))},o=function(a){var b=!1;if((a.ctrlKey||a.metaKey)&&!a.altKey){var c=a.charCode||a.keyCode,d=String.fromCharCode(c);switch(d.toLowerCase()){case"y":g.redo(),b=!0;break;case"z":a.shiftKey?g.redo():g.undo(),b=!0}}if(b)return a.preventDefault&&a.preventDefault(),void(window.event&&(window.event.returnValue=!1))},q=function(a){if(!a.ctrlKey&&!a.metaKey){var b=a.keyCode;b>=33&&b<=40||b>=63232&&b<=63235?l("moving"):8==b||46==b||127==b?l("deleting"):13==b?l("newlines"):27==b?l("escape"):(b<16||b>20)&&91!=b&&l("typing")}},r=function(){i.addEvent(b.input,"keypress",function(a){!a.ctrlKey&&!a.metaKey||a.altKey||89!=a.keyCode&&90!=a.keyCode||a.preventDefault()});var a=function(){(p.isIE||f&&f.text!=b.input.value)&&void 0==e&&(k="paste",n(),m())};i.addEvent(b.input,"keydown",o),i.addEvent(b.input,"keydown",q),i.addEvent(b.input,"mousedown",function(){l("moving")}),b.input.onpaste=a,b.input.ondrop=a},s=function(){r(),m(!0),n()};s()}function d(b,c){var d=this,e=b.input;this.init=function(){i.isVisible(e)&&(!c&&l.activeElement&&l.activeElement!==e||(this.setInputAreaSelectionStartEnd(),this.scrollTop=e.scrollTop,(!this.text&&e.selectionStart||0===e.selectionStart)&&(this.text=e.value)))},this.setInputAreaSelection=function(){if(i.isVisible(e))if(void 0===e.selectionStart||p.isOpera){if(l.selection){if(l.activeElement&&l.activeElement!==e)return;e.focus();var a=e.createTextRange();a.moveStart("character",-e.value.length),a.moveEnd("character",-e.value.length),a.moveEnd("character",d.end),a.moveStart("character",d.start),a.select()}}else e.focus(),e.selectionStart=d.start,e.selectionEnd=d.end,e.scrollTop=d.scrollTop},this.setInputAreaSelectionStartEnd=function(){if(b.ieCachedRange||!e.selectionStart&&0!==e.selectionStart){if(l.selection){d.text=i.fixEolChars(e.value);var a=b.ieCachedRange||l.selection.createRange(),c=i.fixEolChars(a.text),f="",g=f+c+f;a.text=g;var h=i.fixEolChars(e.value);a.moveStart("character",-g.length),a.text=c,d.start=h.indexOf(f),d.end=h.lastIndexOf(f)-f.length;var j=d.text.length-i.fixEolChars(e.value).length;if(j){for(a.moveStart("character",-c.length);j--;)c+="\n",d.end+=1;a.text=c}b.ieCachedRange&&(d.scrollTop=b.ieCachedScrollTop),b.ieCachedRange=null,this.setInputAreaSelection()}}else d.start=e.selectionStart,d.end=e.selectionEnd},this.restore=function(){void 0!=d.text&&d.text!=e.value&&(e.value=d.text),this.setInputAreaSelection(),e.scrollTop=d.scrollTop},this.getChunks=function(){var b=new a;return b.before=i.fixEolChars(d.text.substring(0,d.start)),b.startTag="",b.selection=i.fixEolChars(d.text.substring(d.start,d.end)),b.endTag="",b.after=i.fixEolChars(d.text.substring(d.end)),b.scrollTop=d.scrollTop,b},this.setChunks=function(a){a.before=a.before+a.startTag,a.after=a.endTag+a.after,this.start=a.before.length,this.end=a.before.length+a.selection.length,this.text=a.before+a.selection+a.after,this.scrollTop=a.scrollTop},this.init()}function e(a,b,c){var d,e,f,g=3e3,h="delayed",k=function(a,b){i.addEvent(a,"input",b),a.onpaste=b,a.ondrop=b,i.addEvent(a,"keypress",b),i.addEvent(a,"keydown",b)},m=function(){var a=0;return window.innerHeight?a=window.pageYOffset:l.documentElement&&l.documentElement.scrollTop?a=l.documentElement.scrollTop:l.body&&(a=l.body.scrollTop),a},n=function(){if(b.preview){var c=b.input.value;if(!c||c!=f){f=c;var d=(new Date).getTime();c=a.makeHtml(c);var g=(new Date).getTime();e=g-d,x(c)}}},o=function(){if(d&&(clearTimeout(d),d=void 0),"manual"!==h){var a=0;"delayed"===h&&(a=e),a>g&&(a=g),d=setTimeout(n,a)}},q=function(a){return a.scrollHeight<=a.clientHeight?1:a.scrollTop/(a.scrollHeight-a.clientHeight)},r=function(){b.preview&&(b.preview.scrollTop=(b.preview.scrollHeight-b.preview.clientHeight)*q(b.preview))};this.refresh=function(a){a?(f="",n()):o()},this.processingTime=function(){return e};var s,t=!0,u=function(a){var c=b.preview,d=c.parentNode,e=c.nextSibling;d.removeChild(c),c.innerHTML=a,e?d.insertBefore(c,e):d.appendChild(c)},v=function(a){b.preview.innerHTML=a},w=function(a){if(s)return s(a);try{v(a),s=v}catch(b){s=u,s(a)}},x=function(a){var d=j.getTop(b.input)-m();if(b.preview&&(w(a),c()),r(),t)return void(t=!1);var e=j.getTop(b.input)-m();p.isIE?setTimeout(function(){window.scrollBy(0,e-d)},0):window.scrollBy(0,e-d)},y=function(){k(b.input,o),n(),b.preview&&(b.preview.scrollTop=0)};y()}function f(a,b,c,e,f,g,h){function j(a){if(q.focus(),a.textOp){c&&c.setCommandMode();var f=new d(b);if(!f)return;var g=f.getChunks(),h=function(){q.focus(),g&&f.setChunks(g),f.restore(),e.refresh()},i=a.textOp(g,h);i||h()}a.execute&&a.execute(c)}function k(a){return"string"==typeof a&&(a=f[a]),function(){a.apply(f,arguments)}}function m(){var b=document.getElementById("main-toolbar"),c=function(a,c,d,e){var f=document.createElement("button");return f.className="toolbutton",f.id=a,f.title=c,e&&(f.textOp=e),b.appendChild(f),f};if(null==l.getElementById("wmd-bold-button-second")){r.bold=c("wmd-bold-button-second",h("bold"),"0px",k("doBold")),r.bold.onclick=function(){j(r.bold)},r.italic=c("wmd-italic-button-second",h("italic"),"-20px",k("doItalic")),r.italic.onclick=function(){j(r.italic)},r.heading=c("wmd-heading-button",h("heading"),"-160px",k("doHeading")),r.heading.onclick=function(){j(r.heading)},r.hr=c("wmd-hr-button",h("hr"),"-180px",k("doHorizontalRule")),r.hr.onclick=function(){j(r.hr)},r.olist=c("wmd-olist-button",h("olist"),"-120px",k(function(a,b){this.doList(a,b,!0)})),r.olist.onclick=function(){j(r.olist)},r.ulist=c("wmd-ulist-button",h("ulist"),"-140px",k(function(a,b){this.doList(a,b,!1)})),r.ulist.onclick=function(){j(r.ulist)},r.code=c("wmd-code-button",h("code"),"-80px",k("doCode")),r.code.onclick=function(){j(r.code)},r.quote=c("wmd-quote-button",h("quote"),"-60px",k("doBlockquote")),r.quote.onclick=function(){j(r.quote)},r.link=c("wmd-link-button",h("link"),"-40px",k(function(a,b){return this.doLinkOrImage(a,b,!1)})),r.link.onclick=function(){j(r.link)};var d=h(/win/.test(n.platform.toLowerCase())?"redo":"redomac");r.undo=c("wmd-undo-button",h("undo"),"-200px",null),r.undo.execute=function(a){a&&a.undo()},r.undo.onclick=function(){j(r.undo)},r.redo=c("wmd-redo-button",d,"-220px",null),r.redo.execute=function(a){a&&a.redo()},r.redo.onclick=function(){j(r.redo)}}if(g){var e=document.createElement("li"),f=document.createElement("span");e.appendChild(f),e.className="wmd-button wmd-help-button",e.id="wmd-help-button"+a,e.XShift="-240px",e.isHelp=!0,e.style.right="0px",e.title=h("help"),e.onclick=g.handler,r.help=e}o()}function o(){}var q=b.input,r={};m();var s="keydown";p.isOpera&&(s="keypress"),i.addEvent(q,s,function(a){if((a.ctrlKey||a.metaKey)&&!a.altKey&&!a.shiftKey){var b=a.charCode||a.keyCode,c=String.fromCharCode(b).toLowerCase();switch(c){case"b":j(r.bold);break;case"i":j(r.italic);break;case"l":j(r.link);break;case"q":j(r.quote);break;case"k":j(r.code);break;case"g":j(r.image);break;case"o":j(r.olist);break;case"u":j(r.ulist);break;case"h":j(r.heading);break;case"r":j(r.hr);break;case"y":j(r.redo);break;case"z":j(a.shiftKey?r.redo:r.undo);break;default:return}a.preventDefault&&a.preventDefault(),window.event&&(window.event.returnValue=!1)}}),i.addEvent(q,"keyup",function(a){if(a.shiftKey&&!a.ctrlKey&&!a.metaKey){var b=a.charCode||a.keyCode;if(13===b){var c={};c.textOp=k("doAutoindent"),j(c)}}}),p.isIE&&i.addEvent(q,"keydown",function(a){var b=a.keyCode;if(27===b)return!1}),this.setUndoRedoButtonStates=o}function g(a,b){this.hooks=a,this.getString=b}function h(a){return a.replace(/^\s*(.*?)(?:\s+"(.+)")?\s*$/,function(a,b,c){return b=b.replace(/\?.*$/,function(a){return a.replace(/\+/g," ")}),b=decodeURIComponent(b),b=encodeURI(b).replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29"),b=b.replace(/\?.*$/,function(a){return a.replace(/\+/g,"%2b")}),c&&(c=c.trim?c.trim():c.replace(/^\s*/,"").replace(/\s*$/,""),c=c.replace(/"/g,"quot;").replace(/\(/g,"&#40;").replace(/\)/g,"&#41;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),c?b+' "'+c+'"':b})}var i={},j={},k={},l=window.document,m=window.RegExp,n=window.navigator,o={lineLength:72},p={isIE:/msie/.test(n.userAgent.toLowerCase()),isIE_5or6:/msie 6/.test(n.userAgent.toLowerCase())||/msie 5/.test(n.userAgent.toLowerCase()),isOpera:/opera/.test(n.userAgent.toLowerCase())},q={bold:"Strong <strong> Ctrl+B",boldexample:"strong text",italic:"Emphasis <em> Ctrl+I",italicexample:"emphasized text",link:"Hyperlink <a> Ctrl+L",linkdescription:"enter link description here",linkdialog:'<p><b>Insert Hyperlink</b></p><p>http://example.com/ "optional title"</p>',quote:"Blockquote <blockquote> Ctrl+Q",quoteexample:"Blockquote",code:"Code Sample <pre><code> Ctrl+K",codeexample:"enter code here",image:"Image <img> Ctrl+G",imagedescription:"enter image description here",imagedialog:"<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",olist:"Numbered List <ol> Ctrl+O",ulist:"Bulleted List <ul> Ctrl+U",litem:"List item",heading:"Heading <h1>/<h2> Ctrl+H",headingexample:"Heading",hr:"Horizontal Rule <hr> Ctrl+R",undo:"Undo - Ctrl+Z",redo:"Redo - Ctrl+Y",redomac:"Redo - Ctrl+Shift+Z",help:"Markdown Editing Help"},r="http://",s="http://";Markdown.Editor=function(a,d,h){h=h||{},"function"==typeof h.handler&&(h={helpButton:h}),h.strings=h.strings||{},h.helpButton&&(h.strings.help=h.strings.help||h.helpButton.title);var i=function(a){return h.strings[a]||q[a]};d=d||"";var j=this.hooks=new Markdown.HookCollection;j.addNoop("onPreviewRefresh"),j.addNoop("postBlockquoteCreation"),j.addFalse("insertImageDialog"),this.getConverter=function(){return a};var k,m=this;this.run=function(){if(!k){k=new b(d);var n,o,p=new g(j,i),q=new e(a,k,function(){j.onPreviewRefresh()});/\?noundo/.test(l.location.href)||(n=new c(function(){q.refresh(),o&&o.setUndoRedoButtonStates()},k),this.textOperation=function(a){n.setCommandMode(),a(),m.refreshPreview()}),o=new f(d,k,n,q,p,h.helpButton,i),o.setUndoRedoButtonStates();var r=m.refreshPreview=function(){q.refresh(!0)};r()}}},a.prototype.findTags=function(a,b){var c,d=this;a&&(c=i.extendRegExp(a,"","$"),this.before=this.before.replace(c,function(a){return d.startTag=d.startTag+a,""}),c=i.extendRegExp(a,"^",""),this.selection=this.selection.replace(c,function(a){return d.startTag=d.startTag+a,""})),b&&(c=i.extendRegExp(b,"","$"),this.selection=this.selection.replace(c,function(a){return d.endTag=a+d.endTag,""}),c=i.extendRegExp(b,"^",""),this.after=this.after.replace(c,function(a){return d.endTag=a+d.endTag,""}))},a.prototype.trimWhitespace=function(a){var b,c,d=this;a?b=c="":(b=function(a){return d.before+=a,""},c=function(a){return d.after=a+d.after,""}),this.selection=this.selection.replace(/^(\s*)/,b).replace(/(\s*)$/,c)},a.prototype.skipLines=function(a,b,c){void 0===a&&(a=1),void 0===b&&(b=1),a++,b++;var d,e;if(navigator.userAgent.match(/Chrome/)&&"X".match(/()./),this.selection=this.selection.replace(/(^\n*)/,""),this.startTag=this.startTag+m.$1,this.selection=this.selection.replace(/(\n*$)/,""),this.endTag=this.endTag+m.$1,this.startTag=this.startTag.replace(/(^\n*)/,""),this.before=this.before+m.$1,this.endTag=this.endTag.replace(/(\n*$)/,""),this.after=this.after+m.$1,this.before){for(d=e="";a--;)d+="\\n?",e+="\n";c&&(d="\\n*"),this.before=this.before.replace(new m(d+"$",""),e)}if(this.after){for(d=e="";b--;)d+="\\n?",e+="\n";c&&(d="\\n*"),this.after=this.after.replace(new m(d,""),e)}},i.isVisible=function(a){return window.getComputedStyle?"none"!==window.getComputedStyle(a,null).getPropertyValue("display"):a.currentStyle?"none"!==a.currentStyle.display:void 0},i.addEvent=function(a,b,c){a.attachEvent?a.attachEvent("on"+b,c):a.addEventListener(b,c,!1)},i.removeEvent=function(a,b,c){a.detachEvent?a.detachEvent("on"+b,c):a.removeEventListener(b,c,!1)},i.fixEolChars=function(a){return a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n")},i.extendRegExp=function(a,b,c){null!==b&&void 0!==b||(b=""),null!==c&&void 0!==c||(c="");var d,e=a.toString();return e=e.replace(/\/([gim]*)$/,function(a,b){return d=b,""}),e=e.replace(/(^\/|\/$)/g,""),e=b+e+c,new m(e,d)},j.getTop=function(a,b){var c=a.offsetTop;if(!b)for(;a=a.offsetParent;)c+=a.offsetTop;return c},j.getHeight=function(a){return a.offsetHeight||a.scrollHeight},j.getWidth=function(a){return a.offsetWidth||a.scrollWidth},j.getPageSize=function(){var a,b,c,d;self.innerHeight&&self.scrollMaxY?(a=l.body.scrollWidth,b=self.innerHeight+self.scrollMaxY):l.body.scrollHeight>l.body.offsetHeight?(a=l.body.scrollWidth,b=l.body.scrollHeight):(a=l.body.offsetWidth,b=l.body.offsetHeight),self.innerHeight?(c=self.innerWidth,d=self.innerHeight):l.documentElement&&l.documentElement.clientHeight?(c=l.documentElement.clientWidth,d=l.documentElement.clientHeight):l.body&&(c=l.body.clientWidth,d=l.body.clientHeight);var e=Math.max(a,c),f=Math.max(b,d);return[e,f,c,d]},k.createBackground=function(){var a=l.createElement("div"),b=a.style;a.className="wmd-prompt-background",b.position="absolute",b.top="0",b.zIndex="1000",p.isIE?b.filter="alpha(opacity=50)":b.opacity="0.5";var c=j.getPageSize();return b.height=c[1]+"px",p.isIE?(b.left=l.documentElement.scrollLeft,b.width=l.documentElement.clientWidth):(b.left="0",b.width="100%"),l.body.appendChild(a),a},k.prompt=function(a,b,c){var d,e;void 0===b&&(b="");var f=function(a){var b=a.charCode||a.keyCode;27===b&&g(!0)},g=function(a){i.removeEvent(l.body,"keydown",f);var b=e.value;return a?b=null:(b=b.replace(/^http:\/\/(https?|ftp):\/\//,"$1://"),/^(?:https?|ftp):\/\//.test(b)||(b="http://"+b)),d.parentNode.removeChild(d),c(b),!1},h=function(){d=l.createElement("div"),d.className="wmd-prompt-dialog",d.style.padding="10px;",d.style.position="fixed",d.style.width="400px",d.style.zIndex="1001";var c=l.createElement("div");c.innerHTML=a,c.style.padding="5px",d.appendChild(c);var h=l.createElement("form"),k=h.style;h.onsubmit=function(){return g(!1)},k.padding="0",k.margin="0",k.cssFloat="left",k.width="100%",k.textAlign="center",k.position="relative",d.appendChild(h),e=l.createElement("input"),e.type="text",e.value=b,k=e.style,k.display="block",k.width="80%",k.marginLeft=k.marginRight="auto",h.appendChild(e);var m=l.createElement("input");m.type="button",m.onclick=function(){return g(!1)},m.value="OK",k=m.style,k.margin="10px",k.display="inline",k.width="7em";var n=l.createElement("input");n.type="button",n.onclick=function(){return g(!0)},n.value="Cancel",k=n.style,k.margin="10px",k.display="inline",k.width="7em",h.appendChild(m),h.appendChild(n),i.addEvent(l.body,"keydown",f),d.style.top="50%",d.style.left="50%",d.style.display="block",p.isIE_5or6&&(d.style.position="absolute",d.style.top=l.documentElement.scrollTop+200+"px",d.style.left="50%"),l.body.appendChild(d),d.style.marginTop=-(j.getHeight(d)/2)+"px",d.style.marginLeft=-(j.getWidth(d)/2)+"px"};setTimeout(function(){h();var a=b.length;if(void 0!==e.selectionStart)e.selectionStart=0,e.selectionEnd=a;else if(e.createTextRange){var c=e.createTextRange();c.collapse(!1),c.moveStart("character",-a),c.moveEnd("character",a),c.select()}e.focus()},0)};var t=g.prototype;t.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)",t.unwrap=function(a){var b=new m("([^\\n])\\n(?!(\\n|"+this.prefixes+"))","g");a.selection=a.selection.replace(b,"$1 $2")},t.wrap=function(a,b){this.unwrap(a);var c=new m("(.{1,"+b+"})( +|$\\n?)","gm"),d=this;a.selection=a.selection.replace(c,function(a,b){return new m("^"+d.prefixes,"").test(a)?a:b+"\n"}),a.selection=a.selection.replace(/\s+$/,"")},t.doBold=function(a,b){return this.doBorI(a,b,2,this.getString("boldexample"))},t.doItalic=function(a,b){return this.doBorI(a,b,1,this.getString("italicexample"))},t.doBorI=function(a,b,c,d){a.trimWhitespace(),a.selection=a.selection.replace(/\n{2,}/g,"\n");var e=/(\**$)/.exec(a.before)[0],f=/(^\**)/.exec(a.after)[0],g=Math.min(e.length,f.length);if(g>=c&&(2!=g||1!=c))a.before=a.before.replace(m("[*]{"+c+"}$",""),""),a.after=a.after.replace(m("^[*]{"+c+"}",""),"");else if(!a.selection&&f){a.after=a.after.replace(/^([*_]*)/,""),a.before=a.before.replace(/(\s?)$/,"");var h=m.$1;a.before=a.before+f+h}else{a.selection||f||(a.selection=d);var i=c<=1?"*":"**";a.before=a.before+i,a.after=i+a.after}},t.stripLinkDefs=function(a,b){return a=a.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,function(a,c,d,e,f){return b[c]=a.replace(/\s*$/,""),e?(b[c]=a.replace(/["(](.+?)[")]$/,""),e+f):""})},t.addLinkDef=function(a,b){var c=0,d={};a.before=this.stripLinkDefs(a.before,d),a.selection=this.stripLinkDefs(a.selection,d),a.after=this.stripLinkDefs(a.after,d);var e="",f=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,g=function(a){c++,a=a.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+c+"]:"),e+="\n"+a},h=function(a,b,e,i,j,k){return e=e.replace(f,h),d[j]?(g(d[j]),b+e+i+c+k):a};a.before=a.before.replace(f,h),b?g(b):a.selection=a.selection.replace(f,h);var i=c;return a.after=a.after.replace(f,h),a.after&&(a.after=a.after.replace(/\n*$/,"")),a.after||(a.selection=a.selection.replace(/\n*$/,"")),a.after+="\n\n"+e,i},t.doLinkOrImage=function(a,b,c){a.trimWhitespace(),a.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);var d;if(!(a.endTag.length>1&&a.startTag.length>0)){if(a.selection=a.startTag+a.selection+a.endTag,a.startTag=a.endTag="",/\n\n/.test(a.selection))return void this.addLinkDef(a,null);var e=this,f=function(f){if(d.parentNode.removeChild(d),null!==f){a.selection=(" "+a.selection).replace(/([^\\](?:\\\\)*)(?=[[\]])/g,"$1\\").substr(1);var g=" [999]: "+h(f),i=e.addLinkDef(a,g);a.startTag=c?"![":"[",a.endTag="]["+i+"]",a.selection||(c?a.selection=e.getString("imagedescription"):a.selection=e.getString("linkdescription"))}b()};return d=k.createBackground(),c?this.hooks.insertImageDialog(f)||k.prompt(this.getString("imagedialog"),r,f):k.prompt(this.getString("linkdialog"),s,f),!0}a.startTag=a.startTag.replace(/!?\[/,""),a.endTag="",this.addLinkDef(a,null)},t.doAutoindent=function(a,b){var c=this,d=!1;a.before=a.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n"),a.before=a.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n"),a.before=a.before.replace(/(\n|^)[ \t]+\n$/,"\n\n"),a.selection||/^[ \t]*(?:\n|$)/.test(a.after)||(a.after=a.after.replace(/^[^\n]*/,function(b){return a.selection=b,""}),d=!0),/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]+.*\n$/.test(a.before)&&c.doList&&c.doList(a),/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(a.before)&&c.doBlockquote&&c.doBlockquote(a),/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&c.doCode&&c.doCode(a),d&&(a.after=a.selection+a.after,a.selection="")},t.doBlockquote=function(a,b){a.selection=a.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(b,c,d,e){return a.before+=c,a.after=e+a.after,d}),a.before=a.before.replace(/(>[ \t]*)$/,function(b,c){return a.selection=c+a.selection,""}),a.selection=a.selection.replace(/^(\s|>)+$/,""),a.selection=a.selection||this.getString("quoteexample");var c,d="",e="";if(a.before){for(var f=a.before.replace(/\n$/,"").split("\n"),g=!1,h=0;h<f.length;h++){var i=!1;c=f[h],g=g&&c.length>0,/^>/.test(c)?(i=!0,!g&&c.length>1&&(g=!0)):i=!!/^[ \t]*$/.test(c)||g,i?d+=c+"\n":(e+=d+c,d="\n")}/(^|\n)>/.test(d)||(e+=d,d="")}a.startTag=d,a.before=e,a.after&&(a.after=a.after.replace(/^\n?/,"\n")),a.after=a.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(b){return a.endTag=b,""});var j=function(b){var c=b?"> ":"";a.startTag&&(a.startTag=a.startTag.replace(/\n((>|\s)*)\n$/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"})),a.endTag&&(a.endTag=a.endTag.replace(/^\n((>|\s)*)\n/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}))};/^(?![ ]{0,3}>)/m.test(a.selection)?(this.wrap(a,o.lineLength-2),a.selection=a.selection.replace(/^/gm,"> "),j(!0),a.skipLines()):(a.selection=a.selection.replace(/^[ ]{0,3}> ?/gm,""),this.unwrap(a),j(!1),!/^(\n|^)[ ]{0,3}>/.test(a.selection)&&a.startTag&&(a.startTag=a.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(a.selection)&&a.endTag&&(a.endTag=a.endTag.replace(/^\n{0,2}/,"\n\n"))),a.selection=this.hooks.postBlockquoteCreation(a.selection),/\n/.test(a.selection)||(a.selection=a.selection.replace(/^(> *)/,function(b,c){return a.startTag+=c,""}))},t.doCode=function(a,b){var c=/\S[ ]*$/.test(a.before),d=/^[ ]*\S/.test(a.after);if(!d&&!c||/\n/.test(a.selection)){a.before=a.before.replace(/[ ]{4}$/,function(b){return a.selection=b+a.selection,""});var e=1,f=1;/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&(e=0),/^\n(\t|[ ]{4,})/.test(a.after)&&(f=0),a.skipLines(e,f),a.selection?/^[ ]{0,3}\S/m.test(a.selection)?/\n/.test(a.selection)?a.selection=a.selection.replace(/^/gm,"    "):a.before+="    ":a.selection=a.selection.replace(/^(?:[ ]{4}|[ ]{0,3}\t)/gm,""):(a.startTag="    ",a.selection=this.getString("codeexample"))}else a.trimWhitespace(),a.findTags(/`/,/`/),a.startTag||a.endTag?a.endTag&&!a.startTag?(a.before+=a.endTag,a.endTag=""):a.startTag=a.endTag="":(a.startTag=a.endTag="`",a.selection||(a.selection=this.getString("codeexample")))},t.doList=function(a,b,c){var d=/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,e=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,f="-",g=1,h=function(){var a;return c?(a=" "+g+". ",g++):a=" "+f+" ",a},i=function(a){return void 0===c&&(c=/^\s*\d/.test(a)),a=a.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(a){return h()})};if(a.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null),!a.before||/\n$/.test(a.before)||/^\n/.test(a.startTag)||(a.before+=a.startTag,a.startTag=""),a.startTag){var j=/\d+[.]/.test(a.startTag);if(a.startTag="",a.selection=a.selection.replace(/\n[ ]{4}/g,"\n"),this.unwrap(a),a.skipLines(),j&&(a.after=a.after.replace(e,i)),c==j)return}var k=1;a.before=a.before.replace(d,function(a){return/^\s*([*+-])/.test(a)&&(f=m.$1),k=/[^\n]\n\n[^\n]/.test(a)?1:0,i(a)}),a.selection||(a.selection=this.getString("litem"));var l=h(),n=1;a.after=a.after.replace(e,function(a){return n=/[^\n]\n\n[^\n]/.test(a)?1:0,i(a)}),a.trimWhitespace(!0),a.skipLines(k,n,!0),a.startTag=l;var p=l.replace(/./g," ");this.wrap(a,o.lineLength-p.length),a.selection=a.selection.replace(/\n/g,"\n"+p)},t.doHeading=function(a,b){if(a.selection=a.selection.replace(/\s+/g," "),a.selection=a.selection.replace(/(^\s+|\s+$)/g,""),!a.selection)return a.startTag="## ",a.selection=this.getString("headingexample"),void(a.endTag=" ##");var c=0;a.findTags(/#+[ ]*/,/[ ]*#+/),/#+/.test(a.startTag)&&(c=m.lastMatch.length),a.startTag=a.endTag="",a.findTags(null,/\s?(-+|=+)/),/=+/.test(a.endTag)&&(c=1),/-+/.test(a.endTag)&&(c=2),a.startTag=a.endTag="",a.skipLines(1,1);var d=0==c?2:c-1;if(d>0){var e=d>=2?"-":"=",f=a.selection.length;for(f>o.lineLength&&(f=o.lineLength),a.endTag="\n";f--;)a.endTag+=e}},t.doHorizontalRule=function(a,b){a.startTag="----------\n",a.selection="",a.skipLines(2,1,!0)}}();