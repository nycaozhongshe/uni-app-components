(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-checkbox-checkbox"],{"1b7c":function(e,t,n){t=e.exports=n("2350")(!1),t.push([e.i,".uni-list-cell[data-v-de04e88a]{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}",""])},3520:function(e,t,n){var i=n("1b7c");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var a=n("4f06").default;a("2f941d1e",i,!0,{sourceMap:!1,shadowMode:!1})},3922:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{title:"checkbox 复选框",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{checkboxChange:function(e){for(var t=this.items,n=e.detail.value,i=0,a=t.length;i<a;++i){var u=t[i];n.indexOf(u.value)>=0?this.$set(u,"checked",!0):this.$set(u,"checked",!1)}}}};t.default=i},"54fe":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:e.title}}),n("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("默认样式")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb",checked:"true"}}),e._v("选中")],1),n("v-uni-label",[n("v-uni-checkbox",{attrs:{value:"cb"}}),e._v("未选中")],1)],1)],1),n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("不同颜色和尺寸的checkbox")]),n("v-uni-view",[n("v-uni-checkbox-group",[n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",checked:"true",color:"#FFCC33"}}),e._v("选中")],1),n("v-uni-label",[n("v-uni-checkbox",{staticStyle:{transform:"scale(0.7)"},attrs:{value:"cb",color:"#FFCC33"}}),e._v("未选中")],1)],1)],1)],1),n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"uni-title uni-common-mt"},[e._v("推荐展示样式"),n("v-uni-text",[e._v("\\n使用 uni-list 布局")])],1)],1),n("v-uni-view",{staticClass:"uni-list"},[n("v-uni-checkbox-group",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}}},e._l(e.items,function(t){return n("v-uni-label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[n("v-uni-view",[n("v-uni-checkbox",{attrs:{value:t.value,checked:t.checked}})],1),n("v-uni-view",[e._v(e._s(t.name))])],1)}),1)],1)],1)},a=[];n.d(t,"a",function(){return i}),n.d(t,"b",function(){return a})},"57dc":function(e,t,n){"use strict";n.r(t);var i=n("54fe"),a=n("91fa");for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);n("f151");var c=n("2877"),l=Object(c["a"])(a["default"],i["a"],i["b"],!1,null,"de04e88a",null);t["default"]=l.exports},"91fa":function(e,t,n){"use strict";n.r(t);var i=n("3922"),a=n.n(i);for(var u in i)"default"!==u&&function(e){n.d(t,e,function(){return i[e]})}(u);t["default"]=a.a},f151:function(e,t,n){"use strict";var i=n("3520"),a=n.n(i);a.a}}]);