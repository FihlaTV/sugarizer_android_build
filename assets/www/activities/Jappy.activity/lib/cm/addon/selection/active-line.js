/*! Sugarizer 2017-09-04 */
!function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function b(a){for(var b=0;b<a.state.activeLines.length;b++)a.removeLineClass(a.state.activeLines[b],"wrap",f),a.removeLineClass(a.state.activeLines[b],"background",g),a.removeLineClass(a.state.activeLines[b],"gutter",h)}function c(a,b){if(a.length!=b.length)return!1;for(var c=0;c<a.length;c++)if(a[c]!=b[c])return!1;return!0}function d(a,d){for(var e=[],i=0;i<d.length;i++){var j=d[i],k=a.getOption("styleActiveLine");if("object"==typeof k&&k.nonEmpty?j.anchor.line==j.head.line:j.empty()){var l=a.getLineHandleVisualStart(j.head.line);e[e.length-1]!=l&&e.push(l)}}c(a.state.activeLines,e)||a.operation(function(){b(a);for(var c=0;c<e.length;c++)a.addLineClass(e[c],"wrap",f),a.addLineClass(e[c],"background",g),a.addLineClass(e[c],"gutter",h);a.state.activeLines=e})}function e(a,b){d(a,b.ranges)}var f="CodeMirror-activeline",g="CodeMirror-activeline-background",h="CodeMirror-activeline-gutter";a.defineOption("styleActiveLine",!1,function(c,f,g){var h=g!=a.Init&&g;f!=h&&(h&&(c.off("beforeSelectionChange",e),b(c),delete c.state.activeLines),f&&(c.state.activeLines=[],d(c,c.listSelections()),c.on("beforeSelectionChange",e)))})});