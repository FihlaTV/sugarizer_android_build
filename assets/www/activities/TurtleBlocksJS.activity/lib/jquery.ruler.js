/*! Sugarizer 2017-08-25 */
!function(a){a.fn.ruler=function(b){var c={vRuleSize:18,hRuleSize:18,showCrosshair:!0,showMousePos:!0},d=a.extend({},c,b),e='<div class="ruler hRule"></div>',f='<div class="ruler vRule"></div>',g='<div class="ruler corner"></div>',h='<div class="vMouse"></div>',i='<div class="hMouse"></div>',j='<div class="mousePosBox">x: 50%, y: 50%</div>';return Modernizr.touch||(d.showCrosshair&&a("body").append(h,i),d.showMousePos&&a("body").append(j),(d.showCrosshair||d.showMousePos)&&a(window).mousemove(function(b){d.showCrosshair&&(a(".vMouse").css("top",b.pageY-a(document).scrollTop()+1),a(".hMouse").css("left",b.pageX+1)),d.showMousePos&&a(".mousePosBox").html("x:"+(b.pageX-d.vRuleSize)+", y:"+(b.pageY-d.hRuleSize)).css({top:b.pageY-a(document).scrollTop()+16,left:b.pageX+12})})),a(window).resize(function(b){var c=a(".hRule"),e=a(".vRule");c.empty(),e.empty().height(0).outerHeight(e.parent().outerHeight());for(var f=d.vRuleSize,g="";f<=c.width();)(f-d.vRuleSize)%50==0?(g="<div class='tickLabel'>"+(f-d.vRuleSize)+"</div>",a(g).css("left",f+"px").appendTo(c)):(f-d.vRuleSize)%10==0?(g="<div class='tickMajor'></div>",a(g).css("left",f+"px").appendTo(c)):(f-d.vRuleSize)%5==0&&(g="<div class='tickMinor'></div>",a(g).css("left",f+"px").appendTo(c)),f+=5;for(f=d.hRuleSize,g="";f<=e.height();)(f-d.hRuleSize)%50==0?(g="<div class='tickLabel'><span>"+(f-d.hRuleSize)+"</span></div>",a(g).css("top",f+"px").appendTo(e)):(f-d.hRuleSize)%10==0?(g="<div class='tickMajor'></div>",a(g).css("top",f+"px").appendTo(e)):(f-d.hRuleSize)%5==0&&(g="<div class='tickMinor'></div>",a(g).css("top",f+"px").appendTo(e)),f+=5}),this.each(function(){var b=a(this);if(b.css("padding-top",d.hRuleSize+1+"px"),d.hRuleSize>0&&a(e).height(d.hRuleSize).prependTo(b),d.vRuleSize>0){var c=b.outerWidth();b.css("padding-left",d.vRuleSize+1+"px").outerWidth(c),a(f).width(d.vRuleSize).height(b.outerHeight()).prependTo(b)}d.vRuleSize>0&&d.hRuleSize>0&&a(g).css({width:d.vRuleSize,height:d.hRuleSize}).prependTo(b);for(var h=b.children(".hRule"),i=b.children(".vRule"),j=d.vRuleSize,k="";j<=h.width();)(j-d.vRuleSize)%50==0?(k="<div class='tickLabel'>"+(j-d.vRuleSize)+"</div>",a(k).css("left",j+"px").appendTo(h)):(j-d.vRuleSize)%10==0?(k="<div class='tickMajor'></div>",a(k).css("left",j+"px").appendTo(h)):(j-d.vRuleSize)%5==0&&(k="<div class='tickMinor'></div>",a(k).css("left",j+"px").appendTo(h)),j+=5;for(j=d.hRuleSize,k="";j<=i.height();)(j-d.hRuleSize)%50==0?(k="<div class='tickLabel'><span>"+(j-d.hRuleSize)+"</span></div>",a(k).css("top",j+"px").appendTo(i)):(j-d.hRuleSize)%10==0?(k="<div class='tickMajor'></div>",a(k).css("top",j+"px").appendTo(i)):(j-d.hRuleSize)%5==0&&(k="<div class='tickMinor'></div>",a(k).css("top",j+"px").appendTo(i)),j+=5})}}(jQuery);