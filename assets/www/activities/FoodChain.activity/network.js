/*! Sugarizer 2019-09-21 */
enyo.kind({name:"FoodChain.NetworkCheck",kind:enyo.Control,classes:"networkCheck",published:{connected:!1},components:[{name:"box",components:[]}],create:function(){this.inherited(arguments),this.then=null},rendered:function(){this.inherited(arguments)},check:function(a){var b=[];enyo.forEach(this.$.box.getControls(),function(a){b.push(a)});for(var c=0;c<b.length;c++)b[c].destroy();this.then=a,this.$.box.createComponent({kind:"Image",showing:!1,src:"images/cards/_ping.png?"+(new Date).getTime(),onload:"networkOK",onerror:"networkKO"},{owner:this}).render()},networkOK:function(){this.connected=!0,this.then&&this.then(this.connected)},networkKO:function(){this.connected=!1,this.then&&this.then(this.connected)}});