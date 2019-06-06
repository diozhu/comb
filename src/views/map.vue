<template>
    <div class="page page-map">
        <h2>v-map</h2>

        <p class="desc">
            包含地图、高德地图
        </p>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>lng</td><td>经度</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>lat</td><td>维度</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>dragEnable</td><td>是否可拖拽</td><td>Boolean</td><td>-</td><td>false</td></tr>
                <tr><td>img</td><td>如有图则不初始化高德，直接显示图片</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>location</td><td>显示地址</td><td>String</td><td>-</td><td>-</td></tr>
                <tr><td>zoom</td><td>缩放</td><td>Number</td><td>-</td><td>17</td></tr>
            </table>
        </div>

        <h2>示例</h2>
        <v-map :lng="lng" :lat="lat" :dragEnable="true" :zoom="12"></v-map>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-map :lng="lng" :lat="lat" :dragEnable="true"&gt;&lt;/v-map&gt;
        </code></pre>

        <h2>静态图</h2>
        <v-map :lng="lng" :lat="lat" :img="img" :location="location"></v-map>
        <pre v-highlightjs @touchend.stop><code class="html">
        &lt;v-map :lng="lng" :lat="lat" :img="img" :location="location"&gt;&lt;/v-map&gt;
        </code></pre>

        <h2>高德地址搜索</h2>
        <p class="desc">打开地图搜索地址，可拖拽，根据范围搜索周边，范围可自定；</p>
        <v-button type="info" @click="openMap">打开地图</v-button>

        <p class="desc">切换marker</p>
        <v-button type="info" @click="goMarker">切换marker</v-button>

        <div class="blank"></div>
    </div>
</template>

<script type="text/ecmascript-6">
    //    import AMap from 'http://webapi.amap.com/maps?v=1.3&key=7f339c48990ad1b3bac62a5338b92041';
    //    require('http://webapi.amap.com/maps?v=1.3&key=7f339c48990ad1b3bac62a5338b92041');
    import vButton from 'comb-ui/src/vendors/v-button.vue';
    import vMap from 'comb-ui/src/vendors/v-map.vue';

    export default {
        components: { vButton, vMap },

        data () {
            return {
                lng: '116.4514501384251588', // 经度
                lat: '39.9951573546932124', // 纬度
                img: '',
                location: '北京市朝阳区望京街道望京西路150号季景·沁园',

                address: ''
            };
        },

        activated () {
            if (this.$router.direct()) {
                console.log('map.activated... in');
            } else {
                console.log('map.activated... back', this.$root.selectedPosition);
                this.$toast(this.$root.selectedPosition.name);
            }
        },

        mounted () {
            console.log('map.mounted... ', window.AMap);
        },

        methods: {
            openMap () {
                this.$router.push({name: 'map-selector', query: {lng: this.lng, lat: this.lat}});
            },

            goMarker () {
                this.$router.push({name: 'map-markers'});
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-map {
        padding: 0 ($grid-gutter-width / 2);

        .v-map {
            width: 100%;
            height: pxTorem(250px);
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }

        .msg {
            margin-top: pxTorem(10px);
            background: #f2f2f4;
            border: #333 1px solid;
        }
    }
</style>
