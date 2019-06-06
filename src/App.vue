<template>
    <div ref="container" id='container' class="app v-touch"
         :style="loadingStyles"
         v-swipe="swipe"
         swipe-direction="right"
         swipe-distance="300"
    >
        <!--<router-link class="page-back" :to="'/'">-->
            <!--<div class="banner">-->
                <!--<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAABUCAMAAAArteDzAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAByUExURUxpcf94U/93Tv9vSP9vSP9vSP+Sbf+CVf9vSf9vS/9vSP9yTv9vSP9vSP9vSP9zSv9xSf9vSP9vSP9wSf9vSP9wSf9wSv9vSP9vSP91Sv9wSP9vSP9vSP9xSv9vSP9wSf9vSP9wSf9vSP9vSv9wSv9vSJlteWgAAAAldFJOUwAKD/j80QIGeUDGF+ji8yMz24BPu2Ir7bAda5KgOolZqHWaSD0A4EBrAAACIUlEQVR42u2Z3XaCMBCEAYGAaEXxDwVUlPd/xbbH0OU0hGGBNjfkCiN+xjEMO4vVeySJNfU47qtqf5wU6Vzd6mu4V2cypH85VXKcLv40zNCrGsMLJ0BuzpK23cqD82asmMXiTfoIhAg+3seLYpS0h5VcXRZ9v4wy+XJ1GIzMl5KxjOup+GcqH4RM7/Lz61tz+raW0/eUjbR3tYA7+/c7tcz0Dh7qevBvwIOU817tJ7w8RW0wotKt/2Nfe5HV+8Itox5I8ZBiuoXTvYNdKe1DIOZTvW7wtfZEBifFlOeBFdTS7o/A4BQvQv4lTRGcQNpj54/KroWE9FN4zk+ShVrRE77zJ+1/riCDG+L8ZIqiOUsGN8T5yRQVqBePcf7Ya4UG45w/QFDs/Bwo3/kxlO/8GMp3fgxlO//W50Bf/Zx/x1pp2Mv51zYfWiLnv1l8aIic3/oDqDVDZ+gMnaEzdAqoU0RcKN2i9Depkg2lCk9bCboxC7qh235XbF2yoJZQCpTWEsVn1lJpRqVUe2zNUp6matEHyj4A1ZanoECFUJKvaCaMRilt8za/PgspyQZAKUigcEKbFwcJkk4XoyhIociDwxkFPop8OJzhGEkBlMIpjpEkXecntd9HYrOzuxCwRzB9E+Ff2h1YdHBd4BaSEmtBE/QhTDS7+G05Iw1EfuA125SlkZNyqtq5sUY33o1gBxt+eICbXeYfyOAGovmHXOMfx30CPRTVXNdLE+8AAAAASUVORK5CYII=">-->
                <!--<p>蜂巢（Comb）</p>-->
            <!--</div>-->
        <!--</router-link>-->
        <transition
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            @after-leave="afterLeave"
            :css="false"
        >
            <keep-alive>
                <router-view ref="page" v-if="$route.meta.keepAlive" v-scroll-position></router-view>
            </keep-alive>
        </transition>
        <transition
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            @after-leave="afterLeave"
            :css="false"
        >
            <router-view v-if="!$route.meta.keepAlive" v-scroll-position></router-view>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
    /**
     * 此文件用于generator-comb脚手架，创建新项目时，去除Comb项目的浮动评论赞组件（p-float-comments），以及代码高亮组件的样式（highlight）
     * 在此实现实乃无奈，按理说组件库项目和示例项目应分开，脚手架直接取组件库项目即可，目前组件库掺杂了很多案例，造成代码高度耦合。。。
     * TODO：解耦组件、案例，梳理脚手架逻辑
     *              -- Author by Dio Zhu. on 2017.6.21
     */

    import Vue from 'vue';
    // import * as utils from './js/utils/utils';
    // require('../static/js/vendor/velocity.min'); // get velocity.min
    import Velocity from 'velocity-animate'; // 使用npm包。。。
    import { Swipe, ScrollPosition } from 'comb-ui'; // 滑动手势
    import { mapState } from 'vuex';

    Vue.use(Swipe); // 滑动手势
    Vue.use(ScrollPosition); // 滚动条位置信息

    export default {
        // mixins: [ mWechatApi ], // 混入微信jssdk注册
        components: {},

        data () {
            return {
//                loadingShow: 1,      // index.html的菊花loading
                loadingStyles: {}, // 翻页时背景模糊。 add by Dio Zhu. on 2018.9.13
                trans: 'fade'
            };
        },
        computed: {
            ...mapState({
                loading: state => state.status.loading
            })
        },

        watch: {
            loading (val) { // 路由跳转，菊花的显示隐藏。 mod by Dio Zhu. on 2018.9.13
                if (this.loadingObj && val) {
                    this.loadingObj.style.display = 'block';
                    this.loadingStyles = { filter: 'blur(5px)' };
                } else if (this.loadingObj && !val) {
                    setTimeout(() => {
                        this.loadingObj.style.display = 'none';
                        this.loadingStyles = {};
                    }, 100);
                }
            },
            '$route.fullPath' (to, from) {
                // 根据router.beforeEach中计算的direction判断路由跳转状态，以此显示动画. mod by Dio Zhu. on 2018.7.31
                if (this.$router.direction > 0) this.trans = 'slide-left'; // in
                else if (this.$router.direction < 0) this.trans = 'slide-right'; // back
                else this.trans = 'fade'; // refresh
                // console.log(`APP.${this._uid}.watch: $route!!!`, this.$router.direction, this.trans, this.$route);
            }
        },

        created () {
            // console.log('App.created... ');
        },

        mounted () {
            // console.log('APP mounted... ');
            this.loadingObj = document.getElementById('loading-wrapper');
        },
//
//        activated () {
//            console.log('APP activated... ');
//        },
//        deactivated () {
//            console.log('APP deactivated... ');
//        },

        methods: {
            /**
             * 右划回退：
             *  如果上级是原生，调协议进行回退操作；
             *  如果是普通h5，用使用js方式；
             *
             */
            swipe (e) {
                console.log('>>>>>>>>>>>>>>>>>>>> APP.swipe');
//                if (this.$route.name === 'upload-viewer' || this.$route.name === 'viewImage') {
//                console.log('(/.viewer/ig).test(this.$route.name): ', (/.viewer/ig).test(this.$route.name));
//                if (!this.$route.query.timestamp) { // 本地路由为了保存滚动位置都加了时间戳，如果没有，说明是首页~
                if (!window.history || !window.history.state) { // 如果首页，调协议关闭webview~
                    // console.log('<== swipe right! back ...');
                } else if ((this.$route.name && this.$route.name.toLocaleLowerCase() === 'viewer') || this.$route.name === 'cell') {
                    console.log('<== swipe right, do nothing ...');
                    // 图片预览页调用了swiper，冒泡居然反了。。。这里暂时根据路由判断
                } else {
                    console.log('<== swipe right! go back ...');
                    this.$router.go(-1);
                }
            },
            onTransitionEnd (e) {
                console.log(`!!!!!!!!![APP.transition].onTransitionEnd!`, e);
            },
            /**
             * 手动transition动画
             * 默认的动画会影响keep-alive的scrollBehavior计算，原因在于计算时动画渲染还未完成，获取不到scroll，所以window.scrollTo无法完成
             *              -- Author by Dio Zhu. on 2017.3.6
             * 取消了scrollBehavior方式，使用v-scroll-position指令方式，在动画结束时，手动触发指令挂载（inserted）钩子
             *              -- Author by Dio Zhu. on 2017.5.19
             * 修改了翻页动画，都以slid方式转换，分进入、回退、刷新三种状态；
             * 同时修改了router.js，添加direction属性，在路由进入前进行赋值，用于区分当前路由的三种状态：进入(1)、回退(-1)、刷新(0)；
             * 修改动画钩子函数，leave时不能用上页进行动画，会扰乱vue释放规则，且无法保留滚动容器位置；
             * 现方式是cloneNode重新绘制一个dom用于动画展示，动画完后异步remove；
             *              -- Author by Dio Zhu. on 2018.8.1
             */
            enter (el, done) {
                // console.log(`[APP.transition].enter: ${this.$route.name}`, el.className, this.trans);
                let flt = 0, w = window.document.body.clientWidth * 0.6; // 首页，渐进
                if (this.trans === 'slide-left') flt = w; // 进入
                else if (this.trans === 'slide-right') flt = -w; // 回退
                // 在这里处理滚动位置，如果放在before会出现绑定与挂载顺序问题，放在after会出现闪动。。。
                // console.log(`[APP.transition].enter: starting recompute the scroll position...`);
                // if (this.$router.direct() && el) { // 前进，因为添加了transition，这里directive的inserted钩子未能正常执行，所以在动画结束后进行手动触发。。。
                if (this.$router.directtion >= 0 && el) { // 前进，因为添加了transition，这里directive的inserted钩子未能正常执行，所以在动画结束后进行手动触发。。。
                    // 防止新页面也是keep-alive的，清除所有位置信息
                    ScrollPosition.clear(el);
                } else if (this.$router.direction < 0 && el) { // 回退
                    // ScrollPosition.inserted(el);
                    this.$nextTick().then(() => {
                        ScrollPosition.inserted(el);
                    });
                }
                // // 开始动画
                // Velocity(el, { opacity: 1, translateX: [0, flt], translateZ: 0 }, 300, done); //eslint-disable-line
                // 开始动画. mod by Dio Zhu. on 2018.7.31
                if (this.trans === 'slide-left') Velocity(el, { opacity: [1, 0.5], translateX: [0, flt], translateZ: 0 }, { duration: 300 }, done); //eslint-disable-line
                else Velocity(el, { opacity: [1, 0.5], translateX: 0, translateZ: 0 }, { duration: 300 }, done);
                setTimeout(() => { done(); }, 400);
            },
            afterEnter (el) { // 还原滚动条信息
                // console.log(`[APP.transition].afterEnter: ${this.$route.name}`, el.className);
                setTimeout(() => { // ios低版本会出现动画延后无法正常清除webkitTransform现象，造成form页picker的遮罩层顺序颠倒，这里延迟处理。 mod by Dio Zhu. on 2018.8.2
                    el.style.transform = ''; // 清除动画残留，避免合并层过多。。。
                    el.style.webkitTransform = ''; // 清除动画残留，避免合并层过多。。。
                    // el.style = null; // 清除动画残留，避免合并层过多。。。mod by Dio Zhu. on 2018.7.31
                }, 500);
            },
            leave (el, done) { // 离开前获取滚动条信息
                // console.log(`[APP.transition].leave: ${this.$route.name}`, el.className, this.trans);
                // el.style.opacity = 0.1;
                // done();
                // 页面离开动画. mod by Dio Zhu. on 2018.7.31
                let flt = 0,
                    w = window.document.body.clientWidth * 0.8,
                    p = el.parentNode,
                    cel = el.cloneNode(true),
                    pos = el.getAttribute('scroll-position') ? el.getAttribute('scroll-position').split('-') : [0, 0], // 首页，渐进
                    tmp = ScrollPosition.getPos(el);
                // console.log(`[APP.transition].leave: ${this.$route.name}`, el.className, this.trans, pos, tmp);
                p.appendChild(cel); // 不能直接用el进行动画，这里如果异步执行done会扰乱vue的释放规则，造成滚动容器的位置会被还原，这里用了cloneNode再重新渲染一个dom进行动画展示，完事儿再异步删除。 Author by Dio Zhu. on 2018.8.1
                ScrollPosition.setPos(cel, tmp);
                done();
                if (this.trans === 'slide-left') flt = -w; // 进入
                else if (this.trans === 'slide-right') flt = w; // 回退
                cel.style.position = 'absolute';
                cel.style.width = '100%';
                cel.style.left = 0;
                cel.style.top = 0;
                if (this.trans === 'slide-right') Velocity(cel, { opacity: [0, 1], translateX: [flt, 0], translateZ: 0 }, { duration: 300, mobileHA: false, loop: false, queue: false }, done); //eslint-disable-line
                else Velocity(cel, { opacity: [0, 1], translateX: 0, translateZ: 0 }, { duration: 300, mobileHA: false, loop: false, queue: false }, done);
                // setTimeout(() => { done(); }, 3001);
                setTimeout(() => {
                    cel.style.transform = ''; // 清除动画残留，避免合并层过多。。。
                    cel.style.webkitTransform = ''; // 清除动画残留，避免合并层过多。。。
                    p.removeChild(cel);
                }, 400);
            },
            afterLeave (el) {
                // console.log(`[APP.transition].afterLeave: ${this.$route.name}`);
                // 还原滚动条信息
                setTimeout(() => {
                    el.style.transform = ''; // 清除动画残留，避免合并层过多。。。
                    el.style.webkitTransform = ''; // 清除动画残留，避免合并层过多。。。
                    // el.style = null; // 清除动画残留，避免合并层过多。。。mod by Dio Zhu. on 2018.7.31
                }, 500);
            }
        }
    };
