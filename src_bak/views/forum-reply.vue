<template>
    <div class="page page-forum-reply">

        <v-field v-model="value" placeholder="提示文字..." type="textarea" rows="8" limit="20"
                 class="limit-outer"></v-field>

        <div class="v-comments__btn__frm">
            <v-button class="v-comments__submit" @click="submit">发布评论</v-button>
        </div>

    </div>
</template>

<script>
    import logger from '../../src/js/utils/logger';
    import vField from '../../src/vendor/v-field.vue';
    import vButton from '../../src/vendor/v-button.vue';
    import BBS from '../../src/vendor/v-forum';

    export default {
        components: {
            'v-field': vField,
            'v-button': vButton
        },

        data () {
            let _self = this;
            return {
                toId: _self.$route.query.toid / 1 || 0,
                toUserId: _self.$route.query.touid / 1 || 0,
                value: ''
            };
        },

        mounted () {
            logger.log('forum-reply.mounted... ', this.$route.params.id);
        },

        methods: {
            submit () {
                logger.log('forum-reply.submit: ', this.value);
                return BBS.addComment({
                    topicId: this.$route.params.topicId || 0,
                    content: this.value,
                    toId: this.$route.query.toid || 0,
                    toUserId: this.$route.query.touid || 0
                }).then((res) => {
                    logger.log('[BBS].submit.SUCSESS: ', res);
//                    let comment = this.$store.commit('GET_FORUM_COMMENT', this.$route.params.topicId) || {
//                        Id: this.$route.params.topicId,
//                        CommentNum: 0
//                    };
//                    comment.CommentNum += 1;
//                    this.$store.commit('SET_FORUM_COMMENT', comment);
                    this.$router.go(-1);
                }).catch(function (e) {
                    logger.error('[BBS].submit.ERROR: ', e);
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .v-comments__btn__frm {
        width: 100%;
        height: pxTorem(64px);
        /*margin: pxTorem(10px) 0;*/
        padding: pxTorem(10px) pxTorem(11px);
        display: block;
        position: fixed;
        z-index: 9;
        left: 0;
        bottom: 0;
        font-size: pxTorem(17px);
        line-height: 1;
        background: #FFF;
        border-top: #ccc 1px solid;
    }
</style>
