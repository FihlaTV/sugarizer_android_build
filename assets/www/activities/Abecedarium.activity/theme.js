/*! Sugarizer 2017-08-25 */
enyo.kind({name:"Abcd.Theme",kind:"Abcd.Item",published:{index:""},classes:"theme",components:[{name:"spinner",kind:"Image",src:"images/spinner-light.gif",classes:"spinner"},{name:"contentBox",showing:!1,components:[{name:"itemImage",classes:"themeImage",kind:"Image",onload:"imageLoaded",onerror:"imageError"},{name:"itemText",classes:"themeText"}]}],create:function(){this.inherited(arguments),this.indexChanged()},imageLoaded:function(){""!==this.index&&(this.$.spinner.hide(),this.$.contentBox.show())},imageError:function(){Abcd.goHome()},setLocale:function(){this.indexChanged(),this.inherited(arguments)},indexChanged:function(){var a=Abcd.themes[this.index],b=Abcd.entries[a.img],c=Abcd.context.getDatabase()+"images/database/"+b.code+".png",d=__$FC(a.text);1==Abcd.context.casevalue&&(d=d.toUpperCase()),this.$.itemImage.setAttribute("src",c),this.$.itemText.removeClass("themeText0"),this.$.itemText.removeClass("themeText1"),this.$.itemText.removeClass("themeText2"),this.$.itemText.addClass("themeText"+Abcd.context.casevalue),this.$.itemText.setContent(d),this.addClass("themeColor"+this.index)}});