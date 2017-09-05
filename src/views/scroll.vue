<template>
    <div class="page page-scroll">
        <!--<h2>滚动条参考样例</h2>-->

        <v-scroll v-model="listData" :func="getList" func-type="section" :enabled="flashTag">
            <h2>单滚动条 样例</h2>
            <p class="desc" @click="handleTest">添加了vuex管理"关注"状态的示例；

滚动条要求以v-model形式绑定当前listData，用于刷新时清除数据重新渲染；

funcType为分页方式，本例采用node的section方式，与php对接时此参数可忽略，默认即可；

getList函数需要设定形参，由滚动条组件回传当前页码，用于与接口请求分页数据；

            </p>
            <ul>
                <li v-for="item in listData" @click="goDetail(item)">
                    <v-feed
                        :feedId="item.userInfo.feedId"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.title"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <p-follow :followuid="parseInt(item.userInfo.id)" :userid="userInfo.id || 0" :status="item.userInfo.isfollow"></p-follow>
                    <v-text classes="content" :value="item.title"></v-text>
                </li>
            </ul>
        </v-scroll>

    </div>
</template>

<script type="text/ecmascript-6">
    import vText from '../vendor/v-text.vue';
    import vFeed from '../vendor/v-feed.vue';
    import pFollow from '../components/p-follow.vue';
    import vScroll from '../vendor/v-scroll.vue';
    import config from '../config';
    import * as api from '../js/core/api';
    import { mapGetters } from 'vuex';

    export default {
        components: { vText, vFeed, pFollow, vScroll },

        data () {
            return {
                flashTag: true, // 刷新标识
                listData: []
            };
        },

        computed: {
            ...mapGetters(['userInfo', 'follows'])     // 从store中获取当前登陆用户信息
        },

//        created () {
//            this.$logger.log('scroll.created... ');
//        },
        mounted () {
            this.$logger.log('scroll.mounted... ');
        },

//        deactivated () {
//            this.$logger.log('scroll.deactivated... ', document.body.scrollHeight);
//        },
    //    beforeRouteLeave (to, from, next) {
    //        this.$logger.log(`scroll.${this._uid}.beforeRouteLeave: `, document.body.scrollHeight, this.timestamp, window.pageYOffset);
    //        next();
    //    },

        methods: {
//            init () {
//    //            this.getList();
//            },

            getList ({ offset = 0, limit = config.LIMIT }) {
                return api.getRandomList({
                    offset: offset,
                    limit: limit
                }).then((res) => {
                    this.$logger.log('scroll.methods.getList: SUCCESS, ', res);
                    if (res.length && res.length > 0) {
                        this.listData = this.listData.concat(res); // 整理list数据
                    }
                    return Promise.resolve(res);
                });
            },
            goDetail (item) {
    //            this.$router.push({name: 'detail', query: {id: item.id}, hash: '#labDiv'});
                this.$router.push({name: 'scroll-two', query: {subjectId: this.$route.query.subjectId, id: item.id}});
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
        ul li {
            height: auto;
            position: relative;
            border-bottom: #f2f2f4 pxTorem(1px) solid;

            /*&:first-child {*/
                /*border-top: darkblue 1px solid;*/
            /*}*/

            .p-follow {
                position: absolute;
                top: pxTorem(10px);
                right: pxTorem(15px);
            }
        }

        .v-btn .v-btn__text {
            font-size: pxTorem(12px);
        }
    }
</style>
