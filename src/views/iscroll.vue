<template>
    <div class="page page-iscroll">
        <!--<h2>滚动条参考样例</h2>-->
        <!-- <v-iscroll v-model="listData" :func="getList" func-type="section" :enabled="flashTag">
            <h2>iscroll滚动条 样例</h2>
            <p class="desc" @click="handleTest">。。。
            </p>
            <ul>
                <li class="row" v-for="item in listData" @click="goDetail(item)">
                    <v-feed
                        :feedId="item.userInfo.feedId"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.title"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <v-text classes="content" :value="item.title"></v-text>
                </li>
            </ul>
        </v-iscroll> -->

        <v-iscroll ref="scrollView" id="vIscrollContent" class="scroll-view" @pullUp="pullUp" @pullDown="pullDown" :options="iScrollOptions">
            <ul>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <li class="row"></li>
                <!-- <li class="row" v-for="item in listData" @click="goDetail(item)">
                    <v-feed
                        :feedId="item.userInfo.feedId"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.title"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <v-text classes="content" :value="item.title"></v-text>
                </li> -->
            </ul>
        </v-iscroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import vText from '../vendor/v-text.vue';
    import vFeed from '../vendor/v-feed.vue';
    import config from '../config';
    import * as api from '../js/core/api';
    import { mapGetters } from 'vuex';
    import Stats from '../../static/js/vendor/stats.min.js'; // 状态插件

    import Vue from 'vue';
    import IScroll from 'iscroll/build/iscroll-infinite.js';
    Vue._IScroll = IScroll;
    import vIscroll from '../vendor/v-iscroll.vue';

    export default {
        components: { vText, vFeed, vIscroll },

        data () {
            return {
                flashTag: true, // 刷新标识
                listData: [],
                iScrollOptions: {
                    mouseWheel: true,
                    // vScrollbar: true,
                    // click: true,
                    // preventDefault: true,
                    // tap: true,
                    // bounce: false,
                    // disableTouch: true,
                    infiniteElements: '#vIscrollContent .row',
                    dataset: this.requestData,
                    dataFiller: this.updateContent,
                    cacheSize: 100
                }
            };
        },

        computed: {
            ...mapGetters(['userInfo', 'follows'])     // 从store中获取当前登陆用户信息
        },

//        created () {
//            this.$logger.log('iscroll.created... ');
//        },
        mounted () {
            this.$logger.log('iscroll.mounted... ');
            // this.init();
            // this.initStatsPlugins(); // 初始化状态插件
            this.getList({offset: 1, limit: 20}).then(res => {
                this.listData = res;
                this.$refs.scrollView.refresh();
            });
            this.$refs.scrollView.refresh();
        },

//        deactivated () {
//            this.$logger.log('scroll.deactivated... ', document.body.scrollHeight);
//        },
    //    beforeRouteLeave (to, from, next) {
    //        this.$logger.log(`scroll.${this._uid}.beforeRouteLeave: `, document.body.scrollHeight, this.timestamp, window.pageYOffset);
    //        next();
    //    },

        methods: {
            init () {
                this.$nextTick(() => {
                    this.$logger.log('iscroll.init... ');
                    this.myScroll = new IScroll('#combScroll_10', {
                        mouseWheel: true,
                        infiniteElements: '#vIscrollContent .row',
                        // infiniteLimit: 2000,
                        dataset: this.requestData,
                        dataFiller: this.updateContent,
                        cacheSize: 1000
                    });
                    setTimeout(() => {
                        this.myScroll.refresh();
                    }, 0);
                });
            },
            requestData (start, count) {
                this.$refs.scrollView.refresh();
                this.$logger.warn('iscroll.requestData: ', ...arguments);
                return api.getInfiniteList({
                    offset: 1,
                    limit: count
                }).then((res) => {
                    this.$logger.warn('iscroll.methods.requestData: SUCCESS, ', res, this.$refs.scrollView.iscroll);
                    this.$refs.scrollView.iscroll.updateCache(start, res);
                    return Promise.resolve(res);
                });
            },
            updateContent (el, data) {
                // this.$logger.warn('iscroll.updateContent: ', ...arguments);
                el.innerHTML = data.title;
            },

            pullUp () {
                console.log('Pull up.!!!!!!!!!!!', ...arguments);
            },
            pullDown () {
                console.log('Pull down.!!!!!!!!!!!!!!!', ...arguments);
            },

            initStatsPlugins () {
                if (window.requestIdleCallback) {
                    let self = this;
                    let stats = new Stats();
                    let domPanel = new Stats.Panel('Dom', '#0ff', '#002');
                    stats.addPanel(domPanel);
                    stats.showPanel(3);
                    document.body.appendChild(stats.dom);
                    setTimeout(function timeoutFunc () {
                        // Only update DOM node graph when we have time to spare to call
                        // numDomNodes(), which is a fairly expensive function.
                        requestIdleCallback(() => { //eslint-disable-line
                            domPanel.update(self.numDomNodes(document.body), 1500);
                            setTimeout(timeoutFunc, 100);
                        });
                    }, 100);
                };
            },
            numDomNodes (node) {
                if (!node.children || node.children.length === 0) return 0;
                let childrenCount = Array.from(node.children).map(this.numDomNodes);
                return node.children.length + childrenCount.reduce(function (p, c) { return p + c; }, 0);
            },

            getList ({ offset = 0, limit = config.LIMIT }) {
                this.$logger.log('i-scroll.methods.getList: ', ...arguments);
                return api.getInfiniteList({
                    offset: offset,
                    limit: limit
                }).then((res) => {
//                    this.$logger.log('infinite-scroll.methods.getList: SUCCESS, ', res);
                    return Promise.resolve(res);
                });
            },
            goDetail (item) {
                this.$logger.log('i-scroll.methods.goDetail: ', item.title);
//                this.$router.push({name: 'scroll-two', query: {subjectId: this.$route.query.subjectId, id: item.id}});
            },
            handleTest () { // 通过enabled参数变化，控制滚动条组件刷新列表。。。用于多入参list情况
                this.flashTag = false;
                this.listData = [];
                this.$nextTick(() => {
                    this.flashTag = true;
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-iscroll {

        .scroll-view {
            /* -- Attention: This line is extremely important in chrome 55+! -- */
            touch-action: none;
            /* -- Attention-- */
            position: fixed;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            padding: 0;
            overflow: hidden;

            .row {
                // height: pxTorem(32px);
            }
        }
    }
</style>
