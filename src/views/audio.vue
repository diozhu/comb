<template>
    <div class="page page-audio">
        <v-feed
                :feedId="'c_1407459100687437'"
                :imgUrl="'http://scloud.toon.mobi/f/TptY54A58iDdczs9At3haUK6ulWuzMuEPd9bIJGv3kIfG_80_80_100_1.png'"
                :title="'老朱'"
                :subtitle="'人在江湖飘~'"
                :classes="'title small no-border'"
        ></v-feed>
        <div :class="[item.type]" v-for="item in audioItem">
            <!--<audio v-if="item.type == 4" :src="item.resUrl" controls="controls">您的浏览器不支持 audio标签。</audio>-->
            <v-audio v-if="item.type === 4" :id="item.id" :src="item.resUrl" :desc="true" :drt="item.duration"></v-audio>

            <!--<video v-if="item.type == 3" :src="item.resUrl" :poster="item.imageUrl" controls="controls">您的浏览器不支持 video标签。</video>-->
            <v-video v-if="item.type === 3" :id="item.id" :src="item.resUrl" :poster="item.imageUrl" controls="controls">您的浏览器不支持 video标签。</v-video>
            <v-map :lng="item.longitude" :lat="item.latitude" :img="item.imageUrl" :location="item.location" v-if="item.type === 2" ></v-map>
        </div>
        <v-share :logo="item.logo || ''" :label="item.label" :url="item.url" :channel="channel"></v-share>
    </div>
</template>

<script>
    import logger from '../js/utils/logger';
    import vFeed from '../vendor/v-feed';
    import vMap from '../vendor/v-map.vue';
    import vShare from '../vendor/v-share.vue';
    import vAudio from '../vendor/v-audio.vue';
    import vVideo from '../vendor/v-video.vue';

    export default {
        components: { logger, vFeed, vMap, vShare, vAudio, vVideo },
        data () {
            return {
//                lng: '116.4514501384251588', // 经度
//                lat: '39.9951573546932124', // 纬度
//                img: 'http://rssqiniu.systoon.com/500283127.898516.jpg',
//                location: '北京市朝阳区望京街道望京西路150号季景·沁园',
                channel: {},
                audioItem: [
                    {
                        type: 2,
                        text: '地图',
                        latitude: '39.9951573546932124', // 纬度
                        longitude: '116.4514501384251588', // 经度
                        location: '北京市朝阳区望京街道望京西路150号季景·沁园',
                        imageUrl: 'http://rssqiniu.systoon.com/500283127.898516.jpg',
                        duration: 0
                    },
                    {
                        type: 4,
                        id: 'iAudio1',
                        text: '语音',
                        resUrl: 'http://fast.scloud.systoon.com/f/sc9HVG2ajdS4sPTlL3BhSpKDRcVunHEuSqdylPRzlZ41.mp3',
                        imageHeight: 0,
                        imageWidth: 0,
                        duration: 8
                    },
                    {
                        type: 3,
                        id: 'iVideo0',
                        text: '视频',
                        resUrl: 'http://fast.scloud.systoon.com/f/b47x0OBE7x6jO024FMEfWcNhVilofOTGT8yAbBiNu94fF.mp4',
                        imageUrl: 'http://b47x0OBE7x6jO024FMEfWcNhVilofOTGT8yAbBiNu94fF.mp4?vframe/jpg/offset/0/w/320/h/568',
                        imageHeight: 568,
                        imageWidth: 320,
                        duration: 5
                    },
                    {
                        type: 4,
                        id: 'iAudio3',
                        text: '语音',
                        resUrl: 'http://fast.scloud.systoon.com/f/9RbJ4rPxcTb2e2R57vDxjY6E7XlWtDw3i8sN1It73Ik1.mp3',
                        imageHeight: 0,
                        imageWidth: 0,
                        duration: 6
                    }
                ],
                item: {logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_100.png', label: 'toon通', url: 'http://a.app.qq.com/o/simple.jsp?pkgname=com.systoon.beijingtoon'}
            };
        },
        mounted () {
            logger.log('album mounted... ');
        },

        methods: {
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-audio {
        padding: pxTorem(10px) pxTorem(15px) pxTorem(65px) pxTorem(15px);
        .v-map {
            margin-bottom: pxTorem(15px);
            width: 100%;
            height: pxTorem(250px);
        }
    }
</style>
