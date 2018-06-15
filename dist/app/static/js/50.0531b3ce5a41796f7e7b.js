(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{AcHj:function(e,t,a){},G8IH:function(e,t,a){"use strict";var l=a("k3FD"),s={name:"v-radio",props:{id:String,label:String,labelClasses:String,radioClasses:String,options:{type:Array,required:!0},reverse:{type:Boolean,default:!1},mode:{type:String,default:"list"},value:String|Number,limit:Number},data:function(){return{currentValue:this.value,className:this.classes}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e)}},methods:{onClick:function(){l.a.log("v-radio.onClick: "),this.cb&&"function"==typeof this.cb&&this.cb()}}},i=(a("bV7L"),a("KHd+")),n=Object(i.a)(s,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",{staticClass:"v-radio",class:[e.mode],on:{change:function(t){e.$emit("change",e.currentValue)}}},[e.label?a("dt",{staticClass:"v-radio__title",class:[e.labelClasses]},[e._v(e._s(e.label))]):e._e(),e._v(" "),a("dd",{staticClass:"v-radio__value"},e._l(e.options,function(t,l){return!e.limit||l<e.limit?a("label",{key:l,class:[{slot:e.$slots["slot"+l]},{reverse:e.reverse},{checked:t==e.currentValue||t.value==e.currentValue||t.value==e.currentValue.value},{disabled:t.disabled}]},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"v-radio__input",attrs:{type:"radio",disabled:t.disabled},domProps:{value:null!=t.value?t.value:t,checked:e._q(e.currentValue,null!=t.value?t.value:t)},on:{change:function(a){e.currentValue=null!=t.value?t.value:t}}}),e._v(" "),a("div",{staticClass:"v-radio__label"},[e._t("slot"+l,[e._v(e._s(t.label||t)),t.sublabel?a("p",[e._v(e._s(t.sublabel))]):e._e()]),e._v(" "),e._t("link"+l)],2),e._v(" "),"tags"!=e.mode?a("i",{staticClass:"v-radio__icon icon icon-check",class:[e.radioClasses,{right:e.reverse}]}):e._e()]):e._e()}))])},[],!1,null,null,null);t.a=n.exports},IhR9:function(e,t,a){"use strict";var l=a("UyJR");a.n(l).a},UyJR:function(e,t,a){},bIWE:function(e,t,a){"use strict";var l=a("AcHj");a.n(l).a},bV7L:function(e,t,a){"use strict";var l=a("zCW4");a.n(l).a},qUVE:function(e,t,a){"use strict";a.r(t);var l=a("k3FD"),s=a("G8IH"),i={name:"v-radio-tag",props:{title:String,align:String,options:{type:Array,required:!0},mode:String,value:String},data:function(){return{currentValue:this.value}},watch:{value:function(e){this.currentValue=e},currentValue:function(e){this.$emit("input",e),l.a.log("v-radio.watch.currentValue: ",e,this._uid)}},methods:{onClick:function(){l.a.log("v-radio.onClick: "),this.cb&&"function"==typeof this.cb&&this.cb()}}},n=(a("bIWE"),a("KHd+")),o=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"v-radiolist",class:[{tag:"tag"===e.mode}],on:{change:function(t){e.$emit("change",e.currentValue)}}},[e.title?a("label",{staticClass:"v-radiolist-title",domProps:{textContent:e._s(e.title)}}):e._e(),e._v(" "),e._l(e.options,function(t,l){return a("a",{key:l,staticClass:"v-radiolist-wrapper"},[a("div",{staticClass:"v-radiolist-label"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.currentValue,expression:"currentValue"}],staticClass:"v-radio-input",attrs:{id:"vRadio_"+e._uid+"_"+l,type:"radio",disabled:t.disabled},domProps:{value:t.value||t,checked:e._q(e.currentValue,t.value||t)},on:{change:function(a){e.currentValue=t.value||t}}}),e._v(" "),a("label",{staticClass:"v-radio__core",attrs:{for:"vRadio_"+e._uid+"_"+l},domProps:{textContent:e._s(t.label||t)}})])])})],2)},[],!1,null,null,null).exports,v={data:function(){return{value1:"选项A",value2:"选项B",value3:"当前位置的值",value4:"选项C",value5:"选项B",value6:"选项C",radioValue:"选项A",radioValue2:"当前位置的值",radioValue3:"选项A",radioValue4:"选项A",radioValue5:"选项A",doingOpts:[{label:"中教培训课",value:1},{label:"外教培训课",value:2},{label:"超级球队[已预约]",value:3,disabled:!0}],doingVal:2}},created:function(){},mounted:function(){l.a.log("form mounted... ")},components:{"v-radio":s.a,"v-radio-tag":o},methods:{go:function(e){this.$router.push(e)},simpleAlert:function(){l.a.log("this is simple alert !")},selectDemo:function(){l.a.log("form.selectDemo: ")},handleChange:function(e){l.a.log("form.handleChange: ",e)}}},r=(a("IhR9"),Object(n.a)(v,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page page-form"},[a("h2",[e._v("v-radio")]),e._v(" "),e._m(0),e._v(" "),a("h2",[e._v("doing项目样式")]),e._v(" "),a("v-radio",{staticClass:"doing",attrs:{options:e.doingOpts,radioClasses:"disk",mode:"cards"},model:{value:e.doingVal,callback:function(t){e.doingVal=t},expression:"doingVal"}}),e._v(" "),a("p",{staticClass:"desc"},[e._v("当前选择："+e._s(e.doingVal))]),e._v(" "),a("br"),e._v(" "),a("br"),e._v(" "),a("h2",[e._v("示例")]),e._v(" "),a("ul",{staticClass:"listview listview-form"},[a("li",{staticClass:"height-auto"},[a("v-radio",{attrs:{label:"标题",options:["选项A","选项B","选项C"]},model:{value:e.value1,callback:function(t){e.value1=t},expression:"value1"}}),e._v(" "),a("p",{staticClass:"desc"},[e._v("当前选择："+e._s(e.value1))])],1)]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[a("code",{staticClass:"html"},[e._v('\n    <ul class="listview listview-form">\n        <li class="height-auto">\n            <v-radio :label="\'标题\'" v-model="value1" :options="[\'选项A\', \'选项B\', \'选项C\']"></v-radio>\n            <p class="desc">当前选择：{ { value1 } }</p>\n        </li>\n    </ul>\n    ')])]),e._v(" "),a("h2",[e._v("反转样式")]),e._v(" "),a("ul",{staticClass:"listview listview-form"},[a("li",{staticClass:"height-auto"},[a("v-radio",{attrs:{options:["选项A","选项B","选项C"],reverse:""},model:{value:e.value2,callback:function(t){e.value2=t},expression:"value2"}}),e._v(" "),a("p",{staticClass:"desc"},[e._v("当前选择："+e._s(e.value2))])],1)]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[a("code",{staticClass:"html"},[e._v('\n    <ul class="listview listview-form">\n        <li class="height-auto">\n            <v-radio v-model="value2" :options="[\'选项A\', \'选项B\', \'选项C\']" reverse></v-radio>\n            <p class="desc">当前选择：'+e._s(e.value2)+"</p>\n        </li>\n    </ul>\n    ")])]),e._v(" "),a("h2",[e._v("多行文本")]),e._v(" "),a("ul",{staticClass:"listview listview-form"},[a("li",{staticClass:"height-auto"},[a("v-radio",{attrs:{options:[{label:"当前位置",sublabel:"位置描述",value:"当前位置的值"},{label:"位置名称",sublabel:"具体位置信息",value:"位置名称的值"},{label:"位置三",sublabel:"具体位置信息",value:"位置三的值"}]},model:{value:e.value3,callback:function(t){e.value3=t},expression:"value3"}}),e._v(" "),a("p",{staticClass:"desc"},[e._v("当前选择："+e._s(e.value3))])],1)]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[a("code",{staticClass:"html"},[e._v("\n    <ul class=\"listview listview-form\">\n        <li class=\"height-auto\">\n            <v-radio v-model=\"value3\" :options=\"[{label:'当前位置', sublabel: '位置描述', value:'当前位置的值'}, {label:'位置名称', sublabel: '具体位置信息', value:'位置名称的值'}, {label:'位置三', sublabel: '具体位置信息', value:'位置三的值'}]\" ></v-radio>\n            <p class=\"desc\">当前选择："+e._s(e.value3)+"</p>\n        </li>\n    </ul>\n    ")])]),e._v(" "),a("h2",[e._v("自定义样式")]),e._v(" "),a("ul",{staticClass:"listview listview-form"},[a("li",{staticClass:"height-auto"},[a("v-radio",{attrs:{options:["选项A","选项B","选项C"],radioClasses:"disk",reverse:""},model:{value:e.value4,callback:function(t){e.value4=t},expression:"value4"}}),e._v(" "),a("p",{staticClass:"desc"},[e._v("当前选择："+e._s(e.value4))])],1)]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[a("code",{staticClass:"html"},[e._v('\n    <ul class="listview listview-form">\n        <li class="height-auto">\n            <v-radio v-model="value4" :options="[\'选项A\', \'选项B\', \'选项C\']" radioClasses="disk" reverse></v-radio>\n            <p class="desc">当前选择：'+e._s(e.value4)+"</p>\n        </li>\n    </ul>\n    ")])]),e._v(" "),a("h2",[e._v("标签样式")]),e._v(" "),a("ul",{staticClass:"listview listview-form"},[a("li",{staticClass:"height-auto"},[a("v-radio",{attrs:{options:["选项A","选项B","选项C","选项D"],mode:"tags"},model:{value:e.value5,callback:function(t){e.value5=t},expression:"value5"}}),e._v(" "),a("p",{staticClass:"desc"},[e._v("当前选择："+e._s(e.value5))])],1)]),e._v(" "),a("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[a("code",{staticClass:"html"},[e._v('\n    <ul class="listview listview-form">\n        <li class="height-auto">\n            <v-radio v-model="value5" :options="[\'选项A\', \'选项B\', \'选项C\', \'选项D\']" mode="tags"></v-radio>\n            <p class="desc">当前选择：'+e._s(e.value5)+"</p>\n        </li>\n    </ul>\n    ")])]),e._v(" "),a("div",{staticClass:"blank"})],1)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"attributes"},[a("h2",[e._v("API")]),e._v(" "),a("table",[a("tr",[a("th",[e._v("参数")]),a("th",[e._v("说明")]),a("th",[e._v("类型")]),a("th",[e._v("可选")]),a("th",[e._v("默认")])]),e._v(" "),a("tr",[a("td",[e._v("value")]),a("td",[e._v("当前值")]),a("td",[e._v("Array")]),a("td",[e._v("-")]),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("options")]),a("td",[e._v("选择列表，支持"),a("br"),e._v("['']"),a("br"),e._v("或"),a("br"),e._v("[{label:'',"),a("br"),e._v("sublabel:'',"),a("br"),e._v("value:''}]")]),a("td",[e._v("Array")]),a("td",[e._v("-")]),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("label")]),a("td",[e._v("左侧标题")]),a("td",[e._v("String")]),a("td",[e._v("-")]),a("td",[e._v("-")])]),e._v(" "),a("tr",[a("td",[e._v("radioClasses")]),a("td",[e._v("选择样式")]),a("td",[e._v("String")]),a("td",[e._v("disk")]),a("td",[e._v("check")])]),e._v(" "),a("tr",[a("td",[e._v("reverse")]),a("td",[e._v("选择icon反转位置")]),a("td",[e._v("Boolean")]),a("td",[e._v("-")]),a("td",[e._v("false")])]),e._v(" "),a("tr",[a("td",[e._v("mode")]),a("td",[e._v("展现方式")]),a("td",[e._v("String")]),a("td",[e._v("list、"),a("br"),e._v("tags")]),a("td",[e._v("list")])])])])}],!1,null,null,null));t.default=r.exports},zCW4:function(e,t,a){}}]);