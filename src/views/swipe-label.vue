<template>
    <!--<div class="page page-swipe-label" @transitionEnd="onTransitionEnd" @webkitTransitionEnd="onTransitionEnd">-->
    <div class="page page-swipe-label">
        <h2>滑动菜单参考样例</h2>

        <p class="desc">滑动菜单，可实现超出屏幕宽度后左右滑动的效果。</p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>fixed</td><td>屏幕滚动时，是否固定</td><td>Boolean</td><td>-</td><td>-</td></tr>
                <tr><th>slots</th><th colspan="4">说明</th></tr>
                <tr><td>-</td><td colspan="4">需滚动的内容</td></tr>
            </table>
        </div>
        <p class="desc">注：关于fixed，如果希望页面滚动超出滑动菜单时，让菜单置顶功能，目前有个小问题。
            在ios中，如果浮动元素存在于滚动条内，由于滚动时ios会停止一切js计算，最后造成的效果是飘忽不定；
            针对这个问题，目前采取的方法是使用position:stiky;的方式，此属性可去caniuse上查看兼容性，苹果的兼容性非常好，所以我进行了机型判断，如果是android，直接用fixed；
            不过并不完美，当菜单内容宽度超出屏幕宽度太多的时候，个别ios系统会出现内容重绘，造成白底闪烁。你可以试试把下面的labs数组加到10个以上，会很明显（iphone 6 plus 10.x）；
            试过了transform、overflow等，希望在bfc及合并层上能解决重绘的问题，但是目前还真没好的解决方案，在此备注，有时间时再尝试；
            在找到更好的方案前，希望：1.尽量不要让滚动条内的元素浮动定位，尽量说服产品。。。2.如果非要悬浮，最好不要超屏幕宽度，超过就会因为重绘而闪烁。
        </p>

        <h2>示例</h2>
        <v-swipe-label :fixed="true" class="label-swipe">
            <div v-for="item in labs"
                 :class="['itm', {cur: currentLab==item.id}]"
                 @click="clickLabel(item)"
            >{{item.txt}}</div>
        </v-swipe-label>
        <pre v-highlightjs @touchend.stop><code class="html">
&lt;v-swipe-label :fixed="true"&gt;
    &lt;div v-for="item in labs"
         :class="['itm', {cur: currentLab==item.id}]"
         @click="clickLabel(item)"
    &gt;{ { item.txt } }&lt;/div&gt;
&lt;/v-swipe-label&gt;
        </code></pre>
        <pre v-highlightjs @touchend.stop><code class="html">
export default {
    data() {
        return {
            labs: [
                {id: 0, txt: '菜单一'},
                {id: 1, txt: '菜单二'},
                {id: 2, txt: '菜单三'},
                {id: 3, txt: '菜单四'},
                {id: 4, txt: '菜单五'},
                {id: 5, txt: '菜单六'}
            ],
            currentLab: 0
        };
    },
    methods: {
        clickLabel (item) {
            console.log('click label: ', item);
            this.currentLab = item.id;
        }
    }
};
        </code></pre>

        <h2>组件嵌套</h2>
        <v-swipe-label :fixed="true" class="feed-swipe">
            <!--<div v-for="item in labs"-->
                <!--:class="['itm', {cur: currentLab==item.id}]"-->
            <!--&gt;{{item.txt}}</div>-->
            <v-feed v-for="(item, idx) in labs"
                    :key="idx"
                    :feedId = "'c_1407459100687437'"
                    :imgUrl = "'http://scloud.toon.mobi/f/TptY54A58iDdczs9At3haUK6ulWuzMuEPd9bIJGv3kIfG_80_80_100_1.png'"
                    :title = "'老朱'"
                    :subtitle = "'人在江湖飘~'"
                    class = "small"
                    :class="[{cur: currentLab==item.id}]"
                    @click.native="clickLabel(item)"
            > </v-feed>
        </v-swipe-label>


        <p class="desc auto-height">组件需要根据slot内容的实际宽度计算左滑、右划的边界。
            如果slot为子组件，可能会发生组件渲染先后顺序问题，造成swipe组件无法获取真实宽度进行算，导致滑动失效。
            如遇此情况，请在子组件的mounted或created中通过init()方法进行rebuild。
        </p>
        <pre v-highlightjs @touchend.stop><code class="html">
            if (typeof this.$parent.$parent.init === 'function') {
                this.$parent.$parent.init(); // 由于父子组件嵌套，渲染顺序原因，在此需要重新调用父组件init方法重新初始化宽度。 Author by Dio Zhu. on 2017.3.10
            }
        </code></pre>

        <div class="num">
            <p v-for="n in 300">模拟数据{{n}}</p>
        </div>
        <div class="blank"></div>
    </div>
</template>

<script>
import vFeed from 'comb-ui/src/vendors/v-feed.vue';
import vSwipeLabel from 'comb-ui/src/vendors/v-swipe-label.vue';

export default {
    name: 'page-swipe-label',

    components: { vSwipeLabel, vFeed },

    data () {
        return {
            labs: [
                {id: 0, txt: '菜单一'},
                {id: 1, txt: '菜单二'},
                {id: 2, txt: '菜单三'},
                {id: 3, txt: '菜单四'},
                {id: 4, txt: '菜单五'},
                {id: 5, txt: '菜单六'}
            ],
            currentLab: 0
        };
    },

    mounted () {
        console.log('swipe label mounted... ');
    },

    methods: {
        onTransitionEnd (e) { // transitionEnd事件测试，1.需要兼容性写法触发，2.只能直接用到dom上，transition、router-view元素不行。。。Author by Dio Zhu. on 2017.5.21
            console.log(`!!!!!!!!![swipe-label].onTransitionEnd!`, e);
        },
        clickLabel (item) {
            console.log('click label: ', item);
            this.currentLab = item.id;
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-swipe-label {

        /*.v-swipe-label__container {*/
            /*border-bottom: red 2px solid;*/
        /*}*/

        /*.num {*/
            /*padding: pxTorem(5px) pxTorem(15px);*/

            /*p {*/
                /*padding-top: pxTorem(10px);*/
                /*font-size: pxTorem(15px);*/
            /*}*/
        /*}*/

        .label-swipe {
            height: pxTorem(38px);

            .v-swipe-label__container {
                height: pxTorem(38px);

                .v-swipe-label__content > div {
                    transition: border-color 500ms;

                    &.cur {
                        border-bottom: $brand-primary pxTorem(2px) solid;
                        //-webkit-animation: animat 500ms 1;
                        //-o-animation: animat 500ms 1;
                        //animation: animat 500ms 1;
                    }
                }
            }
        }

        .feed-swipe {
            height: pxTorem(100px);

            .v-swipe-label__container {
                height: pxTorem(100px);
            }

            .v-feed {
                height: initial;
                border: #ff8f4f 1px solid;
                border-radius: pxTorem(6px);
                padding: pxTorem(10px);

                &.cur {
                    border: $brand-primary 1px solid;
                }

                .v-feed__img {
                    margin: 0;
                }
                .v-feed__con {
                    margin-top: pxTorem(10px);
                }
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(10px);
            background: orangered;
        }

    }
</style>
