<template>
    <div class="page page-form-checkbox">
        <h2>表单参考样例</h2>

        <div class="attributes">
            <h2>v-checkbox参数</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>value</td><td>当前多选的值</td><td>Array</td><td>-</td><td>-</td></tr>
                <tr><td>options</td><td>多选数组</td><td>Array</td><td>-</td><td>-</td></tr>
                <tr><td>radioClasses</td><td>图标的样式</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>reverse</td><td>图标是否反转到右侧</td><td>Boolean</td><td>-</td><td>false</td></tr>
            </table>
        </div>

        <h2>默认样式</h2>
        <p class="desc">默认样式，只传入值、选项列表，默认icon在左侧</p>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-checkbox v-model="value1" :options="options1"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value1) }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value1" :options="options1"&gt;&lt;/v-checkbox&gt;
        </code></pre>

        <h2>反转样式</h2>
        <p class="desc">利用反转，使选择的icon在右侧</p>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-checkbox v-model="value2" :options="options2" :reverse="true"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value2) }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value2" :options="options2" :reverse="true"&gt;&lt;/v-checkbox&gt;
        </code></pre>

        <h2>带标题</h2>
        <p class="desc"></p>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-checkbox v-model="value3" :options="options3" label="标题" labelClasses="light"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value3) }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value3" :options="options3" label="标题" labelClasses="light"&gt;&lt;/v-checkbox&gt;
        </code></pre>

        <h2>自定义图标</h2>
        <p class="desc"></p>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-checkbox v-model="value4" :options="options4" radioClasses="disk" :reverse="true"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value4) }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value4" :options="options4" radioClasses="disk" :reverse="true"&gt;&lt;/v-checkbox&gt;
        </code></pre>

        <h2>限制选择数量</h2>
        <p class="desc"></p>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-checkbox v-model="value5" :options="options5" radioClasses="disk" :max="2"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value5) }}，最多选俩</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value5" :options="options5" radioClasses="disk" :max="2"&gt;&lt;/v-checkbox&gt;
        </code></pre>

        <h2>带"全选"字样</h2>
        <p class="desc">此例传入options列表为对象列表，传入的是包含label、value的对象数组，可自定义返回值的格式</p>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-checkbox v-model="value6" :options="options6" radioClasses="disk" :reverse="true" checkAll="全选"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value6) }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value6" :options="options6" radioClasses="disk" :reverse="true" checkAll="全选"&gt;&lt;/v-checkbox&gt;
        </code></pre>

        <h2>标签模式</h2>
        <p class="desc"></p>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-checkbox v-model="value11" :options="options11" :tagsMode="true"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value11) }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value11" :options="options11" :tagsMode="true"&gt;&lt;/v-checkbox&gt;
        </code></pre>

        <h2>标签模式 && 限制数量</h2>
        <p class="desc"></p>
        <ul class="listview listview-form">
            <li>
                <v-checkbox v-model="value12" :options="options12" :tagsMode="true" :max="3"></v-checkbox>
            </li>
        </ul>
        <p class="desc">当前选择：{{ JSON.stringify(value12) }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-checkbox v-model="value12" :options="options12" :tagsMode="true"&gt;&lt;/v-checkbox :max="3"&gt;
        </code></pre>

        <div class="blank"></div>

    </div>
</template>

<script type="text/ecmascript-6">
import vCheckbox from 'comb-ui/src/vendors/v-checkbox';

export default {
    data () {
        return {
            value1: ['选项A', '选项C'],
            value2: ['选项B', '选项C'],
            value3: ['选项A', '选项B'],
            value4: ['选项B'],
            value5: ['选项A', '选项C'],
            value6: [],
            value11: ['大专', '硕士', '其他'],
            value12: ['本科', '博士后']
        };
    },
    created () {
        this.options1 = ['选项A', '选项B', '选项C'];
        this.options2 = ['选项A', '选项B', '选项C'];
        this.options3 = ['选项A', '选项B', '选项C'];
        this.options4 = ['选项A', '选项B', '选项C'];
        this.options5 = ['选项A', '选项B', '选项C'];
        this.options6 = [
            {value: 1, label: '第一个'},
            {value: 2, label: '第二个'},
            {value: 3, label: '第三个'},
            {value: 4, label: '第四个'},
            {value: 5, label: '第五个'}
        ];
        this.options11 = ['中专', '大专', '本科', '硕士', '博士', '博士后', '其他'];
        this.options12 = ['中专', '大专', '本科', '硕士', '博士', '博士后', '其他'];
    },
    mounted () {
        console.log('form mounted... ');
    },
    components: {
        'v-checkbox': vCheckbox
    },
    methods: {
        handleChange (e) {
            console.log('form.handleChange: ', e);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form-checkbox {
        /*padding: 0 ($grid-gutter-width / 2);*/

        /*.attributes, .hljs {*/
            /*margin: 0 pxTorem(6px);*/
        /*}*/

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
