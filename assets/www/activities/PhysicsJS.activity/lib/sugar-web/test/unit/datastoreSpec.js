/*! Sugarizer 2017-09-04 */
define(["sugar-web/env","sugar-web/datastore"],function(a,b){"use strict";describe("Ensure the datastore object has an objectId",function(){it("should have objectId",function(){var c="objectId";spyOn(a,"getObjectId").andCallFake(function(a){setTimeout(function(){a(c)},0)});var d=jasmine.createSpy(),e=new b.DatastoreObject;runs(function(){e.ensureObjectId(d)}),waitsFor(function(){return void 0!==e.objectId},"should have objectId received from the environment"),runs(function(){expect(d).toHaveBeenCalled()})})})});