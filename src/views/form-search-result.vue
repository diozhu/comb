<template>
    <div class="page page-form-search-result">
        <v-row :gutter="30">
            <v-search :autofocus="true" v-model="keywords" @handle-search="handleSearch"> </v-search>
        </v-row>

        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter="30"&gt;
            &lt;v-search :autofocus="true" v-model="keywords" @handle-search="handleSearch"&gt; &lt;/v-search&gt;
        &lt;/v-row&gt;
        </code></pre>

        <p class="desc">
            关于autofocus:
            ios下要想实现进入时自动focus，需要确保当前的页面与入口页在一个chunk中，在routes文件中配置webpackChunkName同名；  -- Author by Dio Zhu. on 2018.12.25
        </p>

        <p class="desc">TODO：半成品，项目中暂无此需求，如有再继续写后面的。。。输入文字后，保留输入的样式，动画不能写在focus下。。。</p>

    </div>
</template>

<script>
import vRow from 'comb-ui/src/vendors/v-row.vue';
import vSearch from 'comb-ui/src/vendors/v-search.vue';
import Vue from 'vue';
import Toast from 'comb-ui/src/vendors/v-toast.js';
Vue.$toast = Vue.prototype.$toast = Toast;

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
    computed: {
        filterResult () {
            return this.defaultResult.filter(val => new RegExp(this.keywords, 'i').test(val));
        }
    },
    watch: {
        keywords (val) {
            this.$toast({message: '搜索：' + val, position: 'top'});
        }
    },
    mounted () {
        //        console.log('form-search mounted... ');
    },
    methods: {
        handleSearch (val) {
            this.$toast({message: '搜索：' + val, position: 'top'});
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form-search-result {
        padding: 0 ($grid-gutter-width / 2);

        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

    }
</style>
