<template>
    <div class="page page-forum-topics">
        <v-scroll v-model="listData" :func="getList" func-type="page">
            <v-banner v-model="bannerList"></v-banner>
            <router-link class="search" :to="{ name: 'forum-search', params: { forumId: $route.params.forumId }}">
                <v-search :autofocus="false"></v-search>
            </router-link>
            <ul>
                <li v-for="item in listData" @click="goDetail(item.id)">
                    <div class="info">
                        <v-feed
                            :feedId="item.userInfo.feedId"
                            :imgUrl="item.userInfo.avatar"
                            :title="item.userInfo.name"
                            :subtitle="item.userInfo.subtitle"
                            :desc="parseInt(item.addtm) | specialTime"
                            :classes="'title small no-border'"
                        ></v-feed>
                        <v-text classes="tit" :value="item.title"></v-text>
                        <v-text classes="con" :value="item.abstract"></v-text>
                    </div>
                    <v-album v-model="item.album"></v-album>
                    <p-forum-comments-bar
                        v-model="item.comment"
                        :praiseEnable="false"
                        :commentEnable="false"
                    ></p-forum-comments-bar>
                </li>
            </ul>
        </v-scroll>
        <div @click="goRelease" class="float-release icon icon-pen"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vSearch from '../vendor/v-search.vue';
    import vFeed from '../vendor/v-feed';
    import vText from '../vendor/v-text';
    import pForumCommentsBar from '../components/p-forum-comments-bar.vue';
    import vBanner from '../vendor/v-banner.vue';
    import vAlbum from '../vendor/v-album.vue';
    import MicroBbs from '../vendor/v-forum';
    import vScroll from '../vendor/v-scroll.vue';

    export default {
        components: { vSearch, vFeed, vText, pForumCommentsBar, vBanner, vAlbum, vScroll },

        data () {
            return {
                bannerList: [],
                listData: []
            };
        },

        created () {
            this.$logger.log('forum-topics.created... ');
        },

        activated () {
            if (this.$router.direct()) { // 进入
                this.$logger.log('forum-topics.activated: in~');
                this.init();
            } else { // 返回
                this.$logger.log('forum-topics.activated: back!');
                // 原打算根据返回的状态是新增还是删除，对现有list进行无刷新添加和删除操作，但考虑到分页时与后端的分页参数无法统一，暂时先刷新处理。。。Author by Dio Zhu. on 2017.4.13
                let obj = MicroBbs.getCurrentItem();
                if (obj) {
                    // 判断添加的论坛，并跳转~
                    if (parseInt(this.$route.params.forumId) !== parseInt(obj.forumId)) {
                        this.$logger.log('forum-topics.activated: back~', obj.forumId);
                        let id = obj.forumId;
                        MicroBbs.clearCurrentItem(); // 还原
                        this.$router.replace({name: 'forum-topics', params: {forumId: id}, query: {forumName: ''}});
                    }

                    if (obj && obj.OPT) {
//                    this.init();
                        this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                    } else if (obj && obj.OPT === 0) {
//                    this.init();
                        this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                    }
                    MicroBbs.clearCurrentItem(); // 还原
                }
            }
        },

        methods: {
            init () {
                this.$logger.log('forum-list.init... ');
                MicroBbs.getBannerList({
                    forumId: this.$route.params.forumId || 0
                }).then(res => {
//                    this.bannerList = res;
                    if (!res || res.length < 1) return;
                    res.forEach((v) => {
                        this.bannerList = this.bannerList.concat({
                            url: v.picUrl,
                            href: v.redirectUrl
                        });
                    });
                });
            },

            getList ({ page, pageNum }) {
                return MicroBbs.getTopicList({
                    forumId: this.$route.params.forumId || 0,
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
                                Id: parseInt(v.id),
                                UserId: v.userId,
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

            goDetail (id) {
                this.$router.push({name: 'forum-topics-detail', params: {forumId: this.$route.params.forumId, topicId: id}});
            },

            goRelease () {
                this.$router.push({name: 'forum-release', params: {forumId: this.$route.params.forumId}});
//                forum.checkFeed().then(res => {
//                    this.$logger.log('forum-topics.goRelease.SUCCESS: ', res);
//                    this.$router.push({name: 'forum-release', params: {forumId: this.$route.params.forumId}});
//                }).catch(e => {
//                    this.$logger.error('forum-topics.goRelease.ERROR: ', e);
//                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-forum-topics {
        ul {
            li {
                .info {
                    /*border-bottom: #ccc 1px solid;*/
                    margin-left: pxTorem(15px);

                    .v-feed__img,
                    .v-text p {
                        margin-top: pxTorem(3px);
                        margin-left: 0;
                    }
                }
                .v-album {
                    margin-top: pxTorem(3px);
                }
                .v-comment-bar {
                    border-bottom: #ccc 1px solid;
                    margin-left: pxTorem(15px);
                }
            }
        }

        .v-banner {
            width: 100%;
            height: pxTorem(138px);
            position: relative;
            border-bottom: pxTorem(6px) #f2f2f4 solid;
        }

        .search {
            width: 100%;
            position: absolute;
            z-index: 99;
            top: pxTorem(10px);

            .v-search {
                background: transparent;
                border: 0;

                input {
                    background: rgba(255, 255, 255, 0.9);
                }
            }
        }

        .float-release {
            width: pxTorem(58px);
            height: pxTorem(58px);
            position: fixed;
            z-index: 99;
            bottom: pxTorem(15px);
            right: pxTorem(15px);
            font-size: pxTorem(21px);
            text-align: center;
            line-height: pxTorem(58px);
            color: #fff;
            border-radius: 50%;
            background: #3395ff;
            box-shadow: 0 0 0.32rem #92c4e5;
        }
    }
</style>
