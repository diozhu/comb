(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"/Ptm":function(t,i,e){"use strict";var l=e("G5k9");e.n(l).a},"1MEp":function(t,i,e){"use strict";var l=e("P5Lg"),n={name:"v-text",props:{value:String,limit:{type:Number,default:0},length:Number,expandEnabled:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},methods:{handleClick:function(){var t="limit"+this.limit;Object(l.d)(this.$el,t)?Object(l.g)(this.$el,t):Object(l.a)(this.$el,t)}},render:function(t){var i={attrs:{id:"vText"+this._uid},class:["v-text",1===this.limit?"single":this.limit?"limit"+this.limit:""]};return this.expandEnabled&&(i.on={click:this.handleClick}),t("p",i,this.length&&this.value?this.value.substring(0,this.length):this.value)}},a=(e("Cwv2"),e("KHd+")),s=Object(a.a)(n,void 0,void 0,!1,null,null,null);i.a=s.exports},"6i66":function(t,i,e){"use strict";var l=e("ck9h");e.n(l).a},CcUO:function(t,i,e){},Cwv2:function(t,i,e){"use strict";var l=e("CcUO");e.n(l).a},G5k9:function(t,i,e){},KYKv:function(t,i,e){"use strict";var l=e("TZWI");e.n(l).a},Oa8X:function(t,i,e){},TZWI:function(t,i,e){},"a+Jp":function(t,i,e){"use strict";e.r(i);var l=e("1MEp"),n=e("i+h+"),a={props:{title:String},data:function(){return{}},methods:{handleClick:function(t){this.$emit("click",t)}}},s=(e("knyY"),e("KHd+")),u=Object(s.a)(a,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("li",{staticClass:"li-text",on:{click:t.handleClick}},[e("h5",{staticClass:"li-title"},[t._t("title")],2),t._v(" "),e("p",[t._t("default")],2)])},[],!1,null,null,null).exports,r={props:{cusClass:String,imageUrls:{type:Array,default:function(){return["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1484654789094&di=02466216327a32679ac4ff35e01eb26e&imgtype=0&src=http%3A%2F%2Fpic9.nipic.com%2F20100901%2F4628577_161519016775_2.jpg"]}}},data:function(){return{initIndex:0}},mounted:function(){},methods:{viewImage:function(t){this.initIndex=parseInt(t),this.$emit("click",this.imageUrls)}},watch:{imageUrls:function(t){if(3<t.length)return!1}}},h=(e("6i66"),Object(s.a)(r,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"img-list"},t._l(t.imageUrls,function(i,l){return e("img",{key:l,class:["img-cell",t.cusClass],attrs:{src:i},on:{click:function(i){t.viewImage(l)}}})}))},[],!1,null,null,null).exports),v={components:{vText:l.a,vAlbum:n.a,vLi:u,vImageList:h},data:function(){return{title:"拼搏创新",img1:[{url:"http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-",width:2448,height:3264}],img2:[{url:"http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-",width:2448,height:3264},{url:"http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm",width:2448,height:3264}],img3:[{url:"http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-",width:2448,height:3264},{url:"http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm",width:2448,height:3264},{url:"http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49",width:3264,height:2448},{url:"http://apr.qiniu.mobi/Fuj_9AkRYImxjEKwYWO5zuuQm5Po",width:2448,height:3264}],img11:[{url:"http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49",width:3264,height:2448}],img12:[{url:"http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49",width:3264,height:2448},{url:"http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm",width:2448,height:3264}],img13:[{url:"http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49",width:3264,height:2448},{url:"http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-",width:2448,height:3264},{url:"http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm",width:2448,height:3264},{url:"http://apr.qiniu.mobi/Fuj_9AkRYImxjEKwYWO5zuuQm5Po",width:2448,height:3264}],currentUrls:[],showType:0}},created:function(){this.$logger.log("list.created")},mounted:function(){this.$logger.log("list.mounted... ")},methods:{goToViewImage:function(){this.$root.img=arguments[0],this.$router.push({path:"viewImage"})},goViewer:function(t,i){this.$logger.log("list.goViewer: ",t,i),this.$root.swipes={list:this.img13,idx:i},this.$root.img=this.img13,this.$router.push({name:"viewer",query:{idx:i}})}}},c=(e("/Ptm"),Object(s.a)(v,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page page-list"},[e("h2",[t._v("图文样式 for H5")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("h2",[t._v("文字")]),t._v(" "),e("h2",[t._v("默认样式")]),t._v(" "),e("ul",{staticClass:"desc"},[e("li",[e("v-text",{attrs:{value:"这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"}})],1)]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <ul>\n        <li>\n            <v-text value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>\n        </li>\n    </ul>\n    ')])]),t._v(" "),e("h2",[t._v("限定单行")]),t._v(" "),e("ul",{staticClass:"desc"},[e("li",[e("v-text",{attrs:{limit:1,value:"这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"}})],1)]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <ul>\n        <li>\n            <v-text :limit="1" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>\n        </li>\n    </ul>\n    ')])]),t._v(" "),e("h2",[t._v("限定字数")]),t._v(" "),e("ul",{staticClass:"desc"},[e("li",[e("v-text",{attrs:{limit:1,length:7,value:"这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"}})],1)]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <ul>\n        <li>\n            <v-text :limit="1" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>\n        </li>\n    </ul>\n    ')])]),t._v(" "),e("h2",[t._v("限定多行")]),t._v(" "),e("ul",{staticClass:"desc"},[e("li",[e("v-text",{attrs:{limit:3,value:"这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"}})],1)]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <ul>\n        <li>\n            <v-text :limit="3" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>\n        </li>\n    </ul>\n    ')])]),t._v(" "),e("h2",[t._v("单击展开")]),t._v(" "),e("ul",{staticClass:"desc"},[e("li",[e("v-text",{attrs:{limit:3,expandEnabled:!0,value:"这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"}})],1)]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <ul>\n        <li>\n            <v-text :limit="3" :expandEnabled="true" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>\n        </li>\n    </ul>\n    ')])]),t._v(" "),e("h2",[t._v("自定义样式")]),t._v(" "),e("ul",{staticClass:"desc"},[e("li",[e("v-text",{staticClass:"custom",attrs:{value:"这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"}})],1)]),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <ul>\n        <li>\n            <v-text class="custom" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>\n        </li>\n    </ul>\n    ')])]),t._v(" "),e("ul",{staticClass:"desc"},[e("li",[e("v-text",{staticClass:"custom",attrs:{value:"    这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：\n    亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；\n    ..."}})],1)]),t._v(" "),e("h2",[t._v("相册组件 v-album")]),t._v(" "),e("h2",[t._v("单张竖图")]),t._v(" "),e("v-album",{model:{value:t.img1,callback:function(i){t.img1=i},expression:"img1"}}),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <v-album v-model="img1"></v-album>\n    ')])]),t._v(" "),e("h2",[t._v("两张，第一张是竖图")]),t._v(" "),e("v-album",{model:{value:t.img2,callback:function(i){t.img2=i},expression:"img2"}}),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <v-album v-model="img2"></v-album>\n    ')])]),t._v(" "),e("h2",[t._v("多张，第一张是竖图")]),t._v(" "),e("v-album",{model:{value:t.img3,callback:function(i){t.img3=i},expression:"img3"}}),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <v-album v-model="img3"></v-album>\n    ')])]),t._v(" "),e("h2",[t._v("单张横图")]),t._v(" "),e("v-album",{model:{value:t.img11,callback:function(i){t.img11=i},expression:"img11"}}),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <v-album v-model="img11"></v-album>\n    ')])]),t._v(" "),e("h2",[t._v("两张，第一张是横图")]),t._v(" "),e("v-album",{model:{value:t.img12,callback:function(i){t.img12=i},expression:"img12"}}),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <v-album v-model="img12"></v-album>\n    ')])]),t._v(" "),e("h2",[t._v("多张，第一张是横图")]),t._v(" "),e("v-album",{on:{click:t.goViewer},model:{value:t.img13,callback:function(i){t.img13=i},expression:"img13"}}),t._v(" "),e("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(t){t.stopPropagation()}}},[e("code",{staticClass:"html"},[t._v('\n    <v-album v-model="img13"></v-album>\n    ')])])],1)},[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"attributes"},[e("h2",[t._v("v-text参数")]),t._v(" "),e("table",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选")]),e("th",[t._v("默认")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),e("td",[t._v("要显示的字符串")]),e("td",[t._v("String")]),e("td",[t._v("-")]),e("td",[t._v("-")])]),t._v(" "),e("tr",[e("td",[t._v("limit")]),e("td",[t._v("限定行数，0：不限制，1：限定一行，超出省略，以此类推")]),e("td",[t._v("Number")]),e("td",[t._v("0 - 5")]),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("length")]),e("td",[t._v("限定文字长度，多余的会被剪切，避免出现省略号")]),e("td",[t._v("Number")]),e("td",[t._v("-")]),e("td",[t._v("0")])]),t._v(" "),e("tr",[e("td",[t._v("expandEnabled")]),e("td",[t._v("展开标识")]),e("td",[t._v("Boolean")]),e("td",[t._v("true, "),e("br"),t._v("false")]),e("td",[t._v("false")])])])])},function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"attributes"},[e("h2",[t._v("v-album参数")]),t._v(" "),e("table",[e("tr",[e("th",[t._v("参数")]),e("th",[t._v("说明")]),e("th",[t._v("类型")]),e("th",[t._v("可选")]),e("th",[t._v("默认")])]),t._v(" "),e("tr",[e("td",[t._v("value")]),e("td",[t._v("带有url、width、height的对象数组")]),e("td",[t._v("Array")]),e("td",[t._v("-")]),e("td",[t._v("-")])])])])}],!1,null,null,null));i.default=c.exports},ck9h:function(t,i,e){},"i+h+":function(t,i,e){"use strict";var l=e("YJXF"),n={name:"v-album",props:{value:{type:Array,default:function(){return[]}}},data:function(){return{currentValue:this.value,images:[]}},computed:{formatedValues:function(){return this.currentValue.forEach(function(t,i){t.formatedUrl=l.m(t.url)}),this.currentValue},albumClass:function(){var t="";return this.currentValue.length<1?t:(t=3<this.currentValue.length?"more":2<this.currentValue.length?"three":1<this.currentValue.length?"two":"one",t+=this.currentValue[0].width>=this.currentValue[0].height?" v":" h")}},watch:{value:function(t){this.currentValue=t},currentValue:function(t){this.initImages()}},created:function(){this.initImages()},methods:{initImages:function(){var t=this;this.images=[],this.currentValue.forEach(function(i){t.images.push({src:i.url||i.src,w:i.width||i.w,h:i.height||i.h})})},handleClick:function(t,i){var e;(e=this.$logger).log.apply(e,["v-album.handleClick: "].concat(Array.prototype.slice.call(arguments))),this.$emit.apply(this,["click"].concat(Array.prototype.slice.call(arguments)))},goViewer:function(t){var i=this;this.$logger.log("v-album.goViewer: ",t),this.$root.pages=[],this.currentValue.forEach(function(t,e){i.$root.pages.push(t.url)}),this.$logger.log(this.$root.pages,"---------v-album"),this.$root.sliderinit={currentPage:t},this.$router.push({name:"viewer"})}}},a=(e("KYKv"),e("KHd+")),s=Object(a.a)(n,function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{class:["v-album",t.albumClass]},t._l(t.formatedValues,function(i,l){return l<3?e("div",{key:l,staticClass:"v-album__frm",style:{backgroundImage:"url("+i.formatedUrl+")",backgroundSize:"cover"},on:{click:function(i){t.handleClick(i,l)}}},[2===l&&3<t.currentValue.length?e("div",{staticClass:"v-album__mask"}):t._e(),t._v(" "),2===l&&3<t.currentValue.length?e("div",{staticClass:"v-album__num"},[t._v(t._s(t.currentValue.length-3)+"+")]):t._e()]):t._e()}))},[],!1,null,null,null);i.a=s.exports},knyY:function(t,i,e){"use strict";var l=e("Oa8X");e.n(l).a}}]);