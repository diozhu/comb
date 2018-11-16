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
            <li  @click="open('picker1')">
                <v-field is-link title="证件类型(必)" placeholder="请选择学员证件类型" :validator="validatorStudentIdengy" v-model="studentIdengyType"></v-field>
            </li>
            <li>
                <v-field v-model="studentIdenty" title="证件号码(必)" placeholder="请输入学员证件号码"  :validator="validatorStudentNumber"></v-field>
            </li>
            <li>
                <v-field v-model="value11" title="验证数字(必)" placeholder="只能输入数字..." :validator="validator11"></v-field>
            </li>
            <li>
                <v-field v-model="value12" title="验证过滤" placeholder="不能输入特殊字符..." :validator="validator12"></v-field>
            </li>
            <!--验证结尾元素切换显示-->
            <li v-if="show3">
                <v-field v-model="value13" title="验证用户名" placeholder="全中文5个字、全英文20个字..." :validator="validator13"></v-field>
            </li>
        </ul>
        <div style="display:flex;flex-flow:row nowrap;justify-content: space-around;align-items: center">
            <v-button style="margin:10px;" @click="show1 = !show1">切换验证长度隐藏显示</v-button>
            <v-button style="margin:10px;" @click="show2 = !show2">切换验证电话隐藏显示</v-button>
            <v-button style="margin:10px;" @click="show3 = !show3">切换验证用户名隐藏显示</v-button>
        </div>
        <v-row :gutter="30" v-sticky.bottom="0">
            <v-button size="full" styles="rectangle" @click="onSubmit">submit</v-button>
        </v-row>

        <div class="blank"></div>
        <v-popup v-model="popupStudent" ref='picker1' class="v-popup-4">
            <div class="picker-button">
                <span class="picker-cancel" @click="pickerClose('picker1')">取消</span>
                <span class="picker-confirm" @click="confirm('picker1')">确定</span>
            </div>
        <v-picker ref='vpicker1' :slots="cardSlots"  valueKey="values" @change="onPicker1Change" :visible-item-count="5" :show-toolbar="true"></v-picker>
        </v-popup>
    </div>
</template>

<script>
import vField from 'comb-ui/src/vendors/v-field';
import vRow from 'comb-ui/src/vendors/v-row.vue';
import vCell from 'comb-ui/src/vendors/v-cell.vue';
import vButton from 'comb-ui/src/vendors/v-button.vue';
import vPicker from 'comb-ui/src/vendors/v-picker';
import vPopup from 'comb-ui/src/vendors/v-popup';
import Vue from 'vue';
import sticky from 'comb-ui/src/vendors/v-sticky.js';
Vue.use(sticky);

