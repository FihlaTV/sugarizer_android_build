/*! Sugarizer 2019-09-21 */
requirejs.config({baseUrl:"lib",paths:{activity:"../js"}});var getUrlParameter=function(a){var b=RegExp("[?&]"+a+"=([^&]*)").exec(window.location.search);return b&&decodeURIComponent(b[1].replace(/\+/g," "))};getUrlParameter("onsugar")||requirejs(["activity/activity"]);