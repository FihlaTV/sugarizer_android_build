/*! Sugarizer 2018-07-01 */
var util={};util.moves=[{dx:-1,dy:0},{dx:0,dy:-1},{dx:1,dy:0},{dx:0,dy:1}],util.unitTypes=["hq","soldier","tank","canon","helo"],util.unitPowers=[constant.powerHq,constant.powerSoldier,constant.powerTank,constant.powerCanon,constant.powerHelo],util.unitStats=[constant.statHq,constant.statSoldier,constant.statTank,constant.statCanon,constant.statHelo],util.explosionsImages=["explosion_1","explosion_2","explosion_3","explosion_4","explosion_5","explosion_6","explosion_7"],util.createMap=function(a){for(var b=[],c=0,d=0;d<constant.boardHeight;d++){for(var e=[],f=0;f<constant.boardWidth;f++){var g=constant.tileEmpty,h=a[c];"O"==h?g=constant.tileWater:"H"==h?g=constant.tileTrees:"^"==h&&(g=constant.tileMountain),e.push(g),c++}b.push(e)}return b},util.createUnit=function(a){for(var b="blue"==a.color?2:0,c=0,d=0;d<util.unitTypes.length;d++)util.unitTypes[d]==a.type&&(c=util.unitPowers[d]);for(var e=a.type+"_"+a.color;null!=util.lookForUnit(a);)a.x=a.x+1;var f=new Sprite({x:a.x,y:a.y,heading:b,power:c,engine:a.engine,images:"hq"==a.type?[e]:[e+"_0",e+"_1",e+"_2",e+"_3"]});return f},util.createUnits=function(a){for(var b=[],c=0;c<a.length;c++)b.push(util.createUnit(a[c]));return b},util.isValidPosition=function(a,b){if(a.x<0||a.x==constant.boardWidth||a.y<0||a.y==constant.boardHeight)return!1;var c=play.game[a.y][a.x],d=util.getUnitType(b);if(4==d)return!0;if(c==constant.tileEmpty)return!0;if(0==d)return c==constant.tileEmpty;if(c==constant.tileTrees)return 1==d;if(c==constant.tileWater)return 1==d;var e=util.lookForUnit(a);return null!=e&&e==b},util.nextPositionOnHeading=function(a){return{x:a.x+util.moves[a.heading].dx,y:a.y+util.moves[a.heading].dy}},util.lookForUnit=function(a){for(var b=0;b<play.units.length;b++)if(play.units[b].x==a.x&&play.units[b].y==a.y)return play.units[b];return null},util.lookForValue=function(a){for(var b=[],c=0;c<play.units.length;c++)void 0!==play.units[c].value&&play.units[c].value.result==a&&b.push(play.units[c]);return b},util.lookForOpponent=function(a){for(var b=a.getCurrentImage().indexOf("red")!=-1?"blue":"red",c=0;c<util.moves.length;c++){var d={x:a.x+util.moves[c].dx,y:a.y+util.moves[c].dy},e=util.lookForUnit(d);if(null!=e&&e.getCurrentImage().indexOf(b)!=-1)return{heading:c,unit:e}}return null},util.getUnitType=function(a){for(var b=a.getCurrentImage(),c=0;c<util.unitTypes.length;c++)if(b.indexOf(util.unitTypes[c])!=-1)return c;return-1},util.couldBeat=function(a,b){var c=util.getUnitType(a),d=util.getUnitType(b);return 1==c&&d==util.unitTypes.length-1||c>=d},util.processFight=function(a,b,c){(null==a||util.couldBeat(a,b))&&(b.power=b.power-(void 0!==c?c:1),util.doExplosion(b))},util.doExplosion=function(a){var b=0;sound.play("audio/explosion");var c=window.setInterval(function(){if(b==util.explosionsImages.length||app.endOfGame)return void window.clearInterval(c);var d=play.canvas.hasNode().getContext("2d"),e=document.getElementById(util.explosionsImages[b]);enyo.platform.android&&"http"!=document.location.protocol.substr(0,4)||(d.save(),d.translate(a.x*constant.tileSize,a.y*constant.tileSize),d.drawImage(e,0,0),d.restore()),b++},constant.explosionInterval)},util.getUrlParameter=function(a){var b=RegExp("[?&]"+a+"=([^&]*)").exec(window.location.search);return b&&decodeURIComponent(b[1].replace(/\+/g," "))},util.random=function(a){return Math.floor(Math.random()*a)},util.randomUnit=function(a){for(var b=util.random(10),c=util.unitStats.length-1;c>0;c--)if(b>=a[c])return util.unitTypes[c]},util.nearestUnit=function(a,b){for(var c=-1,d=constant.boardWidth*constant.boardHeight,e=0;e<b.length;e++){var f=Math.abs(b[e].x-a.x)+Math.abs(b[e].y-a.y);f<d&&(c=e,d=f)}return c!=-1?b[c]:null};