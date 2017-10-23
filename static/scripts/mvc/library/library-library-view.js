define([],function(){"use strict";define(["libs/toastr","mvc/library/library-model","mvc/ui/ui-select"],function(e,s,t){return{LibraryView:Backbone.View.extend({el:"#center",model:null,options:{},events:{"click .toolbtn_save_permissions":"savePermissions"},initialize:function(e){this.options=_.extend(this.options,e),this.options.id&&this.fetchLibrary()},fetchLibrary:function(t){this.options=_.extend(this.options,t),this.model=new s.Library({id:this.options.id});var i=this;this.model.fetch({success:function(){i.options.show_permissions&&i.showPermissions()},error:function(s,t){void 0!==t.responseJSON?e.error(t.responseJSON.err_msg+" Click this to go back.","",{onclick:function(){Galaxy.libraries.library_router.back()}}):e.error("An error occurred. Click this to go back.","",{onclick:function(){Galaxy.libraries.library_router.back()}})}})},showPermissions:function(s){this.options=_.extend(this.options,s),$(".tooltip").remove(),void 0!==this.options.fetched_permissions&&(0===this.options.fetched_permissions.access_library_role_list.length?this.model.set({is_unrestricted:!0}):this.model.set({is_unrestricted:!1}));var t=!1;Galaxy.user&&(t=Galaxy.user.isAdmin());var i=this.templateLibraryPermissions();this.$el.html(i({library:this.model,is_admin:t}));var r=this;$.get(Galaxy.root+"api/libraries/"+r.id+"/permissions?scope=current").done(function(e){r.prepareSelectBoxes({fetched_permissions:e})}).fail(function(){e.error("An error occurred while attempting to fetch library permissions.")}),$("#center [data-toggle]").tooltip(),$("#center").css("overflow","auto")},_serializeRoles:function(e){for(var s=[],t=0;t<e.length;t++)s.push(e[t][1]+":"+e[t][0]);return s},prepareSelectBoxes:function(e){this.options=_.extend(this.options,e);var s=this.options.fetched_permissions,i=this,r=this._serializeRoles(s.access_library_role_list),a=this._serializeRoles(s.add_library_item_role_list),o=this._serializeRoles(s.manage_library_role_list),n=this._serializeRoles(s.modify_library_role_list);i.accessSelectObject=new t.View(this._createSelectOptions(this,"access_perm",r,!0)),i.addSelectObject=new t.View(this._createSelectOptions(this,"add_perm",a,!1)),i.manageSelectObject=new t.View(this._createSelectOptions(this,"manage_perm",o,!1)),i.modifySelectObject=new t.View(this._createSelectOptions(this,"modify_perm",n,!1))},_createSelectOptions:function(e,s,t,i){return i=!0===i&&i,{minimumInputLength:0,css:s,multiple:!0,placeholder:"Click to select a role",container:e.$el.find("#"+s),ajax:{url:Galaxy.root+"api/libraries/"+e.id+"/permissions?scope=available&is_library_access="+i,dataType:"json",quietMillis:100,data:function(e,s){return{q:e,page_limit:10,page:s}},results:function(e,s){var t=10*s<e.total;return{results:e.roles,more:t}}},formatResult:function(e){return e.name+" type: "+e.type},formatSelection:function(e){return e.name},initSelection:function(e,s){var t=[];$(e.val().split(",")).each(function(){var e=this.split(":");t.push({id:e[0],name:e[1]})}),s(t)},initialData:t,dropdownCssClass:"bigdrop"}},makeDatasetPrivate:function(){var s=this;$.post(Galaxy.root+"api/libraries/datasets/"+s.id+"/permissions?action=make_private").done(function(t){s.model.set({is_unrestricted:!1}),s.showPermissions({fetched_permissions:t}),e.success("The dataset is now private to you.")}).fail(function(){e.error("An error occurred while attempting to make dataset private.")})},removeDatasetRestrictions:function(){var s=this;$.post(Galaxy.root+"api/libraries/datasets/"+s.id+"/permissions?action=remove_restrictions").done(function(t){s.model.set({is_unrestricted:!0}),s.showPermissions({fetched_permissions:t}),e.success("Access to this dataset is now unrestricted.")}).fail(function(){e.error("An error occurred while attempting to make dataset unrestricted.")})},_extractIds:function(e){for(var s=[],t=e.length-1;t>=0;t--)s.push(e[t].id);return s},savePermissions:function(s){var t=this,i=this._extractIds(this.accessSelectObject.$el.select2("data")),r=this._extractIds(this.addSelectObject.$el.select2("data")),a=this._extractIds(this.manageSelectObject.$el.select2("data")),o=this._extractIds(this.modifySelectObject.$el.select2("data"));$.post(Galaxy.root+"api/libraries/"+t.id+"/permissions?action=set_permissions",{"access_ids[]":i,"add_ids[]":r,"manage_ids[]":a,"modify_ids[]":o}).done(function(s){t.showPermissions({fetched_permissions:s}),e.success("Permissions saved.")}).fail(function(){e.error("An error occurred while attempting to set library permissions.")})},templateLibraryPermissions:function(){return _.template(['<div class="library_style_container">','<div id="library_toolbar">','<a href="#">','<button data-toggle="tooltip" data-placement="top" title="Go back to the list of Libraries" class="btn btn-default primary-button" type="button">','<span class="fa fa-list"/>',"&nbsp;Libraries","</button>","</a>","</div>","<h1>",'Library: <%= _.escape(library.get("name")) %>',"</h1>",'<div class="alert alert-warning">',"<% if (is_admin) { %>","You are logged in as an <strong>administrator</strong> therefore you can manage any library on this Galaxy instance. Please make sure you understand the consequences.","<% } else { %>","You can assign any number of roles to any of the following permission types. However please read carefully the implications of such actions.","<% }%>","</div>",'<div class="dataset_table">',"<h2>Library permissions</h2>","<h4>Roles that can access the library</h4>",'<div id="access_perm" class="access_perm roles-selection"/>','<div class="alert alert-info roles-selection">',"User with <strong>any</strong> of these roles can access this library. If there are no access roles set on the library it is considered <strong>unrestricted</strong>.","</div>","<h4>Roles that can manage permissions on this library</h4>",'<div id="manage_perm" class="manage_perm roles-selection"/>','<div class="alert alert-info roles-selection">',"User with <strong>any</strong> of these roles can manage permissions on this library (includes giving access).","</div>","<h4>Roles that can add items to this library</h4>",'<div id="add_perm" class="add_perm roles-selection"/>','<div class="alert alert-info roles-selection">',"User with <strong>any</strong> of these roles can add items to this library (folders and datasets).","</div>","<h4>Roles that can modify this library</h4>",'<div id="modify_perm" class="modify_perm roles-selection"/>','<div class="alert alert-info roles-selection">',"User with <strong>any</strong> of these roles can modify this library (name, synopsis, etc.).","</div>",'<button data-toggle="tooltip" data-placement="top" title="Save modifications made on this page" class="btn btn-default toolbtn_save_permissions primary-button" type="button">','<span class="fa fa-floppy-o"/>',"&nbsp;Save","</button>","</div>","</div>"].join(""))}})}})});
//# sourceMappingURL=../../../maps/mvc/library/library-library-view.js.map
