/*! Sugarizer 2017-09-04 */
enyo.kind({name:"onyx.FlyweightPicker",kind:"onyx.Picker",classes:"onyx-flyweight-picker",published:{count:0},events:{onSetupItem:"",onSelect:""},handlers:{onSelect:"itemSelect"},components:[{name:"scroller",kind:"enyo.Scroller",strategyKind:"TouchScrollStrategy",components:[{name:"client",kind:"FlyweightRepeater",ontap:"itemTap"}]}],scrollerName:"scroller",create:function(){this.inherited(arguments),this.countChanged()},rendered:function(){this.inherited(arguments),this.selectedChanged()},scrollToSelected:function(){var a=this.$.client.fetchRowNode(this.selected);this.getScroller().scrollToNode(a,!this.menuUp)},countChanged:function(){this.$.client.count=this.count},processActivatedItem:function(a){this.item=a},selectedChanged:function(a){if(this.item){void 0!==a&&(this.item.removeClass("selected"),this.$.client.renderRow(a)),this.item.addClass("selected"),this.$.client.renderRow(this.selected),this.item.removeClass("selected");var b=this.$.client.fetchRowNode(this.selected);this.doChange({selected:this.selected,content:b&&b.textContent||this.item.content})}},itemTap:function(a,b){this.setSelected(b.rowIndex),this.doSelect({selected:this.item,content:this.item.content})},itemSelect:function(a,b){if(b.originator!=this)return!0}});