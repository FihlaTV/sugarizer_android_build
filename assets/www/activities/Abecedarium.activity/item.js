/*! Sugarizer 2018-07-01 */
enyo.kind({name:"Abcd.Item",kind:enyo.Control,published:{x:-1,y:-1,z:-1,selected:!1},create:function(){this.inherited(arguments),this.xChanged(),this.yChanged(),this.zChanged(),this.selectedChanged()},setLocale:function(){this.render()},xChanged:function(){this.x!=-1&&this.applyStyle("margin-left",this.x+"px")},yChanged:function(){this.y!=-1&&this.applyStyle("margin-top",this.y+"px")},zChanged:function(){this.z!=-1&&this.applyStyle("z-index",this.z)},selectedChanged:function(){var a="item"+this.kind.substring(5)+"-selected";this.selected?this.addClass(a):this.removeClass(a)},moveTo:function(a,b){this.x=a,this.xChanged(),this.y=b,this.yChanged()}});