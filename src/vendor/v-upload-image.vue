<template>
    <div class="v-upload-image">
        <!--<div v-if="uploadedStatus" id="loading-wrapper" class="loading-wrapper"><img class="loading-img" src=""></div>-->
        <!--<div v-if="isWechat" class="v-upload-image__frm" @click="wxChooseImage">-->
        <div class="v-upload-image__frm" @click="handleClick">
            <img v-if='uploadedStatus' src="data:image/jpeg;base64,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" class="loaing">
            <img v-if="currentValue" :src="currentValue">
            <i   v-if="defaultStatus && !currentValue" class="icon icon-camera"></i>
        </div>
        <!-- <div v-if="!isWechat" class="avatar"  >
        <input type="file" accept="image/*" @change="h5ChooseImage" class="up-avatar" :disabled="imgDisabled">
            <img v-if='uploadedStatus' src="data:image/jpeg;base64,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" class="loaing">
            <img  v-if='currentValue' class="real-avatar-img" :src="currentValue" >
            <i  v-if="defaultStatus && !currentValue" class="icon icon-camera"></i>
        </div> -->
        <!--<canvas ref="canvas" :src="currentValue"></canvas>-->
        <!--<div class="v-upload-image__frm">-->
            <!--<vue-core-image-upload v-if="currentValue"-->
                <!--class="btn btn-primary"-->
                <!--:crop="false"-->
                <!--@imageuploaded="imageuploaded"-->
                <!--:data="data"-->
                <!--:max-file-size="5242880"-->
                <!--url="http://gds.server_doing.hy-sport.cn/wap/student/upload_image" >-->
            <!--</vue-core-image-upload>-->
            <!--<i v-else class="icon icon-camera"></i>-->
        <!--</div>-->
        <v-popup v-model="popupTag" :lockScroll="true" @touchMove.stop @touchend.stop>
            <!--这个是遮罩层上面的图片和按钮-->
            <div class="cover_ele" v-show="popupTag">
                <i class="icon icon-error" @click="popupTag = false"></i>
                <!-- <img class="user_img_bg" src="/static/images/user_center_bg.png"/> -->
                <img class="user_img_bg" src="../assets/user_center_bg.png"/>
                <!--微信显示按钮-->
                <button v-if="isWechat" @click="wxChooseImage" class="wx_upload_button">上传图片</button>
                <!--h5环境显示input-->
                <!--<input type="file" accept="image/*" @change="uploadImg" class="upload_input">-->
                <button v-else class="wx_upload_button">
                    上传图片
                    <input type="file" @change="h5ChooseImage"  accept="image/*" class="wx_input">
                </button>
            </div>
            <!--微信显示按钮-->
            <!-- <button @click="uploadImg" class="wx_upload_button">上传图片</button> -->
        </v-popup>
    </div>
</template>

<script>
import wx from 'weixin-js-sdk';
// import Popup from '../js/utils/popup';
import vPopup from '../vendor/v-popup';
import * as api from '../js/core/api.js';
// import * as wechatApi from '../js/utils/wechat-api.js'; // 引入wechat-api，需要组件的引用页面混入m-wechat-api.js做微信jssdk的config！
import vueCoreImageUpload from 'vue-core-image-upload';
import vSpinner from '../vendor/v-spinner';
import trans from '../js/core/trans.js';
import * as utils from '../js/utils/utils.js';
import CONFIG from '../config.js';

/**
 * 上传图片组件，依赖于微信jssdk，需要组件的引用页面混入m-wechat-api.js做微信jssdk的config！
 * 如果在微信环境，使用jssdk；
 * 如果移动环境，
 *              -- Author by Dio Zhu. on 2017.11.16
 * 不用微信jssdk了，微信选择图片后，转换base64的接口wx.getLocalImgData仅在 iOS WKWebview 下提供
 * 现使用h5的方式，引用组件：vue-core-image-upload实现
 *              -- Author by Dio Zhu. on 2017.11.16
 */
