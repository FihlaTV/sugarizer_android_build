/*! Sugarizer 2017-09-04 */
function mod12(a){for(;a<0;)a+=12;return a%12}function calcAugmented(a){var b=a[0],c=a[1];return b<0?-AUGMENTED[-b]+12*c:AUGMENTED[b]+12*c}function calcPerfect(a){var b=a[0],c=a[1];return b<0?-PERFECT[-b]+12*c:PERFECT[b]+12*c}function calcDiminished(a){var b=a[0],c=a[1];return b<0?-DIMINISHED[-b]+12*c:DIMINISHED[b]+12*c}function calcMajor(a){var b=a[0],c=a[1];return b<0?-MAJOR[-b]+12*c:MAJOR[b]+12*c}function calcMinor(a){var b=a[0],c=a[1];return b<0?-MINOR[-b]+12*c:MINOR[b]+12*c}function getModeName(a){for(var b in MODENAMES)if(MODENAMES[b][0]===a||MODENAMES[b][1].toLowerCase()===a.toLowerCase())return""!=MODENAMES[b][0]?MODENAMES[b][0]:(console.log("I18n for mode name is misbehaving."),console.log(a+" "+a.toLowerCase()+" "+MODENAMES[b][0].toLowerCase()+" "+MODENAMES[b][1].toLowerCase()),MODENAMES[b][1]);return console.log(a+" not found in MODENAMES"),a}function initModeI18N(){for(var a=0;a<MODENAMES.length;a++)null==MODENAMES[a][0]&&(MODENAMES[a][0]=_(MODENAMES[a][1])),null==MODENAMES[a][0]&&(MODENAMES[a][0]=MODENAMES[a][1])}function initVoiceI18N(){for(var a=0;a<VOICENAMES.length;a++)null==VOICENAMES[a][0]&&(VOICENAMES[a][0]=_(VOICENAMES[a][1])),null==VOICENAMES[a][0]&&(VOICENAMES[a][0]=VOICENAMES[a][1])}function initDrumI18N(){for(var a=0;a<DRUMNAMES.length;a++)null!=DRUMNAMES[a][0]&&""!==DRUMNAMES[a][0]||(DRUMNAMES[a][0]=_(DRUMNAMES[a][1])),null==DRUMNAMES[a][0]&&(DRUMNAMES[a][0]=DRUMNAMES[a][1])}function getDrumName(a){if(""===a)console.log("getDrumName passed blank name. Returning kick drum"),a=DEFAULTDRUM;else if("http"==a.slice(0,4))return null;for(var b=0;b<DRUMNAMES.length;b++)if(DRUMNAMES[b][0].toLowerCase()===a.toLowerCase()||DRUMNAMES[b][1].toLowerCase()===a.toLowerCase())return""!=DRUMNAMES[b][0]?DRUMNAMES[b][0]:(console.log("I18n is misbehaving when parsing drum name: "+a),DRUMNAMES[b][1]);return null}function getDrumIcon(a){if(""===a)console.log("getDrumIcon passed blank name. Returning kick drum"),a=DEFAULTDRUM;else if("http"==a.slice(0,4))return"images/drum.svg";for(var b=0;b<DRUMNAMES.length;b++)if(DRUMNAMES[b][0]===a||DRUMNAMES[b][1].toLowerCase()===a.toLowerCase())return DRUMNAMES[b][2];return"images/drum.svg"}function getDrumSynthName(a){if(null==a||void 0==a)return console.log("getDrumSynthName passed null name. Returning null"),null;if(""===a)console.log("getDrumSynthName passed blank name. Returning kick drum"),a=DEFAULTDRUM;else if("http"==a.slice(0,4))return a;for(var b=0;b<DRUMNAMES.length;b++)if(DRUMNAMES[b][0]===a||DRUMNAMES[b][1].toLowerCase()===a.toLowerCase())return DRUMNAMES[b][1];return null}function getVoiceName(a){if(""===a)console.log("getVoiceName passed blank name. Returning sine"),a=DEFAULTVOICE;else if("http"==a.slice(0,4))return null;for(var b=0;b<VOICENAMES.length;b++)if(VOICENAMES[b][0]===a||VOICENAMES[b][1]===a)return""!=VOICENAMES[b][0]?VOICENAMES[b][0]:(console.log("I18n is misbehaving when parsing voice name: "+a),VOICENAMES[b][1]);return null}function getVoiceIcon(a){if(""===a)console.log("getVoiceIcon passed blank name. Returning sine"),a=DEFAULTVOICE;else if("http"==a.slice(0,4))return"images/voices.svg";for(var b=0;b<VOICENAMES.length;b++)if(VOICENAMES[b][0]===a||VOICENAMES[b][1]===a)return VOICENAMES[b][2];return"images/voices.svg"}function getVoiceSynthName(a){if(null==a||void 0==a)return console.log("getVoiceSynthName passed null name. Returning null"),null;if(""===a)console.log("getVoiceSynthName passed blank name. Returning sine"),a=DEFAULTVOICE;else if("http"==a.slice(0,4))return a;for(var b=0;b<VOICENAMES.length;b++)if(VOICENAMES[b][0]===a||VOICENAMES[b][1]===a)return VOICENAMES[b][1];return null}function keySignatureToMode(a){if(""===a)return console.log("No key signature provided; reverting to C major."),["C","major"];a.toLowerCase()in MAQAMTABLE&&(a=MAQAMTABLE[a.toLowerCase()]);var b=a.split(" "),c=!1;if(1===b.length&&"m"===b[0][b[0].length-1]&&(c=!0,b[0]=b[0].slice(0,b[0].length-1)),b[0]in BTOFLAT)var d=BTOFLAT[b[0]];else if(b[0]in STOSHARP)var d=STOSHARP[b[0]];else var d=b[0];if(NOTESSHARP.indexOf(d)===-1&&NOTESFLAT.indexOf(d)===-1){console.log("Invalid key or missing name; reverting to C.");var a="C "+a,b=a.split(" ");d="C"}if(c)return[d,"minor"];for(var e="",f=1;f<b.length;f++)""!==b[f]&&(""===e?e=b[f]:e+=" "+b[f]);e=""===e?"major":e.toLowerCase(),e=getModeName(e);for(var f=0;f<MODENAMES.length;f++)if(MODENAMES[f][0]===e){e=MODENAMES[f][1];break}return e in MUSICALMODES?[d,e]:(console.log("Invalid mode name: "+e+" reverting to major."),[d,"major"])}function getStepSizeUp(a,b){return _getStepSize(a,b,"up")}function getStepSizeDown(a,b){return _getStepSize(a,b,"down")}function _getStepSize(a,b,c){var d=_buildScale(a),e=d[0],f=d[1];return b in BTOFLAT?b=BTOFLAT[b]:b in STOSHARP&&(b=STOSHARP[b]),ii=e.indexOf(b),ii!==-1?"up"===c?f[ii]:ii>0?-f[ii-1]:-last(f):(b in EQUIVALENTNOTES&&(b=EQUIVALENTNOTES[b]),ii=e.indexOf(b),ii!==-1?"up"===c?f[ii]:ii>0?-f[ii-1]:-last(f):(console.log(b+" not found in key of "+a),1))}function _buildScale(a){var b=keySignatureToMode(a),c=b[0];if("CUSTOM"===b[1])var d=customMode;else var d=MUSICALMODES[b[1]];if(NOTESFLAT.indexOf(c)!==-1)var e=NOTESFLAT;else var e=NOTESSHARP;var f=e.indexOf(c);f===-1&&(f=0);for(var g=[c],h=f,i=0;i<d.length;i++)h+=d[i],g.push(e[h%SEMITONES]);return[g,d]}function scaleDegreeToPitch(a,b){var c=_buildScale(a),d=c[0];return b-=1,b%=d.length-1,d[b]}function getScaleAndHalfSteps(a){var b=keySignatureToMode(a),c=b[0];if("CUSTOM"===b[1])var d=customMode;else var d=MUSICALMODES[b[1]];for(var e=[],f=0;f<d.length;f++){e.push(SOLFEGENAMES[f]);for(var g=1;g<d[f];g++)e.push("")}if(NOTESFLAT.indexOf(c)!==-1)var h=NOTESFLAT;else var h=NOTESSHARP;return c in EXTRATRANSPOSITIONS&&(c=EXTRATRANSPOSITIONS[c][0]),[h,e,c,b[1]]}function getInterval(a,b,c){var d=_buildScale(b),e=d[0],f=d[1];if(c in BTOFLAT)c=BTOFLAT[c],g=e.indexOf(c);else if(c in STOSHARP)c=STOSHARP[c],g=e.indexOf(c);else if(e.indexOf(c)!==-1)g=e.indexOf(c);else if(c in EQUIVALENTNOTES)c=EQUIVALENTNOTES[c],e.indexOf(c)!==-1?g=e.indexOf(c):(console.log("Note "+c+" not in scale "+b),g=0);else var g=SOLFEGENAMES.indexOf(c);if(a>0){for(var h=Math.floor(a/SEMITONES),i=Math.floor(a)%SEMITONES,j=0,k=0;k<i-1;k++)j+=f[(g+k)%f.length];return j+h*SEMITONES}for(var h=Math.ceil(a/SEMITONES),i=Math.ceil(a)%SEMITONES,j=0,k=0;k>i+1;k--){for(var l=(g+k-1)%f.length;l<0;)l+=f.length;j-=f[l]}return j+h*SEMITONES}function calcNoteValueToDisplay(a,b){var c=a/b,d=null;return d=void 0!=NOTESYMBOLS&&c in NOTESYMBOLS?"1<br>&mdash;<br>"+c.toString()+'<br><img src="'+NOTESYMBOLS[c]+'" height='+20*this.cellScale+">":reducedFraction(b,a),parseInt(c)<c&&(d=parseInt(1.5*c),void 0!=NOTESYMBOLS&&d in NOTESYMBOLS?d="1.5<br>&mdash;<br>"+d.toString()+'<br><img src="'+NOTESYMBOLS[d]+'" height='+20*this.cellScale+"> .":(d=parseInt(1.75*c),d=void 0!=NOTESYMBOLS&&d in NOTESYMBOLS?"1.75<br>&mdash;<br>"+d.toString()+'<br><img src="'+NOTESYMBOLS[d]+'" height='+20*this.cellScale+"> ..":reducedFraction(b,a))),d}function durationToNoteValue(a){for(var b=0;b<3;b++){var c=2-1/Math.pow(2,b),d=a*c;if(POWER2.indexOf(d)!==-1)return[d,b,null]}for(var e=a,f=1;f<POWER2.length;f++)if(e<POWER2[f]){e=POWER2[f-1];break}POWER2.indexOf(e)===-1&&(e=128);for(var g=1,h=a;2*Math.floor(h/2)===h;)g*=2,h/=2;return g>1?[a,0,h,e]:[1,0,a,e]}function toFraction(a){if(a>1){var b=!0;a=1/a}else var b=!1;for(var c=1,d=1,e=1;Math.abs(c-a)>1e-8;)c<a?d+=1:(e+=1,d=parseInt(a*e)),c=d/e;if(b){var f=d;d=e,e=f}return[d,e]}function frequencyToPitch(a){if(a<A0)return["A",0];if(a>C8)return["C",8];for(var b=0,c=0;c<8800;c++){var d=A0*Math.pow(TWELVEHUNDRETHROOT2,c);if(a<1.0003*d&&a>.9997*d){var b=c%100,e=Math.floor(c/100);return[PITCHES[(e+PITCHES.indexOf("A"))%12],Math.floor((e+PITCHES.indexOf("A"))/12),b]}}return console.log("Could not find note/octave/cents for "+a),["?",-1,0]}function numberToPitch(a){if(a<0){for(var b=0;a<0;)a+=12,b+=1;return[PITCHES[(a+PITCHES.indexOf("A"))%12],Math.floor((a+PITCHES.indexOf("A"))/12)-b]}return[PITCHES[(a+PITCHES.indexOf("A"))%12],Math.floor((a+PITCHES.indexOf("A"))/12)]}function noteToPitchOctave(a){var b=a.length,c=last(a),d=a.substring(0,b-1);return[d,Number(c)]}function noteToFrequency(a,b){var c=noteToPitchOctave(a);return pitchToFrequency(c[0],c[1],0,b)}function pitchToFrequency(a,b,c,d){var e=pitchToNumber(a,b,d);return 0===c?A0*Math.pow(TWELTHROOT2,e):A0*Math.pow(TWELVEHUNDRETHROOT2,100*e+c)}function pitchToNumber(a,b,c){if("R"===a.toUpperCase())return 0;var d=0,e=a.length;if(e>1){if(e>2){var f=a.slice(e-2);"bb"===f||"♭♭"===f?(a=a.slice(0,e-2),d-=2):"##"===f||"♯♯"===f?(a=a.slice(0,e-2),d+=2):"#b"!==f&&"♯♭"!==f&&"b#"!==f&&"♭♯"!==f||(a=a.slice(0,e-2))}if(a.length>1){var g=a.slice(e-1);"b"===g||"♭"===g?(a=a.slice(0,e-1),d-=1):"#"!==g&&"♯"!==g||(a=a.slice(0,e-1),d+=1)}}var h=0;if(PITCHES.indexOf(a)!==-1)h=PITCHES.indexOf(a.toUpperCase());else{var i=getScaleAndHalfSteps(c);i[1].indexOf(a.toLowerCase())!==-1?h=i[1].indexOf(a.toLowerCase()):(console.log("pitch "+a+" not found."),h=0)}return 12*b+h-PITCHES.indexOf("A")+d}function noteIsSolfege(a){return void 0==SOLFEGECONVERSIONTABLE[a]}function getSolfege(a){return noteIsSolfege(a)?a:SOLFEGECONVERSIONTABLE[a]}function i18nSolfege(a){var b=_("ti la sol fa mi re do").split(" "),c=splitSolfege(a),d=SOLFNOTES.indexOf(c[0]);return d!==-1?b[d]+c[1]:(console.log(a+" not found."),a)}function splitSolfege(a){if(null!=a)if(SOLFNOTES.indexOf(a)!==-1)var b=a,c="";else if("sol"===a.slice(0,3)){var b="sol";if(4===a.length)var c=a[3];else var c=a[3]+a[3]}else{var b=a.slice(0,2);if(3===a.length)var c=a[2];else var c=a[2]+a[2]}else var b="sol",c="";return[b,c]}function getNumber(a,b){if(b<0)var c=0;else if(b>10)var c=108;else var c=12*(b-1);if(a=String(a),a.substring(0,1)in NOTESTEP&&(c+=NOTESTEP[a.substring(0,1)],a.length>=1)){var d=a.substring(1);"bb"===d||"♭♭"===d?c-=2:"##"===d||"♯♯"===d?c+=2:"b"===d||"♭"===d?c-=1:"#"!==d&&"♯"!==d||(c+=1)}return c}function getNumNote(a,b){var c=a+b,d=Math.floor(c/12);c%=12;var e=NOTESTABLE[c];return"ti"===e[c]&&(d-=1),[e,d+1]}function isInt(a){return!isNaN(a)&&parseInt(Number(a))==a&&!isNaN(parseInt(a,10))}function reducedFraction(a,b){greatestCommonMultiple=function(a,b){return 0===b?a:greatestCommonMultiple(b,a%b)};var c=greatestCommonMultiple(a,b);return void 0!=NOTESYMBOLS&&[1,2,4,8,16,32,64].indexOf(b/c)!==-1?a/c+"<br>&mdash;<br>"+b/c+"<br><img src="+NOTESYMBOLS[b/c]+">":a/c+"<br>&mdash;<br>"+b/c+"<br><br>"}function Synth(){_THIS_IS_MUSIC_BLOCKS_&&(this.tone=new Tone),this.synthset={poly:[null,null],sine:[null,null],triangle:[null,null],sawtooth:[null,null],square:[null,null],pluck:[null,null],violin:[VIOLINSOUNDSAMPLE,null],cello:[CELLOSOUNDSAMPLE,null],basse:[BASSESOUNDSAMPLE,null],bottle:[BOTTLESOUNDSAMPLE,null],clap:[CLAPSOUNDSAMPLE,null],"darbuka drum":[DARBUKASOUNDSAMPLE,null],"hi hat":[HIHATSOUNDSAMPLE,null],splash:[SPLASHSOUNDSAMPLE,null],bubbles:[BUBBLESSOUNDSAMPLE,null],"cow bell":[COWBELLSOUNDSAMPLE,null],dog:[DOGSOUNDSAMPLE,null],"kick drum":[KICKSOUNDSAMPLE,null],"tom tom":[TOMSOUNDSAMPLE,null],cat:[CATSOUNDSAMPLE,null],crash:[CRASHSOUNDSAMPLE,null],duck:[DUCKSOUNDSAMPLE,null],"ride bell":[RIDEBELLSOUNDSAMPLE,null],"triangle bell":[TRIANGLESOUNDSAMPLE,null],chine:[CHINESOUNDSAMPLE,null],cricket:[CRICKETSOUNDSAMPLE,null],"finger cymbals":[FINGERCYMBALSSOUNDSAMPLE,null],slap:[SLAPSOUNDSAMPLE,null],clang:[CLANGSOUNDSAMPLE,null],"cup drum":[CUPSOUNDSAMPLE,null],"floor tom tom":[FLOORTOMSOUNDSAMPLE,null],"snare drum":[SNARESOUNDSAMPLE,null]},_THIS_IS_MUSIC_BLOCKS_&&(Tone.Buffer.onload=function(){console.log("drum loaded")}),this.getSynthByName=function(a){if(null==a||void 0==a)return this.synthset.poly[1];switch(a){case"pluck":case"triangle":case"square":case"sawtooth":case"sine":return this.synthset[a][1];case"violin":case"cello":case"basse":return this.synthset[a][1];case"default":case"poly":return this.synthset.poly[1];default:var b=getDrumSynthName(a);if("http"==a.slice(0,4))return a in this.synthset?this.synthset[a][1]:(console.log("no synth by that name"),null);if(null!=b)return this.synthset[b][1];if("drum"===a)return this.synthset[DEFAULTDRUM][1]}return this.synthset.poly[1]},this.loadSynth=function(a){var b=this.getSynthByName(a);if(null==b)switch(console.log("loading synth for "+a),a){case"pluck":this.synthset.pluck[1]=new Tone.PluckSynth;break;case"triangle":case"square":case"sawtooth":case"sine":var c={oscillator:{type:a},envelope:{attack:.03,decay:0,sustain:1,release:.03}};this.synthset[a][1]=new Tone.Synth(c);break;case"poly":case"default":this.synthset.poly[1]=new Tone.PolySynth(6,Tone.AMSynth);break;case"violin":case"cello":case"basse":this.synthset[a][1]=new Tone.Sampler(this.synthset[a][0]);break;default:"http"==a.slice(0,4)?this.synthset[a]=[a,new Tone.Sampler(a)]:"file"==a.slice(0,4)?this.synthset[a]=[a,new Tone.Sampler(a)]:this.synthset[a][1]=new Tone.Sampler(this.synthset[a][0])}this.getSynthByName(a).toMaster()},this.performNotes=function(a,b,c,d,e,f){if(d){var g=new Tone.Vibrato(1/f,e);a.chain(g,Tone.Master),a.triggerAttackRelease(b,c),setTimeout(function(){g.dispose()},1e3*c)}else a.triggerAttackRelease(b,c)},this.trigger=function(a,b,c,d){var e=!1,f=0,g=0;switch(2==d.length&&0!=d[0]&&(e=!0,f=d[0],g=d[1]),c){case"pluck":case"triangle":case"square":case"sawtooth":case"sine":if("object"==typeof a)var h=a[0];else var h=a;this.performNotes(this.synthset[c][1],h,b,e,f,g);break;case"violin":case"cello":case"basse":var i=SAMPLECENTERNO[c],j=noteToPitchOctave(a),k=pitchToNumber(j[0],j[1],"C Major");this.performNotes(this.synthset[c][1],k-i,b,e,f,g);break;case"default":case"poly":this.performNotes(this.synthset.poly[1],a,b,e,f,g);break;default:var l=getDrumSynthName(c);null!=l?""===l&&c in this.synthset?this.synthset[c][1].triggerAttack(0,b):l in this.synthset?null==this.synthset[l][1]?console.log("Something has gone terribly wrong: "+c+", "+l):this.synthset[l][1].triggerAttack(0):"http"==c.slice(0,4)?this.synthset[c][1].triggerAttack(0,b):"file"==c.slice(0,4)?this.synthset[c][1].triggerAttack(0,b):console.log("Something has gone terribly wrong: "+c+", "+l):"drum"===c?this.synthset[DEFAULTDRUM][1].triggerAttack(0,b,1):"http"==c.slice(0,4)?this.synthset[c][1].triggerAttack(0,b,1):"file"==c.slice(0,4)?this.synthset[c][1].triggerAttack(0,b,1):this.performNotes(this.synthset.poly[1],a,b,e,f,g)}},this.stopSound=function(a){this.getSynthByName(a).triggerRelease()},this.start=function(){Tone.Transport.start()},this.stop=function(){Tone.Transport.stop()},this.setVolume=function(a){var b=this.tone.gainToDb(a/100);Tone.Master.volume.rampTo(b,.01)},this.getOscillator=function(a,b){return new Tone.Oscillator(a,b).toMaster()}}const SYNTHSVG='<?xml version="1.0" encoding="UTF-8" standalone="no"?> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" y="0px" xml:space="preserve" x="0px" width="SVGWIDTHpx" viewBox="0 0 SVGWIDTH 55" version="1.1" height="55px" enable-background="new 0 0 SVGWIDTH 55"><g transform="scale(XSCALE,1)"><path d="m 1.5,27.5 c 0,0 2.2,-17.5 6.875,-17.5 4.7,0.0 6.25,11.75 6.875,17.5 0.75,6.67 2.3,17.5 6.875,17.5 4.1,0.0 6.25,-13.6 6.875,-17.5 C 29.875,22.65 31.1,10 35.875,10 c 4.1,0.0 5.97,13.0 6.875,17.5 1.15,5.7 1.75,17.5 6.875,17.5 4.65,0.0 6.875,-17.5 6.875,-17.5" style="stroke:#90c100;fill-opacity:1;fill:none;stroke-width:STROKEWIDTHpx;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1" /></g></svg>',WHOLENOTE='<svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svg6468" viewBox="0 0 5.1680003 12.432" height="12.432" width="5.1680002"> <g transform="translate(-375.23523,-454.37592)"> <g transform="translate(7.9606,5.6125499)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 369.80263,457.99537 q 1.104,0 1.872,0.432 0.768,0.416 0.768,1.2 0,0.752 -0.752,1.168 -0.752,0.4 -1.808,0.4 -1.104,0 -1.856,-0.416 -0.752,-0.416 -0.752,-1.232 0,-0.576 0.464,-0.944 0.48,-0.368 1.008,-0.48 0.528,-0.128 1.056,-0.128 z m -0.864,1.136 q 0,0.672 0.304,1.184 0.304,0.512 0.784,0.512 0.736,0 0.736,-0.8 0,-0.64 -0.304,-1.136 -0.288,-0.512 -0.8,-0.512 -0.72,0 -0.72,0.752 z" /> </g> </g> </svg>',HALFNOTE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3.84 12.432" height="3.5085866mm" width="1.0837333mm"> <g transform="translate(-375.23523,-454.37592)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 375.23523,465.70392 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-9.472 0.352,0 0,10.352 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 0.736,0.48 q 0.848,0 1.712,-0.72 0.88,-0.72 0.88,-1.072 0,-0.224 -0.192,-0.224 -0.592,0 -1.632,0.688 -1.024,0.672 -1.024,1.12 0,0.208 0.256,0.208 z" /> </g> </g> </svg>',QUARTERNOTE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4.0859801 11.74224" height="3.313921mm" width="1.1531544mm"> <g transform="translate(-226.1339,-457.841)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 229.60268,457.841 0.5625,0 0.0547,0.0625 0,10.02344 q 0,1.27344 -1.53125,1.625 l -0.375,0.0313 -0.27343,0 q -1.65625,0 -1.875,-1.03906 l -0.0313,-0.24219 q 0,-1.01562 1.64843,-1.20312 l 0.25782,-0.0391 q 0.77343,0 1.47656,0.5 l 0.0313,0 0,-9.65625 0.0547,-0.0625 z" /> </g> </g> </svg>',EIGHTHNOTE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.5234898 11.7422" height="3.3139098mm" width="2.123296mm"> <g transform="translate(-244.80575,-403.5553)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 248.14955,403.5553 0.67969,0 0.0625,0.0547 0,0.30468 q 0.21094,0.42188 1.5625,0.91407 1.875,0.54687 1.875,1.625 0,1.14062 -0.95313,1.89062 l -0.0313,0 -0.23437,-0.25 q 0.47656,-0.38281 0.47656,-1.03906 0,-0.54688 -1.78125,-1.10156 -0.71875,-0.32813 -0.91406,-0.53125 l 0,8.32812 q 0,1.19531 -1.75,1.54688 l -0.44531,0 q -1.89063,0 -1.89063,-1.3125 0,-1.02344 1.65625,-1.20313 l 0.17969,0 q 0.75,0 1.44531,0.5 l 0,-9.67187 0.0625,-0.0547 z" /> </g> </g> </svg>',SIXTEENTHNOTE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.0080001 12.432" height="3.5085866mm" width="1.9778134mm"> <g transform="translate(-182.21292,-431.51877)"> <g style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 182.21292,442.84677 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-9.472 0.336,0 q 0.064,0.56 0.4,1.088 0.352,0.512 0.8,0.944 0.448,0.416 0.88,0.864 0.448,0.432 0.752,1.024 0.304,0.576 0.304,1.232 0,0.544 -0.256,1.104 0.304,0.448 0.304,1.184 0,1.232 -0.608,2.24 l -0.384,0 q 0.56,-1.12 0.56,-2.032 0,-0.512 -0.256,-0.96 -0.24,-0.448 -0.752,-0.816 -0.496,-0.368 -0.832,-0.56 -0.32,-0.192 -0.896,-0.48 l 0,5.52 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 6.464,-5.904 q 0,-1.648 -2.624,-3.072 0,0.464 0.192,0.88 0.192,0.416 0.512,0.752 0.32,0.32 0.656,0.592 0.336,0.272 0.688,0.608 0.352,0.32 0.544,0.608 0.032,-0.256 0.032,-0.368 z" /> </g> </g> </svg>',THIRTYSECONDNOTE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.0080001 14.496001" height="4.0910935mm" width="1.9778134mm"> <g transform="translate(-630.78433,-240.88335)">  <g  style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1">  <path  d="m 630.78433,254.27535 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-11.536 0.352,0 q 0.048,0.56 0.384,1.072 0.336,0.496 0.768,0.912 0.432,0.4 0.864,0.848 0.432,0.448 0.72,1.104 0.304,0.656 0.304,1.456 0,0.48 -0.16,1.056 0.224,0.416 0.224,0.912 0,0.512 -0.24,0.976 0.304,0.448 0.304,1.168 0,1.232 -0.608,2.24 l -0.384,0 q 0.56,-1.12 0.56,-2.032 0,-0.512 -0.256,-0.96 -0.24,-0.448 -0.752,-0.816 -0.496,-0.368 -0.832,-0.56 -0.32,-0.192 -0.896,-0.48 l 0,5.52 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 6.448,-7.872 q 0,-0.496 -0.208,-0.928 -0.192,-0.432 -0.64,-0.832 -0.432,-0.416 -0.784,-0.672 -0.352,-0.256 -0.976,-0.656 0.032,0.448 0.352,0.896 0.32,0.432 0.704,0.752 0.4,0.32 0.848,0.8 0.464,0.464 0.704,0.912 l 0,-0.272 z m 0,2.096 q 0,-0.4 -0.16,-0.768 -0.144,-0.368 -0.32,-0.608 -0.16,-0.256 -0.592,-0.608 -0.416,-0.352 -0.672,-0.528 -0.256,-0.176 -0.848,-0.576 0.064,0.48 0.4,0.976 0.336,0.48 0.72,0.816 0.4,0.336 0.832,0.784 0.448,0.432 0.64,0.784 l 0,-0.272 z" /> </g> </g> </svg>',SIXTYFOURTHNOTE='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7.0080001 14.528" height="4.1001244mm" width="1.9778134mm"> <g transform="translate(-345.3223,-325.39492)"> <g transform="translate(3.1093785,1.6864426)" style="fill:#000000;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"> <path d="m 342.21292,337.13248 q 0,-0.832 0.816,-1.472 0.816,-0.656 1.728,-0.656 0.528,0 0.944,0.272 l 0,-11.568 0.336,0 q 0.064,0.64 0.384,1.104 0.336,0.464 0.752,0.768 0.416,0.304 0.832,0.656 0.416,0.336 0.688,0.928 0.288,0.592 0.288,1.44 0,0.24 -0.144,0.768 0.256,0.608 0.256,1.376 0,0.32 -0.16,0.896 0.224,0.416 0.224,0.912 0,0.496 -0.24,0.96 0.304,0.448 0.304,1.024 0,0.384 -0.08,0.688 -0.08,0.304 -0.16,0.448 -0.08,0.144 -0.368,0.608 l -0.384,0 q 0.08,-0.16 0.192,-0.368 0.112,-0.224 0.16,-0.32 0.064,-0.096 0.112,-0.24 0.064,-0.144 0.08,-0.288 0.016,-0.144 0.016,-0.32 0,-0.272 -0.096,-0.512 -0.08,-0.256 -0.176,-0.432 -0.096,-0.192 -0.32,-0.4 -0.224,-0.208 -0.368,-0.32 -0.144,-0.128 -0.464,-0.304 -0.304,-0.192 -0.432,-0.256 -0.128,-0.064 -0.48,-0.224 -0.336,-0.176 -0.4,-0.208 l 0,4.064 q 0,0.896 -0.784,1.488 -0.784,0.592 -1.728,0.592 -0.528,0 -0.928,-0.304 -0.4,-0.32 -0.4,-0.8 z m 6.352,-8.384 q 0,-0.352 -0.144,-0.688 -0.128,-0.352 -0.288,-0.576 -0.16,-0.224 -0.48,-0.496 -0.32,-0.272 -0.512,-0.4 -0.192,-0.144 -0.592,-0.384 -0.384,-0.24 -0.496,-0.32 0.032,0.432 0.352,0.832 0.32,0.384 0.704,0.656 0.4,0.272 0.816,0.72 0.432,0.432 0.624,0.912 0.016,-0.176 0.016,-0.256 z m 0.016,2.128 q 0,-0.208 -0.048,-0.4 -0.032,-0.192 -0.08,-0.336 -0.048,-0.16 -0.176,-0.336 -0.128,-0.176 -0.208,-0.288 -0.08,-0.112 -0.272,-0.272 -0.192,-0.176 -0.288,-0.256 -0.096,-0.08 -0.352,-0.256 -0.24,-0.176 -0.336,-0.224 -0.096,-0.064 -0.384,-0.24 -0.288,-0.192 -0.384,-0.256 0.032,0.464 0.368,0.88 0.336,0.416 0.736,0.704 0.4,0.272 0.816,0.688 0.416,0.416 0.576,0.864 0.032,-0.192 0.032,-0.272 z m -0.016,1.936 q 0,-0.848 -0.624,-1.504 -0.608,-0.672 -1.872,-1.392 0.064,0.464 0.384,0.896 0.336,0.416 0.72,0.688 0.4,0.272 0.8,0.704 0.4,0.416 0.576,0.88 0.016,-0.064 0.016,-0.272 z" /> </g> </g> </svg>',SHARP="♯",FLAT="♭",BTOFLAT={Eb:"E♭",Gb:"G♭",Ab:"A♭",Bb:"B♭",Db:"D♭",Cb:"B",Fb:"E",eb:"E♭",gb:"G♭",ab:"A♭",bb:"B♭",db:"D♭",cb:"B",fb:"E"},STOSHARP={"E#":"F","G#":"G♯","A#":"A♯","B#":"C","D#":"D♯","C#":"C♯","F#":"F♯","e#":"F","g#":"G♯","a#":"A♯","b#":"C","d#":"D♯","c#":"C♯","f#":"F♯"},NOTESSHARP=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],NOTESFLAT=["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"],NOTESFLAT2=["c","d♭","d","e♭","e","f","g♭","g","a♭","a","b♭","b"],EQUIVALENTNOTES={"C♯":"D♭","D♯":"E♭","F♯":"G♭","G♯":"A♭","A♯":"B♭","D♭":"C♯","E♭":"D♯","G♭":"F♯","A♭":"G♯","B♭":"A♯"},EXTRATRANSPOSITIONS={"E♯":["F",0],"B♯":["C",1],"C♭":["B",-1],"F♭":["E",0],"e♯":["F",0],"b♯":["C",1],"c♭":["B",-1],"f♭":["E",0]},SOLFEGENAMES=["do","re","mi","fa","sol","la","ti"],SOLFEGECONVERSIONTABLE={C:"do","C♯":"do♯",D:"re","D♯":"re♯",E:"mi",F:"fa","F♯":"fa♯",G:"sol","G♯":"sol♯",A:"la","A♯":"la♯",B:"ti","D♭":"re♭","E♭":"mi♭","G♭":"sol♭","A♭":"la♭","B♭":"ti♭",R:_("rest")},WESTERN2EISOLFEGENAMES={do:"sa",re:"re",mi:"ga",fa:"ma",sol:"pa",la:"dha",ti:"ni"},PITCHES=["C","D♭","D","E♭","E","F","G♭","G","A♭","A","B♭","B"],PITCHES1=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],PITCHES2=["C","C♯","D","D♯","E","F","F♯","G","G♯","A","A♯","B"],PITCHES3=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],NOTESTABLE={1:"do",2:"do♯",3:"re",4:"re♯",5:"mi",6:"fa",7:"fa♯",8:"sol",9:"sol♯",10:"la",11:"la♯",0:"ti"},NOTESTEP={C:1,D:3,E:5,F:6,G:8,A:10,B:12},AUGMENTED={1:1,2:2,3:5,4:6,5:8,6:9,7:11,8:13},PERFECT={1:0,4:5,5:7,8:12},DIMINISHED={1:-1,2:0,3:2,4:4,5:6,6:7,7:9,8:11},MAJOR={2:2,3:4,6:9,7:11},MINOR={2:1,3:3,6:8,7:10},SOLFNOTES=["ti","la","sol","fa","mi","re","do"],EASTINDIANSOLFNOTES=["ni","dha","pa","ma","ga","re","sa"],SOLFATTRS=["♯♯","♯","♮","♭","♭♭"],SEMITONES=12,POWER2=[1,2,4,8,16,32,64,128],TWELTHROOT2=1.0594630943592953,TWELVEHUNDRETHROOT2=1.0005777895065548,A0=27.5,C8=4186.01,RHYTHMRULERHEIGHT=100,SLIDERHEIGHT=200,SLIDERWIDTH=50,MATRIXBUTTONCOLOR="#c374e9",MATRIXLABELCOLOR="#90c100",MATRIXNOTECELLCOLOR="#b1db00",MATRIXTUPLETCELLCOLOR="#57e751",MATRIXRHYTHMCELLCOLOR="#c8c8c8",MATRIXBUTTONCOLORHOVER="#c894e0",MATRIXNOTECELLCOLORHOVER="#c2e820",MATRIXSOLFEWIDTH=52,EIGHTHNOTEWIDTH=24,MATRIXBUTTONHEIGHT=40,MATRIXBUTTONHEIGHT2=66,MATRIXSOLFEHEIGHT=30,wholeNoteImg="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(WHOLENOTE))),halfNoteImg="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(HALFNOTE))),quarterNoteImg="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(QUARTERNOTE))),eighthNoteImg="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(EIGHTHNOTE))),sixteenthNoteImg="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(SIXTEENTHNOTE))),thirtysecondNoteImg="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(THIRTYSECONDNOTE))),sixtyfourthNoteImg="data:image/svg+xml;base64,"+window.btoa(unescape(encodeURIComponent(SIXTYFOURTHNOTE))),NOTESYMBOLS={1:wholeNoteImg,2:halfNoteImg,4:quarterNoteImg,8:eighthNoteImg,16:sixteenthNoteImg,32:thirtysecondNoteImg,64:sixtyfourthNoteImg},MUSICALMODES={chromatic:[1,1,1,1,1,1,1,1,1,1,1,1],algerian:[2,1,2,1,1,1,3,1],diminished:[2,1,2,1,2,1,2,1],spanish:[1,2,1,1,1,2,2,2],ocatonic:[1,2,1,2,1,2,1,2],major:[2,2,1,2,2,2,1],ionian:[2,2,1,2,2,2,1],dorian:[2,1,2,2,2,1,2],phrygian:[1,2,2,2,1,2,2],lydian:[2,2,2,1,2,2,1],mixolydian:[2,2,1,2,2,1,2],minor:[2,1,2,2,1,2,2],aeolian:[2,1,2,2,1,2,2],locrian:[1,2,2,1,2,2,2],"jazz minor":[2,1,2,2,2,2,1],bebop:[1,1,1,2,2,1,2],arabic:[2,2,1,1,2,2,2],byzantine:[1,3,1,2,1,3,1],enigmatic:[1,3,2,2,2,1,1],ethiopian:[2,1,2,2,1,2,2],geez:[2,1,2,2,1,2,2],hindu:[2,2,1,2,1,2,2],hungarian:[2,1,3,1,1,3,1],maqam:[1,3,1,2,1,3,1],"romanian minor":[2,1,3,1,2,1,2],"spanish gypsy":[1,3,1,2,1,2,2],blues:[3,2,1,1,3,2],"major blues":[2,1,1,3,2,2],"whole tone":[2,2,2,2,2,2],pentatonic:[3,2,2,3,2],chinese:[4,2,1,4,1],egyptian:[2,3,2,3,2],hirajoshi:[1,4,1,4,2],japanese:[1,4,2,3,2],fibonacci:[1,1,2,3,5],custom:[1,1,1,1,1,1,1,1,1,1,1,1]},MAQAMTABLE={"hijaz kar":"C maqam","hijaz kar maqam":"C maqam",shahnaz:"D maqam","maqam mustar":"Eb maqam","maqam jiharkah":"F maqam","shadd araban":"G maqam",suzidil:"A maqam",ajam:"Bb maqam","ajam maqam":"Bb maqam"};var MODENAMES=[[_("chromatic"),"chromatic"],[_("algerian"),"algerian"],[_("diminished"),"diminished"],[_("spanish"),"spanish"],[_("octatonic"),"octatonic"],[_("major"),"major"],[_("ionian"),"ionian"],[_("dorian"),"dorian"],[_("phrygian"),"phrygian"],[_("lydian"),"lydian"],[_("mixolydian"),"mixolydian"],[_("minor"),"minor"],[_("aeolian"),"aeolian"],[_("locrian"),"locrian"],[_("jazz minor"),"jazz minor"],[_("bebop"),"bebop"],[_("arabic"),"arabic"],[_("byzantine"),"byzantine"],[_("enigmatic"),"enigmatic"],[_("ethiopian"),"ethiopian"],[_("geez"),"geez"],[_("hindu"),"hindu"],[_("hungarian"),"hungarian"],[_("romanian minor"),"romanian minor"],[_("spanish gypsy"),"spanish gypsy"],[_("maqam"),"maqam"],[_("blues"),"blues"],[_("major blues"),"major blues"],[_("whole tone"),"whole tone"],[_("pentatonic"),"pentatonic"],[_("chinese"),"chinese"],[_("egyptian"),"egyptian"],[_("hirajoshi"),"hirajoshi"],[_("japanese"),"japanese"],[_("fibonacci"),"fibonacci"],[_("custom"),"custom"]],VOICENAMES=[[_("violin"),"violin","images/voices.svg"],[_("cello"),"cello","images/voices.svg"],[_("poly"),"poly","images/synth.svg"],[_("sine"),"sine","images/synth.svg"],[_("square"),"square","images/synth.svg"],[_("sawtooth"),"sawtooth","images/synth.svg"],[_("triangle"),"triangle","images/synth.svg"]],DRUMNAMES=[[_("snare drum"),"snare drum","images/snaredrum.svg"],[_("kick drum"),"kick drum","images/kick.svg"],[_("tom tom"),"tom tom","images/tom.svg"],[_("floor tom tom"),"floor tom tom","images/floortom.svg"],[_("cup drum"),"cup drum","images/cup.svg"],[_("darbuka drum"),"darbuka drum","images/darbuka.svg"],[_("hi hat"),"hi hat","images/hihat.svg"],[_("ride bell"),"ride bell","images/ridebell.svg"],[_("cow bell"),"cow bell","images/cowbell.svg"],[_("triangle bell"),"trianglebell","images/trianglebell.svg"],[_("finger cymbals"),"finger cymbals","images/fingercymbals.svg"],[_("chine"),"chine","images/chine.svg"],[_("clang"),"clang","images/clang.svg"],[_("crash"),"crash","images/crash.svg"],[_("bottle"),"bottle","images/bottle.svg"],[_("clap"),"clap","images/clap.svg"],[_("slap"),"slap","images/slap.svg"],[_("splash"),"splash","images/splash.svg"],[_("bubbles"),"bubbles","images/bubbles.svg"],[_("cat"),"cat","images/cat.svg"],[_("cricket"),"cricket","images/cricket.svg"],[_("dog"),"dog","images/dog.svg"],[_("duck"),"duck","images/duck.svg"]];const DEFAULTVOICE="sine",DEFAULTDRUM="kick drum",DEFAULTMODE="major";var customMode=MUSICALMODES.custom;const SAMPLECENTERNO={violin:63,cello:39,basse:15};calcOctave=function(a,b){switch(b){case _("next"):case"next":return Math.min(a+1,10);case _("previous"):case"previous":return Math.max(a-1,1);case _("current"):case"current":return a;default:return Math.floor(b)}},calcOctaveInterval=function(a){var b=0;switch(a){case 1:case _("next"):case"next":b=1;break;case-1:case _("previous"):case"previous":b=-1;break;case _("current"):case"current":case 0:b=0;break;case 2:b=2;break;case-2:b=-2;break;default:console.log("Interval octave must be between -2 and 2."),b=0}return b};