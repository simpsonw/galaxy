define([],function(){"use strict";!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){function t(t,n){n=n||(_.isEmpty(t)?"":t[0]);var r=e(['<div class="dropdown-select btn-group">','<button type="button" class="btn btn-default">','<span class="dropdown-select-selected">'+n+"</span>","</button>","</div>"].join("\n"));return t&&t.length>1&&(r.find("button").addClass("dropdown-toggle").attr("data-toggle","dropdown").append(' <span class="caret"></span>'),r.append(['<ul class="dropdown-menu" role="menu">',_.map(t,function(e){return['<li><a href="javascript:void(0)">',e,"</a></li>"].join("")}).join("\n"),"</ul>"].join("\n"))),r.find("a").click(function(t){var n=e(this),r=n.parents(".dropdown-select"),o=n.text();r.find(".dropdown-select-selected").text(o),r.trigger("change.dropdown-select",o)}),r}function n(e,t){return this.init(e,t)}n.prototype.DATA_KEY="filter-control",n.prototype.init=function(t,n){return n=n||{filters:[]},this.$element=e(t).addClass("filter-control btn-group"),this.options=jQuery.extend(!0,{},this.defaults,n),this.currFilter=this.options.filters[0],this.render()},n.prototype.render=function(){return this.$element.empty().append([this._renderKeySelect(),this._renderOpSelect(),this._renderValueInput()]),this},n.prototype._renderKeySelect=function(){var e=this,n=this.options.filters.map(function(e){return e.key});return this.$keySelect=t(n,this.currFilter.key).addClass("filter-control-key").on("change.dropdown-select",function(t,n){e.currFilter=_.findWhere(e.options.filters,{key:n}),e.render()._triggerChange()}),this.$keySelect},n.prototype._renderOpSelect=function(){var e=this,n=this.currFilter.ops;return this.$opSelect=t(n,n[0]).addClass("filter-control-op").on("change.dropdown-select",function(t,n){e._triggerChange()}),this.$opSelect},n.prototype._renderValueInput=function(){var n=this;return this.currFilter.values?this.$valueSelect=t(this.currFilter.values,this.currFilter.values[0]).on("change.dropdown-select",function(e,t){n._triggerChange()}):this.$valueSelect=e("<input/>").addClass("form-control").on("change",function(e,t){n._triggerChange()}),this.$valueSelect.addClass("filter-control-value"),this.$valueSelect},n.prototype.val=function(){var e=this.$element.find(".filter-control-key .dropdown-select-selected").text(),t=this.$element.find(".filter-control-op .dropdown-select-selected").text(),n=this.$element.find(".filter-control-value");return{key:e,op:t,value:n.hasClass("dropdown-select")?n.find(".dropdown-select-selected").text():n.val()}},n.prototype._triggerChange=function(){this.$element.trigger("change.filter-control",this.val())},jQuery.fn.extend({filterControl:function(t){var r=jQuery.makeArray(arguments).slice(1);return this.map(function(){var o=e(this),i=o.data(n.prototype.DATA_KEY);if("object"===jQuery.type(t)&&(i=new n(o,t),o.data(n.prototype.DATA_KEY,i)),i&&"string"===jQuery.type(t)){var l=i[t];if("function"===jQuery.type(l))return l.apply(i,r)}return this})}})})});
//# sourceMappingURL=../../maps/ui/filter-control.js.map