export default {
    components: { vRow, vCell, vField, vButton, vPicker, vPopup },
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
            value11: '',
            validator11: {
                key: 'validator11',
                required: {
                    message: '验证数字不能为空'
                },
                numbers: {
                    rule: 1,
                    message: '只能输入数字~'
                }
            },
            value12: '',
            validator12: {
                key: 'validator12',
                text: {
                    rule: 1,
                    message: '不能输入特殊字符~'
                }
            },
            value13: '',
            validator13: {
                key: 'validator13',
                username: {
                    rule: 1,
                    message: '用户名全中文或全英文哦~'
                }
            },
            //                证件类型部分（包括监护人部分，备用监护人不验证）
            valstudentIdengyTypeId: '',
            studentIdengyTypeId: '',
            studentIdengyType: '',
            validatorStudentIdengy: {
                key: 'validator9',
                required: {
                    rule: true,
                    message: '请选择学员证件类型'
                }
            },
            studentIdenty: '',
            validatorStudentNumber: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写学生证件号码'
                }
            },
            //                身份证验证
            validatorCard: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写身份证号码'
                },
                card: {
                    message: '请输入正确的身份证号'
                }
            },
            //                护照验证
            validatorPassport: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写护照号码'
                },
                passport: {
                    message: '请输入正确的护照号码'
                }
            },
            //                军人身份证验证
            validatorSorderIdenty: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写军人身份证号'
                },
                sorderIdenty: {
                    message: '请输入正确的军人身份证号'
                }
            },
            //                社保卡验证
            validatorSocialSecurity: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写社保卡号'
                },
                socialSecurityCard: {
                    message: '请输入正确的社保卡号'
                }
            },
            //                港澳通行证验证
            validatorHongKongMacauPasser: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写港澳通行证号'
                },
                hongKongMacauPasser: {
                    message: '请填写正确的港澳通行证号'
                }
            },
            //                台湾往来大陆通行证
            validatorTaiwanPasser: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写台湾往来大陆通行证号'
                },
                taiwanPasser: {
                    message: '请填写正确的台湾往来大陆通行证号'
                }
            },
            //                户口簿验证
            validatorHouseHoldRegister: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写户口簿号码'
                },
                taiwanPasser: {
                    message: '请填写正确的户口簿号码'
                }
            },
            //                临时居民身份证验证
            validatorInterimId: {
                key: 'validator10',
                required: {
                    rule: true,
                    message: '请填写临时居民身份证号码'
                },
                taiwanPasser: {
                    message: '请填写正确的临时居民身份证号码'
                }
            },
            popupStudent: false,
            cardSlots: [
                {
                    flex: 1,
                    values: [
                        {key: '1', values: '身份证'},
                        {key: '2', values: '护照'},
                        {key: '3', values: '军人身份证'},
                        {key: '4', values: '社会保障卡'},
                        {key: '5', values: '港澳通行证'},
                        {key: '6', values: '台湾居民来往大陆通行证'},
                        {key: '7', values: '户口薄'},
                        {key: '8', values: '临时居民身份证'},
                        {key: '9', values: '外国人永久居留证'}
                    ]
                }
            ]
        };
    },
    mounted () {
        console.log('form-field mounted... ');
        this.init();
    },
    watch: {
        studentIdengyTypeId () {
            if (this.studentIdengyTypeId === '0') {
                this.studentIdengyType = '';
            } else {
                this.studentIdengyType = this.cardSlots[0].values[this.studentIdengyTypeId - 1].values;
            }
        }
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
        },
        // 通过id返回验证条件
        findValidate (id) {
            if (id === '0') {
                return this.validatorCard;
            };
            if (id === '1') {
                return this.validatorCard;
            };
            if (id === '2') {
                return this.validatorPassport;
            };
            if (id === '3') {
                return this.validatorSorderIdenty;
            };
            if (id === '4') {
                return this.validatorSocialSecurity;
            };
            if (id === '5') {
                return this.validatorHongKongMacauPasser;
            };
            if (id === '6') {
                return this.validatorTaiwanPasser;
            };
            if (id === '7') {
                return this.validatorHouseHoldRegister;
            };
            if (id === '8') {
                return this.validatorInterimId;
            };
        },
        open (picker) {
            let slotValue = {
                key: this.studentIdengyTypeId || '1',
                values: this.studentIdengyType || '身份证'
            };
            if (picker === 'picker1') this.$refs['v' + picker].setSlotValue(0, slotValue);
            this.$refs[picker].open();
        },
        onPicker1Change (picker, values) {
            if (values[0] > values[1]) {
                picker.setSlotValue(1, values[0]);
            }
            this.valstudentIdengyTypeId = values[0].key;
        },
        confirm () {
            this.studentIdengyTypeId = this.valstudentIdengyTypeId;
            //       这个逻辑是为了处理点开拨盘后没有滑动直接点击确定后，没有显示的问题
            if (this.studentIdengyTypeId === '0') {
                this.studentIdengyTypeId = '1';
            }
            this.validatorStudentNumber = this.findValidate(this.studentIdengyTypeId);
            let that = this;
            console.error(that.validatorStudentNumber, '切换了证件类型，当前选择的验证条件是');
            console.error(that.$validation, '切换了证件类型，当前全局validation为');
            this.pickerClose('picker1');
        },
        pickerClose (picker) {
            this.$refs[picker].close();
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
