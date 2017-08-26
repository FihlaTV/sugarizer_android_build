/*! Sugarizer 2017-08-25 */
function GF256(a){this.expTable=new Array(256),this.logTable=new Array(256);for(var b=1,c=0;c<256;c++)this.expTable[c]=b,b<<=1,b>=256&&(b^=a);for(var c=0;c<255;c++)this.logTable[this.expTable[c]]=c;var d=new Array(1);d[0]=0,this.zero=new GF256Poly(this,new Array(d));var e=new Array(1);e[0]=1,this.one=new GF256Poly(this,new Array(e)),this.__defineGetter__("Zero",function(){return this.zero}),this.__defineGetter__("One",function(){return this.one}),this.buildMonomial=function(a,b){if(a<0)throw"System.ArgumentException";if(0==b)return this.zero;for(var c=new Array(a+1),d=0;d<c.length;d++)c[d]=0;return c[0]=b,new GF256Poly(this,c)},this.exp=function(a){return this.expTable[a]},this.log=function(a){if(0==a)throw"System.ArgumentException";return this.logTable[a]},this.inverse=function(a){if(0==a)throw"System.ArithmeticException";return this.expTable[255-this.logTable[a]]},this.multiply=function(a,b){return 0==a||0==b?0:1==a?b:1==b?a:this.expTable[(this.logTable[a]+this.logTable[b])%255]}}GF256.QR_CODE_FIELD=new GF256(285),GF256.DATA_MATRIX_FIELD=new GF256(301),GF256.addOrSubtract=function(a,b){return a^b};