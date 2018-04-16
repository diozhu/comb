<template>
    <div class="page page-comment">
        <h2>微服务-评论点赞 示例</h2>
        <ul>
            <router-link :to="{ path: '/comment-list', query: { subjectId: 52 } }" tag="li">
                <p>主题列表（普通样式）</p>
                <i class="icon icon-arrow-r v-label__arrow"></i>
            </router-link>
            <router-link :to="{ path: '/comment-list-reply', query: { subjectId: 52 } }" tag="li">
                <p>主题列表（爬楼样式）</p>
                <i class="icon icon-arrow-r v-label__arrow"></i>
            </router-link>
            <router-link :to="{ path: '/comment-comments', query: { subjectId: 52 } }" tag="li">
                <p>我的评论（评论数：{{ commentNum }}）</p>
                <i class="icon icon-arrow-r v-label__arrow"></i>
            </router-link>
            <router-link :to="{ path: '/comment-praises', query: { subjectId: 52 } }" tag="li">
                <p>我的点赞（点赞数：{{ praiseNum }}）</p>
                <i class="icon icon-arrow-r v-label__arrow"></i>
            </router-link>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import MicroComment from '../vendor/v-comment';

    export default {
        data () {
            return {
                commentNum: 0,
                praiseNum: 0
            };
        },

        mounted () {
            this.$logger.log('comment.mounted... ');
            this.init();
        },

        methods: {
            init () {
                MicroComment.getCommentsNum({}).then(res => {
                    this.commentNum = res;
                });

                MicroComment.getPraisesNum({}).then(res => {
                    this.praiseNum = res;
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-comment {

        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

        .desc {
            height: pxTorem(28px);
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            background: #f2f2f4;
        }

        ul {
            li {
                width: 100%;
                height: pxTorem(50px);
                padding: 0 pxTorem(15px);
                display: flex;
                flex-direction: row;
                align-items: center;
                border-bottom: #DDDEE3 1px solid;

                img {
                    width: pxTorem(30px);
                    height: pxTorem(30px);
                    flex: 0 0 auto;
                }

                p {
                    width: auto;
                    font-size: pxTorem(18px);
                    padding-left: pxTorem(8px);
                    flex: 1 1 auto;
                }
            }
        }
    }
</style>
