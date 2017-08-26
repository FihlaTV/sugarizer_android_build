/*! Sugarizer 2017-08-25 */
define(["rot","activity/directions"],function(a,b){var c={};c.width=void 0,c.height=void 0,c.startPoint={},c.goalPoint={},c.walls=[],c.visited=[],c.directions=[],c.forks=[];var d=function(a,b){var d=c.directions[a][b];return d.reduce(function(a,b){return a+b})},e=function(a,d){var e=[0,0,0,0];return 1==c.walls[a][d]?e:(0==c.walls[a-1][d]&&(e[b.west]=1),0==c.walls[a+1][d]&&(e[b.east]=1),0==c.walls[a][d-1]&&(e[b.north]=1),0==c.walls[a][d+1]&&(e[b.south]=1),e)},f=function(){for(var a=0;a<c.width;a++)for(var b=0;b<c.height;b++)c.directions[a][b]=e(a,b)};c.isDeadEnd=function(a,b){return 1==d(a,b)},c.isFork=function(a,b){return d(a,b)>2};var g=function(){for(var a=0;a<c.width;a++)for(var b=0;b<c.height;b++)(c.isDeadEnd(a,b)||c.isFork(a,b))&&(c.forks[a][b]=1)},h=function(a,b,d){c.walls[a][b]=d},i=function(a,b){for(var c=[],d=0;d<a;d++)c[d]=new Array(b);return c},j=function(a,b){c.height=Math.sqrt(b/a),c.width=c.height*a,c.height=Math.floor(c.height),c.width=Math.floor(c.width);var d,e;d=c.width%2?c.width-2:c.width-3,e=c.height%2?c.height-2:c.height-3;var f,g;Math.random()<.5?(f=1,i=d):(f=d,i=1);var h,i;Math.random()<.5?(h=1,g=e):(h=e,g=1),c.startPoint={x:f,y:h},c.goalPoint={x:i,y:g}};return c.generate=function(b,d){j(b,d),c.walls=i(c.width,c.height),c.visited=i(c.width,c.height),c.directions=i(c.width,c.height),c.forks=i(c.width,c.height);var e=new a.Map.IceyMaze(c.width,c.height,1);e.create(h),f(),g()},c});