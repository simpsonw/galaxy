define(["exports","libs/bootstrap-tour"],function(t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(t){t&&t.__esModule}(e);var o="undefined"==typeof Galaxy?"/":Galaxy.root,n={storage:window.sessionStorage,onEnd:function(){sessionStorage.removeItem("activeGalaxyTour")},delay:150,orphan:!0},i=function(t){return _.each(t.steps,function(t){t.preclick&&(t.onShow=function(){_.each(t.preclick,function(t){$(t).click()})}),t.postclick&&(t.onHide=function(){_.each(t.postclick,function(t){$(t).click()})}),t.textinsert&&(t.onShown=function(){$(t.element).val(t.textinsert).trigger("change")})}),t},r=Backbone.Model.extend({urlRoot:o+"api/tours"}),a=Backbone.Collection.extend({url:o+"api/tours",model:r}),s=function(t){var e=o+"api/tours/"+t;$.getJSON(e,function(t){var e=i(t);sessionStorage.setItem("activeGalaxyTour",JSON.stringify(t));var o=new Tour(_.extend({steps:e.steps},n));o.init(),o.goTo(0),o.restart()})},u=Backbone.View.extend({title:"Tours",initialize:function(){var t=this;this.setElement("<div/>"),this.model=new a,this.model.fetch({success:function(){t.render()},error:function(){console.error("Failed to fetch tours.")}})},render:function(){var t=_.template('<h2>Galaxy Tours</h2>\n<p>This page presents a list of interactive tours available on this Galaxy server.\nSelect any tour to get started (and remember, you can click \'End Tour\' at any time).</p>\n<ul>\n<% _.each(tours, function(tour) { %>\n    <li>\n        <a href="/tours/<%- tour.id %>" class="tourItem" data-tour.id=<%- tour.id %>>\n            <%- tour.attributes.name || tour.id %>\n        </a>\n         - <%- tour.attributes.description || "No description given." %>\n    </li>\n<% }); %>\n</ul>');this.$el.html(t({tours:this.model.models})).on("click",".tourItem",function(t){t.preventDefault(),s($(this).data("tour.id"))})}});t.default={ToursView:u,hooked_tour_from_data:i,tour_opts:n,giveTour:s}});
//# sourceMappingURL=../../maps/mvc/tours.js.map
