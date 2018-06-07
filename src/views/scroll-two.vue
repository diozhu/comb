<template>
    <div class="page page-scroll page-scroll-two">
        <v-scroll v-model="listData" :func="getList" func-type="section" :enabled="currentLab === 0" @reset="handelReset">
            <h2>多滚动条 样例</h2>
            <p class="desc">如无特殊情况，不需要提升滚动容器，把相同内容放入到多个滚动条中，仍使用div容器进行滚动；</p>
            <v-swipe-label>
                <div @click="clickLabel(item)" :class="['itm', {cur: currentLab==item.id}]" v-for="(item, index) in labs" :key="index">{{item.txt}}</div>
            </v-swipe-label>

            <ul v-if="currentLab == 0">
                <li v-for="(item, index) in listData" :key="index" @click="goDetail(item)">
                    <v-feed
                        :feedId="item.userInfo.feedId"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.title"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title no-border'"
                    ></v-feed>
                    <p-follow :followuid="parseInt(item.userInfo.id)" :userid="userInfo.id || 0" :status="item.userInfo.isfollow" :border="true"></p-follow>
                </li>
            </ul>
        </v-scroll>

        <v-scroll v-model="listDataSec" :func="getSecList" func-type="section" :enabled="currentLab === 1" @reset="handelReset">
            <h2>多滚动条 样例</h2>
            <p class="desc">如无特殊情况，不需要提升滚动容器，把相同内容放入到多个滚动条中，仍使用div容器进行滚动；</p>
            <v-swipe-label>
                <div @click="clickLabel(item)" :class="['itm', {cur: currentLab==item.id}]" v-for="(item, index) in labs" :key="index">{{item.txt}}</div>
            </v-swipe-label>

            <ul v-if="currentLab == 1">
                <li v-for="(item, index) in listDataSec" :key="index" @click="goDetail(item)">
                    <v-feed
                        :feedId="item.userInfo.feedId"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.title"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title small'"
                    ></v-feed>
                    <p-follow :followuid="parseInt(item.userInfo.id)" :userid="userInfo.id || 0" :status="item.userInfo.isfollow" :border="true"></p-follow>
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
import config from '../config';
import * as api from '../js/core/api';
import vSwipeLabel from '../vendor/v-swipe-label.vue';
import vScroll from '../vendor/v-scroll.vue';
import { mapGetters } from 'vuex'; //eslint-disable-line

export default {
//    components: { vFeed, vInfiniteScroll },
    components: { vText, vFeed, pFollow, vSwipeLabel, vScroll },

    data () {
        return {
            labs: [
                {id: 0, txt: '菜单一'},
                {id: 1, txt: '菜单二'}
            ],
            currentLab: 0,
            listData: [],
            listDataSec: []
        };
    },

    computed: {
        ...mapGetters(['userInfo', 'follows']) // 从store中获取当前登陆用户信息
    },
    mounted () {
        this.$logger.log('scroll-two.mounted... ');
    },

    methods: {
        init () {
        },
        clickLabel (item) {
            this.currentLab = item.id;
        },

        handelReset (tag) {
            if (tag) this.currentLab = 0;
        },

        getList ({ offset = 0, limit = config.LIMIT, refresh = false }) {
            return api.getRandomList({
                offset: offset,
                limit: limit
            }).then((res) => {
                this.$logger.log('scroll.methods.getList: SUCCESS, ', res);
                if (refresh) this.listData = []; // 刷新回调，清空现有数据。 Author by Dio Zhu. on 2017.3.22
                if (res.length && res.length > 0) {
                    this.listData = this.listData.concat(res); // 整理list数据
                }
                return Promise.resolve(res);
            });
        },

        getSecList ({ offset = 0, limit = config.LIMIT, refresh = false }) {
            return api.getRandomList({
                offset: offset,
                limit: limit
            }).then((res) => {
                this.$logger.log('scroll.methods.getSecList: SUCCESS, ', res);
                if (refresh) this.listDataSec = []; // 刷新回调，清空现有数据。 Author by Dio Zhu. on 2017.3.22
                if (res.length && res.length > 0) {
                    this.listDataSec = this.listDataSec.concat(res); // 整理list数据
                }
                return Promise.resolve(res);
            });
        },
        goDetail (item) {
            this.$router.push({name: 'detail', query: {subjectId: this.$route.query.subjectId, id: item.id}, hash: '#vSwipeLableComments'});
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-scroll-two {
        ul li {
            height: auto;
        }
    }
</style>
