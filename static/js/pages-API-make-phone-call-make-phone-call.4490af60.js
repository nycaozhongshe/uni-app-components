(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-API-make-phone-call-make-phone-call"],{"0104":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-uni-view",[e("page-head",{attrs:{title:t.title}}),e("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("v-uni-view",{staticClass:"uni-hello-text uni-center"},[t._v("请在下方输入电话号码")]),e("v-uni-input",{staticClass:"input uni-common-mt",attrs:{type:"number",name:"input"},on:{input:function(n){arguments[0]=n=t.$handleEvent(n),t.bindInput.apply(void 0,arguments)}}}),e("v-uni-view",{staticClass:"uni-btn-v uni-common-mt"},[e("v-uni-button",{attrs:{type:"primary",disabled:t.disabled},on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.makePhoneCall.apply(void 0,arguments)}}},[t._v("拨打")])],1)],1)],1)},i=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return i})},"090f":function(t,n,e){"use strict";e.r(n);var a=e("0104"),i=e("5a01");for(var u in i)"default"!==u&&function(t){e.d(n,t,function(){return i[t]})}(u);e("76af");var o=e("2877"),l=Object(o["a"])(i["default"],a["a"],a["b"],!1,null,"594af29b",null);n["default"]=l.exports},"5a01":function(t,n,e){"use strict";e.r(n);var a=e("a5ba"),i=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);n["default"]=i.a},"5f0e":function(t,n,e){n=t.exports=e("2350")(!1),n.push([t.i,".input[data-v-594af29b]{height:%?119?%;line-height:%?119?%;font-size:%?78?%;border-bottom:%?1?% solid #e2e2e2;text-align:center}",""])},"76af":function(t,n,e){"use strict";var a=e("9e6e"),i=e.n(a);i.a},"9e6e":function(t,n,e){var a=e("5f0e");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("765ebdeb",a,!0,{sourceMap:!1,shadowMode:!1})},a5ba:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{title:"makePhoneCall",disabled:!0}},methods:{bindInput:function(t){this.inputValue=t.target.value,this.inputValue.length>0?this.disabled=!1:this.disabled=!0},makePhoneCall:function(){uni.makePhoneCall({phoneNumber:this.inputValue,success:function(){console.log("成功拨打电话")}})}}};n.default=a}}]);