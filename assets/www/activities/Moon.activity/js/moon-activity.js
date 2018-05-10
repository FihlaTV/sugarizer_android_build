/*! Sugarizer 2018-05-08 */
define(["activity/data-model","activity/draw","webL10n","sugar-web/env","sugar-web/datastore","moment-with-locales.min"],function(a,b,c,d,e,f){"use strict";function g(){m(),j()}function h(a){A=a.showGrid,A?(A=!0,r.classList.add("active")):(A=!1,r.classList.remove("active")),B=a.showSouth,B?(B=!0,s.classList.add("active")):(B=!1,s.classList.remove("active"))}function i(){return{showGrid:A,showSouth:B}}function j(){var a=document.querySelector("#main-toolbar").clientHeight;document.querySelector("#panel-container").style.height=window.innerHeight-a+"px";var b=document.querySelector("#panel-right").clientHeight,c=document.querySelector("#panel-right").clientWidth,d=.05;x=(1-d)*Math.min(c,b),y=.5*x,t.width=x,t.height=x,t.style.top=.5*(b-t.height)+"px",t.style.left=.5*(c-t.width)+"px"}function k(){clearTimeout(z),l(),b.setImageSize(x),b.moon(),B?(u.save(),u.rotate(Math.PI),u.drawImage(t,-x,-x),u.restore(),A&&b.grid(v("SNWE"))):A&&b.grid(v("NSEW")),z=setTimeout(k,5e3)}function l(){a.update_moon_calculations();var b={},c=["moonInfo","phase","julian","age","lunation","visibility","seleno","full","new","lunar","solar"];b[v(c[0])]=[q()],b[v(c[1])]=[v(a.moon_phase_name())],b[v(c[2])]=[a.julian_date.toFixed(2),v("astro")],b[v(c[3])]=[a.days_old,v("days")+",",a.hours_old,v("hours")+",",a.minutes_old,v("minutes")],b[v(c[4])]=[(100*a.phase_of_moon).toFixed(4)+"%",v("thru"),a.lunation],b[v(c[5])]=[(100*a.percent_of_full_moon).toFixed(4)+"%",v("estimated")],b[v(c[6])]=[a.selenographic_deg.toFixed(2)+"°",v(a.west_or_east),"("+v(a.rise_or_set)+")"],b[v(c[7])]=[q(a.next_full_moon_date),v("in"),a.days_until_full_moon.toFixed(),v("days")],b[v(c[8])]=[q(a.next_new_moon_date),v("in"),a.days_until_new_moon.toFixed(),v("days")],b[v(c[9])]=[q(a.next_lunar_eclipse_date),v("in"),a.days_until_lunar_eclipse.toFixed(),v("days")],b[v(c[10])]=[q(a.next_solar_eclipse_date),v("in"),a.days_until_solar_eclipse.toFixed(),v("days")];var d=[];for(var e in b){var f="<p>"+e+":<br>"+b[e].join(" ")+"</p>";d.push(f)}d=d.join(""),document.querySelector("#panel-left").innerHTML=d,document.getElementById("toggle-grid-button").title=v("ToggleGrid"),document.getElementById("toggle-hemisphere-button").title=v("ToggleHemisphere"),document.getElementById("save-image-button").title=v("SaveImage")}function m(){window.addEventListener("resize",function(){j(),k()}),r.addEventListener("click",n),s.addEventListener("click",o),document.querySelector("#save-image-button").addEventListener("click",p)}function n(){A=!A,A?r.classList.add("active"):r.classList.remove("active"),k()}function o(){B=!B,B?s.classList.add("active"):s.classList.remove("active"),k()}function p(){var a="image/jpeg",b=t.toDataURL(a,1),c={mimetype:a,title:"Image Moon",activity:"org.olpcfrance.MediaViewerActivity",timestamp:(new Date).getTime(),creation_time:(new Date).getTime(),file_size:0};e.create(c,function(){console.log("export done.")},b)}function q(a){a=a?new Date(1e3*a):new Date;var b=f(a);return b.format("LLLL").replace(b.format("LT"),b.format("LTS"))}var r=document.querySelector("#toggle-grid-button"),s=document.querySelector("#toggle-hemisphere-button"),t=document.querySelector("canvas"),u=t.getContext("2d"),v=c.get,w=!0;c.ready(function(){w&&(w=!1,d.getEnvironment(function(a,b){var d="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,e=b.user?b.user.language:d;c.language.code=e,f.locale(e);var g=setTimeout(function(){clearTimeout(g),k()},50)}))});var x,y,z,A,B;return{setup:g,initPrefs:h,getPrefs:i,updateInfo:l}});