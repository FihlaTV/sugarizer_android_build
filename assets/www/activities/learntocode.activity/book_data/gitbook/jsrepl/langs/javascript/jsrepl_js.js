(function(){self.JSREPLEngine=function(){function a(d,b,c,a,e,f){this.result=c;this.error=a;this.sandbox=e;this.inspect=this.sandbox.console.inspect;this.functionClass=this.sandbox.Function;this.sandbox.__eval=this.sandbox.eval;f()}a.prototype.Eval=function(d){var b;try{return b=this.sandbox.__eval(d),this.result(b===void 0?"":this.inspect(b))}catch(a){return this.error(a)}};a.prototype.RawEval=function(a){var b;try{return b=this.sandbox.__eval(a),this.result(b)}catch(c){return this.error(c)}};a.prototype.GetNextLineIndent=
function(a){try{return new this.functionClass(a),false}catch(b){return/[\[\{\(]$/.test(a)?1:0}};return a}()}).call(this);
