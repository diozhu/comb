<template>
    <div class="page page-refresh">
        <v-refresh :func="init">
            <h2>下拉刷新 考样例</h2>
            <div class="attributes">
                <h2>API</h2>
                <table>
                    <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                    <tr><td>func</td><td>数据更新函数，如果是详情页面，可把接口执行函数写在此函数中，组件下拉时会拉取刷新数据。如果不传，也会显示下拉动画。<br>如果套了滚动条组件，这里不用指定，下拉时会通知滚动组件进行分页拉取。</td><td>Function</td><td>-</td><td>-</td></tr>
                </table>
            </div>
            <p class="desc"></p>
            <div class="page-refresh__header">{{ info | specialTime }}</div>

            <v-scroll v-model="listData" :func="getList" func-type="section">
                <ul>
                    <li v-for="(item, index) in listData" :key="index" @click="goDetail(item)">
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
            </v-scroll>
        </v-refresh>
    </div>
</template>

<script>
    import * as api from '../js/core/api';
    import vRefresh from 'comb-ui/src/vendors/v-refresh.vue';
    import vScroll from 'comb-ui/src/vendors/v-scroll.vue';
    import vFeed from 'comb-ui/src/vendors/v-feed.vue';
    import vText from 'comb-ui/src/vendors/v-text.vue';
    import { mapGetters } from 'vuex';

    export default {
        components: { vRefresh, vScroll, vFeed, vText },
        //         components: {
        // //            vRefresh,
        // //            vScroll,
        //             vRefresh (resolve) { setTimeout(() => { resolve(require('comb-ui/src/vendors/v-refresh.vue')); }); },
        //             vScroll (resolve) { setTimeout(() => { resolve(require('comb-ui/src/vendors/v-scroll.vue')); }); },
        //             vFeed (resolve) { setTimeout(() => { resolve(require('comb-ui/src/vendors/v-feed.vue')); }); },
        //             vText (resolve) { setTimeout(() => { resolve(require('comb-ui/src/vendors/v-text.vue')); }); }
        //         },

        data () {
            return {
                info: '',
                listData: [],
                isMounted: false
            };
        },

        computed: {
            ...mapGetters(['userInfo', 'follows'])     // 从store中获取当前登陆用户信息
        },

        watch: {
            '$root._isMounted' (val) {
                this.isMounted = val;
            }
        },

        mounted () {
            console.log('refresh.mounted... ');
            // this.init();
        },

        activated () {
            console.log('refresh.activated... ');
            if (this.$router.direct()) { // in
                this.init();
            } else { // back
                // do nothing...
            }
        },

        methods: {
            init () { // refresh组件如果用在单独详情页，也可通过此函数进行页面数据加载
                console.log('refresh.init...');

                return api.getDelay({delay: 500}).then(res => { // 拉取详情信息
                    console.log('refresh.init.success: ', res);
                    this.info = res;
                    return Promise.resolve(res);
                });

                // return Promise.resolve({}); // 如果不需要接口，但想要下拉效果，也可直接返回一个空的promise对象
            },

            getList ({ offset, limit }) {
                return api.getRandomList({offset: offset, limit: limit});
            },

            goDetail (item) {
                console.log('refresh.goDetail:', item);
                this.$router.push({name: 'refresh-two'});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-refresh {

        .page-refresh__header {
            background: #F89062;
            width: 100%;
            height: pxTorem(200px);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: pxTorem(18px);
        }

        .v-scroll-container {
            height: initial !important;
            overflow: initial!important;
        }
    }
</style>
