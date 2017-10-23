define([],function(){"use strict";define(["utils/utils","mvc/ui/ui-select-default","mvc/ui/ui-slider","mvc/ui/ui-options","mvc/ui/ui-drilldown","mvc/ui/ui-buttons","mvc/ui/ui-modal"],function(e,t,i,s,l,n,o){var a=Backbone.View.extend({tagName:"label",initialize:function(e){this.model=e&&e.model||new Backbone.Model(e),this.tagName=e.tagName||this.tagName,this.setElement($("<"+this.tagName+"/>")),this.listenTo(this.model,"change",this.render,this),this.render()},title:function(e){this.model.set("title",e)},value:function(){return this.model.get("title")},render:function(){return this.$el.removeClass().addClass("ui-label").addClass(this.model.get("cls")).html(this.model.get("title")),this}}),d=Backbone.View.extend({initialize:function(e){this.model=e&&e.model||new Backbone.Model({message:null,status:"info",cls:"",persistent:!1,fade:!0}).set(e),this.listenTo(this.model,"change",this.render,this),this.render()},update:function(e){this.model.set(e)},render:function(){this.$el.removeClass().addClass("ui-message").addClass(this.model.get("cls"));var e=this.model.get("status");if(this.model.get("large")?this.$el.addClass(("success"==e&&"done"||"danger"==e&&"error"||e)+"messagelarge"):this.$el.addClass("alert").addClass("alert-"+e),this.model.get("message")){if(this.$el.html(this.messageForDisplay()),this.$el[this.model.get("fade")?"fadeIn":"show"](),this.timeout&&window.clearTimeout(this.timeout),!this.model.get("persistent")){var t=this;this.timeout=window.setTimeout(function(){t.model.set("message","")},3e3)}}else this.$el.fadeOut();return this},messageForDisplay:function(){return _.escape(this.model.get("message"))}}),h=d.extend({messageForDisplay:function(){return this.model.get("message")}}),r=Backbone.View.extend({initialize:function(e){this.model=e&&e.model||new Backbone.Model({type:"text",placeholder:"",disabled:!1,readonly:!1,visible:!0,cls:"",area:!1,color:null,style:null}).set(e),this.tagName=this.model.get("area")?"textarea":"input",this.setElement($("<"+this.tagName+"/>")),this.listenTo(this.model,"change",this.render,this),this.render()},events:{input:"_onchange"},value:function(e){return void 0!==e&&this.model.set("value","string"==typeof e?e:""),this.model.get("value")},render:function(){var e=this;this.$el.removeClass().addClass("ui-"+this.tagName).addClass(this.model.get("cls")).addClass(this.model.get("style")).attr("id",this.model.id).attr("type",this.model.get("type")).attr("placeholder",this.model.get("placeholder")).css("color",this.model.get("color")||"").css("border-color",this.model.get("color")||"");var t=this.model.get("datalist");return $.isArray(t)&&t.length>0&&this.$el.autocomplete({source:function(t,i){i(e.model.get("datalist"))},change:function(){e._onchange()}}),this.model.get("value")!==this.$el.val()&&this.$el.val(this.model.get("value")),_.each(["readonly","disabled"],function(t){e.model.get(t)?e.$el.attr(t,!0):e.$el.removeAttr(t)}),this.$el[this.model.get("visible")?"show":"hide"](),this},_onchange:function(){this.value(this.$el.val()),this.model.get("onchange")&&this.model.get("onchange")(this.model.get("value"))}}),u=Backbone.View.extend({initialize:function(e){this.model=e&&e.model||new Backbone.Model(e),this.setElement($("<div/>").append(this.$info=$("<div/>")).append(this.$hidden=$("<div/>"))),this.listenTo(this.model,"change",this.render,this),this.render()},value:function(e){return void 0!==e&&this.model.set("value",e),this.model.get("value")},render:function(){return this.$el.attr("id",this.model.id),this.$hidden.val(this.model.get("value")),this.model.get("info")?this.$info.show().text(this.model.get("info")):this.$info.hide(),this}}),m=Backbone.View.extend({initialize:function(e){var t=this;this.model=e&&e.model||new Backbone.Model(e),this.setElement($("<div/>").append(this.$info=$("<div/>")).append(this.$file=$("<input/>").attr("type","file").addClass("ui-margin-bottom")).append(this.$text=$("<textarea/>").addClass("ui-textarea").attr("disabled",!0)).append(this.$wait=$("<i/>").addClass("fa fa-spinner fa-spin"))),this.listenTo(this.model,"change",this.render,this),this.$file.on("change",function(e){t._readFile(e)}),this.render()},value:function(e){return void 0!==e&&this.model.set("value",e),this.model.get("value")},render:function(){return this.$el.attr("id",this.model.id),this.model.get("info")?this.$info.show().text(this.model.get("info")):this.$info.hide(),this.model.get("value")?this.$text.text(this.model.get("value")).show():this.$text.hide(),this.model.get("wait")?this.$wait.show():this.$wait.hide(),this},_readFile:function(e){var t=this,i=e.target.files&&e.target.files[0];if(i){var s=new FileReader;s.onload=function(){t.model.set({wait:!1,value:this.result})},this.model.set({wait:!0,value:null}),s.readAsText(i)}}});return{Button:n.ButtonDefault,ButtonIcon:n.ButtonIcon,ButtonCheck:n.ButtonCheck,ButtonMenu:n.ButtonMenu,ButtonLink:n.ButtonLink,Input:r,Label:a,Message:d,UnescapedMessage:h,Upload:m,Modal:o,RadioButton:s.RadioButton,Checkbox:s.Checkbox,Radio:s.Radio,Select:t,Hidden:u,Slider:i,Drilldown:l}})});
//# sourceMappingURL=../../../maps/mvc/ui/ui-misc.js.map
