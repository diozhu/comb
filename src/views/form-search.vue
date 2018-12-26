<template>
    <div class="page page-form-search">
        <h2>v-search</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>value</td><td>查询关键字</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>autofocus</td><td>自动焦点</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><th>返回</th><th>说明</th><th>类型</th><th>-</th><th>默认</th></tr>
                <tr><td>handle-search</td><td>返回的搜索事件</td><td>String</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <p class="desc">默认样式fff，点击此组件跳转到指定路由</p>
        <v-row :gutter="30">
            <v-search :to="{name: 'SearchResult'}" disabled></v-search>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter="30"&gt;
            &lt;router-link to="/form-search-result"&gt;
                &lt;v-search :to="{name: 'SearchResult'}" disabled&gt;&lt;/v-search&gt;
            &lt;/router-link&gt;
        &lt;/v-row&gt;
        </code></pre>

        <!--<h2>搜索</h2>-->
        <!--<p class="desc">第二页的搜索，点击有动画</p>-->
        <!--<v-row :gutter="30">-->
            <!--<v-search v-model="keywords" @handle-search="handleSearch"> </v-search>-->
        <!--</v-row>-->
        <!--<pre v-highlightjs @touchend.stop><code class="html">-->
        <!--&lt;v-row :gutter="30"&gt;-->
            <!--&lt;v-search :autofocus="true" v-model="keywords" @handle-search="handleSearch"&gt; &lt;/v-search&gt;-->
        <!--&lt;/v-row&gt;-->
        <!--</code></pre>-->
    </div>
</template>

<script type="text/ecmascript-6">
import vRow from 'comb-ui/src/vendors/v-row.vue';
import vSearch from 'comb-ui/src/vendors/v-search.vue';

export default {
    components: { vRow, vSearch },

    data () {
        return {
            keywords: '',
            defaultResult: [
                'Apple',
                'Banana',
                'Orange',
                'Durian',
                'Lemon',
                'Peach',
                'Cherry',
                'Berry',
                'Core',
                'Fig',
                'Haw',
                'Melon',
                'Plum',
                'Pear',
                'Peanut',
                'Other'
            ]
        };
    },
    mounted () {
        console.log('form-search.mounted... ');
    },
    computed: {
        filterResult () {
            return this.defaultResult.filter(val => new RegExp(this.keywords, 'i').test(val));
        }
    },
    methods: {
        handleSearch (val) {
            this.$toast('搜索：' + val);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form-search {
        padding: 0 ($grid-gutter-width / 2);

        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

    }
</style>
