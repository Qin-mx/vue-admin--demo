webpackJsonp([27],{j6ou:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={render:function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app-container"},[t("h3",[e._v("使用vue-clipboard2插件实现")]),e._v(" "),t("el-input",{staticStyle:{width:"400px"},attrs:{placeholder:"Please input"},model:{value:e.inputData,callback:function(a){e.inputData=a},expression:"inputData"}}),e._v(" "),t("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.inputData,expression:"inputData",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onSuccess,expression:"onSuccess",arg:"success"},{name:"clipboard",rawName:"v-clipboard:error",value:e.onError,expression:"onError",arg:"error"}],attrs:{type:"primary",icon:"document"}},[e._v("copy")])],1)},staticRenderFns:[]},n=t("VU/8")({name:"clipboard",data:function(){return{inputData:"https://jingyan.baidu.com/article/48a42057156888a9242504fd.html"}},methods:{onSuccess:function(){this.$message({message:"复制成功",type:"success",duration:1500})},onError:function(){this.$message({message:"复制失败",type:"danger",duration:1500})}}},r,!1,null,null,null);a.default=n.exports}});
//# sourceMappingURL=27.9ae8a5627db38592bda9.js.map