export default {
    // mixins: [ Popup ],

    components: { 'v-spinner': vSpinner, vueCoreImageUpload, vPopup },

    props: {
        value: {
            type: String,
            default: ''
        },
        uploaded: {
            type: Boolean,
            default: false
        },
        lazyTag: {
            type: Boolean,
            default: false
        },
        defaultIcon: {
            type: Boolean,
            default: true
        }

    },

    data () {
        return {
            uploadUrl: CONFIG.URL + '/wap/student/upload_image',
            data: {},
            imgDisabled: false,
            isWechat: true,
            currentValue: this.value,
            uploadedStatus: this.uploaded,
            defaultStatus: this.defaultIcon,
            loadingStatus: false,
            currentAvatar: '',
            popupTag: false
        };
    },

    computed: {
    },

    watch: {
        value (val) {
            this.currentValue = val;
        },
        uploaded (val) {
            this.uploadedStatus = val;
        },
        currentValue (val) {
            this.$emit('input', val);
        },
        defaultIcon (val) {
            if (this.currentValue) {
                this.defaultStatus = true;
            }
            this.defaultStatus = val;
        },
        /**
         * 捕获图片上传状态，可根据此标识做提交按钮的限定等动作
         * 父页面可在组件调用时指定回调函数： @handle-uploaded-status="handleUploadedStatus"
         *              -- Author by Dio Zhu. on 2017.2.28
         */
        loadingStatus (val) {
            this.$emit('handle-uploaded-status', val);
        },
        currentAvatar (val) {
            this.$emit('handle-avatar-change', val);
        }
    },
    created () {
        if (utils.isWechat()) {
            this.isWechat = true;
            this.$logger.log('aaaaaaaaa  weixin');
        } else {
            this.isWechat = false;
            this.$logger.log('aaaaaaaaa  h5');
        }
    },
    methods: {
        handleClick () {
            // if (utils.isWechat()) { // 微信环境，调用jssdk的图片上传接口
            //     this.$logger.log('v-upload-image.handleClick.isWechat: ');
            //     this.wxChooseImage();
            // } else { // 移动环境
            //     this.$logger.log('v-upload-image.handleClick.isMobile: ');
            //     this.$toast('mobile');
            //     this.h5ChooseImage();
            // }
            // this.$emit('handleClick');
            this.$logger.log('v-upload-image.handleClick: ');
            // this.open();
            this.popupTag = true;
        },
        h5ChooseImage (e) {
        // window.alert(utils.getSessionStorage().get('token'));
            let _self = this;
            try {
                if (e.target) {
                    this.uploadedStatus = true;  // loading 图片显示
                    this.defaultStatus = false;
                    var fileInput = e.target;
                    console.log(fileInput.files[0]);
                    // var _self = this;
                    var data = new global.FormData();
                    data.append(this.fileName, fileInput.files[0]);
                    var xhr = new window.XMLHttpRequest();
                    xhr.open('post', this.uploadUrl);
                    xhr.setRequestHeader('access-token', utils.getSessionStorage().get('token'));
                    xhr.responseType = 'json';
                    xhr.send(data);
                    // var _self = this;
                    xhr.onload = function (e) {
                        if (xhr.status === 200) {
                            if (xhr.response.errcode === 0) {
                          //                    请求返回后不显示默认图片；
                                _self.defaultStatus = false;
                                _self.uploadedStatus = false; // loading 图片隐藏
                                _self.currentValue = xhr.response.data.url + '!/both/160x160';
                                _self.currentAvatar = xhr.response.data.img_id;
                              //                                图片上传按钮状态恢复--孙硕
                                _self.imgDisabled = false;
                          // self.editor.insertEmbed(self.editor.getSelection().index, 'image', xhr.response.data.url);
                          // _self.headerfileList.push(xhr.response.data);
                            } else {
                                _self.imgDisabled = false;
                                _self.$toast(trans(xhr.response.errcode));
                            }
                            _self.popupTag = false;
                            document.querySelector('.v-modal') && document.querySelector('.v-modal').parentNode.removeChild(document.querySelector('.v-modal'));
                        }
                    };
                }
            } catch (e) {
                this.popupTag = false;
                document.querySelector('.v-modal') && document.querySelector('.v-modal').parentNode.removeChild(document.querySelector('.v-modal'));
                console.log('uploadImg', e);
                this.$toast(trans(e.errcode));
            }
        },
        wxChooseImage () { // 微信jssdk上传图片
            this.popupTag = false;
            document.querySelector('.v-modal') && document.querySelector('.v-modal').parentNode.removeChild(document.querySelector('.v-modal'));
            // return wechatApi.chooseImage().then(res => {
            //     // this.$toast(res[0]);
            //     this.$logger.log('v-upload-image.handleClick.chooseImage.success: ', res[0]);
            //     // return wechatApi.getLocalImgData({localId: res[0]});
            //     return wechatApi.uploadImage({localId: res[0]});
            //     // }).then(rtn => {
            //     //     this.$logger.log('v-upload-image.handleClick.uploadImage.success: ', rtn);
            //     //     this.$set(this.currentValue, 'url', rtn);
            //     // }).then(rtn => {
            //     //     // this.$toast(rtn);
            //     //     this.$logger.log('v-upload-image.handleClick.uploadImage.success: ', rtn);
            //     //     // return Promise.resolve(wechatApi.downloadImage({serverId: res}));
            //     //     return wechatApi.downloadImage({serverId: rtn});
            // }).then(dat => {
            //     // this.$toast(dat);
            //     this.$logger.log('v-upload-image.handleClick.downloadImage.success: ', dat);
            // }).catch(e => {
            //     this.$logger.error('v-upload-image.handleClick.wx.error: ', e);
            //     this.$toast(e.errMsg);
            // });
            let _self = this,
                uploadImageSuccessFunc = function (res) {
                    console.log('v-upload-image.uploadImageSuccessFunc: ', res);
                    // I-YHwkYGPDIHxF-kqmmj-ETgbQitgfzLJITOEwYzGZ7pepobfsfouHYLA92yJ1Yl
                    // http://file.api.weixin.qq.com/cgi-bin/media/get?access_token=5_OYu41gF4xbrXAcuZLtTs3ZNo9OjPiK4V6g2cgUaN5uVkoe5l2MJBmN-DnvftM_B8bbuQtqq12J-eRha3yXvl7VDj7Rv6rRJCpPOmkQLS5fe0CmADzPYPCjxC4axntIz7CzebrmvbZJf32A3zMUGcAEAAIU&media_id=I-YHwkYGPDIHxF-kqmmj-ETgbQitgfzLJITOEwYzGZ7pepobfsfouHYLA92yJ1Yl
                    // https://api.weixin.qq.com/cgi-bin/media/get?access_token=5_OYu41gF4xbrXAcuZLtTs3ZNo9OjPiK4V6g2cgUaN5uVkoe5l2MJBmN-DnvftM_B8bbuQtqq12J-eRha3yXvl7VDj7Rv6rRJCpPOmkQLS5fe0CmADzPYPCjxC4axntIz7CzebrmvbZJf32A3zMUGcAEAAIU&media_id=I-YHwkYGPDIHxF-kqmmj-ETgbQitgfzLJITOEwYzGZ7pepobfsfouHYLA92yJ1Yl
                    // window.alert(res.serverId);
                    // window.location.href = 'http://www.baidu.com?search=' + res.serverId;
                    // TODO: 调后台接口，传入serverId，后台通过微信媒体下载接口，通过access_token和media_id（就是前面的serverId）获取图片，并上传云，返回url
                    api.uploadImageFromWx({
                        media_id: res.serverId
                    }).then(res => {
                        _self.$set(_self, 'uploadedStatus', false);
                        _self.$set(_self, 'currentValue', res.url + '!/both/160x160');
                        _self.$set(_self, 'loadingStatus', true);
                        _self.$set(_self, 'currentAvatar', res.img_id);
                       // window.alert(_self.currentAvatar);
                        // _self.$toast(res.data.url);
                        // _self.$toast('上传成功:', res.data.url);
                    });
                },
                uploadImageFailFunc = function (res) {
                    console.log('v-upload-image.uploadImageFailFunc: ', res);
                },
                chooseImageSuccessFunc = function (res) {
                    // window.alert('success');
                    console.log('v-upload-image.chooseImageSuccessFunc: ', res);
                    _self.$set(_self, 'currentValue', false);
                    _self.$set(_self, 'uploadedStatus', true);
                    _self.$set(_self, 'defaultStatus', false);
                    // if (res.localIds && res.localIds.length) _self.$set(_self, 'currentValue', res.localIds[0]);
                    // if (res.localIds) _self.$set(_self, 'currentValue', res.localIds);
                    let localId = res.localIds.toString();
                    wx.uploadImage({
                        localId: localId, // 需要上传的图片的本地ID，由chooseImage接口获得
                        isShowProgressTips: 1, // 默认为1，显示进度提示
                        success: uploadImageSuccessFunc,
                        fail: uploadImageFailFunc
                    });
                }, chooseImageFailFunc = function (res) {
                    // window.alert('fail');
                    console.log('v-upload-image.chooseImageFailFunc: ', res);
                };
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: chooseImageSuccessFunc,
                fail: chooseImageFailFunc
            });
        },
        imageuploaded (res) {
            this.$logger.log('v-upload-image.imageuploaded: ', ...arguments);
            if (res.errcode === 0) {
                // this.src = res.data.src;
                this.$set(this, 'currentValue', res.data.src);
            }
        },
        uploadImage () {

        }
    }
};
</script>
<style rel="stylesheet/scss" lang="scss">

    @import "../scss/variables";
    @import "../scss/_mixins";
    @import "../scss/_popup";
    .v-upload-image{
        .loading-wrapper {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 10000;
            background: #000;
            opacity: 0.7;
        }
        .v-upload-image{
            display: flex;
            justify-content: center;
            align-items: center;
            .loaing {
                width: pxTorem(20);
                height: pxTorem(20);
            }
        }

        .v-upload-image__frm {
            margin:0 auto;
            width: pxTorem(80);
            height: pxTorem(80);
            display: flex;
            justify-content: center;
            align-items: center;
            border: $brand-primary pxTorem(1) solid;
            border-radius: 50%;
            overflow: hidden;
            .loaing {
                width: pxTorem(20);
                height: pxTorem(20);
            }
            img { // 头像
                width:100%;
                height:pxTorem(80);
                margin:0;
                padding:0;
                border-radius:pxTorem(40);
            }
            .icon {
                font-size: pxTorem(36);
                color: $brand-primary;
            }

        }
        .avatar {
            margin:0 auto;
            width: pxTorem(80);
            height: pxTorem(80);
            display: flex;
            justify-content: center;
            align-items: center;
            border: $brand-primary pxTorem(1) solid;
            border-radius: 50%;
            overflow: hidden;
            position: relative;
            .icon {
                font-size: pxTorem(36);
                color: $brand-primary;
            }
            .up-avatar {
                position: absolute;
                top:0;
                left:0;
                width:pxTorem(80);
                height:pxTorem(80);
                z-index:999999;
                opacity:0;
                border-radius:pxTorem(40);
            }
            .real-avatar-img {
                position:absolute;
                top: 0;
                left:0;
                width:100%;
                height:pxTorem(80);
                margin:0;
                padding:0;
                border-radius:pxTorem(40);
            }
            .avatar-img {
                position:absolute;
                top: pxTorem(-2);
                left:0;
                width:100%;
                height:pxTorem(80);
                margin:0;
                padding:0;
            }
            .default-avatar-button {
                width:pxTorem(36);
                height:pxTorem(31);
                margin-left:pxTorem(20);
                margin-top:pxTorem(23);
                img {
                    width:100%;
                }
            }
        }
        .v-popup{
            width: pxTorem(300);
            height: pxTorem(400);
            top: pxTorem(100);
            left: pxTorem(38);
            background: transparent;
        }
        .cover_ele{
            display: flex;
            flex-flow: column nowrap;
            justify-content: flex-start;
            align-items: center;
            position:relative;
            // top:pxTorem(-100);

            .wx_upload_button{
                height:pxTorem(55);
                width:pxTorem(300);
                border-radius: 0 0 pxTorem(12) pxTorem(12);
                background-color:#FDD108;
                font-size:pxTorem(16);
                font-width:700;
                position: relative;
                .wx_input{
                    height:pxTorem(55);
                    width:pxTorem(300);
                    opacity: 0;
                    position: absolute;
                    left: 0;
                    top:0;
                }
            }
            .user_img_bg{
                width:pxTorem(300);
                height:pxTorem(345);
            }
            .icon-error { // 关闭按钮
                position: absolute;
                right: pxTorem(8);
                top: pxTorem(8);
                background: #ccc;
                width: pxTorem(28);
                height: pxTorem(28);
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: pxTorem(16);
                color: #FFF;
            }
        }
        .v-modal{
            position: fixed;
        }
    }
</style>
