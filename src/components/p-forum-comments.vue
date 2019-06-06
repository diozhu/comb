<!--<template>-->
    <!--<div class="p-forum-comments">-->
        <!--&lt;!&ndash;<div :style="{clear: 'both', height: '1px'}"></div>&ndash;&gt;-->
        <!--<v-swipe-label id="vSwipeLableComments" :fixed="false">-->
            <!--<div @click="clickLabel(0)" :class="['itm', {cur: currentLab==0}]">评论{{ commentNum }}</div>-->
            <!--<div @click="clickLabel(1)" :class="['itm', {cur: currentLab==1}]">点赞{{ likeNum }}</div>-->
        <!--</v-swipe-label>-->
        <!--<v-scroll v-model="listData" :func="getList" func-type="limit" :enabled="currentLab === 0">-->
            <!--<ul v-if="currentLab == 0" class="comment-list">-->
                <!--<li v-for="(item, idx) in listData" :id="'commentLi'+idx" class="height-auto">-->
                    <!--<v-feed-->
                        <!--:feedId="item.userInfo.feedId"-->
                        <!--:imgUrl="item.userInfo.avatar"-->
                        <!--:title="item.userInfo.name"-->
                        <!--:subtitle="item.userInfo.subtitle"-->
                        <!--:desc="item.Tm | specialTime"-->
                        <!--:classes="'title small no-border'"-->
                    <!--&gt;</v-feed>-->
                    <!--<v-text-->
                        <!--:classes="'content no-border'"-->
                        <!--:value="item.comment.Content"-->
                        <!--@click.native="reply(item.comment.Id, item.UserId, $event)"-->
                    <!--&gt;</v-text>-->
                    <!--<p-forum-comments-bar-->
                        <!--:classes="'footer'"-->
                        <!--v-model="item.comment"-->
                        <!--:delCommentEnable="true"-->
                        <!--:praiseEnable="true"-->
                        <!--:commentEnable="true"-->
                        <!--@handle-del-comment="handleDelComment"-->
                    <!--&gt;</p-forum-comments-bar>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div slot="empty">-->
                <!--<div class="empty_bg"></div>-->
                <!--<p class="empty_content">快来发表第一个评论吧</p>-->
            <!--</div>-->
        <!--</v-scroll>-->
        <!--<v-scroll v-model="praiseList" :func="getPraise" func-type="limit" :enabled="currentLab === 1">-->
            <!--<ul v-if="currentLab == 1" class="praise-list">-->
                <!--<li v-for="(item, idx) in praiseList" :id="'praiseLi'+idx" class="height-auto">-->
                    <!--&lt;!&ndash;<div class="user-icon"><img :src="item.userInfo.avatarId"/></div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="user-name" v-text="item.userInfo.title"></div>&ndash;&gt;-->
                    <!--&lt;!&ndash;<div class="user-tm" v-text="item.formatedTm"></div>&ndash;&gt;-->
                    <!--<v-feed-->
                        <!--:feedId="item.userInfo.feedId"-->
                        <!--:imgUrl="item.userInfo.avatar"-->
                        <!--:title="item.userInfo.name"-->
                        <!--:subtitle="item.userInfo.subtitle"-->
                        <!--:desc="item.Tm | specialTime"-->
                        <!--:classes="'title small no-border'"-->
                    <!--&gt;</v-feed>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div slot="empty">-->
                <!--<div class="empty_bg"></div>-->
                <!--<p class="empty_content">快来点个赞吧</p>-->
            <!--</div>-->
        <!--</v-scroll>-->

        <!--<p-forum-reply-btn v-model="comment"></p-forum-reply-btn>-->
    <!--</div>-->
