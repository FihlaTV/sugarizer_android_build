/*! Sugarizer 2017-08-25 */
function sendError(a,b,c){var d=b.split("/").pop();debug(d+":"+c+" "+a)}function debug(){for(var a=arguments.length,b="",c=0;c<a-1;c++)b=b+arguments[c]+" ";b+=arguments[a-1],sendString(b)}function sendString(a){}window.onerror=sendError;