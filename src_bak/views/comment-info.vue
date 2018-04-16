<template>
    <div class="page page-comment-info">
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
                <v-comment-bar
                    v-model="comment"
                    :del-topic-enable="true"
                    :praiseEnable="true"
                    :commentEnable="true"
                ></v-comment-bar>
            </li>
        </ul>

        <p-comments v-model="comment" :subject-id="$route.params.id"></p-comments>
    </div>
</template>

<script type="text/ecmascript-6">
    import vFeed from '../../src/vendor/v-feed.vue';
    import vText from '../../src/vendor/v-text.vue';
    import MicroBbs from '../../src/vendor/v-forum';
    import vCommentBar from '../vendor/v-comment-bar.vue';
    import MicroComment from '../vendor/v-comment';
    import pComments from '../components/p-comments.vue';

    export default {
        components: { vFeed, vText, pComments, vCommentBar },

        data () {
            return {
                detail: {
                    userInfo: {}
                },
                comment: null,
                forumList: []
            };
        },
        computed: {
            screenWidth () {
                return document.body.offsetWidth;
            }
        },

        created () {
            this.$logger.log('comment-info.mounted... ');
        },

        activated () {
            if (this.$store.getters.position.hasOwnProperty(this.$route.query.timestamp)) { // 返回
                this.$logger.log('comment-info.activated: back!');
                // 原打算根据返回的状态是新增还是删除，对现有list进行无刷新添加和删除操作，但考虑到分页时与后端的分页参数无法统一，暂时先刷新处理。。。Author by Dio Zhu. on 2017.4.13
                let obj = MicroComment.getCurrentItem();
                if (obj && obj.OPT) {
                    // 新增，数量+1
                    this.$store.commit('ADD_COMMENT_NUM', {Id: this.$route.params.id}); // 更新话题的评论赞对象
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                } else if (obj && obj.OPT === 0) {
//                    // 删除，数量-1
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                }
                MicroComment.clearCurrentItem(); // 还原
            } else { // 进入
                this.$logger.log('comment-info.activated: in~');
                this.init();
            }
        },

        methods: {
            init () {
                this.detail = {
                    userInfo: {},
                    comment: {}
                };

                this.$logger.log('comment-info.init... ');
                // 获取详情信息，此处为论坛微服务样例
                MicroBbs.getTopicDetail({
                    topicId: this.$route.params.id
                }).then((res) => {
                    this.$logger.log('comment-info.getTopicDetail... ', res);
                    this.detail = res;

                    // 获取评论点赞对象
                    this.getComment(this.$route.params.id);
                });
            },

            /**
             * 根据SubjectId，从微服务获取评论点赞数据
             */
            getComment (id) {
                MicroComment.getSubject(id).then(res => {
                    this.$logger.log('comment-info.getComment: ', res);
                    this.comment = {
                        Id: id,
                        UserId: res.UserId || 0,
                        CommentFlag: res.CommentFlag,
                        CommentNum: res.CommentNum,
                        LikeFlag: res.LikeFlag,
                        LikeNum: res.LikeNum
                    };
                }).catch(e => {
                    this.$logger.error('comment-info.getComment: ', e);
                });
            },

            goViewer (idx) {
                this.$logger.log('comment-info.goViewer: ', idx);
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
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-comment-info {
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
