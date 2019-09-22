/*! Sugarizer 2019-09-21 */
function _getOffset(a,b){var c=a.currentStyle||window.getComputedStyle(a,""),d=-2*c.marginLeft.slice(0,-2),e=-1*c.marginTop.slice(0,-2),f=a.getBoundingClientRect();d=f.left,e+=f.top;var g=d+b.offsetWidth-document.getElementById("canvas").offsetWidth;return g>0&&(d-=g),{top:e,left:d,width:f.width,height:f.height}}function _updatePosition(a){var b=_getOffset(a.hasNode(),a.palette.hasNode()),c=b.left,d=b.top,e=document.getElementById(a.palette.getAttribute("id"));e.style.left=c+"px",e.style.top=d+"px"}var _displayedPalette=null;enyo.kind({name:"Sugar.Palette",kind:enyo.Control,published:{icon:null,text:null,contents:null,contentsClasses:"",header:null},classes:"palette-sugarizer palette-down",components:[{name:"icon",kind:"Sugar.Icon",classes:"palette-icon",size:20,x:6,y:6},{name:"text",classes:"palette-text"}],create:function(){this.inherited(arguments),this.iconChanged(),this.textChanged()},rendered:function(){this.inherited(arguments)},iconChanged:function(){this.$.icon.setIcon(this.icon)},textChanged:function(){this.$.text.setContent(this.text)},displayPopup:function(a){if(_displayedPalette&&(_displayedPalette.switchPalette(a),_displayedPalette=null),null!=this.contents){var b=this.hasNode().id+"_content";this.palette=a.createComponent({name:b,classes:"palette-content "+this.contentsClasses}),this.header&&(this.palette.createComponent({content:this.header,classes:"palette-header"},{owner:this.palette}),this.palette.createComponent({classes:"palette-hr"},{owner:this.palette})),this.paletteEvents=[];for(var c=0;c<this.contents.length;c++){var d=this.palette.createComponent(this.contents[c],{owner:this.palette}),e=this.contents[c].ontap;e&&(this.palette[e]=enyo.bind(this,"bindedFunction"),this.paletteEvents.push({event:"tap",object:d,name:e}))}this.palette.render(),_updatePosition(this),_displayedPalette=this}},setItems:function(a){this.contents=a},bindedFunction:function(a,b){for(var c=0;c<this.paletteEvents.length;c++)this.paletteEvents[c].event==b.type&&this.paletteEvents[c].object==a&&enyo.call(this.parent,this.paletteEvents[c].name,[a,b])},hidePopup:function(a){var b=this,c=null;enyo.forEach(a.getControls(),function(a){a.getAttribute("id")==b.palette.getAttribute("id")&&(c=a)}),c&&c.destroy(),_displayedPalette=null},switchPalette:function(a){var b=this.isOpen();this.addRemoveClass("palette-down",b),this.addRemoveClass("palette-up",!b),b?this.hidePopup(a):this.displayPopup(a)},isOpen:function(){return this.hasClass("palette-up")}});