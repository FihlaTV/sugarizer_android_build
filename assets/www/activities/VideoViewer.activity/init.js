/*! Sugarizer 2017-09-04 */
if(Util.onSugar()){var toolbar=document.getElementById("main-toolbar");document.getElementById("body").removeChild(toolbar),Util.sugar=new Sugar,Util.sugar.connect("filter_clicked",function(a){app.setFilter({category:a}),Util.saveContext()}),Util.sugar.connect("settings_clicked",function(a){app.remotePopUp()}),Util.sugar.connect("favorite_clicked",function(a){app.setFilter({favorite:a})}),Util.sugar.connect("text_typed",function(a){app.setFilter({text:a})});var filterpalette={};filterpalette.setCategories=function(a){Util.sugar.sendMessage("set_categories",a)},Util.sugar.connect("library_clicked",function(){app.showLibraries()}),Util.sugar.connect("load-context",function(a){Util.loadContext(null,a)}),Util.sugar.connect("save-context",function(){Util.sugar.sendMessage("save-context",Util.context)}),app=new VideoViewer.App({activity:null,filter:filterpalette}),constant.videoType="ogv",app.renderInto(document.getElementById("viewer")),Util.sugar.sendMessage("ready")}else document.getElementById("main-toolbar").style.visibility="visible";