/*! Sugarizer 2019-09-21 */
var l10n_s;requirejs.config({baseUrl:"lib",paths:{activity:"../js"}}),requirejs(["activity/activity"]),requirejs(["webL10n","sugar-web/env","sugar-web/datastore"],function(a,b){l10n_s=a,b.getEnvironment(function(a,b){var c="undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime?chrome.i18n.getUILanguage():navigator.language,d=b.user?b.user.language:c;l10n_s.language.code=d})});