/*! Sugarizer 2017-09-04 */
var RollUpDiv=function(a){for(var b={},c=(a.checkboxCB,a.category),d=0;d<10;d++)c=c.replace(" ","ZZZ");b.head=document.createElement("div"),b.head.className="roll_up_div",b.head.id=c;var e=document.createElement("table");e.style.width="100%";var f,g=e.insertRow(-1);f=g.insertCell(-1),f.className="roll_up_icon_cell",f=g.insertCell(-1),f.align="center",b.label=document.createElement("div"),b.label.className="roll_up_label",b.label.innerHTML=a.roll_up_name,f.appendChild(b.label),f=g.insertCell(-1),f.className="roll_up_icon_cell";var h=new Image;return h.id=b.head.id+"_icon",h.className="roll_up_icon",null!=a.roll_up_icon_src&&(h.src=a.roll_up_icon_src,f.appendChild(h)),b.head.appendChild(e),$("#"+a.parent_id).append(b.head),b.rollup=document.createElement("div"),b.rollup.id=b.head.id+"_rollup",b.head.appendChild(b.rollup),$("#"+h.id).click(function(a){$(a.target).toggleClass("up"),$("#"+a.target.id.split("_")[0]+"_rollup").animate({height:"toggle"},300,function(){})}),b.set_name=function(a){b.label.innerHTML=a},b};