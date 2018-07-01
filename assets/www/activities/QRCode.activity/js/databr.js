/*! Sugarizer 2018-07-01 */
function QRCodeDataBlockReader(a,b,c){this.blockPointer=0,this.bitPointer=7,this.dataLength=0,this.blocks=a,this.numErrorCorrectionCode=c,b<=9?this.dataLengthMode=0:b>=10&&b<=26?this.dataLengthMode=1:b>=27&&b<=40&&(this.dataLengthMode=2),this.getNextBits=function(a){var b=0;if(a<this.bitPointer+1){for(var c=0,d=0;d<a;d++)c+=1<<d;return c<<=this.bitPointer-a+1,b=(this.blocks[this.blockPointer]&c)>>this.bitPointer-a+1,this.bitPointer-=a,b}if(a<this.bitPointer+1+8){for(var e=0,d=0;d<this.bitPointer+1;d++)e+=1<<d;return b=(this.blocks[this.blockPointer]&e)<<a-(this.bitPointer+1),this.blockPointer++,b+=this.blocks[this.blockPointer]>>8-(a-(this.bitPointer+1)),this.bitPointer=this.bitPointer-a%8,this.bitPointer<0&&(this.bitPointer=8+this.bitPointer),b}if(a<this.bitPointer+1+16){for(var e=0,f=0,d=0;d<this.bitPointer+1;d++)e+=1<<d;var g=(this.blocks[this.blockPointer]&e)<<a-(this.bitPointer+1);this.blockPointer++;var h=this.blocks[this.blockPointer]<<a-(this.bitPointer+1+8);this.blockPointer++;for(var d=0;d<a-(this.bitPointer+1+8);d++)f+=1<<d;f<<=8-(a-(this.bitPointer+1+8));var i=(this.blocks[this.blockPointer]&f)>>8-(a-(this.bitPointer+1+8));return b=g+h+i,this.bitPointer=this.bitPointer-(a-8)%8,this.bitPointer<0&&(this.bitPointer=8+this.bitPointer),b}return 0},this.NextMode=function(){return this.blockPointer>this.blocks.length-this.numErrorCorrectionCode-2?0:this.getNextBits(4)},this.getDataLength=function(a){for(var b=0;;){if(a>>b==1)break;b++}return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][b])},this.getRomanAndFigureString=function(a){var b=a,c=0,d="",e=new Array("0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":");do if(b>1){c=this.getNextBits(11);var f=Math.floor(c/45),g=c%45;d+=e[f],d+=e[g],b-=2}else 1==b&&(c=this.getNextBits(6),d+=e[c],b-=1);while(b>0);return d},this.getFigureString=function(a){var b=a,c=0,d="";do b>=3?(c=this.getNextBits(10),c<100&&(d+="0"),c<10&&(d+="0"),b-=3):2==b?(c=this.getNextBits(7),c<10&&(d+="0"),b-=2):1==b&&(c=this.getNextBits(4),b-=1),d+=c;while(b>0);return d},this.get8bitByteArray=function(a){var b=a,c=0,d=new Array;do c=this.getNextBits(8),d.push(c),b--;while(b>0);return d},this.getKanjiString=function(a){var b=a,c=0,d="";do{c=this.getNextBits(13);var e=c%192,f=c/192,g=(f<<8)+e,h=0;h=g+33088<=40956?g+33088:g+49472,d+=String.fromCharCode(h),b--}while(b>0);return d},this.parseECIValue=function(){var a=0,b=this.getNextBits(8);if(0==(128&b)&&(a=127&b),128==(192&b)){var c=this.getNextBits(8);a=(63&b)<<8|c}if(192==(224&b)){var d=this.getNextBits(8);a=(31&b)<<16|d}return a},this.__defineGetter__("DataByte",function(){for(var a=new Array,b=1,c=2,d=4,e=7,f=8;;){var g=this.NextMode();if(0==g){if(a.length>0)break;throw"Empty data block"}if(g!=b&&g!=c&&g!=d&&g!=f&&g!=e)throw"Invalid mode: "+g+" in (block:"+this.blockPointer+" bit:"+this.bitPointer+")";if(g==e)var h=this.parseECIValue();else{var i=this.getDataLength(g);if(i<1)throw"Invalid data length: "+i;switch(g){case b:for(var j=this.getFigureString(i),k=new Array(j.length),l=0;l<j.length;l++)k[l]=j.charCodeAt(l);a.push(k);break;case c:for(var j=this.getRomanAndFigureString(i),k=new Array(j.length),l=0;l<j.length;l++)k[l]=j.charCodeAt(l);a.push(k);break;case d:var h=this.get8bitByteArray(i);a.push(h);break;case f:var j=this.getKanjiString(i);a.push(j)}}}return a})}