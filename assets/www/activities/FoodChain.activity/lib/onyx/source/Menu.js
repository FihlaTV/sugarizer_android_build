/*! Sugarizer 2017-09-04 */
enyo.kind({name:"onyx.Menu",kind:"onyx.Popup",modal:!0,defaultKind:"onyx.MenuItem",classes:"onyx-menu",showOnTop:!1,handlers:{onActivate:"itemActivated",onRequestShowMenu:"requestMenuShow",onRequestHideMenu:"requestHide"},itemActivated:function(a,b){return b.originator.setActive(!1),!0},showingChanged:function(){this.inherited(arguments),this.adjustPosition(!0)},requestMenuShow:function(a,b){if(this.floating){var c=b.activator.hasNode();if(c){var d=this.activatorOffset=this.getPageOffset(c);this.applyPosition({top:d.top+(this.showOnTop?0:d.height),left:d.left,width:d.width})}}return this.show(),!0},applyPosition:function(a){var b="";for(n in a)b+=n+":"+a[n]+(isNaN(a[n])?"; ":"px; ");this.addStyles(b)},getPageOffset:function(a){var b=a.getBoundingClientRect(),c=void 0===window.pageYOffset?document.documentElement.scrollTop:window.pageYOffset,d=void 0===window.pageXOffset?document.documentElement.scrollLeft:window.pageXOffset,e=void 0===b.height?b.bottom-b.top:b.height,f=void 0===b.width?b.right-b.left:b.width;return{top:b.top+c,left:b.left+d,height:e,width:f}},adjustPosition:function(a){if(this.showing&&this.hasNode()){this.removeClass("onyx-menu-up"),this.floating?enyo.noop:this.applyPosition({left:"auto"});var b=this.node.getBoundingClientRect(),c=void 0===b.height?b.bottom-b.top:b.height,d=void 0===window.innerHeight?document.documentElement.clientHeight:window.innerHeight,e=void 0===window.innerWidth?document.documentElement.clientWidth:window.innerWidth;if(this.menuUp=b.top+c>d&&d-b.bottom<b.top-c,this.addRemoveClass("onyx-menu-up",this.menuUp),this.floating){var f=this.activatorOffset;this.menuUp?this.applyPosition({top:f.top-c+(this.showOnTop?f.height:0),bottom:"auto"}):b.top<f.top&&f.top+(a?f.height:0)+c<d&&this.applyPosition({top:f.top+(this.showOnTop?0:f.height),bottom:"auto"})}b.right>e&&(this.floating?this.applyPosition({left:f.left-(b.left+b.width-e)}):this.applyPosition({left:-(b.right-e)}))}},resizeHandler:function(){this.inherited(arguments),this.adjustPosition(!0)},requestHide:function(){this.setShowing(!1)}});