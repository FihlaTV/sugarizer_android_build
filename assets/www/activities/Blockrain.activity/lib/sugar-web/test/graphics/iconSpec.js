/*! Sugarizer 2018-05-08 */
define(["sugar-web/graphics/icon"],function(a){"use strict";describe("icon",function(){var b,c;it("should be able to change icon more than once",function(){function d(a){c=a,b=!0}var e;document.createElement("div");runs(function(){b=!1,e="/base/graphics/icons/actions/dialog-ok-active.svg";var c={uri:e,strokeColor:"#B20008",fillColor:"#FF2B34"};a.load(c,d)}),waitsFor(function(){return b},"icon loaded"),runs(function(){expect(c).not.toBe(e)}),runs(function(){b=!1,e=c;var f={uri:e,strokeColor:"#FF2B34",fillColor:"#B20008"};a.load(f,d)}),waitsFor(function(){return b},"icon loaded"),runs(function(){expect(c).not.toBe(e)})})})});