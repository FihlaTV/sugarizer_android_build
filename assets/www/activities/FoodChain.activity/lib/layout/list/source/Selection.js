/*! Sugarizer 2018-07-01 */
enyo.kind({name:"enyo.Selection",kind:enyo.Component,published:{multi:!1},events:{onSelect:"",onDeselect:"",onChange:""},create:function(){this.clear(),this.inherited(arguments)},multiChanged:function(){this.multi||this.clear(),this.doChange()},highlander:function(a){this.multi||this.deselect(this.lastSelected)},clear:function(){this.selected={}},isSelected:function(a){return this.selected[a]},setByKey:function(a,b,c){if(b)this.selected[a]=c||!0,this.lastSelected=a,this.doSelect({key:a,data:this.selected[a]});else{var d=this.isSelected(a);delete this.selected[a],this.doDeselect({key:a,data:d})}this.doChange()},deselect:function(a){this.isSelected(a)&&this.setByKey(a,!1)},select:function(a,b){this.multi?this.setByKey(a,!this.isSelected(a),b):this.isSelected(a)||(this.highlander(),this.setByKey(a,!0,b))},toggle:function(a,b){this.multi||this.lastSelected==a||this.deselect(this.lastSelected),this.setByKey(a,!this.isSelected(a),b)},getSelected:function(){return this.selected}});