/*! Sugarizer 2017-08-25 */
enyo.kind({name:"onyx.Spinner",classes:"onyx-spinner",stop:function(){this.setShowing(!1)},start:function(){this.setShowing(!0)},toggle:function(){this.setShowing(!this.getShowing())}});