/*! Sugarizer 2017-08-25 */
enyo.kind({name:"onyx.Item",classes:"onyx-item",tapHighlight:!0,handlers:{onhold:"hold",onrelease:"release"},hold:function(a,b){this.tapHighlight&&onyx.Item.addFlyweightClass(this.controlParent||this,"onyx-highlight",b)},release:function(a,b){this.tapHighlight&&onyx.Item.removeFlyweightClass(this.controlParent||this,"onyx-highlight",b)},statics:{addFlyweightClass:function(a,b,c,d){var e=c.flyweight;if(e){var f=void 0!=d?d:c.index;e.performOnRow(f,function(){a.hasClass(b)?a.setClassAttribute(a.getClassAttribute()):a.addClass(b)}),a.removeClass(b)}},removeFlyweightClass:function(a,b,c,d){var e=c.flyweight;if(e){var f=void 0!=d?d:c.index;e.performOnRow(f,function(){a.hasClass(b)?a.removeClass(b):a.setClassAttribute(a.getClassAttribute())})}}}});