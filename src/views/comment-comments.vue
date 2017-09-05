<template>
    <div class="page page-comment-comments">
        <v-scroll v-model="listData" :func="getList">
            <ul>
                <li v-for="item in listData" @click="goInfo(item)" class="height-auto">
                    <v-feed
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.name"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <v-text :value="item.title"></v-text>
                    <v-text :value="item.abstract"></v-text>
                    <v-text :value="item.Content" class="con"></v-text>
                    <v-text :value="item.Tm | specialTime" class="right"></v-text>
                </li>
            </ul>
        </v-scroll>

    </div>
</template>

<script type="text/ecmascript-6">
    import vFeed from '../vendor/v-feed';
    import MicroComment from '../vendor/v-comment';
    import _ from '../../static/js/vendor/underscore.min';
    import * as api from '../js/core/api';
    import vScroll from '../vendor/v-scroll.vue';

    export default {
        components: { vFeed, vScroll },

        data () {
            return {
                listData: []
            };
        },

        mounted () {
            this.$logger.log('comment-comments.mounted... ');
            this.subjectId = this.$route.params.forumId || 0;
        },

        methods: {
            getList ({ page, pageNum }) {
                return MicroComment.getUserComments({
                    userId: this.$store.getters.userInfo.id,
                    subjectId: this.subjectId,
                    page: page,
                    pageNum: pageNum
                }).then((res) => {
                    this.$logger.log('comment-comments.getList: SUCCESS, ', res);
                    if (res.length) {
                        res.forEach(v => {
                            v.userInfo = {
                                avatar: '',
                                name: '',
                                subtitle: ''
                            };
                        });
                        this.listData = this.listData.concat(res); // 整理list数据

                        this.fillSubject(res); // 补充话题数据
                        this.fillUserInfo(res); // 补充用户信息
                    }
                    return Promise.resolve(res);
                });
            },

            fillSubject (dat) {
                let ids = [];
                dat.forEach(v => {
//                    if (!ids.includes(v.SubjectId)) ids.push(v.SubjectId);
                    if (!_.contains(ids, v.SubjectId)) ids.push(v.SubjectId);
                });

                return api._getSubjectByIds({ids: ids}).then(res => {
                    this.$logger.log('comment-comments.fillSubject: ', res);
                    this.listData.forEach((v, i) => {
                        if (!v.title && res.dataList.hasOwnProperty(v.SubjectId)) this.$set(this.listData[i], 'title', res.dataList[v.SubjectId].title);
                        if (!v.abstract && res.dataList.hasOwnProperty(v.SubjectId)) this.$set(this.listData[i], 'abstract', res.dataList[v.SubjectId].abstract);
                        if (res.dataList.hasOwnProperty(v.SubjectId)) this.$set(this.listData[i], 'userInfo', res.dataList[v.SubjectId].userInfo);
                    });
                });
            },

            fillUserInfo (dat) {
                let ids = [];
                dat.forEach(v => {
//                    if (v.UserId && !ids.includes(v.UserId)) ids.push(v.UserId);
//                    if (v.ToUserId && !ids.includes(v.ToUserId)) ids.push(v.ToUserId);
                    if (v.UserId && !_.contains(ids, v.UserId)) ids.push(v.UserId);
                    if (v.ToUserId && !_.contains(ids, v.ToUserId)) ids.push(v.ToUserId);
                });

                return api.getUsers({
                    uids: ids
                }).then(res => {
                    this.listData.forEach((v, i) => {
                        if (v.UserId && !v.UserInfo && res.hasOwnProperty(v.UserId)) this.$set(this.listData[i], 'UserInfo', res[v.UserId]);
                        if (v.ToUserId && !v.ToUserInfo && res.hasOwnProperty(v.ToUserId)) {
                            this.$set(this.listData[i], 'ToUserInfo', res[v.ToUserId]);
                            this.$set(this.listData[i], 'Content', `回复<span>@${res[v.ToUserId].title}</span>: ${v.Content}`);
                        }
                    });
                });
            },

            goInfo (item) {
                this.$router.push({name: 'comment-info', params: {id: item.SubjectId}, query: {}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-comment-comments {
        li {
            padding: pxTorem(10px) 0;
            border-bottom: #f2f2f4 pxTorem(5px) solid;

            .con {
                margin-top: pxTorem(8px);
                padding-top: pxTorem(8px);
                border-top: #898989 1px dashed;
            }
        }

        .v-text span {
            font-size: pxTorem(15px);
            color: #007AFF;
        }

        .right p {
            width: 100%;
            margin: 0;
            padding-right: pxTorem(15px);
            text-align: right;
        }
    }
</style>
