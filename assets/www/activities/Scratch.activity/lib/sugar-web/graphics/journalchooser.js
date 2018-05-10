/*! Sugarizer 2018-05-08 */
define(["picoModal","sugar-web/datastore","sugar-web/graphics/icon","mustache","sugar-web/env"],function(a,b,c,d,e){function f(a){var b=a;for(var c in p)b=b.replace("$"+c,p[c]);return b}function g(a,c,e,f){var g=[];a&&g.push(a),c&&g.push(c),e&&g.push(e),f&&g.push(f);for(var i=b.find(),k=[],l=0;l<i.length;l++){var p=i[l],r=!0;q&&(r=r&&p.metadata.keep);var s=document.getElementById("search-text").value;s&&s.length>0&&(r=r&&p.metadata.title&&p.metadata.title.indexOf(s)!=-1),r&&k.push(p)}var t=g.length,u=k;if(t>0){u=[];for(var l=0;l<k.length;l++){for(var p=k[l],r=!1,v=0;v<t;v++)r=r||j(p,g[v]);r&&u.push(p)}}for(var i={entries:u.sort(function(a,b){return parseInt(b.metadata.timestamp)-parseInt(a.metadata.timestamp)})},l=0;l<i.entries.length;l++){var p=i.entries[l],w=m[p.metadata.activity];p.imageUrl="../../"+w.directory+"/"+w.icon,p.index=l,p.ago=h(p.metadata.creation_time)}var x="\t\t\t{{#entries}}\t\t\t<div id='entry_{{index}}' style='height:60px'>\t\t\t\t<div id='eicon_{{index}}' class='toolbutton' style='background-image:url({{imageUrl}});background-size:40px 40px;width:40px;height:40px;display:inline-block;margin-left:20px;margin-top:5px;'></div>\t\t\t\t<div id='etext_{{index}}' style='color:black;display:inline-block;vertical-align:middle;margin-left:30px;height:60px;margin-top:10px;font-weight:bold;font-size:14px;'>{{metadata.title}}</div>\t\t\t\t<div id='edate_{{index}}' style='color:black;vertical-align:baseline;text-align:right;float:right;height:45px;padding-top:15px;margin-right:10px;clear:right;font-weight:normal;font-size:14px;'>{{ago}}</div>\t\t\t</div>\t\t\t{{/entries}}\t\t",y=d.render(x,i);document.getElementById("journal-container").innerHTML=y;for(var l=0;l<i.entries.length;l++){var p=document.getElementById("entry_"+l);p.addEventListener("click",function(a){var b=a.target.id;b=b.substr(b.indexOf("_")+1);var c=document.getElementById("entry_"+b);c.style.backgroundColor="#808080",o=i.entries[b],delete o.ago,delete o.index,delete o.imageUrl,window.setTimeout(function(){n.close(o)},200)})}document.getElementById("journal-empty").style.visibility=0!=i.entries.length?"hidden":"visible"}function h(a){for(var b={SecondsAgo:"Seconds ago",Ago:" ago",Minutes_one:"minute",Minutes_other:"minutes",Hours_one:"hour",Hours_other:"hours",Days_one:"day",Days_other:"days",Weeks_one:"week",Weeks_other:"weeks",Months_one:"month",Months_other:"months",Years_one:"year",Years_other:"years"},c=[{name:"Years",factor:30758400},{name:"Months",factor:2592e3},{name:"Weeks",factor:604800},{name:"Days",factor:86400},{name:"Hours",factor:3600},{name:"Minutes",factor:60}],d=1,e=0,f="",g=new Date(a).getTime(),h=((new Date).getTime()-g)/1e3,i=0;i<c.length;i++){var j=c[i].factor,k=Math.floor(h/j);if(k>0&&(e>0&&(f+=","),f+=" "+k+" "+(1==k?b[c[i].name+"_one"]:b[c[i].name+"_other"]),h-=k*j),""!=f&&(e+=1),e==d)break}return 0==e?b.SecondsAgo:f+b.Ago}function i(a,b,c){var d=a[b];if(!d)return!1;var e=c[0];return"%"==e?d.indexOf(c.substr(1))!=-1:">"==e?parseInt(d)>parseInt(c.substr(1)):"<"==e?parseInt(d)<parseInt(c.substr(1)):d==c}function j(a,b){for(var c=a.metadata,d=Object.keys(b),e=!0,f=0;f<d.length;f++){var g=d[f],h=b[g];if(h instanceof Array){for(var j=!1,k=0;k<h.length;k++)j=j||i(c,g,h[k]);e=e&&j}else e=e&&i(c,g,h)}return e}var k={},l=null,m=[];e.getEnvironment(function(a,b){l=b.user;for(var c=0;l.activities&&c<l.activities.length;c++){var d=l.activities[c];m[d.id]=d}});var n,o,p={titleJournal:"Local journal",titleClose:"Cancel",titleChoose:"Choose an object",holderSearch:"Search in Journal",noMatchingEntries:"No matching entries",SecondsAgo:"Seconds ago",Ago:" ago",Minutes_one:"minute",Minutes_other:"minutes",Hours_one:"hour",Hours_other:"hours",Days_one:"day",Days_other:"days",Weeks_one:"week",Weeks_other:"weeks",Months_one:"month",Months_other:"months",Years_one:"year",Years_other:"years"},q=!1;return k.show=function(b,d,e,h,i){o=null,n=a({content:f("\t\t\t\t<div id='pictotoolbar' class='toolbar' style='padding: 0'>\t\t\t\t\t<button class='toolbutton active' id='journal-button' title='$titleJournal' style='background-image: url(lib/sugar-web/graphics/icons/actions/activity-journal.svg)'></button>\t\t\t\t\t<button class='toolbutton pull-right' id='close-button' title='$titleClose' style='background-image: url(lib/sugar-web/graphics/icons/actions/dialog-cancel.svg)'></button>\t\t\t\t\t<div style='position: absolute; top: 20px; left: 60px;'>$titleChoose</div>\t\t\t\t</div>\t\t\t\t<div class='toolbar' style='border-top-style: solid; border-color: #c0c0c0; border-width: 1px'>\t\t\t\t\t<span class='icon-input' style='vertical-align:top;'>\t\t\t\t\t<input id='search-text' type='text' placeholder='$holderSearch' style='width: 200px; font-size: 10pt'/>\t\t\t\t\t<button id='cancel-search' class='cancel right'></button>\t\t\t\t\t</span>\t\t\t\t\t<button class='toolbutton' id='favorite-button' title='$titleFavorite' style='background-image: url(lib/sugar-web/graphics/icons/emblems/favorite.svg)'></button>\t\t\t\t</div>\t\t\t\t<div id='journal-empty' style='position:absolute;width:100%;top:50%;left:50%'>\t\t\t\t\t<div style='width:60px;height:60px;background-repeat: no-repeat;background-image: url(lib/sugar-web/graphics/icons/actions/activity-journal.svg)'></div>\t\t\t\t\t<div style='text-align:left!important;margin-left:-30px;color:#808080;text-align:center;font-size:14px;'>$noMatchingEntries</div>\t\t\t\t</div>\t\t\t\t<div id='journal-container' style='width: 100%; overflow:auto'></div>"),closeButton:!1,modalStyles:{backgroundColor:"white",height:"400px",width:"600px",maxWidth:"90%"}}).afterShow(function(a){var b=l.colorvalue;c.colorize(document.getElementById("journal-button"),b,function(){});var f=document.getElementById("pictotoolbar").parentNode.offsetHeight-110;document.getElementById("journal-container").style.height=f+"px";var j=document.getElementById("favorite-button");j.addEventListener("click",function(){q?j.style.backgroundImage="url(lib/sugar-web/graphics/icons/emblems/favorite.svg)":c.colorize(j,b,function(){}),q=!q,g(d,e,h,i)}),document.getElementById("search-text").addEventListener("keyup",function(){g(d,e,h,i)}),document.getElementById("cancel-search").addEventListener("click",function(){document.getElementById("search-text").value="",g(d,e,h,i)}),document.getElementById("close-button").addEventListener("click",function(){o=null,a.close()}),g(d,e,h,i)}).afterClose(function(a){a.destroy(),b&&b(o)}).show()},k});