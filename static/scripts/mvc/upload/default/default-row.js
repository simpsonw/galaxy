define(["exports","utils/utils","mvc/upload/upload-model","mvc/upload/upload-settings","mvc/ui/ui-popover","mvc/ui/ui-select"],function(e,t,s,i,o,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var l=a(t),d=(a(s),a(i)),h=a(o),r=a(n);e.default=Backbone.View.extend({status_classes:{init:"upload-icon-button fa fa-trash-o",queued:"upload-icon fa fa-spinner fa-spin",running:"upload-icon fa fa-spinner fa-spin",success:"upload-icon-button fa fa-check",error:"upload-icon-button fa fa-exclamation-triangle"},initialize:function(e,t){var s=this;this.app=e,this.model=t.model,this.setElement(this._template(t.model)),this.$mode=this.$(".upload-mode"),this.$title=this.$(".upload-title"),this.$text=this.$(".upload-text"),this.$size=this.$(".upload-size"),this.$info_text=this.$(".upload-info-text"),this.$info_progress=this.$(".upload-info-progress"),this.$text_content=this.$(".upload-text-content"),this.$settings=this.$(".upload-settings"),this.$symbol=this.$(".upload-symbol"),this.$progress_bar=this.$(".upload-progress-bar"),this.$percentage=this.$(".upload-percentage"),this.settings=new h.default.View({title:"Upload configuration",container:this.$(".upload-settings"),placement:"bottom"});var i=this.app.select_genome.value(),o=this.app.select_extension.value();this.select_genome=new r.default.View({css:"upload-genome",data:s.app.list_genomes,container:this.$(".upload-genome"),value:i,onchange:function(e){s.model.set("genome",e)}}),this.select_extension=new r.default.View({css:"upload-extension",data:s.app.list_extensions,container:this.$(".upload-extension"),value:o,onchange:function(e){s.model.set("extension",e)}}),this.model.set({genome:i,extension:o}),this.$symbol.on("click",function(){s._removeRow()}),this.$(".upload-extension-info").on("click",function(e){s.app.showExtensionInfo({$el:$(e.target),title:s.select_extension.text(),extension:s.select_extension.value()})}).on("mousedown",function(e){e.preventDefault()}),this.$settings.on("click",function(e){s._showSettings()}).on("mousedown",function(e){e.preventDefault()}),this.$text_content.on("change input",function(e){s.model.set({url_paste:$(e.target).val(),file_size:$(e.target).val().length})}),this.listenTo(this.model,"change:percentage",function(){s._refreshPercentage()}),this.listenTo(this.model,"change:status",function(){s._refreshStatus()}),this.listenTo(this.model,"change:info",function(){s._refreshInfo()}),this.listenTo(this.model,"change:genome",function(){s._refreshGenome()}),this.listenTo(this.model,"change:extension",function(){s._refreshExtension()}),this.listenTo(this.model,"change:file_size",function(){s._refreshFileSize()})},render:function(){this._refreshType(),this._refreshPercentage(),this._refreshStatus(),this._refreshInfo(),this._refreshGenome(),this._refreshExtension(),this._refreshFileSize()},remove:function(){this.select_genome.remove(),this.select_extension.remove(),Backbone.View.prototype.remove.apply(this)},_refreshType:function(){var e=this.model.attributes;this.$title.html(_.escape(e.file_name)),this.$size.html(l.default.bytesToString(e.file_size)),this.$mode.removeClass().addClass("upload-mode").addClass("text-primary"),"new"==e.file_mode?(this.$text.css({width:this.$el.width()-16+"px",top:this.$el.height()-8+"px"}).show(),this.$el.height(this.$el.height()-8+this.$text.height()+16),this.$mode.addClass("fa fa-edit")):"local"==e.file_mode?this.$mode.addClass("fa fa-laptop"):"ftp"==e.file_mode&&this.$mode.addClass("fa fa-folder-open-o")},_refreshExtension:function(){this.select_extension.value(this.model.get("extension"))},_refreshGenome:function(){this.select_genome.value(this.model.get("genome"))},_refreshInfo:function(){var e=this.model.get("info");e?this.$info_text.html("<strong>Failed: </strong>"+e).show():this.$info_text.hide()},_refreshPercentage:function(){var e=parseInt(this.model.get("percentage"));this.$progress_bar.css({width:e+"%"}),this.$percentage.html(100!=e?e+"%":"Adding to history...")},_refreshStatus:function(){var e=this.model.get("status");this.$symbol.removeClass().addClass("upload-symbol").addClass(this.status_classes[e]),this.model.set("enabled","init"==e);var t=this.model.get("enabled");this.$text_content.attr("disabled",!t),t?(this.select_genome.enable(),this.select_extension.enable()):(this.select_genome.disable(),this.select_extension.disable()),"success"==e&&(this.$el.addClass("success"),this.$percentage.html("100%")),"error"==e&&(this.$el.addClass("danger"),this.$info_progress.hide())},_refreshFileSize:function(){this.$size.html(l.default.bytesToString(this.model.get("file_size")))},_removeRow:function(){-1!==["init","success","error"].indexOf(this.model.get("status"))&&this.app.collection.remove(this.model)},_showSettings:function(){this.settings.visible?this.settings.hide():(this.settings.empty(),this.settings.append(new d.default(this).$el),this.settings.show())},_template:function(e){return'<tr id="upload-row-'+e.id+'" class="upload-row"><td><div class="upload-text-column"><div class="upload-mode"/><div class="upload-title"/><div class="upload-text"><div class="upload-text-info">You can tell Galaxy to download data from web by entering URL in this box (one per line). You can also directly paste the contents of a file.</div><textarea class="upload-text-content form-control"/></div></div></td><td><div class="upload-size"/></td><td><div class="upload-extension" style="float: left;"/>&nbsp;&nbsp<div class="upload-extension-info upload-icon-button fa fa-search"/></td><td><div class="upload-genome"/></td><td><div class="upload-settings upload-icon-button fa fa-gear"/></td><td><div class="upload-info"><div class="upload-info-text"/><div class="upload-info-progress progress"><div class="upload-progress-bar progress-bar progress-bar-success"/><div class="upload-percentage">0%</div></div></div></td><td><div class="upload-symbol '+this.status_classes.init+'"/></td></tr>'}})});
//# sourceMappingURL=../../../../maps/mvc/upload/default/default-row.js.map
