<template>
    <div class="page page-share">
        <h2>分享 参考样例</h2>

        <p class="desc">1. 默认样式，直接在代码中引用"&lt;v-share&gt;&lt;/v-share&gt;"即可；</p>
        <p class="desc">2. 组件可根据各种toon转发出的地址，自动识别样式，下面是为了演示手动传入参数，实际应用，只要打开auto标识即可:"&lt;v-share :auto='true'&gt;&lt;/v-share&gt;"；</p>
        <p class="desc">3. 必须传入channel对象，对象具体描述请查阅wiki： 《MWAP／toon协议》  </p>
        <p class="desc">4. 分享页请单独起一个路由，并记得取消所有触发事件；</p>
        <br>
        <br>
        <!--模拟-->
        <ul>
            <li>
                <v-button @click="go(100)">默认</v-button>
                <v-button @click="go(101)">东城德育通</v-button>
                <v-button @click="go(102)">北京通</v-button>
                <v-button @click="go(103)">泸州通</v-button>
                <v-button @click="go(104)">怀柔通</v-button>
                <v-button @click="go(105)">门城通</v-button>
                <v-button @click="go(107)">昆明通</v-button>
                <v-button @click="go(108)">承德通</v-button>
                <v-button @click="go(109)">保定通</v-button>
                <v-button @click="go(110)">通州通</v-button>
                <v-button @click="go(113)">社群APP</v-button>
            </li>
        </ul>
        <!--实际应用，也可以不用传入的参数，直接传入:auto=true，自动根据地址进行显示，注意，前提是需要维护组件中的地址库，保证toon的信息全面！！！ Dio Zhu. on 2017.3.7-->
        <v-share :logo="item.logo || ''" :label="item.label" :url="item.url" :channel="channel"></v-share>
    </div>
</template>

<script>
    import vButton from '../vendor/v-button.vue';
    import vShare from '../vendor/v-share.vue';

    export default {
        name: 'page-share',

        components: { 'v-button': vButton, 'v-share': vShare },

        data () {
            return {
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
                    '113': { logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_113.png', label: '社群通', url: 'http://app.systoon.com/sqt/' }
                },
                item: {},
                channel: {},

                share: {
                    logo: 'http://img.icon.systoon.com/icon/mwap/share/toon_100.png',
                    title: '蜂巢（Comb）',
                    text: '-- 基于Vue2的前端公共组件及最佳实践',
                    url: 'http://172.28.20.12:8080/app/share?subjectId=55'
                }
            };
        },

        created () {
            this.channel = {
                shareToon: { // toon好友
                    shareToonImageUrl: this.share['logo'],
                    shareToonUrl: this.share.url,
                    shareToonTitle: this.share.title,
                    shareToonText: this.share.text
                },
                shareToonCircle: { // 动态
                    shareToonCircleImageUrl: this.share['logo'],
                    shareToonCircleUrl: this.share.url,
                    shareToonCircleTitle: this.share.title + ' ' + this.share.text
                },
                shareWeChat: { // 微信好友
                    shareWeChatImageUrl: this.share['logo'],
                    shareWeChatUrl: this.share.url,
                    shareWeChatTitle: this.share.title,
                    shareWeChatText: this.share.text
                },
                shareWeChatCircle: { // 微信朋友圈
                    shareWeChatCircleImageUrl: this.share['logo'],
                    shareWeChatCircleUrl: this.share.url,
                    shareWeChatCircleTitle: this.share.title + ' ' + this.share.text
                },
                shareWeiBo: { // 新浪微博
                    shareWeiBoImageUrl: this.share['logo'],
                    shareWeiBoText: this.share.title + ' ' + this.share.text
                },
                shareQQ: { // QQ好友
                    shareQQImageUrl: this.share['logo'],
                    shareQQUrl: this.share.url,
                    shareQQTitle: this.share.title,
                    shareQQText: this.share.text
                },
                shareQQSpace: { // QQ空间
                    shareQQSpaceImageUrl: this.share['logo'],
                    shareQQSpaceUrl: this.share.url,
                    shareQQSpaceTitle: this.share.title,
                    shareQQSpaceText: this.share.text
                },
                shareMessage: { // 短信
                    shareMessageText: this.share.title + ' ' + this.share.text
                }
            };
        },

        mounted () {
            this.$logger.log('page-share mounted... ');
        },

        beforeDestroy () {
        },
        activated () {
        },
        deactivated () {
        },

        methods: {
            go (t) {
                this.item = this.toon[t];
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-share {
        height: 100%;

        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

        .desc {
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            background: #f2f2f4;
            display: table;
        }

        ul li {
            margin: 0 pxTorem(15px);
            display: flex;
            flex-wrap: wrap;

            > .v-btn {
                width: 44%;
                height: pxTorem(32px);
                margin: 0 pxTorem(10px) pxTorem(10px);
            }
        }
    }
</style>
