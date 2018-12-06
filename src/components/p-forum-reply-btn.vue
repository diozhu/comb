<!--<template>-->
    <!--<div class="p-comments-btn">-->
        <!--<div class="p-comments-btn_praise" @click="togglePraise">-->
            <!--<i class="icon" :class="[{'icon-heart': !formatedLikeFlag}, {'icon-heart-o': formatedLikeFlag}]"></i>-->
            <!--<p>{{ praiseTxt }}</p>-->
        <!--</div>-->
        <!--<div class="p-comments-btn_comment">-->
            <!--<v-button @click.stop="goToComment">评论</v-button>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script type="text/ecmascript-6">-->
    <!--import vButton from 'comb-ui/src/vendors/v-button.vue';-->
    <!--import MicroBbs from 'comb-ui/src/vendors/v-forum';-->
    <!--import { mapState } from 'vuex'; //eslint-disable-line-->

    <!--export default {-->
        <!--name: 'p-comment-btn',-->

        <!--components: { vButton },-->
        <!--props: {-->
            <!--value: {-->
                <!--type: Object,-->
                <!--default: () => {-->
                    <!--return {LikeFlag: 0};-->
                <!--}-->
            <!--},-->
<!--//            praised: { // 是否已点赞-->
<!--//                type: Boolean,-->
<!--//                default: false-->
<!--//            },-->
            <!--commentNum: Number,-->
            <!--praiseNum: Number-->

        <!--},-->

        <!--data () {-->
            <!--return {-->
                <!--comment: this.value,-->
<!--//                isPraise: this.praised,-->
                <!--isLock: false,-->
                <!--comments: this.commentNum,-->
                <!--praises: this.praiseNum-->
            <!--};-->
        <!--},-->
        <!--computed: {-->
            <!--...mapState({-->
<!--//                formatedCreateDt (state) {-->
<!--//                    return (state.forum.forumComments[this.comment.Id] && state.forum.forumComments[this.comment.Id].Tm) ? utils.formatTime(state.forum.forumComments[this.comment.Id].Tm) : '';-->
<!--//                },-->
<!--//                formatedPraiseNum (state) {-->
<!--//                    return (state.forum.forumComments[this.comment.Id] && state.forum.forumComments[this.comment.Id].LikeNum) ? state.forum.forumComments[this.comment.Id].LikeNum : '赞';-->
<!--//                },-->
<!--//                formatedCommentNum (state) {-->
<!--//                    return (state.forum.forumComments[this.comment.Id] && state.forum.forumComments[this.comment.Id].CommentNum) ? state.forum.forumComments[this.comment.Id].CommentNum : '评论';-->
<!--//                },-->
                <!--formatedLikeFlag (state) {-->
                    <!--return (state.forum.forumSubjects[this.comment.Id] && state.forum.forumSubjects[this.comment.Id].LikeFlag) ? state.forum.forumSubjects[this.comment.Id].LikeFlag : 0;-->
                <!--}-->
            <!--}),-->

            <!--praiseTxt () {-->
                <!--if (this.comment && this.comment.LikeFlag) {-->
                    <!--return '已点赞';-->
                <!--} else {-->
                    <!--return '点赞';-->
                <!--}-->
            <!--}-->
        <!--},-->

        <!--watch: {-->
            <!--value (val) {-->
                <!--this.comment = val;-->
            <!--},-->
            <!--comment (val) {-->
                <!--this.$emit('input', val);-->
            <!--},-->

            <!--isZan (val) {-->
                <!--this.praise = val;-->
            <!--},-->
            <!--commentNum (val) {-->
                <!--this.comments = val;-->
            <!--},-->
            <!--praiseNum (val) {-->
                <!--this.praises = val;-->
            <!--}-->
        <!--},-->

        <!--mounted () {-->
<!--//            console.log('p-forum-reply.mounted: ', this.commentNum, this.praiseNum);-->
            <!--//            // 初始化评论赞对象-->
<!--//            console.log('=====>>> ', this.$store.getters.forumComments, this.comment);-->
<!--//            if (!this.$store.getters.forumComments.hasOwnProperty(this.comment.Id)) {-->
<!--//                this.$store.commit('SET_FORUM_COMMENT', this.comment);-->
<!--//            }-->
        <!--},-->
        <!--methods: {-->
            <!--goToComment () {-->
                <!--this.$router.push({name: 'forum-reply', params: {forumId: this.$route.params.forumId, topicId: this.comment.Id}, query: {commentNum: this.comment.CommentNum, likeNum: this.comment.LikeNum, likeFlag: this.comment.LikeFlag}});-->
            <!--},-->
            <!--togglePraise (e) {-->
                <!--console.log('p-forum-reply.method.togglePraise...');-->
                <!--e.stopPropagation();-->

                <!--if (!this.comment.LikeFlag) { // 点赞-->
                    <!--MicroBbs.addPraise({-->
                        <!--topicId: this.comment.Id || 0-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.comment, 'LikeFlag', true);-->
                        <!--this.$set(this.comment, 'LikeNum', this.comment.LikeNum + 1);-->
<!--//                        this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
                        <!--this.$store.commit('ADD_FORUM_PRAISE', this.comment);-->
                    <!--}).catch((e) => {-->
                        <!--console.error('p-forum-reply.post praise error: ', e);-->
                    <!--});-->
                <!--} else { // 取消点赞-->
                    <!--MicroBbs.delPraise({-->
                        <!--topicId: this.$route.params.topicId || 0-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.comment, 'LikeFlag', false);-->
                        <!--this.$set(this.comment, 'LikeNum', this.comment.LikeNum - 1);-->
<!--//                        this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
                        <!--this.$store.commit('DEL_FORUM_PRAISE', this.comment);-->
                    <!--}).catch((e) => {-->
                        <!--console.error('p-forum-reply.delete praise error: ', e);-->
                    <!--});-->
                <!--}-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
    <!--@import "../scss/variables";-->
    <!--@import "../scss/mixins";-->
    <!--.p-comments-btn{-->
        <!--height:pxTorem(55px);-->
        <!--width:100%;-->
        <!--position: fixed;-->
        <!--bottom: 0;-->
        <!--left:0;-->
        <!--border-top:1px solid #dddee3;-->
        <!--background:#fff;-->
        <!--z-index:999;-->

        <!--display: flex;-->
        <!--align-items: center;-->
        <!--justify-content: center;-->
        <!--color: #5C5C5C;-->

        <!--&gt; div {-->
            <!--height: 100%;-->
            <!--flex: 0 0 pxTorem(60px);-->
            <!--border-right: #dddee3 1px solid;-->

            <!--&:last-child {-->
                <!--flex: 1 1 auto;-->
                <!--border-right: 0;-->
            <!--}-->

            <!--display: flex;-->
            <!--align-items: center;-->
            <!--justify-content: center;-->
            <!--flex-direction: column;-->
        <!--}-->

        <!--.icon {-->
            <!--font-size: pxTorem(18px);-->
            <!--margin-bottom: pxTorem(7px);-->

            <!--&.icon-heart-o {-->
                <!--color: #f55151;-->
            <!--}-->
        <!--}-->
    <!--}-->

    <!--.p-comments-btn_comment {-->
        <!--padding: pxTorem(10px);-->
        <!--font-size: pxTorem(15px);-->
    <!--}-->
<!--</style>-->
