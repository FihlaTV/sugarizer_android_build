/*! Sugarizer 2018-07-01 */
Abcd={};var app;Abcd.context={database:"",home:null,object:null,screen:"",lang:"fr",casevalue:0,screenContext:null},Abcd.saveContext=function(){var a=[];a.push(null!=Abcd.context.object?Abcd.context.object.kindName:""),a.push(Abcd.context.lang),a.push(Abcd.context.casevalue),a.push(null!=Abcd.context.object?Abcd.context.object.saveContext():"");var b=Abcd.activity.getDatastoreObject(),c=JSON.stringify({context:a.join("#"),database:Abcd.context.getDatabase()});b.setDataAsText(c),b.save(function(){})},Abcd.loadContext=function(a){var b=Abcd.activity.getDatastoreObject();b.loadAsText(function(b,c,d){var e=JSON.parse(d);if(e){var f=e.context.split("#");Abcd.context.screen=f[0],Abcd.context.lang=f[1],Abcd.context.casevalue=f[2],Abcd.context.screenContext=f[3],Abcd.setLocale(Abcd.context.lang),a()}})},Abcd.setLocale=function(a){var b=Abcd.getTextsFromLocal(a);__$FC_l10n_set(b),Abcd.letters=Abcd[a+"Letters"],null!=Abcd.context.object&&Abcd.context.object.setLocale()},Abcd.getTextsFromLocal=function(a){switch(a){case"fr":return Abcd.frTexts;case"es":return Abcd.esTexts;default:return Abcd.enTexts}},Abcd.getLettersFromLocal=function(a){switch(a){case"fr":return Abcd.frLetters;case"es":return Abcd.esLetters;default:return Abcd.enLetters}},Abcd.setCase=function(a){Abcd.context.casevalue=a,null!=Abcd.context.object&&Abcd.context.object.setCase()},Abcd.log=function(a){console.log(a)},Abcd.goHome=function(){if(null!=Abcd.context.home){if(null==Abcd.context.object)return;Abcd.context.screen="",Abcd.context.home.renderInto(document.getElementById("body")),Abcd.context.home.playTheme()}},Abcd.changeVisibility=function(a,b){for(var c in b)b[c]?a.$[c].show():a.$[c].hide()},Abcd.randomEntryIndex=function(a,b){var c=null;if(null!=b&&"Abcd.Collection"==b.kind){var d=Abcd.collections[b.index],e=d.entries.length;c=[];for(var f=0;f<e;f++){var g=d.entries[f];1==Abcd.entries[g][Abcd.context.lang]&&c.push(g)}}else{var h=0,i=-1;for(var j in Abcd.letters){if(null!=b&&b.letter==j){i=h;break}Abcd.letters.hasOwnProperty(j)&&h++}i==-1&&(i=Math.floor(Math.random()*h));var f=0;for(var j in Abcd.letters)if(f++==i){c=Abcd.letters[j];break}}for(var k=[],f=0;f<c.length;f++){var l=!1;if(void 0!==a)for(var m=0;!l&&m<a.length;m++)c[f]==a[m]&&(l=!0);l||k.push(c[f])}var n=k.length,o=Math.floor(Math.random()*n);return k[o]},Abcd.mix=function(a){if(a.length<2)return a;for(var b=[],c=enyo.cloneArray(a);1!=c.length;){var d=Math.floor(Math.random()*c.length);b.push(c[d]),c[d]=null;for(var e=[],f=0;f<c.length;f++)null!=c[f]&&e.push(c[f]);c=e}return b.push(c[0]),b};