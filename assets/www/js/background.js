/*! Sugarizer 2017-08-25 */
chrome.app.runtime.onLaunched.addListener(function(){chrome.app.window.create("../sandbox.html",{id:"mainwin",state:"fullscreen"},function(a){})});