/*! Sugarizer 2017-08-25 */
define(["sugar-web/graphics/palette","sugar-web/env","webL10n","sugar-web/datastore"],function(a,b,c,d){function e(){N=Speech(),d.localStorage.load(function(){f(function(a){O=a,N.init(O),I||document.captureEvents(Event.MOUSEMOVE);var b=30;setInterval(function(){t()},1e3/b),window.addEventListener("localized",function(){if(P)return c.language.code=O.language,void(P=!1);v();var a=window.setTimeout(function(){window.clearTimeout(a);var b=document.getElementById("speaklang").innerHTML,d=c.get("TypeSomething",{name:O.name});N.playVoice(b,d),r(d)},100)})})})}function f(a){var c={name:"",language:"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language};if(!b.isSugarizer())return void a(c);var e=d.localStorage.getValue("sugar_settings");a(e)}function g(){for(var a=document.getElementsByClassName("palette"),b=0;b<a.length;b++)a[b].style.visibility="hidden"}function h(a){var b,c=w.getBoundingClientRect(),d=c.width-c.width/4.5,e=c.height,f=c.width/2,g=d*a/5/(a-1);if(a%2==0){for(b=0;b<Math.floor(a/2);b++)D[b+1].x=f-g/2-(Math.floor(a/2)-b-1)*g,D[b+1].y=A+e/3;for(b=0;b<Math.floor(a/2);b++)D[b+Math.floor(a/2)+1].x=f+g/2+b*g,D[b+Math.floor(a/2)+1].y=A+e/3}if(a%2==1){for(D[1].x=f,D[1].y=A+e/3,b=0;b<Math.floor(a/2);b++)D[b+2].x=f-(Math.floor(a/2)-b)*g,D[b+2].y=A+e/3;for(b=0;b<Math.floor(a/2);b++)D[b+Math.floor(a/2)+2].x=f+(b+1)*g,D[b+Math.floor(a/2)+2].y=A+e/3}}function i(a,b){var c=a.getBoundingClientRect();J=(b.clientX-c.left)*a.width/c.width,K=(b.clientY-c.top)*a.height/c.height}function j(){var a,b=document.getElementById("eyetype").innerHTML;for(a=1;a<=G;a++){if(x.beginPath(),x.fillStyle="#000000",1==b)x.arc(D[a].x,D[a].y,1.1*B,0,2*Math.PI),x.fill();else{var c=1.1*B;x.fillRect(D[a].x-c,D[a].y-c,2*c,2*c)}x.closePath()}for(a=1;a<=G;a++){if(x.beginPath(),x.fillStyle="#FFFFFF",1==b)x.arc(D[a].x,D[a].y,B,0,2*Math.PI),x.fill();else{var c=B;x.fillRect(D[a].x-c,D[a].y-c,2*c,2*c)}x.closePath()}}function k(a){var b,c;J==-1&&K==-1?(b=0,c=0):(b=J-D[a].x,c=K-D[a].y);var d=1,e=1;b<0&&(d=-1),c<0&&(e=-1);var f=Math.atan(Math.abs(c/b));return isNaN(f)&&(f=0),{x:d*Math.min((B-C)*Math.cos(f),Math.abs(b)),y:e*Math.min((B-C)*Math.sin(f),Math.abs(c))}}function l(){var a;for(a=1;a<=G;a++)x.beginPath(),x.fillStyle="#000000",x.arc(D[a].x+k(a).x,D[a].y+k(a).y,C,0,2*Math.PI),x.fill(),x.closePath()}function m(){document.getElementById("chat").style.display="block"}function n(){document.getElementById("chat").style.display="none"}function o(){var a=document.getElementById("userText").value,b=document.getElementById("chatbox"),c=document.createElement("li");c.style.borderRadius="10px",c.style.backgroundColor="#999999",c.style.listStyleType="none",c.style.padding="15px",c.style.margin="-15px",c.appendChild(document.createTextNode(a)),b.appendChild(c)}function p(a){"0"==document.getElementById("speaking").innerHTML&&(clearInterval(H),L=0);var b=a/70+1;b=Math.min(4,b),b=Math.max(1,b),1==M?(L-=b,L<-40&&(M=2)):2==M&&(L+=b,L>40&&(M=1))}function q(){var a=document.getElementById("rate").innerHTML,b=.01;document.getElementById("speaking").innerHTML=1,H=setInterval(function(){p(a)},1e3*b)}function r(a){""!=a&&("2"==document.getElementById("mode").innerHTML?setTimeout(function(){q()},4e3):q())}function s(){x.beginPath(),x.moveTo(E.x,E.y),x.bezierCurveTo(E.x+100,E.y+L,F.x-100,F.y+L,F.x,F.y),x.lineWidth=10,x.stroke(),x.closePath(),x.beginPath(),x.moveTo(E.x,E.y),x.bezierCurveTo(E.x+100,E.y-L,F.x-100,F.y-L,F.x,F.y),x.lineWidth=10,x.stroke(),x.closePath()}function t(){u(),G=parseInt(document.getElementById("numeyes").innerHTML),h(G),j(),l(),s()}function u(){x.clearRect(0,0,w.width,w.height),x.beginPath(),x.rect(0,0,w.width,w.height),x.fillStyle="#999999",x.fill()}function v(){document.getElementById("gamemode1-button").title=c.get("TypeSomethingToHear"),document.getElementById("gamemode2-button").title=c.get("AskRobot"),document.getElementById("gamemode3-button").title=c.get("VoiceChat"),document.getElementById("language-button").title=c.get("Language"),document.getElementById("speech-button").title=c.get("Speech"),document.getElementById("face-button").title=c.get("Face"),document.getElementById("ratelabel").innerHTML=c.get("ratelabel"),document.getElementById("pitchlabel").innerHTML=c.get("pitchlabel"),document.getElementById("eyesnumber").innerHTML=c.get("eyesnumber"),document.getElementById("eyes").title=c.get("eyes"),document.getElementById("glasses").title=c.get("glasses"),document.getElementById("speakText").title=c.get("speak"),document.getElementById("lang-en").innerHTML=c.get("langen"),document.getElementById("lang-ca").innerHTML=c.get("langca"),document.getElementById("lang-cs").innerHTML=c.get("langcs"),document.getElementById("lang-de").innerHTML=c.get("langde"),document.getElementById("lang-el").innerHTML=c.get("langel"),document.getElementById("lang-eo").innerHTML=c.get("langeo"),document.getElementById("lang-es").innerHTML=c.get("langes"),document.getElementById("lang-fi").innerHTML=c.get("langfi"),document.getElementById("lang-fr").innerHTML=c.get("langfr"),document.getElementById("lang-hu").innerHTML=c.get("langhu"),document.getElementById("lang-it").innerHTML=c.get("langit"),document.getElementById("lang-kn").innerHTML=c.get("langkn"),document.getElementById("lang-la").innerHTML=c.get("langla"),document.getElementById("lang-lv").innerHTML=c.get("langlv"),document.getElementById("lang-nl").innerHTML=c.get("langnl"),document.getElementById("lang-pl").innerHTML=c.get("langpl"),document.getElementById("lang-pt").innerHTML=c.get("langpt"),document.getElementById("lang-ro").innerHTML=c.get("langro"),document.getElementById("lang-sk").innerHTML=c.get("langsk"),document.getElementById("lang-sv").innerHTML=c.get("langsv"),document.getElementById("lang-tr").innerHTML=c.get("langtr"),document.getElementById("lang-zh").innerHTML=c.get("langzh")}var w=document.getElementById("canvas"),x=w.getContext("2d");w.width=window.innerWidth,w.height=window.innerHeight-55;var y=w.getBoundingClientRect().width,z=w.getBoundingClientRect().height,A=45,B=Math.min(y,z)/6.5,C=Math.min(y,z)/28,D=[{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0},{x:0,y:0}],E={x:1.35*y/4,y:A+2*z/3},F={x:2.65*y/4,y:A+2*z/3},G=2;$(window).resize(function(){w.width=window.innerWidth,w.height=window.innerHeight-55,y=w.getBoundingClientRect().width,z=w.getBoundingClientRect().height,E={x:1.35*y/4,y:A+2*z/3},F={x:2.65*y/4,y:A+2*z/3},B=Math.min(y,z)/6.5,C=Math.min(y,z)/28,h()}),w.addEventListener("mousemove",function(a){i(w,a)},!1);var H,I=!!document.all,J=-1,K=-1,L=0,M=1,N=null,O={},P=!0;document.getElementById("userArea").onmouseup=function(a){g()},document.getElementById("speakText").onmousedown=function(a){var b=document.getElementById("speaklang").innerHTML,c=document.getElementById("userText").value;N.playVoice(b,c)},document.getElementById("speakText").onmouseup=function(a){var b=document.getElementById("userText").value;r(b),"3"==document.getElementById("mode").innerHTML&&o()},document.getElementById("userText").onkeypress=function(a){var b=a.keyCode||a.which;if(13==b){var c=document.getElementById("speaklang").innerHTML,d=document.getElementById("userText").value;N.playVoice(c,d),r(d),"3"==document.getElementById("mode").innerHTML&&o()}},document.getElementById("userText").oninput=function(a){var b=this.getBoundingClientRect(),c={clientX:b.left+20*document.getElementById("userText").selectionStart,clientY:b.top};i(w,c),t()},document.getElementById("userText").addEventListener("mousemove",function(a){i(w,a),t()},!1),document.getElementById("gamemode1-button").onmouseup=function(a){document.getElementById("mode").innerHTML="1",document.getElementById("canvas").style.display="block",n()},document.getElementById("gamemode2-button").onmouseup=function(a){document.getElementById("mode").innerHTML="2",document.getElementById("canvas").style.display="block",n()},document.getElementById("gamemode3-button").onmouseup=function(a){document.getElementById("mode").innerHTML="3",document.getElementById("canvas").style.display="none",m()},e()});