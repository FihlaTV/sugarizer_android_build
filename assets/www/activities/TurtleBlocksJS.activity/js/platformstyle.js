/*! Sugarizer 2017-08-25 */
function showButtonHighlight(a,b,c,d,e,f){return platform.FFOS?{}:showMaterialHighlight(a,b,c,d,e,f)}window.platform={android:/Android/i.test(navigator.userAgent),FF:/Firefox/i.test(navigator.userAgent),mobile:/Mobi/i.test(navigator.userAgent),tablet:/Tablet/i.test(navigator.userAgent)},platform.androidWebkit=platform.android&&!platform.FF,platform.FFOS=platform.FF&&(platform.mobile||platform.tablet)&&!platform.android,console.log("On platform: ",platform),window.platformColor={header:(platform.FF,"#2584af"),doHeaderShadow:!platform.FF,background:(platform.FF,"#92b5c8")},document.querySelector("meta[name=theme-color]").content=platformColor.header;