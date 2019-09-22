/*! Sugarizer 2019-09-21 */
"use strict";define(function(a){function b(a){B>=2&&console.log("[l10n] "+a)}function c(a){B&&console.warn("[l10n] "+a)}function d(){return document.querySelectorAll('link[type="application/l10n"]')}function e(){var a=document.querySelector('script[type="application/l10n"]');return a?JSON.parse(a.innerHTML):null}function f(a){return a?a.querySelectorAll("*[data-l10n-id]"):[]}function g(a){if(!a)return{};var b=a.getAttribute("data-l10n-id"),d=a.getAttribute("data-l10n-args"),e={};if(d)try{e=JSON.parse(d)}catch(a){c("could not parse arguments for #"+b)}return{id:b,args:e}}function h(a){var b=document.createEvent("Event");b.initEvent("localized",!0,!1),b.language=a,document.dispatchEvent(b)}function i(a,b,d,e){b=b||function(a){},d=d||function(){c(a+" not found.")};var f=new XMLHttpRequest;f.open("GET",a,e),f.overrideMimeType&&f.overrideMimeType("text/plain; charset=utf-8"),f.onreadystatechange=function(){4==f.readyState&&(200==f.status||0===f.status?b(f.responseText):d())},f.onerror=d,f.ontimeout=d;try{f.send(null)}catch(a){d()}}function j(a,b,c,d){function e(a){return a.lastIndexOf("\\")<0?a:a.replace(/\\\\/g,"\\").replace(/\\n/g,"\n").replace(/\\r/g,"\r").replace(/\\t/g,"\t").replace(/\\b/g,"\b").replace(/\\f/g,"\f").replace(/\\{/g,"{").replace(/\\}/g,"}").replace(/\\"/g,'"').replace(/\\'/g,"'")}function f(a){function c(a,c){for(var i=a.replace(h,"").split(/[\r\n]+/),n="*",o=b.replace(/-[a-z]+$/i,""),p=!1,q="",r=0;r<i.length;r++){var s=i[r];if(!j.test(s)){if(c){if(k.test(s)){q=k.exec(s),n=q[1],p="*"!==n&&n!==b&&n!==o;continue}if(p)continue;l.test(s)&&(q=l.exec(s),d(g+q[1]))}var t=s.match(m);t&&3==t.length&&(f[t[1]]=e(t[2]))}}}function d(a){i(a,function(a){c(a,!1)},null,!1)}var f=[],h=/^\s*|\s*$/,j=/^\s*#|^\s*$/,k=/^\s*\[(.*)\]\s*$/,l=/^\s*@import\s+url\((.*)\)\s*$/i,m=/^([^=\s]*)\s*=\s*(.+)$/;return c(a,!0),f}var g=a.replace(/[^\/]*$/,"")||"./";i(a,function(a){v+=a;var b=f(a);for(var d in b){var e,g,h=d.lastIndexOf(".");h>0?(e=d.substring(0,h),g=d.substr(h+1)):(e=d,g=w),u[e]||(u[e]={}),u[e][g]=b[d]}c&&c()},d,A)}function k(a,f){function g(a){var b=a.href;a.type;this.load=function(a,d){var e=a;return j(b,a,d,function(){c(b+" not found."),e=""}),e}}f=f||function(){},l(),x=a;var i=d(),k=i.length;if(0==k){var m=e();return m&&m.locales&&m.default_locale?(b("using the embedded JSON directory, early way out"),u=m.locales[a]||m.locales[m.default_locale],f()):b("no resource to load, early way out"),h(a),void(z="complete")}var n=null,o=0;n=function(){++o>=k&&(f(),h(a),z="complete")};for(var p=0;p<k;p++){new g(i[p]).load(a,n)!=a&&(c('"'+a+'" resource not found'),x="")}}function l(){u={},v="",x=""}function m(a){function b(a,b){return-1!==b.indexOf(a)}function d(a,b,c){return b<=a&&a<=c}var e={af:3,ak:4,am:4,ar:1,asa:3,az:0,be:11,bem:3,bez:3,bg:3,bh:4,bm:0,bn:3,bo:0,br:20,brx:3,bs:11,ca:3,cgg:3,chr:3,cs:12,cy:17,da:3,de:3,dv:3,dz:0,ee:3,el:3,en:3,eo:3,es:3,et:3,eu:3,fa:0,ff:5,fi:3,fil:4,fo:3,fr:5,fur:3,fy:3,ga:8,gd:24,gl:3,gsw:3,gu:3,guw:4,gv:23,ha:3,haw:3,he:2,hi:4,hr:11,hu:0,id:0,ig:0,ii:0,is:3,it:3,iu:7,ja:0,jmc:3,jv:0,ka:0,kab:5,kaj:3,kcg:3,kde:0,kea:0,kk:3,kl:3,km:0,kn:0,ko:0,ksb:3,ksh:21,ku:3,kw:7,lag:18,lb:3,lg:3,ln:4,lo:0,lt:10,lv:6,mas:3,mg:4,mk:16,ml:3,mn:3,mo:9,mr:3,ms:0,mt:15,my:0,nah:3,naq:7,nb:3,nd:3,ne:3,nl:3,nn:3,no:3,nr:3,nso:4,ny:3,nyn:3,om:3,or:3,pa:3,pap:3,pl:13,ps:3,pt:3,rm:3,ro:9,rof:3,ru:11,rwk:3,sah:0,saq:3,se:7,seh:3,ses:0,sg:0,sh:11,shi:19,sk:12,sl:14,sma:7,smi:7,smj:7,smn:7,sms:7,sn:3,so:3,sq:3,sr:11,ss:3,ssy:3,st:3,sv:3,sw:3,syr:3,ta:3,te:3,teo:3,th:0,ti:4,tig:3,tk:3,tl:4,tn:3,to:0,tr:0,ts:3,tzm:22,uk:11,ur:3,ve:3,vi:0,vun:3,wa:4,wae:3,wo:0,xh:3,xog:3,yo:0,zh:0,zu:3},f={0:function(a){return"other"},1:function(a){return d(a%100,3,10)?"few":0===a?"zero":d(a%100,11,99)?"many":2==a?"two":1==a?"one":"other"},2:function(a){return 0!==a&&a%10==0?"many":2==a?"two":1==a?"one":"other"},3:function(a){return 1==a?"one":"other"},4:function(a){return d(a,0,1)?"one":"other"},5:function(a){return d(a,0,2)&&2!=a?"one":"other"},6:function(a){return 0===a?"zero":a%10==1&&a%100!=11?"one":"other"},7:function(a){return 2==a?"two":1==a?"one":"other"},8:function(a){return d(a,3,6)?"few":d(a,7,10)?"many":2==a?"two":1==a?"one":"other"},9:function(a){return 0===a||1!=a&&d(a%100,1,19)?"few":1==a?"one":"other"},10:function(a){return d(a%10,2,9)&&!d(a%100,11,19)?"few":a%10!=1||d(a%100,11,19)?"other":"one"},11:function(a){return d(a%10,2,4)&&!d(a%100,12,14)?"few":a%10==0||d(a%10,5,9)||d(a%100,11,14)?"many":a%10==1&&a%100!=11?"one":"other"},12:function(a){return d(a,2,4)?"few":1==a?"one":"other"},13:function(a){return d(a%10,2,4)&&!d(a%100,12,14)?"few":1!=a&&d(a%10,0,1)||d(a%10,5,9)||d(a%100,12,14)?"many":1==a?"one":"other"},14:function(a){return d(a%100,3,4)?"few":a%100==2?"two":a%100==1?"one":"other"},15:function(a){return 0===a||d(a%100,2,10)?"few":d(a%100,11,19)?"many":1==a?"one":"other"},16:function(a){return a%10==1&&11!=a?"one":"other"},17:function(a){return 3==a?"few":0===a?"zero":6==a?"many":2==a?"two":1==a?"one":"other"},18:function(a){return 0===a?"zero":d(a,0,2)&&0!==a&&2!=a?"one":"other"},19:function(a){return d(a,2,10)?"few":d(a,0,1)?"one":"other"},20:function(a){return!d(a%10,3,4)&&a%10!=9||d(a%100,10,19)||d(a%100,70,79)||d(a%100,90,99)?a%1e6==0&&0!==a?"many":a%10!=2||b(a%100,[12,72,92])?a%10!=1||b(a%100,[11,71,91])?"other":"one":"two":"few"},21:function(a){return 0===a?"zero":1==a?"one":"other"},22:function(a){return d(a,0,1)||d(a,11,99)?"one":"other"},23:function(a){return d(a%10,1,2)||a%20==0?"one":"other"},24:function(a){return d(a,3,10)||d(a,13,19)?"few":b(a,[2,12])?"two":b(a,[1,11])?"one":"other"}},g=e[a.replace(/-.*$/,"")];return g in f?f[g]:(c("plural form unknown for ["+a+"]"),function(){return"other"})}function n(a,b){var d=u[a];d||(t(),c("#"+a+" missing for ["+x+"]"));var e={};for(var f in d){var g=d[f];g=o(g,b,a,f),g=p(g,b),e[f]=g}return e}function o(a,b,c,d){var e=/\{\[\s*([a-zA-Z]+)\(([a-zA-Z]+)\)\s*\]\}/,f=e.exec(a);if(!f||!f.length)return a;var g,h=f[1],i=f[2];if(b&&i in b?g=b[i]:i in u&&(g=u[i]),h in y){a=(0,y[h])(a,g,c,d)}return a}function p(a,b){for(var d=/\{\{\s*([a-zA-Z\.]+)\s*\}\}/,e=d.exec(a);e;){if(!e||e.length<2)return a;var f=e[1],g="";if(f in b)g=b[f];else{if(!(f in u))return c("could not find argument {{"+f+"}}"),a;g=u[f][w]}a=a.substring(0,e.index)+g+a.substr(e.index+e[0].length),e=d.exec(a)}return a}function q(a){var b=g(a);if(b.id){var d=n(b.id,b.args);if(!d)return void c("#"+b.id+" missing for ["+x+"]");if(d[w]){if(0===r(a))a[w]=d[w];else{for(var e=a.childNodes,f=!1,h=0,i=e.length;h<i;h++)3===e[h].nodeType&&/\S/.test(e[h].textContent)&&(f?e[h].nodeValue="":(e[h].nodeValue=d[w],f=!0));f||c("unexpected error, could not translate element content")}delete d[w]}for(var j in d)a[j]=d[j]}}function r(a){if(a.children)return a.children.length;if(void 0!==a.childElementCount)return a.childElementCount;for(var b=0,c=0;c<a.childNodes.length;c++)b+=1===a.nodeType?1:0;return b}function s(a){a=a||document.documentElement;for(var b=f(a),c=b.length,d=0;d<c;d++)q(b[d]);q(a)}function t(){z="interactive",b("loading ["+navigator.language+"] resources, "+(A?"asynchronously.":"synchronously.")),document.documentElement.lang===navigator.language?k(navigator.language):k(navigator.language,s)}var u={},v="",w="textContent",x="",y={},z="loading",A=!0,B=1;return y.plural=function(a,b,c,d){var e=parseFloat(b);if(isNaN(e))return a;if(d!=w)return a;y._pluralRules||(y._pluralRules=m(x));var f="["+y._pluralRules(e)+"]";return 0===e&&c+"[zero]"in u?a=u[c+"[zero]"][d]:1==e&&c+"[one]"in u?a=u[c+"[one]"][d]:2==e&&c+"[two]"in u?a=u[c+"[two]"][d]:c+f in u?a=u[c+f][d]:c+"[other]"in u&&(a=u[c+"[other]"][d]),a},{start:function(){"complete"===document.readyState||"interactive"===document.readyState?window.setTimeout(t):document.addEventListener("DOMContentLoaded",t)},get:function(a,b,c){var d=n(a,b)||c;return d?"textContent"in d?d.textContent:"":"{{"+a+"}}"},get language(){return{get code(){return x},set code(a){k(a,s)},get direction(){return["ar","he","fa","ps","ur"].indexOf(x)>=0?"rtl":"ltr"}}},translate:s,get dictionary(){return JSON.parse(JSON.stringify(u))},get readyState(){return z},ready:function(a){a&&("complete"==z?window.setTimeout(a):window.addEventListener("localized",a))}}});