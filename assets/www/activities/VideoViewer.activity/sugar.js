/*! Sugarizer 2017-09-04 */
Util.onSugar()&&(enyo.Sugar={},enyo.Sugar.component=null,enyo.Sugar.sendMessage=function(a,b){enyo.Sugar.component&&enyo.Sugar.component.signal(a,JSON.parse(b))},enyo.kind({name:"Sugar",create:function(){this.inherited(arguments),this.handlers=[],enyo.Sugar.component=this},connect:function(a,b){this.handlers[a]=b},sendMessage:function(a,b){var c="";if(c=c+"enyo://"+a.length+"/"+a,b){var d=JSON.stringify(b);c=c+"/"+d.length+"/"+d}else c+="/0/";console.log(c)},signal:function(a,b){var c=this.handlers[a];c&&c(b)}}));