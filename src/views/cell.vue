<template>
    <div class="page page-cell">
        <h2>v-cell</h2>

        <p class="desc">表单页基本样式</p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>title</td><td>左侧标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>label</td><td>副标题</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>icon</td><td>左侧图标，可传入所有iconfont名称不带"icon-"的部分</td><td>String</td><td>所有iconfont</td><td>-</td></tr>
                <tr><td>reverse</td><td>反转icon</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><td>is-link</td><td>是否显示右侧箭头</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><td>to</td><td>路由跳转对象</td><td>Object</td><td>-</td><td>-</td></tr>
                <tr><td>value</td><td>左侧说明文字</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>desc</td><td>右侧说明文字</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><th>slots</th><th colspan="4">说明</th></tr>
                <tr><td>-</td><td colspan="4">自定义右侧内容</td></tr>
                <tr><td>icon</td><td colspan="4">自定义左侧icon标签</td></tr>
                <tr><td>title</td><td colspan="4">自定义左侧标题</td></tr>
                <tr><td>right</td><td colspan="4">自定义右侧隐藏内容，用于swipe</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <!--普通样式-->
        <ul class="listview listview-form">
            <li>
                <v-cell title="标题文字"></v-cell>
            </li>
            <li>
                <v-cell title="标题文字" label="子标题"></v-cell>
            </li>
            <li>
                <v-cell title="标题文字" is-link></v-cell>
            </li>
            <li>
                <v-cell title="标题文字" desc="带路由跳转" is-link :to="{name: 'cell-swipe', query: {tmp: 'xxx'}}"></v-cell>
            </li>
            <li>
                <v-cell title="标题文字" value="（左侧说明文字）" desc="右侧说明文字"></v-cell>
            </li>
            <li>
                <v-cell title="标题文字" icon="location" desc="带 icon"></v-cell>
            </li>
            <li>
                <v-cell title="标题文字" icon="location disk" reverse></v-cell>
            </li>
        </ul>

        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;!--普通样式--&gt;
        &lt;ul class="listview listview-form"&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字" label="子标题"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字" is-link&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字" desc="带路由跳转" is-link :to="{name: 'cell-swipe', query: {tmp: 'xxx'}}"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字" value="（左侧说明文字）" desc="右侧说明文字"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字" icon="location" desc="带 icon"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字" icon="location disk" reverse&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>slots用法</h2>
        <p class="desc">可以结合slots & class完成一些特定布局</p>
        <ul class="listview listview-form">
            <li>
                <v-cell desc="自定义标题" class="custom">
                    <div slot="title"><p class="title">主标题</p><p class="subtitle">副标题</p></div>
                </v-cell>
            </li>
            <li>
                <v-cell desc="自定义icon" class="custom">
                    <i slot="icon" class="icon icon-link"></i>
                    <div slot="title"><p class="title">主标题</p><p class="subtitle">副标题</p></div>
                </v-cell>
            </li>
            <li>
                <v-cell title="标题文字" class="custom">
                    <input placeholder="自定义内容为input，推荐使用v-field"/>
                </v-cell>
            </li>
            <li>
                <v-cell class="custom" reverse>
                    <i slot="icon" class="icon icon-link disk"></i>
                    <div slot="title"><p class="title">主标题</p><p class="subtitle">副标题</p></div>
                </v-cell>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;!--slots用法--&gt;
        &lt;ul class="listview listview-form"&gt;
            &lt;li&gt;
                &lt;v-cell desc="自定义标题" class="custom"&gt;
                    &lt;div slot="title"&gt;&lt;p class="title"&gt;主标题&lt;/p&gt;&lt;p class="subtitle"&gt;副标题&lt;/p&gt;&lt;/div&gt;
                &lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell desc="自定义icon" class="custom"&gt;
                    &lt;i slot="icon" class="icon icon-link"&gt;&lt;/i&gt;
                    &lt;div slot="title"&gt;&lt;p class="title"&gt;主标题&lt;/p&gt;&lt;p class="subtitle"&gt;副标题&lt;/p&gt;&lt;/div&gt;
                &lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="标题文字" class="custom"&gt;
                    &lt;input placeholder="自定义内容为input，推荐使用v-field"/&gt;
                &lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell class="custom" reverse&gt;
                    &lt;i slot="icon" class="icon icon-link disk"&gt;&lt;/i&gt;
                    &lt;div slot="title"&gt;&lt;p class="title"&gt;主标题&lt;/p&gt;&lt;p class="subtitle"&gt;副标题&lt;/p&gt;&lt;/div&gt;
                &lt;/v-cell&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <div class="blank"></div>
    </div>
</template>

<script type="text/ecmascript-6">
import vCell from 'comb-ui/src/vendors/v-cell.vue';

export default {
    components: { vCell },

    data () {
        return {
            listData: []  //
        };
    },

    created () {
    },

    mounted () {
        console.log('cell.mounted... ');
    },

    methods: {
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-cell {

        .custom {

            .icon {
                margin-right: pxTorem(8px);

                &.disk {
                    background: #787878;
                    border-radius: 50%;
                }
            }

            .frm {

            }
            .title {
                font-size: pxTorem(15px);
                color: #000;
            }
            .subtitle {
                font-size: pxTorem(12px);
                color: #898989;
                line-height: 1;
                padding-top: pxTorem(5px);
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
