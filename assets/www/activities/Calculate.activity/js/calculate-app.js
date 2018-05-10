/*! Sugarizer 2018-05-08 */
var CalculateApp={elements:{resultsZoneDiv:void 0,calcInputDiv:void 0,calcInput:void 0,labelInput:void 0,modalDiv:void 0},libs:{mustache:void 0,functionPlot:void 0},data:{buddyColor:{stroke:"#1500A7",fill:"#ff0000"},calculations:[],windowWidth:void 0,windowHeight:void 0,isMobile:/iphone|ipod|ipad|android|blackberry|opera mini|opera mobi|skyfire|maemo|windows phone|palm|iemobile|symbian|symbianos|fennec/i.test(navigator.userAgent.toLowerCase()),isIos:!!navigator.userAgent.match(/iPad|iPhone|iPod/g),outputBase:10,outputDigits:6,isRadian:!1,pi:3.141592653589793},isFullMode:function(){return"undefined"==typeof chrome||!chrome.app||!chrome.app.runtime}(),evalParser:function(a){var b=Parser.parse(a).evaluate();return b},evalMathJS:function(a){var b=mathjs.eval(a);return b},eval:function(a){var b,c;return CalculateApp.isFullMode?(b=CalculateApp.evalMathJS(a),c=CalculateApp.baseConv(CalculateApp.evalMathJS(a),CalculateApp.data.outputBase,10)):(b=CalculateApp.evalParser(a),c=CalculateApp.baseConv(CalculateApp.evalParser(a),CalculateApp.data.outputBase,10)),{resultBase10:CalculateApp.toFixed(b,CalculateApp.data.outputDigits),result:CalculateApp.toFixed(c,CalculateApp.data.outputDigits)}},evalFunctionAtZero:function(a){var b;if(CalculateApp.isFullMode)try{return b=mathjs.eval(a)(0),isNaN(b)||!isFinite(b)?0:b}catch(a){return 0}else try{return b=Parser.parse(a).evaluate({x:0}),isNaN(b)||!isFinite(b)?0:b}catch(a){return 0}},isGraph:function(a){return a.indexOf("f(x)")!=-1},_graph:function(a,b,c){nanoModal(CalculateApp.elements.modalDiv,{buttons:[]}).onShow(function(a){CalculateApp.elements.modalDiv.style.display="block",CalculateApp.elements.modalDiv.style.marginLeft="auto",CalculateApp.elements.modalDiv.style.marginRight="auto",CalculateApp.elements.modalDiv.style.height=parseInt(80*CalculateApp.data.windowHeight/100)+"px",CalculateApp.elements.modalDiv.style.width=parseInt(80*CalculateApp.data.windowWidth/100)+"px";try{for(var d=(CalculateApp.libs.functionPlot({target:"#plot",yDomain:[b-10,b+10],xDomain:[-10,10],width:parseInt(80*CalculateApp.data.windowWidth/100),height:parseInt(80*CalculateApp.data.windowHeight/100),data:[{fn:c}]}),0);d<10;d++)window.scroll(0,0)}catch(b){a.hide()}}).onHide(function(a){a.remove(),setTimeout(function(){CalculateApp.focus()},300)}).show()},graphParser:function(a){var b=CalculateApp.evalFunctionAtZero(a),c=function(b){return Parser.parse(a).evaluate({x:b})};CalculateApp._graph(a,b,c)},graphMathJS:function(a){var b=CalculateApp.evalFunctionAtZero(a),c=mathjs.eval(a);CalculateApp._graph(a,b,c)},graph:function(a){return a=CalculateApp.tryPatchGraphEquation(a),CalculateApp.isFullMode?CalculateApp.graphMathJS(a):CalculateApp.graphParser(a)},displayCalculation:function(a){var b=document.createElement("div");if(a.error)b.innerHTML=CalculateApp.libs.mustache.render(getErrorTemplate(),a);else if(a.graph){b.innerHTML=CalculateApp.libs.mustache.render(getGraphTemplate(),a);for(var c=b.childNodes[0].childNodes,d=function(a){CalculateApp.graph(a.target.value)},e=0;e<c.length;e++)"BUTTON"===c[e].tagName&&c[e].addEventListener("click",d)}else b.innerHTML=CalculateApp.libs.mustache.render(getResultTemplate(),a);CalculateApp.elements.resultsZoneDiv.insertBefore(b,CalculateApp.elements.resultsZoneDiv.childNodes[0])},storeCalculation:function(a){CalculateApp.data.calculations.push(a)},persistCalculations:function(){for(var a=[],b=CalculateApp.data.calculations.length-1;b>=0&&!(a.length>=20);b--)a.unshift(CalculateApp.data.calculations[b]);var c=JSON.stringify(a);CalculateApp.libs.activity.getDatastoreObject().setDataAsText(c),CalculateApp.libs.activity.getDatastoreObject().save(function(){})},baseConv:function(a,b,c){return b==c?a:parseInt(a,c||10).toString(b)},onResize:function(){CalculateApp.data.windowHeight=getWindowHeight(),CalculateApp.data.windowWidth=getWindowWidth(),setTimeout(function(){CalculateApp.elements.resultsZoneDiv.style.height=CalculateApp.elements.calcInputDiv.clientHeight+"px",CalculateApp.elements.resultsZoneDiv.style.display="block"},300)},focus:function(){CalculateApp.data.isMobile||CalculateApp.elements.calcInput.focus()},transateGui:function(){void 0!==CalculateApp.libs.webL10n.get("calcul")&&CalculateApp.libs.webL10n.get("calcul").length>0&&(CalculateApp.elements.calcInput.placeholder=CalculateApp.libs.webL10n.get("calcul")),void 0!==CalculateApp.libs.webL10n.get("label")&&CalculateApp.libs.webL10n.get("label").length>0&&(CalculateApp.elements.labelInput.placeholder=CalculateApp.libs.webL10n.get("label")),void 0!==CalculateApp.libs.webL10n.get("clear")&&CalculateApp.libs.webL10n.get("clear").length>0&&(CalculateApp.elements.calcButtonClear.innerHTML=CalculateApp.libs.webL10n.get("clear"))},displayAllCalculations:function(){for(;CalculateApp.elements.resultsZoneDiv.firstChild;)CalculateApp.elements.resultsZoneDiv.removeChild(CalculateApp.elements.resultsZoneDiv.firstChild);for(var a=0;a<CalculateApp.data.calculations.length;a++)CalculateApp.displayCalculation(CalculateApp.data.calculations[a])},tryPatchEquation:function(a){if(CalculateApp.data.isRadian)return a;for(var b=["cos","sin","tan","acos","asin","atan","cosh","sinh","tanh"],c=0;c<b.length;c++){var d=new RegExp(b[c]+"\\((.+?)\\)","gi"),e=a.match(d);if(e)for(var f=0;f<e.length;f++){var g=new RegExp("\\(([^\\)]+)\\)","gi"),h=g.exec(e[f]);h&&h.length>=2&&(a=a.replace(h[1],h[1]+" * "+CalculateApp.data.pi+" / 180"))}}return a},tryPatchGraphEquation:function(a){return CalculateApp.isFullMode||(a=a.replace("f(x)=","")),a},toFixed:function(a,b){if(isNaN(a)||Number(a)===a&&a%1===0)return a;var c=Math.pow(10,b||0);return String(Math.round(a*c)/c)}};