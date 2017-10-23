define(["exports","utils/utils"],function(t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});!function(t){t&&t.__esModule}(a);var e=Backbone.Model.extend({initialize:function(t){this.app=t},checksum:function(){var t="",a=this;return this.app.section.$el.find(".section-row").each(function(){var e=$(this).attr("id"),i=a.app.field_list[e];i&&(t+=e+":"+JSON.stringify(i.value&&i.value())+":"+i.collapsed+";")}),t},create:function(){function t(t,a,i){e.flat_dict[t]=a,r[t]=i,e.app.element_list[a]&&e.app.element_list[a].$el.attr("tour_id",t)}function a(n,r){for(var s in r){var l=r[s];if(l.input){var c=l.input,o=n;switch(""!=n&&(o+="|"),o+=c.name,c.type){case"repeat":var u=[],f=null;for(var p in l){var d=p.indexOf("section-");-1!=d&&(d+="section-".length,u.push(parseInt(p.substr(d))),f||(f=p.substr(0,d)))}u.sort(function(t,a){return t-a});s=0;for(var v in u)a(o+"_"+s++,l[f+u[v]]);break;case"conditional":m=e.app.field_list[c.id].value();t(o+"|"+c.test_param.name,c.id,m);var _=i(c,m);-1!=_&&a(o,r[c.id+"-section-"+_]);break;case"section":a(!c.flat&&o||"",l);break;default:var h=e.app.field_list[c.id];if(h&&h.value){var m=h.value();if((void 0===c.ignore||c.ignore!=m)&&(h.collapsed&&c.collapsible_value&&(m=c.collapsible_value),t(o,c.id,m),c.payload))for(var b in c.payload)t(b,c.id,c.payload[b])}}}}}var e=this,n={};this._iterate(this.app.section.$el,n);var r={};return this.flat_dict={},a("",n),r},match:function(t){return this.flat_dict&&this.flat_dict[t]},matchCase:function(t,a){return i(t,a)},matchModel:function(t,a){var e=this;n(t.inputs,function(t,i){e.flat_dict[i]&&a(t,e.flat_dict[i])})},matchResponse:function(t){function a(t,n){if("string"==typeof n){var r=i.flat_dict[t];r&&(e[r]=n)}else for(var s in n){var l=s;if(""!==t){var c="|";n instanceof Array&&(c="_"),l=t+c+l}a(l,n[s])}}var e={},i=this;return a("",t),e},_iterate:function(t,a){var e=this;$(t).children().each(function(){var t=this,i=$(t).attr("id");if($(t).hasClass("section-row")){var n=e.app.input_list[i];a[i]=n&&{input:n}||{},e._iterate(t,a[i])}else e._iterate(t,a)})}}),i=function(t,a){"boolean"==t.test_param.type&&(a="true"==a?t.test_param.truevalue||"true":t.test_param.falsevalue||"false");for(var e in t.cases)if(t.cases[e].value==a)return e;return-1},n=function t(a,e,n,r){r=$.extend(!0,{},r),_.each(a,function(t){t&&t.type&&t.name&&(r[t.name]=t)});for(var s in a){var l=a[s];l.name=l.name||s;var c=n?n+"|"+l.name:l.name;switch(l.type){case"repeat":_.each(l.cache,function(a,i){t(a,e,c+"_"+i,r)});break;case"conditional":if(l.test_param){e(l.test_param,c+"|"+l.test_param.name,r);var o=i(l,l.test_param.value);-1!=o?t(l.cases[o].inputs,e,c,r):Galaxy.emit.debug("form-data::visitInputs() - Invalid case for "+c+".")}else Galaxy.emit.debug("form-data::visitInputs() - Conditional test parameter missing for "+c+".");break;case"section":t(l.inputs,e,c,r);break;default:e(l,c,r)}}};t.default={Manager:e,visitInputs:n}});
//# sourceMappingURL=../../../maps/mvc/form/form-data.js.map
