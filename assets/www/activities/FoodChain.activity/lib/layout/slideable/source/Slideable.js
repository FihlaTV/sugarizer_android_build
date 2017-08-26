/*! Sugarizer 2017-08-25 */
enyo.kind({name:"enyo.Slideable",kind:"Control",published:{axis:"h",value:0,unit:"px",min:0,max:0,accelerated:"auto",overMoving:!0,draggable:!0},events:{onAnimateFinish:"",onChange:""},preventDragPropagation:!1,tools:[{kind:"Animator",onStep:"animatorStep",onEnd:"animatorComplete"}],handlers:{ondragstart:"dragstart",ondrag:"drag",ondragfinish:"dragfinish"},kDragScalar:1,dragEventProp:"dx",unitModifier:!1,canTransform:!1,create:function(){this.inherited(arguments),this.acceleratedChanged(),this.transformChanged(),this.axisChanged(),this.valueChanged(),this.addClass("enyo-slideable")},initComponents:function(){this.createComponents(this.tools),this.inherited(arguments)},rendered:function(){this.inherited(arguments),this.canModifyUnit(),this.updateDragScalar()},resizeHandler:function(){this.inherited(arguments),this.updateDragScalar()},canModifyUnit:function(){if(!this.canTransform){var a=this.getInitialStyleValue(this.hasNode(),this.boundary);a.match(/px/i)&&"%"===this.unit&&(this.unitModifier=this.getBounds()[this.dimension])}},getInitialStyleValue:function(a,b){var c=enyo.dom.getComputedStyle(a);return c?c.getPropertyValue(b):a&&a.currentStyle?a.currentStyle[b]:"0"},updateBounds:function(a,b){var c={};c[this.boundary]=a,this.setBounds(c,this.unit),this.setInlineStyles(a,b)},updateDragScalar:function(){if("%"==this.unit){var a=this.getBounds()[this.dimension];this.kDragScalar=a?100/a:1,this.canTransform||this.updateBounds(this.value,100)}},transformChanged:function(){this.canTransform=enyo.dom.canTransform()},acceleratedChanged:function(){enyo.platform.android>2||enyo.dom.accelerate(this,this.accelerated)},axisChanged:function(){var a="h"==this.axis;this.dragMoveProp=a?"dx":"dy",this.shouldDragProp=a?"horizontal":"vertical",this.transform=a?"translateX":"translateY",this.dimension=a?"width":"height",this.boundary=a?"left":"top"},setInlineStyles:function(a,b){var c={};this.unitModifier?(c[this.boundary]=this.percentToPixels(a,this.unitModifier),c[this.dimension]=this.unitModifier,this.setBounds(c)):(b?c[this.dimension]=b:c[this.boundary]=a,this.setBounds(c,this.unit))},valueChanged:function(a){var b=this.value;this.isOob(b)&&!this.isAnimating()&&(this.value=this.overMoving?this.dampValue(b):this.clampValue(b)),enyo.platform.android>2&&(this.value?0!==a&&void 0!==a||enyo.dom.accelerate(this,this.accelerated):enyo.dom.accelerate(this,!1)),this.canTransform?enyo.dom.transformValue(this,this.transform,this.value+this.unit):this.setInlineStyles(this.value,!1),this.doChange()},getAnimator:function(){return this.$.animator},isAtMin:function(){return this.value<=this.calcMin()},isAtMax:function(){return this.value>=this.calcMax()},calcMin:function(){return this.min},calcMax:function(){return this.max},clampValue:function(a){var b=this.calcMin(),c=this.calcMax();return Math.max(b,Math.min(a,c))},dampValue:function(a){return this.dampBound(this.dampBound(a,this.min,1),this.max,-1)},dampBound:function(a,b,c){var d=a;return d*c<b*c&&(d=b+(d-b)/4),d},percentToPixels:function(a,b){return Math.floor(b/100*a)},pixelsToPercent:function(a){var b=this.unitModifier?this.getBounds()[this.dimension]:this.container.getBounds()[this.dimension];return a/b*100},shouldDrag:function(a){return this.draggable&&a[this.shouldDragProp]},isOob:function(a){return a>this.calcMax()||a<this.calcMin()},dragstart:function(a,b){if(this.shouldDrag(b))return b.preventDefault(),this.$.animator.stop(),b.dragInfo={},this.dragging=!0,this.drag0=this.value,this.dragd0=0,this.preventDragPropagation},drag:function(a,b){if(this.dragging){b.preventDefault();var c=this.canTransform?b[this.dragMoveProp]*this.kDragScalar:this.pixelsToPercent(b[this.dragMoveProp]),d=this.drag0+c,e=c-this.dragd0;return this.dragd0=c,e&&(b.dragInfo.minimizing=e<0),this.setValue(d),this.preventDragPropagation}},dragfinish:function(a,b){if(this.dragging)return this.dragging=!1,this.completeDrag(b),b.preventTap(),this.preventDragPropagation},completeDrag:function(a){this.value!==this.calcMax()&&this.value!=this.calcMin()&&this.animateToMinMax(a.dragInfo.minimizing)},isAnimating:function(){return this.$.animator.isAnimating()},play:function(a,b){this.$.animator.play({startValue:a,endValue:b,node:this.hasNode()})},animateTo:function(a){this.play(this.value,a)},animateToMin:function(){this.animateTo(this.calcMin())},animateToMax:function(){this.animateTo(this.calcMax())},animateToMinMax:function(a){a?this.animateToMin():this.animateToMax()},animatorStep:function(a){return this.setValue(a.value),!0},animatorComplete:function(a){return this.doAnimateFinish(a),!0},toggleMinMax:function(){this.animateToMinMax(!this.isAtMin())}});