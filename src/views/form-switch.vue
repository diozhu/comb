<template>
    <div class="page page-switch">
        <h2>v-switch</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>value</td><td>当前值</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><td>label</td><td>标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><th>events</th><th colspan="4">返回值</th></tr>
                <tr><td>change</td><td colspan="4">checked: Boolean</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <ul class="listview listview-form">
            <li>
                <v-switch label="标题" v-model="checkboxValue1" @change="handleChange"></v-switch>
            </li>
        </ul>
        <p class="desc">当前选择：{{ checkboxValue1 }}</p>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li&gt;
                &lt;v-switch label="标题" v-model="checkboxValue1" @change="handleChange"&gt;&lt;/v-switch&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        &lt;p class="desc"&gt;当前选择：{ { checkboxValue1 } }&lt;/p&gt;
        </code></pre>

        <!--<div class="listview listview-form">-->

            <!--&lt;!&ndash;switch 默认&ndash;&gt;-->
            <!--<ul>-->
                <!--<li>-->
                    <!--<v-switch :label="'标题'" v-model="checkboxValue1" @change="handleChange"/>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<ul>-->
                <!--<li>-->
                    <!--<v-switch :label="'标题'" v-model="checkboxValue2" @change="handleChange"/>-->
                <!--</li>-->
            <!--</ul>-->
            <!--<p class="desc">当前选择：{{ checkboxValue2 }}</p>-->
        <!--</div>-->

        <div class="blank"></div>
    </div>
</template>

<script>
import vSwitch from 'comb-ui/src/vendors/v-switch.vue';

export default {
    data () {
        return {
            checkboxValue1: true,
            checkboxValue2: false
        };
    },
    created: function () {
        console.log('created');
    },
    mounted () {
        console.log('form mounted... ');
    },
    components: {
        'v-switch': vSwitch
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

    .page-switch {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
