<template>
    <div class="page page-error">
        <h2>404 page not found</h2>
    </div>
</template>

<script>

    export default {
        components: { },

        data () {
            return {

            };
        },

        mounted () {
            console.log('404 page not found...');
        },

        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-error {

        h2 {
            margin: pxTorem(150px) 0 0 0 !important;
            line-height: pxTorem(40px);
            text-align: center;
            color: #858585;
            padding-bottom: pxTorem(150px);
        }

        .desc {
            height: pxTorem(28px);
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            // background: #f2f2f4;
        }
    }
</style>
