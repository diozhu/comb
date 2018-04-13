webpackJsonp([32],{225:function(t,e,i){i(756);var s=i(43)(i(537),i(917),null,null);t.exports=s.exports},246:function(t,e,i){i(251);var s=i(43)(i(249),i(253),null,null);t.exports=s.exports},247:function(t,e,i){"use strict";var s=i(0),n=i.n(s),o=new n.a;e.a=o},249:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(26);e.default={name:"v-feed",props:{id:String,feedId:String,imgUrl:String,msgNum:String,title:String,subtitle:String,sex:String,age:String,desc:String,classes:String,iconFunc:Function},data:function(){return{}},computed:{feedImg:function(){return s.d(this.imgUrl)},feedClass:function(){return/^o_/.test(this.feedId)||/^s_/.test(this.feedId)?"square":/^g_/.test(this.feedId)?"hexagon":"circle"}},created:function(){},methods:{handleClick:function(t){this.iconFunc&&"function"==typeof this.iconFunc&&(t.stopPropagation(),t.preventDefault(),this.iconFunc(),this.$toast({message:"您是不是想去个人中心？",duration:1e3,position:"bottom"}))}}}},250:function(t,e,i){e=t.exports=i(160)(),e.push([t.i,'.v-feed{height:1.81333rem;background:#fff;border-bottom:1px solid #dddee3;position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.v-feed>div{position:relative;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto}.v-feed>div:last-child{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto}.v-feed__img{width:1.44rem;height:1.44rem;margin-left:.26667rem;margin-right:.26667rem;position:relative;border:0}.v-feed__img img{width:100%}.v-feed__img.circle{border-radius:50%;overflow:hidden}.v-feed__img.hexagon{height:1.22667rem;overflow:hidden}.v-feed__img.hexagon:before{left:0;border-right:.32rem solid transparent}.v-feed__img.hexagon:after,.v-feed__img.hexagon:before{content:"";width:0;height:0;position:absolute;top:0;border-top:.61333rem solid #fff;border-bottom:.61333rem solid #fff}.v-feed__img.hexagon:after{right:0;border-left:.32rem solid transparent}.small{height:1.38667rem}.small .v-feed__img{width:.85333rem;height:.85333rem;margin-left:.4rem}.small .v-feed__tit{font-size:.37333rem}.small .v-feed__sub,.v-feed__num{font-size:.32rem}.v-feed__num{width:.48rem;height:.48rem;border-radius:50%;background:#ff3b2f;position:absolute;right:.16rem;top:-.10667rem;color:#fff;line-height:.48rem;text-align:center}.v-feed__num.mix{width:.26667rem;height:.26667rem;color:transparent;right:.21333rem;top:-.05333rem}.v-feed__con{margin-right:.26667rem;-webkit-box-orient:vertical;-webkit-flex-direction:column;flex-direction:column}.v-feed__con,.v-feed__con-info{display:-webkit-box;display:flex;display:-webkit-flex;-webkit-box-direction:normal}.v-feed__con-info{-webkit-box-orient:horizontal;-moz-flex-direction:row;-webkit-flex-direction:row;flex-direction:row;-webkit-box-pack:space-between;-moz-justify-content:space-between;-webkit-justify-content:space-between;justify-content:space-between}.v-feed__con-info>div:last-child{-moz-flex-grow:1;-webkit-flex-grow:1;flex-grow:1;-webkit-box-flex:1;-webkit-flex-shrink:1;flex-shrink:1;-webkit-flex-basis:auto;flex-basis:auto}.v-feed__tit{font-size:.45333rem;line-height:1}.v-feed__sex{width:.32rem;height:.32rem;margin:.02667rem .13333rem;text-align:center;font-size:.32rem;line-height:.32rem;color:#ff88b2;border-radius:.05333rem}.v-feed__sex.icon-male{color:#4392ec}.v-feed__age{font-size:.26667rem;line-height:.45333rem;color:#777e8c}.v-feed__desc{text-align:right;font-size:.32rem;line-height:1;color:#8e8e93}.v-feed__sub{margin-top:.18667rem;font-size:.37333rem;line-height:1;color:#777e8c}',""])},251:function(t,e,i){var s=i(250);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(161)("1e8d48d0",s,!0)},252:function(t,e,i){i(278);var s=i(43)(i(274),null,null,null);t.exports=s.exports},253:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"v-feed",class:[t.classes]},[i("div",{on:{click:t.handleClick}},[i("div",{staticClass:"v-feed__img",class:[t.feedClass]},[i("img",{attrs:{src:t.feedImg}})]),t.msgNum>0?i("i",{staticClass:"v-feed__num",class:[{mix:t.msgNum>9}],domProps:{textContent:t._s(t.msgNum)}}):t._e()]),t._v(" "),i("div",{staticClass:"v-feed__con"},[i("div",{staticClass:"v-feed__con-info"},[i("div",{staticClass:"v-feed__tit",domProps:{textContent:t._s(t.title)}}),t._v(" "),t.sex?i("div",{staticClass:"v-feed__sex icon",class:[{"icon-male":"1"==t.sex},{"icon-female":"2"==t.sex}]}):t._e(),t._v(" "),t.age?i("div",{staticClass:"v-feed__age",domProps:{textContent:t._s(t.age)}}):t._e(),t._v(" "),t.desc?i("div",{staticClass:"v-feed__desc",domProps:{textContent:t._s(t.desc)}}):t._e()]),t._v(" "),i("div",{staticClass:"v-feed__sub",domProps:{textContent:t._s(t.subtitle)}})])])},staticRenderFns:[]}},274:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(44);e.default={name:"v-text",props:{value:String,limit:{type:Number,default:0},expandEnabled:{type:Boolean,default:!1}},data:function(){return{}},created:function(){},methods:{handleClick:function(){var t="limit"+this.limit;i.i(s.d)(this.$el,t)?i.i(s.c)(this.$el,t):i.i(s.b)(this.$el,t)}},render:function(t){var e={attrs:{id:"vText"+this._uid},class:["v-text",1===this.limit?"single":this.limit?"limit"+this.limit:""]};return this.expandEnabled&&(e.on={click:this.handleClick}),t("p",e,this.value)}}},276:function(t,e,i){e=t.exports=i(160)(),e.push([t.i,".v-text{font-size:.4rem;line-height:1.2;text-align:justify}.v-text.single{white-space:nowrap}.v-text.single,.v-text[class*=limit]{overflow:hidden;text-overflow:ellipsis}.v-text[class*=limit]{text-align:left;display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical}.v-text.limit2{-webkit-line-clamp:2}.v-text.limit3{-webkit-line-clamp:3}.v-text.limit4{-webkit-line-clamp:4}.v-text.limit5{-webkit-line-clamp:5}.v-text .re{display:inline-table;font-size:.4rem;line-height:.50667rem;color:#007aff}",""])},278:function(t,e,i){var s=i(276);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(161)("6f94e38c",s,!0)},336:function(t,e,i){t.exports={default:i(337),__esModule:!0}},337:function(t,e,i){i(48),i(339),t.exports=i(1).Array.from},338:function(t,e,i){"use strict";var s=i(5),n=i(18);t.exports=function(t,e,i){e in t?s.f(t,e,n(0,i)):t[e]=i}},339:function(t,e,i){"use strict";var s=i(17),n=i(4),o=i(30),r=i(84),l=i(83),a=i(47),h=i(338),c=i(86);n(n.S+n.F*!i(85)(function(t){Array.from(t)}),"Array",{from:function(t){var e,i,n,d,f=o(t),m="function"==typeof this?this:Array,u=arguments.length,_=u>1?arguments[1]:void 0,p=void 0!==_,v=0,g=c(f);if(p&&(_=s(_,u>2?arguments[2]:void 0,2)),void 0==g||m==Array&&l(g))for(e=a(f.length),i=new m(e);e>v;v++)h(i,v,p?_(f[v],v):f[v]);else for(d=g.call(f),i=new m;!(n=d.next()).done;v++)h(i,v,p?r(d,_,[n.value,v],!0):n.value);return i.length=v,i}})},384:function(t,e,i){!function(e,i){t.exports=i()}(0,function(){var t=function(){function e(t){return n.appendChild(t.dom),t}function i(t){for(var e=0;e<n.children.length;e++)n.children[e].style.display=e===t?"block":"none";s=t}var s=0,n=document.createElement("div");n.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",n.addEventListener("click",function(t){t.preventDefault(),i(++s%n.children.length)},!1);var o=(performance||Date).now(),r=o,l=0,a=e(new t.Panel("FPS","#0ff","#002")),h=e(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=e(new t.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:n,addPanel:e,showPanel:i,begin:function(){o=(performance||Date).now()},end:function(){l++;var t=(performance||Date).now();if(h.update(t-o,200),t>r+1e3&&(a.update(1e3*l/(t-r),100),r=t,l=0,c)){var e=performance.memory;c.update(e.usedJSHeapSize/1048576,e.jsHeapSizeLimit/1048576)}return t},update:function(){o=this.end()},domElement:n,setMode:i}};return t.Panel=function(t,e,i){var s=1/0,n=0,o=Math.round,r=o(window.devicePixelRatio||1),l=80*r,a=48*r,h=3*r,c=2*r,d=3*r,f=15*r,m=74*r,u=30*r,_=document.createElement("canvas");_.width=l,_.height=a,_.style.cssText="width:"+l+"px;height:"+a+"px";var p=_.getContext("2d");return p.font="bold "+9*r+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=i,p.fillRect(0,0,l,a),p.fillStyle=e,p.fillText(t,h,c),p.fillRect(d,f,m,u),p.fillStyle=i,p.globalAlpha=.9,p.fillRect(d,f,m,u),{dom:_,update:function(a,v){s=Math.min(s,a),n=Math.max(n,a),p.fillStyle=i,p.globalAlpha=1,p.fillRect(0,0,l,f),p.fillStyle=e,p.fillText(o(a)+" "+t+" ("+o(s)+"-"+o(n)+")",h,c),p.drawImage(_,d+r,f,m-r,u,d,f,m-r,u),p.fillRect(d+m-r,f,r,u),p.fillStyle=i,p.globalAlpha=.9,p.fillRect(d+m-r,f,r,o((1-a/v)*u))}}},t})},390:function(t,e,i){"use strict";function s(t){if(!t)return l;if(h.test(t.type)){var e=t.touches[0];return{x:e.clientX,y:e.clientY}}return a.test(t.type)?{x:t.clientX,y:t.clientY}:l}function n(t,e){for(var i in e)if(e[i].test(t[i]))return!0;return!1}function o(t,e){if(null==t)throw new TypeError("Cannot convert undefined or null to object");for(var i=Object(t),s=1;s<arguments.length;s++){var n=arguments[s];if(n)for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(i[o]=n[o])}return i}function r(t,e){for(var i=0,s=t.length;i<s;i++)if(e(t[i],i))return t[i]}e.b=s,i.d(e,"d",function(){return c}),e.c=n,e.a=o,e.e=r;var l={x:0,y:0},a=/mouse(down|move|up)/,h=/touch(start|move|end)/,c=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}},434:function(t,e,i){"use strict";var s=i(45),n=i.n(s),o=i(558),r=i.n(o),l=i(559),a=i.n(l),h=i(390),c=function(){function t(e,s){var o=this;r()(this,t),this.itemRender=s.item,this.TombstoneRender=s.tombstone,this.fetch=s.fetch,this.Vue=e,this.options=s,this.itemCache={data:{},length:0,get:function(t){return this.data[t]},set:function(t,e){this.length++,this.data[t]=e,this.length>s.cacheVM&&s.cacheVM>50&&this.recycle(10,t)},recycle:function(t,e){for(var i=void 0,s=n()(this.data),o=s.length;t;)t--,i=s[Math.floor(Math.random()*o)],this.data[i]&&this.length--&&this.data[i].$destroy(),this.data[i]=null}},this.reuseVM={queue:[],generate:function(t,e){var s=i.i(h.e)(o.reuseVM.queue,function(t){return!t.inuse});if(s)s.vm.data=t,s.inuse=!0,s.id=t.id;else{var r={props:{data:t}};o.options.props.data=t,o.options.props&&n()(o.options.props).map(function(t){r.props[t]=o.options.props[t]});var l={el:e,data:r.props,render:function(t){return t(o.itemRender,r)}};s={id:t.id,inuse:!0,vm:new o.Vue(l)},o.reuseVM.queue.push(s)}return s.vm},free:function(t){i.i(h.e)(this.queue,function(e){return e.id===t}).inuse=!1},destroy:function(t,e){for(var i=0,s=this.queue.length;i<s;i++)(this.queue[i].id===t||e)&&(this.queue.vm&&this.queue.vm.$destroy(),this.queue.splice(i,1))}}}return a()(t,[{key:"createTombstone",value:function(t){var e=this;return new this.Vue({el:t,render:function(t){return t(e.TombstoneRender)}}).$el}},{key:"free",value:function(t){this.reuseVM.free(t.id)}},{key:"render",value:function(t,e,i){var s=this;if(this.options.reuseVM){var o=this.reuseVM.generate(t,e);return i.vm=o,o.$el}var r=void 0,l={props:{data:t}};this.options.props.data=t,this.options.props&&n()(this.options.props).map(function(t){l.props[t]=s.options.props[t]});var a={el:e,render:function(t){return t(s.itemRender,l)}};return this.options.cacheVM?(r=this.itemCache.get(t.id))?(i.vm=r,r.$el):(r=new this.Vue(a),this.itemCache.set(t.id,r),i.vm=r,r.$el):(r=new this.Vue(a),i.vm=r,r.$el)}},{key:"destroy",value:function(){return this.reuseVM.destroy(null,!0),this.reuseVM.queue}}]),t}();e.a=c},436:function(t,e,i){"use strict";function s(t,e,i){this.RUNWAY_ITEMS=i.prerender,this.RUNWAY_ITEMS_OPPOSITE=i.remain,this.SCROLL_RUNWAY=i.SCROLL_RUNWAY||o,this.ANIMATION_DURATION_MS=i.animation_duration_ms,this.TOMBSTONE_CLASS=i.tombstone_class,this.INVISIBLE_CLASS=i.invisible_class,this.MAX_COUNT=n,this.column=i.column||1,this.waterflow=i.waterflow,this.anchorItem={index:0,offset:0},this.timer=null,this.firstAttachedItem_=0,this.lastAttachedItem_=0,this.anchorScrollTop=0,this.tombstoneSize_=0,this.tombstoneWidth_=0,this.tombstones_=[],this.scroller_=t,this.source_=e,this.items_=i.list||[],this.loadedItems_=0,this.requestInProgress_=!1,this.cacheVM=i.cacheVM,this.options=i,this.source_.fetch||this.setItems(i.list),this.curPos=0,this.unusedNodes=[],this.baseNode=document.createElement("div"),this.scroller_.addEventListener("scroll",this.onScroll_.bind(this)),window.addEventListener("resize",this.onResize_.bind(this)),window.addEventListener("orientationchange",this.onResize_.bind(this)),this.initPosList(),this.onResize_()}e.a=s;var n=(i(390),1/0),o=2e3;s.prototype={onResize_:function(){var t=this.source_.createTombstone(this.baseNode.cloneNode(!0));t.style.position="absolute",this.scroller_.appendChild(t),t.classList.remove(this.INVISIBLE_CLASS),this.tombstoneSize_=t.offsetHeight/this.column,this.tombstoneWidth_=t.offsetWidth,this.scroller_.removeChild(t);for(var e=0;e<this.items_.length;e++)this.items_[e].top=-1,this.items_[e].height=this.items_[e].width=this.items_[e].cacheHeightCount=0;this.onScroll_()},onScroll_:function(){var t=this.scroller_.scrollTop-this.anchorScrollTop;0==this.scroller_.scrollTop?this.anchorItem={index:0,offset:0}:this.anchorItem=this.calculateAnchoredItem(this.anchorItem,t),this.anchorScrollTop=this.scroller_.scrollTop;var e=this.calculateAnchoredItem(this.anchorItem,this.scroller_.offsetHeight);t<0?this.fill(this.anchorItem.index-this.RUNWAY_ITEMS,e.index+this.RUNWAY_ITEMS_OPPOSITE):this.fill(this.anchorItem.index-this.RUNWAY_ITEMS_OPPOSITE,e.index+this.RUNWAY_ITEMS)},calculateAnchoredItem:function(t,e){if(0===e)return t;e+=t.offset;var i=t.index,s=0;if(e<0){for(;e<0&&i>0&&this.items_[i-1].height;)e+=this.items_[i-1].height,i--;s=Math.max(-i,Math.ceil(Math.min(e,0)/this.tombstoneSize_))}else{for(;e>0&&i<this.items_.length&&this.items_[i].height&&this.items_[i].height<e;)e-=this.items_[i].height,i++;(i>=this.items_.length||!this.items_[i].height)&&(s=Math.floor(Math.max(e,0)/this.tombstoneSize_))}return i+=s,e-=s*this.tombstoneSize_,i=Math.min(i,this.MAX_COUNT-1),{index:Math.floor(i/this.column)*this.column,offset:e}},fill:function(t,e){this.firstAttachedItem_=Math.max(0,t),this.lastAttachedItem_=e,this.attachContent()},getTombstone:function(){var t=this.tombstones_.pop();return t?(t.classList.remove(this.INVISIBLE_CLASS),t.style.opacity=1,t.style.transform="",t.style.transition="",t):this.source_.createTombstone(this.baseNode.cloneNode(!0))},layoutInView:function(t){var e=this.posList.get(Math.floor(t/this.column),t%this.column);if(!e)return!0;var i=e-this.anchorScrollTop;return i>.5*-window.innerHeight&&i<window.innerHeight},getUnUsedNodes:function(t){if(this.waterflow)for(var e=0,i=this.items_.length;e<i;e++)!this.items_[e].node||!t&&this.layoutInView(e)||(this.items_[e].vm?this.clearItem(this.items_[e]):this.clearTombstone(this.items_[e]),this.items_[e].vm=null,this.items_[e].node=null);else for(var s=0,n=this.items_.length;s<n;s++)s!==this.firstAttachedItem_?(this.items_[s].vm?this.clearItem(this.items_[s]):this.clearTombstone(this.items_[s]),this.items_[s].vm=null,this.items_[s].node=null):s=this.lastAttachedItem_-1},clearItem:function(t){if(this.options.reuseVM)this.scroller_.removeChild(t.node),this.source_.free(t.data);else{if(this.cacheVM&&t.node)return this.scroller_.removeChild(t.node);t.vm.$destroy(),t.node&&this.unusedNodes.push(t.node)}},clearTombstone:function(t){t.node&&(t.node.classList.contains(this.TOMBSTONE_CLASS)?(this.tombstones_.push(t.node),this.tombstones_[this.tombstones_.length-1].classList.add(this.INVISIBLE_CLASS)):this.unusedNodes.push(t.node))},clearUnUsedNodes:function(){for(;this.unusedNodes.length;)this.scroller_.removeChild(this.unusedNodes.pop())},getNodePosition:function(){this.anchorScrollTop=0;for(var t=0;t<this.anchorItem.index;t++)this.anchorScrollTop+=this.items_[t].height||this.tombstoneSize_;this.anchorScrollTop+=this.anchorItem.offset,this.curPos=this.anchorScrollTop-this.anchorItem.offset;for(var e=this.anchorItem.index;e>this.firstAttachedItem_;)this.curPos-=this.items_[e-1].height||this.tombstoneSize_,e--;for(;e<this.firstAttachedItem_;)this.curPos+=this.items_[e].height||this.tombstoneSize_,e++},initPosList:function(){for(var t={},e=0,i=this.column;e<i;e++)t[e]=this.curPos;this.posList={data:{0:t},get:function(t,e){if(!this.data[t]){for(var i={},s=0,n=this.column;s<n;s++)i[s]=this.curPos;this.data[t]=i}return void 0===e?this.data[t]:this.data[t][e]},set:function(t,e,i){this.get(t)[e]=i}}},tombstoneLayout:function(t){var e=void 0,i=void 0,s=void 0;for(e in t)i=t[e],s=e%this.column*this.items_[e].width,this.items_[e].node.style.webkitTransform=this.items_[e].node.style.transform="translate3d("+s+"px,"+(this.anchorScrollTop+i[1])*this.column+"px, 0) scale("+this.tombstoneWidth_/this.items_[e].width+", "+this.tombstoneSize_/this.items_[e].height+")",this.items_[e].node.offsetTop,i[0].offsetTop,this.items_[e].node.style.webkitTransition=this.items_[e].node.style.transition="transform "+this.ANIMATION_DURATION_MS+"ms"},itemLayout:function(t){var e=void 0,i=void 0,s=0,n=0,o=0;for(e=this.firstAttachedItem_;e<this.lastAttachedItem_;e++)i=t[e],this.waterflow&&(o=Math.floor(e/this.column)),s=e%this.column*(this.items_[e].width||this.tombstoneWidth_),n=this.waterflow?this.posList.get(o,e%this.column):this.curPos,i&&(i[0].style.webkitTransition=i[0].style.transition="transform "+this.ANIMATION_DURATION_MS+"ms, opacity "+this.ANIMATION_DURATION_MS+"ms",i[0].style.webkitTransform=i[0].style.transform="translate3d("+s+"px,"+n+"px, 0) scale("+this.items_[e].width/this.tombstoneWidth_+", "+this.items_[e].height/this.tombstoneSize_+")",i[0].style.opacity=0),this.items_[e].node&&this.curPos!==this.items_[e].top&&(i||(this.items_[e].node.style.transition=""),this.items_[e].node.style.webkitTransform=this.items_[e].node.style.transform="translate3d("+s+"px,"+n+"px, 0)"),this.items_[e].top=n,(e+1)%this.column==0&&(this.curPos+=(this.items_[e].height||this.tombstoneSize_)*this.column),this.waterflow&&this.posList.set(o+1,e%this.column,n+(this.items_[e].height||this.tombstoneSize_)*this.column)},setAnimatePosition:function(t){this.tombstoneLayout(t),this.itemLayout(t)},renderItems:function(){var t={},e=void 0,i=[],s=void 0,n=Math.floor((this.lastAttachedItem_+this.RUNWAY_ITEMS)/this.column)*this.column;for(n>this.MAX_COUNT&&(this.lastAttachedItem_=this.MAX_COUNT),s=this.firstAttachedItem_;s<this.lastAttachedItem_;s++){for(;this.items_.length<=s;)this.addItem_();if(this.items_[s].node){if(!this.items_[s].node.classList.contains(this.TOMBSTONE_CLASS)||!this.items_[s].data)continue;this.ANIMATION_DURATION_MS?(this.items_[s].node.style.zIndex=1,t[s]=[this.items_[s].node,this.items_[s].top-this.anchorScrollTop]):(this.items_[s].node.classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(this.items_[s].node)),this.items_[s].node=null}this.waterflow?this.layoutInView(s)&&(e=this.items_[s].data?this.source_.render(this.items_[s].data,this.unusedNodes.pop()||this.baseNode.cloneNode(!0),this.items_[s]):this.getTombstone(),e.style.position="absolute",this.items_[s].top=-1,this.items_[s].node=e,i.push(e)):(e=this.items_[s].data?this.source_.render(this.items_[s].data,this.unusedNodes.pop()||this.baseNode.cloneNode(!0),this.items_[s]):this.getTombstone(),e.style.position="absolute",this.items_[s].top=-1,this.items_[s].node=e,i.push(e))}var o=i.length;for(s=0;s<o;s++)this.scroller_.appendChild(i[s]);return t},cacheItemHeight:function(t){for(var e=this.firstAttachedItem_;e<this.lastAttachedItem_;e++)this.items_[e].data&&this.items_[e].node&&(t||!this.items_[e].height)?(this.items_[e].height=this.items_[e].node.offsetHeight/this.column,this.items_[e].width=this.items_[e].node.offsetWidth,this.items_[e].cacheHeightCount=0):this.items_[e].cacheHeightCount<10&&(this.items_[e].cacheHeightCount++,this.items_[e].height&&this.items_[e].node&&this.items_[e].height!==this.items_[e].node.offsetHeight/this.column&&(this.items_[e].height=this.items_[e].node.offsetHeight/this.column))},attachContent:function(){var t=this;this.getUnUsedNodes();var e=this.renderItems();this.clearUnUsedNodes(),this.cacheItemHeight(),this.getNodePosition(),this.setAnimatePosition(e),this.ANIMATION_DURATION_MS&&setTimeout(function(){t.tombstoneAnimation(e)},this.ANIMATION_DURATION_MS),this.maybeRequestContent()},setItems:function(t){t=t||[],this.items_=t,this.MAX_COUNT=t.length},scrollToIndex:function(t){var e=this.lastAttachedItem_-this.firstAttachedItem_;this.fill(t-e,t+1)},setScrollRunway:function(){console.warn("alert: SCROLL_RUNWAY: ",this.SCROLL_RUNWAY),this.scrollRunwayEnd_=Math.max(this.scrollRunwayEnd_,this.curPos+this.SCROLL_RUNWAY),this.scrollRunway_.style.transform="translate(0, "+this.scrollRunwayEnd_+"px)",this.scroller_.scrollTop=this.anchorScrollTop},tombstoneAnimation:function(t){var e=void 0;for(var i in t)e=t[i],e[0].classList.add(this.INVISIBLE_CLASS),this.tombstones_.push(e[0]);t=null},maybeRequestContent:function(){var t=this;if(!this.requestInProgress_){var e=this.lastAttachedItem_-this.loadedItems_;if(!(e<=0)&&(this.requestInProgress_=!0,this.source_.fetch)){var i=this.loadedItems_?this.loadedItems_:0,s=e+i;this.source_.fetch({limit:s,offset:i}).then(function(e){t.addContent(e)})}}},addItem_:function(){this.items_.push({vm:null,data:null,node:null,height:0,width:0,top:0})},addContent:function(t){if(t.length){this.requestInProgress_=!1;for(var e=void 0,i=0;i<t.length;i++)this.items_.length<=this.loadedItems_&&this.addItem_(),this.loadedItems_<=this.MAX_COUNT&&(e=this.loadedItems_++,this.items_[e].data=t[i]);this.attachContent()}},clear:function(){this.loadedItems_=0,this.requestInProgress_=!1,this.firstAttachedItem_=-1,this.lastAttachedItem_=-1,this.getUnUsedNodes(!0),this.clearUnUsedNodes(),this.items_=[],this.onResize_()},destroy:function(){this.scroller_.removeEventListener("scroll",this.onScroll_),window.removeEventListener("resize",this.onResize_),window.removeEventListener("orientationchange",this.onResize_),this.clear()}}},443:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(246),n=i.n(s),o=i(252),r=i.n(o);e.default={components:{vFeed:n.a,vText:r.a},props:{data:Object},methods:{add:function(t){t.preventDefault(),this.$logger.log(this.data.name+=" 233")}}}},461:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(0),n=i.n(s),o=i(436),r=i(434),l=i(390),a=i(247),h={render:function(t){return t("div",{attrs:{class:"v-scroll-infinite__loading"}},"Loading...")}},c={render:function(t){return t("div",{attrs:{class:"v-scroll-infinite__item tombstone"},style:{height:"100px",width:"100%"}},"")}},d={preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|IMG)$/},distance:50,animation_duration_ms:200,tombstone_class:"tombstone",invisible_class:"invisible",prerender:20,remain:10,preventDefault:!1,column:1,waterflow:!1,cacheVM:0,reuseVM:!1,props:{}};e.default={name:"v-scroll-infinite",props:{fetch:Function,list:Array,item:Object,loading:Object,tombstone:{type:Object,default:function(){return c}},column:Number,prerender:Number,remain:Number,waterflow:Boolean,preventDefault:Boolean,options:Object,tag:{type:String,default:"div"}},render:function(t){return t(this.tag,{attrs:{class:"v-scroll-infinite"}},[t(this.loading||h),t(this.tag,{ref:"recyclerview",attrs:{class:"v-scroll-infinite__container"},on:{touchstart:this._start,touchmove:this._move,touchend:this._end,touchcancel:this._end,mousedown:this._start,mousemove:this._move,mouseup:this._end}})])},data:function(){return{startPointer:{x:0,y:0},_options:{},distance:0,pulling:!1,_contentSource:null,scroller:null}},created:function(){a.a.$on("v-scroll-infinite.init",this.init)},mounted:function(){this.$logger.log("v-scroll-infinite.mounted: "),this.init()},beforeDestroy:function(){this.scroller.destroy(),this.scroller=null},methods:{init:function(){this.$logger.log("v-scroll-infinite."+this._uid+".init ... "),this._options=i.i(l.a)({},d,{prerender:this.prerender||d.prerender,remain:this.remain||d.remain,column:this.column||d.column,waterflow:this.waterflow||d.waterflow,fetch:this.fetch,list:this.list,item:this.item,loading:this.loading,tombstone:this.tombstone},this.options),this._contentSource=new r.a(n.a,this._options),this.$list=this.$refs.recyclerview,this.scroller=new o.a(this.$list,this._contentSource,this._options),this.$emit("inited")},scrollToIndex:function(t){var e=this;if(this.waterflow)for(var i=0,s=this.scroller.items_.length;i<s;i++)i===t&&this._scrollTo(this.scroller.items_[i].top-this.scroller.items_[i].height*this._options.column+this.$list.offsetWidth);else t=Number(t),this.scroller.scrollToIndex(t),this.$nextTick(function(){e._scrollToBottom()})},_scrollTo:function(t){t=t||0,this.$list.scrollTop=Number(t)},_scrollToBottom:function(){this._scrollTo(this.$list.scrollHeight)},_renderListStyle:function(){this.$list.style.transform="translate3d(0, "+this.distance+"px, 0)"},_start:function(t){this.$list.scrollTop>0||(this.pulling=!0,this.startPointer=i.i(l.b)(t),this.$list.style.transition="transform .2s",this.preventDefault&&!i.i(l.c)(t.target,this._options.preventDefaultException)&&t.preventDefault())},_move:function(t){if(this.pulling){var e=i.i(l.b)(t),s=e.y-this.startPointer.y;if(s<0)return void this._scrollTo(-s);this.preventDefault&&!i.i(l.c)(t.target,this._options.preventDefaultException)&&t.preventDefault(),this.distance=Math.floor(.5*s),this.distance>this._options.distance&&(this.distance=this._options.distance),i.i(l.d)(this._renderListStyle.bind(this))}},_end:function(t){var e=this;this.pulling&&(this.preventDefault&&!i.i(l.c)(t.target,this._options.preventDefaultException)&&t.preventDefault(),this.pulling=!1,this.$list.style.transition="transform .3s",this.$nextTick(function(){e.$list.style.transform=""}),this.distance>=this._options.distance&&(this.distance=0,this.scroller.clear()))}}}},537:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(76),n=i.n(s),o=i(336),r=i.n(o),l=i(252),a=i.n(l),h=i(246),c=i.n(h),d=i(832),f=i.n(d),m=i(817),u=i.n(m),_=i(818),p=i.n(_),v=i(27),g=i(77),b=i(384),x=i.n(b);e.default={components:{vText:a.a,vFeed:c.a,vScrollInfinite:f.a},data:function(){return{pScrollInfiniteItem:u.a,pScrollInfiniteTomstone:p.a,flashTag:!0,listData:[]}},computed:{},created:function(){this.$logger.log("scroll-infinite.created... ")},mounted:function(){this.$logger.log("scroll-infinite.mounted... ")},activated:function(){this.$logger.log("scroll-infinite.activated... ",this.$router.direct())},methods:{init:function(){this.$logger.log("scroll-infinite."+this._uid+".init: ")},initStatsPlugins:function(){if(window.requestIdleCallback){var t=this,e=new x.a,i=new x.a.Panel("Dom","#0ff","#002");e.addPanel(i),e.showPanel(3),document.body.appendChild(e.dom),setTimeout(function e(){requestIdleCallback(function(){i.update(t.numDomNodes(document.body),1500),setTimeout(e,100)})},100)}},numDomNodes:function(t){if(!t.children||0===t.children.length)return 0;var e=r()(t.children).map(this.numDomNodes);return t.children.length+e.reduce(function(t,e){return t+e},0)},getList:function(t){var e=t.offset,i=void 0===e?0:e,s=t.limit,o=void 0===s?v.a.LIMIT:s;return g.j({offset:i,limit:o}).then(function(t){return n.a.resolve(t)})},goDetail:function(t){this.$logger.log("scroll-infinite.methods.goDetail: ",t.title)}}}},558:function(t,e,i){"use strict";e.__esModule=!0,e.default=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},559:function(t,e,i){"use strict";e.__esModule=!0;var s=i(87),n=function(t){return t&&t.__esModule?t:{default:t}}(s);e.default=function(){function t(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),(0,n.default)(t,s.key,s)}}return function(e,i,s){return i&&t(e.prototype,i),s&&t(e,s),e}}()},583:function(t,e,i){e=t.exports=i(160)(),e.push([t.i,".v-scroll-infinite{position:relative;height:100%}.v-scroll-infinite .v-scroll-infinite__loading{position:absolute;top:0;left:0;width:100%;text-align:center;padding:10px;font-size:14px;color:#9e9e9e}.v-scroll-infinite .v-scroll-infinite__container{background:#fff;margin:0;padding:0;overflow-x:hidden;overflow-y:scroll;-webkit-overflow-scrolling:touch;width:100%;height:100%;position:absolute;box-sizing:border-box;contain:layout;will-change:transform}.v-scroll-infinite .v-scroll-infinite__container .invisible{display:none}",""])},592:function(t,e,i){e=t.exports=i(160)(),e.push([t.i,'.p-infinite-item{padding:0 0 3px;position:absolute;background:#fff;width:100%;list-style:none}.p-infinite-item:after{content:"";position:absolute;bottom:1.5px;left:150px;right:0;border-bottom:1px solid #e4e4e4}.p-infinite-item .version-item{width:100%}.p-infinite-item .version-item .version-item-img{width:1.6rem;height:1.6rem;position:relative}.p-infinite-item .version-item .version-item-img img{width:100%}.p-infinite-item .version-item .version-item-intro{-webkit-box-flex:1;box-flex:1;display:block;padding:0 15px 5px}.p-infinite-item .version-item .version-item-intro span{color:#ff6000}.p-infinite-item .version-item .version-item-intro .version-item-name{font-size:14px;color:rgba(0,0,0,.87);margin-bottom:8px}.p-infinite-item .version-item .version-item-intro .version-item-brief{font-size:12px;color:rgba(0,0,0,.54);margin-bottom:8px;line-height:15px;overflow:hidden}.p-infinite-item .version-item .version-item-intro .version-item-brief p{text-overflow:ellipsis;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-all}.p-infinite-item .version-item .version-item-intro .version-item-intro-price{font-size:15px;position:relative;margin-left:10px}',""])},637:function(t,e,i){e=t.exports=i(160)(),e.push([t.i,"",""])},655:function(t,e,i){e=t.exports=i(160)(),e.push([t.i,".p-infinite-item.tombstone p{width:100%;height:.5em;background-color:#ccc;margin:.5em 0}",""])},702:function(t,e,i){var s=i(583);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(161)("784f941e",s,!0)},711:function(t,e,i){var s=i(592);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(161)("326d88c7",s,!0)},756:function(t,e,i){var s=i(637);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(161)("70abc994",s,!0)},774:function(t,e,i){var s=i(655);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i(161)("91ff77e8",s,!0)},817:function(t,e,i){i(711);var s=i(43)(i(443),i(872),null,null);t.exports=s.exports},818:function(t,e,i){i(774);var s=i(43)(null,i(936),null,null);t.exports=s.exports},832:function(t,e,i){i(702);var s=i(43)(i(461),null,null,null);t.exports=s.exports},872:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"p-infinite-item",on:{click:t.add}},[i("a",{staticClass:"version-item"},[i("v-feed",{attrs:{feedId:t.data.userInfo.feedId,imgUrl:t.data.userInfo.avatar,title:t.data.userInfo.title,subtitle:t.data.userInfo.subtitle,classes:"title small no-border"}}),t._v(" "),i("v-text",{attrs:{classes:"content",value:t.data.title}})],1)])},staticRenderFns:[]}},917:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page page-scroll-infinite"},[i("v-scroll-infinite",{attrs:{prerender:10,fetch:t.getList,item:t.pScrollInfiniteItem,tombstone:t.pScrollInfiniteTomstone}})],1)},staticRenderFns:[]}},936:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"p-infinite-item tombstone"},[i("a",{staticClass:"version-item"},[i("div",{staticClass:"version-item-img"},[i("img",{staticClass:"lazy",attrs:{src:"http://static1.systoon.com/share/img/185x185.png"}})]),t._v(" "),i("div",{staticClass:"version-item-intro"},[i("div",{staticClass:"version-item-name"},[i("p")]),t._v(" "),i("div",{staticClass:"version-item-brief"},[i("p")])])])])}]}}});