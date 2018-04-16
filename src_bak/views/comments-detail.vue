<template>
    <div class="page page-comments-detail">

        <!--<p-comments v-model="comment" :subject-id="$route.query.subjectId"></p-comments>-->
        <p-comments-replies v-model="comment" :subject-id="$route.query.subjectId"></p-comments-replies>
    </div>
</template>

<script type="text/babel">
    import vFeed from '../../src/vendor/v-feed';
    import vText from '../../src/vendor/v-text';
    import vCommentBar from '../vendor/v-comment-bar';
    import MicroComment from '../vendor/v-comment';
//    import pComments from '../components/p-comments.vue';
    import pCommentsReplies from '../components/p-comments-replies.vue';

    export default {
        name: 'page-comments-detail',

        components: { vFeed, vText, vCommentBar, pCommentsReplies },

        data () {
            return {
                comment: null,
                subjectId: parseInt(this.$route.query.subjectId || 0),
//                subjectId: parseInt(this.$route.params.id || 0),
                item: null
            };
        },

        watch: {

        },

        activated () {
            if (this.$router.direct()) {
                this.init();
            } else {
                let obj = MicroComment.getCurrentItem();
                if (obj && obj.OPT) {
                    // 新增，数量+1
                    this.$store.commit('ADD_COMMENT_NUM', {Id: this.subjectId}); // 更新话题的评论赞对象
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                } else if (obj && obj.OPT === 0) {
//                    // 删除，数量-1
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                }
                MicroComment.clearCurrentItem(); // 还原
            }
        },

        created () {
            this.$logger.log('comment-info created... ');
            this.init();
        },

        mounted () {
            this.$logger.log('comment-info mounted... ');
        },

        methods: {
            init () {
                this.$logger.log('comment-info init... ');
//                this.item = MicroComment.getCurrentItem();
                MicroComment.getSubject(this.$route.query.subjectId).then(res => {
                    this.$logger.log('comment-info.getComment: ', res);
                    this.comment = {
                        Id: parseInt(this.$route.query.subjectId) || 0,
                        UserId: res.UserId || 0,
                        CommentFlag: res.CommentFlag,
                        CommentNum: parseInt(res.CommentNum) || 0,
                        LikeFlag: res.LikeFlag,
                        LikeNum: parseInt(res.LikeNum) || 0
                    };
                }).catch(e => {
                    this.$logger.error('comment-info.getComment: ', e);
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-comments-detail {

    }
</style>
