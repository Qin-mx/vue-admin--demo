webpackJsonp([24],{kFZy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={props:{options:{type:Array,default:[]},checkList:{type:Array,default:[]}},data:function(){return{checkBoxList:this.checkList}},methods:{handleCheckedCitiesChange:function(e){this.$emit("handleCheckbox",e)}}},s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-checkbox-group",{on:{change:e.handleCheckedCitiesChange},model:{value:e.checkBoxList,callback:function(t){e.checkBoxList=t},expression:"checkBoxList"}},e._l(e.options,function(e){return n("el-checkbox",{key:e,attrs:{label:e}})}))},staticRenderFns:[]},i=n("VU/8")(a,s,!1,null,null,null).exports,c=["date","address"],l={components:{NavTool:i},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",province:"上海",city:"普陀区"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",province:"上海",city:"普陀区"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",province:"上海",city:"普陀区"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",province:"上海",city:"普陀区"}],checkList:c,TheadOPtions:["date","address","province","city"],Thead:c,key:1}},methods:{handleCheckbox:function(e){var t=this;this.checkList=e,this.Thead=this.TheadOPtions.filter(function(e){return t.checkList.indexOf(e)>=0}),this.key=this.key+1,console.log(this.Thead)}}},r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("nav-tool",{attrs:{checkList:e.checkList,options:e.TheadOPtions},on:{handleCheckbox:e.handleCheckbox}})],1),e._v(" "),n("el-table",{key:e.key,staticStyle:{width:"100%"},attrs:{data:e.tableData,fit:"",border:""}},[n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),e._l(e.Thead,function(t){return n("el-table-column",{key:t,attrs:{label:t},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n            "+e._s(n.row[t])+"\n          ")]}}])})})],2)],1)},staticRenderFns:[]},o=["date","address"],d={components:{NavTool:i},data:function(){return{tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀区金沙江路 1518 弄",province:"上海",city:"普陀区"},{date:"2016-05-04",name:"王小虎",address:"上海市普陀区金沙江路 1517 弄",province:"上海",city:"普陀区"},{date:"2016-05-01",name:"王小虎",address:"上海市普陀区金沙江路 1519 弄",province:"上海",city:"普陀区"},{date:"2016-05-03",name:"王小虎",address:"上海市普陀区金沙江路 1516 弄",province:"上海",city:"普陀区"}],checkList:o,TheadOPtions:["date","address","province","city"],Thead:o}},methods:{handleCheckbox:function(e){this.Thead=e}}},h={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("nav-tool",{attrs:{checkList:e.checkList,options:e.TheadOPtions},on:{handleCheckbox:e.handleCheckbox}})],1),e._v(" "),n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,fit:"",border:""}},[n("el-table-column",{attrs:{prop:"name",label:"姓名",width:"180"}}),e._v(" "),e._l(e.Thead,function(t){return n("el-table-column",{key:t,attrs:{label:t},scopedSlots:e._u([{key:"default",fn:function(n){return[e._v("\n            "+e._s(n.row[t])+"\n          ")]}}])})})],2)],1)},staticRenderFns:[]},u={name:"DynamicTable",components:{FixedTable:n("VU/8")(l,r,!1,null,null,null).exports,UnFixedTable:n("VU/8")(d,h,!1,null,null,null).exports}},p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"app-container"},[t("h3",[this._v("固定位置修改")]),this._v(" "),t("fixed-table"),this._v(" "),t("h3",[this._v("不固定位置修改")]),this._v(" "),t("un-fixed-table")],1)},staticRenderFns:[]},f=n("VU/8")(u,p,!1,null,null,null);t.default=f.exports}});
//# sourceMappingURL=24.910e7875c9fc807afcdd.js.map