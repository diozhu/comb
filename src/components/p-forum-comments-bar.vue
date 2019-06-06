<!--<template>-->
    <!--<div class="v-comment-bar">-->
        <!--&lt;!&ndash;<div class="v-comment-bar__dt" v-text="formatedCreateDt"></div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div class="v-comment-bar__dt">{{comment.Tm | specialTime}}</div>&ndash;&gt;-->
        <!--<div>-->
            <!--<div class="v-comment-bar__dt"></div>-->
            <!--<div class="v-comment-bar__del" v-if="delTopicEnableTag"><p @click="delTopic">删除主题</p></div>-->
            <!--<div class="v-comment-bar__del" v-if="delCommentEnableTag"><p @click="delComment">删除评论</p></div>-->
        <!--</div>-->
        <!--<div class="v-comment-bar__praise" @click="togglePraise">-->
            <!--<span :class="['icon', {'icon-heart cancel': !formatedLikeFlag}, {'icon-heart-o done': formatedLikeFlag}]"></span>-->
            <!--<p v-text="formatedPraiseNum"></p>-->
        <!--</div>-->
        <!--<div class="v-comment-bar__comment" @click="addComment">-->
            <!--<span class="icon icon-comment"></span>-->
            <!--<p v-text="formatedCommentNum"></p>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script type="text/ecmascript-6">-->
    <!--import MicroBbs from 'comb-ui/src/vendors/v-forum';-->
    <!--import * as utils from '../js/utils/utils';-->
    <!--import { mapState } from 'vuex'; //eslint-disable-line-->

    <!--export default {-->
        <!--name: 'v-comment-bar',-->

        <!--props: {-->
            <!--id: String,-->
            <!--value: {-->
                <!--type: Object,-->
                <!--default: () => {}-->
            <!--},-->

            <!--delTopicEnable: {-->
                <!--type: Boolean,-->
                <!--default: false-->
            <!--},-->
            <!--delCommentEnable: {-->
                <!--type: Boolean,-->
                <!--default: false-->
            <!--},-->
            <!--praiseEnable: {-->
                <!--type: Boolean,-->
                <!--default: false-->
            <!--},    // 是否可以点赞-->
            <!--commentEnable: {    // 是否可以评论-->
                <!--type: Boolean,-->
                <!--default: false-->
            <!--}-->
        <!--},-->

        <!--data () {-->
            <!--return {-->
                <!--comment: this.value || {Id: 0}-->
            <!--};-->
        <!--},-->

        <!--computed: {-->
            <!--...mapState({-->
                <!--subjects: state => state.forum.forumSubjects,-->
                <!--comments: state => state.forum.forumComments,-->
                <!--formatedCreateDt (state) {-->
<!--//                    return (this.comment.Id && state.forum.forumComments[this.comment.Id] && state.forum.forumComments[this.comment.Id].Tm) ? utils.formatTime(state.forum.forumComments[this.comment.Id].Tm) : '';-->
                    <!--if (!this.comment.CommentId && this.subjects.hasOwnProperty(this.comment.Id)) { // 主题的评论赞-->
                        <!--return utils.formatTime(this.subjects[this.comment.Id].Tm);-->
                    <!--} else if (this.comments.hasOwnProperty(this.comment.CommentId)) { // 评论的评论赞-->
                        <!--return utils.formatTime(this.comments[this.comment.CommentId].Tm);-->
                    <!--}-->
                    <!--return '';-->
                <!--},-->
                <!--formatedPraiseNum (state) {-->
                    <!--if (!this.comment.CommentId && this.subjects.hasOwnProperty(this.comment.Id) && this.subjects[this.comment.Id].LikeNum) { // 主题的评论赞-->
                        <!--return this.subjects[this.comment.Id].LikeNum;-->
                    <!--} else if (this.comments.hasOwnProperty(this.comment.CommentId) && this.comments[this.comment.CommentId].LikeNum) { // 评论的评论赞-->
                        <!--return this.comments[this.comment.CommentId].LikeNum;-->
                    <!--}-->
                    <!--return '赞';-->
                <!--},-->
                <!--formatedCommentNum (state) {-->
                    <!--if (!this.comment.CommentId && this.subjects.hasOwnProperty(this.comment.Id) && this.subjects[this.comment.Id].CommentNum) { // 主题的评论赞-->
                        <!--return this.subjects[this.comment.Id].CommentNum;-->
                    <!--} else if (this.comments.hasOwnProperty(this.comment.CommentId) && this.comments[this.comment.CommentId].CommentNum) { // 评论的评论赞-->
                        <!--return this.comments[this.comment.CommentId].CommentNum;-->
                    <!--}-->
                    <!--return '评论';-->
                <!--},-->
                <!--formatedLikeFlag (state) {-->
                    <!--if (!this.comment.CommentId && this.subjects.hasOwnProperty(this.comment.Id) && this.subjects[this.comment.Id].LikeFlag) { // 主题的评论赞-->
                        <!--return this.subjects[this.comment.Id].LikeFlag;-->
                    <!--} else if (this.comments.hasOwnProperty(this.comment.CommentId) && this.comments[this.comment.CommentId].LikeFlag) { // 评论的评论赞-->
                        <!--return this.comments[this.comment.CommentId].LikeFlag;-->
                    <!--}-->
                    <!--return 0;-->
                <!--}-->
            <!--}),-->
            <!--delTopicEnableTag () { // 是否显示删除主题按钮-->
                <!--return this.delTopicEnable && (parseInt(this.comment.UserId) === parseInt(this.$store.getters.userInfo.id));-->
            <!--},-->
            <!--delCommentEnableTag () { // 是否显示删除评论按钮-->
                <!--return this.delCommentEnable && (parseInt(this.comment.UserId) === parseInt(this.$store.getters.userInfo.id));-->
            <!--}-->
        <!--},-->

        <!--watch: {-->
            <!--value (val) {-->
                <!--this.comment = val;-->
            <!--},-->
            <!--comment (val) {-->
<!--//                console.log('v-comment-bar.watch ===> comment: ', val);-->
                <!--// 初始化评论赞对象-->
                <!--if (!this.comment.CommentId && !this.subjects.hasOwnProperty(this.comment.Id)) {-->
                    <!--this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
                <!--} else if (!this.comments.hasOwnProperty(this.comment.CommentId)) {-->
                    <!--this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
                <!--}-->
                <!--this.$emit('input', val);-->
            <!--},-->
            <!--'comment.LikeFlag' (val) {-->
<!--//                console.log('v-comment-bar.watch ===> comment.LikeFlag: ', val, this.comment.LikeFlag);-->
                <!--this.$emit('input', this.comment);-->
            <!--}-->
        <!--},-->

        <!--mounted () {-->
            <!--// 初始化评论赞对象-->
            <!--if (!this.comment.CommentId && !this.subjects.hasOwnProperty(this.comment.Id)) {-->
                <!--this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
            <!--} else if (!this.comments.hasOwnProperty(this.comment.CommentId)) {-->
                <!--this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
            <!--}-->
        <!--},-->

        <!--methods: {-->
            <!--togglePraise (e) {-->
                <!--if (!this.praiseEnable) return;-->
<!--//                console.log('v-comment-bar.method.togglePraise...', e.target);-->
                <!--e.stopPropagation();-->

                <!--if (!this.comment.LikeFlag) { // 点赞-->
                    <!--MicroBbs.addPraise({-->
                        <!--topicId: this.comment.Id || 0,-->
                        <!--toId: this.comment.CommentId || 0-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.comment, 'LikeFlag', true);-->
                        <!--this.$set(this.comment, 'LikeNum', this.comment.LikeNum + 1);-->
                        <!--// 只针对主题的comment对象进行vuex处理，其他评论的comment对象不处理-->
<!--//                        if (this.comment.Id && !this.comment.CommentId) {-->
<!--//                            this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
                        <!--this.$store.commit('ADD_FORUM_PRAISE', this.comment);-->
<!--//                        }-->
                    <!--}).catch((e) => {-->
                        <!--console.error('p-forum-reply.post praise error: ', e);-->
                    <!--});-->
                <!--} else { // 取消点赞-->
                    <!--MicroBbs.delPraise({-->
                        <!--topicId: this.comment.Id || 0,-->
                        <!--commentId: this.comment.CommentId || 0-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.comment, 'LikeFlag', false);-->
                        <!--this.$set(this.comment, 'LikeNum', this.comment.LikeNum - 1);-->
                        <!--// 只针对主题的comment对象进行vuex处理，其他评论的comment对象不处理-->
<!--//                        if (this.comment.Id && !this.comment.CommentId) {-->
<!--//                            this.$store.commit('SET_FORUM_COMMENT', Object.create(this.comment));-->
                        <!--this.$store.commit('DEL_FORUM_PRAISE', this.comment);-->
<!--//                        }-->
                    <!--}).catch((e) => {-->
                        <!--console.error('p-forum-reply.delete praise error: ', e);-->
                    <!--});-->
                <!--}-->
            <!--},-->

            <!--delTopic () {-->
                <!--MicroBbs.delTopic({-->
                    <!--topicId: this.comment.Id || 0-->
                <!--}).then(res => {-->
                    <!--console.log('p-forum-comments.delTopic.SUCCESS: ', res);-->
                    <!--this.$router.go(-1);-->
                <!--}).catch(e => {-->
                    <!--console.error('p-forum-comments.delTopic.ERROR: ', e);-->
                <!--});-->
            <!--},-->

            <!--delComment () {-->
                <!--MicroBbs.delComment({-->
                    <!--topicId: this.comment.Id,-->
                    <!--commentId: this.comment.CommentId-->
                <!--}).then(res => {-->
                    <!--console.log('p-forum-comments.delComment.SUCCESS: ', res);-->
                    <!--this.$store.commit('DEL_FORUM_COMMENT_NUM', {Id: this.comment.Id}); // 提交变更-->
                    <!--this.$emit('handle-del-comment', res);-->
                <!--}).catch(e => {-->
                    <!--console.error('p-forum-comments.delComment.ERROR: ', e);-->
                <!--});-->
            <!--},-->

            <!--addComment (e) {-->
                <!--if (!this.commentEnable) return;-->
                <!--console.log('p-forum-comments.addComment...');-->
                <!--e.stopPropagation();-->

                <!--let touid = this.comment.CommentId ? this.comment.UserId : 0; // 一级评论不带touid-->
                <!--this.$router.push({name: 'forum-reply', params: {forumId: this.$route.params.forumId, topicId: this.comment.Id}, query: {toid: this.comment.CommentId, touid: touid}});-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
    <!--@import "../scss/variables";-->
    <!--@import "../scss/mixins";-->

    <!--.v-comment-bar {-->
        <!--padding: pxTorem(18px) 0;-->
        <!--background: #FFF;-->

        <!--@include box-flex;-->
        <!--@include align_items(center);-->
        <!--@include justify-content(space-between);-->

        <!--&gt; div {-->
            <!--color: #8E8E93;-->

            <!--@include flex_grow(0);-->
            <!--@include flex-shrink(0);-->
            <!--@include flex_basis(auto);-->

            <!--display: flex;-->

            <!--&:first-child {-->
                <!--@include flex_grow(1);-->
                <!--@include flex-shrink(1);-->
            <!--}-->

            <!--p {-->
                <!--font-size: pxTorem(12px);-->
                <!--line-height: pxTorem(15px);-->
            <!--}-->
        <!--}-->

        <!--.v-comment-bar__dt {-->
            <!--margin-left: pxTorem(15px);-->
            <!--flex-shrink: 0;-->
            <!--flex-grow: 0;-->
            <!--flex-basis: auto;-->
        <!--}-->

        <!--.v-comment-bar__del {-->
            <!--margin-left: pxTorem(15px);-->
            <!--flex-shrink: 1;-->
            <!--flex-grow: 1;-->
            <!--flex-basis: auto;-->
            <!--color: #3395ff;-->

            <!--p {-->
                <!--display: inline;-->
            <!--}-->
        <!--}-->

        <!--.icon {-->
            <!--width: pxTorem(15px);-->
            <!--height: pxTorem(15px);-->
            <!--font-size: pxTorem(15px);-->
            <!--margin-right: pxTorem(5px);-->

            <!--&.icon-heart-o {-->
                <!--color: #FB434F;-->
            <!--}-->
        <!--}-->
    <!--}-->
    <!--.v-comment-bar__praise {-->
        <!--width: pxTorem(56px);-->

        <!--@include box-flex;-->
        <!--@include flex-direction-row;-->

        <!--.icon.done{-->
            <!--animation: shake 500ms 1;-->
        <!--}-->
        <!--.icon.cancel{-->
            <!--animation: shake2 500ms 1;-->
        <!--}-->
        <!--&.act {-->
            <!--animation: shake 100ms 1;-->
        <!--}-->
        <!--@keyframes shake { 0%{ @include opacity(.5); font-size: pxTorem(12px);} 10% { @include opacity(1); font-size: pxTorem(14px); } 20% { font-size: pxTorem(14.5px) } }-->
        <!--@keyframes shake2 { 0%{ @include opacity(.5); font-size: pxTorem(12px);} 10% { @include opacity(1); font-size: pxTorem(14px); } 20% { font-size: pxTorem(14.5px) } }-->

    <!--}-->
    <!--.v-comment-bar__comment {-->
        <!--width: pxTorem(56px);-->
        <!--margin-right: pxTorem(15px);-->

        <!--@include box-flex;-->
        <!--@include flex-direction-row;-->
    <!--}-->
<!--</style>-->
