<template>
    <div class="page page-feed">
        <h2>测试...</h2>

        <v-scroll-picker :options="options1"></v-scroll-picker>
    </div>
</template>

<script>
import logger from '../js/utils/logger';
import vScrollPicker from '../vendor/v-scroll-picker.vue';

export default {
    components: {
        'v-scroll-picker': vScrollPicker
    },

    data () {
        return {
            options1: [{id: -1, name: '测试'}]
        };
    },

    created () {
        logger.log('feed mounted... ');

        for (let i = 0;i < 50;i++) {
            this.options1.push({
                id: i,
                name: `测试数据${i}`
            });
        }
    },

    methods: {

    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-feed {
        h2 {
            margin-left: pxTorem(15px);
            line-height: pxTorem(40px);
        }

        .desc {
            height: pxTorem(28px);
            font-size: pxTorem(14px);
            line-height: pxTorem(28px);
            padding-left: pxTorem(15px);
            color: #777E8C;
            background: #f2f2f4;
        }

    }
</style>
