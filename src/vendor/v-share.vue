<template>
    <transition-group name="fade" tag="div" class="v-share">
        <div key="arrow" class="v-share__mask" v-if="deviceIsWeixin">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAACQCAMAAADX9g7aAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAB4UExURUxpcf////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////RzAVkAAAAndFJOUwD5CxDXAjL85wYe9GydpCVUuxZywc2Nlq3gSytktXg5RMdcqId/78gibh4AAAPySURBVHja3Ztdk6JIEEUtBAoEBRQFRBD8Ov//H26s7PYYbfeMIc19mHzSiO44VOatrKxLOFPFulWR6qoUkfYRItTGokGFBWhQ8wwRKnEB4Dw5qbshQh0sGpS34yNW0wqiQYRauIhQxwARyncNj7GctlZ1d2orAWoIH6zVoEpYxRJUDdSzpQK1uvfZsIdiYtLCgv/vcR9MjlpCNqjDTIxKLHTDx1MxeaWyD4FMKz8Lx5kkSmg0JB/wNagGzhrSEWyiQfWw1JBSMAsJKaxgJxrTIZhLSPMbxJpFFeCGElJiYS/bvZlM6FbTkpwKCs2iLjKhJwZOmkVlkGtIJ7C1pk8Esua3gsDR+C7AXpa+lSZ9S9mW2gOpJn0VnHXqW2s2ryx9SaQax8ItuI7q6DC+hNQBGwlpEUAjKtRP6dxb+N0pjk/7xPu2IZnjeN9/f8kj/o8o33xxk4mBeCwn7nmK8vPzH+3YHRWeGssQwTZbFcvMvQHAcv5ZEn04BhQHAJj8kv4q+GLj3tH+Q5N1IViMB+WHp+PHL4Go+/jLfJwk9ndQ0H79sBsDUf2fOMtRTXa+uoPib/N/rKAalluM6hJp8Ax61twwlreMmcV2zxp7jna4bGzGeM3hGai6P/aPHMr7mrLw3TLlQOm8ZJXaAsidN0nO9uXcNwBk75K8Bmz8+iRB83aTaIHDizVdjiIlBi4v9uEcxhiLJfTei+95ATiNsKqt/+p7Xmw14oyKX3QbwquF234H7YhrRPxK8raAW8/GoJpXbmFea4Bsfp/QD++BXvvfpAfMxhtu8ukIDy//g8QLA/TDIBNAPUKBXH8H2kWAab3hG5j3B4orUMy/e5BLBJDXvzyrfsRA0QBBu/6i4R9yAPruUa+X91FDY8M0se88dPtjXBoAtg8C9QLoxl0oXIaomt31ernszi5D2Cz9dMMOvJHjeZrzRfTxp7Sef8TfWR/K4IFi3dXznJ7YH3u3su4O111RXNqT/6WilzInbmEg1fno3t+2qDNsNaQ90Ml89FKzqB1ECwnJtyozxHGh91SeaZRISAfgoCmUzPSbu7B1JKhSVqgrkMokUWhan4UmVIlv66gs02qtkvktkZC2YI4SUg9WInOnV3U+J5eRMiAW1Ul07K63KtLCVWUvqcCeJH0vAJOKfjNA1EnOJwu3o+iVHpWiw4YroF8rtlMPNI5CehVQeAJSGoHdqIawm0Lk8xJwFdKrXSCbC0inCNh5ot/6RKniyOgBt1Zo/AacBfvWWQJGsZt8F3D96UHexgArQfKSHIgUJ3scAX0ikHgGmGs4fZXiSKQHfwvYy/RLCncWcI8aww3ThiLPI0tmknCu6UwT/wDOII32UiooewAAAABJRU5ErkJggg==">
            <p>点击右上角菜单<br>在默认浏览器中打开并安装</p>
        </div>
        <!--<a class="v-share" :href="currentItem.url" v-if="!isToon">-->
        <a key="v-share" class="v-share__bar" @click="download" v-if="!isToon">
            <img class="v-share__img" :src="currentItem.logo">
            <div class="v-share__lab">{{ currentItem.label }}</div>
            <!--<div class="btn btn-primary v-share__btn">下载</div>-->
            <v-button class="v-share__btn">下载</v-button>
        </a>
    </transition-group>
