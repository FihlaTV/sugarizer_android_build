/*! Sugarizer 2017-09-04 */
enyo.kind({name:"TamTam.Collection",kind:enyo.Control,published:{name:"",selection:!1},classes:"collection",components:[{name:"collectionImage",classes:"collectionImage",kind:"Image"}],create:function(){this.inherited(arguments),this.nameChanged(),this.selectionChanged()},nameChanged:function(){this.selection?this.$.collectionImage.setAttribute("src","images/database/"+this.name+"sel.png"):this.$.collectionImage.setAttribute("src","images/database/"+this.name+".png")},selectionChanged:function(){this.nameChanged()}});