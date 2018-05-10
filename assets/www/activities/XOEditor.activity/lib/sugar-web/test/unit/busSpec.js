/*! Sugarizer 2018-05-08 */
define(["sugar-web/bus"],function(a){"use strict";describe("bus requests",function(){function b(){this.result=[],this.error=null}var c;b.prototype.send=function(a){var b=this;setTimeout(function(){var c=JSON.parse(a),d={data:JSON.stringify({result:b.result,error:b.error,id:c.id})};b.onMessage(d)},0)},b.prototype.close=function(){},beforeEach(function(){c=new b,a.listen(c)}),afterEach(function(){a.close(),c=null}),it("should receive a response",function(){var b;runs(function(){function d(a,c){expect(a).toBeNull(),expect(c).toEqual(["hello"]),b=!0}b=!1,c.result=["hello"],a.sendMessage("hello",[],d)}),waitsFor(function(){return b},"a response should be received")}),it("should receive an error",function(){var b;runs(function(){function d(a,c){expect(a).toEqual(jasmine.any(Error)),expect(c).toBeNull(),b=!0}b=!1,c.result=null,c.error=new Error("error"),a.sendMessage("hello",[],d)}),waitsFor(function(){return b},"an error should be received")})}),describe("bus notifications",function(){function b(){this.params=null}var c;b.prototype.send_notification=function(a,b){var c=this;setTimeout(function(){var b={data:JSON.stringify({method:a,params:c.params})};c.onMessage(b)},0)},b.prototype.close=function(){},beforeEach(function(){c=new b,a.listen(c)}),afterEach(function(){a.close(),c=null}),it("should receive a notification",function(){var b,d,e={param1:!0,param2:"foo"};runs(function(){function f(a){b=!0,d=a}b=!1,d=null,a.onNotification("hey.there",f),c.params=e,c.send_notification("hey.there")}),waitsFor(function(){return b},"a notification should be received"),runs(function(){expect(d).toEqual(e)})})})});