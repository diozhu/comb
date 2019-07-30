<template>
    <div class="page page-upload-image">
        <h2>upload-image</h2>
        
        <v-upload-image v-model="currentList" max="1" :apiUrl="apiUrl"></v-upload-image>
        <v-upload-image v-model="currentList" max="3" :apiUrl="apiUrl"></v-upload-image>
    </div>
</template>

<script type="text/ecmascript-6">
    import vUploadImage from 'comb-ui/src/vendors/v-upload-image.vue';

    export default {
        components: { vUploadImage },

        data () {
            return {
                currentList: [],
                apiUrl: 'http://route.nava/api-sysconfig/common/uploadfilebase'
            };
        },
        mounted () {
            this.currentList = [
                {
                    base64: 'data:image/png;base64,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',
                    url: '//s1.oss.dongyin.net/dongyin-net/banner03.jpg?x-oss-process=image/format,webp/resize,,m_fill,w_375,h_225',
                    loading: false,
                    orgurl: '',
                    imaId: '',
                    width: '',
                    height: ''
                }
            ];
        },
        methods: {}
    };
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-upload-image {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
