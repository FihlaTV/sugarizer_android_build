/*! Sugarizer 2017-09-04 */
requirejs.config({baseUrl:"lib",paths:{activity:"../js"}});var getUrlParameter=function(a){var b=RegExp("[?&]"+a+"=([^&]*)").exec(window.location.search);return b&&decodeURIComponent(b[1].replace(/\+/g," "))};getUrlParameter("onsugar")||requirejs(["activity/activity"]);