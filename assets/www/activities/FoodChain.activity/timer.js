/*! Sugarizer 2018-05-08 */
enyo.kind({name:"Timer",kind:enyo.Component,minInterval:50,published:{baseInterval:100,paused:!1},events:{onTriggered:""},create:function(){this.inherited(arguments),this.start()},destroy:function(){this.stop(),this.inherited(arguments)},start:function(){this.job=window.setInterval(enyo.bind(this,"timer"),this.baseInterval)},stop:function(){window.clearInterval(this.job)},pause:function(){this.paused=!0},resume:function(){this.paused=!1},timer:function(){this.paused||this.doTriggered({time:(new Date).getTime()})},baseIntervalChanged:function(a){this.baseInterval=Math.max(this.minInterval,this.baseInterval),this.stop(),this.start()}});