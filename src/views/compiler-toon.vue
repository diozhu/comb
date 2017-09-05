<template>
    <div class="wrap">
        <div class="page page-compiler">
            <div class="attributes">
                <h2>入参：参数格式为params对象</h2>
                <table>
                    <tr><th>参数</th><th>说明</th><th>类型</th><th>说明</th><th>默认</th></tr>
                    <tr><td>text</td><td>文本信息</td><td>String(json对象)</td><td>不能为空 </td><td>-</td></tr>
                    <tr><td>image</td><td>图片</td><td>String(json对象)</td><td>不能为空</td><td>-</td></tr>
                    <tr><td>map</td><td>地图</td><td>String(json对象)</td><td>不能为空</td><td>-</td></tr>
                    <tr><td>voice</td><td>音频</td><td>String(json对象)</td><td>不能为空</td><td>-</td></tr>
                    <tr class="row-red"><td>video</td><td>视频</td><td>String(json对象)</td><td>正在开发中</td><td>-</td></tr>
                    <tr><td>title</td><td>文本标题</td><td>String(json对象)</td><td>不能为空</td><td>-</td></tr>
                    <tr><td>locationEnable</td><td>地理位置功能</td><td>Boolean</td><td>- </td><td>false</td></tr>
                    <tr><td>spreadEnable</td><td>传播范围功能</td><td>Boolean</td><td>- </td><td>false</td></tr>
                    <tr><td>repeiptEnable</td><td>回执功能</td><td>Boolean</td><td>-</td><td>false</td></tr>
                    <tr><td>cloud</td><td>内容的存储位置</td><td>String(json对象)</td><td>-</td><td>-</td></tr>
                </table>
                <a href="javascript:;">调用示例：toon://trends/editor?params={"text":{"count_min":0,"count_max":20},"image":{"count_min":0,"count_max":20},"map":{"count_min":0,"count_max":20},"title":{"char_min":0,"char_max":20},"locationEnable":false,"spreadEnable":false,"repeiptEnable":false,"cloud":{"type":1,"url":"http://www.cloud.com","token":"4554aqecg9"}}</a>
            </div>
            <div class="senate">{{objData}}</div>

            <div class="content" v-for="item in contentData">
                <v-audio v-show="item.type === 4" :src="item.resUrl" :desc="true" :drt="item.duration" :id="idRandom"></v-audio>
                <v-video v-if="item.type === 3" :src="item.resUrl" :poster="item.imageUrl" controls="controls">您的浏览器不支持 video标签。</v-video>
                <h3 v-show="item.type === 5">标题：{{item.text}}</h3>
                <h3 v-show="item.type === 0">内容：{{item.text}}</h3>
                <div class="map" v-show="item.type === 2" >
                    <img :src="item.imageUrl" alt="">
                </div>
                <div class="image-list" v-show="item.type === 1">
                    <img :src="item.imageUrl" alt="">
                </div>
            </div>
        </div>
        <div class="btn">
            <button class="save-btn btn-on-hold" @click="goToonEditer">打开富文本</button>
        </div>
    </div>
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
        .content{
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
    }
    .btn{
        .save-btn{
            display: block;
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: pxTorem(46px);
            line-height: pxTorem(45px);
            border-radius: pxTorem(2px);
            background: #F55151;
            font-size: pxTorem(15px);
            color: #fff;
            overflow: hidden;
            z-index: 99999;
        }
    }
</style>
