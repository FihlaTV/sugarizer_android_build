/*! Sugarizer 2018-05-08 */
module.exports=function(a){a.set({frameworks:["jasmine","requirejs"],basePath:"..",files:["test/loader.js",{pattern:"lib/**/*.js",included:!1},{pattern:"*.js",included:!1},{pattern:"activity/**/*.js",included:!1},{pattern:"graphics/**/*",included:!1}],exclude:[],reporters:["progress"],port:9876,runnerPort:9100,colors:!0,logLevel:a.LOG_INFO,autoWatch:!0,captureTimeout:6e4,singleRun:!1,preprocessors:{}})};