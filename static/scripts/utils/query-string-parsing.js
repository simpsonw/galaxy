define([],function(){"use strict";define([],function(){return{get:function(n,e){e=e||window.location.search.substr(1);var t=new RegExp(n+"=([^&#$]+)","g"),r=e.match(t);if(r&&r.length)return 1===(r=_.map(r,function(e){return decodeURIComponent(e.substr(n.length+1).replace(/\+/g," "))})).length?r[0]:r},parse:function(n){if(!n)return{};var e={};return n.split("&").forEach(function(n){var t=n.split("=");e[t[0]]=decodeURI(t[1])}),e}}})});
//# sourceMappingURL=../../maps/utils/query-string-parsing.js.map
