<template>
    <div class="page page-button">
        <h2>Button for H5</h2>


        <div class="attributes">
            <h2>参数</h2>
            <table>
                <tr>
                    <th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th>
                </tr>
                <tr>
                    <td>type</td><td>按钮类型</td><td>String</td><td>default, <br>primary, <br>danger, <br>info</td><td>default</td>
                </tr>
                <tr>
                    <td>size</td><td>按钮大小</td><td>String</td><td>normal, <br>small, <br>full</td><td>normal</td>
                </tr>
                <tr>
                    <td>styles</td><td>按钮风格</td><td>String</td><td>default, <br>rectangle, <br>circle</td><td>default</td>
                </tr>
                <tr>
                    <td>disabled</td><td>是否禁用</td><td>Boolean</td><td>-</td><td>false</td>
                </tr>
                <tr>
                    <td>nativeType</td><td>原生type属性透传</td><td>String</td><td>-</td><td>-</td>
                </tr>
            </table>
        </div>

        <br>
        <h2>默认样式</h2>
        <v-button>normal</v-button>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-button&gt;normal&lt;/v-button&gt;
        </code></pre>

        <br>
        <h2>禁用</h2>
        <v-button :disabled="true">normal-disable</v-button>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-button :disabled="true"&gt;normal-disable&lt;/v-button&gt;
        </code></pre>

        <br>
        <h2>指定类型</h2>
        <v-button nativeType="submit">submit</v-button>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-button :submit="submit"&gt;submit&lt;/v-button&gt;
        </code></pre>

        <br>
        <h2>按钮样式</h2>
        <p class="desc">小按钮，多类型</p>
        <v-row :aligment="true">
            <v-col>
                <v-button size="small">default</v-button>
                <v-button type="danger" size="small">danger</v-button>
                <v-button type="primary" size="small">primary</v-button>
                <v-button type="info" size="small">info</v-button>
            </v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :aligment="true"&gt;
            &lt;v-col&gt;
                &lt;v-button size="small"&gt;default&lt;/v-button&gt;
                &lt;v-button type="danger" size="small"&gt;danger&lt;/v-button&gt;
                &lt;v-button type="primary" size="small"&gt;primary&lt;/v-button&gt;
                &lt;v-button type="info" size="small"&gt;info&lt;/v-button&gt;
            &lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <br>
        <p class="desc">通屏按钮的样式需要与当前按钮的容器配合，如果使用了栅格布局容器，可以这样实现：</p>
        <v-row :gutter.Number="30">
            <v-button size="full" styles="rectangle">default.full</v-button>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter.Number="30"&gt;
            &lt;v-button size="full" styles="rectangle"&gt;default.full&lt;/v-button&gt;
        &lt;/v-row&gt;
        </code></pre>

        <br>
        <p class="desc">圆角</p>
        <v-row>
            <v-col>
                <v-button styles="circle">default.circle</v-button>
            </v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row&gt;
            &lt;v-col&gt;
                &lt;v-button styles="circle"&gt;default.circle&lt;/v-button&gt;
            &lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <br>
        <h2>布局示例</h2>
        <p class="desc">左右平均布局</p>
        <v-row :gutter.Number="30" :avg="true">
            <v-col :span="6">
                <v-button>default</v-button>
            </v-col>
            <v-col :span="6">
                <v-button type="danger">danger</v-button>
            </v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter.Number="30" :avg="true"&gt;
            &lt;v-col :span="6"&gt;
                &lt;v-button&gt;default&lt;/v-button&gt;
            &lt;/v-col&gt;
            &lt;v-col :span="6"&gt;
                &lt;v-button type="danger"&gt;danger&lt;/v-button&gt;
            &lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

        <p class="desc">左右通屏布局</p>
        <v-row :gutter.Number="30">
            <v-col :span="6" :gutter.Number="0">
                <v-button styles="rectangle">default</v-button>
            </v-col>
            <v-col :span="6" :gutter.Number="0">
                <v-button type="info" styles="rectangle">info</v-button>
            </v-col>
        </v-row>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-row :gutter.Number="30"&gt;
            &lt;v-col :span="6" :gutter.Number="0"&gt;
                &lt;v-button styles="rectangle"&gt;default&lt;/v-button&gt;
            &lt;/v-col&gt;
            &lt;v-col :span="6" :gutter.Number="0"&gt;
                &lt;v-button type="info" styles="rectangle"&gt;info&lt;/v-button&gt;
            &lt;/v-col&gt;
        &lt;/v-row&gt;
        </code></pre>

    </div>
</template>
<script>
    import vRow from 'comb-ui/src/vendors/v-row.vue';
    import vCol from 'comb-ui/src/vendors/v-col.vue';
    import vButton from 'comb-ui/src/vendors/v-button';

    export default {
        components: { vButton, vRow, vCol },
        data () {
            return {
                disableClass: 'background: #DDDEE3;'
            };
        },
        created: function () {
            console.log('created');
        },
        mounted () {
            console.log('button.mounted... ');
        },
        methods: {

        }
    };
</script>
<style lang="scss">
    @import "../scss/variables";
    @import "../scss/_mixins";

    .page-button{
        padding: 0 ($grid-gutter-width / 2);

        .btn-list{
            height: pxTorem(54px);
            line-height: pxTorem(54px);
            text-align: center;
            color: #FFFFFF;
            font-size: pxTorem(17px);
            margin-top: pxTorem(20px);
            //@include box;
            /*@include pack(center);
            @include align;*/
            .btn-child{
                width: pxTorem(165px);
                height: pxTorem(39px);
            }
        }
        .list-bg{
            background: #FFFFFF;
        }
        .btn{
            width: pxTorem(345px);
            height: pxTorem(39px);
            line-height: pxTorem(44px);
            margin: pxTorem(20px) auto 0 auto;
        }
        .h44{
            height: pxTorem(44px);
            line-height: pxTorem(44px);
        }
        .btn-circle{
            width: pxTorem(300px);
            height: pxTorem(44px);
            line-height: pxTorem(44px);
            margin: pxTorem(20px) auto 0 auto;
        }
        .btn-full{
            height: pxTorem(44px);
            line-height: pxTorem(44px);
        }
        .sign{
            height:pxTorem(46px);
            line-height:pxTorem(46px);
        }
    }
    .margin-right-15{
        margin-right: pxTorem(15px);
    }


</style>

