(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-extUI-collapse-collapse"],{"043c":function(t,e,n){"use strict";n.r(e);var i=n("3d20"),a=n("84d1");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("277e");var l=n("2877"),c=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"3ad26c52",null);e["default"]=c.exports},"080c":function(t,e,n){"use strict";n.r(e);var i=n("5339"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"11ac":function(t,e,n){var i=n("551e");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7c57ca2c",i,!0,{sourceMap:!1,shadowMode:!1})},"24c0":function(t,e,n){"use strict";var i=n("4901"),a=n.n(i);a.a},"277e":function(t,e,n){"use strict";var i=n("f1db"),a=n.n(i);a.a},"3d20":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",[n("v-uni-text",{staticClass:"example-info"},[t._v("折叠面板用来折叠/显示过长的内容或者是列表。通常是在多内容分类项使用，折叠不重要的内容，显示重要内容。点击可以展开折叠部分。")]),t._l(t.list,function(e,i){return n("v-uni-view",{key:i},[n("uni-section",{attrs:{title:e.name,type:"line"}}),n("uni-collapse",{ref:"add",refInFor:!0,staticClass:"warp",on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(e.data,function(e,i){return n("uni-collapse-item",{key:i,attrs:{open:e.open,"show-animation":e.showAnimation,disabled:e.disabled,title:e.subName}},[n("v-uni-text",{staticClass:"content"},[t._v(t._s(e.content))])],1)}),1)],1)}),n("uni-section",{attrs:{title:"手风琴效果",type:"line"}}),n("uni-collapse",{attrs:{accordion:!0}},t._l(t.accordion,function(e){return n("uni-collapse-item",{key:e.id,attrs:{title:e.title,"show-animation":e.animation}},[n("v-uni-text",{staticClass:"content"},[t._v(t._s(e.content))])],1)}),1),n("uni-section",{attrs:{title:"配置图标",type:"line"}}),n("uni-collapse",[n("uni-collapse-item",{attrs:{title:"标题文字",thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}},[n("v-uni-text",{staticClass:"content"},[t._v("折叠内容主体，可自定义内容及样式")])],1),n("uni-collapse-item",{attrs:{title:"标题文字",thumb:"https://img-cdn-qiniu.dcloud.net.cn/new-page/uni.png"}},[n("v-uni-text",{staticClass:"content"},[t._v("折叠内容主体，可自定义内容及样式")])],1)],1)],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},4540:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-section"},[t.type?n("v-uni-view",{staticClass:"uni-section__head"},[n("v-uni-view",{staticClass:"uni-section__head-tag",class:t.type})],1):t._e(),n("v-uni-view",{staticClass:"uni-section__content"},[n("v-uni-text",{staticClass:"uni-section__content-title",class:{distraction:!t.subTitle}},[t._v(t._s(t.title))]),t.subTitle?n("v-uni-text",{staticClass:"uni-section__content-sub"},[t._v(t._s(t.subTitle))]):t._e()],1),t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},4901:function(t,e,n){var i=n("d339");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("2fb40830",i,!0,{sourceMap:!1,shadowMode:!1})},5339:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a");var i={name:"UniCollapse",props:{accordion:{type:[Boolean,String],default:!1}},data:function(){return{}},provide:function(){return{collapse:this}},created:function(){this.childrens=[]},methods:{onChange:function(){var t=[];this.childrens.forEach(function(e,n){e.isOpen&&t.push(e.nameSync)}),this.$emit("change",t)}}};e.default=i},"551e":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-collapse[data-v-4357b638]{\n\twidth:100%;display:-webkit-box;display:-webkit-flex;display:flex;\n\t\n\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;background-color:#fff}",""])},"5acd":function(t,e,n){"use strict";var i=n("e85f"),a=n.n(i);a.a},"6ea6":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-collapse"},[t._t("default")],2)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},"83be":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-collapse-cell[data-v-0931c349]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;border-color:#e5e5e5;border-bottom-width:1px;border-bottom-style:solid}.uni-collapse-cell--hover[data-v-0931c349]{background-color:#f1f1f1}.uni-collapse-cell--open[data-v-0931c349]{background-color:#f1f1f1}.uni-collapse-cell--disabled[data-v-0931c349]{background-color:#f1f1f1\n\t\t/* opacity: 0.3;\n */}.uni-collapse-cell--hide[data-v-0931c349]{height:48px}.uni-collapse-cell--animation[data-v-0931c349]{\n\t\t/* transition: transform 0.3s ease;\n */-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease;transition-timing-function:ease}.uni-collapse-cell__title[data-v-0931c349]{padding:12px 12px;position:relative;\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;\n\t\theight:48px;line-height:24px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-collapse-cell__title[data-v-0931c349]:active{background-color:#f1f1f1}.uni-collapse-cell__title-img[data-v-0931c349]{height:%?52?%;width:%?52?%;margin-right:10px}.uni-collapse-cell__title-arrow[data-v-0931c349]{width:20px;height:20px;-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:center center;transform-origin:center center}.uni-collapse-cell__title-arrow-active[data-v-0931c349]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.uni-collapse-cell__title-text[data-v-0931c349]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?28?%;\n\t\twhite-space:nowrap;color:inherit;\n\t\t\n\t\toverflow:hidden;text-overflow:ellipsis}.uni-collapse-cell__content[data-v-0931c349]{overflow:hidden}.uni-collapse-cell__wrapper[data-v-0931c349]{\n\t\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t\t-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.uni-collapse-cell__content--hide[data-v-0931c349]{height:0;line-height:0}",""])},"84d1":function(t,e,n){"use strict";n.r(e);var i=n("dd7c"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"9b3e":function(t,e,n){"use strict";var i=n("11ac"),a=n.n(i);a.a},ab7d:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a"),n("c5f6");var a=i(n("f07e")),o={name:"UniCollapseItem",components:{uniIcons:a.default},props:{title:{type:String,default:""},name:{type:[Number,String],default:0},disabled:{type:Boolean,default:!1},showAnimation:{type:Boolean,default:!1},open:{type:Boolean,default:!1},thumb:{type:String,default:""}},data:function(){return{isOpen:!1}},watch:{open:function(t){this.isOpen=t}},inject:["collapse"],created:function(){if(this.isOpen=this.open,this.nameSync=this.name?this.name:this.collapse.childrens.length,this.collapse.childrens.push(this),"true"===String(this.collapse.accordion)&&this.isOpen){var t=this.collapse.childrens[this.collapse.childrens.length-2];t&&(this.collapse.childrens[this.collapse.childrens.length-2].isOpen=!1)}},methods:{onClick:function(){var t=this;this.disabled||("true"===String(this.collapse.accordion)&&this.collapse.childrens.forEach(function(e){e!==t&&(e.isOpen=!1)}),this.isOpen=!this.isOpen,this.collapse.onChange&&this.collapse.onChange(),this.$forceUpdate())}}};e.default=o},b0cb:function(t,e,n){n("b041");e=t.exports=n("2350")(!1),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* 头条小程序组件内不能引入字体 */\n\nuni-page-body[data-v-3ad26c52]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;background-color:#efeff4;min-height:100%;height:auto}uni-view[data-v-3ad26c52]{font-size:14px;line-height:inherit}.example[data-v-3ad26c52]{padding:0 15px 15px}.example-info[data-v-3ad26c52]{padding:15px;color:#3b4144;background:#fff}.example-body[data-v-3ad26c52]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0;font-size:14px;background-color:#fff}\n.example[data-v-3ad26c52]{padding:0 15px}.example-info[data-v-3ad26c52]{\n\tdisplay:block;\n\tpadding:15px;color:#3b4144;background-color:#fff;font-size:14px;line-height:20px}.example-info-text[data-v-3ad26c52]{font-size:14px;line-height:20px;color:#3b4144}.example-body[data-v-3ad26c52]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding:15px;background-color:#fff}.word-btn-white[data-v-3ad26c52]{font-size:18px;color:#fff}.word-btn[data-v-3ad26c52]{\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\t-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;border-radius:6px;height:48px;margin:15px;background-color:#007aff}.word-btn--hover[data-v-3ad26c52]{background-color:#4ca2ff}.example-body[data-v-3ad26c52]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-webkit-flex:1;flex:1}.content[data-v-3ad26c52]{padding:15px;font-size:14px;line-height:20px;background-color:#f9f9f9;color:#666}.button[data-v-3ad26c52]{font-size:%?26?%;line-height:%?90?%}body.?%PAGE?%[data-v-3ad26c52]{background-color:#efeff4}",""])},b50f:function(t,e,n){"use strict";n.r(e);var i=n("6ea6"),a=n("080c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("9b3e");var l=n("2877"),c=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"4357b638",null);e["default"]=c.exports},b8cb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={name:"UniTitle",props:{type:{type:String,default:""},title:{type:String,default:""},subTitle:{type:String,default:""}},data:function(){return{}},watch:{title:function(t){uni.report&&""!==t&&uni.report("title",t)}},methods:{onClick:function(){this.$emit("click")}}};e.default=i},ca2c:function(t,e,n){"use strict";n.r(e);var i=n("ab7d"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},cb52:function(t,e,n){"use strict";n.r(e);var i=n("ef7e"),a=n("ca2c");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("5acd");var l=n("2877"),c=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"0931c349",null);e["default"]=c.exports},d339:function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'.uni-section[data-v-6abb9156]{position:relative;\n\tdisplay:-webkit-box;display:-webkit-flex;display:flex;\n\tmargin-top:10px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 10px;height:50px;background-color:#f8f8f8;\n\tfont-weight:400}\n\n.uni-section[data-v-6abb9156]:after{position:absolute;bottom:0;right:0;left:0;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5);background-color:#e5e5e5}\n\n.uni-section__head[data-v-6abb9156]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-right:10px}.line[data-v-6abb9156]{height:15px;background-color:silver;border-radius:5px;width:3px}.circle[data-v-6abb9156]{width:8px;height:8px;border-top-right-radius:50px;border-top-left-radius:50px;border-bottom-left-radius:50px;border-bottom-right-radius:50px;background-color:silver}.uni-section__content[data-v-6abb9156]{-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#333}.uni-section__content-title[data-v-6abb9156]{font-size:%?28?%;color:#333}.distraction[data-v-6abb9156]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.uni-section__content-sub[data-v-6abb9156]{font-size:%?24?%;color:#999}',""])},d9bb:function(t,e,n){"use strict";n.r(e);var i=n("b8cb"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},dd7c:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("b50f")),o=i(n("cb52")),l=i(n("f0cc")),c={components:{uniSection:l.default,uniCollapse:a.default,uniCollapseItem:o.default},data:function(){var t=[{name:"基础用法",data:[{type:!1,subName:"默认开启",open:!0,content:"折叠内容主体，可自定义内容及样式"},{type:!1,subName:"折叠内容",content:"折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。"},{type:!1,subName:"禁用状态",disabled:!0,content:"折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。"}]},{name:"添加动画效果",data:[{type:!0,subName:"折叠列表",showAnimation:!0,content:"折叠列表内容，这是一段比较长内容。默认折叠主要内容，只显示当前项标题。点击标题展开，才能看到这段问题。再次点击标题，折叠内容。"}]}];return{list:t,accordion:[{id:0,title:"标题文字",content:"手风琴效果",animation:!0},{id:1,title:"标题文字",content:"手风琴效果",animation:!0},{id:2,title:"标题文字",content:"手风琴效果",animation:!0}],extraIcon:{color:"#4cd964",size:"26",type:"image"},id:2}},methods:{change:function(t){}}};e.default=c},e85f:function(t,e,n){var i=n("83be");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("0b2b096e",i,!0,{sourceMap:!1,shadowMode:!1})},ef7e:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-collapse-cell",class:{"uni-collapse-cell--disabled":t.disabled,"uni-collapse-cell--notdisabled":!t.disabled,"uni-collapse-cell--open":t.isOpen,"uni-collapse-cell--hide":!t.isOpen}},[n("v-uni-view",{staticClass:"uni-collapse-cell__title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[t.thumb?n("v-uni-image",{staticClass:"uni-collapse-cell__title-img",attrs:{src:t.thumb}}):t._e(),n("v-uni-text",{staticClass:"uni-collapse-cell__title-text"},[t._v(t._s(t.title))]),n("uni-icons",{staticClass:"uni-collapse-cell__title-arrow",class:{"uni-collapse-cell__title-arrow-active":t.isOpen,"uni-collapse-cell--animation":!0===t.showAnimation},attrs:{color:"#bbb",size:"20",type:"arrowdown"}})],1),n("v-uni-view",{staticClass:"uni-collapse-cell__content",class:{"uni-collapse-cell__content--hide":!t.isOpen}},[n("v-uni-view",{staticClass:"uni-collapse-cell__wrapper",class:{"uni-collapse-cell--animation":!0===t.showAnimation},style:{transform:t.isOpen?"translateY(0)":"translateY(-50%)","-webkit-transform":t.isOpen?"translateY(0)":"translateY(-50%)"}},[t._t("default")],2)],1)],1)},a=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return a})},f0cc:function(t,e,n){"use strict";n.r(e);var i=n("4540"),a=n("d9bb");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("24c0");var l=n("2877"),c=Object(l["a"])(a["default"],i["a"],i["b"],!1,null,"6abb9156",null);e["default"]=c.exports},f1db:function(t,e,n){var i=n("b0cb");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6798dfa6",i,!0,{sourceMap:!1,shadowMode:!1})}}]);