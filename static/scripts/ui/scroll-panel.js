define([],function(){"use strict";$.ui.plugin.add("draggable","scrollPanel",{drag:function(t,o){var i=$(this).data("draggable");clearTimeout(i.timeout);var e=o.options,p=i.element,s=e.panel,n=s.position(),f=s.width(),a=s.height(),l=s.parent(),r=l.width(),m=l.height(),h=p.width(),u=p.height(),c=!1,d=-(f-r),g=-(a-m),M=-n.left,v=M+r,_=-n.top,b=_+m,w=o.position.left+i.offset.click.left;if(mouse_y=o.position.top+i.offset.click.top,n.left<0&&w-5<M){x=Math.min(23,0-n.left);s.css("left",n.left+x),c=!0,i.offset.parent.left+=x,o.position.left-=x}if(!c&&n.left>d&&w+5>v){x=Math.min(23,n.left-d);s.css("left",n.left-x),c=!0,i.offset.parent.left-=x,o.position.left+=x}if(!c&&n.top<0&&mouse_y-5<_){x=Math.min(23,0-n.top);s.css("top",n.top+x);y=s.position().top-n.top;i.offset.parent.top+=y,o.position.top-=y,c=!0}if(!c&&n.top>g&&mouse_y+5>b){var x=Math.min(23,n.top-d);s.css("top",n.top-x+"px");var y=n.top-s.position().top;i.offset.parent.top-=y,o.position.top+=y,c=!0}o.position.left=Math.max(o.position.left,0),o.position.top=Math.max(o.position.top,0),o.position.left=Math.min(o.position.left,f-h),o.position.top=Math.min(o.position.top,a-u),c&&$.ui.ddmanager.prepareOffsets(i,t),c&&(i.old_e=t,i.timeout=setTimeout(function(){i.mouseMove(t)},50))},stop:function(t,o){var i=$(this).data("draggable");clearTimeout(i.timeout)}})});
//# sourceMappingURL=../../maps/ui/scroll-panel.js.map
