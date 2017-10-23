define(["exports","mvc/list/list-view","mvc/collection/collection-model","mvc/collection/collection-li","mvc/base-mvc","utils/localization"],function(e,t,i,l,s,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(t),d=(n(i),n(l)),c=n(s),r=n(o),f=a.default.ModelListPanel,u=f.extend({_logNamespace:"collections",className:f.prototype.className+" dataset-collection-panel",DatasetDCEViewClass:d.default.DatasetDCEListItemView,NestedDCDCEViewClass:d.default.NestedDCDCEListItemView,modelCollectionKey:"elements",initialize:function(e){f.prototype.initialize.call(this,e),this.linkTarget=e.linkTarget||"_blank",this.hasUser=e.hasUser,this.panelStack=[],this.parentName=e.parentName,this.foldoutStyle=e.foldoutStyle||"foldout",this.downloadUrl=this.model.attributes.url+"/download"},_queueNewRender:function(e,t){t=void 0===t?this.fxSpeed:t;var i=this;i.log("_queueNewRender:",e,t),i._swapNewRender(e),i.trigger("rendered",i)},_filterCollection:function(){return this.model.getVisibleContents()},_getItemViewClass:function(e){switch(e.get("element_type")){case"hda":return this.DatasetDCEViewClass;case"dataset_collection":return this.NestedDCDCEViewClass}throw new TypeError("Unknown element type:",e.get("element_type"))},_getItemViewOptions:function(e){var t=f.prototype._getItemViewOptions.call(this,e);return _.extend(t,{linkTarget:this.linkTarget,hasUser:this.hasUser,foldoutStyle:this.foldoutStyle})},_setUpItemViewListeners:function(e){var t=this;return f.prototype._setUpItemViewListeners.call(t,e),t.listenTo(e,{"expanded:drilldown":function(e,t){this._expandDrilldownPanel(t)},"collapsed:drilldown":function(e,t){this._collapseDrilldownPanel(t)}}),this},_expandDrilldownPanel:function(e){this.panelStack.push(e),this.$("> .controls").add(this.$list()).hide(),e.parentName=this.model.get("name"),this.$el.append(e.render().$el)},_collapseDrilldownPanel:function(e){this.panelStack.pop(),this.render()},events:{"click .navigation .back":"close"},close:function(e){this.remove(),this.trigger("close")},toString:function(){return"CollectionView("+(this.model?this.model.get("name"):"")+")"}});u.prototype.templates=function(){var e=c.default.wrapTemplate(['<div class="controls">','<div class="navigation">','<a class="back" href="javascript:void(0)">','<span class="fa fa-icon fa-angle-left"></span>',(0,r.default)("Back to "),"<%- view.parentName %>","</a>","</div>",'<div class="title">','<div class="name"><%- collection.name || collection.element_identifier %></div>','<div class="subtitle">','<% if( collection.collection_type === "list" ){ %>',(0,r.default)("a list of datasets"),'<% } else if( collection.collection_type === "paired" ){ %>',(0,r.default)("a pair of datasets"),'<% } else if( collection.collection_type === "list:paired" ){ %>',(0,r.default)("a list of paired datasets"),'<% } else if( collection.collection_type === "list:list" ){ %>',(0,r.default)("a list of dataset lists"),"<% } %>","</div>","</div>",'<div class="tags-display"></div>','<div class="actions">','<a class="download-btn icon-btn" ','href="<%- view.downloadUrl %>','" title="" download="" data-original-title="Download Collection">','<span class="fa fa-floppy-o"></span>',"</a>","</div>","</div>"],"collection");return _.extend(_.clone(f.prototype.templates),{controls:e})}();var p=u.extend({DatasetDCEViewClass:d.default.DatasetDCEListItemView,toString:function(){return"ListCollectionView("+(this.model?this.model.get("name"):"")+")"}}),m=p.extend({toString:function(){return"PairCollectionView("+(this.model?this.model.get("name"):"")+")"}}),h=u.extend({NestedDCDCEViewClass:d.default.NestedDCDCEListItemView.extend({foldoutPanelClass:m}),toString:function(){return"ListOfPairsCollectionView("+(this.model?this.model.get("name"):"")+")"}}),w=u.extend({NestedDCDCEViewClass:d.default.NestedDCDCEListItemView.extend({foldoutPanelClass:m}),toString:function(){return"ListOfListsCollectionView("+(this.model?this.model.get("name"):"")+")"}});e.default={CollectionView:u,ListCollectionView:p,PairCollectionView:m,ListOfPairsCollectionView:h,ListOfListsCollectionView:w}});
//# sourceMappingURL=../../../maps/mvc/collection/collection-view.js.map
