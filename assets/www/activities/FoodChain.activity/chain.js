/*! Sugarizer 2018-05-08 */
FoodChain.cards=["alligator","animal","bat","bee","bird","camel","cat","chicken","chimp","clam","corn","cow","crab","crocodile","crow","dog","duck","fish","flies","fox","frog","giraffe","goat","grass","hay","hen","lamb","mice","mole","mosquito","mule","owl","ox","pig","rat","shark","shrimp","skunk","snail","snake","spider","spike","squid","squirrel","starfish","swan","tick","wheat"],FoodChain.feedStrategy=[{name:"herbivore",members:["swan","bee","cow","giraffe","squirrel","goat","ox","lamb","mule","camel","chimp"]},{name:"carnivore",members:["mosquito","mole","spike","tick","squid","crab","owl","snake","dog","alligator","bat","crocodile","frog","shark","spider","starfish","crocodile"]},{name:"omnivore",members:["duck","flies","pig","mice","rat","skunk","chicken","hen","fox"]}],FoodChain.validChains=[["snake","mice","corn"],["cat","mice","corn"],["fox","bird","spider","mosquito"],["fox","bird","spider","flies"],["fox","duck","frog","flies"],["snake","frog","mosquito"],["snake","frog","flies"],["fox","duck","frog","snail","grass"],["spike","spider","mosquito"],["spike","spider","flies"],["shark","fish","shrimp"],["owl","bat","mosquito"],["owl","bat","flies"],["cat","bat","mosquito"],["cat","bat","flies"],["fox","hen","corn"],["fox","chicken","corn"],["cow","grass"],["starfish","clam"],["frog","snail","grass"],["skunk","rat","snail","grass"],["skunk","mice","snail","grass"],["spike","snail","grass"],["crow","snail","grass"],["duck","snail","grass"],["starfish","crab"]],FoodChain.randomChain=function(a){void 0==a&&(a=3);var b=[];for(var c in FoodChain.validChains){var d=FoodChain.validChains[c];if(!(d.length<a))if(d.length!=a){for(var e=Math.floor(Math.random()*(d.length-a)),f=[],g=e;g<e+a;g++)f.push(d[g]);b.push(f)}else b.push(d)}return b[Math.floor(Math.random()*b.length)]},FoodChain.mix=function(a){if(a.length<2)return a;for(var b=[],c=enyo.cloneArray(a);1!=c.length;){var d=Math.floor(Math.random()*c.length);b.push(c[d]),c[d]=null;for(var e=[],f=0;f<c.length;f++)null!=c[f]&&e.push(c[f]);c=e}return b.push(c[0]),b},FoodChain.randomFeedList=function(a,b){void 0==a&&(a=2);for(var c=[],d=0;d<b;d++){for(var e,f=Math.floor(Math.random()*a),g=-1;g==-1;){g=Math.floor(Math.random()*FoodChain.feedStrategy[f].members.length),e=FoodChain.feedStrategy[f].members[g];for(var h=0;g!=-1&&h<c.length;h++)c[h].cardname==e&&(g=-1)}c.push({cardname:e,strategy:f})}return c};