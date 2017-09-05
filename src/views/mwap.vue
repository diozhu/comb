<template>
    <div class="page page-mwap">
        <h2>mwap参考样例</h2>
        <br>
        <p class="desc">当前参数：</p>
        <ul class="listview listview-form">
            <li v-for="(val, key) in parms">
                <v-cell :title="key" :value="val"></v-cell>
            </li>
        </ul>
        <br>
        <p class="desc">原生监听一个js函数，h5可以通过调用此js函数给原生传值：</p>
        <v-row :gutter.Number="30" :avg="true">
            <v-col :span="6">
                <v-button @click="openMwap">打开H5页面</v-button>
            </v-col>
            <v-col :span="6">
                <v-button type="danger" @click="openNative">打开原生页面</v-button>
            </v-col>
        </v-row>
        <br>
        <!--<v-row :gutter.Number="30">-->
            <!--<v-col :span="12">-->
                <!--<v-button @click="toonNotifies">Notify</v-button>-->
            <!--</v-col>-->
        <!--</v-row>-->
        <!--<br>-->
        <!--<v-row :gutter.Number="30">-->
            <!--<v-col :span="12">-->
                <!--<v-button @click="toonNotifies">Notify</v-button>-->
            <!--</v-col>-->
        <!--</v-row>-->
    </div>
</template>

<script type="text/ecmascript-6">
    import vCell from '../vendor/v-cell.vue';
    import vRow from '../vendor/v-row.vue';
    import vCol from '../vendor/v-col.vue';
    import vButton from '../vendor/v-button';
    import { toonNotify, toonOpenMwap, toonOpenNative } from '../js/core/core.js'; //eslint-disable-line

    export default {
        components: { vCell, vButton, vRow, vCol },

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
            toonNotifies () {
                toonNotify({
                    type: 'follow', // 关注
                    userId: '1', // 当前用户id
                    followUserId: '1', // 要关注的用户id
                    status: 1 // 0：未关注、1：已关注
                });
            },
            openMwap () {
                this.$logger.log('mwap.openMwap: ');
//                toonOpenMwap('http://172.31.240.66:8080/mwap-info');
                toonNotify({
                    type: 'openMwap', // 打开新webview
                    url: 'http://172.31.240.66:8080/mwap-info' // url
                });
            },
            openNative () {
                this.$logger.log('mwap.openNative: ');
//                toonOpenNative('nativePage1');
                toonNotify({
                    type: 'openNative', // 打开新原生页
                    url: 'nativePage1' // url
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-mwap {

        .v-row {
            padding: 0 pxTorem(15px);
        }
    }
</style>
