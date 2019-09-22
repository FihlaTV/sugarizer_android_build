/*! Sugarizer 2019-09-21 */
function getWindowHeight(){var a=0;return"number"==typeof window.innerHeight?a=window.innerHeight:document.documentElement&&document.documentElement.clientHeight?a=document.documentElement.clientHeight:document.body&&document.body.clientHeight&&(a=document.body.clientHeight),a}function getWindowWidth(){var a=0;return"number"==typeof window.innerWidth?a=window.innerWidth:document.documentElement&&document.documentElement.clientWidth?a=document.documentElement.clientWidth:document.body&&document.body.clientWidth&&(a=document.body.clientWidth),a}function doGetCaretPosition(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"==a.selectionStart)&&(b=a.selectionStart);return b}function removeCharacter(){if(CalculateApp.data.isMobile)CalculateApp.elements.calcInput.value=CalculateApp.elements.calcInput.value.substring(0,CalculateApp.elements.calcInput.value.length-1);else{var a=doGetCaretPosition(CalculateApp.elements.calcInput);a===CalculateApp.elements.calcInput.value.length&&(a-=1),a<0&&(a=0);var b=CalculateApp.elements.calcInput.value;CalculateApp.elements.calcInput.value=b.slice(0,a)+b.slice(a+1),CalculateApp.elements.calcInput.setSelectionRange(a,a)}CalculateApp.focus()}function addTextInsideInput(a){if(CalculateApp.data.isMobile)CalculateApp.elements.calcInput.value=CalculateApp.elements.calcInput.value+a;else{var b=doGetCaretPosition(CalculateApp.elements.calcInput),c=CalculateApp.elements.calcInput.value;CalculateApp.elements.calcInput.value=c.slice(0,b)+a+c.slice(b),CalculateApp.elements.calcInput.setSelectionRange(b+a.length,b+a.length)}CalculateApp.focus()}function calcButtonClick(a){CalculateApp.data.calculationDone&&!isNaN(a.target.value)&&(CalculateApp.elements.calcInput.value=""),CalculateApp.data.calculationDone=!1,addTextInsideInput(a.target.value)}function calcInputKeyUp(a){13==a.which&&calcEqualClick()}function getErrorTemplate(){return"<div class='result' style='overflow:hidden; margin-top:3px;padding:5px; font-size: 140%; color:#fff; border:5px solid "+CalculateApp.data.buddyColor.stroke+"; background-color:"+CalculateApp.data.buddyColor.fill+"; '>   {{#label}}<span>{{ label }}</span> <br/> {{/label}}  <span>{{ calculation }}</span> <br/>   <b style='float:right;'>{{error}}</b>   <div style='clear:both;'></div>   </div>"}function getResultTemplate(){return"<div class='result' style='overflow:hidden; margin-top:3px;padding:5px; font-size: 140%; color:#fff; border:5px solid "+CalculateApp.data.buddyColor.stroke+"; background-color:"+CalculateApp.data.buddyColor.fill+"; '>   {{#label}}<span>{{ label }}</span> <br/> {{/label}}  <span>{{ calculation }}</span> <br/>   <b style='float:right;'>{{result}}</b>   <div style='clear:both;'></div>   </div>"}function getGraphTemplate(){return"<div class='result' style='overflow:hidden; margin-top:3px;padding:5px; font-size: 140%; color:#fff; border:5px solid "+CalculateApp.data.buddyColor.stroke+"; background-color:"+CalculateApp.data.buddyColor.fill+"; '>   {{#label}}<span>{{ label }}</span> <br/> {{/label}}  <span>{{ calculation }}</span> <br/>   <button value='{{calculation}}' style='background:none; border-radius:0px; float:right; border:0px; margin:3px; width:55px; height:55px; background-image: url(icons/plot.svg)'></button>  <div style='clear:both;'></div>   </div>"}function launchGraph(a,b){var c={calculation:a,graph:!0};b&&(c.label=b),a=CalculateApp.tryPatchGraphEquation(a);try{var d=CalculateApp.evalFunctionAtZero(a);d.value&&(d=d.value),c.result=d}catch(a){c.error=a.message}CalculateApp.storeCalculation(c),CalculateApp.persistCalculations(),CalculateApp.displayCalculation(c),c.error||CalculateApp.graph(c.calculation)}function launchCalculation(a,b){var c={calculation:a,graph:!1};b&&(c.label=b),a=CalculateApp.tryPatchEquation(a);try{var d=CalculateApp.eval(a);c.result=d.result,CalculateApp.elements.calcInput.value=d.resultBase10}catch(a){c.error=a.message}CalculateApp.storeCalculation(c),CalculateApp.persistCalculations(),CalculateApp.displayCalculation(c)}function calcEqualClick(){if(void 0!==CalculateApp.elements.calcInput.value&&0!==CalculateApp.elements.calcInput.value.length){var a=CalculateApp.elements.labelInput.value,b=CalculateApp.elements.calcInput.value;b=b.replace(/ /g,""),CalculateApp.elements.labelInput.value="",CalculateApp.elements.calcInput.value="",CalculateApp.isGraph(b,a)?launchGraph(b,a):launchCalculation(b,a),CalculateApp.data.calculationDone=!0}}function calcDelClick(){removeCharacter(),CalculateApp.focus()}function calcClearClick(){CalculateApp.elements.calcInput.value="",CalculateApp.focus()}function onbaseClick(){switch(CalculateApp.data.outputBase){case 10:CalculateApp.data.outputBase=2,CalculateApp.elements.basePaletteDiv.style.backgroundImage="url(icons/base-2.svg)";break;case 2:CalculateApp.data.outputBase=8,CalculateApp.elements.basePaletteDiv.style.backgroundImage="url(icons/base-8.svg)";break;case 8:CalculateApp.data.outputBase=16,CalculateApp.elements.basePaletteDiv.style.backgroundImage="url(icons/base-16.svg)";break;case 16:CalculateApp.data.outputBase=10,CalculateApp.elements.basePaletteDiv.style.backgroundImage="url(icons/base-10.svg)"}}function onOutputDigitsClick(){switch(CalculateApp.data.outputDigits){case 6:CalculateApp.data.outputDigits=9,CalculateApp.elements.outputDigitsPalette.style.backgroundImage="url(icons/digits-9.svg)";break;case 9:CalculateApp.data.outputDigits=12,CalculateApp.elements.outputDigitsPalette.style.backgroundImage="url(icons/digits-12.svg)";break;case 12:CalculateApp.data.outputDigits=15,CalculateApp.elements.outputDigitsPalette.style.backgroundImage="url(icons/digits-15.svg)";break;case 15:CalculateApp.data.outputDigits=6,CalculateApp.elements.outputDigitsPalette.style.backgroundImage="url(icons/digits-6.svg)"}}function onradianDegreeClick(a){CalculateApp.data.isRadian?(CalculateApp.data.isRadian=!1,CalculateApp.elements.radianDegreePalette.style.backgroundImage="url(icons/format-deg.svg)"):(CalculateApp.data.isRadian=!0,CalculateApp.elements.radianDegreePalette.style.backgroundImage="url(icons/format-rad.svg)")}function ontrigoClick(a){CalculateApp.data.calculationDone&&isNaN(a.detail.value)&&(CalculateApp.elements.calcInput.value=""),CalculateApp.data.calculationDone=!1,addTextInsideInput(a.detail.value)}function onalgebraClick(a){CalculateApp.data.calculationDone&&isNaN(a.detail.value)&&(CalculateApp.elements.calcInput.value=""),CalculateApp.data.calculationDone=!1,addTextInsideInput(a.detail.value)}function initGui(){CalculateApp.elements.modalDiv=document.getElementById("modal"),CalculateApp.elements.resultsZoneDiv=document.getElementById("results-zone"),CalculateApp.elements.calcInputDiv=document.getElementById("calc-input-div"),CalculateApp.elements.calcInput=document.getElementById("calc-input"),CalculateApp.elements.labelInput=document.getElementById("label-input"),CalculateApp.elements.trigoPaletteDiv=document.getElementById("trigo-palette"),CalculateApp.elements.algebraPaletteDiv=document.getElementById("algebra-palette"),CalculateApp.elements.basePaletteDiv=document.getElementById("base-palette"),CalculateApp.elements.radianDegreePalette=document.getElementById("radian-degree-palette"),CalculateApp.elements.outputDigitsPalette=document.getElementById("output-digits-palette"),CalculateApp.elements.calcInput.addEventListener("keyup",calcInputKeyUp,!1);for(var a=document.getElementsByClassName("calcbuttoninput"),b=0;b<a.length;b++)a[b].addEventListener("click",calcButtonClick,!1);var c=document.getElementsByClassName("calcbuttonclear");for(b=0;b<c.length;b++)CalculateApp.elements.calcButtonClear=c[b],c[b].addEventListener("click",calcClearClick,!1);var d=document.getElementsByClassName("calcbuttondel");for(b=0;b<d.length;b++)d[b].addEventListener("click",calcDelClick,!1);var e=document.getElementsByClassName("calcbuttoncalc");for(b=0;b<e.length;b++)e[b].addEventListener("click",calcEqualClick,!1);window.onresize=CalculateApp.onResize,CalculateApp.elements.trigoPalette=new CalculateApp.libs.trigopalette.trigoPalette(CalculateApp.elements.trigoPaletteDiv,void 0),CalculateApp.elements.trigoPalette.addEventListener("trigoClick",ontrigoClick),CalculateApp.elements.algebraPalette=new CalculateApp.libs.algebrapalette.algebraPalette(CalculateApp.elements.algebraPaletteDiv,void 0),CalculateApp.elements.algebraPalette.addEventListener("algebraClick",onalgebraClick),!navigator.userAgent.match(/iPad|iPhone|iPod/g)?(CalculateApp.elements.basePaletteDiv.addEventListener("click",onbaseClick),CalculateApp.elements.radianDegreePalette.addEventListener("click",onradianDegreeClick),CalculateApp.elements.outputDigitsPalette.addEventListener("click",onOutputDigitsClick)):(CalculateApp.elements.basePaletteDiv.addEventListener("touchstart",onbaseClick),CalculateApp.elements.radianDegreePalette.addEventListener("touchstart",onradianDegreeClick),CalculateApp.elements.outputDigitsPalette.addEventListener("touchstart",onOutputDigitsClick))}