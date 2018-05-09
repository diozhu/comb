<template>
    <div class="v-form">
        <v-cell
            v-for="(row, index) in currentValue" :key="'row_' + index"
            :title="options && options[index] && options[index]['label'] || ''"
        >
            <v-radio
                v-if="options && options[index] && options[index]['type'] == 'radio'"
                :options="options && options[index] && options[index]['options'] || []"
                :mode="options && options[index] && options[index]['mode'] || 'list'"
                :radioClasses="options && options[index] && options[index]['radioClasses'] || ''"
                v-model="currentValue[index]"
            ></v-radio>
            <input
                v-else
                class="v-field__core input"
                v-model="currentValue[index]"
                :placeholder="options && options[index] && options[index]['placeholder'] || '请输入'"
            />
        </v-cell>
    </div>
</template>
<script>
    import vCell from '../vendor/v-cell';
    import vRadio from '../vendor/v-radio';
    import clickoutside from '../js/utils/clickoutside';
    import * as utils from '../js/utils/utils'; //eslint-disable-line
    import Vue from 'vue';
    import Validator from '../vendor/v-validator.js';
    Vue.use(Validator);

    export default {
        name: 'v-form',

        components: { vCell, vRadio },
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
                // this.len = val ? val.length : 0;
                // if (this.limit && this.len > this.limit) {
                //     this.currentValue = this.old;
                //     return;
                // }
                // this.old = this.currentValue;
                this.$emit('input', val);
            }
        },

        methods: {
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .v-form {

        input{opacity:1;} /*统一颜色*/
        input,
        textarea {
            &::-webkit-input-placeholder {/* WebKit browsers */
                color: #bebebe;
                font-size:pxTorem(14px);
            }
        }

        .icon.icon-error {
            background: #b2b2b2;
            color: #FFF;
            border-radius: 50%;
            padding: pxTorem(2px);
            font-size: pxTorem(14px);
            opacity: .7;
        }
    }
    .v-form {

        input {
            /*border: #00aeff 1px solid;*/
        }
    }

    .v-field {
        display: block;
        input{opacity:1;} /*统一颜色*/
        input,
        textarea {
            &::-webkit-input-placeholder {/* WebKit browsers */
                color: #bebebe;
                font-size:pxTorem(14px);
            }
        }

        .icon.icon-error {
            background: #b2b2b2;
            color: #FFF;
            border-radius: 50%;
            padding: pxTorem(2px);
            font-size: pxTorem(14px);
            opacity: .7;
        }
    }

    .v-field__tit {
        width: 100%;
        height: pxTorem(44px);
        font-size: pxTorem(15px);
        line-height: pxTorem(44px);
        margin-left: pxTorem(15px);
        border-bottom: #DDDEE3 pxTorem(1px) solid;
    }

    .v-field__core {

        &.textarea {
            width: 100%;
            min-height: pxTorem(100px);
            appearance: none;
            overflow: auto;
            resize: none;
            vertical-align: top;
            display: block;
            background: #FFF;
            padding: pxTorem(15px) 0;
            font-size: pxTorem(15px);
            line-height: pxTorem(22px);
        }

        &.input {
            width: 100%;
            height: 100%;
            font-size: pxTorem(15px);
            padding-right: pxTorem(15px);
        }
    }

    .has-limit {
        .v-cell__value {
            padding-bottom: pxTorem(33px);
        }
    }
    .v-field__limit {
        position: absolute;
        bottom: 0;
        right: 0;
        font-size: pxTorem(14px);
        color: #777E8C;
        text-align: right;
        padding: pxTorem(10px) pxTorem(15px);
    }

    .limit-outer .v-field__limit {
        background: transparent;
        border-top: #DDDEE3 pxTorem(1px) solid;
    }

    .v-field.multi {

        .v-cell__value {
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            > div {
                padding: pxTorem(10) pxTorem(10) 0 pxTorem(10);
                font-size: pxTorem(14);
                color: #000;
            }
        }
    }
</style>
