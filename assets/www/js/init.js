/*! Sugarizer 2018-05-08 */
if("undefined"!=typeof chrome&&chrome.app&&chrome.app.runtime)chrome.storage.local.get("sugar_settings",function(a){a.sugar_settings||chrome.storage.local.set({sugar_settings:JSON.stringify({})})});else if("undefined"!=typeof Storage&&"undefined"!=typeof window.localStorage)try{null===window.localStorage.getItem("sugar_settings")&&window.localStorage.setItem("sugar_settings",JSON.stringify({}))}catch(a){}