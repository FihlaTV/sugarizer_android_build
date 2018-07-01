/*! Sugarizer 2018-07-01 */
var storedVariableValues={},botAttributes={},lastWildCardValue="",wildCardArray=[],domArray=[],domIndex=0,isAIMLFileLoadingStarted=!1,isAIMLFileLoaded=!1,previousAnswer="",previousThinkTag=!1,AIMLInterpreter=function(a){var b=this;botAttributes=a,this.loadAIMLFilesIntoArray=function(a){isAIMLFileLoadingStarted=!0;var b=0,c=function(d){b++;var e;$(document).ready(function(){$.ajax({url:d,dataType:"text",success:function(d){e=d,(new DomJS).parse(e,function(d,e){null==e&&(e="<aiml></aiml>");e.name===!1,domArray[domIndex]=e,domIndex++,b<a.length?c(a[b]):(console.log("AIML file is loaded!"),isAIMLFileLoaded=!0)})}})})};c(a[b])},this.findAnswerInLoadedAIMLFiles=function(a,c){if(isAIMLFileLoaded){wildCardArray=[];for(var d="",e=0;e<domArray.length&&(cleanDom(domArray[e].children),!(d=findCorrectCategory(a,domArray[e].children)));e++);d&&(d=cleanStringFormatCharacters(d),previousAnswer=d),c(d,wildCardArray,a)}else{var f=function(a,c){return function(){b.findAnswerInLoadedAIMLFiles(a,c)}};setTimeout(f(a,c),1e3)}},this.restartDom=function(){domArray=[],domIndex=0}},cleanStringFormatCharacters=function(a){var b=a.replace(/\r\n/gi,"");return b=b.replace(/^\s*/,""),b=b.replace(/\s*$/,"")},cleanDom=function(a){for(var b=0;b<a.length;b++)a[b].hasOwnProperty("text")&"string"==typeof a[b].text&&a[b].text.match(/^\s*\r\n\s*$/gi)&&a.splice(b,1);for(var c=0;c<a.length;c++)a[c].hasOwnProperty("children")&&cleanDom(a[c].children)},findCorrectCategory=function(a,b){var c=0,d=function(b){for(var c=b.length-1;c>=0;c--)if("category"===b[c].name){var h=d(b[c].children),i=checkIfMessageMatchesPattern(a,h);if(i){var j=e(b[c].children);if(j){var h=g(b[c].children);if(h)return h;break}}}else if("pattern"===b[c].name){var h=f(b[c].children);return h}},e=function(a){for(var b=0;b<a.length;b++)if("that"===a[b].name)return a[b].children[0].text==previousAnswer;return!0},f=function(a){for(var b="",c=0;c<a.length;c++)b+="bot"===a[c].name?botAttributes[a[c].attributes.name]:"get"===a[c].name?storedVariableValues[a[c].attributes.name]:"set"===a[c].name?a[c].children[0].text:a[c].text;return b},g=function(a){for(var c="",d=0;d<a.length;d++){if("template"===a[d].name)return g(a[d].children);if("condition"===a[d].name)return h(a);if("random"===a[d].name)return h(a);if("srai"===a[d].name){var e=""+g(a[d].children);e=e.toUpperCase();var f=e,c=findCorrectCategory(f,b);return c}if("li"===a[d].name)return g(a[d].children);if("br"===a[d].name)return h(a);if("pattern"!==a[d].name){if("think"===a[d].name)return c=h(a);if("bot"===a[d].name)return c=h(a);if("set"===a[d].name)return c=h(a);if("get"===a[d].name)return c=h(a);if("sr"===a[d].name)return c=h(a);if("star"===a[d].name)return c=h(a);if("that"===a[d].name);else if(c=h(a),""===c.match("[\\n|\\t]*[^A-Z|^a-z|^!|^?]*")[0]&&c.indexOf("function ()")===-1)return c}else h(a[d].children)}},h=function(a){for(var d="",e=0;e<a.length;e++)if("bot"===a[e].name)d+=botAttributes[a[e].attributes.name];else if("get"===a[e].name){var f=storedVariableValues[a[e].attributes.name];d+=void 0===f?"":f}else if("set"===a[e].name){var i="";"star"===a[e].children[0].name?(i=h(a[e].children),storedVariableValues[a[e].attributes.name]=i,previousThinkTag||(d+=i)):"*"===a[e].children[0].text?(storedVariableValues[a[e].attributes.name]=wildCardArray[c],c++):storedVariableValues[a[e].attributes.name]=a[e].children[0].text,previousThinkTag?(previousThinkTag=!1,d+=""):d+=h(a[e].children)}else if("br"===a[e].name)d+="\n";else if("think"===a[e].name)previousThinkTag=!0,d+=h(a[e].children);else if("sr"===a[e].name){for(var j,k=0;k<domArray.length;k++)if(j=findCorrectCategory(lastWildCardValue,domArray[k].children)){d+=j;break}}else if("random"===a[e].name){var l=Math.floor(Math.random()*a[e].children.length);d+=g([a[e].children[l]])}else if("star"===a[e].name)d+=lastWildCardValue;else if("srai"===a[e].name){var m=""+g(a[e].children);m=m.toUpperCase();var n=m;d+=findCorrectCategory(n,b)}else if("condition"===a[e].name){if(void 0===a[e].attributes.name){if(void 0===a[e].children)return;var o;for(var p in a[e].children)if(o=a[e].children[p],"li"===o.name&&(void 0==o.attributes.value||storedVariableValues[o.attributes.name]===o.attributes.value.toUpperCase()))return g(o.children)}else if(void 0!==a[e].attributes.value)storedVariableValues[a[e].attributes.name]===a[e].attributes.value.toUpperCase()&&(d+=h(a[e].children));else if(void 0!==a[e].children){var o;for(var p in a[e].children)if(o=a[e].children[p],"li"===o.name&&(void 0===o.attributes.value||storedVariableValues[a[e].attributes.name]===o.attributes.value.toUpperCase()))return h(o.children);return}}else void 0===a[e].name&&(d+=a[e].text);return d=cleanStringFormatCharacters(d)};return d(b)},checkIfMessageMatchesPattern=function(a,b){var c=convertWildcardToRegex(b);" "!=a.charAt(0)&&(a=" "+a);var d=a.length-1,e=a.charAt(d);" "!=e&&(a+=" ");var f=a.toUpperCase().match(c);if(!f)return!1;if(f[0].length>=a.length||c.indexOf("[A-Z|0-9|\\s]*[A-Z|0-9|-]*[A-Z|0-9]*[!|.|?|\\s]*")>-1){getWildCardValue(a,b);return!0}},convertWildcardToRegex=function(a){var b=a.charAt(0);if("*"!=b)var a=" "+a;var c=a.length-1,d=a.charAt(c),e=a.replace(" *","*");return e=e.replace(/\*/g,"[A-Z|0-9|\\s]*[A-Z|0-9|*|-]*[A-Z|0-9]*[!|.|?|\\s]*"),"*"!=d&&(e+="[\\s|?|!|.]*"),e},getWildCardValue=function(a,b){var c=b.split("*"),d=a;if(c.length>1){for(var e=0;e<c.length;e++)d=d.replace(new RegExp(c[e],"i"),"|");d=d.split("|");for(var f=0,e=0;e<d.length;e++)if(""!=d[e]&&" "!=d[e]&&void 0!=d){var g=d[e],h=g.length-1,i=g.charAt(0),j=g.charAt(h);try{" "===i&&(g=g.splice(0),h=g.length-1,j=g.charAt(h))," "===j&&(g=g.substr(0,h),h=g.length-1,j=g.charAt(h)),"?"===j&&(g=g.substr(0,h))}catch(a){}wildCardArray[f]=g,f++}}return wildCardArray.length-1>=0&&(lastWildCardValue=wildCardArray[wildCardArray.length-1]),wildCardArray};