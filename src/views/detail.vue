<template>
    <div class="page page-detail">
        <h2>测试详情页</h2>

        <v-feed
            :feedId = "'c_1407459100687437'"
            :imgUrl = "'http://scloud.toon.mobi/f/TptY54A58iDdczs9At3haUK6ulWuzMuEPd9bIJGv3kIfG_80_80_100_1.png'"
            :title = "'老朱'"
            :subtitle = "'人在江湖飘~'"
            :classes = "'small'"
        > </v-feed>

        <p class="desc">模拟列表到详情：
            1. 上一个页面跳转的时候，添加了hash，路由跳转后直接跳转到锚点；
            2. 本页面上面是详情，下面嵌套了一个组件，组件里面有两个滚动条。请注意下面对于容器的高度限定，必须取消overflow，使得滚动容器上升到window！
            3. 如果是单滚动条或者只有两个平级滚动条的话（如之前的两个list页面），不用设置任何东西，滚动条会默认使用容器高度进行滚动即可（app.vue中限定了容器高度）；
                    -- Author by Dio Zhu. on 2017.3.28
        </p>

        <!--<div class="blank"></div>-->

        <!--<div id="labDiv">-->
            <!--<v-feed-->
                <!--:feedId = "'c_1407459100687437'"-->
                <!--:imgUrl = "'http://scloud.toon.mobi/f/TptY54A58iDdczs9At3haUK6ulWuzMuEPd9bIJGv3kIfG_80_80_100_1.png'"-->
                <!--:title = "'老朱'"-->
                <!--:subtitle = "'人在江湖飘~'"-->
                <!--:classes = "'small'"-->
            <!--&gt; </v-feed>-->
        <!--</div>-->


        <ul class="listview-info-img">
            <li v-for="img in images" :style="{height: img.height && img.width ? parseInt(screenWidth / (img.width/img.height)) + 'px' : 'auto'}">
                <!--<img :src="img.url | thumb">-->
                <img v-lazy="img.url">
            </li>
        </ul>
        <!--<p-comments-btn :praised="!!1"></p-comments-btn>-->

        <!--<p-comments :subject-id="1002"></p-comments>-->

    </div>
</template>

<script>
import vFeed from '../vendor/v-feed.vue';
// import pComments from '../../src_old/components/p-comments.vue';
// import pCommentsBtn from '../../src_old/components/p-comments-btn.vue';
import * as api from '../js/core/api';

export default {
    // components: { vFeed, pComments, pCommentsBtn },
    components: { vFeed },

    data () {
        return {
            subjectId: parseInt(this.$route.params.id || 0),
            images: []
        };
    },
    computed: {
        screenWidth () {
            return document.body.offsetWidth;
        }
    },

    created () {
        this.$logger.log('detail.created... ');

        this.init();
    },
    mounted () {
        this.$logger.log('detail.mounted... ');
    },

    methods: {
        init () {
            this.getDetail();
        },

        getDetail () {
            return api.getDelay({delay: 2000}, {loading: true}).then(res => {
                this.$logger.log('detail.getDetail: ', res);
                this.images = [
                    {url: 'http://apr.qiniu.toon.mobi/FsFj1WAycSZm65jGvE_vvMdFiMmm', width: '2448', height: '3264'},
                    {url: 'http://apr.qiniu.toon.mobi/FmXTkxsW6lyvwYYph3Z_9OcuTdH-', width: '2448', height: '3264'},
//            {url: 'http://apr.qiniu.toon.mobi/Fuj_9AkRYImxjEKwYWO5zuuQm5Po'},
//            {url: 'http://apr.qiniu.toon.mobi/FqYcvx9zm1eM2ixxmA4niPQfiXP-'},
//            {url: 'http://apr.qiniu.toon.mobi/FjwowYBSWevS_vYT0pDGGZiMIwtJ'},
//            {url: 'http://apr.qiniu.toon.mobi/FqvlnzdAtya7MWSoqq68QE-O5q49'},
//            {url: 'http://apr.qiniu.toon.mobi/FtCiLntvXFGD_207B-OvwmgMDNjU'},
//            {url: 'http://apr.qiniu.toon.mobi/FtPkdZgEDrJnORRcdzwkpv_DCRT5'},
                    {url: 'http://apr.qiniu.toon.mobi/lru5pWzoqBgUGqjmZ5J-CLI2foqR', width: '11520', height: '3178'}
                ];
            });
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-detail {
        .blank {
            height: pxTorem(800px);
            border: darkorange 1px solid;
        }

        .v-scroll-container {
            height: initial!important;
            overflow: initial!important;
        }
    }
</style>
