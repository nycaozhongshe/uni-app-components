(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-city-dropdown-nav-city-dropdown"],{"02fe":function(e,i,t){var r=t("dbbc");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var l=t("4f06").default;l("13f184bb",r,!0,{sourceMap:!1,shadowMode:!1})},2922:function(e,i,t){"use strict";t.r(i);var r=t("dd30"),l=t("3b1f");for(var a in l)"default"!==a&&function(e){t.d(i,e,function(){return l[e]})}(a);var n=t("2877"),u=Object(n["a"])(l["default"],r["a"],r["b"],!1,null,"a91e76bc",null);i["default"]=u.exports},"3b1f":function(e,i,t){"use strict";t.r(i);var r=t("b881"),l=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,function(){return r[e]})}(a);i["default"]=l.a},"3c94":function(e,i,t){"use strict";var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"mpvue-picker"},[t("v-uni-view",{class:{pickerMask:e.showPicker},attrs:{catchtouchmove:"true"},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.maskClick.apply(void 0,arguments)}}}),t("v-uni-view",{staticClass:"mpvue-picker-content ",class:{"mpvue-picker-view-show":e.showPicker}},[t("v-uni-view",{staticClass:"mpvue-picker__hd",attrs:{catchtouchmove:"true"}},[t("v-uni-view",{staticClass:"mpvue-picker__action",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerCancel.apply(void 0,arguments)}}},[e._v("取消")]),t("v-uni-view",{staticClass:"mpvue-picker__action",style:{color:e.themeColor},on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerConfirm.apply(void 0,arguments)}}},[e._v("确定")])],1),"selector"===e.mode&&e.pickerValueSingleArray.length>0?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChange.apply(void 0,arguments)}}},[[t("v-uni-picker-view-column",e._l(e.pickerValueSingleArray,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1)]],2):e._e(),"timeSelector"===e.mode?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChange.apply(void 0,arguments)}}},[[t("v-uni-picker-view-column",e._l(e.pickerValueHour,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1),t("v-uni-picker-view-column",e._l(e.pickerValueMinute,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1)]],2):e._e(),"multiSelector"===e.mode?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChange.apply(void 0,arguments)}}},[e._l(e.pickerValueMulArray.length,function(i,r){return[t("v-uni-picker-view-column",e._l(e.pickerValueMulArray[i],function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1)]})],2):e._e(),"multiLinkageSelector"===e.mode&&2===e.deepLength?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChangeMul.apply(void 0,arguments)}}},[[t("v-uni-picker-view-column",e._l(e.pickerValueMulTwoOne,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1),t("v-uni-picker-view-column",e._l(e.pickerValueMulTwoTwo,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1)]],2):e._e(),"multiLinkageSelector"===e.mode&&3===e.deepLength?t("v-uni-picker-view",{staticClass:"mpvue-picker-view",attrs:{"indicator-style":"height: 40px;",value:e.pickerValue},on:{change:function(i){arguments[0]=i=e.$handleEvent(i),e.pickerChangeMul.apply(void 0,arguments)}}},[[t("v-uni-picker-view-column",e._l(e.pickerValueMulThreeOne,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1),t("v-uni-picker-view-column",e._l(e.pickerValueMulThreeTwo,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1),t("v-uni-picker-view-column",e._l(e.pickerValueMulThreeThree,function(i,r){return t("v-uni-view",{key:r,staticClass:"picker-item"},[e._v(e._s(i.label))])}),1)]],2):e._e()],1)],1)},l=[];t.d(i,"a",function(){return r}),t.d(i,"b",function(){return l})},"473b":function(e,i,t){"use strict";t.r(i);var r=t("3c94"),l=t("bfba");for(var a in l)"default"!==a&&function(e){t.d(i,e,function(){return l[e]})}(a);t("76f1");var n=t("2877"),u=Object(n["a"])(l["default"],r["a"],r["b"],!1,null,"4b23d6d8",null);i["default"]=u.exports},"76f1":function(e,i,t){"use strict";var r=t("02fe"),l=t.n(r);l.a},b05c:function(e,i,t){t("ec30")("Int8",1,function(e){return function(i,t,r){return e(this,i,t,r)}})},b881:function(e,i,t){"use strict";var r=t("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var l=r(t("473b")),a={components:{mpvuePicker:l.default},data:function(){return{title:"nav-city-dropdown",pickerValueArray:[{label:"北京市",value:11e4},{label:"天津市",value:12e4},{label:"广州市",value:440100},{label:"深圳市",value:440300}],themeColor:"#007AFF",mode:"",deepLength:1,pickerValueDefault:[0]}},onReady:function(){this.setStyle(0,"北京市")},methods:{onCancel:function(e){console.log(e)},showSinglePicker:function(){this.mode="selector",this.deepLength=1,this.pickerValueDefault=[0],this.$refs.mpvuePicker.show()},onConfirm:function(e){console.log(e.label),this.setStyle(0,e.label)},setStyle:function(e,i){var t=getCurrentPages();t[t.length-1];i.length>3&&(i=i.substr(0,3)+"..."),document.getElementsByClassName("uni-btn-icon")[1].innerText=i}},onBackPress:function(){if(this.$refs.mpvuePicker.showPicker)return this.$refs.mpvuePicker.pickerCancel(),!0},onUnload:function(){this.$refs.mpvuePicker.showPicker&&this.$refs.mpvuePicker.pickerCancel()},onNavigationBarButtonTap:function(e){0===e.index&&this.showSinglePicker()}};i.default=a},bfba:function(e,i,t){"use strict";t.r(i);var r=t("dd66"),l=t.n(r);for(var a in r)"default"!==a&&function(e){t.d(i,e,function(){return r[e]})}(a);i["default"]=l.a},dbbc:function(e,i,t){i=e.exports=t("2350")(!1),i.push([e.i,'.pickerMask[data-v-4b23d6d8]{position:fixed;z-index:1000;top:0;right:0;left:0;bottom:0;background:rgba(0,0,0,.6)}.mpvue-picker-content[data-v-4b23d6d8]{position:fixed;bottom:0;left:0;width:100%;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translateY(100%);transform:translateY(100%);z-index:3000}.mpvue-picker-view-show[data-v-4b23d6d8]{-webkit-transform:translateY(0);transform:translateY(0)}.mpvue-picker__hd[data-v-4b23d6d8]{display:-webkit-box;display:-webkit-flex;display:flex;padding:9px 15px;background-color:#fff;position:relative;text-align:center;font-size:17px}.mpvue-picker__hd[data-v-4b23d6d8]:after{content:" ";position:absolute;left:0;bottom:0;right:0;height:1px;border-bottom:1px solid #e5e5e5;color:#e5e5e5;-webkit-transform-origin:0 100%;transform-origin:0 100%;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.mpvue-picker__action[data-v-4b23d6d8]{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#1aad19}.mpvue-picker__action[data-v-4b23d6d8]:first-child{text-align:left;color:#888}.mpvue-picker__action[data-v-4b23d6d8]:last-child{text-align:right}.picker-item[data-v-4b23d6d8]{text-align:center;line-height:40px;font-size:16px}.mpvue-picker-view[data-v-4b23d6d8]{position:relative;bottom:0;left:0;width:100%;height:238px;background-color:#fff}',""])},dd30:function(e,i,t){"use strict";var r=function(){var e=this,i=e.$createElement,t=e._self._c||i;return t("v-uni-view",{staticClass:"mpvue-picker"},[t("page-head",{attrs:{title:e.title}}),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[e._v("说明 :")]),t("v-uni-view",{staticClass:"uni-helllo-text"},[t("v-uni-view",[e._v("在App端可在pages.json里配置buttons，暂不支持动态改变buttons的样式，使用onNavigationBarButtonTap可监听城市选择按钮的点击事件。")])],1)],1),t("mpvue-picker",{ref:"mpvuePicker",attrs:{themeColor:e.themeColor,mode:e.mode,deepLength:e.deepLength,pickerValueDefault:e.pickerValueDefault,pickerValueArray:e.pickerValueArray},on:{onConfirm:function(i){arguments[0]=i=e.$handleEvent(i),e.onConfirm.apply(void 0,arguments)},onCancel:function(i){arguments[0]=i=e.$handleEvent(i),e.onCancel.apply(void 0,arguments)}}})],1)},l=[];t.d(i,"a",function(){return r}),t.d(i,"b",function(){return l})},dd66:function(e,i,t){"use strict";var r=t("288e");Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0,t("b05c");var l=r(t("bd86"));t("c5f6");var a={data:function(){return{pickerChangeValue:[],pickerValue:[],pickerValueArrayChange:!0,modeChange:!1,pickerValueSingleArray:[],pickerValueHour:[],pickerValueMinute:[],pickerValueMulArray:[],pickerValueMulTwoOne:[],pickerValueMulTwoTwo:[],pickerValueMulThreeOne:[],pickerValueMulThreeTwo:[],pickerValueMulThreeThree:[],showPicker:!1}},props:{mode:{type:String,default:"selector"},pickerValueArray:{type:Array,default:function(){return[]}},pickerValueDefault:{type:Array,default:function(){return[]}},deepLength:{type:Number,default:2},themeColor:String},watch:(0,l.default)({pickerValueArray:function(e,i){this.pickerValueArrayChange=!0},mode:function(e,i){this.modeChange=!0}},"pickerValueArray",function(e){this.initPicker(e)}),methods:{initPicker:function(e){var i=e;if(this.pickerValue=this.pickerValueDefault,"selector"===this.mode)this.pickerValueSingleArray=e;else if("timeSelector"===this.mode){this.modeChange=!1;for(var t=[],r=[],l=0;l<24;l++)t.push({value:l,label:l>9?"".concat(l," 时"):"0".concat(l," 时")});for(var a=0;a<60;a++)r.push({value:a,label:a>9?"".concat(a," 分"):"0".concat(a," 分")});this.pickerValueHour=t,this.pickerValueMinute=r}else if("multiSelector"===this.mode)this.pickerValueMulArray=e;else if("multiLinkageSelector"===this.mode&&2===this.deepLength){for(var n=[],u=[],c=0,o=i.length;c<o;c++)n.push(i[c]);if(2===this.pickerValueDefault.length)for(var s=this.pickerValueDefault[0],h=0,p=i[s].children.length;h<p;h++)u.push(i[s].children[h]);else for(var k=0,v=i[0].children.length;k<v;k++)u.push(i[0].children[k]);this.pickerValueMulTwoOne=n,this.pickerValueMulTwoTwo=u}else if("multiLinkageSelector"===this.mode&&3===this.deepLength){for(var d=[],f=[],m=[],V=0,g=i.length;V<g;V++)d.push(i[V]);if(this.pickerValueDefault=3===this.pickerValueDefault.length?this.pickerValueDefault:[0,0,0],3===this.pickerValueDefault.length){for(var b=this.pickerValueDefault[0],w=0,y=i[b].children.length;w<y;w++)f.push(i[b].children[w]);for(var _=this.pickerValueDefault[1],C=0,T=i[b].children[_].children.length;C<T;C++)m.push(i[b].children[_].children[C])}this.pickerValueMulThreeOne=d,this.pickerValueMulThreeTwo=f,this.pickerValueMulThreeThree=m}},show:function(){var e=this;setTimeout(function(){e.pickerValueArrayChange||e.modeChange?(e.initPicker(e.pickerValueArray),e.showPicker=!0,e.pickerValueArrayChange=!1,e.modeChange=!1):e.showPicker=!0},0)},maskClick:function(){this.pickerCancel()},pickerCancel:function(){this.showPicker=!1,this._initPickerVale();var e={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onCancel",e)},pickerConfirm:function(e){this.showPicker=!1,this._initPickerVale();var i={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onConfirm",i)},showPickerView:function(){this.showPicker=!0},pickerChange:function(e){this.pickerValue=e.mp.detail.value;var i={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",i)},pickerChangeMul:function(e){if(2===this.deepLength){var i=this.pickerValueArray,t=e.mp.detail.value;if(t[0]!==this.pickerValue[0]){for(var r=[],l=0,a=i[t[0]].children.length;l<a;l++)r.push(i[t[0]].children[l]);this.pickerValueMulTwoTwo=r,t[1]=0}this.pickerValue=t}else if(3===this.deepLength){var n=this.pickerValueArray,u=e.mp.detail.value,c=[],o=[];if(u[0]!==this.pickerValue[0]){this.pickerValueMulThreeTwo=[];for(var s=0,h=n[u[0]].children.length;s<h;s++)c.push(n[u[0]].children[s]);for(var p=0,k=n[u[0]].children[0].children.length;p<k;p++)o.push(n[u[0]].children[0].children[p]);u[1]=0,u[2]=0,this.pickerValueMulThreeTwo=c,this.pickerValueMulThreeThree=o}else if(u[1]!==this.pickerValue[1]){this.pickerValueMulThreeThree=[],c=this.pickerValueMulThreeTwo;for(var v=0,d=n[u[0]].children[u[1]].children.length;v<d;v++)o.push(n[u[0]].children[u[1]].children[v]);u[2]=0,this.pickerValueMulThreeThree=o}this.pickerValue=u}var f={index:this.pickerValue,value:this._getPickerLabelAndValue(this.pickerValue,this.mode).value,label:this._getPickerLabelAndValue(this.pickerValue,this.mode).label};this.$emit("onChange",f)},_getPickerLabelAndValue:function(e,i){var t,r=[];if("selector"===i)t=this.pickerValueSingleArray[e].label,r.push(this.pickerValueSingleArray[e].value);else if("timeSelector"===i)t="".concat(this.pickerValueHour[e[0]].label,"-").concat(this.pickerValueMinute[e[1]].label),r.push(this.pickerValueHour[e[0]].value),r.push(this.pickerValueHour[e[1]].value);else if("multiSelector"===i)for(var l=0;l<e.length;l++)l>0?t+=this.pickerValueMulArray[l][e[l]].label+(l===e.length-1?"":"-"):t=this.pickerValueMulArray[l][e[l]].label+"-",r.push(this.pickerValueMulArray[l][e[l]].value);else"multiLinkageSelector"===i&&(t=2===this.deepLength?"".concat(this.pickerValueMulTwoOne[e[0]].label,"-").concat(this.pickerValueMulTwoTwo[e[1]].label):"".concat(this.pickerValueMulThreeOne[e[0]].label,"-").concat(this.pickerValueMulThreeTwo[e[1]].label,"-").concat(this.pickerValueMulThreeThree[e[2]].label),2===this.deepLength?(r.push(this.pickerValueMulTwoOne[e[0]].value),r.push(this.pickerValueMulTwoTwo[e[1]].value)):(r.push(this.pickerValueMulThreeOne[e[0]].value),r.push(this.pickerValueMulThreeTwo[e[1]].value),r.push(this.pickerValueMulThreeThree[e[2]].value)));return{label:t,value:r}},_initPickerVale:function(){0===this.pickerValue.length&&("selector"===this.mode?this.pickerValue=[0]:"multiSelector"===this.mode?this.pickerValue=new Int8Array(this.pickerValueArray.length):"multiLinkageSelector"===this.mode&&2===this.deepLength?this.pickerValue=[0,0]:"multiLinkageSelector"===this.mode&&3===this.deepLength&&(this.pickerValue=[0,0,0]))}}};i.default=a}}]);