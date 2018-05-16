<template>
    <div class="v-form">
        <!--v-if="options && options[index] && options[index]['type'] && options[index]['type'] != 'hidden'"-->
        <template
            v-for="(val, key, index) in currentValue"
        >
            <!--前面的分隔符-->
            <template v-if="dividers && dividers[index]">
                <div class="v-form__divider">
                    <slot :name="'slotB' + index">
                        <p v-if="dividers[index]['label']">{{dividers[index]['label']}}</p>
                    </slot>
                </div>
            </template>

            <!--渲染表单组件-->
            <v-form-item
                v-if="currentOptions && currentOptions[key] && currentOptions[key]['type'] && currentOptions[key]['type'] != 'hidden'"
                :key="'VFI_' + key"
                v-model="currentValue[key]"
                :option="currentOptions[key]"
                :idx="index"
                :attr="key"
                :class="{'last': dividers && dividers[key]}"
                :validator="validators && validators[key]"
            ></v-form-item>

            <!--后面的分隔符-->
            <template v-if="dividers && dividers[key]">
                <div class="v-form__divider">
                    <slot :name="'slotE' + index">
                        <p v-if="dividers[key]['label']">{{dividers[key]['label']}}</p>
                    </slot>
                </div>
            </template>
        </template>
    </div>
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
            value: {                // 绑定表单字段对象的默认值
                type: Object,
                default: () => {}
            },
            options: {              // 各字段对象的组件类型声明，及组件的各种依赖参数
                type: Object,
                default: () => {}
            },
            dividers: {             // 表单分隔符，可按对象下标数（放前面）、字段名（放后面）
                type: Object,
                default: () => {}
            },
            validators: {           // 各字段对象的校验规则
                type: Object,
                default: () => {}
            }
        },

        data () {
            return {
                currentValue: this.value,
                currentOptions: this.options
            };
        },

        watch: {
            value (val) {
                this.currentValue = val;
            },
            currentValue (val) {
                this.$logger.log('【v-form】watch.currentValue: ', val);
                this.$emit('input', val);
            },
            options (val) {
                this.currentOptions = val;
                this.init();
            },
            currentOptions (val) {
                this.$emit('handleChangeOptions', val);
            },
            'currentValue.studentIdengyType' (val) {
                this.$logger.log('【v-form】watch.currentValue.studentIdengyType: ', val);
            }
        },

        created () {
            this.init();
        },

        methods: {
            init () {
                this.$logger.log('【v-form】init... ');
                for (let key in this.options) { // 自定义显示条件
                    if (this.options.hasOwnProperty(key) && this.options[key]['displayExpr']) {
                        this.bindWatcher(key, this.options[key]['displayExpr']);
                    }
                }
            },
            bindWatcher (attr, expr) { // 根据自定义显示条件，添加watcher~ Author by Dio Zhu. on 2018.5.15
                if (!expr || !expr.exp || !expr.key || !expr.val) return;
                let key = 'currentValue.' + expr.key;
                let fn = (v) => {
                    this.$logger.log('【v-form】bindWatcher.fn: ', v);
                    if (expr.exp === '!==') {
                        if (expr.val !== v) this.$set(this.options[attr], 'hidden', false);
                        else this.$set(this.options[attr], 'hidden', true);
                    }
                };
                this.$watch(key, fn.bind(this));
                let arr = expr.key.split('.'), obj = null;
                [].forEach.call(arr, (v, i) => {
                    if (i === 0) obj = this.currentValue[v];
                    else obj = obj[v];
                });
                fn(obj);
                this.$logger.log('【v-form】bindWatcher: ', expr, expr.key, obj);
            }
            // checkLogic () {
            //     this.$logger.log('【v-form】checkLogic... ');
            // }
        }
    };
</script>
<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .v-form {

        .v-cell {
            /*min-height: pxTorem(55);*/

            .v-cell__value span {
                color: #1B1B20;
                font-weight: 500;
            }
        }

        .v-form-item.last .v-cell__wrapper{
            border: none;
        }

        .v-form__divider {
            min-height: pxTorem(12);
            background: #F8F9F8;
            overflow: auto;
            border-top: 1px solid #E3E3E3;
            border-bottom: 1px solid #E3E3E3;

            > p {
                box-sizing: border-box;
                height: pxTorem(20);
                margin: pxTorem(11) 0 pxTorem(4) 0;
                padding: 0 0 0 pxTorem(20);
                font-size: pxTorem(14);
                line-height: pxTorem(20);
                color: #9D9D9D;
            }
        }
    }
</style>
