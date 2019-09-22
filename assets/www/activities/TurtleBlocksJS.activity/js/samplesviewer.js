/*! Sugarizer 2019-09-21 */
function PlanetModel(a){this.controller=a,this.localProjects=[],this.globalProjects=[],this.localChanged=!1,this.globalImagesCache={},this.updated=function(){},this.addGlobalElement=function(){},this.stop=!1,this.count=0;var b=this;sugarizerCompatibility.isInsideSugarizer()?storage=sugarizerCompatibility.data:storage=localStorage,this.start=function(a,c){b.updated=a,b.addGlobalElement=c,b.stop=!1;for(var d=document.querySelector(".planet .content.w");d.firstChild;)d.removeChild(d.firstChild);this.redoLocalStorageData(),b.updated(),this.downloadWorldWideProjects()},this.downloadWorldWideProjects=function(){jQuery.ajax({url:SERVER,headers:{"x-api-key":APIKEY}}).done(function(a){b.globalProjects=[],b.stop=!1;var c=[];a.forEach(function(a,b){-1!==a.indexOf(".b64")&&(_THIS_IS_MUSIC_BLOCKS_?c.push(a):a.slice(0,MUSICBLOCKSPREFIX.length)!=MUSICBLOCKSPREFIX&&c.push(a))}),b.count=0,b.getImages(c)})},this.getImages=function(a){if(!0!==b.stop){var c=a.pop();if(void 0!==c){var d=c.replace(".b64",""),e=!1;_THIS_IS_MUSIC_BLOCKS_&&d.slice(0,MUSICBLOCKSPREFIX.length)===MUSICBLOCKSPREFIX&&(d=d.substring(MUSICBLOCKSPREFIX.length),e=!0),void 0!==b.globalImagesCache[c]?(b.globalProjects.push({title:d,img:b.globalImagesCache[c]}),b.addGlobalElement(b.globalProjects[b.globalProjects.length-1],b.count),b.count++,b.getImages(a)):jQuery.ajax({url:SERVER+c,headers:{"x-api-key":"3tgTzMXbbw6xEKX7"},dataType:"text"}).done(function(f){validateImageData(f)||(f="images/planetgraphic.png"),e&&(f="images/planetgraphic.png"),b.globalImagesCache[c]=f,b.globalProjects.push({title:d,img:f,url:c}),b.addGlobalElement(b.globalProjects[b.globalProjects.length-1],b.count),b.count++,b.getImages(a)})}}},this.redoLocalStorageData=function(){this.localProjects=[],s=JSON.stringify(localStorage),s=s.replace(/\\n/g,"\\n").replace(/\\'/g,"\\'").replace(/\\"/g,'\\"').replace(/\\&/g,"\\&").replace(/\\r/g,"\\r").replace(/\\t/g,"\\t").replace(/\\b/g,"\\b").replace(/\\f/g,"\\f"),s=s.replace(/[\u0000-\u0019]+/g,"");var a=JSON.parse(s);Object.keys(a).forEach(function(a,c){var d=localStorage["SESSIONIMAGE"+a];"undefined"===d&&(d="images/planetgraphic.png");var e={title:a,img:d,data:localStorage["SESSION"+a],current:a===localStorage.currentProject};e.current?b.localProjects.unshift(e):b.localProjects.push(e)}),this.localChanged=!0},this.uniqueName=function(a){var b=JSON.parse(localStorage.allProjects);if(-1===b.indexOf(a))return a;for(var c=1;;){var d=a+" "+c;if(-1===b.indexOf(d))return d;c++}},this.newProject=function(){var a=this.uniqueName("My Project");b.prepLoadingProject(a),this.controller.sendAllToTrash(!0,!0),b.stop=!0},this.renameProject=function(a,c,d){d&&(localStorage.currentProject=c);var e=JSON.parse(localStorage.allProjects);e[e.indexOf(a)]=c,localStorage.allProjects=JSON.stringify(e),localStorage["SESSIONIMAGE"+c]=localStorage["SESSIONIMAGE"+a],localStorage["SESSION"+c]=localStorage["SESSION"+a],localStorage["SESSIONIMAGE"+a]=void 0,localStorage["SESSION"+a]=void 0,b.redoLocalStorageData()},this.delete=function(a){var c=JSON.parse(localStorage.allProjects);c.splice(c.indexOf(a),1),localStorage.allProjects=JSON.stringify(c),localStorage["SESSIONIMAGE"+a]=void 0,localStorage["SESSION"+a]=void 0,b.redoLocalStorageData(),b.updated()},this.open=function(a,c){localStorage.currentProject=a,b.controller.sendAllToTrash(!1,!0),b.controller.loadRawProject(c),b.stop=!0},this.prepLoadingProject=function(a){localStorage.currentProject=a;var b=JSON.parse(localStorage.allProjects);b.push(a),localStorage.allProjects=JSON.stringify(b)},this.load=function(a){b.prepLoadingProject(a),b.controller.sendAllToTrash(!1,!1),jQuery.ajax({url:SERVER+a+".tb",headers:{"x-api-key":"3tgTzMXbbw6xEKX7"},dataType:"text",error:function(c,d,e){jQuery.ajax({url:SERVER+MUSICBLOCKSPREFIX+a+".tb",headers:{"x-api-key":"3tgTzMXbbw6xEKX7"},dataType:"text"}).done(function(a){b.controller.loadRawProject(a),b.stop=!0})}}).done(function(a){b.controller.loadRawProject(a),b.stop=!0})},this.getPublishableName=function(a){return a.replace(/['!"#$%&\\'()\*+,\-\.\/:;<=>?@\[\\\]\^`{|}~']/g,"").replace(/ /g,"_")},this.publish=function(a,c,d){document.body.style.cursor="wait",setTimeout(function(){a=b.getPublishableName(a),_THIS_IS_MUSIC_BLOCKS_&&(a=MUSICBLOCKSPREFIX+a),httpPost(a+".tb",c),httpPost(a+".b64",d),document.body.style.cursor="default"},250)}}function PlanetView(a,b){this.model=a,this.controller=b;var c=this;document.querySelector(".planet .new").addEventListener("click",function(){c.model.newProject(),c.controller.hide()}),document.querySelector("#myOpenFile").addEventListener("change",function(a){c.controller.hide()}),document.querySelector(".planet .open").addEventListener("click",function(){document.querySelector("#myOpenFile").focus(),document.querySelector("#myOpenFile").click(),window.scroll(0,0)}),document.querySelector(".planet .back").addEventListener("click",function(){c.controller.hide()}),this.update=function(){var a=this;if(a.localChanged){html="",html+=LOCAL_PROJECT_STYLE,a.localProjects.forEach(function(a,b){html+=format(LOCAL_PROJECT_TEMPLATE,a).replace(new RegExp("_NUM_","g"),b.toString())}),document.querySelector(".planet .content.l").innerHTML=html;var b=document.querySelectorAll(".planet .content.l li");Array.prototype.forEach.call(b,function(a,b){a.querySelector(".open").addEventListener("click",c.open(a)),a.querySelector(".publish").addEventListener("click",c.publish(a)),a.querySelector(".share").addEventListener("click",c.share(a,b)),a.querySelector(".download").addEventListener("click",c.download(a)),a.querySelector(".delete").addEventListener("click",c.delete(a)),a.querySelector("input").addEventListener("change",c.input(a)),a.querySelector(".thumbnail").addEventListener("click",c.open(a))}),a.localChanged=!1}},this.addGlobalElement=function(a,b){var d=document.createElement("li");d.setAttribute("url",a.url),d.setAttribute("title",a.title),html="",html+=format(GLOBAL_PROJECT_TEMPLATE,a).replace(new RegExp("_NUM_","g"),b.toString()),d.innerHTML=html;var e=d;e.querySelector(".thumbnail").addEventListener("click",c.load(e)),e.querySelector(".download").addEventListener("click",c.load(e)),e.querySelector(".share").addEventListener("click",c.planetshare(e,b)),document.querySelector(".planet .content.w").appendChild(e)},this.load=function(a){return function(){c.model.load(a.attributes.title.value),c.controller.hide()}},this.publish=function(a){return function(){c.model.publish(a.attributes.title.value,a.attributes.data.value,a.querySelector("img").src)}},this.share=function(a,b){return function(){if(c.model.publish(a.attributes.title.value,a.attributes.data.value,a.querySelector("img").src),_THIS_IS_MUSIC_BLOCKS_)var d=SHAREURL.replace(NAMESUBTEXT,MUSICBLOCKSPREFIX+c.model.getPublishableName(a.attributes.title.value)+".tb");else var d=SHAREURL.replace(NAMESUBTEXT,c.model.getPublishableName(a.attributes.title.value)+".tb");var e=b.toString();docById("shareurldiv"+e).style.visibility="visible",docById("shareurlbox"+e).style.visibility="visible",docById("shareurltri"+e).style.visibility="visible",docById("shareurlbox"+e).value=d,docById("shareurlbox"+e).focus(),docById("shareurlbox"+e).select()}},this.planetshare=function(a,b){return function(){if(_THIS_IS_MUSIC_BLOCKS_)var d=SHAREURL.replace(NAMESUBTEXT,MUSICBLOCKSPREFIX+c.model.getPublishableName(a.attributes.title.value)+".tb");else var d=SHAREURL.replace(NAMESUBTEXT,c.model.getPublishableName(a.attributes.title.value)+".tb");var e=b.toString();docById("plshareurldiv"+e).style.visibility="visible",docById("plshareurlbox"+e).style.visibility="visible",docById("plshareurltri"+e).style.visibility="visible",docById("plshareurlbox"+e).value=d,docById("plshareurlbox"+e).focus(),docById("plshareurlbox"+e).select()}},this.download=function(a){return function(){download(a.attributes.title.value+".tb","data:text/plain;charset=utf-8,"+a.attributes.data.value)}},this.open=function(a){return function(){if(docById("statusDiv").style.visibility=localStorage.getItem("isStatusHidden"),docById("statusButtonsDiv").style.visibility=localStorage.getItem("isStatusHidden"),docById("statusTableDiv").style.visibility=localStorage.getItem("isStatusHidden"),_THIS_IS_MUSIC_BLOCKS_&&(docById("ptmDiv").style.visibility=localStorage.getItem("isMatrixHidden"),docById("ptmButtonsDiv").style.visibility=localStorage.getItem("isMatrixHidden"),docById("ptmTableDiv").style.visibility=localStorage.getItem("isMatrixHidden"),docById("pscDiv").style.visibility=localStorage.getItem("isStaircaseHidden"),docById("pscButtonsDiv").style.visibility=localStorage.getItem("isStaircaseHidden"),docById("pscTableDiv").style.visibility=localStorage.getItem("isStaircaseHidden"),docById("sliderDiv").style.visibility=localStorage.getItem("isSliderHidden"),docById("sliderButtonsDiv").style.visibility=localStorage.getItem("isSliderHidden"),docById("sliderTableDiv").style.visibility=localStorage.getItem("isSliderHidden"),docById("pdmDiv").style.visibility=localStorage.getItem("isPitchDrumMatrixHidden"),docById("pdmButtonsDiv").style.visibility=localStorage.getItem("isPitchDrumMatrixHidden"),docById("pdmTableDiv").style.visibility=localStorage.getItem("isPitchDrumMatrixHidden"),docById("rulerDiv").style.visibility=localStorage.getItem("isRhythmRulerHidden"),docById("rulerButtonsDiv").style.visibility=localStorage.getItem("isRhythmRulerHidden"),docById("rulerTableDiv").style.visibility=localStorage.getItem("isRhythmRulerHidden"),docById("modeDiv").style.visibility=localStorage.getItem("isModeWidgetHidden"),docById("modeButtonsDiv").style.visibility=localStorage.getItem("isModeWidgetHidden"),docById("modeTableDiv").style.visibility=localStorage.getItem("isModeWidgetHidden")),"true"===a.attributes.current.value)return void c.controller.hide();c.model.open(a.attributes.title.value,a.attributes.data.value),c.controller.hide()}},this.delete=function(a){return function(){var b=a.attributes.title.value;c.model.delete(b)}},this.input=function(a){return function(){var b=a.querySelector("input").value,d=a.attributes.title.value,e="true"===a.attributes.current.value;c.model.renameProject(d,b,e),a.attributes.title.value=b}}}function SamplesViewer(){this.stage=null,this.sendAllToTrash=null,this.loadProject=null,this.loadRawProject=null,this.init=function(){this.samples=this,document.querySelector("#planetTitle").innerHTML=_("Planet"),document.querySelector("#planetMyDevice").innerHTML=_("On my device"),document.querySelector("#planetWorldwide").innerHTML=_("Worldwide"),this.model=new PlanetModel(this),this.view=new PlanetView(this.model,this)},this.setClear=function(a){return this.sendAllToTrash=a,this},this.setLoad=function(a){return this.loadProject=a,this},this.setStage=function(a){return this._stage=a,this},this.setLoadRaw=function(a){return this.loadRawProject=a,this},this.setRefreshCanvas=function(a){return this._refreshCanvas=a,this},this.setServer=function(a){this.server=a},this.hide=function(){document.querySelector(".planet").style.display="none",document.querySelector("body").classList.remove("samples-shown"),document.querySelector(".canvasHolder").classList.remove("hide"),document.querySelector("#theme-color").content=platformColor.header,this.samples._stage.enableDOMEvents(!0),window.scroll(0,0)},this.show=function(){document.querySelector(".planet").style.display="",document.querySelector("body").classList.add("samples-shown"),document.querySelector(".canvasHolder").classList.add("hide"),document.querySelector("#theme-color").content="#8bc34a";var a=this;return setTimeout(function(){a.samples._stage.enableDOMEvents(!1)},250),window.scroll(0,0),this.model.start(this.view.update,this.view.addGlobalElement),!0}}function validateImageData(a){return void 0!==a&&(0===a.indexOf("data:image")&&0!=a.split(",")[1].length)}const MUSICBLOCKSPREFIX="MusicBlocks_",APIKEY="3tgTzMXbbw6xEKX7",EMPTYIMAGE="data:image/svg+xml;base64,"+btoa('<svg               xmlns="http://www.w3.org/2000/svg" width="320" height="240"               viewBox="0 0 320 240"></svg>'),SERVER="https://turtle.sugarlabs.org/server/";if(window.server=SERVER,_THIS_IS_MUSIC_BLOCKS_)var SHAREURL="https://walterbender.github.io/musicblocks/index.html?file={name}&run=True";else var SHAREURL="https://walterbender.github.io/turtleblocksjs/index.html?file={name}&run=True";const NAMESUBTEXT="{name}",LOCAL_PROJECT_STYLE="<style> .shareurlspan {     position: relative; } .shareurlspan .shareurltext {     visibility: hidden;     background-color: black;     color: #fff;     text-align: center;     padding: 10px;     margin-top; 5px;     border-radius: 6px;     position: absolute;     z-index: 1;     text-align: left; } .shareurltext{     top: 25px;     left: -200px;     visibility: hidden; } .tooltiptriangle{     position: absolute;     visibility: hidden;     top: 15px;     left: 0px;     width: 0;     height: 0;     border-style: solid;     border-width: 0 15px 15px 15px;     border-color: transparent transparent black transparent; } </style>",LOCAL_PROJECT_TEMPLATE='<li data=\'{data}\' title="{title}" current="{current}">     <img class="thumbnail" src="{img}" />     <div class="options">         <input type="text" value="{title}"/><br/>         <img class="open icon" title="'+_("Open")+'" alt="'+_("Open")+'" src="header-icons/edit.svg" />         <img class="delete icon" title="'+_("Delete")+'" alt="'+_("Delete")+'" src="header-icons/delete.svg" />         <img class="publish icon" title="'+_("Publish")+'" alt="'+_("Publish")+'" src="header-icons/publish.svg" />         <span class="shareurlspan">         <img class="share icon" title="'+_("Share")+'" alt="'+_("Share")+'" src="header-icons/share.svg" />         <div class="tooltiptriangle" id="shareurltri_NUM_"></div>         <div class="shareurltext" id="shareurldiv_NUM_">             Copy the link to share your project:            <input type="text" name="shareurl" id="shareurlbox_NUM_" value="url here" style="margin-top:5px;width: 350px;text-align:left;" onblur="document.getElementById(\'shareurldiv_NUM_\').style.visibility = \'hidden\';document.getElementById(\'shareurlbox_NUM_\').style.visibility = \'hidden\';document.getElementById(\'shareurltri_NUM_\').style.visibility = \'hidden\';"/>         </div>         </span>         <img class="download icon" title="'+_("Download")+'" alt="'+_("Download")+'" src="header-icons/download.svg" />     </div> </li>',GLOBAL_PROJECT_TEMPLATE='<img class="thumbnail" src="{img}" /> <div class="options">     <span>{title}</span><br/>     <span class="shareurlspan">     <img class="share icon" title="'+_("Share")+'" alt="'+_("Share")+'" src="header-icons/share.svg" />     <div class="tooltiptriangle" id="plshareurltri_NUM_"></div>     <div class="shareurltext" id="plshareurldiv_NUM_">         Copy the link to share your project:        <input type="text" name="shareurl" id="plshareurlbox_NUM_" value="url here" style="margin-top:5px;width: 350px;text-align:left;" onblur="document.getElementById(\'plshareurldiv_NUM_\').style.visibility = \'hidden\';document.getElementById(\'plshareurlbox_NUM_\').style.visibility = \'hidden\';document.getElementById(\'plshareurltri_NUM_\').style.visibility = \'hidden\';"/>     </div>     </span>     <img class="download icon" title="'+_("Download")+'" alt="'+_("Download")+'" src="header-icons/download.svg" /> </div>';