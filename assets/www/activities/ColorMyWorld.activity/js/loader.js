/*! Sugarizer 2018-05-08 */
var l10n_s;requirejs.config({baseUrl:"lib",paths:{activity:"../js",l10n:"../js"}}),requirejs(["activity/activity"]),requirejs(["l10n/l10n","sugar-web/env","sugar-web/datastore"],function(a,b){l10n_s=document.webL10n,b.getEnvironment(function(a,b){var c="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,d=b.user?b.user.language:c;l10n_s.setLanguage(d),console.log(">>"+d)})});