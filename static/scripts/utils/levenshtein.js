define([],function(){"use strict";define([],function(){return function(n,t){if(0===n.length)return t.length;if(0===t.length)return n.length;var e,r=[];for(e=0;e<=t.length;e++)r[e]=[e];var h;for(h=0;h<=n.length;h++)r[0][h]=h;for(e=1;e<=t.length;e++)for(h=1;h<=n.length;h++)t.charAt(e-1)===n.charAt(h-1)?r[e][h]=r[e-1][h-1]:r[e][h]=Math.min(r[e-1][h-1]+1,Math.min(r[e][h-1]+1,r[e-1][h]+1));return r[t.length][n.length]}})});
//# sourceMappingURL=../../maps/utils/levenshtein.js.map
