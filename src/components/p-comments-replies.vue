<!--<template>-->
    <!--<div class="p-comments-replies">-->
        <!--<v-scroll v-model="listData" :func="getList" func-type="limit">-->
            <!--<ul class="comment-list">-->
                <!--<li v-for="(item, idx) in listData" :id="'commentLi'+idx" class="height-auto">-->
                    <!--<v-feed-->
                        <!--:feedId="item.userInfo.feedId"-->
                        <!--:imgUrl="item.userInfo.avatarId"-->
                        <!--:title="item.userInfo.title"-->
                        <!--:subtitle="item.userInfo.subtitle"-->
                        <!--:desc="item.comment.Tm | specialTime"-->
                        <!--:classes="'title small no-border'"-->
                    <!--&gt;</v-feed>-->
                    <!--<v-text-->
                        <!--:classes="'content no-border'"-->
                        <!--:value="item.comment.Content"-->
                        <!--@click.native="reply(item)"-->
                    <!--&gt;</v-text>-->
                    <!--<v-comment-bar-->
                        <!--:classes="'footer'"-->
                        <!--v-model="item.comment"-->
                        <!--:praiseEnable="true"-->
                        <!--:commentEnable="true"-->
                        <!--@handle-del-comment="handleDelComment"-->
                    <!--&gt;</v-comment-bar>-->
                    <!--<p-comments-reply v-if="replyMode" v-model="item.replies" :detail="item.comment" :total-show="true" :limit="5">-->
                        <!--&lt;!&ndash;<router-link :to="{ name: 'comment-info-replies', params: { id: comment.Id } }" tag="p" slot="total">查看全部评价 ></router-link>&ndash;&gt;-->
                        <!--<p slot="total" @click="goDetail(item)">查看全部评价 ></p>-->
                    <!--</p-comments-reply>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div slot="empty" class="is_empty">-->
                <!--<div class="empty_bg"></div>-->
                <!--<p class="empty_content">快来发表第一个评论吧</p>-->
            <!--</div>-->
        <!--</v-scroll>-->
        <!--<p-comments-btn v-model="comment"></p-comments-btn>-->
    <!--</div>-->
