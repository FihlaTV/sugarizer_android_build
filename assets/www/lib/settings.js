/*! Sugarizer 2018-05-08 */
define(["sugar-web/datastore"],function(a){var b={};return b.init=function(){this.name="<No name>",this.color=22,this.colorvalue=null,this.activities=[],this.view=0,this.language="en";var a=navigator.language;a&&(a.indexOf("fr")!=-1?this.language="fr":a.indexOf("es")!=-1?this.language="es":a.indexOf("de")!=-1?this.language="de":a.indexOf("ar")!=-1?this.language="ar":a.indexOf("ja")!=-1?this.language="ja":a.indexOf("pl")!=-1?this.language="pl":a.indexOf("pt")!=-1&&(this.language="pt")),this.options={stats:!0,sync:"http"==document.location.protocol.substr(0,4)},this.connected=!1,this.server=null,this.networkId=null,this.privateJournal=null,this.sharedJournal=null,this.genericActivity={directory:"icons",icon:"application-x-generic.svg"},this.token=null,this.histoy=null},b.init(),b.load=function(b){var c=this;a.localStorage.load(function(){c.history=a.localStorage.getValue("sugar_history");var d=a.localStorage.getValue("sugar_settings");return null==d||void 0===d.name?void(b&&b(!1)):(c.name=d.name,c.color=d.color,c.colorvalue=d.colorvalue,c.view=d.view,void 0!==d.language&&(c.language=d.language),void 0!==d.connected&&(c.connected=d.connected),void 0!==d.server&&(c.server=d.server),void 0!==d.networkId&&(c.networkId=d.networkId),void 0!==d.privateJournal&&(c.privateJournal=d.privateJournal),void 0!==d.sharedJournal&&(c.sharedJournal=d.sharedJournal),void 0!==d.token&&(c.token=d.token),void 0!==d.options&&(c.options=d.options),l10n.language.code=c.language,c.activities=d.activities,c.updateEntries(),void(b&&b(!0)))})},b.updateEntries=function(){for(var b=this.activities?this.activities.length:0,c=0;c<b;c++){var d=this.activities[c];d.instances=a.find(d.id),d.instances.sort(function(a,b){return parseInt(b.metadata.timestamp)-parseInt(a.metadata.timestamp)})}},b.save=function(){a.localStorage.setValue("sugar_settings",{name:this.name,color:this.color,options:this.options,colorvalue:xoPalette.colors[this.color],activities:this.activities,view:app.getView(),language:this.language,connected:this.connected,server:this.server,networkId:this.networkId,privateJournal:this.privateJournal,sharedJournal:this.sharedJournal,token:this.token})},b.saveToServer=function(a,b,c){if(null!=this.networkId){var d=this;a.putUser(this.networkId,{name:d.name,color:xoPalette.colors[d.color],language:d.language,options:d.options,favorites:d.getFavoritesActivitiesName()},function(a,c){b&&b()},function(a,b){console.log("WARNING: Error updating network user"),c&&c(a,b)})}else b&&b()},b.merge=function(a){var b=!1;if(void 0!==a.name&&a.name!=this.name&&(this.name=a.name,b=!0),null!=this.colorvalue&&(void 0===a.color||a.color.fill==this.colorvalue.fill&&a.color.stroke==this.colorvalue.stroke)||(this.colorvalue=a.color,this.color=util.getColorIndex(this.colorvalue),b=!0),void 0!==a.language&&a.language!=this.language&&(this.language=a.language,b=!0),void 0!==a.favorites)for(var c=0;c<this.activities.length;c++){var d=this.activities[c].favorite;this.activities[c].favorite=!1;for(var e=0;e<a.favorites.length;e++)a.favorites[e]==this.activities[c].id&&(this.activities[c].favorite=!0);b=b||d!=this.activities[c].favorite}if(void 0!==a.server&&a.server!=this.server&&(this.server=a.server,b=!0),void 0!==a.networkId&&a.networkId!=this.networkId&&(this.networkId=a.networkId,b=!0),void 0!==a.private_journal&&a.private_journal!=this.privateJournal&&(this.privateJournal=a.private_journal),void 0!==a.shared_journal&&a.shared_journal!=this.sharedJournal&&(this.sharedJournal=a.shared_journal),void 0!==a.options&&void 0!==this.options)for(var f in a.options)this.options.hasOwnProperty(f)&&this.options[f]==a.options[f]||(this.options[f]=a.options[f],b=!0);return b},b.reset=function(b){a.localStorage.removeValue("sugar_settings"),b&&(a.localStorage.removeValue("sugar_history"),a.localStorage.removeValue("sugar_stats"))},b.getName=function(){return this.name},b.getColor=function(){return xoPalette.colors[this.color]},b.getView=function(){return this.view},b.getLanguage=function(){return this.language},b.getActivities=function(){return this.activities},b.getActivitiesByName=function(a){if(void 0===a||null==a||0==a.length)return this.activities;for(var b=this.activities,c=[],d=0;d<b.length;d++)b[d].name.toLowerCase().indexOf(a)!=-1&&c.push(b[d]);return c},b.getActivity=function(a){for(var b=0;b<this.activities.length;b++)if(this.activities[b].id==a)return this.activities[b];return this.genericActivity},b.getFavoritesActivities=function(){for(var a=[],b=0;b<this.activities.length;b++)this.activities[b].favorite&&a.push(this.activities[b]);return a},b.getFavoritesActivitiesName=function(){for(var a=this.getFavoritesActivities(),b=[],c=0;c<a.length;c++)b.push(a[c].id);return b},b.isConnected=function(){return this.connected||util.getClientType()==constant.webAppType},b.getServer=function(){return this.server},b.getNetworkId=function(){var a=this.token;return a&&a.x_key?a.x_key:null},b.getPrivateJournal=function(){return this.privateJournal},b.getSharedJournal=function(){return this.sharedJournal},b.getToken=function(){return this.token},b.getHistory=function(){return this.history},b.getOptions=function(a){if(this.options)return this.options[a]},b.setName=function(a){this.name=a},b.setColor=function(a){a>=0&&a<xoPalette.colors.length&&(this.color=a)},b.setLanguage=function(a){this.language=a},b.setActivities=function(a){this.activities=a},b.setConnected=function(a){this.connected=a},b.setServer=function(a){this.server=a},b.setNetworkId=function(a){this.networkId=a},b.setPrivateJournal=function(a){this.privateJournal=a},b.setSharedJournal=function(a){this.sharedJournal=a},b.setToken=function(a){this.token=a},b.setOptions=function(a,b){this.options||(this.options={}),this.options[a]=b},b.addUserInHistory=function(){for(var b={name:this.name,color:this.color,server:this.server},c=this.history?this.history:[],d=0;d<c.length;d++)if(this.name.toLowerCase()==c[d].name.toLowerCase()&&(null==this.server&&null==c[d].server||this.server&&this.server.url&&c[d].server&&c[d].server.url&&this.server.url==c[d].server.url))return c[d]=c[c.length-1],c[c.length-1]=b,void a.localStorage.setValue("sugar_history",c);if(c.push(b),c.length>constant.maxUserHistory){for(var e=[],d=0;d<c.length-1;d++)e.push(c[d+1]);c=e}a.localStorage.setValue("sugar_history",c)},b.updateActivities=function(a){for(var b=!1,c=0,d=0;d<a.length;d++){for(var e=!1,f=0;!e&&f<this.activities.length;f++)a[d].id==this.activities[f].id&&(e=!0,c++,this.activities[f].version!=a[d].version&&(this.activities[f].name=a[d].name,this.activities[f].version=a[d].version,this.activities[f].directory=a[d].directory,this.activities[f].icon=a[d].icon,b=!0));e||(this.activities.push(a[d]),b=!0)}if(c!=this.activities.length){b=!0;for(var g=[],d=0;d<this.activities.length;d++)for(var e=!1,f=0;!e&&f<a.length;f++)this.activities[d].id!=a[f].id&&"native"!=this.activities[d].type||(e=!0,g.push(this.activities[d]));this.activities=g}return b},b.nextColor=function(){this.color=(this.color+1)%xoPalette.colors.length},b.runActivity=function(b,c,d,e,f){if(null!=b.type&&"native"==b.type){if(sugarizerOS)return sugarizerOS.runActivity(b.id),void sugarizerOS.addApplicationToJournal(sugarizerOS.log,b,a);console.log("No sugarizerOS instance found")}null==b.activityId&&(b.activityId=a.createUUID()),this.save();var g=b.directory+"/index.html?aid="+b.activityId+"&a="+b.id;void 0===c?null!=b.instances&&b.instances.length>0?(c=b.instances[0].objectId,g=g+"&o="+c+"&n="+b.instances[0].metadata.title):g=g+"&n="+b.name:g=null!=c?g+"&o="+c+"&n="+d:g+"&n="+b.name,e&&(g=g+"&s="+e),f&&(g+="&h=1"),stats.trace(constant.viewNames[app.getView()],(c?"re":"")+"launch_activity",b.id,c),window.location=g},b.switchFavoriteActivity=function(a){return a.favorite=!a.favorite,a.favorite},b});