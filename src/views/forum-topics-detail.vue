<template>
    <div class="page page-forum-topics-detail">
        <ul>
            <li>
                <div class="info">
                    <v-feed
                        :feedId="detail.userInfo.feedId"
                        :imgUrl="detail.userInfo.avatar"
                        :title="detail.userInfo.name"
                        :subtitle="detail.userInfo.subtitle"
                        :desc="parseInt(detail.addtm) | specialTime"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <v-text classes="tit" :value="detail.title"></v-text>
                    <v-text classes="con" :value="detail.abstract"></v-text>
                </div>
            </li>
        </ul>
        <ul class="listview-info-img">
            <li v-for="(img, idx) in detail.pics"
                :style="{height: img.height && img.width ? parseInt(screenWidth / (img.width/img.height)) + 'px' : 'auto'}"
                @click.stop="goViewer(idx)"
            >
                <!--<img :src="img.url | thumb">-->
                <img v-lazy="img.url">
            </li>
        </ul>
        <ul class="end">
            <li>
                <p-forum-comments-bar
                    v-model="detail.comment"
                    :del-topic-enable="true"
                    :praiseEnable="true"
                    :commentEnable="true"
                ></p-forum-comments-bar>
            </li>
        </ul>

        <p-forum-comments v-model="detail.comment" :topic-id="$route.params.topicId"></p-forum-comments>
    </div>
</template>

<script type="text/ecmascript-6">
    import vFeed from '../vendor/v-feed';
    import vText from '../vendor/v-text';
    import MicroBbs from '../vendor/v-forum';
    import pForumComments from '../components/p-forum-comments.vue';
    import pForumCommentsBar from '../components/p-forum-comments-bar.vue';

    export default {
        components: { vFeed, vText, pForumComments, pForumCommentsBar },

        data () {
            return {
                detail: {
                    userInfo: {}
                },
                forumList: []
            };
        },
        computed: {
            screenWidth () {
                return document.body.offsetWidth;
            }
        },

        created () {
            this.$logger.log('forum-topics-detail.mounted... ');
        },

        activated () {
            if (this.$store.getters.position.hasOwnProperty(this.$route.query.timestamp)) { // 返回
                this.$logger.log('forum-topics-detail.activated: back!');
                // 原打算根据返回的状态是新增还是删除，对现有list进行无刷新添加和删除操作，但考虑到分页时与后端的分页参数无法统一，暂时先刷新处理。。。Author by Dio Zhu. on 2017.4.13
                let obj = MicroBbs.getCurrentItem();
                if (obj && obj.OPT) {
                    // 新增，数量+1
                    this.$store.commit('ADD_FORUM_COMMENT_NUM', {Id: this.$route.params.topicId}); // 更新主题的评论赞数量
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                } else if (obj && obj.OPT === 0) {
//                    // 删除，数量-1
//                    this.$store.commit('DEL_FORUM_COMMENT_NUM', {Id: this.$route.params.topicId}); // 更新主题的评论赞数量
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                }
                MicroBbs.clearCurrentItem(); // 还原
            } else { // 进入
                this.$logger.log('forum-topics-detail.activated: in~');
                this.init();
            }
        },

        methods: {
            init () {
                this.detail = {
                    userInfo: {},
                    comment: {}
                };

                this.$logger.log('forum-topics-detail.init... ');
                MicroBbs.getTopicDetail({
                    topicId: this.$route.params.topicId
                }).then((res) => {
                    this.$logger.log('forum-topics-detail.getTopicDetail... ', res);

                    // 图片格式整理
                    if (res.pics) {
                        let album = [];
                        res.pics.forEach((img) => {
                            if (typeof img === 'string') {
                                album.push({ url: img });
                            } else if (img.url && img.width) {
                                album.push({ url: img.url, width: img.width, height: img.height });
                            }
                        });
                        res.album = album;
                    }
                    // 评论赞对象整理
                    res.comment = {
                        Id: res.id,
                        UserId: res.userId,
                        CommentFlag: res.CommentFlag,
                        CommentNum: res.CommentNum,
                        LikeFlag: res.LikeFlag,
                        LikeNum: res.LikeNum
                    };
                    this.detail = res;
                });
            },

            goViewer (idx) {
                this.$logger.log('forum-topics-detail.goViewer: ', idx);
                this.$root.img = [];
                this.detail.pics.forEach((v, i) => {
                    this.$root.img.push(v.url);
                });
                this.$router.push({name: 'viewer', query: {idx: idx}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-forum-topics-detail {
        ul.end {
            border-bottom: #f2f2f4 pxTorem(10px) solid;
        }

        .v-scroll-container {
            height: initial!important;
            overflow: initial!important;
        }

        /*.blank {*/
            /*height: pxTorem(50px);*/
        /*}*/
    }
</style>
