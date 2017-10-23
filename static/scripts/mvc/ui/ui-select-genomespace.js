define([],function(){"use strict";define(["utils/utils","mvc/ui/ui-misc","mvc/tool/tool-genomespace"],function(e,t,i){return{View:Backbone.View.extend({initialize:function(e){var i=this;this.browse_button=new t.ButtonIcon({title:"Browse",icon:"fa fa-sign-in",tooltip:"Browse GenomeSpace",onclick:function(){i.browseGenomeSpace()}}),this.filename_textbox=new t.Input,this.token_textbox=new t.Input({type:"password"}),this.setElement(this._template(e)),this.$(".ui-gs-browse-button").append(this.browse_button.$el),this.$(".ui-gs-filename-textbox").append(this.filename_textbox.$el),this.$(".ui-gs-token-textbox").append(this.token_textbox.$el)},browseGenomeSpace:function(e){var t=this;i.openFileBrowser({successCallback:function(e){t.value(e.destination+"^"+e.token)}})},_template:function(e){return'<div class="ui-gs-select-file"><div class="ui-gs-browse-field"><span class="ui-gs-browse-button" /><span class="ui-gs-filename-textbox" /></div><div class="ui-gs-token-field"><span class=ui-gs-label"><div class="ui-gs-token-label">Token</div></span><span class="ui-gs-token-textbox" /></div></div>'},value:function(e){if(void 0===e)return this._getValue();this._setValue(e)},_getValue:function(){return this.filename_textbox.value()+"^"+this.token_textbox.value()},_setValue:function(e){e&&(values=e.split("^"),this.filename_textbox.value(values[0]),this.token_textbox.value(values[1]))}})}})});
//# sourceMappingURL=../../../maps/mvc/ui/ui-select-genomespace.js.map
