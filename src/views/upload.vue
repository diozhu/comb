<template>
    <div class="page page-upload">
        <transition name="fade">
            <keep-alive exclude="viewer">
                <router-view></router-view>
            </keep-alive>
        </transition>

        <!--<p-comments :subject-id="subjectId"></p-comments>-->
    </div>
</template>

<script>
    // import pComments from '../../src_old/components/p-comments.vue';

    export default {
        // components: { 'p-comments': pComments },
        components: {},

        data () {
            return {
                subjectId: parseInt(this.$route.query.subjectId || 0)
            };
        },

        mounted () {
            this.$logger.log('upload mounted... ');
        },

        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-upload {

    }
</style>
