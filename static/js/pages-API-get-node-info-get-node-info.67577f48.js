(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-get-node-info-get-node-info"],{"33c0":function(t,e,i){"use strict";i.r(e);var a=i("829e"),n=i("bcc6");for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);i("948e");var c=i("2877"),r=Object(c["a"])(n["default"],a["a"],a["b"],!1,null,"a4ad6082",null);e["default"]=r.exports},"829e":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"movable block"},[i("v-uni-movable-area",[i("v-uni-movable-view",{staticClass:"target",attrs:{direction:"all"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getNodeInfo.apply(void 0,arguments)}}},[t._v("Drag")])],1)],1),i("v-uni-view",{staticClass:"movable"},[i("v-uni-view",{staticClass:"info"},t._l(t.info,function(e,a){return i("v-uni-view",{key:a},[i("v-uni-text",{staticClass:"b"},[t._v(t._s(e.key))]),i("v-uni-text",{staticClass:"span"},[t._v(t._s(e.val))])],1)}),1)],1)],1)],1)},n=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return n})},"8aa5":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*uni.upx2px(320)+"px",this.top=Math.random()*uni.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec(function(e){var i=e[0];if(i){var a=["left","right","top","bottom","width","height"],n=[];for(var o in a){var c=a[o];n.push({key:c,val:i[c]})}t.info=n}})}}};e.default=a},"948e":function(t,e,i){"use strict";var a=i("fc44"),n=i.n(a);n.a},aa55c:function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".movable[data-v-a4ad6082]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.block[data-v-a4ad6082]{height:%?400?%;width:%?400?%;background-color:#fff;border:1px solid #ccc;position:relative;margin:0 auto;margin-bottom:%?30?%}uni-movable-area[data-v-a4ad6082]{height:%?400?%;width:%?400?%;position:relative}.target[data-v-a4ad6082]{height:%?80?%;width:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#4cd964;font-size:%?28?%;position:absolute}.info[data-v-a4ad6082]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.b[data-v-a4ad6082]{font-weight:700;width:%?150?%;display:inline-block}.span[data-v-a4ad6082]{width:%?100?%;display:inline-block}",""])},bcc6:function(t,e,i){"use strict";i.r(e);var a=i("8aa5"),n=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=n.a},fc44:function(t,e,i){var a=i("aa55c");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("781ff859",a,!0,{sourceMap:!1,shadowMode:!1})}}]);