</template>
<script>
    import vButton from './v-button.vue';
    import * as utils from '../js/utils/utils';

    /**
     * share组件
     * 默认只要传入:auto="true"即可，组件可根据地址栏的变量判断是否在toon内，是否要显示下载栏，以及从哪一个toon分享出来的，下载链接显示toon还是北京toon还是其他toon；
     * 如果是定制化app，传入时也可不通过auto判断，直接指定logo、label、url三个参数；
     * 分享渠道必须传入，按照wiki中定义的格式，传入一个对象，组件会在当前引入的页面进行动态创建meta标签，并在跳转后删除；
     *              -- Author by Dio Zhu. on 2017.3.7
     */
    export default {
        name: 'v-feed',

        components: { 'v-button': vButton },

        props: {
            logo: {
                type: String,
                default: 'http://img.icon.systoon.com/icon/mwap/share/toon_100.png'
            },      // 下载图标url
            label: {
                type: String,
                default: '随时随地发现精彩活动'
            },     // 下载文字
            url: {
                type: String,
                default: 'http://app.systoon.com/'
            },       // 下载地址
            auto: {
                type: Boolean,
                default: false
            },                  // 是否使用自动匹配：自动匹配需要不断完善所有toon的列表，如只用在定制化app，可传上述参数定死即可。
            channel: {
                type: Object,
                default: () => {}
            },
            classes: String     // 附加class
        },

        data () {
            return {
                isWeixin: false,
                shareChannel: this.channel,
                toon: {
                    '100': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_100.png', label: 'toon通', url: 'http://app.systoon.com/' },
                    '101': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_101.png', label: '东城德育通', url: 'http://app.systoon.com/' },
                    '102': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_102.png', label: '北京通', url: 'http://app.systoon.com/bjt/' },
                    '103': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_103.png', label: '泸州通', url: 'http://app.systoon.com/lzt/' },
                    '104': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_104.png', label: '怀柔通', url: 'http://app.systoon.com/hrt/' },
                    '105': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_105.png', label: '门城通', url: 'http://app.systoon.com/mct/' },
                    '107': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_107.png', label: '昆明通', url: 'http://app.systoon.com/kmt/' },
                    '108': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_108.png', label: '承德通', url: 'http://app.systoon.com/cdt/' },
                    '109': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_109.png', label: '保定通', url: 'http://app.systoon.com/bdt/' },
                    '110': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_110.png', label: '通州通', url: 'http://app.systoon.com/tzt/' },
                    '113': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_113.png', label: '随时随地发现精彩活动', url: 'http://app.systoon.com/sqt/' }
                }
            };
        },

        computed: {
            /**
             * 如果打开auto，判断是否在toon内, 根据url中的enter=toon来判断, 如果toon外, 显示下载app的bar
             *              -- Author by Dio Zhu. on 2017.3.7
             */
            isToon () {
                return this.auto && utils.getQueryStringByName('enter') === 'toon';
            },

            currentItem () {
                let t = utils.getQueryStringByName('t') || '100',
                    rtn;
                if (this.auto && t && this.toon[t]) { // 根据t的来源，判断下载地址
                    rtn = {
                        logo: this.toon[t].logo,
                        label: this.toon[t].label,
                        url: this.toon[t].url
                    };
                } else if (this.logo && this.label && this.url) {
                    rtn = {
                        logo: this.logo,
                        label: this.label,
                        url: this.url
                    };
                } else {
                    rtn = {
                        logo: this.toon['100'].logo,
                        label: this.toon['100'].label,
                        url: this.toon['100'].url
                    };
                }
                return rtn;
            },

            deviceIsWeixin () {
//                return !!/MicroMessenger/i.test(navigator.userAgent);
                return false;
            }
        },

        watch: {
            channel (val) {
                this.$logger.log('v-share.watch.channel...');
                this.shareChannel = val;
                this.init();
            }
        },

        created () {
            this.$logger.log('v-share.created...');
            this.init();
        },

        /**
         * 离开时清除共享meta。
         *              -- Author by Dio Zhu. on 2017.3.7
         */
        beforeDestroy () {
            this.$logger.log('v-share.beforeDestroy... ');
            this.clearMeta();
        },

        methods: {
            init () {
                this.clearMeta();
                this.createMetas();
            },

            clearMeta () {
                let hd = document.getElementsByTagName('head')[0],
                    ms = document.getElementsByTagName('meta');
                for (let i = ms.length - 1;i >= 0;i--) {
                    if (ms[i].getAttribute('id') === 'share') {
                        hd.removeChild(ms[i]);
                    }
                }
            },

            createMetas () {
                let tags = [];
                for (let m in this.shareChannel) {
                    if (this.shareChannel.hasOwnProperty(m)) {
                        tags.push(m);
                        for (let n in this.shareChannel[m]) {
                            if (this.shareChannel[m].hasOwnProperty(n)) {
                                this.createMeta(n, this.shareChannel[m][n]);
                            }
                        }
                    }
                }

                this.createMeta('shareChannel', tags.join(',')); // 告知toon需要提供的共享途径
            },

            createMeta (key, val) {
                if (!val) return;
                let o = document.createElement('meta');
                o.id = 'share';
                o.name = key;
                o.content = val;
                o.charset = 'utf-8';
                document.getElementsByTagName('head')[0].appendChild(o);
            },

            download () {
                let deviceIsWindowsPhone = navigator.userAgent.indexOf('Windows Phone') >= 0,
                    deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone,
                    deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;
                this.$logger.log('v-share.download: ', this.currentItem.url, this.deviceIsWeixin, deviceIsIOS, deviceIsAndroid);

//                if (!this.deviceIsWeixin) {
                document.location.href = this.currentItem.url;
//                }

//                function weixinTip(ele){
//                    var ua = navigator.userAgent;
//                    var isWeixin = !!/MicroMessenger/i.test(ua);
//                    if(isWeixin){
//                        ele.onclick=function(e){
//                            window.event? window.event.returnValue = false : e.preventDefault();
//                            document.getElementById('JweixinTip').style.display='block';
//                        }
//                        document.getElementById('JweixinTip').onclick=function(){
//                            this.style.display='none';
//                        }
//                    }
//                }
//                var btn1 = document.getElementById('JdownApp');//下载一
//                weixinTip(btn1);
//                goApp = function(){
//                    window.location.href = 'http://app.systoon.com/miyu/miyu.apk';
//                }
            }

        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .v-share {
        /*position: relative;*/
    }

    .v-share__mask {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        background: #000;
        opacity: .6;

        img {
            position: absolute;
            right: pxTorem(15px);
            top: pxTorem(15px);
        }

        p {
            position: absolute;
            top: pxTorem(100px);
            right: pxTorem(15px);
            font-size: pxTorem(15px);
            color: #FFF;
        }
    }

    .v-share__bar {
        width: 100%;
        height: pxTorem(55px);
        position: fixed;
        /*position: absolute;*/
        z-index: 99;
        left: 0;
        bottom: 0;
        /*background: #000;*/
        /*opacity: .69;*/
        background: url(../assets/download-bg.png);
        display: flex;
        align-items: center;

        .v-share__img {
            display: inline-block;
            width: pxTorem(32px);
            height: pxTorem(32px);
            margin: 0 pxTorem(10px) 0 pxTorem(15px);
            -webkit-border-radius: pxTorem(5px);
            -moz-border-radius: pxTorem(5px);
            border-radius: pxTorem(5px);
        }

        .v-share__lab {
            color: #FFF;
            font-size: pxTorem(17px);
            flex: 1 1 auto;
        }

        .v-share__btn {
            width: pxTorem(83px);
            height: pxTorem(32px);
            font-size: pxTorem(15px);
            font-weight: 300;
            margin: 0 pxTorem(15px);
        }
    }
</style>
