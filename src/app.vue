<template>
    <div ref="container" id='container' class="app v-touch"
        v-swipe="swipe"
        swipe-direction="right"
        swipe-distance="350"
    >
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            :css="false"
        >
            <keep-alive>
                <router-view ref="page" v-if="$route.meta.keepAlive" v-scroll-position></router-view>
            </keep-alive>
        </transition>
        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            :css="false"
        >
            <router-view v-if="!$route.meta.keepAlive" v-scroll-position></router-view>
        </transition>

        <!-- <keep-alive>
            <router-view v-if="$route.meta.keepAlive" v-scroll-position></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" v-scroll-position></router-view> -->

        <!--添加评论赞按钮，仅蜂巢项目使用！！！-->
        <!-- <p-float-comments v-if="$route.query.subjectId" :id="parseInt($route.query.subjectId)"></p-float-comments> -->
    </div>
</template>

<script type="text/ecmascript-6">
    import Vue from 'vue';
    import { toonCall } from './js/core/core.js'; // Examples of using the toon protocal. Author by Dio Zhu. on 2017.2.24
    import * as dom from './js/utils/dom.js';
    import * as utils from './js/utils/utils.js';
//    require('../static/js/vendor/velocity.min'); // get velocity.min
    import '../static/js/vendor/velocity.min.js'; // get velocity.min
    import Swipe from './vendor/v-swipe.js'; // 滑动手势
    import ScrollPosition from './vendor/v-scroll-position.js'; // 滚动条位置信息
    // import pFloatComments from './components/p-float-comments.vue'; // 组件库浮动评论赞组件，实际项目请注释掉
    import './js/utils/highlightjs'; // 代码高亮组件，实际项目请注释掉

    Vue.use(Swipe); // 滑动手势
    Vue.use(ScrollPosition); // 滚动条位置信息

    export default {
        // components: { pFloatComments },

        data () {
            return {
//                loadingShow: 1,      // index.html的菊花loading
                trans: 'fade'
            };
        },

        watch: {
//            'loadingShow' (val) { // 菊花
//                if (this.loadingObj && val) {
//                    this.loadingObj.style.display = 'block';
//                } else if (this.loadingObj && !val) {
//                    this.loadingObj.style.display = 'none';
//                }
//            },
            '$store.state.status.loading' (val) {
//                this.$logger.log('##########################', val);
                if (this.loadingObj && val) {
                    this.loadingObj.style.display = 'block';
//                    Velocity(this.loadingObj, { opacity: 0.8 }, { duration: 500 }, { complete: this.loadingObj.style.display = 'block' }); //eslint-disable-line
                } else if (this.loadingObj && !val) {
                    this.loadingObj.style.display = 'none';
//                    Velocity(this.loadingObj, { opacity: 0 }, { duration: 1500 }, { complete: this.loadingObj.style.display = 'none' }); //eslint-disable-line
                }
            },
            '$route.name' (to, from) {
                // 根据时间戳，判断是前进还是返回
                if (!this.$route.query.timestamp) {
                    this.trans = 'fade';
//                } else if (this.$store.state.status.position && this.$store.state.status.position[this.$route.query.timestamp]) {
                } else if (!this.$router.direct()) { // back
                    this.trans = 'slide-right';
                } else { // in
                    this.trans = 'slide-left';
                }
                this.$logger.log(`APP.${this._uid}.watch: $route!!!`, to, from, this.trans);
            }
        },

        created () {
            this.$logger.log('APP.created... ', this.trans);
        },

        mounted () {
            this.$logger.log('APP.mounted... ');
            this.loadingObj = document.getElementById('loading-wrapper');
//            this.loadingShow = 0;
        },
//
//        activated () {
//            this.$logger.log('APP activated... ');
//        },
//        deactivated () {
//            this.$logger.log('APP deactivated... ');
//        },

        methods: {
            /**
             * 右划回退：
             *  如果上级是原生，调toon协议进行回退操作；
             *  如果是普通h5，用使用js方式；
             *
             */
            swipe (e) {
                this.$logger.log('>>>>>>>>>>>>>>>>>>>> APP.swipe');
//                if (this.$route.name === 'upload-viewer' || this.$route.name === 'viewImage') {
//                this.$logger.log('(/.viewer/ig).test(this.$route.name): ', (/.viewer/ig).test(this.$route.name));
//                if (!this.$route.query.timestamp) { // 本地路由为了保存滚动位置都加了时间戳，如果没有，说明是首页~
                if (!window.history || !window.history.state || utils.getQueryStringByName('code')) { // 如果首页，调toon协议关闭webview~
                    this.$logger.log('<== swipe right! toon back ...');
                    toonCall({functionType: 1}, 'mwap/window', function (res) {
                        console.log('toon back: ', res);
                    });
                } else if (this.$route.name === 'viewer' || this.$route.name === 'cell') {
                    this.$logger.log('<== swipe right, do nothing ...');
                    // 图片预览页调用了swiper，冒泡居然反了。。。这里暂时根据路由判断
                } else {
                    this.$logger.log('<== swipe right! go back ...');
                    this.$router.go(-1);
                }
            },
            onTransitionEnd (e) {
                this.$logger.log(`!!!!!!!!![APP.transition].onTransitionEnd!`, e);
            },
            /**
             * 手动transition动画
             * 默认的动画会影响keep-alive的scrollBehavior计算，原因在于计算时动画渲染还未完成，获取不到scroll，所以window.scrollTo无法完成
             *              -- Author by Dio Zhu. on 2017.3.6
             * 取消了scrollBehavior方式，使用v-scroll-position指令方式，在动画结束时，手动触发指令挂载（inserted）钩子
             *              -- Author by Dio Zhu. on 2017.5.19
             */
            beforeEnter (el) {
                this.$logger.log(`[APP.transition].beforeEnter!`);
                el.style.opacity = 0.1;
            },
            enter (el, done) {
                this.$logger.log(`[APP.transition].enter: ${this.$route.name}`);
                let flt = 0; // 首页，渐进
                if (this.trans === 'slide-left') { // 进入
                    flt = 40;
                } else if (this.trans === 'slide-right') { // 回退
                    flt = -40;
                }
                // 在这里处理滚动位置，如果放在before会出现绑定与挂载顺序问题，放在after会出现闪动。。。
                this.$logger.log(`[APP.transition].enter: starting recompute the scroll position...`);
                if (this.$router.direct() && el) { // 前进，因为添加了transition，这里directive的inserted钩子未能正常执行，所以在动画结束后进行手动触发。。。
                    // 防止新页面也是keep-alive的，清除所有位置信息
                    ScrollPosition.clear(el);
                } else if (!this.$router.direct() && el) { // 回退
//                    ScrollPosition.inserted(el);
                    this.$nextTick().then(() => {
                        ScrollPosition.inserted(el);
                    });
                }
                // 开始动画
                Velocity(el, { opacity: 1, translateX: [0, flt], translateZ: 0 }, 300, done); //eslint-disable-line
            },
            afterEnter (el) { // 还原滚动条信息
                this.$logger.log(`[APP.transition].afterEnter: `, dom.getDetectPrefixes().transform);
                el.style.opacity = ''; // 清除动画残留
                el.style[dom.getDetectPrefixes().transform] = ''; // 清除动画残留，避免合并层过多，以及android低版本下transition造成fixed失效问题。。。
            },
            leave (el, done) { // 离开前获取滚动条信息
                this.$logger.log(`[APP.transition].leave: ${this.$route.name}`);
                el.style.opacity = 0.1;
                done();
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import './scss/app.scss'; // 基础样式
    @import "../node_modules/highlight.js/styles/zenburn.css"; // 代码高亮的样式，正式项目请移除: darcula、googlecode
    @import "./scss/_highlight.scss"; // 代码高亮的样式，正式项目请移除

    [v-cloak]{
        display: none;
    }

    // vue-lazyload 延时加载样式
    img[lazy=loading] {
        width: pxTorem(20px);
        height: pxTorem(20px);
        margin: pxTorem(100px) 0;
    }
    img[lazy=loaded] {
        width: 100%;
        height: 100%;
        margin: 0 0 pxTorem(3px) 0;
    }
    img[lazy=error] {
        width: pxTorem(34px);
        height: pxTorem(28px);
        margin: pxTorem(100px) 0;
    }

    .page {

        h2 {
            padding-top: pxTorem(15px);
            padding-left: pxTorem(15px);
            line-height: pxTorem(40px);
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

        .attributes {
            /*padding: 0 pxTorem(6px);*/
        }
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
</style>
