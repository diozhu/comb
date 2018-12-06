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
<!--<script>-->
    <!--import vButton from 'comb-ui/src/vendors/v-button.vue';-->
    <!--import MicroComment from 'comb-ui/src/vendors/v-comment';-->
    <!--import CONFIG from '../config';-->
    <!--import { mapState } from 'vuex'; //eslint-disable-line-->
<!--//    import {toonNotify} from '../js/core/core';-->

    <!--export default {-->
        <!--name: 'p-comment-btn',-->

        <!--components: { vButton },-->
        <!--props: {-->
            <!--value: {-->
                <!--type: Object,-->
                <!--default: () => {-->
                    <!--return {-->
                        <!--Id: ''-->
                    <!--};-->
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
                <!--currentValue: this.value,-->
<!--//                isPraise: this.praised,-->
                <!--isLock: false,-->
                <!--comments: this.commentNum,-->
                <!--praises: this.praiseNum-->
            <!--};-->
        <!--},-->
        <!--computed: {-->
            <!--...mapState({-->
                <!--xSubjects: state => state.comment.subjects,-->
                <!--formatedLikeFlag (state) {-->
                    <!--if (this.currentValue.Id && this.xSubjects.hasOwnProperty(this.currentValue.Id) && this.xSubjects[this.currentValue.Id].LikeFlag) {-->
                        <!--return this.xSubjects[this.currentValue.Id].LikeFlag;-->
                    <!--} else if (this.currentValue.hasOwnProperty('LikeFlag')) {-->
                        <!--return this.currentValue.LikeFlag;-->
                    <!--} else {-->
                        <!--return 0;-->
                    <!--}-->
                <!--}-->
            <!--}),-->
<!--//            formatedLikeFlag () {-->
<!--//                return this.currentValue && this.currentValue.LikeFlag ? 1 : 0;-->
<!--//            },-->
            <!--praiseTxt () {-->
                <!--if (this.currentValue && this.currentValue.LikeFlag) {-->
                    <!--return '已点赞';-->
                <!--} else {-->
                    <!--return '点赞';-->
                <!--}-->
            <!--}-->
        <!--},-->

        <!--watch: {-->
            <!--value (val) {-->
                <!--this.currentValue = val;-->
            <!--},-->
            <!--currentValue (val) {-->
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
            <!--console.log('p-paytype-label.mounted: ', this.commentNum, this.praiseNum);-->
        <!--},-->
        <!--methods: {-->
            <!--goToComment () {-->
<!--//                this.$router.push({name: 'comments-create', query: {subjectId: this.$route.query.subjectId, commentNum: this.comments, praiseNum: this.praises, isLike: 0}});-->
                <!--this.$router.push({name: 'comment-create', params: {id: this.currentValue.Id}, query: {}});-->
            <!--},-->
            <!--togglePraise (e) {-->
                <!--console.log('p-comments-btn.method.togglePraise...', e.target);-->
                <!--e.stopPropagation();-->

                <!--if (!this.currentValue.LikeFlag) { // 点赞-->
                    <!--MicroComment.addPraise({-->
                        <!--subjectId: this.currentValue.Id, // this.$route.params.id, // this.currentValue.SubjectId || 0,-->
                        <!--toId: this.currentValue.CommentId || 0,-->
                        <!--type: 1-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.currentValue, 'LikeFlag', true);-->
                        <!--this.$set(this.currentValue, 'LikeNum', this.currentValue.LikeNum + 1);-->
                        <!--this.$store.commit('ADD_PRAISE', this.currentValue);-->
                    <!--}).catch((e) => {-->
                        <!--console.error('post praise error: ', e);-->
                    <!--});-->
                <!--} else { // 取消点赞-->
                    <!--MicroComment.delPraise({-->
                        <!--cId: this.currentValue.CommentId || 0,-->
                        <!--subjectId: this.currentValue.Id, // this.$route.params.id, // this.currentValue.SubjectId || 0,-->
                        <!--userId: CONFIG.loginData.userInfo.userId || 0-->
                    <!--}).then((res) => {-->
                        <!--this.$set(this.currentValue, 'LikeFlag', false);-->
                        <!--this.$set(this.currentValue, 'LikeNum', this.currentValue.LikeNum - 1);-->
                        <!--this.$store.commit('DEL_PRAISE', this.currentValue);-->
                    <!--}).catch((e) => {-->
                        <!--console.error('delete praise error: ', e);-->
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
