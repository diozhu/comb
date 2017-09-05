<template>
    <div class="page page-forum-topics page-forum-search">
        <v-scroll v-model="listData" :func="getList" func-type="page">
            <v-search v-model="keywords" @handle-search="goSearch"></v-search>
            <ul>
                <li v-for="item in listData" @click="goDetail(item.id)">
                    <div>
                        <v-feed
                            :feedId="item.userInfo.feedId"
                            :imgUrl="item.userInfo.avatar"
                            :title="item.userInfo.title"
                            :subtitle="item.userInfo.subtitle"
                            :desc="parseInt(item.addtm) | specialTime"
                            :classes="'title small no-border'"
                        ></v-feed>
                        <v-text classes="tit" :value="item.title"></v-text>
                        <v-text classes="con" :value="item.abstract"></v-text>
                        <p-forum-comments-bar
                            v-model="item.comment"
                            :praiseEnable="false"
                            :commentEnable="false"
                        ></p-forum-comments-bar>
                    </div>
                </li>
            </ul>
        </v-scroll>
    </div>
</template>

<script type="text/ecmascript-6">
    import bbs from '../vendor/v-forum';
    import vSearch from '../vendor/v-search.vue';
    import vFeed from '../vendor/v-feed';
    import vText from '../vendor/v-text';
//    import vCommentBar from '../vendor/v-comment-bar';
    import pForumCommentsBar from '../components/p-forum-comments-bar.vue';
    import vScroll from '../vendor/v-scroll.vue';
//    import CONFIG from '../config';

    export default {
        components: { vSearch, vFeed, vText, pForumCommentsBar, vScroll },

        data () {
            return {
                keywords: '',
                listData: []
            };
        },

        created () {
            this.$logger.log('forum-list.created... ');
            this.init();
        },

        watch: {
            keywords (val) {
                if (!val) return;
                this.listData = [];
                this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
            }
        },

        methods: {
            init () {
                this.$logger.log('forum-list.init... ');
            },

            getList ({ page, pageNum }) {
//                if (!this.keywords) return Promise.resolve(null);
                if (!this.keywords) return Promise.reject(null);

                return bbs.getTopicSearch({
                    forumId: this.$route.query.forumId || 0,
                    keyword: this.keywords,
                    page: page,
                    pageNum: pageNum
                }).then((res) => {
                    this.$logger.log('forum-list.methods.getList: SUCCESS, ', res);
                    if (res.length && res.length > 0) {
                        res.forEach((v) => {
                            // 图片格式整理
                            if (v.pics) {
                                let album = [];
                                v.pics.forEach((img) => {
                                    if (typeof img === 'string') {
                                        album.push({ url: img });
                                    } else if (img.url && img.width) {
                                        album.push({ url: img.url, width: img.width, height: img.height });
                                    }
                                });
                                v.album = album;
                            }
                            // 评论赞对象整理
                            v.comment = {
                                Id: v.id,
                                CommentFlag: v.CommentFlag,
                                CommentNum: v.CommentNum,
                                LikeFlag: v.LikeFlag,
                                LikeNum: v.LikeNum
                            };
                        });
                        this.listData = this.listData.concat(res); // 整理list数据
                    }
                    return Promise.resolve(res);
                });
            },

            goSearch (val) {
                this.$logger.log('forum-search.goSearch: ', this.keywords);
                this.listData = [];
//                this.getList({page: 1, pageNum: CONFIG.BBS_MAX});
            },

            goDetail (id) {
                this.$router.push({name: 'forum-topics-detail', params: {forumId: this.$route.params.forumId, topicId: id}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-forum-search {

    }
</style>
