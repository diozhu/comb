<template>
    <div class="page page-list">
        <h2>图文样式 for H5</h2>

        <div class="attributes">
            <h2>v-text参数</h2>
            <table>
                <tr>
                    <th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th>
                </tr>
                <tr>
                    <td>value</td><td>要显示的字符串</td><td>String</td><td>-</td><td>-</td>
                </tr>
                <tr>
                    <td>limit</td><td>限定行数，0：不限制，1：限定一行，超出省略，以此类推</td><td>Number</td><td>0 - 5</td><td>0</td>
                </tr>
                <tr>
                    <td>length</td><td>限定文字长度，多余的会被剪切，避免出现省略号</td><td>Number</td><td>-</td><td>0</td>
                </tr>
                <tr>
                    <td>expandEnabled</td><td>展开标识</td><td>Boolean</td><td>true, <br>false</td><td>false</td>
                </tr>
            </table>
        </div>

        <div class="attributes">
            <h2>v-album参数</h2>
            <table>
                <tr>
                    <th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th>
                </tr>
                <tr>
                    <td>value</td><td>带有url、width、height的对象数组</td><td>Array</td><td>-</td><td>-</td>
                </tr>
            </table>
        </div>

        <h2>文字</h2>
        <h2>默认样式</h2>
        <ul class="desc">
            <li>
                <v-text value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul&gt;
            &lt;li&gt;
                &lt;v-text value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"&gt;&lt;/v-text&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>限定单行</h2>
        <ul class="desc">
            <li>
                <v-text :limit="1" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul&gt;
            &lt;li&gt;
                &lt;v-text :limit="1" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"&gt;&lt;/v-text&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>限定字数</h2>
        <ul class="desc">
            <li>
                <v-text :limit="1" :length="7" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul&gt;
            &lt;li&gt;
                &lt;v-text :limit="1" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"&gt;&lt;/v-text&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>限定多行</h2>
        <ul class="desc">
            <li>
                <v-text :limit="3" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul&gt;
            &lt;li&gt;
                &lt;v-text :limit="3" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"&gt;&lt;/v-text&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>单击展开</h2>
        <ul class="desc">
            <li>
                <v-text :limit="3" :expandEnabled="true" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul&gt;
            &lt;li&gt;
                &lt;v-text :limit="3" :expandEnabled="true" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"&gt;&lt;/v-text&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <h2>自定义样式</h2>
        <ul class="desc">
            <li>
                <v-text class="custom" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"></v-text>
            </li>
        </ul>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;ul&gt;
            &lt;li&gt;
                &lt;v-text class="custom" value="这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；"&gt;&lt;/v-text&gt;
            &lt;/li&gt;
        &lt;/ul&gt;
        </code></pre>

        <ul class="desc">
            <li>
                <v-text class="custom" value="    这一天还是来了，科比亲自宣布本赛季结束后退役。科比在退役文章中这样写道：
        亲爱的篮球：当我还“树雄心创伟业为江山添色，立壮志写春秋与日月争辉，祝21岁生日快乐；
        ..."></v-text>
            </li>
        </ul>

        <h2>相册组件 v-album</h2>
        <h2>单张竖图</h2>
        <v-album v-model="img1"></v-album>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-album v-model="img1"&gt;&lt;/v-album&gt;
        </code></pre>

        <h2>两张，第一张是竖图</h2>
        <v-album v-model="img2"></v-album>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-album v-model="img2"&gt;&lt;/v-album&gt;
        </code></pre>

        <h2>多张，第一张是竖图</h2>
        <v-album v-model="img3"></v-album>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-album v-model="img3"&gt;&lt;/v-album&gt;
        </code></pre>

        <h2>单张横图</h2>
        <v-album v-model="img11"></v-album>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-album v-model="img11"&gt;&lt;/v-album&gt;
        </code></pre>

        <h2>两张，第一张是横图</h2>
        <v-album v-model="img12"></v-album>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-album v-model="img12"&gt;&lt;/v-album&gt;
        </code></pre>

        <h2>多张，第一张是横图</h2>
        <v-album v-model="img13" @click="goViewer"></v-album>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-album v-model="img13"&gt;&lt;/v-album&gt;
        </code></pre>

    </div>
</template>
<script>
import vText from '../vendor/v-text.vue';
import vAlbum from '../vendor/v-album.vue';
import vLi from '../vendor/v-li.vue';
import vImageList from '../vendor/v-image-list.vue';

export default {
    components: { vText, vAlbum, vLi, vImageList },
    data () {
        return {
            title: '拼搏创新',
            img1: [
                {
                    url: 'http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-',
                    width: 2448,
                    height: 3264
                }
            ],
            img2: [
                {
                    url: 'http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-',
                    width: 2448,
                    height: 3264
                },
                {
                    url: 'http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm',
                    width: 2448,
                    height: 3264
                }
            ],
            img3: [
                {
                    url: 'http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-',
                    width: 2448,
                    height: 3264
                },
                {
                    url: 'http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm',
                    width: 2448,
                    height: 3264
                },
                {
                    url: 'http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49',
                    width: 3264,
                    height: 2448
                },
                {
                    url: 'http://apr.qiniu.mobi/Fuj_9AkRYImxjEKwYWO5zuuQm5Po',
                    width: 2448,
                    height: 3264
                }
            ],

            img11: [
                {
                    url: 'http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49',
                    width: 3264,
                    height: 2448
                }
            ],
            img12: [
                {
                    url: 'http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49',
                    width: 3264,
                    height: 2448
                },
                {
                    url: 'http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm',
                    width: 2448,
                    height: 3264
                }
            ],
            img13: [
                {
                    url: 'http://apr.qiniu.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49',
                    width: 3264,
                    height: 2448
                },
                {
                    url: 'http://apr.qiniu.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-',
                    width: 2448,
                    height: 3264
                },
                {
                    url: 'http://apr.qiniu.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm',
                    width: 2448,
                    height: 3264
                },
                {
                    url: 'http://apr.qiniu.mobi/Fuj_9AkRYImxjEKwYWO5zuuQm5Po',
                    width: 2448,
                    height: 3264
                }
            ],
            currentUrls: [],
            showType: 0
        };
    },
    created: function () {
        this.$logger.log('list.created');
    },
    mounted () {
        this.$logger.log('list.mounted... ');
    },
    methods: {
        goToViewImage () {
            this.$root.img = arguments[0];
            this.$router.push({path: 'viewImage'});
        },

        goViewer (e, idx) {
            this.$logger.log('list.goViewer: ', e, idx);
            //                e.stopPropagation();
            //                e.preventDefault();
            this.$root.swipes = {list: this.img13, idx: idx}; // swipe
            this.$root.img = this.img13; // viewer
            this.$router.push({name: 'viewer', query: {idx: idx}});
            // this.$router.push({name: 'swipe'});
            return;
        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/_mixins";

    .page-list{
        padding: 0 ($grid-gutter-width / 2);

        .custom {
            color: darkblue;
        }

        .li-img-one{
            height: pxTorem(178px);
        }
        .p15{
            padding: pxTorem(15px);
        }
        .li-img-two{
            height: pxTorem(170px);
            width: pxTorem(170px);
        }
        .li-img-three{
            height: pxTorem(111px);
            width: pxTorem(111px);
        }

    }
</style>
