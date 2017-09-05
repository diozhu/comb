<template>
    <div class="page page-mwap-info">
        <h2>通过原生跳转过来后</h2>
        <br>
        <p class="desc">当前参数：</p>
        <ul class="listview listview-form">
            <li v-for="(val, key) in parms">
                <v-cell :title="key" :value="val"></v-cell>
            </li>
        </ul>

        <br>

        <v-button size="full" styles="rectangle" @click="openMap">打开一个地图frame页</v-button>

    </div>
</template>

<script type="text/ecmascript-6">
    import vCell from '../vendor/v-cell.vue';
    import vButton from '../vendor/v-button';
    import { toonCall } from '../js/core/core'; // Examples of using the toon protocal. Author by Dio Zhu. on 2017.2.24

    export default {
        components: { vCell, vButton },

        data () {
            return {
                parms: {}
            };
        },

        mounted () {
    //        this.$logger.log('feed mounted... ');
            let searchURL = window.location.search;
            if (searchURL.length > 1) {
                searchURL = searchURL.substring(1, searchURL.length);
                let parms = searchURL.split('&');
                for (let i = 0;i < parms.length;i++) {
                    let parm = parms[i].split('=');
//                    this.parms[parm[0]] = parm[1];
                    this.$set(this.parms, parm[0], parm[1]);
                }
            }
        },

        methods: {
            openMap () {
                toonCall({
                    longitude: '116.4514501384251588',
                    latitude: '39.9951573546932124'
                }, 'mwap/map', res => {
                    res = res || {};
                    if (res.latitude && res.longitude) {
                        this.lat = res.latitude;
                        this.lng = res.longitude;
                        this.address = res.address;
//                        // todo: 正式项目相应调整
                        this.$toast(this.address);
                    }
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-mwap-info {

    }
</style>
