<template>
    <div class="page page-comment-list">
        <v-scroll v-model="listData" :func="getList" func-type="section">
            <ul>
                <li v-for="item in listData" @click="goInfo(item)" class="height-auto">
                    <v-feed
                        :feedId="item.userInfo.feedId"
                        :imgUrl="item.userInfo.avatar"
                        :title="item.userInfo.name"
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
    import vFeed from '../vendor/v-feed';
    import vText from '../vendor/v-text';
    import vCommentBar from '../vendor/v-comment-bar';
    import MicroComment from '../vendor/v-comment';
    import MicroBbs from '../vendor/v-forum';
    import vScroll from '../vendor/v-scroll.vue';

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
            if (this.$router.direct()) {
                this.$logger.log('comment-list.activated: in~');
            } else { // 返回
                this.$logger.log('comment-list.activated: back!');
                // 原打算根据返回的状态是新增还是删除，对现有list进行无刷新添加和删除操作，但考虑到分页时与后端的分页参数无法统一，暂时先刷新处理。。。Author by Dio Zhu. on 2017.4.13
                let obj = MicroComment.getCurrentItem();
                if (obj && obj.OPT) {
                    // 新增，数量+1
                    this.$store.commit('ADD_COMMENT_NUM', this.$route.params.id);
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                } else if (obj && obj.OPT === 0) {
//                    // 删除，数量-1
                    this.$store.commit('DEL_POSITION', this.$route.query.timestamp); // 删除位置信息，触发滚动条重新刷新
                }
                MicroComment.clearCurrentItem(); // 还原
            }
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
                this.$router.push({name: 'comment-info-reply', params: {id: item.id}, query: {}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

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
