<template>
    <div class="page page-album-info">
        <h2>图片显示逻辑 参考样例</h2>
        <p class="desc">直接传入数组，根据第一张图片宽高比自适应布局：</p>

        <p class="desc">单图</p>
        <v-album v-model="imgList1"></v-album>

        <p class="desc">双图：横排</p>
        <v-album v-model="imgList2"></v-album>

        <p class="desc">双图：纵排</p>
        <v-album v-model="imgList3"></v-album>

        <p class="desc">多图：横排</p>
        <v-album v-model="imgList4"></v-album>

        <p class="desc">多图：纵排</p>
        <v-album v-model="imgList5"></v-album>

    </div>
</template>

<script>
    import vLabel from '../vendor/v-label.vue';
    import vAlbum from '../vendor/v-album.vue';
    import logger from '../js/utils/logger';

    export default {
        name: 'page-album-info',

        components: { 'v-label': vLabel, 'v-album': vAlbum },

        data () {
            return {
                imgList1: [],
                imgList2: [],
                imgList3: [],
                imgList4: [],
                imgList5: []
            };
        },

        mounted () {
            logger.log('album-info activated... ');

            // 单横图
            this.imgList1 = [
                {
                    'url': 'http://apr.qiniu.toon.mobi/FnkFw7vjnev3LrlqBA_uTGf6sAKm',
                    'width': 402,
                    'height': 242
                }
            ];
            // 双图：横排
            this.imgList2 = [
                {
                    'url': 'http://apr.qiniu.toon.mobi/FkBD477TSGJVw6vJcoxywn0ATqrN',
                    'width': 362,
                    'height': 644
                },
                {
                    'url': 'http://apr.qiniu.toon.mobi/FkBD477TSGJVw6vJcoxywn0ATqrN',
                    'width': 362,
                    'height': 644
                }
            ];

            // 双图：纵排
            this.imgList3 = [
                {
                    'url': 'http://apr.qiniu.toon.mobi/FnkFw7vjnev3LrlqBA_uTGf6sAKm',
                    'width': 402,
                    'height': 242
                },
                {
                    'url': 'http://apr.qiniu.toon.mobi/FnkFw7vjnev3LrlqBA_uTGf6sAKm',
                    'width': 402,
                    'height': 242
                }
            ];

            // 多图：纵排
            this.imgList4 = [
                {
                    'url': 'http://apr.qiniu.toon.mobi/FkBD477TSGJVw6vJcoxywn0ATqrN',
                    'width': 362,
                    'height': 644
                },
                {
                    'url': 'http://apr.qiniu.toon.mobi/FkBD477TSGJVw6vJcoxywn0ATqrN',
                    'width': 362,
                    'height': 644
                },
                {
                    'url': 'http://apr.qiniu.toon.mobi/FkBD477TSGJVw6vJcoxywn0ATqrN',
                    'width': 362,
                    'height': 644
                }
            ];
            // 多图：横排
            this.imgList5 = [
                {
                    'url': 'http://apr.qiniu.toon.mobi/FnkFw7vjnev3LrlqBA_uTGf6sAKm',
                    'width': 402,
                    'height': 242
                },
                {
                    'url': 'http://apr.qiniu.toon.mobi/FnkFw7vjnev3LrlqBA_uTGf6sAKm',
                    'width': 402,
                    'height': 242
                },
                {
                    'url': 'http://apr.qiniu.toon.mobi/FnkFw7vjnev3LrlqBA_uTGf6sAKm',
                    'width': 402,
                    'height': 242
                }
            ];
        },

        methods: {

        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-album-info {
        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

        .desc {
            height: pxTorem(28px);
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            background: #f2f2f4;
        }

        .listview {
            .v-label {
                border: 0;
            }
        }
    }
</style>
