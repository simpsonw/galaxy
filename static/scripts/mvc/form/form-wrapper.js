define(["exports","mvc/form/form-view","mvc/ui/ui-misc"],function(e,t,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var a=i(t),n=i(s),o=Backbone.View.extend({initialize:function(e){this.model=new Backbone.Model(e),this.url=this.model.get("url"),this.redirect=this.model.get("redirect"),this.setElement("<div/>"),this.render()},render:function(){var e=this;$.ajax({url:Galaxy.root+this.url,type:"GET"}).done(function(t){var s=$.extend({},e.model.attributes,t),i=new a.default({title:s.title,message:s.message,status:s.status||"warning",icon:s.icon,inputs:s.inputs,buttons:{submit:new n.default.Button({tooltip:s.submit_tooltip,title:s.submit_title||"Save",icon:s.submit_icon||"fa-save",cls:"btn btn-primary ui-clear-float",onclick:function(){e._submit(i)}})}});e.$el.empty().append(i.$el)}).fail(function(t){e.$el.empty().append(new n.default.Message({message:"Failed to load resource "+e.url+".",status:"danger",persistent:!0}).$el)})},_submit:function(e){var t=this;$.ajax({url:Galaxy.root+t.url,data:JSON.stringify(e.data.create()),type:"PUT",contentType:"application/json"}).done(function(s){var i={message:s.message,status:"success",persistent:!1};t.redirect?window.location=Galaxy.root+t.redirect+"?"+$.param(i):(e.data.matchModel(s,function(t,s){e.field_list[s].value(t.value)}),t._showMessage(e,i))}).fail(function(s){t._showMessage(e,{message:s.responseJSON.err_msg,status:"danger",persistent:!1})})},_showMessage:function(e,t){e.$el.parents().filter(function(){return-1!=["auto","scroll"].indexOf($(this).css("overflow"))}).first().animate({scrollTop:0},500),e.message.update(t)}});e.default={View:o}});
//# sourceMappingURL=../../../maps/mvc/form/form-wrapper.js.map
