!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){"use strict";function i(e){var i=/^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,t=e.match(i);return t&&11==t[2].length?t[2]:void 0}function t(i,n){this.$element=e(i),this.options=e.extend({},t.DEFAULTS,e.isPlainObject(n)&&n),this.init()}var n="qor.medialibrary.action",o="enable."+n,r="disable."+n,a="blur."+n,d="focus."+n,s="switched.qor.tabbar.radio",l='[data-toggle="qor.tab.radio"]',f=".qor-video__link",u=".qor-medialibrary__video-link",c=".qor-file__options";return t.prototype={constructor:t,init:function(){this.bind(),this.initMedia()},bind:function(){e(document).on(s,l,this.resetMediaData).on(a,f,this.setVideo).on(d,f,this.initVideo)},unbind:function(){e(document).off(s,l,this.resetMediaData).off(a,f,this.setVideo).off(d,f,this.initVideo)},initVideo:function(i){var t=e(i.target);this.originalLink=t.val()},initMedia:function(){e(u).each(function(){var t=e(this),n=t.data("videolink"),o=i(n);t.parent().addClass("video-cover").html('<iframe width="200" height="200" src="https://www.youtube.com/embed/'+o+'?showinfo=0&controls=0&rel=0&fs=0&modestbranding=1&disablekb=1" frameborder="0" allowfullscreen></iframe>')})},setVideo:function(t){var n=e(t.target),o=n.closest("[data-tab-source]"),r=n.closest(l),a=r.find(c),d=JSON.parse(a.val()),s=n.val(),f=o.find("iframe"),u=i(s);s!=this.originalLink&&(d.SelectedType="video",d.Video=s,a.val(JSON.stringify(d)),u&&(f.length&&f.remove(),o.append('<iframe width="100%" height="400" src="https://www.youtube.com/embed/'+i(s)+'?rel=0&fs=0&modestbranding=1&disablekb=1" frameborder="0" allowfullscreen></iframe>')))},resetMediaData:function(i,t,n){var o=e(t),r=o.find(c),a=o.find('[data-tab-source="video"] .qor-fieldset__alert'),d=JSON.parse(r.val());d.SelectedType=n,"video"==n?(d.Video=o.find(f).val(),a.length&&a.remove()):d.Video="",r.val(JSON.stringify(d))},destroy:function(){this.unbind()}},t.DEFAULTS={},e.fn.qorSliderAfterShow=e.fn.qorSliderAfterShow||{},e.fn.qorSliderAfterShow.renderMediaVideo=function(){var t=e('[data-tab-source="video"]'),n=t.length&&t.data().videourl;t.length&&n&&t.append('<iframe width="100%" height="400" src="https://www.youtube.com/embed/'+i(n)+'?rel=0&fs=0&modestbranding=1&disablekb=1" frameborder="0" allowfullscreen></iframe>')},t.plugin=function(i){return this.each(function(){var o,r=e(this),a=r.data(n);if(!a){if(/destroy/.test(i))return;r.data(n,a=new t(this,i))}"string"==typeof i&&e.isFunction(o=a[i])&&o.apply(a)})},e(function(){var i=".qor-table--medialibrary";e(document).on(r,function(n){t.plugin.call(e(i,n.target),"destroy")}).on(o,function(n){t.plugin.call(e(i,n.target))}).triggerHandler(o)}),t});