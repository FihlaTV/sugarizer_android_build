/*! Sugarizer 2018-05-08 */
define(["activity/ol","print","util","colormyworld","humane"],function(a,b,c,d,e){var f={};return f.map=null,f.featureOverlay=null,f.HILIGHTS=[],f.tooltipDisplay=null,f.test=function(){return INSTALLED.keys},f.setup_map=function(){window.map=new a.Map({layers:[],target:"cmw_bg",view:new a.View({center:a.proj.transform(INSTALLED.Africa.center,"EPSG:4326","EPSG:3857"),zoom:2})}),window.map.on("click",function(c){if(d.mode==COLORING){var g=!1;dummmy=window.map.forEachFeatureAtPixel(c.pixel,function(c,h){var i=c.get("NAME");if(i||(i=c.get("Name")),i||(i=c.get("name")),d.currents.indexOf(i)<0){f.tooltipDisplay&&i==f.tooltipDisplay||(f.tooltipDisplay=i,e.timeout=1e3,e.log(document.webL10n.get(i.replace(/ /g,"_")).replace(/_/g," ")),setTimeout(function(){f.tooltipDisplay=null},e.timeout));var j=d.getRGBColorString();b(j);var k=new a.style.Style({fill:new a.style.Fill({color:d.getRGBColorString()}),stroke:new a.style.Stroke({color:DEFAULT_STROKE,width:1})});c.setStyle(k),g=!0}}),g||d.set_background(null)}else d.check_feature(c.pixel)});var c={};f.featureOverlay=new a.layer.Vector({source:new a.source.Vector,map:window.map,style:function(b,d){var e="";return c[e]||(c[e]=new a.style.Style({stroke:new a.style.Stroke({color:"#ff0",width:1}),fill:new a.style.Fill({color:"rgba(0,200,0,0.2)"}),text:new a.style.Text({font:"12px Calibri,sans-serif",text:e,fill:new a.style.Fill({color:"#000"}),stroke:new a.style.Stroke({color:"#ff0",width:3})})})),c[e]}});var g,h=function(a){var b=map.forEachFeatureAtPixel(a,function(a){return a}),c=null;b&&(c=b.get("name"),c||(c=b.get("Name")),c||(c=b.get("NAME"))),REGION_NAMES.indexOf(c)>-1||d.mode!=TOUR&&b!==g&&(g&&f.featureOverlay.getSource().removeFeature(g),b&&f.featureOverlay.getSource().addFeature(b),g=b)};window.map.on("pointermove",function(a){if(!a.dragging){var b=window.map.getEventPixel(a.originalEvent);h(b)}})},f});