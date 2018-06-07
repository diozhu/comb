<template>
    <!--v-on:tap="onTap" v-bind:tap-options="{threshold: 10}"-->
    <!--<v-touch ref="touch" :id="id" class="v-swipe-label"-->
    <!--v-on:swiperight="swipe" v-bind:swipe-options="{ direction: 'horizontal' }"-->
    <!--&gt;-->
    <!-- <div class="v-swipe-label" :class="{sticky: fixed && isSticky}"> -->
    <div :class="['v-swipe-label', {dark}]">
        <!--<div ref="container" class="v-swipe-label__container" :class="floatClass"-->
        <!--@touchstart.stop="touchStart" @touchmove.stop="touchMoving" @touchend.stop="touchEnd"-->
        <!-- <div ref="container" class="v-swipe-label__container" :class="{fixed: fixed && isFixed}" @touchend.stop> -->
        <!--  @touchstart.stop -->
        <div ref="container" class="v-swipe-label__container" @touchmove.stop @touchend.stop>
            <!-- <div ref="container" class="v-swipe-label__container" @touchstart.stop.prevent @touchmove.stop.prevent @touchend.stop.prevent> -->
            <!--<div class="v-swipe-label__content" :style="conStyle">-->
            <div ref="content" class="v-swipe-label__content" :style="{left: left + 'px'}">
                <!--<div ref="content" class="v-swipe-label__content" :style="{transform: 'translate3d(' + left + 'px, 0, 0)'}">-->
                <slot></slot>
            </div>
            <p v-if="showBottomLine" class="line"></p>
        </div>
        <!--<div :style="{clear: 'both', height: '1px'}"></div>-->
    </div>
    <!--<p>{{conStyle}}</p>-->
    <!--</v-touch>-->
</template>
<script>
//    require('../../static/js/vendor/zepto.min'); // get zepto
//    require('../../static/js/vendor/jquery.slim.min');
//    require('exports-loader?$=jQuery!../../static/js/vendor/jquery.1.4.2.min');
//    require('exports-loader?file!../../static/js/vendor/jquery.sticky'); // get jquery.sticky
//    require('../../static/js/vendor/jquery.slim.min');
//    require('../../static/js/vendor/jquery.sticky');
//    import $ from 'jquery';
//    import '../../static/js/vendor/jquery.sticky';
//    import vSticky from '../vendor/v-sticky';

/**
 * 滑动菜单
 *              -- Author by Dio Zhu. on 2017.2.14
 * 添加了fixed，默认false，设定true时，可根据滚动距离使当前菜单浮动置顶
 *              -- Author by Dio Zhu. on 2017.3.27
 */
export default {
    name: 'v-swipe-label',

    //        directives: { 'sticky': vSticky },
    props: {
        id: String,
        fixed: {
            type: Boolean,
            default: false
        },
        showBottomLine: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            position: 0,     // 当前组件所在文档的位置，滚动时保存，避免脱离文档流后找不到对照点
            isSticky: false, // sticky方式浮动
            isFixed: false, // fixed方式浮动
            floatClass: '', // 浮动class，根据机型使用fixed或sticky
            startX: 0, // 初始位置
            lastX: 0, // 上一次位置

            lastMoveTime: 0, // 缓动
            lastMoveStart: 0, // 缓动
            stopMovingTag: false, // 缓动

            minl: 0,        // 滑动区间
            maxl: -8000,
            conStyle: {
                left: '0px'
            },
            left: 0
        };
    },

    computed: {
        oh () {
            return this.$el.getBoundingClientRect().top;
        }
    },

    watch: {
        '$route.name' (val) { // 如果使用了keep-alive，根据路由变化，判断组件的_inactive，设置isEnabled，避免事件重复触发
            if (!this.fixed) return;
            if (!this._inactive) { // 激活
                this.$logger.log('v-swipe-label.watch.in...');
                window.addEventListener('scroll', this.scrollHandle);
            } else { // 失效
                this.$logger.log('v-swipe-label.watch.back...');
                window.removeEventListener('scroll', this.scrollHandle);
            }
        }
    },

    created () {
        this.$logger.log('v-swipe-label created...');
    },

    mounted () {
        this.$nextTick(() => {
            this.init();
        });
    },

    methods: {
        init () {
            this.maxl = -(this.$refs.content.offsetWidth - this.$refs.container.offsetWidth); // 设定左滑界限

            /**
             * 如果设定了fixed定位，监听滚动
             */
            if (this.fixed) {
                let scrollTarget = this.getScrollEventTarget(this.$el);
                scrollTarget.addEventListener('scroll', this.throttle(this.scrollHandle, 10));
                this.position = this.$el.getBoundingClientRect().top;
            }
        },

        throttle (fn, delay) {
            let now, lastExec, timer, context, args; //eslint-disable-line
            let execute = function () {
                fn.apply(context, args);
                lastExec = now;
            };
            return function () {
                context = this;
                args = arguments;
                now = Date.now();

                if (timer) {
                    clearTimeout(timer);
                    timer = null;
                }

                if (lastExec) {
                    let diff = delay - (now - lastExec);
                    if (diff < 0) {
                        execute();
                    } else {
                        timer = setTimeout(() => {
                            execute();
                        }, diff);
                    }
                } else {
                    execute();
                }
            };
        },
        getScrollEventTarget (element) {
            var currentNode = element;
            // bugfix, see http://w3help.org/zh-cn/causes/SD9013 and http://stackoverflow.com/questions/17016740/onscroll-function-is-not-working-for-chrome
            while (currentNode && currentNode.tagName !== 'HTML' && currentNode.tagName !== 'BODY' && currentNode.nodeType === 1) {
                var overflowY = document.defaultView.getComputedStyle(currentNode).overflowY;
                if (overflowY === 'scroll' || overflowY === 'auto') {
                    return currentNode;
                }
                currentNode = currentNode.parentNode;
            }
            return window;
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .v-swipe-label {
        position: relative;
        width: 100%;
        /*min-height: pxTorem(38px);*/
        // z-index: 98!important;

        // &.sticky {
        //     position: -webkit-sticky;
        //     position: sticky;
        //     top: 0;
        //     left: 0;
        // }

        .line {
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: pxTorem(0);
            // border-bottom: #3A3E39 1px solid;
            box-shadow: 0 1px 1px #3A3E39;
        }

    }
    .v-swipe-label__container {
        position: relative;
        width: 100%;
        /*min-height: pxTorem(38px);*/
        // overflow-y: hidden;
        // overflow-x: auto;
        /*overflow-x: hidden;*/
        // z-index: 99!important;

        // &.fixed {
        //     position: fixed;
        //     top: 0;
        //     left: 0;
        // }
    }
    .v-swipe-label__content {
        /*position: absolute;*/
        overflow-x: auto;
        /*overflow-x: hidden;*/
        /*overflow-y: hidden;*/
        white-space: nowrap;
        /*transform: translate3d(0, 0, 0);*/
        ::-webkit-scrollbar {
            height: 0;
        }
        >div {
            box-sizing: border-box;
            position: relative;
            display: inline-block;
            font-size: pxTorem(14px);
            line-height: pxTorem(38px);
            padding: 0 pxTorem(10px);
            margin: 0 pxTorem(10px);
            ::-webkit-scrollbar {
                height: 0;
            }
            // border-color: #fff;

            // @keyframes animat { 0%{ @include opacity(.5); } 10% { @include opacity(1)} }

        }
    }

    .dark {
        background: #1B1B20;
        .v-swipe-label__content {
            display: flex;

            .itm {
                flex: 1;
            }
        }
    }
</style>
