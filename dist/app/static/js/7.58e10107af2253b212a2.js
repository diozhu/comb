webpackJsonp([7],{163:function(t,o,s){s(657);var e=s(41)(s(464),s(805),null,null);t.exports=e.exports},199:function(t,o,s){s(734);var e=s(41)(s(500),s(881),null,null);t.exports=e.exports},226:function(t,o,s){s(686);var e=s(41)(s(527),s(834),null,null);t.exports=e.exports},239:function(t,o,s){s(267);var e=s(41)(s(265),null,null,null);t.exports=e.exports},265:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(42);o.default={name:"v-text",props:{value:String,limit:{type:Number,default:0},expandEnabled:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},methods:{handleClick:function(){var t="limit"+this.limit;s.i(e.d)(this.$el,t)?s.i(e.c)(this.$el,t):s.i(e.b)(this.$el,t)}},render:function(t){var o={attrs:{id:"vText"+this._uid},class:["v-text",1===this.limit?"single":this.limit?"limit"+this.limit:""]};return this.expandEnabled&&(o.on={click:this.handleClick}),t("p",o,this.value)}}},266:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".v-text{font-size:.4rem;line-height:1.2;text-align:justify}.v-text.single{white-space:nowrap}.v-text.single,.v-text[class*=limit]{overflow:hidden;text-overflow:ellipsis}.v-text[class*=limit]{text-align:left;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.v-text.limit2{-webkit-line-clamp:2}.v-text.limit3{-webkit-line-clamp:3}.v-text.limit4{-webkit-line-clamp:4}.v-text.limit5{-webkit-line-clamp:5}.v-text .re{display:inline-table;font-size:.4rem;line-height:.50667rem;color:#007aff}",""])},267:function(t,o,s){var e=s(266);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("69ce6f72",e,!0)},302:function(t,o,s){s(344);var e=s(41)(s(337),s(349),null,null);t.exports=e.exports},307:function(t,o,s){s(342);var e=s(41)(s(335),null,null,null);t.exports=e.exports},335:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"v-col",props:{span:{type:Number,default:12},gutter:{type:Number,default:-1}},data:function(){return{}},computed:{parentGutter:function(){return this.$parent.gutter},dpr:function(){return this.$parent.dpr},ratio:function(){return this.$parent.ratio},avg:function(){return this.$parent.avg},style:function(){var t={},o=void 0;return o=0===this.gutter?0:-1===this.gutter?this.parentGutter:this.gutter,o&&(t.paddingLeft=o/this.ratio/(this.avg?4:2)+"rem",t.paddingRight=t.paddingLeft),t}},render:function(t){var o=this,s=this.style,e=[];return["span","offset","pull","push"].forEach(function(t){o[t]&&e.push("span"!==t?"v-col-"+t+"-"+o[t]:"v-col-"+o[t])}),t("div",{class:["v-col",e],style:s},[this.$slots.default])}}},337:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"v-row",props:{gutter:{type:Number,default:0},type:String,justify:{type:String,default:"start"},align:{type:String,default:"top"},avg:{type:Boolean,default:!1}},data:function(){return{dpr:window.lib.flexible.dpr||1,ratio:37.5}},computed:{style:function(){var t={};return this.gutter&&(t.marginLeft="-"+this.gutter/this.ratio/2+"rem",t.marginRight=t.marginLeft),t}},mounted:function(){var t=this;this.avg&&this.gutter&&this.$el.childNodes.forEach(function(o,s){0===s?o.style.paddingLeft=t.gutter/t.ratio/2+"rem":s===t.$el.childNodes.length-1&&(o.style.paddingRight=t.gutter/t.ratio/2+"rem")})}}},338:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".v-col-1,.v-col-2,.v-col-3,.v-col-4,.v-col-5,.v-col-6,.v-col-7,.v-col-8,.v-col-9,.v-col-10,.v-col-11,.v-col-12{position:relative;min-height:1px;box-sizing:border-box}.v-col-1{-webkit-flex-basis:8.33333%;flex-basis:8.33333%}.v-col-1,.v-col-2{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.v-col-2{-webkit-flex-basis:16.66667%;flex-basis:16.66667%}.v-col-3{-webkit-flex-basis:25%;flex-basis:25%}.v-col-3,.v-col-4{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.v-col-4{-webkit-flex-basis:33.33333%;flex-basis:33.33333%}.v-col-5{-webkit-flex-basis:41.66667%;flex-basis:41.66667%}.v-col-5,.v-col-6{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.v-col-6{-webkit-flex-basis:50%;flex-basis:50%}.v-col-7{-webkit-flex-basis:58.33333%;flex-basis:58.33333%}.v-col-7,.v-col-8{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.v-col-8{-webkit-flex-basis:66.66667%;flex-basis:66.66667%}.v-col-9{-webkit-flex-basis:75%;flex-basis:75%}.v-col-9,.v-col-10{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.v-col-10{-webkit-flex-basis:83.33333%;flex-basis:83.33333%}.v-col-11{-webkit-flex-basis:91.66667%;flex-basis:91.66667%}.v-col-11,.v-col-12{-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.v-col-12{-webkit-flex-basis:100%;flex-basis:100%}",""])},340:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".v-row{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.v-row.is-justify-space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.v-row.is-justify-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.v-row.is-justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.v-row.is-justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.v-row.is-justify-space-around{-webkit-justify-content:space-around;justify-content:space-around}.v-row>a{width:100%}",""])},342:function(t,o,s){var e=s(338);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("5d274a93",e,!0)},344:function(t,o,s){var e=s(340);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("1ed1ad0c",e,!0)},349:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement;return(t._self._c||o)("div",{staticClass:"v-row",class:["start"!==t.justify?"is-justify-"+t.justify:"","top"!==t.align?"is-align-"+t.align:"",t.avg?"avg":"",{"v-row__flex":"flex"===t.type}],style:t.style},[t._t("default")],2)},staticRenderFns:[]}},424:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default={name:"p-colour",props:{color:{type:String,default:"",required:!0},title:{type:String,default:""},subtitle:{type:String,default:""}},methods:{onClick:function(){this.$toast(this.color)}},render:function(t){var o=null;return(this.title||this.subtitle)&&(o=t("div",{class:"p-colour__frm"},[t("div",{class:"p-colour__tit"},this.title),t("div",{class:"p-colour__sub"},this.subtitle||(this.title?this.color:""))])),t("div",{class:"p-colour"},[t("div",{class:"p-colour__col",style:{background:this.color},on:{click:this.onClick}}),o])}}},452:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(302),r=s.n(e),a=s(307),l=s.n(a),n=s(239),v=s.n(n);o.default={components:{vRow:r.a,vCol:l.a,vText:v.a},props:{tabs:{fixed:{type:Boolean,default:!1},selectNum:Number,tabNavs:Array,tabCons:Array}},data:function(){return{}},mounted:function(){this.$logger.log("TabBar.mounted... ",this.tabs)},methods:{tabChange:function(t,o){this.tabs.selectNum=o,this.$emit("change",t,o)}}}},464:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(302),r=s.n(e),a=s(307),l=s.n(a),n=s(772),v=s.n(n);o.default={components:{vRow:r.a,vCol:l.a,pColour:v.a},data:function(){return{}},created:function(){this.$logger.log("colour.mounted... ")},methods:{}}},500:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(302),r=s.n(e),a=s(307),l=s.n(a);o.default={components:{vRow:r.a,vCol:l.a},data:function(){return{t1:""}},created:function(){this.$logger.log("layout.mounted... "),this.t1='        <v-row justify="space-between">\n            <v-col :span="3">1/4</v-col>\n            <v-col :span="3">1/4</v-col>\n        </v-row>'},methods:{}}},527:function(t,o,s){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=s(794),r=s.n(e);o.default={components:{vTabbar:r.a},data:function(){return{tabs:{fixed:!1,customTpl:!0,selectNum:0,tabCons:["我初始化的000月度内容","我初始化的111月度内容","我初始化的222季度内容"],tabNavs:["年度","月度","季度"]},selected:"年度",template:""}},mounted:function(){this.$logger.log("shaolingtabbar.mounted..."),this.template="<h1>"+this.selected+"我是标签模板第一项.</h1>",this.template1=this.selected+"我是标签模板第二项.",this.template2=this.selected+"我是标签模板第三项.",this.$refs.testTpl.innerHTML="<h1>"+this.selected+"我是标签模板第一项.</h1>"},created:function(){},computed:{selectNav:function(){return this.selected.split("度")[0]}},methods:{changeFn:function(t,o){this.selected=t},selectNav1:function(){return this.selected.split("度")[0]}}}},546:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".page-colour{padding:0 .4rem}.page-colour h2{margin-left:0}.page-colour h3{margin-top:.53333rem;margin-bottom:.16rem}.page-colour hr{border:1px solid #dddee3}.page-colour .desc{padding:0}.page-colour .case{height:.85333rem}.page-colour .v-row .v-col{margin-bottom:.08rem}.page-colour .blank{width:100%;height:2.66667rem}",""])},575:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".p-float-comments{display:none}.v-tabBar{width:100%;line-height:.8rem;background:#f2f2f4}.selected-val,.v-tabBar,.v-tabBar p{font-size:.42667rem}.selected-val{margin:.26667rem 0;line-height:.8rem;padding:.26667rem;font-weight:700;color:#007aff;background:#fff}.selected-val span{float:right;font-size:.42667rem}",""])},608:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".tab-container{position:relative;background:#f2f2f4}.tab-container .is-fixed{position:fixed;left:0;bottom:0;width:100%}.tab-container .tn-tabbar{background-color:#fff;display:-webkit-box;display:-webkit-flex;display:flex;left:0;text-align:center}.tab-container .tn-tabbar .is-fixed{right:0;bottom:0;position:fixed;z-index:1}.tab-container .tn-tab-item{color:#777e8c;display:block;font-size:.53333rem;-webkit-box-flex:1;-webkit-flex:1;flex:1;text-decoration:none;height:1.17333rem;line-height:1.17333rem}.tab-container .tn-tab-item .selected{border-bottom:.05333rem solid #007aff;color:#007aff;display:inline-block;height:1.17333rem}.tab-container .tn-tab-item-label{color:inherit;font-size:.32rem;line-height:1}.tab-container .tn-tab-item-tit{color:#000;padding:0 .26667rem;display:inline-block;font-size:.37333rem;height:1.17333rem}.tab-container .tn-tab-container-item{padding:.26667rem;background:#fff;width:100%;font-size:.42667rem;margin:.26667rem 0;color:#666}",""])},623:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".page-layout{padding:0 .4rem}.page-layout .v-row .v-col{line-height:.74667rem;background:rgba(86,61,124,.15);border:1px solid rgba(86,61,124,.2)}.page-layout .v-row .v-col>p{height:100%;background:#f2f2f4;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.page-layout .blank{width:100%;height:2.66667rem}",""])},633:function(t,o,s){o=t.exports=s(150)(),o.push([t.i,".p-colour{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.p-colour__col{width:.8rem;height:.8rem;-webkit-flex-shrink:0;flex-shrink:0;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;-webkit-flex-basis:auto;flex-basis:auto}.p-colour__frm{margin-left:.08rem}.p-colour__tit{font-size:.32rem;line-height:1.2;margin-top:.08rem}.p-colour__sub{font-size:.26667rem;line-height:1;color:#95989f;margin-top:.08rem}",""])},657:function(t,o,s){var e=s(546);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("50f89cb4",e,!0)},686:function(t,o,s){var e=s(575);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("0bed8262",e,!0)},719:function(t,o,s){var e=s(608);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("58f7d017",e,!0)},734:function(t,o,s){var e=s(623);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("c744a34e",e,!0)},744:function(t,o,s){var e=s(633);"string"==typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);s(151)("cbaa4e02",e,!0)},767:function(t,o,s){t.exports=s.p+"static/img/case-1.428b630.png"},768:function(t,o,s){t.exports=s.p+"static/img/case-2.8d52305.png"},769:function(t,o,s){t.exports=s.p+"static/img/case-3.44fdcdf.png"},770:function(t,o,s){t.exports=s.p+"static/img/case-4.f6ed0a4.png"},772:function(t,o,s){s(744);var e=s(41)(s(424),null,null,null);t.exports=e.exports},794:function(t,o,s){s(719);var e=s(41)(s(452),s(867),null,null);t.exports=e.exports},805:function(t,o,s){t.exports={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"page page-colour"},[e("h2",[t._v("Colour for H5")]),t._v(" "),e("p",{staticClass:"desc"},[t._v("\n        本色彩适用于toon平台上挂载的所有H5应用。\n        应用方只能参照此手册配色，不得出现其他色系。（定制版本除外）\n    ")]),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#007AFF",title:"科技蓝"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#00CBB9",title:"湖青绿"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF6F48",title:"阳光橙"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF477C",title:"玫瑰粉"}})],1)],1),t._v(" "),e("h2",[t._v("色阶")]),t._v(" "),e("p",{staticClass:"desc"},[t._v("灰色色阶及字色规范")]),t._v(" "),e("br"),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",[e("p-colour",{attrs:{color:"#000000",title:"标题字色、昵称字色"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#333333",title:"正文字色、推广语字色、搜索文字"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#777E8C",title:"提示色"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#8E8E93",title:"feed时间字色"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#95989F",title:"item未编辑字色、展示字色"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#ACB38F",title:"辅助字"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#C1C1C1",title:"Button不可点击色"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#DDDEE3",title:"边框线色、button不可点击色"}})],1),t._v(" "),e("v-col",[e("p-colour",{attrs:{color:"#F2F2F4",title:"背景色"}})],1)],1),t._v(" "),e("h2",[t._v("色卡")]),t._v(" "),e("p-colour",{attrs:{color:"#007AFF",title:"科技蓝"}}),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"desc"},[t._v("沿用toon蓝，理智、忠诚、科技、稳重且富有亲和感，凸显政府级企业的威严。")]),t._v(" "),e("h3",[t._v("适用范围")]),t._v(" "),e("p",{staticClass:"desc"},[t._v("toon企业级应用、to B平台类、工作效率类、科技类等")]),t._v(" "),e("h3",[t._v("辅色")]),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#007AFF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#1987FF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#3395FF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#4CA1FF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#66AFFF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#7FBCFF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#99CAFF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#B2D7FF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#CCE4FF"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#E5F1FF"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#007AFF",subtitle:"#007AFF"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#4CA1FF",subtitle:"#4CA1FF"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#F7B64B",subtitle:"#F7B64B"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FA5A5A",subtitle:"#FA5A5A"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("案例")]),t._v(" "),e("img",{staticClass:"case",attrs:{src:s(767)}}),t._v(" "),e("br"),e("br"),e("br"),e("hr"),e("br"),e("br"),e("br"),t._v(" "),e("p-colour",{attrs:{color:"#00CBB9",title:"湖青绿"}}),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"desc"},[t._v("绿色代表自然和谐、健康、通行、秩序感、是使人放松的的色彩。")]),t._v(" "),e("h3",[t._v("适用范围")]),t._v(" "),e("p",{staticClass:"desc"},[t._v("教育、招聘、to C、安全类等")]),t._v(" "),e("h3",[t._v("辅色")]),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#00B6A6"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#19BDAE"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#00CBB9"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#33D5C7"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#4CDACE"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#66E0D5"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#7FE5DC"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#99EAE3"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#B2EFEA"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#CCF5F1"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#00B6A6",subtitle:"#00B6A6"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#33D5C7",subtitle:"#33D5C7"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF7B57",subtitle:"#FF7B57"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF6D97",subtitle:"#FF6D97"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("案例")]),t._v(" "),e("img",{staticClass:"case",attrs:{src:s(768)}}),t._v(" "),e("br"),e("br"),e("br"),e("hr"),e("br"),e("br"),e("br"),t._v(" "),e("p-colour",{attrs:{color:"#FF6F48",title:"阳光橙"}}),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"desc"},[t._v("带来活力、热情、食欲、使人愉快的颜色、强化视觉的冲击力。")]),t._v(" "),e("h3",[t._v("适用范围")]),t._v(" "),e("p",{staticClass:"desc"},[t._v("to C平台类、服务类、钱包、O2O、邀请有奖等")]),t._v(" "),e("h3",[t._v("辅色")]),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF6237"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF6F48"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF7D5A"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF8C6D"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF9A7E"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFA991"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFB7A3"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFC5B6"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFD3C8"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFE2DA"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF6237",subtitle:"#FF6237"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF7D5A",subtitle:"#FF7D5A"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF6D97",subtitle:"#FF6D97"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#00CBB9",subtitle:"#00CBB9"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("案例")]),t._v(" "),e("img",{staticClass:"case",attrs:{src:s(769)}}),t._v(" "),e("br"),e("br"),e("br"),e("hr"),e("br"),e("br"),e("br"),t._v(" "),e("p-colour",{attrs:{color:"#FF477C",title:"玫瑰粉"}}),t._v(" "),e("br"),t._v(" "),e("p",{staticClass:"desc"},[t._v("赋予了应用温馨、主动、开放、快乐的性格，极富社交及女性特色。")]),t._v(" "),e("h3",[t._v("适用范围")]),t._v(" "),e("p",{staticClass:"desc"},[t._v("女性、社交、母婴、主打温馨类等")]),t._v(" "),e("h3",[t._v("辅色")]),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF336E"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF477C"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF6C96"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF7EA3"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FF91B0"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFA3BD"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFB5CB"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFC7D7"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFDAE5"}})],1),t._v(" "),e("v-col",{attrs:{span:1}},[e("p-colour",{attrs:{color:"#FFECF1"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("v-row",{attrs:{aligment:!0}},[e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF336E",subtitle:"#FF336E"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#FF6C96",subtitle:"#FF6C96"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#F7B64B",subtitle:"#F7B64B"}})],1),t._v(" "),e("v-col",{attrs:{span:3}},[e("p-colour",{attrs:{color:"#3395FF",subtitle:"#3395FF"}})],1)],1),t._v(" "),e("br"),t._v(" "),e("h3",[t._v("案例")]),t._v(" "),e("img",{staticClass:"case",attrs:{src:s(770)}}),t._v(" "),e("div",{staticClass:"blank"})],1)},staticRenderFns:[]}},834:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"v-tabBar page page-cell"},[s("h2",[t._v("选项卡参考样例")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("选项卡功能，包括常规内容切换，导航上下位置可选，数据即时更新。")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("示例")]),t._v(" "),s("v-tabbar",{attrs:{tabs:t.tabs},on:{change:t.changeFn}},[t._l(t.tabs.tabCons,function(o,e){return t.tabs.selectNum==e?s("p",{slot:"con"},[t._v("\n            "+t._s(o)+"\n        ")]):t._e()}),t._v(" "),0==t.tabs.selectNum?s("p",{slot:"customTpl"},[t._v(t._s(t.template))]):t._e(),t._v(" "),1==t.tabs.selectNum?s("p",{slot:"customTpl"},[t._v(t._s(t.template1))]):t._e(),t._v(" "),2==t.tabs.selectNum?s("p",{slot:"customTpl"},[t._v(t._s(t.template2))]):t._e(),t._v(" "),0==t.tabs.selectNum?s("p",{ref:"testTpl",slot:"customTpl"}):t._e()],2),t._v(" "),s("div",{staticClass:"selected-val"},[s("span",[t._v(t._s(t.selectNav))]),t._v("已选中:")])],1)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"attributes"},[s("h2",[t._v("API")]),t._v(" "),s("table",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选")]),s("th",[t._v("默认")])]),t._v(" "),s("tr",[s("td",[t._v("fixed")]),s("td",[t._v("固定在页面底部")]),s("td",[t._v("Boolean")]),s("td",[t._v("-")]),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("customTpl")]),s("td",[t._v("是否有自定义模板")]),s("td",[t._v("Boolean")]),s("td",[t._v("-")]),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("slots")]),s("td",{attrs:{colspan:"4"}},[t._v("根据id")])])])])}]}},867:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"tab-container"},[s("v-row",{staticClass:"tn-tabbar",class:{"is-fixed":t.tabs.fixed}},t._l(t.tabs.tabNavs,function(o,e){return s("div",{staticClass:"tn-tab-item",on:{click:function(s){t.tabChange(o,e)}}},[s("v-col",{staticClass:"tn-tab-item-tit",class:{selected:t.tabs.selectNum==e}},[t._v("\n                "+t._s(o)+"\n            ")])],1)})),t._v(" "),t.tabs.customTpl?t._e():s("div",{staticClass:"tn-tab-container-item"},t._l(t.tabs.tabCons,function(o,e){return t.tabs.selectNum==e?s("v-text",{key:e,staticClass:"tn-cell",attrs:{limit:1}},[t._v("\n            "+t._s(o)+"\n        ")]):t._e()})),t._v(" "),t.tabs.customTpl?s("div",{staticClass:"tn-tab-container-item"},[t._t("con",[t._v("\n      暂无内容\n    ")]),t._v(" "),t._t("customTpl")],2):t._e()],1)},staticRenderFns:[]}},881:function(t,o){t.exports={render:function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"page page-layout"},[s("h2",[t._v("布局 参考样例")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("\n        源自bootstrap，当前采用的是flex实现方式，最大列数为12，可通过栅格快速布局。\n        当前页面的容器是.page。\n    ")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("基础布局")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("栅格把屏幕12列，使用时确定当前的列占用比例即可，如: 只有一列，传入12，两列传入两个6，以此类推。")]),t._v(" "),s("v-row",[s("v-col",{attrs:{span:12}},[t._v("1/1")])],1),t._v(" "),s("v-row",[s("v-col",{attrs:{span:6}},[t._v("1/2")]),t._v(" "),s("v-col",{attrs:{span:6}},[t._v("1/2")])],1),t._v(" "),s("v-row",[s("v-col",{attrs:{span:4}},[t._v("1/3")]),t._v(" "),s("v-col",{attrs:{span:4}},[t._v("1/3")]),t._v(" "),s("v-col",{attrs:{span:4}},[t._v("1/3")])],1),t._v(" "),s("v-row",[s("v-col",{attrs:{span:3}},[t._v("1/4")]),t._v(" "),s("v-col",{attrs:{span:3}},[t._v("1/4")]),t._v(" "),s("v-col",{attrs:{span:3}},[t._v("1/4")]),t._v(" "),s("v-col",{attrs:{span:3}},[t._v("1/4")])],1),t._v(" "),s("v-row",[s("v-col",{attrs:{span:2}},[t._v("1/6")]),t._v(" "),s("v-col",{attrs:{span:2}},[t._v("1/6")]),t._v(" "),s("v-col",{attrs:{span:2}},[t._v("1/6")]),t._v(" "),s("v-col",{attrs:{span:2}},[t._v("1/6")]),t._v(" "),s("v-col",{attrs:{span:2}},[t._v("1/6")]),t._v(" "),s("v-col",{attrs:{span:2}},[t._v("1/6")])],1),t._v(" "),s("v-row",[s("v-col",{attrs:{span:2}},[t._v("1/6")]),t._v(" "),s("v-col",{attrs:{span:10}},[t._v("5/6")])],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n        <v-row>\n            <v-col :span="12">1/1</v-col>\n        </v-row>\n        <v-row>\n            <v-col :span="6">1/2</v-col>\n            <v-col :span="6">1/2</v-col>\n        </v-row>\n        <v-row>\n            <v-col :span="4">1/3</v-col>\n            <v-col :span="4">1/3</v-col>\n            <v-col :span="4">1/3</v-col>\n        </v-row>\n        <v-row>\n            <v-col :span="3">1/4</v-col>\n            <v-col :span="3">1/4</v-col>\n            <v-col :span="3">1/4</v-col>\n            <v-col :span="3">1/4</v-col>\n        </v-row>\n        <v-row>\n            <v-col :span="2">1/6</v-col>\n            <v-col :span="2">1/6</v-col>\n            <v-col :span="2">1/6</v-col>\n            <v-col :span="2">1/6</v-col>\n            <v-col :span="2">1/6</v-col>\n            <v-col :span="2">1/6</v-col>\n        </v-row>\n        <v-row>\n            <v-col :span="2">1/6</v-col>\n            <v-col :span="10">5/6</v-col>\n        </v-row>\n      ')])]),t._v(" "),s("h2",[t._v("水平对齐方式")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("设定justify，两端对齐")]),t._v(" "),s("v-row",{attrs:{justify:"space-between"}},[s("v-col",{attrs:{span:3}},[t._v("1/4")]),t._v(" "),s("v-col",{attrs:{span:3}},[t._v("1/4")])],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row justify="space-between">\n        <v-col :span="3">1/4</v-col>\n        <v-col :span="3">1/4</v-col>\n    </v-row>\n    ')])]),t._v(" "),s("p",{staticClass:"desc"},[t._v("居中")]),t._v(" "),s("v-row",{attrs:{justify:"center"}},[s("v-col",{attrs:{span:3}},[t._v("1/4")]),t._v(" "),s("v-col",{attrs:{span:3}},[t._v("1/4")])],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row justify="center">\n        <v-col :span="3">1/4</v-col>\n        <v-col :span="3">1/4</v-col>\n    </v-row>\n    ')])]),t._v(" "),s("p",{staticClass:"desc"},[t._v("右对齐")]),t._v(" "),s("v-row",{attrs:{justify:"end"}},[s("v-col",{attrs:{span:3}},[t._v("1/4")]),t._v(" "),s("v-col",{attrs:{span:3}},[t._v("1/4")])],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row justify="end">\n        <v-col :span="3">1/4</v-col>\n        <v-col :span="3">1/4</v-col>\n    </v-row>\n    ')])]),t._v(" "),s("h2",[t._v("多列")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("单行多列，超出12列后会自动折行")]),t._v(" "),s("v-row",[s("v-col",{attrs:{span:6}},[t._v("第一个第一个第一个第一个第一个第一个第一个第一个")]),t._v(" "),s("v-col",{attrs:{span:6}},[t._v("第二个第二个第二个第二个第二个第二个第二个第二个第二个")]),t._v(" "),s("v-col",{attrs:{span:6}},[t._v("第三个第三个第三个第三个第三个第三个第三个第三个第三个第三个")]),t._v(" "),s("v-col",{attrs:{span:6}},[t._v("第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个")])],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row>\n        <v-col :span="6">第一个第一个第一个第一个第一个第一个第一个第一个</v-col>\n        <v-col :span="6">第二个第二个第二个第二个第二个第二个第二个第二个第二个</v-col>\n        <v-col :span="6">第三个第三个第三个第三个第三个第三个第三个第三个第三个第三个</v-col>\n        <v-col :span="6">第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个</v-col>\n    </v-row>\n    ')])]),t._v(" "),s("h2",[t._v("关于沟槽 - Gutter")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("\n        栅格是通过：容器、行、列，三个元素构建而成，从最外层的容器开始，每层都会通过margin、pading的设定形成沟槽；\n        沟槽的意义在于嵌套，而在简单布局情况下，沟槽的存在使得布局变得稍显复杂，所以gutter的默认值为0；\n        如果要设定沟槽，与css方式一样，本项目根据的ui规格为750，css换算37.5，所以如果需要15px的沟槽，此处需传入30作为参数；\n    ")]),t._v(" "),s("v-row",{attrs:{gutter:30}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])])],1),t._v(" "),s("v-row",{attrs:{gutter:30}},[s("v-col",{attrs:{span:4}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:4}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:4}},[s("p",[t._v("文字")])])],1),t._v(" "),s("v-row",{attrs:{gutter:30}},[s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])])],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row :gutter.Number="30">\n        <v-col :span="6"><p>文字</p></v-col>\n        <v-col :span="6"><p>文字</p></v-col>\n    </v-row>\n    <v-row :gutter.Number="30">\n        <v-col :span="4"><p>文字</p></v-col>\n        <v-col :span="4"><p>文字</p></v-col>\n        <v-col :span="4"><p>文字</p></v-col>\n    </v-row>\n    <v-row :gutter.Number="30">\n        <v-col :span="3"><p>文字</p></v-col>\n        <v-col :span="3"><p>文字</p></v-col>\n        <v-col :span="3"><p>文字</p></v-col>\n        <v-col :span="3"><p>文字</p></v-col>\n    </v-row>\n    ')])]),t._v(" "),s("p",{staticClass:"desc"},[t._v("在做双按钮或者左右布局的时候，两个block的间距以及到屏幕的间距可通过设置avg来实现平分的效果，添加avg之后的平分样式：")]),t._v(" "),s("v-row",{attrs:{gutter:30,avg:!0}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])])],1),t._v(" "),s("v-row",{attrs:{gutter:30,avg:!0}},[s("v-col",{attrs:{span:4}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:4}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:4}},[s("p",[t._v("文字")])])],1),t._v(" "),s("v-row",{attrs:{gutter:30,avg:!0}},[s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:3}},[s("p",[t._v("文字")])])],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row :gutter.Number="30" :avg="true">\n        <v-col :span="6"><p>文字</p></v-col>\n        <v-col :span="6"><p>文字</p></v-col>\n    </v-row>\n    <v-row :gutter.Number="30" :avg="true">\n        <v-col :span="4"><p>文字</p></v-col>\n        <v-col :span="4"><p>文字</p></v-col>\n        <v-col :span="4"><p>文字</p></v-col>\n    </v-row>\n    <v-row :gutter.Number="30" :avg="true">\n        <v-col :span="3"><p>文字</p></v-col>\n        <v-col :span="3"><p>文字</p></v-col>\n        <v-col :span="3"><p>文字</p></v-col>\n        <v-col :span="3"><p>文字</p></v-col>\n    </v-row>\n    ')])]),t._v(" "),s("h2",[t._v("栅格的嵌套")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("由于沟槽的存在，使得嵌套非常简单~")]),t._v(" "),s("v-row",{attrs:{gutter:30}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("v-row",{attrs:{gutter:30}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])])],1),t._v(" "),s("v-row",{attrs:{gutter:30}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])])],1)],1)],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row :gutter.Number="30">\n        <v-col :span="6"><p>文字</p></v-col>\n        <v-col :span="6">\n            <v-row :gutter.Number="30">\n                <v-col :span="6"><p>文字</p></v-col>\n                <v-col :span="6"><p>文字</p></v-col>\n            </v-row>\n            <v-row :gutter.Number="30">\n                <v-col :span="6"><p>文字</p></v-col>\n                <v-col :span="6"><p>文字</p></v-col>\n            </v-row>\n        </v-col>\n    </v-row>\n    ')])]),t._v(" "),s("p",{staticClass:"desc"},[t._v("加上avg的嵌套效果")]),t._v(" "),s("v-row",{attrs:{gutter:30,avg:!0}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("v-row",{attrs:{gutter:30,avg:!0}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])])],1),t._v(" "),s("v-row",{attrs:{gutter:30,avg:!0}},[s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])]),t._v(" "),s("v-col",{attrs:{span:6}},[s("p",[t._v("文字")])])],1)],1)],1),t._v(" "),s("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[s("code",{staticClass:"html"},[t._v('\n    <v-row :gutter.Number="30" :avg="true">\n        <v-col :span="6"><p>文字</p></v-col>\n        <v-col :span="6">\n            <v-row :gutter.Number="30" :avg="true">\n                <v-col :span="6"><p>文字</p></v-col>\n                <v-col :span="6"><p>文字</p></v-col>\n            </v-row>\n            <v-row :gutter.Number="30" :avg="true">\n                <v-col :span="6"><p>文字</p></v-col>\n                <v-col :span="6"><p>文字</p></v-col>\n            </v-row>\n        </v-col>\n    </v-row>\n    ')])]),t._v(" "),s("div",{staticClass:"blank"})],1)},staticRenderFns:[function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"attributes"},[s("h2",[t._v("API")]),t._v(" "),s("p",{staticClass:"desc"},[t._v("v-row")]),t._v(" "),s("table",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选")]),s("th",[t._v("默认")])]),t._v(" "),s("tr",[s("td",[t._v("justify")]),s("td",[t._v("flex水平排列方式")]),s("td",[t._v("String")]),s("td",[t._v("start, "),s("br"),t._v("end, "),s("br"),t._v("center, "),s("br"),t._v("space-between, "),s("br"),t._v("space-around")]),s("td",[t._v("start")])]),t._v(" "),s("tr",[s("td",[t._v("avg")]),s("td",[t._v("是否平分边距")]),s("td",[t._v("Boolean")]),s("td",[t._v("-")]),s("td",[t._v("false")])]),t._v(" "),s("tr",[s("td",[t._v("gutter")]),s("td",[t._v("沟槽宽度")]),s("td",[t._v("Number")]),s("td",[t._v("0 - 30")]),s("td",[t._v("0")])])]),t._v(" "),s("p",{staticClass:"desc"},[t._v("v-col")]),t._v(" "),s("table",[s("tr",[s("th",[t._v("参数")]),s("th",[t._v("说明")]),s("th",[t._v("类型")]),s("th",[t._v("可选")]),s("th",[t._v("默认")])]),t._v(" "),s("tr",[s("td",[t._v("span")]),s("td",[t._v("栅格占据的列数")]),s("td",[t._v("Number")]),s("td",[t._v("2 - 12")]),s("td",[t._v("12")])])])])}]}}});