/*! Sugarizer 2017-08-25 */
!function(a){"use strict";function b(a,b){return isNaN(a=parseInt(a,10))&&c(),a*b}function c(){throw"Invalid Param"}function d(a,b){return this instanceof d?(g(a,b),a=d.REDUCE?k(f.d,f.n):1,this.s=f.s,this.n=f.n/a,void(this.d=f.d/a)):new d(a,b)}var e=2e3,f={s:1,n:0,d:1},g=function(a,d){var e,g=0,h=1,i=1,j=0,k=0,l=0,m=1,n=1,o=0,p=1,q=1,r=1,s=1e7;if(void 0===a||null===a);else if(void 0!==d)g=a,h=d,i=g*h;else switch(typeof a){case"object":"d"in a&&"n"in a?(g=a.n,h=a.d,"s"in a&&(g*=a.s)):0 in a?(g=a[0],1 in a&&(h=a[1])):c(),i=g*h;break;case"number":if(a<0&&(i=a,a=-a),a%1===0)g=a;else if(a>0){for(a>=1&&(n=Math.pow(10,Math.floor(1+Math.log(a)/Math.LN10)),a/=n);p<=s&&r<=s;){if(e=(o+q)/(p+r),a===e){p+r<=s?(g=o+q,h=p+r):r>p?(g=q,h=r):(g=o,h=p);break}a>e?(o+=q,p+=r):(q+=o,r+=p),p>s?(g=q,h=r):(g=o,h=p)}g*=n}else(isNaN(a)||isNaN(d))&&(h=g=NaN);break;case"string":if(p=a.match(/\d+|./g),"-"===p[o]?(i=-1,o++):"+"===p[o]&&o++,p.length===o+1?k=b(p[o++],i):"."===p[o+1]||"."===p[o]?("."!==p[o]&&(j=b(p[o++],i)),o++,(o+1===p.length||"("===p[o+1]&&")"===p[o+3]||"'"===p[o+1]&&"'"===p[o+3])&&(k=b(p[o],i),m=Math.pow(10,p[o].length),o++),("("===p[o]&&")"===p[o+2]||"'"===p[o]&&"'"===p[o+2])&&(l=b(p[o+1],i),n=Math.pow(10,p[o+1].length)-1,o+=3)):"/"===p[o+1]||":"===p[o+1]?(k=b(p[o],i),m=b(p[o+2],1),o+=3):"/"===p[o+3]&&" "===p[o+1]&&(j=b(p[o],i),k=b(p[o+2],i),m=b(p[o+4],1),o+=5),p.length<=o){h=m*n,i=g=l+h*j+n*k;break}default:c()}if(0===h)throw"DIV/0";f.s=i<0?-1:1,f.n=Math.abs(g),f.d=Math.abs(h)},h=function(a,b,c){for(var d=1;b>0;a=a*a%c,b>>=1)1&b&&(d=d*a%c);return d},i=function(a,b){for(;b%2===0;b/=2);for(;b%5===0;b/=5);if(1===b)return 0;for(var c=10%b,d=1;1!==c;d++)if(c=10*c%b,d>e)return 0;return d},j=function(a,b,c){for(var d=1,e=h(10,c,b),f=0;f<300;f++){if(d===e)return f;d=10*d%b,e=10*e%b}return 0},k=function(a,b){if(!a)return b;if(!b)return a;for(;;){if(a%=b,!a)return b;if(b%=a,!b)return a}};d.REDUCE=1,d.prototype={s:1,n:0,d:1,abs:function(){return new d(this.n,this.d)},neg:function(){return new d(-this.s*this.n,this.d)},add:function(a,b){return g(a,b),new d(this.s*this.n*f.d+f.s*this.d*f.n,this.d*f.d)},sub:function(a,b){return g(a,b),new d(this.s*this.n*f.d-f.s*this.d*f.n,this.d*f.d)},mul:function(a,b){return g(a,b),new d(this.s*f.s*this.n*f.n,this.d*f.d)},div:function(a,b){return g(a,b),new d(this.s*f.s*this.n*f.d,this.d*f.n)},clone:function(){return new d(this)},mod:function(a,b){return isNaN(this.n)||isNaN(this.d)?new d(NaN):void 0===a?new d(this.s*this.n%this.d,1):(g(a,b),0===f.n&&0===this.d&&d(0,0),new d(this.s*f.d*this.n%(f.n*this.d),f.d*this.d))},gcd:function(a,b){return g(a,b),new d(k(f.n,this.n),f.d*this.d/k(f.d,this.d))},lcm:function(a,b){return g(a,b),0===f.n&&0===this.n?new d:new d(f.n*this.n/k(f.n,this.n),k(f.d,this.d))},ceil:function(a){return a=Math.pow(10,a||0),isNaN(this.n)||isNaN(this.d)?new d(NaN):new d(Math.ceil(a*this.s*this.n/this.d),a)},floor:function(a){return a=Math.pow(10,a||0),isNaN(this.n)||isNaN(this.d)?new d(NaN):new d(Math.floor(a*this.s*this.n/this.d),a)},round:function(a){return a=Math.pow(10,a||0),isNaN(this.n)||isNaN(this.d)?new d(NaN):new d(Math.round(a*this.s*this.n/this.d),a)},inverse:function(){return new d(this.s*this.d,this.n)},pow:function(a){return a<0?new d(Math.pow(this.s*this.d,-a),Math.pow(this.n,-a)):new d(Math.pow(this.s*this.n,a),Math.pow(this.d,a))},equals:function(a,b){return g(a,b),this.s*this.n*f.d===f.s*f.n*this.d},compare:function(a,b){g(a,b);var c=this.s*this.n*f.d-f.s*f.n*this.d;return(0<c)-(c<0)},divisible:function(a,b){return g(a,b),!(!(f.n*this.d)||this.n*f.d%(f.n*this.d))},valueOf:function(){return this.s*this.n/this.d},toFraction:function(a){var b,c="",d=this.n,e=this.d;return this.s<0&&(c+="-"),1===e?c+=d:(a&&(b=Math.floor(d/e))>0&&(c+=b,c+=" ",d%=e),c+=d,c+="/",c+=e),c},toLatex:function(a){var b,c="",d=this.n,e=this.d;return this.s<0&&(c+="-"),1===e?c+=d:(a&&(b=Math.floor(d/e))>0&&(c+=b,d%=e),c+="\\frac{",c+=d,c+="}{",c+=e,c+="}"),c},toContinued:function(){var a,b=this.n,c=this.d,d=[];do d.push(Math.floor(b/c)),a=b%c,b=c,c=a;while(1!==b);return d},toString:function(){var a,b=this.n,c=this.d;if(isNaN(b)||isNaN(c))return"NaN";d.REDUCE||(a=k(b,c),b/=a,c/=a);for(var e=String(b).split(""),f=0,g=[~this.s?"":"-","",""],h="",l=i(b,c),m=j(b,c,l),n=-1,o=1,p=15+l+m+e.length,q=0;q<p;q++,f*=10){if(q<e.length?f+=Number(e[q]):(o=2,n++),l>0)if(n===m)g[o]+=h+"(",h="";else if(n===l+m){g[o]+=h+")";break}f>=c?(g[o]+=h+(f/c|0),h="",f%=c):o>1?h+="0":g[o]&&(g[o]+="0")}return g[0]+=g[1]||"0",g[2]?g[0]+"."+g[2]:g[0]}},"function"==typeof define&&define.amd?define([],function(){return d}):"object"==typeof exports?module.exports=d:a.Fraction=d}(this);