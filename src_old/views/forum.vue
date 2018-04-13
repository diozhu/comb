<template>
    <div class="page page-forum">
        <h2>微服务-论坛 示例</h2>
        <ul>
            <li v-for="item in forumList" @click="goForum(item.id, item.name)">
                <div class="page-forum__forum">
                    <img :src="item.params.icon">
                    <p>{{ item.name }}</p>
                    <i class="icon icon-arrow-r v-label__arrow"></i>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import forum from '../../src/vendor/v-forum';

    export default {
        data () {
            return {
                forumList: []
            };
        },

        created () {
            this.$logger.log('forum.mounted... ');
            this.init();
        },

        methods: {
            init () {
                this.$logger.log('forum.init... ');
                forum.getForumList().then((res) => {
                    this.$logger.log('forum.init.getForumList: ', res);
                    this.forumList = res;
                });
            },

            goForum (id, name) {
//                this.$router.push({name: 'forum-topics', query: {forumId: id, forumName: name}});
                this.$router.push({name: 'forum-topics', params: {forumId: id}, query: {forumName: name}});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-forum {
        ul {
            li {
                &:first-child {
                    border-top: #DDDEE3 1px solid;
                }
            }
        }

        .page-forum__forum {
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
</style>
