(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-navigator-navigator"],{c04d:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{title:"navigate"}},methods:{navigateTo:function(){uni.navigateTo({url:"new-page/new-vue-page-1?data=Hello"})},navigateBack:function(){uni.navigateBack()},redirectTo:function(){uni.redirectTo({url:"new-page/new-vue-page-1"})},switchTab:function(){uni.switchTab({url:"/pages/tabBar/template/template"})},reLaunch:function(){uni.reLaunch({url:"/pages/tabBar/component/component"})},customAnimation:function(){uni.navigateTo({url:"new-page/new-vue-page-1?data=使用自定义动画打开页面",animationType:"slide-in-bottom",animationDuration:200})}}};t.default=e},caa1:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:n.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"uni-btn-v"},[a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateTo.apply(void 0,arguments)}}},[n._v("跳转新页面，并传递数据")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.navigateBack.apply(void 0,arguments)}}},[n._v("返回上一页")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.redirectTo.apply(void 0,arguments)}}},[n._v("在当前页面打开")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.switchTab.apply(void 0,arguments)}}},[n._v("切换到模板选项卡")]),a("v-uni-button",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.reLaunch.apply(void 0,arguments)}}},[n._v("关闭所有页面，打开首页")])],1)],1)],1)},i=[];a.d(t,"a",function(){return e}),a.d(t,"b",function(){return i})},d08e:function(n,t,a){"use strict";a.r(t);var e=a("c04d"),i=a.n(e);for(var u in e)"default"!==u&&function(n){a.d(t,n,function(){return e[n]})}(u);t["default"]=i.a},f6de:function(n,t,a){"use strict";a.r(t);var e=a("caa1"),i=a("d08e");for(var u in i)"default"!==u&&function(n){a.d(t,n,function(){return i[n]})}(u);var o=a("2877"),c=Object(o["a"])(i["default"],e["a"],e["b"],!1,null,null,null);t["default"]=c.exports}}]);