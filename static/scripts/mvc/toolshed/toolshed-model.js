define([],function(){"use strict";define([],function(){var o=Backbone.Model.extend({defaults:{url:"https://toolshed.g2.bx.psu.edu/",name:"Galaxy Main Tool Shed"},urlRoot:Galaxy.root+"api/tool_shed"}),e=Backbone.Collection.extend({url:Galaxy.root+"api/tool_shed",model:o}),t=Backbone.Model.extend({defaults:[{}],urlRoot:Galaxy.root+"api/tool_shed/contents"}),l=Backbone.Collection.extend({url:Galaxy.root+"api/tool_shed/contents",model:t}),a=Backbone.Model.extend({defaults:[{}],urlRoot:Galaxy.root+"api/tool_shed/category"}),n=Backbone.Collection.extend({url:Galaxy.root+"api/tool_shed/category",model:a}),r=Backbone.Model.extend({defaults:[{}],urlRoot:Galaxy.root+"api/tool_shed/repository"}),d=Backbone.Collection.extend({url:Galaxy.root+"api/tool_shed/repository",model:r}),s=Backbone.Model.extend({url:"#"}),i=Backbone.Collection.extend({url:"#",model:s,fetch:function(){var o=this,e=Array(),t=JSON.parse(localStorage.repositories),l=Object.keys(t);return _.each(l,function(o){var l=t[o];l.queue_key=o,e.push(l)}),o.reset(e),Backbone.Collection.prototype.fetch.call(this)}}),c=Backbone.Model.extend({defaults:[{}],urlRoot:Galaxy.root+"api/tool_shed/status"}),u=Backbone.Collection.extend({url:Galaxy.root+"api/tool_shed/status",model:c}),x=Backbone.Model.extend({defaults:[{}],urlRoot:Galaxy.root+"api/workflows?missing_tools=True"});return{ShedModel:o,ShedsCollection:e,Category:t,Categories:l,CategoryModel:a,CategoryCollection:n,RepositoryModel:r,RepositoryCollection:d,RepoQueue:i,RepoStatus:u,WorkflowTools:Backbone.Collection.extend({url:Galaxy.root+"api/workflows?missing_tools=True",model:x})}})});
//# sourceMappingURL=../../../maps/mvc/toolshed/toolshed-model.js.map
