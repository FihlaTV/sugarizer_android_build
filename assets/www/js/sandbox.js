/*! Sugarizer 2018-05-08 */
function computeSize(){document.getElementById("sugarizerframe").height=window.innerHeight}computeSize(),window.onresize=computeSize,window.addEventListener("message",function(a){chrome.app.window.current().close()});