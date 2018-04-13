<template>
    <div class="page page-forum-release">
        <ul class="section">
            <li>
                <v-label :options="{label:'选择版块', labelClass: 'light smaller'}"></v-label>
            </li>
            <li class="height-auto">
                <v-radio-tag v-model="forumId" mode="tag" :options="forums"/>
            </li>
        </ul>
        <ul>
            <li>
                <v-input v-model="title" :options="{ label:'标题', descr: '请输入标题'}"> </v-input>
            </li>
            <li class="height-auto">
                <v-field v-model="content" placeholder="请输入内容" type="textarea" rows="8" limit="20"> </v-field>
            </li>
            <li class="height-auto">
                <v-upload-images v-model="imgList" desc="这里可传入备注说明..." @handle-uploaded-status="handleUploadedStatus"></v-upload-images>
            </li>
            <li class="height-auto">
                <div class="btn-submit">
                    <v-button @click.stop="submit">发布</v-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    import vLabel from '../../src/vendor/v-label.vue';
    import vRadioTag from '../../src/vendor/v-radio-tag.vue';
    import vInput from '../../src/vendor/v-input.vue';
    import vField from '../../src/vendor/v-field.vue';
    import vUploadImages from '../../src/vendor/v-upload-images.vue';
    import forum from '../../src/vendor/v-forum';
    import { toonCall } from '../../src/js/core/core';

    export default {
        components: { vLabel, vRadioTag, vInput, vField, vUploadImages },

        data () {
            return {
                uploaded: true,
                forumId: '',
                forums: [],
                title: '',
                content: '',
                poi: {
                    longitude: 116.123456,
                    latitude: 39.654321
                },
                imgList: []
            };
        },

        activated () {
            if (this.$router.direct()) { // 进入
                this.init();
            } else { // 回退
                // do nothing...
            }
        },

        created () {
//            this.$root.forumAdd = {id: '222'};
//            this.$set(this.$root, 'forumAdd', {id: '111'});
            this.$logger.log('forum-release.mounted... ');
//            this.init();
        },

        methods: {
            init () {
                this.$logger.log('forum-release.init... ');
                this.forumId = '';
                this.forums = [];
                this.title = '';
                this.content = '';
                this.imgList = [];

                forum.getForumList().then(res => {
                    this.$logger.log('forum-release.init... ', res);
                    if (!res || !res.length) return;
                    res.forEach((v) => { // 初始化标签数据
                        if (!this.forumId) this.forumId = v.id; // 赋默认值
                        this.forums.push({ label: v.name, value: v.id + '' });
                    });
                });

                toonCall({functionType: '0'}, 'mwap/gps', (res) => {
                    this.$logger.log('获取经纬度：：：：', res);
                    if (res && res.longitude && res.latitude) {
                        this.poi = {
                            longitude: res.longitude,
                            latitude: res.latitude
                        };
                    }
                }, e => {
                    this.$logger.error('获取经纬度失败：', e);
                });
            },

            handleUploadedStatus (val) {
                this.$logger.log('forum-release.handleUploadedStatus... ', val);
                this.uploaded = val;
            },

            submit () {
                if (!this.forumId) {
                    this.$toast({message: '请选择论坛板块', duration: 1000});
                    return;
                }
                if (!this.title) {
                    this.$toast({message: '请输入标题', duration: 1000});
                    return;
                }
                if (!this.content) {
                    this.$toast({message: '请输入内容', duration: 1000});
                    return;
                }
                if (!this.uploaded) {
                    this.$toast({message: '努力上传中', duration: 1000});
                    return;
                }

                forum.addTopic({
                    forumId: this.forumId,
                    title: this.title,
                    content: this.content,
                    pics: this.imgList
                }).then(res => {
                    this.$logger.log('forum-release.submit.SUCCESS: ', res);
                    this.$toast('发布成功');
                    this.$router.go(-1);
                }).catch(e => {
                    this.$logger.error('forum-release.submit.ERROR: ', e);
                    this.$toast(e);
                    this.$router.go(-1);
                });
            }
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../../src/scss/variables";
    @import "../../src/scss/mixins";

    .page-forum-release {
        ul {
            li {
                /*padding: 0 pxTorem(15px);*/
                height: pxTorem(38px);

                &.height-auto {
                    height: initial;
                }
            }

            &.section {
                border-bottom: #f2f2f4 pxTorem(10px) solid;
                padding-bottom: pxTorem(15px);
            }
        }

        .v-radiolist.tag {
            padding: 0 pxTorem(15px);
        }

        .v-radiolist-title {
            margin-left: pxTorem(15px)!important;
            color: #000!important;
        }

        .btn-submit {
            position: fixed;
            background: #FFF;
            left: 0;
            bottom: 0;
            width: 100%;
            height: pxTorem(42px);
            padding: pxTorem(5px) pxTorem(10px);
            border-top: #ccc 1px solid;
        }
    }
</style>
