<template>
    <div class="page-all page-qr-code">
        <v-row :aligment="true" class="qr-box">
            <v-col>
                <v-button size="small" @click="openQr">唤起toon扫描</v-button>
                <div>toon返回: {{ toonResponse }}</div>
            </v-col>
        </v-row>

        <div class="qr-code-main">
            <h5 class="qr-code-title">{{title}}</h5>
            <v-qr-code
                :cus-id="'qr-code'"
                :cus-url="url"
                :cus-width="codeWidth"
                :cus-height="codeHeight">
            </v-qr-code>
        </div>
        <p class="qr-code-text">扫一扫二维码，快速找到活动</p>
        <p class="qr-code-text">(长按保存图片)</p>
        <button class="save-btn btn-on-hold" @click="goInfo">返回</button>
    </div>
</template>
<script>
    import vRow from '../vendor/v-row.vue';
    import vCol from '../vendor/v-col.vue';
    import vButton from '../vendor/v-button.vue';
    import vQrCode from '../vendor/v-qr-code';
    import {toonCall} from '../js/core/core.js';

    export default {
        data () {
            return {
                toonResponse: '',
                url: 'http://baidu.com',
                codeWidth: 360,
                codeHeight: 360,
                title: '生成二维码'
            };
        },
        created: function () {
            this.$logger.log('created');
        },
        mounted () {
            this.$logger.log('form mounted... ');
        },
        components: { vRow, vCol, vButton, vQrCode },
        methods: {
            openQr () {
                this.$logger.log('qr-code.openQr: ');
                toonCall({handleResult: 0}, 'qrcode/scan', res => {
                    this.$logger.log('qr-code.openQr.response: ', res);
                    this.toonResponse = res;
                }, e => {
                    this.$logger.error('qr-code.openQr.error: ', e);
                });
            },

            goInfo: function () {
                window.history.back();
            }
        }
    };
</script>
<style lang="scss">
    @import "../scss/variables";
    @import "../scss/_mixins";

    .page-qr-code {
        .qr-box {
            margin: pxTorem(15px);

            div {
                margin: pxTorem(15px) 0;
            }
        }

        .qr-code-main{
            width: pxTorem(330px);
            height: auto;
            overflow: hidden;
            @include sizing;
            margin: pxTorem(40px) auto 0 auto;
            background: #fff;
            .qr-code-title{
                width: 100%;
                line-height: pxTorem(20px);
                overflow: hidden;
                text-align: center;
                font-size: pxTorem(20px);
                color: #000000;
                font-weight: 500!important;
                font-style: normal;
                border-bottom: 1px solid #dddee3;
                padding: pxTorem(18px) 0 pxTorem(22px) 0;

            }
            .qr-code{
                width: 100%;
                height: auto;
            //      height: pxTorem(260px);
                position: relative;
                margin: pxTorem(40px) auto pxTorem(60px) auto;
                img{
                    display: block;
                    margin: 0 auto;
                }
                #hidImg{
                    position: absolute;
                    top: -60%;
                    left: -8%;
                    opacity: 0;

                }
                canvas{
                    width: 50%;
                    height: 50%;
                }
            }
        }
        .qr-code-text{
            width: 100%;
            text-align: center;
            font-size: pxTorem(14px);
            color: #777E8C;
        }
        .save-btn{
            display: block;
            width: pxTorem(220px);
            height: pxTorem(45px);
            line-height: pxTorem(45px);
            border-radius: pxTorem(2px);
            background: #F55151;
            font-size: pxTorem(15px);
            margin: pxTorem(30px) auto 0 auto;
            color: #fff;
            overflow: hidden;
        }
    }

</style>

