/*! Sugarizer 2018-07-01 */
define(["activity/ol","print"],function(a,b){return{correct_style:new a.style.Style({fill:new a.style.Fill({color:"rgba(255,255,0,0.25)"}),stroke:new a.style.Stroke({color:"gold",width:2})}),point_correct_style:new a.style.Style({image:new a.style.Circle({radius:10,stroke:new a.style.Stroke({color:"rgba(255,0,0,1)",width:5}),fill:new a.style.Fill({color:"rgba(255,255,0,1)"})})}),enscore:function(a){for(var b=0;b<a.split(" ").length+1;b++)a=a.replace(" ","_");return a},descore:function(a){for(var b=0;b<a.split("_").length+1;b++)a=a.replace("_"," ");return a},get_basename:function(a){return a.split("/").reverse()[0]},make_hr:function(a){var b=document.createElement("hr");return b.className="hr",null!=a&&(b.id=a),b},resize:function(a){1*window.innerWidth/(1*window.innerHeight);$("#control_panel").addClass("landscape"),$("#control_panel").addClass("wide");var b=document.getElementById("main-toolbar"),c=document.getElementById("persistent_title_div"),d=32;if(b.clientWidth<500)c.style.fontSize="0px";else if(b.clientWidth<1e3){var e=(b.clientWidth-500)/500*d;c.style.fontSize=e+"px"}else c.style.fontSize=d+"px";c.style.left=parseInt(b.clientWidth/2-c.getBoundingClientRect().width/2)+"px"},mkRandomColor:function(){for(var a="#",b=["0","1","5","6","A","B","C","D","E","F"],c=0;c<6;c++){var d=parseInt(Math.random()*b.length);try{a+=b[d]}catch(b){a+="F"}}return a},computeResolution:function(c,d,e,f){var g,h,i=c[2],j=c[0],k=c[1],l=c[3];d?(h=[i,l],g=[j,k]):(h=a.proj.transform([i,l],"EPSG:4326","EPSG:3857"),g=a.proj.transform([j,k],"EPSG:4326","EPSG:3857")),b(g+", "+h);var m,n=h[0]-g[0],o=h[1]-g[1],p=e/f,q=n/o;return m=p>1?q<1?o/f:q>p?n/e:o/f:q>1?n/e:q<p?o/f:n/e,b("res="+m),m}}});