<template>
    <div class="page page-org-selector">
        <v-org-selector :nodeId="parseInt($route.query.nodeId)" :type="parseInt($route.query.type)" :returnKey="$route.query.key"></v-org-selector>
    </div>
</template>

<script type="text/ecmascript-6">
    import vOrgSelector from '../../src/vendor/v-org-selector.vue';

    export default {
        components: { vOrgSelector },

        data () {
            return {
            };
        },

        activated () {
        },

        mounted () {
    //        this.$logger.log('feed mounted... ');
        },

        methods: {
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-org-selector {

    }
</style>
