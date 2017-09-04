/*! Sugarizer 2017-09-04 */
enyo.kind({name:"VideoViewer.App",kind:"FittableRows",published:{activity:null,filter:null},components:[{name:"spinner",kind:"Image",src:"images/spinner-light.gif",classes:"mainspinner",showing:!1},{name:"cloudwarning",kind:"Image",src:"images/cloud-warning.svg",classes:"cloudwarning",showing:!1},{name:"content",kind:"Scroller",fit:!0,classes:"main-content",onresize:"resize",components:[{name:"items",classes:"items",components:[]}]},{name:"footer",classes:"viewer-footer toolbar",fit:!1,components:[{name:"previousbutton",kind:"Button",classes:"toolbutton previous-button pull-left",title:"Previous",ontap:"showPrevious",showing:!1},{name:"pagecount",content:"0/0",classes:"page-count"},{name:"nextbutton",kind:"Button",classes:"toolbutton next-button pull-right",title:"Next",ontap:"showNext",showing:!1}]},{name:"libraryDialog",kind:"VideoViewer.LibraryDialog",onHide:"librariesHidden"},{name:"addLibraryDialog",kind:"VideoViewer.AddLibraryDialog"},{name:"videoDialog",kind:"VideoViewer.VideoDialog"}],create:function(){app=this,this.inherited(arguments),this.collection=[],this.index=0,this.computeSize(),this.favorite=!1,this.loadDatabase()},loadDatabase:function(){var a=this;this.$.spinner.setShowing(!0),Util.loadDatabase(function(b){a.index=0,a.collection=b,a.$.spinner.setShowing(!1),a.$.cloudwarning.setShowing(!1),a.draw()},function(b){a.$.spinner.setShowing(!1),a.$.cloudwarning.setShowing(!0),console.log("Error loading database on '"+b.url+"'")})},computeSize:function(){var a=document.getElementById("main-toolbar"),b=Util.onSugar()?37.5:a.offsetHeight,c=document.getElementById("body"),d=c.offsetHeight;this.$.content.applyStyle("height",d-2*b+"px")},resize:function(){Util.onSugar()||(this.computeSize(),this.draw())},draw:function(){var a=[];enyo.forEach(this.$.items.getControls(),function(b){a.push(b)});for(var b=0;b<a.length;b++)a[b].destroy();for(var c=this.collection,d=c.length,b=0;b<constant.pageCount&&this.index+b<d;b++)this.$.items.createComponent({kind:"VideoViewer.Item",code:c[this.index+b].id,title:c[this.index+b].title,category:c[this.index+b].category,isFavorite:Util.getFavorite(c[this.index+b].id),image:c[this.index+b].image,onVideoPlayed:"showVideo"},{owner:this}).render();this.$.previousbutton.setShowing(this.index-constant.pageCount>=0);var e=(d?1:0)+Math.ceil(this.index/constant.pageCount),f=Math.ceil(d/constant.pageCount);this.$.pagecount.setContent(e+"/"+f),this.$.nextbutton.setShowing(e<f)},showPrevious:function(){this.index-=constant.pageCount,this.saveContext(),this.draw()},showNext:function(){this.index+=constant.pageCount,this.saveContext(),this.draw()},showVideo:function(a){this.$.videoDialog.show(),this.$.videoDialog.setItem(a)},showLibraries:function(){this.$.libraryDialog.reload(),this.$.libraryDialog.show()},hideLibraries:function(){this.$.libraryDialog.hide()},librariesHidden:function(){null==Util.getLibrary()&&this.showLibraries()},setFilter:function(a){Util.setFilter(a)},filterChanged:function(a){this.collection=Util.getCollection(),this.index=void 0!==a?a:0,this.saveContext(),this.draw()},saveContext:function(){Util.setIndex(this.index),Util.saveContext()}});