<!--</template>-->
<!--<script type="text/ecmascript-6">-->
    <!--import CONFIG from '../config';-->
    <!--import vFeed from 'comb-ui/src/vendors/v-feed';-->
    <!--import vText from 'comb-ui/src/vendors/v-text';-->
    <!--import vSwipeLabel from 'comb-ui/src/vendors/v-swipe-label.vue';-->
    <!--import pForumCommentsBar from '../components/p-forum-comments-bar.vue';-->
    <!--import pForumReplyBtn from '../components/p-forum-reply-btn.vue';-->
    <!--import MicroBbs from 'comb-ui/src/vendors/v-forum';-->
    <!--import { mapState } from 'vuex'; //eslint-disable-line-->
    <!--import vScroll from 'comb-ui/src/vendors/v-scroll.vue';-->

    <!--export default {-->
        <!--props: {-->
            <!--value: {-->
                <!--type: Object,-->
                <!--default: () => {}-->
            <!--},-->
            <!--topicId: {-->
                <!--type: String | Number,-->
                <!--default: 0-->
            <!--}-->
        <!--},-->

        <!--components: { vFeed, vText, pForumCommentsBar, vSwipeLabel, pForumReplyBtn, vScroll },-->

        <!--data () {-->
            <!--return {-->
                <!--labs: [-->
                    <!--{id: 0, txt: '评论'},-->
                    <!--{id: 1, txt: '点赞'}-->
                <!--],-->
                <!--currentLab: 0,-->
                <!--comment: {},-->
                <!--listData: [],        // 数据列表-->
                <!--praiseList: []-->
            <!--};-->
        <!--},-->

        <!--computed: {-->
            <!--...mapState({-->
                <!--commentNum (state) {-->
<!--//                    let str = '';-->
<!--//                    if (state.forum.forumComments[this.topicId] && state.forum.forumComments[this.topicId].CommentNum) {-->
<!--//                        str = state.forum.forumComments[this.topicId].CommentNum;-->
<!--//                    }-->
<!--//                    return str;-->
                    <!--if (!this.comment.CommentId && state.forum.forumSubjects.hasOwnProperty(this.comment.Id) && state.forum.forumSubjects[this.comment.Id].CommentNum) { // 主题的评论赞-->
                        <!--return state.forum.forumSubjects[this.comment.Id].CommentNum;-->
                    <!--} else if (state.forum.forumComments.hasOwnProperty(this.comment.CommentId) && state.forum.forumComments[this.comment.CommentId].CommentNum) { // 评论的评论赞-->
                        <!--return state.forum.forumComments[this.comment.CommentId].CommentNum;-->
                    <!--}-->
                    <!--return '';-->
                <!--},-->
                <!--likeNum (state) {-->
<!--//                    let str = '';-->
<!--//                    if (state.forum.forumComments[this.topicId] && state.forum.forumComments[this.topicId].LikeNum) {-->
<!--//                        str = state.forum.forumComments[this.topicId].LikeNum;-->
<!--//                    }-->
<!--//                    return str;-->
                    <!--if (!this.comment.CommentId && state.forum.forumSubjects.hasOwnProperty(this.comment.Id) && state.forum.forumSubjects[this.comment.Id].LikeNum) { // 主题的评论赞-->
                        <!--return state.forum.forumSubjects[this.comment.Id].LikeNum;-->
                    <!--} else if (state.forum.forumComments.hasOwnProperty(this.comment.CommentId) && state.forum.forumComments[this.comment.CommentId].LikeNum) { // 评论的评论赞-->
                        <!--return state.forum.forumComments[this.comment.CommentId].LikeNum;-->
                    <!--}-->
                    <!--return '';-->
                <!--}-->
            <!--})-->
<!--//            commentNum () {-->
<!--// //                return (this.$store.getters.forumComments[this.topicId] && this.$store.getters.forumComments[this.topicId].CommentNum) ? this.$store.getters.forumComments[this.topicId].CommentNum : '';-->
<!--//                let tmp = this.$store.commit('GET_FORUM_COMMENT', this.topicId);-->
<!--//                return tmp && tmp.CommentNum ? tmp.CommentNum : '';-->
<!--//            }-->
        <!--},-->

        <!--watch: {-->
            <!--value (val) {-->
                <!--this.comment = val;-->
            <!--},-->
            <!--comment (val) {-->
                <!--this.$emit('input', val);-->
            <!--},-->
<!--//            comment (val) {-->
<!--//                console.log('!!!watch: comment ===> ', val);-->
<!--//                // 监听评论赞对象变化，调整两个数字-->
<!--//                this.$set(this.labs[0], 'txt', '评论' + val.CommentNum);-->
<!--//                this.$set(this.labs[1], 'txt', '点赞' + val.LikeNum);-->
<!--//            },-->
            <!--'comment.LikeFlag' (val) { // 监听点赞，如果取消或者添加，处理对应的点赞列表。 Author by Dio Zhu. on 2017.2.14-->
                <!--console.log('!!!watch: item ===> ', this.comment.LikeFlag, val);-->
<!--//                // 方式一：前端处理点赞对象的新增和删除-->
<!--//                this.refreshPraiseList();-->
                <!--// 方式二：重新刷新列表-->
                <!--this.praiseList = [];-->
            <!--}-->
        <!--},-->

        <!--created () {-->
            <!--console.log('p-forum-comments.created... ');-->
            <!--this.init();-->
        <!--},-->

        <!--methods: {-->
            <!--init () {-->
<!--//                if (!this.comment.Id) this.$router.go(-1);-->
                <!--console.log('p-forum-comments.init... ');-->
                <!--this.$set(this.labs[0], 'txt', this.labs[0].txt + this.comment.CommentNum);-->
                <!--this.$set(this.labs[1], 'txt', this.labs[1].txt + this.comment.LikeNum);-->
            <!--},-->
            <!--/**-->
             <!--* 切换评论、点赞菜单-->
             <!--*/-->
            <!--clickLabel (idx) {-->
                <!--this.currentLab = idx;-->
            <!--},-->

            <!--/**-->
             <!--* 获取评论列表-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.2.14-->
             <!--*/-->
            <!--getList ({page = 1, pageNum = CONFIG.BBS_MAX}) {-->
                <!--return MicroBbs.getComments({-->
                    <!--topicId: this.topicId,-->
                    <!--page: page,-->
                    <!--pageNum: pageNum-->
                <!--}).then((res) => {-->
                    <!--console.log('===> p-forum-comments.getList: ', res);-->
                    <!--if (res.length) {-->
                        <!--res.forEach((v) => {-->
                            <!--if (v.ToUserId && v.toUserInfo.name) {-->
                                <!--// 如果有"回复"信息，补充回复样式-->
<!--//                                _self.$set(_self.listData[k].comment, 'Content', `<span class="re">回复@${_self.listData[k].toUserInfo.title}：</span>${_self.listData[k].comment.Content}`);-->
                                <!--v.Content = `回复<span class="re">@${v.toUserInfo.name}:</span>${v.Content}`;-->
                            <!--}-->

                            <!--// 评论赞对象整理-->
                            <!--v.comment = {-->
                                <!--Id: v.SubjectId,-->
                                <!--CommentId: parseInt(v.Id),-->
                                <!--UserId: v.UserId,-->
                                <!--Content: v.Content,-->
                                <!--CommentFlag: v.CommentFlag,-->
                                <!--CommentNum: v.CommentNum,-->
                                <!--LikeFlag: v.LikeFlag,-->
                                <!--LikeNum: v.LikeNum-->
                            <!--};-->
                        <!--});-->
                    <!--}-->
                    <!--this.listData = this.listData.concat(res);-->
                    <!--return Promise.resolve(res);-->
                <!--});-->
            <!--},-->

            <!--/**-->
             <!--* 获取评论信息-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.2.14-->
             <!--*/-->
            <!--getPraise ({page = 1, pageNum = CONFIG.BBS_MAX}) {-->
                <!--return MicroBbs.getPraise({-->
                    <!--topicId: this.topicId,-->
<!--//                    commentId: this.topicId,-->
                    <!--page: page,-->
                    <!--pageNum: pageNum-->
                <!--}).then((res) => {-->
                    <!--console.log('comment-info.getPraise: ', res);-->
                    <!--this.praiseList = this.praiseList.concat(res);-->
                    <!--return Promise.resolve(res);-->
                <!--});-->
            <!--},-->

            <!--/**-->
             <!--* 删除主题评论后，重新加载评论列表-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.4.14-->
             <!--*/-->
            <!--handleDelComment (res) {-->
                <!--let cmt = MicroBbs.getCurrentItem();-->
                <!--if (cmt && cmt.OPT === 1) {-->
                    <!--console.log('p-forum-comments.handleDelComment: add...');-->
                <!--} else {-->
                    <!--console.log('p-forum-comments.handleDelComment: del...');-->
                <!--}-->
                <!--MicroBbs.clearCurrentItem();-->
<!--//                this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新-->
                <!--this.listData = []; // 触发滚动条重新刷新-->
            <!--},-->

            <!--reply (commentId, userId, e) {-->
                <!--console.log('v-forum-comments.reply...', commentId, userId);-->
                <!--e.stopPropagation();-->

<!--//                this.$router.push({name: 'comment-create', query: {id: this.topicId, toid: commentId, touid: userId}});-->
                <!--this.$router.push({name: 'forum-reply', params: {forumId: this.$route.params.forumId, topicId: this.topicId}, query: {toid: commentId, touid: userId}});-->
            <!--}-->

<!--//            /**-->
<!--//             * 点赞、取消点赞之后重新整理点赞列表-->
<!--//             *              &#45;&#45; Author by Dio Zhu. on 2017.2.14-->
<!--//             */-->
<!--//            refreshPraiseList () {-->
<!--//                let _self = this;-->
<!--//                if (!this.comment) return;-->
<!--//-->
<!--//                let myPraise = _.find(this.praiseList, function (i) { return i.comment.UserId === parseInt(CONFIG.loginData.userInfo.userId); });-->
<!--//                console.log('-&#45;&#45;&ndash;&gt; ', this.comment.LikeFlag, myPraise, this.praiseList.length);-->
<!--//                if (this.comment.LikeFlag && !myPraise) { // 点赞：添加点赞数据-->
<!--//                    console.log('===>', this.comment);-->
<!--//                    this.praiseList.push({-->
<!--//                        id: this.comment.subjectId,-->
<!--//                        formatedTm: utils.formatTime(new Date()),-->
<!--//                        userInfo: CONFIG.loginData.userInfo,-->
<!--//                        comment: {UserId: parseInt(CONFIG.loginData.userInfo.userId)}-->
<!--//                    });-->
<!--//                } else if (!this.comment.LikeFlag && this.praiseList.length > 0) { // 取消点赞-->
<!--//                    this.praiseList.forEach(function (v, i) {-->
<!--//                        if (v.comment.UserId === parseInt(CONFIG.loginData.userInfo.userId)) {-->
<!--//                            _self.praiseList.splice(i, 1);-->
<!--//                        }-->
<!--//                    });-->
<!--//                }-->
<!--//                console.log('-&#45;&#45;&ndash;&gt; ', this.praiseList);-->
<!--//            },-->
<!--//-->
<!--//            reply (toId, toUserId) {-->
<!--//                console.log('[comments].p-forum-comments.reply: ', toId, toUserId);-->
<!--//                this.$router.push({name: 'comments-create', query: {subjectId: this.$route.query.subjectId, commentNum: this.comment.CommentNum, praiseNum: this.comment.LikeNum, toid: toId, touid: toUserId, isLike: this.comment.LikeFlag}});-->
<!--//            }-->
        <!--}-->
    <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
    <!--@import "../scss/variables";-->
    <!--@import "../scss/mixins";-->


    <!--.p-forum-comments {-->
        <!--width: 100%;-->
        <!--/*min-height: pxTorem(667px);*/-->
        <!--/*height: pxTorem(520px);*/-->
        <!--overflow: hidden;-->
        <!--/*padding-bottom:pxTorem(38px);*/-->

        <!--.v-swipe-label {-->
            <!--border-bottom: #f2f2f4 pxTorem(1px) solid;-->
        <!--}-->

        <!--.v-scroll-container {-->
            <!--padding-bottom: pxTorem(50px);-->
        <!--}-->

        <!--.comment-list {-->

            <!--li {-->
                <!--border-bottom: #f2f2f4 pxTorem(1px) solid;-->
            <!--}-->
        <!--}-->

        <!--.praise-list {-->
            <!--li {-->
                <!--background: #FFF;-->

               <!--/* @include box_flex;-->
                <!--@include align_items(center);-->
                <!--@include justify-content(space-between);-->

                <!--div {-->
                    <!--margin: pxTorem(5px) auto;-->

                    <!--@include flex_grow(0);-->
                    <!--@include flex_shrink(0);-->
                    <!--@include flex_basis(auto);-->
                <!--}*/-->
            <!--}-->

            <!--/*.user-icon {-->
                <!--width: pxTorem(38px);-->
                <!--height: pxTorem(38px);-->
                <!--margin-left: pxTorem(15px);-->
            <!--}-->
            <!--.user-name {-->
                <!--margin-left: pxTorem(15px);-->

                <!--@include flex_grow(1);-->
                <!--@include flex_shrink(1);-->
            <!--}-->
            <!--.user-tm {-->
                <!--margin-right: pxTorem(15px);-->
            <!--}*/-->
        <!--}-->
    <!--}-->
<!--</style>-->
