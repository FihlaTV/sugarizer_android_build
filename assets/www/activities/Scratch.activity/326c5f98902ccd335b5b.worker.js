/*! Sugarizer 2019-09-21 */
!function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&"object"==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:a}),2&c&&"string"!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(c,"a",c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s="./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js")}({"./node_modules/babel-loader/lib/index.js?!./node_modules/scratch-storage/src/FetchWorkerTool.worker.js":function(a,b){var c=0,d=[],e=null,f=function(){e=setInterval(function(){d.length&&(postMessage(d.slice(),d.map(function(a){return a.buffer}).filter(Boolean)),d.length=0),0===c&&(clearInterval(e),e=null)},1)},g=function(a){var b=a.data;0!==c||e||f(),c++,fetch(b.url,b.options).then(function(a){return a.arrayBuffer()}).then(function(a){return d.push({id:b.id,buffer:a})}).catch(function(a){return d.push({id:b.id,error:a})}).then(function(){return c--})};self.fetch?(postMessage({support:{fetch:!0}}),self.addEventListener("message",g)):(postMessage({support:{fetch:!1}}),self.addEventListener("message",function(a){var b=a.data;postMessage([{id:b.id,error:new Error("fetch is unavailable")}])}))}});