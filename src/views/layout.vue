<template>
    <div class="page page-layout">
        <h2>布局 参考样例</h2>

        <p class="desc">
            源自bootstrap，当前采用的是flex实现方式，最大列数为12，可通过栅格快速布局。
            当前页面的容器是.page。
        </p>

        <div class="attributes">
            <h2>API</h2>
            <p class="desc">v-row</p>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>justify</td><td>flex水平排列方式</td><td>String</td><td>start, <br>end, <br>center, <br>space-between, <br>space-around</td><td>start</td></tr>
                <tr><td>avg</td><td>是否平分边距</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><td>gutter</td><td>沟槽宽度</td><td>Number</td><td>0 - 30</td><td>0</td></tr>
            </table>
            <p class="desc">v-col</p>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>span</td><td>栅格占据的列数</td><td>Number</td><td>2 - 12</td><td>12</td></tr>
            </table>
        </div>

        <h2>基础布局</h2>
        <p class="desc">栅格把屏幕12列，使用时确定当前的列占用比例即可，如: 只有一列，传入12，两列传入两个6，以此类推。</p>
        <v-row>
            <v-col :span="12">1/1</v-col>
        </v-row>
        <v-row>
            <v-col :span="6">1/2</v-col>
            <v-col :span="6">1/2</v-col>
        </v-row>
        <v-row>
            <v-col :span="4">1/3</v-col>
            <v-col :span="4">1/3</v-col>
            <v-col :span="4">1/3</v-col>
        </v-row>
        <v-row>
            <v-col :span="3">1/4</v-col>
            <v-col :span="3">1/4</v-col>
            <v-col :span="3">1/4</v-col>
            <v-col :span="3">1/4</v-col>
        </v-row>
        <v-row>
            <v-col :span="2">1/6</v-col>
            <v-col :span="2">1/6</v-col>
            <v-col :span="2">1/6</v-col>
            <v-col :span="2">1/6</v-col>
            <v-col :span="2">1/6</v-col>
            <v-col :span="2">1/6</v-col>
        </v-row>
        <v-row>
            <v-col :span="2">1/6</v-col>
            <v-col :span="10">5/6</v-col>
        </v-row>

        <pre v-highlightjs @touchend.stop><code class="html">
            &lt;v-row&gt;
                &lt;v-col :span="12"&gt;1/1&lt;/v-col&gt;
            &lt;/v-row&gt;
            &lt;v-row&gt;
                &lt;v-col :span="6">1/2&lt;/v-col&gt;
                &lt;v-col :span="6">1/2&lt;/v-col&gt;
            &lt;/v-row&gt;
            &lt;v-row&gt;
                &lt;v-col :span="4">1/3&lt;/v-col&gt;
                &lt;v-col :span="4">1/3&lt;/v-col&gt;
                &lt;v-col :span="4">1/3&lt;/v-col&gt;
            &lt;/v-row&gt;
            &lt;v-row&gt;
                &lt;v-col :span="3">1/4&lt;/v-col&gt;
                &lt;v-col :span="3">1/4&lt;/v-col&gt;
                &lt;v-col :span="3">1/4&lt;/v-col&gt;
                &lt;v-col :span="3">1/4&lt;/v-col&gt;
            &lt;/v-row&gt;
            &lt;v-row&gt;
                &lt;v-col :span="2">1/6&lt;/v-col&gt;
                &lt;v-col :span="2">1/6&lt;/v-col&gt;
                &lt;v-col :span="2">1/6&lt;/v-col&gt;
                &lt;v-col :span="2">1/6&lt;/v-col&gt;
                &lt;v-col :span="2">1/6&lt;/v-col&gt;
                &lt;v-col :span="2">1/6&lt;/v-col&gt;
            &lt;/v-row&gt;
            &lt;v-row&gt;
                &lt;v-col :span="2">1/6&lt;/v-col&gt;
                &lt;v-col :span="10">5/6&lt;/v-col&gt;
            &lt;/v-row&gt;
          </code></pre>

        <h2>水平对齐方式</h2>
        <p class="desc">设定justify，两端对齐</p>
        <v-row justify="space-between">
            <v-col :span="3">1/4</v-col>
            <v-col :span="3">1/4</v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row justify="space-between"&gt;
            &lt;v-col :span="3"&gt;1/4&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;1/4&lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <p class="desc">居中</p>
        <v-row justify="center">
            <v-col :span="3">1/4</v-col>
            <v-col :span="3">1/4</v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row justify="center"&gt;
            &lt;v-col :span="3"&gt;1/4&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;1/4&lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <p class="desc">右对齐</p>
        <v-row justify="end">
            <v-col :span="3">1/4</v-col>
            <v-col :span="3">1/4</v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row justify="end"&gt;
            &lt;v-col :span="3"&gt;1/4&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;1/4&lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <h2>多列</h2>
        <p class="desc">单行多列，超出12列后会自动折行</p>
        <v-row>
            <v-col :span="6">第一个第一个第一个第一个第一个第一个第一个第一个</v-col>
            <v-col :span="6">第二个第二个第二个第二个第二个第二个第二个第二个第二个</v-col>
            <v-col :span="6">第三个第三个第三个第三个第三个第三个第三个第三个第三个第三个</v-col>
            <v-col :span="6">第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个</v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row&gt;
            &lt;v-col :span="6"&gt;第一个第一个第一个第一个第一个第一个第一个第一个&lt;/v-col&gt;
            &lt;v-col :span="6"&gt;第二个第二个第二个第二个第二个第二个第二个第二个第二个&lt;/v-col&gt;
            &lt;v-col :span="6"&gt;第三个第三个第三个第三个第三个第三个第三个第三个第三个第三个&lt;/v-col&gt;
            &lt;v-col :span="6"&gt;第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个第四个&lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <h2>关于沟槽 - Gutter</h2>
        <p class="desc">
            栅格是通过：容器、行、列，三个元素构建而成，从最外层的容器开始，每层都会通过margin、pading的设定形成沟槽；
            沟槽的意义在于嵌套，而在简单布局情况下，沟槽的存在使得布局变得稍显复杂，所以gutter的默认值为0；
            如果要设定沟槽，与css方式一样，本项目根据的ui规格为750，css换算37.5，所以如果需要15px的沟槽，此处需传入30作为参数；
        </p>
        <v-row :gutter="30">
            <v-col :span="6"><p>文字</p></v-col>
            <v-col :span="6"><p>文字</p></v-col>
        </v-row>
        <v-row :gutter="30">
            <v-col :span="4"><p>文字</p></v-col>
            <v-col :span="4"><p>文字</p></v-col>
            <v-col :span="4"><p>文字</p></v-col>
        </v-row>
        <v-row :gutter="30">
            <v-col :span="3"><p>文字</p></v-col>
            <v-col :span="3"><p>文字</p></v-col>
            <v-col :span="3"><p>文字</p></v-col>
            <v-col :span="3"><p>文字</p></v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter="30"&gt;
            &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
        &lt;/v-row&gt;
        &lt;v-row :gutter="30"&gt;
            &lt;v-col :span="4"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="4"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="4"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
        &lt;/v-row&gt;
        &lt;v-row :gutter="30"&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <p class="desc">在做双按钮或者左右布局的时候，两个block的间距以及到屏幕的间距可通过设置avg来实现平分的效果，添加avg之后的平分样式：</p>
        <v-row :gutter="30" :avg="true">
            <v-col :span="6"><p>文字</p></v-col>
            <v-col :span="6"><p>文字</p></v-col>
        </v-row>
        <v-row :gutter="30" :avg="true">
            <v-col :span="4"><p>文字</p></v-col>
            <v-col :span="4"><p>文字</p></v-col>
            <v-col :span="4"><p>文字</p></v-col>
        </v-row>
        <v-row :gutter="30" :avg="true">
            <v-col :span="3"><p>文字</p></v-col>
            <v-col :span="3"><p>文字</p></v-col>
            <v-col :span="3"><p>文字</p></v-col>
            <v-col :span="3"><p>文字</p></v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter="30" :avg="true"&gt;
            &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
        &lt;/v-row&gt;
        &lt;v-row :gutter="30" :avg="true"&gt;
            &lt;v-col :span="4"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="4"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="4"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
        &lt;/v-row&gt;
        &lt;v-row :gutter="30" :avg="true"&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="3"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <h2>栅格的嵌套</h2>
        <p class="desc">由于沟槽的存在，使得嵌套非常简单~</p>
        <v-row :gutter="30">
            <v-col :span="6"><p>文字</p></v-col>
            <v-col :span="6">
                <v-row :gutter="30">
                    <v-col :span="6"><p>文字</p></v-col>
                    <v-col :span="6"><p>文字</p></v-col>
                </v-row>
                <v-row :gutter="30">
                    <v-col :span="6"><p>文字</p></v-col>
                    <v-col :span="6"><p>文字</p></v-col>
                </v-row>
            </v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter="30"&gt;
            &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="6"&gt;
                &lt;v-row :gutter="30"&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                &lt;/v-row&gt;
                &lt;v-row :gutter="30"&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                &lt;/v-row&gt;
            &lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <p class="desc">加上avg的嵌套效果</p>
        <v-row :gutter="30" :avg="true">
            <v-col :span="6"><p>文字</p></v-col>
            <v-col :span="6">
                <v-row :gutter="30" :avg="true">
                    <v-col :span="6"><p>文字</p></v-col>
                    <v-col :span="6"><p>文字</p></v-col>
                </v-row>
                <v-row :gutter="30" :avg="true">
                    <v-col :span="6"><p>文字</p></v-col>
                    <v-col :span="6"><p>文字</p></v-col>
                </v-row>
            </v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter="30" :avg="true"&gt;
            &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
            &lt;v-col :span="6"&gt;
                &lt;v-row :gutter="30" :avg="true"&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                &lt;/v-row&gt;
                &lt;v-row :gutter="30" :avg="true"&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                    &lt;v-col :span="6"&gt;&lt;p&gt;文字&lt;/p&gt;&lt;/v-col&gt;
                &lt;/v-row&gt;
            &lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <div class="blank"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    // import vRow from 'comb-ui/src/vendors/v-row.vue';
    // import vCol from 'comb-ui/src/vendors/v-col.vue';
    import { vRow, vCol } from 'comb-ui';
    //    require('highlight.js/styles/default.css');
    //    import 'highlight.js';
    //    import 'highlight.js/styles/github-gist.css';

    export default {
        components: { vRow, vCol },

        data () {
            return {
                t1: ''
            };
        },

        created () {
            console.log('layout.mounted... ');

            this.t1 = `        <v-row justify="space-between">
            <v-col :span="3">1/4</v-col>
            <v-col :span="3">1/4</v-col>
        </v-row>`;
        },

        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-layout {
        padding: 0 ($grid-gutter-width / 2);

        .v-row {

            .v-col {
                line-height: pxTorem(28px);
                background: rgba(86,61,124,0.15);
                border: 1px solid rgba(86,61,124,0.2);

                > p {
                    height: 100%;
                    background: #f2f2f4;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
