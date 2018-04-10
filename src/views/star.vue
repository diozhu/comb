<template>
    <div class="page page-star">
        <h2>v-star</h2>

        <p class="desc">评星组件</p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>label</td><td>左侧标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>value</td><td>当前选中的值</td><td>Number</td><td>-</td><td>0</td></tr>
                <tr><td>disabled</td><td>是否禁用点击，只展示</td><td>Boolean</td><td>-</td><td>false</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <v-star v-model="val1" label="第一行："></v-star>
        <v-star v-model="val2"></v-star>
        <v-star v-model="val3" label="第三行："></v-star>
        <v-star v-model="val4" label="第四行："></v-star>
        <v-star v-model="val5" label="第五行(禁用)：" disabled></v-star>
        <br />
        <ul>
            <li><p>第一行的值：{{val1}}</p></li>
            <li><p>第二行的值：{{val2}}</p></li>
            <li><p>第三行的值：{{val3}}</p></li>
            <li><p>第四行的值：{{val4}}</p></li>
            <li><p>第五行的值：{{val5}}</p></li>
        </ul>

    </div>
</template>

<script>
    import vStar from '../vendor/v-star';

    export default {
        components: { vStar },
        data () {
            return {
                val1: 0,
                val2: 0,
                val3: 0,
                val4: 0,
                val5: 0
            };
        },

        mounted () {
            this.$logger.log('page-star.mounted... ');
            this.init();
        },

        methods: {
            init () {
                setTimeout(() => {
                    this.val1 = 3;
                }, 1000);
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-star {

        .v-star, ul {
            padding: 0 pxTorem(15);
        }
    }
</style>
