<template>
    <div class="page page-refresh-two">
        <v-refresh :func="init" v-model="currentLab" :swipeLength="labs.length">
            <h2>样例</h2>
            <div class="page-refresh__header">{{ info | specialTime }}</div>

            <v-swipe-label :fixed="true">
                <div @click="clickLabel(item)" :class="['itm', {cur: currentLab==item.id}]" v-for="(item, index) in labs" :key="index">{{item.txt}}</div>
            </v-swipe-label>

            <v-scroll v-model="listData" :func="getList" func-type="section" :enabled="currentLab === 0">
                <ul>
                    <li v-for="(item, idx) in listData" :key="idx">
                        <v-feed
                            :feedId="item.userInfo.feedId"
                            :imgUrl="item.userInfo.avatarId"
                            :title="item.userInfo.title"
                            :subtitle="item.userInfo.subtitle"
                            :classes="'title small no-border'"
                        ></v-feed>
                        <v-text classes="content" :value="item.title"></v-text>
                        <!--<v-album v-model="item.content.imgObjects"></v-album>-->
                    </li>
                </ul>
            </v-scroll>

            <v-scroll v-model="listDataSec" :func="getListSec" func-type="section" :enabled="currentLab === 1">
                <ul>
                    <li v-for="(item, idx) in listDataSec" :key="idx">
                        <v-feed
                            :feedId="item.userInfo.feedId"
                            :imgUrl="item.userInfo.avatar"
                            :title="item.userInfo.title"
                            :subtitle="item.userInfo.subtitle"
                            :classes="'title small no-border'"
                        ></v-feed>
                        <v-text classes="content" :value="'【第二页】' + item.title"></v-text>
                    </li>
                </ul>
            </v-scroll>
        </v-refresh>
    </div>
</template>

<script>
    import vRefresh from 'comb-ui/src/vendors/v-refresh.vue';
    import vScroll from 'comb-ui/src/vendors/v-scroll.vue';
    import vFeed from 'comb-ui/src/vendors/v-feed.vue';
    import vText from 'comb-ui/src/vendors/v-text.vue';
    import * as api from '../js/core/api';
    import { mapGetters } from 'vuex'; //eslint-disable-line
    import vSwipeLabel from 'comb-ui/src/vendors/v-swipe-label.vue';
    import vAlbum from 'comb-ui/src/vendors/v-album.vue';

    export default {
        components: { vRefresh, vScroll, vFeed, vText, vSwipeLabel, vAlbum },

        data () {
            return {
                info: '',
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
            console.log('refresh-two.mounted... ');
            this.init();
        },

        activated () {
            if (this.$router.direct()) { // in
                this.init();
            } else { // back
                // do nothing...
            }
        },

        methods: {
            init () {
                console.log('refresh-two.init...');

                return api.getDelay({delay: 500}).then(res => {
                    this.info = res;
                    return Promise.resolve(res);
                });
            },

            clickLabel (item) {
                this.currentLab = item.id;
            },

            getList ({ offset, limit }) {
                //                return api.getRandomList({ offset: offset, limit: limit });
                return api.getRandomList({ offset: offset, limit: limit });
            },

            getListSec ({ offset, limit }) {
                return api.getRandomList({ offset: offset, limit: limit });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-refresh-two {
        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

        .desc {
            height: pxTorem(28px);
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            background: #f2f2f4;
        }

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
