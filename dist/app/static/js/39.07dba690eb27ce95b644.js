webpackJsonp([39],{220:function(e,t,n){n(740);var i=n(43)(n(532),n(901),null,null);e.exports=i.exports},348:function(e,t,n){"use strict";var i=n(0),a=n.n(i),s=!1,r=!a.a.prototype.$isServer&&"ontouchstart"in window;t.a=function(e,t){var n=function(e){t.drag&&t.drag(r?e.changedTouches[0]||e.touches[0]:e)},i=function e(i){r||(document.removeEventListener("mousemove",n),document.removeEventListener("mouseup",e)),document.onselectstart=null,document.ondragstart=null,s=!1,t.end&&t.end(r?i.changedTouches[0]||i.touches[0]:i)};e.addEventListener(r?"touchstart":"mousedown",function(e){s||(document.onselectstart=function(){return!1},document.ondragstart=function(){return!1},r||(document.addEventListener("mousemove",n),document.addEventListener("mouseup",i)),s=!0,t.start&&(e.preventDefault(),t.start(r?e.changedTouches[0]||e.touches[0]:e)))}),r&&(e.addEventListener("touchmove",n),e.addEventListener("touchend",i),e.addEventListener("touchcancel",i))}},349:function(e,t,n){"use strict";function i(e,t,n){this.$children.forEach(function(a){a.$options.componentName===e?a.$emit.apply(a,[t].concat(n)):i.apply(a,[e,t].concat(n))})}t.a={methods:{dispatch:function(e,t,n){for(var i=this.$parent,a=i.$options.componentName;i&&(!a||a!==e);)(i=i.$parent)&&(a=i.$options.componentName);i&&i.$emit.apply(i,[t].concat(n))},broadcast:function(e,t,n){i.call(this,e,t,n)}}}},350:function(e,t,n){"use strict";var i=n(0),a=n.n(i),s={};if(!a.a.prototype.$isServer){var r,l=document.documentElement.style,o=!1;window.opera?r="presto":"MozAppearance"in l?r="gecko":"WebkitAppearance"in l?r="webkit":"string"==typeof navigator.cpuClass&&(r="trident");var c={trident:"-ms-",gecko:"-moz-",webkit:"-webkit-",presto:"-o-"}[r],u={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[r],d=document.createElement("div"),v=u+"Perspective",p=u+"Transform",h=c+"transform",f=u+"Transition",g=c+"transition",m=u.toLowerCase()+"TransitionEnd";void 0!==d.style[v]&&(o=!0);var k=function(e){var t={left:0,top:0};if(null===e||null===e.style)return t;var n=e.style[p],i=/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g.exec(n);return i&&(t.left=+i[1],t.top=+i[3]),t},b=function(e,t,n){if((null!==t||null!==n)&&null!==e&&void 0!==e&&null!==e.style&&(e.style[p]||0!==t||0!==n)){if(null===t||null===n){var i=k(e);null===t&&(t=i.left),null===n&&(n=i.top)}y(e),e.style[p]+=o?" translate("+(t?t+"px":"0px")+","+(n?n+"px":"0px")+") translateZ(0px)":" translate("+(t?t+"px":"0px")+","+(n?n+"px":"0px")+")"}},y=function(e){if(null!==e&&null!==e.style){var t=e.style[p];t&&(t=t.replace(/translate\(\s*(-?\d+(\.?\d+?)?)px,\s*(-?\d+(\.\d+)?)px\)\s*translateZ\(0px\)/g,""),e.style[p]=t)}};s={transformProperty:p,transformStyleName:h,transitionProperty:f,transitionStyleName:g,transitionEndProperty:m,getElementTranslate:k,translateElement:b,cancelTranslateElement:y}}t.a=s},354:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(348),a=n(350),s=n(44),r=n(349),l=function(e,t){if(e){var n=a.a.transformProperty;e.style[n]=e.style[n].replace(/rotateX\(.+?deg\)/gi,"")+" rotateX("+t+"deg)"}},o=.96*window.rem,c={3:-45,5:-20,7:-15};t.default={name:"picker-slot",props:{values:{type:Array,default:function(){return[]}},value:{},visibleItemCount:{type:Number,default:5},valueKey:String,rotateEffect:{type:Boolean,default:!1},divider:{type:Boolean,default:!1},textAlign:{type:String,default:"center"},flex:{},className:{},content:{},descKey:{type:String,default:""}},data:function(){return{currentValue:this.value,mutatingValues:this.values,dragging:!1,animationFrameId:null}},mixins:[r.a],computed:{flexStyle:function(){return{flex:this.flex,"-webkit-box-flex":this.flex,"-moz-box-flex":this.flex,"-ms-flex":this.flex}},classNames:function(){var e="picker-slot-",t=[],n=this.textAlign||"center";return this.rotateEffect&&t.push(e+"absolute"),t.push(e+n),this.divider&&t.push(e+"divider"),this.className&&t.push(this.className),t.join(" ")},contentHeight:function(){return o*this.visibleItemCount},valueIndex:function(){return this.mutatingValues.indexOf(this.currentValue)},dragRange:function(){var e=this.mutatingValues,t=this.visibleItemCount;return[-o*(e.length-Math.ceil(t/2)),o*Math.floor(t/2)]}},methods:{value2Translate:function(e){var t,n=this,i=this.mutatingValues,a=Math.floor(this.visibleItemCount/2);if(i&&i.length&&e&&[].forEach.call(i,function(i,a){(i===e||i[n.valueKey]===e||void 0!==i[n.valueKey]&&i[n.valueKey]===e[n.valueKey])&&(t=a)}),e||void 0!==t||(t=-1),-1!==t)return(t-a)*-o},translate2Value:function(e){e=Math.round(e/o)*o;var t=-(e-Math.floor(this.visibleItemCount/2)*o)/o;return this.mutatingValues[Math.round(t)]},updateRotate:function(e,t){if(!this.divider){var i=this.dragRange,r=this.$refs.wrapper,u=Math.ceil(this.visibleItemCount/2),d=c[this.visibleItemCount]||-20;t||(t=r.querySelectorAll(".picker-item")),void 0===e&&(e=a.a.getElementTranslate(r).top),[].forEach.call(t,function(t,a){var r=a*o,c=i[1]-e,v=r-c,p=v/o,h=d*p;h>180&&(h=180),h<-180&&(h=-180),l(t,h),Math.abs(p)>u?n.i(s.b)(t,"picker-item-far"):n.i(s.c)(t,"picker-item-far")})}},planUpdateRotate:function(){var e=this,t=this.$refs.wrapper;window.cancelAnimationFrame(this.animationFrameId),this.animationFrameId=window.requestAnimationFrame(function(){e.updateRotate()}),n.i(s.g)(t,a.a.transitionEndProperty,function(){e.animationFrameId=null,window.cancelAnimationFrame(e.animationFrameId)})},initEvents:function(){var e,t,s,r=this,l=this.$refs.wrapper,c={};this.$refs.center.addEventListener("touchstart",function(e){e.stopPropagation(),e.preventDefault()}),n.i(i.a)(l,{start:function(e){window.cancelAnimationFrame(r.animationFrameId),r.animationFrameId=null,c={range:r.dragRange,start:new Date,startLeft:e.pageX,startTop:e.pageY,startTranslateTop:a.a.getElementTranslate(l).top},s=l.querySelectorAll(".picker-item")},drag:function(n){r.dragging=!0,c.left=n.pageX,c.top=n.pageY;var i=c.top-c.startTop,o=c.startTranslateTop+i;a.a.translateElement(l,null,o),e=o-t||o,t=o,r.rotateEffect&&r.updateRotate(t,s)},end:function(){r.dragging=!1;var t,n=a.a.getElementTranslate(l).top,i=new Date-c.start,s=c.range;i<300&&(t=n+7*e),r.$nextTick(function(){var e;e=t?Math.round(t/o)*o:Math.round(n/o)*o,e=Math.max(Math.min(e,s[1]),s[0]),a.a.translateElement(l,null,e),r.currentValue=r.translate2Value(e),r.rotateEffect&&r.planUpdateRotate()}),c={}}})},doOnValueChange:function(){var e=this.currentValue,t=this.$refs.wrapper;a.a.translateElement(t,null,this.value2Translate(e))},doOnValuesChange:function(){var e=this.$el,t=e.querySelectorAll(".picker-item");[].forEach.call(t,function(e,t){a.a.translateElement(e,null,o*t)}),this.rotateEffect&&this.planUpdateRotate()}},mounted:function(){this.ready=!0,this.$emit("input",this.currentValue),this.divider||(this.initEvents(),this.doOnValueChange()),this.rotateEffect&&this.doOnValuesChange()},watch:{values:function(e){this.mutatingValues=e},mutatingValues:function(e){var t=this;-1===this.valueIndex&&(this.currentValue=(e||[])[0]),this.rotateEffect&&this.$nextTick(function(){t.doOnValuesChange()})},currentValue:function(e){this.doOnValueChange(),this.rotateEffect&&this.planUpdateRotate(),this.$emit("input",e),this.dispatch("picker","slotValueChange",this)},className:function(){var e;(e=this.$logger).warn.apply(e,["v-picker-slot.watch.className: "].concat(Array.prototype.slice.call(arguments)))}}}},355:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(374),a=n.n(i),s=n(28);t.default={name:"v-picker",componentName:"picker",components:{vPickerSlot:a.a},props:{slots:{type:Array},visibleItemCount:{type:Number,default:5},valueKey:String,rotateEffect:{type:Boolean,default:!1},descKey:{type:String,default:""}},computed:{values:function(){var e=this.slots||[],t=[];return e.forEach(function(e){e.divider||t.push(e.value)}),t},slotCount:function(){var e=this.slots||[],t=0;return e.forEach(function(e){e.divider||t++}),t}},created:function(){this.$on("slotValueChange",this.slotValueChange);var e=this.slots||[],t=0,n=this.values;e.forEach(function(e){e.divider||(e.valueIndex=t++,n[e.valueIndex]=(e.values||[])[e.defaultIndex||0])}),this.$logger.log("v-picker["+this._uid+"].created: ",n)},mounted:function(){s.a.log("picker.mounted: ")},methods:{slotValueChange:function(){this.$emit("change",this,this.values)},getSlot:function(e){var t,n=this.slots||[],i=0,a=this.$children.filter(function(e){return"picker-slot"===e.$options.name});return n.forEach(function(n,s){n.divider||(e===i&&(t=a[s]),i++)}),t},getSlotValue:function(e){var t=this.getSlot(e);return t?t.value:null},setSlotValue:function(e,t){var n=this.getSlot(e);n&&(n.currentValue=t)},getSlotValues:function(e){var t=this.getSlot(e);return t?t.mutatingValues:null},setSlotValues:function(e,t){var n=this.getSlot(e);n&&(n.mutatingValues=t)},getValues:function(){return this.values},setValues:function(e){var t=this,n=this.slotCount;if(e=e||[],n!==e.length)throw new Error("values length is not equal slot count.");e.forEach(function(e,n){t.setSlotValue(n,e)})}}}},362:function(e,t,n){t=e.exports=n(160)(),t.push([e.i,".picker-slot{font-size:.48rem;overflow:hidden;position:relative;max-height:100%}.picker-slot.picker-slot-left{text-align:left}.picker-slot.picker-slot-center{text-align:center;touch-action:none}.picker-slot.picker-slot-right{text-align:right}.picker-slot.picker-slot-divider{color:#000;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.picker-slot.picker-slot-divider div{font-size:.42667rem}.picker-slot-wrapper{-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;-webkit-backface-visibility:hidden;backface-visibility:hidden}.picker-slot-wrapper.dragging,.picker-slot-wrapper.dragging .picker-item{-webkit-transition-duration:0s;transition-duration:0s}.picker-item{height:.96rem;line-height:.96rem;padding:0 .08rem;white-space:nowrap;position:relative;overflow:hidden;text-overflow:ellipsis;font-size:.4rem;color:#000;left:0;top:0;width:100%;box-sizing:border-box;-webkit-transition-duration:.3s;transition-duration:.3s}.picker-item.hasDesc{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.picker-item.hasDesc p{padding:0 0 0 .26667rem;font-size:.32rem;color:#333;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.picker-slot-absolute .picker-item{position:absolute}.picker-item.picker-item-far{pointer-events:none}.picker-item.picker-selected{color:#000;-webkit-transform:translateZ(0) rotateX(0);transform:translateZ(0) rotateX(0)}.picker-3d .picker-items{overflow:hidden;-webkit-perspective:18.66667rem;perspective:18.66667rem}.picker-3d .picker-item,.picker-3d .picker-slot,.picker-3d .picker-slot-wrapper{-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-3d .picker-slot{overflow:visible}.picker-3d .picker-item{-webkit-transform-origin:center center;transform-origin:center center;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}",""])},363:function(e,t,n){t=e.exports=n(160)(),t.push([e.i,'@charset "UTF-8";.v-picker{overflow:hidden}.top-message{font-size:.37333rem;padding:.32rem .4rem;border-bottom:1px solid #e3e3e3;border-top:1px solid #e3e3e3}.top-message .msg-tit{font-size:.4rem;color:#3e3a39;text-align:center;padding-bottom:.05333rem}.top-message .msg-con{font-size:.34667rem;color:#3e3a39;text-align:center}.v-picker-toolbar{height:1.06667rem;border-bottom:1px solid #e3e3e3;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.v-picker-toolbar .v-popup-action{font-size:.4rem;color:#000;margin:0 .4rem;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.v-picker-items,.v-picker-toolbar .v-popup-action{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.v-picker-items{text-align:right;font-size:.64rem;position:relative;padding:0 .4rem;-webkit-box-pack:center;-moz-justify-content:center;-webkit-justify-content:center;justify-content:center;-moz-align-items:center}.v-picker-center-mask{height:100.1%;top:-1px;\n  /*!* Webkit: Safari 4-5, Chrome 1-9 *!\n    background: -webkit-gradient(linear, 0% 0%, 0% 100%, from(hsla(0, 0%, 100%, .95)), to(hsla(0, 0%, 100%, .6)));\n    !* Webkit: Safari 5.1+, Chrome 10+ *!\n    background: -webkit-linear-gradient(top, hsla(0, 0%, 100%, .95), hsla(0, 0%, 100%, .6));\n    !* Firefox 3.6+ *!\n    background: -moz-linear-gradient(top, hsla(0, 0%, 100%, .95), hsla(0, 0%, 100%, .6));\n    !* Opera 11.10+ *!\n    background: -o-linear-gradient(top, hsla(0, 0%, 100%, .95), hsla(0, 0%, 100%, .6));\n    !* IE 10 *!\n    background: -ms-linear-gradient(top, hsla(0, 0%, 100%, .95), hsla(0, 0%, 100%, .6));\n    !* IE < 10 *!\n    !* 注意：这一行必须写在最后 *!\n    !*FILTER: progid:DXImageTransform.Microsoft.Gradient(startColorStr=#ff6600, endColorStr=#339900);*!*/background:-webkit-linear-gradient(top,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background:linear-gradient(180deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6)),linear-gradient(0deg,hsla(0,0%,100%,.95),hsla(0,0%,100%,.6));background-position:top,bottom;background-size:100% 42%;background-repeat:no-repeat;z-index:9}.v-picker-center-highlight,.v-picker-center-mask{width:100%;position:absolute;left:0;pointer-events:none}.v-picker-center-highlight{height:.96rem;box-sizing:border-box;top:50%;margin-top:-.48rem}.v-picker-center-highlight:after,.v-picker-center-highlight:before{content:"";position:absolute;height:.02667rem;width:100%;background-color:#dddee3;display:block;z-index:15;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.v-picker-center-highlight:before{left:0;top:0;bottom:auto;right:auto}.v-picker-center-highlight:after{left:0;bottom:0;right:auto;top:auto}',""])},369:function(e,t,n){var i=n(362);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(161)("d9b36526",i,!0)},370:function(e,t,n){var i=n(363);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(161)("4929de1c",i,!0)},374:function(e,t,n){n(369);var i=n(43)(n(354),n(382),null,null);e.exports=i.exports},375:function(e,t,n){n(370);var i=n(43)(n(355),n(383),null,null);e.exports=i.exports},382:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"center",staticClass:"picker-slot",class:e.classNames,style:e.flexStyle,on:{touchend:function(e){e.stopPropagation()}}},[e.divider?e._e():n("div",{ref:"wrapper",staticClass:"picker-slot-wrapper",class:{dragging:e.dragging},style:{height:e.contentHeight+"px"}},e._l(e.mutatingValues,function(t){return n("div",{ref:"item",refInFor:!0,staticClass:"picker-item",class:[{"picker-selected":t===e.currentValue},{hasDesc:e.descKey}]},[e._v("\n            "+e._s("object"==typeof t&&t[e.valueKey]?t[e.valueKey]:t)+"\n            "),e.descKey?n("p",[e._v(e._s(t[e.descKey]))]):e._e()])})),e._v(" "),e.divider?n("div",[e._v(e._s(e.content))]):e._e()])},staticRenderFns:[]}},383:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"v-picker",class:{"v-picker-3d":e.rotateEffect}},[e.$slots.default?n("div",{staticClass:"v-picker-toolbar"},[e._t("default")],2):e._e(),e._v(" "),n("div",{staticClass:"v-picker-items"},[e._l(e.slots,function(t,i){return n("v-picker-slot",{key:i,attrs:{valueKey:e.valueKey,values:t.values||[],"text-align":t.textAlign||"center","visible-item-count":e.visibleItemCount,"class-name":t.className,flex:t.flex,"rotate-effect":e.rotateEffect,divider:t.divider,content:t.content,descKey:e.descKey},model:{value:e.values[t.valueIndex],callback:function(n){e.$set(e.values,t.valueIndex,n)},expression:"values[slot.valueIndex]"}})}),e._v(" "),n("div",{ref:"mask",staticClass:"v-picker-center-mask"}),e._v(" "),n("div",{staticClass:"v-picker-center-highlight"})],2)])},staticRenderFns:[]}},532:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(45),a=n.n(i),s=n(375),r=n.n(s),l={"北京":["北京"],"广东":["广州","深圳","珠海","汕头","韶关","佛山","江门","湛江","茂名","肇庆","惠州","梅州","汕尾","河源","阳江","清远","东莞","中山","潮州","揭阳","云浮"],"上海":["上海"],"天津":["天津"],"重庆":["重庆"],"辽宁":["沈阳","大连","鞍山","抚顺","本溪","丹东","锦州","营口","阜新","辽阳","盘锦","铁岭","朝阳","葫芦岛"],"江苏":["南京","苏州","无锡","常州","镇江","南通","泰州","扬州","盐城","连云港","徐州","淮安","宿迁"],"湖北":["武汉","黄石","十堰","荆州","宜昌","襄樊","鄂州","荆门","孝感","黄冈","咸宁","随州","恩施土家族苗族自治州","仙桃","天门","潜江","神农架林区"],"四川":["成都","自贡","攀枝花","泸州","德阳","绵阳","广元","遂宁","内江","乐山","南充","眉山","宜宾","广安","达州","雅安","巴中","资阳","阿坝藏族羌族自治州","甘孜藏族自治州","凉山彝族自治州"],"陕西":["西安","铜川","宝鸡","咸阳","渭南","延安","汉中","榆林","安康","商洛"],"河北":["石家庄","唐山","秦皇岛","邯郸","邢台","保定","张家口","承德","沧州","廊坊","衡水"],"山西":["太原","大同","阳泉","长治","晋城","朔州","晋中","运城","忻州","临汾","吕梁"],"河南":["郑州","开封","洛阳","平顶山","安阳","鹤壁","新乡","焦作","濮阳","许昌","漯河","三门峡","南阳","商丘","信阳","周口","驻马店"],"吉林":["长春","吉林","四平","辽源","通化","白山","松原","白城","延边朝鲜族自治州"],"黑龙江":["哈尔滨","齐齐哈尔","鹤岗","双鸭山","鸡西","大庆","伊春","牡丹江","佳木斯","七台河","黑河","绥化","大兴安岭地区"],"内蒙古":["呼和浩特","包头","乌海","赤峰","通辽","鄂尔多斯","呼伦贝尔","巴彦淖尔","乌兰察布","锡林郭勒盟","兴安盟","阿拉善盟"],"山东":["济南","青岛","淄博","枣庄","东营","烟台","潍坊","济宁","泰安","威海","日照","莱芜","临沂","德州","聊城","滨州","菏泽"],"安徽":["合肥","芜湖","蚌埠","淮南","马鞍山","淮北","铜陵","安庆","黄山","滁州","阜阳","宿州","巢湖","六安","亳州","池州","宣城"],"浙江":["杭州","宁波","温州","嘉兴","湖州","绍兴","金华","衢州","舟山","台州","丽水"],"福建":["福州","厦门","莆田","三明","泉州","漳州","南平","龙岩","宁德"],"湖南":["长沙","株洲","湘潭","衡阳","邵阳","岳阳","常德","张家界","益阳","郴州","永州","怀化","娄底","湘西土家族苗族自治州"],"广西":["南宁","柳州","桂林","梧州","北海","防城港","钦州","贵港","玉林","百色","贺州","河池","来宾","崇左"],"江西":["南昌","景德镇","萍乡","九江","新余","鹰潭","赣州","吉安","宜春","抚州","上饶"],"贵州":["贵阳","六盘水","遵义","安顺","铜仁地区","毕节地区","黔西南布依族苗族自治州","黔东南苗族侗族自治州","黔南布依族苗族自治州"],"云南":["昆明","曲靖","玉溪","保山","昭通","丽江","普洱","临沧","德宏傣族景颇族自治州","怒江傈僳族自治州","迪庆藏族自治州","大理白族自治州","楚雄彝族自治州","红河哈尼族彝族自治州","文山壮族苗族自治州","西双版纳傣族自治州"],"西藏":["拉萨","那曲地区","昌都地区","林芝地区","山南地区","日喀则地区","阿里地区"],"海南":["海口","三亚","五指山","琼海","儋州","文昌","万宁","东方","澄迈县","定安县","屯昌县","临高县","白沙黎族自治县","昌江黎族自治县","乐东黎族自治县","陵水黎族自治县","保亭黎族苗族自治县","琼中黎族苗族自治县"],"甘肃":["兰州","嘉峪关","金昌","白银","天水","武威","酒泉","张掖","庆阳","平凉","定西","陇南","临夏回族自治州","甘南藏族自治州"],"宁夏":["银川","石嘴山","吴忠","固原","中卫"],"青海":["西宁","海东地区","海北藏族自治州","海南藏族自治州","黄南藏族自治州","果洛藏族自治州","玉树藏族自治州","海西蒙古族藏族自治州"],"新疆":["乌鲁木齐","克拉玛依","吐鲁番地区","哈密地区","和田地区","阿克苏地区","喀什地区","克孜勒苏柯尔克孜自治州","巴音郭楞蒙古自治州","昌吉回族自治州","博尔塔拉蒙古自治州","石河子","阿拉尔","图木舒克","五家渠","伊犁哈萨克自治州"],"香港":["香港"],"澳门":["澳门"],"台湾":["台北市","高雄市","台北县","桃园县","新竹县","苗栗县","台中县","彰化县","南投县","云林县","嘉义县","台南县","高雄县","屏东县","宜兰县","花莲县","台东县","澎湖县","基隆市","新竹市","台中市","嘉义市","台南市"]};t.default={data:function(){return{year:"1986",yearSlot:[{flex:1,values:["1984","1985","1986","1987","1988","1989","1990","1991","1992","1993","1994","1995"],className:"slot1",defaultIndex:2}],dateSlots:[{flex:1,values:["2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"],className:"slot1",textAlign:"right"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:["2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016"],className:"slot3",textAlign:"left"}],dateStart:"2002",dateEnd:"2002",addressSlots:[{flex:1,values:a()(l),className:"slot1",textAlign:"center"},{divider:!0,content:"-",className:"slot2"},{flex:1,values:["北京"],className:"slot3",textAlign:"center"}],addressProvince:"北京",addressCity:"北京",objSlots:[{flex:1,values:[{key:0,values:"北京"},{key:1,values:"上海"},{key:2,values:"广州"},{key:3,values:"深圳"},{key:4,values:"天津"},{key:5,values:"大连"},{key:6,values:"杭州"},{key:7,values:"南京"},{key:8,values:"包头"}],className:"slot1",textAlign:"center"}],objSelectedKey:0,objSelectedValue:""}},components:{"v-picker":r.a},methods:{onYearChange:function(e,t){this.year=t[0]},onDateChange:function(e,t){t[0]>t[1]&&e.setSlotValue(1,t[0]),this.dateStart=t[0],this.dateEnd=t[1]},onAddressChange:function(e,t){e.setSlotValues(1,l[t[0]]),this.addressProvince=t[0],this.addressCity=t[1]},onObjChange:function(e,t){this.$logger.log("picker-demo.onObjChange: ",t),this.objSelectedKey=t[0].key,this.objSelectedValue=t[0].values}}}},621:function(e,t,n){t=e.exports=n(160)(),t.push([e.i,".page-picker .page-picker-wrapper{background-color:#fff;text-align:center}.page-picker .blank{width:100%;height:2.66667rem}",""])},740:function(e,t,n){var i=n(621);"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);n(161)("1f771e25",i,!0)},901:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page page-picker"},[n("h2",[e._v("v-picker")]),e._v(" "),e._m(0),e._v(" "),n("h2",[e._v("示例")]),e._v(" "),n("ul",{staticClass:"listview listview-form"},[n("li",[n("v-picker",{attrs:{slots:e.yearSlot,"visible-item-count":3},on:{change:e.onYearChange}})],1)]),e._v(" "),n("p",{staticClass:"desc"},[e._v("出生年份: "+e._s(e.year))]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v('\n<ul class="listview listview-form">\n    <li>\n        <v-picker :slots="yearSlot" @change="onYearChange" :visible-item-count="3"></v-picker>\n    </li>\n</ul>\n<p class="desc">出生年份: { { year } }</p>\n        ')])]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v("\nexport default {\n    data() {\n        return {\n            yearSlot: [{\n                flex: 1,\n                values: ['1984', '1985', '1986', '1987', '1988', '1989', '1990', '1991', '1992', '1993', '1994', '1995'],\n                className: 'slot1'\n            }]\n        };\n    },\n    methods: {\n        onYearChange (picker, values) {\n            this.year = values[0];\n        }\n    }\n};\n        ")])]),e._v(" "),n("h2",[e._v("时间区间")]),e._v(" "),n("ul",{staticClass:"listview listview-form"},[n("li",[n("v-picker",{attrs:{slots:e.dateSlots,"visible-item-count":3},on:{change:e.onDateChange}})],1)]),e._v(" "),n("p",{staticClass:"desc"},[e._v("在校时间: "+e._s(e.dateStart)+" 至 "+e._s(e.dateEnd))]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v('\n<ul class="listview listview-form">\n    <li>\n    <v-picker :slots="dateSlots" @change="onDateChange" :visible-item-count="3"></v-picker>\n    </li>\n</ul>\n<p class="desc">在校时间: { { dateStart } } 至 { { dateEnd } }</p>\n        ')])]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v("\nexport default {\n    data() {\n        return {\n            dateSlots: [\n                {\n                    flex: 1,\n                    values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],\n                    className: 'slot1',\n                    textAlign: 'right'\n                }, {\n                    divider: true,\n                    content: '-',\n                    className: 'slot2'\n                }, {\n                    flex: 1,\n                    values: ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],\n                    className: 'slot3',\n                    textAlign: 'left'\n                }\n            ]\n        };\n    },\n    methods: {\n        onDateChange (picker, values) {\n            if (values[0] > values[1]) {\n                picker.setSlotValue(1, values[0]);\n            }\n            this.dateStart = values[0];\n            this.dateEnd = values[1];\n        }\n    }\n};\n        ")])]),e._v(" "),n("h2",[e._v("联动")]),e._v(" "),n("ul",{staticClass:"listview listview-form"},[n("li",[n("v-picker",{attrs:{slots:e.addressSlots,"visible-item-count":5},on:{change:e.onAddressChange}})],1)]),e._v(" "),n("p",{staticClass:"desc"},[e._v("地址: "+e._s(e.addressProvince)+" "+e._s(e.addressCity))]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v('\n<ul class="listview listview-form">\n    <li>\n        <v-picker :slots="addressSlots" @change="onAddressChange" :visible-item-count="5"></v-picker>\n    </li>\n</ul>\n<p class="desc">地址: { { addressProvince } } { { addressCity } }</p>\n        ')])]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v("\nexport default {\n    data() {\n        return {\n            addressSlots: [\n                {\n                    flex: 1,\n                    values: Object.keys(address),\n                    className: 'slot1',\n                    textAlign: 'center'\n                }, {\n                    divider: true,\n                    content: '-',\n                    className: 'slot2'\n                }, {\n                    flex: 1,\n                    values: ['北京'],\n                    className: 'slot3',\n                    textAlign: 'center'\n                }\n            ]\n        };\n    },\n    methods: {\n        onAddressChange (picker, values) {\n            picker.setSlotValues(1, address[values[0]]);\n            this.addressProvince = values[0];\n            this.addressCity = values[1];\n        }\n    }\n};\n        ")])]),e._v(" "),n("ul",{staticClass:"listview listview-form"},[n("li",[n("v-picker",{attrs:{slots:e.objSlots,valueKey:"values","visible-item-count":5},on:{change:e.onObjChange}})],1)]),e._v(" "),n("p",{staticClass:"desc"},[e._v("当前的key： "+e._s(e.objSelectedKey)+" ，当前的value："+e._s(e.objSelectedValue))]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v('\n<ul class="listview listview-form">\n    <li>\n        <v-picker :slots="objSlots" valueKey="values" @change="onObjChange" :visible-item-count="5"></v-picker>\n    </li>\n</ul>\n<p class="desc">当前的key： { { objSelectedKey } } ，当前的value：{ { objSelectedValue } }</p>\n        ')])]),e._v(" "),n("pre",{directives:[{name:"highlightjs",rawName:"v-highlightjs"}],on:{touchend:function(e){e.stopPropagation()}}},[n("code",{staticClass:"html"},[e._v("\nexport default {\n    data() {\n        return {\n            objSlots: [\n                {\n                    flex: 1,\n                    values: [\n                        {key: 0, values: '北京'},\n                        {key: 1, values: '上海'},\n                        {key: 2, values: '广州'},\n                        {key: 3, values: '深圳'},\n                        {key: 4, values: '天津'},\n                        {key: 5, values: '大连'},\n                        {key: 6, values: '杭州'},\n                        {key: 7, values: '南京'},\n                        {key: 8, values: '包头'}\n                    ],\n                    className: 'slot1',\n                    textAlign: 'center'\n                }\n            ],\n            objSelectedKey: 0,\n            objSelectedValue: ''\n        };\n    },\n    methods: {\n        onObjChange (picker, values) {\n            this.$logger.log('picker-demo.onObjChange: ', values);\n            this.objSelectedKey = values[0]['key'];\n            this.objSelectedValue = values[0]['values'];\n        }\n    }\n};\n        ")])]),e._v(" "),n("div",{staticClass:"blank"})])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"attributes"},[n("h2",[e._v("API")]),e._v(" "),n("table",[n("tr",[n("th",[e._v("参数")]),n("th",[e._v("说明")]),n("th",[e._v("类型")]),n("th",[e._v("可选")]),n("th",[e._v("默认")])]),e._v(" "),n("tr",[n("td",[e._v("slots")]),n("td",[e._v("列对象数组"),n("br"),e._v("\n                    [{"),n("br"),e._v("\n                    divider: Boolean, // 列对象是否为分隔符"),n("br"),e._v("\n                    content: '', // 分隔符"),n("br"),e._v("\n                    values: [''], // 如果为[{}],需设定valueKey"),n("br"),e._v("\n                    }]")]),n("td",[e._v("Array")]),n("td",[e._v("-")]),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("valueKey")]),n("td",[e._v("列对象的values如果为对象数组，此为对象的key")]),n("td",[e._v("String")]),n("td",[e._v("-")]),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("td",[e._v("visibleItemCount")]),n("td",[e._v("slot中可见行数")]),n("td",[e._v("Number")]),n("td",[e._v("-")]),n("td",[e._v("-")])]),e._v(" "),n("tr",[n("th",[e._v("slots")]),n("th",{attrs:{colspan:"4"}},[e._v("说明")])]),e._v(" "),n("tr",[n("td",[e._v("-")]),n("td",{attrs:{colspan:"4"}},[e._v("插入顶部工具栏")])]),e._v(" "),n("tr",[n("th",[e._v("events")]),n("th",{attrs:{colspan:"4"}},[e._v("说明")])]),e._v(" "),n("tr",[n("td",[e._v("change")]),n("td",{attrs:{colspan:"4"}},[e._v("返回v-picker对象、选中值数组（多列）"),n("br"),e._v("\n                    picker对象可直接调用以下公开的方法："),n("br"),e._v(" "),n("ul",[n("li",[e._v(".getSlotValue(idx)：获取指定列选中值；")]),e._v(" "),n("li",[e._v(".setSlotValue(idx, val)：设定指定列的值；")]),e._v(" "),n("li",[e._v(".getSlotValues(idx)：获取指定列值数组；")]),e._v(" "),n("li",[e._v(".setSlotValues(idx, vals)：设定指定列值数组；")]),e._v(" "),n("li",[e._v(".getValues()：获取当前选中值（除分隔符）；")]),e._v(" "),n("li",[e._v(".setValues(vals)：设定所有列的值；")])])])])])])}]}}});