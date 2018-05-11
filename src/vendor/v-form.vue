<template>
    <ul class="v-form">
        <li
            v-for="(row, index) in currentValue" :key="'row_' + index"
            v-if="options && options[index] && options[index]['type'] && options[index]['type'] != 'hidden'"
        >
            <v-form-item :key="'VFI_' + index" v-model="currentValue[index]" :option="options[index]" :attr="index"></v-form-item>
        </li>
    </ul>
</template>
<script>
    import vFormItem from '../vendor/v-form-item';
    import vCell from '../vendor/v-cell';
    import vRadio from '../vendor/v-radio';
    import clickoutside from '../js/utils/clickoutside';
    import vPopup from '../vendor/v-popup';
    import * as utils from '../js/utils/utils'; //eslint-disable-line
    import vPicker from '../vendor/v-picker';
    import vDatetimePicker from '../vendor/v-datetime-picker';
    import Vue from 'vue';
    import Validator from '../vendor/v-validator.js';
    Vue.use(Validator);

    export default {
        name: 'v-form',

        components: { vFormItem, vCell, vRadio, vPopup, vPicker, vDatetimePicker },
        directives: { clickoutside },
        props: {
            value: {          // 绑定表单对象
                type: Object,
                default: () => {}
            },
            options: {
                type: Object,
                default: () => {}
            }
        },

        data () {
            return {
                currentValue: this.value
            };
        },

        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val) {
                this.$emit('input', val);
            }
        },

        methods: {
            init () {
                this.$logger.log('【v-form】init... ');
                // [].forEach.call(this.currentValue, v => {});
            }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .v-form {

    }
</style>
