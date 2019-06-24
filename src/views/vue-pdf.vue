<template>
    <div class="page page-vue-pdf">
        <h2>vue-pdf</h2>
        
        <embed width="100%" height="100%" name="plugin" id="plugin" src="http://www.gov.cn/zhengce/pdfFile/2018_PDF.pdf" type="application/pdf" internalinstanceid="15">
    </div>
</template>

<script type="text/ecmascript-6">
    import pdf from 'vue-pdf';

    export default {
        components: { pdf },

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

    .page-vue-pdf {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
