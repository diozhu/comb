<template>
    <div class="page page-map-selector">
        <v-search v-model="keywords" @handle-search="handleSearch"></v-search>
        <div ref="amap" class="amap">
            <v-map
                :lng="lng"
                :lat="lat"
                :markers="markers"
                :keywords="keywords"
                placeSearch
                :radius="500"
                :locations="locations"
                @locations-change="handleLocationsChange"
                :dragEnable="true"
            ></v-map>
        </div>
        <div class="amap-locations"
             v-scroll="getList"
        >
            <ul class="amap-locations__content">
                <!--<li v-for="item in locations">-->
                    <!--<p class="amap-locations__name">{{ item.name }}</p>-->
                    <!--<p class="amap-locations__address">{{ item.address }}</p>-->
                <!--</li>-->
                <li>
                    <v-radio v-model="location" :options="locationsFormated"></v-radio>
                </li>
            </ul>
        </div>
        <v-button size="full" styles="rectangle" @click="goBack">确定</v-button>
    </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import vMap from 'comb-ui/src/vendors/v-map.vue';
import vSearch from 'comb-ui/src/vendors/v-search.vue';
import vScroll from 'comb-ui/src/vendors/v-scroll.js';
import vRadio from 'comb-ui/src/vendors/v-radio.vue';
import vButton from 'comb-ui/src/vendors/v-button.vue';
import bus from 'comb-ui/src/vendors/eventbus.js';

Vue.use(vScroll);

export default {
    components: { vMap, vSearch, vRadio, vButton },

    data () {
        return {
            keywords: '',
            lng: '116.458076',
            lat: '39.996648',
            markers: [{
                position: [116.458076, 39.996648],
                draggable: false,
                isPanTo: true,
                content: '<div class="marker-default"></div>'
            }],
            scrollTarget: null,
            location: '',
            locations: [],          // 地址选择列表
            locationsFormated: []
        };
    },

    watch: {
        location (val) {
            if (!val || typeof val === 'undefined') return;
            let pos = JSON.parse(val);
            if (!pos || !pos.position) return;
            bus.$emit('v-map.changeMarker', pos.position);
        }
    },

    mounted () {
        console.log('map-selector.mounted... ');
        this.lng = this.$route.query.lng || '';
        this.lat = this.$route.query.lat || '';
    },

    methods: {
        handleSearch () {
            console.log('map-selector.handleSearch... ', this.keywords);
        },
        getList () {
            console.log('map-selector.getList... ');
            let amap = null;
            this.$children.forEach(v => {
                if (v.amap) amap = v;
            });
            if (!amap) return Promise.reject('地图组件加载失败');
            if (this.locations && this.locations.length > 0) {
                amap.searchNearBy({keywords: this.keywords});
            } else {
                amap.searchNearBy({keywords: this.keywords, refreshTag: true});
            }
        },
        handleLocationsChange (res) {
            console.log('map-selector.handleLocationsChange... ', res);
            if (res.refreshTag) {
                this.locations = res.data;
            } else if (res.data) {
                this.locations = this.locations.concat(res.data);
            }
            this.locationsFormated = [];
            this.locations.forEach((v) => {
                this.locationsFormated.push({
                    label: v.name,
                    sublabel: v.address,
                    value: JSON.stringify({
                        name: v.name,
                        address: v.address,
                        position: [v.location.lng, v.location.lat]
                    })
                });
            });
        },

        goBack () {
            this.$root.selectedPosition = this.location ? JSON.parse(this.location) : null;
            this.$router.go(-1);
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-map-selector {

        .v-search {
            position: absolute;
            left: 0;
            top: 0;
            z-index: 99;
        }

        .amap {
            width: 100%;
            height: 38%;

            .amap-pl-pc { // 搜索结果
                display: none;
            }
        }

        .amap-locations {
            height: 62%;
            overflow: auto;
            padding-bottom: pxTorem(40px);
        }
        .amap-locations__content {
            /*margin: 0 pxTorem(15px);*/

            .v-radio__value {
                padding: 0;

                > label {
                    border-bottom: #ccc 1px solid;
                    padding: pxTorem(8px) 0;
                }
            }
        }

        .amap-locations__name {
            font-size: pxTorem(14px);
            margin-top: pxTorem(15px);
        }
        .amap-locations__address {
            font-size: pxTorem(12px);
            margin-top: pxTorem(6px);
        }

        .v-btn {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 99;
        }
    }
</style>
