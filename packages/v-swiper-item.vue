<template>
    <div class="v-swiper-item">
        <slot></slot>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
    name: 'v-swiper-item',

    mounted () {
        this.$parent && this.$parent.swipeItemCreated(this);
    },

    destroyed () {
        this.$parent && this.$parent.swipeItemDestroyed(this);
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
@import "../src/scss/variables";
// @import "../src/scss/mixins";

.v-swiper {}
</style>
