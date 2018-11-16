<template>
    <div class="page page-map-markers">
        <h2>地图 参考样例</h2>

        <v-map :lng="lng" :lat="lat" :dragEnable="true" :markers="markers"></v-map>

        <br>
        <v-row>
            <v-col :gutter="30">
                <v-button size="small" @click="handle1">张三</v-button>
                <v-button type="danger" size="small" @click="handle2">李四</v-button>
                <v-button type="primary" size="small" @click="handle3">王五</v-button>
                <v-button type="info" size="small" @click="handle4">赵六</v-button>
            </v-col>
        </v-row>
    </div>
</template>

<script type="text/ecmascript-6">
import vMap from 'comb-ui/src/vendors/v-map.vue';

export default {
    components: {vMap},

    data () {
        return {
            lng: '116.4514501384251588', // 经度
            lat: '39.9951573546932124', // 纬度
            markers: []
        };
    },

    created () {
        console.log('layout.mounted... ');
    },

    methods: {
        handle1 () {
            console.log('map-markers.handle1: ');
            this.markers = [
                {
                    position: ['116.4524501384251588', '39.9961573546932124'],
                    icon: 1
                },
                {
                    position: ['116.4514501384251588', '39.9961573546932124'],
                    icon: 1
                }
            ];
        },
        handle2 () {
            console.log('map-markers.handle2: ');
            this.markers = [{
                position: ['116.4524501384251588', '39.9951573546932124'],
                icon: 1
            }];
        },
        handle3 () {
            console.log('map-markers.handle3: ');
            this.markers = [
                {
                    position: ['116.4524501384251588', '39.9961573546932124'],
                    icon: 1
                },
                {
                    position: ['116.4524501384251588', '39.9951573546932124'],
                    icon: 1
                },
                {
                    position: ['116.4514501384251588', '39.9961573546932124'],
                    icon: 1
                }
            ];
        },
        handle4 () {
            console.log('map-markers.handle4: ');
            this.markers = [
                {
                    position: ['116.4524501384251588', '39.9961573546932124'],
                    icon: 1
                },
                {
                    position: ['116.4534501384251588', '39.9961573546932124'],
                    icon: 1
                },
                {
                    position: ['116.4514501384251588', '39.9961573546932124'],
                    icon: 1
                }
            ];
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-map-markers {
        /*padding: 0 ($grid-gutter-width / 2);*/

        .v-map {
            height: pxTorem(500px);
        }
    }
</style>
