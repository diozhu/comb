<template>
    <div class="page page-swiper">
        <h2>swiper 参考样例</h2>

        <p class="desc"></p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>speed</td><td>动画时间（毫秒）</td><td>Number</td><td>-</td><td>300</td></tr>
                <tr><td>auto</td><td>自动播放的时间间隔（毫秒）</td><td>Number</td><td>-</td><td>3000</td></tr>
                <tr><td>defaultIndex</td><td>初始显示的轮播图的索引</td><td>Number</td><td>-</td><td>0</td></tr>
                <tr><td>continuous</td><td>是否可以循环播放</td><td>Boolean</td><td>-</td><td>true</td></tr>
                <tr><td>showIndicators</td><td>是否显示 indicators</td><td>Boolean</td><td>-</td><td>true</td></tr>
                <tr><td>prevent</td><td>是否在 touchstart 事件触发时阻止事件的默认行为。设为 true 可提高运行在低版本安卓浏览器时的性能</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><td>stopPropagation</td><td>是否在 touchstart 事件触发时阻止冒泡。</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><th>slots</th><th colspan="4">说明</th></tr>
                <tr><td>-</td><td colspan="4">轮播内容</td></tr>
            </table>
        </div>
        <p class="desc"></p>

        <h2>示例</h2>
        <v-swiper :auto="5000">
            <v-swiper-item v-for="(item, idx) in imgList" :key="idx">
                 <img :src="item.url | thumb">
                <!--<img v-lazy="item.url">-->
                <!--<v-image :value="item"></v-image>-->
            </v-swiper-item>
        </v-swiper>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-swiper :auto="5000"&gt;
            &lt;v-swiper-item v-for="item in imgList"&gt;
                &lt;img :src="item.url | thumb"&gt;
            &lt;/v-swiper-item&gt;
        &lt;/v-swiper&gt;
        </code></pre>

        <p class="desc">隐藏 indicators</p>
        <v-swiper :show-indicators="false">
            <v-swiper-item v-for="(item, idx) in imgList" :key="idx">
                <img :src="item.url | thumb">
            </v-swiper-item>
        </v-swiper>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-swiper :show-indicators="false"&gt;
            &lt;v-swiper-item class="slide1"&gt;1&lt;/v-swiper-item&gt;
            &lt;v-swiper-item class="slide2"&gt;2&lt;/v-swiper-item&gt;
            &lt;v-swiper-item class="slide3"&gt;3&lt;/v-swiper-item&gt;
        &lt;/v-swiper&gt;
        </code></pre>

        <p class="desc">取消自动播放</p>
        <v-swiper :auto="0">
            <v-swiper-item v-for="(item, idx) in imgList" :key="idx">
                <img :src="item.url | thumb">
            </v-swiper-item>
        </v-swiper>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-swiper :auto="0"&gt;
            &lt;v-swiper-item class="slide1"&gt;1&lt;/v-swiper-item&gt;
            &lt;v-swiper-item class="slide2"&gt;2&lt;/v-swiper-item&gt;
            &lt;v-swiper-item class="slide3"&gt;3&lt;/v-swiper-item&gt;
        &lt;/v-swiper&gt;
        </code></pre>

        <p class="desc">设置默认显示页</p>
        <v-swiper :auto="0" :defaultIndex="1">
            <v-swiper-item v-for="(item, idx) in imgList" :key="idx">
                <img :src="item.url | thumb">
            </v-swiper-item>
        </v-swiper>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-swiper :auto="0" :defaultIndex="1"&gt;
            &lt;v-swiper-item class="slide1"&gt;1&lt;/v-swiper-item&gt;
            &lt;v-swiper-item class="slide2"&gt;2&lt;/v-swiper-item&gt;
            &lt;v-swiper-item class="slide3"&gt;3&lt;/v-swiper-item&gt;
        &lt;/v-swiper&gt;
        </code></pre>

        <p class="desc">单个幻灯片</p>
        <v-swiper :show-indicators="false">
            <v-swiper-item><img :src="imgList[2].url | thumb"></v-swiper-item>
        </v-swiper>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-swiper :show-indicators="false"&gt;
            &lt;v-swiper-item class="slide1"&gt;SINGLE SLIDE&lt;/v-swiper-item&gt;
        &lt;/v-swiper&gt;
        </code></pre>

        <div class="blank"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    import vSwiper from 'comb-ui/src/vendors/v-swiper.vue';
    import vSwiperItem from 'comb-ui/src/vendors/v-swiper-item.vue';
    import vImage from 'comb-ui/src/vendors/v-image.vue';

    export default {
        name: 'page-swipe-label',

        components: { vSwiper, vSwiperItem, vImage },

        data () {
            return {
                imgList: [
                    {
                        url: '//s01.dongyin.net/dongyin-net/banner01.jpg',
                        // width: 3264,
                        // height: 2448
                    },
                    {
                        url: '//s01.dongyin.net/dongyin-net/banner02.jpg',
                        // width: 2448,
                        // height: 3264
                    },
                    {
                        url: '//s01.dongyin.net/dongyin-net/banner03.jpg',
                        // width: 2448,
                        // height: 3264
                    }
                ],
                currentLab: 0
            };
        },

        created () {
            // api.getImageList().then(res => {
            //     this.$set(this, 'imgList', res);
            // });
        },

        mounted () {
            console.log('swiper.mounted... ');
        },

        methods: {
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

    .page-swiper {

        .v-swiper {
            height: pxTorem(100px);
            color: #fff;
            font-size: pxTorem(15px);
            text-align: center;
            margin-bottom: pxTorem(20px);

            .v-swiper-item {
                line-height: pxTorem(100px);
                background-color: #fff;
                display: flex;
                justify-content: center;
                align-items: center;

                &.is-active {
                    display: flex;
                }

                img {
                    width: 100%;
                    height: initial;
                }
                img[lazy=loading] {
                    width: pxTorem(16px);
                    height: pxTorem(16px);
                }
            }
        }
    }
</style>
