/*! Sugarizer 2018-07-01 */
function Game(a,b,c,d,e,f){this.margin=0,this.radius=0,this.circleswidth=0,this.circlesheight=0,this.colours=[b.stroke,b.fill],this.gridwidth=7,this.gridheight=7,this.numFlips=14,this.startgridwidth=4,this.startgridheight=4,this.dots=[],this.stack=[],this.solveTimeout,this.newGameTimeout,this.radiusFromX=function(){this.margin=.02*a.canvas.width;var b=(a.canvas.width-this.margin*(this.gridwidth+1))/this.gridwidth,c=b/2;return c},this.radiusFromY=function(){this.margin=.02*a.canvas.height;var b=(a.canvas.height-this.margin*(this.gridheight+1))/this.gridheight,c=b/2;return c},this.canDoFromX=function(){var b=this.radiusFromX();return this.margin=.02*a.canvas.width,2*b*this.gridheight+this.margin*(this.gridheight+1)<=a.canvas.height&&b},this.checkGameOver=function(){for(var a=0;a<this.startgridwidth;a++)for(var b=0;b<this.startgridheight;b++)if(0!=this.dots[a][b].colour)return!1;return!0},this.flip=function(a,b,c,d){void 0===c&&(c=!0),void 0===d&&(d=!0),d&&this.stack.push([a,b]),this.dots[a][b].flipSelf(),0<b&&this.dots[a][b-1].flipSelf(),0<a&&this.dots[a-1][b].flipSelf(),b<this.startgridheight-1&&this.dots[a][b+1].flipSelf(),a<this.startgridwidth-1&&this.dots[a+1][b].flipSelf(),c&&this.checkGameOver()&&this.gameOver()},this.getRandomInt=function(a,b){return Math.floor(Math.random()*(b-a+1))+a},this.flipRandomDot=function(){this.flip(this.getRandomInt(0,this.startgridwidth-1),this.getRandomInt(0,this.startgridheight-1),!1)},this.solve=function(){if(0!=this.stack.length){var a=this.stack.pop();this.flip(a[0],a[1],!1,!1)}},this.gameOver=function(){for(var a=0;a<this.startgridwidth;a++)for(var b=0;b<this.startgridheight;b++)this.dots[a][b].showSmile(),this.dots[a][b].clickable=!1;this.startgridwidth<this.gridwidth&&(this.startgridwidth++,this.startgridheight++),this.palette.setUsed();var c=this;this.newGameTimeout=setTimeout(function(){c.newGame()},2e3)},this.stop=function(){var a={};a.stack=this.stack,a.startgridwidth=this.startgridwidth,a.startgridheight=this.startgridheight,a.dots=[];for(var b=0;b<this.startgridwidth;b++){temparr=[];for(var c=0;c<this.startgridheight;c++)temparr.push(this.dots[b][c].colour);a.dots.push(temparr)}var d=JSON.stringify(a);e.getDatastoreObject().setDataAsText(d),e.getDatastoreObject().save(function(){e.close()})},this.initialiseFromArray=function(){clearTimeout(this.newGameTimeout),clearTimeout(this.solveTimeout),a.removeAllChildren(),this.calculateDimensions();for(var b=2*this.radius+this.margin,c=(a.canvas.width-this.circleswidth)/2+this.margin,d=this.margin,e=0;e<this.startgridwidth;e++){d=this.margin;for(var f=0;f<this.startgridheight;f++)this.dots[e][f].radius=this.radius,this.dots[e][f].x=c+this.radius,this.dots[e][f].y=d+this.radius,this.dots[e][f].init(),d+=b;c+=b}},this.initDots=function(b){this.dots=[];for(var c=[],d=2*this.radius+this.margin,e=(a.canvas.width-this.circleswidth)/2+this.margin,f=this.margin,g=0;g<this.startgridwidth;g++){c=[],f=this.margin;for(var h=0;h<this.startgridheight;h++){var i=0;void 0!=b&&(i=b[g][h]);var j=new Dot(a,e+this.radius,f+this.radius,this.colours,i,this.radius,this,g,h);j.init(),c.push(j),f+=d}this.dots.push(c),e+=d}},this.calculateDimensions=function(){var a=this.canDoFromX();a===!1&&(a=this.radiusFromY()),this.radius=a,this.circleswidth=2*this.radius*this.startgridwidth+this.margin*(this.startgridwidth+1),this.circlesheight=2*this.radius*this.startgridheight+this.margin*(this.startgridheight+1)},this.newGame=function(){clearTimeout(this.newGameTimeout),clearTimeout(this.solveTimeout),a.removeAllChildren(),this.calculateDimensions(),this.initDots(),this.stack=[];for(var b=0;b<14;b++)this.flipRandomDot()},this.setSize=function(a){this.startgridwidth=a,this.startgridheight=a,this.newGame()},this.init=function(){this.palette=new f.SizePalette(this,c.getElementById("size-button"),void 0),e.getDatastoreObject().getMetadata(this.init_canaccessdatastore.bind(this))},this.init_canaccessdatastore=function(a,b){var c=(new Date).getTime();Math.abs(c-b.creation_time)<2e3?this.newGame():e.getDatastoreObject().loadAsText(this.init_getdatastore.bind(this))},this.init_getdatastore=function(a,b,c){null==a&&null!=c?(c=JSON.parse(c),this.restoreFromDatastore(c)):this.newGame()},this.restoreFromDatastore=function(b){this.stack=b.stack,this.startgridwidth=b.startgridwidth,this.startgridheight=b.startgridheight,clearTimeout(this.newGameTimeout),clearTimeout(this.solveTimeout),a.removeAllChildren(),this.calculateDimensions(),this.initDots(b.dots)}}