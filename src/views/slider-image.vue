<template>
    <div class="page page-list">
        <h2>多张，第一张是竖图</h2>
        <v-album v-model="img3"></v-album>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-album v-model="img3"&gt;&lt;/v-album&gt;
        </code></pre>
    </div>
</template>
<script>
    import vAlbum from '../vendor/v-album.vue';
    export default {
        components: { vAlbum },
        data () {
            return {
                title: '“拼”搏创新toon向未来 ——2015思源司庆活动圆满召开',
                img3: [
                    {
                        url: 'http://apr.qiniu.toon.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-',
                        width: 2448,
                        height: 3264
                    },
                    {
                        url: 'http://apr.qiniu.toon.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm',
                        width: 2448,
                        height: 3264
                    },
                    {
                        url: 'http://apr.qiniu.toon.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49',
                        width: 3264,
                        height: 2448
                    },
                    {
                        url: 'http://apr.qiniu.toon.mobi/Fuj_9AkRYImxjEKwYWO5zuuQm5Po',
                        width: 2448,
                        height: 3264
                    }
                ],
                sliderinit: {
                    currentPage: 0,
                    thresholdTime: 500, // 滑动时间阈值判定距离
                    thresholdDistance: 100, // 滑动距离阈值
                    slideSpeed: 1000, // 滑动速度
                    isPreview: true // 是否是预览
                    // loop: false, // 是否开启无缝模式
                    // height: 200 // 高度设置(如果是预览可以不用传)
//                    autoplay: 1000 // 自动播放:时间[ms]
                },
                currentUrls: [],
                showType: 0
            };
        },
        created: function () {
            this.$root.pages = this.img3;
            this.$root.sliderinit = {};
            this.$root.sliderinit = this.sliderinit;
            this.$logger.log(this.$root.sliderinit, 'slider-image');
            this.$logger.log('list.created');
        },
        mounted () {
            this.$logger.log('list.mounted... ');
        },
        methods: {
            /* goToViewImage () {
             this.$root.img = arguments[0];
             this.$router.push({path: 'viewImage'});
             } */
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
