<template>
    <div class="page page-compiler">
        <div class="attributes">
            <h2>分享组件API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>说明</th></tr>
                <tr><td>share</td><td>分享（这里只需要配置app的logo,名字，app名字（如果是toon类app：例如北京通  bjt，如若不是例如邻聚：linju),ios下载地址的id号）</td><td>obj</td><td>非空</td></tr>
                <tr><td>toonObj</td><td>调用Toon协议(拉起唤醒toon类型应用)</td><td>obj</td><td>非空</td></tr>
                <tr><td>sensorsdataReady</td><td>埋点表示(ture表示加上埋点)</td><td>Boolean</td><td>默认false</td></tr>
                <tr><td>sensorsdataUrl</td><td>埋点所配置的Url(此配置是走闫珍所配置的推广渠道地址)</td><td>obj</td><td>如加上埋点则非空</td></tr>
            </table>
            <img src="../assets/1.png" alt="">
            <h2>埋点组件API</h2>
            <table>
                <tr><th>说明</th></tr>
                <tr><td>主要步骤及知识点：<br/>
                        (1)如需加上埋点则直接在分享组件里面引入v-sensorsdata埋点组件<br/>
                        (2)给全局一个标识以此判断是否注册埋点对象<br/>
                        (3)如果有了全局加载标识，但是还没加载完成，在这里递归检测，这里设定50次，2.5s，可自行配置<br/>
                </td></tr>
            </table>
            <img src="../assets/2.png" alt="">

        </div>
    </div>
    <!--<div class="btn">-->
        <!--<button class="save-btn btn-on-hold" @click="goToonEditer">打开富文本</button>-->
    <!--</div>-->
</template>
<script>
    import { toonCall } from '../js/core/core';
    import vAudio from '../vendor/v-audio.vue';
    import vVideo from '../vendor/v-video.vue';

    export default {
        components: {vAudio, vVideo},
        data () {
            return {
                params: {
                    'text': {
                        'count_min': 0,
                        'count_max': 20
                    },
                    'image': {
                        'count_min': 0,
                        'count_max': 20
                    },
                    'map': {
                        'count_min': 0,
                        'count_max': 20
                    },
                    'title': {
                        'char_min': 0,
                        'char_max': 20
                    },
                    'voice': {
                        'time': 0,
                        'count': 20,
                        'format': 'AMR_NB',
                        'encoder': 'encoder'
                    },
                    'video': {
                        'source': 0,
                        'time': 0,
                        'count': 2,
                        'videoEncodingBitRate': null,
                        'format': '720P',
                        'encoder': 'encoder',
                        'size': '640*480',
                        'audioEncodingBitRate': 44100
                    },
                    'locationEnable': false,
                    'spreadEnable': false,
                    'repeiptEnable': false,
                    'cloud': {
                        'type': 1,
                        'url': 'http://www.cloud.com',
                        'token': '4554aqecg9'
                    }
                },
                objData: null,
                contentData: [],
                imageDate: [],
                idRandom: parseInt(Math.random())
            };
        },
        computed: {
        },
        mounted () {
//            this.goToonEditer();
        },
        methods: {
            goToonEditer () {
                let _self = this;
                toonCall(this.params, 'trends/editor', function (e) {
                    console.log(e, 'success');
                    _self.objData = JSON.parse(e);
                    _self.contentData = _self.objData.detailContent;
                }, function (err) {
                    console.log(err, 'error');
                });
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
    @import "../scss/markdown.scss";
    .page-compiler{
        padding: 0 pxTorem(15px) pxTorem(85px) pxTorem(15px);
        width: 100%;
        .row-red{
            color: red;
        }
        h3{
            height: pxTorem(20px);
            font-size: pxTorem(15px);
        }
        img{
            display: block;
            width: 100%;
            margin-bottom: pxTorem(5px);
        }
    }
</style>
