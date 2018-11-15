<template>
    <div class="page page-spinner">
        <h2>加载动画参考样例</h2>
        <!--<v-cell title="标题"></v-cell>-->
        <div class="listview listview-form">
            <!--普通样式-->
            <ul>
                <li>
                    <div>
                        <div>snake</div>
                        <v-spinner color="#007AFF" type="snake"> </v-spinner>
                    </div>
                </li>
                <li>
                    <div>
                        <div>triple-bounce</div>
                        <v-spinner color="#777E8C" type="triple-bounce"> </v-spinner>
                    </div>
                </li>
                <li>
                    <div>
                        <div>fading-circle</div>
                        <v-spinner color="#007AFF" type="fading-circle"> </v-spinner>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    // import vSpinner from 'comb-ui/src/vendors/v-spinner/';
    import vSpinner from 'comb-ui/src/vendors/v-spinner/';
    // import vCell from './vendor/v-cell';

    export default {
        data () {
            return {

            };
        },
        mounted () {
            console.log('spinner mounted... ');
        },
        components: {
            'v-spinner': vSpinner
        },
        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-spinner {
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

        .listview {
            li {
                > div {
                    height: 100%;
                    margin-left: pxTorem(15px);
                    padding-right: pxTorem(15px);
                    @include box_flex;
                    @include align_items(center);
                    @include justify-content(space-between);

                    div {
                        font-size: pxTorem(15px);
                    }

                }
            }
        }
    }
</style>