<!--</template>-->
<!--<script type="text/ecmascript-6">-->
    <!--import CONFIG from '../config';-->
    <!--import * as api from '../js/core/api';-->
    <!--import * as utils from '../js/utils/utils';-->
    <!--import vFeed from 'comb-ui/src/vendors/v-feed';-->
    <!--import vText from 'comb-ui/src/vendors/v-text';-->
    <!--import vCommentBar from 'comb-ui/src/vendors/v-comment-bar';-->
    <!--import MicroComment from 'comb-ui/src/vendors/v-comment';-->
    <!--import _ from '../../static/js/vendor/underscore.min';-->
    <!--import vSwipeLabel from 'comb-ui/src/vendors/v-swipe-label.vue';-->
    <!--import pCommentsBtn from '../components/p-comments-btn.vue';-->
    <!--import { mapState } from 'vuex'; //eslint-disable-line-->
    <!--import pCommentsReply from '../components/p-comments-reply.vue';-->
    <!--import vScroll from 'comb-ui/src/vendors/v-scroll.vue';-->

    <!--export default {-->
        <!--components: { vFeed, vText, vCommentBar, vSwipeLabel, pCommentsBtn, pCommentsReply, vScroll },-->

        <!--props: {-->
            <!--value: {-->
                <!--type: Object,-->
                <!--default: () => {-->
                    <!--return {-->
                        <!--Id: 0,-->
                        <!--CommentNum: 0,-->
                        <!--ListNum: 0-->
                    <!--};-->
                <!--}-->
            <!--},-->
            <!--subjectId: {-->
                <!--type: Number | String,-->
                <!--default: 0-->
            <!--},-->
            <!--replyMode: {-->
                <!--type: Boolean,-->
                <!--default: true-->
            <!--},-->
            <!--limit: {-->
                <!--type: Number,-->
                <!--default: 5-->
            <!--}-->
        <!--},-->

        <!--data () {-->
            <!--return {-->
                <!--comment: {-->
                    <!--Id: 0,-->
                    <!--CommentNum: 0,-->
                    <!--LikeNum: 0-->
                <!--},-->
                <!--listData: []        // 数据列表-->
            <!--};-->
        <!--},-->
        <!--computed: {},-->

        <!--watch: {-->
            <!--value (val) {-->
                <!--this.comment = val;-->
            <!--}-->
        <!--},-->

        <!--mounted () {-->
            <!--console.log('p-comments-replies.mounted: ');-->
        <!--},-->
        <!--methods: {-->
            <!--/**-->
             <!--* 获取评论列表-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.2.14-->
             <!--*/-->
            <!--getList ({offset = 0, limit = CONFIG.limit}) {-->
                <!--return MicroComment.getCommentsReply({-->
<!--//                    subjectId: this.$route.params.id, // this.subjectId,-->
                    <!--subjectId: this.subjectId,-->
                    <!--offset: offset,-->
                    <!--limit: limit-->
                <!--}).then((res) => {-->
                    <!--console.log('===> comment-info.getList: ', res);-->
                    <!--let len = res && res.length || 0;-->
                    <!--if (res && len > 0) {-->
                        <!--res.forEach((v) => { // 整理list数据-->
                            <!--v.Cmt.CommentId = v.Cmt.Id;-->
                            <!--v.Cmt.Id = v.Cmt.SubjectId;-->
                            <!--v.Child.forEach((w, l) => {-->
                                <!--w.userInfo = {title: ''};-->
                                <!--if (w.ToUserId) w.toUserInfo = {title: ''};-->
                                <!--w.CommentId = w.Id;-->
                                <!--w.Id = w.SubjectId;-->
                            <!--});-->
                            <!--this.listData.push({ id: v.Cmt.SubjectId, userInfo: {feedId: ''}, comment: v.Cmt, replies: v.Child });-->
                        <!--});-->

                        <!--this.getUserInfo(res); // 补全用户信息-->
                    <!--}-->
                    <!--return Promise.resolve(res);-->
                <!--});-->
            <!--},-->
            <!--/**-->
             <!--* 补全用户信息-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.2.14-->
             <!--*/-->
            <!--getUserInfo (lis, isPraise) {-->
                <!--if (!lis) return;-->

                <!--let _self = this,-->
                    <!--ids = [];-->
                <!--lis.forEach(function (v) {-->
                    <!--if (v.Cmt.UserId && !ids.includes(v.Cmt.UserId)) ids.push(v.Cmt.UserId);-->
                    <!--if (v.Cmt.ToUserId && !ids.includes(v.Cmt.ToUserId)) ids.push(v.Cmt.ToUserId);-->
                    <!--v.Child.forEach(function (w) {-->
                        <!--if (w.UserId && !ids.includes(w.UserId)) ids.push(w.UserId);-->
                        <!--if (w.ToUserId && !ids.includes(w.ToUserId)) ids.push(w.ToUserId);-->
                    <!--});-->
                <!--});-->

                <!--return api.vGetUserList({uids: ids}).then(function (res) {-->
                    <!--console.log('[comments].getUserInfo: ', res);-->
                    <!--_self.listData.forEach(function (v, k) { // 匹配用户数据-->
                        <!--if (!v.userInfo || !v.userInfo.title) {-->
                            <!--let user = _.find(res, function (i) { return parseInt(i.userId) === v.comment.UserId; }) || {avatarId: '', title: '未知用户'};-->
                            <!--user.avatarId = utils.getThumbnail(user.avatarId); // 头像缩略图处理-->
                            <!--_self.$set(_self.listData[k], 'userInfo', user);-->
                        <!--}-->
                        <!--if (v.comment.ToUserId && (!v.toUserInfo || !v.toUserInfo.title)) {-->
                            <!--_self.$set(_self.listData[k], 'toUserInfo', _.find(res, function (i) { return parseInt(i.userId) === v.comment.ToUserId; }) || {avatarId: '', title: '未知用户'});-->
                            <!--// 如果有"回复"信息，补充回复样式-->
                            <!--_self.$set(_self.listData[k].comment, 'Content', `<span class="re">回复@${_self.listData[k].toUserInfo.title}：</span>${_self.listData[k].comment.Content}`);-->
                        <!--}-->

                        <!--v.replies.forEach((w, l) => {-->
                            <!--if (!w.userInfo || !w.userInfo.title) {-->
                                <!--let user = _.find(res, function (i) { return parseInt(i.userId) === w.UserId; }) || {avatarId: '', title: '未知用户'};-->
                                <!--user.avatarId = utils.getThumbnail(user.avatarId); // 头像缩略图处理-->
                                <!--_self.$set(_self.listData[k].replies[l], 'userInfo', user);-->
                            <!--}-->
                            <!--if (w.ToUserId && (!w.toUserInfo || !w.toUserInfo.title)) {-->
                                <!--_self.$set(_self.listData[k].replies[l], 'toUserInfo', _.find(res, function (i) { return parseInt(i.userId) === w.ToUserId; }) || {avatarId: '', title: '未知用户'});-->
<!--//                                // 如果有"回复"信息，补充回复样式-->
<!--//                                _self.$set(_self.listData[k].comment, 'Content', `<span class="re">回复@${_self.listData[k].toUserInfo.title}：</span>${_self.listData[k].comment.Content}`);-->
                            <!--}-->
                        <!--});-->
                    <!--});-->
                    <!--console.log('[comments].getUserInfo: ', _self.listData);-->
                <!--});-->
            <!--},-->

            <!--/**-->
             <!--* 删除主题评论后，重新加载评论列表-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.4.14-->
             <!--*/-->
            <!--handleDelComment (res) {-->
                <!--let cmt = MicroComment.getCurrentItem();-->
                <!--if (cmt && cmt.OPT === 1) {-->
                    <!--console.log('p-comments.handleDelComment: add...');-->
                <!--} else {-->
                    <!--console.log('p-comments.handleDelComment: del...');-->
                <!--}-->
                <!--MicroComment.clearCurrentItem();-->
<!--//                this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新-->
                <!--this.listData = []; // 触发滚动条重新刷新-->
            <!--},-->

            <!--reply (item) {-->
<!--//                this.$router.push({name: 'comments-create', query: {subjectId: this.$route.query.subjectId, commentNum: this.comment.CommentNum, praiseNum: this.comment.LikeNum, toid: toId, touid: toUserId, isLike: this.comment.LikeFlag}});-->
<!--//                this.$router.push({name: 'comment-create', params: {id: this.$route.params.id}, query: {toid: item.comment.CommentId, touid: item.comment.UserId}});-->
                <!--let pid = !item.comment.CommentId ? 0 : (item.comment.Parent ? item.comment.Parent : item.comment.CommentId);-->
                <!--console.log('[comments].p-comments.reply: ', item, pid);-->
                <!--this.$router.push({name: 'comment-create', params: {id: this.subjectId}, query: {toid: item.comment.CommentId, touid: item.comment.UserId, pid: pid}});-->
            <!--},-->

            <!--goDetail (item) {-->
                <!--this.$root.currentComment = item; // 暂存-->
                <!--this.$router.push({name: 'comment-info-replies', params: {id: this.subjectId}, query: {toid: item.comment.CommentId, touid: item.comment.UserId}});-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
    <!--@import "../scss/variables";-->
    <!--@import "../scss/mixins";-->
    <!--/* 列表显示的回复样式 */-->
    <!--.p-comments-replies {-->

    <!--}-->
<!--</style>-->
