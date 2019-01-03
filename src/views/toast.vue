<template>
    <div class="page page-toast">
        <h2>toast</h2>
        <p class="desc">本项目中，该控件已加入到vue实例，使用时无需引用v-toast.vue，直接在vue实例中通过this.$toast即可调用。</p>

        <div class="attributes">
            <h2>API</h2>
            <p class="desc">v-row</p>
            <table>
                <tr><th>options参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>如果整个参数对象为字符串，会默认处理为message</td><td>Object</td><td>-</td><td>-</td></tr>
                <tr><td>message</td><td>提示信息</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>position</td><td>提示的位置</td><td>String</td><td>top<br>middle<br>bottom</td><td>middle</td></tr>
                <tr><td>duration</td><td>持续时间（毫秒）</td><td>Number</td><td>-</td><td>3000</td></tr>
                <tr><td>className</td><td>自定义样式名</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>iconClass</td><td>icon样式名称</td><td>String</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <ul class="listview listview-form">
            <li>
                <v-cell title="点击弹出toast（单行）" is-link @click.native="openToast"></v-cell>
            </li>
            <li>
                <v-cell title="点击弹出toast（多行）" is-link @click.native="openToastMuti"></v-cell>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出toast（单行）" is-link @click.native="openToast"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出toast（多行）" is-link @click.native="openToastMuti"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>
        <pre v-highlightjs @touchend.stop><code class="html">
        export default {
            components: { vCell },

            data () {
                return { };
            },
            methods: {
                openToast: function () {
                    this.$toast('提示文字，尽量限制在一行以内');
                },
                openToastMuti: function () {
                    this.$toast('提示文字，尽量限制在一行以内，如果是多行，调整文字靠左对齐~');
                }
            }
        };
        </code></pre>

        <h2>带icon</h2>
        <ul class="listview listview-form">
            <li>
                <v-cell title="点击弹出带icon的toast" is-link @click.native="openToastWithIcon"></v-cell>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出带icon的toast" is-link @click.native="openToastWithIcon"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>
        <pre v-highlightjs @touchend.stop><code class="html">
        export default {
            components: { vCell },

            data () {
                return { };
            },
            mounted () {
                console.log('toast.mounted... ');
            },
            methods: {
                openToastWithIcon () {
                    this.$toast({ message: '操作成功', iconClass: 'icon icon-right' });
                }
            }
        };
        </code></pre>

        <h2>自定义</h2>
        <ul class="listview listview-form">
            <li>
                <v-cell title="点击弹出自定义toast" is-link @click.native="openBottomToast"></v-cell>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li&gt;
                &lt;v-cell title="点击弹出自定义toast" is-link @click.native="openBottomToast"&gt;&lt;/v-cell&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>
        <pre v-highlightjs @touchend.stop><code class="html">
        export default {
            components: { vCell },

            data () {
                return { };
            },
            mounted () {
                console.log('toast.mounted... ');
            },
            methods: {
                openBottomToast () {
                    this.$toast({ message: '提示信息', duration: 1000, position: 'bottom' });
                }
            }
        };
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

            };
        },
        mounted () {
            console.log('toast.mounted... ');
        },
        methods: {
            openToast: function () {
                this.$toast('提示文字，尽量限制在一行以内');
            },
            openToastMuti: function () {
                // this.$toast('提示文字，尽量限制在一行以内');
                this.$toast('提示文字，尽量限制在一行以内，如果是多行，调整文字靠左对齐~');
            },

            openToastWithIcon () {
                this.$toast({ message: '操作成功', iconClass: 'icon icon-right' });
            },

            openBottomToast () {
                this.$toast({ message: '提示信息', duration: 1000, position: 'bottom' });
            }

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-toast {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
