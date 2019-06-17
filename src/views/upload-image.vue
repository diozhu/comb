<template>
    <div class="page page-upload-image">
        <h2>upload-image</h2>
        
        <v-upload-image v-model="currentList" :apiUrl="apiUrl"></v-upload-image>
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
        mounted () {},
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
