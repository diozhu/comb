<template>
    <v-calendar-toon :value="value" :disabled-days-of-week="disabled" :format="format" :clear-button="false" :placeholder="placeholder" :pane="1" :range-status="1" :formatDate="formatDate"></v-calendar-toon>
</template>

<script type="text/babel">
    import * as utils from '../js/utils/utils';
    import vCalendarToon from '../vendor/v-calendar-toon.vue';
    let showFormatDate = 'yyyy/MM/dd';
    export default {
        components: { vCalendarToon },
        data () {
            return {
//                html: 'html',
                formatDate: showFormatDate,
                disabled: [],
                value: utils.formatTime(new Date().getTime(), showFormatDate),
                format: 'yyyy-MM-dd',
                clear: true,
                placeholder: 'placeholder is displayed when value is null or empty'
            };
        },
        computed: {

        },

        methods: {

        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";
    @import "../scss/markdown.scss";
    .page-datetime{

    .v-btn {
        margin-top: pxTorem(20px);
    }
    }
    * {
        box-sizing: border-box;
    }

    .markdown {
        width: 980px;
        margin-right: auto;
        margin-left: auto;
        text-align: left;
    }
</style>
