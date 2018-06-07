<template>
    <div class="page page-upload">
        <transition name="fade">
            <keep-alive exclude="viewer">
                <router-view></router-view>
            </keep-alive>
        </transition>
    </div>
</template>

<script type="text/ecmascript-6">
import logger from '../js/utils/logger';

export default {
    data () {
        return {};
    },

    mounted () {
        logger.log('album mounted... ');
    },

    methods: {}
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-upload {

    }
</style>
