<template>
    <div class="page page-scroll">
        <!--<h2>滚动条参考样例</h2>-->

        <v-infinite-scroll v-model="listData" :func="getList" func-type="section" :enabled="flashTag">
            <h2>单滚动条 样例</h2>
            <p class="desc" @click="handleTest">
                带dom回收的无尽滚动
            </p>
            <!-- 墓碑样式 -->
            <!--<template slot="tombstone" scope="props">-->
            <!--<div>-->
            <!--<div class="avatar"></div>-->
            <!--<div class="bubble">-->
            <!--<p></p>-->
            <!--<p></p>-->
            <!--<p></p>-->
            <!--<div class="meta">-->
            <!--<time class="posted-date"></time>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <!--</template>-->
            <!-- 实际滚动行样式 -->
            <template slot="item" slot-scope="props">
                <div @click="goDetail(props.data)">
                    <v-feed
                        :feedId="props.data.userInfo ? props.data.userInfo.feedId : ''"
                        :imgUrl="props.data.userInfo ? props.data.userInfo.avatar : ''"
                        :title="props.data.userInfo ? props.data.userInfo.title : ''"
                        :subtitle="props.data.userInfo ? props.data.userInfo.subtitle : ''"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <!--<img :src="props.data.userInfo ? props.data.userInfo.avatar : ''"/>-->
                    <v-text classes="content" :value="props.data ? props.data.title : ''"></v-text>
                </div>
            </template>
        </v-infinite-scroll>

    </div>
</template>

<script type="text/ecmascript-6">
    import vText from 'comb-ui/src/vendors/v-text.vue';
    import vFeed from 'comb-ui/src/vendors/v-feed.vue';
    import vInfiniteScroll from 'comb-ui/src/vendors/v-infinite-scroll.vue';
    import config from '../config';
    import * as api from '../js/core/api';
    import { mapGetters } from 'vuex';
    import Stats from '../js/utils/stats.js'; // 状态插件

    export default {
        components: { vText, vFeed, vInfiniteScroll },

        data () {
            return {
                flashTag: true, // 刷新标识
                listData: []
            };
        },

        computed: {
            ...mapGetters(['userInfo', 'follows'])     // 从store中获取当前登陆用户信息
        },

        mounted () {
            console.log('scroll.mounted... ');
            this.initStatsPlugins(); // 初始化状态插件
        },

        methods: {
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
                console.log('infinite-scroll.methods.getList: ', ...arguments);
                return api.getRandomList({
                    offset: offset,
                    limit: limit
                }).then((res) => {
                    return Promise.resolve(res);
                });
            },
            goDetail (item) {
                console.log('infinite-scroll.methods.goDetail: ', item.title);
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

    .page-scroll {

        .listview {

            li {
                border-bottom: #f2f2f4 pxTorem(1px) solid;

                .v-text {
                    padding: 0 pxTorem(15px) pxTorem(15px);
                }
            }
        }

        .v-infinite-scroll__content,
        .v-infinite-scroll__pool {
            &>li {
                border-bottom: #f2f2f4 pxTorem(1px) solid;

                .v-text {
                    padding: 0 pxTorem(15px) pxTorem(15px);
                }
            }
        }

        .v-btn .v-btn__text {
            font-size: pxTorem(12px);
        }
    }
</style>
