(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-canvas-canvas"],{"1d33":function(t,a,n){a=t.exports=n("2350")(!1),a.push([t.i,".canvas[data-v-04a1edf2]{width:%?610?%;height:%?610?%;background-color:#fff}",""])},"58db":function(t,a,n){var i=n("1d33");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=n("4f06").default;s("42c38ad5",i,!0,{sourceMap:!1,shadowMode:!1})},"5bf7":function(t,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0,n("6c7b");var i=null,s=null,e={data:function(){return{title:"canvas",screenWidth:uni.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){i=uni.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),s=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(s),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function a(t,a){i.beginPath(0),i.arc(t,a,5,0,2*Math.PI),i.setFillStyle("#1aad19"),i.setStrokeStyle("rgba(1,1,1,0)"),i.fill(),i.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),a(t.x,this.canvasWidth/2),a(this.canvasWidth/2,t.y),a(this.canvasWidth-t.x,this.canvasWidth/2),a(this.canvasWidth/2,this.canvasWidth-t.y),a(t.x,t.y),a(this.canvasWidth-t.x,this.canvasWidth-t.y),a(t.x,this.canvasWidth-t.y),a(this.canvasWidth-t.x,t.y),i.draw()}}};a.default=e},"638d":function(t,a,n){"use strict";n.r(a);var i=n("ddd5"),s=n("8e1e");for(var e in s)"default"!==e&&function(t){n.d(a,t,function(){return s[t]})}(e);n("7a42");var c=n("2877"),d=Object(c["a"])(s["default"],i["a"],i["b"],!1,null,"04a1edf2",null);a["default"]=d.exports},"6c7b":function(t,a,n){var i=n("5ca1");i(i.P,"Array",{fill:n("36bd")}),n("9c6c")("fill")},"7a42":function(t,a,n){"use strict";var i=n("58db"),s=n.n(i);s.a},"8e1e":function(t,a,n){"use strict";n.r(a);var i=n("5bf7"),s=n.n(i);for(var e in i)"default"!==e&&function(t){n.d(a,t,function(){return i[t]})}(e);a["default"]=s.a},ddd5:function(t,a,n){"use strict";var i=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("page-head",{attrs:{title:t.title}}),n("v-uni-view",{staticClass:"page-body"},[n("v-uni-view",{staticClass:"page-body-wrapper"},[n("v-uni-canvas",{staticClass:"canvas",attrs:{"canvas-id":"canvas"}})],1)],1)],1)},s=[];n.d(a,"a",function(){return i}),n.d(a,"b",function(){return s})}}]);