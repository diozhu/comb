<template>
    <div class="page page-form">
        <h2>表单</h2>

        <div class="attributes">
            <h2>API</h2>
            <table>
                <tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>
                <tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>
            </table>
        </div>

        <h2>默认</h2>
        <div class="blank"></div>

        <v-form v-model="detail" :options="options"></v-form>
        <div class="blank"></div>
        <div class="form-buttons">
            <v-button size="small" @click="handleSubmit">必填验证</v-button>
        </div>

        <div class="blank"></div>
    </div>
</template>

<script>
import vForm from '../vendor/v-form';
import vRow from '../vendor/v-row.vue';
import vCell from '../vendor/v-cell.vue';
import vButton from '../vendor/v-button.vue';

export default {
    components: { vRow, vCell, vForm, vButton },
    data () {
        return {
            detail: {},
            options: {}
        };
    },
    mounted () {
        this.$logger.log('form.mounted... ');
        this.init();
    },
    watch: {
        // detail (val) {
        //     this.$logger.log('form.watch.detail: ', val);
        // }
    },
    methods: {
        init () {
            this.$logger.log('form.init... ');
            // this.validator = this.$validation;
            this.$set(this, 'detail', { // 初始化值对象绑定，picker类需按对象初始化。Author by Dio Zhu. on 2018.5.11
                username: '',
                sex: 1,
                studentIdengyType: {key: 2, values: '护照'},
                studentIdenty: '',
                birthday: '2001-02-03',
                region: [{key: 2, values: '广东'}, {key: 5, values: '深圳'}, {key: 1754, values: '南山区'}],
                // region: '',
                address: '',
                mobile: ''
            });
            this.$set(this, 'options', { // 初始化组件类型。Author by Dio Zhu. on 2018.5.11
                username: {
                    label: '学员姓名',
                    type: 'text',
                    placeholder: '请输入学员姓名'
                },
                sex: {
                    label: '学员性别',
                    type: 'radio',
                    options: [{label: '男', value: 0}, {label: '女', value: 1}],
                    mode: 'list horizontal',
                    radioClasses: 'disk'
                },
                studentIdengyType: { // 证件类型
                    label: '证件类型',
                    type: 'picker',
                    slots: [
                        {
                            flex: 1,
                            values: [
                                {key: 1, values: '身份证'},
                                {key: 2, values: '护照'},
                                {key: 3, values: '军人身份证'},
                                {key: 4, values: '社会保障卡'},
                                {key: 5, values: '港澳通行证'},
                                {key: 6, values: '台湾居民来往大陆通行证'},
                                {key: 7, values: '户口薄'},
                                {key: 8, values: '临时居民身份证'},
                                {key: 9, values: '外国人永久居留证'}
                            ]
                        }
                    ],
                    key: 'key',
                    valueKey: 'values'
                },
                studentIdenty: {
                    label: '证件号码',
                    type: 'text',
                    placeholder: '请输入学员证件号码'
                },
                birthday: {
                    label: '学员生日',
                    type: 'datetime-picker',
                    pickerType: 'date',
                    placeholder: '请选择学员生日'
                },
                region: {
                    label: '所在地区',
                    type: 'picker',
                    pickerType: 'region',
                    placeholder: '请选择所在地区',
                    slots: [ // 城市地址数据   -----v1.0.5 修改地区选择默认值  -by dinglei 2018.3.26
                        { flex: 1, className: 'slot1', textAlign: 'center' },
                        { flex: 1, className: 'slot2', textAlign: 'center' },
                        { flex: 1, className: 'slot3', textAlign: 'center' }
                    ],
                    key: 'key',
                    valueKey: 'values'
                },
                mobile: {
                    label: '电话',
                    type: 'number',
                    placeholder: '请输入电话号码'
                }
            });
            // 初始化证件类型picker的默认位置
            this.$set(this.options.studentIdengyType.slots[0], 'defaultIndex', 1);
        },
        handleSubmit () {
            this.$logger.log('form.handleSubmit... ');
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form {

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
