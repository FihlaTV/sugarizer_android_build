/*! Sugarizer 2017-08-25 */
function computeSize(){document.getElementById("sugarizerframe").height=window.innerHeight}computeSize(),window.onresize=computeSize,window.addEventListener("message",function(a){chrome.app.window.current().close()});