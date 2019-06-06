<template>
    <div class="page page-audio">
        <div :class="[item.type]" v-for="(item, index) in audioItem" :key="index">
            <!--<audio v-if="item.type == 4" :src="item.resUrl" controls="controls">您的浏览器不支持 audio标签。</audio>-->
            <v-audio v-if="item.type === 4" :id="item.id" :src="item.resUrl" :desc="true" :drt="item.duration"></v-audio>

            <!--<video v-if="item.type == 3" :src="item.resUrl" :poster="item.imageUrl" controls="controls">您的浏览器不支持 video标签。</video>-->
            <v-video v-if="item.type === 3" :id="item.id" :src="item.resUrl" :poster="item.imageUrl" controls="controls">您的浏览器不支持 video标签。</v-video>
            <v-map :lng="item.longitude" :lat="item.latitude" :img="item.imageUrl" :location="item.location" v-if="item.type === 2" ></v-map>
        </div>
    </div>
</template>

<script>
    import vMap from 'comb-ui/src/vendors/v-map.vue';
    import vAudio from 'comb-ui/src/vendors/v-audio.vue';
    import vVideo from 'comb-ui/src/vendors/v-video.vue';

    export default {
        components: { vMap, vAudio, vVideo },
        data () {
            return {
                //                lng: '116.4514501384251588', // 经度
                //                lat: '39.9951573546932124', // 纬度
                //                img: '',
                //                location: '北京市朝阳区望京街道望京西路150号季景·沁园',
                channel: {},
                audioItem: [
                    {
                        type: 2,
                        text: '地图',
                        latitude: '39.9951573546932124', // 纬度
                        longitude: '116.4514501384251588', // 经度
                        location: '北京市朝阳区望京街道望京西路150号季景·沁园',
                        imageUrl: '',
                        duration: 0
                    },
                    {
                        type: 4,
                        id: 'iAudio1',
                        text: '语音',
                        resUrl: '',
                        imageHeight: 0,
                        imageWidth: 0,
                        duration: 8
                    },
                    {
                        type: 3,
                        id: 'iVideo0',
                        text: '视频',
                        resUrl: '',
                        imageUrl: 'http://b47x0OBE7x6jO024FMEfWcNhVilofOTGT8yAbBiNu94fF.mp4?vframe/jpg/offset/0/w/320/h/568',
                        imageHeight: 568,
                        imageWidth: 320,
                        duration: 5
                    },
                    {
                        type: 4,
                        id: 'iAudio3',
                        text: '语音',
                        resUrl: '',
                        imageHeight: 0,
                        imageWidth: 0,
                        duration: 6
                    }
                ],
                // item: {logo: '', label: '', url: ''}
            };
        },
        mounted () {
            console.log('album mounted... ');
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
