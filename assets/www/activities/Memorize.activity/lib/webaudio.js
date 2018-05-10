/*! Sugarizer 2018-05-08 */
window.AudioContext=window.AudioContext||window.webkitAudioContext,WebAudio=function(){if(WebAudio.isAvailable===!1)throw this._addRequiredMessage(),new Error("WebAudio API is required and not available.");this._ctx=new AudioContext,this._muted=!1,this._volume=1,this._gainNode=this._ctx.createGain(),this._compressor=this._ctx.createDynamicsCompressor(),this._gainNode.connect(this._compressor),this._compressor.connect(this._ctx.destination),this._pageVisibilityCtor()},WebAudio.fn=WebAudio.prototype,WebAudio.prototype.destroy=function(){this._pageVisibilityDtor()},WebAudio.isAvailable=!!window.AudioContext,WebAudio.prototype._addRequiredMessage=function(a){a=a||document.body;var b=document.createElement("div");b.style.fontFamily="monospace",b.style.fontSize="13px",b.style.textAlign="center",b.style.background="#eee",b.style.color="#000",b.style.padding="1em",b.style.width="475px",b.style.margin="5em auto 0",b.innerHTML=['Your browser does not seem to support <a href="https://dvcs.w3.org/hg/audio/raw-file/tip/webaudio/specification.html">WebAudio API</a>.<br />','Try with <a href="https://www.google.com/intl/en/chrome/browser/">Chrome Browser</a>.'].join("\n"),a.appendChild(b)},WebAudio.prototype.context=function(){return this._ctx},WebAudio.prototype.createSound=function(){var a=this,b=new WebAudio.Sound(a);return b},WebAudio.prototype._entryNode=function(){return this._gainNode},WebAudio.prototype.volume=function(a){return void 0===a?this._volume:(this._volume=a,this._muted===!1&&(this._gainNode.gain.value=this._volume),this)},WebAudio.prototype.mute=function(a){return void 0===a?this._muted:(this._muted=a,this._gainNode.gain.value=this._muted?0:this._volume,this)},WebAudio.prototype.toggleMute=function(){this.mute()?this.mute(!1):this.mute(!0)},WebAudio.prototype._pageVisibilityCtor=function(){this._pageVisibilityEventStr=void 0!==document.hidden?"visibilitychange":void 0!==document.mozHidden?"mozvisibilitychange":void 0!==document.msHidden?"msvisibilitychange":void 0!==document.webkitHidden?"webkitvisibilitychange":console.assert(!1,"Page Visibility API unsupported"),this._pageVisibilityDocumentStr=void 0!==document.hidden?"hidden":void 0!==document.mozHidden?"mozHidden":void 0!==document.msHidden?"msHidden":void 0!==document.webkitHidden?"webkitHidden":console.assert(!1,"Page Visibility API unsupported"),this._$pageVisibilityCallback=function(){var a=!!document[this._pageVisibilityDocumentStr];this.mute(!!a)}.bind(this),document.addEventListener(this._pageVisibilityEventStr,this._$pageVisibilityCallback,!1)},WebAudio.prototype._pageVisibilityDtor=function(){document.removeEventListener(this._pageVisibilityEventStr,this._$pageVisibilityCallback,!1)},WebAudio.NodeChainBuilder=function(a){console.assert(a instanceof AudioContext),this._context=a,this._firstNode=null,this._lastNode=null,this._nodes={}},WebAudio.NodeChainBuilder.create=function(a){return new WebAudio.NodeChainBuilder(a)},WebAudio.NodeChainBuilder.prototype.destroy=function(){},WebAudio.NodeChainBuilder.prototype.nodes=function(){return this._nodes},WebAudio.NodeChainBuilder.prototype.first=function(){return this._firstNode},WebAudio.NodeChainBuilder.prototype.last=function(){return this._lastNode},WebAudio.NodeChainBuilder.prototype._addNode=function(a,b){var c=!!(this._lastNode&&"playbackRate"in this._lastNode);c&&(this._bufferSourceDst=a),null!==this._lastNode&&this._lastNode.connect(a),null===this._firstNode&&(this._firstNode=a),this._lastNode=a;for(var d in b)a[d]=b[d];return this},WebAudio.NodeChainBuilder.prototype.cloneBufferSource=function(){console.assert(this._nodes.bufferSource,"no buffersource presents. Add one.");var a=this._nodes.bufferSource,b=this._context.createBufferSource();return b.buffer=a.buffer,b.playbackRate=a.playbackRate,b.loop=a.loop,b.connect(this._bufferSourceDst),b},WebAudio.NodeChainBuilder.prototype.bufferSource=function(a){var b=this._context.createBufferSource();return this._nodes.bufferSource=b,this._addNode(b,a)},WebAudio.NodeChainBuilder.prototype.mediaStreamSource=function(a,b){var c=this._context.createMediaStreamSource(a);return this._nodes.bufferSource=c,this._addNode(c,b)},WebAudio.NodeChainBuilder.prototype.mediaElementSource=function(a,b){console.assert(a instanceof HTMLAudioElement||a instanceof HTMLVideoElement);var c=this._context.createMediaElementSource(a);return this._nodes.bufferSource=c,this._addNode(c,b)},WebAudio.NodeChainBuilder.prototype.panner=function(a){var b=this._context.createPanner();return this._nodes.panner=b,this._addNode(b,a)},WebAudio.NodeChainBuilder.prototype.analyser=function(a){var b=this._context.createAnalyser();return this._nodes.analyser=b,this._addNode(b,a)},WebAudio.NodeChainBuilder.prototype.gainNode=function(a){var b=this._context.createGain();return this._nodes.gainNode=b,this._addNode(b,a)},WebAudio.Sound=function(a,b){this._webaudio=a,this._context=this._webaudio.context(),console.assert(this._webaudio instanceof WebAudio),void 0===b&&(b=new WebAudio.NodeChainBuilder(this._context).bufferSource().gainNode().analyser().panner()),console.assert(b instanceof WebAudio.NodeChainBuilder),this._chain=b,this._chain.last().connect(this._webaudio._entryNode()),this._source=this._chain.nodes().bufferSource,this._gainNode=this._chain.nodes().gainNode,this._analyser=this._chain.nodes().analyser,this._panner=this._chain.nodes().panner,console.assert(this._source,"no bufferSource: not yet supported"),console.assert(this._gainNode,"no gainNode: not yet supported"),console.assert(this._analyser,"no analyser: not yet supported"),console.assert(this._panner,"no panner: not yet supported")},WebAudio.Sound.create=function(a,b){return new WebAudio.Sound(a,b)},WebAudio.Sound.prototype.destroy=function(){this._chain.last().disconnect(),this._chain.destroy(),this._chain=null},WebAudio.Sound.fn=WebAudio.Sound.prototype,WebAudio.Sound.prototype.nodes=function(){return this._chain.nodes()},WebAudio.Sound.prototype.isPlayable=function(){return!!this._source.buffer},WebAudio.Sound.prototype.play=function(a){if(void 0===a&&(a=0),this.isPlayable()!==!1){var b=this._chain.cloneBufferSource();b.start(a);var c={node:b,stop:function(a){return void 0===a&&(a=0),this.node.stop(a),c}};return c}},WebAudio.Sound.prototype.volume=function(a){return void 0===a?this._gainNode.gain.value:(this._gainNode.gain.value=a,this)},WebAudio.Sound.prototype.loop=function(a){return void 0===a?this._source.loop:(this._source.loop=a,this)},WebAudio.Sound.prototype.buffer=function(a){return void 0===a?this._source.buffer:(this._source.buffer=a,this)},WebAudio.Sound.prototype.pannerCone=function(a,b,c){return this._panner.coneInnerAngle=180*a/Math.PI,this._panner.coneOuterAngle=180*b/Math.PI,this._panner.coneOuterGain=c,this},WebAudio.Sound.prototype.pannerConeInnerAngle=function(a){return void 0===a?this._panner.coneInnerAngle/180*Math.PI:(this._panner.coneInnerAngle=180*a/Math.PI,this)},WebAudio.Sound.prototype.pannerConeOuterAngle=function(a){return void 0===a?this._panner.coneOuterAngle/180*Math.PI:(this._panner.coneOuterAngle=180*a/Math.PI,this)},WebAudio.Sound.prototype.pannerConeOuterGain=function(a){return void 0===a?this._panner.coneOuterGain:(this._panner.coneOuterGain=a,this)},WebAudio.Sound.prototype.amplitude=function(a){a=void 0!==a?a:2;var b=this._analyser,c=new Uint8Array(b.frequencyBinCount);b.getByteFrequencyData(c);for(var d=0,e=0;e<a;e++)d+=c[e];var f=d/(256*a-1);return f},WebAudio.Sound.prototype.tone=function(a,b){a=void 0!==a?a:200,b=void 0!==b?b:1;for(var c=1,d=44100,e=2,f=this._webaudio.context().createBuffer(c,b*d,d),g=f.getChannelData(0),h=0;h<g.length;h++){var i=h/f.sampleRate,j=a*i*Math.PI;g[h]=Math.sin(j)*e}return this.buffer(f),this},WebAudio.Sound.prototype.makeHistogram=function(a){var b=this._analyser;this._privHisto=this._privHisto||new Uint8Array(b.frequencyBinCount);var c=this._privHisto;b.getByteFrequencyData(c);var d=function(a,b){for(var c=Math.floor(a.length/b),d=(Math.floor(a.length/c),[]),e=0,f=0;e<a.length;f++){for(var g=0,h=0;h<c;h++,e++)g+=a[e];var i=g/c;d[f]=i}return d},e=d(c,a);return e},WebAudio.Sound.prototype.load=function(a,b,c){return c=c||function(){console.warn("unable to load sound "+a)},this._loadAndDecodeSound(a,function(a){this._source.buffer=a,b&&b(this)}.bind(this),function(){c&&c(this)}.bind(this)),this},WebAudio.Sound.prototype._loadAndDecodeSound=function(a,b,c){var d=this._context;d.decodeAudioData(a,function(a){console.log("OK"),b&&b(a)},function(){console.log("KO"),c&&c()})},WebAudio.Flow=function(){var a,b=[],c=setTimeout(function(){c=null,a._next()},0);return a={destroy:function(){c&&clearTimeout(c)},par:function(c,d){return!d&&b[b.length-1]instanceof Array||b.push([]),b[b.length-1].push(c),a},seq:function(b){return a.par(b,!0)},_next:function(c,d){for(var e=[],f=[],g=b.shift()||[],h=g.length,i=1==h,j=0;j<g.length;j++)!function(b,g){b(function(b,c){e[g]=b,f[g]=c,0==--h&&a._next(i?e[0]:e,i?f[0]:f)},c,d)}(g[j],j)}}};