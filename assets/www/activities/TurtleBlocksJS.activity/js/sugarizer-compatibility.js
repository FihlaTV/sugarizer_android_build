/*! Sugarizer 2019-09-21 */
define(["sugar-web/env","sugar-web/activity/activity","sugar-web/datastore"],function(a,b,c){var d={activity:b,data:{allProjects:"[]"},env:a,xoColor:{stroke:"#00A0FF",fill:"#8BFF7A"},saveLocally:function(a){var c=this;b.getDatastoreObject().setDataAsText(JSON.stringify(c.data)),b.getDatastoreObject().save(function(){a&&a()})},isInsideSugarizer:function(){return a.isSugarizer()},loadData:function(a){var c=this;b.getDatastoreObject().loadAsText(function(b,d,e){void 0!==e&&null!==e&&(c.data=JSON.parse(e)),d.buddy_color&&(c.xoColor=d.buddy_color),void 0!==a&&a()})},sugarizerStop:function(){document.getElementById("stop-button").click()},getLanguage:function(){var b={name:"",language:"undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language};return a.isSugarizer()?c.localStorage.getValue("sugar_settings").language:(callback(),b.language)},setup:function(){!1!==this.isInsideSugarizer()&&b.setup()}};return window.sugarizerCompatibility=d,d.setup(),d});