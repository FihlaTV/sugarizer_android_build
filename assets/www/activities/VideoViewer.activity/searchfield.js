/*! Sugarizer 2018-07-01 */
enyo.kind({name:"Sugar.SearchField",kind:enyo.Control,classes:"search-field-border search-field-border-nofocus",published:{text:"",placeholder:""},events:{onTextChanged:""},components:[{classes:"search-field-iconsearch"},{name:"text",kind:"enyo.Input",classes:"search-field-input",onfocus:"onfocus",onblur:"onblur",oninput:"oninput"},{name:"icon",classes:"search-field-iconcancel",showing:!1,ontap:"onclick"}],create:function(){this.inherited(arguments),this.textChanged(),this.placeholderChanged()},textChanged:function(){this.$.text.setValue(this.text),this.text.length>0?this.$.icon.show():this.$.icon.hide()},placeholderChanged:function(){this.$.text.setPlaceholder(this.placeholder)},onfocus:function(){this.addRemoveClass("search-field-border-nofocus",!1),this.addRemoveClass("search-field-border-focus",!0)},onblur:function(){this.addRemoveClass("search-field-border-nofocus",!0),this.addRemoveClass("search-field-border-focus",!1)},oninput:function(){this.text=this.$.text.getValue(),this.doTextChanged(),app.setFilter({text:this.text}),this.text.length>0?this.$.icon.show():this.$.icon.hide()},onclick:function(){this.text="",this.$.text.setValue(this.text),app.setFilter({text:this.text}),this.textChanged(),this.doTextChanged()}});