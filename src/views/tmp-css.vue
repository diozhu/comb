<template>
    <div class="page page-tmp-css">
        <h2>各种临时css 参考样例</h2>
        <p class="desc">tab菜单的小尖：</p>
        <div class="c-tab">
            <div class="c-tab__arrow"></div>
        </div>

        <div class="blank"></div>
        <v-button v-fixed>fixed</v-button>
    </div>
</template>

<script>
    // import '../../static/js/vendor/zepto.min';
    import VButton from '../vendor/v-button';
    export default {
        name: 'page-tmp-css',

        components: {VButton},

        data () {
            return {

            };
        },

        mounted () {
            this.$logger.log('page-tmp-css.activated... ');
        },

        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    /* 测试浮动元素定位 */
    /*body {*/
        /*!*height: 100%;*!*/
        /*height: initial;*/
        /*overflow: initial;*/
        /*position: relative;*/

        /*.v-touch {*/
            /*height: initial;*/
            /*overflow: initial;*/
            /*position: initial;*/

            /*.page {*/
                /*height: initial;*/
                /*overflow: initial;*/
                /*position: initial;*/
            /*}*/
        /*}*/
    /*}*/

    .page-tmp-css {

        .blank {
            height: 5000px;
        }

        // 浮动定位测试
        .v-btn {
            /*position: fixed;*/
            /*bottom: 0;*/
            /*left: 0;*/
        }

        .listview {
            .v-label {
                border: 0;
            }
        }

        /* tab菜单的小尖儿。 Author by Dio Zhu. on 2017.3.8 */
        $bgc: #f2f2f4;
        .c-tab {
            width: 100%;
            height: pxTorem(8px);
            /*border-bottom: #303030 1px solid;*/
            border-bottom: #898989 1px solid;
            position: relative;
        }
        .c-tab__arrow {
            width: pxTorem(8px);
            height: pxTorem(8px);
            position: absolute;
            top: pxTorem(4px);
            left: 50%;
            border-top: #898989 pxTorem(1px) solid;
            border-left: #898989 pxTorem(1px) solid;
            border-right: $bgc pxTorem(1px) solid;
            border-bottom: $bgc pxTorem(1px) solid;
            -webkit-border-top-left-radius: pxTorem(2px);
            -moz-border-top-left-radius: pxTorem(2px);
            border-top-left-radius: pxTorem(2px);
            background: $bgc;
            transform: rotate(45deg);
        }
    }
</style>
