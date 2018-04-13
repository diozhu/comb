<template>
    <div class="page page-comment-info-replies">
        <ul>
            <li>
                <div class="info" @click="goReply">
                    <v-feed
                        :feedId="detail.userInfo.feedId"
                        :imgUrl="detail.userInfo.avatarId"
                        :title="detail.userInfo.title"
                        :subtitle="detail.userInfo.subtitle"
                        :desc="parseInt(detail.addtm) | specialTime"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <v-text :value="detail.comment.Content"></v-text>
                </div>
            </li>
        </ul>

        <p-comments-reply v-model="detail.replies" :detail="detail.comment"></p-comments-reply>
    </div>
</template>

<script type="text/ecmascript-6">
    import vFeed from '../../src/vendor/v-feed.vue';
    import vText from '../../src/vendor/v-text.vue';
    import vCommentBar from '../vendor/v-comment-bar.vue';
    import pCommentsReply from '../components/p-comments-reply.vue';

    export default {
        components: { vFeed, vText, pCommentsReply, vCommentBar },

        data () {
            return {
                detail: {
                    userInfo: {}
                },
                comment: null,
                forumList: []
            };
        },
        computed: {},

        created () {
            this.$logger.log('comment-info-replies.created... ');
            if (!this.$root.currentComment) {
                this.$router.go(-1);
            }
            this.detail = this.$root.currentComment;
        },

        activated () {},

        methods: {
            goReply () {
                this.$logger.log('@@@@@@@@@@@@@@@@@@@');
                // 如果是主题，直接返回parent = 0，如果有parent直接返回，如果没有，取第一级评论的commentId
//                let pid = !this.detail.CommentId ? 0 : (this.detail.Parent ? this.detail.Parent : this.detail.CommentId);
                this.$router.replace({name: 'comment-create', params: {id: this.detail.comment.Id}, query: {toid: this.detail.comment.CommentId, touid: this.detail.comment.UserId, pid: this.detail.comment.CommentId}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-comment-info-replies {
        padding-bottom: pxTorem(50px);
        overflow: auto;

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
