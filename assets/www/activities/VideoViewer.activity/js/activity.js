/*! Sugarizer 2018-05-08 */
define(["sugar-web/activity/activity","sugar-web/env","filterpalette"],function(a,b,c){var d=!1;require(["domReady!"],function(b){a.setup();var e=document.getElementById("filter-button");c=new c.FilterPalette(e,void 0),c.addEventListener("filter",function(){app.setFilter({category:c.getFilter()}),Util.saveContext(),c.popDown()}),document.getElementById("favorite-button").onclick=function(a,b){var c=a.toElement||a.explicitOriginalTarget||a.currentTarget;d=!d,d?c.style.backgroundImage="url(icons/favorite.svg)":c.style.backgroundImage="url(icons/notfavorite.svg)",app.setFilter({favorite:d})},document.getElementById("library-button").onclick=function(a,b){app.showLibraries()},app=new VideoViewer.App({activity:a,filter:c}),app.renderInto(document.getElementById("viewer"));var f=new Sugar.SearchField;f.renderInto(document.getElementById("search")),Util.loadContext(function(){app.draw()})})});