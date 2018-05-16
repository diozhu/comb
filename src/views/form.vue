<template>
    <div class="page page-form">
        <!--<h2>表单</h2>-->

        <!--<div class="attributes">-->
            <!--<h2>API</h2>-->
            <!--<table>-->
                <!--<tr><th>参数</th><th>说明</th><th>类型</th><th>可选</th><th>默认</th></tr>-->
                <!--<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>-->
            <!--</table>-->
        <!--</div>-->

        <h2>默认</h2>
        <!--<div class="blank"></div>-->

        <v-form v-model="detail" :options="options" :dividers="dividers" :validators="validators"></v-form>
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
            options: {},
            dividers: {},
            validators: {}
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
                studentIdentyType: {key: 2, values: '护照'},
                studentIdentyNo: '',
                birthday: '2001-02-03',
                region: [{key: 2, values: '广东'}, {key: 5, values: '深圳'}, {key: 1754, values: '南山区'}],
                address: '',
                begin_time: '2018-05-20',
                // 分隔符
                mobile: '',
                desc: ''
            });
            // 初始化组件类型。Author by Dio Zhu. on 2018.5.11
            this.$set(this.options, 'username', { label: '学员姓名', type: 'text', placeholder: '请输入学员姓名' });
            this.$set(this.options, 'sex', { label: '学员性别', type: 'radio', options: [{label: '男', value: 0}, {label: '女', value: 1}], mode: 'list horizontal', radioClasses: 'disk' });
            this.$set(this.options, 'studentIdentyType', { label: '证件类型', type: 'picker', key: 'key', valueKey: 'values', slots: [ { flex: 1, values: [ {key: 1, values: '身份证'}, {key: 2, values: '护照'}, {key: 3, values: '军人身份证'}, {key: 4, values: '社会保障卡'}, {key: 5, values: '港澳通行证'}, {key: 6, values: '台湾居民来往大陆通行证'}, {key: 7, values: '户口薄'}, {key: 8, values: '临时居民身份证'}, {key: 9, values: '外国人永久居留证'} ] } ] });
            this.$set(this.options, 'studentIdentyNo', { label: '证件号码', type: 'text', placeholder: '请输入学员证件号码' });
            this.$set(this.options, 'birthday', { label: '学员生日', type: 'datetime-picker', pickerType: 'date', placeholder: '请选择学员生日', displayExpr: { key: 'studentIdentyType.key', exp: '!==', val: 1 } });
            this.$set(this.options, 'region', { label: '所在地区', type: 'picker', pickerType: 'region', placeholder: '请选择所在地区', key: 'key', valueKey: 'values', slots: [ { flex: 1, className: 'slot1', textAlign: 'center' }, { flex: 1, className: 'slot2', textAlign: 'center' }, { flex: 1, className: 'slot3', textAlign: 'center' } ] });
            this.$set(this.options, 'address', { label: '详细地址', type: 'text', placeholder: '请输入您的通讯地址', placeholderRemark: '＊此地址会用于赠品邮寄，请您仔细填写' });
            this.$set(this.options, 'begin_time', { label: '课程有效期', type: 'datetime-picker', pickerType: 'date', placeholder: '请选择课程开始时间' });
            // 分隔符
            this.$set(this.options, 'mobile', { label: '电话', type: 'tel', placeholder: '请输入电话号码' });
            this.$set(this.options, 'desc', { label: '备注', type: 'textarea', placeholder: '请输入您的备注', limit: 10, alarm: 5 });

            // 设定表单分割
            this.$set(this, 'dividers', {
                0: {label: '必填项'}, // 根据位置分割，按照对象的下标数，放在字段前面
                begin_time: {}       // 放在某个字段之后
            });

            // 设定校验规则，通过key指定validator指令提示的顺序。Author by Dio Zhu. on 2018.5.16
            // this.$set(this.validators, 'username', { key: Object.keys(this.validators).length + '_username', required: { rule: true, message: '亲~姓名得填~' }, minLength: { rule: 2, message: '姓名最少输入2个字哦~' } });
            // 证件号码的字段标识必须以'IdengyType'结尾！ Author by Dio Zhu. on 2018.5.16
            this.$set(this.validators, 'studentIdentyType', { key: Object.keys(this.validators).length + '_studentIdentyType', required: { rule: true, message: '请选择学员证件类型' } });
            // 证件号码的校验需要通过证件类型判断，证件号码的字段标识必须以'IdengyNo'结尾，组件内部会找到其对应的证件类型进行选择判断！ Author by Dio Zhu. on 2018.5.16
            this.$set(this.validators, 'studentIdentyNo', { key: Object.keys(this.validators).length + '_studentIdentyNo', required: { rule: true, message: '请填写学生证件号码' } });

            // // 初始化证件类型picker的默认位置
            // this.$set(this.options.studentIdengyType.slots[0], 'defaultIndex', 1);
        },
        validate () {
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
        handleSubmit () {
            this.$logger.log('form.handleSubmit... ', this.$validation);
            if (this.validate()) {
                this.$toast('校验完毕~');
            }
        }
    }
};
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "../scss/variables";
    @import "../scss/mixins";

    .page-form {

        .v-form {

            .v-cell__value {

                .alarm {
                    color: darkred;
                }
            }
        }

        .blank {
            width: 100%;
            height: pxTorem(100px);
        }
    }
</style>
