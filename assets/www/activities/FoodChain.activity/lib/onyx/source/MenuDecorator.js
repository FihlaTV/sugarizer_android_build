/*! Sugarizer 2018-07-01 */
enyo.kind({name:"onyx.MenuDecorator",kind:"onyx.TooltipDecorator",defaultKind:"onyx.Button",classes:"onyx-popup-decorator enyo-unselectable",handlers:{onActivate:"activated",onHide:"menuHidden"},activated:function(a,b){this.requestHideTooltip(),b.originator.active&&(this.menuActive=!0,this.activator=b.originator,this.activator.addClass("active"),this.requestShowMenu())},requestShowMenu:function(){this.waterfallDown("onRequestShowMenu",{activator:this.activator})},requestHideMenu:function(){this.waterfallDown("onRequestHideMenu")},menuHidden:function(){this.menuActive=!1,this.activator&&(this.activator.setActive(!1),this.activator.removeClass("active"))},enter:function(a){this.menuActive||this.inherited(arguments)},leave:function(a,b){this.menuActive||this.inherited(arguments)}});