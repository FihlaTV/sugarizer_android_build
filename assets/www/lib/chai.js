/*! Sugarizer 2018-05-08 */
!function(){function require(a){var b=require.modules[a];if(!b)throw new Error('failed to require "'+a+'"');return"exports"in b||"function"!=typeof b.definition||(b.client=b.component=!0,b.definition.call(this,b.exports={},b),delete b.definition),b.exports}require.loader="component",require.helper={},require.helper.semVerSort=function(a,b){for(var c=a.version.split("."),d=b.version.split("."),e=0;e<c.length;++e){var f=parseInt(c[e],10),g=parseInt(d[e],10);if(f!==g)return f>g?1:-1;var h=c[e].substr((""+f).length),i=d[e].substr((""+g).length);if(""===h&&""!==i)return 1;if(""!==h&&""===i)return-1;if(""!==h&&""!==i)return h>i?1:-1}return 0},require.latest=function(a,b){function c(a){throw new Error('failed to find latest module of "'+a+'"')}var d=/(.*)~(.*)@v?(\d+\.\d+\.\d+[^\/]*)$/,e=/(.*)~(.*)/;e.test(a)||c(a);for(var f=Object.keys(require.modules),g=[],h=[],i=0;i<f.length;i++){var j=f[i];if(new RegExp(a+"@").test(j)){var k=j.substr(a.length+1),l=d.exec(j);null!=l?g.push({version:k,name:j}):h.push({version:k,name:j})}}if(0===g.concat(h).length&&c(a),g.length>0){var m=g.sort(require.helper.semVerSort).pop().name;return b===!0?m:require(m)}var m=h.sort(function(a,b){return a.name>b.name})[0].name;return b===!0?m:require(m)},require.modules={},require.register=function(a,b){require.modules[a]={definition:b}},require.define=function(a,b){require.modules[a]={exports:b}},require.register("chaijs~assertion-error@1.0.0",function(a,b){function c(){function a(a,c){Object.keys(c).forEach(function(d){~b.indexOf(d)||(a[d]=c[d])})}var b=[].slice.call(arguments);return function(){for(var b=[].slice.call(arguments),c=0,d={};c<b.length;c++)a(d,b[c]);return d}}function d(a,b,d){var e=c("name","message","stack","constructor","toJSON"),f=e(b||{});this.message=a||"Unspecified AssertionError",this.showDiff=!1;for(var g in f)this[g]=f[g];d=d||arguments.callee,d&&Error.captureStackTrace&&Error.captureStackTrace(this,d)}b.exports=d,d.prototype=Object.create(Error.prototype),d.prototype.name="AssertionError",d.prototype.constructor=d,d.prototype.toJSON=function(a){var b=c("constructor","toJSON","stack"),d=b({name:this.name},this);return!1!==a&&this.stack&&(d.stack=this.stack),d}}),require.register("chaijs~type-detect@0.1.1",function(a,b){function c(a){var b=Object.prototype.toString.call(a);return e[b]?e[b]:null===a?"null":void 0===a?"undefined":a===Object(a)?"object":typeof a}function d(){this.tests={}}var a=b.exports=c,e={"[object Array]":"array","[object RegExp]":"regexp","[object Function]":"function","[object Arguments]":"arguments","[object Date]":"date"};a.Library=d,d.prototype.of=c,d.prototype.define=function(a,b){return 1===arguments.length?this.tests[a]:(this.tests[a]=b,this)},d.prototype.test=function(a,b){if(b===c(a))return!0;var d=this.tests[b];if(d&&"regexp"===c(d))return d.test(a);if(d&&"function"===c(d))return d(a);throw new ReferenceError('Type test "'+b+'" not defined or invalid.')}}),require.register("chaijs~deep-eql@0.1.3",function(a,b){function c(a,b,c){return!!d(a,b)||("date"===o(a)?f(a,b):"regexp"===o(a)?g(a,b):n.isBuffer(a)?k(a,b):"arguments"===o(a)?h(a,b,c):!!e(a,b)&&("object"!==o(a)&&"object"!==o(b)&&"array"!==o(a)&&"array"!==o(b)?d(a,b):m(a,b,c)))}function d(a,b){return a===b?0!==a||1/a===1/b:a!==a&&b!==b}function e(a,b){return o(a)===o(b)}function f(a,b){return"date"===o(b)&&d(a.getTime(),b.getTime())}function g(a,b){return"regexp"===o(b)&&d(a.toString(),b.toString())}function h(a,b,d){return"arguments"===o(b)&&(a=[].slice.call(a),b=[].slice.call(b),c(a,b,d))}function i(a){var b=[];for(var c in a)b.push(c);return b}function j(a,b){if(a.length!==b.length)return!1;for(var c=0,d=!0;c<a.length;c++)if(a[c]!==b[c]){d=!1;break}return d}function k(a,b){return!!n.isBuffer(b)&&j(a,b)}function l(a){return null!==a&&void 0!==a}function m(a,b,d){if(!l(a)||!l(b))return!1;if(a.prototype!==b.prototype)return!1;var e;if(d){for(e=0;e<d.length;e++)if(d[e][0]===a&&d[e][1]===b||d[e][0]===b&&d[e][1]===a)return!0}else d=[];try{var f=i(a),g=i(b)}catch(a){return!1}if(f.sort(),g.sort(),!j(f,g))return!1;d.push([a,b]);var h;for(e=f.length-1;e>=0;e--)if(h=f[e],!c(a[h],b[h],d))return!1;return!0}var n,o=require("chaijs~type-detect@0.1.1");try{n=require("buffer").Buffer}catch(a){n={},n.isBuffer=function(){return!1}}b.exports=c}),require.register("chai",function(a,b){b.exports=require("chai/lib/chai.js")}),require.register("chai/lib/chai.js",function(a,b){var c=[],a=b.exports={};a.version="2.1.0",a.AssertionError=require("chaijs~assertion-error@1.0.0");var d=require("chai/lib/chai/utils/index.js");a.use=function(a){return~c.indexOf(a)||(a(this,d),c.push(a)),this},a.util=d;var e=require("chai/lib/chai/config.js");a.config=e;var f=require("chai/lib/chai/assertion.js");a.use(f);var g=require("chai/lib/chai/core/assertions.js");a.use(g);var h=require("chai/lib/chai/interface/expect.js");a.use(h);var i=require("chai/lib/chai/interface/should.js");a.use(i);var j=require("chai/lib/chai/interface/assert.js");a.use(j)}),require.register("chai/lib/chai/assertion.js",function(a,b){var c=require("chai/lib/chai/config.js");b.exports=function(a,b){function d(a,b,c){f(this,"ssfi",c||arguments.callee),f(this,"object",a),f(this,"message",b)}var e=a.AssertionError,f=b.flag;a.Assertion=d,Object.defineProperty(d,"includeStack",{get:function(){return console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),c.includeStack},set:function(a){console.warn("Assertion.includeStack is deprecated, use chai.config.includeStack instead."),c.includeStack=a}}),Object.defineProperty(d,"showDiff",{get:function(){return console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),c.showDiff},set:function(a){console.warn("Assertion.showDiff is deprecated, use chai.config.showDiff instead."),c.showDiff=a}}),d.addProperty=function(a,c){b.addProperty(this.prototype,a,c)},d.addMethod=function(a,c){b.addMethod(this.prototype,a,c)},d.addChainableMethod=function(a,c,d){b.addChainableMethod(this.prototype,a,c,d)},d.overwriteProperty=function(a,c){b.overwriteProperty(this.prototype,a,c)},d.overwriteMethod=function(a,c){b.overwriteMethod(this.prototype,a,c)},d.overwriteChainableMethod=function(a,c,d){b.overwriteChainableMethod(this.prototype,a,c,d)},d.prototype.assert=function(a,d,g,h,i,j){var k=b.test(this,arguments);if(!0!==j&&(j=!1),!0!==c.showDiff&&(j=!1),!k){var d=b.getMessage(this,arguments),l=b.getActual(this,arguments);throw new e(d,{actual:l,expected:h,showDiff:j},c.includeStack?this.assert:f(this,"ssfi"))}},Object.defineProperty(d.prototype,"_obj",{get:function(){return f(this,"object")},set:function(a){f(this,"object",a)}})}}),require.register("chai/lib/chai/config.js",function(a,b){b.exports={includeStack:!1,showDiff:!0,truncateThreshold:40}}),require.register("chai/lib/chai/core/assertions.js",function(a,b){b.exports=function(a,b){function c(a,c){c&&x(this,"message",c),a=a.toLowerCase();var d=x(this,"object"),e=~["a","e","i","o","u"].indexOf(a.charAt(0))?"an ":"a ";this.assert(a===b.type(d),"expected #{this} to be "+e+a,"expected #{this} not to be "+e+a)}function d(){x(this,"contains",!0)}function e(a,c){c&&x(this,"message",c);var d=x(this,"object"),e=!1;if("array"===b.type(d)&&"object"===b.type(a)){for(var f in d)if(b.eql(d[f],a)){e=!0;break}}else if("object"===b.type(a)){if(!x(this,"negate")){for(var g in a)new w(d).property(g,a[g]);return}var h={};for(var g in a)h[g]=d[g];e=b.eql(h,a)}else e=d&&~d.indexOf(a);this.assert(e,"expected #{this} to include "+b.inspect(a),"expected #{this} to not include "+b.inspect(a))}function f(){var a=x(this,"object"),b=Object.prototype.toString.call(a);this.assert("[object Arguments]"===b,"expected #{this} to be arguments but got "+b,"expected #{this} to not be arguments")}function g(a,b){b&&x(this,"message",b);var c=x(this,"object");return x(this,"deep")?this.eql(a):void this.assert(a===c,"expected #{this} to equal #{exp}","expected #{this} to not equal #{exp}",a,this._obj,!0)}function h(a,c){c&&x(this,"message",c),this.assert(b.eql(a,x(this,"object")),"expected #{this} to deeply equal #{exp}","expected #{this} to not deeply equal #{exp}",a,this._obj,!0)}function i(a,b){b&&x(this,"message",b);var c=x(this,"object");if(x(this,"doLength")){new w(c,b).to.have.property("length");var d=c.length;this.assert(d>a,"expected #{this} to have a length above #{exp} but got #{act}","expected #{this} to not have a length above #{exp}",a,d)}else this.assert(c>a,"expected #{this} to be above "+a,"expected #{this} to be at most "+a)}function j(a,b){b&&x(this,"message",b);var c=x(this,"object");if(x(this,"doLength")){new w(c,b).to.have.property("length");var d=c.length;this.assert(d>=a,"expected #{this} to have a length at least #{exp} but got #{act}","expected #{this} to have a length below #{exp}",a,d)}else this.assert(c>=a,"expected #{this} to be at least "+a,"expected #{this} to be below "+a)}function k(a,b){b&&x(this,"message",b);var c=x(this,"object");if(x(this,"doLength")){new w(c,b).to.have.property("length");var d=c.length;this.assert(d<a,"expected #{this} to have a length below #{exp} but got #{act}","expected #{this} to not have a length below #{exp}",a,d)}else this.assert(c<a,"expected #{this} to be below "+a,"expected #{this} to be at least "+a)}function l(a,b){b&&x(this,"message",b);var c=x(this,"object");if(x(this,"doLength")){new w(c,b).to.have.property("length");var d=c.length;this.assert(d<=a,"expected #{this} to have a length at most #{exp} but got #{act}","expected #{this} to have a length above #{exp}",a,d)}else this.assert(c<=a,"expected #{this} to be at most "+a,"expected #{this} to be above "+a)}function m(a,c){c&&x(this,"message",c);var d=b.getName(a);this.assert(x(this,"object")instanceof a,"expected #{this} to be an instance of "+d,"expected #{this} to not be an instance of "+d)}function n(a,c){c&&x(this,"message",c);var d=x(this,"object");this.assert(d.hasOwnProperty(a),"expected #{this} to have own property "+b.inspect(a),"expected #{this} to not have own property "+b.inspect(a))}function o(){x(this,"doLength",!0)}function p(a,b){b&&x(this,"message",b);var c=x(this,"object");new w(c,b).to.have.property("length");var d=c.length;this.assert(d==a,"expected #{this} to have a length of #{exp} but got #{act}","expected #{this} to not have a length of #{act}",a,d)}function q(a){var c,d=x(this,"object"),e=!0,f="keys must be given single argument of Array|Object|String, or multiple String arguments";switch(b.type(a)){case"array":if(arguments.length>1)throw new Error(f);break;case"object":if(arguments.length>1)throw new Error(f);a=Object.keys(a);break;default:a=Array.prototype.slice.call(arguments)}if(!a.length)throw new Error("keys required");var g=Object.keys(d),h=a,i=a.length,j=x(this,"any"),k=x(this,"all");if(j||k||(k=!0),j){var l=h.filter(function(a){return~g.indexOf(a)});e=l.length>0}if(k&&(e=a.every(function(a){return~g.indexOf(a)}),x(this,"negate")||x(this,"contains")||(e=e&&a.length==g.length)),i>1){a=a.map(function(a){return b.inspect(a)});var m=a.pop();k&&(c=a.join(", ")+", and "+m),j&&(c=a.join(", ")+", or "+m)}else c=b.inspect(a[0]);c=(i>1?"keys ":"key ")+c,c=(x(this,"contains")?"contain ":"have ")+c,this.assert(e,"expected #{this} to "+c,"expected #{this} to not "+c,h.slice(0).sort(),g.sort(),!0)}function r(a,c,d){d&&x(this,"message",d);var e=x(this,"object");new w(e,d).is.a("function");var f=!1,g=null,h=null,i=null;0===arguments.length?(c=null,a=null):a&&(a instanceof RegExp||"string"==typeof a)?(c=a,a=null):a&&a instanceof Error?(g=a,a=null,c=null):"function"==typeof a?(h=a.prototype.name||a.name,"Error"===h&&a!==Error&&(h=(new a).name)):a=null;try{e()}catch(d){if(g)return this.assert(d===g,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp}",g instanceof Error?g.toString():g,d instanceof Error?d.toString():d),x(this,"object",d),this;if(a&&(this.assert(d instanceof a,"expected #{this} to throw #{exp} but #{act} was thrown","expected #{this} to not throw #{exp} but #{act} was thrown",h,d instanceof Error?d.toString():d),!c))return x(this,"object",d),this;var j="object"===b.type(d)&&"message"in d?d.message:""+d;if(null!=j&&c&&c instanceof RegExp)return this.assert(c.exec(j),"expected #{this} to throw error matching #{exp} but got #{act}","expected #{this} to throw error not matching #{exp}",c,j),x(this,"object",d),this;if(null!=j&&c&&"string"==typeof c)return this.assert(~j.indexOf(c),"expected #{this} to throw error including #{exp} but got #{act}","expected #{this} to throw error not including #{act}",c,j),x(this,"object",d),this;f=!0,i=d}var k="",l=null!==h?h:g?"#{exp}":"an error";f&&(k=" but #{act} was thrown"),this.assert(f===!0,"expected #{this} to throw "+l+k,"expected #{this} to not throw "+l+k,g instanceof Error?g.toString():g,i instanceof Error?i.toString():i),x(this,"object",i)}function s(a,b,c){return a.every(function(a){return c?b.some(function(b){return c(a,b)}):b.indexOf(a)!==-1})}function t(a,b,c){c&&x(this,"message",c);var d=x(this,"object");new w(a,c).to.have.property(b),new w(d).is.a("function");var e=a[b];d(),this.assert(e!==a[b],"expected ."+b+" to change","expected ."+b+" to not change")}function u(a,b,c){c&&x(this,"message",c);var d=x(this,"object");new w(a,c).to.have.property(b),new w(d).is.a("function");var e=a[b];d(),this.assert(a[b]-e>0,"expected ."+b+" to increase","expected ."+b+" to not increase")}function v(a,b,c){c&&x(this,"message",c);var d=x(this,"object");new w(a,c).to.have.property(b),new w(d).is.a("function");var e=a[b];d(),this.assert(a[b]-e<0,"expected ."+b+" to decrease","expected ."+b+" to not decrease")}var w=a.Assertion,x=(Object.prototype.toString,b.flag);["to","be","been","is","and","has","have","with","that","which","at","of","same"].forEach(function(a){w.addProperty(a,function(){return this})}),w.addProperty("not",function(){x(this,"negate",!0)}),w.addProperty("deep",function(){x(this,"deep",!0)}),w.addProperty("any",function(){x(this,"any",!0),x(this,"all",!1)}),w.addProperty("all",function(){x(this,"all",!0),x(this,"any",!1)}),w.addChainableMethod("an",c),w.addChainableMethod("a",c),w.addChainableMethod("include",e,d),w.addChainableMethod("contain",e,d),w.addChainableMethod("contains",e,d),w.addChainableMethod("includes",e,d),w.addProperty("ok",function(){this.assert(x(this,"object"),"expected #{this} to be truthy","expected #{this} to be falsy")}),w.addProperty("true",function(){this.assert(!0===x(this,"object"),"expected #{this} to be true","expected #{this} to be false",!this.negate)}),w.addProperty("false",function(){this.assert(!1===x(this,"object"),"expected #{this} to be false","expected #{this} to be true",!!this.negate)}),w.addProperty("null",function(){this.assert(null===x(this,"object"),"expected #{this} to be null","expected #{this} not to be null")}),w.addProperty("undefined",function(){this.assert(void 0===x(this,"object"),"expected #{this} to be undefined","expected #{this} not to be undefined")}),w.addProperty("exist",function(){this.assert(null!=x(this,"object"),"expected #{this} to exist","expected #{this} to not exist")}),w.addProperty("empty",function(){var a=x(this,"object"),b=a;Array.isArray(a)||"string"==typeof object?b=a.length:"object"==typeof a&&(b=Object.keys(a).length),this.assert(!b,"expected #{this} to be empty","expected #{this} not to be empty")}),w.addProperty("arguments",f),w.addProperty("Arguments",f),w.addMethod("equal",g),w.addMethod("equals",g),w.addMethod("eq",g),w.addMethod("eql",h),w.addMethod("eqls",h),w.addMethod("above",i),w.addMethod("gt",i),w.addMethod("greaterThan",i),w.addMethod("least",j),w.addMethod("gte",j),w.addMethod("below",k),w.addMethod("lt",k),w.addMethod("lessThan",k),w.addMethod("most",l),w.addMethod("lte",l),w.addMethod("within",function(a,b,c){c&&x(this,"message",c);var d=x(this,"object"),e=a+".."+b;if(x(this,"doLength")){new w(d,c).to.have.property("length");var f=d.length;this.assert(f>=a&&f<=b,"expected #{this} to have a length within "+e,"expected #{this} to not have a length within "+e)}else this.assert(d>=a&&d<=b,"expected #{this} to be within "+e,"expected #{this} to not be within "+e)}),w.addMethod("instanceof",m),w.addMethod("instanceOf",m),w.addMethod("property",function(a,c,d){d&&x(this,"message",d);var e=!!x(this,"deep"),f=e?"deep property ":"property ",g=x(this,"negate"),h=x(this,"object"),i=e?b.getPathInfo(a,h):null,j=e?i.exists:b.hasProperty(a,h),k=e?i.value:h[a];if(g&&void 0!==c){if(void 0===k)throw d=null!=d?d+": ":"",new Error(d+b.inspect(h)+" has no "+f+b.inspect(a))}else this.assert(j,"expected #{this} to have a "+f+b.inspect(a),"expected #{this} to not have "+f+b.inspect(a));void 0!==c&&this.assert(c===k,"expected #{this} to have a "+f+b.inspect(a)+" of #{exp}, but got #{act}","expected #{this} to not have a "+f+b.inspect(a)+" of #{act}",c,k),x(this,"object",k)}),w.addMethod("ownProperty",n),w.addMethod("haveOwnProperty",n),w.addChainableMethod("length",p,o),w.addMethod("lengthOf",p),w.addMethod("match",function(a,b){b&&x(this,"message",b);var c=x(this,"object");this.assert(a.exec(c),"expected #{this} to match "+a,"expected #{this} not to match "+a)}),w.addMethod("string",function(a,c){c&&x(this,"message",c);var d=x(this,"object");new w(d,c).is.a("string"),this.assert(~d.indexOf(a),"expected #{this} to contain "+b.inspect(a),"expected #{this} to not contain "+b.inspect(a))}),w.addMethod("keys",q),w.addMethod("key",q),w.addMethod("throw",r),w.addMethod("throws",r),w.addMethod("Throw",r),w.addMethod("respondTo",function(a,c){c&&x(this,"message",c);var d=x(this,"object"),e=x(this,"itself"),f="function"!==b.type(d)||e?d[a]:d.prototype[a];this.assert("function"==typeof f,"expected #{this} to respond to "+b.inspect(a),"expected #{this} to not respond to "+b.inspect(a))}),w.addProperty("itself",function(){x(this,"itself",!0)}),w.addMethod("satisfy",function(a,c){c&&x(this,"message",c);var d=x(this,"object"),e=a(d);this.assert(e,"expected #{this} to satisfy "+b.objDisplay(a),"expected #{this} to not satisfy"+b.objDisplay(a),!this.negate,e)}),w.addMethod("closeTo",function(a,c,d){d&&x(this,"message",d);var e=x(this,"object");if(new w(e,d).is.a("number"),"number"!==b.type(a)||"number"!==b.type(c))throw new Error("the arguments to closeTo must be numbers");this.assert(Math.abs(e-a)<=c,"expected #{this} to be close to "+a+" +/- "+c,"expected #{this} not to be close to "+a+" +/- "+c)}),w.addMethod("members",function(a,c){c&&x(this,"message",c);var d=x(this,"object");new w(d).to.be.an("array"),new w(a).to.be.an("array");var e=x(this,"deep")?b.eql:void 0;return x(this,"contains")?this.assert(s(a,d,e),"expected #{this} to be a superset of #{act}","expected #{this} to not be a superset of #{act}",d,a):void this.assert(s(d,a,e)&&s(a,d,e),"expected #{this} to have the same members as #{act}","expected #{this} to not have the same members as #{act}",d,a)}),w.addChainableMethod("change",t),w.addChainableMethod("changes",t),w.addChainableMethod("increase",u),w.addChainableMethod("increases",u),w.addChainableMethod("decrease",v),w.addChainableMethod("decreases",v)}}),require.register("chai/lib/chai/interface/assert.js",function(exports,module){module.exports=function(chai,util){var Assertion=chai.Assertion,flag=util.flag,assert=chai.assert=function(a,b){var c=new Assertion(null,null,chai.assert);c.assert(a,b,"[ negation message unavailable ]")};assert.fail=function(a,b,c,d){throw c=c||"assert.fail()",new chai.AssertionError(c,{actual:a,expected:b,operator:d},assert.fail)},assert.ok=function(a,b){new Assertion(a,b).is.ok},assert.notOk=function(a,b){new Assertion(a,b).is.not.ok},assert.equal=function(a,b,c){var d=new Assertion(a,c,assert.equal);d.assert(b==flag(d,"object"),"expected #{this} to equal #{exp}","expected #{this} to not equal #{act}",b,a)},assert.notEqual=function(a,b,c){var d=new Assertion(a,c,assert.notEqual);d.assert(b!=flag(d,"object"),"expected #{this} to not equal #{exp}","expected #{this} to equal #{act}",b,a)},assert.strictEqual=function(a,b,c){new Assertion(a,c).to.equal(b)},assert.notStrictEqual=function(a,b,c){new Assertion(a,c).to.not.equal(b)},assert.deepEqual=function(a,b,c){new Assertion(a,c).to.eql(b)},assert.notDeepEqual=function(a,b,c){new Assertion(a,c).to.not.eql(b)},assert.isAbove=function(a,b,c){new Assertion(a,c).to.be.above(b)},assert.isBelow=function(a,b,c){new Assertion(a,c).to.be.below(b)},assert.isTrue=function(a,b){new Assertion(a,b).is.true},assert.isFalse=function(a,b){new Assertion(a,b).is.false},assert.isNull=function(a,b){new Assertion(a,b).to.equal(null)},assert.isNotNull=function(a,b){new Assertion(a,b).to.not.equal(null)},assert.isUndefined=function(a,b){new Assertion(a,b).to.equal(void 0)},assert.isDefined=function(a,b){new Assertion(a,b).to.not.equal(void 0)},assert.isFunction=function(a,b){new Assertion(a,b).to.be.a("function")},assert.isNotFunction=function(a,b){new Assertion(a,b).to.not.be.a("function")},assert.isObject=function(a,b){new Assertion(a,b).to.be.a("object")},assert.isNotObject=function(a,b){new Assertion(a,b).to.not.be.a("object")},assert.isArray=function(a,b){new Assertion(a,b).to.be.an("array")},assert.isNotArray=function(a,b){new Assertion(a,b).to.not.be.an("array")},assert.isString=function(a,b){new Assertion(a,b).to.be.a("string")},assert.isNotString=function(a,b){new Assertion(a,b).to.not.be.a("string")},assert.isNumber=function(a,b){new Assertion(a,b).to.be.a("number")},assert.isNotNumber=function(a,b){new Assertion(a,b).to.not.be.a("number")},assert.isBoolean=function(a,b){new Assertion(a,b).to.be.a("boolean")},assert.isNotBoolean=function(a,b){new Assertion(a,b).to.not.be.a("boolean")},assert.typeOf=function(a,b,c){new Assertion(a,c).to.be.a(b)},assert.notTypeOf=function(a,b,c){new Assertion(a,c).to.not.be.a(b)},assert.instanceOf=function(a,b,c){new Assertion(a,c).to.be.instanceOf(b)},assert.notInstanceOf=function(a,b,c){new Assertion(a,c).to.not.be.instanceOf(b)},assert.include=function(a,b,c){new Assertion(a,c,assert.include).include(b)},assert.notInclude=function(a,b,c){new Assertion(a,c,assert.notInclude).not.include(b)},assert.match=function(a,b,c){new Assertion(a,c).to.match(b)},assert.notMatch=function(a,b,c){new Assertion(a,c).to.not.match(b)},assert.property=function(a,b,c){new Assertion(a,c).to.have.property(b)},assert.notProperty=function(a,b,c){new Assertion(a,c).to.not.have.property(b)},assert.deepProperty=function(a,b,c){new Assertion(a,c).to.have.deep.property(b)},assert.notDeepProperty=function(a,b,c){new Assertion(a,c).to.not.have.deep.property(b)},assert.propertyVal=function(a,b,c,d){new Assertion(a,d).to.have.property(b,c)},assert.propertyNotVal=function(a,b,c,d){new Assertion(a,d).to.not.have.property(b,c)},assert.deepPropertyVal=function(a,b,c,d){new Assertion(a,d).to.have.deep.property(b,c)},assert.deepPropertyNotVal=function(a,b,c,d){new Assertion(a,d).to.not.have.deep.property(b,c)},assert.lengthOf=function(a,b,c){new Assertion(a,c).to.have.length(b)},assert.Throw=function(a,b,c,d){("string"==typeof b||b instanceof RegExp)&&(c=b,b=null);var e=new Assertion(a,d).to.Throw(b,c);return flag(e,"object")},assert.doesNotThrow=function(a,b,c){"string"==typeof b&&(c=b,b=null),new Assertion(a,c).to.not.Throw(b)},assert.operator=function(val,operator,val2,msg){if(!~["==","===",">",">=","<","<=","!=","!=="].indexOf(operator))throw new Error('Invalid operator "'+operator+'"');var test=new Assertion(eval(val+operator+val2),msg);test.assert(!0===flag(test,"object"),"expected "+util.inspect(val)+" to be "+operator+" "+util.inspect(val2),"expected "+util.inspect(val)+" to not be "+operator+" "+util.inspect(val2))},assert.closeTo=function(a,b,c,d){new Assertion(a,d).to.be.closeTo(b,c)},assert.sameMembers=function(a,b,c){new Assertion(a,c).to.have.same.members(b)},assert.sameDeepMembers=function(a,b,c){new Assertion(a,c).to.have.same.deep.members(b)},assert.includeMembers=function(a,b,c){new Assertion(a,c).to.include.members(b)},assert.changes=function(a,b,c){new Assertion(a).to.change(b,c)},assert.doesNotChange=function(a,b,c){new Assertion(a).to.not.change(b,c)},assert.increases=function(a,b,c){new Assertion(a).to.increase(b,c)},assert.doesNotIncrease=function(a,b,c){new Assertion(a).to.not.increase(b,c)},assert.decreases=function(a,b,c){new Assertion(a).to.decrease(b,c)},assert.doesNotDecrease=function(a,b,c){new Assertion(a).to.not.decrease(b,c)},assert.ifError=function(a,b){new Assertion(a,b).to.not.be.ok},function a(b,c){return assert[c]=assert[b],a}("Throw","throw")("Throw","throws")}}),require.register("chai/lib/chai/interface/expect.js",function(a,b){b.exports=function(a,b){a.expect=function(b,c){return new a.Assertion(b,c)},a.expect.fail=function(b,c,d,e){throw d=d||"expect.fail()",new a.AssertionError(d,{actual:b,expected:c,operator:e},a.expect.fail)}}}),require.register("chai/lib/chai/interface/should.js",function(a,b){b.exports=function(a,b){function c(){function b(){return this instanceof String||this instanceof Number?new d(this.constructor(this),null,b):this instanceof Boolean?new d(1==this,null,b):new d(this,null,b)}function c(a){Object.defineProperty(this,"should",{value:a,enumerable:!0,configurable:!0,writable:!0})}Object.defineProperty(Object.prototype,"should",{set:c,get:b,configurable:!0});var e={};return e.fail=function(b,c,d,f){throw d=d||"should.fail()",new a.AssertionError(d,{actual:b,expected:c,operator:f},e.fail)},e.equal=function(a,b,c){new d(a,c).to.equal(b)},e.Throw=function(a,b,c,e){new d(a,e).to.Throw(b,c)},e.exist=function(a,b){new d(a,b).to.exist},e.not={},e.not.equal=function(a,b,c){new d(a,c).to.not.equal(b)},e.not.Throw=function(a,b,c,e){new d(a,e).to.not.Throw(b,c)},e.not.exist=function(a,b){new d(a,b).to.not.exist},e.throw=e.Throw,e.not.throw=e.not.Throw,e}var d=a.Assertion;a.should=c,a.Should=c}}),require.register("chai/lib/chai/utils/addChainableMethod.js",function(a,b){var c=require("chai/lib/chai/utils/transferFlags.js"),d=require("chai/lib/chai/utils/flag.js"),e=require("chai/lib/chai/config.js"),f="__proto__"in Object,g=/^(?:length|name|arguments|caller)$/,h=Function.prototype.call,i=Function.prototype.apply;b.exports=function(a,b,j,k){"function"!=typeof k&&(k=function(){});var l={method:j,chainingBehavior:k};a.__methods||(a.__methods={}),a.__methods[b]=l,Object.defineProperty(a,b,{get:function(){l.chainingBehavior.call(this);var b=function a(){var b=d(this,"ssfi");b&&e.includeStack===!1&&d(this,"ssfi",a);var c=l.method.apply(this,arguments);return void 0===c?this:c};if(f){var j=b.__proto__=Object.create(this);j.call=h,j.apply=i}else{var k=Object.getOwnPropertyNames(a);k.forEach(function(c){if(!g.test(c)){var d=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(b,c,d)}})}return c(this,b),b},configurable:!0})}}),require.register("chai/lib/chai/utils/addMethod.js",function(a,b){var c=require("chai/lib/chai/config.js"),d=require("chai/lib/chai/utils/flag.js");b.exports=function(a,b,e){a[b]=function(){var f=d(this,"ssfi");f&&c.includeStack===!1&&d(this,"ssfi",a[b]);var g=e.apply(this,arguments);return void 0===g?this:g}}}),require.register("chai/lib/chai/utils/addProperty.js",function(a,b){b.exports=function(a,b,c){Object.defineProperty(a,b,{get:function(){var a=c.call(this);return void 0===a?this:a},configurable:!0})}}),require.register("chai/lib/chai/utils/flag.js",function(a,b){b.exports=function(a,b,c){var d=a.__flags||(a.__flags=Object.create(null));return 3!==arguments.length?d[b]:void(d[b]=c)}}),require.register("chai/lib/chai/utils/getActual.js",function(a,b){b.exports=function(a,b){return b.length>4?b[4]:a._obj}}),require.register("chai/lib/chai/utils/getEnumerableProperties.js",function(a,b){b.exports=function(a){var b=[];for(var c in a)b.push(c);return b}}),require.register("chai/lib/chai/utils/getMessage.js",function(a,b){var c=require("chai/lib/chai/utils/flag.js"),d=require("chai/lib/chai/utils/getActual.js"),e=(require("chai/lib/chai/utils/inspect.js"),require("chai/lib/chai/utils/objDisplay.js"));b.exports=function(a,b){var f=c(a,"negate"),g=c(a,"object"),h=b[3],i=d(a,b),j=f?b[2]:b[1],k=c(a,"message");return"function"==typeof j&&(j=j()),j=j||"",j=j.replace(/#{this}/g,e(g)).replace(/#{act}/g,e(i)).replace(/#{exp}/g,e(h)),k?k+": "+j:j}}),require.register("chai/lib/chai/utils/getName.js",function(a,b){b.exports=function(a){if(a.name)return a.name;var b=/^\s?function ([^(]*)\(/.exec(a);return b&&b[1]?b[1]:""}}),require.register("chai/lib/chai/utils/getPathValue.js",function(a,b){var c=require("chai/lib/chai/utils/getPathInfo.js");b.exports=function(a,b){var d=c(a,b);return d.value}}),require.register("chai/lib/chai/utils/getPathInfo.js",function(a,b){function c(a){var b=a.replace(/\[/g,".["),c=b.match(/(\\\.|[^.]+?)+/g);return c.map(function(a){var b=/\[(\d+)\]$/,c=b.exec(a);return c?{i:parseFloat(c[1])}:{p:a}})}function d(a,b,c){var d,e=b;c=void 0===c?a.length:c;for(var f=0,g=c;f<g;f++){var h=a[f];e?("undefined"!=typeof h.p?e=e[h.p]:"undefined"!=typeof h.i&&(e=e[h.i]),f==g-1&&(d=e)):d=void 0}return d}var e=require("chai/lib/chai/utils/hasProperty.js");b.exports=function(a,b){var f=c(a),g=f[f.length-1],h={parent:d(f,b,f.length-1),name:g.p||g.i,value:d(f,b)};return h.exists=e(h.name,h.parent),h}}),require.register("chai/lib/chai/utils/hasProperty.js",function(a,b){var c=require("chai/lib/chai/utils/type.js"),d={number:Number,string:String};b.exports=function(a,b){var e=c(b);return"null"!==e&&"undefined"!==e&&(d[e]&&"object"!=typeof b&&(b=new d[e](b)),a in b)}}),require.register("chai/lib/chai/utils/getProperties.js",function(a,b){b.exports=function(a){function b(a){c.indexOf(a)===-1&&c.push(a)}for(var c=Object.getOwnPropertyNames(subject),d=Object.getPrototypeOf(subject);null!==d;)Object.getOwnPropertyNames(d).forEach(b),d=Object.getPrototypeOf(d);return c}}),require.register("chai/lib/chai/utils/index.js",function(a,b){var a=b.exports={};a.test=require("chai/lib/chai/utils/test.js"),a.type=require("chai/lib/chai/utils/type.js"),a.getMessage=require("chai/lib/chai/utils/getMessage.js"),a.getActual=require("chai/lib/chai/utils/getActual.js"),a.inspect=require("chai/lib/chai/utils/inspect.js"),a.objDisplay=require("chai/lib/chai/utils/objDisplay.js"),a.flag=require("chai/lib/chai/utils/flag.js"),a.transferFlags=require("chai/lib/chai/utils/transferFlags.js"),a.eql=require("chaijs~deep-eql@0.1.3"),a.getPathValue=require("chai/lib/chai/utils/getPathValue.js"),a.getPathInfo=require("chai/lib/chai/utils/getPathInfo.js"),a.hasProperty=require("chai/lib/chai/utils/hasProperty.js"),a.getName=require("chai/lib/chai/utils/getName.js"),a.addProperty=require("chai/lib/chai/utils/addProperty.js"),a.addMethod=require("chai/lib/chai/utils/addMethod.js"),a.overwriteProperty=require("chai/lib/chai/utils/overwriteProperty.js"),a.overwriteMethod=require("chai/lib/chai/utils/overwriteMethod.js"),a.addChainableMethod=require("chai/lib/chai/utils/addChainableMethod.js"),a.overwriteChainableMethod=require("chai/lib/chai/utils/overwriteChainableMethod.js")}),require.register("chai/lib/chai/utils/inspect.js",function(a,b){function c(a,b,c,e){var f={showHidden:b,seen:[],stylize:function(a){return a}};return d(f,a,"undefined"==typeof c?2:c)}function d(b,c,n){if(c&&"function"==typeof c.inspect&&c.inspect!==a.inspect&&(!c.constructor||c.constructor.prototype!==c)){var s=c.inspect(n);return"string"!=typeof s&&(s=d(b,s,n)),s}var t=e(b,c);if(t)return t;if(r(c)){if("outerHTML"in c)return c.outerHTML;try{if(document.xmlVersion){var u=new XMLSerializer;return u.serializeToString(c)}var v="http://www.w3.org/1999/xhtml",w=document.createElementNS(v,"_");return w.appendChild(c.cloneNode(!1)),html=w.innerHTML.replace("><",">"+c.innerHTML+"<"),w.innerHTML="",html}catch(a){}}var x=q(c),y=b.showHidden?p(c):x;if(0===y.length||m(c)&&(1===y.length&&"stack"===y[0]||2===y.length&&"description"===y[0]&&"stack"===y[1])){if("function"==typeof c){var z=o(c),A=z?": "+z:"";return b.stylize("[Function"+A+"]","special")}if(k(c))return b.stylize(RegExp.prototype.toString.call(c),"regexp");if(l(c))return b.stylize(Date.prototype.toUTCString.call(c),"date");if(m(c))return f(c)}var B="",C=!1,D=["{","}"];if(j(c)&&(C=!0,
D=["[","]"]),"function"==typeof c){var z=o(c),A=z?": "+z:"";B=" [Function"+A+"]"}if(k(c)&&(B=" "+RegExp.prototype.toString.call(c)),l(c)&&(B=" "+Date.prototype.toUTCString.call(c)),m(c))return f(c);if(0===y.length&&(!C||0==c.length))return D[0]+B+D[1];if(n<0)return k(c)?b.stylize(RegExp.prototype.toString.call(c),"regexp"):b.stylize("[Object]","special");b.seen.push(c);var E;return E=C?g(b,c,n,x,y):y.map(function(a){return h(b,c,n,x,a,C)}),b.seen.pop(),i(E,B,D)}function e(a,b){switch(typeof b){case"undefined":return a.stylize("undefined","undefined");case"string":var c="'"+JSON.stringify(b).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'";return a.stylize(c,"string");case"number":return 0===b&&1/b===-(1/0)?a.stylize("-0","number"):a.stylize(""+b,"number");case"boolean":return a.stylize(""+b,"boolean")}if(null===b)return a.stylize("null","null")}function f(a){return"["+Error.prototype.toString.call(a)+"]"}function g(a,b,c,d,e){for(var f=[],g=0,i=b.length;g<i;++g)Object.prototype.hasOwnProperty.call(b,String(g))?f.push(h(a,b,c,d,String(g),!0)):f.push("");return e.forEach(function(e){e.match(/^\d+$/)||f.push(h(a,b,c,d,e,!0))}),f}function h(a,b,c,e,f,g){var h,i;if(b.__lookupGetter__&&(b.__lookupGetter__(f)?i=b.__lookupSetter__(f)?a.stylize("[Getter/Setter]","special"):a.stylize("[Getter]","special"):b.__lookupSetter__(f)&&(i=a.stylize("[Setter]","special"))),e.indexOf(f)<0&&(h="["+f+"]"),i||(a.seen.indexOf(b[f])<0?(i=null===c?d(a,b[f],null):d(a,b[f],c-1),i.indexOf("\n")>-1&&(i=g?i.split("\n").map(function(a){return"  "+a}).join("\n").substr(2):"\n"+i.split("\n").map(function(a){return"   "+a}).join("\n"))):i=a.stylize("[Circular]","special")),"undefined"==typeof h){if(g&&f.match(/^\d+$/))return i;h=JSON.stringify(""+f),h.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)?(h=h.substr(1,h.length-2),h=a.stylize(h,"name")):(h=h.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'"),h=a.stylize(h,"string"))}return h+": "+i}function i(a,b,c){var d=0,e=a.reduce(function(a,b){return d++,b.indexOf("\n")>=0&&d++,a+b.length+1},0);return e>60?c[0]+(""===b?"":b+"\n ")+" "+a.join(",\n  ")+" "+c[1]:c[0]+b+" "+a.join(", ")+" "+c[1]}function j(a){return Array.isArray(a)||"object"==typeof a&&"[object Array]"===n(a)}function k(a){return"object"==typeof a&&"[object RegExp]"===n(a)}function l(a){return"object"==typeof a&&"[object Date]"===n(a)}function m(a){return"object"==typeof a&&"[object Error]"===n(a)}function n(a){return Object.prototype.toString.call(a)}var o=require("chai/lib/chai/utils/getName.js"),p=require("chai/lib/chai/utils/getProperties.js"),q=require("chai/lib/chai/utils/getEnumerableProperties.js");b.exports=c;var r=function(a){return"object"==typeof HTMLElement?a instanceof HTMLElement:a&&"object"==typeof a&&1===a.nodeType&&"string"==typeof a.nodeName}}),require.register("chai/lib/chai/utils/objDisplay.js",function(a,b){var c=require("chai/lib/chai/utils/inspect.js"),d=require("chai/lib/chai/config.js");b.exports=function(a){var b=c(a),e=Object.prototype.toString.call(a);if(d.truncateThreshold&&b.length>=d.truncateThreshold){if("[object Function]"===e)return a.name&&""!==a.name?"[Function: "+a.name+"]":"[Function]";if("[object Array]"===e)return"[ Array("+a.length+") ]";if("[object Object]"===e){var f=Object.keys(a),g=f.length>2?f.splice(0,2).join(", ")+", ...":f.join(", ");return"{ Object ("+g+") }"}return b}return b}}),require.register("chai/lib/chai/utils/overwriteMethod.js",function(a,b){b.exports=function(a,b,c){var d=a[b],e=function(){return this};d&&"function"==typeof d&&(e=d),a[b]=function(){var a=c(e).apply(this,arguments);return void 0===a?this:a}}}),require.register("chai/lib/chai/utils/overwriteProperty.js",function(a,b){b.exports=function(a,b,c){var d=Object.getOwnPropertyDescriptor(a,b),e=function(){};d&&"function"==typeof d.get&&(e=d.get),Object.defineProperty(a,b,{get:function(){var a=c(e).call(this);return void 0===a?this:a},configurable:!0})}}),require.register("chai/lib/chai/utils/overwriteChainableMethod.js",function(a,b){b.exports=function(a,b,c,d){var e=a.__methods[b],f=e.chainingBehavior;e.chainingBehavior=function(){var a=d(f).call(this);return void 0===a?this:a};var g=e.method;e.method=function(){var a=c(g).apply(this,arguments);return void 0===a?this:a}}}),require.register("chai/lib/chai/utils/test.js",function(a,b){var c=require("chai/lib/chai/utils/flag.js");b.exports=function(a,b){var d=c(a,"negate"),e=b[0];return d?!e:e}}),require.register("chai/lib/chai/utils/transferFlags.js",function(a,b){b.exports=function(a,b,c){var d=a.__flags||(a.__flags=Object.create(null));b.__flags||(b.__flags=Object.create(null)),c=3!==arguments.length||c;for(var e in d)(c||"object"!==e&&"ssfi"!==e&&"message"!=e)&&(b.__flags[e]=d[e])}}),require.register("chai/lib/chai/utils/type.js",function(a,b){var c={"[object Arguments]":"arguments","[object Array]":"array","[object Date]":"date","[object Function]":"function","[object Number]":"number","[object RegExp]":"regexp","[object String]":"string"};b.exports=function(a){var b=Object.prototype.toString.call(a);return c[b]?c[b]:null===a?"null":void 0===a?"undefined":a===Object(a)?"object":typeof a}}),"object"==typeof exports?module.exports=require("chai"):"function"==typeof define&&define.amd?define("chai",[],function(){return require("chai")}):(this||window).chai=require("chai")}();