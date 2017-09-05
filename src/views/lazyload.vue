<template>
    <div class="page page-lazyload">
        <h2>延时加载 参考样例</h2>
        <v-feed
            :feedId = "'c_1407459100687437'"
            :imgUrl = "'http://scloud.toon.mobi/f/TptY54A58iDdczs9At3haUK6ulWuzMuEPd9bIJGv3kIfG_80_80_100_1.png'"
            :title = "'老朱'"
            :subtitle = "'人在江湖飘~'"
            :classes = "'small'"
        > </v-feed>

        <ul class="image-list">
            <li v-for="img in images">
                <!--<img :src="img.url | thumb">-->
                <img v-lazy="img.url">
            </li>
        </ul>
    </div>
</template>

<script>
import logger from '../js/utils/logger';
import vFeed from '../vendor/v-feed';

export default {
    components: {
        'v-feed': vFeed
    },

    data () {
        return {
            images: []
        };
    },

    mounted () {
        logger.log('feed mounted... ');

        this.images = [
            {url: 'http://apr.qiniu.toon.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm'},
            {url: 'http://apr.qiniu.toon.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-'},
            {url: 'http://apr.qiniu.toon.mobi/Fuj_9AkRYImxjEKwYWO5zuuQm5Po'},
            {url: 'http://apr.qiniu.toon.mobi/FqYcvx9zm1eM2ixxmA4niPQfiXP-'},
            {url: 'http://apr.qiniu.toon.mobi/FjwowYBSWevS_vYT0pDGGZiMIwtJ'},
            {url: 'http://apr.qiniu.toon.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49'},
            {url: 'http://apr.qiniu.toon.mobi/FtCiLntvXFGD_207B-OvwmgMDNjU'},
            {url: 'http://apr.qiniu.toon.mobi/FtPkdZgEDrJnORRcdzwkpv_DCRT5'},
            {url: 'http://apr.qiniu.toon.mobi/lru5pWzoqBgUGqjmZ5J-CLI2foqR'}
        ];
    },

    methods: {

    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-lazyload {
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

        .v-feed {
            margin-top: pxTorem(10px);
        }

        .image-list {
            li {
                /*border: darkcyan 1px solid;*/
                display: flex;
                align-items: center;
                justify-content: center;
                /*min-height: pxTorem(300px);*/
            }
        }
    }
</style>
