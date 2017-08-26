/*! Sugarizer 2017-08-25 */
!function(a,b,c){"undefined"!=typeof module?module.exports=c(a,b):"function"==typeof define&&"object"==typeof define.amd?define(c):b[a]=c(a,b)}("humane",this,function(a,b){var c=window,d=document,e={on:function(a,b,d){"addEventListener"in c?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)},off:function(a,b,d){"removeEventListener"in c?a.removeEventListener(b,d,!1):a.detachEvent("on"+b,d)},bind:function(a,b){return function(){a.apply(b,arguments)}},isArray:Array.isArray||function(a){return"[object Array]"===Object.prototype.toString.call(a)},config:function(a,b){return null!=a?a:b},transSupport:!1,useFilter:/msie [678]/i.test(navigator.userAgent),_checkTransition:function(){var a=d.createElement("div"),b={webkit:"webkit",Moz:"",O:"o",ms:"MS"};for(var c in b)c+"Transition"in a.style&&(this.vendorPrefix=b[c],this.transSupport=!0)}};e._checkTransition();var f=function(a){a||(a={}),this.queue=[],this.baseCls=a.baseCls||"humane",this.addnCls=a.addnCls||"",this.timeout="timeout"in a?a.timeout:2500,this.waitForMove=a.waitForMove||!1,this.clickToClose=a.clickToClose||!1,this.timeoutAfterMove=a.timeoutAfterMove||!1,this.container=a.container;try{this._setupEl()}catch(a){e.on(c,"load",e.bind(this._setupEl,this))}};return f.prototype={constructor:f,_setupEl:function(){var a=d.createElement("div");if(a.style.display="none",!this.container){if(!d.body)throw"document.body is null";this.container=d.body}this.container.appendChild(a),this.el=a,this.removeEvent=e.bind(function(){var a=e.config(this.currentMsg.timeoutAfterMove,this.timeoutAfterMove);a?setTimeout(e.bind(this.remove,this),a):this.remove()},this),this.transEvent=e.bind(this._afterAnimation,this),this._run()},_afterTimeout:function(){e.config(this.currentMsg.waitForMove,this.waitForMove)?this.removeEventsSet||(e.on(d.body,"mousemove",this.removeEvent),e.on(d.body,"click",this.removeEvent),e.on(d.body,"keypress",this.removeEvent),e.on(d.body,"touchstart",this.removeEvent),this.removeEventsSet=!0):this.remove()},_run:function(){if(!this._animating&&this.queue.length&&this.el){this._animating=!0,this.currentTimer&&(clearTimeout(this.currentTimer),this.currentTimer=null);var a=this.queue.shift(),b=e.config(a.clickToClose,this.clickToClose);b&&(e.on(this.el,"click",this.removeEvent),e.on(this.el,"touchstart",this.removeEvent));var c=e.config(a.timeout,this.timeout);c>0&&(this.currentTimer=setTimeout(e.bind(this._afterTimeout,this),c)),e.isArray(a.html)&&(a.html="<ul><li>"+a.html.join("<li>")+"</ul>"),this.el.innerHTML=a.html,this.currentMsg=a,this.el.className=this.baseCls,e.transSupport?(this.el.style.display="block",setTimeout(e.bind(this._showMsg,this),50)):this._showMsg()}},_setOpacity:function(a){if(e.useFilter)try{this.el.filters.item("DXImageTransform.Microsoft.Alpha").Opacity=100*a}catch(a){}else this.el.style.opacity=String(a)},_showMsg:function(){var a=e.config(this.currentMsg.addnCls,this.addnCls);if(e.transSupport)this.el.className=this.baseCls+" "+a+" "+this.baseCls+"-animate";else{var b=0;this.el.className=this.baseCls+" "+a+" "+this.baseCls+"-js-animate",this._setOpacity(0),this.el.style.display="block";var c=this,d=setInterval(function(){b<1?(b+=.1,b>1&&(b=1),c._setOpacity(b)):clearInterval(d)},30)}},_hideMsg:function(){var a=e.config(this.currentMsg.addnCls,this.addnCls);if(e.transSupport)this.el.className=this.baseCls+" "+a,e.on(this.el,e.vendorPrefix?e.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent);else var b=1,c=this,d=setInterval(function(){b>0?(b-=.1,b<0&&(b=0),c._setOpacity(b)):(c.el.className=c.baseCls+" "+a,clearInterval(d),c._afterAnimation())},30)},_afterAnimation:function(){e.transSupport&&e.off(this.el,e.vendorPrefix?e.vendorPrefix+"TransitionEnd":"transitionend",this.transEvent),this.currentMsg.cb&&this.currentMsg.cb(),this.el.style.display="none",this._animating=!1,this._run()},remove:function(a){var b="function"==typeof a?a:null;e.off(d.body,"mousemove",this.removeEvent),e.off(d.body,"click",this.removeEvent),e.off(d.body,"keypress",this.removeEvent),e.off(d.body,"touchstart",this.removeEvent),e.off(this.el,"click",this.removeEvent),e.off(this.el,"touchstart",this.removeEvent),this.removeEventsSet=!1,b&&this.currentMsg&&(this.currentMsg.cb=b),this._animating?this._hideMsg():b&&b()},log:function(a,b,c,d){var e={};if(d)for(var f in d)e[f]=d[f];if("function"==typeof b)c=b;else if(b)for(var f in b)e[f]=b[f];return e.html=a,c&&(e.cb=c),this.queue.push(e),this._run(),this},spawn:function(a){var b=this;return function(c,d,e){return b.log.call(b,c,d,e,a),b}},create:function(a){return new f(a)}},new f});