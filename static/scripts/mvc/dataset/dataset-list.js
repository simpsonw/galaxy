define(["exports","mvc/list/list-view","mvc/dataset/dataset-li","mvc/base-mvc","utils/localization"],function(t,e,a,i,s){"use strict";function l(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var n=l(e),o=l(a),c=(l(i),l(s)),u=n.default.ListPanel,d=u.extend({_logNamespace:"dataset",viewClass:o.default.DatasetListItemView,className:u.prototype.className+" dataset-list",noneFoundMsg:(0,c.default)("No matching datasets found"),initialize:function(t){u.prototype.initialize.call(this,t)},toString:function(){return"DatasetList("+this.collection+")"}});t.default={DatasetList:d}});
//# sourceMappingURL=../../../maps/mvc/dataset/dataset-list.js.map
