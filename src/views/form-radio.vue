<template>
    <div class="page page-form">
        <h2>v-radio</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>value</td><td>当前值</td><td>Array</td><td>-</td><td>-</td></tr>
                <tr><td>options</td><td>选择列表，支持<br>['']<br>或<br>[{label:'',<br>sublabel:'',<br>value:''}]</td><td>Array</td><td>-</td><td>-</td></tr>
                <tr><td>label</td><td>左侧标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>radioClasses</td><td>选择样式</td><td>String</td><td>disk</td><td>check</td></tr>
                <tr><td>reverse</td><td>选择icon反转位置</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><td>mode</td><td>展现方式</td><td>String</td><td>list、<br>tags</td><td>list</td></tr>
            </table>
        </div>

        <h2>doing项目样式</h2>
        <v-radio class="doing" v-model="doingVal" :options="doingOpts" radioClasses="disk" mode="cards"></v-radio>
        <p class="desc">当前选择：{{ doingVal }}</p>
        <br />
        <br />

        <h2>示例</h2>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-radio :label="'标题'" v-model="value1" :options="['选项A', '选项B', '选项C']"></v-radio>
                <p class="desc">当前选择：{{ value1 }}</p>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li class="height-auto"&gt;
                &lt;v-radio :label="'标题'" v-model="value1" :options="['选项A', '选项B', '选项C']"&gt;&lt;/v-radio&gt;
                &lt;p class="desc"&gt;当前选择：{ { value1 } }&lt;/p&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>反转样式</h2>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-radio v-model="value2" :options="['选项A', '选项B', '选项C']" reverse></v-radio>
                <p class="desc">当前选择：{{ value2 }}</p>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li class="height-auto"&gt;
                &lt;v-radio v-model="value2" :options="['选项A', '选项B', '选项C']" reverse&gt;&lt;/v-radio&gt;
                &lt;p class="desc"&gt;当前选择：{{ value2 }}&lt;/p&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>多行文本</h2>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-radio v-model="value3" :options="[{label:'当前位置', sublabel: '位置描述', value:'当前位置的值'}, {label:'位置名称', sublabel: '具体位置信息', value:'位置名称的值'}, {label:'位置三', sublabel: '具体位置信息', value:'位置三的值'}]" ></v-radio>
                <p class="desc">当前选择：{{ value3 }}</p>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li class="height-auto"&gt;
                &lt;v-radio v-model="value3" :options="[{label:'当前位置', sublabel: '位置描述', value:'当前位置的值'}, {label:'位置名称', sublabel: '具体位置信息', value:'位置名称的值'}, {label:'位置三', sublabel: '具体位置信息', value:'位置三的值'}]" &gt;&lt;/v-radio&gt;
                &lt;p class="desc"&gt;当前选择：{{ value3 }}&lt;/p&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>自定义样式</h2>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-radio v-model="value4" :options="['选项A', '选项B', '选项C']" radioClasses="disk" reverse></v-radio>
                <p class="desc">当前选择：{{ value4 }}</p>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li class="height-auto"&gt;
                &lt;v-radio v-model="value4" :options="['选项A', '选项B', '选项C']" radioClasses="disk" reverse&gt;&lt;/v-radio&gt;
                &lt;p class="desc"&gt;当前选择：{{ value4 }}&lt;/p&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>标签样式</h2>
        <ul class="listview listview-form">
            <li class="height-auto">
                <v-radio v-model="value5" :options="['选项A', '选项B', '选项C', '选项D']" mode="tags"></v-radio>
                <p class="desc">当前选择：{{ value5 }}</p>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li class="height-auto"&gt;
                &lt;v-radio v-model="value5" :options="['选项A', '选项B', '选项C', '选项D']" mode="tags"&gt;&lt;/v-radio&gt;
                &lt;p class="desc"&gt;当前选择：{{ value5 }}&lt;/p&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <!--<div class="listview listview-form">-->

            <!--&lt;!&ndash;radio button，lab样式&ndash;&gt;-->
            <!--<ul>-->
                <!--<li class="height-auto">-->
                    <!--<v-radio-tag :label="'标题'" v-model="radioValue5" mode="tag" :options="['选项A', '选项B', '选项C', '选项D']"/>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<p class="desc">当前选择：{{ radioValue5 }}</p>-->

        <!--</div>-->

        <div class="blank"></div>
    </div>
</template>

<script>
import vRadio from 'comb-ui/src/vendors/v-radio.vue';
import vRadioTag from 'comb-ui/src/vendors/v-radio-tag.vue';

export default {
    data () {
        return {
            value1: '选项A',
            value2: '选项B',
            value3: '当前位置的值',
            value4: '选项C',
            value5: '选项B',
            value6: '选项C',
            radioValue: '选项A',
            radioValue2: '当前位置的值',
            radioValue3: '选项A',
            radioValue4: '选项A',
            radioValue5: '选项A',
            doingOpts: [
                {label: '中教培训课', value: 1},
                {label: '外教培训课', value: 2},
                {label: '超级球队[已预约]', value: 3, disabled: true}
            ],
            doingVal: 2
        };
    },
    created: function () {
        console.log('created');
    },
    mounted () {
        console.log('form mounted... ');
    },
    components: {
        'v-radio': vRadio,
        'v-radio-tag': vRadioTag
    },
    methods: {
        go (name) {
            this.$router.push(name);
        },
        simpleAlert () {
            console.log('this is simple alert !');
        },
        selectDemo () {
            console.log('form.selectDemo: ');
        },
        handleChange (e) {
            console.log('form.handleChange: ', e);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form {

        .doing {
            padding: 0 pxTorem(22);
        }

        .v-radio.position .v-radio__r{
            height: pxTorem(64px);
            line-height: pxTorem(64px);
        }

        .v-radiolist.tag {
            margin: 0 pxTorem(15px) pxTorem(15px);
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
