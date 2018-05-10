/*! Sugarizer 2018-05-08 */
define(["sugar-web/bus","sugar-web/env"],function(a,b){"use strict";function c(a){this.objectId=a,this.newMetadata={},this.newDataAsText=null,this.toload=!1,h||b.getEnvironment(function(){h=!0});if(void 0===this.objectId){var c=window.top.sugar.environment.objectId;null!=c&&(this.objectId=c,this.toload=!0)}}var d={},e={},f="sugar_datastore_",g="sugar_datastoretext_",h=!1;d.getUrlParameter=function(a){var b=RegExp("[?&]"+a+"=([^&]*)").exec(window.location.search);return b&&decodeURIComponent(b[1].replace(/\+/g," "))},d.createUUID=function(){for(var a=[],b="0123456789abcdef",c=0;c<36;c++)a[c]=b.substr(Math.floor(16*Math.random()),1);a[14]="4",a[19]=b.substr(3&a[19]|8,1),a[8]=a[13]=a[18]=a[23]="-";var d=a.join("");return d},d.callbackChecker=function(a){return void 0!==a&&null!==a||(a=function(){}),a},d.create=function(a,b,c){var h=d.callbackChecker(b),i=d.createUUID();if(void 0!==c){if(!e.setValue(g+i,c))return void h(-1,null);a.textsize=c.length}var j=e.getValue("sugar_settings");j&&(a.buddy_name=j.name,a.buddy_color=j.colorvalue),e.setValue(f+i,{metadata:a,text:void 0===c?null:{link:g+i}})?h(null,i):h(-1,null)},d.find=function(a){var b=[];if(!e.test())return b;for(var c in e.getAll())if(c.substr(0,f.length)==f){var d=e.getValue(c);d.objectId=c.substr(f.length),void 0!==a&&d.metadata.activity!=a||b.push(d)}return b},d.remove=function(a){e.removeValue(f+a),e.removeValue(g+a)},c.prototype.getMetadata=function(a){var b=d.callbackChecker(a),c=e.getValue(f+this.objectId);null!=c&&(this.setMetadata(c.metadata),this.toload=!1,b(null,c.metadata))},c.prototype.loadAsText=function(a){var b=d.callbackChecker(a),c=this;e.waitEndOfLoad(function(){var a=e.getValue(f+c.objectId);if(null!=a){c.setMetadata(a.metadata);var d=null;a.text&&(d=e.getValue(g+c.objectId),c.setDataAsText(d)),c.toload=!1,b(null,a.metadata,d)}})},c.prototype.setMetadata=function(a){for(var b in a)this.newMetadata[b]=a[b]},c.prototype.setDataAsText=function(a){this.newDataAsText=a},c.prototype.save=function(a,b){if(void 0===this.objectId){var c=this;this.newMetadata.timestamp=this.newMetadata.creation_time=(new Date).getTime(),this.newMetadata.file_size=0,d.create(this.newMetadata,function(a,b){null==a&&(c.objectId=b)})}else this.toload&&(this.getMetadata(null),this.toload=!1);var h=d.callbackChecker(a);b||(this.newMetadata.timestamp=(new Date).getTime());var i=e.getValue("sugar_settings");if(i&&!b&&(this.newMetadata.buddy_name=i.name,this.newMetadata.buddy_color=i.colorvalue),null!=this.newDataAsText){if(!e.setValue(g+this.objectId,this.newDataAsText))return void h(-1,null);b||(this.newMetadata.textsize=this.newDataAsText.length)}e.setValue(f+this.objectId,{metadata:this.newMetadata,text:void 0===this.newDataAsText?null:{link:g+this.objectId}})?h(null,this.newMetadata,this.newDataAsText):h(-1,null)},d.DatastoreObject=c,d.localStorage=e;var i=[];return e.load=function(a){if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime){var b=this;if(0!=i.length)return void i.push(a);i.push(a),chrome.storage.local.get(null,function(a){b.values=a;for(var c=0;c<i.length;c++)i[c]&&i[c]();i=[]})}else a&&a()},e.load(),e.waitEndOfLoad=function(a){return"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime&&0!=i.length?void i.push(a):void(a&&a())},e.test=function(){return!("undefined"==typeof chrome||!chrome.app||!chrome.app.runtime)||"undefined"!=typeof Storage&&"undefined"!=typeof window.localStorage},e.setValue=function(a,b){if(this.test())try{if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime){this.values[a]=JSON.stringify(b);var c={};c[a]=this.values[a],chrome.storage.local.set(c,function(){chrome.runtime.lastError&&console.log("ERROR: Unable to update local storage")})}else window.localStorage.setItem(a,JSON.stringify(b));return!0}catch(a){return console.log("ERROR: Unable to update local storage"),!1}},e.getValue=function(a){if(this.test())try{return"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?JSON.parse(this.values[a]):JSON.parse(window.localStorage.getItem(a))}catch(a){return null}return null},e.removeValue=function(a){if(this.test())try{"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?(this.values[a]=null,chrome.storage.local.remove(a)):window.localStorage.removeItem(a)}catch(a){}},e.getAll=function(){if(this.test())try{return"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?this.values:window.localStorage}catch(a){return null}return null},d});