/*! Sugarizer 2018-07-01 */
function Game(a,b,c,d,e,f,g,h){this.palette=null,this.custompalette=null,this.abacus=null,this.customarr=[15,1,4,5,10],this.abacustype=null,this.updateCustom=function(a,b,c,d,e){this.customarr[0]=a,this.customarr[1]=b,this.customarr[2]=c,this.customarr[3]=d,this.customarr[4]=e},this.Custom=function(a,b){this.abacustype=10;var c=this.customarr;this.abacus=new StandardAbacus(a,c[0],c[1],c[3],c[2],c[4],b),this.abacus.init()},this.Decimal=function(a,b){this.abacustype=0,this.abacus=new OneColumnAbacus(a,15,10,10,b),this.abacus.init()},this.Soroban=function(a,b){this.abacustype=1,this.abacus=new StandardAbacus(a,15,1,5,4,10,b,8),this.abacus.init()},this.Suanpan=function(a,b){this.abacustype=2,this.abacus=new StandardAbacus(a,15,2,5,5,10,b),this.abacus.init()},this.Nepohualtzintzin=function(a,b){this.abacustype=3,this.abacus=new StandardAbacus(a,13,3,5,4,20,b),this.abacus.init()},this.Hexadecimal=function(a,b){this.abacustype=4,this.abacus=new StandardAbacus(a,15,1,8,7,16,b),this.abacus.init()},this.Binary=function(a,b){this.abacustype=5,this.abacus=new OneColumnAbacus(a,15,1,2,b),this.abacus.init()},this.Schety=function(a,b){this.abacustype=6,this.abacus=new OneColumnAbacus(a,15,10,10,b,null,!0),this.abacus.init()},this.Fractions=function(a,b){this.abacustype=7,this.abacus=new OneColumnAbacus(a,15,12,10,b,null,!1,!0),this.abacus.init()},this.Caacupé=function(a,b){this.abacustype=8,this.abacus=new OneColumnAbacus(a,15,12,10,b,null,!1,!1,!0),this.abacus.init()},this.Rods=function(a,b){this.abacustype=9,this.abacus=new OneColumnAbacus(a,10,12,10,b,null,!1,!1,!1,!0),this.abacus.init()},this.copy=function(){function a(a){var b=document.getElementById("copytext");b.value=a,b.select();try{document.execCommand("copy")}catch(b){window.prompt("Copy to clipboard: ",a)}}var b="";console.log(this.abacus),null!=this.abacus&&null!=this.abacus.answertext&&this.abacus.answertext.text.length>0&&(b=this.abacus.answertext.text,b.indexOf("=")>-1&&(b=b.substring(b.indexOf("=")+2))),a(b)},this.resize=function(){var a=this.makeData();b.removeAllChildren(),this.customarr=a.customarr,this.initAbacus(a.mode),this.abacus.restore(a.abacusinuse),this.abacus.restoreTri(a.trix)},this.clear=function(){b.removeAllChildren(),this.initAbacus(this.abacustype)},this.makeData=function(){var a={};return a.mode=this.abacustype,a.customarr=this.customarr,a.abacusinuse=this.abacus.save(),a.trix=this.abacus.saveTri(),console.log("arr"),console.log(a),a},this.stop=function(b){void 0===b&&(b=!1);var c=this.makeData();console.log(c);var d=JSON.stringify(c);a.getDatastoreObject().setDataAsText(d),1==b?a.getDatastoreObject().save(function(){location.reload()}):a.getDatastoreObject().save(function(){a.close()})},this.init=function(){console.log("init"),console.log(a.getDatastoreObject()),a.getDatastoreObject().getMetadata(this.init_canaccessdatastore.bind(this))},this.init_canaccessdatastore=function(b,c){console.log("datastore check");var d=(new Date).getTime();Math.abs(d-c.creation_time)<2e3?(console.log("Time too short"),this.initActivity(!1,[])):a.getDatastoreObject().loadAsText(this.init_getdatastore.bind(this))},this.init_getdatastore=function(a,b,c){null==a&&null!=c?(c=JSON.parse(c),this.initActivity(!0,c)):this.initActivity(!1,[])},this.initAbacus=function(a){switch(b.removeAllChildren(),a){case 0:this.Decimal(b,c);break;case 1:this.Soroban(b,c);break;case 2:this.Suanpan(b,c);break;case 3:this.Nepohualtzintzin(b,c);break;case 4:this.Hexadecimal(b,c);break;case 5:this.Binary(b,c);break;case 6:this.Schety(b,c);break;case 7:this.Fractions(b,c);break;case 8:this.Caacupé(b,c);break;case 9:this.Rods(b,c);break;case 10:this.Custom(b,c)}},this.initActivity=function(a,h){console.log(a),console.log(h),window.Fraction=d,this.palette=new f.AbacusPalette(this,e.getElementById("abacus-button"),void 0),this.custompalette=new g.CustomPalette(this,e.getElementById("settings-button"),void 0),a?(this.customarr=h.customarr,this.initAbacus(h.mode),this.abacus.restore(h.abacusinuse),this.abacus.restoreTri(h.trix)):this.Suanpan(b,c),this.palette.setUsed()}}