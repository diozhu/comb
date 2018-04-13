<template>
    <div class="page page-comment-list">
        <v-scroll v-model="listData" :func="getList" func-type="section">
            <ul>
                <li v-for="item in listData" @click="goInfo(item)" class="height-auto">
                    <v-feed
                        :feedId="item.userInfo.feedId"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.title"
                        :subtitle="item.userInfo.subtitle"
                        :classes="'title small no-border'"
                    ></v-feed>
                    <v-text
                        :classes="'content'"
                        :value="item.title"
                    ></v-text>
                    <v-comment-bar
                        :classes="'footer'"
                        v-model="item.comment"
                    ></v-comment-bar>
                </li>
            </ul>
        </v-scroll>
    </div>
</template>

<script>
    import vFeed from '../../src/vendor/v-feed';
    import vText from '../../src/vendor/v-text';
    import vCommentBar from '../vendor/v-comment-bar';
    import MicroComment from '../vendor/v-comment';
    import MicroBbs from '../../src/vendor/v-forum';
    import vScroll from '../../src/vendor/v-scroll.vue';

    export default {
        components: { vFeed, vText, vCommentBar, vScroll },

        data () {
            return {
                listData: []
            };
        },

        mounted () {
            this.$logger.log('comment-list mounted... ');
//            this.getList();
        },

        activated () {
            this.$logger.log('comment-list activated... ');
        },

        deactivated () {
            this.$logger.log('comment-list deactivated... ');
        },

        methods: {
            // 仅借用论坛微服务获取一个临时list，实际项目中自行修改！
            getList ({ page, pageNum }) {
                return MicroBbs.getTopicList({
                    forumId: this.$route.params.forumId || 0,
                    page: page,
                    pageNum: pageNum
                }).then((res) => {
                    this.$logger.log('forum-list.methods.getList: SUCCESS, ', res);
                    if (res.length) {
                        this.listData = this.listData.concat(res); // 整理list数据

                        this.bindCommentInfo(res); // 添加评论点赞数据
                    }
                    return Promise.resolve(res);
                });
            },

            /**
             * 添加评论点赞微服务数据
             *              -- Author by Dio Zhu. on 2017.2.10
             */
            bindCommentInfo (dat) {
                MicroComment.getSubjectList(dat).then((res) => {
                    this.$logger.log('MicroComment.getSubjectList: ', res);

                    this.listData.forEach((v, i) => {
                        if (!v.comment || (!v.comment.CommentNum && !v.comment.LikeNum)) {
                            let obj = {SubjectId: v.id, CommentNum: 0, LikeNum: 0}; // 设定默认值，避免绑定报错
                            // 匹配：微服务的SubjectId == 本地记录的id
                            res.forEach((o) => {
                                if (parseInt(o.SubjectId) === parseInt(v.id)) obj = o;
                            });
                            obj.Id = obj.SubjectId;
                            this.$set(this.listData[i], 'comment', obj); // 绑定
//                                    v.comment.Tm = v.dt; // 创建时间，这里是测试数据。。。
                        }
                    });
                    this.$logger.log('MicroComment.getSubjectList: ', this.listData);
                });
            },

            goInfo (item) {
                this.$logger.log('comment-list.goInfo... ');
//                this.$root.currentItem = item;
//                this.$parent.currentItem = item;
                MicroComment.setCurrentItem(item); // 保存当前操作的评论点赞数据对象
//                this.$router.push({name: 'comment-info', params: {id: item.id}});
                this.$router.push({name: 'comment-info', params: {id: item.id}, query: {}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-comment-list {
        h2 {

        }

        ul {

            li {

                border-bottom: #f2f2f4 pxTorem(10px) solid;
                &:last-child {
                    border-bottom: #f2f2f4 pxTorem(1px) solid;
                }
            }
        }
    }
</style>
