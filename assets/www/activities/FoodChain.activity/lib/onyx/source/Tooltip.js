/*! Sugarizer 2017-09-04 */
enyo.kind({name:"onyx.Tooltip",kind:"onyx.Popup",classes:"onyx-tooltip below left-arrow",autoDismiss:!1,showDelay:500,defaultLeft:-6,handlers:{onRequestShowTooltip:"requestShow",onRequestHideTooltip:"requestHide"},requestShow:function(){return this.showJob=setTimeout(enyo.bind(this,"show"),this.showDelay),!0},cancelShow:function(){clearTimeout(this.showJob)},requestHide:function(){return this.cancelShow(),this.inherited(arguments)},showingChanged:function(){this.cancelShow(),this.adjustPosition(!0),this.inherited(arguments)},applyPosition:function(a){var b="";for(n in a)b+=n+":"+a[n]+(isNaN(a[n])?"; ":"px; ");this.addStyles(b)},adjustPosition:function(a){if(this.showing&&this.hasNode()){var b=this.node.getBoundingClientRect();b.top+b.height>window.innerHeight?(this.addRemoveClass("below",!1),this.addRemoveClass("above",!0)):(this.addRemoveClass("above",!1),this.addRemoveClass("below",!0)),b.left+b.width>window.innerWidth&&(this.applyPosition({"margin-left":-b.width,bottom:"auto"}),this.addRemoveClass("left-arrow",!1),this.addRemoveClass("right-arrow",!0))}},resizeHandler:function(){this.applyPosition({"margin-left":this.defaultLeft,bottom:"auto"}),this.addRemoveClass("left-arrow",!0),this.addRemoveClass("right-arrow",!1),this.adjustPosition(!0),this.inherited(arguments)}});