</script>
<style lang="scss">
    @import './scss/app.scss'; // 基础样式
    @import '../node_modules/highlight.js/styles/zenburn.css'; // 代码高亮的样式，正式项目请移除: darcula、googlecode
    @import './scss/_highlight.scss'; // 代码高亮的样式，正式项目请移除

    [v-cloak]{
        display: none;
    }
    /* 滑入滑出动画。 Author by Dio Zhu. on 2017.3.28 */
    .slide-left-enter-active, .slide-right-enter-active {
        transition: all .3s ease;
    }
    .slide-left-leave-active, .slide-right-leave-active {
        /*transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);*/
        transition: all .1s ease;
    }
    .slide-left-enter, .slide-left-leave-active {
        transform: translateX(20px);
        opacity: 0.1;
    }
    .slide-right-enter, .slide-right-leave-active {
        transform: translateX(-20px);
        opacity: 0.1;
    }
    .v-modal{
        filter:alpha(Opacity=70)!important;
        opacity: 0.7!important;
    }

    .page {

        h2 {
            padding-top: pxTorem(15px);
            padding-left: pxTorem(15px);
            line-height: pxTorem(40px);
            // background: #f2f2f4;
        }

        .desc {
            /*height: pxTorem(28px);*/
            font-size: pxTorem(14px);
            line-height: 1.5;
            padding: 0 pxTorem(15px);
            color: #777E8C;
            /*background: #f2f2f4;*/

            /*display: table; // v-scroller会造成盒模型崩塌?*/
            table-layout: fixed; // 不加上这个如果内部标签有一大串url, 此父级会被撑开
            text-align: justify; // 两边对齐...
            word-break: break-all; // 强制换行, 避免超长url
            white-space: pre-wrap;
        }

        ul.desc {
            width: 100%;

            li {
                padding: pxTorem(5px);
                background: rgba(86,61,124,0.15);
                border: 1px solid rgba(86,61,124,0.2);
            }
        }

        // .attributes {
        //     /*padding: 0 pxTorem(6px);*/
        // }
    }

</style>
