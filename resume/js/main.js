!function(t){var a={};function e(n){if(a[n])return a[n].exports;var o=a[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=a,e.d=function(t,a,n){e.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:n})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,a){if(1&a&&(t=e(t)),8&a)return t;if(4&a&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(e.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var o in t)e.d(n,o,function(a){return t[a]}.bind(null,o));return n},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},e.p="",e(e.s=1)}([function(t,a,e){"use strict";var n=function(){function t(t,a){for(var e=0;e<a.length;e++){var n=a[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(a,e,n){return e&&t(a.prototype,e),n&&t(a,n),a}}();var o=window,s=Math;function i(t){return s.random()*t}var r=function(){function t(){!function(t,a){if(!(t instanceof a))throw new TypeError("Cannot call a class as a function")}(this,t),this.timer=null,this.arr=[],this.index=0}return n(t,[{key:"to",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return this.arr.push({fn:t,time:a}),this}},{key:"start",value:function(){var t=this;t.index!==t.arr.length&&(t.pause(),console.log(t.arr[t.index].time),t.timer=setTimeout(function(){requestAnimationFrame(t.arr[t.index].fn),t.index++,t.index===t.arr.length?t.pause():t.start()},t.arr[t.index].time))}},{key:"pause",value:function(){clearTimeout(this.timer)}}]),t}(),c={view:{w:$(o).width(),h:$(o).height()},move:function(t){clearTimeout(e);var a=[],e=null;t.each(function(t,e){a.push($(e)),$(e).bind("animationEnd webkitAnimationEnd",i)});var n=a.length,o=null,s="";function i(){$(this).removeClass($(this).prop("csName")).prop("isAnimated",!1)}return{start:function t(){for(clearTimeout(e),o=a[Math.floor(Math.random()*n)];o.prop("isAnimated");)o=a[Math.floor(Math.random()*n)];o.prop("isAnimated",!0),Math.random()>.5?(s="left t"+Math.ceil(8*Math.random())+" bl"+Math.ceil(8*Math.random()),o.addClass(s).prop("csName",s)):(s="right t"+Math.ceil(8*Math.random())+" br"+Math.ceil(9*Math.random()),o.addClass(s).prop("csName",s)),e=setTimeout(function(){requestAnimationFrame(t)},4e3)},pause:function(){clearTimeout(e),t.each(function(t,a){$(a).prop("isAnimated")&&$(a).removeClass($(a).prop("csName")).prop("isAnimated",!1)})}}},timeout:r,canvas:function(t){var a=this,e=null,n=t.el,o=n[0].getContext("2d");n.attr("width",a.view.w),n.attr("height",a.view.h);var r=[],c=t.len;function l(){clearTimeout(e),o.clearRect(0,0,n.attr("width"),n.attr("height")),o.fillStyle="#fff";for(var i=0;i<c;i++)"down"===t.dir&&(r[i].y+=r[i].speedY,r[i].y>a.view.h-150&&(r[i].y=0)),"up"===t.dir&&(r[i].y-=r[i].speedY,r[i].y<0&&(r[i].y=a.view.h+r[i].r)),r[i].num--,-360===r[i].num&&(r[i].num=0),r[i].x=r[i].startX-r[i].range*s.sin(s.PI/180*r[i].num),o.beginPath(),o.arc(r[i].x,r[i].y,r[i].r,0,2*s.PI),o.fill(),o.closePath();e=requestAnimationFrame(l)}return function(){o.clearRect(0,0,n.attr("width"),n.attr("height")),r=[];for(var t=0;t<c;t++){var e=i(a.view.w);r.push({x:e,y:i(a.view.h),speedY:i(6)+1,r:i(5),startX:e,num:0,range:i(200)})}}(),l(),{start:function(){cancelAnimationFrame(e),requestAnimationFrame(l)},pause:function(){cancelAnimationFrame(e)}}}};o.requestAnimationFrame=o.requestAnimationFrame||o.mozRequestAnimationFrame||o.webkitRequestAnimationFrame||o.msRequestAnimationFrame,o.cancelAnimationFrame=o.cancelAnimationFrame||o.mozCancelAnimationFrame||o.msCancelAnimationFrame,t.exports=c},function(t,a,e){"use strict";e(2),e(10),e(18),e(20),e(25),e(3)},function(t,a,e){"use strict";!function(t){$.fn.extend({onScroll:function(t){var a=null,e=void 0,n=void 0;return $(this).bind("mousewheel || DOMMouseScroll",function(o){e=o.originalEvent.wheelDelta,n=o.originalEvent.detail,a=e?e<0:!(n<0),t&&t(a,o)}),$(this)},tf:function(t,a){if(isJson(t))for(var e in t)$(this).tf(e,t[e]);var n=$(this)[0];n.data||(n.data={});void 0===n.tf&&(n.tf="");if(void 0===a)return n.data[t];var o="",s="";switch(t){case"x":o="translateX",s="px";break;case"y":o="translateY",s="px";break;case"z":o="translateZ",s="px";break;case"skew":o="skew",s="deg";break;case"skewX":o="skewX",s="deg";break;case"skewY":o="skewY",s="deg";break;case"rotate":o="rotate",s="deg";break;case"rotateX":o="rotateX",s="deg";break;case"rotateY":o="rotateY",s="deg";break;case"scale":o="scale",s="";break;case"scaleX":o="scaleX",s="";break;case"scaleY":o="scaleX",s=""}"%"!==(a+="").charAt(a.length-1)&&(a=parseFloat(a));!function(){var e=o+"("+a+s+")";if(n.data[t]){for(var i=n.tf.split(" "),r=0;r<i.length;r++)-1!=i[r].indexOf(o)&&(i[r]=e);n.tf=i.join(" ")}else n.tf+=e+" ";n.style.transform=n.style.WebkitTransform=n.style.MozTransform=n.style.OTransform=n.style.MsTransform=n.tf,n.data[t]=a}()}})}(window)},function(t,a,e){"use strict";var n=$(".nav-a"),o=0,s=0,i=!0,r=[];var c=$(".page"),l=$("#swiper-box"),u=c.length;function d(){o>=u&&(o=0),o<0&&(o=u-1),o!==s&&(r[s].pause(),n.eq(s).removeClass("hover"),n.eq(o).addClass("hover"),l[0].className="page"+o)}e(9)(function(){l.onScroll(function(t){i&&(i=!1,t?o++:o--,d())})[0].className="page"+o,n.click(function(){var t=n.index($(this));t!==s&&i&&(i=!1,o=t,d())}).eq(o).addClass("hover"),l.bind("transitionend webkitTransitionend",function(t){t.target===this&&(r[o]||(r[o]=function(t){switch(t){case 0:return e(4);case 1:return e(5);case 2:return e(6);case 3:return e(7);case 4:return e(8)}}(o)),s=o,r[o].start(),i=!0)})})},function(t,a,e){"use strict";var n=$("#pageFirst"),o=$("#car-wrapper"),s=$("#car-box"),i=$("#car-body"),r=s.find(".mainLuntai"),c=$("#manBox1"),l=c.find(".man:first"),u=$("#dialog1"),d=$("#arrow-down"),f=e(0),m=f.move($(".car")),p=new f.timeout;p.to(function(){n.addClass("light"),r.addClass("rotate"),i.addClass("shake"),o.addClass("ac")}).to(function(){r.removeClass("rotate"),i.removeClass("shake")},2e3).to(function(){l.removeClass("bp2").addClass("bp1"),c.addClass("jump")},200).to(function(){c.removeClass("jump").addClass("down")},500).to(function(){l.removeClass("bp1").addClass("bp2"),r.addClass("rotate"),i.addClass("shake")},500).to(function(){s.addClass("ac")},500).to(function(){u.addClass("ac"),d.addClass("ac")},300).to(function(){s.remove()},1700),t.exports={start:function(){m.start(),p.start()},pause:function(){m.pause(),p.pause()}}},function(t,a,e){"use strict";var n=$("#skill-box"),o=n.find(".honeybee-title"),s=n.find(".honeybee"),i=n.find(".honeybee-box"),r=$("#chair"),c=null,l=0,u=$("#manBox2"),d=u[0],f=u.find(".man:first"),m=$("#boat-box"),p=$("#stick"),v=$("#air-balloon"),b=-76,h=-50;s.hover(function(){$(this).removeClass("jello").addClass("rubberBand animated")},function(){$(this).removeClass("rubberBand animated")}),o.hover(function(){$(this).removeClass("jello").addClass("rubberBand animated")},function(){$(this).removeClass("rubberBand animated")});var C=new(e(0).timeout);function g(){c.addClass("jello animated"),i.eq(l).addClass("ac")}function x(t){f.toggleClass("bp3 bp4"),p.addClass("beat"),requestAnimationFrame(g)}function w(){d.style.cssText="left: "+(c.offset().left+b)+"px; top: "+(c.offset().top+h)+"px;"}function y(t){l=t,f.toggleClass("bp4 bp3"),p.removeClass("beat"),c=s.eq(t),requestAnimationFrame(w)}v.removeClass("pause"),C.to(function(){o.addClass("ac"),s.addClass("ac")}).to(function(){u.addClass("ac")},300).to(function(){f.toggleClass("bp5 bp6"),c=s.eq(0),u.addClass("ts1"),requestAnimationFrame(w),m.remove()},1200).to(function(){f.toggleClass("bp6 bp3"),p.addClass("ac")},300).to(function(){p.removeClass("ts"),x()},550).to(function(){y(4)},100).to(function(){x()},300).to(function(){y(1)},100).to(function(){x()},300).to(function(){y(5)},100).to(function(){x()},300).to(function(){y(2)},100).to(function(){x()},300).to(function(){y(6)},100).to(function(){x()},300).to(function(){y(3)},100).to(function(){x()},300).to(function(){y(7)},100).to(function(){x()},300).to(function(){f.toggleClass("bp4 bp6"),p.removeClass("ac"),d.style.cssText="left: "+(r.offset().left-115)+"px; top: "+(r.offset().top+35)+"px;"},300).to(function(){f.toggleClass("bp6 bp8"),$("#dialog2").addClass("ac")},300),t.exports={start:function(){C.start(),v.removeClass("pause")},pause:function(){v.addClass("pause"),C.pause()}}},function(t,a,e){"use strict";var n=$("#experience");n.onScroll(function(t,a){n[0].offsetHeight<n[0].scrollHeight&&a.stopPropagation()});var o=$(".ex-date-num"),s=$(".ex-des"),i=$("#submarine-box"),r=e(0).canvas({el:$("#water-canvas"),dir:"up",len:20});o.addClass("ac"),s.addClass("ac"),i.addClass("ac"),t.exports=r},function(t,a,e){"use strict";var n,o,s,i,r=e(0);n=$(".sign-wrapper"),o=$(".sign-box"),s=$(".work-box"),i=null,n.each(function(t,a){i=$(a),function(t){i.hover(function(){o.eq(t).removeClass("delay ac"),s.eq(t).addClass("delay ac")},function(){s.eq(t).removeClass("delay ac"),o.eq(t).addClass("delay ac")})}(t)});var c=$("#manBox3"),l=c.find(".man:first"),u=r.canvas({el:$("#snow-canvas"),dir:"down",len:50}),d=new r.timeout,f=$(".work-item"),m=$("#word-box");d.to(function(){f.addClass("ac"),m.addClass("ac"),c[0].style.cssText="left:"+($("#work-box").offset().left-154)+"px; bottom:28%;",l.addClass("bp7")},10),t.exports={start:function(){d.start(),u.start()},pause:function(){d.pause(),u.pause()}}},function(t,a,e){"use strict";var n=$("#plane-box"),o=$(".contact-item"),s=$(".cube"),i=$("#manBox5"),r=i.find(".man:first"),c=$(".parachute"),l=e(0),u=l.move($(".boat")),d=new l.timeout;d.to(function(){n.addClass("ac"),i.addClass("ac"),o.addClass("ac")}).to(function(){c.addClass("hide"),s.addClass("ac"),r.addClass("bp8"),n.remove()},2e3),t.exports={start:function(){u.start(),d.start()},pause:function(){u.pause(),d.pause()}}},function(t,a,e){"use strict";t.exports=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){},a=$("body:first"),n=$("#pageFirst"),o=$("#logo"),s=$(".nav-a"),i=$('<div id="ball" class="ballShake">100%</div>'),r=$('<div id="bg1" class="bg"></div>'),c=$('<div id="bg2" class="bg"></div>');a.append(i,r,c);var l=$(".bg");$(".page").not("#pageThird").append('\n        <div class="bird"></div>\n        <div class="cloud cloud1"></div>\n        <div class="cloud cloud2"></div>\n        <div class="cloud cloud3"></div>\n        <div class="cloud cloud4"></div>\n        <div class="cloud cloud5"></div>\n        <div class="sun"></div>\n  ');var u=$(".sun");$("#birdHid").remove(),(new(e(0).timeout)).to(function(){i.removeClass("ballShake")},500).to(function(){i.text("").addClass("ac")},30).to(function(){l.addClass("ac"),n.addClass("show")},550).to(function(){i.remove(),r.addClass("lift"),c.addClass("lift")},100).to(t).to(function(){o.addClass("ac"),s.addClass("ac"),u.addClass("ac")},200).to(function(){l.remove(),u.addClass("sunRotate")},1200).start(),o.hover(function(){$(this).addClass("rubberBand")},function(){$(this).removeClass("rubberBand")})}},function(t,a){},,,,,,,,function(t,a){},,function(t,a){},,,,,function(t,a){}]);