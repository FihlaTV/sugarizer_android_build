/*! Sugarizer 2019-09-21 */
function AlignmentPattern(a,b,c){this.x=a,this.y=b,this.count=1,this.estimatedModuleSize=c,this.__defineGetter__("EstimatedModuleSize",function(){return this.estimatedModuleSize}),this.__defineGetter__("Count",function(){return this.count}),this.__defineGetter__("X",function(){return Math.floor(this.x)}),this.__defineGetter__("Y",function(){return Math.floor(this.y)}),this.incrementCount=function(){this.count++},this.aboutEquals=function(a,b,c){if(Math.abs(b-this.y)<=a&&Math.abs(c-this.x)<=a){var d=Math.abs(a-this.estimatedModuleSize);return d<=1||d/this.estimatedModuleSize<=1}return!1}}function AlignmentPatternFinder(a,b,c,d,e,f,g){this.image=a,this.possibleCenters=new Array,this.startX=b,this.startY=c,this.width=d,this.height=e,this.moduleSize=f,this.crossCheckStateCount=new Array(0,0,0),this.resultPointCallback=g,this.centerFromEnd=function(a,b){return b-a[2]-a[1]/2},this.foundPatternCross=function(a){for(var b=this.moduleSize,c=b/2,d=0;d<3;d++)if(Math.abs(b-a[d])>=c)return!1;return!0},this.crossCheckVertical=function(a,b,c,d){var e=this.image,f=qrcode.height,g=this.crossCheckStateCount;g[0]=0,g[1]=0,g[2]=0;for(var h=a;h>=0&&e[b+h*qrcode.width]&&g[1]<=c;)g[1]++,h--;if(h<0||g[1]>c)return NaN;for(;h>=0&&!e[b+h*qrcode.width]&&g[0]<=c;)g[0]++,h--;if(g[0]>c)return NaN;for(h=a+1;h<f&&e[b+h*qrcode.width]&&g[1]<=c;)g[1]++,h++;if(h==f||g[1]>c)return NaN;for(;h<f&&!e[b+h*qrcode.width]&&g[2]<=c;)g[2]++,h++;if(g[2]>c)return NaN;var i=g[0]+g[1]+g[2];return 5*Math.abs(i-d)>=2*d?NaN:this.foundPatternCross(g)?this.centerFromEnd(g,h):NaN},this.handlePossibleCenter=function(a,b,c){var d=a[0]+a[1]+a[2],e=this.centerFromEnd(a,c),f=this.crossCheckVertical(b,Math.floor(e),2*a[1],d);if(!isNaN(f)){for(var g=(a[0]+a[1]+a[2])/3,h=this.possibleCenters.length,i=0;i<h;i++){if(this.possibleCenters[i].aboutEquals(g,f,e))return new AlignmentPattern(e,f,g)}var j=new AlignmentPattern(e,f,g);this.possibleCenters.push(j),null!=this.resultPointCallback&&this.resultPointCallback.foundPossibleResultPoint(j)}return null},this.find=function(){for(var b=this.startX,e=this.height,f=b+d,g=c+(e>>1),h=new Array(0,0,0),i=0;i<e;i++){var j=g+(0==(1&i)?i+1>>1:-(i+1>>1));h[0]=0,h[1]=0,h[2]=0;for(var k=b;k<f&&!a[k+qrcode.width*j];)k++;for(var l=0;k<f;){if(a[k+j*qrcode.width])if(1==l)h[l]++;else if(2==l){if(this.foundPatternCross(h)){var m=this.handlePossibleCenter(h,j,k);if(null!=m)return m}h[0]=h[2],h[1]=1,h[2]=0,l=1}else h[++l]++;else 1==l&&l++,h[l]++;k++}if(this.foundPatternCross(h)){var m=this.handlePossibleCenter(h,j,f);if(null!=m)return m}}if(0!=this.possibleCenters.length)return this.possibleCenters[0];throw"Couldn't find enough alignment patterns"}}