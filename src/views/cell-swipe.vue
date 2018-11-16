<template>
    <div class="page page-cell-swipe">
        <h2>v-cell-swipe</h2>

        <div class="attributes">
            <h2>API</h2>
            <p class="desc">扩展自v-cell，后缀(v-cell)的参数会透传给v-cell组件</p>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>title</td><td>左侧标题（v-cell）</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>label</td><td>副标题（v-cell）</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>icon</td><td>左侧图标（v-cell）</td><td>String</td><td>所有iconfont</td><td>-</td></tr>
                <tr><td>reverse</td><td>反转icon（v-cell）</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><td>is-link</td><td>是否显示右侧箭头（v-cell）</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><td>to</td><td>路由跳转对象（v-cell）</td><td>Object</td><td>-</td><td>-</td></tr>
                <tr><td>value</td><td>左侧说明文字（v-cell）</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>desc</td><td>右侧说明文字（v-cell）</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>right</td><td>右侧按钮对象数组<br>[{<br>content: '', // 标题<br>style: {}, // 样式<br>handler: ()=>{} // 回调函数<br>}]</td><td>Array</td><td>-</td><td>-</td></tr>
                <tr><td>item</td><td>用于返回的对象，会在right的handler中作为参数返回</td><td>Object</td><td>-</td><td>-</td></tr>
                <tr><th>slots</th><th colspan="4">说明</th></tr>
                <tr><td>-</td><td colspan="4">自定义右侧内容（v-cell）</td></tr>
                <tr><td>icon</td><td colspan="4">自定义左侧icon标签（v-cell）</td></tr>
                <tr><td>title</td><td colspan="4">自定义左侧标题（v-cell）</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <!--swipe样式-->
        <ul class="listview listview-form">
            <li v-for="(n, idx) in 3" :key="idx">
                <v-cell-swipe
                    :item="n"
                    :right="rightButton"
                    title="左滑试试"
                    @click.native="clickSwipe(n)"
                >
                </v-cell-swipe>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form"&gt;
            &lt;li v-for="(n, idx) in 3" :key="idx" class="height-auto"&gt;
                &lt;v-cell-swipe
                    :item="n"
                    :right="rightButton"
                    title="左滑试试"
                    @click.native="clickSwipe(n)"
                &gt;
                &lt;/v-cell-swipe&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>slots</h2>
        <!--swipe样式-->
        <ul class="listview listview-form listview-feed">
            <li v-for="(item, idx) in 3" :key="idx">
                <v-cell-swipe
                    :item="item"
                    class="no-border"
                    :right="rightButton"
                    @click.native="clickSwipe(idx)"
                >
                    <v-feed
                        :feedId = "'c_1407459100687437'"
                        :imgUrl = "'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'"
                        :title = "'老朱'"
                        :subtitle = "'人在江湖飘~'"
                        :classes = "'small'"
                    > </v-feed>
                </v-cell-swipe>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul class="listview listview-form listview-feed"&gt;
            &lt;li v-for="(item, idx) in 3" :key="idx"&gt;
                &lt;v-cell-swipe
                    :item="item"
                    class="no-border"
                    :right="rightButton"
                    @click.native="clickSwipe(idx)"
                &gt;
                    &lt;v-feed
                        :feedId = "'c_1407459100687437'"
                        :imgUrl = "'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'"
                        :title = "'老朱'"
                        :subtitle = "'人在江湖飘~'"
                        :classes = "'small'"
                    &gt; &lt;/v-feed&gt;
                &lt;/v-cell-swipe&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <div class="blank"></div>

    </div>
</template>

<script type="text/ecmascript-6">
import vCell from 'comb-ui/src/vendors/v-cell.vue';
import vCellSwipe from 'comb-ui/src/vendors/v-cell-swipe.vue';
import vFeed from 'comb-ui/src/vendors/v-feed.vue';
import Messagebox from 'comb-ui/src/vendors/v-message-box.js';

export default {
    components: { vCell, vCellSwipe, vFeed },

    data () {
        return {
            listData: []  //
        };
    },

    created () {
        this.rightButton = [
            {
                content: '删除',
                handler: this.btnHandler
            }
        ];
    },

    mounted () {
        console.log('cell-swipe.mounted... ');
    },

    methods: {
        btnHandler (res) {
            console.log('cell-swipe.methods.btnHandler: ', res);
            return Messagebox.confirm('确定执行此操作?', '提示').then(act => {
                this.$toast('您点击了确认~' + res);
                console.log('cell-swipe.handler: ', res, act);
            }).catch(e => {
                this.$toast({message: '您点击了取消~', duration: 500, position: 'bottom'});
            });
        },

        clickSwipe (i) {
            this.$toast(`这是第${i}条记录!`);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-cell-swipe {

        .listview-feed {
            .small .v-feed__img {
                margin-left: 0;
            }
            .v-cell__wrapper {
                /*padding-right: 0;*/
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }

    }
</style>
