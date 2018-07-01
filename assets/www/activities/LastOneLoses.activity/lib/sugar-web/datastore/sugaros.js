/*! Sugarizer 2018-07-01 */
define(["sugar-web/bus","sugar-web/env"],function(a,b){"use strict";function c(a){this.objectId=a,this.newMetadata={},this.ensureObjectId=function(a){var c=this;b.getObjectId(function(b){null!==b&&void 0===c.objectId&&(c.objectId=b),a()})},this.blobToText=function(a,b){var c=new FileReader;c.onload=function(a){b(a.target.result)},c.readAsText(a)},this.blobToArrayBuffer=function(a,b){var c=new FileReader;c.onload=function(a){b(a.target.result)},c.readAsArrayBuffer(a)},this.saveText=function(a,b){function c(a,c){var d=new Blob([e.newDataAsText]);e.blobToArrayBuffer(d,function(a){c.write(a),c.close(b)})}var e=this;d.save(this.objectId,a,c)},this.applyChanges=function(a,b){for(var c in this.newMetadata)a[c]=this.newMetadata[c];void 0!==this.newDataAsText?this.saveText(a,b):d.setMetadata(this.objectId,a,b)}}var d={};return c.prototype.getMetadata=function(a){var b=this;this.ensureObjectId(function(){d.getMetadata(b.objectId,a)})},c.prototype.loadAsText=function(a){function b(c,d){if(0===d.byteLength){var i=new Blob(g);return e.blobToText(i,function(b){a(null,h,b)}),void f.close()}g.push(d),f.read(8192,b)}function c(a,c,d){h=c,f=d,f.read(8192,b)}var e=this,f=null,g=[],h=null;this.ensureObjectId(function(){d.load(e.objectId,c)})},c.prototype.setMetadata=function(a){for(var b in a)this.newMetadata[b]=a[b]},c.prototype.setDataAsText=function(a){this.newDataAsText=a},c.prototype.save=function(a){function b(b,c){e.objectId=c,e.applyChanges({},a)}function c(b,c){e.applyChanges(c,a)}void 0===a&&(a=function(){});var e=this;this.ensureObjectId(function(){void 0===e.objectId?d.create(e.newMetadata,b):d.getMetadata(e.objectId,c)})},d.DatastoreObject=c,d.setMetadata=function(b,c,d){function e(a,b){d&&d(null===a?null:a)}var f=[b,c];a.sendMessage("datastore.set_metadata",f,e)},d.getMetadata=function(b,c){function d(a,b){null===a?c(null,b[0]):c(a,null)}var e=[b];a.sendMessage("datastore.get_metadata",e,d)},d.load=function(b,c){var d=a.createInputStream();d.open(function(e){function f(a,b){null===a?c(null,b[0],d):c(a,null,null)}var g=[b,d.streamId];a.sendMessage("datastore.load",g,f)})},d.create=function(b,c){function d(a,b){null===a?c(null,b[0]):c(a,null)}var e=[b];a.sendMessage("datastore.create",e,d)},d.save=function(b,c,d){var e=a.createOutputStream();e.open(function(f){function g(a,b){null===a?d(null,e):d(a,null)}var h=[b,c,e.streamId];a.sendMessage("datastore.save",h,g)})},d});