/*! Sugarizer 2018-07-01 */
enyo.kind({name:"Sugar.Popup",kind:"enyo.Control",classes:"home-activity-popup",published:{margin:null,header:null,items:null,footer:null},components:[{name:"popuptitle",classes:"popup-title",ontap:"runHeaderAction",components:[{name:"icon",showing:!1,kind:"Sugar.Icon",x:5,y:5,size:constant.iconSizeList},{name:"name",classes:"popup-name-text"},{name:"title",classes:"popup-title-text"}]},{name:"items",classes:"popup-items",showing:!1,components:[{name:"itemslist",kind:"Sugar.DesktopPopupListView"}]},{name:"footer",classes:"popup-items",showing:!1,components:[{name:"footerlist",kind:"Sugar.DesktopPopupListView"}]}],create:function(){this.inherited(arguments),this.marginChanged(),this.headerChanged(),this.itemsChanged(),this.footerChanged(),this.timer=null,"rtl"==l10n.language.direction&&this.$.popuptitle.setAttribute("dir","rtl")},marginChanged:function(){null==this.margin&&(this.margin={left:constant.popupMarginLeft,top:constant.popupMarginTop}),this.applyStyle("left",mouse.position.x+this.margin.left+"px"),this.applyStyle("top",mouse.position.y+this.margin.top+"px")},headerChanged:function(){null!=this.header&&(this.$.icon.setShowing(null!=this.header.icon),null!=this.header.icon&&(this.$.icon.setIcon(this.header.icon),this.$.icon.setColorized(this.header.colorized),this.header.colorizedColor?this.$.icon.setColorizedColor(this.header.colorizedColor):this.$.icon.setColorizedColor(null),this.$.icon.render()),this.$.name.setContent(this.header.name),"rtl"==l10n.language.direction&&this.$.name.addClass("rtl-10"),null!=this.header.title?(this.$.name.removeClass("popup-name-text-bottom"),this.$.title.setContent(this.header.title)):(this.$.title.setContent(""),this.$.name.addClass("popup-name-text-bottom")))},itemsChanged:function(){null!=this.items&&this.$.itemslist.setItems(this.items)},footerChanged:function(){null!=this.footer&&this.$.footerlist.setItems(this.footer)},showPopup:function(){this.marginChanged(),this.show(),this.timer=window.setInterval(enyo.bind(this,"showContent"),constant.timerPopupDuration)},hidePopup:function(){this.hide(),this.$.items.hide(),this.$.itemslist.setItems(null),this.$.footer.hide(),this.$.footerlist.setItems(null)},showContent:function(){window.clearInterval(this.timer),this.timer=null,this.$.items&&this.showing&&(null!=this.items&&this.items.length>0&&this.$.items.show(),null!=this.footer&&this.footer.length>0&&this.$.footer.show())},runHeaderAction:function(a,b){if(null!=this.header.action)return this.header.action.apply(this,this.header.data),!0},cursorIsInside:function(){return util.cursorIsInside(this)}}),enyo.kind({name:"Sugar.DesktopPopupListView",kind:enyo.Scroller,published:{items:null},classes:"popup-item-listview",components:[{name:"itemList",classes:"item-list",kind:"Repeater",onSetupItem:"setupItem",components:[{name:"item",classes:"item-list-item",ontap:"runItemAction",components:[{name:"icon",kind:"Sugar.Icon",x:5,y:4,size:constant.iconSizeFavorite},{name:"name",classes:"item-name"}]}]}],create:function(){this.inherited(arguments),this.itemsChanged()},itemsChanged:function(){null!=this.items?this.$.itemList.set("count",this.items.length,!0):this.$.itemList.set("count",0,!0)},setupItem:function(a,b){b.item.$.icon.setIcon(this.items[b.index].icon),b.item.$.name.setContent(this.items[b.index].name),b.item.$.icon.setColorized(this.items[b.index].colorized),this.items[b.index].colorizedColor?b.item.$.icon.setColorizedColor(this.items[b.index].colorizedColor):b.item.$.icon.setColorizedColor(null),this.items[b.index].disable?(b.item.$.name.addRemoveClass("item-name-disable",!0),b.item.$.name.addRemoveClass("item-name-enable",!1)):(b.item.$.name.addRemoveClass("item-name-disable",!1),b.item.$.name.addRemoveClass("item-name-enable",!0)),"rtl"==l10n.language.direction&&(b.item.$.name.addClass("rtl-10"),b.item.$.item.setAttribute("dir","rtl"))},runItemAction:function(a,b){if(!this.items[b.index].disable){var c=this.items[b.index].action;null!=c&&c.apply(this,this.items[b.index].data)}}});