webpackJsonp([7],{"7MG8":function(t,e){},UICZ:function(t,e){},eAbk:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("//Fk"),s=i.n(n),o=i("fZjL"),a=i.n(o),c={name:"editorSlideUpload",props:{color:{type:String,default:"#20a0ff"}},data:function(){return{dialogVisible:!1,listObj:{},fileList:[]}},methods:{checkAllSuccess:function(){var t=this;return a()(this.listObj).every(function(e){return t.listObj[e].hasSuccess})},handleSubmit:function(){var t=this,e=a()(this.listObj).map(function(e){return t.listObj[e]});this.checkAllSuccess()?(console.log(e),this.$emit("successCBK",e),this.listObj={},this.fileList=[],this.dialogVisible=!1):this.$message("请等待所有图片上传成功 或 出现了网络问题，请刷新页面重新上传！")},handleSuccess:function(t,e){for(var i=e.uid,n=a()(this.listObj),s=0,o=n.length;s<o;s++)if(this.listObj[n[s]].uid===i)return this.listObj[n[s]].url=t.files.file,void(this.listObj[n[s]].hasSuccess=!0)},handleRemove:function(t){for(var e=t.uid,i=a()(this.listObj),n=0,s=i.length;n<s;n++)if(this.listObj[i[n]].uid===e)return void delete this.listObj[i[n]]},beforeUpload:function(t){var e=this,i=window.URL||window.webkitURL,n=t.uid;return this.listObj[n]={},new s.a(function(s,o){var a=new Image;a.src=i.createObjectURL(t),a.onload=function(){e.listObj[n]={hasSuccess:!1,uid:t.uid,width:this.width,height:this.height}},s(!0)})}}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-container"},[i("el-button",{style:{background:t.color,borderColor:t.color},attrs:{icon:"upload",type:"primary"},on:{click:function(e){t.dialogVisible=!0}}},[t._v("上传图片\n  ")]),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("el-upload",{staticClass:"editor-slide-upload",attrs:{action:"https://httpbin.org/post",multiple:!0,"file-list":t.fileList,"show-file-list":!0,"list-type":"picture-card","on-remove":t.handleRemove,"on-success":t.handleSuccess,"before-upload":t.beforeUpload}},[i("el-button",{attrs:{size:"small",type:"primary"}},[t._v("点击上传")])],1),t._v(" "),i("el-button",{on:{click:function(e){t.dialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.handleSubmit}},[t._v("确 定")])],1)],1)},staticRenderFns:[]};var r={name:"tinymce",components:{editorImage:i("VU/8")(c,l,!1,function(t){i("UICZ")},"data-v-624c6064",null).exports},props:{id:{type:String},value:{type:String,default:""},toolbar:{type:Array,required:!1,default:function(){return["removeformat undo redo |  bullist numlist | outdent indent | forecolor | fullscreen code","bold italic blockquote | h2 p  media link | alignleft aligncenter alignright"]}},menubar:{default:""},height:{type:Number,required:!1,default:360}},data:function(){return{hasChange:!1,hasInit:!1,tinymceId:this.id||"vue-tinymce-"+ +new Date}},watch:{value:function(t){var e=this;!this.hasChange&&this.hasInit&&this.$nextTick(function(){return window.tinymce.get(e.tinymceId).setContent(t)})}},mounted:function(){this.initTinymce()},activated:function(){this.initTinymce()},deactivated:function(){this.destroyTinymce()},methods:{initTinymce:function(){var t=this,e=this;window.tinymce.init({selector:"#"+this.tinymceId,height:this.height,body_class:"panel-body ",object_resizing:!1,toolbar:this.toolbar,menubar:this.menubar,plugins:"advlist,autolink,code,paste,textcolor, colorpicker,fullscreen,link,lists,media,wordcount, imagetools",end_container_on_empty_block:!0,powerpaste_word_import:"clean",code_dialog_height:450,code_dialog_width:1e3,advlist_bullet_styles:"square",advlist_number_styles:"default",imagetools_cors_hosts:["wpimg.wallstcn.com","wallstreetcn.com"],imagetools_toolbar:"watermark",default_link_target:"_blank",link_title:!1,init_instance_callback:function(i){e.value&&i.setContent(e.value),e.hasInit=!0,i.on("NodeChange Change KeyUp",function(){t.hasChange=!0,t.$emit("input",i.getContent({format:"raw"}))})}})},destroyTinymce:function(){window.tinymce.get(this.tinymceId)&&window.tinymce.get(this.tinymceId).destroy()},setContent:function(t){window.tinymce.get(this.tinymceId).setContent(t)},getContent:function(){window.tinymce.get(this.tinymceId).getContent()},imageSuccessCBK:function(t){var e=this;t.forEach(function(t){window.tinymce.get(e.tinymceId).insertContent('<img class="wscnph" src="'+t.url+'" >')})}},destroyed:function(){this.destroyTinymce()}},d={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tinymce-container editor-container"},[e("textarea",{staticClass:"tinymce-textarea",attrs:{id:this.tinymceId}}),this._v(" "),e("div",{staticClass:"editor-custom-btn-container"},[e("editorImage",{staticClass:"editor-upload-btn",attrs:{color:"#20a0ff"},on:{successCBK:this.imageSuccessCBK}})],1)])},staticRenderFns:[]};var u={name:"tiny",components:{Tinymce:i("VU/8")(r,d,!1,function(t){i("7MG8")},"data-v-de19dbb4",null).exports},data:function(){return{content:""}}},h={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"components-container"},[i("code",[t._v("富文本编辑器Tinymce")]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"editor"},[i("tinymce",{attrs:{height:300},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),t._v(" "),i("div",{staticClass:"editor-content",domProps:{innerHTML:t._s(t.content)}})])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("code",[e("a",{staticClass:"link-type",attrs:{target:"_blank",href:"https://panjiachen.github.io/vue-element-admin-site/#/rich-editor"}},[this._v("学习文档")])])}]};var m=i("VU/8")(u,h,!1,function(t){i("gl8G")},"data-v-5572589c",null);e.default=m.exports},gl8G:function(t,e){}});
//# sourceMappingURL=7.19404c22a7d18c0e84b5.js.map