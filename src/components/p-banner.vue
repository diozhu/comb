<template>
    <div class="p-banner">
        <!--<img :src="value">-->
        <img :src="value">
    </div>
</template>
<script>
    export default {
        name: 'p-banner',

        props: {
            value: {
                type: String,
                default: ''
            }
        },

        components: {
        },

        data () {
            return {
            };
        },

        computed: {

        },

        watch: {
        },

        created () {
            console.log('p-banner.created... ', this.value);
        },

        methods: {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";


    .p-banner {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: pxTorem(90px);
        overflow: hidden;
        z-index: 99;

        img {
            width: 100%;
            height: initial;
        }
    }
</style>
