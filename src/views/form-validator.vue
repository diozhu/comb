<template>
    <div class="page page-form-validator">
        <h2>表单校验</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr>
                    <td>validator: {}</td>
                    <td>
                        <p>1,key：string 必填</p>
                        <p>2,required：boolean 可选 验证是否必填</p>
                    </td>
                    <td>object</td>
                    <td>false</td>
                    <td>{}</td>
                </tr>
            </table>
        </div>

        <h2>示例</h2>
        <ul class="listview listview-form custom">
            <!--验证开头元素切换显示-->
            <li v-if="show1">
                <v-field v-model="value4" title="验证长度(必)" placeholder="限长2~5..." :limit="10" :validator="validator4"></v-field>
            </li>
            <li>
                <v-field v-model="value5" title="验证邮箱" placeholder="邮箱校验..." :validator="validator5"></v-field>
            </li>
            <li >
                <v-field v-model="value6" title="验证手机(必)" placeholder="手机号码校验: 1开头的11位数字..." :validator="validator6"></v-field>
            </li>
            <!--验证中间元素切换显示-->
            <li v-if="show2">
                <v-field v-model="value7" title="验证电话" placeholder="电话号码校验: 010-88889999..." :validator="validator7"></v-field>
            </li>
            <li>
                <v-field v-model="value8" title="验证身份证" placeholder="身份证校验..." :validator="validator8"></v-field>
            </li>
            <li>
                <v-field v-model="value9" title="验证数字(必)" placeholder="只能输入数字..." :validator="validator9"></v-field>
            </li>
            <li>
                <v-field v-model="value10" title="验证过滤" placeholder="不能输入特殊字符..." :validator="validator10"></v-field>
            </li>
            <!--验证结尾元素切换显示-->
            <li v-if="show3">
                <v-field v-model="value11" title="验证用户名" placeholder="全中文5个字、全英文20个字..." :validator="validator11"></v-field>
            </li>
        </ul>
        <div style="display:flex;flex-flow:row nowrap;justify-content: space-around;align-items: center">
            <v-button style="margin:10px;" @click="show1 = !show1">切换验证长度隐藏显示</v-button>
            <v-button style="margin:10px;" @click="show2 = !show2">切换验证电话隐藏显示</v-button>
            <v-button style="margin:10px;" @click="show3 = !show3">切换验证用户名隐藏显示</v-button>
        </div>
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
            show1: true,
            show2: true,
            show3: true,
            validator: this.$validation,
            value4: '',
            validator4: {
                key: 'validator4',
                required: true,
                minLength: {
                    rule: 2,
                    message: '长度最少输入2个字哦~'
                },
                maxLength: {
                    rule: 5,
                    message: '长度最多输入5个字哦~'
                }
            },
            value5: '',
            validator5: {
                key: 'validator5',
                mail: {
                    rule: 1,
                    message: '请输入正确邮箱~'
                }
            },
            value6: '',
            validator6: {
                key: 'validator6',
                required: {
                    message: '手机为必选项，不能为空'
                },
                mobile: {
                    rule: 1,
                    message: '请输入正确手机号码~'
                }
            },
            value7: '',
            validator7: {
                key: 'validator7',
                tel: {
                    rule: 1,
                    message: '请输入正确电话号码~'
                }
            },
            value8: '',
            validator8: {
                key: 'validator8',
                card: {
                    rule: 1,
                    message: '请输入正确身份证号码~'
                }
            },
            value9: '',
            validator9: {
                key: 'validator9',
                required: {
                    message: '验证数字不能为空'
                },
                numbers: {
                    rule: 1,
                    message: '只能输入数字~'
                }
            },
            value10: '',
            validator10: {
                key: 'validator10',
                text: {
                    rule: 1,
                    message: '不能输入特殊字符~'
                }
            },
            value11: '',
            validator11: {
                key: 'validator11',
                username: {
                    rule: 1,
                    message: '用户名全中文或全英文哦~'
                }
            }
        };
    },
    mounted () {
        this.$logger.log('form-field mounted... ');
        this.init();
    },
    watch: {
    },
    methods: {
        init () {
        },
        onSubmit () {
            if (this.validate()) {
                this.$toast('验证全部通过');
            }
        },
        validate () { // 校验。 Author by Dio Zhu on 2017.8.16
            console.error(this.$validation, '当前全局validation对象');
            /** 调用方法：统一返回校验信息，要求每个校验项都有message，如果没有，用统一话术 */
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
