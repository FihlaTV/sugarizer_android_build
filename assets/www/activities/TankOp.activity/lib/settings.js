/*! Sugarizer 2017-08-25 */
define(["webL10n","sugar-web/env","sugar-web/datastore"],function(a,b,c){function d(a){var d={name:"",language:"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language};if(!b.isSugarizer())return void a(d);var e=c.localStorage.getValue("sugar_settings");a(e)}var e={};return e.l10n=a,e.load=function(a){c.localStorage.load(function(){d(function(b){e.language=b.language,e.l10n.language.code=b.language,a()})}),document.getElementById("stop-button").addEventListener("click",function(a){sound.pause()})},e.getState=function(){for(var a=[],b=0;b<this.levels.length;b++)a.push(this.levels[b].completed);return a},e.setState=function(a){if(null==a||a.length!=this.levels.length)return!1;for(var b=0;b<this.levels.length;b++)this.levels[b].completed=a[b];return!0},e.gameMap=function(a){var b=constant.boardWidth,c=constant.boardHeight;return"grass"==a?"---HOH-----H-------H------------------------------------------------------------------H--------H---------------------------------H-H---":"trees"==a?"------H--HHHH^-----H--H----HH-------H---H-------------------------------------H------------------HH-----------H--H---H-----HHH---HH--H-":"mountain"==a?"---HHH^^^HHH-------HHH^^HH--H-------H-HH--------H------------------O------------------H--------H-H------------HHH^H-H-------HHH^^^HHH--":new Array(b*c).join("-")},e.typeNumber=function(){var a=Math.floor(11*Math.random());return{tag:""+a,result:a}},e.generateFunctionAddFromTo=function(a,b){var c=b-a+1;return function(){var b=a+Math.floor(Math.random()*c),d=a+Math.floor(Math.random()*c);return{tag:""+b+"+"+d,result:b+d}}},e.missingNumbers=function(){var a=Math.floor(11*Math.random()),b=Math.floor(11*Math.random());return{tag:""+a+"+?="+(a+b),result:b}},e.generateFunctionSubstractFromTo=function(a,b,c){var d=b-a+1;return function(){var b=a+Math.floor(Math.random()*d),e=a+Math.floor(Math.random()*d);if(!c&&Math.abs(e)>Math.abs(b)){var f=b;b=e,e=f}return{tag:""+b+"-"+e,result:b-e}}},e.additionSubtraction=function(){var a=Math.floor(21*Math.random()),b=Math.floor(11*Math.random()),c=Math.floor(2*Math.random());if(0==c)return{tag:""+a+"+"+b,result:a+b};if(Math.abs(b)>Math.abs(a)){var d=a;a=b,b=d}return{tag:""+a+"-"+b,result:a-b}},e.levels=[{id:"Type",name:"Type",map:"mountain",defense:[4,0,4,0,0],attack:22,stats:[10,10,0,9,10],generator:e.typeNumber,completed:!1},{id:"ADD3",name:"ADD3",map:"trees",defense:[4,2,2,0,0],attack:20,stats:[10,0,8,10,10],generator:e.generateFunctionAddFromTo(1,3),completed:!1},{id:"ADD5",name:"ADD5",map:"grass",defense:[4,3,1,0,0],attack:30,stats:[10,0,8,10,9],generator:e.generateFunctionAddFromTo(0,5),completed:!1},{id:"SUM10",name:"SUM10",map:"mountain",defense:[4,0,4,0,0],attack:30,stats:[10,10,0,8,9],generator:e.generateFunctionAddFromTo(0,10),completed:!1},{id:"SUM15",name:"SUM15",map:"trees",defense:[4,2,2,0,0],attack:30,stats:[10,0,7,10,10],generator:e.generateFunctionAddFromTo(0,15),completed:!1},{id:"SUM20",name:"SUM20",map:"grass",defense:[4,3,1,0,0],attack:40,stats:[10,0,7,10,9],generator:e.generateFunctionAddFromTo(0,20),completed:!1},{id:"TDN",name:"TDN",map:"mountain",defense:[4,4,4,0,0],attack:40,stats:[10,0,1,8,9],generator:e.generateFunctionAddFromTo(10,20),completed:!1},{id:"Missing",name:"Missing",map:"trees",defense:[4,2,2,0,0],attack:40,stats:[10,0,7,10,10],generator:e.missingNumbers,completed:!1},{id:"S010",name:"S010",map:"grass",defense:[4,0,4,0,0],attack:40,stats:[10,10,0,9,10],generator:e.generateFunctionSubstractFromTo(0,10,!1),completed:!1},{id:"S020",name:"S020",map:"trees",defense:[4,2,2,0,0],attack:20,stats:[10,0,8,10,10],generator:e.generateFunctionSubstractFromTo(0,20,!1),completed:!1},{id:"STW",name:"STW",map:"mountain",defense:[4,4,4,0,0],attack:30,stats:[10,0,1,8,9],generator:e.generateFunctionSubstractFromTo(10,30,!1),completed:!1},{id:"AAS",name:"AAS",map:"trees",defense:[4,2,2,0,0],attack:40,stats:[10,0,7,10,10],generator:e.additionSubtraction,completed:!1}],e});