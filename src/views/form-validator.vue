<template>
    <div class="page page-form-validator">
        <h2>表单校验</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>必填项</h2>
        <ul class="listview listview-form custom">
            <li>
                <v-field v-model="value1" field="txt1" title="标题" placeholder="必填..." :validator="validator1"></v-field>
            </li>
            <li>
                <v-cell title="标题文字"></v-cell>
            </li>
            <li>
                <v-field v-model="value2" field="txt2" placeholder="必填文字.." type="textarea" rows="2" :limit="20" :validator="validator2"></v-field>
            </li>
        </ul>
        <div class="form-buttons">
            <v-button size="small" @click="handleSubmitRequire">必填验证</v-button>
        </div>

        <h2>输入字数校验</h2>
        <ul class="listview listview-form custom">
            <li>
                <v-field v-model="value3" field="txt3" title="标题" placeholder="限长2~5..." :limit="10" :validator="validator3"></v-field>
            </li>
            <li>
                <v-cell title="标题文字"></v-cell>
            </li>
            <li>
                <v-field v-model="value4" field="txt4" placeholder="限长5~10.." type="textarea" rows="2" :limit="20" :validator="validator4"></v-field>
            </li>
        </ul>
        <div class="form-buttons">
            <v-button size="small" @click="handleSubmitLength">长度验证</v-button>
        </div>

        <h2>其他类型校验</h2>
        <ul class="listview listview-form custom">
            <li>
                <v-field v-model="value5" title="邮箱" placeholder="邮箱校验..." :validator="validator5"></v-field>
            </li>
            <li>
                <v-field v-model="value6" title="手机" placeholder="手机号码校验: 1开头的11位数字..." :validator="validator6"></v-field>
            </li>
            <li>
                <v-field v-model="value7" title="电话" placeholder="电话号码校验: 010-88889999..." :validator="validator7"></v-field>
            </li>
            <li>
                <v-field v-model="value8" title="身份证" placeholder="身份证校验..." :validator="validator8"></v-field>
            </li>
            <li>
                <v-field v-model="value9" title="数字" placeholder="只能输入数字..." :validator="validator9"></v-field>
            </li>
            <li>
                <v-field v-model="value10" title="过滤" placeholder="不能输入特殊字符..." :validator="validator10"></v-field>
            </li>
            <li>
                <v-field v-model="value11" field="username" title="姓名" placeholder="全中文5个字、全英文20个字..." :validator="validator11"></v-field>
            </li>
        </ul>
        <p class="desc red">{{validator11Desc}}</p>

        <v-row :gutter.Number="30" v-sticky.bottom="0">
            <v-button size="full" styles="rectangle" @click="onSubmit">submit</v-button>
        </v-row>

        <div class="blank"></div>
    </div>
</template>

<script>
import vField from '../vendor/v-field';
import vRow from '../vendor/v-row.vue';
import vCell from '../vendor/v-cell.vue';
import vButton from '../vendor/v-button.vue';
import Vue from 'vue';
import sticky from '../vendor/v-sticky.js';
Vue.use(sticky);

