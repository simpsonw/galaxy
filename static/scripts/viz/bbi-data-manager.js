define([],function(){"use strict";define(["viz/visualization","libs/bbi/bigwig"],function(e,a){return{BBIDataManager:e.GenomeDataManager.extend({load_data:function(e,t,n,i){var r=$.Deferred();this.set_data(e,r);var s=Galaxy.root+"datasets/"+this.get("dataset").id+"/display",d=this;new $.Deferred;return $.when(a.makeBwg(s)).then(function(a,t){$.when(a.readWigData(e.get("chrom"),e.get("start"),e.get("end"))).then(function(a){var t=[],n={max:Number.MIN_VALUE};a.forEach(function(e){n.max!==e.min-1&&(t.push([n.max+1,0]),t.push([e.min-2,0])),t.push([e.min-1,e.score]),t.push([e.max,e.score]),n=e});var i={data:t,region:e,dataset_type:"bigwig"};d.set_data(e,i),r.resolve(i)})}),r}})}})});
//# sourceMappingURL=../../maps/viz/bbi-data-manager.js.map
