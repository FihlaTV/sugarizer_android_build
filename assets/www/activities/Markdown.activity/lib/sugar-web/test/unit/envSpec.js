/*! Sugarizer 2017-09-04 */
define(["sugar-web/env"],function(a){"use strict";describe("getObjectId",function(){it("should return objectId from the sugar's environment",function(){var b={objectId:"objectId"};spyOn(a,"getEnvironment").andCallFake(function(a){setTimeout(function(){a(null,b)},0)});var c;runs(function(){a.getObjectId(function(a){c=a})}),waitsFor(function(){return void 0!==c},"should return objectId")})}),describe("standalone mode",function(){it("should return true if in standalone mode",function(){var b="http:";spyOn(a,"getURLScheme").andReturn(b);var c=a.isStandalone();expect(c).toBe(!0)}),it("should return false if not in standalone mode",function(){var b="activity:";spyOn(a,"getURLScheme").andReturn(b);var c=a.isStandalone();expect(c).toBe(!1)})}),describe("getEnvironment",function(){var b;beforeEach(function(){b=JSON.parse(JSON.stringify(window.top.sugar))}),afterEach(function(){window.top.sugar=b}),describe("in sugar mode",function(){beforeEach(function(){spyOn(a,"isStandalone").andReturn(!1)}),describe("when env was already set",function(){it("should run callback with null error and env",function(){var b={};window.top.sugar={environment:b};var c=jasmine.createSpy();runs(function(){a.getEnvironment(c)}),waitsFor(function(){return c.wasCalled},"callback should be executed"),runs(function(){expect(c).toHaveBeenCalledWith(null,b)})})}),describe("when env was not set, yet",function(){beforeEach(function(){window.top.sugar=void 0}),it("should set onEnvironmentSet handler",function(){var b;a.getEnvironment(function(){}),b=window.top.sugar,expect(b.onEnvironmentSet).not.toBeUndefined()}),it("should run callback on EnvironmentSet event",function(){var b=jasmine.createSpy(),c="env";a.getEnvironment(b),window.top.sugar.environment=c,window.top.sugar.onEnvironmentSet(),expect(b).toHaveBeenCalledWith(null,c)})})}),it("should return {} in standalone mode",function(){window.top.sugar=void 0,spyOn(a,"isStandalone").andReturn(!0);var b;runs(function(){a.getEnvironment(function(a,c){b=c})}),waitsFor(function(){return void 0!==b},"environment not to be undefined"),runs(function(){expect(b).toEqual({})})})})});