/*! Sugarizer 2018-05-08 */
enyo.kind({name:"enyo.AlphaJumpList",kind:"List",scrollTools:[{name:"jumper",kind:"AlphaJumper"}],initComponents:function(){this.createChrome(this.scrollTools),this.inherited(arguments)},rendered:function(){this.inherited(arguments),this.centerJumper()},resizeHandler:function(){this.inherited(arguments),this.centerJumper()},centerJumper:function(){var a=this.getBounds(),b=this.$.jumper.getBounds();this.$.jumper.applyStyle("top",(a.height-b.height)/2+"px")}});