export default {
    components: { vRow, vCell, vField, vButton },
    data () {
        return {
            // validator: {username: {username: ''}},
            validator: this.$validation,
            value1: '',
            validator1: {
                required: {
                    rule: true,
                    message: '亲~value1得填~'
                }
            },
            value2: '',
            validator2: {
                required: true
            },
            value3: '',
            validator3: {
                minLength: {
                    rule: 2,
                    message: 'value3最少输入2个字哦~'
                },
                maxLength: {
                    rule: 5,
                    message: 'value3最多输入5个字哦~'
                }
            },
            value4: '',
            validator4: {
                minLength: 5,
                maxLength: 10
            },
            value5: '',
            validator5: {
                mail: {
                    rule: 1,
                    message: 'value5请输入正确邮箱~'
                }
            },
            value6: '',
            validator6: {
                mobile: {
                    rule: 1,
                    message: 'value6请输入正确手机号码~'
                }
            },
            value7: '',
            validator7: {
                tel: {
                    rule: 1,
                    message: 'value7请输入正确电话号码~'
                }
            },
            value8: '',
            validator8: {
                card: {
                    rule: 1,
                    message: 'value8请输入正确身份证号码~'
                }
            },
            value9: '',
            validator9: {
                numbers: {
                    rule: 1,
                    message: 'value9只能输入数字~'
                }
            },
            value10: '',
            validator10: {
                text: {
                    rule: 1,
                    message: 'value10不能输入特殊字符~'
                }
            },
            value11: '',
            validator11: {
                username: {
                    rule: 1,
                    message: 'value11用户名全中文或全英文哦~'
                },
                warnFunc: this.showDesc
            },
            validator11Desc: '',
            value12: '',
            value13: '',
            valueDisabled: '被禁用'
        };
    },
    mounted () {
        this.$logger.log('form-field mounted... ');
        this.init();
    },
    watch: {
        // '$validation.username.username' (val) {
        //     this.$logger.log('form-field.watch.validation... ', val);
        // },
        // 'validator.username.username' (val) {
        //     this.$logger.log('form-field.watch.validation.username... ', val);
        //     if (val) this.validator11Desc = val;
        //     else this.validator11Desc = '';
        // }
    },
    methods: {
        init () {
            this.$logger.log('form-field.init... ');
            // this.validator = this.$validation;
        },
        showDesc (msg) {
            this.$logger.log('form-field.showDesc... ', ...arguments);
            this.validator11Desc = msg;
        },
        handleSubmitRequire () { // 必填验证
            this.$logger.log('form-field.handleSubmitRequire... ', this.$validation);
            let v1 = this.$validation['txt1'].required,
                v2 = this.$validation['txt2'].required;
            if (v1) {
                this.$toast(typeof v1 === 'string' ? v1 : '请填写value1~');
                return false;
            }
            if (v2) {
                this.$toast(typeof v2 === 'string' ? v2 : '自定义：请填写value2~');
                return false;
            }
            this.$toast('必填项校验完啦~');
        },
        handleSubmitLength () { // 长度验证
            this.$logger.log('form-field.handleSubmitLength... ', this.$validation);
            let v1 = this.$validation['txt3'].minLength || this.$validation['txt3'].maxLength,
                v2 = this.$validation['txt4'].minLength;
            if (v1) {
                this.$toast(typeof v1 === 'string' ? v1 : '长度不对~');
                return false;
            }
            if (v2) {
                this.$toast(typeof v2 === 'string' ? v2 : '自定义：长度不对~');
                return false;
            }
            this.$toast('长度校验完啦~');
        },
        onSubmit () {
            // this.$logger.log('form-validator.onSubmit: ', this.$validation);
            if (this.validate()) {
                this.$toast('全部校验完毕，可以提交了~');
            }
        },
        validate () { // 校验。 Author by Dio Zhu on 2017.8.16
            this.$logger.log('form-validator.validate: ', this.$validation);
            /** 方法一：自定每个校验项的返回，如果要用此方式，必须传入：field="value1"来作为标识，否则会用默认的_uid作为标识 */
            // let v1 = this.$validation['value1'].required,
            //     v2 = this.$validation['value2'].required;
            // if (v1) {
            //     this.$toast(typeof v1 === 'string' ? v1 : '请填写value1~');
            //     return false;
            // }
            // if (v2) {
            //     this.$toast(typeof v2 === 'string' ? v2 : '自定义：请填写value2~');
            //     return false;
            // }
            /** 方法二：统一返回校验信息，要求每个校验项都有message，如果没有，用统一话术 */
            for (let key in this.$validation) {
                if (this.$validation.hasOwnProperty(key)) {
                    for (let k in this.$validation[key]) {
                        if (this.$validation[key].hasOwnProperty(k)) {
                            this.$toast(this.$validation[key][k]);
                            return false;
                        }
                    }
                }
            }
            return true;
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form-validator {

        .v-cell__value {
            margin-left: 0;
        }

        .form-buttons {
            text-align: right;
            padding: pxTorem(10) pxTorem(22);
        }

        .custom {

            .placeholder-blue {

                input,
                textarea {
                    &::-webkit-input-placeholder {/* WebKit browsers */
                        color: #007aff;
                    }
                }
            }

            .v-field__core {

                &.error {
                    border-left: #fa5a5a pxTorem(3px) solid;
                    padding-left: pxTorem(7px);
                }
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
