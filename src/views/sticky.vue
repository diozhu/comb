<template>
    <div class="page page-sticky">
        <h2>粘性布局 参考样例</h2>

        <p class="desc">页面滚动超出dom位置时，让dom置顶</p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            </table>
        </div>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;div class="v-sticky" v-sticky.top="100"&gt;
            &lt;v-button size="full" styles="rectangle"&gt;距顶部100px&lt;/v-button&gt;
        &lt;/div&gt;
        &lt;div class="v-sticky" v-sticky.top&gt;
            &lt;v-button size="full" styles="rectangle"&gt;中间吸顶&lt;/v-button&gt;
        &lt;/div&gt;
        &lt;div class="v-sticky" v-sticky.bottom="50"&gt;
            &lt;v-button size="full" styles="rectangle"&gt;距底部50px&lt;/v-button&gt;
        &lt;/div&gt;
        </code></pre>

        <p class="desc">注：
            在ios中，如果浮动元素存在于滚动条内，由于滚动时ios会停止一切js计算，最后造成的效果是飘忽不定；
            目前采取的方法是使用position:stiky;的方式，此属性可去caniuse上查看兼容性，ios的兼容性非常好，所以我进行了机型判断，如果是android，直接用fixed；
            未在正式环境使用，尚不知兼容性范围；
        </p>
        <div class="v-sticky" v-sticky.top="100">
            <v-button size="full" styles="rectangle">距顶部100px</v-button>
        </div>
        <div class="num"><p v-for="n in 100" :key="n">模拟数据{{n}}</p></div>
        <div class="v-sticky" v-sticky.top>
            <v-button size="full" styles="rectangle">中间吸顶</v-button>
        </div>
        <div class="num"><p v-for="n in 100" :key="n">模拟数据{{n}}</p></div>
        <div class="v-sticky" v-sticky.bottom="50">
            <v-button size="full" styles="rectangle">距底部50px</v-button>
        </div>
        <div class="num"><p v-for="n in 50" :key="n">模拟数据{{n}}</p></div>
        <div class="blank">end</div>
    </div>
</template>

<script>
    import vButton from 'comb-ui/src/vendors/v-button.vue';
    import Vue from 'vue';
    import sticky from 'comb-ui/src/vendors/v-sticky.js';
    Vue.use(sticky);

    export default {
        components: { vButton },

        data () {
            return {
            };
        },

        mounted () {
            console.log('sticky.mounted... ');
        },

        methods: {
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-sticky {

    }
</style>
