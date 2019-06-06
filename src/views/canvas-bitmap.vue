<template>
    <div class="page page-canvas-bitmap">
        <h2>toast</h2>
        <p class="desc">本项目中，该控件已加入到vue实例，使用时无需引用v-toast.vue，直接在vue实例中通过this.$toast即可调用。</p>

        <div class="attributes">
            <h2>API</h2>
            <p class="desc">v-row</p>
            <table>
                <tr><th>options参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>如果整个参数对象为字符串，会默认处理为message</td><td>Object</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        


        <div class="blank"></div>
    </div>
</template>

<script type="text/ecmascript-6">

    export default {
        components: {},

        data () {
            return {
            };
        },
        mounted () {
            console.log('canvas-bitmap.mounted... ');
        },
        methods: {
            

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-canvas-bitmap {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
