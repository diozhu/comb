<template>
    <div class="page page-lazyload">
        <h2>延时加载 参考样例</h2>
        <v-feed
            :feedId = "'c_1407459100687437'"
            :imgUrl = "'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'"
            :title = "'老朱'"
            :subtitle = "'人在江湖飘~'"
            :classes = "'small'"
        > </v-feed>

        <ul class="image-list">
            <li v-for="(img, index) in images" :key="index">
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
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'},
            {url: 'http://hy-sport-img.b0.upaiyun.com/upload_image/31383bcec5c838fbc9ca7b7bdaf42d08b75dc1d2.png'}
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
