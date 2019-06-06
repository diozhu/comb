<template>
    <div class="page page-laya">
        <h2>laya</h2>
        <p class="desc">laya 测试</p>

        <div class="attributes">
            <h2>API</h2>
            <p class="desc">v-laya</p>
            <table>
                <tr><th>options参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>-</td><td>String</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <div class="blank"></div>
        <!-- <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div>
        <div class="blank"></div> -->
        <v-laya></v-laya>
    </div>
</template>

<script type="text/ecmascript-6">
    // import { Laya } from 'comb-ui';
    import { vLaya } from 'comb-ui';

    export default {
        components: { vLaya },
        data () {
            return {
            };
        },
        mounted () {
            console.log('laya.mounted... ');
            this.init();
        },
        methods: {
            init () {
                console.log('laya.init: ');
            }

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";

    .page-laya {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
