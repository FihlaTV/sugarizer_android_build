/*! Sugarizer 2018-05-08 */
enyo.kind({name:"enyo.Node",published:{expandable:!1,expanded:!1,icon:"",onlyIconExpands:!1,selected:!1},style:"padding: 0 0 0 16px;",content:"Node",defaultKind:"Node",classes:"enyo-node",components:[{name:"icon",kind:"Image",showing:!1},{kind:"Control",name:"caption",Xtag:"span",style:"display: inline-block; padding: 4px;",allowHtml:!0},{kind:"Control",name:"extra",tag:"span",allowHtml:!0}],childClient:[{kind:"Control",name:"box",classes:"enyo-node-box",Xstyle:"border: 1px solid orange;",components:[{kind:"Control",name:"client",classes:"enyo-node-client",Xstyle:"border: 1px solid lightblue;"}]}],handlers:{ondblclick:"dblclick"},events:{onNodeTap:"nodeTap",onNodeDblClick:"nodeDblClick",onExpand:"nodeExpand",onDestroyed:"nodeDestroyed"},create:function(){this.inherited(arguments),this.selectedChanged(),this.iconChanged()},destroy:function(){this.doDestroyed(),this.inherited(arguments)},initComponents:function(){this.expandable&&(this.kindComponents=this.kindComponents.concat(this.childClient)),this.inherited(arguments)},contentChanged:function(){this.$.caption.setContent(this.content)},iconChanged:function(){this.$.icon.setSrc(this.icon),this.$.icon.setShowing(Boolean(this.icon))},selectedChanged:function(){this.addRemoveClass("enyo-selected",this.selected)},rendered:function(){this.inherited(arguments),this.expandable&&!this.expanded&&this.quickCollapse()},addNodes:function(a){this.destroyClientControls();for(var b,c=0;b=a[c];c++)this.createComponent(b);this.$.client.render()},addTextNodes:function(a){this.destroyClientControls();for(var b,c=0;b=a[c];c++)this.createComponent({content:b});this.$.client.render()},tap:function(a,b){return this.onlyIconExpands?b.target==this.$.icon.hasNode()?this.toggleExpanded():this.doNodeTap():(this.toggleExpanded(),this.doNodeTap()),!0},dblclick:function(a,b){return this.doNodeDblClick(),!0},toggleExpanded:function(){this.setExpanded(!this.expanded)},quickCollapse:function(){this.removeClass("enyo-animate"),this.$.box.applyStyle("height","0");var a=this.$.client.getBounds().height;this.$.client.setBounds({top:-a})},_expand:function(){this.addClass("enyo-animate");var a=this.$.client.getBounds().height;this.$.box.setBounds({height:a}),this.$.client.setBounds({top:0}),setTimeout(enyo.bind(this,function(){this.expanded&&(this.removeClass("enyo-animate"),this.$.box.applyStyle("height","auto"))}),225)},_collapse:function(){this.removeClass("enyo-animate");var a=this.$.client.getBounds().height;this.$.box.setBounds({height:a}),setTimeout(enyo.bind(this,function(){this.addClass("enyo-animate"),this.$.box.applyStyle("height","0"),this.$.client.setBounds({top:-a})}),25)},expandedChanged:function(a){if(this.expandable){var b={expanded:this.expanded};this.doExpand(b),b.wait||this.effectExpanded()}else this.expanded=!1},effectExpanded:function(){this.$.client&&(this.expanded?this._expand():this._collapse())}});