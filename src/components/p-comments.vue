<!--<template>-->
    <!--<div class="p-comments">-->
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
                        <!--:delCommentEnable="true"-->
                        <!--:praiseEnable="true"-->
                        <!--:commentEnable="true"-->
                        <!--@handle-del-comment="handleDelComment"-->
                    <!--&gt;</v-comment-bar>-->
                    <!--<p-comments-reply v-if="replyMode" v-model="item.replies" :limit="5"></p-comments-reply>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div slot="empty" class="is_empty">-->
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
                        <!--:imgUrl="item.userInfo.avatarId"-->
                        <!--:title="item.userInfo.title"-->
                        <!--:subtitle="item.userInfo.subtitle"-->
                        <!--:desc="item.formatedTm"-->
                        <!--:classes="'title small no-border'"-->
                    <!--&gt;</v-feed>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<div class="is_empty1" slot="empty">-->
                <!--<div class="empty_bg"></div>-->
                <!--<p class="empty_content">快来点个赞吧</p>-->
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
        <!--name: 'p-comments',-->

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
                <!--default: false-->
            <!--}-->
        <!--},-->

        <!--components: { vFeed, vText, vCommentBar, vSwipeLabel, pCommentsBtn, pCommentsReply, vScroll },-->

        <!--data () {-->
            <!--return {-->
                <!--labs: [-->
                    <!--{id: 0, txt: '评论'},-->
                    <!--{id: 1, txt: '点赞'}-->
                <!--],-->
                <!--currentLab: 0,-->
                <!--comment: {-->
                    <!--Id: 0,-->
                    <!--CommentNum: 0,-->
                    <!--LikeNum: 0-->
                <!--},-->
                <!--listData: [],        // 数据列表-->
                <!--praiseList: []-->
            <!--};-->
        <!--},-->

        <!--computed: {-->
            <!--...mapState({-->
                <!--commentNum (state) {-->
                    <!--if (!this.comment.CommentId && state.comment.subjects.hasOwnProperty(this.comment.Id) && state.comment.subjects[this.comment.Id].CommentNum) { // 主题的评论赞-->
                        <!--return state.comment.subjects[this.comment.Id].CommentNum;-->
                    <!--} else if (state.comment.comments.hasOwnProperty(this.comment.CommentId) && state.comment.comments[this.comment.CommentId].CommentNum) { // 评论的评论赞-->
                        <!--return state.comment.comments[this.comment.CommentId].CommentNum;-->
                    <!--}-->
                    <!--return '';-->
                <!--},-->
                <!--likeNum (state) {-->
                    <!--if (!this.comment.CommentId && state.comment.subjects.hasOwnProperty(this.comment.Id) && state.comment.subjects[this.comment.Id].LikeNum) { // 主题的评论赞-->
                        <!--return state.comment.subjects[this.comment.Id].LikeNum;-->
                    <!--} else if (state.comment.comments.hasOwnProperty(this.comment.CommentId) && state.comment.comments[this.comment.CommentId].LikeNum) { // 评论的评论赞-->
                        <!--return state.comment.comments[this.comment.CommentId].LikeNum;-->
                    <!--}-->
                    <!--return '';-->
                <!--}-->
            <!--})-->
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
            <!--console.log('p-comments.created... ');-->
            <!--this.init();-->
        <!--},-->

        <!--methods: {-->
            <!--init () {-->
                <!--console.log('p-comments.init... ', this.comment);-->
<!--//                if (!this.subjectId) {-->
<!--//                    MicroComment.getSubject(this.$route.params.id).then(res => {-->
<!--//                        let CommentNum = res.CommentNum ? ' ' + res.CommentNum + '' : '',-->
<!--//                            LikeNum = res.LikeNum ? ' ' + res.LikeNum + '' : '';-->
<!--//                        this.comment = res;-->
<!--//                        this.$set(this.labs[0], 'txt', this.labs[0].txt + CommentNum);-->
<!--//                        this.$set(this.labs[1], 'txt', this.labs[1].txt + LikeNum);-->
<!--//                    });-->
<!--//                }-->
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
            <!--getList ({offset = 0, limit = CONFIG.limit}) {-->
                <!--return MicroComment.getComments({-->
<!--//                    subjectId: this.$route.params.id, // this.subjectId,-->
                    <!--subjectId: this.subjectId,-->
                    <!--offset: offset,-->
                    <!--limit: limit-->
                <!--}).then((res) => {-->
                    <!--console.log('===> comment-info.getList: ', res);-->
                    <!--let len = res.length;-->
                    <!--if (res && len > 0) {-->
                        <!--res.forEach((v) => { // 整理list数据-->
                            <!--v.CommentId = v.Id;-->
                            <!--v.Id = v.SubjectId;-->
                            <!--this.listData.push({ id: v.SubjectId, userInfo: {feedId: ''}, comment: v });-->
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
                    <!--if (!_.contains(ids, v.UserId)) {-->
                        <!--ids.push(v.UserId);-->
                    <!--}-->
                    <!--if (v.ToUserId && !_.contains(ids, v.ToUserId)) {-->
                        <!--ids.push(v.ToUserId);-->
                    <!--}-->
                <!--});-->

                <!--return api.vGetUserList({uids: ids}).then(function (res) {-->
                    <!--console.log('[comments].getUserInfo: ', res);-->
                    <!--if (!isPraise) { // 评论的用户信息-->
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
                        <!--});-->
                        <!--console.log('[comments].getUserInfo: ', _self.listData);-->
                    <!--} else { // 点赞的用户信息-->
                        <!--_self.praiseList.forEach(function (v, k) { // 匹配用户数据-->
                            <!--if (!v.userInfo || !v.userInfo.title) {-->
                                <!--let user = _.find(res, function (i) { return parseInt(i.userId) === v.comment.UserId; }) || {avatarId: '', title: '未知用户'};-->
                                <!--user.avatarId = utils.getThumbnail(user.avatarId); // 头像缩略图处理-->
                                <!--_self.$set(_self.praiseList[k], 'userInfo', user);-->
                            <!--}-->
                            <!--if (v.comment.ToUserId && (!v.toUserInfo || !v.toUserInfo.title)) {-->
                                <!--_self.$set(_self.praiseList[k], 'toUserInfo', _.find(res, function (i) { return parseInt(i.userId) === v.comment.ToUserId; }) || {avatarId: '', title: '未知用户'});-->
                            <!--}-->
                        <!--});-->
                        <!--console.log('[comments].getUserInfo: ', _self.praiseList);-->
                    <!--}-->
                <!--});-->
            <!--},-->

            <!--/**-->
             <!--* 获取评论信息-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.2.14-->
             <!--*/-->
            <!--getPraise ({offset = 0, limit = CONFIG.limit}) {-->
                <!--return MicroComment.getPraise({-->
<!--//                    subjectId: this.$route.params.id, // this.subjectId,-->
                    <!--subjectId: this.subjectId,-->
                    <!--offset: offset,-->
                    <!--limit: limit-->
                <!--}).then((res) => {-->
                    <!--console.log('comment-info.getPraise: ', res);-->
                    <!--let len = (res && res.length) ? res.length : 0;-->
                    <!--if (res && len > 0) {-->
                        <!--if (this.praiseOffset === 0) this.praiseList = []; // 因为watch了点赞状态，手动添加了假数据，这里根据列表长度进行覆盖，避免重复数据。 Author by Dio Zhu. on 2017.2.15-->

                        <!--res.forEach((v) => { // 整理list数据-->
                            <!--this.praiseList.push({ id: v.subjectId, formatedTm: utils.formatTime(v.Tm), userInfo: {feedId: ''}, comment: v });-->
                        <!--});-->

                        <!--this.getUserInfo(res, true); // 补全用户信息-->
                    <!--}-->
                    <!--return Promise.resolve(res);-->
                <!--});-->
            <!--},-->

            <!--/**-->
             <!--* 点赞、取消点赞之后重新整理点赞列表-->
             <!--*              &#45;&#45; Author by Dio Zhu. on 2017.2.14-->
             <!--*/-->
            <!--refreshPraiseList () {-->
                <!--let _self = this;-->
                <!--if (!this.comment) return;-->

                <!--let myPraise = _.find(this.praiseList, function (i) { return i.comment.UserId === parseInt(CONFIG.loginData.userInfo.userId); });-->
                <!--console.log('-&#45;&#45;&ndash;&gt; ', this.comment.LikeFlag, myPraise, this.praiseList.length);-->
                <!--if (this.comment.LikeFlag && !myPraise) { // 点赞：添加点赞数据-->
                    <!--console.log('===>', this.comment);-->
                    <!--this.praiseList.push({-->
                        <!--id: this.comment.subjectId,-->
                        <!--formatedTm: utils.formatTime(new Date()),-->
                        <!--userInfo: CONFIG.loginData.userInfo,-->
                        <!--comment: {UserId: parseInt(CONFIG.loginData.userInfo.userId)}-->
                    <!--});-->
                <!--} else if (!this.comment.LikeFlag && this.praiseList.length > 0) { // 取消点赞-->
                    <!--this.praiseList.forEach(function (v, i) {-->
                        <!--if (v.comment.UserId === parseInt(CONFIG.loginData.userInfo.userId)) {-->
                            <!--_self.praiseList.splice(i, 1);-->
                        <!--}-->
                    <!--});-->
                <!--}-->
                <!--console.log('-&#45;&#45;&ndash;&gt; ', this.praiseList);-->
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
                <!--// 如果是主题，直接返回parent = 0，如果有parent直接返回，如果没有，取第一级评论的commentId-->
                <!--let pid = !item.comment.CommentId ? 0 : (item.comment.Parent ? item.comment.Parent : item.comment.CommentId);-->
                <!--console.log('[comments].p-comments.reply: ', item, pid);-->
                <!--this.$router.push({name: 'comment-create', params: {id: this.subjectId}, query: {toid: item.comment.CommentId, touid: item.comment.UserId, pid: pid}});-->
            <!--}-->
        <!--}-->
    <!--};-->
<!--</script>-->
<!--<style rel="stylesheet/scss" lang="scss">-->
    <!--@import "../scss/variables";-->
    <!--@import "../scss/mixins";-->


    <!--.p-comments {-->
        <!--width: 100%;-->
        <!--/*height: 100%;*/-->
        <!--/*min-height: pxTorem(667px);*/-->
        <!--/*height: pxTorem(667px);*/-->
        <!--/*overflow: hidden;*/-->
        <!--padding-bottom:pxTorem(38px);-->

        <!--.v-swipe-label {-->
            <!--border-bottom: #f2f2f4 pxTorem(1px) solid;-->
        <!--}-->

        <!--.v-scroll-container {-->
            <!--padding-bottom: pxTorem(20px);-->
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
