/*! Sugarizer 2017-09-04 */
!function(a,b,c){"use strict";var d={version:"2.1",tipLocation:"bottom",nubPosition:"auto",scroll:!0,scrollSpeed:300,timer:0,autoStart:!1,startTimerOnClick:!0,startOffset:0,nextButton:!0,tipAnimation:"fade",pauseAfter:[],tipAnimationFadeSpeed:300,cookieMonster:!1,cookieName:"joyride",cookieDomain:!1,cookiePath:!1,localStorage:!1,localStorageKey:"joyride",tipContainer:"body",modal:!1,expose:!1,postExposeCallback:a.noop,preRideCallback:a.noop,postRideCallback:a.noop,preStepCallback:a.noop,postStepCallback:a.noop,template:{link:'<a href="#close" class="joyride-close-tip">X</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper" role="dialog"></div>',button:'<a href="#" class="joyride-next-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',exposeCover:'<div class="joyride-expose-cover"></div>'}},e=e||!1,f={},g={init:function(c){return this.each(function(){a.isEmptyObject(f)?(f=a.extend(!0,d,c),f.document=b.document,f.$document=a(f.document),f.$window=a(b),f.$content_el=a(this),f.$body=a(f.tipContainer),f.body_offset=a(f.tipContainer).position(),f.$tip_content=a("> li",f.$content_el),f.paused=!1,f.attempts=0,f.tipLocationPatterns={top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},g.jquery_check(),a.isFunction(a.cookie)||(f.cookieMonster=!1),f.cookieMonster&&a.cookie(f.cookieName)||f.localStorage&&g.support_localstorage()&&localStorage.getItem(f.localStorageKey)||(f.$tip_content.each(function(b){g.create({$li:a(this),index:b})}),f.autoStart&&(!f.startTimerOnClick&&f.timer>0?(g.show("init"),g.startTimer()):g.show("init"))),f.$document.on("click.joyride",".joyride-next-tip, .joyride-modal-bg",function(a){a.preventDefault(),f.$li.next().length<1?g.end():f.timer>0?(clearTimeout(f.automate),g.hide(),g.show(),g.startTimer()):(g.hide(),g.show())}),f.$document.on("click.joyride",".joyride-close-tip",function(a){a.preventDefault(),g.end(!0)}),f.$window.bind("resize.joyride",function(b){if(f.$li){if(f.exposed&&f.exposed.length>0){var c=a(f.exposed);c.each(function(){var b=a(this);g.un_expose(b),g.expose(b)})}g.is_phone()?g.pos_phone():g.pos_default()}})):g.restart()})},resume:function(){g.set_li(),g.show()},nextTip:function(){f.$li.next().length<1?g.end():f.timer>0?(clearTimeout(f.automate),g.hide(),g.show(),g.startTimer()):(g.hide(),g.show())},tip_template:function(b){var c,d,e;return b.tip_class=b.tip_class||"",c=a(f.template.tip).addClass(b.tip_class),d=a.trim(a(b.li).html())+g.button_text(b.button_text)+f.template.link+g.timer_instance(b.index),e=a(f.template.wrapper),b.li.attr("data-aria-labelledby")&&e.attr("aria-labelledby",b.li.attr("data-aria-labelledby")),b.li.attr("data-aria-describedby")&&e.attr("aria-describedby",b.li.attr("data-aria-describedby")),c.append(e),c.first().attr("data-index",b.index),a(".joyride-content-wrapper",c).append(d),c[0]},timer_instance:function(b){var c;return c=0===b&&f.startTimerOnClick&&f.timer>0||0===f.timer?"":g.outerHTML(a(f.template.timer)[0])},button_text:function(b){return f.nextButton?(b=a.trim(b)||"Next",b=g.outerHTML(a(f.template.button).append(b)[0])):b="",b},create:function(b){var c=b.$li.attr("data-button")||b.$li.attr("data-text"),d=b.$li.attr("class"),e=a(g.tip_template({tip_class:d,index:b.index,button_text:c,li:b.$li}));a(f.tipContainer).append(e)},show:function(b){var d,e,h={},i=[],j=0,k=null;if(f.$li===c||a.inArray(f.$li.index(),f.pauseAfter)===-1)if(f.paused?f.paused=!1:g.set_li(b),f.attempts=0,f.$li.length&&f.$target.length>0){for(b&&(f.preRideCallback(f.$li.index(),f.$next_tip),f.modal&&g.show_modal()),f.preStepCallback(f.$li.index(),f.$next_tip),i=(f.$li.data("options")||":").split(";"),j=i.length,d=j-1;d>=0;d--)e=i[d].split(":"),2===e.length&&(h[a.trim(e[0])]=a.trim(e[1]));f.tipSettings=a.extend({},f,h),f.tipSettings.tipLocationPattern=f.tipLocationPatterns[f.tipSettings.tipLocation],f.modal&&f.expose&&g.expose(),!/body/i.test(f.$target.selector)&&f.scroll&&g.scroll_to(),g.is_phone()?g.pos_phone(!0):g.pos_default(!0),k=a(".joyride-timer-indicator",f.$next_tip),/pop/i.test(f.tipAnimation)?(k.outerWidth(0),f.timer>0?(f.$next_tip.show(),k.animate({width:a(".joyride-timer-indicator-wrap",f.$next_tip).outerWidth()},f.timer)):f.$next_tip.show()):/fade/i.test(f.tipAnimation)&&(k.outerWidth(0),f.timer>0?(f.$next_tip.fadeIn(f.tipAnimationFadeSpeed),f.$next_tip.show(),k.animate({width:a(".joyride-timer-indicator-wrap",f.$next_tip).outerWidth()},f.timer)):f.$next_tip.fadeIn(f.tipAnimationFadeSpeed)),f.$current_tip=f.$next_tip,a(".joyride-next-tip",f.$current_tip).focus(),g.tabbable(f.$current_tip)}else f.$li&&f.$target.length<1?g.show():g.end();else f.paused=!0},is_phone:function(){return e?e.mq("only screen and (max-width: 767px)"):f.$window.width()<767},support_localstorage:function(){return e?e.localstorage:!!b.localStorage},hide:function(){f.modal&&f.expose&&g.un_expose(),f.modal||a(".joyride-modal-bg").hide(),f.$current_tip.hide(),f.postStepCallback(f.$li.index(),f.$current_tip)},set_li:function(a){a?(f.$li=f.$tip_content.eq(f.startOffset),g.set_next_tip(),f.$current_tip=f.$next_tip):(f.$li=f.$li.next(),g.set_next_tip()),g.set_target()},set_next_tip:function(){f.$next_tip=a(".joyride-tip-guide[data-index="+f.$li.index()+"]")},set_target:function(){var b=f.$li.attr("data-class"),c=f.$li.attr("data-id"),d=function(){return c?a(f.document.getElementById(c)):b?a("."+b).filter(":visible").first():a("body")};f.$target=d()},scroll_to:function(){var b,c;b=f.$window.height()/2,c=Math.ceil(f.$target.offset().top-b+f.$next_tip.outerHeight()),a("html, body").stop().animate({scrollTop:c},f.scrollSpeed)},paused:function(){return a.inArray(f.$li.index()+1,f.pauseAfter)===-1},destroy:function(){a.isEmptyObject(f)||f.$document.off(".joyride"),a(b).off(".joyride"),a(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),a(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(f.automate),f={}},restart:function(){f.autoStart?(g.hide(),f.$li=c,g.show("init")):(!f.startTimerOnClick&&f.timer>0?(g.show("init"),g.startTimer()):g.show("init"),f.autoStart=!0)},pos_default:function(b){var c=(Math.ceil(f.$window.height()/2),f.$next_tip.offset(),a(".joyride-nub",f.$next_tip)),d=Math.ceil(c.outerWidth()/2),e=Math.ceil(c.outerHeight()/2),h=b||!1;if(h&&(f.$next_tip.css("visibility","hidden"),f.$next_tip.show()),/body/i.test(f.$target.selector))f.$li.length&&g.pos_modal(c);else{var i=f.tipSettings.tipAdjustmentY?parseInt(f.tipSettings.tipAdjustmentY):0,j=f.tipSettings.tipAdjustmentX?parseInt(f.tipSettings.tipAdjustmentX):0;g.bottom()?(f.$next_tip.css({top:f.$target.offset().top+e+f.$target.outerHeight()+i,left:f.$target.offset().left+j}),/right/i.test(f.tipSettings.nubPosition)&&f.$next_tip.css("left",f.$target.offset().left-f.$next_tip.outerWidth()+f.$target.outerWidth()),g.nub_position(c,f.tipSettings.nubPosition,"top")):g.top()?(f.$next_tip.css({top:f.$target.offset().top-f.$next_tip.outerHeight()-e+i,left:f.$target.offset().left+j}),g.nub_position(c,f.tipSettings.nubPosition,"bottom")):g.right()?(f.$next_tip.css({top:f.$target.offset().top+i,left:f.$target.outerWidth()+f.$target.offset().left+d+j}),g.nub_position(c,f.tipSettings.nubPosition,"left")):g.left()&&(f.$next_tip.css({top:f.$target.offset().top+i,left:f.$target.offset().left-f.$next_tip.outerWidth()-d+j}),g.nub_position(c,f.tipSettings.nubPosition,"right")),!g.visible(g.corners(f.$next_tip))&&f.attempts<f.tipSettings.tipLocationPattern.length&&(c.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),f.tipSettings.tipLocation=f.tipSettings.tipLocationPattern[f.attempts],f.attempts++,g.pos_default(!0))}h&&(f.$next_tip.hide(),f.$next_tip.css("visibility","visible"))},pos_phone:function(b){var c=f.$next_tip.outerHeight(),d=(f.$next_tip.offset(),f.$target.outerHeight()),e=a(".joyride-nub",f.$next_tip),h=Math.ceil(e.outerHeight()/2),i=b||!1;e.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),i&&(f.$next_tip.css("visibility","hidden"),f.$next_tip.show()),/body/i.test(f.$target.selector)?f.$li.length&&g.pos_modal(e):g.top()?(f.$next_tip.offset({top:f.$target.offset().top-c-h}),e.addClass("bottom")):(f.$next_tip.offset({top:f.$target.offset().top+d+h}),e.addClass("top")),i&&(f.$next_tip.hide(),f.$next_tip.css("visibility","visible"))},pos_modal:function(a){g.center(),a.hide(),g.show_modal()},show_modal:function(){a(".joyride-modal-bg").length<1&&a("body").append(f.template.modal).show(),/pop/i.test(f.tipAnimation)?a(".joyride-modal-bg").show():a(".joyride-modal-bg").fadeIn(f.tipAnimationFadeSpeed)},expose:function(){var c,d,e,h,i="expose-"+Math.floor(1e4*Math.random());if(arguments.length>0&&arguments[0]instanceof a)e=arguments[0];else{if(!f.$target||/body/i.test(f.$target.selector))return!1;e=f.$target}return e.length<1?(b.console&&console.error("element not valid",e),!1):(c=a(f.template.expose),f.$body.append(c),c.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),d=a(f.template.exposeCover),h={zIndex:e.css("z-index"),position:e.css("position")},e.css("z-index",1*c.css("z-index")+1),"static"==h.position&&e.css("position","relative"),e.data("expose-css",h),d.css({top:e.offset().top,left:e.offset().left,width:e.outerWidth(!0),height:e.outerHeight(!0)}),f.$body.append(d),c.addClass(i),d.addClass(i),f.tipSettings.exposeClass&&(c.addClass(f.tipSettings.exposeClass),d.addClass(f.tipSettings.exposeClass)),e.data("expose",i),f.postExposeCallback(f.$li.index(),f.$next_tip,e),void g.add_exposed(e))},un_expose:function(){var c,d,e,h,i=!1;if(arguments.length>0&&arguments[0]instanceof a)d=arguments[0];else{if(!f.$target||/body/i.test(f.$target.selector))return!1;d=f.$target}return d.length<1?(b.console&&console.error("element not valid",d),!1):(c=d.data("expose"),e=a("."+c),arguments.length>1&&(i=arguments[1]),i===!0?a(".joyride-expose-wrapper,.joyride-expose-cover").remove():e.remove(),h=d.data("expose-css"),"auto"==h.zIndex?d.css("z-index",""):d.css("z-index",h.zIndex),h.position!=d.css("position")&&("static"==h.position?d.css("position",""):d.css("position",h.position)),d.removeData("expose"),d.removeData("expose-z-index"),void g.remove_exposed(d))},add_exposed:function(b){f.exposed=f.exposed||[],b instanceof a?f.exposed.push(b[0]):"string"==typeof b&&f.exposed.push(b)},remove_exposed:function(b){var c;b instanceof a?c=b[0]:"string"==typeof b&&(c=b),f.exposed=f.exposed||[];for(var d=0;d<f.exposed.length;d++)if(f.exposed[d]==c)return void f.exposed.splice(d,1)},center:function(){var a=f.$window;return f.$next_tip.css({top:(a.height()-f.$next_tip.outerHeight())/2+a.scrollTop(),left:(a.width()-f.$next_tip.outerWidth())/2+a.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(f.tipSettings.tipLocation)},top:function(){return/top/i.test(f.tipSettings.tipLocation)},right:function(){return/right/i.test(f.tipSettings.tipLocation)},left:function(){return/left/i.test(f.tipSettings.tipLocation)},corners:function(a){var b=f.$window,c=b.height()/2,d=Math.ceil(f.$target.offset().top-c+f.$next_tip.outerHeight()),e=b.width()+b.scrollLeft(),g=b.height()+d,h=b.height()+b.scrollTop(),i=b.scrollTop();return d<i&&(i=d<0?0:d),g>h&&(h=g),[a.offset().top<i,e<a.offset().left+a.outerWidth(),h<a.offset().top+a.outerHeight(),b.scrollLeft()>a.offset().left]},visible:function(a){for(var b=a.length;b--;)if(a[b])return!1;return!0},nub_position:function(a,b,c){"auto"===b?a.addClass(c):a.addClass(b)},startTimer:function(){f.$li.length?f.automate=setTimeout(function(){g.hide(),g.show(),g.startTimer()},f.timer):clearTimeout(f.automate)},end:function(b){b=b||!1,b&&f.$window.unbind("resize.joyride"),f.cookieMonster&&a.cookie(f.cookieName,"ridden",{expires:365,domain:f.cookieDomain,path:f.cookiePath}),f.localStorage&&localStorage.setItem(f.localStorageKey,!0),f.timer>0&&clearTimeout(f.automate),f.modal&&f.expose&&g.un_expose(),f.$current_tip&&f.$current_tip.hide(),f.$li&&(f.postStepCallback(f.$li.index(),f.$current_tip,b),f.postRideCallback(f.$li.index(),f.$current_tip,b)),a(".joyride-modal-bg").hide()},jquery_check:function(){return!!a.isFunction(a.fn.on)||(a.fn.on=function(a,b,c){return this.delegate(b,a,c)},a.fn.off=function(a,b,c){return this.undelegate(b,a,c)},!1)},outerHTML:function(a){return a.outerHTML||(new XMLSerializer).serializeToString(a)},version:function(){return f.version},tabbable:function(b){a(b).on("keydown",function(c){if(!c.isDefaultPrevented()&&c.keyCode&&27===c.keyCode)return c.preventDefault(),void g.end(!0);if(9===c.keyCode){var d=a(b).find(":tabbable"),e=d.filter(":first"),f=d.filter(":last");c.target!==f[0]||c.shiftKey?c.target===e[0]&&c.shiftKey&&(f.focus(1),c.preventDefault()):(e.focus(1),c.preventDefault())}})}};a.fn.joyride=function(b){return g[b]?g[b].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof b&&b?void a.error("Method "+b+" does not exist on jQuery.joyride"):g.init.apply(this,arguments)}}(jQuery,this);