<!--<template>-->
    <!--<div class="p-float-comments">-->
        <!--<div class="p-float-comments__dt">{{comment.Tm | specialTime}}</div>-->
        <!--<div class="p-float-comments__praise" @click="togglePraise">-->
            <!--<span :class="['icon', {'icon-heart cancel': !formatedLikeFlag}, {'icon-heart-o done': formatedLikeFlag}]"></span>-->
            <!--<p v-text="formatedPraiseNum"></p>-->
        <!--</div>-->
        <!--<div class="p-float-comments__comment" @click="addComment">-->
            <!--<span class="icon icon-comment"></span>-->
            <!--<p v-text="formatedCommentNum"></p>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<!--<script type="text/ecmascript-6">-->
    <!--import config from '../config';-->
    <!--import MicroComment from 'comb-ui/src/vendors/v-comment';-->
    <!--import { mapState } from 'vuex'; //eslint-disable-line-->

    <!--export default {-->
        <!--name: 'p-float-comments',-->

        <!--props: {-->
            <!--id: {-->
                <!--type: Number,-->
                <!--default: 0-->
            <!--}-->
        <!--},-->

        <!--data () {-->
            <!--return {-->
                <!--comment: {}-->
            <!--};-->
        <!--},-->

        <!--watch: {},-->

        <!--computed: {-->
            <!--...mapState({-->
                <!--xSubjects: state => state.comment.subjects,-->
                <!--formatedPraiseNum (state) {-->
                    <!--if (this.xSubjects.hasOwnProperty(this.comment.Id) && this.xSubjects[this.comment.Id].LikeNum) { // 主题的评论赞-->
                        <!--return this.xSubjects[this.comment.Id].LikeNum;-->
                    <!--}-->
                    <!--return '赞';-->
                <!--},-->
                <!--formatedCommentNum (state) {-->
                    <!--if (this.xSubjects.hasOwnProperty(this.comment.Id) && this.xSubjects[this.comment.Id].CommentNum) { // 主题的评论赞-->
                        <!--return this.xSubjects[this.comment.Id].CommentNum;-->
                    <!--}-->
                    <!--return '评论';-->
                <!--},-->
                <!--formatedLikeFlag (state) {-->
                    <!--if (this.xSubjects.hasOwnProperty(this.comment.Id) && this.xSubjects[this.comment.Id].LikeFlag) { // 主题的评论赞-->
                        <!--return this.xSubjects[this.comment.Id].LikeFlag;-->
                    <!--}-->
                    <!--return 0;-->
                <!--}-->
            <!--})-->
        <!--},-->

        <!--created () {-->
            <!--console.log('p-float-comments.created: ');-->
            <!--this.init();-->
        <!--},-->

        <!--mounted () {-->
            <!--console.log('p-float-comments.mounted: ');-->
        <!--},-->

        <!--methods: {-->
            <!--init () {-->
<!--//                MicroComment.getSubject(1002).then((res) => {-->
                <!--MicroComment.getSubject(this.id).then((res) => {-->
                    <!--console.log('p-float-comments.init: ', res);-->
                    <!--res.Id = res.SubjectId;-->
                    <!--this.comment = res;-->
                    <!--this.$store.commit('SET_COMMENT', res); // 保存评论赞对象-->
                <!--});-->
            <!--},-->

            <!--togglePraise (e) {-->
                <!--console.log('p-float-comments.method.togglePraise...', e.target);-->
                <!--e.stopPropagation();-->

                <!--if (!this.comment.LikeFlag) { // 点赞-->
                    <!--MicroComment.addPraise({-->
                        <!--subjectId: this.id || 0,-->
                        <!--toId: 0,-->
                        <!--type: 1-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.comment, 'LikeFlag', true);-->
                        <!--this.$set(this.comment, 'LikeNum', this.comment.LikeNum + 1);-->
                        <!--this.$store.commit('ADD_PRAISE', this.comment);-->
                    <!--}).catch((e) => {-->
                        <!--console.error('post praise error: ', e);-->
                    <!--});-->
                <!--} else { // 取消点赞-->
                    <!--MicroComment.delPraise({-->
                        <!--cId: this.comment.Id || 0,-->
                        <!--subjectId: this.id || 0,-->
                        <!--userId: config.loginData.userInfo.userId || 0-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.comment, 'LikeFlag', false);-->
                        <!--this.$set(this.comment, 'LikeNum', this.comment.LikeNum - 1);-->
                        <!--this.$store.commit('DEL_PRAISE', this.comment);-->
                    <!--}).catch((e) => {-->
                        <!--console.error('delete praise error: ', e);-->
                    <!--});-->
                <!--}-->
            <!--},-->

            <!--addComment (e) {-->
                <!--console.log('p-float-comments.method.addComment...');-->
                <!--e.stopPropagation();-->

                <!--this.$router.push({name: 'comments-detail', query: {subjectId: this.comment.Id, toid: this.comment.CommentId, touid: this.comment.UserId}});-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
    <!--@import "../scss/variables";-->
    <!--@import "../scss/mixins";-->

    <!--.p-float-comments {-->
        <!--position: fixed;-->
        <!--z-index: 8;-->
        <!--bottom: 0;-->
        <!--left: 0;-->
        <!--padding: pxTorem(15px) 0;-->
        <!--background: #FFF;-->
        <!--border: #898989 1px solid;-->
        <!--opacity: .7;-->

        <!--display: flex;-->
        <!--align-items: center;-->
        <!--justify-content: space-between;-->
<!--/*-->
        <!--@include box-flex;-->
        <!--@include align_items(center);-->
        <!--@include justify-content(space-between);-->
<!--*/-->

        <!--&gt; div {-->
            <!--color: #8E8E93;-->

<!--/*-->
            <!--@include flex_grow(0);-->
            <!--@include flex-shrink(0);-->
            <!--@include flex_basis(auto);-->
<!--*/-->
            <!--flex-grow: 0;-->
            <!--flex-shrink: 0;-->
            <!--flex-basis: auto;-->

            <!--&:first-child {-->
                <!--/*@include flex_grow(1);-->
                <!--@include flex-shrink(1);*/-->
                <!--flex-grow: 1;-->
                <!--flex-shrink: 1;-->
            <!--}-->

            <!--p {-->
                <!--font-size: pxTorem(12px);-->
                <!--line-height: pxTorem(15px);-->
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

    <!--.p-float-comments__dt {-->
        <!--margin-left: pxTorem(15px);-->
    <!--}-->
    <!--.p-float-comments__praise {-->
        <!--width: pxTorem(56px);-->

        <!--/*@include box-flex;-->
        <!--@include flex-direction-row;*/-->
        <!--display: flex;-->
        <!--flex-direction: row;-->

        <!--.icon.done{-->
            <!--animation: shake 500ms 1;-->
        <!--}-->
        <!--.icon.cancel{-->
            <!--animation: shake2 500ms 1;-->
        <!--}-->
        <!--&.act {-->
            <!--animation: shake 100ms 1;-->
        <!--}-->
        <!--@keyframes shake { 0%{ opacity: .5; font-size: pxTorem(12px);} 10% { opacity: 1; font-size: pxTorem(14px); } 20% { font-size: pxTorem(14.5px) } }-->
        <!--@keyframes shake2 { 0%{ opacity: .5; font-size: pxTorem(12px);} 10% { opacity: 1; font-size: pxTorem(14px); } 20% { font-size: pxTorem(14.5px) } }-->

    <!--}-->
    <!--.p-float-comments__comment {-->
        <!--width: pxTorem(56px);-->
        <!--margin-right: pxTorem(15px);-->

        <!--/*@include box-flex;-->
        <!--@include flex-direction-row;*/-->
        <!--display: flex;-->
        <!--flex-direction: row;-->
    <!--}-->
<!--</style>-->
